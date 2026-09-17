document.addEventListener("DOMContentLoaded", async () => {

    try {

        const data = await checkBackend();

        console.log("BACKEND CONNECTED:", data);

    } catch (error) {

        console.error("BACKEND CONNECTION FAILED:", error);

    }

});
