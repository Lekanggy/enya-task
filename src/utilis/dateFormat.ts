export function convertTimeToDate(timestamp:string) {
    const date = new Date(timestamp);
    const month = date.getMonth() + 1; // Month is zero-based
    const day = date.getDate();
    const year = date.getFullYear().toString().slice(-2); // Get last two digits of year

    // Pad single digit month or day with leading zero
    const paddedMonth = month < 10 ? '0' + month : month;
    const paddedDay = day < 10 ? '0' + day : day;

    return `${paddedMonth}/${paddedDay}/${year}`;
}
