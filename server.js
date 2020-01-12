const express = require('express');

const app = express();

app.get('/api/designs', (req,res) => {
    const designs = [
        {id: 1, categoryId: 1, projectName: 'firstAlbum', figureName: 'woori.png'},
        {id: 2, categoryId: 1, projectName: 'hearts/25', figureName: 'hearts.jpg' },
        {id: 3, categoryId:2, projectName: 'privateCruise', figureName: 'privateCruise1.jpg'}
    ]
    res.json(designs);
})

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))