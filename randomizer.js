//código desenvolvido por @RodrigoTheDev com ajuda do post no Stack Overflow:
//https://stackoverflow.com/questions/3796786/random-number-generator-without-dupes-in-javascript


const insert_campo = document.querySelector('#insert-text-area')
const lim_campo = document.querySelector('#insert-size')
const vezes_campo = document.querySelector('#insert-ammount')
const result_campo = document.querySelector('#result')

//funções de SITE
function novaAba(url) {
    window.open(url, '_blank').focus();
}

function copiar() {
    let copyText = result_campo.value

// Copy the text inside the text field
    navigator.clipboard.writeText(copyText);

    // Alert the copied text
    alert("Copiado com sucesso" );
}

function copiar_advanced() {
    navigator.clipboard.writeText(advanced_copy)
}


let todasHashtags = [];
let gen_nums = [];
let advanced_copy = ""
let selecionados = []




//função que verifica se elemento existe no array
function in_array(array, el) {
   for(let i = 0 ; i < array.length; i++) 
       if(array[i] == el) return true;
   return false;
}

//função recursiva que gera número aleatório
function get_rand(array) {
    let rand = array[Math.floor(Math.random()*array.length)];
    //verifica se o elemento no índice gerado já existe na lista gen_nums
    if(!in_array(gen_nums, rand)) {
        //caso não exista previamente, ele salva no array e finaliza função
        gen_nums.push(rand); 
        return rand;
    }
    //caso contrário, a função recomeça
    return get_rand(array);
}

function reset() {
    selecionados = []
    gen_nums = []
    result_campo.value = ' '
}


function embaralhar() {
    try {
        reset()
        lim = parseInt(lim_campo.value)
        todasHashtags = String(insert_campo.value).split(' ')

            
            for(let j = 0; j < lim; j++) {
                // selecionados.push(get_rand(todasHashtags))
                result_campo.value += get_rand(todasHashtags) + ' '
            }


    } catch {
        alert('algo deu errado')
        location.reload()
    }
}

function embaralhar_add() {
    try {
        reset()
        let texto = ""
        lim = parseInt(lim_campo.value)
        todasHashtags = String(insert_campo.value).split(' ')
    
            
        for(let j = 0; j < lim; j++) {
            // selecionados.push(get_rand(todasHashtags))
            texto += get_rand(todasHashtags) + ' '
        }
        result_campo.append(document.createElement('p').innerHTML = texto+'\n')
        advanced_copy += texto + ' '
        result_campo.append(document.createElement('br'))
    } catch {
        alert('erro')
    }
}

function embaralhar_advanced() {
    reset()
    advanced_copy = ""
    ammount = parseInt(vezes_campo.value)

    for(let i = 0; i < ammount; i++) {
        embaralhar_add()
    }

}
