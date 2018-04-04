$(function(){
    const form = document.querySelector('#numControlPickers');
 
    function drawGrid(evt){
        console.log("Draw Grid");

        const rows = parseInt(document.getElementById("hghtIp").value);
        const cols = parseInt(document.getElementById("wdthIp").value);
        debugger;
        for(let iCount = 1; iCount <= rows; iCount++){
            $("#dynTableCanvas").append("<tr></tr>");
            for(let jCount = 1; jCount <= cols; jCount++){
                $("tr:last").append("<td></td>");
                $("td").attr("class", "pixel");
            }
        }
    }

    $('#dynTableCanvas').click('td', function paint (evt) {
        $(evt.target).css('background-color', $('#colorIp').val());
    });

    $("#btnReset").click(function(){
        $('#dynTableCanvas').find("tr").remove();
        $('#dynTableCanvas').removeAttr("style")
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        drawGrid(e);
    }, false);
    
})
