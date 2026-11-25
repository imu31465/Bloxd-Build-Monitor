export const id = 230;
export const ids = [230];
export const modules = {
  38690: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => ft
    });
    var Ot = Vt(229),
      qt = Vt(37917);
    const Dt = 1.2,
      mt = {
        poseRig: "golem",
        physicsBodyDimensions: {
          width: .5,
          height: 2.5
        },
        hitBoxDimensions: {
          width: 2.2,
          height: 2.8
        },
        eyeHeight: 2.3,
        rideHeight: 2.3,
        Sd: .5,
        VVt: !1
      },
      dt = {
        physicsBodyDimensions: {
          width: .5,
          height: 2.5
        },
        hitBoxDimensions: {
          width: 1.8,
          height: 2.6
        },
        eyeHeight: 2.3,
        rideHeight: 2.3,
        Sd: .5,
        VVt: !1
      },
      jt = {
        physicsBodyDimensions: {
          width: Ot.e.iy,
          height: Ot.e.Yy
        },
        hitBoxDimensions: {
          width: Ot.e.iy + .4,
          height: Ot.e.Yy + .6
        },
        eyeHeight: Ot.e.Yy * Ot.e.playerEyeToHeightRatio,
        rideHeight: Ot.e.Yy - .3,
        Sd: .5,
        VVt: !1
      },
      Ht = {
        physicsBodyDimensions: {
          width: .5,
          height: .95
        },
        hitBoxDimensions: {
          width: 1.6,
          height: 1.1
        },
        eyeHeight: .9,
        rideHeight: .5,
        Sd: .5,
        VVt: !1
      },
      Xt = {
        physicsBodyDimensions: {
          width: .5,
          height: 1.8
        },
        hitBoxDimensions: {
          width: 1.7,
          height: 1.9
        },
        eyeHeight: 1.3,
        rideHeight: 1.3,
        Sd: .5,
        VVt: !1
      },
      Qt = {
        physicsBodyDimensions: {
          width: .5,
          height: 1.9
        },
        hitBoxDimensions: {
          width: 1.5,
          height: 2.1
        },
        eyeHeight: 1.9,
        rideHeight: 1,
        Sd: .5,
        VVt: !1
      },
      lt = {
        physicsBodyDimensions: {
          width: .5,
          height: 1.9
        },
        hitBoxDimensions: {
          width: 1.5,
          height: 2.4
        },
        eyeHeight: 2,
        rideHeight: 1.8,
        Sd: .5,
        VVt: !1
      },
      Et = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: Ot.e.iy,
            height: Ot.e.Yy
          },
          hitBoxDimensions: {
            width: Ot.e.iy + .4,
            height: Ot.e.Yy + .6
          },
          eyeHeight: Ot.e.Yy * Ot.e.playerEyeToHeightRatio,
          rideHeight: Ot.e.Yy - .1,
          Sd: qt.d.Sd,
          VVt: !0
        },
        Pig: {
          poseNameRise: {
            sitting: 1.4
          },
          physicsBodyDimensions: {
            width: .5,
            height: .8
          },
          hitBoxDimensions: {
            width: 1.5,
            height: 1.2
          },
          eyeHeight: .8,
          rideHeight: .5,
          Sd: .5,
          VVt: !1
        },
        Cow: {
          physicsBodyDimensions: {
            width: .5,
            height: 1.1
          },
          hitBoxDimensions: {
            width: 1.6,
            height: 1.4
          },
          eyeHeight: 1.2,
          rideHeight: 1,
          Sd: .5,
          VVt: !1
        },
        Sheep: {
          physicsBodyDimensions: {
            width: .5,
            height: 1.1
          },
          hitBoxDimensions: {
            width: 1.6,
            height: 1.3
          },
          eyeHeight: 1.2,
          rideHeight: .8,
          Sd: .5,
          VVt: !1
        },
        Horse: {
          physicsBodyDimensions: {
            width: .5,
            height: 1.9
          },
          hitBoxDimensions: {
            width: 1.5,
            height: 2.1
          },
          eyeHeight: 1.9,
          rideHeight: .9,
          Sd: .5,
          VVt: !1
        },
        Camel: {
          modelScale: Dt,
          physicsBodyDimensions: {
            width: .6,
            height: 2.52
          },
          hitBoxDimensions: {
            width: 1.92,
            height: 2.76
          },
          eyeHeight: 2.52,
          rideHeight: 1.7999999999999998,
          Sd: .5,
          VVt: !1
        },
        Slime: {
          physicsBodyDimensions: {
            width: .6,
            height: .8
          },
          hitBoxDimensions: {
            width: 1,
            height: .9
          },
          eyeHeight: .5,
          rideHeight: .5,
          Sd: .5,
          VVt: !1
        },
        "Cave Golem": mt,
        "Draugr Zombie": {
          ...jt,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": jt,
        "Frost Golem": mt,
        "Frost Zombie": {
          ...jt,
          defaultPose: "zombie"
        },
        "Frost Skeleton": jt,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: Ot.e.iy,
            height: Ot.e.Yy
          },
          hitBoxDimensions: {
            width: Ot.e.iy + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          Sd: .5,
          VVt: !1
        },
        Wolf: Ht,
        Bear: Xt,
        Deer: {
          physicsBodyDimensions: {
            width: .5,
            height: 1.9
          },
          hitBoxDimensions: {
            width: 1.5,
            height: 2.1
          },
          eyeHeight: 1.8,
          rideHeight: .8,
          Sd: .5,
          VVt: !1
        },
        Stag: Qt,
        "Gold Watermelon Stag": {
          physicsBodyDimensions: {
            width: .5,
            height: 1.9
          },
          hitBoxDimensions: {
            width: 1.5,
            height: 2.1
          },
          eyeHeight: 1.9,
          rideHeight: 1,
          Sd: .5,
          VVt: !1
        },
        Gorilla: lt,
        Wildcat: {
          physicsBodyDimensions: {
            width: .5,
            height: .7
          },
          hitBoxDimensions: {
            width: 1.5,
            height: .7
          },
          eyeHeight: .55,
          rideHeight: .4,
          Sd: .5,
          VVt: !1
        },
        "Draugr Huntress": jt,
        "Magma Golem": mt,
        "Spirit Golem": mt,
        "Spirit Wolf": Ht,
        "Spirit Bear": Xt,
        "Spirit Stag": Qt,
        "Spirit Gorilla": lt,
        "Draugr Warper": {
          physicsBodyDimensions: {
            width: .5,
            height: 2.5
          },
          hitBoxDimensions: {
            width: .6,
            height: 3
          },
          eyeHeight: 2.4,
          rideHeight: 2.8,
          Sd: .5,
          VVt: !1
        },
        "Frost Wraith": {
          poseRig: "wraith",
          physicsBodyDimensions: {
            width: .5,
            height: 2.7
          },
          hitBoxDimensions: {
            width: .6,
            height: 2.8
          },
          eyeHeight: 2.3,
          rideHeight: 2.6,
          Sd: .5,
          VVt: !1
        },
        "Draugr Reaver": {
          physicsBodyDimensions: {
            width: .5,
            height: 2.6
          },
          hitBoxDimensions: {
            width: .6,
            height: 2.7
          },
          eyeHeight: 2.2,
          rideHeight: 2.5,
          Sd: .5,
          VVt: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: Ot.e.iy,
            height: Ot.e.Yy
          },
          hitBoxDimensions: {
            width: Ot.e.iy + .4,
            height: Ot.e.Yy + .6
          },
          eyeHeight: Ot.e.Yy * Ot.e.playerEyeToHeightRatio,
          rideHeight: Ot.e.Yy - .1,
          Sd: .5,
          VVt: !1
        },
        67: {
          physicsBodyDimensions: {
            width: .5,
            height: 2.5
          },
          hitBoxDimensions: {
            width: 3,
            height: 2.5
          },
          eyeHeight: 1.9,
          rideHeight: 2.5,
          Sd: .5,
          VVt: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: Ot.e.iy,
            height: Ot.e.Yy
          },
          hitBoxDimensions: {
            width: Ot.e.iy + .4,
            height: Ot.e.Yy + .6
          },
          eyeHeight: Ot.e.Yy * Ot.e.playerEyeToHeightRatio,
          rideHeight: Ot.e.Yy - .1,
          Sd: .5,
          VVt: !1
        },
        "Capitano Explovissimo": {
          physicsBodyDimensions: {
            width: .5,
            height: 1.8
          },
          hitBoxDimensions: {
            width: .5,
            height: 2.5
          },
          eyeHeight: 1.5,
          rideHeight: 2,
          Sd: .5,
          VVt: !1
        },
        "Desert Fennec": {
          physicsBodyDimensions: {
            width: .4,
            height: .8
          },
          hitBoxDimensions: {
            width: .8,
            height: .8
          },
          eyeHeight: .65,
          rideHeight: .6,
          Sd: .5,
          VVt: !1
        },
        "Armour Collector": {
          physicsBodyDimensions: {
            width: 1,
            height: 3.5
          },
          hitBoxDimensions: {
            width: 2,
            height: 3.7
          },
          eyeHeight: 3.1,
          rideHeight: 3.6,
          Sd: .5,
          VVt: !1
        },
        "Furnace Knight": {
          physicsBodyDimensions: {
            width: .8,
            height: 2.4
          },
          hitBoxDimensions: {
            width: 1.6,
            height: 2.5
          },
          eyeHeight: 2,
          rideHeight: 2.45,
          Sd: .5,
          VVt: !1
        },
        "Lil Knight": {
          physicsBodyDimensions: {
            width: .8,
            height: 2.4
          },
          hitBoxDimensions: {
            width: 1.6,
            height: 2.55
          },
          eyeHeight: 2,
          rideHeight: 2.5,
          Sd: .5,
          VVt: !1
        },
        "Glass Gremlin": {
          physicsBodyDimensions: {
            width: .6,
            height: 2.5
          },
          hitBoxDimensions: {
            width: 1,
            height: 2.6
          },
          eyeHeight: 2.2,
          rideHeight: 2.55,
          Sd: .5,
          VVt: !1
        },
        "Glass Bro": {
          physicsBodyDimensions: {
            width: .8,
            height: 2.1
          },
          hitBoxDimensions: {
            width: 1.3,
            height: 2.2
          },
          eyeHeight: 1.8,
          rideHeight: 2.1,
          Sd: .5,
          VVt: !1
        },
        "Lord Vulcan": {
          physicsBodyDimensions: {
            width: 1.2,
            height: 5.4
          },
          hitBoxDimensions: {
            width: 2.4,
            height: 5.4
          },
          eyeHeight: 4.1,
          rideHeight: 5.4,
          Sd: .5,
          VVt: !1
        },
        Zombie: {
          ...jt,
          defaultPose: "zombie"
        },
        Skeleton: jt,
        Mummy: {
          ...jt,
          defaultPose: "zombie"
        },
        Scorpion: {
          physicsBodyDimensions: {
            width: 1,
            height: .9
          },
          hitBoxDimensions: {
            width: 1.6,
            height: 1.4
          },
          eyeHeight: .6,
          rideHeight: .9,
          Sd: .5,
          VVt: !1
        },
        Vulcanite: {
          physicsBodyDimensions: {
            width: .8,
            height: 2
          },
          hitBoxDimensions: {
            width: 1.3,
            height: 2.1
          },
          eyeHeight: 1.6,
          rideHeight: 2.1,
          Sd: .5,
          VVt: !1
        },
        "Evil Tome": {
          physicsBodyDimensions: {
            width: .6,
            height: .9
          },
          hitBoxDimensions: {
            width: .9,
            height: .95
          },
          eyeHeight: .6,
          rideHeight: .95,
          Sd: .5,
          VVt: !1
        },
        "Magma Toad": {
          physicsBodyDimensions: {
            width: 1,
            height: 1
          },
          hitBoxDimensions: {
            width: 1.5,
            height: 1.15
          },
          eyeHeight: 1,
          rideHeight: 1.1,
          Sd: .5,
          VVt: !1
        },
        Stalker: {
          physicsBodyDimensions: {
            width: .5,
            height: 2.6
          },
          hitBoxDimensions: {
            width: .6,
            height: 2.9
          },
          eyeHeight: 2.4,
          rideHeight: 2.5,
          Sd: .5,
          VVt: !1
        },
        Crone: {
          turnRate: 1.2,
          physicsBodyDimensions: {
            width: .6,
            height: 2.9
          },
          hitBoxDimensions: {
            width: .7,
            height: 3.2
          },
          eyeHeight: 2.7,
          rideHeight: 2.8,
          Sd: .5,
          VVt: !1
        },
        "Iron Guardian": dt,
        "Gold Guardian": dt,
        "Diamond Guardian": dt,
        "Moonstone Guardian": dt,
        "Iron Goofy Golem": dt,
        "Gold Goofy Golem": dt,
        "Diamond Goofy Golem": dt,
        "Moonstone Goofy Golem": dt,
        "Tiki Terror": {
          poseRig: "tiki",
          physicsBodyDimensions: {
            width: 1,
            height: 4.3
          },
          hitBoxDimensions: {
            width: 2.4,
            height: 4.5
          },
          eyeHeight: 3.9,
          rideHeight: 4.3,
          Sd: .5,
          VVt: !1
        }
      };

    function ft(tt) {
      return Et[tt]
    }
  },
  37306: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot
    });
    const Ot = {
      "skyblock:forged:astral-astral-astral": {
        name: "Heart of the Cosmos",
        lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
        damageMultiplier: 1.8,
        cooldownMultiplier: .8,
        ability: "starfall"
      },
      "skyblock:forged:astral-moonstone-sanguine": {
        name: "Eclipse Edge",
        lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
        damageMultiplier: 1.7,
        cooldownMultiplier: .81,
        ability: "eclipseField"
      },
      "skyblock:forged:astral-diamond-moonstone": {
        name: "Starcutter",
        lore: "A blade so sharp the Forge Mother swears it once cut a falling star in two.",
        damageMultiplier: 1.65,
        cooldownMultiplier: .83,
        ability: "starfall"
      },
      "skyblock:forged:astral-sanguine-magmasteel": {
        name: "Triune Flame",
        lore: "Each of Lord Vulcan's three faces, bound into one burning edge.",
        damageMultiplier: 1.65,
        cooldownMultiplier: .83,
        ability: "magmaWave"
      },
      "skyblock:forged:magmasteel-magmasteel-magmasteel": {
        name: "Vulcan's Bane",
        lore: "Forged in the heat of his own rift. It remembers the way down.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "magmaWave"
      },
      "skyblock:forged:magmasteel-astral-sanguine": {
        name: "Comet's Wake",
        lore: "It leaves a trail of fire through the air, like something falling from very far up.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "starfall"
      },
      "skyblock:forged:magmasteel-sanguine-astral": {
        name: "Vulcan's Ruin",
        lore: "The Forge Mother made only one, then sat down for a long while.",
        damageMultiplier: 1.6,
        cooldownMultiplier: .83,
        ability: "warcry"
      },
      "skyblock:forged:magmasteel-iron-stone": {
        name: "Forgehand",
        lore: "A smith's sword: plain to look at, and it hits like a hammer.",
        damageMultiplier: 1.4,
        cooldownMultiplier: .9,
        ability: "quake"
      },
      "skyblock:forged:sanguine-sanguine-sanguine": {
        name: "Crimson Covenant",
        lore: "It drinks, and so do you.",
        damageMultiplier: 1.53,
        cooldownMultiplier: .83,
        ability: "bloodPact"
      },
      "skyblock:forged:sanguine-astral-moonstone": {
        name: "Nightbloom",
        lore: "A red flower that only opens after dark.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "eclipseField"
      },
      "skyblock:forged:sanguine-iron-wood": {
        name: "Butcher's Oath",
        lore: "Heavy, honest and always hungry.",
        damageMultiplier: 1.35,
        cooldownMultiplier: .95,
        ability: "bloodPact"
      },
      "skyblock:forged:moonstone-moonstone-moonstone": {
        name: "Lunar Requiem",
        lore: "Swung, it leaves a pale arc that lingers like a second moon.",
        damageMultiplier: 1.35,
        cooldownMultiplier: .85,
        ability: "moonDash"
      },
      "skyblock:forged:moonstone-astral-moonstone": {
        name: "Silver Tide",
        lore: "Pulled by the same moon that pulls the sea.",
        damageMultiplier: 1.4,
        cooldownMultiplier: .84,
        ability: "moonDash"
      },
      "skyblock:forged:diamond-diamond-diamond": {
        name: "Prism Fang",
        lore: "Every facet catches a different light, and every strike finds a different weakness.",
        damageMultiplier: 1.29,
        cooldownMultiplier: .88,
        ability: "gildedEdge",
        traits: {
          crit: 1.8
        }
      },
      "skyblock:forged:diamond-moonstone-gold": {
        name: "Jeweller's Pride",
        lore: "Too pretty to fight with. Fight with it anyway.",
        damageMultiplier: 1.24,
        cooldownMultiplier: .91,
        ability: "gildedEdge"
      },
      "skyblock:forged:gold-gold-gold": {
        name: "King's Ransom",
        lore: "Worth more than the treasure it guards.",
        damageMultiplier: 1.18,
        cooldownMultiplier: .91,
        ability: "gildedEdge",
        traits: {
          coins: 2.5
        }
      },
      "skyblock:forged:gold-moonstone-gold": {
        name: "Midas Moon",
        lore: "Mobs it fells seem to rattle with coins.",
        damageMultiplier: 1.18,
        cooldownMultiplier: .92,
        ability: "gildedEdge",
        traits: {
          coins: 2,
          bossBane: .6
        }
      },
      "skyblock:forged:iron-iron-iron": {
        name: "Old Faithful",
        lore: "It has never let anyone down. It never will.",
        damageMultiplier: 1.15,
        cooldownMultiplier: .94,
        ability: "warcry"
      },
      "skyblock:forged:iron-wood-wood": {
        name: "Militia Blade",
        lore: "Handed out at the outpost gate when the rift first opened.",
        damageMultiplier: 1.09,
        cooldownMultiplier: .97,
        ability: "warcry"
      },
      "skyblock:forged:stone-stone-stone": {
        name: "Quarryman's Cleaver",
        lore: "Chipped from one block of stone, handle and all.",
        damageMultiplier: 1.09,
        cooldownMultiplier: .97,
        ability: "quake"
      },
      "skyblock:forged:wood-wood-wood": {
        name: "Lorenzo's Lesson",
        lore: "Courage matters more than the blade. This one is mostly courage.",
        damageMultiplier: 1.06,
        cooldownMultiplier: .97,
        ability: "warcry"
      }
    }
  },
  37922: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => mt
    });
    var Ot = Vt(404),
      qt = Vt.n(Ot),
      Dt = Vt(1993);
    let mt;
    var dt, jt, Ht, Xt, Qt, lt, Et, ft, wt;
    const yt = [0, 1, 8, 255, "length", 46, 69, 3, 242, "e", "undefined", void 0, 177, "d", "c", 96, 63, 6, "fromCodePoint", 7, 12, "push", "a", 91, 8191, 88, 13, 14, 2, 9, "g", 5, "f", 82, 152, 93, 149, 16, 4, "6", 512, "b", 20, 90, 106, 162, 15, 232, 10, 187, 202, 28, 1023, 127, 31, 128, 18, 32, 24, 19, 64, 65535, 100, 192, "h", 203, 158, 217, 142, 107, 105, 117, 118, 119, null, 123, 124, 125, 113, 114, 115, 116, 134, 135, 33, "AO", 153, 146, 143, 80, 44, 220, 189, 25, 166, 211, !1, 108, 163, "i", 198, 136, 140, 212, !0, "on"];

    function Nt(...tt) {
      return tt[yt[4]] = yt[1], typeof dt[tt[yt[0]]] === yt[10] ? dt[tt[yt[0]]] = function(tt) {
        var et, Vt, Ot, qt, Dt, mt, dt;
        for (ct(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = yt[0], Dt = yt[0], mt = -yt[1]), dt = yt[0]; dt < Vt; dt++) {
          var jt = ':18u*p2ANcX3?(G0&x>Z~F@J[=]^Wz$IaDK<fjV#tBk.e`/qhvwi};54brOolELm%"U,HQC6RYn{|gPd+TsM!y)S79_'.indexOf(et[dt]);
          if (jt !== -yt[1])
            if (mt < yt[0]) mt = jt;
            else {
              ct(mt += jt * yt[23], qt |= mt << Dt, Dt += (mt & yt[24]) > yt[25] ? yt[26] : yt[27]);
              do {
                ct(Ot.push(qt & yt[3]), qt >>= yt[2], Dt -= yt[2])
              } while (Dt > yt[19]);
              mt = -yt[1]
            }
        }
        return mt > -yt[1] && Ot.push((qt | mt << Dt) & yt[3]), Mt(Ot)
      }(jt[tt[yt[0]]]) : dt[tt[yt[0]]]
    }

    function Mt(...tt) {
      return tt[yt[4]] = yt[1], typeof Xt !== yt[10] && Xt ? (new Xt).decode(new Qt(tt[yt[0]])) : typeof lt !== yt[10] && lt ? lt.from(tt[yt[0]]).toString("utf-8") : wt(tt[yt[0]])
    }

    function bt() {}
    ct(dt = {}, jt = ["0vYaEg%>`3?RIsX", 'w`EA;i}OIm6<yljjwK/Iy6}no"DQKGoz', '{"fIRfk}J%]O_Tz<?>^a@V:', '[c)Wl!Yzo"|+*hE<26T5Vjx=D0^u=*7z`?ZaBE:kdmXRP]JB:502[}yzD?LW1', "ouA})PzqoNhIT+Tt_;(Iv#s?|3b=9+1IbcB{`ggQ3oR*XjbKLWB2/sCH|LV", "|Ksat+P>HZ", "h]Q4,dAZ+;*JA]V>>cRv*/i19G9,WR1.aibYdM(BR~y;1", 'ki}Xh!{BvUhIbo1j_W5*/bV$`G&u(lx~`?I}I6"Bv><', "8v6cGwf%*", 'nLv^B<"Qcx,b4GTt#rHnPnL/ooBFT*WxDHni^', ">zK^P|Vfqb|nahx~bJWXQl+tPbp2v*1.!=u", "F2Qw:R|[&0C>.OLfFt|p)}$8", "`tX^,KxZWF?j=&4BAv95Rdx<ELZ2hu=W#5sp", "trN{wjE{hUkLIVp=3>LI@wQJ[x%>~q*[Nz#*m/)+1c>d/O1x?n/*^oK?p", 'U5lgvCm(>0{*fMp.j?|z_Yn/9"=R+^a$vK@A^of$&0DhaMc', "4c^z.<XOK5/Q=&e=", '@Hl;qvhOKc)n~Mu>V.wik5pmDr&"|^cI*6+2hiU>H56gs8', "EJD2R|@%*", "8a#}pQ`rzox[1!Uj3tRvYfi<+;xL=R(Z0i@*", "6c/W}st}jO3~jR&Kmo8p(|zz4%<u1", 'Pidc#Y4q|b7@*MDfOhBR"l3ZlonzNM~K.KD2', "6GK{nV:", '^55*hmDm^xp8,V6jO"E}ZMe?rxrGCv|Vet(45s@NXL=(QfJB|`g]@', 'F/Cv"lN$:?AHZ]^<su3R@6h};%D|(p', '"K^R&}&/8rvFJ8zJNr95c)b/:?FjN6pIf5VY(|:OT?;', '9k5*Alr{o"`QuM=zDr=au;:kLbZ2&6_z@lE|:/]$arf', "JcCIWMe/2O<d{]oxul8", "{~.zaYH2~rY,{G,>1vjA7Mk$&0YW[6_f", "*]Q6a53=Mc[|(hZ^H`AcsQiBwcMaisZ^kiy]Xll>&lhWOj*IgoeA", "uFx{CK][qm6Yfo:$1>wR~67KrLW", "15>z9o])2OlFUv&KhuQAIEs}xc{++[*x@lN{$E:", "5h5*fb>}Wx~[Q*Q[B6{wCnN}G0WA`R&t6uONj+|/`b1$=*", "$J8iB5b)hU#Y/V)tt6:{UT=;&0jd08q]Qxeg$y:$kx", "g3yI{MDAUcnb0s%>Fr>iMP~%%lZQ?^(", "_G3a^VrBariFyhY#X/8pGhZzmNjQf^N", 'Fc*p`i*[$oeQ!q2>;Hp4Aw=zT05Y,^;t1UXaPfPO"0AOTRc', 'Z/;|jjDT10{aL(ZKr6A5TT//!cA"Ff#>G]vi^o^zF5ZX6O{=3Ht2Z', "+b=^IoG}:lbYduv#y26*", ';"/cQ4izc"5Y?l<Ixm+2Sy:', "mxo;pn%/k3:i)vS<bxYiiOv{IF;", "uaq}7ru=C%Vhn=tZ7hJ}pn,z&0m*LQLzLJ/A@", "5HCWB5,1", "=5iaUl:", "(triqEYz|of|*M`^:<oa&L!t@ZR3yfU[EhD58KW8wmX$Nu", "_hviKogz]~;+F&&#PKBi_Pe?@(SZ|o2j/]5*", "Ga;Adn7/u?Mpc&=<Xvj}.bjZirCl1", "+CzX=P_[Km|vT+I$FHFW]y%>HZ_1IwOfRiUidT@8", "oLm||Mp180dTZsUjHK[c;j2/C%Y;0]8x6:", "YJ.aW+_H;Zib4GN>B.)I6dD<T>{nX]c", 'vIx^|hV}.x;USV%k!=!n]M%?JO["B*9WUY3zu/:', "Si$Iy`:", "h]bYGVsK0mJ(vRd]", "TKtcjod1", 'V"lIcl#<{N"mUTAZE6:D)VsKZlh+&M=Jl5[2kY`qw?v[R^wWDn@IZ', "R2wR1T4mGUMny*[KWJP6h!H/Zli", "}u:5<<SAy(Umd8p[HH/A_D@n]G;}IG2", 'sY`Iwi`AP>EG38eVhiN$CR&N_x9@"*', "O]l;`sE<JO+=rRG", '(]H;4K"1', "yIdW`E!n2O8j.8<x6Hq*|Q:", "Lx=^#s8k+rQ<c&lxPoA}V5wOYORg}M)&%II}x", "*rO;R4>)Lb4oE*", 'ni?4)P|/r~kL5(CZEKmWEi"<IUY**^k=$5MN', "B~B{RfDB1mDR&oG~yK:5I<F<n38^nTLfBrFWFr7?`N=", "G6M]h!}8", "niADXloJD?OC;(9B[HywmlpZ,c604G0]X/Ic24Qz>rBuw={#", "hc)*iO^Qx0vI1", "dL$vKE]fXGR@6]zkS2@*~Pv1d>#YGw_@z/N5.{:", "7u0}MLJz/U#W,V?Z>z!zqHN[0Fi", "0?+Y`j|?HZSf^8{VqrpXTT2}yO_aGEm$>iD2JrH/I?aRFERZzKX{hb:", "b2zA{MU/NO&$wEAVPI9i|hst2", 'e~]iBjqqb"d/rhDxk2aY9VZB<5bWg*', '[l(X*RTd"rXHA^rWmK@}+|?/%r<R"**>~2t$(MZ1', "8z8^^VN)E3rYqG7zKl/A", 'mGN2FM1=T0k<xf$z3aHpqgR$CZeQ!<3]|",]t+0=s5V4L=K$eL>a"da8', "OLa5.mgzTr8{~uu$cHu", '72_a1;N$=O1se^o<]H}z"f}}`>HWjR"[aH;nv!Jq5Ov', "B]RY8n%>0UOF1", '1aIvUnGf|xcON#,I#hQIej>[P0gfchQ["hQ6)}YBp', "72FI~t|t*", "K?4czXu4", "Thwa]Md1", "3e~F", "iIA/C<b?Yu[2QM", "gF=zO>,e^0]d|M", "NN3/O>#V4F9k5/", "EO=Ey<9vH|;[&M", "&IDk^[,e#F90JM", '&^"/i(vlF^W', "svRI0M6R", "^k#6]CrX", "cg}cP/mX", "d|)yV", "cg}cUWne", "(I#:Y", 'I2Mp"h!t"rkGzh&^', "Wi&6oQ$z#M,<lM./", "~HyA1NQ+}~((g`iq", "0iu<9wcV(Zmn`;Hi", "<]5Nr!54re9wBwW", "UiVIgT~8", "{Z]wo~CN", "u|z#", "mn]#$;r", "uZ,X", "~}/pZFG", 'Qr&=4~2"', '|r16iq2"', "rrA=", 'QrlUktO"', 'yrX~2~o"', '.WlUc$J"', "<YdUo", 'QrlU2~o"', '.W&=|[d"', 'O{8,<qQ"', '[.8<<$O"', 'F;(<bUQ"', 's;q~Uho"', '6WUenl}"', "QrlU2~Wxs!", "{#J<6FK!]d", "+2c1hhVfs!", 'a{16+[o"', "<gq~ZUMu", "I))<D", "xr&=", "Arle!", "{Ya<x", '63C;&J#"', "(ZVpD", "QrlUkt(!1", "+2EAveC[1", "YY7pre!h1", 'a{;<wL4"', "<p;,xqG", "a{;<D$Pxs!", "<Z2US$(!~K", "v5;,re!h1", 'a{;<D$|"', ".W8<c~Yu", '6W:<0[3"', "xgq~ZUG", "XZ:,", "AuX%", "Go5t", "|7X%", "Au~t+", "wvyt", "Q2]M", 'irdU$h{"', 'u@%=#IP"', '|2F~hh2"', ":pH,", "N{Vp", 'sY;<Nl}"', "(eH,", '|YH<t~d"', 'YgVwY[4"', 'bso=[ho"', "C}FX0[G", "ospqshVH", '!7`"/u{H', "|p`d", "8J`*2T!^", ".Grza@6", "fegm6h4H", '8s`"a:FH', "lU1[Owke", "kfYmSFP[fx9<IeJJ#4@jYY!DPuL)C&:", ".UzFV!7SS<a", "xkJf%gjn", "yMY+w+In", "xkn+0vWn", ".p+d$~@", "G/Yp!iuQ", "h+r&]", 'L;q~Uho"', '|YH<:U^"']), ct(Ht = function(...tt) {
      ct(tt[yt[4]] = yt[0], tt[yt[8]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], tt[yt[5]] = yt[11], tt[yt[6]] = []);
      try {
        ct(tt[yt[5]] = Object, tt[yt[6]][yt[21]]("".__proto__.constructor.name))
      } catch (jt) {}
      tt: for (tt[yt[7]] = yt[0]; tt[yt[7]] < tt[yt[8]][yt[4]]; tt[yt[7]]++) try {
        for (tt[yt[5]] = tt[yt[8]][tt[yt[7]]](), tt[yt[9]] = yt[0]; tt[yt[9]] < tt[yt[6]][yt[4]]; tt[yt[9]]++)
          if (typeof tt[yt[5]][tt[yt[6]][tt[yt[9]]]] === yt[10]) continue tt;
        return tt[yt[5]]
      } catch (jt) {}
      return tt[yt[5]] || this
    }() || {}, Xt = Ht.TextDecoder, Qt = Ht.Uint8Array, lt = Ht.mf, Et = Ht.String || String, ft = Ht.Array || Array, wt = function(...tt) {
      return ct(tt[yt[4]] = yt[0], tt[yt[22]] = new ft(yt[55]), tt[yt[1]] = Et[yt[18]] || Et.fromCharCode, tt[-yt[12]] = []),
        function(...et) {
          for (ct(et[yt[4]] = yt[1], et[yt[1]] = yt[11], et[yt[15]] = yt[11], et[yt[14]] = et[yt[0]][yt[4]], tt[-yt[12]][yt[4]] = yt[0]), et[yt[13]] = yt[0]; et[yt[13]] < et[yt[14]];) ct(et[yt[15]] = et[yt[0]][et[yt[13]]++], et[yt[15]] <= yt[53] ? et[yt[1]] = et[yt[15]] : et[yt[15]] <= 223 ? et[yt[1]] = (et[yt[15]] & yt[54]) << yt[17] | et[yt[0]][et[yt[13]]++] & yt[16] : et[yt[15]] <= 239 ? et[yt[1]] = (et[yt[15]] & yt[46]) << yt[20] | (et[yt[0]][et[yt[13]]++] & yt[16]) << yt[17] | et[yt[0]][et[yt[13]]++] & yt[16] : Et[yt[18]] ? et[yt[1]] = (et[yt[15]] & yt[19]) << yt[56] | (et[yt[0]][et[yt[13]]++] & yt[16]) << yt[20] | (et[yt[0]][et[yt[13]]++] & yt[16]) << yt[17] | et[yt[0]][et[yt[13]]++] & yt[16] : (et[yt[1]] = yt[16], et[yt[13]] += yt[7]), tt[-yt[12]][yt[21]](tt[yt[22]][et[yt[1]]] || (tt[yt[22]][et[yt[1]]] = tt[yt[1]](et[yt[1]]))));
          return tt[-yt[12]].join("")
        }
    }());
    const Jt = qt()[Nt(yt[62])](),
      Ct = qt()[Nt(yt[62])](),
      ut = qt()[Nt(yt[62])](),
      Kt = qt()[Nt(yt[62])](),
      ht = qt()[Nt(yt[62])](),
      vt = qt()[Nt(yt[62])](),
      Wt = qt()[Nt(yt[62])](),
      St = (...tt) => {
        function et(...tt) {
          return tt[yt[4]] = yt[1], typeof dt[tt[yt[0]]] === yt[10] ? dt[tt[yt[0]]] = function(...tt) {
            for (ct(tt[yt[4]] = yt[1], tt[yt[1]] = 'r1NH?A7v#nX^%!)jKTB/9,@fW:cu+O$&wVC2}{.(*G[Zga>oRDM]YPLslxF_ebqUmiy"~58;=Q|d<`403h6zpSJkEtI', tt[yt[28]] = "" + (tt[yt[0]] || ""), tt[yt[7]] = tt[yt[28]].length, tt[yt[63]] = [], tt[yt[31]] = yt[0], tt[yt[17]] = yt[0], tt[yt[30]] = -yt[1]), tt[yt[64]] = yt[0]; tt[yt[64]] < tt[yt[7]]; tt[yt[64]]++)
              if (tt[yt[65]] = tt[yt[1]].indexOf(tt[yt[28]][tt[yt[64]]]), tt[yt[65]] !== -yt[1])
                if (tt[yt[30]] < yt[0]) tt[yt[30]] = tt[yt[65]];
                else {
                  ct(tt[yt[30]] += tt[yt[65]] * yt[23], tt[yt[31]] |= tt[yt[30]] << tt[yt[17]], tt[yt[17]] += (tt[yt[30]] & yt[24]) > yt[25] ? yt[26] : yt[27]);
                  do {
                    ct(tt[yt[63]].push(tt[yt[31]] & yt[3]), tt[yt[31]] >>= yt[2], tt[yt[17]] -= yt[2])
                  } while (tt[yt[17]] > yt[19]);
                  tt[yt[30]] = -yt[1]
                } return tt[yt[30]] > -yt[1] && tt[yt[63]].push((tt[yt[31]] | tt[yt[30]] << tt[yt[17]]) & yt[3]), Mt(tt[yt[63]])
          }(jt[tt[yt[0]]]) : dt[tt[yt[0]]]
        }
        tt[yt[4]] = yt[7];
        const Vt = vt;
        return qt()[et(101) + et(102)](Vt, tt[yt[28]]), qt()[et(103)](tt[yt[0]], Vt, qt()[et(104)](Vt, tt[yt[1]]))
      };

    function ct() {
      ct = function() {}
    }
    mt = (...tt) => {
      function et(...tt) {
        return tt[yt[4]] = yt[1], typeof dt[tt[yt[0]]] === yt[10] ? dt[tt[yt[0]]] = function(...tt) {
          for (ct(tt[yt[4]] = yt[1], tt[yt[33]] = 'Gu")@A1`,p=92vyr4KQ!d&Si^D{(okxX<+}a|sOjW0]Yn.#NPTJ;*%36>g_:Z?b5Vzm8lLFq/weM~U$7[hIHEtfBRcC', tt[-yt[66]] = "" + (tt[yt[0]] || ""), tt[yt[14]] = tt[-yt[66]].length, tt[yt[38]] = [], tt[-yt[69]] = yt[0], tt[yt[32]] = yt[0], tt[yt[68]] = -yt[1]), tt[yt[2]] = yt[0]; tt[yt[2]] < tt[yt[14]]; tt[yt[2]]++)
            if (tt[yt[67]] = tt[yt[33]].indexOf(tt[-yt[66]][tt[yt[2]]]), tt[yt[67]] !== -yt[1])
              if (tt[yt[68]] < yt[0]) tt[yt[68]] = tt[yt[67]];
              else {
                ct(tt[yt[68]] += tt[yt[67]] * yt[23], tt[-yt[69]] |= tt[yt[68]] << tt[yt[32]], tt[yt[32]] += (tt[yt[68]] & yt[24]) > yt[25] ? yt[26] : yt[27]);
                do {
                  ct(tt[yt[38]].push(tt[-yt[69]] & yt[3]), tt[-yt[69]] >>= yt[2], tt[yt[32]] -= yt[2])
                } while (tt[yt[32]] > yt[19]);
                tt[yt[68]] = -yt[1]
              } return tt[yt[68]] > -yt[1] && tt[yt[38]].push((tt[-yt[69]] | tt[yt[68]] << tt[yt[32]]) & yt[3]), Mt(tt[yt[38]])
        }(jt[tt[yt[0]]]) : dt[tt[yt[0]]]
      }
      tt[yt[4]] = yt[2];
      const Vt = tt[yt[0]][et(yt[70])][et(yt[44]) + et(yt[69]) + et(yt[97])](tt[yt[1]]);
      tt[yt[2]] = tt[yt[0]][et(yt[70])][et(109) + et(110) + et(111) + et(112)](Vt);
      const Ot = tt[yt[2]] === yt[74] ? tt[yt[0]][et(yt[70])][et(yt[78]) + et(yt[79]) + et(yt[80]) + et(yt[81])](tt[yt[1]], et(yt[71]) + et(yt[72]) + et(yt[73]) + yt[9]) : tt[yt[2]][et(yt[71]) + et(yt[72]) + et(yt[73]) + yt[9]],
        mt = tt[yt[2]] === yt[74] ? tt[yt[0]][et(yt[70])][et(120) + et(121) + et(122)](tt[yt[1]], et(yt[75]) + et(yt[76]) + et(yt[77])) : tt[yt[2]][et(yt[75]) + et(yt[76]) + et(yt[77])];
      ct(qt()[et(126)](Jt, yt[0], yt[0], tt[yt[31]]), qt().tm(Jt, Jt, qt()[et(yt[53])], tt[yt[7]].heading), qt()[et(yt[55])](Wt, tt[yt[38]].Dy), Wt[yt[1]] = yt[0]);
      const Ht = tt[yt[28]][et(129) + et(130)]();
      if (ct(tt[yt[2]] = tt[yt[0]][et(yt[70])][et(131) + et(132) + et(133) + "s"](Vt), tt[-yt[86]] = tt[yt[2]] === yt[74] ? tt[yt[0]][et(yt[70])][et(yt[78]) + et(yt[79]) + et(yt[80]) + et(yt[81])](tt[yt[1]], et(yt[82]) + et(yt[83])) : tt[yt[2]][et(yt[82]) + et(yt[83])]), !Ht && qt()[yt[85]](Wt) && (tt[yt[2]] === yt[74] ? tt[yt[0]][et(yt[70])][et(yt[78]) + et(yt[79]) + et(yt[80]) + et(yt[81])](tt[yt[1]], et(yt[101]) + et(137) + et(138)) : tt[yt[2]][et(139) + et(yt[102]) + et(141) + et(yt[68])])) {
        function ft(...tt) {
          for (ct(tt[yt[4]] = yt[1], tt[yt[22]] = 'lwBVv~k^M%te20au_O>f(5YAsD7G+Q`i@Tr$89/64PjoWd)|KN*{&ycH![CF:Ih;XU?Jn13LRm#]"x<gE=Zbp,z.qS}', tt[yt[28]] = "" + (tt[yt[0]] || ""), tt[yt[7]] = tt[yt[28]].length, tt[yt[38]] = [], tt[yt[31]] = yt[0], tt[yt[32]] = yt[0], tt[yt[30]] = -yt[1]), tt[yt[84]] = yt[0]; tt[yt[84]] < tt[yt[7]]; tt[yt[84]]++)
            if (tt[yt[71]] = tt[yt[22]].indexOf(tt[yt[28]][tt[yt[84]]]), tt[yt[71]] !== -yt[1])
              if (tt[yt[30]] < yt[0]) tt[yt[30]] = tt[yt[71]];
              else {
                ct(tt[yt[30]] += tt[yt[71]] * yt[23], tt[yt[31]] |= tt[yt[30]] << tt[yt[32]], tt[yt[32]] += (tt[yt[30]] & yt[24]) > yt[25] ? yt[26] : yt[27]);
                do {
                  ct(tt[yt[38]].push(tt[yt[31]] & yt[3]), tt[yt[31]] >>= yt[2], tt[yt[32]] -= yt[2])
                } while (tt[yt[32]] > yt[19]);
                tt[yt[30]] = -yt[1]
              } return tt[yt[30]] > -yt[1] && tt[yt[38]].push((tt[yt[31]] | tt[yt[30]] << tt[yt[32]]) & yt[3]), Mt(tt[yt[38]])
        }

        function wt(...tt) {
          return tt[yt[4]] = yt[1], typeof dt[tt[yt[0]]] === yt[10] ? dt[tt[yt[0]]] = ft(jt[tt[yt[0]]]) : dt[tt[yt[0]]]
        }
        ct(St(Ct, Jt, Wt), St(ut, Wt, Jt), qt()[et(yt[88])](Kt, Wt, ut));
        const Nt = qt()[wt(144)](Wt),
          vt = qt()[wt(145)](Jt, Wt) / tt[yt[31]] / Nt,
          Rt = Math[wt(yt[87])](vt, yt[0]) + yt[1];
        tt[yt[31]] * tt[yt[31]] < qt()[yt[85]](ut) && qt()[wt(147)](Jt, Jt, ut, Rt), ct(tt[-yt[86]] = (0, Dt.A)(tt[-yt[86]], 1, Math[wt(yt[87])](yt[1], Math[wt(148)](yt[0], -vt, yt[1] - Nt / tt[yt[31]]))), qt()[wt(yt[36])](Jt, Jt, Kt))
      }
      const Xt = ht;
      ct(qt()[et(yt[88])](Xt, Jt, Wt), Xt[yt[1]] = yt[0], tt[yt[14]] = qt()[et(150)](Xt)), Ht || (tt[yt[14]] *= tt[-yt[86]]);
      const Qt = tt[yt[17]][et(151) + et(yt[34]) + et(yt[86])],
        lt = Qt ? Math[et(154)](Qt, tt[yt[14]]) : tt[yt[14]];
      qt()[et(155) + et(156)](Xt, Xt);
      const Et = tt[yt[19]] !== yt[74] && void 0 !== tt[yt[19]] ? tt[yt[19]] : tt[yt[17]][et(157) + et(yt[66]) + et(159) + et(160)];
      if (lt > yt[0]) {
        function It(...tt) {
          for (ct(tt[yt[4]] = yt[1], tt[yt[22]] = '@QHjnoXGdpmtOgPeblMNF<rEz]sDyf$&"*6_!=4#{(%7[0/}3u?+^8v1VCaIRKZ|.5ck,J2~L9wqW:hBYSU`)iA;>Tx', tt[-yt[89]] = "" + (tt[yt[0]] || ""), tt[yt[90]] = tt[-yt[89]].length, tt[yt[13]] = [], tt[yt[17]] = yt[0], tt[yt[92]] = yt[0], tt[-yt[8]] = -yt[1]), tt[yt[64]] = yt[0]; tt[yt[64]] < tt[yt[90]]; tt[yt[64]]++)
            if (tt[yt[91]] = tt[yt[22]].indexOf(tt[-yt[89]][tt[yt[64]]]), tt[yt[91]] !== -yt[1])
              if (tt[-yt[8]] < yt[0]) tt[-yt[8]] = tt[yt[91]];
              else {
                ct(tt[-yt[8]] += tt[yt[91]] * yt[23], tt[yt[17]] |= tt[-yt[8]] << tt[yt[92]], tt[yt[92]] += (tt[-yt[8]] & yt[24]) > yt[25] ? yt[26] : yt[27]);
                do {
                  ct(tt[yt[13]].push(tt[yt[17]] & yt[3]), tt[yt[17]] >>= yt[2], tt[yt[92]] -= yt[2])
                } while (tt[yt[92]] > yt[19]);
                tt[-yt[8]] = -yt[1]
              } return tt[-yt[8]] > -yt[1] && tt[yt[13]].push((tt[yt[17]] | tt[-yt[8]] << tt[yt[92]]) & yt[3]), Mt(tt[yt[13]])
        }

        function Pt(tt) {
          return typeof dt[tt] === yt[10] ? dt[tt] = It(jt[tt]) : dt[tt]
        }

        function Zt(...tt) {
          ct(tt[yt[4]] = yt[0], tt[yt[22]] = function(...et) {
            return ct(et[yt[4]] = yt[1], et[yt[22]] = []), (et[yt[0]] === yt[1] || et[yt[0]] >= yt[38]) && tt[yt[1]](et[yt[22]], [], et[yt[0]], yt[0]), et[yt[22]]
          }, tt[yt[1]] = function(...et) {
            for (et[yt[4]] = yt[38], et[yt[38]] = et[yt[7]]; et[yt[38]] < et[yt[28]]; et[yt[38]]++) {
              if (et[yt[1]].length !== et[yt[38]]) return;
              for (et[yt[41]] = yt[0]; et[yt[41]] < et[yt[28]]; et[yt[41]]++) tt[-yt[95]](et[yt[1]], [et[yt[38]], et[yt[41]]]) && (ct(et[yt[1]].push([et[yt[38]], et[yt[41]]]), tt[yt[1]](et[yt[0]], et[yt[1]], et[yt[28]], et[yt[38]] + yt[1])), et[yt[1]].length === et[yt[28]] && et[yt[0]].push(tt[yt[72]](et[yt[1]])), et[yt[1]].pop())
            }
          }, tt[yt[72]] = function(...tt) {
            for (ct(tt[yt[4]] = yt[1], tt[yt[94]] = [], tt[yt[28]] = tt[yt[0]].length), tt[-yt[93]] = yt[0]; tt[-yt[93]] < tt[yt[28]]; tt[-yt[93]]++)
              for (tt[yt[94]][tt[-yt[93]]] = "", tt[yt[38]] = yt[0]; tt[yt[38]] < tt[yt[28]]; tt[yt[38]]++) tt[yt[94]][tt[-yt[93]]] += tt[yt[0]][tt[-yt[93]]][yt[1]] === tt[yt[38]] ? "Q" : ".";
            return tt[yt[94]]
          }, tt[-yt[95]] = function(...tt) {
            for (ct(tt[yt[4]] = yt[28], tt[yt[28]] = tt[yt[0]].length), tt[yt[7]] = yt[0]; tt[yt[7]] < tt[yt[28]]; tt[yt[7]]++) {
              if (tt[yt[0]][tt[yt[7]]][yt[0]] === tt[yt[1]][yt[0]] || tt[yt[0]][tt[yt[7]]][yt[1]] === tt[yt[1]][yt[1]]) return yt[96];
              if (Math.abs((tt[yt[0]][tt[yt[7]]][yt[0]] - tt[yt[1]][yt[0]]) / (tt[yt[0]][tt[yt[7]]][yt[1]] - tt[yt[1]][yt[1]])) === yt[1]) return yt[96]
            }
            return yt[104]
          }, console.log(tt[yt[22]]))
        }
        Pt(161) in bt && Zt();
        let Lt = tt[yt[28]][Pt(yt[45]) + Pt(yt[98])] * Et;
        if (!Ht) {
          function kt(...tt) {
            for (ct(tt[yt[4]] = yt[1], tt[-yt[97]] = '67^)1#9;=<zHlXLPCQB(Dqwyc2JhrtK$*3U8}GxE"|gIf0ve4_%`/Z!>SYk[Wu.?{dj+&b~pR:NFAiTMa@m5nos,V]O', tt[yt[41]] = "" + (tt[yt[0]] || ""), tt[yt[7]] = tt[yt[41]].length, tt[yt[38]] = [], tt[yt[98]] = yt[0], tt[yt[32]] = yt[0], tt[yt[19]] = -yt[1]), tt[yt[2]] = yt[0]; tt[yt[2]] < tt[yt[7]]; tt[yt[2]]++)
              if (tt[yt[99]] = tt[-yt[97]].indexOf(tt[yt[41]][tt[yt[2]]]), tt[yt[99]] !== -yt[1])
                if (tt[yt[19]] < yt[0]) tt[yt[19]] = tt[yt[99]];
                else {
                  ct(tt[yt[19]] += tt[yt[99]] * yt[23], tt[yt[98]] |= tt[yt[19]] << tt[yt[32]], tt[yt[32]] += (tt[yt[19]] & yt[24]) > yt[25] ? yt[26] : yt[27]);
                  do {
                    ct(tt[yt[38]].push(tt[yt[98]] & yt[3]), tt[yt[98]] >>= yt[2], tt[yt[32]] -= yt[2])
                  } while (tt[yt[32]] > yt[19]);
                  tt[yt[19]] = -yt[1]
                } return tt[yt[19]] > -yt[1] && tt[yt[38]].push((tt[yt[98]] | tt[yt[19]] << tt[yt[32]]) & yt[3]), Mt(tt[yt[38]])
          }

          function Gt(...tt) {
            return tt[yt[4]] = yt[1], typeof dt[tt[yt[0]]] === yt[10] ? dt[tt[yt[0]]] = kt(jt[tt[yt[0]]]) : dt[tt[yt[0]]]
          }
          Lt *= tt[yt[28]][Gt(164) + Gt(165)]
        }
        let Ft = tt[yt[28]][Pt(yt[94]) + Pt(167) + "ss"] * lt;
        if (lt < .3 && (Ft *= lt), Lt > Ft) {
          function zt(...tt) {
            for (ct(tt[yt[4]] = yt[1], tt[yt[22]] = 'Qfe?:x.,b[u6;{G7>PJ<Op=@]MH4t}kIFnZ#_U~EKVjvDh31oCic2SBa&rygqdw)L9TR+0mAs"|(Yl^$!zN*8W5X`%/', tt[yt[41]] = "" + (tt[yt[0]] || ""), tt[yt[7]] = tt[yt[41]].length, tt[yt[38]] = [], tt[-yt[100]] = yt[0], tt[yt[17]] = yt[0], tt[yt[19]] = -yt[1]), tt[yt[2]] = yt[0]; tt[yt[2]] < tt[yt[7]]; tt[yt[2]]++)
              if (tt[-yt[49]] = tt[yt[22]].indexOf(tt[yt[41]][tt[yt[2]]]), tt[-yt[49]] !== -yt[1])
                if (tt[yt[19]] < yt[0]) tt[yt[19]] = tt[-yt[49]];
                else {
                  ct(tt[yt[19]] += tt[-yt[49]] * yt[23], tt[-yt[100]] |= tt[yt[19]] << tt[yt[17]], tt[yt[17]] += (tt[yt[19]] & yt[24]) > yt[25] ? yt[26] : yt[27]);
                  do {
                    ct(tt[yt[38]].push(tt[-yt[100]] & yt[3]), tt[-yt[100]] >>= yt[2], tt[yt[17]] -= yt[2])
                  } while (tt[yt[17]] > yt[19]);
                  tt[yt[19]] = -yt[1]
                } return tt[yt[19]] > -yt[1] && tt[yt[38]].push((tt[-yt[100]] | tt[yt[19]] << tt[yt[17]]) & yt[3]), Mt(tt[yt[38]])
          }

          function ot(...tt) {
            return tt[yt[4]] = yt[1], typeof dt[tt[yt[0]]] === yt[10] ? dt[tt[yt[0]]] = zt(jt[tt[yt[0]]]) : dt[tt[yt[0]]]
          }

          function rt() {
            module.exports = async (tt = (...tt) => {
              throw tt[yt[4]] = yt[0], new Error(function(...tt) {
                return tt[yt[4]] = yt[1], typeof dt[tt[yt[0]]] === yt[10] ? dt[tt[yt[0]]] = function(...tt) {
                  for (ct(tt[yt[4]] = yt[1], tt[yt[1]] = ',dcZekV[]j7?:aEM@x5L`K}{8A6%qo#S"1l(*IUJv~Cfg>bm/&t)<3XGQ4i|Bh9^zu;0NswF2WrP.=Yy$R!np+D_HTO', tt[yt[41]] = "" + (tt[yt[0]] || ""), tt[yt[7]] = tt[yt[41]].length, tt[-yt[101]] = [], tt[-yt[103]] = yt[0], tt[yt[32]] = yt[0], tt[yt[30]] = -yt[1]), tt[yt[2]] = yt[0]; tt[yt[2]] < tt[yt[7]]; tt[yt[2]]++)
                    if (tt[yt[102]] = tt[yt[1]].indexOf(tt[yt[41]][tt[yt[2]]]), tt[yt[102]] !== -yt[1])
                      if (tt[yt[30]] < yt[0]) tt[yt[30]] = tt[yt[102]];
                      else {
                        ct(tt[yt[30]] += tt[yt[102]] * yt[23], tt[-yt[103]] |= tt[yt[30]] << tt[yt[32]], tt[yt[32]] += (tt[yt[30]] & yt[24]) > yt[25] ? yt[26] : yt[27]);
                        do {
                          ct(tt[-yt[101]].push(tt[-yt[103]] & yt[3]), tt[-yt[103]] >>= yt[2], tt[yt[32]] -= yt[2])
                        } while (tt[yt[32]] > yt[19]);
                        tt[yt[30]] = -yt[1]
                      } return tt[yt[30]] > -yt[1] && tt[-yt[101]].push((tt[-yt[103]] | tt[yt[30]] << tt[yt[32]]) & yt[3]), Mt(tt[-yt[101]])
                }(jt[tt[yt[0]]]) : dt[tt[yt[0]]]
              }(169))
            }) => {
              const et = new Set(process.argv.slice(yt[28]));
              if (!et.has(ot(170))) {
                if (et.size !== yt[1]) return yt[96];
                if (!et.has("-v")) return yt[96]
              }
              return await (async () => {
                function et(...tt) {
                  return tt[yt[4]] = yt[1], typeof dt[tt[yt[0]]] === yt[10] ? dt[tt[yt[0]]] = function(...tt) {
                    for (ct(tt[yt[4]] = yt[1], tt[yt[1]] = '$pnMYBDXqOfJWCLs:RA*Iak(it`[9SzrQ|~E^,j1;u.U@FcPo%7}h#{)4b<8wV?3>/H_gveG=KT]2+xml!Ny0&Z5"6d', tt[yt[41]] = "" + (tt[yt[0]] || ""), tt[yt[5]] = tt[yt[41]].length, tt[yt[13]] = [], tt[yt[31]] = yt[0], tt[yt[17]] = yt[0], tt[yt[19]] = -yt[1]), tt[-yt[49]] = yt[0]; tt[-yt[49]] < tt[yt[5]]; tt[-yt[49]]++)
                      if (tt[yt[29]] = tt[yt[1]].indexOf(tt[yt[41]][tt[-yt[49]]]), tt[yt[29]] !== -yt[1])
                        if (tt[yt[19]] < yt[0]) tt[yt[19]] = tt[yt[29]];
                        else {
                          ct(tt[yt[19]] += tt[yt[29]] * yt[23], tt[yt[31]] |= tt[yt[19]] << tt[yt[17]], tt[yt[17]] += (tt[yt[19]] & yt[24]) > yt[25] ? yt[26] : yt[27]);
                          do {
                            ct(tt[yt[13]].push(tt[yt[31]] & yt[3]), tt[yt[31]] >>= yt[2], tt[yt[17]] -= yt[2])
                          } while (tt[yt[17]] > yt[19]);
                          tt[yt[19]] = -yt[1]
                        } return tt[yt[19]] > -yt[1] && tt[yt[13]].push((tt[yt[31]] | tt[yt[19]] << tt[yt[17]]) & yt[3]), Mt(tt[yt[13]])
                  }(jt[tt[yt[0]]]) : dt[tt[yt[0]]]
                }
                return void 0 === await tt() ? et(173) + "l)" : ""
              })(), yt[104]
            }
          }
          ot(168) in bt && rt(), Lt = Ft
        }
        ct(qt()[Pt(174)](Xt, Xt, Lt), tt[yt[38]][Pt(175) + Pt(176)](Xt))
      }
      tt[yt[38]][et(yt[12]) + yt[105]] = tt[yt[28]][et(178) + et(yt[72]) + yt[105]] * (Ht ? Ot : mt)
    }
  },
  37917: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => jt,
      d: () => dt
    });
    var Ot = Vt(37922),
      qt = Vt(1993);
    const Dt = 2,
      mt = 1,
      dt = {
        Sd: 1,
        fluidDrag: -1,
        fluidDragHorizontal: -1,
        fluidDragVertical: -1,
        gravityMultiplier: 2,
        width: .5,
        height: 1.8,
        canRun: !0,
        jumpMultiplier: 1,
        upwardImpulseOnUse: 0,
        canAutoStep: !0,
        canAutoStepByBlock: {},
        riderOffset: [0, 0, 0],
        pose: "standing",
        effect: null,
        standingFriction: 5,
        maxPushDistance: 0,
        movementForceMultiplier: 1,
        disableBaseMovement: !1,
        speedMultiplier: 1,
        landSpeedMultiplier: 1,
        fluidSpeedMultiplier: 1,
        airSpeedMultiplier: 1,
        speedMultiplierByBlock: {},
        disableFootstepSounds: !1,
        horizontalBounciness: 0,
        verticalBounciness: 0,
        minHorizontalSpeedToBounce: 0,
        minVerticalSpeedToBounce: 0,
        horizontalImpactCameraShake: null,
        verticalImpactCameraShake: null,
        steering: null,
        fixedHeading: null,
        fluidSkip: null,
        airborneMode: null,
        airborneMovement: null,
        airborneFallSpeedLimit: null
      };

    function jt(tt, et, Vt, dt, jt, Ht, Xt) {
      if (jt.speed) return (0, Ot.b)(et, Vt, dt, jt, Ht, Xt, tt), void(jt.ticksToReachMaxIdleFriction = Dt);
      const Qt = dt.isOnGround(),
        lt = et.bloxd.getSyncedClientOptions(et.bloxd.getPlayerReader(Vt)),
        Et = null === lt ? et.bloxd.getClientPredictedOption(Vt, "groundFrictionScale") : lt.groundFrictionScale,
        ft = null === lt ? et.bloxd.getClientPredictedOption(Vt, "airFrictionScale") : lt.airFrictionScale,
        wt = Qt ? Et : ft,
        yt = Math.max(mt, wt),
        Nt = jt.ticksToReachMaxIdleFriction / Dt,
        Mt = (0, qt.A)(yt, wt, Nt);
      Ht.friction = tt.standingFriction * ((null === lt ? et.bloxd.getClientPredictedOption(Vt, "airMomentumConservation") : lt.airMomentumConservation) ? Mt : wt), jt.ticksToReachMaxIdleFriction > 0 && jt.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);