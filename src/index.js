module.exports = function toReadable (number) {
    let arr1 = ['zero', 'one', 'two', 'three', 'four','five', 'six', 'seven', 'eight',
        'nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen',
        'eighteen','nineteen'];
    let arr10 = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty',
        'ninety'];
    let arr100 = ['hundred'];

    function words1(num) {
        return arr1[num];
    };
    function words10(num) {
      let a = num.toString().slice(0, 1);
      let b = num.toString().slice(1);
      return (b === '0') ? `${arr10[a]}` : `${arr10[a]} ${arr1[b]}`;
    };
    function words100(num) {
       let a = num.toString().slice(0, 1);
       let b = num.toString().slice(1);
       return `${words1(a)} ${arr100[0]} ${words10(b)}`;
    }

    if (number < 20) {
        return words1(number);
    } else if (number < 100) {
      return words10(number);
    } else if (number < 1000) {
      return words100(number)
    }

}
