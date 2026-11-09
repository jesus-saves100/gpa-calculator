// display all input element
const courseCode = document.querySelector('.code')
const courseTitle = document.querySelector('.title')
const courseUnit = document.querySelector('.unit')
const courseGrade = document.querySelector('.grade')

// buttons section
const addBtn = document.querySelector('.add-btn')
const removeBtn = document.querySelector('.remove-current-course')
const removeAllBtn = document.querySelector('.remove-all')
const calculateGpaBtn = document.querySelector('.gpa-calculator')

// display section
const displayElement = document.querySelector('.display-course')
const displayGpa = document.querySelector('.display-gpa')

let courses = []

function addCourse (){
    let course = {
        code: courseCode.value,
        title: courseTitle.value,
        unit: courseUnit.value,
        grade: courseGrade.value
    }

    if (courseCode.value ==='' || courseTitle.value ==='' || courseUnit.value ==='' || courseGrade.value ===''){
        
        if(courseCode.value ===''){
            displayElement.textContent = `Input your course code`
            console.log('Input your course code')
        } else if (courseTitle.value ===''){
            displayElement.textContent = `Input course title`
            console.log('Input your course title')
        } else if (courseUnit.value ===''){
            displayElement.textContent = `Input course unit`
            console.log('Input your course unit')
        } else if (courseGrade.value ===''){
            displayElement.textContent = `Input course grade`
            console.log('Input your course grade')
        }
    } else {
        courses.push(course)
        displayEachCourse();
    }

    console.log(courses)

    courseCode.value = ''
    courseTitle.value = ''
    courseUnit.value = ''
    courseGrade.value = ''
}

// display all courses using the loop
function displayEachCourse (){
    let eachCourse = ''
    for (let i = 0; i < courses.length; i++) {
        const { code, title, unit, grade } = courses[i];
        html = 
            `
                <div>${code}</div>
                <div>${title}</div>
                <div>${unit}</div>
                <div>${grade}</div>
                <button class="remove-btn"
                onclick="courses.splice(${i}, 1)
                displayEachCourse()
                ">Delete Course</button>
            `
        eachCourse += html
    }
    displayElement.innerHTML = eachCourse
}

addBtn.addEventListener('click', addCourse)

function removeAll(){
    courses = []
    displayElement.innerHTML = ''
}
removeAllBtn.addEventListener('click', removeAll)

// to calculate all gpa
function getCoursePoint (){
    let gpa = 0
    let totalQualityPoint = 0
    let totalCourseUnit = 0

    let qualityPoint = 0
    let gradeValue = 0
    
    courses.forEach((eachCourse, i) =>{
        const { unit, grade } = eachCourse;
        
        const unitValue = Number(unit)

        if (grade === 'A' || grade === 'a') {
            gradeValue = 5
            console.log('You got 5 points')
            qualityPoint = unitValue * Number(gradeValue)
            console.log(qualityPoint)
        } else if (grade === 'B' || grade === 'b'){
            gradeValue = 4
            console.log('You got 4 points')
            qualityPoint = unitValue * Number(gradeValue)
            console.log(qualityPoint)
        } else if (grade === 'C' || grade === 'c'){
            gradeValue = 3
            qualityPoint = unitValue * Number(gradeValue)
            console.log(qualityPoint)
        } else if (grade === 'D' || grade === 'd'){
            gradeValue = 2
            console.log('You got 2 points')
            qualityPoint = unitValue * Number(gradeValue)
            console.log(qualityPoint)
        } else if (grade === 'E' || grade === 'e'){
            gradeValue = 1
            console.log('You got 1 points')
            qualityPoint = unitValue * Number(gradeValue)
            console.log(qualityPoint)
        } else {
            gradeValue = 0
            console.log('You got 0 points')
            qualityPoint = unitValue * Number(gradeValue)
            console.log(qualityPoint)
        }
        totalQualityPoint += qualityPoint
        totalCourseUnit += unitValue
        gpa = totalQualityPoint / totalCourseUnit
    
    })

    // for (let i = 0; i < courses.length; i++) {
    //     const { unit, grade } = courses[i];
        
    //     const unitValue = Number(unit)

    //     if (grade === 'A' || grade === 'a') {
    //         gradeValue = 5
    //         console.log('You got 5 points')
    //         qualityPoint = unitValue * Number(gradeValue)
    //         console.log(qualityPoint)
    //     } else if (grade === 'B' || grade === 'b'){
    //         gradeValue = 4
    //         console.log('You got 4 points')
    //         qualityPoint = unitValue * Number(gradeValue)
    //         console.log(qualityPoint)
    //     } else if (grade === 'C' || grade === 'c'){
    //         gradeValue = 3
    //         qualityPoint = unitValue * Number(gradeValue)
    //         console.log(qualityPoint)
    //     } else if (grade === 'D' || grade === 'd'){
    //         gradeValue = 2
    //         console.log('You got 2 points')
    //         qualityPoint = unitValue * Number(gradeValue)
    //         console.log(qualityPoint)
    //     } else if (grade === 'E' || grade === 'e'){
    //         gradeValue = 1
    //         console.log('You got 1 points')
    //         qualityPoint = unitValue * Number(gradeValue)
    //         console.log(qualityPoint)
    //     } else {
    //         gradeValue = 0
    //         console.log('You got 0 points')
    //         qualityPoint = unitValue * Number(gradeValue)
    //         console.log(qualityPoint)
    //     }
    //     totalQualityPoint += qualityPoint
    //     totalCourseUnit += unitValue
    //     gpa = totalQualityPoint / totalCourseUnit
    // } 
    displayGpa.textContent = `GPA: ${gpa.toFixed(2)}`
}

calculateGpaBtn.addEventListener('click', getCoursePoint)