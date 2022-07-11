export interface ResponseType<T> {
	message: string;
	code: number;
	data?: T;
	status: boolean;
	encode?: boolean;
	total?: number;
}
