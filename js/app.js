$(document).ready(function() {

    //VARIABLES
    var $list = $('#tasks'),
        $submitBtn = $('#submit'),
        $name = $('#name'),
        $date = $('#date'),
        $assignedTo = $('#assigned'),
        $tasks = [{
            "name": "Test Task #1",
            "date": "12/01/2012",
            "assigned": "John Doe"
        }, {
            "name": "Test Task #2",
            "date": "12/02/2012",
            "assigned": "John Doe"
        }, {
            "name": "Test Task #3",
            "date": "12/03/2012",
            "assigned": "John Doe"
        }, {
            "name": "Test Task #4",
            "date": "12/04/2012",
            "assigned": "John Doe"
        }, {
            "name": "Test Task #5",
            "date": "12/05/2012",
            "assigned": "John Doe"
        }, {
            "name": "Test Task #6",
            "date": "12/06/2012",
            "assigned": "John Doe"
        }, {
            "name": "Test Task #7",
            "date": "12/07/2012",
            "assigned": "John Doe"
        }];

    //INIT FUNCTIONS
    function checkScroll(tasks) {
        //if there are more than 7 tasks
        var taskList = tasks.length;
        if (taskList >= 8) {
            //show the scroll bars
            $('#task-container').addClass('scroll');
        }
    }

    function showTasks(tasks) {
        var taskList = tasks;
        //loop through defaults and add to list
        for (var i = 0, tasksLength = taskList.length; i < tasksLength; i++) {
            $list.append('<li><p>' + taskList[i].name + ' <span>' + taskList[i].date + '</span><span class="assigned">' + tasks[i].assigned + '</span></p></li>');
        }
        //change background for every other one
        $("li:odd").css("background-color", "#ececec");
        //make sure the user can see them all without breaking UI
        checkScroll(taskList);
    }

    showTasks($tasks);


    //FUNCTIONS

    function submitForm(e) {
        //don't actually submit the form
        e.preventDefault();
        //get the value of text fields
        var name = $name.val(),
            date = $date.val(),
            assignedTo = $assignedTo.val();
        //Validate user's input
        if (name.length > 0 && date.length > 0 && assignedTo.length > 0) {
            //add new task to the front of the array
            $tasks.unshift({
                "name": name,
                "date": date,
                "assigned": assignedTo
            });
            //Remove the old list
            $list.empty();
            //Add the new list.  This will also ensure proper alternating bg colors.
            showTasks($tasks);
            //Clear the fields afterwards
            $name.val("");
            $date.val("");
            $assignedTo.val("");

        } else {
            //Use generic alert box to let the user know what's going on.
            alert('Oops, it looks like you forgot to add all the required information!');
        }
    }


    //EVENT HANDLERS

    $submitBtn.on('click', submitForm);





});
