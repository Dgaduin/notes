---
date_created: +002021-05-06T15:39:07.000
date_modified: +002021-05-06T15:39:10.000
---

# Untitled 20

[The time I reinstalled Windows 98 on a computer with no drives](https://www.reddit.com/r/talesfromtechsupport/comments/4ozdt3/the_time_i_reinstalled_windows_98_on_a_computer/) ([self.talesfromtechsupport](https://www.reddit.com/r/talesfromtechsupport/))

submitted 4 years ago \* by [OrangeredStilton](https://www.reddit.com/user/OrangeredStilton) [](javascript:void 0 "set a tag")

The recent nostalgia over Windows 9x has reminded me of the time I fixed my cousin's computer, while on vacation with the extended family in rural India (in '08 or so). It was a Pentium-133 laptop with a DSTN screen, that I'd taken out there on a previous occasion, and a corrupt registry; we all know what the recommended fix is for that. Nuke and pave.

Except there was no way to get Windows onto the system: no CD drive, no FDD, no USB slots. The original installation was made with a 2.5->3.5 IDE converter in a desktop machine back home, but the nearest desktop machine now was on the other side of the village, and the nearest IDE converter was in China. The only way in I had was a serial port on the back of the laptop, and the fact that DOS 7.1 still worked on there. The real lifeline was the desktop computer, which had 2400bps dialup. And so this harebrained scheme developed:

- Take the laptop across the village to the guy with the desktop computer;
- Build a null-modem cable, and hook it from the desktop to the laptop;
- Download a Totally Legit copy of Windows 98, and an Xmodem transfer program;
- Boot the laptop into DOS;
- Start `debug.com` and type in said Xmodem transfer program, in hex;
- Copy the installation media to the laptop;
- Run `setup`.

Easy! I found some low-voltage wire for the null-modem cable (it might've been doorbell wire), and snagged some plans for the wiring from that new-fangled Google. I found a 12kB DOS utility that allowed for file transfer, though I forget its name. I did, though, have the foresight that I couldn't type in 12kB of hex without screwing it up somewhere, so I modified my plan a little:

- Break the Xmodem program into chunks of 256 bytes, on the desktop;
- Calculate a CRC32 checksum for each chunk;
- Type the CRC32 checksum tool into the laptop, in hex;
- Use that to check each "page" of the transfer program I was typing across.

Amazingly, the smallest CRC32 checksum tool I could find was 768 bytes. I remember that figure very well, because I had to type 1,536 hex digits into `debug`, three times, because I made typos and the program didn't run the first two times.

The third time went well, and I had `crc32.com` on the target machine. I proceeded to spend the next day-and-a-bit typing pages of hex across, checksumming as I went, and re-doing a few pages out of the 48 required because of typos. Eventually, I had a transfer program running on both sides, and the rest was gravy.

I spent the rest of the vacation writing [a shorter `crc32.com` utility](http://imrannazar.com/CRC) in case this situation ever came up again; I got it down to 240 bytes, though it may have lost a feature or two.

The situation hasn't rearisen... yet.

---

TL;DR: _I once waded through swamps of machine code to reinstall Windows in the most convoluted way I could think of._

---

_Edit_: I noticed that my "shorter CRC32" link is dated Feb '09, so the vacation must've been in the fall of '08, not '06. The 2400bps modem was definitely a thing though.
