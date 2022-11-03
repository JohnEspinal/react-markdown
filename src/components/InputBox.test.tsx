import { fireEvent, render, screen } from '@testing-library/react';
import 'jest';
import { InputBox } from './InputBox';

describe('Tests in InputBox component', () => { 


    const setInputText = jest.fn();

    const inputText = "This is a testing note";

    beforeEach(() => {

        jest.clearAllMocks();

        
    })
    
    test('should show the input in textarea tag.', () => { 

        render(<InputBox inputText={inputText} setInput={setInputText} />);

        // screen.debug();

        const textarea = screen.getByRole('textbox');

        expect(textarea.textContent).toBe(inputText);

     });

    test('should call setInputText with text parameter when text input change.', () => { 

        render(<InputBox inputText={inputText} setInput={setInputText} />);

        const text = 'This is another test.'

        const textarea = screen.getByRole('textbox');

        fireEvent.change(textarea, {target: {value: text}});

        expect(setInputText).toHaveBeenCalledWith(text);

     });

 })