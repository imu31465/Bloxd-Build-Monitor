export const id = 238;
export const ids = [238];
export const modules = {
  38679: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => SU
    });
    const Ab = [0, 90, 180, 270],
      Mb = "plotsblueprint";
    var Tb = Ub(52),
      Eb = Ub(36017),
      Yb = Ub(19),
      Bb = Ub(1548),
      eb = Ub(1639),
      vb = Ub(22);
    const Lb = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      Pb = {
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
      Xb = ["small", "medium", "large"].flatMap((bb => Lb.flat().filter((ab => Pb[ab].tier === bb))));

    function jb(bb) {
      return Pb[bb]
    }
    const Rb = new Map(Lb.flatMap((bb => bb.slice(1).map(((ab, Ub) => [ab, bb[Ub]])))));

    function kb(bb) {
      var ab;
      return null !== (ab = Rb.get(bb)) && void 0 !== ab ? ab : null
    }
    const yb = {
      farm_hut: "plotsGame:journalNoteFarmHut",
      rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
      castle_tower: "plotsGame:journalNoteCastleTower",
      farm_house: "plotsGame:journalNoteFarmHouse",
      farm_barn: "plotsGame:journalNoteFarmBarn"
    };

    function Zb(bb, ab) {
      const Ub = new Set(bb),
        Ab = function(bb) {
          const ab = new Set(bb);
          return new Set(Xb.filter((bb => {
            const Ub = kb(bb);
            return null === Ub || ab.has(Ub)
          })))
        }(Ub);
      return Xb.map((bb => {
        const Mb = bb === ab;
        return Ub.has(bb) ? {
          id: bb,
          active: Mb,
          state: "completed",
          unlockedBy: null
        } : Ab.has(bb) ? {
          id: bb,
          active: Mb,
          state: "open",
          unlockedBy: null
        } : {
          id: bb,
          active: Mb,
          state: "locked",
          unlockedBy: kb(bb)
        }
      }))
    }
    const Db = "plotsJournalChanged";
    class zb {
      constructor(bb, ab) {
        this.api = bb, this.placement = ab, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.GX("journal_opened")
        }, this.build = bb => {
          this.GX("placement_started"), this.placement.start(bb), (0, Eb.g)()
        }, this.putAway = () => {
          this.api.sendCommand(`${Mb} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      aj(bb) {
        let [, ab, Ub] = bb;
        this.pages = Zb(ab, Ub), vb.m.IR(Db, this.pages, !0)
      }
      openFromServer() {
        this.openRequested = !0, this.qL()
      }
      qL() {
        this.openRequested && !Yb.c.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, Bb.o)() || (0, eb.isTypingInInput)() || null !== this.placement.getView() || (0, Eb.o)())
      }
      GX(bb) {
        this.reported.has(bb) || (this.reported.add(bb), this.api.sendCommand(`${Mb} report ${bb}`))
      }
    }
    var xb = Ub(984),
      ib = Ub.n(xb),
      fb = Ub(990),
      mb = Ub(1352),
      pb = Ub(4211),
      Nb = Ub(3088),
      Wb = Ub(1345),
      Hb = Ub(1969),
      Ib = Ub(1134),
      db = Ub(9007);
    const Fb = [0, 90, 180, 270],
      hb = /^(meta\|rot\d)\|([lrud]+)$/,
      Gb = "nesw",
      Qb = /^meta\|([nesw]*)\|?(Stacked)?$/,
      qb = function(bb) {
        const ab = new WeakMap;
        return (Ub, Ab) => {
          let Mb = ab.get(Ub);
          return void 0 === Mb && (Mb = bb(Ub, Ab), ab.set(Ub, Mb)), Mb
        }
      }((bb => new ub(bb)));
    class ub {
      constructor(bb) {
        this.blockMetadata = bb, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const ab = new Set(Object.keys(bb).map((ab => bb[ab].id)));
        ab.add(0), this.maxBlockId = Math.max(...ab)
      }
      static
      for (bb) {
        return qb(bb)
      }
      getBlockIdMapping(bb, ab) {
        const Ub = this.getBlockIdMappingKey(bb, ab);
        let Ab = this.blockIdMappings.get(Ub);
        return void 0 === Ab && Fb.includes(bb) && (Ab = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, bb, ab), this.blockIdMappings.set(Ub, Ab)), Ab
      }
      turnBlockId(bb, ab, Ub) {
        return this.mapBlockId(this.blockMetadata[bb], ab, this.getRotationMapping(ab, Ub), Ub)
      }
      getBlockIdMappingKey(bb, ab) {
        return `r${bb}|m${Number(ab)}`
      }
      createBlockIdMapping(bb, ab, Ub, Ab) {
        const Mb = new Uint16Array(ab + 1),
          Tb = this.getRotationMapping(Ub, Ab);
        for (const Eb in bb) {
          const ab = bb[Eb];
          Mb[ab.id] = this.mapBlockId(ab, Ub, Tb, Ab)
        }
        return Mb
      }
      getRotationMapping(bb, ab) {
        const Ub = Math.round(bb / 90),
          Ab = new Uint8Array(4);
        for (let Mb = 0; Mb < 4; Mb++) Ab[Mb] = (4 + Mb - Ub) % 4;
        if (ab) {
          let bb = Ab[0];
          Ab[0] = Ab[1], Ab[1] = bb, bb = Ab[2], Ab[2] = Ab[3], Ab[3] = bb
        }
        return Ab
      }
      mapBlockId(bb, ab, Ub, Ab) {
        var Mb;
        const {
          blockMetadata: Tb
        } = this, Eb = Math.round(ab / 90), {
          id: Yb,
          meta: Bb
        } = bb, {
          rot: eb,
          rootName: vb,
          metaStr: Lb
        } = Bb;
        let Pb;
        const [, Xb, jb] = null !== (Mb = Qb.exec(Lb)) && void 0 !== Mb ? Mb : [];
        if (void 0 !== Xb) {
          var Rb, kb;
          Pb = null !== (Rb = null === (kb = Tb[`${vb}|meta|${[Gb.split("").filter(((bb,ab)=>Xb.split("").some((bb=>{const Ub=Gb.indexOf(bb);return((Ab?3-Ub:Ub)+Eb)%4===ab})))).join(""),jb].filter(Boolean).join("|")}`]) || void 0 === kb ? void 0 : kb.id) && void 0 !== Rb ? Rb : Yb
        } else if (null === eb) Pb = Yb;
        else {
          var yb, Zb;
          const bb = Ub[eb - 1] + 1;
          let ab = Lb.replace(`rot${eb}`, `rot${bb}`);
          Ab && Bb.stairsCorner && (ab = ab.replace(/(Left|Right)$/, (bb => "Left" === bb ? "Right" : "Left"))), Ab && "Chest" === vb && (ab = ab.replace(/\|(left|right)$/, ((bb, ab) => "left" === ab ? "|right" : "|left")));
          const Mb = hb.exec(ab);
          if (Ab && null !== Mb) {
            const bb = "lrud".split("").filter((bb => Mb[2].includes("l" === bb ? "r" : "r" === bb ? "l" : bb)));
            ab = `${Mb[1]}|${bb.join("")}`
          }
          const Eb = `${vb}|${ab}`;
          if (Pb = null !== (yb = null === (Zb = Tb[Eb]) || void 0 === Zb ? void 0 : Zb.id) && void 0 !== yb ? yb : null, null === Pb) {
            const bb = Tb[vb];
            Pb = bb.rootMetaDesc === Eb ? bb.id : Yb
          }
        }
        return Pb
      }
    }

    function rb(bb, ab, Ub) {
      let {
        xRotationMappedOrigin: Ab,
        shouldSwapXZ: Mb
      } = Ub;
      const Tb = Mb ? ab : bb;
      return null === Ab ? Tb : Ab - Tb
    }

    function Kb(bb, ab, Ub) {
      let {
        zRotationMappedOrigin: Ab,
        shouldSwapXZ: Mb
      } = Ub;
      const Tb = Mb ? bb : ab;
      return null === Ab ? Tb : Ab - Tb
    }
    const ob = {
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
      lb = new Map;

    function tb(bb, ab) {
      const Ub = `${bb}|${ab}`;
      let Ab = lb.get(Ub);
      if (void 0 === Ab) {
        const {
          size: Mb,
          palette: Tb,
          layers: Eb
        } = ob[bb], Yb = 90 === ab || 270 === ab, [Bb, eb] = Yb ? [Mb[2], Mb[0]] : [Mb[0], Mb[2]], vb = function(bb, ab, Ub) {
          let Ab = null,
            Mb = null,
            Tb = !1;
          switch (bb) {
            case 0:
              break;
            case 90:
              Ab = ab - 1, Tb = !0;
              break;
            case 180:
              Ab = ab - 1, Mb = Ub - 1;
              break;
            case 270:
              Mb = Ub - 1, Tb = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${bb}`)
          }
          return {
            xRotationMappedOrigin: Ab,
            zRotationMappedOrigin: Mb,
            shouldSwapXZ: Tb
          }
        }(ab, Bb, eb), Lb = ub.for(db.h), Pb = Tb.map((bb => (0, db.e)(Lb.turnBlockId((0, db.l)(bb), ab, !1)))), Xb = [];
        Eb.forEach(((bb, ab) => {
          bb.split(" ").forEach(((bb, Ub) => {
            for (let Ab = 0; Ab < bb.length; Ab++)
              if ("." !== bb[Ab]) {
                const Mb = [rb(Ab, Ub, vb), ab, Kb(Ab, Ub, vb)];
                Xb.push({
                  offset: Mb,
                  block: Pb[bb.charCodeAt(Ab) - "a".charCodeAt(0)]
                })
              }
          }))
        })), Ab = {
          size: [Bb, Mb[1], eb],
          cells: Xb
        }, lb.set(Ub, Ab)
      }
      return Ab
    }
    const wb = {
      farm_hut: Ub.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
      farm_house: Ub.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
      farm_barn: Ub.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
      rusticHome_tent: Ub.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
      rusticHome_cabin: Ub.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
      rusticHome_house: Ub.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
      market_stand: Ub.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
      market_stall: Ub.p + "static/media/market_stall.9a562807f9dff591618a.webp",
      market_shop: Ub.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
      castle_wall: Ub.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
      castle_gate: Ub.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
      castle_tower: Ub.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
    };
    var sb = Ub(1023);
    const gb = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function Cb(bb) {
      let {
        page: ab,
        building: Ub,
        onBuild: Ab,
        onPutAway: Mb
      } = bb;
      const {
        t: Tb
      } = (0, Ib.A)(), {
        displayName: Eb,
        tier: Yb
      } = jb(ab.id), Bb = tb(ab.id, 0).cells.length, eb = yb[ab.id], vb = "locked" === ab.state, Lb = Ub ? mb.g : mb.m;
      return (0, sb.jsxs)("article", {
        className: ib()("PlotsJournalPage", {
          Locked: vb
        }),
        children: [(0, sb.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: Tb(Eb.translationKey)
        }), (0, sb.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [Tb(gb[Yb]), " \xb7 ", Tb("plotsGame:journalBlocks", {
            blocks: String(Bb)
          })]
        }), (0, sb.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [Xb.map((bb => (0, sb.jsx)("img", {
            className: ib()({
              Shown: bb === ab.id
            }),
            src: wb[bb],
            alt: "",
            draggable: !1
          }, bb))), "completed" === ab.state && (0, sb.jsx)("span", {
            className: "PlotsJournalStamp",
            children: Tb("plotsGame:journalBuilt")
          }), vb && (0, sb.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, sb.jsx)(fb.e, {
              name: "lock"
            })
          })]
        }), void 0 !== eb && "completed" !== ab.state && (0, sb.jsx)("p", {
          className: "PlotsJournalNote",
          children: Tb(eb)
        }), (0, sb.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === ab.state && (0, sb.jsx)("p", {
            className: "PlotsJournalHint",
            children: Tb("plotsGame:journalLocked", {
              name: Tb(jb(ab.unlockedBy).displayName.translationKey)
            })
          }), ab.active && (0, sb.jsxs)(sb.Fragment, {
            children: [(0, sb.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: Tb("plotsGame:journalBuilding")
            }), (0, sb.jsx)(mb.h, {
              onClick: Mb,
              children: Tb("plotsGame:journalPutAway")
            })]
          }), !vb && !ab.active && (0, sb.jsx)(Lb, {
            onClick: () => {
              Ab(ab.id)
            },
            children: Tb("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function Vb(bb) {
      let {
        className: ab,
        page: Ub,
        hidden: Ab,
        building: Mb,
        journal: Tb
      } = bb;
      return (0, sb.jsxs)("div", {
        ref: bb => {
          null !== bb && (bb.inert = Ab)
        },
        className: ib()("PlotsJournalSide", ab),
        children: [void 0 !== Ub && (0, sb.jsx)(Cb, {
          page: Ub,
          building: Mb,
          onBuild: Tb.build,
          onPutAway: Tb.putAway
        }), void 0 === Ub && (0, sb.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var Ob = Ub(325),
      cb = Ub(1786);

    function Jb(bb) {
      return Math.cos((0, cb.i)(bb))
    }

    function nb(bb) {
      return (0, cb.x)(Math.acos(Ob.d.clamp(bb, -1, 1)))
    }

    function Sb(bb, ab, Ub, Ab, Mb) {
      const Tb = Math.abs(ab - bb),
        Eb = (0, cb.x)(Mb / (Ub * Math.abs(Math.sin((0, cb.i)(bb))))),
        Yb = 450 * Math.min(1, Tb / Ab),
        Bb = Eb > 0 ? 3 * Tb / Eb : 1 / 0;
      return Math.round(Math.max(120, Math.min(Yb, Bb)))
    }
    class ba {
      constructor() {
        this.samples = []
      }
      add(bb, ab) {
        for (this.samples.push({
            x: bb,
            at: ab
          }); ab - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const bb = this.samples[0],
          ab = this.samples[this.samples.length - 1];
        return ab.at > bb.at ? (ab.x - bb.x) / (ab.at - bb.at) : 0
      }
    }

    function aa(bb, ab) {
      return bb > ab && bb >= 600
    }

    function Ua(bb) {
      return nb(new DOMMatrixReadOnly(getComputedStyle(bb).transform).m11)
    }

    function Aa(bb, ab) {
      bb.style.transform = `rotateY(${-ab}deg)`, bb.classList.add("Turning")
    }

    function Ma(bb) {
      let {
        journal: ab
      } = bb;
      const {
        t: Ub
      } = (0, Ib.A)(), Ab = (0, Wb.i)(Db, ab.getPages()), Mb = (0, Hb.e)(aa), [Yb, Bb] = (0, Tb.useState)((() => function(bb) {
        const ab = bb.findIndex((bb => bb.active));
        return -1 !== ab ? ab : Math.max(0, bb.findIndex((bb => "open" === bb.state)))
      }(Ab))), vb = (0, Tb.useRef)(null), Lb = (0, Tb.useRef)(null), Pb = (0, Tb.useRef)({
        Forward: null,
        Back: null
      }), Xb = Mb ? 2 : 1, jb = Mb ? 180 : 90, Rb = Yb - Yb % Xb, kb = Rb > 0, yb = Rb + Xb < Ab.length, Zb = (0, Tb.useCallback)((() => {
        const bb = Lb.current;
        return null === bb ? Rb : (Lb.current = null, bb.animation.cancel(), (ab = Pb.current[bb.direction]).style.transform = "", ab.classList.remove("Turning"), null === bb.next ? Rb : (Bb(bb.next), bb.next));
        var ab
      }), [Rb]), zb = (0, Tb.useCallback)(((bb, ab, Ub, Ab) => {
        const Mb = Pb.current[bb],
          Tb = Ua(Mb),
          Eb = ab === ("Forward" === bb) ? jb : 0;
        Aa(Mb, Eb);
        const Yb = Mb.animate([{
          transform: `rotateY(${-Tb}deg)`
        }, {
          transform: `rotateY(${-Eb}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : Sb(Tb, Eb, Mb.offsetWidth, jb, Eb > Tb ? -Ub : Ub),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        Lb.current = {
          direction: bb,
          animation: Yb,
          next: ab ? Ab + ("Forward" === bb ? Xb : -Xb) : null
        }, Yb.onfinish = () => {
          var bb;
          (null === (bb = Lb.current) || void 0 === bb ? void 0 : bb.animation) === Yb && Zb()
        }
      }), [Xb, jb, Zb]), xb = (0, Tb.useCallback)((bb => {
        if (null !== vb.current) return;
        const ab = Zb();
        ("Forward" === bb ? ab + Xb < Ab.length : ab > 0) && zb(bb, !0, 0, ab)
      }), [Zb, zb, Xb, Ab.length]);
      (0, Tb.useEffect)((() => {
        ab.onOpened()
      }), [ab]), (0, Tb.useEffect)((() => () => {
        var bb;
        null === (bb = Lb.current) || void 0 === bb || bb.animation.cancel()
      }), []), (0, Tb.useEffect)((() => {
        const bb = bb => {
          var ab;
          bb.pointerId !== (null === (ab = vb.current) || void 0 === ab ? void 0 : ab.pointerId) || vb.current.following || (vb.current = null)
        };
        return window.addEventListener("pointerup", bb), () => {
          window.removeEventListener("pointerup", bb)
        }
      }), []), (0, Nb.d)((bb => ("ArrowLeft" === bb.code || "ArrowRight" === bb.code) && !(0, eb.isTypingInInput)()), (bb => {
        bb.stopPropagation(), xb("ArrowLeft" === bb.code ? "Back" : "Forward")
      }));
      const fb = (bb, ab, Ub) => {
          const Ab = function(bb, ab, Ub, Ab) {
            return (bb < 0 ? Ub : Ab) ? Ob.d.clampAbs(bb, ab) : Math.sign(bb) * ab * (1 - 1 / (.55 * Math.abs(bb) / ab + 1))
          }(bb.base + Ub, Xb * bb.width, yb, kb);
          return "Forward" === ab ? Math.min(Ab, 0) : Math.max(Ab, 0)
        },
        db = (bb, ab) => {
          const Ub = vb.current;
          if (vb.current = null, null === Ub.direction) return;
          Ub.speed.add(bb, ab);
          const Ab = Ub.speed.get(),
            Mb = fb(Ub, Ub.direction, bb - Ub.x);
          zb(Ub.direction, null !== function(bb, ab, Ub, Ab, Mb) {
            if (Math.abs(ab) >= .3 ? Math.sign(ab) !== Math.sign(bb) : Math.abs(bb) < .5 * Ub) return null;
            const Tb = bb < 0 ? "Forward" : "Back";
            return ("Forward" === Tb ? Ab : Mb) ? Tb : null
          }(Mb, Ab, Xb * Ub.width, yb, kb), Ab, Rb)
        },
        Fb = Ab.some((bb => bb.active)),
        hb = (bb, Ub, Mb) => (0, sb.jsx)(Vb, {
          className: bb,
          page: Ub >= 0 && Ub < Ab.length ? Ab[Ub] : void 0,
          hidden: Mb,
          building: Fb,
          journal: ab
        });
      return (0, sb.jsx)(pb.d, {
        close: Eb.i,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, sb.jsxs)("section", {
          className: ib()("PlotsJournal", {
            Spread: Mb
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": Ub("plotsGame:journalTitle"),
          children: [(0, sb.jsx)(mb.k, {
            className: "PlotsJournalClose",
            onClick: Eb.i
          }), (0, sb.jsx)(Ta, {
            direction: "Back",
            disabled: !kb,
            onTurn: xb
          }), (0, sb.jsx)("div", {
            className: "PlotsJournalBookPages",
            onPointerDown: bb => {
              var ab;
              if (!bb.isPrimary || 0 !== bb.button || null !== Lb.current && null !== bb.target.closest("button")) return;
              const Ub = new ba;
              Ub.add(bb.clientX, bb.timeStamp);
              const Ab = Pb.current.Forward.offsetWidth,
                Mb = Lb.current;
              Lb.current = null;
              let Tb = 0;
              if (null !== Mb) {
                const ab = Pb.current[Mb.direction],
                  Ub = Ua(ab);
                Mb.animation.cancel(), Aa(ab, Ub), Tb = function(bb, ab, Ub, Ab) {
                  return (bb < 0 ? Ub : Ab) ? bb : Math.sign(bb) * ab * (1 / (1 - Math.min(Math.abs(bb) / ab, .99)) - 1) / .55
                }(function(bb, ab, Ub, Ab) {
                  return Ub * (Jb(ab) - Jb("Forward" === bb ? 0 : Ab))
                }(Mb.direction, Ub, Ab, jb), Xb * Ab, yb, kb), bb.currentTarget.setPointerCapture(bb.pointerId)
              }
              vb.current = {
                pointerId: bb.pointerId,
                x: bb.clientX,
                y: bb.clientY,
                base: Tb,
                width: Ab,
                following: null !== Mb,
                direction: null !== (ab = null === Mb || void 0 === Mb ? void 0 : Mb.direction) && void 0 !== ab ? ab : null,
                speed: Ub
              }
            },
            onPointerMove: bb => {
              const ab = vb.current;
              if (null === ab || bb.pointerId !== ab.pointerId) return;
              if (0 === bb.buttons) return void db(bb.clientX, bb.timeStamp);
              const Ub = bb.clientX - ab.x;
              !ab.following && function(bb, ab) {
                return Math.abs(bb) > 8 && Math.abs(bb) > Math.abs(ab)
              }(Ub, bb.clientY - ab.y) && (ab.following = !0, ab.direction = Ub < 0 ? "Forward" : "Back", bb.currentTarget.setPointerCapture(bb.pointerId)), null !== ab.direction && (ab.speed.add(bb.clientX, bb.timeStamp), Aa(Pb.current[ab.direction], function(bb, ab, Ub, Ab) {
                const Mb = Ub * Jb("Forward" === bb ? 0 : Ab) + ab;
                return Ob.d.clamp(nb(Mb / Ub), 0, Ab)
              }(ab.direction, fb(ab, ab.direction, Ub), ab.width, jb)))
            },
            onPointerUp: bb => {
              var ab;
              bb.pointerId === (null === (ab = vb.current) || void 0 === ab ? void 0 : ab.pointerId) && db(bb.clientX, bb.timeStamp)
            },
            onPointerCancel: bb => {
              const ab = vb.current;
              bb.pointerId === (null === ab || void 0 === ab ? void 0 : ab.pointerId) && (vb.current = null, null !== ab.direction && zb(ab.direction, !1, 0, Rb))
            },
            children: (0, sb.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [Mb && hb("Left", Rb - 2, !0), hb("Right", Rb + 2 * Xb - 1, !0), (0, sb.jsxs)("div", {
                ref: bb => {
                  Pb.current.Back = bb
                },
                className: "PlotsJournalLeaf Back",
                children: [hb("Recto", Rb - 1, !0), Mb && hb("Verso", Rb, !1)]
              }), (0, sb.jsxs)("div", {
                ref: bb => {
                  Pb.current.Forward = bb
                },
                className: "PlotsJournalLeaf Forward",
                children: [hb("Recto", Rb + Xb - 1, !1), Mb && hb("Verso", Rb + Xb, !0)]
              })]
            })
          }), (0, sb.jsx)(Ta, {
            direction: "Forward",
            disabled: !yb,
            onTurn: xb
          })]
        })
      })
    }

    function Ta(bb) {
      let {
        direction: ab,
        disabled: Ub,
        onTurn: Ab
      } = bb;
      const {
        t: Mb
      } = (0, Ib.A)();
      return (0, sb.jsx)("div", {
        className: ib()("PlotsJournalArrow", ab),
        children: (0, sb.jsx)(mb.g, {
          disabled: Ub,
          ariaLabel: Mb("Forward" === ab ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            Ab(ab)
          },
          children: (0, sb.jsx)(fb.e, {
            name: "angle-up"
          })
        })
      })
    }
    var Ea = Ub(36013),
      Ya = Ub(1812),
      Ba = Ub(1867);
    const ea = "plotsStepChanged",
      va = "plotsPlotChanged";
    class La {
      constructor() {
        this.step = ["none"], this.plot = ["none"]
      }
      getStep() {
        return this.step
      }
      receiveStep(bb) {
        this.step = bb, vb.m.IR(ea, bb, !0)
      }
      getPlot() {
        return this.plot
      }
      receivePlot(bb) {
        this.plot = bb, vb.m.IR(va, bb, !0)
      }
    }
    const Pa = "KeyJ";

    function Xa(bb) {
      let {
        hud: ab,
        journal: Ub
      } = bb;
      const Ab = (0, Wb.i)(Db, Ub.getPages()),
        Mb = (0, Wb.i)(ea, ab.getStep()),
        {
          isTouchScreen: Tb
        } = (0, Yb.n)(["isTouchScreen"]),
        {
          t: vb
        } = (0, Ib.A)(),
        Lb = null !== Ab && "none" === Mb[0];
      return (0, Nb.d)((bb => null !== Ab && bb.code === Pa && !bb.repeat && !(0, eb.isTypingInInput)()), (bb => {
        (0, Bb.v)(bb, Lb, Eb.o)
      })), Lb ? (0, sb.jsx)(Ea.e, {
        placement: "topRight",
        children: (0, sb.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, sb.jsxs)("button", {
            type: "button",
            className: ib()("PlotsJournalButton SmallTextBold", {
              Touch: Tb
            }),
            onClick: Eb.o,
            children: [(0, sb.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, sb.jsx)(Ya.c, {
                itemName: "Book",
                amount: 0
              })
            }), vb("plotsGame:journalButton"), !Tb && (0, sb.jsx)(Ba.b, {
              className: "PlotsJournalButtonKey",
              keyCode: Pa
            })]
          })
        })
      }) : null
    }
    var ja = Ub(37748),
      Ra = Ub(37509),
      ka = Ub(36260),
      ya = Ub(9036),
      Za = Ub(9048),
      Da = Ub(37155);
    const za = new Map([
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
      xa = [...ka.d.blockRemoveActionRoots, ...Ra.b, ...ya.g, "Board", "Code Block", "Custom Lobby Block"],
      ia = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let fa = null;

    function ma() {
      return fa ??= function() {
        const bb = pa(),
          ab = Math.max(...bb.map((bb => db.h[bb].id))) + 1,
          Ub = new Int32Array(ab),
          Ab = new Int32Array(ab),
          Mb = new Uint8Array(ab).fill(1),
          Tb = new Uint8Array(ab),
          Eb = new Uint8Array(ab),
          Yb = new Array(ab).fill("Air"),
          Bb = new Map,
          eb = bb => {
            let ab = Bb.get(bb);
            return void 0 === ab && (ab = Bb.size + 1, Bb.set(bb, ab)), ab
          },
          vb = new Set(xa);
        for (const Pb of bb) {
          var Lb;
          const {
            id: bb,
            meta: ab,
            altActionable: Bb,
            canBePlacedOver: Xb
          } = db.h[Pb];
          Ub[bb] = eb(Na(Pb));
          const jb = ab.stairsCorner;
          if (null === jb) Ab[bb] = Ub[bb];
          else {
            const Ub = jb.endsWith("Right");
            Ab[bb] = eb(`${ab.rootName}|rot${Ub?ab.rot%4+1:ab.rot}|${ab.halfblockPlacement}|${jb.replace("Right","Left")}`)
          }
          Mb[bb] = Xb ? 1 : 0, Tb[bb] = Bb || null !== ab.open || Pb in Da.d || vb.has(ab.rootName) || void 0 !== (0, Ra.d)(ab.rootName) ? 1 : 0;
          const {
            rootName: Rb
          } = ab;
          Eb[bb] = null !== ab.open || Ra.b.includes(Rb) || Rb.includes("Bookshelf") || Rb.includes("Mailbox") ? 1 : 0, Yb[bb] = null !== (Lb = (0, ja.h)(bb)) && void 0 !== Lb ? Lb : Rb
        }
        return {
          kinds: Ub,
          shapes: Ab,
          empty: Mb,
          inUse: Tb,
          ownAltActionMessage: Eb,
          placingItems: Yb
        }
      }(), fa
    }

    function pa() {
      return Object.keys(db.h).filter((bb => db.h[bb].name === bb))
    }

    function Na(bb) {
      var ab;
      const Ub = db.h[bb],
        {
          rootName: Ab,
          rot: Mb
        } = Ub.meta,
        [, ...Tb] = (null !== (ab = Ub.rootMetaDesc) && void 0 !== ab ? ab : bb).split("|"),
        Eb = Tb.filter((bb => !("meta" === bb || ia.test(bb) || (0, Za.A)(Ub) && /^[nesw]+$/.test(bb) || ya.g.includes(Ab) && /^[lrud]+$/.test(bb) || Ob.D.includes(Ab) && /^(left|right)$/.test(bb))));
      return [Ab, ...Eb].map((bb => "fenceGate" === Ub.model && bb === `rot${Mb}` ? "rot" + ((Mb - 1) % 2 + 1) : bb)).join("|")
    }

    function Wa(bb, ab) {
      const {
        kinds: Ub,
        shapes: Ab
      } = ma();
      return Ub[bb] === Ub[ab] || Ab[bb] === Ab[ab]
    }

    function Ha(bb) {
      return 1 === ma().empty[bb]
    }

    function Ia(bb) {
      return ma().placingItems[bb]
    }

    function da(bb) {
      return za.get(db.h[bb].meta.rootName)
    }
    var Fa = Ub(9030),
      ha = Ub(9043);
    const Ga = [0, 0, 0, 1, 1, 1],
      Qa = (0, Fa.b)([
        [2, 0, 2, 6, 6, 6]
      ]),
      qa = (0, Fa.b)([
        [3, 0, 3, 5, 5, 5]
      ]),
      ua = (0, Fa.b)([
        [3, 3, 3, 5, 8, 5]
      ]),
      ra = [0, 1, 2, 3].map((bb => (0, Fa.b)((0, Fa.l)([
        [3, 2, 0, 5, 7, 3]
      ], bb))));

    function Ka(bb) {
      const {
        FR: ab,
        model: Ub,
        blockModel: Ab,
        meta: Mb
      } = db.h[bb];
      return void 0 !== ab ? ab : "CentreCross" === Ub ? Qa : null !== Ab && void 0 !== Ab && Ab.startsWith("torch") ? Mb.halfblockPlacement === ha.e.side ? ra[Mb.rot - 1] : Mb.halfblockPlacement === ha.e.top ? ua : qa : Ga
    }
    var oa = Ub(36226),
      la = Ub(205);

    function ta(bb, ab) {
      const Ub = la.c.vy / 2;
      return bb[0] < ab[0] + Ub && bb[0] + 1 > ab[0] - Ub && bb[1] < ab[1] + la.c.Py && bb[1] + 1 > ab[1] && bb[2] < ab[2] + Ub && bb[2] + 1 > ab[2] - Ub
    }

    function wa(bb, ab, Ub, Ab, Mb) {
      const Tb = Math.hypot(...ab.dir);
      if (!Number.isFinite(Tb) || 0 === Tb) return -1;
      const {
        from: Eb,
        reach: Yb,
        solid: Bb
      } = ab, eb = [ab.dir[0] / Tb, ab.dir[1] / Tb, ab.dir[2] / Tb], vb = null === Bb ? Yb : Math.min(Yb, function(bb, ab, Ub) {
        const Ab = sa(bb, ab, Ub);
        if (Ab !== 1 / 0) return Ab;
        return (Ub[0] + .5 - bb[0]) * ab[0] + (Ub[1] + .5 - bb[1]) * ab[1] + (Ub[2] + .5 - bb[2]) * ab[2]
      }(Eb, eb, Bb) + .75);
      let Lb = -1,
        Pb = 1 / 0,
        Xb = 1 / 0;
      for (let jb = 0; jb < bb.length; jb += 4) {
        const ab = [bb[jb], bb[jb + 1], bb[jb + 2]],
          Tb = Mb(jb) ? Yb : vb;
        let Bb = -1,
          Rb = sa(Eb, eb, ab);
        if (Rb > Tb) {
          const bb = [ab[0] + .5 - Eb[0], ab[1] + .5 - Eb[1], ab[2] + .5 - Eb[2]];
          if (Rb = bb[0] * eb[0] + bb[1] * eb[1] + bb[2] * eb[2], Rb <= 0 || Rb > Tb) continue;
          if (Bb = Math.hypot(bb[0] - Rb * eb[0], bb[1] - Rb * eb[1], bb[2] - Rb * eb[2]), Bb > .7 || !Ab(jb)) continue
        }(Bb < Pb || Bb === Pb && Rb < Xb) && Ub(jb) && (Lb = jb, Pb = Bb, Xb = Rb)
      }
      return Lb
    }

    function sa(bb, ab, Ub) {
      let Ab = 0,
        Mb = 1 / 0;
      for (let Tb = 0; Tb < 3; Tb++) {
        const Eb = Ub[Tb] - bb[Tb];
        if (0 === ab[Tb]) {
          if (Eb > 0 || Eb + 1 < 0) return 1 / 0;
          continue
        }
        const Yb = Eb / ab[Tb],
          Bb = (Eb + 1) / ab[Tb];
        Ab = Math.max(Ab, Math.min(Yb, Bb)), Mb = Math.min(Mb, Math.max(Yb, Bb))
      }
      return Ab <= Mb ? Ab : 1 / 0
    }
    var ga = Ub(37394),
      Ca = Ub(37849);
    const Va = [1, 1, 1];
    class Oa {
      constructor(bb) {
        this.api = bb, this.meshes = null, this.shown = null
      }
      show(bb) {
        if (!(0, oa.e)(bb, this.shown))
          if (this.shown = null === bb ? null : [bb[0], bb[1], bb[2]], null !== this.meshes)
            for (const ab of this.meshes) this.api.setGameMesh(ab, null === bb ? {
              visible: !1
            } : {
              anchor: bb,
              visible: !0
            });
          else if (null !== bb) {
          const ab = [ga.f, ga.f, ga.f, 0, 0, 0];
          this.meshes = [this.build([ab], ga.h, bb), this.build((0, ga.d)(), ga.n, bb)]
        }
      }
      dispose() {
        for (const ab of null !== (bb = this.meshes) && void 0 !== bb ? bb : []) {
          var bb;
          this.api.disposeGameMesh(ab)
        }
        this.meshes = null, this.shown = null
      }
      build(bb, ab, Ub) {
        const Ab = [],
          Mb = [];
        for (const [Tb, Eb, Yb, Bb, eb, vb] of bb)(0, Ca.e)(Ab, Mb, [Bb + .5, eb + .5, vb + .5], [Tb, Eb, Yb]);
        return this.api.createGameMesh({
          positions: Ab,
          indices: Mb
        }, {
          rgb: Va,
          alpha: ab,
          onTop: !0
        }, Ub)
      }
    }
    class ca {
      constructor(bb) {
        this.api = bb, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(bb) {
        const ab = la.c.Mj;
        this.chunks = [];
        for (let Ub = 0; Ub < bb.length; Ub += 3) {
          const Ab = Math.floor(bb[Ub] / ab),
            Mb = Math.floor(bb[Ub + 1] / ab),
            Tb = Math.floor(bb[Ub + 2] / ab);
          this.watches(Ab, Mb, Tb) || this.chunks.push(Ab, Mb, Tb)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const bb = performance.now();
        if (bb - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = bb;
        let ab = !1;
        for (let Ub = 0; Ub < this.chunks.length; Ub += 3) {
          const bb = this.api.getChunkVersion(this.chunks[Ub], this.chunks[Ub + 1], this.chunks[Ub + 2]);
          this.versions[Ub / 3] !== bb && (this.versions[Ub / 3] = bb, ab = !0)
        }
        return ab
      }
      watches(bb, ab, Ub) {
        for (let Ab = 0; Ab < this.chunks.length; Ab += 3)
          if (this.chunks[Ab] === bb && this.chunks[Ab + 1] === ab && this.chunks[Ab + 2] === Ub) return !0;
        return !1
      }
    }
    const Ja = .35,
      na = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      Sa = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      bU = [.95, .2, .15];
    class aU {
      constructor() {
        this.groups = []
      }
      add(bb, ab, Ub, Ab, Mb) {
        let Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Ga;
        for (const Eb of this.groups)
          if (MU(Eb, Ab, Mb)) return Eb.cells.push(bb, ab, Ub), void Eb.boxes.push(Tb);
        this.groups.push({
          rgb: Ab,
          look: Mb,
          cells: [bb, ab, Ub],
          boxes: [Tb]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class UU {
      constructor(bb) {
        this.api = bb, this.shown = []
      }
      show(bb) {
        const ab = [];
        for (const Ub of bb) {
          const bb = this.shown.findIndex((bb => {
            let {
              group: ab
            } = bb;
            return MU(ab, Ub.rgb, Ub.look) && TU(ab, Ub)
          })); - 1 === bb ? ab.push(this.build(Ub)) : (ab.push(this.shown[bb]), this.shown.splice(bb, 1))
        }
        this.dispose(), this.shown = ab
      }
      dispose() {
        for (const {
            meshes: bb
          }
          of this.shown)
          for (const ab of bb) this.api.disposeGameMesh(ab);
        this.shown = []
      }
      build(bb) {
        const {
          rgb: ab,
          look: Ub,
          boxes: Ab
        } = bb, Mb = [ab[0] + (1 - ab[0]) * Ja, ab[1] + (1 - ab[1]) * Ja, ab[2] + (1 - ab[2]) * Ja], Tb = [this.buildMesh(bb.cells, ab, Ub.alpha, ((bb, ab, Mb, Tb) => {
          AU(bb, ab, Mb, Ab[Tb], Ub.size, !1)
        })), this.buildMesh(bb.cells, Mb, Ub.alpha, ((bb, ab, Mb, Tb) => {
          AU(bb, ab, Mb, Ab[Tb], Ub.size, !0)
        }))];
        return Ub.crossed && Tb.push(this.buildMesh(bb.cells, ab, .9, ((bb, ab, Ab) => {
          (0, Ca.h)(bb, ab, Ab, Ub.size + .01, .12)
        }))), {
          group: bb,
          meshes: Tb
        }
      }
      buildMesh(bb, ab, Ub, Ab) {
        const Mb = [bb[0], bb[1], bb[2]],
          Tb = [],
          Eb = [];
        for (let Yb = 0; Yb < bb.length; Yb += 3) Ab(Tb, Eb, [bb[Yb] - Mb[0] + .5, bb[Yb + 1] - Mb[1] + .5, bb[Yb + 2] - Mb[2] + .5], Yb / 3);
        return this.api.createGameMesh({
          positions: Tb,
          indices: Eb
        }, {
          rgb: [ab[0], ab[1], ab[2]],
          alpha: Ub
        }, Mb)
      }
    }

    function AU(bb, ab, Ub, Ab, Mb, Tb) {
      for (let Eb = 0; Eb < Ab.length; Eb += 6) {
        const Yb = [0, 0, 0],
          Bb = [0, 0, 0];
        for (let bb = 0; bb < 3; bb++) Yb[bb] = Ub[bb] + ((Ab[Eb + bb] + Ab[Eb + bb + 3]) / 2 - .5) * Mb, Bb[bb] = (Ab[Eb + bb + 3] - Ab[Eb + bb]) * Mb;
        (0, Ca.c)(bb, ab, Yb, Bb, Tb)
      }
    }

    function MU(bb, ab, Ub) {
      return bb.rgb[0] === ab[0] && bb.rgb[1] === ab[1] && bb.rgb[2] === ab[2] && bb.look === Ub
    }

    function TU(bb, ab) {
      if (bb.cells.length !== ab.cells.length) return !1;
      for (let Ub = 0; Ub < bb.cells.length; Ub++)
        if (bb.cells[Ub] !== ab.cells[Ub]) return !1;
      return bb.boxes.every(((bb, Ub) => bb === ab.boxes[Ub]))
    }

    function EU(bb, ab) {
      return bb.getClientOption(ab, "blockReach") + 1
    }
    class YU {
      constructor(bb, ab, Ub) {
        this.api = bb, this.localPlayerId = ab, this.pickNext = Ub, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(bb) {
        const [ab, , Ub] = bb.cameraDirection, Ab = Math.hypot(ab, Ub);
        Ab > .001 && (this.heading = [ab / Ab, Ub / Ab])
      }
      tapped(bb, ab, Ub) {
        const Ab = EU(this.api, this.localPlayerId),
          {
            origin: Mb,
            direction: Tb
          } = this.api.getActionRay(),
          Eb = [...Mb],
          Yb = [
            [Eb, [Eb[0] + Tb[0] * Ab, Eb[1] + Tb[1] * Ab, Eb[2] + Tb[2] * Ab]]
          ];
        null !== bb && Yb.push([Eb, (0, oa.d)(bb)]), this.tap = {
          lines: Yb,
          next: ab,
          ms: Ub
        }
      }
      filled(bb, ab) {
        this.tap = null, this.turnFrom(bb, ab), this.retry(ab)
      }
      arrived(bb, ab) {
        const {
          tap: Ub
        } = this;
        if (null === Ub || ab - Ub.ms > 1500) return null;
        const Ab = (0, oa.d)(bb);
        return (0, oa.e)(Ub.next, bb) || Ub.lines.some((bb => {
          let [ab, Ub] = bb;
          return function(bb, ab, Ub) {
            const Ab = [Ub[0] - ab[0], Ub[1] - ab[1], Ub[2] - ab[2]],
              Mb = [bb[0] - ab[0], bb[1] - ab[1], bb[2] - ab[2]],
              Tb = Ab[0] ** 2 + Ab[1] ** 2 + Ab[2] ** 2,
              Eb = 0 === Tb ? 0 : Math.min(1, Math.max(0, (Mb[0] * Ab[0] + Mb[1] * Ab[1] + Mb[2] * Ab[2]) / Tb));
            return Math.hypot(Mb[0] - Ab[0] * Eb, Mb[1] - Ab[1] * Eb, Mb[2] - Ab[2] * Eb)
          }(Ab, ab, Ub) <= .9
        })) ? (this.tap = null, this.turnFrom(bb, ab), Ub.ms) : null
      }
      turnFrom(bb, ab) {
        this.pending = {
          from: bb,
          ms: ab,
          turnMs: Math.max(50, Math.min(250, ab - this.lastFillMs))
        }, this.lastFillMs = ab
      }
      retry(bb) {
        const {
          pending: ab
        } = this;
        if (null === ab) return;
        if (bb - ab.ms > 1500) return void(this.pending = null);
        const Ub = this.pickNext((0, oa.d)(ab.from), (bb => (0, oa.e)(bb, ab.from)));
        if (null === Ub) return;
        this.pending = null;
        const {
          turning: Ab
        } = this;
        if (null !== Ab && bb < Ab.endMs && (0, oa.e)(Ab.to, Ub)) return;
        const Mb = this.api.getActionRay().origin,
          Tb = [Ub[0] + .5 - Mb[0], Ub[1] + .5 - Mb[1], Ub[2] + .5 - Mb[2]],
          Eb = Math.hypot(Tb[0], Tb[2]);
        if (Eb < .3) {
          const bb = Math.max(Eb, .001);
          Tb[0] = this.heading[0] * bb, Tb[2] = this.heading[1] * bb
        }
        this.api.turnCamera(Tb, ab.turnMs), this.turning = {
          to: Ub,
          endMs: bb + ab.turnMs
        }
      }
    }
    class BU {
      constructor(bb, ab, Ub) {
        this.api = bb, this.localPlayerId = ab, this.juice = Ub, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], this.lastFilled = null, this.lastSeenFilled = null, this.playerCells = [], this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = null, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new ca(bb), this.meshes = new UU(bb), this.outline = new Oa(bb), this.turn = new YU(bb, ab, ((bb, ab) => this.pickNext(bb, ab)))
      }
      aj(bb) {
        const ab = "active" === bb[0] ? `${bb[1]}|${bb[3]}|${bb[4]}|${bb[5]}|${bb[6]}` : "";
        if ("active" !== bb[0]) "built" === bb[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , Ub, Ab, Mb, Tb] = bb;
          ab !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = Ub) : Ub === this.layerY ? this.burstUnlisted(Ab) : Ub > this.layerY && this.finishLayer(Ub), this.layerY = Ub, this.layerCells.has(Ub) || this.layerCells.set(Ub, Ab.filter(vU)), this.ghostCells = Ab, this.palette = Mb, this.occupiedCells = Tb
        }
        ab !== this.blueprint && (this.blueprint = ab, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((bb => this.api.blockNameToBlockId(bb))), this.chunkWatch.watch([...this.ghostCells.filter(vU), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(bb) {
        this.burstUnlisted([]), bb > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = bb)
      }
      qL() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const bb = performance.now();
        let ab = !1;
        for (const [Mb, Tb] of this.foreseen) {
          var Ub;
          if (bb - Tb > 1e3) this.foreseen.delete(Mb), ab = !0, (null === (Ub = this.lastFilled) || void 0 === Ub ? void 0 : Ub.join()) === Mb && (this.lastFilled = this.lastSeenFilled)
        }
        const Ab = eU(this.api.getPositionView(this.localPlayerId));
        (ab || Ab.some(((bb, ab) => bb !== this.playerCells[ab]))) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(bb) {
        const ab = new Set;
        for (let Mb = 0; Mb < bb.length; Mb += 4) ab.add(`${bb[Mb]},${bb[Mb+1]},${bb[Mb+2]}`);
        const Ub = [],
          {
            ghostCells: Ab
          } = this;
        for (let Mb = 0; Mb < Ab.length; Mb += 4) {
          const bb = `${Ab[Mb]},${Ab[Mb+1]},${Ab[Mb+2]}`;
          !ab.has(bb) && this.open.delete(bb) && Ub.push(this.filledCell(Mb))
        }
        this.burst(Ub)
      }
      refresh() {
        const {
          ghostCells: bb,
          palette: ab,
          occupiedCells: Ub
        } = this, Ab = new aU, Mb = new Set, Tb = [], Eb = [];
        for (let Yb = 0; Yb < bb.length; Yb += 4) {
          const [Ub, Bb, eb, vb] = [bb[Yb], bb[Yb + 1], bb[Yb + 2], bb[Yb + 3]], Lb = this.api.getBlockId(Ub, Bb, eb), Pb = `${Ub},${Bb},${eb}`, Xb = Wa(this.blockIds[vb], Lb);
          !Xb && Ha(Lb) ? Ab.add(Ub, Bb, eb, da(ab[vb]), na, Ka(ab[vb])) : Xb ? this.open.has(Pb) && Tb.push(this.filledCell(Yb)) : Ab.add(Ub, Bb, eb, bU, Sa), !Xb && this.api.isBlockInLoadedChunk(Ub, Bb, eb) && (Mb.add(Pb), Eb.push(Ub, Bb, eb, Ha(Lb) ? 0 : 1))
        }
        this.open = Mb, this.nextCells = Eb;
        for (let Yb = 0; Yb < Ub.length; Yb += 3) {
          const [bb, ab, Mb] = [Ub[Yb], Ub[Yb + 1], Ub[Yb + 2]];
          Ha(this.api.getBlockId(bb, ab, Mb)) || Ab.add(bb, ab, Mb, bU, Sa)
        }
        this.meshes.show(Ab.toArray()), this.burst(Tb), this.showNext(), this.turn.retry(performance.now())
      }
      burst(bb) {
        const ab = performance.now(),
          Ub = [];
        for (const [Mb, Tb, Eb] of bb) {
          const bb = [Mb, Tb, Eb];
          this.lastSeenFilled = bb, this.foreseen.delete(bb.join()) || Ub.push(bb)
        }
        const Ab = this.isHolding(ab);
        for (const Mb of Ub) {
          if (this.lastFilled = Mb, Ab && this.pressFilled) {
            this.turn.filled(Mb, ab);
            continue
          }
          const bb = this.turn.arrived(Mb, ab);
          if (null !== bb) {
            this.pressFilled = Ab;
            for (const [ab, Ub] of this.foreseen) Ub <= bb && this.foreseen.delete(ab)
          }
        }
        this.juice.filled(bb)
      }
      showNext() {
        var bb;
        const ab = this.api.getPositionView(this.localPlayerId);
        this.playerCells.splice(0, 1 / 0, ...eU(ab));
        const Ub = this.lastFilled;
        this.nextCell = this.pickNext(null === Ub ? [ab[0], ab[1] + 1, ab[2]] : (0, oa.d)(Ub), (() => !1)), this.outline.show(null !== (bb = this.aimed) && void 0 !== bb ? bb : this.nextCell)
      }
      pickNext(bb, ab) {
        const Ub = this.api.getPositionView(this.localPlayerId),
          Ab = [Ub[0], Ub[1] + la.c.Py * la.c.playerEyeToHeightRatio, Ub[2]],
          Mb = EU(this.api, this.localPlayerId),
          {
            nextCells: Tb
          } = this,
          Eb = bb => [Tb[bb], Tb[bb + 1], Tb[bb + 2]],
          Yb = function(bb, ab, Ub, Ab, Mb, Tb) {
            let Eb = -1,
              Yb = -1,
              Bb = 1 / 0;
            for (let eb = 0; eb < bb.length; eb += ab) {
              const ab = (Tb(eb) ? 2 : 0) + (Ab(eb) ? 1 : 0);
              if (ab < Yb || Mb(eb)) continue;
              const vb = (bb[eb] + .5 - Ub[0]) ** 2 + (bb[eb + 1] + .5 - Ub[1]) ** 2 + (bb[eb + 2] + .5 - Ub[2]) ** 2;
              (ab > Yb || vb < Bb) && (Eb = eb, Yb = ab, Bb = vb)
            }
            return Eb
          }(Tb, 4, bb, (bb => 1 === Tb[bb + 3]), (bb => {
            const Ab = Eb(bb);
            return ta(Ab, Ub) || this.foreseen.has(Ab.join()) || ab(Ab)
          }), (bb => function(bb, ab, Ub) {
            return (ab[0] + .5 - bb[0]) ** 2 + (ab[1] + .5 - bb[1]) ** 2 + (ab[2] + .5 - bb[2]) ** 2 <= Ub ** 2
          }(Ab, Eb(bb), Mb)));
        return -1 === Yb ? null : Eb(Yb)
      }
      afterRender(bb) {
        var ab;
        this.turn.look(bb);
        const Ub = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === Ub ? null : Ub.position), this.outline.show(null !== (ab = this.aimed) && void 0 !== ab ? ab : this.nextCell)
      }
      isHolding(bb) {
        return null !== this.altMs && bb - this.altMs <= 500
      }
      attemptAltAction(bb) {
        const ab = performance.now();
        if (this.isHolding(ab) || (this.pressFilled = !1), this.altMs = ab, this.pressFilled) return "preventPlacement";
        const Ub = this.findAimed(bb);
        if (null !== Ub) return this.foreseen.set(Ub.join(), ab), this.lastFilled = Ub, this.aimed = null, this.showNext(), this.turn.filled(Ub, ab), this.pressFilled = !0, "preventPlacement";
        null !== this.nextCell && this.turn.tapped(bb, this.nextCell, ab)
      }
      findAimed(bb) {
        return function(bb, ab, Ub, Ab, Mb, Tb, Eb) {
          const Yb = bb.vab(ab),
            Bb = null === Yb || null === bb.blockNameToBlockId(Yb.name, !0) ? null : Yb.name,
            eb = bb.getPositionView(ab),
            {
              origin: vb,
              direction: Lb
            } = bb.getActionRay(),
            Pb = wa(Ab, {
              from: vb,
              dir: Lb,
              reach: EU(bb, ab),
              solid: Ub
            }, (ab => {
              const Ub = [Ab[ab], Ab[ab + 1], Ab[ab + 2]];
              return !Wa(Mb[Ab[ab + 3]], bb.getBlockId(...Ub)) && !Eb.has(Ub.join()) && bb.isBlockInLoadedChunk(...Ub) && !ta(Ub, eb)
            }), (bb => null === Bb || Bb === Ia(Mb[Ab[bb + 3]])), (bb => null !== Tb && Ab[bb] === Tb[0] && Ab[bb + 1] === Tb[1] && Ab[bb + 2] === Tb[2]));
          return -1 === Pb ? null : [Ab[Pb], Ab[Pb + 1], Ab[Pb + 2]]
        }(this.api, this.localPlayerId, bb, this.ghostCells, this.blockIds, this.nextCell, this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(bb) {
        const {
          ghostCells: ab
        } = this, [Ub, Ab, Mb] = da(this.palette[ab[bb + 3]]);
        return [ab[bb], ab[bb + 1], ab[bb + 2], Ub, Ab, Mb]
      }
    }

    function eU(bb) {
      let [ab, Ub, Ab] = bb;
      const Mb = la.c.vy / 2;
      return [Math.floor(ab), Math.floor(Ub), Math.floor(Ab), Math.floor(ab - Mb), Math.floor(ab + Mb), Math.floor(Ub + la.c.Py), Math.floor(Ab - Mb), Math.floor(Ab + Mb)]
    }

    function vU(bb, ab) {
      return ab % 4 !== 3
    }

    function LU(bb, ab, Ub, Ab, Mb) {
      if (!bb.isBlockInLoadedChunk(ab, Ab - 6, Ub) || !bb.isBlockInLoadedChunk(ab, Ab + 6 + Mb, Ub) || !bb.canModifyBlockAt(ab, Ab, Ub)) return NaN;
      let Tb = Ab - 1;
      if (0 !== bb.getBlockId(ab, Tb, Ub)) {
        for (; Tb < Ab + 6 && 0 !== bb.getBlockId(ab, Tb + 1, Ub);) Tb++;
        return Tb
      }
      for (; Tb > Ab - 6;)
        if (Tb--, 0 !== bb.getBlockId(ab, Tb, Ub)) return Tb;
      return NaN
    }

    function PU(bb, ab, Ub, Ab, Mb) {
      let Tb = 0;
      for (let Eb = Ab + 1; Eb <= Ab + Mb; Eb++) 0 !== bb.getBlockId(ab, Eb, Ub) && Tb++;
      return Tb
    }

    function XU(bb) {
      const ab = new Map;
      for (const Eb of bb) {
        var Ub;
        if (Number.isNaN(Eb)) return null;
        ab.set(Eb, (null !== (Ub = ab.get(Eb)) && void 0 !== Ub ? Ub : 0) + 1)
      }
      let Ab = NaN,
        Mb = 0;
      for (const [Eb, Yb] of ab)(Yb > Mb || Yb === Mb && Eb < Ab) && (Ab = Eb, Mb = Yb);
      let Tb = 0;
      for (const Eb of bb) Tb += Math.abs(Eb - Ab);
      return Tb
    }

    function jU(bb, ab, Ub, Ab) {
      const {
        eye: Mb,
        forward: Tb,
        tanHalfFovX: Eb,
        tanHalfFovY: Yb
      } = bb, [Bb, eb] = function(bb) {
        let [ab, Ub, Ab] = bb;
        const Mb = Math.hypot(ab, Ab),
          [Tb, Eb] = [Ab / Mb, -ab / Mb];
        return [
          [Tb, 0, Eb],
          [Ub * Eb, Ab * Tb - ab * Eb, -Ub * Tb]
        ]
      }(Tb), [vb, Lb] = [ab * Eb, Ub * Yb], Pb = Tb[0] + vb * Bb[0] + Lb * eb[0], Xb = Tb[1] + Lb * eb[1], jb = Tb[2] + vb * Bb[2] + Lb * eb[2], Rb = (Ab - Mb[1]) / Xb;
      return Rb > 0 && Rb < 1 / 0 ? [Mb[0] + Rb * Pb, Mb[2] + Rb * jb] : null
    }
    const RU = "plotsBlueprintPlacementChanged",
      kU = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class yU {
      constructor(bb, ab) {
        this.api = bb, this.localPlayerId = ab, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = bb => {
          var ab, Ub, Ab, Tb;
          const Eb = null !== (ab = null === (Ub = this.placing) || void 0 === Ub ? void 0 : Ub.rotation) && void 0 !== ab ? ab : 0,
            {
              size: Yb
            } = tb(bb, Eb),
            Bb = this.api.eZ(this.localPlayerId),
            [eb, vb] = null !== (Ab = null !== (Tb = function(bb, ab, Ub) {
              const [Ab, Mb, Tb] = ab, [Eb, Yb, Bb] = [Math.floor(Ub[0]), Math.floor(Ub[1]), Math.floor(Ub[2])], eb = 6 + Math.max(Ab, Tb) / 2, [vb, Lb] = [Math.ceil(eb + Ab / 2), Math.ceil(eb + Tb / 2)], [Pb, Xb] = [Eb - vb, Bb - Lb], [jb, Rb] = [2 * vb + 1, 2 * Lb + 1], kb = new Float64Array(jb * Rb), yb = new Uint16Array(jb * Rb);
              for (let xb = 0; xb < jb; xb++)
                for (let ab = 0; ab < Rb; ab++) {
                  const Ub = LU(bb, Pb + xb, Xb + ab, Yb, Mb);
                  kb[xb * Rb + ab] = Ub, Number.isNaN(Ub) || (yb[xb * Rb + ab] = PU(bb, Pb + xb, Xb + ab, Ub, Mb))
                }
              const Zb = [];
              let Db = null,
                zb = 1 / 0;
              for (let xb = 0; xb + Ab <= jb; xb++)
                for (let bb = 0; bb + Tb <= Rb; bb++) {
                  const [ab, Mb] = [Pb + xb, Xb + bb], Yb = Math.hypot(ab + Ab / 2 - Ub[0], Mb + Tb / 2 - Ub[2]);
                  if (Yb > eb || Eb >= ab - 2 && Eb < ab + Ab + 2 && Bb >= Mb - 2 && Bb < Mb + Tb + 2) continue;
                  Zb.length = 0;
                  let vb = 0;
                  for (let Ub = 0; Ub < Ab; Ub++)
                    for (let ab = 0; ab < Tb; ab++) Zb.push(kb[(xb + Ub) * Rb + bb + ab]), vb += yb[(xb + Ub) * Rb + bb + ab];
                  const Lb = XU(Zb);
                  if (null === Lb) continue;
                  const jb = Yb + 3 * (Lb + vb);
                  jb < zb && (zb = jb, Db = [ab, Mb])
                }
              return Db
            }(this.api, Yb, Bb)) && void 0 !== Tb ? Tb : this.cornerOnTarget(Yb)) && void 0 !== Ab ? Ab : [Math.floor(Bb[0]) + 2, Math.floor(Bb[2])];
          this.placing = {
            id: bb,
            rotation: Eb,
            corner: [eb, this.playerLevel(), vb],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null
          }, this.update(), this.api.sendCommand(`${Mb} preview`)
        }, this.rotate = () => {
          const {
            id: bb,
            rotation: ab,
            corner: Ub
          } = this.placing, Mb = Ab[(Ab.indexOf(ab) + 1) % Ab.length], [Tb, , Eb] = tb(bb, ab).size, [Yb, , Bb] = tb(bb, Mb).size;
          this.moveTo(Ub[0] + Math.floor(Tb / 2) - Math.floor(Yb / 2), Ub[2] + Math.floor(Eb / 2) - Math.floor(Bb / 2), Mb)
        }, this.hoverAt = (bb, ab) => {
          this.placing.hover = [bb, ab], this.moveCentreTo(this.camera, bb, ab)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (bb, ab) => {
          const Ub = this.placing,
            {
              eye: Ab,
              forward: Mb,
              tanHalfFovX: Tb,
              tanHalfFovY: Eb
            } = this.camera,
            Yb = {
              eye: [Ab[0], Ab[1], Ab[2]],
              forward: [Mb[0], Mb[1], Mb[2]],
              tanHalfFovX: Tb,
              tanHalfFovY: Eb
            },
            Bb = Ub.corner[1],
            eb = jU(Yb, bb, ab, Bb);
          Ub.hover = null, Ub.drag = eb && {
            view: Yb,
            ground: eb,
            corner: [Ub.corner[0], Ub.corner[2]],
            level: Bb
          }
        }, this.dragTo = (bb, ab) => {
          const Ub = this.placing.drag,
            Ab = Ub && jU(Ub.view, bb, ab, Ub.level);
          null !== Ub && null !== Ab && this.moveTo(Ub.corner[0] + Math.round(Ab[0] - Ub.ground[0]), Ub.corner[1] + Math.round(Ab[1] - Ub.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const bb = this.view;
          bb.waiting || (bb.blocked ? this.IR({
            ...bb,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const bb = this.placing,
            {
              id: ab,
              rotation: Ub,
              corner: Ab
            } = bb;
          this.api.sendCommand(`${Mb} place ${ab} ${Ab.join(" ")} ${Ub}`), bb.sent = {
            atMs: performance.now(),
            corner: [...Ab],
            rotation: Ub,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${Mb} preview off`))
        }, this.chunkWatch = new ca(bb), this.meshes = new UU(bb)
      }
      getView() {
        return this.view
      }
      qL() {
        const bb = this.placing;
        null !== bb && (null !== bb.sent && !bb.sent.timedOut && performance.now() - bb.sent.atMs > 3e3 ? (bb.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(bb) || this.chunkWatch.changed()) && this.update())
      }
      afterRender(bb) {
        const ab = this.placing;
        null !== ab && (! function(bb, ab) {
          for (let Ub = 0; Ub < 3; Ub++) ab.eye[Ub] = bb.cameraPosition[Ub], ab.forward[Ub] = bb.cameraDirection[Ub];
          ab.tanHalfFovX = bb.tanHalfFovX, ab.tanHalfFovY = bb.tanHalfFovY
        }(bb, this.camera), null !== ab.hover && this.moveCentreTo(this.camera, ab.hover[0], ab.hover[1]))
      }
      aj(bb) {
        const ab = this.placing;
        if (null === ab || null === ab.sent || "active" !== bb[0]) return;
        const {
          sent: Ub
        } = ab, [, Ab, Mb, Tb, Eb, Yb, Bb] = bb;
        Mb && Ab === ab.id && Bb === Ub.rotation && Tb === Ub.corner[0] && Eb === Ub.corner[1] && Yb === Ub.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(bb) {
        let [ab, , Ub] = bb;
        const Ab = this.api.getTargetedBlock();
        if (null === Ab) return null;
        const [Mb, , Tb] = Ab.position;
        return [Mb - Math.floor(ab / 2), Tb - Math.floor(Ub / 2)]
      }
      playerLevel() {
        var bb;
        const [ab, Ub, Ab] = this.api.eZ(this.localPlayerId);
        if (null !== (bb = this.api.getLocalPlayerMovement()) && void 0 !== bb && bb.onGround) return Math.ceil(Ub - .01);
        const [Mb, Tb, Eb] = [Math.floor(ab), Math.floor(Ub), Math.floor(Ab)];
        for (let Yb = Tb; Yb >= Tb - 2; Yb--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(Mb, Yb, Eb))) return Yb + 1;
        return Tb
      }
      followPlayerLevel(bb) {
        if (ZU(bb)) return !1;
        const ab = this.playerLevel();
        return ab !== bb.corner[1] && (bb.corner[1] = ab, !0)
      }
      moveCentreTo(bb, ab, Ub) {
        const Ab = this.placing,
          Mb = jU(bb, ab, Ub, Ab.corner[1]);
        if (null !== Mb) {
          const [bb, , ab] = tb(Ab.id, Ab.rotation).size;
          this.moveTo(Math.round(Mb[0] - bb / 2), Math.round(Mb[1] - ab / 2))
        }
      }
      moveTo(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const Ab = this.placing;
        if (ZU(Ab)) return;
        const [Mb, Tb, Eb] = Ab.corner;
        if (this.centreOnPlot(Mb, Eb) && !this.centreOnPlot(bb, ab, Ub))
          if (this.centreOnPlot(bb, Eb, Ub)) ab = Eb;
          else {
            if (!this.centreOnPlot(Mb, ab, Ub)) return;
            bb = Mb
          } bb === Mb && ab === Eb && Ub === Ab.rotation || (Ab.rotation = Ub, Ab.corner = [bb, Tb, ab], this.update())
      }
      centreOnPlot(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: Ab,
          corner: Mb
        } = this.placing, [Tb, , Eb] = tb(Ab, Ub).size;
        return this.api.canModifyBlockAt(bb + Math.floor(Tb / 2), Mb[1], ab + Math.floor(Eb / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.IR(null)
      }
      update() {
        const {
          id: bb,
          rotation: ab,
          corner: Ub,
          refusals: Ab
        } = this.placing, Mb = new aU, Tb = [];
        let Eb = !1,
          Yb = 0;
        for (const {
            offset: vb,
            block: Lb
          }
          of tb(bb, ab).cells) {
          const [bb, ab, Ab] = [Ub[0] + vb[0], Ub[1] + vb[1], Ub[2] + vb[2]];
          Tb.push(bb, ab, Ab);
          const Bb = !this.api.canModifyBlockAt(bb, ab, Ab),
            eb = this.api.getBlockId(bb, ab, Ab),
            Pb = !Ha(eb) && !Wa(this.api.blockNameToBlockId(Lb), eb);
          Eb ||= Bb, Yb += Pb ? 1 : 0, Bb || Pb ? Mb.add(bb, ab, Ab, bU, Sa) : Mb.add(bb, ab, Ab, da(Lb), kU, Ka(Lb))
        }
        this.chunkWatch.watch(Tb), this.meshes.show(Mb.toArray());
        const Bb = this.view,
          eb = ZU(this.placing);
        (null === Bb || void 0 === Bb ? void 0 : Bb.id) === bb && Bb.blocked === Eb && Bb.toClear === Yb && Bb.waiting === eb && Bb.refusals === Ab || this.IR({
          id: bb,
          blocked: Eb,
          toClear: Yb,
          waiting: eb,
          refusals: Ab
        })
      }
      IR(bb) {
        this.view = bb, vb.m.IR(RU, bb, !0)
      }
    }

    function ZU(bb) {
      let {
        sent: ab
      } = bb;
      return null !== ab && !ab.timedOut
    }
    var DU = Ub(3959),
      zU = Ub(38434);

    function xU(bb, ab, Ub) {
      const Ab = [255 * bb, 255 * ab, 255 * Ub],
        [Mb, Tb, Eb] = Ab.map((bb => bb + .4 * (255 - bb)));
      return {
        texture: "square_particle",
        PL: 48,
        minLifeTime: .3 / zU.e,
        maxLifeTime: .55 / zU.e,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * zU.e * zU.e, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...Ab, 1],
          maxColor: [Mb, Tb, Eb, 1]
        }, {
          timeFraction: 1,
          minColor: [...Ab, 0],
          maxColor: [Mb, Tb, Eb, 0]
        }],
        blendMode: DU.f.Standard
      }
    }
    const iU = {
      texture: "glint",
      mipmaps: !1,
      PL: 96,
      minLifeTime: .5 / zU.e,
      maxLifeTime: .9 / zU.e,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * zU.e * zU.e, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: DU.f.OneOne
    };
    class fU {
      constructor(bb, ab) {
        this.api = bb, this.localPlayerId = ab, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(bb) {
        if (this.api.particlesEnabled())
          for (const [ab, Ub, Ab, Mb, Tb, Eb] of bb.slice(0, 3)) {
            const bb = `${Mb},${Tb},${Eb}`;
            let Yb = this.chips.get(bb);
            void 0 === Yb && (Yb = this.api.createParticles(xU(Mb, Tb, Eb), {
              pos: [ab + .5, Ub + .5, Ab + .5]
            }), this.chips.set(bb, Yb));
            for (let ab = 0; ab < 8; ab++) this.setPoint(ab, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            Yb.emitPoints([ab + .5, Ub + .5, Ab + .5], this.points, 8)
          }
      }
      layerDone(bb) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const ab = bb.length / 3;
        if (0 === ab || !this.api.particlesEnabled()) return;
        const Ub = Math.min(ab, 48),
          [Ab, Mb, Tb] = [bb[0] + .5, bb[1] + 1, bb[2] + .5];
        let Eb = 0;
        for (let Yb = 0; Yb < Ub; Yb++) {
          const Bb = 3 * Math.floor(Yb * ab / Ub);
          for (let ab = 0; ab < 2; ab++) this.setPoint(Eb++, bb[Bb] + Math.random() - Ab, bb[Bb + 1] + 1 - Mb, bb[Bb + 2] + Math.random() - Tb, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(iU, {
          pos: [Ab, Mb, Tb]
        }), this.sparkles.emitPoints([Ab, Mb, Tb], this.points, Eb)
      }
      dispose() {
        var bb;
        for (const ab of this.chips.values()) ab.stop();
        this.chips.clear(), null === (bb = this.sparkles) || void 0 === bb || bb.stop(), this.sparkles = null
      }
      setPoint(bb, ab, Ub, Ab, Mb) {
        const Tb = 4 * bb;
        this.points[Tb] = ab, this.points[Tb + 1] = Ub, this.points[Tb + 2] = Ab, this.points[Tb + 3] = Mb
      }
    }
    var mU = Ub(1874);
    const pU = "SpecialAction1",
      NU = "KeyY",
      WU = "KeyX";

    function HU(bb) {
      let {
        placement: ab
      } = bb;
      const Ub = (0, Wb.i)(RU, ab.getView()),
        {
          t: Ab
        } = (0, Ib.A)(),
        {
          isTouchScreen: Mb
        } = (0, Yb.n)(["isTouchScreen"]),
        Tb = null !== Ub,
        Eb = Tb && !Ub.blocked && !Ub.waiting;
      if ((0, Nb.d)((bb => Tb && !bb.repeat && !(0, eb.isTypingInInput)() && !(0, Bb.o)() && !Mb), (bb => {
          const Ub = function(bb, ab, Ub) {
            if (bb === WU) return ab.stop;
            if (bb === NU) return Ub ? ab.build : dU;
            return mU.x[pU].includes(bb) ? ab.rotate : null
          }(bb.code, ab, Eb);
          null !== Ub && (bb.stopPropagation(), Ub())
        })), !Tb) return null;
      let vb = Mb ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return Ub.blocked ? vb = "plotsGame:placementOffPlot" : Ub.toClear > 0 && (vb = "plotsGame:placementClear"), (0, sb.jsx)(Ea.e, {
        placement: "bottom",
        children: (0, sb.jsxs)("div", {
          className: "PlotsPlacementCard",
          children: [(0, sb.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: Ab(jb(Ub.id).displayName.translationKey)
          }), (0, sb.jsx)("div", {
            className: ib()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: Ub.refusals > 0
            }),
            children: Ab(vb)
          }, Ub.refusals), (0, sb.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, sb.jsxs)(mb.g, {
              onClick: ab.rotate,
              children: [(0, sb.jsx)(IU, {
                noaAction: pU
              }), Ab("plotsGame:placementRotate")]
            }), (0, sb.jsxs)(mb.D, {
              onClick: ab.stop,
              children: [(0, sb.jsx)(IU, {
                keyCode: WU
              }), Ab("general:cancel")]
            }), (0, sb.jsxs)(mb.m, {
              disabled: !Eb,
              onClick: ab.build,
              children: [(0, sb.jsx)(IU, {
                keyCode: NU
              }), Ab("plotsGame:placementBuild")]
            })]
          })]
        })
      })
    }

    function IU(bb) {
      return (0, sb.jsx)(Ba.b, {
        className: "PlotsPlacementKey",
        ...bb
      })
    }

    function dU() {}
    var FU = Ub(4225);
    class hU {
      constructor(bb) {
        this.placement = bb, this.press = null
      }
      down(bb) {
        if (null !== this.press) return !1;
        const {
          id: ab,
          mouse: Ub,
          x: Ab,
          y: Mb,
          atMs: Tb
        } = bb;
        return this.press = {
          id: ab,
          mouse: Ub,
          x: Ab,
          y: Mb,
          atMs: Tb,
          moved: !1
        }, Ub || this.placement.beginDrag(bb.ndcX, bb.ndcY), !0
      }
      move(bb) {
        const ab = this.press;
        null !== ab && ab.id === bb.id && (ab.moved ||= Math.hypot(bb.x - ab.x, bb.y - ab.y) > 8), bb.mouse ? this.placement.hoverAt(bb.ndcX, bb.ndcY) : (null === ab || void 0 === ab ? void 0 : ab.id) === bb.id && this.placement.dragTo(bb.ndcX, bb.ndcY)
      }
      up(bb) {
        const ab = this.press;
        (null === ab || void 0 === ab ? void 0 : ab.id) === bb.id && (this.move(bb), this.end(), !ab.moved && (ab.mouse || bb.atMs - ab.atMs <= 250) && this.placement.tap())
      }
      cancel(bb) {
        var ab;
        (null === (ab = this.press) || void 0 === ab ? void 0 : ab.id) === bb && this.end()
      }
      leave(bb) {
        let {
          id: ab,
          mouse: Ub
        } = bb;
        Ub && this.placement.endHover(), this.cancel(ab)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }

    function GU(bb) {
      let {
        placement: ab
      } = bb;
      return null === (0, Wb.i)(RU, ab.getView()) ? null : (0, sb.jsx)(QU, {
        placement: ab
      })
    }

    function QU(bb) {
      let {
        placement: ab
      } = bb;
      (0, FU.b)(!0, !0, "PlotsPlacementLayer");
      const Ub = (0, Tb.useMemo)((() => new hU(ab)), [ab]);
      return (0, sb.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: bb => {
          "mouse" === bb.pointerType && 0 !== bb.button || !Ub.down(qU(bb)) || bb.currentTarget.setPointerCapture(bb.pointerId)
        },
        onPointerMove: bb => {
          Ub.move(qU(bb))
        },
        onPointerUp: bb => {
          Ub.up(qU(bb))
        },
        onPointerCancel: bb => {
          Ub.cancel(bb.pointerId)
        },
        onLostPointerCapture: bb => {
          Ub.cancel(bb.pointerId)
        },
        onPointerLeave: bb => {
          Ub.leave(qU(bb))
        },
        "aria-hidden": !0
      })
    }

    function qU(bb) {
      const {
        left: ab,
        top: Ub,
        width: Ab,
        height: Mb
      } = bb.currentTarget.getBoundingClientRect();
      return {
        id: bb.pointerId,
        mouse: "mouse" === bb.pointerType,
        x: bb.clientX,
        y: bb.clientY,
        ndcX: (bb.clientX - ab) / Ab * 2 - 1,
        ndcY: 1 - (bb.clientY - Ub) / Mb * 2,
        atMs: bb.timeStamp
      }
    }
    var uU = Ub(2227),
      rU = Ub(36090),
      KU = Ub(1858),
      oU = Ub(1203);
    const lU = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function tU(bb) {
      let {
        hud: ab
      } = bb;
      const Ub = (0, Wb.i)(va, ab.getPlot()),
        [Ab, Mb] = (0, Tb.useState)(null),
        Eb = (0, rU.j)(Ab);
      if ("none" === Ub[0]) return null;
      const [, Yb, Bb, eb, vb, Lb] = Ub;
      return (0, sb.jsx)("div", {
        className: ib()("PlotsPlotBannerContainer", {
          Below: Eb
        }),
        children: (0, sb.jsx)(wU, {
          plotX: Yb,
          plotZ: Bb,
          ownerName: eb,
          ownerId: vb,
          relation: Lb,
          plaqueRef: Mb
        }, `${Yb},${Bb}`)
      })
    }

    function wU(bb) {
      var ab, Ub;
      let {
        plotX: Ab,
        plotZ: Mb,
        ownerName: Tb,
        ownerId: Eb,
        relation: Yb,
        plaqueRef: Bb
      } = bb;
      const {
        t: eb
      } = (0, Ib.A)(), vb = (0, KU.k)("hiddenPlayerNames"), Lb = (0, KU.k)("players"), Pb = null === Eb ? null : null !== (ab = null === (Ub = Lb.byId[Eb]) || void 0 === Ub ? void 0 : Ub.cosmetics) && void 0 !== ab ? ab : null, Xb = eb("plotsGame:plotBannerCoords", {
        x: Ab,
        z: Mb
      }), jb = "own" === Yb || null !== Tb;
      return (0, sb.jsxs)("div", {
        ref: Bb,
        className: ib()("PlotsPlotBanner", {
          Own: "own" === Yb,
          Shared: "shared" === Yb
        }),
        role: "status",
        children: [(0, sb.jsxs)("span", {
          className: ib()("PlotsPlotBannerSeal", {
            Face: null !== Pb
          }),
          children: [null !== Pb && (0, sb.jsx)(uU.d, {
            cosmetics: Pb
          }), null === Pb && (0, sb.jsx)(fb.e, {
            name: lU[Yb]
          })]
        }), (0, sb.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, sb.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === Yb && eb("plotsGame:plotBannerYours"), "own" !== Yb && null !== Tb && eb("plotsGame:plotBannerOwner", {
              name: (0, oU.d)(Tb, vb)
            }), !jb && Xb]
          }), jb && (0, sb.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [Xb, "shared" === Yb && (0, sb.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: eb("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }

    function sU(bb) {
      let {
        progress: ab,
        goal: Ub
      } = bb;
      const Ab = Math.min(ab, Ub);
      return (0, sb.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, sb.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": Ub,
          "aria-valuenow": Ab,
          children: (0, sb.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${Ab/Ub})`
            }
          })
        }), (0, sb.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [Ab, "/", Ub]
        })]
      })
    }

    function gU(bb) {
      return {
        translationKey: `plotsGame:${bb}`,
        actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
      }
    }
    const CU = {
      house: {
        icon: "house",
        titleKey: "plotsGame:starterLotHouseTitle",
        desktop: gU("starterLotHouseHint", ["alt-fire"]),
        touch: gU("starterLotHouseHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotHousePlain"
      },
      garden: {
        icon: "sparkle",
        titleKey: "plotsGame:starterLotGarden",
        desktop: gU("starterLotGardenHint", ["alt-fire"]),
        touch: gU("starterLotGardenHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotGardenPlain"
      },
      boulder: {
        icon: "hammer",
        titleKey: "plotsGame:starterLotBoulder",
        desktop: gU("starterLotBreakHint", ["primary-fire"]),
        touch: gU("starterLotBreakHintTouch"),
        plainKey: "plotsGame:starterLotBreakPlain"
      },
      fly: {
        icon: "angles-up",
        titleKey: "plotsGame:starterLotFly",
        desktop: gU("starterLotFlyHint", ["jump"]),
        touch: gU("starterLotFlyHintTouch"),
        plainKey: "plotsGame:starterLotFlyPlain"
      },
      backpack: {
        icon: "backpack",
        titleKey: "plotsGame:starterLotBackpack",
        desktop: gU("starterLotBackpackHint", ["OpenInventory"]),
        touch: gU("starterLotBackpackHintTouch"),
        plainKey: "plotsGame:starterLotBackpackPlain"
      },
      neighbour: {
        icon: "person",
        titleKey: "plotsGame:starterLotNeighbour",
        desktop: gU("starterLotNeighbourHint", ["forward", "left", "backward", "right"]),
        touch: gU("starterLotNeighbourHintTouch"),
        plainKey: "plotsGame:starterLotNeighbourPlain"
      }
    };

    function VU(bb, ab, Ub) {
      const {
        translationKey: Ab,
        actions: Mb
      } = Ub ? ab.touch : ab.desktop;
      if (0 === Mb.length) return bb(Ab);
      const Tb = [];
      for (const Eb of Mb) {
        const Ab = (0, mU.w)(Eb, Ub),
          Mb = mU.x[Eb][0];
        if (null === Ab && void 0 === Mb) return bb(ab.plainKey);
        Tb.push(null === Ab ? (0, mU.o)(Mb) : bb(Ab.translationKey))
      }
      return bb(Ab, {
        key: Tb.join("")
      })
    }

    function OU(bb) {
      let {
        hud: ab
      } = bb;
      const Ub = (0, Wb.i)(ea, ab.getStep()),
        {
          t: Ab
        } = (0, Ib.A)();
      return (0, sb.jsxs)(Ea.e, {
        placement: "bottom",
        children: ["step" === Ub[0] && (0, sb.jsx)(cU, {
          step: Ub[1],
          progress: Ub[2],
          goal: Ub[3]
        }, Ub[1]), "celebrate" === Ub[0] && (0, sb.jsx)(JU, {
          className: ib()("Celebrate", {
            Gold: "house" === Ub[1]
          }),
          icon: "star",
          title: Ab("house" === Ub[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
        }, `celebrate-${Ub[1]}`)]
      })
    }

    function cU(bb) {
      let {
        step: ab,
        progress: Ub,
        goal: Ab
      } = bb;
      const {
        isTouchScreen: Mb
      } = (0, Yb.n)(["isTouchScreen"]), {
        t: Tb
      } = (0, Ib.A)(), Eb = CU[ab];
      return (0, sb.jsxs)(JU, {
        icon: Eb.icon,
        title: Tb(Eb.titleKey),
        children: [(0, sb.jsx)("div", {
          className: "PlotsStepCardHint SmallTextLight",
          children: VU(Tb, Eb, Mb)
        }), Ab > 1 && (0, sb.jsx)(sU, {
          progress: Ub,
          goal: Ab
        }), "backpack" === ab && Mb && (0, sb.jsx)(nU, {})]
      })
    }

    function JU(bb) {
      let {
        className: ab,
        icon: Ub,
        title: Ab,
        children: Mb
      } = bb;
      return (0, sb.jsxs)("div", {
        className: ib()("PlotsStepCard", ab),
        role: "status",
        children: [(0, sb.jsx)("span", {
          className: "PlotsStepCardIcon",
          children: (0, sb.jsx)(fb.e, {
            name: Ub
          })
        }), (0, sb.jsxs)("div", {
          className: "PlotsStepCardBody",
          children: [(0, sb.jsx)("div", {
            className: "PlotsStepCardTitle SmallTextBold",
            children: Ab
          }), Mb]
        })]
      })
    }

    function nU() {
      return (0, Tb.useEffect)((() => (Yb.c.set({
        backpackPointerRequested: !0
      }), () => {
        Yb.c.set({
          backpackPointerRequested: !1
        })
      })), []), null
    }
    const SU = function(bb, ab, Ub, Ab) {
      let {
        localPlayerId: Mb
      } = Ab;
      const Yb = new La;
      let Bb = null,
        eb = null,
        vb = null,
        Lb = null,
        Pb = null;
      const Xb = [];
      return {
        onCreate: bb => {
          Bb = new fU(bb, Mb), eb = new BU(bb, Mb, Bb), vb = new BU(bb, Mb, Bb), Lb = new yU(bb, Mb), Pb = new zb(bb, Lb), Xb.push((0, Eb.w)((0, Tb.createElement)(Tb.Fragment, null, (0, Tb.createElement)(tU, {
            hud: Yb
          }), (0, Tb.createElement)(OU, {
            hud: Yb
          }), (0, Tb.createElement)(Xa, {
            hud: Yb,
            journal: Pb
          }), (0, Tb.createElement)(GU, {
            placement: Lb
          }), (0, Tb.createElement)(HU, {
            placement: Lb
          })), {
            content: (0, Tb.createElement)(Ma, {
              journal: Pb
            })
          }))
        },
        qL: () => {
          eb.qL(), vb.qL(), Lb.qL(), Pb.qL()
        },
        onPlayerAttemptAltAction: (bb, ab, Ub, Ab, Mb, Tb) => {
          var Eb;
          if (null !== Tb) return;
          const Yb = void 0 === ab ? null : [ab, Ub, Ab];
          return null !== (Eb = eb.attemptAltAction(Yb)) && void 0 !== Eb ? Eb : vb.attemptAltAction(Yb)
        },
        onPlayerClickUp: () => {
          eb.endPress(), vb.endPress()
        },
        onAfterRender: (bb, ab) => {
          Lb.afterRender(ab), eb.afterRender(ab), vb.afterRender(ab)
        },
        onClose: () => {
          for (const bb of Xb) bb();
          Bb.dispose(), eb.dispose(), vb.dispose(), Lb.dispose(), Bb = null, eb = null, vb = null, Lb = null, Pb = null
        },
        onReceivedMessageFromServer: (bb, ab) => {
          if ("plotsStarterLot" === bb) Yb.receiveStep(ab);
          else if ("plotsPlot" === bb) Yb.receivePlot(ab);
          else if ("plotsStarterHouse" === bb) eb.aj(ab);
          else if ("plotsBlueprint" === bb) {
            const bb = ab;
            vb.aj(bb), Lb.aj(bb)
          } else "plotsJournal" === bb ? Pb.aj(ab) : "plotsJournalOpen" === bb ? Pb.openFromServer() : "plotsPreviewEnd" === bb && Lb.endFromServer()
        }
      }
    }
  },
  38434: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab,
      f: () => Tb
    });
    const Ab = 1 / .6,
      Mb = {
        kind: "smokePuff"
      };
    class Tb {
      constructor(bb, ab, Ub) {
        this.style = bb, this.PL = ab, this.half = Ub, this.particles = null, this.lastFrame = -1
      }
      emit(bb, ab, Ub) {
        let Tb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return Ub !== this.lastFrame && (this.lastFrame = Ub, this.particles || (this.particles = bb.createParticles(function(bb, ab) {
          const [
            [Ub, Tb, Eb],
            [Yb, Bb, eb]
          ] = bb.colours;
          return {
            texture: bb.soft ? Mb : "square_particle",
            PL: ab,
            minLifeTime: bb.life[0] / Ab,
            maxLifeTime: bb.life[1] / Ab,
            minEmitPower: bb.power[0] * Ab,
            maxEmitPower: bb.power[1] * Ab,
            minSize: bb.size[0],
            maxSize: bb.size[1],
            emitRate: 0,
            gravity: [0, bb.lift * Ab * Ab, 0],
            dir1: [-bb.spread, 1, -bb.spread],
            dir2: [bb.spread, 1, bb.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Ub, Tb, Eb, bb.alpha],
              maxColor: [Yb, Bb, eb, bb.alpha]
            }, {
              timeFraction: 1,
              minColor: [Ub, Tb, Eb, 0],
              maxColor: [Yb, Bb, eb, 0]
            }],
            blendMode: bb.blendMode
          }
        }(this.style, this.PL), {
          pos: ab,
          half: this.half
        })), this.particles.moveTo(ab, this.half), this.particles.emit(Tb), !0)
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