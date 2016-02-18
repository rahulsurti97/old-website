TweenMax.from(".name", 1.5, {opacity:0, delay: 0.5});
TweenMax.from(".navbar", 1, {opacity:0, delay:0.5});
TweenMax.staggerFrom(".links", 0.5, {y:100, delay:0.5}, 0.25);

// function main() {
//   $(".navbar a").hover(over(), out());
//   function over() {TweenMax.to(this, 0.5, {color: "blue"});}
//   function out()  {TweenMax.to(this, 0.5, {color: "yellow"});}
// }
//
// $(document).ready(main());
