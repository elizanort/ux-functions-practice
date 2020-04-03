/*
    Function Practice

    Managing a Classroom

    You just got hired by a school to create the API for their classes.

    They have already defined the objects for you, here are the create functions
    and an example classroom:
*/

function createAssignment(name, numPoints) {
    let assignment = {
        name: name,
        numPoints: numPoints
    }
    return assignment;
}

function createTeacher(name) {
    let teacher = {
        name: name
    };
    return teacher;
}

function createStudent(name) {
    let student = {
        name: name,
        grades: []
    };
    return student;
}

function createClassRoom(name, teacher, students) {
    let classRoom = {
        name: name,
        teacher: teacher,
        students: students,
        assignments: []
    };
    return classRoom;
}

let classroom = {
    name: "Intro to JavaScript",
    teacher: {
        name: "Mr J."
    },
    students: [
        {
            id: 11211,
            name: "Joe",
            grades: []
        },
        {
            id: 11512,
            name: "Sarah",
            grades: []
        },
        {
            id: 11314,
            name: "Harvey",
            grades: []
        },
        {
            id: 11231,
            name: "Monica",
            grades: []
        }
    ],
    assignments: [
        {
            id: 1,
            name: "Intro",
            numPoints: 5,
        },
        {
            id: 2,
            name: "Lesson 1",
            numPoints: 10,
        },
        {
            id: 3,
            name: "Lesson 2",
            numPoints: 10,
        },
        {
            id: 4,
            name: "Final",
            numPoints: 30,
        }
    ]
};

/*
    ----------------- API Functions ---------------------------------------

    Your job is to finish the functions below. 
    The function should match the information in the comment above it.

    A lot of these functions do the same things! 
    You should try to avoid having as much duplicate code as possible.

    The way to avoid duplicating code is by creating subroutines.  
    Create them in the Helper Functions section below. 

    There are a few there to get you started.
*/
/**
 * getStudentById
 * @param {object} classroom - the classroom object 
 * @param {string} studentId - the id string of a student
 * @returns {object}
 * This should return the object for the studen with the given studentId
 * 
 * If the student is not found, then return null.
 */
function getStudentById(classroom, studentId) {
    // Your Code Here!
}

/**
 * calculateAllGrades
 * @param {object} classroom - the classroom object
 * 
 * This should calculate grade for every student for every assignment.
 
 * If a student already has a grade for an assignment, you should not 
 * calculate them a new one.
 */
function calculateAllGrades(classroom) {
    // Your Code Here!
}

/**
 * calculateGradesForAssignmentId
 * @param {object} classroom - the classroom object
 * @param {string} assignmentId - the id of the assignment
 * 
 * This should calculate the grades for every student for the given
 * assignmentId.
 * 
 * If a student already has a grade for an assignment, you should not 
 * calculate them a new one.
 * 
 * Waning: the assignments may not necesarilly be graded in order!
 * Do not assume that the grades array for a student will be the correct length.
 * You should put the grade for a given assignment at the same index as the assignment
 * 
 * For example, the assignment "Lesson 1" is at index 1.
 * So every student should have their grade for "Lesson 1" in index 1 of their grades array.
 */
function calculateGradesForAssignmentId(classroom, assignmentId) {
    // Your Code Here!
}

/**
 * getListOfStudentsWhoFailedAssignmentId
 * @param {object} classroom - the classroom object
 * @param {string} assignmentId - the id of an assignment
 * @returns {object[]} 
 * This should return the list of all students who failed the 
 * assignment with the given id.
 * 
 * Hint: You can find if a student is failing if their grade is less
 * than getFailingGradeThreshold(numPoints)
 */
function getListOfStudentsWhoFailedAssignmentId(classroom, assignmentId) {
    // Your Code Here!
    return [];
}

/**
 * getListOfStudentsWhoAreFailing
 * @param {object} classroom 
 * @returns {object[]} 
 * This should return the list of all students who have a failing overall grade in the class.
 * To calculate a students overall grade, first add up all of their grades. 
 * Then add up the total points available for every assignment call getFailingGradeThreshold
 * with it.
 * 
 * If the students total grade is less than the failingGradeThreshold then they are failing.
 */
function getListOfStudentsWhoAreFailing(classroom) {
    // Your Code Here!
    return [];
}

