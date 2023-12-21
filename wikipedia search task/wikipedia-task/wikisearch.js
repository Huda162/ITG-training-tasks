$(document).ready(function(){
    $("#search-input").autocomplete({
        source: function(req, res){
            $.ajax({
                URL: "https://en.wikipedia.org/w/api.php",
                dataType: "json",
                data:{
                    search: req.term
                },
                success: function(data) {
                    res(data[1])
                }
            });
        },
        minLength:3
    })
    $("#search-button").on("click", function(){
        searchResult();
    })
    $("#search-input").on("keypress", function(event){
        if(event.which === 13){
            searchResult($("#search-input").val());
        }
    });
});

function searchResult(){
    const searchTerm = $("#search-input").val();
    $.ajax({
        URL:  "https://en.wikipedia.org/w/api.php",
        dataType: "json",
        data:{
            list: "search",
            srsearch: searchTerm
        },
        success: function(data) {
            displaySearchResults(data.query.search);
          }
    })
}

function displayResult(){
    const resultsContainer = $("#search-result");
    resultsContainer.empty();
    if (results.length > 0) {
        results.forEach(function(result) {
          const resultItem = $("<div class='result-item'>").html(
            "<h2>" + result.title + "</h2>" +
            "<p>" + result.snippet + "</p>"
          );
          resultsContainer.append(resultItem);
        });
      } else {
        resultsContainer.html("<p>No results found.</p>");
      }
    }