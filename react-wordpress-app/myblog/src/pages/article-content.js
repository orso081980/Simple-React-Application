import $ from "jquery";
const rootURL = 'http://marcointhemiddle.xyz/';

const config = {
    rootURL: rootURL,
    taskRoute: `${rootURL}/wp-json/wp/v2/posts`,
};

function getArticles(done) {
    return new Promise((resolve,reject) => {
        fetch(config.taskRoute, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', },
        })
        .then(response => response.json())
        .then(data => {
            resolve(data.map(data => ({
                name: data.title.rendered,
                title: data.link,
                excerpt: data.excerpt.rendered,
                content: data.content.rendered
            })));
        })
        .catch((error) => {
            reject(error)
        });
    });
}

export default getArticles;
