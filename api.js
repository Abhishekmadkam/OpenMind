const API_BASE_URL = "https://api.fooddy.shop";


async function apiRequest(endpoint, options = {}) {
    try {
        const response = await fetch(
            `${API_BASE_URL}${endpoint}`,
            {
                method: options.method || "GET",

                headers: {
                    "Content-Type": "application/json",
                    ...(options.headers || {})
                },

                body: options.body
                    ? JSON.stringify(options.body)
                    : undefined
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.message || `Request failed: ${response.status}`
            );
        }

        return data;

    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
}


// Test backend
async function checkBackend() {
    return await apiRequest("/api/hello");
}
