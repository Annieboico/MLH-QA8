import sel from '../../data/selectors';
import exp from '../../data/expected.json';

describe('Required Fields and story created', function () {


    before('Open App', function () {
        browser.url('');
    })

    it('TC-026 Submit button is enabled after all fields filled out with valid values ', function () {
        $(sel.nameField).setValue('LadyBug007');
        $$(sel.radioButtons)[1].click();
        $$(sel.age)[1].setValue('1234567890');
        $(sel.storyType).click();
        $$(sel.chooseStory)[6].click();
        let submit = $(sel.submit).isEnabled();
        expect(submit).toEqual(true);
    });

    it('TC-027 Redirected to the story page ', function () {
        browser.refresh();

        $(sel.nameField).setValue('LadyBug007');
        $$(sel.radioButtons)[1].click();
        $$(sel.age)[1].setValue('1234567890');
        $(sel.storyType).click();
        $$(sel.chooseStory)[6].click();
        $(sel.submit).click();
        let button = $(sel.tryAgain).isDisplayed();
        expect(button).toEqual(true);
    });


});