const express = require('express');
const app = express();

const db = require('db');

const logger = function(req, res, next) {
    //Used for debug purposes
    next();
}

app.use(logger);

app.get('/', (req, res) => {
        //TODO: Serve main page from which proposals can be created or joined.
    });

app.get('/proposalnotfound', (req, req) => {
        //Redirect from 404
        //TODO: Serve webpage that allows user to go back to home page
    });

app.get('/permissiondenied', (req, res) => {
        //Redirect from 200
        //TODO: Serve webpage that allows user to go back to home page
    });

app.get('/proposals/public', (req, res) => {
        //TODO: Serve table containing public proposals.
    });

app.route('/proposals/:proposalID:')
    .get((req, res) => {
        //Check database for proposalID
        db.getProposal(req.params.proposalID, (err, data) => {
            if(err) {
                //TODO: implement error logging
                //Send 404
                res.redirect(404, '/proposalNotFound')
                return;
            }
            if(data.hasPassword) {
                //TODO: Send password screen as response
            } else {
                //Post to server 
            }
        });
    })
    .post((req, res) => {
        //Somehow implement password-based join
    });

app.post('/join', (req, res) => {
    db.joinProposal(req.body.proposalID, req.body.passwordHash, req.body.email,
        (err, success) => {
            if(err) {
                //res.render(error.html, err.message)
                return;
            }
            if(!success) {
                //res.render(error.html, 'Could not join')
                return;
            }

        }
    );
});


function sendEmail(proposalName, emailBody, emailTargets) {
    for(target in emailTargets) {
        console.log("${target} recieved email: ${emailBody} for proposal ${proposalName}");
    }
}
