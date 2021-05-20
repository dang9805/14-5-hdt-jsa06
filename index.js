// lấy thông tin từ form -> lưu vào localStorage


document.getElementById("summit").addEventListener("click", ()=>{
    var Name = document.getElementById("name").value;
    var Age = document.getElementById("age").value;
    var Hobbit = document.getElementById("hobbit").value;
    
    let Data = [
        {
            "name" : Name,
            "age" : Age,
            "hobbit" : Hobbit
        }
    ]
    window.localStorage.setItem("data", JSON.stringfy(Data))
})

document.getElementById("btn-result").addEventListener("click", ()=>{
    window.location.href = "index.html"
})