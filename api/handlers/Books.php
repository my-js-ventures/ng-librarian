<?php

namespace handlers;

use lib\Error;
use lib\Handler;

class Books extends Handler {

    public function get($id) {

        if (isset($id)) {

            $response = $this->select(
                'SELECT b.*, s.name AS subject FROM books b ' .
                'JOIN subjects s USING (subjectid) ' .
                'WHERE b.bookid = ?',
                [$id]
            );

            if ($response) {
                $response = $response[0];
            } else {
                (new Error('Subject Not Found'))->send();
            }

            $response['authors'] = $this->select(
                'SELECT a.* FROM authors a ' .
                'JOIN authorassoc aa USING (authorid) ' .
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
            'SELECT b.* FROM books b JOIN authorassoc aa USING (bookid) WHERE aa.authorid = ?',
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
