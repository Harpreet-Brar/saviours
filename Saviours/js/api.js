// *******************************************************
// ******** NPMs Installed *******************************
// *******************************************************
//
//      1)  npm init -y
//      2)  npm i express
//      3)  npm i mysql
//      4)  npm i cors
//
// *******************************************************
// ******** Required Modules *****************************
// *******************************************************
const express = require('express');
const mysql = require('mysql');
const cors = require('cors')

// *******************************************************
// ******** Environmental Variables **********************
// *******************************************************
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

const conStr = {
    host: 'api.saviours.wmdd.ca',
    database: 'hsbrar_saviours',
    user: 'admin_saviours',
    password: 'saviours2019'
}

// *******************************************************
// ******** Query Setup **********************************
// *******************************************************
const con = mysql.createConnection(conStr);

// *******************************************************
// ******** GETs - the "R" in CRUD **********************
// *******************************************************
app.get('/clist', (req, res) => {
    let qry = `SELECT firstName, lastName, userID FROM register where active=1 ORDER BY firstName`;

    con.query(qry, (err,response) => {
        if(err) throw err;
        let clist = [];
        for(let i = 0;i<response.length;i++){
            clist.push({
                name: `${ response[i].firstName } ${ response[i].lastName}`,
                custID: response[i].userID
            })
        }
        res.send(clist);
    });
    
})

app.get('/centerlist', (req, res) => {
    let qry = `SELECT centerName FROM center where city=${req.query.city}`;

    con.query(qry, (err,response) => {
        if(err) throw err;
        let centerlist = [];
        for(let i = 0;i<response.length;i++){
            clist.push({
                name: `${ response[i].centerName }`
            })
        }
        res.send(centerlist);
    });
    
})

app.get('/view', (req, res) => {
    let qry = `SELECT * FROM register WHERE userID=${req.query.custID}`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send(response[0]);
    })
    
})
//===============================bloodgroup count====================
//===================================================================
//===================================================================



app.get('/maleA', (req, res) => {
	
  let qry = `SELECT COUNT(userID) AS typeA FROM register WHERE bloodGroup='A+' AND Gender='Male'`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send(`${response[0].typeA}`);
    }) 
})

app.get('/maleAA', (req, res) => {
	
  let qry = `SELECT COUNT(userID) AS typeAA FROM register WHERE bloodGroup='A-' AND Gender='Male'`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send(`${response[0].typeAA}`);
    })

})
	
app.get('/maleABAB', (req, res) => {
	
  let qry = `SELECT COUNT(userID) AS typeABAB FROM register WHERE bloodGroup='AB-' AND Gender='Male'`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send(`${response[0].typeABAB}`);
    }) 
})
	
app.get('/maleAB', (req, res) => {
	
  let qry = `SELECT COUNT(userID) AS typeAB FROM register WHERE bloodGroup='AB+' AND Gender='Male'`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send(`${response[0].typeAB}`);
    }) 
})

app.get('/maleB', (req, res) => {
	
  let qry = `SELECT COUNT(userID) AS typeB FROM register WHERE bloodGroup='B+' AND Gender='Male'`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send(`${response[0].typeB}`);
    }) 
})

app.get('/maleBB', (req, res) => {
	
  let qry = `SELECT COUNT(userID) AS typeBB FROM register WHERE bloodGroup='B-' AND Gender='Male'`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send(`${response[0].typeBB}`);
    }) 
})

app.get('/maleO', (req, res) => {
	
  let qry = `SELECT COUNT(userID) AS typeOO FROM register WHERE bloodGroup='O+' AND Gender='Male'`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send(`${response[0].typeOO}`);
    }) 
})

app.get('/maleOO', (req, res) => {
	
  let qry = `SELECT COUNT(userID) AS typeOO FROM register WHERE bloodGroup='O-' AND Gender='Male'`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send(`${response[0].typeOO}`);
    }) 
})







app.get('/femaleA', (req, res) => {
	
  let qry = `SELECT COUNT(userID) AS typeA FROM register WHERE bloodGroup='A+' AND Gender='Female'`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send(`${response[0].typeA}`);
    }) 
})

app.get('/femaleAA', (req, res) => {
	
  let qry = `SELECT COUNT(userID) AS typeAA FROM register WHERE bloodGroup='A-' AND Gender='Female'`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send(`${response[0].typeAA}`);
    })

})
	
app.get('/femaleABAB', (req, res) => {
	
  let qry = `SELECT COUNT(userID) AS typeABAB FROM register WHERE bloodGroup='AB-' AND Gender='Female'`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send(`${response[0].typeABAB}`);
    }) 
})
	
app.get('/femaleAB', (req, res) => {
	
  let qry = `SELECT COUNT(userID) AS typeAB FROM register WHERE bloodGroup='AB+' AND Gender='Female'`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send(`${response[0].typeAB}`);
    }) 
})

app.get('/femaleB', (req, res) => {
	
  let qry = `SELECT COUNT(userID) AS typeB FROM register WHERE bloodGroup='B+' AND Gender='Female'`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send(`${response[0].typeB}`);
    }) 
})

