const createElement = (element, classList) => {
  const el = document.createElement(element);
  el.classList.add(classList);

  return el;
};

const crateItem = (item) => {
  const li = createElement("li", "item");
  const title = createElement("p", "item-title");
  title.textContent = item.brand;
  li.append(title);
  const desc = createElement("p", "item-text");
  desc.textContent = item.description;
  li.append(desc);
  const price = createElement("p", "item-price");
  price.textContent = "$" + item.price / 100;
  li.append(price);

  return li;
};

const crateList = (title, items) => {
  const ul = createElement("ul", "list");
  const listTitle = createElement("h2", "list-title");
  listTitle.textContent = title;
  ul.append(listTitle);
  items.forEach((item) => {
    ul.append(crateItem(item));
  });
  return ul;
};

const container = document.querySelector(".container");

const data = fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then(({ products }) => {
    return products?.reduce((group, item) => {
      const { category } = item;
      const index = group.findIndex((item) => item?.category === category);
      if (index >= 0) {
        group[index].items.push(item);
      } else {
        group.push({
          category,
          items: [item],
        });
      }
      return group;
    }, []);
  })
  .then((data) => {
    data.forEach((element) => {
      container.append(crateList(element.category, element.items));
    });
  });

console.log(data);
