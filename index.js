var id = 1;
var itemsList;


function add_item() {
  const itemValue = document.getElementById("text-input").value;
  const itemList = document.getElementById("item-list");

  const parentDiv = document.createElement("div");
  parentDiv.innerHTML = `<div id="id${id}" class="item black-box b-r"><div class="item-text"><p onclick="full_item('id${id}')">${itemValue}</p></div><button class="remove-btn purple-box b-r" type="button" onclick="remove_item('id${id}')"><img src="./delete.svg" alt=""></button></div>`;
  itemList.appendChild(parentDiv);

  itemsList.push({
    value: itemValue,
    id
  })

  const newList = {
    "items": [
      ...itemsList.map((ele) => {
        return {
          "value": ele.value
        }
      })
    ]
  }

  localStorage.setItem("itemsList", JSON.stringify(newList));

  id++;
}


addEventListener('load', () => {
  itemsObj = JSON.parse(localStorage.getItem("itemsList"));

  if (itemsObj) {
    itemsList = itemsObj.items;

    for (let i = 0; i < itemsList.length; i++) {
      const itemList = document.getElementById("item-list");
      const parentDiv = document.createElement("div");
      parentDiv.innerHTML = `<div id="id${id}" class="item black-box b-r"><div class="item-text"><p onclick="full_item('id${id}')">${itemsList[i].value}</p></div><button class="remove-btn purple-box b-r" type="button" onclick="remove_item('id${id}')"><img src="./delete.svg" alt=""></button></div>`;
      itemList.appendChild(parentDiv);

      itemsList[i].id = id;
      id++;
    }
  } else {
    itemsList = [];
  }
})


function remove_item(ele) {
  var itemEle = document.getElementById(ele);
  itemEle.remove();

  itemsList = itemsList.filter((item) => {
    if (item.id != ele.substring(2)) {
      return ele;
    }
  })

  const newList = {
    "items": [
      ...itemsList.map((item) => {
        return {
          "value": item.value
        }
      })
    ]
  }

  localStorage.setItem("itemsList", JSON.stringify(newList));
}


function full_item(ele) {
  var itemTextDiv = document.getElementById(ele).childNodes[0];
  var value = itemTextDiv.childNodes[0].innerHTML;
  alert(value);
}