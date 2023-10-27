<!DOCTYPE html>
 <html lang="en">
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="public/css/main.css">

    <title>Single page landing | KreateDigital</title>
 </head>
 <body>
    <header id="masthead" class="main-header">
        <div class="container flex a-center f-between">
            <a href="<?php echo $url ?>" class="logo">Kreate<span>Digital</span></a>
            <nav class="main-nav">
                <button id="menuToggler" class="menu-toggle">
                    <div class="box">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                </button>
                <ul id="menuDropDown" class="menu-items">
                    <li class="item-wrap"><a href="#work" class="item">Works</a></li>
                    <li class="item-wrap"><a href="#services" class="item">Services</a></li>
                    <li class="item-wrap"><a href="#team" class="item">Team</a></li>
                    <li class="item-wrap"><a href="#pricing" class="item">Prices</a></li>
                    <li class="item-wrap"><a href="#contact" class="item">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    </header>