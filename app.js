// DOM elements
const convertingMessage = document.querySelector('.message');
const error = document.querySelector('.error');
const fromSelect = document.getElementById('from-currency');
const toSelect = document.getElementById('to-currency');
const convertBtn = document.querySelector('.convert-button');
const amountInput = document.getElementById('currency-input');
const toConvertSpan = document.querySelector('.to-convert');
const convertedSpan = document.querySelector('.converted');

// Event listener for conversion
convertBtn.addEventListener('click', async () => {
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;
    const amount = parseFloat(amountInput.value);

    // Validate input
    if (!fromCurrency || !toCurrency || isNaN(amount)) {
        error.textContent = 'Please enter a valid amount and select both currencies';
        error.classList.remove('hide');
        convertingMessage.classList.add('hide');
        return;
    }

    // Hide previous messages
    error.classList.add('hide');
    convertingMessage.classList.add('hide');

    try {
        // Replace with your ExchangeRate API key
        const apiKey = 'dbdc78b4c4f6dfa82d1e137c';
        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.result === 'success') {
            const convertedAmount = data.conversion_result.toFixed(2);
            toConvertSpan.textContent = `${amount} ${fromCurrency}`;
            convertedSpan.textContent = `${convertedAmount} ${toCurrency}`;
            convertingMessage.classList.remove('hide');
        } else {
            throw new Error(data['error-type'] || 'Conversion failed');
        }

    } catch (err) {
        console.error(err);
        error.textContent = 'An error occurred while converting. Please try again.';
        error.classList.remove('hide');
    }
});

// Fetch currencies and populate dropdowns
async function fetchCurrencies() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,currencies,flags');
        if (!response.ok) throw new Error('Network response was not ok');
        const countries = await response.json();

        const currencyMap = new Map();

        countries.forEach(country => {
            if (country.currencies) {
                Object.entries(country.currencies).forEach(([code, currency]) => {
                    if (!currencyMap.has(code)) {
                        currencyMap.set(code, {
                            code: code,
                            name: currency.name,
                            flag: country.flags?.png || country.flags?.svg || ''
                        });
                    }
                });
            }
        });

        // Sort alphabetically
        const sortedCurrencies = Array.from(currencyMap.values()).sort((a, b) => a.code.localeCompare(b.code));

        sortedCurrencies.forEach(currency => {
            const optionText = `${currency.code} - ${currency.name}`;

            const optionFrom = document.createElement('option');
            optionFrom.value = currency.code;
            optionFrom.textContent = optionText;
            optionFrom.dataset.flag = currency.flag;
            fromSelect.appendChild(optionFrom);

            const optionTo = document.createElement('option');
            optionTo.value = currency.code;
            optionTo.textContent = optionText;
            optionTo.dataset.flag = currency.flag;
            toSelect.appendChild(optionTo);
        });

        // Hide messages initially
        convertingMessage.classList.add('hide');
        error.classList.add('hide');

    } catch (err) {
        console.error('Error fetching currencies', err);
        error.textContent = 'Unable to load currency data';
        error.classList.remove('hide');
    }
}


fetchCurrencies();
