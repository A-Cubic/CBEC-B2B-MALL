const fetch = require('node-fetch');
const URL = "http://api.llwell.net/web";
// const URL = "http://192.168.0.109:9999/web";

module.exports = {
	catalog : function(req,res,body,callback){
		// http://192.168.1.101:8080/index_mall.json
		fetch(URL+'/catalog', {
			method: 'POST',
            body :JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
		}) .then(res => res.json())
			.then(json => {
			if(json.state == '0'){
				callback (json.results);
			}
		});
	},
	mallIndex : function(req,res,callback){
		fetch(URL+'/adver', {
			method: 'POST'
		}) .then(res => res.json())
			.then(json => {
			if(json.state == '0'){
				callback (json.results);
			}
		});
	},
	condition : function(req,res,callback){
		fetch(URL+'/Screen', {
			method: 'POST'
		}) .then(res => res.json())
			.then(json => {
			if(json.state == '0'){
				callback (json.results);
			}
		});
	},
	goodsList : function(req,res,body,callback){
		fetch(URL+'/GoodsList', {
			method: 'POST',
			body :JSON.stringify(body),
			headers: { 'Content-Type': 'application/json' }
		}) .then(res => res.json())
			.then(json => {
				callback (json);
		});
	},
	goodsDetails : function(req,res,goodsId,callback){
		var body = {
			goodsId : goodsId
		};
		fetch(URL+'/Goods', {
			method: 'POST',
			body :JSON.stringify(body),
			headers: { 'Content-Type': 'application/json' }
		}) .then(res => res.json())
			.then(json => {
				// console.log(json.results.goods[0]);
				if(json.state == '0'){
					callback (json.results.goods[0]);
				}
			});
	}

}