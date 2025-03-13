const app  = require('express')(); 
require('dotenv').config();
// const port = 5000;
const port = process.env.port || 5000
// const app = express();

const countries = [
    {
        name: "United States",
        population: 331002651,
        image: "https://example.com/usa.jpg",
        landmass: 9833520,
        landmark: "Statue of Liberty"
    },
    {
        name: "Canada",
        population: 37742154,
        image: "https://example.com/canada.jpg",
        landmass: 9984670,
        landmark: "CN Tower"
    },
    {
        name: "France",
        population: 65273511,
        image: "https://example.com/france.jpg",
        landmass: 551695,
        landmark: "Eiffel Tower"
    },
    {
        name: "Japan",
        population: 126476461,
        image: "https://example.com/japan.jpg",
        landmass: 377975,
        landmark: "Mount Fuji"
    },
    {
        name: "Australia",
        population: 25499884,
        image: "https://example.com/australia.jpg",
        landmass: 7692024,
        landmark: "Sydney Opera House"
    },
];

const banks = [
    {
        name: "Bank of America",
        headquarters: "USA",
        image: "https://example.com/bankofamerica.jpg",
        landmark: "Bank of America Tower"
    },
    {
        name: "JPMorgan Chase",
        headquarters: "USA",
        image: "https://example.com/jpmorganchase.jpg",
        landmark: "JPMorgan Chase Tower"
    },
    {
        name: "Wells Fargo",
        headquarters: "USA",
        image: "https://example.com/wellsfargo.jpg",
        landmark: "Wells Fargo Center"
    },
    {
        name: "Citibank",
        headquarters: "USA",
        image: "https://example.com/citibank.jpg",
        landmark: "Citigroup Center"
    },
    {
        name: "Goldman Sachs",
        headquarters: "USA",
        image: "https://example.com/goldmansachs.jpg",
        landmark: "Goldman Sachs Tower"
    },
    {
        name: "Morgan Stanley",
        headquarters: "USA",
        image: "https://example.com/morganstanley.jpg",
        landmark: "Morgan Stanley Building"
    },
];

const foods = [
    {
        name: "Pizza",
        image: "https://example.com/pizza.jpg",
        origin_country: "Italy",
        famous_city: "Naples"
    },
    {
        name: "Sushi",
        image: "https://example.com/sushi.jpg",
        origin_country: "Japan",
        famous_city: "Tokyo"
    },
    {
        name: "Tacos",
        image: "https://example.com/tacos.jpg",
        origin_country: "Mexico",
        famous_city: "Mexico City"
    },
    {
        name: "Croissant",
        image: "https://example.com/croissant.jpg",
        origin_country: "France",
        famous_city: "Paris"
    },
    {
        name: "Burger",
        image: "https://example.com/burger.jpg",
        origin_country: "United States",
        famous_city: "New York"
    },
    {
        name: "Paella",
        image: "https://example.com/paella.jpg",
        origin_country: "Spain",
        famous_city: "Valencia"
    },
];

// Corrected Routes
app.get('/api1', (req, res) => {
    res.json(countries);
});

app.get('/api2', (req, res) => {
    res.json(banks);
});

app.get('/api3', (req, res) => {
    res.json(foods);
});

// Home Route
app.get('/', (req, res) => {
    res.sendFile( __dirname +'/public/index.html')
});

// Start Server
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
