<?php
if (isset ($_POST['phone'])) {
  // $to = "site@volgaagromash.ru";
  $to = "arkhipovvladislav@mail.ru";

  // $name  = substr( $_POST['name'], 0, 64 );
  // $tel = substr( $_POST['phone'], 0, 64 );
  // $email   = substr( $_POST['email'], 0, 64 );
  $quiz-1    = substr( $_POST['quiz-1'], 0, 64 );
  $quiz-2    = substr( $_POST['quiz-2'], 0, 64 );
  $quiz-3    = substr( $_POST['quiz-3'], 0, 64 );
  $quiz-4    = substr( $_POST['quiz-4'], 0, 64 );
  $quiz-5    = substr( $_POST['quiz-5'], 0, 64 );
  $quiz-6    = substr( $_POST['quiz-6'], 0, 64 );
  $quiz-7    = substr( $_POST['quiz-7'], 0, 64 );
  $quiz-8    = substr( $_POST['quiz-8'], 0, 64 );
  $quiz-9    = substr( $_POST['quiz-9'], 0, 64 );
  $quiz-10   = substr( $_POST['quiz-10'], 0, 64 );
  $quiz-11   = substr( $_POST['quiz-11'], 0, 64 );
  $quiz-12   = substr( $_POST['quiz-12'], 0, 64 );
  $quiz-13   = substr( $_POST['quiz-13'], 0, 64 );
  $quiz-14   = substr( $_POST['quiz-14'], 0, 64 );
  $quiz-15   = substr( $_POST['quiz-15'], 0, 64 );
  $quiz-16   = substr( $_POST['quiz-16'], 0, 64 );
  $quiz-17   = substr( $_POST['quiz-17'], 0, 64 );
  $quiz-18   = substr( $_POST['quiz-18'], 0, 64 );
  $quiz-19   = substr( $_POST['quiz-19'], 0, 64 );
  $quiz-20   = substr( $_POST['quiz-20'], 0, 64 );
  $quiz-21   = substr( $_POST['quiz-21'], 0, 64 );

  $quiz-22   = substr( $_POST['quiz-22'], 0, 250 );
  // $message = substr( $_POST['text'], 0, 250 );


  if ( !empty( $_FILES['file']['tmp_name'] ) and $_FILES['file']['error'] == 0 ) {
    $filepath = $_FILES['file']['tmp_name'];
    $filename = $_FILES['file']['name'];
  } else {
    $filepath = '';
    $filename = '';
  }

  // $body = "Имя: ".$name."\r\n";
  // $body .= "Телефон: ".$tel."\r\n";
  // $body .= "E-mail: ".$email."\r\n";
  // $body .= "Сообщение: ".$message;

  $body = "Марка и модель трактора: ".$quiz-1"\r\n";
  $body .= "Мощность двигателя трактора, л.с.: ".$quiz-2"\r\n";
  $body .= "Вес трактора, кг.: ".$quiz-3"\r\n";
  $body .= "Ширина шин задних колес трактора, см: ".$quiz-4"\r\n";
  $body .= "Ширина колеи по задним шинам, см: ".$quiz-5"\r\n";
  $body .= "«Органика» будет запахиваться: ".$quiz-6"\r\n";
  $body .= "Нужный тип отвала: ".$quiz-7"\r\n";
  $body .= "В почве могут присутствовать камни, размер которых превышает 10 см: ".$quiz-8"\r\n";
  $body .= "Этим плугом предполагается обработка почв, с влажностью которых может превышать 25%: ".$quiz-9"\r\n";
  $body .= "Тип трактора: ".$quiz-10"\r\n";
  $body .= "Трактор оснащен гидравлической навеской: ".$quiz-11"\r\n";
  $body .= "Для обработки каких почв: ".$quiz-12"\r\n";
  $body .= "Предпочтительная конструкция: ".$quiz-13"\r\n";
  $body .= "Нужны ли в плуге предплужники: ".$quiz-14"\r\n";
  $body .= "Предполагается обработка полей с уклоном более 8 градусов: ".$quiz-15"\r\n";
  $body .= "Предполагается обработка полей, с высотой пожнивных остатков более 20 см: ".$quiz-16"\r\n";
  $body .= "Наименование организации: ".$quiz-17"\r\n";
  $body .= "Местонахождение (адрес): ".$quiz-18"\r\n";
  $body .= "Контактное лицо: ".$quiz-19"\r\n";
  $body .= "Укажите действующий e-mail: ".$quiz-20"\r\n";
  $body .= "Укажите телефон контакта: ".$quiz-21"\r\n";
  $body .= "Любая дополнительная информация: ".$quiz-22;


  send_mail($to, $body, $email, $filepath, $filename);

}


// Вспомогательная функция для отправки почтового сообщения с вложением
function send_mail($to, $body, $email, $filepath, $filename)
{
  $subject = 'Заявки с сайта ТПС';
  $boundary = "--".md5(uniqid(time())); // генерируем разделитель
  // $headers = "From: ".$email."\r\n";   
  $headers = "From: form@tehpromservis.com" . "\r\n";   
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
