//transform

function groupAdultsByAgeRange(arr, n) {
    if (arr.length = 0) {
        let result = []
    }
    else{
        let result = arr.filte(age => age >= n)
    }
    return result
}

module.exports =  { groupAdultsByAgeRange }