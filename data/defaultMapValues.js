  export const defaultMaxCompareItems = 4;
  export const defaultCenter = [10.45, 51.2];
  export const defaultZoom = 5.5;
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