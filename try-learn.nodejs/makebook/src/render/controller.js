var controller = (function() {

    var c = {};
    c.init = function(data) {
        this.title = data.title;
        this.list = data.list;
		this.control();
    };


    c.control = function() {
        var html = "<h1 style='text-align:center;'>"+this.title+"</h1>";
		 $("#html").append(html);
        for (var i = 0; i < this.list.length; i++) {
            var type = this.list[i].type;
            if (type == "text") {
                text.init(this.list[i]);
                text.genHtml(i);
                // html += text.html;
            } else if (type == "jiaohu") {
                jiaohu.init(this.list[i]);
                jiaohu.genHtml(i);
                // html += jiaohu.html;
            } else if (type == "timu") {
                timu.init(this.list[i]);
                timu.genHtml(i);
            } else if (type == "talk") {
                talk.init(this.list[i]);
                talk.genHtml(i);
            }
        }
        // console.log(html)
        //         $("#content").html(html);
        $("#html").append("<div style='width:100%;height:100px;'></div>")
    };

    return c;

})();




var data = {
    "title": "@第1课时　负数的认识@",
    "list": [{
        "type": "text",
        "title": "目标在心",
        "titleImg": "img/title_mubiao.jpg",
        "contents": ["{{img/1_1_001.jpg}}"]
    }, {
        "type": "timu",
        "title": "联想预学",
        "titleImg": "title_lianxiangyuxue.jpg",
        "contents": ["1. （复习题） 根据之前学过的知识，完成下题。", "说出3的意义。", "echo:　把一个数加上3，求它们的和。", "分数的加法的意义：", "echo:　把两个分数合并成一个分数的运算。", "2. （预习题） 预习教材第2页例1，完成下面题目。", "（1）0  ℃表示什么意思？", "echo: 0 ℃表示淡水开始结冰的温度。", "（2）-3 ℃和3 ℃各表示什么意思？", "echo:-3 ℃表示零下3摄氏度，3 ℃表示零上3摄氏度。"],
        "style": "font-size:12px;font-family:宋体;text-alight:center",
        "title_style": "font-size:20px"
    }, {
        "type": "text",
        "title": "探学教材",
        "titleImg": "img/title_mubiao.jpg",
        "contents": []
    }, {
        "type": "talk",
        "title": "知识点1　温度的读写法",
        "titleImg": "zhishidian.jpg",
        "contents": ["下面是中央气象台2012年1月21日下午发布的六个城市的气温预报（2012年1月21日20时―2012年1月22日20时）。", "{{img zhishidian1_1_1_001.jpg}}", "阅读与理解", "博士：认真观察图片，你能得到哪些数学信息？", "乐乐：我从天气预报中见过表示温度的符号是“℃”，图片中上海的气温是1 ℃～4 ℃。", "享享：我知道海口的气温是20 ℃～23 ℃。", "分析与解答", "博士：【思维导引】 大家说一下你们各自是怎样思考的。", "乐乐：天气预报上通常先说最低气温，然后说最高气温，那么长沙的最低气温是0 ℃最高气温是3 ℃。", "享享：我认为图片上的温度，“～”左边的温度表示最低气温，“～”右边的温度表示最高气温。", "博士：大家说一下你们是怎样填写表格的，并说一说各数表示的意思。", "小贴士：0℃表示淡水开始结冰的温度。比0℃低的温度叫零下温度，通常在数字前加“-”（符号）。比0℃高的温度叫零上温度，在数字前加“+”（正号），一般情况下可省略不写。", "乐乐：先写“～”右边表示的最高气温，再写“～”左边表示的最低气温。", "博士：【方法探究】 发现生活中两种相反意义的量。0 ℃是淡水结冰的分界点，比0 ℃高的温度称为零上温度，比0 ℃低的温度称为零下温度。3 ℃和-3 ℃表示的意义不相同。3 ℃表示比0 ℃高3 ℃，-3 ℃表示比0 ℃低3 ℃。", "-3 ℃表示零下3摄氏度，读作负三摄氏度。比0 ℃高的温度称为零上温度，通常在数字前加“  ”（正号），一般情况下可省略不写，如： 3 ℃表示零上3摄氏度，读作正三摄氏度，也可以写成3 ℃，读作三摄氏度。", "博士：【规范解答】", "{{img table1_1_1.jpg}}", "回顾与反思", "1．0 ℃不是没有温度，而是表示零上温度和零下温度的分界点。", "2．零上温度高于0 ℃和零下温度，零下温度中，负号后面的数越大，温度反而越低。"]
    }, {
        "type": "talk",
        "title": "知识点2　负数的意义和读、写法",
        "titleImg": "zhishidian.jpg",
        "contents": ["{{img zhishidian1_1_2_001.jpg}}", "阅读与理解", "博士：认真观察图片，你们能得到哪些数学信息？", "乐乐：我知道第一栏是支出或存入钱的时间，第三栏是支出（-）或存入（+）的钱数，单位是元。", "分析与解答", "博士：【思维导引】 大家说一下你们是怎样思考的。", "乐乐：因为“  ”表示存入，“-”表示支出，所以“-500.00”表示支出500元，“500.00”表示存入500元。", "享享：“500.00”和“-500.00”正好相反，一个是存入，一个是支出。", "博士：谁可以把自己的发现小结一下？", "乐乐：为了表示两种相反意义的量，如零上温度和零下温度、收入与支出等，需要用两种数。一种是我们以前学过的数，如3、500、4.7，这些数是正数； 另一种是在这些数的前面添上“-”（负号）的数，如-3、-500、-4.7等，这些数是负数。", "享享：负数的读法是：先读“负”，再读数，如-3读作负三。正数前面的“  ”可以省略不写。如果为了与负数对比，也可以加上正号，如  3，读作正三。", "博士：你们还在什么地方见过负数？", "乐乐：我在妈妈的家庭收支账本上见过负数。", "享享：我在冰箱上见过负数，冷冻室的温度是-18 ℃。", "博士：【方法探究】 要先弄明白支出用“-”号表示，存入用“+ ”号表示。再根据“+”“-”号找出存入和支出的钱数。2000.00、500.00这样的数表示存入的钱数，-500.00、 -132.00这样的前面有“-”号的数表示支出的钱数。", "【规范解答】 2000.00表示存入2000元； -500.00表示支出500元；", "-132.00表示支出132元；500.00表示存入500元。", "回顾与反思", "1．通常，我们可以利用正数和负数表示两种相反意义的量，一般把收入、零上温度、增加、提高等记作正数，把与之对应的支出、零下温度、减少、降低等记作负数。", "2．一般情况，我们把一定的量作为标准记作0，超出的量记作正数，不足的量记作负数。比如往往把平均温度、平均身高记作0。"],
        "style": "font-size:16px;font-family:宋体;text-alight:center",
        "title_style": "font-size:20px"
    }, {


        "type": "jiaohu",
        "title": "易错考题",
        "titleImg": "title_yicuokaoti.jpg",
        "contents": ["例　判断：0 ℃表示什么也没有。（　　）", "错误答案：√", "分析：0 ℃不是没有温度，而是表示零上温度和零下温度的分界点。", "正确解答：-"]
    }, {
        "type": "timu",
        "title": "测学跟踪",
        "titleImg": "title_cexuegenzong.jpg",
        "contents": ["1.填一填。", "（1）说出下列各数表示的意思。", "　  -21 ℃　表示（  零下21摄氏度  ） 37 ℃　表示（  零上37摄氏度  ）", "（2）-87　读作（  负八十七  ）  -5 ℃ 　读作（  负五摄氏度  ）", "　  负四十五　写作（      -45      ）负六十　写作（  -60   ）", "　  零上十二摄氏度　记作（    12 ℃    ） 零下三十摄氏度　记作（  -30 ℃  ）", "2. 爸爸的银行卡上存入为“  ”，支出为“-”，那么-320元表示（  支出320元  ），   3600元表示（  存入3600元  ）。"]
    }, {
        "type": "jiaohu",
        "title": "提优加分",
        "titleImg": "title_tiyoujiafen.jpg",
        "contents": ["【提优链接点】 利用负数的意义，在数轴上可以求出两个数相差几个单位长度。", "例：北京市某日的气温为-8 ℃～4 ℃，这一天北京市的温差是多少？", "分析：将题目中的已知条件“气温为-8 ℃～4 ℃”进行转化，在数轴上标出-8和4两个点，在数轴上观察-8和4之间有几格。", "解答：在数轴上找到表示-8和4的点，-8和4之间有12格，所以-8 ℃和4 ℃之间的温差是12 ℃。"]
    }]
}
