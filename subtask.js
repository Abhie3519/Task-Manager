function add_subtask()
{
  document.getElementById('parenttask').style.display="none";
  document.getElementById('childtask').style.display="block";

}


function call_subtask(parent_id)
{
  
 
   
    
    
    var taskid = document.getElementById('subtaskid').value;
    var taskname = document.getElementById('subtaskname').value;
    var taskstartdate = document.getElementById('subtaskstartdate').value;
    var taskenddate = document.getElementById('subtaskenddate').value;
    var taskstatus = document.getElementById('subtaskstatus').value;
    
   
   /* let valid= Validatetask(taskid,taskstartdate,taskenddate);

    if(valid)
    {
      adding_subtask(parent_id,taskid,taskname,taskstartdate,taskenddate,taskstatus);

    }
*/
    adding_subtask(parent_id,taskid,taskname,taskstartdate,taskenddate,taskstatus);

   
    

}

function adding_subtask(parent_id,id1,name1,startdate1,enddate1,status1)
{
  console.log(parent_id);
  
  var indexofparent=-1;

  for(let i=0;i<task.length;i++)
  {
    if(task[i].taskid == parent_id)
    {
      indexofparent = i;
      break;
      
    }

    
  }
  console.log("indexofparent:-");
  console.log(indexofparent);

    let newsubtask = {
        subtaskid:id1,
        subtaskname:name1,
        subtaskstartdate:startdate1,
        subtaskenddate:enddate1,
        subtaskstatus:status1,
        

    };

    

    
   
    task[indexofparent].subtask.push(newsubtask);
   
    document.getElementById('subtaskid').value=null;
    document.getElementById('subtaskname').value=null;
    document.getElementById('subtaskstartdate').value=null;
    document.getElementById('subtaskenddate').value=null;
    document.getElementById('subtaskstatus').value=null;
    
    
    showonpage();

   
    
}



function parent_task()
{

  document.getElementById('parenttask').style.display="block";
  document.getElementById('childtask').style.display="none";

}


