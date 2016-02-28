$(document).ready(function(){

	
	  // Faculty Page Login Register Switch Animation
	  $("#faculty_registerbtn").click(function(){
	  		$("#faculty_login").slideUp();
	  		$("#faculty_register").slideDown();
	  		$("#login_register").text("Register");
	  		$("#faculty_login")[0].reset();
	  		$("#faculty_login input").closest(".input-field").find("label").removeClass("active");
	  });
	  $("#faculty_loginbtn").click(function(){
	  		$("#faculty_register").slideUp();
	  		$("#faculty_login").slideDown();
	  		$("#login_register").text("Login");
	  		$("#faculty_register")[0].reset();
	  		$("#faculty_register input").closest(".input-field").find("label").removeClass("active");
	  });

	  //Faculty Register on blur
	  $("#faculty_register input").blur(function(){
	  		var trimmed = $(this).val().trim();
	  		//Blank input validation
	  		if( trimmed == ""){
	  			$(this).addClass("invalid");
	  			$(this).closest(".input-field").find("label").attr("data-error","This field is required").addClass("active");
	  		}
	  		//First name validation
	  		else if( $(this).attr("id") == "first_name"){
	  			if( !$.trim( $(this).val() ).match(/([A-Za-z']+( [A-Za-z']+)*){3,30}$/) ){
	  				$(this).addClass("invalid");
	  				$(this).closest(".input-field").find("label").attr("data-error","Enter a valid name").addClass("active");
	  			}
	  		}
	  		//Last name validation
	  		else if( $(this).attr("id") == "last_name" ){
	  			if( !$.trim( $(this).val() ).match(/([A-Za-z']+( [A-Za-z']+)*){3,30}$/) ){
	  				$(this).addClass("invalid");
	  				$(this).closest(".input-field").find("label").attr("data-error","Enter a valid name").addClass("active");
	  			}
	  		}
	  		//Username validation
	  		else if( $(this).attr("id") == "username" ){
	  			if( !$.trim( $(this).val() ).match(/^[a-z0-9_-]{5,16}$/) ){
	  				$(this).addClass("invalid");
	  				$(this).closest(".input-field").find("label").attr("data-error","Username must start on letters, character length is between 5-16, optional ( - and _ )").addClass("active");
	  			}
	  		}
	  		//Employee Id validation
	  		else if( $(this).attr("id") == "employee_id" ){
	  			if( !$.trim( $(this).val() ).match(/(\d{4})\-(\d{3})/) || $.trim( $(this).val() ).length == 9){
	  				$(this).addClass("invalid");
	  				$(this).closest(".input-field").find("label").attr("data-error","Enter a valid Id").addClass("active");
	  			}
	  		}
	  		//Password validation
	  		else if( $(this).attr("id") == "password" ){
	  			if( !$.trim( $(this).val() ).match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/) ){
	  				$(this).addClass("invalid");
	  				$(this).closest(".input-field").find("label").attr("data-error","Characeter length is at least 8 with at least one upper case letter, one lower case letter, and one digit").addClass("active");
	  			}
	  		}
	  		//Re-type password validation
	  		else if( $(this).attr("id") == "repassword" ){
	  			if( $(this).val() !== $("#password").val() ){
	  				$(this).addClass("invalid");
	  				$(this).closest(".input-field").find("label").attr("data-error","Password does not match").addClass("active");
	  			}
	  		}
	  });


	  //Faculty Register on submit
	  $("#faculty_register").submit(function(e){
	  	e.preventDefault();
	  	//Check if input values are blank on submit
	  	$('#faculty_register input').each(function(){
			var trimmed = $(this).val().trim();
	  		if( trimmed == ""){
	  			$(this).addClass("invalid");
	  			$(this).closest(".input-field").find("label").attr("data-error","This field is required").addClass("active");
	  		}
		});

	  	//Check if all input has a class of VALID
	  	if( !$("#faculty_register input").hasClass("invalid") ){
	  		//ajax starts here
			//Submit all info using ajax to php
	  	}

	  });//end of submit 



	//Faculty Login
	$("#faculty_login").submit(function(e){
		e.preventDefault();
		//Check if input values are blank on submit
		$('#faculty_login input').each(function(){
			var trimmed = $(this).val().trim();
	  		if( trimmed == ""){
	  			$(this).addClass("invalid");
	  			$(this).closest(".input-field").find("label").attr("data-error","This field is required").addClass("active");
	  		}
		});
		//Check if all input has a class of VALID
	  	if( !$("#faculty_login input").hasClass("invalid") ){
	  		//Submit all info using ajax to php
		}
	});//end of submit



	//Login Alert on focus
	$("#faculty_username").focus(function(){
		$("#loginalert").removeClass("show");
		$("#loginalert").addClass("hide");
	});
		$("#faculty_password").focus(function(){
		$("#loginalert").removeClass("show");
		$("#loginalert").addClass("hide");
	});
	  
	

});