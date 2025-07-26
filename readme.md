# learn node

An attempt to learn and be more familiar to node.js

## commands

1. pnpm test - test the app functionality and watch files for changes.
1. pnpm start - test app (enabled via pnpm prestart) and run the application if test run was success.

## journey:

1. Download and install node
1. Add node to you env variable "path"
1. create helloWorld.js and write console > helloWorld to verify setup
   > git checkout helloWorld
   > run node helloWorld from terminal
1. lets setup and create something simple but not trivial
   > A method to add two numbers

### Please follow: tags as we implement | A method to add two numbers

1. Capturing our requirement: git checkout spec_for_adding_two_numbers
1. Implement test to verify behavior: git checkout test_implemented_for_adding_two_numbers
1. Implement behavior: git checkout add_two_number_basic_implementation
1. Fixed few issues with behavior: git checkout add_two_number_improved_handle_number_given_as_strings
1. Fixed few more issues with behavior: git checkout hurray_all_requirement_implemented_for_adding_two_numbers

### Update: Checkout tag allow_user_to_call_add_by_passing_args_from_command_line

To call add from command line use

> pnpm start add num1 num2 [add num1 num2 ...]

Example:
$ pnpm start add 1 2 add 4 5

Output:
Processing your requests. Got 2 add requests
Add 1 and 2.
1 + 2 = 3
Add 4 and 5.
4 + 5 = 9
