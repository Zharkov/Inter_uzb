<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['username'])) {$username = $_POST['username'];}
    if (isset($_POST['telephone'])) {$telephone = $_POST['telephone'];}
    if (isset($_POST['email'])) {$email = $_POST['email'];}
    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}

    $to = "hello@rcg-group.ru"; /*Укажите адрес, га который должно приходить письмо*/
    $sendfrom   = "skladskaya-logistika@rcg-group.ru"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "$formData";
    $message = "$formData<br> <b>Имя пославшего:</b> $username <br><b>Телефон:</b> $telephone <br><b>email:</b> $email";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo '<center><h3 class="success">Спасибо за отправку вашего сообщения!</h3></center>';
    }
    else 
    {
    echo '<center><h3 class="fail"><b>Ошибка. Сообщение не отправлено!</b></h3></center>';
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>