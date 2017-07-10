$(function() {


	


    $('#btnBranch').click(function() {

 		radio_button_value = $('input:radio[name=inputBranch]:checked').val();
        $.ajax({
            url: '/student/reg_students/branchwise/',
            data: {
                    "branch": radio_button_value,
                    "csrfmiddlewaretoken" : $('input[name=csrfmiddlewaretoken]').val()
            },
            type: 'POST',
            success: function(response){
                window.location = response["redirect_url"]
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});
