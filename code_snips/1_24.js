function min(arg1,arg2) {
	return function() {
		console.log(Math.min(arg1,arg2));
	}

 
}

var ans = min(1,2);

ans();


}
​

//

function myFunc() {
	var num = 0;
	return function(){
		num++:
		return num;
	}
}
var numCount = myFunc();
numCount();
numCount();
var num = numCount();
