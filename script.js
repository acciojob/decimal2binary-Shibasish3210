function decimalToBinary(num) {
  //Write you code here
	let str = '';
	while (num>0) {
		str += num % 2;
		num = Math.floor(num/2);
	}
  alert(str.split('').reverse().join(''));
}
decimalToBinary(10);

window.decimalToBinary = decimalToBinary;
