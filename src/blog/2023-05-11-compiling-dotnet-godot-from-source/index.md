---
slug: compiling-dotnet-mono-godot-from-source

title: Compiling dotnet/mono godot from source

authors: [Milos]

tags: [godot]
---

During development of Master of Chess I encountered some game crashing bugs. No errors in the console. Nothing.

This meant it was time to compile Godot from source and get all the info from the debug build of Godot.

What I had to do?

1. Install Python 3.6+ (I already had python 3.10)
2. Install SCons (it's a build tool used by Godot)
3. Clone the Godot repo
4. Checkout the last stable version of godot with `git checkout 4.0.2-stable`
5. run `python -m SCons platform=windows debug_symbols=yes module_mono_enabled=yes` to build the editor with additional logging and dotnet module enabled (dotnet==mono for legacy reasons)
6. run `./modules/mono/build_scripts/build_assemblies.py --godot-output-dir ./bin --push-nupkgs-local ~/MyLocalNugetSource` to glue stuff (don't ask what that means - see 'www.godot...')

If you don't have any weird issues (like I had), this should take about an hour tops (most of it waiting for step 5 to finish).

I had issues with 'dotnet sdk 6.0 not found' (because I didn't run step 6, initially). I had issues with finding Godot.Sdk nuget package (which I fixed by going back to 4.0.2-stable instead of being on the latest main branch).

This all took me about a day, which is a lot, but I gained some valuable knowledge and it will hopefully help me fix/report these crashes Master of Chess is having.

Posting to save someone time (and to make it easier for me in the future)

Cheers!
