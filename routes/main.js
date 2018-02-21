var async = require('async');
var mall = require('../service/mall');

module.exports = function(app){
	app.get('/login',function(req,res){
	  res.render('login')
	});
	app.get('/mall',function(req,res){
		var json={
			catelog : {},
			mallIndex : {}
		};
		async.series([
		    function(callback) {
		        mall.catalog(req,res,function(results){
	    		 callback(null,results);
	    		});
		    },
		    function(callback) {
		    	mall.mallIndex(req,res,function(results){
	    		 callback(null,results);
	    		});
		    }
		],
		// optional callback
		function(err, results) {
			json.catelog = results[0];
			json.mallIndex = results[1];
		    // results is now equal to ['one', 'two']
		    res.render('index_mall',{results:json});
		});
		
	});
	app.get('/goodsList',function(req,res){
		var body = {
			sendType : req.query.sendType ? req.query.sendType : '',//提货方式
			country : req.query.country ? req.query.country : '',//原产国
			catelog1 : req.query.catelog1 ? req.query.catelog1 : '',//商品分类1
			catelog2 : req.query.catelog2 ? req.query.catelog2 : '',//商品分类2
			catelog3 : req.query.catelog3 ? req.query.catelog3 : '',//商品分类3
			brands:  req.query.brands ? req.query.brands : '',//品牌
			search : req.query.search ? req.query.search : '',//搜索内容
			sort :  req.query.sort ? req.query.sort : '',//排序方式
			pageNumber : req.query.pageNumber ? req.query.pageNumber : '',//多少页
			pageSize : req.query.pageSize ? req.query.pageSize : ''//页面显示多少个商品
		}
		var json = {
			condition : {},
			goodsList : {}
		}
		async.series([
		    function(callback) {
		        mall.condition(req,res,function(results){
	    		 callback(null,results);
	    		});
		    },
		    function(callback) {
		    	 mall.goodsList(req,res,body,function(results){
	    		 callback(null,results);
	    		});
		    }
		],
		function(err, results) {
			json.condition = results[0];
			json.goodsList = results[1];
		    res.render('goods_list',{results:json});
		});
	});
	app.post('/goodsList',function(req,res){
		var body = {
			sendType : '',
			country : '',
			catelog1 :  '',
			catelog2 : '',
			catelog3 : '',
			brands: '',
			search : '',
			sort : '',
			pageNumber : '',
			pageSize : ''
		}
		for(var key in body){
			if (key == req.body.key) {
				body[key] = req.body.value
			}
		}
		mall.goodsList(req,res,body,function(results){
		  res.json(results);
		});
	})
	app.get('/goodsDetails/:id',function(req,res){
		var goodsId = req.params.id;
		mall.goodsDetails(req,res,goodsId,function(results){
			if (results) {
				res.render('goods_detail',{results:results})
			}else{
				res.redirect('/mall');
			}
		})
	});
}