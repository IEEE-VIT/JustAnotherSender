# JustAnotherSender - by IEEE-VIT
This repository contains the code for mailing service developed by IEEE-VIT to send mass promotional and transactional emails. This service is developed as an API using AWS Simple Email Service.

### Local Build
1. Creae a `.env` file in the root directory of the project
2. Add the following credentials to the .env
```
    - ACCESS_KEY_ID = "This should contain the access key ID of the AWS-SES"
    - SECRET_ACCESS_KEY = "This should contain the secret access key"
    - SECRET = "This will be your custom secret for your Apps to validate there requests to API"
```
3. Run the following command
```bash 
$ npm i
```

4. Run the following command:
```bash
$ npm run dev
```


### API Endpoints 
- The API consists of only one endpoint

    `POST /sendEmailsExternal`
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
