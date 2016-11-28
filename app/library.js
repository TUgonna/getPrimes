module.exports={
	getPrimes: function (n){
		if(typeof (n)== "number"){
			if(n>1){
			  var array1=[];
			  for(var i=2; i<n; i++){
			    if(i==3||i==2){
		        array1.push(i);    
			    }
			    else if (!(i%2===0 || i%3===0)){
			      array1.push(i);
			    }
			  }
			
			  return array1;
			}
			else{
			  return "invalid number";
			}

		}
		else{
			return "argument must be number"
		}
	}

}