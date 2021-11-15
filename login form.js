function login()
{
	var uname = document.getElementById("email").value;
	var pwd = document.getElementById("pwd1").value;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(uname =='')
	{
		alert("please enter user name.");
	}
	else if(pwd=='')
	{
		alert("enter the password");
	}
	else if(!filter.test(uname))
	{
		alert("Enter valid email id.");
	}
	else if(!pwd_expression.test(pwd))
	{
		alert("Upper case, Lower case, Special character and numerical letter are required in password field");
	}
	else
	{

   window.location = "destination.html";
		}
}
//Reset Inputfield code.
function clearFunc()
{
	document.getElementById("email").value="";
	document.getElementById("pwd1").value="";
}	