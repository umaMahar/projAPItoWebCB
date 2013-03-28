// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery-ui
//= require jquery_ujs
//= require_tree .


/*

$(
function(){
	$('#btnSubmit').click(function(focusBack){
    if ($('#value1')[0]){ /* This checks if the element exists - it returns true if exists and returns false if it does not*/
/*		  if ($('#value1').val().length < 1){
        alert ('enter a valid Job DID');
        focusBack.preventDefault();
      }
      
    }
    if ($('#value2')[0]){
  		if ($('#value2').val().length < 1) 
        alert('This will return default search results.');
      	 
    } 
		$('#value1').focus();

    if ($('#value4').val().length < 1){
        alert('Please enter a valid Developer key.');
        focusBack.preventDefault();
      }    
	});
}
);

*/

$(
  function (){
    $('.main').bind('pageShow',function(e){
      alert('I just loaded form');
      var clrVal = null;
      $ ('#value4').val() = clrVal;

      // $('.input').each(function(){
      //   $(this).val().clear();

      // });

    });

    $('#btnSubmit').click(function (e){
      $('#error_display').html("");
      $('.input').each(function(){
          input_Value = $(this).val();
          if (input_Value.length < 1) {
            e.preventDefault();
            $('.error_wrapper').show();
            error_Value = $(this).attr("err");
            $('#error_display').append("<li>"+error_Value+"</li>");
            $(this).addClass("field_error");
          } 
          else {
            $(this).removeClass("field_error");
          }
      });
      
    });
  }
);


 
 /* 

var myName = "the global object";
var sayHello = function() {
    console.log( "Hi! My name is " + this.myName );
};
var myObject = {
    myName: "Rebecca"
};
var secondObject = {
    myName: "Colin"
};
 
myObject.sayHello = sayHello;
secondObject.sayHello = sayHello;
 
sayHello();              // "Hi! My name is the global object"
myObject.sayHello();     // "Hi! My name is Rebecca"
secondObject.sayHello(); 
*/

/*$(document).ready(function() {
    $('btnSubmit').click(function(){
    	if ($('#value1').val().length < 1){
    		alert('enter a valid job DID');
    	}

    });
});
*/
/*alert('hi uma!' );*/