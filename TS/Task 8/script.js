/* ------------------------------ TASK 8 ----------------------------
Parašykite TS kodą, kuris leis vartotojui įvesti ilgį metrais ir pamatyti jo pateikto ilgio konvertavimą į:
1. Centimetrus (cm) | Formulė: cm = m * 100
2. Colius (in) | Formulė: in = m * 39.37
3. Pėdas (ft) | Formulė: ft = m * 3.281
4. Mylias (mi) | Formulė: mi = m / 1609
5. Jardus (yd) | Formulė: yd = m * 1.094

Pastaba: Atvaizdavimas turi būti matomas su kiekviena įvestimi ir pateikiamas <div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
var _a;
var lengthConverter = function (e) {
    e.preventDefault();
    var meterInput = document.querySelector('#meter');
    var m = parseFloat(meterInput.value);
    var cm = m * 100;
    var inches = m * 39.37;
    var ft = m * 3.281;
    var mi = m / 1609;
    var yd = m * 1.094;
    var output = document.querySelector('#output');
    output.innerHTML = '';
    var centimetrai = document.createElement('p');
    centimetrai.textContent = "Ilgis centimetrais: ".concat(cm);
    var coliai = document.createElement('p');
    coliai.textContent = "Ilgis coliais: ".concat(inches);
    var pedos = document.createElement('p');
    pedos.textContent = "Ilgis p\u0117domis: ".concat(ft);
    var mylios = document.createElement('p');
    mylios.textContent = "Ilgis myliomis: ".concat(mi);
    var jardai = document.createElement('p');
    jardai.textContent = "Ilgis jardais: ".concat(yd);
    output.append(centimetrai, coliai, pedos, mylios, jardai);
};
(_a = document
    .querySelector('#submit-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', lengthConverter);
