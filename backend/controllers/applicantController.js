const Applicant = require('../models/Applicant');
const {StatusCodes} = require('http-status-codes')

const createTranscript = async(req,res) => {
    const {name,prn,YOS,branch,address,contactNo,copies,certificates,originals,photoCopies,universityDetails} = req.body;
    // console.log(req.body);
    const fees = copies*700;
    const applicant = await Applicant.create({name,prn,YOS,branch,address,contactNo,copies,certificates,originals,photoCopies,universityDetails,fees});
    res.status(StatusCodes.CREATED).json({applicant});
}

module.exports =  {createTranscript}