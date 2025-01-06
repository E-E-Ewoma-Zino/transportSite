// List of map URLs for each location with red markers
const locations = [
  "https://www.google.com/maps/embed/v1/place?q=10421+S+Jordan+Gateway,+South+Jordan,+UT+84095.&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
  "https://www.google.com/maps/embed/v1/place?q=1520+Pier+C+St,+Longbeach,+CA+90813&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
  "https://www.google.com/maps/embed/v1/place?q=4450+Robertson+Rd,+Madison,+WI+53714.&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
];

// Function to update the map iframe source
function updateMap(index) {
  const mapFrame = document.getElementById("mapFrame");
  mapFrame.src = locations[index];
}
