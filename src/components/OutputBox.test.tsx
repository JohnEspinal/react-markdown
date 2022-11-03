import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { OutputBox } from './OutputBox';

describe('Tests in OutputBox.tsx component', () => { 

    const resultingText = 'This is a testing note';

    beforeEach(() => {

        jest.clearAllMocks();

        
    })
    
    test('normal text line should be a P tag', () => { 

        const inputText = "This is a testing note";

        render(<OutputBox inputText={inputText} />);

        const resultingTag = screen.getByText(resultingText);

        expect(resultingTag.tagName).toBe('P');

     });

     test('line starting with # should be a H1 tag', () => {
        
        const inputText = "# This is a testing note";

        render(<OutputBox inputText={inputText} />);

        const resultingTag = screen.getByText(resultingText);

        expect(resultingTag.tagName).toBe('H1');

     });

     test('line starting with ## should be a H2 tag', () => { 

        const inputText = "## This is a testing note";

        render(<OutputBox inputText={inputText} />);

        const resultingTag = screen.getByText(resultingText);

        expect(resultingTag.tagName).toBe('H2');

     });

     test('--- in a line should be a hr', () => { 

        const inputText = "---";

        render(<OutputBox inputText={inputText} />);

        const resultingTag = screen.getByRole('separator')

        expect(resultingTag.tagName).toBe('HR');

     });


 })