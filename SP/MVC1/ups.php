<?php
//Модель
function upImg($img){
    $name = $img['name']; //Имя
    $put = $img ['tmp_name'];//Путь
    move_uploaded_file($put, "uploads/".$name);//Помещаем в Up-s
}
?>