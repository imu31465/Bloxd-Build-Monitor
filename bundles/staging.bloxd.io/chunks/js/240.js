export const id = 240;
export const ids = [240];
export const modules = {
  38973: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => QL
    });
    const LQ = [0, 90, 180, 270],
      qQ = "plotsblueprint";
    var oQ = wQ(53),
      DQ = wQ(36235),
      kQ = wQ(17),
      vQ = wQ(1641),
      mQ = wQ(1725),
      uQ = wQ(22);
    const HQ = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      bQ = {
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
      YQ = ["small", "medium", "large"].flatMap((QQ => HQ.flat().filter((FQ => bQ[FQ].tier === QQ))));

    function xQ(QQ) {
      return bQ[QQ]
    }
    const AQ = new Map(HQ.flatMap((QQ => QQ.slice(1).map(((FQ, wQ) => [FQ, QQ[wQ]])))));

    function tQ(QQ) {
      var FQ;
      return null !== (FQ = AQ.get(QQ)) && void 0 !== FQ ? FQ : null
    }
    const eQ = {
      farm_hut: "plotsGame:journalNoteFarmHut",
      rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
      castle_tower: "plotsGame:journalNoteCastleTower",
      farm_house: "plotsGame:journalNoteFarmHouse",
      farm_barn: "plotsGame:journalNoteFarmBarn"
    };

    function MQ(QQ, FQ) {
      const wQ = new Set(QQ),
        LQ = function(QQ) {
          const FQ = new Set(QQ);
          return new Set(YQ.filter((QQ => {
            const wQ = tQ(QQ);
            return null === wQ || FQ.has(wQ)
          })))
        }(wQ);
      return YQ.map((QQ => {
        const qQ = QQ === FQ;
        return wQ.has(QQ) ? {
          id: QQ,
          active: qQ,
          state: "completed",
          unlockedBy: null
        } : LQ.has(QQ) ? {
          id: QQ,
          active: qQ,
          state: "open",
          unlockedBy: null
        } : {
          id: QQ,
          active: qQ,
          state: "locked",
          unlockedBy: tQ(QQ)
        }
      }))
    }
    const GQ = "plotsJournalChanged";
    class pQ {
      constructor(QQ, FQ) {
        this.api = QQ, this.placement = FQ, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.hY("journal_opened")
        }, this.build = QQ => {
          this.hY("placement_started"), this.placement.start(QQ), (0, DQ.f)()
        }, this.putAway = () => {
          this.api.sendCommand(`${qQ} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      bx(QQ) {
        let [, FQ, wQ] = QQ;
        this.pages = MQ(FQ, wQ), uQ.l.GA(GQ, this.pages, !0)
      }
      openFromServer() {
        this.openRequested = !0, this.fH()
      }
      fH() {
        this.openRequested && !kQ.c.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, vQ.m)() || (0, mQ.isTypingInInput)() || null !== this.placement.getView() || (0, DQ.o)())
      }
      hY(QQ) {
        this.reported.has(QQ) || (this.reported.add(QQ), this.api.sendCommand(`${qQ} report ${QQ}`))
      }
    }
    var cQ = wQ(1070),
      CQ = wQ.n(cQ),
      SQ = wQ(1079),
      iQ = wQ(1451),
      WQ = wQ(4376),
      RQ = wQ(3276),
      OQ = wQ(1447),
      sQ = wQ(1132),
      rQ = wQ(1207),
      IQ = wQ(9195);
    const UQ = [0, 90, 180, 270],
      NQ = /^(meta\|rot\d)\|([lrud]+)$/,
      TQ = "nesw",
      KQ = /^meta\|([nesw]*)\|?(Stacked)?$/,
      zQ = function(QQ) {
        const FQ = new WeakMap;
        return (wQ, LQ) => {
          let qQ = FQ.get(wQ);
          return void 0 === qQ && (qQ = QQ(wQ, LQ), FQ.set(wQ, qQ)), qQ
        }
      }((QQ => new lQ(QQ)));
    class lQ {
      constructor(QQ) {
        this.blockMetadata = QQ, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const FQ = new Set(Object.keys(QQ).map((FQ => QQ[FQ].id)));
        FQ.add(0), this.maxBlockId = Math.max(...FQ)
      }
      static
      for (QQ) {
        return zQ(QQ)
      }
      getBlockIdMapping(QQ, FQ) {
        const wQ = this.getBlockIdMappingKey(QQ, FQ);
        let LQ = this.blockIdMappings.get(wQ);
        return void 0 === LQ && UQ.includes(QQ) && (LQ = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, QQ, FQ), this.blockIdMappings.set(wQ, LQ)), LQ
      }
      turnBlockId(QQ, FQ, wQ) {
        return this.mapBlockId(this.blockMetadata[QQ], FQ, this.getRotationMapping(FQ, wQ), wQ)
      }
      getBlockIdMappingKey(QQ, FQ) {
        return `r${QQ}|m${Number(FQ)}`
      }
      createBlockIdMapping(QQ, FQ, wQ, LQ) {
        const qQ = new Uint16Array(FQ + 1),
          oQ = this.getRotationMapping(wQ, LQ);
        for (const DQ in QQ) {
          const FQ = QQ[DQ];
          qQ[FQ.id] = this.mapBlockId(FQ, wQ, oQ, LQ)
        }
        return qQ
      }
      getRotationMapping(QQ, FQ) {
        const wQ = Math.round(QQ / 90),
          LQ = new Uint8Array(4);
        for (let qQ = 0; qQ < 4; qQ++) LQ[qQ] = (4 + qQ - wQ) % 4;
        if (FQ) {
          let QQ = LQ[0];
          LQ[0] = LQ[1], LQ[1] = QQ, QQ = LQ[2], LQ[2] = LQ[3], LQ[3] = QQ
        }
        return LQ
      }
      mapBlockId(QQ, FQ, wQ, LQ) {
        var qQ;
        const {
          blockMetadata: oQ
        } = this, DQ = Math.round(FQ / 90), {
          id: kQ,
          meta: vQ
        } = QQ, {
          rot: mQ,
          rootName: uQ,
          metaStr: HQ
        } = vQ;
        let bQ;
        const [, YQ, xQ] = null !== (qQ = KQ.exec(HQ)) && void 0 !== qQ ? qQ : [];
        if (void 0 !== YQ) {
          var AQ, tQ;
          bQ = null !== (AQ = null === (tQ = oQ[`${uQ}|meta|${[TQ.split("").filter(((QQ,FQ)=>YQ.split("").some((QQ=>{const wQ=TQ.indexOf(QQ);return((LQ?3-wQ:wQ)+DQ)%4===FQ})))).join(""),xQ].filter(Boolean).join("|")}`]) || void 0 === tQ ? void 0 : tQ.id) && void 0 !== AQ ? AQ : kQ
        } else if (null === mQ) bQ = kQ;
        else {
          var eQ, MQ;
          const QQ = wQ[mQ - 1] + 1;
          let FQ = HQ.replace(`rot${mQ}`, `rot${QQ}`);
          LQ && vQ.stairsCorner && (FQ = FQ.replace(/(Left|Right)$/, (QQ => "Left" === QQ ? "Right" : "Left"))), LQ && "Chest" === uQ && (FQ = FQ.replace(/\|(left|right)$/, ((QQ, FQ) => "left" === FQ ? "|right" : "|left")));
          const qQ = NQ.exec(FQ);
          if (LQ && null !== qQ) {
            const QQ = "lrud".split("").filter((QQ => qQ[2].includes("l" === QQ ? "r" : "r" === QQ ? "l" : QQ)));
            FQ = `${qQ[1]}|${QQ.join("")}`
          }
          const DQ = `${uQ}|${FQ}`;
          if (bQ = null !== (eQ = null === (MQ = oQ[DQ]) || void 0 === MQ ? void 0 : MQ.id) && void 0 !== eQ ? eQ : null, null === bQ) {
            const QQ = oQ[uQ];
            bQ = QQ.rootMetaDesc === DQ ? QQ.id : kQ
          }
        }
        return bQ
      }
    }

    function jQ(QQ, FQ, wQ) {
      let {
        xRotationMappedOrigin: LQ,
        shouldSwapXZ: qQ
      } = wQ;
      const oQ = qQ ? FQ : QQ;
      return null === LQ ? oQ : LQ - oQ
    }

    function aQ(QQ, FQ, wQ) {
      let {
        zRotationMappedOrigin: LQ,
        shouldSwapXZ: qQ
      } = wQ;
      const oQ = qQ ? QQ : FQ;
      return null === LQ ? oQ : LQ - oQ
    }
    const XQ = {
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
      fQ = new Map;

    function VQ(QQ, FQ) {
      const wQ = `${QQ}|${FQ}`;
      let LQ = fQ.get(wQ);
      if (void 0 === LQ) {
        const {
          size: qQ,
          palette: oQ,
          layers: DQ
        } = XQ[QQ], kQ = 90 === FQ || 270 === FQ, [vQ, mQ] = kQ ? [qQ[2], qQ[0]] : [qQ[0], qQ[2]], uQ = function(QQ, FQ, wQ) {
          let LQ = null,
            qQ = null,
            oQ = !1;
          switch (QQ) {
            case 0:
              break;
            case 90:
              LQ = FQ - 1, oQ = !0;
              break;
            case 180:
              LQ = FQ - 1, qQ = wQ - 1;
              break;
            case 270:
              qQ = wQ - 1, oQ = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${QQ}`)
          }
          return {
            xRotationMappedOrigin: LQ,
            zRotationMappedOrigin: qQ,
            shouldSwapXZ: oQ
          }
        }(FQ, vQ, mQ), HQ = lQ.for(IQ.h), bQ = oQ.map((QQ => (0, IQ.g)(HQ.turnBlockId((0, IQ.j)(QQ), FQ, !1)))), YQ = [];
        DQ.forEach(((QQ, FQ) => {
          QQ.split(" ").forEach(((QQ, wQ) => {
            for (let LQ = 0; LQ < QQ.length; LQ++)
              if ("." !== QQ[LQ]) {
                const qQ = [jQ(LQ, wQ, uQ), FQ, aQ(LQ, wQ, uQ)];
                YQ.push({
                  offset: qQ,
                  block: bQ[QQ.charCodeAt(LQ) - "a".charCodeAt(0)]
                })
              }
          }))
        })), LQ = {
          size: [vQ, qQ[1], mQ],
          cells: YQ
        }, fQ.set(wQ, LQ)
      }
      return LQ
    }
    const hQ = {
      farm_hut: wQ.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
      farm_house: wQ.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
      farm_barn: wQ.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
      rusticHome_tent: wQ.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
      rusticHome_cabin: wQ.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
      rusticHome_house: wQ.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
      market_stand: wQ.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
      market_stall: wQ.p + "static/media/market_stall.9a562807f9dff591618a.webp",
      market_shop: wQ.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
      castle_wall: wQ.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
      castle_gate: wQ.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
      castle_tower: wQ.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
    };
    var JQ = wQ(1107);
    const EQ = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function nQ(QQ) {
      let {
        page: FQ,
        building: wQ,
        onBuild: LQ,
        onPutAway: qQ
      } = QQ;
      const {
        t: oQ
      } = (0, rQ.y)(), {
        displayName: DQ,
        tier: kQ
      } = xQ(FQ.id), vQ = VQ(FQ.id, 0).cells.length, mQ = eQ[FQ.id], uQ = "locked" === FQ.state, HQ = wQ ? iQ.f : iQ.m;
      return (0, JQ.jsxs)("article", {
        className: CQ()("PlotsJournalPage", {
          Locked: uQ
        }),
        children: [(0, JQ.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: oQ(DQ.translationKey)
        }), (0, JQ.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [oQ(EQ[kQ]), " \xb7 ", oQ("plotsGame:journalBlocks", {
            blocks: String(vQ)
          })]
        }), (0, JQ.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [YQ.map((QQ => (0, JQ.jsx)("img", {
            className: CQ()({
              Shown: QQ === FQ.id
            }),
            src: hQ[QQ],
            alt: "",
            draggable: !1
          }, QQ))), "completed" === FQ.state && (0, JQ.jsx)("span", {
            className: "PlotsJournalStamp",
            children: oQ("plotsGame:journalBuilt")
          }), uQ && (0, JQ.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, JQ.jsx)(SQ.c, {
              name: "lock"
            })
          })]
        }), void 0 !== mQ && "completed" !== FQ.state && (0, JQ.jsx)("p", {
          className: "PlotsJournalNote",
          children: oQ(mQ)
        }), (0, JQ.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === FQ.state && (0, JQ.jsx)("p", {
            className: "PlotsJournalHint",
            children: oQ("plotsGame:journalLocked", {
              name: oQ(xQ(FQ.unlockedBy).displayName.translationKey)
            })
          }), FQ.active && (0, JQ.jsxs)(JQ.Fragment, {
            children: [(0, JQ.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: oQ("plotsGame:journalBuilding")
            }), (0, JQ.jsx)(iQ.i, {
              onClick: qQ,
              children: oQ("plotsGame:journalPutAway")
            })]
          }), !uQ && !FQ.active && (0, JQ.jsx)(HQ, {
            onClick: () => {
              LQ(FQ.id)
            },
            children: oQ("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function gQ(QQ) {
      let {
        className: FQ,
        page: wQ,
        hidden: LQ,
        building: qQ,
        journal: oQ
      } = QQ;
      return (0, JQ.jsxs)("div", {
        ref: QQ => {
          null !== QQ && (QQ.inert = LQ)
        },
        className: CQ()("PlotsJournalSide", FQ),
        children: [void 0 !== wQ && (0, JQ.jsx)(nQ, {
          page: wQ,
          building: qQ,
          onBuild: oQ.build,
          onPutAway: oQ.putAway
        }), void 0 === wQ && (0, JQ.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var PQ = wQ(317),
      ZQ = wQ(1870);

    function yQ(QQ) {
      return Math.cos((0, ZQ.n)(QQ))
    }

    function BQ(QQ) {
      return (0, ZQ.B)(Math.acos(PQ.e.clamp(QQ, -1, 1)))
    }

    function dQ(QQ, FQ, wQ, LQ, qQ) {
      const oQ = Math.abs(FQ - QQ),
        DQ = (0, ZQ.B)(qQ / (wQ * Math.abs(Math.sin((0, ZQ.n)(QQ))))),
        kQ = 450 * Math.min(1, oQ / LQ),
        vQ = DQ > 0 ? 3 * oQ / DQ : 1 / 0;
      return Math.round(Math.max(120, Math.min(kQ, vQ)))
    }
    class QF {
      constructor() {
        this.samples = []
      }
      add(QQ, FQ) {
        for (this.samples.push({
            x: QQ,
            at: FQ
          }); FQ - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const QQ = this.samples[0],
          FQ = this.samples[this.samples.length - 1];
        return FQ.at > QQ.at ? (FQ.x - QQ.x) / (FQ.at - QQ.at) : 0
      }
    }

    function FF(QQ, FQ) {
      return QQ > FQ && QQ >= 600
    }

    function wF(QQ) {
      return BQ(new DOMMatrixReadOnly(getComputedStyle(QQ).transform).m11)
    }

    function LF(QQ, FQ) {
      QQ.style.transform = `rotateY(${-FQ}deg)`, QQ.classList.add("Turning")
    }

    function qF(QQ) {
      let {
        journal: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, rQ.y)(), LQ = (0, OQ.i)(GQ, FQ.getPages()), qQ = (0, sQ.i)(FF), [kQ, vQ] = (0, oQ.useState)((() => function(QQ) {
        const FQ = QQ.findIndex((QQ => QQ.active));
        return -1 !== FQ ? FQ : Math.max(0, QQ.findIndex((QQ => "open" === QQ.state)))
      }(LQ))), uQ = (0, oQ.useRef)(null), HQ = (0, oQ.useRef)(null), bQ = (0, oQ.useRef)({
        Forward: null,
        Back: null
      }), YQ = qQ ? 2 : 1, xQ = qQ ? 180 : 90, AQ = kQ - kQ % YQ, tQ = AQ > 0, eQ = AQ + YQ < LQ.length, MQ = (0, oQ.useCallback)((() => {
        const QQ = HQ.current;
        return null === QQ ? AQ : (HQ.current = null, QQ.animation.cancel(), (FQ = bQ.current[QQ.direction]).style.transform = "", FQ.classList.remove("Turning"), null === QQ.next ? AQ : (vQ(QQ.next), QQ.next));
        var FQ
      }), [AQ]), pQ = (0, oQ.useCallback)(((QQ, FQ, wQ, LQ) => {
        const qQ = bQ.current[QQ],
          oQ = wF(qQ),
          DQ = FQ === ("Forward" === QQ) ? xQ : 0;
        LF(qQ, DQ);
        const kQ = qQ.animate([{
          transform: `rotateY(${-oQ}deg)`
        }, {
          transform: `rotateY(${-DQ}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : dQ(oQ, DQ, qQ.offsetWidth, xQ, DQ > oQ ? -wQ : wQ),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        HQ.current = {
          direction: QQ,
          animation: kQ,
          next: FQ ? LQ + ("Forward" === QQ ? YQ : -YQ) : null
        }, kQ.onfinish = () => {
          var QQ;
          (null === (QQ = HQ.current) || void 0 === QQ ? void 0 : QQ.animation) === kQ && MQ()
        }
      }), [YQ, xQ, MQ]), cQ = (0, oQ.useCallback)((QQ => {
        if (null !== uQ.current) return;
        const FQ = MQ();
        ("Forward" === QQ ? FQ + YQ < LQ.length : FQ > 0) && pQ(QQ, !0, 0, FQ)
      }), [MQ, pQ, YQ, LQ.length]);
      (0, oQ.useEffect)((() => {
        FQ.onOpened()
      }), [FQ]), (0, oQ.useEffect)((() => () => {
        var QQ;
        null === (QQ = HQ.current) || void 0 === QQ || QQ.animation.cancel()
      }), []), (0, oQ.useEffect)((() => {
        const QQ = QQ => {
          var FQ;
          QQ.pointerId !== (null === (FQ = uQ.current) || void 0 === FQ ? void 0 : FQ.pointerId) || uQ.current.following || (uQ.current = null)
        };
        return window.addEventListener("pointerup", QQ), () => {
          window.removeEventListener("pointerup", QQ)
        }
      }), []), (0, RQ.d)((QQ => ("ArrowLeft" === QQ.code || "ArrowRight" === QQ.code) && !(0, mQ.isTypingInInput)()), (QQ => {
        QQ.stopPropagation(), cQ("ArrowLeft" === QQ.code ? "Back" : "Forward")
      }));
      const SQ = (QQ, FQ, wQ) => {
          const LQ = function(QQ, FQ, wQ, LQ) {
            return (QQ < 0 ? wQ : LQ) ? PQ.e.clampAbs(QQ, FQ) : Math.sign(QQ) * FQ * (1 - 1 / (.55 * Math.abs(QQ) / FQ + 1))
          }(QQ.base + wQ, YQ * QQ.width, eQ, tQ);
          return "Forward" === FQ ? Math.min(LQ, 0) : Math.max(LQ, 0)
        },
        IQ = (QQ, FQ) => {
          const wQ = uQ.current;
          if (uQ.current = null, null === wQ.direction) return;
          wQ.speed.add(QQ, FQ);
          const LQ = wQ.speed.get(),
            qQ = SQ(wQ, wQ.direction, QQ - wQ.x);
          pQ(wQ.direction, null !== function(QQ, FQ, wQ, LQ, qQ) {
            if (Math.abs(FQ) >= .3 ? Math.sign(FQ) !== Math.sign(QQ) : Math.abs(QQ) < .5 * wQ) return null;
            const oQ = QQ < 0 ? "Forward" : "Back";
            return ("Forward" === oQ ? LQ : qQ) ? oQ : null
          }(qQ, LQ, YQ * wQ.width, eQ, tQ), LQ, AQ)
        },
        UQ = LQ.some((QQ => QQ.active)),
        NQ = (QQ, wQ, qQ) => (0, JQ.jsx)(gQ, {
          className: QQ,
          page: wQ >= 0 && wQ < LQ.length ? LQ[wQ] : void 0,
          hidden: qQ,
          building: UQ,
          journal: FQ
        });
      return (0, JQ.jsx)(WQ.d, {
        close: DQ.i,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, JQ.jsxs)("section", {
          className: CQ()("PlotsJournal", {
            Spread: qQ
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": wQ("plotsGame:journalTitle"),
          children: [(0, JQ.jsx)(iQ.j, {
            className: "PlotsJournalClose",
            onClick: DQ.i
          }), (0, JQ.jsx)(oF, {
            direction: "Back",
            disabled: !tQ,
            onTurn: cQ
          }), (0, JQ.jsx)("div", {
            className: "PlotsJournalBookPages",
            onPointerDown: QQ => {
              var FQ;
              if (!QQ.isPrimary || 0 !== QQ.button || null !== HQ.current && null !== QQ.target.closest("button")) return;
              const wQ = new QF;
              wQ.add(QQ.clientX, QQ.timeStamp);
              const LQ = bQ.current.Forward.offsetWidth,
                qQ = HQ.current;
              HQ.current = null;
              let oQ = 0;
              if (null !== qQ) {
                const FQ = bQ.current[qQ.direction],
                  wQ = wF(FQ);
                qQ.animation.cancel(), LF(FQ, wQ), oQ = function(QQ, FQ, wQ, LQ) {
                  return (QQ < 0 ? wQ : LQ) ? QQ : Math.sign(QQ) * FQ * (1 / (1 - Math.min(Math.abs(QQ) / FQ, .99)) - 1) / .55
                }(function(QQ, FQ, wQ, LQ) {
                  return wQ * (yQ(FQ) - yQ("Forward" === QQ ? 0 : LQ))
                }(qQ.direction, wQ, LQ, xQ), YQ * LQ, eQ, tQ), QQ.currentTarget.setPointerCapture(QQ.pointerId)
              }
              uQ.current = {
                pointerId: QQ.pointerId,
                x: QQ.clientX,
                y: QQ.clientY,
                base: oQ,
                width: LQ,
                following: null !== qQ,
                direction: null !== (FQ = null === qQ || void 0 === qQ ? void 0 : qQ.direction) && void 0 !== FQ ? FQ : null,
                speed: wQ
              }
            },
            onPointerMove: QQ => {
              const FQ = uQ.current;
              if (null === FQ || QQ.pointerId !== FQ.pointerId) return;
              if (0 === QQ.buttons) return void IQ(QQ.clientX, QQ.timeStamp);
              const wQ = QQ.clientX - FQ.x;
              !FQ.following && function(QQ, FQ) {
                return Math.abs(QQ) > 8 && Math.abs(QQ) > Math.abs(FQ)
              }(wQ, QQ.clientY - FQ.y) && (FQ.following = !0, FQ.direction = wQ < 0 ? "Forward" : "Back", QQ.currentTarget.setPointerCapture(QQ.pointerId)), null !== FQ.direction && (FQ.speed.add(QQ.clientX, QQ.timeStamp), LF(bQ.current[FQ.direction], function(QQ, FQ, wQ, LQ) {
                const qQ = wQ * yQ("Forward" === QQ ? 0 : LQ) + FQ;
                return PQ.e.clamp(BQ(qQ / wQ), 0, LQ)
              }(FQ.direction, SQ(FQ, FQ.direction, wQ), FQ.width, xQ)))
            },
            onPointerUp: QQ => {
              var FQ;
              QQ.pointerId === (null === (FQ = uQ.current) || void 0 === FQ ? void 0 : FQ.pointerId) && IQ(QQ.clientX, QQ.timeStamp)
            },
            onPointerCancel: QQ => {
              const FQ = uQ.current;
              QQ.pointerId === (null === FQ || void 0 === FQ ? void 0 : FQ.pointerId) && (uQ.current = null, null !== FQ.direction && pQ(FQ.direction, !1, 0, AQ))
            },
            children: (0, JQ.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [qQ && NQ("Left", AQ - 2, !0), NQ("Right", AQ + 2 * YQ - 1, !0), (0, JQ.jsxs)("div", {
                ref: QQ => {
                  bQ.current.Back = QQ
                },
                className: "PlotsJournalLeaf Back",
                children: [NQ("Recto", AQ - 1, !0), qQ && NQ("Verso", AQ, !1)]
              }), (0, JQ.jsxs)("div", {
                ref: QQ => {
                  bQ.current.Forward = QQ
                },
                className: "PlotsJournalLeaf Forward",
                children: [NQ("Recto", AQ + YQ - 1, !1), qQ && NQ("Verso", AQ + YQ, !0)]
              })]
            })
          }), (0, JQ.jsx)(oF, {
            direction: "Forward",
            disabled: !eQ,
            onTurn: cQ
          })]
        })
      })
    }

    function oF(QQ) {
      let {
        direction: FQ,
        disabled: wQ,
        onTurn: LQ
      } = QQ;
      const {
        t: qQ
      } = (0, rQ.y)();
      return (0, JQ.jsx)("div", {
        className: CQ()("PlotsJournalArrow", FQ),
        children: (0, JQ.jsx)(iQ.f, {
          disabled: wQ,
          ariaLabel: qQ("Forward" === FQ ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            LQ(FQ)
          },
          children: (0, JQ.jsx)(SQ.c, {
            name: "angle-up"
          })
        })
      })
    }
    var DF = wQ(36228),
      kF = wQ(1887),
      vF = wQ(1933);
    const mF = "plotsStepChanged",
      uF = "plotsPlotChanged";
    class HF {
      constructor() {
        this.step = ["none"], this.plot = ["none"]
      }
      getStep() {
        return this.step
      }
      receiveStep(QQ) {
        this.step = QQ, uQ.l.GA(mF, QQ, !0)
      }
      getPlot() {
        return this.plot
      }
      receivePlot(QQ) {
        this.plot = QQ, uQ.l.GA(uF, QQ, !0)
      }
    }
    const bF = "KeyJ";

    function YF(QQ) {
      let {
        hud: FQ,
        journal: wQ
      } = QQ;
      const LQ = (0, OQ.i)(GQ, wQ.getPages()),
        qQ = (0, OQ.i)(mF, FQ.getStep()),
        {
          isTouchScreen: oQ
        } = (0, kQ.l)(["isTouchScreen"]),
        {
          t: uQ
        } = (0, rQ.y)(),
        HQ = null !== LQ && "none" === qQ[0];
      return (0, RQ.d)((QQ => null !== LQ && QQ.code === bF && !QQ.repeat && !(0, mQ.isTypingInInput)()), (QQ => {
        (0, vQ.y)(QQ, HQ, DQ.o)
      })), HQ ? (0, JQ.jsx)(DF.d, {
        placement: "topRight",
        children: (0, JQ.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, JQ.jsxs)("button", {
            type: "button",
            className: CQ()("PlotsJournalButton SmallTextBold", {
              Touch: oQ
            }),
            onClick: DQ.o,
            children: [(0, JQ.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, JQ.jsx)(kF.e, {
                itemName: "Book",
                amount: 0
              })
            }), uQ("plotsGame:journalButton"), !oQ && (0, JQ.jsx)(vF.e, {
              className: "PlotsJournalButtonKey",
              keyCode: bF
            })]
          })
        })
      }) : null
    }
    var xF = wQ(37944),
      AF = wQ(37723),
      tF = wQ(36554),
      eF = wQ(9238),
      MF = wQ(9258),
      GF = wQ(37359);
    const pF = new Map([
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
      cF = [...tF.d.blockRemoveActionRoots, ...AF.b, ...eF.i, "Board", "Code Block", "Custom Lobby Block"],
      CF = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let SF = null;

    function iF() {
      return SF ??= function() {
        const QQ = WF(),
          FQ = Math.max(...QQ.map((QQ => IQ.h[QQ].id))) + 1,
          wQ = new Int32Array(FQ),
          LQ = new Int32Array(FQ),
          qQ = new Uint8Array(FQ).fill(1),
          oQ = new Uint8Array(FQ),
          DQ = new Uint8Array(FQ),
          kQ = new Array(FQ).fill("Air"),
          vQ = new Map,
          mQ = QQ => {
            let FQ = vQ.get(QQ);
            return void 0 === FQ && (FQ = vQ.size + 1, vQ.set(QQ, FQ)), FQ
          },
          uQ = new Set(cF);
        for (const bQ of QQ) {
          var HQ;
          const {
            id: QQ,
            meta: FQ,
            altActionable: vQ,
            canBePlacedOver: YQ
          } = IQ.h[bQ];
          wQ[QQ] = mQ(RF(bQ));
          const xQ = FQ.stairsCorner;
          if (null === xQ) LQ[QQ] = wQ[QQ];
          else {
            const wQ = xQ.endsWith("Right");
            LQ[QQ] = mQ(`${FQ.rootName}|rot${wQ?FQ.rot%4+1:FQ.rot}|${FQ.halfblockPlacement}|${xQ.replace("Right","Left")}`)
          }
          qQ[QQ] = YQ ? 1 : 0, oQ[QQ] = vQ || null !== FQ.open || bQ in GF.d || uQ.has(FQ.rootName) || void 0 !== (0, AF.e)(FQ.rootName) ? 1 : 0;
          const {
            rootName: AQ
          } = FQ;
          DQ[QQ] = null !== FQ.open || AF.b.includes(AQ) || AQ.includes("Bookshelf") || AQ.includes("Mailbox") ? 1 : 0, kQ[QQ] = null !== (HQ = (0, xF.g)(QQ)) && void 0 !== HQ ? HQ : AQ
        }
        return {
          kinds: wQ,
          shapes: LQ,
          empty: qQ,
          inUse: oQ,
          ownAltActionMessage: DQ,
          placingItems: kQ
        }
      }(), SF
    }

    function WF() {
      return Object.keys(IQ.h).filter((QQ => IQ.h[QQ].name === QQ))
    }

    function RF(QQ) {
      var FQ;
      const wQ = IQ.h[QQ],
        {
          rootName: LQ,
          rot: qQ
        } = wQ.meta,
        [, ...oQ] = (null !== (FQ = wQ.rootMetaDesc) && void 0 !== FQ ? FQ : QQ).split("|"),
        DQ = oQ.filter((QQ => !("meta" === QQ || CF.test(QQ) || (0, MF.C)(wQ) && /^[nesw]+$/.test(QQ) || eF.i.includes(LQ) && /^[lrud]+$/.test(QQ) || PQ.G.includes(LQ) && /^(left|right)$/.test(QQ))));
      return [LQ, ...DQ].map((QQ => "fenceGate" === wQ.model && QQ === `rot${qQ}` ? "rot" + ((qQ - 1) % 2 + 1) : QQ)).join("|")
    }

    function OF(QQ, FQ) {
      const {
        kinds: wQ,
        shapes: LQ
      } = iF();
      return wQ[QQ] === wQ[FQ] || LQ[QQ] === LQ[FQ]
    }

    function sF(QQ) {
      return 1 === iF().empty[QQ]
    }

    function rF(QQ) {
      return iF().placingItems[QQ]
    }

    function IF(QQ) {
      return pF.get(IQ.h[QQ].meta.rootName)
    }
    var UF = wQ(9231),
      NF = wQ(9252);
    const TF = [0, 0, 0, 1, 1, 1],
      KF = (0, UF.b)([
        [2, 0, 2, 6, 6, 6]
      ]),
      zF = (0, UF.b)([
        [3, 0, 3, 5, 5, 5]
      ]),
      lF = (0, UF.b)([
        [3, 3, 3, 5, 8, 5]
      ]),
      jF = [0, 1, 2, 3].map((QQ => (0, UF.b)((0, UF.l)([
        [3, 2, 0, 5, 7, 3]
      ], QQ))));

    function aF(QQ) {
      const {
        yA: FQ,
        model: wQ,
        blockModel: LQ,
        meta: qQ
      } = IQ.h[QQ];
      return void 0 !== FQ ? FQ : "CentreCross" === wQ ? KF : null !== LQ && void 0 !== LQ && LQ.startsWith("torch") ? qQ.halfblockPlacement === NF.c.side ? jF[qQ.rot - 1] : qQ.halfblockPlacement === NF.c.top ? lF : zF : TF
    }
    var XF = wQ(36523),
      fF = wQ(201);

    function VF(QQ, FQ) {
      const wQ = fF.e.pG / 2;
      return QQ[0] < FQ[0] + wQ && QQ[0] + 1 > FQ[0] - wQ && QQ[1] < FQ[1] + fF.e.iG && QQ[1] + 1 > FQ[1] && QQ[2] < FQ[2] + wQ && QQ[2] + 1 > FQ[2] - wQ
    }

    function hF(QQ, FQ, wQ, LQ, qQ) {
      const oQ = Math.hypot(...FQ.dir);
      if (!Number.isFinite(oQ) || 0 === oQ) return -1;
      const {
        from: DQ,
        reach: kQ,
        solid: vQ
      } = FQ, mQ = [FQ.dir[0] / oQ, FQ.dir[1] / oQ, FQ.dir[2] / oQ], uQ = null === vQ ? kQ : Math.min(kQ, function(QQ, FQ, wQ) {
        const LQ = JF(QQ, FQ, wQ);
        if (LQ !== 1 / 0) return LQ;
        return (wQ[0] + .5 - QQ[0]) * FQ[0] + (wQ[1] + .5 - QQ[1]) * FQ[1] + (wQ[2] + .5 - QQ[2]) * FQ[2]
      }(DQ, mQ, vQ) + .75);
      let HQ = -1,
        bQ = 1 / 0,
        YQ = 1 / 0;
      for (let xQ = 0; xQ < QQ.length; xQ += 4) {
        const FQ = [QQ[xQ], QQ[xQ + 1], QQ[xQ + 2]],
          oQ = qQ(xQ) ? kQ : uQ;
        let vQ = -1,
          AQ = JF(DQ, mQ, FQ);
        if (AQ > oQ) {
          const QQ = [FQ[0] + .5 - DQ[0], FQ[1] + .5 - DQ[1], FQ[2] + .5 - DQ[2]];
          if (AQ = QQ[0] * mQ[0] + QQ[1] * mQ[1] + QQ[2] * mQ[2], AQ <= 0 || AQ > oQ) continue;
          if (vQ = Math.hypot(QQ[0] - AQ * mQ[0], QQ[1] - AQ * mQ[1], QQ[2] - AQ * mQ[2]), vQ > .7 || !LQ(xQ)) continue
        }(vQ < bQ || vQ === bQ && AQ < YQ) && wQ(xQ) && (HQ = xQ, bQ = vQ, YQ = AQ)
      }
      return HQ
    }

    function JF(QQ, FQ, wQ) {
      let LQ = 0,
        qQ = 1 / 0;
      for (let oQ = 0; oQ < 3; oQ++) {
        const DQ = wQ[oQ] - QQ[oQ];
        if (0 === FQ[oQ]) {
          if (DQ > 0 || DQ + 1 < 0) return 1 / 0;
          continue
        }
        const kQ = DQ / FQ[oQ],
          vQ = (DQ + 1) / FQ[oQ];
        LQ = Math.max(LQ, Math.min(kQ, vQ)), qQ = Math.min(qQ, Math.max(kQ, vQ))
      }
      return LQ <= qQ ? LQ : 1 / 0
    }
    var EF = wQ(37593),
      nF = wQ(38046);
    const gF = [1, 1, 1];
    class PF {
      constructor(QQ) {
        this.api = QQ, this.meshes = null, this.shown = null
      }
      show(QQ) {
        if (!(0, XF.g)(QQ, this.shown))
          if (this.shown = null === QQ ? null : [QQ[0], QQ[1], QQ[2]], null !== this.meshes)
            for (const FQ of this.meshes) this.api.setGameMesh(FQ, null === QQ ? {
              visible: !1
            } : {
              anchor: QQ,
              visible: !0
            });
          else if (null !== QQ) {
          const FQ = [EF.f, EF.f, EF.f, 0, 0, 0];
          this.meshes = [this.build([FQ], EF.i, QQ), this.build((0, EF.b)(), EF.p, QQ)]
        }
      }
      dispose() {
        for (const FQ of null !== (QQ = this.meshes) && void 0 !== QQ ? QQ : []) {
          var QQ;
          this.api.disposeGameMesh(FQ)
        }
        this.meshes = null, this.shown = null
      }
      build(QQ, FQ, wQ) {
        const LQ = [],
          qQ = [];
        for (const [oQ, DQ, kQ, vQ, mQ, uQ] of QQ)(0, nF.e)(LQ, qQ, [vQ + .5, mQ + .5, uQ + .5], [oQ, DQ, kQ]);
        return this.api.createGameMesh({
          positions: LQ,
          indices: qQ
        }, {
          rgb: gF,
          alpha: FQ,
          onTop: !0
        }, wQ)
      }
    }
    class ZF {
      constructor(QQ) {
        this.api = QQ, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(QQ) {
        const FQ = fF.e.tx;
        this.chunks = [];
        for (let wQ = 0; wQ < QQ.length; wQ += 3) {
          const LQ = Math.floor(QQ[wQ] / FQ),
            qQ = Math.floor(QQ[wQ + 1] / FQ),
            oQ = Math.floor(QQ[wQ + 2] / FQ);
          this.watches(LQ, qQ, oQ) || this.chunks.push(LQ, qQ, oQ)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const QQ = performance.now();
        if (QQ - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = QQ;
        let FQ = !1;
        for (let wQ = 0; wQ < this.chunks.length; wQ += 3) {
          const QQ = this.api.getChunkVersion(this.chunks[wQ], this.chunks[wQ + 1], this.chunks[wQ + 2]);
          this.versions[wQ / 3] !== QQ && (this.versions[wQ / 3] = QQ, FQ = !0)
        }
        return FQ
      }
      watches(QQ, FQ, wQ) {
        for (let LQ = 0; LQ < this.chunks.length; LQ += 3)
          if (this.chunks[LQ] === QQ && this.chunks[LQ + 1] === FQ && this.chunks[LQ + 2] === wQ) return !0;
        return !1
      }
    }
    const yF = .35,
      BF = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      dF = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      Qw = [.95, .2, .15];
    class Fw {
      constructor() {
        this.groups = []
      }
      add(QQ, FQ, wQ, LQ, qQ) {
        let oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : TF;
        for (const DQ of this.groups)
          if (qw(DQ, LQ, qQ)) return DQ.cells.push(QQ, FQ, wQ), void DQ.boxes.push(oQ);
        this.groups.push({
          rgb: LQ,
          look: qQ,
          cells: [QQ, FQ, wQ],
          boxes: [oQ]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class ww {
      constructor(QQ) {
        this.api = QQ, this.shown = []
      }
      show(QQ) {
        const FQ = [];
        for (const wQ of QQ) {
          const QQ = this.shown.findIndex((QQ => {
            let {
              group: FQ
            } = QQ;
            return qw(FQ, wQ.rgb, wQ.look) && ow(FQ, wQ)
          })); - 1 === QQ ? FQ.push(this.build(wQ)) : (FQ.push(this.shown[QQ]), this.shown.splice(QQ, 1))
        }
        this.dispose(), this.shown = FQ
      }
      dispose() {
        for (const {
            meshes: QQ
          }
          of this.shown)
          for (const FQ of QQ) this.api.disposeGameMesh(FQ);
        this.shown = []
      }
      build(QQ) {
        const {
          rgb: FQ,
          look: wQ,
          boxes: LQ
        } = QQ, qQ = [FQ[0] + (1 - FQ[0]) * yF, FQ[1] + (1 - FQ[1]) * yF, FQ[2] + (1 - FQ[2]) * yF], oQ = [this.buildMesh(QQ.cells, FQ, wQ.alpha, ((QQ, FQ, qQ, oQ) => {
          Lw(QQ, FQ, qQ, LQ[oQ], wQ.size, !1)
        })), this.buildMesh(QQ.cells, qQ, wQ.alpha, ((QQ, FQ, qQ, oQ) => {
          Lw(QQ, FQ, qQ, LQ[oQ], wQ.size, !0)
        }))];
        return wQ.crossed && oQ.push(this.buildMesh(QQ.cells, FQ, .9, ((QQ, FQ, LQ) => {
          (0, nF.h)(QQ, FQ, LQ, wQ.size + .01, .12)
        }))), {
          group: QQ,
          meshes: oQ
        }
      }
      buildMesh(QQ, FQ, wQ, LQ) {
        const qQ = [QQ[0], QQ[1], QQ[2]],
          oQ = [],
          DQ = [];
        for (let kQ = 0; kQ < QQ.length; kQ += 3) LQ(oQ, DQ, [QQ[kQ] - qQ[0] + .5, QQ[kQ + 1] - qQ[1] + .5, QQ[kQ + 2] - qQ[2] + .5], kQ / 3);
        return this.api.createGameMesh({
          positions: oQ,
          indices: DQ
        }, {
          rgb: [FQ[0], FQ[1], FQ[2]],
          alpha: wQ
        }, qQ)
      }
    }

    function Lw(QQ, FQ, wQ, LQ, qQ, oQ) {
      for (let DQ = 0; DQ < LQ.length; DQ += 6) {
        const kQ = [0, 0, 0],
          vQ = [0, 0, 0];
        for (let QQ = 0; QQ < 3; QQ++) kQ[QQ] = wQ[QQ] + ((LQ[DQ + QQ] + LQ[DQ + QQ + 3]) / 2 - .5) * qQ, vQ[QQ] = (LQ[DQ + QQ + 3] - LQ[DQ + QQ]) * qQ;
        (0, nF.b)(QQ, FQ, kQ, vQ, oQ)
      }
    }

    function qw(QQ, FQ, wQ) {
      return QQ.rgb[0] === FQ[0] && QQ.rgb[1] === FQ[1] && QQ.rgb[2] === FQ[2] && QQ.look === wQ
    }

    function ow(QQ, FQ) {
      if (QQ.cells.length !== FQ.cells.length) return !1;
      for (let wQ = 0; wQ < QQ.cells.length; wQ++)
        if (QQ.cells[wQ] !== FQ.cells[wQ]) return !1;
      return QQ.boxes.every(((QQ, wQ) => QQ === FQ.boxes[wQ]))
    }

    function Dw(QQ, FQ) {
      return QQ.getClientOption(FQ, "blockReach") + 1
    }
    class kw {
      constructor(QQ, FQ, wQ) {
        this.api = QQ, this.localPlayerId = FQ, this.pickNext = wQ, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(QQ) {
        const [FQ, , wQ] = QQ.cameraDirection, LQ = Math.hypot(FQ, wQ);
        LQ > .001 && (this.heading = [FQ / LQ, wQ / LQ])
      }
      tapped(QQ, FQ, wQ) {
        const LQ = Dw(this.api, this.localPlayerId),
          {
            origin: qQ,
            direction: oQ
          } = this.api.getActionRay(),
          DQ = [...qQ],
          kQ = [
            [DQ, [DQ[0] + oQ[0] * LQ, DQ[1] + oQ[1] * LQ, DQ[2] + oQ[2] * LQ]]
          ];
        null !== QQ && kQ.push([DQ, (0, XF.d)(QQ)]), this.tap = {
          lines: kQ,
          next: FQ,
          ms: wQ
        }
      }
      filled(QQ, FQ) {
        this.tap = null, this.turnFrom(QQ, FQ), this.retry(FQ)
      }
      arrived(QQ, FQ) {
        const {
          tap: wQ
        } = this;
        if (null === wQ || FQ - wQ.ms > 1500) return null;
        const LQ = (0, XF.d)(QQ);
        return (0, XF.g)(wQ.next, QQ) || wQ.lines.some((QQ => {
          let [FQ, wQ] = QQ;
          return function(QQ, FQ, wQ) {
            const LQ = [wQ[0] - FQ[0], wQ[1] - FQ[1], wQ[2] - FQ[2]],
              qQ = [QQ[0] - FQ[0], QQ[1] - FQ[1], QQ[2] - FQ[2]],
              oQ = LQ[0] ** 2 + LQ[1] ** 2 + LQ[2] ** 2,
              DQ = 0 === oQ ? 0 : Math.min(1, Math.max(0, (qQ[0] * LQ[0] + qQ[1] * LQ[1] + qQ[2] * LQ[2]) / oQ));
            return Math.hypot(qQ[0] - LQ[0] * DQ, qQ[1] - LQ[1] * DQ, qQ[2] - LQ[2] * DQ)
          }(LQ, FQ, wQ) <= .9
        })) ? (this.tap = null, this.turnFrom(QQ, FQ), wQ.ms) : null
      }
      turnFrom(QQ, FQ) {
        this.pending = {
          from: QQ,
          ms: FQ,
          turnMs: Math.max(50, Math.min(250, FQ - this.lastFillMs))
        }, this.lastFillMs = FQ
      }
      retry(QQ) {
        const {
          pending: FQ
        } = this;
        if (null === FQ) return;
        if (QQ - FQ.ms > 1500) return void(this.pending = null);
        const wQ = this.pickNext((0, XF.d)(FQ.from), (QQ => (0, XF.g)(QQ, FQ.from)));
        if (null === wQ) return;
        this.pending = null;
        const {
          turning: LQ
        } = this;
        if (null !== LQ && QQ < LQ.endMs && (0, XF.g)(LQ.to, wQ)) return;
        const qQ = this.api.getActionRay().origin,
          oQ = [wQ[0] + .5 - qQ[0], wQ[1] + .5 - qQ[1], wQ[2] + .5 - qQ[2]],
          DQ = Math.hypot(oQ[0], oQ[2]);
        if (DQ < .3) {
          const QQ = Math.max(DQ, .001);
          oQ[0] = this.heading[0] * QQ, oQ[2] = this.heading[1] * QQ
        }
        this.api.turnCamera(oQ, FQ.turnMs), this.turning = {
          to: wQ,
          endMs: QQ + FQ.turnMs
        }
      }
    }
    class vw {
      constructor(QQ, FQ, wQ) {
        this.api = QQ, this.localPlayerId = FQ, this.juice = wQ, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], this.lastFilled = null, this.lastSeenFilled = null, this.playerCells = [], this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = null, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new ZF(QQ), this.meshes = new ww(QQ), this.outline = new PF(QQ), this.turn = new kw(QQ, FQ, ((QQ, FQ) => this.pickNext(QQ, FQ)))
      }
      bx(QQ) {
        const FQ = "active" === QQ[0] ? `${QQ[1]}|${QQ[3]}|${QQ[4]}|${QQ[5]}|${QQ[6]}` : "";
        if ("active" !== QQ[0]) "built" === QQ[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , wQ, LQ, qQ, oQ] = QQ;
          FQ !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = wQ) : wQ === this.layerY ? this.burstUnlisted(LQ) : wQ > this.layerY && this.finishLayer(wQ), this.layerY = wQ, this.layerCells.has(wQ) || this.layerCells.set(wQ, LQ.filter(uw)), this.ghostCells = LQ, this.palette = qQ, this.occupiedCells = oQ
        }
        FQ !== this.blueprint && (this.blueprint = FQ, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((QQ => this.api.blockNameToBlockId(QQ))), this.chunkWatch.watch([...this.ghostCells.filter(uw), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(QQ) {
        this.burstUnlisted([]), QQ > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = QQ)
      }
      fH() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const QQ = performance.now();
        let FQ = !1;
        for (const [qQ, oQ] of this.foreseen) {
          var wQ;
          if (QQ - oQ > 1e3) this.foreseen.delete(qQ), FQ = !0, (null === (wQ = this.lastFilled) || void 0 === wQ ? void 0 : wQ.join()) === qQ && (this.lastFilled = this.lastSeenFilled)
        }
        const LQ = mw(this.api.getPositionView(this.localPlayerId));
        (FQ || LQ.some(((QQ, FQ) => QQ !== this.playerCells[FQ]))) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(QQ) {
        const FQ = new Set;
        for (let qQ = 0; qQ < QQ.length; qQ += 4) FQ.add(`${QQ[qQ]},${QQ[qQ+1]},${QQ[qQ+2]}`);
        const wQ = [],
          {
            ghostCells: LQ
          } = this;
        for (let qQ = 0; qQ < LQ.length; qQ += 4) {
          const QQ = `${LQ[qQ]},${LQ[qQ+1]},${LQ[qQ+2]}`;
          !FQ.has(QQ) && this.open.delete(QQ) && wQ.push(this.filledCell(qQ))
        }
        this.burst(wQ)
      }
      refresh() {
        const {
          ghostCells: QQ,
          palette: FQ,
          occupiedCells: wQ
        } = this, LQ = new Fw, qQ = new Set, oQ = [], DQ = [];
        for (let kQ = 0; kQ < QQ.length; kQ += 4) {
          const [wQ, vQ, mQ, uQ] = [QQ[kQ], QQ[kQ + 1], QQ[kQ + 2], QQ[kQ + 3]], HQ = this.api.getBlockId(wQ, vQ, mQ), bQ = `${wQ},${vQ},${mQ}`, YQ = OF(this.blockIds[uQ], HQ);
          !YQ && sF(HQ) ? LQ.add(wQ, vQ, mQ, IF(FQ[uQ]), BF, aF(FQ[uQ])) : YQ ? this.open.has(bQ) && oQ.push(this.filledCell(kQ)) : LQ.add(wQ, vQ, mQ, Qw, dF), !YQ && this.api.isBlockInLoadedChunk(wQ, vQ, mQ) && (qQ.add(bQ), DQ.push(wQ, vQ, mQ, sF(HQ) ? 0 : 1))
        }
        this.open = qQ, this.nextCells = DQ;
        for (let kQ = 0; kQ < wQ.length; kQ += 3) {
          const [QQ, FQ, qQ] = [wQ[kQ], wQ[kQ + 1], wQ[kQ + 2]];
          sF(this.api.getBlockId(QQ, FQ, qQ)) || LQ.add(QQ, FQ, qQ, Qw, dF)
        }
        this.meshes.show(LQ.toArray()), this.burst(oQ), this.showNext(), this.turn.retry(performance.now())
      }
      burst(QQ) {
        const FQ = performance.now(),
          wQ = [];
        for (const [qQ, oQ, DQ] of QQ) {
          const QQ = [qQ, oQ, DQ];
          this.lastSeenFilled = QQ, this.foreseen.delete(QQ.join()) || wQ.push(QQ)
        }
        const LQ = this.isHolding(FQ);
        for (const qQ of wQ) {
          if (this.lastFilled = qQ, LQ && this.pressFilled) {
            this.turn.filled(qQ, FQ);
            continue
          }
          const QQ = this.turn.arrived(qQ, FQ);
          if (null !== QQ) {
            this.pressFilled = LQ;
            for (const [FQ, wQ] of this.foreseen) wQ <= QQ && this.foreseen.delete(FQ)
          }
        }
        this.juice.filled(QQ)
      }
      showNext() {
        var QQ;
        const FQ = this.api.getPositionView(this.localPlayerId);
        this.playerCells.splice(0, 1 / 0, ...mw(FQ));
        const wQ = this.lastFilled;
        this.nextCell = this.pickNext(null === wQ ? [FQ[0], FQ[1] + 1, FQ[2]] : (0, XF.d)(wQ), (() => !1)), this.outline.show(null !== (QQ = this.aimed) && void 0 !== QQ ? QQ : this.nextCell)
      }
      pickNext(QQ, FQ) {
        const wQ = this.api.getPositionView(this.localPlayerId),
          LQ = [wQ[0], wQ[1] + fF.e.iG * fF.e.playerEyeToHeightRatio, wQ[2]],
          qQ = Dw(this.api, this.localPlayerId),
          {
            nextCells: oQ
          } = this,
          DQ = QQ => [oQ[QQ], oQ[QQ + 1], oQ[QQ + 2]],
          kQ = function(QQ, FQ, wQ, LQ, qQ, oQ) {
            let DQ = -1,
              kQ = -1,
              vQ = 1 / 0;
            for (let mQ = 0; mQ < QQ.length; mQ += FQ) {
              const FQ = (oQ(mQ) ? 2 : 0) + (LQ(mQ) ? 1 : 0);
              if (FQ < kQ || qQ(mQ)) continue;
              const uQ = (QQ[mQ] + .5 - wQ[0]) ** 2 + (QQ[mQ + 1] + .5 - wQ[1]) ** 2 + (QQ[mQ + 2] + .5 - wQ[2]) ** 2;
              (FQ > kQ || uQ < vQ) && (DQ = mQ, kQ = FQ, vQ = uQ)
            }
            return DQ
          }(oQ, 4, QQ, (QQ => 1 === oQ[QQ + 3]), (QQ => {
            const LQ = DQ(QQ);
            return VF(LQ, wQ) || this.foreseen.has(LQ.join()) || FQ(LQ)
          }), (QQ => function(QQ, FQ, wQ) {
            return (FQ[0] + .5 - QQ[0]) ** 2 + (FQ[1] + .5 - QQ[1]) ** 2 + (FQ[2] + .5 - QQ[2]) ** 2 <= wQ ** 2
          }(LQ, DQ(QQ), qQ)));
        return -1 === kQ ? null : DQ(kQ)
      }
      afterRender(QQ) {
        var FQ;
        this.turn.look(QQ);
        const wQ = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === wQ ? null : wQ.position), this.outline.show(null !== (FQ = this.aimed) && void 0 !== FQ ? FQ : this.nextCell)
      }
      isHolding(QQ) {
        return null !== this.altMs && QQ - this.altMs <= 500
      }
      attemptAltAction(QQ) {
        const FQ = performance.now();
        if (this.isHolding(FQ) || (this.pressFilled = !1), this.altMs = FQ, this.pressFilled) return "preventPlacement";
        const wQ = this.findAimed(QQ);
        if (null !== wQ) return this.foreseen.set(wQ.join(), FQ), this.lastFilled = wQ, this.aimed = null, this.showNext(), this.turn.filled(wQ, FQ), this.pressFilled = !0, "preventPlacement";
        null !== this.nextCell && this.turn.tapped(QQ, this.nextCell, FQ)
      }
      findAimed(QQ) {
        return function(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
          const kQ = QQ.owQ(FQ),
            vQ = null === kQ || null === QQ.blockNameToBlockId(kQ.name, !0) ? null : kQ.name,
            mQ = QQ.getPositionView(FQ),
            {
              origin: uQ,
              direction: HQ
            } = QQ.getActionRay(),
            bQ = hF(LQ, {
              from: uQ,
              dir: HQ,
              reach: Dw(QQ, FQ),
              solid: wQ
            }, (FQ => {
              const wQ = [LQ[FQ], LQ[FQ + 1], LQ[FQ + 2]];
              return !OF(qQ[LQ[FQ + 3]], QQ.getBlockId(...wQ)) && !DQ.has(wQ.join()) && QQ.isBlockInLoadedChunk(...wQ) && !VF(wQ, mQ)
            }), (QQ => null === vQ || vQ === rF(qQ[LQ[QQ + 3]])), (QQ => null !== oQ && LQ[QQ] === oQ[0] && LQ[QQ + 1] === oQ[1] && LQ[QQ + 2] === oQ[2]));
          return -1 === bQ ? null : [LQ[bQ], LQ[bQ + 1], LQ[bQ + 2]]
        }(this.api, this.localPlayerId, QQ, this.ghostCells, this.blockIds, this.nextCell, this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(QQ) {
        const {
          ghostCells: FQ
        } = this, [wQ, LQ, qQ] = IF(this.palette[FQ[QQ + 3]]);
        return [FQ[QQ], FQ[QQ + 1], FQ[QQ + 2], wQ, LQ, qQ]
      }
    }

    function mw(QQ) {
      let [FQ, wQ, LQ] = QQ;
      const qQ = fF.e.pG / 2;
      return [Math.floor(FQ), Math.floor(wQ), Math.floor(LQ), Math.floor(FQ - qQ), Math.floor(FQ + qQ), Math.floor(wQ + fF.e.iG), Math.floor(LQ - qQ), Math.floor(LQ + qQ)]
    }

    function uw(QQ, FQ) {
      return FQ % 4 !== 3
    }

    function Hw(QQ, FQ, wQ, LQ, qQ) {
      if (!QQ.isBlockInLoadedChunk(FQ, LQ - 6, wQ) || !QQ.isBlockInLoadedChunk(FQ, LQ + 6 + qQ, wQ) || !QQ.canModifyBlockAt(FQ, LQ, wQ)) return NaN;
      let oQ = LQ - 1;
      if (0 !== QQ.getBlockId(FQ, oQ, wQ)) {
        for (; oQ < LQ + 6 && 0 !== QQ.getBlockId(FQ, oQ + 1, wQ);) oQ++;
        return oQ
      }
      for (; oQ > LQ - 6;)
        if (oQ--, 0 !== QQ.getBlockId(FQ, oQ, wQ)) return oQ;
      return NaN
    }

    function bw(QQ, FQ, wQ, LQ, qQ) {
      let oQ = 0;
      for (let DQ = LQ + 1; DQ <= LQ + qQ; DQ++) 0 !== QQ.getBlockId(FQ, DQ, wQ) && oQ++;
      return oQ
    }

    function Yw(QQ) {
      const FQ = new Map;
      for (const DQ of QQ) {
        var wQ;
        if (Number.isNaN(DQ)) return null;
        FQ.set(DQ, (null !== (wQ = FQ.get(DQ)) && void 0 !== wQ ? wQ : 0) + 1)
      }
      let LQ = NaN,
        qQ = 0;
      for (const [DQ, kQ] of FQ)(kQ > qQ || kQ === qQ && DQ < LQ) && (LQ = DQ, qQ = kQ);
      let oQ = 0;
      for (const DQ of QQ) oQ += Math.abs(DQ - LQ);
      return oQ
    }

    function xw(QQ, FQ, wQ, LQ) {
      const {
        eye: qQ,
        forward: oQ,
        tanHalfFovX: DQ,
        tanHalfFovY: kQ
      } = QQ, [vQ, mQ] = function(QQ) {
        let [FQ, wQ, LQ] = QQ;
        const qQ = Math.hypot(FQ, LQ),
          [oQ, DQ] = [LQ / qQ, -FQ / qQ];
        return [
          [oQ, 0, DQ],
          [wQ * DQ, LQ * oQ - FQ * DQ, -wQ * oQ]
        ]
      }(oQ), [uQ, HQ] = [FQ * DQ, wQ * kQ], bQ = oQ[0] + uQ * vQ[0] + HQ * mQ[0], YQ = oQ[1] + HQ * mQ[1], xQ = oQ[2] + uQ * vQ[2] + HQ * mQ[2], AQ = (LQ - qQ[1]) / YQ;
      return AQ > 0 && AQ < 1 / 0 ? [qQ[0] + AQ * bQ, qQ[2] + AQ * xQ] : null
    }
    const Aw = "plotsBlueprintPlacementChanged",
      tw = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class ew {
      constructor(QQ, FQ) {
        this.api = QQ, this.localPlayerId = FQ, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = QQ => {
          var FQ, wQ, LQ, oQ;
          const DQ = null !== (FQ = null === (wQ = this.placing) || void 0 === wQ ? void 0 : wQ.rotation) && void 0 !== FQ ? FQ : 0,
            {
              size: kQ
            } = VQ(QQ, DQ),
            vQ = this.api.Qp(this.localPlayerId),
            [mQ, uQ] = null !== (LQ = null !== (oQ = function(QQ, FQ, wQ) {
              const [LQ, qQ, oQ] = FQ, [DQ, kQ, vQ] = [Math.floor(wQ[0]), Math.floor(wQ[1]), Math.floor(wQ[2])], mQ = 6 + Math.max(LQ, oQ) / 2, [uQ, HQ] = [Math.ceil(mQ + LQ / 2), Math.ceil(mQ + oQ / 2)], [bQ, YQ] = [DQ - uQ, vQ - HQ], [xQ, AQ] = [2 * uQ + 1, 2 * HQ + 1], tQ = new Float64Array(xQ * AQ), eQ = new Uint16Array(xQ * AQ);
              for (let cQ = 0; cQ < xQ; cQ++)
                for (let FQ = 0; FQ < AQ; FQ++) {
                  const wQ = Hw(QQ, bQ + cQ, YQ + FQ, kQ, qQ);
                  tQ[cQ * AQ + FQ] = wQ, Number.isNaN(wQ) || (eQ[cQ * AQ + FQ] = bw(QQ, bQ + cQ, YQ + FQ, wQ, qQ))
                }
              const MQ = [];
              let GQ = null,
                pQ = 1 / 0;
              for (let cQ = 0; cQ + LQ <= xQ; cQ++)
                for (let QQ = 0; QQ + oQ <= AQ; QQ++) {
                  const [FQ, qQ] = [bQ + cQ, YQ + QQ], kQ = Math.hypot(FQ + LQ / 2 - wQ[0], qQ + oQ / 2 - wQ[2]);
                  if (kQ > mQ || DQ >= FQ - 2 && DQ < FQ + LQ + 2 && vQ >= qQ - 2 && vQ < qQ + oQ + 2) continue;
                  MQ.length = 0;
                  let uQ = 0;
                  for (let wQ = 0; wQ < LQ; wQ++)
                    for (let FQ = 0; FQ < oQ; FQ++) MQ.push(tQ[(cQ + wQ) * AQ + QQ + FQ]), uQ += eQ[(cQ + wQ) * AQ + QQ + FQ];
                  const HQ = Yw(MQ);
                  if (null === HQ) continue;
                  const xQ = kQ + 3 * (HQ + uQ);
                  xQ < pQ && (pQ = xQ, GQ = [FQ, qQ])
                }
              return GQ
            }(this.api, kQ, vQ)) && void 0 !== oQ ? oQ : this.cornerOnTarget(kQ)) && void 0 !== LQ ? LQ : [Math.floor(vQ[0]) + 2, Math.floor(vQ[2])];
          this.placing = {
            id: QQ,
            rotation: DQ,
            corner: [mQ, this.playerLevel(), uQ],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null
          }, this.update(), this.api.sendCommand(`${qQ} preview`)
        }, this.rotate = () => {
          const {
            id: QQ,
            rotation: FQ,
            corner: wQ
          } = this.placing, qQ = LQ[(LQ.indexOf(FQ) + 1) % LQ.length], [oQ, , DQ] = VQ(QQ, FQ).size, [kQ, , vQ] = VQ(QQ, qQ).size;
          this.moveTo(wQ[0] + Math.floor(oQ / 2) - Math.floor(kQ / 2), wQ[2] + Math.floor(DQ / 2) - Math.floor(vQ / 2), qQ)
        }, this.hoverAt = (QQ, FQ) => {
          this.placing.hover = [QQ, FQ], this.moveCentreTo(this.camera, QQ, FQ)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (QQ, FQ) => {
          const wQ = this.placing,
            {
              eye: LQ,
              forward: qQ,
              tanHalfFovX: oQ,
              tanHalfFovY: DQ
            } = this.camera,
            kQ = {
              eye: [LQ[0], LQ[1], LQ[2]],
              forward: [qQ[0], qQ[1], qQ[2]],
              tanHalfFovX: oQ,
              tanHalfFovY: DQ
            },
            vQ = wQ.corner[1],
            mQ = xw(kQ, QQ, FQ, vQ);
          wQ.hover = null, wQ.drag = mQ && {
            view: kQ,
            ground: mQ,
            corner: [wQ.corner[0], wQ.corner[2]],
            level: vQ
          }
        }, this.dragTo = (QQ, FQ) => {
          const wQ = this.placing.drag,
            LQ = wQ && xw(wQ.view, QQ, FQ, wQ.level);
          null !== wQ && null !== LQ && this.moveTo(wQ.corner[0] + Math.round(LQ[0] - wQ.ground[0]), wQ.corner[1] + Math.round(LQ[1] - wQ.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const QQ = this.view;
          QQ.waiting || (QQ.blocked ? this.GA({
            ...QQ,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const QQ = this.placing,
            {
              id: FQ,
              rotation: wQ,
              corner: LQ
            } = QQ;
          this.api.sendCommand(`${qQ} place ${FQ} ${LQ.join(" ")} ${wQ}`), QQ.sent = {
            atMs: performance.now(),
            corner: [...LQ],
            rotation: wQ,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${qQ} preview off`))
        }, this.chunkWatch = new ZF(QQ), this.meshes = new ww(QQ)
      }
      getView() {
        return this.view
      }
      fH() {
        const QQ = this.placing;
        null !== QQ && (null !== QQ.sent && !QQ.sent.timedOut && performance.now() - QQ.sent.atMs > 3e3 ? (QQ.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(QQ) || this.chunkWatch.changed()) && this.update())
      }
      afterRender(QQ) {
        const FQ = this.placing;
        null !== FQ && (! function(QQ, FQ) {
          for (let wQ = 0; wQ < 3; wQ++) FQ.eye[wQ] = QQ.cameraPosition[wQ], FQ.forward[wQ] = QQ.cameraDirection[wQ];
          FQ.tanHalfFovX = QQ.tanHalfFovX, FQ.tanHalfFovY = QQ.tanHalfFovY
        }(QQ, this.camera), null !== FQ.hover && this.moveCentreTo(this.camera, FQ.hover[0], FQ.hover[1]))
      }
      bx(QQ) {
        const FQ = this.placing;
        if (null === FQ || null === FQ.sent || "active" !== QQ[0]) return;
        const {
          sent: wQ
        } = FQ, [, LQ, qQ, oQ, DQ, kQ, vQ] = QQ;
        qQ && LQ === FQ.id && vQ === wQ.rotation && oQ === wQ.corner[0] && DQ === wQ.corner[1] && kQ === wQ.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(QQ) {
        let [FQ, , wQ] = QQ;
        const LQ = this.api.getTargetedBlock();
        if (null === LQ) return null;
        const [qQ, , oQ] = LQ.position;
        return [qQ - Math.floor(FQ / 2), oQ - Math.floor(wQ / 2)]
      }
      playerLevel() {
        var QQ;
        const [FQ, wQ, LQ] = this.api.Qp(this.localPlayerId);
        if (null !== (QQ = this.api.getLocalPlayerMovement()) && void 0 !== QQ && QQ.onGround) return Math.ceil(wQ - .01);
        const [qQ, oQ, DQ] = [Math.floor(FQ), Math.floor(wQ), Math.floor(LQ)];
        for (let kQ = oQ; kQ >= oQ - 2; kQ--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(qQ, kQ, DQ))) return kQ + 1;
        return oQ
      }
      followPlayerLevel(QQ) {
        if (Mw(QQ)) return !1;
        const FQ = this.playerLevel();
        return FQ !== QQ.corner[1] && (QQ.corner[1] = FQ, !0)
      }
      moveCentreTo(QQ, FQ, wQ) {
        const LQ = this.placing,
          qQ = xw(QQ, FQ, wQ, LQ.corner[1]);
        if (null !== qQ) {
          const [QQ, , FQ] = VQ(LQ.id, LQ.rotation).size;
          this.moveTo(Math.round(qQ[0] - QQ / 2), Math.round(qQ[1] - FQ / 2))
        }
      }
      moveTo(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const LQ = this.placing;
        if (Mw(LQ)) return;
        const [qQ, oQ, DQ] = LQ.corner;
        if (this.centreOnPlot(qQ, DQ) && !this.centreOnPlot(QQ, FQ, wQ))
          if (this.centreOnPlot(QQ, DQ, wQ)) FQ = DQ;
          else {
            if (!this.centreOnPlot(qQ, FQ, wQ)) return;
            QQ = qQ
          } QQ === qQ && FQ === DQ && wQ === LQ.rotation || (LQ.rotation = wQ, LQ.corner = [QQ, oQ, FQ], this.update())
      }
      centreOnPlot(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: LQ,
          corner: qQ
        } = this.placing, [oQ, , DQ] = VQ(LQ, wQ).size;
        return this.api.canModifyBlockAt(QQ + Math.floor(oQ / 2), qQ[1], FQ + Math.floor(DQ / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.GA(null)
      }
      update() {
        const {
          id: QQ,
          rotation: FQ,
          corner: wQ,
          refusals: LQ
        } = this.placing, qQ = new Fw, oQ = [];
        let DQ = !1,
          kQ = 0;
        for (const {
            offset: uQ,
            block: HQ
          }
          of VQ(QQ, FQ).cells) {
          const [QQ, FQ, LQ] = [wQ[0] + uQ[0], wQ[1] + uQ[1], wQ[2] + uQ[2]];
          oQ.push(QQ, FQ, LQ);
          const vQ = !this.api.canModifyBlockAt(QQ, FQ, LQ),
            mQ = this.api.getBlockId(QQ, FQ, LQ),
            bQ = !sF(mQ) && !OF(this.api.blockNameToBlockId(HQ), mQ);
          DQ ||= vQ, kQ += bQ ? 1 : 0, vQ || bQ ? qQ.add(QQ, FQ, LQ, Qw, dF) : qQ.add(QQ, FQ, LQ, IF(HQ), tw, aF(HQ))
        }
        this.chunkWatch.watch(oQ), this.meshes.show(qQ.toArray());
        const vQ = this.view,
          mQ = Mw(this.placing);
        (null === vQ || void 0 === vQ ? void 0 : vQ.id) === QQ && vQ.blocked === DQ && vQ.toClear === kQ && vQ.waiting === mQ && vQ.refusals === LQ || this.GA({
          id: QQ,
          blocked: DQ,
          toClear: kQ,
          waiting: mQ,
          refusals: LQ
        })
      }
      GA(QQ) {
        this.view = QQ, uQ.l.GA(Aw, QQ, !0)
      }
    }

    function Mw(QQ) {
      let {
        sent: FQ
      } = QQ;
      return null !== FQ && !FQ.timedOut
    }
    var Gw = wQ(4119),
      pw = wQ(38678);

    function Cw(QQ, FQ, wQ) {
      const LQ = [255 * QQ, 255 * FQ, 255 * wQ],
        [qQ, oQ, DQ] = LQ.map((QQ => QQ + .4 * (255 - QQ)));
      return {
        texture: "square_particle",
        MH: 48,
        minLifeTime: .3 / pw.d,
        maxLifeTime: .55 / pw.d,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * pw.d * pw.d, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...LQ, 1],
          maxColor: [qQ, oQ, DQ, 1]
        }, {
          timeFraction: 1,
          minColor: [...LQ, 0],
          maxColor: [qQ, oQ, DQ, 0]
        }],
        blendMode: Gw.f.Standard
      }
    }
    const Sw = {
      texture: "glint",
      mipmaps: !1,
      MH: 96,
      minLifeTime: .5 / pw.d,
      maxLifeTime: .9 / pw.d,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * pw.d * pw.d, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: Gw.f.OneOne
    };
    class iw {
      constructor(QQ, FQ) {
        this.api = QQ, this.localPlayerId = FQ, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(QQ) {
        if (this.api.particlesEnabled())
          for (const [FQ, wQ, LQ, qQ, oQ, DQ] of QQ.slice(0, 3)) {
            const QQ = `${qQ},${oQ},${DQ}`;
            let kQ = this.chips.get(QQ);
            void 0 === kQ && (kQ = this.api.createParticles(Cw(qQ, oQ, DQ), {
              pos: [FQ + .5, wQ + .5, LQ + .5]
            }), this.chips.set(QQ, kQ));
            for (let FQ = 0; FQ < 8; FQ++) this.setPoint(FQ, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            kQ.emitPoints([FQ + .5, wQ + .5, LQ + .5], this.points, 8)
          }
      }
      layerDone(QQ) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const FQ = QQ.length / 3;
        if (0 === FQ || !this.api.particlesEnabled()) return;
        const wQ = Math.min(FQ, 48),
          [LQ, qQ, oQ] = [QQ[0] + .5, QQ[1] + 1, QQ[2] + .5];
        let DQ = 0;
        for (let kQ = 0; kQ < wQ; kQ++) {
          const vQ = 3 * Math.floor(kQ * FQ / wQ);
          for (let FQ = 0; FQ < 2; FQ++) this.setPoint(DQ++, QQ[vQ] + Math.random() - LQ, QQ[vQ + 1] + 1 - qQ, QQ[vQ + 2] + Math.random() - oQ, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(Sw, {
          pos: [LQ, qQ, oQ]
        }), this.sparkles.emitPoints([LQ, qQ, oQ], this.points, DQ)
      }
      dispose() {
        var QQ;
        for (const FQ of this.chips.values()) FQ.stop();
        this.chips.clear(), null === (QQ = this.sparkles) || void 0 === QQ || QQ.stop(), this.sparkles = null
      }
      setPoint(QQ, FQ, wQ, LQ, qQ) {
        const oQ = 4 * QQ;
        this.points[oQ] = FQ, this.points[oQ + 1] = wQ, this.points[oQ + 2] = LQ, this.points[oQ + 3] = qQ
      }
    }
    var Ww = wQ(1940);
    const Rw = "SpecialAction1",
      Ow = "KeyY",
      sw = "KeyX";

    function rw(QQ) {
      let {
        placement: FQ
      } = QQ;
      const wQ = (0, OQ.i)(Aw, FQ.getView()),
        {
          t: LQ
        } = (0, rQ.y)(),
        {
          isTouchScreen: qQ
        } = (0, kQ.l)(["isTouchScreen"]),
        oQ = null !== wQ,
        DQ = oQ && !wQ.blocked && !wQ.waiting;
      if ((0, RQ.d)((QQ => oQ && !QQ.repeat && !(0, mQ.isTypingInInput)() && !(0, vQ.m)() && !qQ), (QQ => {
          const wQ = function(QQ, FQ, wQ) {
            if (QQ === sw) return FQ.stop;
            if (QQ === Ow) return wQ ? FQ.build : Uw;
            return Ww.u[Rw].includes(QQ) ? FQ.rotate : null
          }(QQ.code, FQ, DQ);
          null !== wQ && (QQ.stopPropagation(), wQ())
        })), !oQ) return null;
      let uQ = qQ ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return wQ.blocked ? uQ = "plotsGame:placementOffPlot" : wQ.toClear > 0 && (uQ = "plotsGame:placementClear"), (0, JQ.jsx)(DF.d, {
        placement: "bottom",
        children: (0, JQ.jsxs)("div", {
          className: "PlotsPlacementCard",
          children: [(0, JQ.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: LQ(xQ(wQ.id).displayName.translationKey)
          }), (0, JQ.jsx)("div", {
            className: CQ()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: wQ.refusals > 0
            }),
            children: LQ(uQ)
          }, wQ.refusals), (0, JQ.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, JQ.jsxs)(iQ.f, {
              onClick: FQ.rotate,
              children: [(0, JQ.jsx)(Iw, {
                noaAction: Rw
              }), LQ("plotsGame:placementRotate")]
            }), (0, JQ.jsxs)(iQ.F, {
              onClick: FQ.stop,
              children: [(0, JQ.jsx)(Iw, {
                keyCode: sw
              }), LQ("general:cancel")]
            }), (0, JQ.jsxs)(iQ.m, {
              disabled: !DQ,
              onClick: FQ.build,
              children: [(0, JQ.jsx)(Iw, {
                keyCode: Ow
              }), LQ("plotsGame:placementBuild")]
            })]
          })]
        })
      })
    }

    function Iw(QQ) {
      return (0, JQ.jsx)(vF.e, {
        className: "PlotsPlacementKey",
        ...QQ
      })
    }

    function Uw() {}
    var Nw = wQ(4388);
    class Tw {
      constructor(QQ) {
        this.placement = QQ, this.press = null
      }
      down(QQ) {
        if (null !== this.press) return !1;
        const {
          id: FQ,
          mouse: wQ,
          x: LQ,
          y: qQ,
          atMs: oQ
        } = QQ;
        return this.press = {
          id: FQ,
          mouse: wQ,
          x: LQ,
          y: qQ,
          atMs: oQ,
          moved: !1
        }, wQ || this.placement.beginDrag(QQ.ndcX, QQ.ndcY), !0
      }
      move(QQ) {
        const FQ = this.press;
        null !== FQ && FQ.id === QQ.id && (FQ.moved ||= Math.hypot(QQ.x - FQ.x, QQ.y - FQ.y) > 8), QQ.mouse ? this.placement.hoverAt(QQ.ndcX, QQ.ndcY) : (null === FQ || void 0 === FQ ? void 0 : FQ.id) === QQ.id && this.placement.dragTo(QQ.ndcX, QQ.ndcY)
      }
      up(QQ) {
        const FQ = this.press;
        (null === FQ || void 0 === FQ ? void 0 : FQ.id) === QQ.id && (this.move(QQ), this.end(), !FQ.moved && (FQ.mouse || QQ.atMs - FQ.atMs <= 250) && this.placement.tap())
      }
      cancel(QQ) {
        var FQ;
        (null === (FQ = this.press) || void 0 === FQ ? void 0 : FQ.id) === QQ && this.end()
      }
      leave(QQ) {
        let {
          id: FQ,
          mouse: wQ
        } = QQ;
        wQ && this.placement.endHover(), this.cancel(FQ)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }

    function Kw(QQ) {
      let {
        placement: FQ
      } = QQ;
      return null === (0, OQ.i)(Aw, FQ.getView()) ? null : (0, JQ.jsx)(zw, {
        placement: FQ
      })
    }

    function zw(QQ) {
      let {
        placement: FQ
      } = QQ;
      (0, Nw.d)(!0, !0, "PlotsPlacementLayer");
      const wQ = (0, oQ.useMemo)((() => new Tw(FQ)), [FQ]);
      return (0, JQ.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: QQ => {
          "mouse" === QQ.pointerType && 0 !== QQ.button || !wQ.down(lw(QQ)) || QQ.currentTarget.setPointerCapture(QQ.pointerId)
        },
        onPointerMove: QQ => {
          wQ.move(lw(QQ))
        },
        onPointerUp: QQ => {
          wQ.up(lw(QQ))
        },
        onPointerCancel: QQ => {
          wQ.cancel(QQ.pointerId)
        },
        onLostPointerCapture: QQ => {
          wQ.cancel(QQ.pointerId)
        },
        onPointerLeave: QQ => {
          wQ.leave(lw(QQ))
        },
        "aria-hidden": !0
      })
    }

    function lw(QQ) {
      const {
        left: FQ,
        top: wQ,
        width: LQ,
        height: qQ
      } = QQ.currentTarget.getBoundingClientRect();
      return {
        id: QQ.pointerId,
        mouse: "mouse" === QQ.pointerType,
        x: QQ.clientX,
        y: QQ.clientY,
        ndcX: (QQ.clientX - FQ) / LQ * 2 - 1,
        ndcY: 1 - (QQ.clientY - wQ) / qQ * 2,
        atMs: QQ.timeStamp
      }
    }
    var jw = wQ(2283),
      aw = wQ(36313),
      Xw = wQ(1927),
      fw = wQ(1276);
    const Vw = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function hw(QQ) {
      let {
        hud: FQ
      } = QQ;
      const wQ = (0, OQ.i)(uF, FQ.getPlot()),
        [LQ, qQ] = (0, oQ.useState)(null),
        DQ = (0, aw.h)(LQ);
      if ("none" === wQ[0]) return null;
      const [, kQ, vQ, mQ, uQ, HQ] = wQ;
      return (0, JQ.jsx)("div", {
        className: CQ()("PlotsPlotBannerContainer", {
          Below: DQ
        }),
        children: (0, JQ.jsx)(Jw, {
          plotX: kQ,
          plotZ: vQ,
          ownerName: mQ,
          ownerId: uQ,
          relation: HQ,
          plaqueRef: qQ
        }, `${kQ},${vQ}`)
      })
    }

    function Jw(QQ) {
      var FQ, wQ;
      let {
        plotX: LQ,
        plotZ: qQ,
        ownerName: oQ,
        ownerId: DQ,
        relation: kQ,
        plaqueRef: vQ
      } = QQ;
      const {
        t: mQ
      } = (0, rQ.y)(), uQ = (0, Xw.k)("hiddenPlayerNames"), HQ = (0, Xw.k)("players"), bQ = null === DQ ? null : null !== (FQ = null === (wQ = HQ.byId[DQ]) || void 0 === wQ ? void 0 : wQ.cosmetics) && void 0 !== FQ ? FQ : null, YQ = mQ("plotsGame:plotBannerCoords", {
        x: LQ,
        z: qQ
      }), xQ = "own" === kQ || null !== oQ;
      return (0, JQ.jsxs)("div", {
        ref: vQ,
        className: CQ()("PlotsPlotBanner", {
          Own: "own" === kQ,
          Shared: "shared" === kQ
        }),
        role: "status",
        children: [(0, JQ.jsxs)("span", {
          className: CQ()("PlotsPlotBannerSeal", {
            Face: null !== bQ
          }),
          children: [null !== bQ && (0, JQ.jsx)(jw.c, {
            cosmetics: bQ
          }), null === bQ && (0, JQ.jsx)(SQ.c, {
            name: Vw[kQ]
          })]
        }), (0, JQ.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, JQ.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === kQ && mQ("plotsGame:plotBannerYours"), "own" !== kQ && null !== oQ && mQ("plotsGame:plotBannerOwner", {
              name: (0, fw.f)(oQ, uQ)
            }), !xQ && YQ]
          }), xQ && (0, JQ.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [YQ, "shared" === kQ && (0, JQ.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: mQ("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }

    function Ew(QQ) {
      let {
        progress: FQ,
        goal: wQ
      } = QQ;
      const LQ = Math.min(FQ, wQ);
      return (0, JQ.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, JQ.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": wQ,
          "aria-valuenow": LQ,
          children: (0, JQ.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${LQ/wQ})`
            }
          })
        }), (0, JQ.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [LQ, "/", wQ]
        })]
      })
    }

    function nw(QQ) {
      return {
        translationKey: `plotsGame:${QQ}`,
        actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
      }
    }
    const gw = {
      house: {
        icon: "house",
        titleKey: "plotsGame:starterLotHouseTitle",
        desktop: nw("starterLotHouseHint", ["alt-fire"]),
        touch: nw("starterLotHouseHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotHousePlain"
      },
      garden: {
        icon: "sparkle",
        titleKey: "plotsGame:starterLotGarden",
        desktop: nw("starterLotGardenHint", ["alt-fire"]),
        touch: nw("starterLotGardenHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotGardenPlain"
      },
      boulder: {
        icon: "hammer",
        titleKey: "plotsGame:starterLotBoulder",
        desktop: nw("starterLotBreakHint", ["primary-fire"]),
        touch: nw("starterLotBreakHintTouch"),
        plainKey: "plotsGame:starterLotBreakPlain"
      },
      fly: {
        icon: "angles-up",
        titleKey: "plotsGame:starterLotFly",
        desktop: nw("starterLotFlyHint", ["jump"]),
        touch: nw("starterLotFlyHintTouch"),
        plainKey: "plotsGame:starterLotFlyPlain"
      },
      backpack: {
        icon: "backpack",
        titleKey: "plotsGame:starterLotBackpack",
        desktop: nw("starterLotBackpackHint", ["OpenInventory"]),
        touch: nw("starterLotBackpackHintTouch"),
        plainKey: "plotsGame:starterLotBackpackPlain"
      },
      neighbour: {
        icon: "person",
        titleKey: "plotsGame:starterLotNeighbour",
        desktop: nw("starterLotNeighbourHint", ["forward", "left", "backward", "right"]),
        touch: nw("starterLotNeighbourHintTouch"),
        plainKey: "plotsGame:starterLotNeighbourPlain"
      }
    };

    function Pw(QQ, FQ, wQ) {
      const {
        translationKey: LQ,
        actions: qQ
      } = wQ ? FQ.touch : FQ.desktop;
      if (0 === qQ.length) return QQ(LQ);
      const oQ = [];
      for (const DQ of qQ) {
        const LQ = (0, Ww.q)(DQ, wQ),
          qQ = Ww.u[DQ][0];
        if (null === LQ && void 0 === qQ) return QQ(FQ.plainKey);
        oQ.push(null === LQ ? (0, Ww.l)(qQ) : QQ(LQ.translationKey))
      }
      return QQ(LQ, {
        key: oQ.join("")
      })
    }

    function Zw(QQ) {
      let {
        hud: FQ
      } = QQ;
      const wQ = (0, OQ.i)(mF, FQ.getStep()),
        {
          t: LQ
        } = (0, rQ.y)();
      return (0, JQ.jsxs)(DF.d, {
        placement: "bottom",
        children: ["step" === wQ[0] && (0, JQ.jsx)(yw, {
          step: wQ[1],
          progress: wQ[2],
          goal: wQ[3]
        }, wQ[1]), "celebrate" === wQ[0] && (0, JQ.jsx)(Bw, {
          className: CQ()("Celebrate", {
            Gold: "house" === wQ[1]
          }),
          icon: "star",
          title: LQ("house" === wQ[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
        }, `celebrate-${wQ[1]}`)]
      })
    }

    function yw(QQ) {
      let {
        step: FQ,
        progress: wQ,
        goal: LQ
      } = QQ;
      const {
        isTouchScreen: qQ
      } = (0, kQ.l)(["isTouchScreen"]), {
        t: oQ
      } = (0, rQ.y)(), DQ = gw[FQ];
      return (0, JQ.jsxs)(Bw, {
        icon: DQ.icon,
        title: oQ(DQ.titleKey),
        children: [(0, JQ.jsx)("div", {
          className: "PlotsStepCardHint SmallTextLight",
          children: Pw(oQ, DQ, qQ)
        }), LQ > 1 && (0, JQ.jsx)(Ew, {
          progress: wQ,
          goal: LQ
        }), "backpack" === FQ && qQ && (0, JQ.jsx)(dw, {})]
      })
    }

    function Bw(QQ) {
      let {
        className: FQ,
        icon: wQ,
        title: LQ,
        children: qQ
      } = QQ;
      return (0, JQ.jsxs)("div", {
        className: CQ()("PlotsStepCard", FQ),
        role: "status",
        children: [(0, JQ.jsx)("span", {
          className: "PlotsStepCardIcon",
          children: (0, JQ.jsx)(SQ.c, {
            name: wQ
          })
        }), (0, JQ.jsxs)("div", {
          className: "PlotsStepCardBody",
          children: [(0, JQ.jsx)("div", {
            className: "PlotsStepCardTitle SmallTextBold",
            children: LQ
          }), qQ]
        })]
      })
    }

    function dw() {
      return (0, oQ.useEffect)((() => (kQ.c.set({
        backpackPointerRequested: !0
      }), () => {
        kQ.c.set({
          backpackPointerRequested: !1
        })
      })), []), null
    }
    const QL = function(QQ, FQ, wQ, LQ) {
      let {
        localPlayerId: qQ
      } = LQ;
      const kQ = new HF;
      let vQ = null,
        mQ = null,
        uQ = null,
        HQ = null,
        bQ = null;
      const YQ = [];
      return {
        onCreate: QQ => {
          vQ = new iw(QQ, qQ), mQ = new vw(QQ, qQ, vQ), uQ = new vw(QQ, qQ, vQ), HQ = new ew(QQ, qQ), bQ = new pQ(QQ, HQ), YQ.push((0, DQ.u)((0, oQ.createElement)(oQ.Fragment, null, (0, oQ.createElement)(hw, {
            hud: kQ
          }), (0, oQ.createElement)(Zw, {
            hud: kQ
          }), (0, oQ.createElement)(YF, {
            hud: kQ,
            journal: bQ
          }), (0, oQ.createElement)(Kw, {
            placement: HQ
          }), (0, oQ.createElement)(rw, {
            placement: HQ
          })), {
            content: (0, oQ.createElement)(qF, {
              journal: bQ
            })
          }))
        },
        fH: () => {
          mQ.fH(), uQ.fH(), HQ.fH(), bQ.fH()
        },
        onPlayerAttemptAltAction: (QQ, FQ, wQ, LQ, qQ, oQ) => {
          var DQ;
          if (null !== oQ) return;
          const kQ = void 0 === FQ ? null : [FQ, wQ, LQ];
          return null !== (DQ = mQ.attemptAltAction(kQ)) && void 0 !== DQ ? DQ : uQ.attemptAltAction(kQ)
        },
        onPlayerClickUp: () => {
          mQ.endPress(), uQ.endPress()
        },
        onAfterRender: (QQ, FQ) => {
          HQ.afterRender(FQ), mQ.afterRender(FQ), uQ.afterRender(FQ)
        },
        onClose: () => {
          for (const QQ of YQ) QQ();
          vQ.dispose(), mQ.dispose(), uQ.dispose(), HQ.dispose(), vQ = null, mQ = null, uQ = null, HQ = null, bQ = null
        },
        onReceivedMessageFromServer: (QQ, FQ) => {
          if ("plotsStarterLot" === QQ) kQ.receiveStep(FQ);
          else if ("plotsPlot" === QQ) kQ.receivePlot(FQ);
          else if ("plotsStarterHouse" === QQ) mQ.bx(FQ);
          else if ("plotsBlueprint" === QQ) {
            const QQ = FQ;
            uQ.bx(QQ), HQ.bx(QQ)
          } else "plotsJournal" === QQ ? bQ.bx(FQ) : "plotsJournalOpen" === QQ ? bQ.openFromServer() : "plotsPreviewEnd" === QQ && HQ.endFromServer()
        }
      }
    }
  },
  38678: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ,
      g: () => oQ
    });
    const LQ = 1 / .6,
      qQ = {
        kind: "smokePuff"
      };
    class oQ {
      constructor(QQ, FQ, wQ) {
        this.style = QQ, this.MH = FQ, this.half = wQ, this.particles = null, this.lastFrame = -1
      }
      emit(QQ, FQ, wQ) {
        let oQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return wQ !== this.lastFrame && (this.lastFrame = wQ, this.particles || (this.particles = QQ.createParticles(function(QQ, FQ) {
          const [
            [wQ, oQ, DQ],
            [kQ, vQ, mQ]
          ] = QQ.colours;
          return {
            texture: QQ.soft ? qQ : "square_particle",
            MH: FQ,
            minLifeTime: QQ.life[0] / LQ,
            maxLifeTime: QQ.life[1] / LQ,
            minEmitPower: QQ.power[0] * LQ,
            maxEmitPower: QQ.power[1] * LQ,
            minSize: QQ.size[0],
            maxSize: QQ.size[1],
            emitRate: 0,
            gravity: [0, QQ.lift * LQ * LQ, 0],
            dir1: [-QQ.spread, 1, -QQ.spread],
            dir2: [QQ.spread, 1, QQ.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [wQ, oQ, DQ, QQ.alpha],
              maxColor: [kQ, vQ, mQ, QQ.alpha]
            }, {
              timeFraction: 1,
              minColor: [wQ, oQ, DQ, 0],
              maxColor: [kQ, vQ, mQ, 0]
            }],
            blendMode: QQ.blendMode
          }
        }(this.style, this.MH), {
          pos: FQ,
          half: this.half
        })), this.particles.moveTo(FQ, this.half), this.particles.emit(oQ), !0)
      }
      dispose() {
        var QQ;
        null === (QQ = this.particles) || void 0 === QQ || QQ.stop(), this.particles = null
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);