export const id = 248;
export const ids = [248];
export const modules = {
  39594: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => fh
    });
    const hm = [0, 90, 180, 270],
      Am = "plotsblueprint";
    var am = fm(59),
      xm = fm(36686),
      wm = fm(23),
      Dm = fm(1635),
      im = fm(1713),
      Rm = fm(31);
    const pm = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      Em = {
        farm_hut: {
          displayName: {
            translationKey: "plotsGame:blueprintFarmHut"
          },
          tier: "small"
        },
        farm_house: {
          displayName: {
            translationKey: "plotsGame:blueprintFarmHouse"
          },
          tier: "medium"
        },
        farm_barn: {
          displayName: {
            translationKey: "plotsGame:blueprintFarmBarn"
          },
          tier: "large"
        },
        rusticHome_tent: {
          displayName: {
            translationKey: "plotsGame:blueprintRusticHomeTent"
          },
          tier: "small"
        },
        rusticHome_cabin: {
          displayName: {
            translationKey: "plotsGame:blueprintRusticHomeCabin"
          },
          tier: "medium"
        },
        rusticHome_house: {
          displayName: {
            translationKey: "plotsGame:blueprintRusticHomeHouse"
          },
          tier: "large"
        },
        market_stand: {
          displayName: {
            translationKey: "plotsGame:blueprintMarketStand"
          },
          tier: "small"
        },
        market_stall: {
          displayName: {
            translationKey: "plotsGame:blueprintMarketStall"
          },
          tier: "medium"
        },
        market_shop: {
          displayName: {
            translationKey: "plotsGame:blueprintMarketShop"
          },
          tier: "large"
        },
        castle_wall: {
          displayName: {
            translationKey: "plotsGame:blueprintCastleWall"
          },
          tier: "small"
        },
        castle_gate: {
          displayName: {
            translationKey: "plotsGame:blueprintCastleGate"
          },
          tier: "large"
        },
        castle_tower: {
          displayName: {
            translationKey: "plotsGame:blueprintCastleTower"
          },
          tier: "large"
        }
      },
      om = ["small", "medium", "large"].flatMap((mm => pm.flat().filter((Tm => Em[Tm].tier === mm))));

    function Om(mm) {
      return Em[mm]
    }
    const Ym = new Map(pm.flatMap((mm => mm.slice(1).map(((Tm, fm) => [Tm, mm[fm]])))));

    function qm(mm) {
      var Tm;
      return null !== (Tm = Ym.get(mm)) && void 0 !== Tm ? Tm : null
    }
    const jm = {
      farm_hut: "plotsGame:journalNoteFarmHut",
      rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
      castle_tower: "plotsGame:journalNoteCastleTower",
      farm_house: "plotsGame:journalNoteFarmHouse",
      farm_barn: "plotsGame:journalNoteFarmBarn"
    };

    function Vm(mm, Tm) {
      const fm = new Set(mm),
        hm = function(mm) {
          const Tm = new Set(mm);
          return new Set(om.filter((mm => {
            const fm = qm(mm);
            return null === fm || Tm.has(fm)
          })))
        }(fm);
      return om.map((mm => {
        const Am = mm === Tm;
        return fm.has(mm) ? {
          id: mm,
          active: Am,
          state: "completed",
          unlockedBy: null
        } : hm.has(mm) ? {
          id: mm,
          active: Am,
          state: "open",
          unlockedBy: null
        } : {
          id: mm,
          active: Am,
          state: "locked",
          unlockedBy: qm(mm)
        }
      }))
    }
    const Im = "plotsJournalChanged";
    class Km {
      constructor(mm, Tm) {
        this.api = mm, this.placement = Tm, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.IO("journal_opened")
        }, this.build = mm => {
          this.IO("placement_started"), this.placement.start(mm), (0, xm.h)()
        }, this.putAway = () => {
          this.api.sendCommand(`${Am} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      rO(mm) {
        let [, Tm, fm] = mm;
        this.pages = Vm(Tm, fm), Rm.j.gp(Im, this.pages, !0)
      }
      openFromServer() {
        this.openRequested = !0, this.DE()
      }
      DE() {
        this.openRequested && !wm.c.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, Dm.n)() || (0, im.isTypingInInput)() || null !== this.placement.getView() || (0, xm.s)())
      }
      IO(mm) {
        this.reported.has(mm) || (this.reported.add(mm), this.api.sendCommand(`${Am} report ${mm}`))
      }
    }
    var Qm = fm(1080),
      nm = fm.n(Qm),
      Jm = fm(1089),
      cm = fm(1454),
      zm = fm(4471),
      Zm = fm(3415),
      km = fm(1449),
      bm = fm(1154),
      Sm = fm(1208),
      em = fm(9141);
    const Nm = [0, 90, 180, 270],
      Gm = /^(meta\|rot\d)\|([lrud]+)$/,
      Xm = "nesw",
      Pm = /^meta\|([nesw]*)\|?(Stacked)?$/,
      Hm = function(mm) {
        const Tm = new WeakMap;
        return (fm, hm) => {
          let Am = Tm.get(fm);
          return void 0 === Am && (Am = mm(fm, hm), Tm.set(fm, Am)), Am
        }
      }((mm => new ym(mm)));
    class ym {
      constructor(mm) {
        this.blockMetadata = mm, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const Tm = new Set(Object.keys(mm).map((Tm => mm[Tm].id)));
        Tm.add(0), this.maxBlockId = Math.max(...Tm)
      }
      static
      for (mm) {
        return Hm(mm)
      }
      getBlockIdMapping(mm, Tm) {
        const fm = this.getBlockIdMappingKey(mm, Tm);
        let hm = this.blockIdMappings.get(fm);
        return void 0 === hm && Nm.includes(mm) && (hm = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, mm, Tm), this.blockIdMappings.set(fm, hm)), hm
      }
      turnBlockId(mm, Tm, fm) {
        return this.mapBlockId(this.blockMetadata[mm], Tm, this.getRotationMapping(Tm, fm), fm)
      }
      getBlockIdMappingKey(mm, Tm) {
        return `r${mm}|m${Number(Tm)}`
      }
      createBlockIdMapping(mm, Tm, fm, hm) {
        const Am = new Uint16Array(Tm + 1),
          am = this.getRotationMapping(fm, hm);
        for (const xm in mm) {
          const Tm = mm[xm];
          Am[Tm.id] = this.mapBlockId(Tm, fm, am, hm)
        }
        return Am
      }
      getRotationMapping(mm, Tm) {
        const fm = Math.round(mm / 90),
          hm = new Uint8Array(4);
        for (let Am = 0; Am < 4; Am++) hm[Am] = (4 + Am - fm) % 4;
        if (Tm) {
          let mm = hm[0];
          hm[0] = hm[1], hm[1] = mm, mm = hm[2], hm[2] = hm[3], hm[3] = mm
        }
        return hm
      }
      mapBlockId(mm, Tm, fm, hm) {
        var Am;
        const {
          blockMetadata: am
        } = this, xm = Math.round(Tm / 90), {
          id: wm,
          meta: Dm
        } = mm, {
          rot: im,
          rootName: Rm,
          metaStr: pm
        } = Dm;
        let Em;
        const [, om, Om] = null !== (Am = Pm.exec(pm)) && void 0 !== Am ? Am : [];
        if (void 0 !== om) {
          var Ym, qm;
          Em = null !== (Ym = null === (qm = am[`${Rm}|meta|${[Xm.split("").filter(((mm,Tm)=>om.split("").some((mm=>{const fm=Xm.indexOf(mm);return((hm?3-fm:fm)+xm)%4===Tm})))).join(""),Om].filter(Boolean).join("|")}`]) || void 0 === qm ? void 0 : qm.id) && void 0 !== Ym ? Ym : wm
        } else if (null === im) Em = wm;
        else {
          var jm, Vm;
          const mm = fm[im - 1] + 1;
          let Tm = pm.replace(`rot${im}`, `rot${mm}`);
          hm && Dm.stairsCorner && (Tm = Tm.replace(/(Left|Right)$/, (mm => "Left" === mm ? "Right" : "Left"))), hm && "Chest" === Rm && (Tm = Tm.replace(/\|(left|right)$/, ((mm, Tm) => "left" === Tm ? "|right" : "|left")));
          const Am = Gm.exec(Tm);
          if (hm && null !== Am) {
            const mm = "lrud".split("").filter((mm => Am[2].includes("l" === mm ? "r" : "r" === mm ? "l" : mm)));
            Tm = `${Am[1]}|${mm.join("")}`
          }
          const xm = `${Rm}|${Tm}`;
          if (Em = null !== (jm = null === (Vm = am[xm]) || void 0 === Vm ? void 0 : Vm.id) && void 0 !== jm ? jm : null, null === Em) {
            const mm = am[Rm];
            Em = mm.rootMetaDesc === xm ? mm.id : wm
          }
        }
        return Em
      }
    }

    function Cm(mm, Tm, fm) {
      let {
        xRotationMappedOrigin: hm,
        shouldSwapXZ: Am
      } = fm;
      const am = Am ? Tm : mm;
      return null === hm ? am : hm - am
    }

    function rm(mm, Tm, fm) {
      let {
        zRotationMappedOrigin: hm,
        shouldSwapXZ: Am
      } = fm;
      const am = Am ? mm : Tm;
      return null === hm ? am : hm - am
    }
    const sm = {
        farm_hut: {
          size: [7, 7, 7],
          palette: ["Aspen Wood Planks", "Messy Stone", "Barkless Aspen Log", "Red Planks", "Glass", "Barkless Pine Log", "Maple Wood Planks", "Smooth Stone"],
          layers: ["....... .cbhbc. .bgggb. .bgggb. .bgggb. .cbbbc. .......", "....... .cd.dc. .d...d. .d...d. .d...d. .cdddc. .......", "....... .cd.dc. .d...d. .e...d. .d...d. .cdddc. .......", "aa...aa bfdadfb bd...db bd...db bd...db bfdddfb aa...aa", ".aa.aa. .bbdbb. .bb.bb. .bb.bb. .bb.bb. .bbdbb. .aa.aa.", "..aaa.. ..bbb.. ..bbb.. ..bbb.. ..bbb.. ..bbb.. ..aaa..", "...a... ...b... ...b... ...b... ...b... ...b... ...a..."]
        },
        rusticHome_tent: {
          size: [7, 6, 7],
          palette: ["Barkless Pine Log", "White Wool", "Pine Wood Planks"],
          layers: ["a..a..a b.....b b.....b b.....b b.....b b.....b a..a..a", "a..a..a b.....b b.....b b.....b b.....b b.....b a..a..a", "cc.a.cc b.....b b.....b b.....b b.....b b.....b cc.a.cc", ".ccacc. .b...b. .b...b. .b...b. .b...b. .b...b. .ccacc.", "..ccc.. ..b.b.. ..b.b.. ..b.b.. ..b.b.. ..b.b.. ..ccc..", "...c... ...b... ...b... ...b... ...b... ...b... ...c..."]
        },
        market_stand: {
          size: [7, 4, 4],
          palette: ["Barkless Pine Log", "Pine Wood Planks", "White Wool", "Green Wool"],
          layers: ["a.bbbba ....... ....... acdcdca", "a.....a ....... ....... acdcdca", "a.....a ....... ....... acdcdca", "bcdcdcb bcdcdcb bcdcdcb bcdcdcb"]
        },
        castle_wall: {
          size: [8, 7, 2],
          palette: ["Smooth Stone", "Stone Bricks", "Maple Wood Planks"],
          layers: ["aaaaaaaa aaaaaaaa", "bbbbbbbb bbbbbbbb", "bbbbbbbb bbbbbbbb", "bbbbbbbb bbbbbbbb", "cccccccc bbbbbbbb", "........ bbbbbbbb", "........ bb.bb.bb"]
        },
        farm_house: {
          size: [13, 10, 11],
          palette: ["Aspen Wood Planks", "Messy Stone", "Stone Bricks", "Smooth Stone", "Barkless Aspen Log", "Red Planks", "Maple Wood Planks", "Glass"],
          layers: ["............. .cbbdbbc..dcd .bgggggb....c .bgggggb....c .bgggggb....c .bgggggb....c .bgggggb....c .bgggggb....c .bgggggb....c .cbbbbbcccccd .............", "............. .dbb.bbd..... .b.....b..... .b.....b..... .b.....b..... .b.....b..... .b.....b..... .b........... .b.....b..... .dbbbbbd..... .............", "............. .eff.ffe..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f........... .f.....f..... .effhffe..... .............", "............. .effaffe..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f.....a..... .f.....f..... .effhffe..... .............", "............. .efffffe..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .effaffe..... .............", "aa.....aa.... beaaaaaeb.... ba.....ab.... ba.....ab.... ba.....ab.... ba.....ab.... ba.....ab.... ba.....ab.... ba.....ab.... beaaaaaeb.... aa.....aa....", ".aa...aa..... .bfffffb..... .b.....b..... .b.....b..... .b.....b..... .b.....b..... .b.....b..... .b.....b..... .b.....b..... .bfffffb..... .aa...aa.....", "..aa.aa...... ..bfffb...... ..b...b...... ..b...b...... ..b...b...... ..b...b...... ..b...b...... ..b...b...... ..b...b...... ..bfffb...... ..aa.aa......", "...aaa....... ...bfb....... ...b.b....... ...b.b....... ...b.b....... ...b.b....... ...b.b....... ...b.b....... ...b.b....... ...bfb....... ...aaa.......", "....a........ ....b........ ....b........ ....b........ ....b........ ....b........ ....b........ ....b........ ....b........ ....b........ ....a........"]
        },
        rusticHome_cabin: {
          size: [11, 10, 11],
          palette: ["Pine Wood Planks", "Messy Stone", "Barkless Pine Log", "Maple Wood Planks", "Glass"],
          layers: ["........... .cbbbcbbbc. .bdddddddb. .bdddddddb. .bdddddddb. .cdddddddc. .bdddddddb. .bdddddddb. .bdddddddb. .cbbbcbbbc. ...........", "........... .cb.bcbbbc. .b.......b. .b.......b. .b.......b. .c.......c. .b.......b. .b.......b. .b.......b. .cbbbcbbbc. ...........", "........... .cd.dcdedc. .d.......d. .d.......d. .d.......d. .c.......c. .d.......d. .d.......d. .d.......d. .cdedcdedc. ...........", "........... .cdddcdddc. .d.......d. .d.......d. .d.......d. .c.......c. .d.......d. .d.......d. .d.......d. .cdddcdddc. ...........", "aa.......aa baaaaaaaaab ba.......ab ba.......ab ba.......ab aa.......aa ba.......ab ba.......ab ba.......ab baaaaaaaaab aa.......aa", ".aa.....aa. .bdddcdddb. .b.......b. .b.......b. .b.......b. .a.......a. .b.......b. .b.......b. .b.......b. .bdddcdddb. .aa.....aa.", "..aa...aa.. ..bddcddb.. ..b.....b.. ..b.....b.. ..b.....b.. ..a.....a.. ..b.....b.. ..b.....b.. ..b.....b.. ..bddcddb.. ..aa...aa..", "...aa.aa... ...bdcdb... ...b...b... ...b...b... ...b...b... ...a...a... ...b...b... ...b...b... ...b...b... ...bdcdb... ...aa.aa...", "....aaa.... ....bcb.... ....b.b.... ....b.b.... ....b.b.... ....a.a.... ....b.b.... ....b.b.... ....b.b.... ....bcb.... ....aaa....", ".....a..... .....b..... .....b..... .....b..... .....b..... .....a..... .....b..... .....b..... .....b..... .....b..... .....a....."]
        },
        market_stall: {
          size: [11, 8, 9],
          palette: ["Pine Wood Planks", "Barkless Pine Log", "Messy Stone", "Maple Wood Planks", "Orange Planks", "White Wool", "Orange Wool"],
          layers: ["..bcccccb.. ..cdddddc.. ..cdddddc.. .bcdddddcb. .cdddddddc. .cdddddddc. .cdddddddc. .bcccccccb. ...........", "..b.....b.. ........... ........... .bdddddddb. .d.......d. .d......... .d.......d. .bdddddddb. ...........", "..b.....b.. ........... ........... .bd.....db. .d.......d. .d......... .d.......d. .bdddddddb. ...........", "..b.....b.. ........... ........... .bdaaaaadb. .d.......d. .d.......a. .d.......d. .bdddddddb. ...........", "..afgfgfa.. ..afgfgfa.. aeafgfgfaea abdddddddba .ddddddddd. .ddddddddd. .ddddddddd. abdddddddba aeeeeeeeeea", "........... ........... ........... aeeeeeeeeea ad.......da .d.......d. ad.......da aeeeeeeeeea ...........", "........... ........... ........... ........... aeeeeeeeeea ad.......da aeeeeeeeeea ........... ...........", "........... ........... ........... ........... ........... aeeeeeeeeea ........... ........... ..........."]
        },
        farm_barn: {
          size: [21, 13, 17],
          palette: ["Smooth Stone", "Stone Bricks", "Aspen Wood Planks", "Messy Stone", "Barkless Aspen Log", "Red Planks", "Glass", "Maple Wood Planks", "Maple Ladder|meta|rot3"],
          layers: ["..................... aba..bbbbbabbbbb..aba b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b aba..bbbbbbbbbbb..aba .....................", "..................... .....aaaaa.aaaaa..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a....i....a..... .....aaaaaaaaaaa..... .....................", "..................... .....effef.feffe..... .....f.........f..... .....f.........f..... .....f.........f..... .....f.........f..... .....e.........e..... .....f.........f..... .....g.........g..... .....f.........f..... .....e.........e..... .....f.........f..... .....f.........f..... .....f.........f..... .....f....i....f..... .....effefffeffe..... .....................", "..................... .....effefcfeffe..... .....f.........f..... .....f.........f..... .....f.........f..... .....f.........f..... .....e.........e..... .....f.........f..... .....g.........g..... .....f.........f..... .....e.........e..... .....f.........f..... .....f.........f..... .....f.........f..... .....f....i....f..... .....effefffeffe..... .....................", "..................... .....effefffeffe..... .....f.........f..... .....f.........f..... .....f.........f..... .....f.........f..... .....e.........e..... .....f.........f..... .....c.........c..... .....f.........f..... .....e.........e..... .....f.........f..... .....f.........f..... .....f.........f..... .....f....i....f..... .....effefffeffe..... .....................", "..................... .....effefffeffe..... .....f.........f..... .....f.........f..... .....f.........f..... .....f.........f..... .....ecccccccccc..... .....f.........f..... .....f.........f..... .....f.........f..... .....eccccccccce..... .....f.........f..... .....f.........f..... .....f.........f..... .....f....i....f..... .....effefffeffe..... .....................", "....cc.........cc.... ....deccecccecced.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....cecccccccccec.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....cecccccccccec.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....dchhhhihhhhcd.... ....deccecccecced.... ....cc.........cc....", ".....c.........c..... .....dffefffeffd..... .....d.........d..... .....d.........d..... .....d.........d..... .....d.........d..... .....c.........c..... .....d.........d..... .....d.........d..... .....d.........d..... .....c.........c..... .....d.........d..... .....d.........d..... .....d.........d..... .....d....i....d..... .....dffefffeffd..... .....c.........c.....", ".....c.........c..... .....dffefgfeffd..... .....d.........d..... .....d.........d..... .....d.........d..... .....d.........d..... .....c.........c..... .....d.........d..... .....d.........d..... .....d.........d..... .....c.........c..... .....d.........d..... .....d.........d..... .....d.........d..... .....d.........d..... .....dffefgfeffd..... .....c.........c.....", ".....cc.......cc..... .....dffefgfeffd..... .....d.........d..... .....d.........d..... .....d.........d..... .....d.........d..... .....c.........c..... .....d.........d..... .....d.........d..... .....d.........d..... .....c.........c..... .....d.........d..... .....d.........d..... .....d.........d..... .....d.........d..... .....dffefgfeffd..... .....cc.......cc.....", "......cc.....cc...... ......dfefcfefd...... ......d.......d...... ......d.......d...... ......d.......d...... ......d.......d...... ......c.......c...... ......d.......d...... ......d.......d...... ......d.......d...... ......c.......c...... ......d.......d...... ......d.......d...... ......d.......d...... ......d.......d...... ......dfefcfefd...... ......cc.....cc......", ".......ccc.ccc....... .......ddfffdd....... .......dd...dd....... .......dd...dd....... .......dd...dd....... .......dd...dd....... .......cc...cc....... .......dd...dd....... .......dd...dd....... .......dd...dd....... .......cc...cc....... .......dd...dd....... .......dd...dd....... .......dd...dd....... .......dd...dd....... .......ddfffdd....... .......ccc.ccc.......", ".........ccc......... .........ddd......... .........ddd......... .........ddd......... .........ddd......... .........ddd......... .........ccc......... .........ddd......... .........ddd......... .........ddd......... .........ccc......... .........ddd......... .........ddd......... .........ddd......... .........ddd......... .........ddd......... .........ccc........."]
        },
        rusticHome_house: {
          size: [17, 14, 15],
          palette: ["Pine Wood Planks", "Stone Bricks", "Smooth Stone", "Barkless Pine Log", "Maple Wood Planks", "Glass"],
          layers: ["................. .....cbbbbbc..... .....beeeeeb..... .....beeeeeb..... .cbbbbeeeeebbbbc. .beeeeeeeeeeeeeb. .beeeeeeeeeeeeeb. .beeeeeeeeeeeeeb. .beeeeeeeeeeeeeb. .beeeeeeeeeeeeeb. .cbbbeeeeeeebbbc. .....beeeeeb..... .....beeeeeb..... .....cbbbbbc..... .................", "................. .....cbb.bbc..... .....b.....b..... .....b.....b..... .cbbbd.....dbbbc. .b.............b. .b.............b. .b.............b. .b.............b. .b.............b. .cbbbdeed..dbbbc. .....b.....b..... .....b.....b..... .....cbbbbbc..... .................", "................. .....dee.eed..... .....e.....e..... .....e.....e..... .defed.....defed. .e.............e. .e.............e. .e.............e. .e.............e. .e.............e. .defed..d..defed. .....eee...e..... .....eee...e..... .....deeeeed..... .................", "................. .....deeaeed..... .....e.....e..... .....e.....e..... .defed.....defed. .e.............e. .e.............e. .e.............e. .e.............e. .e.............e. .defed..d..defed. .....e..e..e..... .....e..e..e..... .....deeeeed..... .................", "................. .....deeeeed..... .....e.....e..... .....e.....e..... .deeed.....deeed. .e.............e. .e.............e. .e.............e. .e.............e. .e.............e. .deeed..d..deeed. .....e...eee..... .....e...eee..... .....deeeeed..... .................", "................. .....aaaaaaa..... .....aeeeeea..... aa...aeeeeea...aa baaaaaaaaaaaaaaab baeeeaeeeeeaeeeab baeeeaeeeeeaeeeab baeeeaeeeeeaeeeab baeeeaeeeeeaeeeab baeeeaeeeeeaeeeab baaaaaaadaaaaaaab aa...a.....a...aa .....a.....a..... .....aaaaaaa..... .................", "................. .....deeeeed..... .....e.....e..... .aa..e.....e..aa. .beeed.....deeeb. .b...e.....e...b. .b...e.....e...b. .b...e.....e...b. .b...e.....e...b. .b...e.....e...b. .beeed..d..deeeb. .aa..e.....e..aa. .....e.....e..... .....deeeeed..... .................", "................. .....defefed..... .....e.....e..... ..aa.e.....e.aa.. ..beed.....deeb.. ..b..e.....e..b.. ..b..e.....e..b.. ..b..e.....e..b.. ..b..e.....e..b.. ..b..e.....e..b.. ..beed.....deeb.. ..aa.e.....e.aa.. .....e.....e..... .....defefed..... .................", "................. .....deeeeed..... .....e.....e..... ...aae.....eaa... ...bed.....deb... ...b.e.....e.b... ...b.e.....e.b... ...b.e.....e.b... ...b.e.....e.b... ...b.e.....e.b... ...bed.....deb... ...aae.....eaa... .....e.....e..... .....deeeeed..... .................", "....aa.....aa.... ....baaaaaaab.... ....ba.....ab.... ....aa.....aa.... ....ba.....ab.... ....ba.....ab.... ....ba.....ab.... ....ba.....ab.... ....ba.....ab.... ....ba.....ab.... ....ba.....ab.... ....aa.....aa.... ....ba.....ab.... ....baaaaaaab.... ....aa.....aa....", ".....aa...aa..... .....beeeeeb..... .....b.....b..... .....a.....a..... .....b.....b..... .....b.....b..... .....b.....b..... .....b.....b..... .....b.....b..... .....b.....b..... .....b.....b..... .....a.....a..... .....b.....b..... .....beeeeeb..... .....aa...aa.....", "......aa.aa...... ......beeeb...... ......b...b...... ......a...a...... ......b...b...... ......b...b...... ......b...b...... ......b...b...... ......b...b...... ......b...b...... ......b...b...... ......a...a...... ......b...b...... ......beeeb...... ......aa.aa......", ".......aaa....... .......beb....... .......b.b....... .......a.a....... .......b.b....... .......b.b....... .......b.b....... .......b.b....... .......b.b....... .......b.b....... .......b.b....... .......a.a....... .......b.b....... .......beb....... .......aaa.......", "........a........ ........b........ ........b........ ........a........ ........b........ ........b........ ........b........ ........b........ ........b........ ........b........ ........b........ ........a........ ........b........ ........b........ ........a........"]
        },
        market_shop: {
          size: [17, 16, 12],
          palette: ["Pine Wood Planks", "Smooth Stone", "Stone Bricks", "Barkless Pine Log", "Maple Wood Planks", "Blue Planks", "Glass", "White Wool", "Blue Wool", "Maple Ladder|meta|rot3"],
          layers: [".....bcccccb..... .....ccccccc..... .....ccccccc..... .....ccccccc..... .bcccbcccccbcccb. .ceeeeeeeeeeeeec. .ceeeeeeeeeeeeec. .ceeeeeeeeeeeeec. .ceeeeeeeeeeeeec. .ceeeeeeeeeeeeec. .ccccbcccccbcccb. .................", ".....d.....d..... ................. ................. ................. .bc.cbcccccbc.cb. .c.............c. .c.............c. .c.............c. .c.............c. .c.......j.....c. .bcccbcccccbcccb. .................", ".....d.....d..... ................. ................. ................. .de.ed.....de.ed. .e.............e. .e.............e. .e.............e. .e.............e. .e.......j.....e. .degedeeeeedeged. .................", ".....d.....d..... ................. ................. ................. .deaedaaaaadeaed. .e.............e. .e.............e. .e.............e. .e.............e. .e.......j.....e. .deaedeeeeedeaed. .................", ".....ahihiha..... .....ahihiha..... .....ahihiha..... .....ahihiha..... .deeedeeeeedeeed. .e.............e. .e.............e. .e.............e. .e.............e. .e.......j.....e. .deeedeeeeedeeed. .................", "................. ................. ................. afffffffffffffffa aaaaaaaaaaaaaaaaa .aeeeaeeeeeaeeea. .aeeeaeeeeeaeeea. .aeeeaeeeeeaeeea. .aeeeaeeeeeaeeea. .aeeeaeeejeaeeea. aaaaaaaaaaaaaaaaa affffa.....affffa", "................. ................. ................. ................. affffdeeeeedffffa ae...e.....e...ea .e...e.....e...e. .e...e.....e...e. .e...e.....e...e. ae...e...j.e...ea affffdeeeeedffffa .................", "................. ................. ................. ................. .....degeged..... affffe.....effffa ae...e.....e...ea .e...e.....e...e. ae...e.....e...ea affffe.....effffa .....degeged..... .................", "................. ................. ................. ................. .....degeged..... .....e.....e..... affffe.....effffa ae...e.....e...ea affffe.....effffa .....e.....e..... .....degeged..... .................", "................. ................. ................. ................. .....deaeaed..... .....e.....e..... .....e.....e..... affffe.....effffa .....e.....e..... .....e.....e..... .....deaeaed..... .................", "................. ................. ................. ................. .....deeeeed..... .....e.....e..... .....e.....e..... .....e.....e..... .....e.....e..... .....e.....e..... .....deeeeed..... .................", "................. ................. ................. ....aa.....aa.... ....faaaaaaaf.... ....fa.....af.... ....fa.....af.... ....fa.....af.... ....fa.....af.... ....fa.....af.... ....faaaaaaaf.... ....aa.....aa....", "................. ................. ................. .....aa...aa..... .....feeeeef..... .....f.....f..... .....f.....f..... .....f.....f..... .....f.....f..... .....f.....f..... .....feeeeef..... .....aa...aa.....", "................. ................. ................. ......aa.aa...... ......feeef...... ......f...f...... ......f...f...... ......f...f...... ......f...f...... ......f...f...... ......feeef...... ......aa.aa......", "................. ................. ................. .......aaa....... .......fef....... .......f.f....... .......f.f....... .......f.f....... .......f.f....... .......f.f....... .......fef....... .......aaa.......", "................. ................. ................. ........a........ ........f........ ........f........ ........f........ ........f........ ........f........ ........f........ ........f........ ........a........"]
        },
        castle_gate: {
          size: [17, 11, 5],
          palette: ["Smooth Stone", "Stone Bricks", "Maple Wood Planks", "Maple Ladder|meta|rot3"],
          layers: ["...aaa.....aaa... .d.a.a.....a.a.d. aaaa.a.....a.aaaa aaaa.a.....a.aaaa ...aaa.....aaa...", "...bbb.....bbb... .d.b.b.....b.b.d. bbbb.b.....b.bbbb bbbb.b.....b.bbbb ...bbb.....bbb...", "...abb.....bba... .d.b.b.....b.b.d. bbbb.b.....b.bbbb bbbb.b.....b.bbbb ...abb.....bba...", "...bbbb...bbbb... .d.b.bc...cb.b.d. bbbb.bc...cb.bbbb bbbb.bc...cb.bbbb ...bbbb...bbbb...", "...abbbbbbbbba... .d.bcccccccccb.d. ccccccccccccccccc bbbbcccccccccbbbb ...abbbbbbbbba...", "...bbabbabbabb... ...b.........b... ................. bbbb.........bbbb ...bbabbabbabb...", "...ab.bb.bb.ba... ...b.........b... ................. bb.b.........b.bb ...ab.bb.bb.ba...", "...bbabbabbabb... ...b.........b... ...a.........a... ...b.........b... ...bbabbabbabb...", "...abbbbbbbbba... ...bcccccccccb... ...bcccccccccb... ...bcccccccccb... ...abbbbbbbbba...", "...bbbbbbbbbbb... ...b.........b... ...b.........b... ...b.........b... ...bbbbbbbbbbb...", "...ab.bb.bb.ba... ...b.........b... ................. ...b.........b... ...ab.bb.bb.ba..."]
        },
        castle_tower: {
          size: [9, 20, 9],
          palette: ["Smooth Stone", "Stone Bricks", "Maple Wood Planks", "Barkless Pine Log", "Red Wool", "Maple Ladder|meta|rot3"],
          layers: ["aaaaaaaaa accccccca accccccca accccccca accccccca accccccca accccccca accccccca aaaaaaaaa", "bbbb.bbbb b.......b b.......b b.......b b.......b b.......b b.......b b.....f.b bbbbbbbbb", "abbb.bbba b.......b b.......b b.......b b.......b b.......b b.......b b.....f.b abbbbbbba", "bbbbabbbb b.......b b.......b b.......b b.......b b.......b b.......b b.....f.b bbbbbbbbb", "abbbbbbba bcccccccb bcccccccb bcccccccb bcccccccb bcccccccb bcccccccb bcccccfcb abbbbbbba", "bbbbabbbb b.......b b.......b b.......b a.......a b.......b b.......b b.....f.b bbbbabbbb", "abbb.bbba b.......b b.......b b.......b ......... b.......b b.......b b.....f.b abbb.bbba", "bbbbabbbb b.......b b.......b b.......b a.......a b.......b b.......b b.....f.b bbbbabbbb", "abbbbbbba bcccccccb bcccccccb bcccccccb bcccccccb bcccccccb bcccccccb bcccccfcb abbbbbbba", "bbbbabbbb b.......b b.......b b.......b a.......a b.......b b.......b b.....f.b bbbbabbbb", "abbb.bbba b.......b b.......b b.......b ......... b.......b b.......b b.....f.b abbb.bbba", "bbbbabbbb b.......b b.......b b.......b a.......a b.......b b.......b b.....f.b bbbbabbbb", "abbbbbbba bcccccccb bcccccccb bcccccccb bcccccccb bcccccccb bcccccccb bcccccfcb abbbbbbba", "bbbbbbbbb b.......b b.......b b.......b b...d...b b.......b b.......b b.......b bbbbbbbbb", "ab.bbb.ba b.......b ......... b.......b b...d...b b.......b ......... b.......b ab.bbb.ba", "......... ......... ......... ......... ....d.... ......... ......... ......... .........", "......... ......... ......... ......... ....d.... ......... ......... ......... .........", "......... ......... ......... ......... ....deee. ......... ......... ......... .........", "......... ......... ......... ......... ....deee. ......... ......... ......... .........", "......... ......... ......... ......... ....a.... ......... ......... ......... ........."]
        }
      },
      lm = new Map;

    function Mm(mm, Tm) {
      const fm = `${mm}|${Tm}`;
      let hm = lm.get(fm);
      if (void 0 === hm) {
        const {
          size: Am,
          palette: am,
          layers: xm
        } = sm[mm], wm = 90 === Tm || 270 === Tm, [Dm, im] = wm ? [Am[2], Am[0]] : [Am[0], Am[2]], Rm = function(mm, Tm, fm) {
          let hm = null,
            Am = null,
            am = !1;
          switch (mm) {
            case 0:
              break;
            case 90:
              hm = Tm - 1, am = !0;
              break;
            case 180:
              hm = Tm - 1, Am = fm - 1;
              break;
            case 270:
              Am = fm - 1, am = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${mm}`)
          }
          return {
            xRotationMappedOrigin: hm,
            zRotationMappedOrigin: Am,
            shouldSwapXZ: am
          }
        }(Tm, Dm, im), pm = ym.for(em.i), Em = am.map((mm => (0, em.f)(pm.turnBlockId((0, em.k)(mm), Tm, !1)))), om = [];
        xm.forEach(((mm, Tm) => {
          mm.split(" ").forEach(((mm, fm) => {
            for (let hm = 0; hm < mm.length; hm++)
              if ("." !== mm[hm]) {
                const Am = [Cm(hm, fm, Rm), Tm, rm(hm, fm, Rm)];
                om.push({
                  offset: Am,
                  block: Em[mm.charCodeAt(hm) - "a".charCodeAt(0)]
                })
              }
          }))
        })), hm = {
          size: [Dm, Am[1], im],
          cells: om
        }, lm.set(fm, hm)
      }
      return hm
    }
    const um = {
      farm_hut: fm.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
      farm_house: fm.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
      farm_barn: fm.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
      rusticHome_tent: fm.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
      rusticHome_cabin: fm.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
      rusticHome_house: fm.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
      market_stand: fm.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
      market_stall: fm.p + "static/media/market_stall.9a562807f9dff591618a.webp",
      market_shop: fm.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
      castle_wall: fm.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
      castle_gate: fm.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
      castle_tower: fm.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
    };
    var Bm = fm(1135);
    const Lm = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function tm(mm) {
      let {
        page: Tm,
        building: fm,
        onBuild: hm,
        onPutAway: Am
      } = mm;
      const {
        t: am
      } = (0, Sm.A)(), {
        displayName: xm,
        tier: wm
      } = Om(Tm.id), Dm = Mm(Tm.id, 0).cells.length, im = jm[Tm.id], Rm = "locked" === Tm.state, pm = fm ? cm.e : cm.m;
      return (0, Bm.jsxs)("article", {
        className: nm()("PlotsJournalPage", {
          Locked: Rm
        }),
        children: [(0, Bm.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: am(xm.translationKey)
        }), (0, Bm.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [am(Lm[wm]), " \xb7 ", am("plotsGame:journalBlocks", {
            blocks: String(Dm)
          })]
        }), (0, Bm.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [om.map((mm => (0, Bm.jsx)("img", {
            className: nm()({
              Shown: mm === Tm.id
            }),
            src: um[mm],
            alt: "",
            draggable: !1
          }, mm))), "completed" === Tm.state && (0, Bm.jsx)("span", {
            className: "PlotsJournalStamp",
            children: am("plotsGame:journalBuilt")
          }), Rm && (0, Bm.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, Bm.jsx)(Jm.c, {
              name: "lock"
            })
          })]
        }), void 0 !== im && "completed" !== Tm.state && (0, Bm.jsx)("p", {
          className: "PlotsJournalNote",
          children: am(im)
        }), (0, Bm.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === Tm.state && (0, Bm.jsx)("p", {
            className: "PlotsJournalHint",
            children: am("plotsGame:journalLocked", {
              name: am(Om(Tm.unlockedBy).displayName.translationKey)
            })
          }), Tm.active && (0, Bm.jsxs)(Bm.Fragment, {
            children: [(0, Bm.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: am("plotsGame:journalBuilding")
            }), (0, Bm.jsx)(cm.g, {
              onClick: Am,
              children: am("plotsGame:journalPutAway")
            })]
          }), !Rm && !Tm.active && (0, Bm.jsx)(pm, {
            onClick: () => {
              hm(Tm.id)
            },
            children: am("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function Um(mm) {
      let {
        className: Tm,
        page: fm,
        hidden: hm,
        building: Am,
        journal: am
      } = mm;
      return (0, Bm.jsxs)("div", {
        ref: mm => {
          null !== mm && (mm.inert = hm)
        },
        className: nm()("PlotsJournalSide", Tm),
        children: [void 0 !== fm && (0, Bm.jsx)(tm, {
          page: fm,
          building: Am,
          onBuild: am.build,
          onPutAway: am.putAway
        }), void 0 === fm && (0, Bm.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var dm = fm(354),
      gm = fm(1877);

    function Wm(mm) {
      return Math.cos((0, gm.j)(mm))
    }

    function Fm(mm) {
      return (0, gm.F)(Math.acos(dm.c.clamp(mm, -1, 1)))
    }

    function mT(mm, Tm, fm, hm, Am) {
      const am = Math.abs(Tm - mm),
        xm = (0, gm.F)(Am / (fm * Math.abs(Math.sin((0, gm.j)(mm))))),
        wm = 450 * Math.min(1, am / hm),
        Dm = xm > 0 ? 3 * am / xm : 1 / 0;
      return Math.round(Math.max(120, Math.min(wm, Dm)))
    }
    class TT {
      constructor() {
        this.samples = []
      }
      add(mm, Tm) {
        for (this.samples.push({
            x: mm,
            at: Tm
          }); Tm - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const mm = this.samples[0],
          Tm = this.samples[this.samples.length - 1];
        return Tm.at > mm.at ? (Tm.x - mm.x) / (Tm.at - mm.at) : 0
      }
    }

    function fT(mm, Tm) {
      return mm > Tm && mm >= 600
    }

    function hT(mm) {
      return Fm(new DOMMatrixReadOnly(getComputedStyle(mm).transform).m11)
    }

    function AT(mm, Tm) {
      mm.style.transform = `rotateY(${-Tm}deg)`, mm.classList.add("Turning")
    }

    function aT(mm) {
      let {
        journal: Tm
      } = mm;
      const {
        t: fm
      } = (0, Sm.A)(), hm = (0, km.i)(Im, Tm.getPages()), Am = (0, bm.l)(fT), [wm, Dm] = (0, am.useState)((() => function(mm) {
        const Tm = mm.findIndex((mm => mm.active));
        return -1 !== Tm ? Tm : Math.max(0, mm.findIndex((mm => "open" === mm.state)))
      }(hm))), Rm = (0, am.useRef)(null), pm = (0, am.useRef)(null), Em = (0, am.useRef)({
        Forward: null,
        Back: null
      }), om = Am ? 2 : 1, Om = Am ? 180 : 90, Ym = wm - wm % om, qm = Ym > 0, jm = Ym + om < hm.length, Vm = (0, am.useCallback)((() => {
        const mm = pm.current;
        return null === mm ? Ym : (pm.current = null, mm.animation.cancel(), (Tm = Em.current[mm.direction]).style.transform = "", Tm.classList.remove("Turning"), null === mm.next ? Ym : (Dm(mm.next), mm.next));
        var Tm
      }), [Ym]), Km = (0, am.useCallback)(((mm, Tm, fm, hm) => {
        const Am = Em.current[mm],
          am = hT(Am),
          xm = Tm === ("Forward" === mm) ? Om : 0;
        AT(Am, xm);
        const wm = Am.animate([{
          transform: `rotateY(${-am}deg)`
        }, {
          transform: `rotateY(${-xm}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : mT(am, xm, Am.offsetWidth, Om, xm > am ? -fm : fm),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        pm.current = {
          direction: mm,
          animation: wm,
          next: Tm ? hm + ("Forward" === mm ? om : -om) : null
        }, wm.onfinish = () => {
          var mm;
          (null === (mm = pm.current) || void 0 === mm ? void 0 : mm.animation) === wm && Vm()
        }
      }), [om, Om, Vm]), Qm = (0, am.useCallback)((mm => {
        if (null !== Rm.current) return;
        const Tm = Vm();
        ("Forward" === mm ? Tm + om < hm.length : Tm > 0) && Km(mm, !0, 0, Tm)
      }), [Vm, Km, om, hm.length]);
      (0, am.useEffect)((() => {
        Tm.onOpened()
      }), [Tm]), (0, am.useEffect)((() => () => {
        var mm;
        null === (mm = pm.current) || void 0 === mm || mm.animation.cancel()
      }), []), (0, am.useEffect)((() => {
        const mm = mm => {
          var Tm;
          mm.pointerId !== (null === (Tm = Rm.current) || void 0 === Tm ? void 0 : Tm.pointerId) || Rm.current.following || (Rm.current = null)
        };
        return window.addEventListener("pointerup", mm), () => {
          window.removeEventListener("pointerup", mm)
        }
      }), []), (0, Zm.b)((mm => ("ArrowLeft" === mm.code || "ArrowRight" === mm.code) && !(0, im.isTypingInInput)()), (mm => {
        mm.stopPropagation(), Qm("ArrowLeft" === mm.code ? "Back" : "Forward")
      }));
      const Jm = (mm, Tm, fm) => {
          const hm = function(mm, Tm, fm, hm) {
            return (mm < 0 ? fm : hm) ? dm.c.clampAbs(mm, Tm) : Math.sign(mm) * Tm * (1 - 1 / (.55 * Math.abs(mm) / Tm + 1))
          }(mm.base + fm, om * mm.width, jm, qm);
          return "Forward" === Tm ? Math.min(hm, 0) : Math.max(hm, 0)
        },
        em = (mm, Tm) => {
          const fm = Rm.current;
          if (Rm.current = null, null === fm.direction) return;
          fm.speed.add(mm, Tm);
          const hm = fm.speed.get(),
            Am = Jm(fm, fm.direction, mm - fm.x);
          Km(fm.direction, null !== function(mm, Tm, fm, hm, Am) {
            if (Math.abs(Tm) >= .3 ? Math.sign(Tm) !== Math.sign(mm) : Math.abs(mm) < .5 * fm) return null;
            const am = mm < 0 ? "Forward" : "Back";
            return ("Forward" === am ? hm : Am) ? am : null
          }(Am, hm, om * fm.width, jm, qm), hm, Ym)
        },
        Nm = hm.some((mm => mm.active)),
        Gm = (mm, fm, Am) => (0, Bm.jsx)(Um, {
          className: mm,
          page: fm >= 0 && fm < hm.length ? hm[fm] : void 0,
          hidden: Am,
          building: Nm,
          journal: Tm
        });
      return (0, Bm.jsx)(zm.d, {
        close: xm.j,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, Bm.jsxs)("section", {
          className: nm()("PlotsJournal", {
            Spread: Am
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": fm("plotsGame:journalTitle"),
          children: [(0, Bm.jsx)(cm.j, {
            className: "PlotsJournalClose",
            onClick: xm.j
          }), (0, Bm.jsx)(xT, {
            direction: "Back",
            disabled: !qm,
            onTurn: Qm
          }), (0, Bm.jsx)("div", {
            className: "PlotsJournalBookPages",
            onPointerDown: mm => {
              var Tm;
              if (!mm.isPrimary || 0 !== mm.button || null !== pm.current && null !== mm.target.closest("button")) return;
              const fm = new TT;
              fm.add(mm.clientX, mm.timeStamp);
              const hm = Em.current.Forward.offsetWidth,
                Am = pm.current;
              pm.current = null;
              let am = 0;
              if (null !== Am) {
                const Tm = Em.current[Am.direction],
                  fm = hT(Tm);
                Am.animation.cancel(), AT(Tm, fm), am = function(mm, Tm, fm, hm) {
                  return (mm < 0 ? fm : hm) ? mm : Math.sign(mm) * Tm * (1 / (1 - Math.min(Math.abs(mm) / Tm, .99)) - 1) / .55
                }(function(mm, Tm, fm, hm) {
                  return fm * (Wm(Tm) - Wm("Forward" === mm ? 0 : hm))
                }(Am.direction, fm, hm, Om), om * hm, jm, qm), mm.currentTarget.setPointerCapture(mm.pointerId)
              }
              Rm.current = {
                pointerId: mm.pointerId,
                x: mm.clientX,
                y: mm.clientY,
                base: am,
                width: hm,
                following: null !== Am,
                direction: null !== (Tm = null === Am || void 0 === Am ? void 0 : Am.direction) && void 0 !== Tm ? Tm : null,
                speed: fm
              }
            },
            onPointerMove: mm => {
              const Tm = Rm.current;
              if (null === Tm || mm.pointerId !== Tm.pointerId) return;
              if (0 === mm.buttons) return void em(mm.clientX, mm.timeStamp);
              const fm = mm.clientX - Tm.x;
              !Tm.following && function(mm, Tm) {
                return Math.abs(mm) > 8 && Math.abs(mm) > Math.abs(Tm)
              }(fm, mm.clientY - Tm.y) && (Tm.following = !0, Tm.direction = fm < 0 ? "Forward" : "Back", mm.currentTarget.setPointerCapture(mm.pointerId)), null !== Tm.direction && (Tm.speed.add(mm.clientX, mm.timeStamp), AT(Em.current[Tm.direction], function(mm, Tm, fm, hm) {
                const Am = fm * Wm("Forward" === mm ? 0 : hm) + Tm;
                return dm.c.clamp(Fm(Am / fm), 0, hm)
              }(Tm.direction, Jm(Tm, Tm.direction, fm), Tm.width, Om)))
            },
            onPointerUp: mm => {
              var Tm;
              mm.pointerId === (null === (Tm = Rm.current) || void 0 === Tm ? void 0 : Tm.pointerId) && em(mm.clientX, mm.timeStamp)
            },
            onPointerCancel: mm => {
              const Tm = Rm.current;
              mm.pointerId === (null === Tm || void 0 === Tm ? void 0 : Tm.pointerId) && (Rm.current = null, null !== Tm.direction && Km(Tm.direction, !1, 0, Ym))
            },
            children: (0, Bm.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [Am && Gm("Left", Ym - 2, !0), Gm("Right", Ym + 2 * om - 1, !0), (0, Bm.jsxs)("div", {
                ref: mm => {
                  Em.current.Back = mm
                },
                className: "PlotsJournalLeaf Back",
                children: [Gm("Recto", Ym - 1, !0), Am && Gm("Verso", Ym, !1)]
              }), (0, Bm.jsxs)("div", {
                ref: mm => {
                  Em.current.Forward = mm
                },
                className: "PlotsJournalLeaf Forward",
                children: [Gm("Recto", Ym + om - 1, !1), Am && Gm("Verso", Ym + om, !0)]
              })]
            })
          }), (0, Bm.jsx)(xT, {
            direction: "Forward",
            disabled: !jm,
            onTurn: Qm
          })]
        })
      })
    }

    function xT(mm) {
      let {
        direction: Tm,
        disabled: fm,
        onTurn: hm
      } = mm;
      const {
        t: Am
      } = (0, Sm.A)();
      return (0, Bm.jsx)("div", {
        className: nm()("PlotsJournalArrow", Tm),
        children: (0, Bm.jsx)(cm.e, {
          disabled: fm,
          ariaLabel: Am("Forward" === Tm ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            hm(Tm)
          },
          children: (0, Bm.jsx)(Jm.c, {
            name: "angle-up"
          })
        })
      })
    }
    var wT = fm(36681),
      DT = fm(1893),
      iT = fm(1950);
    const RT = "plotsStepChanged",
      pT = "plotsPlotChanged";
    class ET {
      constructor() {
        this.step = ["none"], this.plot = ["none"]
      }
      getStep() {
        return this.step
      }
      receiveStep(mm) {
        this.step = mm, Rm.j.gp(RT, mm, !0)
      }
      getPlot() {
        return this.plot
      }
      receivePlot(mm) {
        this.plot = mm, Rm.j.gp(pT, mm, !0)
      }
    }
    const oT = "KeyJ";

    function OT(mm) {
      let {
        hud: Tm,
        journal: fm
      } = mm;
      const hm = (0, km.i)(Im, fm.getPages()),
        Am = (0, km.i)(RT, Tm.getStep()),
        {
          isTouchScreen: am
        } = (0, wm.m)(["isTouchScreen"]),
        {
          t: Rm
        } = (0, Sm.A)(),
        pm = null !== hm && "none" === Am[0];
      return (0, Zm.b)((mm => null !== hm && mm.code === oT && !mm.repeat && !(0, im.isTypingInInput)()), (mm => {
        (0, Dm.w)(mm, pm, xm.s)
      })), pm ? (0, Bm.jsx)(wT.e, {
        placement: "topRight",
        children: (0, Bm.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, Bm.jsxs)("button", {
            type: "button",
            className: nm()("PlotsJournalButton SmallTextBold", {
              Touch: am
            }),
            onClick: xm.s,
            children: [(0, Bm.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, Bm.jsx)(DT.d, {
                itemName: "Book",
                amount: 0
              })
            }), Rm("plotsGame:journalButton"), !am && (0, Bm.jsx)(iT.e, {
              className: "PlotsJournalButtonKey",
              keyCode: oT
            })]
          })
        })
      }) : null
    }
    var YT = fm(38509),
      qT = fm(38254),
      jT = fm(37032),
      VT = fm(9167),
      IT = fm(9193),
      KT = fm(37858);
    const QT = new Map([
        ["Aspen Wood Planks", [.78, .706, .502]],
        ["Barkless Aspen Log", [.792, .718, .518]],
        ["Barkless Pine Log", [.49, .353, .275]],
        ["Blue Planks", [.247, .267, .588]],
        ["Blue Wool", [.227, .267, .651]],
        ["Glass", [.702, .902, .882]],
        ["Green Wool", [.373, .467, .125]],
        ["Maple Ladder", [.612, .471, .29]],
        ["Maple Leaves", [.173, .443, .09]],
        ["Maple Log", [.486, .388, .255]],
        ["Maple Wood Planks", [.682, .561, .353]],
        ["Messy Stone", [.557, .58, .608]],
        ["Mossy Stone Bricks", [.49, .514, .541]],
        ["Orange Planks", [.949, .549, .231]],
        ["Orange Wool", [.988, .522, .129]],
        ["Pine Wood Planks", [.475, .341, .263]],
        ["Red Concrete", [.58, .157, .141]],
        ["Red Planks", [.608, .2, .184]],
        ["Red Wool", [.69, .173, .145]],
        ["Smooth Stone", [.627, .651, .678]],
        ["Stone Bricks", [.522, .545, .573]],
        ["White Concrete", [.89, .894, .894]],
        ["White Wool", [.98, .98, .98]]
      ]),
      nT = [...jT.e.blockRemoveActionRoots, ...qT.e, ...VT.h, "Board", "Code Block", "Custom Lobby Block"],
      JT = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let cT = null;

    function zT() {
      return cT ??= function() {
        const mm = ZT(),
          Tm = Math.max(...mm.map((mm => em.i[mm].id))) + 1,
          fm = new Int32Array(Tm),
          hm = new Int32Array(Tm),
          Am = new Uint8Array(Tm).fill(1),
          am = new Uint8Array(Tm),
          xm = new Uint8Array(Tm),
          wm = new Array(Tm).fill("Air"),
          Dm = new Map,
          im = mm => {
            let Tm = Dm.get(mm);
            return void 0 === Tm && (Tm = Dm.size + 1, Dm.set(mm, Tm)), Tm
          },
          Rm = new Set(nT);
        for (const Em of mm) {
          var pm;
          const {
            id: mm,
            meta: Tm,
            altActionable: Dm,
            canBePlacedOver: om
          } = em.i[Em];
          fm[mm] = im(kT(Em));
          const Om = Tm.stairsCorner;
          if (null === Om) hm[mm] = fm[mm];
          else {
            const fm = Om.endsWith("Right");
            hm[mm] = im(`${Tm.rootName}|rot${fm?Tm.rot%4+1:Tm.rot}|${Tm.halfblockPlacement}|${Om.replace("Right","Left")}`)
          }
          Am[mm] = om ? 1 : 0, am[mm] = Dm || null !== Tm.open || Em in KT.c || Rm.has(Tm.rootName) || void 0 !== (0, qT.g)(Tm.rootName) ? 1 : 0;
          const {
            rootName: Ym
          } = Tm;
          xm[mm] = null !== Tm.open || qT.e.includes(Ym) || Ym.includes("Bookshelf") || Ym.includes("Mailbox") ? 1 : 0, wm[mm] = null !== (pm = (0, YT.i)(mm)) && void 0 !== pm ? pm : Ym
        }
        return {
          kinds: fm,
          shapes: hm,
          empty: Am,
          inUse: am,
          ownAltActionMessage: xm,
          placingItems: wm
        }
      }(), cT
    }

    function ZT() {
      return Object.keys(em.i).filter((mm => em.i[mm].name === mm))
    }

    function kT(mm) {
      var Tm;
      const fm = em.i[mm],
        {
          rootName: hm,
          rot: Am
        } = fm.meta,
        [, ...am] = (null !== (Tm = fm.rootMetaDesc) && void 0 !== Tm ? Tm : mm).split("|"),
        xm = am.filter((mm => !("meta" === mm || JT.test(mm) || (0, IT.y)(fm) && /^[nesw]+$/.test(mm) || VT.h.includes(hm) && /^[lrud]+$/.test(mm) || dm.I.includes(hm) && /^(left|right)$/.test(mm))));
      return [hm, ...xm].map((mm => "fenceGate" === fm.model && mm === `rot${Am}` ? "rot" + ((Am - 1) % 2 + 1) : mm)).join("|")
    }

    function bT(mm, Tm) {
      const {
        kinds: fm,
        shapes: hm
      } = zT();
      return fm[mm] === fm[Tm] || hm[mm] === hm[Tm]
    }

    function ST(mm) {
      return 1 === zT().empty[mm]
    }

    function eT(mm) {
      return zT().placingItems[mm]
    }

    function NT(mm) {
      return QT.get(em.i[mm].meta.rootName)
    }
    var GT = fm(9161),
      XT = fm(9184);
    const PT = [0, 0, 0, 1, 1, 1],
      HT = (0, GT.d)([
        [2, 0, 2, 6, 6, 6]
      ]),
      yT = (0, GT.d)([
        [3, 0, 3, 5, 5, 5]
      ]),
      CT = (0, GT.d)([
        [3, 3, 3, 5, 8, 5]
      ]),
      rT = [0, 1, 2, 3].map((mm => (0, GT.d)((0, GT.n)([
        [3, 2, 0, 5, 7, 3]
      ], mm))));

    function sT(mm) {
      const {
        AO: Tm,
        model: fm,
        blockModel: hm,
        meta: Am
      } = em.i[mm];
      return void 0 !== Tm ? Tm : "CentreCross" === fm ? HT : null !== hm && void 0 !== hm && hm.startsWith("torch") ? Am.halfblockPlacement === XT.e.side ? rT[Am.rot - 1] : Am.halfblockPlacement === XT.e.top ? CT : yT : PT
    }
    var lT = fm(36999),
      MT = fm(198);

    function uT(mm, Tm) {
      const fm = MT.f.dq / 2;
      return mm[0] < Tm[0] + fm && mm[0] + 1 > Tm[0] - fm && mm[1] < Tm[1] + MT.f.gq && mm[1] + 1 > Tm[1] && mm[2] < Tm[2] + fm && mm[2] + 1 > Tm[2] - fm
    }

    function BT(mm, Tm, fm, hm, Am) {
      const am = Math.hypot(...Tm.dir);
      if (!Number.isFinite(am) || 0 === am) return -1;
      const {
        from: xm,
        reach: wm,
        solid: Dm
      } = Tm, im = [Tm.dir[0] / am, Tm.dir[1] / am, Tm.dir[2] / am], Rm = null === Dm ? wm : Math.min(wm, function(mm, Tm, fm) {
        const hm = LT(mm, Tm, fm);
        if (hm !== 1 / 0) return hm;
        return (fm[0] + .5 - mm[0]) * Tm[0] + (fm[1] + .5 - mm[1]) * Tm[1] + (fm[2] + .5 - mm[2]) * Tm[2]
      }(xm, im, Dm) + .75);
      let pm = -1,
        Em = 1 / 0,
        om = 1 / 0;
      for (let Om = 0; Om < mm.length; Om += 4) {
        const Tm = [mm[Om], mm[Om + 1], mm[Om + 2]],
          am = Am(Om) ? wm : Rm;
        let Dm = -1,
          Ym = LT(xm, im, Tm);
        if (Ym > am) {
          const mm = [Tm[0] + .5 - xm[0], Tm[1] + .5 - xm[1], Tm[2] + .5 - xm[2]];
          if (Ym = mm[0] * im[0] + mm[1] * im[1] + mm[2] * im[2], Ym <= 0 || Ym > am) continue;
          if (Dm = Math.hypot(mm[0] - Ym * im[0], mm[1] - Ym * im[1], mm[2] - Ym * im[2]), Dm > .7 || !hm(Om)) continue
        }(Dm < Em || Dm === Em && Ym < om) && fm(Om) && (pm = Om, Em = Dm, om = Ym)
      }
      return pm
    }

    function LT(mm, Tm, fm) {
      let hm = 0,
        Am = 1 / 0;
      for (let am = 0; am < 3; am++) {
        const xm = fm[am] - mm[am];
        if (0 === Tm[am]) {
          if (xm > 0 || xm + 1 < 0) return 1 / 0;
          continue
        }
        const wm = xm / Tm[am],
          Dm = (xm + 1) / Tm[am];
        hm = Math.max(hm, Math.min(wm, Dm)), Am = Math.min(Am, Math.max(wm, Dm))
      }
      return hm <= Am ? hm : 1 / 0
    }
    var vT = fm(38124),
      tT = fm(38611);
    const UT = [1, 1, 1];
    class dT {
      constructor(mm) {
        this.api = mm, this.meshes = null, this.shown = null
      }
      show(mm) {
        if (!(0, lT.i)(mm, this.shown))
          if (this.shown = null === mm ? null : [mm[0], mm[1], mm[2]], null !== this.meshes)
            for (const Tm of this.meshes) this.api.setGameMesh(Tm, null === mm ? {
              visible: !1
            } : {
              anchor: mm,
              visible: !0
            });
          else if (null !== mm) {
          const Tm = [vT.h, vT.h, vT.h, 0, 0, 0];
          this.meshes = [this.build([Tm], vT.k, mm), this.build((0, vT.d)(), vT.p, mm)]
        }
      }
      dispose() {
        for (const Tm of null !== (mm = this.meshes) && void 0 !== mm ? mm : []) {
          var mm;
          this.api.disposeGameMesh(Tm)
        }
        this.meshes = null, this.shown = null
      }
      build(mm, Tm, fm) {
        const hm = [],
          Am = [];
        for (const [am, xm, wm, Dm, im, Rm] of mm)(0, tT.e)(hm, Am, [Dm + .5, im + .5, Rm + .5], [am, xm, wm]);
        return this.api.createGameMesh({
          positions: hm,
          indices: Am
        }, {
          rgb: UT,
          alpha: Tm,
          onTop: !0
        }, fm)
      }
    }
    class gT {
      constructor(mm) {
        this.api = mm, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(mm) {
        const Tm = MT.f.MO;
        this.chunks = [];
        for (let fm = 0; fm < mm.length; fm += 3) {
          const hm = Math.floor(mm[fm] / Tm),
            Am = Math.floor(mm[fm + 1] / Tm),
            am = Math.floor(mm[fm + 2] / Tm);
          this.watches(hm, Am, am) || this.chunks.push(hm, Am, am)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const mm = performance.now();
        if (mm - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = mm;
        let Tm = !1;
        for (let fm = 0; fm < this.chunks.length; fm += 3) {
          const mm = this.api.getChunkVersion(this.chunks[fm], this.chunks[fm + 1], this.chunks[fm + 2]);
          this.versions[fm / 3] !== mm && (this.versions[fm / 3] = mm, Tm = !0)
        }
        return Tm
      }
      watches(mm, Tm, fm) {
        for (let hm = 0; hm < this.chunks.length; hm += 3)
          if (this.chunks[hm] === mm && this.chunks[hm + 1] === Tm && this.chunks[hm + 2] === fm) return !0;
        return !1
      }
    }
    const WT = .35,
      FT = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      mf = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      Tf = [.95, .2, .15];
    class ff {
      constructor() {
        this.groups = []
      }
      add(mm, Tm, fm, hm, Am) {
        let am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : PT;
        for (const xm of this.groups)
          if (af(xm, hm, Am)) return xm.cells.push(mm, Tm, fm), void xm.boxes.push(am);
        this.groups.push({
          rgb: hm,
          look: Am,
          cells: [mm, Tm, fm],
          boxes: [am]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class hf {
      constructor(mm) {
        this.api = mm, this.shown = []
      }
      show(mm) {
        const Tm = [];
        for (const fm of mm) {
          const mm = this.shown.findIndex((mm => {
            let {
              group: Tm
            } = mm;
            return af(Tm, fm.rgb, fm.look) && xf(Tm, fm)
          })); - 1 === mm ? Tm.push(this.build(fm)) : (Tm.push(this.shown[mm]), this.shown.splice(mm, 1))
        }
        this.dispose(), this.shown = Tm
      }
      dispose() {
        for (const {
            meshes: mm
          }
          of this.shown)
          for (const Tm of mm) this.api.disposeGameMesh(Tm);
        this.shown = []
      }
      build(mm) {
        const {
          rgb: Tm,
          look: fm,
          boxes: hm
        } = mm, Am = [Tm[0] + (1 - Tm[0]) * WT, Tm[1] + (1 - Tm[1]) * WT, Tm[2] + (1 - Tm[2]) * WT], am = [this.buildMesh(mm.cells, Tm, fm.alpha, ((mm, Tm, Am, am) => {
          Af(mm, Tm, Am, hm[am], fm.size, !1)
        })), this.buildMesh(mm.cells, Am, fm.alpha, ((mm, Tm, Am, am) => {
          Af(mm, Tm, Am, hm[am], fm.size, !0)
        }))];
        return fm.crossed && am.push(this.buildMesh(mm.cells, Tm, .9, ((mm, Tm, hm) => {
          (0, tT.h)(mm, Tm, hm, fm.size + .01, .12)
        }))), {
          group: mm,
          meshes: am
        }
      }
      buildMesh(mm, Tm, fm, hm) {
        const Am = [mm[0], mm[1], mm[2]],
          am = [],
          xm = [];
        for (let wm = 0; wm < mm.length; wm += 3) hm(am, xm, [mm[wm] - Am[0] + .5, mm[wm + 1] - Am[1] + .5, mm[wm + 2] - Am[2] + .5], wm / 3);
        return this.api.createGameMesh({
          positions: am,
          indices: xm
        }, {
          rgb: [Tm[0], Tm[1], Tm[2]],
          alpha: fm
        }, Am)
      }
    }

    function Af(mm, Tm, fm, hm, Am, am) {
      for (let xm = 0; xm < hm.length; xm += 6) {
        const wm = [0, 0, 0],
          Dm = [0, 0, 0];
        for (let mm = 0; mm < 3; mm++) wm[mm] = fm[mm] + ((hm[xm + mm] + hm[xm + mm + 3]) / 2 - .5) * Am, Dm[mm] = (hm[xm + mm + 3] - hm[xm + mm]) * Am;
        (0, tT.c)(mm, Tm, wm, Dm, am)
      }
    }

    function af(mm, Tm, fm) {
      return mm.rgb[0] === Tm[0] && mm.rgb[1] === Tm[1] && mm.rgb[2] === Tm[2] && mm.look === fm
    }

    function xf(mm, Tm) {
      if (mm.cells.length !== Tm.cells.length) return !1;
      for (let fm = 0; fm < mm.cells.length; fm++)
        if (mm.cells[fm] !== Tm.cells[fm]) return !1;
      return mm.boxes.every(((mm, fm) => mm === Tm.boxes[fm]))
    }

    function wf(mm, Tm) {
      return mm.getClientOption(Tm, "blockReach") + 1
    }
    class Df {
      constructor(mm, Tm, fm) {
        this.api = mm, this.localPlayerId = Tm, this.pickNext = fm, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(mm) {
        const [Tm, , fm] = mm.cameraDirection, hm = Math.hypot(Tm, fm);
        hm > .001 && (this.heading = [Tm / hm, fm / hm])
      }
      tapped(mm, Tm, fm) {
        const hm = wf(this.api, this.localPlayerId),
          {
            origin: Am,
            direction: am
          } = this.api.getActionRay(),
          xm = [...Am],
          wm = [
            [xm, [xm[0] + am[0] * hm, xm[1] + am[1] * hm, xm[2] + am[2] * hm]]
          ];
        null !== mm && wm.push([xm, (0, lT.e)(mm)]), this.tap = {
          lines: wm,
          next: Tm,
          ms: fm
        }
      }
      filled(mm, Tm) {
        this.tap = null, this.turnFrom(mm, Tm), this.retry(Tm)
      }
      arrived(mm, Tm) {
        const {
          tap: fm
        } = this;
        if (null === fm || Tm - fm.ms > 1500) return null;
        const hm = (0, lT.e)(mm);
        return (0, lT.i)(fm.next, mm) || fm.lines.some((mm => {
          let [Tm, fm] = mm;
          return function(mm, Tm, fm) {
            const hm = [fm[0] - Tm[0], fm[1] - Tm[1], fm[2] - Tm[2]],
              Am = [mm[0] - Tm[0], mm[1] - Tm[1], mm[2] - Tm[2]],
              am = hm[0] ** 2 + hm[1] ** 2 + hm[2] ** 2,
              xm = 0 === am ? 0 : Math.min(1, Math.max(0, (Am[0] * hm[0] + Am[1] * hm[1] + Am[2] * hm[2]) / am));
            return Math.hypot(Am[0] - hm[0] * xm, Am[1] - hm[1] * xm, Am[2] - hm[2] * xm)
          }(hm, Tm, fm) <= .9
        })) ? (this.tap = null, this.turnFrom(mm, Tm), fm.ms) : null
      }
      turnFrom(mm, Tm) {
        this.pending = {
          from: mm,
          ms: Tm,
          turnMs: Math.max(50, Math.min(250, Tm - this.lastFillMs))
        }, this.lastFillMs = Tm
      }
      retry(mm) {
        const {
          pending: Tm
        } = this;
        if (null === Tm) return;
        if (mm - Tm.ms > 1500) return void(this.pending = null);
        const fm = this.pickNext((0, lT.e)(Tm.from), (mm => (0, lT.i)(mm, Tm.from)));
        if (null === fm) return;
        this.pending = null;
        const {
          turning: hm
        } = this;
        if (null !== hm && mm < hm.endMs && (0, lT.i)(hm.to, fm)) return;
        const Am = this.api.getActionRay().origin,
          am = [fm[0] + .5 - Am[0], fm[1] + .5 - Am[1], fm[2] + .5 - Am[2]],
          xm = Math.hypot(am[0], am[2]);
        if (xm < .3) {
          const mm = Math.max(xm, .001);
          am[0] = this.heading[0] * mm, am[2] = this.heading[1] * mm
        }
        this.api.turnCamera(am, Tm.turnMs), this.turning = {
          to: fm,
          endMs: mm + Tm.turnMs
        }
      }
    }
    class Rf {
      constructor(mm, Tm, fm) {
        this.api = mm, this.localPlayerId = Tm, this.juice = fm, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], this.lastFilled = null, this.lastSeenFilled = null, this.playerCells = [], this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = null, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new gT(mm), this.meshes = new hf(mm), this.outline = new dT(mm), this.turn = new Df(mm, Tm, ((mm, Tm) => this.pickNext(mm, Tm)))
      }
      rO(mm) {
        const Tm = "active" === mm[0] ? `${mm[1]}|${mm[3]}|${mm[4]}|${mm[5]}|${mm[6]}` : "";
        if ("active" !== mm[0]) "built" === mm[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , fm, hm, Am, am] = mm;
          Tm !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = fm) : fm === this.layerY ? this.burstUnlisted(hm) : fm > this.layerY && this.finishLayer(fm), this.layerY = fm, this.layerCells.has(fm) || this.layerCells.set(fm, hm.filter(Ef)), this.ghostCells = hm, this.palette = Am, this.occupiedCells = am
        }
        Tm !== this.blueprint && (this.blueprint = Tm, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((mm => this.api.blockNameToBlockId(mm))), this.chunkWatch.watch([...this.ghostCells.filter(Ef), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(mm) {
        this.burstUnlisted([]), mm > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = mm)
      }
      DE() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const mm = performance.now();
        let Tm = !1;
        for (const [Am, am] of this.foreseen) {
          var fm;
          if (mm - am > 1e3) this.foreseen.delete(Am), Tm = !0, (null === (fm = this.lastFilled) || void 0 === fm ? void 0 : fm.join()) === Am && (this.lastFilled = this.lastSeenFilled)
        }
        const hm = pf(this.api.getPositionView(this.localPlayerId));
        (Tm || hm.some(((mm, Tm) => mm !== this.playerCells[Tm]))) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(mm) {
        const Tm = new Set;
        for (let Am = 0; Am < mm.length; Am += 4) Tm.add(`${mm[Am]},${mm[Am+1]},${mm[Am+2]}`);
        const fm = [],
          {
            ghostCells: hm
          } = this;
        for (let Am = 0; Am < hm.length; Am += 4) {
          const mm = `${hm[Am]},${hm[Am+1]},${hm[Am+2]}`;
          !Tm.has(mm) && this.open.delete(mm) && fm.push(this.filledCell(Am))
        }
        this.burst(fm)
      }
      refresh() {
        const {
          ghostCells: mm,
          palette: Tm,
          occupiedCells: fm
        } = this, hm = new ff, Am = new Set, am = [], xm = [];
        for (let wm = 0; wm < mm.length; wm += 4) {
          const [fm, Dm, im, Rm] = [mm[wm], mm[wm + 1], mm[wm + 2], mm[wm + 3]], pm = this.api.getBlockId(fm, Dm, im), Em = `${fm},${Dm},${im}`, om = bT(this.blockIds[Rm], pm);
          !om && ST(pm) ? hm.add(fm, Dm, im, NT(Tm[Rm]), FT, sT(Tm[Rm])) : om ? this.open.has(Em) && am.push(this.filledCell(wm)) : hm.add(fm, Dm, im, Tf, mf), !om && this.api.isBlockInLoadedChunk(fm, Dm, im) && (Am.add(Em), xm.push(fm, Dm, im, ST(pm) ? 0 : 1))
        }
        this.open = Am, this.nextCells = xm;
        for (let wm = 0; wm < fm.length; wm += 3) {
          const [mm, Tm, Am] = [fm[wm], fm[wm + 1], fm[wm + 2]];
          ST(this.api.getBlockId(mm, Tm, Am)) || hm.add(mm, Tm, Am, Tf, mf)
        }
        this.meshes.show(hm.toArray()), this.burst(am), this.showNext(), this.turn.retry(performance.now())
      }
      burst(mm) {
        const Tm = performance.now(),
          fm = [];
        for (const [Am, am, xm] of mm) {
          const mm = [Am, am, xm];
          this.lastSeenFilled = mm, this.foreseen.delete(mm.join()) || fm.push(mm)
        }
        const hm = this.isHolding(Tm);
        for (const Am of fm) {
          if (this.lastFilled = Am, hm && this.pressFilled) {
            this.turn.filled(Am, Tm);
            continue
          }
          const mm = this.turn.arrived(Am, Tm);
          if (null !== mm) {
            this.pressFilled = hm;
            for (const [Tm, fm] of this.foreseen) fm <= mm && this.foreseen.delete(Tm)
          }
        }
        this.juice.filled(mm)
      }
      showNext() {
        var mm;
        const Tm = this.api.getPositionView(this.localPlayerId);
        this.playerCells.splice(0, 1 / 0, ...pf(Tm));
        const fm = this.lastFilled;
        this.nextCell = this.pickNext(null === fm ? [Tm[0], Tm[1] + 1, Tm[2]] : (0, lT.e)(fm), (() => !1)), this.outline.show(null !== (mm = this.aimed) && void 0 !== mm ? mm : this.nextCell)
      }
      pickNext(mm, Tm) {
        const fm = this.api.getPositionView(this.localPlayerId),
          hm = [fm[0], fm[1] + MT.f.gq * MT.f.playerEyeToHeightRatio, fm[2]],
          Am = wf(this.api, this.localPlayerId),
          {
            nextCells: am
          } = this,
          xm = mm => [am[mm], am[mm + 1], am[mm + 2]],
          wm = function(mm, Tm, fm, hm, Am, am) {
            let xm = -1,
              wm = -1,
              Dm = 1 / 0;
            for (let im = 0; im < mm.length; im += Tm) {
              const Tm = (am(im) ? 2 : 0) + (hm(im) ? 1 : 0);
              if (Tm < wm || Am(im)) continue;
              const Rm = (mm[im] + .5 - fm[0]) ** 2 + (mm[im + 1] + .5 - fm[1]) ** 2 + (mm[im + 2] + .5 - fm[2]) ** 2;
              (Tm > wm || Rm < Dm) && (xm = im, wm = Tm, Dm = Rm)
            }
            return xm
          }(am, 4, mm, (mm => 1 === am[mm + 3]), (mm => {
            const hm = xm(mm);
            return uT(hm, fm) || this.foreseen.has(hm.join()) || Tm(hm)
          }), (mm => function(mm, Tm, fm) {
            return (Tm[0] + .5 - mm[0]) ** 2 + (Tm[1] + .5 - mm[1]) ** 2 + (Tm[2] + .5 - mm[2]) ** 2 <= fm ** 2
          }(hm, xm(mm), Am)));
        return -1 === wm ? null : xm(wm)
      }
      afterRender(mm) {
        var Tm;
        this.turn.look(mm);
        const fm = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === fm ? null : fm.position), this.outline.show(null !== (Tm = this.aimed) && void 0 !== Tm ? Tm : this.nextCell)
      }
      isHolding(mm) {
        return null !== this.altMs && mm - this.altMs <= 500
      }
      attemptAltAction(mm) {
        const Tm = performance.now();
        if (this.isHolding(Tm) || (this.pressFilled = !1), this.altMs = Tm, this.pressFilled) return "preventPlacement";
        const fm = this.findAimed(mm);
        if (null !== fm) return this.foreseen.set(fm.join(), Tm), this.lastFilled = fm, this.aimed = null, this.showNext(), this.turn.filled(fm, Tm), this.pressFilled = !0, "preventPlacement";
        null !== this.nextCell && this.turn.tapped(mm, this.nextCell, Tm)
      }
      findAimed(mm) {
        return function(mm, Tm, fm, hm, Am, am, xm) {
          const wm = mm.MTm(Tm),
            Dm = null === wm || null === mm.blockNameToBlockId(wm.name, !0) ? null : wm.name,
            im = mm.getPositionView(Tm),
            {
              origin: Rm,
              direction: pm
            } = mm.getActionRay(),
            Em = BT(hm, {
              from: Rm,
              dir: pm,
              reach: wf(mm, Tm),
              solid: fm
            }, (Tm => {
              const fm = [hm[Tm], hm[Tm + 1], hm[Tm + 2]];
              return !bT(Am[hm[Tm + 3]], mm.getBlockId(...fm)) && !xm.has(fm.join()) && mm.isBlockInLoadedChunk(...fm) && !uT(fm, im)
            }), (mm => null === Dm || Dm === eT(Am[hm[mm + 3]])), (mm => null !== am && hm[mm] === am[0] && hm[mm + 1] === am[1] && hm[mm + 2] === am[2]));
          return -1 === Em ? null : [hm[Em], hm[Em + 1], hm[Em + 2]]
        }(this.api, this.localPlayerId, mm, this.ghostCells, this.blockIds, this.nextCell, this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(mm) {
        const {
          ghostCells: Tm
        } = this, [fm, hm, Am] = NT(this.palette[Tm[mm + 3]]);
        return [Tm[mm], Tm[mm + 1], Tm[mm + 2], fm, hm, Am]
      }
    }

    function pf(mm) {
      let [Tm, fm, hm] = mm;
      const Am = MT.f.dq / 2;
      return [Math.floor(Tm), Math.floor(fm), Math.floor(hm), Math.floor(Tm - Am), Math.floor(Tm + Am), Math.floor(fm + MT.f.gq), Math.floor(hm - Am), Math.floor(hm + Am)]
    }

    function Ef(mm, Tm) {
      return Tm % 4 !== 3
    }

    function of(mm, Tm, fm, hm, Am) {
      if (!mm.isBlockInLoadedChunk(Tm, hm - 6, fm) || !mm.isBlockInLoadedChunk(Tm, hm + 6 + Am, fm) || !mm.canModifyBlockAt(Tm, hm, fm)) return NaN;
      let am = hm - 1;
      if (0 !== mm.getBlockId(Tm, am, fm)) {
        for (; am < hm + 6 && 0 !== mm.getBlockId(Tm, am + 1, fm);) am++;
        return am
      }
      for (; am > hm - 6;)
        if (am--, 0 !== mm.getBlockId(Tm, am, fm)) return am;
      return NaN
    }

    function Of(mm, Tm, fm, hm, Am) {
      let am = 0;
      for (let xm = hm + 1; xm <= hm + Am; xm++) 0 !== mm.getBlockId(Tm, xm, fm) && am++;
      return am
    }

    function Yf(mm) {
      const Tm = new Map;
      for (const xm of mm) {
        var fm;
        if (Number.isNaN(xm)) return null;
        Tm.set(xm, (null !== (fm = Tm.get(xm)) && void 0 !== fm ? fm : 0) + 1)
      }
      let hm = NaN,
        Am = 0;
      for (const [xm, wm] of Tm)(wm > Am || wm === Am && xm < hm) && (hm = xm, Am = wm);
      let am = 0;
      for (const xm of mm) am += Math.abs(xm - hm);
      return am
    }

    function qf(mm, Tm, fm, hm) {
      const {
        eye: Am,
        forward: am,
        tanHalfFovX: xm,
        tanHalfFovY: wm
      } = mm, [Dm, im] = function(mm) {
        let [Tm, fm, hm] = mm;
        const Am = Math.hypot(Tm, hm),
          [am, xm] = [hm / Am, -Tm / Am];
        return [
          [am, 0, xm],
          [fm * xm, hm * am - Tm * xm, -fm * am]
        ]
      }(am), [Rm, pm] = [Tm * xm, fm * wm], Em = am[0] + Rm * Dm[0] + pm * im[0], om = am[1] + pm * im[1], Om = am[2] + Rm * Dm[2] + pm * im[2], Ym = (hm - Am[1]) / om;
      return Ym > 0 && Ym < 1 / 0 ? [Am[0] + Ym * Em, Am[2] + Ym * Om] : null
    }
    const jf = "plotsBlueprintPlacementChanged",
      Vf = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class If {
      constructor(mm, Tm) {
        this.api = mm, this.localPlayerId = Tm, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = mm => {
          var Tm, fm, hm, am;
          const xm = null !== (Tm = null === (fm = this.placing) || void 0 === fm ? void 0 : fm.rotation) && void 0 !== Tm ? Tm : 0,
            {
              size: wm
            } = Mm(mm, xm),
            Dm = this.api.rV(this.localPlayerId),
            [im, Rm] = null !== (hm = null !== (am = function(mm, Tm, fm) {
              const [hm, Am, am] = Tm, [xm, wm, Dm] = [Math.floor(fm[0]), Math.floor(fm[1]), Math.floor(fm[2])], im = 6 + Math.max(hm, am) / 2, [Rm, pm] = [Math.ceil(im + hm / 2), Math.ceil(im + am / 2)], [Em, om] = [xm - Rm, Dm - pm], [Om, Ym] = [2 * Rm + 1, 2 * pm + 1], qm = new Float64Array(Om * Ym), jm = new Uint16Array(Om * Ym);
              for (let Qm = 0; Qm < Om; Qm++)
                for (let Tm = 0; Tm < Ym; Tm++) {
                  const fm = of(mm, Em + Qm, om + Tm, wm, Am);
                  qm[Qm * Ym + Tm] = fm, Number.isNaN(fm) || (jm[Qm * Ym + Tm] = Of(mm, Em + Qm, om + Tm, fm, Am))
                }
              const Vm = [];
              let Im = null,
                Km = 1 / 0;
              for (let Qm = 0; Qm + hm <= Om; Qm++)
                for (let mm = 0; mm + am <= Ym; mm++) {
                  const [Tm, Am] = [Em + Qm, om + mm], wm = Math.hypot(Tm + hm / 2 - fm[0], Am + am / 2 - fm[2]);
                  if (wm > im || xm >= Tm - 2 && xm < Tm + hm + 2 && Dm >= Am - 2 && Dm < Am + am + 2) continue;
                  Vm.length = 0;
                  let Rm = 0;
                  for (let fm = 0; fm < hm; fm++)
                    for (let Tm = 0; Tm < am; Tm++) Vm.push(qm[(Qm + fm) * Ym + mm + Tm]), Rm += jm[(Qm + fm) * Ym + mm + Tm];
                  const pm = Yf(Vm);
                  if (null === pm) continue;
                  const Om = wm + 3 * (pm + Rm);
                  Om < Km && (Km = Om, Im = [Tm, Am])
                }
              return Im
            }(this.api, wm, Dm)) && void 0 !== am ? am : this.cornerOnTarget(wm)) && void 0 !== hm ? hm : [Math.floor(Dm[0]) + 2, Math.floor(Dm[2])];
          this.placing = {
            id: mm,
            rotation: xm,
            corner: [im, this.playerLevel(), Rm],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null
          }, this.update(), this.api.sendCommand(`${Am} preview`)
        }, this.rotate = () => {
          const {
            id: mm,
            rotation: Tm,
            corner: fm
          } = this.placing, Am = hm[(hm.indexOf(Tm) + 1) % hm.length], [am, , xm] = Mm(mm, Tm).size, [wm, , Dm] = Mm(mm, Am).size;
          this.moveTo(fm[0] + Math.floor(am / 2) - Math.floor(wm / 2), fm[2] + Math.floor(xm / 2) - Math.floor(Dm / 2), Am)
        }, this.hoverAt = (mm, Tm) => {
          this.placing.hover = [mm, Tm], this.moveCentreTo(this.camera, mm, Tm)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (mm, Tm) => {
          const fm = this.placing,
            {
              eye: hm,
              forward: Am,
              tanHalfFovX: am,
              tanHalfFovY: xm
            } = this.camera,
            wm = {
              eye: [hm[0], hm[1], hm[2]],
              forward: [Am[0], Am[1], Am[2]],
              tanHalfFovX: am,
              tanHalfFovY: xm
            },
            Dm = fm.corner[1],
            im = qf(wm, mm, Tm, Dm);
          fm.hover = null, fm.drag = im && {
            view: wm,
            ground: im,
            corner: [fm.corner[0], fm.corner[2]],
            level: Dm
          }
        }, this.dragTo = (mm, Tm) => {
          const fm = this.placing.drag,
            hm = fm && qf(fm.view, mm, Tm, fm.level);
          null !== fm && null !== hm && this.moveTo(fm.corner[0] + Math.round(hm[0] - fm.ground[0]), fm.corner[1] + Math.round(hm[1] - fm.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const mm = this.view;
          mm.waiting || (mm.blocked ? this.gp({
            ...mm,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const mm = this.placing,
            {
              id: Tm,
              rotation: fm,
              corner: hm
            } = mm;
          this.api.sendCommand(`${Am} place ${Tm} ${hm.join(" ")} ${fm}`), mm.sent = {
            atMs: performance.now(),
            corner: [...hm],
            rotation: fm,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${Am} preview off`))
        }, this.chunkWatch = new gT(mm), this.meshes = new hf(mm)
      }
      getView() {
        return this.view
      }
      DE() {
        const mm = this.placing;
        null !== mm && (null !== mm.sent && !mm.sent.timedOut && performance.now() - mm.sent.atMs > 3e3 ? (mm.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(mm) || this.chunkWatch.changed()) && this.update())
      }
      afterRender(mm) {
        const Tm = this.placing;
        null !== Tm && (! function(mm, Tm) {
          for (let fm = 0; fm < 3; fm++) Tm.eye[fm] = mm.cameraPosition[fm], Tm.forward[fm] = mm.cameraDirection[fm];
          Tm.tanHalfFovX = mm.tanHalfFovX, Tm.tanHalfFovY = mm.tanHalfFovY
        }(mm, this.camera), null !== Tm.hover && this.moveCentreTo(this.camera, Tm.hover[0], Tm.hover[1]))
      }
      rO(mm) {
        const Tm = this.placing;
        if (null === Tm || null === Tm.sent || "active" !== mm[0]) return;
        const {
          sent: fm
        } = Tm, [, hm, Am, am, xm, wm, Dm] = mm;
        Am && hm === Tm.id && Dm === fm.rotation && am === fm.corner[0] && xm === fm.corner[1] && wm === fm.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(mm) {
        let [Tm, , fm] = mm;
        const hm = this.api.getTargetedBlock();
        if (null === hm) return null;
        const [Am, , am] = hm.position;
        return [Am - Math.floor(Tm / 2), am - Math.floor(fm / 2)]
      }
      playerLevel() {
        var mm;
        const [Tm, fm, hm] = this.api.rV(this.localPlayerId);
        if (null !== (mm = this.api.getLocalPlayerMovement()) && void 0 !== mm && mm.onGround) return Math.ceil(fm - .01);
        const [Am, am, xm] = [Math.floor(Tm), Math.floor(fm), Math.floor(hm)];
        for (let wm = am; wm >= am - 2; wm--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(Am, wm, xm))) return wm + 1;
        return am
      }
      followPlayerLevel(mm) {
        if (Kf(mm)) return !1;
        const Tm = this.playerLevel();
        return Tm !== mm.corner[1] && (mm.corner[1] = Tm, !0)
      }
      moveCentreTo(mm, Tm, fm) {
        const hm = this.placing,
          Am = qf(mm, Tm, fm, hm.corner[1]);
        if (null !== Am) {
          const [mm, , Tm] = Mm(hm.id, hm.rotation).size;
          this.moveTo(Math.round(Am[0] - mm / 2), Math.round(Am[1] - Tm / 2))
        }
      }
      moveTo(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const hm = this.placing;
        if (Kf(hm)) return;
        const [Am, am, xm] = hm.corner;
        if (this.centreOnPlot(Am, xm) && !this.centreOnPlot(mm, Tm, fm))
          if (this.centreOnPlot(mm, xm, fm)) Tm = xm;
          else {
            if (!this.centreOnPlot(Am, Tm, fm)) return;
            mm = Am
          } mm === Am && Tm === xm && fm === hm.rotation || (hm.rotation = fm, hm.corner = [mm, am, Tm], this.update())
      }
      centreOnPlot(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: hm,
          corner: Am
        } = this.placing, [am, , xm] = Mm(hm, fm).size;
        return this.api.canModifyBlockAt(mm + Math.floor(am / 2), Am[1], Tm + Math.floor(xm / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.gp(null)
      }
      update() {
        const {
          id: mm,
          rotation: Tm,
          corner: fm,
          refusals: hm
        } = this.placing, Am = new ff, am = [];
        let xm = !1,
          wm = 0;
        for (const {
            offset: Rm,
            block: pm
          }
          of Mm(mm, Tm).cells) {
          const [mm, Tm, hm] = [fm[0] + Rm[0], fm[1] + Rm[1], fm[2] + Rm[2]];
          am.push(mm, Tm, hm);
          const Dm = !this.api.canModifyBlockAt(mm, Tm, hm),
            im = this.api.getBlockId(mm, Tm, hm),
            Em = !ST(im) && !bT(this.api.blockNameToBlockId(pm), im);
          xm ||= Dm, wm += Em ? 1 : 0, Dm || Em ? Am.add(mm, Tm, hm, Tf, mf) : Am.add(mm, Tm, hm, NT(pm), Vf, sT(pm))
        }
        this.chunkWatch.watch(am), this.meshes.show(Am.toArray());
        const Dm = this.view,
          im = Kf(this.placing);
        (null === Dm || void 0 === Dm ? void 0 : Dm.id) === mm && Dm.blocked === xm && Dm.toClear === wm && Dm.waiting === im && Dm.refusals === hm || this.gp({
          id: mm,
          blocked: xm,
          toClear: wm,
          waiting: im,
          refusals: hm
        })
      }
      gp(mm) {
        this.view = mm, Rm.j.gp(jf, mm, !0)
      }
    }

    function Kf(mm) {
      let {
        sent: Tm
      } = mm;
      return null !== Tm && !Tm.timedOut
    }
    var Qf = fm(4171),
      nf = fm(39275);

    function Jf(mm, Tm, fm) {
      const hm = [255 * mm, 255 * Tm, 255 * fm],
        [Am, am, xm] = hm.map((mm => mm + .4 * (255 - mm)));
      return {
        texture: "square_particle",
        yp: 48,
        minLifeTime: .3 / nf.d,
        maxLifeTime: .55 / nf.d,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * nf.d * nf.d, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...hm, 1],
          maxColor: [Am, am, xm, 1]
        }, {
          timeFraction: 1,
          minColor: [...hm, 0],
          maxColor: [Am, am, xm, 0]
        }],
        blendMode: Qf.g.Standard
      }
    }
    const zf = {
      texture: "glint",
      mipmaps: !1,
      yp: 96,
      minLifeTime: .5 / nf.d,
      maxLifeTime: .9 / nf.d,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * nf.d * nf.d, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: Qf.g.OneOne
    };
    class Zf {
      constructor(mm, Tm) {
        this.api = mm, this.localPlayerId = Tm, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(mm) {
        if (this.api.particlesEnabled())
          for (const [Tm, fm, hm, Am, am, xm] of mm.slice(0, 3)) {
            const mm = `${Am},${am},${xm}`;
            let wm = this.chips.get(mm);
            void 0 === wm && (wm = this.api.createParticles(Jf(Am, am, xm), {
              pos: [Tm + .5, fm + .5, hm + .5]
            }), this.chips.set(mm, wm));
            for (let Tm = 0; Tm < 8; Tm++) this.setPoint(Tm, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            wm.emitPoints([Tm + .5, fm + .5, hm + .5], this.points, 8)
          }
      }
      layerDone(mm) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const Tm = mm.length / 3;
        if (0 === Tm || !this.api.particlesEnabled()) return;
        const fm = Math.min(Tm, 48),
          [hm, Am, am] = [mm[0] + .5, mm[1] + 1, mm[2] + .5];
        let xm = 0;
        for (let wm = 0; wm < fm; wm++) {
          const Dm = 3 * Math.floor(wm * Tm / fm);
          for (let Tm = 0; Tm < 2; Tm++) this.setPoint(xm++, mm[Dm] + Math.random() - hm, mm[Dm + 1] + 1 - Am, mm[Dm + 2] + Math.random() - am, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(zf, {
          pos: [hm, Am, am]
        }), this.sparkles.emitPoints([hm, Am, am], this.points, xm)
      }
      dispose() {
        var mm;
        for (const Tm of this.chips.values()) Tm.stop();
        this.chips.clear(), null === (mm = this.sparkles) || void 0 === mm || mm.stop(), this.sparkles = null
      }
      setPoint(mm, Tm, fm, hm, Am) {
        const am = 4 * mm;
        this.points[am] = Tm, this.points[am + 1] = fm, this.points[am + 2] = hm, this.points[am + 3] = Am
      }
    }
    var kf = fm(1957);
    const bf = "SpecialAction1",
      Sf = "KeyY",
      ef = "KeyX";

    function Nf(mm) {
      let {
        placement: Tm
      } = mm;
      const fm = (0, km.i)(jf, Tm.getView()),
        {
          t: hm
        } = (0, Sm.A)(),
        {
          isTouchScreen: Am
        } = (0, wm.m)(["isTouchScreen"]),
        am = null !== fm,
        xm = am && !fm.blocked && !fm.waiting;
      if ((0, Zm.b)((mm => am && !mm.repeat && !(0, im.isTypingInInput)() && !(0, Dm.n)() && !Am), (mm => {
          const fm = function(mm, Tm, fm) {
            if (mm === ef) return Tm.stop;
            if (mm === Sf) return fm ? Tm.build : Xf;
            return kf.r[bf].includes(mm) ? Tm.rotate : null
          }(mm.code, Tm, xm);
          null !== fm && (mm.stopPropagation(), fm())
        })), !am) return null;
      let Rm = Am ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return fm.blocked ? Rm = "plotsGame:placementOffPlot" : fm.toClear > 0 && (Rm = "plotsGame:placementClear"), (0, Bm.jsx)(wT.e, {
        placement: "bottom",
        children: (0, Bm.jsxs)("div", {
          className: "PlotsPlacementCard",
          children: [(0, Bm.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: hm(Om(fm.id).displayName.translationKey)
          }), (0, Bm.jsx)("div", {
            className: nm()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: fm.refusals > 0
            }),
            children: hm(Rm)
          }, fm.refusals), (0, Bm.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, Bm.jsxs)(cm.e, {
              onClick: Tm.rotate,
              children: [(0, Bm.jsx)(Gf, {
                noaAction: bf
              }), hm("plotsGame:placementRotate")]
            }), (0, Bm.jsxs)(cm.O, {
              onClick: Tm.stop,
              children: [(0, Bm.jsx)(Gf, {
                keyCode: ef
              }), hm("general:cancel")]
            }), (0, Bm.jsxs)(cm.m, {
              disabled: !xm,
              onClick: Tm.build,
              children: [(0, Bm.jsx)(Gf, {
                keyCode: Sf
              }), hm("plotsGame:placementBuild")]
            })]
          })]
        })
      })
    }

    function Gf(mm) {
      return (0, Bm.jsx)(iT.e, {
        className: "PlotsPlacementKey",
        ...mm
      })
    }

    function Xf() {}
    var Pf = fm(4481);
    class Hf {
      constructor(mm) {
        this.placement = mm, this.press = null
      }
      down(mm) {
        if (null !== this.press) return !1;
        const {
          id: Tm,
          mouse: fm,
          x: hm,
          y: Am,
          atMs: am
        } = mm;
        return this.press = {
          id: Tm,
          mouse: fm,
          x: hm,
          y: Am,
          atMs: am,
          moved: !1
        }, fm || this.placement.beginDrag(mm.ndcX, mm.ndcY), !0
      }
      move(mm) {
        const Tm = this.press;
        null !== Tm && Tm.id === mm.id && (Tm.moved ||= Math.hypot(mm.x - Tm.x, mm.y - Tm.y) > 8), mm.mouse ? this.placement.hoverAt(mm.ndcX, mm.ndcY) : (null === Tm || void 0 === Tm ? void 0 : Tm.id) === mm.id && this.placement.dragTo(mm.ndcX, mm.ndcY)
      }
      up(mm) {
        const Tm = this.press;
        (null === Tm || void 0 === Tm ? void 0 : Tm.id) === mm.id && (this.move(mm), this.end(), !Tm.moved && (Tm.mouse || mm.atMs - Tm.atMs <= 250) && this.placement.tap())
      }
      cancel(mm) {
        var Tm;
        (null === (Tm = this.press) || void 0 === Tm ? void 0 : Tm.id) === mm && this.end()
      }
      leave(mm) {
        let {
          id: Tm,
          mouse: fm
        } = mm;
        fm && this.placement.endHover(), this.cancel(Tm)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }

    function yf(mm) {
      let {
        placement: Tm
      } = mm;
      return null === (0, km.i)(jf, Tm.getView()) ? null : (0, Bm.jsx)(Cf, {
        placement: Tm
      })
    }

    function Cf(mm) {
      let {
        placement: Tm
      } = mm;
      (0, Pf.d)(!0, !0, "PlotsPlacementLayer");
      const fm = (0, am.useMemo)((() => new Hf(Tm)), [Tm]);
      return (0, Bm.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: mm => {
          "mouse" === mm.pointerType && 0 !== mm.button || !fm.down(rf(mm)) || mm.currentTarget.setPointerCapture(mm.pointerId)
        },
        onPointerMove: mm => {
          fm.move(rf(mm))
        },
        onPointerUp: mm => {
          fm.up(rf(mm))
        },
        onPointerCancel: mm => {
          fm.cancel(mm.pointerId)
        },
        onLostPointerCapture: mm => {
          fm.cancel(mm.pointerId)
        },
        onPointerLeave: mm => {
          fm.leave(rf(mm))
        },
        "aria-hidden": !0
      })
    }

    function rf(mm) {
      const {
        left: Tm,
        top: fm,
        width: hm,
        height: Am
      } = mm.currentTarget.getBoundingClientRect();
      return {
        id: mm.pointerId,
        mouse: "mouse" === mm.pointerType,
        x: mm.clientX,
        y: mm.clientY,
        ndcX: (mm.clientX - Tm) / hm * 2 - 1,
        ndcY: 1 - (mm.clientY - fm) / Am * 2,
        atMs: mm.timeStamp
      }
    }
    var sf = fm(2332),
      lf = fm(36777),
      Mf = fm(1946),
      uf = fm(1268);
    const Bf = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function Lf(mm) {
      let {
        hud: Tm
      } = mm;
      const fm = (0, km.i)(pT, Tm.getPlot()),
        [hm, Am] = (0, am.useState)(null),
        xm = (0, lf.h)(hm);
      if ("none" === fm[0]) return null;
      const [, wm, Dm, im, Rm, pm] = fm;
      return (0, Bm.jsx)("div", {
        className: nm()("PlotsPlotBannerContainer", {
          Below: xm
        }),
        children: (0, Bm.jsx)(vf, {
          plotX: wm,
          plotZ: Dm,
          ownerName: im,
          ownerId: Rm,
          relation: pm,
          plaqueRef: Am
        }, `${wm},${Dm}`)
      })
    }

    function vf(mm) {
      var Tm, fm;
      let {
        plotX: hm,
        plotZ: Am,
        ownerName: am,
        ownerId: xm,
        relation: wm,
        plaqueRef: Dm
      } = mm;
      const {
        t: im
      } = (0, Sm.A)(), Rm = (0, Mf.k)("hiddenPlayerNames"), pm = (0, Mf.k)("players"), Em = null === xm ? null : null !== (Tm = null === (fm = pm.byId[xm]) || void 0 === fm ? void 0 : fm.cosmetics) && void 0 !== Tm ? Tm : null, om = im("plotsGame:plotBannerCoords", {
        x: hm,
        z: Am
      }), Om = "own" === wm || null !== am;
      return (0, Bm.jsxs)("div", {
        ref: Dm,
        className: nm()("PlotsPlotBanner", {
          Own: "own" === wm,
          Shared: "shared" === wm
        }),
        role: "status",
        children: [(0, Bm.jsxs)("span", {
          className: nm()("PlotsPlotBannerSeal", {
            Face: null !== Em
          }),
          children: [null !== Em && (0, Bm.jsx)(sf.d, {
            cosmetics: Em
          }), null === Em && (0, Bm.jsx)(Jm.c, {
            name: Bf[wm]
          })]
        }), (0, Bm.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, Bm.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === wm && im("plotsGame:plotBannerYours"), "own" !== wm && null !== am && im("plotsGame:plotBannerOwner", {
              name: (0, uf.f)(am, Rm)
            }), !Om && om]
          }), Om && (0, Bm.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [om, "shared" === wm && (0, Bm.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: im("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }

    function tf(mm) {
      let {
        progress: Tm,
        goal: fm
      } = mm;
      const hm = Math.min(Tm, fm);
      return (0, Bm.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, Bm.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": fm,
          "aria-valuenow": hm,
          children: (0, Bm.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${hm/fm})`
            }
          })
        }), (0, Bm.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [hm, "/", fm]
        })]
      })
    }

    function Uf(mm) {
      return {
        translationKey: `plotsGame:${mm}`,
        actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
      }
    }
    const df = {
      house: {
        icon: "house",
        titleKey: "plotsGame:starterLotHouseTitle",
        desktop: Uf("starterLotHouseHint", ["alt-fire"]),
        touch: Uf("starterLotHouseHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotHousePlain"
      },
      garden: {
        icon: "sparkle",
        titleKey: "plotsGame:starterLotGarden",
        desktop: Uf("starterLotGardenHint", ["alt-fire"]),
        touch: Uf("starterLotGardenHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotGardenPlain"
      },
      boulder: {
        icon: "hammer",
        titleKey: "plotsGame:starterLotBoulder",
        desktop: Uf("starterLotBreakHint", ["primary-fire"]),
        touch: Uf("starterLotBreakHintTouch"),
        plainKey: "plotsGame:starterLotBreakPlain"
      },
      fly: {
        icon: "angles-up",
        titleKey: "plotsGame:starterLotFly",
        desktop: Uf("starterLotFlyHint", ["jump"]),
        touch: Uf("starterLotFlyHintTouch"),
        plainKey: "plotsGame:starterLotFlyPlain"
      },
      backpack: {
        icon: "backpack",
        titleKey: "plotsGame:starterLotBackpack",
        desktop: Uf("starterLotBackpackHint", ["OpenInventory"]),
        touch: Uf("starterLotBackpackHintTouch"),
        plainKey: "plotsGame:starterLotBackpackPlain"
      },
      neighbour: {
        icon: "person",
        titleKey: "plotsGame:starterLotNeighbour",
        desktop: Uf("starterLotNeighbourHint", ["forward", "left", "backward", "right"]),
        touch: Uf("starterLotNeighbourHintTouch"),
        plainKey: "plotsGame:starterLotNeighbourPlain"
      }
    };

    function gf(mm, Tm, fm) {
      const {
        translationKey: hm,
        actions: Am
      } = fm ? Tm.touch : Tm.desktop;
      if (0 === Am.length) return mm(hm);
      const am = [];
      for (const xm of Am) {
        const hm = (0, kf.o)(xm, fm),
          Am = kf.r[xm][0];
        if (null === hm && void 0 === Am) return mm(Tm.plainKey);
        am.push(null === hm ? (0, kf.k)(Am) : mm(hm.translationKey))
      }
      return mm(hm, {
        key: am.join("")
      })
    }

    function Wf(mm) {
      let {
        hud: Tm
      } = mm;
      const fm = (0, km.i)(RT, Tm.getStep()),
        {
          t: hm
        } = (0, Sm.A)();
      return (0, Bm.jsxs)(wT.e, {
        placement: "bottom",
        children: ["step" === fm[0] && (0, Bm.jsx)(Ff, {
          step: fm[1],
          progress: fm[2],
          goal: fm[3]
        }, fm[1]), "celebrate" === fm[0] && (0, Bm.jsx)(mh, {
          className: nm()("Celebrate", {
            Gold: "house" === fm[1]
          }),
          icon: "star",
          title: hm("house" === fm[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
        }, `celebrate-${fm[1]}`)]
      })
    }

    function Ff(mm) {
      let {
        step: Tm,
        progress: fm,
        goal: hm
      } = mm;
      const {
        isTouchScreen: Am
      } = (0, wm.m)(["isTouchScreen"]), {
        t: am
      } = (0, Sm.A)(), xm = df[Tm];
      return (0, Bm.jsxs)(mh, {
        icon: xm.icon,
        title: am(xm.titleKey),
        children: [(0, Bm.jsx)("div", {
          className: "PlotsStepCardHint SmallTextLight",
          children: gf(am, xm, Am)
        }), hm > 1 && (0, Bm.jsx)(tf, {
          progress: fm,
          goal: hm
        }), "backpack" === Tm && Am && (0, Bm.jsx)(Th, {})]
      })
    }

    function mh(mm) {
      let {
        className: Tm,
        icon: fm,
        title: hm,
        children: Am
      } = mm;
      return (0, Bm.jsxs)("div", {
        className: nm()("PlotsStepCard", Tm),
        role: "status",
        children: [(0, Bm.jsx)("span", {
          className: "PlotsStepCardIcon",
          children: (0, Bm.jsx)(Jm.c, {
            name: fm
          })
        }), (0, Bm.jsxs)("div", {
          className: "PlotsStepCardBody",
          children: [(0, Bm.jsx)("div", {
            className: "PlotsStepCardTitle SmallTextBold",
            children: hm
          }), Am]
        })]
      })
    }

    function Th() {
      return (0, am.useEffect)((() => (wm.c.set({
        backpackPointerRequested: !0
      }), () => {
        wm.c.set({
          backpackPointerRequested: !1
        })
      })), []), null
    }
    const fh = function(mm, Tm, fm, hm) {
      let {
        localPlayerId: Am
      } = hm;
      const wm = new ET;
      let Dm = null,
        im = null,
        Rm = null,
        pm = null,
        Em = null;
      const om = [];
      return {
        onCreate: mm => {
          Dm = new Zf(mm, Am), im = new Rf(mm, Am, Dm), Rm = new Rf(mm, Am, Dm), pm = new If(mm, Am), Em = new Km(mm, pm), om.push((0, xm.w)((0, am.createElement)(am.Fragment, null, (0, am.createElement)(Lf, {
            hud: wm
          }), (0, am.createElement)(Wf, {
            hud: wm
          }), (0, am.createElement)(OT, {
            hud: wm,
            journal: Em
          }), (0, am.createElement)(yf, {
            placement: pm
          }), (0, am.createElement)(Nf, {
            placement: pm
          })), {
            content: (0, am.createElement)(aT, {
              journal: Em
            })
          }))
        },
        DE: () => {
          im.DE(), Rm.DE(), pm.DE(), Em.DE()
        },
        onPlayerAttemptAltAction: (mm, Tm, fm, hm, Am, am) => {
          var xm;
          if (null !== am) return;
          const wm = void 0 === Tm ? null : [Tm, fm, hm];
          return null !== (xm = im.attemptAltAction(wm)) && void 0 !== xm ? xm : Rm.attemptAltAction(wm)
        },
        onPlayerClickUp: () => {
          im.endPress(), Rm.endPress()
        },
        onAfterRender: (mm, Tm) => {
          pm.afterRender(Tm), im.afterRender(Tm), Rm.afterRender(Tm)
        },
        onClose: () => {
          for (const mm of om) mm();
          Dm.dispose(), im.dispose(), Rm.dispose(), pm.dispose(), Dm = null, im = null, Rm = null, pm = null, Em = null
        },
        onReceivedMessageFromServer: (mm, Tm) => {
          if ("plotsStarterLot" === mm) wm.receiveStep(Tm);
          else if ("plotsPlot" === mm) wm.receivePlot(Tm);
          else if ("plotsStarterHouse" === mm) im.rO(Tm);
          else if ("plotsBlueprint" === mm) {
            const mm = Tm;
            Rm.rO(mm), pm.rO(mm)
          } else "plotsJournal" === mm ? Em.rO(Tm) : "plotsJournalOpen" === mm ? Em.openFromServer() : "plotsPreviewEnd" === mm && pm.endFromServer()
        }
      }
    }
  },
  39275: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm,
      g: () => am
    });
    const hm = 1 / .6,
      Am = {
        kind: "smokePuff"
      };
    class am {
      constructor(mm, Tm, fm) {
        this.style = mm, this.yp = Tm, this.half = fm, this.particles = null, this.lastFrame = -1
      }
      emit(mm, Tm, fm) {
        let am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return fm !== this.lastFrame && (this.lastFrame = fm, this.particles || (this.particles = mm.createParticles(function(mm, Tm) {
          const [
            [fm, am, xm],
            [wm, Dm, im]
          ] = mm.colours;
          return {
            texture: mm.soft ? Am : "square_particle",
            yp: Tm,
            minLifeTime: mm.life[0] / hm,
            maxLifeTime: mm.life[1] / hm,
            minEmitPower: mm.power[0] * hm,
            maxEmitPower: mm.power[1] * hm,
            minSize: mm.size[0],
            maxSize: mm.size[1],
            emitRate: 0,
            gravity: [0, mm.lift * hm * hm, 0],
            dir1: [-mm.spread, 1, -mm.spread],
            dir2: [mm.spread, 1, mm.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [fm, am, xm, mm.alpha],
              maxColor: [wm, Dm, im, mm.alpha]
            }, {
              timeFraction: 1,
              minColor: [fm, am, xm, 0],
              maxColor: [wm, Dm, im, 0]
            }],
            blendMode: mm.blendMode
          }
        }(this.style, this.yp), {
          pos: Tm,
          half: this.half
        })), this.particles.moveTo(Tm, this.half), this.particles.emit(am), !0)
      }
      dispose() {
        var mm;
        null === (mm = this.particles) || void 0 === mm || mm.stop(), this.particles = null
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);