const db = require('../middleware/dbConnection');

exports.getFavorite = async (req, res) => {
    const searchText = req.body.text || '';
    const searchQuery = "SELECT * FROM datamakanan WHERE bahan_utama LIKE ?"; // Changed placeholder to '?'
    
    // Bind searchText as a parameter to the query
    db.query(searchQuery, [`%${searchText}%`], (err, result) => {
        if (err) {
            console.error('Error executing the query:', err);
            return res.status(500).json({ error: true, message: 'Internal Server Error' });
        }

        return res.status(200).json(result);
    });
}