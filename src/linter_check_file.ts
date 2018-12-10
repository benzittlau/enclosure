
// Number (with a capital N) should be invalid
let num: Number = 23;

// Non-arrow function definition (tslint)
function non_arrow_function(){
  // Unused variable (ts)
  let unused: boolean = true;

  return false;
}

// Redeclared variables (ts)
let first_only: boolean = true;
let first_only: boolean = true;
