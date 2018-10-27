const mysqlPool = require('../data/config');

//All my routes
const router = app=>{
    app.get('/', (req, res)=>{
        res.send('My First Express API')
    });

    //fetch all users
    app.get('/users', (req, res)=>{      
        mysqlPool.query('SELECT * FROM users', (error, result)=>{
            if(error) throw error;
            res.send(result);
        });
    });

    //fetch users with specific id parameter 
    app.get('/users/:id', (req, res)=>{  
        const id = req.params.id;    
        mysqlPool.query('SELECT * FROM users WHERE id = ?', id, (error, result)=>{
            if(error) console.log(error);
            res.send(result);
        });
    });

    //Adds single user
    app.post('/users', (req, res)=>{
        mysqlPool.query('INSERT INTO users SET ?', req.body, (error, result)=>{
            if(error) throw error;
            res.status(201).send(alert(`User with ID ${result.insertId} added successfully!..`));
        })
    })

    //Edit single user specified by specific id parameter
    app.put('/users/:id', (req, res)=>{
        const id = req.params.id;
        mysqlPool.query('UPDATE users SET ? WHERE id = ?', [req.body, id], (error, result)=>{
            if(error) throw error;
            res.send(`User Record Updated Successfully!..`);
        });
    });

    //Deletes single user specified by specific id parameter
    app.delete('/users/:id', (req, res)=>{
        const id = req.params.id;
        mysqlPool.query('DELETE FROM users WHERE id = ?', id, (error, result)=>{
            if(error) throw error;
            res.send(`User deleted successfully!...`);
        });
    });
}

module.exports = router;

