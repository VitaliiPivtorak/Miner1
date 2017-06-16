reset = function () {
    $.get("/actions/reset",
        function(data){
            //alert(data);
        });
}

hardReset = function () {
    $.get("/actions/hard_reset",
        function(data){
            //alert(data);
        });
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
           $("#ping").html(data);
       });
}