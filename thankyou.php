<?php
//         include_once ('header.php')
        
          
?>

<body>


    <?php

$to = 'clientk21@gmail.com, pg097422@gmail.com';

$subject = 'Dr.Jiten Website Feedback';

$from = 'nq9su4c6utjs@micro-industries.com';




// To send HTML mail, the Content-type header must be set



$headers  = 'MIME-Version: 1.0' . "\r\n";

$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$user_email ='nq9su4c6utjs@micro-industries.com';

$fname = $_REQUEST['fname'];



// Create email headers



$headers .= 'From: '.$user_email."\r\n".

'Reply-To: '.$user_email."\r\n" .

'X-Mailer: PHP/' . phpversion();

// Compose a simple HTML email message



$message = '<html><body>';

$message .= '<h3 style="color:#f40;">Hi,</h3>';

$message .= '<p style="color:#080;font-size:18px;">Dear Sir/Madam,</p>';

$message .= '<table rules="all" style="border-color: #666;" cellpadding="10" border="1">';

$message .= "<tr style='background: #eee;'><td><strong> Name:</strong> </td><td>" . $_POST['fname'] . "</td></tr>";

$message .= "<tr style='background: #eee;'><td><strong>Email:</strong> </td><td>" .$_POST['email'] . "</td></tr>";

$message .= "<tr style='background: #eee;'><td><strong>Phone Number:</strong> </td><td>" .$_POST['phone_number'] . "</td></tr>";

$message .= "<tr style='background: #eee;'><td><strong>Book Date:</strong> </td><td>" .$_POST['datetimesd'] . "</td></tr>";

$message .= "<tr style='background: #eee;'><td><strong>Message:</strong> </td><td>" . $_POST['message'] . "</td></tr>";

$message .= '</body></html>';



// Sending email



if(mail($to, $subject, $message, $headers)){


    } else{



        echo 'Unable to send email. Please try again.';



    }



 ?>


<div class="page-wrapper">
   

    <!--End Main Slider-->
<div class="welcompg">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-12 col-sx-12">
                <div class="welde">
                    <h1>Thank You</h1>
                    <h3>Dear, <?=$_REQUEST['fname']?></h3>
                    <div class="welder">
                        <p>
                            Thankyou for enquiring with us our team will contact you within 24 hours.
                        </p>
                        <p>
                           <a href='./'>Go To Home Page</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  

    <!--Main Footer-->
    <?php

 // include_once ('footer.php');

?>

