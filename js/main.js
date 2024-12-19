function initMap() {

    //Location Marker
    const markers = [
        {
        locationName: 'Sensor',
        lat:  8.254660,
        lng: 124.265305,
        address: 'Location: Kitchen Pipe'
        },
        {
            locationName: 'Sensor',
            lat: 8.254596,
            lng: 124.265323,
            address: 'Location: Bathroom Pipe'
        },
       
    ];

    const fehMarker = {
        url: 'Asset/No leak detected.png', // Path to the icon image
        scaledSize: new google.maps.Size(15, 15) // Set the size of the icon
    };
    const centerMap = { lat: 8.254622, lng:  124.265295};
    const mapOptions = {
        center: centerMap,
        zoom: 20,
        disbleDefault: true,
    }
    const map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
    const infoWindow = new google.maps.InfoWindow({
        minWidth: 200,
        maxWidth: 200,
    });

    function createInfoWindow(marker, infoWindowContent) {
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent(infoWindowContent);
            infoWindow.open(map, marker);
        });
    }

    /**
    * Loop through all markers
    */
    for (let i = 0; i < markers.length; i++) {
        for (let i = 0; i < markers.length; i++) {
            const marker = new google.maps.Marker({
                position: { lat: markers[i]['lat'], lng: markers[i]['lng'] },
                map: map,
                icon: fehMarker
            });
        
            const infoWindowContent = `
                <div class="feh-content">
                    <h3>${markers[i]['locationName']}</h3>
                    <address>
                        <p>${markers[i]['address']}</p>
                    </address>
                </div>
            `;
        
            createInfoWindow(marker, infoWindowContent);
        }
    }
      
}