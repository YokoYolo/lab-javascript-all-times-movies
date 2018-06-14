/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

function ratesAverage (){
    var sum = movies.reduce(function (sum, placeholder) {
      return Number(sum) + Number (placeholder.rate);
      }, 0 );
     var avgratesAverage = Math.round(sum/ movies.length * 100) / 100;
    
    return avgratesAverage
    }
    
    ratesAverage ()
    


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
