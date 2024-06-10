const BASE_URL = "http://192.168.1.4:8001/api/user/";

async function fetchUserData () {
    try {
        const response = await fetch(`${BASE_URL}userdetails/`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok' + response.statusText);
        }
        
        const responseData = await response.json();
        const data = await responseData.data;
        console.log("user data response:", data);
        return data;
    } catch (error) {
        console.error("Failed to fetch user details:", error);
        throw new Error("Failed to fetch user details: " + error.message);
    }
}
async function updateUserDetails(userDetails) {
    try {
        const { ...userData } = userDetails;
        console.log("user data: ", userData);
        const response = await fetch(`${BASE_URL}updateuser/4`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error(`Failed to update user details: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("User details updated successfully:", data);
        return data;
    } catch (error) {
        console.error("Error updating user details:", error.message);
        throw error;
    }
}
async function deleteAddress(address) {
    try {
        const response = await fetch(`${BASE_URL}address/4`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ address: address })
        });

        if (!response.ok) {
            throw new Error(`Failed to delete address: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Address deleted successfully:", data);
        return data;
    } catch (error) {
        console.error("Error deleting address:", error.message);
        throw error;
    }
}

export {fetchUserData, updateUserDetails,deleteAddress}