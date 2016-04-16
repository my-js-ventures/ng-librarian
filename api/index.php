<?php

error_reporting(0);
header('Content-Type: application/json');

function __autoload($class) {

    require_once str_replace('\\', '/', $class) . '.php';
}

new lib\Server();
