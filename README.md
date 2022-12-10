# wxt-start-site
现在各种导航页层出不穷，各种花里胡哨，使用起来都不符合自己的胃口，所以想着建立一个适合自己的导航站点，找了一些大佬的开源项目，最终选择了 [5iux](https://github.com/5iux/5iux.github.io) 大佬的静态页版本，轻量适合我。

#### 主要优化：

* 文件分层
* 增加 /data/data.json配置文件，对搜索、网站进行动态配置
* 增加dockerfile，可直接启动nginx服务器

#### json示例：

~~~json
{
    "search":[
        {
            "id":"type-google",
            "value":"https://www.google.com.hk/search?hl=zh-CN&q=",
            "place":"google",
            "scan":"<span style='color:#3B83FA'>G</span>"
        }
    ],
    "mylist":[
        {
            "title":{
                "icon":"icon-remen",
                "name":"热门常用"
            },
            "item":[
                {
                    "href":"https://v.qq.com/",
                    "icon":"icon-tengxunshipin",
                    "name":"腾讯视频"
                }
            ]
        }
    ]
}
~~~

#### 示例

* [我的导航](https://start.wangxt.online)

