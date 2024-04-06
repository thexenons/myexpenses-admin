import { Admin, Resource, ListGuesser, ShowGuesser } from "react-admin";
import CustomLayout from "./components/Layout";
import dataProvider from "./dataProvider";

const App = () => (
	<Admin dataProvider={dataProvider} layout={CustomLayout}>
		<Resource name="accounts" list={ListGuesser} show={ShowGuesser} />
		<Resource name="categories" list={ListGuesser} show={ShowGuesser} />
		<Resource name="payees" list={ListGuesser} show={ShowGuesser} />
		<Resource name="transactions" list={ListGuesser} show={ShowGuesser} />
	</Admin>
);

export default App;
