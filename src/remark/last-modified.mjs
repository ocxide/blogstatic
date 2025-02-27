import { execSync } from "child_process";

export function remarkLastModified() {
	/**
	 * @param {VFile} file
	 */
	return function (_tree, file) {
		/**
			* @type {string}
			*/
    const filepath = file.history[0];

		/**
			* @type {Buffer}
			*/
    const buf = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`);

    file.data.astro.frontmatter.lastModified = new Date(buf.toString());
  };
}
