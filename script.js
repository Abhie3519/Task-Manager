
let task=[];
let taskid=[];



function add_task()
{
    
    var taskid = document.getElementById('taskid').value;
    var taskname = document.getElementById('taskname').value;
    var taskstartdate = document.getElementById('taskstartdate').value;
    var taskenddate = document.getElementById('taskenddate').value;
    var taskstatus = document.getElementById('taskstatus').value;
   
    let valid= Validatetask(taskid,taskstartdate,taskenddate);

    if(valid)
    {
      adding_task(taskid,taskname,taskstartdate,taskenddate,taskstatus);

    }

   

   
    
}


function adding_task(id1,name1,startdate1,enddate1,status1)
{

    let newtask = {
        taskid:id1,
        taskname:name1,
        taskstartdate:startdate1,
        taskenddate:enddate1,
        taskstatus:status1,
        subtask:[]

    };

    task.push(newtask);
    taskid.push(id1);
    showonpage(task);

    document.getElementById('taskid').value=null;
document.getElementById('taskname').value=null;
document.getElementById('taskstartdate').value=null;
document.getElementById('taskenddate').value=null;
document.getElementById('taskstatus').value=null;
    
}



function showonpage(Task) 
{


  var parentTaskRows = '';
  // Using forEach loop to iterate through the array
  task.forEach((task, parentIndex) => {
    console.log(task.taskid);
    parentTaskRows += `<tr>
                            <th>ParentTask id</th>
                            <th>parentTask Name</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                            <th>Action</th>
                            
                          </tr>`;

    parentTaskRows += `<tr class="parentRow" >
                            <td  class="parentRowdata">${task.taskid}</td>
                            <td  class="parentRowdata">${task.taskname}</td>
                            <td  class="parentRowdata">${task.taskstartdate}</td>
                            <td  class="parentRowdata">${task.taskenddate}</td>
                            <td class="parentRowdata">${task.taskstatus}</td>
                            <td class="parentTaskAction"> <button id="edit-button" id="edit" class="edit-button" onclick="edit_record(this)" >Edit</button>
                            <button id="delete-button" id ="delete" class ="delete-button" onclick="delete_record(this)"> delete </button>
                            <button id="subtask-button" id ="delete" class ="subtask-button" onclick="add_subtask()"> subtask </button>
                            <button id="subtask-button" id ="delete" class ="subtask-button" onclick="call_subtask(${task.taskid})"> addsubtask</button>
                            </td>
                       
                          </tr>`;
    if (task.subtask.length > 0) {
      parentTaskRows += `<tr>
                            <td>Subtask id</td style="color:green">
                            <td>Subtask Name</td>
                            <td>Start Date</td>
                            <td>End Date</td>
                            <td>Status</td>
                            <td>Action</td>
                            
                          </tr>`;

    }
    task.subtask.forEach((subtask, subTaskIndex) => {
     
        
          parentTaskRows += `<tr>
          <td >${subtask.subtaskid}</td>
          <td>${subtask.subtaskname}</td>
          <td>${subtask.subtaskstartdate}</td>
          <td >${subtask.subtaskenddate}</td>
          <td >${subtask.subtaskstatus}</td>
          <td> <button id="edit-button" id="edit" class="edit-button" onclick="edit_record(this)" >Edit</button>
          <button id="delete-button" id ="delete" class ="delete-button" onclick="delete_record(this)"> delete </button>
          </td>
        </tr>`;
        
     

     


    });
    
  });


  var tableBody = document.querySelector(".taskTable-tbody");
  tableBody.innerHTML = parentTaskRows;


}



