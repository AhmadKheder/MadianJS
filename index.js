const response = async () =>
  fetch(
    `https://filltext.com/?rows=10&fname={firstName}&lname={lastName}&category=[%22category1%22,%22category2%22,%22category3%22]&pretty=true`
  ).then((res) => {
    return res.json().then((data) => {
      console.log(data);
      return data;
    });
  });
let data = await response();
let state = data;

const categoryBtn1 = document.getElementById("categoryBtn1");
const categoryBtn2 = document.getElementById("categoryBtn2");
const categoryBtn3 = document.getElementById("categoryBtn3");

categoryBtn1.addEventListener("click", () => {
  state = data.filter((item) => item.category === "category1");
  renderData(state);
});
categoryBtn2.addEventListener("click", () => {
  state = data.filter((item) => item.category === "category2");
  renderData(state);
});
categoryBtn3.addEventListener("click", () => {
  state = data.filter((item) => item.category === "category3");
  renderData(state);
});

let dataSection = document.getElementById("data");

const displayData = (data) => {
  const card = document.createElement("div");
  card.classList.add("card");
  dataSection.appendChild(card);

  const cardBody = document.createElement("div");
  card.appendChild(cardBody);
  cardBody.classList.add("card-body");

  const avatar = document.createElement("div");
  avatar.classList.add("avatar");
  card.appendChild(avatar);
  cardBody.appendChild(avatar);

  const avatarText = document.createElement("h4");
    avatarText.classList.add("avatar-text");
  avatarText.innerText = `${data.fname[0]} ${data.lname[0]}`;
  avatar.appendChild(avatarText);


  const userInfo = document.createElement("p");
  userInfo.classList.add("user-info");
  userInfo.textContent = `${data.fname} ${data.lname}`;
  card.appendChild(userInfo);
  cardBody.appendChild(userInfo);

  const cardButton = document.createElement("button");
  cardButton.classList.add("cardCategoryBtn");
  cardButton.innerText = data.category;
  card.appendChild(cardButton);
};

const renderData = (state) => {
  emptyTag(dataSection);
  state.forEach((data) => {
    displayData(data);
  });
};
const emptyTag = (tag) => {
  tag.innerHTML = "";
};

renderData(state);
