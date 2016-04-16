<?php

namespace lib;

class Handler extends Database {

    function __construct() {

        parent::__construct('localhost', 'root', 'root', 'my-librarian');
    }

    public function send($result = []) {

        echo json_encode($result);
    }
}
