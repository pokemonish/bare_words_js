try {
    let self = this
    window.bareWords = new Proxy({}, {
        has: function(target, name) {
            return true
        },
        get: function(target, name) {
            return name in self ? self[name] : name
        },
    })
} catch(e) {
    console.error('Your browser doesn\'t support bare words.')
}
with(bareWords) {
    console.log(we, can, use, bare, words)
}
