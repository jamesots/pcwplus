The PCW Project
===============

This is the source code for building my PCW project. In particular,
there is code for building the SD card driver and modifying CP/M to
boot from the SD card.

It has all been developed on Linux, and currently uses z80asm to
compile the z80 code, and node to do other things. When my
TypeScript based z80 compiler is reliable, I'll swtich to using
it instead, so that node is the only real dependency.

Building
========

At the moment, you need to build SDCARD.FID on a CP/M machine. When built,
it should be put into binsrc, along with J15CPM3.EMT.

Run 'npm run build' to build everything.

You should now have a modded.emt file in the build directory. This can
be written onto the SD card like so: 'sudo dd if=build/modded.emt of=/dev/sdi' 
(or whichever device the sd card is).

Notes
=====

Only works on 512Kb+ machines. During bootstrap, J15CPM3.EMT fills pages 
4 through 15 with zeroes (except page 9 which gets E5s instead - I guess
it's the directory of drive M:). So I put my code into page 16.