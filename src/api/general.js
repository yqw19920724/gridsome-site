const axios = require('axios')
const qs = require('qs');

/**
 * 获取文章列表数据
 * @param {*} addCollection 添加进collection的方法
 */
const getGeneral = async (addCollection) => {
    const query = qs.stringify({
        populate: '*',
    }, {
        encodeValuesOnly: true,
    });
    const collection = addCollection('General')
    const { data } = await axios.get(`${process.env.GRIDSOME_API_URL}/general?${query}`)
    const item = data.data
    const cover = item.attributes.cover.data.attributes.url
    collection.addNode({
        id: item.id,
        title: item.attributes.title,
        subTitle: item.attributes.subTitle,
        cover,
        createdAt: item.attributes.createdAt,
        updatedAt: item.attributes.updatedAt,
        publishedAt: item.attributes.publishedAt,
    })
}

module.exports = {
    getGeneral
}