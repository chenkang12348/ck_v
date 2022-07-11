// 全局正则
// 手机号正则
export const phoneNumber =
	/^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/;
// 6位数字验证码
export const msgCode = /^\d{6}$/;
// el 常用表单校验
// 手机号
export const ElFromPhoneNumber = (rule: any, value: any, callback: any) => {
	if (!value) callback(new Error("请输入手机号码"));
	if (!phoneNumber.test(value)) callback(new Error("请输入正确的手机号码"));
	else callback();
};
// 验证码
export const ElFromMsgCode = (rule: any, value: any, callback: any) => {
	if (!value) callback(new Error("请输入验证码"));
	if (!msgCode.test(value)) callback(new Error("请输入正确的验证码"));
	else callback();
};
