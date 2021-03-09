var nav = document.querySelector(".s2");
var list = document.querySelector(".foodList")
var bott = document.querySelectorAll("#bottom section")
var t = nav.offsetTop;
var l = list.offsetTop;
var admin_header=document.querySelector(".header2-admin span")
var admin_text=document.querySelector(".header2-admin p")
var main = document.querySelector('.js');

console.log(t);
window.onscroll = function () {
    let topScroll = document.documentElement.scrollTop;
    // console.log(topScroll);
    if (topScroll >= t) {
        nav.style.position = "fixed"
    }
    else {
        nav.style.position = "static"
    }
    if (topScroll >= l - 80) {
        list.style.position = "fixed"
    }
    else {
        list.style.position = "static"
    }
}
bott.forEach(function (v, i) {
    v.addEventListener("click", function () {
        for (let j = 0; j < bott.length; j++) {
            bott[j].classList.remove("active")
        }
        bott[i].classList.add("active")
    })
})

var account=document.querySelector("input[type='text']");
var password=document.querySelector("input[type='password']")
    account.onfocus=function(){
        $(".account-number").css("border","1px solid #0089dc")
    }
    account.onblur=function(){
        $(".account-number").css("border","1px solid #ccc")
    }
    password.onfocus=function(){
        $(".password").css("border","1px solid #0089dc")
    }
    password.onblur=function(){
        $(".password").css("border","1px solid #ccc")
    }
var code=document.querySelector("#admin section button")
var test=document.querySelector("#admin>button")
var hint=document.querySelector(".hint")
var admin=document.querySelector("#admin");
var bottom=document.querySelector("#bottom");
var btomse=document.querySelectorAll("#bottom section")
var page=document.querySelectorAll(".main>div")
var logout=document.querySelector(".logout")
test.onclick=function(){
    if(account.value==""){
        hint.classList.add("an")
        hint.textContent="请填写手机号"
    }
    else if(!(/^1[3|4|5|7|8][0-9]{9}$/.test(account.value))){
        hint.classList.add("an")
        hint.textContent="请输入合法的手机号"
    }
    else if(password.value==""){
        hint.classList.add("an")
        hint.textContent="请输入验证码"
    }
    else if(password.value!=abc){
        hint.classList.add("an")
        hint.textContent="验证码错误"
    }
    else{
        admin.style.display="none"
        bottom.style.opacity="1"
        showBottom(page,3)
        showBottom(btomse,3)
        logout.style.display="none";
        admin_header.style.display="block"
        admin_text.textContent="少年游"
        page[2].innerHTML=`<div class="dingdan">暂无订单</div>`
        admin.value=="";
        fetch('data.json')
    .then(function (res) {
        return res.json();
    })
    .then(function (myJson) {
        var da = myJson.bo;
        var html;
        for (let i = 0; i < da.length; i++) {
            const element = da[i];
            html+= `
            <div class="item">
                <img src=${element.imgUrl}
                    alt="">
               
                <section>
                    <h2>${element.title}</h2>
                    <p><img src="./img/五星.png" alt="">
                        <span>5</span><span>${element.sell}</span>
                    </p>
                    <section class="line"><span>${element.send}</span> <span>${element.min}</span></section>

                    <span class="type">${element.type}</span>
                    <h6>
                        <p><span class="index-icon">减</span><span class="index">满28元减5元，满40元减10元，满60元减15元</span>
                        </p>
                        <span class="activity">3个活动 <img src="./img/下拉.png" alt=""></span>
                    </h6>
                    <h6 class="xia">
                        <p><span class="index-icon">配</span><span class="index">配送费立减1元</span></p>
                        <!-- <span class="activity">3个活动 <img src="./img/下拉.png" alt=""></span> -->
                    </h6>

                </section>
           </div>`
        }
        main.innerHTML=html;
    })
    }
}
var i=5;
admin_header.onclick=function(){
   logout.style.display="block";
}
account.addEventListener("input",function(){
    if((/^1[34578]\d{9}$/.test(account.value))){
       code.classList.add("active")
      
    }
    else{
        code.classList.remove("active")
    }
})

code.onclick=function(){
    if($("#admin section button").has("active")){
        hint.classList.add("an")
        abc=Math.floor(Math.random()*1000000);
        hint.textContent=`${abc}`
        console.log(abc);
        code.textContent=`已发送(${i}秒)`
        if(i==5){
            code.classList.remove("active")
            timer=setInterval(function(){
                i=i-1
                code.textContent=`已发送(${i}秒)`
               
                console.log(i);
               if(i==0){
                code.textContent=`再次发送`
                 i=5;
                 clearInterval(timer)
                 code.classList.add("active")
                 hint.classList.remove("an")
               }
            },1000)   
        }
       
    }
 
}
test.onmousedown=function(){
    hint.classList.remove("an")
}
$(".header2-admin p").on("click",function(){
    if(admin_text.textContent=="请登录"){
        console.log("233");
        $("#admin").css("display","block")
        $("#page4").removeClass("active")
        $("#bottom").css("opacity","0")
    }
})
$(".out").on("click",function(){
    $("#admin").css("display","block")
    $("#page4").removeClass("active")
    $("#bottom").css("opacity","0")
    admin_header.style.display="none";
    admin_text.textContent="请登录"
 })
 $(".outadmin").on("click",function(){
    $("#admin").css("display","block")
    $("#page1").removeClass("active")
    $("#page3").removeClass("active")
    $("#bottom").css("opacity","0")
    admin_header.style.display="none";
    admin_text.textContent="请登录"
 })
console.log($(".main>div"));
$("#bottom>section").each(function(c,v){
$("#bottom>section")[c].onclick=function(){
    showBottom(page,c)
}
})
 function showBottom(page,i){
    page.forEach(function(v,j){
        page[j].classList.remove("active")
    })
    page[i].classList.add("active")
 }




