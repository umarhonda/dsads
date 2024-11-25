// Backend: Handle the external API call here
export default async function handler(req, res) {
    try {
        // Make the external API call from here
        const response = await fetch(process.env.EXTERNAL_API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body)
        });
        
        const data = await response.json();
        res.status(200).json(data);
        
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}