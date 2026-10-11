const maskEmail = (email) => {
    const firstLetter = email[0]
    const atIndex = email.indexOf("@")
    const lastLetter = email[atIndex - 1]
    const emailDomain = email.slice(atIndex, email.length)
    const restLetter = email.slice(1, atIndex - 1)
    const maskedLetter = restLetter.replace(/./g, "*")
    return firstLetter + maskedLetter + lastLetter + emailDomain
}

const email = "bimbom@hama.com"

console.log(maskEmail("apple.pie@example.com"))
console.log(maskEmail("freecodecamp@example.com"))
console.log(maskEmail("info@test.dev"))
console.log(maskEmail("user@domain.orgm"))
console.log(maskEmail(email))
