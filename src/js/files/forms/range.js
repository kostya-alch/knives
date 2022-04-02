// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
   const rangeItems = document.querySelectorAll('[data-range]');
   if (rangeItems.length) {
      rangeItems.forEach((rangeItem) => {
         const fromValue = rangeItem.querySelector('[data-range-from]');
         const toValue = rangeItem.querySelector('[data-range-to]');
         const itemValue = rangeItem.querySelector('[data-range-item]');
         noUiSlider.create(itemValue, {
            start: [Number(fromValue.value), Number(toValue.value)], // [0,200000]
            connect: true,
            tooltips: [true, true],
            range: {
               min: [Number(fromValue.dataset.rangeFrom)],
               max: [Number(toValue.dataset.rangeTo)],
            },
         });
      });
   }
}
rangeInit();
