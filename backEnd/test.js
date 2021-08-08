function test(x={}) {
    const { a = 'its an A', b = 'its a B', c = 0 } = x
    console.log(a)
    console.log(b)
    console.log(c)
}


test({a:"this is new A", c:100})
test()
function getRestaurants({
    filters = null,
    page = 0,
    restaurantsPerPage = 20,
} = {}) {
    console.log(filters)
    console.log(page)
    console.log(restaurantsPerPage)

}