<?php

include 'config.php';

$emial_field = ( isset($config['mailchimp']['input_name']) ) ? $config['mailchimp']['input_name'] : 'email';
$user_email = ( isset($_POST[$emial_field]) ) ? $_POST[$emial_field] : '';

$output = '';

if( $user_email != '' ) {
    $mailchimp_api = ( isset($config['mailchimp']['api_key']) ) ? $config['mailchimp']['api_key'] : '';
    $list_id = ( isset($config['mailchimp']['list_id']) ) ? $config['mailchimp']['list_id'] : '';
    if( $list_id != '' && $mailchimp_api != '' ) {
        $data_center = substr($mailchimp_api,strpos($mailchimp_api,'-')+1);
		$m_url = 'https://'. $data_center .'.api.mailchimp.com/3.0/lists/'. $list_id .'/members';
		$m_auth = base64_encode( 'user:' . $mailchimp_api );
		$m_arr_data = array(
			'email_address' => $user_email,
			'status' => 'subscribed'
		);

        $ch = curl_init($m_url);
        curl_setopt_array($ch, array(
            CURLOPT_POST => TRUE,
            CURLOPT_RETURNTRANSFER => TRUE,
            CURLOPT_HTTPHEADER => array(
                'Authorization: Basic '.$m_auth,
                'Content-Type: application/json'
            ),
            CURLOPT_POSTFIELDS => json_encode($m_arr_data)
        ));
        // Send the request
        $response = json_decode(curl_exec($ch));
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($httpCode == 200) {
            $api_output = ( isset($config['mailchimp']['message_success']) ) ? $config['mailchimp']['message_success'] : 'You was successfully subscribed!';
        } else {
            switch ($httpCode) {
                case 400:
                    $api_output = $response->title;
                    break;
                case 401:
                    $api_output = $response->title;
                    break;
                default:
                    $api_output = 'Some problem occurred, please try again.';
                    break;
            }
        }

		if( !empty($api_output) ) {
            $output = $api_output;
		}
    } else {
        $output = 'Empty API key or audience id.';
    }
} else {
    $output = 'Email field is required.';
}


// Output
$post_type = ( isset($_POST['ajax']) ) ? true : false;

if( !empty($output) ) {
    if( $post_type ) {
        echo $output;
    } else {
        $referer = $_SERVER['HTTP_REFERER'];
        header("Location: $referer");
    }
}

exit;