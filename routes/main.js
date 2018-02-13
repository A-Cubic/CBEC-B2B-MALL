const fetch = require('node-fetch');
module.exports = function(app){
	app.get('/login',function(req,res){
	  res.render('login')
	});
	app.get('/mall',function(req,res){
		fetch('http://api.llwell.net/web/catalog', {
			method: 'POST'
		}) .then(res => res.json())
			.then(json => {
				console.log(json);
				if(json.state == '0'){
					res.render('index_mall',{results:json.results})
				}
			});

	});
	app.get('/goodsList',function(req,res){
		res.render('goods_list')
	});
	app.get('/goodsDetails/:id',function(req,res){
		res.render('goods_detail')
	});
}