import React from 'react';
import { render, fireEvent, act, getByTestId } from '@testing-library/react';
import RegistryForm from './index.js';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

describe('RegistryForm', () => { //group related tests together, in this case is the registry form 
  test('renders all form fields', () => {//aqui etá a testar se os campos do formulario são renderizados
    const { getByTestId } = render(<Router>
        <RegistryForm />
      </Router>);
    //espera que os campos com os nomes que foram dados estejam no documento
    expect(getByTestId("first-name-input")).toBeInTheDocument();
    expect(getByTestId("last-name-input")).toBeInTheDocument();
    expect(getByTestId("username-input")).toBeInTheDocument();
    expect(getByTestId("email-input")).toBeInTheDocument();
    expect(getByTestId("password-input")).toBeInTheDocument();
    expect(getByTestId("confirm-password-input")).toBeInTheDocument();
  });

  test('allows user input and updates state', () => {//aqui testa se os inputs alteram os valores e são atualizados
    const { getByTestId } = render(<Router>
        <RegistryForm />
      </Router>);
    //fire event simula o utilizador a escrever no campo, a simular um evento 
    fireEvent.change(getByTestId("first-name-input"), { target: { value: 'John' } });
    fireEvent.change(getByTestId("last-name-input"), { target: { value: 'Doe' } });
    fireEvent.change(getByTestId("username-input"), { target: { value: 'johndoe' } });
    fireEvent.change(getByTestId("email-input"), { target: { value: 'john@example.com' } });
    fireEvent.change(getByTestId("password-input"), { target: { value: 'password' } });
    fireEvent.change(getByTestId("confirm-password-input"), { target: { value: 'password' } });
    
    //aqui espera que o resultado do evento tenha o valor que foi testado 
    expect(getByTestId("first-name-input")).toHaveValue('John');
    expect(getByTestId("last-name-input")).toHaveValue('Doe');
    expect(getByTestId("username-input")).toHaveValue('johndoe');
    expect(getByTestId("email-input")).toHaveValue('john@example.com');
    expect(getByTestId("password-input")).toHaveValue('password');
    expect(getByTestId("confirm-password-input")).toHaveValue('password');
  });

  /*ESTES TESTES AINDA NAO FUNCIONAM*/ 

  //teste de email invalido
  test('displays error message for invalid email', () => {
    const { getByTestId, getByText } = render(
      <Router>
        <RegistryForm />
      </Router>
    );

    fireEvent.change(getByTestId("email-input"), { target: { value: 'invalidemail' } });
    
    expect(getByText(/invalid email/i)).toBeInTheDocument();
  });

  //teste de password invalida
  test('displays error message for invalid password', () => {
    const { getByTestId, getByText } = render(
      <Router>
        <RegistryForm />
      </Router>
    );

    fireEvent.change(getByTestId("password-input"), { target: { value: 'pass' } });
    
    expect(getByText(/invalid password/i)).toBeInTheDocument();
  });

  //teste de confirmar password não estar de acordo com a password
  test('displays error message for mismatched passwords', () => {
    const passwordConfirmationMock = jest.fn((password, confirmPassword)=>{
        if (password !== confirmPassword){
            return true;
        }
        return false;
    });

    const { getByTestId } = render(
      <Router>
        <RegistryForm passwordConfirmation={passwordConfirmationMock} />
      </Router>
    );
    
    //criar jest.fn aqui 
    //chamar uma mock fn que seja triggered pelo input
    //neste caso seria 

    fireEvent.change(getByTestId("password-input"), { target: { value: 'password' } });
    fireEvent.change(getByTestId("confirm-password-input"), { target: { value: 'differentpassword' } });
    expect(passwordConfirmationMock).toHaveBeenCalled();
    //expect(getByText(/Passwords do not match/i)).toBeInTheDocument();
  });
});
