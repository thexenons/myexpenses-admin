import { DataProvider } from "react-admin";

const fetcher = async (method: string, url: string) => {
	const response = await fetch(new URL(url, "http://localhost:3000"), {
		method,
	});

	return response.json();
};

const dataProvider: DataProvider = {
	// get a list of records based on sort, filter, and pagination
	getList: async (resource) => fetcher("GET", `/api/${resource}`),
	// get a single record by id
	getOne: async (resource, params) =>
		fetcher("GET", `/api/${resource}/${params.id}`),
	// get a list of records based on an array of ids
	getMany: async () => {
		throw new Error("getMany not implemented");
	},
	// get the records referenced to another record, e.g. comments for a post
	getManyReference: async () => {
		throw new Error("getManyReference not implemented");
	},
	// create a record
	create: async () => {
		throw new Error("create not implemented");
	},
	// update a record based on a patch
	update: async () => {
		throw new Error("update not implemented");
	},
	// update a list of records based on an array of ids and a common patch
	updateMany: async () => {
		throw new Error("updateMany not implemented");
	},
	// delete a record by id
	delete: async () => {
		throw new Error("delete not implemented");
	},
	// delete a list of records based on an array of ids
	deleteMany: async () => {
		throw new Error("deleteMany not implemented");
	},
};

export default dataProvider;
