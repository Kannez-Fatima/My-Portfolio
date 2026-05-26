let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = Number(localStorage.getItem("total")) || 0;

// Add to cart
function add(name, price){
    cart.push({name, price});
    total += price;

    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", total);

    document.getElementById("count").innerText = cart.length;
}

// Show cart
if(document.getElementById("cartList")){
    let list = document.getElementById("cartList");

    cart.forEach(item=>{
        let li = document.createElement("li");
        li.innerText = item.name + " - $" + item.price;
        list.appendChild(li);
    });

    document.getElementById("total").innerText = total;
}

// Search filter
$("#search").on("keyup", function(){
    let value = $(this).val().toLowerCase();

    $(".item").filter(function(){
        $(this).toggle($(this).data("name").includes(value));
    });
});