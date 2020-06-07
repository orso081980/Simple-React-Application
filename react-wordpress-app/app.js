const rootURL = 'https://cea.langara.ca/';

const config = {
	rootURL: rootURL,
	taskRoute: `${rootURL}/wp-json/wp/v2/posts?_embed`,
}

let target = $('#resutl');

fetch(config.taskRoute, {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
	},
})
.then(response => response.json())
.then(data => {
	
	let str = [];
	let bau = data.map(function (data) {
		//console.log(data._embedded['wp:featuredmedia']['0'].source_url);
		str += `<div class="quote-title">${data.title.rendered}</div>`;
		str += `<div class="quote-content">${data.excerpt.rendered}</div>`;
		str += `<img src="${data._embedded['wp:featuredmedia']['0'].source_url}">`
	});
	target.html(str);
	
	// let str = [];
	// Object.keys(data).forEach(function (item) {
	// 	str += `<div class="quote-title">${data[item].title.rendered}</div>`;
	// 	str += `<div class="quote-content">${data[item].content.rendered}</div>`;
	// });
	// target.html(str);
})
.catch((error) => {
	console.error('Error:', error);
});
