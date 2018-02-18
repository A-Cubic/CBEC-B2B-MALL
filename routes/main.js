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
		    	 mall.goodsList(req,res,function(results){
	    		 callback(null,results);
	    		});
		    	 callback(null,results);
		    }
		],
		function(err, results) {
			json.condition = results[0];
			json.goodsList = results[1];
		    res.render('goods_list',{results:json});
		});
	});
	app.get('/goodsDetails/:id',function(req,res){
		res.render('goods_detail')
	});
}