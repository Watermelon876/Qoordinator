const Proposal = require('../api/models/proposal').Proposal;

/**
 * Checks whether proposalId exists in database.
 */
function checkProposalExists(proposalNumber, proposalTitle, callback) {
    
}

/**
 * Adds proposal to database.
 * @param{proposalData} JSON object containing email body,
 *   proposal name, number participants required to trigger 
 * @param{idCallback}
 */
function addProposal(proposalData, idCallback) {
    Proposal.create(proposalData)
    .then(proposalRecord => {
        idCallback(null, proposalRecord.id);
    });
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
