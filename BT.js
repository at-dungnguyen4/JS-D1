function ex1 (a,b){
  var sum;
  if(a !== b){
    sum = parseInt(a)+parseInt(b);
  }else{
    sum = (parseInt(a)+parseInt(b)) * 3;
  }
  alert(sum);
}
function ex2 (a){
  var result;
  if(a < 19){
    result = 19 - parseInt(a);
  }else if(a === 19){
    result = 0;
  }else{
    result = (parseInt(a) - 19) * 3;
  }
  alert("Result: "+result);
}
function ex3 (a){
  var res;
  for(var i = 0;i < 10;i++){
    res = a.replace("*",i);
    if(parseInt(res) % 3 === 0){
      alert(res);
    }
  }
}
function ex4 (a){
  var res;
  for(var i = 0;i < 10;i++){
    res = a.replace("*",i);
    if(parseInt(res) % 6 === 0){
      alert(res);
    }else{
      alert("["+res+"]");
    }
  }
}
