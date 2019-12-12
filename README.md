# JustAnotherSender - by IEEE-VIT
## Emailing API using AWS-SES

This is an mailing API that helps generate and validate request to the
AWS-SES instance. Hence it works like a abstract layer in between different
applications using the API and the AWS-SES instance. This allows multiple
benefits to the client, one being all the request being send to the API are
of the same format easing out the development process of other apps that require
mailing services.

### The API can be locally started by following the below steps
1. Make an .env file in the root directory of the project
2. Add the following credentials to the .env

    - ACCESS_KEY_ID = "This should contain the access key ID of the AWS-SES"
    - SECRET_ACCESS_KEY = "This should contain the secret access key"
    - SECRET = "This will be your custom secret for your Apps to validate there requests to API"

3. Run "npm i" followed by "npm run dev"

### Routes 
- The API consists of only one route
    ### /sendEmailsExternal
    - this route can be used for sending bulk emails
    - the request body should look like the following

    ```json
        {
            "email": ["xyz@mail.com","Yzx@mail.com"],
            "html": "Your HTML code here",
            "sender": "sender@mail.com",
            "subject": "Subject of email",
            "nameOfEmail": "Name of the sender",
            "secret": "The secret you used to validate the request to the API"
        }
    ```

    - the sample response of the API is given below

    ```json
        {
            "apiStatus": 1,
            "apiMsg": "Request Accepted",
            "payload": {
                "msg": "Emails are Being Sent"
            }
        }
    ```