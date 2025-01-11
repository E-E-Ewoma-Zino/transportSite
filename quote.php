<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Company email address
    $companyEmail = "sales@dockcontainers.com"; // Replace with your company's email address
    $subject = "New Quote Request";

    // Collect form data
    $containerCondition = htmlspecialchars($_POST['containerCondition']);
    $fullName = htmlspecialchars($_POST['fullName']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $zipCode = htmlspecialchars($_POST['zipCode']);
    $state = htmlspecialchars($_POST['state']);
    $buyOrRent = htmlspecialchars($_POST['buyOrRent']);
    $containerSize20ft = htmlspecialchars($_POST['20ftUnits']);
    $containerSize40ft = htmlspecialchars($_POST['40ftUnits']);
    $containerSize10ft = htmlspecialchars($_POST['10ftUnits']);
    $containerType = htmlspecialchars($_POST['containerType']);
    $deliveryTime = htmlspecialchars($_POST['deliveryTime']);
    $specialMessage = htmlspecialchars($_POST['specialMessage']);

    // Validate required fields
    if (empty($fullName) || empty($email) || empty($phone) || empty($zipCode) || empty($state)) {
        die("Please fill all the required fields.");
    }

    // Construct the email content
    $message = "
        <h2>New Quote Request</h2>
        <p><strong>Container Condition:</strong> $containerCondition</p>
        <p><strong>Full Name:</strong> $fullName</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Delivery Zip Code:</strong> $zipCode</p>
        <p><strong>State:</strong> $state</p>
        <p><strong>Buy or Rent:</strong> $buyOrRent</p>
        <p><strong>Container Sizes:</strong></p>
        <ul>
            <li>20FT: $containerSize20ft units</li>
            <li>40FT: $containerSize40ft units</li>
            <li>10FT: $containerSize10ft units</li>
        </ul>
        <p><strong>Container Type:</strong> $containerType</p>
        <p><strong>Delivery Time:</strong> $deliveryTime</p>
        <p><strong>Special Message:</strong></p>
        <p>$specialMessage</p>
    ";

    // Set email headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: $email" . "\r\n";

    // Send email
    if (mail($companyEmail, $subject, $message, $headers)) {
        echo "Thank you! Your quote request has been sent.";
      
    } else {
        echo "Sorry, there was an error sending your request. Please try again.";
    }
} else {
    echo "Invalid request method.";
}
