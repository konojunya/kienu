(function($){

  // クリップボードへコピー
  var cb = new Clipboard(".copy")
  cb.on("success",function(e){
    alert("コピーしました！")
    e.clearSelection()
  })

  $("#submitButton").on("click",function(e){
    var form = $("#form").get()[0];

    var formData = new FormData(form);

    $.ajax({
      async: true,
      url: "http://makki0250.com:3000/api/upload",
      type: "post",
      dataType: "json",
      data: formData,
      processData: false,
      contentType: false,
      xhr: function(){
        var XHR = $.ajaxSettings.xhr();
        if(XHR.upload){
          XHR.upload.addEventListener("progress",function(e){
            var progress = parseInt(e.loaded/e.total*100);
            $(".progress-bar").animate({ width: progress + "%" })
          },false)
        }
        return XHR;
      }
    })
    .done(function(res){
      var downloadUrl = "http://makki0250.com:3000" + res.download_url
      $("#download-url").val(downloadUrl)
      $(".downloadedElement").show()
    })
    .fail(function(jqXHR,textStatus,error){
      console.log("ERROR: ",jqXHR,textStatus,error)
    });

    return false

  })

})(jQuery)