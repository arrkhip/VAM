<?php
if (isset ($_POST['quiz21'])) {
  // $to = "arkhipovvladislav@mail.ru";
  $to = "site@volgaagromash.ru";
  $quiz1  = substr( $_POST['quiz1 '], 0, 64 );
  $quiz2  = substr( $_POST['quiz2 '], 0, 64 );
  $quiz3  = substr( $_POST['quiz3 '], 0, 64 );
  $quiz4  = substr( $_POST['quiz4 '], 0, 64 );
  $quiz5  = substr( $_POST['quiz5 '], 0, 64 );
  $quiz6  = substr( $_POST['quiz6 '], 0, 64 );
  $quiz7  = substr( $_POST['quiz7 '], 0, 64 );
  $quiz8  = substr( $_POST['quiz8 '], 0, 64 );
  $quiz9  = substr( $_POST['quiz9 '], 0, 64 );
  $quiz10 = substr( $_POST['quiz10'], 0, 64 );
  $quiz11 = substr( $_POST['quiz11'], 0, 64 );
  $quiz12 = substr( $_POST['quiz12'], 0, 64 );
  $quiz13 = substr( $_POST['quiz13'], 0, 64 );
  $quiz14 = substr( $_POST['quiz14'], 0, 64 );
  $quiz15 = substr( $_POST['quiz15'], 0, 64 );
  $quiz16 = substr( $_POST['quiz16'], 0, 64 );
  $quiz17 = substr( $_POST['quiz17'], 0, 64 );
  $quiz18 = substr( $_POST['quiz18'], 0, 64 );
  $quiz19 = substr( $_POST['quiz19'], 0, 64 );
  $quiz20 = substr( $_POST['quiz20'], 0, 64 );
  $quiz21 = substr( $_POST['quiz21'], 0, 64 );
  $quiz22 = substr( $_POST['quiz22'], 0, 250 );


  if ( !empty( $_FILES['file']['tmp_name'] ) and $_FILES['file']['error'] == 0 ) {
    $filepath = $_FILES['file']['tmp_name'];
    $filename = $_FILES['file']['name'];
  } else {
    $filepath = '';
    $filename = '';
  }

  // $body = "Имя: ".$name."\r\n";
  // $body .= "Телефон: ".$tel;


  $body = "Марка и модель трактора: ".$quiz1."\r\n";
  $body .= "Мощность двигателя трактора, л.с.: ".$quiz2."\r\n";
  $body .= "Вес трактора, кг.: ".$quiz3."\r\n";
  $body .= "Ширина шин задних колес трактора, см: ".$quiz4."\r\n";
  $body .= "Ширина колеи по задним шинам, см: ".$quiz5."\r\n";
  $body .= "«Органика» будет запахиваться: ".$quiz6."\r\n";
  $body .= "Нужный тип отвала: ".$quiz7."\r\n";
  $body .= "В почве могут присутствовать камни, размер которых превышает 10 см: ".$quiz8."\r\n";
  $body .= "Этим плугом предполагается обработка почв, с влажностью которых может превышать 25%: ".$quiz9."\r\n";
  $body .= "Тип трактора: ".$quiz10."\r\n";
  $body .= "Трактор оснащен гидравлической навеской: ".$quiz11."\r\n";
  $body .= "Для обработки каких почв: ".$quiz12."\r\n";
  $body .= "Предпочтительная конструкция: ".$quiz13."\r\n";
  $body .= "Нужны ли в плуге предплужники: ".$quiz14."\r\n";
  $body .= "Предполагается обработка полей с уклоном более 8 градусов: ".$quiz15."\r\n";
  $body .= "Предполагается обработка полей, с высотой пожнивных остатков более 20 см: ".$quiz16."\r\n";
  $body .= "Наименование организации: ".$quiz17."\r\n";
  $body .= "Местонахождение (адрес): ".$quiz18."\r\n";
  $body .= "Контактное лицо: ".$quiz19."\r\n";
  $body .= "Укажите действующий email: ".$quiz20."\r\n";
  $body .= "Укажите телефон контакта: ".$quiz21."\r\n";
  $body .= "Любая дополнительная информация: ".$quiz22;

  send_mail($to, $body, $email, $filepath, $filename);

}


// Вспомогательная функция для отправки почтового сообщения с вложением
function send_mail($to, $body, $email, $filepath, $filename)
{
  $subject = 'Заявки с сайта «Волгаагромаш»';
  $boundary = "--".md5(uniqid(time())); // генерируем разделитель
  // $headers = "From: ".$email."\r\n";    
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
