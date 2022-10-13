import gistType from "./types/gistType";
window.onload = async () => {
    const data = (await (
        await fetch(
            "https://gist.githubusercontent.com/mohamedarish/4421ea55b6eab861bfc5fc8cbc105233/raw/bc976cf02c3ff49c2a18e1629c8e0e22ae1fef44/map.json"
        )
    ).json()) as gistType;

    await browser.storage.local.set({ fileData: data });
};
