function customize()
{

    var curr_handle="casual";
    var curr_grip_color="black";
    var curr_frame_upgrade="simple";
    var curr_tyre_upgrade="simple";
    var curr_brook_upgrade="simple";
    var curr_chain_upgrade="simple";
    var curr_cargo_upgrade="simple";

    var casual_handle=document.querySelector(".handle-card-1");
    var upright_handle=document.querySelector(".handle-card-2");
    var classic_handle=document.querySelector(".handle-card-3");
    var powerful_handle=document.querySelector(".handle-card-4");

    var cargo_upgrade=false;
    var cargo_again=0;
    var chain_upgrade=false;
    var chain_again=0;
    var brook_upgrade=false;
    var brook_again=0;

    var gat_upgrade=false;
    var grand_upgrade=false;
    var gat_again=0;
    var grand_again=0;

    var matte_upgrade=false;
    var gloss_upgrade=false;
    var matte_again=0;
    var gloss_again=0;

    var cost=10000;

    var cBack=document.querySelector(".cycle");

    //Chain color change listeners here
    document.querySelector(".chain_black").addEventListener("click",Conv_chain_black);
    document.querySelector(".chain_orange").addEventListener("click",Conv_chain_orange);
    document.querySelector(".chain_pink").addEventListener("click",Conv_chain_pink);
    document.querySelector(".chain_yellow").addEventListener("click",Conv_chain_yellow);
    document.querySelector(".chain_red").addEventListener("click",Conv_chain_red);
    document.querySelector(".chain_white").addEventListener("click",Conv_chain_white);

    //Frame color change listeners here
    document.querySelector(".frame_black").addEventListener("click",Conv_frame_black);
    document.querySelector(".frame_green").addEventListener("click",Conv_frame_green);
    document.querySelector(".frame_mint").addEventListener("click",Conv_frame_mint);
    document.querySelector(".frame_orange").addEventListener("click",Conv_frame_orange);
    document.querySelector(".frame_red").addEventListener("click",Conv_frame_red);
    document.querySelector(".frame_sky").addEventListener("click",Conv_frame_sky);
    document.querySelector(".frame_white").addEventListener("click",Conv_frame_white);
    document.querySelector(".frame_yellow").addEventListener("click",Conv_frame_yellow);

    //Rim color change listeners here
    document.querySelector(".rim_black").addEventListener("click",Conv_rim_black);
    document.querySelector(".rim_silver").addEventListener("click",Conv_rim_silver);
    document.querySelector(".rim_white").addEventListener("click",Conv_rim_white);

    //Grip color change listners here
    document.querySelector(".grip_color_black").addEventListener("click",check_handle_black);          //Conv_grip_black
    document.querySelector(".grip_color_orange").addEventListener("click",check_handle_orange);        //Conv_grip_orange
    document.querySelector(".grip_color_yellow").addEventListener("click",check_handle_yellow);        //Conv_grip_yellow
    document.querySelector(".grip_color_white").addEventListener("click",check_handle_white);          //Conv_grip_white

    //Component color change listeners here
    document.querySelector(".component_color_black").addEventListener("click",Conv_comp_black);
    document.querySelector(".component_color_silver").addEventListener("click",Conv_comp_silver);

    //handle change listenters here
    document.querySelector(".upright").addEventListener("click",Conv_handle_upright);
    document.querySelector(".casual").addEventListener("click",Conv_handle_casual);
    document.querySelector(".classic").addEventListener("click",Conv_handle_classic);
    document.querySelector(".powerful").addEventListener("click",Conv_handle_powerful);

    //frame upgrade listeners here
    document.querySelector(".matte").addEventListener("click",Conv_frame_matte);
    document.querySelector(".no-upgrade-frame").addEventListener("click",Conv_frame_simple);
    document.querySelector(".gloss").addEventListener("click",Conv_frame_gloss);

    //tyre upgrade listeners here
    document.querySelector(".no_up_tyre").addEventListener("click",Conv_tyre_simple);
    document.querySelector(".grand").addEventListener("click",Conv_tyre_grandprix);
    document.querySelector(".gat").addEventListener("click",Conv_tyre_gatorskin);

    //seat upgrade listenters here
    document.querySelector(".no_seat_upgrade").addEventListener("click",Conv_seat_simple);
    document.querySelector(".gldn_brook").addEventListener("click",Conv_seat_golden);

    //chain upgrade listeners here
    document.querySelector(".up_chain").addEventListener("click",Conv_chain_rust);
    document.querySelector(".no_chain").addEventListener("click",Conv_chain_simple);

    //cargo upgrade listeners here
    document.querySelector(".up_cargo").addEventListener("click",add_cargo);
    document.querySelector(".no_cargo").addEventListener("click",rem_cargo);

    //background change
    document.querySelector(".purple").addEventListener("click",back_purple);
    document.querySelector(".silver").addEventListener("click",back_silver);
    document.querySelector(".orange").addEventListener("click",back_orange);
    document.querySelector(".black").addEventListener("click",back_black);
    document.querySelector(".light_yellow").addEventListener("click",back_light_yellow);
    document.querySelector(".mint").addEventListener("click",back_mint);
    document.querySelector(".blue").addEventListener("click",back_blue);
    document.querySelector(".red").addEventListener("click",back_red);
    document.querySelector(".yellow").addEventListener("click",back_yellow);

    //Chain color functions here
    function Conv_chain_black()
    {
        var ch_Black=document.querySelector(".chain");
        var ch_Yellow=document.querySelector(".chainYellow");
        var ch_Orange=document.querySelector(".chainOrange");
        var ch_Red=document.querySelector(".chainRed"); 
        var ch_Pink=document.querySelector(".chainPink");
        var ch_White=document.querySelector(".chainWhite");

        ch_Pink.classList.remove("fadeIn");
        ch_White.classList.remove("fadeIn");
        ch_Orange.classList.remove("fadeIn");
        ch_Yellow.classList.remove("fadeIn");
        ch_Red.classList.remove("fadeIn");

        ch_Pink.classList.add("fadeOut");
        ch_White.classList.add("fadeOut");
        ch_Yellow.classList.add("fadeOut");
        ch_Orange.classList.add("fadeOut");
        ch_Red.classList.add("fadeOut");

        ch_Black.classList.add("fadeIn");
    }
    function Conv_chain_orange()
    {
        var ch_Black=document.querySelector(".chain");
        var ch_Yellow=document.querySelector(".chainYellow");
        var ch_Orange=document.querySelector(".chainOrange");
        var ch_Red=document.querySelector(".chainRed"); 
        var ch_Pink=document.querySelector(".chainPink");
        var ch_White=document.querySelector(".chainWhite");

        ch_Pink.classList.remove("fadeIn");
        ch_White.classList.remove("fadeIn");
        ch_Black.classList.remove("fadeIn");
        ch_Yellow.classList.remove("fadeIn");
        ch_Red.classList.remove("fadeIn");

        ch_Pink.classList.add("fadeOut");
        ch_White.classList.add("fadeOut");
        ch_Black.classList.add("fadeOut");
        ch_Yellow.classList.add("fadeOut");
        ch_Red.classList.add("fadeOut");
        
        ch_Orange.classList.add("fadeIn");
    }
    function Conv_chain_pink()
    {
        var ch_Black=document.querySelector(".chain");
        var ch_Yellow=document.querySelector(".chainYellow");
        var ch_Orange=document.querySelector(".chainOrange");
        var ch_Red=document.querySelector(".chainRed"); 
        var ch_Pink=document.querySelector(".chainPink");
        var ch_White=document.querySelector(".chainWhite");

        ch_Orange.classList.remove("fadeIn");
        ch_White.classList.remove("fadeIn");
        ch_Black.classList.remove("fadeIn");
        ch_Yellow.classList.remove("fadeIn");
        ch_Red.classList.remove("fadeIn");

        ch_Orange.classList.add("fadeOut");
        ch_White.classList.add("fadeOut");
        ch_Black.classList.add("fadeOut");
        ch_Yellow.classList.add("fadeOut");
        ch_Red.classList.add("fadeOut");
        
        ch_Pink.classList.add("fadeIn");
    }
    function Conv_chain_yellow()
    {
        var ch_Black=document.querySelector(".chain");
        var ch_Yellow=document.querySelector(".chainYellow");
        var ch_Orange=document.querySelector(".chainOrange");
        var ch_Red=document.querySelector(".chainRed"); 
        var ch_Pink=document.querySelector(".chainPink");
        var ch_White=document.querySelector(".chainWhite");

        ch_Orange.classList.remove("fadeIn");
        ch_White.classList.remove("fadeIn");
        ch_Black.classList.remove("fadeIn");
        ch_Pink.classList.remove("fadeIn");
        ch_Red.classList.remove("fadeIn");

        ch_Orange.classList.add("fadeOut");
        ch_White.classList.add("fadeOut");
        ch_Black.classList.add("fadeOut");
        ch_Pink.classList.add("fadeOut");
        ch_Red.classList.add("fadeOut");
        
        ch_Yellow.classList.add("fadeIn");
    }
    function Conv_chain_red()
    {
        var ch_Black=document.querySelector(".chain");
        var ch_Yellow=document.querySelector(".chainYellow");
        var ch_Orange=document.querySelector(".chainOrange");
        var ch_Red=document.querySelector(".chainRed"); 
        var ch_Pink=document.querySelector(".chainPink");
        var ch_White=document.querySelector(".chainWhite");

        ch_Orange.classList.remove("fadeIn");
        ch_White.classList.remove("fadeIn");
        ch_Black.classList.remove("fadeIn");
        ch_Pink.classList.remove("fadeIn");
        ch_Yellow.classList.remove("fadeIn");

        ch_Orange.classList.add("fadeOut");
        ch_White.classList.add("fadeOut");
        ch_Black.classList.add("fadeOut");
        ch_Pink.classList.add("fadeOut");
        ch_Yellow.classList.add("fadeOut");
        
        ch_Red.classList.add("fadeIn");
    }
    function Conv_chain_white()
    {
        var ch_Black=document.querySelector(".chain");
        var ch_Yellow=document.querySelector(".chainYellow");
        var ch_Orange=document.querySelector(".chainOrange");
        var ch_Red=document.querySelector(".chainRed"); 
        var ch_Pink=document.querySelector(".chainPink");
        var ch_White=document.querySelector(".chainWhite");

        ch_Orange.classList.remove("fadeIn");
        ch_Red.classList.remove("fadeIn");
        ch_Black.classList.remove("fadeIn");
        ch_Pink.classList.remove("fadeIn");
        ch_Yellow.classList.remove("fadeIn");

        ch_Orange.classList.add("fadeOut");
        ch_Red.classList.add("fadeOut");
        ch_Black.classList.add("fadeOut");
        ch_Pink.classList.add("fadeOut");
        ch_Yellow.classList.add("fadeOut");
        
        ch_White.classList.add("fadeIn");
    }

    //frame Color functions here
    function Conv_frame_black()
    {
        rem_frame_upgrades();
        fr_Black=document.querySelector(".frame");
        fr_Green=document.querySelector(".frameGreen");
        fr_Mint=document.querySelector(".frameMint");
        fr_Orange=document.querySelector(".frameOrange");
        fr_Red=document.querySelector(".frameRed");
        fr_Sky=document.querySelector(".frameSky");
        fr_White=document.querySelector(".frameWhite");
        fr_Yellow=document.querySelector(".frameYellow");

        fr_Green.classList.remove("fadeIn");
        fr_Mint.classList.remove("fadeIn");
        fr_Orange.classList.remove("fadeIn");
        fr_Red.classList.remove("fadeIn");
        fr_Sky.classList.remove("fadeIn");
        fr_White.classList.remove("fadeIn");
        fr_Yellow.classList.remove("fadeIn");

        fr_Green.classList.add("fadeOut");
        fr_Mint.classList.add("fadeOut");
        fr_Orange.classList.add("fadeOut");
        fr_Red.classList.add("fadeOut");
        fr_Sky.classList.add("fadeOut");
        fr_White.classList.add("fadeOut");
        fr_Yellow.classList.add("fadeOut");

        fr_Black.classList.add("fadeIn");

    }
    function Conv_frame_green()
    {
        rem_frame_upgrades();
        fr_Black=document.querySelector(".frame");
        fr_Green=document.querySelector(".frameGreen");
        fr_Mint=document.querySelector(".frameMint");
        fr_Orange=document.querySelector(".frameOrange");
        fr_Red=document.querySelector(".frameRed");
        fr_Sky=document.querySelector(".frameSky");
        fr_White=document.querySelector(".frameWhite");
        fr_Yellow=document.querySelector(".frameYellow");

        fr_Black.classList.remove("fadeIn");
        fr_Mint.classList.remove("fadeIn");
        fr_Orange.classList.remove("fadeIn");
        fr_Red.classList.remove("fadeIn");
        fr_Sky.classList.remove("fadeIn");
        fr_White.classList.remove("fadeIn");
        fr_Yellow.classList.remove("fadeIn");

        fr_Black.classList.add("fadeOut");
        fr_Mint.classList.add("fadeOut");
        fr_Orange.classList.add("fadeOut");
        fr_Red.classList.add("fadeOut");
        fr_Sky.classList.add("fadeOut");
        fr_White.classList.add("fadeOut");
        fr_Yellow.classList.add("fadeOut");

        fr_Green.classList.add("fadeIn");

    }
    function Conv_frame_mint()
    {
        rem_frame_upgrades();
        fr_Black=document.querySelector(".frame");
        fr_Green=document.querySelector(".frameGreen");
        fr_Mint=document.querySelector(".frameMint");
        fr_Orange=document.querySelector(".frameOrange");
        fr_Red=document.querySelector(".frameRed");
        fr_Sky=document.querySelector(".frameSky");
        fr_White=document.querySelector(".frameWhite");
        fr_Yellow=document.querySelector(".frameYellow");

        fr_Black.classList.remove("fadeIn");
        fr_Green.classList.remove("fadeIn");
        fr_Orange.classList.remove("fadeIn");
        fr_Red.classList.remove("fadeIn");
        fr_Sky.classList.remove("fadeIn");
        fr_White.classList.remove("fadeIn");
        fr_Yellow.classList.remove("fadeIn");

        fr_Black.classList.add("fadeOut");
        fr_Green.classList.add("fadeOut");
        fr_Orange.classList.add("fadeOut");
        fr_Red.classList.add("fadeOut");
        fr_Sky.classList.add("fadeOut");
        fr_White.classList.add("fadeOut");
        fr_Yellow.classList.add("fadeOut");

        fr_Mint.classList.add("fadeIn");
    }
    function Conv_frame_orange()
    {
        rem_frame_upgrades();
        fr_Black=document.querySelector(".frame");
        fr_Green=document.querySelector(".frameGreen");
        fr_Mint=document.querySelector(".frameMint");
        fr_Orange=document.querySelector(".frameOrange");
        fr_Red=document.querySelector(".frameRed");
        fr_Sky=document.querySelector(".frameSky");
        fr_White=document.querySelector(".frameWhite");
        fr_Yellow=document.querySelector(".frameYellow");

        fr_Black.classList.remove("fadeIn");
        fr_Green.classList.remove("fadeIn");
        fr_Mint.classList.remove("fadeIn");
        fr_Red.classList.remove("fadeIn");
        fr_Sky.classList.remove("fadeIn");
        fr_White.classList.remove("fadeIn");
        fr_Yellow.classList.remove("fadeIn");

        fr_Black.classList.add("fadeOut");
        fr_Green.classList.add("fadeOut");
        fr_Mint.classList.add("fadeOut");
        fr_Red.classList.add("fadeOut");
        fr_Sky.classList.add("fadeOut");
        fr_White.classList.add("fadeOut");
        fr_Yellow.classList.add("fadeOut");

        fr_Orange.classList.add("fadeIn");
    }
    function Conv_frame_red()
    {
        rem_frame_upgrades();
        fr_Black=document.querySelector(".frame");
        fr_Green=document.querySelector(".frameGreen");
        fr_Mint=document.querySelector(".frameMint");
        fr_Orange=document.querySelector(".frameOrange");
        fr_Red=document.querySelector(".frameRed");
        fr_Sky=document.querySelector(".frameSky");
        fr_White=document.querySelector(".frameWhite");
        fr_Yellow=document.querySelector(".frameYellow");

        fr_Black.classList.remove("fadeIn");
        fr_Green.classList.remove("fadeIn");
        fr_Mint.classList.remove("fadeIn");
        fr_Orange.classList.remove("fadeIn");
        fr_Sky.classList.remove("fadeIn");
        fr_White.classList.remove("fadeIn");
        fr_Yellow.classList.remove("fadeIn");

        fr_Black.classList.add("fadeOut");
        fr_Green.classList.add("fadeOut");
        fr_Mint.classList.add("fadeOut");
        fr_Orange.classList.add("fadeOut");
        fr_Sky.classList.add("fadeOut");
        fr_White.classList.add("fadeOut");
        fr_Yellow.classList.add("fadeOut");

        fr_Red.classList.add("fadeIn");
    }
    function Conv_frame_sky()
    {
        rem_frame_upgrades();
        fr_Black=document.querySelector(".frame");
        fr_Green=document.querySelector(".frameGreen");
        fr_Mint=document.querySelector(".frameMint");
        fr_Orange=document.querySelector(".frameOrange");
        fr_Red=document.querySelector(".frameRed");
        fr_Sky=document.querySelector(".frameSky");
        fr_White=document.querySelector(".frameWhite");
        fr_Yellow=document.querySelector(".frameYellow");

        fr_Black.classList.remove("fadeIn");
        fr_Green.classList.remove("fadeIn");
        fr_Mint.classList.remove("fadeIn");
        fr_Orange.classList.remove("fadeIn");
        fr_Red.classList.remove("fadeIn");
        fr_White.classList.remove("fadeIn");
        fr_Yellow.classList.remove("fadeIn");

        fr_Black.classList.add("fadeOut");
        fr_Green.classList.add("fadeOut");
        fr_Mint.classList.add("fadeOut");
        fr_Orange.classList.add("fadeOut");
        fr_Red.classList.add("fadeOut");
        fr_White.classList.add("fadeOut");
        fr_Yellow.classList.add("fadeOut");

        fr_Sky.classList.add("fadeIn");
    }
    function Conv_frame_white()
    {
        rem_frame_upgrades();
        fr_Black=document.querySelector(".frame");
        fr_Green=document.querySelector(".frameGreen");
        fr_Mint=document.querySelector(".frameMint");
        fr_Orange=document.querySelector(".frameOrange");
        fr_Red=document.querySelector(".frameRed");
        fr_Sky=document.querySelector(".frameSky");
        fr_White=document.querySelector(".frameWhite");
        fr_Yellow=document.querySelector(".frameYellow");

        fr_Black.classList.remove("fadeIn");
        fr_Green.classList.remove("fadeIn");
        fr_Mint.classList.remove("fadeIn");
        fr_Orange.classList.remove("fadeIn");
        fr_Red.classList.remove("fadeIn");
        fr_Sky.classList.remove("fadeIn");
        fr_Yellow.classList.remove("fadeIn");

        fr_Black.classList.add("fadeOut");
        fr_Green.classList.add("fadeOut");
        fr_Mint.classList.add("fadeOut");
        fr_Orange.classList.add("fadeOut");
        fr_Red.classList.add("fadeOut");
        fr_Sky.classList.add("fadeOut");
        fr_Yellow.classList.add("fadeOut");

        fr_White.classList.add("fadeIn");
    }
    function Conv_frame_yellow()
    {
        rem_frame_upgrades();
        fr_Black=document.querySelector(".frame");
        fr_Green=document.querySelector(".frameGreen");
        fr_Mint=document.querySelector(".frameMint");
        fr_Orange=document.querySelector(".frameOrange");
        fr_Red=document.querySelector(".frameRed");
        fr_Sky=document.querySelector(".frameSky");
        fr_White=document.querySelector(".frameWhite");
        fr_Yellow=document.querySelector(".frameYellow");

        fr_Black.classList.remove("fadeIn");
        fr_Green.classList.remove("fadeIn");
        fr_Mint.classList.remove("fadeIn");
        fr_Orange.classList.remove("fadeIn");
        fr_Red.classList.remove("fadeIn");
        fr_Sky.classList.remove("fadeIn");
        fr_White.classList.remove("fadeIn");

        fr_Black.classList.add("fadeOut");
        fr_Green.classList.add("fadeOut");
        fr_Mint.classList.add("fadeOut");
        fr_Orange.classList.add("fadeOut");
        fr_Red.classList.add("fadeOut");
        fr_Sky.classList.add("fadeOut");
        fr_White.classList.add("fadeOut");

        fr_Yellow.classList.add("fadeIn");
    }
    function Conv_rim_black()
    {
        rimLeftBlack=document.querySelector(".rim-left");
        rimRightBlack=document.querySelector(".rim-right");

        rimLeftSilver=document.querySelector(".rim-left-silver");
        rimRightSilver=document.querySelector(".rim-right-silver");

        rimLeftWhite=document.querySelector(".rim-left-white");
        rimRightWhite=document.querySelector(".rim-right-white");

        rimLeftSilver.classList.remove("fadeIn");
        rimRightSilver.classList.remove("fadeIn");
        rimLeftWhite.classList.remove("fadeIn");
        rimRightWhite.classList.remove("fadeIn");

        rimLeftSilver.classList.add("fadeOut");
        rimRightSilver.classList.add("fadeOut");
        rimLeftWhite.classList.add("fadeOut");
        rimRightWhite.classList.add("fadeOut");

        rimLeftBlack.classList.add("fadeIn");
        rimRightBlack.classList.add("fadeIn");
    }
    function Conv_rim_silver()
    {
        rimLeftBlack=document.querySelector(".rim-left");
        rimRightBlack=document.querySelector(".rim-right");

        rimLeftSilver=document.querySelector(".rim-left-silver");
        rimRightSilver=document.querySelector(".rim-right-silver");

        rimLeftWhite=document.querySelector(".rim-left-white");
        rimRightWhite=document.querySelector(".rim-right-white");

        rimLeftBlack.classList.remove("fadeIn");
        rimRightBlack.classList.remove("fadeIn");
        rimLeftWhite.classList.remove("fadeIn");
        rimRightWhite.classList.remove("fadeIn");

        rimLeftBlack.classList.add("fadeOut");
        rimRightBlack.classList.add("fadeOut");
        rimLeftWhite.classList.add("fadeOut");
        rimRightWhite.classList.add("fadeOut");

        rimLeftSilver.classList.add("fadeIn");
        rimRightSilver.classList.add("fadeIn");
    }
    function Conv_rim_white()
    {
        rimLeftBlack=document.querySelector(".rim-left");
        rimRightBlack=document.querySelector(".rim-right");

        rimLeftSilver=document.querySelector(".rim-left-silver");
        rimRightSilver=document.querySelector(".rim-right-silver");

        rimLeftWhite=document.querySelector(".rim-left-white");
        rimRightWhite=document.querySelector(".rim-right-white");

        rimLeftBlack.classList.remove("fadeIn");
        rimRightBlack.classList.remove("fadeIn");
        rimLeftSilver.classList.remove("fadeIn");
        rimRightSilver.classList.remove("fadeIn");

        rimLeftBlack.classList.add("fadeOut");
        rimRightBlack.classList.add("fadeOut");
        rimLeftSilver.classList.add("fadeOut");
        rimRightSilver.classList.add("fadeOut");

        rimLeftWhite.classList.add("fadeIn");
        rimRightWhite.classList.add("fadeIn");
    }

    function Conv_grip_black()
    {
        gripBlack=document.querySelector(".grip");
        gripOrange=document.querySelector(".grip-orange");
        gripYellow=document.querySelector(".grip-yellow");
        gripWhite=document.querySelector(".grip-white");

        gripOrange.classList.remove("fadeIn");
        gripYellow.classList.remove("fadeIn");
        gripWhite.classList.remove("fadeIn");
        
        gripOrange.classList.add("fadeOut");
        gripYellow.classList.add("fadeOut");
        gripWhite.classList.add("fadeOut");

        gripBlack.classList.add("fadeIn");
        curr_grip_color="black";
    }

    function Conv_grip_orange()
    {
        gripBlack=document.querySelector(".grip");
        gripOrange=document.querySelector(".grip-orange");
        gripYellow=document.querySelector(".grip-yellow");
        gripWhite=document.querySelector(".grip-white");

        gripBlack.classList.remove("fadeIn");
        gripYellow.classList.remove("fadeIn");
        gripWhite.classList.remove("fadeIn");
        
        gripBlack.classList.add("fadeOut");
        gripYellow.classList.add("fadeOut");
        gripWhite.classList.add("fadeOut");

        gripOrange.classList.add("fadeIn");
        curr_grip_color="orange";
    }

    function Conv_grip_yellow()
    {
        gripBlack=document.querySelector(".grip");
        gripOrange=document.querySelector(".grip-orange");
        gripYellow=document.querySelector(".grip-yellow");
        gripWhite=document.querySelector(".grip-white");

        gripBlack.classList.remove("fadeIn");
        gripOrange.classList.remove("fadeIn");
        gripWhite.classList.remove("fadeIn");
        
        gripBlack.classList.add("fadeOut");
        gripOrange.classList.add("fadeOut");
        gripWhite.classList.add("fadeOut");

        gripYellow.classList.add("fadeIn");
        curr_grip_color="yellow";
    }
    function Conv_grip_white()
    {
        gripBlack=document.querySelector(".grip");
        gripOrange=document.querySelector(".grip-orange");
        gripYellow=document.querySelector(".grip-yellow");
        gripWhite=document.querySelector(".grip-white");

        gripBlack.classList.remove("fadeIn");
        gripOrange.classList.remove("fadeIn");
        gripYellow.classList.remove("fadeIn");
        
        gripBlack.classList.add("fadeOut");
        gripOrange.classList.add("fadeOut");
        gripYellow.classList.add("fadeOut");

        gripWhite.classList.add("fadeIn");
        curr_grip_color="white";
    }
    function Conv_comp_black()
    {
        compBlack=document.querySelector(".component");
        compSilver=document.querySelector(".component-silver");

        compSilver.classList.remove("fadeIn");

        compSilver.classList.add("fadeOut");

        compBlack.classList.add("fadeIn");
    }
    function Conv_comp_silver()
    {
        compBlack=document.querySelector(".component");
        compSilver=document.querySelector(".component-silver");

        compBlack.classList.remove("fadeIn");

        compBlack.classList.add("fadeOut");

        compSilver.classList.add("fadeIn");
    }

    //function to remove casual grip
    function rem_casual_grip()
    {
        gripBlack=document.querySelector(".grip");
        gripOrange=document.querySelector(".grip-orange");
        gripYellow=document.querySelector(".grip-yellow");
        gripWhite=document.querySelector(".grip-white");

        gripBlack.classList.remove("fadeIn");
        gripOrange.classList.remove("fadeIn");
        gripYellow.classList.remove("fadeIn");
        gripWhite.classList.remove("fadeIn");
        
        gripBlack.classList.add("fadeOut");
        gripOrange.classList.add("fadeOut");
        gripYellow.classList.add("fadeOut");
        gripWhite.classList.add("fadeOut");
    }

    //function to remove upright grip
    function rem_upright_grip()
    {
        gripUprightBlack=document.querySelector(".grip-upright-black");
        gripUprightWhite=document.querySelector(".grip-upright-white");
        gripUprightYellow=document.querySelector(".grip-upright-yellow");
        gripUprightOrange=document.querySelector(".grip-upright-orange");

        gripUprightBlack.classList.remove("fadeIn")
        gripUprightWhite.classList.remove("fadeIn");
        gripUprightYellow.classList.remove("fadeIn");
        gripUprightOrange.classList.remove("fadeIn");

        gripUprightWhite.classList.add("fadeOut");
        gripUprightYellow.classList.add("fadeOut");
        gripUprightOrange.classList.add("fadeOut");
        gripUprightBlack.classList.add("fadeOut");    
    }

    //function to determine handle (Black)
    function check_handle_black()
    {
        if(curr_handle=="casual")
        {
            Conv_grip_black();
        }
        else if(curr_handle=="upright")
        {
            Conv_grip_upright_black();
        }
        else if(curr_handle=="classic")
        {
            Conv_grip_classic_black();
        }
        else if(curr_handle=="powerful")
        {
            Conv_powerful_grip_black();
        }
    }
    function check_handle_yellow()
    {
        if(curr_handle=="casual")
        {
            Conv_grip_yellow();
        }
        else if(curr_handle=="upright")
        {
            Conv_grip_upright_yellow();
        }
        else if(curr_handle=="classic")
        {
            Conv_grip_classic_yellow();
        }
        else if(curr_handle=="powerful")
        {
            Conv_powerful_grip_yellow();
        }
    }
    function check_handle_white()
    {
        if(curr_handle=="casual")
        {
            Conv_grip_white();
        }
        else if(curr_handle=="upright")
        {
            Conv_grip_upright_white();
        }
        else if(curr_handle=="classic")
        {
            Conv_grip_classic_white();
        }
        else if(curr_handle=="powerful")
        {
            Conv_powerful_grip_white();
        }
    }
    function check_handle_orange()
    {
        if(curr_handle=="casual")
        {
            Conv_grip_orange();
        }
        else if(curr_handle=="upright")
        {
            Conv_grip_upright_orange();
        }
        else if(curr_handle=="classic")
        {
            Conv_grip_classic_orange();
        }
        else if(curr_handle=="powerful")
        {
            Conv_powerful_grip_orange();
        }
    }

    //function to convert handle to upright
    function Conv_handle_upright()
    {
        casual_handle.classList.remove("Blight");
        classic_handle.classList.remove("Blight");
        powerful_handle.classList.remove("Blight");

        upright_handle.classList.add("Blight");

        if(curr_handle=="casual")
        {
            rem_casual_grip();

            handle_casual=document.querySelector(".handle");
            handle_upright=document.querySelector(".handle-upright");

            handle_casual.classList.remove("fadeIn");
            handle_casual.classList.add("fadeOut");

            handle_upright.classList.add("fadeIn");

            curr_handle="upright";

            if(curr_grip_color=="black")
            {
                Conv_grip_upright_black();
            }
            else if(curr_grip_color=="yellow")
            {
                Conv_grip_upright_yellow();
            }
            else if(curr_grip_color=="orange")
            {
                Conv_grip_upright_orange();
            }
            else if(curr_grip_color=="white")
            {
                Conv_grip_upright_white();
            }
        }
        else if(curr_handle=="classic")
        {
            rem_classic_grip();

            handle_upright=document.querySelector(".handle-upright");
            handle_classic=document.querySelector(".handle-classic");

            handle_classic.classList.remove("fadeIn");
            handle_classic.classList.add("fadeOut");

            handle_upright.classList.add("fadeIn");

            curr_handle="upright";

            if(curr_grip_color=="black")
            {
                Conv_grip_upright_black();
            }
            else if(curr_grip_color=="yellow")
            {
                Conv_grip_upright_yellow();
            }
            else if(curr_grip_color=="orange")
            {
                Conv_grip_upright_orange();
            }
            else if(curr_grip_color=="white")
            {
                Conv_grip_upright_white();
            }

        }
        else if(curr_handle=="powerful")
        {
            rem_powerful_grip();

            handle_powerful=document.querySelector(".handle-powerful");
            handle_upright=document.querySelector(".handle-upright");

            handle_powerful.classList.remove("fadeIn");
            handle_powerful.classList.add("fadeOut");

            handle_upright.classList.add("fadeIn");
            curr_handle="upright";

            if(curr_grip_color=="black")
            {
                Conv_grip_upright_black();
            }
            else if(curr_grip_color=="yellow")
            {
                Conv_grip_upright_yellow();
            }
            else if(curr_grip_color=="orange")
            {
                Conv_grip_upright_orange();
            }
            else if(curr_grip_color=="white")
            {
                Conv_grip_upright_white();
            }
        }
        curr_handle="upright";
    }

    //function to convert handle Casual
    function Conv_handle_casual()
    {
        upright_handle.classList.remove("Blight");
        classic_handle.classList.remove("Blight");
        powerful_handle.classList.remove("Blight");

        casual_handle.classList.add("Blight");

        if(curr_handle=="upright")
        {
            rem_upright_grip();

            handle_casual=document.querySelector(".handle");
            handle_upright=document.querySelector(".handle-upright");

            handle_upright.classList.remove("fadeIn");
            handle_upright.classList.add("fadeOut");

            handle_casual.classList.add("fadeIn");

            curr_handle="casual";

            if(curr_grip_color=="black")
            {
                Conv_grip_black();
            }
            else if(curr_grip_color=="yellow")
            {
                Conv_grip_yellow();
            }
            else if(curr_grip_color=="orange")
            {
                Conv_grip_orange();
            }
            else if(curr_grip_color=="white")
            {
                Conv_grip_white();
            }
        }
        else if(curr_handle=="classic")
        {
            rem_classic_grip();
            handle_casual=document.querySelector(".handle");
            handle_classic=document.querySelector(".handle-classic");

            handle_classic.classList.remove("fadeIn");
            handle_classis.classList.add("fadeOut");

            handle_casual.classList.add("fadeIn");

            curr_handle="casual";

            if(curr_grip_color=="black")
            {
                Conv_grip_black();
            }
            else if(curr_grip_color=="yellow")
            {
                Conv_grip_yellow();
            }
            else if(curr_grip_color=="orange")
            {
                Conv_grip_orange();
            }
            else if(curr_grip_color=="white")
            {
                Conv_grip_white();
            }

        }
        else if(curr_handle=="powerful")
        {
            rem_powerful_grip();
            handle_casual=document.querySelector(".handle");
            handle_powerful=document.querySelector(".handle-powerful");

            handle_powerful.classList.remove("fadeIn");
            handle_powerful.classList.add("fadeOut");

            handle_casual.classList.add("fadeIn")
            curr_handle="casual";

            if(curr_grip_color=="black")
            {
                Conv_grip_black();
            }
            else if(curr_grip_color=="yellow")
            {
                Conv_grip_yellow();
            }
            else if(curr_grip_color=="orange")
            {
                Conv_grip_orange();
            }
            else if(curr_grip_color=="white")
            {
                Conv_grip_white();
            }
        }
        curr_handle="casual";
    }

    //function to change the handle to classic
    function Conv_handle_classic()
    {
        upright_handle.classList.remove("Blight");
        casual_handle.classList.remove("Blight");
        powerful_handle.classList.remove("Blight");

        classic_handle.classList.add("Blight");

        if(curr_handle=="casual")
        {
            rem_casual_grip();

            handle_casual=document.querySelector(".handle");
            handle_classic=document.querySelector(".handle-classic");

            handle_casual.classList.remove("fadeIn");
            handle_casual.classList.add("fadeOut");

            handle_classic.classList.add("fadeIn"); 
            
            curr_handle="classic";

            if(curr_grip_color=="black")
            {
                Conv_grip_classic_black();
            }
            else if(curr_grip_color=="white")
            {
                Conv_grip_classic_white();
            }
            else if(curr_grip_color=="orange")
            {
                Conv_grip_classic_orange();
            }
            else if(curr_grip_color=="yellow")
            {
                Conv_grip_classic_yellow();
            }
        }
        else if(curr_handle=="upright")
        {
            rem_upright_grip();

            handle_upright=document.querySelector(".handle-upright");
            handle_classic=document.querySelector(".handle-classic");

            handle_upright.classList.remove("fadeIn");
            handle_upright.classList.add("fadeOut");

            handle_classic.classList.add("fadeIn");
            curr_handle="classic";

            if(curr_grip_color=="black")
            {
                Conv_grip_classic_black();
            }
            else if(curr_grip_color=="white")
            {
                Conv_grip_classic_white();
            }
            else if(curr_grip_color=="orange")
            {
                Conv_grip_classic_orange();
            }
            else if(curr_grip_color=="yellow")
            {
                Conv_grip_classic_yellow();
            }
        }
        else if(curr_handle=="powerful")
        {
            rem_powerful_grip();

            handle_powerful=document.querySelector(".handle-powerful");
            handle_classic=document.querySelector(".handle-classic");

            handle_powerful.classList.remove("fadeIn");
            handle_powerful.classList.add("fadeOut");

            handle_classic.classList.add("fadeIn");
            curr_handle="classic";

            if(curr_grip_color=="black")
            {
                Conv_grip_classic_black();
            }
            else if(curr_grip_color=="white")
            {
                Conv_grip_classic_white();
            }
            else if(curr_grip_color=="orange")
            {
                Conv_grip_classic_orange();
            }
            else if(curr_grip_color=="yellow")
            {
                Conv_grip_classic_yellow();
            }
            
        }
        curr_handle="classic";

    }

    //function to add powerful handle
    function Conv_handle_powerful()
    {
        upright_handle.classList.remove("Blight");
        casual_handle.classList.remove("Blight");
        classic_handle.classList.remove("Blight");

        powerful_handle.classList.add("Blight");

        if(curr_handle=="casual")
        {
            rem_casual_grip();
            handle_casual=document.querySelector(".handle");
            handle_powerful=document.querySelector(".handle-powerful");

            handle_casual.classList.remove("fadeIn");
            handle_casual.classList.add("fadeOut");

            handle_powerful.classList.add("fadeIn");
            curr_handle="powerful";

            if(curr_grip_color=="black")
            {
                Conv_powerful_grip_black();
            }
            else if(curr_grip_color=="white")
            {
                Conv_powerful_grip_white();
            }
            else if(curr_grip_color=="orange")
            {
                Conv_powerful_grip_orange();
            }
            else if(curr_grip_color=="yellow")
            {
                Conv_powerful_grip_yellow();
            }
        }
        else if(curr_handle=="upright")
        {
            rem_upright_grip();
            handle_upright=document.querySelector(".handle-upright");
            handle_powerful=document.querySelector(".handle-powerful");

            handle_upright.classList.remove("fadeIn");
            handle_upright.classList.add("fadeOut");

            handle_powerful.classList.add("fadeIn");
            curr_handle="powerful";

            if(curr_grip_color=="black")
            {
                Conv_powerful_grip_black();
            }
            else if(curr_grip_color=="white")
            {
                Conv_powerful_grip_white();
            }
            else if(curr_grip_color=="orange")
            {
                Conv_powerful_grip_orange();
            }
            else if(curr_grip_color=="yellow")
            {
                Conv_powerful_grip_yellow();
            }

            curr_handle="powerful";
        }
        else if(curr_handle=="classic")
        {
            rem_classic_grip();

            handle_classic=document.querySelector(".handle-classic");
            handle_powerful=document.querySelector(".handle-powerful");

            handle_classic.classList.remove("fadeIn");
            handle_classic.classList.add("fadeOut");

            handle_powerful.classList.add("fadeIn");
            curr_handle="powerful";

            if(curr_grip_color=="black")
            {
                Conv_powerful_grip_black();
            }
            else if(curr_grip_color=="white")
            {
                Conv_powerful_grip_white();
            }
            else if(curr_grip_color=="orange")
            {
                Conv_powerful_grip_orange();
            }
            else if(curr_grip_color=="yellow")
            {
                Conv_powerful_grip_yellow();
            }
        }
    }

    //function to remove powerful grips
    function rem_powerful_grip()
    {
        gripPowerfulBlack=document.querySelector(".grip-powerful-black");
        gripPowerfulWhite=document.querySelector(".grip-powerful-white");
        gripPowerfulYellow=document.querySelector(".grip-powerful-yellow");
        gripPowerfulOrange=document.querySelector(".grip-powerful-orange");

        gripPowerfulBlack.classList.remove("fadeIn");
        gripPowerfulWhite.classList.remove("fadeIn");
        gripPowerfulYellow.classList.remove("fadeIn");
        gripPowerfulOrange.classList.remove("fadeIn");

        gripPowerfulBlack.classList.add("fadeOut");
        gripPowerfulWhite.classList.add("fadeOut");
        gripPowerfulYellow.classList.add("fadeOut");
        gripPowerfulOrange.classList.add("fadeOut");
    }

    //function to change colors of powerful grips
    function Conv_powerful_grip_black()
    {
        gripPowerfulBlack=document.querySelector(".grip-powerful-black");
        gripPowerfulWhite=document.querySelector(".grip-powerful-white");
        gripPowerfulYellow=document.querySelector(".grip-powerful-yellow");
        gripPowerfulOrange=document.querySelector(".grip-powerful-orange");

        gripPowerfulWhite.classList.remove("fadeIn");
        gripPowerfulYellow.classList.remove("fadeIn");
        gripPowerfulOrange.classList.remove("fadeIn");

        gripPowerfulWhite.classList.add("fadeOut");
        gripPowerfulYellow.classList.add("fadeOut");
        gripPowerfulOrange.classList.add("fadeOut");

        gripPowerfulBlack.classList.add("fadeIn");
        curr_grip_color="black";
        
    }

    function Conv_powerful_grip_white()
    {
        gripPowerfulBlack=document.querySelector(".grip-powerful-black");
        gripPowerfulWhite=document.querySelector(".grip-powerful-white");
        gripPowerfulYellow=document.querySelector(".grip-powerful-yellow");
        gripPowerfulOrange=document.querySelector(".grip-powerful-orange");

        gripPowerfulBlack.classList.remove("fadeIn");
        gripPowerfulYellow.classList.remove("fadeIn");
        gripPowerfulOrange.classList.remove("fadeIn");

        gripPowerfulBlack.classList.add("fadeOut");
        gripPowerfulYellow.classList.add("fadeOut");
        gripPowerfulOrange.classList.add("fadeOut");

        gripPowerfulWhite.classList.add("fadeIn");
        curr_grip_color="white";
        
    }

    function Conv_powerful_grip_yellow()
    {
        gripPowerfulBlack=document.querySelector(".grip-powerful-black");
        gripPowerfulWhite=document.querySelector(".grip-powerful-white");
        gripPowerfulYellow=document.querySelector(".grip-powerful-yellow");
        gripPowerfulOrange=document.querySelector(".grip-powerful-orange");

        gripPowerfulWhite.classList.remove("fadeIn");
        gripPowerfulBlack.classList.remove("fadeIn");
        gripPowerfulOrange.classList.remove("fadeIn");

        gripPowerfulWhite.classList.add("fadeOut");
        gripPowerfulBlack.classList.add("fadeOut");
        gripPowerfulOrange.classList.add("fadeOut");

        gripPowerfulYellow.classList.add("fadeIn");
        curr_grip_color="yellow";
    }
    function Conv_powerful_grip_orange()
    {
        gripPowerfulBlack=document.querySelector(".grip-powerful-black");
        gripPowerfulWhite=document.querySelector(".grip-powerful-white");
        gripPowerfulYellow=document.querySelector(".grip-powerful-yellow");
        gripPowerfulOrange=document.querySelector(".grip-powerful-orange");

        gripPowerfulWhite.classList.remove("fadeIn");
        gripPowerfulYellow.classList.remove("fadeIn");
        gripPowerfulBlack.classList.remove("fadeIn");

        gripPowerfulWhite.classList.add("fadeOut");
        gripPowerfulYellow.classList.add("fadeOut");
        gripPowerfulBlack.classList.add("fadeOut");

        gripPowerfulOrange.classList.add("fadeIn");
        curr_grip_color="orange";
        
    }




    //function to remove the classic grips
    function rem_classic_grip()
    {
        gripClassicBlack=document.querySelector(".grip-classic-black");
        gripClassicWhite=document.querySelector(".grip-classic-white");
        gripClassicYellow=document.querySelector(".grip-classic-yellow");
        gripClassicOrange=document.querySelector(".grip-classic-orange");

        gripClassicBlack.classList.remove("fadeIn");
        gripClassicWhite.classList.remove("fadeIn");
        gripClassicYellow.classList.remove("fadeIn");
        gripClassicOrange.classList.remove("fadeIn");

        gripClassicBlack.classList.add("fadeOut");
        gripClassicWhite.classList.add("fadeOut");
        gripClassicYellow.classList.add("fadeOut");
        gripClassicOrange.classList.add("fadeOut");

    }

    //function to change the colors of classic grip
    function Conv_grip_classic_black()
    {
        gripClassicBlack=document.querySelector(".grip-classic-black");
        gripClassicWhite=document.querySelector(".grip-classic-white");
        gripClassicYellow=document.querySelector(".grip-classic-yellow");
        gripClassicOrange=document.querySelector(".grip-classic-orange");

        gripClassicWhite.classList.remove("fadeIn");
        gripClassicYellow.classList.remove("fadeIn");
        gripClassicOrange.classList.remove("fadeIn");

        gripClassicWhite.classList.add("fadeOut");
        gripClassicYellow.classList.add("fadeOut");
        gripClassicOrange.classList.add("fadeOut");

        gripClassicBlack.classList.add("fadeIn");
        curr_grip_color="black";

    }
    function Conv_grip_classic_white()
    {
        gripClassicBlack=document.querySelector(".grip-classic-black");
        gripClassicWhite=document.querySelector(".grip-classic-white");
        gripClassicYellow=document.querySelector(".grip-classic-yellow");
        gripClassicOrange=document.querySelector(".grip-classic-orange");

        gripClassicBlack.classList.remove("fadeIn");
        gripClassicYellow.classList.remove("fadeIn");
        gripClassicOrange.classList.remove("fadeIn");

        gripClassicBlack.classList.add("fadeOut");
        gripClassicYellow.classList.add("fadeOut");
        gripClassicOrange.classList.add("fadeOut");

        gripClassicWhite.classList.add("fadeIn");
        curr_grip_color="white";
    }
    function Conv_grip_classic_yellow()
    {
        gripClassicBlack=document.querySelector(".grip-classic-black");
        gripClassicWhite=document.querySelector(".grip-classic-white");
        gripClassicYellow=document.querySelector(".grip-classic-yellow");
        gripClassicOrange=document.querySelector(".grip-classic-orange");

        gripClassicWhite.classList.remove("fadeIn");
        gripClassicBlack.classList.remove("fadeIn");
        gripClassicOrange.classList.remove("fadeIn");

        gripClassicWhite.classList.add("fadeOut");
        gripClassicBlack.classList.add("fadeOut");
        gripClassicOrange.classList.add("fadeOut");

        gripClassicYellow.classList.add("fadeIn");
        curr_grip_color="yellow";
    }
    function Conv_grip_classic_orange()
    {
        gripClassicBlack=document.querySelector(".grip-classic-black");
        gripClassicWhite=document.querySelector(".grip-classic-white");
        gripClassicYellow=document.querySelector(".grip-classic-yellow");
        gripClassicOrange=document.querySelector(".grip-classic-orange");

        gripClassicWhite.classList.remove("fadeIn");
        gripClassicYellow.classList.remove("fadeIn");
        gripClassicBlack.classList.remove("fadeIn");

        gripClassicWhite.classList.add("fadeOut");
        gripClassicYellow.classList.add("fadeOut");
        gripClassicBlack.classList.add("fadeOut");

        gripClassicOrange.classList.add("fadeIn");
        curr_grip_color="orange";
    }



    //function to change the colors of Upright Grip
    function Conv_grip_upright_black()
    {
        gripUprightBlack=document.querySelector(".grip-upright-black");
        gripUprightWhite=document.querySelector(".grip-upright-white");
        gripUprightYellow=document.querySelector(".grip-upright-yellow");
        gripUprightOrange=document.querySelector(".grip-upright-orange");

        gripUprightWhite.classList.remove("fadeIn");
        gripUprightYellow.classList.remove("fadeIn");
        gripUprightOrange.classList.remove("fadeIn");

        gripUprightWhite.classList.add("fadeOut");
        gripUprightYellow.classList.add("fadeOut");
        gripUprightOrange.classList.add("fadeOut");

        gripUprightBlack.classList.add("fadeIn");
        curr_grip_color="black";
    }

    function Conv_grip_upright_yellow()
    {
        gripUprightBlack=document.querySelector(".grip-upright-black");
        gripUprightWhite=document.querySelector(".grip-upright-white");
        gripUprightYellow=document.querySelector(".grip-upright-yellow");
        gripUprightOrange=document.querySelector(".grip-upright-orange");

        gripUprightWhite.classList.remove("fadeIn");
        gripUprightBlack.classList.remove("fadeIn");
        gripUprightOrange.classList.remove("fadeIn");

        gripUprightWhite.classList.add("fadeOut");
        gripUprightBlack.classList.add("fadeOut");
        gripUprightOrange.classList.add("fadeOut");

        gripUprightYellow.classList.add("fadeIn");
        curr_grip_color="yellow";
    }

    function Conv_grip_upright_white()
    {
        gripUprightBlack=document.querySelector(".grip-upright-black");
        gripUprightWhite=document.querySelector(".grip-upright-white");
        gripUprightYellow=document.querySelector(".grip-upright-yellow");
        gripUprightOrange=document.querySelector(".grip-upright-orange");

        gripUprightYellow.classList.remove("fadeIn");
        gripUprightBlack.classList.remove("fadeIn");
        gripUprightOrange.classList.remove("fadeIn");

        gripUprightYellow.classList.add("fadeOut");
        gripUprightBlack.classList.add("fadeOut");
        gripUprightOrange.classList.add("fadeOut");

        gripUprightWhite.classList.add("fadeIn");
        curr_grip_color="white";
    }

    function Conv_grip_upright_orange()
    {
        gripUprightBlack=document.querySelector(".grip-upright-black");
        gripUprightWhite=document.querySelector(".grip-upright-white");
        gripUprightYellow=document.querySelector(".grip-upright-yellow");
        gripUprightOrange=document.querySelector(".grip-upright-orange");

        gripUprightYellow.classList.remove("fadeIn");
        gripUprightBlack.classList.remove("fadeIn");
        gripUprightWhite.classList.remove("fadeIn");

        gripUprightYellow.classList.add("fadeOut");
        gripUprightBlack.classList.add("fadeOut");
        gripUprightWhite.classList.add("fadeOut");

        gripUprightOrange.classList.add("fadeIn");
        curr_grip_color="orange";
    }

    //Upgrades
    //Frame upgrade

    function Conv_frame_matte()
    {
        rem_frame_colors();
        simpleFrame=document.querySelector(".frame");
        matteFrame=document.querySelector(".frame-matte");
        glossFrame=document.querySelector(".frame-gloss");

        simpleFrame.classList.remove("fadeIn");
        glossFrame.classList.remove("fadeIn");

        simpleFrame.classList.add("fadeOut");
        glossFrame.classList.add("fadeOut");

        matteFrame.classList.add("fadeIn");
        curr_frame_upgrade="matte";

        update_frame_prices();
    }
    function Conv_frame_simple()
    {
        simpleFrame=document.querySelector(".frame");
        matteFrame=document.querySelector(".frame-matte");
        glossFrame=document.querySelector(".frame-gloss");

        matteFrame.classList.remove("fadeIn");
        glossFrame.classList.remove("fadeIn");

        matteFrame.classList.add("fadeOut");
        glossFrame.classList.add("fadeOut");

        simpleFrame.classList.add("fadeIn");
        curr_frame_upgrade="simple";

        update_frame_prices();
    }
    function Conv_frame_gloss()
    {
        rem_frame_colors();
        simpleFrame=document.querySelector(".frame");
        matteFrame=document.querySelector(".frame-matte");
        glossFrame=document.querySelector(".frame-gloss");

        matteFrame.classList.remove("fadeIn");
        simpleFrame.classList.remove("fadeIn");

        matteFrame.classList.add("fadeOut");
        simpleFrame.classList.add("fadeOut");

        glossFrame.classList.add("fadeIn");

        curr_frame_upgrade="gloss";

        update_frame_prices();
    }

    //function to hide frame upgrades
    function rem_frame_upgrades()
    {
        matteFrame=document.querySelector(".frame-matte");
        glossFrame=document.querySelector(".frame-gloss");

        matteFrame.classList.remove("fadeIn");
        glossFrame.classList.remove("fadeIn");

        matteFrame.classList.add("fadeOut");
        glossFrame.classList.add("fadeOut");
    }

    //function to hide all the frame colors
    function rem_frame_colors()
    {
        fr_Black=document.querySelector(".frame");
        fr_Green=document.querySelector(".frameGreen");
        fr_Mint=document.querySelector(".frameMint");
        fr_Orange=document.querySelector(".frameOrange");
        fr_Red=document.querySelector(".frameRed");
        fr_Sky=document.querySelector(".frameSky");
        fr_White=document.querySelector(".frameWhite");
        fr_Yellow=document.querySelector(".frameYellow");

        fr_Black.classList.remove("fadeIn");
        fr_Green.classList.remove("fadeIn");
        fr_Mint.classList.remove("fadeIn");
        fr_Orange.classList.remove("fadeIn");
        fr_Red.classList.remove("fadeIn");
        fr_Sky.classList.remove("fadeIn");
        fr_Yellow.classList.remove("fadeIn");
        fr_White.classList.remove("fadeIn");

        fr_Black.classList.add("fadeOut");
        fr_Green.classList.add("fadeOut");
        fr_Mint.classList.add("fadeOut");
        fr_Orange.classList.add("fadeOut");
        fr_Red.classList.add("fadeOut");
        fr_Sky.classList.add("fadeOut");
        fr_Yellow.classList.add("fadeOut");
        fr_White.classList.add("fadeOut");
    }

    //function for tyre upgrade
    function Conv_tyre_grandprix()
    {
        tyreSimple=document.querySelector(".tyres");
        tyreGrandPrix=document.querySelector(".grand-prix");
        tyreGatorskin=document.querySelector(".gatorskin");

        tyreSimple.classList.remove("fadeIn");
        tyreGatorskin.classList.remove("fadeIn");

        tyreSimple.classList.add("fadeOut");
        tyreGatorskin.classList.add("fadeOut");

        tyreGrandPrix.classList.add("fadeIn");
        curr_tyre_upgrade="grandprix";

        update_tyres_price();
    }
    function Conv_tyre_simple()
    {
        tyreSimple=document.querySelector(".tyres");
        tyreGrandPrix=document.querySelector(".grand-prix");
        tyreGatorskin=document.querySelector(".gatorskin");

        tyreGrandPrix.classList.remove("fadeIn");
        tyreGatorskin.classList.remove("fadeIn");

        tyreGrandPrix.classList.add("fadeOut");
        tyreGatorskin.classList.add("fadeOut");

        tyreSimple.classList.add("fadeIn");
        curr_tyre_upgrade="simple";

        update_tyres_price();
    }
    function Conv_tyre_gatorskin()
    {
        tyreSimple=document.querySelector(".tyres");
        tyreGrandPrix=document.querySelector(".grand-prix");
        tyreGatorskin=document.querySelector(".gatorskin");

        tyreGrandPrix.classList.remove("fadeIn");
        tyreSimple.classList.remove("fadeIn");

        tyreGrandPrix.classList.add("fadeOut");
        tyreSimple.classList.add("fadeOut");

        tyreGatorskin.classList.add("fadeIn");
        curr_tyre_upgrade="gatorskin";

        update_tyres_price();
    }

    //function to upgrade seat
    function Conv_seat_golden()
    {
        seatGolden=document.querySelector(".golden-seat");
        seatSimple=document.querySelector(".seat");

        seatSimple.classList.remove("fadeIn");
        seatSimple.classList.add("fadeOut");

        seatGolden.classList.add("fadeIn");
        curr_brook_upgrade="golden";
        update_brook_price();
    }

    function Conv_seat_simple()
    {

        seatGolden=document.querySelector(".golden-seat");
        seatSimple=document.querySelector(".seat");

        seatGolden.classList.remove("fadeIn");
        seatGolden.classList.add("fadeOut");

        seatSimple.classList.add("fadeIn");

        curr_brook_upgrade="simple";

        update_brook_price();
    }

    //function to upgrade chain
    function Conv_chain_rust()
    { 
        rem_chain_colors();
        rustBuster=document.querySelector(".rustbuster");
        chainSimple=document.querySelector(".chain");

        chainSimple.classList.remove("fadeIn");
        chainSimple.classList.add("fadeOut");

        rustBuster.classList.add("fadeIn");
        curr_chain_upgrade="rust";

        update_chain_price();
    }
    function Conv_chain_simple()
    {
        rustBuster=document.querySelector(".rustbuster");
        chainSimple=document.querySelector(".chain");

        rustBuster.classList.remove("fadeIn");
        rustBuster.classList.add("fadeOut");

        chainSimple.classList.add("fadeIn");
        curr_chain_upgrade="simple";

        update_chain_price();
    }

    //function to remove all the color of chain
    function rem_chain_colors()
    {
        var ch_Black=document.querySelector(".chain");
        var ch_Yellow=document.querySelector(".chainYellow");
        var ch_Orange=document.querySelector(".chainOrange");
        var ch_Red=document.querySelector(".chainRed"); 
        var ch_Pink=document.querySelector(".chainPink");
        var ch_White=document.querySelector(".chainWhite");

        ch_Orange.classList.remove("fadeIn");
        ch_White.classList.remove("fadeIn");
        ch_Black.classList.remove("fadeIn");
        ch_Pink.classList.remove("fadeIn");
        ch_Red.classList.remove("fadeIn");
        ch_Yellow.classList.remove("fadeIn");

        ch_Orange.classList.add("fadeOut");
        ch_White.classList.add("fadeOut");
        ch_Black.classList.add("fadeOut");
        ch_Pink.classList.add("fadeOut");
        ch_Red.classList.add("fadeOut");
        
        ch_Yellow.classList.add("fadeOut");
    }

    //function for cargo upgrade
    function add_cargo()
    {
        Cargo=document.querySelector(".cargo");

        Cargo.classList.add("fadeIn");
        curr_cargo_upgrade="rack";
        update_cargo_price();
    }
    
    function rem_cargo()
    {
        Cargo=document.querySelector(".cargo");

        Cargo.classList.remove("fadeIn");
        Cargo.classList.add("fadeOut");
        curr_cargo_upgrade="simple";
        update_cargo_price();
    }

    //function to update general price
    function update_price()
    {
        fOp1=document.querySelector(".f-op-1");
        tOp1=document.querySelector(".t-op-3");
        bOp1=document.querySelector(".b-op-1");
        cOp1=document.querySelector(".c-op-1");
        caOp1=document.querySelector(".cargo-op-1");

        fOp1.classList.add("light");
        tOp1.classList.add("light");
        bOp1.classList.add("light");
        cOp1.classList.add("light");
        caOp1.classList.add("light");
        casual_handle.classList.add("Blight");

        p=document.querySelector(".price");
        p1=document.querySelector(".price1");

        p.innerHTML=cost;
        p1.innerHTML=cost;
    }

    //function to update cargo price
    function update_cargo_price()
    {
        option1=document.querySelector(".cargo-op-1");
        option2=document.querySelector(".cargo-op-2");

        p=document.querySelector(".price");
        p1=document.querySelector(".price1");

        //for cargo 
        if(curr_cargo_upgrade=="rack" && cargo_again==0)
        {
            option1.classList.remove("light");
            option2.classList.add("light");

            cargo_upgrade=true;
            cost=cost+500;
            p.innerHTML=cost;
            p1.innerHTML=cost;
            cargo_again=1;
        }
        else if(curr_cargo_upgrade=="simple")
        {
            option2.classList.remove("light");
            option1.classList.add("light");

            if(cargo_upgrade==true)
            {
                cost=cost-500;
                p.innerHTML=cost;
                p1.innerHTML=cost;
                cargo_upgrade=false;
                cargo_again=0;
            }
        }
    }

    //function to update chain_price
    function update_chain_price()
    {
        option1=document.querySelector(".c-op-1");
        option2=document.querySelector(".c-op-2");

        p=document.querySelector(".price");
        p1=document.querySelector(".price1");

        if(curr_chain_upgrade=="rust" && chain_again==0)
        {
            option1.classList.remove("light");
            option2.classList.add("light");
            chain_upgrade=true;
            cost=cost+1000;
            p.innerHTML=cost;
            p1.innerHTML=cost;
            chain_again=1;
        }
        else if(curr_chain_upgrade=="simple")
        {
            option2.classList.remove("light");
            option1.classList.add("light");

            if(chain_upgrade==true)
            {
                cost=cost-1000;
                p.innerHTML=cost;
                p1.innerHTML=cost;
                chain_upgrade=false;
                chain_again=0;
            }
        }
    }

    function update_brook_price()
    {
        option1=document.querySelector(".b-op-1");
        option2=document.querySelector(".b-op-2");

        p=document.querySelector(".price");
        p1=document.querySelector(".price1");

        if(curr_brook_upgrade=="golden" && brook_again==0)
        {
            option1.classList.remove("light");
            option2.classList.add("light");

            brook_upgrade=true;
            cost=cost+800;
            p.innerHTML=cost;
            p1.innerHTML=cost;
            brook_again=1;
        }
        else if(curr_brook_upgrade="simple")
        {
            option2.classList.remove("light");
            option1.classList.add("light");
            if(brook_upgrade==true)
            {
                cost=cost-800;
                p.innerHTML=cost;
                p1.innerHTML=cost;
                brook_upgrade=false;
                brook_again=0;
            }
        }
    }

    //function to upgrade price for tyres

    function update_tyres_price()
    {
        option1=document.querySelector(".t-op-3");
        option2=document.querySelector(".t-op-1");
        option3=document.querySelector(".t-op-2");

        p=document.querySelector(".price");
        p1=document.querySelector(".price1");

        if(curr_tyre_upgrade=="gatorskin" && gat_again==0)
        {
            gat_upgrade=true;
            option1.classList.remove("light");
            option3.classList.remove("light");

            option2.classList.add("light");

            if(grand_upgrade==true)
            {
                cost=cost-1500;
                cost=cost+1200;
                p.innerHTML=cost;
                p1.innerHTML=cost;
                grand_upgrade=false;
                grand_again=0;
            }
            else
            {
                cost=cost+1200;
                p.innerHTML=cost;
                p1.innerHTML=cost;
            } 
            
            gat_again=1;
        }
        else if(curr_tyre_upgrade=="grandprix" && grand_again==0)
        {
            grand_upgrade=true;

            option1.classList.remove("light");
            option2.classList.remove("light");

            option3.classList.add("light");

            if(gat_upgrade==true)
            {
                cost=cost-1200;
                cost=cost+1500;
                p.innerHTML=cost;
                p1.innerHTML=cost;
                gat_upgrade=false;
                gat_again=0;
            }
            else
            {
                cost=cost+1500;
                p.innerHTML=cost;
                p1.innerHTML=cost;
            }
            grand_again=1;
        }
        else if(curr_tyre_upgrade=="simple")
        {
            option2.classList.remove("light");
            option3.classList.remove("light");

            option1.classList.add("light");

            if(gat_upgrade==true)
            {
                cost=cost-1200;
                gat_upgrade=false;
                gat_again=0;
                p.innerHTML=cost;
                p1.innerHTML=cost;
            }
            if(grand_upgrade==true)
            {
                cost=cost-1500;
                grand_upgrade=false;
                grand_again=0;
                p.innerHTML=cost;
                p1.innerHTML=cost;
            }

        }
    }

    //function to update the frame upgrade prices

    function update_frame_prices()
    {
        option1=document.querySelector(".f-op-1");
        option2=document.querySelector(".f-op-2");
        option3=document.querySelector(".f-op-3");


        p=document.querySelector(".price");
        p1=document.querySelector(".price1");

        if(curr_frame_upgrade=="matte" && matte_again==0)
        {
            matte_upgrade=true;
            option1.classList.remove("light");
            option3.classList.remove("light");

            option2.classList.add("light");
            if(gloss_upgrade==true)
            {
                cost=cost-2500;
                cost=cost+2000;
                p.innerHTML=cost;
                p1.innerHTML=cost;
                gloss_upgrade=false;
                gloss_again=0;
            }
            else
            {
                cost=cost+2000;
                p.innerHTML=cost;
                p1.innerHTML=cost;
            }
            matte_again=1;
        }
        else if(curr_frame_upgrade=="gloss" && gloss_again==0)
        {
            gloss_upgrade=true;
            option1.classList.remove("light");
            option2.classList.remove("light");

            option3.classList.add("light");

            if(matte_upgrade==true)
            {
                cost=cost-2000;
                cost=cost+2500;
                p.innerHTML=cost;
                p1.innerHTML=cost;
                matte_upgrade=false;
                matte_again=0;
            }
            else
            {
                cost=cost+2500;
                p.innerHTML=cost;
                p1.innerHTML=cost;
            }
            gloss_again=1;
        }
        else if(curr_frame_upgrade=="simple")
        {
            option2.classList.remove("light");
            option3.classList.remove("light");

            option1.classList.add("light");
            if(matte_upgrade==true)
            {
                cost=cost-2000;
                matte_upgrade=false;
                matte_again=0;
                p.innerHTML=cost;
                p1.innerHTML=cost;
            }
            else if(gloss_upgrade==true)
            {
                cost=cost-2500;
                gloss_upgrade=false;
                gloss_again=0;
                p.innerHTML=cost;
                p1.innerHTML=cost;
            }
        }
    }
    function back_purple()
    {
        cBack.style.background="url(back/background_purple.gif)";
        cBack.style.backgroundSize="100% 100%";
        cBack.style.backgroundPostion="center";
    }
    function back_silver()
    {
        cBack.style.background="url(back/background_grey_1.gif)";
        cBack.style.backgroundSize="100% 100%";
        cBack.style.backgroundPostion="center";
    }
    function back_black()
    {
        cBack.style.background="url(back/background_black.gif)";
        cBack.style.backgroundSize="100% 100%";
        cBack.style.backgroundPostion="center";
    }
    function back_blue()
    {
        cBack.style.background="url(back/background_blue.jpg)";
        cBack.style.backgroundSize="100% 100%";
        cBack.style.backgroundPostion="center";
    }
    function back_mint()
    {
        cBack.style.background="url(back/background_celeste.gif)";
        cBack.style.backgroundSize="100% 100%";
        cBack.style.backgroundPostion="center";
    }
    function back_orange()
    {
        cBack.style.background="url(back/background_orange.jpg)";
        cBack.style.backgroundSize="100% 100%";
        cBack.style.backgroundPostion="center";
    }
    function back_red()
    {
        cBack.style.background="url(back/background_red.gif)";
        cBack.style.backgroundSize="100% 100%";
        cBack.style.backgroundPostion="center";
    }
    function back_yellow()
    {
        cBack.style.background="url(back/background_yellow.gif)";
        cBack.style.backgroundSize="100% 100%";
        cBack.style.backgroundPostion="center";
    }
    function back_light_yellow()
    {
        cBack.style.background="url(back/background_white.gif)";
        cBack.style.backgroundSize="100% 100%";
        cBack.style.backgroundPostion="center";
    }

    
    update_price();

}

customize();