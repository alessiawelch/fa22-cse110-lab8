# Lab 8 - Alessia

## Screenshots:
Screenshots of All Tests Passing after running `npm run test`:

![](/screenshots/all_tests_passing_p1.png)
![](/screenshots/all_tests_passing_p2.png)
![](/screenshots/all_tests_passing_p3.png)
![](/screenshots/all_tests_passing_p4.png)

## Check Understanding Questions:

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

- Within a Github action that runs whenever code is pushed 
- Manually run them locally before pushing code
- Run them all after all development is completed

I would choose within a Github action that runs whenever the code is pushed. This is so that it is automated everytime code is pushed. Then, you can quickly check whether the code is right or wrong immediately after the code is pushed and then change/correct code accordingly.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

No, I would not use an end to end test to check if a function is returning the correct output. Instead, I would use a unit test. An end to end test is more approriate to test a larger feature that incorporates multiple functions.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, I would not use unit testing to test the "message" feature of a messaging application because there are multiple parts to send a message. While it may be appropriate to test each part (like testing max length) using unit testing, it would be more appropriate to use end to end testing since it tests a feature from start to finish.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, I would use unit testing to test the "max message length" feature of a messaging application. This is because it tests a single feature or function of a the messaging app. Testing could be done using a variety of input messages of varying lengths (some over and some under 80 characters) and testing the actual outcome versues the expected outcome.
