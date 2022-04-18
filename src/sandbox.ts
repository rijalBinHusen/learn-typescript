let greet: Function;

// greet = "HEllo"
greet = () => {
    console.log("Hello again!")
}

const add = (a: number, b: number, c?: number | string) => {
    console.log(a + b)
    console.log(c)
}

add(3, 77, "test")