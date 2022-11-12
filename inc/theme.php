<?php
/**
 * Custom Theme & Module Functions.
 */
function dar_inline_svg($name){
    if(file_exists(get_stylesheet_directory() . "/_/img/svg/" . $name . ".svg")){
        echo file_get_contents(get_stylesheet_directory() . "/_/img/svg/" . $name . ".svg");
    }
}
