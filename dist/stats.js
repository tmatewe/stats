//poisson distribution
var buttons = document.getElementsByClassName("btn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", myClick);
}

//arrays
let poissonArr = [];
let binomialArr = [];
let normalArr = [];
let count = 0;

function myClick(e) {
  if (e.target.value === "poisson") {
    let lamda = Number(document.getElementById("lamda").value);
    let x = Number(document.getElementById("x").value);
    let poisson = document.getElementById("poisson");
    let totalPoisson = document.querySelector("#totalPoisson");

    function factorialX(x) {
      return x ? x * factorialX(x - 1) : 1;
    }

    poisson.value = ((lamda ** x * Math.E ** -lamda) / factorialX(x)).toFixed(
      4
    );

    poissonArr.push(Number(poisson.value));
    console.log(poissonArr);

    //sum
    var sum = poissonArr.reduce((a, b) => a + b, 0);
    console.log(sum);
    totalPoisson.value = sum;
    //Binomial distribution
  } else if (e.target.value === "binomial") {
    let n = Number(document.getElementById("n").value);
    let p = Number(document.getElementById("p").value);
    let q = 0;
    q = 1 - p;
    let r = Number(document.getElementById("r").value);
    let binomial = document.getElementById("binomial");
    let totalBinomial = document.getElementById("totalBinomial");
    let b = 0;
    b = n - r;
    function factorialN(n) {
      return n ? n * factorialN(n - 1) : 1;
    }

    function factorialR(r) {
      return r ? r * factorialR(r - 1) : 1;
    }
    function factorialB(b) {
      return b ? b * factorialB(b - 1) : 1;
    }

    binomial.value = (
      (factorialN(n) / (factorialR(r) * factorialB(b))) *
      Math.pow(p, r) *
      Math.pow(q, n - r)
    ).toFixed(4);

    binomialArr.push(Number(binomial.value));
    console.log(binomialArr);

    //sum
    var sum = binomialArr.reduce((a, b) => a + b, 0);
    console.log(sum);
    totalBinomial.value = sum;

    //Normal distribution
  } else if (e.target.value === "normal") {
    let mean = Number(document.getElementById("mean").value);
    let std = Number(document.getElementById("std").value);
    let xNormal = Number(document.getElementById("xNormal").value);
    normal.value = ((xNormal - mean) / std).toFixed(3);
  } else if (e.target.value === "finalAnswer") {
    if (Number(normal.value >= 0) && area.value === "<") {
      finalAnswer.value = Number(tables.value).toFixed(5);
    } else if (Number(normal.value >= 0) && area.value === ">") {
      finalAnswer.value = (1 - Number(tables.value)).toFixed(5);
    } else if (Number(normal.value < 0) && area.value === ">") {
      finalAnswer.value = Number(tables.value).toFixed(5);
    } else if (Number(normal.value < 0) && area.value === "<") {
      finalAnswer.value = (1 - Number(tables.value)).toFixed(5);
    }
    let difference = document.getElementById("difference");
    normalArr.push(Number(finalAnswer.value));
    console.log(normalArr);

    if (count == 1) {
      difference.innerHTML = `The difference is ${(
        normalArr[1] - normalArr[0]
      ).toFixed(4)}`;
    }
    count++;
  } else if (e.target.value === "descrete") {
    average.value = (
      x1.value * p1.value +
      x2.value * p2.value +
      x3.value * p3.value +
      x4.value * p4.value +
      x5.value * p5.value +
      x6.value * p6.value
    ).toFixed(2);
    variance.value = (
      Math.pow(x1.value - average.value, 2) * p1.value +
      Math.pow(x2.value - average.value, 2) * p2.value +
      Math.pow(x3.value - average.value, 2) * p3.value +
      Math.pow(x4.value - average.value, 2) * p4.value +
      Math.pow(x5.value - average.value, 2) * p5.value +
      Math.pow(x6.value - average.value, 2) * p6.value
    ).toFixed(2);
    deviation.value = Math.sqrt(variance.value).toFixed(2);
  } else if (e.target.innerHTML === "Favourable") {
    favourable.value = (
      (Number(positive.value) * Number(pP.value)) /
      (Number(positive.value) * Number(pP.value) +
        Number(negative.value) * Number(nP.value))
    ).toFixed(3);
  } else if (e.target.innerHTML === "Unfavourable") {
    unFavourable.value = (
      (Number(negative.value) * Number(nN.value)) /
      (Number(negative.value) * Number(nN.value) +
        Number(positive.value) * Number(pN.value))
    ).toFixed(3);
  } else if (e.target.value === "emv-btn") {
    emv1.value =
      Number(good1.value) * Number(probability1.value) +
      Number(fair1.value) * Number(probability2.value) +
      Number(bad1.value) * Number(probability3.value);

    emv2.value =
      Number(good2.value) * Number(probability1.value) +
      Number(fair2.value) * Number(probability2.value) +
      Number(bad2.value) * Number(probability3.value);

    emv3.value =
      Number(good3.value) * Number(probability1.value) +
      Number(fair3.value) * Number(probability2.value) +
      Number(bad3.value) * Number(probability3.value);

    if (Number(emv1.value) > Number(emv2.value)) {
      if (Number(emv1.value) > Number(emv3.value)) {
        console.log("option1");
        emvAnswer.value = Number(emv1.value);
      }
    } else if (Number(emv2.value) > Number(emv3.value)) {
      if (Number(emv2.value) > Number(emv1.value)) {
        console.log("option2");
        emvAnswer.value = Number(emv2.value);
      }
    } else if (Number(emv3.value) > Number(emv1.value)) {
      if (Number(emv3.value) > Number(emv2.value)) {
        console.log("option3");
        emvAnswer.value = Number(emv3.value);
      }
    } else {
      alert("option to be added");
    }
  } else if (e.target.value === "evwpi-btn") {
    evwpiAnswer.value =
      Number(evwpi1.value) * Number(probability1.value) +
      Number(evwpi2.value) * Number(probability2.value) +
      Number(evwpi3.value) * Number(probability3.value);
  } else if (e.target.value === "evpi") {
    evpiAnswer.value = Number(evwpiAnswer.value) - Number(emvAnswer.value);
  } else if (e.target.value === "2pma") {
    forecast3.value = (
      (Number(actual1.value) + Number(actual2.value)) /
      2
    ).toFixed(2);
    forecast4.value = (
      (Number(actual2.value) + Number(actual3.value)) /
      2
    ).toFixed(2);
    forecast5.value = (
      (Number(actual3.value) + Number(actual4.value)) /
      2
    ).toFixed(2);
    forecast6.value = (
      (Number(actual4.value) + Number(actual5.value)) /
      2
    ).toFixed(2);
    forecast7.value = (
      (Number(actual5.value) + Number(actual6.value)) /
      2
    ).toFixed(2);
    forecast8.value = (
      (Number(actual6.value) + Number(actual7.value)) /
      2
    ).toFixed(2);
    forecast9.value = (
      (Number(actual7.value) + Number(actual8.value)) /
      2
    ).toFixed(2);
    forecast10.value = (
      (Number(actual8.value) + Number(actual9.value)) /
      2
    ).toFixed(2);
    forecast11.value = (
      (Number(actual9.value) + Number(actual10.value)) /
      2
    ).toFixed(2);
    forecast12.value = (
      (Number(actual10.value) + Number(actual11.value)) /
      2
    ).toFixed(2);
  } else if (e.target.value === "3pma") {
    forecast4.value = (
      (Number(actual1.value) +
        (Number(actual2.value) + Number(actual3.value))) /
      3
    ).toFixed(2);
    forecast5.value = (
      (Number(actual2.value) +
        (Number(actual3.value) + Number(actual4.value))) /
      3
    ).toFixed(2);
    forecast6.value = (
      (Number(actual3.value) +
        (Number(actual4.value) + Number(actual5.value))) /
      3
    ).toFixed(2);
    forecast7.value = (
      (Number(actual4.value) +
        (Number(actual5.value) + Number(actual6.value))) /
      3
    ).toFixed(2);
    forecast8.value = (
      (Number(actual5.value) +
        (Number(actual6.value) + Number(actual7.value))) /
      3
    ).toFixed(2);
    forecast9.value = (
      (Number(actual6.value) +
        (Number(actual7.value) + Number(actual8.value))) /
      3
    ).toFixed(2);
    forecast10.value = (
      (Number(actual7.value) +
        (Number(actual8.value) + Number(actual9.value))) /
      3
    ).toFixed(2);
    forecast11.value = (
      (Number(actual8.value) +
        (Number(actual9.value) + Number(actual10.value))) /
      3
    ).toFixed(2);
    forecast12.value = (
      (Number(actual9.value) +
        (Number(actual10.value) + Number(actual11.value))) /
      3
    ).toFixed(2);
  } else if (e.target.value === "4pma") {
    forecast5.value = (
      (Number(actual1.value) +
        Number(actual2.value) +
        Number(actual3.value) +
        Number(actual4.value)) /
      4
    ).toFixed(2);
    forecast6.value = (
      (Number(actual2.value) +
        Number(actual3.value) +
        Number(actual4.value) +
        Number(actual5.value)) /
      4
    ).toFixed(2);
    forecast7.value = (
      (Number(actual3.value) +
        Number(actual4.value) +
        Number(actual5.value) +
        Number(actual6.value)) /
      4
    ).toFixed(2);
    forecast8.value = (
      (Number(actual4.value) +
        Number(actual5.value) +
        Number(actual6.value) +
        Number(actual7.value)) /
      4
    ).toFixed(2);
    forecast9.value = (
      (Number(actual5.value) +
        Number(actual6.value) +
        Number(actual7.value) +
        Number(actual8.value)) /
      4
    ).toFixed(2);
    forecast10.value = (
      (Number(actual6.value) +
        Number(actual7.value) +
        Number(actual8.value) +
        Number(actual9.value)) /
      4
    ).toFixed(2);
    forecast11.value = (
      (Number(actual7.value) +
        Number(actual8.value) +
        Number(actual9.value) +
        Number(actual10.value)) /
      4
    ).toFixed(2);
    forecast12.value = (
      (Number(actual8.value) +
        Number(actual9.value) +
        Number(actual10.value) +
        Number(actual11.value)) /
      4
    ).toFixed(2);
  } else if (e.target.value === "5pma") {
    forecast6.value = (
      (Number(actual1.value) +
        Number(actual2.value) +
        Number(actual3.value) +
        Number(actual4.value) +
        Number(actual5.value)) /
      5
    ).toFixed(2);
    forecast7.value = (
      (Number(actual2.value) +
        Number(actual3.value) +
        Number(actual4.value) +
        Number(actual5.value) +
        Number(actual6.value)) /
      5
    ).toFixed(2);
    forecast8.value = (
      (Number(actual3.value) +
        Number(actual4.value) +
        Number(actual5.value) +
        Number(actual6.value) +
        Number(actual7.value)) /
      5
    ).toFixed(2);
    forecast9.value = (
      (Number(actual4.value) +
        Number(actual5.value) +
        Number(actual6.value) +
        Number(actual7.value) +
        Number(actual8.value)) /
      5
    ).toFixed(2);
    forecast10.value = (
      (Number(actual4.value) +
        Number(actual6.value) +
        Number(actual7.value) +
        Number(actual8.value) +
        Number(actual9.value)) /
      5
    ).toFixed(2);
    forecast11.value = (
      (Number(actual6.value) +
        Number(actual7.value) +
        Number(actual8.value) +
        Number(actual9.value) +
        Number(actual10.value)) /
      5
    ).toFixed(2);
    forecast12.value = (
      (Number(actual7.value) +
        Number(actual8.value) +
        Number(actual9.value) +
        Number(actual10.value) +
        Number(actual11.value)) /
      5
    ).toFixed(2);
  } else if (e.target.value === "exponentialSmoothing") {
    if (alpha.value === "") {
      alert("Please enter alpha");
      document.getElementById("alpha").style.borderColor = "red";
    }
    if (Number(forecast1.value) === 0 && Number(alpha.value) > 0) {
      console.log(Number(alpha.value));
      console.log(Number(forecast1.value));
      alert("Naive method to be used!!!!");
      forecast1.value = Number(actual1.value);
    }
    forecast2.value = (
      Number(forecast1.value) +
      (Number(actual1.value) * Number(alpha.value) -
        Number(forecast1.value) * Number(alpha.value))
    ).toFixed(2);
    forecast3.value = (
      Number(forecast2.value) +
      (Number(actual2.value) * Number(alpha.value) -
        Number(forecast2.value) * Number(alpha.value))
    ).toFixed(2);
    forecast4.value = (
      Number(forecast3.value) +
      (Number(actual3.value) * Number(alpha.value) -
        Number(forecast3.value) * Number(alpha.value))
    ).toFixed(2);
    if (actual4.value === "") {
      forecast5.value = 0;
    } else {
      forecast5.value = (
        Number(forecast4.value) +
        (Number(actual4.value) * Number(alpha.value) -
          Number(forecast4.value) * Number(alpha.value))
      ).toFixed(2);
    }

    if (Number(actual5.value) === 0) {
      forecast6.value = 0;
    } else {
      forecast6.value = forecast6.value = (
        Number(forecast5.value) +
        (Number(actual5.value) * Number(alpha.value) -
          Number(forecast5.value) * Number(alpha.value))
      ).toFixed(2);
    }
    console.log(actual5.value);
    if (Number(actual6.value) === 0) {
      forecast7.value = 0;
    } else {
      forecast7.value = (
        Number(forecast6.value) +
        (Number(actual6.value) * Number(alpha.value) -
          Number(forecast6.value) * Number(alpha.value))
      ).toFixed(2);
    }
    console.log(actual6.value);
    if (Number(actual7.value) === 0) {
      console.log("i am");
      forecast8.value = 0;
    } else {
      forecast8.value = (
        Number(forecast7.value) +
        (Number(actual7.value) * Number(alpha.value) -
          Number(forecast7.value) * Number(alpha.value))
      ).toFixed(2);
    }
    console.log(actual7.value);
    if (Number(actual8.value) === 0) {
      forecast9.value = 0;
    } else {
      forecast9.value = (
        Number(forecast8.value) +
        (Number(actual8.value) * Number(alpha.value) -
          Number(forecast8.value) * Number(alpha.value))
      ).toFixed(2);
    }
    console.log(actual8.value);
    if (Number(actual9.value) === 0) {
      forecast10.value = 0;
    } else {
      forecast10.value = (
        Number(forecast9.value) +
        (Number(actual9.value) * Number(alpha.value) -
          Number(forecast9.value) * Number(alpha.value))
      ).toFixed(2);
    }
    console.log(actual9.value);
    if (Number(actual10.value) === 0) {
      forecast11.value = 0;
    } else {
      forecast11.value = (
        Number(forecast10.value) +
        (Number(actual10.value) * Number(alpha.value) -
          Number(forecast10.value) * Number(alpha.value))
      ).toFixed(2);
    }
    console.log(actual10.value);
    if (Number(actual11.value) === 0) {
      forecast12.value = 0;
    } else {
      forecast12.value = (
        Number(forecast11.value) +
        (Number(actual11.value) * Number(alpha.value) -
          Number(forecast11.value) * Number(alpha.value))
      ).toFixed(2);
    }
    console.log(actual11.value);
  } else if (e.target.value === "2mwa") {
    totalWeight.value = Number(weight1.value) + Number(weight2.value);
    forecast3.value = (
      (Number(actual1.value) * Number(weight1.value) +
        Number(actual2.value) * Number(weight2.value)) /
      Number(totalWeight.value)
    ).toFixed(2);
    forecast4.value = (
      (Number(actual2.value) * Number(weight1.value) +
        Number(actual3.value) * Number(weight2.value)) /
      Number(totalWeight.value)
    ).toFixed(2);
    forecast5.value = (
      (Number(actual3.value) * Number(weight1.value) +
        Number(actual4.value) * Number(weight2.value)) /
      Number(totalWeight.value)
    ).toFixed(2);

    forecast6.value = (
      (Number(actual4.value) * Number(weight1.value) +
        Number(actual5.value) * Number(weight2.value)) /
      Number(totalWeight.value)
    ).toFixed(2);

    forecast7.value = (
      (Number(actual5.value) * Number(weight1.value) +
        Number(actual6.value) * Number(weight2.value)) /
      Number(totalWeight.value)
    ).toFixed(2);

    forecast8.value = (
      (Number(actual6.value) * Number(weight1.value) +
        Number(actual7.value) * Number(weight2.value)) /
      Number(totalWeight.value)
    ).toFixed(2);
    forecast9.value = (
      (Number(actual7.value) * Number(weight1.value) +
        Number(actual8.value) * Number(weight2.value)) /
      Number(totalWeight.value)
    ).toFixed(2);
    forecast10.value = (
      (Number(actual8.value) * Number(weight1.value) +
        Number(actual9.value) * Number(weight2.value)) /
      Number(totalWeight.value)
    ).toFixed(2);

    forecast11.value = (
      (Number(actual9.value) * Number(weight1.value) +
        Number(actual10.value) * Number(weight2.value)) /
      Number(totalWeight.value)
    ).toFixed(2);
    forecast12.value = (
      (Number(actual10.value) * Number(weight1.value) +
        Number(actual11.value) * Number(weight2.value)) /
      Number(totalWeight.value)
    ).toFixed(2);
  } else if (e.target.value === "3mwa") {
    totalWeight.value =
      Number(weight1.value) + Number(weight2.value) + Number(weight3.value);
    forecast4.value = (
      (Number(actual1.value) * Number(weight1.value) +
        (Number(actual2.value) * Number(weight2.value) +
          Number(actual3.value) * Number(weight3.value))) /
      Number(totalWeight.value)
    ).toFixed(2);

    forecast5.value = (
      (Number(actual2.value) * Number(weight1.value) +
        (Number(actual3.value) * Number(weight2.value) +
          Number(actual4.value) * Number(weight3.value))) /
      Number(totalWeight.value)
    ).toFixed(2);
    forecast6.value = (
      (Number(actual3.value) * Number(weight1.value) +
        (Number(actual4.value) * Number(weight2.value) +
          Number(actual5.value) * Number(weight3.value))) /
      Number(totalWeight.value)
    ).toFixed(2);
    forecast7.value = (
      (Number(actual4.value) * Number(weight1.value) +
        (Number(actual5.value) * Number(weight2.value) +
          Number(actual6.value) * Number(weight3.value))) /
      Number(totalWeight.value)
    ).toFixed(2);
    forecast8.value = (
      (Number(actual5.value) * Number(weight1.value) +
        (Number(actual6.value) * Number(weight2.value) +
          Number(actual7.value) * Number(weight3.value))) /
      Number(totalWeight.value)
    ).toFixed(2);
    forecast9.value = (
      (Number(actual6.value) * Number(weight1.value) +
        (Number(actual7.value) * Number(weight2.value) +
          Number(actual8.value) * Number(weight3.value))) /
      Number(totalWeight.value)
    ).toFixed(2);
    forecast10.value = (
      (Number(actual7.value) * Number(weight1.value) +
        (Number(actual8.value) * Number(weight2.value) +
          Number(actual9.value) * Number(weight3.value))) /
      Number(totalWeight.value)
    ).toFixed(2);
    forecast11.value = (
      (Number(actual8.value) * Number(weight1.value) +
        (Number(actual9.value) * Number(weight2.value) +
          Number(actual10.value) * Number(weight3.value))) /
      Number(totalWeight.value)
    ).toFixed(2);
    forecast12.value = (
      (Number(actual9.value) * Number(weight1.value) +
        (Number(actual10.value) * Number(weight2.value) +
          Number(actual11.value) * Number(weight3.value))) /
      Number(totalWeight.value)
    ).toFixed(2);
  } else if (e.target.value === "mad") {
    if (num.value === "") {
      alert("Please enter number of errors");
      document.getElementById("num").style.borderColor = "red";
      mad.value = "";
      mse.value = "";
      mape.value = "";
    } else {
      if (Number(actual1.value) === 0 || Number(forecast1.value) === 0) {
        error1.value = 0;
      } else if (Number(actual1.value) > Number(forecast1.value)) {
        error1.value = (
          Number(actual1.value) - Number(forecast1.value)
        ).toFixed(2);
      } else {
        error1.value = (
          Number(forecast1.value) - Number(actual1.value)
        ).toFixed(2);
      }
      if (Number(actual2.value) === 0 || Number(forecast2.value) === 0) {
        error2.value = 0;
      } else if (Number(actual2.value) > Number(forecast2.value)) {
        error2.value = (
          Number(actual2.value) - Number(forecast2.value)
        ).toFixed(2);
      } else {
        error2.value = (
          Number(forecast2.value) - Number(actual2.value)
        ).toFixed(2);
      }

      if (Number(actual3.value) === 0 || Number(forecast3.value) === 0) {
        error3.value = 0;
      } else if (Number(actual3.value) > Number(forecast3.value)) {
        error3.value = (
          Number(actual3.value) - Number(forecast3.value)
        ).toFixed(2);
      } else {
        error3.value = (
          Number(forecast3.value) - Number(actual3.value)
        ).toFixed(2);
      }
      if (Number(actual4.value) === 0 || Number(forecast4.value) === 0) {
        error4.value = 0;
      } else if (Number(actual4.value) > Number(forecast4.value)) {
        error4.value = (
          Number(actual4.value) - Number(forecast4.value)
        ).toFixed(2);
      } else {
        error4.value = (
          Number(forecast4.value) - Number(actual4.value)
        ).toFixed(2);
      }
      if (Number(actual5.value) === 0 || Number(forecast5.value) === 0) {
        error5.value = 0;
      } else if (Number(actual5.value) > Number(forecast5.value)) {
        error5.value = (
          Number(actual5.value) - Number(forecast5.value)
        ).toFixed(2);
      } else {
        error5.value = (
          Number(forecast5.value) - Number(actual5.value)
        ).toFixed(2);
      }

      if (Number(actual6.value) === 0 || Number(forecast6.value) === 0) {
        error6.value = 0;
      } else if (Number(actual6.value) > Number(forecast6.value)) {
        error6.value = (
          Number(actual6.value) - Number(forecast6.value)
        ).toFixed(2);
      } else {
        error6.value = (
          Number(forecast6.value) - Number(actual6.value)
        ).toFixed(2);
      }
      if (Number(actual7.value) === 0 || Number(forecast7.value) === 0) {
        error7.value = 0;
      } else if (Number(actual7.value) > Number(forecast7.value)) {
        error7.value = (
          Number(actual7.value) - Number(forecast7.value)
        ).toFixed(2);
      } else {
        error7.value = (
          Number(forecast7.value) - Number(actual7.value)
        ).toFixed(2);
      }
      if (Number(actual8.value) === 0 || Number(forecast8.value) === 0) {
        error8.value = 0;
      } else if (Number(actual8.value) > Number(forecast8.value)) {
        error8.value = (
          Number(actual8.value) - Number(forecast8.value)
        ).toFixed(2);
      } else {
        error8.value = Number(forecast8.value - Number(actual8.value)).toFixed(
          2
        );
      }
      if (Number(actual9.value) === 0 || Number(forecast9.value) === 0) {
        error9.value = 0;
      } else if (Number(actual9.value) > Number(forecast9.value)) {
        error9.value = (
          Number(actual9.value) - Number(forecast9.value)
        ).toFixed(2);
      } else {
        error9.value = (
          Number(forecast9.value) - Number(actual9.value)
        ).toFixed(2);
      }
      if (Number(actual10.value) === 0 || Number(forecast10.value) === 0) {
        error10.value = 0;
      } else if (actual10.value > Number(forecast10.value)) {
        error10.value = (
          Number(actual10.value) - Number(forecast10.value)
        ).toFixed(2);
      } else {
        error10.value = Number(
          forecast10.value - Number(actual10.value)
        ).toFixed(2);
      }
      if (Number(actual11.value) === 0 || Number(forecast11.value) === 0) {
        error11.value = 0;
      } else if (Number(actual11.value) > Number(forecast11.value)) {
        error11.value = (
          Number(actual11.value) - Number(forecast11.value)
        ).toFixed(2);
      } else {
        error11.value = Number(
          forecast11.value - Number(actual11.value)
        ).toFixed(2);
      }
      if (Number(actual12.value) === 0 || Number(forecast12.value) === 0) {
        error12.value = 0;
      } else if (Number(actual12.value) > Number(forecast12.value)) {
        error12.value = (
          Number(actual12.value) - Number(forecast12.value)
        ).toFixed(2);
      } else {
        error12.value = Number(
          forecast12.value - Number(actual12.value)
        ).toFixed(2);
      }

      mad.value = (
        (Number(error1.value) +
          Number(error2.value) +
          Number(error3.value) +
          Number(error4.value) +
          Number(error5.value) +
          Number(error6.value) +
          Number(error7.value) +
          Number(error8.value) +
          Number(error9.value) +
          Number(error10.value) +
          Number(error11.value) +
          Number(error12.value)) /
        Number(num.value)
      ).toFixed(2);

      mse.value = (
        (Math.pow(Number(error1.value), 2) +
          Math.pow(Number(error2.value), 2) +
          Math.pow(Number(error3.value), 2) +
          Math.pow(Number(error4.value), 2) +
          Math.pow(Number(error5.value), 2) +
          Math.pow(Number(error6.value), 2) +
          Math.pow(Number(error7.value), 2) +
          Math.pow(Number(error8.value), 2) +
          Math.pow(Number(error9.value), 2) +
          Math.pow(Number(error10.value), 2) +
          Math.pow(Number(error11.value), 2) +
          Math.pow(Number(error12.value), 2)) /
        Number(num.value)
      ).toFixed(2);
      let mape1 = 0;
      if (Number(error1.value) === 0 || Number(actual1.value) === 0) {
        mape1 = 0;
      } else {
        mape1 = Number(error1.value) / Number(actual1.value);
      }
      console.log(typeof mape1, mape1);
      let mape2 = 0;
      if (Number(error2.value) === 0 || Number(actual2.value) === 0) {
        mape2 = 0;
      } else {
        mape2 = Number(error2.value) / Number(actual2.value);
      }
      console.log(typeof mape2, mape2);
      let mape3 = 0;
      if (Number(error3.value) === 0 || Number(actual3.value) === 0) {
        mape3 = 0;
      } else {
        mape3 = Number(error3.value) / Number(actual3.value);
      }
      console.log(typeof mape3, mape3);
      let mape4 = 0;
      if (Number(error4.value) === 0 || Number(actual4.value) === 0) {
        mape4 = 0;
      } else {
        mape4 = Number(error4.value) / Number(actual4.value);
      }
      console.log(typeof mape4, mape4);
      let mape5 = 0;
      if (Number(error5.value) === 0 || Number(actual5.value) === 0) {
        mape5 = 0;
      } else {
        mape5 = Number(error5.value) / Number(actual5.value);
      }
      console.log(typeof mape5, mape5);
      Number(error5.value) / Number(actual5.value);
      let mape6 = 0;
      if (Number(error6.value) === 0 || Number(actual6.value) === 0) {
        mape6 = 0;
      } else {
        mape6 = Number(error6.value) / Number(actual6.value);
      }
      console.log(typeof mape6, mape6);
      let mape7 = 0;
      if (Number(error7.value) === 0 || Number(actual7.value) === 0) {
        mape7 = 0;
      } else {
        mape7 = Number(error7.value) / Number(actual7.value);
      }
      console.log(typeof mape7, mape7);
      let mape8 = 0;
      if (Number(error8.value) === 0 || Number(actual8.value) === 0) {
        mape8 = 0;
      } else {
        mape8 = Number(error8.value) / Number(actual8.value);
      }
      console.log(typeof mape8, mape8);
      let mape9 = 0;
      if (Number(error9.value) === 0 || Number(actual9.value) === 0) {
        mape9 = 0;
      } else {
        mape9 = Number(error9.value) / Number(actual9.value);
      }
      console.log(typeof mape9, mape9);
      let mape10 = 0;
      if (Number(error10.value) === 0 || Number(actual10.value) === 0) {
        mape10 = 0;
      } else {
        mape10 = Number(error10.value) / Number(actual10.value);
      }
      console.log(typeof mape10, mape10);
      let mape11 = 0;
      if (Number(error11.value) === 0 || Number(actual11.value) === 0) {
        mape11 = 0;
      } else {
        mape11 = Number(error11.value) / Number(actual11.value);
      }
      console.log(typeof mape11, mape11);
      let mape12 = 0;
      if (Number(error11.value) === 0 || Number(actual11.value) === 0) {
        mape12 = 0;
      } else {
        mape12 = Number(error12.value) / Number(actual12.value);
      }
      console.log(typeof mape12, mape12);
      mape.value = (
        (mape1 +
          mape2 +
          mape3 +
          mape4 +
          mape5 +
          mape6 +
          mape7 +
          mape8 +
          mape9 +
          mape10 +
          mape11 +
          mape12) /
        Number(num.value)
      ).toFixed(2);
    }
  } else if (e.target.value === "eoq") {
    if (
      annualDemand.value === "" ||
      orderingCosts.value === "" ||
      carryingCosts.value === ""
    ) {
      alert("Please enter all three variables");
      annualDemand.value = "";
      orderingCosts.value = "";
      carryingCosts.value = "";
    } else {
      eoq.value = Math.sqrt(
        (2 * Number(annualDemand.value) * Number(orderingCosts.value)) /
          Number(carryingCosts.value)
      ).toFixed(2);

      averageInventory.value = (Number(eoq.value) / 2).toFixed(2);

      ordersPerYear.value = (
        Number(annualDemand.value) / Number(eoq.value)
      ).toFixed(2);

      annualOrderingCosts.value = (
        Number(ordersPerYear.value) * Number(orderingCosts.value)
      ).toFixed(2);

      annualCarryingCosts.value = (
        Number(averageInventory.value) * Number(carryingCosts.value)
      ).toFixed(2);
    }
  } else if (e.target.value === "projectManagement") {
    evPM1.value =
      (Number(a1.value) + 4 * Number(m1.value) + Number(b1.value)) / 6;
    varPM1.value = (
      Math.pow(Number(b1.value) - Number(a1.value), 2) / 36
    ).toFixed(2);

    stdPM1.value = Math.sqrt(Number(varPM1.value)).toFixed(2);

    evPM2.value =
      (Number(a2.value) + 4 * Number(m2.value) + Number(b2.value)) / 6;
    varPM2.value = (
      Math.pow(Number(b2.value) - Number(a2.value), 2) / 36
    ).toFixed(2);

    stdPM2.value = Math.sqrt(Number(varPM2.value)).toFixed(2);

    evPM3.value =
      (Number(a3.value) + 4 * Number(m3.value) + Number(b3.value)) / 6;
    varPM3.value = (
      Math.pow(Number(b3.value) - Number(a3.value), 2) / 36
    ).toFixed(2);

    stdPM3.value = Math.sqrt(Number(varPM3.value)).toFixed(2);

    evPM3.value =
      (Number(a3.value) + 4 * Number(m3.value) + Number(b3.value)) / 6;
    varPM3.value = (
      Math.pow(Number(b3.value) - Number(a3.value), 2) / 36
    ).toFixed(2);

    stdPM3.value = Math.sqrt(Number(varPM3.value)).toFixed(2);
    evPM4.value =
      (Number(a4.value) + 4 * Number(m4.value) + Number(b4.value)) / 6;

    varPM4.value = (
      Math.pow(Number(b4.value) - Number(a4.value), 2) / 36
    ).toFixed(2);

    stdPM4.value = Math.sqrt(Number(varPM4.value)).toFixed(2);

    evPM5.value =
      (Number(a5.value) + 4 * Number(m5.value) + Number(b5.value)) / 6;
    varPM5.value = (
      Math.pow(Number(b5.value) - Number(a5.value), 2) / 36
    ).toFixed(2);

    stdPM5.value = Math.sqrt(Number(varPM5.value)).toFixed(2);

    evPM6.value =
      (Number(a6.value) + 4 * Number(m6.value) + Number(b6.value)) / 6;
    varPM6.value = (
      Math.pow(Number(b6.value) - Number(a6.value), 2) / 36
    ).toFixed(2);

    stdPM6.value = Math.sqrt(Number(varPM6.value)).toFixed(2);

    evPM7.value =
      (Number(a7.value) + 4 * Number(m7.value) + Number(b7.value)) / 6;

    varPM7.value = (
      Math.pow(Number(b7.value) - Number(a7.value), 2) / 36
    ).toFixed(2);

    stdPM7.value = Math.sqrt(Number(varPM7.value)).toFixed(2);

    evPM8.value =
      (Number(a8.value) + 4 * Number(m8.value) + Number(b8.value)) / 6;

    varPM8.value = (
      Math.pow(Number(b8.value) - Number(a8.value), 2) / 36
    ).toFixed(2);

    stdPM8.value = Math.sqrt(Number(varPM7.value)).toFixed(2);

    evPM9.value =
      (Number(a9.value) + 4 * Number(m9.value) + Number(b9.value)) / 6;

    varPM9.value = (
      Math.pow(Number(b9.value) - Number(a9.value), 2) / 36
    ).toFixed(2);

    stdPM9.value = Math.sqrt(Number(varPM9.value)).toFixed(2);

    evPM10.value =
      (Number(a10.value) + 4 * Number(m10.value) + Number(b10.value)) / 6;

    varPM10.value = (
      Math.pow(Number(b10.value) - Number(a10.value), 2) / 36
    ).toFixed(2);

    stdPM10.value = Math.sqrt(Number(varPM10.value)).toFixed(2);

    evPM11.value =
      (Number(a11.value) + 4 * Number(m11.value) + Number(b11.value)) / 6;

    varPM11.value = (
      Math.pow(Number(b11.value) - Number(a11.value), 2) / 36
    ).toFixed(2);

    stdPM11.value = Math.sqrt(Number(varPM11.value)).toFixed(2);

    evPM12.value =
      (Number(a12.value) + 4 * Number(m12.value) + Number(b12.value)) / 6;

    varPM12.value = (
      Math.pow(Number(b12.value) - Number(a12.value), 2) / 36
    ).toFixed(2);

    stdPM12.value = Math.sqrt(Number(varPM12.value)).toFixed(2);
  }
}
