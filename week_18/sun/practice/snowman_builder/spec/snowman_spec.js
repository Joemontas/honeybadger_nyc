let Snowman = require('../snowman');

describe('Snowman', () => {
    let snowman;
    let name;

    beforeEach(() => {
        name = 'Olaf';
        snowman = new Snowman(name);
    });

    it('has a defined name', function () {
        expect
    })
    describe("#name", function() {
        it("name every snowman", function() {
    });

    describe("#carrotNose", function() {
        it("give a carrot nose to every snowman", function() {
    });

    describe("#stickArms", function() {
        expect(snowman.hasStickArms).toBe(true);
    });

    describe("#likeWarmHugs()", () => {
        describe('when snowmans name is Olaf', () => {
            it('returns true', () => {
                const result = snowman.likeWarmHugs();
        });

        it('returns true wjen snowman name is Olaf' () => {
            const result = snowman.likesWarmHugs();
            expect(result).toBe(true);
        })
    }) 
})