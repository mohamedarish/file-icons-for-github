// This gist that I'm taking is originally written by explosion scratch and his grasyfork script for materialicons fro github.

interface defaultIcon {
    name: string;
}

interface fileIconsType {
    name: string;
    fileExtensions?: string[];
    fileNames?: string[];
    light?: boolean;
}

interface folderIconsType {
    name: string;
    folderNames: string[];
    enabledFor?: boolean[];
}

interface folders {
    name: string;
    defaultIcon: defaultIcon;
    rootFolder: defaultIcon;
    icons: folderIconsType[];
}

interface stringToString {
    [index: string]: string;
}

interface moreExtensions {
    fileExtensions: stringToString;
    fileNames: stringToString;
}

interface gistType {
    defaultIcon: defaultIcon;
    icons: fileIconsType[];
    folders: folders;
    moreExtensions: moreExtensions;
}

export default gistType;
