import test from "@playwright/test";

test('my test', async () => {

    const numBracket = [1, 2, 3, 4, 5];

    console.log(numBracket.reduce((sum, total) => {

        console.log(`sum is ${sum} and total is ${total}`)
        return sum + total


    }, 0))


    numBracket.find(raj => raj === 2)

    const vinit = numBracket.map(raj => raj * 2)
    console.log(vinit);
    console.log(numBracket);

    numBracket.forEach(raj => {

        console.log(raj * 2);
    })
    console.log(numBracket);

}


)


