export const id = 248;
export const ids = [248];
export const modules = {
  39489: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => rg
    });
    const tS = [0, 90, 180, 270],
      bS = "plotsblueprint";
    var XS = gS(64),
      xS = gS(36624),
      NS = gS(24),
      qS = gS(1733),
      uS = gS(1844),
      IS = gS(31);
    const fS = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      kS = {
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
      aS = ["small", "medium", "large"].flatMap((SS => fS.flat().filter((HS => kS[HS].tier === SS))));

    function KS(SS) {
      return kS[SS]
    }
    const jS = new Map(fS.flatMap((SS => SS.slice(1).map(((HS, gS) => [HS, SS[gS]])))));

    function GS(SS) {
      var HS;
      return null !== (HS = jS.get(SS)) && void 0 !== HS ? HS : null
    }
    const CS = {
      farm_hut: "plotsGame:journalNoteFarmHut",
      rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
      castle_tower: "plotsGame:journalNoteCastleTower",
      farm_house: "plotsGame:journalNoteFarmHouse",
      farm_barn: "plotsGame:journalNoteFarmBarn"
    };

    function nS(SS, HS) {
      const gS = new Set(SS),
        tS = function(SS) {
          const HS = new Set(SS);
          return new Set(aS.filter((SS => {
            const gS = GS(SS);
            return null === gS || HS.has(gS)
          })))
        }(gS);
      return aS.map((SS => {
        const bS = SS === HS;
        return gS.has(SS) ? {
          id: SS,
          active: bS,
          state: "completed",
          unlockedBy: null
        } : tS.has(SS) ? {
          id: SS,
          active: bS,
          state: "open",
          unlockedBy: null
        } : {
          id: SS,
          active: bS,
          state: "locked",
          unlockedBy: GS(SS)
        }
      }))
    }
    const PS = "plotsJournalChanged";
    class QS {
      constructor(SS, HS) {
        this.api = SS, this.placement = HS, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.tK("journal_opened")
        }, this.build = SS => {
          this.tK("placement_started"), this.placement.start(SS), (0, xS.h)()
        }, this.putAway = () => {
          this.api.sendCommand(`${bS} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      wK(SS) {
        let [, HS, gS] = SS;
        this.pages = nS(HS, gS), IS.k.cj(PS, this.pages, !0)
      }
      openFromServer() {
        this.openRequested = !0, this.mf()
      }
      mf() {
        this.openRequested && !NS.b.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, qS.l)() || (0, uS.isTypingInInput)() || null !== this.placement.getView() || (0, xS.u)())
      }
      tK(SS) {
        this.reported.has(SS) || (this.reported.add(SS), this.api.sendCommand(`${bS} report ${SS}`))
      }
    }
    var DS = gS(1121),
      wS = gS.n(DS),
      hS = gS(1127),
      ZS = gS(1528),
      JS = gS(4662),
      OS = gS(3549),
      dS = gS(1522),
      cS = gS(1204),
      vS = gS(1281),
      ES = gS(9361);
    const LS = [0, 90, 180, 270],
      YS = /^(meta\|rot\d)\|([lrud]+)$/,
      AS = "nesw",
      yS = /^meta\|([nesw]*)\|?(Stacked)?$/,
      VS = function(SS) {
        const HS = new WeakMap;
        return (gS, tS) => {
          let bS = HS.get(gS);
          return void 0 === bS && (bS = SS(gS, tS), HS.set(gS, bS)), bS
        }
      }((SS => new iS(SS)));
    class iS {
      constructor(SS) {
        this.blockMetadata = SS, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const HS = new Set(Object.keys(SS).map((HS => SS[HS].id)));
        HS.add(0), this.maxBlockId = Math.max(...HS)
      }
      static
      for (SS) {
        return VS(SS)
      }
      getBlockIdMapping(SS, HS) {
        const gS = this.getBlockIdMappingKey(SS, HS);
        let tS = this.blockIdMappings.get(gS);
        return void 0 === tS && LS.includes(SS) && (tS = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, SS, HS), this.blockIdMappings.set(gS, tS)), tS
      }
      turnBlockId(SS, HS, gS) {
        return this.mapBlockId(this.blockMetadata[SS], HS, this.getRotationMapping(HS, gS), gS)
      }
      getBlockIdMappingKey(SS, HS) {
        return `r${SS}|m${Number(HS)}`
      }
      createBlockIdMapping(SS, HS, gS, tS) {
        const bS = new Uint16Array(HS + 1),
          XS = this.getRotationMapping(gS, tS);
        for (const xS in SS) {
          const HS = SS[xS];
          bS[HS.id] = this.mapBlockId(HS, gS, XS, tS)
        }
        return bS
      }
      getRotationMapping(SS, HS) {
        const gS = Math.round(SS / 90),
          tS = new Uint8Array(4);
        for (let bS = 0; bS < 4; bS++) tS[bS] = (4 + bS - gS) % 4;
        if (HS) {
          let SS = tS[0];
          tS[0] = tS[1], tS[1] = SS, SS = tS[2], tS[2] = tS[3], tS[3] = SS
        }
        return tS
      }
      mapBlockId(SS, HS, gS, tS) {
        var bS;
        const {
          blockMetadata: XS
        } = this, xS = Math.round(HS / 90), {
          id: NS,
          meta: qS
        } = SS, {
          rot: uS,
          rootName: IS,
          metaStr: fS
        } = qS;
        let kS;
        const [, aS, KS] = null !== (bS = yS.exec(fS)) && void 0 !== bS ? bS : [];
        if (void 0 !== aS) {
          var jS, GS;
          kS = null !== (jS = null === (GS = XS[`${IS}|meta|${[AS.split("").filter(((SS,HS)=>aS.split("").some((SS=>{const gS=AS.indexOf(SS);return((tS?3-gS:gS)+xS)%4===HS})))).join(""),KS].filter(Boolean).join("|")}`]) || void 0 === GS ? void 0 : GS.id) && void 0 !== jS ? jS : NS
        } else if (null === uS) kS = NS;
        else {
          var CS, nS;
          const SS = gS[uS - 1] + 1;
          let HS = fS.replace(`rot${uS}`, `rot${SS}`);
          tS && qS.stairsCorner && (HS = HS.replace(/(Left|Right)$/, (SS => "Left" === SS ? "Right" : "Left"))), tS && "Chest" === IS && (HS = HS.replace(/\|(left|right)$/, ((SS, HS) => "left" === HS ? "|right" : "|left")));
          const bS = YS.exec(HS);
          if (tS && null !== bS) {
            const SS = "lrud".split("").filter((SS => bS[2].includes("l" === SS ? "r" : "r" === SS ? "l" : SS)));
            HS = `${bS[1]}|${SS.join("")}`
          }
          const xS = `${IS}|${HS}`;
          if (kS = null !== (CS = null === (nS = XS[xS]) || void 0 === nS ? void 0 : nS.id) && void 0 !== CS ? CS : null, null === kS) {
            const SS = XS[IS];
            kS = SS.rootMetaDesc === xS ? SS.id : NS
          }
        }
        return kS
      }
    }

    function WS(SS, HS, gS) {
      let {
        xRotationMappedOrigin: tS,
        shouldSwapXZ: bS
      } = gS;
      const XS = bS ? HS : SS;
      return null === tS ? XS : tS - XS
    }

    function zS(SS, HS, gS) {
      let {
        zRotationMappedOrigin: tS,
        shouldSwapXZ: bS
      } = gS;
      const XS = bS ? SS : HS;
      return null === tS ? XS : tS - XS
    }
    const US = {
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
      pS = new Map;

    function sS(SS, HS) {
      const gS = `${SS}|${HS}`;
      let tS = pS.get(gS);
      if (void 0 === tS) {
        const {
          size: bS,
          palette: XS,
          layers: xS
        } = US[SS], NS = 90 === HS || 270 === HS, [qS, uS] = NS ? [bS[2], bS[0]] : [bS[0], bS[2]], IS = function(SS, HS, gS) {
          let tS = null,
            bS = null,
            XS = !1;
          switch (SS) {
            case 0:
              break;
            case 90:
              tS = HS - 1, XS = !0;
              break;
            case 180:
              tS = HS - 1, bS = gS - 1;
              break;
            case 270:
              bS = gS - 1, XS = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${SS}`)
          }
          return {
            xRotationMappedOrigin: tS,
            zRotationMappedOrigin: bS,
            shouldSwapXZ: XS
          }
        }(HS, qS, uS), fS = iS.for(ES.j), kS = XS.map((SS => (0, ES.h)(fS.turnBlockId((0, ES.n)(SS), HS, !1)))), aS = [];
        xS.forEach(((SS, HS) => {
          SS.split(" ").forEach(((SS, gS) => {
            for (let tS = 0; tS < SS.length; tS++)
              if ("." !== SS[tS]) {
                const bS = [WS(tS, gS, IS), HS, zS(tS, gS, IS)];
                aS.push({
                  offset: bS,
                  block: kS[SS.charCodeAt(tS) - "a".charCodeAt(0)]
                })
              }
          }))
        })), tS = {
          size: [qS, bS[1], uS],
          cells: aS
        }, pS.set(gS, tS)
      }
      return tS
    }
    const BS = {
      farm_hut: gS.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
      farm_house: gS.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
      farm_barn: gS.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
      rusticHome_tent: gS.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
      rusticHome_cabin: gS.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
      rusticHome_house: gS.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
      market_stand: gS.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
      market_stall: gS.p + "static/media/market_stall.9a562807f9dff591618a.webp",
      market_shop: gS.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
      castle_wall: gS.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
      castle_gate: gS.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
      castle_tower: gS.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
    };
    var MS = gS(1181);
    const FS = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function RS(SS) {
      let {
        page: HS,
        building: gS,
        onBuild: tS,
        onPutAway: bS
      } = SS;
      const {
        t: XS
      } = (0, vS.F)(), {
        displayName: xS,
        tier: NS
      } = KS(HS.id), qS = sS(HS.id, 0).cells.length, uS = CS[HS.id], IS = "locked" === HS.state, fS = gS ? ZS.g : ZS.p;
      return (0, MS.jsxs)("article", {
        className: wS()("PlotsJournalPage", {
          Locked: IS
        }),
        children: [(0, MS.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: XS(xS.translationKey)
        }), (0, MS.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [XS(FS[NS]), " \xb7 ", XS("plotsGame:journalBlocks", {
            blocks: String(qS)
          })]
        }), (0, MS.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [aS.map((SS => (0, MS.jsx)("img", {
            className: wS()({
              Shown: SS === HS.id
            }),
            src: BS[SS],
            alt: "",
            draggable: !1
          }, SS))), "completed" === HS.state && (0, MS.jsx)("span", {
            className: "PlotsJournalStamp",
            children: XS("plotsGame:journalBuilt")
          }), IS && (0, MS.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, MS.jsx)(hS.d, {
              name: "lock"
            })
          })]
        }), void 0 !== uS && "completed" !== HS.state && (0, MS.jsx)("p", {
          className: "PlotsJournalNote",
          children: XS(uS)
        }), (0, MS.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === HS.state && (0, MS.jsx)("p", {
            className: "PlotsJournalHint",
            children: XS("plotsGame:journalLocked", {
              name: XS(KS(HS.unlockedBy).displayName.translationKey)
            })
          }), HS.active && (0, MS.jsxs)(MS.Fragment, {
            children: [(0, MS.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: XS("plotsGame:journalBuilding")
            }), (0, MS.jsx)(ZS.j, {
              onClick: bS,
              children: XS("plotsGame:journalPutAway")
            })]
          }), !IS && !HS.active && (0, MS.jsx)(fS, {
            onClick: () => {
              tS(HS.id)
            },
            children: XS("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function TS(SS) {
      let {
        className: HS,
        page: gS,
        hidden: tS,
        building: bS,
        journal: XS
      } = SS;
      return (0, MS.jsxs)("div", {
        ref: SS => {
          null !== SS && (SS.inert = tS)
        },
        className: wS()("PlotsJournalSide", HS),
        children: [void 0 !== gS && (0, MS.jsx)(RS, {
          page: gS,
          building: bS,
          onBuild: XS.build,
          onPutAway: XS.putAway
        }), void 0 === gS && (0, MS.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var oS = gS(387),
      lS = gS(2022);

    function mS(SS) {
      return Math.cos((0, lS.m)(SS))
    }

    function eS(SS) {
      return (0, lS.D)(Math.acos(oS.b.clamp(SS, -1, 1)))
    }

    function rS(SS, HS, gS, tS, bS) {
      const XS = Math.abs(HS - SS),
        xS = (0, lS.D)(bS / (gS * Math.abs(Math.sin((0, lS.m)(SS))))),
        NS = 450 * Math.min(1, XS / tS),
        qS = xS > 0 ? 3 * XS / xS : 1 / 0;
      return Math.round(Math.max(120, Math.min(NS, qS)))
    }
    class SH {
      constructor() {
        this.samples = []
      }
      add(SS, HS) {
        for (this.samples.push({
            x: SS,
            at: HS
          }); HS - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const SS = this.samples[0],
          HS = this.samples[this.samples.length - 1];
        return HS.at > SS.at ? (HS.x - SS.x) / (HS.at - SS.at) : 0
      }
    }

    function HH(SS, HS) {
      return SS > HS && SS >= 600
    }

    function gH(SS) {
      return eS(new DOMMatrixReadOnly(getComputedStyle(SS).transform).m11)
    }

    function tH(SS, HS) {
      SS.style.transform = `rotateY(${-HS}deg)`, SS.classList.add("Turning")
    }

    function bH(SS) {
      let {
        journal: HS
      } = SS;
      const {
        t: gS
      } = (0, vS.F)(), tS = (0, dS.i)(PS, HS.getPages()), bS = (0, cS.q)(HH), [NS, qS] = (0, XS.useState)((() => function(SS) {
        const HS = SS.findIndex((SS => SS.active));
        return -1 !== HS ? HS : Math.max(0, SS.findIndex((SS => "open" === SS.state)))
      }(tS))), IS = (0, XS.useRef)(null), fS = (0, XS.useRef)(null), kS = (0, XS.useRef)({
        Forward: null,
        Back: null
      }), aS = bS ? 2 : 1, KS = bS ? 180 : 90, jS = NS - NS % aS, GS = jS > 0, CS = jS + aS < tS.length, nS = (0, XS.useCallback)((() => {
        const SS = fS.current;
        return null === SS ? jS : (fS.current = null, SS.animation.cancel(), (HS = kS.current[SS.direction]).style.transform = "", HS.classList.remove("Turning"), null === SS.next ? jS : (qS(SS.next), SS.next));
        var HS
      }), [jS]), QS = (0, XS.useCallback)(((SS, HS, gS, tS) => {
        const bS = kS.current[SS],
          XS = gH(bS),
          xS = HS === ("Forward" === SS) ? KS : 0;
        tH(bS, xS);
        const NS = bS.animate([{
          transform: `rotateY(${-XS}deg)`
        }, {
          transform: `rotateY(${-xS}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : rS(XS, xS, bS.offsetWidth, KS, xS > XS ? -gS : gS),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        fS.current = {
          direction: SS,
          animation: NS,
          next: HS ? tS + ("Forward" === SS ? aS : -aS) : null
        }, NS.onfinish = () => {
          var SS;
          (null === (SS = fS.current) || void 0 === SS ? void 0 : SS.animation) === NS && nS()
        }
      }), [aS, KS, nS]), DS = (0, XS.useCallback)((SS => {
        if (null !== IS.current) return;
        const HS = nS();
        ("Forward" === SS ? HS + aS < tS.length : HS > 0) && QS(SS, !0, 0, HS)
      }), [nS, QS, aS, tS.length]);
      (0, XS.useEffect)((() => {
        HS.onOpened()
      }), [HS]), (0, XS.useEffect)((() => () => {
        var SS;
        null === (SS = fS.current) || void 0 === SS || SS.animation.cancel()
      }), []), (0, XS.useEffect)((() => {
        const SS = SS => {
          var HS;
          SS.pointerId !== (null === (HS = IS.current) || void 0 === HS ? void 0 : HS.pointerId) || IS.current.following || (IS.current = null)
        };
        return window.addEventListener("pointerup", SS), () => {
          window.removeEventListener("pointerup", SS)
        }
      }), []), (0, OS.d)((SS => ("ArrowLeft" === SS.code || "ArrowRight" === SS.code) && !(0, uS.isTypingInInput)()), (SS => {
        SS.stopPropagation(), DS("ArrowLeft" === SS.code ? "Back" : "Forward")
      }));
      const hS = (SS, HS, gS) => {
          const tS = function(SS, HS, gS, tS) {
            return (SS < 0 ? gS : tS) ? oS.b.clampAbs(SS, HS) : Math.sign(SS) * HS * (1 - 1 / (.55 * Math.abs(SS) / HS + 1))
          }(SS.base + gS, aS * SS.width, CS, GS);
          return "Forward" === HS ? Math.min(tS, 0) : Math.max(tS, 0)
        },
        ES = (SS, HS) => {
          const gS = IS.current;
          if (IS.current = null, null === gS.direction) return;
          gS.speed.add(SS, HS);
          const tS = gS.speed.get(),
            bS = hS(gS, gS.direction, SS - gS.x);
          QS(gS.direction, null !== function(SS, HS, gS, tS, bS) {
            if (Math.abs(HS) >= .3 ? Math.sign(HS) !== Math.sign(SS) : Math.abs(SS) < .5 * gS) return null;
            const XS = SS < 0 ? "Forward" : "Back";
            return ("Forward" === XS ? tS : bS) ? XS : null
          }(bS, tS, aS * gS.width, CS, GS), tS, jS)
        },
        LS = tS.some((SS => SS.active)),
        YS = (SS, gS, bS) => (0, MS.jsx)(TS, {
          className: SS,
          page: gS >= 0 && gS < tS.length ? tS[gS] : void 0,
          hidden: bS,
          building: LS,
          journal: HS
        });
      return (0, MS.jsx)(JS.c, {
        close: xS.k,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, MS.jsxs)("section", {
          className: wS()("PlotsJournal", {
            Spread: bS
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": gS("plotsGame:journalTitle"),
          children: [(0, MS.jsx)(ZS.l, {
            className: "PlotsJournalClose",
            onClick: xS.k
          }), (0, MS.jsx)(XH, {
            direction: "Back",
            disabled: !GS,
            onTurn: DS
          }), (0, MS.jsx)("div", {
            className: "PlotsJournalBookPages",
            onPointerDown: SS => {
              var HS;
              if (!SS.isPrimary || 0 !== SS.button || null !== fS.current && null !== SS.target.closest("button")) return;
              const gS = new SH;
              gS.add(SS.clientX, SS.timeStamp);
              const tS = kS.current.Forward.offsetWidth,
                bS = fS.current;
              fS.current = null;
              let XS = 0;
              if (null !== bS) {
                const HS = kS.current[bS.direction],
                  gS = gH(HS);
                bS.animation.cancel(), tH(HS, gS), XS = function(SS, HS, gS, tS) {
                  return (SS < 0 ? gS : tS) ? SS : Math.sign(SS) * HS * (1 / (1 - Math.min(Math.abs(SS) / HS, .99)) - 1) / .55
                }(function(SS, HS, gS, tS) {
                  return gS * (mS(HS) - mS("Forward" === SS ? 0 : tS))
                }(bS.direction, gS, tS, KS), aS * tS, CS, GS), SS.currentTarget.setPointerCapture(SS.pointerId)
              }
              IS.current = {
                pointerId: SS.pointerId,
                x: SS.clientX,
                y: SS.clientY,
                base: XS,
                width: tS,
                following: null !== bS,
                direction: null !== (HS = null === bS || void 0 === bS ? void 0 : bS.direction) && void 0 !== HS ? HS : null,
                speed: gS
              }
            },
            onPointerMove: SS => {
              const HS = IS.current;
              if (null === HS || SS.pointerId !== HS.pointerId) return;
              if (0 === SS.buttons) return void ES(SS.clientX, SS.timeStamp);
              const gS = SS.clientX - HS.x;
              !HS.following && function(SS, HS) {
                return Math.abs(SS) > 8 && Math.abs(SS) > Math.abs(HS)
              }(gS, SS.clientY - HS.y) && (HS.following = !0, HS.direction = gS < 0 ? "Forward" : "Back", SS.currentTarget.setPointerCapture(SS.pointerId)), null !== HS.direction && (HS.speed.add(SS.clientX, SS.timeStamp), tH(kS.current[HS.direction], function(SS, HS, gS, tS) {
                const bS = gS * mS("Forward" === SS ? 0 : tS) + HS;
                return oS.b.clamp(eS(bS / gS), 0, tS)
              }(HS.direction, hS(HS, HS.direction, gS), HS.width, KS)))
            },
            onPointerUp: SS => {
              var HS;
              SS.pointerId === (null === (HS = IS.current) || void 0 === HS ? void 0 : HS.pointerId) && ES(SS.clientX, SS.timeStamp)
            },
            onPointerCancel: SS => {
              const HS = IS.current;
              SS.pointerId === (null === HS || void 0 === HS ? void 0 : HS.pointerId) && (IS.current = null, null !== HS.direction && QS(HS.direction, !1, 0, jS))
            },
            children: (0, MS.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [bS && YS("Left", jS - 2, !0), YS("Right", jS + 2 * aS - 1, !0), (0, MS.jsxs)("div", {
                ref: SS => {
                  kS.current.Back = SS
                },
                className: "PlotsJournalLeaf Back",
                children: [YS("Recto", jS - 1, !0), bS && YS("Verso", jS, !1)]
              }), (0, MS.jsxs)("div", {
                ref: SS => {
                  kS.current.Forward = SS
                },
                className: "PlotsJournalLeaf Forward",
                children: [YS("Recto", jS + aS - 1, !1), bS && YS("Verso", jS + aS, !0)]
              })]
            })
          }), (0, MS.jsx)(XH, {
            direction: "Forward",
            disabled: !CS,
            onTurn: DS
          })]
        })
      })
    }

    function XH(SS) {
      let {
        direction: HS,
        disabled: gS,
        onTurn: tS
      } = SS;
      const {
        t: bS
      } = (0, vS.F)();
      return (0, MS.jsx)("div", {
        className: wS()("PlotsJournalArrow", HS),
        children: (0, MS.jsx)(ZS.g, {
          disabled: gS,
          ariaLabel: bS("Forward" === HS ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            tS(HS)
          },
          children: (0, MS.jsx)(hS.d, {
            name: "angle-up"
          })
        })
      })
    }
    var xH = gS(36616),
      NH = gS(2050),
      qH = gS(2108);
    const uH = "plotsStepChanged",
      IH = "plotsPlotChanged";
    class fH {
      constructor() {
        this.step = ["none"], this.plot = ["none"]
      }
      getStep() {
        return this.step
      }
      receiveStep(SS) {
        this.step = SS, IS.k.cj(uH, SS, !0)
      }
      getPlot() {
        return this.plot
      }
      receivePlot(SS) {
        this.plot = SS, IS.k.cj(IH, SS, !0)
      }
    }
    const kH = "KeyJ";

    function aH(SS) {
      let {
        hud: HS,
        journal: gS
      } = SS;
      const tS = (0, dS.i)(PS, gS.getPages()),
        bS = (0, dS.i)(uH, HS.getStep()),
        {
          isTouchScreen: XS
        } = (0, NS.m)(["isTouchScreen"]),
        {
          t: IS
        } = (0, vS.F)(),
        fS = null !== tS && "none" === bS[0];
      return (0, OS.d)((SS => null !== tS && SS.code === kH && !SS.repeat && !(0, uS.isTypingInInput)()), (SS => {
        (0, qS.w)(SS, fS, xS.u)
      })), fS ? (0, MS.jsx)(xH.g, {
        placement: "topRight",
        children: (0, MS.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, MS.jsxs)("button", {
            type: "button",
            className: wS()("PlotsJournalButton SmallTextBold", {
              Touch: XS
            }),
            onClick: xS.u,
            children: [(0, MS.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, MS.jsx)(NH.e, {
                itemName: "Book",
                amount: 0
              })
            }), IS("plotsGame:journalButton"), !XS && (0, MS.jsx)(qH.d, {
              className: "PlotsJournalButtonKey",
              keyCode: kH
            })]
          })
        })
      }) : null
    }
    var KH = gS(38455),
      jH = gS(38205),
      GH = gS(36959),
      CH = gS(9395),
      nH = gS(9416),
      PH = gS(37827);
    const QH = new Map([
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
      DH = [...GH.b.blockRemoveActionRoots, ...jH.d, ...CH.l, "Board", "Code Block", "Custom Lobby Block"],
      wH = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let hH = null;

    function ZH() {
      return hH ??= function() {
        const SS = JH(),
          HS = Math.max(...SS.map((SS => ES.j[SS].id))) + 1,
          gS = new Int32Array(HS),
          tS = new Int32Array(HS),
          bS = new Uint8Array(HS).fill(1),
          XS = new Uint8Array(HS),
          xS = new Uint8Array(HS),
          NS = new Array(HS).fill("Air"),
          qS = new Map,
          uS = SS => {
            let HS = qS.get(SS);
            return void 0 === HS && (HS = qS.size + 1, qS.set(SS, HS)), HS
          },
          IS = new Set(DH);
        for (const kS of SS) {
          var fS;
          const {
            id: SS,
            meta: HS,
            altActionable: qS,
            canBePlacedOver: aS
          } = ES.j[kS];
          gS[SS] = uS(OH(kS));
          const KS = HS.stairsCorner;
          if (null === KS) tS[SS] = gS[SS];
          else {
            const gS = KS.endsWith("Right");
            tS[SS] = uS(`${HS.rootName}|rot${gS?HS.rot%4+1:HS.rot}|${HS.halfblockPlacement}|${KS.replace("Right","Left")}`)
          }
          bS[SS] = aS ? 1 : 0, XS[SS] = qS || null !== HS.open || kS in PH.d || IS.has(HS.rootName) || void 0 !== (0, jH.g)(HS.rootName) ? 1 : 0;
          const {
            rootName: jS
          } = HS;
          xS[SS] = null !== HS.open || jH.d.includes(jS) || jS.includes("Bookshelf") || jS.includes("Mailbox") ? 1 : 0, NS[SS] = null !== (fS = (0, KH.d)(SS)) && void 0 !== fS ? fS : jS
        }
        return {
          kinds: gS,
          shapes: tS,
          empty: bS,
          inUse: XS,
          ownAltActionMessage: xS,
          placingItems: NS
        }
      }(), hH
    }

    function JH() {
      return Object.keys(ES.j).filter((SS => ES.j[SS].name === SS))
    }

    function OH(SS) {
      var HS;
      const gS = ES.j[SS],
        {
          rootName: tS,
          rot: bS
        } = gS.meta,
        [, ...XS] = (null !== (HS = gS.rootMetaDesc) && void 0 !== HS ? HS : SS).split("|"),
        xS = XS.filter((SS => !("meta" === SS || wH.test(SS) || (0, nH.w)(gS) && /^[nesw]+$/.test(SS) || CH.l.includes(tS) && /^[lrud]+$/.test(SS) || oS.z.includes(tS) && /^(left|right)$/.test(SS))));
      return [tS, ...xS].map((SS => "fenceGate" === gS.model && SS === `rot${bS}` ? "rot" + ((bS - 1) % 2 + 1) : SS)).join("|")
    }

    function dH(SS, HS) {
      const {
        kinds: gS,
        shapes: tS
      } = ZH();
      return gS[SS] === gS[HS] || tS[SS] === tS[HS]
    }

    function cH(SS) {
      return 1 === ZH().empty[SS]
    }

    function vH(SS) {
      return ZH().placingItems[SS]
    }

    function EH(SS) {
      return QH.get(ES.j[SS].meta.rootName)
    }
    var LH = gS(9386),
      YH = gS(9411);
    const AH = [0, 0, 0, 1, 1, 1],
      yH = (0, LH.b)([
        [2, 0, 2, 6, 6, 6]
      ]),
      VH = (0, LH.b)([
        [3, 0, 3, 5, 5, 5]
      ]),
      iH = (0, LH.b)([
        [3, 3, 3, 5, 8, 5]
      ]),
      WH = [0, 1, 2, 3].map((SS => (0, LH.b)((0, LH.l)([
        [3, 2, 0, 5, 7, 3]
      ], SS))));

    function zH(SS) {
      const {
        tG: HS,
        model: gS,
        blockModel: tS,
        meta: bS
      } = ES.j[SS];
      return void 0 !== HS ? HS : "CentreCross" === gS ? yH : null !== tS && void 0 !== tS && tS.startsWith("torch") ? bS.halfblockPlacement === YH.b.side ? WH[bS.rot - 1] : bS.halfblockPlacement === YH.b.top ? iH : VH : AH
    }
    var UH = gS(36922),
      pH = gS(198);

    function sH(SS, HS) {
      const gS = pH.e.UG / 2;
      return SS[0] < HS[0] + gS && SS[0] + 1 > HS[0] - gS && SS[1] < HS[1] + pH.e.pG && SS[1] + 1 > HS[1] && SS[2] < HS[2] + gS && SS[2] + 1 > HS[2] - gS
    }

    function BH(SS, HS, gS, tS, bS) {
      const XS = Math.hypot(...HS.dir);
      if (!Number.isFinite(XS) || 0 === XS) return -1;
      const {
        from: xS,
        reach: NS,
        solid: qS
      } = HS, uS = [HS.dir[0] / XS, HS.dir[1] / XS, HS.dir[2] / XS], IS = null === qS ? NS : Math.min(NS, function(SS, HS, gS) {
        const tS = MH(SS, HS, gS);
        if (tS !== 1 / 0) return tS;
        return (gS[0] + .5 - SS[0]) * HS[0] + (gS[1] + .5 - SS[1]) * HS[1] + (gS[2] + .5 - SS[2]) * HS[2]
      }(xS, uS, qS) + .75);
      let fS = -1,
        kS = 1 / 0,
        aS = 1 / 0;
      for (let KS = 0; KS < SS.length; KS += 4) {
        const HS = [SS[KS], SS[KS + 1], SS[KS + 2]],
          XS = bS(KS) ? NS : IS;
        let qS = -1,
          jS = MH(xS, uS, HS);
        if (jS > XS) {
          const SS = [HS[0] + .5 - xS[0], HS[1] + .5 - xS[1], HS[2] + .5 - xS[2]];
          if (jS = SS[0] * uS[0] + SS[1] * uS[1] + SS[2] * uS[2], jS <= 0 || jS > XS) continue;
          if (qS = Math.hypot(SS[0] - jS * uS[0], SS[1] - jS * uS[1], SS[2] - jS * uS[2]), qS > .7 || !tS(KS)) continue
        }(qS < kS || qS === kS && jS < aS) && gS(KS) && (fS = KS, kS = qS, aS = jS)
      }
      return fS
    }

    function MH(SS, HS, gS) {
      let tS = 0,
        bS = 1 / 0;
      for (let XS = 0; XS < 3; XS++) {
        const xS = gS[XS] - SS[XS];
        if (0 === HS[XS]) {
          if (xS > 0 || xS + 1 < 0) return 1 / 0;
          continue
        }
        const NS = xS / HS[XS],
          qS = (xS + 1) / HS[XS];
        tS = Math.max(tS, Math.min(NS, qS)), bS = Math.min(bS, Math.max(NS, qS))
      }
      return tS <= bS ? tS : 1 / 0
    }
    var FH = gS(38084),
      RH = gS(38541);
    const TH = [1, 1, 1];
    class oH {
      constructor(SS) {
        this.api = SS, this.meshes = null, this.shown = null
      }
      show(SS) {
        if (!(0, UH.c)(SS, this.shown))
          if (this.shown = null === SS ? null : [SS[0], SS[1], SS[2]], null !== this.meshes)
            for (const HS of this.meshes) this.api.setGameMesh(HS, null === SS ? {
              visible: !1
            } : {
              anchor: SS,
              visible: !0
            });
          else if (null !== SS) {
          const HS = [FH.c, FH.c, FH.c, 0, 0, 0];
          this.meshes = [this.build([HS], FH.g, SS), this.build((0, FH.b)(), FH.j, SS)]
        }
      }
      dispose() {
        for (const HS of null !== (SS = this.meshes) && void 0 !== SS ? SS : []) {
          var SS;
          this.api.disposeGameMesh(HS)
        }
        this.meshes = null, this.shown = null
      }
      build(SS, HS, gS) {
        const tS = [],
          bS = [];
        for (const [XS, xS, NS, qS, uS, IS] of SS)(0, RH.e)(tS, bS, [qS + .5, uS + .5, IS + .5], [XS, xS, NS]);
        return this.api.createGameMesh({
          positions: tS,
          indices: bS
        }, {
          rgb: TH,
          alpha: HS,
          onTop: !0
        }, gS)
      }
    }
    class lH {
      constructor(SS) {
        this.api = SS, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(SS) {
        const HS = pH.e.JK;
        this.chunks = [];
        for (let gS = 0; gS < SS.length; gS += 3) {
          const tS = Math.floor(SS[gS] / HS),
            bS = Math.floor(SS[gS + 1] / HS),
            XS = Math.floor(SS[gS + 2] / HS);
          this.watches(tS, bS, XS) || this.chunks.push(tS, bS, XS)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const SS = performance.now();
        if (SS - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = SS;
        let HS = !1;
        for (let gS = 0; gS < this.chunks.length; gS += 3) {
          const SS = this.api.getChunkVersion(this.chunks[gS], this.chunks[gS + 1], this.chunks[gS + 2]);
          this.versions[gS / 3] !== SS && (this.versions[gS / 3] = SS, HS = !0)
        }
        return HS
      }
      watches(SS, HS, gS) {
        for (let tS = 0; tS < this.chunks.length; tS += 3)
          if (this.chunks[tS] === SS && this.chunks[tS + 1] === HS && this.chunks[tS + 2] === gS) return !0;
        return !1
      }
    }
    const mH = .35,
      eH = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      rH = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      Sg = [.95, .2, .15];
    class Hg {
      constructor() {
        this.groups = []
      }
      add(SS, HS, gS, tS, bS) {
        let XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : AH;
        for (const xS of this.groups)
          if (bg(xS, tS, bS)) return xS.cells.push(SS, HS, gS), void xS.boxes.push(XS);
        this.groups.push({
          rgb: tS,
          look: bS,
          cells: [SS, HS, gS],
          boxes: [XS]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class gg {
      constructor(SS) {
        this.api = SS, this.shown = []
      }
      show(SS) {
        const HS = [];
        for (const gS of SS) {
          const SS = this.shown.findIndex((SS => {
            let {
              group: HS
            } = SS;
            return bg(HS, gS.rgb, gS.look) && Xg(HS, gS)
          })); - 1 === SS ? HS.push(this.build(gS)) : (HS.push(this.shown[SS]), this.shown.splice(SS, 1))
        }
        this.dispose(), this.shown = HS
      }
      dispose() {
        for (const {
            meshes: SS
          }
          of this.shown)
          for (const HS of SS) this.api.disposeGameMesh(HS);
        this.shown = []
      }
      build(SS) {
        const {
          rgb: HS,
          look: gS,
          boxes: tS
        } = SS, bS = [HS[0] + (1 - HS[0]) * mH, HS[1] + (1 - HS[1]) * mH, HS[2] + (1 - HS[2]) * mH], XS = [this.buildMesh(SS.cells, HS, gS.alpha, ((SS, HS, bS, XS) => {
          tg(SS, HS, bS, tS[XS], gS.size, !1)
        })), this.buildMesh(SS.cells, bS, gS.alpha, ((SS, HS, bS, XS) => {
          tg(SS, HS, bS, tS[XS], gS.size, !0)
        }))];
        return gS.crossed && XS.push(this.buildMesh(SS.cells, HS, .9, ((SS, HS, tS) => {
          (0, RH.g)(SS, HS, tS, gS.size + .01, .12)
        }))), {
          group: SS,
          meshes: XS
        }
      }
      buildMesh(SS, HS, gS, tS) {
        const bS = [SS[0], SS[1], SS[2]],
          XS = [],
          xS = [];
        for (let NS = 0; NS < SS.length; NS += 3) tS(XS, xS, [SS[NS] - bS[0] + .5, SS[NS + 1] - bS[1] + .5, SS[NS + 2] - bS[2] + .5], NS / 3);
        return this.api.createGameMesh({
          positions: XS,
          indices: xS
        }, {
          rgb: [HS[0], HS[1], HS[2]],
          alpha: gS
        }, bS)
      }
    }

    function tg(SS, HS, gS, tS, bS, XS) {
      for (let xS = 0; xS < tS.length; xS += 6) {
        const NS = [0, 0, 0],
          qS = [0, 0, 0];
        for (let SS = 0; SS < 3; SS++) NS[SS] = gS[SS] + ((tS[xS + SS] + tS[xS + SS + 3]) / 2 - .5) * bS, qS[SS] = (tS[xS + SS + 3] - tS[xS + SS]) * bS;
        (0, RH.c)(SS, HS, NS, qS, XS)
      }
    }

    function bg(SS, HS, gS) {
      return SS.rgb[0] === HS[0] && SS.rgb[1] === HS[1] && SS.rgb[2] === HS[2] && SS.look === gS
    }

    function Xg(SS, HS) {
      if (SS.cells.length !== HS.cells.length) return !1;
      for (let gS = 0; gS < SS.cells.length; gS++)
        if (SS.cells[gS] !== HS.cells[gS]) return !1;
      return SS.boxes.every(((SS, gS) => SS === HS.boxes[gS]))
    }

    function xg(SS, HS) {
      return SS.getClientOption(HS, "blockReach") + 1
    }
    class Ng {
      constructor(SS, HS, gS) {
        this.api = SS, this.localPlayerId = HS, this.pickNext = gS, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(SS) {
        const [HS, , gS] = SS.cameraDirection, tS = Math.hypot(HS, gS);
        tS > .001 && (this.heading = [HS / tS, gS / tS])
      }
      tapped(SS, HS, gS) {
        const tS = xg(this.api, this.localPlayerId),
          {
            origin: bS,
            direction: XS
          } = this.api.getActionRay(),
          xS = [...bS],
          NS = [
            [xS, [xS[0] + XS[0] * tS, xS[1] + XS[1] * tS, xS[2] + XS[2] * tS]]
          ];
        null !== SS && NS.push([xS, (0, UH.b)(SS)]), this.tap = {
          lines: NS,
          next: HS,
          ms: gS
        }
      }
      filled(SS, HS) {
        this.tap = null, this.turnFrom(SS, HS), this.retry(HS)
      }
      arrived(SS, HS) {
        const {
          tap: gS
        } = this;
        if (null === gS || HS - gS.ms > 1500) return null;
        const tS = (0, UH.b)(SS);
        return (0, UH.c)(gS.next, SS) || gS.lines.some((SS => {
          let [HS, gS] = SS;
          return function(SS, HS, gS) {
            const tS = [gS[0] - HS[0], gS[1] - HS[1], gS[2] - HS[2]],
              bS = [SS[0] - HS[0], SS[1] - HS[1], SS[2] - HS[2]],
              XS = tS[0] ** 2 + tS[1] ** 2 + tS[2] ** 2,
              xS = 0 === XS ? 0 : Math.min(1, Math.max(0, (bS[0] * tS[0] + bS[1] * tS[1] + bS[2] * tS[2]) / XS));
            return Math.hypot(bS[0] - tS[0] * xS, bS[1] - tS[1] * xS, bS[2] - tS[2] * xS)
          }(tS, HS, gS) <= .9
        })) ? (this.tap = null, this.turnFrom(SS, HS), gS.ms) : null
      }
      turnFrom(SS, HS) {
        this.pending = {
          from: SS,
          ms: HS,
          turnMs: Math.max(50, Math.min(250, HS - this.lastFillMs))
        }, this.lastFillMs = HS
      }
      retry(SS) {
        const {
          pending: HS
        } = this;
        if (null === HS) return;
        if (SS - HS.ms > 1500) return void(this.pending = null);
        const gS = this.pickNext((0, UH.b)(HS.from), (SS => (0, UH.c)(SS, HS.from)));
        if (null === gS) return;
        this.pending = null;
        const {
          turning: tS
        } = this;
        if (null !== tS && SS < tS.endMs && (0, UH.c)(tS.to, gS)) return;
        const bS = this.api.getActionRay().origin,
          XS = [gS[0] + .5 - bS[0], gS[1] + .5 - bS[1], gS[2] + .5 - bS[2]],
          xS = Math.hypot(XS[0], XS[2]);
        if (xS < .3) {
          const SS = Math.max(xS, .001);
          XS[0] = this.heading[0] * SS, XS[2] = this.heading[1] * SS
        }
        this.api.turnCamera(XS, HS.turnMs), this.turning = {
          to: gS,
          endMs: SS + HS.turnMs
        }
      }
    }
    class qg {
      constructor(SS, HS, gS) {
        this.api = SS, this.localPlayerId = HS, this.juice = gS, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], this.lastFilled = null, this.lastSeenFilled = null, this.playerCells = [], this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = null, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new lH(SS), this.meshes = new gg(SS), this.outline = new oH(SS), this.turn = new Ng(SS, HS, ((SS, HS) => this.pickNext(SS, HS)))
      }
      wK(SS) {
        const HS = "active" === SS[0] ? `${SS[1]}|${SS[3]}|${SS[4]}|${SS[5]}|${SS[6]}` : "";
        if ("active" !== SS[0]) "built" === SS[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , gS, tS, bS, XS] = SS;
          HS !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = gS) : gS === this.layerY ? this.burstUnlisted(tS) : gS > this.layerY && this.finishLayer(gS), this.layerY = gS, this.layerCells.has(gS) || this.layerCells.set(gS, tS.filter(Ig)), this.ghostCells = tS, this.palette = bS, this.occupiedCells = XS
        }
        HS !== this.blueprint && (this.blueprint = HS, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((SS => this.api.blockNameToBlockId(SS))), this.chunkWatch.watch([...this.ghostCells.filter(Ig), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(SS) {
        this.burstUnlisted([]), SS > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = SS)
      }
      mf() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const SS = performance.now();
        let HS = !1;
        for (const [bS, XS] of this.foreseen) {
          var gS;
          if (SS - XS > 1e3) this.foreseen.delete(bS), HS = !0, (null === (gS = this.lastFilled) || void 0 === gS ? void 0 : gS.join()) === bS && (this.lastFilled = this.lastSeenFilled)
        }
        const tS = ug(this.api.getPositionView(this.localPlayerId));
        (HS || tS.some(((SS, HS) => SS !== this.playerCells[HS]))) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(SS) {
        const HS = new Set;
        for (let bS = 0; bS < SS.length; bS += 4) HS.add(`${SS[bS]},${SS[bS+1]},${SS[bS+2]}`);
        const gS = [],
          {
            ghostCells: tS
          } = this;
        for (let bS = 0; bS < tS.length; bS += 4) {
          const SS = `${tS[bS]},${tS[bS+1]},${tS[bS+2]}`;
          !HS.has(SS) && this.open.delete(SS) && gS.push(this.filledCell(bS))
        }
        this.burst(gS)
      }
      refresh() {
        const {
          ghostCells: SS,
          palette: HS,
          occupiedCells: gS
        } = this, tS = new Hg, bS = new Set, XS = [], xS = [];
        for (let NS = 0; NS < SS.length; NS += 4) {
          const [gS, qS, uS, IS] = [SS[NS], SS[NS + 1], SS[NS + 2], SS[NS + 3]], fS = this.api.getBlockId(gS, qS, uS), kS = `${gS},${qS},${uS}`, aS = dH(this.blockIds[IS], fS);
          !aS && cH(fS) ? tS.add(gS, qS, uS, EH(HS[IS]), eH, zH(HS[IS])) : aS ? this.open.has(kS) && XS.push(this.filledCell(NS)) : tS.add(gS, qS, uS, Sg, rH), !aS && this.api.isBlockInLoadedChunk(gS, qS, uS) && (bS.add(kS), xS.push(gS, qS, uS, cH(fS) ? 0 : 1))
        }
        this.open = bS, this.nextCells = xS;
        for (let NS = 0; NS < gS.length; NS += 3) {
          const [SS, HS, bS] = [gS[NS], gS[NS + 1], gS[NS + 2]];
          cH(this.api.getBlockId(SS, HS, bS)) || tS.add(SS, HS, bS, Sg, rH)
        }
        this.meshes.show(tS.toArray()), this.burst(XS), this.showNext(), this.turn.retry(performance.now())
      }
      burst(SS) {
        const HS = performance.now(),
          gS = [];
        for (const [bS, XS, xS] of SS) {
          const SS = [bS, XS, xS];
          this.lastSeenFilled = SS, this.foreseen.delete(SS.join()) || gS.push(SS)
        }
        const tS = this.isHolding(HS);
        for (const bS of gS) {
          if (this.lastFilled = bS, tS && this.pressFilled) {
            this.turn.filled(bS, HS);
            continue
          }
          const SS = this.turn.arrived(bS, HS);
          if (null !== SS) {
            this.pressFilled = tS;
            for (const [HS, gS] of this.foreseen) gS <= SS && this.foreseen.delete(HS)
          }
        }
        this.juice.filled(SS)
      }
      showNext() {
        var SS;
        const HS = this.api.getPositionView(this.localPlayerId);
        this.playerCells.splice(0, 1 / 0, ...ug(HS));
        const gS = this.lastFilled;
        this.nextCell = this.pickNext(null === gS ? [HS[0], HS[1] + 1, HS[2]] : (0, UH.b)(gS), (() => !1)), this.outline.show(null !== (SS = this.aimed) && void 0 !== SS ? SS : this.nextCell)
      }
      pickNext(SS, HS) {
        const gS = this.api.getPositionView(this.localPlayerId),
          tS = [gS[0], gS[1] + pH.e.pG * pH.e.playerEyeToHeightRatio, gS[2]],
          bS = xg(this.api, this.localPlayerId),
          {
            nextCells: XS
          } = this,
          xS = SS => [XS[SS], XS[SS + 1], XS[SS + 2]],
          NS = function(SS, HS, gS, tS, bS, XS) {
            let xS = -1,
              NS = -1,
              qS = 1 / 0;
            for (let uS = 0; uS < SS.length; uS += HS) {
              const HS = (XS(uS) ? 2 : 0) + (tS(uS) ? 1 : 0);
              if (HS < NS || bS(uS)) continue;
              const IS = (SS[uS] + .5 - gS[0]) ** 2 + (SS[uS + 1] + .5 - gS[1]) ** 2 + (SS[uS + 2] + .5 - gS[2]) ** 2;
              (HS > NS || IS < qS) && (xS = uS, NS = HS, qS = IS)
            }
            return xS
          }(XS, 4, SS, (SS => 1 === XS[SS + 3]), (SS => {
            const tS = xS(SS);
            return sH(tS, gS) || this.foreseen.has(tS.join()) || HS(tS)
          }), (SS => function(SS, HS, gS) {
            return (HS[0] + .5 - SS[0]) ** 2 + (HS[1] + .5 - SS[1]) ** 2 + (HS[2] + .5 - SS[2]) ** 2 <= gS ** 2
          }(tS, xS(SS), bS)));
        return -1 === NS ? null : xS(NS)
      }
      afterRender(SS) {
        var HS;
        this.turn.look(SS);
        const gS = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === gS ? null : gS.position), this.outline.show(null !== (HS = this.aimed) && void 0 !== HS ? HS : this.nextCell)
      }
      isHolding(SS) {
        return null !== this.altMs && SS - this.altMs <= 500
      }
      attemptAltAction(SS) {
        const HS = performance.now();
        if (this.isHolding(HS) || (this.pressFilled = !1), this.altMs = HS, this.pressFilled) return "preventPlacement";
        const gS = this.findAimed(SS);
        if (null !== gS) return this.foreseen.set(gS.join(), HS), this.lastFilled = gS, this.aimed = null, this.showNext(), this.turn.filled(gS, HS), this.pressFilled = !0, "preventPlacement";
        null !== this.nextCell && this.turn.tapped(SS, this.nextCell, HS)
      }
      findAimed(SS) {
        return function(SS, HS, gS, tS, bS, XS, xS) {
          const NS = SS.AHS(HS),
            qS = null === NS || null === SS.blockNameToBlockId(NS.name, !0) ? null : NS.name,
            uS = SS.getPositionView(HS),
            {
              origin: IS,
              direction: fS
            } = SS.getActionRay(),
            kS = BH(tS, {
              from: IS,
              dir: fS,
              reach: xg(SS, HS),
              solid: gS
            }, (HS => {
              const gS = [tS[HS], tS[HS + 1], tS[HS + 2]];
              return !dH(bS[tS[HS + 3]], SS.getBlockId(...gS)) && !xS.has(gS.join()) && SS.isBlockInLoadedChunk(...gS) && !sH(gS, uS)
            }), (SS => null === qS || qS === vH(bS[tS[SS + 3]])), (SS => null !== XS && tS[SS] === XS[0] && tS[SS + 1] === XS[1] && tS[SS + 2] === XS[2]));
          return -1 === kS ? null : [tS[kS], tS[kS + 1], tS[kS + 2]]
        }(this.api, this.localPlayerId, SS, this.ghostCells, this.blockIds, this.nextCell, this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(SS) {
        const {
          ghostCells: HS
        } = this, [gS, tS, bS] = EH(this.palette[HS[SS + 3]]);
        return [HS[SS], HS[SS + 1], HS[SS + 2], gS, tS, bS]
      }
    }

    function ug(SS) {
      let [HS, gS, tS] = SS;
      const bS = pH.e.UG / 2;
      return [Math.floor(HS), Math.floor(gS), Math.floor(tS), Math.floor(HS - bS), Math.floor(HS + bS), Math.floor(gS + pH.e.pG), Math.floor(tS - bS), Math.floor(tS + bS)]
    }

    function Ig(SS, HS) {
      return HS % 4 !== 3
    }

    function fg(SS, HS, gS, tS, bS) {
      if (!SS.isBlockInLoadedChunk(HS, tS - 6, gS) || !SS.isBlockInLoadedChunk(HS, tS + 6 + bS, gS) || !SS.canModifyBlockAt(HS, tS, gS)) return NaN;
      let XS = tS - 1;
      if (0 !== SS.getBlockId(HS, XS, gS)) {
        for (; XS < tS + 6 && 0 !== SS.getBlockId(HS, XS + 1, gS);) XS++;
        return XS
      }
      for (; XS > tS - 6;)
        if (XS--, 0 !== SS.getBlockId(HS, XS, gS)) return XS;
      return NaN
    }

    function kg(SS, HS, gS, tS, bS) {
      let XS = 0;
      for (let xS = tS + 1; xS <= tS + bS; xS++) 0 !== SS.getBlockId(HS, xS, gS) && XS++;
      return XS
    }

    function ag(SS) {
      const HS = new Map;
      for (const xS of SS) {
        var gS;
        if (Number.isNaN(xS)) return null;
        HS.set(xS, (null !== (gS = HS.get(xS)) && void 0 !== gS ? gS : 0) + 1)
      }
      let tS = NaN,
        bS = 0;
      for (const [xS, NS] of HS)(NS > bS || NS === bS && xS < tS) && (tS = xS, bS = NS);
      let XS = 0;
      for (const xS of SS) XS += Math.abs(xS - tS);
      return XS
    }

    function Kg(SS, HS, gS, tS) {
      const {
        eye: bS,
        forward: XS,
        tanHalfFovX: xS,
        tanHalfFovY: NS
      } = SS, [qS, uS] = function(SS) {
        let [HS, gS, tS] = SS;
        const bS = Math.hypot(HS, tS),
          [XS, xS] = [tS / bS, -HS / bS];
        return [
          [XS, 0, xS],
          [gS * xS, tS * XS - HS * xS, -gS * XS]
        ]
      }(XS), [IS, fS] = [HS * xS, gS * NS], kS = XS[0] + IS * qS[0] + fS * uS[0], aS = XS[1] + fS * uS[1], KS = XS[2] + IS * qS[2] + fS * uS[2], jS = (tS - bS[1]) / aS;
      return jS > 0 && jS < 1 / 0 ? [bS[0] + jS * kS, bS[2] + jS * KS] : null
    }
    const jg = "plotsBlueprintPlacementChanged",
      Gg = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class Cg {
      constructor(SS, HS) {
        this.api = SS, this.localPlayerId = HS, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = SS => {
          var HS, gS, tS, XS;
          const xS = null !== (HS = null === (gS = this.placing) || void 0 === gS ? void 0 : gS.rotation) && void 0 !== HS ? HS : 0,
            {
              size: NS
            } = sS(SS, xS),
            qS = this.api.lC(this.localPlayerId),
            [uS, IS] = null !== (tS = null !== (XS = function(SS, HS, gS) {
              const [tS, bS, XS] = HS, [xS, NS, qS] = [Math.floor(gS[0]), Math.floor(gS[1]), Math.floor(gS[2])], uS = 6 + Math.max(tS, XS) / 2, [IS, fS] = [Math.ceil(uS + tS / 2), Math.ceil(uS + XS / 2)], [kS, aS] = [xS - IS, qS - fS], [KS, jS] = [2 * IS + 1, 2 * fS + 1], GS = new Float64Array(KS * jS), CS = new Uint16Array(KS * jS);
              for (let DS = 0; DS < KS; DS++)
                for (let HS = 0; HS < jS; HS++) {
                  const gS = fg(SS, kS + DS, aS + HS, NS, bS);
                  GS[DS * jS + HS] = gS, Number.isNaN(gS) || (CS[DS * jS + HS] = kg(SS, kS + DS, aS + HS, gS, bS))
                }
              const nS = [];
              let PS = null,
                QS = 1 / 0;
              for (let DS = 0; DS + tS <= KS; DS++)
                for (let SS = 0; SS + XS <= jS; SS++) {
                  const [HS, bS] = [kS + DS, aS + SS], NS = Math.hypot(HS + tS / 2 - gS[0], bS + XS / 2 - gS[2]);
                  if (NS > uS || xS >= HS - 2 && xS < HS + tS + 2 && qS >= bS - 2 && qS < bS + XS + 2) continue;
                  nS.length = 0;
                  let IS = 0;
                  for (let gS = 0; gS < tS; gS++)
                    for (let HS = 0; HS < XS; HS++) nS.push(GS[(DS + gS) * jS + SS + HS]), IS += CS[(DS + gS) * jS + SS + HS];
                  const fS = ag(nS);
                  if (null === fS) continue;
                  const KS = NS + 3 * (fS + IS);
                  KS < QS && (QS = KS, PS = [HS, bS])
                }
              return PS
            }(this.api, NS, qS)) && void 0 !== XS ? XS : this.cornerOnTarget(NS)) && void 0 !== tS ? tS : [Math.floor(qS[0]) + 2, Math.floor(qS[2])];
          this.placing = {
            id: SS,
            rotation: xS,
            corner: [uS, this.playerLevel(), IS],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null
          }, this.update(), this.api.sendCommand(`${bS} preview`)
        }, this.rotate = () => {
          const {
            id: SS,
            rotation: HS,
            corner: gS
          } = this.placing, bS = tS[(tS.indexOf(HS) + 1) % tS.length], [XS, , xS] = sS(SS, HS).size, [NS, , qS] = sS(SS, bS).size;
          this.moveTo(gS[0] + Math.floor(XS / 2) - Math.floor(NS / 2), gS[2] + Math.floor(xS / 2) - Math.floor(qS / 2), bS)
        }, this.hoverAt = (SS, HS) => {
          this.placing.hover = [SS, HS], this.moveCentreTo(this.camera, SS, HS)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (SS, HS) => {
          const gS = this.placing,
            {
              eye: tS,
              forward: bS,
              tanHalfFovX: XS,
              tanHalfFovY: xS
            } = this.camera,
            NS = {
              eye: [tS[0], tS[1], tS[2]],
              forward: [bS[0], bS[1], bS[2]],
              tanHalfFovX: XS,
              tanHalfFovY: xS
            },
            qS = gS.corner[1],
            uS = Kg(NS, SS, HS, qS);
          gS.hover = null, gS.drag = uS && {
            view: NS,
            ground: uS,
            corner: [gS.corner[0], gS.corner[2]],
            level: qS
          }
        }, this.dragTo = (SS, HS) => {
          const gS = this.placing.drag,
            tS = gS && Kg(gS.view, SS, HS, gS.level);
          null !== gS && null !== tS && this.moveTo(gS.corner[0] + Math.round(tS[0] - gS.ground[0]), gS.corner[1] + Math.round(tS[1] - gS.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const SS = this.view;
          SS.waiting || (SS.blocked ? this.cj({
            ...SS,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const SS = this.placing,
            {
              id: HS,
              rotation: gS,
              corner: tS
            } = SS;
          this.api.sendCommand(`${bS} place ${HS} ${tS.join(" ")} ${gS}`), SS.sent = {
            atMs: performance.now(),
            corner: [...tS],
            rotation: gS,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${bS} preview off`))
        }, this.chunkWatch = new lH(SS), this.meshes = new gg(SS)
      }
      getView() {
        return this.view
      }
      mf() {
        const SS = this.placing;
        null !== SS && (null !== SS.sent && !SS.sent.timedOut && performance.now() - SS.sent.atMs > 3e3 ? (SS.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(SS) || this.chunkWatch.changed()) && this.update())
      }
      afterRender(SS) {
        const HS = this.placing;
        null !== HS && (! function(SS, HS) {
          for (let gS = 0; gS < 3; gS++) HS.eye[gS] = SS.cameraPosition[gS], HS.forward[gS] = SS.cameraDirection[gS];
          HS.tanHalfFovX = SS.tanHalfFovX, HS.tanHalfFovY = SS.tanHalfFovY
        }(SS, this.camera), null !== HS.hover && this.moveCentreTo(this.camera, HS.hover[0], HS.hover[1]))
      }
      wK(SS) {
        const HS = this.placing;
        if (null === HS || null === HS.sent || "active" !== SS[0]) return;
        const {
          sent: gS
        } = HS, [, tS, bS, XS, xS, NS, qS] = SS;
        bS && tS === HS.id && qS === gS.rotation && XS === gS.corner[0] && xS === gS.corner[1] && NS === gS.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(SS) {
        let [HS, , gS] = SS;
        const tS = this.api.getTargetedBlock();
        if (null === tS) return null;
        const [bS, , XS] = tS.position;
        return [bS - Math.floor(HS / 2), XS - Math.floor(gS / 2)]
      }
      playerLevel() {
        var SS;
        const [HS, gS, tS] = this.api.lC(this.localPlayerId);
        if (null !== (SS = this.api.getLocalPlayerMovement()) && void 0 !== SS && SS.onGround) return Math.ceil(gS - .01);
        const [bS, XS, xS] = [Math.floor(HS), Math.floor(gS), Math.floor(tS)];
        for (let NS = XS; NS >= XS - 2; NS--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(bS, NS, xS))) return NS + 1;
        return XS
      }
      followPlayerLevel(SS) {
        if (ng(SS)) return !1;
        const HS = this.playerLevel();
        return HS !== SS.corner[1] && (SS.corner[1] = HS, !0)
      }
      moveCentreTo(SS, HS, gS) {
        const tS = this.placing,
          bS = Kg(SS, HS, gS, tS.corner[1]);
        if (null !== bS) {
          const [SS, , HS] = sS(tS.id, tS.rotation).size;
          this.moveTo(Math.round(bS[0] - SS / 2), Math.round(bS[1] - HS / 2))
        }
      }
      moveTo(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const tS = this.placing;
        if (ng(tS)) return;
        const [bS, XS, xS] = tS.corner;
        if (this.centreOnPlot(bS, xS) && !this.centreOnPlot(SS, HS, gS))
          if (this.centreOnPlot(SS, xS, gS)) HS = xS;
          else {
            if (!this.centreOnPlot(bS, HS, gS)) return;
            SS = bS
          } SS === bS && HS === xS && gS === tS.rotation || (tS.rotation = gS, tS.corner = [SS, XS, HS], this.update())
      }
      centreOnPlot(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: tS,
          corner: bS
        } = this.placing, [XS, , xS] = sS(tS, gS).size;
        return this.api.canModifyBlockAt(SS + Math.floor(XS / 2), bS[1], HS + Math.floor(xS / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.cj(null)
      }
      update() {
        const {
          id: SS,
          rotation: HS,
          corner: gS,
          refusals: tS
        } = this.placing, bS = new Hg, XS = [];
        let xS = !1,
          NS = 0;
        for (const {
            offset: IS,
            block: fS
          }
          of sS(SS, HS).cells) {
          const [SS, HS, tS] = [gS[0] + IS[0], gS[1] + IS[1], gS[2] + IS[2]];
          XS.push(SS, HS, tS);
          const qS = !this.api.canModifyBlockAt(SS, HS, tS),
            uS = this.api.getBlockId(SS, HS, tS),
            kS = !cH(uS) && !dH(this.api.blockNameToBlockId(fS), uS);
          xS ||= qS, NS += kS ? 1 : 0, qS || kS ? bS.add(SS, HS, tS, Sg, rH) : bS.add(SS, HS, tS, EH(fS), Gg, zH(fS))
        }
        this.chunkWatch.watch(XS), this.meshes.show(bS.toArray());
        const qS = this.view,
          uS = ng(this.placing);
        (null === qS || void 0 === qS ? void 0 : qS.id) === SS && qS.blocked === xS && qS.toClear === NS && qS.waiting === uS && qS.refusals === tS || this.cj({
          id: SS,
          blocked: xS,
          toClear: NS,
          waiting: uS,
          refusals: tS
        })
      }
      cj(SS) {
        this.view = SS, IS.k.cj(jg, SS, !0)
      }
    }

    function ng(SS) {
      let {
        sent: HS
      } = SS;
      return null !== HS && !HS.timedOut
    }
    var Pg = gS(4356),
      Qg = gS(39164);

    function Dg(SS, HS, gS) {
      const tS = [255 * SS, 255 * HS, 255 * gS],
        [bS, XS, xS] = tS.map((SS => SS + .4 * (255 - SS)));
      return {
        texture: "square_particle",
        hf: 48,
        minLifeTime: .3 / Qg.d,
        maxLifeTime: .55 / Qg.d,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * Qg.d * Qg.d, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...tS, 1],
          maxColor: [bS, XS, xS, 1]
        }, {
          timeFraction: 1,
          minColor: [...tS, 0],
          maxColor: [bS, XS, xS, 0]
        }],
        blendMode: Pg.g.Standard
      }
    }
    const wg = {
      texture: "glint",
      mipmaps: !1,
      hf: 96,
      minLifeTime: .5 / Qg.d,
      maxLifeTime: .9 / Qg.d,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * Qg.d * Qg.d, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: Pg.g.OneOne
    };
    class hg {
      constructor(SS, HS) {
        this.api = SS, this.localPlayerId = HS, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(SS) {
        if (this.api.particlesEnabled())
          for (const [HS, gS, tS, bS, XS, xS] of SS.slice(0, 3)) {
            const SS = `${bS},${XS},${xS}`;
            let NS = this.chips.get(SS);
            void 0 === NS && (NS = this.api.createParticles(Dg(bS, XS, xS), {
              pos: [HS + .5, gS + .5, tS + .5]
            }), this.chips.set(SS, NS));
            for (let HS = 0; HS < 8; HS++) this.setPoint(HS, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            NS.emitPoints([HS + .5, gS + .5, tS + .5], this.points, 8)
          }
      }
      layerDone(SS) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const HS = SS.length / 3;
        if (0 === HS || !this.api.particlesEnabled()) return;
        const gS = Math.min(HS, 48),
          [tS, bS, XS] = [SS[0] + .5, SS[1] + 1, SS[2] + .5];
        let xS = 0;
        for (let NS = 0; NS < gS; NS++) {
          const qS = 3 * Math.floor(NS * HS / gS);
          for (let HS = 0; HS < 2; HS++) this.setPoint(xS++, SS[qS] + Math.random() - tS, SS[qS + 1] + 1 - bS, SS[qS + 2] + Math.random() - XS, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(wg, {
          pos: [tS, bS, XS]
        }), this.sparkles.emitPoints([tS, bS, XS], this.points, xS)
      }
      dispose() {
        var SS;
        for (const HS of this.chips.values()) HS.stop();
        this.chips.clear(), null === (SS = this.sparkles) || void 0 === SS || SS.stop(), this.sparkles = null
      }
      setPoint(SS, HS, gS, tS, bS) {
        const XS = 4 * SS;
        this.points[XS] = HS, this.points[XS + 1] = gS, this.points[XS + 2] = tS, this.points[XS + 3] = bS
      }
    }
    var Zg = gS(2111);
    const Jg = "SpecialAction1",
      Og = "KeyY",
      dg = "KeyX";

    function cg(SS) {
      let {
        placement: HS
      } = SS;
      const gS = (0, dS.i)(jg, HS.getView()),
        {
          t: tS
        } = (0, vS.F)(),
        {
          isTouchScreen: bS
        } = (0, NS.m)(["isTouchScreen"]),
        XS = null !== gS,
        xS = XS && !gS.blocked && !gS.waiting;
      if ((0, OS.d)((SS => XS && !SS.repeat && !(0, uS.isTypingInInput)() && !(0, qS.l)() && !bS), (SS => {
          const gS = function(SS, HS, gS) {
            if (SS === dg) return HS.stop;
            if (SS === Og) return gS ? HS.build : Eg;
            return Zg.u[Jg].includes(SS) ? HS.rotate : null
          }(SS.code, HS, xS);
          null !== gS && (SS.stopPropagation(), gS())
        })), !XS) return null;
      let IS = bS ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return gS.blocked ? IS = "plotsGame:placementOffPlot" : gS.toClear > 0 && (IS = "plotsGame:placementClear"), (0, MS.jsx)(xH.g, {
        placement: "bottom",
        children: (0, MS.jsxs)("div", {
          className: "PlotsPlacementCard",
          children: [(0, MS.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: tS(KS(gS.id).displayName.translationKey)
          }), (0, MS.jsx)("div", {
            className: wS()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: gS.refusals > 0
            }),
            children: tS(IS)
          }, gS.refusals), (0, MS.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, MS.jsxs)(ZS.g, {
              onClick: HS.rotate,
              children: [(0, MS.jsx)(vg, {
                noaAction: Jg
              }), tS("plotsGame:placementRotate")]
            }), (0, MS.jsxs)(ZS.L, {
              onClick: HS.stop,
              children: [(0, MS.jsx)(vg, {
                keyCode: dg
              }), tS("general:cancel")]
            }), (0, MS.jsxs)(ZS.p, {
              disabled: !xS,
              onClick: HS.build,
              children: [(0, MS.jsx)(vg, {
                keyCode: Og
              }), tS("plotsGame:placementBuild")]
            })]
          })]
        })
      })
    }

    function vg(SS) {
      return (0, MS.jsx)(qH.d, {
        className: "PlotsPlacementKey",
        ...SS
      })
    }

    function Eg() {}
    var Lg = gS(4675);
    class Yg {
      constructor(SS) {
        this.placement = SS, this.press = null
      }
      down(SS) {
        if (null !== this.press) return !1;
        const {
          id: HS,
          mouse: gS,
          x: tS,
          y: bS,
          atMs: XS
        } = SS;
        return this.press = {
          id: HS,
          mouse: gS,
          x: tS,
          y: bS,
          atMs: XS,
          moved: !1
        }, gS || this.placement.beginDrag(SS.ndcX, SS.ndcY), !0
      }
      move(SS) {
        const HS = this.press;
        null !== HS && HS.id === SS.id && (HS.moved ||= Math.hypot(SS.x - HS.x, SS.y - HS.y) > 8), SS.mouse ? this.placement.hoverAt(SS.ndcX, SS.ndcY) : (null === HS || void 0 === HS ? void 0 : HS.id) === SS.id && this.placement.dragTo(SS.ndcX, SS.ndcY)
      }
      up(SS) {
        const HS = this.press;
        (null === HS || void 0 === HS ? void 0 : HS.id) === SS.id && (this.move(SS), this.end(), !HS.moved && (HS.mouse || SS.atMs - HS.atMs <= 250) && this.placement.tap())
      }
      cancel(SS) {
        var HS;
        (null === (HS = this.press) || void 0 === HS ? void 0 : HS.id) === SS && this.end()
      }
      leave(SS) {
        let {
          id: HS,
          mouse: gS
        } = SS;
        gS && this.placement.endHover(), this.cancel(HS)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }

    function Ag(SS) {
      let {
        placement: HS
      } = SS;
      return null === (0, dS.i)(jg, HS.getView()) ? null : (0, MS.jsx)(yg, {
        placement: HS
      })
    }

    function yg(SS) {
      let {
        placement: HS
      } = SS;
      (0, Lg.c)(!0, !0, "PlotsPlacementLayer");
      const gS = (0, XS.useMemo)((() => new Yg(HS)), [HS]);
      return (0, MS.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: SS => {
          "mouse" === SS.pointerType && 0 !== SS.button || !gS.down(Vg(SS)) || SS.currentTarget.setPointerCapture(SS.pointerId)
        },
        onPointerMove: SS => {
          gS.move(Vg(SS))
        },
        onPointerUp: SS => {
          gS.up(Vg(SS))
        },
        onPointerCancel: SS => {
          gS.cancel(SS.pointerId)
        },
        onLostPointerCapture: SS => {
          gS.cancel(SS.pointerId)
        },
        onPointerLeave: SS => {
          gS.leave(Vg(SS))
        },
        "aria-hidden": !0
      })
    }

    function Vg(SS) {
      const {
        left: HS,
        top: gS,
        width: tS,
        height: bS
      } = SS.currentTarget.getBoundingClientRect();
      return {
        id: SS.pointerId,
        mouse: "mouse" === SS.pointerType,
        x: SS.clientX,
        y: SS.clientY,
        ndcX: (SS.clientX - HS) / tS * 2 - 1,
        ndcY: 1 - (SS.clientY - gS) / bS * 2,
        atMs: SS.timeStamp
      }
    }
    var ig = gS(2480),
      Wg = gS(36710),
      zg = gS(2100),
      Ug = gS(1344);
    const pg = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function sg(SS) {
      let {
        hud: HS
      } = SS;
      const gS = (0, dS.i)(IH, HS.getPlot()),
        [tS, bS] = (0, XS.useState)(null),
        xS = (0, Wg.m)(tS);
      if ("none" === gS[0]) return null;
      const [, NS, qS, uS, IS, fS] = gS;
      return (0, MS.jsx)("div", {
        className: wS()("PlotsPlotBannerContainer", {
          Below: xS
        }),
        children: (0, MS.jsx)(Bg, {
          plotX: NS,
          plotZ: qS,
          ownerName: uS,
          ownerId: IS,
          relation: fS,
          plaqueRef: bS
        }, `${NS},${qS}`)
      })
    }

    function Bg(SS) {
      var HS, gS;
      let {
        plotX: tS,
        plotZ: bS,
        ownerName: XS,
        ownerId: xS,
        relation: NS,
        plaqueRef: qS
      } = SS;
      const {
        t: uS
      } = (0, vS.F)(), IS = (0, zg.h)("hiddenPlayerNames"), fS = (0, zg.h)("players"), kS = null === xS ? null : null !== (HS = null === (gS = fS.byId[xS]) || void 0 === gS ? void 0 : gS.cosmetics) && void 0 !== HS ? HS : null, aS = uS("plotsGame:plotBannerCoords", {
        x: tS,
        z: bS
      }), KS = "own" === NS || null !== XS;
      return (0, MS.jsxs)("div", {
        ref: qS,
        className: wS()("PlotsPlotBanner", {
          Own: "own" === NS,
          Shared: "shared" === NS
        }),
        role: "status",
        children: [(0, MS.jsxs)("span", {
          className: wS()("PlotsPlotBannerSeal", {
            Face: null !== kS
          }),
          children: [null !== kS && (0, MS.jsx)(ig.e, {
            cosmetics: kS
          }), null === kS && (0, MS.jsx)(hS.d, {
            name: pg[NS]
          })]
        }), (0, MS.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, MS.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === NS && uS("plotsGame:plotBannerYours"), "own" !== NS && null !== XS && uS("plotsGame:plotBannerOwner", {
              name: (0, Ug.g)(XS, IS)
            }), !KS && aS]
          }), KS && (0, MS.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [aS, "shared" === NS && (0, MS.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: uS("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }

    function Mg(SS) {
      let {
        progress: HS,
        goal: gS
      } = SS;
      const tS = Math.min(HS, gS);
      return (0, MS.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, MS.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": gS,
          "aria-valuenow": tS,
          children: (0, MS.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${tS/gS})`
            }
          })
        }), (0, MS.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [tS, "/", gS]
        })]
      })
    }

    function Fg(SS) {
      return {
        translationKey: `plotsGame:${SS}`,
        actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
      }
    }
    const Rg = {
      house: {
        icon: "house",
        titleKey: "plotsGame:starterLotHouseTitle",
        desktop: Fg("starterLotHouseHint", ["alt-fire"]),
        touch: Fg("starterLotHouseHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotHousePlain"
      },
      garden: {
        icon: "sparkle",
        titleKey: "plotsGame:starterLotGarden",
        desktop: Fg("starterLotGardenHint", ["alt-fire"]),
        touch: Fg("starterLotGardenHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotGardenPlain"
      },
      boulder: {
        icon: "hammer",
        titleKey: "plotsGame:starterLotBoulder",
        desktop: Fg("starterLotBreakHint", ["primary-fire"]),
        touch: Fg("starterLotBreakHintTouch"),
        plainKey: "plotsGame:starterLotBreakPlain"
      },
      fly: {
        icon: "angles-up",
        titleKey: "plotsGame:starterLotFly",
        desktop: Fg("starterLotFlyHint", ["jump"]),
        touch: Fg("starterLotFlyHintTouch"),
        plainKey: "plotsGame:starterLotFlyPlain"
      },
      backpack: {
        icon: "backpack",
        titleKey: "plotsGame:starterLotBackpack",
        desktop: Fg("starterLotBackpackHint", ["OpenInventory"]),
        touch: Fg("starterLotBackpackHintTouch"),
        plainKey: "plotsGame:starterLotBackpackPlain"
      },
      neighbour: {
        icon: "person",
        titleKey: "plotsGame:starterLotNeighbour",
        desktop: Fg("starterLotNeighbourHint", ["forward", "left", "backward", "right"]),
        touch: Fg("starterLotNeighbourHintTouch"),
        plainKey: "plotsGame:starterLotNeighbourPlain"
      }
    };

    function Tg(SS, HS, gS) {
      const {
        translationKey: tS,
        actions: bS
      } = gS ? HS.touch : HS.desktop;
      if (0 === bS.length) return SS(tS);
      const XS = [];
      for (const xS of bS) {
        const tS = (0, Zg.r)(xS, gS),
          bS = Zg.u[xS][0];
        if (null === tS && void 0 === bS) return SS(HS.plainKey);
        XS.push(null === tS ? (0, Zg.o)(bS) : SS(tS.translationKey))
      }
      return SS(tS, {
        key: XS.join("")
      })
    }

    function og(SS) {
      let {
        hud: HS
      } = SS;
      const gS = (0, dS.i)(uH, HS.getStep()),
        {
          t: tS
        } = (0, vS.F)();
      return (0, MS.jsxs)(xH.g, {
        placement: "bottom",
        children: ["step" === gS[0] && (0, MS.jsx)(lg, {
          step: gS[1],
          progress: gS[2],
          goal: gS[3]
        }, gS[1]), "celebrate" === gS[0] && (0, MS.jsx)(mg, {
          className: wS()("Celebrate", {
            Gold: "house" === gS[1]
          }),
          icon: "star",
          title: tS("house" === gS[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
        }, `celebrate-${gS[1]}`)]
      })
    }

    function lg(SS) {
      let {
        step: HS,
        progress: gS,
        goal: tS
      } = SS;
      const {
        isTouchScreen: bS
      } = (0, NS.m)(["isTouchScreen"]), {
        t: XS
      } = (0, vS.F)(), xS = Rg[HS];
      return (0, MS.jsxs)(mg, {
        icon: xS.icon,
        title: XS(xS.titleKey),
        children: [(0, MS.jsx)("div", {
          className: "PlotsStepCardHint SmallTextLight",
          children: Tg(XS, xS, bS)
        }), tS > 1 && (0, MS.jsx)(Mg, {
          progress: gS,
          goal: tS
        }), "backpack" === HS && bS && (0, MS.jsx)(eg, {})]
      })
    }

    function mg(SS) {
      let {
        className: HS,
        icon: gS,
        title: tS,
        children: bS
      } = SS;
      return (0, MS.jsxs)("div", {
        className: wS()("PlotsStepCard", HS),
        role: "status",
        children: [(0, MS.jsx)("span", {
          className: "PlotsStepCardIcon",
          children: (0, MS.jsx)(hS.d, {
            name: gS
          })
        }), (0, MS.jsxs)("div", {
          className: "PlotsStepCardBody",
          children: [(0, MS.jsx)("div", {
            className: "PlotsStepCardTitle SmallTextBold",
            children: tS
          }), bS]
        })]
      })
    }

    function eg() {
      return (0, XS.useEffect)((() => (NS.b.set({
        backpackPointerRequested: !0
      }), () => {
        NS.b.set({
          backpackPointerRequested: !1
        })
      })), []), null
    }
    const rg = function(SS, HS, gS, tS) {
      let {
        localPlayerId: bS
      } = tS;
      const NS = new fH;
      let qS = null,
        uS = null,
        IS = null,
        fS = null,
        kS = null;
      const aS = [];
      return {
        onCreate: SS => {
          qS = new hg(SS, bS), uS = new qg(SS, bS, qS), IS = new qg(SS, bS, qS), fS = new Cg(SS, bS), kS = new QS(SS, fS), aS.push((0, xS.y)((0, XS.createElement)(XS.Fragment, null, (0, XS.createElement)(sg, {
            hud: NS
          }), (0, XS.createElement)(og, {
            hud: NS
          }), (0, XS.createElement)(aH, {
            hud: NS,
            journal: kS
          }), (0, XS.createElement)(Ag, {
            placement: fS
          }), (0, XS.createElement)(cg, {
            placement: fS
          })), {
            content: (0, XS.createElement)(bH, {
              journal: kS
            })
          }))
        },
        mf: () => {
          uS.mf(), IS.mf(), fS.mf(), kS.mf()
        },
        onPlayerAttemptAltAction: (SS, HS, gS, tS, bS, XS) => {
          var xS;
          if (null !== XS) return;
          const NS = void 0 === HS ? null : [HS, gS, tS];
          return null !== (xS = uS.attemptAltAction(NS)) && void 0 !== xS ? xS : IS.attemptAltAction(NS)
        },
        onPlayerClickUp: () => {
          uS.endPress(), IS.endPress()
        },
        onAfterRender: (SS, HS) => {
          fS.afterRender(HS), uS.afterRender(HS), IS.afterRender(HS)
        },
        onClose: () => {
          for (const SS of aS) SS();
          qS.dispose(), uS.dispose(), IS.dispose(), fS.dispose(), qS = null, uS = null, IS = null, fS = null, kS = null
        },
        onReceivedMessageFromServer: (SS, HS) => {
          if ("plotsStarterLot" === SS) NS.receiveStep(HS);
          else if ("plotsPlot" === SS) NS.receivePlot(HS);
          else if ("plotsStarterHouse" === SS) uS.wK(HS);
          else if ("plotsBlueprint" === SS) {
            const SS = HS;
            IS.wK(SS), fS.wK(SS)
          } else "plotsJournal" === SS ? kS.wK(HS) : "plotsJournalOpen" === SS ? kS.openFromServer() : "plotsPreviewEnd" === SS && fS.endFromServer()
        }
      }
    }
  },
  39164: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS,
      e: () => XS
    });
    const tS = 1 / .6,
      bS = {
        kind: "smokePuff"
      };
    class XS {
      constructor(SS, HS, gS) {
        this.style = SS, this.hf = HS, this.half = gS, this.particles = null, this.lastFrame = -1
      }
      emit(SS, HS, gS) {
        let XS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return gS !== this.lastFrame && (this.lastFrame = gS, this.particles || (this.particles = SS.createParticles(function(SS, HS) {
          const [
            [gS, XS, xS],
            [NS, qS, uS]
          ] = SS.colours;
          return {
            texture: SS.soft ? bS : "square_particle",
            hf: HS,
            minLifeTime: SS.life[0] / tS,
            maxLifeTime: SS.life[1] / tS,
            minEmitPower: SS.power[0] * tS,
            maxEmitPower: SS.power[1] * tS,
            minSize: SS.size[0],
            maxSize: SS.size[1],
            emitRate: 0,
            gravity: [0, SS.lift * tS * tS, 0],
            dir1: [-SS.spread, 1, -SS.spread],
            dir2: [SS.spread, 1, SS.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [gS, XS, xS, SS.alpha],
              maxColor: [NS, qS, uS, SS.alpha]
            }, {
              timeFraction: 1,
              minColor: [gS, XS, xS, 0],
              maxColor: [NS, qS, uS, 0]
            }],
            blendMode: SS.blendMode
          }
        }(this.style, this.hf), {
          pos: HS,
          half: this.half
        })), this.particles.moveTo(HS, this.half), this.particles.emit(XS), !0)
      }
      dispose() {
        var SS;
        null === (SS = this.particles) || void 0 === SS || SS.stop(), this.particles = null
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);