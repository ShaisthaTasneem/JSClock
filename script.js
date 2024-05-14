// date= h,m,s
let date1 = new Date();

let date = date1.getDate();
let month = date1.getMonth();
let year = date1.getFullYear();
let text1 = document.getElementById("time");


// console.log(d, h, m, s);
// console.log(clockStr);
// date=date+ "/"+month+"/"+ year+" " +clockStr;

// ---


function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    // let date = new Date();
    let num = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();
    let clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    console.log(clockStr);


    let dateString = `${num.toString()}/${month.toString()}/${year.toString()}`;
    text1.innerText = dateString + "\n" + clockStr;
}
updateTime();
setInterval(updateTime, 1000);
