fetch("./data.json").then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
    for (var index in data){
        var cardhtml = `<div class="card ${data[index].category}">
        <div  class="card-left" id="${data[index].category}">   
        <img src=${data[index].icon}>
        ${data[index].category}
        </div>
        <div class="number -${data[index].category}">
        <h5>${data[index].score} </h5> <p> / 100</p>
        </div>
        </div>`

   
        document.querySelector('.cards').insertAdjacentHTML("afterbegin",cardhtml);
    }

    var sum = 0;
    for (var x in data){
        sum += data[x].score;
    }

    const avg = Math.floor(sum/data.length);

    document.querySelector('.circle-result').insertAdjacentHTML("afterbegin",`<h1>${avg}</h1>`)
    })
