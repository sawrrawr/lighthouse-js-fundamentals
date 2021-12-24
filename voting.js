const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function(stations) {
const goodStations = [];
  for (const station of stations) {
    const capacity = station[1];
    const stationName = station[0];
    const buildingType = station[2];
   if (capacity >= 20 && buildingType === 'school') {
    goodStations.push(stationName);
   } else if (capacity >= 20 && buildingType === 'community centre') {
    goodStations.push(stationName);
    }
  }
  return goodStations;
};

console.log(chooseStations(stations));

