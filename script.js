console.log("quick test...");
console.log("\n\n\n");

// Variables and Data needed for testing
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    //array of objects
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
//* array of objects
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

// Created function to retreive unique ids
function getLearnerID(learnerArray) {
  let tempArray = learnerArray.map((obj) => obj["learner_id"]);
  let idArray = [];

  tempArray.forEach((num) => {
    if (idArray.indexOf(num) == -1) {
      idArray.push(num);
    }
  });

  return idArray;
}

function getAverage(id, assignmentInfo, learnerArray) {
  // let assignments = checkDueDate(assignmentInfo);
  // let total = 0;
  // // check if learner id is correct
  // learnerArray.forEach((obj) => {
  //   if (obj["learner_id"] == id) {
  //     if (checkDueDate) {
        
  //     } else {

  //     }
  //   }
  // })
  
  // assignments.forEach((element) => {
  //       if (element == "include" || element == "important") {
  //         total += obj.submission.score;
  //       }
  //       });

  return 0.88;
}

function checkDueDate(assignmentData) {
  let info = assignmentData.assignments;
  let dateResults = [];

  for (const obj of info) {
    let dueDate = obj["due_at"];
    let today = new Date();
    if (Date.parse(dueDate) > Date.parse(today)) {
      dateResults.push("exclude");
    } else if (Date.parse(dueDate) <= Date.parse(today)) {
      dateResults.push("include");
    } else {
      dateResults.push("important");
    }
    console.log(dateResults);

}
return dateResults;
}

console.log(checkDueDate(AssignmentGroup));

function setLatePenalty(score) {}

// Create function to provide assignment scores
// including a late penalty, if applicable
function getAssignmentData(id, assignmentInfo, learnerArray) {
  let average = [];
  let assignmentArray = [];
  let assignmentIndex = 1;

  // check which assignments are due
  learnerArray.forEach((obj) => {
    if (obj["learner_id"] === id) {
      // if (checkDueDate(obj.submission["submitted"])) {
      //   if (obj["assignment_id"] === assignmentIndex) {
      //     assignmentIndex++;
      //   }
      // }
    }
    // console.log(obj.submission["score"]);
  });
  // let test = learnerArray[3]["assignment_id"]
  return [0.99,0.83];
}

//* Create a function named getLearnerData()
function getLearnerData(course, assignment, learnerInfo) {
  const results = [];

  // Variable to hold array of unique learner ids
  let ids = getLearnerID(learnerInfo);

  try {
    if (CourseInfo.id === AssignmentGroup["course_id"]) {
      console.log(
        "\t\t\tLearner Data \n ======================================="
      );
    } else {
      throw "Invalid Input: Course ID is not the same.";
    }
  } catch (error) {
    console.log(error);
    return;
  }

  // For each loop to "push" each learner's data
  // to the results array
  ids.forEach((learnerId) => {
    const data = {
      id: learnerId,
      avg: getAverage(learnerId, assignment, learnerInfo),
      assignment_id: getAssignmentData(learnerId, assignment, learnerInfo),
    };
    results.push(data);
  });

  return results;
}

// log results of getLearnerData function
console.log(getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions));
// getAssignmentData(125, AssignmentGroup, LearnerSubmissions);

//array of data separated by assignment id + (submission.score / points_possible)
// Use assignmentGroup to provide id, name, course ID, group weight & assignments
// Use learnerSubmission  to provide learner ID, assignment ID and submission object
// should return an array of objects with keys id, avg, assignment_id

// if course_id of AssignmentGroup != id of CourseInfo, throw error

// points_possible should not be equal to 0; what if it is a string

// if assignment is not due yet, do not include in results or average

// if submiited_at is past due_at, deduct 10% of points possible
