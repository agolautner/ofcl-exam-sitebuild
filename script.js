const currencies = [
    {
        title: "US Dollar",
        sub: "$",
        text: "USD"
    },
    {
        title: "Euro",
        sub: "€",
        text: "EUR"
    },
    {
        title: "Chinese Yuan",
        sub: "¥",
        text: "CNY"
    },
    {
        title: "Thai Baht",
        sub: "฿",
        text: "THB"
    },
    {
        title: "British Pound Sterling",
        sub: "£",
        text: "GBP"
    },
    {
        title: "Ghanaian Cedi",
        sub: "₵",
        text: "GHS"
    },
    {
        title: "Japanese Yen",
        sub: "￥",
        text: "JPY"
    },
    {
        title: "Polish Zloty",
        sub: "zł",
        text: "PLN"
    }
    
];

const loadEvent = () => {
    const rootElement = document.getElementById('root');
    currencies.map((currency, idx) => {
        rootElement.insertAdjacentHTML('beforeend', `
        <article class="currency-card">
            <div class="sub-container">
                <h2 class="currency-sub">${currency.sub}</h2>
            </div>
            
            <h3 class="currency-title">${currency.title}</h3>
            <h3 class="currency-text">${currency.text}</h3>

            <button class="currency-button">Save <span class="material-icons arrow">
            arrow_forward
            </span></button>
        </article>
        `)
    })
}

window.addEventListener('load', loadEvent);