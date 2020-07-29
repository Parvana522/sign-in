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