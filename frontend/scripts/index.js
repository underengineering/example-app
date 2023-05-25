import { getItems, createItem, deleteItem } from "./api.js";

const inputEl = document.querySelector("#item-text");
const submitEl = document.querySelector("#submit-btn");
const itemsEl = document.querySelector("#items");

async function updateItems() {
    const items = await getItems();

    const newItemContainer = document.createElement("div");
    newItemContainer.id = "items-container";
    newItemContainer.className = "item-list";

    let itemContainer = itemsEl.querySelector("#items-container");
    itemContainer.replaceWith(newItemContainer);

    for (const item of items) {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";

        const itemSpan = document.createElement("span");
        itemSpan.innerText = item.text;

        const itemDeleteBtn = document.createElement("button");
        itemDeleteBtn.innerText = "Удалить"
        itemDeleteBtn.addEventListener("click", () => {
            deleteItem(item.id).then(() => updateItems());
        });

        itemDiv.appendChild(itemSpan);
        itemDiv.appendChild(itemDeleteBtn);

        newItemContainer.appendChild(itemDiv);
    }
}

submitEl.addEventListener("click", async () => {
    const text = inputEl.value;
    if (!text) return;

    await createItem(text);
    await updateItems();

    inputEl.value = "";
});

updateItems();
