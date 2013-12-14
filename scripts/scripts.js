$(function() {

	/* ------------------------------------------------------------------------ */
	/* PRETTYPHOTO */
	/* ------------------------------------------------------------------------ */
       $("a[data-rel^='prettyPhoto']").prettyPhoto({ social_tools: '' });

	/* ------------------------------------------------------------------------ */
	/* TESTIMONIALS SLIDER */
	/* ------------------------------------------------------------------------ */
       $('section .testimonials').quovolver(500, 6000);

  	
	/* ------------------------------------------------------------------------ */
	/* MAILCHIMP SUBSCRIPTION */
	/* ------------------------------------------------------------------------ */
		if ($('#newsletterform').length) {
		  if ($('#newsletterform').attr('data-mailchimp') == 'true') {
			$('#newsletterform').attr('action', 'subscribe-mailchimp.php');
			$('#newsletterform').ajaxForm({ dataType: 'json',
											timeout: 2000,
											success: mailchimpCallback});
		  } else {
			$('#newsletterform').attr('action', 'subscribe.php');
			$('#newsletterform').ajaxForm({ dataType: 'json',
											timeout: 2000,
											success: Callback});
		  }
		  $('#button-newsletter').click(function() { $('#newsletterform').submit(); return false; });
		} 	

	/* ------------------------------------------------------------------------ */
	/* TWITTER FEED */
	/* ------------------------------------------------------------------------ */  
		if ($('#tweet').length) {
		  $('#tweet').tweet({
				  username: 'envato',
				  join_text: 'auto',
				  avatar_size: 0,
				  count:1,
				  auto_join_text_default: ' we said, ',
				  auto_join_text_ed: ' we ',
				  auto_join_text_ing: ' we were ',
				  auto_join_text_reply: ' we replied to ',
				  auto_join_text_url: ' we were checking out ',
				  loading_text: 'Loading tweets...'
			  });
		};

	/* ------------------------------------------------------------------------ */
	/* FLEXSLIDER */
	/* ------------------------------------------------------------------------ */	

		if ($('.flexslider').length) {
		  $('.flexslider').flexslider({
			animation: "fade",
			directionNav: true,
			controlNav: false,
			pauseOnAction: true,
			pauseOnHover: true,
			direction: "horizontal",
			slideshowSpeed: 5500
		  });
		}
  

	  });



	  function Callback(response) {
		if (response.responseStatus == 'err') {
		  if (response.responseMsg == 'ajax') {
			alert('Error - this script can only be invoked via an AJAX call.');
		  } else if (response.responseMsg == 'fileopen') {
			alert('Error opening $emailsFile. Please refer to documentation for help.');
		  } else if (response.responseMsg == 'name') {
			alert('Please enter a valid name.');
		  } else if (response.responseMsg == 'email') {
			alert('Please enter a valid email address.');
		  } else if (response.responseMsg == 'duplicate') {
			alert('You are already subscribed to our newsletter.');
		  } else if (response.responseMsg == 'filewrite') {
			alert('Error writing to $emailsFile. Please refer to documentation for help.');
		  } else {
			alert('Undocumented error. Please refresh the page and try again.');
		  }
		} else if (response.responseStatus == 'ok') {
		  alert('Thank you for subscribing to our newsletter!');
		} else {
		  alert('Undocumented error. Please refresh the page and try again.');
		}
	  }
	  
	  
	  function mailchimpCallback(response) {
		if (response.responseStatus == 'err') {
		  if (response.responseMsg == 'ajax') {
			alert('Error - this script can only be invoked via an AJAX call.');
		  } else if (response.responseMsg == 'name') {
			alert('Please enter a valid name.');
		  } else if (response.responseMsg == 'email') {
			alert('Please enter a valid email address.');
		  } else if (response.responseMsg == 'listid') {
			alert('Invalid MailChimp list name.');
		  } else if (response.responseMsg == 'duplicate') {
			alert('You are already subscribed to our newsletter.');
		  } else {
			alert('Undocumented error (' + response.responseMsg + '). Please refresh the page and try again.');
		  }
		} else if (response.responseStatus == 'ok') {
		  alert('Thank you for subscribing! Please confirm your subscription in the email you\'ll receive shortly.');
		} else {
		  alert('Undocumented error. Please refresh the page and try again.');
		}
	  }