/*
function showonpage(task)
 {
  
    let htmlSegment = '';
    task.map((data) => {
      htmlSegment += `
                    <tr class="rows">
                    <td>${data.taskid}</td>
                    <td>${data.taskname}</td>
                    <td>${data.taskstartdate}</td>
                    <td>${data.taskenddate}</td>
                    <td>${data.taskstatus}</td>
                    <td> <button id="edit-button" id="edit" class="edit-button" onclick="edit_record(this)" >Edit</button>
                    <button id="delete-button" id ="delete" class ="delete-button" onclick="delete_record(this)"> delete </button>
                    <button id="subtask-button" id ="delete" class ="subtask-button" onclick="add_subtask(${data.taskid})"> subtask </button>
                    <button id="subtask-button" id ="delete" class ="subtask-button" onclick="call_subtask(${data.taskid})"> addsubtask</button>
                   </td>
                    </tr>`;
          
    });
   
    let container = document.getElementById('tablebody');
    container.innerHTML = htmlSegment;
  }
*/
  /*
function showonpage(task)
{
let htmlSegment = '';
task.map((data) => {
    const subtasklist = data.subtask.map(subtask => `<li>${subtask}</li>`).join('');
    
    htmlSegment += `
        <tr class="rows">
            <td>${data.taskid}</td>
            <td>${data.taskname}</td>
            <td>${data.taskstartdate}</td>
            <td>${data.taskenddate}</td>
            <td>${data.taskstatus}</td>
            <td>
                <ul>
                    ${subtasklist}
                </ul>
            </td>
            <td>
                <button class="edit-button" onclick="edit_record(this)">Edit</button>
                <button class="delete-button" onclick="delete_record(this)">Delete</button>
                <button class="delete-button" onclick="call_subtask(this)">subtask</button>
            </td>
        </tr>`;
});

let container = document.getElementById('tablebody');
container.innerHTML = htmlSegment;

}
*/


  /* valiadtion part */
  function Validatetask(taskid,taskstartdate,taskenddate)
  {
    let id=checkid(taskid);
    let sdate=checkstartdate(taskstartdate);
    let edate=checkenddate(taskenddate,taskstartdate);
    
      if(id && sdate && edate )
      {
        return 1;
      }
      else{
        return 0;
      }
   
  }

  var error_msg = "";
  
  function checkid(id) 
  {
  
   
    document.getElementById('iderror').style.display = "none";
 

   

    if(!isNaN(id))
    {

      if(taskid.includes(id)) 
      {
            error_msg = " Id already exist";
        
      }
        else
        {
          error_msg='';
        }
    

    }
    else{
      error_msg = " Id can not be NaN";
    }

    
    
   if (error_msg) {
      document.getElementById('iderror').innerHTML = error_msg;
      document.getElementById('iderror').style.display = "block";
  
    }
    else {
      return 1;
    }
  }


  function checkstartdate(sdate)
  {
    const today=new Date().toISOString().split("T")[0];
    if(sdate<today)
    {
      var error_msg="you can not selet past date as start date";
    }
    
    if(error_msg)
    {
      document.getElementById('startdateerror').innerHTML=error_msg;
      document.getElementById('startdateerror').style.display="block";
    }
    else{
      return 1;
    }
   
  }

  function checkenddate(edate,sdate)
  {
    
    if(sdate>edate)
    {
      var error_msg="end date must be greater than startdate ";
    }
    

    if(error_msg)
    {
      document.getElementById('startdateerror').innerHTML=error_msg;
    document.getElementById('startdateerror').style.display="block";
   }
    
    else
    {
      return 1;
    }

  }


  //Adding subtask

 



  //edit record
  function edit_record(button){

    const row = button.parentNode.parentNode;
    let task_id = row.cells[0].textContent;
    

    const indexToEdit =  task.findIndex(obj => obj.taskid == task_id);
    
    
    let pasttaskid=document.getElementById('taskid').value;
     document.getElementById('taskid').value= task[indexToEdit]['taskid'];
     if( task[indexToEdit]['taskid']!=pasttaskid)
     {
      taskid.pop(pasttaskid);
     }

     

     document.getElementById('taskname').value = task[indexToEdit]['taskname'];
     document.getElementById('taskstartdate').value = task[indexToEdit]['taskstartdate'];
     document.getElementById('taskenddate').value = task[indexToEdit]['taskenddate'];
     document.getElementById('taskstatus').value = task[indexToEdit]['taskstatus'];
     
     ;


     taskid.splice(taskid.indexOf(taskid),1);
     
     deleteObject(indexToEdit);
  
  }


  function delete_record(button)
  {
    
    if(window.confirm("Do you want to Delete ?")){
      const row = button.parentNode.parentNode;
       const cell = row.cells[0];
       const task_id = cell.textContent;
      
       const indexToDelete =  task.findIndex(obj => obj.taskid == task_id);
       deleteObject(indexToDelete);
      
       showonpage(task);
       alert("deleted");
      
    }
  }
  
  //delete object from array
  function deleteObject(indexToDelete)
  {
     task.splice(indexToDelete,1);
  }