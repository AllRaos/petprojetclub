class Shopping{
    closs(){
        root_shopping.innerHTML='';
    }
    render(){
        const products=localStorageUtil.getDerevo();
        let htmlCode='';
        let allprice=0;
        catalog.forEach(({id, name, price, img})=>{
        if(products.indexOf(id)!==-1){
        allprice+=Number(price);
        htmlCode+=`
        <tr>
        <td> <img class="table_img" src="${img}"></td>
        <td class="table_name">${name}</td>
        <td class="table_price">${price.toLocaleString()} грн.</td>
        </tr>
        `;
        }
        });
        const html=`
        <div class="table_conteiner">
        <table>${htmlCode}</table>
        <div class="close_but" onclick="shopPage.closs()">Close</div>
        <span>Загальна ціна: ${allprice} грн.</span>
        </div>
        `;
        root_shopping.innerHTML=html;
    }
}
const shopPage=new Shopping();
