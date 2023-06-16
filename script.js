const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	if(key in sampleObject ){
		return true;
	}
	else{
		return false;
	}
}

// Do not change the code below

