const creditCard = document.querySelector("#cc");
const veggieSelect = document.querySelector("#veggie");

const checkbox = document.querySelector("#checkbox");

formData = {};
for (let input of [creditCard, veggieSelect, checkbox]) {
  input.addEventListener("input", ({ target }) => {
    console.dir(target);
    const { value, name, type, checked } = target;
    formData[name] = type === "checkbox" ? checked : value;
    console.log(formData);
  });
}

const fakeRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.3) {
        reject();
      } else {
        resolve();
      }
    }, 3000);
  });
};

fakeRequest()
  .then(() => console.log("it worked"))
  .catch(() => console.log("no work"));
