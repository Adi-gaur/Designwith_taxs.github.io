<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "sharmaadityakumar207@gmail.com";
  $subject = "Message From Client ";
  
  $email = $_POST["email"];
  $data = $_POST["data"];

  $message = "Email: $email\n\nMessage Received\n$data";

  // Use appropriate headers
  $headers = "From: $email";

  // Send the email
  mail($to, $subject, $message, $headers);

  exit;
}
?>
