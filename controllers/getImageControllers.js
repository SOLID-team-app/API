const db = require('../middleware/dbConnection');

exports.getImage = async(req,res)=>{
 
    const searchQuery = "SELECT id,link_gambar FROM datamakanan"
    db.query(searchQuery, (err, result) => {
        if (err) {
            console.error('Error executing the query:', err);
            return res.status(500).json({ error: true, message: 'Internal Server Error' });
        }

        return res.status(200).json(result);
    });
}