export const id = 240;
export const ids = [240];
export const modules = {
  39227: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => Tl
    });
    const lT = [0, 90, 180, 270],
      MT = "plotsblueprint";
    var KT = cT(71),
      OT = cT(36423),
      yT = cT(31),
      fT = cT(1654),
      xT = cT(1741),
      IT = cT(36);
    const AT = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      CT = {
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
      jT = ["small", "medium", "large"].flatMap((TT => AT.flat().filter((kT => CT[kT].tier === TT))));

    function vT(TT) {
      return CT[TT]
    }
    const tT = new Map(AT.flatMap((TT => TT.slice(1).map(((kT, cT) => [kT, TT[cT]])))));

    function hT(TT) {
      var kT;
      return null !== (kT = tT.get(TT)) && void 0 !== kT ? kT : null
    }
    const NT = {
      farm_hut: "plotsGame:journalNoteFarmHut",
      rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
      castle_tower: "plotsGame:journalNoteCastleTower",
      farm_house: "plotsGame:journalNoteFarmHouse",
      farm_barn: "plotsGame:journalNoteFarmBarn"
    };

    function QT(TT, kT) {
      const cT = new Set(TT),
        lT = function(TT) {
          const kT = new Set(TT);
          return new Set(jT.filter((TT => {
            const cT = hT(TT);
            return null === cT || kT.has(cT)
          })))
        }(cT);
      return jT.map((TT => {
        const MT = TT === kT;
        return cT.has(TT) ? {
          id: TT,
          active: MT,
          state: "completed",
          unlockedBy: null
        } : lT.has(TT) ? {
          id: TT,
          active: MT,
          state: "open",
          unlockedBy: null
        } : {
          id: TT,
          active: MT,
          state: "locked",
          unlockedBy: hT(TT)
        }
      }))
    }
    const ST = "plotsJournalChanged";
    class DT {
      constructor(TT, kT) {
        this.api = TT, this.placement = kT, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.Yj("journal_opened")
        }, this.build = TT => {
          this.Yj("placement_started"), this.placement.start(TT), (0, OT.d)()
        }, this.putAway = () => {
          this.api.sendCommand(`${MT} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      Av(TT) {
        let [, kT, cT] = TT;
        this.pages = QT(kT, cT), IT.k.nt(ST, this.pages, !0)
      }
      openFromServer() {
        this.openRequested = !0, this.UA()
      }
      UA() {
        this.openRequested && !yT.e.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, fT.s)() || (0, xT.isTypingInInput)() || null !== this.placement.getView() || (0, OT.m)())
      }
      Yj(TT) {
        this.reported.has(TT) || (this.reported.add(TT), this.api.sendCommand(`${MT} report ${TT}`))
      }
    }
    var aT = cT(1046),
      FT = cT.n(aT),
      rT = cT(1061),
      PT = cT(1470),
      wT = cT(4515),
      mT = cT(3352),
      bT = cT(1461),
      zT = cT(1122),
      JT = cT(1195),
      oT = cT(9447);
    const HT = [0, 90, 180, 270],
      eT = /^(meta\|rot\d)\|([lrud]+)$/,
      GT = "nesw",
      VT = /^meta\|([nesw]*)\|?(Stacked)?$/,
      ET = function(TT) {
        const kT = new WeakMap;
        return (cT, lT) => {
          let MT = kT.get(cT);
          return void 0 === MT && (MT = TT(cT, lT), kT.set(cT, MT)), MT
        }
      }((TT => new ZT(TT)));
    class ZT {
      constructor(TT) {
        this.blockMetadata = TT, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const kT = new Set(Object.keys(TT).map((kT => TT[kT].id)));
        kT.add(0), this.maxBlockId = Math.max(...kT)
      }
      static
      for (TT) {
        return ET(TT)
      }
      getBlockIdMapping(TT, kT) {
        const cT = this.getBlockIdMappingKey(TT, kT);
        let lT = this.blockIdMappings.get(cT);
        return void 0 === lT && HT.includes(TT) && (lT = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, TT, kT), this.blockIdMappings.set(cT, lT)), lT
      }
      turnBlockId(TT, kT, cT) {
        return this.mapBlockId(this.blockMetadata[TT], kT, this.getRotationMapping(kT, cT), cT)
      }
      getBlockIdMappingKey(TT, kT) {
        return `r${TT}|m${Number(kT)}`
      }
      createBlockIdMapping(TT, kT, cT, lT) {
        const MT = new Uint16Array(kT + 1),
          KT = this.getRotationMapping(cT, lT);
        for (const OT in TT) {
          const kT = TT[OT];
          MT[kT.id] = this.mapBlockId(kT, cT, KT, lT)
        }
        return MT
      }
      getRotationMapping(TT, kT) {
        const cT = Math.round(TT / 90),
          lT = new Uint8Array(4);
        for (let MT = 0; MT < 4; MT++) lT[MT] = (4 + MT - cT) % 4;
        if (kT) {
          let TT = lT[0];
          lT[0] = lT[1], lT[1] = TT, TT = lT[2], lT[2] = lT[3], lT[3] = TT
        }
        return lT
      }
      mapBlockId(TT, kT, cT, lT) {
        var MT;
        const {
          blockMetadata: KT
        } = this, OT = Math.round(kT / 90), {
          id: yT,
          meta: fT
        } = TT, {
          rot: xT,
          rootName: IT,
          metaStr: AT
        } = fT;
        let CT;
        const [, jT, vT] = null !== (MT = VT.exec(AT)) && void 0 !== MT ? MT : [];
        if (void 0 !== jT) {
          var tT, hT;
          CT = null !== (tT = null === (hT = KT[`${IT}|meta|${[GT.split("").filter(((TT,kT)=>jT.split("").some((TT=>{const cT=GT.indexOf(TT);return((lT?3-cT:cT)+OT)%4===kT})))).join(""),vT].filter(Boolean).join("|")}`]) || void 0 === hT ? void 0 : hT.id) && void 0 !== tT ? tT : yT
        } else if (null === xT) CT = yT;
        else {
          var NT, QT;
          const TT = cT[xT - 1] + 1;
          let kT = AT.replace(`rot${xT}`, `rot${TT}`);
          lT && fT.stairsCorner && (kT = kT.replace(/(Left|Right)$/, (TT => "Left" === TT ? "Right" : "Left"))), lT && "Chest" === IT && (kT = kT.replace(/\|(left|right)$/, ((TT, kT) => "left" === kT ? "|right" : "|left")));
          const MT = eT.exec(kT);
          if (lT && null !== MT) {
            const TT = "lrud".split("").filter((TT => MT[2].includes("l" === TT ? "r" : "r" === TT ? "l" : TT)));
            kT = `${MT[1]}|${TT.join("")}`
          }
          const OT = `${IT}|${kT}`;
          if (CT = null !== (NT = null === (QT = KT[OT]) || void 0 === QT ? void 0 : QT.id) && void 0 !== NT ? NT : null, null === CT) {
            const TT = KT[IT];
            CT = TT.rootMetaDesc === OT ? TT.id : yT
          }
        }
        return CT
      }
    }

    function uT(TT, kT, cT) {
      let {
        xRotationMappedOrigin: lT,
        shouldSwapXZ: MT
      } = cT;
      const KT = MT ? kT : TT;
      return null === lT ? KT : lT - KT
    }

    function XT(TT, kT, cT) {
      let {
        zRotationMappedOrigin: lT,
        shouldSwapXZ: MT
      } = cT;
      const KT = MT ? TT : kT;
      return null === lT ? KT : lT - KT
    }
    const dT = {
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
      LT = new Map;

    function RT(TT, kT) {
      const cT = `${TT}|${kT}`;
      let lT = LT.get(cT);
      if (void 0 === lT) {
        const {
          size: MT,
          palette: KT,
          layers: OT
        } = dT[TT], yT = 90 === kT || 270 === kT, [fT, xT] = yT ? [MT[2], MT[0]] : [MT[0], MT[2]], IT = function(TT, kT, cT) {
          let lT = null,
            MT = null,
            KT = !1;
          switch (TT) {
            case 0:
              break;
            case 90:
              lT = kT - 1, KT = !0;
              break;
            case 180:
              lT = kT - 1, MT = cT - 1;
              break;
            case 270:
              MT = cT - 1, KT = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${TT}`)
          }
          return {
            xRotationMappedOrigin: lT,
            zRotationMappedOrigin: MT,
            shouldSwapXZ: KT
          }
        }(kT, fT, xT), AT = ZT.for(oT.i), CT = KT.map((TT => (0, oT.g)(AT.turnBlockId((0, oT.l)(TT), kT, !1)))), jT = [];
        OT.forEach(((TT, kT) => {
          TT.split(" ").forEach(((TT, cT) => {
            for (let lT = 0; lT < TT.length; lT++)
              if ("." !== TT[lT]) {
                const MT = [uT(lT, cT, IT), kT, XT(lT, cT, IT)];
                jT.push({
                  offset: MT,
                  block: CT[TT.charCodeAt(lT) - "a".charCodeAt(0)]
                })
              }
          }))
        })), lT = {
          size: [fT, MT[1], xT],
          cells: jT
        }, LT.set(cT, lT)
      }
      return lT
    }
    const gT = {
      farm_hut: cT.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
      farm_house: cT.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
      farm_barn: cT.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
      rusticHome_tent: cT.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
      rusticHome_cabin: cT.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
      rusticHome_house: cT.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
      market_stand: cT.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
      market_stall: cT.p + "static/media/market_stall.9a562807f9dff591618a.webp",
      market_shop: cT.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
      castle_wall: cT.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
      castle_gate: cT.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
      castle_tower: cT.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
    };
    var UT = cT(1099);
    const YT = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function BT(TT) {
      let {
        page: kT,
        building: cT,
        onBuild: lT,
        onPutAway: MT
      } = TT;
      const {
        t: KT
      } = (0, JT.B)(), {
        displayName: OT,
        tier: yT
      } = vT(kT.id), fT = RT(kT.id, 0).cells.length, xT = NT[kT.id], IT = "locked" === kT.state, AT = cT ? PT.e : PT.m;
      return (0, UT.jsxs)("article", {
        className: FT()("PlotsJournalPage", {
          Locked: IT
        }),
        children: [(0, UT.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: KT(OT.translationKey)
        }), (0, UT.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [KT(YT[yT]), " \xb7 ", KT("plotsGame:journalBlocks", {
            blocks: String(fT)
          })]
        }), (0, UT.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [jT.map((TT => (0, UT.jsx)("img", {
            className: FT()({
              Shown: TT === kT.id
            }),
            src: gT[TT],
            alt: "",
            draggable: !1
          }, TT))), "completed" === kT.state && (0, UT.jsx)("span", {
            className: "PlotsJournalStamp",
            children: KT("plotsGame:journalBuilt")
          }), IT && (0, UT.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, UT.jsx)(rT.e, {
              name: "lock"
            })
          })]
        }), void 0 !== xT && "completed" !== kT.state && (0, UT.jsx)("p", {
          className: "PlotsJournalNote",
          children: KT(xT)
        }), (0, UT.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === kT.state && (0, UT.jsx)("p", {
            className: "PlotsJournalHint",
            children: KT("plotsGame:journalLocked", {
              name: KT(vT(kT.unlockedBy).displayName.translationKey)
            })
          }), kT.active && (0, UT.jsxs)(UT.Fragment, {
            children: [(0, UT.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: KT("plotsGame:journalBuilding")
            }), (0, UT.jsx)(PT.i, {
              onClick: MT,
              children: KT("plotsGame:journalPutAway")
            })]
          }), !IT && !kT.active && (0, UT.jsx)(AT, {
            onClick: () => {
              lT(kT.id)
            },
            children: KT("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function WT(TT) {
      let {
        className: kT,
        page: cT,
        hidden: lT,
        building: MT,
        journal: KT
      } = TT;
      return (0, UT.jsxs)("div", {
        ref: TT => {
          null !== TT && (TT.inert = lT)
        },
        className: FT()("PlotsJournalSide", kT),
        children: [void 0 !== cT && (0, UT.jsx)(BT, {
          page: cT,
          building: MT,
          onBuild: KT.build,
          onPutAway: KT.putAway
        }), void 0 === cT && (0, UT.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var nT = cT(339),
      pT = cT(1915);

    function iT(TT) {
      return Math.cos((0, pT.k)(TT))
    }

    function qT(TT) {
      return (0, pT.z)(Math.acos(nT.d.clamp(TT, -1, 1)))
    }

    function sT(TT, kT, cT, lT, MT) {
      const KT = Math.abs(kT - TT),
        OT = (0, pT.z)(MT / (cT * Math.abs(Math.sin((0, pT.k)(TT))))),
        yT = 450 * Math.min(1, KT / lT),
        fT = OT > 0 ? 3 * KT / OT : 1 / 0;
      return Math.round(Math.max(120, Math.min(yT, fT)))
    }
    class Tk {
      constructor() {
        this.samples = []
      }
      add(TT, kT) {
        for (this.samples.push({
            x: TT,
            at: kT
          }); kT - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const TT = this.samples[0],
          kT = this.samples[this.samples.length - 1];
        return kT.at > TT.at ? (kT.x - TT.x) / (kT.at - TT.at) : 0
      }
    }

    function kk(TT, kT) {
      return TT > kT && TT >= 600
    }

    function ck(TT) {
      return qT(new DOMMatrixReadOnly(getComputedStyle(TT).transform).m11)
    }

    function lk(TT, kT) {
      TT.style.transform = `rotateY(${-kT}deg)`, TT.classList.add("Turning")
    }

    function Mk(TT) {
      let {
        journal: kT
      } = TT;
      const {
        t: cT
      } = (0, JT.B)(), lT = (0, bT.i)(ST, kT.getPages()), MT = (0, zT.i)(kk), [yT, fT] = (0, KT.useState)((() => function(TT) {
        const kT = TT.findIndex((TT => TT.active));
        return -1 !== kT ? kT : Math.max(0, TT.findIndex((TT => "open" === TT.state)))
      }(lT))), IT = (0, KT.useRef)(null), AT = (0, KT.useRef)(null), CT = (0, KT.useRef)({
        Forward: null,
        Back: null
      }), jT = MT ? 2 : 1, vT = MT ? 180 : 90, tT = yT - yT % jT, hT = tT > 0, NT = tT + jT < lT.length, QT = (0, KT.useCallback)((() => {
        const TT = AT.current;
        return null === TT ? tT : (AT.current = null, TT.animation.cancel(), (kT = CT.current[TT.direction]).style.transform = "", kT.classList.remove("Turning"), null === TT.next ? tT : (fT(TT.next), TT.next));
        var kT
      }), [tT]), DT = (0, KT.useCallback)(((TT, kT, cT, lT) => {
        const MT = CT.current[TT],
          KT = ck(MT),
          OT = kT === ("Forward" === TT) ? vT : 0;
        lk(MT, OT);
        const yT = MT.animate([{
          transform: `rotateY(${-KT}deg)`
        }, {
          transform: `rotateY(${-OT}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : sT(KT, OT, MT.offsetWidth, vT, OT > KT ? -cT : cT),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        AT.current = {
          direction: TT,
          animation: yT,
          next: kT ? lT + ("Forward" === TT ? jT : -jT) : null
        }, yT.onfinish = () => {
          var TT;
          (null === (TT = AT.current) || void 0 === TT ? void 0 : TT.animation) === yT && QT()
        }
      }), [jT, vT, QT]), aT = (0, KT.useCallback)((TT => {
        if (null !== IT.current) return;
        const kT = QT();
        ("Forward" === TT ? kT + jT < lT.length : kT > 0) && DT(TT, !0, 0, kT)
      }), [QT, DT, jT, lT.length]);
      (0, KT.useEffect)((() => {
        kT.onOpened()
      }), [kT]), (0, KT.useEffect)((() => () => {
        var TT;
        null === (TT = AT.current) || void 0 === TT || TT.animation.cancel()
      }), []), (0, KT.useEffect)((() => {
        const TT = TT => {
          var kT;
          TT.pointerId !== (null === (kT = IT.current) || void 0 === kT ? void 0 : kT.pointerId) || IT.current.following || (IT.current = null)
        };
        return window.addEventListener("pointerup", TT), () => {
          window.removeEventListener("pointerup", TT)
        }
      }), []), (0, mT.e)((TT => ("ArrowLeft" === TT.code || "ArrowRight" === TT.code) && !(0, xT.isTypingInInput)()), (TT => {
        TT.stopPropagation(), aT("ArrowLeft" === TT.code ? "Back" : "Forward")
      }));
      const rT = (TT, kT, cT) => {
          const lT = function(TT, kT, cT, lT) {
            return (TT < 0 ? cT : lT) ? nT.d.clampAbs(TT, kT) : Math.sign(TT) * kT * (1 - 1 / (.55 * Math.abs(TT) / kT + 1))
          }(TT.base + cT, jT * TT.width, NT, hT);
          return "Forward" === kT ? Math.min(lT, 0) : Math.max(lT, 0)
        },
        oT = (TT, kT) => {
          const cT = IT.current;
          if (IT.current = null, null === cT.direction) return;
          cT.speed.add(TT, kT);
          const lT = cT.speed.get(),
            MT = rT(cT, cT.direction, TT - cT.x);
          DT(cT.direction, null !== function(TT, kT, cT, lT, MT) {
            if (Math.abs(kT) >= .3 ? Math.sign(kT) !== Math.sign(TT) : Math.abs(TT) < .5 * cT) return null;
            const KT = TT < 0 ? "Forward" : "Back";
            return ("Forward" === KT ? lT : MT) ? KT : null
          }(MT, lT, jT * cT.width, NT, hT), lT, tT)
        },
        HT = lT.some((TT => TT.active)),
        eT = (TT, cT, MT) => (0, UT.jsx)(WT, {
          className: TT,
          page: cT >= 0 && cT < lT.length ? lT[cT] : void 0,
          hidden: MT,
          building: HT,
          journal: kT
        });
      return (0, UT.jsx)(wT.c, {
        close: OT.f,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, UT.jsxs)("section", {
          className: FT()("PlotsJournal", {
            Spread: MT
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": cT("plotsGame:journalTitle"),
          children: [(0, UT.jsx)(PT.l, {
            className: "PlotsJournalClose",
            onClick: OT.f
          }), (0, UT.jsx)(Kk, {
            direction: "Back",
            disabled: !hT,
            onTurn: aT
          }), (0, UT.jsx)("div", {
            className: "PlotsJournalBookPages",
            onPointerDown: TT => {
              var kT;
              if (!TT.isPrimary || 0 !== TT.button || null !== AT.current && null !== TT.target.closest("button")) return;
              const cT = new Tk;
              cT.add(TT.clientX, TT.timeStamp);
              const lT = CT.current.Forward.offsetWidth,
                MT = AT.current;
              AT.current = null;
              let KT = 0;
              if (null !== MT) {
                const kT = CT.current[MT.direction],
                  cT = ck(kT);
                MT.animation.cancel(), lk(kT, cT), KT = function(TT, kT, cT, lT) {
                  return (TT < 0 ? cT : lT) ? TT : Math.sign(TT) * kT * (1 / (1 - Math.min(Math.abs(TT) / kT, .99)) - 1) / .55
                }(function(TT, kT, cT, lT) {
                  return cT * (iT(kT) - iT("Forward" === TT ? 0 : lT))
                }(MT.direction, cT, lT, vT), jT * lT, NT, hT), TT.currentTarget.setPointerCapture(TT.pointerId)
              }
              IT.current = {
                pointerId: TT.pointerId,
                x: TT.clientX,
                y: TT.clientY,
                base: KT,
                width: lT,
                following: null !== MT,
                direction: null !== (kT = null === MT || void 0 === MT ? void 0 : MT.direction) && void 0 !== kT ? kT : null,
                speed: cT
              }
            },
            onPointerMove: TT => {
              const kT = IT.current;
              if (null === kT || TT.pointerId !== kT.pointerId) return;
              if (0 === TT.buttons) return void oT(TT.clientX, TT.timeStamp);
              const cT = TT.clientX - kT.x;
              !kT.following && function(TT, kT) {
                return Math.abs(TT) > 8 && Math.abs(TT) > Math.abs(kT)
              }(cT, TT.clientY - kT.y) && (kT.following = !0, kT.direction = cT < 0 ? "Forward" : "Back", TT.currentTarget.setPointerCapture(TT.pointerId)), null !== kT.direction && (kT.speed.add(TT.clientX, TT.timeStamp), lk(CT.current[kT.direction], function(TT, kT, cT, lT) {
                const MT = cT * iT("Forward" === TT ? 0 : lT) + kT;
                return nT.d.clamp(qT(MT / cT), 0, lT)
              }(kT.direction, rT(kT, kT.direction, cT), kT.width, vT)))
            },
            onPointerUp: TT => {
              var kT;
              TT.pointerId === (null === (kT = IT.current) || void 0 === kT ? void 0 : kT.pointerId) && oT(TT.clientX, TT.timeStamp)
            },
            onPointerCancel: TT => {
              const kT = IT.current;
              TT.pointerId === (null === kT || void 0 === kT ? void 0 : kT.pointerId) && (IT.current = null, null !== kT.direction && DT(kT.direction, !1, 0, tT))
            },
            children: (0, UT.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [MT && eT("Left", tT - 2, !0), eT("Right", tT + 2 * jT - 1, !0), (0, UT.jsxs)("div", {
                ref: TT => {
                  CT.current.Back = TT
                },
                className: "PlotsJournalLeaf Back",
                children: [eT("Recto", tT - 1, !0), MT && eT("Verso", tT, !1)]
              }), (0, UT.jsxs)("div", {
                ref: TT => {
                  CT.current.Forward = TT
                },
                className: "PlotsJournalLeaf Forward",
                children: [eT("Recto", tT + jT - 1, !1), MT && eT("Verso", tT + jT, !0)]
              })]
            })
          }), (0, UT.jsx)(Kk, {
            direction: "Forward",
            disabled: !NT,
            onTurn: aT
          })]
        })
      })
    }

    function Kk(TT) {
      let {
        direction: kT,
        disabled: cT,
        onTurn: lT
      } = TT;
      const {
        t: MT
      } = (0, JT.B)();
      return (0, UT.jsx)("div", {
        className: FT()("PlotsJournalArrow", kT),
        children: (0, UT.jsx)(PT.e, {
          disabled: cT,
          ariaLabel: MT("Forward" === kT ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            lT(kT)
          },
          children: (0, UT.jsx)(rT.e, {
            name: "angle-up"
          })
        })
      })
    }
    var Ok = cT(36416),
      yk = cT(1943),
      fk = cT(2002);
    const xk = "plotsStepChanged",
      Ik = "plotsPlotChanged";
    class Ak {
      constructor() {
        this.step = ["none"], this.plot = ["none"]
      }
      getStep() {
        return this.step
      }
      receiveStep(TT) {
        this.step = TT, IT.k.nt(xk, TT, !0)
      }
      getPlot() {
        return this.plot
      }
      receivePlot(TT) {
        this.plot = TT, IT.k.nt(Ik, TT, !0)
      }
    }
    const Ck = "KeyJ";

    function jk(TT) {
      let {
        hud: kT,
        journal: cT
      } = TT;
      const lT = (0, bT.i)(ST, cT.getPages()),
        MT = (0, bT.i)(xk, kT.getStep()),
        {
          isTouchScreen: KT
        } = (0, yT.n)(["isTouchScreen"]),
        {
          t: IT
        } = (0, JT.B)(),
        AT = null !== lT && "none" === MT[0];
      return (0, mT.e)((TT => null !== lT && TT.code === Ck && !TT.repeat && !(0, xT.isTypingInInput)()), (TT => {
        (0, fT.D)(TT, AT, OT.m)
      })), AT ? (0, UT.jsx)(Ok.g, {
        placement: "topRight",
        children: (0, UT.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, UT.jsxs)("button", {
            type: "button",
            className: FT()("PlotsJournalButton SmallTextBold", {
              Touch: KT
            }),
            onClick: OT.m,
            children: [(0, UT.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, UT.jsx)(yk.d, {
                itemName: "Book",
                amount: 0
              })
            }), IT("plotsGame:journalButton"), !KT && (0, UT.jsx)(fk.b, {
              className: "PlotsJournalButtonKey",
              keyCode: Ck
            })]
          })
        })
      }) : null
    }
    var vk = cT(38251),
      tk = cT(38028),
      hk = cT(36756),
      Nk = cT(9485),
      Qk = cT(9503),
      Sk = cT(37669);
    const Dk = new Map([
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
      ak = [...hk.c.blockRemoveActionRoots, ...tk.c, ...Nk.f, "Board", "Code Block", "Custom Lobby Block"],
      Fk = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let rk = null;

    function Pk() {
      return rk ??= function() {
        const TT = wk(),
          kT = Math.max(...TT.map((TT => oT.i[TT].id))) + 1,
          cT = new Int32Array(kT),
          lT = new Int32Array(kT),
          MT = new Uint8Array(kT).fill(1),
          KT = new Uint8Array(kT),
          OT = new Uint8Array(kT),
          yT = new Array(kT).fill("Air"),
          fT = new Map,
          xT = TT => {
            let kT = fT.get(TT);
            return void 0 === kT && (kT = fT.size + 1, fT.set(TT, kT)), kT
          },
          IT = new Set(ak);
        for (const CT of TT) {
          var AT;
          const {
            id: TT,
            meta: kT,
            altActionable: fT,
            canBePlacedOver: jT
          } = oT.i[CT];
          cT[TT] = xT(mk(CT));
          const vT = kT.stairsCorner;
          if (null === vT) lT[TT] = cT[TT];
          else {
            const cT = vT.endsWith("Right");
            lT[TT] = xT(`${kT.rootName}|rot${cT?kT.rot%4+1:kT.rot}|${kT.halfblockPlacement}|${vT.replace("Right","Left")}`)
          }
          MT[TT] = jT ? 1 : 0, KT[TT] = fT || null !== kT.open || CT in Sk.c || IT.has(kT.rootName) || void 0 !== (0, tk.e)(kT.rootName) ? 1 : 0;
          const {
            rootName: tT
          } = kT;
          OT[TT] = null !== kT.open || tk.c.includes(tT) || tT.includes("Bookshelf") || tT.includes("Mailbox") ? 1 : 0, yT[TT] = null !== (AT = (0, vk.f)(TT)) && void 0 !== AT ? AT : tT
        }
        return {
          kinds: cT,
          shapes: lT,
          empty: MT,
          inUse: KT,
          ownAltActionMessage: OT,
          placingItems: yT
        }
      }(), rk
    }

    function wk() {
      return Object.keys(oT.i).filter((TT => oT.i[TT].name === TT))
    }

    function mk(TT) {
      var kT;
      const cT = oT.i[TT],
        {
          rootName: lT,
          rot: MT
        } = cT.meta,
        [, ...KT] = (null !== (kT = cT.rootMetaDesc) && void 0 !== kT ? kT : TT).split("|"),
        OT = KT.filter((TT => !("meta" === TT || Fk.test(TT) || (0, Qk.E)(cT) && /^[nesw]+$/.test(TT) || Nk.f.includes(lT) && /^[lrud]+$/.test(TT) || nT.G.includes(lT) && /^(left|right)$/.test(TT))));
      return [lT, ...OT].map((TT => "fenceGate" === cT.model && TT === `rot${MT}` ? "rot" + ((MT - 1) % 2 + 1) : TT)).join("|")
    }

    function bk(TT, kT) {
      const {
        kinds: cT,
        shapes: lT
      } = Pk();
      return cT[TT] === cT[kT] || lT[TT] === lT[kT]
    }

    function zk(TT) {
      return 1 === Pk().empty[TT]
    }

    function Jk(TT) {
      return Pk().placingItems[TT]
    }

    function Hk(TT) {
      return Dk.get(oT.i[TT].meta.rootName)
    }
    var ek = cT(9481),
      Gk = cT(9495);
    const Vk = [0, 0, 0, 1, 1, 1],
      Ek = (0, ek.b)([
        [2, 0, 2, 6, 6, 6]
      ]),
      Zk = (0, ek.b)([
        [3, 0, 3, 5, 5, 5]
      ]),
      uk = (0, ek.b)([
        [3, 3, 3, 5, 8, 5]
      ]),
      Xk = [0, 1, 2, 3].map((TT => (0, ek.b)((0, ek.l)([
        [3, 2, 0, 5, 7, 3]
      ], TT))));

    function dk(TT) {
      const {
        kh: kT,
        model: cT,
        blockModel: lT,
        meta: MT
      } = oT.i[TT];
      return void 0 !== kT ? kT : "CentreCross" === cT ? Ek : null !== lT && void 0 !== lT && lT.startsWith("torch") ? MT.halfblockPlacement === Gk.c.side ? Xk[MT.rot - 1] : MT.halfblockPlacement === Gk.c.top ? uk : Zk : Vk
    }
    var Lk = cT(36725),
      Rk = cT(218);

    function gk(TT, kT) {
      const cT = Rk.f.Ow / 2;
      return TT[0] < kT[0] + cT && TT[0] + 1 > kT[0] - cT && TT[1] < kT[1] + Rk.f.Iw && TT[1] + 1 > kT[1] && TT[2] < kT[2] + cT && TT[2] + 1 > kT[2] - cT
    }

    function Uk(TT, kT, cT, lT, MT) {
      const KT = Math.hypot(...kT.dir);
      if (!Number.isFinite(KT) || 0 === KT) return -1;
      const {
        from: OT,
        reach: yT,
        solid: fT
      } = kT, xT = [kT.dir[0] / KT, kT.dir[1] / KT, kT.dir[2] / KT], IT = null === fT ? yT : Math.min(yT, function(TT, kT, cT) {
        const lT = Yk(TT, kT, cT);
        if (lT !== 1 / 0) return lT;
        return (cT[0] + .5 - TT[0]) * kT[0] + (cT[1] + .5 - TT[1]) * kT[1] + (cT[2] + .5 - TT[2]) * kT[2]
      }(OT, xT, fT) + .75);
      let AT = -1,
        CT = 1 / 0,
        jT = 1 / 0;
      for (let vT = 0; vT < TT.length; vT += 4) {
        const kT = [TT[vT], TT[vT + 1], TT[vT + 2]],
          KT = MT(vT) ? yT : IT;
        let fT = -1,
          tT = Yk(OT, xT, kT);
        if (tT > KT) {
          const TT = [kT[0] + .5 - OT[0], kT[1] + .5 - OT[1], kT[2] + .5 - OT[2]];
          if (tT = TT[0] * xT[0] + TT[1] * xT[1] + TT[2] * xT[2], tT <= 0 || tT > KT) continue;
          if (fT = Math.hypot(TT[0] - tT * xT[0], TT[1] - tT * xT[1], TT[2] - tT * xT[2]), fT > .7 || !lT(vT)) continue
        }(fT < CT || fT === CT && tT < jT) && cT(vT) && (AT = vT, CT = fT, jT = tT)
      }
      return AT
    }

    function Yk(TT, kT, cT) {
      let lT = 0,
        MT = 1 / 0;
      for (let KT = 0; KT < 3; KT++) {
        const OT = cT[KT] - TT[KT];
        if (0 === kT[KT]) {
          if (OT > 0 || OT + 1 < 0) return 1 / 0;
          continue
        }
        const yT = OT / kT[KT],
          fT = (OT + 1) / kT[KT];
        lT = Math.max(lT, Math.min(yT, fT)), MT = Math.min(MT, Math.max(yT, fT))
      }
      return lT <= MT ? lT : 1 / 0
    }
    var Bk = cT(37902),
      Wk = cT(38363);
    const nk = [1, 1, 1];
    class pk {
      constructor(TT) {
        this.api = TT, this.meshes = null, this.shown = null
      }
      show(TT) {
        if (!(0, Lk.c)(TT, this.shown))
          if (this.shown = null === TT ? null : [TT[0], TT[1], TT[2]], null !== this.meshes)
            for (const kT of this.meshes) this.api.setGameMesh(kT, null === TT ? {
              visible: !1
            } : {
              anchor: TT,
              visible: !0
            });
          else if (null !== TT) {
          const kT = [Bk.f, Bk.f, Bk.f, 0, 0, 0];
          this.meshes = [this.build([kT], Bk.j, TT), this.build((0, Bk.e)(), Bk.o, TT)]
        }
      }
      dispose() {
        for (const kT of null !== (TT = this.meshes) && void 0 !== TT ? TT : []) {
          var TT;
          this.api.disposeGameMesh(kT)
        }
        this.meshes = null, this.shown = null
      }
      build(TT, kT, cT) {
        const lT = [],
          MT = [];
        for (const [KT, OT, yT, fT, xT, IT] of TT)(0, Wk.d)(lT, MT, [fT + .5, xT + .5, IT + .5], [KT, OT, yT]);
        return this.api.createGameMesh({
          positions: lT,
          indices: MT
        }, {
          rgb: nk,
          alpha: kT,
          onTop: !0
        }, cT)
      }
    }
    class ik {
      constructor(TT) {
        this.api = TT, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(TT) {
        const kT = Rk.f.vv;
        this.chunks = [];
        for (let cT = 0; cT < TT.length; cT += 3) {
          const lT = Math.floor(TT[cT] / kT),
            MT = Math.floor(TT[cT + 1] / kT),
            KT = Math.floor(TT[cT + 2] / kT);
          this.watches(lT, MT, KT) || this.chunks.push(lT, MT, KT)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const TT = performance.now();
        if (TT - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = TT;
        let kT = !1;
        for (let cT = 0; cT < this.chunks.length; cT += 3) {
          const TT = this.api.getChunkVersion(this.chunks[cT], this.chunks[cT + 1], this.chunks[cT + 2]);
          this.versions[cT / 3] !== TT && (this.versions[cT / 3] = TT, kT = !0)
        }
        return kT
      }
      watches(TT, kT, cT) {
        for (let lT = 0; lT < this.chunks.length; lT += 3)
          if (this.chunks[lT] === TT && this.chunks[lT + 1] === kT && this.chunks[lT + 2] === cT) return !0;
        return !1
      }
    }
    const qk = .35,
      sk = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      Tc = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      kc = [.95, .2, .15];
    class cc {
      constructor() {
        this.groups = []
      }
      add(TT, kT, cT, lT, MT) {
        let KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Vk;
        for (const OT of this.groups)
          if (Kc(OT, lT, MT)) return OT.cells.push(TT, kT, cT), void OT.boxes.push(KT);
        this.groups.push({
          rgb: lT,
          look: MT,
          cells: [TT, kT, cT],
          boxes: [KT]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class lc {
      constructor(TT) {
        this.api = TT, this.shown = []
      }
      show(TT) {
        const kT = [];
        for (const cT of TT) {
          const TT = this.shown.findIndex((TT => {
            let {
              group: kT
            } = TT;
            return Kc(kT, cT.rgb, cT.look) && Oc(kT, cT)
          })); - 1 === TT ? kT.push(this.build(cT)) : (kT.push(this.shown[TT]), this.shown.splice(TT, 1))
        }
        this.dispose(), this.shown = kT
      }
      dispose() {
        for (const {
            meshes: TT
          }
          of this.shown)
          for (const kT of TT) this.api.disposeGameMesh(kT);
        this.shown = []
      }
      build(TT) {
        const {
          rgb: kT,
          look: cT,
          boxes: lT
        } = TT, MT = [kT[0] + (1 - kT[0]) * qk, kT[1] + (1 - kT[1]) * qk, kT[2] + (1 - kT[2]) * qk], KT = [this.buildMesh(TT.cells, kT, cT.alpha, ((TT, kT, MT, KT) => {
          Mc(TT, kT, MT, lT[KT], cT.size, !1)
        })), this.buildMesh(TT.cells, MT, cT.alpha, ((TT, kT, MT, KT) => {
          Mc(TT, kT, MT, lT[KT], cT.size, !0)
        }))];
        return cT.crossed && KT.push(this.buildMesh(TT.cells, kT, .9, ((TT, kT, lT) => {
          (0, Wk.f)(TT, kT, lT, cT.size + .01, .12)
        }))), {
          group: TT,
          meshes: KT
        }
      }
      buildMesh(TT, kT, cT, lT) {
        const MT = [TT[0], TT[1], TT[2]],
          KT = [],
          OT = [];
        for (let yT = 0; yT < TT.length; yT += 3) lT(KT, OT, [TT[yT] - MT[0] + .5, TT[yT + 1] - MT[1] + .5, TT[yT + 2] - MT[2] + .5], yT / 3);
        return this.api.createGameMesh({
          positions: KT,
          indices: OT
        }, {
          rgb: [kT[0], kT[1], kT[2]],
          alpha: cT
        }, MT)
      }
    }

    function Mc(TT, kT, cT, lT, MT, KT) {
      for (let OT = 0; OT < lT.length; OT += 6) {
        const yT = [0, 0, 0],
          fT = [0, 0, 0];
        for (let TT = 0; TT < 3; TT++) yT[TT] = cT[TT] + ((lT[OT + TT] + lT[OT + TT + 3]) / 2 - .5) * MT, fT[TT] = (lT[OT + TT + 3] - lT[OT + TT]) * MT;
        (0, Wk.c)(TT, kT, yT, fT, KT)
      }
    }

    function Kc(TT, kT, cT) {
      return TT.rgb[0] === kT[0] && TT.rgb[1] === kT[1] && TT.rgb[2] === kT[2] && TT.look === cT
    }

    function Oc(TT, kT) {
      if (TT.cells.length !== kT.cells.length) return !1;
      for (let cT = 0; cT < TT.cells.length; cT++)
        if (TT.cells[cT] !== kT.cells[cT]) return !1;
      return TT.boxes.every(((TT, cT) => TT === kT.boxes[cT]))
    }

    function yc(TT, kT) {
      return TT.getClientOption(kT, "blockReach") + 1
    }
    class fc {
      constructor(TT, kT, cT) {
        this.api = TT, this.localPlayerId = kT, this.pickNext = cT, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(TT) {
        const [kT, , cT] = TT.cameraDirection, lT = Math.hypot(kT, cT);
        lT > .001 && (this.heading = [kT / lT, cT / lT])
      }
      tapped(TT, kT, cT) {
        const lT = yc(this.api, this.localPlayerId),
          {
            origin: MT,
            direction: KT
          } = this.api.getActionRay(),
          OT = [...MT],
          yT = [
            [OT, [OT[0] + KT[0] * lT, OT[1] + KT[1] * lT, OT[2] + KT[2] * lT]]
          ];
        null !== TT && yT.push([OT, (0, Lk.b)(TT)]), this.tap = {
          lines: yT,
          next: kT,
          ms: cT
        }
      }
      filled(TT, kT) {
        this.tap = null, this.turnFrom(TT, kT), this.retry(kT)
      }
      arrived(TT, kT) {
        const {
          tap: cT
        } = this;
        if (null === cT || kT - cT.ms > 1500) return null;
        const lT = (0, Lk.b)(TT);
        return (0, Lk.c)(cT.next, TT) || cT.lines.some((TT => {
          let [kT, cT] = TT;
          return function(TT, kT, cT) {
            const lT = [cT[0] - kT[0], cT[1] - kT[1], cT[2] - kT[2]],
              MT = [TT[0] - kT[0], TT[1] - kT[1], TT[2] - kT[2]],
              KT = lT[0] ** 2 + lT[1] ** 2 + lT[2] ** 2,
              OT = 0 === KT ? 0 : Math.min(1, Math.max(0, (MT[0] * lT[0] + MT[1] * lT[1] + MT[2] * lT[2]) / KT));
            return Math.hypot(MT[0] - lT[0] * OT, MT[1] - lT[1] * OT, MT[2] - lT[2] * OT)
          }(lT, kT, cT) <= .9
        })) ? (this.tap = null, this.turnFrom(TT, kT), cT.ms) : null
      }
      turnFrom(TT, kT) {
        this.pending = {
          from: TT,
          ms: kT,
          turnMs: Math.max(50, Math.min(250, kT - this.lastFillMs))
        }, this.lastFillMs = kT
      }
      retry(TT) {
        const {
          pending: kT
        } = this;
        if (null === kT) return;
        if (TT - kT.ms > 1500) return void(this.pending = null);
        const cT = this.pickNext((0, Lk.b)(kT.from), (TT => (0, Lk.c)(TT, kT.from)));
        if (null === cT) return;
        this.pending = null;
        const {
          turning: lT
        } = this;
        if (null !== lT && TT < lT.endMs && (0, Lk.c)(lT.to, cT)) return;
        const MT = this.api.getActionRay().origin,
          KT = [cT[0] + .5 - MT[0], cT[1] + .5 - MT[1], cT[2] + .5 - MT[2]],
          OT = Math.hypot(KT[0], KT[2]);
        if (OT < .3) {
          const TT = Math.max(OT, .001);
          KT[0] = this.heading[0] * TT, KT[2] = this.heading[1] * TT
        }
        this.api.turnCamera(KT, kT.turnMs), this.turning = {
          to: cT,
          endMs: TT + kT.turnMs
        }
      }
    }
    class xc {
      constructor(TT, kT, cT) {
        this.api = TT, this.localPlayerId = kT, this.juice = cT, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], this.lastFilled = null, this.lastSeenFilled = null, this.playerCells = [], this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = null, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new ik(TT), this.meshes = new lc(TT), this.outline = new pk(TT), this.turn = new fc(TT, kT, ((TT, kT) => this.pickNext(TT, kT)))
      }
      Av(TT) {
        const kT = "active" === TT[0] ? `${TT[1]}|${TT[3]}|${TT[4]}|${TT[5]}|${TT[6]}` : "";
        if ("active" !== TT[0]) "built" === TT[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , cT, lT, MT, KT] = TT;
          kT !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = cT) : cT === this.layerY ? this.burstUnlisted(lT) : cT > this.layerY && this.finishLayer(cT), this.layerY = cT, this.layerCells.has(cT) || this.layerCells.set(cT, lT.filter(Ac)), this.ghostCells = lT, this.palette = MT, this.occupiedCells = KT
        }
        kT !== this.blueprint && (this.blueprint = kT, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((TT => this.api.blockNameToBlockId(TT))), this.chunkWatch.watch([...this.ghostCells.filter(Ac), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(TT) {
        this.burstUnlisted([]), TT > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = TT)
      }
      UA() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const TT = performance.now();
        let kT = !1;
        for (const [MT, KT] of this.foreseen) {
          var cT;
          if (TT - KT > 1e3) this.foreseen.delete(MT), kT = !0, (null === (cT = this.lastFilled) || void 0 === cT ? void 0 : cT.join()) === MT && (this.lastFilled = this.lastSeenFilled)
        }
        const lT = Ic(this.api.getPositionView(this.localPlayerId));
        (kT || lT.some(((TT, kT) => TT !== this.playerCells[kT]))) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(TT) {
        const kT = new Set;
        for (let MT = 0; MT < TT.length; MT += 4) kT.add(`${TT[MT]},${TT[MT+1]},${TT[MT+2]}`);
        const cT = [],
          {
            ghostCells: lT
          } = this;
        for (let MT = 0; MT < lT.length; MT += 4) {
          const TT = `${lT[MT]},${lT[MT+1]},${lT[MT+2]}`;
          !kT.has(TT) && this.open.delete(TT) && cT.push(this.filledCell(MT))
        }
        this.burst(cT)
      }
      refresh() {
        const {
          ghostCells: TT,
          palette: kT,
          occupiedCells: cT
        } = this, lT = new cc, MT = new Set, KT = [], OT = [];
        for (let yT = 0; yT < TT.length; yT += 4) {
          const [cT, fT, xT, IT] = [TT[yT], TT[yT + 1], TT[yT + 2], TT[yT + 3]], AT = this.api.getBlockId(cT, fT, xT), CT = `${cT},${fT},${xT}`, jT = bk(this.blockIds[IT], AT);
          !jT && zk(AT) ? lT.add(cT, fT, xT, Hk(kT[IT]), sk, dk(kT[IT])) : jT ? this.open.has(CT) && KT.push(this.filledCell(yT)) : lT.add(cT, fT, xT, kc, Tc), !jT && this.api.isBlockInLoadedChunk(cT, fT, xT) && (MT.add(CT), OT.push(cT, fT, xT, zk(AT) ? 0 : 1))
        }
        this.open = MT, this.nextCells = OT;
        for (let yT = 0; yT < cT.length; yT += 3) {
          const [TT, kT, MT] = [cT[yT], cT[yT + 1], cT[yT + 2]];
          zk(this.api.getBlockId(TT, kT, MT)) || lT.add(TT, kT, MT, kc, Tc)
        }
        this.meshes.show(lT.toArray()), this.burst(KT), this.showNext(), this.turn.retry(performance.now())
      }
      burst(TT) {
        const kT = performance.now(),
          cT = [];
        for (const [MT, KT, OT] of TT) {
          const TT = [MT, KT, OT];
          this.lastSeenFilled = TT, this.foreseen.delete(TT.join()) || cT.push(TT)
        }
        const lT = this.isHolding(kT);
        for (const MT of cT) {
          if (this.lastFilled = MT, lT && this.pressFilled) {
            this.turn.filled(MT, kT);
            continue
          }
          const TT = this.turn.arrived(MT, kT);
          if (null !== TT) {
            this.pressFilled = lT;
            for (const [kT, cT] of this.foreseen) cT <= TT && this.foreseen.delete(kT)
          }
        }
        this.juice.filled(TT)
      }
      showNext() {
        var TT;
        const kT = this.api.getPositionView(this.localPlayerId);
        this.playerCells.splice(0, 1 / 0, ...Ic(kT));
        const cT = this.lastFilled;
        this.nextCell = this.pickNext(null === cT ? [kT[0], kT[1] + 1, kT[2]] : (0, Lk.b)(cT), (() => !1)), this.outline.show(null !== (TT = this.aimed) && void 0 !== TT ? TT : this.nextCell)
      }
      pickNext(TT, kT) {
        const cT = this.api.getPositionView(this.localPlayerId),
          lT = [cT[0], cT[1] + Rk.f.Iw * Rk.f.playerEyeToHeightRatio, cT[2]],
          MT = yc(this.api, this.localPlayerId),
          {
            nextCells: KT
          } = this,
          OT = TT => [KT[TT], KT[TT + 1], KT[TT + 2]],
          yT = function(TT, kT, cT, lT, MT, KT) {
            let OT = -1,
              yT = -1,
              fT = 1 / 0;
            for (let xT = 0; xT < TT.length; xT += kT) {
              const kT = (KT(xT) ? 2 : 0) + (lT(xT) ? 1 : 0);
              if (kT < yT || MT(xT)) continue;
              const IT = (TT[xT] + .5 - cT[0]) ** 2 + (TT[xT + 1] + .5 - cT[1]) ** 2 + (TT[xT + 2] + .5 - cT[2]) ** 2;
              (kT > yT || IT < fT) && (OT = xT, yT = kT, fT = IT)
            }
            return OT
          }(KT, 4, TT, (TT => 1 === KT[TT + 3]), (TT => {
            const lT = OT(TT);
            return gk(lT, cT) || this.foreseen.has(lT.join()) || kT(lT)
          }), (TT => function(TT, kT, cT) {
            return (kT[0] + .5 - TT[0]) ** 2 + (kT[1] + .5 - TT[1]) ** 2 + (kT[2] + .5 - TT[2]) ** 2 <= cT ** 2
          }(lT, OT(TT), MT)));
        return -1 === yT ? null : OT(yT)
      }
      afterRender(TT) {
        var kT;
        this.turn.look(TT);
        const cT = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === cT ? null : cT.position), this.outline.show(null !== (kT = this.aimed) && void 0 !== kT ? kT : this.nextCell)
      }
      isHolding(TT) {
        return null !== this.altMs && TT - this.altMs <= 500
      }
      attemptAltAction(TT) {
        const kT = performance.now();
        if (this.isHolding(kT) || (this.pressFilled = !1), this.altMs = kT, this.pressFilled) return "preventPlacement";
        const cT = this.findAimed(TT);
        if (null !== cT) return this.foreseen.set(cT.join(), kT), this.lastFilled = cT, this.aimed = null, this.showNext(), this.turn.filled(cT, kT), this.pressFilled = !0, "preventPlacement";
        null !== this.nextCell && this.turn.tapped(TT, this.nextCell, kT)
      }
      findAimed(TT) {
        return function(TT, kT, cT, lT, MT, KT, OT) {
          const yT = TT.ckT(kT),
            fT = null === yT || null === TT.blockNameToBlockId(yT.name, !0) ? null : yT.name,
            xT = TT.getPositionView(kT),
            {
              origin: IT,
              direction: AT
            } = TT.getActionRay(),
            CT = Uk(lT, {
              from: IT,
              dir: AT,
              reach: yc(TT, kT),
              solid: cT
            }, (kT => {
              const cT = [lT[kT], lT[kT + 1], lT[kT + 2]];
              return !bk(MT[lT[kT + 3]], TT.getBlockId(...cT)) && !OT.has(cT.join()) && TT.isBlockInLoadedChunk(...cT) && !gk(cT, xT)
            }), (TT => null === fT || fT === Jk(MT[lT[TT + 3]])), (TT => null !== KT && lT[TT] === KT[0] && lT[TT + 1] === KT[1] && lT[TT + 2] === KT[2]));
          return -1 === CT ? null : [lT[CT], lT[CT + 1], lT[CT + 2]]
        }(this.api, this.localPlayerId, TT, this.ghostCells, this.blockIds, this.nextCell, this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(TT) {
        const {
          ghostCells: kT
        } = this, [cT, lT, MT] = Hk(this.palette[kT[TT + 3]]);
        return [kT[TT], kT[TT + 1], kT[TT + 2], cT, lT, MT]
      }
    }

    function Ic(TT) {
      let [kT, cT, lT] = TT;
      const MT = Rk.f.Ow / 2;
      return [Math.floor(kT), Math.floor(cT), Math.floor(lT), Math.floor(kT - MT), Math.floor(kT + MT), Math.floor(cT + Rk.f.Iw), Math.floor(lT - MT), Math.floor(lT + MT)]
    }

    function Ac(TT, kT) {
      return kT % 4 !== 3
    }

    function Cc(TT, kT, cT, lT, MT) {
      if (!TT.isBlockInLoadedChunk(kT, lT - 6, cT) || !TT.isBlockInLoadedChunk(kT, lT + 6 + MT, cT) || !TT.canModifyBlockAt(kT, lT, cT)) return NaN;
      let KT = lT - 1;
      if (0 !== TT.getBlockId(kT, KT, cT)) {
        for (; KT < lT + 6 && 0 !== TT.getBlockId(kT, KT + 1, cT);) KT++;
        return KT
      }
      for (; KT > lT - 6;)
        if (KT--, 0 !== TT.getBlockId(kT, KT, cT)) return KT;
      return NaN
    }

    function jc(TT, kT, cT, lT, MT) {
      let KT = 0;
      for (let OT = lT + 1; OT <= lT + MT; OT++) 0 !== TT.getBlockId(kT, OT, cT) && KT++;
      return KT
    }

    function vc(TT) {
      const kT = new Map;
      for (const OT of TT) {
        var cT;
        if (Number.isNaN(OT)) return null;
        kT.set(OT, (null !== (cT = kT.get(OT)) && void 0 !== cT ? cT : 0) + 1)
      }
      let lT = NaN,
        MT = 0;
      for (const [OT, yT] of kT)(yT > MT || yT === MT && OT < lT) && (lT = OT, MT = yT);
      let KT = 0;
      for (const OT of TT) KT += Math.abs(OT - lT);
      return KT
    }

    function tc(TT, kT, cT, lT) {
      const {
        eye: MT,
        forward: KT,
        tanHalfFovX: OT,
        tanHalfFovY: yT
      } = TT, [fT, xT] = function(TT) {
        let [kT, cT, lT] = TT;
        const MT = Math.hypot(kT, lT),
          [KT, OT] = [lT / MT, -kT / MT];
        return [
          [KT, 0, OT],
          [cT * OT, lT * KT - kT * OT, -cT * KT]
        ]
      }(KT), [IT, AT] = [kT * OT, cT * yT], CT = KT[0] + IT * fT[0] + AT * xT[0], jT = KT[1] + AT * xT[1], vT = KT[2] + IT * fT[2] + AT * xT[2], tT = (lT - MT[1]) / jT;
      return tT > 0 && tT < 1 / 0 ? [MT[0] + tT * CT, MT[2] + tT * vT] : null
    }
    const hc = "plotsBlueprintPlacementChanged",
      Nc = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class Qc {
      constructor(TT, kT) {
        this.api = TT, this.localPlayerId = kT, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = TT => {
          var kT, cT, lT, KT;
          const OT = null !== (kT = null === (cT = this.placing) || void 0 === cT ? void 0 : cT.rotation) && void 0 !== kT ? kT : 0,
            {
              size: yT
            } = RT(TT, OT),
            fT = this.api.kN(this.localPlayerId),
            [xT, IT] = null !== (lT = null !== (KT = function(TT, kT, cT) {
              const [lT, MT, KT] = kT, [OT, yT, fT] = [Math.floor(cT[0]), Math.floor(cT[1]), Math.floor(cT[2])], xT = 6 + Math.max(lT, KT) / 2, [IT, AT] = [Math.ceil(xT + lT / 2), Math.ceil(xT + KT / 2)], [CT, jT] = [OT - IT, fT - AT], [vT, tT] = [2 * IT + 1, 2 * AT + 1], hT = new Float64Array(vT * tT), NT = new Uint16Array(vT * tT);
              for (let aT = 0; aT < vT; aT++)
                for (let kT = 0; kT < tT; kT++) {
                  const cT = Cc(TT, CT + aT, jT + kT, yT, MT);
                  hT[aT * tT + kT] = cT, Number.isNaN(cT) || (NT[aT * tT + kT] = jc(TT, CT + aT, jT + kT, cT, MT))
                }
              const QT = [];
              let ST = null,
                DT = 1 / 0;
              for (let aT = 0; aT + lT <= vT; aT++)
                for (let TT = 0; TT + KT <= tT; TT++) {
                  const [kT, MT] = [CT + aT, jT + TT], yT = Math.hypot(kT + lT / 2 - cT[0], MT + KT / 2 - cT[2]);
                  if (yT > xT || OT >= kT - 2 && OT < kT + lT + 2 && fT >= MT - 2 && fT < MT + KT + 2) continue;
                  QT.length = 0;
                  let IT = 0;
                  for (let cT = 0; cT < lT; cT++)
                    for (let kT = 0; kT < KT; kT++) QT.push(hT[(aT + cT) * tT + TT + kT]), IT += NT[(aT + cT) * tT + TT + kT];
                  const AT = vc(QT);
                  if (null === AT) continue;
                  const vT = yT + 3 * (AT + IT);
                  vT < DT && (DT = vT, ST = [kT, MT])
                }
              return ST
            }(this.api, yT, fT)) && void 0 !== KT ? KT : this.cornerOnTarget(yT)) && void 0 !== lT ? lT : [Math.floor(fT[0]) + 2, Math.floor(fT[2])];
          this.placing = {
            id: TT,
            rotation: OT,
            corner: [xT, this.playerLevel(), IT],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null
          }, this.update(), this.api.sendCommand(`${MT} preview`)
        }, this.rotate = () => {
          const {
            id: TT,
            rotation: kT,
            corner: cT
          } = this.placing, MT = lT[(lT.indexOf(kT) + 1) % lT.length], [KT, , OT] = RT(TT, kT).size, [yT, , fT] = RT(TT, MT).size;
          this.moveTo(cT[0] + Math.floor(KT / 2) - Math.floor(yT / 2), cT[2] + Math.floor(OT / 2) - Math.floor(fT / 2), MT)
        }, this.hoverAt = (TT, kT) => {
          this.placing.hover = [TT, kT], this.moveCentreTo(this.camera, TT, kT)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (TT, kT) => {
          const cT = this.placing,
            {
              eye: lT,
              forward: MT,
              tanHalfFovX: KT,
              tanHalfFovY: OT
            } = this.camera,
            yT = {
              eye: [lT[0], lT[1], lT[2]],
              forward: [MT[0], MT[1], MT[2]],
              tanHalfFovX: KT,
              tanHalfFovY: OT
            },
            fT = cT.corner[1],
            xT = tc(yT, TT, kT, fT);
          cT.hover = null, cT.drag = xT && {
            view: yT,
            ground: xT,
            corner: [cT.corner[0], cT.corner[2]],
            level: fT
          }
        }, this.dragTo = (TT, kT) => {
          const cT = this.placing.drag,
            lT = cT && tc(cT.view, TT, kT, cT.level);
          null !== cT && null !== lT && this.moveTo(cT.corner[0] + Math.round(lT[0] - cT.ground[0]), cT.corner[1] + Math.round(lT[1] - cT.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const TT = this.view;
          TT.waiting || (TT.blocked ? this.nt({
            ...TT,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const TT = this.placing,
            {
              id: kT,
              rotation: cT,
              corner: lT
            } = TT;
          this.api.sendCommand(`${MT} place ${kT} ${lT.join(" ")} ${cT}`), TT.sent = {
            atMs: performance.now(),
            corner: [...lT],
            rotation: cT,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${MT} preview off`))
        }, this.chunkWatch = new ik(TT), this.meshes = new lc(TT)
      }
      getView() {
        return this.view
      }
      UA() {
        const TT = this.placing;
        null !== TT && (null !== TT.sent && !TT.sent.timedOut && performance.now() - TT.sent.atMs > 3e3 ? (TT.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(TT) || this.chunkWatch.changed()) && this.update())
      }
      afterRender(TT) {
        const kT = this.placing;
        null !== kT && (! function(TT, kT) {
          for (let cT = 0; cT < 3; cT++) kT.eye[cT] = TT.cameraPosition[cT], kT.forward[cT] = TT.cameraDirection[cT];
          kT.tanHalfFovX = TT.tanHalfFovX, kT.tanHalfFovY = TT.tanHalfFovY
        }(TT, this.camera), null !== kT.hover && this.moveCentreTo(this.camera, kT.hover[0], kT.hover[1]))
      }
      Av(TT) {
        const kT = this.placing;
        if (null === kT || null === kT.sent || "active" !== TT[0]) return;
        const {
          sent: cT
        } = kT, [, lT, MT, KT, OT, yT, fT] = TT;
        MT && lT === kT.id && fT === cT.rotation && KT === cT.corner[0] && OT === cT.corner[1] && yT === cT.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(TT) {
        let [kT, , cT] = TT;
        const lT = this.api.getTargetedBlock();
        if (null === lT) return null;
        const [MT, , KT] = lT.position;
        return [MT - Math.floor(kT / 2), KT - Math.floor(cT / 2)]
      }
      playerLevel() {
        var TT;
        const [kT, cT, lT] = this.api.kN(this.localPlayerId);
        if (null !== (TT = this.api.getLocalPlayerMovement()) && void 0 !== TT && TT.onGround) return Math.ceil(cT - .01);
        const [MT, KT, OT] = [Math.floor(kT), Math.floor(cT), Math.floor(lT)];
        for (let yT = KT; yT >= KT - 2; yT--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(MT, yT, OT))) return yT + 1;
        return KT
      }
      followPlayerLevel(TT) {
        if (Sc(TT)) return !1;
        const kT = this.playerLevel();
        return kT !== TT.corner[1] && (TT.corner[1] = kT, !0)
      }
      moveCentreTo(TT, kT, cT) {
        const lT = this.placing,
          MT = tc(TT, kT, cT, lT.corner[1]);
        if (null !== MT) {
          const [TT, , kT] = RT(lT.id, lT.rotation).size;
          this.moveTo(Math.round(MT[0] - TT / 2), Math.round(MT[1] - kT / 2))
        }
      }
      moveTo(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const lT = this.placing;
        if (Sc(lT)) return;
        const [MT, KT, OT] = lT.corner;
        if (this.centreOnPlot(MT, OT) && !this.centreOnPlot(TT, kT, cT))
          if (this.centreOnPlot(TT, OT, cT)) kT = OT;
          else {
            if (!this.centreOnPlot(MT, kT, cT)) return;
            TT = MT
          } TT === MT && kT === OT && cT === lT.rotation || (lT.rotation = cT, lT.corner = [TT, KT, kT], this.update())
      }
      centreOnPlot(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: lT,
          corner: MT
        } = this.placing, [KT, , OT] = RT(lT, cT).size;
        return this.api.canModifyBlockAt(TT + Math.floor(KT / 2), MT[1], kT + Math.floor(OT / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.nt(null)
      }
      update() {
        const {
          id: TT,
          rotation: kT,
          corner: cT,
          refusals: lT
        } = this.placing, MT = new cc, KT = [];
        let OT = !1,
          yT = 0;
        for (const {
            offset: IT,
            block: AT
          }
          of RT(TT, kT).cells) {
          const [TT, kT, lT] = [cT[0] + IT[0], cT[1] + IT[1], cT[2] + IT[2]];
          KT.push(TT, kT, lT);
          const fT = !this.api.canModifyBlockAt(TT, kT, lT),
            xT = this.api.getBlockId(TT, kT, lT),
            CT = !zk(xT) && !bk(this.api.blockNameToBlockId(AT), xT);
          OT ||= fT, yT += CT ? 1 : 0, fT || CT ? MT.add(TT, kT, lT, kc, Tc) : MT.add(TT, kT, lT, Hk(AT), Nc, dk(AT))
        }
        this.chunkWatch.watch(KT), this.meshes.show(MT.toArray());
        const fT = this.view,
          xT = Sc(this.placing);
        (null === fT || void 0 === fT ? void 0 : fT.id) === TT && fT.blocked === OT && fT.toClear === yT && fT.waiting === xT && fT.refusals === lT || this.nt({
          id: TT,
          blocked: OT,
          toClear: yT,
          waiting: xT,
          refusals: lT
        })
      }
      nt(TT) {
        this.view = TT, IT.k.nt(hc, TT, !0)
      }
    }

    function Sc(TT) {
      let {
        sent: kT
      } = TT;
      return null !== kT && !kT.timedOut
    }
    var Dc = cT(4235),
      ac = cT(38952);

    function Fc(TT, kT, cT) {
      const lT = [255 * TT, 255 * kT, 255 * cT],
        [MT, KT, OT] = lT.map((TT => TT + .4 * (255 - TT)));
      return {
        texture: "square_particle",
        DA: 48,
        minLifeTime: .3 / ac.b,
        maxLifeTime: .55 / ac.b,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * ac.b * ac.b, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...lT, 1],
          maxColor: [MT, KT, OT, 1]
        }, {
          timeFraction: 1,
          minColor: [...lT, 0],
          maxColor: [MT, KT, OT, 0]
        }],
        blendMode: Dc.f.Standard
      }
    }
    const rc = {
      texture: "glint",
      mipmaps: !1,
      DA: 96,
      minLifeTime: .5 / ac.b,
      maxLifeTime: .9 / ac.b,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * ac.b * ac.b, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: Dc.f.OneOne
    };
    class Pc {
      constructor(TT, kT) {
        this.api = TT, this.localPlayerId = kT, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(TT) {
        if (this.api.particlesEnabled())
          for (const [kT, cT, lT, MT, KT, OT] of TT.slice(0, 3)) {
            const TT = `${MT},${KT},${OT}`;
            let yT = this.chips.get(TT);
            void 0 === yT && (yT = this.api.createParticles(Fc(MT, KT, OT), {
              pos: [kT + .5, cT + .5, lT + .5]
            }), this.chips.set(TT, yT));
            for (let kT = 0; kT < 8; kT++) this.setPoint(kT, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            yT.emitPoints([kT + .5, cT + .5, lT + .5], this.points, 8)
          }
      }
      layerDone(TT) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const kT = TT.length / 3;
        if (0 === kT || !this.api.particlesEnabled()) return;
        const cT = Math.min(kT, 48),
          [lT, MT, KT] = [TT[0] + .5, TT[1] + 1, TT[2] + .5];
        let OT = 0;
        for (let yT = 0; yT < cT; yT++) {
          const fT = 3 * Math.floor(yT * kT / cT);
          for (let kT = 0; kT < 2; kT++) this.setPoint(OT++, TT[fT] + Math.random() - lT, TT[fT + 1] + 1 - MT, TT[fT + 2] + Math.random() - KT, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(rc, {
          pos: [lT, MT, KT]
        }), this.sparkles.emitPoints([lT, MT, KT], this.points, OT)
      }
      dispose() {
        var TT;
        for (const kT of this.chips.values()) kT.stop();
        this.chips.clear(), null === (TT = this.sparkles) || void 0 === TT || TT.stop(), this.sparkles = null
      }
      setPoint(TT, kT, cT, lT, MT) {
        const KT = 4 * TT;
        this.points[KT] = kT, this.points[KT + 1] = cT, this.points[KT + 2] = lT, this.points[KT + 3] = MT
      }
    }
    var wc = cT(2009);
    const mc = "SpecialAction1",
      bc = "KeyY",
      zc = "KeyX";

    function Jc(TT) {
      let {
        placement: kT
      } = TT;
      const cT = (0, bT.i)(hc, kT.getView()),
        {
          t: lT
        } = (0, JT.B)(),
        {
          isTouchScreen: MT
        } = (0, yT.n)(["isTouchScreen"]),
        KT = null !== cT,
        OT = KT && !cT.blocked && !cT.waiting;
      if ((0, mT.e)((TT => KT && !TT.repeat && !(0, xT.isTypingInInput)() && !(0, fT.s)() && !MT), (TT => {
          const cT = function(TT, kT, cT) {
            if (TT === zc) return kT.stop;
            if (TT === bc) return cT ? kT.build : Hc;
            return wc.y[mc].includes(TT) ? kT.rotate : null
          }(TT.code, kT, OT);
          null !== cT && (TT.stopPropagation(), cT())
        })), !KT) return null;
      let IT = MT ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return cT.blocked ? IT = "plotsGame:placementOffPlot" : cT.toClear > 0 && (IT = "plotsGame:placementClear"), (0, UT.jsx)(Ok.g, {
        placement: "bottom",
        children: (0, UT.jsxs)("div", {
          className: "PlotsPlacementCard",
          children: [(0, UT.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: lT(vT(cT.id).displayName.translationKey)
          }), (0, UT.jsx)("div", {
            className: FT()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: cT.refusals > 0
            }),
            children: lT(IT)
          }, cT.refusals), (0, UT.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, UT.jsxs)(PT.e, {
              onClick: kT.rotate,
              children: [(0, UT.jsx)(oc, {
                noaAction: mc
              }), lT("plotsGame:placementRotate")]
            }), (0, UT.jsxs)(PT.I, {
              onClick: kT.stop,
              children: [(0, UT.jsx)(oc, {
                keyCode: zc
              }), lT("general:cancel")]
            }), (0, UT.jsxs)(PT.m, {
              disabled: !OT,
              onClick: kT.build,
              children: [(0, UT.jsx)(oc, {
                keyCode: bc
              }), lT("plotsGame:placementBuild")]
            })]
          })]
        })
      })
    }

    function oc(TT) {
      return (0, UT.jsx)(fk.b, {
        className: "PlotsPlacementKey",
        ...TT
      })
    }

    function Hc() {}
    var ec = cT(4528);
    class Gc {
      constructor(TT) {
        this.placement = TT, this.press = null
      }
      down(TT) {
        if (null !== this.press) return !1;
        const {
          id: kT,
          mouse: cT,
          x: lT,
          y: MT,
          atMs: KT
        } = TT;
        return this.press = {
          id: kT,
          mouse: cT,
          x: lT,
          y: MT,
          atMs: KT,
          moved: !1
        }, cT || this.placement.beginDrag(TT.ndcX, TT.ndcY), !0
      }
      move(TT) {
        const kT = this.press;
        null !== kT && kT.id === TT.id && (kT.moved ||= Math.hypot(TT.x - kT.x, TT.y - kT.y) > 8), TT.mouse ? this.placement.hoverAt(TT.ndcX, TT.ndcY) : (null === kT || void 0 === kT ? void 0 : kT.id) === TT.id && this.placement.dragTo(TT.ndcX, TT.ndcY)
      }
      up(TT) {
        const kT = this.press;
        (null === kT || void 0 === kT ? void 0 : kT.id) === TT.id && (this.move(TT), this.end(), !kT.moved && (kT.mouse || TT.atMs - kT.atMs <= 250) && this.placement.tap())
      }
      cancel(TT) {
        var kT;
        (null === (kT = this.press) || void 0 === kT ? void 0 : kT.id) === TT && this.end()
      }
      leave(TT) {
        let {
          id: kT,
          mouse: cT
        } = TT;
        cT && this.placement.endHover(), this.cancel(kT)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }

    function Vc(TT) {
      let {
        placement: kT
      } = TT;
      return null === (0, bT.i)(hc, kT.getView()) ? null : (0, UT.jsx)(Ec, {
        placement: kT
      })
    }

    function Ec(TT) {
      let {
        placement: kT
      } = TT;
      (0, ec.c)(!0, !0, "PlotsPlacementLayer");
      const cT = (0, KT.useMemo)((() => new Gc(kT)), [kT]);
      return (0, UT.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: TT => {
          "mouse" === TT.pointerType && 0 !== TT.button || !cT.down(Zc(TT)) || TT.currentTarget.setPointerCapture(TT.pointerId)
        },
        onPointerMove: TT => {
          cT.move(Zc(TT))
        },
        onPointerUp: TT => {
          cT.up(Zc(TT))
        },
        onPointerCancel: TT => {
          cT.cancel(TT.pointerId)
        },
        onLostPointerCapture: TT => {
          cT.cancel(TT.pointerId)
        },
        onPointerLeave: TT => {
          cT.leave(Zc(TT))
        },
        "aria-hidden": !0
      })
    }

    function Zc(TT) {
      const {
        left: kT,
        top: cT,
        width: lT,
        height: MT
      } = TT.currentTarget.getBoundingClientRect();
      return {
        id: TT.pointerId,
        mouse: "mouse" === TT.pointerType,
        x: TT.clientX,
        y: TT.clientY,
        ndcX: (TT.clientX - kT) / lT * 2 - 1,
        ndcY: 1 - (TT.clientY - cT) / MT * 2,
        atMs: TT.timeStamp
      }
    }
    var uc = cT(2408),
      Xc = cT(36506),
      dc = cT(1996),
      Lc = cT(1274);
    const Rc = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function gc(TT) {
      let {
        hud: kT
      } = TT;
      const cT = (0, bT.i)(Ik, kT.getPlot()),
        [lT, MT] = (0, KT.useState)(null),
        OT = (0, Xc.m)(lT);
      if ("none" === cT[0]) return null;
      const [, yT, fT, xT, IT, AT] = cT;
      return (0, UT.jsx)("div", {
        className: FT()("PlotsPlotBannerContainer", {
          Below: OT
        }),
        children: (0, UT.jsx)(Uc, {
          plotX: yT,
          plotZ: fT,
          ownerName: xT,
          ownerId: IT,
          relation: AT,
          plaqueRef: MT
        }, `${yT},${fT}`)
      })
    }

    function Uc(TT) {
      var kT, cT;
      let {
        plotX: lT,
        plotZ: MT,
        ownerName: KT,
        ownerId: OT,
        relation: yT,
        plaqueRef: fT
      } = TT;
      const {
        t: xT
      } = (0, JT.B)(), IT = (0, dc.h)("hiddenPlayerNames"), AT = (0, dc.h)("players"), CT = null === OT ? null : null !== (kT = null === (cT = AT.byId[OT]) || void 0 === cT ? void 0 : cT.cosmetics) && void 0 !== kT ? kT : null, jT = xT("plotsGame:plotBannerCoords", {
        x: lT,
        z: MT
      }), vT = "own" === yT || null !== KT;
      return (0, UT.jsxs)("div", {
        ref: fT,
        className: FT()("PlotsPlotBanner", {
          Own: "own" === yT,
          Shared: "shared" === yT
        }),
        role: "status",
        children: [(0, UT.jsxs)("span", {
          className: FT()("PlotsPlotBannerSeal", {
            Face: null !== CT
          }),
          children: [null !== CT && (0, UT.jsx)(uc.e, {
            cosmetics: CT
          }), null === CT && (0, UT.jsx)(rT.e, {
            name: Rc[yT]
          })]
        }), (0, UT.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, UT.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === yT && xT("plotsGame:plotBannerYours"), "own" !== yT && null !== KT && xT("plotsGame:plotBannerOwner", {
              name: (0, Lc.f)(KT, IT)
            }), !vT && jT]
          }), vT && (0, UT.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [jT, "shared" === yT && (0, UT.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: xT("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }

    function Yc(TT) {
      let {
        progress: kT,
        goal: cT
      } = TT;
      const lT = Math.min(kT, cT);
      return (0, UT.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, UT.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": cT,
          "aria-valuenow": lT,
          children: (0, UT.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${lT/cT})`
            }
          })
        }), (0, UT.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [lT, "/", cT]
        })]
      })
    }

    function Bc(TT) {
      return {
        translationKey: `plotsGame:${TT}`,
        actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
      }
    }
    const Wc = {
      house: {
        icon: "house",
        titleKey: "plotsGame:starterLotHouseTitle",
        desktop: Bc("starterLotHouseHint", ["alt-fire"]),
        touch: Bc("starterLotHouseHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotHousePlain"
      },
      garden: {
        icon: "sparkle",
        titleKey: "plotsGame:starterLotGarden",
        desktop: Bc("starterLotGardenHint", ["alt-fire"]),
        touch: Bc("starterLotGardenHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotGardenPlain"
      },
      boulder: {
        icon: "hammer",
        titleKey: "plotsGame:starterLotBoulder",
        desktop: Bc("starterLotBreakHint", ["primary-fire"]),
        touch: Bc("starterLotBreakHintTouch"),
        plainKey: "plotsGame:starterLotBreakPlain"
      },
      fly: {
        icon: "angles-up",
        titleKey: "plotsGame:starterLotFly",
        desktop: Bc("starterLotFlyHint", ["jump"]),
        touch: Bc("starterLotFlyHintTouch"),
        plainKey: "plotsGame:starterLotFlyPlain"
      },
      backpack: {
        icon: "backpack",
        titleKey: "plotsGame:starterLotBackpack",
        desktop: Bc("starterLotBackpackHint", ["OpenInventory"]),
        touch: Bc("starterLotBackpackHintTouch"),
        plainKey: "plotsGame:starterLotBackpackPlain"
      },
      neighbour: {
        icon: "person",
        titleKey: "plotsGame:starterLotNeighbour",
        desktop: Bc("starterLotNeighbourHint", ["forward", "left", "backward", "right"]),
        touch: Bc("starterLotNeighbourHintTouch"),
        plainKey: "plotsGame:starterLotNeighbourPlain"
      }
    };

    function nc(TT, kT, cT) {
      const {
        translationKey: lT,
        actions: MT
      } = cT ? kT.touch : kT.desktop;
      if (0 === MT.length) return TT(lT);
      const KT = [];
      for (const OT of MT) {
        const lT = (0, wc.w)(OT, cT),
          MT = wc.y[OT][0];
        if (null === lT && void 0 === MT) return TT(kT.plainKey);
        KT.push(null === lT ? (0, wc.q)(MT) : TT(lT.translationKey))
      }
      return TT(lT, {
        key: KT.join("")
      })
    }

    function pc(TT) {
      let {
        hud: kT
      } = TT;
      const cT = (0, bT.i)(xk, kT.getStep()),
        {
          t: lT
        } = (0, JT.B)();
      return (0, UT.jsxs)(Ok.g, {
        placement: "bottom",
        children: ["step" === cT[0] && (0, UT.jsx)(ic, {
          step: cT[1],
          progress: cT[2],
          goal: cT[3]
        }, cT[1]), "celebrate" === cT[0] && (0, UT.jsx)(qc, {
          className: FT()("Celebrate", {
            Gold: "house" === cT[1]
          }),
          icon: "star",
          title: lT("house" === cT[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
        }, `celebrate-${cT[1]}`)]
      })
    }

    function ic(TT) {
      let {
        step: kT,
        progress: cT,
        goal: lT
      } = TT;
      const {
        isTouchScreen: MT
      } = (0, yT.n)(["isTouchScreen"]), {
        t: KT
      } = (0, JT.B)(), OT = Wc[kT];
      return (0, UT.jsxs)(qc, {
        icon: OT.icon,
        title: KT(OT.titleKey),
        children: [(0, UT.jsx)("div", {
          className: "PlotsStepCardHint SmallTextLight",
          children: nc(KT, OT, MT)
        }), lT > 1 && (0, UT.jsx)(Yc, {
          progress: cT,
          goal: lT
        }), "backpack" === kT && MT && (0, UT.jsx)(sc, {})]
      })
    }

    function qc(TT) {
      let {
        className: kT,
        icon: cT,
        title: lT,
        children: MT
      } = TT;
      return (0, UT.jsxs)("div", {
        className: FT()("PlotsStepCard", kT),
        role: "status",
        children: [(0, UT.jsx)("span", {
          className: "PlotsStepCardIcon",
          children: (0, UT.jsx)(rT.e, {
            name: cT
          })
        }), (0, UT.jsxs)("div", {
          className: "PlotsStepCardBody",
          children: [(0, UT.jsx)("div", {
            className: "PlotsStepCardTitle SmallTextBold",
            children: lT
          }), MT]
        })]
      })
    }

    function sc() {
      return (0, KT.useEffect)((() => (yT.e.set({
        backpackPointerRequested: !0
      }), () => {
        yT.e.set({
          backpackPointerRequested: !1
        })
      })), []), null
    }
    const Tl = function(TT, kT, cT, lT) {
      let {
        localPlayerId: MT
      } = lT;
      const yT = new Ak;
      let fT = null,
        xT = null,
        IT = null,
        AT = null,
        CT = null;
      const jT = [];
      return {
        onCreate: TT => {
          fT = new Pc(TT, MT), xT = new xc(TT, MT, fT), IT = new xc(TT, MT, fT), AT = new Qc(TT, MT), CT = new DT(TT, AT), jT.push((0, OT.q)((0, KT.createElement)(KT.Fragment, null, (0, KT.createElement)(gc, {
            hud: yT
          }), (0, KT.createElement)(pc, {
            hud: yT
          }), (0, KT.createElement)(jk, {
            hud: yT,
            journal: CT
          }), (0, KT.createElement)(Vc, {
            placement: AT
          }), (0, KT.createElement)(Jc, {
            placement: AT
          })), {
            content: (0, KT.createElement)(Mk, {
              journal: CT
            })
          }))
        },
        UA: () => {
          xT.UA(), IT.UA(), AT.UA(), CT.UA()
        },
        onPlayerAttemptAltAction: (TT, kT, cT, lT, MT, KT) => {
          var OT;
          if (null !== KT) return;
          const yT = void 0 === kT ? null : [kT, cT, lT];
          return null !== (OT = xT.attemptAltAction(yT)) && void 0 !== OT ? OT : IT.attemptAltAction(yT)
        },
        onPlayerClickUp: () => {
          xT.endPress(), IT.endPress()
        },
        onAfterRender: (TT, kT) => {
          AT.afterRender(kT), xT.afterRender(kT), IT.afterRender(kT)
        },
        onClose: () => {
          for (const TT of jT) TT();
          fT.dispose(), xT.dispose(), IT.dispose(), AT.dispose(), fT = null, xT = null, IT = null, AT = null, CT = null
        },
        onReceivedMessageFromServer: (TT, kT) => {
          if ("plotsStarterLot" === TT) yT.receiveStep(kT);
          else if ("plotsPlot" === TT) yT.receivePlot(kT);
          else if ("plotsStarterHouse" === TT) xT.Av(kT);
          else if ("plotsBlueprint" === TT) {
            const TT = kT;
            IT.Av(TT), AT.Av(TT)
          } else "plotsJournal" === TT ? CT.Av(kT) : "plotsJournalOpen" === TT ? CT.openFromServer() : "plotsPreviewEnd" === TT && AT.endFromServer()
        }
      }
    }
  },
  38952: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT,
      f: () => KT
    });
    const lT = 1 / .6,
      MT = {
        kind: "smokePuff"
      };
    class KT {
      constructor(TT, kT, cT) {
        this.style = TT, this.DA = kT, this.half = cT, this.particles = null, this.lastFrame = -1
      }
      emit(TT, kT, cT) {
        let KT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return cT !== this.lastFrame && (this.lastFrame = cT, this.particles || (this.particles = TT.createParticles(function(TT, kT) {
          const [
            [cT, KT, OT],
            [yT, fT, xT]
          ] = TT.colours;
          return {
            texture: TT.soft ? MT : "square_particle",
            DA: kT,
            minLifeTime: TT.life[0] / lT,
            maxLifeTime: TT.life[1] / lT,
            minEmitPower: TT.power[0] * lT,
            maxEmitPower: TT.power[1] * lT,
            minSize: TT.size[0],
            maxSize: TT.size[1],
            emitRate: 0,
            gravity: [0, TT.lift * lT * lT, 0],
            dir1: [-TT.spread, 1, -TT.spread],
            dir2: [TT.spread, 1, TT.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [cT, KT, OT, TT.alpha],
              maxColor: [yT, fT, xT, TT.alpha]
            }, {
              timeFraction: 1,
              minColor: [cT, KT, OT, 0],
              maxColor: [yT, fT, xT, 0]
            }],
            blendMode: TT.blendMode
          }
        }(this.style, this.DA), {
          pos: kT,
          half: this.half
        })), this.particles.moveTo(kT, this.half), this.particles.emit(KT), !0)
      }
      dispose() {
        var TT;
        null === (TT = this.particles) || void 0 === TT || TT.stop(), this.particles = null
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);