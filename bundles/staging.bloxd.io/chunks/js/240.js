export const id = 240;
export const ids = [240];
export const modules = {
  39374: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => Dg
    });
    const Yq = [0, 90, 180, 270],
      lq = "plotsblueprint";
    var Oq = gq(57),
      mq = gq(36657),
      xq = gq(24),
      Aq = gq(1622),
      cq = gq(1710),
      uq = gq(31);
    const Bq = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      Wq = {
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
      Nq = ["small", "medium", "large"].flatMap((qq => Bq.flat().filter((Eq => Wq[Eq].tier === qq))));

    function aq(qq) {
      return Wq[qq]
    }
    const Vq = new Map(Bq.flatMap((qq => qq.slice(1).map(((Eq, gq) => [Eq, qq[gq]])))));

    function dq(qq) {
      var Eq;
      return null !== (Eq = Vq.get(qq)) && void 0 !== Eq ? Eq : null
    }
    const jq = {
      farm_hut: "plotsGame:journalNoteFarmHut",
      rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
      castle_tower: "plotsGame:journalNoteCastleTower",
      farm_house: "plotsGame:journalNoteFarmHouse",
      farm_barn: "plotsGame:journalNoteFarmBarn"
    };

    function Hq(qq, Eq) {
      const gq = new Set(qq),
        Yq = function(qq) {
          const Eq = new Set(qq);
          return new Set(Nq.filter((qq => {
            const gq = dq(qq);
            return null === gq || Eq.has(gq)
          })))
        }(gq);
      return Nq.map((qq => {
        const lq = qq === Eq;
        return gq.has(qq) ? {
          id: qq,
          active: lq,
          state: "completed",
          unlockedBy: null
        } : Yq.has(qq) ? {
          id: qq,
          active: lq,
          state: "open",
          unlockedBy: null
        } : {
          id: qq,
          active: lq,
          state: "locked",
          unlockedBy: dq(qq)
        }
      }))
    }
    const oq = "plotsJournalChanged";
    class Pq {
      constructor(qq, Eq) {
        this.api = qq, this.placement = Eq, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.SN("journal_opened")
        }, this.build = qq => {
          this.SN("placement_started"), this.placement.start(qq), (0, mq.e)()
        }, this.putAway = () => {
          this.api.sendCommand(`${lq} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      ga(qq) {
        let [, Eq, gq] = qq;
        this.pages = Hq(Eq, gq), uq.i.TV(oq, this.pages, !0)
      }
      openFromServer() {
        this.openRequested = !0, this.SB()
      }
      SB() {
        this.openRequested && !xq.b.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, Aq.p)() || (0, cq.isTypingInInput)() || null !== this.placement.getView() || (0, mq.m)())
      }
      SN(qq) {
        this.reported.has(qq) || (this.reported.add(qq), this.api.sendCommand(`${lq} report ${qq}`))
      }
    }
    var Qq = gq(1018),
      yq = gq.n(Qq),
      tq = gq(1025),
      rq = gq(1422),
      vq = gq(4359),
      hq = gq(3282),
      nq = gq(1416),
      bq = gq(1095),
      iq = gq(1183),
      Zq = gq(9379);
    const fq = [0, 90, 180, 270],
      Mq = /^(meta\|rot\d)\|([lrud]+)$/,
      Tq = "nesw",
      zq = /^meta\|([nesw]*)\|?(Stacked)?$/,
      Sq = function(qq) {
        const Eq = new WeakMap;
        return (gq, Yq) => {
          let lq = Eq.get(gq);
          return void 0 === lq && (lq = qq(gq, Yq), Eq.set(gq, lq)), lq
        }
      }((qq => new pq(qq)));
    class pq {
      constructor(qq) {
        this.blockMetadata = qq, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const Eq = new Set(Object.keys(qq).map((Eq => qq[Eq].id)));
        Eq.add(0), this.maxBlockId = Math.max(...Eq)
      }
      static
      for (qq) {
        return Sq(qq)
      }
      getBlockIdMapping(qq, Eq) {
        const gq = this.getBlockIdMappingKey(qq, Eq);
        let Yq = this.blockIdMappings.get(gq);
        return void 0 === Yq && fq.includes(qq) && (Yq = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, qq, Eq), this.blockIdMappings.set(gq, Yq)), Yq
      }
      turnBlockId(qq, Eq, gq) {
        return this.mapBlockId(this.blockMetadata[qq], Eq, this.getRotationMapping(Eq, gq), gq)
      }
      getBlockIdMappingKey(qq, Eq) {
        return `r${qq}|m${Number(Eq)}`
      }
      createBlockIdMapping(qq, Eq, gq, Yq) {
        const lq = new Uint16Array(Eq + 1),
          Oq = this.getRotationMapping(gq, Yq);
        for (const mq in qq) {
          const Eq = qq[mq];
          lq[Eq.id] = this.mapBlockId(Eq, gq, Oq, Yq)
        }
        return lq
      }
      getRotationMapping(qq, Eq) {
        const gq = Math.round(qq / 90),
          Yq = new Uint8Array(4);
        for (let lq = 0; lq < 4; lq++) Yq[lq] = (4 + lq - gq) % 4;
        if (Eq) {
          let qq = Yq[0];
          Yq[0] = Yq[1], Yq[1] = qq, qq = Yq[2], Yq[2] = Yq[3], Yq[3] = qq
        }
        return Yq
      }
      mapBlockId(qq, Eq, gq, Yq) {
        var lq;
        const {
          blockMetadata: Oq
        } = this, mq = Math.round(Eq / 90), {
          id: xq,
          meta: Aq
        } = qq, {
          rot: cq,
          rootName: uq,
          metaStr: Bq
        } = Aq;
        let Wq;
        const [, Nq, aq] = null !== (lq = zq.exec(Bq)) && void 0 !== lq ? lq : [];
        if (void 0 !== Nq) {
          var Vq, dq;
          Wq = null !== (Vq = null === (dq = Oq[`${uq}|meta|${[Tq.split("").filter(((qq,Eq)=>Nq.split("").some((qq=>{const gq=Tq.indexOf(qq);return((Yq?3-gq:gq)+mq)%4===Eq})))).join(""),aq].filter(Boolean).join("|")}`]) || void 0 === dq ? void 0 : dq.id) && void 0 !== Vq ? Vq : xq
        } else if (null === cq) Wq = xq;
        else {
          var jq, Hq;
          const qq = gq[cq - 1] + 1;
          let Eq = Bq.replace(`rot${cq}`, `rot${qq}`);
          Yq && Aq.stairsCorner && (Eq = Eq.replace(/(Left|Right)$/, (qq => "Left" === qq ? "Right" : "Left"))), Yq && "Chest" === uq && (Eq = Eq.replace(/\|(left|right)$/, ((qq, Eq) => "left" === Eq ? "|right" : "|left")));
          const lq = Mq.exec(Eq);
          if (Yq && null !== lq) {
            const qq = "lrud".split("").filter((qq => lq[2].includes("l" === qq ? "r" : "r" === qq ? "l" : qq)));
            Eq = `${lq[1]}|${qq.join("")}`
          }
          const mq = `${uq}|${Eq}`;
          if (Wq = null !== (jq = null === (Hq = Oq[mq]) || void 0 === Hq ? void 0 : Hq.id) && void 0 !== jq ? jq : null, null === Wq) {
            const qq = Oq[uq];
            Wq = qq.rootMetaDesc === mq ? qq.id : xq
          }
        }
        return Wq
      }
    }

    function Gq(qq, Eq, gq) {
      let {
        xRotationMappedOrigin: Yq,
        shouldSwapXZ: lq
      } = gq;
      const Oq = lq ? Eq : qq;
      return null === Yq ? Oq : Yq - Oq
    }

    function Lq(qq, Eq, gq) {
      let {
        zRotationMappedOrigin: Yq,
        shouldSwapXZ: lq
      } = gq;
      const Oq = lq ? qq : Eq;
      return null === Yq ? Oq : Yq - Oq
    }
    const Jq = {
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
      kq = new Map;

    function Rq(qq, Eq) {
      const gq = `${qq}|${Eq}`;
      let Yq = kq.get(gq);
      if (void 0 === Yq) {
        const {
          size: lq,
          palette: Oq,
          layers: mq
        } = Jq[qq], xq = 90 === Eq || 270 === Eq, [Aq, cq] = xq ? [lq[2], lq[0]] : [lq[0], lq[2]], uq = function(qq, Eq, gq) {
          let Yq = null,
            lq = null,
            Oq = !1;
          switch (qq) {
            case 0:
              break;
            case 90:
              Yq = Eq - 1, Oq = !0;
              break;
            case 180:
              Yq = Eq - 1, lq = gq - 1;
              break;
            case 270:
              lq = gq - 1, Oq = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${qq}`)
          }
          return {
            xRotationMappedOrigin: Yq,
            zRotationMappedOrigin: lq,
            shouldSwapXZ: Oq
          }
        }(Eq, Aq, cq), Bq = pq.for(Zq.i), Wq = Oq.map((qq => (0, Zq.h)(Bq.turnBlockId((0, Zq.k)(qq), Eq, !1)))), Nq = [];
        mq.forEach(((qq, Eq) => {
          qq.split(" ").forEach(((qq, gq) => {
            for (let Yq = 0; Yq < qq.length; Yq++)
              if ("." !== qq[Yq]) {
                const lq = [Gq(Yq, gq, uq), Eq, Lq(Yq, gq, uq)];
                Nq.push({
                  offset: lq,
                  block: Wq[qq.charCodeAt(Yq) - "a".charCodeAt(0)]
                })
              }
          }))
        })), Yq = {
          size: [Aq, lq[1], cq],
          cells: Nq
        }, kq.set(gq, Yq)
      }
      return Yq
    }
    const Uq = {
      farm_hut: gq.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
      farm_house: gq.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
      farm_barn: gq.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
      rusticHome_tent: gq.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
      rusticHome_cabin: gq.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
      rusticHome_house: gq.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
      market_stand: gq.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
      market_stall: gq.p + "static/media/market_stall.9a562807f9dff591618a.webp",
      market_shop: gq.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
      castle_wall: gq.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
      castle_gate: gq.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
      castle_tower: gq.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
    };
    var Fq = gq(1070);
    const sq = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function Xq(qq) {
      let {
        page: Eq,
        building: gq,
        onBuild: Yq,
        onPutAway: lq
      } = qq;
      const {
        t: Oq
      } = (0, iq.v)(), {
        displayName: mq,
        tier: xq
      } = aq(Eq.id), Aq = Rq(Eq.id, 0).cells.length, cq = jq[Eq.id], uq = "locked" === Eq.state, Bq = gq ? rq.g : rq.p;
      return (0, Fq.jsxs)("article", {
        className: yq()("PlotsJournalPage", {
          Locked: uq
        }),
        children: [(0, Fq.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: Oq(mq.translationKey)
        }), (0, Fq.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [Oq(sq[xq]), " \xb7 ", Oq("plotsGame:journalBlocks", {
            blocks: String(Aq)
          })]
        }), (0, Fq.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [Nq.map((qq => (0, Fq.jsx)("img", {
            className: yq()({
              Shown: qq === Eq.id
            }),
            src: Uq[qq],
            alt: "",
            draggable: !1
          }, qq))), "completed" === Eq.state && (0, Fq.jsx)("span", {
            className: "PlotsJournalStamp",
            children: Oq("plotsGame:journalBuilt")
          }), uq && (0, Fq.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, Fq.jsx)(tq.d, {
              name: "lock"
            })
          })]
        }), void 0 !== cq && "completed" !== Eq.state && (0, Fq.jsx)("p", {
          className: "PlotsJournalNote",
          children: Oq(cq)
        }), (0, Fq.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === Eq.state && (0, Fq.jsx)("p", {
            className: "PlotsJournalHint",
            children: Oq("plotsGame:journalLocked", {
              name: Oq(aq(Eq.unlockedBy).displayName.translationKey)
            })
          }), Eq.active && (0, Fq.jsxs)(Fq.Fragment, {
            children: [(0, Fq.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: Oq("plotsGame:journalBuilding")
            }), (0, Fq.jsx)(rq.i, {
              onClick: lq,
              children: Oq("plotsGame:journalPutAway")
            })]
          }), !uq && !Eq.active && (0, Fq.jsx)(Bq, {
            onClick: () => {
              Yq(Eq.id)
            },
            children: Oq("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function wq(qq) {
      let {
        className: Eq,
        page: gq,
        hidden: Yq,
        building: lq,
        journal: Oq
      } = qq;
      return (0, Fq.jsxs)("div", {
        ref: qq => {
          null !== qq && (qq.inert = Yq)
        },
        className: yq()("PlotsJournalSide", Eq),
        children: [void 0 !== gq && (0, Fq.jsx)(Xq, {
          page: gq,
          building: lq,
          onBuild: Oq.build,
          onPutAway: Oq.putAway
        }), void 0 === gq && (0, Fq.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var Kq = gq(307),
      Cq = gq(1870);

    function Iq(qq) {
      return Math.cos((0, Cq.j)(qq))
    }

    function eq(qq) {
      return (0, Cq.D)(Math.acos(Kq.c.clamp(qq, -1, 1)))
    }

    function Dq(qq, Eq, gq, Yq, lq) {
      const Oq = Math.abs(Eq - qq),
        mq = (0, Cq.D)(lq / (gq * Math.abs(Math.sin((0, Cq.j)(qq))))),
        xq = 450 * Math.min(1, Oq / Yq),
        Aq = mq > 0 ? 3 * Oq / mq : 1 / 0;
      return Math.round(Math.max(120, Math.min(xq, Aq)))
    }
    class qE {
      constructor() {
        this.samples = []
      }
      add(qq, Eq) {
        for (this.samples.push({
            x: qq,
            at: Eq
          }); Eq - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const qq = this.samples[0],
          Eq = this.samples[this.samples.length - 1];
        return Eq.at > qq.at ? (Eq.x - qq.x) / (Eq.at - qq.at) : 0
      }
    }

    function EE(qq, Eq) {
      return qq > Eq && qq >= 600
    }

    function gE(qq) {
      return eq(new DOMMatrixReadOnly(getComputedStyle(qq).transform).m11)
    }

    function YE(qq, Eq) {
      qq.style.transform = `rotateY(${-Eq}deg)`, qq.classList.add("Turning")
    }

    function lE(qq) {
      let {
        journal: Eq
      } = qq;
      const {
        t: gq
      } = (0, iq.v)(), Yq = (0, nq.h)(oq, Eq.getPages()), lq = (0, bq.n)(EE), [xq, Aq] = (0, Oq.useState)((() => function(qq) {
        const Eq = qq.findIndex((qq => qq.active));
        return -1 !== Eq ? Eq : Math.max(0, qq.findIndex((qq => "open" === qq.state)))
      }(Yq))), uq = (0, Oq.useRef)(null), Bq = (0, Oq.useRef)(null), Wq = (0, Oq.useRef)({
        Forward: null,
        Back: null
      }), Nq = lq ? 2 : 1, aq = lq ? 180 : 90, Vq = xq - xq % Nq, dq = Vq > 0, jq = Vq + Nq < Yq.length, Hq = (0, Oq.useCallback)((() => {
        const qq = Bq.current;
        return null === qq ? Vq : (Bq.current = null, qq.animation.cancel(), (Eq = Wq.current[qq.direction]).style.transform = "", Eq.classList.remove("Turning"), null === qq.next ? Vq : (Aq(qq.next), qq.next));
        var Eq
      }), [Vq]), Pq = (0, Oq.useCallback)(((qq, Eq, gq, Yq) => {
        const lq = Wq.current[qq],
          Oq = gE(lq),
          mq = Eq === ("Forward" === qq) ? aq : 0;
        YE(lq, mq);
        const xq = lq.animate([{
          transform: `rotateY(${-Oq}deg)`
        }, {
          transform: `rotateY(${-mq}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : Dq(Oq, mq, lq.offsetWidth, aq, mq > Oq ? -gq : gq),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        Bq.current = {
          direction: qq,
          animation: xq,
          next: Eq ? Yq + ("Forward" === qq ? Nq : -Nq) : null
        }, xq.onfinish = () => {
          var qq;
          (null === (qq = Bq.current) || void 0 === qq ? void 0 : qq.animation) === xq && Hq()
        }
      }), [Nq, aq, Hq]), Qq = (0, Oq.useCallback)((qq => {
        if (null !== uq.current) return;
        const Eq = Hq();
        ("Forward" === qq ? Eq + Nq < Yq.length : Eq > 0) && Pq(qq, !0, 0, Eq)
      }), [Hq, Pq, Nq, Yq.length]);
      (0, Oq.useEffect)((() => {
        Eq.onOpened()
      }), [Eq]), (0, Oq.useEffect)((() => () => {
        var qq;
        null === (qq = Bq.current) || void 0 === qq || qq.animation.cancel()
      }), []), (0, Oq.useEffect)((() => {
        const qq = qq => {
          var Eq;
          qq.pointerId !== (null === (Eq = uq.current) || void 0 === Eq ? void 0 : Eq.pointerId) || uq.current.following || (uq.current = null)
        };
        return window.addEventListener("pointerup", qq), () => {
          window.removeEventListener("pointerup", qq)
        }
      }), []), (0, hq.c)((qq => ("ArrowLeft" === qq.code || "ArrowRight" === qq.code) && !(0, cq.isTypingInInput)()), (qq => {
        qq.stopPropagation(), Qq("ArrowLeft" === qq.code ? "Back" : "Forward")
      }));
      const tq = (qq, Eq, gq) => {
          const Yq = function(qq, Eq, gq, Yq) {
            return (qq < 0 ? gq : Yq) ? Kq.c.clampAbs(qq, Eq) : Math.sign(qq) * Eq * (1 - 1 / (.55 * Math.abs(qq) / Eq + 1))
          }(qq.base + gq, Nq * qq.width, jq, dq);
          return "Forward" === Eq ? Math.min(Yq, 0) : Math.max(Yq, 0)
        },
        Zq = (qq, Eq) => {
          const gq = uq.current;
          if (uq.current = null, null === gq.direction) return;
          gq.speed.add(qq, Eq);
          const Yq = gq.speed.get(),
            lq = tq(gq, gq.direction, qq - gq.x);
          Pq(gq.direction, null !== function(qq, Eq, gq, Yq, lq) {
            if (Math.abs(Eq) >= .3 ? Math.sign(Eq) !== Math.sign(qq) : Math.abs(qq) < .5 * gq) return null;
            const Oq = qq < 0 ? "Forward" : "Back";
            return ("Forward" === Oq ? Yq : lq) ? Oq : null
          }(lq, Yq, Nq * gq.width, jq, dq), Yq, Vq)
        },
        fq = Yq.some((qq => qq.active)),
        Mq = (qq, gq, lq) => (0, Fq.jsx)(wq, {
          className: qq,
          page: gq >= 0 && gq < Yq.length ? Yq[gq] : void 0,
          hidden: lq,
          building: fq,
          journal: Eq
        });
      return (0, Fq.jsx)(vq.c, {
        close: mq.h,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, Fq.jsxs)("section", {
          className: yq()("PlotsJournal", {
            Spread: lq
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": gq("plotsGame:journalTitle"),
          children: [(0, Fq.jsx)(rq.m, {
            className: "PlotsJournalClose",
            onClick: mq.h
          }), (0, Fq.jsx)(OE, {
            direction: "Back",
            disabled: !dq,
            onTurn: Qq
          }), (0, Fq.jsx)("div", {
            className: "PlotsJournalBookPages",
            onPointerDown: qq => {
              var Eq;
              if (!qq.isPrimary || 0 !== qq.button || null !== Bq.current && null !== qq.target.closest("button")) return;
              const gq = new qE;
              gq.add(qq.clientX, qq.timeStamp);
              const Yq = Wq.current.Forward.offsetWidth,
                lq = Bq.current;
              Bq.current = null;
              let Oq = 0;
              if (null !== lq) {
                const Eq = Wq.current[lq.direction],
                  gq = gE(Eq);
                lq.animation.cancel(), YE(Eq, gq), Oq = function(qq, Eq, gq, Yq) {
                  return (qq < 0 ? gq : Yq) ? qq : Math.sign(qq) * Eq * (1 / (1 - Math.min(Math.abs(qq) / Eq, .99)) - 1) / .55
                }(function(qq, Eq, gq, Yq) {
                  return gq * (Iq(Eq) - Iq("Forward" === qq ? 0 : Yq))
                }(lq.direction, gq, Yq, aq), Nq * Yq, jq, dq), qq.currentTarget.setPointerCapture(qq.pointerId)
              }
              uq.current = {
                pointerId: qq.pointerId,
                x: qq.clientX,
                y: qq.clientY,
                base: Oq,
                width: Yq,
                following: null !== lq,
                direction: null !== (Eq = null === lq || void 0 === lq ? void 0 : lq.direction) && void 0 !== Eq ? Eq : null,
                speed: gq
              }
            },
            onPointerMove: qq => {
              const Eq = uq.current;
              if (null === Eq || qq.pointerId !== Eq.pointerId) return;
              if (0 === qq.buttons) return void Zq(qq.clientX, qq.timeStamp);
              const gq = qq.clientX - Eq.x;
              !Eq.following && function(qq, Eq) {
                return Math.abs(qq) > 8 && Math.abs(qq) > Math.abs(Eq)
              }(gq, qq.clientY - Eq.y) && (Eq.following = !0, Eq.direction = gq < 0 ? "Forward" : "Back", qq.currentTarget.setPointerCapture(qq.pointerId)), null !== Eq.direction && (Eq.speed.add(qq.clientX, qq.timeStamp), YE(Wq.current[Eq.direction], function(qq, Eq, gq, Yq) {
                const lq = gq * Iq("Forward" === qq ? 0 : Yq) + Eq;
                return Kq.c.clamp(eq(lq / gq), 0, Yq)
              }(Eq.direction, tq(Eq, Eq.direction, gq), Eq.width, aq)))
            },
            onPointerUp: qq => {
              var Eq;
              qq.pointerId === (null === (Eq = uq.current) || void 0 === Eq ? void 0 : Eq.pointerId) && Zq(qq.clientX, qq.timeStamp)
            },
            onPointerCancel: qq => {
              const Eq = uq.current;
              qq.pointerId === (null === Eq || void 0 === Eq ? void 0 : Eq.pointerId) && (uq.current = null, null !== Eq.direction && Pq(Eq.direction, !1, 0, Vq))
            },
            children: (0, Fq.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [lq && Mq("Left", Vq - 2, !0), Mq("Right", Vq + 2 * Nq - 1, !0), (0, Fq.jsxs)("div", {
                ref: qq => {
                  Wq.current.Back = qq
                },
                className: "PlotsJournalLeaf Back",
                children: [Mq("Recto", Vq - 1, !0), lq && Mq("Verso", Vq, !1)]
              }), (0, Fq.jsxs)("div", {
                ref: qq => {
                  Wq.current.Forward = qq
                },
                className: "PlotsJournalLeaf Forward",
                children: [Mq("Recto", Vq + Nq - 1, !1), lq && Mq("Verso", Vq + Nq, !0)]
              })]
            })
          }), (0, Fq.jsx)(OE, {
            direction: "Forward",
            disabled: !jq,
            onTurn: Qq
          })]
        })
      })
    }

    function OE(qq) {
      let {
        direction: Eq,
        disabled: gq,
        onTurn: Yq
      } = qq;
      const {
        t: lq
      } = (0, iq.v)();
      return (0, Fq.jsx)("div", {
        className: yq()("PlotsJournalArrow", Eq),
        children: (0, Fq.jsx)(rq.g, {
          disabled: gq,
          ariaLabel: lq("Forward" === Eq ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            Yq(Eq)
          },
          children: (0, Fq.jsx)(tq.d, {
            name: "angle-up"
          })
        })
      })
    }
    var mE = gq(36648),
      xE = gq(1895),
      AE = gq(1945);
    const cE = "plotsStepChanged",
      uE = "plotsPlotChanged";
    class BE {
      constructor() {
        this.step = ["none"], this.plot = ["none"]
      }
      getStep() {
        return this.step
      }
      receiveStep(qq) {
        this.step = qq, uq.i.TV(cE, qq, !0)
      }
      getPlot() {
        return this.plot
      }
      receivePlot(qq) {
        this.plot = qq, uq.i.TV(uE, qq, !0)
      }
    }
    const WE = "KeyJ";

    function NE(qq) {
      let {
        hud: Eq,
        journal: gq
      } = qq;
      const Yq = (0, nq.h)(oq, gq.getPages()),
        lq = (0, nq.h)(cE, Eq.getStep()),
        {
          isTouchScreen: Oq
        } = (0, xq.j)(["isTouchScreen"]),
        {
          t: uq
        } = (0, iq.v)(),
        Bq = null !== Yq && "none" === lq[0];
      return (0, hq.c)((qq => null !== Yq && qq.code === WE && !qq.repeat && !(0, cq.isTypingInInput)()), (qq => {
        (0, Aq.y)(qq, Bq, mq.m)
      })), Bq ? (0, Fq.jsx)(mE.g, {
        placement: "topRight",
        children: (0, Fq.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, Fq.jsxs)("button", {
            type: "button",
            className: yq()("PlotsJournalButton SmallTextBold", {
              Touch: Oq
            }),
            onClick: mq.m,
            children: [(0, Fq.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, Fq.jsx)(xE.e, {
                itemName: "Book",
                amount: 0
              })
            }), uq("plotsGame:journalButton"), !Oq && (0, Fq.jsx)(AE.c, {
              className: "PlotsJournalButtonKey",
              keyCode: WE
            })]
          })
        })
      }) : null
    }
    var aE = gq(38399),
      VE = gq(38160),
      dE = gq(36979),
      jE = gq(9419),
      HE = gq(9438),
      oE = gq(37796);
    const PE = new Map([
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
      QE = [...dE.e.blockRemoveActionRoots, ...VE.e, ...jE.g, "Board", "Code Block", "Custom Lobby Block"],
      yE = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let tE = null;

    function rE() {
      return tE ??= function() {
        const qq = vE(),
          Eq = Math.max(...qq.map((qq => Zq.i[qq].id))) + 1,
          gq = new Int32Array(Eq),
          Yq = new Int32Array(Eq),
          lq = new Uint8Array(Eq).fill(1),
          Oq = new Uint8Array(Eq),
          mq = new Uint8Array(Eq),
          xq = new Array(Eq).fill("Air"),
          Aq = new Map,
          cq = qq => {
            let Eq = Aq.get(qq);
            return void 0 === Eq && (Eq = Aq.size + 1, Aq.set(qq, Eq)), Eq
          },
          uq = new Set(QE);
        for (const Wq of qq) {
          var Bq;
          const {
            id: qq,
            meta: Eq,
            altActionable: Aq,
            canBePlacedOver: Nq
          } = Zq.i[Wq];
          gq[qq] = cq(hE(Wq));
          const aq = Eq.stairsCorner;
          if (null === aq) Yq[qq] = gq[qq];
          else {
            const gq = aq.endsWith("Right");
            Yq[qq] = cq(`${Eq.rootName}|rot${gq?Eq.rot%4+1:Eq.rot}|${Eq.halfblockPlacement}|${aq.replace("Right","Left")}`)
          }
          lq[qq] = Nq ? 1 : 0, Oq[qq] = Aq || null !== Eq.open || Wq in oE.c || uq.has(Eq.rootName) || void 0 !== (0, VE.g)(Eq.rootName) ? 1 : 0;
          const {
            rootName: Vq
          } = Eq;
          mq[qq] = null !== Eq.open || VE.e.includes(Vq) || Vq.includes("Bookshelf") || Vq.includes("Mailbox") ? 1 : 0, xq[qq] = null !== (Bq = (0, aE.f)(qq)) && void 0 !== Bq ? Bq : Vq
        }
        return {
          kinds: gq,
          shapes: Yq,
          empty: lq,
          inUse: Oq,
          ownAltActionMessage: mq,
          placingItems: xq
        }
      }(), tE
    }

    function vE() {
      return Object.keys(Zq.i).filter((qq => Zq.i[qq].name === qq))
    }

    function hE(qq) {
      var Eq;
      const gq = Zq.i[qq],
        {
          rootName: Yq,
          rot: lq
        } = gq.meta,
        [, ...Oq] = (null !== (Eq = gq.rootMetaDesc) && void 0 !== Eq ? Eq : qq).split("|"),
        mq = Oq.filter((qq => !("meta" === qq || yE.test(qq) || (0, HE.B)(gq) && /^[nesw]+$/.test(qq) || jE.g.includes(Yq) && /^[lrud]+$/.test(qq) || Kq.K.includes(Yq) && /^(left|right)$/.test(qq))));
      return [Yq, ...mq].map((qq => "fenceGate" === gq.model && qq === `rot${lq}` ? "rot" + ((lq - 1) % 2 + 1) : qq)).join("|")
    }

    function nE(qq, Eq) {
      const {
        kinds: gq,
        shapes: Yq
      } = rE();
      return gq[qq] === gq[Eq] || Yq[qq] === Yq[Eq]
    }

    function bE(qq) {
      return 1 === rE().empty[qq]
    }

    function iE(qq) {
      return rE().placingItems[qq]
    }

    function ZE(qq) {
      return PE.get(Zq.i[qq].meta.rootName)
    }
    var fE = gq(9415),
      ME = gq(9433);
    const TE = [0, 0, 0, 1, 1, 1],
      zE = (0, fE.d)([
        [2, 0, 2, 6, 6, 6]
      ]),
      SE = (0, fE.d)([
        [3, 0, 3, 5, 5, 5]
      ]),
      pE = (0, fE.d)([
        [3, 3, 3, 5, 8, 5]
      ]),
      GE = [0, 1, 2, 3].map((qq => (0, fE.d)((0, fE.n)([
        [3, 2, 0, 5, 7, 3]
      ], qq))));

    function LE(qq) {
      const {
        pV: Eq,
        model: gq,
        blockModel: Yq,
        meta: lq
      } = Zq.i[qq];
      return void 0 !== Eq ? Eq : "CentreCross" === gq ? zE : null !== Yq && void 0 !== Yq && Yq.startsWith("torch") ? lq.halfblockPlacement === ME.c.side ? GE[lq.rot - 1] : lq.halfblockPlacement === ME.c.top ? pE : SE : TE
    }
    var JE = gq(36949),
      kE = gq(190);

    function RE(qq, Eq) {
      const gq = kE.c.ZH / 2;
      return qq[0] < Eq[0] + gq && qq[0] + 1 > Eq[0] - gq && qq[1] < Eq[1] + kE.c.UH && qq[1] + 1 > Eq[1] && qq[2] < Eq[2] + gq && qq[2] + 1 > Eq[2] - gq
    }

    function UE(qq, Eq, gq, Yq, lq) {
      const Oq = Math.hypot(...Eq.dir);
      if (!Number.isFinite(Oq) || 0 === Oq) return -1;
      const {
        from: mq,
        reach: xq,
        solid: Aq
      } = Eq, cq = [Eq.dir[0] / Oq, Eq.dir[1] / Oq, Eq.dir[2] / Oq], uq = null === Aq ? xq : Math.min(xq, function(qq, Eq, gq) {
        const Yq = FE(qq, Eq, gq);
        if (Yq !== 1 / 0) return Yq;
        return (gq[0] + .5 - qq[0]) * Eq[0] + (gq[1] + .5 - qq[1]) * Eq[1] + (gq[2] + .5 - qq[2]) * Eq[2]
      }(mq, cq, Aq) + .75);
      let Bq = -1,
        Wq = 1 / 0,
        Nq = 1 / 0;
      for (let aq = 0; aq < qq.length; aq += 4) {
        const Eq = [qq[aq], qq[aq + 1], qq[aq + 2]],
          Oq = lq(aq) ? xq : uq;
        let Aq = -1,
          Vq = FE(mq, cq, Eq);
        if (Vq > Oq) {
          const qq = [Eq[0] + .5 - mq[0], Eq[1] + .5 - mq[1], Eq[2] + .5 - mq[2]];
          if (Vq = qq[0] * cq[0] + qq[1] * cq[1] + qq[2] * cq[2], Vq <= 0 || Vq > Oq) continue;
          if (Aq = Math.hypot(qq[0] - Vq * cq[0], qq[1] - Vq * cq[1], qq[2] - Vq * cq[2]), Aq > .7 || !Yq(aq)) continue
        }(Aq < Wq || Aq === Wq && Vq < Nq) && gq(aq) && (Bq = aq, Wq = Aq, Nq = Vq)
      }
      return Bq
    }

    function FE(qq, Eq, gq) {
      let Yq = 0,
        lq = 1 / 0;
      for (let Oq = 0; Oq < 3; Oq++) {
        const mq = gq[Oq] - qq[Oq];
        if (0 === Eq[Oq]) {
          if (mq > 0 || mq + 1 < 0) return 1 / 0;
          continue
        }
        const xq = mq / Eq[Oq],
          Aq = (mq + 1) / Eq[Oq];
        Yq = Math.max(Yq, Math.min(xq, Aq)), lq = Math.min(lq, Math.max(xq, Aq))
      }
      return Yq <= lq ? Yq : 1 / 0
    }
    var sE = gq(38040),
      XE = gq(38486);
    const wE = [1, 1, 1];
    class KE {
      constructor(qq) {
        this.api = qq, this.meshes = null, this.shown = null
      }
      show(qq) {
        if (!(0, JE.f)(qq, this.shown))
          if (this.shown = null === qq ? null : [qq[0], qq[1], qq[2]], null !== this.meshes)
            for (const Eq of this.meshes) this.api.setGameMesh(Eq, null === qq ? {
              visible: !1
            } : {
              anchor: qq,
              visible: !0
            });
          else if (null !== qq) {
          const Eq = [sE.g, sE.g, sE.g, 0, 0, 0];
          this.meshes = [this.build([Eq], sE.j, qq), this.build((0, sE.e)(), sE.n, qq)]
        }
      }
      dispose() {
        for (const Eq of null !== (qq = this.meshes) && void 0 !== qq ? qq : []) {
          var qq;
          this.api.disposeGameMesh(Eq)
        }
        this.meshes = null, this.shown = null
      }
      build(qq, Eq, gq) {
        const Yq = [],
          lq = [];
        for (const [Oq, mq, xq, Aq, cq, uq] of qq)(0, XE.g)(Yq, lq, [Aq + .5, cq + .5, uq + .5], [Oq, mq, xq]);
        return this.api.createGameMesh({
          positions: Yq,
          indices: lq
        }, {
          rgb: wE,
          alpha: Eq,
          onTop: !0
        }, gq)
      }
    }
    class CE {
      constructor(qq) {
        this.api = qq, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(qq) {
        const Eq = kE.c.Oa;
        this.chunks = [];
        for (let gq = 0; gq < qq.length; gq += 3) {
          const Yq = Math.floor(qq[gq] / Eq),
            lq = Math.floor(qq[gq + 1] / Eq),
            Oq = Math.floor(qq[gq + 2] / Eq);
          this.watches(Yq, lq, Oq) || this.chunks.push(Yq, lq, Oq)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const qq = performance.now();
        if (qq - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = qq;
        let Eq = !1;
        for (let gq = 0; gq < this.chunks.length; gq += 3) {
          const qq = this.api.getChunkVersion(this.chunks[gq], this.chunks[gq + 1], this.chunks[gq + 2]);
          this.versions[gq / 3] !== qq && (this.versions[gq / 3] = qq, Eq = !0)
        }
        return Eq
      }
      watches(qq, Eq, gq) {
        for (let Yq = 0; Yq < this.chunks.length; Yq += 3)
          if (this.chunks[Yq] === qq && this.chunks[Yq + 1] === Eq && this.chunks[Yq + 2] === gq) return !0;
        return !1
      }
    }
    const IE = .35,
      eE = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      DE = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      qg = [.95, .2, .15];
    class Eg {
      constructor() {
        this.groups = []
      }
      add(qq, Eq, gq, Yq, lq) {
        let Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : TE;
        for (const mq of this.groups)
          if (lg(mq, Yq, lq)) return mq.cells.push(qq, Eq, gq), void mq.boxes.push(Oq);
        this.groups.push({
          rgb: Yq,
          look: lq,
          cells: [qq, Eq, gq],
          boxes: [Oq]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class gg {
      constructor(qq) {
        this.api = qq, this.shown = []
      }
      show(qq) {
        const Eq = [];
        for (const gq of qq) {
          const qq = this.shown.findIndex((qq => {
            let {
              group: Eq
            } = qq;
            return lg(Eq, gq.rgb, gq.look) && Og(Eq, gq)
          })); - 1 === qq ? Eq.push(this.build(gq)) : (Eq.push(this.shown[qq]), this.shown.splice(qq, 1))
        }
        this.dispose(), this.shown = Eq
      }
      dispose() {
        for (const {
            meshes: qq
          }
          of this.shown)
          for (const Eq of qq) this.api.disposeGameMesh(Eq);
        this.shown = []
      }
      build(qq) {
        const {
          rgb: Eq,
          look: gq,
          boxes: Yq
        } = qq, lq = [Eq[0] + (1 - Eq[0]) * IE, Eq[1] + (1 - Eq[1]) * IE, Eq[2] + (1 - Eq[2]) * IE], Oq = [this.buildMesh(qq.cells, Eq, gq.alpha, ((qq, Eq, lq, Oq) => {
          Yg(qq, Eq, lq, Yq[Oq], gq.size, !1)
        })), this.buildMesh(qq.cells, lq, gq.alpha, ((qq, Eq, lq, Oq) => {
          Yg(qq, Eq, lq, Yq[Oq], gq.size, !0)
        }))];
        return gq.crossed && Oq.push(this.buildMesh(qq.cells, Eq, .9, ((qq, Eq, Yq) => {
          (0, XE.i)(qq, Eq, Yq, gq.size + .01, .12)
        }))), {
          group: qq,
          meshes: Oq
        }
      }
      buildMesh(qq, Eq, gq, Yq) {
        const lq = [qq[0], qq[1], qq[2]],
          Oq = [],
          mq = [];
        for (let xq = 0; xq < qq.length; xq += 3) Yq(Oq, mq, [qq[xq] - lq[0] + .5, qq[xq + 1] - lq[1] + .5, qq[xq + 2] - lq[2] + .5], xq / 3);
        return this.api.createGameMesh({
          positions: Oq,
          indices: mq
        }, {
          rgb: [Eq[0], Eq[1], Eq[2]],
          alpha: gq
        }, lq)
      }
    }

    function Yg(qq, Eq, gq, Yq, lq, Oq) {
      for (let mq = 0; mq < Yq.length; mq += 6) {
        const xq = [0, 0, 0],
          Aq = [0, 0, 0];
        for (let qq = 0; qq < 3; qq++) xq[qq] = gq[qq] + ((Yq[mq + qq] + Yq[mq + qq + 3]) / 2 - .5) * lq, Aq[qq] = (Yq[mq + qq + 3] - Yq[mq + qq]) * lq;
        (0, XE.d)(qq, Eq, xq, Aq, Oq)
      }
    }

    function lg(qq, Eq, gq) {
      return qq.rgb[0] === Eq[0] && qq.rgb[1] === Eq[1] && qq.rgb[2] === Eq[2] && qq.look === gq
    }

    function Og(qq, Eq) {
      if (qq.cells.length !== Eq.cells.length) return !1;
      for (let gq = 0; gq < qq.cells.length; gq++)
        if (qq.cells[gq] !== Eq.cells[gq]) return !1;
      return qq.boxes.every(((qq, gq) => qq === Eq.boxes[gq]))
    }

    function mg(qq, Eq) {
      return qq.getClientOption(Eq, "blockReach") + 1
    }
    class xg {
      constructor(qq, Eq, gq) {
        this.api = qq, this.localPlayerId = Eq, this.pickNext = gq, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(qq) {
        const [Eq, , gq] = qq.cameraDirection, Yq = Math.hypot(Eq, gq);
        Yq > .001 && (this.heading = [Eq / Yq, gq / Yq])
      }
      tapped(qq, Eq, gq) {
        const Yq = mg(this.api, this.localPlayerId),
          {
            origin: lq,
            direction: Oq
          } = this.api.getActionRay(),
          mq = [...lq],
          xq = [
            [mq, [mq[0] + Oq[0] * Yq, mq[1] + Oq[1] * Yq, mq[2] + Oq[2] * Yq]]
          ];
        null !== qq && xq.push([mq, (0, JE.e)(qq)]), this.tap = {
          lines: xq,
          next: Eq,
          ms: gq
        }
      }
      filled(qq, Eq) {
        this.tap = null, this.turnFrom(qq, Eq), this.retry(Eq)
      }
      arrived(qq, Eq) {
        const {
          tap: gq
        } = this;
        if (null === gq || Eq - gq.ms > 1500) return null;
        const Yq = (0, JE.e)(qq);
        return (0, JE.f)(gq.next, qq) || gq.lines.some((qq => {
          let [Eq, gq] = qq;
          return function(qq, Eq, gq) {
            const Yq = [gq[0] - Eq[0], gq[1] - Eq[1], gq[2] - Eq[2]],
              lq = [qq[0] - Eq[0], qq[1] - Eq[1], qq[2] - Eq[2]],
              Oq = Yq[0] ** 2 + Yq[1] ** 2 + Yq[2] ** 2,
              mq = 0 === Oq ? 0 : Math.min(1, Math.max(0, (lq[0] * Yq[0] + lq[1] * Yq[1] + lq[2] * Yq[2]) / Oq));
            return Math.hypot(lq[0] - Yq[0] * mq, lq[1] - Yq[1] * mq, lq[2] - Yq[2] * mq)
          }(Yq, Eq, gq) <= .9
        })) ? (this.tap = null, this.turnFrom(qq, Eq), gq.ms) : null
      }
      turnFrom(qq, Eq) {
        this.pending = {
          from: qq,
          ms: Eq,
          turnMs: Math.max(50, Math.min(250, Eq - this.lastFillMs))
        }, this.lastFillMs = Eq
      }
      retry(qq) {
        const {
          pending: Eq
        } = this;
        if (null === Eq) return;
        if (qq - Eq.ms > 1500) return void(this.pending = null);
        const gq = this.pickNext((0, JE.e)(Eq.from), (qq => (0, JE.f)(qq, Eq.from)));
        if (null === gq) return;
        this.pending = null;
        const {
          turning: Yq
        } = this;
        if (null !== Yq && qq < Yq.endMs && (0, JE.f)(Yq.to, gq)) return;
        const lq = this.api.getActionRay().origin,
          Oq = [gq[0] + .5 - lq[0], gq[1] + .5 - lq[1], gq[2] + .5 - lq[2]],
          mq = Math.hypot(Oq[0], Oq[2]);
        if (mq < .3) {
          const qq = Math.max(mq, .001);
          Oq[0] = this.heading[0] * qq, Oq[2] = this.heading[1] * qq
        }
        this.api.turnCamera(Oq, Eq.turnMs), this.turning = {
          to: gq,
          endMs: qq + Eq.turnMs
        }
      }
    }
    class Ag {
      constructor(qq, Eq, gq) {
        this.api = qq, this.localPlayerId = Eq, this.juice = gq, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], this.lastFilled = null, this.lastSeenFilled = null, this.playerCells = [], this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = null, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new CE(qq), this.meshes = new gg(qq), this.outline = new KE(qq), this.turn = new xg(qq, Eq, ((qq, Eq) => this.pickNext(qq, Eq)))
      }
      ga(qq) {
        const Eq = "active" === qq[0] ? `${qq[1]}|${qq[3]}|${qq[4]}|${qq[5]}|${qq[6]}` : "";
        if ("active" !== qq[0]) "built" === qq[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , gq, Yq, lq, Oq] = qq;
          Eq !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = gq) : gq === this.layerY ? this.burstUnlisted(Yq) : gq > this.layerY && this.finishLayer(gq), this.layerY = gq, this.layerCells.has(gq) || this.layerCells.set(gq, Yq.filter(ug)), this.ghostCells = Yq, this.palette = lq, this.occupiedCells = Oq
        }
        Eq !== this.blueprint && (this.blueprint = Eq, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((qq => this.api.blockNameToBlockId(qq))), this.chunkWatch.watch([...this.ghostCells.filter(ug), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(qq) {
        this.burstUnlisted([]), qq > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = qq)
      }
      SB() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const qq = performance.now();
        let Eq = !1;
        for (const [lq, Oq] of this.foreseen) {
          var gq;
          if (qq - Oq > 1e3) this.foreseen.delete(lq), Eq = !0, (null === (gq = this.lastFilled) || void 0 === gq ? void 0 : gq.join()) === lq && (this.lastFilled = this.lastSeenFilled)
        }
        const Yq = cg(this.api.getPositionView(this.localPlayerId));
        (Eq || Yq.some(((qq, Eq) => qq !== this.playerCells[Eq]))) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(qq) {
        const Eq = new Set;
        for (let lq = 0; lq < qq.length; lq += 4) Eq.add(`${qq[lq]},${qq[lq+1]},${qq[lq+2]}`);
        const gq = [],
          {
            ghostCells: Yq
          } = this;
        for (let lq = 0; lq < Yq.length; lq += 4) {
          const qq = `${Yq[lq]},${Yq[lq+1]},${Yq[lq+2]}`;
          !Eq.has(qq) && this.open.delete(qq) && gq.push(this.filledCell(lq))
        }
        this.burst(gq)
      }
      refresh() {
        const {
          ghostCells: qq,
          palette: Eq,
          occupiedCells: gq
        } = this, Yq = new Eg, lq = new Set, Oq = [], mq = [];
        for (let xq = 0; xq < qq.length; xq += 4) {
          const [gq, Aq, cq, uq] = [qq[xq], qq[xq + 1], qq[xq + 2], qq[xq + 3]], Bq = this.api.getBlockId(gq, Aq, cq), Wq = `${gq},${Aq},${cq}`, Nq = nE(this.blockIds[uq], Bq);
          !Nq && bE(Bq) ? Yq.add(gq, Aq, cq, ZE(Eq[uq]), eE, LE(Eq[uq])) : Nq ? this.open.has(Wq) && Oq.push(this.filledCell(xq)) : Yq.add(gq, Aq, cq, qg, DE), !Nq && this.api.isBlockInLoadedChunk(gq, Aq, cq) && (lq.add(Wq), mq.push(gq, Aq, cq, bE(Bq) ? 0 : 1))
        }
        this.open = lq, this.nextCells = mq;
        for (let xq = 0; xq < gq.length; xq += 3) {
          const [qq, Eq, lq] = [gq[xq], gq[xq + 1], gq[xq + 2]];
          bE(this.api.getBlockId(qq, Eq, lq)) || Yq.add(qq, Eq, lq, qg, DE)
        }
        this.meshes.show(Yq.toArray()), this.burst(Oq), this.showNext(), this.turn.retry(performance.now())
      }
      burst(qq) {
        const Eq = performance.now(),
          gq = [];
        for (const [lq, Oq, mq] of qq) {
          const qq = [lq, Oq, mq];
          this.lastSeenFilled = qq, this.foreseen.delete(qq.join()) || gq.push(qq)
        }
        const Yq = this.isHolding(Eq);
        for (const lq of gq) {
          if (this.lastFilled = lq, Yq && this.pressFilled) {
            this.turn.filled(lq, Eq);
            continue
          }
          const qq = this.turn.arrived(lq, Eq);
          if (null !== qq) {
            this.pressFilled = Yq;
            for (const [Eq, gq] of this.foreseen) gq <= qq && this.foreseen.delete(Eq)
          }
        }
        this.juice.filled(qq)
      }
      showNext() {
        var qq;
        const Eq = this.api.getPositionView(this.localPlayerId);
        this.playerCells.splice(0, 1 / 0, ...cg(Eq));
        const gq = this.lastFilled;
        this.nextCell = this.pickNext(null === gq ? [Eq[0], Eq[1] + 1, Eq[2]] : (0, JE.e)(gq), (() => !1)), this.outline.show(null !== (qq = this.aimed) && void 0 !== qq ? qq : this.nextCell)
      }
      pickNext(qq, Eq) {
        const gq = this.api.getPositionView(this.localPlayerId),
          Yq = [gq[0], gq[1] + kE.c.UH * kE.c.playerEyeToHeightRatio, gq[2]],
          lq = mg(this.api, this.localPlayerId),
          {
            nextCells: Oq
          } = this,
          mq = qq => [Oq[qq], Oq[qq + 1], Oq[qq + 2]],
          xq = function(qq, Eq, gq, Yq, lq, Oq) {
            let mq = -1,
              xq = -1,
              Aq = 1 / 0;
            for (let cq = 0; cq < qq.length; cq += Eq) {
              const Eq = (Oq(cq) ? 2 : 0) + (Yq(cq) ? 1 : 0);
              if (Eq < xq || lq(cq)) continue;
              const uq = (qq[cq] + .5 - gq[0]) ** 2 + (qq[cq + 1] + .5 - gq[1]) ** 2 + (qq[cq + 2] + .5 - gq[2]) ** 2;
              (Eq > xq || uq < Aq) && (mq = cq, xq = Eq, Aq = uq)
            }
            return mq
          }(Oq, 4, qq, (qq => 1 === Oq[qq + 3]), (qq => {
            const Yq = mq(qq);
            return RE(Yq, gq) || this.foreseen.has(Yq.join()) || Eq(Yq)
          }), (qq => function(qq, Eq, gq) {
            return (Eq[0] + .5 - qq[0]) ** 2 + (Eq[1] + .5 - qq[1]) ** 2 + (Eq[2] + .5 - qq[2]) ** 2 <= gq ** 2
          }(Yq, mq(qq), lq)));
        return -1 === xq ? null : mq(xq)
      }
      afterRender(qq) {
        var Eq;
        this.turn.look(qq);
        const gq = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === gq ? null : gq.position), this.outline.show(null !== (Eq = this.aimed) && void 0 !== Eq ? Eq : this.nextCell)
      }
      isHolding(qq) {
        return null !== this.altMs && qq - this.altMs <= 500
      }
      attemptAltAction(qq) {
        const Eq = performance.now();
        if (this.isHolding(Eq) || (this.pressFilled = !1), this.altMs = Eq, this.pressFilled) return "preventPlacement";
        const gq = this.findAimed(qq);
        if (null !== gq) return this.foreseen.set(gq.join(), Eq), this.lastFilled = gq, this.aimed = null, this.showNext(), this.turn.filled(gq, Eq), this.pressFilled = !0, "preventPlacement";
        null !== this.nextCell && this.turn.tapped(qq, this.nextCell, Eq)
      }
      findAimed(qq) {
        return function(qq, Eq, gq, Yq, lq, Oq, mq) {
          const xq = qq.Ngq(Eq),
            Aq = null === xq || null === qq.blockNameToBlockId(xq.name, !0) ? null : xq.name,
            cq = qq.getPositionView(Eq),
            {
              origin: uq,
              direction: Bq
            } = qq.getActionRay(),
            Wq = UE(Yq, {
              from: uq,
              dir: Bq,
              reach: mg(qq, Eq),
              solid: gq
            }, (Eq => {
              const gq = [Yq[Eq], Yq[Eq + 1], Yq[Eq + 2]];
              return !nE(lq[Yq[Eq + 3]], qq.getBlockId(...gq)) && !mq.has(gq.join()) && qq.isBlockInLoadedChunk(...gq) && !RE(gq, cq)
            }), (qq => null === Aq || Aq === iE(lq[Yq[qq + 3]])), (qq => null !== Oq && Yq[qq] === Oq[0] && Yq[qq + 1] === Oq[1] && Yq[qq + 2] === Oq[2]));
          return -1 === Wq ? null : [Yq[Wq], Yq[Wq + 1], Yq[Wq + 2]]
        }(this.api, this.localPlayerId, qq, this.ghostCells, this.blockIds, this.nextCell, this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(qq) {
        const {
          ghostCells: Eq
        } = this, [gq, Yq, lq] = ZE(this.palette[Eq[qq + 3]]);
        return [Eq[qq], Eq[qq + 1], Eq[qq + 2], gq, Yq, lq]
      }
    }

    function cg(qq) {
      let [Eq, gq, Yq] = qq;
      const lq = kE.c.ZH / 2;
      return [Math.floor(Eq), Math.floor(gq), Math.floor(Yq), Math.floor(Eq - lq), Math.floor(Eq + lq), Math.floor(gq + kE.c.UH), Math.floor(Yq - lq), Math.floor(Yq + lq)]
    }

    function ug(qq, Eq) {
      return Eq % 4 !== 3
    }

    function Bg(qq, Eq, gq, Yq, lq) {
      if (!qq.isBlockInLoadedChunk(Eq, Yq - 6, gq) || !qq.isBlockInLoadedChunk(Eq, Yq + 6 + lq, gq) || !qq.canModifyBlockAt(Eq, Yq, gq)) return NaN;
      let Oq = Yq - 1;
      if (0 !== qq.getBlockId(Eq, Oq, gq)) {
        for (; Oq < Yq + 6 && 0 !== qq.getBlockId(Eq, Oq + 1, gq);) Oq++;
        return Oq
      }
      for (; Oq > Yq - 6;)
        if (Oq--, 0 !== qq.getBlockId(Eq, Oq, gq)) return Oq;
      return NaN
    }

    function Wg(qq, Eq, gq, Yq, lq) {
      let Oq = 0;
      for (let mq = Yq + 1; mq <= Yq + lq; mq++) 0 !== qq.getBlockId(Eq, mq, gq) && Oq++;
      return Oq
    }

    function Ng(qq) {
      const Eq = new Map;
      for (const mq of qq) {
        var gq;
        if (Number.isNaN(mq)) return null;
        Eq.set(mq, (null !== (gq = Eq.get(mq)) && void 0 !== gq ? gq : 0) + 1)
      }
      let Yq = NaN,
        lq = 0;
      for (const [mq, xq] of Eq)(xq > lq || xq === lq && mq < Yq) && (Yq = mq, lq = xq);
      let Oq = 0;
      for (const mq of qq) Oq += Math.abs(mq - Yq);
      return Oq
    }

    function ag(qq, Eq, gq, Yq) {
      const {
        eye: lq,
        forward: Oq,
        tanHalfFovX: mq,
        tanHalfFovY: xq
      } = qq, [Aq, cq] = function(qq) {
        let [Eq, gq, Yq] = qq;
        const lq = Math.hypot(Eq, Yq),
          [Oq, mq] = [Yq / lq, -Eq / lq];
        return [
          [Oq, 0, mq],
          [gq * mq, Yq * Oq - Eq * mq, -gq * Oq]
        ]
      }(Oq), [uq, Bq] = [Eq * mq, gq * xq], Wq = Oq[0] + uq * Aq[0] + Bq * cq[0], Nq = Oq[1] + Bq * cq[1], aq = Oq[2] + uq * Aq[2] + Bq * cq[2], Vq = (Yq - lq[1]) / Nq;
      return Vq > 0 && Vq < 1 / 0 ? [lq[0] + Vq * Wq, lq[2] + Vq * aq] : null
    }
    const Vg = "plotsBlueprintPlacementChanged",
      dg = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class jg {
      constructor(qq, Eq) {
        this.api = qq, this.localPlayerId = Eq, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = qq => {
          var Eq, gq, Yq, Oq;
          const mq = null !== (Eq = null === (gq = this.placing) || void 0 === gq ? void 0 : gq.rotation) && void 0 !== Eq ? Eq : 0,
            {
              size: xq
            } = Rq(qq, mq),
            Aq = this.api.Py(this.localPlayerId),
            [cq, uq] = null !== (Yq = null !== (Oq = function(qq, Eq, gq) {
              const [Yq, lq, Oq] = Eq, [mq, xq, Aq] = [Math.floor(gq[0]), Math.floor(gq[1]), Math.floor(gq[2])], cq = 6 + Math.max(Yq, Oq) / 2, [uq, Bq] = [Math.ceil(cq + Yq / 2), Math.ceil(cq + Oq / 2)], [Wq, Nq] = [mq - uq, Aq - Bq], [aq, Vq] = [2 * uq + 1, 2 * Bq + 1], dq = new Float64Array(aq * Vq), jq = new Uint16Array(aq * Vq);
              for (let Qq = 0; Qq < aq; Qq++)
                for (let Eq = 0; Eq < Vq; Eq++) {
                  const gq = Bg(qq, Wq + Qq, Nq + Eq, xq, lq);
                  dq[Qq * Vq + Eq] = gq, Number.isNaN(gq) || (jq[Qq * Vq + Eq] = Wg(qq, Wq + Qq, Nq + Eq, gq, lq))
                }
              const Hq = [];
              let oq = null,
                Pq = 1 / 0;
              for (let Qq = 0; Qq + Yq <= aq; Qq++)
                for (let qq = 0; qq + Oq <= Vq; qq++) {
                  const [Eq, lq] = [Wq + Qq, Nq + qq], xq = Math.hypot(Eq + Yq / 2 - gq[0], lq + Oq / 2 - gq[2]);
                  if (xq > cq || mq >= Eq - 2 && mq < Eq + Yq + 2 && Aq >= lq - 2 && Aq < lq + Oq + 2) continue;
                  Hq.length = 0;
                  let uq = 0;
                  for (let gq = 0; gq < Yq; gq++)
                    for (let Eq = 0; Eq < Oq; Eq++) Hq.push(dq[(Qq + gq) * Vq + qq + Eq]), uq += jq[(Qq + gq) * Vq + qq + Eq];
                  const Bq = Ng(Hq);
                  if (null === Bq) continue;
                  const aq = xq + 3 * (Bq + uq);
                  aq < Pq && (Pq = aq, oq = [Eq, lq])
                }
              return oq
            }(this.api, xq, Aq)) && void 0 !== Oq ? Oq : this.cornerOnTarget(xq)) && void 0 !== Yq ? Yq : [Math.floor(Aq[0]) + 2, Math.floor(Aq[2])];
          this.placing = {
            id: qq,
            rotation: mq,
            corner: [cq, this.playerLevel(), uq],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null
          }, this.update(), this.api.sendCommand(`${lq} preview`)
        }, this.rotate = () => {
          const {
            id: qq,
            rotation: Eq,
            corner: gq
          } = this.placing, lq = Yq[(Yq.indexOf(Eq) + 1) % Yq.length], [Oq, , mq] = Rq(qq, Eq).size, [xq, , Aq] = Rq(qq, lq).size;
          this.moveTo(gq[0] + Math.floor(Oq / 2) - Math.floor(xq / 2), gq[2] + Math.floor(mq / 2) - Math.floor(Aq / 2), lq)
        }, this.hoverAt = (qq, Eq) => {
          this.placing.hover = [qq, Eq], this.moveCentreTo(this.camera, qq, Eq)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (qq, Eq) => {
          const gq = this.placing,
            {
              eye: Yq,
              forward: lq,
              tanHalfFovX: Oq,
              tanHalfFovY: mq
            } = this.camera,
            xq = {
              eye: [Yq[0], Yq[1], Yq[2]],
              forward: [lq[0], lq[1], lq[2]],
              tanHalfFovX: Oq,
              tanHalfFovY: mq
            },
            Aq = gq.corner[1],
            cq = ag(xq, qq, Eq, Aq);
          gq.hover = null, gq.drag = cq && {
            view: xq,
            ground: cq,
            corner: [gq.corner[0], gq.corner[2]],
            level: Aq
          }
        }, this.dragTo = (qq, Eq) => {
          const gq = this.placing.drag,
            Yq = gq && ag(gq.view, qq, Eq, gq.level);
          null !== gq && null !== Yq && this.moveTo(gq.corner[0] + Math.round(Yq[0] - gq.ground[0]), gq.corner[1] + Math.round(Yq[1] - gq.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const qq = this.view;
          qq.waiting || (qq.blocked ? this.TV({
            ...qq,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const qq = this.placing,
            {
              id: Eq,
              rotation: gq,
              corner: Yq
            } = qq;
          this.api.sendCommand(`${lq} place ${Eq} ${Yq.join(" ")} ${gq}`), qq.sent = {
            atMs: performance.now(),
            corner: [...Yq],
            rotation: gq,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${lq} preview off`))
        }, this.chunkWatch = new CE(qq), this.meshes = new gg(qq)
      }
      getView() {
        return this.view
      }
      SB() {
        const qq = this.placing;
        null !== qq && (null !== qq.sent && !qq.sent.timedOut && performance.now() - qq.sent.atMs > 3e3 ? (qq.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(qq) || this.chunkWatch.changed()) && this.update())
      }
      afterRender(qq) {
        const Eq = this.placing;
        null !== Eq && (! function(qq, Eq) {
          for (let gq = 0; gq < 3; gq++) Eq.eye[gq] = qq.cameraPosition[gq], Eq.forward[gq] = qq.cameraDirection[gq];
          Eq.tanHalfFovX = qq.tanHalfFovX, Eq.tanHalfFovY = qq.tanHalfFovY
        }(qq, this.camera), null !== Eq.hover && this.moveCentreTo(this.camera, Eq.hover[0], Eq.hover[1]))
      }
      ga(qq) {
        const Eq = this.placing;
        if (null === Eq || null === Eq.sent || "active" !== qq[0]) return;
        const {
          sent: gq
        } = Eq, [, Yq, lq, Oq, mq, xq, Aq] = qq;
        lq && Yq === Eq.id && Aq === gq.rotation && Oq === gq.corner[0] && mq === gq.corner[1] && xq === gq.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(qq) {
        let [Eq, , gq] = qq;
        const Yq = this.api.getTargetedBlock();
        if (null === Yq) return null;
        const [lq, , Oq] = Yq.position;
        return [lq - Math.floor(Eq / 2), Oq - Math.floor(gq / 2)]
      }
      playerLevel() {
        var qq;
        const [Eq, gq, Yq] = this.api.Py(this.localPlayerId);
        if (null !== (qq = this.api.getLocalPlayerMovement()) && void 0 !== qq && qq.onGround) return Math.ceil(gq - .01);
        const [lq, Oq, mq] = [Math.floor(Eq), Math.floor(gq), Math.floor(Yq)];
        for (let xq = Oq; xq >= Oq - 2; xq--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(lq, xq, mq))) return xq + 1;
        return Oq
      }
      followPlayerLevel(qq) {
        if (Hg(qq)) return !1;
        const Eq = this.playerLevel();
        return Eq !== qq.corner[1] && (qq.corner[1] = Eq, !0)
      }
      moveCentreTo(qq, Eq, gq) {
        const Yq = this.placing,
          lq = ag(qq, Eq, gq, Yq.corner[1]);
        if (null !== lq) {
          const [qq, , Eq] = Rq(Yq.id, Yq.rotation).size;
          this.moveTo(Math.round(lq[0] - qq / 2), Math.round(lq[1] - Eq / 2))
        }
      }
      moveTo(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const Yq = this.placing;
        if (Hg(Yq)) return;
        const [lq, Oq, mq] = Yq.corner;
        if (this.centreOnPlot(lq, mq) && !this.centreOnPlot(qq, Eq, gq))
          if (this.centreOnPlot(qq, mq, gq)) Eq = mq;
          else {
            if (!this.centreOnPlot(lq, Eq, gq)) return;
            qq = lq
          } qq === lq && Eq === mq && gq === Yq.rotation || (Yq.rotation = gq, Yq.corner = [qq, Oq, Eq], this.update())
      }
      centreOnPlot(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: Yq,
          corner: lq
        } = this.placing, [Oq, , mq] = Rq(Yq, gq).size;
        return this.api.canModifyBlockAt(qq + Math.floor(Oq / 2), lq[1], Eq + Math.floor(mq / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.TV(null)
      }
      update() {
        const {
          id: qq,
          rotation: Eq,
          corner: gq,
          refusals: Yq
        } = this.placing, lq = new Eg, Oq = [];
        let mq = !1,
          xq = 0;
        for (const {
            offset: uq,
            block: Bq
          }
          of Rq(qq, Eq).cells) {
          const [qq, Eq, Yq] = [gq[0] + uq[0], gq[1] + uq[1], gq[2] + uq[2]];
          Oq.push(qq, Eq, Yq);
          const Aq = !this.api.canModifyBlockAt(qq, Eq, Yq),
            cq = this.api.getBlockId(qq, Eq, Yq),
            Wq = !bE(cq) && !nE(this.api.blockNameToBlockId(Bq), cq);
          mq ||= Aq, xq += Wq ? 1 : 0, Aq || Wq ? lq.add(qq, Eq, Yq, qg, DE) : lq.add(qq, Eq, Yq, ZE(Bq), dg, LE(Bq))
        }
        this.chunkWatch.watch(Oq), this.meshes.show(lq.toArray());
        const Aq = this.view,
          cq = Hg(this.placing);
        (null === Aq || void 0 === Aq ? void 0 : Aq.id) === qq && Aq.blocked === mq && Aq.toClear === xq && Aq.waiting === cq && Aq.refusals === Yq || this.TV({
          id: qq,
          blocked: mq,
          toClear: xq,
          waiting: cq,
          refusals: Yq
        })
      }
      TV(qq) {
        this.view = qq, uq.i.TV(Vg, qq, !0)
      }
    }

    function Hg(qq) {
      let {
        sent: Eq
      } = qq;
      return null !== Eq && !Eq.timedOut
    }
    var og = gq(4096),
      Pg = gq(39098);

    function Qg(qq, Eq, gq) {
      const Yq = [255 * qq, 255 * Eq, 255 * gq],
        [lq, Oq, mq] = Yq.map((qq => qq + .4 * (255 - qq)));
      return {
        texture: "square_particle",
        WB: 48,
        minLifeTime: .3 / Pg.b,
        maxLifeTime: .55 / Pg.b,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * Pg.b * Pg.b, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...Yq, 1],
          maxColor: [lq, Oq, mq, 1]
        }, {
          timeFraction: 1,
          minColor: [...Yq, 0],
          maxColor: [lq, Oq, mq, 0]
        }],
        blendMode: og.h.Standard
      }
    }
    const yg = {
      texture: "glint",
      mipmaps: !1,
      WB: 96,
      minLifeTime: .5 / Pg.b,
      maxLifeTime: .9 / Pg.b,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * Pg.b * Pg.b, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: og.h.OneOne
    };
    class tg {
      constructor(qq, Eq) {
        this.api = qq, this.localPlayerId = Eq, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(qq) {
        if (this.api.particlesEnabled())
          for (const [Eq, gq, Yq, lq, Oq, mq] of qq.slice(0, 3)) {
            const qq = `${lq},${Oq},${mq}`;
            let xq = this.chips.get(qq);
            void 0 === xq && (xq = this.api.createParticles(Qg(lq, Oq, mq), {
              pos: [Eq + .5, gq + .5, Yq + .5]
            }), this.chips.set(qq, xq));
            for (let Eq = 0; Eq < 8; Eq++) this.setPoint(Eq, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            xq.emitPoints([Eq + .5, gq + .5, Yq + .5], this.points, 8)
          }
      }
      layerDone(qq) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const Eq = qq.length / 3;
        if (0 === Eq || !this.api.particlesEnabled()) return;
        const gq = Math.min(Eq, 48),
          [Yq, lq, Oq] = [qq[0] + .5, qq[1] + 1, qq[2] + .5];
        let mq = 0;
        for (let xq = 0; xq < gq; xq++) {
          const Aq = 3 * Math.floor(xq * Eq / gq);
          for (let Eq = 0; Eq < 2; Eq++) this.setPoint(mq++, qq[Aq] + Math.random() - Yq, qq[Aq + 1] + 1 - lq, qq[Aq + 2] + Math.random() - Oq, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(yg, {
          pos: [Yq, lq, Oq]
        }), this.sparkles.emitPoints([Yq, lq, Oq], this.points, mq)
      }
      dispose() {
        var qq;
        for (const Eq of this.chips.values()) Eq.stop();
        this.chips.clear(), null === (qq = this.sparkles) || void 0 === qq || qq.stop(), this.sparkles = null
      }
      setPoint(qq, Eq, gq, Yq, lq) {
        const Oq = 4 * qq;
        this.points[Oq] = Eq, this.points[Oq + 1] = gq, this.points[Oq + 2] = Yq, this.points[Oq + 3] = lq
      }
    }
    var rg = gq(1952);
    const vg = "SpecialAction1",
      hg = "KeyY",
      ng = "KeyX";

    function bg(qq) {
      let {
        placement: Eq
      } = qq;
      const gq = (0, nq.h)(Vg, Eq.getView()),
        {
          t: Yq
        } = (0, iq.v)(),
        {
          isTouchScreen: lq
        } = (0, xq.j)(["isTouchScreen"]),
        Oq = null !== gq,
        mq = Oq && !gq.blocked && !gq.waiting;
      if ((0, hq.c)((qq => Oq && !qq.repeat && !(0, cq.isTypingInInput)() && !(0, Aq.p)() && !lq), (qq => {
          const gq = function(qq, Eq, gq) {
            if (qq === ng) return Eq.stop;
            if (qq === hg) return gq ? Eq.build : Zg;
            return rg.u[vg].includes(qq) ? Eq.rotate : null
          }(qq.code, Eq, mq);
          null !== gq && (qq.stopPropagation(), gq())
        })), !Oq) return null;
      let uq = lq ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return gq.blocked ? uq = "plotsGame:placementOffPlot" : gq.toClear > 0 && (uq = "plotsGame:placementClear"), (0, Fq.jsx)(mE.g, {
        placement: "bottom",
        children: (0, Fq.jsxs)("div", {
          className: "PlotsPlacementCard",
          children: [(0, Fq.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: Yq(aq(gq.id).displayName.translationKey)
          }), (0, Fq.jsx)("div", {
            className: yq()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: gq.refusals > 0
            }),
            children: Yq(uq)
          }, gq.refusals), (0, Fq.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, Fq.jsxs)(rq.g, {
              onClick: Eq.rotate,
              children: [(0, Fq.jsx)(ig, {
                noaAction: vg
              }), Yq("plotsGame:placementRotate")]
            }), (0, Fq.jsxs)(rq.K, {
              onClick: Eq.stop,
              children: [(0, Fq.jsx)(ig, {
                keyCode: ng
              }), Yq("general:cancel")]
            }), (0, Fq.jsxs)(rq.p, {
              disabled: !mq,
              onClick: Eq.build,
              children: [(0, Fq.jsx)(ig, {
                keyCode: hg
              }), Yq("plotsGame:placementBuild")]
            })]
          })]
        })
      })
    }

    function ig(qq) {
      return (0, Fq.jsx)(AE.c, {
        className: "PlotsPlacementKey",
        ...qq
      })
    }

    function Zg() {}
    var fg = gq(4367);
    class Mg {
      constructor(qq) {
        this.placement = qq, this.press = null
      }
      down(qq) {
        if (null !== this.press) return !1;
        const {
          id: Eq,
          mouse: gq,
          x: Yq,
          y: lq,
          atMs: Oq
        } = qq;
        return this.press = {
          id: Eq,
          mouse: gq,
          x: Yq,
          y: lq,
          atMs: Oq,
          moved: !1
        }, gq || this.placement.beginDrag(qq.ndcX, qq.ndcY), !0
      }
      move(qq) {
        const Eq = this.press;
        null !== Eq && Eq.id === qq.id && (Eq.moved ||= Math.hypot(qq.x - Eq.x, qq.y - Eq.y) > 8), qq.mouse ? this.placement.hoverAt(qq.ndcX, qq.ndcY) : (null === Eq || void 0 === Eq ? void 0 : Eq.id) === qq.id && this.placement.dragTo(qq.ndcX, qq.ndcY)
      }
      up(qq) {
        const Eq = this.press;
        (null === Eq || void 0 === Eq ? void 0 : Eq.id) === qq.id && (this.move(qq), this.end(), !Eq.moved && (Eq.mouse || qq.atMs - Eq.atMs <= 250) && this.placement.tap())
      }
      cancel(qq) {
        var Eq;
        (null === (Eq = this.press) || void 0 === Eq ? void 0 : Eq.id) === qq && this.end()
      }
      leave(qq) {
        let {
          id: Eq,
          mouse: gq
        } = qq;
        gq && this.placement.endHover(), this.cancel(Eq)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }

    function Tg(qq) {
      let {
        placement: Eq
      } = qq;
      return null === (0, nq.h)(Vg, Eq.getView()) ? null : (0, Fq.jsx)(zg, {
        placement: Eq
      })
    }

    function zg(qq) {
      let {
        placement: Eq
      } = qq;
      (0, fg.e)(!0, !0, "PlotsPlacementLayer");
      const gq = (0, Oq.useMemo)((() => new Mg(Eq)), [Eq]);
      return (0, Fq.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: qq => {
          "mouse" === qq.pointerType && 0 !== qq.button || !gq.down(Sg(qq)) || qq.currentTarget.setPointerCapture(qq.pointerId)
        },
        onPointerMove: qq => {
          gq.move(Sg(qq))
        },
        onPointerUp: qq => {
          gq.up(Sg(qq))
        },
        onPointerCancel: qq => {
          gq.cancel(qq.pointerId)
        },
        onLostPointerCapture: qq => {
          gq.cancel(qq.pointerId)
        },
        onPointerLeave: qq => {
          gq.leave(Sg(qq))
        },
        "aria-hidden": !0
      })
    }

    function Sg(qq) {
      const {
        left: Eq,
        top: gq,
        width: Yq,
        height: lq
      } = qq.currentTarget.getBoundingClientRect();
      return {
        id: qq.pointerId,
        mouse: "mouse" === qq.pointerType,
        x: qq.clientX,
        y: qq.clientY,
        ndcX: (qq.clientX - Eq) / Yq * 2 - 1,
        ndcY: 1 - (qq.clientY - gq) / lq * 2,
        atMs: qq.timeStamp
      }
    }
    var pg = gq(2332),
      Gg = gq(36740),
      Lg = gq(1942),
      Jg = gq(1252);
    const kg = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function Rg(qq) {
      let {
        hud: Eq
      } = qq;
      const gq = (0, nq.h)(uE, Eq.getPlot()),
        [Yq, lq] = (0, Oq.useState)(null),
        mq = (0, Gg.j)(Yq);
      if ("none" === gq[0]) return null;
      const [, xq, Aq, cq, uq, Bq] = gq;
      return (0, Fq.jsx)("div", {
        className: yq()("PlotsPlotBannerContainer", {
          Below: mq
        }),
        children: (0, Fq.jsx)(Ug, {
          plotX: xq,
          plotZ: Aq,
          ownerName: cq,
          ownerId: uq,
          relation: Bq,
          plaqueRef: lq
        }, `${xq},${Aq}`)
      })
    }

    function Ug(qq) {
      var Eq, gq;
      let {
        plotX: Yq,
        plotZ: lq,
        ownerName: Oq,
        ownerId: mq,
        relation: xq,
        plaqueRef: Aq
      } = qq;
      const {
        t: cq
      } = (0, iq.v)(), uq = (0, Lg.g)("hiddenPlayerNames"), Bq = (0, Lg.g)("players"), Wq = null === mq ? null : null !== (Eq = null === (gq = Bq.byId[mq]) || void 0 === gq ? void 0 : gq.cosmetics) && void 0 !== Eq ? Eq : null, Nq = cq("plotsGame:plotBannerCoords", {
        x: Yq,
        z: lq
      }), aq = "own" === xq || null !== Oq;
      return (0, Fq.jsxs)("div", {
        ref: Aq,
        className: yq()("PlotsPlotBanner", {
          Own: "own" === xq,
          Shared: "shared" === xq
        }),
        role: "status",
        children: [(0, Fq.jsxs)("span", {
          className: yq()("PlotsPlotBannerSeal", {
            Face: null !== Wq
          }),
          children: [null !== Wq && (0, Fq.jsx)(pg.e, {
            cosmetics: Wq
          }), null === Wq && (0, Fq.jsx)(tq.d, {
            name: kg[xq]
          })]
        }), (0, Fq.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, Fq.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === xq && cq("plotsGame:plotBannerYours"), "own" !== xq && null !== Oq && cq("plotsGame:plotBannerOwner", {
              name: (0, Jg.g)(Oq, uq)
            }), !aq && Nq]
          }), aq && (0, Fq.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [Nq, "shared" === xq && (0, Fq.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: cq("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }

    function Fg(qq) {
      let {
        progress: Eq,
        goal: gq
      } = qq;
      const Yq = Math.min(Eq, gq);
      return (0, Fq.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, Fq.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": gq,
          "aria-valuenow": Yq,
          children: (0, Fq.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${Yq/gq})`
            }
          })
        }), (0, Fq.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [Yq, "/", gq]
        })]
      })
    }

    function sg(qq) {
      return {
        translationKey: `plotsGame:${qq}`,
        actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
      }
    }
    const Xg = {
      house: {
        icon: "house",
        titleKey: "plotsGame:starterLotHouseTitle",
        desktop: sg("starterLotHouseHint", ["alt-fire"]),
        touch: sg("starterLotHouseHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotHousePlain"
      },
      garden: {
        icon: "sparkle",
        titleKey: "plotsGame:starterLotGarden",
        desktop: sg("starterLotGardenHint", ["alt-fire"]),
        touch: sg("starterLotGardenHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotGardenPlain"
      },
      boulder: {
        icon: "hammer",
        titleKey: "plotsGame:starterLotBoulder",
        desktop: sg("starterLotBreakHint", ["primary-fire"]),
        touch: sg("starterLotBreakHintTouch"),
        plainKey: "plotsGame:starterLotBreakPlain"
      },
      fly: {
        icon: "angles-up",
        titleKey: "plotsGame:starterLotFly",
        desktop: sg("starterLotFlyHint", ["jump"]),
        touch: sg("starterLotFlyHintTouch"),
        plainKey: "plotsGame:starterLotFlyPlain"
      },
      backpack: {
        icon: "backpack",
        titleKey: "plotsGame:starterLotBackpack",
        desktop: sg("starterLotBackpackHint", ["OpenInventory"]),
        touch: sg("starterLotBackpackHintTouch"),
        plainKey: "plotsGame:starterLotBackpackPlain"
      },
      neighbour: {
        icon: "person",
        titleKey: "plotsGame:starterLotNeighbour",
        desktop: sg("starterLotNeighbourHint", ["forward", "left", "backward", "right"]),
        touch: sg("starterLotNeighbourHintTouch"),
        plainKey: "plotsGame:starterLotNeighbourPlain"
      }
    };

    function wg(qq, Eq, gq) {
      const {
        translationKey: Yq,
        actions: lq
      } = gq ? Eq.touch : Eq.desktop;
      if (0 === lq.length) return qq(Yq);
      const Oq = [];
      for (const mq of lq) {
        const Yq = (0, rg.s)(mq, gq),
          lq = rg.u[mq][0];
        if (null === Yq && void 0 === lq) return qq(Eq.plainKey);
        Oq.push(null === Yq ? (0, rg.l)(lq) : qq(Yq.translationKey))
      }
      return qq(Yq, {
        key: Oq.join("")
      })
    }

    function Kg(qq) {
      let {
        hud: Eq
      } = qq;
      const gq = (0, nq.h)(cE, Eq.getStep()),
        {
          t: Yq
        } = (0, iq.v)();
      return (0, Fq.jsxs)(mE.g, {
        placement: "bottom",
        children: ["step" === gq[0] && (0, Fq.jsx)(Cg, {
          step: gq[1],
          progress: gq[2],
          goal: gq[3]
        }, gq[1]), "celebrate" === gq[0] && (0, Fq.jsx)(Ig, {
          className: yq()("Celebrate", {
            Gold: "house" === gq[1]
          }),
          icon: "star",
          title: Yq("house" === gq[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
        }, `celebrate-${gq[1]}`)]
      })
    }

    function Cg(qq) {
      let {
        step: Eq,
        progress: gq,
        goal: Yq
      } = qq;
      const {
        isTouchScreen: lq
      } = (0, xq.j)(["isTouchScreen"]), {
        t: Oq
      } = (0, iq.v)(), mq = Xg[Eq];
      return (0, Fq.jsxs)(Ig, {
        icon: mq.icon,
        title: Oq(mq.titleKey),
        children: [(0, Fq.jsx)("div", {
          className: "PlotsStepCardHint SmallTextLight",
          children: wg(Oq, mq, lq)
        }), Yq > 1 && (0, Fq.jsx)(Fg, {
          progress: gq,
          goal: Yq
        }), "backpack" === Eq && lq && (0, Fq.jsx)(eg, {})]
      })
    }

    function Ig(qq) {
      let {
        className: Eq,
        icon: gq,
        title: Yq,
        children: lq
      } = qq;
      return (0, Fq.jsxs)("div", {
        className: yq()("PlotsStepCard", Eq),
        role: "status",
        children: [(0, Fq.jsx)("span", {
          className: "PlotsStepCardIcon",
          children: (0, Fq.jsx)(tq.d, {
            name: gq
          })
        }), (0, Fq.jsxs)("div", {
          className: "PlotsStepCardBody",
          children: [(0, Fq.jsx)("div", {
            className: "PlotsStepCardTitle SmallTextBold",
            children: Yq
          }), lq]
        })]
      })
    }

    function eg() {
      return (0, Oq.useEffect)((() => (xq.b.set({
        backpackPointerRequested: !0
      }), () => {
        xq.b.set({
          backpackPointerRequested: !1
        })
      })), []), null
    }
    const Dg = function(qq, Eq, gq, Yq) {
      let {
        localPlayerId: lq
      } = Yq;
      const xq = new BE;
      let Aq = null,
        cq = null,
        uq = null,
        Bq = null,
        Wq = null;
      const Nq = [];
      return {
        onCreate: qq => {
          Aq = new tg(qq, lq), cq = new Ag(qq, lq, Aq), uq = new Ag(qq, lq, Aq), Bq = new jg(qq, lq), Wq = new Pq(qq, Bq), Nq.push((0, mq.r)((0, Oq.createElement)(Oq.Fragment, null, (0, Oq.createElement)(Rg, {
            hud: xq
          }), (0, Oq.createElement)(Kg, {
            hud: xq
          }), (0, Oq.createElement)(NE, {
            hud: xq,
            journal: Wq
          }), (0, Oq.createElement)(Tg, {
            placement: Bq
          }), (0, Oq.createElement)(bg, {
            placement: Bq
          })), {
            content: (0, Oq.createElement)(lE, {
              journal: Wq
            })
          }))
        },
        SB: () => {
          cq.SB(), uq.SB(), Bq.SB(), Wq.SB()
        },
        onPlayerAttemptAltAction: (qq, Eq, gq, Yq, lq, Oq) => {
          var mq;
          if (null !== Oq) return;
          const xq = void 0 === Eq ? null : [Eq, gq, Yq];
          return null !== (mq = cq.attemptAltAction(xq)) && void 0 !== mq ? mq : uq.attemptAltAction(xq)
        },
        onPlayerClickUp: () => {
          cq.endPress(), uq.endPress()
        },
        onAfterRender: (qq, Eq) => {
          Bq.afterRender(Eq), cq.afterRender(Eq), uq.afterRender(Eq)
        },
        onClose: () => {
          for (const qq of Nq) qq();
          Aq.dispose(), cq.dispose(), uq.dispose(), Bq.dispose(), Aq = null, cq = null, uq = null, Bq = null, Wq = null
        },
        onReceivedMessageFromServer: (qq, Eq) => {
          if ("plotsStarterLot" === qq) xq.receiveStep(Eq);
          else if ("plotsPlot" === qq) xq.receivePlot(Eq);
          else if ("plotsStarterHouse" === qq) cq.ga(Eq);
          else if ("plotsBlueprint" === qq) {
            const qq = Eq;
            uq.ga(qq), Bq.ga(qq)
          } else "plotsJournal" === qq ? Wq.ga(Eq) : "plotsJournalOpen" === qq ? Wq.openFromServer() : "plotsPreviewEnd" === qq && Bq.endFromServer()
        }
      }
    }
  },
  39098: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq,
      f: () => Oq
    });
    const Yq = 1 / .6,
      lq = {
        kind: "smokePuff"
      };
    class Oq {
      constructor(qq, Eq, gq) {
        this.style = qq, this.WB = Eq, this.half = gq, this.particles = null, this.lastFrame = -1
      }
      emit(qq, Eq, gq) {
        let Oq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return gq !== this.lastFrame && (this.lastFrame = gq, this.particles || (this.particles = qq.createParticles(function(qq, Eq) {
          const [
            [gq, Oq, mq],
            [xq, Aq, cq]
          ] = qq.colours;
          return {
            texture: qq.soft ? lq : "square_particle",
            WB: Eq,
            minLifeTime: qq.life[0] / Yq,
            maxLifeTime: qq.life[1] / Yq,
            minEmitPower: qq.power[0] * Yq,
            maxEmitPower: qq.power[1] * Yq,
            minSize: qq.size[0],
            maxSize: qq.size[1],
            emitRate: 0,
            gravity: [0, qq.lift * Yq * Yq, 0],
            dir1: [-qq.spread, 1, -qq.spread],
            dir2: [qq.spread, 1, qq.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [gq, Oq, mq, qq.alpha],
              maxColor: [xq, Aq, cq, qq.alpha]
            }, {
              timeFraction: 1,
              minColor: [gq, Oq, mq, 0],
              maxColor: [xq, Aq, cq, 0]
            }],
            blendMode: qq.blendMode
          }
        }(this.style, this.WB), {
          pos: Eq,
          half: this.half
        })), this.particles.moveTo(Eq, this.half), this.particles.emit(Oq), !0)
      }
      dispose() {
        var qq;
        null === (qq = this.particles) || void 0 === qq || qq.stop(), this.particles = null
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);