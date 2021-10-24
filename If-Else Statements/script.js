const age = 27
const isFemale = true
const driverStatus = "bob"
const firstName = "Frits"
const totalAmount = 21

if (age <= 18) {
    console.log("U mag niet naar binnen!")
} else if (isFemale == false) {
    console.log("U mag niet naar binnen.")
} else {
    console.log("U mag naar binnen!")
}

if (driverStatus == "bob") {
    console.log("u mag rijden!")
} else {
    console.log("U mag niet rijden")
}

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting op bier")
} else {
    console.log("Je betaalt de normale prijs voor je bier")
}

if (firstName == "Sarah" || firstName == "Bram") {
    console.log("Haal je gratis biertje op bij de bar!")
} else {
    console.log("Helaas heet je geen Bram of Sarah!")
}

if (totalAmount >= 100) {
    console.log("Je krijgt een gratis fles champagne!")
} else if (totalAmount >= 50) {
    console.log("Je krijgt een gratis portie nacho's!")
} else if (totalAmount >= 25) {
    console.log("Je krijg gratis (vega)bitterballen!")
} else { console.log("Bestel meer om in aanmerking te komen voor gratis eten&drinken!") }