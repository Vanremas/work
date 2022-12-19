
<?php

$date = [
    "title" => $_POST['title'],
    "content" => $_POST['content']
];

$connect = new PDO('mysql:host=localhost; dbname=ajax', 'root', 'root');
$sql = 'INSERT INTO `posts` (title, content) VALUES (:title, :content)';
$statment = $connect->prepare($sql);
$res = $statment->execute($date);
var_dump($res);
