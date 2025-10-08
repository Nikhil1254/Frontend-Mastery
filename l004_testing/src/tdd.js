function isPalindrome(str) {
    if (typeof str !== "string" && typeof str !== "number")
        return null;

    let newStr;
    if (typeof str === "number")
        newStr = Math.abs(str) + "";
    else
        newStr = str;

    newStr = newStr.toLowerCase().trim();
    if (newStr.length > 10)
        return null;

    let si = 0, ei = newStr.length - 1;
    while (si < ei) {
        if (newStr.charAt(si) !== newStr.charAt(ei))
            return false;
        si++;
        ei--;
    }
    return true;
}


module.exports = {
    isPalindrome
}