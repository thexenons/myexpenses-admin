import {
	CreateParams,
	DataProvider,
	DeleteManyParams,
	DeleteParams,
	GetListParams,
	GetManyParams,
	GetManyReferenceParams,
	GetOneParams,
	UpdateManyParams,
	UpdateParams,
} from "react-admin";

const fetcher = async (
	method: string,
	url: string,
	params:
		| GetListParams
		| GetOneParams
		| GetManyParams
		| GetManyReferenceParams
		| CreateParams
		| UpdateParams
		| UpdateManyParams
		| DeleteParams
		| DeleteManyParams
) => {
	let urlBase = `http://localhost:3000${url}`;

	if ("id" in params) {
		urlBase += params.id;
	}

	const urlSearchParams = new URLSearchParams();

	if ("pagination" in params) {
		urlSearchParams.set("page", String(params.pagination.page));
		urlSearchParams.set("perPage", String(params.pagination.perPage));
	}
	if ("sort" in params) {
		urlSearchParams.set("field", params.sort.field);
		urlSearchParams.set("order", params.sort.order);
	}
	if ("filter" in params) {
		console.log({ filter: params.filter });
	}
	if ("ids" in params) {
		for (const [index, idParam] of params.ids.entries()) {
			urlSearchParams.set(`id[${index}]`, idParam);
		}
	}
	if ("target" in params) {
		console.log({ target: params.target });
	}
	if ("previousData" in params) {
		console.log({ previousData: params.previousData });
	}

	urlBase += `?${urlSearchParams.toString()}`;

	const fetchOptions: RequestInit = {
		method,
	};

	if ("data" in params) {
		fetchOptions.body = JSON.stringify(params.data);
	}

	const response = await fetch(urlBase, fetchOptions);

	return response.json();
};

const dataProvider: DataProvider = {
	// get a list of records based on sort, filter, and pagination
	getList: async (resource, params) => {
		console.log({ resource, params });
		return await fetcher("GET", `/api/${resource}`, params);
	},
	// get a single record by id
	getOne: async (resource, params) => {
		console.log({ resource, params });
		return await fetcher("GET", `/api/${resource}/${params.id}`, params);
	},
	// get a list of records based on an array of ids
	getMany: async (resource, params) => {
		console.log({ resource, params });
		throw new Error("getMany not implemented");
	},
	// get the records referenced to another record, e.g. comments for a post
	getManyReference: async (resource, params) => {
		console.log({ resource, params });
		throw new Error("getManyReference not implemented");
	},
	// create a record
	create: async (resource, params) => {
		console.log({ resource, params });
		throw new Error("create not implemented");
	},
	// update a record based on a patch
	update: async (resource, params) => {
		console.log({ resource, params });
		throw new Error("update not implemented");
	},
	// update a list of records based on an array of ids and a common patch
	updateMany: async (resource, params) => {
		console.log({ resource, params });
		throw new Error("updateMany not implemented");
	},
	// delete a record by id
	delete: async (resource, params) => {
		console.log({ resource, params });
		throw new Error("delete not implemented");
	},
	// delete a list of records based on an array of ids
	deleteMany: async (resource, params) => {
		console.log({ resource, params });
		throw new Error("deleteMany not implemented");
	},
};

export default dataProvider;
