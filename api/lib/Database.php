<?php
namespace lib;

class Database extends \mysqli {

    function __construct($_host, $_user, $_pass, $_name) {

        parent::__construct($_host, $_user, $_pass, $_name);

        if ($this->connect_error) {
            (new Error($this->connect_error, 502))->send();
        }
    }

    function __destruct() {

        $this->close();
    }

    private function bindParams(&$stmt, $params) {

        foreach ($params as $key => $value) {
            $params[$key] = &$value;
        }

        array_unshift($params, str_repeat('s', count($params)));

        call_user_func_array([
            $stmt,
            'bind_param'
        ], $params);
    }

    public function select($sql, $params = []) {

        $stmt = $this->prepare($sql);

        if (!$stmt) {
            (new Error($this->error, 500))->send();
        }

        $this->bindParams($stmt, $params);

        $stmt->execute();
        $result = $stmt->get_result();

        if (!$result) {
            (new Error($stmt->error, 500))->send();
        }

        return $result->fetch_all(MYSQLI_ASSOC);
    }
}
