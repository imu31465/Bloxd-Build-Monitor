export const id = 238;
export const ids = [238];
export const modules = {
  38986: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => Og
    });
    const tU = [0, 90, 180, 270],
      pU = "plotsblueprint";
    var EU = gU(56),
      PU = gU(36191),
      TU = gU(21),
      qU = gU(1567),
      KU = gU(1637),
      cU = gU(24);
    const GU = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      jU = {
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
      uU = ["small", "medium", "large"].flatMap((UU => GU.flat().filter((RU => jU[RU].tier === UU))));

    function CU(UU) {
      return jU[UU]
    }
    const hU = new Map(GU.flatMap((UU => UU.slice(1).map(((RU, gU) => [RU, UU[gU]])))));

    function QU(UU) {
      var RU;
      return null !== (RU = hU.get(UU)) && void 0 !== RU ? RU : null
    }
    const eU = {
      farm_hut: "plotsGame:journalNoteFarmHut",
      rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
      castle_tower: "plotsGame:journalNoteCastleTower",
      farm_house: "plotsGame:journalNoteFarmHouse",
      farm_barn: "plotsGame:journalNoteFarmBarn"
    };

    function WU(UU, RU) {
      const gU = new Set(UU),
        tU = function(UU) {
          const RU = new Set(UU);
          return new Set(uU.filter((UU => {
            const gU = QU(UU);
            return null === gU || RU.has(gU)
          })))
        }(gU);
      return uU.map((UU => {
        const pU = UU === RU;
        return gU.has(UU) ? {
          id: UU,
          active: pU,
          state: "completed",
          unlockedBy: null
        } : tU.has(UU) ? {
          id: UU,
          active: pU,
          state: "open",
          unlockedBy: null
        } : {
          id: UU,
          active: pU,
          state: "locked",
          unlockedBy: QU(UU)
        }
      }))
    }
    const fU = "plotsJournalChanged";
    class xU {
      constructor(UU, RU) {
        this.api = UU, this.placement = RU, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.ku("journal_opened")
        }, this.build = UU => {
          this.ku("placement_started"), this.placement.start(UU), (0, PU.h)()
        }, this.putAway = () => {
          this.api.sendCommand(`${pU} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      qC(UU) {
        let [, RU, gU] = UU;
        this.pages = WU(RU, gU), cU.p.yh(fU, this.pages, !0)
      }
      openFromServer() {
        this.openRequested = !0, this.HG()
      }
      HG() {
        this.openRequested && !TU.b.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, qU.q)() || (0, KU.isTypingInInput)() || null !== this.placement.getView() || (0, PU.w)())
      }
      ku(UU) {
        this.reported.has(UU) || (this.reported.add(UU), this.api.sendCommand(`${pU} report ${UU}`))
      }
    }
    var mU = gU(1037),
      IU = gU.n(mU),
      JU = gU(1049),
      wU = gU(1412),
      nU = gU(4195),
      bU = gU(3111),
      oU = gU(1410),
      ZU = gU(1943),
      aU = gU(1181),
      YU = gU(9078);
    const BU = [0, 90, 180, 270],
      VU = /^(meta\|rot\d)\|([lrud]+)$/,
      rU = "nesw",
      XU = /^meta\|([nesw]*)\|?(Stacked)?$/,
      vU = function(UU) {
        const RU = new WeakMap;
        return (gU, tU) => {
          let pU = RU.get(gU);
          return void 0 === pU && (pU = UU(gU, tU), RU.set(gU, pU)), pU
        }
      }((UU => new dU(UU)));
    class dU {
      constructor(UU) {
        this.blockMetadata = UU, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const RU = new Set(Object.keys(UU).map((RU => UU[RU].id)));
        RU.add(0), this.maxBlockId = Math.max(...RU)
      }
      static
      for (UU) {
        return vU(UU)
      }
      getBlockIdMapping(UU, RU) {
        const gU = this.getBlockIdMappingKey(UU, RU);
        let tU = this.blockIdMappings.get(gU);
        return void 0 === tU && BU.includes(UU) && (tU = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, UU, RU), this.blockIdMappings.set(gU, tU)), tU
      }
      turnBlockId(UU, RU, gU) {
        return this.mapBlockId(this.blockMetadata[UU], RU, this.getRotationMapping(RU, gU), gU)
      }
      getBlockIdMappingKey(UU, RU) {
        return `r${UU}|m${Number(RU)}`
      }
      createBlockIdMapping(UU, RU, gU, tU) {
        const pU = new Uint16Array(RU + 1),
          EU = this.getRotationMapping(gU, tU);
        for (const PU in UU) {
          const RU = UU[PU];
          pU[RU.id] = this.mapBlockId(RU, gU, EU, tU)
        }
        return pU
      }
      getRotationMapping(UU, RU) {
        const gU = Math.round(UU / 90),
          tU = new Uint8Array(4);
        for (let pU = 0; pU < 4; pU++) tU[pU] = (4 + pU - gU) % 4;
        if (RU) {
          let UU = tU[0];
          tU[0] = tU[1], tU[1] = UU, UU = tU[2], tU[2] = tU[3], tU[3] = UU
        }
        return tU
      }
      mapBlockId(UU, RU, gU, tU) {
        var pU;
        const {
          blockMetadata: EU
        } = this, PU = Math.round(RU / 90), {
          id: TU,
          meta: qU
        } = UU, {
          rot: KU,
          rootName: cU,
          metaStr: GU
        } = qU;
        let jU;
        const [, uU, CU] = null !== (pU = XU.exec(GU)) && void 0 !== pU ? pU : [];
        if (void 0 !== uU) {
          var hU, QU;
          jU = null !== (hU = null === (QU = EU[`${cU}|meta|${[rU.split("").filter(((UU,RU)=>uU.split("").some((UU=>{const gU=rU.indexOf(UU);return((tU?3-gU:gU)+PU)%4===RU})))).join(""),CU].filter(Boolean).join("|")}`]) || void 0 === QU ? void 0 : QU.id) && void 0 !== hU ? hU : TU
        } else if (null === KU) jU = TU;
        else {
          var eU, WU;
          const UU = gU[KU - 1] + 1;
          let RU = GU.replace(`rot${KU}`, `rot${UU}`);
          tU && qU.stairsCorner && (RU = RU.replace(/(Left|Right)$/, (UU => "Left" === UU ? "Right" : "Left"))), tU && "Chest" === cU && (RU = RU.replace(/\|(left|right)$/, ((UU, RU) => "left" === RU ? "|right" : "|left")));
          const pU = VU.exec(RU);
          if (tU && null !== pU) {
            const UU = "lrud".split("").filter((UU => pU[2].includes("l" === UU ? "r" : "r" === UU ? "l" : UU)));
            RU = `${pU[1]}|${UU.join("")}`
          }
          const PU = `${cU}|${RU}`;
          if (jU = null !== (eU = null === (WU = EU[PU]) || void 0 === WU ? void 0 : WU.id) && void 0 !== eU ? eU : null, null === jU) {
            const UU = EU[cU];
            jU = UU.rootMetaDesc === PU ? UU.id : TU
          }
        }
        return jU
      }
    }

    function HU(UU, RU, gU) {
      let {
        xRotationMappedOrigin: tU,
        shouldSwapXZ: pU
      } = gU;
      const EU = pU ? RU : UU;
      return null === tU ? EU : tU - EU
    }

    function SU(UU, RU, gU) {
      let {
        zRotationMappedOrigin: tU,
        shouldSwapXZ: pU
      } = gU;
      const EU = pU ? UU : RU;
      return null === tU ? EU : tU - EU
    }
    const sU = {
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
      yU = new Map;

    function kU(UU, RU) {
      const gU = `${UU}|${RU}`;
      let tU = yU.get(gU);
      if (void 0 === tU) {
        const {
          size: pU,
          palette: EU,
          layers: PU
        } = sU[UU], TU = 90 === RU || 270 === RU, [qU, KU] = TU ? [pU[2], pU[0]] : [pU[0], pU[2]], cU = function(UU, RU, gU) {
          let tU = null,
            pU = null,
            EU = !1;
          switch (UU) {
            case 0:
              break;
            case 90:
              tU = RU - 1, EU = !0;
              break;
            case 180:
              tU = RU - 1, pU = gU - 1;
              break;
            case 270:
              pU = gU - 1, EU = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${UU}`)
          }
          return {
            xRotationMappedOrigin: tU,
            zRotationMappedOrigin: pU,
            shouldSwapXZ: EU
          }
        }(RU, qU, KU), GU = dU.for(YU.f), jU = EU.map((UU => (0, YU.e)(GU.turnBlockId((0, YU.i)(UU), RU, !1)))), uU = [];
        PU.forEach(((UU, RU) => {
          UU.split(" ").forEach(((UU, gU) => {
            for (let tU = 0; tU < UU.length; tU++)
              if ("." !== UU[tU]) {
                const pU = [HU(tU, gU, cU), RU, SU(tU, gU, cU)];
                uU.push({
                  offset: pU,
                  block: jU[UU.charCodeAt(tU) - "a".charCodeAt(0)]
                })
              }
          }))
        })), tU = {
          size: [qU, pU[1], KU],
          cells: uU
        }, yU.set(gU, tU)
      }
      return tU
    }
    const FU = {
      farm_hut: gU.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
      farm_house: gU.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
      farm_barn: gU.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
      rusticHome_tent: gU.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
      rusticHome_cabin: gU.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
      rusticHome_house: gU.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
      market_stand: gU.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
      market_stall: gU.p + "static/media/market_stall.9a562807f9dff591618a.webp",
      market_shop: gU.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
      castle_wall: gU.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
      castle_gate: gU.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
      castle_tower: gU.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
    };
    var iU = gU(1090);
    const AU = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function zU(UU) {
      let {
        page: RU,
        building: gU,
        onBuild: tU,
        onPutAway: pU
      } = UU;
      const {
        t: EU
      } = (0, aU.B)(), {
        displayName: PU,
        tier: TU
      } = CU(RU.id), qU = kU(RU.id, 0).cells.length, KU = eU[RU.id], cU = "locked" === RU.state, GU = gU ? wU.e : wU.j;
      return (0, iU.jsxs)("article", {
        className: IU()("PlotsJournalPage", {
          Locked: cU
        }),
        children: [(0, iU.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: EU(PU.translationKey)
        }), (0, iU.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [EU(AU[TU]), " \xb7 ", EU("plotsGame:journalBlocks", {
            blocks: String(qU)
          })]
        }), (0, iU.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [uU.map((UU => (0, iU.jsx)("img", {
            className: IU()({
              Shown: UU === RU.id
            }),
            src: FU[UU],
            alt: "",
            draggable: !1
          }, UU))), "completed" === RU.state && (0, iU.jsx)("span", {
            className: "PlotsJournalStamp",
            children: EU("plotsGame:journalBuilt")
          }), cU && (0, iU.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, iU.jsx)(JU.c, {
              name: "lock"
            })
          })]
        }), void 0 !== KU && "completed" !== RU.state && (0, iU.jsx)("p", {
          className: "PlotsJournalNote",
          children: EU(KU)
        }), (0, iU.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === RU.state && (0, iU.jsx)("p", {
            className: "PlotsJournalHint",
            children: EU("plotsGame:journalLocked", {
              name: EU(CU(RU.unlockedBy).displayName.translationKey)
            })
          }), RU.active && (0, iU.jsxs)(iU.Fragment, {
            children: [(0, iU.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: EU("plotsGame:journalBuilding")
            }), (0, iU.jsx)(wU.g, {
              onClick: pU,
              children: EU("plotsGame:journalPutAway")
            })]
          }), !cU && !RU.active && (0, iU.jsx)(GU, {
            onClick: () => {
              tU(RU.id)
            },
            children: EU("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function MU(UU) {
      let {
        className: RU,
        page: gU,
        hidden: tU,
        building: pU,
        journal: EU
      } = UU;
      return (0, iU.jsxs)("div", {
        ref: UU => {
          null !== UU && (UU.inert = tU)
        },
        className: IU()("PlotsJournalSide", RU),
        children: [void 0 !== gU && (0, iU.jsx)(zU, {
          page: gU,
          building: pU,
          onBuild: EU.build,
          onPutAway: EU.putAway
        }), void 0 === gU && (0, iU.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var DU = gU(311),
      LU = gU(1771);

    function NU(UU) {
      return Math.cos((0, LU.j)(UU))
    }

    function lU(UU) {
      return (0, LU.F)(Math.acos(DU.c.clamp(UU, -1, 1)))
    }

    function OU(UU, RU, gU, tU, pU) {
      const EU = Math.abs(RU - UU),
        PU = (0, LU.F)(pU / (gU * Math.abs(Math.sin((0, LU.j)(UU))))),
        TU = 450 * Math.min(1, EU / tU),
        qU = PU > 0 ? 3 * EU / PU : 1 / 0;
      return Math.round(Math.max(120, Math.min(TU, qU)))
    }
    class UR {
      constructor() {
        this.samples = []
      }
      add(UU, RU) {
        for (this.samples.push({
            x: UU,
            at: RU
          }); RU - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const UU = this.samples[0],
          RU = this.samples[this.samples.length - 1];
        return RU.at > UU.at ? (RU.x - UU.x) / (RU.at - UU.at) : 0
      }
    }

    function RR(UU, RU) {
      return UU > RU && UU >= 600
    }

    function gR(UU) {
      return lU(new DOMMatrixReadOnly(getComputedStyle(UU).transform).m11)
    }

    function tR(UU, RU) {
      UU.style.transform = `rotateY(${-RU}deg)`, UU.classList.add("Turning")
    }

    function pR(UU) {
      let {
        journal: RU
      } = UU;
      const {
        t: gU
      } = (0, aU.B)(), tU = (0, oU.h)(fU, RU.getPages()), pU = (0, ZU.e)(RR), [TU, qU] = (0, EU.useState)((() => function(UU) {
        const RU = UU.findIndex((UU => UU.active));
        return -1 !== RU ? RU : Math.max(0, UU.findIndex((UU => "open" === UU.state)))
      }(tU))), cU = (0, EU.useRef)(null), GU = (0, EU.useRef)(null), jU = (0, EU.useRef)({
        Forward: null,
        Back: null
      }), uU = pU ? 2 : 1, CU = pU ? 180 : 90, hU = TU - TU % uU, QU = hU > 0, eU = hU + uU < tU.length, WU = (0, EU.useCallback)((() => {
        const UU = GU.current;
        return null === UU ? hU : (GU.current = null, UU.animation.cancel(), (RU = jU.current[UU.direction]).style.transform = "", RU.classList.remove("Turning"), null === UU.next ? hU : (qU(UU.next), UU.next));
        var RU
      }), [hU]), xU = (0, EU.useCallback)(((UU, RU, gU, tU) => {
        const pU = jU.current[UU],
          EU = gR(pU),
          PU = RU === ("Forward" === UU) ? CU : 0;
        tR(pU, PU);
        const TU = pU.animate([{
          transform: `rotateY(${-EU}deg)`
        }, {
          transform: `rotateY(${-PU}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : OU(EU, PU, pU.offsetWidth, CU, PU > EU ? -gU : gU),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        GU.current = {
          direction: UU,
          animation: TU,
          next: RU ? tU + ("Forward" === UU ? uU : -uU) : null
        }, TU.onfinish = () => {
          var UU;
          (null === (UU = GU.current) || void 0 === UU ? void 0 : UU.animation) === TU && WU()
        }
      }), [uU, CU, WU]), mU = (0, EU.useCallback)((UU => {
        if (null !== cU.current) return;
        const RU = WU();
        ("Forward" === UU ? RU + uU < tU.length : RU > 0) && xU(UU, !0, 0, RU)
      }), [WU, xU, uU, tU.length]);
      (0, EU.useEffect)((() => {
        RU.onOpened()
      }), [RU]), (0, EU.useEffect)((() => () => {
        var UU;
        null === (UU = GU.current) || void 0 === UU || UU.animation.cancel()
      }), []), (0, EU.useEffect)((() => {
        const UU = UU => {
          var RU;
          UU.pointerId !== (null === (RU = cU.current) || void 0 === RU ? void 0 : RU.pointerId) || cU.current.following || (cU.current = null)
        };
        return window.addEventListener("pointerup", UU), () => {
          window.removeEventListener("pointerup", UU)
        }
      }), []), (0, bU.d)((UU => ("ArrowLeft" === UU.code || "ArrowRight" === UU.code) && !(0, KU.isTypingInInput)()), (UU => {
        UU.stopPropagation(), mU("ArrowLeft" === UU.code ? "Back" : "Forward")
      }));
      const JU = (UU, RU, gU) => {
          const tU = function(UU, RU, gU, tU) {
            return (UU < 0 ? gU : tU) ? DU.c.clampAbs(UU, RU) : Math.sign(UU) * RU * (1 - 1 / (.55 * Math.abs(UU) / RU + 1))
          }(UU.base + gU, uU * UU.width, eU, QU);
          return "Forward" === RU ? Math.min(tU, 0) : Math.max(tU, 0)
        },
        YU = (UU, RU) => {
          const gU = cU.current;
          if (cU.current = null, null === gU.direction) return;
          gU.speed.add(UU, RU);
          const tU = gU.speed.get(),
            pU = JU(gU, gU.direction, UU - gU.x);
          xU(gU.direction, null !== function(UU, RU, gU, tU, pU) {
            if (Math.abs(RU) >= .3 ? Math.sign(RU) !== Math.sign(UU) : Math.abs(UU) < .5 * gU) return null;
            const EU = UU < 0 ? "Forward" : "Back";
            return ("Forward" === EU ? tU : pU) ? EU : null
          }(pU, tU, uU * gU.width, eU, QU), tU, hU)
        },
        BU = tU.some((UU => UU.active)),
        VU = (UU, gU, pU) => (0, iU.jsx)(MU, {
          className: UU,
          page: gU >= 0 && gU < tU.length ? tU[gU] : void 0,
          hidden: pU,
          building: BU,
          journal: RU
        });
      return (0, iU.jsx)(nU.d, {
        close: PU.l,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, iU.jsxs)("section", {
          className: IU()("PlotsJournal", {
            Spread: pU
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": gU("plotsGame:journalTitle"),
          children: [(0, iU.jsx)(wU.h, {
            className: "PlotsJournalClose",
            onClick: PU.l
          }), (0, iU.jsx)(ER, {
            direction: "Back",
            disabled: !QU,
            onTurn: mU
          }), (0, iU.jsx)("div", {
            className: "PlotsJournalBookPages",
            onPointerDown: UU => {
              var RU;
              if (!UU.isPrimary || 0 !== UU.button || null !== GU.current && null !== UU.target.closest("button")) return;
              const gU = new UR;
              gU.add(UU.clientX, UU.timeStamp);
              const tU = jU.current.Forward.offsetWidth,
                pU = GU.current;
              GU.current = null;
              let EU = 0;
              if (null !== pU) {
                const RU = jU.current[pU.direction],
                  gU = gR(RU);
                pU.animation.cancel(), tR(RU, gU), EU = function(UU, RU, gU, tU) {
                  return (UU < 0 ? gU : tU) ? UU : Math.sign(UU) * RU * (1 / (1 - Math.min(Math.abs(UU) / RU, .99)) - 1) / .55
                }(function(UU, RU, gU, tU) {
                  return gU * (NU(RU) - NU("Forward" === UU ? 0 : tU))
                }(pU.direction, gU, tU, CU), uU * tU, eU, QU), UU.currentTarget.setPointerCapture(UU.pointerId)
              }
              cU.current = {
                pointerId: UU.pointerId,
                x: UU.clientX,
                y: UU.clientY,
                base: EU,
                width: tU,
                following: null !== pU,
                direction: null !== (RU = null === pU || void 0 === pU ? void 0 : pU.direction) && void 0 !== RU ? RU : null,
                speed: gU
              }
            },
            onPointerMove: UU => {
              const RU = cU.current;
              if (null === RU || UU.pointerId !== RU.pointerId) return;
              if (0 === UU.buttons) return void YU(UU.clientX, UU.timeStamp);
              const gU = UU.clientX - RU.x;
              !RU.following && function(UU, RU) {
                return Math.abs(UU) > 8 && Math.abs(UU) > Math.abs(RU)
              }(gU, UU.clientY - RU.y) && (RU.following = !0, RU.direction = gU < 0 ? "Forward" : "Back", UU.currentTarget.setPointerCapture(UU.pointerId)), null !== RU.direction && (RU.speed.add(UU.clientX, UU.timeStamp), tR(jU.current[RU.direction], function(UU, RU, gU, tU) {
                const pU = gU * NU("Forward" === UU ? 0 : tU) + RU;
                return DU.c.clamp(lU(pU / gU), 0, tU)
              }(RU.direction, JU(RU, RU.direction, gU), RU.width, CU)))
            },
            onPointerUp: UU => {
              var RU;
              UU.pointerId === (null === (RU = cU.current) || void 0 === RU ? void 0 : RU.pointerId) && YU(UU.clientX, UU.timeStamp)
            },
            onPointerCancel: UU => {
              const RU = cU.current;
              UU.pointerId === (null === RU || void 0 === RU ? void 0 : RU.pointerId) && (cU.current = null, null !== RU.direction && xU(RU.direction, !1, 0, hU))
            },
            children: (0, iU.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [pU && VU("Left", hU - 2, !0), VU("Right", hU + 2 * uU - 1, !0), (0, iU.jsxs)("div", {
                ref: UU => {
                  jU.current.Back = UU
                },
                className: "PlotsJournalLeaf Back",
                children: [VU("Recto", hU - 1, !0), pU && VU("Verso", hU, !1)]
              }), (0, iU.jsxs)("div", {
                ref: UU => {
                  jU.current.Forward = UU
                },
                className: "PlotsJournalLeaf Forward",
                children: [VU("Recto", hU + uU - 1, !1), pU && VU("Verso", hU + uU, !0)]
              })]
            })
          }), (0, iU.jsx)(ER, {
            direction: "Forward",
            disabled: !eU,
            onTurn: mU
          })]
        })
      })
    }

    function ER(UU) {
      let {
        direction: RU,
        disabled: gU,
        onTurn: tU
      } = UU;
      const {
        t: pU
      } = (0, aU.B)();
      return (0, iU.jsx)("div", {
        className: IU()("PlotsJournalArrow", RU),
        children: (0, iU.jsx)(wU.e, {
          disabled: gU,
          ariaLabel: pU("Forward" === RU ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            tU(RU)
          },
          children: (0, iU.jsx)(JU.c, {
            name: "angle-up"
          })
        })
      })
    }
    var PR = gU(36187),
      TR = gU(1790),
      qR = gU(1836);
    const KR = "plotsStepChanged",
      cR = "plotsPlotChanged";
    class GR {
      constructor() {
        this.step = ["none"], this.plot = ["none"]
      }
      getStep() {
        return this.step
      }
      receiveStep(UU) {
        this.step = UU, cU.p.yh(KR, UU, !0)
      }
      getPlot() {
        return this.plot
      }
      receivePlot(UU) {
        this.plot = UU, cU.p.yh(cR, UU, !0)
      }
    }
    const jR = "KeyJ";

    function uR(UU) {
      let {
        hud: RU,
        journal: gU
      } = UU;
      const tU = (0, oU.h)(fU, gU.getPages()),
        pU = (0, oU.h)(KR, RU.getStep()),
        {
          isTouchScreen: EU
        } = (0, TU.l)(["isTouchScreen"]),
        {
          t: cU
        } = (0, aU.B)(),
        GU = null !== tU && "none" === pU[0];
      return (0, bU.d)((UU => null !== tU && UU.code === jR && !UU.repeat && !(0, KU.isTypingInInput)()), (UU => {
        (0, qU.A)(UU, GU, PU.w)
      })), GU ? (0, iU.jsx)(PR.e, {
        placement: "topRight",
        children: (0, iU.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, iU.jsxs)("button", {
            type: "button",
            className: IU()("PlotsJournalButton SmallTextBold", {
              Touch: EU
            }),
            onClick: PU.w,
            children: [(0, iU.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, iU.jsx)(TR.c, {
                itemName: "Book",
                amount: 0
              })
            }), cU("plotsGame:journalButton"), !EU && (0, iU.jsx)(qR.b, {
              className: "PlotsJournalButtonKey",
              keyCode: jR
            })]
          })
        })
      }) : null
    }
    var CR = gU(37980),
      hR = gU(37740),
      QR = gU(36467),
      eR = gU(9110),
      WR = gU(9125),
      fR = gU(37335);
    const xR = new Map([
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
      mR = [...QR.c.blockRemoveActionRoots, ...hR.b, ...eR.i, "Board", "Code Block", "Custom Lobby Block"],
      IR = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let JR = null;

    function wR() {
      return JR ??= function() {
        const UU = nR(),
          RU = Math.max(...UU.map((UU => YU.f[UU].id))) + 1,
          gU = new Int32Array(RU),
          tU = new Int32Array(RU),
          pU = new Uint8Array(RU).fill(1),
          EU = new Uint8Array(RU),
          PU = new Uint8Array(RU),
          TU = new Array(RU).fill("Air"),
          qU = new Map,
          KU = UU => {
            let RU = qU.get(UU);
            return void 0 === RU && (RU = qU.size + 1, qU.set(UU, RU)), RU
          },
          cU = new Set(mR);
        for (const jU of UU) {
          var GU;
          const {
            id: UU,
            meta: RU,
            altActionable: qU,
            canBePlacedOver: uU
          } = YU.f[jU];
          gU[UU] = KU(bR(jU));
          const CU = RU.stairsCorner;
          if (null === CU) tU[UU] = gU[UU];
          else {
            const gU = CU.endsWith("Right");
            tU[UU] = KU(`${RU.rootName}|rot${gU?RU.rot%4+1:RU.rot}|${RU.halfblockPlacement}|${CU.replace("Right","Left")}`)
          }
          pU[UU] = uU ? 1 : 0, EU[UU] = qU || null !== RU.open || jU in fR.c || cU.has(RU.rootName) || void 0 !== (0, hR.f)(RU.rootName) ? 1 : 0;
          const {
            rootName: hU
          } = RU;
          PU[UU] = null !== RU.open || hR.b.includes(hU) || hU.includes("Bookshelf") || hU.includes("Mailbox") ? 1 : 0, TU[UU] = null !== (GU = (0, CR.e)(UU)) && void 0 !== GU ? GU : hU
        }
        return {
          kinds: gU,
          shapes: tU,
          empty: pU,
          inUse: EU,
          ownAltActionMessage: PU,
          placingItems: TU
        }
      }(), JR
    }

    function nR() {
      return Object.keys(YU.f).filter((UU => YU.f[UU].name === UU))
    }

    function bR(UU) {
      var RU;
      const gU = YU.f[UU],
        {
          rootName: tU,
          rot: pU
        } = gU.meta,
        [, ...EU] = (null !== (RU = gU.rootMetaDesc) && void 0 !== RU ? RU : UU).split("|"),
        PU = EU.filter((UU => !("meta" === UU || IR.test(UU) || (0, WR.A)(gU) && /^[nesw]+$/.test(UU) || eR.i.includes(tU) && /^[lrud]+$/.test(UU) || DU.J.includes(tU) && /^(left|right)$/.test(UU))));
      return [tU, ...PU].map((UU => "fenceGate" === gU.model && UU === `rot${pU}` ? "rot" + ((pU - 1) % 2 + 1) : UU)).join("|")
    }

    function oR(UU, RU) {
      const {
        kinds: gU,
        shapes: tU
      } = wR();
      return gU[UU] === gU[RU] || tU[UU] === tU[RU]
    }

    function ZR(UU) {
      return 1 === wR().empty[UU]
    }

    function aR(UU) {
      return wR().placingItems[UU]
    }

    function YR(UU) {
      return xR.get(YU.f[UU].meta.rootName)
    }
    var BR = gU(9106),
      VR = gU(9121);
    const rR = [0, 0, 0, 1, 1, 1],
      XR = (0, BR.c)([
        [2, 0, 2, 6, 6, 6]
      ]),
      vR = (0, BR.c)([
        [3, 0, 3, 5, 5, 5]
      ]),
      dR = (0, BR.c)([
        [3, 3, 3, 5, 8, 5]
      ]),
      HR = [0, 1, 2, 3].map((UU => (0, BR.c)((0, BR.m)([
        [3, 2, 0, 5, 7, 3]
      ], UU))));

    function SR(UU) {
      const {
        du: RU,
        model: gU,
        blockModel: tU,
        meta: pU
      } = YU.f[UU];
      return void 0 !== RU ? RU : "CentreCross" === gU ? XR : null !== tU && void 0 !== tU && tU.startsWith("torch") ? pU.halfblockPlacement === VR.d.side ? HR[pU.rot - 1] : pU.halfblockPlacement === VR.d.top ? dR : vR : rR
    }
    var sR = gU(36437),
      yR = gU(189);

    function kR(UU, RU) {
      const gU = yR.e.dW / 2;
      return UU[0] < RU[0] + gU && UU[0] + 1 > RU[0] - gU && UU[1] < RU[1] + yR.e.FW && UU[1] + 1 > RU[1] && UU[2] < RU[2] + gU && UU[2] + 1 > RU[2] - gU
    }

    function FR(UU, RU, gU, tU, pU) {
      const EU = Math.hypot(...RU.dir);
      if (!Number.isFinite(EU) || 0 === EU) return -1;
      const {
        from: PU,
        reach: TU,
        solid: qU
      } = RU, KU = [RU.dir[0] / EU, RU.dir[1] / EU, RU.dir[2] / EU], cU = null === qU ? TU : Math.min(TU, function(UU, RU, gU) {
        const tU = iR(UU, RU, gU);
        if (tU !== 1 / 0) return tU;
        return (gU[0] + .5 - UU[0]) * RU[0] + (gU[1] + .5 - UU[1]) * RU[1] + (gU[2] + .5 - UU[2]) * RU[2]
      }(PU, KU, qU) + .75);
      let GU = -1,
        jU = 1 / 0,
        uU = 1 / 0;
      for (let CU = 0; CU < UU.length; CU += 4) {
        const RU = [UU[CU], UU[CU + 1], UU[CU + 2]],
          EU = pU(CU) ? TU : cU;
        let qU = -1,
          hU = iR(PU, KU, RU);
        if (hU > EU) {
          const UU = [RU[0] + .5 - PU[0], RU[1] + .5 - PU[1], RU[2] + .5 - PU[2]];
          if (hU = UU[0] * KU[0] + UU[1] * KU[1] + UU[2] * KU[2], hU <= 0 || hU > EU) continue;
          if (qU = Math.hypot(UU[0] - hU * KU[0], UU[1] - hU * KU[1], UU[2] - hU * KU[2]), qU > .7 || !tU(CU)) continue
        }(qU < jU || qU === jU && hU < uU) && gU(CU) && (GU = CU, jU = qU, uU = hU)
      }
      return GU
    }

    function iR(UU, RU, gU) {
      let tU = 0,
        pU = 1 / 0;
      for (let EU = 0; EU < 3; EU++) {
        const PU = gU[EU] - UU[EU];
        if (0 === RU[EU]) {
          if (PU > 0 || PU + 1 < 0) return 1 / 0;
          continue
        }
        const TU = PU / RU[EU],
          qU = (PU + 1) / RU[EU];
        tU = Math.max(tU, Math.min(TU, qU)), pU = Math.min(pU, Math.max(TU, qU))
      }
      return tU <= pU ? tU : 1 / 0
    }
    var AR = gU(37598),
      zR = gU(38069);
    const MR = [1, 1, 1];
    class DR {
      constructor(UU) {
        this.api = UU, this.meshes = null, this.shown = null
      }
      show(UU) {
        if (!(0, sR.c)(UU, this.shown))
          if (this.shown = null === UU ? null : [UU[0], UU[1], UU[2]], null !== this.meshes)
            for (const RU of this.meshes) this.api.setGameMesh(RU, null === UU ? {
              visible: !1
            } : {
              anchor: UU,
              visible: !0
            });
          else if (null !== UU) {
          const RU = [AR.g, AR.g, AR.g, 0, 0, 0];
          this.meshes = [this.build([RU], AR.i, UU), this.build((0, AR.e)(), AR.m, UU)]
        }
      }
      dispose() {
        for (const RU of null !== (UU = this.meshes) && void 0 !== UU ? UU : []) {
          var UU;
          this.api.disposeGameMesh(RU)
        }
        this.meshes = null, this.shown = null
      }
      build(UU, RU, gU) {
        const tU = [],
          pU = [];
        for (const [EU, PU, TU, qU, KU, cU] of UU)(0, zR.f)(tU, pU, [qU + .5, KU + .5, cU + .5], [EU, PU, TU]);
        return this.api.createGameMesh({
          positions: tU,
          indices: pU
        }, {
          rgb: MR,
          alpha: RU,
          onTop: !0
        }, gU)
      }
    }
    class LR {
      constructor(UU) {
        this.api = UU, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(UU) {
        const RU = yR.e.jC;
        this.chunks = [];
        for (let gU = 0; gU < UU.length; gU += 3) {
          const tU = Math.floor(UU[gU] / RU),
            pU = Math.floor(UU[gU + 1] / RU),
            EU = Math.floor(UU[gU + 2] / RU);
          this.watches(tU, pU, EU) || this.chunks.push(tU, pU, EU)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const UU = performance.now();
        if (UU - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = UU;
        let RU = !1;
        for (let gU = 0; gU < this.chunks.length; gU += 3) {
          const UU = this.api.getChunkVersion(this.chunks[gU], this.chunks[gU + 1], this.chunks[gU + 2]);
          this.versions[gU / 3] !== UU && (this.versions[gU / 3] = UU, RU = !0)
        }
        return RU
      }
      watches(UU, RU, gU) {
        for (let tU = 0; tU < this.chunks.length; tU += 3)
          if (this.chunks[tU] === UU && this.chunks[tU + 1] === RU && this.chunks[tU + 2] === gU) return !0;
        return !1
      }
    }
    const NR = .35,
      lR = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      OR = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      Ug = [.95, .2, .15];
    class Rg {
      constructor() {
        this.groups = []
      }
      add(UU, RU, gU, tU, pU) {
        let EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : rR;
        for (const PU of this.groups)
          if (pg(PU, tU, pU)) return PU.cells.push(UU, RU, gU), void PU.boxes.push(EU);
        this.groups.push({
          rgb: tU,
          look: pU,
          cells: [UU, RU, gU],
          boxes: [EU]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class gg {
      constructor(UU) {
        this.api = UU, this.shown = []
      }
      show(UU) {
        const RU = [];
        for (const gU of UU) {
          const UU = this.shown.findIndex((UU => {
            let {
              group: RU
            } = UU;
            return pg(RU, gU.rgb, gU.look) && Eg(RU, gU)
          })); - 1 === UU ? RU.push(this.build(gU)) : (RU.push(this.shown[UU]), this.shown.splice(UU, 1))
        }
        this.dispose(), this.shown = RU
      }
      dispose() {
        for (const {
            meshes: UU
          }
          of this.shown)
          for (const RU of UU) this.api.disposeGameMesh(RU);
        this.shown = []
      }
      build(UU) {
        const {
          rgb: RU,
          look: gU,
          boxes: tU
        } = UU, pU = [RU[0] + (1 - RU[0]) * NR, RU[1] + (1 - RU[1]) * NR, RU[2] + (1 - RU[2]) * NR], EU = [this.buildMesh(UU.cells, RU, gU.alpha, ((UU, RU, pU, EU) => {
          tg(UU, RU, pU, tU[EU], gU.size, !1)
        })), this.buildMesh(UU.cells, pU, gU.alpha, ((UU, RU, pU, EU) => {
          tg(UU, RU, pU, tU[EU], gU.size, !0)
        }))];
        return gU.crossed && EU.push(this.buildMesh(UU.cells, RU, .9, ((UU, RU, tU) => {
          (0, zR.j)(UU, RU, tU, gU.size + .01, .12)
        }))), {
          group: UU,
          meshes: EU
        }
      }
      buildMesh(UU, RU, gU, tU) {
        const pU = [UU[0], UU[1], UU[2]],
          EU = [],
          PU = [];
        for (let TU = 0; TU < UU.length; TU += 3) tU(EU, PU, [UU[TU] - pU[0] + .5, UU[TU + 1] - pU[1] + .5, UU[TU + 2] - pU[2] + .5], TU / 3);
        return this.api.createGameMesh({
          positions: EU,
          indices: PU
        }, {
          rgb: [RU[0], RU[1], RU[2]],
          alpha: gU
        }, pU)
      }
    }

    function tg(UU, RU, gU, tU, pU, EU) {
      for (let PU = 0; PU < tU.length; PU += 6) {
        const TU = [0, 0, 0],
          qU = [0, 0, 0];
        for (let UU = 0; UU < 3; UU++) TU[UU] = gU[UU] + ((tU[PU + UU] + tU[PU + UU + 3]) / 2 - .5) * pU, qU[UU] = (tU[PU + UU + 3] - tU[PU + UU]) * pU;
        (0, zR.b)(UU, RU, TU, qU, EU)
      }
    }

    function pg(UU, RU, gU) {
      return UU.rgb[0] === RU[0] && UU.rgb[1] === RU[1] && UU.rgb[2] === RU[2] && UU.look === gU
    }

    function Eg(UU, RU) {
      if (UU.cells.length !== RU.cells.length) return !1;
      for (let gU = 0; gU < UU.cells.length; gU++)
        if (UU.cells[gU] !== RU.cells[gU]) return !1;
      return UU.boxes.every(((UU, gU) => UU === RU.boxes[gU]))
    }

    function Pg(UU, RU) {
      return UU.getClientOption(RU, "blockReach") + 1
    }
    class Tg {
      constructor(UU, RU, gU) {
        this.api = UU, this.localPlayerId = RU, this.pickNext = gU, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(UU) {
        const [RU, , gU] = UU.cameraDirection, tU = Math.hypot(RU, gU);
        tU > .001 && (this.heading = [RU / tU, gU / tU])
      }
      tapped(UU, RU, gU) {
        const tU = Pg(this.api, this.localPlayerId),
          {
            origin: pU,
            direction: EU
          } = this.api.getActionRay(),
          PU = [...pU],
          TU = [
            [PU, [PU[0] + EU[0] * tU, PU[1] + EU[1] * tU, PU[2] + EU[2] * tU]]
          ];
        null !== UU && TU.push([PU, (0, sR.b)(UU)]), this.tap = {
          lines: TU,
          next: RU,
          ms: gU
        }
      }
      filled(UU, RU) {
        this.tap = null, this.turnFrom(UU, RU), this.retry(RU)
      }
      arrived(UU, RU) {
        const {
          tap: gU
        } = this;
        if (null === gU || RU - gU.ms > 1500) return null;
        const tU = (0, sR.b)(UU);
        return (0, sR.c)(gU.next, UU) || gU.lines.some((UU => {
          let [RU, gU] = UU;
          return function(UU, RU, gU) {
            const tU = [gU[0] - RU[0], gU[1] - RU[1], gU[2] - RU[2]],
              pU = [UU[0] - RU[0], UU[1] - RU[1], UU[2] - RU[2]],
              EU = tU[0] ** 2 + tU[1] ** 2 + tU[2] ** 2,
              PU = 0 === EU ? 0 : Math.min(1, Math.max(0, (pU[0] * tU[0] + pU[1] * tU[1] + pU[2] * tU[2]) / EU));
            return Math.hypot(pU[0] - tU[0] * PU, pU[1] - tU[1] * PU, pU[2] - tU[2] * PU)
          }(tU, RU, gU) <= .9
        })) ? (this.tap = null, this.turnFrom(UU, RU), gU.ms) : null
      }
      turnFrom(UU, RU) {
        this.pending = {
          from: UU,
          ms: RU,
          turnMs: Math.max(50, Math.min(250, RU - this.lastFillMs))
        }, this.lastFillMs = RU
      }
      retry(UU) {
        const {
          pending: RU
        } = this;
        if (null === RU) return;
        if (UU - RU.ms > 1500) return void(this.pending = null);
        const gU = this.pickNext((0, sR.b)(RU.from), (UU => (0, sR.c)(UU, RU.from)));
        if (null === gU) return;
        this.pending = null;
        const {
          turning: tU
        } = this;
        if (null !== tU && UU < tU.endMs && (0, sR.c)(tU.to, gU)) return;
        const pU = this.api.getActionRay().origin,
          EU = [gU[0] + .5 - pU[0], gU[1] + .5 - pU[1], gU[2] + .5 - pU[2]],
          PU = Math.hypot(EU[0], EU[2]);
        if (PU < .3) {
          const UU = Math.max(PU, .001);
          EU[0] = this.heading[0] * UU, EU[2] = this.heading[1] * UU
        }
        this.api.turnCamera(EU, RU.turnMs), this.turning = {
          to: gU,
          endMs: UU + RU.turnMs
        }
      }
    }
    class qg {
      constructor(UU, RU, gU) {
        this.api = UU, this.localPlayerId = RU, this.juice = gU, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], this.lastFilled = null, this.lastSeenFilled = null, this.playerCells = [], this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = null, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new LR(UU), this.meshes = new gg(UU), this.outline = new DR(UU), this.turn = new Tg(UU, RU, ((UU, RU) => this.pickNext(UU, RU)))
      }
      qC(UU) {
        const RU = "active" === UU[0] ? `${UU[1]}|${UU[3]}|${UU[4]}|${UU[5]}|${UU[6]}` : "";
        if ("active" !== UU[0]) "built" === UU[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , gU, tU, pU, EU] = UU;
          RU !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = gU) : gU === this.layerY ? this.burstUnlisted(tU) : gU > this.layerY && this.finishLayer(gU), this.layerY = gU, this.layerCells.has(gU) || this.layerCells.set(gU, tU.filter(cg)), this.ghostCells = tU, this.palette = pU, this.occupiedCells = EU
        }
        RU !== this.blueprint && (this.blueprint = RU, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((UU => this.api.blockNameToBlockId(UU))), this.chunkWatch.watch([...this.ghostCells.filter(cg), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(UU) {
        this.burstUnlisted([]), UU > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = UU)
      }
      HG() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const UU = performance.now();
        let RU = !1;
        for (const [pU, EU] of this.foreseen) {
          var gU;
          if (UU - EU > 1e3) this.foreseen.delete(pU), RU = !0, (null === (gU = this.lastFilled) || void 0 === gU ? void 0 : gU.join()) === pU && (this.lastFilled = this.lastSeenFilled)
        }
        const tU = Kg(this.api.getPositionView(this.localPlayerId));
        (RU || tU.some(((UU, RU) => UU !== this.playerCells[RU]))) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(UU) {
        const RU = new Set;
        for (let pU = 0; pU < UU.length; pU += 4) RU.add(`${UU[pU]},${UU[pU+1]},${UU[pU+2]}`);
        const gU = [],
          {
            ghostCells: tU
          } = this;
        for (let pU = 0; pU < tU.length; pU += 4) {
          const UU = `${tU[pU]},${tU[pU+1]},${tU[pU+2]}`;
          !RU.has(UU) && this.open.delete(UU) && gU.push(this.filledCell(pU))
        }
        this.burst(gU)
      }
      refresh() {
        const {
          ghostCells: UU,
          palette: RU,
          occupiedCells: gU
        } = this, tU = new Rg, pU = new Set, EU = [], PU = [];
        for (let TU = 0; TU < UU.length; TU += 4) {
          const [gU, qU, KU, cU] = [UU[TU], UU[TU + 1], UU[TU + 2], UU[TU + 3]], GU = this.api.getBlockId(gU, qU, KU), jU = `${gU},${qU},${KU}`, uU = oR(this.blockIds[cU], GU);
          !uU && ZR(GU) ? tU.add(gU, qU, KU, YR(RU[cU]), lR, SR(RU[cU])) : uU ? this.open.has(jU) && EU.push(this.filledCell(TU)) : tU.add(gU, qU, KU, Ug, OR), !uU && this.api.isBlockInLoadedChunk(gU, qU, KU) && (pU.add(jU), PU.push(gU, qU, KU, ZR(GU) ? 0 : 1))
        }
        this.open = pU, this.nextCells = PU;
        for (let TU = 0; TU < gU.length; TU += 3) {
          const [UU, RU, pU] = [gU[TU], gU[TU + 1], gU[TU + 2]];
          ZR(this.api.getBlockId(UU, RU, pU)) || tU.add(UU, RU, pU, Ug, OR)
        }
        this.meshes.show(tU.toArray()), this.burst(EU), this.showNext(), this.turn.retry(performance.now())
      }
      burst(UU) {
        const RU = performance.now(),
          gU = [];
        for (const [pU, EU, PU] of UU) {
          const UU = [pU, EU, PU];
          this.lastSeenFilled = UU, this.foreseen.delete(UU.join()) || gU.push(UU)
        }
        const tU = this.isHolding(RU);
        for (const pU of gU) {
          if (this.lastFilled = pU, tU && this.pressFilled) {
            this.turn.filled(pU, RU);
            continue
          }
          const UU = this.turn.arrived(pU, RU);
          if (null !== UU) {
            this.pressFilled = tU;
            for (const [RU, gU] of this.foreseen) gU <= UU && this.foreseen.delete(RU)
          }
        }
        this.juice.filled(UU)
      }
      showNext() {
        var UU;
        const RU = this.api.getPositionView(this.localPlayerId);
        this.playerCells.splice(0, 1 / 0, ...Kg(RU));
        const gU = this.lastFilled;
        this.nextCell = this.pickNext(null === gU ? [RU[0], RU[1] + 1, RU[2]] : (0, sR.b)(gU), (() => !1)), this.outline.show(null !== (UU = this.aimed) && void 0 !== UU ? UU : this.nextCell)
      }
      pickNext(UU, RU) {
        const gU = this.api.getPositionView(this.localPlayerId),
          tU = [gU[0], gU[1] + yR.e.FW * yR.e.playerEyeToHeightRatio, gU[2]],
          pU = Pg(this.api, this.localPlayerId),
          {
            nextCells: EU
          } = this,
          PU = UU => [EU[UU], EU[UU + 1], EU[UU + 2]],
          TU = function(UU, RU, gU, tU, pU, EU) {
            let PU = -1,
              TU = -1,
              qU = 1 / 0;
            for (let KU = 0; KU < UU.length; KU += RU) {
              const RU = (EU(KU) ? 2 : 0) + (tU(KU) ? 1 : 0);
              if (RU < TU || pU(KU)) continue;
              const cU = (UU[KU] + .5 - gU[0]) ** 2 + (UU[KU + 1] + .5 - gU[1]) ** 2 + (UU[KU + 2] + .5 - gU[2]) ** 2;
              (RU > TU || cU < qU) && (PU = KU, TU = RU, qU = cU)
            }
            return PU
          }(EU, 4, UU, (UU => 1 === EU[UU + 3]), (UU => {
            const tU = PU(UU);
            return kR(tU, gU) || this.foreseen.has(tU.join()) || RU(tU)
          }), (UU => function(UU, RU, gU) {
            return (RU[0] + .5 - UU[0]) ** 2 + (RU[1] + .5 - UU[1]) ** 2 + (RU[2] + .5 - UU[2]) ** 2 <= gU ** 2
          }(tU, PU(UU), pU)));
        return -1 === TU ? null : PU(TU)
      }
      afterRender(UU) {
        var RU;
        this.turn.look(UU);
        const gU = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === gU ? null : gU.position), this.outline.show(null !== (RU = this.aimed) && void 0 !== RU ? RU : this.nextCell)
      }
      isHolding(UU) {
        return null !== this.altMs && UU - this.altMs <= 500
      }
      attemptAltAction(UU) {
        const RU = performance.now();
        if (this.isHolding(RU) || (this.pressFilled = !1), this.altMs = RU, this.pressFilled) return "preventPlacement";
        const gU = this.findAimed(UU);
        if (null !== gU) return this.foreseen.set(gU.join(), RU), this.lastFilled = gU, this.aimed = null, this.showNext(), this.turn.filled(gU, RU), this.pressFilled = !0, "preventPlacement";
        null !== this.nextCell && this.turn.tapped(UU, this.nextCell, RU)
      }
      findAimed(UU) {
        return function(UU, RU, gU, tU, pU, EU, PU) {
          const TU = UU.QRU(RU),
            qU = null === TU || null === UU.blockNameToBlockId(TU.name, !0) ? null : TU.name,
            KU = UU.getPositionView(RU),
            {
              origin: cU,
              direction: GU
            } = UU.getActionRay(),
            jU = FR(tU, {
              from: cU,
              dir: GU,
              reach: Pg(UU, RU),
              solid: gU
            }, (RU => {
              const gU = [tU[RU], tU[RU + 1], tU[RU + 2]];
              return !oR(pU[tU[RU + 3]], UU.getBlockId(...gU)) && !PU.has(gU.join()) && UU.isBlockInLoadedChunk(...gU) && !kR(gU, KU)
            }), (UU => null === qU || qU === aR(pU[tU[UU + 3]])), (UU => null !== EU && tU[UU] === EU[0] && tU[UU + 1] === EU[1] && tU[UU + 2] === EU[2]));
          return -1 === jU ? null : [tU[jU], tU[jU + 1], tU[jU + 2]]
        }(this.api, this.localPlayerId, UU, this.ghostCells, this.blockIds, this.nextCell, this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(UU) {
        const {
          ghostCells: RU
        } = this, [gU, tU, pU] = YR(this.palette[RU[UU + 3]]);
        return [RU[UU], RU[UU + 1], RU[UU + 2], gU, tU, pU]
      }
    }

    function Kg(UU) {
      let [RU, gU, tU] = UU;
      const pU = yR.e.dW / 2;
      return [Math.floor(RU), Math.floor(gU), Math.floor(tU), Math.floor(RU - pU), Math.floor(RU + pU), Math.floor(gU + yR.e.FW), Math.floor(tU - pU), Math.floor(tU + pU)]
    }

    function cg(UU, RU) {
      return RU % 4 !== 3
    }

    function Gg(UU, RU, gU, tU, pU) {
      if (!UU.isBlockInLoadedChunk(RU, tU - 6, gU) || !UU.isBlockInLoadedChunk(RU, tU + 6 + pU, gU) || !UU.canModifyBlockAt(RU, tU, gU)) return NaN;
      let EU = tU - 1;
      if (0 !== UU.getBlockId(RU, EU, gU)) {
        for (; EU < tU + 6 && 0 !== UU.getBlockId(RU, EU + 1, gU);) EU++;
        return EU
      }
      for (; EU > tU - 6;)
        if (EU--, 0 !== UU.getBlockId(RU, EU, gU)) return EU;
      return NaN
    }

    function jg(UU, RU, gU, tU, pU) {
      let EU = 0;
      for (let PU = tU + 1; PU <= tU + pU; PU++) 0 !== UU.getBlockId(RU, PU, gU) && EU++;
      return EU
    }

    function ug(UU) {
      const RU = new Map;
      for (const PU of UU) {
        var gU;
        if (Number.isNaN(PU)) return null;
        RU.set(PU, (null !== (gU = RU.get(PU)) && void 0 !== gU ? gU : 0) + 1)
      }
      let tU = NaN,
        pU = 0;
      for (const [PU, TU] of RU)(TU > pU || TU === pU && PU < tU) && (tU = PU, pU = TU);
      let EU = 0;
      for (const PU of UU) EU += Math.abs(PU - tU);
      return EU
    }

    function Cg(UU, RU, gU, tU) {
      const {
        eye: pU,
        forward: EU,
        tanHalfFovX: PU,
        tanHalfFovY: TU
      } = UU, [qU, KU] = function(UU) {
        let [RU, gU, tU] = UU;
        const pU = Math.hypot(RU, tU),
          [EU, PU] = [tU / pU, -RU / pU];
        return [
          [EU, 0, PU],
          [gU * PU, tU * EU - RU * PU, -gU * EU]
        ]
      }(EU), [cU, GU] = [RU * PU, gU * TU], jU = EU[0] + cU * qU[0] + GU * KU[0], uU = EU[1] + GU * KU[1], CU = EU[2] + cU * qU[2] + GU * KU[2], hU = (tU - pU[1]) / uU;
      return hU > 0 && hU < 1 / 0 ? [pU[0] + hU * jU, pU[2] + hU * CU] : null
    }
    const hg = "plotsBlueprintPlacementChanged",
      Qg = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class eg {
      constructor(UU, RU) {
        this.api = UU, this.localPlayerId = RU, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = UU => {
          var RU, gU, tU, EU;
          const PU = null !== (RU = null === (gU = this.placing) || void 0 === gU ? void 0 : gU.rotation) && void 0 !== RU ? RU : 0,
            {
              size: TU
            } = kU(UU, PU),
            qU = this.api.Hx(this.localPlayerId),
            [KU, cU] = null !== (tU = null !== (EU = function(UU, RU, gU) {
              const [tU, pU, EU] = RU, [PU, TU, qU] = [Math.floor(gU[0]), Math.floor(gU[1]), Math.floor(gU[2])], KU = 6 + Math.max(tU, EU) / 2, [cU, GU] = [Math.ceil(KU + tU / 2), Math.ceil(KU + EU / 2)], [jU, uU] = [PU - cU, qU - GU], [CU, hU] = [2 * cU + 1, 2 * GU + 1], QU = new Float64Array(CU * hU), eU = new Uint16Array(CU * hU);
              for (let mU = 0; mU < CU; mU++)
                for (let RU = 0; RU < hU; RU++) {
                  const gU = Gg(UU, jU + mU, uU + RU, TU, pU);
                  QU[mU * hU + RU] = gU, Number.isNaN(gU) || (eU[mU * hU + RU] = jg(UU, jU + mU, uU + RU, gU, pU))
                }
              const WU = [];
              let fU = null,
                xU = 1 / 0;
              for (let mU = 0; mU + tU <= CU; mU++)
                for (let UU = 0; UU + EU <= hU; UU++) {
                  const [RU, pU] = [jU + mU, uU + UU], TU = Math.hypot(RU + tU / 2 - gU[0], pU + EU / 2 - gU[2]);
                  if (TU > KU || PU >= RU - 2 && PU < RU + tU + 2 && qU >= pU - 2 && qU < pU + EU + 2) continue;
                  WU.length = 0;
                  let cU = 0;
                  for (let gU = 0; gU < tU; gU++)
                    for (let RU = 0; RU < EU; RU++) WU.push(QU[(mU + gU) * hU + UU + RU]), cU += eU[(mU + gU) * hU + UU + RU];
                  const GU = ug(WU);
                  if (null === GU) continue;
                  const CU = TU + 3 * (GU + cU);
                  CU < xU && (xU = CU, fU = [RU, pU])
                }
              return fU
            }(this.api, TU, qU)) && void 0 !== EU ? EU : this.cornerOnTarget(TU)) && void 0 !== tU ? tU : [Math.floor(qU[0]) + 2, Math.floor(qU[2])];
          this.placing = {
            id: UU,
            rotation: PU,
            corner: [KU, this.playerLevel(), cU],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null
          }, this.update(), this.api.sendCommand(`${pU} preview`)
        }, this.rotate = () => {
          const {
            id: UU,
            rotation: RU,
            corner: gU
          } = this.placing, pU = tU[(tU.indexOf(RU) + 1) % tU.length], [EU, , PU] = kU(UU, RU).size, [TU, , qU] = kU(UU, pU).size;
          this.moveTo(gU[0] + Math.floor(EU / 2) - Math.floor(TU / 2), gU[2] + Math.floor(PU / 2) - Math.floor(qU / 2), pU)
        }, this.hoverAt = (UU, RU) => {
          this.placing.hover = [UU, RU], this.moveCentreTo(this.camera, UU, RU)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (UU, RU) => {
          const gU = this.placing,
            {
              eye: tU,
              forward: pU,
              tanHalfFovX: EU,
              tanHalfFovY: PU
            } = this.camera,
            TU = {
              eye: [tU[0], tU[1], tU[2]],
              forward: [pU[0], pU[1], pU[2]],
              tanHalfFovX: EU,
              tanHalfFovY: PU
            },
            qU = gU.corner[1],
            KU = Cg(TU, UU, RU, qU);
          gU.hover = null, gU.drag = KU && {
            view: TU,
            ground: KU,
            corner: [gU.corner[0], gU.corner[2]],
            level: qU
          }
        }, this.dragTo = (UU, RU) => {
          const gU = this.placing.drag,
            tU = gU && Cg(gU.view, UU, RU, gU.level);
          null !== gU && null !== tU && this.moveTo(gU.corner[0] + Math.round(tU[0] - gU.ground[0]), gU.corner[1] + Math.round(tU[1] - gU.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const UU = this.view;
          UU.waiting || (UU.blocked ? this.yh({
            ...UU,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const UU = this.placing,
            {
              id: RU,
              rotation: gU,
              corner: tU
            } = UU;
          this.api.sendCommand(`${pU} place ${RU} ${tU.join(" ")} ${gU}`), UU.sent = {
            atMs: performance.now(),
            corner: [...tU],
            rotation: gU,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${pU} preview off`))
        }, this.chunkWatch = new LR(UU), this.meshes = new gg(UU)
      }
      getView() {
        return this.view
      }
      HG() {
        const UU = this.placing;
        null !== UU && (null !== UU.sent && !UU.sent.timedOut && performance.now() - UU.sent.atMs > 3e3 ? (UU.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(UU) || this.chunkWatch.changed()) && this.update())
      }
      afterRender(UU) {
        const RU = this.placing;
        null !== RU && (! function(UU, RU) {
          for (let gU = 0; gU < 3; gU++) RU.eye[gU] = UU.cameraPosition[gU], RU.forward[gU] = UU.cameraDirection[gU];
          RU.tanHalfFovX = UU.tanHalfFovX, RU.tanHalfFovY = UU.tanHalfFovY
        }(UU, this.camera), null !== RU.hover && this.moveCentreTo(this.camera, RU.hover[0], RU.hover[1]))
      }
      qC(UU) {
        const RU = this.placing;
        if (null === RU || null === RU.sent || "active" !== UU[0]) return;
        const {
          sent: gU
        } = RU, [, tU, pU, EU, PU, TU, qU] = UU;
        pU && tU === RU.id && qU === gU.rotation && EU === gU.corner[0] && PU === gU.corner[1] && TU === gU.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(UU) {
        let [RU, , gU] = UU;
        const tU = this.api.getTargetedBlock();
        if (null === tU) return null;
        const [pU, , EU] = tU.position;
        return [pU - Math.floor(RU / 2), EU - Math.floor(gU / 2)]
      }
      playerLevel() {
        var UU;
        const [RU, gU, tU] = this.api.Hx(this.localPlayerId);
        if (null !== (UU = this.api.getLocalPlayerMovement()) && void 0 !== UU && UU.onGround) return Math.ceil(gU - .01);
        const [pU, EU, PU] = [Math.floor(RU), Math.floor(gU), Math.floor(tU)];
        for (let TU = EU; TU >= EU - 2; TU--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(pU, TU, PU))) return TU + 1;
        return EU
      }
      followPlayerLevel(UU) {
        if (Wg(UU)) return !1;
        const RU = this.playerLevel();
        return RU !== UU.corner[1] && (UU.corner[1] = RU, !0)
      }
      moveCentreTo(UU, RU, gU) {
        const tU = this.placing,
          pU = Cg(UU, RU, gU, tU.corner[1]);
        if (null !== pU) {
          const [UU, , RU] = kU(tU.id, tU.rotation).size;
          this.moveTo(Math.round(pU[0] - UU / 2), Math.round(pU[1] - RU / 2))
        }
      }
      moveTo(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const tU = this.placing;
        if (Wg(tU)) return;
        const [pU, EU, PU] = tU.corner;
        if (this.centreOnPlot(pU, PU) && !this.centreOnPlot(UU, RU, gU))
          if (this.centreOnPlot(UU, PU, gU)) RU = PU;
          else {
            if (!this.centreOnPlot(pU, RU, gU)) return;
            UU = pU
          } UU === pU && RU === PU && gU === tU.rotation || (tU.rotation = gU, tU.corner = [UU, EU, RU], this.update())
      }
      centreOnPlot(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: tU,
          corner: pU
        } = this.placing, [EU, , PU] = kU(tU, gU).size;
        return this.api.canModifyBlockAt(UU + Math.floor(EU / 2), pU[1], RU + Math.floor(PU / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.yh(null)
      }
      update() {
        const {
          id: UU,
          rotation: RU,
          corner: gU,
          refusals: tU
        } = this.placing, pU = new Rg, EU = [];
        let PU = !1,
          TU = 0;
        for (const {
            offset: cU,
            block: GU
          }
          of kU(UU, RU).cells) {
          const [UU, RU, tU] = [gU[0] + cU[0], gU[1] + cU[1], gU[2] + cU[2]];
          EU.push(UU, RU, tU);
          const qU = !this.api.canModifyBlockAt(UU, RU, tU),
            KU = this.api.getBlockId(UU, RU, tU),
            jU = !ZR(KU) && !oR(this.api.blockNameToBlockId(GU), KU);
          PU ||= qU, TU += jU ? 1 : 0, qU || jU ? pU.add(UU, RU, tU, Ug, OR) : pU.add(UU, RU, tU, YR(GU), Qg, SR(GU))
        }
        this.chunkWatch.watch(EU), this.meshes.show(pU.toArray());
        const qU = this.view,
          KU = Wg(this.placing);
        (null === qU || void 0 === qU ? void 0 : qU.id) === UU && qU.blocked === PU && qU.toClear === TU && qU.waiting === KU && qU.refusals === tU || this.yh({
          id: UU,
          blocked: PU,
          toClear: TU,
          waiting: KU,
          refusals: tU
        })
      }
      yh(UU) {
        this.view = UU, cU.p.yh(hg, UU, !0)
      }
    }

    function Wg(UU) {
      let {
        sent: RU
      } = UU;
      return null !== RU && !RU.timedOut
    }
    var fg = gU(3937),
      xg = gU(38696);

    function mg(UU, RU, gU) {
      const tU = [255 * UU, 255 * RU, 255 * gU],
        [pU, EU, PU] = tU.map((UU => UU + .4 * (255 - UU)));
      return {
        texture: "square_particle",
        hG: 48,
        minLifeTime: .3 / xg.e,
        maxLifeTime: .55 / xg.e,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * xg.e * xg.e, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...tU, 1],
          maxColor: [pU, EU, PU, 1]
        }, {
          timeFraction: 1,
          minColor: [...tU, 0],
          maxColor: [pU, EU, PU, 0]
        }],
        blendMode: fg.g.Standard
      }
    }
    const Ig = {
      texture: "glint",
      mipmaps: !1,
      hG: 96,
      minLifeTime: .5 / xg.e,
      maxLifeTime: .9 / xg.e,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * xg.e * xg.e, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: fg.g.OneOne
    };
    class Jg {
      constructor(UU, RU) {
        this.api = UU, this.localPlayerId = RU, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(UU) {
        if (this.api.particlesEnabled())
          for (const [RU, gU, tU, pU, EU, PU] of UU.slice(0, 3)) {
            const UU = `${pU},${EU},${PU}`;
            let TU = this.chips.get(UU);
            void 0 === TU && (TU = this.api.createParticles(mg(pU, EU, PU), {
              pos: [RU + .5, gU + .5, tU + .5]
            }), this.chips.set(UU, TU));
            for (let RU = 0; RU < 8; RU++) this.setPoint(RU, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            TU.emitPoints([RU + .5, gU + .5, tU + .5], this.points, 8)
          }
      }
      layerDone(UU) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const RU = UU.length / 3;
        if (0 === RU || !this.api.particlesEnabled()) return;
        const gU = Math.min(RU, 48),
          [tU, pU, EU] = [UU[0] + .5, UU[1] + 1, UU[2] + .5];
        let PU = 0;
        for (let TU = 0; TU < gU; TU++) {
          const qU = 3 * Math.floor(TU * RU / gU);
          for (let RU = 0; RU < 2; RU++) this.setPoint(PU++, UU[qU] + Math.random() - tU, UU[qU + 1] + 1 - pU, UU[qU + 2] + Math.random() - EU, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(Ig, {
          pos: [tU, pU, EU]
        }), this.sparkles.emitPoints([tU, pU, EU], this.points, PU)
      }
      dispose() {
        var UU;
        for (const RU of this.chips.values()) RU.stop();
        this.chips.clear(), null === (UU = this.sparkles) || void 0 === UU || UU.stop(), this.sparkles = null
      }
      setPoint(UU, RU, gU, tU, pU) {
        const EU = 4 * UU;
        this.points[EU] = RU, this.points[EU + 1] = gU, this.points[EU + 2] = tU, this.points[EU + 3] = pU
      }
    }
    var wg = gU(1844);
    const ng = "SpecialAction1",
      bg = "KeyY",
      og = "KeyX";

    function Zg(UU) {
      let {
        placement: RU
      } = UU;
      const gU = (0, oU.h)(hg, RU.getView()),
        {
          t: tU
        } = (0, aU.B)(),
        {
          isTouchScreen: pU
        } = (0, TU.l)(["isTouchScreen"]),
        EU = null !== gU,
        PU = EU && !gU.blocked && !gU.waiting;
      if ((0, bU.d)((UU => EU && !UU.repeat && !(0, KU.isTypingInInput)() && !(0, qU.q)() && !pU), (UU => {
          const gU = function(UU, RU, gU) {
            if (UU === og) return RU.stop;
            if (UU === bg) return gU ? RU.build : Yg;
            return wg.r[ng].includes(UU) ? RU.rotate : null
          }(UU.code, RU, PU);
          null !== gU && (UU.stopPropagation(), gU())
        })), !EU) return null;
      let cU = pU ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return gU.blocked ? cU = "plotsGame:placementOffPlot" : gU.toClear > 0 && (cU = "plotsGame:placementClear"), (0, iU.jsx)(PR.e, {
        placement: "bottom",
        children: (0, iU.jsxs)("div", {
          className: "PlotsPlacementCard",
          children: [(0, iU.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: tU(CU(gU.id).displayName.translationKey)
          }), (0, iU.jsx)("div", {
            className: IU()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: gU.refusals > 0
            }),
            children: tU(cU)
          }, gU.refusals), (0, iU.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, iU.jsxs)(wU.e, {
              onClick: RU.rotate,
              children: [(0, iU.jsx)(ag, {
                noaAction: ng
              }), tU("plotsGame:placementRotate")]
            }), (0, iU.jsxs)(wU.E, {
              onClick: RU.stop,
              children: [(0, iU.jsx)(ag, {
                keyCode: og
              }), tU("general:cancel")]
            }), (0, iU.jsxs)(wU.j, {
              disabled: !PU,
              onClick: RU.build,
              children: [(0, iU.jsx)(ag, {
                keyCode: bg
              }), tU("plotsGame:placementBuild")]
            })]
          })]
        })
      })
    }

    function ag(UU) {
      return (0, iU.jsx)(qR.b, {
        className: "PlotsPlacementKey",
        ...UU
      })
    }

    function Yg() {}
    var Bg = gU(4206);
    class Vg {
      constructor(UU) {
        this.placement = UU, this.press = null
      }
      down(UU) {
        if (null !== this.press) return !1;
        const {
          id: RU,
          mouse: gU,
          x: tU,
          y: pU,
          atMs: EU
        } = UU;
        return this.press = {
          id: RU,
          mouse: gU,
          x: tU,
          y: pU,
          atMs: EU,
          moved: !1
        }, gU || this.placement.beginDrag(UU.ndcX, UU.ndcY), !0
      }
      move(UU) {
        const RU = this.press;
        null !== RU && RU.id === UU.id && (RU.moved ||= Math.hypot(UU.x - RU.x, UU.y - RU.y) > 8), UU.mouse ? this.placement.hoverAt(UU.ndcX, UU.ndcY) : (null === RU || void 0 === RU ? void 0 : RU.id) === UU.id && this.placement.dragTo(UU.ndcX, UU.ndcY)
      }
      up(UU) {
        const RU = this.press;
        (null === RU || void 0 === RU ? void 0 : RU.id) === UU.id && (this.move(UU), this.end(), !RU.moved && (RU.mouse || UU.atMs - RU.atMs <= 250) && this.placement.tap())
      }
      cancel(UU) {
        var RU;
        (null === (RU = this.press) || void 0 === RU ? void 0 : RU.id) === UU && this.end()
      }
      leave(UU) {
        let {
          id: RU,
          mouse: gU
        } = UU;
        gU && this.placement.endHover(), this.cancel(RU)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }

    function rg(UU) {
      let {
        placement: RU
      } = UU;
      return null === (0, oU.h)(hg, RU.getView()) ? null : (0, iU.jsx)(Xg, {
        placement: RU
      })
    }

    function Xg(UU) {
      let {
        placement: RU
      } = UU;
      (0, Bg.e)(!0, !0, "PlotsPlacementLayer");
      const gU = (0, EU.useMemo)((() => new Vg(RU)), [RU]);
      return (0, iU.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: UU => {
          "mouse" === UU.pointerType && 0 !== UU.button || !gU.down(vg(UU)) || UU.currentTarget.setPointerCapture(UU.pointerId)
        },
        onPointerMove: UU => {
          gU.move(vg(UU))
        },
        onPointerUp: UU => {
          gU.up(vg(UU))
        },
        onPointerCancel: UU => {
          gU.cancel(UU.pointerId)
        },
        onLostPointerCapture: UU => {
          gU.cancel(UU.pointerId)
        },
        onPointerLeave: UU => {
          gU.leave(vg(UU))
        },
        "aria-hidden": !0
      })
    }

    function vg(UU) {
      const {
        left: RU,
        top: gU,
        width: tU,
        height: pU
      } = UU.currentTarget.getBoundingClientRect();
      return {
        id: UU.pointerId,
        mouse: "mouse" === UU.pointerType,
        x: UU.clientX,
        y: UU.clientY,
        ndcX: (UU.clientX - RU) / tU * 2 - 1,
        ndcY: 1 - (UU.clientY - gU) / pU * 2,
        atMs: UU.timeStamp
      }
    }
    var dg = gU(2198),
      Hg = gU(36280),
      Sg = gU(1834),
      sg = gU(1265);
    const yg = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function kg(UU) {
      let {
        hud: RU
      } = UU;
      const gU = (0, oU.h)(cR, RU.getPlot()),
        [tU, pU] = (0, EU.useState)(null),
        PU = (0, Hg.m)(tU);
      if ("none" === gU[0]) return null;
      const [, TU, qU, KU, cU, GU] = gU;
      return (0, iU.jsx)("div", {
        className: IU()("PlotsPlotBannerContainer", {
          Below: PU
        }),
        children: (0, iU.jsx)(Fg, {
          plotX: TU,
          plotZ: qU,
          ownerName: KU,
          ownerId: cU,
          relation: GU,
          plaqueRef: pU
        }, `${TU},${qU}`)
      })
    }

    function Fg(UU) {
      var RU, gU;
      let {
        plotX: tU,
        plotZ: pU,
        ownerName: EU,
        ownerId: PU,
        relation: TU,
        plaqueRef: qU
      } = UU;
      const {
        t: KU
      } = (0, aU.B)(), cU = (0, Sg.k)("hiddenPlayerNames"), GU = (0, Sg.k)("players"), jU = null === PU ? null : null !== (RU = null === (gU = GU.byId[PU]) || void 0 === gU ? void 0 : gU.cosmetics) && void 0 !== RU ? RU : null, uU = KU("plotsGame:plotBannerCoords", {
        x: tU,
        z: pU
      }), CU = "own" === TU || null !== EU;
      return (0, iU.jsxs)("div", {
        ref: qU,
        className: IU()("PlotsPlotBanner", {
          Own: "own" === TU,
          Shared: "shared" === TU
        }),
        role: "status",
        children: [(0, iU.jsxs)("span", {
          className: IU()("PlotsPlotBannerSeal", {
            Face: null !== jU
          }),
          children: [null !== jU && (0, iU.jsx)(dg.d, {
            cosmetics: jU
          }), null === jU && (0, iU.jsx)(JU.c, {
            name: yg[TU]
          })]
        }), (0, iU.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, iU.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === TU && KU("plotsGame:plotBannerYours"), "own" !== TU && null !== EU && KU("plotsGame:plotBannerOwner", {
              name: (0, sg.e)(EU, cU)
            }), !CU && uU]
          }), CU && (0, iU.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [uU, "shared" === TU && (0, iU.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: KU("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }

    function ig(UU) {
      let {
        progress: RU,
        goal: gU
      } = UU;
      const tU = Math.min(RU, gU);
      return (0, iU.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, iU.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": gU,
          "aria-valuenow": tU,
          children: (0, iU.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${tU/gU})`
            }
          })
        }), (0, iU.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [tU, "/", gU]
        })]
      })
    }

    function Ag(UU) {
      return {
        translationKey: `plotsGame:${UU}`,
        actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
      }
    }
    const zg = {
      house: {
        icon: "house",
        titleKey: "plotsGame:starterLotHouseTitle",
        desktop: Ag("starterLotHouseHint", ["alt-fire"]),
        touch: Ag("starterLotHouseHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotHousePlain"
      },
      garden: {
        icon: "sparkle",
        titleKey: "plotsGame:starterLotGarden",
        desktop: Ag("starterLotGardenHint", ["alt-fire"]),
        touch: Ag("starterLotGardenHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotGardenPlain"
      },
      boulder: {
        icon: "hammer",
        titleKey: "plotsGame:starterLotBoulder",
        desktop: Ag("starterLotBreakHint", ["primary-fire"]),
        touch: Ag("starterLotBreakHintTouch"),
        plainKey: "plotsGame:starterLotBreakPlain"
      },
      fly: {
        icon: "angles-up",
        titleKey: "plotsGame:starterLotFly",
        desktop: Ag("starterLotFlyHint", ["jump"]),
        touch: Ag("starterLotFlyHintTouch"),
        plainKey: "plotsGame:starterLotFlyPlain"
      },
      backpack: {
        icon: "backpack",
        titleKey: "plotsGame:starterLotBackpack",
        desktop: Ag("starterLotBackpackHint", ["OpenInventory"]),
        touch: Ag("starterLotBackpackHintTouch"),
        plainKey: "plotsGame:starterLotBackpackPlain"
      },
      neighbour: {
        icon: "person",
        titleKey: "plotsGame:starterLotNeighbour",
        desktop: Ag("starterLotNeighbourHint", ["forward", "left", "backward", "right"]),
        touch: Ag("starterLotNeighbourHintTouch"),
        plainKey: "plotsGame:starterLotNeighbourPlain"
      }
    };

    function Mg(UU, RU, gU) {
      const {
        translationKey: tU,
        actions: pU
      } = gU ? RU.touch : RU.desktop;
      if (0 === pU.length) return UU(tU);
      const EU = [];
      for (const PU of pU) {
        const tU = (0, wg.q)(PU, gU),
          pU = wg.r[PU][0];
        if (null === tU && void 0 === pU) return UU(RU.plainKey);
        EU.push(null === tU ? (0, wg.m)(pU) : UU(tU.translationKey))
      }
      return UU(tU, {
        key: EU.join("")
      })
    }

    function Dg(UU) {
      let {
        hud: RU
      } = UU;
      const gU = (0, oU.h)(KR, RU.getStep()),
        {
          t: tU
        } = (0, aU.B)();
      return (0, iU.jsxs)(PR.e, {
        placement: "bottom",
        children: ["step" === gU[0] && (0, iU.jsx)(Lg, {
          step: gU[1],
          progress: gU[2],
          goal: gU[3]
        }, gU[1]), "celebrate" === gU[0] && (0, iU.jsx)(Ng, {
          className: IU()("Celebrate", {
            Gold: "house" === gU[1]
          }),
          icon: "star",
          title: tU("house" === gU[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
        }, `celebrate-${gU[1]}`)]
      })
    }

    function Lg(UU) {
      let {
        step: RU,
        progress: gU,
        goal: tU
      } = UU;
      const {
        isTouchScreen: pU
      } = (0, TU.l)(["isTouchScreen"]), {
        t: EU
      } = (0, aU.B)(), PU = zg[RU];
      return (0, iU.jsxs)(Ng, {
        icon: PU.icon,
        title: EU(PU.titleKey),
        children: [(0, iU.jsx)("div", {
          className: "PlotsStepCardHint SmallTextLight",
          children: Mg(EU, PU, pU)
        }), tU > 1 && (0, iU.jsx)(ig, {
          progress: gU,
          goal: tU
        }), "backpack" === RU && pU && (0, iU.jsx)(lg, {})]
      })
    }

    function Ng(UU) {
      let {
        className: RU,
        icon: gU,
        title: tU,
        children: pU
      } = UU;
      return (0, iU.jsxs)("div", {
        className: IU()("PlotsStepCard", RU),
        role: "status",
        children: [(0, iU.jsx)("span", {
          className: "PlotsStepCardIcon",
          children: (0, iU.jsx)(JU.c, {
            name: gU
          })
        }), (0, iU.jsxs)("div", {
          className: "PlotsStepCardBody",
          children: [(0, iU.jsx)("div", {
            className: "PlotsStepCardTitle SmallTextBold",
            children: tU
          }), pU]
        })]
      })
    }

    function lg() {
      return (0, EU.useEffect)((() => (TU.b.set({
        backpackPointerRequested: !0
      }), () => {
        TU.b.set({
          backpackPointerRequested: !1
        })
      })), []), null
    }
    const Og = function(UU, RU, gU, tU) {
      let {
        localPlayerId: pU
      } = tU;
      const TU = new GR;
      let qU = null,
        KU = null,
        cU = null,
        GU = null,
        jU = null;
      const uU = [];
      return {
        onCreate: UU => {
          qU = new Jg(UU, pU), KU = new qg(UU, pU, qU), cU = new qg(UU, pU, qU), GU = new eg(UU, pU), jU = new xU(UU, GU), uU.push((0, PU.y)((0, EU.createElement)(EU.Fragment, null, (0, EU.createElement)(kg, {
            hud: TU
          }), (0, EU.createElement)(Dg, {
            hud: TU
          }), (0, EU.createElement)(uR, {
            hud: TU,
            journal: jU
          }), (0, EU.createElement)(rg, {
            placement: GU
          }), (0, EU.createElement)(Zg, {
            placement: GU
          })), {
            content: (0, EU.createElement)(pR, {
              journal: jU
            })
          }))
        },
        HG: () => {
          KU.HG(), cU.HG(), GU.HG(), jU.HG()
        },
        onPlayerAttemptAltAction: (UU, RU, gU, tU, pU, EU) => {
          var PU;
          if (null !== EU) return;
          const TU = void 0 === RU ? null : [RU, gU, tU];
          return null !== (PU = KU.attemptAltAction(TU)) && void 0 !== PU ? PU : cU.attemptAltAction(TU)
        },
        onPlayerClickUp: () => {
          KU.endPress(), cU.endPress()
        },
        onAfterRender: (UU, RU) => {
          GU.afterRender(RU), KU.afterRender(RU), cU.afterRender(RU)
        },
        onClose: () => {
          for (const UU of uU) UU();
          qU.dispose(), KU.dispose(), cU.dispose(), GU.dispose(), qU = null, KU = null, cU = null, GU = null, jU = null
        },
        onReceivedMessageFromServer: (UU, RU) => {
          if ("plotsStarterLot" === UU) TU.receiveStep(RU);
          else if ("plotsPlot" === UU) TU.receivePlot(RU);
          else if ("plotsStarterHouse" === UU) KU.qC(RU);
          else if ("plotsBlueprint" === UU) {
            const UU = RU;
            cU.qC(UU), GU.qC(UU)
          } else "plotsJournal" === UU ? jU.qC(RU) : "plotsJournalOpen" === UU ? jU.openFromServer() : "plotsPreviewEnd" === UU && GU.endFromServer()
        }
      }
    }
  },
  38696: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU,
      g: () => EU
    });
    const tU = 1 / .6,
      pU = {
        kind: "smokePuff"
      };
    class EU {
      constructor(UU, RU, gU) {
        this.style = UU, this.hG = RU, this.half = gU, this.particles = null, this.lastFrame = -1
      }
      emit(UU, RU, gU) {
        let EU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return gU !== this.lastFrame && (this.lastFrame = gU, this.particles || (this.particles = UU.createParticles(function(UU, RU) {
          const [
            [gU, EU, PU],
            [TU, qU, KU]
          ] = UU.colours;
          return {
            texture: UU.soft ? pU : "square_particle",
            hG: RU,
            minLifeTime: UU.life[0] / tU,
            maxLifeTime: UU.life[1] / tU,
            minEmitPower: UU.power[0] * tU,
            maxEmitPower: UU.power[1] * tU,
            minSize: UU.size[0],
            maxSize: UU.size[1],
            emitRate: 0,
            gravity: [0, UU.lift * tU * tU, 0],
            dir1: [-UU.spread, 1, -UU.spread],
            dir2: [UU.spread, 1, UU.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [gU, EU, PU, UU.alpha],
              maxColor: [TU, qU, KU, UU.alpha]
            }, {
              timeFraction: 1,
              minColor: [gU, EU, PU, 0],
              maxColor: [TU, qU, KU, 0]
            }],
            blendMode: UU.blendMode
          }
        }(this.style, this.hG), {
          pos: RU,
          half: this.half
        })), this.particles.moveTo(RU, this.half), this.particles.emit(EU), !0)
      }
      dispose() {
        var UU;
        null === (UU = this.particles) || void 0 === UU || UU.stop(), this.particles = null
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);