

$( document ).ready(function() { 
            var myFacebookToken = 'EAACEdEose0cBANmMrkrKgvxuiZAl2qUtFg3Mlh6tkLSx1y8N8LfUaHiuBLXtVe4ZANffi0ZAD3Oh6N8OUtT3zUsACEm7k5j6nRtXFfB2CAykhe6QYBZBN3cwZCGQHlq3jVRldHdWBfBzAsOfTZCwhNguiREyJCRgpH1H6qS2311a6QUYiSAepR5DztXLJ66n6HaOe7PPhrpwZDZD';
            function getFeedInfo() { 


                         $.ajax({
                                  url : 'https://graph.facebook.com/me?fields=feed{message,created_time,full_picture,name,story,status_type}&access_token=' + myFacebookToken,
                                  type: 'GET', 
                                   success: function(response) { 
                                                console.log(response); 
                                                console.log(typeof(response)); 
                                               $.each(response.feed.data, function(index, val) 
                                              {
                                                document.write(val.status_type+'<br>');
                                                document.write(val.created_time+'<br>');
                                                document.write(val.name+'<br>');
                                                document.write(val.story+'<br>');
                                                document.write('<img src='+val.full_picture+' class="img-responsive" alt="image not available"style="width:30%; height:30%;"><br><br><br>');
      
                                                    
                                             }); 
                                 }//end argument list 
 
                         });// end ajax call 
          }// end get feed info 
        $("#facebookBtn").on('click',getFeedInfo()); 
 });

  