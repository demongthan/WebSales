// Script for navigation bar
const bar =document.getElementById('bar');
const nav=document.getElementById('navbar');
const close=document.getElementById('close');
const featuredProducts=document.getElementById('FeaturedProductsContent');
const newArrivalsContent=document.getElementById('NewArrivalsContent');
const shopContent=document.getElementById('ShopContent');
const prodetails=document.getElementById('prodetails');
const contentSProduct=document.getElementById('ContentSProduct');
const cart=document.getElementById('cart');
const tableCart=document.getElementById('TableCart');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

function LoadProducts(){
    listProductFeatured.forEach((element, index)=>{
        let contentStar='';
        for(let i=0;i<element.Star;i++){
            contentStar+='<i class="fa fa-star"></i>';
        }

        let content=`<div class="pro">
                        <img src="${element.Img}" alt="">
                        <div class="des">
                            <span>${element.Brand}</span>
                            <h5>${element.Des}</h5>
                            <div class="star">
                               ${contentStar}
                            </div>
                            <h4>$${element.Price}</h4>
                        </div>
                        <a><i onclick="AddCart(${index})" id="Icon_${index}" class="fal fa-shopping-cart cart"></i></a>
                    </div>`;

        if(index>7){
            newArrivalsContent.innerHTML+=content;
        }
        else{
            featuredProducts.innerHTML+=content;
        }

        listProductBuy=localStorage.getItem("ListProductBuy")==null?[]:localStorage.getItem("ListProductBuy").split("|");
        if(listProductBuy.includes(index)){
            document.getElementById("Icon_"+index).style.backgroundColor = "yellow";
        }
    })
}

if(featuredProducts!=null && newArrivalsContent!=null){
    LoadProducts();
}

function AddCart(index){
    if(listProductBuy.includes(index)){
        listProductBuy=localStorage.getItem("ListProductBuy")==null?[]:localStorage.getItem("ListProductBuy").split("|");
        const indexElement = listProductBuy.indexOf(index.toString());
        if (indexElement > -1) { // only splice array when item is found
            listProductBuy.splice(indexElement, 1); // 2nd parameter means remove one item only
        }
        localStorage.setItem("ListProductBuy", listProductBuy.join('|'));
        document.getElementById("Icon_"+index).style.backgroundColor = "#e8f6ea";
    }
    else{
        listProductBuy=localStorage.getItem("ListProductBuy")==null?[]:localStorage.getItem("ListProductBuy").split("|");
        listProductBuy.push(index);
        localStorage.setItem("ListProductBuy", listProductBuy.join('|'));
        document.getElementById("Icon_"+index).style.backgroundColor = "yellow";
    }
}

function LoadShop(){
    shopContent.innerHTML='';
    let index=indexPageShop==1?0:8;
    for(;index<listProductFeatured.length;index++){
        let contentStar='';
        for(let i=0;i<listProductFeatured[index].Star;i++){
            contentStar+='<i class="fa fa-star"></i>';
        }

        let content=`<div class="pro" onclick=GoToSProduct(${index})>
                        <img src="${listProductFeatured[index].Img}" alt="">
                        <div class="des">
                            <span>${listProductFeatured[index].Brand}</span>
                            <h5>${listProductFeatured[index].Des}</h5>
                            <div class="star">
                               ${contentStar}
                            </div>
                            <h4>$${listProductFeatured[index].Price}</h4>
                        </div>
                        <a><i onclick="AddCart(${index})" id="Icon_${index}" class="fal fa-shopping-cart cart"></i></a>
                    </div>`;

        shopContent.innerHTML+=content;

        if(index>6 && indexPageShop==1){
            break;
        }

        listProductBuy=localStorage.getItem("ListProductBuy")==null?[]:localStorage.getItem("ListProductBuy").split("|");
        if(listProductBuy.includes(index)){
            document.getElementById("Icon_"+index).style.backgroundColor = "yellow";
        }
    }
}

if(shopContent!=null){
    LoadShop();
}

function PageShopPre(){
    if(indexPageShop==2){
        indexPageShop=1;
        LoadShop();
    }
}

function PageShopNext(){
    if(indexPageShop==1){
        indexPageShop=2;
        LoadShop();
    }
}

function SetPage2(){
    PageShopNext();
}

function SetPage1(){
    PageShopPre();
}

function GoToSProduct(index){
    window.location.href='sproduct.html?index='+index;
}

if(prodetails!=null){
    LoadSProduct();
    LoadSProductContent();
}

function LoadSProductContent(){
    let index=0;
    for(;index<listProductFeatured.length;index++){
        let contentStar='';
        for(let i=0;i<listProductFeatured[index].Star;i++){
            contentStar+='<i class="fa fa-star"></i>';
        }

        let content=`<div class="pro" onclick=GoToSProduct(${index})>
                        <img src="${listProductFeatured[index].Img}" alt="">
                        <div class="des">
                            <span>${listProductFeatured[index].Brand}</span>
                            <h5>${listProductFeatured[index].Des}</h5>
                            <div class="star">
                               ${contentStar}
                            </div>
                            <h4>$${listProductFeatured[index].Price}</h4>
                        </div>
                        <a><i onclick="AddCart(${index})" id="Icon_${index}" class="fal fa-shopping-cart cart"></i></a>
                    </div>`;

        contentSProduct.innerHTML+=content;

        if(index>2){
            break;
        }

        listProductBuy=localStorage.getItem("ListProductBuy")==null?[]:localStorage.getItem("ListProductBuy").split("|");
        if(listProductBuy.includes(index)){
            document.getElementById("Icon_"+index).style.backgroundColor = "yellow";
        }
    }
}

