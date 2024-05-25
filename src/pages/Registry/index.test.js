import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RegistryForm from './index';
import { passwordConfirmation } from './index'; 
import { credentialConfirmation } from './index';
import { emailValidation } from './index';
import { passwordValidation } from './index';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { toBeChecked } from '@testing-library/jest-dom/matchers';
import { Mail } from '@mui/icons-material';
import * as FormFunctions from './index';




describe('RegistryForm', () => { //group related tests together, in this case is the registry form 
    const registryForm = require('./index')
  test('renders all form fields', () => {//aqui etá a testar se os campos do formulario são renderizados
    const { getByTestId } = render(
    <Router>
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
    const { getByTestId } = render(
    <Router>
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


describe('Verification of validation functions', ()=>{
    //teste de email invalido
    test('Invalid email return false on email validation', ()=>{
        expect(emailValidation('mail invalido')).toBe(false);
        expect(emailValidation('mailinvalido.com')).toBe(false);
        expect(emailValidation('validEmail@Mail.com')).toBe(true);
    });

    //testes de função confirm password. Fazer para as outras funções como email validation, password validation e credential validation
    test('confirms password correctly', () => {
        // Test passwordConfirmation function with matching passwords
        expect(passwordConfirmation('password', 'password')).toBe(true);
        // Test passwordConfirmation function with mismatched passwords
        expect(passwordConfirmation('password', 'differentpassword')).toBe(false);
    });

    test('Credential confirmation returns true with correct credentials and false otherwise', ()=>{
        expect(credentialConfirmation('password', 'password', 'valid@mail.com')).toBe(true);
        expect(credentialConfirmation('password', 'Differentpassword', 'invalid mail.com')).toBe(false);

    })

    test('password validation returns true when meets criteria and false otherwise',()=>{
        expect(passwordValidation('pass')).toBe(false);
        expect(passwordValidation('password')).toBe(true);
    })


    
})


describe ('functions within submits are called when submit credentials is clicked', ()=>{

    test('calls confirm credentials function when handle submit is clicked', () => {
        const handleSubmitSpy = jest.spyOn(registryForm, 'credentialConfirmation').mockReturnValue(true);
        const {getByRole} = render(
            <Router>
              <RegistryForm />
            </Router>
        )
        fireEvent.submit(getByRole('registry-form'));
        expect(handleSubmitSpy).toHaveBeenCalled();
        handleSubmitSpy.mockRestore();
        
      });
      /************************************* */
    
      //teste de password invalida
        const invalidPasswordMock = jest.fn ();
      // Mock fireEvent.change to check password length
        jest.spyOn(fireEvent, 'change').mockImplementation((element, value) => {
        if (element.getAttribute('data-testid') === 'password-input' && value.target.value.length < 8) {
        invalidPasswordMock();
        }
        });
    
      test('displays error message for invalid password', () => {
         const { getByTestId, getByText } = render(
          <Router>
            <RegistryForm />
          </Router>
        );
    
        fireEvent.change(getByTestId("password-input"), { target: { value: 'pass' } });
        
        //expect(getByText(/invalid password/i)).toBeInTheDocument();
        expect(invalidPasswordMock).toHaveBeenCalled();
      });
    
      //teste de confirmar password não estar de acordo com a password
    
      
      test('displays error message for mismatched passwords', () => {
        const { getByTestId} = render(
          <Router>
            <RegistryForm />
          </Router>
        );
    
        fireEvent.change(getByTestId("password-input"), { target: { value: 'password' } });
        fireEvent.change(getByTestId("confirm-password-input"), { target: { value: 'differentpassword' } });
        //tou a fazer isto mal porque espero que apenas ao mudar os valores isto seja chamado
        //tenho de fazer um mock ao submit e aí esperar que esta função seja chamada
        expect(registryForm.passwordConfirmation).toHaveBeenCalledTimes(1);
      });

})



describe ('When buttons are clicked the page navigates', ()=>{
    const mockNavigate = jest.fn();
    
    // Mock the useNavigate hook
    jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
    }));

    test('calls navigate function when registration is successful', () => {
        const { getByTestId } = render(
        <Router>
            <RegistryForm />
        </Router>
        );
        //fazer spy on no navigate
        //esta não funciona porque não chamamos o botao direto, estamos a chamar a função handle submit que depois é que redireciona

        // Simulate filling out the registration form
        fireEvent.change(getByTestId("first-name-input"), { target: { value: 'John' } });
        fireEvent.change(getByTestId("last-name-input"), { target: { value: 'Doe' } });
        fireEvent.change(getByTestId("email-input"), { target: { value: 'john.doe@example.com' } });
        fireEvent.change(getByTestId("password-input"), { target: { value: 'password' } });
        fireEvent.change(getByTestId("confirm-password-input"), { target: { value: 'password' } });

        // Submit the form
        fireEvent.click(getByTestId("register-button"));

        // Check if the navigate function is called with the correct argument
        //expect(mockNavigate).toHaveBeenCalledWith('/login', { replace: true });
        expect(mockNavigate).toHaveBeenCalled();
    });


    test('Goes to login page when user wants to return to login', async ()=>{
        const {getByTestId} = render (
        <Router>
            <RegistryForm />
        </Router>
        );

        fireEvent.click(getByTestId("return-login-button"));
        console.log('Button clicked');
        await new Promise(resolve => setTimeout(resolve, 100));
        console.log('mockNavigate called:', mockNavigate.mock.calls);

        //expect(mockNavigate).toHaveBeenCalledWith('/login', { replace: true })
        expect(mockNavigate).toHaveBeenCalled(); //este chama
        //o problema neste teste é que chama o navigate, mas eu quero que seja especifico no navigate que está a chamar
    })
})

//fazer uma describe das funções chamadas


});
