//import renderer from 'react-test-renderer';
import { render, fireEvent} from "@testing-library/react-native";
import Significado from "../components/Significado";
//import App from "../App"
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper")

describe("teste de Snapshot", ()=>{
    it("Componentes de Significado", ()=>{
        const significado = renderer.create(<Significado />).toJSON();
        expect(significado).toMatchSnapshot();

    })
})

describe("Teste de Inicialização e Exibição", ()=>{
    it("Componentes de Significado", ()=>{
        const {getByText, getByTestId} = render(<Significado/>)

        //expect(getByTestId("Teste")).toBeTruthy();
        //expect(getByTestId("btext")).toBeTruthy();
        
        const dg = getByTestId('btn')
        fireEvent.press(dg)
        expect(getByText('DG')).toBeDefined()
        
    })
})
