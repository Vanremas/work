<?php foreach ($posts as $post):?>
    <h2> <?= $post['title'] ?></h2>
    <p><?= $post['content'] ?></p>
<img src="uploads/<?= $post['img'] ?>" width="150">
<?php endforeach; ?>
