function indexOfIgnoreCase(s1, s2) {
    // write your code here
    let i = 0;
    let flag = false; 

    for (let j = 0; j < s1.length; j++) {
        if (s1.toLowerCase().charAt(j) === s2.toLowerCase().charAt(i)) {
            i++; 
        } else {
            j -= i; 
            i = 0; 
        }

        if (i === s2.length) { 
            flag = true; 
            return j - i + 1 
        }
    }

    if (!flag) {
        return -1
    }
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
