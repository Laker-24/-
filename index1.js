async function get(url) {
    let res = await fetch(url); // 调用fetch()，前面要加await
    let json = await res.json(); // 将res(服务器响应)解析为JSON格式
     return json;
    }
    async function run() {
    // colleges是JSON数组
     let colleges = await get("data.json");
    // 获得id=tpl的script模板的内部内容(innerHTML)
    let tpl = document.getElementById("tpl").innerHTML;
    // 使用map遍历colleges数组：填充模板并返回html串
    let html = colleges.map( (college) => {
    // 回顾：数组map用法
     // 替换script模板内容
     let result = tpl
    .replace( "{{site}}", college.site )
    .replace( "{{name}}", college.name );
    return result;
    }).join(""); //map返回的是数组，使用join函数把数组元素连接为字符串
     document.querySelector(".nav").innerHTML = html;
    } //end run
    run(); // 执行一下