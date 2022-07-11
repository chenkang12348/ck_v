import type { FormRules } from "element-plus";
export namespace Login {
	export interface FromData {
		account: string;
		msgCode: string;
	}
	export interface Res {
		message: string;
		code: number;
		data: string;
		test: boolean;
	}
	export interface DataType {
		ruleForm: FromData;
		rules: FormRules;
		isLoading: boolean;
		[key: string]: any;
	}
}
