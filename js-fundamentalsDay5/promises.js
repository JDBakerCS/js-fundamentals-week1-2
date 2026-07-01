
console.log('----------------- PROMISES -----------------');

// Focus: get comfortable with the syntax
// new Promise(), resolve(), reject(), .then(), .catch(), async/await




//----------------------------------------------------
console.log('\n--- Problem 1: basic resolve ---');

// create a promise that resolves with the string 'hello!'
// log the result using .then()

// expected output: 'hello!'

let p1 = new Promise(function(resolve, reject) {
  
  resolve("Hello!");
})


p1.then(function(result) {
  console.log(result);
})



//----------------------------------------------------
console.log('\n--- Problem 2: basic reject ---');

// create a promise that rejects with the string 'oops, something went wrong'
// handle the error using .catch() and log it

// expected output: 'oops, something went wrong'

let p2 = new Promise(function(resolve, reject) {
  reject("oopsy poopsy")
})

// your code here
p2.catch(function(error) {
  console.log(error);
})



//----------------------------------------------------
console.log('\n--- Problem 3: async resolve ---');

// create a promise that resolves after 2 seconds with the string 'done waiting!'
// log the result using .then()

// expected output (after 2 seconds): 'done waiting!'

let p3 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve('done waiting!')
  }, 0);
})

  p3.then(function(done) {
    console.log(done);
  })




//----------------------------------------------------
console.log('\n--- Problem 4: promise chaining ---');

// using .then() chaining, log three things in order:
//   1. 'step 1: logged in'
//   2. 'step 2: loaded profile'
//   3. 'step 3: showed dashboard'
//
// start with a resolved promise and chain .then() calls
// pass a value from each step to the next

// expected output:
// 'step 1: logged in'
// 'step 2: loaded profile'
// 'step 3: showed dashboard'

let p4 = new Promise(function(resolve, reject) {
  resolve('step 1: logged in')
  })
  .then(function (stpOne) {
    console.log(stpOne)
    return 'step 2: loaded profile'
  })
  .then(function (reTwo) {
    console.log(reTwo)
    return 'step 3: showed dashboard'
  })
  .then(function(reThree) {
    console.log(reThree)
  })



//----------------------------------------------------
console.log('\n--- Problem 5: getUser ---');

// write a function called getUser() that returns a promise
// after 1 second it should resolve with the object: { name: 'sam', age: 22 }
// then call getUser() and log the result with .then()

// expected output (after 1 second): { name: 'sam', age: 22 }

function getUser() {
  return new Promise(function(resolve) {
    setTimeout(() => {
      resolve({name: 'sam', age: 22 })
    }, 1000);
  })
}
getUser().then(function(user) {
  console.log(user)
})





//----------------------------------------------------
console.log('\n--- Problem 6: chain pizza ---');

// rewrite this callback-based code using promises + .then() chaining
// each step should happen after the previous one finishes
//
// orderPizza(function() {
//   waitForDelivery(function() {
//     eatPizza(function() {
//       console.log('done!')
//     })
//   })
// })

function orderPizza() {
  return new Promise(function(resolve) {
    setTimeout(() => {
      console.log('pizza ordered!')
      resolve()
    }, 1000);
  })
}

function waitForDelivery() {
  return new Promise(function(resolve) {
    setTimeout(() => {
      console.log('pizza arrived!')
      resolve()
    }, 2000);
  })
}

function eatPizza() {
  return new Promise(function(resolve) {
    setTimeout(() => {
      console.log('eating pizza...')
      resolve()
    }, 1000);
  })
}

// your code here - chain orderPizza, waitForDelivery, eatPizza using .then()
//orderPizza()
 // .then(function() {return waitForDelivery() })
 // .then(function() {return eatPizza() })
  //  .then(function() {return console.log('Done!')})
  



//----------------------------------------------------
//console.log('\n--- Problem 7: async/await ---');

// rewrite question 6 using async / await instead of .then()
// wrap everything in an async function called startPizzaNight()
// call startPizzaNight() at the end

// expected output (in order):
// 'pizza ordered!'
// 'pizza arrived!'
// 'eating pizza...'
// 'done!'
async function startPizzaNight() {
  try {
    await orderPizza()
    await waitForDelivery()
    await eatPizza()
  } catch (error) {
    console.log('something went wrong: ', error)
  }
}
startPizzaNight();
