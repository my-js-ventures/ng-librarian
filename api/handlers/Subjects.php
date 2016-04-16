<?php

namespace handlers;

use lib\Error;
use lib\Handler;

class Subjects extends Handler {

    public function get($id) {

        if (isset($id)) {
            $response = $this->select(
                'SELECT * FROM subjects WHERE id = ?',
                [$id]
            );

            if ($response) {
                $response = $response[0];
            } else {
                (new Error('Subject Not Found'))->send();
            }

            $response['books'] = (new Books())->getBooksBySubject($id);
        } else {
            $response = $this->select(
                'SELECT s.*, (SELECT count(id) FROM books WHERE subjectid = s.id) AS has ' .
                'FROM subjects s'
            );
        }

        $this->send($response);
    }

    public function post() {

        $this->send(func_get_args());
    }
}
