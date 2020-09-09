const formDataList =document.querySelector("#item-list");
const form =document.querySelector('#add-form-data');


function renderFormData(doc){
    
    let li =document.createElement('li');
    
    let name=document.createElement('span');
    let city =document.createElement('span');
    let province=document.createElement('span');
    let cross=document.createElement('div');
    
    
    
    
    li.setAttribute('data-id',doc.id);
    city.textContent = doc.data().city;
    name.textContent = doc.data().name;
    province.textContent = doc.data().province;
    cross.textContent='X';
    
    
    
    
    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(province);
    li.appendChild(cross);
    
    formDataList.appendChild(li);
    
    // deleting data     
    //assigning a single id to the variable
    cross.addEventListener('click',(evt) => {
        evt.stopPropagation();
        let id = evt.target.parentElement.getAttribute('data-id');
        //apply firebase query 
        db.collection('Formdata').doc(id).delete();
    })
    
}



// In this section getting data  with out REAL TIME from data base    NOTE: Real Time funtion include below  //

     db.collection('Formdata').get().then((snapshot)=> {
      snapshot.docs.forEach(doc => {
     renderFormData(doc);
         })
    
  });
    // adding data to data base //
    form.addEventListener('submit',(evt) => {
        evt.preventDefault();
        debugger;
        db.collection('Formdata').add({
            name:form.name.value,
            city:form.city.value,
            province:form.province.value
            
            
        });
            form.name.value='';
            form.city.value='';
            form.province.value='';
    });


   // Real time Function to  get data

