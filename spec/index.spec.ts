import { Button } from '@syncfusion/ej2/button';

describe('Button Test', () => {
    let element: HTMLButtonElement = document.createElement('button');
    document.body.appendChild(element);

    it('Before Button intialization', () => {
        expect(element.classList.contains('e-btn')).toEqual(false);
    });

    it('After Button intialization', () => {
        new Button({}, element);
        expect(element.classList.contains('e-btn')).toEqual(true);
    });
});