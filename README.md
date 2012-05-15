socket.io-bug-461-test
======================

Test case for browser refresh disconnect bug in socket.io

Run:
>node server.js

In browser (safari preferred), goto:
localhost:3000

Then refersh broswer. Two commands are emitted: 'leaving-page' and 'disconnect'.
The 'leaving-page' never fires. The 'disconnect' fires when the connection timesout, not when the command is executed.
If you comment out lines 8 and 9 of server.js (making socket.io use websockets instead of xhr-polling), the 'disconnect' is issued immediately (though, that would happen anyway), but 'leaving-page' is still never executed.