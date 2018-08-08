let brg = document.querySelector('.burger');
let wl = document.querySelector('.wall');
let vv = document.querySelector('.fills');
console.log(vv);

window.addEventListener('click', function(e){
if (e.target === brg){
console.log(vv);
wl.style.visibility = "visible";
vv.style.opacity = "0.7";
vv.style.visibility = "visible";
wl.style.opacity = "1";
}  
else{
wl.style.visibility = "hidden";
vv.style.visibility = "hidden";
}
// body opacity 50%
});