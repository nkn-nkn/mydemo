$(function() {


	function myFunction() {
		var at = document.getElementById("inputEmail").value.indexOf("@");
		var age = document.getElementById("inputRoll").value;
		// var dat = document.getElementById("inputDOB").value;
        submitOK = true;

		if (age[0]!='D' && age[0]!='d') {
		    alert("Invalid Enrollment Number");
		    submitOK = false;
		}
		if (age[1]!='E' && age[1]!='e') {
		    alert("Invalid Enrollment Number");
		    submitOK = false;
		}

		if (at == -1) {
		    alert("Not A Valid Email ID");
		    submitOK = false;
		}

		return submitOK
	}


    $('#btnSave').click(function() {

 		if(!myFunction())
 			return false
        radio_button_value = $('input:radio[name=inputBranch]:checked').val();
        radio_button_value2 = $('input:radio[name=inputGender]:checked').val();
        $.ajax({
            url: '/student/persave/',
            data: {
                    "first_name": $('#inputFName').val(),
                    "middle_name": $('#inputMName').val(),
                    "last_name": $('#inputLName').val(),
                    "gender": radio_button_value2,
                    "enroll": $('#inputRoll').val(),
										"father": $('#inputFather').val(),
										"mother": $('#inputMother').val(),
                    "email": $('#inputEmail').val(),
                    "mobile": $('#inputMobile').val(),
                    "passwd": $('#inputPassword').val(),
                    "branch": radio_button_value,
                    "dob" : $('#inputDOB').val(),
										"mobile":$('#inputMobile').val(),
										"mobile2":$('#inputAlMobile').val(),
										"add":$('#inputAdd').val(),
                    "csrfmiddlewaretoken" : $('input[name=csrfmiddlewaretoken]').val()
            },
        type: 'POST',
            success: function(response){
                window.location = response["redirect_url"]
            	alert("Data Submitted Successfully")
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});
