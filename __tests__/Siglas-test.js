import renderer from 'react-test-renderer'
import { render, fireEvent} from "@testing-library/react-native";
import Home from "../components/Home";
import App from "../App"
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper")

describe("teste de Snapshot", ()=>{
    it("Componentes de Home", ()=>{
        const home = renderer.create(<Home />).toJSON();
        expect(home).toMatchSnapshot();

    })
})

describe("teste de Inicialização e Exibição", ()=>{
    it("Componentes de Home", ()=>{
        const {getByText, getByTestId} = render(<Home/>)

        expect(getByText("DG")).toBeTruthy()
        expect(getByTestId("btn")).toBeTruthy();

        expect(getByText("GABIN")).toBeTruthy()
        expect(getByTestId("btn1")).toBeTruthy();

        expect(getByTestId("btn2")).toBeTruthy();
        expect(getByTestId("btn3")).toBeTruthy();
        expect(getByTestId("btn4")).toBeTruthy();
        expect(getByTestId("btn5")).toBeTruthy();
        expect(getByTestId("btn6")).toBeTruthy();
        expect(getByTestId("btn7")).toBeTruthy();
        expect(getByTestId("btn8")).toBeTruthy();
        expect(getByTestId("btn9")).toBeTruthy();
        expect(getByTestId("btn10")).toBeTruthy();
        expect(getByTestId("btn11")).toBeTruthy();
        expect(getByTestId("btn12")).toBeTruthy();
        expect(getByTestId("btn13")).toBeTruthy();
        expect(getByTestId("btn14")).toBeTruthy();
        expect(getByTestId("btn15")).toBeTruthy();
        expect(getByTestId("btn16")).toBeTruthy();
        expect(getByTestId("btn17")).toBeTruthy();
        
    })
})


describe("Testes de Navegação", ()=>{
    it ("Navegação de Index para Dobro",()=>{
        const{getByText, getByTestId} = render(<App />)

        const botao = getByTestId("bt")
        fireEvent.press(botao)

        const botao2 = getByTestId("bt2")
        fireEvent.press(botao2)
       
    })
})