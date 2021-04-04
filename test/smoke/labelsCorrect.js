import sel from '../../data/selectors';
import exp from '../../data/expected.json';
describe('Labels are correct', function () {



        before('Open App', function () {
            browser.url('');
        })

        it('TC-015 Header = My little Hero ', function () {
            let header = $(sel.header).getText();
            expect(header).toEqual(exp.header);
        });

        it('TC-016  label =  What is your HERO\'s name? ', function () {
            let header = $$(sel.requiredLabel)[0].getText();
            expect(header).toEqual(exp.secondHeader);
        });


        it('TC-017 Gender label ', function () {
            let header = $$(sel.requiredLabel)[1].getText();
            expect(header).toEqual(exp.genderLabel);
        });

        it('TC-019 Label - he ', function () {
            let buttonHe = $$(sel.radioButtonsLabel)[0].getText();
            expect(buttonHe).toEqual(exp.heLabel);
        });

        it('TC-020 Label - she ', function () {
            let buttonShe = $$(sel.radioButtonsLabel)[1].getText();
            expect(buttonShe).toEqual(exp.sheLabel);
        });

        it('TC-021 Label - it ', function () {
            let buttonIt = $$(sel.radioButtonsLabel)[2].getText();
            expect(buttonIt).toEqual(exp.itLabel);
        });

        it('TC-022 Age field label = 3. How old is your hero? ', function () {
            let label = $$(sel.requiredLabel)[2].getText();
            expect(label).toEqual(exp.ageLabel);
        });

        it('TC-023 4. What type of story would you like to read? ', function () {
            let ageField = $$(sel.requiredLabel)[3].getText();
            expect(ageField).toEqual(exp.storyLabel);
        });


        it('TC-024 5. Upload an image (optional) ', function () {
            let image = $$(sel.imageLabel)[4].getText();
            expect(image).toEqual(exp.imageLabel);

        });

    it('TC-025 Create ', function () {
        let image = $(sel.submit).getText();
        expect(image).toEqual(exp.submit);

    });
});