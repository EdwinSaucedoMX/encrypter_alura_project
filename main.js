let option = document.querySelector('#encrypt');
let contentBox = document.querySelector('.content-message');
let input = document.querySelector('.input-text');
let btnCopy = document.querySelector('.copy');
let loading = document.querySelector('.loading');

let readInput = true;
let isLoading = false;

input.addEventListener('keydown', function(e) {
    if(!isLoading) {
        loading.className+= ' show';
        btnCopy.className = 'copy';
        isLoading = true;
    }
   

    if(readInput) {
        setTimeout(function() {
            btnCopy.className+= ' show';
            loading.className = 'loading';
            contentBox.className = 'content-message';
            contentBox.textContent = input.value;
            console.log(input.value);
            isLoading = false;
            readInput = true;
        }, 2000);
        readInput = false;
    }
});


