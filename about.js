// let nav = document.getElementById('nav')
// nav.addEventListener('click',()=>{
// this.style.backgroundColor='white';
// })

// document.getElementById("navbar").addEventListener("click",function(){
// this.style.background="white";


// })
window.onscroll = ()=>{
    windowscroll();
}
// var vendor = document.getElementById('vendors');
document.addEventListener("DOMContentLoaded", function() {
   windowscroll=()=>{
if (document.body.scrollTop >50 || document.documentElement.scrollTop>50){
    document.getElementById("navbar").style.backgroundColor="white";}
    else{
        document.getElementById("navbar").style.backgroundColor="transparent";}

    }


    var vendors = document.getElementById('vendors');
var vendor_box = document.getElementById('vendor_box');
// vendors.addEventListener('mouseover',()=>{
//   vendor_box.classList.add('vendor_box_style');
// })
// vendors.addEventListener('mouseout',()=>{
//   vendor_box.classList.remove('vendor_box_style');

// })
vendors.addEventListener('click',()=>{
  vendor_box.classList.add('vendor_box_style');

})

});
 
