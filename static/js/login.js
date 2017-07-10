    $(function() {


	function myFunction() {
		var age = document.getElementById("inputRoll").value;
		var pas = document.getElementById("inputPassword").value;
		var agelen = age.length;
        submitOK = true;

		if (age != 'admin')
        {
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

            // if (age[2]!='1' && (age[3]!='3' || age[3]!='2' ) ){
            //     alert("Invalid Enrollment Number");
            //     submitOK = false;
            // }
        }

		return submitOK
	}


    $('#btnLogIn').click(function() {

 		if(!myFunction())
 			return false

        $.ajax({
            url: '/student/login/student_login/',
            data: {
                    "enroll": $('#inputRoll').val(),
                    "passwd": $('#inputPassword').val(),
                    "csrfmiddlewaretoken" : $('input[name=csrfmiddlewaretoken]').val()
            },
            type: 'POST',
            success: function(response) {
                window.location = response["redirect_url"]
                if (response["error_value"].length) {
                    alert(response["error_value"]);
                }
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});
