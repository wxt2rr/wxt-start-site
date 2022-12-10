$(function() {
    $.ajax({
        url: "data/data.json",
        type: "GET",
        dataType: "json", 
        success: function(data) { 
            // 拼接搜索
            var $searchList = $("#search-ul");
            $searchList.empty();
            var searchDatas = data.search;
            var sHtml = "";
            for(var i in searchDatas){
                var searchData = searchDatas[i];
                var id = searchData.id;
                var value = searchData.value;
                var place = searchData.place;
                var scan = searchData.scan;
                sHtml += "<li><input checked='' hidden='' type='radio' name='type' id='"+id+"' value='"+value+"' data-placeholder='"+place+"'><label for='"+id+"'>"+scan+"</label></li>\n";
            };
            $searchList.html(sHtml);

            
            // 拼接常用网站
            var $mylist = $("#mylist");
            $mylist.empty();
            var ml = data.mylist;
            var html = "<ul class='mylist row'>";
            for(var i in ml){
                var rows = ml[i];
                var title = rows.title;
                var tIcon = title.icon;
                var tName = title.name;
                html += "<li class='title'><svg class='icon' aria-hidden='true'><use xlink:href='#"+tIcon+"'></use></svg>"+tName+"</li>\n";

                var items = rows.item;
                for(var x in items){
                    var item = items[i];
                    var ihref = item.href;
                    var iIcon = item.icon;
                    var iName = item.name;
                     
                    html += "<li class='col-3 col-sm-3 col-md-3 col-lg-1'><a rel='nofollow' href='"+ihref+"' target='_blank'><svg class='icon' aria-hidden='false'><use xlink:href='#"+iIcon+"'></use></svg><span>"+iName+"</span></a></li>";
                };
            };
            html += "</ul>";
            $mylist.html(html);        
        }
    })
})