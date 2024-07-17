import axios from "axios";

export const searchParams = {
    key: "44856492-1c75259359e870db5bcbdf4ec",
    q: "",
    imageType: "photo",
    orientation: "horizontal",
    safesearch: true,
};

export async function getPictures() {
    const response = await axios.get("https://pixabay.com/api/", {params: searchParams});
        return response.data;
}