export const id = 248;
export const ids = [248];
export const modules = {
  39406: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => Dp
    });
    const pD = [0, 90, 180, 270],
      sD = "plotsblueprint";
    var KD = wD(58),
      rD = wD(36580),
      LD = wD(20),
      cD = wD(1648),
      gD = wD(1737),
      RD = wD(25);
    const AD = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      UD = {
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
      fD = ["small", "medium", "large"].flatMap((DD => AD.flat().filter((zD => UD[zD].tier === DD))));

    function ID(DD) {
      return UD[DD]
    }
    const BD = new Map(AD.flatMap((DD => DD.slice(1).map(((zD, wD) => [zD, DD[wD]])))));

    function GD(DD) {
      var zD;
      return null !== (zD = BD.get(DD)) && void 0 !== zD ? zD : null
    }
    const hD = {
      farm_hut: "plotsGame:journalNoteFarmHut",
      rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
      castle_tower: "plotsGame:journalNoteCastleTower",
      farm_house: "plotsGame:journalNoteFarmHouse",
      farm_barn: "plotsGame:journalNoteFarmBarn"
    };

    function nD(DD, zD) {
      const wD = new Set(DD),
        pD = function(DD) {
          const zD = new Set(DD);
          return new Set(fD.filter((DD => {
            const wD = GD(DD);
            return null === wD || zD.has(wD)
          })))
        }(wD);
      return fD.map((DD => {
        const sD = DD === zD;
        return wD.has(DD) ? {
          id: DD,
          active: sD,
          state: "completed",
          unlockedBy: null
        } : pD.has(DD) ? {
          id: DD,
          active: sD,
          state: "open",
          unlockedBy: null
        } : {
          id: DD,
          active: sD,
          state: "locked",
          unlockedBy: GD(DD)
        }
      }))
    }
    const MD = "plotsJournalChanged";
    class OD {
      constructor(DD, zD) {
        this.api = DD, this.placement = zD, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.sI("journal_opened")
        }, this.build = DD => {
          this.sI("placement_started"), this.placement.start(DD), (0, rD.g)()
        }, this.putAway = () => {
          this.api.sendCommand(`${sD} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      QI(DD) {
        let [, zD, wD] = DD;
        this.pages = nD(zD, wD), RD.l.KG(MD, this.pages, !0)
      }
      openFromServer() {
        this.openRequested = !0, this.DU()
      }
      DU() {
        this.openRequested && !LD.e.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, cD.q)() || (0, gD.isTypingInInput)() || null !== this.placement.getView() || (0, rD.r)())
      }
      sI(DD) {
        this.reported.has(DD) || (this.reported.add(DD), this.api.sendCommand(`${sD} report ${DD}`))
      }
    }
    var JD = wD(1044),
      ED = wD.n(JD),
      QD = wD(1057),
      XD = wD(1447),
      VD = wD(4552),
      PD = wD(3416),
      CD = wD(1442),
      xD = wD(1119),
      TD = wD(1200),
      bD = wD(9198);
    const jD = [0, 90, 180, 270],
      dD = /^(meta\|rot\d)\|([lrud]+)$/,
      SD = "nesw",
      iD = /^meta\|([nesw]*)\|?(Stacked)?$/,
      lD = function(DD) {
        const zD = new WeakMap;
        return (wD, pD) => {
          let sD = zD.get(wD);
          return void 0 === sD && (sD = DD(wD, pD), zD.set(wD, sD)), sD
        }
      }((DD => new WD(DD)));
    class WD {
      constructor(DD) {
        this.blockMetadata = DD, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const zD = new Set(Object.keys(DD).map((zD => DD[zD].id)));
        zD.add(0), this.maxBlockId = Math.max(...zD)
      }
      static
      for (DD) {
        return lD(DD)
      }
      getBlockIdMapping(DD, zD) {
        const wD = this.getBlockIdMappingKey(DD, zD);
        let pD = this.blockIdMappings.get(wD);
        return void 0 === pD && jD.includes(DD) && (pD = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, DD, zD), this.blockIdMappings.set(wD, pD)), pD
      }
      turnBlockId(DD, zD, wD) {
        return this.mapBlockId(this.blockMetadata[DD], zD, this.getRotationMapping(zD, wD), wD)
      }
      getBlockIdMappingKey(DD, zD) {
        return `r${DD}|m${Number(zD)}`
      }
      createBlockIdMapping(DD, zD, wD, pD) {
        const sD = new Uint16Array(zD + 1),
          KD = this.getRotationMapping(wD, pD);
        for (const rD in DD) {
          const zD = DD[rD];
          sD[zD.id] = this.mapBlockId(zD, wD, KD, pD)
        }
        return sD
      }
      getRotationMapping(DD, zD) {
        const wD = Math.round(DD / 90),
          pD = new Uint8Array(4);
        for (let sD = 0; sD < 4; sD++) pD[sD] = (4 + sD - wD) % 4;
        if (zD) {
          let DD = pD[0];
          pD[0] = pD[1], pD[1] = DD, DD = pD[2], pD[2] = pD[3], pD[3] = DD
        }
        return pD
      }
      mapBlockId(DD, zD, wD, pD) {
        var sD;
        const {
          blockMetadata: KD
        } = this, rD = Math.round(zD / 90), {
          id: LD,
          meta: cD
        } = DD, {
          rot: gD,
          rootName: RD,
          metaStr: AD
        } = cD;
        let UD;
        const [, fD, ID] = null !== (sD = iD.exec(AD)) && void 0 !== sD ? sD : [];
        if (void 0 !== fD) {
          var BD, GD;
          UD = null !== (BD = null === (GD = KD[`${RD}|meta|${[SD.split("").filter(((DD,zD)=>fD.split("").some((DD=>{const wD=SD.indexOf(DD);return((pD?3-wD:wD)+rD)%4===zD})))).join(""),ID].filter(Boolean).join("|")}`]) || void 0 === GD ? void 0 : GD.id) && void 0 !== BD ? BD : LD
        } else if (null === gD) UD = LD;
        else {
          var hD, nD;
          const DD = wD[gD - 1] + 1;
          let zD = AD.replace(`rot${gD}`, `rot${DD}`);
          pD && cD.stairsCorner && (zD = zD.replace(/(Left|Right)$/, (DD => "Left" === DD ? "Right" : "Left"))), pD && "Chest" === RD && (zD = zD.replace(/\|(left|right)$/, ((DD, zD) => "left" === zD ? "|right" : "|left")));
          const sD = dD.exec(zD);
          if (pD && null !== sD) {
            const DD = "lrud".split("").filter((DD => sD[2].includes("l" === DD ? "r" : "r" === DD ? "l" : DD)));
            zD = `${sD[1]}|${DD.join("")}`
          }
          const rD = `${RD}|${zD}`;
          if (UD = null !== (hD = null === (nD = KD[rD]) || void 0 === nD ? void 0 : nD.id) && void 0 !== hD ? hD : null, null === UD) {
            const DD = KD[RD];
            UD = DD.rootMetaDesc === rD ? DD.id : LD
          }
        }
        return UD
      }
    }

    function ND(DD, zD, wD) {
      let {
        xRotationMappedOrigin: pD,
        shouldSwapXZ: sD
      } = wD;
      const KD = sD ? zD : DD;
      return null === pD ? KD : pD - KD
    }

    function ZD(DD, zD, wD) {
      let {
        zRotationMappedOrigin: pD,
        shouldSwapXZ: sD
      } = wD;
      const KD = sD ? DD : zD;
      return null === pD ? KD : pD - KD
    }
    const yD = {
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

    function mD(DD, zD) {
      const wD = `${DD}|${zD}`;
      let pD = kD.get(wD);
      if (void 0 === pD) {
        const {
          size: sD,
          palette: KD,
          layers: rD
        } = yD[DD], LD = 90 === zD || 270 === zD, [cD, gD] = LD ? [sD[2], sD[0]] : [sD[0], sD[2]], RD = function(DD, zD, wD) {
          let pD = null,
            sD = null,
            KD = !1;
          switch (DD) {
            case 0:
              break;
            case 90:
              pD = zD - 1, KD = !0;
              break;
            case 180:
              pD = zD - 1, sD = wD - 1;
              break;
            case 270:
              sD = wD - 1, KD = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${DD}`)
          }
          return {
            xRotationMappedOrigin: pD,
            zRotationMappedOrigin: sD,
            shouldSwapXZ: KD
          }
        }(zD, cD, gD), AD = WD.for(bD.l), UD = KD.map((DD => (0, bD.h)(AD.turnBlockId((0, bD.p)(DD), zD, !1)))), fD = [];
        rD.forEach(((DD, zD) => {
          DD.split(" ").forEach(((DD, wD) => {
            for (let pD = 0; pD < DD.length; pD++)
              if ("." !== DD[pD]) {
                const sD = [ND(pD, wD, RD), zD, ZD(pD, wD, RD)];
                fD.push({
                  offset: sD,
                  block: UD[DD.charCodeAt(pD) - "a".charCodeAt(0)]
                })
              }
          }))
        })), pD = {
          size: [cD, sD[1], gD],
          cells: fD
        }, kD.set(wD, pD)
      }
      return pD
    }
    const eD = {
      farm_hut: wD.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
      farm_house: wD.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
      farm_barn: wD.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
      rusticHome_tent: wD.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
      rusticHome_cabin: wD.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
      rusticHome_house: wD.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
      market_stand: wD.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
      market_stall: wD.p + "static/media/market_stall.9a562807f9dff591618a.webp",
      market_shop: wD.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
      castle_wall: wD.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
      castle_gate: wD.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
      castle_tower: wD.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
    };
    var oD = wD(1096);
    const aD = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function uD(DD) {
      let {
        page: zD,
        building: wD,
        onBuild: pD,
        onPutAway: sD
      } = DD;
      const {
        t: KD
      } = (0, TD.E)(), {
        displayName: rD,
        tier: LD
      } = ID(zD.id), cD = mD(zD.id, 0).cells.length, gD = hD[zD.id], RD = "locked" === zD.state, AD = wD ? XD.f : XD.o;
      return (0, oD.jsxs)("article", {
        className: ED()("PlotsJournalPage", {
          Locked: RD
        }),
        children: [(0, oD.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: KD(rD.translationKey)
        }), (0, oD.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [KD(aD[LD]), " \xb7 ", KD("plotsGame:journalBlocks", {
            blocks: String(cD)
          })]
        }), (0, oD.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [fD.map((DD => (0, oD.jsx)("img", {
            className: ED()({
              Shown: DD === zD.id
            }),
            src: eD[DD],
            alt: "",
            draggable: !1
          }, DD))), "completed" === zD.state && (0, oD.jsx)("span", {
            className: "PlotsJournalStamp",
            children: KD("plotsGame:journalBuilt")
          }), RD && (0, oD.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, oD.jsx)(QD.e, {
              name: "lock"
            })
          })]
        }), void 0 !== gD && "completed" !== zD.state && (0, oD.jsx)("p", {
          className: "PlotsJournalNote",
          children: KD(gD)
        }), (0, oD.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === zD.state && (0, oD.jsx)("p", {
            className: "PlotsJournalHint",
            children: KD("plotsGame:journalLocked", {
              name: KD(ID(zD.unlockedBy).displayName.translationKey)
            })
          }), zD.active && (0, oD.jsxs)(oD.Fragment, {
            children: [(0, oD.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: KD("plotsGame:journalBuilding")
            }), (0, oD.jsx)(XD.g, {
              onClick: sD,
              children: KD("plotsGame:journalPutAway")
            })]
          }), !RD && !zD.active && (0, oD.jsx)(AD, {
            onClick: () => {
              pD(zD.id)
            },
            children: KD("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function vD(DD) {
      let {
        className: zD,
        page: wD,
        hidden: pD,
        building: sD,
        journal: KD
      } = DD;
      return (0, oD.jsxs)("div", {
        ref: DD => {
          null !== DD && (DD.inert = pD)
        },
        className: ED()("PlotsJournalSide", zD),
        children: [void 0 !== wD && (0, oD.jsx)(uD, {
          page: wD,
          building: sD,
          onBuild: KD.build,
          onPutAway: KD.putAway
        }), void 0 === wD && (0, oD.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var tD = wD(351),
      FD = wD(1886);

    function YD(DD) {
      return Math.cos((0, FD.l)(DD))
    }

    function HD(DD) {
      return (0, FD.D)(Math.acos(tD.c.clamp(DD, -1, 1)))
    }

    function qD(DD, zD, wD, pD, sD) {
      const KD = Math.abs(zD - DD),
        rD = (0, FD.D)(sD / (wD * Math.abs(Math.sin((0, FD.l)(DD))))),
        LD = 450 * Math.min(1, KD / pD),
        cD = rD > 0 ? 3 * KD / rD : 1 / 0;
      return Math.round(Math.max(120, Math.min(LD, cD)))
    }
    class Dz {
      constructor() {
        this.samples = []
      }
      add(DD, zD) {
        for (this.samples.push({
            x: DD,
            at: zD
          }); zD - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const DD = this.samples[0],
          zD = this.samples[this.samples.length - 1];
        return zD.at > DD.at ? (zD.x - DD.x) / (zD.at - DD.at) : 0
      }
    }

    function zz(DD, zD) {
      return DD > zD && DD >= 600
    }

    function wz(DD) {
      return HD(new DOMMatrixReadOnly(getComputedStyle(DD).transform).m11)
    }

    function pz(DD, zD) {
      DD.style.transform = `rotateY(${-zD}deg)`, DD.classList.add("Turning")
    }

    function sz(DD) {
      let {
        journal: zD
      } = DD;
      const {
        t: wD
      } = (0, TD.E)(), pD = (0, CD.k)(MD, zD.getPages()), sD = (0, xD.p)(zz), [LD, cD] = (0, KD.useState)((() => function(DD) {
        const zD = DD.findIndex((DD => DD.active));
        return -1 !== zD ? zD : Math.max(0, DD.findIndex((DD => "open" === DD.state)))
      }(pD))), RD = (0, KD.useRef)(null), AD = (0, KD.useRef)(null), UD = (0, KD.useRef)({
        Forward: null,
        Back: null
      }), fD = sD ? 2 : 1, ID = sD ? 180 : 90, BD = LD - LD % fD, GD = BD > 0, hD = BD + fD < pD.length, nD = (0, KD.useCallback)((() => {
        const DD = AD.current;
        return null === DD ? BD : (AD.current = null, DD.animation.cancel(), (zD = UD.current[DD.direction]).style.transform = "", zD.classList.remove("Turning"), null === DD.next ? BD : (cD(DD.next), DD.next));
        var zD
      }), [BD]), OD = (0, KD.useCallback)(((DD, zD, wD, pD) => {
        const sD = UD.current[DD],
          KD = wz(sD),
          rD = zD === ("Forward" === DD) ? ID : 0;
        pz(sD, rD);
        const LD = sD.animate([{
          transform: `rotateY(${-KD}deg)`
        }, {
          transform: `rotateY(${-rD}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : qD(KD, rD, sD.offsetWidth, ID, rD > KD ? -wD : wD),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        AD.current = {
          direction: DD,
          animation: LD,
          next: zD ? pD + ("Forward" === DD ? fD : -fD) : null
        }, LD.onfinish = () => {
          var DD;
          (null === (DD = AD.current) || void 0 === DD ? void 0 : DD.animation) === LD && nD()
        }
      }), [fD, ID, nD]), JD = (0, KD.useCallback)((DD => {
        if (null !== RD.current) return;
        const zD = nD();
        ("Forward" === DD ? zD + fD < pD.length : zD > 0) && OD(DD, !0, 0, zD)
      }), [nD, OD, fD, pD.length]);
      (0, KD.useEffect)((() => {
        zD.onOpened()
      }), [zD]), (0, KD.useEffect)((() => () => {
        var DD;
        null === (DD = AD.current) || void 0 === DD || DD.animation.cancel()
      }), []), (0, KD.useEffect)((() => {
        const DD = DD => {
          var zD;
          DD.pointerId !== (null === (zD = RD.current) || void 0 === zD ? void 0 : zD.pointerId) || RD.current.following || (RD.current = null)
        };
        return window.addEventListener("pointerup", DD), () => {
          window.removeEventListener("pointerup", DD)
        }
      }), []), (0, PD.d)((DD => ("ArrowLeft" === DD.code || "ArrowRight" === DD.code) && !(0, gD.isTypingInInput)()), (DD => {
        DD.stopPropagation(), JD("ArrowLeft" === DD.code ? "Back" : "Forward")
      }));
      const QD = (DD, zD, wD) => {
          const pD = function(DD, zD, wD, pD) {
            return (DD < 0 ? wD : pD) ? tD.c.clampAbs(DD, zD) : Math.sign(DD) * zD * (1 - 1 / (.55 * Math.abs(DD) / zD + 1))
          }(DD.base + wD, fD * DD.width, hD, GD);
          return "Forward" === zD ? Math.min(pD, 0) : Math.max(pD, 0)
        },
        bD = (DD, zD) => {
          const wD = RD.current;
          if (RD.current = null, null === wD.direction) return;
          wD.speed.add(DD, zD);
          const pD = wD.speed.get(),
            sD = QD(wD, wD.direction, DD - wD.x);
          OD(wD.direction, null !== function(DD, zD, wD, pD, sD) {
            if (Math.abs(zD) >= .3 ? Math.sign(zD) !== Math.sign(DD) : Math.abs(DD) < .5 * wD) return null;
            const KD = DD < 0 ? "Forward" : "Back";
            return ("Forward" === KD ? pD : sD) ? KD : null
          }(sD, pD, fD * wD.width, hD, GD), pD, BD)
        },
        jD = pD.some((DD => DD.active)),
        dD = (DD, wD, sD) => (0, oD.jsx)(vD, {
          className: DD,
          page: wD >= 0 && wD < pD.length ? pD[wD] : void 0,
          hidden: sD,
          building: jD,
          journal: zD
        });
      return (0, oD.jsx)(VD.c, {
        close: rD.i,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, oD.jsxs)("section", {
          className: ED()("PlotsJournal", {
            Spread: sD
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": wD("plotsGame:journalTitle"),
          children: [(0, oD.jsx)(XD.k, {
            className: "PlotsJournalClose",
            onClick: rD.i
          }), (0, oD.jsx)(Kz, {
            direction: "Back",
            disabled: !GD,
            onTurn: JD
          }), (0, oD.jsx)("div", {
            className: "PlotsJournalBookPages",
            onPointerDown: DD => {
              var zD;
              if (!DD.isPrimary || 0 !== DD.button || null !== AD.current && null !== DD.target.closest("button")) return;
              const wD = new Dz;
              wD.add(DD.clientX, DD.timeStamp);
              const pD = UD.current.Forward.offsetWidth,
                sD = AD.current;
              AD.current = null;
              let KD = 0;
              if (null !== sD) {
                const zD = UD.current[sD.direction],
                  wD = wz(zD);
                sD.animation.cancel(), pz(zD, wD), KD = function(DD, zD, wD, pD) {
                  return (DD < 0 ? wD : pD) ? DD : Math.sign(DD) * zD * (1 / (1 - Math.min(Math.abs(DD) / zD, .99)) - 1) / .55
                }(function(DD, zD, wD, pD) {
                  return wD * (YD(zD) - YD("Forward" === DD ? 0 : pD))
                }(sD.direction, wD, pD, ID), fD * pD, hD, GD), DD.currentTarget.setPointerCapture(DD.pointerId)
              }
              RD.current = {
                pointerId: DD.pointerId,
                x: DD.clientX,
                y: DD.clientY,
                base: KD,
                width: pD,
                following: null !== sD,
                direction: null !== (zD = null === sD || void 0 === sD ? void 0 : sD.direction) && void 0 !== zD ? zD : null,
                speed: wD
              }
            },
            onPointerMove: DD => {
              const zD = RD.current;
              if (null === zD || DD.pointerId !== zD.pointerId) return;
              if (0 === DD.buttons) return void bD(DD.clientX, DD.timeStamp);
              const wD = DD.clientX - zD.x;
              !zD.following && function(DD, zD) {
                return Math.abs(DD) > 8 && Math.abs(DD) > Math.abs(zD)
              }(wD, DD.clientY - zD.y) && (zD.following = !0, zD.direction = wD < 0 ? "Forward" : "Back", DD.currentTarget.setPointerCapture(DD.pointerId)), null !== zD.direction && (zD.speed.add(DD.clientX, DD.timeStamp), pz(UD.current[zD.direction], function(DD, zD, wD, pD) {
                const sD = wD * YD("Forward" === DD ? 0 : pD) + zD;
                return tD.c.clamp(HD(sD / wD), 0, pD)
              }(zD.direction, QD(zD, zD.direction, wD), zD.width, ID)))
            },
            onPointerUp: DD => {
              var zD;
              DD.pointerId === (null === (zD = RD.current) || void 0 === zD ? void 0 : zD.pointerId) && bD(DD.clientX, DD.timeStamp)
            },
            onPointerCancel: DD => {
              const zD = RD.current;
              DD.pointerId === (null === zD || void 0 === zD ? void 0 : zD.pointerId) && (RD.current = null, null !== zD.direction && OD(zD.direction, !1, 0, BD))
            },
            children: (0, oD.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [sD && dD("Left", BD - 2, !0), dD("Right", BD + 2 * fD - 1, !0), (0, oD.jsxs)("div", {
                ref: DD => {
                  UD.current.Back = DD
                },
                className: "PlotsJournalLeaf Back",
                children: [dD("Recto", BD - 1, !0), sD && dD("Verso", BD, !1)]
              }), (0, oD.jsxs)("div", {
                ref: DD => {
                  UD.current.Forward = DD
                },
                className: "PlotsJournalLeaf Forward",
                children: [dD("Recto", BD + fD - 1, !1), sD && dD("Verso", BD + fD, !0)]
              })]
            })
          }), (0, oD.jsx)(Kz, {
            direction: "Forward",
            disabled: !hD,
            onTurn: JD
          })]
        })
      })
    }

    function Kz(DD) {
      let {
        direction: zD,
        disabled: wD,
        onTurn: pD
      } = DD;
      const {
        t: sD
      } = (0, TD.E)();
      return (0, oD.jsx)("div", {
        className: ED()("PlotsJournalArrow", zD),
        children: (0, oD.jsx)(XD.f, {
          disabled: wD,
          ariaLabel: sD("Forward" === zD ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            pD(zD)
          },
          children: (0, oD.jsx)(QD.e, {
            name: "angle-up"
          })
        })
      })
    }
    var rz = wD(36577),
      Lz = wD(1915),
      cz = wD(1977);
    const gz = "plotsStepChanged",
      Rz = "plotsPlotChanged";
    class Az {
      constructor() {
        this.step = ["none"], this.plot = ["none"]
      }
      getStep() {
        return this.step
      }
      receiveStep(DD) {
        this.step = DD, RD.l.KG(gz, DD, !0)
      }
      getPlot() {
        return this.plot
      }
      receivePlot(DD) {
        this.plot = DD, RD.l.KG(Rz, DD, !0)
      }
    }
    const Uz = "KeyJ";

    function fz(DD) {
      let {
        hud: zD,
        journal: wD
      } = DD;
      const pD = (0, CD.k)(MD, wD.getPages()),
        sD = (0, CD.k)(gz, zD.getStep()),
        {
          isTouchScreen: KD
        } = (0, LD.n)(["isTouchScreen"]),
        {
          t: RD
        } = (0, TD.E)(),
        AD = null !== pD && "none" === sD[0];
      return (0, PD.d)((DD => null !== pD && DD.code === Uz && !DD.repeat && !(0, gD.isTypingInInput)()), (DD => {
        (0, cD.A)(DD, AD, rD.r)
      })), AD ? (0, oD.jsx)(rz.g, {
        placement: "topRight",
        children: (0, oD.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, oD.jsxs)("button", {
            type: "button",
            className: ED()("PlotsJournalButton SmallTextBold", {
              Touch: KD
            }),
            onClick: rD.r,
            children: [(0, oD.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, oD.jsx)(Lz.d, {
                itemName: "Book",
                amount: 0
              })
            }), RD("plotsGame:journalButton"), !KD && (0, oD.jsx)(cz.e, {
              className: "PlotsJournalButtonKey",
              keyCode: Uz
            })]
          })
        })
      }) : null
    }
    var Iz = wD(38400),
      Bz = wD(38151),
      Gz = wD(36891),
      hz = wD(9228),
      nz = wD(9240),
      Mz = wD(37791);
    const Oz = new Map([
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
      Jz = [...Gz.b.blockRemoveActionRoots, ...Bz.b, ...hz.k, "Board", "Code Block", "Custom Lobby Block"],
      Ez = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let Qz = null;

    function Xz() {
      return Qz ??= function() {
        const DD = Vz(),
          zD = Math.max(...DD.map((DD => bD.l[DD].id))) + 1,
          wD = new Int32Array(zD),
          pD = new Int32Array(zD),
          sD = new Uint8Array(zD).fill(1),
          KD = new Uint8Array(zD),
          rD = new Uint8Array(zD),
          LD = new Array(zD).fill("Air"),
          cD = new Map,
          gD = DD => {
            let zD = cD.get(DD);
            return void 0 === zD && (zD = cD.size + 1, cD.set(DD, zD)), zD
          },
          RD = new Set(Jz);
        for (const UD of DD) {
          var AD;
          const {
            id: DD,
            meta: zD,
            altActionable: cD,
            canBePlacedOver: fD
          } = bD.l[UD];
          wD[DD] = gD(Pz(UD));
          const ID = zD.stairsCorner;
          if (null === ID) pD[DD] = wD[DD];
          else {
            const wD = ID.endsWith("Right");
            pD[DD] = gD(`${zD.rootName}|rot${wD?zD.rot%4+1:zD.rot}|${zD.halfblockPlacement}|${ID.replace("Right","Left")}`)
          }
          sD[DD] = fD ? 1 : 0, KD[DD] = cD || null !== zD.open || UD in Mz.e || RD.has(zD.rootName) || void 0 !== (0, Bz.c)(zD.rootName) ? 1 : 0;
          const {
            rootName: BD
          } = zD;
          rD[DD] = null !== zD.open || Bz.b.includes(BD) || BD.includes("Bookshelf") || BD.includes("Mailbox") ? 1 : 0, LD[DD] = null !== (AD = (0, Iz.e)(DD)) && void 0 !== AD ? AD : BD
        }
        return {
          kinds: wD,
          shapes: pD,
          empty: sD,
          inUse: KD,
          ownAltActionMessage: rD,
          placingItems: LD
        }
      }(), Qz
    }

    function Vz() {
      return Object.keys(bD.l).filter((DD => bD.l[DD].name === DD))
    }

    function Pz(DD) {
      var zD;
      const wD = bD.l[DD],
        {
          rootName: pD,
          rot: sD
        } = wD.meta,
        [, ...KD] = (null !== (zD = wD.rootMetaDesc) && void 0 !== zD ? zD : DD).split("|"),
        rD = KD.filter((DD => !("meta" === DD || Ez.test(DD) || (0, nz.A)(wD) && /^[nesw]+$/.test(DD) || hz.k.includes(pD) && /^[lrud]+$/.test(DD) || tD.H.includes(pD) && /^(left|right)$/.test(DD))));
      return [pD, ...rD].map((DD => "fenceGate" === wD.model && DD === `rot${sD}` ? "rot" + ((sD - 1) % 2 + 1) : DD)).join("|")
    }

    function Cz(DD, zD) {
      const {
        kinds: wD,
        shapes: pD
      } = Xz();
      return wD[DD] === wD[zD] || pD[DD] === pD[zD]
    }

    function xz(DD) {
      return 1 === Xz().empty[DD]
    }

    function Tz(DD) {
      return Xz().placingItems[DD]
    }

    function bz(DD) {
      return Oz.get(bD.l[DD].meta.rootName)
    }
    var jz = wD(9222),
      dz = wD(9236);
    const Sz = [0, 0, 0, 1, 1, 1],
      iz = (0, jz.c)([
        [2, 0, 2, 6, 6, 6]
      ]),
      lz = (0, jz.c)([
        [3, 0, 3, 5, 5, 5]
      ]),
      Wz = (0, jz.c)([
        [3, 3, 3, 5, 8, 5]
      ]),
      Nz = [0, 1, 2, 3].map((DD => (0, jz.c)((0, jz.k)([
        [3, 2, 0, 5, 7, 3]
      ], DD))));

    function Zz(DD) {
      const {
        cG: zD,
        model: wD,
        blockModel: pD,
        meta: sD
      } = bD.l[DD];
      return void 0 !== zD ? zD : "CentreCross" === wD ? iz : null !== pD && void 0 !== pD && pD.startsWith("torch") ? sD.halfblockPlacement === dz.d.side ? Nz[sD.rot - 1] : sD.halfblockPlacement === dz.d.top ? Wz : lz : Sz
    }
    var yz = wD(36855),
      kz = wD(197);

    function mz(DD, zD) {
      const wD = kz.f.mG / 2;
      return DD[0] < zD[0] + wD && DD[0] + 1 > zD[0] - wD && DD[1] < zD[1] + kz.f.eG && DD[1] + 1 > zD[1] && DD[2] < zD[2] + wD && DD[2] + 1 > zD[2] - wD
    }

    function ez(DD, zD, wD, pD, sD) {
      const KD = Math.hypot(...zD.dir);
      if (!Number.isFinite(KD) || 0 === KD) return -1;
      const {
        from: rD,
        reach: LD,
        solid: cD
      } = zD, gD = [zD.dir[0] / KD, zD.dir[1] / KD, zD.dir[2] / KD], RD = null === cD ? LD : Math.min(LD, function(DD, zD, wD) {
        const pD = oz(DD, zD, wD);
        if (pD !== 1 / 0) return pD;
        return (wD[0] + .5 - DD[0]) * zD[0] + (wD[1] + .5 - DD[1]) * zD[1] + (wD[2] + .5 - DD[2]) * zD[2]
      }(rD, gD, cD) + .75);
      let AD = -1,
        UD = 1 / 0,
        fD = 1 / 0;
      for (let ID = 0; ID < DD.length; ID += 4) {
        const zD = [DD[ID], DD[ID + 1], DD[ID + 2]],
          KD = sD(ID) ? LD : RD;
        let cD = -1,
          BD = oz(rD, gD, zD);
        if (BD > KD) {
          const DD = [zD[0] + .5 - rD[0], zD[1] + .5 - rD[1], zD[2] + .5 - rD[2]];
          if (BD = DD[0] * gD[0] + DD[1] * gD[1] + DD[2] * gD[2], BD <= 0 || BD > KD) continue;
          if (cD = Math.hypot(DD[0] - BD * gD[0], DD[1] - BD * gD[1], DD[2] - BD * gD[2]), cD > .7 || !pD(ID)) continue
        }(cD < UD || cD === UD && BD < fD) && wD(ID) && (AD = ID, UD = cD, fD = BD)
      }
      return AD
    }

    function oz(DD, zD, wD) {
      let pD = 0,
        sD = 1 / 0;
      for (let KD = 0; KD < 3; KD++) {
        const rD = wD[KD] - DD[KD];
        if (0 === zD[KD]) {
          if (rD > 0 || rD + 1 < 0) return 1 / 0;
          continue
        }
        const LD = rD / zD[KD],
          cD = (rD + 1) / zD[KD];
        pD = Math.max(pD, Math.min(LD, cD)), sD = Math.min(sD, Math.max(LD, cD))
      }
      return pD <= sD ? pD : 1 / 0
    }
    var az = wD(38039),
      uz = wD(38502);
    const vz = [1, 1, 1];
    class tz {
      constructor(DD) {
        this.api = DD, this.meshes = null, this.shown = null
      }
      show(DD) {
        if (!(0, yz.f)(DD, this.shown))
          if (this.shown = null === DD ? null : [DD[0], DD[1], DD[2]], null !== this.meshes)
            for (const zD of this.meshes) this.api.setGameMesh(zD, null === DD ? {
              visible: !1
            } : {
              anchor: DD,
              visible: !0
            });
          else if (null !== DD) {
          const zD = [az.f, az.f, az.f, 0, 0, 0];
          this.meshes = [this.build([zD], az.g, DD), this.build((0, az.c)(), az.l, DD)]
        }
      }
      dispose() {
        for (const zD of null !== (DD = this.meshes) && void 0 !== DD ? DD : []) {
          var DD;
          this.api.disposeGameMesh(zD)
        }
        this.meshes = null, this.shown = null
      }
      build(DD, zD, wD) {
        const pD = [],
          sD = [];
        for (const [KD, rD, LD, cD, gD, RD] of DD)(0, uz.g)(pD, sD, [cD + .5, gD + .5, RD + .5], [KD, rD, LD]);
        return this.api.createGameMesh({
          positions: pD,
          indices: sD
        }, {
          rgb: vz,
          alpha: zD,
          onTop: !0
        }, wD)
      }
    }
    class Fz {
      constructor(DD) {
        this.api = DD, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(DD) {
        const zD = kz.f.CI;
        this.chunks = [];
        for (let wD = 0; wD < DD.length; wD += 3) {
          const pD = Math.floor(DD[wD] / zD),
            sD = Math.floor(DD[wD + 1] / zD),
            KD = Math.floor(DD[wD + 2] / zD);
          this.watches(pD, sD, KD) || this.chunks.push(pD, sD, KD)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const DD = performance.now();
        if (DD - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = DD;
        let zD = !1;
        for (let wD = 0; wD < this.chunks.length; wD += 3) {
          const DD = this.api.getChunkVersion(this.chunks[wD], this.chunks[wD + 1], this.chunks[wD + 2]);
          this.versions[wD / 3] !== DD && (this.versions[wD / 3] = DD, zD = !0)
        }
        return zD
      }
      watches(DD, zD, wD) {
        for (let pD = 0; pD < this.chunks.length; pD += 3)
          if (this.chunks[pD] === DD && this.chunks[pD + 1] === zD && this.chunks[pD + 2] === wD) return !0;
        return !1
      }
    }
    const Yz = .35,
      Hz = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      qz = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      Dw = [.95, .2, .15];
    class zw {
      constructor() {
        this.groups = []
      }
      add(DD, zD, wD, pD, sD) {
        let KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Sz;
        for (const rD of this.groups)
          if (sw(rD, pD, sD)) return rD.cells.push(DD, zD, wD), void rD.boxes.push(KD);
        this.groups.push({
          rgb: pD,
          look: sD,
          cells: [DD, zD, wD],
          boxes: [KD]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class ww {
      constructor(DD) {
        this.api = DD, this.shown = []
      }
      show(DD) {
        const zD = [];
        for (const wD of DD) {
          const DD = this.shown.findIndex((DD => {
            let {
              group: zD
            } = DD;
            return sw(zD, wD.rgb, wD.look) && Kw(zD, wD)
          })); - 1 === DD ? zD.push(this.build(wD)) : (zD.push(this.shown[DD]), this.shown.splice(DD, 1))
        }
        this.dispose(), this.shown = zD
      }
      dispose() {
        for (const {
            meshes: DD
          }
          of this.shown)
          for (const zD of DD) this.api.disposeGameMesh(zD);
        this.shown = []
      }
      build(DD) {
        const {
          rgb: zD,
          look: wD,
          boxes: pD
        } = DD, sD = [zD[0] + (1 - zD[0]) * Yz, zD[1] + (1 - zD[1]) * Yz, zD[2] + (1 - zD[2]) * Yz], KD = [this.buildMesh(DD.cells, zD, wD.alpha, ((DD, zD, sD, KD) => {
          pw(DD, zD, sD, pD[KD], wD.size, !1)
        })), this.buildMesh(DD.cells, sD, wD.alpha, ((DD, zD, sD, KD) => {
          pw(DD, zD, sD, pD[KD], wD.size, !0)
        }))];
        return wD.crossed && KD.push(this.buildMesh(DD.cells, zD, .9, ((DD, zD, pD) => {
          (0, uz.j)(DD, zD, pD, wD.size + .01, .12)
        }))), {
          group: DD,
          meshes: KD
        }
      }
      buildMesh(DD, zD, wD, pD) {
        const sD = [DD[0], DD[1], DD[2]],
          KD = [],
          rD = [];
        for (let LD = 0; LD < DD.length; LD += 3) pD(KD, rD, [DD[LD] - sD[0] + .5, DD[LD + 1] - sD[1] + .5, DD[LD + 2] - sD[2] + .5], LD / 3);
        return this.api.createGameMesh({
          positions: KD,
          indices: rD
        }, {
          rgb: [zD[0], zD[1], zD[2]],
          alpha: wD
        }, sD)
      }
    }

    function pw(DD, zD, wD, pD, sD, KD) {
      for (let rD = 0; rD < pD.length; rD += 6) {
        const LD = [0, 0, 0],
          cD = [0, 0, 0];
        for (let DD = 0; DD < 3; DD++) LD[DD] = wD[DD] + ((pD[rD + DD] + pD[rD + DD + 3]) / 2 - .5) * sD, cD[DD] = (pD[rD + DD + 3] - pD[rD + DD]) * sD;
        (0, uz.d)(DD, zD, LD, cD, KD)
      }
    }

    function sw(DD, zD, wD) {
      return DD.rgb[0] === zD[0] && DD.rgb[1] === zD[1] && DD.rgb[2] === zD[2] && DD.look === wD
    }

    function Kw(DD, zD) {
      if (DD.cells.length !== zD.cells.length) return !1;
      for (let wD = 0; wD < DD.cells.length; wD++)
        if (DD.cells[wD] !== zD.cells[wD]) return !1;
      return DD.boxes.every(((DD, wD) => DD === zD.boxes[wD]))
    }

    function rw(DD, zD) {
      return DD.getClientOption(zD, "blockReach") + 1
    }
    class Lw {
      constructor(DD, zD, wD) {
        this.api = DD, this.localPlayerId = zD, this.pickNext = wD, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(DD) {
        const [zD, , wD] = DD.cameraDirection, pD = Math.hypot(zD, wD);
        pD > .001 && (this.heading = [zD / pD, wD / pD])
      }
      tapped(DD, zD, wD) {
        const pD = rw(this.api, this.localPlayerId),
          {
            origin: sD,
            direction: KD
          } = this.api.getActionRay(),
          rD = [...sD],
          LD = [
            [rD, [rD[0] + KD[0] * pD, rD[1] + KD[1] * pD, rD[2] + KD[2] * pD]]
          ];
        null !== DD && LD.push([rD, (0, yz.d)(DD)]), this.tap = {
          lines: LD,
          next: zD,
          ms: wD
        }
      }
      filled(DD, zD) {
        this.tap = null, this.turnFrom(DD, zD), this.retry(zD)
      }
      arrived(DD, zD) {
        const {
          tap: wD
        } = this;
        if (null === wD || zD - wD.ms > 1500) return null;
        const pD = (0, yz.d)(DD);
        return (0, yz.f)(wD.next, DD) || wD.lines.some((DD => {
          let [zD, wD] = DD;
          return function(DD, zD, wD) {
            const pD = [wD[0] - zD[0], wD[1] - zD[1], wD[2] - zD[2]],
              sD = [DD[0] - zD[0], DD[1] - zD[1], DD[2] - zD[2]],
              KD = pD[0] ** 2 + pD[1] ** 2 + pD[2] ** 2,
              rD = 0 === KD ? 0 : Math.min(1, Math.max(0, (sD[0] * pD[0] + sD[1] * pD[1] + sD[2] * pD[2]) / KD));
            return Math.hypot(sD[0] - pD[0] * rD, sD[1] - pD[1] * rD, sD[2] - pD[2] * rD)
          }(pD, zD, wD) <= .9
        })) ? (this.tap = null, this.turnFrom(DD, zD), wD.ms) : null
      }
      turnFrom(DD, zD) {
        this.pending = {
          from: DD,
          ms: zD,
          turnMs: Math.max(50, Math.min(250, zD - this.lastFillMs))
        }, this.lastFillMs = zD
      }
      retry(DD) {
        const {
          pending: zD
        } = this;
        if (null === zD) return;
        if (DD - zD.ms > 1500) return void(this.pending = null);
        const wD = this.pickNext((0, yz.d)(zD.from), (DD => (0, yz.f)(DD, zD.from)));
        if (null === wD) return;
        this.pending = null;
        const {
          turning: pD
        } = this;
        if (null !== pD && DD < pD.endMs && (0, yz.f)(pD.to, wD)) return;
        const sD = this.api.getActionRay().origin,
          KD = [wD[0] + .5 - sD[0], wD[1] + .5 - sD[1], wD[2] + .5 - sD[2]],
          rD = Math.hypot(KD[0], KD[2]);
        if (rD < .3) {
          const DD = Math.max(rD, .001);
          KD[0] = this.heading[0] * DD, KD[2] = this.heading[1] * DD
        }
        this.api.turnCamera(KD, zD.turnMs), this.turning = {
          to: wD,
          endMs: DD + zD.turnMs
        }
      }
    }
    class gw {
      constructor(DD, zD, wD) {
        this.api = DD, this.localPlayerId = zD, this.juice = wD, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], this.lastFilled = null, this.lastSeenFilled = null, this.playerCells = [], this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = null, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new Fz(DD), this.meshes = new ww(DD), this.outline = new tz(DD), this.turn = new Lw(DD, zD, ((DD, zD) => this.pickNext(DD, zD)))
      }
      QI(DD) {
        const zD = "active" === DD[0] ? `${DD[1]}|${DD[3]}|${DD[4]}|${DD[5]}|${DD[6]}` : "";
        if ("active" !== DD[0]) "built" === DD[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , wD, pD, sD, KD] = DD;
          zD !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = wD) : wD === this.layerY ? this.burstUnlisted(pD) : wD > this.layerY && this.finishLayer(wD), this.layerY = wD, this.layerCells.has(wD) || this.layerCells.set(wD, pD.filter(Aw)), this.ghostCells = pD, this.palette = sD, this.occupiedCells = KD
        }
        zD !== this.blueprint && (this.blueprint = zD, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((DD => this.api.blockNameToBlockId(DD))), this.chunkWatch.watch([...this.ghostCells.filter(Aw), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(DD) {
        this.burstUnlisted([]), DD > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = DD)
      }
      DU() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const DD = performance.now();
        let zD = !1;
        for (const [sD, KD] of this.foreseen) {
          var wD;
          if (DD - KD > 1e3) this.foreseen.delete(sD), zD = !0, (null === (wD = this.lastFilled) || void 0 === wD ? void 0 : wD.join()) === sD && (this.lastFilled = this.lastSeenFilled)
        }
        const pD = Rw(this.api.getPositionView(this.localPlayerId));
        (zD || pD.some(((DD, zD) => DD !== this.playerCells[zD]))) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(DD) {
        const zD = new Set;
        for (let sD = 0; sD < DD.length; sD += 4) zD.add(`${DD[sD]},${DD[sD+1]},${DD[sD+2]}`);
        const wD = [],
          {
            ghostCells: pD
          } = this;
        for (let sD = 0; sD < pD.length; sD += 4) {
          const DD = `${pD[sD]},${pD[sD+1]},${pD[sD+2]}`;
          !zD.has(DD) && this.open.delete(DD) && wD.push(this.filledCell(sD))
        }
        this.burst(wD)
      }
      refresh() {
        const {
          ghostCells: DD,
          palette: zD,
          occupiedCells: wD
        } = this, pD = new zw, sD = new Set, KD = [], rD = [];
        for (let LD = 0; LD < DD.length; LD += 4) {
          const [wD, cD, gD, RD] = [DD[LD], DD[LD + 1], DD[LD + 2], DD[LD + 3]], AD = this.api.getBlockId(wD, cD, gD), UD = `${wD},${cD},${gD}`, fD = Cz(this.blockIds[RD], AD);
          !fD && xz(AD) ? pD.add(wD, cD, gD, bz(zD[RD]), Hz, Zz(zD[RD])) : fD ? this.open.has(UD) && KD.push(this.filledCell(LD)) : pD.add(wD, cD, gD, Dw, qz), !fD && this.api.isBlockInLoadedChunk(wD, cD, gD) && (sD.add(UD), rD.push(wD, cD, gD, xz(AD) ? 0 : 1))
        }
        this.open = sD, this.nextCells = rD;
        for (let LD = 0; LD < wD.length; LD += 3) {
          const [DD, zD, sD] = [wD[LD], wD[LD + 1], wD[LD + 2]];
          xz(this.api.getBlockId(DD, zD, sD)) || pD.add(DD, zD, sD, Dw, qz)
        }
        this.meshes.show(pD.toArray()), this.burst(KD), this.showNext(), this.turn.retry(performance.now())
      }
      burst(DD) {
        const zD = performance.now(),
          wD = [];
        for (const [sD, KD, rD] of DD) {
          const DD = [sD, KD, rD];
          this.lastSeenFilled = DD, this.foreseen.delete(DD.join()) || wD.push(DD)
        }
        const pD = this.isHolding(zD);
        for (const sD of wD) {
          if (this.lastFilled = sD, pD && this.pressFilled) {
            this.turn.filled(sD, zD);
            continue
          }
          const DD = this.turn.arrived(sD, zD);
          if (null !== DD) {
            this.pressFilled = pD;
            for (const [zD, wD] of this.foreseen) wD <= DD && this.foreseen.delete(zD)
          }
        }
        this.juice.filled(DD)
      }
      showNext() {
        var DD;
        const zD = this.api.getPositionView(this.localPlayerId);
        this.playerCells.splice(0, 1 / 0, ...Rw(zD));
        const wD = this.lastFilled;
        this.nextCell = this.pickNext(null === wD ? [zD[0], zD[1] + 1, zD[2]] : (0, yz.d)(wD), (() => !1)), this.outline.show(null !== (DD = this.aimed) && void 0 !== DD ? DD : this.nextCell)
      }
      pickNext(DD, zD) {
        const wD = this.api.getPositionView(this.localPlayerId),
          pD = [wD[0], wD[1] + kz.f.eG * kz.f.playerEyeToHeightRatio, wD[2]],
          sD = rw(this.api, this.localPlayerId),
          {
            nextCells: KD
          } = this,
          rD = DD => [KD[DD], KD[DD + 1], KD[DD + 2]],
          LD = function(DD, zD, wD, pD, sD, KD) {
            let rD = -1,
              LD = -1,
              cD = 1 / 0;
            for (let gD = 0; gD < DD.length; gD += zD) {
              const zD = (KD(gD) ? 2 : 0) + (pD(gD) ? 1 : 0);
              if (zD < LD || sD(gD)) continue;
              const RD = (DD[gD] + .5 - wD[0]) ** 2 + (DD[gD + 1] + .5 - wD[1]) ** 2 + (DD[gD + 2] + .5 - wD[2]) ** 2;
              (zD > LD || RD < cD) && (rD = gD, LD = zD, cD = RD)
            }
            return rD
          }(KD, 4, DD, (DD => 1 === KD[DD + 3]), (DD => {
            const pD = rD(DD);
            return mz(pD, wD) || this.foreseen.has(pD.join()) || zD(pD)
          }), (DD => function(DD, zD, wD) {
            return (zD[0] + .5 - DD[0]) ** 2 + (zD[1] + .5 - DD[1]) ** 2 + (zD[2] + .5 - DD[2]) ** 2 <= wD ** 2
          }(pD, rD(DD), sD)));
        return -1 === LD ? null : rD(LD)
      }
      afterRender(DD) {
        var zD;
        this.turn.look(DD);
        const wD = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === wD ? null : wD.position), this.outline.show(null !== (zD = this.aimed) && void 0 !== zD ? zD : this.nextCell)
      }
      isHolding(DD) {
        return null !== this.altMs && DD - this.altMs <= 500
      }
      attemptAltAction(DD) {
        const zD = performance.now();
        if (this.isHolding(zD) || (this.pressFilled = !1), this.altMs = zD, this.pressFilled) return "preventPlacement";
        const wD = this.findAimed(DD);
        if (null !== wD) return this.foreseen.set(wD.join(), zD), this.lastFilled = wD, this.aimed = null, this.showNext(), this.turn.filled(wD, zD), this.pressFilled = !0, "preventPlacement";
        null !== this.nextCell && this.turn.tapped(DD, this.nextCell, zD)
      }
      findAimed(DD) {
        return function(DD, zD, wD, pD, sD, KD, rD) {
          const LD = DD.zwD(zD),
            cD = null === LD || null === DD.blockNameToBlockId(LD.name, !0) ? null : LD.name,
            gD = DD.getPositionView(zD),
            {
              origin: RD,
              direction: AD
            } = DD.getActionRay(),
            UD = ez(pD, {
              from: RD,
              dir: AD,
              reach: rw(DD, zD),
              solid: wD
            }, (zD => {
              const wD = [pD[zD], pD[zD + 1], pD[zD + 2]];
              return !Cz(sD[pD[zD + 3]], DD.getBlockId(...wD)) && !rD.has(wD.join()) && DD.isBlockInLoadedChunk(...wD) && !mz(wD, gD)
            }), (DD => null === cD || cD === Tz(sD[pD[DD + 3]])), (DD => null !== KD && pD[DD] === KD[0] && pD[DD + 1] === KD[1] && pD[DD + 2] === KD[2]));
          return -1 === UD ? null : [pD[UD], pD[UD + 1], pD[UD + 2]]
        }(this.api, this.localPlayerId, DD, this.ghostCells, this.blockIds, this.nextCell, this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(DD) {
        const {
          ghostCells: zD
        } = this, [wD, pD, sD] = bz(this.palette[zD[DD + 3]]);
        return [zD[DD], zD[DD + 1], zD[DD + 2], wD, pD, sD]
      }
    }

    function Rw(DD) {
      let [zD, wD, pD] = DD;
      const sD = kz.f.mG / 2;
      return [Math.floor(zD), Math.floor(wD), Math.floor(pD), Math.floor(zD - sD), Math.floor(zD + sD), Math.floor(wD + kz.f.eG), Math.floor(pD - sD), Math.floor(pD + sD)]
    }

    function Aw(DD, zD) {
      return zD % 4 !== 3
    }

    function Uw(DD, zD, wD, pD, sD) {
      if (!DD.isBlockInLoadedChunk(zD, pD - 6, wD) || !DD.isBlockInLoadedChunk(zD, pD + 6 + sD, wD) || !DD.canModifyBlockAt(zD, pD, wD)) return NaN;
      let KD = pD - 1;
      if (0 !== DD.getBlockId(zD, KD, wD)) {
        for (; KD < pD + 6 && 0 !== DD.getBlockId(zD, KD + 1, wD);) KD++;
        return KD
      }
      for (; KD > pD - 6;)
        if (KD--, 0 !== DD.getBlockId(zD, KD, wD)) return KD;
      return NaN
    }

    function fw(DD, zD, wD, pD, sD) {
      let KD = 0;
      for (let rD = pD + 1; rD <= pD + sD; rD++) 0 !== DD.getBlockId(zD, rD, wD) && KD++;
      return KD
    }

    function Iw(DD) {
      const zD = new Map;
      for (const rD of DD) {
        var wD;
        if (Number.isNaN(rD)) return null;
        zD.set(rD, (null !== (wD = zD.get(rD)) && void 0 !== wD ? wD : 0) + 1)
      }
      let pD = NaN,
        sD = 0;
      for (const [rD, LD] of zD)(LD > sD || LD === sD && rD < pD) && (pD = rD, sD = LD);
      let KD = 0;
      for (const rD of DD) KD += Math.abs(rD - pD);
      return KD
    }

    function Bw(DD, zD, wD, pD) {
      const {
        eye: sD,
        forward: KD,
        tanHalfFovX: rD,
        tanHalfFovY: LD
      } = DD, [cD, gD] = function(DD) {
        let [zD, wD, pD] = DD;
        const sD = Math.hypot(zD, pD),
          [KD, rD] = [pD / sD, -zD / sD];
        return [
          [KD, 0, rD],
          [wD * rD, pD * KD - zD * rD, -wD * KD]
        ]
      }(KD), [RD, AD] = [zD * rD, wD * LD], UD = KD[0] + RD * cD[0] + AD * gD[0], fD = KD[1] + AD * gD[1], ID = KD[2] + RD * cD[2] + AD * gD[2], BD = (pD - sD[1]) / fD;
      return BD > 0 && BD < 1 / 0 ? [sD[0] + BD * UD, sD[2] + BD * ID] : null
    }
    const Gw = "plotsBlueprintPlacementChanged",
      hw = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class nw {
      constructor(DD, zD) {
        this.api = DD, this.localPlayerId = zD, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = DD => {
          var zD, wD, pD, KD;
          const rD = null !== (zD = null === (wD = this.placing) || void 0 === wD ? void 0 : wD.rotation) && void 0 !== zD ? zD : 0,
            {
              size: LD
            } = mD(DD, rD),
            cD = this.api.PJ(this.localPlayerId),
            [gD, RD] = null !== (pD = null !== (KD = function(DD, zD, wD) {
              const [pD, sD, KD] = zD, [rD, LD, cD] = [Math.floor(wD[0]), Math.floor(wD[1]), Math.floor(wD[2])], gD = 6 + Math.max(pD, KD) / 2, [RD, AD] = [Math.ceil(gD + pD / 2), Math.ceil(gD + KD / 2)], [UD, fD] = [rD - RD, cD - AD], [ID, BD] = [2 * RD + 1, 2 * AD + 1], GD = new Float64Array(ID * BD), hD = new Uint16Array(ID * BD);
              for (let JD = 0; JD < ID; JD++)
                for (let zD = 0; zD < BD; zD++) {
                  const wD = Uw(DD, UD + JD, fD + zD, LD, sD);
                  GD[JD * BD + zD] = wD, Number.isNaN(wD) || (hD[JD * BD + zD] = fw(DD, UD + JD, fD + zD, wD, sD))
                }
              const nD = [];
              let MD = null,
                OD = 1 / 0;
              for (let JD = 0; JD + pD <= ID; JD++)
                for (let DD = 0; DD + KD <= BD; DD++) {
                  const [zD, sD] = [UD + JD, fD + DD], LD = Math.hypot(zD + pD / 2 - wD[0], sD + KD / 2 - wD[2]);
                  if (LD > gD || rD >= zD - 2 && rD < zD + pD + 2 && cD >= sD - 2 && cD < sD + KD + 2) continue;
                  nD.length = 0;
                  let RD = 0;
                  for (let wD = 0; wD < pD; wD++)
                    for (let zD = 0; zD < KD; zD++) nD.push(GD[(JD + wD) * BD + DD + zD]), RD += hD[(JD + wD) * BD + DD + zD];
                  const AD = Iw(nD);
                  if (null === AD) continue;
                  const ID = LD + 3 * (AD + RD);
                  ID < OD && (OD = ID, MD = [zD, sD])
                }
              return MD
            }(this.api, LD, cD)) && void 0 !== KD ? KD : this.cornerOnTarget(LD)) && void 0 !== pD ? pD : [Math.floor(cD[0]) + 2, Math.floor(cD[2])];
          this.placing = {
            id: DD,
            rotation: rD,
            corner: [gD, this.playerLevel(), RD],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null
          }, this.update(), this.api.sendCommand(`${sD} preview`)
        }, this.rotate = () => {
          const {
            id: DD,
            rotation: zD,
            corner: wD
          } = this.placing, sD = pD[(pD.indexOf(zD) + 1) % pD.length], [KD, , rD] = mD(DD, zD).size, [LD, , cD] = mD(DD, sD).size;
          this.moveTo(wD[0] + Math.floor(KD / 2) - Math.floor(LD / 2), wD[2] + Math.floor(rD / 2) - Math.floor(cD / 2), sD)
        }, this.hoverAt = (DD, zD) => {
          this.placing.hover = [DD, zD], this.moveCentreTo(this.camera, DD, zD)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (DD, zD) => {
          const wD = this.placing,
            {
              eye: pD,
              forward: sD,
              tanHalfFovX: KD,
              tanHalfFovY: rD
            } = this.camera,
            LD = {
              eye: [pD[0], pD[1], pD[2]],
              forward: [sD[0], sD[1], sD[2]],
              tanHalfFovX: KD,
              tanHalfFovY: rD
            },
            cD = wD.corner[1],
            gD = Bw(LD, DD, zD, cD);
          wD.hover = null, wD.drag = gD && {
            view: LD,
            ground: gD,
            corner: [wD.corner[0], wD.corner[2]],
            level: cD
          }
        }, this.dragTo = (DD, zD) => {
          const wD = this.placing.drag,
            pD = wD && Bw(wD.view, DD, zD, wD.level);
          null !== wD && null !== pD && this.moveTo(wD.corner[0] + Math.round(pD[0] - wD.ground[0]), wD.corner[1] + Math.round(pD[1] - wD.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const DD = this.view;
          DD.waiting || (DD.blocked ? this.KG({
            ...DD,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const DD = this.placing,
            {
              id: zD,
              rotation: wD,
              corner: pD
            } = DD;
          this.api.sendCommand(`${sD} place ${zD} ${pD.join(" ")} ${wD}`), DD.sent = {
            atMs: performance.now(),
            corner: [...pD],
            rotation: wD,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${sD} preview off`))
        }, this.chunkWatch = new Fz(DD), this.meshes = new ww(DD)
      }
      getView() {
        return this.view
      }
      DU() {
        const DD = this.placing;
        null !== DD && (null !== DD.sent && !DD.sent.timedOut && performance.now() - DD.sent.atMs > 3e3 ? (DD.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(DD) || this.chunkWatch.changed()) && this.update())
      }
      afterRender(DD) {
        const zD = this.placing;
        null !== zD && (! function(DD, zD) {
          for (let wD = 0; wD < 3; wD++) zD.eye[wD] = DD.cameraPosition[wD], zD.forward[wD] = DD.cameraDirection[wD];
          zD.tanHalfFovX = DD.tanHalfFovX, zD.tanHalfFovY = DD.tanHalfFovY
        }(DD, this.camera), null !== zD.hover && this.moveCentreTo(this.camera, zD.hover[0], zD.hover[1]))
      }
      QI(DD) {
        const zD = this.placing;
        if (null === zD || null === zD.sent || "active" !== DD[0]) return;
        const {
          sent: wD
        } = zD, [, pD, sD, KD, rD, LD, cD] = DD;
        sD && pD === zD.id && cD === wD.rotation && KD === wD.corner[0] && rD === wD.corner[1] && LD === wD.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(DD) {
        let [zD, , wD] = DD;
        const pD = this.api.getTargetedBlock();
        if (null === pD) return null;
        const [sD, , KD] = pD.position;
        return [sD - Math.floor(zD / 2), KD - Math.floor(wD / 2)]
      }
      playerLevel() {
        var DD;
        const [zD, wD, pD] = this.api.PJ(this.localPlayerId);
        if (null !== (DD = this.api.getLocalPlayerMovement()) && void 0 !== DD && DD.onGround) return Math.ceil(wD - .01);
        const [sD, KD, rD] = [Math.floor(zD), Math.floor(wD), Math.floor(pD)];
        for (let LD = KD; LD >= KD - 2; LD--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(sD, LD, rD))) return LD + 1;
        return KD
      }
      followPlayerLevel(DD) {
        if (Mw(DD)) return !1;
        const zD = this.playerLevel();
        return zD !== DD.corner[1] && (DD.corner[1] = zD, !0)
      }
      moveCentreTo(DD, zD, wD) {
        const pD = this.placing,
          sD = Bw(DD, zD, wD, pD.corner[1]);
        if (null !== sD) {
          const [DD, , zD] = mD(pD.id, pD.rotation).size;
          this.moveTo(Math.round(sD[0] - DD / 2), Math.round(sD[1] - zD / 2))
        }
      }
      moveTo(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const pD = this.placing;
        if (Mw(pD)) return;
        const [sD, KD, rD] = pD.corner;
        if (this.centreOnPlot(sD, rD) && !this.centreOnPlot(DD, zD, wD))
          if (this.centreOnPlot(DD, rD, wD)) zD = rD;
          else {
            if (!this.centreOnPlot(sD, zD, wD)) return;
            DD = sD
          } DD === sD && zD === rD && wD === pD.rotation || (pD.rotation = wD, pD.corner = [DD, KD, zD], this.update())
      }
      centreOnPlot(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: pD,
          corner: sD
        } = this.placing, [KD, , rD] = mD(pD, wD).size;
        return this.api.canModifyBlockAt(DD + Math.floor(KD / 2), sD[1], zD + Math.floor(rD / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.KG(null)
      }
      update() {
        const {
          id: DD,
          rotation: zD,
          corner: wD,
          refusals: pD
        } = this.placing, sD = new zw, KD = [];
        let rD = !1,
          LD = 0;
        for (const {
            offset: RD,
            block: AD
          }
          of mD(DD, zD).cells) {
          const [DD, zD, pD] = [wD[0] + RD[0], wD[1] + RD[1], wD[2] + RD[2]];
          KD.push(DD, zD, pD);
          const cD = !this.api.canModifyBlockAt(DD, zD, pD),
            gD = this.api.getBlockId(DD, zD, pD),
            UD = !xz(gD) && !Cz(this.api.blockNameToBlockId(AD), gD);
          rD ||= cD, LD += UD ? 1 : 0, cD || UD ? sD.add(DD, zD, pD, Dw, qz) : sD.add(DD, zD, pD, bz(AD), hw, Zz(AD))
        }
        this.chunkWatch.watch(KD), this.meshes.show(sD.toArray());
        const cD = this.view,
          gD = Mw(this.placing);
        (null === cD || void 0 === cD ? void 0 : cD.id) === DD && cD.blocked === rD && cD.toClear === LD && cD.waiting === gD && cD.refusals === pD || this.KG({
          id: DD,
          blocked: rD,
          toClear: LD,
          waiting: gD,
          refusals: pD
        })
      }
      KG(DD) {
        this.view = DD, RD.l.KG(Gw, DD, !0)
      }
    }

    function Mw(DD) {
      let {
        sent: zD
      } = DD;
      return null !== zD && !zD.timedOut
    }
    var Ow = wD(4257),
      Jw = wD(39113);

    function Ew(DD, zD, wD) {
      const pD = [255 * DD, 255 * zD, 255 * wD],
        [sD, KD, rD] = pD.map((DD => DD + .4 * (255 - DD)));
      return {
        texture: "square_particle",
        bA: 48,
        minLifeTime: .3 / Jw.b,
        maxLifeTime: .55 / Jw.b,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * Jw.b * Jw.b, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...pD, 1],
          maxColor: [sD, KD, rD, 1]
        }, {
          timeFraction: 1,
          minColor: [...pD, 0],
          maxColor: [sD, KD, rD, 0]
        }],
        blendMode: Ow.f.Standard
      }
    }
    const Qw = {
      texture: "glint",
      mipmaps: !1,
      bA: 96,
      minLifeTime: .5 / Jw.b,
      maxLifeTime: .9 / Jw.b,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * Jw.b * Jw.b, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: Ow.f.OneOne
    };
    class Xw {
      constructor(DD, zD) {
        this.api = DD, this.localPlayerId = zD, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(DD) {
        if (this.api.particlesEnabled())
          for (const [zD, wD, pD, sD, KD, rD] of DD.slice(0, 3)) {
            const DD = `${sD},${KD},${rD}`;
            let LD = this.chips.get(DD);
            void 0 === LD && (LD = this.api.createParticles(Ew(sD, KD, rD), {
              pos: [zD + .5, wD + .5, pD + .5]
            }), this.chips.set(DD, LD));
            for (let zD = 0; zD < 8; zD++) this.setPoint(zD, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            LD.emitPoints([zD + .5, wD + .5, pD + .5], this.points, 8)
          }
      }
      layerDone(DD) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const zD = DD.length / 3;
        if (0 === zD || !this.api.particlesEnabled()) return;
        const wD = Math.min(zD, 48),
          [pD, sD, KD] = [DD[0] + .5, DD[1] + 1, DD[2] + .5];
        let rD = 0;
        for (let LD = 0; LD < wD; LD++) {
          const cD = 3 * Math.floor(LD * zD / wD);
          for (let zD = 0; zD < 2; zD++) this.setPoint(rD++, DD[cD] + Math.random() - pD, DD[cD + 1] + 1 - sD, DD[cD + 2] + Math.random() - KD, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(Qw, {
          pos: [pD, sD, KD]
        }), this.sparkles.emitPoints([pD, sD, KD], this.points, rD)
      }
      dispose() {
        var DD;
        for (const zD of this.chips.values()) zD.stop();
        this.chips.clear(), null === (DD = this.sparkles) || void 0 === DD || DD.stop(), this.sparkles = null
      }
      setPoint(DD, zD, wD, pD, sD) {
        const KD = 4 * DD;
        this.points[KD] = zD, this.points[KD + 1] = wD, this.points[KD + 2] = pD, this.points[KD + 3] = sD
      }
    }
    var Vw = wD(1981);
    const Pw = "SpecialAction1",
      Cw = "KeyY",
      xw = "KeyX";

    function Tw(DD) {
      let {
        placement: zD
      } = DD;
      const wD = (0, CD.k)(Gw, zD.getView()),
        {
          t: pD
        } = (0, TD.E)(),
        {
          isTouchScreen: sD
        } = (0, LD.n)(["isTouchScreen"]),
        KD = null !== wD,
        rD = KD && !wD.blocked && !wD.waiting;
      if ((0, PD.d)((DD => KD && !DD.repeat && !(0, gD.isTypingInInput)() && !(0, cD.q)() && !sD), (DD => {
          const wD = function(DD, zD, wD) {
            if (DD === xw) return zD.stop;
            if (DD === Cw) return wD ? zD.build : jw;
            return Vw.u[Pw].includes(DD) ? zD.rotate : null
          }(DD.code, zD, rD);
          null !== wD && (DD.stopPropagation(), wD())
        })), !KD) return null;
      let RD = sD ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return wD.blocked ? RD = "plotsGame:placementOffPlot" : wD.toClear > 0 && (RD = "plotsGame:placementClear"), (0, oD.jsx)(rz.g, {
        placement: "bottom",
        children: (0, oD.jsxs)("div", {
          className: "PlotsPlacementCard",
          children: [(0, oD.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: pD(ID(wD.id).displayName.translationKey)
          }), (0, oD.jsx)("div", {
            className: ED()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: wD.refusals > 0
            }),
            children: pD(RD)
          }, wD.refusals), (0, oD.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, oD.jsxs)(XD.f, {
              onClick: zD.rotate,
              children: [(0, oD.jsx)(bw, {
                noaAction: Pw
              }), pD("plotsGame:placementRotate")]
            }), (0, oD.jsxs)(XD.R, {
              onClick: zD.stop,
              children: [(0, oD.jsx)(bw, {
                keyCode: xw
              }), pD("general:cancel")]
            }), (0, oD.jsxs)(XD.o, {
              disabled: !rD,
              onClick: zD.build,
              children: [(0, oD.jsx)(bw, {
                keyCode: Cw
              }), pD("plotsGame:placementBuild")]
            })]
          })]
        })
      })
    }

    function bw(DD) {
      return (0, oD.jsx)(cz.e, {
        className: "PlotsPlacementKey",
        ...DD
      })
    }

    function jw() {}
    var dw = wD(4562);
    class Sw {
      constructor(DD) {
        this.placement = DD, this.press = null
      }
      down(DD) {
        if (null !== this.press) return !1;
        const {
          id: zD,
          mouse: wD,
          x: pD,
          y: sD,
          atMs: KD
        } = DD;
        return this.press = {
          id: zD,
          mouse: wD,
          x: pD,
          y: sD,
          atMs: KD,
          moved: !1
        }, wD || this.placement.beginDrag(DD.ndcX, DD.ndcY), !0
      }
      move(DD) {
        const zD = this.press;
        null !== zD && zD.id === DD.id && (zD.moved ||= Math.hypot(DD.x - zD.x, DD.y - zD.y) > 8), DD.mouse ? this.placement.hoverAt(DD.ndcX, DD.ndcY) : (null === zD || void 0 === zD ? void 0 : zD.id) === DD.id && this.placement.dragTo(DD.ndcX, DD.ndcY)
      }
      up(DD) {
        const zD = this.press;
        (null === zD || void 0 === zD ? void 0 : zD.id) === DD.id && (this.move(DD), this.end(), !zD.moved && (zD.mouse || DD.atMs - zD.atMs <= 250) && this.placement.tap())
      }
      cancel(DD) {
        var zD;
        (null === (zD = this.press) || void 0 === zD ? void 0 : zD.id) === DD && this.end()
      }
      leave(DD) {
        let {
          id: zD,
          mouse: wD
        } = DD;
        wD && this.placement.endHover(), this.cancel(zD)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }

    function iw(DD) {
      let {
        placement: zD
      } = DD;
      return null === (0, CD.k)(Gw, zD.getView()) ? null : (0, oD.jsx)(lw, {
        placement: zD
      })
    }

    function lw(DD) {
      let {
        placement: zD
      } = DD;
      (0, dw.e)(!0, !0, "PlotsPlacementLayer");
      const wD = (0, KD.useMemo)((() => new Sw(zD)), [zD]);
      return (0, oD.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: DD => {
          "mouse" === DD.pointerType && 0 !== DD.button || !wD.down(Ww(DD)) || DD.currentTarget.setPointerCapture(DD.pointerId)
        },
        onPointerMove: DD => {
          wD.move(Ww(DD))
        },
        onPointerUp: DD => {
          wD.up(Ww(DD))
        },
        onPointerCancel: DD => {
          wD.cancel(DD.pointerId)
        },
        onLostPointerCapture: DD => {
          wD.cancel(DD.pointerId)
        },
        onPointerLeave: DD => {
          wD.leave(Ww(DD))
        },
        "aria-hidden": !0
      })
    }

    function Ww(DD) {
      const {
        left: zD,
        top: wD,
        width: pD,
        height: sD
      } = DD.currentTarget.getBoundingClientRect();
      return {
        id: DD.pointerId,
        mouse: "mouse" === DD.pointerType,
        x: DD.clientX,
        y: DD.clientY,
        ndcX: (DD.clientX - zD) / pD * 2 - 1,
        ndcY: 1 - (DD.clientY - wD) / sD * 2,
        atMs: DD.timeStamp
      }
    }
    var Nw = wD(2356),
      Zw = wD(36658),
      yw = wD(1973),
      kw = wD(1268);
    const mw = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function ew(DD) {
      let {
        hud: zD
      } = DD;
      const wD = (0, CD.k)(Rz, zD.getPlot()),
        [pD, sD] = (0, KD.useState)(null),
        rD = (0, Zw.i)(pD);
      if ("none" === wD[0]) return null;
      const [, LD, cD, gD, RD, AD] = wD;
      return (0, oD.jsx)("div", {
        className: ED()("PlotsPlotBannerContainer", {
          Below: rD
        }),
        children: (0, oD.jsx)(ow, {
          plotX: LD,
          plotZ: cD,
          ownerName: gD,
          ownerId: RD,
          relation: AD,
          plaqueRef: sD
        }, `${LD},${cD}`)
      })
    }

    function ow(DD) {
      var zD, wD;
      let {
        plotX: pD,
        plotZ: sD,
        ownerName: KD,
        ownerId: rD,
        relation: LD,
        plaqueRef: cD
      } = DD;
      const {
        t: gD
      } = (0, TD.E)(), RD = (0, yw.i)("hiddenPlayerNames"), AD = (0, yw.i)("players"), UD = null === rD ? null : null !== (zD = null === (wD = AD.byId[rD]) || void 0 === wD ? void 0 : wD.cosmetics) && void 0 !== zD ? zD : null, fD = gD("plotsGame:plotBannerCoords", {
        x: pD,
        z: sD
      }), ID = "own" === LD || null !== KD;
      return (0, oD.jsxs)("div", {
        ref: cD,
        className: ED()("PlotsPlotBanner", {
          Own: "own" === LD,
          Shared: "shared" === LD
        }),
        role: "status",
        children: [(0, oD.jsxs)("span", {
          className: ED()("PlotsPlotBannerSeal", {
            Face: null !== UD
          }),
          children: [null !== UD && (0, oD.jsx)(Nw.c, {
            cosmetics: UD
          }), null === UD && (0, oD.jsx)(QD.e, {
            name: mw[LD]
          })]
        }), (0, oD.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, oD.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === LD && gD("plotsGame:plotBannerYours"), "own" !== LD && null !== KD && gD("plotsGame:plotBannerOwner", {
              name: (0, kw.g)(KD, RD)
            }), !ID && fD]
          }), ID && (0, oD.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [fD, "shared" === LD && (0, oD.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: gD("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }

    function aw(DD) {
      let {
        progress: zD,
        goal: wD
      } = DD;
      const pD = Math.min(zD, wD);
      return (0, oD.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, oD.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": wD,
          "aria-valuenow": pD,
          children: (0, oD.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${pD/wD})`
            }
          })
        }), (0, oD.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [pD, "/", wD]
        })]
      })
    }

    function uw(DD) {
      return {
        translationKey: `plotsGame:${DD}`,
        actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
      }
    }
    const vw = {
      house: {
        icon: "house",
        titleKey: "plotsGame:starterLotHouseTitle",
        desktop: uw("starterLotHouseHint", ["alt-fire"]),
        touch: uw("starterLotHouseHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotHousePlain"
      },
      garden: {
        icon: "sparkle",
        titleKey: "plotsGame:starterLotGarden",
        desktop: uw("starterLotGardenHint", ["alt-fire"]),
        touch: uw("starterLotGardenHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotGardenPlain"
      },
      boulder: {
        icon: "hammer",
        titleKey: "plotsGame:starterLotBoulder",
        desktop: uw("starterLotBreakHint", ["primary-fire"]),
        touch: uw("starterLotBreakHintTouch"),
        plainKey: "plotsGame:starterLotBreakPlain"
      },
      fly: {
        icon: "angles-up",
        titleKey: "plotsGame:starterLotFly",
        desktop: uw("starterLotFlyHint", ["jump"]),
        touch: uw("starterLotFlyHintTouch"),
        plainKey: "plotsGame:starterLotFlyPlain"
      },
      backpack: {
        icon: "backpack",
        titleKey: "plotsGame:starterLotBackpack",
        desktop: uw("starterLotBackpackHint", ["OpenInventory"]),
        touch: uw("starterLotBackpackHintTouch"),
        plainKey: "plotsGame:starterLotBackpackPlain"
      },
      neighbour: {
        icon: "person",
        titleKey: "plotsGame:starterLotNeighbour",
        desktop: uw("starterLotNeighbourHint", ["forward", "left", "backward", "right"]),
        touch: uw("starterLotNeighbourHintTouch"),
        plainKey: "plotsGame:starterLotNeighbourPlain"
      }
    };

    function tw(DD, zD, wD) {
      const {
        translationKey: pD,
        actions: sD
      } = wD ? zD.touch : zD.desktop;
      if (0 === sD.length) return DD(pD);
      const KD = [];
      for (const rD of sD) {
        const pD = (0, Vw.q)(rD, wD),
          sD = Vw.u[rD][0];
        if (null === pD && void 0 === sD) return DD(zD.plainKey);
        KD.push(null === pD ? (0, Vw.m)(sD) : DD(pD.translationKey))
      }
      return DD(pD, {
        key: KD.join("")
      })
    }

    function Fw(DD) {
      let {
        hud: zD
      } = DD;
      const wD = (0, CD.k)(gz, zD.getStep()),
        {
          t: pD
        } = (0, TD.E)();
      return (0, oD.jsxs)(rz.g, {
        placement: "bottom",
        children: ["step" === wD[0] && (0, oD.jsx)(Yw, {
          step: wD[1],
          progress: wD[2],
          goal: wD[3]
        }, wD[1]), "celebrate" === wD[0] && (0, oD.jsx)(Hw, {
          className: ED()("Celebrate", {
            Gold: "house" === wD[1]
          }),
          icon: "star",
          title: pD("house" === wD[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
        }, `celebrate-${wD[1]}`)]
      })
    }

    function Yw(DD) {
      let {
        step: zD,
        progress: wD,
        goal: pD
      } = DD;
      const {
        isTouchScreen: sD
      } = (0, LD.n)(["isTouchScreen"]), {
        t: KD
      } = (0, TD.E)(), rD = vw[zD];
      return (0, oD.jsxs)(Hw, {
        icon: rD.icon,
        title: KD(rD.titleKey),
        children: [(0, oD.jsx)("div", {
          className: "PlotsStepCardHint SmallTextLight",
          children: tw(KD, rD, sD)
        }), pD > 1 && (0, oD.jsx)(aw, {
          progress: wD,
          goal: pD
        }), "backpack" === zD && sD && (0, oD.jsx)(qw, {})]
      })
    }

    function Hw(DD) {
      let {
        className: zD,
        icon: wD,
        title: pD,
        children: sD
      } = DD;
      return (0, oD.jsxs)("div", {
        className: ED()("PlotsStepCard", zD),
        role: "status",
        children: [(0, oD.jsx)("span", {
          className: "PlotsStepCardIcon",
          children: (0, oD.jsx)(QD.e, {
            name: wD
          })
        }), (0, oD.jsxs)("div", {
          className: "PlotsStepCardBody",
          children: [(0, oD.jsx)("div", {
            className: "PlotsStepCardTitle SmallTextBold",
            children: pD
          }), sD]
        })]
      })
    }

    function qw() {
      return (0, KD.useEffect)((() => (LD.e.set({
        backpackPointerRequested: !0
      }), () => {
        LD.e.set({
          backpackPointerRequested: !1
        })
      })), []), null
    }
    const Dp = function(DD, zD, wD, pD) {
      let {
        localPlayerId: sD
      } = pD;
      const LD = new Az;
      let cD = null,
        gD = null,
        RD = null,
        AD = null,
        UD = null;
      const fD = [];
      return {
        onCreate: DD => {
          cD = new Xw(DD, sD), gD = new gw(DD, sD, cD), RD = new gw(DD, sD, cD), AD = new nw(DD, sD), UD = new OD(DD, AD), fD.push((0, rD.w)((0, KD.createElement)(KD.Fragment, null, (0, KD.createElement)(ew, {
            hud: LD
          }), (0, KD.createElement)(Fw, {
            hud: LD
          }), (0, KD.createElement)(fz, {
            hud: LD,
            journal: UD
          }), (0, KD.createElement)(iw, {
            placement: AD
          }), (0, KD.createElement)(Tw, {
            placement: AD
          })), {
            content: (0, KD.createElement)(sz, {
              journal: UD
            })
          }))
        },
        DU: () => {
          gD.DU(), RD.DU(), AD.DU(), UD.DU()
        },
        onPlayerAttemptAltAction: (DD, zD, wD, pD, sD, KD) => {
          var rD;
          if (null !== KD) return;
          const LD = void 0 === zD ? null : [zD, wD, pD];
          return null !== (rD = gD.attemptAltAction(LD)) && void 0 !== rD ? rD : RD.attemptAltAction(LD)
        },
        onPlayerClickUp: () => {
          gD.endPress(), RD.endPress()
        },
        onAfterRender: (DD, zD) => {
          AD.afterRender(zD), gD.afterRender(zD), RD.afterRender(zD)
        },
        onClose: () => {
          for (const DD of fD) DD();
          cD.dispose(), gD.dispose(), RD.dispose(), AD.dispose(), cD = null, gD = null, RD = null, AD = null, UD = null
        },
        onReceivedMessageFromServer: (DD, zD) => {
          if ("plotsStarterLot" === DD) LD.receiveStep(zD);
          else if ("plotsPlot" === DD) LD.receivePlot(zD);
          else if ("plotsStarterHouse" === DD) gD.QI(zD);
          else if ("plotsBlueprint" === DD) {
            const DD = zD;
            RD.QI(DD), AD.QI(DD)
          } else "plotsJournal" === DD ? UD.QI(zD) : "plotsJournalOpen" === DD ? UD.openFromServer() : "plotsPreviewEnd" === DD && AD.endFromServer()
        }
      }
    }
  },
  39113: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD,
      f: () => KD
    });
    const pD = 1 / .6,
      sD = {
        kind: "smokePuff"
      };
    class KD {
      constructor(DD, zD, wD) {
        this.style = DD, this.bA = zD, this.half = wD, this.particles = null, this.lastFrame = -1
      }
      emit(DD, zD, wD) {
        let KD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return wD !== this.lastFrame && (this.lastFrame = wD, this.particles || (this.particles = DD.createParticles(function(DD, zD) {
          const [
            [wD, KD, rD],
            [LD, cD, gD]
          ] = DD.colours;
          return {
            texture: DD.soft ? sD : "square_particle",
            bA: zD,
            minLifeTime: DD.life[0] / pD,
            maxLifeTime: DD.life[1] / pD,
            minEmitPower: DD.power[0] * pD,
            maxEmitPower: DD.power[1] * pD,
            minSize: DD.size[0],
            maxSize: DD.size[1],
            emitRate: 0,
            gravity: [0, DD.lift * pD * pD, 0],
            dir1: [-DD.spread, 1, -DD.spread],
            dir2: [DD.spread, 1, DD.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [wD, KD, rD, DD.alpha],
              maxColor: [LD, cD, gD, DD.alpha]
            }, {
              timeFraction: 1,
              minColor: [wD, KD, rD, 0],
              maxColor: [LD, cD, gD, 0]
            }],
            blendMode: DD.blendMode
          }
        }(this.style, this.bA), {
          pos: zD,
          half: this.half
        })), this.particles.moveTo(zD, this.half), this.particles.emit(KD), !0)
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