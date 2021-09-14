// Code your solution here
function findMatching(drivers, name) {
  const newDrivers = drivers.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
  return newDrivers;
}

function fuzzyMatch(drivers, letters) {
  const startsWith = drivers.filter(
    (driver) => driver.toLowerCase()[0] === letters.toLowerCase()[0]
  );
  return startsWith;
}

function matchName(drivers, names) {
  const nameMatch = drivers.filter(
    (driver) => driver["name"].toLowerCase() === names.toLowerCase()
  );
  return nameMatch;
}

//match passed in name

// returns mtaching drivers if case does not match but letters do

//returns empty array if no match
