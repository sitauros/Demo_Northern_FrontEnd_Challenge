var form_submit_in_progress = false;

$(document).ready(function(){
  $("#submit_button").on("click", function(){
    submit_form()
  })
 
  hide_form_errors()
  $("#thank_you_page").hide();
})

function hide_form_errors(){
  $("#email_error, .interest_error").css('visibility','hidden')
  $("#email, #interest").removeClass("red_border")
}

function submit_form(){
 
  if(form_submit_in_progress){
    alert("Please submit the form only once. Press OK to continue.")
    console.log("Please submit the form only once. Press OK to continue.")
  }
  else{
    user_email = $("#email").val() 
    user_interest = $("#interest").val()

    // Clear previous errors if present
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
      form_submit_in_progress = true;
      console.log("Email: " + user_email + " | Interest: " + user_interest);
    
      // Simulate form submission delay, then hide form afterward
      $("#internship_form").delay(2000).hide(0);
      $("#thank_you_page").delay(2000).show(0);
   }
  }
}

// Rudimentary email regex check
function isValidEmailAddress(emailAddress) {
    var pattern = /^[a-z1-9]+@[a-z1-9]+.[a-z1-9]{2,6}$$/i;
    return pattern.test(emailAddress);
}