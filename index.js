const express = require('express');
require('dotenv').config();
const port = 5000;

const app = express();

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
    {
        name: "Brazil",
        population: 212559417,
        image: "https://example.com/brazil.jpg",
        landmass: 8515767,
        landmark: "Christ the Redeemer"
    },
    {
        name: "India",
        population: 1380004385,
        image: "https://example.com/india.jpg",
        landmass: 3287263,
        landmark: "Taj Mahal"
    },
    {
        name: "China",
        population: 1439323776,
        image: "https://example.com/china.jpg",
        landmass: 9596961,
        landmark: "Great Wall of China"
    },
    {
        name: "Russia",
        population: 145934462,
        image: "https://example.com/russia.jpg",
        landmass: 17098242,
        landmark: "Red Square"
    },
    {
        name: "South Africa",
        population: 59308690,
        image: "https://example.com/southafrica.jpg",
        landmass: 1221037,
        landmark: "Table Mountain"
    }
];

app.get('/', (req, res) => {
    console.log('Hello World');
    res.json(countries);
});

app.listen(port, () => {
    console.log(`server started at port ${port}`);
});