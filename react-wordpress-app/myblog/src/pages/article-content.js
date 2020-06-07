import $ from "jquery";
const rootURL = 'http://marcointhemiddle.xyz/';

const config = {
    rootURL: rootURL,
    taskRoute: `${rootURL}/wp-json/wp/v2/posts`,
};


let articles = '';
let the_request = $.ajax({
    type: 'GET',
    url: config.taskRoute,
    async: false,
});

the_request.done(function(data){

    articles = data.map(data => (
    
    {
        name: data.title.rendered,
        title: data.link,
        excerpt: data.excerpt.rendered,
        content: data.content.rendered
    }

    ));

});
export default articles;
