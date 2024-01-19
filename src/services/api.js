export const fetchData = async () => {
    try {
        const res = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching data :", error);
        return [];
    }
}