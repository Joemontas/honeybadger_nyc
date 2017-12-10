const lamp = {
    wattage: 100,
    on: false,
    turnOff: function () {
        this.on = true;
    },
    status: function () {
        if (this.on) {
            console.log("the light is on");
        } else {
            console.log("The light is off");
        }
    }
}