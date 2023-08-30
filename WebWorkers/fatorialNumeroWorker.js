self.addEventListener("message", function(event) {
    const inputNumber = event.data;
    let fatorialNumber = 1;

    for (let i = 2; i <= inputNumber; i++) {
        fatorialNumber = i * fatorialNumber;
    }

    self.postMessage(fatorialNumber);
});


