$('html').addClass('jsActive');
    
window.onload = function()
{
    setTimeout(
    function(){
   
        document.getElementById("preloader").style.Transform =" translateX(-1000px);";
        document.getElementById("preloader").classList.add("hide");
        document.getElementById("body").style.overflowY="scroll";
}, 5000)}