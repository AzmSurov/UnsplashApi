
var input = document.getElementById("search");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   SearchPhotos();
  }
});
function SearchPhotos(){
    let clientId = "trMv8p2Gmpi4jpFjQV0uvT0uj8ZbMMXyTaIQVKFHZDY"
    let query = document.getElementById("search").value;

    let url = "https://api.unsplash.com/search/photos/?client_id="+clientId+"&query="+query;

    fetch(url)
    .then(function(data){
        return data.json();
    }
    )
    .then(function(data){
            // console.log(data);
          
            $.each(data.results, function(index,value) {
              console.log(value.results);
              var value = value;
          
            var theContainer = $('.masonry');  
          
            var author = value.user.username;
            var description = value.user.bio;
            var imageURL = value.urls.small;
            var likes = value.likes;
            var photos = value.user.total_photos;
              
            var follow = value.links.download + "?force=true";
            var download_link = value.links.download + "?force=true";
            var user_photos = value.user.portfolio_url;
          
            var first_name = value.user.first_name;
          
            var link_author = value.user.links.html;
          
            var link_photo = value.links.html;
            var first_name = value.user.first_name;
          
          
              
          

              theContainer.append('<div class="brick">' + '<a href="'+ follow +'" class="linkk"><img src="'+ imageURL +'"/> </a> ' + '<div class="overlay"><div class="info"><h4><a id="photo-link" class="photo-title" target="_blank" href="'+ link_photo +'"> '+ first_name +' </a></h4><h5><a href="'+ link_author +'" id="link-author" class="author" target="_blank" >'+ author +'</a></h5></div>' +  '<div id="d-test" class="description-user"><p class="description" id="description-main"> '+ description + ' </p> '  + '</div>' + '<div class="likes"><ul class="col-lg-12 col-md-12 col-sm-12 likes-box"><li class="likes-item"><i class="fa fa-heart" aria-hidden="true"></i><a href="' + follow + '  " target="_blank" >' + likes + '</a></li><li class="photos"><a href="' + user_photos + ' " target="_blank">' + photos + '</a><i class="fa fa-camera" aria-hidden="true"></i></li></ul><ul class="col-lg-12 col-md-12 col-sm-12 download-ul"><li class="download-item-box"><a class="link-download" href="' + download_link + '" >Download</a></li></ul></div>'  + '</div>' + '</div>');
          
          
              if(description === null){
                $('#description-main').hide();
             }
            
          
                $('.linkk').on('click', function(){
                    var downloadUrl = download_link;
                    setTimeout("window.location.assign('" + downloadUrl + "');", 1000);
                })
                
          
            });
          
          
          
          
          });
    }

  

  
  
  /* https://api.unsplash.com/photos/?client_id=f5fff61efe15d7b33458cff25fa7f641098e2400076ab79e69befe3cbcace3f6 
  + '<div class="description-user"><p class="description"> '+ description + ' </p><p class="location"> '+ location + ' </p></div> '+
  */
  
  
  