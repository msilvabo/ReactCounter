import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('prueba en FirstApp', () => {

  const title = 'Hola, soy Goku';
  const subTitulo = 'Este es el subtitulo';

  test('deber de hacer match con el snapshot', () => {
    const {container} = render(<FirstApp title={title}/>);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el mensaje ""Hola, soy Goku"', () => {
    render(<FirstApp title={title}/>);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('debe de mostrar el titulo en H1', () => {
    render(<FirstApp title={title}/>);
    expect(screen.getByRole('heading', {level: 1}).innerHTML).toBe(title);
  });
  test('debe de mostrar el subtitulo', () => {
    render(<FirstApp title={title} subTitle={subTitulo}/>);
    expect(screen.getAllByText(subTitulo).length).toBe(2);
  });
  
})
