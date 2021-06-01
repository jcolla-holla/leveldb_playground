// basically copied and pasted from LevelUp repo just to experiment with the library a bit and see how the db was stored/structured locally... https://github.com/Level/levelup 

const levelup = require('levelup')
const leveldown = require('leveldown')

// 1) Create our store
const db = levelup(leveldown('./testdb'))

// 2) Put a key & value
db.put('name', 'levelup', function (err) {
    if (err) return console.log('Ooops!', err) // some kind of I/O error

    // 3) Fetch by key
    db.get('name', function (err, value) {
        if (err) return console.log('Ooops!', err) // likely the key was not found

        // Ta da!
        console.log('name=' + value)
    })
})
