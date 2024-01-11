function sendEmail(userName, userEmail, userMessage) {

  // Construct the email body
  const body = `Name: ${userName} <br /> Email: ${userEmail} <br /> Inquiry: ${userMessage} <br />`;

     // Send the email
     Email.send({
      SecureToken: '54bfbe6b-7555-487c-9430-c1e5a4182d0c',
      To: 'katherinalawson11@gmail.com',
      From: 'katherinalawson11@gmail.com',
      Subject: 'New Contact Enquiry',
      Body: body
    }).then(message => {
     if (message === "OK") {
      //Email sent successfully
      createToast("success");
     } else {
      //Error sending mail
      createToast("error");
     }
    });
}

function submitForm () {
  // Get form values
  let userName = document.getElementById('name').value;
  let userEmail = document.getElementById('email').value;
  let userMessage = document.getElementById('message').value;


  // Prevent default form submission behavior
  event.preventDefault();

  // Call the sendEmail function with the form value
  sendEmail(userName, userEmail, userMessage);

  //Reset the form
  document.getElementById("contact-form").reset();
}



const notifications = document.querySelector(".notifications")

const toastDetails = {
  timer: 5000,

  success: {
    icon: "fa-circle-check",
    text: "Success: Contact sent successfully"
  },
  error: {
    icon: "fa-circle-xmark",
    text: "Error: Contact not sent, try again"
  },
  warning: {
    icon: "fa-triangle-exclamation",
    text: "Warning: This is a warning..."
  },
  info: {
    icon: "fa-circle-info",
    text: "You can contact us at any time."
  }

}

const removeToast = (toast) => {
  toast.classList.add("hide");
  if(toast.timeoutId) clearTimeout(toast.timeoutId); //clearing the timout for the toast
  setTimeout(() => toast.remove(), 500); //Removing the toast after 500ms
}

const createToast = (id) => {

  //Getting the icon and the toiast for the toast based on the id p[assed
  const { icon, text } = toastDetails[id];

  const toast = document.createElement("li"); //creeate a new "li" element for the toast
  toast.className = `toast ${id}`; //setting the classes for the toast

  //setting the inner HTML for the toast
  toast.innerHTML = ` <div class="toast_column">
  <i class="fa-solid ${icon}"></i>
  <span>${text}</span>
</div>
<i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)" ></i>`;

  notifications.appendChild(toast); //append the toast to the notofication ul

  //Setting a timeout to remove the toast after the specified duration
  toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}