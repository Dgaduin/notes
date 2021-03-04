#self/todo/pin 
szmind has XCOM: Enemy Unknown 20 Nov, 2017 @ 9:39am     
You cannot set it in menus. However you can alter settings in the game files. Search the file: DefaultInput.ini. Default path is C:\Program Files (x86)\Steam\SteamApps\common\XCom-Enemy-Unknown\XEW\XComGame\Config

Try adding those entries
.Bindings=(Name="F7", Command="slomo 1.0", Alt=True)
.Bindings=(Name="F8", Command="slomo 1.5", Alt=True)
.Bindings=(Name="F9", Command="slomo 2.0", Alt=True)

With those you should be able to toggle game speed with Alt+F7, Alt+F8 and Alt+F9. At least that is what Long War mod adds.


https://steamcommunity.com/app/200510/discussions/0/2425614539585431881/