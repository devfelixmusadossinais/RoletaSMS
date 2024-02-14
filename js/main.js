$(document).ready(function () {
  $('.button').on('click', function (e) {
    document.getElementById("wheel").play();
    $('.wheel__wheel').addClass('last-spin');
    spinning = true;
    setTimeout(SpinCompleted, 5000);
  });
  function SpinCompleted() {
    spinning = false;
    lastSpin = true;
    $('.popup').removeClass('active');
    $('.popup.last-spin').addClass('active');
    document.getElementById("fanfare2").play();
  };
});

