if (Meteor.isClient){

Template.mobile.events({
	"click #window": function(){
		$('#window').fadeOut();
		// Session.set("menu");
	}
});

}



// (function($) {
// 	$(document).ready(function(){


// 	})(jQuery);

//         jQuery(".rec1").click(function(event) {
//             event.preventDefault() 
//             jQuery('#window').html($(this).next('#rec1')[0].outerHTML); 
//           });
//         });

// jQuery(document).ready(function() {
//         jQuery(".rec1").click(function(event) {
//             event.preventDefault() 
//             jQuery('#window').html($(this).next('#rec1')[0].outerHTML); 
//           });
//         });