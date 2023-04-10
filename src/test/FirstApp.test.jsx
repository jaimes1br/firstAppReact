import { getByAltText, render } from "@testing-library/react";
import FirstApp from "../FirstApp";

describe('Test on <FirstApp/>', () => {
  
    test('should match with the snapshot', () => {

        const title = 'Hola este es mi titulo';
        const { container } = render( <FirstApp title={ title }/> )

        expect( container ).toMatchSnapshot();
    });

    
    test('should show tittle inside h1', () => {
            
        const title = 'Hola este es mi titulo';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title }/> )
        
        expect( getByText(`Title: ${title}`) ).toBeTruthy();
        expect( getByTestId('test-title').innerHTML).toBe(`Title: ${title}`); //tiene que ser exactamente igual
        expect( getByTestId('test-title').innerHTML).toContain(`Title: ${title}`); //verifica solo que lo tenga, independiente si hay algo mas como espacios

    });

    test('should show the subtitle passed by props', () => {
        const title = 'Hola este es mi titulo';
        const subTitle = 'JavaScript';

        const { getByText, getAllByText } = render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle }    
            />
        );

        // expect( getByText(`subtitle: ${subTitle}`)).toBeTruthy(); //en este caso solo recupera uno, si hay 
        //varios con el mismo contenido mostrara error, para ese caso donde hay varios, podemos
        //usar

        //El getAlByText regresa todos los elementos encuntrados en un arreglo.
        expect( getAllByText(`subtitle: ${subTitle}`).length).toBe(2);
        
        
      
    })
    

    
});
