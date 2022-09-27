/*
(
    id                  '主键'
    user_id             '用户id'
    total_amount         '订单总金额',
    pay_type            '支付方式：0->未支付；1->支付宝；2->微信',
    source_type         '订单来源：0->PC订单；1->移动端订单',
    status              '订单状态：0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭;',
    oder_list           '订单商品列表'
);
* */
module.exports = (req, res) => {
    return res.json([
        // 待付款
        {
            id: 1,
            user_id: 1,
            total_amount: 1386,
            pay_type: 1,
            source_type: 1,
            status: 0,
            oder_list: [
                // https://item.m.jd.com/product/100016034372.html?pps=reclike.FO4O605:FOFO00496B92443O13O6:FOFO0FF0416O440012FO3O643O7FFF5021813FO7O17496B92441BDDB9B4A9E76E9B
                {
                    id: 1,
                    product_id: 1,
                    product_brand_id: 1,
                    product_category_id: 1,
                    product_sku_id: 1,

                    product_name: 'Apple iPhone 12 Pro Max (A2412) 256GB 海蓝色 支持移动联通电信5G 双卡双待手机',
                    product_pic: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/122505/19/15070/68848/5f861494Ebe330db5/24bc162f493ec940.jpg!q80.dpg.webp',
                    product_quantity: 1,
                    product_price: 888,
                    product_attr: [{"key": "颜色", "value": "黑色"}, {"key": "容量", "value": "32G"}]
                },
                // https://item.m.jd.com/product/100009069453.html?pps=reclike.FO4O605:FOFO0049014B8D3O13O6:FOFO0FF0416O823O7FO3O643O7FFF5021813FO7O1749014B8D192EB9B4BA551F33
                {
                    id: 3,
                    product_id: 2,
                    product_brand_id: 2,
                    product_category_id: 2,
                    product_sku_id: 2,

                    product_name: '海尔（Haier）桶式吸尘器 15L大容量干湿吹家用强劲大吸力吸尘器HZ-T615',
                    product_pic: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/152279/39/15610/110617/600e32e0E9d316e34/210224ca8a147eb6.jpg!q80.dpg.webp',
                    product_quantity: 2,
                    product_price: 249,
                    product_attr: [{"key": "套餐", "value": "高性价比多重洁净过滤"}]
                },
            ]
        },
        {
            id: 2,
            user_id: 1,
            total_amount: 888,
            pay_type: 1,
            source_type: 1,
            status: 0,
            oder_list: [
                // https://item.m.jd.com/product/100016034372.html?pps=reclike.FO4O605:FOFO00496B92443O13O6:FOFO0FF0416O440012FO3O643O7FFF5021813FO7O17496B92441BDDB9B4A9E76E9B
                {
                    id: 1,
                    product_id: 1,
                    product_brand_id: 1,
                    product_category_id: 1,
                    product_sku_id: 1,

                    product_name: 'Apple iPhone 12 Pro Max (A2412) 256GB 海蓝色 支持移动联通电信5G 双卡双待手机',
                    product_pic: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/122505/19/15070/68848/5f861494Ebe330db5/24bc162f493ec940.jpg!q80.dpg.webp',
                    product_quantity: 1,
                    product_price: 888,
                    product_attr: [{"key": "颜色", "value": "黑色"}, {"key": "容量", "value": "32G"}]
                },
            ]
        },
        // 待发货
        {
            id: 3,
            user_id: 1,
            total_amount: 1386,
            pay_type: 1,
            source_type: 1,
            status: 1,
            oder_list: [
                // https://item.m.jd.com/product/100016034372.html?pps=reclike.FO4O605:FOFO00496B92443O13O6:FOFO0FF0416O440012FO3O643O7FFF5021813FO7O17496B92441BDDB9B4A9E76E9B
                {
                    id: 1,
                    product_id: 1,
                    product_brand_id: 1,
                    product_category_id: 1,
                    product_sku_id: 1,

                    product_name: 'Apple iPhone 12 Pro Max (A2412) 256GB 海蓝色 支持移动联通电信5G 双卡双待手机',
                    product_pic: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/122505/19/15070/68848/5f861494Ebe330db5/24bc162f493ec940.jpg!q80.dpg.webp',
                    product_quantity: 1,
                    product_price: 888,
                    product_attr: [{"key": "颜色", "value": "黑色"}, {"key": "容量", "value": "32G"}]
                },
                // https://item.m.jd.com/product/100009069453.html?pps=reclike.FO4O605:FOFO0049014B8D3O13O6:FOFO0FF0416O823O7FO3O643O7FFF5021813FO7O1749014B8D192EB9B4BA551F33
                {
                    id: 3,
                    product_id: 2,
                    product_brand_id: 2,
                    product_category_id: 2,
                    product_sku_id: 2,

                    product_name: '海尔（Haier）桶式吸尘器 15L大容量干湿吹家用强劲大吸力吸尘器HZ-T615',
                    product_pic: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/152279/39/15610/110617/600e32e0E9d316e34/210224ca8a147eb6.jpg!q80.dpg.webp',
                    product_quantity: 2,
                    product_price: 249,
                    product_attr: [{"key": "套餐", "value": "高性价比多重洁净过滤"}]
                },
            ]
        },
        // 已发货
        {
            id: 4,
            user_id: 1,
            total_amount: 1386,
            pay_type: 1,
            source_type: 1,
            status: 2,
            oder_list: [
                // https://item.m.jd.com/product/100016034372.html?pps=reclike.FO4O605:FOFO00496B92443O13O6:FOFO0FF0416O440012FO3O643O7FFF5021813FO7O17496B92441BDDB9B4A9E76E9B
                {
                    id: 1,
                    product_id: 1,
                    product_brand_id: 1,
                    product_category_id: 1,
                    product_sku_id: 1,

                    product_name: 'Apple iPhone 12 Pro Max (A2412) 256GB 海蓝色 支持移动联通电信5G 双卡双待手机',
                    product_pic: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/122505/19/15070/68848/5f861494Ebe330db5/24bc162f493ec940.jpg!q80.dpg.webp',
                    product_quantity: 1,
                    product_price: 888,
                    product_attr: [{"key": "颜色", "value": "黑色"}, {"key": "容量", "value": "32G"}]
                },
                // https://item.m.jd.com/product/100009069453.html?pps=reclike.FO4O605:FOFO0049014B8D3O13O6:FOFO0FF0416O823O7FO3O643O7FFF5021813FO7O1749014B8D192EB9B4BA551F33
                {
                    id: 3,
                    product_id: 2,
                    product_brand_id: 2,
                    product_category_id: 2,
                    product_sku_id: 2,

                    product_name: '海尔（Haier）桶式吸尘器 15L大容量干湿吹家用强劲大吸力吸尘器HZ-T615',
                    product_pic: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/152279/39/15610/110617/600e32e0E9d316e34/210224ca8a147eb6.jpg!q80.dpg.webp',
                    product_quantity: 2,
                    product_price: 249,
                    product_attr: [{"key": "套餐", "value": "高性价比多重洁净过滤"}]
                },
            ]
        },
        // 已完成
        {
            id: 5,
            user_id: 1,
            total_amount: 1386,
            pay_type: 1,
            source_type: 1,
            status: 3,
            oder_list: [
                // https://item.m.jd.com/product/100016034372.html?pps=reclike.FO4O605:FOFO00496B92443O13O6:FOFO0FF0416O440012FO3O643O7FFF5021813FO7O17496B92441BDDB9B4A9E76E9B
                {
                    id: 1,
                    product_id: 1,
                    product_brand_id: 1,
                    product_category_id: 1,
                    product_sku_id: 1,

                    product_name: 'Apple iPhone 12 Pro Max (A2412) 256GB 海蓝色 支持移动联通电信5G 双卡双待手机',
                    product_pic: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/122505/19/15070/68848/5f861494Ebe330db5/24bc162f493ec940.jpg!q80.dpg.webp',
                    product_quantity: 1,
                    product_price: 888,
                    product_attr: [{"key": "颜色", "value": "黑色"}, {"key": "容量", "value": "32G"}]
                },
                // https://item.m.jd.com/product/100009069453.html?pps=reclike.FO4O605:FOFO0049014B8D3O13O6:FOFO0FF0416O823O7FO3O643O7FFF5021813FO7O1749014B8D192EB9B4BA551F33
                {
                    id: 3,
                    product_id: 2,
                    product_brand_id: 2,
                    product_category_id: 2,
                    product_sku_id: 2,

                    product_name: '海尔（Haier）桶式吸尘器 15L大容量干湿吹家用强劲大吸力吸尘器HZ-T615',
                    product_pic: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/152279/39/15610/110617/600e32e0E9d316e34/210224ca8a147eb6.jpg!q80.dpg.webp',
                    product_quantity: 2,
                    product_price: 249,
                    product_attr: [{"key": "套餐", "value": "高性价比多重洁净过滤"}]
                },
            ]
        },
        {
            id: 6,
            user_id: 1,
            total_amount: 249,
            pay_type: 1,
            source_type: 1,
            status: 3,
            oder_list: [
                // https://item.m.jd.com/product/100009069453.html?pps=reclike.FO4O605:FOFO0049014B8D3O13O6:FOFO0FF0416O823O7FO3O643O7FFF5021813FO7O1749014B8D192EB9B4BA551F33
                {
                    id: 3,
                    product_id: 2,
                    product_brand_id: 2,
                    product_category_id: 2,
                    product_sku_id: 2,

                    product_name: '海尔（Haier）桶式吸尘器 15L大容量干湿吹家用强劲大吸力吸尘器HZ-T615',
                    product_pic: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/152279/39/15610/110617/600e32e0E9d316e34/210224ca8a147eb6.jpg!q80.dpg.webp',
                    product_quantity: 1,
                    product_price: 249,
                    product_attr: [{"key": "套餐", "value": "高性价比多重洁净过滤"}]
                },
            ]
        }
    ]);
}