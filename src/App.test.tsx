import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Tests in App.tsx component', () => { 
  
  test('renders text input', () => {
    render(<App />);
  
    
  
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeInTheDocument();
  });
  
 })