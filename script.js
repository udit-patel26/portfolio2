const slider = document.querySelectorAll(".slide");
console.log(slider);

const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");
let curr = 0;

// slider.forEach((e, i) => {
//   e.style.transform = `translateX(${i * 100}%)`;
//   console.log(i);
// });
const sliding = function(sli){
    slider.forEach((e, i) => {
        e.style.transform = `translateX(${(i - sli) * 100}%)`;
        // console.log(i)
      });
}
sliding(0)

btnRight.addEventListener("click", function (e) {
  if (curr === slider.length - 1) {
    curr = 0;
  } else {
    curr++;
  }
  sliding(curr)

 
//   console.log(i)
});

btnLeft.addEventListener("click", function (e) {
  if (curr === 0) {
    curr = slider.length - 1;
  } else {
    curr--;
  }

sliding(curr)
});
