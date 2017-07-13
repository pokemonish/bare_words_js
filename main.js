try {
    let self = this
    window.bareWords = new Proxy({}, {
        has: function(target, name) {
            return !(name in self)
        },
        get: function(target, name) {
            return name
        },
    })
} catch(e) {
    console.error('Your browser doesn\'t support bare words.')
}
