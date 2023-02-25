class Products{
    constructor(){
        this.activeClassName='knopka_active';
        this.labelAdd='Додати у кошик';
        this.labelRemove='Видалити з кошику';
    }
    sendIdToLocalStorage(element, id){
        const { pushDerevo, derevo }=localStorageUtil.putDerevo(id);
        if (pushDerevo) {
            element.classList.add(this.activeClassName);
            element.innerHTML=this.labelRemove;
        } else {
            element.classList.remove(this.activeClassName);
            element.innerHTML=this.labelAdd;
        }
        headerPage.render(derevo.length);

    }
    render () {
        const products=localStorageUtil.getDerevo();
        let htmlCode='';
        catalog.forEach(({id, name, img, price})=>{
            let activeText='';
            let activeClass='';
            if (products.indexOf(id)===-1) {
             activeText=this.labelAdd;
            } else {
              activeClass=' '+this.activeClassName;
              activeText=this.labelRemove;
            }
            htmlCode+=`
            <li class="son_conteiner">
             <span>${name}</span>
             <img class="kartinka" src="${img}">
             <span>${price} грн.</span>
             <button class="knopka${activeClass}" onclick="page.sendIdToLocalStorage(this, '${id}');">${activeText}</button>
            </li>
            `;
        });
        const html=`
        <ul class="father_contein">
        ${htmlCode}
        </ul>
        `;
        root_products.innerHTML=html;
    }
    
}
const page=new Products();
page.render();