app.get('/femaleBB', (req, res) => {
	
  let qry = `SELECT COUNT(userID) AS typeBB FROM register WHERE bloodGroup='B-' AND Gender='Female'`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send(`${response[0].typeBB}`);
    }) 
})
app.get('/femaleO', (req, res) => {
	
  let qry = `SELECT COUNT(userID) AS typeOO FROM register WHERE bloodGroup='O+' AND Gender='Female'`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send(`${response[0].typeOO}`);
    }) 
})
app.get('/femaleOO', (req, res) => {
	
  let qry = `SELECT COUNT(userID) AS typeOO FROM register WHERE bloodGroup='O-' AND Gender='Female'`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send(`${response[0].typeOO}`);
    }) 
})






app.get('/otherA', (req, res) => {
	
  let qry = `SELECT COUNT(userID) AS typeA FROM register WHERE bloodGroup='A+' AND Gender='other'`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send(`${response[0].typeA}`);
    }) 
})

app.get('/otherAA', (req, res) => {
	
  let qry = `SELECT COUNT(userID) AS typeAA FROM register WHERE bloodGroup='A-' AND Gender='other'`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send(`${response[0].typeAA}`);
    })

})
	
app.get('/otherABAB', (req, res) => {
	
  let qry = `SELECT COUNT(userID) AS typeABAB FROM register WHERE bloodGroup='AB-' AND Gender='other'`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send(`${response[0].typeABAB}`);
    }) 
})
	
app.get('/otherAB', (req, res) => {
	
  let qry = `SELECT COUNT(userID) AS typeAB FROM register WHERE bloodGroup='AB+' AND Gender='other'`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send(`${response[0].typeAB}`);
    }) 
})

app.get('/otherB', (req, res) => {
	
  let qry = `SELECT COUNT(userID) AS typeB FROM register WHERE bloodGroup='B+' AND Gender='other'`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send(`${response[0].typeB}`);
    }) 
})

app.get('/otherBB', (req, res) => {
	
  let qry = `SELECT COUNT(userID) AS typeBB FROM register WHERE bloodGroup='B-' AND Gender='other'`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send(`${response[0].typeBB}`);
    }) 
})
app.get('/otherO', (req, res) => {
	
  let qry = `SELECT COUNT(userID) AS typeOO FROM register WHERE bloodGroup='O+' AND Gender='other'`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send(`${response[0].typeOO}`);
    }) 
})
app.get('/otherOO', (req, res) => {
	
  let qry = `SELECT COUNT(userID) AS typeOO FROM register WHERE bloodGroup='O-' AND Gender='other'`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send(`${response[0].typeOO}`);
    }) 
})
//===============================bloodgroup count====================
//===================================================================
//===================================================================
app.get('/rid', (req, res) => {

    let qry = `SELECT firstName, lastName FROM user WHERE userID = ${req.query.refID}`;

    con.query(qry, (err, response) => {
        if(err) throw err;
        res.send({
            referralName: `${response[0].firstName},${response[0].lastName}`
        });
    })
    
    
})

// *******************************************************
// ******** PUTs - the "U" in CRUD **********************
// *******************************************************
app.put('/update', (req, res) => {
    let qry = `UPDATE user SET firstName= '${ req.body.firstName}', lastName='${req.body.lastName}' WHERE userID=${req.body.userID}`;
    con.query(qry, (err) => {
        if(err) throw err;
        res.send({ msg: 'record updated'});
    })

    
})

app.put('/deactivate', (req, res) => {
    let qry = `UPDATE user SET active=0 WHERE userID = ${req.body.userID}`;
    con.query(qry, (err) => {
        if(err) throw err;
        res.send({ msg: 'record deactivated'});
    })
    
})

// *******************************************************
// ******** POSTs - the "C" in CRUD **********************
// *******************************************************
app.post('/signup', (req, res) => {
    let newRec = {
		active:1,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
		Email:req.body.Email,
		age:req.body.age,
		bloodGroup:req.body.bloodGroup,
		Gender:req.body.Gender,
		Address:req.body.Address,
		City:req.body.City,
		postalCode:req.body.postalCode
		
    };
   
    let insertedID;
    con.query('INSERT INTO user SET ?', newRec, (err, response)=>{
        if(err) throw err;
        res.send({msg: `record added with an ID of ${response.insertId}`})
        insertedID = response.insertId;
    })
    setTimeout(() => {
        let insertEmail = {
            userID: insertedID,
            Email:req.body.email,
            Type: 'Primary',
            active:1
        }
        con.query('INSERT INTO Email SET ?', insertEmail, (err) =>{
            console.log('Loged in')
        })
    }, 3000);
})

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// X*****************************************************X
// X******* DELETEs - No Deletes, no "D" in CRUD ********X
// X*****************************************************X
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// The Delete or Remove Operation simply calls the
//      deactivate route

// *******************************************************
// ******** Start the Server *****************************
// *******************************************************
app.listen(port, () => {
    console.log(`The Server is Up and Running on ${port} `);
})

// *******************************************************
// ******** End of Code **********************************
// *******************************************************