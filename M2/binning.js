//* Binning (Resampling) Time Series Data

// Scenario: You have a long list of user click events.
// You need to "bin" these events into 30-minute intervals and count them to see engagement over time.

//? Input
const events = [
  { timestamp: "2025-10-22T10:01:00Z", type: "click" },
  { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },
  { timestamp: "2025-10-22T10:14:00Z", type: "click" },
  { timestamp: "2025-10-22T10:31:00Z", type: "click" },
  { timestamp: "2025-10-22T10:45:00Z", type: "scroll" },
  { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];

const interval = 30*60*1000

const getBinningTimeStamp = (timestamp) => {
    const date = new Date(timestamp)
    // console.log(date.getTime());

    const flooredDate = Math.floor(date.getTime() / interval) * interval
    // console.log(flooredDate);
    
    return new Date(flooredDate).toISOString()
}

// console.log(getBinningTimeStamp("2025-10-22T10:01:00Z"));

const binnedData = events.reduce((acc, event) => {
    const bin = getBinningTimeStamp(event.timestamp)

    if(!acc[bin]){
        acc[bin] = {total: 0}
    }
    acc[bin].total = acc[bin].total + 1
    return acc
},{})

console.log(binnedData);
console.log(new Date(getDate()));
