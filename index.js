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
//can also be used to pass test 1
        const winningRecord = records.find(record => record.result === 'win');

        // If winning record is found, return the year of the win
        // Otherwise, return undefined
        return winningRecord ? winningRecord.year : undefined;
};

// //test 2
// // Find the first record where the result is 'win' and the team is 'Denver Broncos'

  
superbowlWin = (record) => {
        const result = record.find( record => record.result === "W" );
        return !!result ? result.year : undefined;
      }




