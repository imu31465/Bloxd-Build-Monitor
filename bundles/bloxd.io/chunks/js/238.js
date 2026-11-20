export const id = 238;
export const ids = [238];
export const modules = {
  39032: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => ck
    });
    const kb = [0, 90, 180, 270],
      Wb = "plotsblueprint";
    var ab = sb(64),
      Tb = sb(36240),
      Ub = sb(19),
      Ib = sb(1626),
      Hb = sb(1704),
      fb = sb(26);
    const Mb = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      Xb = {
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
      nb = ["small", "medium", "large"].flatMap((bb => Mb.flat().filter((cb => Xb[cb].tier === bb))));

    function mb(bb) {
      return Xb[bb]
    }
    const lb = new Map(Mb.flatMap((bb => bb.slice(1).map(((cb, sb) => [cb, bb[sb]])))));

    function Qb(bb) {
      var cb;
      return null !== (cb = lb.get(bb)) && void 0 !== cb ? cb : null
    }
    const eb = {
      farm_hut: "plotsGame:journalNoteFarmHut",
      rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
      castle_tower: "plotsGame:journalNoteCastleTower",
      farm_house: "plotsGame:journalNoteFarmHouse",
      farm_barn: "plotsGame:journalNoteFarmBarn"
    };

    function Cb(bb, cb) {
      const sb = new Set(bb),
        kb = function(bb) {
          const cb = new Set(bb);
          return new Set(nb.filter((bb => {
            const sb = Qb(bb);
            return null === sb || cb.has(sb)
          })))
        }(sb);
      return nb.map((bb => {
        const Wb = bb === cb;
        return sb.has(bb) ? {
          id: bb,
          active: Wb,
          state: "completed",
          unlockedBy: null
        } : kb.has(bb) ? {
          id: bb,
          active: Wb,
          state: "open",
          unlockedBy: null
        } : {
          id: bb,
          active: Wb,
          state: "locked",
          unlockedBy: Qb(bb)
        }
      }))
    }
    const Nb = "plotsJournalChanged";
    class Vb {
      constructor(bb, cb) {
        this.api = bb, this.placement = cb, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.lm("journal_opened")
        }, this.build = bb => {
          this.lm("placement_started"), this.placement.start(bb), (0, Tb.e)()
        }, this.putAway = () => {
          this.api.sendCommand(`${Wb} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      Km(bb) {
        let [, cb, sb] = bb;
        this.pages = Cb(cb, sb), fb.j.QQ(Nb, this.pages, !0)
      }
      openFromServer() {
        this.openRequested = !0, this.aX()
      }
      aX() {
        this.openRequested && !Ub.d.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, Ib.q)() || (0, Hb.isTypingInInput)() || null !== this.placement.getView() || (0, Tb.m)())
      }
      lm(bb) {
        this.reported.has(bb) || (this.reported.add(bb), this.api.sendCommand(`${Wb} report ${bb}`))
      }
    }
    var Lb = sb(1033),
      ub = sb.n(Lb),
      Yb = sb(1039),
      hb = sb(1431),
      Jb = sb(4270),
      gb = sb(3184),
      Bb = sb(1423),
      tb = sb(2013),
      yb = sb(1197),
      Pb = sb(9017);
    const Db = [0, 90, 180, 270],
      Eb = /^(meta\|rot\d)\|([lrud]+)$/,
      ib = "nesw",
      Ob = /^meta\|([nesw]*)\|?(Stacked)?$/,
      Gb = function(bb) {
        const cb = new WeakMap;
        return (sb, kb) => {
          let Wb = cb.get(sb);
          return void 0 === Wb && (Wb = bb(sb, kb), cb.set(sb, Wb)), Wb
        }
      }((bb => new Kb(bb)));
    class Kb {
      constructor(bb) {
        this.blockMetadata = bb, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const cb = new Set(Object.keys(bb).map((cb => bb[cb].id)));
        cb.add(0), this.maxBlockId = Math.max(...cb)
      }
      static
      for (bb) {
        return Gb(bb)
      }
      getBlockIdMapping(bb, cb) {
        const sb = this.getBlockIdMappingKey(bb, cb);
        let kb = this.blockIdMappings.get(sb);
        return void 0 === kb && Db.includes(bb) && (kb = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, bb, cb), this.blockIdMappings.set(sb, kb)), kb
      }
      turnBlockId(bb, cb, sb) {
        return this.mapBlockId(this.blockMetadata[bb], cb, this.getRotationMapping(cb, sb), sb)
      }
      getBlockIdMappingKey(bb, cb) {
        return `r${bb}|m${Number(cb)}`
      }
      createBlockIdMapping(bb, cb, sb, kb) {
        const Wb = new Uint16Array(cb + 1),
          ab = this.getRotationMapping(sb, kb);
        for (const Tb in bb) {
          const cb = bb[Tb];
          Wb[cb.id] = this.mapBlockId(cb, sb, ab, kb)
        }
        return Wb
      }
      getRotationMapping(bb, cb) {
        const sb = Math.round(bb / 90),
          kb = new Uint8Array(4);
        for (let Wb = 0; Wb < 4; Wb++) kb[Wb] = (4 + Wb - sb) % 4;
        if (cb) {
          let bb = kb[0];
          kb[0] = kb[1], kb[1] = bb, bb = kb[2], kb[2] = kb[3], kb[3] = bb
        }
        return kb
      }
      mapBlockId(bb, cb, sb, kb) {
        var Wb;
        const {
          blockMetadata: ab
        } = this, Tb = Math.round(cb / 90), {
          id: Ub,
          meta: Ib
        } = bb, {
          rot: Hb,
          rootName: fb,
          metaStr: Mb
        } = Ib;
        let Xb;
        const [, nb, mb] = null !== (Wb = Ob.exec(Mb)) && void 0 !== Wb ? Wb : [];
        if (void 0 !== nb) {
          var lb, Qb;
          Xb = null !== (lb = null === (Qb = ab[`${fb}|meta|${[ib.split("").filter(((bb,cb)=>nb.split("").some((bb=>{const sb=ib.indexOf(bb);return((kb?3-sb:sb)+Tb)%4===cb})))).join(""),mb].filter(Boolean).join("|")}`]) || void 0 === Qb ? void 0 : Qb.id) && void 0 !== lb ? lb : Ub
        } else if (null === Hb) Xb = Ub;
        else {
          var eb, Cb;
          const bb = sb[Hb - 1] + 1;
          let cb = Mb.replace(`rot${Hb}`, `rot${bb}`);
          kb && Ib.stairsCorner && (cb = cb.replace(/(Left|Right)$/, (bb => "Left" === bb ? "Right" : "Left"))), kb && "Chest" === fb && (cb = cb.replace(/\|(left|right)$/, ((bb, cb) => "left" === cb ? "|right" : "|left")));
          const Wb = Eb.exec(cb);
          if (kb && null !== Wb) {
            const bb = "lrud".split("").filter((bb => Wb[2].includes("l" === bb ? "r" : "r" === bb ? "l" : bb)));
            cb = `${Wb[1]}|${bb.join("")}`
          }
          const Tb = `${fb}|${cb}`;
          if (Xb = null !== (eb = null === (Cb = ab[Tb]) || void 0 === Cb ? void 0 : Cb.id) && void 0 !== eb ? eb : null, null === Xb) {
            const bb = ab[fb];
            Xb = bb.rootMetaDesc === Tb ? bb.id : Ub
          }
        }
        return Xb
      }
    }

    function Zb(bb, cb, sb) {
      let {
        xRotationMappedOrigin: kb,
        shouldSwapXZ: Wb
      } = sb;
      const ab = Wb ? cb : bb;
      return null === kb ? ab : kb - ab
    }

    function zb(bb, cb, sb) {
      let {
        zRotationMappedOrigin: kb,
        shouldSwapXZ: Wb
      } = sb;
      const ab = Wb ? bb : cb;
      return null === kb ? ab : kb - ab
    }
    const qb = {
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
      db = new Map;

    function Ab(bb, cb) {
      const sb = `${bb}|${cb}`;
      let kb = db.get(sb);
      if (void 0 === kb) {
        const {
          size: Wb,
          palette: ab,
          layers: Tb
        } = qb[bb], Ub = 90 === cb || 270 === cb, [Ib, Hb] = Ub ? [Wb[2], Wb[0]] : [Wb[0], Wb[2]], fb = function(bb, cb, sb) {
          let kb = null,
            Wb = null,
            ab = !1;
          switch (bb) {
            case 0:
              break;
            case 90:
              kb = cb - 1, ab = !0;
              break;
            case 180:
              kb = cb - 1, Wb = sb - 1;
              break;
            case 270:
              Wb = sb - 1, ab = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${bb}`)
          }
          return {
            xRotationMappedOrigin: kb,
            zRotationMappedOrigin: Wb,
            shouldSwapXZ: ab
          }
        }(cb, Ib, Hb), Mb = Kb.for(Pb.g), Xb = ab.map((bb => (0, Pb.f)(Mb.turnBlockId((0, Pb.j)(bb), cb, !1)))), nb = [];
        Tb.forEach(((bb, cb) => {
          bb.split(" ").forEach(((bb, sb) => {
            for (let kb = 0; kb < bb.length; kb++)
              if ("." !== bb[kb]) {
                const Wb = [Zb(kb, sb, fb), cb, zb(kb, sb, fb)];
                nb.push({
                  offset: Wb,
                  block: Xb[bb.charCodeAt(kb) - "a".charCodeAt(0)]
                })
              }
          }))
        })), kb = {
          size: [Ib, Wb[1], Hb],
          cells: nb
        }, db.set(sb, kb)
      }
      return kb
    }
    const wb = {
      farm_hut: sb.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
      farm_house: sb.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
      farm_barn: sb.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
      rusticHome_tent: sb.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
      rusticHome_cabin: sb.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
      rusticHome_house: sb.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
      market_stand: sb.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
      market_stall: sb.p + "static/media/market_stall.9a562807f9dff591618a.webp",
      market_shop: sb.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
      castle_wall: sb.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
      castle_gate: sb.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
      castle_tower: sb.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
    };
    var rb = sb(1087);
    const ob = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function Sb(bb) {
      let {
        page: cb,
        building: sb,
        onBuild: kb,
        onPutAway: Wb
      } = bb;
      const {
        t: ab
      } = (0, yb.E)(), {
        displayName: Tb,
        tier: Ub
      } = mb(cb.id), Ib = Ab(cb.id, 0).cells.length, Hb = eb[cb.id], fb = "locked" === cb.state, Mb = sb ? hb.d : hb.n;
      return (0, rb.jsxs)("article", {
        className: ub()("PlotsJournalPage", {
          Locked: fb
        }),
        children: [(0, rb.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: ab(Tb.translationKey)
        }), (0, rb.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [ab(ob[Ub]), " \xb7 ", ab("plotsGame:journalBlocks", {
            blocks: String(Ib)
          })]
        }), (0, rb.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [nb.map((bb => (0, rb.jsx)("img", {
            className: ub()({
              Shown: bb === cb.id
            }),
            src: wb[bb],
            alt: "",
            draggable: !1
          }, bb))), "completed" === cb.state && (0, rb.jsx)("span", {
            className: "PlotsJournalStamp",
            children: ab("plotsGame:journalBuilt")
          }), fb && (0, rb.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, rb.jsx)(Yb.b, {
              name: "lock"
            })
          })]
        }), void 0 !== Hb && "completed" !== cb.state && (0, rb.jsx)("p", {
          className: "PlotsJournalNote",
          children: ab(Hb)
        }), (0, rb.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === cb.state && (0, rb.jsx)("p", {
            className: "PlotsJournalHint",
            children: ab("plotsGame:journalLocked", {
              name: ab(mb(cb.unlockedBy).displayName.translationKey)
            })
          }), cb.active && (0, rb.jsxs)(rb.Fragment, {
            children: [(0, rb.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: ab("plotsGame:journalBuilding")
            }), (0, rb.jsx)(hb.h, {
              onClick: Wb,
              children: ab("plotsGame:journalPutAway")
            })]
          }), !fb && !cb.active && (0, rb.jsx)(Mb, {
            onClick: () => {
              kb(cb.id)
            },
            children: ab("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function Rb(bb) {
      let {
        className: cb,
        page: sb,
        hidden: kb,
        building: Wb,
        journal: ab
      } = bb;
      return (0, rb.jsxs)("div", {
        ref: bb => {
          null !== bb && (bb.inert = kb)
        },
        className: ub()("PlotsJournalSide", cb),
        children: [void 0 !== sb && (0, rb.jsx)(Sb, {
          page: sb,
          building: Wb,
          onBuild: ab.build,
          onPutAway: ab.putAway
        }), void 0 === sb && (0, rb.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var vb = sb(344),
      Fb = sb(1832);

    function xb(bb) {
      return Math.cos((0, Fb.i)(bb))
    }

    function jb(bb) {
      return (0, Fb.r)(Math.acos(vb.d.clamp(bb, -1, 1)))
    }

    function pb(bb, cb, sb, kb, Wb) {
      const ab = Math.abs(cb - bb),
        Tb = (0, Fb.r)(Wb / (sb * Math.abs(Math.sin((0, Fb.i)(bb))))),
        Ub = 450 * Math.min(1, ab / kb),
        Ib = Tb > 0 ? 3 * ab / Tb : 1 / 0;
      return Math.round(Math.max(120, Math.min(Ub, Ib)))
    }
    class bc {
      constructor() {
        this.samples = []
      }
      add(bb, cb) {
        for (this.samples.push({
            x: bb,
            at: cb
          }); cb - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const bb = this.samples[0],
          cb = this.samples[this.samples.length - 1];
        return cb.at > bb.at ? (cb.x - bb.x) / (cb.at - bb.at) : 0
      }
    }

    function cc(bb, cb) {
      return bb > cb && bb >= 600
    }

    function sc(bb) {
      return jb(new DOMMatrixReadOnly(getComputedStyle(bb).transform).m11)
    }

    function kc(bb, cb) {
      bb.style.transform = `rotateY(${-cb}deg)`, bb.classList.add("Turning")
    }

    function Wc(bb) {
      let {
        journal: cb
      } = bb;
      const {
        t: sb
      } = (0, yb.E)(), kb = (0, Bb.h)(Nb, cb.getPages()), Wb = (0, tb.c)(cc), [Ub, Ib] = (0, ab.useState)((() => function(bb) {
        const cb = bb.findIndex((bb => bb.active));
        return -1 !== cb ? cb : Math.max(0, bb.findIndex((bb => "open" === bb.state)))
      }(kb))), fb = (0, ab.useRef)(null), Mb = (0, ab.useRef)(null), Xb = (0, ab.useRef)({
        Forward: null,
        Back: null
      }), nb = Wb ? 2 : 1, mb = Wb ? 180 : 90, lb = Ub - Ub % nb, Qb = lb > 0, eb = lb + nb < kb.length, Cb = (0, ab.useCallback)((() => {
        const bb = Mb.current;
        return null === bb ? lb : (Mb.current = null, bb.animation.cancel(), (cb = Xb.current[bb.direction]).style.transform = "", cb.classList.remove("Turning"), null === bb.next ? lb : (Ib(bb.next), bb.next));
        var cb
      }), [lb]), Vb = (0, ab.useCallback)(((bb, cb, sb, kb) => {
        const Wb = Xb.current[bb],
          ab = sc(Wb),
          Tb = cb === ("Forward" === bb) ? mb : 0;
        kc(Wb, Tb);
        const Ub = Wb.animate([{
          transform: `rotateY(${-ab}deg)`
        }, {
          transform: `rotateY(${-Tb}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : pb(ab, Tb, Wb.offsetWidth, mb, Tb > ab ? -sb : sb),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        Mb.current = {
          direction: bb,
          animation: Ub,
          next: cb ? kb + ("Forward" === bb ? nb : -nb) : null
        }, Ub.onfinish = () => {
          var bb;
          (null === (bb = Mb.current) || void 0 === bb ? void 0 : bb.animation) === Ub && Cb()
        }
      }), [nb, mb, Cb]), Lb = (0, ab.useCallback)((bb => {
        if (null !== fb.current) return;
        const cb = Cb();
        ("Forward" === bb ? cb + nb < kb.length : cb > 0) && Vb(bb, !0, 0, cb)
      }), [Cb, Vb, nb, kb.length]);
      (0, ab.useEffect)((() => {
        cb.onOpened()
      }), [cb]), (0, ab.useEffect)((() => () => {
        var bb;
        null === (bb = Mb.current) || void 0 === bb || bb.animation.cancel()
      }), []), (0, ab.useEffect)((() => {
        const bb = bb => {
          var cb;
          bb.pointerId !== (null === (cb = fb.current) || void 0 === cb ? void 0 : cb.pointerId) || fb.current.following || (fb.current = null)
        };
        return window.addEventListener("pointerup", bb), () => {
          window.removeEventListener("pointerup", bb)
        }
      }), []), (0, gb.e)((bb => ("ArrowLeft" === bb.code || "ArrowRight" === bb.code) && !(0, Hb.isTypingInInput)()), (bb => {
        bb.stopPropagation(), Lb("ArrowLeft" === bb.code ? "Back" : "Forward")
      }));
      const Yb = (bb, cb, sb) => {
          const kb = function(bb, cb, sb, kb) {
            return (bb < 0 ? sb : kb) ? vb.d.clampAbs(bb, cb) : Math.sign(bb) * cb * (1 - 1 / (.55 * Math.abs(bb) / cb + 1))
          }(bb.base + sb, nb * bb.width, eb, Qb);
          return "Forward" === cb ? Math.min(kb, 0) : Math.max(kb, 0)
        },
        Pb = (bb, cb) => {
          const sb = fb.current;
          if (fb.current = null, null === sb.direction) return;
          sb.speed.add(bb, cb);
          const kb = sb.speed.get(),
            Wb = Yb(sb, sb.direction, bb - sb.x);
          Vb(sb.direction, null !== function(bb, cb, sb, kb, Wb) {
            if (Math.abs(cb) >= .3 ? Math.sign(cb) !== Math.sign(bb) : Math.abs(bb) < .5 * sb) return null;
            const ab = bb < 0 ? "Forward" : "Back";
            return ("Forward" === ab ? kb : Wb) ? ab : null
          }(Wb, kb, nb * sb.width, eb, Qb), kb, lb)
        },
        Db = kb.some((bb => bb.active)),
        Eb = (bb, sb, Wb) => (0, rb.jsx)(Rb, {
          className: bb,
          page: sb >= 0 && sb < kb.length ? kb[sb] : void 0,
          hidden: Wb,
          building: Db,
          journal: cb
        });
      return (0, rb.jsx)(Jb.c, {
        close: Tb.g,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, rb.jsxs)("section", {
          className: ub()("PlotsJournal", {
            Spread: Wb
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": sb("plotsGame:journalTitle"),
          children: [(0, rb.jsx)(hb.j, {
            className: "PlotsJournalClose",
            onClick: Tb.g
          }), (0, rb.jsx)(ac, {
            direction: "Back",
            disabled: !Qb,
            onTurn: Lb
          }), (0, rb.jsx)("div", {
            className: "PlotsJournalBookPages",
            onPointerDown: bb => {
              var cb;
              if (!bb.isPrimary || 0 !== bb.button || null !== Mb.current && null !== bb.target.closest("button")) return;
              const sb = new bc;
              sb.add(bb.clientX, bb.timeStamp);
              const kb = Xb.current.Forward.offsetWidth,
                Wb = Mb.current;
              Mb.current = null;
              let ab = 0;
              if (null !== Wb) {
                const cb = Xb.current[Wb.direction],
                  sb = sc(cb);
                Wb.animation.cancel(), kc(cb, sb), ab = function(bb, cb, sb, kb) {
                  return (bb < 0 ? sb : kb) ? bb : Math.sign(bb) * cb * (1 / (1 - Math.min(Math.abs(bb) / cb, .99)) - 1) / .55
                }(function(bb, cb, sb, kb) {
                  return sb * (xb(cb) - xb("Forward" === bb ? 0 : kb))
                }(Wb.direction, sb, kb, mb), nb * kb, eb, Qb), bb.currentTarget.setPointerCapture(bb.pointerId)
              }
              fb.current = {
                pointerId: bb.pointerId,
                x: bb.clientX,
                y: bb.clientY,
                base: ab,
                width: kb,
                following: null !== Wb,
                direction: null !== (cb = null === Wb || void 0 === Wb ? void 0 : Wb.direction) && void 0 !== cb ? cb : null,
                speed: sb
              }
            },
            onPointerMove: bb => {
              const cb = fb.current;
              if (null === cb || bb.pointerId !== cb.pointerId) return;
              if (0 === bb.buttons) return void Pb(bb.clientX, bb.timeStamp);
              const sb = bb.clientX - cb.x;
              !cb.following && function(bb, cb) {
                return Math.abs(bb) > 8 && Math.abs(bb) > Math.abs(cb)
              }(sb, bb.clientY - cb.y) && (cb.following = !0, cb.direction = sb < 0 ? "Forward" : "Back", bb.currentTarget.setPointerCapture(bb.pointerId)), null !== cb.direction && (cb.speed.add(bb.clientX, bb.timeStamp), kc(Xb.current[cb.direction], function(bb, cb, sb, kb) {
                const Wb = sb * xb("Forward" === bb ? 0 : kb) + cb;
                return vb.d.clamp(jb(Wb / sb), 0, kb)
              }(cb.direction, Yb(cb, cb.direction, sb), cb.width, mb)))
            },
            onPointerUp: bb => {
              var cb;
              bb.pointerId === (null === (cb = fb.current) || void 0 === cb ? void 0 : cb.pointerId) && Pb(bb.clientX, bb.timeStamp)
            },
            onPointerCancel: bb => {
              const cb = fb.current;
              bb.pointerId === (null === cb || void 0 === cb ? void 0 : cb.pointerId) && (fb.current = null, null !== cb.direction && Vb(cb.direction, !1, 0, lb))
            },
            children: (0, rb.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [Wb && Eb("Left", lb - 2, !0), Eb("Right", lb + 2 * nb - 1, !0), (0, rb.jsxs)("div", {
                ref: bb => {
                  Xb.current.Back = bb
                },
                className: "PlotsJournalLeaf Back",
                children: [Eb("Recto", lb - 1, !0), Wb && Eb("Verso", lb, !1)]
              }), (0, rb.jsxs)("div", {
                ref: bb => {
                  Xb.current.Forward = bb
                },
                className: "PlotsJournalLeaf Forward",
                children: [Eb("Recto", lb + nb - 1, !1), Wb && Eb("Verso", lb + nb, !0)]
              })]
            })
          }), (0, rb.jsx)(ac, {
            direction: "Forward",
            disabled: !eb,
            onTurn: Lb
          })]
        })
      })
    }

    function ac(bb) {
      let {
        direction: cb,
        disabled: sb,
        onTurn: kb
      } = bb;
      const {
        t: Wb
      } = (0, yb.E)();
      return (0, rb.jsx)("div", {
        className: ub()("PlotsJournalArrow", cb),
        children: (0, rb.jsx)(hb.d, {
          disabled: sb,
          ariaLabel: Wb("Forward" === cb ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            kb(cb)
          },
          children: (0, rb.jsx)(Yb.b, {
            name: "angle-up"
          })
        })
      })
    }
    var Tc = sb(36235),
      Uc = sb(1858),
      Ic = sb(1915);
    const Hc = "plotsStepChanged",
      fc = "plotsPlotChanged";
    class Mc {
      constructor() {
        this.step = ["none"], this.plot = ["none"]
      }
      getStep() {
        return this.step
      }
      receiveStep(bb) {
        this.step = bb, fb.j.QQ(Hc, bb, !0)
      }
      getPlot() {
        return this.plot
      }
      receivePlot(bb) {
        this.plot = bb, fb.j.QQ(fc, bb, !0)
      }
    }
    const Xc = "KeyJ";

    function nc(bb) {
      let {
        hud: cb,
        journal: sb
      } = bb;
      const kb = (0, Bb.h)(Nb, sb.getPages()),
        Wb = (0, Bb.h)(Hc, cb.getStep()),
        {
          isTouchScreen: ab
        } = (0, Ub.p)(["isTouchScreen"]),
        {
          t: fb
        } = (0, yb.E)(),
        Mb = null !== kb && "none" === Wb[0];
      return (0, gb.e)((bb => null !== kb && bb.code === Xc && !bb.repeat && !(0, Hb.isTypingInInput)()), (bb => {
        (0, Ib.C)(bb, Mb, Tb.m)
      })), Mb ? (0, rb.jsx)(Tc.e, {
        placement: "topRight",
        children: (0, rb.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, rb.jsxs)("button", {
            type: "button",
            className: ub()("PlotsJournalButton SmallTextBold", {
              Touch: ab
            }),
            onClick: Tb.m,
            children: [(0, rb.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, rb.jsx)(Uc.d, {
                itemName: "Book",
                amount: 0
              })
            }), fb("plotsGame:journalButton"), !ab && (0, rb.jsx)(Ic.d, {
              className: "PlotsJournalButtonKey",
              keyCode: Xc
            })]
          })
        })
      }) : null
    }
    var mc = sb(38020),
      lc = sb(37780),
      Qc = sb(36502),
      ec = sb(9057),
      Cc = sb(9067),
      Nc = sb(37403);
    const Vc = new Map([
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
      Lc = [...Qc.d.blockRemoveActionRoots, ...lc.d, ...ec.k, "Board", "Code Block", "Custom Lobby Block"],
      uc = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let Yc = null;

    function hc() {
      return Yc ??= function() {
        const bb = Jc(),
          cb = Math.max(...bb.map((bb => Pb.g[bb].id))) + 1,
          sb = new Int32Array(cb),
          kb = new Int32Array(cb),
          Wb = new Uint8Array(cb).fill(1),
          ab = new Uint8Array(cb),
          Tb = new Uint8Array(cb),
          Ub = new Array(cb).fill("Air"),
          Ib = new Map,
          Hb = bb => {
            let cb = Ib.get(bb);
            return void 0 === cb && (cb = Ib.size + 1, Ib.set(bb, cb)), cb
          },
          fb = new Set(Lc);
        for (const Xb of bb) {
          var Mb;
          const {
            id: bb,
            meta: cb,
            altActionable: Ib,
            canBePlacedOver: nb
          } = Pb.g[Xb];
          sb[bb] = Hb(gc(Xb));
          const mb = cb.stairsCorner;
          if (null === mb) kb[bb] = sb[bb];
          else {
            const sb = mb.endsWith("Right");
            kb[bb] = Hb(`${cb.rootName}|rot${sb?cb.rot%4+1:cb.rot}|${cb.halfblockPlacement}|${mb.replace("Right","Left")}`)
          }
          Wb[bb] = nb ? 1 : 0, ab[bb] = Ib || null !== cb.open || Xb in Nc.d || fb.has(cb.rootName) || void 0 !== (0, lc.f)(cb.rootName) ? 1 : 0;
          const {
            rootName: lb
          } = cb;
          Tb[bb] = null !== cb.open || lc.d.includes(lb) || lb.includes("Bookshelf") || lb.includes("Mailbox") ? 1 : 0, Ub[bb] = null !== (Mb = (0, mc.e)(bb)) && void 0 !== Mb ? Mb : lb
        }
        return {
          kinds: sb,
          shapes: kb,
          empty: Wb,
          inUse: ab,
          ownAltActionMessage: Tb,
          placingItems: Ub
        }
      }(), Yc
    }

    function Jc() {
      return Object.keys(Pb.g).filter((bb => Pb.g[bb].name === bb))
    }

    function gc(bb) {
      var cb;
      const sb = Pb.g[bb],
        {
          rootName: kb,
          rot: Wb
        } = sb.meta,
        [, ...ab] = (null !== (cb = sb.rootMetaDesc) && void 0 !== cb ? cb : bb).split("|"),
        Tb = ab.filter((bb => !("meta" === bb || uc.test(bb) || (0, Cc.C)(sb) && /^[nesw]+$/.test(bb) || ec.k.includes(kb) && /^[lrud]+$/.test(bb) || vb.K.includes(kb) && /^(left|right)$/.test(bb))));
      return [kb, ...Tb].map((bb => "fenceGate" === sb.model && bb === `rot${Wb}` ? "rot" + ((Wb - 1) % 2 + 1) : bb)).join("|")
    }

    function Bc(bb, cb) {
      const {
        kinds: sb,
        shapes: kb
      } = hc();
      return sb[bb] === sb[cb] || kb[bb] === kb[cb]
    }

    function tc(bb) {
      return 1 === hc().empty[bb]
    }

    function yc(bb) {
      return hc().placingItems[bb]
    }

    function Pc(bb) {
      return Vc.get(Pb.g[bb].meta.rootName)
    }
    var Dc = sb(9050),
      Ec = sb(9064);
    const ic = [0, 0, 0, 1, 1, 1],
      Oc = (0, Dc.b)([
        [2, 0, 2, 6, 6, 6]
      ]),
      Gc = (0, Dc.b)([
        [3, 0, 3, 5, 5, 5]
      ]),
      Kc = (0, Dc.b)([
        [3, 3, 3, 5, 8, 5]
      ]),
      Zc = [0, 1, 2, 3].map((bb => (0, Dc.b)((0, Dc.m)([
        [3, 2, 0, 5, 7, 3]
      ], bb))));

    function zc(bb) {
      const {
        hQ: cb,
        model: sb,
        blockModel: kb,
        meta: Wb
      } = Pb.g[bb];
      return void 0 !== cb ? cb : "CentreCross" === sb ? Oc : null !== kb && void 0 !== kb && kb.startsWith("torch") ? Wb.halfblockPlacement === Ec.e.side ? Zc[Wb.rot - 1] : Wb.halfblockPlacement === Ec.e.top ? Kc : Gc : ic
    }
    var qc = sb(36469),
      dc = sb(223);

    function Ac(bb, cb) {
      const sb = dc.e.YC / 2;
      return bb[0] < cb[0] + sb && bb[0] + 1 > cb[0] - sb && bb[1] < cb[1] + dc.e.JC && bb[1] + 1 > cb[1] && bb[2] < cb[2] + sb && bb[2] + 1 > cb[2] - sb
    }

    function wc(bb, cb, sb, kb, Wb) {
      const ab = Math.hypot(...cb.dir);
      if (!Number.isFinite(ab) || 0 === ab) return -1;
      const {
        from: Tb,
        reach: Ub,
        solid: Ib
      } = cb, Hb = [cb.dir[0] / ab, cb.dir[1] / ab, cb.dir[2] / ab], fb = null === Ib ? Ub : Math.min(Ub, function(bb, cb, sb) {
        const kb = rc(bb, cb, sb);
        if (kb !== 1 / 0) return kb;
        return (sb[0] + .5 - bb[0]) * cb[0] + (sb[1] + .5 - bb[1]) * cb[1] + (sb[2] + .5 - bb[2]) * cb[2]
      }(Tb, Hb, Ib) + .75);
      let Mb = -1,
        Xb = 1 / 0,
        nb = 1 / 0;
      for (let mb = 0; mb < bb.length; mb += 4) {
        const cb = [bb[mb], bb[mb + 1], bb[mb + 2]],
          ab = Wb(mb) ? Ub : fb;
        let Ib = -1,
          lb = rc(Tb, Hb, cb);
        if (lb > ab) {
          const bb = [cb[0] + .5 - Tb[0], cb[1] + .5 - Tb[1], cb[2] + .5 - Tb[2]];
          if (lb = bb[0] * Hb[0] + bb[1] * Hb[1] + bb[2] * Hb[2], lb <= 0 || lb > ab) continue;
          if (Ib = Math.hypot(bb[0] - lb * Hb[0], bb[1] - lb * Hb[1], bb[2] - lb * Hb[2]), Ib > .7 || !kb(mb)) continue
        }(Ib < Xb || Ib === Xb && lb < nb) && sb(mb) && (Mb = mb, Xb = Ib, nb = lb)
      }
      return Mb
    }

    function rc(bb, cb, sb) {
      let kb = 0,
        Wb = 1 / 0;
      for (let ab = 0; ab < 3; ab++) {
        const Tb = sb[ab] - bb[ab];
        if (0 === cb[ab]) {
          if (Tb > 0 || Tb + 1 < 0) return 1 / 0;
          continue
        }
        const Ub = Tb / cb[ab],
          Ib = (Tb + 1) / cb[ab];
        kb = Math.max(kb, Math.min(Ub, Ib)), Wb = Math.min(Wb, Math.max(Ub, Ib))
      }
      return kb <= Wb ? kb : 1 / 0
    }
    var oc = sb(37657),
      Sc = sb(38126);
    const Rc = [1, 1, 1];
    class vc {
      constructor(bb) {
        this.api = bb, this.meshes = null, this.shown = null
      }
      show(bb) {
        if (!(0, qc.f)(bb, this.shown))
          if (this.shown = null === bb ? null : [bb[0], bb[1], bb[2]], null !== this.meshes)
            for (const cb of this.meshes) this.api.setGameMesh(cb, null === bb ? {
              visible: !1
            } : {
              anchor: bb,
              visible: !0
            });
          else if (null !== bb) {
          const cb = [oc.c, oc.c, oc.c, 0, 0, 0];
          this.meshes = [this.build([cb], oc.e, bb), this.build((0, oc.b)(), oc.i, bb)]
        }
      }
      dispose() {
        for (const cb of null !== (bb = this.meshes) && void 0 !== bb ? bb : []) {
          var bb;
          this.api.disposeGameMesh(cb)
        }
        this.meshes = null, this.shown = null
      }
      build(bb, cb, sb) {
        const kb = [],
          Wb = [];
        for (const [ab, Tb, Ub, Ib, Hb, fb] of bb)(0, Sc.g)(kb, Wb, [Ib + .5, Hb + .5, fb + .5], [ab, Tb, Ub]);
        return this.api.createGameMesh({
          positions: kb,
          indices: Wb
        }, {
          rgb: Rc,
          alpha: cb,
          onTop: !0
        }, sb)
      }
    }
    class Fc {
      constructor(bb) {
        this.api = bb, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(bb) {
        const cb = dc.e.qm;
        this.chunks = [];
        for (let sb = 0; sb < bb.length; sb += 3) {
          const kb = Math.floor(bb[sb] / cb),
            Wb = Math.floor(bb[sb + 1] / cb),
            ab = Math.floor(bb[sb + 2] / cb);
          this.watches(kb, Wb, ab) || this.chunks.push(kb, Wb, ab)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const bb = performance.now();
        if (bb - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = bb;
        let cb = !1;
        for (let sb = 0; sb < this.chunks.length; sb += 3) {
          const bb = this.api.getChunkVersion(this.chunks[sb], this.chunks[sb + 1], this.chunks[sb + 2]);
          this.versions[sb / 3] !== bb && (this.versions[sb / 3] = bb, cb = !0)
        }
        return cb
      }
      watches(bb, cb, sb) {
        for (let kb = 0; kb < this.chunks.length; kb += 3)
          if (this.chunks[kb] === bb && this.chunks[kb + 1] === cb && this.chunks[kb + 2] === sb) return !0;
        return !1
      }
    }
    const xc = .35,
      jc = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      pc = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      bs = [.95, .2, .15];
    class cs {
      constructor() {
        this.groups = []
      }
      add(bb, cb, sb, kb, Wb) {
        let ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ic;
        for (const Tb of this.groups)
          if (Ws(Tb, kb, Wb)) return Tb.cells.push(bb, cb, sb), void Tb.boxes.push(ab);
        this.groups.push({
          rgb: kb,
          look: Wb,
          cells: [bb, cb, sb],
          boxes: [ab]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class ss {
      constructor(bb) {
        this.api = bb, this.shown = []
      }
      show(bb) {
        const cb = [];
        for (const sb of bb) {
          const bb = this.shown.findIndex((bb => {
            let {
              group: cb
            } = bb;
            return Ws(cb, sb.rgb, sb.look) && as(cb, sb)
          })); - 1 === bb ? cb.push(this.build(sb)) : (cb.push(this.shown[bb]), this.shown.splice(bb, 1))
        }
        this.dispose(), this.shown = cb
      }
      dispose() {
        for (const {
            meshes: bb
          }
          of this.shown)
          for (const cb of bb) this.api.disposeGameMesh(cb);
        this.shown = []
      }
      build(bb) {
        const {
          rgb: cb,
          look: sb,
          boxes: kb
        } = bb, Wb = [cb[0] + (1 - cb[0]) * xc, cb[1] + (1 - cb[1]) * xc, cb[2] + (1 - cb[2]) * xc], ab = [this.buildMesh(bb.cells, cb, sb.alpha, ((bb, cb, Wb, ab) => {
          ks(bb, cb, Wb, kb[ab], sb.size, !1)
        })), this.buildMesh(bb.cells, Wb, sb.alpha, ((bb, cb, Wb, ab) => {
          ks(bb, cb, Wb, kb[ab], sb.size, !0)
        }))];
        return sb.crossed && ab.push(this.buildMesh(bb.cells, cb, .9, ((bb, cb, kb) => {
          (0, Sc.j)(bb, cb, kb, sb.size + .01, .12)
        }))), {
          group: bb,
          meshes: ab
        }
      }
      buildMesh(bb, cb, sb, kb) {
        const Wb = [bb[0], bb[1], bb[2]],
          ab = [],
          Tb = [];
        for (let Ub = 0; Ub < bb.length; Ub += 3) kb(ab, Tb, [bb[Ub] - Wb[0] + .5, bb[Ub + 1] - Wb[1] + .5, bb[Ub + 2] - Wb[2] + .5], Ub / 3);
        return this.api.createGameMesh({
          positions: ab,
          indices: Tb
        }, {
          rgb: [cb[0], cb[1], cb[2]],
          alpha: sb
        }, Wb)
      }
    }

    function ks(bb, cb, sb, kb, Wb, ab) {
      for (let Tb = 0; Tb < kb.length; Tb += 6) {
        const Ub = [0, 0, 0],
          Ib = [0, 0, 0];
        for (let bb = 0; bb < 3; bb++) Ub[bb] = sb[bb] + ((kb[Tb + bb] + kb[Tb + bb + 3]) / 2 - .5) * Wb, Ib[bb] = (kb[Tb + bb + 3] - kb[Tb + bb]) * Wb;
        (0, Sc.d)(bb, cb, Ub, Ib, ab)
      }
    }

    function Ws(bb, cb, sb) {
      return bb.rgb[0] === cb[0] && bb.rgb[1] === cb[1] && bb.rgb[2] === cb[2] && bb.look === sb
    }

    function as(bb, cb) {
      if (bb.cells.length !== cb.cells.length) return !1;
      for (let sb = 0; sb < bb.cells.length; sb++)
        if (bb.cells[sb] !== cb.cells[sb]) return !1;
      return bb.boxes.every(((bb, sb) => bb === cb.boxes[sb]))
    }

    function Ts(bb, cb) {
      return bb.getClientOption(cb, "blockReach") + 1
    }
    class Us {
      constructor(bb, cb, sb) {
        this.api = bb, this.localPlayerId = cb, this.pickNext = sb, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(bb) {
        const [cb, , sb] = bb.cameraDirection, kb = Math.hypot(cb, sb);
        kb > .001 && (this.heading = [cb / kb, sb / kb])
      }
      tapped(bb, cb, sb) {
        const kb = Ts(this.api, this.localPlayerId),
          {
            origin: Wb,
            direction: ab
          } = this.api.getActionRay(),
          Tb = [...Wb],
          Ub = [
            [Tb, [Tb[0] + ab[0] * kb, Tb[1] + ab[1] * kb, Tb[2] + ab[2] * kb]]
          ];
        null !== bb && Ub.push([Tb, (0, qc.e)(bb)]), this.tap = {
          lines: Ub,
          next: cb,
          ms: sb
        }
      }
      filled(bb, cb) {
        this.tap = null, this.turnFrom(bb, cb), this.retry(cb)
      }
      arrived(bb, cb) {
        const {
          tap: sb
        } = this;
        if (null === sb || cb - sb.ms > 1500) return null;
        const kb = (0, qc.e)(bb);
        return (0, qc.f)(sb.next, bb) || sb.lines.some((bb => {
          let [cb, sb] = bb;
          return function(bb, cb, sb) {
            const kb = [sb[0] - cb[0], sb[1] - cb[1], sb[2] - cb[2]],
              Wb = [bb[0] - cb[0], bb[1] - cb[1], bb[2] - cb[2]],
              ab = kb[0] ** 2 + kb[1] ** 2 + kb[2] ** 2,
              Tb = 0 === ab ? 0 : Math.min(1, Math.max(0, (Wb[0] * kb[0] + Wb[1] * kb[1] + Wb[2] * kb[2]) / ab));
            return Math.hypot(Wb[0] - kb[0] * Tb, Wb[1] - kb[1] * Tb, Wb[2] - kb[2] * Tb)
          }(kb, cb, sb) <= .9
        })) ? (this.tap = null, this.turnFrom(bb, cb), sb.ms) : null
      }
      turnFrom(bb, cb) {
        this.pending = {
          from: bb,
          ms: cb,
          turnMs: Math.max(50, Math.min(250, cb - this.lastFillMs))
        }, this.lastFillMs = cb
      }
      retry(bb) {
        const {
          pending: cb
        } = this;
        if (null === cb) return;
        if (bb - cb.ms > 1500) return void(this.pending = null);
        const sb = this.pickNext((0, qc.e)(cb.from), (bb => (0, qc.f)(bb, cb.from)));
        if (null === sb) return;
        this.pending = null;
        const {
          turning: kb
        } = this;
        if (null !== kb && bb < kb.endMs && (0, qc.f)(kb.to, sb)) return;
        const Wb = this.api.getActionRay().origin,
          ab = [sb[0] + .5 - Wb[0], sb[1] + .5 - Wb[1], sb[2] + .5 - Wb[2]],
          Tb = Math.hypot(ab[0], ab[2]);
        if (Tb < .3) {
          const bb = Math.max(Tb, .001);
          ab[0] = this.heading[0] * bb, ab[2] = this.heading[1] * bb
        }
        this.api.turnCamera(ab, cb.turnMs), this.turning = {
          to: sb,
          endMs: bb + cb.turnMs
        }
      }
    }
    class Is {
      constructor(bb, cb, sb) {
        this.api = bb, this.localPlayerId = cb, this.juice = sb, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], this.lastFilled = null, this.lastSeenFilled = null, this.playerCells = [], this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = null, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new Fc(bb), this.meshes = new ss(bb), this.outline = new vc(bb), this.turn = new Us(bb, cb, ((bb, cb) => this.pickNext(bb, cb)))
      }
      Km(bb) {
        const cb = "active" === bb[0] ? `${bb[1]}|${bb[3]}|${bb[4]}|${bb[5]}|${bb[6]}` : "";
        if ("active" !== bb[0]) "built" === bb[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , sb, kb, Wb, ab] = bb;
          cb !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = sb) : sb === this.layerY ? this.burstUnlisted(kb) : sb > this.layerY && this.finishLayer(sb), this.layerY = sb, this.layerCells.has(sb) || this.layerCells.set(sb, kb.filter(fs)), this.ghostCells = kb, this.palette = Wb, this.occupiedCells = ab
        }
        cb !== this.blueprint && (this.blueprint = cb, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((bb => this.api.blockNameToBlockId(bb))), this.chunkWatch.watch([...this.ghostCells.filter(fs), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(bb) {
        this.burstUnlisted([]), bb > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = bb)
      }
      aX() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const bb = performance.now();
        let cb = !1;
        for (const [Wb, ab] of this.foreseen) {
          var sb;
          if (bb - ab > 1e3) this.foreseen.delete(Wb), cb = !0, (null === (sb = this.lastFilled) || void 0 === sb ? void 0 : sb.join()) === Wb && (this.lastFilled = this.lastSeenFilled)
        }
        const kb = Hs(this.api.getPositionView(this.localPlayerId));
        (cb || kb.some(((bb, cb) => bb !== this.playerCells[cb]))) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(bb) {
        const cb = new Set;
        for (let Wb = 0; Wb < bb.length; Wb += 4) cb.add(`${bb[Wb]},${bb[Wb+1]},${bb[Wb+2]}`);
        const sb = [],
          {
            ghostCells: kb
          } = this;
        for (let Wb = 0; Wb < kb.length; Wb += 4) {
          const bb = `${kb[Wb]},${kb[Wb+1]},${kb[Wb+2]}`;
          !cb.has(bb) && this.open.delete(bb) && sb.push(this.filledCell(Wb))
        }
        this.burst(sb)
      }
      refresh() {
        const {
          ghostCells: bb,
          palette: cb,
          occupiedCells: sb
        } = this, kb = new cs, Wb = new Set, ab = [], Tb = [];
        for (let Ub = 0; Ub < bb.length; Ub += 4) {
          const [sb, Ib, Hb, fb] = [bb[Ub], bb[Ub + 1], bb[Ub + 2], bb[Ub + 3]], Mb = this.api.getBlockId(sb, Ib, Hb), Xb = `${sb},${Ib},${Hb}`, nb = Bc(this.blockIds[fb], Mb);
          !nb && tc(Mb) ? kb.add(sb, Ib, Hb, Pc(cb[fb]), jc, zc(cb[fb])) : nb ? this.open.has(Xb) && ab.push(this.filledCell(Ub)) : kb.add(sb, Ib, Hb, bs, pc), !nb && this.api.isBlockInLoadedChunk(sb, Ib, Hb) && (Wb.add(Xb), Tb.push(sb, Ib, Hb, tc(Mb) ? 0 : 1))
        }
        this.open = Wb, this.nextCells = Tb;
        for (let Ub = 0; Ub < sb.length; Ub += 3) {
          const [bb, cb, Wb] = [sb[Ub], sb[Ub + 1], sb[Ub + 2]];
          tc(this.api.getBlockId(bb, cb, Wb)) || kb.add(bb, cb, Wb, bs, pc)
        }
        this.meshes.show(kb.toArray()), this.burst(ab), this.showNext(), this.turn.retry(performance.now())
      }
      burst(bb) {
        const cb = performance.now(),
          sb = [];
        for (const [Wb, ab, Tb] of bb) {
          const bb = [Wb, ab, Tb];
          this.lastSeenFilled = bb, this.foreseen.delete(bb.join()) || sb.push(bb)
        }
        const kb = this.isHolding(cb);
        for (const Wb of sb) {
          if (this.lastFilled = Wb, kb && this.pressFilled) {
            this.turn.filled(Wb, cb);
            continue
          }
          const bb = this.turn.arrived(Wb, cb);
          if (null !== bb) {
            this.pressFilled = kb;
            for (const [cb, sb] of this.foreseen) sb <= bb && this.foreseen.delete(cb)
          }
        }
        this.juice.filled(bb)
      }
      showNext() {
        var bb;
        const cb = this.api.getPositionView(this.localPlayerId);
        this.playerCells.splice(0, 1 / 0, ...Hs(cb));
        const sb = this.lastFilled;
        this.nextCell = this.pickNext(null === sb ? [cb[0], cb[1] + 1, cb[2]] : (0, qc.e)(sb), (() => !1)), this.outline.show(null !== (bb = this.aimed) && void 0 !== bb ? bb : this.nextCell)
      }
      pickNext(bb, cb) {
        const sb = this.api.getPositionView(this.localPlayerId),
          kb = [sb[0], sb[1] + dc.e.JC * dc.e.playerEyeToHeightRatio, sb[2]],
          Wb = Ts(this.api, this.localPlayerId),
          {
            nextCells: ab
          } = this,
          Tb = bb => [ab[bb], ab[bb + 1], ab[bb + 2]],
          Ub = function(bb, cb, sb, kb, Wb, ab) {
            let Tb = -1,
              Ub = -1,
              Ib = 1 / 0;
            for (let Hb = 0; Hb < bb.length; Hb += cb) {
              const cb = (ab(Hb) ? 2 : 0) + (kb(Hb) ? 1 : 0);
              if (cb < Ub || Wb(Hb)) continue;
              const fb = (bb[Hb] + .5 - sb[0]) ** 2 + (bb[Hb + 1] + .5 - sb[1]) ** 2 + (bb[Hb + 2] + .5 - sb[2]) ** 2;
              (cb > Ub || fb < Ib) && (Tb = Hb, Ub = cb, Ib = fb)
            }
            return Tb
          }(ab, 4, bb, (bb => 1 === ab[bb + 3]), (bb => {
            const kb = Tb(bb);
            return Ac(kb, sb) || this.foreseen.has(kb.join()) || cb(kb)
          }), (bb => function(bb, cb, sb) {
            return (cb[0] + .5 - bb[0]) ** 2 + (cb[1] + .5 - bb[1]) ** 2 + (cb[2] + .5 - bb[2]) ** 2 <= sb ** 2
          }(kb, Tb(bb), Wb)));
        return -1 === Ub ? null : Tb(Ub)
      }
      afterRender(bb) {
        var cb;
        this.turn.look(bb);
        const sb = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === sb ? null : sb.position), this.outline.show(null !== (cb = this.aimed) && void 0 !== cb ? cb : this.nextCell)
      }
      isHolding(bb) {
        return null !== this.altMs && bb - this.altMs <= 500
      }
      attemptAltAction(bb) {
        const cb = performance.now();
        if (this.isHolding(cb) || (this.pressFilled = !1), this.altMs = cb, this.pressFilled) return "preventPlacement";
        const sb = this.findAimed(bb);
        if (null !== sb) return this.foreseen.set(sb.join(), cb), this.lastFilled = sb, this.aimed = null, this.showNext(), this.turn.filled(sb, cb), this.pressFilled = !0, "preventPlacement";
        null !== this.nextCell && this.turn.tapped(bb, this.nextCell, cb)
      }
      findAimed(bb) {
        return function(bb, cb, sb, kb, Wb, ab, Tb) {
          const Ub = bb.Xcb(cb),
            Ib = null === Ub || null === bb.blockNameToBlockId(Ub.name, !0) ? null : Ub.name,
            Hb = bb.getPositionView(cb),
            {
              origin: fb,
              direction: Mb
            } = bb.getActionRay(),
            Xb = wc(kb, {
              from: fb,
              dir: Mb,
              reach: Ts(bb, cb),
              solid: sb
            }, (cb => {
              const sb = [kb[cb], kb[cb + 1], kb[cb + 2]];
              return !Bc(Wb[kb[cb + 3]], bb.getBlockId(...sb)) && !Tb.has(sb.join()) && bb.isBlockInLoadedChunk(...sb) && !Ac(sb, Hb)
            }), (bb => null === Ib || Ib === yc(Wb[kb[bb + 3]])), (bb => null !== ab && kb[bb] === ab[0] && kb[bb + 1] === ab[1] && kb[bb + 2] === ab[2]));
          return -1 === Xb ? null : [kb[Xb], kb[Xb + 1], kb[Xb + 2]]
        }(this.api, this.localPlayerId, bb, this.ghostCells, this.blockIds, this.nextCell, this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(bb) {
        const {
          ghostCells: cb
        } = this, [sb, kb, Wb] = Pc(this.palette[cb[bb + 3]]);
        return [cb[bb], cb[bb + 1], cb[bb + 2], sb, kb, Wb]
      }
    }

    function Hs(bb) {
      let [cb, sb, kb] = bb;
      const Wb = dc.e.YC / 2;
      return [Math.floor(cb), Math.floor(sb), Math.floor(kb), Math.floor(cb - Wb), Math.floor(cb + Wb), Math.floor(sb + dc.e.JC), Math.floor(kb - Wb), Math.floor(kb + Wb)]
    }

    function fs(bb, cb) {
      return cb % 4 !== 3
    }

    function Ms(bb, cb, sb, kb, Wb) {
      if (!bb.isBlockInLoadedChunk(cb, kb - 6, sb) || !bb.isBlockInLoadedChunk(cb, kb + 6 + Wb, sb) || !bb.canModifyBlockAt(cb, kb, sb)) return NaN;
      let ab = kb - 1;
      if (0 !== bb.getBlockId(cb, ab, sb)) {
        for (; ab < kb + 6 && 0 !== bb.getBlockId(cb, ab + 1, sb);) ab++;
        return ab
      }
      for (; ab > kb - 6;)
        if (ab--, 0 !== bb.getBlockId(cb, ab, sb)) return ab;
      return NaN
    }

    function Xs(bb, cb, sb, kb, Wb) {
      let ab = 0;
      for (let Tb = kb + 1; Tb <= kb + Wb; Tb++) 0 !== bb.getBlockId(cb, Tb, sb) && ab++;
      return ab
    }

    function ns(bb) {
      const cb = new Map;
      for (const Tb of bb) {
        var sb;
        if (Number.isNaN(Tb)) return null;
        cb.set(Tb, (null !== (sb = cb.get(Tb)) && void 0 !== sb ? sb : 0) + 1)
      }
      let kb = NaN,
        Wb = 0;
      for (const [Tb, Ub] of cb)(Ub > Wb || Ub === Wb && Tb < kb) && (kb = Tb, Wb = Ub);
      let ab = 0;
      for (const Tb of bb) ab += Math.abs(Tb - kb);
      return ab
    }

    function ms(bb, cb, sb, kb) {
      const {
        eye: Wb,
        forward: ab,
        tanHalfFovX: Tb,
        tanHalfFovY: Ub
      } = bb, [Ib, Hb] = function(bb) {
        let [cb, sb, kb] = bb;
        const Wb = Math.hypot(cb, kb),
          [ab, Tb] = [kb / Wb, -cb / Wb];
        return [
          [ab, 0, Tb],
          [sb * Tb, kb * ab - cb * Tb, -sb * ab]
        ]
      }(ab), [fb, Mb] = [cb * Tb, sb * Ub], Xb = ab[0] + fb * Ib[0] + Mb * Hb[0], nb = ab[1] + Mb * Hb[1], mb = ab[2] + fb * Ib[2] + Mb * Hb[2], lb = (kb - Wb[1]) / nb;
      return lb > 0 && lb < 1 / 0 ? [Wb[0] + lb * Xb, Wb[2] + lb * mb] : null
    }
    const ls = "plotsBlueprintPlacementChanged",
      Qs = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class es {
      constructor(bb, cb) {
        this.api = bb, this.localPlayerId = cb, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = bb => {
          var cb, sb, kb, ab;
          const Tb = null !== (cb = null === (sb = this.placing) || void 0 === sb ? void 0 : sb.rotation) && void 0 !== cb ? cb : 0,
            {
              size: Ub
            } = Ab(bb, Tb),
            Ib = this.api.aN(this.localPlayerId),
            [Hb, fb] = null !== (kb = null !== (ab = function(bb, cb, sb) {
              const [kb, Wb, ab] = cb, [Tb, Ub, Ib] = [Math.floor(sb[0]), Math.floor(sb[1]), Math.floor(sb[2])], Hb = 6 + Math.max(kb, ab) / 2, [fb, Mb] = [Math.ceil(Hb + kb / 2), Math.ceil(Hb + ab / 2)], [Xb, nb] = [Tb - fb, Ib - Mb], [mb, lb] = [2 * fb + 1, 2 * Mb + 1], Qb = new Float64Array(mb * lb), eb = new Uint16Array(mb * lb);
              for (let Lb = 0; Lb < mb; Lb++)
                for (let cb = 0; cb < lb; cb++) {
                  const sb = Ms(bb, Xb + Lb, nb + cb, Ub, Wb);
                  Qb[Lb * lb + cb] = sb, Number.isNaN(sb) || (eb[Lb * lb + cb] = Xs(bb, Xb + Lb, nb + cb, sb, Wb))
                }
              const Cb = [];
              let Nb = null,
                Vb = 1 / 0;
              for (let Lb = 0; Lb + kb <= mb; Lb++)
                for (let bb = 0; bb + ab <= lb; bb++) {
                  const [cb, Wb] = [Xb + Lb, nb + bb], Ub = Math.hypot(cb + kb / 2 - sb[0], Wb + ab / 2 - sb[2]);
                  if (Ub > Hb || Tb >= cb - 2 && Tb < cb + kb + 2 && Ib >= Wb - 2 && Ib < Wb + ab + 2) continue;
                  Cb.length = 0;
                  let fb = 0;
                  for (let sb = 0; sb < kb; sb++)
                    for (let cb = 0; cb < ab; cb++) Cb.push(Qb[(Lb + sb) * lb + bb + cb]), fb += eb[(Lb + sb) * lb + bb + cb];
                  const Mb = ns(Cb);
                  if (null === Mb) continue;
                  const mb = Ub + 3 * (Mb + fb);
                  mb < Vb && (Vb = mb, Nb = [cb, Wb])
                }
              return Nb
            }(this.api, Ub, Ib)) && void 0 !== ab ? ab : this.cornerOnTarget(Ub)) && void 0 !== kb ? kb : [Math.floor(Ib[0]) + 2, Math.floor(Ib[2])];
          this.placing = {
            id: bb,
            rotation: Tb,
            corner: [Hb, this.playerLevel(), fb],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null
          }, this.update(), this.api.sendCommand(`${Wb} preview`)
        }, this.rotate = () => {
          const {
            id: bb,
            rotation: cb,
            corner: sb
          } = this.placing, Wb = kb[(kb.indexOf(cb) + 1) % kb.length], [ab, , Tb] = Ab(bb, cb).size, [Ub, , Ib] = Ab(bb, Wb).size;
          this.moveTo(sb[0] + Math.floor(ab / 2) - Math.floor(Ub / 2), sb[2] + Math.floor(Tb / 2) - Math.floor(Ib / 2), Wb)
        }, this.hoverAt = (bb, cb) => {
          this.placing.hover = [bb, cb], this.moveCentreTo(this.camera, bb, cb)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (bb, cb) => {
          const sb = this.placing,
            {
              eye: kb,
              forward: Wb,
              tanHalfFovX: ab,
              tanHalfFovY: Tb
            } = this.camera,
            Ub = {
              eye: [kb[0], kb[1], kb[2]],
              forward: [Wb[0], Wb[1], Wb[2]],
              tanHalfFovX: ab,
              tanHalfFovY: Tb
            },
            Ib = sb.corner[1],
            Hb = ms(Ub, bb, cb, Ib);
          sb.hover = null, sb.drag = Hb && {
            view: Ub,
            ground: Hb,
            corner: [sb.corner[0], sb.corner[2]],
            level: Ib
          }
        }, this.dragTo = (bb, cb) => {
          const sb = this.placing.drag,
            kb = sb && ms(sb.view, bb, cb, sb.level);
          null !== sb && null !== kb && this.moveTo(sb.corner[0] + Math.round(kb[0] - sb.ground[0]), sb.corner[1] + Math.round(kb[1] - sb.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const bb = this.view;
          bb.waiting || (bb.blocked ? this.QQ({
            ...bb,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const bb = this.placing,
            {
              id: cb,
              rotation: sb,
              corner: kb
            } = bb;
          this.api.sendCommand(`${Wb} place ${cb} ${kb.join(" ")} ${sb}`), bb.sent = {
            atMs: performance.now(),
            corner: [...kb],
            rotation: sb,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${Wb} preview off`))
        }, this.chunkWatch = new Fc(bb), this.meshes = new ss(bb)
      }
      getView() {
        return this.view
      }
      aX() {
        const bb = this.placing;
        null !== bb && (null !== bb.sent && !bb.sent.timedOut && performance.now() - bb.sent.atMs > 3e3 ? (bb.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(bb) || this.chunkWatch.changed()) && this.update())
      }
      afterRender(bb) {
        const cb = this.placing;
        null !== cb && (! function(bb, cb) {
          for (let sb = 0; sb < 3; sb++) cb.eye[sb] = bb.cameraPosition[sb], cb.forward[sb] = bb.cameraDirection[sb];
          cb.tanHalfFovX = bb.tanHalfFovX, cb.tanHalfFovY = bb.tanHalfFovY
        }(bb, this.camera), null !== cb.hover && this.moveCentreTo(this.camera, cb.hover[0], cb.hover[1]))
      }
      Km(bb) {
        const cb = this.placing;
        if (null === cb || null === cb.sent || "active" !== bb[0]) return;
        const {
          sent: sb
        } = cb, [, kb, Wb, ab, Tb, Ub, Ib] = bb;
        Wb && kb === cb.id && Ib === sb.rotation && ab === sb.corner[0] && Tb === sb.corner[1] && Ub === sb.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(bb) {
        let [cb, , sb] = bb;
        const kb = this.api.getTargetedBlock();
        if (null === kb) return null;
        const [Wb, , ab] = kb.position;
        return [Wb - Math.floor(cb / 2), ab - Math.floor(sb / 2)]
      }
      playerLevel() {
        var bb;
        const [cb, sb, kb] = this.api.aN(this.localPlayerId);
        if (null !== (bb = this.api.getLocalPlayerMovement()) && void 0 !== bb && bb.onGround) return Math.ceil(sb - .01);
        const [Wb, ab, Tb] = [Math.floor(cb), Math.floor(sb), Math.floor(kb)];
        for (let Ub = ab; Ub >= ab - 2; Ub--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(Wb, Ub, Tb))) return Ub + 1;
        return ab
      }
      followPlayerLevel(bb) {
        if (Cs(bb)) return !1;
        const cb = this.playerLevel();
        return cb !== bb.corner[1] && (bb.corner[1] = cb, !0)
      }
      moveCentreTo(bb, cb, sb) {
        const kb = this.placing,
          Wb = ms(bb, cb, sb, kb.corner[1]);
        if (null !== Wb) {
          const [bb, , cb] = Ab(kb.id, kb.rotation).size;
          this.moveTo(Math.round(Wb[0] - bb / 2), Math.round(Wb[1] - cb / 2))
        }
      }
      moveTo(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const kb = this.placing;
        if (Cs(kb)) return;
        const [Wb, ab, Tb] = kb.corner;
        if (this.centreOnPlot(Wb, Tb) && !this.centreOnPlot(bb, cb, sb))
          if (this.centreOnPlot(bb, Tb, sb)) cb = Tb;
          else {
            if (!this.centreOnPlot(Wb, cb, sb)) return;
            bb = Wb
          } bb === Wb && cb === Tb && sb === kb.rotation || (kb.rotation = sb, kb.corner = [bb, ab, cb], this.update())
      }
      centreOnPlot(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: kb,
          corner: Wb
        } = this.placing, [ab, , Tb] = Ab(kb, sb).size;
        return this.api.canModifyBlockAt(bb + Math.floor(ab / 2), Wb[1], cb + Math.floor(Tb / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.QQ(null)
      }
      update() {
        const {
          id: bb,
          rotation: cb,
          corner: sb,
          refusals: kb
        } = this.placing, Wb = new cs, ab = [];
        let Tb = !1,
          Ub = 0;
        for (const {
            offset: fb,
            block: Mb
          }
          of Ab(bb, cb).cells) {
          const [bb, cb, kb] = [sb[0] + fb[0], sb[1] + fb[1], sb[2] + fb[2]];
          ab.push(bb, cb, kb);
          const Ib = !this.api.canModifyBlockAt(bb, cb, kb),
            Hb = this.api.getBlockId(bb, cb, kb),
            Xb = !tc(Hb) && !Bc(this.api.blockNameToBlockId(Mb), Hb);
          Tb ||= Ib, Ub += Xb ? 1 : 0, Ib || Xb ? Wb.add(bb, cb, kb, bs, pc) : Wb.add(bb, cb, kb, Pc(Mb), Qs, zc(Mb))
        }
        this.chunkWatch.watch(ab), this.meshes.show(Wb.toArray());
        const Ib = this.view,
          Hb = Cs(this.placing);
        (null === Ib || void 0 === Ib ? void 0 : Ib.id) === bb && Ib.blocked === Tb && Ib.toClear === Ub && Ib.waiting === Hb && Ib.refusals === kb || this.QQ({
          id: bb,
          blocked: Tb,
          toClear: Ub,
          waiting: Hb,
          refusals: kb
        })
      }
      QQ(bb) {
        this.view = bb, fb.j.QQ(ls, bb, !0)
      }
    }

    function Cs(bb) {
      let {
        sent: cb
      } = bb;
      return null !== cb && !cb.timedOut
    }
    var Ns = sb(4023),
      Vs = sb(38719);

    function Ls(bb, cb, sb) {
      const kb = [255 * bb, 255 * cb, 255 * sb],
        [Wb, ab, Tb] = kb.map((bb => bb + .4 * (255 - bb)));
      return {
        texture: "square_particle",
        GM: 48,
        minLifeTime: .3 / Vs.d,
        maxLifeTime: .55 / Vs.d,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * Vs.d * Vs.d, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...kb, 1],
          maxColor: [Wb, ab, Tb, 1]
        }, {
          timeFraction: 1,
          minColor: [...kb, 0],
          maxColor: [Wb, ab, Tb, 0]
        }],
        blendMode: Ns.f.Standard
      }
    }
    const us = {
      texture: "glint",
      mipmaps: !1,
      GM: 96,
      minLifeTime: .5 / Vs.d,
      maxLifeTime: .9 / Vs.d,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * Vs.d * Vs.d, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: Ns.f.OneOne
    };
    class Ys {
      constructor(bb, cb) {
        this.api = bb, this.localPlayerId = cb, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(bb) {
        if (this.api.particlesEnabled())
          for (const [cb, sb, kb, Wb, ab, Tb] of bb.slice(0, 3)) {
            const bb = `${Wb},${ab},${Tb}`;
            let Ub = this.chips.get(bb);
            void 0 === Ub && (Ub = this.api.createParticles(Ls(Wb, ab, Tb), {
              pos: [cb + .5, sb + .5, kb + .5]
            }), this.chips.set(bb, Ub));
            for (let cb = 0; cb < 8; cb++) this.setPoint(cb, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            Ub.emitPoints([cb + .5, sb + .5, kb + .5], this.points, 8)
          }
      }
      layerDone(bb) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const cb = bb.length / 3;
        if (0 === cb || !this.api.particlesEnabled()) return;
        const sb = Math.min(cb, 48),
          [kb, Wb, ab] = [bb[0] + .5, bb[1] + 1, bb[2] + .5];
        let Tb = 0;
        for (let Ub = 0; Ub < sb; Ub++) {
          const Ib = 3 * Math.floor(Ub * cb / sb);
          for (let cb = 0; cb < 2; cb++) this.setPoint(Tb++, bb[Ib] + Math.random() - kb, bb[Ib + 1] + 1 - Wb, bb[Ib + 2] + Math.random() - ab, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(us, {
          pos: [kb, Wb, ab]
        }), this.sparkles.emitPoints([kb, Wb, ab], this.points, Tb)
      }
      dispose() {
        var bb;
        for (const cb of this.chips.values()) cb.stop();
        this.chips.clear(), null === (bb = this.sparkles) || void 0 === bb || bb.stop(), this.sparkles = null
      }
      setPoint(bb, cb, sb, kb, Wb) {
        const ab = 4 * bb;
        this.points[ab] = cb, this.points[ab + 1] = sb, this.points[ab + 2] = kb, this.points[ab + 3] = Wb
      }
    }
    var hs = sb(1917);
    const gs = "SpecialAction1",
      Bs = "KeyY",
      ts = "KeyX";

    function ys(bb) {
      let {
        placement: cb
      } = bb;
      const sb = (0, Bb.h)(ls, cb.getView()),
        {
          t: kb
        } = (0, yb.E)(),
        {
          isTouchScreen: Wb
        } = (0, Ub.p)(["isTouchScreen"]),
        ab = null !== sb,
        Tb = ab && !sb.blocked && !sb.waiting;
      if ((0, gb.e)((bb => ab && !bb.repeat && !(0, Hb.isTypingInInput)() && !(0, Ib.q)() && !Wb), (bb => {
          const sb = function(bb, cb, sb) {
            if (bb === ts) return cb.stop;
            if (bb === Bs) return sb ? cb.build : Ds;
            return hs.v[gs].includes(bb) ? cb.rotate : null
          }(bb.code, cb, Tb);
          null !== sb && (bb.stopPropagation(), sb())
        })), !ab) return null;
      let fb = Wb ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return sb.blocked ? fb = "plotsGame:placementOffPlot" : sb.toClear > 0 && (fb = "plotsGame:placementClear"), (0, rb.jsx)(Tc.e, {
        placement: "bottom",
        children: (0, rb.jsxs)("div", {
          className: "PlotsPlacementCard",
          children: [(0, rb.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: kb(mb(sb.id).displayName.translationKey)
          }), (0, rb.jsx)("div", {
            className: ub()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: sb.refusals > 0
            }),
            children: kb(fb)
          }, sb.refusals), (0, rb.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, rb.jsxs)(hb.d, {
              onClick: cb.rotate,
              children: [(0, rb.jsx)(Ps, {
                noaAction: gs
              }), kb("plotsGame:placementRotate")]
            }), (0, rb.jsxs)(hb.G, {
              onClick: cb.stop,
              children: [(0, rb.jsx)(Ps, {
                keyCode: ts
              }), kb("general:cancel")]
            }), (0, rb.jsxs)(hb.n, {
              disabled: !Tb,
              onClick: cb.build,
              children: [(0, rb.jsx)(Ps, {
                keyCode: Bs
              }), kb("plotsGame:placementBuild")]
            })]
          })]
        })
      })
    }

    function Ps(bb) {
      return (0, rb.jsx)(Ic.d, {
        className: "PlotsPlacementKey",
        ...bb
      })
    }

    function Ds() {}
    var Es = sb(4282);
    class is {
      constructor(bb) {
        this.placement = bb, this.press = null
      }
      down(bb) {
        if (null !== this.press) return !1;
        const {
          id: cb,
          mouse: sb,
          x: kb,
          y: Wb,
          atMs: ab
        } = bb;
        return this.press = {
          id: cb,
          mouse: sb,
          x: kb,
          y: Wb,
          atMs: ab,
          moved: !1
        }, sb || this.placement.beginDrag(bb.ndcX, bb.ndcY), !0
      }
      move(bb) {
        const cb = this.press;
        null !== cb && cb.id === bb.id && (cb.moved ||= Math.hypot(bb.x - cb.x, bb.y - cb.y) > 8), bb.mouse ? this.placement.hoverAt(bb.ndcX, bb.ndcY) : (null === cb || void 0 === cb ? void 0 : cb.id) === bb.id && this.placement.dragTo(bb.ndcX, bb.ndcY)
      }
      up(bb) {
        const cb = this.press;
        (null === cb || void 0 === cb ? void 0 : cb.id) === bb.id && (this.move(bb), this.end(), !cb.moved && (cb.mouse || bb.atMs - cb.atMs <= 250) && this.placement.tap())
      }
      cancel(bb) {
        var cb;
        (null === (cb = this.press) || void 0 === cb ? void 0 : cb.id) === bb && this.end()
      }
      leave(bb) {
        let {
          id: cb,
          mouse: sb
        } = bb;
        sb && this.placement.endHover(), this.cancel(cb)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }

    function Os(bb) {
      let {
        placement: cb
      } = bb;
      return null === (0, Bb.h)(ls, cb.getView()) ? null : (0, rb.jsx)(Gs, {
        placement: cb
      })
    }

    function Gs(bb) {
      let {
        placement: cb
      } = bb;
      (0, Es.d)(!0, !0, "PlotsPlacementLayer");
      const sb = (0, ab.useMemo)((() => new is(cb)), [cb]);
      return (0, rb.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: bb => {
          "mouse" === bb.pointerType && 0 !== bb.button || !sb.down(Ks(bb)) || bb.currentTarget.setPointerCapture(bb.pointerId)
        },
        onPointerMove: bb => {
          sb.move(Ks(bb))
        },
        onPointerUp: bb => {
          sb.up(Ks(bb))
        },
        onPointerCancel: bb => {
          sb.cancel(bb.pointerId)
        },
        onLostPointerCapture: bb => {
          sb.cancel(bb.pointerId)
        },
        onPointerLeave: bb => {
          sb.leave(Ks(bb))
        },
        "aria-hidden": !0
      })
    }

    function Ks(bb) {
      const {
        left: cb,
        top: sb,
        width: kb,
        height: Wb
      } = bb.currentTarget.getBoundingClientRect();
      return {
        id: bb.pointerId,
        mouse: "mouse" === bb.pointerType,
        x: bb.clientX,
        y: bb.clientY,
        ndcX: (bb.clientX - cb) / kb * 2 - 1,
        ndcY: 1 - (bb.clientY - sb) / Wb * 2,
        atMs: bb.timeStamp
      }
    }
    var Zs = sb(2279),
      zs = sb(36334),
      qs = sb(1912),
      ds = sb(1269);
    const As = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function ws(bb) {
      let {
        hud: cb
      } = bb;
      const sb = (0, Bb.h)(fc, cb.getPlot()),
        [kb, Wb] = (0, ab.useState)(null),
        Tb = (0, zs.n)(kb);
      if ("none" === sb[0]) return null;
      const [, Ub, Ib, Hb, fb, Mb] = sb;
      return (0, rb.jsx)("div", {
        className: ub()("PlotsPlotBannerContainer", {
          Below: Tb
        }),
        children: (0, rb.jsx)(rs, {
          plotX: Ub,
          plotZ: Ib,
          ownerName: Hb,
          ownerId: fb,
          relation: Mb,
          plaqueRef: Wb
        }, `${Ub},${Ib}`)
      })
    }

    function rs(bb) {
      var cb, sb;
      let {
        plotX: kb,
        plotZ: Wb,
        ownerName: ab,
        ownerId: Tb,
        relation: Ub,
        plaqueRef: Ib
      } = bb;
      const {
        t: Hb
      } = (0, yb.E)(), fb = (0, qs.f)("hiddenPlayerNames"), Mb = (0, qs.f)("players"), Xb = null === Tb ? null : null !== (cb = null === (sb = Mb.byId[Tb]) || void 0 === sb ? void 0 : sb.cosmetics) && void 0 !== cb ? cb : null, nb = Hb("plotsGame:plotBannerCoords", {
        x: kb,
        z: Wb
      }), mb = "own" === Ub || null !== ab;
      return (0, rb.jsxs)("div", {
        ref: Ib,
        className: ub()("PlotsPlotBanner", {
          Own: "own" === Ub,
          Shared: "shared" === Ub
        }),
        role: "status",
        children: [(0, rb.jsxs)("span", {
          className: ub()("PlotsPlotBannerSeal", {
            Face: null !== Xb
          }),
          children: [null !== Xb && (0, rb.jsx)(Zs.b, {
            cosmetics: Xb
          }), null === Xb && (0, rb.jsx)(Yb.b, {
            name: As[Ub]
          })]
        }), (0, rb.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, rb.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === Ub && Hb("plotsGame:plotBannerYours"), "own" !== Ub && null !== ab && Hb("plotsGame:plotBannerOwner", {
              name: (0, ds.e)(ab, fb)
            }), !mb && nb]
          }), mb && (0, rb.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [nb, "shared" === Ub && (0, rb.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: Hb("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }

    function os(bb) {
      let {
        progress: cb,
        goal: sb
      } = bb;
      const kb = Math.min(cb, sb);
      return (0, rb.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, rb.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": sb,
          "aria-valuenow": kb,
          children: (0, rb.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${kb/sb})`
            }
          })
        }), (0, rb.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [kb, "/", sb]
        })]
      })
    }

    function Ss(bb) {
      return {
        translationKey: `plotsGame:${bb}`,
        actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
      }
    }
    const Rs = {
      house: {
        icon: "house",
        titleKey: "plotsGame:starterLotHouseTitle",
        desktop: Ss("starterLotHouseHint", ["alt-fire"]),
        touch: Ss("starterLotHouseHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotHousePlain"
      },
      garden: {
        icon: "sparkle",
        titleKey: "plotsGame:starterLotGarden",
        desktop: Ss("starterLotGardenHint", ["alt-fire"]),
        touch: Ss("starterLotGardenHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotGardenPlain"
      },
      boulder: {
        icon: "hammer",
        titleKey: "plotsGame:starterLotBoulder",
        desktop: Ss("starterLotBreakHint", ["primary-fire"]),
        touch: Ss("starterLotBreakHintTouch"),
        plainKey: "plotsGame:starterLotBreakPlain"
      },
      fly: {
        icon: "angles-up",
        titleKey: "plotsGame:starterLotFly",
        desktop: Ss("starterLotFlyHint", ["jump"]),
        touch: Ss("starterLotFlyHintTouch"),
        plainKey: "plotsGame:starterLotFlyPlain"
      },
      backpack: {
        icon: "backpack",
        titleKey: "plotsGame:starterLotBackpack",
        desktop: Ss("starterLotBackpackHint", ["OpenInventory"]),
        touch: Ss("starterLotBackpackHintTouch"),
        plainKey: "plotsGame:starterLotBackpackPlain"
      },
      neighbour: {
        icon: "person",
        titleKey: "plotsGame:starterLotNeighbour",
        desktop: Ss("starterLotNeighbourHint", ["forward", "left", "backward", "right"]),
        touch: Ss("starterLotNeighbourHintTouch"),
        plainKey: "plotsGame:starterLotNeighbourPlain"
      }
    };

    function vs(bb, cb, sb) {
      const {
        translationKey: kb,
        actions: Wb
      } = sb ? cb.touch : cb.desktop;
      if (0 === Wb.length) return bb(kb);
      const ab = [];
      for (const Tb of Wb) {
        const kb = (0, hs.s)(Tb, sb),
          Wb = hs.v[Tb][0];
        if (null === kb && void 0 === Wb) return bb(cb.plainKey);
        ab.push(null === kb ? (0, hs.n)(Wb) : bb(kb.translationKey))
      }
      return bb(kb, {
        key: ab.join("")
      })
    }

    function Fs(bb) {
      let {
        hud: cb
      } = bb;
      const sb = (0, Bb.h)(Hc, cb.getStep()),
        {
          t: kb
        } = (0, yb.E)();
      return (0, rb.jsxs)(Tc.e, {
        placement: "bottom",
        children: ["step" === sb[0] && (0, rb.jsx)(xs, {
          step: sb[1],
          progress: sb[2],
          goal: sb[3]
        }, sb[1]), "celebrate" === sb[0] && (0, rb.jsx)(ps, {
          className: ub()("Celebrate", {
            Gold: "house" === sb[1]
          }),
          icon: "star",
          title: kb("house" === sb[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
        }, `celebrate-${sb[1]}`)]
      })
    }

    function xs(bb) {
      let {
        step: cb,
        progress: sb,
        goal: kb
      } = bb;
      const {
        isTouchScreen: Wb
      } = (0, Ub.p)(["isTouchScreen"]), {
        t: ab
      } = (0, yb.E)(), Tb = Rs[cb];
      return (0, rb.jsxs)(ps, {
        icon: Tb.icon,
        title: ab(Tb.titleKey),
        children: [(0, rb.jsx)("div", {
          className: "PlotsStepCardHint SmallTextLight",
          children: vs(ab, Tb, Wb)
        }), kb > 1 && (0, rb.jsx)(os, {
          progress: sb,
          goal: kb
        }), "backpack" === cb && Wb && (0, rb.jsx)(bk, {})]
      })
    }

    function ps(bb) {
      let {
        className: cb,
        icon: sb,
        title: kb,
        children: Wb
      } = bb;
      return (0, rb.jsxs)("div", {
        className: ub()("PlotsStepCard", cb),
        role: "status",
        children: [(0, rb.jsx)("span", {
          className: "PlotsStepCardIcon",
          children: (0, rb.jsx)(Yb.b, {
            name: sb
          })
        }), (0, rb.jsxs)("div", {
          className: "PlotsStepCardBody",
          children: [(0, rb.jsx)("div", {
            className: "PlotsStepCardTitle SmallTextBold",
            children: kb
          }), Wb]
        })]
      })
    }

    function bk() {
      return (0, ab.useEffect)((() => (Ub.d.set({
        backpackPointerRequested: !0
      }), () => {
        Ub.d.set({
          backpackPointerRequested: !1
        })
      })), []), null
    }
    const ck = function(bb, cb, sb, kb) {
      let {
        localPlayerId: Wb
      } = kb;
      const Ub = new Mc;
      let Ib = null,
        Hb = null,
        fb = null,
        Mb = null,
        Xb = null;
      const nb = [];
      return {
        onCreate: bb => {
          Ib = new Ys(bb, Wb), Hb = new Is(bb, Wb, Ib), fb = new Is(bb, Wb, Ib), Mb = new es(bb, Wb), Xb = new Vb(bb, Mb), nb.push((0, Tb.s)((0, ab.createElement)(ab.Fragment, null, (0, ab.createElement)(ws, {
            hud: Ub
          }), (0, ab.createElement)(Fs, {
            hud: Ub
          }), (0, ab.createElement)(nc, {
            hud: Ub,
            journal: Xb
          }), (0, ab.createElement)(Os, {
            placement: Mb
          }), (0, ab.createElement)(ys, {
            placement: Mb
          })), {
            content: (0, ab.createElement)(Wc, {
              journal: Xb
            })
          }))
        },
        aX: () => {
          Hb.aX(), fb.aX(), Mb.aX(), Xb.aX()
        },
        onPlayerAttemptAltAction: (bb, cb, sb, kb, Wb, ab) => {
          var Tb;
          if (null !== ab) return;
          const Ub = void 0 === cb ? null : [cb, sb, kb];
          return null !== (Tb = Hb.attemptAltAction(Ub)) && void 0 !== Tb ? Tb : fb.attemptAltAction(Ub)
        },
        onPlayerClickUp: () => {
          Hb.endPress(), fb.endPress()
        },
        onAfterRender: (bb, cb) => {
          Mb.afterRender(cb), Hb.afterRender(cb), fb.afterRender(cb)
        },
        onClose: () => {
          for (const bb of nb) bb();
          Ib.dispose(), Hb.dispose(), fb.dispose(), Mb.dispose(), Ib = null, Hb = null, fb = null, Mb = null, Xb = null
        },
        onReceivedMessageFromServer: (bb, cb) => {
          if ("plotsStarterLot" === bb) Ub.receiveStep(cb);
          else if ("plotsPlot" === bb) Ub.receivePlot(cb);
          else if ("plotsStarterHouse" === bb) Hb.Km(cb);
          else if ("plotsBlueprint" === bb) {
            const bb = cb;
            fb.Km(bb), Mb.Km(bb)
          } else "plotsJournal" === bb ? Xb.Km(cb) : "plotsJournalOpen" === bb ? Xb.openFromServer() : "plotsPreviewEnd" === bb && Mb.endFromServer()
        }
      }
    }
  },
  38719: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => kb,
      e: () => ab
    });
    const kb = 1 / .6,
      Wb = {
        kind: "smokePuff"
      };
    class ab {
      constructor(bb, cb, sb) {
        this.style = bb, this.GM = cb, this.half = sb, this.particles = null, this.lastFrame = -1
      }
      emit(bb, cb, sb) {
        let ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return sb !== this.lastFrame && (this.lastFrame = sb, this.particles || (this.particles = bb.createParticles(function(bb, cb) {
          const [
            [sb, ab, Tb],
            [Ub, Ib, Hb]
          ] = bb.colours;
          return {
            texture: bb.soft ? Wb : "square_particle",
            GM: cb,
            minLifeTime: bb.life[0] / kb,
            maxLifeTime: bb.life[1] / kb,
            minEmitPower: bb.power[0] * kb,
            maxEmitPower: bb.power[1] * kb,
            minSize: bb.size[0],
            maxSize: bb.size[1],
            emitRate: 0,
            gravity: [0, bb.lift * kb * kb, 0],
            dir1: [-bb.spread, 1, -bb.spread],
            dir2: [bb.spread, 1, bb.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [sb, ab, Tb, bb.alpha],
              maxColor: [Ub, Ib, Hb, bb.alpha]
            }, {
              timeFraction: 1,
              minColor: [sb, ab, Tb, 0],
              maxColor: [Ub, Ib, Hb, 0]
            }],
            blendMode: bb.blendMode
          }
        }(this.style, this.GM), {
          pos: cb,
          half: this.half
        })), this.particles.moveTo(cb, this.half), this.particles.emit(ab), !0)
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