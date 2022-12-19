let allProducts = [
    {
        "PId" : 0,
        "image" : "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "name" : "Fujifilm Mirrorless Camera",
        "desc" : "X-A7 24.2 MP Mirrorless Camera with XC 15-45 mm Lens-Camel",
        "code" : "1001",
        "price" : 4500,
        "MRP" : 6000
    },
    {
        "PId" : 0,
        "image" : "https://images.unsplash.com/photo-1553545204-4f7d339aa06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1993&q=80",
        "name" : "Fitbit Versa Smartwatch",
        "desc" : "Versa 3 Health and Fitness Smartwatch with GPS and heart-rate tracking",
        "code" : "1002",
        "price" : 1600,
        "MRP" : 2000
    },
    {
        "PId" : 0,
        "image" : "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "name" : "Sony Wireless Headphones",
        "desc" : "WI-C100 Headphones with Noise cancellation for easier and handsfree experience-Blue",
        "code" : "1003",
        "price" : 300,
        "MRP" : 0

    },
    {
        "PId" : 0,
        "image" : "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "name" : "Bose Portable Speaker",
        "desc" : "SoundLink Flex Bluetooth Wireless Waterproof Speaker for Outdoor Travel-Black",
        "code" : "1004",
        "price" : 1800,
        "MRP" : 2000
    },
    {
        "PId" : 0,
        "image" : "https://images.unsplash.com/photo-1628815113969-0487917fc6a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "name" : `SAMSUNG Galaxy Tablet`,
        "desc" : "A8 Android Tablet WiFi 7040 mAH Battery 10.5 inch TFT Screen Four Speakers 32GB/3GB RAM ",
        "code" : "1005",
        "price" : 2000,
        "MRP" : 0
    },
    {
        "PId" : 0,
        "image" : "https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "name" : "EPSON Inkjet Printer",
        "desc" : "EPSON WorkForce Pro WF-3820 DWF all-in-one Printer. Fax,scan,copy & print",
        "code" : "1006",
        "price" : 2500,
        "MRP" : 3000
    }
];


for(let i = 0 ; i < allProducts.length ; i++){
    allProducts[i].PId = Math.round((Math.random()*100000000).toFixed(9));
}


const cardHTML = allProducts.map((curr_obj) =>{
    
    if(curr_obj.MRP != 0){
        return `<div class = "col-md-6 col-lg-4 mb-4 ">
        <div class="card shadow-sm">
            <img src='${curr_obj.image}' alt="" class="card-img-top card-top card-bg" style = "height : 250px;">
            <div class="card-body">
                <h5 class="card-text name">${curr_obj.name}</h5>
                <p class="card-text desc">${curr_obj.desc}</p>
                <p class="card-text code">Product Code: ${curr_obj.code}</p>
                <div class="dropdown mb-5"> 
                    <a class  =  "dropdown-toggle text-decoration-none" data-bs-toggle = "dropdown" > See More Information </a>
                    <ul class="dropdown-menu"> <!--All the drop down items are placed in this menu.-->
                        <li class="dropdown-item">Description of Product </li>
                    </ul>
                </div>
                <span class="card-text price">Price : SEK ${curr_obj.price}</span>
                <del class = "card-text mrp text-danger">SEK ${curr_obj.MRP}</del>
            </div>
            <div class="card-footer  d-flex justify-content-end">
                <button type = "button" class = "btn btn-secondary add-btn" onclick = "addItem('${curr_obj.PId}')" >Add to list</button>
            </div>
        </div>
    </div>`;
    }

    

    return `
    <div class = "col-md-6 col-lg-4 mb-4 ">
        <div class="card shadow-sm">
            <img src='${curr_obj.image}' alt="" class="card-img-top card-top card-bg" style = "height : 250px;">
            <div class="card-body">
                <h5 class="card-text name">${curr_obj.name}</h5>
                <p class="card-text desc">${curr_obj.desc}</p>
                <p class="card-text code">Product Code: ${curr_obj.code}</p>
                <div class="dropdown mb-5"> 
                    <a class  =  "dropdown-toggle text-decoration-none" data-bs-toggle = "dropdown" > See More Information </a>
                    <ul class="dropdown-menu"> 
                        <li class="dropdown-item">Description of Product </li>
                    </ul>
                </div>
                <span class="card-text price">Price : SEK ${curr_obj.price}</span>
                
            </div>
            <div class="card-footer d-flex justify-content-end ">
                <button type = "button" class = "btn btn-secondary add-btn" onclick = "addItem('${curr_obj.PId}')">Add to list</button>
            </div>
        </div>
    </div>
    `;

});

let totalPrice = 0;

for(let i = 0 ; i < cardHTML.length ; i++){
    // console.log(cardHTML[i]);
    document.getElementById("card").innerHTML += cardHTML[i];
}

// Main function to add items , which calls addWish() and changeTotal() utility functions  :

function addItem(PID){
    console.log(PID);
    let {name , price , MRP} = findObj(PID);
    addWish(name , price , MRP);
    changeTotal();
}

// To find the object with the given PID;

function findObj(PId){
    for(let i = 0 ; i < allProducts.length ; i++){
        if(PId == allProducts[i].PId){
            return allProducts[i];
        }
    }
}

// To add a list item when Add Item button is clicked :
let ind =  0;
function addWish(name , price , mrp){
    // console.log(name , price , mrp);
    if(mrp == 0){
        document.getElementsByClassName("wish-lists")[0].innerHTML += `<li class = "${ind}">${name} - SEK ${price} (You saved ${0}) </li>
        <a class  =  "text-decoration-none text-danger ${ind}" onclick = "removeWishList('${ind}' , '${price}')" > Remove </a>`;
        ind++;
    }
    else{
        document.getElementsByClassName("wish-lists")[0].innerHTML += `<li class = "${ind}">${name} - SEK ${price} (You saved ${mrp-price}) </li>
        <a class  =  "text-decoration-none text-danger ${ind}" onclick = "removeWishList('${ind}' , '${price}')" > Remove </a>`;
        ind++;
    }
    totalPrice += parseInt(price);
}

// To change the total price when Item is added or deleted.

function changeTotal(){
    document.getElementsByClassName("total")[0].innerHTML = `Your Wishlist Total is: SEK ${totalPrice}`;
    console.log(totalPrice);
}

// To remove items when remove link is clicked : 

function removeWishList(index , price){
    console.log(price);
    let element = document.getElementsByClassName(index)[0];
    let element2 = document.getElementsByClassName(index)[1];

    totalPrice -= price;
    ind--;
    changeTotal();
    element.remove();
    element2.remove();
}

