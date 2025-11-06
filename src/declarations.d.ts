/**
 * This file tells TypeScript how to handle imports for non-code files,
 * like images. This stops TypeScript from giving an error when
 * you import a .jpeg file.
 */

declare module '*.jpeg' {
	const value: string;
	export default value;
}

// You can add other common file types here as well if you use them
declare module '*.jpg' {
	const value: string;
	export default value;
}

declare module '*.png' {
	const value: string;
	export default value;
}

declare module '*.svg' {
	const value: string;
	export default value;
}

declare module '*.gif' {
	const value: string;
	export default value;
}