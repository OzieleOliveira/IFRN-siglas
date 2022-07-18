import renderer from 'react-test-renderer';
import { render, fireEvent} from "@testing-library/react-native";
import Significado from "../components/Significado";
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper")

describe("teste de Snapshot", ()=>{
    it("Componentes de Significado", ()=>{
        const tela = renderer.create(<Significado />).toJSON();
        expect(tela).toMatchSnapshot();

    })
})