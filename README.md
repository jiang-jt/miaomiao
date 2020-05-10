# miaomiao

## 技术栈
vue-cli3 + vuex + vue-router + webpack +axios + ES6 + sass +flex + better-scroll + element-ui

## 项目运行
git clone https://github.com/jiang-jt/miaomiao.git

cd miaomiao

npm install 

npm run serve

## 关于接口数据
此项目所用的接口为豆瓣电影接口，偶尔数据返回速度慢：
* 获取正在热映的电影：https://douban.uieee.com/v2/movie/in_theaters
访问参数：
start : 数据的开始项
 
count：单页条数
 
city：城市
 
* 获取电影Top250：https://douban.uieee.com/v2/movie/top250
访问参数：
start : 数据的开始项
 
count：单页条数
 
* 获取即将上映电影：https://douban.uieee.com/v2/movie/coming_soon
访问参数：
start : 数据的开始项
 
count：单页条数
 
 
* 电影搜索：https://douban.uieee.com/v2/movie/search**电影搜索无法使用了**
访问参数：
start : 数据的开始项
 
count：单页条数
 
q：要搜索的电影关键字
 
tag：要搜索的电影的标签
 
* 电影详情：https://douban.uieee.com/v2/movie/subject/:id
访问参数：电影id
如：电影《小飞象》的电影id为：25924056，搜索此电影的详细信息：
https://api.douban.com/v2/movie/subject/25924056
 
 ## 效果演示
 <a href="http://203.195.250.110">查看demo请戳这里</a>（请用Chrome手机模式预览）

 ## 所遇到问题
 1. 使用axios请求接口时遇到跨域问题
 * 手动创建vue.config.js配置文件。
 * 在配置文件中设置proxy，vue-cli2中是配置proxyTable。
 2. 在电影搜索时使用watch侦听input的数据，数据发生变化时发送异步请求，这造成异步请求过多。
 * 使用axios的cancelToken进行函数防抖。
 3. 使用axios请求时，异步请求的结果还没回来，就已经开始渲染页面了，此时页面上绑定的数据为空，导致报错。
 * 使用loading，在发送请求时，展示loading组件，当数据返回后，展示数据页面。
 4. 电影详情页中，因为使用了better-scroll,导致内部元素使用fixed定位失效。
 * 原因是div中有transform属性导致position:fixed失效了。
 * 将需要fixed定位的元素放在transform之外就解决了。
 5. 详情页中，在使用swiper对剧照实现左右滑动功能时失效。
 * 原因是在数据变化之前已经初始化了，使用this.$nextTick在回调函数中初始化swiper解决。
 
