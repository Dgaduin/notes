---
date_created: +002021-10-08T20:49:05.000
date_modified: +002021-12-26T22:24:46.000
---

# Boss Katana Head MK2

#music/gear/amp

## Manual

![[999-🖼-files/manual-boss_katana_mk2.pdf]]

## Software

[FxFloorBoardKatana Forum Link](https://www.vguitarforums.com/smf/index.php?topic=20625.0)
[FxFloorBoardKatana Download Link](https://sourceforge.net/projects/fxfloorboard/files/KatanaFxFloorBoard/)

## Diagram

```mermaid
flowchart LR;
	subgraph katanaInternals[Internals]
		katanaPreAmp[Preamp] --> footVol[Foot Volume] 
		footVol --> sendReturnModule[Send/Return] 
		sendReturnModule --> toneStudio
		toneStudio --> stereoExpand[Stereo Expand] 
		stereoExpand --> master[Master Controlls] 
		master --> pwrAmp[Power Amp] 
		pwrAmp--> speaker[Speaker]
		
		subgraph toneStudio[Tone Studio]
			internalBooster[Internal Booster] --> internalMod[Internal Mod]
			internalMod --> internalFx[Internal FX]
			internalFx --> internalDelay[Internal Delay]
			internalDelay --> internalReverb[Internal Reverb]
			internalReverb --> internalEQ[Internal EQ]	
		end	
	end
	
	subgraph katanaIO[IO]
		instrumentIn[Instrument In] --> katanaPreAmp
		expPedal[Expression Pedal] --> footVol
		sendReturnModule --> send[FX Send Output] 
		return[FX Return Input] --> sendReturnModule
		pwrampIn[Power Amp In] --> stereoExpand
		lineOut[Line Out] --> master
		auxIn[AUX In] --> master
		pwrAmp --> phonesOut[Phones/Rec Out]
		phonesOut -.->|mutes| pwrAmp
		pwrAmp --> speakerOut[Speaker Out]
		speakerOut -.->|mutes| speaker
		usb2[USB Secondary] <--> katanaPreAmp
		usb1[USB Primary] <--> master
	end
	classDef default stroke:#fff
```

## Tips

- Turning on the stereo expand stops the cab sim on the Line out
