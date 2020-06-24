import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { blueFood, greenFood, badFood, goodWater, badWater, sunLight, noSunLight,superBloom,badBloom, fern, daffodil } from './rpg.js';

$(document).ready(function () {

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
  $('#feed-f').click(function () {
    const newState = fern(blueFood);
    $('#food-fern').text(newState.soil);
  });
  $('#feed1-f').click(function () {
    const newState = fern(greenFood);
    $('#food-fern').text(newState.soil);
  });
  $('#feed2-f').click(function () {
    const newState = fern(badFood);
    $('#food-fern').text(newState.soil);
  });

  $('#water-f').click(function () {
    const newState = fern(goodWater);
    $('#water-fern').text(newState.water);
  });
  $('#water1-f').click(function () {
    const newState = fern(badWater);
    $('#water-fern').text(newState.water);
  });
  $('#light-f').click(function () {
    const newState = fern(sunLight);
    $('#light-fern').text(newState.light);
  });
  $('#light1-f').click(function () {
    const newState = fern(noSunLight);
    $('#light-fern').text(newState.light);
  });

  // <-------------------Daffodil---------------------------------------->
  $('#water1').click(function () {
    const newState = daffodil(goodWater);
    $('#water-diffodil').text(newState.water);
  });
  $('#water2').click(function () {
    const newState = daffodil(badWater);
    $('#water-diffodil').text(newState.water);
  });
  $('#feed1').click(function () {
    const newState = daffodil(blueFood);
    $('#food-daffodil').text(newState.soil);
  });
  $('#feed2').click(function () {
    const newState = daffodil(greenFood);
    $('#food-daffodil').text(newState.soil);
  });
  $('#feed3').click(function () {
    const newState = daffodil(badFood);
    $('#food-daffodil').text(newState.soil);
  });
  $('#light1').click(function () {
    const newState = daffodil(sunLight);
    $('#light-daffodil').text(newState.light);
  });
  $('#light2').click(function () {
    const newState = daffodil(noSunLight);
    $('#light-daffodil').text(newState.light);
  });
  $('#bloom1').click(function () {
    const newState = daffodil(superBloom);
    $('#bloom-daffodil').text(newState.bloom);
  });
  $('#bloom2').click(function () {
    const newState = daffodil(badBloom);
    $('#bloom-daffodil').text(newState.bloom);
  });
});