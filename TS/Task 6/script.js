/* ------------------------------ TASK 6 ---------------------------------------------------------------
Sukurkite klasę "Potion", kuri sukuria objektus su 2 savybėm ir 1 metodu:

Savybės:
  color(masyvas tryjų spalvų 0-255), volume
Metodas:
  mix(potion) - Pateikiamas kitas eliksyras ir jiedu sumaišomi į vieną naują eliksyrą, kuris yra grąžinamas kaip naujas Klasės objektas.

Pvz.:
  felix_felicis     =  Potion([255, 255, 255],  7)
  polyjuice         =  Potion([ 51, 102,  51], 12)
  new_potion        =  felix_felicis.mix(polyjuice)

  new_potion.color  =  [127, 159, 127]
  new_potion.volume =  19
------------------------------------------------------------------------------------------------------ */
var Potion = /** @class */ (function () {
    function Potion(color, volume) {
        this.color = color,
            this.volume = volume;
    }
    Potion.prototype.mix = function (potion) {
        var _this = this;
        var mixedVolume = this.volume + potion.volume;
        var mixedColor = this.color.map(function (x, i) {
            var mixed = ((x * _this.volume) + (potion.color[i] * potion.volume)) / mixedVolume;
            return Math.ceil(mixed);
        });
        return new Potion(mixedColor, mixedVolume);
    };
    return Potion;
}());
var felix_felicis = new Potion([255, 255, 255], 7);
var polyjuice = new Potion([51, 102, 51], 12);
var new_potion = felix_felicis.mix(polyjuice);
console.log(new_potion.color);
console.log(new_potion.volume);
