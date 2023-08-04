    const convertButton = document.querySelector(".convert-button");
    const currencySelect = document.querySelector(".currencyValueSelect")
    const currencyFirtsSelect = document.querySelector(".currencyValue")

    function convertValues() {
        const inputCurrencyValue = document.querySelector(".input-currency").value
        const cyValueToConvert = document.querySelector(".currency-value-to-convert")
        const cyValueToConverted = document.querySelector(".currency-value")

        const realToday = 1.0
        const dolarToday = 4.75
        const euroToday = 5.19
        const bitcoinToday = 138245.38
        const libraEsterlinaToday = 6.06
        const renminbiYuanToday = 0.66
        const ieneToday = 0.033
        const dolarAustralianoToday = 3.18
        const francoSuicoToday = 5.43
        const dolarCanadenseToday = 3.57
        const pesoArgentinoToday = 0.017
        const liraTurcaToday = 0.18


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
            }).format(currencySelect / realToday)
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

        if (currencyFirtsSelect.value == "libraEsterlina") {
            cyValueToConvert.innerHTML = new Intl.NumberFormat('ja-JP', {
                style: 'currency',
                currency: 'GBP'
            }).format(inputCurrencyValue / libraEsterlinaToday)
        }

        if (currencyFirtsSelect.value == "renminbiYuan") {
            cyValueToConvert.innerHTML = new Intl.NumberFormat('ja-JP', {
                style: 'currency',
                currency: 'CNY'
            }).format(inputCurrencyValue / renminbiYuanToday)
        }

        if (currencyFirtsSelect.value == "iene") {
            cyValueToConvert.innerHTML = new Intl.NumberFormat('ja-JP', {
                style: 'currency',
                currency: 'JPY'
            }).format(inputCurrencyValue / ieneToday)
        }

        if (currencyFirtsSelect.value == "dolarAustraliano") {
            cyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'AUD'
            }).format(inputCurrencyValue / dolarAustralianoToday)
        }

        if (currencyFirtsSelect.value == "francoSuico") {
            cyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'CHF'
            }).format(inputCurrencyValue / francoSuicoToday)
        }

        if (currencyFirtsSelect.value == "dolarCanadense") {
            cyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'CAD'
            }).format(inputCurrencyValue / dolarCanadenseToday)
        }

        if (currencyFirtsSelect.value == "pesoArgentino") {
            cyValueToConvert.innerHTML = new Intl.NumberFormat('es-AR', {
                style: 'currency',
                currency: 'ARS'
            }).format(inputCurrencyValue / pesoArgentinoToday)
        }

        if (currencyFirtsSelect.value == "liraTurca") {
            cyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'TRY'
            }).format(inputCurrencyValue / liraTurcaToday)
        }




        // Select 02:

        if (currencySelect.value == "dolar") {
            cyValueToConverted.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(inputCurrencyValue / dolarToday)
        }

        if (currencySelect.value == "real") {
            cyValueToConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(inputCurrencyValue / realToday)
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

        if (currencySelect.value == "libraEsterlina") {
            cyValueToConverted.innerHTML = new Intl.NumberFormat('ja-JP', {
                style: 'currency',
                currency: 'GBP'
            }).format(inputCurrencyValue / libraEsterlinaToday)
        }

        if (currencySelect.value == "renminbiYuan") {
            cyValueToConverted.innerHTML = new Intl.NumberFormat('ja-JP', {
                style: 'currency',
                currency: 'CNY'
            }).format(inputCurrencyValue / renminbiYuanToday)
        }

        if (currencySelect.value == "iene") {
            cyValueToConverted.innerHTML = new Intl.NumberFormat('ja-JP', {
                style: 'currency',
                currency: 'JPY'
            }).format(inputCurrencyValue / ieneToday)
        }

        if (currencySelect.value == "dolarAustraliano") {
            cyValueToConverted.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'AUD'
            }).format(inputCurrencyValue / dolarAustralianoToday)
        }

        if (currencySelect.value == "francoSuico") {
            cyValueToConverted.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'CHF'
            }).format(inputCurrencyValue / francoSuicoToday)
        }

        if (currencySelect.value == "dolarCanadense") {
            cyValueToConverted.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'CAD'
            }).format(inputCurrencyValue / dolarCanadenseToday)
        }

        if (currencySelect.value == "pesoArgentino") {
            cyValueToConverted.innerHTML = new Intl.NumberFormat('es-AR', {
                style: 'currency',
                currency: 'ARS'
            }).format(inputCurrencyValue / pesoArgentinoToday)
        }

        if (currencySelect.value == "liraTurca") {
            cyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'TRY'
            }).format(inputCurrencyValue / liraTurcaToday)
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

        if (currencyFirtsSelect.value == "libraEsterlina") {
            inputPlaceholderValue = document.getElementsByName("valuePlaceholder")[0].placeholder = '£ 10.000,00';
        }

        if (currencyFirtsSelect.value == "renminbiYuan") {
            inputPlaceholderValue = document.getElementsByName("valuePlaceholder")[0].placeholder = '元 10.000,00';
        }

        if (currencyFirtsSelect.value == "iene") {
            inputPlaceholderValue = document.getElementsByName("valuePlaceholder")[0].placeholder = '¥ 10.000,00';
        }

        if (currencyFirtsSelect.value == "dolarAustraliano") {
            inputPlaceholderValue = document.getElementsByName("valuePlaceholder")[0].placeholder = 'A$ 10.000,00';
        }

        if (currencyFirtsSelect.value == "francoSuico") {
            inputPlaceholderValue = document.getElementsByName("valuePlaceholder")[0].placeholder = 'CHF 10.000,00';
        }

        if (currencyFirtsSelect.value == "dolarCanadense") {
            inputPlaceholderValue = document.getElementsByName("valuePlaceholder")[0].placeholder = 'CA$ 10.000,00';
        }

        if (currencyFirtsSelect.value == "pesoArgentino") {
            inputPlaceholderValue = document.getElementsByName("valuePlaceholder")[0].placeholder = '$ 10.000,00';
        }

        if (currencyFirtsSelect.value == "liraTurca") {
            inputPlaceholderValue = document.getElementsByName("valuePlaceholder")[0].placeholder = '10.000,00 TRY';
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

        if (currencyFirtsSelect.value == "libraEsterlina") {
            currencyTopName.innerHTML = ("Libra esterlina")
            currencyTopImg.src = 'assets/flagReinoUnido.png'
        }

        if (currencyFirtsSelect.value == "iene") {
            currencyTopName.innerHTML = ("Iene")
            currencyTopImg.src = 'assets/flagJapan.png'
        }

        if (currencyFirtsSelect.value == "dolarAustraliano") {
            currencyTopName.innerHTML = ("Dólar Australiano")
            currencyTopImg.src = 'assets/flagAustralia.png'
        }

        if (currencyFirtsSelect.value == "francoSuico") {
            currencyTopName.innerHTML = ("Franco Suíço")
            currencyTopImg.src = 'assets/flagSuica.png'
        }

        if (currencyFirtsSelect.value == "dolarCanadense") {
            currencyTopName.innerHTML = ("Dólar Canadense")
            currencyTopImg.src = 'assets/flagCanada.png'
        }

        if (currencyFirtsSelect.value == "pesoArgentino") {
            currencyTopName.innerHTML = ("Peso Argentino")
            currencyTopImg.src = 'assets/flagArgentina.png'
        }

        if (currencyFirtsSelect.value == "liraTurca") {
            currencyTopName.innerHTML = ("Lira Turca")
            currencyTopImg.src = 'assets/flagTurquia.png'
        }

        if (currencyFirtsSelect.value == "renminbiYuan") {
            currencyTopName.innerHTML = ("Renminbi (Yuan)")
            currencyTopImg.src = 'assets/flagChina.png'
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

        if (currencySelect.value == "libraEsterlina") {
            currencyName.innerHTML = ("Libra esterlina")
            currencyImg.src = 'assets/flagReinoUnido.png'
        }

        if (currencySelect.value == "iene") {
            currencyName.innerHTML = ("Iene")
            currencyImg.src = 'assets/flagJapan.png'
        }

        if (currencySelect.value == "dolarAustraliano") {
            currencyName.innerHTML = ("Dólar Australiano")
            currencyImg.src = 'assets/flagAustralia.png'
        }

        if (currencySelect.value == "francoSuico") {
            currencyName.innerHTML = ("Franco Suíço")
            currencyImg.src = 'assets/flagSuica.png'
        }

        if (currencySelect.value == "dolarCanadense") {
            currencyName.innerHTML = ("Dólar Canadense")
            currencyImg.src = 'assets/flagCanada.png'
        }

        if (currencySelect.value == "pesoArgentino") {
            currencyName.innerHTML = ("Peso Argentino")
            currencyImg.src = 'assets/flagArgentina.png'
        }

        if (currencySelect.value == "liraTurca") {
            currencyName.innerHTML = ("Lira Turca")
            currencyImg.src = 'assets/flagTurquia.png'
        }

        if (currencySelect.value == "renminbiYuan") {
            currencyName.innerHTML = ("Renminbi (Yuan)")
            currencyImg.src = 'assets/flagChina.png'
        }

        convertValues()

    }




    currencyFirtsSelect.addEventListener("change", currencyTopChange)
    currencySelect.addEventListener("change", currencyChange);
    convertButton.addEventListener("click", convertValues)
