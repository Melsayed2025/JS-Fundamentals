let arg = process.argv[2];
let nums = parseInt(arg);

if (isNaN(nums)) {
  console.log("Not a number");
} else {
  console.log("My number: " + nums);
}
