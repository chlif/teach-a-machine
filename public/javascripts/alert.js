(function ($) {

  var $alert = $('#alert');

  window.showAlert = function(message) {
    if ($alert.length > 0) {
      $alert.html(message);
      fadeAlert();
    }
  };

  function fadeAlert() {
    $alert.fadeIn(300, () => {
      setTimeout(() => {
        $alert.fadeOut(1500);
      }, 2000);
    });
  }

})(jQuery);
