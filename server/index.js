const express = require('express');
const app = express();

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
        const proposal = getProposal(req.params.proposalID);
        if(proposal == null) {
            //Send 404
            res.redirect(404, '/proposalNotFound')
            return;
        }

        if(proposal.hasPassword) {
            //TODO: Send password screen as response
        } else {
            //Post to server 
        }
    })
    .post((req, res) => {
        //Request should have proposalID and passwordHash
        const proposal = getProposal(req.body.proposalID);
        if(proposal == null) {
            //Send 404
            res.redirect(404, '/proposalNotFound')
            return;
        }
        
        if(proposal.hasPassword) {
            if(proposal.passwordHash == req.body.passwordHash) {
                //Render webpage with proposal parameters and send back
            } else {
                res.redirect(200, '/permissiondenied');
                //TODO: somehow record failed attempt and user agent
            }
        }
    });

app.post('/join', (req, res) => {
    try{
        joinProposal(req.body.proposalID, req.body.passwordHash, req.body.email);
    } catch(err) {
        //Render webpage with err 
    }

    //If joining proposal succeeds, render success with 'join'
});

function getProposal(proposalID) {
    //Check if proposalID exists
    //If proposalID exists in database, format it into JSON and return it
    //otherwise return null
    if(!proposalID) {
        return null;
    }
}

function addProposal(params) {
    const time = Date.now();
    const proposalID = assignID(time, params.name);
    //Store in database
}

function joinProposal(proposalID, passwordHash, email) {
    const proposal = getProposal(proposalID);
    
    if(proposal.hasPassword) {
        if(proposal.passwordHash == passwordHash) {
        } else {
            throw 'Incorrect password.';
        }
    }

    var numberOfParticipants = proposal.numParticipants+1;
    var emails = (proposal.emails).push(email);

    //put in some postgres code to update the proposal accordingly
}

/**
 * Hashes together time and proposal name to create unique proposalID
 * @param{time} Current time of call
 * @param{name} Name of proposal
 */
function assignID(time, name) {
}

function sendEmail(proposalName, emailBody, emailTargets) {
    for(target in emailTargets) {
        console.log("${target} recieved email: ${emailBody} for proposal ${proposalName}");
    }
}
