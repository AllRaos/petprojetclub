class LocalStorageUtil{
constructor(){
    this.keyName='derevo';
}
getDerevo(){
    const derevoLocalStorage=localStorage.getItem(this.keyName);
     if (derevoLocalStorage!==null) {
        return JSON.parse(derevoLocalStorage);
     }
    return []; 
        
    
}
putDerevo(id){
let derevo= this.getDerevo();
let pushDerevo=false;
const index=derevo.indexOf(id);
 if (index===-1) {
  derevo.push(id); 
  pushDerevo=true;  
  }
   else{
    derevo.splice(index, 1);
    }
localStorage.setItem(this.keyName , JSON.stringify(derevo));
return { pushDerevo, derevo }
}
}
const localStorageUtil=new LocalStorageUtil();
