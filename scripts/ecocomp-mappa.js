/* Dichiaro e inizializzo la mappa. */
var mappaEcocompattatori = L.map('map').setView([42, 13], 5.5);

/* Definisco le impostazioni di visualizzazione. */
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
    id: 'streets-v11',
    accessToken: 'your.accessToken'
}).addTo(mappaEcocompattatori);

/* Definisco una nuova icona. */
var greenMarker = L.icon({
    iconUrl:        "images/marker-icon-green.png",
    shadowUrl:      "images/marker-shadow.png",
    iconSize:       [25, 41],
    shadowSize:     [41, 41],
    iconAnchor:     [12, 40], 
    shadowAnchor:   [13, 39], 
    popupAnchor:    [1 ,-32] 
});

/* Definisco una nuova icona. */
var redMarker = L.icon({
    iconUrl:        "images/marker-icon-red.png",
    shadowUrl:      "images/marker-shadow.png",
    iconSize:       [25, 41],
    shadowSize:     [41, 41],
    iconAnchor:     [12, 40], 
    shadowAnchor:   [13, 39], 
    popupAnchor:    [1 ,-32] 
});

/* Definisco un'icona per la posizione corrente dell'utente. */
var userMarker = L.icon({
    iconUrl:        "images/marker-user.png",
    iconSize:       [40, 40],
    iconAnchor:     [20, 20],
    popupAnchor:    [0 ,-15]
});

