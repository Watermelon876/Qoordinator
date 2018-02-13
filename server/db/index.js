const { Pool } = require('pg');
const AsyncLock = require('node-async-locks').AsyncLock;

const pool = new Pool();
var asyncLock = new AsyncLock();

//TODO: Protect against sql injection!

/**
 * Checks whether proposalId exists in database.
 */
function checkProposalExists(proposalId, callback) {
    
}

/**
 * Adds proposal to database.
 * @param{proposalData} JSON object containing email body,
 *   proposal name, number participants required to trigger 
 * @param{idCallback}
 */
function addProposal(proposalData, idCallback) {
}

/**
 * Returns the id allocated to the proposalData along with an error.
 * @callback idCallback
 * @param err
 * @param allocatedId;
 */

/**
 * Adds user to a proposal given by an Id
 */
function joinProposal(userData, proposalId, callback) {
    pool.query('UPDATE num_joined SET num_joined + 1 WHERE id = $1;',
                proposalID, (err, res) => {
        
    });
}

/**
 * Gets data for a proposal and parses it into a Javascript object
 */
function getProposal(proposalId, callback) {
    checkProposalExists(proposalId, (err, exists) => {
        if(err) {
            callback(err);
        }
        
        if(!exists) {
            callback('Proposal does not exist');
        }

        //TODO: Add code to access database and format

    });
}
