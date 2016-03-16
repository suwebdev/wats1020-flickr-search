// Asynchronous Flickr Search
//
// Flickr reveals a searchable JSON Feed you can access via jQuery's $.getJSON()
// method. Use this to allow users to search for a tag or comma-separated list
// of tags and view the images that are found.
//
// Allow users to click the images to see a larger version with more information.

$(document).on('ready', function(){
 	var searchImages = function(tags) {
	document.getElementsByClassName('placeholder')[0].style.visibility='hidden';
 	var searchImages = function(tags) {
     var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
     console.log(tags);
     $('#images').innerHTML = '<li class="search-throbber">Searching...</li>';
     $.getJSON( flickrAPI, {
       tags: tags,
       tagmode: "any",
       format: "json"
     }).done(function( data ) {
        $('#images').empty();
        $('h1.search-title').first()[0].innerHTML = "Search for: " + tags;
        $.each( data.items, function( i, item ) {
        var newListItem = $("<li>");
	  
        // If you're not doing the modal, then show info about the image.
        var newListItem = $("<li>");  
       
        // Info about images
          var newTitle = $('<p class="image-title">').html(item.title).appendTo(newListItem);
          var newDate = $('<p class="image-date">').text(item.date_taken).appendTo(newListItem);
          var newDescription = $('<p class="image-description">').html(item.description).appendTo(newListItem);
          var newLink = $('<a>').attr('href', item.link).text('View on Flickr.').appendTo(newListItem);

          newListItem.appendTo( "#images" );   
          if ( i === 15 ) {
            return false;
          }
        });
      });
    };

    //button to trigger search 	
    $('button.search').on('click', function(event){
      event.preventDefault();
      var searchTextInput = $(event.target.parentElement).find('input[name="searchText"]')[0];
      console.log(searchTextInput);
      searchImages(searchTextInput.value);
    });
 
   $('#infoModal').on('show.bs.modal', function (event) {
     var button = $(event.relatedTarget); // Button that triggered the modal
     var title = button.data('title'); // Extract info from data-* attributes
     var imgSrc = button.data('imgsrc');
     var imageDescription = button.data('description');
 
  // Update the modal's content. We'll use jQuery here.
 	//updates modal content
      var modal = $(this);
      modal.find('.modal-title').html(title);
      var modalBody = modal.find('.modal-body');
      modalBody.empty();
     var modalDescription = $("<p class='image-description'>").html(imageDescription).appendTo(modalBody);
     var modalDescription = $("<p class='image-description'>").html(imageDescription).appendTo(modalBody); 
  	
     //shows li elements   
    $("button").click(function(){
          $("li").show();
     });
 	 });  
 




