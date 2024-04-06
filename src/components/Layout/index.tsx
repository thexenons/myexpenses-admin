import { CheckForApplicationUpdate, Layout } from "react-admin";

const CustomLayout: typeof Layout = ({ children, ...props }) => (
	<Layout {...props}>
		{children}
		<CheckForApplicationUpdate />
	</Layout>
);

export default CustomLayout;
