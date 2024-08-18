/// <reference types="../@types/jquery"/>


$("#open").on('click',function(){
    $(".outerSide").animate({width:"show" ,  paddingInline: "show"},1000)
    
})
$(".close").on('click',function(){
    $(".outerSide").animate({width:"hide" ,  paddingInline: "hide"},1000)
})
$(".links a").on("click",function(e){
    let aHreF=e.target.getAttribute('href')
    let sectionOffside=$(aHreF).offset().top
    $('body,html').animate({scrollTop:sectionOffside},1000)

})

$(".item h5").on("click",function(e){
let btnSlide=$(e.target).text()

if(btnSlide=="Singer two"){
    $(".item p").slideUp(1000)
    
    
    $(".item .descripation-2").slideToggle(1000)
    
}
else if(btnSlide=="Singer three"){
    $(".item p").slideUp(1000)
    $(".item .descripation-3").slideToggle(1000)
    }
    else if(btnSlide=="Singer four"){
        $(".item p").slideUp(1000)
        $(".item .descripation-4").slideToggle(1000)
        }
        else{
            $(".item p").slideUp(1000)
            $(".item .descripation-1").slideToggle(1000)
        }


})
let countDwonDate=new Date('Oct 25, 2024 20:00:00').getTime();
// console.log( countDwonDate)

let counter=setInterval(()=>{
let dateNow=new Date().getTime()
let dateDiff= countDwonDate- dateNow;
let days=Math.floor(dateDiff/(1000*60*60*24))
let hours=Math.floor((dateDiff%(1000*60*60*24))/1000/60/60)
let minutes=Math.floor((dateDiff%(1000*60*60))/1000/60)
let seconds=Math.floor((dateDiff%(1000*60))/1000)



document.querySelector(".black").innerHTML=`${days}D`;
document.querySelector(".hour").innerHTML=`${hours}H`;
document.querySelector(".minute").innerHTML=`${minutes}M`;
document.querySelector(".secound").innerHTML=`${seconds}S`;




},1000)

$(function(){
    
    var maxText=$("textarea").attr("maxlength")
    $(".message").html(`<span class="text-danger ">${maxText}</span> Characyer Reamining`)
    $("textarea").keyup(function(){
        var textLength=$(this).val().length
        var remaining=maxText-textLength
      $(".message").html(`<span class="text-danger ">${remaining}</span> Characyer Reamining`)

    })
    console.log(maxText)
})



