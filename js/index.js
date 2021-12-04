const burgerLogo =document.querySelector('.burger-logo')
const burgerMenu = document.querySelector('.burger-menu')

burgerLogo.addEventListener("click", (ev)=>{
    burgerMenu.classList.toggle('hide')
    setTimeout(()=>{burgerMenu.classList.toggle('show-menu')},0) 
})

const productInfo={
    'name':"Canon EOS 5D Mark III Body",
    'describtion':"Полнокадровая цифровая зеркальная камера, предназначенная для опытных любителей, профессиональных фотографов.",
    'price': "3 200,00 ",
    'currency': "руб."
}

class ProductCard {
    constructor(name,describtion,price,currency){
        this.name=name,
        this.describtion=describtion,
        this.price=price,
        this.currency=currency
    }

    createProductCard(){
        const contentArea= document.querySelector('.content')
        const div =document.createElement('div');
        div.classList.add('product-card')
        div.innerHTML=`
        <img src="./assets/image 2.png" alt="">      
        <div class="product-info">
            <div class="product-info__title">${this.name}</div>
            <div class="product-info__describtion">${this.describtion}</div>
        </div>
         <div class="product-price">         
            <div class="line_standart"></div>
            <div class="price">
                <div>${this.price}<span>${this.currency}</span></div>
                <img src="./assets/shopping-cart.svg" alt=""/>
            </div>
        </div>
        `
        contentArea.append(div)
    }
}

const countProductCard =10
for (let i=0;i<countProductCard;i++){
    const newCard= new ProductCard(productInfo.name,productInfo.describtion,productInfo.price,productInfo.currency)
    newCard.createProductCard()
}