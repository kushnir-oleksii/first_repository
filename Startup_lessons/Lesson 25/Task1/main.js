let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function summ(arr, sum = 0, index = 0) {
	if (arr[index]) {
		return summ(arr, sum + arr[index], ++index)
	} else {
		return sum
	}
}
console.log(summ(arr))