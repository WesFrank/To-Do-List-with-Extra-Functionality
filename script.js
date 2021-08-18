var savedItems = JSON.parse(window.localStorage.getItem("taskItems"));

var taskItems = [].concat(savedItems);


// Manipulating native object

Array.prototype.isNull = function (){
    return this.join().replace(/,/g,'').length === 0;
};



// Store and retrieve (Local Memory)

function store() {
    window.localStorage.setItem("taskItems", JSON.stringify(taskItems));
};

window.addEventListener('load', (event) => {
    
    retrieve();

    console.log('page fully loaded');
    
});

function retrieve() {
 
    if (!savedItems || savedItems.isNull() ) {
        document.getElementById("display").innerHTML = "No Saved Tasks";
    }
    
    else {
        document.getElementById("display").innerHTML = savedItems.join('');
    }
};



document.getElementById("save").addEventListener("click", addTask);


function addTask() {



    if (document.getElementById('task').value=='') {
        alert('Task entry required');
        return;
    };
    
    if (due.value=='') {
        alert('Due date required');
        return;
    };


    var description = document.getElementById("task").value;
    
    var date = document.getElementById("due").value.slice(0,10);

    var time = document.getElementById("due").value.slice(11,16);

    var button = `<button index='${taskItems.length}' onclick = removeTask()> Delete </button>`;



    var taskString = '<span>' + description + '&nbsp; &nbsp; &nbsp;' + date + '&nbsp; &nbsp; &nbsp;' + time + '&nbsp; &nbsp; &nbsp;' + button + '<br><br> </span>';






        
    taskItems.push(taskString);



    document.getElementById("display").innerHTML = taskItems.join('');

    store();


    document.getElementById("task").value = '';
    document.getElementById("due").value = '';


};


function removeTask() {

    
    var i = parseInt(window.event.target.getAttribute('index'));

    delete taskItems[i];

    taskItems.filter(item => item);

    document.getElementById("display").innerHTML = taskItems.join('');

    store();


};