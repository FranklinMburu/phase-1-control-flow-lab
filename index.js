// Function to determine the greeting based on distance
function scuberGreetingForFeet(feet) {
  // Check if the ride distance is less than or equal to 400 feet
  if (feet <= 400) {
    return 'This one is on me!';
  }
  // Check if the ride distance is between 400 and 2000 feet
  else if (feet > 400 && feet <= 2000) {
    return 'That will be twenty bucks.';
  }
  // Check if the ride distance is over 2000 feet but not more than 2500 feet
  else if (feet > 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  // If the ride distance exceeds 2500 feet, it's not allowed
  else {
    return 'No can do.';
  }
}

// Function to check the city using a ternary operator
function ternaryCheckCity(city) {
  // Return response based on whether the city is NYC or not
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

// Function to determine the response based on the tip using a switch statement
function switchOnCharmFromTip(tip) {
  // Use a switch statement to match the tip level
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
