# Appity - userform

ReactJS app that takes the user informations like name, date of birth and address and store it inside the local/browser storage.


## Extra Dependencies 

Bootstrap (For responsive & beautification)

## Project Specification Requirements 
### Task:

Create a dynamic web form to accept inputs of various field types and save it to the browser database.



### Guidelines:

Must use React JS

Create different components like Textbox, Number, DatePicker, Button etc

Create a dynamic form by using the below json (add more fields if required). Choose appropriate styling for each type. 

After entering the data on the form and saving it, the data should be persisted to the browser database.



### Use the below JSON to paint the screen

` {"title":"Create Account","form":{"fields":[{"label":"Name","id":"name","type":"textbox","sequence":1},{"label":"DOB","id":"dob","type":"date","sequence":2},{"label":"Address","id":"address","type":"textarea","sequence":3}]}} `



### Special Case:  

After entering 3 characters on text fields, display list of matching words(limit to 10) by invoking datamuse api https://www.datamuse.com/api/