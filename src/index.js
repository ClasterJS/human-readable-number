module.exports = function toReadable (number) {
  let arr1 = ['zero', 'one', 'two', 'three', 'four','five', 'six', 'seven', 'eight','nine',
  'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen',
  'nineteen'];
  let arr10 = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty',
'ninety'];
  let arr100 = ['hundred'];

  function words1(num) {
      return arr1[num];
  };
  function words10(num) {
      return arr10[num]
  };
  function words100() {
      return arr100[0];
  }

  if (number < 20) {
    return words1(number);
} else if (number < 100) {
  let a = number.toString().slice(0, 1);
  let b = number.toString().slice(1, 2);
  return (b === '0') ? `${words10(a)}` : `${words10(a)} ${words1(b)}`;


}


}
