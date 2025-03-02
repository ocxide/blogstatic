export function getTransitionName(url: string): string {
	const firstI = url.lastIndexOf("/");
	const secondI = url.lastIndexOf("/", firstI - 1);

	var [filename] = url.slice(secondI + 1).split("?");
	return filename.replaceAll("/", "_").replaceAll(".", "-");
}
