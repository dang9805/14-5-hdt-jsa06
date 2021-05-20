// lấy thông tin từ localStorage -> hiển thị ra trang web

data = window.localStorage.getItem("data")

data = [
    {
        "name" : Name,
        "age" : Age,
        "hobbit" : Hobbit
    }
]

for (let i = 0; i < data.length; i++) {
    let person = document.createElement("div")
    person.innerHTML = `
    <span>${data[i].name}</span>
    `
    document.getElementById("result").appendChild(person)
}

document.getElementById("btn-clear").addEventListener("click",()=>{
    localStorage.clear(data)
})
