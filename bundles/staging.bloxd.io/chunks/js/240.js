export const id = 240;
export const ids = [240];
export const modules = {
  39060: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => Rh
    });
    const Bb = [0, 90, 180, 270],
      Ob = "plotsblueprint";
    var Gb = hb(49),
      Ub = hb(36214),
      Lb = hb(13),
      Yb = hb(1537),
      Sb = hb(1622),
      ab = hb(16);
    const Hb = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      wb = {
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
      Zb = ["small", "medium", "large"].flatMap((bb => Hb.flat().filter((ub => wb[ub].tier === bb))));

    function Xb(bb) {
      return wb[bb]
    }
    const pb = new Map(Hb.flatMap((bb => bb.slice(1).map(((ub, hb) => [ub, bb[hb]])))));

    function ob(bb) {
      var ub;
      return null !== (ub = pb.get(bb)) && void 0 !== ub ? ub : null
    }
    const Ab = {
      farm_hut: "plotsGame:journalNoteFarmHut",
      rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
      castle_tower: "plotsGame:journalNoteCastleTower",
      farm_house: "plotsGame:journalNoteFarmHouse",
      farm_barn: "plotsGame:journalNoteFarmBarn"
    };

    function lb(bb, ub) {
      const hb = new Set(bb),
        Bb = function(bb) {
          const ub = new Set(bb);
          return new Set(Zb.filter((bb => {
            const hb = ob(bb);
            return null === hb || ub.has(hb)
          })))
        }(hb);
      return Zb.map((bb => {
        const Ob = bb === ub;
        return hb.has(bb) ? {
          id: bb,
          active: Ob,
          state: "completed",
          unlockedBy: null
        } : Bb.has(bb) ? {
          id: bb,
          active: Ob,
          state: "open",
          unlockedBy: null
        } : {
          id: bb,
          active: Ob,
          state: "locked",
          unlockedBy: ob(bb)
        }
      }))
    }
    const Kb = "plotsJournalChanged";
    class Wb {
      constructor(bb, ub) {
        this.api = bb, this.placement = ub, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.iZ("journal_opened")
        }, this.build = bb => {
          this.iZ("placement_started"), this.placement.start(bb), (0, Ub.g)()
        }, this.putAway = () => {
          this.api.sendCommand(`${Ob} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      cZ(bb) {
        let [, ub, hb] = bb;
        this.pages = lb(ub, hb), ab.i.vp(Kb, this.pages, !0)
      }
      openFromServer() {
        this.openRequested = !0, this.gH()
      }
      gH() {
        this.openRequested && !Lb.d.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, Yb.q)() || (0, Sb.isTypingInInput)() || null !== this.placement.getView() || (0, Ub.p)())
      }
      iZ(bb) {
        this.reported.has(bb) || (this.reported.add(bb), this.api.sendCommand(`${Ob} report ${bb}`))
      }
    }
    var Cb = hb(958),
      db = hb.n(Cb),
      rb = hb(966),
      jb = hb(1357),
      nb = hb(4292),
      Db = hb(3191),
      xb = hb(1348),
      zb = hb(1027),
      gb = hb(1095),
      ib = hb(9181);
    const vb = [0, 90, 180, 270],
      tb = /^(meta\|rot\d)\|([lrud]+)$/,
      Jb = "nesw",
      eb = /^meta\|([nesw]*)\|?(Stacked)?$/,
      Nb = function(bb) {
        const ub = new WeakMap;
        return (hb, Bb) => {
          let Ob = ub.get(hb);
          return void 0 === Ob && (Ob = bb(hb, Bb), ub.set(hb, Ob)), Ob
        }
      }((bb => new sb(bb)));
    class sb {
      constructor(bb) {
        this.blockMetadata = bb, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const ub = new Set(Object.keys(bb).map((ub => bb[ub].id)));
        ub.add(0), this.maxBlockId = Math.max(...ub)
      }
      static
      for (bb) {
        return Nb(bb)
      }
      getBlockIdMapping(bb, ub) {
        const hb = this.getBlockIdMappingKey(bb, ub);
        let Bb = this.blockIdMappings.get(hb);
        return void 0 === Bb && vb.includes(bb) && (Bb = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, bb, ub), this.blockIdMappings.set(hb, Bb)), Bb
      }
      turnBlockId(bb, ub, hb) {
        return this.mapBlockId(this.blockMetadata[bb], ub, this.getRotationMapping(ub, hb), hb)
      }
      getBlockIdMappingKey(bb, ub) {
        return `r${bb}|m${Number(ub)}`
      }
      createBlockIdMapping(bb, ub, hb, Bb) {
        const Ob = new Uint16Array(ub + 1),
          Gb = this.getRotationMapping(hb, Bb);
        for (const Ub in bb) {
          const ub = bb[Ub];
          Ob[ub.id] = this.mapBlockId(ub, hb, Gb, Bb)
        }
        return Ob
      }
      getRotationMapping(bb, ub) {
        const hb = Math.round(bb / 90),
          Bb = new Uint8Array(4);
        for (let Ob = 0; Ob < 4; Ob++) Bb[Ob] = (4 + Ob - hb) % 4;
        if (ub) {
          let bb = Bb[0];
          Bb[0] = Bb[1], Bb[1] = bb, bb = Bb[2], Bb[2] = Bb[3], Bb[3] = bb
        }
        return Bb
      }
      mapBlockId(bb, ub, hb, Bb) {
        var Ob;
        const {
          blockMetadata: Gb
        } = this, Ub = Math.round(ub / 90), {
          id: Lb,
          meta: Yb
        } = bb, {
          rot: Sb,
          rootName: ab,
          metaStr: Hb
        } = Yb;
        let wb;
        const [, Zb, Xb] = null !== (Ob = eb.exec(Hb)) && void 0 !== Ob ? Ob : [];
        if (void 0 !== Zb) {
          var pb, ob;
          wb = null !== (pb = null === (ob = Gb[`${ab}|meta|${[Jb.split("").filter(((bb,ub)=>Zb.split("").some((bb=>{const hb=Jb.indexOf(bb);return((Bb?3-hb:hb)+Ub)%4===ub})))).join(""),Xb].filter(Boolean).join("|")}`]) || void 0 === ob ? void 0 : ob.id) && void 0 !== pb ? pb : Lb
        } else if (null === Sb) wb = Lb;
        else {
          var Ab, lb;
          const bb = hb[Sb - 1] + 1;
          let ub = Hb.replace(`rot${Sb}`, `rot${bb}`);
          Bb && Yb.stairsCorner && (ub = ub.replace(/(Left|Right)$/, (bb => "Left" === bb ? "Right" : "Left"))), Bb && "Chest" === ab && (ub = ub.replace(/\|(left|right)$/, ((bb, ub) => "left" === ub ? "|right" : "|left")));
          const Ob = tb.exec(ub);
          if (Bb && null !== Ob) {
            const bb = "lrud".split("").filter((bb => Ob[2].includes("l" === bb ? "r" : "r" === bb ? "l" : bb)));
            ub = `${Ob[1]}|${bb.join("")}`
          }
          const Ub = `${ab}|${ub}`;
          if (wb = null !== (Ab = null === (lb = Gb[Ub]) || void 0 === lb ? void 0 : lb.id) && void 0 !== Ab ? Ab : null, null === wb) {
            const bb = Gb[ab];
            wb = bb.rootMetaDesc === Ub ? bb.id : Lb
          }
        }
        return wb
      }
    }

    function Mb(bb, ub, hb) {
      let {
        xRotationMappedOrigin: Bb,
        shouldSwapXZ: Ob
      } = hb;
      const Gb = Ob ? ub : bb;
      return null === Bb ? Gb : Bb - Gb
    }

    function mb(bb, ub, hb) {
      let {
        zRotationMappedOrigin: Bb,
        shouldSwapXZ: Ob
      } = hb;
      const Gb = Ob ? bb : ub;
      return null === Bb ? Gb : Bb - Gb
    }
    const Ib = {
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
      Pb = new Map;

    function qb(bb, ub) {
      const hb = `${bb}|${ub}`;
      let Bb = Pb.get(hb);
      if (void 0 === Bb) {
        const {
          size: Ob,
          palette: Gb,
          layers: Ub
        } = Ib[bb], Lb = 90 === ub || 270 === ub, [Yb, Sb] = Lb ? [Ob[2], Ob[0]] : [Ob[0], Ob[2]], ab = function(bb, ub, hb) {
          let Bb = null,
            Ob = null,
            Gb = !1;
          switch (bb) {
            case 0:
              break;
            case 90:
              Bb = ub - 1, Gb = !0;
              break;
            case 180:
              Bb = ub - 1, Ob = hb - 1;
              break;
            case 270:
              Ob = hb - 1, Gb = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${bb}`)
          }
          return {
            xRotationMappedOrigin: Bb,
            zRotationMappedOrigin: Ob,
            shouldSwapXZ: Gb
          }
        }(ub, Yb, Sb), Hb = sb.for(ib.i), wb = Gb.map((bb => (0, ib.g)(Hb.turnBlockId((0, ib.k)(bb), ub, !1)))), Zb = [];
        Ub.forEach(((bb, ub) => {
          bb.split(" ").forEach(((bb, hb) => {
            for (let Bb = 0; Bb < bb.length; Bb++)
              if ("." !== bb[Bb]) {
                const Ob = [Mb(Bb, hb, ab), ub, mb(Bb, hb, ab)];
                Zb.push({
                  offset: Ob,
                  block: wb[bb.charCodeAt(Bb) - "a".charCodeAt(0)]
                })
              }
          }))
        })), Bb = {
          size: [Yb, Ob[1], Sb],
          cells: Zb
        }, Pb.set(hb, Bb)
      }
      return Bb
    }
    const Eb = {
      farm_hut: hb.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
      farm_house: hb.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
      farm_barn: hb.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
      rusticHome_tent: hb.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
      rusticHome_cabin: hb.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
      rusticHome_house: hb.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
      market_stand: hb.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
      market_stall: hb.p + "static/media/market_stall.9a562807f9dff591618a.webp",
      market_shop: hb.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
      castle_wall: hb.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
      castle_gate: hb.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
      castle_tower: hb.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
    };
    var yb = hb(1007);
    const Vb = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function Fb(bb) {
      let {
        page: ub,
        building: hb,
        onBuild: Bb,
        onPutAway: Ob
      } = bb;
      const {
        t: Gb
      } = (0, gb.K)(), {
        displayName: Ub,
        tier: Lb
      } = Xb(ub.id), Yb = qb(ub.id, 0).cells.length, Sb = Ab[ub.id], ab = "locked" === ub.state, Hb = hb ? jb.e : jb.m;
      return (0, yb.jsxs)("article", {
        className: db()("PlotsJournalPage", {
          Locked: ab
        }),
        children: [(0, yb.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: Gb(Ub.translationKey)
        }), (0, yb.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [Gb(Vb[Lb]), " \xb7 ", Gb("plotsGame:journalBlocks", {
            blocks: String(Yb)
          })]
        }), (0, yb.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [Zb.map((bb => (0, yb.jsx)("img", {
            className: db()({
              Shown: bb === ub.id
            }),
            src: Eb[bb],
            alt: "",
            draggable: !1
          }, bb))), "completed" === ub.state && (0, yb.jsx)("span", {
            className: "PlotsJournalStamp",
            children: Gb("plotsGame:journalBuilt")
          }), ab && (0, yb.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, yb.jsx)(rb.e, {
              name: "lock"
            })
          })]
        }), void 0 !== Sb && "completed" !== ub.state && (0, yb.jsx)("p", {
          className: "PlotsJournalNote",
          children: Gb(Sb)
        }), (0, yb.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === ub.state && (0, yb.jsx)("p", {
            className: "PlotsJournalHint",
            children: Gb("plotsGame:journalLocked", {
              name: Gb(Xb(ub.unlockedBy).displayName.translationKey)
            })
          }), ub.active && (0, yb.jsxs)(yb.Fragment, {
            children: [(0, yb.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: Gb("plotsGame:journalBuilding")
            }), (0, yb.jsx)(jb.g, {
              onClick: Ob,
              children: Gb("plotsGame:journalPutAway")
            })]
          }), !ab && !ub.active && (0, yb.jsx)(Hb, {
            onClick: () => {
              Bb(ub.id)
            },
            children: Gb("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function fb(bb) {
      let {
        className: ub,
        page: hb,
        hidden: Bb,
        building: Ob,
        journal: Gb
      } = bb;
      return (0, yb.jsxs)("div", {
        ref: bb => {
          null !== bb && (bb.inert = Bb)
        },
        className: db()("PlotsJournalSide", ub),
        children: [void 0 !== hb && (0, yb.jsx)(Fb, {
          page: hb,
          building: Ob,
          onBuild: Gb.build,
          onPutAway: Gb.putAway
        }), void 0 === hb && (0, yb.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var kb = hb(314),
      Tb = hb(1784);

    function cb(bb) {
      return Math.cos((0, Tb.k)(bb))
    }

    function Qb(bb) {
      return (0, Tb.y)(Math.acos(kb.d.clamp(bb, -1, 1)))
    }

    function Rb(bb, ub, hb, Bb, Ob) {
      const Gb = Math.abs(ub - bb),
        Ub = (0, Tb.y)(Ob / (hb * Math.abs(Math.sin((0, Tb.k)(bb))))),
        Lb = 450 * Math.min(1, Gb / Bb),
        Yb = Ub > 0 ? 3 * Gb / Ub : 1 / 0;
      return Math.round(Math.max(120, Math.min(Lb, Yb)))
    }
    class bu {
      constructor() {
        this.samples = []
      }
      add(bb, ub) {
        for (this.samples.push({
            x: bb,
            at: ub
          }); ub - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const bb = this.samples[0],
          ub = this.samples[this.samples.length - 1];
        return ub.at > bb.at ? (ub.x - bb.x) / (ub.at - bb.at) : 0
      }
    }

    function uu(bb, ub) {
      return bb > ub && bb >= 600
    }

    function hu(bb) {
      return Qb(new DOMMatrixReadOnly(getComputedStyle(bb).transform).m11)
    }

    function Bu(bb, ub) {
      bb.style.transform = `rotateY(${-ub}deg)`, bb.classList.add("Turning")
    }

    function Ou(bb) {
      let {
        journal: ub
      } = bb;
      const {
        t: hb
      } = (0, gb.K)(), Bb = (0, xb.k)(Kb, ub.getPages()), Ob = (0, zb.i)(uu), [Lb, Yb] = (0, Gb.useState)((() => function(bb) {
        const ub = bb.findIndex((bb => bb.active));
        return -1 !== ub ? ub : Math.max(0, bb.findIndex((bb => "open" === bb.state)))
      }(Bb))), ab = (0, Gb.useRef)(null), Hb = (0, Gb.useRef)(null), wb = (0, Gb.useRef)({
        Forward: null,
        Back: null
      }), Zb = Ob ? 2 : 1, Xb = Ob ? 180 : 90, pb = Lb - Lb % Zb, ob = pb > 0, Ab = pb + Zb < Bb.length, lb = (0, Gb.useCallback)((() => {
        const bb = Hb.current;
        return null === bb ? pb : (Hb.current = null, bb.animation.cancel(), (ub = wb.current[bb.direction]).style.transform = "", ub.classList.remove("Turning"), null === bb.next ? pb : (Yb(bb.next), bb.next));
        var ub
      }), [pb]), Wb = (0, Gb.useCallback)(((bb, ub, hb, Bb) => {
        const Ob = wb.current[bb],
          Gb = hu(Ob),
          Ub = ub === ("Forward" === bb) ? Xb : 0;
        Bu(Ob, Ub);
        const Lb = Ob.animate([{
          transform: `rotateY(${-Gb}deg)`
        }, {
          transform: `rotateY(${-Ub}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : Rb(Gb, Ub, Ob.offsetWidth, Xb, Ub > Gb ? -hb : hb),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        Hb.current = {
          direction: bb,
          animation: Lb,
          next: ub ? Bb + ("Forward" === bb ? Zb : -Zb) : null
        }, Lb.onfinish = () => {
          var bb;
          (null === (bb = Hb.current) || void 0 === bb ? void 0 : bb.animation) === Lb && lb()
        }
      }), [Zb, Xb, lb]), Cb = (0, Gb.useCallback)((bb => {
        if (null !== ab.current) return;
        const ub = lb();
        ("Forward" === bb ? ub + Zb < Bb.length : ub > 0) && Wb(bb, !0, 0, ub)
      }), [lb, Wb, Zb, Bb.length]);
      (0, Gb.useEffect)((() => {
        ub.onOpened()
      }), [ub]), (0, Gb.useEffect)((() => () => {
        var bb;
        null === (bb = Hb.current) || void 0 === bb || bb.animation.cancel()
      }), []), (0, Gb.useEffect)((() => {
        const bb = bb => {
          var ub;
          bb.pointerId !== (null === (ub = ab.current) || void 0 === ub ? void 0 : ub.pointerId) || ab.current.following || (ab.current = null)
        };
        return window.addEventListener("pointerup", bb), () => {
          window.removeEventListener("pointerup", bb)
        }
      }), []), (0, Db.c)((bb => ("ArrowLeft" === bb.code || "ArrowRight" === bb.code) && !(0, Sb.isTypingInInput)()), (bb => {
        bb.stopPropagation(), Cb("ArrowLeft" === bb.code ? "Back" : "Forward")
      }));
      const rb = (bb, ub, hb) => {
          const Bb = function(bb, ub, hb, Bb) {
            return (bb < 0 ? hb : Bb) ? kb.d.clampAbs(bb, ub) : Math.sign(bb) * ub * (1 - 1 / (.55 * Math.abs(bb) / ub + 1))
          }(bb.base + hb, Zb * bb.width, Ab, ob);
          return "Forward" === ub ? Math.min(Bb, 0) : Math.max(Bb, 0)
        },
        ib = (bb, ub) => {
          const hb = ab.current;
          if (ab.current = null, null === hb.direction) return;
          hb.speed.add(bb, ub);
          const Bb = hb.speed.get(),
            Ob = rb(hb, hb.direction, bb - hb.x);
          Wb(hb.direction, null !== function(bb, ub, hb, Bb, Ob) {
            if (Math.abs(ub) >= .3 ? Math.sign(ub) !== Math.sign(bb) : Math.abs(bb) < .5 * hb) return null;
            const Gb = bb < 0 ? "Forward" : "Back";
            return ("Forward" === Gb ? Bb : Ob) ? Gb : null
          }(Ob, Bb, Zb * hb.width, Ab, ob), Bb, pb)
        },
        vb = Bb.some((bb => bb.active)),
        tb = (bb, hb, Ob) => (0, yb.jsx)(fb, {
          className: bb,
          page: hb >= 0 && hb < Bb.length ? Bb[hb] : void 0,
          hidden: Ob,
          building: vb,
          journal: ub
        });
      return (0, yb.jsx)(nb.b, {
        close: Ub.j,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, yb.jsxs)("section", {
          className: db()("PlotsJournal", {
            Spread: Ob
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": hb("plotsGame:journalTitle"),
          children: [(0, yb.jsx)(jb.i, {
            className: "PlotsJournalClose",
            onClick: Ub.j
          }), (0, yb.jsx)(Gu, {
            direction: "Back",
            disabled: !ob,
            onTurn: Cb
          }), (0, yb.jsx)("div", {
            className: "PlotsJournalBookPages",
            onPointerDown: bb => {
              var ub;
              if (!bb.isPrimary || 0 !== bb.button || null !== Hb.current && null !== bb.target.closest("button")) return;
              const hb = new bu;
              hb.add(bb.clientX, bb.timeStamp);
              const Bb = wb.current.Forward.offsetWidth,
                Ob = Hb.current;
              Hb.current = null;
              let Gb = 0;
              if (null !== Ob) {
                const ub = wb.current[Ob.direction],
                  hb = hu(ub);
                Ob.animation.cancel(), Bu(ub, hb), Gb = function(bb, ub, hb, Bb) {
                  return (bb < 0 ? hb : Bb) ? bb : Math.sign(bb) * ub * (1 / (1 - Math.min(Math.abs(bb) / ub, .99)) - 1) / .55
                }(function(bb, ub, hb, Bb) {
                  return hb * (cb(ub) - cb("Forward" === bb ? 0 : Bb))
                }(Ob.direction, hb, Bb, Xb), Zb * Bb, Ab, ob), bb.currentTarget.setPointerCapture(bb.pointerId)
              }
              ab.current = {
                pointerId: bb.pointerId,
                x: bb.clientX,
                y: bb.clientY,
                base: Gb,
                width: Bb,
                following: null !== Ob,
                direction: null !== (ub = null === Ob || void 0 === Ob ? void 0 : Ob.direction) && void 0 !== ub ? ub : null,
                speed: hb
              }
            },
            onPointerMove: bb => {
              const ub = ab.current;
              if (null === ub || bb.pointerId !== ub.pointerId) return;
              if (0 === bb.buttons) return void ib(bb.clientX, bb.timeStamp);
              const hb = bb.clientX - ub.x;
              !ub.following && function(bb, ub) {
                return Math.abs(bb) > 8 && Math.abs(bb) > Math.abs(ub)
              }(hb, bb.clientY - ub.y) && (ub.following = !0, ub.direction = hb < 0 ? "Forward" : "Back", bb.currentTarget.setPointerCapture(bb.pointerId)), null !== ub.direction && (ub.speed.add(bb.clientX, bb.timeStamp), Bu(wb.current[ub.direction], function(bb, ub, hb, Bb) {
                const Ob = hb * cb("Forward" === bb ? 0 : Bb) + ub;
                return kb.d.clamp(Qb(Ob / hb), 0, Bb)
              }(ub.direction, rb(ub, ub.direction, hb), ub.width, Xb)))
            },
            onPointerUp: bb => {
              var ub;
              bb.pointerId === (null === (ub = ab.current) || void 0 === ub ? void 0 : ub.pointerId) && ib(bb.clientX, bb.timeStamp)
            },
            onPointerCancel: bb => {
              const ub = ab.current;
              bb.pointerId === (null === ub || void 0 === ub ? void 0 : ub.pointerId) && (ab.current = null, null !== ub.direction && Wb(ub.direction, !1, 0, pb))
            },
            children: (0, yb.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [Ob && tb("Left", pb - 2, !0), tb("Right", pb + 2 * Zb - 1, !0), (0, yb.jsxs)("div", {
                ref: bb => {
                  wb.current.Back = bb
                },
                className: "PlotsJournalLeaf Back",
                children: [tb("Recto", pb - 1, !0), Ob && tb("Verso", pb, !1)]
              }), (0, yb.jsxs)("div", {
                ref: bb => {
                  wb.current.Forward = bb
                },
                className: "PlotsJournalLeaf Forward",
                children: [tb("Recto", pb + Zb - 1, !1), Ob && tb("Verso", pb + Zb, !0)]
              })]
            })
          }), (0, yb.jsx)(Gu, {
            direction: "Forward",
            disabled: !Ab,
            onTurn: Cb
          })]
        })
      })
    }

    function Gu(bb) {
      let {
        direction: ub,
        disabled: hb,
        onTurn: Bb
      } = bb;
      const {
        t: Ob
      } = (0, gb.K)();
      return (0, yb.jsx)("div", {
        className: db()("PlotsJournalArrow", ub),
        children: (0, yb.jsx)(jb.e, {
          disabled: hb,
          ariaLabel: Ob("Forward" === ub ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            Bb(ub)
          },
          children: (0, yb.jsx)(rb.e, {
            name: "angle-up"
          })
        })
      })
    }
    var Uu = hb(36208),
      Lu = hb(1799),
      Yu = hb(1865);
    const Su = "plotsStepChanged",
      au = "plotsPlotChanged";
    class Hu {
      constructor() {
        this.step = ["none"], this.plot = ["none"]
      }
      getStep() {
        return this.step
      }
      receiveStep(bb) {
        this.step = bb, ab.i.vp(Su, bb, !0)
      }
      getPlot() {
        return this.plot
      }
      receivePlot(bb) {
        this.plot = bb, ab.i.vp(au, bb, !0)
      }
    }
    const wu = "KeyJ";

    function Zu(bb) {
      let {
        hud: ub,
        journal: hb
      } = bb;
      const Bb = (0, xb.k)(Kb, hb.getPages()),
        Ob = (0, xb.k)(Su, ub.getStep()),
        {
          isTouchScreen: Gb
        } = (0, Lb.j)(["isTouchScreen"]),
        {
          t: ab
        } = (0, gb.K)(),
        Hb = null !== Bb && "none" === Ob[0];
      return (0, Db.c)((bb => null !== Bb && bb.code === wu && !bb.repeat && !(0, Sb.isTypingInInput)()), (bb => {
        (0, Yb.E)(bb, Hb, Ub.p)
      })), Hb ? (0, yb.jsx)(Uu.e, {
        placement: "topRight",
        children: (0, yb.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, yb.jsxs)("button", {
            type: "button",
            className: db()("PlotsJournalButton SmallTextBold", {
              Touch: Gb
            }),
            onClick: Ub.p,
            children: [(0, yb.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, yb.jsx)(Lu.d, {
                itemName: "Book",
                amount: 0
              })
            }), ab("plotsGame:journalButton"), !Gb && (0, yb.jsx)(Yu.e, {
              className: "PlotsJournalButtonKey",
              keyCode: wu
            })]
          })
        })
      }) : null
    }
    var Xu = hb(38042),
      pu = hb(37781),
      ou = hb(36584),
      Au = hb(9221),
      lu = hb(9240),
      Ku = hb(37420);
    const Wu = new Map([
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
      Cu = [...ou.e.blockRemoveActionRoots, ...pu.e, ...Au.g, "Board", "Code Block", "Custom Lobby Block"],
      du = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let ru = null;

    function ju() {
      return ru ??= function() {
        const bb = nu(),
          ub = Math.max(...bb.map((bb => ib.i[bb].id))) + 1,
          hb = new Int32Array(ub),
          Bb = new Int32Array(ub),
          Ob = new Uint8Array(ub).fill(1),
          Gb = new Uint8Array(ub),
          Ub = new Uint8Array(ub),
          Lb = new Array(ub).fill("Air"),
          Yb = new Map,
          Sb = bb => {
            let ub = Yb.get(bb);
            return void 0 === ub && (ub = Yb.size + 1, Yb.set(bb, ub)), ub
          },
          ab = new Set(Cu);
        for (const wb of bb) {
          var Hb;
          const {
            id: bb,
            meta: ub,
            altActionable: Yb,
            canBePlacedOver: Zb
          } = ib.i[wb];
          hb[bb] = Sb(Du(wb));
          const Xb = ub.stairsCorner;
          if (null === Xb) Bb[bb] = hb[bb];
          else {
            const hb = Xb.endsWith("Right");
            Bb[bb] = Sb(`${ub.rootName}|rot${hb?ub.rot%4+1:ub.rot}|${ub.halfblockPlacement}|${Xb.replace("Right","Left")}`)
          }
          Ob[bb] = Zb ? 1 : 0, Gb[bb] = Yb || null !== ub.open || wb in Ku.d || ab.has(ub.rootName) || void 0 !== (0, pu.g)(ub.rootName) ? 1 : 0;
          const {
            rootName: pb
          } = ub;
          Ub[bb] = null !== ub.open || pu.e.includes(pb) || pb.includes("Bookshelf") || pb.includes("Mailbox") ? 1 : 0, Lb[bb] = null !== (Hb = (0, Xu.d)(bb)) && void 0 !== Hb ? Hb : pb
        }
        return {
          kinds: hb,
          shapes: Bb,
          empty: Ob,
          inUse: Gb,
          ownAltActionMessage: Ub,
          placingItems: Lb
        }
      }(), ru
    }

    function nu() {
      return Object.keys(ib.i).filter((bb => ib.i[bb].name === bb))
    }

    function Du(bb) {
      var ub;
      const hb = ib.i[bb],
        {
          rootName: Bb,
          rot: Ob
        } = hb.meta,
        [, ...Gb] = (null !== (ub = hb.rootMetaDesc) && void 0 !== ub ? ub : bb).split("|"),
        Ub = Gb.filter((bb => !("meta" === bb || du.test(bb) || (0, lu.E)(hb) && /^[nesw]+$/.test(bb) || Au.g.includes(Bb) && /^[lrud]+$/.test(bb) || kb.G.includes(Bb) && /^(left|right)$/.test(bb))));
      return [Bb, ...Ub].map((bb => "fenceGate" === hb.model && bb === `rot${Ob}` ? "rot" + ((Ob - 1) % 2 + 1) : bb)).join("|")
    }

    function xu(bb, ub) {
      const {
        kinds: hb,
        shapes: Bb
      } = ju();
      return hb[bb] === hb[ub] || Bb[bb] === Bb[ub]
    }

    function zu(bb) {
      return 1 === ju().empty[bb]
    }

    function gu(bb) {
      return ju().placingItems[bb]
    }

    function iu(bb) {
      return Wu.get(ib.i[bb].meta.rootName)
    }
    var vu = hb(9213),
      tu = hb(9235);
    const Ju = [0, 0, 0, 1, 1, 1],
      eu = (0, vu.c)([
        [2, 0, 2, 6, 6, 6]
      ]),
      Nu = (0, vu.c)([
        [3, 0, 3, 5, 5, 5]
      ]),
      su = (0, vu.c)([
        [3, 3, 3, 5, 8, 5]
      ]),
      Mu = [0, 1, 2, 3].map((bb => (0, vu.c)((0, vu.m)([
        [3, 2, 0, 5, 7, 3]
      ], bb))));

    function mu(bb) {
      const {
        ep: ub,
        model: hb,
        blockModel: Bb,
        meta: Ob
      } = ib.i[bb];
      return void 0 !== ub ? ub : "CentreCross" === hb ? eu : null !== Bb && void 0 !== Bb && Bb.startsWith("torch") ? Ob.halfblockPlacement === tu.c.side ? Mu[Ob.rot - 1] : Ob.halfblockPlacement === tu.c.top ? su : Nu : Ju
    }
    var Iu = hb(36549),
      Pu = hb(191);

    function qu(bb, ub) {
      const hb = Pu.e.Vl / 2;
      return bb[0] < ub[0] + hb && bb[0] + 1 > ub[0] - hb && bb[1] < ub[1] + Pu.e.Tl && bb[1] + 1 > ub[1] && bb[2] < ub[2] + hb && bb[2] + 1 > ub[2] - hb
    }

    function Eu(bb, ub, hb, Bb, Ob) {
      const Gb = Math.hypot(...ub.dir);
      if (!Number.isFinite(Gb) || 0 === Gb) return -1;
      const {
        from: Ub,
        reach: Lb,
        solid: Yb
      } = ub, Sb = [ub.dir[0] / Gb, ub.dir[1] / Gb, ub.dir[2] / Gb], ab = null === Yb ? Lb : Math.min(Lb, function(bb, ub, hb) {
        const Bb = yu(bb, ub, hb);
        if (Bb !== 1 / 0) return Bb;
        return (hb[0] + .5 - bb[0]) * ub[0] + (hb[1] + .5 - bb[1]) * ub[1] + (hb[2] + .5 - bb[2]) * ub[2]
      }(Ub, Sb, Yb) + .75);
      let Hb = -1,
        wb = 1 / 0,
        Zb = 1 / 0;
      for (let Xb = 0; Xb < bb.length; Xb += 4) {
        const ub = [bb[Xb], bb[Xb + 1], bb[Xb + 2]],
          Gb = Ob(Xb) ? Lb : ab;
        let Yb = -1,
          pb = yu(Ub, Sb, ub);
        if (pb > Gb) {
          const bb = [ub[0] + .5 - Ub[0], ub[1] + .5 - Ub[1], ub[2] + .5 - Ub[2]];
          if (pb = bb[0] * Sb[0] + bb[1] * Sb[1] + bb[2] * Sb[2], pb <= 0 || pb > Gb) continue;
          if (Yb = Math.hypot(bb[0] - pb * Sb[0], bb[1] - pb * Sb[1], bb[2] - pb * Sb[2]), Yb > .7 || !Bb(Xb)) continue
        }(Yb < wb || Yb === wb && pb < Zb) && hb(Xb) && (Hb = Xb, wb = Yb, Zb = pb)
      }
      return Hb
    }

    function yu(bb, ub, hb) {
      let Bb = 0,
        Ob = 1 / 0;
      for (let Gb = 0; Gb < 3; Gb++) {
        const Ub = hb[Gb] - bb[Gb];
        if (0 === ub[Gb]) {
          if (Ub > 0 || Ub + 1 < 0) return 1 / 0;
          continue
        }
        const Lb = Ub / ub[Gb],
          Yb = (Ub + 1) / ub[Gb];
        Bb = Math.max(Bb, Math.min(Lb, Yb)), Ob = Math.min(Ob, Math.max(Lb, Yb))
      }
      return Bb <= Ob ? Bb : 1 / 0
    }
    var Vu = hb(37661),
      Fu = hb(38142);
    const fu = [1, 1, 1];
    class ku {
      constructor(bb) {
        this.api = bb, this.meshes = null, this.shown = null
      }
      show(bb) {
        if (!(0, Iu.h)(bb, this.shown))
          if (this.shown = null === bb ? null : [bb[0], bb[1], bb[2]], null !== this.meshes)
            for (const ub of this.meshes) this.api.setGameMesh(ub, null === bb ? {
              visible: !1
            } : {
              anchor: bb,
              visible: !0
            });
          else if (null !== bb) {
          const ub = [Vu.e, Vu.e, Vu.e, 0, 0, 0];
          this.meshes = [this.build([ub], Vu.f, bb), this.build((0, Vu.c)(), Vu.j, bb)]
        }
      }
      dispose() {
        for (const ub of null !== (bb = this.meshes) && void 0 !== bb ? bb : []) {
          var bb;
          this.api.disposeGameMesh(ub)
        }
        this.meshes = null, this.shown = null
      }
      build(bb, ub, hb) {
        const Bb = [],
          Ob = [];
        for (const [Gb, Ub, Lb, Yb, Sb, ab] of bb)(0, Fu.e)(Bb, Ob, [Yb + .5, Sb + .5, ab + .5], [Gb, Ub, Lb]);
        return this.api.createGameMesh({
          positions: Bb,
          indices: Ob
        }, {
          rgb: fu,
          alpha: ub,
          onTop: !0
        }, hb)
      }
    }
    class Tu {
      constructor(bb) {
        this.api = bb, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(bb) {
        const ub = Pu.e.bX;
        this.chunks = [];
        for (let hb = 0; hb < bb.length; hb += 3) {
          const Bb = Math.floor(bb[hb] / ub),
            Ob = Math.floor(bb[hb + 1] / ub),
            Gb = Math.floor(bb[hb + 2] / ub);
          this.watches(Bb, Ob, Gb) || this.chunks.push(Bb, Ob, Gb)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const bb = performance.now();
        if (bb - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = bb;
        let ub = !1;
        for (let hb = 0; hb < this.chunks.length; hb += 3) {
          const bb = this.api.getChunkVersion(this.chunks[hb], this.chunks[hb + 1], this.chunks[hb + 2]);
          this.versions[hb / 3] !== bb && (this.versions[hb / 3] = bb, ub = !0)
        }
        return ub
      }
      watches(bb, ub, hb) {
        for (let Bb = 0; Bb < this.chunks.length; Bb += 3)
          if (this.chunks[Bb] === bb && this.chunks[Bb + 1] === ub && this.chunks[Bb + 2] === hb) return !0;
        return !1
      }
    }
    const cu = .35,
      Qu = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      Ru = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      bh = [.95, .2, .15];
    class uh {
      constructor() {
        this.groups = []
      }
      add(bb, ub, hb, Bb, Ob) {
        let Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Ju;
        for (const Ub of this.groups)
          if (Oh(Ub, Bb, Ob)) return Ub.cells.push(bb, ub, hb), void Ub.boxes.push(Gb);
        this.groups.push({
          rgb: Bb,
          look: Ob,
          cells: [bb, ub, hb],
          boxes: [Gb]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class hh {
      constructor(bb) {
        this.api = bb, this.shown = []
      }
      show(bb) {
        const ub = [];
        for (const hb of bb) {
          const bb = this.shown.findIndex((bb => {
            let {
              group: ub
            } = bb;
            return Oh(ub, hb.rgb, hb.look) && Gh(ub, hb)
          })); - 1 === bb ? ub.push(this.build(hb)) : (ub.push(this.shown[bb]), this.shown.splice(bb, 1))
        }
        this.dispose(), this.shown = ub
      }
      dispose() {
        for (const {
            meshes: bb
          }
          of this.shown)
          for (const ub of bb) this.api.disposeGameMesh(ub);
        this.shown = []
      }
      build(bb) {
        const {
          rgb: ub,
          look: hb,
          boxes: Bb
        } = bb, Ob = [ub[0] + (1 - ub[0]) * cu, ub[1] + (1 - ub[1]) * cu, ub[2] + (1 - ub[2]) * cu], Gb = [this.buildMesh(bb.cells, ub, hb.alpha, ((bb, ub, Ob, Gb) => {
          Bh(bb, ub, Ob, Bb[Gb], hb.size, !1)
        })), this.buildMesh(bb.cells, Ob, hb.alpha, ((bb, ub, Ob, Gb) => {
          Bh(bb, ub, Ob, Bb[Gb], hb.size, !0)
        }))];
        return hb.crossed && Gb.push(this.buildMesh(bb.cells, ub, .9, ((bb, ub, Bb) => {
          (0, Fu.f)(bb, ub, Bb, hb.size + .01, .12)
        }))), {
          group: bb,
          meshes: Gb
        }
      }
      buildMesh(bb, ub, hb, Bb) {
        const Ob = [bb[0], bb[1], bb[2]],
          Gb = [],
          Ub = [];
        for (let Lb = 0; Lb < bb.length; Lb += 3) Bb(Gb, Ub, [bb[Lb] - Ob[0] + .5, bb[Lb + 1] - Ob[1] + .5, bb[Lb + 2] - Ob[2] + .5], Lb / 3);
        return this.api.createGameMesh({
          positions: Gb,
          indices: Ub
        }, {
          rgb: [ub[0], ub[1], ub[2]],
          alpha: hb
        }, Ob)
      }
    }

    function Bh(bb, ub, hb, Bb, Ob, Gb) {
      for (let Ub = 0; Ub < Bb.length; Ub += 6) {
        const Lb = [0, 0, 0],
          Yb = [0, 0, 0];
        for (let bb = 0; bb < 3; bb++) Lb[bb] = hb[bb] + ((Bb[Ub + bb] + Bb[Ub + bb + 3]) / 2 - .5) * Ob, Yb[bb] = (Bb[Ub + bb + 3] - Bb[Ub + bb]) * Ob;
        (0, Fu.b)(bb, ub, Lb, Yb, Gb)
      }
    }

    function Oh(bb, ub, hb) {
      return bb.rgb[0] === ub[0] && bb.rgb[1] === ub[1] && bb.rgb[2] === ub[2] && bb.look === hb
    }

    function Gh(bb, ub) {
      if (bb.cells.length !== ub.cells.length) return !1;
      for (let hb = 0; hb < bb.cells.length; hb++)
        if (bb.cells[hb] !== ub.cells[hb]) return !1;
      return bb.boxes.every(((bb, hb) => bb === ub.boxes[hb]))
    }

    function Uh(bb, ub) {
      return bb.getClientOption(ub, "blockReach") + 1
    }
    class Lh {
      constructor(bb, ub, hb) {
        this.api = bb, this.localPlayerId = ub, this.pickNext = hb, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(bb) {
        const [ub, , hb] = bb.cameraDirection, Bb = Math.hypot(ub, hb);
        Bb > .001 && (this.heading = [ub / Bb, hb / Bb])
      }
      tapped(bb, ub, hb) {
        const Bb = Uh(this.api, this.localPlayerId),
          {
            origin: Ob,
            direction: Gb
          } = this.api.getActionRay(),
          Ub = [...Ob],
          Lb = [
            [Ub, [Ub[0] + Gb[0] * Bb, Ub[1] + Gb[1] * Bb, Ub[2] + Gb[2] * Bb]]
          ];
        null !== bb && Lb.push([Ub, (0, Iu.d)(bb)]), this.tap = {
          lines: Lb,
          next: ub,
          ms: hb
        }
      }
      filled(bb, ub) {
        this.tap = null, this.turnFrom(bb, ub), this.retry(ub)
      }
      arrived(bb, ub) {
        const {
          tap: hb
        } = this;
        if (null === hb || ub - hb.ms > 1500) return null;
        const Bb = (0, Iu.d)(bb);
        return (0, Iu.h)(hb.next, bb) || hb.lines.some((bb => {
          let [ub, hb] = bb;
          return function(bb, ub, hb) {
            const Bb = [hb[0] - ub[0], hb[1] - ub[1], hb[2] - ub[2]],
              Ob = [bb[0] - ub[0], bb[1] - ub[1], bb[2] - ub[2]],
              Gb = Bb[0] ** 2 + Bb[1] ** 2 + Bb[2] ** 2,
              Ub = 0 === Gb ? 0 : Math.min(1, Math.max(0, (Ob[0] * Bb[0] + Ob[1] * Bb[1] + Ob[2] * Bb[2]) / Gb));
            return Math.hypot(Ob[0] - Bb[0] * Ub, Ob[1] - Bb[1] * Ub, Ob[2] - Bb[2] * Ub)
          }(Bb, ub, hb) <= .9
        })) ? (this.tap = null, this.turnFrom(bb, ub), hb.ms) : null
      }
      turnFrom(bb, ub) {
        this.pending = {
          from: bb,
          ms: ub,
          turnMs: Math.max(50, Math.min(250, ub - this.lastFillMs))
        }, this.lastFillMs = ub
      }
      retry(bb) {
        const {
          pending: ub
        } = this;
        if (null === ub) return;
        if (bb - ub.ms > 1500) return void(this.pending = null);
        const hb = this.pickNext((0, Iu.d)(ub.from), (bb => (0, Iu.h)(bb, ub.from)));
        if (null === hb) return;
        this.pending = null;
        const {
          turning: Bb
        } = this;
        if (null !== Bb && bb < Bb.endMs && (0, Iu.h)(Bb.to, hb)) return;
        const Ob = this.api.getActionRay().origin,
          Gb = [hb[0] + .5 - Ob[0], hb[1] + .5 - Ob[1], hb[2] + .5 - Ob[2]],
          Ub = Math.hypot(Gb[0], Gb[2]);
        if (Ub < .3) {
          const bb = Math.max(Ub, .001);
          Gb[0] = this.heading[0] * bb, Gb[2] = this.heading[1] * bb
        }
        this.api.turnCamera(Gb, ub.turnMs), this.turning = {
          to: hb,
          endMs: bb + ub.turnMs
        }
      }
    }
    class Yh {
      constructor(bb, ub, hb) {
        this.api = bb, this.localPlayerId = ub, this.juice = hb, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], this.lastFilled = null, this.lastSeenFilled = null, this.playerCells = [], this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = null, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new Tu(bb), this.meshes = new hh(bb), this.outline = new ku(bb), this.turn = new Lh(bb, ub, ((bb, ub) => this.pickNext(bb, ub)))
      }
      cZ(bb) {
        const ub = "active" === bb[0] ? `${bb[1]}|${bb[3]}|${bb[4]}|${bb[5]}|${bb[6]}` : "";
        if ("active" !== bb[0]) "built" === bb[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , hb, Bb, Ob, Gb] = bb;
          ub !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = hb) : hb === this.layerY ? this.burstUnlisted(Bb) : hb > this.layerY && this.finishLayer(hb), this.layerY = hb, this.layerCells.has(hb) || this.layerCells.set(hb, Bb.filter(ah)), this.ghostCells = Bb, this.palette = Ob, this.occupiedCells = Gb
        }
        ub !== this.blueprint && (this.blueprint = ub, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((bb => this.api.blockNameToBlockId(bb))), this.chunkWatch.watch([...this.ghostCells.filter(ah), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(bb) {
        this.burstUnlisted([]), bb > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = bb)
      }
      gH() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const bb = performance.now();
        let ub = !1;
        for (const [Ob, Gb] of this.foreseen) {
          var hb;
          if (bb - Gb > 1e3) this.foreseen.delete(Ob), ub = !0, (null === (hb = this.lastFilled) || void 0 === hb ? void 0 : hb.join()) === Ob && (this.lastFilled = this.lastSeenFilled)
        }
        const Bb = Sh(this.api.getPositionView(this.localPlayerId));
        (ub || Bb.some(((bb, ub) => bb !== this.playerCells[ub]))) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(bb) {
        const ub = new Set;
        for (let Ob = 0; Ob < bb.length; Ob += 4) ub.add(`${bb[Ob]},${bb[Ob+1]},${bb[Ob+2]}`);
        const hb = [],
          {
            ghostCells: Bb
          } = this;
        for (let Ob = 0; Ob < Bb.length; Ob += 4) {
          const bb = `${Bb[Ob]},${Bb[Ob+1]},${Bb[Ob+2]}`;
          !ub.has(bb) && this.open.delete(bb) && hb.push(this.filledCell(Ob))
        }
        this.burst(hb)
      }
      refresh() {
        const {
          ghostCells: bb,
          palette: ub,
          occupiedCells: hb
        } = this, Bb = new uh, Ob = new Set, Gb = [], Ub = [];
        for (let Lb = 0; Lb < bb.length; Lb += 4) {
          const [hb, Yb, Sb, ab] = [bb[Lb], bb[Lb + 1], bb[Lb + 2], bb[Lb + 3]], Hb = this.api.getBlockId(hb, Yb, Sb), wb = `${hb},${Yb},${Sb}`, Zb = xu(this.blockIds[ab], Hb);
          !Zb && zu(Hb) ? Bb.add(hb, Yb, Sb, iu(ub[ab]), Qu, mu(ub[ab])) : Zb ? this.open.has(wb) && Gb.push(this.filledCell(Lb)) : Bb.add(hb, Yb, Sb, bh, Ru), !Zb && this.api.isBlockInLoadedChunk(hb, Yb, Sb) && (Ob.add(wb), Ub.push(hb, Yb, Sb, zu(Hb) ? 0 : 1))
        }
        this.open = Ob, this.nextCells = Ub;
        for (let Lb = 0; Lb < hb.length; Lb += 3) {
          const [bb, ub, Ob] = [hb[Lb], hb[Lb + 1], hb[Lb + 2]];
          zu(this.api.getBlockId(bb, ub, Ob)) || Bb.add(bb, ub, Ob, bh, Ru)
        }
        this.meshes.show(Bb.toArray()), this.burst(Gb), this.showNext(), this.turn.retry(performance.now())
      }
      burst(bb) {
        const ub = performance.now(),
          hb = [];
        for (const [Ob, Gb, Ub] of bb) {
          const bb = [Ob, Gb, Ub];
          this.lastSeenFilled = bb, this.foreseen.delete(bb.join()) || hb.push(bb)
        }
        const Bb = this.isHolding(ub);
        for (const Ob of hb) {
          if (this.lastFilled = Ob, Bb && this.pressFilled) {
            this.turn.filled(Ob, ub);
            continue
          }
          const bb = this.turn.arrived(Ob, ub);
          if (null !== bb) {
            this.pressFilled = Bb;
            for (const [ub, hb] of this.foreseen) hb <= bb && this.foreseen.delete(ub)
          }
        }
        this.juice.filled(bb)
      }
      showNext() {
        var bb;
        const ub = this.api.getPositionView(this.localPlayerId);
        this.playerCells.splice(0, 1 / 0, ...Sh(ub));
        const hb = this.lastFilled;
        this.nextCell = this.pickNext(null === hb ? [ub[0], ub[1] + 1, ub[2]] : (0, Iu.d)(hb), (() => !1)), this.outline.show(null !== (bb = this.aimed) && void 0 !== bb ? bb : this.nextCell)
      }
      pickNext(bb, ub) {
        const hb = this.api.getPositionView(this.localPlayerId),
          Bb = [hb[0], hb[1] + Pu.e.Tl * Pu.e.playerEyeToHeightRatio, hb[2]],
          Ob = Uh(this.api, this.localPlayerId),
          {
            nextCells: Gb
          } = this,
          Ub = bb => [Gb[bb], Gb[bb + 1], Gb[bb + 2]],
          Lb = function(bb, ub, hb, Bb, Ob, Gb) {
            let Ub = -1,
              Lb = -1,
              Yb = 1 / 0;
            for (let Sb = 0; Sb < bb.length; Sb += ub) {
              const ub = (Gb(Sb) ? 2 : 0) + (Bb(Sb) ? 1 : 0);
              if (ub < Lb || Ob(Sb)) continue;
              const ab = (bb[Sb] + .5 - hb[0]) ** 2 + (bb[Sb + 1] + .5 - hb[1]) ** 2 + (bb[Sb + 2] + .5 - hb[2]) ** 2;
              (ub > Lb || ab < Yb) && (Ub = Sb, Lb = ub, Yb = ab)
            }
            return Ub
          }(Gb, 4, bb, (bb => 1 === Gb[bb + 3]), (bb => {
            const Bb = Ub(bb);
            return qu(Bb, hb) || this.foreseen.has(Bb.join()) || ub(Bb)
          }), (bb => function(bb, ub, hb) {
            return (ub[0] + .5 - bb[0]) ** 2 + (ub[1] + .5 - bb[1]) ** 2 + (ub[2] + .5 - bb[2]) ** 2 <= hb ** 2
          }(Bb, Ub(bb), Ob)));
        return -1 === Lb ? null : Ub(Lb)
      }
      afterRender(bb) {
        var ub;
        this.turn.look(bb);
        const hb = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === hb ? null : hb.position), this.outline.show(null !== (ub = this.aimed) && void 0 !== ub ? ub : this.nextCell)
      }
      isHolding(bb) {
        return null !== this.altMs && bb - this.altMs <= 500
      }
      attemptAltAction(bb) {
        const ub = performance.now();
        if (this.isHolding(ub) || (this.pressFilled = !1), this.altMs = ub, this.pressFilled) return "preventPlacement";
        const hb = this.findAimed(bb);
        if (null !== hb) return this.foreseen.set(hb.join(), ub), this.lastFilled = hb, this.aimed = null, this.showNext(), this.turn.filled(hb, ub), this.pressFilled = !0, "preventPlacement";
        null !== this.nextCell && this.turn.tapped(bb, this.nextCell, ub)
      }
      findAimed(bb) {
        return function(bb, ub, hb, Bb, Ob, Gb, Ub) {
          const Lb = bb.cub(ub),
            Yb = null === Lb || null === bb.blockNameToBlockId(Lb.name, !0) ? null : Lb.name,
            Sb = bb.getPositionView(ub),
            {
              origin: ab,
              direction: Hb
            } = bb.getActionRay(),
            wb = Eu(Bb, {
              from: ab,
              dir: Hb,
              reach: Uh(bb, ub),
              solid: hb
            }, (ub => {
              const hb = [Bb[ub], Bb[ub + 1], Bb[ub + 2]];
              return !xu(Ob[Bb[ub + 3]], bb.getBlockId(...hb)) && !Ub.has(hb.join()) && bb.isBlockInLoadedChunk(...hb) && !qu(hb, Sb)
            }), (bb => null === Yb || Yb === gu(Ob[Bb[bb + 3]])), (bb => null !== Gb && Bb[bb] === Gb[0] && Bb[bb + 1] === Gb[1] && Bb[bb + 2] === Gb[2]));
          return -1 === wb ? null : [Bb[wb], Bb[wb + 1], Bb[wb + 2]]
        }(this.api, this.localPlayerId, bb, this.ghostCells, this.blockIds, this.nextCell, this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(bb) {
        const {
          ghostCells: ub
        } = this, [hb, Bb, Ob] = iu(this.palette[ub[bb + 3]]);
        return [ub[bb], ub[bb + 1], ub[bb + 2], hb, Bb, Ob]
      }
    }

    function Sh(bb) {
      let [ub, hb, Bb] = bb;
      const Ob = Pu.e.Vl / 2;
      return [Math.floor(ub), Math.floor(hb), Math.floor(Bb), Math.floor(ub - Ob), Math.floor(ub + Ob), Math.floor(hb + Pu.e.Tl), Math.floor(Bb - Ob), Math.floor(Bb + Ob)]
    }

    function ah(bb, ub) {
      return ub % 4 !== 3
    }

    function Hh(bb, ub, hb, Bb, Ob) {
      if (!bb.isBlockInLoadedChunk(ub, Bb - 6, hb) || !bb.isBlockInLoadedChunk(ub, Bb + 6 + Ob, hb) || !bb.canModifyBlockAt(ub, Bb, hb)) return NaN;
      let Gb = Bb - 1;
      if (0 !== bb.getBlockId(ub, Gb, hb)) {
        for (; Gb < Bb + 6 && 0 !== bb.getBlockId(ub, Gb + 1, hb);) Gb++;
        return Gb
      }
      for (; Gb > Bb - 6;)
        if (Gb--, 0 !== bb.getBlockId(ub, Gb, hb)) return Gb;
      return NaN
    }

    function wh(bb, ub, hb, Bb, Ob) {
      let Gb = 0;
      for (let Ub = Bb + 1; Ub <= Bb + Ob; Ub++) 0 !== bb.getBlockId(ub, Ub, hb) && Gb++;
      return Gb
    }

    function Zh(bb) {
      const ub = new Map;
      for (const Ub of bb) {
        var hb;
        if (Number.isNaN(Ub)) return null;
        ub.set(Ub, (null !== (hb = ub.get(Ub)) && void 0 !== hb ? hb : 0) + 1)
      }
      let Bb = NaN,
        Ob = 0;
      for (const [Ub, Lb] of ub)(Lb > Ob || Lb === Ob && Ub < Bb) && (Bb = Ub, Ob = Lb);
      let Gb = 0;
      for (const Ub of bb) Gb += Math.abs(Ub - Bb);
      return Gb
    }

    function Xh(bb, ub, hb, Bb) {
      const {
        eye: Ob,
        forward: Gb,
        tanHalfFovX: Ub,
        tanHalfFovY: Lb
      } = bb, [Yb, Sb] = function(bb) {
        let [ub, hb, Bb] = bb;
        const Ob = Math.hypot(ub, Bb),
          [Gb, Ub] = [Bb / Ob, -ub / Ob];
        return [
          [Gb, 0, Ub],
          [hb * Ub, Bb * Gb - ub * Ub, -hb * Gb]
        ]
      }(Gb), [ab, Hb] = [ub * Ub, hb * Lb], wb = Gb[0] + ab * Yb[0] + Hb * Sb[0], Zb = Gb[1] + Hb * Sb[1], Xb = Gb[2] + ab * Yb[2] + Hb * Sb[2], pb = (Bb - Ob[1]) / Zb;
      return pb > 0 && pb < 1 / 0 ? [Ob[0] + pb * wb, Ob[2] + pb * Xb] : null
    }
    const ph = "plotsBlueprintPlacementChanged",
      oh = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class Ah {
      constructor(bb, ub) {
        this.api = bb, this.localPlayerId = ub, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = bb => {
          var ub, hb, Bb, Gb;
          const Ub = null !== (ub = null === (hb = this.placing) || void 0 === hb ? void 0 : hb.rotation) && void 0 !== ub ? ub : 0,
            {
              size: Lb
            } = qb(bb, Ub),
            Yb = this.api.iK(this.localPlayerId),
            [Sb, ab] = null !== (Bb = null !== (Gb = function(bb, ub, hb) {
              const [Bb, Ob, Gb] = ub, [Ub, Lb, Yb] = [Math.floor(hb[0]), Math.floor(hb[1]), Math.floor(hb[2])], Sb = 6 + Math.max(Bb, Gb) / 2, [ab, Hb] = [Math.ceil(Sb + Bb / 2), Math.ceil(Sb + Gb / 2)], [wb, Zb] = [Ub - ab, Yb - Hb], [Xb, pb] = [2 * ab + 1, 2 * Hb + 1], ob = new Float64Array(Xb * pb), Ab = new Uint16Array(Xb * pb);
              for (let Cb = 0; Cb < Xb; Cb++)
                for (let ub = 0; ub < pb; ub++) {
                  const hb = Hh(bb, wb + Cb, Zb + ub, Lb, Ob);
                  ob[Cb * pb + ub] = hb, Number.isNaN(hb) || (Ab[Cb * pb + ub] = wh(bb, wb + Cb, Zb + ub, hb, Ob))
                }
              const lb = [];
              let Kb = null,
                Wb = 1 / 0;
              for (let Cb = 0; Cb + Bb <= Xb; Cb++)
                for (let bb = 0; bb + Gb <= pb; bb++) {
                  const [ub, Ob] = [wb + Cb, Zb + bb], Lb = Math.hypot(ub + Bb / 2 - hb[0], Ob + Gb / 2 - hb[2]);
                  if (Lb > Sb || Ub >= ub - 2 && Ub < ub + Bb + 2 && Yb >= Ob - 2 && Yb < Ob + Gb + 2) continue;
                  lb.length = 0;
                  let ab = 0;
                  for (let hb = 0; hb < Bb; hb++)
                    for (let ub = 0; ub < Gb; ub++) lb.push(ob[(Cb + hb) * pb + bb + ub]), ab += Ab[(Cb + hb) * pb + bb + ub];
                  const Hb = Zh(lb);
                  if (null === Hb) continue;
                  const Xb = Lb + 3 * (Hb + ab);
                  Xb < Wb && (Wb = Xb, Kb = [ub, Ob])
                }
              return Kb
            }(this.api, Lb, Yb)) && void 0 !== Gb ? Gb : this.cornerOnTarget(Lb)) && void 0 !== Bb ? Bb : [Math.floor(Yb[0]) + 2, Math.floor(Yb[2])];
          this.placing = {
            id: bb,
            rotation: Ub,
            corner: [Sb, this.playerLevel(), ab],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null
          }, this.update(), this.api.sendCommand(`${Ob} preview`)
        }, this.rotate = () => {
          const {
            id: bb,
            rotation: ub,
            corner: hb
          } = this.placing, Ob = Bb[(Bb.indexOf(ub) + 1) % Bb.length], [Gb, , Ub] = qb(bb, ub).size, [Lb, , Yb] = qb(bb, Ob).size;
          this.moveTo(hb[0] + Math.floor(Gb / 2) - Math.floor(Lb / 2), hb[2] + Math.floor(Ub / 2) - Math.floor(Yb / 2), Ob)
        }, this.hoverAt = (bb, ub) => {
          this.placing.hover = [bb, ub], this.moveCentreTo(this.camera, bb, ub)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (bb, ub) => {
          const hb = this.placing,
            {
              eye: Bb,
              forward: Ob,
              tanHalfFovX: Gb,
              tanHalfFovY: Ub
            } = this.camera,
            Lb = {
              eye: [Bb[0], Bb[1], Bb[2]],
              forward: [Ob[0], Ob[1], Ob[2]],
              tanHalfFovX: Gb,
              tanHalfFovY: Ub
            },
            Yb = hb.corner[1],
            Sb = Xh(Lb, bb, ub, Yb);
          hb.hover = null, hb.drag = Sb && {
            view: Lb,
            ground: Sb,
            corner: [hb.corner[0], hb.corner[2]],
            level: Yb
          }
        }, this.dragTo = (bb, ub) => {
          const hb = this.placing.drag,
            Bb = hb && Xh(hb.view, bb, ub, hb.level);
          null !== hb && null !== Bb && this.moveTo(hb.corner[0] + Math.round(Bb[0] - hb.ground[0]), hb.corner[1] + Math.round(Bb[1] - hb.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const bb = this.view;
          bb.waiting || (bb.blocked ? this.vp({
            ...bb,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const bb = this.placing,
            {
              id: ub,
              rotation: hb,
              corner: Bb
            } = bb;
          this.api.sendCommand(`${Ob} place ${ub} ${Bb.join(" ")} ${hb}`), bb.sent = {
            atMs: performance.now(),
            corner: [...Bb],
            rotation: hb,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${Ob} preview off`))
        }, this.chunkWatch = new Tu(bb), this.meshes = new hh(bb)
      }
      getView() {
        return this.view
      }
      gH() {
        const bb = this.placing;
        null !== bb && (null !== bb.sent && !bb.sent.timedOut && performance.now() - bb.sent.atMs > 3e3 ? (bb.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(bb) || this.chunkWatch.changed()) && this.update())
      }
      afterRender(bb) {
        const ub = this.placing;
        null !== ub && (! function(bb, ub) {
          for (let hb = 0; hb < 3; hb++) ub.eye[hb] = bb.cameraPosition[hb], ub.forward[hb] = bb.cameraDirection[hb];
          ub.tanHalfFovX = bb.tanHalfFovX, ub.tanHalfFovY = bb.tanHalfFovY
        }(bb, this.camera), null !== ub.hover && this.moveCentreTo(this.camera, ub.hover[0], ub.hover[1]))
      }
      cZ(bb) {
        const ub = this.placing;
        if (null === ub || null === ub.sent || "active" !== bb[0]) return;
        const {
          sent: hb
        } = ub, [, Bb, Ob, Gb, Ub, Lb, Yb] = bb;
        Ob && Bb === ub.id && Yb === hb.rotation && Gb === hb.corner[0] && Ub === hb.corner[1] && Lb === hb.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(bb) {
        let [ub, , hb] = bb;
        const Bb = this.api.getTargetedBlock();
        if (null === Bb) return null;
        const [Ob, , Gb] = Bb.position;
        return [Ob - Math.floor(ub / 2), Gb - Math.floor(hb / 2)]
      }
      playerLevel() {
        var bb;
        const [ub, hb, Bb] = this.api.iK(this.localPlayerId);
        if (null !== (bb = this.api.getLocalPlayerMovement()) && void 0 !== bb && bb.onGround) return Math.ceil(hb - .01);
        const [Ob, Gb, Ub] = [Math.floor(ub), Math.floor(hb), Math.floor(Bb)];
        for (let Lb = Gb; Lb >= Gb - 2; Lb--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(Ob, Lb, Ub))) return Lb + 1;
        return Gb
      }
      followPlayerLevel(bb) {
        if (lh(bb)) return !1;
        const ub = this.playerLevel();
        return ub !== bb.corner[1] && (bb.corner[1] = ub, !0)
      }
      moveCentreTo(bb, ub, hb) {
        const Bb = this.placing,
          Ob = Xh(bb, ub, hb, Bb.corner[1]);
        if (null !== Ob) {
          const [bb, , ub] = qb(Bb.id, Bb.rotation).size;
          this.moveTo(Math.round(Ob[0] - bb / 2), Math.round(Ob[1] - ub / 2))
        }
      }
      moveTo(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const Bb = this.placing;
        if (lh(Bb)) return;
        const [Ob, Gb, Ub] = Bb.corner;
        if (this.centreOnPlot(Ob, Ub) && !this.centreOnPlot(bb, ub, hb))
          if (this.centreOnPlot(bb, Ub, hb)) ub = Ub;
          else {
            if (!this.centreOnPlot(Ob, ub, hb)) return;
            bb = Ob
          } bb === Ob && ub === Ub && hb === Bb.rotation || (Bb.rotation = hb, Bb.corner = [bb, Gb, ub], this.update())
      }
      centreOnPlot(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: Bb,
          corner: Ob
        } = this.placing, [Gb, , Ub] = qb(Bb, hb).size;
        return this.api.canModifyBlockAt(bb + Math.floor(Gb / 2), Ob[1], ub + Math.floor(Ub / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.vp(null)
      }
      update() {
        const {
          id: bb,
          rotation: ub,
          corner: hb,
          refusals: Bb
        } = this.placing, Ob = new uh, Gb = [];
        let Ub = !1,
          Lb = 0;
        for (const {
            offset: ab,
            block: Hb
          }
          of qb(bb, ub).cells) {
          const [bb, ub, Bb] = [hb[0] + ab[0], hb[1] + ab[1], hb[2] + ab[2]];
          Gb.push(bb, ub, Bb);
          const Yb = !this.api.canModifyBlockAt(bb, ub, Bb),
            Sb = this.api.getBlockId(bb, ub, Bb),
            wb = !zu(Sb) && !xu(this.api.blockNameToBlockId(Hb), Sb);
          Ub ||= Yb, Lb += wb ? 1 : 0, Yb || wb ? Ob.add(bb, ub, Bb, bh, Ru) : Ob.add(bb, ub, Bb, iu(Hb), oh, mu(Hb))
        }
        this.chunkWatch.watch(Gb), this.meshes.show(Ob.toArray());
        const Yb = this.view,
          Sb = lh(this.placing);
        (null === Yb || void 0 === Yb ? void 0 : Yb.id) === bb && Yb.blocked === Ub && Yb.toClear === Lb && Yb.waiting === Sb && Yb.refusals === Bb || this.vp({
          id: bb,
          blocked: Ub,
          toClear: Lb,
          waiting: Sb,
          refusals: Bb
        })
      }
      vp(bb) {
        this.view = bb, ab.i.vp(ph, bb, !0)
      }
    }

    function lh(bb) {
      let {
        sent: ub
      } = bb;
      return null !== ub && !ub.timedOut
    }
    var Kh = hb(4013),
      Wh = hb(38772);

    function Ch(bb, ub, hb) {
      const Bb = [255 * bb, 255 * ub, 255 * hb],
        [Ob, Gb, Ub] = Bb.map((bb => bb + .4 * (255 - bb)));
      return {
        texture: "square_particle",
        LH: 48,
        minLifeTime: .3 / Wh.c,
        maxLifeTime: .55 / Wh.c,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * Wh.c * Wh.c, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...Bb, 1],
          maxColor: [Ob, Gb, Ub, 1]
        }, {
          timeFraction: 1,
          minColor: [...Bb, 0],
          maxColor: [Ob, Gb, Ub, 0]
        }],
        blendMode: Kh.f.Standard
      }
    }
    const dh = {
      texture: "glint",
      mipmaps: !1,
      LH: 96,
      minLifeTime: .5 / Wh.c,
      maxLifeTime: .9 / Wh.c,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * Wh.c * Wh.c, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: Kh.f.OneOne
    };
    class rh {
      constructor(bb, ub) {
        this.api = bb, this.localPlayerId = ub, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(bb) {
        if (this.api.particlesEnabled())
          for (const [ub, hb, Bb, Ob, Gb, Ub] of bb.slice(0, 3)) {
            const bb = `${Ob},${Gb},${Ub}`;
            let Lb = this.chips.get(bb);
            void 0 === Lb && (Lb = this.api.createParticles(Ch(Ob, Gb, Ub), {
              pos: [ub + .5, hb + .5, Bb + .5]
            }), this.chips.set(bb, Lb));
            for (let ub = 0; ub < 8; ub++) this.setPoint(ub, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            Lb.emitPoints([ub + .5, hb + .5, Bb + .5], this.points, 8)
          }
      }
      layerDone(bb) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const ub = bb.length / 3;
        if (0 === ub || !this.api.particlesEnabled()) return;
        const hb = Math.min(ub, 48),
          [Bb, Ob, Gb] = [bb[0] + .5, bb[1] + 1, bb[2] + .5];
        let Ub = 0;
        for (let Lb = 0; Lb < hb; Lb++) {
          const Yb = 3 * Math.floor(Lb * ub / hb);
          for (let ub = 0; ub < 2; ub++) this.setPoint(Ub++, bb[Yb] + Math.random() - Bb, bb[Yb + 1] + 1 - Ob, bb[Yb + 2] + Math.random() - Gb, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(dh, {
          pos: [Bb, Ob, Gb]
        }), this.sparkles.emitPoints([Bb, Ob, Gb], this.points, Ub)
      }
      dispose() {
        var bb;
        for (const ub of this.chips.values()) ub.stop();
        this.chips.clear(), null === (bb = this.sparkles) || void 0 === bb || bb.stop(), this.sparkles = null
      }
      setPoint(bb, ub, hb, Bb, Ob) {
        const Gb = 4 * bb;
        this.points[Gb] = ub, this.points[Gb + 1] = hb, this.points[Gb + 2] = Bb, this.points[Gb + 3] = Ob
      }
    }
    var jh = hb(1874);
    const nh = "SpecialAction1",
      Dh = "KeyY",
      xh = "KeyX";

    function zh(bb) {
      let {
        placement: ub
      } = bb;
      const hb = (0, xb.k)(ph, ub.getView()),
        {
          t: Bb
        } = (0, gb.K)(),
        {
          isTouchScreen: Ob
        } = (0, Lb.j)(["isTouchScreen"]),
        Gb = null !== hb,
        Ub = Gb && !hb.blocked && !hb.waiting;
      if ((0, Db.c)((bb => Gb && !bb.repeat && !(0, Sb.isTypingInInput)() && !(0, Yb.q)() && !Ob), (bb => {
          const hb = function(bb, ub, hb) {
            if (bb === xh) return ub.stop;
            if (bb === Dh) return hb ? ub.build : ih;
            return jh.r[nh].includes(bb) ? ub.rotate : null
          }(bb.code, ub, Ub);
          null !== hb && (bb.stopPropagation(), hb())
        })), !Gb) return null;
      let ab = Ob ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return hb.blocked ? ab = "plotsGame:placementOffPlot" : hb.toClear > 0 && (ab = "plotsGame:placementClear"), (0, yb.jsx)(Uu.e, {
        placement: "bottom",
        children: (0, yb.jsxs)("div", {
          className: "PlotsPlacementCard",
          children: [(0, yb.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: Bb(Xb(hb.id).displayName.translationKey)
          }), (0, yb.jsx)("div", {
            className: db()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: hb.refusals > 0
            }),
            children: Bb(ab)
          }, hb.refusals), (0, yb.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, yb.jsxs)(jb.e, {
              onClick: ub.rotate,
              children: [(0, yb.jsx)(gh, {
                noaAction: nh
              }), Bb("plotsGame:placementRotate")]
            }), (0, yb.jsxs)(jb.H, {
              onClick: ub.stop,
              children: [(0, yb.jsx)(gh, {
                keyCode: xh
              }), Bb("general:cancel")]
            }), (0, yb.jsxs)(jb.m, {
              disabled: !Ub,
              onClick: ub.build,
              children: [(0, yb.jsx)(gh, {
                keyCode: Dh
              }), Bb("plotsGame:placementBuild")]
            })]
          })]
        })
      })
    }

    function gh(bb) {
      return (0, yb.jsx)(Yu.e, {
        className: "PlotsPlacementKey",
        ...bb
      })
    }

    function ih() {}
    var vh = hb(4302);
    class th {
      constructor(bb) {
        this.placement = bb, this.press = null
      }
      down(bb) {
        if (null !== this.press) return !1;
        const {
          id: ub,
          mouse: hb,
          x: Bb,
          y: Ob,
          atMs: Gb
        } = bb;
        return this.press = {
          id: ub,
          mouse: hb,
          x: Bb,
          y: Ob,
          atMs: Gb,
          moved: !1
        }, hb || this.placement.beginDrag(bb.ndcX, bb.ndcY), !0
      }
      move(bb) {
        const ub = this.press;
        null !== ub && ub.id === bb.id && (ub.moved ||= Math.hypot(bb.x - ub.x, bb.y - ub.y) > 8), bb.mouse ? this.placement.hoverAt(bb.ndcX, bb.ndcY) : (null === ub || void 0 === ub ? void 0 : ub.id) === bb.id && this.placement.dragTo(bb.ndcX, bb.ndcY)
      }
      up(bb) {
        const ub = this.press;
        (null === ub || void 0 === ub ? void 0 : ub.id) === bb.id && (this.move(bb), this.end(), !ub.moved && (ub.mouse || bb.atMs - ub.atMs <= 250) && this.placement.tap())
      }
      cancel(bb) {
        var ub;
        (null === (ub = this.press) || void 0 === ub ? void 0 : ub.id) === bb && this.end()
      }
      leave(bb) {
        let {
          id: ub,
          mouse: hb
        } = bb;
        hb && this.placement.endHover(), this.cancel(ub)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }

    function Jh(bb) {
      let {
        placement: ub
      } = bb;
      return null === (0, xb.k)(ph, ub.getView()) ? null : (0, yb.jsx)(eh, {
        placement: ub
      })
    }

    function eh(bb) {
      let {
        placement: ub
      } = bb;
      (0, vh.c)(!0, !0, "PlotsPlacementLayer");
      const hb = (0, Gb.useMemo)((() => new th(ub)), [ub]);
      return (0, yb.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: bb => {
          "mouse" === bb.pointerType && 0 !== bb.button || !hb.down(Nh(bb)) || bb.currentTarget.setPointerCapture(bb.pointerId)
        },
        onPointerMove: bb => {
          hb.move(Nh(bb))
        },
        onPointerUp: bb => {
          hb.up(Nh(bb))
        },
        onPointerCancel: bb => {
          hb.cancel(bb.pointerId)
        },
        onLostPointerCapture: bb => {
          hb.cancel(bb.pointerId)
        },
        onPointerLeave: bb => {
          hb.leave(Nh(bb))
        },
        "aria-hidden": !0
      })
    }

    function Nh(bb) {
      const {
        left: ub,
        top: hb,
        width: Bb,
        height: Ob
      } = bb.currentTarget.getBoundingClientRect();
      return {
        id: bb.pointerId,
        mouse: "mouse" === bb.pointerType,
        x: bb.clientX,
        y: bb.clientY,
        ndcX: (bb.clientX - ub) / Bb * 2 - 1,
        ndcY: 1 - (bb.clientY - hb) / Ob * 2,
        atMs: bb.timeStamp
      }
    }
    var sh = hb(2238),
      Mh = hb(36309),
      mh = hb(1857),
      Ih = hb(1158);
    const Ph = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function qh(bb) {
      let {
        hud: ub
      } = bb;
      const hb = (0, xb.k)(au, ub.getPlot()),
        [Bb, Ob] = (0, Gb.useState)(null),
        Ub = (0, Mh.h)(Bb);
      if ("none" === hb[0]) return null;
      const [, Lb, Yb, Sb, ab, Hb] = hb;
      return (0, yb.jsx)("div", {
        className: db()("PlotsPlotBannerContainer", {
          Below: Ub
        }),
        children: (0, yb.jsx)(Eh, {
          plotX: Lb,
          plotZ: Yb,
          ownerName: Sb,
          ownerId: ab,
          relation: Hb,
          plaqueRef: Ob
        }, `${Lb},${Yb}`)
      })
    }

    function Eh(bb) {
      var ub, hb;
      let {
        plotX: Bb,
        plotZ: Ob,
        ownerName: Gb,
        ownerId: Ub,
        relation: Lb,
        plaqueRef: Yb
      } = bb;
      const {
        t: Sb
      } = (0, gb.K)(), ab = (0, mh.i)("hiddenPlayerNames"), Hb = (0, mh.i)("players"), wb = null === Ub ? null : null !== (ub = null === (hb = Hb.byId[Ub]) || void 0 === hb ? void 0 : hb.cosmetics) && void 0 !== ub ? ub : null, Zb = Sb("plotsGame:plotBannerCoords", {
        x: Bb,
        z: Ob
      }), Xb = "own" === Lb || null !== Gb;
      return (0, yb.jsxs)("div", {
        ref: Yb,
        className: db()("PlotsPlotBanner", {
          Own: "own" === Lb,
          Shared: "shared" === Lb
        }),
        role: "status",
        children: [(0, yb.jsxs)("span", {
          className: db()("PlotsPlotBannerSeal", {
            Face: null !== wb
          }),
          children: [null !== wb && (0, yb.jsx)(sh.e, {
            cosmetics: wb
          }), null === wb && (0, yb.jsx)(rb.e, {
            name: Ph[Lb]
          })]
        }), (0, yb.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, yb.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === Lb && Sb("plotsGame:plotBannerYours"), "own" !== Lb && null !== Gb && Sb("plotsGame:plotBannerOwner", {
              name: (0, Ih.f)(Gb, ab)
            }), !Xb && Zb]
          }), Xb && (0, yb.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [Zb, "shared" === Lb && (0, yb.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: Sb("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }

    function yh(bb) {
      let {
        progress: ub,
        goal: hb
      } = bb;
      const Bb = Math.min(ub, hb);
      return (0, yb.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, yb.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": hb,
          "aria-valuenow": Bb,
          children: (0, yb.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${Bb/hb})`
            }
          })
        }), (0, yb.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [Bb, "/", hb]
        })]
      })
    }

    function Vh(bb) {
      return {
        translationKey: `plotsGame:${bb}`,
        actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
      }
    }
    const Fh = {
      house: {
        icon: "house",
        titleKey: "plotsGame:starterLotHouseTitle",
        desktop: Vh("starterLotHouseHint", ["alt-fire"]),
        touch: Vh("starterLotHouseHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotHousePlain"
      },
      garden: {
        icon: "sparkle",
        titleKey: "plotsGame:starterLotGarden",
        desktop: Vh("starterLotGardenHint", ["alt-fire"]),
        touch: Vh("starterLotGardenHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotGardenPlain"
      },
      boulder: {
        icon: "hammer",
        titleKey: "plotsGame:starterLotBoulder",
        desktop: Vh("starterLotBreakHint", ["primary-fire"]),
        touch: Vh("starterLotBreakHintTouch"),
        plainKey: "plotsGame:starterLotBreakPlain"
      },
      fly: {
        icon: "angles-up",
        titleKey: "plotsGame:starterLotFly",
        desktop: Vh("starterLotFlyHint", ["jump"]),
        touch: Vh("starterLotFlyHintTouch"),
        plainKey: "plotsGame:starterLotFlyPlain"
      },
      backpack: {
        icon: "backpack",
        titleKey: "plotsGame:starterLotBackpack",
        desktop: Vh("starterLotBackpackHint", ["OpenInventory"]),
        touch: Vh("starterLotBackpackHintTouch"),
        plainKey: "plotsGame:starterLotBackpackPlain"
      },
      neighbour: {
        icon: "person",
        titleKey: "plotsGame:starterLotNeighbour",
        desktop: Vh("starterLotNeighbourHint", ["forward", "left", "backward", "right"]),
        touch: Vh("starterLotNeighbourHintTouch"),
        plainKey: "plotsGame:starterLotNeighbourPlain"
      }
    };

    function fh(bb, ub, hb) {
      const {
        translationKey: Bb,
        actions: Ob
      } = hb ? ub.touch : ub.desktop;
      if (0 === Ob.length) return bb(Bb);
      const Gb = [];
      for (const Ub of Ob) {
        const Bb = (0, jh.p)(Ub, hb),
          Ob = jh.r[Ub][0];
        if (null === Bb && void 0 === Ob) return bb(ub.plainKey);
        Gb.push(null === Bb ? (0, jh.l)(Ob) : bb(Bb.translationKey))
      }
      return bb(Bb, {
        key: Gb.join("")
      })
    }

    function kh(bb) {
      let {
        hud: ub
      } = bb;
      const hb = (0, xb.k)(Su, ub.getStep()),
        {
          t: Bb
        } = (0, gb.K)();
      return (0, yb.jsxs)(Uu.e, {
        placement: "bottom",
        children: ["step" === hb[0] && (0, yb.jsx)(Th, {
          step: hb[1],
          progress: hb[2],
          goal: hb[3]
        }, hb[1]), "celebrate" === hb[0] && (0, yb.jsx)(ch, {
          className: db()("Celebrate", {
            Gold: "house" === hb[1]
          }),
          icon: "star",
          title: Bb("house" === hb[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
        }, `celebrate-${hb[1]}`)]
      })
    }

    function Th(bb) {
      let {
        step: ub,
        progress: hb,
        goal: Bb
      } = bb;
      const {
        isTouchScreen: Ob
      } = (0, Lb.j)(["isTouchScreen"]), {
        t: Gb
      } = (0, gb.K)(), Ub = Fh[ub];
      return (0, yb.jsxs)(ch, {
        icon: Ub.icon,
        title: Gb(Ub.titleKey),
        children: [(0, yb.jsx)("div", {
          className: "PlotsStepCardHint SmallTextLight",
          children: fh(Gb, Ub, Ob)
        }), Bb > 1 && (0, yb.jsx)(yh, {
          progress: hb,
          goal: Bb
        }), "backpack" === ub && Ob && (0, yb.jsx)(Qh, {})]
      })
    }

    function ch(bb) {
      let {
        className: ub,
        icon: hb,
        title: Bb,
        children: Ob
      } = bb;
      return (0, yb.jsxs)("div", {
        className: db()("PlotsStepCard", ub),
        role: "status",
        children: [(0, yb.jsx)("span", {
          className: "PlotsStepCardIcon",
          children: (0, yb.jsx)(rb.e, {
            name: hb
          })
        }), (0, yb.jsxs)("div", {
          className: "PlotsStepCardBody",
          children: [(0, yb.jsx)("div", {
            className: "PlotsStepCardTitle SmallTextBold",
            children: Bb
          }), Ob]
        })]
      })
    }

    function Qh() {
      return (0, Gb.useEffect)((() => (Lb.d.set({
        backpackPointerRequested: !0
      }), () => {
        Lb.d.set({
          backpackPointerRequested: !1
        })
      })), []), null
    }
    const Rh = function(bb, ub, hb, Bb) {
      let {
        localPlayerId: Ob
      } = Bb;
      const Lb = new Hu;
      let Yb = null,
        Sb = null,
        ab = null,
        Hb = null,
        wb = null;
      const Zb = [];
      return {
        onCreate: bb => {
          Yb = new rh(bb, Ob), Sb = new Yh(bb, Ob, Yb), ab = new Yh(bb, Ob, Yb), Hb = new Ah(bb, Ob), wb = new Wb(bb, Hb), Zb.push((0, Ub.t)((0, Gb.createElement)(Gb.Fragment, null, (0, Gb.createElement)(qh, {
            hud: Lb
          }), (0, Gb.createElement)(kh, {
            hud: Lb
          }), (0, Gb.createElement)(Zu, {
            hud: Lb,
            journal: wb
          }), (0, Gb.createElement)(Jh, {
            placement: Hb
          }), (0, Gb.createElement)(zh, {
            placement: Hb
          })), {
            content: (0, Gb.createElement)(Ou, {
              journal: wb
            })
          }))
        },
        gH: () => {
          Sb.gH(), ab.gH(), Hb.gH(), wb.gH()
        },
        onPlayerAttemptAltAction: (bb, ub, hb, Bb, Ob, Gb) => {
          var Ub;
          if (null !== Gb) return;
          const Lb = void 0 === ub ? null : [ub, hb, Bb];
          return null !== (Ub = Sb.attemptAltAction(Lb)) && void 0 !== Ub ? Ub : ab.attemptAltAction(Lb)
        },
        onPlayerClickUp: () => {
          Sb.endPress(), ab.endPress()
        },
        onAfterRender: (bb, ub) => {
          Hb.afterRender(ub), Sb.afterRender(ub), ab.afterRender(ub)
        },
        onClose: () => {
          for (const bb of Zb) bb();
          Yb.dispose(), Sb.dispose(), ab.dispose(), Hb.dispose(), Yb = null, Sb = null, ab = null, Hb = null, wb = null
        },
        onReceivedMessageFromServer: (bb, ub) => {
          if ("plotsStarterLot" === bb) Lb.receiveStep(ub);
          else if ("plotsPlot" === bb) Lb.receivePlot(ub);
          else if ("plotsStarterHouse" === bb) Sb.cZ(ub);
          else if ("plotsBlueprint" === bb) {
            const bb = ub;
            ab.cZ(bb), Hb.cZ(bb)
          } else "plotsJournal" === bb ? wb.cZ(ub) : "plotsJournalOpen" === bb ? wb.openFromServer() : "plotsPreviewEnd" === bb && Hb.endFromServer()
        }
      }
    }
  },
  38772: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb,
      g: () => Gb
    });
    const Bb = 1 / .6,
      Ob = {
        kind: "smokePuff"
      };
    class Gb {
      constructor(bb, ub, hb) {
        this.style = bb, this.LH = ub, this.half = hb, this.particles = null, this.lastFrame = -1
      }
      emit(bb, ub, hb) {
        let Gb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return hb !== this.lastFrame && (this.lastFrame = hb, this.particles || (this.particles = bb.createParticles(function(bb, ub) {
          const [
            [hb, Gb, Ub],
            [Lb, Yb, Sb]
          ] = bb.colours;
          return {
            texture: bb.soft ? Ob : "square_particle",
            LH: ub,
            minLifeTime: bb.life[0] / Bb,
            maxLifeTime: bb.life[1] / Bb,
            minEmitPower: bb.power[0] * Bb,
            maxEmitPower: bb.power[1] * Bb,
            minSize: bb.size[0],
            maxSize: bb.size[1],
            emitRate: 0,
            gravity: [0, bb.lift * Bb * Bb, 0],
            dir1: [-bb.spread, 1, -bb.spread],
            dir2: [bb.spread, 1, bb.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [hb, Gb, Ub, bb.alpha],
              maxColor: [Lb, Yb, Sb, bb.alpha]
            }, {
              timeFraction: 1,
              minColor: [hb, Gb, Ub, 0],
              maxColor: [Lb, Yb, Sb, 0]
            }],
            blendMode: bb.blendMode
          }
        }(this.style, this.LH), {
          pos: ub,
          half: this.half
        })), this.particles.moveTo(ub, this.half), this.particles.emit(Gb), !0)
      }
      dispose() {
        var bb;
        null === (bb = this.particles) || void 0 === bb || bb.stop(), this.particles = null
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);