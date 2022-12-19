<?php
require  'posts.php';
$finame = upImg($_FILES['img']);
addPost($_POST['title'], $_POST['content'], $finame);
header("location: /");

