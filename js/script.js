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
      var downloadUrl = "http://makki0250.com:3000" + res.download_url
      alert(downloadUrl)
    })
    .fail(function(jqXHR,textStatus,error){
      console.log("ERROR: ",jqXHR,textStatus,error)
    });

    return false

  })

  $(".copy").on("click",function(e){
    var url = $(".downloadedElement .url").text()
    if(execCopy(url)){
      alert('コピーできました');
    }
    else {
      alert('このブラウザでは対応していません');
    }
  })

  function execCopy(string){
    var temp = document.createElement('textarea');

    temp.value = string;
    temp.selectionStart = 0;
    temp.selectionEnd = temp.value.length;

    var s = temp.style;
    s.position = 'fixed';
    s.left = '-100%';

    document.body.appendChild(temp);
    temp.focus();
    var result = document.execCommand('copy');
    temp.blur();
    document.body.removeChild(temp);
    return result;
  }

})(jQuery)