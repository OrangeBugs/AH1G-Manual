# Special Options

## Menus

The special options menu can be found by clicking on the settings button on the top left corner of the main menu.

![alt text](images/main_menu.png)

Then selecting "SPECIAL" on to top menu bar.

![alt text](images/special_options.png)

Scroll down and select "AH-1G Cobra". You will be presented with all the customization options.

![alt text](images/cobra_options.png)

---

## General Options

### Controls Indicator

The "Show Controls Indicator by default" checkbox enables or disables the controls indicator state on each start up. This can be enabled or disabled at any time using `R CTRL + ENTER` regardless of the state of this option.

---

### Cockpit Shake

The "Cockpit Shake Amplitude" slider scales the amount of shaking the helicopter does. When the slider is set to 1, you will get the realistic amount of shaking, when set to 0, you will get no shaking. Any values in the middle will decrease the amount of shake.

---

### Intercom Hot Mic

The "Enable Intercom Hot Mic" checkbox changes the behaviour of the intercom. In the real cobra, there is no hot mic, the intercom is PTT only via the "Coolie Hat" on the stick. Enabling this option overrides this behaviour.

Works for SRS and in game VOIP.

!!! Warning
    If you have a low quality mic, or bad background noise, for the sake of your other crewman leave this option disabled.

---

### Force Feedback

***Currently INOP***

!!! Warning 
    TODO

---

## AI Gunner Options

### Disable Gunner

---

### Mute Gunner

---

### Friendly Fire Override

---

### Disable Low Callouts

---

### Disable Empty Callouts

---

### Menu Button Time


---

## Accessory Options

### Sunvisor

#### Sunvisor Tint

The colour of the sunvisor

---

## Resetting Special Options

If for whatever reason you need to reset your special options to default, navigate to `Saved Games/DCS/Config/options.lua` and delete the entry for `"AH1G"`.

![alt text](images/options_lua.png)

*Delete every line in the read box, starting at `["AH1G"] = {` and ending at `},`.* 

DCS Will regenerate the options with default values at the next load.

---