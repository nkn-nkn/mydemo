$(function() {


	


    $('#btnView').click(function() {

 		$.ajax({
            url: '/student/elig_cri/stview/',
            data: {
                    "username": $('#txtusername').val(),
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
