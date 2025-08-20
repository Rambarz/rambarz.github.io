  export const defaultMaxCompareItems = 4;
  export const defaultCenter = [10.45, 51.2];
  export const defaultZoom = 5.5;
  export const defaultEuCountries = [
    "EU", "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czechia", "Denmark",
    "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy",
    "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal",
    "Romania", "Slovakia", "Slovenia", "Spain", "Sweden"
  ];
  export const defaultEuCountriesCenters = {
    EU: [10.0, 50.0], 
    Austria: [13.3333, 47.5833],
    Belgium: [4.6667, 50.8333],
    Bulgaria: [25.25, 42.75],
    Croatia: [16.0, 45.1],
    Cyprus: [33.0, 35.0],
    Czechia: [15.5, 49.75],
    Denmark: [10.0, 56.0],
    Estonia: [25.0, 58.7],
    Finland: [26.0, 64.0],
    France: [2.2137, 46.2276],
    Germany: [10.4515, 51.1657],
    Greece: [21.8243, 39.0742],
    Hungary: [19.0, 47.0],
    Ireland: [-8.0, 53.0],
    Italy: [12.5674, 41.8719],
    Latvia: [25.0, 57.0],
    Lithuania: [24.0, 56.0],
    Luxembourg: [6.1, 49.75],
    Malta: [14.5146, 35.8997],
    Netherlands: [5.2913, 52.1326],
    Poland: [19.1451, 51.9194],
    Portugal: [-8.2245, 39.3999],
    Romania: [25.0, 46.0],
    Slovakia: [19.5, 48.7],
    Slovenia: [14.9955, 46.1512],
    Spain: [-3.7038, 40.4168],
    Sweden: [15.0, 62.0]
  };

  export const defaultSteps = [
    {
      target: "#mapContainer",
      content: "This is the map area. Zoom and pan to explore open data regions.",
      placement: "center"
    },
    {
      target: "#portalType",
      content: "Here you can filter by portal type like Gov, Geo, or Open."
    },
    {
      target: "#feature",
      content: "Use this to check for available like SPARQL or MQA support."
    },
    {
      target: "#admLevel",
      content: "Control the administrative level displayed on the map."
    },
    {
      target: "#matchedPortals",
      content: "This is the list of matched portals based on your search criteria.",
    },
    {
      target: "#mapContainer .maplibregl-ctrl-top-left",
      content: "Use the navigation controls to zoom or rotate the map."
    },
    {
      target: "#search",
      content: "Search for portals by name or region."
    },
    {
      target: "#mapLayers",
      content: "Toggle the layers you want to show or hide."
    },
    {
      target: "#statistics",
      content: "Statistic Overview for an summary of the current active Open Data Portals."
    },
    {
      target: "#download",
      content: "Download the JSON dataset, active filter CSV or current map view as an image.",
    },
    {
      target: "#options",
      content: "Click here to toggle  Click or Hover mode, dark mode or show and hide federal state relations.",
    },
    {
      target: "#portalDetails",
      content: "After you clicked an area on the map, you see more details about the selected portal(s).",
    },
    {
      target: "#mapContainer",
      content: "Lets get started!",
      placement: "center"
    },
  ]
  export const defaultLayers = [
    {
      "id": "waterway",
      "description": "All waterways",
      "checked": true
    },
    {
      "id": "waterway_label",
      "description": "Named rivers",
      "checked": true
    },
    {
      "id": "tunnel_path",
      "description": "Streams in tunnels",
      "checked": true
    },
    {
      "id": "aeroway-runway",
      "description": "Airport runways",
      "checked": true
    },
    {
      "id": "building",
      "description": "Buildings",
      "checked": false
    },
    {
      "id": "landcover",
      "description": "Natural areas",
      "checked": false
    },
    {
      "id": "boundary_state",
      "description": "State borders",
      "checked": false
    },
    {
      "id": "boundary_county",
      "description": "County borders",
      "checked": false
    },
    {
      "id": "place_city_r5",
      "description": "Cities",
      "checked": false
    },
    {
      "id": "roadname_major",
      "description": "Major road labels",
      "checked": false
    }
  ];