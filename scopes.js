// Here we will try understanding scopes
// Like Global, Local and Lexical

// Nested Scope

function one() {
  const usesName = "Tejas";

  function two(params) {
    const website = "youtube";
    console.log(usesName);
  }
  console.log(website);

  two();
}

one();

// Nested Scope with if statements

if (true) {
  const username = "tejas";

  if (username === "tejas") {
    const website = "youtube";
    console.log(username + " " + website);
  }
  console.log(website);
}
console.log(username);
