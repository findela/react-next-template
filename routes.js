const routes = require('next-routes');
module.exports =
    routes()
        .add({name: 'index', pattern: '/', page: 'Landing'})
        .add({name: 'blog', pattern: '/blog', page: 'Blog'});
