import Mock from "mockjs";
import data from "./data/index";
// mock的配置
Mock.setup({
	// 随机延时50-1000毫秒
	timeout: "50-1000"
});

// 登录
Mock.mock(/\/login/, "post", (config: any) => {
	const { username, password } = JSON.parse(config.body);
	const { userList } = data;
	let newData = userList.find((item: any) => item.username === username && item.password === password * 1);
	return {
		status:true,
		code: 200,
		token: Mock.mock("@guid"),
		data: newData
	};
});
// 获取用户列表
Mock.mock(/\/user\/list/, "get", (config: any) => {
	const { username, roleId, page, size } = JSON.parse(config.body);
	const { userList } = data;
	let newData = userList.slice((page - 1) * size, (page - 1) * size + size);
	if (username) {
		newData = newData.filter((item: any) => item.username.includes(username));
	}
	if (roleId) {
		newData = newData.filter((item: any) => item.roleId === roleId * 1);
	}
	return {
		code: 200,
		msg: "success",
		data: {
			data: newData,
			total: userList.length
		}
	};
});
//  删除用户
Mock.mock(/\/user\/delUser/, "post", (config: any) => {
	const { id } = JSON.parse(config.body);
	const { userList } = data;
	let flag = userList.some((item: any) => item.id === id);

	if (flag) {
		data.userList = userList.filter((item: any) => item.id !== id);
	}
	return {
		code: 200,
		msg: "success",
		status: flag,
		data: null
	};
});
// user/updateUser 更新用户信息
Mock.mock(/\/user\/updateUser/, "post", (config: any) => {
	const { id, username, roleId, roleName } = JSON.parse(config.body);
	const { userList } = data;
	let flag = userList.some((item: any) => {
		if (item.id === id) {
			item.username = username;
			item.roleId = roleId;
			item.roleName = roleName;
			return true;
		} else return false;
	});
	if (flag) data.userList = userList;
	return {
		code: 200,
		msg: "success",
		status: flag,
		data: null
	};
});
// 订单列表数据
Mock.mock(/\/order\/getList/, "get", (config: any) => {
	const { title, body, page, size } = JSON.parse(config.body);
	const { orderList } = data;
	// console.log(orderList);
	let newData = orderList.slice((page - 1) * size, (page - 1) * size + size);
	if (title) {
		newData = newData.filter((item: any) => item.title.includes(title));
	}
	if (body) {
		newData = newData.filter((item: any) => item.body.includes(body));
	}

	return {
		code: 200,
		msg: "success",
		data: {
			status: true,
			data: newData,
			total: orderList.length
		}
	};
});
// 删除订单数据
Mock.mock(/\/order\/delItem/, "post", (config: any) => {
	const { id } = JSON.parse(config.body);
	const { orderList } = data;
	let flag = orderList.some((item: any) => item.id === id);
	if (flag) {
		data.orderList = orderList.filter((item: any) => item.id !== id);
	}
	return {
		code: 200,
		msg: "删除成功",
		status: flag,
		data: null
	};
});

// 获取角色数据

Mock.mock(/\/role\/list/, "get", () => {
	return {
		code: 200,
		msg: "success",
		data: data.roleList
	};
});

Mock.mock(/\/role\/add/, "post", (config: any) => {
	const item = JSON.parse(config.body);
	item.id = data.roleList[data.roleList.length - 1].id + 1;
	data.roleList.push(item);
	return {
		status: true,
		code: 200,
		msg: "success",
		data: null
	};
});

// authorityList 获取权限数据

Mock.mock(/\/authority\/list/, "get", () => {
	return {
		code: 200,
		status: true,
		msg: "success",
		data: data.authorityList
	};
});