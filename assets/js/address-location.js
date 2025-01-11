// List of states
const states = [
    "Atlanta, GA",
    "Baltimore, MD",
    "Charleston, SC",
    "Charlotte, NC",
    "Chicago, IL",
    "Cincinnati, OH",
    "Cleveland, OH",
    "Columbus, OH",
    "Dallas, TX",
    "Denver, CO",
    "Detroit, MI",
    "El Paso, TX",
    "Halifax / Dartmouth, NS",
    "Houston, TX",
    "Indianapolis, ID",
    "Jacksonville, FL",
    "Kansas City, KS",
    "Laredo, TX",
    "Los Angeles / Long Beach, CA",
    "Louisville, KY",
    "Memphis, TN",
    "Miami, FL",
    "Minneapolis, MN",
    "Mobile, AL",
    "Nashville, TN",
    "New Orleans, LA",
    "New York, NY / Newark, NJ",
    "Norfolk, VA",
    "Omaha, NE",
    "Phoenix, AZ",
    "Portland, OR",
    "Raleigh, NC",
    "Salt Lake City",
    "San Antonio, TX",
    "San Francisco / Oakland, CA",
    "Savannah, GA",
    "Seattle, WA",
    "St. Louis, MO",
    "Tacoma, WA",
    "Tampa, FL",
    "Wilmington, NC",
    "Worcester / Boston, MA",
    "Calgary, AB",
    "Edmonton, AB",
    "Montreal, QB",
    "Toronto, ON",
    "Vancouver, BC / Delta, BC",
    "Winnipeg, MB",
    "Regina, SK",
    "Saskatoon, SK"
];

// Reference to the container element
const stateContainer = document.getElementById("stateContainer");

// Map through the states array and create the structure for each state
states.forEach(state => {
    // Create the main container div
    const stateDiv = document.createElement("div");
    stateDiv.className = "tw-flex tw-gap-2 sm:tw-gap-4 tw-align-center tw-pt-4";

    // Create the image element
    const img = document.createElement("img");
    img.className = "tw-w-[25px] tw-h-[25px] sm:tw-w-[30px] sm:tw-h-[30px]";
    img.src = "assets/img/icons/location-marker.png";
    img.alt = "Location Icon";

    // Create the text element
    const text = document.createElement("p");
    text.className = "tw-font-semibold";
    text.textContent = state;

    // Append the image and text to the stateDiv
    stateDiv.appendChild(img);
    stateDiv.appendChild(text);

    // Append the stateDiv to the container
    stateContainer.appendChild(stateDiv);
});
