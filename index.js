// code your solution here

// test parameters
// it('returns a year the Denver Broncos won the superbowl', function () {
//     expect(superbowlWin(record)).to.equal('2015');
//       });
    
//       it('returns undefined if the record has no win objects', function() {
//         const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]
//         expect(superbowlWin(sadReality)).to.equal(undefined)
//       });
//     });



function superbowlWin(records) {
   
        const winningRecord = records.find(record => record.result === 'win');

        // If winning record is found, return the year of the win
        // Otherwise, return undefined
        return winningRecord ? winningRecord.year : undefined;
};

// //test 2
// // Find the first record where the result is 'win' and the team is 'Denver Broncos'


function superbowlWin(records) {

    return '2015';
}
  



function superbowlWin(records) {
        // find the year the Denver Broncos won
        
        const winningRecord = records.find(record => record.team === 'Denver Broncos' && record.result === 'win');
        // find truthy or falsiness and if year is found, okay, else return undefined
        const year = winningRecord ? winningRecord.year : undefined;
        return year;
}
      