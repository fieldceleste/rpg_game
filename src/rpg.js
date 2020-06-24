//const initialState = {};

export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

//export const stateChanger = storeState();

// Declare "Characters"

export const dragon = storeState();
export const pixie = storeState();
export const elf = storeState();
export const giant = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

 export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value 
    });
  };
};

/// Points for each Ability------------------

export const changePoints = changeState("points");
export const changeHealth = changeState("health");











//---------------------------------------

// const ThisObject = (initialAttributes) => {
//   let currentAttributes = initialAttributes;                         // Starting attributes for the object is the initial attributes you hand it when you create this
//   return (HowIWantToModifyTheObject) => {             // "ThisObject" is now a function waiting to be modified in some way; hand it/pass in the function that modifies it
//     const newAttributes = HowIWantToModifyTheObject(currentAttributes);  //Use the current object and the modifier to "create" a new object with updated attributes
//     currentAttributes = {...newAttributes}                                // copy/save modified object's attributes into current attributes
//     return currentAttributes;                                          // This gets assigned to a variable somewhere for further modification
//   }
// }


// export const fern = storeState({ soil: 0, water: 0, light: 0});
// export const daffodil = storeState({ soil: 0, water: 0, light: 0, bloom:0});

// export const feed = changeState("soil");
// export const hydrate = changeState("water");
// export const light = changeState("light");
// export const bloom =changeState("bloom");


// export const goodWater = hydrate(10);
// export const badWater = hydrate(-5);

// export const blueFood = feed(5);
// export const greenFood = feed(2);
// export const badFood = feed(-1);


// export const sunLight = light(3);
// export const noSunLight = light(-2);

// export const superBloom = bloom(20);
// export const badBloom = bloom(-5);