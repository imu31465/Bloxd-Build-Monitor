export const id = 247;
export const ids = [247];
export const modules = {
  39044: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      BloxdInformation: () => fc
    });
    var Vc = nc(1051),
      Ic = nc(73),
      rB = nc(107),
      uc = nc(1255),
      sc = nc(145),
      Mc = nc(926),
      Pc = nc(957);
    const qB = (0, Ic.lazy)((() => nc.e(105).then((() => nc(5492))))),
      Oc = (0, Ic.lazy)((() => nc.e(106).then((() => nc(5499)))));

    function Tc() {
      return (0, Pc.jsxs)("div", {
        className: "LegalText",
        children: [(0, Pc.jsx)("div", {
          className: "BloxdInformationHeader FullyFancyText",
          children: "Security Exploit Bounty Program"
        }), (0, Pc.jsx)("p", {
          children: "We have a program for reporting security exploits. Find an important security flaw in Bloxd? Report it through the process below. Please include steps to reproduce the exploit, including any relevant code if the exploit requires it. You will receive the reward if we verify and fix the exploit."
        }), (0, Pc.jsx)("h3", {
          children: "1. How to Report"
        }), (0, Pc.jsxs)("p", {
          children: ["Please follow the instructions on", " ", (0, Pc.jsx)("a", {
            href: "https://forms.gle/wUL8WiH3LbGiJBzF7",
            target: "_blank",
            rel: "noreferrer",
            children: "this form"
          }), " ", "to report the exploit."]
        }), (0, Pc.jsx)("h3", {
          children: "2. Frequently Asked Questions"
        }), (0, Pc.jsx)("p", {
          children: (0, Pc.jsx)("b", {
            children: "Q: When can I expect a response?"
          })
        }), (0, Pc.jsx)("p", {
          children: "A: If you've left any contact details, you will typically receive a response within two to four weeks, but we will try to respond as soon as possible."
        }), (0, Pc.jsx)("p", {
          children: (0, Pc.jsx)("b", {
            children: "Q: Can I remain anonymous?"
          })
        }), (0, Pc.jsx)("p", {
          children: "A: Yes, but we will be unable to contact you for rewards if you do not leave any contact details."
        }), (0, Pc.jsx)("p", {
          children: (0, Pc.jsx)("b", {
            children: "Q: What if multiple people report the same exploit, complete with repro steps?"
          })
        }), (0, Pc.jsx)("p", {
          children: "A: Typically, only the first reporter will receive the reward."
        }), (0, Pc.jsx)("p", {
          children: (0, Pc.jsx)("b", {
            children: "Q: What is out of scope?"
          })
        }), (0, Pc.jsxs)("p", {
          children: ["A:", (0, Pc.jsxs)("ul", {
            children: [(0, Pc.jsx)("li", {
              children: "Social engineering / phishing"
            }), (0, Pc.jsx)("li", {
              children: "DDoS attacks. If an attack requires a large number of computers to hit our servers with packets, it is out of scope. However, if a single computer/script can execute the attack, it is in scope of this programme."
            }), (0, Pc.jsx)("li", {
              children: "Use of stolen credentials"
            }), (0, Pc.jsx)("li", {
              children: "Data that is already public or user-supplied (e.g. usernames, chat, etc)"
            }), (0, Pc.jsx)("li", {
              children: "Non-security related bugs - please report in #report-a-bug in our discord"
            })]
          })]
        }), (0, Pc.jsx)("p", {
          children: (0, Pc.jsx)("b", {
            children: "Q: I'm banned in Bloxd, am I still eligible to submit exploits through this program?"
          })
        }), (0, Pc.jsx)("p", {
          children: "A: Yes, as long as you follow the rules laid out with respect to the exploit you are reporting. I.e. don't abuse or share the exploit, etc."
        })]
      })
    }

    function fc() {
      const {
        t: cB
      } = (0, Vc.x)(), [Bc, nc] = (0, Ic.useState)("partnersAndCredits"), fc = {
        partnersAndCredits: {
          title: rB.featureFlags.usePartnerLinks ? cB("homePage:partnersAndCredits") : cB("homePage:credits"),
          content: (0, Pc.jsxs)(Pc.Fragment, {
            children: [(0, Pc.jsx)("div", {
              className: "BloxdInformationHeader FullyFancyText",
              children: rB.featureFlags.usePartnerLinks ? cB("homePage:partnersAndCredits") : cB("homePage:credits")
            }), rB.featureFlags.usePartnerLinks && "\n\t\t\t\t\tPartners:\n\n\t\t\t\t\tcrazygames.com - https://www.crazygames.com/c/io\n\t\t\t\t\tnow.gg - https://now.gg/\n\t\t\t\t\tminijuegos.com - https://www.minijuegos.com/\n\t\t\t\t\tkevin.games - https://kevin.games/\n\t\t\t\t\tsilvergames.com - https://www.silvergames.com/\n\t\t\t\t\tplay123.com - https://play123.com/\n\n\t\t\t\t\t", "\n\t\t\t\t\t\tCool sites:\n\n\t\t\t\t\t\tBloxd Youtube Videos - https://www.youtube.com/ (duh)\n\n\t\t\t\t\t", '\n\t\t\t\t\tCredits:\n\n\t\t\t\t\tMusic:\n\t\t\t\t\tSignificant amount of music by Adigold on envato elements. Titles by Adigold:\n\t\t\t\t\tA Place to be Free\n\t\t\t\t\tButterfly Effect\n\t\t\t\t\tDreamless Sleep\n\t\t\t\t\tFrozen Pulse\n\t\t\t\t\tFrozen Skies\n\t\t\t\t\tHealing Thoughts\n\t\t\t\t\tHere Forever\n\t\t\t\t\tJust a Little Hope\n\t\t\t\t\tJust Like Heaven\n\t\t\t\t\tMemories Remain\n\t\t\t\t\tPlace to be\n\t\t\t\t\tThe Riverside\n\t\t\t\t\tThe Wonder\n\t\t\t\t\tVetrar\n\t\t\t\t\tFurther titles:\n\t\t\t\t\thighway-1-retro-gaming-version: Accessible on lonepeakmusic\'s bandcamp\n\t\t\t\t\theroic-demise-updated-version: Accessible on opengameart\n\t\t\t\t\thappy-arcade-tune: Accessible on opengameart\n\t\t\t\t\ttown-theme-rpg: Accessible on opengameart\n\t\t\t\t\t5-chiptunes-action: Accessible on opengameart\n\t\t\t\t\tslow-motion: Accessible on bensound - royalty free music section\n\t\t\t\t\tI Have Often Told You Stories (guitar instrumental) by Ivan Chew (c) copyright 2013 Licensed under a Creative Commons Attribution (3.0) license. Accessible on ccmixter under "ramblinglibrarian"\n\t\t\t\t\tReverie (small theme) by _ghost (c) copyright 2010 Licensed under a Creative Commons Attribution (3.0) license. Ft: Pitx. Accessible on ccmixter under "_ghost"\n\t\t\t\t\tSilence Await by Analog By Nature (c) copyright 2008 Licensed under a Creative Commons Attribution (3.0) license. Ft: oldDog. Accessible on ccmixter under "cdk"\n\t\t\t\t\tEthereal Space by Snowflake (c) copyright 2011 Licensed under a Creative Commons Attribution (3.0) license. Ft: Zep Hurme. Accessible on ccmixter under "snowflake"\n\t\t\t\t\tbuild-up-scenes-battle-ship: By Hot_Dope. Accessible on pixabay\n\t\t\t\t\tRaise The Sails: By SergePavkinMusic. Accessible on pixabay\n\t\t\t\t\tThe Epic Adventure: By The_Mountain. Accessible on pixabay\n\t\t\t\t\tCorsairs: By StudioKolomna. Accessible on uppbeat\n\t\t\t\t\tI am the Sea - Epic Pirate Battle Music. Supported by #TheROOMnoCopyRMusic\n\t\t\t\t\tPirates by Mojo Productions\n\t\t\t\t\tSneaky Jazz by Mojo Productions\n\t\t\t\t\tThe Sneaky by Mojo Productions\n\t\t\t\t\tThe Sneaky Jazz by Mojo Productions\n\t\t\t\t\tSpooky Scary Skeletons - 3mp1r3 Orchestral Cover (Instrumental): By 3MP-The-Rook (c) copyright 2021 Licensed under a Creative Commons Attribution (3.0) license. Accessible on newgrounds\n\n\n\t\t\t\t\tSkybox:\n\t\t\t\t\tspace-skyboxes-0. By StumpyStrust. Accessible on opengameart\n\t\t\t\t\tinterstellar-skybox. By Jockum Skoglund (hipshot). Accessible on opengameart\n\t\t\t\t\tgloomy-skybox. By Spiney. Accessible on opengameart\n\n\n\t\t\t\t\tMap builds:\n\t\t\t\t\tjar9 - Medieval Castle\n\t\t\t\t\tjar9 - Iron Man\'s Mansion\n\t\t\t\t\tjar9 - Hawaiian pineapple resort\n\t\t\t\t\tNot_Tred - Pyrage and The Century\n\t\t\t\t\tBubblesAndSuch - Hide and Seek Office map\n\t\t\t\t\tWeark - Dinosaur Murder Mystery map\n\t\t\t\t\tMavers - Jungle Theme Skywars map\n\t\t\t\t\tPigiama-Party-Crew - Skywars Castle map\n\t\t\t\t\tPigiama-Party-Crew - Skywars frozen map\n\t\t\t\t\tPartyFinger - Skywars Mushroom map\n\t\t\t\t\tSadClown - Skywars Simple Lego map\n\t\t\t\t\tP2H - Hide and Seek Western map (made for bloxd)\n\t\t\t\t\tjanuaryboy - Double Trouble pirates map (made for bloxd)\n\t\t\t\t\tjanuaryboy - Stowaway Seas pirates map (made for bloxd)\n\t\t\t\t\tjanuaryboy - Woesome Waters pirates map (made for bloxd)\n\t\t\t\t\tLadyHaley - Capture the Flag\n\n\n\t\t\t\t\tHome Screen Builds:\n\t\t\t\t\taxchitectmc (arch): valley town\n\t\t\t\t\tbush_man_ (B0ZO): Reactor Island / Elver\n\t\t\t\t\titz_parkour_queen (!Kat)\n\t\t\t\t\tthe_ccccc_83959 (the_ccccc)\n\t\t\t\t\tsnapshot0378 (AspectOfEntity)\n\t\t\t\t\tbanshee_61108 (Banshee)\n\t\t\t\t\tcreativeartisan856888 (L16_F51620)\n\t\t\t\t\tblazingcharlie (BlazingCharlie)\n\t\t\t\t\tkentaki65501 (\ud835\ude10\ud835\ude15\ud835\ude10\ud835\ude1b\ud835\ude10\ud835\ude08\ud835\ude13"\ud835\ude12")\n\n\n\t\t\t\t\tCharacter model:\n\t\t\t\t\tkenney bundle accessible on itch\n\n\n\t\t\t\t\tTextures:\n\t\t\t\t\tDronyazka\n\t\t\t\t\t1qayesy\n\t\t\t\t\tBlocd\n\t\t\t\t\tJanuaryBoy\n\t\t\t\t\tvinivieira\n\t\t\t\t\thttps://doughnutdev.itch.io/\n\t\t\t\t\tDigs - digs-simple-pack\n\t\t\t\t\thttps://dafluffypotato.itch.io/pixel-country-flags\n\n\n\t\t\t\t\tPet Paintings:\n\t\t\t\t\tJanuaryBoy\n\n\n\t\t\t\t\tSounds:\n\t\t\t\t\tgamemasteraudio\n\t\t\t\t\tSn0wShepherd - snowsong-total-sound-and-music-resource-pack\n\t\t\t\t\tFrawzy - enhanced-audio pack - accessible on curseforge\n\t\t\t\t\tOreCruncher (and sub contributors) - accessible on github via the OreCruncher/DynamicSurroundings repo\n\t\t\t\t\tWistanSound - pig, cow & sheep sounds pack\n\t\t\t\t\tKenney - rpg-audio pack - accessible on kenney.nl\n\n\n\t\t\t\t\tTranslations:\n\t\t\t\t\tArabic: GoldWaterMelon, MemeYou, faresaliahmed1234, Bloxd Builder, Toast123, Exinvity, Bruhbro, Coffee\n\t\t\t\t\tGerman: random, 1qayesy, LordDarknessYT, BRELJIS, Black_White, FJGaming, Tabby bee, Cougaran, SUPERJERRY, DigitalDragon\n\t\t\t\t\tSpanish: locomoco330, perky.11, mash_the_idiot, kilmepls, cisaa, Patata, MrT3, Sameiflovi, Monty Mole, MisterCasino\n\t\t\t\t\tFrench: .frenchgamer., ImBoop, Bloxd Builder, Elforeve, JaClol, lews123, LeVraiZouzou, Kontroleuh, kilmepls, _LightningStrike_, the_ccccc, ga\xeb, M.K, BearsBoi\n\t\t\t\t\tHindi: F22 Raptor, ObiloxYT, MucknDuck, SHUSH XD, __DUCK__\n\t\t\t\t\tIndonesian: zash, bool bola, kevin143, fedortam, Image\'s_MxD, THESECONDONE, Mozzy\n\t\t\t\t\tItalian: Star_mario, NAME VIOLTION4, Trespasser, Gabriel, Cougaran\n\t\t\t\t\tJapanese: tomoru1741, httpsnet, namu_namu, aaa_second, another_sky, pockymouse, Interactive\n\t\t\t\t\tDutch: brickswizard, Ryobagyatt-bloxd, MONKE, Thijssiee, Zethal_\n\t\t\t\t\tPortuguese: Da59Gigas, kilmepls, coding.cannoli\n\t\t\t\t\tPortuguese (Brazil): vinivieira, Muffinscott, pompom, kilmepls, noselastic, icyrlq, tokachiri\n\t\t\t\t\tRussian: Ryno2024, FOG_Batman17_WM, Bush, imlaggingbad, NahBro, Riddle, timofeycacti\n\t\t\t\t\tTamil: heheboi420, Tridentify\n\t\t\t\t\tTurkish: 1qayesy, iharqv, FOG_Batman17_WM, aryosta\n\t\t\t\t\tVietnamese: andye_da_Grass, that_asian_guy, ckn, Bready, Appa\n\t\t\t\t\tChinese (Simplified): AQLI, KHROTU, G2Lighter, Always yxZ, Baklava, Ender_, \u03c4Sean\ud83c\udde8\ud83c\uddf3\u03c4, ACreativeGoddess\n\t\t\t\t\tChinese (Traditional): AQLI, hkxd123, Jas_Mine_, Axolotl_Fox, happygamer, immortal, Idolized, Huh?\n\t\t\t\t\tUkrainian: xnutella, Ryno2024, shadow cat, Riddle\n\t\t\t\t\tPolish: PKcomander, ashxlek, tokachiri, LSVJ, 3ndii1337\n\t\t\t\t\tKorean: bobuk, Interactive\n\n\n\t\t\t\t\tMisc:\n\t\t\t\t\tMonogram font - https://datagoblin.itch.io/monogram\n\t\t\t\t\tTreasure Chests - DanSevenStar.xyz - treasure-chest-pixel-art-animation - accessible on opengameart\n\t\t\t\t\tTouch scroll icon created by Those Icons - accessible on Flaticon in the free-icons category under the "scroll" name\n\t\t\t\t\tThis product makes use of GeoLite2 data created by MaxMind, available from https://www.maxmind.com\n\t\t\t\t\t']
          })
        },
        bloxdIngameRules: {
          title: cB("homePage:bloxdIngameRules"),
          content: (0, Pc.jsxs)(Pc.Fragment, {
            children: [(0, Pc.jsx)("div", {
              className: "BloxdInformationHeader FullyFancyText",
              children: cB("homePage:bloxdIngameRules")
            }), "\n\t\t\t\t\t1. Be respectful of others.\n\n\t\t\t\t\t2. Don't harass or bully other players.\n\n\t\t\t\t\t3. Discriminatory jokes and hate speech (attacks on an individual or group based on their race, ethnicity, national origin, sex, gender, sexual orientation, religious affiliation, or disabilities) is not allowed.\n\n\t\t\t\t\t4. Cursing is not allowed, avoiding the swear filter is not allowed.\n\n\t\t\t\t\t5. Spamming is not allowed in any form.\n\n\t\t\t\t\t6. Don't post links.\n\n\t\t\t\t\t7. Don't do anything NSFW related or sexually suggestive.\n\n\t\t\t\t\t8. Online dating is not allowed.\n\n\t\t\t\t\t9. Don't use any offensive/inappropriate names.\n\n\t\t\t\t\t10. Don't impersonate staff or developers. This can include players if the player is clearly trying to impersonate you.\n\n\t\t\t\t\t11. No Hacking/Cheating/Autoclicking. Some clicking techniques such as drag clicking can be detected as autoclicking. Be careful using these techniques, if you are banned for autoclicking, you will not be unbanned.\n\n\t\t\t\t\t12. Creating, sharing, or using bloxd userscripts, extensions or other modifications is not allowed.\n\n\t\t\t\t\t13. Don't create boards/signs with inappropriate text.\n\n\t\t\t\t\t14. Don't create worlds lobbies for inappropriate purposes.\n\n\t\t\t\t\t15. Don't evade mutes or bans using alt accounts. Doing so will result in more action against your main account.\n\n\t\t\t\t\t16. Don't exploit duplication bugs. If you discover a serverside way to duplicate items, e.g.: the duped items stay when you leave and rejoin, then please carefully follow all the instructions in our Security Exploit Bounty Program.\n\n\t\t\t\t\t17. Don't trade ingame items for gift purchases (e.g. superrank).\n\t\t\t\t\t\n\t\t\t\t\t18. Advocating for or encouraging any of the above rule breaking is not allowed.\n\t\t\t\t"]
          })
        },
        privacyPolicy: {
          title: cB("homePage:privacyPolicy"),
          content: (0, Pc.jsx)(Ic.Suspense, {
            fallback: null,
            children: (0, Pc.jsx)(qB, {})
          })
        },
        termsOfService: {
          title: cB("homePage:termsOfService"),
          content: (0, Pc.jsx)(Ic.Suspense, {
            fallback: null,
            children: (0, Pc.jsx)(Oc, {})
          })
        },
        securityExploitBounties: {
          title: cB("homePage:securityExploitBounties"),
          content: (0, Pc.jsx)(Tc, {})
        }
      };
      return (0, Pc.jsxs)("div", {
        className: "BloxdInformation",
        children: [(0, Pc.jsxs)("div", {
          className: "BloxdInformationSectionList",
          children: [Object.keys(fc).map((Vc => (0, Pc.jsx)(uc.Q, {
            active: Bc === Vc,
            onClick: () => {
              nc(Vc)
            },
            children: cB(fc[Vc].title)
          }, Vc))), rB.featureFlags.usePartnerLinks && (0, Pc.jsx)(Pc.Fragment, {
            children: (0, Pc.jsxs)(uc.Q, {
              onClick: () => {
                window.open("https://www.crazygames.com/c/io")
              },
              children: [(0, Pc.jsx)(Mc.e, {
                name: "arrow-up-right-from-square"
              }), " Crazy Games"]
            })
          })]
        }), (0, Pc.jsx)("div", {
          className: "BloxdInformationContentWrapper",
          children: fc[Bc].content
        }), (0, Pc.jsxs)("div", {
          className: "BloxdInformationText",
          children: ["SiteUsed: ", sc.r, " | SubSiteUsed: ", sc.A]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);