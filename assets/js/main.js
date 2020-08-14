function showPass(){
	var code=document.getElementById('pass');
	if(code.type === 'password'){
		code.type='text';
	}
	else {
		code.type='password'
	}
};


let btn=document.getElementsByClassName('forget-btn')[0];

btn.onclick=function(){
	let modal=document.getElementsByClassName('modal')[0];
	
	modal.style.display='flex';
}

let cancel=document.getElementsByClassName('cancel')[0];
cancel.onclick=function(){
	modal.style.display='none';
}

//window.onclick=function(){
//	let modalBox=document.getElementsByClassName('modal-box')[0];
//	modalBox.style.display='none'
//}