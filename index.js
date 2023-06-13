// const formData = new FormData(document.querySelector('form'))
// const inputValue = formData.post("Nome")
let form = {};
let func = () =>{
var els = document.getElementsByClassName('inputUser');
for(el of els){
    form[el.name] = el.value;
}
// var outputs = document.getElementsByClassName("out");
var outputs = document.getElementById("table");
console.log(outputs);
// outputs.out1.innerHTML = form.Nome;
// outputs.out2.innerHTML = form.Email;
// outputs.out3.innerHTML = form.Telefone;
// outputs.out4.innerHTML = form.Endereco;
outputs.innerHTML += '<tr><td class="out" id="out1">'
+form.Nome+'</td><td class="out" id="out2">'
+form.Email+'</td><td class="out" id="out3">'
+form.Telefone+'</td><td class="out" id="out4">'
+form.Endereco+'</td></tr>'; 

}

function funcEnviar(){
  alert("Form enviado!")
}

