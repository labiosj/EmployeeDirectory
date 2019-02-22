
const contactCard = function(btName, btONum, btPhone){
    return `

 <div class="card" style="width: 18rem;">
   <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
     <li class="list-group-item">Dapibus ac facilisis in</li>
     <li class="list-group-item">Vestibulum at eros</li>
   </ul>
 </div>
 `
}
for (let i = 0; i < array.length; i++) {
    let btName = (array[i].name).toProperCase();
    let btONum = array[i].officeNum;
    let btPhone = array[i].phoneNum;
    $('#contacts').append(contactCard(btName, btONum, btPhone));
}

const addMe = $('#add');
console.log(addMe);
const upMe = $('#update');
const verifyMe = $('#verify');
const delMe = $('#delete');
const navMe = $('#navbar')


function updateList(){
    $('#content').empty();
    for(i = 0; i < employeeList.length;i++){
        $('#content').append(employeeList[i].name);
    }
}

function view(){
    addMe.addClass('d-none');
    upMe.addClass('d-none');
    verifyMe.addClass('d-none');
    delMe.addClass('d-none');
    updateList();
    
}
function add(){
    addMe.removeClass('d-none');
    upMe.addClass('d-none');
    verifyMe.addClass('d-none');
    delMe.addClass('d-none');
    updateList();
}
function verify(){
    addMe.addClass('d-none');
    upMe.addClass('d-none');
    verifyMe.removeClass('d-none');
    delMe.addClass('d-none');
    updateList();
}
function update(){
    addMe.addClass('d-none');
    upMe.removeClass('d-none');
    verifyMe.addClass('d-none');
    delMe.addClass('d-none');
    updateList();
}
function remove(){
    addMe.addClass('d-none');
    upMe.addClass('d-none');
    verifyMe.addClass('d-none');
    delMe.removeClass('d-none');
    updateList(); 
}


updateList();

const addEmployee = function()
{
  
}

$('#add').on('click', add);

$('#view').on('click',view);
$('#verify').on('click',verify);
$('#update').on('click',update);
$('#delete').on('click',remove);
  
$('#addBtn').on('click',function(){
    const btName = $('#addName').val();
    const btONum = $('#addONum').val();
    const btPhone = $('#addPhone').val();
    employeeList.push({name: btName, officeNum: btONum, phoneNum: btPhone});
    updateList();
})

$('#verifyBtn').on('click',function(){
    const btName = $('#nameVerify').val();
    const answer = false;
    for (i = 0;i < employeeList.length; i++){
        if(employeeList[i].name === btName){
            answer = true;
        }
    }
    if(answer === true){
        alert(`${btName} is on the list.`);
    }
    else{
        alert(`${btName} is not on the list`);
    }
})

$('#updBtn').on('click',function(){
    const btName = $('#updateName').val(), btONum = $('#updateofficeNum').val(), btPhone = $('#updatePhoneNum').val();
    const answer = false, index = -1;
    for(i = 0;i < employeeList.length; i++){
        if(employeeList[i].name === btName){
            answer = true;
            index = i;
        }
    
    else{
        if(btPhone&&btONum){
        employeeList[index]={name: btName, officeNum: btONum, phoneNum: btPhone};
        }
        else if(btPhone){
            employeeList[index].phoneNum = btPhone;
        }
        else if(btONum){
            employeeList[index].officeNum = btONum
        }
    }}
    updateList();
})
  
$('#delBtn').on('click', function(){
    const answer = false, index = -1, btName = $('#deleteName').val();
    for(i = 0;i < employeeList.length; i++){
        if(employeeList[i].name === btName){
            answer = true;
            index = i;
        }
    }
    employeeList.splice(index, 1);
    updateList();
})

