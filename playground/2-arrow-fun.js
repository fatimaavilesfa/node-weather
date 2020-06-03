// const square = function (x) {
//     return x * x
// }

//const square = (x) => x * x;
//console.log(square(7))

const event = {
    name: 'Movie night', 
    guestList: ['Khety', 'Alejandro', 'Fatima'],
    printGuestList() {
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList();