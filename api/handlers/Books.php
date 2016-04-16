<?php

namespace handlers;

use lib\Error;
use lib\Handler;

class Books extends Handler {

    public function get($id) {

        if (isset($id)) {

            $response = $this->select(
                'SELECT b.*, s.name AS subject FROM books b ' .
                'JOIN subjects s ON s.id = b.subjectid ' .
                'WHERE b.id = ?',
                [$id]
            );

            if ($response) {
                $response = $response[0];
            } else {
                (new Error('Subject Not Found'))->send();
            }

            $response['authors'] = $this->select(
                'SELECT a.id AS authorid, a.name FROM authors a ' .
                'JOIN authorassoc aa ON aa.authorid = a.id ' .
                'WHERE aa.bookid = ?',
                [$id]
            );
        } else {
            $response = $this->select('SELECT * FROM books');
        }

        $this->send($response);
    }

    public function getBooksByAuthor($id) {

        return $this->select(
            'SELECT * FROM books JOIN authorassoc ON books.id = authorassoc.bookid WHERE authorid = ?',
            [$id]
        );
    }

    public function getBooksBySubject($id) {

        return $this->select(
            'SELECT * FROM books WHERE subjectid = ?',
            [$id]
        );
    }
}
