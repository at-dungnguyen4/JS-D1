function ex1(a, b) {
  var sum;
  if (a !== b) {
    sum = parseInt(a) + parseInt(b);
  } else {
    sum = (parseInt(a) + parseInt(b)) * 3;
  }
  alert(sum);
}

function ex2(a) {
  var result;
  if (a < 19) {
    result = 19 - parseInt(a);
  } else if (a === 19) {
    result = 0;
  } else {
    result = (parseInt(a) - 19) * 3;
  }
  alert(result);
}

function ex3(a) {
  var string_hidden = document.getElementById("input-ex-3-4").value;
  var sum = 0;
  var result = [];
  var result_ex4 = [];
  var temp;
  for (var i = 0; i < string_hidden.length; i++) {
    if (string_hidden[i] != "*") {
      sum += Number(string_hidden[i]);
    }
  }
  for (var j = 0; j < 10; j++) {
    temp = sum + j;
    temp %= 3;
    if (temp === 0) {
      result.push(string_hidden.replace("*", j));
    }
  }
  if (a != 6) {
    alert(result);
    return false;
  }
  for (var k = 0; k < result.length; k++) {
    if (result[k] % 2 === 0) {
      result_ex4.push(result[k]);
    }
  }
  var check_empty_array = result_ex4.length;
  if (check_empty_array === 0) {
    alert('Result is empty');
    return false;
  }
  alert(result_ex4);
  return false;
}

function ex4() {
  var a = 6;
  var pre_result = ex3(a);
}
