console.log(resources);

function elementFilter(index) {
  let object = resources[index];
  document.getElementById("h3").innerHTML = object.category;
  document.getElementById("span").innerHTML = object.text;

  let ulTag = document.getElementById("list");
  ulTag.innerHTML = "";

  object.sources.map((linkobj) => {
    let liTag = document.createElement("li");
    let aTag = document.createElement("a");

    aTag.href = linkobj.url;
    aTag.textContent = linkobj.title;

    liTag.appendChild(aTag);
    ulTag.appendChild(liTag);
  });
}

let previousButton = document.querySelector(".HTML");
document.querySelectorAll(".buttonList").forEach((e) => {
  e.addEventListener("click", () => {

    if (previousButton) {
      previousButton.classList.remove("active");
    }

    e.classList.add("active");

    previousButton = e;
  });
});

elementFilter(0);
