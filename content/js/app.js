$( document ).ready(function() {
  console.log ('document ready')
  window.myDataRef = new Firebase('https://movekick.firebaseio.com/responses');


  submitForm = function (e) {
    var data = getFormData ($('#inputForm'));
    myDataRef.push(data, function(err) {
      if (err) {
        console.log(err);
      } else {
        $('#formWrap').hide();
        $('#formSubmitThanks').fadeIn();          
      }
    });

    return false;
  }
    

  getFormData = function (form) {
    var unindexed_array = form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function (n,i) {
      indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
  }

});


