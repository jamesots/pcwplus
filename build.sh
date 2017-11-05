#!/bin/sh
mkdir -p build
cd build
z80asm --list=extracode.lst --output=extracode.bin ../mods/extracode.z80
z80asm --list=mods.lst --output=mods.bin ../mods/mods.z80