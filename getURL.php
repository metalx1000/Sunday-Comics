<?php
$url=$_POST['url'];
 
// create curl resource 
$ch = curl_init(); 

// set url 
curl_setopt($ch, CURLOPT_URL, $url); 

//return the transfer as a string 
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 

// $output contains the output string 
$output = curl_exec($ch); 

// close curl resource to free up system resources 
curl_close($ch);      

print $output;
?>
