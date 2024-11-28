<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "jakethecoder19@gmail.com"; // Your email address
    $subject = "New Form Submission";

    // Collect form data
    $firstName = htmlspecialchars($_POST['fName']);
    $lastName = htmlspecialchars($_POST['lName']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $interests = isset($_POST['interest']) ? implode(", ", $_POST['interest']) : "None";
    $reference = htmlspecialchars($_POST['reference']);
    $questions = htmlspecialchars($_POST['questions']);

    // Create the email content
    $message = "
        First Name: $firstName\n
        Last Name: $lastName\n
        Email: $email\n
        Phone: $phone\n
        Interests: $interests\n
        Referral Source: $reference\n
        Questions: $questions
    ";

    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your submission!";
    } else {
        echo "Oops! Something went wrong. Please try again.";
    }
}
?>
