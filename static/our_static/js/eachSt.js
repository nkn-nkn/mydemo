$(function() {


	


    $('#btnView').click(function() {

 		$.ajax({
            url: '/student/reg_students/single/',
            data: {
                    "enroll": $('#inputST').val(),
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
