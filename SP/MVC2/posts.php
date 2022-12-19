<?php
function upImg($img){
    $exts = pathinfo($img['name'], PATHINFO_EXTENSION);//Расширение
    $finame = uniqid().".".$exts; //Генерация Имени.расширение
    move_uploaded_file($img['tmp_name'],"uploads/".$finame); //Перенос
    return $finame;
}

function addPost($title,$content,$finame){
    $pdo = new PDO("mysql:host=localhost; dbname=mvc2", 'root', 'root');
    $sql = "INSERT INTO `posts` ( `title`, `content`, `img`) VALUES (:title, :content, :img)";
    $statement = $pdo->prepare($sql);
    $statement->bindParam(":title", $title);
    $statement->bindParam(":content", $content);
    $statement->bindParam(":img", $finame);
    $statement->execute();
}

function getPost(){
    $pdo = new PDO("mysql:host=localhost; dbname=mvc2", 'root', 'root');
    $statement = $pdo->prepare("SELECT * FROM `posts`");
    $statement->execute();
    $posts = $statement->fetchAll(PDO::FETCH_ASSOC);
return $posts;
}
