export default (date: string): Date => {
    const year = Number.parseInt(date.slice(0, 4));
    const month = Number.parseInt(date.slice(4))-1;
    
    const formatedDate = new Date(year, month);

    return formatedDate;
}