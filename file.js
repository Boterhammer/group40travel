function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, leisure, restaurants, transportation, hotel, favLinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    //This entire part gets the ids and removes the class "active"
    leisure = document.getElementById("leisure");
    leisure.className = leisure.className.replace(" active", "");
    
    restaurants = document.getElementById("restaurants");
    restaurants.className = restaurants.className.replace(" active", "");
  
    transportation = document.getElementById("transportation");
    transportation.className = transportation.className.replace(" active", "");
  
    hotel = document.getElementById("hotel");
    hotel.className = hotel.className.replace(" active", "");
  
    favLinks = document.getElementById("favLinks");
    favLinks.className = favLinks.className.replace(" active", "");
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

    function hidenshow(){
      var x = document.getElementById("filters");
      var y = document.getElementById("initialfilter");
      if (y.style.display === "none") {
        y.style.display = "block";
      } else {
        y.style.display = "none";
      }      
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
    function hidenshowafter(){
        var x = document.getElementById("hidefilters");
        var y = document.getElementById("ranges");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
        if (y.style.display === "none") {
          y.style.display = "block";
        } else {
          y.style.display = "none";
        }     
      }

    function hidenshow2(){
        var x = document.getElementById("filters2");
        var y = document.getElementById("initialfilter2");
        if (y.style.display === "none") {
          y.style.display = "block";
        } else {
          y.style.display = "none";
        }      
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      function hidenshowafter2(){
        var x = document.getElementById("hidefilters2");
        var y = document.getElementById("ranges2");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
        if (y.style.display === "none") {
          y.style.display = "block";
        } else {
          y.style.display = "none";
        }     
      }

      function hidenshow3(){
        var x = document.getElementById("filters3");
        var y = document.getElementById("initialfilter3");
        if (y.style.display === "none") {
          y.style.display = "block";
        } else {
          y.style.display = "none";
        }      
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      function hidenshowafter3(){
        var x = document.getElementById("hidefilters3");
        var y = document.getElementById("ranges3");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
        if (y.style.display === "none") {
          y.style.display = "block";
        } else {
          y.style.display = "none";
        }     
      }

      function hidenshow4(){
        var x = document.getElementById("filters4");
        var y = document.getElementById("initialfilter4");
        if (y.style.display === "none") {
          y.style.display = "block";
        } else {
          y.style.display = "none";
        }      
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      function hidenshowafter4(){
        var x = document.getElementById("hidefilters4");
        var y = document.getElementById("ranges4");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
        if (y.style.display === "none") {
          y.style.display = "block";
        } else {
          y.style.display = "none";
        }     
      }

    function hidenshowsort(){
      var x = document.getElementById("srtby");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
    function hidenshowsort2(){
        var x = document.getElementById("srtby2");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      function hidenshowsort3(){
        var x = document.getElementById("srtby3");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      function hidenshowsort4(){
        var x = document.getElementById("srtby4");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
    $( function() {
        $( "#slider-range" ).slider({
          range: true,
          min: 0,
          max: 5,
          values: [ 0, 5 ],
          slide: function( event, ui ) {
            $( "#amount" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
          }
        });
        $( "#amount" ).val( "" + $( "#slider-range" ).slider( "values", 0 ) +
        " - " + $( "#slider-range" ).slider( "values", 1 ) );
    } );
    $( function() {
        $( "#slider-range2" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 0, 500 ],
        slide: function( event, ui ) {
            $( "#amount2" ).val( "" + ui.values[ 0 ] + "km - " + ui.values[ 1 ] + "km");
        }
        });
        $( "#amount2" ).val( "" + $( "#slider-range2" ).slider( "values", 0 ) +
        "km - " + $( "#slider-range2" ).slider( "values", 1 ) +"km");
    } );
    $( function() {
        $( "#slider-range3" ).slider({
          range: true,
          min: 0,
          max: 5,
          values: [ 0, 5 ],
          slide: function( event, ui ) {
            $( "#amount3" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
          }
        });
        $( "#amount3" ).val( "" + $( "#slider-range3" ).slider( "values", 0 ) +
        " - " + $( "#slider-range3" ).slider( "values", 1 ) );
    } );
    $( function() {
        $( "#slider-range4" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 0, 500 ],
        slide: function( event, ui ) {
            $( "#amount4" ).val( "" + ui.values[ 0 ] + "km - " + ui.values[ 1 ] + "km");
        }
        });
        $( "#amount4" ).val( "" + $( "#slider-range4" ).slider( "values", 0 ) +
        "km - " + $( "#slider-range4" ).slider( "values", 1 ) +"km");
    } );
    $( function() {
        $( "#slider-range5" ).slider({
          range: true,
          min: 0,
          max: 5,
          values: [ 0, 5 ],
          slide: function( event, ui ) {
            $( "#amount5" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
          }
        });
        $( "#amount5" ).val( "" + $( "#slider-range5" ).slider( "values", 0 ) +
        " - " + $( "#slider-range5" ).slider( "values", 1 ) );
    } );
    $( function() {
        $( "#slider-range6" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 0, 500 ],
        slide: function( event, ui ) {
            $( "#amount6" ).val( "" + ui.values[ 0 ] + "km - " + ui.values[ 1 ] + "km");
        }
        });
        $( "#amount6" ).val( "" + $( "#slider-range6" ).slider( "values", 0 ) +
        "km - " + $( "#slider-range6" ).slider( "values", 1 ) +"km");
    } );
    $( function() {
        $( "#slider-range7" ).slider({
          range: true,
          min: 0,
          max: 5,
          values: [ 0, 5 ],
          slide: function( event, ui ) {
            $( "#amount7" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
          }
        });
        $( "#amount7" ).val( "" + $( "#slider-range7" ).slider( "values", 0 ) +
        " - " + $( "#slider-range7" ).slider( "values", 1 ) );
    } );
    $( function() {
        $( "#slider-range8" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 0, 500 ],
        slide: function( event, ui ) {
            $( "#amount8" ).val( "" + ui.values[ 0 ] + "km - " + ui.values[ 1 ] + "km");
        }
        });
        $( "#amount8" ).val( "" + $( "#slider-range8" ).slider( "values", 0 ) +
        "km - " + $( "#slider-range8" ).slider( "values", 1 ) +"km");
    } );
