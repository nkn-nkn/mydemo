$(function() {


	function myFunction() {
		var at = document.getElementById("inputEmail").value.indexOf("@");
		var age = document.getElementById("inputRoll").value;
		var pas = document.getElementById("inputPassword").value;
		var cpas = document.getElementById("inputCPassword").value;
		var mob = document.getElementById("inputMobile").value;
		var mobl = mob.length;
		var agelen = age.length;
		submitOK = true;

		if (agelen != 7){
			alert("Invalid Enrollment Number");
			submitOK = false;
		}

		if (age[0]!='D' && age[0]!='d') {
		    alert("Invalid Enrollment Number");
		    submitOK = false;
		}
		
		if (age[1]!='E' && age[1]!='e') {
		    alert("Invalid Enrollment Number");
		    submitOK = false;
		}

		if (age[2]!='1' && (age[3]!='4' || age[3]!='3' ) ){
			alert("Invalid Enrollment Number");
			submitOK = false;
		}


		if (at == -1) {
		    alert("Not A Valid Email ID");
		    submitOK = false;
		}
		if (pas!=cpas) {
		    alert("Password Doesn't Matches");
		    submitOK = false;
		}
		if (mobl != 10) {
			alert("Invalid Mobile Number");
			submitOK = false;
		}

		return submitOK
	}
 

    $('#btnSignUp').click(function() {

 		if(!myFunction())
 			return false
 		radio_button_value = $('input:radio[name=inputBranch]:checked').val();
 		radio_button_value2 = $('input:radio[name=inputGender]:checked').val();
        $.ajax({
            url: '/student/signup/new_student/',
            data: {
                    "first_name": $('#inputFName').val(),
                    "middle_name": $('#inputMName').val(),
                    "last_name": $('#inputLName').val(),
                    "gender": radio_button_value2,
                    "enroll": $('#inputRoll').val(),
                    "email": $('#inputEmail').val(),
                    "mobile": $('#inputMobile').val(),
                    "passwd": $('#inputPassword').val(),
                    "branch": radio_button_value,
                    "dob" : $('#inputDOB').val(),
                    "csrfmiddlewaretoken" : $('input[name=csrfmiddlewaretoken]').val()
            },
            type: 'POST',
            success: function(response){
                window.location = response["redirect_url"];
                alert("You Have Been Registered, Kindly activate your account by verification link send to your email");
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});
