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
        contentBox.className += ' hide';

        isLoading = true;
    }
   

    if(readInput) {
        setTimeout(function() {
            let {value} = input;
            btnCopy.className = value ? btnCopy.className+= ' show' : btnCopy.className = 'copy';
            loading.className = 'loading';
            contentBox.className = 'content-message';
            contentBox.innerHTML = `${value}`;
            console.log(input.value);
            isLoading = false;
            readInput = true;
        }, 2000);
        readInput = false;
    }
});


