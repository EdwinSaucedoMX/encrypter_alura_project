let [option, option_2] = document.querySelectorAll('.encrypt');
let contentBox = document.querySelector('.content-message');
let input = document.querySelector('.input-text');
let btnCopy = document.querySelector('.copy');
let loading = document.querySelector('.loading');

let readInput = true;
let isLoading = false;

/* **functions */

// copy to clipboard
const updateClipboard = (newClip) => {
    newClip = contentBox.innerText; // get the text from the content box
    navigator.clipboard.writeText(newClip).then(() => {
        /* clipboard successfully set */
        console.log('copied');
    }, () => {
        /* clipboard write failed */
        console.log('error');
    });
}

// encrypt/decrypt
const encrypt = (text) => {
    let output = '';
    if(option.checked){
        for(let char of text){
            switch(char){
                case 'a':
                    output += 'ai';
                    break;
                case 'e':
                    output += 'enter';
                    break;
                case 'i':
                    output += 'imes';
                    break;
                case 'o':
                    output += 'ober';
                    break;
                case 'u':
                    output += 'ufat';
                    break;
                default:
                    output += char;
            }
        }
    }
    else {
        output = text;
        while(output.includes('ai') || output.includes('enter') || output.includes('imes') || output.includes('ober') || output.includes('ufat')){
            output = output.replace(/ai/g, 'a');
            output = output.replace(/enter/g, 'e');
            output = output.replace(/imes/g, 'i');
            output = output.replace(/ober/g, 'o');
            output = output.replace(/ufat/g, 'u');
        }
    }
    output = output.replace(/\n\n/g, '\n'); // remove double line breaks
    return output;
};

// validate input
const validateInput = (event) => {
    const regex = /[a-z]/g;
    const regex2 = /[BackspaceEnterTab ]/g;
    if(regex2.test(event.key)  && !regex.test(event.key)){

        
        console.log('not allowed');
    }
    else {
        
        if(!isLoading) {
            loading.className+= ' show';
            btnCopy.className = 'copy';
            contentBox.className += ' hide';
            
            isLoading = true;
        }
        
        
        if(readInput) {
            setTimeout(function() {
                let {innerText: value} = input;
                btnCopy.className = value ? btnCopy.className+= ' show' : btnCopy.className = 'copy';
                loading.className = 'loading';
                contentBox.className = 'content-message';
                contentBox.innerText = `${encrypt(value)}`;
                isLoading = false;
                readInput = true;
            }, 2000);
            readInput = false;
        }
    }
}

/* **Events */
input.addEventListener('keyup', validateInput);
option.addEventListener('click', validateInput);
option_2.addEventListener('click', validateInput);
btnCopy.addEventListener('click', updateClipboard);
