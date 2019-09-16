exports.sortShifts = (arr) => {
    let listDays = [];
    for (let i = 0; i < arr.length; i++) {
        if (!listDays.includes(arr[i].date)) {
            listDays.unshift(arr[i].date);
        }
    }
    let newArr = [];
    for (let j = 0; j < listDays.length; j++) {
        let day = {
            date: listDays[j],
            shifts: arr.filter(a => {
                return a.date == listDays[j];
            })
        };
        newArr.push(day);
    }
    return newArr;
};
