var tl_nav = new TimelineMax({
    paused:true,
})

tl_nav.staggerFromTo(
    ".overlay-nav",
    .2,
    {opacity:0,display:"none"},
    {opacity:1,display:"block"},
    0.1
)
tl_nav.staggerFromTo(
    ".nav-site",
    .6,
    {opacity:0,display:"none",left:"-100%"},
    {opacity:1,display:"block",left:"0"},
    0.01
)
$("body").on("click",".hamburguer",function(){
    tl_nav.play(0)
})

$("body").on("click",".overlay-nav",function(){
    tl_nav.reverse(-0.5)
})