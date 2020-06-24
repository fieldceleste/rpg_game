import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { dragon, giant, pixie, elf, changePoints, } from './rpg.js';

$(document).ready(function () {

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.

  // Dragon Abilities
  $('#fireBreath').click(function () {
    const dragonTarget = $('input[name="dragonTarget"]:checked').val();
    if (dragonTarget === "elf")
    {
      const newElf = elf(changePoints(-5));
      $('#elfPoints').text(newElf.points);
    }
    else 
    {
      const newPixie = pixie(changePoints(-5));
      $('#pixiePoints').text(newPixie.points);
    }
    const newState = dragon(changePoints(10));
    $('#dragonPoints').text(newState.points);
  });


  $('#slash').click(function () {
    const newState = dragon(changePoints(5));
    $('#dragonPoints').text(newState.points);
  });
  $('#bite').click(function () {
    const newState = dragon(changePoints(3));
    $('#dragonPoints').text(newState.points);
  });

  // Elf Abilities

  $('#kick').click(function () {
    const newState = elf(changePoints(3));
    $('#elfPoints').text(newState.points);
  });
  $('#punch').click(function () {
    const elfTarget = $('input[name="elfTarget"]:checked').val();
    if (elfTarget === "dragon")
    {
      const newDragon = dragon(changePoints(-5));
      $('#dragonPoints').text(newDragon.points);
    }
    else 
    {
      const newGiant = giant(changePoints(-5));
      $('#giantPoints').text(newGiant.points);
    }
    const newState = elf(changePoints(5));
    $('#elfPoints').text(newState.points);
  });
  $('#arrow').click(function () {
    const newState = elf(changePoints(10));
    $('#elfPoints').text(newState.points);
  });

// Giant Abilities
  
  $('#stomp').click(function () {
    const giantTarget = $('input[name="giantTarget"]:checked').val();
    if (giantTarget === "elf")
    {
      const newElf = elf(changePoints(-10));
      $("#elfPoints").text(newElf.points);
    }
    else
    {
      const newPixie = pixie(changePoints(-10));
      $("#pixiePoints").text(newPixie.points);
    }
    const newState = giant(changePoints(10));
    $('#giantPoints').text(newState.points);
  });

  $('#throwBoulder').click(function () {
    const newState = giant(changePoints(5));
    $('#giantPoints').text(newState.points);
  });
  $('#feFiFoFum').click(function () {
    const newState = giant(changePoints(3));
    $('#giantPoints').text(newState.points);
  });

// Pixie Abilities

$('#mischief').click(function () {

  const pixieTarget = $('input[name="pixieTarget"]:checked').val();
  if (pixieTarget === "dragon")
  {
    const newDragon = dragon(changePoints(-5));
    $('#dragonPoints').text(newDragon.points);
  }
  else 
  {
    const newGiant = giant(changePoints(-5));
    $('#giantPoints').text(newGiant.points);
  }
  
  const newState = pixie(changePoints(10));
  $('#pixiePoints').text(newState.points);
});
  
  $('#dance').click(function () {
    const newState = pixie(changePoints(3));
    $('#pixiePoints').text(newState.points);
  });
  $('#pixieDust').click(function () {
    const newState = pixie(changePoints(5));
    $('#pixiePoints').text(newState.points);
  });
  
});