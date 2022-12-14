/*
(
   id                   '主键',
   parent_id            '上级分类的编号：0表示一级分类',
   name                 '名称',
   icon                 '图标',
   description          '描述',
   level                '分类级别：0->1级；1->2级',
   show_status          '显示状态：0->不显示；1->显示',
   sort                 '排序'
   children             '二级分类'
);
* */
module.exports = (req, res) => {
    return res.json([
        {
            id                   :1,
            parent_id            :0,
            name                 :'手机数码',
            icon                 :'',
            description          :'',
            level                :0,
            show_status          :1,
            sort                 :1,
            children             :[
                {
                    id                   :17,
                    parent_id            :1,
                    name                 :'小米',
                    icon                 :'https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    description          :'',
                    level                :1,
                    show_status          :1,
                    sort                 :1
                },
                {
                    id                   :18,
                    parent_id            :1,
                    name                 :'华为',
                    icon                 :'https://img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    description          :'',
                    level                :1,
                    show_status          :1,
                    sort                 :1
                },
                {
                    id                   :19,
                    parent_id            :1,
                    name                 :'苹果',
                    icon                 :'https://img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                    description          :'',
                    level                :1,
                    show_status          :1,
                    sort                 :1
                },
                {
                    id                   :20,
                    parent_id            :1,
                    name                 :'Vivo',
                    icon                 :'https://img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                    description          :'',
                    level                :1,
                    show_status          :1,
                    sort                 :1
                },
                {
                    id                   :21,
                    parent_id            :1,
                    name                 :'OPPO',
                    icon                 :'https://img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                    description          :'',
                    level                :1,
                    show_status          :1,
                    sort                 :1
                },
                {
                    id                   :22,
                    parent_id            :1,
                    name                 :'魅族',
                    icon                 :'https://img20.360buyimg.com/focus/s140x140_jfs/t12820/326/909017718/7138/68cde747/5a169243N40eca33c.jpg',
                    description          :'',
                    level                :1,
                    show_status          :1,
                    sort                 :1
                },
                {
                    id                   :23,
                    parent_id            :1,
                    name                 :'三星',
                    icon                 :'https://img13.360buyimg.com/focus/s140x140_jfs/t11509/131/2348573811/3425/4f20fe6/5a16925aN8a6dfd03.png',
                    description          :'',
                    level                :1,
                    show_status          :1,
                    sort                 :1
                },
                {
                    id                   :24,
                    parent_id            :1,
                    name                 :'一加',
                    icon                 :'https://img13.360buyimg.com/focus/s140x140_jfs/t11209/71/2351231464/4158/fc0c415c/5a16923fNfc14307e.jpg',
                    description          :'',
                    level                :1,
                    show_status          :1,
                    sort                 :1
                },
                {
                    id                   :25,
                    parent_id            :1,
                    name                 :'努比亚',
                    icon                 :'https://img11.360buyimg.com/focus/s140x140_jfs/t1/108301/34/7712/3254/5e5f0de9E4ca2f4b5/c664966ee1d36d47.jpg',
                    description          :'',
                    level                :1,
                    show_status          :1,
                    sort                 :1
                },
            ]
        },
        {
            id                   :2,
            parent_id            :0,
            name                 :'家用电器',
            icon                 :'',
            description          :'',
            level                :0,
            show_status          :1,
            sort                 :1,
            children             :[
                {
                    id                   :26,
                    parent_id            :2,
                    name                 :'电压力锅',
                    icon                 :'https://img13.360buyimg.com/focus/s140x140_jfs/t13069/193/944900508/2525/d7c9efc/5a17f21dN905aaf4c.jpg',
                    description          :'',
                    level                :1,
                    show_status          :1,
                    sort                 :1
                },
                {
                    id                   :27,
                    parent_id            :2,
                    name                 :'电水壶',
                    icon                 :'https://img30.360buyimg.com/focus/s140x140_jfs/t12559/262/969294499/3436/8c0ce9c9/5a17f1d2N8078d5e6.jpg',
                    description          :'',
                    level                :1,
                    show_status          :1,
                    sort                 :1
                },
                {
                    id                   :28,
                    parent_id            :2,
                    name                 :'电磁炉',
                    icon                 :'https://img13.360buyimg.com/focus/s140x140_jfs/t11209/197/2422417970/2811/d167e855/5a17f1edN56abbe6e.jpg',
                    description          :'',
                    level                :1,
                    show_status          :1,
                    sort                 :1
                },
                {
                    id                   :29,
                    parent_id            :2,
                    name                 :'微波炉',
                    icon                 :'https://img11.360buyimg.com/focus/s140x140_jfs/t13267/86/981023661/1871/6fae5f11/5a17f203N50016f64.jpg',
                    description          :'',
                    level                :1,
                    show_status          :1,
                    sort                 :1
                },
                {
                    id                   :30,
                    parent_id            :2,
                    name                 :'豆浆机',
                    icon                 :'https://img11.360buyimg.com/focus/s140x140_jfs/t14065/132/988058896/1688/99cd0a3d/5a17f229Nc4c681fb.jpg',
                    description          :'',
                    level                :1,
                    show_status          :1,
                    sort                 :1
                },
                {
                    id                   :31,
                    parent_id            :2,
                    name                 :'料理机',
                    icon                 :'https://img13.360buyimg.com/focus/s140x140_jfs/t11284/298/2465125571/2619/ffe2cde5/5a17f237Nb9978251.jpg',
                    description          :'',
                    level                :1,
                    show_status          :1,
                    sort                 :1
                },
                {
                    id                   :32,
                    parent_id            :2,
                    name                 :'面包机',
                    icon                 :'https://img12.360buyimg.com/focus/s140x140_jfs/t12367/112/996967887/2205/e8c82674/5a17f20aNde6af185.jpg',
                    description          :'',
                    level                :1,
                    show_status          :1,
                    sort                 :1
                },
                {
                    id                   :33,
                    parent_id            :2,
                    name                 :'咖啡机',
                    icon                 :'https://img12.360buyimg.com/focus/s140x140_jfs/t14074/98/970407567/2153/72273815/5a17f208N6ea88eba.jpg',
                    description          :'',
                    level                :1,
                    show_status          :1,
                    sort                 :1
                },
                {
                    id                   :34,
                    parent_id            :2,
                    name                 :'面条机',
                    icon                 :'https://img10.360buyimg.com/focus/s140x140_jfs/t11251/274/2452446468/6155/a25e078d/5a17c946N052e26a3.jpg',
                    description          :'',
                    level                :1,
                    show_status          :1,
                    sort                 :1
                },
            ]
        },
        {
            id                   :3,
            parent_id            :0,
            name                 :'美妆护肤',
            icon                 :'',
            description          :'',
            level                :0,
            show_status          :1,
            sort                 :1
        },
        {
            id                   :4,
            parent_id            :0,
            name                 :'汽车生活',
            icon                 :'',
            description          :'',
            level                :0,
            show_status          :1,
            sort                 :1
        },
        {
            id                   :5,
            parent_id            :0,
            name                 :'生鲜超市',
            icon                 :'',
            description          :'',
            level                :0,
            show_status          :1,
            sort                 :1
        },
        {
            id                   :6,
            parent_id            :0,
            name                 :'母婴童装',
            icon                 :'',
            description          :'',
            level                :0,
            show_status          :1,
            sort                 :1
        },
        {
            id                   :7,
            parent_id            :0,
            name                 :'图书音像',
            icon                 :'',
            description          :'',
            level                :0,
            show_status          :1,
            sort                 :1
        },
        {
            id                   :8,
            parent_id            :0,
            name                 :'户外运动',
            icon                 :'',
            description          :'',
            level                :0,
            show_status          :1,
            sort                 :1
        },
        {
            id                   :9,
            parent_id            :0,
            name                 :'酒水饮料',
            icon                 :'',
            description          :'',
            level                :0,
            show_status          :1,
            sort                 :1
        },
        {
            id                   :10,
            parent_id            :0,
            name                 :'家装家具',
            icon                 :'',
            description          :'',
            level                :0,
            show_status          :1,
            sort                 :1
        },
        {
            id                   :11,
            parent_id            :0,
            name                 :'箱包手袋',
            icon                 :'',
            description          :'',
            level                :0,
            show_status          :1,
            sort                 :1
        },
        {
            id                   :12,
            parent_id            :0,
            name                 :'钟表珠宝',
            icon                 :'',
            description          :'',
            level                :0,
            show_status          :1,
            sort                 :1
        },
        {
            id                   :13,
            parent_id            :0,
            name                 :'玩具乐器',
            icon                 :'',
            description          :'',
            level                :0,
            show_status          :1,
            sort                 :1
        },
        {
            id                   :14,
            parent_id            :0,
            name                 :'宠物生活',
            icon                 :'',
            description          :'',
            level                :0,
            show_status          :1,
            sort                 :1
        },
        {
            id                   :15,
            parent_id            :0,
            name                 :'男装男鞋',
            icon                 :'',
            description          :'',
            level                :0,
            show_status          :1,
            sort                 :1
        },
        {
            id                   :16,
            parent_id            :0,
            name                 :'女装女鞋',
            icon                 :'',
            description          :'',
            level                :0,
            show_status          :1,
            sort                 :1
        },
    ]);
}