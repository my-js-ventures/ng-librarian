<?php

namespace lib;

class Server {

    private $_url = "";
    private $_method = "";

    public function __construct() {

        $this->parseApi();
        $this->serveApi();
    }

    private function getData() {

        $data = array();

        switch ($this->_method) {
            case 'delete':
            case 'get':
                $data = $_GET;
                break;
            case 'post':
            case 'put':
                $data = json_decode(file_get_contents("php://input"), TRUE);
                break;
        }

        return $data;
    }

    private function parseApi() {

        $_400 = new Error('Invalid Endpoint', 400);

        if (!isset($_SERVER['PATH_INFO'])) {
            $_400->send();
        }

        $url = explode('/', trim($_SERVER['PATH_INFO'], '/ '));

        if ($url[0] === '') {
            $_400->send();
        }

        $this->_method = strtolower($_SERVER['REQUEST_METHOD']);
        $this->_url = $url;
    }

    private function serveApi() {

        $_404 = new Error('API Not Found', 404);
        $_501 = new Error('API Not Implemented', 501);

        $url = $this->_url;
        $method = $this->_method;

        if (file_exists('handlers/' . $url[0] . '.php')) {

            $handler = "handlers\\" . $url[0];
            $handler = new $handler();
            $params = array_slice($url, 1);

            $params = array_merge($params, $this->getData());

            if (method_exists($handler, $method)) {
                call_user_func_array([$handler, $method], $params);
            } else {
                $_501->send();
            }
        } else {
            $_404->send();
        }
    }
}
