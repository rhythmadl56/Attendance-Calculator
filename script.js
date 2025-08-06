function calculateAttendance() {
    const totalLectures = parseInt(document.getElementById('totalLectures').value);
    const attendedLectures = parseInt(document.getElementById('attendedLectures').value);
    const minPercentage = parseInt(document.getElementById('minPercentage').value);

    if (isNaN(totalLectures) || isNaN(attendedLectures) || isNaN(minPercentage)) {
        alert('Please fill in all fields with valid numbers');
        return;
    }

    if (attendedLectures > totalLectures) {
        alert('Attended lectures cannot be more than total lectures');
        return;
    }

    if (minPercentage < 0 || minPercentage > 100) {
        alert('Minimum percentage must be between 0 and 100');
        return;
    }

    const currentPercentage = (attendedLectures / totalLectures) * 100;

    let missableClasses = 0;
    let tempAttended = attendedLectures;
    let tempTotal = totalLectures;

    while (true) {
        const tempPercentage = (tempAttended / tempTotal) * 100;
        if (tempPercentage < minPercentage) {
            break;
        }
        missableClasses++;
        tempTotal++;
    }
    missableClasses--; 

    const attendanceElement = document.getElementById('currentAttendance');

    attendanceElement.textContent = `${currentPercentage.toFixed(2)}%`;
    
    attendanceElement.classList.remove('attendance-good', 'attendance-bad');
   
    if (currentPercentage >= minPercentage) {
        attendanceElement.classList.add('attendance-good');
    } else {
        attendanceElement.classList.add('attendance-bad');
    }

    document.getElementById('missableClasses').textContent = 
        `${missableClasses} classes`;
} 