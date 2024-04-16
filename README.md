Doing this project before learning about Modular JS, helped me understand it to a greater degree. 
Now I can compare while learning about modular JS where I went ugly with this project. 
There was always an itch in the back of my mind as to why my code looks the way it does, all
the DOM elements was plomped in the global zone. They were bound to their events in the global area as well,
and all the event listeners were arrow functions! I will soon refactor this so that the code looks as tolerable
as the app UI.


Note to self, on the ground rules for modular JS:
- self-contained module
  * everything to do with the module is in the module
  * no global variables
