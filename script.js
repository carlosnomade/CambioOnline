const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currencyValueSelect")
const currencyFirtsSelect = document.querySelector(".currencyValue")

async function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const cyValueToConvert = document.querySelector(".currency-value-to-convert")
    const cyValueToConverted = document.querySelector(".currency-value")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => {
        return response.json()
    })
    console.log(data)
    
    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const bitcoinToday = data.BTCBRL.high
 

    // Select 01:


    if (currencyFirtsSelect.value == "dolar") {
        cyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencyFirtsSelect.value == "real") {
        cyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format( inputCurrencyValue  )
    }

    if (currencyFirtsSelect.value == "euro") {
        cyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencyFirtsSelect.value == "bitcoin") {
        cyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue / bitcoinToday)
    }

    // Select 02:

    if (currencySelect.value == "dolar") {
        cyValueToConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        cyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "bitcoin") {
        cyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue / bitcoinToday)
    }

    // Value PlaceHolder:

    if (currencyFirtsSelect.value == "dolar") {
        inputPlaceholderValue = document.getElementsByName("valuePlaceholder")[0].placeholder = 'USD$ 10.000,00';
    }

    if (currencyFirtsSelect.value == "real") {
        inputPlaceholderValue = document.getElementsByName("valuePlaceholder")[0].placeholder = 'R$ 10.000,00';
    }

    if (currencyFirtsSelect.value == "euro") {
        inputPlaceholderValue = document.getElementsByName("valuePlaceholder")[0].placeholder = '10.000,00 €';
    }

    if (currencyFirtsSelect.value == "bitcoin") {
        inputPlaceholderValue = document.getElementsByName("valuePlaceholder")[0].placeholder = '10.000,00 ₿TC';
    }
}
// on top flat:

function currencyTopChange() {
    const currencyTopName = document.getElementById("currency-top-name")
    const currencyTopImg = document.getElementById("currency-top-img")

    if (currencyFirtsSelect.value == "real") {
        currencyTopName.innerHTML = ("Real Brasileiro")
        currencyTopImg.src = 'assets/flagBrasil.png'
    }

    if (currencyFirtsSelect.value == "dolar") {
        currencyTopName.innerHTML = ("Dólar Americano")
        currencyTopImg.src = 'assets/flagUnitedStates.png'
    }

    if (currencyFirtsSelect.value == "euro") {
        currencyTopName.innerHTML = ("Euro")
        currencyTopImg.src = 'assets/flagUniaoEuropeia.png'
    }

    if (currencyFirtsSelect.value == "bitcoin") {
        currencyTopName.innerHTML = ("Bitcoin")
        currencyTopImg.src = 'assets/btc2.png'
    }

    convertValues()
    currencyChange()
}


// low flat:

function currencyChange() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (currencySelect.value == "real") {
        currencyName.innerHTML = ("Real Brasileiro")
        currencyImg.src = 'assets/flagBrasil.png'
    }

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = ("Dólar Americano")
        currencyImg.src = 'assets/flagUnitedStates.png'
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = ("Euro")
        currencyImg.src = 'assets/flagUniaoEuropeia.png'
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = ("Bitcoin")
        currencyImg.src = 'assets/btc2.png'
    }

    convertValues()

}




currencyFirtsSelect.addEventListener("change", currencyTopChange)
currencySelect.addEventListener("change", currencyChange);
convertButton.addEventListener("click", convertValues)
