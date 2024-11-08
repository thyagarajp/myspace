import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const rows = [...block.children];
  console.log('bloack123', block.children);
  [...block.children].forEach((row, r) => {
    if (r === 0) {
      const nextBtn = document.createElement('button');
      nextBtn.classList.add('btn');
      nextBtn.classList.add('btn-next');
      const node = document.createTextNode(row.textContent);
      nextBtn.append(node);
      row.replaceWith(nextBtn);
    } else if (r === rows.length - 1) {
      const prevBtn = document.createElement('button');
      prevBtn.classList.add('btn');
      prevBtn.classList.add('btn-prev');
      const node = document.createTextNode(row.textContent);
      prevBtn.append(node);
      row.replaceWith(prevBtn);
    } else {
      row.classList.add('slide');
      [...row.children].forEach((col, c) => {
        console.log('ffff=>', row, r, col, c);
        if (c === 1) {
          col.classList.add('slide-text');
        }
      })
    }
  });
  const slides = document.querySelectorAll('.slide');

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}%)`
  });
  // select next slide button
  const nextSlide = document.querySelector(".btn-next");

  // current slide counter
  let curSlide = 0;
  // maximum number of slides
  let maxSlide = slides.length - 1;

  // add event listener and navigation functionality
  nextSlide.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    //   move slide by -100%
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  });

  // select next slide button
  const prevSlide = document.querySelector(".btn-prev");

  // add event listener and navigation functionality
  prevSlide.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }

    //   move slide by 100%
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  });

}
