import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('prueba en FirstApp', () => {
  // test('Debe de hacer match con el snapshot', () => {
  //   const title = 'Hola soy Goku';
  //   const {container} = render(<FirstApp title= {title}/>);
  //   expect(container).toMatchSnapshot();
  // }),
  test('debe de mostar el titulo en h1 ', () => {
    const title = 'Hola soy Goku';
    const {container, getByText, getByTestId} = render(<FirstApp title= {title}/>);
    expect(getByText(title)).toBeTruthy();
    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title);
    expect(getByTestId('test-title').innerHTML).toContain(title);
    
  })
  
  test('Debe de mostrar subtitulo enviado por props', () => {
    const title = 'Hola soy Goku';
    const subTitle = 'Este es el Subtitulo';
    const { getAllByText} = render(
        <FirstApp 
          title= {title}
          subTitle= {subTitle}
        />
      );
    expect(getAllByText(subTitle).length).toBe(2);
  })
  

})
