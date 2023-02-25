class Header{
koshik(){
    shopPage.render();
}    
render(chislo){
    let html=`
    <div class="head_bar">
    <div class="icon" onclick="headerPage.koshik();">Товарів у кошику ${chislo}</div>
    </div>
    `;
    root_header.innerHTML=html;
}
}
const headerPage= new Header();
const kilkTovar=localStorageUtil.getDerevo();
headerPage.render(kilkTovar.length);
