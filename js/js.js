
$(document).ready(function(){
	(function() {
				// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
				if (!String.prototype.trim) {
					(function() {
						// Make sure we trim BOM and NBSP
						var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
						String.prototype.trim = function() {
							return this.replace(rtrim, '');
						};
					})();
				}

				[].slice.call( document.querySelectorAll( 'input.input__field, textarea.input__field' ) ).forEach( function( inputEl ) {
					// in case the input is already filled..
					if( inputEl.value.trim() !== '' ) {
						classie.add( inputEl.parentNode, 'input--filled' );
					}

					// events:
					inputEl.addEventListener( 'focus', onInputFocus );
					inputEl.addEventListener( 'blur', onInputBlur );
				} );

				function onInputFocus( ev ) {
					classie.add( ev.target.parentNode, 'input--filled' );
				}

				function onInputBlur( ev ) {
					if( ev.target.value.trim() === '' ) {
						classie.remove( ev.target.parentNode, 'input--filled' );
					}
				}
			})();
	/*Mobile menu*/
	$("#sandwich, .menu_item").click(function() {
	  $("#sandwich").toggleClass("active");
	});
	var main_menu = $('.main_menu');
	$('#sandwich').on('click', function(){
		if(main_menu.hasClass('mini')){
			main_menu.removeClass('mini');
		} else {
			main_menu.addClass('mini');
		}
	});
	$('.click_submit').click(function(event){
		$(this).next('input').click(function(event){});

		(event.preventDefault) ? event.preventDefault() : event.returnValue = false; // kill this string to active form

	    if($('.email_check').val() == '') {
            $('.email_check').css({'border' : '2px solid #FF3600'});
            $('#valid').text('Некорректный e-mail адрес');
            $('.email_check').parent().addClass('input--filled');
            return false;
        }
	});
	$(function(){
		$('.scroll-pane').jScrollPane({
			verticalDragMinHeight: 30,
			verticalDragMaxHeight: 30,
			horizontalDragMinWidth: 30,
			horizontalDragMaxWidth: 30
		});
	});

	
	$('.email_check').blur(function() {
		
        if($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){
                $(this).css({
                	'border' : '1px solid #569b44',
            		'color' : ' #000000'
        		});
                $('#valid').text('');
            } else {
                $(this).css({
                	'border' : '2px solid #FF3600',
                	'color' : ' #FF3600'
            	});
                $('#valid').text('Некорректный e-mail адрес');
            }
        } else {
            /*$(this).css({'border' : '2px solid #FF3600'});
            $('#valid').text('Некорректный e-mail адрес');*/
        }
    });

});
// resize window
$(window).resize(function() {
  if ($(window).width() < 1200) {
    $('.callback-button').hide();
  }
 else {
 	$('.callback-button').show();
 }
});
// topbar
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#topbar').fadeIn();
    }
    else $('#topbar').fadeOut(400);
});
