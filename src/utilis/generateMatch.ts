export function generateMatch (url: string){
    const regex = /\/(\d+)\/$/; // Matches digits between slashes at the end of the string
    const match = url.match(regex);
    if (match) {
        const number = match[1];
        return number// Output: 4
    } else {
        console.log("No number found in the URL.");
    }

}