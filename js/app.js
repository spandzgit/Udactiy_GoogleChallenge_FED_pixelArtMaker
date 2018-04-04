$(function(){
    var form = document.querySelector('#numControlPickers');
 
    function drawGrid(evt){
        console.log("Make Grid");
    }


    form.addEventListener('submit', function (e) {
        e.preventDefault();
        drawGrid(e);
    }, false);
    
})
