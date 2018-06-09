const express = require('express');
const app = express();
const Graph = require('node-dijkstra');

app.get('/', (req, res) => {
    const d = new Graph({
        A: {
            B:25,
            C:5,
            F:20
        },
        B: {
            A: 25,
            E: 10,
            F: 5
        },
        C: {
            A: 5,
            D: 5,
            F: 5
        },
        D: {
            C: 5,
            E: 30,
            F: 5
        },
        E: {
            B: 10,
            D: 30,
            F: 20
        },
        F: {
            A: 20,
            B: 5,
            C: 5,
            D: 5,
            E: 20
        },
    })
    console.log(d.path('A', 'E'));
    res.send(d.path('A', 'E'))
})
app.listen(3000)