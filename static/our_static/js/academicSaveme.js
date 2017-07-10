$(function() {


	function myFunction() {
		// var at = document.getElementById("inputEmail").value.indexOf("@");
		// var age = document.getElementById("inputRoll").value;
		// // var pas = document.getElementById("inputPassword").value;
		// var cpas = document.getElementById("inputCPassword").value;
		// var mob = document.getElementById("inputMobile").length();
		submitOK = true;

		// if (age[0]!='D' && age[0]!='d') {
		//     alert("Invalid Enrollment Number");
		//     submitOK = false;
		// }
		// if (age[1]!='E' && age[1]!='e') {
		//     alert("Invalid Enrollment Number");
		//     submitOK = false;
		// }

		// if (at == -1) {
		//     alert("Not A Valid Email ID");
		//     submitOK = false;
		// }

		return submitOK
	}


    $('#btnSave').click(function() {

 		if(!myFunction())
 			return false
				radio_button_value = $('input:radio[name=inputBack]:checked').val();
        $.ajax({
            url: '/student/acsaveme/',
            data: {
                    "tenthper": $('#inputTenth_per').val(),
                    "tenthyear": $('#inputTenth_year').val(),
                    "twelthper": $('#inputTwelth_per').val(),
                    "twelthyear": $('#inputTwelth_year').val(),
                    "dipper": $('#inputDip_per').val(),
                    "dipyear": $('#inputDip_year').val(),
										"s1": $('#inputs1').val(),
                    "s2": $('#inputs2').val(),
										"actback": radio_button_value,
                    "csrfmiddlewaretoken" : $('input[name=csrfmiddlewaretoken]').val()
            },
            type: 'POST',
            success: function(response){
                window.location = response["redirect_url"]
            	alert("Data Submitted Successfully")
            },
            error: function(error) {
                alert("Please fill all the required feilds and fill 0 for not required ones")
                console.log(error);
            }
        });
    });
});
