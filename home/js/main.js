$(document).ready(function(){

	$.get('/home')
	.done(function(data){
		viewHome(data);
		//displayHomeBG(data);
	}).fail(function(error){
		console.log("error:"+error);
	});

	function viewHome(data){
		var template = kendo.template($("#temp_home").html());
    	var html = template(data);
    	$('body').fadeOut(3000, function () {
    	  //$('#loadingDiv').addClass('hide');
          $('#main').html(html);
          $('nav').html($('#temp_navbar').html());
          $('.flexslider').flexslider();
          $('body').fadeIn(2000);
        });
		//hookEvent();
	};

	function displayHomeBG(data){
		// var template = $('#temp_homeBG').html();
		var dataJ = $.parseJSON(data);
    	$('.popular').fadeOut(3000, function () {
          $('.popular').css("background", 'url('+dataJ.URL+') no-repeat fixed center top');
          //$('#homeBGDiv').html('<div class=titles><h3>EXPERT PHOTOGRAPHER</h3><h4 style="opacity: 0.8;">Here is the world you start from.</h4></div>');
          $('#homeBGDiv').html($('#temp_homeBG').html());
          $('nav').html($('#temp_navbar').html());
          $('.popular').fadeIn(2000);
        });	
		//hookEvent();
	};

	function hookEvent(){
		
		$('.btn-like').on('click', function(e){
			var bookId = $(this).attr('data-bookid');
			var url;
			//click btn-liked means unlike a book
			if($(this).hasClass('btn-liked') == true){
				$(this).removeClass('btn-liked').addClass('btn-unliked');
				url = '/unlike/'+bookId;
			}else if($(this).hasClass('btn-unliked') == true){
				$(this).removeClass('btn-unliked').addClass('btn-liked');
				url = '/like/'+bookId;
			};

				$.get(url)
				.done(function(book){
					$('#'+bookId+'-likes').text(book.likesCount);
					
				}).fail(function(error){
					console.log(error);
				});

		});


		//like section toggle
		$('.book-title').on('click', function(e){
			var $detail = $(this).next('.book-detail');
			$(this).next('.book-like-detail').toggle(400);
		});

		//detail view
		//cache the content when mouseover the cover by insert it to DOM

		$('.cover').on('mouseenter', function(e){
			var bookId = $(this).attr('data-bookid');
			if($('#book-detail-'+bookId).get(0)){
				return;
			}else{
				$.get('/detail/'+bookId)
					.done(function(book){
						//display book detail in lightbox
						var template = $('#bookInfo').html();
						var compiled = _.template(template);
						var html = compiled({"book" : book});
						$('body').append(html);
					}).fail(function(error){
						console.log("error happened");
					});				
			}
		})
		$('.cover').on('click', function(e){
			var bookId = $(this).attr('data-bookid');
			$('#book-detail-'+bookId).lightbox_me({
						centered: true
					}); 
		});
	}
});

