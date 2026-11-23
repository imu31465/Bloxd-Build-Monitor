export const id = 248;
export const ids = [248];
export const modules = {
  39288: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => VZ
    });
    const QC = [0, 90, 180, 270],
      wC = "plotsblueprint";
    var bC = ZC(48),
      nC = ZC(36488),
      fC = ZC(20),
      oC = ZC(1557),
      qC = ZC(1645),
      FC = ZC(28);
    const WC = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      NC = {
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
      MC = ["small", "medium", "large"].flatMap((CC => WC.flat().filter((zC => NC[zC].tier === CC))));

    function gC(CC) {
      return NC[CC]
    }
    const SC = new Map(WC.flatMap((CC => CC.slice(1).map(((zC, ZC) => [zC, CC[ZC]])))));

    function pC(CC) {
      var zC;
      return null !== (zC = SC.get(CC)) && void 0 !== zC ? zC : null
    }
    const PC = {
      farm_hut: "plotsGame:journalNoteFarmHut",
      rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
      castle_tower: "plotsGame:journalNoteCastleTower",
      farm_house: "plotsGame:journalNoteFarmHouse",
      farm_barn: "plotsGame:journalNoteFarmBarn"
    };

    function GC(CC, zC) {
      const ZC = new Set(CC),
        QC = function(CC) {
          const zC = new Set(CC);
          return new Set(MC.filter((CC => {
            const ZC = pC(CC);
            return null === ZC || zC.has(ZC)
          })))
        }(ZC);
      return MC.map((CC => {
        const wC = CC === zC;
        return ZC.has(CC) ? {
          id: CC,
          active: wC,
          state: "completed",
          unlockedBy: null
        } : QC.has(CC) ? {
          id: CC,
          active: wC,
          state: "open",
          unlockedBy: null
        } : {
          id: CC,
          active: wC,
          state: "locked",
          unlockedBy: pC(CC)
        }
      }))
    }
    const RC = "plotsJournalChanged";
    class AC {
      constructor(CC, zC) {
        this.api = CC, this.placement = zC, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.Cg("journal_opened")
        }, this.build = CC => {
          this.Cg("placement_started"), this.placement.start(CC), (0, nC.h)()
        }, this.putAway = () => {
          this.api.sendCommand(`${wC} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      Ag(CC) {
        let [, zC, ZC] = CC;
        this.pages = GC(zC, ZC), FC.o.bp(RC, this.pages, !0)
      }
      openFromServer() {
        this.openRequested = !0, this.ZN()
      }
      ZN() {
        this.openRequested && !fC.b.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, oC.s)() || (0, qC.isTypingInInput)() || null !== this.placement.getView() || (0, nC.u)())
      }
      Cg(CC) {
        this.reported.has(CC) || (this.reported.add(CC), this.api.sendCommand(`${wC} report ${CC}`))
      }
    }
    var xC = ZC(1002),
      JC = ZC.n(xC),
      IC = ZC(1013),
      iC = ZC(1388),
      vC = ZC(4469),
      eC = ZC(3403),
      hC = ZC(1383),
      KC = ZC(1074),
      YC = ZC(1143),
      dC = ZC(9194);
    const mC = [0, 90, 180, 270],
      HC = /^(meta\|rot\d)\|([lrud]+)$/,
      EC = "nesw",
      lC = /^meta\|([nesw]*)\|?(Stacked)?$/,
      XC = function(CC) {
        const zC = new WeakMap;
        return (ZC, QC) => {
          let wC = zC.get(ZC);
          return void 0 === wC && (wC = CC(ZC, QC), zC.set(ZC, wC)), wC
        }
      }((CC => new cC(CC)));
    class cC {
      constructor(CC) {
        this.blockMetadata = CC, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const zC = new Set(Object.keys(CC).map((zC => CC[zC].id)));
        zC.add(0), this.maxBlockId = Math.max(...zC)
      }
      static
      for (CC) {
        return XC(CC)
      }
      getBlockIdMapping(CC, zC) {
        const ZC = this.getBlockIdMappingKey(CC, zC);
        let QC = this.blockIdMappings.get(ZC);
        return void 0 === QC && mC.includes(CC) && (QC = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, CC, zC), this.blockIdMappings.set(ZC, QC)), QC
      }
      turnBlockId(CC, zC, ZC) {
        return this.mapBlockId(this.blockMetadata[CC], zC, this.getRotationMapping(zC, ZC), ZC)
      }
      getBlockIdMappingKey(CC, zC) {
        return `r${CC}|m${Number(zC)}`
      }
      createBlockIdMapping(CC, zC, ZC, QC) {
        const wC = new Uint16Array(zC + 1),
          bC = this.getRotationMapping(ZC, QC);
        for (const nC in CC) {
          const zC = CC[nC];
          wC[zC.id] = this.mapBlockId(zC, ZC, bC, QC)
        }
        return wC
      }
      getRotationMapping(CC, zC) {
        const ZC = Math.round(CC / 90),
          QC = new Uint8Array(4);
        for (let wC = 0; wC < 4; wC++) QC[wC] = (4 + wC - ZC) % 4;
        if (zC) {
          let CC = QC[0];
          QC[0] = QC[1], QC[1] = CC, CC = QC[2], QC[2] = QC[3], QC[3] = CC
        }
        return QC
      }
      mapBlockId(CC, zC, ZC, QC) {
        var wC;
        const {
          blockMetadata: bC
        } = this, nC = Math.round(zC / 90), {
          id: fC,
          meta: oC
        } = CC, {
          rot: qC,
          rootName: FC,
          metaStr: WC
        } = oC;
        let NC;
        const [, MC, gC] = null !== (wC = lC.exec(WC)) && void 0 !== wC ? wC : [];
        if (void 0 !== MC) {
          var SC, pC;
          NC = null !== (SC = null === (pC = bC[`${FC}|meta|${[EC.split("").filter(((CC,zC)=>MC.split("").some((CC=>{const ZC=EC.indexOf(CC);return((QC?3-ZC:ZC)+nC)%4===zC})))).join(""),gC].filter(Boolean).join("|")}`]) || void 0 === pC ? void 0 : pC.id) && void 0 !== SC ? SC : fC
        } else if (null === qC) NC = fC;
        else {
          var PC, GC;
          const CC = ZC[qC - 1] + 1;
          let zC = WC.replace(`rot${qC}`, `rot${CC}`);
          QC && oC.stairsCorner && (zC = zC.replace(/(Left|Right)$/, (CC => "Left" === CC ? "Right" : "Left"))), QC && "Chest" === FC && (zC = zC.replace(/\|(left|right)$/, ((CC, zC) => "left" === zC ? "|right" : "|left")));
          const wC = HC.exec(zC);
          if (QC && null !== wC) {
            const CC = "lrud".split("").filter((CC => wC[2].includes("l" === CC ? "r" : "r" === CC ? "l" : CC)));
            zC = `${wC[1]}|${CC.join("")}`
          }
          const nC = `${FC}|${zC}`;
          if (NC = null !== (PC = null === (GC = bC[nC]) || void 0 === GC ? void 0 : GC.id) && void 0 !== PC ? PC : null, null === NC) {
            const CC = bC[FC];
            NC = CC.rootMetaDesc === nC ? CC.id : fC
          }
        }
        return NC
      }
    }

    function uC(CC, zC, ZC) {
      let {
        xRotationMappedOrigin: QC,
        shouldSwapXZ: wC
      } = ZC;
      const bC = wC ? zC : CC;
      return null === QC ? bC : QC - bC
    }

    function rC(CC, zC, ZC) {
      let {
        zRotationMappedOrigin: QC,
        shouldSwapXZ: wC
      } = ZC;
      const bC = wC ? CC : zC;
      return null === QC ? bC : QC - bC
    }
    const sC = {
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
      TC = new Map;

    function aC(CC, zC) {
      const ZC = `${CC}|${zC}`;
      let QC = TC.get(ZC);
      if (void 0 === QC) {
        const {
          size: wC,
          palette: bC,
          layers: nC
        } = sC[CC], fC = 90 === zC || 270 === zC, [oC, qC] = fC ? [wC[2], wC[0]] : [wC[0], wC[2]], FC = function(CC, zC, ZC) {
          let QC = null,
            wC = null,
            bC = !1;
          switch (CC) {
            case 0:
              break;
            case 90:
              QC = zC - 1, bC = !0;
              break;
            case 180:
              QC = zC - 1, wC = ZC - 1;
              break;
            case 270:
              wC = ZC - 1, bC = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${CC}`)
          }
          return {
            xRotationMappedOrigin: QC,
            zRotationMappedOrigin: wC,
            shouldSwapXZ: bC
          }
        }(zC, oC, qC), WC = cC.for(dC.g), NC = bC.map((CC => (0, dC.e)(WC.turnBlockId((0, dC.k)(CC), zC, !1)))), MC = [];
        nC.forEach(((CC, zC) => {
          CC.split(" ").forEach(((CC, ZC) => {
            for (let QC = 0; QC < CC.length; QC++)
              if ("." !== CC[QC]) {
                const wC = [uC(QC, ZC, FC), zC, rC(QC, ZC, FC)];
                MC.push({
                  offset: wC,
                  block: NC[CC.charCodeAt(QC) - "a".charCodeAt(0)]
                })
              }
          }))
        })), QC = {
          size: [oC, wC[1], qC],
          cells: MC
        }, TC.set(ZC, QC)
      }
      return QC
    }
    const tC = {
      farm_hut: ZC.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
      farm_house: ZC.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
      farm_barn: ZC.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
      rusticHome_tent: ZC.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
      rusticHome_cabin: ZC.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
      rusticHome_house: ZC.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
      market_stand: ZC.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
      market_stall: ZC.p + "static/media/market_stall.9a562807f9dff591618a.webp",
      market_shop: ZC.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
      castle_wall: ZC.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
      castle_gate: ZC.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
      castle_tower: ZC.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
    };
    var DC = ZC(1056);
    const jC = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function yC(CC) {
      let {
        page: zC,
        building: ZC,
        onBuild: QC,
        onPutAway: wC
      } = CC;
      const {
        t: bC
      } = (0, YC.y)(), {
        displayName: nC,
        tier: fC
      } = gC(zC.id), oC = aC(zC.id, 0).cells.length, qC = PC[zC.id], FC = "locked" === zC.state, WC = ZC ? iC.g : iC.o;
      return (0, DC.jsxs)("article", {
        className: JC()("PlotsJournalPage", {
          Locked: FC
        }),
        children: [(0, DC.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: bC(nC.translationKey)
        }), (0, DC.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [bC(jC[fC]), " \xb7 ", bC("plotsGame:journalBlocks", {
            blocks: String(oC)
          })]
        }), (0, DC.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [MC.map((CC => (0, DC.jsx)("img", {
            className: JC()({
              Shown: CC === zC.id
            }),
            src: tC[CC],
            alt: "",
            draggable: !1
          }, CC))), "completed" === zC.state && (0, DC.jsx)("span", {
            className: "PlotsJournalStamp",
            children: bC("plotsGame:journalBuilt")
          }), FC && (0, DC.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, DC.jsx)(IC.c, {
              name: "lock"
            })
          })]
        }), void 0 !== qC && "completed" !== zC.state && (0, DC.jsx)("p", {
          className: "PlotsJournalNote",
          children: bC(qC)
        }), (0, DC.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === zC.state && (0, DC.jsx)("p", {
            className: "PlotsJournalHint",
            children: bC("plotsGame:journalLocked", {
              name: bC(gC(zC.unlockedBy).displayName.translationKey)
            })
          }), zC.active && (0, DC.jsxs)(DC.Fragment, {
            children: [(0, DC.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: bC("plotsGame:journalBuilding")
            }), (0, DC.jsx)(iC.i, {
              onClick: wC,
              children: bC("plotsGame:journalPutAway")
            })]
          }), !FC && !zC.active && (0, DC.jsx)(WC, {
            onClick: () => {
              QC(zC.id)
            },
            children: bC("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function LC(CC) {
      let {
        className: zC,
        page: ZC,
        hidden: QC,
        building: wC,
        journal: bC
      } = CC;
      return (0, DC.jsxs)("div", {
        ref: CC => {
          null !== CC && (CC.inert = QC)
        },
        className: JC()("PlotsJournalSide", zC),
        children: [void 0 !== ZC && (0, DC.jsx)(yC, {
          page: ZC,
          building: wC,
          onBuild: bC.build,
          onPutAway: bC.putAway
        }), void 0 === ZC && (0, DC.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var UC = ZC(326),
      BC = ZC(1806);

    function OC(CC) {
      return Math.cos((0, BC.j)(CC))
    }

    function kC(CC) {
      return (0, BC.w)(Math.acos(UC.c.clamp(CC, -1, 1)))
    }

    function VC(CC, zC, ZC, QC, wC) {
      const bC = Math.abs(zC - CC),
        nC = (0, BC.w)(wC / (ZC * Math.abs(Math.sin((0, BC.j)(CC))))),
        fC = 450 * Math.min(1, bC / QC),
        oC = nC > 0 ? 3 * bC / nC : 1 / 0;
      return Math.round(Math.max(120, Math.min(fC, oC)))
    }
    class Cz {
      constructor() {
        this.samples = []
      }
      add(CC, zC) {
        for (this.samples.push({
            x: CC,
            at: zC
          }); zC - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const CC = this.samples[0],
          zC = this.samples[this.samples.length - 1];
        return zC.at > CC.at ? (zC.x - CC.x) / (zC.at - CC.at) : 0
      }
    }

    function zz(CC, zC) {
      return CC > zC && CC >= 600
    }

    function Zz(CC) {
      return kC(new DOMMatrixReadOnly(getComputedStyle(CC).transform).m11)
    }

    function Qz(CC, zC) {
      CC.style.transform = `rotateY(${-zC}deg)`, CC.classList.add("Turning")
    }

    function wz(CC) {
      let {
        journal: zC
      } = CC;
      const {
        t: ZC
      } = (0, YC.y)(), QC = (0, hC.f)(RC, zC.getPages()), wC = (0, KC.r)(zz), [fC, oC] = (0, bC.useState)((() => function(CC) {
        const zC = CC.findIndex((CC => CC.active));
        return -1 !== zC ? zC : Math.max(0, CC.findIndex((CC => "open" === CC.state)))
      }(QC))), FC = (0, bC.useRef)(null), WC = (0, bC.useRef)(null), NC = (0, bC.useRef)({
        Forward: null,
        Back: null
      }), MC = wC ? 2 : 1, gC = wC ? 180 : 90, SC = fC - fC % MC, pC = SC > 0, PC = SC + MC < QC.length, GC = (0, bC.useCallback)((() => {
        const CC = WC.current;
        return null === CC ? SC : (WC.current = null, CC.animation.cancel(), (zC = NC.current[CC.direction]).style.transform = "", zC.classList.remove("Turning"), null === CC.next ? SC : (oC(CC.next), CC.next));
        var zC
      }), [SC]), AC = (0, bC.useCallback)(((CC, zC, ZC, QC) => {
        const wC = NC.current[CC],
          bC = Zz(wC),
          nC = zC === ("Forward" === CC) ? gC : 0;
        Qz(wC, nC);
        const fC = wC.animate([{
          transform: `rotateY(${-bC}deg)`
        }, {
          transform: `rotateY(${-nC}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : VC(bC, nC, wC.offsetWidth, gC, nC > bC ? -ZC : ZC),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        WC.current = {
          direction: CC,
          animation: fC,
          next: zC ? QC + ("Forward" === CC ? MC : -MC) : null
        }, fC.onfinish = () => {
          var CC;
          (null === (CC = WC.current) || void 0 === CC ? void 0 : CC.animation) === fC && GC()
        }
      }), [MC, gC, GC]), xC = (0, bC.useCallback)((CC => {
        if (null !== FC.current) return;
        const zC = GC();
        ("Forward" === CC ? zC + MC < QC.length : zC > 0) && AC(CC, !0, 0, zC)
      }), [GC, AC, MC, QC.length]);
      (0, bC.useEffect)((() => {
        zC.onOpened()
      }), [zC]), (0, bC.useEffect)((() => () => {
        var CC;
        null === (CC = WC.current) || void 0 === CC || CC.animation.cancel()
      }), []), (0, bC.useEffect)((() => {
        const CC = CC => {
          var zC;
          CC.pointerId !== (null === (zC = FC.current) || void 0 === zC ? void 0 : zC.pointerId) || FC.current.following || (FC.current = null)
        };
        return window.addEventListener("pointerup", CC), () => {
          window.removeEventListener("pointerup", CC)
        }
      }), []), (0, eC.d)((CC => ("ArrowLeft" === CC.code || "ArrowRight" === CC.code) && !(0, qC.isTypingInInput)()), (CC => {
        CC.stopPropagation(), xC("ArrowLeft" === CC.code ? "Back" : "Forward")
      }));
      const IC = (CC, zC, ZC) => {
          const QC = function(CC, zC, ZC, QC) {
            return (CC < 0 ? ZC : QC) ? UC.c.clampAbs(CC, zC) : Math.sign(CC) * zC * (1 - 1 / (.55 * Math.abs(CC) / zC + 1))
          }(CC.base + ZC, MC * CC.width, PC, pC);
          return "Forward" === zC ? Math.min(QC, 0) : Math.max(QC, 0)
        },
        dC = (CC, zC) => {
          const ZC = FC.current;
          if (FC.current = null, null === ZC.direction) return;
          ZC.speed.add(CC, zC);
          const QC = ZC.speed.get(),
            wC = IC(ZC, ZC.direction, CC - ZC.x);
          AC(ZC.direction, null !== function(CC, zC, ZC, QC, wC) {
            if (Math.abs(zC) >= .3 ? Math.sign(zC) !== Math.sign(CC) : Math.abs(CC) < .5 * ZC) return null;
            const bC = CC < 0 ? "Forward" : "Back";
            return ("Forward" === bC ? QC : wC) ? bC : null
          }(wC, QC, MC * ZC.width, PC, pC), QC, SC)
        },
        mC = QC.some((CC => CC.active)),
        HC = (CC, ZC, wC) => (0, DC.jsx)(LC, {
          className: CC,
          page: ZC >= 0 && ZC < QC.length ? QC[ZC] : void 0,
          hidden: wC,
          building: mC,
          journal: zC
        });
      return (0, DC.jsx)(vC.c, {
        close: nC.k,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, DC.jsxs)("section", {
          className: JC()("PlotsJournal", {
            Spread: wC
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": ZC("plotsGame:journalTitle"),
          children: [(0, DC.jsx)(iC.k, {
            className: "PlotsJournalClose",
            onClick: nC.k
          }), (0, DC.jsx)(bz, {
            direction: "Back",
            disabled: !pC,
            onTurn: xC
          }), (0, DC.jsx)("div", {
            className: "PlotsJournalBookPages",
            onPointerDown: CC => {
              var zC;
              if (!CC.isPrimary || 0 !== CC.button || null !== WC.current && null !== CC.target.closest("button")) return;
              const ZC = new Cz;
              ZC.add(CC.clientX, CC.timeStamp);
              const QC = NC.current.Forward.offsetWidth,
                wC = WC.current;
              WC.current = null;
              let bC = 0;
              if (null !== wC) {
                const zC = NC.current[wC.direction],
                  ZC = Zz(zC);
                wC.animation.cancel(), Qz(zC, ZC), bC = function(CC, zC, ZC, QC) {
                  return (CC < 0 ? ZC : QC) ? CC : Math.sign(CC) * zC * (1 / (1 - Math.min(Math.abs(CC) / zC, .99)) - 1) / .55
                }(function(CC, zC, ZC, QC) {
                  return ZC * (OC(zC) - OC("Forward" === CC ? 0 : QC))
                }(wC.direction, ZC, QC, gC), MC * QC, PC, pC), CC.currentTarget.setPointerCapture(CC.pointerId)
              }
              FC.current = {
                pointerId: CC.pointerId,
                x: CC.clientX,
                y: CC.clientY,
                base: bC,
                width: QC,
                following: null !== wC,
                direction: null !== (zC = null === wC || void 0 === wC ? void 0 : wC.direction) && void 0 !== zC ? zC : null,
                speed: ZC
              }
            },
            onPointerMove: CC => {
              const zC = FC.current;
              if (null === zC || CC.pointerId !== zC.pointerId) return;
              if (0 === CC.buttons) return void dC(CC.clientX, CC.timeStamp);
              const ZC = CC.clientX - zC.x;
              !zC.following && function(CC, zC) {
                return Math.abs(CC) > 8 && Math.abs(CC) > Math.abs(zC)
              }(ZC, CC.clientY - zC.y) && (zC.following = !0, zC.direction = ZC < 0 ? "Forward" : "Back", CC.currentTarget.setPointerCapture(CC.pointerId)), null !== zC.direction && (zC.speed.add(CC.clientX, CC.timeStamp), Qz(NC.current[zC.direction], function(CC, zC, ZC, QC) {
                const wC = ZC * OC("Forward" === CC ? 0 : QC) + zC;
                return UC.c.clamp(kC(wC / ZC), 0, QC)
              }(zC.direction, IC(zC, zC.direction, ZC), zC.width, gC)))
            },
            onPointerUp: CC => {
              var zC;
              CC.pointerId === (null === (zC = FC.current) || void 0 === zC ? void 0 : zC.pointerId) && dC(CC.clientX, CC.timeStamp)
            },
            onPointerCancel: CC => {
              const zC = FC.current;
              CC.pointerId === (null === zC || void 0 === zC ? void 0 : zC.pointerId) && (FC.current = null, null !== zC.direction && AC(zC.direction, !1, 0, SC))
            },
            children: (0, DC.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [wC && HC("Left", SC - 2, !0), HC("Right", SC + 2 * MC - 1, !0), (0, DC.jsxs)("div", {
                ref: CC => {
                  NC.current.Back = CC
                },
                className: "PlotsJournalLeaf Back",
                children: [HC("Recto", SC - 1, !0), wC && HC("Verso", SC, !1)]
              }), (0, DC.jsxs)("div", {
                ref: CC => {
                  NC.current.Forward = CC
                },
                className: "PlotsJournalLeaf Forward",
                children: [HC("Recto", SC + MC - 1, !1), wC && HC("Verso", SC + MC, !0)]
              })]
            })
          }), (0, DC.jsx)(bz, {
            direction: "Forward",
            disabled: !PC,
            onTurn: xC
          })]
        })
      })
    }

    function bz(CC) {
      let {
        direction: zC,
        disabled: ZC,
        onTurn: QC
      } = CC;
      const {
        t: wC
      } = (0, YC.y)();
      return (0, DC.jsx)("div", {
        className: JC()("PlotsJournalArrow", zC),
        children: (0, DC.jsx)(iC.g, {
          disabled: ZC,
          ariaLabel: wC("Forward" === zC ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            QC(zC)
          },
          children: (0, DC.jsx)(IC.c, {
            name: "angle-up"
          })
        })
      })
    }
    var nz = ZC(36483),
      fz = ZC(1822),
      oz = ZC(1884);
    const qz = "plotsStepChanged",
      Fz = "plotsPlotChanged";
    class Wz {
      constructor() {
        this.step = ["none"], this.plot = ["none"]
      }
      getStep() {
        return this.step
      }
      receiveStep(CC) {
        this.step = CC, FC.o.bp(qz, CC, !0)
      }
      getPlot() {
        return this.plot
      }
      receivePlot(CC) {
        this.plot = CC, FC.o.bp(Fz, CC, !0)
      }
    }
    const Nz = "KeyJ";

    function Mz(CC) {
      let {
        hud: zC,
        journal: ZC
      } = CC;
      const QC = (0, hC.f)(RC, ZC.getPages()),
        wC = (0, hC.f)(qz, zC.getStep()),
        {
          isTouchScreen: bC
        } = (0, fC.k)(["isTouchScreen"]),
        {
          t: FC
        } = (0, YC.y)(),
        WC = null !== QC && "none" === wC[0];
      return (0, eC.d)((CC => null !== QC && CC.code === Nz && !CC.repeat && !(0, qC.isTypingInInput)()), (CC => {
        (0, oC.E)(CC, WC, nC.u)
      })), WC ? (0, DC.jsx)(nz.c, {
        placement: "topRight",
        children: (0, DC.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, DC.jsxs)("button", {
            type: "button",
            className: JC()("PlotsJournalButton SmallTextBold", {
              Touch: bC
            }),
            onClick: nC.u,
            children: [(0, DC.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, DC.jsx)(fz.e, {
                itemName: "Book",
                amount: 0
              })
            }), FC("plotsGame:journalButton"), !bC && (0, DC.jsx)(oz.b, {
              className: "PlotsJournalButtonKey",
              keyCode: Nz
            })]
          })
        })
      }) : null
    }
    var gz = ZC(38254),
      Sz = ZC(38004),
      pz = ZC(36794),
      Pz = ZC(9230),
      Gz = ZC(9243),
      Rz = ZC(37640);
    const Az = new Map([
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
      xz = [...pz.e.blockRemoveActionRoots, ...Sz.d, ...Pz.f, "Board", "Code Block", "Custom Lobby Block"],
      Jz = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let Iz = null;

    function iz() {
      return Iz ??= function() {
        const CC = vz(),
          zC = Math.max(...CC.map((CC => dC.g[CC].id))) + 1,
          ZC = new Int32Array(zC),
          QC = new Int32Array(zC),
          wC = new Uint8Array(zC).fill(1),
          bC = new Uint8Array(zC),
          nC = new Uint8Array(zC),
          fC = new Array(zC).fill("Air"),
          oC = new Map,
          qC = CC => {
            let zC = oC.get(CC);
            return void 0 === zC && (zC = oC.size + 1, oC.set(CC, zC)), zC
          },
          FC = new Set(xz);
        for (const NC of CC) {
          var WC;
          const {
            id: CC,
            meta: zC,
            altActionable: oC,
            canBePlacedOver: MC
          } = dC.g[NC];
          ZC[CC] = qC(ez(NC));
          const gC = zC.stairsCorner;
          if (null === gC) QC[CC] = ZC[CC];
          else {
            const ZC = gC.endsWith("Right");
            QC[CC] = qC(`${zC.rootName}|rot${ZC?zC.rot%4+1:zC.rot}|${zC.halfblockPlacement}|${gC.replace("Right","Left")}`)
          }
          wC[CC] = MC ? 1 : 0, bC[CC] = oC || null !== zC.open || NC in Rz.b || FC.has(zC.rootName) || void 0 !== (0, Sz.g)(zC.rootName) ? 1 : 0;
          const {
            rootName: SC
          } = zC;
          nC[CC] = null !== zC.open || Sz.d.includes(SC) || SC.includes("Bookshelf") || SC.includes("Mailbox") ? 1 : 0, fC[CC] = null !== (WC = (0, gz.g)(CC)) && void 0 !== WC ? WC : SC
        }
        return {
          kinds: ZC,
          shapes: QC,
          empty: wC,
          inUse: bC,
          ownAltActionMessage: nC,
          placingItems: fC
        }
      }(), Iz
    }

    function vz() {
      return Object.keys(dC.g).filter((CC => dC.g[CC].name === CC))
    }

    function ez(CC) {
      var zC;
      const ZC = dC.g[CC],
        {
          rootName: QC,
          rot: wC
        } = ZC.meta,
        [, ...bC] = (null !== (zC = ZC.rootMetaDesc) && void 0 !== zC ? zC : CC).split("|"),
        nC = bC.filter((CC => !("meta" === CC || Jz.test(CC) || (0, Gz.F)(ZC) && /^[nesw]+$/.test(CC) || Pz.f.includes(QC) && /^[lrud]+$/.test(CC) || UC.D.includes(QC) && /^(left|right)$/.test(CC))));
      return [QC, ...nC].map((CC => "fenceGate" === ZC.model && CC === `rot${wC}` ? "rot" + ((wC - 1) % 2 + 1) : CC)).join("|")
    }

    function hz(CC, zC) {
      const {
        kinds: ZC,
        shapes: QC
      } = iz();
      return ZC[CC] === ZC[zC] || QC[CC] === QC[zC]
    }

    function Kz(CC) {
      return 1 === iz().empty[CC]
    }

    function Yz(CC) {
      return iz().placingItems[CC]
    }

    function dz(CC) {
      return Az.get(dC.g[CC].meta.rootName)
    }
    var mz = ZC(9225),
      Hz = ZC(9239);
    const Ez = [0, 0, 0, 1, 1, 1],
      lz = (0, mz.b)([
        [2, 0, 2, 6, 6, 6]
      ]),
      Xz = (0, mz.b)([
        [3, 0, 3, 5, 5, 5]
      ]),
      cz = (0, mz.b)([
        [3, 3, 3, 5, 8, 5]
      ]),
      uz = [0, 1, 2, 3].map((CC => (0, mz.b)((0, mz.l)([
        [3, 2, 0, 5, 7, 3]
      ], CC))));

    function rz(CC) {
      const {
        qp: zC,
        model: ZC,
        blockModel: QC,
        meta: wC
      } = dC.g[CC];
      return void 0 !== zC ? zC : "CentreCross" === ZC ? lz : null !== QC && void 0 !== QC && QC.startsWith("torch") ? wC.halfblockPlacement === Hz.c.side ? uz[wC.rot - 1] : wC.halfblockPlacement === Hz.c.top ? cz : Xz : Ez
    }
    var sz = ZC(36766),
      Tz = ZC(184);

    function az(CC, zC) {
      const ZC = Tz.f.tp / 2;
      return CC[0] < zC[0] + ZC && CC[0] + 1 > zC[0] - ZC && CC[1] < zC[1] + Tz.f.Dp && CC[1] + 1 > zC[1] && CC[2] < zC[2] + ZC && CC[2] + 1 > zC[2] - ZC
    }

    function tz(CC, zC, ZC, QC, wC) {
      const bC = Math.hypot(...zC.dir);
      if (!Number.isFinite(bC) || 0 === bC) return -1;
      const {
        from: nC,
        reach: fC,
        solid: oC
      } = zC, qC = [zC.dir[0] / bC, zC.dir[1] / bC, zC.dir[2] / bC], FC = null === oC ? fC : Math.min(fC, function(CC, zC, ZC) {
        const QC = Dz(CC, zC, ZC);
        if (QC !== 1 / 0) return QC;
        return (ZC[0] + .5 - CC[0]) * zC[0] + (ZC[1] + .5 - CC[1]) * zC[1] + (ZC[2] + .5 - CC[2]) * zC[2]
      }(nC, qC, oC) + .75);
      let WC = -1,
        NC = 1 / 0,
        MC = 1 / 0;
      for (let gC = 0; gC < CC.length; gC += 4) {
        const zC = [CC[gC], CC[gC + 1], CC[gC + 2]],
          bC = wC(gC) ? fC : FC;
        let oC = -1,
          SC = Dz(nC, qC, zC);
        if (SC > bC) {
          const CC = [zC[0] + .5 - nC[0], zC[1] + .5 - nC[1], zC[2] + .5 - nC[2]];
          if (SC = CC[0] * qC[0] + CC[1] * qC[1] + CC[2] * qC[2], SC <= 0 || SC > bC) continue;
          if (oC = Math.hypot(CC[0] - SC * qC[0], CC[1] - SC * qC[1], CC[2] - SC * qC[2]), oC > .7 || !QC(gC)) continue
        }(oC < NC || oC === NC && SC < MC) && ZC(gC) && (WC = gC, NC = oC, MC = SC)
      }
      return WC
    }

    function Dz(CC, zC, ZC) {
      let QC = 0,
        wC = 1 / 0;
      for (let bC = 0; bC < 3; bC++) {
        const nC = ZC[bC] - CC[bC];
        if (0 === zC[bC]) {
          if (nC > 0 || nC + 1 < 0) return 1 / 0;
          continue
        }
        const fC = nC / zC[bC],
          oC = (nC + 1) / zC[bC];
        QC = Math.max(QC, Math.min(fC, oC)), wC = Math.min(wC, Math.max(fC, oC))
      }
      return QC <= wC ? QC : 1 / 0
    }
    var jz = ZC(37900),
      yz = ZC(38349);
    const Lz = [1, 1, 1];
    class Uz {
      constructor(CC) {
        this.api = CC, this.meshes = null, this.shown = null
      }
      show(CC) {
        if (!(0, sz.i)(CC, this.shown))
          if (this.shown = null === CC ? null : [CC[0], CC[1], CC[2]], null !== this.meshes)
            for (const zC of this.meshes) this.api.setGameMesh(zC, null === CC ? {
              visible: !1
            } : {
              anchor: CC,
              visible: !0
            });
          else if (null !== CC) {
          const zC = [jz.g, jz.g, jz.g, 0, 0, 0];
          this.meshes = [this.build([zC], jz.i, CC), this.build((0, jz.c)(), jz.n, CC)]
        }
      }
      dispose() {
        for (const zC of null !== (CC = this.meshes) && void 0 !== CC ? CC : []) {
          var CC;
          this.api.disposeGameMesh(zC)
        }
        this.meshes = null, this.shown = null
      }
      build(CC, zC, ZC) {
        const QC = [],
          wC = [];
        for (const [bC, nC, fC, oC, qC, FC] of CC)(0, yz.f)(QC, wC, [oC + .5, qC + .5, FC + .5], [bC, nC, fC]);
        return this.api.createGameMesh({
          positions: QC,
          indices: wC
        }, {
          rgb: Lz,
          alpha: zC,
          onTop: !0
        }, ZC)
      }
    }
    class Bz {
      constructor(CC) {
        this.api = CC, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(CC) {
        const zC = Tz.f.Ig;
        this.chunks = [];
        for (let ZC = 0; ZC < CC.length; ZC += 3) {
          const QC = Math.floor(CC[ZC] / zC),
            wC = Math.floor(CC[ZC + 1] / zC),
            bC = Math.floor(CC[ZC + 2] / zC);
          this.watches(QC, wC, bC) || this.chunks.push(QC, wC, bC)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const CC = performance.now();
        if (CC - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = CC;
        let zC = !1;
        for (let ZC = 0; ZC < this.chunks.length; ZC += 3) {
          const CC = this.api.getChunkVersion(this.chunks[ZC], this.chunks[ZC + 1], this.chunks[ZC + 2]);
          this.versions[ZC / 3] !== CC && (this.versions[ZC / 3] = CC, zC = !0)
        }
        return zC
      }
      watches(CC, zC, ZC) {
        for (let QC = 0; QC < this.chunks.length; QC += 3)
          if (this.chunks[QC] === CC && this.chunks[QC + 1] === zC && this.chunks[QC + 2] === ZC) return !0;
        return !1
      }
    }
    const Oz = .35,
      kz = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      Vz = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      CZ = [.95, .2, .15];
    class zZ {
      constructor() {
        this.groups = []
      }
      add(CC, zC, ZC, QC, wC) {
        let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Ez;
        for (const nC of this.groups)
          if (wZ(nC, QC, wC)) return nC.cells.push(CC, zC, ZC), void nC.boxes.push(bC);
        this.groups.push({
          rgb: QC,
          look: wC,
          cells: [CC, zC, ZC],
          boxes: [bC]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class ZZ {
      constructor(CC) {
        this.api = CC, this.shown = []
      }
      show(CC) {
        const zC = [];
        for (const ZC of CC) {
          const CC = this.shown.findIndex((CC => {
            let {
              group: zC
            } = CC;
            return wZ(zC, ZC.rgb, ZC.look) && bZ(zC, ZC)
          })); - 1 === CC ? zC.push(this.build(ZC)) : (zC.push(this.shown[CC]), this.shown.splice(CC, 1))
        }
        this.dispose(), this.shown = zC
      }
      dispose() {
        for (const {
            meshes: CC
          }
          of this.shown)
          for (const zC of CC) this.api.disposeGameMesh(zC);
        this.shown = []
      }
      build(CC) {
        const {
          rgb: zC,
          look: ZC,
          boxes: QC
        } = CC, wC = [zC[0] + (1 - zC[0]) * Oz, zC[1] + (1 - zC[1]) * Oz, zC[2] + (1 - zC[2]) * Oz], bC = [this.buildMesh(CC.cells, zC, ZC.alpha, ((CC, zC, wC, bC) => {
          QZ(CC, zC, wC, QC[bC], ZC.size, !1)
        })), this.buildMesh(CC.cells, wC, ZC.alpha, ((CC, zC, wC, bC) => {
          QZ(CC, zC, wC, QC[bC], ZC.size, !0)
        }))];
        return ZC.crossed && bC.push(this.buildMesh(CC.cells, zC, .9, ((CC, zC, QC) => {
          (0, yz.j)(CC, zC, QC, ZC.size + .01, .12)
        }))), {
          group: CC,
          meshes: bC
        }
      }
      buildMesh(CC, zC, ZC, QC) {
        const wC = [CC[0], CC[1], CC[2]],
          bC = [],
          nC = [];
        for (let fC = 0; fC < CC.length; fC += 3) QC(bC, nC, [CC[fC] - wC[0] + .5, CC[fC + 1] - wC[1] + .5, CC[fC + 2] - wC[2] + .5], fC / 3);
        return this.api.createGameMesh({
          positions: bC,
          indices: nC
        }, {
          rgb: [zC[0], zC[1], zC[2]],
          alpha: ZC
        }, wC)
      }
    }

    function QZ(CC, zC, ZC, QC, wC, bC) {
      for (let nC = 0; nC < QC.length; nC += 6) {
        const fC = [0, 0, 0],
          oC = [0, 0, 0];
        for (let CC = 0; CC < 3; CC++) fC[CC] = ZC[CC] + ((QC[nC + CC] + QC[nC + CC + 3]) / 2 - .5) * wC, oC[CC] = (QC[nC + CC + 3] - QC[nC + CC]) * wC;
        (0, yz.e)(CC, zC, fC, oC, bC)
      }
    }

    function wZ(CC, zC, ZC) {
      return CC.rgb[0] === zC[0] && CC.rgb[1] === zC[1] && CC.rgb[2] === zC[2] && CC.look === ZC
    }

    function bZ(CC, zC) {
      if (CC.cells.length !== zC.cells.length) return !1;
      for (let ZC = 0; ZC < CC.cells.length; ZC++)
        if (CC.cells[ZC] !== zC.cells[ZC]) return !1;
      return CC.boxes.every(((CC, ZC) => CC === zC.boxes[ZC]))
    }

    function nZ(CC, zC) {
      return CC.getClientOption(zC, "blockReach") + 1
    }
    class fZ {
      constructor(CC, zC, ZC) {
        this.api = CC, this.localPlayerId = zC, this.pickNext = ZC, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(CC) {
        const [zC, , ZC] = CC.cameraDirection, QC = Math.hypot(zC, ZC);
        QC > .001 && (this.heading = [zC / QC, ZC / QC])
      }
      tapped(CC, zC, ZC) {
        const QC = nZ(this.api, this.localPlayerId),
          {
            origin: wC,
            direction: bC
          } = this.api.getActionRay(),
          nC = [...wC],
          fC = [
            [nC, [nC[0] + bC[0] * QC, nC[1] + bC[1] * QC, nC[2] + bC[2] * QC]]
          ];
        null !== CC && fC.push([nC, (0, sz.e)(CC)]), this.tap = {
          lines: fC,
          next: zC,
          ms: ZC
        }
      }
      filled(CC, zC) {
        this.tap = null, this.turnFrom(CC, zC), this.retry(zC)
      }
      arrived(CC, zC) {
        const {
          tap: ZC
        } = this;
        if (null === ZC || zC - ZC.ms > 1500) return null;
        const QC = (0, sz.e)(CC);
        return (0, sz.i)(ZC.next, CC) || ZC.lines.some((CC => {
          let [zC, ZC] = CC;
          return function(CC, zC, ZC) {
            const QC = [ZC[0] - zC[0], ZC[1] - zC[1], ZC[2] - zC[2]],
              wC = [CC[0] - zC[0], CC[1] - zC[1], CC[2] - zC[2]],
              bC = QC[0] ** 2 + QC[1] ** 2 + QC[2] ** 2,
              nC = 0 === bC ? 0 : Math.min(1, Math.max(0, (wC[0] * QC[0] + wC[1] * QC[1] + wC[2] * QC[2]) / bC));
            return Math.hypot(wC[0] - QC[0] * nC, wC[1] - QC[1] * nC, wC[2] - QC[2] * nC)
          }(QC, zC, ZC) <= .9
        })) ? (this.tap = null, this.turnFrom(CC, zC), ZC.ms) : null
      }
      turnFrom(CC, zC) {
        this.pending = {
          from: CC,
          ms: zC,
          turnMs: Math.max(50, Math.min(250, zC - this.lastFillMs))
        }, this.lastFillMs = zC
      }
      retry(CC) {
        const {
          pending: zC
        } = this;
        if (null === zC) return;
        if (CC - zC.ms > 1500) return void(this.pending = null);
        const ZC = this.pickNext((0, sz.e)(zC.from), (CC => (0, sz.i)(CC, zC.from)));
        if (null === ZC) return;
        this.pending = null;
        const {
          turning: QC
        } = this;
        if (null !== QC && CC < QC.endMs && (0, sz.i)(QC.to, ZC)) return;
        const wC = this.api.getActionRay().origin,
          bC = [ZC[0] + .5 - wC[0], ZC[1] + .5 - wC[1], ZC[2] + .5 - wC[2]],
          nC = Math.hypot(bC[0], bC[2]);
        if (nC < .3) {
          const CC = Math.max(nC, .001);
          bC[0] = this.heading[0] * CC, bC[2] = this.heading[1] * CC
        }
        this.api.turnCamera(bC, zC.turnMs), this.turning = {
          to: ZC,
          endMs: CC + zC.turnMs
        }
      }
    }
    class oZ {
      constructor(CC, zC, ZC) {
        this.api = CC, this.localPlayerId = zC, this.juice = ZC, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], this.lastFilled = null, this.lastSeenFilled = null, this.playerCells = [], this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = null, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new Bz(CC), this.meshes = new ZZ(CC), this.outline = new Uz(CC), this.turn = new fZ(CC, zC, ((CC, zC) => this.pickNext(CC, zC)))
      }
      Ag(CC) {
        const zC = "active" === CC[0] ? `${CC[1]}|${CC[3]}|${CC[4]}|${CC[5]}|${CC[6]}` : "";
        if ("active" !== CC[0]) "built" === CC[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , ZC, QC, wC, bC] = CC;
          zC !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = ZC) : ZC === this.layerY ? this.burstUnlisted(QC) : ZC > this.layerY && this.finishLayer(ZC), this.layerY = ZC, this.layerCells.has(ZC) || this.layerCells.set(ZC, QC.filter(FZ)), this.ghostCells = QC, this.palette = wC, this.occupiedCells = bC
        }
        zC !== this.blueprint && (this.blueprint = zC, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((CC => this.api.blockNameToBlockId(CC))), this.chunkWatch.watch([...this.ghostCells.filter(FZ), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(CC) {
        this.burstUnlisted([]), CC > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = CC)
      }
      ZN() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const CC = performance.now();
        let zC = !1;
        for (const [wC, bC] of this.foreseen) {
          var ZC;
          if (CC - bC > 1e3) this.foreseen.delete(wC), zC = !0, (null === (ZC = this.lastFilled) || void 0 === ZC ? void 0 : ZC.join()) === wC && (this.lastFilled = this.lastSeenFilled)
        }
        const QC = qZ(this.api.getPositionView(this.localPlayerId));
        (zC || QC.some(((CC, zC) => CC !== this.playerCells[zC]))) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(CC) {
        const zC = new Set;
        for (let wC = 0; wC < CC.length; wC += 4) zC.add(`${CC[wC]},${CC[wC+1]},${CC[wC+2]}`);
        const ZC = [],
          {
            ghostCells: QC
          } = this;
        for (let wC = 0; wC < QC.length; wC += 4) {
          const CC = `${QC[wC]},${QC[wC+1]},${QC[wC+2]}`;
          !zC.has(CC) && this.open.delete(CC) && ZC.push(this.filledCell(wC))
        }
        this.burst(ZC)
      }
      refresh() {
        const {
          ghostCells: CC,
          palette: zC,
          occupiedCells: ZC
        } = this, QC = new zZ, wC = new Set, bC = [], nC = [];
        for (let fC = 0; fC < CC.length; fC += 4) {
          const [ZC, oC, qC, FC] = [CC[fC], CC[fC + 1], CC[fC + 2], CC[fC + 3]], WC = this.api.getBlockId(ZC, oC, qC), NC = `${ZC},${oC},${qC}`, MC = hz(this.blockIds[FC], WC);
          !MC && Kz(WC) ? QC.add(ZC, oC, qC, dz(zC[FC]), kz, rz(zC[FC])) : MC ? this.open.has(NC) && bC.push(this.filledCell(fC)) : QC.add(ZC, oC, qC, CZ, Vz), !MC && this.api.isBlockInLoadedChunk(ZC, oC, qC) && (wC.add(NC), nC.push(ZC, oC, qC, Kz(WC) ? 0 : 1))
        }
        this.open = wC, this.nextCells = nC;
        for (let fC = 0; fC < ZC.length; fC += 3) {
          const [CC, zC, wC] = [ZC[fC], ZC[fC + 1], ZC[fC + 2]];
          Kz(this.api.getBlockId(CC, zC, wC)) || QC.add(CC, zC, wC, CZ, Vz)
        }
        this.meshes.show(QC.toArray()), this.burst(bC), this.showNext(), this.turn.retry(performance.now())
      }
      burst(CC) {
        const zC = performance.now(),
          ZC = [];
        for (const [wC, bC, nC] of CC) {
          const CC = [wC, bC, nC];
          this.lastSeenFilled = CC, this.foreseen.delete(CC.join()) || ZC.push(CC)
        }
        const QC = this.isHolding(zC);
        for (const wC of ZC) {
          if (this.lastFilled = wC, QC && this.pressFilled) {
            this.turn.filled(wC, zC);
            continue
          }
          const CC = this.turn.arrived(wC, zC);
          if (null !== CC) {
            this.pressFilled = QC;
            for (const [zC, ZC] of this.foreseen) ZC <= CC && this.foreseen.delete(zC)
          }
        }
        this.juice.filled(CC)
      }
      showNext() {
        var CC;
        const zC = this.api.getPositionView(this.localPlayerId);
        this.playerCells.splice(0, 1 / 0, ...qZ(zC));
        const ZC = this.lastFilled;
        this.nextCell = this.pickNext(null === ZC ? [zC[0], zC[1] + 1, zC[2]] : (0, sz.e)(ZC), (() => !1)), this.outline.show(null !== (CC = this.aimed) && void 0 !== CC ? CC : this.nextCell)
      }
      pickNext(CC, zC) {
        const ZC = this.api.getPositionView(this.localPlayerId),
          QC = [ZC[0], ZC[1] + Tz.f.Dp * Tz.f.playerEyeToHeightRatio, ZC[2]],
          wC = nZ(this.api, this.localPlayerId),
          {
            nextCells: bC
          } = this,
          nC = CC => [bC[CC], bC[CC + 1], bC[CC + 2]],
          fC = function(CC, zC, ZC, QC, wC, bC) {
            let nC = -1,
              fC = -1,
              oC = 1 / 0;
            for (let qC = 0; qC < CC.length; qC += zC) {
              const zC = (bC(qC) ? 2 : 0) + (QC(qC) ? 1 : 0);
              if (zC < fC || wC(qC)) continue;
              const FC = (CC[qC] + .5 - ZC[0]) ** 2 + (CC[qC + 1] + .5 - ZC[1]) ** 2 + (CC[qC + 2] + .5 - ZC[2]) ** 2;
              (zC > fC || FC < oC) && (nC = qC, fC = zC, oC = FC)
            }
            return nC
          }(bC, 4, CC, (CC => 1 === bC[CC + 3]), (CC => {
            const QC = nC(CC);
            return az(QC, ZC) || this.foreseen.has(QC.join()) || zC(QC)
          }), (CC => function(CC, zC, ZC) {
            return (zC[0] + .5 - CC[0]) ** 2 + (zC[1] + .5 - CC[1]) ** 2 + (zC[2] + .5 - CC[2]) ** 2 <= ZC ** 2
          }(QC, nC(CC), wC)));
        return -1 === fC ? null : nC(fC)
      }
      afterRender(CC) {
        var zC;
        this.turn.look(CC);
        const ZC = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === ZC ? null : ZC.position), this.outline.show(null !== (zC = this.aimed) && void 0 !== zC ? zC : this.nextCell)
      }
      isHolding(CC) {
        return null !== this.altMs && CC - this.altMs <= 500
      }
      attemptAltAction(CC) {
        const zC = performance.now();
        if (this.isHolding(zC) || (this.pressFilled = !1), this.altMs = zC, this.pressFilled) return "preventPlacement";
        const ZC = this.findAimed(CC);
        if (null !== ZC) return this.foreseen.set(ZC.join(), zC), this.lastFilled = ZC, this.aimed = null, this.showNext(), this.turn.filled(ZC, zC), this.pressFilled = !0, "preventPlacement";
        null !== this.nextCell && this.turn.tapped(CC, this.nextCell, zC)
      }
      findAimed(CC) {
        return function(CC, zC, ZC, QC, wC, bC, nC) {
          const fC = CC.XzC(zC),
            oC = null === fC || null === CC.blockNameToBlockId(fC.name, !0) ? null : fC.name,
            qC = CC.getPositionView(zC),
            {
              origin: FC,
              direction: WC
            } = CC.getActionRay(),
            NC = tz(QC, {
              from: FC,
              dir: WC,
              reach: nZ(CC, zC),
              solid: ZC
            }, (zC => {
              const ZC = [QC[zC], QC[zC + 1], QC[zC + 2]];
              return !hz(wC[QC[zC + 3]], CC.getBlockId(...ZC)) && !nC.has(ZC.join()) && CC.isBlockInLoadedChunk(...ZC) && !az(ZC, qC)
            }), (CC => null === oC || oC === Yz(wC[QC[CC + 3]])), (CC => null !== bC && QC[CC] === bC[0] && QC[CC + 1] === bC[1] && QC[CC + 2] === bC[2]));
          return -1 === NC ? null : [QC[NC], QC[NC + 1], QC[NC + 2]]
        }(this.api, this.localPlayerId, CC, this.ghostCells, this.blockIds, this.nextCell, this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(CC) {
        const {
          ghostCells: zC
        } = this, [ZC, QC, wC] = dz(this.palette[zC[CC + 3]]);
        return [zC[CC], zC[CC + 1], zC[CC + 2], ZC, QC, wC]
      }
    }

    function qZ(CC) {
      let [zC, ZC, QC] = CC;
      const wC = Tz.f.tp / 2;
      return [Math.floor(zC), Math.floor(ZC), Math.floor(QC), Math.floor(zC - wC), Math.floor(zC + wC), Math.floor(ZC + Tz.f.Dp), Math.floor(QC - wC), Math.floor(QC + wC)]
    }

    function FZ(CC, zC) {
      return zC % 4 !== 3
    }

    function WZ(CC, zC, ZC, QC, wC) {
      if (!CC.isBlockInLoadedChunk(zC, QC - 6, ZC) || !CC.isBlockInLoadedChunk(zC, QC + 6 + wC, ZC) || !CC.canModifyBlockAt(zC, QC, ZC)) return NaN;
      let bC = QC - 1;
      if (0 !== CC.getBlockId(zC, bC, ZC)) {
        for (; bC < QC + 6 && 0 !== CC.getBlockId(zC, bC + 1, ZC);) bC++;
        return bC
      }
      for (; bC > QC - 6;)
        if (bC--, 0 !== CC.getBlockId(zC, bC, ZC)) return bC;
      return NaN
    }

    function NZ(CC, zC, ZC, QC, wC) {
      let bC = 0;
      for (let nC = QC + 1; nC <= QC + wC; nC++) 0 !== CC.getBlockId(zC, nC, ZC) && bC++;
      return bC
    }

    function MZ(CC) {
      const zC = new Map;
      for (const nC of CC) {
        var ZC;
        if (Number.isNaN(nC)) return null;
        zC.set(nC, (null !== (ZC = zC.get(nC)) && void 0 !== ZC ? ZC : 0) + 1)
      }
      let QC = NaN,
        wC = 0;
      for (const [nC, fC] of zC)(fC > wC || fC === wC && nC < QC) && (QC = nC, wC = fC);
      let bC = 0;
      for (const nC of CC) bC += Math.abs(nC - QC);
      return bC
    }

    function gZ(CC, zC, ZC, QC) {
      const {
        eye: wC,
        forward: bC,
        tanHalfFovX: nC,
        tanHalfFovY: fC
      } = CC, [oC, qC] = function(CC) {
        let [zC, ZC, QC] = CC;
        const wC = Math.hypot(zC, QC),
          [bC, nC] = [QC / wC, -zC / wC];
        return [
          [bC, 0, nC],
          [ZC * nC, QC * bC - zC * nC, -ZC * bC]
        ]
      }(bC), [FC, WC] = [zC * nC, ZC * fC], NC = bC[0] + FC * oC[0] + WC * qC[0], MC = bC[1] + WC * qC[1], gC = bC[2] + FC * oC[2] + WC * qC[2], SC = (QC - wC[1]) / MC;
      return SC > 0 && SC < 1 / 0 ? [wC[0] + SC * NC, wC[2] + SC * gC] : null
    }
    const SZ = "plotsBlueprintPlacementChanged",
      pZ = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class PZ {
      constructor(CC, zC) {
        this.api = CC, this.localPlayerId = zC, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = CC => {
          var zC, ZC, QC, bC;
          const nC = null !== (zC = null === (ZC = this.placing) || void 0 === ZC ? void 0 : ZC.rotation) && void 0 !== zC ? zC : 0,
            {
              size: fC
            } = aC(CC, nC),
            oC = this.api.yG(this.localPlayerId),
            [qC, FC] = null !== (QC = null !== (bC = function(CC, zC, ZC) {
              const [QC, wC, bC] = zC, [nC, fC, oC] = [Math.floor(ZC[0]), Math.floor(ZC[1]), Math.floor(ZC[2])], qC = 6 + Math.max(QC, bC) / 2, [FC, WC] = [Math.ceil(qC + QC / 2), Math.ceil(qC + bC / 2)], [NC, MC] = [nC - FC, oC - WC], [gC, SC] = [2 * FC + 1, 2 * WC + 1], pC = new Float64Array(gC * SC), PC = new Uint16Array(gC * SC);
              for (let xC = 0; xC < gC; xC++)
                for (let zC = 0; zC < SC; zC++) {
                  const ZC = WZ(CC, NC + xC, MC + zC, fC, wC);
                  pC[xC * SC + zC] = ZC, Number.isNaN(ZC) || (PC[xC * SC + zC] = NZ(CC, NC + xC, MC + zC, ZC, wC))
                }
              const GC = [];
              let RC = null,
                AC = 1 / 0;
              for (let xC = 0; xC + QC <= gC; xC++)
                for (let CC = 0; CC + bC <= SC; CC++) {
                  const [zC, wC] = [NC + xC, MC + CC], fC = Math.hypot(zC + QC / 2 - ZC[0], wC + bC / 2 - ZC[2]);
                  if (fC > qC || nC >= zC - 2 && nC < zC + QC + 2 && oC >= wC - 2 && oC < wC + bC + 2) continue;
                  GC.length = 0;
                  let FC = 0;
                  for (let ZC = 0; ZC < QC; ZC++)
                    for (let zC = 0; zC < bC; zC++) GC.push(pC[(xC + ZC) * SC + CC + zC]), FC += PC[(xC + ZC) * SC + CC + zC];
                  const WC = MZ(GC);
                  if (null === WC) continue;
                  const gC = fC + 3 * (WC + FC);
                  gC < AC && (AC = gC, RC = [zC, wC])
                }
              return RC
            }(this.api, fC, oC)) && void 0 !== bC ? bC : this.cornerOnTarget(fC)) && void 0 !== QC ? QC : [Math.floor(oC[0]) + 2, Math.floor(oC[2])];
          this.placing = {
            id: CC,
            rotation: nC,
            corner: [qC, this.playerLevel(), FC],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null
          }, this.update(), this.api.sendCommand(`${wC} preview`)
        }, this.rotate = () => {
          const {
            id: CC,
            rotation: zC,
            corner: ZC
          } = this.placing, wC = QC[(QC.indexOf(zC) + 1) % QC.length], [bC, , nC] = aC(CC, zC).size, [fC, , oC] = aC(CC, wC).size;
          this.moveTo(ZC[0] + Math.floor(bC / 2) - Math.floor(fC / 2), ZC[2] + Math.floor(nC / 2) - Math.floor(oC / 2), wC)
        }, this.hoverAt = (CC, zC) => {
          this.placing.hover = [CC, zC], this.moveCentreTo(this.camera, CC, zC)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (CC, zC) => {
          const ZC = this.placing,
            {
              eye: QC,
              forward: wC,
              tanHalfFovX: bC,
              tanHalfFovY: nC
            } = this.camera,
            fC = {
              eye: [QC[0], QC[1], QC[2]],
              forward: [wC[0], wC[1], wC[2]],
              tanHalfFovX: bC,
              tanHalfFovY: nC
            },
            oC = ZC.corner[1],
            qC = gZ(fC, CC, zC, oC);
          ZC.hover = null, ZC.drag = qC && {
            view: fC,
            ground: qC,
            corner: [ZC.corner[0], ZC.corner[2]],
            level: oC
          }
        }, this.dragTo = (CC, zC) => {
          const ZC = this.placing.drag,
            QC = ZC && gZ(ZC.view, CC, zC, ZC.level);
          null !== ZC && null !== QC && this.moveTo(ZC.corner[0] + Math.round(QC[0] - ZC.ground[0]), ZC.corner[1] + Math.round(QC[1] - ZC.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const CC = this.view;
          CC.waiting || (CC.blocked ? this.bp({
            ...CC,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const CC = this.placing,
            {
              id: zC,
              rotation: ZC,
              corner: QC
            } = CC;
          this.api.sendCommand(`${wC} place ${zC} ${QC.join(" ")} ${ZC}`), CC.sent = {
            atMs: performance.now(),
            corner: [...QC],
            rotation: ZC,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${wC} preview off`))
        }, this.chunkWatch = new Bz(CC), this.meshes = new ZZ(CC)
      }
      getView() {
        return this.view
      }
      ZN() {
        const CC = this.placing;
        null !== CC && (null !== CC.sent && !CC.sent.timedOut && performance.now() - CC.sent.atMs > 3e3 ? (CC.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(CC) || this.chunkWatch.changed()) && this.update())
      }
      afterRender(CC) {
        const zC = this.placing;
        null !== zC && (! function(CC, zC) {
          for (let ZC = 0; ZC < 3; ZC++) zC.eye[ZC] = CC.cameraPosition[ZC], zC.forward[ZC] = CC.cameraDirection[ZC];
          zC.tanHalfFovX = CC.tanHalfFovX, zC.tanHalfFovY = CC.tanHalfFovY
        }(CC, this.camera), null !== zC.hover && this.moveCentreTo(this.camera, zC.hover[0], zC.hover[1]))
      }
      Ag(CC) {
        const zC = this.placing;
        if (null === zC || null === zC.sent || "active" !== CC[0]) return;
        const {
          sent: ZC
        } = zC, [, QC, wC, bC, nC, fC, oC] = CC;
        wC && QC === zC.id && oC === ZC.rotation && bC === ZC.corner[0] && nC === ZC.corner[1] && fC === ZC.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(CC) {
        let [zC, , ZC] = CC;
        const QC = this.api.getTargetedBlock();
        if (null === QC) return null;
        const [wC, , bC] = QC.position;
        return [wC - Math.floor(zC / 2), bC - Math.floor(ZC / 2)]
      }
      playerLevel() {
        var CC;
        const [zC, ZC, QC] = this.api.yG(this.localPlayerId);
        if (null !== (CC = this.api.getLocalPlayerMovement()) && void 0 !== CC && CC.onGround) return Math.ceil(ZC - .01);
        const [wC, bC, nC] = [Math.floor(zC), Math.floor(ZC), Math.floor(QC)];
        for (let fC = bC; fC >= bC - 2; fC--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(wC, fC, nC))) return fC + 1;
        return bC
      }
      followPlayerLevel(CC) {
        if (GZ(CC)) return !1;
        const zC = this.playerLevel();
        return zC !== CC.corner[1] && (CC.corner[1] = zC, !0)
      }
      moveCentreTo(CC, zC, ZC) {
        const QC = this.placing,
          wC = gZ(CC, zC, ZC, QC.corner[1]);
        if (null !== wC) {
          const [CC, , zC] = aC(QC.id, QC.rotation).size;
          this.moveTo(Math.round(wC[0] - CC / 2), Math.round(wC[1] - zC / 2))
        }
      }
      moveTo(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const QC = this.placing;
        if (GZ(QC)) return;
        const [wC, bC, nC] = QC.corner;
        if (this.centreOnPlot(wC, nC) && !this.centreOnPlot(CC, zC, ZC))
          if (this.centreOnPlot(CC, nC, ZC)) zC = nC;
          else {
            if (!this.centreOnPlot(wC, zC, ZC)) return;
            CC = wC
          } CC === wC && zC === nC && ZC === QC.rotation || (QC.rotation = ZC, QC.corner = [CC, bC, zC], this.update())
      }
      centreOnPlot(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: QC,
          corner: wC
        } = this.placing, [bC, , nC] = aC(QC, ZC).size;
        return this.api.canModifyBlockAt(CC + Math.floor(bC / 2), wC[1], zC + Math.floor(nC / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.bp(null)
      }
      update() {
        const {
          id: CC,
          rotation: zC,
          corner: ZC,
          refusals: QC
        } = this.placing, wC = new zZ, bC = [];
        let nC = !1,
          fC = 0;
        for (const {
            offset: FC,
            block: WC
          }
          of aC(CC, zC).cells) {
          const [CC, zC, QC] = [ZC[0] + FC[0], ZC[1] + FC[1], ZC[2] + FC[2]];
          bC.push(CC, zC, QC);
          const oC = !this.api.canModifyBlockAt(CC, zC, QC),
            qC = this.api.getBlockId(CC, zC, QC),
            NC = !Kz(qC) && !hz(this.api.blockNameToBlockId(WC), qC);
          nC ||= oC, fC += NC ? 1 : 0, oC || NC ? wC.add(CC, zC, QC, CZ, Vz) : wC.add(CC, zC, QC, dz(WC), pZ, rz(WC))
        }
        this.chunkWatch.watch(bC), this.meshes.show(wC.toArray());
        const oC = this.view,
          qC = GZ(this.placing);
        (null === oC || void 0 === oC ? void 0 : oC.id) === CC && oC.blocked === nC && oC.toClear === fC && oC.waiting === qC && oC.refusals === QC || this.bp({
          id: CC,
          blocked: nC,
          toClear: fC,
          waiting: qC,
          refusals: QC
        })
      }
      bp(CC) {
        this.view = CC, FC.o.bp(SZ, CC, !0)
      }
    }

    function GZ(CC) {
      let {
        sent: zC
      } = CC;
      return null !== zC && !zC.timedOut
    }
    var RZ = ZC(4179),
      AZ = ZC(38979);

    function xZ(CC, zC, ZC) {
      const QC = [255 * CC, 255 * zC, 255 * ZC],
        [wC, bC, nC] = QC.map((CC => CC + .4 * (255 - CC)));
      return {
        texture: "square_particle",
        HW: 48,
        minLifeTime: .3 / AZ.e,
        maxLifeTime: .55 / AZ.e,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * AZ.e * AZ.e, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...QC, 1],
          maxColor: [wC, bC, nC, 1]
        }, {
          timeFraction: 1,
          minColor: [...QC, 0],
          maxColor: [wC, bC, nC, 0]
        }],
        blendMode: RZ.d.Standard
      }
    }
    const JZ = {
      texture: "glint",
      mipmaps: !1,
      HW: 96,
      minLifeTime: .5 / AZ.e,
      maxLifeTime: .9 / AZ.e,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * AZ.e * AZ.e, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: RZ.d.OneOne
    };
    class IZ {
      constructor(CC, zC) {
        this.api = CC, this.localPlayerId = zC, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(CC) {
        if (this.api.particlesEnabled())
          for (const [zC, ZC, QC, wC, bC, nC] of CC.slice(0, 3)) {
            const CC = `${wC},${bC},${nC}`;
            let fC = this.chips.get(CC);
            void 0 === fC && (fC = this.api.createParticles(xZ(wC, bC, nC), {
              pos: [zC + .5, ZC + .5, QC + .5]
            }), this.chips.set(CC, fC));
            for (let zC = 0; zC < 8; zC++) this.setPoint(zC, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            fC.emitPoints([zC + .5, ZC + .5, QC + .5], this.points, 8)
          }
      }
      layerDone(CC) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const zC = CC.length / 3;
        if (0 === zC || !this.api.particlesEnabled()) return;
        const ZC = Math.min(zC, 48),
          [QC, wC, bC] = [CC[0] + .5, CC[1] + 1, CC[2] + .5];
        let nC = 0;
        for (let fC = 0; fC < ZC; fC++) {
          const oC = 3 * Math.floor(fC * zC / ZC);
          for (let zC = 0; zC < 2; zC++) this.setPoint(nC++, CC[oC] + Math.random() - QC, CC[oC + 1] + 1 - wC, CC[oC + 2] + Math.random() - bC, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(JZ, {
          pos: [QC, wC, bC]
        }), this.sparkles.emitPoints([QC, wC, bC], this.points, nC)
      }
      dispose() {
        var CC;
        for (const zC of this.chips.values()) zC.stop();
        this.chips.clear(), null === (CC = this.sparkles) || void 0 === CC || CC.stop(), this.sparkles = null
      }
      setPoint(CC, zC, ZC, QC, wC) {
        const bC = 4 * CC;
        this.points[bC] = zC, this.points[bC + 1] = ZC, this.points[bC + 2] = QC, this.points[bC + 3] = wC
      }
    }
    var iZ = ZC(1887);
    const vZ = "SpecialAction1",
      eZ = "KeyY",
      hZ = "KeyX";

    function KZ(CC) {
      let {
        placement: zC
      } = CC;
      const ZC = (0, hC.f)(SZ, zC.getView()),
        {
          t: QC
        } = (0, YC.y)(),
        {
          isTouchScreen: wC
        } = (0, fC.k)(["isTouchScreen"]),
        bC = null !== ZC,
        nC = bC && !ZC.blocked && !ZC.waiting;
      if ((0, eC.d)((CC => bC && !CC.repeat && !(0, qC.isTypingInInput)() && !(0, oC.s)() && !wC), (CC => {
          const ZC = function(CC, zC, ZC) {
            if (CC === hZ) return zC.stop;
            if (CC === eZ) return ZC ? zC.build : dZ;
            return iZ.o[vZ].includes(CC) ? zC.rotate : null
          }(CC.code, zC, nC);
          null !== ZC && (CC.stopPropagation(), ZC())
        })), !bC) return null;
      let FC = wC ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return ZC.blocked ? FC = "plotsGame:placementOffPlot" : ZC.toClear > 0 && (FC = "plotsGame:placementClear"), (0, DC.jsx)(nz.c, {
        placement: "bottom",
        children: (0, DC.jsxs)("div", {
          className: "PlotsPlacementCard",
          children: [(0, DC.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: QC(gC(ZC.id).displayName.translationKey)
          }), (0, DC.jsx)("div", {
            className: JC()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: ZC.refusals > 0
            }),
            children: QC(FC)
          }, ZC.refusals), (0, DC.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, DC.jsxs)(iC.g, {
              onClick: zC.rotate,
              children: [(0, DC.jsx)(YZ, {
                noaAction: vZ
              }), QC("plotsGame:placementRotate")]
            }), (0, DC.jsxs)(iC.I, {
              onClick: zC.stop,
              children: [(0, DC.jsx)(YZ, {
                keyCode: hZ
              }), QC("general:cancel")]
            }), (0, DC.jsxs)(iC.o, {
              disabled: !nC,
              onClick: zC.build,
              children: [(0, DC.jsx)(YZ, {
                keyCode: eZ
              }), QC("plotsGame:placementBuild")]
            })]
          })]
        })
      })
    }

    function YZ(CC) {
      return (0, DC.jsx)(oz.b, {
        className: "PlotsPlacementKey",
        ...CC
      })
    }

    function dZ() {}
    var mZ = ZC(4479);
    class HZ {
      constructor(CC) {
        this.placement = CC, this.press = null
      }
      down(CC) {
        if (null !== this.press) return !1;
        const {
          id: zC,
          mouse: ZC,
          x: QC,
          y: wC,
          atMs: bC
        } = CC;
        return this.press = {
          id: zC,
          mouse: ZC,
          x: QC,
          y: wC,
          atMs: bC,
          moved: !1
        }, ZC || this.placement.beginDrag(CC.ndcX, CC.ndcY), !0
      }
      move(CC) {
        const zC = this.press;
        null !== zC && zC.id === CC.id && (zC.moved ||= Math.hypot(CC.x - zC.x, CC.y - zC.y) > 8), CC.mouse ? this.placement.hoverAt(CC.ndcX, CC.ndcY) : (null === zC || void 0 === zC ? void 0 : zC.id) === CC.id && this.placement.dragTo(CC.ndcX, CC.ndcY)
      }
      up(CC) {
        const zC = this.press;
        (null === zC || void 0 === zC ? void 0 : zC.id) === CC.id && (this.move(CC), this.end(), !zC.moved && (zC.mouse || CC.atMs - zC.atMs <= 250) && this.placement.tap())
      }
      cancel(CC) {
        var zC;
        (null === (zC = this.press) || void 0 === zC ? void 0 : zC.id) === CC && this.end()
      }
      leave(CC) {
        let {
          id: zC,
          mouse: ZC
        } = CC;
        ZC && this.placement.endHover(), this.cancel(zC)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }

    function EZ(CC) {
      let {
        placement: zC
      } = CC;
      return null === (0, hC.f)(SZ, zC.getView()) ? null : (0, DC.jsx)(lZ, {
        placement: zC
      })
    }

    function lZ(CC) {
      let {
        placement: zC
      } = CC;
      (0, mZ.b)(!0, !0, "PlotsPlacementLayer");
      const ZC = (0, bC.useMemo)((() => new HZ(zC)), [zC]);
      return (0, DC.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: CC => {
          "mouse" === CC.pointerType && 0 !== CC.button || !ZC.down(XZ(CC)) || CC.currentTarget.setPointerCapture(CC.pointerId)
        },
        onPointerMove: CC => {
          ZC.move(XZ(CC))
        },
        onPointerUp: CC => {
          ZC.up(XZ(CC))
        },
        onPointerCancel: CC => {
          ZC.cancel(CC.pointerId)
        },
        onLostPointerCapture: CC => {
          ZC.cancel(CC.pointerId)
        },
        onPointerLeave: CC => {
          ZC.leave(XZ(CC))
        },
        "aria-hidden": !0
      })
    }

    function XZ(CC) {
      const {
        left: zC,
        top: ZC,
        width: QC,
        height: wC
      } = CC.currentTarget.getBoundingClientRect();
      return {
        id: CC.pointerId,
        mouse: "mouse" === CC.pointerType,
        x: CC.clientX,
        y: CC.clientY,
        ndcX: (CC.clientX - zC) / QC * 2 - 1,
        ndcY: 1 - (CC.clientY - ZC) / wC * 2,
        atMs: CC.timeStamp
      }
    }
    var cZ = ZC(2318),
      uZ = ZC(36564),
      rZ = ZC(1877),
      sZ = ZC(1209);
    const TZ = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function aZ(CC) {
      let {
        hud: zC
      } = CC;
      const ZC = (0, hC.f)(Fz, zC.getPlot()),
        [QC, wC] = (0, bC.useState)(null),
        nC = (0, uZ.k)(QC);
      if ("none" === ZC[0]) return null;
      const [, fC, oC, qC, FC, WC] = ZC;
      return (0, DC.jsx)("div", {
        className: JC()("PlotsPlotBannerContainer", {
          Below: nC
        }),
        children: (0, DC.jsx)(tZ, {
          plotX: fC,
          plotZ: oC,
          ownerName: qC,
          ownerId: FC,
          relation: WC,
          plaqueRef: wC
        }, `${fC},${oC}`)
      })
    }

    function tZ(CC) {
      var zC, ZC;
      let {
        plotX: QC,
        plotZ: wC,
        ownerName: bC,
        ownerId: nC,
        relation: fC,
        plaqueRef: oC
      } = CC;
      const {
        t: qC
      } = (0, YC.y)(), FC = (0, rZ.f)("hiddenPlayerNames"), WC = (0, rZ.f)("players"), NC = null === nC ? null : null !== (zC = null === (ZC = WC.byId[nC]) || void 0 === ZC ? void 0 : ZC.cosmetics) && void 0 !== zC ? zC : null, MC = qC("plotsGame:plotBannerCoords", {
        x: QC,
        z: wC
      }), gC = "own" === fC || null !== bC;
      return (0, DC.jsxs)("div", {
        ref: oC,
        className: JC()("PlotsPlotBanner", {
          Own: "own" === fC,
          Shared: "shared" === fC
        }),
        role: "status",
        children: [(0, DC.jsxs)("span", {
          className: JC()("PlotsPlotBannerSeal", {
            Face: null !== NC
          }),
          children: [null !== NC && (0, DC.jsx)(cZ.c, {
            cosmetics: NC
          }), null === NC && (0, DC.jsx)(IC.c, {
            name: TZ[fC]
          })]
        }), (0, DC.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, DC.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === fC && qC("plotsGame:plotBannerYours"), "own" !== fC && null !== bC && qC("plotsGame:plotBannerOwner", {
              name: (0, sZ.g)(bC, FC)
            }), !gC && MC]
          }), gC && (0, DC.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [MC, "shared" === fC && (0, DC.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: qC("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }

    function DZ(CC) {
      let {
        progress: zC,
        goal: ZC
      } = CC;
      const QC = Math.min(zC, ZC);
      return (0, DC.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, DC.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": ZC,
          "aria-valuenow": QC,
          children: (0, DC.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${QC/ZC})`
            }
          })
        }), (0, DC.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [QC, "/", ZC]
        })]
      })
    }

    function jZ(CC) {
      return {
        translationKey: `plotsGame:${CC}`,
        actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
      }
    }
    const yZ = {
      house: {
        icon: "house",
        titleKey: "plotsGame:starterLotHouseTitle",
        desktop: jZ("starterLotHouseHint", ["alt-fire"]),
        touch: jZ("starterLotHouseHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotHousePlain"
      },
      garden: {
        icon: "sparkle",
        titleKey: "plotsGame:starterLotGarden",
        desktop: jZ("starterLotGardenHint", ["alt-fire"]),
        touch: jZ("starterLotGardenHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotGardenPlain"
      },
      boulder: {
        icon: "hammer",
        titleKey: "plotsGame:starterLotBoulder",
        desktop: jZ("starterLotBreakHint", ["primary-fire"]),
        touch: jZ("starterLotBreakHintTouch"),
        plainKey: "plotsGame:starterLotBreakPlain"
      },
      fly: {
        icon: "angles-up",
        titleKey: "plotsGame:starterLotFly",
        desktop: jZ("starterLotFlyHint", ["jump"]),
        touch: jZ("starterLotFlyHintTouch"),
        plainKey: "plotsGame:starterLotFlyPlain"
      },
      backpack: {
        icon: "backpack",
        titleKey: "plotsGame:starterLotBackpack",
        desktop: jZ("starterLotBackpackHint", ["OpenInventory"]),
        touch: jZ("starterLotBackpackHintTouch"),
        plainKey: "plotsGame:starterLotBackpackPlain"
      },
      neighbour: {
        icon: "person",
        titleKey: "plotsGame:starterLotNeighbour",
        desktop: jZ("starterLotNeighbourHint", ["forward", "left", "backward", "right"]),
        touch: jZ("starterLotNeighbourHintTouch"),
        plainKey: "plotsGame:starterLotNeighbourPlain"
      }
    };

    function LZ(CC, zC, ZC) {
      const {
        translationKey: QC,
        actions: wC
      } = ZC ? zC.touch : zC.desktop;
      if (0 === wC.length) return CC(QC);
      const bC = [];
      for (const nC of wC) {
        const QC = (0, iZ.l)(nC, ZC),
          wC = iZ.o[nC][0];
        if (null === QC && void 0 === wC) return CC(zC.plainKey);
        bC.push(null === QC ? (0, iZ.h)(wC) : CC(QC.translationKey))
      }
      return CC(QC, {
        key: bC.join("")
      })
    }

    function UZ(CC) {
      let {
        hud: zC
      } = CC;
      const ZC = (0, hC.f)(qz, zC.getStep()),
        {
          t: QC
        } = (0, YC.y)();
      return (0, DC.jsxs)(nz.c, {
        placement: "bottom",
        children: ["step" === ZC[0] && (0, DC.jsx)(BZ, {
          step: ZC[1],
          progress: ZC[2],
          goal: ZC[3]
        }, ZC[1]), "celebrate" === ZC[0] && (0, DC.jsx)(OZ, {
          className: JC()("Celebrate", {
            Gold: "house" === ZC[1]
          }),
          icon: "star",
          title: QC("house" === ZC[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
        }, `celebrate-${ZC[1]}`)]
      })
    }

    function BZ(CC) {
      let {
        step: zC,
        progress: ZC,
        goal: QC
      } = CC;
      const {
        isTouchScreen: wC
      } = (0, fC.k)(["isTouchScreen"]), {
        t: bC
      } = (0, YC.y)(), nC = yZ[zC];
      return (0, DC.jsxs)(OZ, {
        icon: nC.icon,
        title: bC(nC.titleKey),
        children: [(0, DC.jsx)("div", {
          className: "PlotsStepCardHint SmallTextLight",
          children: LZ(bC, nC, wC)
        }), QC > 1 && (0, DC.jsx)(DZ, {
          progress: ZC,
          goal: QC
        }), "backpack" === zC && wC && (0, DC.jsx)(kZ, {})]
      })
    }

    function OZ(CC) {
      let {
        className: zC,
        icon: ZC,
        title: QC,
        children: wC
      } = CC;
      return (0, DC.jsxs)("div", {
        className: JC()("PlotsStepCard", zC),
        role: "status",
        children: [(0, DC.jsx)("span", {
          className: "PlotsStepCardIcon",
          children: (0, DC.jsx)(IC.c, {
            name: ZC
          })
        }), (0, DC.jsxs)("div", {
          className: "PlotsStepCardBody",
          children: [(0, DC.jsx)("div", {
            className: "PlotsStepCardTitle SmallTextBold",
            children: QC
          }), wC]
        })]
      })
    }

    function kZ() {
      return (0, bC.useEffect)((() => (fC.b.set({
        backpackPointerRequested: !0
      }), () => {
        fC.b.set({
          backpackPointerRequested: !1
        })
      })), []), null
    }
    const VZ = function(CC, zC, ZC, QC) {
      let {
        localPlayerId: wC
      } = QC;
      const fC = new Wz;
      let oC = null,
        qC = null,
        FC = null,
        WC = null,
        NC = null;
      const MC = [];
      return {
        onCreate: CC => {
          oC = new IZ(CC, wC), qC = new oZ(CC, wC, oC), FC = new oZ(CC, wC, oC), WC = new PZ(CC, wC), NC = new AC(CC, WC), MC.push((0, nC.C)((0, bC.createElement)(bC.Fragment, null, (0, bC.createElement)(aZ, {
            hud: fC
          }), (0, bC.createElement)(UZ, {
            hud: fC
          }), (0, bC.createElement)(Mz, {
            hud: fC,
            journal: NC
          }), (0, bC.createElement)(EZ, {
            placement: WC
          }), (0, bC.createElement)(KZ, {
            placement: WC
          })), {
            content: (0, bC.createElement)(wz, {
              journal: NC
            })
          }))
        },
        ZN: () => {
          qC.ZN(), FC.ZN(), WC.ZN(), NC.ZN()
        },
        onPlayerAttemptAltAction: (CC, zC, ZC, QC, wC, bC) => {
          var nC;
          if (null !== bC) return;
          const fC = void 0 === zC ? null : [zC, ZC, QC];
          return null !== (nC = qC.attemptAltAction(fC)) && void 0 !== nC ? nC : FC.attemptAltAction(fC)
        },
        onPlayerClickUp: () => {
          qC.endPress(), FC.endPress()
        },
        onAfterRender: (CC, zC) => {
          WC.afterRender(zC), qC.afterRender(zC), FC.afterRender(zC)
        },
        onClose: () => {
          for (const CC of MC) CC();
          oC.dispose(), qC.dispose(), FC.dispose(), WC.dispose(), oC = null, qC = null, FC = null, WC = null, NC = null
        },
        onReceivedMessageFromServer: (CC, zC) => {
          if ("plotsStarterLot" === CC) fC.receiveStep(zC);
          else if ("plotsPlot" === CC) fC.receivePlot(zC);
          else if ("plotsStarterHouse" === CC) qC.Ag(zC);
          else if ("plotsBlueprint" === CC) {
            const CC = zC;
            FC.Ag(CC), WC.Ag(CC)
          } else "plotsJournal" === CC ? NC.Ag(zC) : "plotsJournalOpen" === CC ? NC.openFromServer() : "plotsPreviewEnd" === CC && WC.endFromServer()
        }
      }
    }
  },
  38979: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC,
      g: () => bC
    });
    const QC = 1 / .6,
      wC = {
        kind: "smokePuff"
      };
    class bC {
      constructor(CC, zC, ZC) {
        this.style = CC, this.HW = zC, this.half = ZC, this.particles = null, this.lastFrame = -1
      }
      emit(CC, zC, ZC) {
        let bC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return ZC !== this.lastFrame && (this.lastFrame = ZC, this.particles || (this.particles = CC.createParticles(function(CC, zC) {
          const [
            [ZC, bC, nC],
            [fC, oC, qC]
          ] = CC.colours;
          return {
            texture: CC.soft ? wC : "square_particle",
            HW: zC,
            minLifeTime: CC.life[0] / QC,
            maxLifeTime: CC.life[1] / QC,
            minEmitPower: CC.power[0] * QC,
            maxEmitPower: CC.power[1] * QC,
            minSize: CC.size[0],
            maxSize: CC.size[1],
            emitRate: 0,
            gravity: [0, CC.lift * QC * QC, 0],
            dir1: [-CC.spread, 1, -CC.spread],
            dir2: [CC.spread, 1, CC.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [ZC, bC, nC, CC.alpha],
              maxColor: [fC, oC, qC, CC.alpha]
            }, {
              timeFraction: 1,
              minColor: [ZC, bC, nC, 0],
              maxColor: [fC, oC, qC, 0]
            }],
            blendMode: CC.blendMode
          }
        }(this.style, this.HW), {
          pos: zC,
          half: this.half
        })), this.particles.moveTo(zC, this.half), this.particles.emit(bC), !0)
      }
      dispose() {
        var CC;
        null === (CC = this.particles) || void 0 === CC || CC.stop(), this.particles = null
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);