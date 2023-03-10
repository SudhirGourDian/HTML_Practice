let allProducts = [
    {
        "PId": uniqueID(),
        "image": "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "name": "Fujifilm Mirrorless Camera",
        "desc": "X-A7 24.2 MP Mirrorless Camera with XC 15-45 mm Lens-Camel",
        "code": "1001",
        "price": 4500,
        "MRP": 6000
    },
    {
        "PId": uniqueID(),
        "image": "https://images.unsplash.com/photo-1553545204-4f7d339aa06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1993&q=80",
        "name": "Fitbit Versa Smartwatch",
        "desc": "Versa 3 Health and Fitness Smartwatch with GPS and heart-rate tracking",
        "code": "1002",
        "price": 1600,
        "MRP": 2000
    },
    {
        "PId": uniqueID(),
        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "name": "Sony Wireless Headphones",
        "desc": "WI-C100 Headphones with Noise cancellation for easier and handsfree experience-Blue",
        "code": "1003",
        "price": 300,
        "MRP": 0

    },
    {
        "PId": uniqueID(),
        "image": "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "name": "Bose Portable Speaker",
        "desc": "SoundLink Flex Bluetooth Wireless Waterproof Speaker for Outdoor Travel-Black",
        "code": "1004",
        "price": 1800,
        "MRP": 2000
    },
    {
        "PId": uniqueID(),
        "image": "https://images.unsplash.com/photo-1628815113969-0487917fc6a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "name": `SAMSUNG Galaxy Tablet`,
        "desc": "A8 Android Tablet WiFi 7040 mAH Battery 10.5 inch TFT Screen Four Speakers 32GB/3GB RAM ",
        "code": "1005",
        "price": 2000,
        "MRP": 0
    },
    {
        "PId": uniqueID(),
        "image": "https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "name": "EPSON Inkjet Printer",
        "desc": "EPSON WorkForce Pro WF-3820 DWF all-in-one Printer. Fax,scan,copy & print",
        "code": "1006",
        "price": 2500,
        "MRP": 3000
    }
];


for (let i = 0; i < allProducts.length; i++) {
    allProducts[i].PId = Math.round((Math.random() * 100000000).toFixed(9));
}
function uniqueID() {
    return Math.floor(Math.random() * Date.now());
}

const cardHTML = allProducts.map((curr_obj) => {
    let discountprice='';
    if (curr_obj.MRP != 0) {
        discountprice=`<del class = "mrp">SEK ${curr_obj.MRP}</del>`;
    }
    return `
        <div class="card">
            <img src='${curr_obj.image}' alt="sampleBackground" class = "card-image">
            <h4 class = "prod-name">${curr_obj.name}</h4>
            <p class = "desc" >${curr_obj.desc}</p>
            <p class = "prod-code">Product Code: ${curr_obj.code}</p>
            <div class="read-more-less"> 
                <a class  =  "toggle-link ${curr_obj.PId}" onclick = "showContent('${curr_obj.PId}')"> See More Information <i class="fa-sharp fa-solid fa-chevron-down"></i> </a>
                <p id = "${curr_obj.PId}" style = "visibility : hidden;">This is the Product Description with this particular Product Id </p>
            </div>
            <span class = "prod-price">Price : SEK ${curr_obj.price}</span>
            ${discountprice}
            
            <div class="card-btn">
                <button class = "add-btn" onclick = "addItem('${curr_obj.PId}')">Add to list</button>
            </div>
        </div>
        `;
    

});

let totalPrice = 0;

let Wishlists = [];

console.log(cardHTML);
// for (let i = 0; i < cardHTML.length; i++) {
    // console.log(cardHTML[i]);
document.getElementById("card-container").innerHTML = cardHTML.join("\n");

// }

// Main function to add items , which calls addWish() and changeTotal() utility functions  :



function addItem(PID) {
    if (!Wishlists.includes(PID)) {
        console.log(PID);
        let { name, price, MRP } = findObj(PID);
        addWish(name, price, MRP, PID);
        
        
        Wishlists.push(PID);
    }
    else {
        alert("This item already exists in the list");
    }
}

// To find the object with the given PID;

function findObj(PId) {
    for (let i = 0; i < allProducts.length; i++) {
        if (PId == allProducts[i].PId) {
            return allProducts[i];
        }
    }
}

// To add a list item when Add Item button is clicked :
let ind = 0;
function addWish(name, price, mrp, pid) {

    // If there is no Discount
    if (mrp == 0) {
        document.getElementsByClassName("wish-lists")[0].innerHTML += `<li class = "${ind}">${name} - SEK ${price} (You saved ${0}) <a class  =  "rm-btn ${ind}" onclick = "removeWishList('${ind}' , '${price}','${pid}')" > Remove </a></li>`
            ;
        ind++;
        
    }
    else { // If there is a discount then , we saved amount on that product ;
        document.getElementsByClassName("wish-lists")[0].innerHTML += `<li class = "${ind}">${name} - SEK ${price} (You saved ${mrp - price}) <span class  =  " rm-btn ${ind}" onclick = "removeWishList('${ind}' , '${price}' , '${pid}')" > Remove </span></li>
        `;
        ind++;
    }
    totalPrice += parseInt(price);
    changeTotal();

}

// To change the total price when Item is added or deleted.

function changeTotal() {
    document.getElementsByClassName("total")[0].innerHTML = `Your Wishlist Total is: SEK ${totalPrice}`;
    console.log(totalPrice);
}

// To remove items when remove link is clicked : 

function removeWishList(index, price, pid) {
    console.log(price);
    let element = document.getElementsByClassName(index)[0];
    let element2 = document.getElementsByClassName(index)[1];

    totalPrice -= parseInt(price);


    // Removing the element Pid from wishlist if the li item is removed : 
    let ind_rem = Wishlists.indexOf(pid);
    Wishlists.splice(ind_rem, 1);


     // Reducing the index if the element is removed.
    changeTotal();
    element.remove();
    element2.remove();
}

// Read more / Read less :

function showContent(pid) {
    let p_element = document.getElementsByClassName(pid)[0];
    console.log(p_element.innerHTML);
    let element = document.getElementById(pid);
    if (element.style.visibility != "hidden") {
        element.style.visibility = "hidden";
        p_element.innerHTML = "Show More Information <i class='fa-sharp fa-solid fa-chevron-down'></i> ";
    }
    else {
        element.style.visibility = "visible";
        p_element.innerHTML = "Show Less Information <i class='fa-solid fa-chevron-up'> </i> ";

    }

}