let ism=prompt("Ism kiriting")
let harf=prompt("harf kiriting")

if(ism.toLocaleLowerCase().includes(harf.toLowerCase())){
    alert(ism+ " ismida "  + harf+  "harf mavjud"  );
}
else{
    alert(ism+"ismida" +harf+ "harfi mavju emas")
}