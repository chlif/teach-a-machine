(function ($) {

  var materialsId;
  var ageGroup = 0;
  var gender = 'other';

  if (!!window.teachamachine && !!window.teachamachine.materialsId) {
    materialsId = window.teachamachine.materialsId;
  }

  $('#age a').click(function (event) {
    event.preventDefault();
    var $this = $(this);
    ageGroup = $this.data('ageGroup');

    $this
      .addClass('active')
      .siblings()
      .removeClass('active');
  });

  $('#gender a').click(function (event) {
    event.preventDefault();
    var $this = $(this);
    gender = $this.data('gender');

    $this
      .addClass('active')
      .siblings()
      .removeClass('active');
  });

  $('#start').click(function() {
    $.post('/api/demographic', {
        materialsId: materialsId,
        ageGroup: ageGroup,
        gender: gender
      }, function (data) {
        window.location = '/run/' + materialsId;
      })
      .fail(function (error) {
        // Failed to add demographic. No worries. Let's move along!
        window.location = '/run/' + materialsId;
      });
  });

})(jQuery);
