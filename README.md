# SBA Javascript Fundamentals

This assignment uses Javascript to compile and organize a
collection of data. The provided data consists of arrays,
objects, objects inside of objects, and an array of objects.

# Different types of data:

A CourseInfo object, which looks like this:
```
{
  "id": number,
  "name": string,
}
```

An AssignmentGroup object, which looks like this:
```
{
  "id": number,
  "name": string,
  // the ID of the course the assignment group belongs to
  "course_id": number,
  // the percentage weight of the entire assignment group
  "group_weight": number,
  "assignments": [AssignmentInfo],
}
```

Each AssignmentInfo object within the assignments array looks like this:
```
{
  "id": number,
  "name": string,
  // the due date for the assignment
  "due_at": Date string,
  // the maximum points possible for the assignment
  "points_possible": number,
}
```

An array of LearnerSubmission objects, which each look like this:
```
{
    "learner_id": number,
    "assignment_id": number,
    "submission": {
      "submitted_at": Date string,
      "score": number
    }
}
```

# Expected Results
```
{
    // the ID of the learner for which this data has been collected

    "id": number,

    // the learner’s total, weighted average, in which assignments
    // with more points_possible should be counted for more
    // e.g. a learner with 50/100 on one assignment and 190/200 on another
    // would have a weighted average score of 240/300 = 80%.

    "avg": number,

    // each assignment should have a key with its ID,
    // and the value associated with it should be the percentage that
    // the learner scored on the assignment (submission.score / points_possible)

    <assignment_id>: number,

    // if an assignment is not yet due, it should not be included in either
    // the average or the keyed dictionary of scores
}
```
