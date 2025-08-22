async function name() {
    try {
        const data = await fetchData();
        const processedData = await processedData(data);
        await saveData(processedData);
        console.log("Data saved successfully");

    } catch (error) {
        console.log("Error", error);
    }
}