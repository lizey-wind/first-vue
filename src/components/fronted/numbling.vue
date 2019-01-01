<template>
    <div><div class="main">
            <ul class="cbp_tmtimeline">
                <li>
                    <time class="cbp_tmtime" datetime="2017-11-12 21:12">
                        <span>11-12</span>
                        <span>2017</span>
                    </time>
                    <div class="cbp_tmicon cbp_tmtime-phone"></div>
                    <div class="cbp_tmlabel">
                        <h2>今天很开心</h2>
                        <p>
                            Winter purslane courgette pumpkin quandong komatsuna fennel green bean cucumber
                            watercress. Pea sprouts wattle seed rutabaga okra yarrow cress avocado grape radish
                            bush tomato ricebean black-eyed pea maize eggplant. Cabbage lentil cucumber chickpea
                        </p>
                    </div>
                </li>
                <li>
                    <time class="cbp_tmtime" datetime="2017-04-15T10:00">
                        <span>04-15</span>
                        <span>2017</span>
                    </time>
                    <div class="cbp_tmicon cbp_tmtime-phone"></div>
                    <div class="cbp_tmlabel">
                        <h2>今天很开心</h2>
                        <p>
                            Winter purslane courgette pumpkin quandong komatsuna fennel green bean cucumber
                            watercress. Pea sprouts wattle seed rutabaga okra yarrow cress avocado grape radish
                            bush tomato ricebean black-eyed pea maize eggplant. Cabbage lentil cucumber chickpea
                        </p>
                    </div>
                </li>
                <li>
                    <time class="cbp_tmtime" datetime="2017-04-15T10:00">
                        <span>04-15</span>
                        <span>2017</span>
                    </time>
                    <div class="cbp_tmicon cbp_tmtime-phone"></div>
                    <div class="cbp_tmlabel">
                        <h2>今天很开心</h2>
                        <p>
                            Winter purslane courgette pumpkin quandong komatsuna fennel green bean cucumber
                            watercress. Pea sprouts wattle seed rutabaga okra yarrow cress avocado grape radish
                            bush tomato ricebean black-eyed pea maize eggplant. Cabbage lentil cucumber chickpea
                        </p>
                    </div>
                </li>
                <li>
                    <time class="cbp_tmtime" datetime="2017-04-15T10:00">
                        <span>04-15</span>
                        <span>2017</span>
                    </time>
                    <div class="cbp_tmicon cbp_tmtime-phone"></div>
                    <div class="cbp_tmlabel">
                        <h2>今天很开心</h2>
                        <p>
                            Winter purslane courgette pumpkin quandong komatsuna fennel green bean cucumber
                            watercress. Pea sprouts wattle seed rutabaga okra yarrow cress avocado grape radish
                            bush tomato ricebean black-eyed pea maize eggplant. Cabbage lentil cucumber chickpea
                        </p>
                    </div>
                </li>
                <li>
                    <time class="cbp_tmtime" datetime="2017-04-15T10:00">
                        <span>04-15</span>
                        <span>2017</span>
                    </time>
                    <div class="cbp_tmicon cbp_tmtime-phone"></div>
                    <div class="cbp_tmlabel">
                        <h2>今天很开心</h2>
                        <p>
                            Winter purslane courgette pumpkin quandong komatsuna fennel green bean cucumber
                            watercress. Pea sprouts wattle seed rutabaga okra yarrow cress avocado grape radish
                            bush tomato ricebean black-eyed pea maize eggplant. Cabbage lentil cucumber chickpea
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        
    </div>
</template>
<script type="text/ecmascript-6">
export default {
    
}
</script>
<style scoped>

body{
    font-family: 'Lato',Calibri,Arial,sans-serif;
}
li{
    display: list-item;
}
.time-line{
    margin-top: 5.0em;
}
.bg-word{
    background: #f1e3f5;
}
.main, .container>header{
    width: 90%;
    max-width: 69em;
    margin: 0px auto;
    padding: 0  1.875em  3.125em  1.875em;
}
.cbp_tmtimeline{
    margin: 30px 0 0 0;
    padding: 0;
    position: relative;
}
/*the line */
.cbp_tmtimeline:before{
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 10px;
    background: #afdcf8;
    left: 20%;
    margin-left: -10px;
}
.cbp_tmtimeline > li{
    position: relative;
}
/*the date/time */
.cbp_tmtimeline > li .cbp_tmtime{
    display: block;
    width: 25%;
    padding-right: 100px;
    position: absolute;
}
.cbp_tmtimeline > li .cbp_tmtime span{
    display: block;
    text-align: right;
}
.cbp_tmtimeline > li .cbp_tmtime span:first-child{
    font-size: 1.2em;
    color: #bdd0db;
}
.cbp_tmtimeline > li .cbp_tmtime span:last-child{
    font-size: 2.9em;
    color: #3594cb;
}
.cbp_tmtimeline > li:nth-child(odd) .cbp_tmtime span:last-child{
    color:#6cbfee;
}

/*the icons*/
.cbp_tmtimeline > li .cbp_tmicon{
    width: 40px;
    height: 40px;
    font-family: 'ecoico';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    font-size: 1.4em;
    line-height: 40px;
    -webkit-font-smoothing:antialiased;
    position: absolute;
    color: #fff;
    background: #46a4da;
    border-radius: 50%;
    box-shadow: 0 0 0 8px #afdcf8;
    text-align: center;
    left: 20%;
    top: 0;
    margin: 0 0 0 -25px;
}
.cbp_tmtime-phone:before{
    content: "\e000";
}

/*Right content*/
.cbp_tmtimeline > li .cbp_tmlabel{
    margin: 0 0 15px 25%;
    background: #3594cb;
    color: #fff;
    padding: 2em;
    font-size: 1.2em;
    font-weight: 300;
    line-height: 1.4;
    position: relative;
    border-radius: 5px;
}
.cbp_tmtimeline > li:nth-child(odd)  .cbp_tmlabel{
    background: #6cbfee;
}

/*the triangle*/
.cbp_tmtimeline > li .cbp_tmlabel:after{
    right: 100%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-right-color: #3594cb;
    border-width: 10px;
    top: 10px;
}
.cbp_tmtimeline > li .cbp_tmlabel h2{
    margin-top: 0px;
    padding: 0 0 10px 0;
    border-bottom: 1px solid rgba(255,255,255,0.4);
}
@media screen and  (max-width: 65.375em){
    .cbp_tmtimeline > li .cbp_tmtime span:last-child{
        font-size: 1.5em;
    }
}
@media screen and (max-width: 47.2em){
    .cbp_tmtimeline:before{
        display: none;
    }
    .cbp_tmtimeline > li .cbp_tmtime{
        width: 100%;
        position: relative;
        padding: 0 0 20px 0;
    }
    .cbp_tmtimeline > li .cbp_tmtime span{
        text-align: left;
    }
    .cbp_tmtimeline > li .cbp_tmlabel{
        margin: 0 0 30px 0;
        padding: 1em;
        font-size: 95%;
        font-weight: 400;
    }
    .cbp_tmtimeline > li .cbp_tmlabel:after{
        right: auto;
        left: 20px;
        border-right-color: transparent;
        border-bottom-color: #3594cb;
        top: -20px;
    }
    .cbp_tmtimeline > li:nth-child(odd) .cbp_tmlabel:after{
        border-right-color: transparent;
        border-bottom-color: #6cbfee;
    }
    .cbp_tmtimeline > li .cbp_tmicon{
        position: relative;
        float: right;
        left: auto;
        margin: -55px 5px 0 0px;
    }
}
</style>

