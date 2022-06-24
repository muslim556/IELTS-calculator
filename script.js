const submit = document.querySelector("#submit");
const score = document.querySelector("#score");
const speaking = document.querySelector("#speaking");
const writing = document.querySelector("#writing");
const listening = document.querySelector("#listening");
const reading = document.querySelector("#reading");
const listening_inp = document.querySelector("#listening_inp");
const reading_inp = document.querySelector("#reading_inp");
const submit2 = document.querySelector("#submit2");
const listeningscore = document.querySelector("#listening-score");
const readingscore = document.querySelector("#reading-score");
const ism = document.querySelector("#name");
const surname = document.querySelector("#surname");

const data = [];

submit.addEventListener("click", (e) => {
  if (speaking.value && writing.value && listening.value && reading.value > 9) {
    alert("You can not get more than 9 :(");
    ClearInpValue();
  } else {
    e.preventDefault();
    let s = +speaking.value;
    let w = +writing.value;
    let l = +listening.value;
    let r = +reading.value;
    let total = Math.round((s + w + l + r) / 4);
    score.innerHTML = total;
    const IELTSdata = [...data];
    IELTSdata.push({
      id: new Date().getTime(),
      name: ism.value,
      surname: surname.value,
      overall: Math.round((s + w + l + r) / 4),
      time: new Date().toLocaleTimeString(),
    });
    localStorage.setItem("IELTS_score", JSON.stringify(IELTSdata));
    ClearInpValue();
    alert("Your IELTS score is " + total + " :)");
  }
});

function ClearInpValue() {
  speaking.value = "";
  writing.value = "";
  listening.value = "";
  reading.value = "";
  ism.value = "";
  surname.value = "";
}

submit2.addEventListener("click", (e) => {
  e.preventDefault();
});

//  > ===  kattta
// < === kichik

// function sendlocalstorage() {
//   const data = JSON.parse(localStorage.getItem("IELTS_score")) || [];
//   const IELTSdata = [...data];
//   IELTSdata.push({
//     id: data.lenght++,
//     name: ism.value,
//     surname: surname.value,
//     overall: total.value,
//     time: new Date().toLocaleTimeString(),
//   });
//   localStorage.setItem("IELTS_score", JSON.stringify(FormData));
//   cleClearInpValue();
// }
