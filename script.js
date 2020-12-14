var audio_1 = new Audio ("baraban.mp3");
var audio_2 = new Audio ("buben.mp3");
var audio_3 = new Audio ("fagot.mp3");
var audio_4 = new Audio ("gitara.mp3");
var audio_5 = new Audio ("piano.mp3");
var audio_6 = new Audio ("rubel.mp3");
var audio_7 = new Audio ("treshetky.mp3");
var keypressed = "";

function respond(i)
{
  document.querySelectorAll(".img")[i].classList.add("click");
}

function respondback(i)
{
  document.querySelectorAll(".img")[i].classList.remove("click");
}

document.querySelectorAll(".img")[0].addEventListener("click", function ()
{
  respond(0)
  audio_1.play ();
  window.setTimeout(function() { respondback(0) }, 100);
}
);
document.querySelectorAll(".img")[1].addEventListener("click", function ()
{
  respond(1);
  audio_2.play ();
  window.setTimeout(function() { respondback(1) }, 100);
}
);
document.querySelectorAll(".img")[2].addEventListener("click", function ()
{
  respond(2);
  audio_3.play ();
  window.setTimeout(function() { respondback(2) }, 100);
}
);
document.querySelectorAll(".img")[3].addEventListener("click", function ()
{
  respond(3);
  audio_4.play ();
  window.setTimeout(function() { respondback(3) }, 100);
}
);
document.querySelectorAll(".img")[4].addEventListener("click", function ()
{
  respond(4);
  audio_5.play ();
  window.setTimeout(function() { respondback(4) }, 100);
}
);
document.querySelectorAll(".img")[5].addEventListener("click", function ()
{
  respond(5);
  audio_6.play ();
  window.setTimeout(function() { respondback(5) }, 100);
}
);
document.querySelectorAll(".img")[6].addEventListener("click", function ()
{
  respond(6);
  audio_7.play ();
  window.setTimeout(function() { respondback(6) }, 100);
}
);


document.addEventListener("keydown", function ()
{
  switch(event.key)
  {
    case "1" :
      respond(0);
      audio_1.play ();
      window.setTimeout(function() { respondback(0) }, 100);
    break;

    case "2" :
      respond(1);
      audio_2.play ();
      window.setTimeout(function() { respondback(1) }, 100);
    break;

    case "3" :
      respond(2);
      audio_3.play ();
      window.setTimeout(function() { respondback(2) }, 100);
    break;

    case "4" :
      respond(3);
      audio_4.play ();
      window.setTimeout(function() { respondback(3) }, 100);
    break;

    case "5" :
      respond(4);
      audio_5.play ();
      window.setTimeout(function() { respondback(4) }, 100);
    break;

    case "6" :
      respond(5);
      audio_6.play ();
      window.setTimeout(function() { respondback(5) }, 100);
    break;

    case "7" :
      respond(6);
      audio_7.play ();
      window.setTimeout(function() { respondback(6) }, 100);
    break;
  }

}
);
