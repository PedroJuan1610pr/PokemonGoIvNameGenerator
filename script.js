const simbolos = ["⓪","①","②","③","④","⑤","⑥","⑦","⑧","⑨","⑩","⑪","⑫","⑬","⑭","⑮"];
const inputs = [n1,n2,n3];

inputs.forEach((inp,i)=>{
  inp.addEventListener("input",e=>handleInput(e,i));
  inp.addEventListener("keydown",e=>backspaceNav(e,i));
});

function valor(v){ const n=parseInt(v); return isNaN(n)||n<0||n>15?0:n; }
function convertir(v){ return simbolos[valor(v)]; }

function handleInput(e,i){
  const inp=e.target;
  inp.value=inp.value.replace(/\D/g,"");
  const n=parseInt(inp.value);

  inp.classList.remove("error");
  error.classList.remove("show");

  if(!isNaN(n)&&n>15){
    inp.classList.add("error");
    error.textContent="Máximo 15";
    error.classList.add("show");
    updateButtons(true);
    return;
  }

  if(inp.value.length===2 && inputs[i+1]) inputs[i+1].focus();
  actualizarVista();
}

function backspaceNav(e,i){
  if(e.key==="Backspace" && e.target.value==="" && inputs[i-1]){
    inputs[i-1].focus();
  }
}

function actualizarVista(){
  preview.innerText=inputs.map(i=>convertir(i.value)).join("");
  preview.classList.add("bump");
  setTimeout(()=>preview.classList.remove("bump"),150);

  const suma=inputs.reduce((a,i)=>a+valor(i.value),0);
  const pct=Math.round(suma/45*100);

  percent.innerText=pct+"%";
  document.querySelector(".progress div").style.width=pct+"%";
  updateButtons(false);
}

function updateButtons(disabled){
  copyNums.disabled=copyAll.disabled=disabled;
}

function copiar(txt){
  navigator.clipboard.writeText(txt);
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),1200);
}

copyNums.onclick=()=>copiar(preview.innerText);
copyAll.onclick=()=>copiar(preview.innerText+" "+percent.innerText);

clear.onclick=()=>{
  inputs.forEach(i=>i.value="");
  preview.innerText="⓪⓪⓪";
  percent.innerText="0%";
  document.querySelector(".progress div").style.width="0%";
  error.classList.remove("show");
  updateButtons(false);
  n1.focus();
};

// Slider functionality
const sliders = [slider1, slider2, slider3];
const sliderVals = [sliderVal1, sliderVal2, sliderVal3];
const sliderFills = [sliderFill1, sliderFill2, sliderFill3];

function updateSliderFill(index, value) {
  const percentage = (value / 15) * 100;
  sliderFills[index].style.width = percentage + '%';
  sliderVals[index].innerText = value;
  
  // Change color to red when value is 15
  if (value == 15) {
    sliderFills[index].classList.add('max-value');
  } else {
    sliderFills[index].classList.remove('max-value');
  }
  
  // Update slider title with current values
  updateSliderTitle();
}

function updateSliderTitle() {
  const val1 = parseInt(sliders[0].value) || 0;
  const val2 = parseInt(sliders[1].value) || 0;
  const val3 = parseInt(sliders[2].value) || 0;
  const suma = val1 + val2 + val3;
  const pct = Math.round(suma / 45 * 100);
  
  const sym1 = simbolos[val1];
  const sym2 = simbolos[val2];
  const sym3 = simbolos[val3];
  
  sliderTitle.innerText = sym1 + sym2 + sym3 + ' ' + pct + '%';
}

sliders.forEach((slider, i) => {
  slider.addEventListener("input", e => {
    updateSliderFill(i, e.target.value);
  });
});

sliderBtn.onclick = () => {
  // Load current values into sliders
  inputs.forEach((inp, i) => {
    const val = valor(inp.value);
    sliders[i].value = val;
    updateSliderFill(i, val);
  });
  updateSliderTitle();
  sliderMenu.classList.add("show");
};

sliderCancel.onclick = () => {
  sliderMenu.classList.remove("show");
};

sliderApply.onclick = () => {
  sliders.forEach((slider, i) => {
    inputs[i].value = slider.value;
  });
  actualizarVista();
  sliderMenu.classList.remove("show");
};

// Close slider menu when clicking outside
sliderMenu.onclick = (e) => {
  if (e.target === sliderMenu) {
    sliderMenu.classList.remove("show");
  }
};
