// aba -> true
// abb -> false
// null | undefine | "" -> null
// a(single letter) -> true
// 123 -> false
// 121 -> true
// Negative Number -121 -> true (ignore sign)
// other than string or number -> null
// Aba (case sensitivity) -> true
// "   aba   "(ignore spaces) --> true
// length > 10 --> null
//multiple inputs passed -> ignore rest

const { isPalindrome } = require("../src/tdd.js")

test("aba -> true", () => {
    expect(isPalindrome("aba")).toBe(true);
})

test("abb -> false", () => {
    expect(isPalindrome("abb")).toBe(false);
})

test("no input -> null", () => {
    expect(isPalindrome()).toBeNull();
})

test("null -> null", () => {
    expect(isPalindrome(null)).toBeNull();
})

test("single letter -> true", () => {
    expect(isPalindrome("a")).toBe(true);
})

test("123 -> false", () => {
    expect(isPalindrome(123)).toBe(false);
})

test("121 -> false", () => {
    expect(isPalindrome(121)).toBe(true);
})

test("-121 -> false", () => {
    expect(isPalindrome(-121)).toBe(true);
    expect(isPalindrome(-122)).toBe(false);
})

test("boolean -> null", () => {
    expect(isPalindrome(true)).toBeNull();
})

test("Aba -> true", () => {
    expect(isPalindrome("Aba")).toBe(true);
})

test("white space -> ignore white spaces", () => {
    expect(isPalindrome("   aba   ")).toBe(true);
    expect(isPalindrome("   abb   ")).toBe(false);
})

test("Length check", () => {
    expect(isPalindrome("aba")).toBe(true);
    expect(isPalindrome("abcdefghijklmnuioad")).toBeNull();
})