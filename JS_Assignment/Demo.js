let allProducts = [
    {
        "PId" : 0,
        "image" : "",
        "name" : "Fujifilm Mirrorless Camera",
        "desc" : "X-A7 24.2 MP Mirrorless Camera with XC 15-45 mm Lens-Camel",
        "code" : "1001",
        "price" : 4500,
        "MRP" : 6000
    },
    {
        "PId" : 0,
        "image" : "",
        "name" : "Fitbit Versa Smartwatch",
        "desc" : "Versa 3 Health and Fitness Smartwatch with GPS and heart-rate tracking",
        "code" : "1002",
        "price" : 1600,
        "MRP" : 2000
    },
    {
        "PId" : 0,
        "image" : "",
        "name" : "Sony Wireless Headphones",
        "desc" : "WI-C100 Headphones with Noise cancellation for easier and handsfree experience-Blue",
        "code" : "1003",
        "price" : 300,
        "MRP" : 0

    },
    {
        "PId" : 0,
        "image" : "",
        "name" : "Bose Portable Speaker",
        "desc" : "SoundLink Flex Bluetooth Wireless Waterproof Speaker for Outdoor Travel-Black",
        "code" : "1004",
        "price" : 1800,
        "MRP" : 2000
    },
    {
        "PId" : 0,
        "image" : "",
        "name" : `SAMSUNG Galaxy Tablet`,
        "desc" : "A8 Android Tablet WiFi 7040 mAH Battery 10.5 inch TFT Screen Four Speakers 32GB/3GB RAM ",
        "code" : "1005",
        "price" : 2000,
        "MRP" : 0
    },
    {
        "PId" : 0,
        "image" : "",
        "name" : "EPSON Inkjet Printer",
        "desc" : "EPSON WorkForce Pro WF-3820 DWF all-in-one Printer. Fax,scan,copy & print",
        "code" : "1006",
        "price" : 2500,
        "MRP" : 3000
    }
];


for(let i = 0 ; i < allProducts.length ; i++){
    allProducts[i].PId = Math.round((Math.random()*100000000));
}


const cardHTML = allProducts.map((curr_obj) =>{
    
    if(curr_obj.MRP != 0){
        return `<div class = "col-md-4 mb-4">
        <div class="card">
            <img src="sampleBackground.jpg" alt="" class="card-img-top card-top card-bg" style = "height : 250px;">
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
                <button type = "button" class = "btn btn-secondary add-btn" onclick = "addItem('${curr_obj.PId}'')" >Add to list</button>
            </div>
        </div>
    </div>`;
    }


    return `
    <div class = "col-md-4 mb-4 ">
        <div class="card">
            <img src="sampleBackground.jpg" alt="" class="card-img-top card-top card-bg" style = "height : 250px;">
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


// document.getElementsByClassName("add-btn")[0].onclick = addItem;

function addItem(PID){
    console.log(PID);
    let [name , price , MRP] = findObj(PID);
    addWish(name , price , MRP);
    changeTotal();
}


function findObj(PId){
    for(let i = 0 ; i < allProducts.length ; i++){
        if(Pid == allProducts[i].PId){
            return allProducts[i];
            break;
        }
    }
}


function addWish(PID){
    console.log(PID);
    if(mrp == 0){
        document.getElementsByClassName("wish-lists")[0].innerHTML += `<li>${name} - SEK ${price} (You saved ${0}) </li>
        <a class  =  " text-decoration-none" > See More Information </a>`;
        
    }
    else{
        document.getElementsByClassName("wish-lists")[0].innerHTML += `<li>${name} - SEK ${price} (You saved ${mrp - price}) </li>
        <a class  =  " text-decoration-none" > See More Information </a>`;
    }
    totalPrice += parseInt(price);
}

function changeTotal(){
    document.getElementsByClassName("total")[0].innerHTML = `Your Wishlist Total is: SEK ${totalPrice}`;
}