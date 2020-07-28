function showPass(){
	code=document.getElementById('pass');
	if(code.type === 'password'){
		code.type='text';
	}
	else {
		code.type='password'
	}
};

