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
    $('.input').each(function(){
          $(this).val("");
          var hoverText = $(this).attr("err");
          // $(this).bubbletip($('#tip1_up'));
          // $(this).hover(
          //   function(){
          //     // $(this).append($("<div class='hoverMsg'> **** </div>"))
          //     
          //   },
          //   function(){
          //     $(this).find("div:last").remove();
          //   }
            
          //);
    });
    // $('#value1').bubbletip($('#tip1_up'));
    if ($('#value2')[0])
    $('#value2').bubbletip($('#tip2_up'));

    // $('#value3').bubbletip($('#tip3_up'));
    // $('#value4').bubbletip($('#tip4_up'));




    // $('.input').each.hover(function(){
    //     var hoverText = $(this).attr("err");
    //     $ (this).text = hoverText;
    // });

// $("li").hover(
//   function () {
//     $(this).append($("<span> ***</span>"));
//   },
//   function () {
//     $(this).find("span:last").remove();
//   }
// );



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

//Ajax request


function loadNextPage(page)
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {

      //need to get the params from the url and go to next page.

    // document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    $(".form_content").html($(xmlhttp.responseText).find(".form_content").html());
    }
  }

  var url = window.location +'&pagenumber='+page;
xmlhttp.open("GET",url,true);
xmlhttp.send();
}






 
 