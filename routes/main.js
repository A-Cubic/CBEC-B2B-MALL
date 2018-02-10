module.exports = function(app){
	app.get('/login',function(req,res){
	  res.render('login')
	});
	app.get('/mall',function(req,res){
		res.render('index_mall')
	})
	app.get('/goodsList',function(req,res){
		res.render('goods_list')
	})
}