/**
 * teachAssignment
 * @param {object} classroom - the classroom object
 * @param {object} assignment - an assignment object for a new assignment
 * 
 * This should add the given assignment to the assignments array of the 
 * classroom.
 * 
 * This should not grade the assignment yet.
 * 
 * If the assignment is already in the assignments array, it should not be
 * added twice!  Every assignment should only appear once. 
 * 
 */
function teachAssignment(classroom, assignment) {
    // Your Code Here!
}

/**
 * teachAndGradeAssignment
 * @param {object} classroom - the classroom object
 * @param {object} assignment - an assignment object for a new assignment
 * 
 * This should add the given assignment to the assignments array of the 
 * classroom.
 * 
 * This should also immediately grade the assignment for all students.
 * 
 * If the assignment is already in the assignments array, it should not be
 * added twice!  Every assignment should only appear once. 
 */
function teachAndGradeAssignment(classroom, assignment) {
    // Your Code Here!
}

/**
 * findAverageGradeForAssignment
 * @param {object} classroom - the classroom object
 * @param {string} assignmentId - the id of an assignment
 * @returns {number}
 * 
 * This should return the average grade that students received for the 
 * given assignmentId.
 * 
 * The average grade can be computer by the following formula
 * 
 * averageGrade = (sum of all grades received by students for the assignment) / number of students
 */
function findAverageGradeForAssignmentId(classroom, assignmentId) {
    // Your Code Here!
    return -1;
}

/**
 * getFinalGrades
 * @param {*} classroom
 * @returns {object[]}
 * 
 * This should return a list containg each student and their final grade.
 * 
 * The list should look like this
 * 
 * [
 *   {
 *     id: 12321,
 *     name: "joe",
 *     finalGrade: "A"
 *   },
 *   etc...
 * ]
 * 
 * To compute the final grade, use the getFinalLetterGrade function.
 */
function getFinalGrades(classroom) {
    // Your Code Here!
    return [];
}

/*  -------- Helper Functions ---------------------------------------
    
    Put all of your subroutines down here.  Try to make them clean
    and reusable.  Try to use them as much as possible. 

    A few are already here for you.

    You should add at least a few subroutines!  If you do not, you will 
    lose points.

    Hint: In the rubric, there are 7 subroutines.  You can have more or 
    less than that, but there are a lot of options on how to optimize your code!

    The more subroutines you write, the less overall code you will end up
    writing in the whole assignment!

    You do not need to add comments above your functions like the examples,
    those are just there to help you understand what they are doing.

*/

// A failing grade is less than 60 %
const FAILING_GRADE_PERCENTAGE = 0.6;


/**
 * calculateAssignmentGradeForStudent
 * @param {object} student - the student to grade
 * @param {assignment} assignment - the assignment they are being graded on.
 * @returns {number} the students new grade
 * This returns the grade that the student should receive on the
 * given assignment.
 * 
 * Note that this does not put the grade into the students grades
 * array, this only returns the number.
 */
function calculateAssignmentGradeForStudent(student, assignment) {
    // ~~ Teacher Grades the student's work ~~
    let randomChance = Math.random();
    let grade = Math.ceil(assignment.numPoints * randomChance);
    return grade;
}

/**
 * getFailingGradeThreshold
 * @param {number} numPointsAvailable - The number of points available for the grade.
 * 
 * This calculates the grade which is the failing threshold.
 * 
 * The FAILING_GRADE_PERCENTAGE is 60%, so 60% * the number of points availabe 
 * gives the lowest non-failing grade.
 * 
 * A grade is failing if it is less than the failingGradeThreshold returned from this
 * function.
 */
function getFailingGradeThreshold(numPointsAvailable) {
    return numPointsAvailable * FAILING_GRADE_PERCENTAGE;
}

/**
 * getFinalLetterGrade
 * @param {number} sumOfPoints All the points received for a student
 * @param {number} totalAvailablePoints The total possible number of points they could receive
 * 
 * This returns the Letter grade for the given number of points.
 */
function getFinalLetterGrade(sumOfPoints, totalAvailablePoints) {
    let gradeNumber = (sumOfPoints / totalAvailablePoints) * 100;

    if (gradeNumber > 89) {
        return "A";
    } else if (gradeNumber > 79) {
        return "B";
    } else if (gradeNumber > 69) {
        return "C";
    } else if (gradeNumber > 59) {
        return "D";
    } else {
        return "F";
    }
}

