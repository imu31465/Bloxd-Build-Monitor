export const id = 238;
export const ids = [238];
export const modules = {
  38757: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => Fc
    });
    const ID = [0, 90, 180, 270],
      pD = "plotsblueprint";
    var iD = cD(53),
      fD = cD(35996),
      bD = cD(16),
      QD = cD(1627),
      wD = cD(1701),
      SD = cD(20);
    const BD = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      yD = {
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
      MD = ["small", "medium", "large"].flatMap((DD => BD.flat().filter((CD => yD[CD].tier === DD))));

    function tD(DD) {
      return yD[DD]
    }
    const ZD = new Map(BD.flatMap((DD => DD.slice(1).map(((CD, cD) => [CD, DD[cD]])))));

    function oD(DD) {
      var CD;
      return null !== (CD = ZD.get(DD)) && void 0 !== CD ? CD : null
    }
    const vD = {
      farm_hut: "plotsGame:journalNoteFarmHut",
      rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
      castle_tower: "plotsGame:journalNoteCastleTower",
      farm_house: "plotsGame:journalNoteFarmHouse",
      farm_barn: "plotsGame:journalNoteFarmBarn"
    };

    function ND(DD, CD) {
      const cD = new Set(DD),
        ID = function(DD) {
          const CD = new Set(DD);
          return new Set(MD.filter((DD => {
            const cD = oD(DD);
            return null === cD || CD.has(cD)
          })))
        }(cD);
      return MD.map((DD => {
        const pD = DD === CD;
        return cD.has(DD) ? {
          id: DD,
          active: pD,
          state: "completed",
          unlockedBy: null
        } : ID.has(DD) ? {
          id: DD,
          active: pD,
          state: "open",
          unlockedBy: null
        } : {
          id: DD,
          active: pD,
          state: "locked",
          unlockedBy: oD(DD)
        }
      }))
    }
    const gD = "plotsJournalChanged";
    class XD {
      constructor(DD, CD) {
        this.api = DD, this.placement = CD, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.Nt("journal_opened")
        }, this.build = DD => {
          this.Nt("placement_started"), this.placement.start(DD), (0, fD.e)()
        }, this.putAway = () => {
          this.api.sendCommand(`${pD} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      kt(DD) {
        let [, CD, cD] = DD;
        this.pages = ND(CD, cD), SD.i.Uo(gD, this.pages, !0)
      }
      openFromServer() {
        this.openRequested = !0, this.wy()
      }
      wy() {
        this.openRequested && !bD.d.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, QD.s)() || (0, wD.isTypingInInput)() || null !== this.placement.getView() || (0, fD.s)())
      }
      Nt(DD) {
        this.reported.has(DD) || (this.reported.add(DD), this.api.sendCommand(`${pD} report ${DD}`))
      }
    }
    var mD = cD(1049),
      nD = cD.n(mD),
      OD = cD(1064),
      PD = cD(1442),
      HD = cD(4325),
      UD = cD(3209),
      xD = cD(1440),
      qD = cD(2050),
      JD = cD(1192),
      KD = cD(9141);
    const aD = [0, 90, 180, 270],
      VD = /^(meta\|rot\d)\|([lrud]+)$/,
      zD = "nesw",
      jD = /^meta\|([nesw]*)\|?(Stacked)?$/,
      lD = function(DD) {
        const CD = new WeakMap;
        return (cD, ID) => {
          let pD = CD.get(cD);
          return void 0 === pD && (pD = DD(cD, ID), CD.set(cD, pD)), pD
        }
      }((DD => new LD(DD)));
    class LD {
      constructor(DD) {
        this.blockMetadata = DD, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const CD = new Set(Object.keys(DD).map((CD => DD[CD].id)));
        CD.add(0), this.maxBlockId = Math.max(...CD)
      }
      static
      for (DD) {
        return lD(DD)
      }
      getBlockIdMapping(DD, CD) {
        const cD = this.getBlockIdMappingKey(DD, CD);
        let ID = this.blockIdMappings.get(cD);
        return void 0 === ID && aD.includes(DD) && (ID = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, DD, CD), this.blockIdMappings.set(cD, ID)), ID
      }
      turnBlockId(DD, CD, cD) {
        return this.mapBlockId(this.blockMetadata[DD], CD, this.getRotationMapping(CD, cD), cD)
      }
      getBlockIdMappingKey(DD, CD) {
        return `r${DD}|m${Number(CD)}`
      }
      createBlockIdMapping(DD, CD, cD, ID) {
        const pD = new Uint16Array(CD + 1),
          iD = this.getRotationMapping(cD, ID);
        for (const fD in DD) {
          const CD = DD[fD];
          pD[CD.id] = this.mapBlockId(CD, cD, iD, ID)
        }
        return pD
      }
      getRotationMapping(DD, CD) {
        const cD = Math.round(DD / 90),
          ID = new Uint8Array(4);
        for (let pD = 0; pD < 4; pD++) ID[pD] = (4 + pD - cD) % 4;
        if (CD) {
          let DD = ID[0];
          ID[0] = ID[1], ID[1] = DD, DD = ID[2], ID[2] = ID[3], ID[3] = DD
        }
        return ID
      }
      mapBlockId(DD, CD, cD, ID) {
        var pD;
        const {
          blockMetadata: iD
        } = this, fD = Math.round(CD / 90), {
          id: bD,
          meta: QD
        } = DD, {
          rot: wD,
          rootName: SD,
          metaStr: BD
        } = QD;
        let yD;
        const [, MD, tD] = null !== (pD = jD.exec(BD)) && void 0 !== pD ? pD : [];
        if (void 0 !== MD) {
          var ZD, oD;
          yD = null !== (ZD = null === (oD = iD[`${SD}|meta|${[zD.split("").filter(((DD,CD)=>MD.split("").some((DD=>{const cD=zD.indexOf(DD);return((ID?3-cD:cD)+fD)%4===CD})))).join(""),tD].filter(Boolean).join("|")}`]) || void 0 === oD ? void 0 : oD.id) && void 0 !== ZD ? ZD : bD
        } else if (null === wD) yD = bD;
        else {
          var vD, ND;
          const DD = cD[wD - 1] + 1;
          let CD = BD.replace(`rot${wD}`, `rot${DD}`);
          ID && QD.stairsCorner && (CD = CD.replace(/(Left|Right)$/, (DD => "Left" === DD ? "Right" : "Left"))), ID && "Chest" === SD && (CD = CD.replace(/\|(left|right)$/, ((DD, CD) => "left" === CD ? "|right" : "|left")));
          const pD = VD.exec(CD);
          if (ID && null !== pD) {
            const DD = "lrud".split("").filter((DD => pD[2].includes("l" === DD ? "r" : "r" === DD ? "l" : DD)));
            CD = `${pD[1]}|${DD.join("")}`
          }
          const fD = `${SD}|${CD}`;
          if (yD = null !== (vD = null === (ND = iD[fD]) || void 0 === ND ? void 0 : ND.id) && void 0 !== vD ? vD : null, null === yD) {
            const DD = iD[SD];
            yD = DD.rootMetaDesc === fD ? DD.id : bD
          }
        }
        return yD
      }
    }

    function TD(DD, CD, cD) {
      let {
        xRotationMappedOrigin: ID,
        shouldSwapXZ: pD
      } = cD;
      const iD = pD ? CD : DD;
      return null === ID ? iD : ID - iD
    }

    function GD(DD, CD, cD) {
      let {
        zRotationMappedOrigin: ID,
        shouldSwapXZ: pD
      } = cD;
      const iD = pD ? DD : CD;
      return null === ID ? iD : ID - iD
    }
    const RD = {
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
      kD = new Map;

    function dD(DD, CD) {
      const cD = `${DD}|${CD}`;
      let ID = kD.get(cD);
      if (void 0 === ID) {
        const {
          size: pD,
          palette: iD,
          layers: fD
        } = RD[DD], bD = 90 === CD || 270 === CD, [QD, wD] = bD ? [pD[2], pD[0]] : [pD[0], pD[2]], SD = function(DD, CD, cD) {
          let ID = null,
            pD = null,
            iD = !1;
          switch (DD) {
            case 0:
              break;
            case 90:
              ID = CD - 1, iD = !0;
              break;
            case 180:
              ID = CD - 1, pD = cD - 1;
              break;
            case 270:
              pD = cD - 1, iD = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${DD}`)
          }
          return {
            xRotationMappedOrigin: ID,
            zRotationMappedOrigin: pD,
            shouldSwapXZ: iD
          }
        }(CD, QD, wD), BD = LD.for(KD.g), yD = iD.map((DD => (0, KD.f)(BD.turnBlockId((0, KD.k)(DD), CD, !1)))), MD = [];
        fD.forEach(((DD, CD) => {
          DD.split(" ").forEach(((DD, cD) => {
            for (let ID = 0; ID < DD.length; ID++)
              if ("." !== DD[ID]) {
                const pD = [TD(ID, cD, SD), CD, GD(ID, cD, SD)];
                MD.push({
                  offset: pD,
                  block: yD[DD.charCodeAt(ID) - "a".charCodeAt(0)]
                })
              }
          }))
        })), ID = {
          size: [QD, pD[1], wD],
          cells: MD
        }, kD.set(cD, ID)
      }
      return ID
    }
    const YD = {
      farm_hut: cD.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
      farm_house: cD.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
      farm_barn: cD.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
      rusticHome_tent: cD.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
      rusticHome_cabin: cD.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
      rusticHome_house: cD.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
      market_stand: cD.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
      market_stall: cD.p + "static/media/market_stall.9a562807f9dff591618a.webp",
      market_shop: cD.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
      castle_wall: cD.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
      castle_gate: cD.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
      castle_tower: cD.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
    };
    var WD = cD(1093);
    const sD = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function ED(DD) {
      let {
        page: CD,
        building: cD,
        onBuild: ID,
        onPutAway: pD
      } = DD;
      const {
        t: iD
      } = (0, JD.F)(), {
        displayName: fD,
        tier: bD
      } = tD(CD.id), QD = dD(CD.id, 0).cells.length, wD = vD[CD.id], SD = "locked" === CD.state, BD = cD ? PD.i : PD.o;
      return (0, WD.jsxs)("article", {
        className: nD()("PlotsJournalPage", {
          Locked: SD
        }),
        children: [(0, WD.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: iD(fD.translationKey)
        }), (0, WD.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [iD(sD[bD]), " \xb7 ", iD("plotsGame:journalBlocks", {
            blocks: String(QD)
          })]
        }), (0, WD.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [MD.map((DD => (0, WD.jsx)("img", {
            className: nD()({
              Shown: DD === CD.id
            }),
            src: YD[DD],
            alt: "",
            draggable: !1
          }, DD))), "completed" === CD.state && (0, WD.jsx)("span", {
            className: "PlotsJournalStamp",
            children: iD("plotsGame:journalBuilt")
          }), SD && (0, WD.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, WD.jsx)(OD.c, {
              name: "lock"
            })
          })]
        }), void 0 !== wD && "completed" !== CD.state && (0, WD.jsx)("p", {
          className: "PlotsJournalNote",
          children: iD(wD)
        }), (0, WD.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === CD.state && (0, WD.jsx)("p", {
            className: "PlotsJournalHint",
            children: iD("plotsGame:journalLocked", {
              name: iD(tD(CD.unlockedBy).displayName.translationKey)
            })
          }), CD.active && (0, WD.jsxs)(WD.Fragment, {
            children: [(0, WD.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: iD("plotsGame:journalBuilding")
            }), (0, WD.jsx)(PD.k, {
              onClick: pD,
              children: iD("plotsGame:journalPutAway")
            })]
          }), !SD && !CD.active && (0, WD.jsx)(BD, {
            onClick: () => {
              ID(CD.id)
            },
            children: iD("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function eD(DD) {
      let {
        className: CD,
        page: cD,
        hidden: ID,
        building: pD,
        journal: iD
      } = DD;
      return (0, WD.jsxs)("div", {
        ref: DD => {
          null !== DD && (DD.inert = ID)
        },
        className: nD()("PlotsJournalSide", CD),
        children: [void 0 !== cD && (0, WD.jsx)(ED, {
          page: cD,
          building: pD,
          onBuild: iD.build,
          onPutAway: iD.putAway
        }), void 0 === cD && (0, WD.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var uD = cD(326),
      hD = cD(1865);

    function rD(DD) {
      return Math.cos((0, hD.o)(DD))
    }

    function AD(DD) {
      return (0, hD.A)(Math.acos(uD.e.clamp(DD, -1, 1)))
    }

    function FD(DD, CD, cD, ID, pD) {
      const iD = Math.abs(CD - DD),
        fD = (0, hD.A)(pD / (cD * Math.abs(Math.sin((0, hD.o)(DD))))),
        bD = 450 * Math.min(1, iD / ID),
        QD = fD > 0 ? 3 * iD / fD : 1 / 0;
      return Math.round(Math.max(120, Math.min(bD, QD)))
    }
    class DC {
      constructor() {
        this.samples = []
      }
      add(DD, CD) {
        for (this.samples.push({
            x: DD,
            at: CD
          }); CD - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const DD = this.samples[0],
          CD = this.samples[this.samples.length - 1];
        return CD.at > DD.at ? (CD.x - DD.x) / (CD.at - DD.at) : 0
      }
    }

    function CC(DD, CD) {
      return DD > CD && DD >= 600
    }

    function cC(DD) {
      return AD(new DOMMatrixReadOnly(getComputedStyle(DD).transform).m11)
    }

    function IC(DD, CD) {
      DD.style.transform = `rotateY(${-CD}deg)`, DD.classList.add("Turning")
    }

    function pC(DD) {
      let {
        journal: CD
      } = DD;
      const {
        t: cD
      } = (0, JD.F)(), ID = (0, xD.g)(gD, CD.getPages()), pD = (0, qD.b)(CC), [bD, QD] = (0, iD.useState)((() => function(DD) {
        const CD = DD.findIndex((DD => DD.active));
        return -1 !== CD ? CD : Math.max(0, DD.findIndex((DD => "open" === DD.state)))
      }(ID))), SD = (0, iD.useRef)(null), BD = (0, iD.useRef)(null), yD = (0, iD.useRef)({
        Forward: null,
        Back: null
      }), MD = pD ? 2 : 1, tD = pD ? 180 : 90, ZD = bD - bD % MD, oD = ZD > 0, vD = ZD + MD < ID.length, ND = (0, iD.useCallback)((() => {
        const DD = BD.current;
        return null === DD ? ZD : (BD.current = null, DD.animation.cancel(), (CD = yD.current[DD.direction]).style.transform = "", CD.classList.remove("Turning"), null === DD.next ? ZD : (QD(DD.next), DD.next));
        var CD
      }), [ZD]), XD = (0, iD.useCallback)(((DD, CD, cD, ID) => {
        const pD = yD.current[DD],
          iD = cC(pD),
          fD = CD === ("Forward" === DD) ? tD : 0;
        IC(pD, fD);
        const bD = pD.animate([{
          transform: `rotateY(${-iD}deg)`
        }, {
          transform: `rotateY(${-fD}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : FD(iD, fD, pD.offsetWidth, tD, fD > iD ? -cD : cD),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        BD.current = {
          direction: DD,
          animation: bD,
          next: CD ? ID + ("Forward" === DD ? MD : -MD) : null
        }, bD.onfinish = () => {
          var DD;
          (null === (DD = BD.current) || void 0 === DD ? void 0 : DD.animation) === bD && ND()
        }
      }), [MD, tD, ND]), mD = (0, iD.useCallback)((DD => {
        if (null !== SD.current) return;
        const CD = ND();
        ("Forward" === DD ? CD + MD < ID.length : CD > 0) && XD(DD, !0, 0, CD)
      }), [ND, XD, MD, ID.length]);
      (0, iD.useEffect)((() => {
        CD.onOpened()
      }), [CD]), (0, iD.useEffect)((() => () => {
        var DD;
        null === (DD = BD.current) || void 0 === DD || DD.animation.cancel()
      }), []), (0, iD.useEffect)((() => {
        const DD = DD => {
          var CD;
          DD.pointerId !== (null === (CD = SD.current) || void 0 === CD ? void 0 : CD.pointerId) || SD.current.following || (SD.current = null)
        };
        return window.addEventListener("pointerup", DD), () => {
          window.removeEventListener("pointerup", DD)
        }
      }), []), (0, UD.e)((DD => ("ArrowLeft" === DD.code || "ArrowRight" === DD.code) && !(0, wD.isTypingInInput)()), (DD => {
        DD.stopPropagation(), mD("ArrowLeft" === DD.code ? "Back" : "Forward")
      }));
      const OD = (DD, CD, cD) => {
          const ID = function(DD, CD, cD, ID) {
            return (DD < 0 ? cD : ID) ? uD.e.clampAbs(DD, CD) : Math.sign(DD) * CD * (1 - 1 / (.55 * Math.abs(DD) / CD + 1))
          }(DD.base + cD, MD * DD.width, vD, oD);
          return "Forward" === CD ? Math.min(ID, 0) : Math.max(ID, 0)
        },
        KD = (DD, CD) => {
          const cD = SD.current;
          if (SD.current = null, null === cD.direction) return;
          cD.speed.add(DD, CD);
          const ID = cD.speed.get(),
            pD = OD(cD, cD.direction, DD - cD.x);
          XD(cD.direction, null !== function(DD, CD, cD, ID, pD) {
            if (Math.abs(CD) >= .3 ? Math.sign(CD) !== Math.sign(DD) : Math.abs(DD) < .5 * cD) return null;
            const iD = DD < 0 ? "Forward" : "Back";
            return ("Forward" === iD ? ID : pD) ? iD : null
          }(pD, ID, MD * cD.width, vD, oD), ID, ZD)
        },
        aD = ID.some((DD => DD.active)),
        VD = (DD, cD, pD) => (0, WD.jsx)(eD, {
          className: DD,
          page: cD >= 0 && cD < ID.length ? ID[cD] : void 0,
          hidden: pD,
          building: aD,
          journal: CD
        });
      return (0, WD.jsx)(HD.e, {
        close: fD.i,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, WD.jsxs)("section", {
          className: nD()("PlotsJournal", {
            Spread: pD
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": cD("plotsGame:journalTitle"),
          children: [(0, WD.jsx)(PD.l, {
            className: "PlotsJournalClose",
            onClick: fD.i
          }), (0, WD.jsx)(iC, {
            direction: "Back",
            disabled: !oD,
            onTurn: mD
          }), (0, WD.jsx)("div", {
            className: "PlotsJournalBookPages",
            onPointerDown: DD => {
              var CD;
              if (!DD.isPrimary || 0 !== DD.button || null !== BD.current && null !== DD.target.closest("button")) return;
              const cD = new DC;
              cD.add(DD.clientX, DD.timeStamp);
              const ID = yD.current.Forward.offsetWidth,
                pD = BD.current;
              BD.current = null;
              let iD = 0;
              if (null !== pD) {
                const CD = yD.current[pD.direction],
                  cD = cC(CD);
                pD.animation.cancel(), IC(CD, cD), iD = function(DD, CD, cD, ID) {
                  return (DD < 0 ? cD : ID) ? DD : Math.sign(DD) * CD * (1 / (1 - Math.min(Math.abs(DD) / CD, .99)) - 1) / .55
                }(function(DD, CD, cD, ID) {
                  return cD * (rD(CD) - rD("Forward" === DD ? 0 : ID))
                }(pD.direction, cD, ID, tD), MD * ID, vD, oD), DD.currentTarget.setPointerCapture(DD.pointerId)
              }
              SD.current = {
                pointerId: DD.pointerId,
                x: DD.clientX,
                y: DD.clientY,
                base: iD,
                width: ID,
                following: null !== pD,
                direction: null !== (CD = null === pD || void 0 === pD ? void 0 : pD.direction) && void 0 !== CD ? CD : null,
                speed: cD
              }
            },
            onPointerMove: DD => {
              const CD = SD.current;
              if (null === CD || DD.pointerId !== CD.pointerId) return;
              if (0 === DD.buttons) return void KD(DD.clientX, DD.timeStamp);
              const cD = DD.clientX - CD.x;
              !CD.following && function(DD, CD) {
                return Math.abs(DD) > 8 && Math.abs(DD) > Math.abs(CD)
              }(cD, DD.clientY - CD.y) && (CD.following = !0, CD.direction = cD < 0 ? "Forward" : "Back", DD.currentTarget.setPointerCapture(DD.pointerId)), null !== CD.direction && (CD.speed.add(DD.clientX, DD.timeStamp), IC(yD.current[CD.direction], function(DD, CD, cD, ID) {
                const pD = cD * rD("Forward" === DD ? 0 : ID) + CD;
                return uD.e.clamp(AD(pD / cD), 0, ID)
              }(CD.direction, OD(CD, CD.direction, cD), CD.width, tD)))
            },
            onPointerUp: DD => {
              var CD;
              DD.pointerId === (null === (CD = SD.current) || void 0 === CD ? void 0 : CD.pointerId) && KD(DD.clientX, DD.timeStamp)
            },
            onPointerCancel: DD => {
              const CD = SD.current;
              DD.pointerId === (null === CD || void 0 === CD ? void 0 : CD.pointerId) && (SD.current = null, null !== CD.direction && XD(CD.direction, !1, 0, ZD))
            },
            children: (0, WD.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [pD && VD("Left", ZD - 2, !0), VD("Right", ZD + 2 * MD - 1, !0), (0, WD.jsxs)("div", {
                ref: DD => {
                  yD.current.Back = DD
                },
                className: "PlotsJournalLeaf Back",
                children: [VD("Recto", ZD - 1, !0), pD && VD("Verso", ZD, !1)]
              }), (0, WD.jsxs)("div", {
                ref: DD => {
                  yD.current.Forward = DD
                },
                className: "PlotsJournalLeaf Forward",
                children: [VD("Recto", ZD + MD - 1, !1), pD && VD("Verso", ZD + MD, !0)]
              })]
            })
          }), (0, WD.jsx)(iC, {
            direction: "Forward",
            disabled: !vD,
            onTurn: mD
          })]
        })
      })
    }

    function iC(DD) {
      let {
        direction: CD,
        disabled: cD,
        onTurn: ID
      } = DD;
      const {
        t: pD
      } = (0, JD.F)();
      return (0, WD.jsx)("div", {
        className: nD()("PlotsJournalArrow", CD),
        children: (0, WD.jsx)(PD.i, {
          disabled: cD,
          ariaLabel: pD("Forward" === CD ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            ID(CD)
          },
          children: (0, WD.jsx)(OD.c, {
            name: "angle-up"
          })
        })
      })
    }
    var fC = cD(35994),
      bC = cD(1893),
      QC = cD(1957);
    const wC = "plotsStepChanged",
      SC = "plotsPlotChanged";
    class BC {
      constructor() {
        this.step = ["none"], this.plot = ["none"]
      }
      getStep() {
        return this.step
      }
      receiveStep(DD) {
        this.step = DD, SD.i.Uo(wC, DD, !0)
      }
      getPlot() {
        return this.plot
      }
      receivePlot(DD) {
        this.plot = DD, SD.i.Uo(SC, DD, !0)
      }
    }
    const yC = "KeyJ";

    function MC(DD) {
      let {
        hud: CD,
        journal: cD
      } = DD;
      const ID = (0, xD.g)(gD, cD.getPages()),
        pD = (0, xD.g)(wC, CD.getStep()),
        {
          isTouchScreen: iD
        } = (0, bD.o)(["isTouchScreen"]),
        {
          t: SD
        } = (0, JD.F)(),
        BD = null !== ID && "none" === pD[0];
      return (0, UD.e)((DD => null !== ID && DD.code === yC && !DD.repeat && !(0, wD.isTypingInInput)()), (DD => {
        (0, QD.B)(DD, BD, fD.s)
      })), BD ? (0, WD.jsx)(fC.e, {
        placement: "topRight",
        children: (0, WD.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, WD.jsxs)("button", {
            type: "button",
            className: nD()("PlotsJournalButton SmallTextBold", {
              Touch: iD
            }),
            onClick: fD.s,
            children: [(0, WD.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, WD.jsx)(bC.d, {
                itemName: "Book",
                amount: 0
              })
            }), SD("plotsGame:journalButton"), !iD && (0, WD.jsx)(QC.d, {
              className: "PlotsJournalButtonKey",
              keyCode: yC
            })]
          })
        })
      }) : null
    }
    var tC = cD(37789),
      ZC = cD(37548),
      oC = cD(36292),
      vC = cD(9173),
      NC = cD(9198),
      gC = cD(37194);
    const XC = new Map([
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
      mC = [...oC.b.blockRemoveActionRoots, ...ZC.c, ...vC.g, "Board", "Code Block", "Custom Lobby Block"],
      nC = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let OC = null;

    function PC() {
      return OC ??= function() {
        const DD = HC(),
          CD = Math.max(...DD.map((DD => KD.g[DD].id))) + 1,
          cD = new Int32Array(CD),
          ID = new Int32Array(CD),
          pD = new Uint8Array(CD).fill(1),
          iD = new Uint8Array(CD),
          fD = new Uint8Array(CD),
          bD = new Array(CD).fill("Air"),
          QD = new Map,
          wD = DD => {
            let CD = QD.get(DD);
            return void 0 === CD && (CD = QD.size + 1, QD.set(DD, CD)), CD
          },
          SD = new Set(mC);
        for (const yD of DD) {
          var BD;
          const {
            id: DD,
            meta: CD,
            altActionable: QD,
            canBePlacedOver: MD
          } = KD.g[yD];
          cD[DD] = wD(UC(yD));
          const tD = CD.stairsCorner;
          if (null === tD) ID[DD] = cD[DD];
          else {
            const cD = tD.endsWith("Right");
            ID[DD] = wD(`${CD.rootName}|rot${cD?CD.rot%4+1:CD.rot}|${CD.halfblockPlacement}|${tD.replace("Right","Left")}`)
          }
          pD[DD] = MD ? 1 : 0, iD[DD] = QD || null !== CD.open || yD in gC.e || SD.has(CD.rootName) || void 0 !== (0, ZC.g)(CD.rootName) ? 1 : 0;
          const {
            rootName: ZD
          } = CD;
          fD[DD] = null !== CD.open || ZC.c.includes(ZD) || ZD.includes("Bookshelf") || ZD.includes("Mailbox") ? 1 : 0, bD[DD] = null !== (BD = (0, tC.f)(DD)) && void 0 !== BD ? BD : ZD
        }
        return {
          kinds: cD,
          shapes: ID,
          empty: pD,
          inUse: iD,
          ownAltActionMessage: fD,
          placingItems: bD
        }
      }(), OC
    }

    function HC() {
      return Object.keys(KD.g).filter((DD => KD.g[DD].name === DD))
    }

    function UC(DD) {
      var CD;
      const cD = KD.g[DD],
        {
          rootName: ID,
          rot: pD
        } = cD.meta,
        [, ...iD] = (null !== (CD = cD.rootMetaDesc) && void 0 !== CD ? CD : DD).split("|"),
        fD = iD.filter((DD => !("meta" === DD || nC.test(DD) || (0, NC.y)(cD) && /^[nesw]+$/.test(DD) || vC.g.includes(ID) && /^[lrud]+$/.test(DD) || uD.I.includes(ID) && /^(left|right)$/.test(DD))));
      return [ID, ...fD].map((DD => "fenceGate" === cD.model && DD === `rot${pD}` ? "rot" + ((pD - 1) % 2 + 1) : DD)).join("|")
    }

    function xC(DD, CD) {
      const {
        kinds: cD,
        shapes: ID
      } = PC();
      return cD[DD] === cD[CD] || ID[DD] === ID[CD]
    }

    function qC(DD) {
      return 1 === PC().empty[DD]
    }

    function JC(DD) {
      return PC().placingItems[DD]
    }

    function KC(DD) {
      return XC.get(KD.g[DD].meta.rootName)
    }
    var aC = cD(9170),
      VC = cD(9189);
    const zC = [0, 0, 0, 1, 1, 1],
      jC = (0, aC.e)([
        [2, 0, 2, 6, 6, 6]
      ]),
      lC = (0, aC.e)([
        [3, 0, 3, 5, 5, 5]
      ]),
      LC = (0, aC.e)([
        [3, 3, 3, 5, 8, 5]
      ]),
      TC = [0, 1, 2, 3].map((DD => (0, aC.e)((0, aC.p)([
        [3, 2, 0, 5, 7, 3]
      ], DD))));

    function GC(DD) {
      const {
        wb: CD,
        model: cD,
        blockModel: ID,
        meta: pD
      } = KD.g[DD];
      return void 0 !== CD ? CD : "CentreCross" === cD ? jC : null !== ID && void 0 !== ID && ID.startsWith("torch") ? pD.halfblockPlacement === VC.b.side ? TC[pD.rot - 1] : pD.halfblockPlacement === VC.b.top ? LC : lC : zC
    }
    var RC = cD(36252),
      kC = cD(194);

    function dC(DD, CD) {
      const cD = kC.h.vN / 2;
      return DD[0] < CD[0] + cD && DD[0] + 1 > CD[0] - cD && DD[1] < CD[1] + kC.h.XN && DD[1] + 1 > CD[1] && DD[2] < CD[2] + cD && DD[2] + 1 > CD[2] - cD
    }

    function YC(DD, CD, cD, ID, pD) {
      const iD = Math.hypot(...CD.dir);
      if (!Number.isFinite(iD) || 0 === iD) return -1;
      const {
        from: fD,
        reach: bD,
        solid: QD
      } = CD, wD = [CD.dir[0] / iD, CD.dir[1] / iD, CD.dir[2] / iD], SD = null === QD ? bD : Math.min(bD, function(DD, CD, cD) {
        const ID = WC(DD, CD, cD);
        if (ID !== 1 / 0) return ID;
        return (cD[0] + .5 - DD[0]) * CD[0] + (cD[1] + .5 - DD[1]) * CD[1] + (cD[2] + .5 - DD[2]) * CD[2]
      }(fD, wD, QD) + .75);
      let BD = -1,
        yD = 1 / 0,
        MD = 1 / 0;
      for (let tD = 0; tD < DD.length; tD += 4) {
        const CD = [DD[tD], DD[tD + 1], DD[tD + 2]],
          iD = pD(tD) ? bD : SD;
        let QD = -1,
          ZD = WC(fD, wD, CD);
        if (ZD > iD) {
          const DD = [CD[0] + .5 - fD[0], CD[1] + .5 - fD[1], CD[2] + .5 - fD[2]];
          if (ZD = DD[0] * wD[0] + DD[1] * wD[1] + DD[2] * wD[2], ZD <= 0 || ZD > iD) continue;
          if (QD = Math.hypot(DD[0] - ZD * wD[0], DD[1] - ZD * wD[1], DD[2] - ZD * wD[2]), QD > .7 || !ID(tD)) continue
        }(QD < yD || QD === yD && ZD < MD) && cD(tD) && (BD = tD, yD = QD, MD = ZD)
      }
      return BD
    }

    function WC(DD, CD, cD) {
      let ID = 0,
        pD = 1 / 0;
      for (let iD = 0; iD < 3; iD++) {
        const fD = cD[iD] - DD[iD];
        if (0 === CD[iD]) {
          if (fD > 0 || fD + 1 < 0) return 1 / 0;
          continue
        }
        const bD = fD / CD[iD],
          QD = (fD + 1) / CD[iD];
        ID = Math.max(ID, Math.min(bD, QD)), pD = Math.min(pD, Math.max(bD, QD))
      }
      return ID <= pD ? ID : 1 / 0
    }
    var sC = cD(37448),
      EC = cD(37892);
    const eC = [1, 1, 1];
    class uC {
      constructor(DD) {
        this.api = DD, this.meshes = null, this.shown = null
      }
      show(DD) {
        if (!(0, RC.f)(DD, this.shown))
          if (this.shown = null === DD ? null : [DD[0], DD[1], DD[2]], null !== this.meshes)
            for (const CD of this.meshes) this.api.setGameMesh(CD, null === DD ? {
              visible: !1
            } : {
              anchor: DD,
              visible: !0
            });
          else if (null !== DD) {
          const CD = [sC.g, sC.g, sC.g, 0, 0, 0];
          this.meshes = [this.build([CD], sC.h, DD), this.build((0, sC.c)(), sC.p, DD)]
        }
      }
      dispose() {
        for (const CD of null !== (DD = this.meshes) && void 0 !== DD ? DD : []) {
          var DD;
          this.api.disposeGameMesh(CD)
        }
        this.meshes = null, this.shown = null
      }
      build(DD, CD, cD) {
        const ID = [],
          pD = [];
        for (const [iD, fD, bD, QD, wD, SD] of DD)(0, EC.g)(ID, pD, [QD + .5, wD + .5, SD + .5], [iD, fD, bD]);
        return this.api.createGameMesh({
          positions: ID,
          indices: pD
        }, {
          rgb: eC,
          alpha: CD,
          onTop: !0
        }, cD)
      }
    }
    class hC {
      constructor(DD) {
        this.api = DD, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(DD) {
        const CD = kC.h.Wt;
        this.chunks = [];
        for (let cD = 0; cD < DD.length; cD += 3) {
          const ID = Math.floor(DD[cD] / CD),
            pD = Math.floor(DD[cD + 1] / CD),
            iD = Math.floor(DD[cD + 2] / CD);
          this.watches(ID, pD, iD) || this.chunks.push(ID, pD, iD)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const DD = performance.now();
        if (DD - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = DD;
        let CD = !1;
        for (let cD = 0; cD < this.chunks.length; cD += 3) {
          const DD = this.api.getChunkVersion(this.chunks[cD], this.chunks[cD + 1], this.chunks[cD + 2]);
          this.versions[cD / 3] !== DD && (this.versions[cD / 3] = DD, CD = !0)
        }
        return CD
      }
      watches(DD, CD, cD) {
        for (let ID = 0; ID < this.chunks.length; ID += 3)
          if (this.chunks[ID] === DD && this.chunks[ID + 1] === CD && this.chunks[ID + 2] === cD) return !0;
        return !1
      }
    }
    const rC = .35,
      AC = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      FC = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      Dc = [.95, .2, .15];
    class Cc {
      constructor() {
        this.groups = []
      }
      add(DD, CD, cD, ID, pD) {
        let iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : zC;
        for (const fD of this.groups)
          if (pc(fD, ID, pD)) return fD.cells.push(DD, CD, cD), void fD.boxes.push(iD);
        this.groups.push({
          rgb: ID,
          look: pD,
          cells: [DD, CD, cD],
          boxes: [iD]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class cc {
      constructor(DD) {
        this.api = DD, this.shown = []
      }
      show(DD) {
        const CD = [];
        for (const cD of DD) {
          const DD = this.shown.findIndex((DD => {
            let {
              group: CD
            } = DD;
            return pc(CD, cD.rgb, cD.look) && ic(CD, cD)
          })); - 1 === DD ? CD.push(this.build(cD)) : (CD.push(this.shown[DD]), this.shown.splice(DD, 1))
        }
        this.dispose(), this.shown = CD
      }
      dispose() {
        for (const {
            meshes: DD
          }
          of this.shown)
          for (const CD of DD) this.api.disposeGameMesh(CD);
        this.shown = []
      }
      build(DD) {
        const {
          rgb: CD,
          look: cD,
          boxes: ID
        } = DD, pD = [CD[0] + (1 - CD[0]) * rC, CD[1] + (1 - CD[1]) * rC, CD[2] + (1 - CD[2]) * rC], iD = [this.buildMesh(DD.cells, CD, cD.alpha, ((DD, CD, pD, iD) => {
          Ic(DD, CD, pD, ID[iD], cD.size, !1)
        })), this.buildMesh(DD.cells, pD, cD.alpha, ((DD, CD, pD, iD) => {
          Ic(DD, CD, pD, ID[iD], cD.size, !0)
        }))];
        return cD.crossed && iD.push(this.buildMesh(DD.cells, CD, .9, ((DD, CD, ID) => {
          (0, EC.j)(DD, CD, ID, cD.size + .01, .12)
        }))), {
          group: DD,
          meshes: iD
        }
      }
      buildMesh(DD, CD, cD, ID) {
        const pD = [DD[0], DD[1], DD[2]],
          iD = [],
          fD = [];
        for (let bD = 0; bD < DD.length; bD += 3) ID(iD, fD, [DD[bD] - pD[0] + .5, DD[bD + 1] - pD[1] + .5, DD[bD + 2] - pD[2] + .5], bD / 3);
        return this.api.createGameMesh({
          positions: iD,
          indices: fD
        }, {
          rgb: [CD[0], CD[1], CD[2]],
          alpha: cD
        }, pD)
      }
    }

    function Ic(DD, CD, cD, ID, pD, iD) {
      for (let fD = 0; fD < ID.length; fD += 6) {
        const bD = [0, 0, 0],
          QD = [0, 0, 0];
        for (let DD = 0; DD < 3; DD++) bD[DD] = cD[DD] + ((ID[fD + DD] + ID[fD + DD + 3]) / 2 - .5) * pD, QD[DD] = (ID[fD + DD + 3] - ID[fD + DD]) * pD;
        (0, EC.d)(DD, CD, bD, QD, iD)
      }
    }

    function pc(DD, CD, cD) {
      return DD.rgb[0] === CD[0] && DD.rgb[1] === CD[1] && DD.rgb[2] === CD[2] && DD.look === cD
    }

    function ic(DD, CD) {
      if (DD.cells.length !== CD.cells.length) return !1;
      for (let cD = 0; cD < DD.cells.length; cD++)
        if (DD.cells[cD] !== CD.cells[cD]) return !1;
      return DD.boxes.every(((DD, cD) => DD === CD.boxes[cD]))
    }

    function fc(DD, CD) {
      return DD.getClientOption(CD, "blockReach") + 1
    }
    class bc {
      constructor(DD, CD, cD) {
        this.api = DD, this.localPlayerId = CD, this.pickNext = cD, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(DD) {
        const [CD, , cD] = DD.cameraDirection, ID = Math.hypot(CD, cD);
        ID > .001 && (this.heading = [CD / ID, cD / ID])
      }
      tapped(DD, CD, cD) {
        const ID = fc(this.api, this.localPlayerId),
          {
            origin: pD,
            direction: iD
          } = this.api.getActionRay(),
          fD = [...pD],
          bD = [
            [fD, [fD[0] + iD[0] * ID, fD[1] + iD[1] * ID, fD[2] + iD[2] * ID]]
          ];
        null !== DD && bD.push([fD, (0, RC.b)(DD)]), this.tap = {
          lines: bD,
          next: CD,
          ms: cD
        }
      }
      filled(DD, CD) {
        this.tap = null, this.turnFrom(DD, CD), this.retry(CD)
      }
      arrived(DD, CD) {
        const {
          tap: cD
        } = this;
        if (null === cD || CD - cD.ms > 1500) return null;
        const ID = (0, RC.b)(DD);
        return (0, RC.f)(cD.next, DD) || cD.lines.some((DD => {
          let [CD, cD] = DD;
          return function(DD, CD, cD) {
            const ID = [cD[0] - CD[0], cD[1] - CD[1], cD[2] - CD[2]],
              pD = [DD[0] - CD[0], DD[1] - CD[1], DD[2] - CD[2]],
              iD = ID[0] ** 2 + ID[1] ** 2 + ID[2] ** 2,
              fD = 0 === iD ? 0 : Math.min(1, Math.max(0, (pD[0] * ID[0] + pD[1] * ID[1] + pD[2] * ID[2]) / iD));
            return Math.hypot(pD[0] - ID[0] * fD, pD[1] - ID[1] * fD, pD[2] - ID[2] * fD)
          }(ID, CD, cD) <= .9
        })) ? (this.tap = null, this.turnFrom(DD, CD), cD.ms) : null
      }
      turnFrom(DD, CD) {
        this.pending = {
          from: DD,
          ms: CD,
          turnMs: Math.max(50, Math.min(250, CD - this.lastFillMs))
        }, this.lastFillMs = CD
      }
      retry(DD) {
        const {
          pending: CD
        } = this;
        if (null === CD) return;
        if (DD - CD.ms > 1500) return void(this.pending = null);
        const cD = this.pickNext((0, RC.b)(CD.from), (DD => (0, RC.f)(DD, CD.from)));
        if (null === cD) return;
        this.pending = null;
        const {
          turning: ID
        } = this;
        if (null !== ID && DD < ID.endMs && (0, RC.f)(ID.to, cD)) return;
        const pD = this.api.getActionRay().origin,
          iD = [cD[0] + .5 - pD[0], cD[1] + .5 - pD[1], cD[2] + .5 - pD[2]],
          fD = Math.hypot(iD[0], iD[2]);
        if (fD < .3) {
          const DD = Math.max(fD, .001);
          iD[0] = this.heading[0] * DD, iD[2] = this.heading[1] * DD
        }
        this.api.turnCamera(iD, CD.turnMs), this.turning = {
          to: cD,
          endMs: DD + CD.turnMs
        }
      }
    }
    class Qc {
      constructor(DD, CD, cD) {
        this.api = DD, this.localPlayerId = CD, this.juice = cD, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], this.lastFilled = null, this.lastSeenFilled = null, this.playerCells = [], this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = null, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new hC(DD), this.meshes = new cc(DD), this.outline = new uC(DD), this.turn = new bc(DD, CD, ((DD, CD) => this.pickNext(DD, CD)))
      }
      kt(DD) {
        const CD = "active" === DD[0] ? `${DD[1]}|${DD[3]}|${DD[4]}|${DD[5]}|${DD[6]}` : "";
        if ("active" !== DD[0]) "built" === DD[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , cD, ID, pD, iD] = DD;
          CD !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = cD) : cD === this.layerY ? this.burstUnlisted(ID) : cD > this.layerY && this.finishLayer(cD), this.layerY = cD, this.layerCells.has(cD) || this.layerCells.set(cD, ID.filter(Sc)), this.ghostCells = ID, this.palette = pD, this.occupiedCells = iD
        }
        CD !== this.blueprint && (this.blueprint = CD, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((DD => this.api.blockNameToBlockId(DD))), this.chunkWatch.watch([...this.ghostCells.filter(Sc), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(DD) {
        this.burstUnlisted([]), DD > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = DD)
      }
      wy() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const DD = performance.now();
        let CD = !1;
        for (const [pD, iD] of this.foreseen) {
          var cD;
          if (DD - iD > 1e3) this.foreseen.delete(pD), CD = !0, (null === (cD = this.lastFilled) || void 0 === cD ? void 0 : cD.join()) === pD && (this.lastFilled = this.lastSeenFilled)
        }
        const ID = wc(this.api.getPositionView(this.localPlayerId));
        (CD || ID.some(((DD, CD) => DD !== this.playerCells[CD]))) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(DD) {
        const CD = new Set;
        for (let pD = 0; pD < DD.length; pD += 4) CD.add(`${DD[pD]},${DD[pD+1]},${DD[pD+2]}`);
        const cD = [],
          {
            ghostCells: ID
          } = this;
        for (let pD = 0; pD < ID.length; pD += 4) {
          const DD = `${ID[pD]},${ID[pD+1]},${ID[pD+2]}`;
          !CD.has(DD) && this.open.delete(DD) && cD.push(this.filledCell(pD))
        }
        this.burst(cD)
      }
      refresh() {
        const {
          ghostCells: DD,
          palette: CD,
          occupiedCells: cD
        } = this, ID = new Cc, pD = new Set, iD = [], fD = [];
        for (let bD = 0; bD < DD.length; bD += 4) {
          const [cD, QD, wD, SD] = [DD[bD], DD[bD + 1], DD[bD + 2], DD[bD + 3]], BD = this.api.getBlockId(cD, QD, wD), yD = `${cD},${QD},${wD}`, MD = xC(this.blockIds[SD], BD);
          !MD && qC(BD) ? ID.add(cD, QD, wD, KC(CD[SD]), AC, GC(CD[SD])) : MD ? this.open.has(yD) && iD.push(this.filledCell(bD)) : ID.add(cD, QD, wD, Dc, FC), !MD && this.api.isBlockInLoadedChunk(cD, QD, wD) && (pD.add(yD), fD.push(cD, QD, wD, qC(BD) ? 0 : 1))
        }
        this.open = pD, this.nextCells = fD;
        for (let bD = 0; bD < cD.length; bD += 3) {
          const [DD, CD, pD] = [cD[bD], cD[bD + 1], cD[bD + 2]];
          qC(this.api.getBlockId(DD, CD, pD)) || ID.add(DD, CD, pD, Dc, FC)
        }
        this.meshes.show(ID.toArray()), this.burst(iD), this.showNext(), this.turn.retry(performance.now())
      }
      burst(DD) {
        const CD = performance.now(),
          cD = [];
        for (const [pD, iD, fD] of DD) {
          const DD = [pD, iD, fD];
          this.lastSeenFilled = DD, this.foreseen.delete(DD.join()) || cD.push(DD)
        }
        const ID = this.isHolding(CD);
        for (const pD of cD) {
          if (this.lastFilled = pD, ID && this.pressFilled) {
            this.turn.filled(pD, CD);
            continue
          }
          const DD = this.turn.arrived(pD, CD);
          if (null !== DD) {
            this.pressFilled = ID;
            for (const [CD, cD] of this.foreseen) cD <= DD && this.foreseen.delete(CD)
          }
        }
        this.juice.filled(DD)
      }
      showNext() {
        var DD;
        const CD = this.api.getPositionView(this.localPlayerId);
        this.playerCells.splice(0, 1 / 0, ...wc(CD));
        const cD = this.lastFilled;
        this.nextCell = this.pickNext(null === cD ? [CD[0], CD[1] + 1, CD[2]] : (0, RC.b)(cD), (() => !1)), this.outline.show(null !== (DD = this.aimed) && void 0 !== DD ? DD : this.nextCell)
      }
      pickNext(DD, CD) {
        const cD = this.api.getPositionView(this.localPlayerId),
          ID = [cD[0], cD[1] + kC.h.XN * kC.h.playerEyeToHeightRatio, cD[2]],
          pD = fc(this.api, this.localPlayerId),
          {
            nextCells: iD
          } = this,
          fD = DD => [iD[DD], iD[DD + 1], iD[DD + 2]],
          bD = function(DD, CD, cD, ID, pD, iD) {
            let fD = -1,
              bD = -1,
              QD = 1 / 0;
            for (let wD = 0; wD < DD.length; wD += CD) {
              const CD = (iD(wD) ? 2 : 0) + (ID(wD) ? 1 : 0);
              if (CD < bD || pD(wD)) continue;
              const SD = (DD[wD] + .5 - cD[0]) ** 2 + (DD[wD + 1] + .5 - cD[1]) ** 2 + (DD[wD + 2] + .5 - cD[2]) ** 2;
              (CD > bD || SD < QD) && (fD = wD, bD = CD, QD = SD)
            }
            return fD
          }(iD, 4, DD, (DD => 1 === iD[DD + 3]), (DD => {
            const ID = fD(DD);
            return dC(ID, cD) || this.foreseen.has(ID.join()) || CD(ID)
          }), (DD => function(DD, CD, cD) {
            return (CD[0] + .5 - DD[0]) ** 2 + (CD[1] + .5 - DD[1]) ** 2 + (CD[2] + .5 - DD[2]) ** 2 <= cD ** 2
          }(ID, fD(DD), pD)));
        return -1 === bD ? null : fD(bD)
      }
      afterRender(DD) {
        var CD;
        this.turn.look(DD);
        const cD = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === cD ? null : cD.position), this.outline.show(null !== (CD = this.aimed) && void 0 !== CD ? CD : this.nextCell)
      }
      isHolding(DD) {
        return null !== this.altMs && DD - this.altMs <= 500
      }
      attemptAltAction(DD) {
        const CD = performance.now();
        if (this.isHolding(CD) || (this.pressFilled = !1), this.altMs = CD, this.pressFilled) return "preventPlacement";
        const cD = this.findAimed(DD);
        if (null !== cD) return this.foreseen.set(cD.join(), CD), this.lastFilled = cD, this.aimed = null, this.showNext(), this.turn.filled(cD, CD), this.pressFilled = !0, "preventPlacement";
        null !== this.nextCell && this.turn.tapped(DD, this.nextCell, CD)
      }
      findAimed(DD) {
        return function(DD, CD, cD, ID, pD, iD, fD) {
          const bD = DD.FDD(CD),
            QD = null === bD || null === DD.blockNameToBlockId(bD.name, !0) ? null : bD.name,
            wD = DD.getPositionView(CD),
            {
              origin: SD,
              direction: BD
            } = DD.getActionRay(),
            yD = YC(ID, {
              from: SD,
              dir: BD,
              reach: fc(DD, CD),
              solid: cD
            }, (CD => {
              const cD = [ID[CD], ID[CD + 1], ID[CD + 2]];
              return !xC(pD[ID[CD + 3]], DD.getBlockId(...cD)) && !fD.has(cD.join()) && DD.isBlockInLoadedChunk(...cD) && !dC(cD, wD)
            }), (DD => null === QD || QD === JC(pD[ID[DD + 3]])), (DD => null !== iD && ID[DD] === iD[0] && ID[DD + 1] === iD[1] && ID[DD + 2] === iD[2]));
          return -1 === yD ? null : [ID[yD], ID[yD + 1], ID[yD + 2]]
        }(this.api, this.localPlayerId, DD, this.ghostCells, this.blockIds, this.nextCell, this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(DD) {
        const {
          ghostCells: CD
        } = this, [cD, ID, pD] = KC(this.palette[CD[DD + 3]]);
        return [CD[DD], CD[DD + 1], CD[DD + 2], cD, ID, pD]
      }
    }

    function wc(DD) {
      let [CD, cD, ID] = DD;
      const pD = kC.h.vN / 2;
      return [Math.floor(CD), Math.floor(cD), Math.floor(ID), Math.floor(CD - pD), Math.floor(CD + pD), Math.floor(cD + kC.h.XN), Math.floor(ID - pD), Math.floor(ID + pD)]
    }

    function Sc(DD, CD) {
      return CD % 4 !== 3
    }

    function Bc(DD, CD, cD, ID, pD) {
      if (!DD.isBlockInLoadedChunk(CD, ID - 6, cD) || !DD.isBlockInLoadedChunk(CD, ID + 6 + pD, cD) || !DD.canModifyBlockAt(CD, ID, cD)) return NaN;
      let iD = ID - 1;
      if (0 !== DD.getBlockId(CD, iD, cD)) {
        for (; iD < ID + 6 && 0 !== DD.getBlockId(CD, iD + 1, cD);) iD++;
        return iD
      }
      for (; iD > ID - 6;)
        if (iD--, 0 !== DD.getBlockId(CD, iD, cD)) return iD;
      return NaN
    }

    function yc(DD, CD, cD, ID, pD) {
      let iD = 0;
      for (let fD = ID + 1; fD <= ID + pD; fD++) 0 !== DD.getBlockId(CD, fD, cD) && iD++;
      return iD
    }

    function Mc(DD) {
      const CD = new Map;
      for (const fD of DD) {
        var cD;
        if (Number.isNaN(fD)) return null;
        CD.set(fD, (null !== (cD = CD.get(fD)) && void 0 !== cD ? cD : 0) + 1)
      }
      let ID = NaN,
        pD = 0;
      for (const [fD, bD] of CD)(bD > pD || bD === pD && fD < ID) && (ID = fD, pD = bD);
      let iD = 0;
      for (const fD of DD) iD += Math.abs(fD - ID);
      return iD
    }

    function tc(DD, CD, cD, ID) {
      const {
        eye: pD,
        forward: iD,
        tanHalfFovX: fD,
        tanHalfFovY: bD
      } = DD, [QD, wD] = function(DD) {
        let [CD, cD, ID] = DD;
        const pD = Math.hypot(CD, ID),
          [iD, fD] = [ID / pD, -CD / pD];
        return [
          [iD, 0, fD],
          [cD * fD, ID * iD - CD * fD, -cD * iD]
        ]
      }(iD), [SD, BD] = [CD * fD, cD * bD], yD = iD[0] + SD * QD[0] + BD * wD[0], MD = iD[1] + BD * wD[1], tD = iD[2] + SD * QD[2] + BD * wD[2], ZD = (ID - pD[1]) / MD;
      return ZD > 0 && ZD < 1 / 0 ? [pD[0] + ZD * yD, pD[2] + ZD * tD] : null
    }
    const Zc = "plotsBlueprintPlacementChanged",
      oc = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class vc {
      constructor(DD, CD) {
        this.api = DD, this.localPlayerId = CD, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = DD => {
          var CD, cD, ID, iD;
          const fD = null !== (CD = null === (cD = this.placing) || void 0 === cD ? void 0 : cD.rotation) && void 0 !== CD ? CD : 0,
            {
              size: bD
            } = dD(DD, fD),
            QD = this.api.FX(this.localPlayerId),
            [wD, SD] = null !== (ID = null !== (iD = function(DD, CD, cD) {
              const [ID, pD, iD] = CD, [fD, bD, QD] = [Math.floor(cD[0]), Math.floor(cD[1]), Math.floor(cD[2])], wD = 6 + Math.max(ID, iD) / 2, [SD, BD] = [Math.ceil(wD + ID / 2), Math.ceil(wD + iD / 2)], [yD, MD] = [fD - SD, QD - BD], [tD, ZD] = [2 * SD + 1, 2 * BD + 1], oD = new Float64Array(tD * ZD), vD = new Uint16Array(tD * ZD);
              for (let mD = 0; mD < tD; mD++)
                for (let CD = 0; CD < ZD; CD++) {
                  const cD = Bc(DD, yD + mD, MD + CD, bD, pD);
                  oD[mD * ZD + CD] = cD, Number.isNaN(cD) || (vD[mD * ZD + CD] = yc(DD, yD + mD, MD + CD, cD, pD))
                }
              const ND = [];
              let gD = null,
                XD = 1 / 0;
              for (let mD = 0; mD + ID <= tD; mD++)
                for (let DD = 0; DD + iD <= ZD; DD++) {
                  const [CD, pD] = [yD + mD, MD + DD], bD = Math.hypot(CD + ID / 2 - cD[0], pD + iD / 2 - cD[2]);
                  if (bD > wD || fD >= CD - 2 && fD < CD + ID + 2 && QD >= pD - 2 && QD < pD + iD + 2) continue;
                  ND.length = 0;
                  let SD = 0;
                  for (let cD = 0; cD < ID; cD++)
                    for (let CD = 0; CD < iD; CD++) ND.push(oD[(mD + cD) * ZD + DD + CD]), SD += vD[(mD + cD) * ZD + DD + CD];
                  const BD = Mc(ND);
                  if (null === BD) continue;
                  const tD = bD + 3 * (BD + SD);
                  tD < XD && (XD = tD, gD = [CD, pD])
                }
              return gD
            }(this.api, bD, QD)) && void 0 !== iD ? iD : this.cornerOnTarget(bD)) && void 0 !== ID ? ID : [Math.floor(QD[0]) + 2, Math.floor(QD[2])];
          this.placing = {
            id: DD,
            rotation: fD,
            corner: [wD, this.playerLevel(), SD],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null
          }, this.update(), this.api.sendCommand(`${pD} preview`)
        }, this.rotate = () => {
          const {
            id: DD,
            rotation: CD,
            corner: cD
          } = this.placing, pD = ID[(ID.indexOf(CD) + 1) % ID.length], [iD, , fD] = dD(DD, CD).size, [bD, , QD] = dD(DD, pD).size;
          this.moveTo(cD[0] + Math.floor(iD / 2) - Math.floor(bD / 2), cD[2] + Math.floor(fD / 2) - Math.floor(QD / 2), pD)
        }, this.hoverAt = (DD, CD) => {
          this.placing.hover = [DD, CD], this.moveCentreTo(this.camera, DD, CD)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (DD, CD) => {
          const cD = this.placing,
            {
              eye: ID,
              forward: pD,
              tanHalfFovX: iD,
              tanHalfFovY: fD
            } = this.camera,
            bD = {
              eye: [ID[0], ID[1], ID[2]],
              forward: [pD[0], pD[1], pD[2]],
              tanHalfFovX: iD,
              tanHalfFovY: fD
            },
            QD = cD.corner[1],
            wD = tc(bD, DD, CD, QD);
          cD.hover = null, cD.drag = wD && {
            view: bD,
            ground: wD,
            corner: [cD.corner[0], cD.corner[2]],
            level: QD
          }
        }, this.dragTo = (DD, CD) => {
          const cD = this.placing.drag,
            ID = cD && tc(cD.view, DD, CD, cD.level);
          null !== cD && null !== ID && this.moveTo(cD.corner[0] + Math.round(ID[0] - cD.ground[0]), cD.corner[1] + Math.round(ID[1] - cD.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const DD = this.view;
          DD.waiting || (DD.blocked ? this.Uo({
            ...DD,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const DD = this.placing,
            {
              id: CD,
              rotation: cD,
              corner: ID
            } = DD;
          this.api.sendCommand(`${pD} place ${CD} ${ID.join(" ")} ${cD}`), DD.sent = {
            atMs: performance.now(),
            corner: [...ID],
            rotation: cD,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${pD} preview off`))
        }, this.chunkWatch = new hC(DD), this.meshes = new cc(DD)
      }
      getView() {
        return this.view
      }
      wy() {
        const DD = this.placing;
        null !== DD && (null !== DD.sent && !DD.sent.timedOut && performance.now() - DD.sent.atMs > 3e3 ? (DD.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(DD) || this.chunkWatch.changed()) && this.update())
      }
      afterRender(DD) {
        const CD = this.placing;
        null !== CD && (! function(DD, CD) {
          for (let cD = 0; cD < 3; cD++) CD.eye[cD] = DD.cameraPosition[cD], CD.forward[cD] = DD.cameraDirection[cD];
          CD.tanHalfFovX = DD.tanHalfFovX, CD.tanHalfFovY = DD.tanHalfFovY
        }(DD, this.camera), null !== CD.hover && this.moveCentreTo(this.camera, CD.hover[0], CD.hover[1]))
      }
      kt(DD) {
        const CD = this.placing;
        if (null === CD || null === CD.sent || "active" !== DD[0]) return;
        const {
          sent: cD
        } = CD, [, ID, pD, iD, fD, bD, QD] = DD;
        pD && ID === CD.id && QD === cD.rotation && iD === cD.corner[0] && fD === cD.corner[1] && bD === cD.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(DD) {
        let [CD, , cD] = DD;
        const ID = this.api.getTargetedBlock();
        if (null === ID) return null;
        const [pD, , iD] = ID.position;
        return [pD - Math.floor(CD / 2), iD - Math.floor(cD / 2)]
      }
      playerLevel() {
        var DD;
        const [CD, cD, ID] = this.api.FX(this.localPlayerId);
        if (null !== (DD = this.api.getLocalPlayerMovement()) && void 0 !== DD && DD.onGround) return Math.ceil(cD - .01);
        const [pD, iD, fD] = [Math.floor(CD), Math.floor(cD), Math.floor(ID)];
        for (let bD = iD; bD >= iD - 2; bD--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(pD, bD, fD))) return bD + 1;
        return iD
      }
      followPlayerLevel(DD) {
        if (Nc(DD)) return !1;
        const CD = this.playerLevel();
        return CD !== DD.corner[1] && (DD.corner[1] = CD, !0)
      }
      moveCentreTo(DD, CD, cD) {
        const ID = this.placing,
          pD = tc(DD, CD, cD, ID.corner[1]);
        if (null !== pD) {
          const [DD, , CD] = dD(ID.id, ID.rotation).size;
          this.moveTo(Math.round(pD[0] - DD / 2), Math.round(pD[1] - CD / 2))
        }
      }
      moveTo(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const ID = this.placing;
        if (Nc(ID)) return;
        const [pD, iD, fD] = ID.corner;
        if (this.centreOnPlot(pD, fD) && !this.centreOnPlot(DD, CD, cD))
          if (this.centreOnPlot(DD, fD, cD)) CD = fD;
          else {
            if (!this.centreOnPlot(pD, CD, cD)) return;
            DD = pD
          } DD === pD && CD === fD && cD === ID.rotation || (ID.rotation = cD, ID.corner = [DD, iD, CD], this.update())
      }
      centreOnPlot(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: ID,
          corner: pD
        } = this.placing, [iD, , fD] = dD(ID, cD).size;
        return this.api.canModifyBlockAt(DD + Math.floor(iD / 2), pD[1], CD + Math.floor(fD / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.Uo(null)
      }
      update() {
        const {
          id: DD,
          rotation: CD,
          corner: cD,
          refusals: ID
        } = this.placing, pD = new Cc, iD = [];
        let fD = !1,
          bD = 0;
        for (const {
            offset: SD,
            block: BD
          }
          of dD(DD, CD).cells) {
          const [DD, CD, ID] = [cD[0] + SD[0], cD[1] + SD[1], cD[2] + SD[2]];
          iD.push(DD, CD, ID);
          const QD = !this.api.canModifyBlockAt(DD, CD, ID),
            wD = this.api.getBlockId(DD, CD, ID),
            yD = !qC(wD) && !xC(this.api.blockNameToBlockId(BD), wD);
          fD ||= QD, bD += yD ? 1 : 0, QD || yD ? pD.add(DD, CD, ID, Dc, FC) : pD.add(DD, CD, ID, KC(BD), oc, GC(BD))
        }
        this.chunkWatch.watch(iD), this.meshes.show(pD.toArray());
        const QD = this.view,
          wD = Nc(this.placing);
        (null === QD || void 0 === QD ? void 0 : QD.id) === DD && QD.blocked === fD && QD.toClear === bD && QD.waiting === wD && QD.refusals === ID || this.Uo({
          id: DD,
          blocked: fD,
          toClear: bD,
          waiting: wD,
          refusals: ID
        })
      }
      Uo(DD) {
        this.view = DD, SD.i.Uo(Zc, DD, !0)
      }
    }

    function Nc(DD) {
      let {
        sent: CD
      } = DD;
      return null !== CD && !CD.timedOut
    }
    var gc = cD(4081),
      Xc = cD(38478);

    function mc(DD, CD, cD) {
      const ID = [255 * DD, 255 * CD, 255 * cD],
        [pD, iD, fD] = ID.map((DD => DD + .4 * (255 - DD)));
      return {
        texture: "square_particle",
        LB: 48,
        minLifeTime: .3 / Xc.c,
        maxLifeTime: .55 / Xc.c,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * Xc.c * Xc.c, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...ID, 1],
          maxColor: [pD, iD, fD, 1]
        }, {
          timeFraction: 1,
          minColor: [...ID, 0],
          maxColor: [pD, iD, fD, 0]
        }],
        blendMode: gc.c.Standard
      }
    }
    const nc = {
      texture: "glint",
      mipmaps: !1,
      LB: 96,
      minLifeTime: .5 / Xc.c,
      maxLifeTime: .9 / Xc.c,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * Xc.c * Xc.c, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: gc.c.OneOne
    };
    class Oc {
      constructor(DD, CD) {
        this.api = DD, this.localPlayerId = CD, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(DD) {
        if (this.api.particlesEnabled())
          for (const [CD, cD, ID, pD, iD, fD] of DD.slice(0, 3)) {
            const DD = `${pD},${iD},${fD}`;
            let bD = this.chips.get(DD);
            void 0 === bD && (bD = this.api.createParticles(mc(pD, iD, fD), {
              pos: [CD + .5, cD + .5, ID + .5]
            }), this.chips.set(DD, bD));
            for (let CD = 0; CD < 8; CD++) this.setPoint(CD, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            bD.emitPoints([CD + .5, cD + .5, ID + .5], this.points, 8)
          }
      }
      layerDone(DD) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const CD = DD.length / 3;
        if (0 === CD || !this.api.particlesEnabled()) return;
        const cD = Math.min(CD, 48),
          [ID, pD, iD] = [DD[0] + .5, DD[1] + 1, DD[2] + .5];
        let fD = 0;
        for (let bD = 0; bD < cD; bD++) {
          const QD = 3 * Math.floor(bD * CD / cD);
          for (let CD = 0; CD < 2; CD++) this.setPoint(fD++, DD[QD] + Math.random() - ID, DD[QD + 1] + 1 - pD, DD[QD + 2] + Math.random() - iD, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(nc, {
          pos: [ID, pD, iD]
        }), this.sparkles.emitPoints([ID, pD, iD], this.points, fD)
      }
      dispose() {
        var DD;
        for (const CD of this.chips.values()) CD.stop();
        this.chips.clear(), null === (DD = this.sparkles) || void 0 === DD || DD.stop(), this.sparkles = null
      }
      setPoint(DD, CD, cD, ID, pD) {
        const iD = 4 * DD;
        this.points[iD] = CD, this.points[iD + 1] = cD, this.points[iD + 2] = ID, this.points[iD + 3] = pD
      }
    }
    var Pc = cD(1961);
    const Hc = "SpecialAction1",
      Uc = "KeyY",
      xc = "KeyX";

    function qc(DD) {
      let {
        placement: CD
      } = DD;
      const cD = (0, xD.g)(Zc, CD.getView()),
        {
          t: ID
        } = (0, JD.F)(),
        {
          isTouchScreen: pD
        } = (0, bD.o)(["isTouchScreen"]),
        iD = null !== cD,
        fD = iD && !cD.blocked && !cD.waiting;
      if ((0, UD.e)((DD => iD && !DD.repeat && !(0, wD.isTypingInInput)() && !(0, QD.s)() && !pD), (DD => {
          const cD = function(DD, CD, cD) {
            if (DD === xc) return CD.stop;
            if (DD === Uc) return cD ? CD.build : Kc;
            return Pc.q[Hc].includes(DD) ? CD.rotate : null
          }(DD.code, CD, fD);
          null !== cD && (DD.stopPropagation(), cD())
        })), !iD) return null;
      let SD = pD ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return cD.blocked ? SD = "plotsGame:placementOffPlot" : cD.toClear > 0 && (SD = "plotsGame:placementClear"), (0, WD.jsx)(fC.e, {
        placement: "bottom",
        children: (0, WD.jsxs)("div", {
          className: "PlotsPlacementCard",
          children: [(0, WD.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: ID(tD(cD.id).displayName.translationKey)
          }), (0, WD.jsx)("div", {
            className: nD()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: cD.refusals > 0
            }),
            children: ID(SD)
          }, cD.refusals), (0, WD.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, WD.jsxs)(PD.i, {
              onClick: CD.rotate,
              children: [(0, WD.jsx)(Jc, {
                noaAction: Hc
              }), ID("plotsGame:placementRotate")]
            }), (0, WD.jsxs)(PD.J, {
              onClick: CD.stop,
              children: [(0, WD.jsx)(Jc, {
                keyCode: xc
              }), ID("general:cancel")]
            }), (0, WD.jsxs)(PD.o, {
              disabled: !fD,
              onClick: CD.build,
              children: [(0, WD.jsx)(Jc, {
                keyCode: Uc
              }), ID("plotsGame:placementBuild")]
            })]
          })]
        })
      })
    }

    function Jc(DD) {
      return (0, WD.jsx)(QC.d, {
        className: "PlotsPlacementKey",
        ...DD
      })
    }

    function Kc() {}
    var ac = cD(4337);
    class Vc {
      constructor(DD) {
        this.placement = DD, this.press = null
      }
      down(DD) {
        if (null !== this.press) return !1;
        const {
          id: CD,
          mouse: cD,
          x: ID,
          y: pD,
          atMs: iD
        } = DD;
        return this.press = {
          id: CD,
          mouse: cD,
          x: ID,
          y: pD,
          atMs: iD,
          moved: !1
        }, cD || this.placement.beginDrag(DD.ndcX, DD.ndcY), !0
      }
      move(DD) {
        const CD = this.press;
        null !== CD && CD.id === DD.id && (CD.moved ||= Math.hypot(DD.x - CD.x, DD.y - CD.y) > 8), DD.mouse ? this.placement.hoverAt(DD.ndcX, DD.ndcY) : (null === CD || void 0 === CD ? void 0 : CD.id) === DD.id && this.placement.dragTo(DD.ndcX, DD.ndcY)
      }
      up(DD) {
        const CD = this.press;
        (null === CD || void 0 === CD ? void 0 : CD.id) === DD.id && (this.move(DD), this.end(), !CD.moved && (CD.mouse || DD.atMs - CD.atMs <= 250) && this.placement.tap())
      }
      cancel(DD) {
        var CD;
        (null === (CD = this.press) || void 0 === CD ? void 0 : CD.id) === DD && this.end()
      }
      leave(DD) {
        let {
          id: CD,
          mouse: cD
        } = DD;
        cD && this.placement.endHover(), this.cancel(CD)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }

    function zc(DD) {
      let {
        placement: CD
      } = DD;
      return null === (0, xD.g)(Zc, CD.getView()) ? null : (0, WD.jsx)(jc, {
        placement: CD
      })
    }

    function jc(DD) {
      let {
        placement: CD
      } = DD;
      (0, ac.e)(!0, !0, "PlotsPlacementLayer");
      const cD = (0, iD.useMemo)((() => new Vc(CD)), [CD]);
      return (0, WD.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: DD => {
          "mouse" === DD.pointerType && 0 !== DD.button || !cD.down(lc(DD)) || DD.currentTarget.setPointerCapture(DD.pointerId)
        },
        onPointerMove: DD => {
          cD.move(lc(DD))
        },
        onPointerUp: DD => {
          cD.up(lc(DD))
        },
        onPointerCancel: DD => {
          cD.cancel(DD.pointerId)
        },
        onLostPointerCapture: DD => {
          cD.cancel(DD.pointerId)
        },
        onPointerLeave: DD => {
          cD.leave(lc(DD))
        },
        "aria-hidden": !0
      })
    }

    function lc(DD) {
      const {
        left: CD,
        top: cD,
        width: ID,
        height: pD
      } = DD.currentTarget.getBoundingClientRect();
      return {
        id: DD.pointerId,
        mouse: "mouse" === DD.pointerType,
        x: DD.clientX,
        y: DD.clientY,
        ndcX: (DD.clientX - CD) / ID * 2 - 1,
        ndcY: 1 - (DD.clientY - cD) / pD * 2,
        atMs: DD.timeStamp
      }
    }
    var Lc = cD(2308),
      Tc = cD(36085),
      Gc = cD(1954),
      Rc = cD(1260);
    const kc = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function dc(DD) {
      let {
        hud: CD
      } = DD;
      const cD = (0, xD.g)(SC, CD.getPlot()),
        [ID, pD] = (0, iD.useState)(null),
        fD = (0, Tc.i)(ID);
      if ("none" === cD[0]) return null;
      const [, bD, QD, wD, SD, BD] = cD;
      return (0, WD.jsx)("div", {
        className: nD()("PlotsPlotBannerContainer", {
          Below: fD
        }),
        children: (0, WD.jsx)(Yc, {
          plotX: bD,
          plotZ: QD,
          ownerName: wD,
          ownerId: SD,
          relation: BD,
          plaqueRef: pD
        }, `${bD},${QD}`)
      })
    }

    function Yc(DD) {
      var CD, cD;
      let {
        plotX: ID,
        plotZ: pD,
        ownerName: iD,
        ownerId: fD,
        relation: bD,
        plaqueRef: QD
      } = DD;
      const {
        t: wD
      } = (0, JD.F)(), SD = (0, Gc.h)("hiddenPlayerNames"), BD = (0, Gc.h)("players"), yD = null === fD ? null : null !== (CD = null === (cD = BD.byId[fD]) || void 0 === cD ? void 0 : cD.cosmetics) && void 0 !== CD ? CD : null, MD = wD("plotsGame:plotBannerCoords", {
        x: ID,
        z: pD
      }), tD = "own" === bD || null !== iD;
      return (0, WD.jsxs)("div", {
        ref: QD,
        className: nD()("PlotsPlotBanner", {
          Own: "own" === bD,
          Shared: "shared" === bD
        }),
        role: "status",
        children: [(0, WD.jsxs)("span", {
          className: nD()("PlotsPlotBannerSeal", {
            Face: null !== yD
          }),
          children: [null !== yD && (0, WD.jsx)(Lc.e, {
            cosmetics: yD
          }), null === yD && (0, WD.jsx)(OD.c, {
            name: kc[bD]
          })]
        }), (0, WD.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, WD.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === bD && wD("plotsGame:plotBannerYours"), "own" !== bD && null !== iD && wD("plotsGame:plotBannerOwner", {
              name: (0, Rc.f)(iD, SD)
            }), !tD && MD]
          }), tD && (0, WD.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [MD, "shared" === bD && (0, WD.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: wD("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }

    function Wc(DD) {
      let {
        progress: CD,
        goal: cD
      } = DD;
      const ID = Math.min(CD, cD);
      return (0, WD.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, WD.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": cD,
          "aria-valuenow": ID,
          children: (0, WD.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${ID/cD})`
            }
          })
        }), (0, WD.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [ID, "/", cD]
        })]
      })
    }

    function sc(DD) {
      return {
        translationKey: `plotsGame:${DD}`,
        actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
      }
    }
    const Ec = {
      house: {
        icon: "house",
        titleKey: "plotsGame:starterLotHouseTitle",
        desktop: sc("starterLotHouseHint", ["alt-fire"]),
        touch: sc("starterLotHouseHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotHousePlain"
      },
      garden: {
        icon: "sparkle",
        titleKey: "plotsGame:starterLotGarden",
        desktop: sc("starterLotGardenHint", ["alt-fire"]),
        touch: sc("starterLotGardenHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotGardenPlain"
      },
      boulder: {
        icon: "hammer",
        titleKey: "plotsGame:starterLotBoulder",
        desktop: sc("starterLotBreakHint", ["primary-fire"]),
        touch: sc("starterLotBreakHintTouch"),
        plainKey: "plotsGame:starterLotBreakPlain"
      },
      fly: {
        icon: "angles-up",
        titleKey: "plotsGame:starterLotFly",
        desktop: sc("starterLotFlyHint", ["jump"]),
        touch: sc("starterLotFlyHintTouch"),
        plainKey: "plotsGame:starterLotFlyPlain"
      },
      backpack: {
        icon: "backpack",
        titleKey: "plotsGame:starterLotBackpack",
        desktop: sc("starterLotBackpackHint", ["OpenInventory"]),
        touch: sc("starterLotBackpackHintTouch"),
        plainKey: "plotsGame:starterLotBackpackPlain"
      },
      neighbour: {
        icon: "person",
        titleKey: "plotsGame:starterLotNeighbour",
        desktop: sc("starterLotNeighbourHint", ["forward", "left", "backward", "right"]),
        touch: sc("starterLotNeighbourHintTouch"),
        plainKey: "plotsGame:starterLotNeighbourPlain"
      }
    };

    function ec(DD, CD, cD) {
      const {
        translationKey: ID,
        actions: pD
      } = cD ? CD.touch : CD.desktop;
      if (0 === pD.length) return DD(ID);
      const iD = [];
      for (const fD of pD) {
        const ID = (0, Pc.p)(fD, cD),
          pD = Pc.q[fD][0];
        if (null === ID && void 0 === pD) return DD(CD.plainKey);
        iD.push(null === ID ? (0, Pc.m)(pD) : DD(ID.translationKey))
      }
      return DD(ID, {
        key: iD.join("")
      })
    }

    function uc(DD) {
      let {
        hud: CD
      } = DD;
      const cD = (0, xD.g)(wC, CD.getStep()),
        {
          t: ID
        } = (0, JD.F)();
      return (0, WD.jsxs)(fC.e, {
        placement: "bottom",
        children: ["step" === cD[0] && (0, WD.jsx)(hc, {
          step: cD[1],
          progress: cD[2],
          goal: cD[3]
        }, cD[1]), "celebrate" === cD[0] && (0, WD.jsx)(rc, {
          className: nD()("Celebrate", {
            Gold: "house" === cD[1]
          }),
          icon: "star",
          title: ID("house" === cD[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
        }, `celebrate-${cD[1]}`)]
      })
    }

    function hc(DD) {
      let {
        step: CD,
        progress: cD,
        goal: ID
      } = DD;
      const {
        isTouchScreen: pD
      } = (0, bD.o)(["isTouchScreen"]), {
        t: iD
      } = (0, JD.F)(), fD = Ec[CD];
      return (0, WD.jsxs)(rc, {
        icon: fD.icon,
        title: iD(fD.titleKey),
        children: [(0, WD.jsx)("div", {
          className: "PlotsStepCardHint SmallTextLight",
          children: ec(iD, fD, pD)
        }), ID > 1 && (0, WD.jsx)(Wc, {
          progress: cD,
          goal: ID
        }), "backpack" === CD && pD && (0, WD.jsx)(Ac, {})]
      })
    }

    function rc(DD) {
      let {
        className: CD,
        icon: cD,
        title: ID,
        children: pD
      } = DD;
      return (0, WD.jsxs)("div", {
        className: nD()("PlotsStepCard", CD),
        role: "status",
        children: [(0, WD.jsx)("span", {
          className: "PlotsStepCardIcon",
          children: (0, WD.jsx)(OD.c, {
            name: cD
          })
        }), (0, WD.jsxs)("div", {
          className: "PlotsStepCardBody",
          children: [(0, WD.jsx)("div", {
            className: "PlotsStepCardTitle SmallTextBold",
            children: ID
          }), pD]
        })]
      })
    }

    function Ac() {
      return (0, iD.useEffect)((() => (bD.d.set({
        backpackPointerRequested: !0
      }), () => {
        bD.d.set({
          backpackPointerRequested: !1
        })
      })), []), null
    }
    const Fc = function(DD, CD, cD, ID) {
      let {
        localPlayerId: pD
      } = ID;
      const bD = new BC;
      let QD = null,
        wD = null,
        SD = null,
        BD = null,
        yD = null;
      const MD = [];
      return {
        onCreate: DD => {
          QD = new Oc(DD, pD), wD = new Qc(DD, pD, QD), SD = new Qc(DD, pD, QD), BD = new vc(DD, pD), yD = new XD(DD, BD), MD.push((0, fD.v)((0, iD.createElement)(iD.Fragment, null, (0, iD.createElement)(dc, {
            hud: bD
          }), (0, iD.createElement)(uc, {
            hud: bD
          }), (0, iD.createElement)(MC, {
            hud: bD,
            journal: yD
          }), (0, iD.createElement)(zc, {
            placement: BD
          }), (0, iD.createElement)(qc, {
            placement: BD
          })), {
            content: (0, iD.createElement)(pC, {
              journal: yD
            })
          }))
        },
        wy: () => {
          wD.wy(), SD.wy(), BD.wy(), yD.wy()
        },
        onPlayerAttemptAltAction: (DD, CD, cD, ID, pD, iD) => {
          var fD;
          if (null !== iD) return;
          const bD = void 0 === CD ? null : [CD, cD, ID];
          return null !== (fD = wD.attemptAltAction(bD)) && void 0 !== fD ? fD : SD.attemptAltAction(bD)
        },
        onPlayerClickUp: () => {
          wD.endPress(), SD.endPress()
        },
        onAfterRender: (DD, CD) => {
          BD.afterRender(CD), wD.afterRender(CD), SD.afterRender(CD)
        },
        onClose: () => {
          for (const DD of MD) DD();
          QD.dispose(), wD.dispose(), SD.dispose(), BD.dispose(), QD = null, wD = null, SD = null, BD = null, yD = null
        },
        onReceivedMessageFromServer: (DD, CD) => {
          if ("plotsStarterLot" === DD) bD.receiveStep(CD);
          else if ("plotsPlot" === DD) bD.receivePlot(CD);
          else if ("plotsStarterHouse" === DD) wD.kt(CD);
          else if ("plotsBlueprint" === DD) {
            const DD = CD;
            SD.kt(DD), BD.kt(DD)
          } else "plotsJournal" === DD ? yD.kt(CD) : "plotsJournalOpen" === DD ? yD.openFromServer() : "plotsPreviewEnd" === DD && BD.endFromServer()
        }
      }
    }
  },
  38478: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID,
      f: () => iD
    });
    const ID = 1 / .6,
      pD = {
        kind: "smokePuff"
      };
    class iD {
      constructor(DD, CD, cD) {
        this.style = DD, this.LB = CD, this.half = cD, this.particles = null, this.lastFrame = -1
      }
      emit(DD, CD, cD) {
        let iD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return cD !== this.lastFrame && (this.lastFrame = cD, this.particles || (this.particles = DD.createParticles(function(DD, CD) {
          const [
            [cD, iD, fD],
            [bD, QD, wD]
          ] = DD.colours;
          return {
            texture: DD.soft ? pD : "square_particle",
            LB: CD,
            minLifeTime: DD.life[0] / ID,
            maxLifeTime: DD.life[1] / ID,
            minEmitPower: DD.power[0] * ID,
            maxEmitPower: DD.power[1] * ID,
            minSize: DD.size[0],
            maxSize: DD.size[1],
            emitRate: 0,
            gravity: [0, DD.lift * ID * ID, 0],
            dir1: [-DD.spread, 1, -DD.spread],
            dir2: [DD.spread, 1, DD.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [cD, iD, fD, DD.alpha],
              maxColor: [bD, QD, wD, DD.alpha]
            }, {
              timeFraction: 1,
              minColor: [cD, iD, fD, 0],
              maxColor: [bD, QD, wD, 0]
            }],
            blendMode: DD.blendMode
          }
        }(this.style, this.LB), {
          pos: CD,
          half: this.half
        })), this.particles.moveTo(CD, this.half), this.particles.emit(iD), !0)
      }
      dispose() {
        var DD;
        null === (DD = this.particles) || void 0 === DD || DD.stop(), this.particles = null
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);