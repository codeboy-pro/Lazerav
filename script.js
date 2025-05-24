var nav=document.querySelector("nav");
nav.addEventListener("mouseenter",function (){
var tl=gsap.timeline()
gsap.to("#nav-bottom",{

})

tl.from(".bottom-div h5",{
y:25,

stagger:{
  amount:0.6
}
})
})
nav.addEventListener("mouseleave",function (){
var tl=gsap.timeline()

tl.to(".bottom-div h5",{
  display:"block"
})
tl.from(".bottom-div h5",{
y:25,

stagger:{
  amount:0.2
}
})

})
