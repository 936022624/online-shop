/*
(
   id                   '主键',
   title                '内容',
   note                 '备注',
   url                  '链接地址',
   type                 '通知类型：0->PC；1->mobile',
   status               '上下线状态：0->下线；1->上线',
   sort                 '排序',
);
* */
module.exports = (req, res) => {
  return res.json([
    {
      id: 1,
      title: "新品出售啦1",
      note: "通知备注",
      url: "http://www.baidu.com",
      type: 1,
      status: 1,
      sort: 0,
    },
    {
      id: 2,
      title: "新品出售啦2",
      note: "通知备注",
      url: "http://www.baidu.com",
      type: 1,
      status: 1,
      sort: 2,
    },
    {
      id: 3,
      title: "新品出售啦3",
      note: "通知备注",
      url: "http://www.baidu.com",
      type: 1,
      status: 1,
      sort: 3,
    },
  ]);
};
