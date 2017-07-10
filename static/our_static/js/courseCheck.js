$(function() {


	function myFunction() {
		submitOK = true;

		

		return submitOK
	}


    $('#btnSave').click(function() {

 		if(!myFunction())
 			return false
        radio_button_value = $('input:radio[name=inputCourse]:checked').val();
        $.ajax({
            url: '/student/coursec/',
            data: {
                    "course": radio_button_value,
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
