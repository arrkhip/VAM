<?php
if (isset ($_POST['phone'])) {
  // $to = "site@volgaagromash.ru";
  $to = "varnoff.test@yandex.ru, order@varnoff.ru";
  $name  = substr( $_POST['name'], 0, 64 );
  $tel = substr( $_POST['phone'], 0, 64 );
  $email   = substr( $_POST['email'], 0, 64 );
  $message = substr( $_POST['text'], 0, 250 );


  if ( !empty( $_FILES['file']['tmp_name'] ) and $_FILES['file']['error'] == 0 ) {
    $filepath = $_FILES['file']['tmp_name'];
    $filename = $_FILES['file']['name'];
  } else {
    $filepath = '';
    $filename = '';
  }

  $body = "Имя: ".$name."\r\n";
  $body .= "Телефон: ".$tel."\r\n";
  $body .= "E-mail: ".$email."\r\n";
  $body .= "Сообщение: ".$message;

  send_mail($to, $body, $email, $filepath, $filename);

}


// Вспомогательная функция для отправки почтового сообщения с вложением
function send_mail($to, $body, $email, $filepath, $filename)
{
  $subject = 'Заявка с сайта «Волгаагромаш» на получение консультации';
  $boundary = "--".md5(uniqid(time())); // генерируем разделитель
  // $headers = "From: form@tehpromservis.com" . "\r\n";  // почта отправителя  
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .="Content-Type: multipart/mixed; boundary=\"".$boundary."\"\r\n";
  $multipart = "--".$boundary."\r\n";
  $multipart .= "Content-type: text/plain; charset=\"utf-8\"\r\n";
  $multipart .= "Content-Transfer-Encoding: quoted-printable\r\n\r\n";

  $body = $body."\r\n\r\n";

  $multipart .= $body;

  $file = '';
  if ( !empty( $filepath ) ) {
    $fp = fopen($filepath, "r");
    if ( $fp ) {
      $content = fread($fp, filesize($filepath));
      fclose($fp);
      $file .= "--".$boundary."\r\n";
      $file .= "Content-Type: application/octet-stream\r\n";
      $file .= "Content-Transfer-Encoding: base64\r\n";
      $file .= "Content-Disposition: attachment; filename=\"".$filename."\"\r\n\r\n";
      $file .= chunk_split(base64_encode($content))."\r\n";
    }
  }
  $multipart .= $file."--".$boundary."--\r\n";
  mail($to, $subject, $multipart, $headers);
}
?>
