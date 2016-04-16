<?php

namespace handlers;

use lib\Handler;

class Books extends Handler {

    public function get() {

        $books = $this->select(
            'SELECT b.*, s.name AS subject FROM books b ' .
            'JOIN subjects s ON s.id = b.subjectid'
        );

        foreach ($books as &$book) {
            $book['authors'] = $this->select(
                'SELECT a.id AS authorid, a.name FROM authors a ' .
                'JOIN authorassoc aa ON aa.authorid = a.id ' .
                'WHERE aa.bookid = "' . $book['id'] . '"'
            );
        }

        $this->send($books);
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
