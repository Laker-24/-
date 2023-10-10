async function get(url) {
  let res = await fetch(url); // 调用fetch()，前面要加await
  let json = await res.json(); // 将res(服务器响应)解析为JSON格式
  return json;
}
let url =
  "https://api.openweathermap.org/data/2.5/forecast?q=Wuhan,cn&appid=800f49846586c3ba6e7052cfc89af16c";
let show = document.getElementById("show");
show.innerHTML = "未来5天12点气温:<br>";
let btn = document.getElementById("btn");
btn.addEventListener("click", async () => {
  let weather = await get(url); //调用get
  console.log(weather);

  let list = weather.list;
  for (let x of list) {
    let d = new Date(x.dt_txt); // dt_txt字段存放的是日期时间串
    if (d.getHours() == 12) {
      let temp = x.main.temp - 273.15; //temp为K氏温度值，转为摄氏度
      show.innerHTML +=
        d.toLocaleDateString() + " 12:00温度:" + temp.toFixed(2) + "<br>";
    }
  }
});
