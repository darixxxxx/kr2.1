async function getResponce() {
    let responce = await fetch("../data/shop.json") /*загружает JSON-файл с данными о товарах*/
    let content = await responce.text() /*получает содержимое ответа в виде текста*/
    console.log(content)
    content = JSON.parse(content) /*преобразует текстовое содержимое в объект JavaScript*/
    content = content.splice(0, 10) /*ограничивает массив до первых 10 элементов*/
    console.log(content)


/*цикл for проходит по каждому элементу массива content, выводя в консоль его id, title и весь объект*/
    let key
    for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }


/*вставка данных в html*/
    let node_for_insert = document.getElementById("node_for_insert") /*находит элемент с идентификатором node_for_insert в html*/

/*второй цикл for создает html-код для каждого товара, добавляя его в элемент node_for_insert*/
    for (key in content) {
        node_for_insert.innerHTML +=  `
        <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
        <img style="width: 180px" class="align-self-center" src=${content[key].img}>
        <h4 class="card-title">${content[key].title}</h4>
        <p class="card-text">${content[key].description}. Цена ${content[key].price} р.</p>
        <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
        <p class="card-text" >Заказать<input class="w-25" type="number" name="amount" value="0"></p>
        </li>
        `
    }

}

/*процесс загрузки и отображения данных*/
getResponce()