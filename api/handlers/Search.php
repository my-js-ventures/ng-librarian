<?php

namespace handlers;

use lib\Handler;

class Search extends Handler {

    public function get() {

        $books = $this->select('SELECT bookid AS id, bookid, accessno, rackno, title AS name, \'book\' AS type FROM books');
        $authors = $this->select('SELECT authorid AS id, authorid, name, \'author\' AS type FROM authors');
        $subjects = $this->select('SELECT subjectid AS id, subjectid, name, \'subject\' AS type FROM subjects');

        $response = array_merge($books, $authors, $subjects);

        usort($response, function ($a, $b) {

            return strcmp($a['name'], $b['name']);
        });

        $this->send($response);
    }

    public function post() {

        $this->send(func_get_args());
    }
}
