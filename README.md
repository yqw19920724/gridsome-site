# cnpm i 安装

# 连接strapi 4的坑

1.没法使用`@gridsome/source-strapi`插件

2.使用restApi请求获取strapide的数据，请看`gridsome.server.js`，注意关系数据和媒体等数据需要qs查询

3.查询关系型数据的时候如果没有展示，很有可能是数据对象没有的权限没有放开，需要去strapi端开启find权限

4.查询语句，参照strapi官网restapi部分
```js
const query = qs.stringify({
    filters: {
        tags: {
            title: {
                $in: ['html'],
            }
        }
    },
    populate: '*',
}, {
    encodeValuesOnly: true,
});
```

5.没办法拿到数据的创建者`createdBy`字段，目前我没找到