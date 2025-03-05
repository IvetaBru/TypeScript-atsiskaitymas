/* ------------------------------ TASK 8 ----------------------------
Parašykite TS kodą, kuris leis vartotojui įvesti ilgį metrais ir pamatyti jo pateikto ilgio konvertavimą į:
1. Centimetrus (cm) | Formulė: cm = m * 100
2. Colius (in) | Formulė: in = m * 39.37
3. Pėdas (ft) | Formulė: ft = m * 3.281
4. Mylias (mi) | Formulė: mi = m / 1609
5. Jardus (yd) | Formulė: yd = m * 1.094

Pastaba: Atvaizdavimas turi būti matomas su kiekviena įvestimi ir pateikiamas <div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const lengthConverter = (e):void => {
    e.preventDefault();

    const meterInput = document.querySelector('#meter') as HTMLInputElement;
    const m = parseFloat(meterInput.value);

    const cm = m * 100;
    const inches = m * 39.37;
    const ft = m * 3.281;
    const mi = m / 1609;
    const yd = m * 1.094;

    const output = document.querySelector('#output') as HTMLDivElement;
    output.innerHTML = '';

    const centimetrai = document.createElement('p');
    centimetrai.textContent = `Ilgis centimetrais: ${cm}`;

    const coliai = document.createElement('p');
    coliai.textContent = `Ilgis coliais: ${inches}`;

    const pedos = document.createElement('p');
    pedos.textContent = `Ilgis pėdomis: ${ft}`;

    const mylios = document.createElement('p');
    mylios.textContent = `Ilgis myliomis: ${mi}`;

    const jardai = document.createElement('p');
    jardai.textContent = `Ilgis jardais: ${yd}`;

    output.append(centimetrai,coliai,pedos,mylios,jardai);
}
document
.querySelector('#submit-btn')
?.addEventListener('click', lengthConverter);