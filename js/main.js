function initMap() {

    //Location Marker
    const markers = [
        {
        locationName: 'Crumbs & Dollies',
        lat:  8.454579,
        lng: 124.265113,
        address: '1 Kingly Ct, <br> London,<br> W1B 5PW',
        },
        {
            locationName: 'Leak Alert',
            lat: 8.224558,
            lng: 124.235687,
            address: '96 Bermondsey'
        },
       
    ];

    const fehMarker =  'Asset/No leak detected.png'
    const centerMap = { lat: 8.254579, lng:  124.265113};
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