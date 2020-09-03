import clubs from "./clubs.js";
// function DataSource(onSuccess, onFailed) {
//     this.onSuccess = onSuccess;
//     this.onFailed = onFailed;
// }
class DataSource {
    // constructor(onSuccess, onFailed) {
    //     this.onSuccess = onSuccess;
    //     this.onFailed = onFailed;
    // }
    static searchClub(keyword) {
        return new Promise((resolve, rejected) => {
            const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
            if (filteredClubs.length) {
                resolve(filteredClubs);
            } else {
                rejected(`${keyword} is not found`);
            }

        });
        // if (filteredClubs.length) {
        //     this.onSuccess(filteredClubs);
        // } else {
        //     this.onFailed(`${keyword} is not found`);
        // }
    }
}

export default DataSource;
// DataSource.prototype.searchClub = function (keyword) {
//     const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

//     if (filteredClubs.length) {
//         this.onSuccess(filteredClubs);
//     } else {
//         this.onFailed(`${keyword} is not found`);
//     }
// };
