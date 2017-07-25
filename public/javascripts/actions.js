power = function (confirmed, gpio) {
    if (confirmed) {
        $.post("/actions/power",
            { gpio: gpio },
            function (data) {
                //alert(data);
            });
    }
}

hardReset = function (confirmed, gpio) {
    if (confirmed) {
        $.post("/actions/hard_reset",
            { gpio: gpio },
            function (data) {
                //alert(data);
            });
    }
}

pingServerTime = function()
{
      $.get("/actions/server_time",
        function(data){
           $("#serverTime").html(data);
       });
}

pingRig = function()
{
      $.get("/actions/ping_rig",
        function(data){
           $("#ping").html(data.toString().substring(0,5));
           //alert(data);
       });
}