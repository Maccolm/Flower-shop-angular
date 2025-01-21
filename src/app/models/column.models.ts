export interface ColumnModel {
	title: string;
	subTitle: string;
	text?: string;
	link?: {
		src: string;
		value: string;
	},
	name?: string;
}
export interface ClientStatistics {
	id: number;
	title: string;
	value: number;
	duration: number;
}