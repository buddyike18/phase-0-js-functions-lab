// Function 1: calculateTax
function calculateTax(amount) {
    return amount * 0.10;
}

// Function 2: convertToUpperCase
function convertToUpperCase(text) {
    return text.toUpperCase();
}

// Function 3: findMaximum
function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}

// Function 4: isPalindrome
function isPalindrome(word) {
    const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedWord === cleanedWord.split('').reverse().join('');
}

// Function 5: calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice - (originalPrice * (discountPercentage / 100));
}

// Export functions for testing
module.exports = {
    calculateTax,
    convertToUpperCase,
    findMaximum,
    isPalindrome,
    calculateDiscountedPrice
};