function LoadSProduct(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let indexprodetails=urlParams.get('index');
    let proudct=listProductFeatured[indexprodetails];
    let content=`<div class="single-pro-image">
                    <img src="${proudct.Img}" alt="" width="100%" id="MainImg">

                    <div class="small-img-group">
                        <div class="small-img-col">
                            <img src="img/products/f1.jpg" width="100%" class="small-img" alt="">
                        </div>
                        <div class="small-img-col">
                            <img src="img/products/f2.jpg" width="100%" class="small-img" alt="">
                        </div>
                        <div class="small-img-col">
                            <img src="img/products/f3.jpg" width="100%" class="small-img" alt="">
                        </div>
                        <div class="small-img-col">
                            <img src="img/products/f4.jpg" width="100%" class="small-img" alt="">
                        </div>
                    </div>
                </div>

                <div class="single-pro-details">
                    <h6>Home / T-Shirt</h6>
                    <h4>Men's Fashion T Shirt</h4>
                    <h2>${proudct.Price}</h2>
                    <select>
                        <option>Select Size</option>
                        <option>XL</option>
                        <option>XXL</option>
                        <option>Small</option>
                        <option>Large</option>
                    </select>
                    <input type="number" value="1">
                    <button class="normal" onclick="AddToCart(${indexprodetails})">Add To Cart</button>
                    <h4>Product Details</h4>
                    <span>Lorem ipsum dolor, sit amet consectetur 
                        adipisicing elit. Ipsam facilis iure deleniti nemo sequi placeat, 
                        magni magnam sapiente, quos, illo impedit! Corporis tenetur maxime facere reiciendis et commodi, accusantium quod?
                    </span>
                    
                </div>`;
    prodetails.innerHTML+=content;

    let MainImg=document.getElementById("MainImg");
    let smallImg=document.getElementsByClassName("small-img");

    smallImg[0].onclick=function(){
        MainImg.src=smallImg[0].src;
    }

    smallImg[1].onclick=function(){
        MainImg.src=smallImg[1].src;
    }

    smallImg[2].onclick=function(){
        MainImg.src=smallImg[2].src;
    }

    smallImg[3].onclick=function(){
        MainImg.src=smallImg[3].src;
    }
}

function AddToCart(index){
    listProductBuy=localStorage.getItem("ListProductBuy")==null?[]:localStorage.getItem("ListProductBuy").split("|");
    listProductBuy.push(index);
    localStorage.setItem("ListProductBuy", listProductBuy.join('|'));
}

if(cart!=null){
    LoadTableCart();
}

function LoadTableCart(){
    listProductBuy=localStorage.getItem("ListProductBuy")==null?[]:localStorage.getItem("ListProductBuy").split("|");

    listProductBuy.forEach((element)=>{
        let content=`<tr id="Product_${element}">
                        <td><a><i onclick="Delete(${element})" class="far fa-times-circle"></i></a></td>
                        <td><img src="${listProductFeatured[element].Img}" alt=""></td>
                        <td>${listProductFeatured[element].Des}</td>
                        <td>$${listProductFeatured[element].Price}</td>
                        <td><input id="Qty_${element}" type="number" value="1" onchange="ChangeTotalPrice(${element})"></td>
                        <td>$<span id="TotalSub_${element}">${listProductFeatured[element].Price}</span></td>
                    </tr>`;
        
        tableCart.innerHTML+=content;
        totalPrice+=listProductFeatured[element].Price;
        document.getElementById("TotalPrice_1").textContent="$"+totalPrice;
        document.getElementById("TotalPrice_2").textContent="$"+totalPrice;
    })
}

function ChangeTotalPrice(index){
    totalPrice=totalPrice-Number(document.getElementById("TotalSub_"+index).innerHTML.trim())
    document.getElementById("TotalSub_"+index).textContent=document.getElementById("Qty_"+index).value*listProductFeatured[index].Price;
    totalPrice+=document.getElementById("Qty_"+index).value*listProductFeatured[index].Price;
    document.getElementById("TotalPrice_1").textContent="$"+totalPrice;
    document.getElementById("TotalPrice_2").textContent="$"+totalPrice;
}

function Delete(index){
    listProductBuy=localStorage.getItem("ListProductBuy")==null?[]:localStorage.getItem("ListProductBuy").split("|");
    const indexElement = listProductBuy.indexOf(index.toString());
    if (indexElement > -1) { // only splice array when item is found
        listProductBuy.splice(indexElement, 1); // 2nd parameter means remove one item only
    }

    localStorage.setItem("ListProductBuy", listProductBuy.join('|'));
    totalPrice=totalPrice-Number(document.getElementById("TotalSub_"+index).innerHTML.trim());
    document.getElementById("TotalPrice_1").textContent="$"+totalPrice;
    document.getElementById("TotalPrice_2").textContent="$"+totalPrice;
    document.getElementById("Product_"+index).remove();
}

function Submit(){
    alert("Sucessfull");
    localStorage.removeItem("ListProductBuy");
    tableCart.innerHTML='';
}