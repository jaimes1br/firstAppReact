import { getByAltText, render, screen} from "@testing-library/react";
import FirstApp from "../FirstApp";

describe('Test on <FirstApp/>', () => {
    
    const title = 'Hola este es mi titulo';
    const subTitle = 'JavaScript';

    test('should match with the snapshot', () => {

        const { container } = render( <FirstApp title={ title }/> )
        expect( container ).toMatchSnapshot();
    });

    
    test('should show tittle inside h1', () => {
            
        render( <FirstApp title={ title }/> )
        
        expect( screen.getByText(`Title: ${title}`) ).toBeTruthy();
        expect( screen.getByTestId('test-title').innerHTML).toBe(`Title: ${title}`); 
        expect( screen.getByTestId('test-title').innerHTML).toContain(`Title: ${title}`);
        expect( screen.getByRole('heading',{level: 1}).innerHTML).toContain(`Title: ${title}`);
    });

    test('should show the subtitle passed by props', () => {

        render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle }    
            />
        );
        expect( screen.getAllByText(`subtitle: ${subTitle}`).length).toBe(2);
    });
    

    
});
