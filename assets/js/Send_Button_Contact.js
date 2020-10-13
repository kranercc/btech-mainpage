function kSendButton_Pressed()
{
    
    let numele = document.getElementById("name").value;
    let emailul = document.getElementById("email").value;
    let phoneNr = document.getElementById("phone").value;
    let messageContent = document.getElementById("message").value;
    
    alert(numele + "\n" + emailul + "\n"+ phoneNr + "\n"+ messageContent + "\n" + "Message Sent To <placeholder>");
}