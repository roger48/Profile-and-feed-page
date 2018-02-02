 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBAC5mlQrk7kDdZAfQHzWsQOCPfj9qjN83Q7T439bqGP72UFZCRj7nz16SikToNyxAByGs7uJUthZBEMWXOzaZAUy5zggiMld1ybZBDOWycOZApZC72ZBIjFBCuKioqQnogHU84ZBt9hOQpz9REKsPdE6KaTa3zYqUJTZB2x8B6NaCOMKHKdzgounOYmbCzUXEVaZBgZDZD';

    function getFacebookInfo(){



        $.ajax('https://graph.facebook.com/me?fields=id,name,age_range,gender,hometown,relationship_status,birthday,cover&access_token='+myFacebookToken,{
                

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#first_name").text(response.name);
                    $("#birthday").text(response.birthday);
                    $("#myHomeTown").text(response.hometown.name);
                    $("#gender").text(response.gender); 
                    $("#relationship_status").text(response.relationship_status);
                    $("#interested").text(response.interested_in);  
                    $("#cover_photo").html('<img src='+response.cover.source+' id="cover_photo" class="img-responsive" style="width:50%; height:50%;">'); 
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');

                 
    
                }
            }//end argument list 

       );// end ajax call 


    }// end get facebook info

    $("#facebookBtn").on('click',getFacebookInfo)


    

  });

  