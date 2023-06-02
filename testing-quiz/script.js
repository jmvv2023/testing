
var allQuestions = [
  { /* empty! */ },
	{question: "What is the purpose of test completion or exit criteria in a test plan?", 
		choices: ["to know when a specific test has finished its execution", "to ensure that the test case specification is complete", "to set the criteria used in generating test inputs", "to know when test planning is complete", "to plan when to stop testing"], correctAnswer: 5}, 
		/* end question number 1 */
	{question: "Which of the following would be a valid measure of test progress?", 
		choices: ["Number of undetected defects", "Number of test cases not yet executed", "Total number of defects in the product", "Effort required to fix all defects"], correctAnswer: 2}, 
		/* end question number 2 */
	{question: "A test harness is a:", 
		choices: ["A high level document describing the principles, approach and major objectives of the organization regarding testing", "A distance set of test activities collected into a manageable phase of a project", "A test environment comprised of stubs and drives needed to conduct a test", "A set of several test cases for a component or system under test"], correctAnswer: 3}, 
		/* end question number 3 */
	{question: "Before launching a software which testing is to be done in-house?", 
		choices: ["Beta", "Gamma", "Alpha", "None of the above"], correctAnswer: 3}, 
		/* end question number 4 */
	{question: "Which is NOT true -  The black box tester:", 
		choices: ["should be able to understand a functional specification or requirements document", "should be able to understand the source code", "is highly motivated to find faults", "is creative to find the system’s weaknesses"], correctAnswer: 2}, 
		/* end question number 5 */
	{question: "Which testing phase tests individual software modules combined together as a group?", 
		choices: ["Module testing", "Integration testing", "White Box testing", "Software testing"], correctAnswer: 2}, 
		/* end question number 6 */
	{question: "Which of the following is a major task of test planning?", 
		choices: ["Determining the test approach", "Preparing test specifications", "Evaluating exit criteria and reporting", "Measuring and analyzing results"], correctAnswer: 1}, 
		/* end question number 7 */
	{question: "Verification test is:", 
		choices: ["Checking that we are building the right system", "Checking that we are building the system right", "Performed by an independent test team", "Making sure that it is what the user really wants"], correctAnswer: 2}, 
		/* end question number 8 */
	{question: "The main focus of acceptance testing is:", 
		choices: ["finding faults in the system", "ensuring that the system is acceptable to all users", "testing the system with other systems", "testing for a business perspective", "testing by an independent test team"], correctAnswer: 4}, 
		/* end question number 9 */
	{question: "Which of the following is NOT a static testing technique?", 
		choices: ["Error guessing", "Walkthrough", "Data flow analysis", "Inspections"], correctAnswer: 1}, 
		/* end question number 10 */
	{question: "The difference between re-testing and regression testing is:", 
		choices: ["re-testing is running a test again; regression testing looks for unexpected side effects", "re-testing looks for unexpected side effects; regression testing is repeating those tests", "re-testing is done after faults are fixed; regression testing is done earlier", "re-testing uses different environments, regression testing uses the same environment", "re-testing is done by developers, regression testing is done by independent testers"], correctAnswer: 1}, 
		/* end question number 11 */
	{question: "In which activity of the Fundamental Test Process is the test environment set up?", 
		choices: ["Test implementation and execution", "Test planning and control", "Test analysis and design", "Evaluating exit criteria and reporting"], correctAnswer: 2}, 
		/* end question number 12 */
	{question: "Equivalence partitioning is:", 
		choices: ["A black box testing technique used only by developers", "A black box testing technique than can only be used during system testing", "A black box testing technique appropriate to all levels of testing", "A white box testing technique appropriate for component testing"], correctAnswer: 3}, 
		/* end question number 13 */
	{question: "Beta testing is:", 
		choices: ["Performed by customers at their own site", "Performed by customers at their software developer’s site", "Performed by an independent test team", "Useful to test bespoke software", "Performed as early as possible in the lifecycle"], correctAnswer: 1}, 
		/* end question number 14 */
	{question: "In which activity of the Fundamental Test Process is the test environment set up?", 
		choices: ["Test implementation and execution", "Test planning and control", "Test analysis and design", "Evaluating exit criteria and reporting"], correctAnswer: 1}, 
		/* end question number 15 */
	{question: "What constitutes a good test environment?", 
		choices: ["It is possible to adequately determine to what extent the test object meets the requirements", "It has been configured and tested by qualified personnel", "It meets both of the requirements listed above", "It is as similar to the production environment as possible and the test data is consistent"], correctAnswer: 1}, 
		/* end question number 16 */
	{question: "", 
		choices: ["", "", "", ""], correctAnswer: 2}, 
		/* end question number 17 */
	{question: "", 
		choices: ["", "", "", ""], correctAnswer: 2}, 
		/* end question number 18 */
	{question: "", 
		choices: ["", "", "", ""], correctAnswer: 2}, 
		/* end question number 19 */
	{question: "", 
		choices: ["", "", "", ""], correctAnswer: 2} 
		/* end question number 20 */
];





var next = document.getElementById("next");
var choices = allQuestions.choices;
var counter = 1;
var score;
var correctAnswers = 0;
var incorrectAnswers = 0;

$(document).ready(function() { /* function to start with first question */
  $("#question-text").append(allQuestions[1].question);
  for (var i=0; i<allQuestions[1].choices.length; i++) {
      $("#choices").append('<li class="answer"><input type="radio" name="quiz-answer" value="' + i + '"><span>' + allQuestions[1].choices[i] + '</span></input></li>');
    }
  
});



next.onclick = function() { /* function used to generate questions when clicking next question*/
  var value = $("input[type='radio']:checked").val(); /* store the  selected answer */
  var emptyQuestion = []; /* start with an empty array */
  counter++; /* increment the counter to cycle through questions */
  emptyQuestion = allQuestions[counter]; /* fill empty array with each new question onclick */
  
  if (counter > allQuestions.length - 1) { /* check if there are still questions left, if not... */
    $("#question-text").empty(); /* remove question */
    $("#choices").empty(); /* remove choices */
    $("#button-container").empty(); /*remove next button */
    $("#question-text").append("Final score"); /* add score title */
    
      if (value == allQuestions[counter - 1].correctAnswer) { /* checking to see if the answer is right */
        correctAnswers++;
      }
      else {
        incorrectAnswers++;
      }
    
      score = Math.round((correctAnswers / (correctAnswers + incorrectAnswers)) * 100); /* assign score and round it */
      $("#score").append(score + '%').hide().fadeIn("slow");
  } 
  
  else { /* ..otherwise, keep on goin' */
    
    $("#question-text").empty(); /* reset question text onclick */
    $("#choices").empty(); /* reset choices onclick */

    $("#question-text").append(emptyQuestion.question).hide().fadeIn('slow'); /* appends the quiz question onclick and adds fade-in animation */

    for (var i=0; i<emptyQuestion.choices.length; i++) { /* function to append the quiz answers onclick */
        $("#choices").append('<li class="answer"><input type="radio" name="quiz-answer" value="' + i + '"><span>' + emptyQuestion.choices[i] + '</span></input></li>').hide().fadeIn('slow');
      }

    if (value == allQuestions[counter - 1].correctAnswer) { /* checking to see if the answer is right */
      correctAnswers++;
    }
    else {
      incorrectAnswers++;
    }
             
  } /* end if-else statement to check if user is out of questions */  
  
};
