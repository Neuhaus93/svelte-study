export type ElementUse = (
	node?: HTMLElement,
	parameters?: any
) => void | { destroy?: () => void; update?: (parameters: any) => void };