/* Popolo la mappa. */
L.marker([40.391747,16.554278], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Via Giulio Cesare<br>75015 Pisticci MT");
L.marker([40.367094,16.690642], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Via San Giovanni Bosco<br>(fraz. Marconia)<br>75015 Pisticci MT");
L.marker([40.528633,16.319237]).addTo(mappaEcocompattatori).bindPopup("<b>Despar</b><br>Via Giocoli, 69<br>75017 Salandra MT");
L.marker([40.414282,16.688115]).addTo(mappaEcocompattatori).bindPopup("<b>Tre Elle Ti</b><br>Viale della Resistenza, 1<br>75012 Bernalda MT");
L.marker([40.287302,16.567085], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Via Sant'Antuono<br>75023 Montalbano Jonico MT");
L.marker([40.261203,16.258359]).addTo(mappaEcocompattatori).bindPopup("<b>QUI Discount</b><br>Via Papa Giovanni XXIII, 48<br>85037 San Brancato PZ");
L.marker([39.597451,16.744850], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Fraz. Mirto<br>87060 Crosia CS");
L.marker([39.604709,16.777362], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Piazzale Stazione<br>87060 Crosia CS");
L.marker([39.595375,16.635424], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Viale Galeno<br>87067 Rossano CS");
L.marker([39.610544,16.638868], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Viale Sant'Angelo<br>87067 Rossano CS");
L.marker([39.566670,16.633330], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Via dei Normanni<br>87067 Rossano CS");
L.marker([38.653316,16.055956], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Strada Statale 18 Tirrena Inferiore<br>89851 Vena Di Ionadi VV");
L.marker([38.712006,16.160187]).addTo(mappaEcocompattatori).bindPopup("<b>La Rocca</b><br>Zona industriale s.n.c.<br>89843 Maierato VV");
L.marker([38.735211,16.167412], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Via Nazionale, 130<br>89812 Pizzo VV");
L.marker([38.646333,16.054569]).addTo(mappaEcocompattatori).bindPopup("<b>Delegazione ACI</b><br>Strada Statale 18 Tirrena Inferiore<br>89851 Ionadi VV");
L.marker([38.664365,16.284889]).addTo(mappaEcocompattatori).bindPopup("<b>Punto è</b><br>Via Roma<br>89821 San Nicola Da Crissa VV");
L.marker([38.677956,16.407514]).addTo(mappaEcocompattatori).bindPopup("<b>PagoPoco</b><br>Corso Gregorio Staglianò<br>88064 Chiaravalle Centrale CZ");
L.marker([38.610312,16.331353]).addTo(mappaEcocompattatori).bindPopup("<b>Conad</b><br>Viale Italia<br>89822 Simbario VV");
L.marker([39.075299,17.111206]).addTo(mappaEcocompattatori).bindPopup("<b>Conad</b><br>Via Gioacchino Da Fiore, 29<br>88900 Crotone KR");
L.marker([39.083014,17.114408], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Incrocio Via Giuseppe Di Vittorio e Via Mario Nicoletta<br>88900 Crotone KR");
L.marker([44.588666,11.366984]).addTo(mappaEcocompattatori).bindPopup("<b>Conad</b><br>Via Don Francesco Pasti, 26<br>40050 Funo BO");
L.marker([44.484104,11.373837]).addTo(mappaEcocompattatori).bindPopup("<b>Conad Superstore</b><br>Via Emilia Levante, 6<br>40139 Bologna BO");
L.marker([44.500766,11.329080]).addTo(mappaEcocompattatori).bindPopup("<b>Conad</b><br>Viale Antonio Silvani, 3<br>40122 Bologna BO");
L.marker([44.481597,11.389999]).addTo(mappaEcocompattatori).bindPopup("<b>Fossolo 2</b><br>Viale Abramo Lincoln, 5<br>40139 Bologna BO");
L.marker([44.497482,11.390794]).addTo(mappaEcocompattatori).bindPopup("<b>Vialarga</b><br>Via Larga, 10<br>40138 Bologna BO");
L.marker([44.506482,11.361757]).addTo(mappaEcocompattatori).bindPopup("<b>NaturaSì</b><br>Viale della Repubblica, 23<br>40127 Bologna BO");
L.marker([44.568200,11.357524]).addTo(mappaEcocompattatori).bindPopup("<b>Le Piazze</b><br>Via Pio La Torre, 5/D<br>40013 Castel Maggiore BO");
L.marker([44.472103,11.405980]).addTo(mappaEcocompattatori).bindPopup("<b>Conad</b><br>Via Emilia, 43<br>40068 San Lazzaro Di Savena BO");
L.marker([44.479651,11.380371]).addTo(mappaEcocompattatori).bindPopup("<b>NaturaSì</b><br>Via Po, 3<br>40133 Bologna BO");
L.marker([44.616787,10.716930]).addTo(mappaEcocompattatori).bindPopup("<b>Conad City</b><br>Via Gino Bergianti, 1<br>42019 Scandiano RE");
L.marker([44.790955,10.884875]).addTo(mappaEcocompattatori).bindPopup("<b>Conad</b><br>Via Pezzana, 22<br>41012 Carpi MO");
L.marker([45.045099,9.6925883]).addTo(mappaEcocompattatori).bindPopup("<b>La Tana dei Polli</b><br>Via IV Novembre, 90<br>29121 Piacenza PC");
L.marker([45.050750,9.7062491]).addTo(mappaEcocompattatori).bindPopup("<b>Borgo Faxhall</b><br>Piazzale Guglielmo Marconi, 37<br>29121 Piacenza PC");
L.marker([45.153674,10.727757]).addTo(mappaEcocompattatori).bindPopup("<b>McDonald's</b><br>Via Leopoldo Pilla, 10<br>46010 Curtatone MN");
L.marker([44.963251,11.103676]).addTo(mappaEcocompattatori).bindPopup("<b>CarLux</b><br>Strada Statale 12 dell'Abetone e del Brennero<br>46025 Poggio Rusco MN");
L.marker([45.604660,9.5823097]).addTo(mappaEcocompattatori).bindPopup("<b>Conad</b><br>Via Cardinal Gustavo Testa, 38<br>24040 Boltiere BG");
L.marker([45.621741,9.6016258]).addTo(mappaEcocompattatori).bindPopup("<b>Centro Giovanile</b><br>Via Gianpaolo Petrocchi<br>24046 Osio Sotto BG");
L.marker([44.996120,8.9836243]).addTo(mappaEcocompattatori).bindPopup("<b>NaturaSì</b><br>Via Lomellina, 62<br>27058 Voghera PV");
L.marker([45.166782,9.7583155], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Via Roma<br>26847 Maleo LO");
L.marker([45.306090,9.0099690]).addTo(mappaEcocompattatori).bindPopup("<b>Conad Superstore</b><br>Via Motta Visconti<br>27022 Casorate Primo PV");
L.marker([45.290182,8.5938780], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Piazza Libertà<br>27038 Robbio PV");
L.marker([45.285186,8.5937630], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Via Antonio Gramsci<br>27038 Robbio PV");
L.marker([45.285197,8.6023780], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Via dell'artigianato<br>27038 Robbio PV");
L.marker([45.485071,10.172220], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Via Aldo Moro, 109<br>25020 Flero BS");
L.marker([45.488181,10.178641], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Via XXV Aprile<br>25020 Flero BS");
L.marker([43.325397,12.953955], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Fraz. Argignano<br>60044 Fabriano AN");
L.marker([41.576960,14.673603]).addTo(mappaEcocompattatori).bindPopup("<b>Centro del Molise</b><br>Via Colle delle Api, 44<br>86100 Campobasso CB");
L.marker([41.569593,14.674516]).addTo(mappaEcocompattatori).bindPopup("<b>Duelle</b>Viale Ventiquattro Maggio, 185<br>86100 Campobasso CB");
L.marker([41.566486,14.682088]).addTo(mappaEcocompattatori).bindPopup("<b>Clean Car</b><br>Tangenziale Est, KM 0+870<br>86100 Campobasso CB");
L.marker([41.515680,14.674210]).addTo(mappaEcocompattatori).bindPopup("<b>Luisi Angela</b><br>Via Roma, 14<br>86010 Mirabello Sannitico CB");
L.marker([41.562858,14.666419]).addTo(mappaEcocompattatori).bindPopup("<b>Sigma</b><br>Via Nina Guerrizio<br>86100 Campobasso CB");
L.marker([45.564185,7.9910522], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("13898 Occhieppo Superiore BI");
L.marker([45.408323,8.0937018], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Piazza Giovanni Palatucci<br>13881 Cavaglià BI");
L.marker([45.652018,8.1660172], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Fraz. Ponzone<br>13835 Trivero BI");
L.marker([45.632663,8.1440930], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Piazza Alpini d'Italia<br>13825 Valle Mosso BI");
L.marker([45.613903,8.0438300], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Via IV Novembre<br>13816 Miagliano BI");
L.marker([45.487835,8.0820340], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Piazza Banino<br>(fraz. Vergnasco)<br>13882 Cerrione BI");
L.marker([45.556156,8.0190964], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Via Papa Giovanni XXIII<br>13897 Occhieppo Inferiore BI");
L.marker([45.615644,8.0530888], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("13811 Andorno Micca BI");
L.marker([45.536595,8.0605311], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("13894 Gaglianico BI");
L.marker([45.590939,8.2340631], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("13862 Brusnengo BI");
L.marker([45.478062,8.6945833], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Piazza Vittorio Veneto<br>28066 Galliate NO");
L.marker([41.309870,16.286386]).addTo(mappaEcocompattatori).bindPopup("<b>Scuola Raffaele Girondi</b><br>Via Zanardelli, 29<br>76121 Barletta BT");
L.marker([41.308872,16.263874]).addTo(mappaEcocompattatori).bindPopup("<b>Bowling Park degli Ulivi</b><br>Via Minervino, 1<br>76121 Barletta BT");
L.marker([41.305669,16.280550], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Via Cesare Dante Cioce<br>76121 Barletta BT");
L.marker([40.532476,17.433334], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Piazza Giuseppe Verdi<br>74023 Grottaglie TA");
L.marker([40.531745,17.437221], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Piazza Padre Pio<br>74023 Grottaglie TA");
L.marker([38.917092,8.9106718]).addTo(mappaEcocompattatori).bindPopup("<b>Pinus Village</b><br>Strada Statale 195 Sulcitana, KM 42<br>09010 Santa Margherita di Pula CA");
L.marker([36.917817,14.712191]).addTo(mappaEcocompattatori).bindPopup("<b>Interspar</b><br>Via Giorgio La Pira, 21<br>97100 Ragusa RG");
L.marker([36.909625,14.696789]).addTo(mappaEcocompattatori).bindPopup("<b>Eurospar</b><br>Via Ettore Fieramosca, 5<br>97100 Ragusa RG");
L.marker([36.907801,14.721631]).addTo(mappaEcocompattatori).bindPopup("<b>ARD Discount</b><br>Via Achille Grandi, 34<br>97100 Ragusa RG");
L.marker([42.910002,12.731231]).addTo(mappaEcocompattatori).bindPopup("<b>PiazzaUmbra</b><br>Strada Statale 3 Flaminia, KM 147<br>06039 Trevi PG");
L.marker([45.409815,11.717291], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("35030 Saccolongo PD");
L.marker([45.070562,11.784917], {icon: redMarker}).addTo(mappaEcocompattatori).bindPopup("<b>Scuola Giacomo Sichirollo</b><br>Via del Sacro Cuore, 37<br>45100 Rovigo RO<br><br>" + 
    "<b>N.B.: Accesso limitato</b><br>Non si tratta di un ecocompattatore pubblico.");
L.marker([45.513060,11.343048]).addTo(mappaEcocompattatori).bindPopup("<b>Conad</b><br>Via dell'industria, 46<br>36071 Arzignano VI");
L.marker([45.799770,11.727557], {icon: greenMarker}).addTo(mappaEcocompattatori).bindPopup("Piazza degli Scalpellini<br>36020 Pove del Grappa VI");
L.marker([45.363760,10.858636]).addTo(mappaEcocompattatori).bindPopup("<b>NaturaSì</b><br>Via Adamello, 4 E/F<br>37069 Villafranca di Verona VR");

/* Localizzo l'utente. */
function onLocationFound(e) {
    L.marker(e.latlng, {zIndexOffset: 1000, icon: userMarker}).addTo(mappaEcocompattatori).bindPopup("<b>Questo sei tu!</b>");;
    L.circle(e.latlng, e.accuracy/2, {color: "red"}).addTo(mappaEcocompattatori);
}
mappaEcocompattatori.on('locationfound', onLocationFound);
mappaEcocompattatori.locate({setView: true, maxZoom: 12});