// Add your subroutines here!


/* 
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/

{
    console.log("-----Tests for getStudentById-----");

    {
        console.log("* Can Fetch a student");
        let testClassroom = getTestClassroom();
        let student = getStudentById(testClassroom, 11211);
        console.log(!!student && student.name == "Joe");
    }

    {
        console.log("* Can returns null for no student");
        let testClassroom = getTestClassroom();
        let student = getStudentById(testClassroom, 132132);
        console.log(student == null);
    }

    console.log("-----Tests for calculateGradesForAssignmentId-----");

    {
        console.log("* Can calculate first assignment");
        let testClassroom = getTestClassroom();
        calculateGradesForAssignmentId(testClassroom, testClassroom.assignments[0].id);

        let everyStudentHasAGrade = true;
        for (let student of testClassroom.students) {
            if (!student.grades[0] > 0) {
                everyStudentHasAGrade = false;
                console.log(student.name + " is missing a grade!");
            }
        }
        console.log(everyStudentHasAGrade);
    }

    {
        console.log("* Can calculate final assignment");
        let testClassroom = getTestClassroom();
        let assignmentIndex = 3;
        let assignmentId = 4;
        calculateGradesForAssignmentId(testClassroom, assignmentId);

        let everyStudentHasAGrade = true;
        for (let student of testClassroom.students) {
            if (!student.grades[assignmentIndex] > 0) {
                everyStudentHasAGrade = false;
                console.log(student.name + " is missing a grade!");
            }
        }
        console.log(everyStudentHasAGrade);
    }

    {
        console.log("* Won't recalculate assignment");
        let testClassroom = getTestClassroomWithGrades();
        let assignmentIndex = 0;
        let oldGrade = testClassroom.students[0].grades[assignmentIndex];
        calculateGradesForAssignmentId(testClassroom, testClassroom.assignments[assignmentIndex].id);

        console.log(testClassroom.students[0].grades[assignmentIndex] === oldGrade);
    }

    console.log("-----Tests for calculateAllGrades-----");

    {
        console.log("* Can calculate all grades");
        let testClassroom = getTestClassroom();
        calculateAllGrades(testClassroom);

        let numAssignments = testClassroom.assignments.length;

        let everyStudentHasGrades = true;
        for (let student of testClassroom.students) {
            if (student.grades.length != numAssignments) {
                everyStudentHasGrades = false;
                console.log(student.name + " is missing assignments!");
            } else {
                for (let i = 0; i < numAssignments; i++) {
                    if (!student.grades[i] > 0) {
                        everyStudentHasGrades = false;
                        console.log(student.name + " is missing a grade!");
                    }
                }
            }
        }
        console.log(everyStudentHasGrades);
    }

    console.log("-----Tests for getListOfStudentsWhoFailedAssignmentId-----");

    {
        console.log("* Can get list for assignment 1");
        let testClassroom = getTestClassroomWithGrades();

        let list = getListOfStudentsWhoFailedAssignmentId(testClassroom, 1);
        let hasSarah = false;
        let hasHarvey = false;
        let hasMonica = false;
        for (let student of list) {
            if (student.name == "Sarah") {
                hasSarah = true;
            } else if (student.name == "Harvey") {
                hasHarvey = true;
            } else if (student.name == "Monica") {
                hasMonica = true;
            }

        }
        console.log(list.length == 3 && hasSarah && hasHarvey && hasMonica);
    }

    console.log("-----Tests for getListOfStudentsWhoAreFailing-----");

    {
        console.log("* Can get list");
        let testClassroom = getTestClassroomWithGrades();

        let list = getListOfStudentsWhoAreFailing(testClassroom);
        let hasSarah = false;
        let hasHarvey = false;
        let hasMonica = false;
        for (let student of list) {
            if (student.name == "Sarah") {
                hasSarah = true;
            } else if (student.name == "Harvey") {
                hasHarvey = true;
            }
        }
        console.log(list.length == 2 && hasSarah && hasHarvey);
    }

    console.log("-----Tests for teachAssignment-----");

    {
        console.log("* Can add new assignment");
        let testClassroom = getTestClassroom();
        let assignment = createAssignment("test", 5);
        teachAssignment(testClassroom, assignment);

        console.log(testClassroom.assignments.includes(assignment));
    }

    {
        console.log("* Doesn't add existing assignment");
        let testClassroom = getTestClassroom();
        let numAssignments = testClassroom.assignments.length;
        teachAssignment(testClassroom, testClassroom.assignments[1]);

        console.log(testClassroom.assignments.length === numAssignments);
    }

    console.log("-----Tests for teachAndGradeAssignment-----");

    {
        console.log("* Can add new assignment");
        let testClassroom = getTestClassroom();
        let assignment = createAssignment("test", 5);
        teachAndGradeAssignment(testClassroom, assignment);
        let assignmentIndex = testClassroom.assignments.indexOf(assignment);

        let everyStudentHasAGrade = true;
        for (let student of testClassroom.students) {
            if (!student.grades[assignmentIndex] > 0) {
                everyStudentHasAGrade = false;
                console.log(student.name + " is missing a grade!");
            }
        }

        console.log(testClassroom.assignments.includes(assignment) && everyStudentHasAGrade);
    }

    {
        console.log("* Doesn't add existing assignment");
        let testClassroom = getTestClassroom();
        let numAssignments = testClassroom.assignments.length;
        let assignmentIndex = 1;
        teachAndGradeAssignment(testClassroom, testClassroom.assignments[assignmentIndex]);

        let everyStudentHasAGrade = true;
        for (let student of testClassroom.students) {
            if (!student.grades[assignmentIndex] > 0) {
                everyStudentHasAGrade = false;
                console.log(student.name + " is missing a grade!");
            }
        }

        console.log(testClassroom.assignments.length === numAssignments && everyStudentHasAGrade);
    }

    console.log("-----Tests for findAverageGradeForAssignment-----");

    {
        console.log("* Avg the Midterm");
        let testClassroom = getTestClassroomWithGrades();
        let assignment = testClassroom.assignments[3];
        let avgGrade = findAverageGradeForAssignmentId(testClassroom, assignment.id);

        console.log(avgGrade == ((27 + 12 + 8 + 30) / 4));
    }

    console.log("-----Tests for getFinalGrades-----");

    {
        console.log("* Calculate Grades");
        let testClassroom = getTestClassroomWithGrades();
        let finalGrades = getFinalGrades(testClassroom);

        let gradesMatch = true;

        if (!finalGrades || finalGrades.length < 1) {
            gradesMatch = false;
        }

        for (let student of finalGrades) {
            let correctGrade = false;
            if (student.name == "Joe" && student.id === 11211 && student.finalGrade == "B") {
                correctGrade = true;
            }
            if (student.name == "Sarah" && student.id === 11512 && student.finalGrade == "F") {
                correctGrade = true;
            }
            if (student.name == "Harvey" && student.id === 11314 && student.finalGrade == "F") {
                correctGrade = true;
            }
            if (student.name == "Monica" && student.id === 11231 && student.finalGrade == "A") {
                correctGrade = true;
            }
            if (!correctGrade) {
                gradesMatch = false;
            }
        }

        console.log(gradesMatch);
    }

    /*
       -------TEST UTILITIES------------------------------------------------------
       These are utilities for the tests.
    
       Do not modify anything below this line.
    
    */

    function getTestClassroomWithGrades() {
        let testClassroom = getTestClassroom();

        testClassroom.students[0].grades = [4, 9, 8, 27];
        testClassroom.students[1].grades = [1, 2, 3, 12];
        testClassroom.students[2].grades = [1, 3, 1, 8];
        testClassroom.students[3].grades = [1, 10, 10, 30];
        return testClassroom;
    }

    function getTestClassroom() {
        return {
            name: "Intro to JavaScript",
            teacher: {
                name: "Mr J."
            },
            students: [
                {
                    id: 11211,
                    name: "Joe",
                    grades: []
                },
                {
                    id: 11512,
                    name: "Sarah",
                    grades: []
                },
                {
                    id: 11314,
                    name: "Harvey",
                    grades: []
                },
                {
                    id: 11231,
                    name: "Monica",
                    grades: []
                }
            ],
            assignments: [
                {
                    id: 1,
                    name: "Intro",
                    numPoints: 5,
                },
                {
                    id: 2,
                    name: "Lesson 1",
                    numPoints: 10,
                },
                {
                    id: 3,
                    name: "Lesson 2",
                    numPoints: 10,
                },
                {
                    id: 4,
                    name: "Midterm",
                    numPoints: 30,
                }
            ]
        };
    }
}






