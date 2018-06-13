(function ($) {

  var materialsId;
  var sentenceQueue = [];
  var sentencesId = -1;

  if (!!window.teachamachine && !!window.teachamachine.materialsId) {
    materialsId = window.teachamachine.materialsId;
  }

  $(document).ready(function () {
    if (materialsId) nextSentence();
    else showAlert('No dataset found.');
  });

  function loadSentences() {
    var numberOfSenteces = 10;
    $.get('/api/sentences/' + materialsId + '/random/' + numberOfSenteces, function(data) {
      if (data.length > 0) {
        sentenceQueue = data;
        nextSentence();
      } else {
        showAlert("No sentences found for this data set.");
      }
    }).fail(function (error) {
      showAlert(error.message);
    });
  }

  function nextSentence() {
    if (sentenceQueue.length === 0) {
      loadSentences();
    } else {
      updateSentence(sentenceQueue.shift());
    }
  }

  function updateSentence(sentence) {
    $('#sentence')
      .removeClass('loading')
      .text(sentence.sentence);
    sentencesId = sentence.id;
  }

  $('.add-label').click(function (event) {
    var tagsId = $(this).data('tagId');
    var partial = $('#sentence').text();
    $.post('/api/labels', {
      materialsId: materialsId,
      sentencesId: sentencesId,
      tagsId: tagsId,
      partial: partial
    }, function (data) {
      // No need to do anything here yet
    }).fail(function (error) {
      if (typeof console !== 'undefined') {
        console.log("Couldn't add new label.");
      }
    });
    nextSentence();
  });

  $('#skip').click(function (event) {
    nextSentence();
  });

})(jQuery);
