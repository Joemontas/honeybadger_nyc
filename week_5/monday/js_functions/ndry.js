var thisWeekTimes = [52, 51, 53, 52, 54];
var lastWeekTimes = [54, 57, 58, 53, 54, 58];
var weekBeforeTimes = [100, 102, 142, 133, 123, 141, 120];

var sum = 0;
for (var i = 0; i < thisWeekTimes.length; i++) {
  sum += thisWeekTimes[i];
}
var thisWeekAvg = sum / thisWeekTimes.length;

var sum = 0;
for (var i = 0; i < lastWeekTimes.length; i++) {
  sum += lastWeekTimes[i];
}
var lastWeekAvg = sum / lastWeekTimes.length;

var sum = 0;
for (var i = 0; i < weekBeforeTimes.length; i++) {
  sum += weekBeforeTimes[i];
}
var weekBeforeAvg = sum / weekBeforeTimes.length;

console.log(thisWeekAvg);
console.log(lastWeekAvg);
console.log(weekBeforeAvg);