const navButton = document.querySelector(".nav-button");
const navOpen = document.querySelector(".nav-open");

// const tween = TweenLite.to(object, time, {animationProperties});
// const tween = TweenLite.to(".cover", 1, {
//   width: "40%"
// });
const tl = new TimelineLite({ paused: true, reversed: true });

tl.to(".cover", 1, {
  width: "60%",
  ease: Power2.easeOut
})
  .to(
    "nav",
    1,
    {
      height: "100%",
      ease: Power2.easeOut
    },
    "-=0.5" // start animation half-way through the first one
  )
  .fromTo(
    ".nav-open",
    0.5,
    {
      opacity: "0",
      x: "50",
      ease: Power2.easeOut
    },
    {
      opacity: "1",
      x: "0",
      onComplete: function() {
        navOpen.style.pointerEvents = "auto";
      }
    }
  );

navButton.addEventListener("click", () => {
  if (tl.isActive()) {
    // Used to prevent messing up the animation during multiple clicks
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
  toggleTween(tl);
});

function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}
