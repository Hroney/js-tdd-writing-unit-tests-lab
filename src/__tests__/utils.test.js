// Your tests here
import { isPalindrome } from "../utils"

describe("isPalindrome", () => {
    it("Checks to see if a word is a palindrome", () => {
        const word = "racecar"

        const palindromeBool = isPalindrome(word)

        expect(palindromeBool).toBe(true)
    });
    it("Should return true for words with combinations of Upper and Lower case", () => {
        const word = "RacEcaR"

        const palindromeBool = isPalindrome(word)

        expect(palindromeBool).toBe(true)
    });
    it("Should return false for an empty string", () => {
        const word = ""

        const palindromeBool = isPalindrome(word)

        expect(palindromeBool).toBe(false)
    });
    it("Should throw and error if the word has non-alphabetic characters", () => {
        const word = "race1car"

        function testWord() {
            isPalindrome(word)
        }

        expect(testWord).toThrow(new Error('This word has non-alphabetic characters'))
    });
    it("Should throw an error if input isn't a string", () => {
        const word = true

        function testWord() {
            isPalindrome(word)
        }

        expect(testWord).toThrow(new Error('This word is not a string'))
    });
})