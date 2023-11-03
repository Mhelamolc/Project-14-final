
      

      let directionsService;
      let directionsRenderer
      let map;
      let geocoder;

    function initMap() {

          directionsService = new google.maps.DirectionsService();
          directionsRenderer = new google.maps.DirectionsRenderer();
          const coordinates = { lat: 33.071219, lng: -117.066661 };

          map = new google.maps.Map(document.getElementById("map"), {
              zoom: 13,
              center: coordinates,
          });
          directionsRenderer.setMap(map);
        };

      function calcRoute() {
          let start = document.getElementById('origin').value;
          let end = document.getElementById('destination').value;
          let request = {
              origin: start,
              destination: end,
              travelMode: 'DRIVING'
          };
          directionsService.route(request, function (result, status) {
              if (status == 'OK') {
                  directionsRenderer.setDirections(result);
              } else { alert("An unexpected error occurred")}
          });
      
         
           
const marker = new google.maps.Marker({
               position: coordinates,
               map: map,
           });
           const circle = new google.maps.Circle({
                    strokeColor: "blue",
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: "#FFF",
                    fillOpacity: 0.5,
                    map,
                    center: coordinates,
                    radius: 200,
            });
        
          }
window.initMap = initMap;

