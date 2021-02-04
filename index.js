let saveFile = () => {
    	
    // Get the data from each element on the form.
    const name = document.getElementById('name');
    const description = document.getElementById('description');
    const person = document.getElementById('person');
    const datepicker = document.getElementById('datepicker');
   
    
    // This variable stores all the data.
    let data = 
        '\r Task Name: ' + name.value + ' \r\n ' + 
        'Task Description: ' + description.value + ' \r\n ' + 
        'Assigned Person: ' + person.value + ' \r\n ' + 
        'Due: ' + datepicker.value;
    
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}