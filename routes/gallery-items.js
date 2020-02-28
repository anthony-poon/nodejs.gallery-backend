const express = require('express');
const router = express.Router();
const { GalleryItem, User, GalleryImage } = require("../models");
const {GALLERY_ASSET_PATH} = require("../const");

router.get('/', async function(req, res, next) {
    const items = await GalleryItem.findAll({include: User});
    res.json(items.map(item => ({
        id: item.id,
        header: item.header,
        content: item.content,
        url: "images/" + item.fileName
    })));
});

router.get('/:id([0-9]+)', async function(req, res, next) {
    const item = await GalleryItem.findByPk(req.params.id, {include: GalleryImage});
    if (!item) {
        res.sendStatus(404);
    } else {
        res.json({
            id: item.id,
            header: item.header,
            content: item.content,
            images: item.galleryImages.map(image => req.baseUrl + "/images/" + image.fileName)
        });
    }
});

router.get('/images/:fileName', async function(req, res, next) {
    res.sendFile(req.params.fileName, {
        root: GALLERY_ASSET_PATH
    }, function (error) {
        res.sendStatus(404)
    });
});

module.exports = router;
