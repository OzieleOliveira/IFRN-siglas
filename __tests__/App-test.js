import renderer from 'react-test-renderer'
//import { render, fireEvent} from "@testing-library/react-native";
import App from "../App"
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("teste de Snapshot", ()=>{
    it("Componentes de App", ()=>{
        const home = renderer.create(<App />).toJSON();
        expect(home).toMatchSnapshot();

    })
})