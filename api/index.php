<?php
$message = json_decode(trim(file_get_contents('php://input')), true);

// echo json_encode(array('response'=>$message['email'],'status'=>true));

if(isset($message['email']) && $message['email']=="admin@gmail.com" && isset($message['password']) && $message['password']=="123456"){
	echo json_encode(array('details'=>array('id'=>1,'name'=>'John'),'status'=>true));
}else{
	echo json_encode(array('error'=>'Authentication failed!','status'=>false));
}
?>