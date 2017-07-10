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


    $('#btnPara').click(function() {

 		if(!myFunction())
 			return false

        $.ajax({
            url: '/student/add_news/',
            data: {
                    "para1": $('#inputPara1').val(),
                    "para2": $('#inputPara2').val(),
                    "para3": $('#inputPara3').val(),
                    "para4": $('#inputPara4').val(),
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
