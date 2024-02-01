        //index page change image on a mouseover event
        $(function ()
        
        { 
            $("#idimg").hover(function()
            {
                $('#idimg').attr('src', 'img/shoes_2_edited.jpg');
            }, 
            function()
            {
                $('#idimg').attr('src', 'img/boots_1_edited.jpg');
            })
        })
        // index page change image size
        $("#in").click(function(){
            $("img").width($("img").width()+100);
            $("img").height($("img").height()+100);
        });
        // index page change image size
        $("#out").click(function(){
            $("img").width($("img").width()-100);
            $("img").height($("img").height()-100);
        });


        //EMAIL - This happens after the button clikc event in the contact page
        function submitForm() {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            //creats formData which is used in the next part    
            const formData = {
                name: name,
                email: email,
                message: message
            };

            
            saveFormDataToJson(formData);
            const formDataString = 'Name: ${name}\nEmail: ${email}\nMessage: ${message}';
            //smtp info  smtp is an external web service that handles emails
            Email.send({

                SecureToken: "e839cdab-e29a-45ff-aec4-01b48e35c9a3",
                To: 'cayacsproject@gmail.com',
                From: "cesaraaj11@gmail.com",
                Subject: "CS112 New Form",
                Body: `${formDataString}`
            })

            //then will give info regarding if the program worked
            .then(
                () => {
                    alert("Submitted successfully :)");
                },
                error => {
                    alert("Try again :)");
                    //used console to help test webapp
                    console.error("email not sent :(", error);
                }
            );
            event.preventDefault();
        }
        //creates object to save as JSON then creates it to be accessible in the website to the user

function saveFormDataToJson(formData) {
            
            const jsonData = JSON.stringify(formData);
        
        
            const blob = new Blob([jsonData], { type: 'application/json' });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = 'form_data.json';
            a.click();
        }



//Javascript was finnicky! apis and libraries r cool but they r a bit of a pain to work w as a beginner
