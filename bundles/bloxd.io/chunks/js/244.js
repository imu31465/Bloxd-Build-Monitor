export const id = 244;
export const ids = [244];
export const modules = {
  39021: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => iD
    });
    const Dk = [0, 90, 180, 270],
      fk = "plotsblueprint";
    var Sk = ik(60),
      bk = ik(36143),
      rk = ik(22),
      Pk = ik(1614),
      mk = ik(1688),
      Mk = ik(26);
    const Kk = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      xk = {
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
      nk = ["small", "medium", "large"].flatMap((kk => Kk.flat().filter((ek => xk[ek].tier === kk))));

    function Uk(kk) {
      return xk[kk]
    }
    const Hk = new Map(Kk.flatMap((kk => kk.slice(1).map(((ek, ik) => [ek, kk[ik]])))));

    function wk(kk) {
      var ek;
      return null !== (ek = Hk.get(kk)) && void 0 !== ek ? ek : null
    }
    const lk = {
      farm_hut: "plotsGame:journalNoteFarmHut",
      rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
      castle_tower: "plotsGame:journalNoteCastleTower",
      farm_house: "plotsGame:journalNoteFarmHouse",
      farm_barn: "plotsGame:journalNoteFarmBarn"
    };

    function pk(kk, ek) {
      const ik = new Set(kk),
        Dk = function(kk) {
          const ek = new Set(kk);
          return new Set(nk.filter((kk => {
            const ik = wk(kk);
            return null === ik || ek.has(ik)
          })))
        }(ik);
      return nk.map((kk => {
        const fk = kk === ek;
        return ik.has(kk) ? {
          id: kk,
          active: fk,
          state: "completed",
          unlockedBy: null
        } : Dk.has(kk) ? {
          id: kk,
          active: fk,
          state: "open",
          unlockedBy: null
        } : {
          id: kk,
          active: fk,
          state: "locked",
          unlockedBy: wk(kk)
        }
      }))
    }
    const yk = "plotsJournalChanged";
    class Yk {
      constructor(kk, ek) {
        this.api = kk, this.placement = ek, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.CU("journal_opened")
        }, this.build = kk => {
          this.CU("placement_started"), this.placement.start(kk), (0, bk.d)()
        }, this.putAway = () => {
          this.api.sendCommand(`${fk} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      BU(kk) {
        let [, ek, ik] = kk;
        this.pages = pk(ek, ik), Mk.j.tm(yk, this.pages, !0)
      }
      openFromServer() {
        this.openRequested = !0, this.Px()
      }
      Px() {
        this.openRequested && !rk.b.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, Pk.s)() || (0, mk.isTypingInInput)() || null !== this.placement.getView() || (0, bk.r)())
      }
      CU(kk) {
        this.reported.has(kk) || (this.reported.add(kk), this.api.sendCommand(`${fk} report ${kk}`))
      }
    }
    var Lk = ik(1021),
      Ck = ik.n(Lk),
      Ak = ik(1033),
      jk = ik(1410),
      sk = ik(4471),
      dk = ik(3383),
      Vk = ik(1406),
      Fk = ik(1087),
      uk = ik(1172),
      qk = ik(9020);
    const Ik = [0, 90, 180, 270],
      zk = /^(meta\|rot\d)\|([lrud]+)$/,
      Qk = "nesw",
      vk = /^meta\|([nesw]*)\|?(Stacked)?$/,
      Ek = function(kk) {
        const ek = new WeakMap;
        return (ik, Dk) => {
          let fk = ek.get(ik);
          return void 0 === fk && (fk = kk(ik, Dk), ek.set(ik, fk)), fk
        }
      }((kk => new hk(kk)));
    class hk {
      constructor(kk) {
        this.blockMetadata = kk, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const ek = new Set(Object.keys(kk).map((ek => kk[ek].id)));
        ek.add(0), this.maxBlockId = Math.max(...ek)
      }
      static
      for (kk) {
        return Ek(kk)
      }
      getBlockIdMapping(kk, ek) {
        const ik = this.getBlockIdMappingKey(kk, ek);
        let Dk = this.blockIdMappings.get(ik);
        return void 0 === Dk && Ik.includes(kk) && (Dk = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, kk, ek), this.blockIdMappings.set(ik, Dk)), Dk
      }
      turnBlockId(kk, ek, ik) {
        return this.mapBlockId(this.blockMetadata[kk], ek, this.getRotationMapping(ek, ik), ik)
      }
      getBlockIdMappingKey(kk, ek) {
        return `r${kk}|m${Number(ek)}`
      }
      createBlockIdMapping(kk, ek, ik, Dk) {
        const fk = new Uint16Array(ek + 1),
          Sk = this.getRotationMapping(ik, Dk);
        for (const bk in kk) {
          const ek = kk[bk];
          fk[ek.id] = this.mapBlockId(ek, ik, Sk, Dk)
        }
        return fk
      }
      getRotationMapping(kk, ek) {
        const ik = Math.round(kk / 90),
          Dk = new Uint8Array(4);
        for (let fk = 0; fk < 4; fk++) Dk[fk] = (4 + fk - ik) % 4;
        if (ek) {
          let kk = Dk[0];
          Dk[0] = Dk[1], Dk[1] = kk, kk = Dk[2], Dk[2] = Dk[3], Dk[3] = kk
        }
        return Dk
      }
      mapBlockId(kk, ek, ik, Dk) {
        var fk;
        const {
          blockMetadata: Sk
        } = this, bk = Math.round(ek / 90), {
          id: rk,
          meta: Pk
        } = kk, {
          rot: mk,
          rootName: Mk,
          metaStr: Kk
        } = Pk;
        let xk;
        const [, nk, Uk] = null !== (fk = vk.exec(Kk)) && void 0 !== fk ? fk : [];
        if (void 0 !== nk) {
          var Hk, wk;
          xk = null !== (Hk = null === (wk = Sk[`${Mk}|meta|${[Qk.split("").filter(((kk,ek)=>nk.split("").some((kk=>{const ik=Qk.indexOf(kk);return((Dk?3-ik:ik)+bk)%4===ek})))).join(""),Uk].filter(Boolean).join("|")}`]) || void 0 === wk ? void 0 : wk.id) && void 0 !== Hk ? Hk : rk
        } else if (null === mk) xk = rk;
        else {
          var lk, pk;
          const kk = ik[mk - 1] + 1;
          let ek = Kk.replace(`rot${mk}`, `rot${kk}`);
          Dk && Pk.stairsCorner && (ek = ek.replace(/(Left|Right)$/, (kk => "Left" === kk ? "Right" : "Left"))), Dk && "Chest" === Mk && (ek = ek.replace(/\|(left|right)$/, ((kk, ek) => "left" === ek ? "|right" : "|left")));
          const fk = zk.exec(ek);
          if (Dk && null !== fk) {
            const kk = "lrud".split("").filter((kk => fk[2].includes("l" === kk ? "r" : "r" === kk ? "l" : kk)));
            ek = `${fk[1]}|${kk.join("")}`
          }
          const bk = `${Mk}|${ek}`;
          if (xk = null !== (lk = null === (pk = Sk[bk]) || void 0 === pk ? void 0 : pk.id) && void 0 !== lk ? lk : null, null === xk) {
            const kk = Sk[Mk];
            xk = kk.rootMetaDesc === bk ? kk.id : rk
          }
        }
        return xk
      }
    }

    function ak(kk, ek, ik) {
      let {
        xRotationMappedOrigin: Dk,
        shouldSwapXZ: fk
      } = ik;
      const Sk = fk ? ek : kk;
      return null === Dk ? Sk : Dk - Sk
    }

    function Wk(kk, ek, ik) {
      let {
        zRotationMappedOrigin: Dk,
        shouldSwapXZ: fk
      } = ik;
      const Sk = fk ? kk : ek;
      return null === Dk ? Sk : Dk - Sk
    }
    const tk = {
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
      Xk = new Map;

    function Bk(kk, ek) {
      const ik = `${kk}|${ek}`;
      let Dk = Xk.get(ik);
      if (void 0 === Dk) {
        const {
          size: fk,
          palette: Sk,
          layers: bk
        } = tk[kk], rk = 90 === ek || 270 === ek, [Pk, mk] = rk ? [fk[2], fk[0]] : [fk[0], fk[2]], Mk = function(kk, ek, ik) {
          let Dk = null,
            fk = null,
            Sk = !1;
          switch (kk) {
            case 0:
              break;
            case 90:
              Dk = ek - 1, Sk = !0;
              break;
            case 180:
              Dk = ek - 1, fk = ik - 1;
              break;
            case 270:
              fk = ik - 1, Sk = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${kk}`)
          }
          return {
            xRotationMappedOrigin: Dk,
            zRotationMappedOrigin: fk,
            shouldSwapXZ: Sk
          }
        }(ek, Pk, mk), Kk = hk.for(qk.g), xk = Sk.map((kk => (0, qk.e)(Kk.turnBlockId((0, qk.h)(kk), ek, !1)))), nk = [];
        bk.forEach(((kk, ek) => {
          kk.split(" ").forEach(((kk, ik) => {
            for (let Dk = 0; Dk < kk.length; Dk++)
              if ("." !== kk[Dk]) {
                const fk = [ak(Dk, ik, Mk), ek, Wk(Dk, ik, Mk)];
                nk.push({
                  offset: fk,
                  block: xk[kk.charCodeAt(Dk) - "a".charCodeAt(0)]
                })
              }
          }))
        })), Dk = {
          size: [Pk, fk[1], mk],
          cells: nk
        }, Xk.set(ik, Dk)
      }
      return Dk
    }
    const ck = {
      farm_hut: ik.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
      farm_house: ik.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
      farm_barn: ik.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
      rusticHome_tent: ik.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
      rusticHome_cabin: ik.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
      rusticHome_house: ik.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
      market_stand: ik.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
      market_stall: ik.p + "static/media/market_stall.9a562807f9dff591618a.webp",
      market_shop: ik.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
      castle_wall: ik.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
      castle_gate: ik.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
      castle_tower: ik.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
    };
    var Tk = ik(1066);
    const Zk = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function Ok(kk) {
      let {
        page: ek,
        building: ik,
        onBuild: Dk,
        onPutAway: fk
      } = kk;
      const {
        t: Sk
      } = (0, uk.D)(), {
        displayName: bk,
        tier: rk
      } = Uk(ek.id), Pk = Bk(ek.id, 0).cells.length, mk = lk[ek.id], Mk = "locked" === ek.state, Kk = ik ? jk.f : jk.r;
      return (0, Tk.jsxs)("article", {
        className: Ck()("PlotsJournalPage", {
          Locked: Mk
        }),
        children: [(0, Tk.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: Sk(bk.translationKey)
        }), (0, Tk.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [Sk(Zk[rk]), " \xb7 ", Sk("plotsGame:journalBlocks", {
            blocks: String(Pk)
          })]
        }), (0, Tk.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [nk.map((kk => (0, Tk.jsx)("img", {
            className: Ck()({
              Shown: kk === ek.id
            }),
            src: ck[kk],
            alt: "",
            draggable: !1
          }, kk))), "completed" === ek.state && (0, Tk.jsx)("span", {
            className: "PlotsJournalStamp",
            children: Sk("plotsGame:journalBuilt")
          }), Mk && (0, Tk.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, Tk.jsx)(Ak.d, {
              name: "lock"
            })
          })]
        }), void 0 !== mk && "completed" !== ek.state && (0, Tk.jsx)("p", {
          className: "PlotsJournalNote",
          children: Sk(mk)
        }), (0, Tk.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === ek.state && (0, Tk.jsx)("p", {
            className: "PlotsJournalHint",
            children: Sk("plotsGame:journalLocked", {
              name: Sk(Uk(ek.unlockedBy).displayName.translationKey)
            })
          }), ek.active && (0, Tk.jsxs)(Tk.Fragment, {
            children: [(0, Tk.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: Sk("plotsGame:journalBuilding")
            }), (0, Tk.jsx)(jk.j, {
              onClick: fk,
              children: Sk("plotsGame:journalPutAway")
            })]
          }), !Mk && !ek.active && (0, Tk.jsx)(Kk, {
            onClick: () => {
              Dk(ek.id)
            },
            children: Sk("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function gk(kk) {
      let {
        className: ek,
        page: ik,
        hidden: Dk,
        building: fk,
        journal: Sk
      } = kk;
      return (0, Tk.jsxs)("div", {
        ref: kk => {
          null !== kk && (kk.inert = Dk)
        },
        className: Ck()("PlotsJournalSide", ek),
        children: [void 0 !== ik && (0, Tk.jsx)(Ok, {
          page: ik,
          building: fk,
          onBuild: Sk.build,
          onPutAway: Sk.putAway
        }), void 0 === ik && (0, Tk.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var Gk = ik(314),
      Nk = ik(1850);

    function Rk(kk) {
      return Math.cos((0, Nk.h)(kk))
    }

    function Jk(kk) {
      return (0, Nk.C)(Math.acos(Gk.c.clamp(kk, -1, 1)))
    }

    function ke(kk, ek, ik, Dk, fk) {
      const Sk = Math.abs(ek - kk),
        bk = (0, Nk.C)(fk / (ik * Math.abs(Math.sin((0, Nk.h)(kk))))),
        rk = 450 * Math.min(1, Sk / Dk),
        Pk = bk > 0 ? 3 * Sk / bk : 1 / 0;
      return Math.round(Math.max(120, Math.min(rk, Pk)))
    }
    class ee {
      constructor() {
        this.samples = []
      }
      add(kk, ek) {
        for (this.samples.push({
            x: kk,
            at: ek
          }); ek - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const kk = this.samples[0],
          ek = this.samples[this.samples.length - 1];
        return ek.at > kk.at ? (ek.x - kk.x) / (ek.at - kk.at) : 0
      }
    }

    function ie(kk, ek) {
      return kk > ek && kk >= 600
    }

    function De(kk) {
      return Jk(new DOMMatrixReadOnly(getComputedStyle(kk).transform).m11)
    }

    function fe(kk, ek) {
      kk.style.transform = `rotateY(${-ek}deg)`, kk.classList.add("Turning")
    }

    function Se(kk) {
      let {
        journal: ek
      } = kk;
      const {
        t: ik
      } = (0, uk.D)(), Dk = (0, Vk.e)(yk, ek.getPages()), fk = (0, Fk.j)(ie), [rk, Pk] = (0, Sk.useState)((() => function(kk) {
        const ek = kk.findIndex((kk => kk.active));
        return -1 !== ek ? ek : Math.max(0, kk.findIndex((kk => "open" === kk.state)))
      }(Dk))), Mk = (0, Sk.useRef)(null), Kk = (0, Sk.useRef)(null), xk = (0, Sk.useRef)({
        Forward: null,
        Back: null
      }), nk = fk ? 2 : 1, Uk = fk ? 180 : 90, Hk = rk - rk % nk, wk = Hk > 0, lk = Hk + nk < Dk.length, pk = (0, Sk.useCallback)((() => {
        const kk = Kk.current;
        return null === kk ? Hk : (Kk.current = null, kk.animation.cancel(), (ek = xk.current[kk.direction]).style.transform = "", ek.classList.remove("Turning"), null === kk.next ? Hk : (Pk(kk.next), kk.next));
        var ek
      }), [Hk]), Yk = (0, Sk.useCallback)(((kk, ek, ik, Dk) => {
        const fk = xk.current[kk],
          Sk = De(fk),
          bk = ek === ("Forward" === kk) ? Uk : 0;
        fe(fk, bk);
        const rk = fk.animate([{
          transform: `rotateY(${-Sk}deg)`
        }, {
          transform: `rotateY(${-bk}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : ke(Sk, bk, fk.offsetWidth, Uk, bk > Sk ? -ik : ik),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        Kk.current = {
          direction: kk,
          animation: rk,
          next: ek ? Dk + ("Forward" === kk ? nk : -nk) : null
        }, rk.onfinish = () => {
          var kk;
          (null === (kk = Kk.current) || void 0 === kk ? void 0 : kk.animation) === rk && pk()
        }
      }), [nk, Uk, pk]), Lk = (0, Sk.useCallback)((kk => {
        if (null !== Mk.current) return;
        const ek = pk();
        ("Forward" === kk ? ek + nk < Dk.length : ek > 0) && Yk(kk, !0, 0, ek)
      }), [pk, Yk, nk, Dk.length]);
      (0, Sk.useEffect)((() => {
        ek.onOpened()
      }), [ek]), (0, Sk.useEffect)((() => () => {
        var kk;
        null === (kk = Kk.current) || void 0 === kk || kk.animation.cancel()
      }), []), (0, Sk.useEffect)((() => {
        const kk = kk => {
          var ek;
          kk.pointerId !== (null === (ek = Mk.current) || void 0 === ek ? void 0 : ek.pointerId) || Mk.current.following || (Mk.current = null)
        };
        return window.addEventListener("pointerup", kk), () => {
          window.removeEventListener("pointerup", kk)
        }
      }), []), (0, dk.b)((kk => ("ArrowLeft" === kk.code || "ArrowRight" === kk.code) && !(0, mk.isTypingInInput)()), (kk => {
        kk.stopPropagation(), Lk("ArrowLeft" === kk.code ? "Back" : "Forward")
      }));
      const Ak = (kk, ek, ik) => {
          const Dk = function(kk, ek, ik, Dk) {
            return (kk < 0 ? ik : Dk) ? Gk.c.clampAbs(kk, ek) : Math.sign(kk) * ek * (1 - 1 / (.55 * Math.abs(kk) / ek + 1))
          }(kk.base + ik, nk * kk.width, lk, wk);
          return "Forward" === ek ? Math.min(Dk, 0) : Math.max(Dk, 0)
        },
        qk = (kk, ek) => {
          const ik = Mk.current;
          if (Mk.current = null, null === ik.direction) return;
          ik.speed.add(kk, ek);
          const Dk = ik.speed.get(),
            fk = Ak(ik, ik.direction, kk - ik.x);
          Yk(ik.direction, null !== function(kk, ek, ik, Dk, fk) {
            if (Math.abs(ek) >= .3 ? Math.sign(ek) !== Math.sign(kk) : Math.abs(kk) < .5 * ik) return null;
            const Sk = kk < 0 ? "Forward" : "Back";
            return ("Forward" === Sk ? Dk : fk) ? Sk : null
          }(fk, Dk, nk * ik.width, lk, wk), Dk, Hk)
        },
        Ik = Dk.some((kk => kk.active)),
        zk = (kk, ik, fk) => (0, Tk.jsx)(gk, {
          className: kk,
          page: ik >= 0 && ik < Dk.length ? Dk[ik] : void 0,
          hidden: fk,
          building: Ik,
          journal: ek
        });
      return (0, Tk.jsx)(sk.e, {
        close: bk.h,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, Tk.jsxs)("section", {
          className: Ck()("PlotsJournal", {
            Spread: fk
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": ik("plotsGame:journalTitle"),
          children: [(0, Tk.jsx)(jk.n, {
            className: "PlotsJournalClose",
            onClick: bk.h
          }), (0, Tk.jsx)(be, {
            direction: "Back",
            disabled: !wk,
            onTurn: Lk
          }), (0, Tk.jsx)("div", {
            className: "PlotsJournalBookPages",
            onPointerDown: kk => {
              var ek;
              if (!kk.isPrimary || 0 !== kk.button || null !== Kk.current && null !== kk.target.closest("button")) return;
              const ik = new ee;
              ik.add(kk.clientX, kk.timeStamp);
              const Dk = xk.current.Forward.offsetWidth,
                fk = Kk.current;
              Kk.current = null;
              let Sk = 0;
              if (null !== fk) {
                const ek = xk.current[fk.direction],
                  ik = De(ek);
                fk.animation.cancel(), fe(ek, ik), Sk = function(kk, ek, ik, Dk) {
                  return (kk < 0 ? ik : Dk) ? kk : Math.sign(kk) * ek * (1 / (1 - Math.min(Math.abs(kk) / ek, .99)) - 1) / .55
                }(function(kk, ek, ik, Dk) {
                  return ik * (Rk(ek) - Rk("Forward" === kk ? 0 : Dk))
                }(fk.direction, ik, Dk, Uk), nk * Dk, lk, wk), kk.currentTarget.setPointerCapture(kk.pointerId)
              }
              Mk.current = {
                pointerId: kk.pointerId,
                x: kk.clientX,
                y: kk.clientY,
                base: Sk,
                width: Dk,
                following: null !== fk,
                direction: null !== (ek = null === fk || void 0 === fk ? void 0 : fk.direction) && void 0 !== ek ? ek : null,
                speed: ik
              }
            },
            onPointerMove: kk => {
              const ek = Mk.current;
              if (null === ek || kk.pointerId !== ek.pointerId) return;
              if (0 === kk.buttons) return void qk(kk.clientX, kk.timeStamp);
              const ik = kk.clientX - ek.x;
              !ek.following && function(kk, ek) {
                return Math.abs(kk) > 8 && Math.abs(kk) > Math.abs(ek)
              }(ik, kk.clientY - ek.y) && (ek.following = !0, ek.direction = ik < 0 ? "Forward" : "Back", kk.currentTarget.setPointerCapture(kk.pointerId)), null !== ek.direction && (ek.speed.add(kk.clientX, kk.timeStamp), fe(xk.current[ek.direction], function(kk, ek, ik, Dk) {
                const fk = ik * Rk("Forward" === kk ? 0 : Dk) + ek;
                return Gk.c.clamp(Jk(fk / ik), 0, Dk)
              }(ek.direction, Ak(ek, ek.direction, ik), ek.width, Uk)))
            },
            onPointerUp: kk => {
              var ek;
              kk.pointerId === (null === (ek = Mk.current) || void 0 === ek ? void 0 : ek.pointerId) && qk(kk.clientX, kk.timeStamp)
            },
            onPointerCancel: kk => {
              const ek = Mk.current;
              kk.pointerId === (null === ek || void 0 === ek ? void 0 : ek.pointerId) && (Mk.current = null, null !== ek.direction && Yk(ek.direction, !1, 0, Hk))
            },
            children: (0, Tk.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [fk && zk("Left", Hk - 2, !0), zk("Right", Hk + 2 * nk - 1, !0), (0, Tk.jsxs)("div", {
                ref: kk => {
                  xk.current.Back = kk
                },
                className: "PlotsJournalLeaf Back",
                children: [zk("Recto", Hk - 1, !0), fk && zk("Verso", Hk, !1)]
              }), (0, Tk.jsxs)("div", {
                ref: kk => {
                  xk.current.Forward = kk
                },
                className: "PlotsJournalLeaf Forward",
                children: [zk("Recto", Hk + nk - 1, !1), fk && zk("Verso", Hk + nk, !0)]
              })]
            })
          }), (0, Tk.jsx)(be, {
            direction: "Forward",
            disabled: !lk,
            onTurn: Lk
          })]
        })
      })
    }

    function be(kk) {
      let {
        direction: ek,
        disabled: ik,
        onTurn: Dk
      } = kk;
      const {
        t: fk
      } = (0, uk.D)();
      return (0, Tk.jsx)("div", {
        className: Ck()("PlotsJournalArrow", ek),
        children: (0, Tk.jsx)(jk.f, {
          disabled: ik,
          ariaLabel: fk("Forward" === ek ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            Dk(ek)
          },
          children: (0, Tk.jsx)(Ak.d, {
            name: "angle-up"
          })
        })
      })
    }
    var re = ik(36140),
      Pe = ik(1877),
      me = ik(1924);
    const Me = "plotsStepChanged",
      Ke = "plotsPlotChanged";
    class xe {
      constructor() {
        this.step = ["none"], this.plot = ["none"]
      }
      getStep() {
        return this.step
      }
      receiveStep(kk) {
        this.step = kk, Mk.j.tm(Me, kk, !0)
      }
      getPlot() {
        return this.plot
      }
      receivePlot(kk) {
        this.plot = kk, Mk.j.tm(Ke, kk, !0)
      }
    }
    const ne = "KeyJ";

    function Ue(kk) {
      let {
        hud: ek,
        journal: ik
      } = kk;
      const Dk = (0, Vk.e)(yk, ik.getPages()),
        fk = (0, Vk.e)(Me, ek.getStep()),
        {
          isTouchScreen: Sk
        } = (0, rk.n)(["isTouchScreen"]),
        {
          t: Mk
        } = (0, uk.D)(),
        Kk = null !== Dk && "none" === fk[0];
      return (0, dk.b)((kk => null !== Dk && kk.code === ne && !kk.repeat && !(0, mk.isTypingInInput)()), (kk => {
        (0, Pk.G)(kk, Kk, bk.r)
      })), Kk ? (0, Tk.jsx)(re.h, {
        placement: "topRight",
        children: (0, Tk.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, Tk.jsxs)("button", {
            type: "button",
            className: Ck()("PlotsJournalButton SmallTextBold", {
              Touch: Sk
            }),
            onClick: bk.r,
            children: [(0, Tk.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, Tk.jsx)(Pe.c, {
                itemName: "Book",
                amount: 0
              })
            }), Mk("plotsGame:journalButton"), !Sk && (0, Tk.jsx)(me.d, {
              className: "PlotsJournalButtonKey",
              keyCode: ne
            })]
          })
        })
      }) : null
    }
    var He = ik(38003),
      we = ik(37770),
      le = ik(36528),
      pe = ik(9057),
      ye = ik(9069),
      Ye = ik(37402);
    const Le = new Map([
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
      Ce = [...le.e.blockRemoveActionRoots, ...we.c, ...pe.g, "Board", "Code Block", "Custom Lobby Block"],
      Ae = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let je = null;

    function se() {
      return je ??= function() {
        const kk = de(),
          ek = Math.max(...kk.map((kk => qk.g[kk].id))) + 1,
          ik = new Int32Array(ek),
          Dk = new Int32Array(ek),
          fk = new Uint8Array(ek).fill(1),
          Sk = new Uint8Array(ek),
          bk = new Uint8Array(ek),
          rk = new Array(ek).fill("Air"),
          Pk = new Map,
          mk = kk => {
            let ek = Pk.get(kk);
            return void 0 === ek && (ek = Pk.size + 1, Pk.set(kk, ek)), ek
          },
          Mk = new Set(Ce);
        for (const xk of kk) {
          var Kk;
          const {
            id: kk,
            meta: ek,
            altActionable: Pk,
            canBePlacedOver: nk
          } = qk.g[xk];
          ik[kk] = mk(Ve(xk));
          const Uk = ek.stairsCorner;
          if (null === Uk) Dk[kk] = ik[kk];
          else {
            const ik = Uk.endsWith("Right");
            Dk[kk] = mk(`${ek.rootName}|rot${ik?ek.rot%4+1:ek.rot}|${ek.halfblockPlacement}|${Uk.replace("Right","Left")}`)
          }
          fk[kk] = nk ? 1 : 0, Sk[kk] = Pk || null !== ek.open || xk in Ye.e || Mk.has(ek.rootName) || void 0 !== (0, we.f)(ek.rootName) ? 1 : 0;
          const {
            rootName: Hk
          } = ek;
          bk[kk] = null !== ek.open || we.c.includes(Hk) || Hk.includes("Bookshelf") || Hk.includes("Mailbox") ? 1 : 0, rk[kk] = null !== (Kk = (0, He.h)(kk)) && void 0 !== Kk ? Kk : Hk
        }
        return {
          kinds: ik,
          shapes: Dk,
          empty: fk,
          inUse: Sk,
          ownAltActionMessage: bk,
          placingItems: rk
        }
      }(), je
    }

    function de() {
      return Object.keys(qk.g).filter((kk => qk.g[kk].name === kk))
    }

    function Ve(kk) {
      var ek;
      const ik = qk.g[kk],
        {
          rootName: Dk,
          rot: fk
        } = ik.meta,
        [, ...Sk] = (null !== (ek = ik.rootMetaDesc) && void 0 !== ek ? ek : kk).split("|"),
        bk = Sk.filter((kk => !("meta" === kk || Ae.test(kk) || (0, ye.w)(ik) && /^[nesw]+$/.test(kk) || pe.g.includes(Dk) && /^[lrud]+$/.test(kk) || Gk.B.includes(Dk) && /^(left|right)$/.test(kk))));
      return [Dk, ...bk].map((kk => "fenceGate" === ik.model && kk === `rot${fk}` ? "rot" + ((fk - 1) % 2 + 1) : kk)).join("|")
    }

    function Fe(kk, ek) {
      const {
        kinds: ik,
        shapes: Dk
      } = se();
      return ik[kk] === ik[ek] || Dk[kk] === Dk[ek]
    }

    function ue(kk) {
      return 1 === se().empty[kk]
    }

    function qe(kk) {
      return se().placingItems[kk]
    }

    function Ie(kk) {
      return Le.get(qk.g[kk].meta.rootName)
    }
    var ze = ik(9051),
      Qe = ik(9063);
    const ve = [0, 0, 0, 1, 1, 1],
      Ee = (0, ze.c)([
        [2, 0, 2, 6, 6, 6]
      ]),
      he = (0, ze.c)([
        [3, 0, 3, 5, 5, 5]
      ]),
      ae = (0, ze.c)([
        [3, 3, 3, 5, 8, 5]
      ]),
      We = [0, 1, 2, 3].map((kk => (0, ze.c)((0, ze.k)([
        [3, 2, 0, 5, 7, 3]
      ], kk))));

    function te(kk) {
      const {
        yw: ek,
        model: ik,
        blockModel: Dk,
        meta: fk
      } = qk.g[kk];
      return void 0 !== ek ? ek : "CentreCross" === ik ? Ee : null !== Dk && void 0 !== Dk && Dk.startsWith("torch") ? fk.halfblockPlacement === Qe.b.side ? We[fk.rot - 1] : fk.halfblockPlacement === Qe.b.top ? ae : he : ve
    }
    var Xe = ik(36502),
      Be = ik(189);

    function ce(kk, ek) {
      const ik = Be.g.zp / 2;
      return kk[0] < ek[0] + ik && kk[0] + 1 > ek[0] - ik && kk[1] < ek[1] + Be.g.Qp && kk[1] + 1 > ek[1] && kk[2] < ek[2] + ik && kk[2] + 1 > ek[2] - ik
    }

    function Te(kk, ek, ik, Dk, fk) {
      const Sk = Math.hypot(...ek.dir);
      if (!Number.isFinite(Sk) || 0 === Sk) return -1;
      const {
        from: bk,
        reach: rk,
        solid: Pk
      } = ek, mk = [ek.dir[0] / Sk, ek.dir[1] / Sk, ek.dir[2] / Sk], Mk = null === Pk ? rk : Math.min(rk, function(kk, ek, ik) {
        const Dk = oe(kk, ek, ik);
        if (Dk !== 1 / 0) return Dk;
        return (ik[0] + .5 - kk[0]) * ek[0] + (ik[1] + .5 - kk[1]) * ek[1] + (ik[2] + .5 - kk[2]) * ek[2]
      }(bk, mk, Pk) + .75);
      let Kk = -1,
        xk = 1 / 0,
        nk = 1 / 0;
      for (let Uk = 0; Uk < kk.length; Uk += 4) {
        const ek = [kk[Uk], kk[Uk + 1], kk[Uk + 2]],
          Sk = fk(Uk) ? rk : Mk;
        let Pk = -1,
          Hk = oe(bk, mk, ek);
        if (Hk > Sk) {
          const kk = [ek[0] + .5 - bk[0], ek[1] + .5 - bk[1], ek[2] + .5 - bk[2]];
          if (Hk = kk[0] * mk[0] + kk[1] * mk[1] + kk[2] * mk[2], Hk <= 0 || Hk > Sk) continue;
          if (Pk = Math.hypot(kk[0] - Hk * mk[0], kk[1] - Hk * mk[1], kk[2] - Hk * mk[2]), Pk > .7 || !Dk(Uk)) continue
        }(Pk < xk || Pk === xk && Hk < nk) && ik(Uk) && (Kk = Uk, xk = Pk, nk = Hk)
      }
      return Kk
    }

    function oe(kk, ek, ik) {
      let Dk = 0,
        fk = 1 / 0;
      for (let Sk = 0; Sk < 3; Sk++) {
        const bk = ik[Sk] - kk[Sk];
        if (0 === ek[Sk]) {
          if (bk > 0 || bk + 1 < 0) return 1 / 0;
          continue
        }
        const rk = bk / ek[Sk],
          Pk = (bk + 1) / ek[Sk];
        Dk = Math.max(Dk, Math.min(rk, Pk)), fk = Math.min(fk, Math.max(rk, Pk))
      }
      return Dk <= fk ? Dk : 1 / 0
    }
    var Ze = ik(37649),
      Oe = ik(38092);
    const ge = [1, 1, 1];
    class Ge {
      constructor(kk) {
        this.api = kk, this.meshes = null, this.shown = null
      }
      show(kk) {
        if (!(0, Xe.f)(kk, this.shown))
          if (this.shown = null === kk ? null : [kk[0], kk[1], kk[2]], null !== this.meshes)
            for (const ek of this.meshes) this.api.setGameMesh(ek, null === kk ? {
              visible: !1
            } : {
              anchor: kk,
              visible: !0
            });
          else if (null !== kk) {
          const ek = [Ze.e, Ze.e, Ze.e, 0, 0, 0];
          this.meshes = [this.build([ek], Ze.h, kk), this.build((0, Ze.c)(), Ze.o, kk)]
        }
      }
      dispose() {
        for (const ek of null !== (kk = this.meshes) && void 0 !== kk ? kk : []) {
          var kk;
          this.api.disposeGameMesh(ek)
        }
        this.meshes = null, this.shown = null
      }
      build(kk, ek, ik) {
        const Dk = [],
          fk = [];
        for (const [Sk, bk, rk, Pk, mk, Mk] of kk)(0, Oe.d)(Dk, fk, [Pk + .5, mk + .5, Mk + .5], [Sk, bk, rk]);
        return this.api.createGameMesh({
          positions: Dk,
          indices: fk
        }, {
          rgb: ge,
          alpha: ek,
          onTop: !0
        }, ik)
      }
    }
    class Ne {
      constructor(kk) {
        this.api = kk, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(kk) {
        const ek = Be.g.oU;
        this.chunks = [];
        for (let ik = 0; ik < kk.length; ik += 3) {
          const Dk = Math.floor(kk[ik] / ek),
            fk = Math.floor(kk[ik + 1] / ek),
            Sk = Math.floor(kk[ik + 2] / ek);
          this.watches(Dk, fk, Sk) || this.chunks.push(Dk, fk, Sk)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const kk = performance.now();
        if (kk - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = kk;
        let ek = !1;
        for (let ik = 0; ik < this.chunks.length; ik += 3) {
          const kk = this.api.getChunkVersion(this.chunks[ik], this.chunks[ik + 1], this.chunks[ik + 2]);
          this.versions[ik / 3] !== kk && (this.versions[ik / 3] = kk, ek = !0)
        }
        return ek
      }
      watches(kk, ek, ik) {
        for (let Dk = 0; Dk < this.chunks.length; Dk += 3)
          if (this.chunks[Dk] === kk && this.chunks[Dk + 1] === ek && this.chunks[Dk + 2] === ik) return !0;
        return !1
      }
    }
    const Re = .35,
      Je = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      ki = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      ei = [.95, .2, .15];
    class ii {
      constructor() {
        this.groups = []
      }
      add(kk, ek, ik, Dk, fk) {
        let Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ve;
        for (const bk of this.groups)
          if (Si(bk, Dk, fk)) return bk.cells.push(kk, ek, ik), void bk.boxes.push(Sk);
        this.groups.push({
          rgb: Dk,
          look: fk,
          cells: [kk, ek, ik],
          boxes: [Sk]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class Di {
      constructor(kk) {
        this.api = kk, this.shown = []
      }
      show(kk) {
        const ek = [];
        for (const ik of kk) {
          const kk = this.shown.findIndex((kk => {
            let {
              group: ek
            } = kk;
            return Si(ek, ik.rgb, ik.look) && bi(ek, ik)
          })); - 1 === kk ? ek.push(this.build(ik)) : (ek.push(this.shown[kk]), this.shown.splice(kk, 1))
        }
        this.dispose(), this.shown = ek
      }
      dispose() {
        for (const {
            meshes: kk
          }
          of this.shown)
          for (const ek of kk) this.api.disposeGameMesh(ek);
        this.shown = []
      }
      build(kk) {
        const {
          rgb: ek,
          look: ik,
          boxes: Dk
        } = kk, fk = [ek[0] + (1 - ek[0]) * Re, ek[1] + (1 - ek[1]) * Re, ek[2] + (1 - ek[2]) * Re], Sk = [this.buildMesh(kk.cells, ek, ik.alpha, ((kk, ek, fk, Sk) => {
          fi(kk, ek, fk, Dk[Sk], ik.size, !1)
        })), this.buildMesh(kk.cells, fk, ik.alpha, ((kk, ek, fk, Sk) => {
          fi(kk, ek, fk, Dk[Sk], ik.size, !0)
        }))];
        return ik.crossed && Sk.push(this.buildMesh(kk.cells, ek, .9, ((kk, ek, Dk) => {
          (0, Oe.e)(kk, ek, Dk, ik.size + .01, .12)
        }))), {
          group: kk,
          meshes: Sk
        }
      }
      buildMesh(kk, ek, ik, Dk) {
        const fk = [kk[0], kk[1], kk[2]],
          Sk = [],
          bk = [];
        for (let rk = 0; rk < kk.length; rk += 3) Dk(Sk, bk, [kk[rk] - fk[0] + .5, kk[rk + 1] - fk[1] + .5, kk[rk + 2] - fk[2] + .5], rk / 3);
        return this.api.createGameMesh({
          positions: Sk,
          indices: bk
        }, {
          rgb: [ek[0], ek[1], ek[2]],
          alpha: ik
        }, fk)
      }
    }

    function fi(kk, ek, ik, Dk, fk, Sk) {
      for (let bk = 0; bk < Dk.length; bk += 6) {
        const rk = [0, 0, 0],
          Pk = [0, 0, 0];
        for (let kk = 0; kk < 3; kk++) rk[kk] = ik[kk] + ((Dk[bk + kk] + Dk[bk + kk + 3]) / 2 - .5) * fk, Pk[kk] = (Dk[bk + kk + 3] - Dk[bk + kk]) * fk;
        (0, Oe.b)(kk, ek, rk, Pk, Sk)
      }
    }

    function Si(kk, ek, ik) {
      return kk.rgb[0] === ek[0] && kk.rgb[1] === ek[1] && kk.rgb[2] === ek[2] && kk.look === ik
    }

    function bi(kk, ek) {
      if (kk.cells.length !== ek.cells.length) return !1;
      for (let ik = 0; ik < kk.cells.length; ik++)
        if (kk.cells[ik] !== ek.cells[ik]) return !1;
      return kk.boxes.every(((kk, ik) => kk === ek.boxes[ik]))
    }

    function ri(kk, ek) {
      return kk.getClientOption(ek, "blockReach") + 1
    }
    class Pi {
      constructor(kk, ek, ik) {
        this.api = kk, this.localPlayerId = ek, this.pickNext = ik, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(kk) {
        const [ek, , ik] = kk.cameraDirection, Dk = Math.hypot(ek, ik);
        Dk > .001 && (this.heading = [ek / Dk, ik / Dk])
      }
      tapped(kk, ek, ik) {
        const Dk = ri(this.api, this.localPlayerId),
          {
            origin: fk,
            direction: Sk
          } = this.api.getActionRay(),
          bk = [...fk],
          rk = [
            [bk, [bk[0] + Sk[0] * Dk, bk[1] + Sk[1] * Dk, bk[2] + Sk[2] * Dk]]
          ];
        null !== kk && rk.push([bk, (0, Xe.c)(kk)]), this.tap = {
          lines: rk,
          next: ek,
          ms: ik
        }
      }
      filled(kk, ek) {
        this.tap = null, this.turnFrom(kk, ek), this.retry(ek)
      }
      arrived(kk, ek) {
        const {
          tap: ik
        } = this;
        if (null === ik || ek - ik.ms > 1500) return null;
        const Dk = (0, Xe.c)(kk);
        return (0, Xe.f)(ik.next, kk) || ik.lines.some((kk => {
          let [ek, ik] = kk;
          return function(kk, ek, ik) {
            const Dk = [ik[0] - ek[0], ik[1] - ek[1], ik[2] - ek[2]],
              fk = [kk[0] - ek[0], kk[1] - ek[1], kk[2] - ek[2]],
              Sk = Dk[0] ** 2 + Dk[1] ** 2 + Dk[2] ** 2,
              bk = 0 === Sk ? 0 : Math.min(1, Math.max(0, (fk[0] * Dk[0] + fk[1] * Dk[1] + fk[2] * Dk[2]) / Sk));
            return Math.hypot(fk[0] - Dk[0] * bk, fk[1] - Dk[1] * bk, fk[2] - Dk[2] * bk)
          }(Dk, ek, ik) <= .9
        })) ? (this.tap = null, this.turnFrom(kk, ek), ik.ms) : null
      }
      turnFrom(kk, ek) {
        this.pending = {
          from: kk,
          ms: ek,
          turnMs: Math.max(50, Math.min(250, ek - this.lastFillMs))
        }, this.lastFillMs = ek
      }
      retry(kk) {
        const {
          pending: ek
        } = this;
        if (null === ek) return;
        if (kk - ek.ms > 1500) return void(this.pending = null);
        const ik = this.pickNext((0, Xe.c)(ek.from), (kk => (0, Xe.f)(kk, ek.from)));
        if (null === ik) return;
        this.pending = null;
        const {
          turning: Dk
        } = this;
        if (null !== Dk && kk < Dk.endMs && (0, Xe.f)(Dk.to, ik)) return;
        const fk = this.api.getActionRay().origin,
          Sk = [ik[0] + .5 - fk[0], ik[1] + .5 - fk[1], ik[2] + .5 - fk[2]],
          bk = Math.hypot(Sk[0], Sk[2]);
        if (bk < .3) {
          const kk = Math.max(bk, .001);
          Sk[0] = this.heading[0] * kk, Sk[2] = this.heading[1] * kk
        }
        this.api.turnCamera(Sk, ek.turnMs), this.turning = {
          to: ik,
          endMs: kk + ek.turnMs
        }
      }
    }
    class mi {
      constructor(kk, ek, ik) {
        this.api = kk, this.localPlayerId = ek, this.juice = ik, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], this.lastFilled = null, this.lastSeenFilled = null, this.playerCells = [], this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = null, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new Ne(kk), this.meshes = new Di(kk), this.outline = new Ge(kk), this.turn = new Pi(kk, ek, ((kk, ek) => this.pickNext(kk, ek)))
      }
      BU(kk) {
        const ek = "active" === kk[0] ? `${kk[1]}|${kk[3]}|${kk[4]}|${kk[5]}|${kk[6]}` : "";
        if ("active" !== kk[0]) "built" === kk[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , ik, Dk, fk, Sk] = kk;
          ek !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = ik) : ik === this.layerY ? this.burstUnlisted(Dk) : ik > this.layerY && this.finishLayer(ik), this.layerY = ik, this.layerCells.has(ik) || this.layerCells.set(ik, Dk.filter(Ki)), this.ghostCells = Dk, this.palette = fk, this.occupiedCells = Sk
        }
        ek !== this.blueprint && (this.blueprint = ek, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((kk => this.api.blockNameToBlockId(kk))), this.chunkWatch.watch([...this.ghostCells.filter(Ki), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(kk) {
        this.burstUnlisted([]), kk > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = kk)
      }
      Px() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const kk = performance.now();
        let ek = !1;
        for (const [fk, Sk] of this.foreseen) {
          var ik;
          if (kk - Sk > 1e3) this.foreseen.delete(fk), ek = !0, (null === (ik = this.lastFilled) || void 0 === ik ? void 0 : ik.join()) === fk && (this.lastFilled = this.lastSeenFilled)
        }
        const Dk = Mi(this.api.getPositionView(this.localPlayerId));
        (ek || Dk.some(((kk, ek) => kk !== this.playerCells[ek]))) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(kk) {
        const ek = new Set;
        for (let fk = 0; fk < kk.length; fk += 4) ek.add(`${kk[fk]},${kk[fk+1]},${kk[fk+2]}`);
        const ik = [],
          {
            ghostCells: Dk
          } = this;
        for (let fk = 0; fk < Dk.length; fk += 4) {
          const kk = `${Dk[fk]},${Dk[fk+1]},${Dk[fk+2]}`;
          !ek.has(kk) && this.open.delete(kk) && ik.push(this.filledCell(fk))
        }
        this.burst(ik)
      }
      refresh() {
        const {
          ghostCells: kk,
          palette: ek,
          occupiedCells: ik
        } = this, Dk = new ii, fk = new Set, Sk = [], bk = [];
        for (let rk = 0; rk < kk.length; rk += 4) {
          const [ik, Pk, mk, Mk] = [kk[rk], kk[rk + 1], kk[rk + 2], kk[rk + 3]], Kk = this.api.getBlockId(ik, Pk, mk), xk = `${ik},${Pk},${mk}`, nk = Fe(this.blockIds[Mk], Kk);
          !nk && ue(Kk) ? Dk.add(ik, Pk, mk, Ie(ek[Mk]), Je, te(ek[Mk])) : nk ? this.open.has(xk) && Sk.push(this.filledCell(rk)) : Dk.add(ik, Pk, mk, ei, ki), !nk && this.api.isBlockInLoadedChunk(ik, Pk, mk) && (fk.add(xk), bk.push(ik, Pk, mk, ue(Kk) ? 0 : 1))
        }
        this.open = fk, this.nextCells = bk;
        for (let rk = 0; rk < ik.length; rk += 3) {
          const [kk, ek, fk] = [ik[rk], ik[rk + 1], ik[rk + 2]];
          ue(this.api.getBlockId(kk, ek, fk)) || Dk.add(kk, ek, fk, ei, ki)
        }
        this.meshes.show(Dk.toArray()), this.burst(Sk), this.showNext(), this.turn.retry(performance.now())
      }
      burst(kk) {
        const ek = performance.now(),
          ik = [];
        for (const [fk, Sk, bk] of kk) {
          const kk = [fk, Sk, bk];
          this.lastSeenFilled = kk, this.foreseen.delete(kk.join()) || ik.push(kk)
        }
        const Dk = this.isHolding(ek);
        for (const fk of ik) {
          if (this.lastFilled = fk, Dk && this.pressFilled) {
            this.turn.filled(fk, ek);
            continue
          }
          const kk = this.turn.arrived(fk, ek);
          if (null !== kk) {
            this.pressFilled = Dk;
            for (const [ek, ik] of this.foreseen) ik <= kk && this.foreseen.delete(ek)
          }
        }
        this.juice.filled(kk)
      }
      showNext() {
        var kk;
        const ek = this.api.getPositionView(this.localPlayerId);
        this.playerCells.splice(0, 1 / 0, ...Mi(ek));
        const ik = this.lastFilled;
        this.nextCell = this.pickNext(null === ik ? [ek[0], ek[1] + 1, ek[2]] : (0, Xe.c)(ik), (() => !1)), this.outline.show(null !== (kk = this.aimed) && void 0 !== kk ? kk : this.nextCell)
      }
      pickNext(kk, ek) {
        const ik = this.api.getPositionView(this.localPlayerId),
          Dk = [ik[0], ik[1] + Be.g.Qp * Be.g.playerEyeToHeightRatio, ik[2]],
          fk = ri(this.api, this.localPlayerId),
          {
            nextCells: Sk
          } = this,
          bk = kk => [Sk[kk], Sk[kk + 1], Sk[kk + 2]],
          rk = function(kk, ek, ik, Dk, fk, Sk) {
            let bk = -1,
              rk = -1,
              Pk = 1 / 0;
            for (let mk = 0; mk < kk.length; mk += ek) {
              const ek = (Sk(mk) ? 2 : 0) + (Dk(mk) ? 1 : 0);
              if (ek < rk || fk(mk)) continue;
              const Mk = (kk[mk] + .5 - ik[0]) ** 2 + (kk[mk + 1] + .5 - ik[1]) ** 2 + (kk[mk + 2] + .5 - ik[2]) ** 2;
              (ek > rk || Mk < Pk) && (bk = mk, rk = ek, Pk = Mk)
            }
            return bk
          }(Sk, 4, kk, (kk => 1 === Sk[kk + 3]), (kk => {
            const Dk = bk(kk);
            return ce(Dk, ik) || this.foreseen.has(Dk.join()) || ek(Dk)
          }), (kk => function(kk, ek, ik) {
            return (ek[0] + .5 - kk[0]) ** 2 + (ek[1] + .5 - kk[1]) ** 2 + (ek[2] + .5 - kk[2]) ** 2 <= ik ** 2
          }(Dk, bk(kk), fk)));
        return -1 === rk ? null : bk(rk)
      }
      afterRender(kk) {
        var ek;
        this.turn.look(kk);
        const ik = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === ik ? null : ik.position), this.outline.show(null !== (ek = this.aimed) && void 0 !== ek ? ek : this.nextCell)
      }
      isHolding(kk) {
        return null !== this.altMs && kk - this.altMs <= 500
      }
      attemptAltAction(kk) {
        const ek = performance.now();
        if (this.isHolding(ek) || (this.pressFilled = !1), this.altMs = ek, this.pressFilled) return "preventPlacement";
        const ik = this.findAimed(kk);
        if (null !== ik) return this.foreseen.set(ik.join(), ek), this.lastFilled = ik, this.aimed = null, this.showNext(), this.turn.filled(ik, ek), this.pressFilled = !0, "preventPlacement";
        null !== this.nextCell && this.turn.tapped(kk, this.nextCell, ek)
      }
      findAimed(kk) {
        return function(kk, ek, ik, Dk, fk, Sk, bk) {
          const rk = kk.jek(ek),
            Pk = null === rk || null === kk.blockNameToBlockId(rk.name, !0) ? null : rk.name,
            mk = kk.getPositionView(ek),
            {
              origin: Mk,
              direction: Kk
            } = kk.getActionRay(),
            xk = Te(Dk, {
              from: Mk,
              dir: Kk,
              reach: ri(kk, ek),
              solid: ik
            }, (ek => {
              const ik = [Dk[ek], Dk[ek + 1], Dk[ek + 2]];
              return !Fe(fk[Dk[ek + 3]], kk.getBlockId(...ik)) && !bk.has(ik.join()) && kk.isBlockInLoadedChunk(...ik) && !ce(ik, mk)
            }), (kk => null === Pk || Pk === qe(fk[Dk[kk + 3]])), (kk => null !== Sk && Dk[kk] === Sk[0] && Dk[kk + 1] === Sk[1] && Dk[kk + 2] === Sk[2]));
          return -1 === xk ? null : [Dk[xk], Dk[xk + 1], Dk[xk + 2]]
        }(this.api, this.localPlayerId, kk, this.ghostCells, this.blockIds, this.nextCell, this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(kk) {
        const {
          ghostCells: ek
        } = this, [ik, Dk, fk] = Ie(this.palette[ek[kk + 3]]);
        return [ek[kk], ek[kk + 1], ek[kk + 2], ik, Dk, fk]
      }
    }

    function Mi(kk) {
      let [ek, ik, Dk] = kk;
      const fk = Be.g.zp / 2;
      return [Math.floor(ek), Math.floor(ik), Math.floor(Dk), Math.floor(ek - fk), Math.floor(ek + fk), Math.floor(ik + Be.g.Qp), Math.floor(Dk - fk), Math.floor(Dk + fk)]
    }

    function Ki(kk, ek) {
      return ek % 4 !== 3
    }

    function xi(kk, ek, ik, Dk, fk) {
      if (!kk.isBlockInLoadedChunk(ek, Dk - 6, ik) || !kk.isBlockInLoadedChunk(ek, Dk + 6 + fk, ik) || !kk.canModifyBlockAt(ek, Dk, ik)) return NaN;
      let Sk = Dk - 1;
      if (0 !== kk.getBlockId(ek, Sk, ik)) {
        for (; Sk < Dk + 6 && 0 !== kk.getBlockId(ek, Sk + 1, ik);) Sk++;
        return Sk
      }
      for (; Sk > Dk - 6;)
        if (Sk--, 0 !== kk.getBlockId(ek, Sk, ik)) return Sk;
      return NaN
    }

    function ni(kk, ek, ik, Dk, fk) {
      let Sk = 0;
      for (let bk = Dk + 1; bk <= Dk + fk; bk++) 0 !== kk.getBlockId(ek, bk, ik) && Sk++;
      return Sk
    }

    function Ui(kk) {
      const ek = new Map;
      for (const bk of kk) {
        var ik;
        if (Number.isNaN(bk)) return null;
        ek.set(bk, (null !== (ik = ek.get(bk)) && void 0 !== ik ? ik : 0) + 1)
      }
      let Dk = NaN,
        fk = 0;
      for (const [bk, rk] of ek)(rk > fk || rk === fk && bk < Dk) && (Dk = bk, fk = rk);
      let Sk = 0;
      for (const bk of kk) Sk += Math.abs(bk - Dk);
      return Sk
    }

    function Hi(kk, ek, ik, Dk) {
      const {
        eye: fk,
        forward: Sk,
        tanHalfFovX: bk,
        tanHalfFovY: rk
      } = kk, [Pk, mk] = function(kk) {
        let [ek, ik, Dk] = kk;
        const fk = Math.hypot(ek, Dk),
          [Sk, bk] = [Dk / fk, -ek / fk];
        return [
          [Sk, 0, bk],
          [ik * bk, Dk * Sk - ek * bk, -ik * Sk]
        ]
      }(Sk), [Mk, Kk] = [ek * bk, ik * rk], xk = Sk[0] + Mk * Pk[0] + Kk * mk[0], nk = Sk[1] + Kk * mk[1], Uk = Sk[2] + Mk * Pk[2] + Kk * mk[2], Hk = (Dk - fk[1]) / nk;
      return Hk > 0 && Hk < 1 / 0 ? [fk[0] + Hk * xk, fk[2] + Hk * Uk] : null
    }
    const wi = "plotsBlueprintPlacementChanged",
      li = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class yi {
      constructor(kk, ek) {
        this.api = kk, this.localPlayerId = ek, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = kk => {
          var ek, ik, Dk, Sk;
          const bk = null !== (ek = null === (ik = this.placing) || void 0 === ik ? void 0 : ik.rotation) && void 0 !== ek ? ek : 0,
            {
              size: rk
            } = Bk(kk, bk),
            Pk = this.api.vy(this.localPlayerId),
            [mk, Mk] = null !== (Dk = null !== (Sk = function(kk, ek, ik) {
              const [Dk, fk, Sk] = ek, [bk, rk, Pk] = [Math.floor(ik[0]), Math.floor(ik[1]), Math.floor(ik[2])], mk = 6 + Math.max(Dk, Sk) / 2, [Mk, Kk] = [Math.ceil(mk + Dk / 2), Math.ceil(mk + Sk / 2)], [xk, nk] = [bk - Mk, Pk - Kk], [Uk, Hk] = [2 * Mk + 1, 2 * Kk + 1], wk = new Float64Array(Uk * Hk), lk = new Uint16Array(Uk * Hk);
              for (let Lk = 0; Lk < Uk; Lk++)
                for (let ek = 0; ek < Hk; ek++) {
                  const ik = xi(kk, xk + Lk, nk + ek, rk, fk);
                  wk[Lk * Hk + ek] = ik, Number.isNaN(ik) || (lk[Lk * Hk + ek] = ni(kk, xk + Lk, nk + ek, ik, fk))
                }
              const pk = [];
              let yk = null,
                Yk = 1 / 0;
              for (let Lk = 0; Lk + Dk <= Uk; Lk++)
                for (let kk = 0; kk + Sk <= Hk; kk++) {
                  const [ek, fk] = [xk + Lk, nk + kk], rk = Math.hypot(ek + Dk / 2 - ik[0], fk + Sk / 2 - ik[2]);
                  if (rk > mk || bk >= ek - 2 && bk < ek + Dk + 2 && Pk >= fk - 2 && Pk < fk + Sk + 2) continue;
                  pk.length = 0;
                  let Mk = 0;
                  for (let ik = 0; ik < Dk; ik++)
                    for (let ek = 0; ek < Sk; ek++) pk.push(wk[(Lk + ik) * Hk + kk + ek]), Mk += lk[(Lk + ik) * Hk + kk + ek];
                  const Kk = Ui(pk);
                  if (null === Kk) continue;
                  const Uk = rk + 3 * (Kk + Mk);
                  Uk < Yk && (Yk = Uk, yk = [ek, fk])
                }
              return yk
            }(this.api, rk, Pk)) && void 0 !== Sk ? Sk : this.cornerOnTarget(rk)) && void 0 !== Dk ? Dk : [Math.floor(Pk[0]) + 2, Math.floor(Pk[2])];
          this.placing = {
            id: kk,
            rotation: bk,
            corner: [mk, this.playerLevel(), Mk],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null
          }, this.update(), this.api.sendCommand(`${fk} preview`)
        }, this.rotate = () => {
          const {
            id: kk,
            rotation: ek,
            corner: ik
          } = this.placing, fk = Dk[(Dk.indexOf(ek) + 1) % Dk.length], [Sk, , bk] = Bk(kk, ek).size, [rk, , Pk] = Bk(kk, fk).size;
          this.moveTo(ik[0] + Math.floor(Sk / 2) - Math.floor(rk / 2), ik[2] + Math.floor(bk / 2) - Math.floor(Pk / 2), fk)
        }, this.hoverAt = (kk, ek) => {
          this.placing.hover = [kk, ek], this.moveCentreTo(this.camera, kk, ek)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (kk, ek) => {
          const ik = this.placing,
            {
              eye: Dk,
              forward: fk,
              tanHalfFovX: Sk,
              tanHalfFovY: bk
            } = this.camera,
            rk = {
              eye: [Dk[0], Dk[1], Dk[2]],
              forward: [fk[0], fk[1], fk[2]],
              tanHalfFovX: Sk,
              tanHalfFovY: bk
            },
            Pk = ik.corner[1],
            mk = Hi(rk, kk, ek, Pk);
          ik.hover = null, ik.drag = mk && {
            view: rk,
            ground: mk,
            corner: [ik.corner[0], ik.corner[2]],
            level: Pk
          }
        }, this.dragTo = (kk, ek) => {
          const ik = this.placing.drag,
            Dk = ik && Hi(ik.view, kk, ek, ik.level);
          null !== ik && null !== Dk && this.moveTo(ik.corner[0] + Math.round(Dk[0] - ik.ground[0]), ik.corner[1] + Math.round(Dk[1] - ik.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const kk = this.view;
          kk.waiting || (kk.blocked ? this.tm({
            ...kk,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const kk = this.placing,
            {
              id: ek,
              rotation: ik,
              corner: Dk
            } = kk;
          this.api.sendCommand(`${fk} place ${ek} ${Dk.join(" ")} ${ik}`), kk.sent = {
            atMs: performance.now(),
            corner: [...Dk],
            rotation: ik,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${fk} preview off`))
        }, this.chunkWatch = new Ne(kk), this.meshes = new Di(kk)
      }
      getView() {
        return this.view
      }
      Px() {
        const kk = this.placing;
        null !== kk && (null !== kk.sent && !kk.sent.timedOut && performance.now() - kk.sent.atMs > 3e3 ? (kk.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(kk) || this.chunkWatch.changed()) && this.update())
      }
      afterRender(kk) {
        const ek = this.placing;
        null !== ek && (! function(kk, ek) {
          for (let ik = 0; ik < 3; ik++) ek.eye[ik] = kk.cameraPosition[ik], ek.forward[ik] = kk.cameraDirection[ik];
          ek.tanHalfFovX = kk.tanHalfFovX, ek.tanHalfFovY = kk.tanHalfFovY
        }(kk, this.camera), null !== ek.hover && this.moveCentreTo(this.camera, ek.hover[0], ek.hover[1]))
      }
      BU(kk) {
        const ek = this.placing;
        if (null === ek || null === ek.sent || "active" !== kk[0]) return;
        const {
          sent: ik
        } = ek, [, Dk, fk, Sk, bk, rk, Pk] = kk;
        fk && Dk === ek.id && Pk === ik.rotation && Sk === ik.corner[0] && bk === ik.corner[1] && rk === ik.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(kk) {
        let [ek, , ik] = kk;
        const Dk = this.api.getTargetedBlock();
        if (null === Dk) return null;
        const [fk, , Sk] = Dk.position;
        return [fk - Math.floor(ek / 2), Sk - Math.floor(ik / 2)]
      }
      playerLevel() {
        var kk;
        const [ek, ik, Dk] = this.api.vy(this.localPlayerId);
        if (null !== (kk = this.api.getLocalPlayerMovement()) && void 0 !== kk && kk.onGround) return Math.ceil(ik - .01);
        const [fk, Sk, bk] = [Math.floor(ek), Math.floor(ik), Math.floor(Dk)];
        for (let rk = Sk; rk >= Sk - 2; rk--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(fk, rk, bk))) return rk + 1;
        return Sk
      }
      followPlayerLevel(kk) {
        if (Yi(kk)) return !1;
        const ek = this.playerLevel();
        return ek !== kk.corner[1] && (kk.corner[1] = ek, !0)
      }
      moveCentreTo(kk, ek, ik) {
        const Dk = this.placing,
          fk = Hi(kk, ek, ik, Dk.corner[1]);
        if (null !== fk) {
          const [kk, , ek] = Bk(Dk.id, Dk.rotation).size;
          this.moveTo(Math.round(fk[0] - kk / 2), Math.round(fk[1] - ek / 2))
        }
      }
      moveTo(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const Dk = this.placing;
        if (Yi(Dk)) return;
        const [fk, Sk, bk] = Dk.corner;
        if (this.centreOnPlot(fk, bk) && !this.centreOnPlot(kk, ek, ik))
          if (this.centreOnPlot(kk, bk, ik)) ek = bk;
          else {
            if (!this.centreOnPlot(fk, ek, ik)) return;
            kk = fk
          } kk === fk && ek === bk && ik === Dk.rotation || (Dk.rotation = ik, Dk.corner = [kk, Sk, ek], this.update())
      }
      centreOnPlot(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: Dk,
          corner: fk
        } = this.placing, [Sk, , bk] = Bk(Dk, ik).size;
        return this.api.canModifyBlockAt(kk + Math.floor(Sk / 2), fk[1], ek + Math.floor(bk / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.tm(null)
      }
      update() {
        const {
          id: kk,
          rotation: ek,
          corner: ik,
          refusals: Dk
        } = this.placing, fk = new ii, Sk = [];
        let bk = !1,
          rk = 0;
        for (const {
            offset: Mk,
            block: Kk
          }
          of Bk(kk, ek).cells) {
          const [kk, ek, Dk] = [ik[0] + Mk[0], ik[1] + Mk[1], ik[2] + Mk[2]];
          Sk.push(kk, ek, Dk);
          const Pk = !this.api.canModifyBlockAt(kk, ek, Dk),
            mk = this.api.getBlockId(kk, ek, Dk),
            xk = !ue(mk) && !Fe(this.api.blockNameToBlockId(Kk), mk);
          bk ||= Pk, rk += xk ? 1 : 0, Pk || xk ? fk.add(kk, ek, Dk, ei, ki) : fk.add(kk, ek, Dk, Ie(Kk), li, te(Kk))
        }
        this.chunkWatch.watch(Sk), this.meshes.show(fk.toArray());
        const Pk = this.view,
          mk = Yi(this.placing);
        (null === Pk || void 0 === Pk ? void 0 : Pk.id) === kk && Pk.blocked === bk && Pk.toClear === rk && Pk.waiting === mk && Pk.refusals === Dk || this.tm({
          id: kk,
          blocked: bk,
          toClear: rk,
          waiting: mk,
          refusals: Dk
        })
      }
      tm(kk) {
        this.view = kk, Mk.j.tm(wi, kk, !0)
      }
    }

    function Yi(kk) {
      let {
        sent: ek
      } = kk;
      return null !== ek && !ek.timedOut
    }
    var Li = ik(4189),
      Ci = ik(38725);

    function Ai(kk, ek, ik) {
      const Dk = [255 * kk, 255 * ek, 255 * ik],
        [fk, Sk, bk] = Dk.map((kk => kk + .4 * (255 - kk)));
      return {
        texture: "square_particle",
        vK: 48,
        minLifeTime: .3 / Ci.d,
        maxLifeTime: .55 / Ci.d,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * Ci.d * Ci.d, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...Dk, 1],
          maxColor: [fk, Sk, bk, 1]
        }, {
          timeFraction: 1,
          minColor: [...Dk, 0],
          maxColor: [fk, Sk, bk, 0]
        }],
        blendMode: Li.h.Standard
      }
    }
    const ji = {
      texture: "glint",
      mipmaps: !1,
      vK: 96,
      minLifeTime: .5 / Ci.d,
      maxLifeTime: .9 / Ci.d,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * Ci.d * Ci.d, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: Li.h.OneOne
    };
    class si {
      constructor(kk, ek) {
        this.api = kk, this.localPlayerId = ek, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(kk) {
        if (this.api.particlesEnabled())
          for (const [ek, ik, Dk, fk, Sk, bk] of kk.slice(0, 3)) {
            const kk = `${fk},${Sk},${bk}`;
            let rk = this.chips.get(kk);
            void 0 === rk && (rk = this.api.createParticles(Ai(fk, Sk, bk), {
              pos: [ek + .5, ik + .5, Dk + .5]
            }), this.chips.set(kk, rk));
            for (let ek = 0; ek < 8; ek++) this.setPoint(ek, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            rk.emitPoints([ek + .5, ik + .5, Dk + .5], this.points, 8)
          }
      }
      layerDone(kk) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const ek = kk.length / 3;
        if (0 === ek || !this.api.particlesEnabled()) return;
        const ik = Math.min(ek, 48),
          [Dk, fk, Sk] = [kk[0] + .5, kk[1] + 1, kk[2] + .5];
        let bk = 0;
        for (let rk = 0; rk < ik; rk++) {
          const Pk = 3 * Math.floor(rk * ek / ik);
          for (let ek = 0; ek < 2; ek++) this.setPoint(bk++, kk[Pk] + Math.random() - Dk, kk[Pk + 1] + 1 - fk, kk[Pk + 2] + Math.random() - Sk, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(ji, {
          pos: [Dk, fk, Sk]
        }), this.sparkles.emitPoints([Dk, fk, Sk], this.points, bk)
      }
      dispose() {
        var kk;
        for (const ek of this.chips.values()) ek.stop();
        this.chips.clear(), null === (kk = this.sparkles) || void 0 === kk || kk.stop(), this.sparkles = null
      }
      setPoint(kk, ek, ik, Dk, fk) {
        const Sk = 4 * kk;
        this.points[Sk] = ek, this.points[Sk + 1] = ik, this.points[Sk + 2] = Dk, this.points[Sk + 3] = fk
      }
    }
    var di = ik(1931);
    const Vi = "SpecialAction1",
      Fi = "KeyY",
      ui = "KeyX";

    function qi(kk) {
      let {
        placement: ek
      } = kk;
      const ik = (0, Vk.e)(wi, ek.getView()),
        {
          t: Dk
        } = (0, uk.D)(),
        {
          isTouchScreen: fk
        } = (0, rk.n)(["isTouchScreen"]),
        Sk = null !== ik,
        bk = Sk && !ik.blocked && !ik.waiting;
      if ((0, dk.b)((kk => Sk && !kk.repeat && !(0, mk.isTypingInInput)() && !(0, Pk.s)() && !fk), (kk => {
          const ik = function(kk, ek, ik) {
            if (kk === ui) return ek.stop;
            if (kk === Fi) return ik ? ek.build : zi;
            return di.u[Vi].includes(kk) ? ek.rotate : null
          }(kk.code, ek, bk);
          null !== ik && (kk.stopPropagation(), ik())
        })), !Sk) return null;
      let Mk = fk ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return ik.blocked ? Mk = "plotsGame:placementOffPlot" : ik.toClear > 0 && (Mk = "plotsGame:placementClear"), (0, Tk.jsx)(re.h, {
        placement: "bottom",
        children: (0, Tk.jsxs)("div", {
          className: "PlotsPlacementCard",
          children: [(0, Tk.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: Dk(Uk(ik.id).displayName.translationKey)
          }), (0, Tk.jsx)("div", {
            className: Ck()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: ik.refusals > 0
            }),
            children: Dk(Mk)
          }, ik.refusals), (0, Tk.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, Tk.jsxs)(jk.f, {
              onClick: ek.rotate,
              children: [(0, Tk.jsx)(Ii, {
                noaAction: Vi
              }), Dk("plotsGame:placementRotate")]
            }), (0, Tk.jsxs)(jk.R, {
              onClick: ek.stop,
              children: [(0, Tk.jsx)(Ii, {
                keyCode: ui
              }), Dk("general:cancel")]
            }), (0, Tk.jsxs)(jk.r, {
              disabled: !bk,
              onClick: ek.build,
              children: [(0, Tk.jsx)(Ii, {
                keyCode: Fi
              }), Dk("plotsGame:placementBuild")]
            })]
          })]
        })
      })
    }

    function Ii(kk) {
      return (0, Tk.jsx)(me.d, {
        className: "PlotsPlacementKey",
        ...kk
      })
    }

    function zi() {}
    var Qi = ik(4482);
    class vi {
      constructor(kk) {
        this.placement = kk, this.press = null
      }
      down(kk) {
        if (null !== this.press) return !1;
        const {
          id: ek,
          mouse: ik,
          x: Dk,
          y: fk,
          atMs: Sk
        } = kk;
        return this.press = {
          id: ek,
          mouse: ik,
          x: Dk,
          y: fk,
          atMs: Sk,
          moved: !1
        }, ik || this.placement.beginDrag(kk.ndcX, kk.ndcY), !0
      }
      move(kk) {
        const ek = this.press;
        null !== ek && ek.id === kk.id && (ek.moved ||= Math.hypot(kk.x - ek.x, kk.y - ek.y) > 8), kk.mouse ? this.placement.hoverAt(kk.ndcX, kk.ndcY) : (null === ek || void 0 === ek ? void 0 : ek.id) === kk.id && this.placement.dragTo(kk.ndcX, kk.ndcY)
      }
      up(kk) {
        const ek = this.press;
        (null === ek || void 0 === ek ? void 0 : ek.id) === kk.id && (this.move(kk), this.end(), !ek.moved && (ek.mouse || kk.atMs - ek.atMs <= 250) && this.placement.tap())
      }
      cancel(kk) {
        var ek;
        (null === (ek = this.press) || void 0 === ek ? void 0 : ek.id) === kk && this.end()
      }
      leave(kk) {
        let {
          id: ek,
          mouse: ik
        } = kk;
        ik && this.placement.endHover(), this.cancel(ek)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }

    function Ei(kk) {
      let {
        placement: ek
      } = kk;
      return null === (0, Vk.e)(wi, ek.getView()) ? null : (0, Tk.jsx)(ai, {
        placement: ek
      })
    }

    function ai(kk) {
      let {
        placement: ek
      } = kk;
      (0, Qi.c)(!0, !0, "PlotsPlacementLayer");
      const ik = (0, Sk.useMemo)((() => new vi(ek)), [ek]);
      return (0, Tk.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: kk => {
          "mouse" === kk.pointerType && 0 !== kk.button || !ik.down(Wi(kk)) || kk.currentTarget.setPointerCapture(kk.pointerId)
        },
        onPointerMove: kk => {
          ik.move(Wi(kk))
        },
        onPointerUp: kk => {
          ik.up(Wi(kk))
        },
        onPointerCancel: kk => {
          ik.cancel(kk.pointerId)
        },
        onLostPointerCapture: kk => {
          ik.cancel(kk.pointerId)
        },
        onPointerLeave: kk => {
          ik.leave(Wi(kk))
        },
        "aria-hidden": !0
      })
    }

    function Wi(kk) {
      const {
        left: ek,
        top: ik,
        width: Dk,
        height: fk
      } = kk.currentTarget.getBoundingClientRect();
      return {
        id: kk.pointerId,
        mouse: "mouse" === kk.pointerType,
        x: kk.clientX,
        y: kk.clientY,
        ndcX: (kk.clientX - ek) / Dk * 2 - 1,
        ndcY: 1 - (kk.clientY - ik) / fk * 2,
        atMs: kk.timeStamp
      }
    }
    var ti = ik(2359),
      Xi = ik(36249),
      Bi = ik(1922),
      ci = ik(1240);
    const Ti = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function oi(kk) {
      let {
        hud: ek
      } = kk;
      const ik = (0, Vk.e)(Ke, ek.getPlot()),
        [Dk, fk] = (0, Sk.useState)(null),
        bk = (0, Xi.m)(Dk);
      if ("none" === ik[0]) return null;
      const [, rk, Pk, mk, Mk, Kk] = ik;
      return (0, Tk.jsx)("div", {
        className: Ck()("PlotsPlotBannerContainer", {
          Below: bk
        }),
        children: (0, Tk.jsx)(Zi, {
          plotX: rk,
          plotZ: Pk,
          ownerName: mk,
          ownerId: Mk,
          relation: Kk,
          plaqueRef: fk
        }, `${rk},${Pk}`)
      })
    }

    function Zi(kk) {
      var ek, ik;
      let {
        plotX: Dk,
        plotZ: fk,
        ownerName: Sk,
        ownerId: bk,
        relation: rk,
        plaqueRef: Pk
      } = kk;
      const {
        t: mk
      } = (0, uk.D)(), Mk = (0, Bi.h)("hiddenPlayerNames"), Kk = (0, Bi.h)("players"), xk = null === bk ? null : null !== (ek = null === (ik = Kk.byId[bk]) || void 0 === ik ? void 0 : ik.cosmetics) && void 0 !== ek ? ek : null, nk = mk("plotsGame:plotBannerCoords", {
        x: Dk,
        z: fk
      }), Uk = "own" === rk || null !== Sk;
      return (0, Tk.jsxs)("div", {
        ref: Pk,
        className: Ck()("PlotsPlotBanner", {
          Own: "own" === rk,
          Shared: "shared" === rk
        }),
        role: "status",
        children: [(0, Tk.jsxs)("span", {
          className: Ck()("PlotsPlotBannerSeal", {
            Face: null !== xk
          }),
          children: [null !== xk && (0, Tk.jsx)(ti.b, {
            cosmetics: xk
          }), null === xk && (0, Tk.jsx)(Ak.d, {
            name: Ti[rk]
          })]
        }), (0, Tk.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, Tk.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === rk && mk("plotsGame:plotBannerYours"), "own" !== rk && null !== Sk && mk("plotsGame:plotBannerOwner", {
              name: (0, ci.f)(Sk, Mk)
            }), !Uk && nk]
          }), Uk && (0, Tk.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [nk, "shared" === rk && (0, Tk.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: mk("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }

    function Oi(kk) {
      let {
        progress: ek,
        goal: ik
      } = kk;
      const Dk = Math.min(ek, ik);
      return (0, Tk.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, Tk.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": ik,
          "aria-valuenow": Dk,
          children: (0, Tk.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${Dk/ik})`
            }
          })
        }), (0, Tk.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [Dk, "/", ik]
        })]
      })
    }

    function gi(kk) {
      return {
        translationKey: `plotsGame:${kk}`,
        actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
      }
    }
    const Gi = {
      house: {
        icon: "house",
        titleKey: "plotsGame:starterLotHouseTitle",
        desktop: gi("starterLotHouseHint", ["alt-fire"]),
        touch: gi("starterLotHouseHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotHousePlain"
      },
      garden: {
        icon: "sparkle",
        titleKey: "plotsGame:starterLotGarden",
        desktop: gi("starterLotGardenHint", ["alt-fire"]),
        touch: gi("starterLotGardenHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotGardenPlain"
      },
      boulder: {
        icon: "hammer",
        titleKey: "plotsGame:starterLotBoulder",
        desktop: gi("starterLotBreakHint", ["primary-fire"]),
        touch: gi("starterLotBreakHintTouch"),
        plainKey: "plotsGame:starterLotBreakPlain"
      },
      fly: {
        icon: "angles-up",
        titleKey: "plotsGame:starterLotFly",
        desktop: gi("starterLotFlyHint", ["jump"]),
        touch: gi("starterLotFlyHintTouch"),
        plainKey: "plotsGame:starterLotFlyPlain"
      },
      backpack: {
        icon: "backpack",
        titleKey: "plotsGame:starterLotBackpack",
        desktop: gi("starterLotBackpackHint", ["OpenInventory"]),
        touch: gi("starterLotBackpackHintTouch"),
        plainKey: "plotsGame:starterLotBackpackPlain"
      },
      neighbour: {
        icon: "person",
        titleKey: "plotsGame:starterLotNeighbour",
        desktop: gi("starterLotNeighbourHint", ["forward", "left", "backward", "right"]),
        touch: gi("starterLotNeighbourHintTouch"),
        plainKey: "plotsGame:starterLotNeighbourPlain"
      }
    };

    function Ni(kk, ek, ik) {
      const {
        translationKey: Dk,
        actions: fk
      } = ik ? ek.touch : ek.desktop;
      if (0 === fk.length) return kk(Dk);
      const Sk = [];
      for (const bk of fk) {
        const Dk = (0, di.t)(bk, ik),
          fk = di.u[bk][0];
        if (null === Dk && void 0 === fk) return kk(ek.plainKey);
        Sk.push(null === Dk ? (0, di.o)(fk) : kk(Dk.translationKey))
      }
      return kk(Dk, {
        key: Sk.join("")
      })
    }

    function Ri(kk) {
      let {
        hud: ek
      } = kk;
      const ik = (0, Vk.e)(Me, ek.getStep()),
        {
          t: Dk
        } = (0, uk.D)();
      return (0, Tk.jsxs)(re.h, {
        placement: "bottom",
        children: ["step" === ik[0] && (0, Tk.jsx)(Ji, {
          step: ik[1],
          progress: ik[2],
          goal: ik[3]
        }, ik[1]), "celebrate" === ik[0] && (0, Tk.jsx)(kD, {
          className: Ck()("Celebrate", {
            Gold: "house" === ik[1]
          }),
          icon: "star",
          title: Dk("house" === ik[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
        }, `celebrate-${ik[1]}`)]
      })
    }

    function Ji(kk) {
      let {
        step: ek,
        progress: ik,
        goal: Dk
      } = kk;
      const {
        isTouchScreen: fk
      } = (0, rk.n)(["isTouchScreen"]), {
        t: Sk
      } = (0, uk.D)(), bk = Gi[ek];
      return (0, Tk.jsxs)(kD, {
        icon: bk.icon,
        title: Sk(bk.titleKey),
        children: [(0, Tk.jsx)("div", {
          className: "PlotsStepCardHint SmallTextLight",
          children: Ni(Sk, bk, fk)
        }), Dk > 1 && (0, Tk.jsx)(Oi, {
          progress: ik,
          goal: Dk
        }), "backpack" === ek && fk && (0, Tk.jsx)(eD, {})]
      })
    }

    function kD(kk) {
      let {
        className: ek,
        icon: ik,
        title: Dk,
        children: fk
      } = kk;
      return (0, Tk.jsxs)("div", {
        className: Ck()("PlotsStepCard", ek),
        role: "status",
        children: [(0, Tk.jsx)("span", {
          className: "PlotsStepCardIcon",
          children: (0, Tk.jsx)(Ak.d, {
            name: ik
          })
        }), (0, Tk.jsxs)("div", {
          className: "PlotsStepCardBody",
          children: [(0, Tk.jsx)("div", {
            className: "PlotsStepCardTitle SmallTextBold",
            children: Dk
          }), fk]
        })]
      })
    }

    function eD() {
      return (0, Sk.useEffect)((() => (rk.b.set({
        backpackPointerRequested: !0
      }), () => {
        rk.b.set({
          backpackPointerRequested: !1
        })
      })), []), null
    }
    const iD = function(kk, ek, ik, Dk) {
      let {
        localPlayerId: fk
      } = Dk;
      const rk = new xe;
      let Pk = null,
        mk = null,
        Mk = null,
        Kk = null,
        xk = null;
      const nk = [];
      return {
        onCreate: kk => {
          Pk = new si(kk, fk), mk = new mi(kk, fk, Pk), Mk = new mi(kk, fk, Pk), Kk = new yi(kk, fk), xk = new Yk(kk, Kk), nk.push((0, bk.z)((0, Sk.createElement)(Sk.Fragment, null, (0, Sk.createElement)(oi, {
            hud: rk
          }), (0, Sk.createElement)(Ri, {
            hud: rk
          }), (0, Sk.createElement)(Ue, {
            hud: rk,
            journal: xk
          }), (0, Sk.createElement)(Ei, {
            placement: Kk
          }), (0, Sk.createElement)(qi, {
            placement: Kk
          })), {
            content: (0, Sk.createElement)(Se, {
              journal: xk
            })
          }))
        },
        Px: () => {
          mk.Px(), Mk.Px(), Kk.Px(), xk.Px()
        },
        onPlayerAttemptAltAction: (kk, ek, ik, Dk, fk, Sk) => {
          var bk;
          if (null !== Sk) return;
          const rk = void 0 === ek ? null : [ek, ik, Dk];
          return null !== (bk = mk.attemptAltAction(rk)) && void 0 !== bk ? bk : Mk.attemptAltAction(rk)
        },
        onPlayerClickUp: () => {
          mk.endPress(), Mk.endPress()
        },
        onAfterRender: (kk, ek) => {
          Kk.afterRender(ek), mk.afterRender(ek), Mk.afterRender(ek)
        },
        onClose: () => {
          for (const kk of nk) kk();
          Pk.dispose(), mk.dispose(), Mk.dispose(), Kk.dispose(), Pk = null, mk = null, Mk = null, Kk = null, xk = null
        },
        onReceivedMessageFromServer: (kk, ek) => {
          if ("plotsStarterLot" === kk) rk.receiveStep(ek);
          else if ("plotsPlot" === kk) rk.receivePlot(ek);
          else if ("plotsStarterHouse" === kk) mk.BU(ek);
          else if ("plotsBlueprint" === kk) {
            const kk = ek;
            Mk.BU(kk), Kk.BU(kk)
          } else "plotsJournal" === kk ? xk.BU(ek) : "plotsJournalOpen" === kk ? xk.openFromServer() : "plotsPreviewEnd" === kk && Kk.endFromServer()
        }
      }
    }
  },
  38725: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk,
      e: () => Sk
    });
    const Dk = 1 / .6,
      fk = {
        kind: "smokePuff"
      };
    class Sk {
      constructor(kk, ek, ik) {
        this.style = kk, this.vK = ek, this.half = ik, this.particles = null, this.lastFrame = -1
      }
      emit(kk, ek, ik) {
        let Sk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return ik !== this.lastFrame && (this.lastFrame = ik, this.particles || (this.particles = kk.createParticles(function(kk, ek) {
          const [
            [ik, Sk, bk],
            [rk, Pk, mk]
          ] = kk.colours;
          return {
            texture: kk.soft ? fk : "square_particle",
            vK: ek,
            minLifeTime: kk.life[0] / Dk,
            maxLifeTime: kk.life[1] / Dk,
            minEmitPower: kk.power[0] * Dk,
            maxEmitPower: kk.power[1] * Dk,
            minSize: kk.size[0],
            maxSize: kk.size[1],
            emitRate: 0,
            gravity: [0, kk.lift * Dk * Dk, 0],
            dir1: [-kk.spread, 1, -kk.spread],
            dir2: [kk.spread, 1, kk.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [ik, Sk, bk, kk.alpha],
              maxColor: [rk, Pk, mk, kk.alpha]
            }, {
              timeFraction: 1,
              minColor: [ik, Sk, bk, 0],
              maxColor: [rk, Pk, mk, 0]
            }],
            blendMode: kk.blendMode
          }
        }(this.style, this.vK), {
          pos: ek,
          half: this.half
        })), this.particles.moveTo(ek, this.half), this.particles.emit(Sk), !0)
      }
      dispose() {
        var kk;
        null === (kk = this.particles) || void 0 === kk || kk.stop(), this.particles = null
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);