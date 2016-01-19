<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

		<link href="//www.google-analytics.com" rel="dns-prefetch">
        <link href="<?php echo get_template_directory_uri(); ?>/favicon.ico" rel="shortcut icon">
        <link href="<?php echo get_template_directory_uri(); ?>/touch.png" rel="apple-touch-icon-precomposed">

        <?php wp_head(); ?>
        <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/main.css">
        
    </head>
    <body <?php body_class(); ?>>

        <div class="wrapper">

            <header>
                
                <a href="#main-menu">menu</a>

                <nav id="main-menu" role="navigation">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>
                            <a href="/about/">About us</a>
                            <ul>
                                <li><a href="/about/history/">History</a></li>
                                <li><a href="/about/team/">The team</a></li>
                                <li><a href="/about/address/">Our address</a></li>
                            </ul>
                        </li>
                        <li><a href="/contact/">Contact</a></li>
                    </ul>
                </nav>
                
            </header>