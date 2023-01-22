let english = document.getElementById("english");
let arabic = document.getElementById("arabic");
let title = document.getElementById("title");
let wel = document.getElementById("wel");
let abou = document.getElementById("abou");
let abox = document.getElementById("abox");
let contact = document.getElementById("contact");

arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("Lang","arabic")
};

english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("Lang","english")
};

onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
};

function setLanugage(getLanuage){
if(getLanuage === "arabic"){
    title.innerHTML="فري فاير";
    wel.innerHTML="مرحبًا بكم في موقع فري فاير";
    abou.innerHTML="معلومات عنا";
    abox.innerHTML="لعبة فري فاير";
    contact.innerHTML="اتصل بنا";
}else if(getLanuage === "english"){
    title.innerHTML="Free Fire";
    wel.innerHTML="Welcome to website of Free Fire";
    abou.innerHTML="About us";
    abox.innerHTML="Free Fire game";
    contact.innerHTML="Contact us";
}
}