var form_submitted = false;

$(document).ready(function(){
  $("#submit_button").on("click", function(){
    submit_form()
  })
 
  hide_form_errors()
  $("#thanks").hide();
})

function hide_form_errors(){
  $("#email_error, .interest_error").css('visibility','hidden')
  $("#email, #interest").removeClass("red_border")
}

function submit_form(){
 
  if(!form_submitted){
   user_email = $("#email").val() 
   user_interest = $("#interest").val()

   // Clear previous errors, if any
   hide_form_errors()

   if(!isValidEmailAddress(user_email)){
     $("#email_error").css('visibility','visible')
     $("#email").addClass("red_border")
   }
   else if (user_interest === null) {
     $(".interest_error").css('visibility','visible')
     $("#interest").addClass("red_border")
   }
   else{
    $("#submit_button").html("Submitting...");
    form_submitted = true;
    console.log("Email: " + user_email + " | Interest: " + user_interest);
    
    // Hide form, show thanks
    $("#internship_form").delay(2000).hide(0);
    $("#thanks").delay(2000).show(0);
   }
  }
  else{
    alert("Form has already been submitted. A direct HTML request?! Are you a robot?")
    console.log("Form has already been submitted. A direct HTML request?! Are you a robot?")
  }
}

// Very rudimentary email regex
function isValidEmailAddress(emailAddress) {
    var pattern = /^[a-z1-9]+@[a-z1-9]+.[a-z1-9]{2,6}$$/i;
    return pattern.test(emailAddress);
}