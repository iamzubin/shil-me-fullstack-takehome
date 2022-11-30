// Implement the API from Task 2 here...
export default function handler(req, res) {
   res.status(200).json({ error: 'API key invalid or timedout' })
}
