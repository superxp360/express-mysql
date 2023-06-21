import { db } from './connectDB.js';

export function getMovies(req, res) {
    db.query('select * from movies',(err, movies) => {
        if(err){
            res.status(500).send({ success: false, message: err})
            return
        }
        res.send(movies)
    })
}

