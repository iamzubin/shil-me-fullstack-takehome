let apiKeys = global.apiKeys;

//5 minutes worth in milliseconds, used later on
const oneUnitTime = 1000 * 60 * 5;
const maxRequests = 10;

function makeRandomHash() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

//function to generate new API keys
export function generateKey(user) {
  if (apiKeys[user]) {
    throw Error("user already has a key");
  }
  let key = makeRandomHash(); // just some function that creates a random string like "H#4/&DA23#$X/"
  console.log("generated key", key);
  //share object so it can be reached by either key or user
  //terrible idea, but when you save this in mysql you can just do a normal search query
  apiKeys[user] = {
    key: key,
    user: user,
    checked: Date.now(),
    uses: 0,
  };
  apiKeys[key] = apiKeys[user];
  return key;
}

// a function that does all the key verification for us
export function isValid_bak(key) {
  //check if key even exists first
  console.log("apikeys", apiKeys);
  if (!apiKeys[key]) throw Error("invalid key");

  //if it's been a whole day since it was last checked, reset its uses
  if (Date.now() - apiKeys[key].checked >= oneUnitTime) {
    apiKeys[key].uses = 0;
    apiKeys[key].checked = Date.now();
  }

  //check if the user limit cap is reached
  if (apiKeys[key].uses >= maxRequests) throw error("User daily qouta reached");

  //increment the user's count and exit the function without errors
  apiKeys[key].uses++;
}

export function isValid(){
  return true;
}