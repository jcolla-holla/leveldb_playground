// hardcoded testing adding a JSON object to the levelup DB just as an experiment

const levelup = require('levelup')
const leveldown = require('leveldown')

const db = levelup(leveldown('./testdb'))

db.put("testObj2", { id: 3, description: "foo bar", message: "hey this is a message record test2" }, function (err) {
    if (err) return console.log('Ooops!', err) // some kind of I/O error

    // 3) Fetch by key
    db.get('testObj2', function (err, value) {
        if (err) return console.log('Ooops!', err) // likely the key was not found

        // Ta da!
        console.log('name=' + JSON.stringify(value))
    })
})