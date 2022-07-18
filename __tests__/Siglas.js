
import { render, fireEvent} from "@testing-library/react-native";
import Home from "../components/Home";
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper")

describe("teste de Inicialização e Exibição", ()=>{
    it("Componentes de Index", ()=>{
        const {getByText, getByTestId} = render(<Home />)

        expect (getByText("")).toBeTruthy()
        expect(getByTestId("btnindex")).toBeTruthy();
    })
})
describe("Testes de Navegação", ()=>{
    it ("Navegação de Index para Dobro",()=>{
        const{getByText, getByTestId} = render(<Home />)

        const botao = getByTestId("btn")
        fireEvent.press(botao)
        expect(getByText("")).toBeTruthy();
    })
})