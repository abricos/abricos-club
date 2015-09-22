<?php

$config['phrase']['sys'] = array(
    "phone" => "+7 (123) 456 78 90",
    "address" => "Казань, ул. Кремлевская, дом. 1",
    "site_name" => "Клуб Абрикос"
);

$config['Template'] = array(
    "default" => array(
        "owner" => "club",
        "name" => "main"
    ),
    "ignore" => array(
        array(
            "pattern" => "/^\/bos\//i",
            "regexp" => true
        )
    ),
    "exp" => array(
        array(
            "pattern" => "/",
            "regexp" => false,
            "owner" => "club",
            "name" => "home"
        )
    )
);

?>