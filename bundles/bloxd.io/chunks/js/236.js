export const id = 236;
export const ids = [236];
export const modules = {
  38766: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => tD
    });
    const FY = [0, 90, 180, 270],
      AY = "plotsblueprint";
    var IY = DY(61),
      RY = DY(36032),
      OY = DY(19),
      gY = DY(1619),
      aY = DY(1699),
      vY = DY(25);
    const uY = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      sY = {
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
      iY = ["small", "medium", "large"].flatMap((YY => uY.flat().filter((rY => sY[rY].tier === YY))));

    function yY(YY) {
      return sY[YY]
    }
    const QY = new Map(uY.flatMap((YY => YY.slice(1).map(((rY, DY) => [rY, YY[DY]])))));

    function oY(YY) {
      var rY;
      return null !== (rY = QY.get(YY)) && void 0 !== rY ? rY : null
    }
    const WY = {
      farm_hut: "plotsGame:journalNoteFarmHut",
      rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
      castle_tower: "plotsGame:journalNoteCastleTower",
      farm_house: "plotsGame:journalNoteFarmHouse",
      farm_barn: "plotsGame:journalNoteFarmBarn"
    };

    function EY(YY, rY) {
      const DY = new Set(YY),
        FY = function(YY) {
          const rY = new Set(YY);
          return new Set(iY.filter((YY => {
            const DY = oY(YY);
            return null === DY || rY.has(DY)
          })))
        }(DY);
      return iY.map((YY => {
        const AY = YY === rY;
        return DY.has(YY) ? {
          id: YY,
          active: AY,
          state: "completed",
          unlockedBy: null
        } : FY.has(YY) ? {
          id: YY,
          active: AY,
          state: "open",
          unlockedBy: null
        } : {
          id: YY,
          active: AY,
          state: "locked",
          unlockedBy: oY(YY)
        }
      }))
    }
    const mY = "plotsJournalChanged";
    class VY {
      constructor(YY, rY) {
        this.api = YY, this.placement = rY, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.gy("journal_opened")
        }, this.build = YY => {
          this.gy("placement_started"), this.placement.start(YY), (0, RY.f)()
        }, this.putAway = () => {
          this.api.sendCommand(`${AY} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      Cy(YY) {
        let [, rY, DY] = YY;
        this.pages = EY(rY, DY), vY.g.vo(mY, this.pages, !0)
      }
      openFromServer() {
        this.openRequested = !0, this.Zu()
      }
      Zu() {
        this.openRequested && !OY.b.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, gY.p)() || (0, aY.isTypingInInput)() || null !== this.placement.getView() || (0, RY.o)())
      }
      gy(YY) {
        this.reported.has(YY) || (this.reported.add(YY), this.api.sendCommand(`${AY} report ${YY}`))
      }
    }
    var SY = DY(1092),
      lY = DY.n(SY),
      TY = DY(1098),
      eY = DY(1437),
      NY = DY(4086),
      BY = DY(2973),
      cY = DY(1430),
      KY = DY(1943),
      HY = DY(1211),
      zY = DY(8830);
    const ZY = [0, 90, 180, 270],
      CY = /^(meta\|rot\d)\|([lrud]+)$/,
      fY = "nesw",
      jY = /^meta\|([nesw]*)\|?(Stacked)?$/,
      hY = function(YY) {
        const rY = new WeakMap;
        return (DY, FY) => {
          let AY = rY.get(DY);
          return void 0 === AY && (AY = YY(DY, FY), rY.set(DY, AY)), AY
        }
      }((YY => new dY(YY)));
    class dY {
      constructor(YY) {
        this.blockMetadata = YY, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const rY = new Set(Object.keys(YY).map((rY => YY[rY].id)));
        rY.add(0), this.maxBlockId = Math.max(...rY)
      }
      static
      for (YY) {
        return hY(YY)
      }
      getBlockIdMapping(YY, rY) {
        const DY = this.getBlockIdMappingKey(YY, rY);
        let FY = this.blockIdMappings.get(DY);
        return void 0 === FY && ZY.includes(YY) && (FY = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, YY, rY), this.blockIdMappings.set(DY, FY)), FY
      }
      turnBlockId(YY, rY, DY) {
        return this.mapBlockId(this.blockMetadata[YY], rY, this.getRotationMapping(rY, DY), DY)
      }
      getBlockIdMappingKey(YY, rY) {
        return `r${YY}|m${Number(rY)}`
      }
      createBlockIdMapping(YY, rY, DY, FY) {
        const AY = new Uint16Array(rY + 1),
          IY = this.getRotationMapping(DY, FY);
        for (const RY in YY) {
          const rY = YY[RY];
          AY[rY.id] = this.mapBlockId(rY, DY, IY, FY)
        }
        return AY
      }
      getRotationMapping(YY, rY) {
        const DY = Math.round(YY / 90),
          FY = new Uint8Array(4);
        for (let AY = 0; AY < 4; AY++) FY[AY] = (4 + AY - DY) % 4;
        if (rY) {
          let YY = FY[0];
          FY[0] = FY[1], FY[1] = YY, YY = FY[2], FY[2] = FY[3], FY[3] = YY
        }
        return FY
      }
      mapBlockId(YY, rY, DY, FY) {
        var AY;
        const {
          blockMetadata: IY
        } = this, RY = Math.round(rY / 90), {
          id: OY,
          meta: gY
        } = YY, {
          rot: aY,
          rootName: vY,
          metaStr: uY
        } = gY;
        let sY;
        const [, iY, yY] = null !== (AY = jY.exec(uY)) && void 0 !== AY ? AY : [];
        if (void 0 !== iY) {
          var QY, oY;
          sY = null !== (QY = null === (oY = IY[`${vY}|meta|${[fY.split("").filter(((YY,rY)=>iY.split("").some((YY=>{const DY=fY.indexOf(YY);return((FY?3-DY:DY)+RY)%4===rY})))).join(""),yY].filter(Boolean).join("|")}`]) || void 0 === oY ? void 0 : oY.id) && void 0 !== QY ? QY : OY
        } else if (null === aY) sY = OY;
        else {
          var WY, EY;
          const YY = DY[aY - 1] + 1;
          let rY = uY.replace(`rot${aY}`, `rot${YY}`);
          FY && gY.stairsCorner && (rY = rY.replace(/(Left|Right)$/, (YY => "Left" === YY ? "Right" : "Left"))), FY && "Chest" === vY && (rY = rY.replace(/\|(left|right)$/, ((YY, rY) => "left" === rY ? "|right" : "|left")));
          const AY = CY.exec(rY);
          if (FY && null !== AY) {
            const YY = "lrud".split("").filter((YY => AY[2].includes("l" === YY ? "r" : "r" === YY ? "l" : YY)));
            rY = `${AY[1]}|${YY.join("")}`
          }
          const RY = `${vY}|${rY}`;
          if (sY = null !== (WY = null === (EY = IY[RY]) || void 0 === EY ? void 0 : EY.id) && void 0 !== WY ? WY : null, null === sY) {
            const YY = IY[vY];
            sY = YY.rootMetaDesc === RY ? YY.id : OY
          }
        }
        return sY
      }
    }

    function JY(YY, rY, DY) {
      let {
        xRotationMappedOrigin: FY,
        shouldSwapXZ: AY
      } = DY;
      const IY = AY ? rY : YY;
      return null === FY ? IY : FY - IY
    }

    function MY(YY, rY, DY) {
      let {
        zRotationMappedOrigin: FY,
        shouldSwapXZ: AY
      } = DY;
      const IY = AY ? YY : rY;
      return null === FY ? IY : FY - IY
    }
    const wY = {
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
      bY = new Map;

    function XY(YY, rY) {
      const DY = `${YY}|${rY}`;
      let FY = bY.get(DY);
      if (void 0 === FY) {
        const {
          size: AY,
          palette: IY,
          layers: RY
        } = wY[YY], OY = 90 === rY || 270 === rY, [gY, aY] = OY ? [AY[2], AY[0]] : [AY[0], AY[2]], vY = function(YY, rY, DY) {
          let FY = null,
            AY = null,
            IY = !1;
          switch (YY) {
            case 0:
              break;
            case 90:
              FY = rY - 1, IY = !0;
              break;
            case 180:
              FY = rY - 1, AY = DY - 1;
              break;
            case 270:
              AY = DY - 1, IY = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${YY}`)
          }
          return {
            xRotationMappedOrigin: FY,
            zRotationMappedOrigin: AY,
            shouldSwapXZ: IY
          }
        }(rY, gY, aY), uY = dY.for(zY.h), sY = IY.map((YY => (0, zY.f)(uY.turnBlockId((0, zY.k)(YY), rY, !1)))), iY = [];
        RY.forEach(((YY, rY) => {
          YY.split(" ").forEach(((YY, DY) => {
            for (let FY = 0; FY < YY.length; FY++)
              if ("." !== YY[FY]) {
                const AY = [JY(FY, DY, vY), rY, MY(FY, DY, vY)];
                iY.push({
                  offset: AY,
                  block: sY[YY.charCodeAt(FY) - "a".charCodeAt(0)]
                })
              }
          }))
        })), FY = {
          size: [gY, AY[1], aY],
          cells: iY
        }, bY.set(DY, FY)
      }
      return FY
    }
    const qY = {
      farm_hut: DY.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
      farm_house: DY.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
      farm_barn: DY.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
      rusticHome_tent: DY.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
      rusticHome_cabin: DY.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
      rusticHome_house: DY.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
      market_stand: DY.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
      market_stall: DY.p + "static/media/market_stall.9a562807f9dff591618a.webp",
      market_shop: DY.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
      castle_wall: DY.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
      castle_gate: DY.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
      castle_tower: DY.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
    };
    var pY = DY(1125);
    const kY = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function GY(YY) {
      let {
        page: rY,
        building: DY,
        onBuild: FY,
        onPutAway: AY
      } = YY;
      const {
        t: IY
      } = (0, HY.C)(), {
        displayName: RY,
        tier: OY
      } = yY(rY.id), gY = XY(rY.id, 0).cells.length, aY = WY[rY.id], vY = "locked" === rY.state, uY = DY ? eY.f : eY.n;
      return (0, pY.jsxs)("article", {
        className: lY()("PlotsJournalPage", {
          Locked: vY
        }),
        children: [(0, pY.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: IY(RY.translationKey)
        }), (0, pY.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [IY(kY[OY]), " \xb7 ", IY("plotsGame:journalBlocks", {
            blocks: String(gY)
          })]
        }), (0, pY.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [iY.map((YY => (0, pY.jsx)("img", {
            className: lY()({
              Shown: YY === rY.id
            }),
            src: qY[YY],
            alt: "",
            draggable: !1
          }, YY))), "completed" === rY.state && (0, pY.jsx)("span", {
            className: "PlotsJournalStamp",
            children: IY("plotsGame:journalBuilt")
          }), vY && (0, pY.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, pY.jsx)(TY.e, {
              name: "lock"
            })
          })]
        }), void 0 !== aY && "completed" !== rY.state && (0, pY.jsx)("p", {
          className: "PlotsJournalNote",
          children: IY(aY)
        }), (0, pY.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === rY.state && (0, pY.jsx)("p", {
            className: "PlotsJournalHint",
            children: IY("plotsGame:journalLocked", {
              name: IY(yY(rY.unlockedBy).displayName.translationKey)
            })
          }), rY.active && (0, pY.jsxs)(pY.Fragment, {
            children: [(0, pY.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: IY("plotsGame:journalBuilding")
            }), (0, pY.jsx)(eY.j, {
              onClick: AY,
              children: IY("plotsGame:journalPutAway")
            })]
          }), !vY && !rY.active && (0, pY.jsx)(uY, {
            onClick: () => {
              FY(rY.id)
            },
            children: IY("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function xY(YY) {
      let {
        className: rY,
        page: DY,
        hidden: FY,
        building: AY,
        journal: IY
      } = YY;
      return (0, pY.jsxs)("div", {
        ref: YY => {
          null !== YY && (YY.inert = FY)
        },
        className: lY()("PlotsJournalSide", rY),
        children: [void 0 !== DY && (0, pY.jsx)(GY, {
          page: DY,
          building: AY,
          onBuild: IY.build,
          onPutAway: IY.putAway
        }), void 0 === DY && (0, pY.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var nY = DY(341),
      PY = DY(1774);

    function UY(YY) {
      return Math.cos((0, PY.q)(YY))
    }

    function LY(YY) {
      return (0, PY.K)(Math.acos(nY.c.clamp(YY, -1, 1)))
    }

    function tY(YY, rY, DY, FY, AY) {
      const IY = Math.abs(rY - YY),
        RY = (0, PY.K)(AY / (DY * Math.abs(Math.sin((0, PY.q)(YY))))),
        OY = 450 * Math.min(1, IY / FY),
        gY = RY > 0 ? 3 * IY / RY : 1 / 0;
      return Math.round(Math.max(120, Math.min(OY, gY)))
    }
    class Yr {
      constructor() {
        this.samples = []
      }
      add(YY, rY) {
        for (this.samples.push({
            x: YY,
            at: rY
          }); rY - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const YY = this.samples[0],
          rY = this.samples[this.samples.length - 1];
        return rY.at > YY.at ? (rY.x - YY.x) / (rY.at - YY.at) : 0
      }
    }

    function rr(YY, rY) {
      return YY > rY && YY >= 600
    }

    function Dr(YY) {
      return LY(new DOMMatrixReadOnly(getComputedStyle(YY).transform).m11)
    }

    function Fr(YY, rY) {
      YY.style.transform = `rotateY(${-rY}deg)`, YY.classList.add("Turning")
    }

    function Ar(YY) {
      let {
        journal: rY
      } = YY;
      const {
        t: DY
      } = (0, HY.C)(), FY = (0, cY.k)(mY, rY.getPages()), AY = (0, KY.d)(rr), [OY, gY] = (0, IY.useState)((() => function(YY) {
        const rY = YY.findIndex((YY => YY.active));
        return -1 !== rY ? rY : Math.max(0, YY.findIndex((YY => "open" === YY.state)))
      }(FY))), vY = (0, IY.useRef)(null), uY = (0, IY.useRef)(null), sY = (0, IY.useRef)({
        Forward: null,
        Back: null
      }), iY = AY ? 2 : 1, yY = AY ? 180 : 90, QY = OY - OY % iY, oY = QY > 0, WY = QY + iY < FY.length, EY = (0, IY.useCallback)((() => {
        const YY = uY.current;
        return null === YY ? QY : (uY.current = null, YY.animation.cancel(), (rY = sY.current[YY.direction]).style.transform = "", rY.classList.remove("Turning"), null === YY.next ? QY : (gY(YY.next), YY.next));
        var rY
      }), [QY]), VY = (0, IY.useCallback)(((YY, rY, DY, FY) => {
        const AY = sY.current[YY],
          IY = Dr(AY),
          RY = rY === ("Forward" === YY) ? yY : 0;
        Fr(AY, RY);
        const OY = AY.animate([{
          transform: `rotateY(${-IY}deg)`
        }, {
          transform: `rotateY(${-RY}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : tY(IY, RY, AY.offsetWidth, yY, RY > IY ? -DY : DY),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        uY.current = {
          direction: YY,
          animation: OY,
          next: rY ? FY + ("Forward" === YY ? iY : -iY) : null
        }, OY.onfinish = () => {
          var YY;
          (null === (YY = uY.current) || void 0 === YY ? void 0 : YY.animation) === OY && EY()
        }
      }), [iY, yY, EY]), SY = (0, IY.useCallback)((YY => {
        if (null !== vY.current) return;
        const rY = EY();
        ("Forward" === YY ? rY + iY < FY.length : rY > 0) && VY(YY, !0, 0, rY)
      }), [EY, VY, iY, FY.length]);
      (0, IY.useEffect)((() => {
        rY.onOpened()
      }), [rY]), (0, IY.useEffect)((() => () => {
        var YY;
        null === (YY = uY.current) || void 0 === YY || YY.animation.cancel()
      }), []), (0, IY.useEffect)((() => {
        const YY = YY => {
          var rY;
          YY.pointerId !== (null === (rY = vY.current) || void 0 === rY ? void 0 : rY.pointerId) || vY.current.following || (vY.current = null)
        };
        return window.addEventListener("pointerup", YY), () => {
          window.removeEventListener("pointerup", YY)
        }
      }), []), (0, BY.e)((YY => ("ArrowLeft" === YY.code || "ArrowRight" === YY.code) && !(0, aY.isTypingInInput)()), (YY => {
        YY.stopPropagation(), SY("ArrowLeft" === YY.code ? "Back" : "Forward")
      }));
      const TY = (YY, rY, DY) => {
          const FY = function(YY, rY, DY, FY) {
            return (YY < 0 ? DY : FY) ? nY.c.clampAbs(YY, rY) : Math.sign(YY) * rY * (1 - 1 / (.55 * Math.abs(YY) / rY + 1))
          }(YY.base + DY, iY * YY.width, WY, oY);
          return "Forward" === rY ? Math.min(FY, 0) : Math.max(FY, 0)
        },
        zY = (YY, rY) => {
          const DY = vY.current;
          if (vY.current = null, null === DY.direction) return;
          DY.speed.add(YY, rY);
          const FY = DY.speed.get(),
            AY = TY(DY, DY.direction, YY - DY.x);
          VY(DY.direction, null !== function(YY, rY, DY, FY, AY) {
            if (Math.abs(rY) >= .3 ? Math.sign(rY) !== Math.sign(YY) : Math.abs(YY) < .5 * DY) return null;
            const IY = YY < 0 ? "Forward" : "Back";
            return ("Forward" === IY ? FY : AY) ? IY : null
          }(AY, FY, iY * DY.width, WY, oY), FY, QY)
        },
        ZY = FY.some((YY => YY.active)),
        CY = (YY, DY, AY) => (0, pY.jsx)(xY, {
          className: YY,
          page: DY >= 0 && DY < FY.length ? FY[DY] : void 0,
          hidden: AY,
          building: ZY,
          journal: rY
        });
      return (0, pY.jsx)(NY.e, {
        close: RY.h,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, pY.jsxs)("section", {
          className: lY()("PlotsJournal", {
            Spread: AY
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": DY("plotsGame:journalTitle"),
          children: [(0, pY.jsx)(eY.k, {
            className: "PlotsJournalClose",
            onClick: RY.h
          }), (0, pY.jsx)(Ir, {
            direction: "Back",
            disabled: !oY,
            onTurn: SY
          }), (0, pY.jsx)("div", {
            className: "PlotsJournalBookPages",
            onPointerDown: YY => {
              var rY;
              if (!YY.isPrimary || 0 !== YY.button || null !== uY.current && null !== YY.target.closest("button")) return;
              const DY = new Yr;
              DY.add(YY.clientX, YY.timeStamp);
              const FY = sY.current.Forward.offsetWidth,
                AY = uY.current;
              uY.current = null;
              let IY = 0;
              if (null !== AY) {
                const rY = sY.current[AY.direction],
                  DY = Dr(rY);
                AY.animation.cancel(), Fr(rY, DY), IY = function(YY, rY, DY, FY) {
                  return (YY < 0 ? DY : FY) ? YY : Math.sign(YY) * rY * (1 / (1 - Math.min(Math.abs(YY) / rY, .99)) - 1) / .55
                }(function(YY, rY, DY, FY) {
                  return DY * (UY(rY) - UY("Forward" === YY ? 0 : FY))
                }(AY.direction, DY, FY, yY), iY * FY, WY, oY), YY.currentTarget.setPointerCapture(YY.pointerId)
              }
              vY.current = {
                pointerId: YY.pointerId,
                x: YY.clientX,
                y: YY.clientY,
                base: IY,
                width: FY,
                following: null !== AY,
                direction: null !== (rY = null === AY || void 0 === AY ? void 0 : AY.direction) && void 0 !== rY ? rY : null,
                speed: DY
              }
            },
            onPointerMove: YY => {
              const rY = vY.current;
              if (null === rY || YY.pointerId !== rY.pointerId) return;
              if (0 === YY.buttons) return void zY(YY.clientX, YY.timeStamp);
              const DY = YY.clientX - rY.x;
              !rY.following && function(YY, rY) {
                return Math.abs(YY) > 8 && Math.abs(YY) > Math.abs(rY)
              }(DY, YY.clientY - rY.y) && (rY.following = !0, rY.direction = DY < 0 ? "Forward" : "Back", YY.currentTarget.setPointerCapture(YY.pointerId)), null !== rY.direction && (rY.speed.add(YY.clientX, YY.timeStamp), Fr(sY.current[rY.direction], function(YY, rY, DY, FY) {
                const AY = DY * UY("Forward" === YY ? 0 : FY) + rY;
                return nY.c.clamp(LY(AY / DY), 0, FY)
              }(rY.direction, TY(rY, rY.direction, DY), rY.width, yY)))
            },
            onPointerUp: YY => {
              var rY;
              YY.pointerId === (null === (rY = vY.current) || void 0 === rY ? void 0 : rY.pointerId) && zY(YY.clientX, YY.timeStamp)
            },
            onPointerCancel: YY => {
              const rY = vY.current;
              YY.pointerId === (null === rY || void 0 === rY ? void 0 : rY.pointerId) && (vY.current = null, null !== rY.direction && VY(rY.direction, !1, 0, QY))
            },
            children: (0, pY.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [AY && CY("Left", QY - 2, !0), CY("Right", QY + 2 * iY - 1, !0), (0, pY.jsxs)("div", {
                ref: YY => {
                  sY.current.Back = YY
                },
                className: "PlotsJournalLeaf Back",
                children: [CY("Recto", QY - 1, !0), AY && CY("Verso", QY, !1)]
              }), (0, pY.jsxs)("div", {
                ref: YY => {
                  sY.current.Forward = YY
                },
                className: "PlotsJournalLeaf Forward",
                children: [CY("Recto", QY + iY - 1, !1), AY && CY("Verso", QY + iY, !0)]
              })]
            })
          }), (0, pY.jsx)(Ir, {
            direction: "Forward",
            disabled: !WY,
            onTurn: SY
          })]
        })
      })
    }

    function Ir(YY) {
      let {
        direction: rY,
        disabled: DY,
        onTurn: FY
      } = YY;
      const {
        t: AY
      } = (0, HY.C)();
      return (0, pY.jsx)("div", {
        className: lY()("PlotsJournalArrow", rY),
        children: (0, pY.jsx)(eY.f, {
          disabled: DY,
          ariaLabel: AY("Forward" === rY ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            FY(rY)
          },
          children: (0, pY.jsx)(TY.e, {
            name: "angle-up"
          })
        })
      })
    }
    var Rr = DY(36025),
      Or = DY(1793),
      gr = DY(1842);
    const ar = "plotsStepChanged",
      vr = "plotsPlotChanged";
    class ur {
      constructor() {
        this.step = ["none"], this.plot = ["none"]
      }
      getStep() {
        return this.step
      }
      receiveStep(YY) {
        this.step = YY, vY.g.vo(ar, YY, !0)
      }
      getPlot() {
        return this.plot
      }
      receivePlot(YY) {
        this.plot = YY, vY.g.vo(vr, YY, !0)
      }
    }
    const sr = "KeyJ";

    function ir(YY) {
      let {
        hud: rY,
        journal: DY
      } = YY;
      const FY = (0, cY.k)(mY, DY.getPages()),
        AY = (0, cY.k)(ar, rY.getStep()),
        {
          isTouchScreen: IY
        } = (0, OY.j)(["isTouchScreen"]),
        {
          t: vY
        } = (0, HY.C)(),
        uY = null !== FY && "none" === AY[0];
      return (0, BY.e)((YY => null !== FY && YY.code === sr && !YY.repeat && !(0, aY.isTypingInInput)()), (YY => {
        (0, gY.z)(YY, uY, RY.o)
      })), uY ? (0, pY.jsx)(Rr.e, {
        placement: "topRight",
        children: (0, pY.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, pY.jsxs)("button", {
            type: "button",
            className: lY()("PlotsJournalButton SmallTextBold", {
              Touch: IY
            }),
            onClick: RY.o,
            children: [(0, pY.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, pY.jsx)(Or.c, {
                itemName: "Book",
                amount: 0
              })
            }), vY("plotsGame:journalButton"), !IY && (0, pY.jsx)(gr.d, {
              className: "PlotsJournalButtonKey",
              keyCode: sr
            })]
          })
        })
      }) : null
    }
    var yr = DY(37798),
      Qr = DY(37570),
      or = DY(36314),
      Wr = DY(8862),
      Er = DY(8873),
      mr = DY(37146);
    const Vr = new Map([
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
      Sr = [...or.c.blockRemoveActionRoots, ...Qr.b, ...Wr.h, "Board", "Code Block", "Custom Lobby Block"],
      lr = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let Tr = null;

    function er() {
      return Tr ??= function() {
        const YY = Nr(),
          rY = Math.max(...YY.map((YY => zY.h[YY].id))) + 1,
          DY = new Int32Array(rY),
          FY = new Int32Array(rY),
          AY = new Uint8Array(rY).fill(1),
          IY = new Uint8Array(rY),
          RY = new Uint8Array(rY),
          OY = new Array(rY).fill("Air"),
          gY = new Map,
          aY = YY => {
            let rY = gY.get(YY);
            return void 0 === rY && (rY = gY.size + 1, gY.set(YY, rY)), rY
          },
          vY = new Set(Sr);
        for (const sY of YY) {
          var uY;
          const {
            id: YY,
            meta: rY,
            altActionable: gY,
            canBePlacedOver: iY
          } = zY.h[sY];
          DY[YY] = aY(Br(sY));
          const yY = rY.stairsCorner;
          if (null === yY) FY[YY] = DY[YY];
          else {
            const DY = yY.endsWith("Right");
            FY[YY] = aY(`${rY.rootName}|rot${DY?rY.rot%4+1:rY.rot}|${rY.halfblockPlacement}|${yY.replace("Right","Left")}`)
          }
          AY[YY] = iY ? 1 : 0, IY[YY] = gY || null !== rY.open || sY in mr.d || vY.has(rY.rootName) || void 0 !== (0, Qr.f)(rY.rootName) ? 1 : 0;
          const {
            rootName: QY
          } = rY;
          RY[YY] = null !== rY.open || Qr.b.includes(QY) || QY.includes("Bookshelf") || QY.includes("Mailbox") ? 1 : 0, OY[YY] = null !== (uY = (0, yr.g)(YY)) && void 0 !== uY ? uY : QY
        }
        return {
          kinds: DY,
          shapes: FY,
          empty: AY,
          inUse: IY,
          ownAltActionMessage: RY,
          placingItems: OY
        }
      }(), Tr
    }

    function Nr() {
      return Object.keys(zY.h).filter((YY => zY.h[YY].name === YY))
    }

    function Br(YY) {
      var rY;
      const DY = zY.h[YY],
        {
          rootName: FY,
          rot: AY
        } = DY.meta,
        [, ...IY] = (null !== (rY = DY.rootMetaDesc) && void 0 !== rY ? rY : YY).split("|"),
        RY = IY.filter((YY => !("meta" === YY || lr.test(YY) || (0, Er.B)(DY) && /^[nesw]+$/.test(YY) || Wr.h.includes(FY) && /^[lrud]+$/.test(YY) || nY.I.includes(FY) && /^(left|right)$/.test(YY))));
      return [FY, ...RY].map((YY => "fenceGate" === DY.model && YY === `rot${AY}` ? "rot" + ((AY - 1) % 2 + 1) : YY)).join("|")
    }

    function cr(YY, rY) {
      const {
        kinds: DY,
        shapes: FY
      } = er();
      return DY[YY] === DY[rY] || FY[YY] === FY[rY]
    }

    function Kr(YY) {
      return 1 === er().empty[YY]
    }

    function Hr(YY) {
      return er().placingItems[YY]
    }

    function zr(YY) {
      return Vr.get(zY.h[YY].meta.rootName)
    }
    var Zr = DY(8860),
      Cr = DY(8870);
    const fr = [0, 0, 0, 1, 1, 1],
      jr = (0, Zr.d)([
        [2, 0, 2, 6, 6, 6]
      ]),
      hr = (0, Zr.d)([
        [3, 0, 3, 5, 5, 5]
      ]),
      dr = (0, Zr.d)([
        [3, 3, 3, 5, 8, 5]
      ]),
      Jr = [0, 1, 2, 3].map((YY => (0, Zr.d)((0, Zr.t)([
        [3, 2, 0, 5, 7, 3]
      ], YY))));

    function Mr(YY) {
      const {
        ns: rY,
        model: DY,
        blockModel: FY,
        meta: AY
      } = zY.h[YY];
      return void 0 !== rY ? rY : "CentreCross" === DY ? jr : null !== FY && void 0 !== FY && FY.startsWith("torch") ? AY.halfblockPlacement === Cr.e.side ? Jr[AY.rot - 1] : AY.halfblockPlacement === Cr.e.top ? dr : hr : fr
    }
    var wr = DY(36277);
    var br = DY(213);

    function Xr(YY, rY) {
      const DY = br.d.fW / 2;
      return YY[0] < rY[0] + DY && YY[0] + 1 > rY[0] - DY && YY[1] < rY[1] + br.d.jW && YY[1] + 1 > rY[1] && YY[2] < rY[2] + DY && YY[2] + 1 > rY[2] - DY
    }

    function qr(YY) {
      return YY + 1
    }

    function pr(YY, rY, DY, FY, AY) {
      const IY = Math.hypot(...rY.dir);
      if (!Number.isFinite(IY) || 0 === IY) return -1;
      const {
        from: RY,
        reach: OY,
        solid: gY
      } = rY, aY = [rY.dir[0] / IY, rY.dir[1] / IY, rY.dir[2] / IY], vY = null === gY ? OY : Math.min(OY, function(YY, rY, DY) {
        const FY = kr(YY, rY, DY);
        if (FY !== 1 / 0) return FY;
        return (DY[0] + .5 - YY[0]) * rY[0] + (DY[1] + .5 - YY[1]) * rY[1] + (DY[2] + .5 - YY[2]) * rY[2]
      }(RY, aY, gY) + .75);
      let uY = -1,
        sY = 1 / 0,
        iY = 1 / 0;
      for (let yY = 0; yY < YY.length; yY += 4) {
        const rY = [YY[yY], YY[yY + 1], YY[yY + 2]],
          IY = AY(yY) ? OY : vY;
        let gY = -1,
          QY = kr(RY, aY, rY);
        if (QY > IY) {
          const YY = [rY[0] + .5 - RY[0], rY[1] + .5 - RY[1], rY[2] + .5 - RY[2]];
          if (QY = YY[0] * aY[0] + YY[1] * aY[1] + YY[2] * aY[2], QY <= 0 || QY > IY) continue;
          if (gY = Math.hypot(YY[0] - QY * aY[0], YY[1] - QY * aY[1], YY[2] - QY * aY[2]), gY > .7 || !FY(yY)) continue
        }(gY < sY || gY === sY && QY < iY) && DY(yY) && (uY = yY, sY = gY, iY = QY)
      }
      return uY
    }

    function kr(YY, rY, DY) {
      let FY = 0,
        AY = 1 / 0;
      for (let IY = 0; IY < 3; IY++) {
        const RY = DY[IY] - YY[IY];
        if (0 === rY[IY]) {
          if (RY > 0 || RY + 1 < 0) return 1 / 0;
          continue
        }
        const OY = RY / rY[IY],
          gY = (RY + 1) / rY[IY];
        FY = Math.max(FY, Math.min(OY, gY)), AY = Math.min(AY, Math.max(OY, gY))
      }
      return FY <= AY ? FY : 1 / 0
    }
    var Gr = DY(37399),
      xr = DY(37894);
    const nr = [1, 1, 1];
    class Pr {
      constructor(YY) {
        this.api = YY, this.meshes = null, this.shown = null
      }
      show(YY) {
        if (!(0, wr.g)(YY, this.shown))
          if (this.shown = null === YY ? null : [YY[0], YY[1], YY[2]], null !== this.meshes)
            for (const rY of this.meshes) this.api.setGameMesh(rY, null === YY ? {
              visible: !1
            } : {
              anchor: YY,
              visible: !0
            });
          else if (null !== YY) {
          const rY = [Gr.i, Gr.i, Gr.i, 0, 0, 0];
          this.meshes = [this.build([rY], Gr.l, YY), this.build((0, Gr.e)(), Gr.s, YY)]
        }
      }
      dispose() {
        for (const rY of null !== (YY = this.meshes) && void 0 !== YY ? YY : []) {
          var YY;
          this.api.disposeGameMesh(rY)
        }
        this.meshes = null, this.shown = null
      }
      build(YY, rY, DY) {
        const FY = [],
          AY = [];
        for (const [IY, RY, OY, gY, aY, vY] of YY)(0, xr.f)(FY, AY, [gY + .5, aY + .5, vY + .5], [IY, RY, OY]);
        return this.api.createGameMesh({
          positions: FY,
          indices: AY
        }, {
          rgb: nr,
          alpha: rY,
          onTop: !0
        }, DY)
      }
    }
    class Ur {
      constructor(YY) {
        this.api = YY, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(YY) {
        const rY = br.d.Jy;
        this.chunks = [];
        for (let DY = 0; DY < YY.length; DY += 3) {
          const FY = Math.floor(YY[DY] / rY),
            AY = Math.floor(YY[DY + 1] / rY),
            IY = Math.floor(YY[DY + 2] / rY);
          this.watches(FY, AY, IY) || this.chunks.push(FY, AY, IY)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const YY = performance.now();
        if (YY - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = YY;
        let rY = !1;
        for (let DY = 0; DY < this.chunks.length; DY += 3) {
          const YY = this.api.getChunkVersion(this.chunks[DY], this.chunks[DY + 1], this.chunks[DY + 2]);
          this.versions[DY / 3] !== YY && (this.versions[DY / 3] = YY, rY = !0)
        }
        return rY
      }
      watches(YY, rY, DY) {
        for (let FY = 0; FY < this.chunks.length; FY += 3)
          if (this.chunks[FY] === YY && this.chunks[FY + 1] === rY && this.chunks[FY + 2] === DY) return !0;
        return !1
      }
    }
    const Lr = .35,
      tr = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      YD = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      rD = [.95, .2, .15];
    class DD {
      constructor() {
        this.groups = []
      }
      add(YY, rY, DY, FY, AY) {
        let IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : fr;
        for (const RY of this.groups)
          if (ID(RY, FY, AY)) return RY.cells.push(YY, rY, DY), void RY.boxes.push(IY);
        this.groups.push({
          rgb: FY,
          look: AY,
          cells: [YY, rY, DY],
          boxes: [IY]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class FD {
      constructor(YY) {
        this.api = YY, this.shown = []
      }
      show(YY) {
        const rY = [];
        for (const DY of YY) {
          const YY = this.shown.findIndex((YY => {
            let {
              group: rY
            } = YY;
            return ID(rY, DY.rgb, DY.look) && RD(rY, DY)
          })); - 1 === YY ? rY.push(this.build(DY)) : (rY.push(this.shown[YY]), this.shown.splice(YY, 1))
        }
        this.dispose(), this.shown = rY
      }
      dispose() {
        for (const {
            meshes: YY
          }
          of this.shown)
          for (const rY of YY) this.api.disposeGameMesh(rY);
        this.shown = []
      }
      build(YY) {
        const {
          rgb: rY,
          look: DY,
          boxes: FY
        } = YY, AY = [rY[0] + (1 - rY[0]) * Lr, rY[1] + (1 - rY[1]) * Lr, rY[2] + (1 - rY[2]) * Lr], IY = [this.buildMesh(YY.cells, rY, DY.alpha, ((YY, rY, AY, IY) => {
          AD(YY, rY, AY, FY[IY], DY.size, !1)
        })), this.buildMesh(YY.cells, AY, DY.alpha, ((YY, rY, AY, IY) => {
          AD(YY, rY, AY, FY[IY], DY.size, !0)
        }))];
        return DY.crossed && IY.push(this.buildMesh(YY.cells, rY, .9, ((YY, rY, FY) => {
          (0, xr.g)(YY, rY, FY, DY.size + .01, .12)
        }))), {
          group: YY,
          meshes: IY
        }
      }
      buildMesh(YY, rY, DY, FY) {
        const AY = [YY[0], YY[1], YY[2]],
          IY = [],
          RY = [];
        for (let OY = 0; OY < YY.length; OY += 3) FY(IY, RY, [YY[OY] - AY[0] + .5, YY[OY + 1] - AY[1] + .5, YY[OY + 2] - AY[2] + .5], OY / 3);
        return this.api.createGameMesh({
          positions: IY,
          indices: RY
        }, {
          rgb: [rY[0], rY[1], rY[2]],
          alpha: DY
        }, AY)
      }
    }

    function AD(YY, rY, DY, FY, AY, IY) {
      for (let RY = 0; RY < FY.length; RY += 6) {
        const OY = [0, 0, 0],
          gY = [0, 0, 0];
        for (let YY = 0; YY < 3; YY++) OY[YY] = DY[YY] + ((FY[RY + YY] + FY[RY + YY + 3]) / 2 - .5) * AY, gY[YY] = (FY[RY + YY + 3] - FY[RY + YY]) * AY;
        (0, xr.c)(YY, rY, OY, gY, IY)
      }
    }

    function ID(YY, rY, DY) {
      return YY.rgb[0] === rY[0] && YY.rgb[1] === rY[1] && YY.rgb[2] === rY[2] && YY.look === DY
    }

    function RD(YY, rY) {
      if (YY.cells.length !== rY.cells.length) return !1;
      for (let DY = 0; DY < YY.cells.length; DY++)
        if (YY.cells[DY] !== rY.cells[DY]) return !1;
      return YY.boxes.every(((YY, DY) => YY === rY.boxes[DY]))
    }
    class OD {
      constructor(YY, rY, DY) {
        this.api = YY, this.localPlayerId = rY, this.pickNext = DY, this.turning = null, this.pending = null, this.tap = null, this.heading = [0, 1]
      }
      look(YY) {
        const [rY, , DY] = YY.cameraDirection, FY = Math.hypot(rY, DY);
        FY > .001 && (this.heading = [rY / FY, DY / FY])
      }
      tapped(YY, rY, DY) {
        const FY = qr(this.api.getClientOption(this.localPlayerId, "blockReach")),
          {
            origin: AY,
            direction: IY
          } = this.api.getActionRay(),
          RY = [...AY],
          OY = [
            [RY, [RY[0] + IY[0] * FY, RY[1] + IY[1] * FY, RY[2] + IY[2] * FY]]
          ];
        null !== YY && OY.push([RY, (0, wr.c)(YY)]), this.tap = {
          lines: OY,
          next: rY,
          ms: DY
        }
      }
      filled(YY, rY) {
        this.tap = null, this.pending = {
          from: YY,
          ms: rY
        }, this.retry(rY)
      }
      arrived(YY, rY) {
        const {
          tap: DY
        } = this;
        if (null === DY || rY - DY.ms > 1500) return null;
        const FY = (0, wr.c)(YY);
        return (0, wr.g)(DY.next, YY) || DY.lines.some((YY => {
          let [rY, DY] = YY;
          return function(YY, rY, DY) {
            const FY = [DY[0] - rY[0], DY[1] - rY[1], DY[2] - rY[2]],
              AY = [YY[0] - rY[0], YY[1] - rY[1], YY[2] - rY[2]],
              IY = FY[0] ** 2 + FY[1] ** 2 + FY[2] ** 2,
              RY = 0 === IY ? 0 : Math.min(1, Math.max(0, (AY[0] * FY[0] + AY[1] * FY[1] + AY[2] * FY[2]) / IY));
            return Math.hypot(AY[0] - FY[0] * RY, AY[1] - FY[1] * RY, AY[2] - FY[2] * RY)
          }(FY, rY, DY) <= .9
        })) ? (this.tap = null, this.pending = {
          from: YY,
          ms: rY
        }, DY.ms) : null
      }
      retry(YY) {
        const {
          pending: rY
        } = this;
        if (null === rY) return;
        if (YY - rY.ms > 1500) return void(this.pending = null);
        const DY = this.pickNext((0, wr.c)(rY.from), (YY => (0, wr.g)(YY, rY.from)));
        if (null === DY) return;
        this.pending = null;
        const {
          turning: FY
        } = this;
        if (null !== FY && YY < FY.endMs && (0, wr.g)(FY.to, DY)) return;
        const AY = this.api.getActionRay().origin,
          IY = [DY[0] + .5 - AY[0], DY[1] + .5 - AY[1], DY[2] + .5 - AY[2]],
          RY = Math.hypot(IY[0], IY[2]);
        if (RY < .3) {
          const YY = Math.max(RY, .001);
          IY[0] = this.heading[0] * YY, IY[2] = this.heading[1] * YY
        }
        this.api.turnCamera(IY, 250), this.turning = {
          to: DY,
          endMs: YY + 250
        }
      }
    }
    class gD {
      constructor(YY, rY, DY) {
        this.api = YY, this.localPlayerId = rY, this.juice = DY, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], this.lastFilled = null, this.lastSeenFilled = null, this.playerCells = [], this.aimed = null, this.pressMs = null, this.foreseen = new Map, this.turn = void 0, this.nextCell = null, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new Ur(YY), this.meshes = new FD(YY), this.outline = new Pr(YY), this.turn = new OD(YY, rY, ((YY, rY) => this.pickNext(YY, rY)))
      }
      Cy(YY) {
        const rY = "active" === YY[0] ? `${YY[1]}|${YY[3]}|${YY[4]}|${YY[5]}|${YY[6]}` : "";
        if ("active" !== YY[0]) "built" === YY[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , DY, FY, AY, IY] = YY;
          rY !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = DY) : DY === this.layerY ? this.burstUnlisted(FY) : DY > this.layerY && this.finishLayer(DY), this.layerY = DY, this.layerCells.has(DY) || this.layerCells.set(DY, FY.filter(vD)), this.ghostCells = FY, this.palette = AY, this.occupiedCells = IY
        }
        rY !== this.blueprint && (this.blueprint = rY, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((YY => this.api.blockNameToBlockId(YY))), this.chunkWatch.watch([...this.ghostCells.filter(vD), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(YY) {
        this.burstUnlisted([]), YY > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = YY)
      }
      Zu() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const YY = performance.now();
        let rY = !1;
        for (const [AY, IY] of this.foreseen) {
          var DY;
          if (YY - IY > 1e3) this.foreseen.delete(AY), rY = !0, (null === (DY = this.lastFilled) || void 0 === DY ? void 0 : DY.join()) === AY && (this.lastFilled = this.lastSeenFilled)
        }
        const FY = aD(this.api.getPositionView(this.localPlayerId));
        (rY || FY.some(((YY, rY) => YY !== this.playerCells[rY]))) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(YY) {
        const rY = new Set;
        for (let AY = 0; AY < YY.length; AY += 4) rY.add(`${YY[AY]},${YY[AY+1]},${YY[AY+2]}`);
        const DY = [],
          {
            ghostCells: FY
          } = this;
        for (let AY = 0; AY < FY.length; AY += 4) {
          const YY = `${FY[AY]},${FY[AY+1]},${FY[AY+2]}`;
          !rY.has(YY) && this.open.delete(YY) && DY.push(this.filledCell(AY))
        }
        this.burst(DY)
      }
      refresh() {
        const {
          ghostCells: YY,
          palette: rY,
          occupiedCells: DY
        } = this, FY = new DD, AY = new Set, IY = [], RY = [];
        for (let OY = 0; OY < YY.length; OY += 4) {
          const [DY, gY, aY, vY] = [YY[OY], YY[OY + 1], YY[OY + 2], YY[OY + 3]], uY = this.api.getBlockId(DY, gY, aY), sY = `${DY},${gY},${aY}`, iY = cr(this.blockIds[vY], uY);
          !iY && Kr(uY) ? FY.add(DY, gY, aY, zr(rY[vY]), tr, Mr(rY[vY])) : iY ? this.open.has(sY) && IY.push(this.filledCell(OY)) : FY.add(DY, gY, aY, rD, YD), !iY && this.api.isBlockInLoadedChunk(DY, gY, aY) && (AY.add(sY), RY.push(DY, gY, aY, Kr(uY) ? 0 : 1))
        }
        this.open = AY, this.nextCells = RY;
        for (let OY = 0; OY < DY.length; OY += 3) {
          const [YY, rY, AY] = [DY[OY], DY[OY + 1], DY[OY + 2]];
          Kr(this.api.getBlockId(YY, rY, AY)) || FY.add(YY, rY, AY, rD, YD)
        }
        this.meshes.show(FY.toArray()), this.burst(IY), this.showNext(), this.turn.retry(performance.now())
      }
      burst(YY) {
        const rY = performance.now(),
          DY = [];
        for (const [FY, AY, IY] of YY) {
          const YY = [FY, AY, IY];
          this.lastSeenFilled = YY, this.foreseen.delete(YY.join()) || DY.push(YY)
        }
        for (const FY of DY) {
          this.lastFilled = FY;
          const YY = this.turn.arrived(FY, rY);
          if (null !== YY)
            for (const [rY, DY] of this.foreseen) DY <= YY && this.foreseen.delete(rY)
        }
        this.juice.filled(YY)
      }
      showNext() {
        var YY;
        const rY = this.api.getPositionView(this.localPlayerId);
        this.playerCells.splice(0, 1 / 0, ...aD(rY));
        const DY = this.lastFilled;
        this.nextCell = this.pickNext(null === DY ? [rY[0], rY[1] + 1, rY[2]] : (0, wr.c)(DY), (() => !1)), this.outline.show(null !== (YY = this.aimed) && void 0 !== YY ? YY : this.nextCell)
      }
      pickNext(YY, rY) {
        const DY = this.api.getPositionView(this.localPlayerId),
          {
            nextCells: FY
          } = this,
          AY = function(YY, rY, DY, FY, AY) {
            let IY = -1,
              RY = !1,
              OY = 1 / 0;
            for (let gY = 0; gY < YY.length; gY += rY) {
              const rY = FY(gY);
              if (RY && !rY || AY(gY)) continue;
              const aY = (YY[gY] + .5 - DY[0]) ** 2 + (YY[gY + 1] + .5 - DY[1]) ** 2 + (YY[gY + 2] + .5 - DY[2]) ** 2;
              (rY && !RY || aY < OY) && (IY = gY, RY = rY, OY = aY)
            }
            return IY
          }(FY, 4, YY, (YY => 1 === FY[YY + 3]), (YY => {
            const AY = [FY[YY], FY[YY + 1], FY[YY + 2]];
            return Xr(AY, DY) || this.foreseen.has(AY.join()) || rY(AY)
          }));
        return -1 === AY ? null : [FY[AY], FY[AY + 1], FY[AY + 2]]
      }
      afterRender(YY) {
        var rY;
        this.turn.look(YY);
        const DY = this.api.getTargetedBlock();
        this.aimed = this.findAimed(null === DY ? null : DY.position), this.outline.show(null !== (rY = this.aimed) && void 0 !== rY ? rY : this.nextCell)
      }
      attemptAltAction(YY) {
        const rY = performance.now(),
          DY = this.findAimed(YY);
        if (null === DY && null !== this.nextCell && this.turn.tapped(YY, this.nextCell, rY), null !== DY || !(null === this.pressMs || rY - this.pressMs > 500)) return null !== DY && (this.foreseen.set(DY.join(), rY), this.lastFilled = DY, this.aimed = null, this.showNext(), this.turn.filled(DY, rY)), this.pressMs = rY, "preventPlacement";
        this.pressMs = null
      }
      findAimed(YY) {
        return function(YY, rY, DY, FY, AY, IY, RY) {
          const OY = YY.rrY(rY),
            gY = null === OY || null === YY.blockNameToBlockId(OY.name, !0) ? null : OY.name,
            aY = YY.getPositionView(rY),
            {
              origin: vY,
              direction: uY
            } = YY.getActionRay(),
            sY = pr(FY, {
              from: vY,
              dir: uY,
              reach: qr(YY.getClientOption(rY, "blockReach")),
              solid: DY
            }, (rY => {
              const DY = [FY[rY], FY[rY + 1], FY[rY + 2]];
              return !cr(AY[FY[rY + 3]], YY.getBlockId(...DY)) && !RY.has(DY.join()) && YY.isBlockInLoadedChunk(...DY) && !Xr(DY, aY)
            }), (YY => null === gY || gY === Hr(AY[FY[YY + 3]])), (YY => null !== IY && FY[YY] === IY[0] && FY[YY + 1] === IY[1] && FY[YY + 2] === IY[2]));
          return -1 === sY ? null : [FY[sY], FY[sY + 1], FY[sY + 2]]
        }(this.api, this.localPlayerId, YY, this.ghostCells, this.blockIds, this.nextCell, this.foreseen)
      }
      endPress() {
        this.pressMs = null
      }
      filledCell(YY) {
        const {
          ghostCells: rY
        } = this, [DY, FY, AY] = zr(this.palette[rY[YY + 3]]);
        return [rY[YY], rY[YY + 1], rY[YY + 2], DY, FY, AY]
      }
    }

    function aD(YY) {
      let [rY, DY, FY] = YY;
      const AY = br.d.fW / 2;
      return [Math.floor(rY), Math.floor(DY), Math.floor(FY), Math.floor(rY - AY), Math.floor(rY + AY), Math.floor(DY + br.d.jW), Math.floor(FY - AY), Math.floor(FY + AY)]
    }

    function vD(YY, rY) {
      return rY % 4 !== 3
    }

    function uD(YY, rY, DY, FY, AY) {
      if (!YY.isBlockInLoadedChunk(rY, FY - 6, DY) || !YY.isBlockInLoadedChunk(rY, FY + 6 + AY, DY) || !YY.canModifyBlockAt(rY, FY, DY)) return NaN;
      let IY = FY - 1;
      if (0 !== YY.getBlockId(rY, IY, DY)) {
        for (; IY < FY + 6 && 0 !== YY.getBlockId(rY, IY + 1, DY);) IY++;
        return IY
      }
      for (; IY > FY - 6;)
        if (IY--, 0 !== YY.getBlockId(rY, IY, DY)) return IY;
      return NaN
    }

    function sD(YY, rY, DY, FY, AY) {
      let IY = 0;
      for (let RY = FY + 1; RY <= FY + AY; RY++) 0 !== YY.getBlockId(rY, RY, DY) && IY++;
      return IY
    }

    function iD(YY) {
      const rY = new Map;
      for (const RY of YY) {
        var DY;
        if (Number.isNaN(RY)) return null;
        rY.set(RY, (null !== (DY = rY.get(RY)) && void 0 !== DY ? DY : 0) + 1)
      }
      let FY = NaN,
        AY = 0;
      for (const [RY, OY] of rY)(OY > AY || OY === AY && RY < FY) && (FY = RY, AY = OY);
      let IY = 0;
      for (const RY of YY) IY += Math.abs(RY - FY);
      return IY
    }

    function yD(YY, rY, DY, FY) {
      const {
        eye: AY,
        forward: IY,
        tanHalfFovX: RY,
        tanHalfFovY: OY
      } = YY, [gY, aY] = function(YY) {
        let [rY, DY, FY] = YY;
        const AY = Math.hypot(rY, FY),
          [IY, RY] = [FY / AY, -rY / AY];
        return [
          [IY, 0, RY],
          [DY * RY, FY * IY - rY * RY, -DY * IY]
        ]
      }(IY), [vY, uY] = [rY * RY, DY * OY], sY = IY[0] + vY * gY[0] + uY * aY[0], iY = IY[1] + uY * aY[1], yY = IY[2] + vY * gY[2] + uY * aY[2], QY = (FY - AY[1]) / iY;
      return QY > 0 && QY < 1 / 0 ? [AY[0] + QY * sY, AY[2] + QY * yY] : null
    }
    const QD = "plotsBlueprintPlacementChanged",
      oD = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class WD {
      constructor(YY, rY) {
        this.api = YY, this.localPlayerId = rY, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = YY => {
          var rY, DY, FY, IY;
          const RY = null !== (rY = null === (DY = this.placing) || void 0 === DY ? void 0 : DY.rotation) && void 0 !== rY ? rY : 0,
            {
              size: OY
            } = XY(YY, RY),
            gY = this.api.lE(this.localPlayerId),
            [aY, vY] = null !== (FY = null !== (IY = function(YY, rY, DY) {
              const [FY, AY, IY] = rY, [RY, OY, gY] = [Math.floor(DY[0]), Math.floor(DY[1]), Math.floor(DY[2])], aY = 6 + Math.max(FY, IY) / 2, [vY, uY] = [Math.ceil(aY + FY / 2), Math.ceil(aY + IY / 2)], [sY, iY] = [RY - vY, gY - uY], [yY, QY] = [2 * vY + 1, 2 * uY + 1], oY = new Float64Array(yY * QY), WY = new Uint16Array(yY * QY);
              for (let SY = 0; SY < yY; SY++)
                for (let rY = 0; rY < QY; rY++) {
                  const DY = uD(YY, sY + SY, iY + rY, OY, AY);
                  oY[SY * QY + rY] = DY, Number.isNaN(DY) || (WY[SY * QY + rY] = sD(YY, sY + SY, iY + rY, DY, AY))
                }
              const EY = [];
              let mY = null,
                VY = 1 / 0;
              for (let SY = 0; SY + FY <= yY; SY++)
                for (let YY = 0; YY + IY <= QY; YY++) {
                  const [rY, AY] = [sY + SY, iY + YY], OY = Math.hypot(rY + FY / 2 - DY[0], AY + IY / 2 - DY[2]);
                  if (OY > aY || RY >= rY - 2 && RY < rY + FY + 2 && gY >= AY - 2 && gY < AY + IY + 2) continue;
                  EY.length = 0;
                  let vY = 0;
                  for (let DY = 0; DY < FY; DY++)
                    for (let rY = 0; rY < IY; rY++) EY.push(oY[(SY + DY) * QY + YY + rY]), vY += WY[(SY + DY) * QY + YY + rY];
                  const uY = iD(EY);
                  if (null === uY) continue;
                  const yY = OY + 3 * (uY + vY);
                  yY < VY && (VY = yY, mY = [rY, AY])
                }
              return mY
            }(this.api, OY, gY)) && void 0 !== IY ? IY : this.cornerOnTarget(OY)) && void 0 !== FY ? FY : [Math.floor(gY[0]) + 2, Math.floor(gY[2])];
          this.placing = {
            id: YY,
            rotation: RY,
            corner: [aY, this.playerLevel(), vY],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null
          }, this.update(), this.api.sendCommand(`${AY} preview`)
        }, this.rotate = () => {
          const {
            id: YY,
            rotation: rY,
            corner: DY
          } = this.placing, AY = FY[(FY.indexOf(rY) + 1) % FY.length], [IY, , RY] = XY(YY, rY).size, [OY, , gY] = XY(YY, AY).size;
          this.moveTo(DY[0] + Math.floor(IY / 2) - Math.floor(OY / 2), DY[2] + Math.floor(RY / 2) - Math.floor(gY / 2), AY)
        }, this.hoverAt = (YY, rY) => {
          this.placing.hover = [YY, rY], this.moveCentreTo(this.camera, YY, rY)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (YY, rY) => {
          const DY = this.placing,
            {
              eye: FY,
              forward: AY,
              tanHalfFovX: IY,
              tanHalfFovY: RY
            } = this.camera,
            OY = {
              eye: [FY[0], FY[1], FY[2]],
              forward: [AY[0], AY[1], AY[2]],
              tanHalfFovX: IY,
              tanHalfFovY: RY
            },
            gY = DY.corner[1],
            aY = yD(OY, YY, rY, gY);
          DY.hover = null, DY.drag = aY && {
            view: OY,
            ground: aY,
            corner: [DY.corner[0], DY.corner[2]],
            level: gY
          }
        }, this.dragTo = (YY, rY) => {
          const DY = this.placing.drag,
            FY = DY && yD(DY.view, YY, rY, DY.level);
          null !== DY && null !== FY && this.moveTo(DY.corner[0] + Math.round(FY[0] - DY.ground[0]), DY.corner[1] + Math.round(FY[1] - DY.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const YY = this.view;
          YY.waiting || (YY.blocked ? this.vo({
            ...YY,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const YY = this.placing,
            {
              id: rY,
              rotation: DY,
              corner: FY
            } = YY;
          this.api.sendCommand(`${AY} place ${rY} ${FY.join(" ")} ${DY}`), YY.sent = {
            atMs: performance.now(),
            corner: [...FY],
            rotation: DY,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${AY} preview off`))
        }, this.chunkWatch = new Ur(YY), this.meshes = new FD(YY)
      }
      getView() {
        return this.view
      }
      Zu() {
        const YY = this.placing;
        null !== YY && (null !== YY.sent && !YY.sent.timedOut && performance.now() - YY.sent.atMs > 3e3 ? (YY.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(YY) || this.chunkWatch.changed()) && this.update())
      }
      afterRender(YY) {
        const rY = this.placing;
        null !== rY && (! function(YY, rY) {
          for (let DY = 0; DY < 3; DY++) rY.eye[DY] = YY.cameraPosition[DY], rY.forward[DY] = YY.cameraDirection[DY];
          rY.tanHalfFovX = YY.tanHalfFovX, rY.tanHalfFovY = YY.tanHalfFovY
        }(YY, this.camera), null !== rY.hover && this.moveCentreTo(this.camera, rY.hover[0], rY.hover[1]))
      }
      Cy(YY) {
        const rY = this.placing;
        if (null === rY || null === rY.sent || "active" !== YY[0]) return;
        const {
          sent: DY
        } = rY, [, FY, AY, IY, RY, OY, gY] = YY;
        AY && FY === rY.id && gY === DY.rotation && IY === DY.corner[0] && RY === DY.corner[1] && OY === DY.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(YY) {
        let [rY, , DY] = YY;
        const FY = this.api.getTargetedBlock();
        if (null === FY) return null;
        const [AY, , IY] = FY.position;
        return [AY - Math.floor(rY / 2), IY - Math.floor(DY / 2)]
      }
      playerLevel() {
        var YY;
        const [rY, DY, FY] = this.api.lE(this.localPlayerId);
        if (null !== (YY = this.api.getLocalPlayerMovement()) && void 0 !== YY && YY.onGround) return Math.ceil(DY - .01);
        const [AY, IY, RY] = [Math.floor(rY), Math.floor(DY), Math.floor(FY)];
        for (let OY = IY; OY >= IY - 2; OY--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(AY, OY, RY))) return OY + 1;
        return IY
      }
      followPlayerLevel(YY) {
        if (ED(YY)) return !1;
        const rY = this.playerLevel();
        return rY !== YY.corner[1] && (YY.corner[1] = rY, !0)
      }
      moveCentreTo(YY, rY, DY) {
        const FY = this.placing,
          AY = yD(YY, rY, DY, FY.corner[1]);
        if (null !== AY) {
          const [YY, , rY] = XY(FY.id, FY.rotation).size;
          this.moveTo(Math.round(AY[0] - YY / 2), Math.round(AY[1] - rY / 2))
        }
      }
      moveTo(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const FY = this.placing;
        if (ED(FY)) return;
        const [AY, IY, RY] = FY.corner;
        if (this.centreOnPlot(AY, RY) && !this.centreOnPlot(YY, rY, DY))
          if (this.centreOnPlot(YY, RY, DY)) rY = RY;
          else {
            if (!this.centreOnPlot(AY, rY, DY)) return;
            YY = AY
          } YY === AY && rY === RY && DY === FY.rotation || (FY.rotation = DY, FY.corner = [YY, IY, rY], this.update())
      }
      centreOnPlot(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: FY,
          corner: AY
        } = this.placing, [IY, , RY] = XY(FY, DY).size;
        return this.api.canModifyBlockAt(YY + Math.floor(IY / 2), AY[1], rY + Math.floor(RY / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.vo(null)
      }
      update() {
        const {
          id: YY,
          rotation: rY,
          corner: DY,
          refusals: FY
        } = this.placing, AY = new DD, IY = [];
        let RY = !1,
          OY = 0;
        for (const {
            offset: vY,
            block: uY
          }
          of XY(YY, rY).cells) {
          const [YY, rY, FY] = [DY[0] + vY[0], DY[1] + vY[1], DY[2] + vY[2]];
          IY.push(YY, rY, FY);
          const gY = !this.api.canModifyBlockAt(YY, rY, FY),
            aY = this.api.getBlockId(YY, rY, FY),
            sY = !Kr(aY) && !cr(this.api.blockNameToBlockId(uY), aY);
          RY ||= gY, OY += sY ? 1 : 0, gY || sY ? AY.add(YY, rY, FY, rD, YD) : AY.add(YY, rY, FY, zr(uY), oD, Mr(uY))
        }
        this.chunkWatch.watch(IY), this.meshes.show(AY.toArray());
        const gY = this.view,
          aY = ED(this.placing);
        (null === gY || void 0 === gY ? void 0 : gY.id) === YY && gY.blocked === RY && gY.toClear === OY && gY.waiting === aY && gY.refusals === FY || this.vo({
          id: YY,
          blocked: RY,
          toClear: OY,
          waiting: aY,
          refusals: FY
        })
      }
      vo(YY) {
        this.view = YY, vY.g.vo(QD, YY, !0)
      }
    }

    function ED(YY) {
      let {
        sent: rY
      } = YY;
      return null !== rY && !rY.timedOut
    }
    var mD = DY(3815),
      VD = DY(38493);

    function SD(YY, rY, DY) {
      const FY = [255 * YY, 255 * rY, 255 * DY],
        [AY, IY, RY] = FY.map((YY => YY + .4 * (255 - YY)));
      return {
        texture: "square_particle",
        gu: 48,
        minLifeTime: .3 / VD.b,
        maxLifeTime: .55 / VD.b,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * VD.b * VD.b, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...FY, 1],
          maxColor: [AY, IY, RY, 1]
        }, {
          timeFraction: 1,
          minColor: [...FY, 0],
          maxColor: [AY, IY, RY, 0]
        }],
        blendMode: mD.g.Standard
      }
    }
    const lD = {
      texture: "glint",
      mipmaps: !1,
      gu: 96,
      minLifeTime: .5 / VD.b,
      maxLifeTime: .9 / VD.b,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * VD.b * VD.b, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: mD.g.OneOne
    };
    class TD {
      constructor(YY, rY) {
        this.api = YY, this.localPlayerId = rY, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(YY) {
        if (this.api.particlesEnabled())
          for (const [rY, DY, FY, AY, IY, RY] of YY.slice(0, 3)) {
            const YY = `${AY},${IY},${RY}`;
            let OY = this.chips.get(YY);
            void 0 === OY && (OY = this.api.createParticles(SD(AY, IY, RY), {
              pos: [rY + .5, DY + .5, FY + .5]
            }), this.chips.set(YY, OY));
            for (let rY = 0; rY < 8; rY++) this.setPoint(rY, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            OY.emitPoints([rY + .5, DY + .5, FY + .5], this.points, 8)
          }
      }
      layerDone(YY) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const rY = YY.length / 3;
        if (0 === rY || !this.api.particlesEnabled()) return;
        const DY = Math.min(rY, 48),
          [FY, AY, IY] = [YY[0] + .5, YY[1] + 1, YY[2] + .5];
        let RY = 0;
        for (let OY = 0; OY < DY; OY++) {
          const gY = 3 * Math.floor(OY * rY / DY);
          for (let rY = 0; rY < 2; rY++) this.setPoint(RY++, YY[gY] + Math.random() - FY, YY[gY + 1] + 1 - AY, YY[gY + 2] + Math.random() - IY, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(lD, {
          pos: [FY, AY, IY]
        }), this.sparkles.emitPoints([FY, AY, IY], this.points, RY)
      }
      dispose() {
        var YY;
        for (const rY of this.chips.values()) rY.stop();
        this.chips.clear(), null === (YY = this.sparkles) || void 0 === YY || YY.stop(), this.sparkles = null
      }
      setPoint(YY, rY, DY, FY, AY) {
        const IY = 4 * YY;
        this.points[IY] = rY, this.points[IY + 1] = DY, this.points[IY + 2] = FY, this.points[IY + 3] = AY
      }
    }
    var eD = DY(1851);
    const ND = "SpecialAction1",
      BD = "KeyY",
      cD = "KeyX";

    function KD(YY) {
      let {
        placement: rY
      } = YY;
      const DY = (0, cY.k)(QD, rY.getView()),
        {
          t: FY
        } = (0, HY.C)(),
        {
          isTouchScreen: AY
        } = (0, OY.j)(["isTouchScreen"]),
        IY = null !== DY,
        RY = IY && !DY.blocked && !DY.waiting;
      if ((0, BY.e)((YY => IY && !YY.repeat && !(0, aY.isTypingInInput)() && !(0, gY.p)() && !AY), (YY => {
          const DY = function(YY, rY, DY) {
            if (YY === cD) return rY.stop;
            if (YY === BD) return DY ? rY.build : zD;
            return eD.u[ND].includes(YY) ? rY.rotate : null
          }(YY.code, rY, RY);
          null !== DY && (YY.stopPropagation(), DY())
        })), !IY) return null;
      let vY = AY ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return DY.blocked ? vY = "plotsGame:placementOffPlot" : DY.toClear > 0 && (vY = "plotsGame:placementClear"), (0, pY.jsx)(Rr.e, {
        placement: "bottom",
        children: (0, pY.jsxs)("div", {
          className: "PlotsPlacementCard",
          children: [(0, pY.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: FY(yY(DY.id).displayName.translationKey)
          }), (0, pY.jsx)("div", {
            className: lY()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: DY.refusals > 0
            }),
            children: FY(vY)
          }, DY.refusals), (0, pY.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, pY.jsxs)(eY.f, {
              onClick: rY.rotate,
              children: [(0, pY.jsx)(HD, {
                noaAction: ND
              }), FY("plotsGame:placementRotate")]
            }), (0, pY.jsxs)(eY.D, {
              onClick: rY.stop,
              children: [(0, pY.jsx)(HD, {
                keyCode: cD
              }), FY("general:cancel")]
            }), (0, pY.jsxs)(eY.n, {
              disabled: !RY,
              onClick: rY.build,
              children: [(0, pY.jsx)(HD, {
                keyCode: BD
              }), FY("plotsGame:placementBuild")]
            })]
          })]
        })
      })
    }

    function HD(YY) {
      return (0, pY.jsx)(gr.d, {
        className: "PlotsPlacementKey",
        ...YY
      })
    }

    function zD() {}
    var ZD = DY(4097);
    class CD {
      constructor(YY) {
        this.placement = YY, this.press = null
      }
      down(YY) {
        if (null !== this.press) return !1;
        const {
          id: rY,
          mouse: DY,
          x: FY,
          y: AY,
          atMs: IY
        } = YY;
        return this.press = {
          id: rY,
          mouse: DY,
          x: FY,
          y: AY,
          atMs: IY,
          moved: !1
        }, DY || this.placement.beginDrag(YY.ndcX, YY.ndcY), !0
      }
      move(YY) {
        const rY = this.press;
        null !== rY && rY.id === YY.id && (rY.moved ||= Math.hypot(YY.x - rY.x, YY.y - rY.y) > 8), YY.mouse ? this.placement.hoverAt(YY.ndcX, YY.ndcY) : (null === rY || void 0 === rY ? void 0 : rY.id) === YY.id && this.placement.dragTo(YY.ndcX, YY.ndcY)
      }
      up(YY) {
        const rY = this.press;
        (null === rY || void 0 === rY ? void 0 : rY.id) === YY.id && (this.move(YY), this.end(), !rY.moved && (rY.mouse || YY.atMs - rY.atMs <= 250) && this.placement.tap())
      }
      cancel(YY) {
        var rY;
        (null === (rY = this.press) || void 0 === rY ? void 0 : rY.id) === YY && this.end()
      }
      leave(YY) {
        let {
          id: rY,
          mouse: DY
        } = YY;
        DY && this.placement.endHover(), this.cancel(rY)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }

    function fD(YY) {
      let {
        placement: rY
      } = YY;
      return null === (0, cY.k)(QD, rY.getView()) ? null : (0, pY.jsx)(jD, {
        placement: rY
      })
    }

    function jD(YY) {
      let {
        placement: rY
      } = YY;
      (0, ZD.b)(!0, !0, "PlotsPlacementLayer");
      const DY = (0, IY.useMemo)((() => new CD(rY)), [rY]);
      return (0, pY.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: YY => {
          "mouse" === YY.pointerType && 0 !== YY.button || !DY.down(hD(YY)) || YY.currentTarget.setPointerCapture(YY.pointerId)
        },
        onPointerMove: YY => {
          DY.move(hD(YY))
        },
        onPointerUp: YY => {
          DY.up(hD(YY))
        },
        onPointerCancel: YY => {
          DY.cancel(YY.pointerId)
        },
        onLostPointerCapture: YY => {
          DY.cancel(YY.pointerId)
        },
        onPointerLeave: YY => {
          DY.leave(hD(YY))
        },
        "aria-hidden": !0
      })
    }

    function hD(YY) {
      const {
        left: rY,
        top: DY,
        width: FY,
        height: AY
      } = YY.currentTarget.getBoundingClientRect();
      return {
        id: YY.pointerId,
        mouse: "mouse" === YY.pointerType,
        x: YY.clientX,
        y: YY.clientY,
        ndcX: (YY.clientX - rY) / FY * 2 - 1,
        ndcY: 1 - (YY.clientY - DY) / AY * 2,
        atMs: YY.timeStamp
      }
    }
    var dD = DY(2219),
      JD = DY(36130),
      MD = DY(1834),
      wD = DY(1267);
    const bD = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function XD(YY) {
      let {
        hud: rY
      } = YY;
      const DY = (0, cY.k)(vr, rY.getPlot()),
        [FY, AY] = (0, IY.useState)(null),
        RY = (0, JD.l)(FY);
      if ("none" === DY[0]) return null;
      const [, OY, gY, aY, vY, uY] = DY;
      return (0, pY.jsx)("div", {
        className: lY()("PlotsPlotBannerContainer", {
          Below: RY
        }),
        children: (0, pY.jsx)(qD, {
          plotX: OY,
          plotZ: gY,
          ownerName: aY,
          ownerId: vY,
          relation: uY,
          plaqueRef: AY
        }, `${OY},${gY}`)
      })
    }

    function qD(YY) {
      var rY, DY;
      let {
        plotX: FY,
        plotZ: AY,
        ownerName: IY,
        ownerId: RY,
        relation: OY,
        plaqueRef: gY
      } = YY;
      const {
        t: aY
      } = (0, HY.C)(), vY = (0, MD.h)("hiddenPlayerNames"), uY = (0, MD.h)("players"), sY = null === RY ? null : null !== (rY = null === (DY = uY.byId[RY]) || void 0 === DY ? void 0 : DY.cosmetics) && void 0 !== rY ? rY : null, iY = aY("plotsGame:plotBannerCoords", {
        x: FY,
        z: AY
      }), yY = "own" === OY || null !== IY;
      return (0, pY.jsxs)("div", {
        ref: gY,
        className: lY()("PlotsPlotBanner", {
          Own: "own" === OY,
          Shared: "shared" === OY
        }),
        role: "status",
        children: [(0, pY.jsxs)("span", {
          className: lY()("PlotsPlotBannerSeal", {
            Face: null !== sY
          }),
          children: [null !== sY && (0, pY.jsx)(dD.c, {
            cosmetics: sY
          }), null === sY && (0, pY.jsx)(TY.e, {
            name: bD[OY]
          })]
        }), (0, pY.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, pY.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === OY && aY("plotsGame:plotBannerYours"), "own" !== OY && null !== IY && aY("plotsGame:plotBannerOwner", {
              name: (0, wD.g)(IY, vY)
            }), !yY && iY]
          }), yY && (0, pY.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [iY, "shared" === OY && (0, pY.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: aY("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }

    function pD(YY) {
      let {
        progress: rY,
        goal: DY
      } = YY;
      const FY = Math.min(rY, DY);
      return (0, pY.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, pY.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": DY,
          "aria-valuenow": FY,
          children: (0, pY.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${FY/DY})`
            }
          })
        }), (0, pY.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [FY, "/", DY]
        })]
      })
    }

    function kD(YY) {
      return {
        translationKey: `plotsGame:${YY}`,
        actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
      }
    }
    const GD = {
      house: {
        icon: "house",
        titleKey: "plotsGame:starterLotHouseTitle",
        desktop: kD("starterLotHouseHint", ["alt-fire"]),
        touch: kD("starterLotHouseHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotHousePlain"
      },
      garden: {
        icon: "sparkle",
        titleKey: "plotsGame:starterLotGarden",
        desktop: kD("starterLotGardenHint", ["alt-fire"]),
        touch: kD("starterLotGardenHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotGardenPlain"
      },
      boulder: {
        icon: "hammer",
        titleKey: "plotsGame:starterLotBoulder",
        desktop: kD("starterLotBreakHint", ["primary-fire"]),
        touch: kD("starterLotBreakHintTouch"),
        plainKey: "plotsGame:starterLotBreakPlain"
      },
      fly: {
        icon: "angles-up",
        titleKey: "plotsGame:starterLotFly",
        desktop: kD("starterLotFlyHint", ["jump"]),
        touch: kD("starterLotFlyHintTouch"),
        plainKey: "plotsGame:starterLotFlyPlain"
      },
      backpack: {
        icon: "backpack",
        titleKey: "plotsGame:starterLotBackpack",
        desktop: kD("starterLotBackpackHint", ["OpenInventory"]),
        touch: kD("starterLotBackpackHintTouch"),
        plainKey: "plotsGame:starterLotBackpackPlain"
      },
      neighbour: {
        icon: "person",
        titleKey: "plotsGame:starterLotNeighbour",
        desktop: kD("starterLotNeighbourHint", ["forward", "left", "backward", "right"]),
        touch: kD("starterLotNeighbourHintTouch"),
        plainKey: "plotsGame:starterLotNeighbourPlain"
      }
    };

    function xD(YY, rY, DY) {
      const {
        translationKey: FY,
        actions: AY
      } = DY ? rY.touch : rY.desktop;
      if (0 === AY.length) return YY(FY);
      const IY = [];
      for (const RY of AY) {
        const FY = (0, eD.q)(RY, DY),
          AY = eD.u[RY][0];
        if (null === FY && void 0 === AY) return YY(rY.plainKey);
        IY.push(null === FY ? (0, eD.n)(AY) : YY(FY.translationKey))
      }
      return YY(FY, {
        key: IY.join("")
      })
    }

    function nD(YY) {
      let {
        hud: rY
      } = YY;
      const DY = (0, cY.k)(ar, rY.getStep()),
        {
          t: FY
        } = (0, HY.C)();
      return (0, pY.jsxs)(Rr.e, {
        placement: "bottom",
        children: ["step" === DY[0] && (0, pY.jsx)(PD, {
          step: DY[1],
          progress: DY[2],
          goal: DY[3]
        }, DY[1]), "celebrate" === DY[0] && (0, pY.jsx)(UD, {
          className: lY()("Celebrate", {
            Gold: "house" === DY[1]
          }),
          icon: "star",
          title: FY("house" === DY[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
        }, `celebrate-${DY[1]}`)]
      })
    }

    function PD(YY) {
      let {
        step: rY,
        progress: DY,
        goal: FY
      } = YY;
      const {
        isTouchScreen: AY
      } = (0, OY.j)(["isTouchScreen"]), {
        t: IY
      } = (0, HY.C)(), RY = GD[rY];
      return (0, pY.jsxs)(UD, {
        icon: RY.icon,
        title: IY(RY.titleKey),
        children: [(0, pY.jsx)("div", {
          className: "PlotsStepCardHint SmallTextLight",
          children: xD(IY, RY, AY)
        }), FY > 1 && (0, pY.jsx)(pD, {
          progress: DY,
          goal: FY
        }), "backpack" === rY && AY && (0, pY.jsx)(LD, {})]
      })
    }

    function UD(YY) {
      let {
        className: rY,
        icon: DY,
        title: FY,
        children: AY
      } = YY;
      return (0, pY.jsxs)("div", {
        className: lY()("PlotsStepCard", rY),
        role: "status",
        children: [(0, pY.jsx)("span", {
          className: "PlotsStepCardIcon",
          children: (0, pY.jsx)(TY.e, {
            name: DY
          })
        }), (0, pY.jsxs)("div", {
          className: "PlotsStepCardBody",
          children: [(0, pY.jsx)("div", {
            className: "PlotsStepCardTitle SmallTextBold",
            children: FY
          }), AY]
        })]
      })
    }

    function LD() {
      return (0, IY.useEffect)((() => (OY.b.set({
        backpackPointerRequested: !0
      }), () => {
        OY.b.set({
          backpackPointerRequested: !1
        })
      })), []), null
    }
    const tD = function(YY, rY, DY, FY) {
      let {
        localPlayerId: AY
      } = FY;
      const OY = new ur;
      let gY = null,
        aY = null,
        vY = null,
        uY = null,
        sY = null;
      const iY = [];
      return {
        onCreate: YY => {
          gY = new TD(YY, AY), aY = new gD(YY, AY, gY), vY = new gD(YY, AY, gY), uY = new WD(YY, AY), sY = new VY(YY, uY), iY.push((0, RY.q)((0, IY.createElement)(IY.Fragment, null, (0, IY.createElement)(XD, {
            hud: OY
          }), (0, IY.createElement)(nD, {
            hud: OY
          }), (0, IY.createElement)(ir, {
            hud: OY,
            journal: sY
          }), (0, IY.createElement)(fD, {
            placement: uY
          }), (0, IY.createElement)(KD, {
            placement: uY
          })), {
            content: (0, IY.createElement)(Ar, {
              journal: sY
            })
          }))
        },
        Zu: () => {
          aY.Zu(), vY.Zu(), uY.Zu(), sY.Zu()
        },
        onPlayerAttemptAltAction: (YY, rY, DY, FY, AY, IY) => {
          var RY;
          if (null !== IY) return;
          const OY = void 0 === rY ? null : [rY, DY, FY];
          return null !== (RY = aY.attemptAltAction(OY)) && void 0 !== RY ? RY : vY.attemptAltAction(OY)
        },
        onPlayerClickUp: () => {
          aY.endPress(), vY.endPress()
        },
        onAfterRender: (YY, rY) => {
          uY.afterRender(rY), aY.afterRender(rY), vY.afterRender(rY)
        },
        onClose: () => {
          for (const YY of iY) YY();
          gY.dispose(), aY.dispose(), vY.dispose(), uY.dispose(), gY = null, aY = null, vY = null, uY = null, sY = null
        },
        onReceivedMessageFromServer: (YY, rY) => {
          if ("plotsStarterLot" === YY) OY.receiveStep(rY);
          else if ("plotsPlot" === YY) OY.receivePlot(rY);
          else if ("plotsStarterHouse" === YY) aY.Cy(rY);
          else if ("plotsBlueprint" === YY) {
            const YY = rY;
            vY.Cy(YY), uY.Cy(YY)
          } else "plotsJournal" === YY ? sY.Cy(rY) : "plotsJournalOpen" === YY ? sY.openFromServer() : "plotsPreviewEnd" === YY && uY.endFromServer()
        }
      }
    }
  },
  38493: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY,
      c: () => IY
    });
    const FY = 1 / .6,
      AY = {
        kind: "smokePuff"
      };
    class IY {
      constructor(YY, rY, DY) {
        this.style = YY, this.gu = rY, this.half = DY, this.particles = null, this.lastFrame = -1
      }
      emit(YY, rY, DY) {
        let IY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return DY !== this.lastFrame && (this.lastFrame = DY, this.particles || (this.particles = YY.createParticles(function(YY, rY) {
          const [
            [DY, IY, RY],
            [OY, gY, aY]
          ] = YY.colours;
          return {
            texture: YY.soft ? AY : "square_particle",
            gu: rY,
            minLifeTime: YY.life[0] / FY,
            maxLifeTime: YY.life[1] / FY,
            minEmitPower: YY.power[0] * FY,
            maxEmitPower: YY.power[1] * FY,
            minSize: YY.size[0],
            maxSize: YY.size[1],
            emitRate: 0,
            gravity: [0, YY.lift * FY * FY, 0],
            dir1: [-YY.spread, 1, -YY.spread],
            dir2: [YY.spread, 1, YY.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [DY, IY, RY, YY.alpha],
              maxColor: [OY, gY, aY, YY.alpha]
            }, {
              timeFraction: 1,
              minColor: [DY, IY, RY, 0],
              maxColor: [OY, gY, aY, 0]
            }],
            blendMode: YY.blendMode
          }
        }(this.style, this.gu), {
          pos: rY,
          half: this.half
        })), this.particles.moveTo(rY, this.half), this.particles.emit(IY), !0)
      }
      dispose() {
        var YY;
        null === (YY = this.particles) || void 0 === YY || YY.stop(), this.particles = null
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);