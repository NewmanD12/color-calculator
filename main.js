const prompt = require('prompt-sync')({sigint: true});

let combine_or_deconstruct = prompt('Please enter: \n1. Combine \n2. Deconstruct\n');

let invalid_input = 'Invalid input: Try again.'
let res = ''

if(combine_or_deconstruct.length > 1){
    combine_or_deconstruct = combine_or_deconstruct.toLowerCase()
} else if(combine_or_deconstruct.length === 1){
    if(combine_or_deconstruct === '1'){
        combine_or_deconstruct = 'combine'
    }   else if (combine_or_deconstruct === '2'){
        combine_or_deconstruct = 'deconstruct'
    }   else {
        console.log(invalid_input)
    }
}   else{
    console.log(invalid_input)
}

if (combine_or_deconstruct === 'combine'){
    let color_1 = prompt('Please enter your first color: ')
    let color_2 = prompt('Please enter your second color: ')
    color_1 = color_1.toLowerCase()
    color_2 = color_2.toLowerCase()

    if((color_1 === 'red' && color_2 === 'blue') || (color_1 === 'blue' && color_2 === 'red')){
        res += 'Purple'
    }   else if((color_1 === 'red' && color_2 === 'yellow') || (color_1 === 'yellow' && color_2 === 'red')){
        res += 'Orange'
    }   else if((color_1 === 'blue' && color_2 === 'yellow') || (color_1 === 'yellow' && color_2 === 'blue')){
        res += 'Green'
    }   else {
        console.log(invalid_input)
    }
}   else if (combine_or_deconstruct === 'deconstruct'){
    let color_to_deconstruct = prompt('Please enter your color to deconstruct: ')
    console.log(color_to_deconstruct)
    color_to_deconstruct = color_to_deconstruct.toLowerCase()
    if (color_to_deconstruct === 'purple'){
        res = 'red + blue'
    }   else if (color_to_deconstruct === 'orange'){
        res = 'red + yellow'
    }   else if (color_to_deconstruct === 'green'){
        res = 'blue + yellow'
    }   else {
        console.log(invalid_input)
    }
}   else {
    console.log(invalid_input)
}

if (res){
    console.log('Your result is: ' + res)
}


// Stretch goal

let color_or_colors = prompt('Enter your color or colors separated by a space: ')

let res2 = ''

color_or_colors = color_or_colors.split(' ')

if (color_or_colors.length === 1){
    color_or_colors = color_or_colors[0].toLowerCase()
    console.log(color_or_colors)
    if (color_or_colors === 'purple'){
        res2 = 'red + blue'
    }   else if (color_or_colors === 'orange'){
        res2 = 'red + yellow'
    }   else if (color_or_colors === 'green'){
        res2 = 'blue + yellow'
    }   else {
        console.log(invalid_input)
    }
}   else if (color_or_colors.length === 2){
        if((color_or_colors[0] === 'red' && color_or_colors[1] === 'blue') || (color_or_colors[0] === 'blue' && color_or_colors[1] === 'red')){
                res2 += 'Purple'
        }   else if((color_or_colors[0] === 'red' && color_or_colors[1] === 'yellow') || (color_or_colors[0] === 'yellow' && color_or_colors[1] === 'red')){
                res2 += 'Orange'
        }   else if((color_or_colors[0] === 'blue' && color_or_colors[1] === 'yellow') || (color_or_colors[0] === 'yellow' && color_or_colors[1] === 'blue')){
                res2 += 'Green'
        }   else {
                console.log(invalid_input)
        }
}   else {
    console.log(invalid_input)
}

if (res2) {
    console.log(res2)
}
