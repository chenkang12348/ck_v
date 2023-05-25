import Mock from "mockjs";
// 订单数据
let orderList = [
	...Mock.mock({
		"list|100": [{ id: "@increment()", userId: "@integer(1,20)", title: "@cword(3,5)", body: "@paragraph(1)" }]
	}).list
];
// 用户数据
let userList = [
	{
		id: 1,
		username: "admin",
		password: 123456,
		roleId: 1,
		roleName: "超管"
	},
	...Mock.mock({
		"list|19": [
			{ id: "@increment()", username: "@word", "password|100000-999999": 123456, "roleId|1-3": 1, roleName: "" }
		]
	}).list
];
// 角色数据
let roleList = [...Mock.mock({ "list|3": [{ "id|+1": 1, roleName: "", "authority|1-11": [1] }] }).list];

// 权限数据
let authorityList = [
	{
		label: "订单列表",
		id: 1,
		children: [
			{ id: 2, label: "查询按钮" },
			{ id: 3, label: "删除按钮" }
		]
	},
	{
		label: "用户列表",
		id: 4,
		children: [
			{ id: 5, label: "查询按钮" },
			{ id: 6, label: "新建按钮" },
			{ id: 7, label: "删除按钮" },
			{ id: 8, label: "编辑按钮" }
		]
	},
	{
		label: "角色列表",
		id: 9,
		children: [
			{ id: 10, label: "新建按钮" },
			{ id: 11, label: "操作按钮" }
		]
	}
];

// 数据处理
const roleNameList = ["", "超管", "协管", "普通"];
userList.forEach((item: any) => {
	item.roleName = roleNameList[item.roleId];
});
roleList.forEach((item: any) => {
	item.roleName = roleNameList[item.id];
	let arr: number[] = [];
	item.authority.forEach((val: any, index: number) => {
		arr.push(index + 1);
	});
	item.authority = [...arr];
});

export default { orderList, userList, roleList, authorityList };