document.addEventListener( 'DOMContentLoaded', function(){
   
    document.querySelector('#btn').addEventListener('click',function(){
       let text = document.querySelector('#texto').value;
       document.querySelector('#result').innerHTML = upper(text);
    });
    
    function upper(text){
        return text.toUpperCase();
    } 

    document.querySelector('#copy-btn').addEventListener('click',function(){
        
        document.querySelector('#result').value;
        copyToClipboard()
    });

    function copyToClipboard() {

        var copyText = document.getElementById("result").textContent;
        navigator.clipboard.writeText(copyText)
        .then(function() {
        alert("Texto copiado para a área de transferência!");
        })
        .catch(function() {
        alert("Não foi possível copiar o texto para a área de transferência.");
        });
    }
} )