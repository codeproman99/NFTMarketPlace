<?php
$config = array(
    'mailchimp' => array(
        'input_name' => 'email',
        'message_success' => 'You was successfully subscribed!',
        'api_key' => 'a6e7ca8e9723e32acc92caa5668c590d-us5',
        'list_id' => '8cc2c78af0',
    ),
    'standard'  => array(
        'email' => 'lorem@ipsum.dolor',
        'name' => 'Website Admin',
        'email_subject' => 'Mail from site',
        'inputs_allowed'   => array( 'name', 'email', 'email_subject', 'message' ),
        'inputs_required' => array( 'email', 'message' ),
        'message_success' => 'Your message was successfully sent!',
        'recaptcha_secret' => 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    )
);