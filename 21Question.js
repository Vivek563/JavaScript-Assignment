// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

let input = 'September';

if(input=='September' || input=='October' || input=='November'){
    console.log('Season is Autumn');
}
else if(input=='December' || input=='January' || input=='February'){
    console.log('Season is Winter');
}
else if(input=='March' || input=='April' || input=='May'){
    console.log('Season is Spring');
}
else if(input=='June' || input=='July' || input=='August'){
    console.log('Season is Summer');
}
else
{
    console.log('Invalid input');
}