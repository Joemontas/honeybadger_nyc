let Snowman = require('../snowman');

describe('Snowman', () => {
    let snowm;

    beforeEach(() => {
        snowman = new Snowman();
    });

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
        it('returns true wjen snowman name is Olaf' () => {
            const result = snowman.likesWarmHugs();
            expect(result).toBe(true);
        })
    }) 
})