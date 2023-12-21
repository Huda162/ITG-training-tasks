$(document).ready(function () {
  $("#search-input").autocomplete({
    source: function (request, response) {
      (function displayAll(){
        for (var item in suggestions) {
          $("#search-result").append($(`<p><b>${item.label}</b>-${item.extract}</p> `));
        }
      })
      $.ajax({
        url: 'https://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
          action: 'query',
          format: 'json',
          origin: '*',
          prop: 'extracts',
          exintro: 1,
          explaintext: 1,
          generator: 'search',
          gsrsearch: request.term,
          gsrnamespace: 0,
        },
        success: function (data) {
          var results = data.query.pages;
          var suggestions = [];
          $("#search-result").css("display", "none");
          for (var key in results) {
            $("#search-result").append($(`<p><b>${results[key].title}</b>-${results[key].extract}</p> `));
            suggestions.push({
              label: results[key].title,
              value: results[key].title,
              extract: results[key].extract,
            });
          }
          response(suggestions);

        },
      });
      
    },
    minLength: 3,
    select: function (event, ui) {
      console.log("Selected: " + ui.item.label);
      console.log("Extract: " + ui.item.extract);
      $("#search-input").val('');
      $("#search-result").empty();
      $("#search-result").css("display", "block");
      $("#search-result").append($(`<p><b>${ui.item.label}</b>-${ui.item.extract}</p> `));
      return false;
    },
  });

  $("#search-button").click(function () {
    $("#search-input").val('');
    $("#search-input").autocomplete( "close" );
    $("#search-result").css("display", "block");
  });
});
