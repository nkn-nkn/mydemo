$(function() {


	


    $('#btnElig').click(function() {

 		$.ajax({
            url: '/student/elig_cri/decided/',
            data: {
                    "tenth": $('#txtTenthPer').val(),
                    "twelth": $('#txtTwelthPer').val(),
                    "aggre": $('#txtAggre').val(),
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
    $('#btnAll').click(function() {

        $.ajax({
            url: '/student/elig_cri/allregst/',
            data: {
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
