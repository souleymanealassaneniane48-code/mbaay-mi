let abonnements=0;
const annonces=["Vente semences","Engrais","Location tracteur"];
const ul=document.getElementById("annonces");
annonces.forEach(a=>{
 let li=document.createElement("li");
 li.textContent=a;
 let b=document.createElement("button");
 b.textContent="S'abonner";
 b.onclick=()=>{
  abonnements++;
  localStorage.setItem("abonnements",abonnements);
  alert("Abonné !");
 };
 li.appendChild(b);
 ul.appendChild(li);
});