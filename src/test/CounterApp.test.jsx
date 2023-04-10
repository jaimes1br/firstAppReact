import { fireEvent, render, screen} from "@testing-library/react";
import CounterApp from '../CounterApp';


describe('Test to <CounterApp/>', () => {

    const initialValue = 10;

    test('should match with snapshot', () => {
      
        const { container } = render( <CounterApp value={ initialValue }/> );
        expect( container ).toMatchSnapshot();
    });
    
  
    test('should show the initialValue 100 in the screen (<CounterApp value={100}/>)', () => {
        
        render(<CounterApp value={ 100 }/>);
        expect( screen.getByText(100)).toBeTruthy();
        expect (screen.getByRole('heading',{level: 2}).innerHTML).toBe(`${100}`);
    });

    test('should add +1 when press on buttom +1', () => {
       
        render(<CounterApp value={ initialValue }/>);
        // fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByRole('button',{ name: 'btn-add'}));
        expect(screen.getByText('11')).toBeTruthy();
    });
    
    
    test('should substract -1 when press on buttom -1', () => {
       
        render(<CounterApp value={ initialValue }/>);
        // fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByRole('button',{ name: 'btn-sub'}));
        expect(screen.getByText('9')).toBeTruthy();
    });

    
    test('should reset the value to initialValue', () => {
       
        render(<CounterApp value={ initialValue }/>);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button',{ name: 'btn-reset'}));
        expect(screen.getByText(initialValue)).toBeTruthy();
    });

});

