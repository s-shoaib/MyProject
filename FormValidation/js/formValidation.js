$(document).ready(function(){
	$("form[name='registration']").validate({
		rules:
		{
			firstname:{
				required:true,
				pattern:/^[a-zA-Z]+$/
			},
			lastname:{
				required:true,
				pattern:/^[a-zA-Z]+$/
			},
			email:{
				required:true,
				email:true
			},
			password:{
				required:true,
				minlength:8,
				pattern:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
				//Minimum 8 characters at least 1 Alphabet, 1 Number and 1 Special Character:


			}
		},
		/*messages:
		{
			firstname:"Please enter your first name!(alphabets only)",
			lastname:"Please enter your last name!(alphabets only)",
			email:"Please enter a valid email address!",
			password:{
			required:"Please provide a valid password ",
			minlength:"atleast 8 char,1 no and 1 special char!"
			}
		},*/
		
		groups: 
		{
			userDetails: "firstname lastname email password"
		},
		
		errorPlacement: function(error,element) {
			if(element.attr("name") == "firstname" || element.attr("name") == "lastname" || element.attr("name") == "email" || element.attr("name") =="password")
				error.insertAfter("#password");
			else
				error.insertAfter(element);
		},
		submitHandler: function(form){
			
			alert("submitted successfully!")
			$('#registration')[0].reset();
		}


	});

});