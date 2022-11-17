# Lab 8 - Starter

Name: Derek Zhu
page:

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

(1) Within a Github action that runs whenever code is pushed 
(2) Manually run them locally before pushing code
(3) Run them all after all development is completed

Answer: (1) Within a Github action that runs whenever code is pushed a, so that if there are bugs that break down the feature can be found at this point to be fixed before merge the code into the main branch.  

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

Answer: no. To check if a function is returning the correct output, an unit test can be used.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Answer: yes. the send out or receive from a message is an individual parts of the code that is in encapsulated units.  To make sure this part of the code is functioning as it should, we can isolate it from other part and the test itby using unit test. 

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Answer: Yes. We can isolate the code that check message length as an unit,  then test it.