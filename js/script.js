(function($){

  $("#submitButton").on("click",function(e){
    var form = $("#form").get()[0];

    var formData = new FormData(form);

    $.ajax({
      url: "http://makki0250.com:3000/api/upload",
      type: "post",
      dataType: "json",
      data: formData,
      processData: false,
      contentType: false
    })
    .done(function(res){
      console.log(res)
    })
    .fail(function(jqXHR,textStatus,error){
      console.log("ERROR: ",jqXHR,textStatus,error)
    });

    return false

  })

})(jQuery)