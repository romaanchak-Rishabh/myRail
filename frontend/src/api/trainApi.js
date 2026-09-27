const trainApi = async (trainNumber) => {
    const response = await fetch(`/api/train/${trainNumber}`)

    if(!response.ok) {
        throw new Error('Failed to fetch train status')
    }

    return response.json();
}

export default trainApi