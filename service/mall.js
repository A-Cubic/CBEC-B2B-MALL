const fetch = require('node-fetch');

module.exports = {
	catalog : function(req,res,callback){
		fetch('http://api.llwell.net/web/catalog', {
			method: 'POST'
		}) .then(res => res.json())
			.then(json => {
			if(json.state == '0'){
				callback (json.results);
			}
		});
	},
	mallIndex : function(req,res,callback){
		fetch('http://api.llwell.net/web/adver', {
			method: 'POST'
		}) .then(res => res.json())
			.then(json => {
			if(json.state == '0'){
				callback (json.results);
			}
		});
	},
	condition : function(req,res,callback){
		fetch('http://api.llwell.net/web/Screen', {
			method: 'POST'
		}) .then(res => res.json())
			.then(json => {
			if(json.state == '0'){
				callback (json.results);
			}
		});
	},
	goodsList : function(req,res,callback){
		fetch('http://api.llwell.net/web/GoodsList', {
			method: 'POST'
		}) .then(res => res.json())
			.then(json => {
				callback (json);
		});
	},

}