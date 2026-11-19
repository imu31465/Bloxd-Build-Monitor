export const id = 236;
export const ids = [236];
export const modules = {
  38389: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => oi
    });
    const iT = [0, 90, 180, 270],
      zT = "plotsblueprint";
    var kT = IT(46),
      WT = IT(35599),
      XT = IT(12),
      BT = IT(1585),
      FT = IT(1665),
      ST = IT(16);
    const DT = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      LT = {
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
      xT = ["small", "medium", "large"].flatMap((TT => DT.flat().filter((oT => LT[oT].tier === TT))));

    function cT(TT) {
      return LT[TT]
    }
    const KT = new Map(DT.flatMap((TT => TT.slice(1).map(((oT, IT) => [oT, TT[IT]])))));

    function MT(TT) {
      var oT;
      return null !== (oT = KT.get(TT)) && void 0 !== oT ? oT : null
    }
    const rT = {
      farm_hut: "plotsGame:journalNoteFarmHut",
      rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
      castle_tower: "plotsGame:journalNoteCastleTower",
      farm_house: "plotsGame:journalNoteFarmHouse",
      farm_barn: "plotsGame:journalNoteFarmBarn"
    };

    function AT(TT, oT) {
      const IT = new Set(TT),
        iT = function(TT) {
          const oT = new Set(TT);
          return new Set(xT.filter((TT => {
            const IT = MT(TT);
            return null === IT || oT.has(IT)
          })))
        }(IT);
      return xT.map((TT => {
        const zT = TT === oT;
        return IT.has(TT) ? {
          id: TT,
          active: zT,
          state: "completed",
          unlockedBy: null
        } : iT.has(TT) ? {
          id: TT,
          active: zT,
          state: "open",
          unlockedBy: null
        } : {
          id: TT,
          active: zT,
          state: "locked",
          unlockedBy: MT(TT)
        }
      }))
    }
    const gT = "plotsJournalChanged";
    class hT {
      constructor(TT, oT) {
        this.api = TT, this.placement = oT, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.Bc("journal_opened")
        }, this.build = TT => {
          this.Bc("placement_started"), this.placement.start(TT), (0, WT.e)()
        }, this.putAway = () => {
          this.api.sendCommand(`${zT} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      Jc(TT) {
        let [, oT, IT] = TT;
        this.pages = AT(oT, IT), ST.h.XM(gT, this.pages, !0)
      }
      openFromServer() {
        this.openRequested = !0, this.dD()
      }
      dD() {
        this.openRequested && !XT.c.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, BT.t)() || (0, FT.isTypingInInput)() || null !== this.placement.getView() || (0, WT.o)())
      }
      Bc(TT) {
        this.reported.has(TT) || (this.reported.add(TT), this.api.sendCommand(`${zT} report ${TT}`))
      }
    }
    var wT = IT(1042),
      mT = IT.n(wT),
      eT = IT(1055),
      RT = IT(1408),
      uT = IT(4050),
      vT = IT(2969),
      ET = IT(1403),
      fT = IT(1896),
      CT = IT(1171),
      jT = IT(8829);
    const JT = [0, 90, 180, 270],
      UT = /^(meta\|rot\d)\|([lrud]+)$/,
      aT = "nesw",
      YT = /^meta\|([nesw]*)\|?(Stacked)?$/,
      QT = function(TT) {
        const oT = new WeakMap;
        return (IT, iT) => {
          let zT = oT.get(IT);
          return void 0 === zT && (zT = TT(IT, iT), oT.set(IT, zT)), zT
        }
      }((TT => new OT(TT)));
    class OT {
      constructor(TT) {
        this.blockMetadata = TT, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const oT = new Set(Object.keys(TT).map((oT => TT[oT].id)));
        oT.add(0), this.maxBlockId = Math.max(...oT)
      }
      static
      for (TT) {
        return QT(TT)
      }
      getBlockIdMapping(TT, oT) {
        const IT = this.getBlockIdMappingKey(TT, oT);
        let iT = this.blockIdMappings.get(IT);
        return void 0 === iT && JT.includes(TT) && (iT = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, TT, oT), this.blockIdMappings.set(IT, iT)), iT
      }
      turnBlockId(TT, oT, IT) {
        return this.mapBlockId(this.blockMetadata[TT], oT, this.getRotationMapping(oT, IT), IT)
      }
      getBlockIdMappingKey(TT, oT) {
        return `r${TT}|m${Number(oT)}`
      }
      createBlockIdMapping(TT, oT, IT, iT) {
        const zT = new Uint16Array(oT + 1),
          kT = this.getRotationMapping(IT, iT);
        for (const WT in TT) {
          const oT = TT[WT];
          zT[oT.id] = this.mapBlockId(oT, IT, kT, iT)
        }
        return zT
      }
      getRotationMapping(TT, oT) {
        const IT = Math.round(TT / 90),
          iT = new Uint8Array(4);
        for (let zT = 0; zT < 4; zT++) iT[zT] = (4 + zT - IT) % 4;
        if (oT) {
          let TT = iT[0];
          iT[0] = iT[1], iT[1] = TT, TT = iT[2], iT[2] = iT[3], iT[3] = TT
        }
        return iT
      }
      mapBlockId(TT, oT, IT, iT) {
        var zT;
        const {
          blockMetadata: kT
        } = this, WT = Math.round(oT / 90), {
          id: XT,
          meta: BT
        } = TT, {
          rot: FT,
          rootName: ST,
          metaStr: DT
        } = BT;
        let LT;
        const [, xT, cT] = null !== (zT = YT.exec(DT)) && void 0 !== zT ? zT : [];
        if (void 0 !== xT) {
          var KT, MT;
          LT = null !== (KT = null === (MT = kT[`${ST}|meta|${[aT.split("").filter(((TT,oT)=>xT.split("").some((TT=>{const IT=aT.indexOf(TT);return((iT?3-IT:IT)+WT)%4===oT})))).join(""),cT].filter(Boolean).join("|")}`]) || void 0 === MT ? void 0 : MT.id) && void 0 !== KT ? KT : XT
        } else if (null === FT) LT = XT;
        else {
          var rT, AT;
          const TT = IT[FT - 1] + 1;
          let oT = DT.replace(`rot${FT}`, `rot${TT}`);
          iT && BT.stairsCorner && (oT = oT.replace(/(Left|Right)$/, (TT => "Left" === TT ? "Right" : "Left"))), iT && "Chest" === ST && (oT = oT.replace(/\|(left|right)$/, ((TT, oT) => "left" === oT ? "|right" : "|left")));
          const zT = UT.exec(oT);
          if (iT && null !== zT) {
            const TT = "lrud".split("").filter((TT => zT[2].includes("l" === TT ? "r" : "r" === TT ? "l" : TT)));
            oT = `${zT[1]}|${TT.join("")}`
          }
          const WT = `${ST}|${oT}`;
          if (LT = null !== (rT = null === (AT = kT[WT]) || void 0 === AT ? void 0 : AT.id) && void 0 !== rT ? rT : null, null === LT) {
            const TT = kT[ST];
            LT = TT.rootMetaDesc === WT ? TT.id : XT
          }
        }
        return LT
      }
    }

    function HT(TT, oT, IT) {
      let {
        xRotationMappedOrigin: iT,
        shouldSwapXZ: zT
      } = IT;
      const kT = zT ? oT : TT;
      return null === iT ? kT : iT - kT
    }

    function nT(TT, oT, IT) {
      let {
        zRotationMappedOrigin: iT,
        shouldSwapXZ: zT
      } = IT;
      const kT = zT ? TT : oT;
      return null === iT ? kT : iT - kT
    }
    const qT = {
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
      ZT = new Map;

    function lT(TT, oT) {
      const IT = `${TT}|${oT}`;
      let iT = ZT.get(IT);
      if (void 0 === iT) {
        const {
          size: zT,
          palette: kT,
          layers: WT
        } = qT[TT], XT = 90 === oT || 270 === oT, [BT, FT] = XT ? [zT[2], zT[0]] : [zT[0], zT[2]], ST = function(TT, oT, IT) {
          let iT = null,
            zT = null,
            kT = !1;
          switch (TT) {
            case 0:
              break;
            case 90:
              iT = oT - 1, kT = !0;
              break;
            case 180:
              iT = oT - 1, zT = IT - 1;
              break;
            case 270:
              zT = IT - 1, kT = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${TT}`)
          }
          return {
            xRotationMappedOrigin: iT,
            zRotationMappedOrigin: zT,
            shouldSwapXZ: kT
          }
        }(oT, BT, FT), DT = OT.for(jT.j), LT = kT.map((TT => (0, jT.f)(DT.turnBlockId((0, jT.m)(TT), oT, !1)))), xT = [];
        WT.forEach(((TT, oT) => {
          TT.split(" ").forEach(((TT, IT) => {
            for (let iT = 0; iT < TT.length; iT++)
              if ("." !== TT[iT]) {
                const zT = [HT(iT, IT, ST), oT, nT(iT, IT, ST)];
                xT.push({
                  offset: zT,
                  block: LT[TT.charCodeAt(iT) - "a".charCodeAt(0)]
                })
              }
          }))
        })), iT = {
          size: [BT, zT[1], FT],
          cells: xT
        }, ZT.set(IT, iT)
      }
      return iT
    }
    const sT = {
      farm_hut: IT.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
      farm_house: IT.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
      farm_barn: IT.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
      rusticHome_tent: IT.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
      rusticHome_cabin: IT.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
      rusticHome_house: IT.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
      market_stand: IT.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
      market_stall: IT.p + "static/media/market_stall.9a562807f9dff591618a.webp",
      market_shop: IT.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
      castle_wall: IT.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
      castle_gate: IT.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
      castle_tower: IT.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
    };
    var tT = IT(1083);
    const GT = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function pT(TT) {
      let {
        page: oT,
        building: IT,
        onBuild: iT,
        onPutAway: zT
      } = TT;
      const {
        t: kT
      } = (0, CT.t)(), {
        displayName: WT,
        tier: XT
      } = cT(oT.id), BT = lT(oT.id, 0).cells.length, FT = rT[oT.id], ST = "locked" === oT.state, DT = IT ? RT.e : RT.m;
      return (0, tT.jsxs)("article", {
        className: mT()("PlotsJournalPage", {
          Locked: ST
        }),
        children: [(0, tT.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: kT(WT.translationKey)
        }), (0, tT.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [kT(GT[XT]), " \xb7 ", kT("plotsGame:journalBlocks", {
            blocks: String(BT)
          })]
        }), (0, tT.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [xT.map((TT => (0, tT.jsx)("img", {
            className: mT()({
              Shown: TT === oT.id
            }),
            src: sT[TT],
            alt: "",
            draggable: !1
          }, TT))), "completed" === oT.state && (0, tT.jsx)("span", {
            className: "PlotsJournalStamp",
            children: kT("plotsGame:journalBuilt")
          }), ST && (0, tT.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, tT.jsx)(eT.e, {
              name: "lock"
            })
          })]
        }), void 0 !== FT && "completed" !== oT.state && (0, tT.jsx)("p", {
          className: "PlotsJournalNote",
          children: kT(FT)
        }), (0, tT.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === oT.state && (0, tT.jsx)("p", {
            className: "PlotsJournalHint",
            children: kT("plotsGame:journalLocked", {
              name: kT(cT(oT.unlockedBy).displayName.translationKey)
            })
          }), oT.active && (0, tT.jsxs)(tT.Fragment, {
            children: [(0, tT.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: kT("plotsGame:journalBuilding")
            }), (0, tT.jsx)(RT.i, {
              onClick: zT,
              children: kT("plotsGame:journalPutAway")
            })]
          }), !ST && !oT.active && (0, tT.jsx)(DT, {
            onClick: () => {
              iT(oT.id)
            },
            children: kT("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function bT(TT) {
      let {
        className: oT,
        page: IT,
        hidden: iT,
        building: zT,
        journal: kT
      } = TT;
      return (0, tT.jsxs)("div", {
        ref: TT => {
          null !== TT && (TT.inert = iT)
        },
        className: mT()("PlotsJournalSide", oT),
        children: [void 0 !== IT && (0, tT.jsx)(pT, {
          page: IT,
          building: zT,
          onBuild: kT.build,
          onPutAway: kT.putAway
        }), void 0 === IT && (0, tT.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var yT = IT(314),
      NT = IT(1724);

    function PT(TT) {
      return Math.cos((0, NT.m)(TT))
    }

    function dT(TT) {
      return (0, NT.B)(Math.acos(yT.e.clamp(TT, -1, 1)))
    }

    function VT(TT, oT, IT, iT, zT) {
      const kT = Math.abs(oT - TT),
        WT = (0, NT.B)(zT / (IT * Math.abs(Math.sin((0, NT.m)(TT))))),
        XT = 450 * Math.min(1, kT / iT),
        BT = WT > 0 ? 3 * kT / WT : 1 / 0;
      return Math.round(Math.max(120, Math.min(XT, BT)))
    }
    class To {
      constructor() {
        this.samples = []
      }
      add(TT, oT) {
        for (this.samples.push({
            x: TT,
            at: oT
          }); oT - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const TT = this.samples[0],
          oT = this.samples[this.samples.length - 1];
        return oT.at > TT.at ? (oT.x - TT.x) / (oT.at - TT.at) : 0
      }
    }

    function oo(TT, oT) {
      return TT > oT && TT >= 600
    }

    function Io(TT) {
      return dT(new DOMMatrixReadOnly(getComputedStyle(TT).transform).m11)
    }

    function io(TT, oT) {
      TT.style.transform = `rotateY(${-oT}deg)`, TT.classList.add("Turning")
    }

    function zo(TT) {
      let {
        journal: oT
      } = TT;
      const {
        t: IT
      } = (0, CT.t)(), iT = (0, ET.i)(gT, oT.getPages()), zT = (0, fT.e)(oo), [XT, BT] = (0, kT.useState)((() => function(TT) {
        const oT = TT.findIndex((TT => TT.active));
        return -1 !== oT ? oT : Math.max(0, TT.findIndex((TT => "open" === TT.state)))
      }(iT))), ST = (0, kT.useRef)(null), DT = (0, kT.useRef)(null), LT = (0, kT.useRef)({
        Forward: null,
        Back: null
      }), xT = zT ? 2 : 1, cT = zT ? 180 : 90, KT = XT - XT % xT, MT = KT > 0, rT = KT + xT < iT.length, AT = (0, kT.useCallback)((() => {
        const TT = DT.current;
        return null === TT ? KT : (DT.current = null, TT.animation.cancel(), (oT = LT.current[TT.direction]).style.transform = "", oT.classList.remove("Turning"), null === TT.next ? KT : (BT(TT.next), TT.next));
        var oT
      }), [KT]), hT = (0, kT.useCallback)(((TT, oT, IT, iT) => {
        const zT = LT.current[TT],
          kT = Io(zT),
          WT = oT === ("Forward" === TT) ? cT : 0;
        io(zT, WT);
        const XT = zT.animate([{
          transform: `rotateY(${-kT}deg)`
        }, {
          transform: `rotateY(${-WT}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : VT(kT, WT, zT.offsetWidth, cT, WT > kT ? -IT : IT),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        DT.current = {
          direction: TT,
          animation: XT,
          next: oT ? iT + ("Forward" === TT ? xT : -xT) : null
        }, XT.onfinish = () => {
          var TT;
          (null === (TT = DT.current) || void 0 === TT ? void 0 : TT.animation) === XT && AT()
        }
      }), [xT, cT, AT]), wT = (0, kT.useCallback)((TT => {
        if (null !== ST.current) return;
        const oT = AT();
        ("Forward" === TT ? oT + xT < iT.length : oT > 0) && hT(TT, !0, 0, oT)
      }), [AT, hT, xT, iT.length]);
      (0, kT.useEffect)((() => {
        oT.onOpened()
      }), [oT]), (0, kT.useEffect)((() => () => {
        var TT;
        null === (TT = DT.current) || void 0 === TT || TT.animation.cancel()
      }), []), (0, kT.useEffect)((() => {
        const TT = TT => {
          var oT;
          TT.pointerId !== (null === (oT = ST.current) || void 0 === oT ? void 0 : oT.pointerId) || ST.current.following || (ST.current = null)
        };
        return window.addEventListener("pointerup", TT), () => {
          window.removeEventListener("pointerup", TT)
        }
      }), []), (0, vT.b)((TT => ("ArrowLeft" === TT.code || "ArrowRight" === TT.code) && !(0, FT.isTypingInInput)()), (TT => {
        TT.stopPropagation(), wT("ArrowLeft" === TT.code ? "Back" : "Forward")
      }));
      const eT = (TT, oT, IT) => {
          const iT = function(TT, oT, IT, iT) {
            return (TT < 0 ? IT : iT) ? yT.e.clampAbs(TT, oT) : Math.sign(TT) * oT * (1 - 1 / (.55 * Math.abs(TT) / oT + 1))
          }(TT.base + IT, xT * TT.width, rT, MT);
          return "Forward" === oT ? Math.min(iT, 0) : Math.max(iT, 0)
        },
        jT = (TT, oT) => {
          const IT = ST.current;
          if (ST.current = null, null === IT.direction) return;
          IT.speed.add(TT, oT);
          const iT = IT.speed.get(),
            zT = eT(IT, IT.direction, TT - IT.x);
          hT(IT.direction, null !== function(TT, oT, IT, iT, zT) {
            if (Math.abs(oT) >= .3 ? Math.sign(oT) !== Math.sign(TT) : Math.abs(TT) < .5 * IT) return null;
            const kT = TT < 0 ? "Forward" : "Back";
            return ("Forward" === kT ? iT : zT) ? kT : null
          }(zT, iT, xT * IT.width, rT, MT), iT, KT)
        },
        JT = iT.some((TT => TT.active)),
        UT = (TT, IT, zT) => (0, tT.jsx)(bT, {
          className: TT,
          page: IT >= 0 && IT < iT.length ? iT[IT] : void 0,
          hidden: zT,
          building: JT,
          journal: oT
        });
      return (0, tT.jsx)(uT.e, {
        close: WT.h,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, tT.jsxs)("section", {
          className: mT()("PlotsJournal", {
            Spread: zT
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": IT("plotsGame:journalTitle"),
          children: [(0, tT.jsx)(RT.j, {
            className: "PlotsJournalClose",
            onClick: WT.h
          }), (0, tT.jsx)(ko, {
            direction: "Back",
            disabled: !MT,
            onTurn: wT
          }), (0, tT.jsx)("div", {
            className: "PlotsJournalBookPages",
            onPointerDown: TT => {
              var oT;
              if (!TT.isPrimary || 0 !== TT.button || null !== DT.current && null !== TT.target.closest("button")) return;
              const IT = new To;
              IT.add(TT.clientX, TT.timeStamp);
              const iT = LT.current.Forward.offsetWidth,
                zT = DT.current;
              DT.current = null;
              let kT = 0;
              if (null !== zT) {
                const oT = LT.current[zT.direction],
                  IT = Io(oT);
                zT.animation.cancel(), io(oT, IT), kT = function(TT, oT, IT, iT) {
                  return (TT < 0 ? IT : iT) ? TT : Math.sign(TT) * oT * (1 / (1 - Math.min(Math.abs(TT) / oT, .99)) - 1) / .55
                }(function(TT, oT, IT, iT) {
                  return IT * (PT(oT) - PT("Forward" === TT ? 0 : iT))
                }(zT.direction, IT, iT, cT), xT * iT, rT, MT), TT.currentTarget.setPointerCapture(TT.pointerId)
              }
              ST.current = {
                pointerId: TT.pointerId,
                x: TT.clientX,
                y: TT.clientY,
                base: kT,
                width: iT,
                following: null !== zT,
                direction: null !== (oT = null === zT || void 0 === zT ? void 0 : zT.direction) && void 0 !== oT ? oT : null,
                speed: IT
              }
            },
            onPointerMove: TT => {
              const oT = ST.current;
              if (null === oT || TT.pointerId !== oT.pointerId) return;
              if (0 === TT.buttons) return void jT(TT.clientX, TT.timeStamp);
              const IT = TT.clientX - oT.x;
              !oT.following && function(TT, oT) {
                return Math.abs(TT) > 8 && Math.abs(TT) > Math.abs(oT)
              }(IT, TT.clientY - oT.y) && (oT.following = !0, oT.direction = IT < 0 ? "Forward" : "Back", TT.currentTarget.setPointerCapture(TT.pointerId)), null !== oT.direction && (oT.speed.add(TT.clientX, TT.timeStamp), io(LT.current[oT.direction], function(TT, oT, IT, iT) {
                const zT = IT * PT("Forward" === TT ? 0 : iT) + oT;
                return yT.e.clamp(dT(zT / IT), 0, iT)
              }(oT.direction, eT(oT, oT.direction, IT), oT.width, cT)))
            },
            onPointerUp: TT => {
              var oT;
              TT.pointerId === (null === (oT = ST.current) || void 0 === oT ? void 0 : oT.pointerId) && jT(TT.clientX, TT.timeStamp)
            },
            onPointerCancel: TT => {
              const oT = ST.current;
              TT.pointerId === (null === oT || void 0 === oT ? void 0 : oT.pointerId) && (ST.current = null, null !== oT.direction && hT(oT.direction, !1, 0, KT))
            },
            children: (0, tT.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [zT && UT("Left", KT - 2, !0), UT("Right", KT + 2 * xT - 1, !0), (0, tT.jsxs)("div", {
                ref: TT => {
                  LT.current.Back = TT
                },
                className: "PlotsJournalLeaf Back",
                children: [UT("Recto", KT - 1, !0), zT && UT("Verso", KT, !1)]
              }), (0, tT.jsxs)("div", {
                ref: TT => {
                  LT.current.Forward = TT
                },
                className: "PlotsJournalLeaf Forward",
                children: [UT("Recto", KT + xT - 1, !1), zT && UT("Verso", KT + xT, !0)]
              })]
            })
          }), (0, tT.jsx)(ko, {
            direction: "Forward",
            disabled: !rT,
            onTurn: wT
          })]
        })
      })
    }

    function ko(TT) {
      let {
        direction: oT,
        disabled: IT,
        onTurn: iT
      } = TT;
      const {
        t: zT
      } = (0, CT.t)();
      return (0, tT.jsx)("div", {
        className: mT()("PlotsJournalArrow", oT),
        children: (0, tT.jsx)(RT.e, {
          disabled: IT,
          ariaLabel: zT("Forward" === oT ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            iT(oT)
          },
          children: (0, tT.jsx)(eT.e, {
            name: "angle-up"
          })
        })
      })
    }
    var Wo = IT(35594),
      Xo = IT(1747),
      Bo = IT(1787);
    const Fo = "plotsStepChanged",
      So = "plotsPlotChanged";
    class Do {
      constructor() {
        this.step = ["none"], this.plot = ["none"]
      }
      getStep() {
        return this.step
      }
      receiveStep(TT) {
        this.step = TT, ST.h.XM(Fo, TT, !0)
      }
      getPlot() {
        return this.plot
      }
      receivePlot(TT) {
        this.plot = TT, ST.h.XM(So, TT, !0)
      }
    }
    const Lo = "KeyJ";

    function xo(TT) {
      let {
        hud: oT,
        journal: IT
      } = TT;
      const iT = (0, ET.i)(gT, IT.getPages()),
        zT = (0, ET.i)(Fo, oT.getStep()),
        {
          isTouchScreen: kT
        } = (0, XT.k)(["isTouchScreen"]),
        {
          t: ST
        } = (0, CT.t)(),
        DT = null !== iT && "none" === zT[0];
      return (0, vT.b)((TT => null !== iT && TT.code === Lo && !TT.repeat && !(0, FT.isTypingInInput)()), (TT => {
        (0, BT.E)(TT, DT, WT.o)
      })), DT ? (0, tT.jsx)(Wo.e, {
        placement: "topRight",
        children: (0, tT.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, tT.jsxs)("button", {
            type: "button",
            className: mT()("PlotsJournalButton SmallTextBold", {
              Touch: kT
            }),
            onClick: WT.o,
            children: [(0, tT.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, tT.jsx)(Xo.c, {
                itemName: "Book",
                amount: 0
              })
            }), ST("plotsGame:journalButton"), !kT && (0, tT.jsx)(Bo.e, {
              className: "PlotsJournalButtonKey",
              keyCode: Lo
            })]
          })
        })
      }) : null
    }
    var co = IT(37390),
      Ko = IT(37183),
      Mo = IT(35877),
      ro = IT(8853),
      Ao = IT(8876),
      go = IT(36753);
    const ho = new Map([
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
      wo = [...Mo.d.blockRemoveActionRoots, ...Ko.e, ...ro.g, "Board", "Code Block", "Custom Lobby Block"],
      mo = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let eo = null;

    function Ro() {
      return eo ??= function() {
        const TT = uo(),
          oT = Math.max(...TT.map((TT => jT.j[TT].id))) + 1,
          IT = new Int32Array(oT),
          iT = new Int32Array(oT),
          zT = new Uint8Array(oT).fill(1),
          kT = new Uint8Array(oT),
          WT = new Uint8Array(oT),
          XT = new Array(oT).fill("Air"),
          BT = new Map,
          FT = TT => {
            let oT = BT.get(TT);
            return void 0 === oT && (oT = BT.size + 1, BT.set(TT, oT)), oT
          },
          ST = new Set(wo);
        for (const LT of TT) {
          var DT;
          const {
            id: TT,
            meta: oT,
            altActionable: BT,
            canBePlacedOver: xT
          } = jT.j[LT];
          IT[TT] = FT(vo(LT));
          const cT = oT.stairsCorner;
          if (null === cT) iT[TT] = IT[TT];
          else {
            const IT = cT.endsWith("Right");
            iT[TT] = FT(`${oT.rootName}|rot${IT?oT.rot%4+1:oT.rot}|${oT.halfblockPlacement}|${cT.replace("Right","Left")}`)
          }
          zT[TT] = xT ? 1 : 0, kT[TT] = BT || null !== oT.open || LT in go.b || ST.has(oT.rootName) || void 0 !== (0, Ko.i)(oT.rootName) ? 1 : 0;
          const {
            rootName: KT
          } = oT;
          WT[TT] = null !== oT.open || Ko.e.includes(KT) || KT.includes("Bookshelf") || KT.includes("Mailbox") ? 1 : 0, XT[TT] = null !== (DT = (0, co.f)(TT)) && void 0 !== DT ? DT : KT
        }
        return {
          kinds: IT,
          shapes: iT,
          empty: zT,
          inUse: kT,
          ownAltActionMessage: WT,
          placingItems: XT
        }
      }(), eo
    }

    function uo() {
      return Object.keys(jT.j).filter((TT => jT.j[TT].name === TT))
    }

    function vo(TT) {
      var oT;
      const IT = jT.j[TT],
        {
          rootName: iT,
          rot: zT
        } = IT.meta,
        [, ...kT] = (null !== (oT = IT.rootMetaDesc) && void 0 !== oT ? oT : TT).split("|"),
        WT = kT.filter((TT => !("meta" === TT || mo.test(TT) || (0, Ao.D)(IT) && /^[nesw]+$/.test(TT) || ro.g.includes(iT) && /^[lrud]+$/.test(TT) || yT.H.includes(iT) && /^(left|right)$/.test(TT))));
      return [iT, ...WT].map((TT => "fenceGate" === IT.model && TT === `rot${zT}` ? "rot" + ((zT - 1) % 2 + 1) : TT)).join("|")
    }

    function Eo(TT, oT) {
      const {
        kinds: IT,
        shapes: iT
      } = Ro();
      return IT[TT] === IT[oT] || iT[TT] === iT[oT]
    }

    function fo(TT) {
      return 1 === Ro().empty[TT]
    }

    function Co(TT) {
      return Ro().placingItems[TT]
    }

    function jo(TT) {
      return ho.get(jT.j[TT].meta.rootName)
    }
    var Jo = IT(8850),
      Uo = IT(8869);
    const ao = [0, 0, 0, 1, 1, 1],
      Yo = (0, Jo.b)([
        [2, 0, 2, 6, 6, 6]
      ]),
      Qo = (0, Jo.b)([
        [3, 0, 3, 5, 5, 5]
      ]),
      Oo = (0, Jo.b)([
        [3, 3, 3, 5, 8, 5]
      ]),
      Ho = [0, 1, 2, 3].map((TT => (0, Jo.b)((0, Jo.l)([
        [3, 2, 0, 5, 7, 3]
      ], TT))));

    function no(TT) {
      const {
        FM: oT,
        model: IT,
        blockModel: iT,
        meta: zT
      } = jT.j[TT];
      return void 0 !== oT ? oT : "CentreCross" === IT ? Yo : null !== iT && void 0 !== iT && iT.startsWith("torch") ? zT.halfblockPlacement === Uo.b.side ? Ho[zT.rot - 1] : zT.halfblockPlacement === Uo.b.top ? Oo : Qo : ao
    }
    var qo = IT(35852);
    var Zo = IT(193);

    function so(TT, oT) {
      const IT = Zo.c.Iw / 2;
      return TT[0] < oT[0] + IT && TT[0] + 1 > oT[0] - IT && TT[1] < oT[1] + Zo.c.Xw && TT[1] + 1 > oT[1] && TT[2] < oT[2] + IT && TT[2] + 1 > oT[2] - IT
    }

    function to(TT) {
      return TT + 1
    }

    function Go(TT, oT, IT, iT, zT) {
      const kT = Math.hypot(...oT.dir);
      if (!Number.isFinite(kT) || 0 === kT) return -1;
      const {
        from: WT,
        reach: XT,
        solid: BT
      } = oT, FT = [oT.dir[0] / kT, oT.dir[1] / kT, oT.dir[2] / kT], ST = null === BT ? XT : Math.min(XT, function(TT, oT, IT) {
        const iT = po(TT, oT, IT);
        if (iT !== 1 / 0) return iT;
        return (IT[0] + .5 - TT[0]) * oT[0] + (IT[1] + .5 - TT[1]) * oT[1] + (IT[2] + .5 - TT[2]) * oT[2]
      }(WT, FT, BT) + .75);
      let DT = -1,
        LT = 1 / 0,
        xT = 1 / 0;
      for (let cT = 0; cT < TT.length; cT += 4) {
        const oT = [TT[cT], TT[cT + 1], TT[cT + 2]],
          kT = zT(cT) ? XT : ST;
        let BT = -1,
          KT = po(WT, FT, oT);
        if (KT > kT) {
          const TT = [oT[0] + .5 - WT[0], oT[1] + .5 - WT[1], oT[2] + .5 - WT[2]];
          if (KT = TT[0] * FT[0] + TT[1] * FT[1] + TT[2] * FT[2], KT <= 0 || KT > kT) continue;
          if (BT = Math.hypot(TT[0] - KT * FT[0], TT[1] - KT * FT[1], TT[2] - KT * FT[2]), BT > .7 || !iT(cT)) continue
        }(BT < LT || BT === LT && KT < xT) && IT(cT) && (DT = cT, LT = BT, xT = KT)
      }
      return DT
    }

    function po(TT, oT, IT) {
      let iT = 0,
        zT = 1 / 0;
      for (let kT = 0; kT < 3; kT++) {
        const WT = IT[kT] - TT[kT];
        if (0 === oT[kT]) {
          if (WT > 0 || WT + 1 < 0) return 1 / 0;
          continue
        }
        const XT = WT / oT[kT],
          BT = (WT + 1) / oT[kT];
        iT = Math.max(iT, Math.min(XT, BT)), zT = Math.min(zT, Math.max(XT, BT))
      }
      return iT <= zT ? iT : 1 / 0
    }
    var bo = IT(37012),
      yo = IT(37491);
    const No = [1, 1, 1];
    class Po {
      constructor(TT) {
        this.api = TT, this.meshes = null, this.shown = null
      }
      show(TT) {
        if (!(0, qo.c)(TT, this.shown))
          if (this.shown = null === TT ? null : [TT[0], TT[1], TT[2]], null !== this.meshes)
            for (const oT of this.meshes) this.api.setGameMesh(oT, null === TT ? {
              visible: !1
            } : {
              anchor: TT,
              visible: !0
            });
          else if (null !== TT) {
          const oT = [bo.h, bo.h, bo.h, 0, 0, 0];
          this.meshes = [this.build([oT], bo.j, TT), this.build((0, bo.d)(), bo.m, TT)]
        }
      }
      dispose() {
        for (const oT of null !== (TT = this.meshes) && void 0 !== TT ? TT : []) {
          var TT;
          this.api.disposeGameMesh(oT)
        }
        this.meshes = null, this.shown = null
      }
      build(TT, oT, IT) {
        const iT = [],
          zT = [];
        for (const [kT, WT, XT, BT, FT, ST] of TT)(0, yo.i)(iT, zT, [BT + .5, FT + .5, ST + .5], [kT, WT, XT]);
        return this.api.createGameMesh({
          positions: iT,
          indices: zT
        }, {
          rgb: No,
          alpha: oT,
          onTop: !0
        }, IT)
      }
    }
    class Vo {
      constructor(TT) {
        this.api = TT, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(TT) {
        const oT = Zo.c.Yc;
        this.chunks = [];
        for (let IT = 0; IT < TT.length; IT += 3) {
          const iT = Math.floor(TT[IT] / oT),
            zT = Math.floor(TT[IT + 1] / oT),
            kT = Math.floor(TT[IT + 2] / oT);
          this.watches(iT, zT, kT) || this.chunks.push(iT, zT, kT)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const TT = performance.now();
        if (TT - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = TT;
        let oT = !1;
        for (let IT = 0; IT < this.chunks.length; IT += 3) {
          const TT = this.api.getChunkVersion(this.chunks[IT], this.chunks[IT + 1], this.chunks[IT + 2]);
          this.versions[IT / 3] !== TT && (this.versions[IT / 3] = TT, oT = !0)
        }
        return oT
      }
      watches(TT, oT, IT) {
        for (let iT = 0; iT < this.chunks.length; iT += 3)
          if (this.chunks[iT] === TT && this.chunks[iT + 1] === oT && this.chunks[iT + 2] === IT) return !0;
        return !1
      }
    }
    const TI = .35,
      oI = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      II = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      iI = [.95, .2, .15];
    class zI {
      constructor() {
        this.groups = []
      }
      add(TT, oT, IT, iT, zT) {
        let kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ao;
        for (const WT of this.groups)
          if (XI(WT, iT, zT)) return WT.cells.push(TT, oT, IT), void WT.boxes.push(kT);
        this.groups.push({
          rgb: iT,
          look: zT,
          cells: [TT, oT, IT],
          boxes: [kT]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class kI {
      constructor(TT) {
        this.api = TT, this.shown = []
      }
      show(TT) {
        const oT = [];
        for (const IT of TT) {
          const TT = this.shown.findIndex((TT => {
            let {
              group: oT
            } = TT;
            return XI(oT, IT.rgb, IT.look) && BI(oT, IT)
          })); - 1 === TT ? oT.push(this.build(IT)) : (oT.push(this.shown[TT]), this.shown.splice(TT, 1))
        }
        this.dispose(), this.shown = oT
      }
      dispose() {
        for (const {
            meshes: TT
          }
          of this.shown)
          for (const oT of TT) this.api.disposeGameMesh(oT);
        this.shown = []
      }
      build(TT) {
        const {
          rgb: oT,
          look: IT,
          boxes: iT
        } = TT, zT = [oT[0] + (1 - oT[0]) * TI, oT[1] + (1 - oT[1]) * TI, oT[2] + (1 - oT[2]) * TI], kT = [this.buildMesh(TT.cells, oT, IT.alpha, ((TT, oT, zT, kT) => {
          WI(TT, oT, zT, iT[kT], IT.size, !1)
        })), this.buildMesh(TT.cells, zT, IT.alpha, ((TT, oT, zT, kT) => {
          WI(TT, oT, zT, iT[kT], IT.size, !0)
        }))];
        return IT.crossed && kT.push(this.buildMesh(TT.cells, oT, .9, ((TT, oT, iT) => {
          (0, yo.m)(TT, oT, iT, IT.size + .01, .12)
        }))), {
          group: TT,
          meshes: kT
        }
      }
      buildMesh(TT, oT, IT, iT) {
        const zT = [TT[0], TT[1], TT[2]],
          kT = [],
          WT = [];
        for (let XT = 0; XT < TT.length; XT += 3) iT(kT, WT, [TT[XT] - zT[0] + .5, TT[XT + 1] - zT[1] + .5, TT[XT + 2] - zT[2] + .5], XT / 3);
        return this.api.createGameMesh({
          positions: kT,
          indices: WT
        }, {
          rgb: [oT[0], oT[1], oT[2]],
          alpha: IT
        }, zT)
      }
    }

    function WI(TT, oT, IT, iT, zT, kT) {
      for (let WT = 0; WT < iT.length; WT += 6) {
        const XT = [0, 0, 0],
          BT = [0, 0, 0];
        for (let TT = 0; TT < 3; TT++) XT[TT] = IT[TT] + ((iT[WT + TT] + iT[WT + TT + 3]) / 2 - .5) * zT, BT[TT] = (iT[WT + TT + 3] - iT[WT + TT]) * zT;
        (0, yo.e)(TT, oT, XT, BT, kT)
      }
    }

    function XI(TT, oT, IT) {
      return TT.rgb[0] === oT[0] && TT.rgb[1] === oT[1] && TT.rgb[2] === oT[2] && TT.look === IT
    }

    function BI(TT, oT) {
      if (TT.cells.length !== oT.cells.length) return !1;
      for (let IT = 0; IT < TT.cells.length; IT++)
        if (TT.cells[IT] !== oT.cells[IT]) return !1;
      return TT.boxes.every(((TT, IT) => TT === oT.boxes[IT]))
    }
    class FI {
      constructor(TT, oT, IT) {
        this.api = TT, this.localPlayerId = oT, this.pickNext = IT, this.turning = null, this.pending = null, this.tap = null, this.heading = [0, 1]
      }
      look(TT) {
        const [oT, , IT] = TT.cameraDirection, iT = Math.hypot(oT, IT);
        iT > .001 && (this.heading = [oT / iT, IT / iT])
      }
      tapped(TT, oT, IT) {
        const iT = to(this.api.getClientOption(this.localPlayerId, "blockReach")),
          {
            origin: zT,
            direction: kT
          } = this.api.getActionRay(),
          WT = [...zT],
          XT = [
            [WT, [WT[0] + kT[0] * iT, WT[1] + kT[1] * iT, WT[2] + kT[2] * iT]]
          ];
        null !== TT && XT.push([WT, (0, qo.b)(TT)]), this.tap = {
          lines: XT,
          next: oT,
          ms: IT
        }
      }
      filled(TT, oT) {
        this.tap = null, this.pending = {
          from: TT,
          ms: oT
        }, this.retry(oT)
      }
      arrived(TT, oT) {
        const {
          tap: IT
        } = this;
        if (null === IT || oT - IT.ms > 1500) return null;
        const iT = (0, qo.b)(TT);
        return (0, qo.c)(IT.next, TT) || IT.lines.some((TT => {
          let [oT, IT] = TT;
          return function(TT, oT, IT) {
            const iT = [IT[0] - oT[0], IT[1] - oT[1], IT[2] - oT[2]],
              zT = [TT[0] - oT[0], TT[1] - oT[1], TT[2] - oT[2]],
              kT = iT[0] ** 2 + iT[1] ** 2 + iT[2] ** 2,
              WT = 0 === kT ? 0 : Math.min(1, Math.max(0, (zT[0] * iT[0] + zT[1] * iT[1] + zT[2] * iT[2]) / kT));
            return Math.hypot(zT[0] - iT[0] * WT, zT[1] - iT[1] * WT, zT[2] - iT[2] * WT)
          }(iT, oT, IT) <= .9
        })) ? (this.tap = null, this.pending = {
          from: TT,
          ms: oT
        }, IT.ms) : null
      }
      retry(TT) {
        const {
          pending: oT
        } = this;
        if (null === oT) return;
        if (TT - oT.ms > 1500) return void(this.pending = null);
        const IT = this.pickNext((0, qo.b)(oT.from), (TT => (0, qo.c)(TT, oT.from)));
        if (null === IT) return;
        this.pending = null;
        const {
          turning: iT
        } = this;
        if (null !== iT && TT < iT.endMs && (0, qo.c)(iT.to, IT)) return;
        const zT = this.api.getActionRay().origin,
          kT = [IT[0] + .5 - zT[0], IT[1] + .5 - zT[1], IT[2] + .5 - zT[2]],
          WT = Math.hypot(kT[0], kT[2]);
        if (WT < .3) {
          const TT = Math.max(WT, .001);
          kT[0] = this.heading[0] * TT, kT[2] = this.heading[1] * TT
        }
        this.api.turnCamera(kT, 250), this.turning = {
          to: IT,
          endMs: TT + 250
        }
      }
    }
    class SI {
      constructor(TT, oT, IT) {
        this.api = TT, this.localPlayerId = oT, this.juice = IT, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], this.lastFilled = null, this.lastSeenFilled = null, this.playerCells = [], this.aimed = null, this.pressMs = null, this.foreseen = new Map, this.turn = void 0, this.nextCell = null, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new Vo(TT), this.meshes = new kI(TT), this.outline = new Po(TT), this.turn = new FI(TT, oT, ((TT, oT) => this.pickNext(TT, oT)))
      }
      Jc(TT) {
        const oT = "active" === TT[0] ? `${TT[1]}|${TT[3]}|${TT[4]}|${TT[5]}|${TT[6]}` : "";
        if ("active" !== TT[0]) "built" === TT[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , IT, iT, zT, kT] = TT;
          oT !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = IT) : IT === this.layerY ? this.burstUnlisted(iT) : IT > this.layerY && this.finishLayer(IT), this.layerY = IT, this.layerCells.has(IT) || this.layerCells.set(IT, iT.filter(LI)), this.ghostCells = iT, this.palette = zT, this.occupiedCells = kT
        }
        oT !== this.blueprint && (this.blueprint = oT, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((TT => this.api.blockNameToBlockId(TT))), this.chunkWatch.watch([...this.ghostCells.filter(LI), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(TT) {
        this.burstUnlisted([]), TT > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = TT)
      }
      dD() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const TT = performance.now();
        let oT = !1;
        for (const [zT, kT] of this.foreseen) {
          var IT;
          if (TT - kT > 1e3) this.foreseen.delete(zT), oT = !0, (null === (IT = this.lastFilled) || void 0 === IT ? void 0 : IT.join()) === zT && (this.lastFilled = this.lastSeenFilled)
        }
        const iT = DI(this.api.getPositionView(this.localPlayerId));
        (oT || iT.some(((TT, oT) => TT !== this.playerCells[oT]))) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(TT) {
        const oT = new Set;
        for (let zT = 0; zT < TT.length; zT += 4) oT.add(`${TT[zT]},${TT[zT+1]},${TT[zT+2]}`);
        const IT = [],
          {
            ghostCells: iT
          } = this;
        for (let zT = 0; zT < iT.length; zT += 4) {
          const TT = `${iT[zT]},${iT[zT+1]},${iT[zT+2]}`;
          !oT.has(TT) && this.open.delete(TT) && IT.push(this.filledCell(zT))
        }
        this.burst(IT)
      }
      refresh() {
        const {
          ghostCells: TT,
          palette: oT,
          occupiedCells: IT
        } = this, iT = new zI, zT = new Set, kT = [], WT = [];
        for (let XT = 0; XT < TT.length; XT += 4) {
          const [IT, BT, FT, ST] = [TT[XT], TT[XT + 1], TT[XT + 2], TT[XT + 3]], DT = this.api.getBlockId(IT, BT, FT), LT = `${IT},${BT},${FT}`, xT = Eo(this.blockIds[ST], DT);
          !xT && fo(DT) ? iT.add(IT, BT, FT, jo(oT[ST]), oI, no(oT[ST])) : xT ? this.open.has(LT) && kT.push(this.filledCell(XT)) : iT.add(IT, BT, FT, iI, II), !xT && this.api.isBlockInLoadedChunk(IT, BT, FT) && (zT.add(LT), WT.push(IT, BT, FT, fo(DT) ? 0 : 1))
        }
        this.open = zT, this.nextCells = WT;
        for (let XT = 0; XT < IT.length; XT += 3) {
          const [TT, oT, zT] = [IT[XT], IT[XT + 1], IT[XT + 2]];
          fo(this.api.getBlockId(TT, oT, zT)) || iT.add(TT, oT, zT, iI, II)
        }
        this.meshes.show(iT.toArray()), this.burst(kT), this.showNext(), this.turn.retry(performance.now())
      }
      burst(TT) {
        const oT = performance.now(),
          IT = [];
        for (const [iT, zT, kT] of TT) {
          const TT = [iT, zT, kT];
          this.lastSeenFilled = TT, this.foreseen.delete(TT.join()) || IT.push(TT)
        }
        for (const iT of IT) {
          this.lastFilled = iT;
          const TT = this.turn.arrived(iT, oT);
          if (null !== TT)
            for (const [oT, IT] of this.foreseen) IT <= TT && this.foreseen.delete(oT)
        }
        this.juice.filled(TT)
      }
      showNext() {
        var TT;
        const oT = this.api.getPositionView(this.localPlayerId);
        this.playerCells.splice(0, 1 / 0, ...DI(oT));
        const IT = this.lastFilled;
        this.nextCell = this.pickNext(null === IT ? [oT[0], oT[1] + 1, oT[2]] : (0, qo.b)(IT), (() => !1)), this.outline.show(null !== (TT = this.aimed) && void 0 !== TT ? TT : this.nextCell)
      }
      pickNext(TT, oT) {
        const IT = this.api.getPositionView(this.localPlayerId),
          {
            nextCells: iT
          } = this,
          zT = function(TT, oT, IT, iT, zT) {
            let kT = -1,
              WT = !1,
              XT = 1 / 0;
            for (let BT = 0; BT < TT.length; BT += oT) {
              const oT = iT(BT);
              if (WT && !oT || zT(BT)) continue;
              const FT = (TT[BT] + .5 - IT[0]) ** 2 + (TT[BT + 1] + .5 - IT[1]) ** 2 + (TT[BT + 2] + .5 - IT[2]) ** 2;
              (oT && !WT || FT < XT) && (kT = BT, WT = oT, XT = FT)
            }
            return kT
          }(iT, 4, TT, (TT => 1 === iT[TT + 3]), (TT => {
            const zT = [iT[TT], iT[TT + 1], iT[TT + 2]];
            return so(zT, IT) || this.foreseen.has(zT.join()) || oT(zT)
          }));
        return -1 === zT ? null : [iT[zT], iT[zT + 1], iT[zT + 2]]
      }
      afterRender(TT) {
        var oT;
        this.turn.look(TT);
        const IT = this.api.getTargetedBlock();
        this.aimed = this.findAimed(null === IT ? null : IT.position), this.outline.show(null !== (oT = this.aimed) && void 0 !== oT ? oT : this.nextCell)
      }
      attemptAltAction(TT) {
        const oT = performance.now(),
          IT = this.findAimed(TT);
        if (null === IT && null !== this.nextCell && this.turn.tapped(TT, this.nextCell, oT), null !== IT || !(null === this.pressMs || oT - this.pressMs > 500)) return null !== IT && (this.foreseen.set(IT.join(), oT), this.lastFilled = IT, this.aimed = null, this.showNext(), this.turn.filled(IT, oT)), this.pressMs = oT, "preventPlacement";
        this.pressMs = null
      }
      findAimed(TT) {
        return function(TT, oT, IT, iT, zT, kT, WT) {
          const XT = TT.eoT(oT),
            BT = null === XT || null === TT.blockNameToBlockId(XT.name, !0) ? null : XT.name,
            FT = TT.getPositionView(oT),
            {
              origin: ST,
              direction: DT
            } = TT.getActionRay(),
            LT = Go(iT, {
              from: ST,
              dir: DT,
              reach: to(TT.getClientOption(oT, "blockReach")),
              solid: IT
            }, (oT => {
              const IT = [iT[oT], iT[oT + 1], iT[oT + 2]];
              return !Eo(zT[iT[oT + 3]], TT.getBlockId(...IT)) && !WT.has(IT.join()) && TT.isBlockInLoadedChunk(...IT) && !so(IT, FT)
            }), (TT => null === BT || BT === Co(zT[iT[TT + 3]])), (TT => null !== kT && iT[TT] === kT[0] && iT[TT + 1] === kT[1] && iT[TT + 2] === kT[2]));
          return -1 === LT ? null : [iT[LT], iT[LT + 1], iT[LT + 2]]
        }(this.api, this.localPlayerId, TT, this.ghostCells, this.blockIds, this.nextCell, this.foreseen)
      }
      endPress() {
        this.pressMs = null
      }
      filledCell(TT) {
        const {
          ghostCells: oT
        } = this, [IT, iT, zT] = jo(this.palette[oT[TT + 3]]);
        return [oT[TT], oT[TT + 1], oT[TT + 2], IT, iT, zT]
      }
    }

    function DI(TT) {
      let [oT, IT, iT] = TT;
      const zT = Zo.c.Iw / 2;
      return [Math.floor(oT), Math.floor(IT), Math.floor(iT), Math.floor(oT - zT), Math.floor(oT + zT), Math.floor(IT + Zo.c.Xw), Math.floor(iT - zT), Math.floor(iT + zT)]
    }

    function LI(TT, oT) {
      return oT % 4 !== 3
    }

    function xI(TT, oT, IT, iT, zT) {
      if (!TT.isBlockInLoadedChunk(oT, iT - 6, IT) || !TT.isBlockInLoadedChunk(oT, iT + 6 + zT, IT) || !TT.canModifyBlockAt(oT, iT, IT)) return NaN;
      let kT = iT - 1;
      if (0 !== TT.getBlockId(oT, kT, IT)) {
        for (; kT < iT + 6 && 0 !== TT.getBlockId(oT, kT + 1, IT);) kT++;
        return kT
      }
      for (; kT > iT - 6;)
        if (kT--, 0 !== TT.getBlockId(oT, kT, IT)) return kT;
      return NaN
    }

    function cI(TT, oT, IT, iT, zT) {
      let kT = 0;
      for (let WT = iT + 1; WT <= iT + zT; WT++) 0 !== TT.getBlockId(oT, WT, IT) && kT++;
      return kT
    }

    function KI(TT) {
      const oT = new Map;
      for (const WT of TT) {
        var IT;
        if (Number.isNaN(WT)) return null;
        oT.set(WT, (null !== (IT = oT.get(WT)) && void 0 !== IT ? IT : 0) + 1)
      }
      let iT = NaN,
        zT = 0;
      for (const [WT, XT] of oT)(XT > zT || XT === zT && WT < iT) && (iT = WT, zT = XT);
      let kT = 0;
      for (const WT of TT) kT += Math.abs(WT - iT);
      return kT
    }

    function MI(TT, oT, IT, iT) {
      const {
        eye: zT,
        forward: kT,
        tanHalfFovX: WT,
        tanHalfFovY: XT
      } = TT, [BT, FT] = function(TT) {
        let [oT, IT, iT] = TT;
        const zT = Math.hypot(oT, iT),
          [kT, WT] = [iT / zT, -oT / zT];
        return [
          [kT, 0, WT],
          [IT * WT, iT * kT - oT * WT, -IT * kT]
        ]
      }(kT), [ST, DT] = [oT * WT, IT * XT], LT = kT[0] + ST * BT[0] + DT * FT[0], xT = kT[1] + DT * FT[1], cT = kT[2] + ST * BT[2] + DT * FT[2], KT = (iT - zT[1]) / xT;
      return KT > 0 && KT < 1 / 0 ? [zT[0] + KT * LT, zT[2] + KT * cT] : null
    }
    const rI = "plotsBlueprintPlacementChanged",
      AI = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class gI {
      constructor(TT, oT) {
        this.api = TT, this.localPlayerId = oT, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = TT => {
          var oT, IT, iT, kT;
          const WT = null !== (oT = null === (IT = this.placing) || void 0 === IT ? void 0 : IT.rotation) && void 0 !== oT ? oT : 0,
            {
              size: XT
            } = lT(TT, WT),
            BT = this.api.Wm(this.localPlayerId),
            [FT, ST] = null !== (iT = null !== (kT = function(TT, oT, IT) {
              const [iT, zT, kT] = oT, [WT, XT, BT] = [Math.floor(IT[0]), Math.floor(IT[1]), Math.floor(IT[2])], FT = 6 + Math.max(iT, kT) / 2, [ST, DT] = [Math.ceil(FT + iT / 2), Math.ceil(FT + kT / 2)], [LT, xT] = [WT - ST, BT - DT], [cT, KT] = [2 * ST + 1, 2 * DT + 1], MT = new Float64Array(cT * KT), rT = new Uint16Array(cT * KT);
              for (let wT = 0; wT < cT; wT++)
                for (let oT = 0; oT < KT; oT++) {
                  const IT = xI(TT, LT + wT, xT + oT, XT, zT);
                  MT[wT * KT + oT] = IT, Number.isNaN(IT) || (rT[wT * KT + oT] = cI(TT, LT + wT, xT + oT, IT, zT))
                }
              const AT = [];
              let gT = null,
                hT = 1 / 0;
              for (let wT = 0; wT + iT <= cT; wT++)
                for (let TT = 0; TT + kT <= KT; TT++) {
                  const [oT, zT] = [LT + wT, xT + TT], XT = Math.hypot(oT + iT / 2 - IT[0], zT + kT / 2 - IT[2]);
                  if (XT > FT || WT >= oT - 2 && WT < oT + iT + 2 && BT >= zT - 2 && BT < zT + kT + 2) continue;
                  AT.length = 0;
                  let ST = 0;
                  for (let IT = 0; IT < iT; IT++)
                    for (let oT = 0; oT < kT; oT++) AT.push(MT[(wT + IT) * KT + TT + oT]), ST += rT[(wT + IT) * KT + TT + oT];
                  const DT = KI(AT);
                  if (null === DT) continue;
                  const cT = XT + 3 * (DT + ST);
                  cT < hT && (hT = cT, gT = [oT, zT])
                }
              return gT
            }(this.api, XT, BT)) && void 0 !== kT ? kT : this.cornerOnTarget(XT)) && void 0 !== iT ? iT : [Math.floor(BT[0]) + 2, Math.floor(BT[2])];
          this.placing = {
            id: TT,
            rotation: WT,
            corner: [FT, this.playerLevel(), ST],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null
          }, this.update(), this.api.sendCommand(`${zT} preview`)
        }, this.rotate = () => {
          const {
            id: TT,
            rotation: oT,
            corner: IT
          } = this.placing, zT = iT[(iT.indexOf(oT) + 1) % iT.length], [kT, , WT] = lT(TT, oT).size, [XT, , BT] = lT(TT, zT).size;
          this.moveTo(IT[0] + Math.floor(kT / 2) - Math.floor(XT / 2), IT[2] + Math.floor(WT / 2) - Math.floor(BT / 2), zT)
        }, this.hoverAt = (TT, oT) => {
          this.placing.hover = [TT, oT], this.moveCentreTo(this.camera, TT, oT)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (TT, oT) => {
          const IT = this.placing,
            {
              eye: iT,
              forward: zT,
              tanHalfFovX: kT,
              tanHalfFovY: WT
            } = this.camera,
            XT = {
              eye: [iT[0], iT[1], iT[2]],
              forward: [zT[0], zT[1], zT[2]],
              tanHalfFovX: kT,
              tanHalfFovY: WT
            },
            BT = IT.corner[1],
            FT = MI(XT, TT, oT, BT);
          IT.hover = null, IT.drag = FT && {
            view: XT,
            ground: FT,
            corner: [IT.corner[0], IT.corner[2]],
            level: BT
          }
        }, this.dragTo = (TT, oT) => {
          const IT = this.placing.drag,
            iT = IT && MI(IT.view, TT, oT, IT.level);
          null !== IT && null !== iT && this.moveTo(IT.corner[0] + Math.round(iT[0] - IT.ground[0]), IT.corner[1] + Math.round(iT[1] - IT.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const TT = this.view;
          TT.waiting || (TT.blocked ? this.XM({
            ...TT,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const TT = this.placing,
            {
              id: oT,
              rotation: IT,
              corner: iT
            } = TT;
          this.api.sendCommand(`${zT} place ${oT} ${iT.join(" ")} ${IT}`), TT.sent = {
            atMs: performance.now(),
            corner: [...iT],
            rotation: IT,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${zT} preview off`))
        }, this.chunkWatch = new Vo(TT), this.meshes = new kI(TT)
      }
      getView() {
        return this.view
      }
      dD() {
        const TT = this.placing;
        null !== TT && (null !== TT.sent && !TT.sent.timedOut && performance.now() - TT.sent.atMs > 3e3 ? (TT.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(TT) || this.chunkWatch.changed()) && this.update())
      }
      afterRender(TT) {
        const oT = this.placing;
        null !== oT && (! function(TT, oT) {
          for (let IT = 0; IT < 3; IT++) oT.eye[IT] = TT.cameraPosition[IT], oT.forward[IT] = TT.cameraDirection[IT];
          oT.tanHalfFovX = TT.tanHalfFovX, oT.tanHalfFovY = TT.tanHalfFovY
        }(TT, this.camera), null !== oT.hover && this.moveCentreTo(this.camera, oT.hover[0], oT.hover[1]))
      }
      Jc(TT) {
        const oT = this.placing;
        if (null === oT || null === oT.sent || "active" !== TT[0]) return;
        const {
          sent: IT
        } = oT, [, iT, zT, kT, WT, XT, BT] = TT;
        zT && iT === oT.id && BT === IT.rotation && kT === IT.corner[0] && WT === IT.corner[1] && XT === IT.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(TT) {
        let [oT, , IT] = TT;
        const iT = this.api.getTargetedBlock();
        if (null === iT) return null;
        const [zT, , kT] = iT.position;
        return [zT - Math.floor(oT / 2), kT - Math.floor(IT / 2)]
      }
      playerLevel() {
        var TT;
        const [oT, IT, iT] = this.api.Wm(this.localPlayerId);
        if (null !== (TT = this.api.getLocalPlayerMovement()) && void 0 !== TT && TT.onGround) return Math.ceil(IT - .01);
        const [zT, kT, WT] = [Math.floor(oT), Math.floor(IT), Math.floor(iT)];
        for (let XT = kT; XT >= kT - 2; XT--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(zT, XT, WT))) return XT + 1;
        return kT
      }
      followPlayerLevel(TT) {
        if (hI(TT)) return !1;
        const oT = this.playerLevel();
        return oT !== TT.corner[1] && (TT.corner[1] = oT, !0)
      }
      moveCentreTo(TT, oT, IT) {
        const iT = this.placing,
          zT = MI(TT, oT, IT, iT.corner[1]);
        if (null !== zT) {
          const [TT, , oT] = lT(iT.id, iT.rotation).size;
          this.moveTo(Math.round(zT[0] - TT / 2), Math.round(zT[1] - oT / 2))
        }
      }
      moveTo(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const iT = this.placing;
        if (hI(iT)) return;
        const [zT, kT, WT] = iT.corner;
        if (this.centreOnPlot(zT, WT) && !this.centreOnPlot(TT, oT, IT))
          if (this.centreOnPlot(TT, WT, IT)) oT = WT;
          else {
            if (!this.centreOnPlot(zT, oT, IT)) return;
            TT = zT
          } TT === zT && oT === WT && IT === iT.rotation || (iT.rotation = IT, iT.corner = [TT, kT, oT], this.update())
      }
      centreOnPlot(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: iT,
          corner: zT
        } = this.placing, [kT, , WT] = lT(iT, IT).size;
        return this.api.canModifyBlockAt(TT + Math.floor(kT / 2), zT[1], oT + Math.floor(WT / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.XM(null)
      }
      update() {
        const {
          id: TT,
          rotation: oT,
          corner: IT,
          refusals: iT
        } = this.placing, zT = new zI, kT = [];
        let WT = !1,
          XT = 0;
        for (const {
            offset: ST,
            block: DT
          }
          of lT(TT, oT).cells) {
          const [TT, oT, iT] = [IT[0] + ST[0], IT[1] + ST[1], IT[2] + ST[2]];
          kT.push(TT, oT, iT);
          const BT = !this.api.canModifyBlockAt(TT, oT, iT),
            FT = this.api.getBlockId(TT, oT, iT),
            LT = !fo(FT) && !Eo(this.api.blockNameToBlockId(DT), FT);
          WT ||= BT, XT += LT ? 1 : 0, BT || LT ? zT.add(TT, oT, iT, iI, II) : zT.add(TT, oT, iT, jo(DT), AI, no(DT))
        }
        this.chunkWatch.watch(kT), this.meshes.show(zT.toArray());
        const BT = this.view,
          FT = hI(this.placing);
        (null === BT || void 0 === BT ? void 0 : BT.id) === TT && BT.blocked === WT && BT.toClear === XT && BT.waiting === FT && BT.refusals === iT || this.XM({
          id: TT,
          blocked: WT,
          toClear: XT,
          waiting: FT,
          refusals: iT
        })
      }
      XM(TT) {
        this.view = TT, ST.h.XM(rI, TT, !0)
      }
    }

    function hI(TT) {
      let {
        sent: oT
      } = TT;
      return null !== oT && !oT.timedOut
    }
    var wI = IT(3811),
      mI = IT(38100);

    function eI(TT, oT, IT) {
      const iT = [255 * TT, 255 * oT, 255 * IT],
        [zT, kT, WT] = iT.map((TT => TT + .4 * (255 - TT)));
      return {
        texture: "square_particle",
        fD: 48,
        minLifeTime: .3 / mI.c,
        maxLifeTime: .55 / mI.c,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * mI.c * mI.c, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...iT, 1],
          maxColor: [zT, kT, WT, 1]
        }, {
          timeFraction: 1,
          minColor: [...iT, 0],
          maxColor: [zT, kT, WT, 0]
        }],
        blendMode: wI.h.Standard
      }
    }
    const RI = {
      texture: "glint",
      mipmaps: !1,
      fD: 96,
      minLifeTime: .5 / mI.c,
      maxLifeTime: .9 / mI.c,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * mI.c * mI.c, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: wI.h.OneOne
    };
    class uI {
      constructor(TT, oT) {
        this.api = TT, this.localPlayerId = oT, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(TT) {
        if (this.api.particlesEnabled())
          for (const [oT, IT, iT, zT, kT, WT] of TT.slice(0, 3)) {
            const TT = `${zT},${kT},${WT}`;
            let XT = this.chips.get(TT);
            void 0 === XT && (XT = this.api.createParticles(eI(zT, kT, WT), {
              pos: [oT + .5, IT + .5, iT + .5]
            }), this.chips.set(TT, XT));
            for (let oT = 0; oT < 8; oT++) this.setPoint(oT, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            XT.emitPoints([oT + .5, IT + .5, iT + .5], this.points, 8)
          }
      }
      layerDone(TT) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const oT = TT.length / 3;
        if (0 === oT || !this.api.particlesEnabled()) return;
        const IT = Math.min(oT, 48),
          [iT, zT, kT] = [TT[0] + .5, TT[1] + 1, TT[2] + .5];
        let WT = 0;
        for (let XT = 0; XT < IT; XT++) {
          const BT = 3 * Math.floor(XT * oT / IT);
          for (let oT = 0; oT < 2; oT++) this.setPoint(WT++, TT[BT] + Math.random() - iT, TT[BT + 1] + 1 - zT, TT[BT + 2] + Math.random() - kT, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(RI, {
          pos: [iT, zT, kT]
        }), this.sparkles.emitPoints([iT, zT, kT], this.points, WT)
      }
      dispose() {
        var TT;
        for (const oT of this.chips.values()) oT.stop();
        this.chips.clear(), null === (TT = this.sparkles) || void 0 === TT || TT.stop(), this.sparkles = null
      }
      setPoint(TT, oT, IT, iT, zT) {
        const kT = 4 * TT;
        this.points[kT] = oT, this.points[kT + 1] = IT, this.points[kT + 2] = iT, this.points[kT + 3] = zT
      }
    }
    var vI = IT(1794);
    const EI = "SpecialAction1",
      fI = "KeyY",
      CI = "KeyX";

    function jI(TT) {
      let {
        placement: oT
      } = TT;
      const IT = (0, ET.i)(rI, oT.getView()),
        {
          t: iT
        } = (0, CT.t)(),
        {
          isTouchScreen: zT
        } = (0, XT.k)(["isTouchScreen"]),
        kT = null !== IT,
        WT = kT && !IT.blocked && !IT.waiting;
      if ((0, vT.b)((TT => kT && !TT.repeat && !(0, FT.isTypingInInput)() && !(0, BT.t)() && !zT), (TT => {
          const IT = function(TT, oT, IT) {
            if (TT === CI) return oT.stop;
            if (TT === fI) return IT ? oT.build : UI;
            return vI.z[EI].includes(TT) ? oT.rotate : null
          }(TT.code, oT, WT);
          null !== IT && (TT.stopPropagation(), IT())
        })), !kT) return null;
      let ST = zT ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return IT.blocked ? ST = "plotsGame:placementOffPlot" : IT.toClear > 0 && (ST = "plotsGame:placementClear"), (0, tT.jsx)(Wo.e, {
        placement: "bottom",
        children: (0, tT.jsxs)("div", {
          className: "PlotsPlacementCard",
          children: [(0, tT.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: iT(cT(IT.id).displayName.translationKey)
          }), (0, tT.jsx)("div", {
            className: mT()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: IT.refusals > 0
            }),
            children: iT(ST)
          }, IT.refusals), (0, tT.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, tT.jsxs)(RT.e, {
              onClick: oT.rotate,
              children: [(0, tT.jsx)(JI, {
                noaAction: EI
              }), iT("plotsGame:placementRotate")]
            }), (0, tT.jsxs)(RT.C, {
              onClick: oT.stop,
              children: [(0, tT.jsx)(JI, {
                keyCode: CI
              }), iT("general:cancel")]
            }), (0, tT.jsxs)(RT.m, {
              disabled: !WT,
              onClick: oT.build,
              children: [(0, tT.jsx)(JI, {
                keyCode: fI
              }), iT("plotsGame:placementBuild")]
            })]
          })]
        })
      })
    }

    function JI(TT) {
      return (0, tT.jsx)(Bo.e, {
        className: "PlotsPlacementKey",
        ...TT
      })
    }

    function UI() {}
    var aI = IT(4061);
    class YI {
      constructor(TT) {
        this.placement = TT, this.press = null
      }
      down(TT) {
        if (null !== this.press) return !1;
        const {
          id: oT,
          mouse: IT,
          x: iT,
          y: zT,
          atMs: kT
        } = TT;
        return this.press = {
          id: oT,
          mouse: IT,
          x: iT,
          y: zT,
          atMs: kT,
          moved: !1
        }, IT || this.placement.beginDrag(TT.ndcX, TT.ndcY), !0
      }
      move(TT) {
        const oT = this.press;
        null !== oT && oT.id === TT.id && (oT.moved ||= Math.hypot(TT.x - oT.x, TT.y - oT.y) > 8), TT.mouse ? this.placement.hoverAt(TT.ndcX, TT.ndcY) : (null === oT || void 0 === oT ? void 0 : oT.id) === TT.id && this.placement.dragTo(TT.ndcX, TT.ndcY)
      }
      up(TT) {
        const oT = this.press;
        (null === oT || void 0 === oT ? void 0 : oT.id) === TT.id && (this.move(TT), this.end(), !oT.moved && (oT.mouse || TT.atMs - oT.atMs <= 250) && this.placement.tap())
      }
      cancel(TT) {
        var oT;
        (null === (oT = this.press) || void 0 === oT ? void 0 : oT.id) === TT && this.end()
      }
      leave(TT) {
        let {
          id: oT,
          mouse: IT
        } = TT;
        IT && this.placement.endHover(), this.cancel(oT)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }

    function QI(TT) {
      let {
        placement: oT
      } = TT;
      return null === (0, ET.i)(rI, oT.getView()) ? null : (0, tT.jsx)(OI, {
        placement: oT
      })
    }

    function OI(TT) {
      let {
        placement: oT
      } = TT;
      (0, aI.d)(!0, !0, "PlotsPlacementLayer");
      const IT = (0, kT.useMemo)((() => new YI(oT)), [oT]);
      return (0, tT.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: TT => {
          "mouse" === TT.pointerType && 0 !== TT.button || !IT.down(HI(TT)) || TT.currentTarget.setPointerCapture(TT.pointerId)
        },
        onPointerMove: TT => {
          IT.move(HI(TT))
        },
        onPointerUp: TT => {
          IT.up(HI(TT))
        },
        onPointerCancel: TT => {
          IT.cancel(TT.pointerId)
        },
        onLostPointerCapture: TT => {
          IT.cancel(TT.pointerId)
        },
        onPointerLeave: TT => {
          IT.leave(HI(TT))
        },
        "aria-hidden": !0
      })
    }

    function HI(TT) {
      const {
        left: oT,
        top: IT,
        width: iT,
        height: zT
      } = TT.currentTarget.getBoundingClientRect();
      return {
        id: TT.pointerId,
        mouse: "mouse" === TT.pointerType,
        x: TT.clientX,
        y: TT.clientY,
        ndcX: (TT.clientX - oT) / iT * 2 - 1,
        ndcY: 1 - (TT.clientY - IT) / zT * 2,
        atMs: TT.timeStamp
      }
    }
    var nI = IT(2176),
      qI = IT(35692),
      ZI = IT(1784),
      lI = IT(1231);
    const sI = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function tI(TT) {
      let {
        hud: oT
      } = TT;
      const IT = (0, ET.i)(So, oT.getPlot()),
        [iT, zT] = (0, kT.useState)(null),
        WT = (0, qI.l)(iT);
      if ("none" === IT[0]) return null;
      const [, XT, BT, FT, ST, DT] = IT;
      return (0, tT.jsx)("div", {
        className: mT()("PlotsPlotBannerContainer", {
          Below: WT
        }),
        children: (0, tT.jsx)(GI, {
          plotX: XT,
          plotZ: BT,
          ownerName: FT,
          ownerId: ST,
          relation: DT,
          plaqueRef: zT
        }, `${XT},${BT}`)
      })
    }

    function GI(TT) {
      var oT, IT;
      let {
        plotX: iT,
        plotZ: zT,
        ownerName: kT,
        ownerId: WT,
        relation: XT,
        plaqueRef: BT
      } = TT;
      const {
        t: FT
      } = (0, CT.t)(), ST = (0, ZI.f)("hiddenPlayerNames"), DT = (0, ZI.f)("players"), LT = null === WT ? null : null !== (oT = null === (IT = DT.byId[WT]) || void 0 === IT ? void 0 : IT.cosmetics) && void 0 !== oT ? oT : null, xT = FT("plotsGame:plotBannerCoords", {
        x: iT,
        z: zT
      }), cT = "own" === XT || null !== kT;
      return (0, tT.jsxs)("div", {
        ref: BT,
        className: mT()("PlotsPlotBanner", {
          Own: "own" === XT,
          Shared: "shared" === XT
        }),
        role: "status",
        children: [(0, tT.jsxs)("span", {
          className: mT()("PlotsPlotBannerSeal", {
            Face: null !== LT
          }),
          children: [null !== LT && (0, tT.jsx)(nI.b, {
            cosmetics: LT
          }), null === LT && (0, tT.jsx)(eT.e, {
            name: sI[XT]
          })]
        }), (0, tT.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, tT.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === XT && FT("plotsGame:plotBannerYours"), "own" !== XT && null !== kT && FT("plotsGame:plotBannerOwner", {
              name: (0, lI.f)(kT, ST)
            }), !cT && xT]
          }), cT && (0, tT.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [xT, "shared" === XT && (0, tT.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: FT("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }

    function pI(TT) {
      let {
        progress: oT,
        goal: IT
      } = TT;
      const iT = Math.min(oT, IT);
      return (0, tT.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, tT.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": IT,
          "aria-valuenow": iT,
          children: (0, tT.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${iT/IT})`
            }
          })
        }), (0, tT.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [iT, "/", IT]
        })]
      })
    }

    function bI(TT) {
      return {
        translationKey: `plotsGame:${TT}`,
        actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
      }
    }
    const yI = {
      house: {
        icon: "house",
        titleKey: "plotsGame:starterLotHouseTitle",
        desktop: bI("starterLotHouseHint", ["alt-fire"]),
        touch: bI("starterLotHouseHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotHousePlain"
      },
      garden: {
        icon: "sparkle",
        titleKey: "plotsGame:starterLotGarden",
        desktop: bI("starterLotGardenHint", ["alt-fire"]),
        touch: bI("starterLotGardenHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotGardenPlain"
      },
      boulder: {
        icon: "hammer",
        titleKey: "plotsGame:starterLotBoulder",
        desktop: bI("starterLotBreakHint", ["primary-fire"]),
        touch: bI("starterLotBreakHintTouch"),
        plainKey: "plotsGame:starterLotBreakPlain"
      },
      fly: {
        icon: "angles-up",
        titleKey: "plotsGame:starterLotFly",
        desktop: bI("starterLotFlyHint", ["jump"]),
        touch: bI("starterLotFlyHintTouch"),
        plainKey: "plotsGame:starterLotFlyPlain"
      },
      backpack: {
        icon: "backpack",
        titleKey: "plotsGame:starterLotBackpack",
        desktop: bI("starterLotBackpackHint", ["OpenInventory"]),
        touch: bI("starterLotBackpackHintTouch"),
        plainKey: "plotsGame:starterLotBackpackPlain"
      },
      neighbour: {
        icon: "person",
        titleKey: "plotsGame:starterLotNeighbour",
        desktop: bI("starterLotNeighbourHint", ["forward", "left", "backward", "right"]),
        touch: bI("starterLotNeighbourHintTouch"),
        plainKey: "plotsGame:starterLotNeighbourPlain"
      }
    };

    function NI(TT, oT, IT) {
      const {
        translationKey: iT,
        actions: zT
      } = IT ? oT.touch : oT.desktop;
      if (0 === zT.length) return TT(iT);
      const kT = [];
      for (const WT of zT) {
        const iT = (0, vI.x)(WT, IT),
          zT = vI.z[WT][0];
        if (null === iT && void 0 === zT) return TT(oT.plainKey);
        kT.push(null === iT ? (0, vI.s)(zT) : TT(iT.translationKey))
      }
      return TT(iT, {
        key: kT.join("")
      })
    }

    function PI(TT) {
      let {
        hud: oT
      } = TT;
      const IT = (0, ET.i)(Fo, oT.getStep()),
        {
          t: iT
        } = (0, CT.t)();
      return (0, tT.jsxs)(Wo.e, {
        placement: "bottom",
        children: ["step" === IT[0] && (0, tT.jsx)(dI, {
          step: IT[1],
          progress: IT[2],
          goal: IT[3]
        }, IT[1]), "celebrate" === IT[0] && (0, tT.jsx)(VI, {
          className: mT()("Celebrate", {
            Gold: "house" === IT[1]
          }),
          icon: "star",
          title: iT("house" === IT[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
        }, `celebrate-${IT[1]}`)]
      })
    }

    function dI(TT) {
      let {
        step: oT,
        progress: IT,
        goal: iT
      } = TT;
      const {
        isTouchScreen: zT
      } = (0, XT.k)(["isTouchScreen"]), {
        t: kT
      } = (0, CT.t)(), WT = yI[oT];
      return (0, tT.jsxs)(VI, {
        icon: WT.icon,
        title: kT(WT.titleKey),
        children: [(0, tT.jsx)("div", {
          className: "PlotsStepCardHint SmallTextLight",
          children: NI(kT, WT, zT)
        }), iT > 1 && (0, tT.jsx)(pI, {
          progress: IT,
          goal: iT
        }), "backpack" === oT && zT && (0, tT.jsx)(Ti, {})]
      })
    }

    function VI(TT) {
      let {
        className: oT,
        icon: IT,
        title: iT,
        children: zT
      } = TT;
      return (0, tT.jsxs)("div", {
        className: mT()("PlotsStepCard", oT),
        role: "status",
        children: [(0, tT.jsx)("span", {
          className: "PlotsStepCardIcon",
          children: (0, tT.jsx)(eT.e, {
            name: IT
          })
        }), (0, tT.jsxs)("div", {
          className: "PlotsStepCardBody",
          children: [(0, tT.jsx)("div", {
            className: "PlotsStepCardTitle SmallTextBold",
            children: iT
          }), zT]
        })]
      })
    }

    function Ti() {
      return (0, kT.useEffect)((() => (XT.c.set({
        backpackPointerRequested: !0
      }), () => {
        XT.c.set({
          backpackPointerRequested: !1
        })
      })), []), null
    }
    const oi = function(TT, oT, IT, iT) {
      let {
        localPlayerId: zT
      } = iT;
      const XT = new Do;
      let BT = null,
        FT = null,
        ST = null,
        DT = null,
        LT = null;
      const xT = [];
      return {
        onCreate: TT => {
          BT = new uI(TT, zT), FT = new SI(TT, zT, BT), ST = new SI(TT, zT, BT), DT = new gI(TT, zT), LT = new hT(TT, DT), xT.push((0, WT.u)((0, kT.createElement)(kT.Fragment, null, (0, kT.createElement)(tI, {
            hud: XT
          }), (0, kT.createElement)(PI, {
            hud: XT
          }), (0, kT.createElement)(xo, {
            hud: XT,
            journal: LT
          }), (0, kT.createElement)(QI, {
            placement: DT
          }), (0, kT.createElement)(jI, {
            placement: DT
          })), {
            content: (0, kT.createElement)(zo, {
              journal: LT
            })
          }))
        },
        dD: () => {
          FT.dD(), ST.dD(), DT.dD(), LT.dD()
        },
        onPlayerAttemptAltAction: (TT, oT, IT, iT, zT, kT) => {
          var WT;
          if (null !== kT) return;
          const XT = void 0 === oT ? null : [oT, IT, iT];
          return null !== (WT = FT.attemptAltAction(XT)) && void 0 !== WT ? WT : ST.attemptAltAction(XT)
        },
        onPlayerClickUp: () => {
          FT.endPress(), ST.endPress()
        },
        onAfterRender: (TT, oT) => {
          DT.afterRender(oT), FT.afterRender(oT), ST.afterRender(oT)
        },
        onClose: () => {
          for (const TT of xT) TT();
          BT.dispose(), FT.dispose(), ST.dispose(), DT.dispose(), BT = null, FT = null, ST = null, DT = null, LT = null
        },
        onReceivedMessageFromServer: (TT, oT) => {
          if ("plotsStarterLot" === TT) XT.receiveStep(oT);
          else if ("plotsPlot" === TT) XT.receivePlot(oT);
          else if ("plotsStarterHouse" === TT) FT.Jc(oT);
          else if ("plotsBlueprint" === TT) {
            const TT = oT;
            ST.Jc(TT), DT.Jc(TT)
          } else "plotsJournal" === TT ? LT.Jc(oT) : "plotsJournalOpen" === TT ? LT.openFromServer() : "plotsPreviewEnd" === TT && DT.endFromServer()
        }
      }
    }
  },
  38100: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => iT,
      e: () => kT
    });
    const iT = 1 / .6,
      zT = {
        kind: "smokePuff"
      };
    class kT {
      constructor(TT, oT, IT) {
        this.style = TT, this.fD = oT, this.half = IT, this.particles = null, this.lastFrame = -1
      }
      emit(TT, oT, IT) {
        let kT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return IT !== this.lastFrame && (this.lastFrame = IT, this.particles || (this.particles = TT.createParticles(function(TT, oT) {
          const [
            [IT, kT, WT],
            [XT, BT, FT]
          ] = TT.colours;
          return {
            texture: TT.soft ? zT : "square_particle",
            fD: oT,
            minLifeTime: TT.life[0] / iT,
            maxLifeTime: TT.life[1] / iT,
            minEmitPower: TT.power[0] * iT,
            maxEmitPower: TT.power[1] * iT,
            minSize: TT.size[0],
            maxSize: TT.size[1],
            emitRate: 0,
            gravity: [0, TT.lift * iT * iT, 0],
            dir1: [-TT.spread, 1, -TT.spread],
            dir2: [TT.spread, 1, TT.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [IT, kT, WT, TT.alpha],
              maxColor: [XT, BT, FT, TT.alpha]
            }, {
              timeFraction: 1,
              minColor: [IT, kT, WT, 0],
              maxColor: [XT, BT, FT, 0]
            }],
            blendMode: TT.blendMode
          }
        }(this.style, this.fD), {
          pos: oT,
          half: this.half
        })), this.particles.moveTo(oT, this.half), this.particles.emit(kT), !0)
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