const items = document.querySelectorAll(".item")
console.log(`Number of categories: ${items.length}`);
items.forEach((item) => {
    const category = item.querySelector(".list-title").textContent
    const elements = item.querySelectorAll(".categories-sublist-item").length
    console.log(`Category: ${category}`);
  console.log(`Elements: ${elements}`);
})


