// Your code here
export function isPalindrome(word) {
    if (word === "") { return false }
    if (typeof word !== typeof "string") {
        throw new Error('This word is not a string')
    }
    else if (/^[A-Za-z]+$/.test(word)) {
        let revereseWord = word.split("").reverse().join("")
        if (word.toLowerCase() === revereseWord.toLowerCase()) {
            return true
        } else {
            return false
        }
    } else {
        throw new Error('This word has non-alphabetic characters')
    }

}