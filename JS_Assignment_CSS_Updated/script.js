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
    let del_tag = ``;
    if(curr_obj.MRP != 0){
        del_tag = `<del class = 'mrp'>SEK ${curr_obj.MRP}</del>`;
    }

        return `
        <div class="card">
            <img src='${curr_obj.image}' alt="sampleBackground" class = "card-image">
            <h4 class = "prod-name">${curr_obj.name}</h4>
            <p class = "desc" >${curr_obj.desc}</p>
            <p class = "prod-code">Product Code: ${curr_obj.code}</p>
            <div class="read-more-less"> 
                <a class  =  "toggle-link ${curr_obj.PId}1" onclick = "showContent('${curr_obj.PId}')"> See More Information <i class="fa-sharp fa-solid fa-chevron-down"></i> </a>
                <p id = "${curr_obj.PId}1" class = "hidden-para" style = "visibility : hidden;">This is the Product Description with this particular Product Id . This is the sample content to check the working behind this hidden paragraph.There should be a scroll appear </p>
            </div>
            <span class = "prod-price">Price : SEK ${curr_obj.price}</span>
            ${del_tag}
            <div class="card-btn">
                <button class = "add-btn" onclick = "addItem('${curr_obj.PId}')">Add to list</button>
            </div>
        </div>
        `;
});



let Wishlists = [];
document.getElementsByClassName("card-container")[0].innerHTML = cardHTML.join(" ");


function retObj(PId){
    return allProducts.find((val)=>{ // will return the element that passed this function.
        return (val.PId == PId)? val:undefined; 
    });
}

function retTotal(){
    return Wishlists.reduce((total , obj)=>{
        return total + obj.price;
    },0);
}

/* Add Item function that adds the item if it's not present in the WishList : */ 
function addItem(PId){

    let myObj = retObj(PId); // Returns the object matched with this PId passed as an argument;

    if(!Wishlists.includes(myObj)){

        let req_tag = (myObj.MRP == 0)?`(You saved 0)` : `(You saved ${myObj.MRP - myObj.price})`;
        Wishlists.push(myObj);

        let total_sum = retTotal();
        document.getElementsByClassName("total")[0].innerHTML = `Your Wishlist Total is: SEK ${total_sum}`;

        document.getElementsByClassName("wish-lists")[0].innerHTML += `<li class = "${myObj.PId}">${myObj.name} - SEK ${myObj.price} ${req_tag} <a class  =  "rm-btn ${myObj.PId}" onclick = "removeWishList('${myObj.PId}')" > Remove </a></li>`;
    }
    else{
        alert("This item already exists in the list");
    }

}


/* Removing Item on Clicking the remove button from WishList and HTML : */
function removeWishList(PId) {
    let myObj = retObj(PId);

    let element1 = document.getElementsByClassName(myObj.PId)[0];
    let element2 = document.getElementsByClassName(myObj.PId)[1];

    element1.remove();
    element2.remove();

    let index = Wishlists.indexOf(myObj);
    Wishlists.splice(index,1);

    let total_sum = retTotal();
    
    // Displaying New Total Value after Deletion : 
    document.getElementsByClassName("total")[0].innerHTML = `Your Wishlist Total is: SEK ${total_sum}`;
}

/* Read-more / Read-less Content : */
function showContent(pid) {
    let p_element = document.getElementsByClassName(pid+"1")[0];
    let element = document.getElementById(pid + "1");
    if (element.style.visibility != "hidden") {
        element.style.visibility = "hidden";
        p_element.innerHTML = "Show More Information <i class='fa-sharp fa-solid fa-chevron-down'></i> ";
    }
    else {
        element.style.visibility = "visible";
        p_element.innerHTML = "Show Less Information <i class='fa-solid fa-chevron-up'> </i> ";

    }

}