$("select").material_select();
    $("#modal1").modal();
    $("#submit").on("click", function (e) {
      e.preventDefault();
      let name = $("#name").val().trim();
      let photo = $("#photo").val().trim();
      let scores = [];
      let isValid = true;
      for(let i = 0; i<10;i++){
        if($(`#q${i}`).val() === null){
          isValid = false;
        } else{
          scores.push($(`#q${i}`).val().trim())
        }
      }
      if(name === "" || photo === ""){
        isValid = false;
      }
      console.log(name,photo, scores);
      let friendObj = {
        name,
        photo,
        scores
      }
      const currentURL = window.location.origin;

        // AJAX post the data to the friends API. 
        if(isValid){
          $.post(currentURL + "/api/friends", friendObj, function(data){
            console.log(data)
                  $("#match-name").text(data.name);
                  $("#match-photo").attr("src", data.photo);
                  $("#modal1").modal("open");
                });
        }
    })