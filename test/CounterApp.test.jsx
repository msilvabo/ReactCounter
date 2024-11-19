import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp"

describe('Prueba en CounterApp', () => {

    const valor = 100;
    const numPresiones = 5;

  test('Debe hacer match con el snapshot', () => {
    const {container} = render(<CounterApp value= {valor} />)
    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar el valor inicial de 100', () => {
    render(<CounterApp value= {valor} />);
    expect(screen.getByText(valor).innerHTML).toBeTruthy();
  });

  test('debe de incrementar con el boton +1', () => {
    render(<CounterApp value= {valor} />)
    fireEvent.click(screen.getByText('Increment +1'));
    expect(screen.getByTestId('contador').innerHTML).toContain(String(valor + 1)); 
  });
  test('debe de decrementar con el boton -1', () => {
    render(<CounterApp value= {valor} />)
    fireEvent.click(screen.getByText('Decrement -1'));
    expect(screen.getByTestId('contador').innerHTML).toContain(String(valor - 1)); 
  });

  test('Debe de funcionar el boton de Reset', () => {
    render(<CounterApp value= {valor} />)
    for (let i = 0; i < numPresiones; i++) {
        fireEvent.click(screen.getByText('Increment +1'));
    }
    fireEvent.click(screen.getByRole('button', {name:'btn-reset'}));
    expect(screen.getByTestId('contador').innerHTML).toContain(String(valor));
    
  })
  
  
})
