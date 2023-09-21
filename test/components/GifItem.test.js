import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => {

    const title = 'Diego';
    const url = 'https://one-punch.com/saitama.jpg';

    test('debe de hacer match con el snapchot', () => {
        
        const {container } = render(<GifItem title={title}  url={url}></GifItem>)
        expect( container ).toMatchSnapshot();
    })

    test('debe de mostrar la imagen con el url indicado', () => {
      
        render(<GifItem title={title}  url={url}></GifItem>)
        //screen.debug();
        //expect( screen.getByRole('img').src).toBe( url );

        const {src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    })

    test('debe de mostrar el titulo en el componente', () => {
        
        render(<GifItem title={title}  url={url}></GifItem>)
        expect( screen.getByText( title ) ).toBeTruthy();
    });
    
    
    
});
