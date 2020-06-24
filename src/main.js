import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { dragon, giant, pixie, elf, changePoints, } from './rpg.js';


$(document).ready(function () {

  const updateDom = () => {
    const newDragon = dragon(changePoints(0));
    $('#dragonPoints').text(newDragon.points);
    $('#dragonLevel').text(newDragon.level);
    if (newDragon.level >= 5) {
      return $("#dragonResult").text("You win!");
    } else if (newDragon.level < 0) {
      return $("#dragonResult").text("You looooose");
    }
    const newGiant = giant(changePoints(0));
    $('#giantPoints').text(newGiant.points);
    $('#giantLevel').text(newGiant.level);
    if (newGiant.level >= 5) {
      return $("#giantResult").text("You win!");
    } else if (newGiant.level < 0) {
      return $("#giantResult").text("You looooose");
    }
    const newPixie = pixie(changePoints(0));
    $('#pixiePoints').text(newPixie.points);
    $('#pixieLevel').text(newPixie.level);
    if (newPixie.level >= 5) {
      return $("#pixieResult").text("You win!");
    } else if (newPixie.level < 0) {
      return $("#pixieResult").text("You looooose");
    }
    const newElf = elf(changePoints(0));
    $('#elfPoints').text(newElf.points);
    $('#elfLevel').text(newElf.level);
    if (newElf.level >= 5) {
      return $("#elfResult").text("You win!");
    } else if (newElf.level < 0) {
      return $("#elfResult").text("You looooose");
    }
  }

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.

  // Dragon Abilities
  $('#fireBreath').click(function () {
    const dragonTarget = $('input[name="dragonTarget"]:checked').val();
    if (dragonTarget === "elf") {
      const newElf = elf(changePoints(-5));
    }
    else {
      const newPixie = pixie(changePoints(-5));
    }
    const newState = dragon(changePoints(10));
    updateDom();
  });

  $('#slash').click(function () {
    const newState = dragon(changePoints(5));
    updateDom();
  });
  
  $('#bite').click(function () {
    const newState = dragon(changePoints(3));
    updateDom();
  });

  // Elf Abilities
  $('#kick').click(function () {
    const newState = elf(changePoints(3));
    updateDom();
  });

  $('#punch').click(function () {
    const elfTarget = $('input[name="elfTarget"]:checked').val();
    if (elfTarget === "dragon") {
      const newDragon = dragon(changePoints(-5));
    }
    else {
      const newGiant = giant(changePoints(-5));
    }
    const newState = elf(changePoints(5));
    updateDom();
  });

  $('#arrow').click(function () {
    const newState = elf(changePoints(10));
    updateDom();
  });

  // Giant Abilities

  $('#stomp').click(function () {
    const giantTarget = $('input[name="giantTarget"]:checked').val();
    if (giantTarget === "elf") {
      const newElf = elf(changePoints(-5));
    }
    else {
      const newPixie = pixie(changePoints(-5));
    }
    const newState = giant(changePoints(10));
    updateDom();
  });

  $('#throwBoulder').click(function () {
    const newState = giant(changePoints(5));
    updateDom();
  });
  
  $('#feFiFoFum').click(function () {
    const newState = giant(changePoints(3));
    updateDom();
  });

  // Pixie Abilities

  $('#mischief').click(function () {

    const pixieTarget = $('input[name="pixieTarget"]:checked').val();
    if (pixieTarget === "dragon") {
      const newDragon = dragon(changePoints(-5));
    }
    else {
      const newGiant = giant(changePoints(-5));
    }

    const newState = pixie(changePoints(10));
    updateDom();
  });

  $('#dance').click(function () {
    const newState = pixie(changePoints(3));
    updateDom();
  });
  
  $('#pixieDust').click(function () {
    const newState = pixie(changePoints(5));
    updateDom();
  });
});