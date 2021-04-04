import sel from '../../data/selectors';
import exp from '../../data/expected.json';
describe('My Little Hero', function () {

    describe('Getting to the page', function () {

        before('Open App', function () {
            browser.url('');
        })

        it('TC-001 Title is correct ', function () {

            let title = browser.getTitle();
            browser.pause(2000);
            expect(title).toEqual(exp.title);
        });

        it('TC-002 Header is present ', function () {
            let header = $(sel.header).isDisplayed();
            browser.pause(2000);
            expect(header).toEqual(true);
        });

        it('TC-003 First label is present ', function () {
            let header = $$(sel.requiredLabel)[0].isDisplayed();
            browser.pause(2000);
            expect(header).toEqual(true);
        });

        it('TC-005 Name field is present ', function () {
            let nameField = $(sel.nameField).isDisplayed();
            expect(nameField).toEqual(true);
        });

        it('TC-006 Gender radio buttons label is present ', function () {
            let header = $$(sel.requiredLabel)[1].isDisplayed();
            expect(header).toEqual(true);
        });

        it('TC-007 Gender button is present ', function () {
            let buttonHe = $$(sel.radioButtons)[0].isDisplayed();
            expect(buttonHe).toEqual(true);
        });

        it('TC-008 Gender button is present ', function () {
            let buttonShe = $$(sel.radioButtons)[1].isDisplayed();
            expect(buttonShe).toEqual(true);
        });

        it('TC-009 Gender button is present ', function () {
            let buttonIt = $$(sel.radioButtons)[2].isDisplayed();
            expect(buttonIt).toEqual(true);
        });

        it('TC-010 Age field label is present ', function () {
            let label = $$(sel.requiredLabel)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-011 Age field is present ', function () {
            let ageField = $(sel.age).isDisplayed();
            expect(ageField).toEqual(true);
        });
        it('TC-012 Story type label is present ', function () {
            let label = $$(sel.requiredLabel)[3].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-013 Story type dropdown is present ', function () {
            let story = $(sel.storyType).isDisplayed();
            expect(story).toEqual(true);
        });

        it('TC-014 Image label  is present ', function () {
            let image = $$(sel.imageLabel)[4].isDisplayed();
            expect(image).toEqual(true);
        });
        it('TC-015 Image field is present ', function () {
            let imageField = $(sel.imageField).isDisplayed();
            expect(imageField).toEqual(true);
        });

        it('TC-016 Submit button is present ', function () {
            let submit = $(sel.submit).isDisplayed();
            expect(submit).toEqual(true);
        });


    });

});