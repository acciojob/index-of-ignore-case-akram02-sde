function indexOfIgnoreCase(s1, s2) {
    // write your code here
    let s1 = s1.toLowerCase()
    let s2 = s2.toLowerCase()

    if(s1.includes(s2)){
        return s1.indexOf(s2)
    }
    else{
        return -1
    }
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
