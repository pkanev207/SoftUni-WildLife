const router = require('express').Router();

const { getPosts } = require('../services/post');

router.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' });
});

router.get('/catalog', async (req, res) => {
    const posts = await getPosts();
    res.render('catalog', { title: 'Catalog', posts });
});

module.exports = router;
