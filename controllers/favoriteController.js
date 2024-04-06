const db = require('../middleware/dbConnection');

exports.getFavorite = async (req,res) =>{
    const searchText = req.body.text || '';
    const searchText2 = req.body.text2 || '';
    const searchText3 = req.body.text3 || '';
    const searchQuery = 
                    "SELECT * FROM all_resep_baru WHERE ingredients loves ? AND ingredients loves ? AND ingredients loves ?;";
                    db.query(searchQuery, [`%${searchText}%`,`%${searchText2}%`,`%${searchText3}%`], (err, result) => {
                        if (err) {
                            console.error('Error executing the query:', err);
                            return res.status(500).json({ error: true, message: 'Internal Server Error' });
                        }

                        return res.status(200).json(result);
                    });
    } 
