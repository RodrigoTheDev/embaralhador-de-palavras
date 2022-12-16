//código desenvolvido por @RodrigoTheDev com ajuda do post no Stack Overflow:
//https://stackoverflow.com/questions/3796786/random-number-generator-without-dupes-in-javascript


const insert_campo = document.querySelector('#insert-text-area')
const lim_campo = document.querySelector('#insert-size')
const result_campo = document.querySelector('#result')

let todasHashtags = [];
let gen_nums = [];

let selecionados = []

let lim = 5



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
        

        todasHashtags = String(insert_campo.value).split(' ')
        lim = parseInt(lim_campo.value)
        for(let i = 0; i < lim; i++) {
            // selecionados.push(get_rand(todasHashtags))
            result_campo.value += get_rand(todasHashtags) + ' '
    
        }

        console.log(selecionados)
        console.log(todasHashtags)

    } catch {
        alert('Algo deu errado')
        location.reload()
    }
}



