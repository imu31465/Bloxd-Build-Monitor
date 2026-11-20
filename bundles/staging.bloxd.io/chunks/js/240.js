export const id = 240;
export const ids = [240];
export const modules = {
  38919: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => uP
    });
    const hv = [0, 90, 180, 270],
      Sv = "plotsblueprint";
    var ev = Pv(52),
      gv = Pv(36137),
      pv = Pv(22),
      dv = Pv(1610),
      Nv = Pv(1692),
      lv = Pv(26);
    const Tv = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      Wv = {
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
      wv = ["small", "medium", "large"].flatMap((vv => Tv.flat().filter((zv => Wv[zv].tier === vv))));

    function av(vv) {
      return Wv[vv]
    }
    const sv = new Map(Tv.flatMap((vv => vv.slice(1).map(((zv, Pv) => [zv, vv[Pv]])))));

    function Cv(vv) {
      var zv;
      return null !== (zv = sv.get(vv)) && void 0 !== zv ? zv : null
    }
    const iv = {
      farm_hut: "plotsGame:journalNoteFarmHut",
      rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
      castle_tower: "plotsGame:journalNoteCastleTower",
      farm_house: "plotsGame:journalNoteFarmHouse",
      farm_barn: "plotsGame:journalNoteFarmBarn"
    };

    function cv(vv, zv) {
      const Pv = new Set(vv),
        hv = function(vv) {
          const zv = new Set(vv);
          return new Set(wv.filter((vv => {
            const Pv = Cv(vv);
            return null === Pv || zv.has(Pv)
          })))
        }(Pv);
      return wv.map((vv => {
        const Sv = vv === zv;
        return Pv.has(vv) ? {
          id: vv,
          active: Sv,
          state: "completed",
          unlockedBy: null
        } : hv.has(vv) ? {
          id: vv,
          active: Sv,
          state: "open",
          unlockedBy: null
        } : {
          id: vv,
          active: Sv,
          state: "locked",
          unlockedBy: Cv(vv)
        }
      }))
    }
    const Gv = "plotsJournalChanged";
    class mv {
      constructor(vv, zv) {
        this.api = vv, this.placement = zv, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.yw("journal_opened")
        }, this.build = vv => {
          this.yw("placement_started"), this.placement.start(vv), (0, gv.g)()
        }, this.putAway = () => {
          this.api.sendCommand(`${Sv} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      la(vv) {
        let [, zv, Pv] = vv;
        this.pages = cv(zv, Pv), lv.j.zC(Gv, this.pages, !0)
      }
      openFromServer() {
        this.openRequested = !0, this.MT()
      }
      MT() {
        this.openRequested && !pv.c.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, dv.o)() || (0, Nv.isTypingInInput)() || null !== this.placement.getView() || (0, gv.r)())
      }
      yw(vv) {
        this.reported.has(vv) || (this.reported.add(vv), this.api.sendCommand(`${Sv} report ${vv}`))
      }
    }
    var jv = Pv(1035),
      fv = Pv.n(jv),
      Fv = Pv(1042),
      Yv = Pv(1442),
      nv = Pv(4285),
      Ov = Pv(3156),
      Dv = Pv(1439),
      Kv = Pv(1099),
      Vv = Pv(1175),
      Uv = Pv(9101);
    const Rv = [0, 90, 180, 270],
      xv = /^(meta\|rot\d)\|([lrud]+)$/,
      tv = "nesw",
      qv = /^meta\|([nesw]*)\|?(Stacked)?$/,
      Iv = function(vv) {
        const zv = new WeakMap;
        return (Pv, hv) => {
          let Sv = zv.get(Pv);
          return void 0 === Sv && (Sv = vv(Pv, hv), zv.set(Pv, Sv)), Sv
        }
      }((vv => new Qv(vv)));
    class Qv {
      constructor(vv) {
        this.blockMetadata = vv, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const zv = new Set(Object.keys(vv).map((zv => vv[zv].id)));
        zv.add(0), this.maxBlockId = Math.max(...zv)
      }
      static
      for (vv) {
        return Iv(vv)
      }
      getBlockIdMapping(vv, zv) {
        const Pv = this.getBlockIdMappingKey(vv, zv);
        let hv = this.blockIdMappings.get(Pv);
        return void 0 === hv && Rv.includes(vv) && (hv = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, vv, zv), this.blockIdMappings.set(Pv, hv)), hv
      }
      turnBlockId(vv, zv, Pv) {
        return this.mapBlockId(this.blockMetadata[vv], zv, this.getRotationMapping(zv, Pv), Pv)
      }
      getBlockIdMappingKey(vv, zv) {
        return `r${vv}|m${Number(zv)}`
      }
      createBlockIdMapping(vv, zv, Pv, hv) {
        const Sv = new Uint16Array(zv + 1),
          ev = this.getRotationMapping(Pv, hv);
        for (const gv in vv) {
          const zv = vv[gv];
          Sv[zv.id] = this.mapBlockId(zv, Pv, ev, hv)
        }
        return Sv
      }
      getRotationMapping(vv, zv) {
        const Pv = Math.round(vv / 90),
          hv = new Uint8Array(4);
        for (let Sv = 0; Sv < 4; Sv++) hv[Sv] = (4 + Sv - Pv) % 4;
        if (zv) {
          let vv = hv[0];
          hv[0] = hv[1], hv[1] = vv, vv = hv[2], hv[2] = hv[3], hv[3] = vv
        }
        return hv
      }
      mapBlockId(vv, zv, Pv, hv) {
        var Sv;
        const {
          blockMetadata: ev
        } = this, gv = Math.round(zv / 90), {
          id: pv,
          meta: dv
        } = vv, {
          rot: Nv,
          rootName: lv,
          metaStr: Tv
        } = dv;
        let Wv;
        const [, wv, av] = null !== (Sv = qv.exec(Tv)) && void 0 !== Sv ? Sv : [];
        if (void 0 !== wv) {
          var sv, Cv;
          Wv = null !== (sv = null === (Cv = ev[`${lv}|meta|${[tv.split("").filter(((vv,zv)=>wv.split("").some((vv=>{const Pv=tv.indexOf(vv);return((hv?3-Pv:Pv)+gv)%4===zv})))).join(""),av].filter(Boolean).join("|")}`]) || void 0 === Cv ? void 0 : Cv.id) && void 0 !== sv ? sv : pv
        } else if (null === Nv) Wv = pv;
        else {
          var iv, cv;
          const vv = Pv[Nv - 1] + 1;
          let zv = Tv.replace(`rot${Nv}`, `rot${vv}`);
          hv && dv.stairsCorner && (zv = zv.replace(/(Left|Right)$/, (vv => "Left" === vv ? "Right" : "Left"))), hv && "Chest" === lv && (zv = zv.replace(/\|(left|right)$/, ((vv, zv) => "left" === zv ? "|right" : "|left")));
          const Sv = xv.exec(zv);
          if (hv && null !== Sv) {
            const vv = "lrud".split("").filter((vv => Sv[2].includes("l" === vv ? "r" : "r" === vv ? "l" : vv)));
            zv = `${Sv[1]}|${vv.join("")}`
          }
          const gv = `${lv}|${zv}`;
          if (Wv = null !== (iv = null === (cv = ev[gv]) || void 0 === cv ? void 0 : cv.id) && void 0 !== iv ? iv : null, null === Wv) {
            const vv = ev[lv];
            Wv = vv.rootMetaDesc === gv ? vv.id : pv
          }
        }
        return Wv
      }
    }

    function Zv(vv, zv, Pv) {
      let {
        xRotationMappedOrigin: hv,
        shouldSwapXZ: Sv
      } = Pv;
      const ev = Sv ? zv : vv;
      return null === hv ? ev : hv - ev
    }

    function Av(vv, zv, Pv) {
      let {
        zRotationMappedOrigin: hv,
        shouldSwapXZ: Sv
      } = Pv;
      const ev = Sv ? vv : zv;
      return null === hv ? ev : hv - ev
    }
    const Lv = {
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
      Hv = new Map;

    function Mv(vv, zv) {
      const Pv = `${vv}|${zv}`;
      let hv = Hv.get(Pv);
      if (void 0 === hv) {
        const {
          size: Sv,
          palette: ev,
          layers: gv
        } = Lv[vv], pv = 90 === zv || 270 === zv, [dv, Nv] = pv ? [Sv[2], Sv[0]] : [Sv[0], Sv[2]], lv = function(vv, zv, Pv) {
          let hv = null,
            Sv = null,
            ev = !1;
          switch (vv) {
            case 0:
              break;
            case 90:
              hv = zv - 1, ev = !0;
              break;
            case 180:
              hv = zv - 1, Sv = Pv - 1;
              break;
            case 270:
              Sv = Pv - 1, ev = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${vv}`)
          }
          return {
            xRotationMappedOrigin: hv,
            zRotationMappedOrigin: Sv,
            shouldSwapXZ: ev
          }
        }(zv, dv, Nv), Tv = Qv.for(Uv.g), Wv = ev.map((vv => (0, Uv.d)(Tv.turnBlockId((0, Uv.i)(vv), zv, !1)))), wv = [];
        gv.forEach(((vv, zv) => {
          vv.split(" ").forEach(((vv, Pv) => {
            for (let hv = 0; hv < vv.length; hv++)
              if ("." !== vv[hv]) {
                const Sv = [Zv(hv, Pv, lv), zv, Av(hv, Pv, lv)];
                wv.push({
                  offset: Sv,
                  block: Wv[vv.charCodeAt(hv) - "a".charCodeAt(0)]
                })
              }
          }))
        })), hv = {
          size: [dv, Sv[1], Nv],
          cells: wv
        }, Hv.set(Pv, hv)
      }
      return hv
    }
    const yv = {
      farm_hut: Pv.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
      farm_house: Pv.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
      farm_barn: Pv.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
      rusticHome_tent: Pv.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
      rusticHome_cabin: Pv.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
      rusticHome_house: Pv.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
      market_stand: Pv.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
      market_stall: Pv.p + "static/media/market_stall.9a562807f9dff591618a.webp",
      market_shop: Pv.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
      castle_wall: Pv.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
      castle_gate: Pv.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
      castle_tower: Pv.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
    };
    var Bv = Pv(1082);
    const Jv = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function Ev(vv) {
      let {
        page: zv,
        building: Pv,
        onBuild: hv,
        onPutAway: Sv
      } = vv;
      const {
        t: ev
      } = (0, Vv.x)(), {
        displayName: gv,
        tier: pv
      } = av(zv.id), dv = Mv(zv.id, 0).cells.length, Nv = iv[zv.id], lv = "locked" === zv.state, Tv = Pv ? Yv.d : Yv.j;
      return (0, Bv.jsxs)("article", {
        className: fv()("PlotsJournalPage", {
          Locked: lv
        }),
        children: [(0, Bv.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: ev(gv.translationKey)
        }), (0, Bv.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [ev(Jv[pv]), " \xb7 ", ev("plotsGame:journalBlocks", {
            blocks: String(dv)
          })]
        }), (0, Bv.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [wv.map((vv => (0, Bv.jsx)("img", {
            className: fv()({
              Shown: vv === zv.id
            }),
            src: yv[vv],
            alt: "",
            draggable: !1
          }, vv))), "completed" === zv.state && (0, Bv.jsx)("span", {
            className: "PlotsJournalStamp",
            children: ev("plotsGame:journalBuilt")
          }), lv && (0, Bv.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, Bv.jsx)(Fv.b, {
              name: "lock"
            })
          })]
        }), void 0 !== Nv && "completed" !== zv.state && (0, Bv.jsx)("p", {
          className: "PlotsJournalNote",
          children: ev(Nv)
        }), (0, Bv.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === zv.state && (0, Bv.jsx)("p", {
            className: "PlotsJournalHint",
            children: ev("plotsGame:journalLocked", {
              name: ev(av(zv.unlockedBy).displayName.translationKey)
            })
          }), zv.active && (0, Bv.jsxs)(Bv.Fragment, {
            children: [(0, Bv.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: ev("plotsGame:journalBuilding")
            }), (0, Bv.jsx)(Yv.e, {
              onClick: Sv,
              children: ev("plotsGame:journalPutAway")
            })]
          }), !lv && !zv.active && (0, Bv.jsx)(Tv, {
            onClick: () => {
              hv(zv.id)
            },
            children: ev("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function ov(vv) {
      let {
        className: zv,
        page: Pv,
        hidden: hv,
        building: Sv,
        journal: ev
      } = vv;
      return (0, Bv.jsxs)("div", {
        ref: vv => {
          null !== vv && (vv.inert = hv)
        },
        className: fv()("PlotsJournalSide", zv),
        children: [void 0 !== Pv && (0, Bv.jsx)(Ev, {
          page: Pv,
          building: Sv,
          onBuild: ev.build,
          onPutAway: ev.putAway
        }), void 0 === Pv && (0, Bv.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var bv = Pv(312),
      rv = Pv(1855);

    function kv(vv) {
      return Math.cos((0, rv.k)(vv))
    }

    function Xv(vv) {
      return (0, rv.y)(Math.acos(bv.d.clamp(vv, -1, 1)))
    }

    function uv(vv, zv, Pv, hv, Sv) {
      const ev = Math.abs(zv - vv),
        gv = (0, rv.y)(Sv / (Pv * Math.abs(Math.sin((0, rv.k)(vv))))),
        pv = 450 * Math.min(1, ev / hv),
        dv = gv > 0 ? 3 * ev / gv : 1 / 0;
      return Math.round(Math.max(120, Math.min(pv, dv)))
    }
    class vz {
      constructor() {
        this.samples = []
      }
      add(vv, zv) {
        for (this.samples.push({
            x: vv,
            at: zv
          }); zv - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const vv = this.samples[0],
          zv = this.samples[this.samples.length - 1];
        return zv.at > vv.at ? (zv.x - vv.x) / (zv.at - vv.at) : 0
      }
    }

    function zz(vv, zv) {
      return vv > zv && vv >= 600
    }

    function Pz(vv) {
      return Xv(new DOMMatrixReadOnly(getComputedStyle(vv).transform).m11)
    }

    function hz(vv, zv) {
      vv.style.transform = `rotateY(${-zv}deg)`, vv.classList.add("Turning")
    }

    function Sz(vv) {
      let {
        journal: zv
      } = vv;
      const {
        t: Pv
      } = (0, Vv.x)(), hv = (0, Dv.j)(Gv, zv.getPages()), Sv = (0, Kv.l)(zz), [pv, dv] = (0, ev.useState)((() => function(vv) {
        const zv = vv.findIndex((vv => vv.active));
        return -1 !== zv ? zv : Math.max(0, vv.findIndex((vv => "open" === vv.state)))
      }(hv))), lv = (0, ev.useRef)(null), Tv = (0, ev.useRef)(null), Wv = (0, ev.useRef)({
        Forward: null,
        Back: null
      }), wv = Sv ? 2 : 1, av = Sv ? 180 : 90, sv = pv - pv % wv, Cv = sv > 0, iv = sv + wv < hv.length, cv = (0, ev.useCallback)((() => {
        const vv = Tv.current;
        return null === vv ? sv : (Tv.current = null, vv.animation.cancel(), (zv = Wv.current[vv.direction]).style.transform = "", zv.classList.remove("Turning"), null === vv.next ? sv : (dv(vv.next), vv.next));
        var zv
      }), [sv]), mv = (0, ev.useCallback)(((vv, zv, Pv, hv) => {
        const Sv = Wv.current[vv],
          ev = Pz(Sv),
          gv = zv === ("Forward" === vv) ? av : 0;
        hz(Sv, gv);
        const pv = Sv.animate([{
          transform: `rotateY(${-ev}deg)`
        }, {
          transform: `rotateY(${-gv}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : uv(ev, gv, Sv.offsetWidth, av, gv > ev ? -Pv : Pv),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        Tv.current = {
          direction: vv,
          animation: pv,
          next: zv ? hv + ("Forward" === vv ? wv : -wv) : null
        }, pv.onfinish = () => {
          var vv;
          (null === (vv = Tv.current) || void 0 === vv ? void 0 : vv.animation) === pv && cv()
        }
      }), [wv, av, cv]), jv = (0, ev.useCallback)((vv => {
        if (null !== lv.current) return;
        const zv = cv();
        ("Forward" === vv ? zv + wv < hv.length : zv > 0) && mv(vv, !0, 0, zv)
      }), [cv, mv, wv, hv.length]);
      (0, ev.useEffect)((() => {
        zv.onOpened()
      }), [zv]), (0, ev.useEffect)((() => () => {
        var vv;
        null === (vv = Tv.current) || void 0 === vv || vv.animation.cancel()
      }), []), (0, ev.useEffect)((() => {
        const vv = vv => {
          var zv;
          vv.pointerId !== (null === (zv = lv.current) || void 0 === zv ? void 0 : zv.pointerId) || lv.current.following || (lv.current = null)
        };
        return window.addEventListener("pointerup", vv), () => {
          window.removeEventListener("pointerup", vv)
        }
      }), []), (0, Ov.d)((vv => ("ArrowLeft" === vv.code || "ArrowRight" === vv.code) && !(0, Nv.isTypingInInput)()), (vv => {
        vv.stopPropagation(), jv("ArrowLeft" === vv.code ? "Back" : "Forward")
      }));
      const Fv = (vv, zv, Pv) => {
          const hv = function(vv, zv, Pv, hv) {
            return (vv < 0 ? Pv : hv) ? bv.d.clampAbs(vv, zv) : Math.sign(vv) * zv * (1 - 1 / (.55 * Math.abs(vv) / zv + 1))
          }(vv.base + Pv, wv * vv.width, iv, Cv);
          return "Forward" === zv ? Math.min(hv, 0) : Math.max(hv, 0)
        },
        Uv = (vv, zv) => {
          const Pv = lv.current;
          if (lv.current = null, null === Pv.direction) return;
          Pv.speed.add(vv, zv);
          const hv = Pv.speed.get(),
            Sv = Fv(Pv, Pv.direction, vv - Pv.x);
          mv(Pv.direction, null !== function(vv, zv, Pv, hv, Sv) {
            if (Math.abs(zv) >= .3 ? Math.sign(zv) !== Math.sign(vv) : Math.abs(vv) < .5 * Pv) return null;
            const ev = vv < 0 ? "Forward" : "Back";
            return ("Forward" === ev ? hv : Sv) ? ev : null
          }(Sv, hv, wv * Pv.width, iv, Cv), hv, sv)
        },
        Rv = hv.some((vv => vv.active)),
        xv = (vv, Pv, Sv) => (0, Bv.jsx)(ov, {
          className: vv,
          page: Pv >= 0 && Pv < hv.length ? hv[Pv] : void 0,
          hidden: Sv,
          building: Rv,
          journal: zv
        });
      return (0, Bv.jsx)(nv.c, {
        close: gv.j,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, Bv.jsxs)("section", {
          className: fv()("PlotsJournal", {
            Spread: Sv
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": Pv("plotsGame:journalTitle"),
          children: [(0, Bv.jsx)(Yv.i, {
            className: "PlotsJournalClose",
            onClick: gv.j
          }), (0, Bv.jsx)(ez, {
            direction: "Back",
            disabled: !Cv,
            onTurn: jv
          }), (0, Bv.jsx)("div", {
            className: "PlotsJournalBookPages",
            onPointerDown: vv => {
              var zv;
              if (!vv.isPrimary || 0 !== vv.button || null !== Tv.current && null !== vv.target.closest("button")) return;
              const Pv = new vz;
              Pv.add(vv.clientX, vv.timeStamp);
              const hv = Wv.current.Forward.offsetWidth,
                Sv = Tv.current;
              Tv.current = null;
              let ev = 0;
              if (null !== Sv) {
                const zv = Wv.current[Sv.direction],
                  Pv = Pz(zv);
                Sv.animation.cancel(), hz(zv, Pv), ev = function(vv, zv, Pv, hv) {
                  return (vv < 0 ? Pv : hv) ? vv : Math.sign(vv) * zv * (1 / (1 - Math.min(Math.abs(vv) / zv, .99)) - 1) / .55
                }(function(vv, zv, Pv, hv) {
                  return Pv * (kv(zv) - kv("Forward" === vv ? 0 : hv))
                }(Sv.direction, Pv, hv, av), wv * hv, iv, Cv), vv.currentTarget.setPointerCapture(vv.pointerId)
              }
              lv.current = {
                pointerId: vv.pointerId,
                x: vv.clientX,
                y: vv.clientY,
                base: ev,
                width: hv,
                following: null !== Sv,
                direction: null !== (zv = null === Sv || void 0 === Sv ? void 0 : Sv.direction) && void 0 !== zv ? zv : null,
                speed: Pv
              }
            },
            onPointerMove: vv => {
              const zv = lv.current;
              if (null === zv || vv.pointerId !== zv.pointerId) return;
              if (0 === vv.buttons) return void Uv(vv.clientX, vv.timeStamp);
              const Pv = vv.clientX - zv.x;
              !zv.following && function(vv, zv) {
                return Math.abs(vv) > 8 && Math.abs(vv) > Math.abs(zv)
              }(Pv, vv.clientY - zv.y) && (zv.following = !0, zv.direction = Pv < 0 ? "Forward" : "Back", vv.currentTarget.setPointerCapture(vv.pointerId)), null !== zv.direction && (zv.speed.add(vv.clientX, vv.timeStamp), hz(Wv.current[zv.direction], function(vv, zv, Pv, hv) {
                const Sv = Pv * kv("Forward" === vv ? 0 : hv) + zv;
                return bv.d.clamp(Xv(Sv / Pv), 0, hv)
              }(zv.direction, Fv(zv, zv.direction, Pv), zv.width, av)))
            },
            onPointerUp: vv => {
              var zv;
              vv.pointerId === (null === (zv = lv.current) || void 0 === zv ? void 0 : zv.pointerId) && Uv(vv.clientX, vv.timeStamp)
            },
            onPointerCancel: vv => {
              const zv = lv.current;
              vv.pointerId === (null === zv || void 0 === zv ? void 0 : zv.pointerId) && (lv.current = null, null !== zv.direction && mv(zv.direction, !1, 0, sv))
            },
            children: (0, Bv.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [Sv && xv("Left", sv - 2, !0), xv("Right", sv + 2 * wv - 1, !0), (0, Bv.jsxs)("div", {
                ref: vv => {
                  Wv.current.Back = vv
                },
                className: "PlotsJournalLeaf Back",
                children: [xv("Recto", sv - 1, !0), Sv && xv("Verso", sv, !1)]
              }), (0, Bv.jsxs)("div", {
                ref: vv => {
                  Wv.current.Forward = vv
                },
                className: "PlotsJournalLeaf Forward",
                children: [xv("Recto", sv + wv - 1, !1), Sv && xv("Verso", sv + wv, !0)]
              })]
            })
          }), (0, Bv.jsx)(ez, {
            direction: "Forward",
            disabled: !iv,
            onTurn: jv
          })]
        })
      })
    }

    function ez(vv) {
      let {
        direction: zv,
        disabled: Pv,
        onTurn: hv
      } = vv;
      const {
        t: Sv
      } = (0, Vv.x)();
      return (0, Bv.jsx)("div", {
        className: fv()("PlotsJournalArrow", zv),
        children: (0, Bv.jsx)(Yv.d, {
          disabled: Pv,
          ariaLabel: Sv("Forward" === zv ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            hv(zv)
          },
          children: (0, Bv.jsx)(Fv.b, {
            name: "angle-up"
          })
        })
      })
    }
    var gz = Pv(36132),
      pz = Pv(1871),
      dz = Pv(1927);
    const Nz = "plotsStepChanged",
      lz = "plotsPlotChanged";
    class Tz {
      constructor() {
        this.step = ["none"], this.plot = ["none"]
      }
      getStep() {
        return this.step
      }
      receiveStep(vv) {
        this.step = vv, lv.j.zC(Nz, vv, !0)
      }
      getPlot() {
        return this.plot
      }
      receivePlot(vv) {
        this.plot = vv, lv.j.zC(lz, vv, !0)
      }
    }
    const Wz = "KeyJ";

    function wz(vv) {
      let {
        hud: zv,
        journal: Pv
      } = vv;
      const hv = (0, Dv.j)(Gv, Pv.getPages()),
        Sv = (0, Dv.j)(Nz, zv.getStep()),
        {
          isTouchScreen: ev
        } = (0, pv.i)(["isTouchScreen"]),
        {
          t: lv
        } = (0, Vv.x)(),
        Tv = null !== hv && "none" === Sv[0];
      return (0, Ov.d)((vv => null !== hv && vv.code === Wz && !vv.repeat && !(0, Nv.isTypingInInput)()), (vv => {
        (0, dv.w)(vv, Tv, gv.r)
      })), Tv ? (0, Bv.jsx)(gz.g, {
        placement: "topRight",
        children: (0, Bv.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, Bv.jsxs)("button", {
            type: "button",
            className: fv()("PlotsJournalButton SmallTextBold", {
              Touch: ev
            }),
            onClick: gv.r,
            children: [(0, Bv.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, Bv.jsx)(pz.b, {
                itemName: "Book",
                amount: 0
              })
            }), lv("plotsGame:journalButton"), !ev && (0, Bv.jsx)(dz.e, {
              className: "PlotsJournalButtonKey",
              keyCode: Wz
            })]
          })
        })
      }) : null
    }
    var az = Pv(37941),
      sz = Pv(37712),
      Cz = Pv(36434),
      iz = Pv(9136),
      cz = Pv(9153),
      Gz = Pv(37330);
    const mz = new Map([
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
      jz = [...Cz.b.blockRemoveActionRoots, ...sz.d, ...iz.g, "Board", "Code Block", "Custom Lobby Block"],
      fz = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let Fz = null;

    function Yz() {
      return Fz ??= function() {
        const vv = nz(),
          zv = Math.max(...vv.map((vv => Uv.g[vv].id))) + 1,
          Pv = new Int32Array(zv),
          hv = new Int32Array(zv),
          Sv = new Uint8Array(zv).fill(1),
          ev = new Uint8Array(zv),
          gv = new Uint8Array(zv),
          pv = new Array(zv).fill("Air"),
          dv = new Map,
          Nv = vv => {
            let zv = dv.get(vv);
            return void 0 === zv && (zv = dv.size + 1, dv.set(vv, zv)), zv
          },
          lv = new Set(jz);
        for (const Wv of vv) {
          var Tv;
          const {
            id: vv,
            meta: zv,
            altActionable: dv,
            canBePlacedOver: wv
          } = Uv.g[Wv];
          Pv[vv] = Nv(Oz(Wv));
          const av = zv.stairsCorner;
          if (null === av) hv[vv] = Pv[vv];
          else {
            const Pv = av.endsWith("Right");
            hv[vv] = Nv(`${zv.rootName}|rot${Pv?zv.rot%4+1:zv.rot}|${zv.halfblockPlacement}|${av.replace("Right","Left")}`)
          }
          Sv[vv] = wv ? 1 : 0, ev[vv] = dv || null !== zv.open || Wv in Gz.c || lv.has(zv.rootName) || void 0 !== (0, sz.f)(zv.rootName) ? 1 : 0;
          const {
            rootName: sv
          } = zv;
          gv[vv] = null !== zv.open || sz.d.includes(sv) || sv.includes("Bookshelf") || sv.includes("Mailbox") ? 1 : 0, pv[vv] = null !== (Tv = (0, az.e)(vv)) && void 0 !== Tv ? Tv : sv
        }
        return {
          kinds: Pv,
          shapes: hv,
          empty: Sv,
          inUse: ev,
          ownAltActionMessage: gv,
          placingItems: pv
        }
      }(), Fz
    }

    function nz() {
      return Object.keys(Uv.g).filter((vv => Uv.g[vv].name === vv))
    }

    function Oz(vv) {
      var zv;
      const Pv = Uv.g[vv],
        {
          rootName: hv,
          rot: Sv
        } = Pv.meta,
        [, ...ev] = (null !== (zv = Pv.rootMetaDesc) && void 0 !== zv ? zv : vv).split("|"),
        gv = ev.filter((vv => !("meta" === vv || fz.test(vv) || (0, cz.F)(Pv) && /^[nesw]+$/.test(vv) || iz.g.includes(hv) && /^[lrud]+$/.test(vv) || bv.I.includes(hv) && /^(left|right)$/.test(vv))));
      return [hv, ...gv].map((vv => "fenceGate" === Pv.model && vv === `rot${Sv}` ? "rot" + ((Sv - 1) % 2 + 1) : vv)).join("|")
    }

    function Dz(vv, zv) {
      const {
        kinds: Pv,
        shapes: hv
      } = Yz();
      return Pv[vv] === Pv[zv] || hv[vv] === hv[zv]
    }

    function Kz(vv) {
      return 1 === Yz().empty[vv]
    }

    function Vz(vv) {
      return Yz().placingItems[vv]
    }

    function Uz(vv) {
      return mz.get(Uv.g[vv].meta.rootName)
    }
    var Rz = Pv(9128),
      xz = Pv(9144);
    const tz = [0, 0, 0, 1, 1, 1],
      qz = (0, Rz.e)([
        [2, 0, 2, 6, 6, 6]
      ]),
      Iz = (0, Rz.e)([
        [3, 0, 3, 5, 5, 5]
      ]),
      Qz = (0, Rz.e)([
        [3, 3, 3, 5, 8, 5]
      ]),
      Zz = [0, 1, 2, 3].map((vv => (0, Rz.e)((0, Rz.o)([
        [3, 2, 0, 5, 7, 3]
      ], vv))));

    function Az(vv) {
      const {
        SC: zv,
        model: Pv,
        blockModel: hv,
        meta: Sv
      } = Uv.g[vv];
      return void 0 !== zv ? zv : "CentreCross" === Pv ? qz : null !== hv && void 0 !== hv && hv.startsWith("torch") ? Sv.halfblockPlacement === xz.e.side ? Zz[Sv.rot - 1] : Sv.halfblockPlacement === xz.e.top ? Qz : Iz : tz
    }
    var Lz = Pv(36395),
      Hz = Pv(185);

    function Mz(vv, zv) {
      const Pv = Hz.f.pG / 2;
      return vv[0] < zv[0] + Pv && vv[0] + 1 > zv[0] - Pv && vv[1] < zv[1] + Hz.f.lG && vv[1] + 1 > zv[1] && vv[2] < zv[2] + Pv && vv[2] + 1 > zv[2] - Pv
    }

    function yz(vv, zv, Pv, hv, Sv) {
      const ev = Math.hypot(...zv.dir);
      if (!Number.isFinite(ev) || 0 === ev) return -1;
      const {
        from: gv,
        reach: pv,
        solid: dv
      } = zv, Nv = [zv.dir[0] / ev, zv.dir[1] / ev, zv.dir[2] / ev], lv = null === dv ? pv : Math.min(pv, function(vv, zv, Pv) {
        const hv = Bz(vv, zv, Pv);
        if (hv !== 1 / 0) return hv;
        return (Pv[0] + .5 - vv[0]) * zv[0] + (Pv[1] + .5 - vv[1]) * zv[1] + (Pv[2] + .5 - vv[2]) * zv[2]
      }(gv, Nv, dv) + .75);
      let Tv = -1,
        Wv = 1 / 0,
        wv = 1 / 0;
      for (let av = 0; av < vv.length; av += 4) {
        const zv = [vv[av], vv[av + 1], vv[av + 2]],
          ev = Sv(av) ? pv : lv;
        let dv = -1,
          sv = Bz(gv, Nv, zv);
        if (sv > ev) {
          const vv = [zv[0] + .5 - gv[0], zv[1] + .5 - gv[1], zv[2] + .5 - gv[2]];
          if (sv = vv[0] * Nv[0] + vv[1] * Nv[1] + vv[2] * Nv[2], sv <= 0 || sv > ev) continue;
          if (dv = Math.hypot(vv[0] - sv * Nv[0], vv[1] - sv * Nv[1], vv[2] - sv * Nv[2]), dv > .7 || !hv(av)) continue
        }(dv < Wv || dv === Wv && sv < wv) && Pv(av) && (Tv = av, Wv = dv, wv = sv)
      }
      return Tv
    }

    function Bz(vv, zv, Pv) {
      let hv = 0,
        Sv = 1 / 0;
      for (let ev = 0; ev < 3; ev++) {
        const gv = Pv[ev] - vv[ev];
        if (0 === zv[ev]) {
          if (gv > 0 || gv + 1 < 0) return 1 / 0;
          continue
        }
        const pv = gv / zv[ev],
          dv = (gv + 1) / zv[ev];
        hv = Math.max(hv, Math.min(pv, dv)), Sv = Math.min(Sv, Math.max(pv, dv))
      }
      return hv <= Sv ? hv : 1 / 0
    }
    var Jz = Pv(37599),
      Ez = Pv(38051);
    const oz = [1, 1, 1];
    class bz {
      constructor(vv) {
        this.api = vv, this.meshes = null, this.shown = null
      }
      show(vv) {
        if (!(0, Lz.d)(vv, this.shown))
          if (this.shown = null === vv ? null : [vv[0], vv[1], vv[2]], null !== this.meshes)
            for (const zv of this.meshes) this.api.setGameMesh(zv, null === vv ? {
              visible: !1
            } : {
              anchor: vv,
              visible: !0
            });
          else if (null !== vv) {
          const zv = [Jz.f, Jz.f, Jz.f, 0, 0, 0];
          this.meshes = [this.build([zv], Jz.h, vv), this.build((0, Jz.e)(), Jz.l, vv)]
        }
      }
      dispose() {
        for (const zv of null !== (vv = this.meshes) && void 0 !== vv ? vv : []) {
          var vv;
          this.api.disposeGameMesh(zv)
        }
        this.meshes = null, this.shown = null
      }
      build(vv, zv, Pv) {
        const hv = [],
          Sv = [];
        for (const [ev, gv, pv, dv, Nv, lv] of vv)(0, Ez.g)(hv, Sv, [dv + .5, Nv + .5, lv + .5], [ev, gv, pv]);
        return this.api.createGameMesh({
          positions: hv,
          indices: Sv
        }, {
          rgb: oz,
          alpha: zv,
          onTop: !0
        }, Pv)
      }
    }
    class rz {
      constructor(vv) {
        this.api = vv, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(vv) {
        const zv = Hz.f.aa;
        this.chunks = [];
        for (let Pv = 0; Pv < vv.length; Pv += 3) {
          const hv = Math.floor(vv[Pv] / zv),
            Sv = Math.floor(vv[Pv + 1] / zv),
            ev = Math.floor(vv[Pv + 2] / zv);
          this.watches(hv, Sv, ev) || this.chunks.push(hv, Sv, ev)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const vv = performance.now();
        if (vv - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = vv;
        let zv = !1;
        for (let Pv = 0; Pv < this.chunks.length; Pv += 3) {
          const vv = this.api.getChunkVersion(this.chunks[Pv], this.chunks[Pv + 1], this.chunks[Pv + 2]);
          this.versions[Pv / 3] !== vv && (this.versions[Pv / 3] = vv, zv = !0)
        }
        return zv
      }
      watches(vv, zv, Pv) {
        for (let hv = 0; hv < this.chunks.length; hv += 3)
          if (this.chunks[hv] === vv && this.chunks[hv + 1] === zv && this.chunks[hv + 2] === Pv) return !0;
        return !1
      }
    }
    const kz = .35,
      Xz = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      uz = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      vP = [.95, .2, .15];
    class zP {
      constructor() {
        this.groups = []
      }
      add(vv, zv, Pv, hv, Sv) {
        let ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : tz;
        for (const gv of this.groups)
          if (SP(gv, hv, Sv)) return gv.cells.push(vv, zv, Pv), void gv.boxes.push(ev);
        this.groups.push({
          rgb: hv,
          look: Sv,
          cells: [vv, zv, Pv],
          boxes: [ev]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class PP {
      constructor(vv) {
        this.api = vv, this.shown = []
      }
      show(vv) {
        const zv = [];
        for (const Pv of vv) {
          const vv = this.shown.findIndex((vv => {
            let {
              group: zv
            } = vv;
            return SP(zv, Pv.rgb, Pv.look) && eP(zv, Pv)
          })); - 1 === vv ? zv.push(this.build(Pv)) : (zv.push(this.shown[vv]), this.shown.splice(vv, 1))
        }
        this.dispose(), this.shown = zv
      }
      dispose() {
        for (const {
            meshes: vv
          }
          of this.shown)
          for (const zv of vv) this.api.disposeGameMesh(zv);
        this.shown = []
      }
      build(vv) {
        const {
          rgb: zv,
          look: Pv,
          boxes: hv
        } = vv, Sv = [zv[0] + (1 - zv[0]) * kz, zv[1] + (1 - zv[1]) * kz, zv[2] + (1 - zv[2]) * kz], ev = [this.buildMesh(vv.cells, zv, Pv.alpha, ((vv, zv, Sv, ev) => {
          hP(vv, zv, Sv, hv[ev], Pv.size, !1)
        })), this.buildMesh(vv.cells, Sv, Pv.alpha, ((vv, zv, Sv, ev) => {
          hP(vv, zv, Sv, hv[ev], Pv.size, !0)
        }))];
        return Pv.crossed && ev.push(this.buildMesh(vv.cells, zv, .9, ((vv, zv, hv) => {
          (0, Ez.i)(vv, zv, hv, Pv.size + .01, .12)
        }))), {
          group: vv,
          meshes: ev
        }
      }
      buildMesh(vv, zv, Pv, hv) {
        const Sv = [vv[0], vv[1], vv[2]],
          ev = [],
          gv = [];
        for (let pv = 0; pv < vv.length; pv += 3) hv(ev, gv, [vv[pv] - Sv[0] + .5, vv[pv + 1] - Sv[1] + .5, vv[pv + 2] - Sv[2] + .5], pv / 3);
        return this.api.createGameMesh({
          positions: ev,
          indices: gv
        }, {
          rgb: [zv[0], zv[1], zv[2]],
          alpha: Pv
        }, Sv)
      }
    }

    function hP(vv, zv, Pv, hv, Sv, ev) {
      for (let gv = 0; gv < hv.length; gv += 6) {
        const pv = [0, 0, 0],
          dv = [0, 0, 0];
        for (let vv = 0; vv < 3; vv++) pv[vv] = Pv[vv] + ((hv[gv + vv] + hv[gv + vv + 3]) / 2 - .5) * Sv, dv[vv] = (hv[gv + vv + 3] - hv[gv + vv]) * Sv;
        (0, Ez.e)(vv, zv, pv, dv, ev)
      }
    }

    function SP(vv, zv, Pv) {
      return vv.rgb[0] === zv[0] && vv.rgb[1] === zv[1] && vv.rgb[2] === zv[2] && vv.look === Pv
    }

    function eP(vv, zv) {
      if (vv.cells.length !== zv.cells.length) return !1;
      for (let Pv = 0; Pv < vv.cells.length; Pv++)
        if (vv.cells[Pv] !== zv.cells[Pv]) return !1;
      return vv.boxes.every(((vv, Pv) => vv === zv.boxes[Pv]))
    }

    function gP(vv, zv) {
      return vv.getClientOption(zv, "blockReach") + 1
    }
    class pP {
      constructor(vv, zv, Pv) {
        this.api = vv, this.localPlayerId = zv, this.pickNext = Pv, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(vv) {
        const [zv, , Pv] = vv.cameraDirection, hv = Math.hypot(zv, Pv);
        hv > .001 && (this.heading = [zv / hv, Pv / hv])
      }
      tapped(vv, zv, Pv) {
        const hv = gP(this.api, this.localPlayerId),
          {
            origin: Sv,
            direction: ev
          } = this.api.getActionRay(),
          gv = [...Sv],
          pv = [
            [gv, [gv[0] + ev[0] * hv, gv[1] + ev[1] * hv, gv[2] + ev[2] * hv]]
          ];
        null !== vv && pv.push([gv, (0, Lz.b)(vv)]), this.tap = {
          lines: pv,
          next: zv,
          ms: Pv
        }
      }
      filled(vv, zv) {
        this.tap = null, this.turnFrom(vv, zv), this.retry(zv)
      }
      arrived(vv, zv) {
        const {
          tap: Pv
        } = this;
        if (null === Pv || zv - Pv.ms > 1500) return null;
        const hv = (0, Lz.b)(vv);
        return (0, Lz.d)(Pv.next, vv) || Pv.lines.some((vv => {
          let [zv, Pv] = vv;
          return function(vv, zv, Pv) {
            const hv = [Pv[0] - zv[0], Pv[1] - zv[1], Pv[2] - zv[2]],
              Sv = [vv[0] - zv[0], vv[1] - zv[1], vv[2] - zv[2]],
              ev = hv[0] ** 2 + hv[1] ** 2 + hv[2] ** 2,
              gv = 0 === ev ? 0 : Math.min(1, Math.max(0, (Sv[0] * hv[0] + Sv[1] * hv[1] + Sv[2] * hv[2]) / ev));
            return Math.hypot(Sv[0] - hv[0] * gv, Sv[1] - hv[1] * gv, Sv[2] - hv[2] * gv)
          }(hv, zv, Pv) <= .9
        })) ? (this.tap = null, this.turnFrom(vv, zv), Pv.ms) : null
      }
      turnFrom(vv, zv) {
        this.pending = {
          from: vv,
          ms: zv,
          turnMs: Math.max(50, Math.min(250, zv - this.lastFillMs))
        }, this.lastFillMs = zv
      }
      retry(vv) {
        const {
          pending: zv
        } = this;
        if (null === zv) return;
        if (vv - zv.ms > 1500) return void(this.pending = null);
        const Pv = this.pickNext((0, Lz.b)(zv.from), (vv => (0, Lz.d)(vv, zv.from)));
        if (null === Pv) return;
        this.pending = null;
        const {
          turning: hv
        } = this;
        if (null !== hv && vv < hv.endMs && (0, Lz.d)(hv.to, Pv)) return;
        const Sv = this.api.getActionRay().origin,
          ev = [Pv[0] + .5 - Sv[0], Pv[1] + .5 - Sv[1], Pv[2] + .5 - Sv[2]],
          gv = Math.hypot(ev[0], ev[2]);
        if (gv < .3) {
          const vv = Math.max(gv, .001);
          ev[0] = this.heading[0] * vv, ev[2] = this.heading[1] * vv
        }
        this.api.turnCamera(ev, zv.turnMs), this.turning = {
          to: Pv,
          endMs: vv + zv.turnMs
        }
      }
    }
    class dP {
      constructor(vv, zv, Pv) {
        this.api = vv, this.localPlayerId = zv, this.juice = Pv, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], this.lastFilled = null, this.lastSeenFilled = null, this.playerCells = [], this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = null, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new rz(vv), this.meshes = new PP(vv), this.outline = new bz(vv), this.turn = new pP(vv, zv, ((vv, zv) => this.pickNext(vv, zv)))
      }
      la(vv) {
        const zv = "active" === vv[0] ? `${vv[1]}|${vv[3]}|${vv[4]}|${vv[5]}|${vv[6]}` : "";
        if ("active" !== vv[0]) "built" === vv[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , Pv, hv, Sv, ev] = vv;
          zv !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = Pv) : Pv === this.layerY ? this.burstUnlisted(hv) : Pv > this.layerY && this.finishLayer(Pv), this.layerY = Pv, this.layerCells.has(Pv) || this.layerCells.set(Pv, hv.filter(lP)), this.ghostCells = hv, this.palette = Sv, this.occupiedCells = ev
        }
        zv !== this.blueprint && (this.blueprint = zv, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((vv => this.api.blockNameToBlockId(vv))), this.chunkWatch.watch([...this.ghostCells.filter(lP), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(vv) {
        this.burstUnlisted([]), vv > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = vv)
      }
      MT() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const vv = performance.now();
        let zv = !1;
        for (const [Sv, ev] of this.foreseen) {
          var Pv;
          if (vv - ev > 1e3) this.foreseen.delete(Sv), zv = !0, (null === (Pv = this.lastFilled) || void 0 === Pv ? void 0 : Pv.join()) === Sv && (this.lastFilled = this.lastSeenFilled)
        }
        const hv = NP(this.api.getPositionView(this.localPlayerId));
        (zv || hv.some(((vv, zv) => vv !== this.playerCells[zv]))) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(vv) {
        const zv = new Set;
        for (let Sv = 0; Sv < vv.length; Sv += 4) zv.add(`${vv[Sv]},${vv[Sv+1]},${vv[Sv+2]}`);
        const Pv = [],
          {
            ghostCells: hv
          } = this;
        for (let Sv = 0; Sv < hv.length; Sv += 4) {
          const vv = `${hv[Sv]},${hv[Sv+1]},${hv[Sv+2]}`;
          !zv.has(vv) && this.open.delete(vv) && Pv.push(this.filledCell(Sv))
        }
        this.burst(Pv)
      }
      refresh() {
        const {
          ghostCells: vv,
          palette: zv,
          occupiedCells: Pv
        } = this, hv = new zP, Sv = new Set, ev = [], gv = [];
        for (let pv = 0; pv < vv.length; pv += 4) {
          const [Pv, dv, Nv, lv] = [vv[pv], vv[pv + 1], vv[pv + 2], vv[pv + 3]], Tv = this.api.getBlockId(Pv, dv, Nv), Wv = `${Pv},${dv},${Nv}`, wv = Dz(this.blockIds[lv], Tv);
          !wv && Kz(Tv) ? hv.add(Pv, dv, Nv, Uz(zv[lv]), Xz, Az(zv[lv])) : wv ? this.open.has(Wv) && ev.push(this.filledCell(pv)) : hv.add(Pv, dv, Nv, vP, uz), !wv && this.api.isBlockInLoadedChunk(Pv, dv, Nv) && (Sv.add(Wv), gv.push(Pv, dv, Nv, Kz(Tv) ? 0 : 1))
        }
        this.open = Sv, this.nextCells = gv;
        for (let pv = 0; pv < Pv.length; pv += 3) {
          const [vv, zv, Sv] = [Pv[pv], Pv[pv + 1], Pv[pv + 2]];
          Kz(this.api.getBlockId(vv, zv, Sv)) || hv.add(vv, zv, Sv, vP, uz)
        }
        this.meshes.show(hv.toArray()), this.burst(ev), this.showNext(), this.turn.retry(performance.now())
      }
      burst(vv) {
        const zv = performance.now(),
          Pv = [];
        for (const [Sv, ev, gv] of vv) {
          const vv = [Sv, ev, gv];
          this.lastSeenFilled = vv, this.foreseen.delete(vv.join()) || Pv.push(vv)
        }
        const hv = this.isHolding(zv);
        for (const Sv of Pv) {
          if (this.lastFilled = Sv, hv && this.pressFilled) {
            this.turn.filled(Sv, zv);
            continue
          }
          const vv = this.turn.arrived(Sv, zv);
          if (null !== vv) {
            this.pressFilled = hv;
            for (const [zv, Pv] of this.foreseen) Pv <= vv && this.foreseen.delete(zv)
          }
        }
        this.juice.filled(vv)
      }
      showNext() {
        var vv;
        const zv = this.api.getPositionView(this.localPlayerId);
        this.playerCells.splice(0, 1 / 0, ...NP(zv));
        const Pv = this.lastFilled;
        this.nextCell = this.pickNext(null === Pv ? [zv[0], zv[1] + 1, zv[2]] : (0, Lz.b)(Pv), (() => !1)), this.outline.show(null !== (vv = this.aimed) && void 0 !== vv ? vv : this.nextCell)
      }
      pickNext(vv, zv) {
        const Pv = this.api.getPositionView(this.localPlayerId),
          hv = [Pv[0], Pv[1] + Hz.f.lG * Hz.f.playerEyeToHeightRatio, Pv[2]],
          Sv = gP(this.api, this.localPlayerId),
          {
            nextCells: ev
          } = this,
          gv = vv => [ev[vv], ev[vv + 1], ev[vv + 2]],
          pv = function(vv, zv, Pv, hv, Sv, ev) {
            let gv = -1,
              pv = -1,
              dv = 1 / 0;
            for (let Nv = 0; Nv < vv.length; Nv += zv) {
              const zv = (ev(Nv) ? 2 : 0) + (hv(Nv) ? 1 : 0);
              if (zv < pv || Sv(Nv)) continue;
              const lv = (vv[Nv] + .5 - Pv[0]) ** 2 + (vv[Nv + 1] + .5 - Pv[1]) ** 2 + (vv[Nv + 2] + .5 - Pv[2]) ** 2;
              (zv > pv || lv < dv) && (gv = Nv, pv = zv, dv = lv)
            }
            return gv
          }(ev, 4, vv, (vv => 1 === ev[vv + 3]), (vv => {
            const hv = gv(vv);
            return Mz(hv, Pv) || this.foreseen.has(hv.join()) || zv(hv)
          }), (vv => function(vv, zv, Pv) {
            return (zv[0] + .5 - vv[0]) ** 2 + (zv[1] + .5 - vv[1]) ** 2 + (zv[2] + .5 - vv[2]) ** 2 <= Pv ** 2
          }(hv, gv(vv), Sv)));
        return -1 === pv ? null : gv(pv)
      }
      afterRender(vv) {
        var zv;
        this.turn.look(vv);
        const Pv = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === Pv ? null : Pv.position), this.outline.show(null !== (zv = this.aimed) && void 0 !== zv ? zv : this.nextCell)
      }
      isHolding(vv) {
        return null !== this.altMs && vv - this.altMs <= 500
      }
      attemptAltAction(vv) {
        const zv = performance.now();
        if (this.isHolding(zv) || (this.pressFilled = !1), this.altMs = zv, this.pressFilled) return "preventPlacement";
        const Pv = this.findAimed(vv);
        if (null !== Pv) return this.foreseen.set(Pv.join(), zv), this.lastFilled = Pv, this.aimed = null, this.showNext(), this.turn.filled(Pv, zv), this.pressFilled = !0, "preventPlacement";
        null !== this.nextCell && this.turn.tapped(vv, this.nextCell, zv)
      }
      findAimed(vv) {
        return function(vv, zv, Pv, hv, Sv, ev, gv) {
          const pv = vv.Avv(zv),
            dv = null === pv || null === vv.blockNameToBlockId(pv.name, !0) ? null : pv.name,
            Nv = vv.getPositionView(zv),
            {
              origin: lv,
              direction: Tv
            } = vv.getActionRay(),
            Wv = yz(hv, {
              from: lv,
              dir: Tv,
              reach: gP(vv, zv),
              solid: Pv
            }, (zv => {
              const Pv = [hv[zv], hv[zv + 1], hv[zv + 2]];
              return !Dz(Sv[hv[zv + 3]], vv.getBlockId(...Pv)) && !gv.has(Pv.join()) && vv.isBlockInLoadedChunk(...Pv) && !Mz(Pv, Nv)
            }), (vv => null === dv || dv === Vz(Sv[hv[vv + 3]])), (vv => null !== ev && hv[vv] === ev[0] && hv[vv + 1] === ev[1] && hv[vv + 2] === ev[2]));
          return -1 === Wv ? null : [hv[Wv], hv[Wv + 1], hv[Wv + 2]]
        }(this.api, this.localPlayerId, vv, this.ghostCells, this.blockIds, this.nextCell, this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(vv) {
        const {
          ghostCells: zv
        } = this, [Pv, hv, Sv] = Uz(this.palette[zv[vv + 3]]);
        return [zv[vv], zv[vv + 1], zv[vv + 2], Pv, hv, Sv]
      }
    }

    function NP(vv) {
      let [zv, Pv, hv] = vv;
      const Sv = Hz.f.pG / 2;
      return [Math.floor(zv), Math.floor(Pv), Math.floor(hv), Math.floor(zv - Sv), Math.floor(zv + Sv), Math.floor(Pv + Hz.f.lG), Math.floor(hv - Sv), Math.floor(hv + Sv)]
    }

    function lP(vv, zv) {
      return zv % 4 !== 3
    }

    function TP(vv, zv, Pv, hv, Sv) {
      if (!vv.isBlockInLoadedChunk(zv, hv - 6, Pv) || !vv.isBlockInLoadedChunk(zv, hv + 6 + Sv, Pv) || !vv.canModifyBlockAt(zv, hv, Pv)) return NaN;
      let ev = hv - 1;
      if (0 !== vv.getBlockId(zv, ev, Pv)) {
        for (; ev < hv + 6 && 0 !== vv.getBlockId(zv, ev + 1, Pv);) ev++;
        return ev
      }
      for (; ev > hv - 6;)
        if (ev--, 0 !== vv.getBlockId(zv, ev, Pv)) return ev;
      return NaN
    }

    function WP(vv, zv, Pv, hv, Sv) {
      let ev = 0;
      for (let gv = hv + 1; gv <= hv + Sv; gv++) 0 !== vv.getBlockId(zv, gv, Pv) && ev++;
      return ev
    }

    function wP(vv) {
      const zv = new Map;
      for (const gv of vv) {
        var Pv;
        if (Number.isNaN(gv)) return null;
        zv.set(gv, (null !== (Pv = zv.get(gv)) && void 0 !== Pv ? Pv : 0) + 1)
      }
      let hv = NaN,
        Sv = 0;
      for (const [gv, pv] of zv)(pv > Sv || pv === Sv && gv < hv) && (hv = gv, Sv = pv);
      let ev = 0;
      for (const gv of vv) ev += Math.abs(gv - hv);
      return ev
    }

    function aP(vv, zv, Pv, hv) {
      const {
        eye: Sv,
        forward: ev,
        tanHalfFovX: gv,
        tanHalfFovY: pv
      } = vv, [dv, Nv] = function(vv) {
        let [zv, Pv, hv] = vv;
        const Sv = Math.hypot(zv, hv),
          [ev, gv] = [hv / Sv, -zv / Sv];
        return [
          [ev, 0, gv],
          [Pv * gv, hv * ev - zv * gv, -Pv * ev]
        ]
      }(ev), [lv, Tv] = [zv * gv, Pv * pv], Wv = ev[0] + lv * dv[0] + Tv * Nv[0], wv = ev[1] + Tv * Nv[1], av = ev[2] + lv * dv[2] + Tv * Nv[2], sv = (hv - Sv[1]) / wv;
      return sv > 0 && sv < 1 / 0 ? [Sv[0] + sv * Wv, Sv[2] + sv * av] : null
    }
    const sP = "plotsBlueprintPlacementChanged",
      CP = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class iP {
      constructor(vv, zv) {
        this.api = vv, this.localPlayerId = zv, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = vv => {
          var zv, Pv, hv, ev;
          const gv = null !== (zv = null === (Pv = this.placing) || void 0 === Pv ? void 0 : Pv.rotation) && void 0 !== zv ? zv : 0,
            {
              size: pv
            } = Mv(vv, gv),
            dv = this.api.yG(this.localPlayerId),
            [Nv, lv] = null !== (hv = null !== (ev = function(vv, zv, Pv) {
              const [hv, Sv, ev] = zv, [gv, pv, dv] = [Math.floor(Pv[0]), Math.floor(Pv[1]), Math.floor(Pv[2])], Nv = 6 + Math.max(hv, ev) / 2, [lv, Tv] = [Math.ceil(Nv + hv / 2), Math.ceil(Nv + ev / 2)], [Wv, wv] = [gv - lv, dv - Tv], [av, sv] = [2 * lv + 1, 2 * Tv + 1], Cv = new Float64Array(av * sv), iv = new Uint16Array(av * sv);
              for (let jv = 0; jv < av; jv++)
                for (let zv = 0; zv < sv; zv++) {
                  const Pv = TP(vv, Wv + jv, wv + zv, pv, Sv);
                  Cv[jv * sv + zv] = Pv, Number.isNaN(Pv) || (iv[jv * sv + zv] = WP(vv, Wv + jv, wv + zv, Pv, Sv))
                }
              const cv = [];
              let Gv = null,
                mv = 1 / 0;
              for (let jv = 0; jv + hv <= av; jv++)
                for (let vv = 0; vv + ev <= sv; vv++) {
                  const [zv, Sv] = [Wv + jv, wv + vv], pv = Math.hypot(zv + hv / 2 - Pv[0], Sv + ev / 2 - Pv[2]);
                  if (pv > Nv || gv >= zv - 2 && gv < zv + hv + 2 && dv >= Sv - 2 && dv < Sv + ev + 2) continue;
                  cv.length = 0;
                  let lv = 0;
                  for (let Pv = 0; Pv < hv; Pv++)
                    for (let zv = 0; zv < ev; zv++) cv.push(Cv[(jv + Pv) * sv + vv + zv]), lv += iv[(jv + Pv) * sv + vv + zv];
                  const Tv = wP(cv);
                  if (null === Tv) continue;
                  const av = pv + 3 * (Tv + lv);
                  av < mv && (mv = av, Gv = [zv, Sv])
                }
              return Gv
            }(this.api, pv, dv)) && void 0 !== ev ? ev : this.cornerOnTarget(pv)) && void 0 !== hv ? hv : [Math.floor(dv[0]) + 2, Math.floor(dv[2])];
          this.placing = {
            id: vv,
            rotation: gv,
            corner: [Nv, this.playerLevel(), lv],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null
          }, this.update(), this.api.sendCommand(`${Sv} preview`)
        }, this.rotate = () => {
          const {
            id: vv,
            rotation: zv,
            corner: Pv
          } = this.placing, Sv = hv[(hv.indexOf(zv) + 1) % hv.length], [ev, , gv] = Mv(vv, zv).size, [pv, , dv] = Mv(vv, Sv).size;
          this.moveTo(Pv[0] + Math.floor(ev / 2) - Math.floor(pv / 2), Pv[2] + Math.floor(gv / 2) - Math.floor(dv / 2), Sv)
        }, this.hoverAt = (vv, zv) => {
          this.placing.hover = [vv, zv], this.moveCentreTo(this.camera, vv, zv)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (vv, zv) => {
          const Pv = this.placing,
            {
              eye: hv,
              forward: Sv,
              tanHalfFovX: ev,
              tanHalfFovY: gv
            } = this.camera,
            pv = {
              eye: [hv[0], hv[1], hv[2]],
              forward: [Sv[0], Sv[1], Sv[2]],
              tanHalfFovX: ev,
              tanHalfFovY: gv
            },
            dv = Pv.corner[1],
            Nv = aP(pv, vv, zv, dv);
          Pv.hover = null, Pv.drag = Nv && {
            view: pv,
            ground: Nv,
            corner: [Pv.corner[0], Pv.corner[2]],
            level: dv
          }
        }, this.dragTo = (vv, zv) => {
          const Pv = this.placing.drag,
            hv = Pv && aP(Pv.view, vv, zv, Pv.level);
          null !== Pv && null !== hv && this.moveTo(Pv.corner[0] + Math.round(hv[0] - Pv.ground[0]), Pv.corner[1] + Math.round(hv[1] - Pv.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const vv = this.view;
          vv.waiting || (vv.blocked ? this.zC({
            ...vv,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const vv = this.placing,
            {
              id: zv,
              rotation: Pv,
              corner: hv
            } = vv;
          this.api.sendCommand(`${Sv} place ${zv} ${hv.join(" ")} ${Pv}`), vv.sent = {
            atMs: performance.now(),
            corner: [...hv],
            rotation: Pv,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${Sv} preview off`))
        }, this.chunkWatch = new rz(vv), this.meshes = new PP(vv)
      }
      getView() {
        return this.view
      }
      MT() {
        const vv = this.placing;
        null !== vv && (null !== vv.sent && !vv.sent.timedOut && performance.now() - vv.sent.atMs > 3e3 ? (vv.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(vv) || this.chunkWatch.changed()) && this.update())
      }
      afterRender(vv) {
        const zv = this.placing;
        null !== zv && (! function(vv, zv) {
          for (let Pv = 0; Pv < 3; Pv++) zv.eye[Pv] = vv.cameraPosition[Pv], zv.forward[Pv] = vv.cameraDirection[Pv];
          zv.tanHalfFovX = vv.tanHalfFovX, zv.tanHalfFovY = vv.tanHalfFovY
        }(vv, this.camera), null !== zv.hover && this.moveCentreTo(this.camera, zv.hover[0], zv.hover[1]))
      }
      la(vv) {
        const zv = this.placing;
        if (null === zv || null === zv.sent || "active" !== vv[0]) return;
        const {
          sent: Pv
        } = zv, [, hv, Sv, ev, gv, pv, dv] = vv;
        Sv && hv === zv.id && dv === Pv.rotation && ev === Pv.corner[0] && gv === Pv.corner[1] && pv === Pv.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(vv) {
        let [zv, , Pv] = vv;
        const hv = this.api.getTargetedBlock();
        if (null === hv) return null;
        const [Sv, , ev] = hv.position;
        return [Sv - Math.floor(zv / 2), ev - Math.floor(Pv / 2)]
      }
      playerLevel() {
        var vv;
        const [zv, Pv, hv] = this.api.yG(this.localPlayerId);
        if (null !== (vv = this.api.getLocalPlayerMovement()) && void 0 !== vv && vv.onGround) return Math.ceil(Pv - .01);
        const [Sv, ev, gv] = [Math.floor(zv), Math.floor(Pv), Math.floor(hv)];
        for (let pv = ev; pv >= ev - 2; pv--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(Sv, pv, gv))) return pv + 1;
        return ev
      }
      followPlayerLevel(vv) {
        if (cP(vv)) return !1;
        const zv = this.playerLevel();
        return zv !== vv.corner[1] && (vv.corner[1] = zv, !0)
      }
      moveCentreTo(vv, zv, Pv) {
        const hv = this.placing,
          Sv = aP(vv, zv, Pv, hv.corner[1]);
        if (null !== Sv) {
          const [vv, , zv] = Mv(hv.id, hv.rotation).size;
          this.moveTo(Math.round(Sv[0] - vv / 2), Math.round(Sv[1] - zv / 2))
        }
      }
      moveTo(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const hv = this.placing;
        if (cP(hv)) return;
        const [Sv, ev, gv] = hv.corner;
        if (this.centreOnPlot(Sv, gv) && !this.centreOnPlot(vv, zv, Pv))
          if (this.centreOnPlot(vv, gv, Pv)) zv = gv;
          else {
            if (!this.centreOnPlot(Sv, zv, Pv)) return;
            vv = Sv
          } vv === Sv && zv === gv && Pv === hv.rotation || (hv.rotation = Pv, hv.corner = [vv, ev, zv], this.update())
      }
      centreOnPlot(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: hv,
          corner: Sv
        } = this.placing, [ev, , gv] = Mv(hv, Pv).size;
        return this.api.canModifyBlockAt(vv + Math.floor(ev / 2), Sv[1], zv + Math.floor(gv / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.zC(null)
      }
      update() {
        const {
          id: vv,
          rotation: zv,
          corner: Pv,
          refusals: hv
        } = this.placing, Sv = new zP, ev = [];
        let gv = !1,
          pv = 0;
        for (const {
            offset: lv,
            block: Tv
          }
          of Mv(vv, zv).cells) {
          const [vv, zv, hv] = [Pv[0] + lv[0], Pv[1] + lv[1], Pv[2] + lv[2]];
          ev.push(vv, zv, hv);
          const dv = !this.api.canModifyBlockAt(vv, zv, hv),
            Nv = this.api.getBlockId(vv, zv, hv),
            Wv = !Kz(Nv) && !Dz(this.api.blockNameToBlockId(Tv), Nv);
          gv ||= dv, pv += Wv ? 1 : 0, dv || Wv ? Sv.add(vv, zv, hv, vP, uz) : Sv.add(vv, zv, hv, Uz(Tv), CP, Az(Tv))
        }
        this.chunkWatch.watch(ev), this.meshes.show(Sv.toArray());
        const dv = this.view,
          Nv = cP(this.placing);
        (null === dv || void 0 === dv ? void 0 : dv.id) === vv && dv.blocked === gv && dv.toClear === pv && dv.waiting === Nv && dv.refusals === hv || this.zC({
          id: vv,
          blocked: gv,
          toClear: pv,
          waiting: Nv,
          refusals: hv
        })
      }
      zC(vv) {
        this.view = vv, lv.j.zC(sP, vv, !0)
      }
    }

    function cP(vv) {
      let {
        sent: zv
      } = vv;
      return null !== zv && !zv.timedOut
    }
    var GP = Pv(4019),
      mP = Pv(38669);

    function jP(vv, zv, Pv) {
      const hv = [255 * vv, 255 * zv, 255 * Pv],
        [Sv, ev, gv] = hv.map((vv => vv + .4 * (255 - vv)));
      return {
        texture: "square_particle",
        GT: 48,
        minLifeTime: .3 / mP.e,
        maxLifeTime: .55 / mP.e,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * mP.e * mP.e, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...hv, 1],
          maxColor: [Sv, ev, gv, 1]
        }, {
          timeFraction: 1,
          minColor: [...hv, 0],
          maxColor: [Sv, ev, gv, 0]
        }],
        blendMode: GP.f.Standard
      }
    }
    const fP = {
      texture: "glint",
      mipmaps: !1,
      GT: 96,
      minLifeTime: .5 / mP.e,
      maxLifeTime: .9 / mP.e,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * mP.e * mP.e, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: GP.f.OneOne
    };
    class FP {
      constructor(vv, zv) {
        this.api = vv, this.localPlayerId = zv, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(vv) {
        if (this.api.particlesEnabled())
          for (const [zv, Pv, hv, Sv, ev, gv] of vv.slice(0, 3)) {
            const vv = `${Sv},${ev},${gv}`;
            let pv = this.chips.get(vv);
            void 0 === pv && (pv = this.api.createParticles(jP(Sv, ev, gv), {
              pos: [zv + .5, Pv + .5, hv + .5]
            }), this.chips.set(vv, pv));
            for (let zv = 0; zv < 8; zv++) this.setPoint(zv, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            pv.emitPoints([zv + .5, Pv + .5, hv + .5], this.points, 8)
          }
      }
      layerDone(vv) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const zv = vv.length / 3;
        if (0 === zv || !this.api.particlesEnabled()) return;
        const Pv = Math.min(zv, 48),
          [hv, Sv, ev] = [vv[0] + .5, vv[1] + 1, vv[2] + .5];
        let gv = 0;
        for (let pv = 0; pv < Pv; pv++) {
          const dv = 3 * Math.floor(pv * zv / Pv);
          for (let zv = 0; zv < 2; zv++) this.setPoint(gv++, vv[dv] + Math.random() - hv, vv[dv + 1] + 1 - Sv, vv[dv + 2] + Math.random() - ev, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(fP, {
          pos: [hv, Sv, ev]
        }), this.sparkles.emitPoints([hv, Sv, ev], this.points, gv)
      }
      dispose() {
        var vv;
        for (const zv of this.chips.values()) zv.stop();
        this.chips.clear(), null === (vv = this.sparkles) || void 0 === vv || vv.stop(), this.sparkles = null
      }
      setPoint(vv, zv, Pv, hv, Sv) {
        const ev = 4 * vv;
        this.points[ev] = zv, this.points[ev + 1] = Pv, this.points[ev + 2] = hv, this.points[ev + 3] = Sv
      }
    }
    var YP = Pv(1934);
    const nP = "SpecialAction1",
      OP = "KeyY",
      DP = "KeyX";

    function KP(vv) {
      let {
        placement: zv
      } = vv;
      const Pv = (0, Dv.j)(sP, zv.getView()),
        {
          t: hv
        } = (0, Vv.x)(),
        {
          isTouchScreen: Sv
        } = (0, pv.i)(["isTouchScreen"]),
        ev = null !== Pv,
        gv = ev && !Pv.blocked && !Pv.waiting;
      if ((0, Ov.d)((vv => ev && !vv.repeat && !(0, Nv.isTypingInInput)() && !(0, dv.o)() && !Sv), (vv => {
          const Pv = function(vv, zv, Pv) {
            if (vv === DP) return zv.stop;
            if (vv === OP) return Pv ? zv.build : UP;
            return YP.z[nP].includes(vv) ? zv.rotate : null
          }(vv.code, zv, gv);
          null !== Pv && (vv.stopPropagation(), Pv())
        })), !ev) return null;
      let lv = Sv ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return Pv.blocked ? lv = "plotsGame:placementOffPlot" : Pv.toClear > 0 && (lv = "plotsGame:placementClear"), (0, Bv.jsx)(gz.g, {
        placement: "bottom",
        children: (0, Bv.jsxs)("div", {
          className: "PlotsPlacementCard",
          children: [(0, Bv.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: hv(av(Pv.id).displayName.translationKey)
          }), (0, Bv.jsx)("div", {
            className: fv()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: Pv.refusals > 0
            }),
            children: hv(lv)
          }, Pv.refusals), (0, Bv.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, Bv.jsxs)(Yv.d, {
              onClick: zv.rotate,
              children: [(0, Bv.jsx)(VP, {
                noaAction: nP
              }), hv("plotsGame:placementRotate")]
            }), (0, Bv.jsxs)(Yv.A, {
              onClick: zv.stop,
              children: [(0, Bv.jsx)(VP, {
                keyCode: DP
              }), hv("general:cancel")]
            }), (0, Bv.jsxs)(Yv.j, {
              disabled: !gv,
              onClick: zv.build,
              children: [(0, Bv.jsx)(VP, {
                keyCode: OP
              }), hv("plotsGame:placementBuild")]
            })]
          })]
        })
      })
    }

    function VP(vv) {
      return (0, Bv.jsx)(dz.e, {
        className: "PlotsPlacementKey",
        ...vv
      })
    }

    function UP() {}
    var RP = Pv(4292);
    class xP {
      constructor(vv) {
        this.placement = vv, this.press = null
      }
      down(vv) {
        if (null !== this.press) return !1;
        const {
          id: zv,
          mouse: Pv,
          x: hv,
          y: Sv,
          atMs: ev
        } = vv;
        return this.press = {
          id: zv,
          mouse: Pv,
          x: hv,
          y: Sv,
          atMs: ev,
          moved: !1
        }, Pv || this.placement.beginDrag(vv.ndcX, vv.ndcY), !0
      }
      move(vv) {
        const zv = this.press;
        null !== zv && zv.id === vv.id && (zv.moved ||= Math.hypot(vv.x - zv.x, vv.y - zv.y) > 8), vv.mouse ? this.placement.hoverAt(vv.ndcX, vv.ndcY) : (null === zv || void 0 === zv ? void 0 : zv.id) === vv.id && this.placement.dragTo(vv.ndcX, vv.ndcY)
      }
      up(vv) {
        const zv = this.press;
        (null === zv || void 0 === zv ? void 0 : zv.id) === vv.id && (this.move(vv), this.end(), !zv.moved && (zv.mouse || vv.atMs - zv.atMs <= 250) && this.placement.tap())
      }
      cancel(vv) {
        var zv;
        (null === (zv = this.press) || void 0 === zv ? void 0 : zv.id) === vv && this.end()
      }
      leave(vv) {
        let {
          id: zv,
          mouse: Pv
        } = vv;
        Pv && this.placement.endHover(), this.cancel(zv)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }

    function tP(vv) {
      let {
        placement: zv
      } = vv;
      return null === (0, Dv.j)(sP, zv.getView()) ? null : (0, Bv.jsx)(qP, {
        placement: zv
      })
    }

    function qP(vv) {
      let {
        placement: zv
      } = vv;
      (0, RP.e)(!0, !0, "PlotsPlacementLayer");
      const Pv = (0, ev.useMemo)((() => new xP(zv)), [zv]);
      return (0, Bv.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: vv => {
          "mouse" === vv.pointerType && 0 !== vv.button || !Pv.down(IP(vv)) || vv.currentTarget.setPointerCapture(vv.pointerId)
        },
        onPointerMove: vv => {
          Pv.move(IP(vv))
        },
        onPointerUp: vv => {
          Pv.up(IP(vv))
        },
        onPointerCancel: vv => {
          Pv.cancel(vv.pointerId)
        },
        onLostPointerCapture: vv => {
          Pv.cancel(vv.pointerId)
        },
        onPointerLeave: vv => {
          Pv.leave(IP(vv))
        },
        "aria-hidden": !0
      })
    }

    function IP(vv) {
      const {
        left: zv,
        top: Pv,
        width: hv,
        height: Sv
      } = vv.currentTarget.getBoundingClientRect();
      return {
        id: vv.pointerId,
        mouse: "mouse" === vv.pointerType,
        x: vv.clientX,
        y: vv.clientY,
        ndcX: (vv.clientX - zv) / hv * 2 - 1,
        ndcY: 1 - (vv.clientY - Pv) / Sv * 2,
        atMs: vv.timeStamp
      }
    }
    var QP = Pv(2279),
      ZP = Pv(36198),
      AP = Pv(1923),
      LP = Pv(1243);
    const HP = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function MP(vv) {
      let {
        hud: zv
      } = vv;
      const Pv = (0, Dv.j)(lz, zv.getPlot()),
        [hv, Sv] = (0, ev.useState)(null),
        gv = (0, ZP.q)(hv);
      if ("none" === Pv[0]) return null;
      const [, pv, dv, Nv, lv, Tv] = Pv;
      return (0, Bv.jsx)("div", {
        className: fv()("PlotsPlotBannerContainer", {
          Below: gv
        }),
        children: (0, Bv.jsx)(yP, {
          plotX: pv,
          plotZ: dv,
          ownerName: Nv,
          ownerId: lv,
          relation: Tv,
          plaqueRef: Sv
        }, `${pv},${dv}`)
      })
    }

    function yP(vv) {
      var zv, Pv;
      let {
        plotX: hv,
        plotZ: Sv,
        ownerName: ev,
        ownerId: gv,
        relation: pv,
        plaqueRef: dv
      } = vv;
      const {
        t: Nv
      } = (0, Vv.x)(), lv = (0, AP.h)("hiddenPlayerNames"), Tv = (0, AP.h)("players"), Wv = null === gv ? null : null !== (zv = null === (Pv = Tv.byId[gv]) || void 0 === Pv ? void 0 : Pv.cosmetics) && void 0 !== zv ? zv : null, wv = Nv("plotsGame:plotBannerCoords", {
        x: hv,
        z: Sv
      }), av = "own" === pv || null !== ev;
      return (0, Bv.jsxs)("div", {
        ref: dv,
        className: fv()("PlotsPlotBanner", {
          Own: "own" === pv,
          Shared: "shared" === pv
        }),
        role: "status",
        children: [(0, Bv.jsxs)("span", {
          className: fv()("PlotsPlotBannerSeal", {
            Face: null !== Wv
          }),
          children: [null !== Wv && (0, Bv.jsx)(QP.e, {
            cosmetics: Wv
          }), null === Wv && (0, Bv.jsx)(Fv.b, {
            name: HP[pv]
          })]
        }), (0, Bv.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, Bv.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === pv && Nv("plotsGame:plotBannerYours"), "own" !== pv && null !== ev && Nv("plotsGame:plotBannerOwner", {
              name: (0, LP.f)(ev, lv)
            }), !av && wv]
          }), av && (0, Bv.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [wv, "shared" === pv && (0, Bv.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: Nv("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }

    function BP(vv) {
      let {
        progress: zv,
        goal: Pv
      } = vv;
      const hv = Math.min(zv, Pv);
      return (0, Bv.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, Bv.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": Pv,
          "aria-valuenow": hv,
          children: (0, Bv.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${hv/Pv})`
            }
          })
        }), (0, Bv.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [hv, "/", Pv]
        })]
      })
    }

    function JP(vv) {
      return {
        translationKey: `plotsGame:${vv}`,
        actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
      }
    }
    const EP = {
      house: {
        icon: "house",
        titleKey: "plotsGame:starterLotHouseTitle",
        desktop: JP("starterLotHouseHint", ["alt-fire"]),
        touch: JP("starterLotHouseHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotHousePlain"
      },
      garden: {
        icon: "sparkle",
        titleKey: "plotsGame:starterLotGarden",
        desktop: JP("starterLotGardenHint", ["alt-fire"]),
        touch: JP("starterLotGardenHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotGardenPlain"
      },
      boulder: {
        icon: "hammer",
        titleKey: "plotsGame:starterLotBoulder",
        desktop: JP("starterLotBreakHint", ["primary-fire"]),
        touch: JP("starterLotBreakHintTouch"),
        plainKey: "plotsGame:starterLotBreakPlain"
      },
      fly: {
        icon: "angles-up",
        titleKey: "plotsGame:starterLotFly",
        desktop: JP("starterLotFlyHint", ["jump"]),
        touch: JP("starterLotFlyHintTouch"),
        plainKey: "plotsGame:starterLotFlyPlain"
      },
      backpack: {
        icon: "backpack",
        titleKey: "plotsGame:starterLotBackpack",
        desktop: JP("starterLotBackpackHint", ["OpenInventory"]),
        touch: JP("starterLotBackpackHintTouch"),
        plainKey: "plotsGame:starterLotBackpackPlain"
      },
      neighbour: {
        icon: "person",
        titleKey: "plotsGame:starterLotNeighbour",
        desktop: JP("starterLotNeighbourHint", ["forward", "left", "backward", "right"]),
        touch: JP("starterLotNeighbourHintTouch"),
        plainKey: "plotsGame:starterLotNeighbourPlain"
      }
    };

    function oP(vv, zv, Pv) {
      const {
        translationKey: hv,
        actions: Sv
      } = Pv ? zv.touch : zv.desktop;
      if (0 === Sv.length) return vv(hv);
      const ev = [];
      for (const gv of Sv) {
        const hv = (0, YP.x)(gv, Pv),
          Sv = YP.z[gv][0];
        if (null === hv && void 0 === Sv) return vv(zv.plainKey);
        ev.push(null === hv ? (0, YP.p)(Sv) : vv(hv.translationKey))
      }
      return vv(hv, {
        key: ev.join("")
      })
    }

    function bP(vv) {
      let {
        hud: zv
      } = vv;
      const Pv = (0, Dv.j)(Nz, zv.getStep()),
        {
          t: hv
        } = (0, Vv.x)();
      return (0, Bv.jsxs)(gz.g, {
        placement: "bottom",
        children: ["step" === Pv[0] && (0, Bv.jsx)(rP, {
          step: Pv[1],
          progress: Pv[2],
          goal: Pv[3]
        }, Pv[1]), "celebrate" === Pv[0] && (0, Bv.jsx)(kP, {
          className: fv()("Celebrate", {
            Gold: "house" === Pv[1]
          }),
          icon: "star",
          title: hv("house" === Pv[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
        }, `celebrate-${Pv[1]}`)]
      })
    }

    function rP(vv) {
      let {
        step: zv,
        progress: Pv,
        goal: hv
      } = vv;
      const {
        isTouchScreen: Sv
      } = (0, pv.i)(["isTouchScreen"]), {
        t: ev
      } = (0, Vv.x)(), gv = EP[zv];
      return (0, Bv.jsxs)(kP, {
        icon: gv.icon,
        title: ev(gv.titleKey),
        children: [(0, Bv.jsx)("div", {
          className: "PlotsStepCardHint SmallTextLight",
          children: oP(ev, gv, Sv)
        }), hv > 1 && (0, Bv.jsx)(BP, {
          progress: Pv,
          goal: hv
        }), "backpack" === zv && Sv && (0, Bv.jsx)(XP, {})]
      })
    }

    function kP(vv) {
      let {
        className: zv,
        icon: Pv,
        title: hv,
        children: Sv
      } = vv;
      return (0, Bv.jsxs)("div", {
        className: fv()("PlotsStepCard", zv),
        role: "status",
        children: [(0, Bv.jsx)("span", {
          className: "PlotsStepCardIcon",
          children: (0, Bv.jsx)(Fv.b, {
            name: Pv
          })
        }), (0, Bv.jsxs)("div", {
          className: "PlotsStepCardBody",
          children: [(0, Bv.jsx)("div", {
            className: "PlotsStepCardTitle SmallTextBold",
            children: hv
          }), Sv]
        })]
      })
    }

    function XP() {
      return (0, ev.useEffect)((() => (pv.c.set({
        backpackPointerRequested: !0
      }), () => {
        pv.c.set({
          backpackPointerRequested: !1
        })
      })), []), null
    }
    const uP = function(vv, zv, Pv, hv) {
      let {
        localPlayerId: Sv
      } = hv;
      const pv = new Tz;
      let dv = null,
        Nv = null,
        lv = null,
        Tv = null,
        Wv = null;
      const wv = [];
      return {
        onCreate: vv => {
          dv = new FP(vv, Sv), Nv = new dP(vv, Sv, dv), lv = new dP(vv, Sv, dv), Tv = new iP(vv, Sv), Wv = new mv(vv, Tv), wv.push((0, gv.w)((0, ev.createElement)(ev.Fragment, null, (0, ev.createElement)(MP, {
            hud: pv
          }), (0, ev.createElement)(bP, {
            hud: pv
          }), (0, ev.createElement)(wz, {
            hud: pv,
            journal: Wv
          }), (0, ev.createElement)(tP, {
            placement: Tv
          }), (0, ev.createElement)(KP, {
            placement: Tv
          })), {
            content: (0, ev.createElement)(Sz, {
              journal: Wv
            })
          }))
        },
        MT: () => {
          Nv.MT(), lv.MT(), Tv.MT(), Wv.MT()
        },
        onPlayerAttemptAltAction: (vv, zv, Pv, hv, Sv, ev) => {
          var gv;
          if (null !== ev) return;
          const pv = void 0 === zv ? null : [zv, Pv, hv];
          return null !== (gv = Nv.attemptAltAction(pv)) && void 0 !== gv ? gv : lv.attemptAltAction(pv)
        },
        onPlayerClickUp: () => {
          Nv.endPress(), lv.endPress()
        },
        onAfterRender: (vv, zv) => {
          Tv.afterRender(zv), Nv.afterRender(zv), lv.afterRender(zv)
        },
        onClose: () => {
          for (const vv of wv) vv();
          dv.dispose(), Nv.dispose(), lv.dispose(), Tv.dispose(), dv = null, Nv = null, lv = null, Tv = null, Wv = null
        },
        onReceivedMessageFromServer: (vv, zv) => {
          if ("plotsStarterLot" === vv) pv.receiveStep(zv);
          else if ("plotsPlot" === vv) pv.receivePlot(zv);
          else if ("plotsStarterHouse" === vv) Nv.la(zv);
          else if ("plotsBlueprint" === vv) {
            const vv = zv;
            lv.la(vv), Tv.la(vv)
          } else "plotsJournal" === vv ? Wv.la(zv) : "plotsJournalOpen" === vv ? Wv.openFromServer() : "plotsPreviewEnd" === vv && Tv.endFromServer()
        }
      }
    }
  },
  38669: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv,
      i: () => ev
    });
    const hv = 1 / .6,
      Sv = {
        kind: "smokePuff"
      };
    class ev {
      constructor(vv, zv, Pv) {
        this.style = vv, this.GT = zv, this.half = Pv, this.particles = null, this.lastFrame = -1
      }
      emit(vv, zv, Pv) {
        let ev = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return Pv !== this.lastFrame && (this.lastFrame = Pv, this.particles || (this.particles = vv.createParticles(function(vv, zv) {
          const [
            [Pv, ev, gv],
            [pv, dv, Nv]
          ] = vv.colours;
          return {
            texture: vv.soft ? Sv : "square_particle",
            GT: zv,
            minLifeTime: vv.life[0] / hv,
            maxLifeTime: vv.life[1] / hv,
            minEmitPower: vv.power[0] * hv,
            maxEmitPower: vv.power[1] * hv,
            minSize: vv.size[0],
            maxSize: vv.size[1],
            emitRate: 0,
            gravity: [0, vv.lift * hv * hv, 0],
            dir1: [-vv.spread, 1, -vv.spread],
            dir2: [vv.spread, 1, vv.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Pv, ev, gv, vv.alpha],
              maxColor: [pv, dv, Nv, vv.alpha]
            }, {
              timeFraction: 1,
              minColor: [Pv, ev, gv, 0],
              maxColor: [pv, dv, Nv, 0]
            }],
            blendMode: vv.blendMode
          }
        }(this.style, this.GT), {
          pos: zv,
          half: this.half
        })), this.particles.moveTo(zv, this.half), this.particles.emit(ev), !0)
      }
      dispose() {
        var vv;
        null === (vv = this.particles) || void 0 === vv || vv.stop(), this.particles = null
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);