console.log("Content Scripts loaded");

function allFilesDivGetter(): Element[] {
	const unfilteredListOfDivs = document.querySelectorAll(".Box-row");

	const fileteredListOfDivs: Element[] = [];

	for (let i = 0; i < unfilteredListOfDivs.length; i += 1) {
		if (unfilteredListOfDivs[i].classList.contains("py-2")) {
			fileteredListOfDivs.push(unfilteredListOfDivs[i]);
		}
	}

	return fileteredListOfDivs;
}

function getFileNames(listOfDivsOfFiles: Element[]): string[] {
	const listOfFileNames: string[] = [];

	listOfDivsOfFiles.forEach((div) => {
		let currentString = "";
		let flag = true;

		const subHolder = div.children[1];

		const suHolder = subHolder.children[0];

		const sHolder = suHolder.children[0];

		for (let i = 0; i < sHolder.innerHTML.length; i += 1) {
			if (sHolder.innerHTML[i] == "<") {
				flag = false;
			}

			if (flag) {
				currentString += sHolder.innerHTML[i];
			}

			if (sHolder.innerHTML[i] == ">") {
				flag = true;
			}
		}

		listOfFileNames.push(currentString);
	});

	return listOfFileNames;
}

function isFolder(listOfDivsOfFiles: Element[]): boolean[] {
	const fileOrNotFlag: boolean[] = [];

	listOfDivsOfFiles.forEach((div) => {
		const subHolder = div.children[0];

		const sHolder = subHolder.children[0];

		if (sHolder.classList.contains("octicon-file-directory-fill")) {
			fileOrNotFlag.push(true);
		} else {
			fileOrNotFlag.push(false);
		}
	});

	return fileOrNotFlag;
}

function imageHolderGetter(listOfDivsOfFiles: Element[]): Element[] {
	const imageHolder: Element[] = [];

	listOfDivsOfFiles.forEach((div) => {
		const subHolder = div.children[0];

		imageHolder.push(subHolder);
	});

	return imageHolder;
}

function imageQuery(
	fileNames: string[],
	fileExtensions: string[],
	fileorNot: boolean[]
): string[] {
	const queryRes: string[] = [];

	return queryRes;
}

document.onclick = async () => {
	console.log("Fired?");
	const allDivs = allFilesDivGetter();

	// allDivs.forEach(div => {
	// 	div.innerHTML = "Haha, we do a little trolling";
	// });

	const fileData = (await browser.storage.local.get("fileData")).fileData;

	console.log(fileData);

	const allImageHolders = imageHolderGetter(allDivs);

	allImageHolders.forEach((holder) => {
		holder.innerHTML =
			"<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m5 2H6v16h12v-9h-7V4z' fill='#42a5f5'/></svg>";
	});
};
