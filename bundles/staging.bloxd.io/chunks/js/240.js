export const id = 240;
export const ids = [240];
export const modules = {
  39568: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => Jp
    });
    const pd = [0, 90, 180, 270],
      Nd = "plotsblueprint";
    var Wd = kd(56),
      Pd = kd(36779),
      Zd = kd(22),
      gd = kd(1670),
      Cd = kd(1753),
      Kd = kd(29);
    const od = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      ld = {
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
      Qd = ["small", "medium", "large"].flatMap((dd => od.flat().filter((Jd => ld[Jd].tier === dd))));

    function Ld(dd) {
      return ld[dd]
    }
    const Od = new Map(od.flatMap((dd => dd.slice(1).map(((Jd, kd) => [Jd, dd[kd]])))));

    function ed(dd) {
      var Jd;
      return null !== (Jd = Od.get(dd)) && void 0 !== Jd ? Jd : null
    }
    const Rd = {
      farm_hut: "plotsGame:journalNoteFarmHut",
      rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
      castle_tower: "plotsGame:journalNoteCastleTower",
      farm_house: "plotsGame:journalNoteFarmHouse",
      farm_barn: "plotsGame:journalNoteFarmBarn"
    };

    function Id(dd, Jd) {
      const kd = new Set(dd),
        pd = function(dd) {
          const Jd = new Set(dd);
          return new Set(Qd.filter((dd => {
            const kd = ed(dd);
            return null === kd || Jd.has(kd)
          })))
        }(kd);
      return Qd.map((dd => {
        const Nd = dd === Jd;
        return kd.has(dd) ? {
          id: dd,
          active: Nd,
          state: "completed",
          unlockedBy: null
        } : pd.has(dd) ? {
          id: dd,
          active: Nd,
          state: "open",
          unlockedBy: null
        } : {
          id: dd,
          active: Nd,
          state: "locked",
          unlockedBy: ed(dd)
        }
      }))
    }
    const Gd = "plotsJournalChanged";
    class vd {
      constructor(dd, Jd) {
        this.api = dd, this.placement = Jd, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.TQ("journal_opened")
        }, this.build = dd => {
          this.TQ("placement_started"), this.placement.start(dd), (0, Pd.g)()
        }, this.putAway = () => {
          this.api.sendCommand(`${Nd} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      ZL(dd) {
        let [, Jd, kd] = dd;
        this.pages = Id(Jd, kd), Kd.j.nO(Gd, this.pages, !0)
      }
      openFromServer() {
        this.openRequested = !0, this.Do()
      }
      Do() {
        this.openRequested && !Zd.d.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, gd.n)() || (0, Cd.isTypingInInput)() || null !== this.placement.getView() || (0, Pd.p)())
      }
      TQ(dd) {
        this.reported.has(dd) || (this.reported.add(dd), this.api.sendCommand(`${Nd} report ${dd}`))
      }
    }
    var xd = kd(1044),
      qd = kd.n(xd),
      Bd = kd(1059),
      sd = kd(1461),
      ad = kd(4389),
      Md = kd(3249),
      Fd = kd(1459),
      Yd = kd(1131),
      md = kd(1211),
      bd = kd(9331);
    const Sd = [0, 90, 180, 270],
      jd = /^(meta\|rot\d)\|([lrud]+)$/,
      Xd = "nesw",
      fd = /^meta\|([nesw]*)\|?(Stacked)?$/,
      nd = function(dd) {
        const Jd = new WeakMap;
        return (kd, pd) => {
          let Nd = Jd.get(kd);
          return void 0 === Nd && (Nd = dd(kd, pd), Jd.set(kd, Nd)), Nd
        }
      }((dd => new Ud(dd)));
    class Ud {
      constructor(dd) {
        this.blockMetadata = dd, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const Jd = new Set(Object.keys(dd).map((Jd => dd[Jd].id)));
        Jd.add(0), this.maxBlockId = Math.max(...Jd)
      }
      static
      for (dd) {
        return nd(dd)
      }
      getBlockIdMapping(dd, Jd) {
        const kd = this.getBlockIdMappingKey(dd, Jd);
        let pd = this.blockIdMappings.get(kd);
        return void 0 === pd && Sd.includes(dd) && (pd = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, dd, Jd), this.blockIdMappings.set(kd, pd)), pd
      }
      turnBlockId(dd, Jd, kd) {
        return this.mapBlockId(this.blockMetadata[dd], Jd, this.getRotationMapping(Jd, kd), kd)
      }
      getBlockIdMappingKey(dd, Jd) {
        return `r${dd}|m${Number(Jd)}`
      }
      createBlockIdMapping(dd, Jd, kd, pd) {
        const Nd = new Uint16Array(Jd + 1),
          Wd = this.getRotationMapping(kd, pd);
        for (const Pd in dd) {
          const Jd = dd[Pd];
          Nd[Jd.id] = this.mapBlockId(Jd, kd, Wd, pd)
        }
        return Nd
      }
      getRotationMapping(dd, Jd) {
        const kd = Math.round(dd / 90),
          pd = new Uint8Array(4);
        for (let Nd = 0; Nd < 4; Nd++) pd[Nd] = (4 + Nd - kd) % 4;
        if (Jd) {
          let dd = pd[0];
          pd[0] = pd[1], pd[1] = dd, dd = pd[2], pd[2] = pd[3], pd[3] = dd
        }
        return pd
      }
      mapBlockId(dd, Jd, kd, pd) {
        var Nd;
        const {
          blockMetadata: Wd
        } = this, Pd = Math.round(Jd / 90), {
          id: Zd,
          meta: gd
        } = dd, {
          rot: Cd,
          rootName: Kd,
          metaStr: od
        } = gd;
        let ld;
        const [, Qd, Ld] = null !== (Nd = fd.exec(od)) && void 0 !== Nd ? Nd : [];
        if (void 0 !== Qd) {
          var Od, ed;
          ld = null !== (Od = null === (ed = Wd[`${Kd}|meta|${[Xd.split("").filter(((dd,Jd)=>Qd.split("").some((dd=>{const kd=Xd.indexOf(dd);return((pd?3-kd:kd)+Pd)%4===Jd})))).join(""),Ld].filter(Boolean).join("|")}`]) || void 0 === ed ? void 0 : ed.id) && void 0 !== Od ? Od : Zd
        } else if (null === Cd) ld = Zd;
        else {
          var Rd, Id;
          const dd = kd[Cd - 1] + 1;
          let Jd = od.replace(`rot${Cd}`, `rot${dd}`);
          pd && gd.stairsCorner && (Jd = Jd.replace(/(Left|Right)$/, (dd => "Left" === dd ? "Right" : "Left"))), pd && "Chest" === Kd && (Jd = Jd.replace(/\|(left|right)$/, ((dd, Jd) => "left" === Jd ? "|right" : "|left")));
          const Nd = jd.exec(Jd);
          if (pd && null !== Nd) {
            const dd = "lrud".split("").filter((dd => Nd[2].includes("l" === dd ? "r" : "r" === dd ? "l" : dd)));
            Jd = `${Nd[1]}|${dd.join("")}`
          }
          const Pd = `${Kd}|${Jd}`;
          if (ld = null !== (Rd = null === (Id = Wd[Pd]) || void 0 === Id ? void 0 : Id.id) && void 0 !== Rd ? Rd : null, null === ld) {
            const dd = Wd[Kd];
            ld = dd.rootMetaDesc === Pd ? dd.id : Zd
          }
        }
        return ld
      }
    }

    function yd(dd, Jd, kd) {
      let {
        xRotationMappedOrigin: pd,
        shouldSwapXZ: Nd
      } = kd;
      const Wd = Nd ? Jd : dd;
      return null === pd ? Wd : pd - Wd
    }

    function Dd(dd, Jd, kd) {
      let {
        zRotationMappedOrigin: pd,
        shouldSwapXZ: Nd
      } = kd;
      const Wd = Nd ? dd : Jd;
      return null === pd ? Wd : pd - Wd
    }
    const Td = {
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
      Ed = new Map;

    function cd(dd, Jd) {
      const kd = `${dd}|${Jd}`;
      let pd = Ed.get(kd);
      if (void 0 === pd) {
        const {
          size: Nd,
          palette: Wd,
          layers: Pd
        } = Td[dd], Zd = 90 === Jd || 270 === Jd, [gd, Cd] = Zd ? [Nd[2], Nd[0]] : [Nd[0], Nd[2]], Kd = function(dd, Jd, kd) {
          let pd = null,
            Nd = null,
            Wd = !1;
          switch (dd) {
            case 0:
              break;
            case 90:
              pd = Jd - 1, Wd = !0;
              break;
            case 180:
              pd = Jd - 1, Nd = kd - 1;
              break;
            case 270:
              Nd = kd - 1, Wd = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${dd}`)
          }
          return {
            xRotationMappedOrigin: pd,
            zRotationMappedOrigin: Nd,
            shouldSwapXZ: Wd
          }
        }(Jd, gd, Cd), od = Ud.for(bd.g), ld = Wd.map((dd => (0, bd.e)(od.turnBlockId((0, bd.j)(dd), Jd, !1)))), Qd = [];
        Pd.forEach(((dd, Jd) => {
          dd.split(" ").forEach(((dd, kd) => {
            for (let pd = 0; pd < dd.length; pd++)
              if ("." !== dd[pd]) {
                const Nd = [yd(pd, kd, Kd), Jd, Dd(pd, kd, Kd)];
                Qd.push({
                  offset: Nd,
                  block: ld[dd.charCodeAt(pd) - "a".charCodeAt(0)]
                })
              }
          }))
        })), pd = {
          size: [gd, Nd[1], Cd],
          cells: Qd
        }, Ed.set(kd, pd)
      }
      return pd
    }
    const hd = {
      farm_hut: kd.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
      farm_house: kd.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
      farm_barn: kd.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
      rusticHome_tent: kd.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
      rusticHome_cabin: kd.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
      rusticHome_house: kd.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
      market_stand: kd.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
      market_stall: kd.p + "static/media/market_stall.9a562807f9dff591618a.webp",
      market_shop: kd.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
      castle_wall: kd.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
      castle_gate: kd.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
      castle_tower: kd.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
    };
    var rd = kd(1103);
    const ud = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function td(dd) {
      let {
        page: Jd,
        building: kd,
        onBuild: pd,
        onPutAway: Nd
      } = dd;
      const {
        t: Wd
      } = (0, md.B)(), {
        displayName: Pd,
        tier: Zd
      } = Ld(Jd.id), gd = cd(Jd.id, 0).cells.length, Cd = Rd[Jd.id], Kd = "locked" === Jd.state, od = kd ? sd.d : sd.j;
      return (0, rd.jsxs)("article", {
        className: qd()("PlotsJournalPage", {
          Locked: Kd
        }),
        children: [(0, rd.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: Wd(Pd.translationKey)
        }), (0, rd.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [Wd(ud[Zd]), " \xb7 ", Wd("plotsGame:journalBlocks", {
            blocks: String(gd)
          })]
        }), (0, rd.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [Qd.map((dd => (0, rd.jsx)("img", {
            className: qd()({
              Shown: dd === Jd.id
            }),
            src: hd[dd],
            alt: "",
            draggable: !1
          }, dd))), "completed" === Jd.state && (0, rd.jsx)("span", {
            className: "PlotsJournalStamp",
            children: Wd("plotsGame:journalBuilt")
          }), Kd && (0, rd.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, rd.jsx)(Bd.e, {
              name: "lock"
            })
          })]
        }), void 0 !== Cd && "completed" !== Jd.state && (0, rd.jsx)("p", {
          className: "PlotsJournalNote",
          children: Wd(Cd)
        }), (0, rd.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === Jd.state && (0, rd.jsx)("p", {
            className: "PlotsJournalHint",
            children: Wd("plotsGame:journalLocked", {
              name: Wd(Ld(Jd.unlockedBy).displayName.translationKey)
            })
          }), Jd.active && (0, rd.jsxs)(rd.Fragment, {
            children: [(0, rd.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: Wd("plotsGame:journalBuilding")
            }), (0, rd.jsx)(sd.f, {
              onClick: Nd,
              children: Wd("plotsGame:journalPutAway")
            })]
          }), !Kd && !Jd.active && (0, rd.jsx)(od, {
            onClick: () => {
              pd(Jd.id)
            },
            children: Wd("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function Vd(dd) {
      let {
        className: Jd,
        page: kd,
        hidden: pd,
        building: Nd,
        journal: Wd
      } = dd;
      return (0, rd.jsxs)("div", {
        ref: dd => {
          null !== dd && (dd.inert = pd)
        },
        className: qd()("PlotsJournalSide", Jd),
        children: [void 0 !== kd && (0, rd.jsx)(td, {
          page: kd,
          building: Nd,
          onBuild: Wd.build,
          onPutAway: Wd.putAway
        }), void 0 === kd && (0, rd.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var zd = kd(313),
      Hd = kd(1901);

    function wd(dd) {
      return Math.cos((0, Hd.p)(dd))
    }

    function Ad(dd) {
      return (0, Hd.H)(Math.acos(zd.b.clamp(dd, -1, 1)))
    }

    function dJ(dd, Jd, kd, pd, Nd) {
      const Wd = Math.abs(Jd - dd),
        Pd = (0, Hd.H)(Nd / (kd * Math.abs(Math.sin((0, Hd.p)(dd))))),
        Zd = 450 * Math.min(1, Wd / pd),
        gd = Pd > 0 ? 3 * Wd / Pd : 1 / 0;
      return Math.round(Math.max(120, Math.min(Zd, gd)))
    }
    class JJ {
      constructor() {
        this.samples = []
      }
      add(dd, Jd) {
        for (this.samples.push({
            x: dd,
            at: Jd
          }); Jd - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const dd = this.samples[0],
          Jd = this.samples[this.samples.length - 1];
        return Jd.at > dd.at ? (Jd.x - dd.x) / (Jd.at - dd.at) : 0
      }
    }

    function kJ(dd, Jd) {
      return dd > Jd && dd >= 600
    }

    function pJ(dd) {
      return Ad(new DOMMatrixReadOnly(getComputedStyle(dd).transform).m11)
    }

    function NJ(dd, Jd) {
      dd.style.transform = `rotateY(${-Jd}deg)`, dd.classList.add("Turning")
    }

    function WJ(dd) {
      let {
        journal: Jd
      } = dd;
      const {
        t: kd
      } = (0, md.B)(), pd = (0, Fd.i)(Gd, Jd.getPages()), Nd = (0, Yd.k)(kJ), [Zd, gd] = (0, Wd.useState)((() => function(dd) {
        const Jd = dd.findIndex((dd => dd.active));
        return -1 !== Jd ? Jd : Math.max(0, dd.findIndex((dd => "open" === dd.state)))
      }(pd))), Kd = (0, Wd.useRef)(null), od = (0, Wd.useRef)(null), ld = (0, Wd.useRef)({
        Forward: null,
        Back: null
      }), Qd = Nd ? 2 : 1, Ld = Nd ? 180 : 90, Od = Zd - Zd % Qd, ed = Od > 0, Rd = Od + Qd < pd.length, Id = (0, Wd.useCallback)((() => {
        const dd = od.current;
        return null === dd ? Od : (od.current = null, dd.animation.cancel(), (Jd = ld.current[dd.direction]).style.transform = "", Jd.classList.remove("Turning"), null === dd.next ? Od : (gd(dd.next), dd.next));
        var Jd
      }), [Od]), vd = (0, Wd.useCallback)(((dd, Jd, kd, pd) => {
        const Nd = ld.current[dd],
          Wd = pJ(Nd),
          Pd = Jd === ("Forward" === dd) ? Ld : 0;
        NJ(Nd, Pd);
        const Zd = Nd.animate([{
          transform: `rotateY(${-Wd}deg)`
        }, {
          transform: `rotateY(${-Pd}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : dJ(Wd, Pd, Nd.offsetWidth, Ld, Pd > Wd ? -kd : kd),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        od.current = {
          direction: dd,
          animation: Zd,
          next: Jd ? pd + ("Forward" === dd ? Qd : -Qd) : null
        }, Zd.onfinish = () => {
          var dd;
          (null === (dd = od.current) || void 0 === dd ? void 0 : dd.animation) === Zd && Id()
        }
      }), [Qd, Ld, Id]), xd = (0, Wd.useCallback)((dd => {
        if (null !== Kd.current) return;
        const Jd = Id();
        ("Forward" === dd ? Jd + Qd < pd.length : Jd > 0) && vd(dd, !0, 0, Jd)
      }), [Id, vd, Qd, pd.length]);
      (0, Wd.useEffect)((() => {
        Jd.onOpened()
      }), [Jd]), (0, Wd.useEffect)((() => () => {
        var dd;
        null === (dd = od.current) || void 0 === dd || dd.animation.cancel()
      }), []), (0, Wd.useEffect)((() => {
        const dd = dd => {
          var Jd;
          dd.pointerId !== (null === (Jd = Kd.current) || void 0 === Jd ? void 0 : Jd.pointerId) || Kd.current.following || (Kd.current = null)
        };
        return window.addEventListener("pointerup", dd), () => {
          window.removeEventListener("pointerup", dd)
        }
      }), []), (0, Md.d)((dd => ("ArrowLeft" === dd.code || "ArrowRight" === dd.code) && !(0, Cd.isTypingInInput)()), (dd => {
        dd.stopPropagation(), xd("ArrowLeft" === dd.code ? "Back" : "Forward")
      }));
      const Bd = (dd, Jd, kd) => {
          const pd = function(dd, Jd, kd, pd) {
            return (dd < 0 ? kd : pd) ? zd.b.clampAbs(dd, Jd) : Math.sign(dd) * Jd * (1 - 1 / (.55 * Math.abs(dd) / Jd + 1))
          }(dd.base + kd, Qd * dd.width, Rd, ed);
          return "Forward" === Jd ? Math.min(pd, 0) : Math.max(pd, 0)
        },
        bd = (dd, Jd) => {
          const kd = Kd.current;
          if (Kd.current = null, null === kd.direction) return;
          kd.speed.add(dd, Jd);
          const pd = kd.speed.get(),
            Nd = Bd(kd, kd.direction, dd - kd.x);
          vd(kd.direction, null !== function(dd, Jd, kd, pd, Nd) {
            if (Math.abs(Jd) >= .3 ? Math.sign(Jd) !== Math.sign(dd) : Math.abs(dd) < .5 * kd) return null;
            const Wd = dd < 0 ? "Forward" : "Back";
            return ("Forward" === Wd ? pd : Nd) ? Wd : null
          }(Nd, pd, Qd * kd.width, Rd, ed), pd, Od)
        },
        Sd = pd.some((dd => dd.active)),
        jd = (dd, kd, Nd) => (0, rd.jsx)(Vd, {
          className: dd,
          page: kd >= 0 && kd < pd.length ? pd[kd] : void 0,
          hidden: Nd,
          building: Sd,
          journal: Jd
        });
      return (0, rd.jsx)(ad.e, {
        close: Pd.j,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, rd.jsxs)("section", {
          className: qd()("PlotsJournal", {
            Spread: Nd
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": kd("plotsGame:journalTitle"),
          children: [(0, rd.jsx)(sd.i, {
            className: "PlotsJournalClose",
            onClick: Pd.j
          }), (0, rd.jsx)(PJ, {
            direction: "Back",
            disabled: !ed,
            onTurn: xd
          }), (0, rd.jsx)("div", {
            className: "PlotsJournalBookPages",
            onPointerDown: dd => {
              var Jd;
              if (!dd.isPrimary || 0 !== dd.button || null !== od.current && null !== dd.target.closest("button")) return;
              const kd = new JJ;
              kd.add(dd.clientX, dd.timeStamp);
              const pd = ld.current.Forward.offsetWidth,
                Nd = od.current;
              od.current = null;
              let Wd = 0;
              if (null !== Nd) {
                const Jd = ld.current[Nd.direction],
                  kd = pJ(Jd);
                Nd.animation.cancel(), NJ(Jd, kd), Wd = function(dd, Jd, kd, pd) {
                  return (dd < 0 ? kd : pd) ? dd : Math.sign(dd) * Jd * (1 / (1 - Math.min(Math.abs(dd) / Jd, .99)) - 1) / .55
                }(function(dd, Jd, kd, pd) {
                  return kd * (wd(Jd) - wd("Forward" === dd ? 0 : pd))
                }(Nd.direction, kd, pd, Ld), Qd * pd, Rd, ed), dd.currentTarget.setPointerCapture(dd.pointerId)
              }
              Kd.current = {
                pointerId: dd.pointerId,
                x: dd.clientX,
                y: dd.clientY,
                base: Wd,
                width: pd,
                following: null !== Nd,
                direction: null !== (Jd = null === Nd || void 0 === Nd ? void 0 : Nd.direction) && void 0 !== Jd ? Jd : null,
                speed: kd
              }
            },
            onPointerMove: dd => {
              const Jd = Kd.current;
              if (null === Jd || dd.pointerId !== Jd.pointerId) return;
              if (0 === dd.buttons) return void bd(dd.clientX, dd.timeStamp);
              const kd = dd.clientX - Jd.x;
              !Jd.following && function(dd, Jd) {
                return Math.abs(dd) > 8 && Math.abs(dd) > Math.abs(Jd)
              }(kd, dd.clientY - Jd.y) && (Jd.following = !0, Jd.direction = kd < 0 ? "Forward" : "Back", dd.currentTarget.setPointerCapture(dd.pointerId)), null !== Jd.direction && (Jd.speed.add(dd.clientX, dd.timeStamp), NJ(ld.current[Jd.direction], function(dd, Jd, kd, pd) {
                const Nd = kd * wd("Forward" === dd ? 0 : pd) + Jd;
                return zd.b.clamp(Ad(Nd / kd), 0, pd)
              }(Jd.direction, Bd(Jd, Jd.direction, kd), Jd.width, Ld)))
            },
            onPointerUp: dd => {
              var Jd;
              dd.pointerId === (null === (Jd = Kd.current) || void 0 === Jd ? void 0 : Jd.pointerId) && bd(dd.clientX, dd.timeStamp)
            },
            onPointerCancel: dd => {
              const Jd = Kd.current;
              dd.pointerId === (null === Jd || void 0 === Jd ? void 0 : Jd.pointerId) && (Kd.current = null, null !== Jd.direction && vd(Jd.direction, !1, 0, Od))
            },
            children: (0, rd.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [Nd && jd("Left", Od - 2, !0), jd("Right", Od + 2 * Qd - 1, !0), (0, rd.jsxs)("div", {
                ref: dd => {
                  ld.current.Back = dd
                },
                className: "PlotsJournalLeaf Back",
                children: [jd("Recto", Od - 1, !0), Nd && jd("Verso", Od, !1)]
              }), (0, rd.jsxs)("div", {
                ref: dd => {
                  ld.current.Forward = dd
                },
                className: "PlotsJournalLeaf Forward",
                children: [jd("Recto", Od + Qd - 1, !1), Nd && jd("Verso", Od + Qd, !0)]
              })]
            })
          }), (0, rd.jsx)(PJ, {
            direction: "Forward",
            disabled: !Rd,
            onTurn: xd
          })]
        })
      })
    }

    function PJ(dd) {
      let {
        direction: Jd,
        disabled: kd,
        onTurn: pd
      } = dd;
      const {
        t: Nd
      } = (0, md.B)();
      return (0, rd.jsx)("div", {
        className: qd()("PlotsJournalArrow", Jd),
        children: (0, rd.jsx)(sd.d, {
          disabled: kd,
          ariaLabel: Nd("Forward" === Jd ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            pd(Jd)
          },
          children: (0, rd.jsx)(Bd.e, {
            name: "angle-up"
          })
        })
      })
    }
    var ZJ = kd(36772),
      gJ = kd(1924),
      CJ = kd(1971);
    const KJ = "plotsStepChanged",
      oJ = "plotsPlotChanged";
    class lJ {
      constructor() {
        this.step = ["none"], this.plot = ["none"]
      }
      getStep() {
        return this.step
      }
      receiveStep(dd) {
        this.step = dd, Kd.j.nO(KJ, dd, !0)
      }
      getPlot() {
        return this.plot
      }
      receivePlot(dd) {
        this.plot = dd, Kd.j.nO(oJ, dd, !0)
      }
    }
    const QJ = "KeyJ";

    function LJ(dd) {
      let {
        hud: Jd,
        journal: kd
      } = dd;
      const pd = (0, Fd.i)(Gd, kd.getPages()),
        Nd = (0, Fd.i)(KJ, Jd.getStep()),
        {
          isTouchScreen: Wd
        } = (0, Zd.j)(["isTouchScreen"]),
        {
          t: Kd
        } = (0, md.B)(),
        od = null !== pd && "none" === Nd[0];
      return (0, Md.d)((dd => null !== pd && dd.code === QJ && !dd.repeat && !(0, Cd.isTypingInInput)()), (dd => {
        (0, gd.y)(dd, od, Pd.p)
      })), od ? (0, rd.jsx)(ZJ.g, {
        placement: "topRight",
        children: (0, rd.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, rd.jsxs)("button", {
            type: "button",
            className: qd()("PlotsJournalButton SmallTextBold", {
              Touch: Wd
            }),
            onClick: Pd.p,
            children: [(0, rd.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, rd.jsx)(gJ.d, {
                itemName: "Book",
                amount: 0
              })
            }), Kd("plotsGame:journalButton"), !Wd && (0, rd.jsx)(CJ.c, {
              className: "PlotsJournalButtonKey",
              keyCode: QJ
            })]
          })
        })
      }) : null
    }
    var OJ = kd(38556),
      eJ = kd(38363),
      RJ = kd(37101),
      IJ = kd(9374),
      GJ = kd(9385),
      vJ = kd(38004);
    const xJ = new Map([
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
      qJ = [...RJ.e.blockRemoveActionRoots, ...eJ.d, ...IJ.g, "Board", "Code Block", "Custom Lobby Block"],
      BJ = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let sJ = null;

    function iJ() {
      return sJ ??= function() {
        const dd = aJ(),
          Jd = Math.max(...dd.map((dd => bd.g[dd].id))) + 1,
          kd = new Int32Array(Jd),
          pd = new Int32Array(Jd),
          Nd = new Uint8Array(Jd).fill(1),
          Wd = new Uint8Array(Jd),
          Pd = new Uint8Array(Jd),
          Zd = new Array(Jd).fill("Air"),
          gd = new Map,
          Cd = dd => {
            let Jd = gd.get(dd);
            return void 0 === Jd && (Jd = gd.size + 1, gd.set(dd, Jd)), Jd
          },
          Kd = new Set(qJ);
        for (const ld of dd) {
          var od;
          const {
            id: dd,
            meta: Jd,
            altActionable: gd,
            canBePlacedOver: Qd
          } = bd.g[ld];
          kd[dd] = Cd(MJ(ld));
          const Ld = Jd.stairsCorner;
          if (null === Ld) pd[dd] = kd[dd];
          else {
            const kd = Ld.endsWith("Right");
            pd[dd] = Cd(`${Jd.rootName}|rot${kd?Jd.rot%4+1:Jd.rot}|${Jd.halfblockPlacement}|${Ld.replace("Right","Left")}`)
          }
          Nd[dd] = Qd ? 1 : 0, Wd[dd] = gd || null !== Jd.open || ld in vJ.d || Kd.has(Jd.rootName) || void 0 !== (0, eJ.e)(Jd.rootName) ? 1 : 0;
          const {
            rootName: Od
          } = Jd;
          Pd[dd] = null !== Jd.open || eJ.d.includes(Od) || Od.includes("Bookshelf") || Od.includes("Mailbox") ? 1 : 0, Zd[dd] = null !== (od = (0, OJ.h)(dd)) && void 0 !== od ? od : Od
        }
        return {
          kinds: kd,
          shapes: pd,
          empty: Nd,
          inUse: Wd,
          ownAltActionMessage: Pd,
          placingItems: Zd
        }
      }(), sJ
    }

    function aJ() {
      return Object.keys(bd.g).filter((dd => bd.g[dd].name === dd))
    }

    function MJ(dd) {
      var Jd;
      const kd = bd.g[dd],
        {
          rootName: pd,
          rot: Nd
        } = kd.meta,
        [, ...Wd] = (null !== (Jd = kd.rootMetaDesc) && void 0 !== Jd ? Jd : dd).split("|"),
        Pd = Wd.filter((dd => !("meta" === dd || BJ.test(dd) || (0, GJ.B)(kd) && /^[nesw]+$/.test(dd) || IJ.g.includes(pd) && /^[lrud]+$/.test(dd) || zd.I.includes(pd) && /^(left|right)$/.test(dd))));
      return [pd, ...Pd].map((dd => "fenceGate" === kd.model && dd === `rot${Nd}` ? "rot" + ((Nd - 1) % 2 + 1) : dd)).join("|")
    }

    function FJ(dd, Jd) {
      const {
        kinds: kd,
        shapes: pd
      } = iJ();
      return kd[dd] === kd[Jd] || pd[dd] === pd[Jd]
    }

    function YJ(dd) {
      return 1 === iJ().empty[dd]
    }

    function mJ(dd) {
      return iJ().placingItems[dd]
    }

    function bJ(dd) {
      return xJ.get(bd.g[dd].meta.rootName)
    }
    var SJ = kd(9368),
      jJ = kd(9383);
    const XJ = [0, 0, 0, 1, 1, 1],
      fJ = (0, SJ.d)([
        [2, 0, 2, 6, 6, 6]
      ]),
      nJ = (0, SJ.d)([
        [3, 0, 3, 5, 5, 5]
      ]),
      UJ = (0, SJ.d)([
        [3, 3, 3, 5, 8, 5]
      ]),
      yJ = [0, 1, 2, 3].map((dd => (0, SJ.d)((0, SJ.n)([
        [3, 2, 0, 5, 7, 3]
      ], dd))));

    function DJ(dd) {
      const {
        DO: Jd,
        model: kd,
        blockModel: pd,
        meta: Nd
      } = bd.g[dd];
      return void 0 !== Jd ? Jd : "CentreCross" === kd ? fJ : null !== pd && void 0 !== pd && pd.startsWith("torch") ? Nd.halfblockPlacement === jJ.c.side ? yJ[Nd.rot - 1] : Nd.halfblockPlacement === jJ.c.top ? UJ : nJ : XJ
    }
    var TJ = kd(37072),
      EJ = kd(193);

    function cJ(dd, Jd) {
      const kd = EJ.g.yR / 2;
      return dd[0] < Jd[0] + kd && dd[0] + 1 > Jd[0] - kd && dd[1] < Jd[1] + EJ.g.uR && dd[1] + 1 > Jd[1] && dd[2] < Jd[2] + kd && dd[2] + 1 > Jd[2] - kd
    }

    function hJ(dd, Jd, kd, pd, Nd) {
      const Wd = Math.hypot(...Jd.dir);
      if (!Number.isFinite(Wd) || 0 === Wd) return -1;
      const {
        from: Pd,
        reach: Zd,
        solid: gd
      } = Jd, Cd = [Jd.dir[0] / Wd, Jd.dir[1] / Wd, Jd.dir[2] / Wd], Kd = null === gd ? Zd : Math.min(Zd, function(dd, Jd, kd) {
        const pd = rJ(dd, Jd, kd);
        if (pd !== 1 / 0) return pd;
        return (kd[0] + .5 - dd[0]) * Jd[0] + (kd[1] + .5 - dd[1]) * Jd[1] + (kd[2] + .5 - dd[2]) * Jd[2]
      }(Pd, Cd, gd) + .75);
      let od = -1,
        ld = 1 / 0,
        Qd = 1 / 0;
      for (let Ld = 0; Ld < dd.length; Ld += 4) {
        const Jd = [dd[Ld], dd[Ld + 1], dd[Ld + 2]],
          Wd = Nd(Ld) ? Zd : Kd;
        let gd = -1,
          Od = rJ(Pd, Cd, Jd);
        if (Od > Wd) {
          const dd = [Jd[0] + .5 - Pd[0], Jd[1] + .5 - Pd[1], Jd[2] + .5 - Pd[2]];
          if (Od = dd[0] * Cd[0] + dd[1] * Cd[1] + dd[2] * Cd[2], Od <= 0 || Od > Wd) continue;
          if (gd = Math.hypot(dd[0] - Od * Cd[0], dd[1] - Od * Cd[1], dd[2] - Od * Cd[2]), gd > .7 || !pd(Ld)) continue
        }(gd < ld || gd === ld && Od < Qd) && kd(Ld) && (od = Ld, ld = gd, Qd = Od)
      }
      return od
    }

    function rJ(dd, Jd, kd) {
      let pd = 0,
        Nd = 1 / 0;
      for (let Wd = 0; Wd < 3; Wd++) {
        const Pd = kd[Wd] - dd[Wd];
        if (0 === Jd[Wd]) {
          if (Pd > 0 || Pd + 1 < 0) return 1 / 0;
          continue
        }
        const Zd = Pd / Jd[Wd],
          gd = (Pd + 1) / Jd[Wd];
        pd = Math.max(pd, Math.min(Zd, gd)), Nd = Math.min(Nd, Math.max(Zd, gd))
      }
      return pd <= Nd ? pd : 1 / 0
    }
    var uJ = kd(38251),
      tJ = kd(38660);
    const VJ = [1, 1, 1];
    class zJ {
      constructor(dd) {
        this.api = dd, this.meshes = null, this.shown = null
      }
      show(dd) {
        if (!(0, TJ.h)(dd, this.shown))
          if (this.shown = null === dd ? null : [dd[0], dd[1], dd[2]], null !== this.meshes)
            for (const Jd of this.meshes) this.api.setGameMesh(Jd, null === dd ? {
              visible: !1
            } : {
              anchor: dd,
              visible: !0
            });
          else if (null !== dd) {
          const Jd = [uJ.i, uJ.i, uJ.i, 0, 0, 0];
          this.meshes = [this.build([Jd], uJ.k, dd), this.build((0, uJ.e)(), uJ.p, dd)]
        }
      }
      dispose() {
        for (const Jd of null !== (dd = this.meshes) && void 0 !== dd ? dd : []) {
          var dd;
          this.api.disposeGameMesh(Jd)
        }
        this.meshes = null, this.shown = null
      }
      build(dd, Jd, kd) {
        const pd = [],
          Nd = [];
        for (const [Wd, Pd, Zd, gd, Cd, Kd] of dd)(0, tJ.f)(pd, Nd, [gd + .5, Cd + .5, Kd + .5], [Wd, Pd, Zd]);
        return this.api.createGameMesh({
          positions: pd,
          indices: Nd
        }, {
          rgb: VJ,
          alpha: Jd,
          onTop: !0
        }, kd)
      }
    }
    class HJ {
      constructor(dd) {
        this.api = dd, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(dd) {
        const Jd = EJ.g.KL;
        this.chunks = [];
        for (let kd = 0; kd < dd.length; kd += 3) {
          const pd = Math.floor(dd[kd] / Jd),
            Nd = Math.floor(dd[kd + 1] / Jd),
            Wd = Math.floor(dd[kd + 2] / Jd);
          this.watches(pd, Nd, Wd) || this.chunks.push(pd, Nd, Wd)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const dd = performance.now();
        if (dd - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = dd;
        let Jd = !1;
        for (let kd = 0; kd < this.chunks.length; kd += 3) {
          const dd = this.api.getChunkVersion(this.chunks[kd], this.chunks[kd + 1], this.chunks[kd + 2]);
          this.versions[kd / 3] !== dd && (this.versions[kd / 3] = dd, Jd = !0)
        }
        return Jd
      }
      watches(dd, Jd, kd) {
        for (let pd = 0; pd < this.chunks.length; pd += 3)
          if (this.chunks[pd] === dd && this.chunks[pd + 1] === Jd && this.chunks[pd + 2] === kd) return !0;
        return !1
      }
    }
    const wJ = .35,
      AJ = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      dk = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      Jk = [.95, .2, .15];
    class kk {
      constructor() {
        this.groups = []
      }
      add(dd, Jd, kd, pd, Nd) {
        let Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : XJ;
        for (const Pd of this.groups)
          if (Wk(Pd, pd, Nd)) return Pd.cells.push(dd, Jd, kd), void Pd.boxes.push(Wd);
        this.groups.push({
          rgb: pd,
          look: Nd,
          cells: [dd, Jd, kd],
          boxes: [Wd]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class pk {
      constructor(dd) {
        this.api = dd, this.shown = []
      }
      show(dd) {
        const Jd = [];
        for (const kd of dd) {
          const dd = this.shown.findIndex((dd => {
            let {
              group: Jd
            } = dd;
            return Wk(Jd, kd.rgb, kd.look) && Pk(Jd, kd)
          })); - 1 === dd ? Jd.push(this.build(kd)) : (Jd.push(this.shown[dd]), this.shown.splice(dd, 1))
        }
        this.dispose(), this.shown = Jd
      }
      dispose() {
        for (const {
            meshes: dd
          }
          of this.shown)
          for (const Jd of dd) this.api.disposeGameMesh(Jd);
        this.shown = []
      }
      build(dd) {
        const {
          rgb: Jd,
          look: kd,
          boxes: pd
        } = dd, Nd = [Jd[0] + (1 - Jd[0]) * wJ, Jd[1] + (1 - Jd[1]) * wJ, Jd[2] + (1 - Jd[2]) * wJ], Wd = [this.buildMesh(dd.cells, Jd, kd.alpha, ((dd, Jd, Nd, Wd) => {
          Nk(dd, Jd, Nd, pd[Wd], kd.size, !1)
        })), this.buildMesh(dd.cells, Nd, kd.alpha, ((dd, Jd, Nd, Wd) => {
          Nk(dd, Jd, Nd, pd[Wd], kd.size, !0)
        }))];
        return kd.crossed && Wd.push(this.buildMesh(dd.cells, Jd, .9, ((dd, Jd, pd) => {
          (0, tJ.h)(dd, Jd, pd, kd.size + .01, .12)
        }))), {
          group: dd,
          meshes: Wd
        }
      }
      buildMesh(dd, Jd, kd, pd) {
        const Nd = [dd[0], dd[1], dd[2]],
          Wd = [],
          Pd = [];
        for (let Zd = 0; Zd < dd.length; Zd += 3) pd(Wd, Pd, [dd[Zd] - Nd[0] + .5, dd[Zd + 1] - Nd[1] + .5, dd[Zd + 2] - Nd[2] + .5], Zd / 3);
        return this.api.createGameMesh({
          positions: Wd,
          indices: Pd
        }, {
          rgb: [Jd[0], Jd[1], Jd[2]],
          alpha: kd
        }, Nd)
      }
    }

    function Nk(dd, Jd, kd, pd, Nd, Wd) {
      for (let Pd = 0; Pd < pd.length; Pd += 6) {
        const Zd = [0, 0, 0],
          gd = [0, 0, 0];
        for (let dd = 0; dd < 3; dd++) Zd[dd] = kd[dd] + ((pd[Pd + dd] + pd[Pd + dd + 3]) / 2 - .5) * Nd, gd[dd] = (pd[Pd + dd + 3] - pd[Pd + dd]) * Nd;
        (0, tJ.e)(dd, Jd, Zd, gd, Wd)
      }
    }

    function Wk(dd, Jd, kd) {
      return dd.rgb[0] === Jd[0] && dd.rgb[1] === Jd[1] && dd.rgb[2] === Jd[2] && dd.look === kd
    }

    function Pk(dd, Jd) {
      if (dd.cells.length !== Jd.cells.length) return !1;
      for (let kd = 0; kd < dd.cells.length; kd++)
        if (dd.cells[kd] !== Jd.cells[kd]) return !1;
      return dd.boxes.every(((dd, kd) => dd === Jd.boxes[kd]))
    }

    function Zk(dd, Jd) {
      return dd.getClientOption(Jd, "blockReach") + 1
    }
    class gk {
      constructor(dd, Jd, kd) {
        this.api = dd, this.localPlayerId = Jd, this.pickNext = kd, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(dd) {
        const [Jd, , kd] = dd.cameraDirection, pd = Math.hypot(Jd, kd);
        pd > .001 && (this.heading = [Jd / pd, kd / pd])
      }
      tapped(dd, Jd, kd) {
        const pd = Zk(this.api, this.localPlayerId),
          {
            origin: Nd,
            direction: Wd
          } = this.api.getActionRay(),
          Pd = [...Nd],
          Zd = [
            [Pd, [Pd[0] + Wd[0] * pd, Pd[1] + Wd[1] * pd, Pd[2] + Wd[2] * pd]]
          ];
        null !== dd && Zd.push([Pd, (0, TJ.e)(dd)]), this.tap = {
          lines: Zd,
          next: Jd,
          ms: kd
        }
      }
      filled(dd, Jd) {
        this.tap = null, this.turnFrom(dd, Jd), this.retry(Jd)
      }
      arrived(dd, Jd) {
        const {
          tap: kd
        } = this;
        if (null === kd || Jd - kd.ms > 1500) return null;
        const pd = (0, TJ.e)(dd);
        return (0, TJ.h)(kd.next, dd) || kd.lines.some((dd => {
          let [Jd, kd] = dd;
          return function(dd, Jd, kd) {
            const pd = [kd[0] - Jd[0], kd[1] - Jd[1], kd[2] - Jd[2]],
              Nd = [dd[0] - Jd[0], dd[1] - Jd[1], dd[2] - Jd[2]],
              Wd = pd[0] ** 2 + pd[1] ** 2 + pd[2] ** 2,
              Pd = 0 === Wd ? 0 : Math.min(1, Math.max(0, (Nd[0] * pd[0] + Nd[1] * pd[1] + Nd[2] * pd[2]) / Wd));
            return Math.hypot(Nd[0] - pd[0] * Pd, Nd[1] - pd[1] * Pd, Nd[2] - pd[2] * Pd)
          }(pd, Jd, kd) <= .9
        })) ? (this.tap = null, this.turnFrom(dd, Jd), kd.ms) : null
      }
      turnFrom(dd, Jd) {
        this.pending = {
          from: dd,
          ms: Jd,
          turnMs: Math.max(50, Math.min(250, Jd - this.lastFillMs))
        }, this.lastFillMs = Jd
      }
      retry(dd) {
        const {
          pending: Jd
        } = this;
        if (null === Jd) return;
        if (dd - Jd.ms > 1500) return void(this.pending = null);
        const kd = this.pickNext((0, TJ.e)(Jd.from), (dd => (0, TJ.h)(dd, Jd.from)));
        if (null === kd) return;
        this.pending = null;
        const {
          turning: pd
        } = this;
        if (null !== pd && dd < pd.endMs && (0, TJ.h)(pd.to, kd)) return;
        const Nd = this.api.getActionRay().origin,
          Wd = [kd[0] + .5 - Nd[0], kd[1] + .5 - Nd[1], kd[2] + .5 - Nd[2]],
          Pd = Math.hypot(Wd[0], Wd[2]);
        if (Pd < .3) {
          const dd = Math.max(Pd, .001);
          Wd[0] = this.heading[0] * dd, Wd[2] = this.heading[1] * dd
        }
        this.api.turnCamera(Wd, Jd.turnMs), this.turning = {
          to: kd,
          endMs: dd + Jd.turnMs
        }
      }
    }
    class Ck {
      constructor(dd, Jd, kd) {
        this.api = dd, this.localPlayerId = Jd, this.juice = kd, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], this.lastFilled = null, this.lastSeenFilled = null, this.playerCells = [], this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = null, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new HJ(dd), this.meshes = new pk(dd), this.outline = new zJ(dd), this.turn = new gk(dd, Jd, ((dd, Jd) => this.pickNext(dd, Jd)))
      }
      ZL(dd) {
        const Jd = "active" === dd[0] ? `${dd[1]}|${dd[3]}|${dd[4]}|${dd[5]}|${dd[6]}` : "";
        if ("active" !== dd[0]) "built" === dd[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , kd, pd, Nd, Wd] = dd;
          Jd !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = kd) : kd === this.layerY ? this.burstUnlisted(pd) : kd > this.layerY && this.finishLayer(kd), this.layerY = kd, this.layerCells.has(kd) || this.layerCells.set(kd, pd.filter(lk)), this.ghostCells = pd, this.palette = Nd, this.occupiedCells = Wd
        }
        Jd !== this.blueprint && (this.blueprint = Jd, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((dd => this.api.blockNameToBlockId(dd))), this.chunkWatch.watch([...this.ghostCells.filter(lk), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(dd) {
        this.burstUnlisted([]), dd > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = dd)
      }
      Do() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const dd = performance.now();
        let Jd = !1;
        for (const [Nd, Wd] of this.foreseen) {
          var kd;
          if (dd - Wd > 1e3) this.foreseen.delete(Nd), Jd = !0, (null === (kd = this.lastFilled) || void 0 === kd ? void 0 : kd.join()) === Nd && (this.lastFilled = this.lastSeenFilled)
        }
        const pd = Kk(this.api.getPositionView(this.localPlayerId));
        (Jd || pd.some(((dd, Jd) => dd !== this.playerCells[Jd]))) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(dd) {
        const Jd = new Set;
        for (let Nd = 0; Nd < dd.length; Nd += 4) Jd.add(`${dd[Nd]},${dd[Nd+1]},${dd[Nd+2]}`);
        const kd = [],
          {
            ghostCells: pd
          } = this;
        for (let Nd = 0; Nd < pd.length; Nd += 4) {
          const dd = `${pd[Nd]},${pd[Nd+1]},${pd[Nd+2]}`;
          !Jd.has(dd) && this.open.delete(dd) && kd.push(this.filledCell(Nd))
        }
        this.burst(kd)
      }
      refresh() {
        const {
          ghostCells: dd,
          palette: Jd,
          occupiedCells: kd
        } = this, pd = new kk, Nd = new Set, Wd = [], Pd = [];
        for (let Zd = 0; Zd < dd.length; Zd += 4) {
          const [kd, gd, Cd, Kd] = [dd[Zd], dd[Zd + 1], dd[Zd + 2], dd[Zd + 3]], od = this.api.getBlockId(kd, gd, Cd), ld = `${kd},${gd},${Cd}`, Qd = FJ(this.blockIds[Kd], od);
          !Qd && YJ(od) ? pd.add(kd, gd, Cd, bJ(Jd[Kd]), AJ, DJ(Jd[Kd])) : Qd ? this.open.has(ld) && Wd.push(this.filledCell(Zd)) : pd.add(kd, gd, Cd, Jk, dk), !Qd && this.api.isBlockInLoadedChunk(kd, gd, Cd) && (Nd.add(ld), Pd.push(kd, gd, Cd, YJ(od) ? 0 : 1))
        }
        this.open = Nd, this.nextCells = Pd;
        for (let Zd = 0; Zd < kd.length; Zd += 3) {
          const [dd, Jd, Nd] = [kd[Zd], kd[Zd + 1], kd[Zd + 2]];
          YJ(this.api.getBlockId(dd, Jd, Nd)) || pd.add(dd, Jd, Nd, Jk, dk)
        }
        this.meshes.show(pd.toArray()), this.burst(Wd), this.showNext(), this.turn.retry(performance.now())
      }
      burst(dd) {
        const Jd = performance.now(),
          kd = [];
        for (const [Nd, Wd, Pd] of dd) {
          const dd = [Nd, Wd, Pd];
          this.lastSeenFilled = dd, this.foreseen.delete(dd.join()) || kd.push(dd)
        }
        const pd = this.isHolding(Jd);
        for (const Nd of kd) {
          if (this.lastFilled = Nd, pd && this.pressFilled) {
            this.turn.filled(Nd, Jd);
            continue
          }
          const dd = this.turn.arrived(Nd, Jd);
          if (null !== dd) {
            this.pressFilled = pd;
            for (const [Jd, kd] of this.foreseen) kd <= dd && this.foreseen.delete(Jd)
          }
        }
        this.juice.filled(dd)
      }
      showNext() {
        var dd;
        const Jd = this.api.getPositionView(this.localPlayerId);
        this.playerCells.splice(0, 1 / 0, ...Kk(Jd));
        const kd = this.lastFilled;
        this.nextCell = this.pickNext(null === kd ? [Jd[0], Jd[1] + 1, Jd[2]] : (0, TJ.e)(kd), (() => !1)), this.outline.show(null !== (dd = this.aimed) && void 0 !== dd ? dd : this.nextCell)
      }
      pickNext(dd, Jd) {
        const kd = this.api.getPositionView(this.localPlayerId),
          pd = [kd[0], kd[1] + EJ.g.uR * EJ.g.playerEyeToHeightRatio, kd[2]],
          Nd = Zk(this.api, this.localPlayerId),
          {
            nextCells: Wd
          } = this,
          Pd = dd => [Wd[dd], Wd[dd + 1], Wd[dd + 2]],
          Zd = function(dd, Jd, kd, pd, Nd, Wd) {
            let Pd = -1,
              Zd = -1,
              gd = 1 / 0;
            for (let Cd = 0; Cd < dd.length; Cd += Jd) {
              const Jd = (Wd(Cd) ? 2 : 0) + (pd(Cd) ? 1 : 0);
              if (Jd < Zd || Nd(Cd)) continue;
              const Kd = (dd[Cd] + .5 - kd[0]) ** 2 + (dd[Cd + 1] + .5 - kd[1]) ** 2 + (dd[Cd + 2] + .5 - kd[2]) ** 2;
              (Jd > Zd || Kd < gd) && (Pd = Cd, Zd = Jd, gd = Kd)
            }
            return Pd
          }(Wd, 4, dd, (dd => 1 === Wd[dd + 3]), (dd => {
            const pd = Pd(dd);
            return cJ(pd, kd) || this.foreseen.has(pd.join()) || Jd(pd)
          }), (dd => function(dd, Jd, kd) {
            return (Jd[0] + .5 - dd[0]) ** 2 + (Jd[1] + .5 - dd[1]) ** 2 + (Jd[2] + .5 - dd[2]) ** 2 <= kd ** 2
          }(pd, Pd(dd), Nd)));
        return -1 === Zd ? null : Pd(Zd)
      }
      afterRender(dd) {
        var Jd;
        this.turn.look(dd);
        const kd = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === kd ? null : kd.position), this.outline.show(null !== (Jd = this.aimed) && void 0 !== Jd ? Jd : this.nextCell)
      }
      isHolding(dd) {
        return null !== this.altMs && dd - this.altMs <= 500
      }
      attemptAltAction(dd) {
        const Jd = performance.now();
        if (this.isHolding(Jd) || (this.pressFilled = !1), this.altMs = Jd, this.pressFilled) return "preventPlacement";
        const kd = this.findAimed(dd);
        if (null !== kd) return this.foreseen.set(kd.join(), Jd), this.lastFilled = kd, this.aimed = null, this.showNext(), this.turn.filled(kd, Jd), this.pressFilled = !0, "preventPlacement";
        null !== this.nextCell && this.turn.tapped(dd, this.nextCell, Jd)
      }
      findAimed(dd) {
        return function(dd, Jd, kd, pd, Nd, Wd, Pd) {
          const Zd = dd.Pkd(Jd),
            gd = null === Zd || null === dd.blockNameToBlockId(Zd.name, !0) ? null : Zd.name,
            Cd = dd.getPositionView(Jd),
            {
              origin: Kd,
              direction: od
            } = dd.getActionRay(),
            ld = hJ(pd, {
              from: Kd,
              dir: od,
              reach: Zk(dd, Jd),
              solid: kd
            }, (Jd => {
              const kd = [pd[Jd], pd[Jd + 1], pd[Jd + 2]];
              return !FJ(Nd[pd[Jd + 3]], dd.getBlockId(...kd)) && !Pd.has(kd.join()) && dd.isBlockInLoadedChunk(...kd) && !cJ(kd, Cd)
            }), (dd => null === gd || gd === mJ(Nd[pd[dd + 3]])), (dd => null !== Wd && pd[dd] === Wd[0] && pd[dd + 1] === Wd[1] && pd[dd + 2] === Wd[2]));
          return -1 === ld ? null : [pd[ld], pd[ld + 1], pd[ld + 2]]
        }(this.api, this.localPlayerId, dd, this.ghostCells, this.blockIds, this.nextCell, this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(dd) {
        const {
          ghostCells: Jd
        } = this, [kd, pd, Nd] = bJ(this.palette[Jd[dd + 3]]);
        return [Jd[dd], Jd[dd + 1], Jd[dd + 2], kd, pd, Nd]
      }
    }

    function Kk(dd) {
      let [Jd, kd, pd] = dd;
      const Nd = EJ.g.yR / 2;
      return [Math.floor(Jd), Math.floor(kd), Math.floor(pd), Math.floor(Jd - Nd), Math.floor(Jd + Nd), Math.floor(kd + EJ.g.uR), Math.floor(pd - Nd), Math.floor(pd + Nd)]
    }

    function lk(dd, Jd) {
      return Jd % 4 !== 3
    }

    function Qk(dd, Jd, kd, pd, Nd) {
      if (!dd.isBlockInLoadedChunk(Jd, pd - 6, kd) || !dd.isBlockInLoadedChunk(Jd, pd + 6 + Nd, kd) || !dd.canModifyBlockAt(Jd, pd, kd)) return NaN;
      let Wd = pd - 1;
      if (0 !== dd.getBlockId(Jd, Wd, kd)) {
        for (; Wd < pd + 6 && 0 !== dd.getBlockId(Jd, Wd + 1, kd);) Wd++;
        return Wd
      }
      for (; Wd > pd - 6;)
        if (Wd--, 0 !== dd.getBlockId(Jd, Wd, kd)) return Wd;
      return NaN
    }

    function Lk(dd, Jd, kd, pd, Nd) {
      let Wd = 0;
      for (let Pd = pd + 1; Pd <= pd + Nd; Pd++) 0 !== dd.getBlockId(Jd, Pd, kd) && Wd++;
      return Wd
    }

    function Ok(dd) {
      const Jd = new Map;
      for (const Pd of dd) {
        var kd;
        if (Number.isNaN(Pd)) return null;
        Jd.set(Pd, (null !== (kd = Jd.get(Pd)) && void 0 !== kd ? kd : 0) + 1)
      }
      let pd = NaN,
        Nd = 0;
      for (const [Pd, Zd] of Jd)(Zd > Nd || Zd === Nd && Pd < pd) && (pd = Pd, Nd = Zd);
      let Wd = 0;
      for (const Pd of dd) Wd += Math.abs(Pd - pd);
      return Wd
    }

    function ek(dd, Jd, kd, pd) {
      const {
        eye: Nd,
        forward: Wd,
        tanHalfFovX: Pd,
        tanHalfFovY: Zd
      } = dd, [gd, Cd] = function(dd) {
        let [Jd, kd, pd] = dd;
        const Nd = Math.hypot(Jd, pd),
          [Wd, Pd] = [pd / Nd, -Jd / Nd];
        return [
          [Wd, 0, Pd],
          [kd * Pd, pd * Wd - Jd * Pd, -kd * Wd]
        ]
      }(Wd), [Kd, od] = [Jd * Pd, kd * Zd], ld = Wd[0] + Kd * gd[0] + od * Cd[0], Qd = Wd[1] + od * Cd[1], Ld = Wd[2] + Kd * gd[2] + od * Cd[2], Od = (pd - Nd[1]) / Qd;
      return Od > 0 && Od < 1 / 0 ? [Nd[0] + Od * ld, Nd[2] + Od * Ld] : null
    }
    const Rk = "plotsBlueprintPlacementChanged",
      Ik = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class Gk {
      constructor(dd, Jd) {
        this.api = dd, this.localPlayerId = Jd, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = dd => {
          var Jd, kd, pd, Wd;
          const Pd = null !== (Jd = null === (kd = this.placing) || void 0 === kd ? void 0 : kd.rotation) && void 0 !== Jd ? Jd : 0,
            {
              size: Zd
            } = cd(dd, Pd),
            gd = this.api.yI(this.localPlayerId),
            [Cd, Kd] = null !== (pd = null !== (Wd = function(dd, Jd, kd) {
              const [pd, Nd, Wd] = Jd, [Pd, Zd, gd] = [Math.floor(kd[0]), Math.floor(kd[1]), Math.floor(kd[2])], Cd = 6 + Math.max(pd, Wd) / 2, [Kd, od] = [Math.ceil(Cd + pd / 2), Math.ceil(Cd + Wd / 2)], [ld, Qd] = [Pd - Kd, gd - od], [Ld, Od] = [2 * Kd + 1, 2 * od + 1], ed = new Float64Array(Ld * Od), Rd = new Uint16Array(Ld * Od);
              for (let xd = 0; xd < Ld; xd++)
                for (let Jd = 0; Jd < Od; Jd++) {
                  const kd = Qk(dd, ld + xd, Qd + Jd, Zd, Nd);
                  ed[xd * Od + Jd] = kd, Number.isNaN(kd) || (Rd[xd * Od + Jd] = Lk(dd, ld + xd, Qd + Jd, kd, Nd))
                }
              const Id = [];
              let Gd = null,
                vd = 1 / 0;
              for (let xd = 0; xd + pd <= Ld; xd++)
                for (let dd = 0; dd + Wd <= Od; dd++) {
                  const [Jd, Nd] = [ld + xd, Qd + dd], Zd = Math.hypot(Jd + pd / 2 - kd[0], Nd + Wd / 2 - kd[2]);
                  if (Zd > Cd || Pd >= Jd - 2 && Pd < Jd + pd + 2 && gd >= Nd - 2 && gd < Nd + Wd + 2) continue;
                  Id.length = 0;
                  let Kd = 0;
                  for (let kd = 0; kd < pd; kd++)
                    for (let Jd = 0; Jd < Wd; Jd++) Id.push(ed[(xd + kd) * Od + dd + Jd]), Kd += Rd[(xd + kd) * Od + dd + Jd];
                  const od = Ok(Id);
                  if (null === od) continue;
                  const Ld = Zd + 3 * (od + Kd);
                  Ld < vd && (vd = Ld, Gd = [Jd, Nd])
                }
              return Gd
            }(this.api, Zd, gd)) && void 0 !== Wd ? Wd : this.cornerOnTarget(Zd)) && void 0 !== pd ? pd : [Math.floor(gd[0]) + 2, Math.floor(gd[2])];
          this.placing = {
            id: dd,
            rotation: Pd,
            corner: [Cd, this.playerLevel(), Kd],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null
          }, this.update(), this.api.sendCommand(`${Nd} preview`)
        }, this.rotate = () => {
          const {
            id: dd,
            rotation: Jd,
            corner: kd
          } = this.placing, Nd = pd[(pd.indexOf(Jd) + 1) % pd.length], [Wd, , Pd] = cd(dd, Jd).size, [Zd, , gd] = cd(dd, Nd).size;
          this.moveTo(kd[0] + Math.floor(Wd / 2) - Math.floor(Zd / 2), kd[2] + Math.floor(Pd / 2) - Math.floor(gd / 2), Nd)
        }, this.hoverAt = (dd, Jd) => {
          this.placing.hover = [dd, Jd], this.moveCentreTo(this.camera, dd, Jd)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (dd, Jd) => {
          const kd = this.placing,
            {
              eye: pd,
              forward: Nd,
              tanHalfFovX: Wd,
              tanHalfFovY: Pd
            } = this.camera,
            Zd = {
              eye: [pd[0], pd[1], pd[2]],
              forward: [Nd[0], Nd[1], Nd[2]],
              tanHalfFovX: Wd,
              tanHalfFovY: Pd
            },
            gd = kd.corner[1],
            Cd = ek(Zd, dd, Jd, gd);
          kd.hover = null, kd.drag = Cd && {
            view: Zd,
            ground: Cd,
            corner: [kd.corner[0], kd.corner[2]],
            level: gd
          }
        }, this.dragTo = (dd, Jd) => {
          const kd = this.placing.drag,
            pd = kd && ek(kd.view, dd, Jd, kd.level);
          null !== kd && null !== pd && this.moveTo(kd.corner[0] + Math.round(pd[0] - kd.ground[0]), kd.corner[1] + Math.round(pd[1] - kd.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const dd = this.view;
          dd.waiting || (dd.blocked ? this.nO({
            ...dd,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const dd = this.placing,
            {
              id: Jd,
              rotation: kd,
              corner: pd
            } = dd;
          this.api.sendCommand(`${Nd} place ${Jd} ${pd.join(" ")} ${kd}`), dd.sent = {
            atMs: performance.now(),
            corner: [...pd],
            rotation: kd,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${Nd} preview off`))
        }, this.chunkWatch = new HJ(dd), this.meshes = new pk(dd)
      }
      getView() {
        return this.view
      }
      Do() {
        const dd = this.placing;
        null !== dd && (null !== dd.sent && !dd.sent.timedOut && performance.now() - dd.sent.atMs > 3e3 ? (dd.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(dd) || this.chunkWatch.changed()) && this.update())
      }
      afterRender(dd) {
        const Jd = this.placing;
        null !== Jd && (! function(dd, Jd) {
          for (let kd = 0; kd < 3; kd++) Jd.eye[kd] = dd.cameraPosition[kd], Jd.forward[kd] = dd.cameraDirection[kd];
          Jd.tanHalfFovX = dd.tanHalfFovX, Jd.tanHalfFovY = dd.tanHalfFovY
        }(dd, this.camera), null !== Jd.hover && this.moveCentreTo(this.camera, Jd.hover[0], Jd.hover[1]))
      }
      ZL(dd) {
        const Jd = this.placing;
        if (null === Jd || null === Jd.sent || "active" !== dd[0]) return;
        const {
          sent: kd
        } = Jd, [, pd, Nd, Wd, Pd, Zd, gd] = dd;
        Nd && pd === Jd.id && gd === kd.rotation && Wd === kd.corner[0] && Pd === kd.corner[1] && Zd === kd.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(dd) {
        let [Jd, , kd] = dd;
        const pd = this.api.getTargetedBlock();
        if (null === pd) return null;
        const [Nd, , Wd] = pd.position;
        return [Nd - Math.floor(Jd / 2), Wd - Math.floor(kd / 2)]
      }
      playerLevel() {
        var dd;
        const [Jd, kd, pd] = this.api.yI(this.localPlayerId);
        if (null !== (dd = this.api.getLocalPlayerMovement()) && void 0 !== dd && dd.onGround) return Math.ceil(kd - .01);
        const [Nd, Wd, Pd] = [Math.floor(Jd), Math.floor(kd), Math.floor(pd)];
        for (let Zd = Wd; Zd >= Wd - 2; Zd--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(Nd, Zd, Pd))) return Zd + 1;
        return Wd
      }
      followPlayerLevel(dd) {
        if (vk(dd)) return !1;
        const Jd = this.playerLevel();
        return Jd !== dd.corner[1] && (dd.corner[1] = Jd, !0)
      }
      moveCentreTo(dd, Jd, kd) {
        const pd = this.placing,
          Nd = ek(dd, Jd, kd, pd.corner[1]);
        if (null !== Nd) {
          const [dd, , Jd] = cd(pd.id, pd.rotation).size;
          this.moveTo(Math.round(Nd[0] - dd / 2), Math.round(Nd[1] - Jd / 2))
        }
      }
      moveTo(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const pd = this.placing;
        if (vk(pd)) return;
        const [Nd, Wd, Pd] = pd.corner;
        if (this.centreOnPlot(Nd, Pd) && !this.centreOnPlot(dd, Jd, kd))
          if (this.centreOnPlot(dd, Pd, kd)) Jd = Pd;
          else {
            if (!this.centreOnPlot(Nd, Jd, kd)) return;
            dd = Nd
          } dd === Nd && Jd === Pd && kd === pd.rotation || (pd.rotation = kd, pd.corner = [dd, Wd, Jd], this.update())
      }
      centreOnPlot(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: pd,
          corner: Nd
        } = this.placing, [Wd, , Pd] = cd(pd, kd).size;
        return this.api.canModifyBlockAt(dd + Math.floor(Wd / 2), Nd[1], Jd + Math.floor(Pd / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.nO(null)
      }
      update() {
        const {
          id: dd,
          rotation: Jd,
          corner: kd,
          refusals: pd
        } = this.placing, Nd = new kk, Wd = [];
        let Pd = !1,
          Zd = 0;
        for (const {
            offset: Kd,
            block: od
          }
          of cd(dd, Jd).cells) {
          const [dd, Jd, pd] = [kd[0] + Kd[0], kd[1] + Kd[1], kd[2] + Kd[2]];
          Wd.push(dd, Jd, pd);
          const gd = !this.api.canModifyBlockAt(dd, Jd, pd),
            Cd = this.api.getBlockId(dd, Jd, pd),
            ld = !YJ(Cd) && !FJ(this.api.blockNameToBlockId(od), Cd);
          Pd ||= gd, Zd += ld ? 1 : 0, gd || ld ? Nd.add(dd, Jd, pd, Jk, dk) : Nd.add(dd, Jd, pd, bJ(od), Ik, DJ(od))
        }
        this.chunkWatch.watch(Wd), this.meshes.show(Nd.toArray());
        const gd = this.view,
          Cd = vk(this.placing);
        (null === gd || void 0 === gd ? void 0 : gd.id) === dd && gd.blocked === Pd && gd.toClear === Zd && gd.waiting === Cd && gd.refusals === pd || this.nO({
          id: dd,
          blocked: Pd,
          toClear: Zd,
          waiting: Cd,
          refusals: pd
        })
      }
      nO(dd) {
        this.view = dd, Kd.j.nO(Rk, dd, !0)
      }
    }

    function vk(dd) {
      let {
        sent: Jd
      } = dd;
      return null !== Jd && !Jd.timedOut
    }
    var xk = kd(4090),
      qk = kd(39287);

    function Bk(dd, Jd, kd) {
      const pd = [255 * dd, 255 * Jd, 255 * kd],
        [Nd, Wd, Pd] = pd.map((dd => dd + .4 * (255 - dd)));
      return {
        texture: "square_particle",
        oo: 48,
        minLifeTime: .3 / qk.e,
        maxLifeTime: .55 / qk.e,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * qk.e * qk.e, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...pd, 1],
          maxColor: [Nd, Wd, Pd, 1]
        }, {
          timeFraction: 1,
          minColor: [...pd, 0],
          maxColor: [Nd, Wd, Pd, 0]
        }],
        blendMode: xk.d.Standard
      }
    }
    const sk = {
      texture: "glint",
      mipmaps: !1,
      oo: 96,
      minLifeTime: .5 / qk.e,
      maxLifeTime: .9 / qk.e,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * qk.e * qk.e, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: xk.d.OneOne
    };
    class ik {
      constructor(dd, Jd) {
        this.api = dd, this.localPlayerId = Jd, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(dd) {
        if (this.api.particlesEnabled())
          for (const [Jd, kd, pd, Nd, Wd, Pd] of dd.slice(0, 3)) {
            const dd = `${Nd},${Wd},${Pd}`;
            let Zd = this.chips.get(dd);
            void 0 === Zd && (Zd = this.api.createParticles(Bk(Nd, Wd, Pd), {
              pos: [Jd + .5, kd + .5, pd + .5]
            }), this.chips.set(dd, Zd));
            for (let Jd = 0; Jd < 8; Jd++) this.setPoint(Jd, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            Zd.emitPoints([Jd + .5, kd + .5, pd + .5], this.points, 8)
          }
      }
      layerDone(dd) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const Jd = dd.length / 3;
        if (0 === Jd || !this.api.particlesEnabled()) return;
        const kd = Math.min(Jd, 48),
          [pd, Nd, Wd] = [dd[0] + .5, dd[1] + 1, dd[2] + .5];
        let Pd = 0;
        for (let Zd = 0; Zd < kd; Zd++) {
          const gd = 3 * Math.floor(Zd * Jd / kd);
          for (let Jd = 0; Jd < 2; Jd++) this.setPoint(Pd++, dd[gd] + Math.random() - pd, dd[gd + 1] + 1 - Nd, dd[gd + 2] + Math.random() - Wd, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(sk, {
          pos: [pd, Nd, Wd]
        }), this.sparkles.emitPoints([pd, Nd, Wd], this.points, Pd)
      }
      dispose() {
        var dd;
        for (const Jd of this.chips.values()) Jd.stop();
        this.chips.clear(), null === (dd = this.sparkles) || void 0 === dd || dd.stop(), this.sparkles = null
      }
      setPoint(dd, Jd, kd, pd, Nd) {
        const Wd = 4 * dd;
        this.points[Wd] = Jd, this.points[Wd + 1] = kd, this.points[Wd + 2] = pd, this.points[Wd + 3] = Nd
      }
    }
    var ak = kd(1975);
    const Mk = "SpecialAction1",
      Fk = "KeyY",
      Yk = "KeyX";

    function mk(dd) {
      let {
        placement: Jd
      } = dd;
      const kd = (0, Fd.i)(Rk, Jd.getView()),
        {
          t: pd
        } = (0, md.B)(),
        {
          isTouchScreen: Nd
        } = (0, Zd.j)(["isTouchScreen"]),
        Wd = null !== kd,
        Pd = Wd && !kd.blocked && !kd.waiting;
      if ((0, Md.d)((dd => Wd && !dd.repeat && !(0, Cd.isTypingInInput)() && !(0, gd.n)() && !Nd), (dd => {
          const kd = function(dd, Jd, kd) {
            if (dd === Yk) return Jd.stop;
            if (dd === Fk) return kd ? Jd.build : Sk;
            return ak.x[Mk].includes(dd) ? Jd.rotate : null
          }(dd.code, Jd, Pd);
          null !== kd && (dd.stopPropagation(), kd())
        })), !Wd) return null;
      let Kd = Nd ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return kd.blocked ? Kd = "plotsGame:placementOffPlot" : kd.toClear > 0 && (Kd = "plotsGame:placementClear"), (0, rd.jsx)(ZJ.g, {
        placement: "bottom",
        children: (0, rd.jsxs)("div", {
          className: "PlotsPlacementCard",
          children: [(0, rd.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: pd(Ld(kd.id).displayName.translationKey)
          }), (0, rd.jsx)("div", {
            className: qd()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: kd.refusals > 0
            }),
            children: pd(Kd)
          }, kd.refusals), (0, rd.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, rd.jsxs)(sd.d, {
              onClick: Jd.rotate,
              children: [(0, rd.jsx)(bk, {
                noaAction: Mk
              }), pd("plotsGame:placementRotate")]
            }), (0, rd.jsxs)(sd.B, {
              onClick: Jd.stop,
              children: [(0, rd.jsx)(bk, {
                keyCode: Yk
              }), pd("general:cancel")]
            }), (0, rd.jsxs)(sd.j, {
              disabled: !Pd,
              onClick: Jd.build,
              children: [(0, rd.jsx)(bk, {
                keyCode: Fk
              }), pd("plotsGame:placementBuild")]
            })]
          })]
        })
      })
    }

    function bk(dd) {
      return (0, rd.jsx)(CJ.c, {
        className: "PlotsPlacementKey",
        ...dd
      })
    }

    function Sk() {}
    var jk = kd(4397);
    class Xk {
      constructor(dd) {
        this.placement = dd, this.press = null
      }
      down(dd) {
        if (null !== this.press) return !1;
        const {
          id: Jd,
          mouse: kd,
          x: pd,
          y: Nd,
          atMs: Wd
        } = dd;
        return this.press = {
          id: Jd,
          mouse: kd,
          x: pd,
          y: Nd,
          atMs: Wd,
          moved: !1
        }, kd || this.placement.beginDrag(dd.ndcX, dd.ndcY), !0
      }
      move(dd) {
        const Jd = this.press;
        null !== Jd && Jd.id === dd.id && (Jd.moved ||= Math.hypot(dd.x - Jd.x, dd.y - Jd.y) > 8), dd.mouse ? this.placement.hoverAt(dd.ndcX, dd.ndcY) : (null === Jd || void 0 === Jd ? void 0 : Jd.id) === dd.id && this.placement.dragTo(dd.ndcX, dd.ndcY)
      }
      up(dd) {
        const Jd = this.press;
        (null === Jd || void 0 === Jd ? void 0 : Jd.id) === dd.id && (this.move(dd), this.end(), !Jd.moved && (Jd.mouse || dd.atMs - Jd.atMs <= 250) && this.placement.tap())
      }
      cancel(dd) {
        var Jd;
        (null === (Jd = this.press) || void 0 === Jd ? void 0 : Jd.id) === dd && this.end()
      }
      leave(dd) {
        let {
          id: Jd,
          mouse: kd
        } = dd;
        kd && this.placement.endHover(), this.cancel(Jd)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }

    function fk(dd) {
      let {
        placement: Jd
      } = dd;
      return null === (0, Fd.i)(Rk, Jd.getView()) ? null : (0, rd.jsx)(nk, {
        placement: Jd
      })
    }

    function nk(dd) {
      let {
        placement: Jd
      } = dd;
      (0, jk.d)(!0, !0, "PlotsPlacementLayer");
      const kd = (0, Wd.useMemo)((() => new Xk(Jd)), [Jd]);
      return (0, rd.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: dd => {
          "mouse" === dd.pointerType && 0 !== dd.button || !kd.down(Uk(dd)) || dd.currentTarget.setPointerCapture(dd.pointerId)
        },
        onPointerMove: dd => {
          kd.move(Uk(dd))
        },
        onPointerUp: dd => {
          kd.up(Uk(dd))
        },
        onPointerCancel: dd => {
          kd.cancel(dd.pointerId)
        },
        onLostPointerCapture: dd => {
          kd.cancel(dd.pointerId)
        },
        onPointerLeave: dd => {
          kd.leave(Uk(dd))
        },
        "aria-hidden": !0
      })
    }

    function Uk(dd) {
      const {
        left: Jd,
        top: kd,
        width: pd,
        height: Nd
      } = dd.currentTarget.getBoundingClientRect();
      return {
        id: dd.pointerId,
        mouse: "mouse" === dd.pointerType,
        x: dd.clientX,
        y: dd.clientY,
        ndcX: (dd.clientX - Jd) / pd * 2 - 1,
        ndcY: 1 - (dd.clientY - kd) / Nd * 2,
        atMs: dd.timeStamp
      }
    }
    var yk = kd(2316),
      Dk = kd(36857),
      Tk = kd(1968),
      Ek = kd(1279);
    const ck = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function hk(dd) {
      let {
        hud: Jd
      } = dd;
      const kd = (0, Fd.i)(oJ, Jd.getPlot()),
        [pd, Nd] = (0, Wd.useState)(null),
        Pd = (0, Dk.m)(pd);
      if ("none" === kd[0]) return null;
      const [, Zd, gd, Cd, Kd, od] = kd;
      return (0, rd.jsx)("div", {
        className: qd()("PlotsPlotBannerContainer", {
          Below: Pd
        }),
        children: (0, rd.jsx)(rk, {
          plotX: Zd,
          plotZ: gd,
          ownerName: Cd,
          ownerId: Kd,
          relation: od,
          plaqueRef: Nd
        }, `${Zd},${gd}`)
      })
    }

    function rk(dd) {
      var Jd, kd;
      let {
        plotX: pd,
        plotZ: Nd,
        ownerName: Wd,
        ownerId: Pd,
        relation: Zd,
        plaqueRef: gd
      } = dd;
      const {
        t: Cd
      } = (0, md.B)(), Kd = (0, Tk.k)("hiddenPlayerNames"), od = (0, Tk.k)("players"), ld = null === Pd ? null : null !== (Jd = null === (kd = od.byId[Pd]) || void 0 === kd ? void 0 : kd.cosmetics) && void 0 !== Jd ? Jd : null, Qd = Cd("plotsGame:plotBannerCoords", {
        x: pd,
        z: Nd
      }), Ld = "own" === Zd || null !== Wd;
      return (0, rd.jsxs)("div", {
        ref: gd,
        className: qd()("PlotsPlotBanner", {
          Own: "own" === Zd,
          Shared: "shared" === Zd
        }),
        role: "status",
        children: [(0, rd.jsxs)("span", {
          className: qd()("PlotsPlotBannerSeal", {
            Face: null !== ld
          }),
          children: [null !== ld && (0, rd.jsx)(yk.e, {
            cosmetics: ld
          }), null === ld && (0, rd.jsx)(Bd.e, {
            name: ck[Zd]
          })]
        }), (0, rd.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, rd.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === Zd && Cd("plotsGame:plotBannerYours"), "own" !== Zd && null !== Wd && Cd("plotsGame:plotBannerOwner", {
              name: (0, Ek.e)(Wd, Kd)
            }), !Ld && Qd]
          }), Ld && (0, rd.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [Qd, "shared" === Zd && (0, rd.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: Cd("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }

    function uk(dd) {
      let {
        progress: Jd,
        goal: kd
      } = dd;
      const pd = Math.min(Jd, kd);
      return (0, rd.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, rd.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": kd,
          "aria-valuenow": pd,
          children: (0, rd.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${pd/kd})`
            }
          })
        }), (0, rd.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [pd, "/", kd]
        })]
      })
    }

    function tk(dd) {
      return {
        translationKey: `plotsGame:${dd}`,
        actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
      }
    }
    const Vk = {
      house: {
        icon: "house",
        titleKey: "plotsGame:starterLotHouseTitle",
        desktop: tk("starterLotHouseHint", ["alt-fire"]),
        touch: tk("starterLotHouseHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotHousePlain"
      },
      garden: {
        icon: "sparkle",
        titleKey: "plotsGame:starterLotGarden",
        desktop: tk("starterLotGardenHint", ["alt-fire"]),
        touch: tk("starterLotGardenHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotGardenPlain"
      },
      boulder: {
        icon: "hammer",
        titleKey: "plotsGame:starterLotBoulder",
        desktop: tk("starterLotBreakHint", ["primary-fire"]),
        touch: tk("starterLotBreakHintTouch"),
        plainKey: "plotsGame:starterLotBreakPlain"
      },
      fly: {
        icon: "angles-up",
        titleKey: "plotsGame:starterLotFly",
        desktop: tk("starterLotFlyHint", ["jump"]),
        touch: tk("starterLotFlyHintTouch"),
        plainKey: "plotsGame:starterLotFlyPlain"
      },
      backpack: {
        icon: "backpack",
        titleKey: "plotsGame:starterLotBackpack",
        desktop: tk("starterLotBackpackHint", ["OpenInventory"]),
        touch: tk("starterLotBackpackHintTouch"),
        plainKey: "plotsGame:starterLotBackpackPlain"
      },
      neighbour: {
        icon: "person",
        titleKey: "plotsGame:starterLotNeighbour",
        desktop: tk("starterLotNeighbourHint", ["forward", "left", "backward", "right"]),
        touch: tk("starterLotNeighbourHintTouch"),
        plainKey: "plotsGame:starterLotNeighbourPlain"
      }
    };

    function zk(dd, Jd, kd) {
      const {
        translationKey: pd,
        actions: Nd
      } = kd ? Jd.touch : Jd.desktop;
      if (0 === Nd.length) return dd(pd);
      const Wd = [];
      for (const Pd of Nd) {
        const pd = (0, ak.u)(Pd, kd),
          Nd = ak.x[Pd][0];
        if (null === pd && void 0 === Nd) return dd(Jd.plainKey);
        Wd.push(null === pd ? (0, ak.s)(Nd) : dd(pd.translationKey))
      }
      return dd(pd, {
        key: Wd.join("")
      })
    }

    function Hk(dd) {
      let {
        hud: Jd
      } = dd;
      const kd = (0, Fd.i)(KJ, Jd.getStep()),
        {
          t: pd
        } = (0, md.B)();
      return (0, rd.jsxs)(ZJ.g, {
        placement: "bottom",
        children: ["step" === kd[0] && (0, rd.jsx)(wk, {
          step: kd[1],
          progress: kd[2],
          goal: kd[3]
        }, kd[1]), "celebrate" === kd[0] && (0, rd.jsx)(Ak, {
          className: qd()("Celebrate", {
            Gold: "house" === kd[1]
          }),
          icon: "star",
          title: pd("house" === kd[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
        }, `celebrate-${kd[1]}`)]
      })
    }

    function wk(dd) {
      let {
        step: Jd,
        progress: kd,
        goal: pd
      } = dd;
      const {
        isTouchScreen: Nd
      } = (0, Zd.j)(["isTouchScreen"]), {
        t: Wd
      } = (0, md.B)(), Pd = Vk[Jd];
      return (0, rd.jsxs)(Ak, {
        icon: Pd.icon,
        title: Wd(Pd.titleKey),
        children: [(0, rd.jsx)("div", {
          className: "PlotsStepCardHint SmallTextLight",
          children: zk(Wd, Pd, Nd)
        }), pd > 1 && (0, rd.jsx)(uk, {
          progress: kd,
          goal: pd
        }), "backpack" === Jd && Nd && (0, rd.jsx)(dp, {})]
      })
    }

    function Ak(dd) {
      let {
        className: Jd,
        icon: kd,
        title: pd,
        children: Nd
      } = dd;
      return (0, rd.jsxs)("div", {
        className: qd()("PlotsStepCard", Jd),
        role: "status",
        children: [(0, rd.jsx)("span", {
          className: "PlotsStepCardIcon",
          children: (0, rd.jsx)(Bd.e, {
            name: kd
          })
        }), (0, rd.jsxs)("div", {
          className: "PlotsStepCardBody",
          children: [(0, rd.jsx)("div", {
            className: "PlotsStepCardTitle SmallTextBold",
            children: pd
          }), Nd]
        })]
      })
    }

    function dp() {
      return (0, Wd.useEffect)((() => (Zd.d.set({
        backpackPointerRequested: !0
      }), () => {
        Zd.d.set({
          backpackPointerRequested: !1
        })
      })), []), null
    }
    const Jp = function(dd, Jd, kd, pd) {
      let {
        localPlayerId: Nd
      } = pd;
      const Zd = new lJ;
      let gd = null,
        Cd = null,
        Kd = null,
        od = null,
        ld = null;
      const Qd = [];
      return {
        onCreate: dd => {
          gd = new ik(dd, Nd), Cd = new Ck(dd, Nd, gd), Kd = new Ck(dd, Nd, gd), od = new Gk(dd, Nd), ld = new vd(dd, od), Qd.push((0, Pd.w)((0, Wd.createElement)(Wd.Fragment, null, (0, Wd.createElement)(hk, {
            hud: Zd
          }), (0, Wd.createElement)(Hk, {
            hud: Zd
          }), (0, Wd.createElement)(LJ, {
            hud: Zd,
            journal: ld
          }), (0, Wd.createElement)(fk, {
            placement: od
          }), (0, Wd.createElement)(mk, {
            placement: od
          })), {
            content: (0, Wd.createElement)(WJ, {
              journal: ld
            })
          }))
        },
        Do: () => {
          Cd.Do(), Kd.Do(), od.Do(), ld.Do()
        },
        onPlayerAttemptAltAction: (dd, Jd, kd, pd, Nd, Wd) => {
          var Pd;
          if (null !== Wd) return;
          const Zd = void 0 === Jd ? null : [Jd, kd, pd];
          return null !== (Pd = Cd.attemptAltAction(Zd)) && void 0 !== Pd ? Pd : Kd.attemptAltAction(Zd)
        },
        onPlayerClickUp: () => {
          Cd.endPress(), Kd.endPress()
        },
        onAfterRender: (dd, Jd) => {
          od.afterRender(Jd), Cd.afterRender(Jd), Kd.afterRender(Jd)
        },
        onClose: () => {
          for (const dd of Qd) dd();
          gd.dispose(), Cd.dispose(), Kd.dispose(), od.dispose(), gd = null, Cd = null, Kd = null, od = null, ld = null
        },
        onReceivedMessageFromServer: (dd, Jd) => {
          if ("plotsStarterLot" === dd) Zd.receiveStep(Jd);
          else if ("plotsPlot" === dd) Zd.receivePlot(Jd);
          else if ("plotsStarterHouse" === dd) Cd.ZL(Jd);
          else if ("plotsBlueprint" === dd) {
            const dd = Jd;
            Kd.ZL(dd), od.ZL(dd)
          } else "plotsJournal" === dd ? ld.ZL(Jd) : "plotsJournalOpen" === dd ? ld.openFromServer() : "plotsPreviewEnd" === dd && od.endFromServer()
        }
      }
    }
  },
  39287: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd,
      g: () => Wd
    });
    const pd = 1 / .6,
      Nd = {
        kind: "smokePuff"
      };
    class Wd {
      constructor(dd, Jd, kd) {
        this.style = dd, this.oo = Jd, this.half = kd, this.particles = null, this.lastFrame = -1
      }
      emit(dd, Jd, kd) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return kd !== this.lastFrame && (this.lastFrame = kd, this.particles || (this.particles = dd.createParticles(function(dd, Jd) {
          const [
            [kd, Wd, Pd],
            [Zd, gd, Cd]
          ] = dd.colours;
          return {
            texture: dd.soft ? Nd : "square_particle",
            oo: Jd,
            minLifeTime: dd.life[0] / pd,
            maxLifeTime: dd.life[1] / pd,
            minEmitPower: dd.power[0] * pd,
            maxEmitPower: dd.power[1] * pd,
            minSize: dd.size[0],
            maxSize: dd.size[1],
            emitRate: 0,
            gravity: [0, dd.lift * pd * pd, 0],
            dir1: [-dd.spread, 1, -dd.spread],
            dir2: [dd.spread, 1, dd.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [kd, Wd, Pd, dd.alpha],
              maxColor: [Zd, gd, Cd, dd.alpha]
            }, {
              timeFraction: 1,
              minColor: [kd, Wd, Pd, 0],
              maxColor: [Zd, gd, Cd, 0]
            }],
            blendMode: dd.blendMode
          }
        }(this.style, this.oo), {
          pos: Jd,
          half: this.half
        })), this.particles.moveTo(Jd, this.half), this.particles.emit(Wd), !0)
      }
      dispose() {
        var dd;
        null === (dd = this.particles) || void 0 === dd || dd.stop(), this.particles = null
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);