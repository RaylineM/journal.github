var tl_search = new TimelineMax({
    paused:true,
})

tl_search.staggerFromTo(
    ".glob-search",
    .7,
    {opacity:0,display:"none"},
    {opacity:1,display:"block"},
    0.1
)
tl_search.staggerFromTo(
    ".form-search",
    .7,
    {opacity:0,translateY:100},
    {opacity:1,translateY:100},
    0.1
)
$("body").on("click",".open-search",function(){
    tl_search.play(0)
})

$("body").on("click",".close-search",function(){
    tl_search.reverse(-0.5)
})