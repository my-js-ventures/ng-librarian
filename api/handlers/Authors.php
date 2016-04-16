<?php

namespace handlers;

use lib\Error;
use lib\Handler;

class Authors extends Handler {

    public function get($id) {

        if (isset($id)) {
            $response = $this->select(
                'SELECT * FROM authors WHERE authorid = ?',
                [$id]
            );

            if ($response) {
                $response = $response[0];
            } else {
                (new Error('Author Not Found'))->send();
            }

            $response['books'] = (new Books())->getBooksByAuthor($id);
        } else {
            $response = $this->select(
                'SELECT *, (SELECT count(*) FROM authorassoc WHERE authorid = a.authorid) as written ' .
                'FROM authors a'
            );
        }

        $this->send($response);
    }

    public function post() {

        $this->send(func_get_args());
    }
}
