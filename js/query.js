// `<link rel="stylesheet" href="../css/main.css">`;
function getUrlNomi(city) {
        var url = 'https://nominatim.openstreetmap.org/search.php?q='+city+'&polygon_geojson=1&format=jsonv2';
        return url;
      }
// function click search
$(document).ready(function () {
          $("#city").on('click',function(){
            var searchField = $('[name="search"]').val();
          $.ajax({
              datatype: 'json',
              url:getUrlNomi(searchField),
              success : getSuccess,
        });
      });
});
// get data from console to display
function getSuccess(city){
  city.forEach(element => {
       console.log(element.display_name);
       var result = "";
        result +=`
        <div class="resultNameCard"><p><a>
                <a style="float: right;"><img src="${element.icon}"></a>
                ${element.display_name}
                <a class="nameCardType">${element.type}</a></a>
                <a><p class="detail" >
                <button Class="mouse">details</button></p></a></p>
        </div>
        `;
       $('#result').append(result);
  });
};

// JQuery change css by element
$(document).ready(function(){
  $(".mouse").on({
    mouseenter: function(){
      $(this).css("color", "black");
    },
    mouseleave: function(){
      $(this).css("color", "gray");
    },
    click: function(){
      $(this).css("color", "blue");
    }
  });
});