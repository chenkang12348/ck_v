export namespace Headers {
	export interface MenuItemListItem {
		index: string;
		label: string;
	}
	export interface DataType {
		activeIndex: string;
		isRouter: boolean;
		title: string;
		menuItemList: MenuItemListItem[];
	}
	export interface DialogExpose {
		isShowDialog: () => void;
	}
	export interface AvatarDataType {
		circleUrl: string;
	}
}
