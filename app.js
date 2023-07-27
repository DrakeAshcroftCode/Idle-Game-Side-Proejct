$(document).ready(function(){
    var logs = 0;
    var money = 0;
    var logPlus = 1;
    var autoLogPlus = 0;
    var autoChopperPrice = 100;
    var logPrice = 1;
    var menu;

    $("#chop").click(function(){
        logs += logPlus;
        changeInventory();
        changeMarket();
    });

    $("#visit").click(function(){
        menu = switchMenu("marketplace");
        changeMarket();
    });

    $("#return").click(function(){
        menu = switchMenu("main");

    });

    function changeInventory(){
        $("#money").html("Money: $" + money);

        if(logs === 1){
            $("#logs").html("You now own " + logs + " log.");
        } else {
            $("#logs").html("You now own " + logs + " logs.");
        }
    }
    $("#sell1").click(function(){
        if(logs >= 1){
            logs -= 1;
            money += logPrice;
            changeInventory();
            changeMarket();
        }
    });

    $("#sell10").click(function(){
        if(logs >= 10){
            logs -= 10;
            money += 10 * logPrice;
            changeInventory();
            changeMarket();
        }
    });

    $("#sellAll").click(function(){
        if(logs > 0){
            money += logs * logPrice;
            logs = 0;
            changeInventory();
            changeMarket();
        }
    });

    function changeMarket(){
        if(logs > 0){
            $("#sellAll").css("display", "block");
        }else{
            $("#sellAll").css("display", "none");
        }
        if(logs >= 1){
            $("#sell1").css("display", "block");
        }else{
            $("#sell1").css("display", "none");
        } 
        if(logs >= 10){
            $("#sell10").css("display", "block");
        }else{
            $("#sell10").css("display", "none");
        }
    }



    function switchMenu(menu){
        $(".menus").children().css("display", "none");
        $("." + menu).css("display", "block");
        return menu;
    }
});
