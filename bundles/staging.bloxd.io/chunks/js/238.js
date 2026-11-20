export const id = 238;
export const ids = [238];
export const modules = {
  39041: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => kR
    });
    const Rk = [0, 90, 180, 270],
      tk = "plotsblueprint";
    var ak = Bk(61),
      Xk = Bk(36332),
      bk = Bk(22),
      wk = Bk(1585),
      dk = Bk(1650),
      sk = Bk(29);
    const Vk = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      Jk = {
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
      Ak = ["small", "medium", "large"].flatMap((kk => Vk.flat().filter((Fk => Jk[Fk].tier === kk))));

    function ek(kk) {
      return Jk[kk]
    }
    const yk = new Map(Vk.flatMap((kk => kk.slice(1).map(((Fk, Bk) => [Fk, kk[Bk]])))));

    function fk(kk) {
      var Fk;
      return null !== (Fk = yk.get(kk)) && void 0 !== Fk ? Fk : null
    }
    const mk = {
      farm_hut: "plotsGame:journalNoteFarmHut",
      rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
      castle_tower: "plotsGame:journalNoteCastleTower",
      farm_house: "plotsGame:journalNoteFarmHouse",
      farm_barn: "plotsGame:journalNoteFarmBarn"
    };

    function Wk(kk, Fk) {
      const Bk = new Set(kk),
        Rk = function(kk) {
          const Fk = new Set(kk);
          return new Set(Ak.filter((kk => {
            const Bk = fk(kk);
            return null === Bk || Fk.has(Bk)
          })))
        }(Bk);
      return Ak.map((kk => {
        const tk = kk === Fk;
        return Bk.has(kk) ? {
          id: kk,
          active: tk,
          state: "completed",
          unlockedBy: null
        } : Rk.has(kk) ? {
          id: kk,
          active: tk,
          state: "open",
          unlockedBy: null
        } : {
          id: kk,
          active: tk,
          state: "locked",
          unlockedBy: fk(kk)
        }
      }))
    }
    const vk = "plotsJournalChanged";
    class ik {
      constructor(kk, Fk) {
        this.api = kk, this.placement = Fk, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.ve("journal_opened")
        }, this.build = kk => {
          this.ve("placement_started"), this.placement.start(kk), (0, Xk.f)()
        }, this.putAway = () => {
          this.api.sendCommand(`${tk} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      he(kk) {
        let [, Fk, Bk] = kk;
        this.pages = Wk(Fk, Bk), sk.o.Hf(vk, this.pages, !0)
      }
      openFromServer() {
        this.openRequested = !0, this.yJ()
      }
      yJ() {
        this.openRequested && !bk.c.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, wk.s)() || (0, dk.isTypingInInput)() || null !== this.placement.getView() || (0, Xk.q)())
      }
      ve(kk) {
        this.reported.has(kk) || (this.reported.add(kk), this.api.sendCommand(`${tk} report ${kk}`))
      }
    }
    var Yk = Bk(1020),
      Lk = Bk.n(Yk),
      Ok = Bk(1028),
      Ek = Bk(1389),
      Sk = Bk(4268),
      Nk = Bk(3214),
      Hk = Bk(1387),
      uk = Bk(1987),
      Mk = Bk(1149),
      gk = Bk(9095);
    const Uk = [0, 90, 180, 270],
      ck = /^(meta\|rot\d)\|([lrud]+)$/,
      Gk = "nesw",
      Tk = /^meta\|([nesw]*)\|?(Stacked)?$/,
      rk = function(kk) {
        const Fk = new WeakMap;
        return (Bk, Rk) => {
          let tk = Fk.get(Bk);
          return void 0 === tk && (tk = kk(Bk, Rk), Fk.set(Bk, tk)), tk
        }
      }((kk => new Dk(kk)));
    class Dk {
      constructor(kk) {
        this.blockMetadata = kk, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const Fk = new Set(Object.keys(kk).map((Fk => kk[Fk].id)));
        Fk.add(0), this.maxBlockId = Math.max(...Fk)
      }
      static
      for (kk) {
        return rk(kk)
      }
      getBlockIdMapping(kk, Fk) {
        const Bk = this.getBlockIdMappingKey(kk, Fk);
        let Rk = this.blockIdMappings.get(Bk);
        return void 0 === Rk && Uk.includes(kk) && (Rk = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, kk, Fk), this.blockIdMappings.set(Bk, Rk)), Rk
      }
      turnBlockId(kk, Fk, Bk) {
        return this.mapBlockId(this.blockMetadata[kk], Fk, this.getRotationMapping(Fk, Bk), Bk)
      }
      getBlockIdMappingKey(kk, Fk) {
        return `r${kk}|m${Number(Fk)}`
      }
      createBlockIdMapping(kk, Fk, Bk, Rk) {
        const tk = new Uint16Array(Fk + 1),
          ak = this.getRotationMapping(Bk, Rk);
        for (const Xk in kk) {
          const Fk = kk[Xk];
          tk[Fk.id] = this.mapBlockId(Fk, Bk, ak, Rk)
        }
        return tk
      }
      getRotationMapping(kk, Fk) {
        const Bk = Math.round(kk / 90),
          Rk = new Uint8Array(4);
        for (let tk = 0; tk < 4; tk++) Rk[tk] = (4 + tk - Bk) % 4;
        if (Fk) {
          let kk = Rk[0];
          Rk[0] = Rk[1], Rk[1] = kk, kk = Rk[2], Rk[2] = Rk[3], Rk[3] = kk
        }
        return Rk
      }
      mapBlockId(kk, Fk, Bk, Rk) {
        var tk;
        const {
          blockMetadata: ak
        } = this, Xk = Math.round(Fk / 90), {
          id: bk,
          meta: wk
        } = kk, {
          rot: dk,
          rootName: sk,
          metaStr: Vk
        } = wk;
        let Jk;
        const [, Ak, ek] = null !== (tk = Tk.exec(Vk)) && void 0 !== tk ? tk : [];
        if (void 0 !== Ak) {
          var yk, fk;
          Jk = null !== (yk = null === (fk = ak[`${sk}|meta|${[Gk.split("").filter(((kk,Fk)=>Ak.split("").some((kk=>{const Bk=Gk.indexOf(kk);return((Rk?3-Bk:Bk)+Xk)%4===Fk})))).join(""),ek].filter(Boolean).join("|")}`]) || void 0 === fk ? void 0 : fk.id) && void 0 !== yk ? yk : bk
        } else if (null === dk) Jk = bk;
        else {
          var mk, Wk;
          const kk = Bk[dk - 1] + 1;
          let Fk = Vk.replace(`rot${dk}`, `rot${kk}`);
          Rk && wk.stairsCorner && (Fk = Fk.replace(/(Left|Right)$/, (kk => "Left" === kk ? "Right" : "Left"))), Rk && "Chest" === sk && (Fk = Fk.replace(/\|(left|right)$/, ((kk, Fk) => "left" === Fk ? "|right" : "|left")));
          const tk = ck.exec(Fk);
          if (Rk && null !== tk) {
            const kk = "lrud".split("").filter((kk => tk[2].includes("l" === kk ? "r" : "r" === kk ? "l" : kk)));
            Fk = `${tk[1]}|${kk.join("")}`
          }
          const Xk = `${sk}|${Fk}`;
          if (Jk = null !== (mk = null === (Wk = ak[Xk]) || void 0 === Wk ? void 0 : Wk.id) && void 0 !== mk ? mk : null, null === Jk) {
            const kk = ak[sk];
            Jk = kk.rootMetaDesc === Xk ? kk.id : bk
          }
        }
        return Jk
      }
    }

    function zk(kk, Fk, Bk) {
      let {
        xRotationMappedOrigin: Rk,
        shouldSwapXZ: tk
      } = Bk;
      const ak = tk ? Fk : kk;
      return null === Rk ? ak : Rk - ak
    }

    function Pk(kk, Fk, Bk) {
      let {
        zRotationMappedOrigin: Rk,
        shouldSwapXZ: tk
      } = Bk;
      const ak = tk ? kk : Fk;
      return null === Rk ? ak : Rk - ak
    }
    const hk = {
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
      qk = new Map;

    function Ck(kk, Fk) {
      const Bk = `${kk}|${Fk}`;
      let Rk = qk.get(Bk);
      if (void 0 === Rk) {
        const {
          size: tk,
          palette: ak,
          layers: Xk
        } = hk[kk], bk = 90 === Fk || 270 === Fk, [wk, dk] = bk ? [tk[2], tk[0]] : [tk[0], tk[2]], sk = function(kk, Fk, Bk) {
          let Rk = null,
            tk = null,
            ak = !1;
          switch (kk) {
            case 0:
              break;
            case 90:
              Rk = Fk - 1, ak = !0;
              break;
            case 180:
              Rk = Fk - 1, tk = Bk - 1;
              break;
            case 270:
              tk = Bk - 1, ak = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${kk}`)
          }
          return {
            xRotationMappedOrigin: Rk,
            zRotationMappedOrigin: tk,
            shouldSwapXZ: ak
          }
        }(Fk, wk, dk), Vk = Dk.for(gk.j), Jk = ak.map((kk => (0, gk.h)(Vk.turnBlockId((0, gk.m)(kk), Fk, !1)))), Ak = [];
        Xk.forEach(((kk, Fk) => {
          kk.split(" ").forEach(((kk, Bk) => {
            for (let Rk = 0; Rk < kk.length; Rk++)
              if ("." !== kk[Rk]) {
                const tk = [zk(Rk, Bk, sk), Fk, Pk(Rk, Bk, sk)];
                Ak.push({
                  offset: tk,
                  block: Jk[kk.charCodeAt(Rk) - "a".charCodeAt(0)]
                })
              }
          }))
        })), Rk = {
          size: [wk, tk[1], dk],
          cells: Ak
        }, qk.set(Bk, Rk)
      }
      return Rk
    }
    const Zk = {
      farm_hut: Bk.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
      farm_house: Bk.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
      farm_barn: Bk.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
      rusticHome_tent: Bk.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
      rusticHome_cabin: Bk.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
      rusticHome_house: Bk.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
      market_stand: Bk.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
      market_stall: Bk.p + "static/media/market_stall.9a562807f9dff591618a.webp",
      market_shop: Bk.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
      castle_wall: Bk.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
      castle_gate: Bk.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
      castle_tower: Bk.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
    };
    var pk = Bk(1069);
    const Kk = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function xk(kk) {
      let {
        page: Fk,
        building: Bk,
        onBuild: Rk,
        onPutAway: tk
      } = kk;
      const {
        t: ak
      } = (0, Mk.x)(), {
        displayName: Xk,
        tier: bk
      } = ek(Fk.id), wk = Ck(Fk.id, 0).cells.length, dk = mk[Fk.id], sk = "locked" === Fk.state, Vk = Bk ? Ek.g : Ek.o;
      return (0, pk.jsxs)("article", {
        className: Lk()("PlotsJournalPage", {
          Locked: sk
        }),
        children: [(0, pk.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: ak(Xk.translationKey)
        }), (0, pk.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [ak(Kk[bk]), " \xb7 ", ak("plotsGame:journalBlocks", {
            blocks: String(wk)
          })]
        }), (0, pk.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [Ak.map((kk => (0, pk.jsx)("img", {
            className: Lk()({
              Shown: kk === Fk.id
            }),
            src: Zk[kk],
            alt: "",
            draggable: !1
          }, kk))), "completed" === Fk.state && (0, pk.jsx)("span", {
            className: "PlotsJournalStamp",
            children: ak("plotsGame:journalBuilt")
          }), sk && (0, pk.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, pk.jsx)(Ok.d, {
              name: "lock"
            })
          })]
        }), void 0 !== dk && "completed" !== Fk.state && (0, pk.jsx)("p", {
          className: "PlotsJournalNote",
          children: ak(dk)
        }), (0, pk.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === Fk.state && (0, pk.jsx)("p", {
            className: "PlotsJournalHint",
            children: ak("plotsGame:journalLocked", {
              name: ak(ek(Fk.unlockedBy).displayName.translationKey)
            })
          }), Fk.active && (0, pk.jsxs)(pk.Fragment, {
            children: [(0, pk.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: ak("plotsGame:journalBuilding")
            }), (0, pk.jsx)(Ek.j, {
              onClick: tk,
              children: ak("plotsGame:journalPutAway")
            })]
          }), !sk && !Fk.active && (0, pk.jsx)(Vk, {
            onClick: () => {
              Rk(Fk.id)
            },
            children: ak("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function jk(kk) {
      let {
        className: Fk,
        page: Bk,
        hidden: Rk,
        building: tk,
        journal: ak
      } = kk;
      return (0, pk.jsxs)("div", {
        ref: kk => {
          null !== kk && (kk.inert = Rk)
        },
        className: Lk()("PlotsJournalSide", Fk),
        children: [void 0 !== Bk && (0, pk.jsx)(xk, {
          page: Bk,
          building: tk,
          onBuild: ak.build,
          onPutAway: ak.putAway
        }), void 0 === Bk && (0, pk.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var lk = Bk(291),
      nk = Bk(1808);

    function Ik(kk) {
      return Math.cos((0, nk.k)(kk))
    }

    function Qk(kk) {
      return (0, nk.v)(Math.acos(lk.b.clamp(kk, -1, 1)))
    }

    function kF(kk, Fk, Bk, Rk, tk) {
      const ak = Math.abs(Fk - kk),
        Xk = (0, nk.v)(tk / (Bk * Math.abs(Math.sin((0, nk.k)(kk))))),
        bk = 450 * Math.min(1, ak / Rk),
        wk = Xk > 0 ? 3 * ak / Xk : 1 / 0;
      return Math.round(Math.max(120, Math.min(bk, wk)))
    }
    class FF {
      constructor() {
        this.samples = []
      }
      add(kk, Fk) {
        for (this.samples.push({
            x: kk,
            at: Fk
          }); Fk - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const kk = this.samples[0],
          Fk = this.samples[this.samples.length - 1];
        return Fk.at > kk.at ? (Fk.x - kk.x) / (Fk.at - kk.at) : 0
      }
    }

    function BF(kk, Fk) {
      return kk > Fk && kk >= 600
    }

    function RF(kk) {
      return Qk(new DOMMatrixReadOnly(getComputedStyle(kk).transform).m11)
    }

    function tF(kk, Fk) {
      kk.style.transform = `rotateY(${-Fk}deg)`, kk.classList.add("Turning")
    }

    function aF(kk) {
      let {
        journal: Fk
      } = kk;
      const {
        t: Bk
      } = (0, Mk.x)(), Rk = (0, Hk.g)(vk, Fk.getPages()), tk = (0, uk.d)(BF), [bk, wk] = (0, ak.useState)((() => function(kk) {
        const Fk = kk.findIndex((kk => kk.active));
        return -1 !== Fk ? Fk : Math.max(0, kk.findIndex((kk => "open" === kk.state)))
      }(Rk))), sk = (0, ak.useRef)(null), Vk = (0, ak.useRef)(null), Jk = (0, ak.useRef)({
        Forward: null,
        Back: null
      }), Ak = tk ? 2 : 1, ek = tk ? 180 : 90, yk = bk - bk % Ak, fk = yk > 0, mk = yk + Ak < Rk.length, Wk = (0, ak.useCallback)((() => {
        const kk = Vk.current;
        return null === kk ? yk : (Vk.current = null, kk.animation.cancel(), (Fk = Jk.current[kk.direction]).style.transform = "", Fk.classList.remove("Turning"), null === kk.next ? yk : (wk(kk.next), kk.next));
        var Fk
      }), [yk]), ik = (0, ak.useCallback)(((kk, Fk, Bk, Rk) => {
        const tk = Jk.current[kk],
          ak = RF(tk),
          Xk = Fk === ("Forward" === kk) ? ek : 0;
        tF(tk, Xk);
        const bk = tk.animate([{
          transform: `rotateY(${-ak}deg)`
        }, {
          transform: `rotateY(${-Xk}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : kF(ak, Xk, tk.offsetWidth, ek, Xk > ak ? -Bk : Bk),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        Vk.current = {
          direction: kk,
          animation: bk,
          next: Fk ? Rk + ("Forward" === kk ? Ak : -Ak) : null
        }, bk.onfinish = () => {
          var kk;
          (null === (kk = Vk.current) || void 0 === kk ? void 0 : kk.animation) === bk && Wk()
        }
      }), [Ak, ek, Wk]), Yk = (0, ak.useCallback)((kk => {
        if (null !== sk.current) return;
        const Fk = Wk();
        ("Forward" === kk ? Fk + Ak < Rk.length : Fk > 0) && ik(kk, !0, 0, Fk)
      }), [Wk, ik, Ak, Rk.length]);
      (0, ak.useEffect)((() => {
        Fk.onOpened()
      }), [Fk]), (0, ak.useEffect)((() => () => {
        var kk;
        null === (kk = Vk.current) || void 0 === kk || kk.animation.cancel()
      }), []), (0, ak.useEffect)((() => {
        const kk = kk => {
          var Fk;
          kk.pointerId !== (null === (Fk = sk.current) || void 0 === Fk ? void 0 : Fk.pointerId) || sk.current.following || (sk.current = null)
        };
        return window.addEventListener("pointerup", kk), () => {
          window.removeEventListener("pointerup", kk)
        }
      }), []), (0, Nk.b)((kk => ("ArrowLeft" === kk.code || "ArrowRight" === kk.code) && !(0, dk.isTypingInInput)()), (kk => {
        kk.stopPropagation(), Yk("ArrowLeft" === kk.code ? "Back" : "Forward")
      }));
      const Ok = (kk, Fk, Bk) => {
          const Rk = function(kk, Fk, Bk, Rk) {
            return (kk < 0 ? Bk : Rk) ? lk.b.clampAbs(kk, Fk) : Math.sign(kk) * Fk * (1 - 1 / (.55 * Math.abs(kk) / Fk + 1))
          }(kk.base + Bk, Ak * kk.width, mk, fk);
          return "Forward" === Fk ? Math.min(Rk, 0) : Math.max(Rk, 0)
        },
        gk = (kk, Fk) => {
          const Bk = sk.current;
          if (sk.current = null, null === Bk.direction) return;
          Bk.speed.add(kk, Fk);
          const Rk = Bk.speed.get(),
            tk = Ok(Bk, Bk.direction, kk - Bk.x);
          ik(Bk.direction, null !== function(kk, Fk, Bk, Rk, tk) {
            if (Math.abs(Fk) >= .3 ? Math.sign(Fk) !== Math.sign(kk) : Math.abs(kk) < .5 * Bk) return null;
            const ak = kk < 0 ? "Forward" : "Back";
            return ("Forward" === ak ? Rk : tk) ? ak : null
          }(tk, Rk, Ak * Bk.width, mk, fk), Rk, yk)
        },
        Uk = Rk.some((kk => kk.active)),
        ck = (kk, Bk, tk) => (0, pk.jsx)(jk, {
          className: kk,
          page: Bk >= 0 && Bk < Rk.length ? Rk[Bk] : void 0,
          hidden: tk,
          building: Uk,
          journal: Fk
        });
      return (0, pk.jsx)(Sk.e, {
        close: Xk.i,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, pk.jsxs)("section", {
          className: Lk()("PlotsJournal", {
            Spread: tk
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": Bk("plotsGame:journalTitle"),
          children: [(0, pk.jsx)(Ek.k, {
            className: "PlotsJournalClose",
            onClick: Xk.i
          }), (0, pk.jsx)(XF, {
            direction: "Back",
            disabled: !fk,
            onTurn: Yk
          }), (0, pk.jsx)("div", {
            className: "PlotsJournalBookPages",
            onPointerDown: kk => {
              var Fk;
              if (!kk.isPrimary || 0 !== kk.button || null !== Vk.current && null !== kk.target.closest("button")) return;
              const Bk = new FF;
              Bk.add(kk.clientX, kk.timeStamp);
              const Rk = Jk.current.Forward.offsetWidth,
                tk = Vk.current;
              Vk.current = null;
              let ak = 0;
              if (null !== tk) {
                const Fk = Jk.current[tk.direction],
                  Bk = RF(Fk);
                tk.animation.cancel(), tF(Fk, Bk), ak = function(kk, Fk, Bk, Rk) {
                  return (kk < 0 ? Bk : Rk) ? kk : Math.sign(kk) * Fk * (1 / (1 - Math.min(Math.abs(kk) / Fk, .99)) - 1) / .55
                }(function(kk, Fk, Bk, Rk) {
                  return Bk * (Ik(Fk) - Ik("Forward" === kk ? 0 : Rk))
                }(tk.direction, Bk, Rk, ek), Ak * Rk, mk, fk), kk.currentTarget.setPointerCapture(kk.pointerId)
              }
              sk.current = {
                pointerId: kk.pointerId,
                x: kk.clientX,
                y: kk.clientY,
                base: ak,
                width: Rk,
                following: null !== tk,
                direction: null !== (Fk = null === tk || void 0 === tk ? void 0 : tk.direction) && void 0 !== Fk ? Fk : null,
                speed: Bk
              }
            },
            onPointerMove: kk => {
              const Fk = sk.current;
              if (null === Fk || kk.pointerId !== Fk.pointerId) return;
              if (0 === kk.buttons) return void gk(kk.clientX, kk.timeStamp);
              const Bk = kk.clientX - Fk.x;
              !Fk.following && function(kk, Fk) {
                return Math.abs(kk) > 8 && Math.abs(kk) > Math.abs(Fk)
              }(Bk, kk.clientY - Fk.y) && (Fk.following = !0, Fk.direction = Bk < 0 ? "Forward" : "Back", kk.currentTarget.setPointerCapture(kk.pointerId)), null !== Fk.direction && (Fk.speed.add(kk.clientX, kk.timeStamp), tF(Jk.current[Fk.direction], function(kk, Fk, Bk, Rk) {
                const tk = Bk * Ik("Forward" === kk ? 0 : Rk) + Fk;
                return lk.b.clamp(Qk(tk / Bk), 0, Rk)
              }(Fk.direction, Ok(Fk, Fk.direction, Bk), Fk.width, ek)))
            },
            onPointerUp: kk => {
              var Fk;
              kk.pointerId === (null === (Fk = sk.current) || void 0 === Fk ? void 0 : Fk.pointerId) && gk(kk.clientX, kk.timeStamp)
            },
            onPointerCancel: kk => {
              const Fk = sk.current;
              kk.pointerId === (null === Fk || void 0 === Fk ? void 0 : Fk.pointerId) && (sk.current = null, null !== Fk.direction && ik(Fk.direction, !1, 0, yk))
            },
            children: (0, pk.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [tk && ck("Left", yk - 2, !0), ck("Right", yk + 2 * Ak - 1, !0), (0, pk.jsxs)("div", {
                ref: kk => {
                  Jk.current.Back = kk
                },
                className: "PlotsJournalLeaf Back",
                children: [ck("Recto", yk - 1, !0), tk && ck("Verso", yk, !1)]
              }), (0, pk.jsxs)("div", {
                ref: kk => {
                  Jk.current.Forward = kk
                },
                className: "PlotsJournalLeaf Forward",
                children: [ck("Recto", yk + Ak - 1, !1), tk && ck("Verso", yk + Ak, !0)]
              })]
            })
          }), (0, pk.jsx)(XF, {
            direction: "Forward",
            disabled: !mk,
            onTurn: Yk
          })]
        })
      })
    }

    function XF(kk) {
      let {
        direction: Fk,
        disabled: Bk,
        onTurn: Rk
      } = kk;
      const {
        t: tk
      } = (0, Mk.x)();
      return (0, pk.jsx)("div", {
        className: Lk()("PlotsJournalArrow", Fk),
        children: (0, pk.jsx)(Ek.g, {
          disabled: Bk,
          ariaLabel: tk("Forward" === Fk ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            Rk(Fk)
          },
          children: (0, pk.jsx)(Ok.d, {
            name: "angle-up"
          })
        })
      })
    }
    var bF = Bk(36329),
      wF = Bk(1835),
      dF = Bk(1879);
    const sF = "plotsStepChanged",
      VF = "plotsPlotChanged";
    class JF {
      constructor() {
        this.step = ["none"], this.plot = ["none"]
      }
      getStep() {
        return this.step
      }
      receiveStep(kk) {
        this.step = kk, sk.o.Hf(sF, kk, !0)
      }
      getPlot() {
        return this.plot
      }
      receivePlot(kk) {
        this.plot = kk, sk.o.Hf(VF, kk, !0)
      }
    }
    const AF = "KeyJ";

    function eF(kk) {
      let {
        hud: Fk,
        journal: Bk
      } = kk;
      const Rk = (0, Hk.g)(vk, Bk.getPages()),
        tk = (0, Hk.g)(sF, Fk.getStep()),
        {
          isTouchScreen: ak
        } = (0, bk.h)(["isTouchScreen"]),
        {
          t: sk
        } = (0, Mk.x)(),
        Vk = null !== Rk && "none" === tk[0];
      return (0, Nk.b)((kk => null !== Rk && kk.code === AF && !kk.repeat && !(0, dk.isTypingInInput)()), (kk => {
        (0, wk.F)(kk, Vk, Xk.q)
      })), Vk ? (0, pk.jsx)(bF.g, {
        placement: "topRight",
        children: (0, pk.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, pk.jsxs)("button", {
            type: "button",
            className: Lk()("PlotsJournalButton SmallTextBold", {
              Touch: ak
            }),
            onClick: Xk.q,
            children: [(0, pk.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, pk.jsx)(wF.e, {
                itemName: "Book",
                amount: 0
              })
            }), sk("plotsGame:journalButton"), !ak && (0, pk.jsx)(dF.c, {
              className: "PlotsJournalButtonKey",
              keyCode: AF
            })]
          })
        })
      }) : null
    }
    var yF = Bk(38064),
      fF = Bk(37830),
      mF = Bk(36605),
      WF = Bk(9114),
      vF = Bk(9132),
      iF = Bk(37497);
    const YF = new Map([
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
      oF = [...mF.b.blockRemoveActionRoots, ...fF.b, ...WF.g, "Board", "Code Block", "Custom Lobby Block"],
      LF = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let OF = null;

    function EF() {
      return OF ??= function() {
        const kk = SF(),
          Fk = Math.max(...kk.map((kk => gk.j[kk].id))) + 1,
          Bk = new Int32Array(Fk),
          Rk = new Int32Array(Fk),
          tk = new Uint8Array(Fk).fill(1),
          ak = new Uint8Array(Fk),
          Xk = new Uint8Array(Fk),
          bk = new Array(Fk).fill("Air"),
          wk = new Map,
          dk = kk => {
            let Fk = wk.get(kk);
            return void 0 === Fk && (Fk = wk.size + 1, wk.set(kk, Fk)), Fk
          },
          sk = new Set(oF);
        for (const Jk of kk) {
          var Vk;
          const {
            id: kk,
            meta: Fk,
            altActionable: wk,
            canBePlacedOver: Ak
          } = gk.j[Jk];
          Bk[kk] = dk(NF(Jk));
          const ek = Fk.stairsCorner;
          if (null === ek) Rk[kk] = Bk[kk];
          else {
            const Bk = ek.endsWith("Right");
            Rk[kk] = dk(`${Fk.rootName}|rot${Bk?Fk.rot%4+1:Fk.rot}|${Fk.halfblockPlacement}|${ek.replace("Right","Left")}`)
          }
          tk[kk] = Ak ? 1 : 0, ak[kk] = wk || null !== Fk.open || Jk in iF.e || sk.has(Fk.rootName) || void 0 !== (0, fF.e)(Fk.rootName) ? 1 : 0;
          const {
            rootName: yk
          } = Fk;
          Xk[kk] = null !== Fk.open || fF.b.includes(yk) || yk.includes("Bookshelf") || yk.includes("Mailbox") ? 1 : 0, bk[kk] = null !== (Vk = (0, yF.d)(kk)) && void 0 !== Vk ? Vk : yk
        }
        return {
          kinds: Bk,
          shapes: Rk,
          empty: tk,
          inUse: ak,
          ownAltActionMessage: Xk,
          placingItems: bk
        }
      }(), OF
    }

    function SF() {
      return Object.keys(gk.j).filter((kk => gk.j[kk].name === kk))
    }

    function NF(kk) {
      var Fk;
      const Bk = gk.j[kk],
        {
          rootName: Rk,
          rot: tk
        } = Bk.meta,
        [, ...ak] = (null !== (Fk = Bk.rootMetaDesc) && void 0 !== Fk ? Fk : kk).split("|"),
        Xk = ak.filter((kk => !("meta" === kk || LF.test(kk) || (0, vF.E)(Bk) && /^[nesw]+$/.test(kk) || WF.g.includes(Rk) && /^[lrud]+$/.test(kk) || lk.J.includes(Rk) && /^(left|right)$/.test(kk))));
      return [Rk, ...Xk].map((kk => "fenceGate" === Bk.model && kk === `rot${tk}` ? "rot" + ((tk - 1) % 2 + 1) : kk)).join("|")
    }

    function HF(kk, Fk) {
      const {
        kinds: Bk,
        shapes: Rk
      } = EF();
      return Bk[kk] === Bk[Fk] || Rk[kk] === Rk[Fk]
    }

    function uF(kk) {
      return 1 === EF().empty[kk]
    }

    function MF(kk) {
      return EF().placingItems[kk]
    }

    function gF(kk) {
      return YF.get(gk.j[kk].meta.rootName)
    }
    var UF = Bk(9112),
      cF = Bk(9127);
    const GF = [0, 0, 0, 1, 1, 1],
      TF = (0, UF.d)([
        [2, 0, 2, 6, 6, 6]
      ]),
      rF = (0, UF.d)([
        [3, 0, 3, 5, 5, 5]
      ]),
      DF = (0, UF.d)([
        [3, 3, 3, 5, 8, 5]
      ]),
      zF = [0, 1, 2, 3].map((kk => (0, UF.d)((0, UF.q)([
        [3, 2, 0, 5, 7, 3]
      ], kk))));

    function PF(kk) {
      const {
        nb: Fk,
        model: Bk,
        blockModel: Rk,
        meta: tk
      } = gk.j[kk];
      return void 0 !== Fk ? Fk : "CentreCross" === Bk ? TF : null !== Rk && void 0 !== Rk && Rk.startsWith("torch") ? tk.halfblockPlacement === cF.e.side ? zF[tk.rot - 1] : tk.halfblockPlacement === cF.e.top ? DF : rF : GF
    }
    var hF = Bk(36568),
      qF = Bk(182);

    function CF(kk, Fk) {
      const Bk = qF.h.Qm / 2;
      return kk[0] < Fk[0] + Bk && kk[0] + 1 > Fk[0] - Bk && kk[1] < Fk[1] + qF.h.FW && kk[1] + 1 > Fk[1] && kk[2] < Fk[2] + Bk && kk[2] + 1 > Fk[2] - Bk
    }

    function ZF(kk, Fk, Bk, Rk, tk) {
      const ak = Math.hypot(...Fk.dir);
      if (!Number.isFinite(ak) || 0 === ak) return -1;
      const {
        from: Xk,
        reach: bk,
        solid: wk
      } = Fk, dk = [Fk.dir[0] / ak, Fk.dir[1] / ak, Fk.dir[2] / ak], sk = null === wk ? bk : Math.min(bk, function(kk, Fk, Bk) {
        const Rk = pF(kk, Fk, Bk);
        if (Rk !== 1 / 0) return Rk;
        return (Bk[0] + .5 - kk[0]) * Fk[0] + (Bk[1] + .5 - kk[1]) * Fk[1] + (Bk[2] + .5 - kk[2]) * Fk[2]
      }(Xk, dk, wk) + .75);
      let Vk = -1,
        Jk = 1 / 0,
        Ak = 1 / 0;
      for (let ek = 0; ek < kk.length; ek += 4) {
        const Fk = [kk[ek], kk[ek + 1], kk[ek + 2]],
          ak = tk(ek) ? bk : sk;
        let wk = -1,
          yk = pF(Xk, dk, Fk);
        if (yk > ak) {
          const kk = [Fk[0] + .5 - Xk[0], Fk[1] + .5 - Xk[1], Fk[2] + .5 - Xk[2]];
          if (yk = kk[0] * dk[0] + kk[1] * dk[1] + kk[2] * dk[2], yk <= 0 || yk > ak) continue;
          if (wk = Math.hypot(kk[0] - yk * dk[0], kk[1] - yk * dk[1], kk[2] - yk * dk[2]), wk > .7 || !Rk(ek)) continue
        }(wk < Jk || wk === Jk && yk < Ak) && Bk(ek) && (Vk = ek, Jk = wk, Ak = yk)
      }
      return Vk
    }

    function pF(kk, Fk, Bk) {
      let Rk = 0,
        tk = 1 / 0;
      for (let ak = 0; ak < 3; ak++) {
        const Xk = Bk[ak] - kk[ak];
        if (0 === Fk[ak]) {
          if (Xk > 0 || Xk + 1 < 0) return 1 / 0;
          continue
        }
        const bk = Xk / Fk[ak],
          wk = (Xk + 1) / Fk[ak];
        Rk = Math.max(Rk, Math.min(bk, wk)), tk = Math.min(tk, Math.max(bk, wk))
      }
      return Rk <= tk ? Rk : 1 / 0
    }
    var KF = Bk(37728),
      xF = Bk(38157);
    const jF = [1, 1, 1];
    class lF {
      constructor(kk) {
        this.api = kk, this.meshes = null, this.shown = null
      }
      show(kk) {
        if (!(0, hF.c)(kk, this.shown))
          if (this.shown = null === kk ? null : [kk[0], kk[1], kk[2]], null !== this.meshes)
            for (const Fk of this.meshes) this.api.setGameMesh(Fk, null === kk ? {
              visible: !1
            } : {
              anchor: kk,
              visible: !0
            });
          else if (null !== kk) {
          const Fk = [KF.i, KF.i, KF.i, 0, 0, 0];
          this.meshes = [this.build([Fk], KF.k, kk), this.build((0, KF.e)(), KF.r, kk)]
        }
      }
      dispose() {
        for (const Fk of null !== (kk = this.meshes) && void 0 !== kk ? kk : []) {
          var kk;
          this.api.disposeGameMesh(Fk)
        }
        this.meshes = null, this.shown = null
      }
      build(kk, Fk, Bk) {
        const Rk = [],
          tk = [];
        for (const [ak, Xk, bk, wk, dk, sk] of kk)(0, xF.g)(Rk, tk, [wk + .5, dk + .5, sk + .5], [ak, Xk, bk]);
        return this.api.createGameMesh({
          positions: Rk,
          indices: tk
        }, {
          rgb: jF,
          alpha: Fk,
          onTop: !0
        }, Bk)
      }
    }
    class nF {
      constructor(kk) {
        this.api = kk, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(kk) {
        const Fk = qF.h.Ze;
        this.chunks = [];
        for (let Bk = 0; Bk < kk.length; Bk += 3) {
          const Rk = Math.floor(kk[Bk] / Fk),
            tk = Math.floor(kk[Bk + 1] / Fk),
            ak = Math.floor(kk[Bk + 2] / Fk);
          this.watches(Rk, tk, ak) || this.chunks.push(Rk, tk, ak)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const kk = performance.now();
        if (kk - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = kk;
        let Fk = !1;
        for (let Bk = 0; Bk < this.chunks.length; Bk += 3) {
          const kk = this.api.getChunkVersion(this.chunks[Bk], this.chunks[Bk + 1], this.chunks[Bk + 2]);
          this.versions[Bk / 3] !== kk && (this.versions[Bk / 3] = kk, Fk = !0)
        }
        return Fk
      }
      watches(kk, Fk, Bk) {
        for (let Rk = 0; Rk < this.chunks.length; Rk += 3)
          if (this.chunks[Rk] === kk && this.chunks[Rk + 1] === Fk && this.chunks[Rk + 2] === Bk) return !0;
        return !1
      }
    }
    const IF = .35,
      QF = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      kB = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      FB = [.95, .2, .15];
    class BB {
      constructor() {
        this.groups = []
      }
      add(kk, Fk, Bk, Rk, tk) {
        let ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : GF;
        for (const Xk of this.groups)
          if (aB(Xk, Rk, tk)) return Xk.cells.push(kk, Fk, Bk), void Xk.boxes.push(ak);
        this.groups.push({
          rgb: Rk,
          look: tk,
          cells: [kk, Fk, Bk],
          boxes: [ak]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class RB {
      constructor(kk) {
        this.api = kk, this.shown = []
      }
      show(kk) {
        const Fk = [];
        for (const Bk of kk) {
          const kk = this.shown.findIndex((kk => {
            let {
              group: Fk
            } = kk;
            return aB(Fk, Bk.rgb, Bk.look) && XB(Fk, Bk)
          })); - 1 === kk ? Fk.push(this.build(Bk)) : (Fk.push(this.shown[kk]), this.shown.splice(kk, 1))
        }
        this.dispose(), this.shown = Fk
      }
      dispose() {
        for (const {
            meshes: kk
          }
          of this.shown)
          for (const Fk of kk) this.api.disposeGameMesh(Fk);
        this.shown = []
      }
      build(kk) {
        const {
          rgb: Fk,
          look: Bk,
          boxes: Rk
        } = kk, tk = [Fk[0] + (1 - Fk[0]) * IF, Fk[1] + (1 - Fk[1]) * IF, Fk[2] + (1 - Fk[2]) * IF], ak = [this.buildMesh(kk.cells, Fk, Bk.alpha, ((kk, Fk, tk, ak) => {
          tB(kk, Fk, tk, Rk[ak], Bk.size, !1)
        })), this.buildMesh(kk.cells, tk, Bk.alpha, ((kk, Fk, tk, ak) => {
          tB(kk, Fk, tk, Rk[ak], Bk.size, !0)
        }))];
        return Bk.crossed && ak.push(this.buildMesh(kk.cells, Fk, .9, ((kk, Fk, Rk) => {
          (0, xF.k)(kk, Fk, Rk, Bk.size + .01, .12)
        }))), {
          group: kk,
          meshes: ak
        }
      }
      buildMesh(kk, Fk, Bk, Rk) {
        const tk = [kk[0], kk[1], kk[2]],
          ak = [],
          Xk = [];
        for (let bk = 0; bk < kk.length; bk += 3) Rk(ak, Xk, [kk[bk] - tk[0] + .5, kk[bk + 1] - tk[1] + .5, kk[bk + 2] - tk[2] + .5], bk / 3);
        return this.api.createGameMesh({
          positions: ak,
          indices: Xk
        }, {
          rgb: [Fk[0], Fk[1], Fk[2]],
          alpha: Bk
        }, tk)
      }
    }

    function tB(kk, Fk, Bk, Rk, tk, ak) {
      for (let Xk = 0; Xk < Rk.length; Xk += 6) {
        const bk = [0, 0, 0],
          wk = [0, 0, 0];
        for (let kk = 0; kk < 3; kk++) bk[kk] = Bk[kk] + ((Rk[Xk + kk] + Rk[Xk + kk + 3]) / 2 - .5) * tk, wk[kk] = (Rk[Xk + kk + 3] - Rk[Xk + kk]) * tk;
        (0, xF.e)(kk, Fk, bk, wk, ak)
      }
    }

    function aB(kk, Fk, Bk) {
      return kk.rgb[0] === Fk[0] && kk.rgb[1] === Fk[1] && kk.rgb[2] === Fk[2] && kk.look === Bk
    }

    function XB(kk, Fk) {
      if (kk.cells.length !== Fk.cells.length) return !1;
      for (let Bk = 0; Bk < kk.cells.length; Bk++)
        if (kk.cells[Bk] !== Fk.cells[Bk]) return !1;
      return kk.boxes.every(((kk, Bk) => kk === Fk.boxes[Bk]))
    }

    function bB(kk, Fk) {
      return kk.getClientOption(Fk, "blockReach") + 1
    }
    class wB {
      constructor(kk, Fk, Bk) {
        this.api = kk, this.localPlayerId = Fk, this.pickNext = Bk, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(kk) {
        const [Fk, , Bk] = kk.cameraDirection, Rk = Math.hypot(Fk, Bk);
        Rk > .001 && (this.heading = [Fk / Rk, Bk / Rk])
      }
      tapped(kk, Fk, Bk) {
        const Rk = bB(this.api, this.localPlayerId),
          {
            origin: tk,
            direction: ak
          } = this.api.getActionRay(),
          Xk = [...tk],
          bk = [
            [Xk, [Xk[0] + ak[0] * Rk, Xk[1] + ak[1] * Rk, Xk[2] + ak[2] * Rk]]
          ];
        null !== kk && bk.push([Xk, (0, hF.b)(kk)]), this.tap = {
          lines: bk,
          next: Fk,
          ms: Bk
        }
      }
      filled(kk, Fk) {
        this.tap = null, this.turnFrom(kk, Fk), this.retry(Fk)
      }
      arrived(kk, Fk) {
        const {
          tap: Bk
        } = this;
        if (null === Bk || Fk - Bk.ms > 1500) return null;
        const Rk = (0, hF.b)(kk);
        return (0, hF.c)(Bk.next, kk) || Bk.lines.some((kk => {
          let [Fk, Bk] = kk;
          return function(kk, Fk, Bk) {
            const Rk = [Bk[0] - Fk[0], Bk[1] - Fk[1], Bk[2] - Fk[2]],
              tk = [kk[0] - Fk[0], kk[1] - Fk[1], kk[2] - Fk[2]],
              ak = Rk[0] ** 2 + Rk[1] ** 2 + Rk[2] ** 2,
              Xk = 0 === ak ? 0 : Math.min(1, Math.max(0, (tk[0] * Rk[0] + tk[1] * Rk[1] + tk[2] * Rk[2]) / ak));
            return Math.hypot(tk[0] - Rk[0] * Xk, tk[1] - Rk[1] * Xk, tk[2] - Rk[2] * Xk)
          }(Rk, Fk, Bk) <= .9
        })) ? (this.tap = null, this.turnFrom(kk, Fk), Bk.ms) : null
      }
      turnFrom(kk, Fk) {
        this.pending = {
          from: kk,
          ms: Fk,
          turnMs: Math.max(50, Math.min(250, Fk - this.lastFillMs))
        }, this.lastFillMs = Fk
      }
      retry(kk) {
        const {
          pending: Fk
        } = this;
        if (null === Fk) return;
        if (kk - Fk.ms > 1500) return void(this.pending = null);
        const Bk = this.pickNext((0, hF.b)(Fk.from), (kk => (0, hF.c)(kk, Fk.from)));
        if (null === Bk) return;
        this.pending = null;
        const {
          turning: Rk
        } = this;
        if (null !== Rk && kk < Rk.endMs && (0, hF.c)(Rk.to, Bk)) return;
        const tk = this.api.getActionRay().origin,
          ak = [Bk[0] + .5 - tk[0], Bk[1] + .5 - tk[1], Bk[2] + .5 - tk[2]],
          Xk = Math.hypot(ak[0], ak[2]);
        if (Xk < .3) {
          const kk = Math.max(Xk, .001);
          ak[0] = this.heading[0] * kk, ak[2] = this.heading[1] * kk
        }
        this.api.turnCamera(ak, Fk.turnMs), this.turning = {
          to: Bk,
          endMs: kk + Fk.turnMs
        }
      }
    }
    class dB {
      constructor(kk, Fk, Bk) {
        this.api = kk, this.localPlayerId = Fk, this.juice = Bk, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], this.lastFilled = null, this.lastSeenFilled = null, this.playerCells = [], this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = null, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new nF(kk), this.meshes = new RB(kk), this.outline = new lF(kk), this.turn = new wB(kk, Fk, ((kk, Fk) => this.pickNext(kk, Fk)))
      }
      he(kk) {
        const Fk = "active" === kk[0] ? `${kk[1]}|${kk[3]}|${kk[4]}|${kk[5]}|${kk[6]}` : "";
        if ("active" !== kk[0]) "built" === kk[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , Bk, Rk, tk, ak] = kk;
          Fk !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = Bk) : Bk === this.layerY ? this.burstUnlisted(Rk) : Bk > this.layerY && this.finishLayer(Bk), this.layerY = Bk, this.layerCells.has(Bk) || this.layerCells.set(Bk, Rk.filter(VB)), this.ghostCells = Rk, this.palette = tk, this.occupiedCells = ak
        }
        Fk !== this.blueprint && (this.blueprint = Fk, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((kk => this.api.blockNameToBlockId(kk))), this.chunkWatch.watch([...this.ghostCells.filter(VB), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(kk) {
        this.burstUnlisted([]), kk > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = kk)
      }
      yJ() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const kk = performance.now();
        let Fk = !1;
        for (const [tk, ak] of this.foreseen) {
          var Bk;
          if (kk - ak > 1e3) this.foreseen.delete(tk), Fk = !0, (null === (Bk = this.lastFilled) || void 0 === Bk ? void 0 : Bk.join()) === tk && (this.lastFilled = this.lastSeenFilled)
        }
        const Rk = sB(this.api.getPositionView(this.localPlayerId));
        (Fk || Rk.some(((kk, Fk) => kk !== this.playerCells[Fk]))) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(kk) {
        const Fk = new Set;
        for (let tk = 0; tk < kk.length; tk += 4) Fk.add(`${kk[tk]},${kk[tk+1]},${kk[tk+2]}`);
        const Bk = [],
          {
            ghostCells: Rk
          } = this;
        for (let tk = 0; tk < Rk.length; tk += 4) {
          const kk = `${Rk[tk]},${Rk[tk+1]},${Rk[tk+2]}`;
          !Fk.has(kk) && this.open.delete(kk) && Bk.push(this.filledCell(tk))
        }
        this.burst(Bk)
      }
      refresh() {
        const {
          ghostCells: kk,
          palette: Fk,
          occupiedCells: Bk
        } = this, Rk = new BB, tk = new Set, ak = [], Xk = [];
        for (let bk = 0; bk < kk.length; bk += 4) {
          const [Bk, wk, dk, sk] = [kk[bk], kk[bk + 1], kk[bk + 2], kk[bk + 3]], Vk = this.api.getBlockId(Bk, wk, dk), Jk = `${Bk},${wk},${dk}`, Ak = HF(this.blockIds[sk], Vk);
          !Ak && uF(Vk) ? Rk.add(Bk, wk, dk, gF(Fk[sk]), QF, PF(Fk[sk])) : Ak ? this.open.has(Jk) && ak.push(this.filledCell(bk)) : Rk.add(Bk, wk, dk, FB, kB), !Ak && this.api.isBlockInLoadedChunk(Bk, wk, dk) && (tk.add(Jk), Xk.push(Bk, wk, dk, uF(Vk) ? 0 : 1))
        }
        this.open = tk, this.nextCells = Xk;
        for (let bk = 0; bk < Bk.length; bk += 3) {
          const [kk, Fk, tk] = [Bk[bk], Bk[bk + 1], Bk[bk + 2]];
          uF(this.api.getBlockId(kk, Fk, tk)) || Rk.add(kk, Fk, tk, FB, kB)
        }
        this.meshes.show(Rk.toArray()), this.burst(ak), this.showNext(), this.turn.retry(performance.now())
      }
      burst(kk) {
        const Fk = performance.now(),
          Bk = [];
        for (const [tk, ak, Xk] of kk) {
          const kk = [tk, ak, Xk];
          this.lastSeenFilled = kk, this.foreseen.delete(kk.join()) || Bk.push(kk)
        }
        const Rk = this.isHolding(Fk);
        for (const tk of Bk) {
          if (this.lastFilled = tk, Rk && this.pressFilled) {
            this.turn.filled(tk, Fk);
            continue
          }
          const kk = this.turn.arrived(tk, Fk);
          if (null !== kk) {
            this.pressFilled = Rk;
            for (const [Fk, Bk] of this.foreseen) Bk <= kk && this.foreseen.delete(Fk)
          }
        }
        this.juice.filled(kk)
      }
      showNext() {
        var kk;
        const Fk = this.api.getPositionView(this.localPlayerId);
        this.playerCells.splice(0, 1 / 0, ...sB(Fk));
        const Bk = this.lastFilled;
        this.nextCell = this.pickNext(null === Bk ? [Fk[0], Fk[1] + 1, Fk[2]] : (0, hF.b)(Bk), (() => !1)), this.outline.show(null !== (kk = this.aimed) && void 0 !== kk ? kk : this.nextCell)
      }
      pickNext(kk, Fk) {
        const Bk = this.api.getPositionView(this.localPlayerId),
          Rk = [Bk[0], Bk[1] + qF.h.FW * qF.h.playerEyeToHeightRatio, Bk[2]],
          tk = bB(this.api, this.localPlayerId),
          {
            nextCells: ak
          } = this,
          Xk = kk => [ak[kk], ak[kk + 1], ak[kk + 2]],
          bk = function(kk, Fk, Bk, Rk, tk, ak) {
            let Xk = -1,
              bk = -1,
              wk = 1 / 0;
            for (let dk = 0; dk < kk.length; dk += Fk) {
              const Fk = (ak(dk) ? 2 : 0) + (Rk(dk) ? 1 : 0);
              if (Fk < bk || tk(dk)) continue;
              const sk = (kk[dk] + .5 - Bk[0]) ** 2 + (kk[dk + 1] + .5 - Bk[1]) ** 2 + (kk[dk + 2] + .5 - Bk[2]) ** 2;
              (Fk > bk || sk < wk) && (Xk = dk, bk = Fk, wk = sk)
            }
            return Xk
          }(ak, 4, kk, (kk => 1 === ak[kk + 3]), (kk => {
            const Rk = Xk(kk);
            return CF(Rk, Bk) || this.foreseen.has(Rk.join()) || Fk(Rk)
          }), (kk => function(kk, Fk, Bk) {
            return (Fk[0] + .5 - kk[0]) ** 2 + (Fk[1] + .5 - kk[1]) ** 2 + (Fk[2] + .5 - kk[2]) ** 2 <= Bk ** 2
          }(Rk, Xk(kk), tk)));
        return -1 === bk ? null : Xk(bk)
      }
      afterRender(kk) {
        var Fk;
        this.turn.look(kk);
        const Bk = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === Bk ? null : Bk.position), this.outline.show(null !== (Fk = this.aimed) && void 0 !== Fk ? Fk : this.nextCell)
      }
      isHolding(kk) {
        return null !== this.altMs && kk - this.altMs <= 500
      }
      attemptAltAction(kk) {
        const Fk = performance.now();
        if (this.isHolding(Fk) || (this.pressFilled = !1), this.altMs = Fk, this.pressFilled) return "preventPlacement";
        const Bk = this.findAimed(kk);
        if (null !== Bk) return this.foreseen.set(Bk.join(), Fk), this.lastFilled = Bk, this.aimed = null, this.showNext(), this.turn.filled(Bk, Fk), this.pressFilled = !0, "preventPlacement";
        null !== this.nextCell && this.turn.tapped(kk, this.nextCell, Fk)
      }
      findAimed(kk) {
        return function(kk, Fk, Bk, Rk, tk, ak, Xk) {
          const bk = kk.LFk(Fk),
            wk = null === bk || null === kk.blockNameToBlockId(bk.name, !0) ? null : bk.name,
            dk = kk.getPositionView(Fk),
            {
              origin: sk,
              direction: Vk
            } = kk.getActionRay(),
            Jk = ZF(Rk, {
              from: sk,
              dir: Vk,
              reach: bB(kk, Fk),
              solid: Bk
            }, (Fk => {
              const Bk = [Rk[Fk], Rk[Fk + 1], Rk[Fk + 2]];
              return !HF(tk[Rk[Fk + 3]], kk.getBlockId(...Bk)) && !Xk.has(Bk.join()) && kk.isBlockInLoadedChunk(...Bk) && !CF(Bk, dk)
            }), (kk => null === wk || wk === MF(tk[Rk[kk + 3]])), (kk => null !== ak && Rk[kk] === ak[0] && Rk[kk + 1] === ak[1] && Rk[kk + 2] === ak[2]));
          return -1 === Jk ? null : [Rk[Jk], Rk[Jk + 1], Rk[Jk + 2]]
        }(this.api, this.localPlayerId, kk, this.ghostCells, this.blockIds, this.nextCell, this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(kk) {
        const {
          ghostCells: Fk
        } = this, [Bk, Rk, tk] = gF(this.palette[Fk[kk + 3]]);
        return [Fk[kk], Fk[kk + 1], Fk[kk + 2], Bk, Rk, tk]
      }
    }

    function sB(kk) {
      let [Fk, Bk, Rk] = kk;
      const tk = qF.h.Qm / 2;
      return [Math.floor(Fk), Math.floor(Bk), Math.floor(Rk), Math.floor(Fk - tk), Math.floor(Fk + tk), Math.floor(Bk + qF.h.FW), Math.floor(Rk - tk), Math.floor(Rk + tk)]
    }

    function VB(kk, Fk) {
      return Fk % 4 !== 3
    }

    function JB(kk, Fk, Bk, Rk, tk) {
      if (!kk.isBlockInLoadedChunk(Fk, Rk - 6, Bk) || !kk.isBlockInLoadedChunk(Fk, Rk + 6 + tk, Bk) || !kk.canModifyBlockAt(Fk, Rk, Bk)) return NaN;
      let ak = Rk - 1;
      if (0 !== kk.getBlockId(Fk, ak, Bk)) {
        for (; ak < Rk + 6 && 0 !== kk.getBlockId(Fk, ak + 1, Bk);) ak++;
        return ak
      }
      for (; ak > Rk - 6;)
        if (ak--, 0 !== kk.getBlockId(Fk, ak, Bk)) return ak;
      return NaN
    }

    function AB(kk, Fk, Bk, Rk, tk) {
      let ak = 0;
      for (let Xk = Rk + 1; Xk <= Rk + tk; Xk++) 0 !== kk.getBlockId(Fk, Xk, Bk) && ak++;
      return ak
    }

    function eB(kk) {
      const Fk = new Map;
      for (const Xk of kk) {
        var Bk;
        if (Number.isNaN(Xk)) return null;
        Fk.set(Xk, (null !== (Bk = Fk.get(Xk)) && void 0 !== Bk ? Bk : 0) + 1)
      }
      let Rk = NaN,
        tk = 0;
      for (const [Xk, bk] of Fk)(bk > tk || bk === tk && Xk < Rk) && (Rk = Xk, tk = bk);
      let ak = 0;
      for (const Xk of kk) ak += Math.abs(Xk - Rk);
      return ak
    }

    function yB(kk, Fk, Bk, Rk) {
      const {
        eye: tk,
        forward: ak,
        tanHalfFovX: Xk,
        tanHalfFovY: bk
      } = kk, [wk, dk] = function(kk) {
        let [Fk, Bk, Rk] = kk;
        const tk = Math.hypot(Fk, Rk),
          [ak, Xk] = [Rk / tk, -Fk / tk];
        return [
          [ak, 0, Xk],
          [Bk * Xk, Rk * ak - Fk * Xk, -Bk * ak]
        ]
      }(ak), [sk, Vk] = [Fk * Xk, Bk * bk], Jk = ak[0] + sk * wk[0] + Vk * dk[0], Ak = ak[1] + Vk * dk[1], ek = ak[2] + sk * wk[2] + Vk * dk[2], yk = (Rk - tk[1]) / Ak;
      return yk > 0 && yk < 1 / 0 ? [tk[0] + yk * Jk, tk[2] + yk * ek] : null
    }
    const fB = "plotsBlueprintPlacementChanged",
      mB = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class WB {
      constructor(kk, Fk) {
        this.api = kk, this.localPlayerId = Fk, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = kk => {
          var Fk, Bk, Rk, ak;
          const Xk = null !== (Fk = null === (Bk = this.placing) || void 0 === Bk ? void 0 : Bk.rotation) && void 0 !== Fk ? Fk : 0,
            {
              size: bk
            } = Ck(kk, Xk),
            wk = this.api.rW(this.localPlayerId),
            [dk, sk] = null !== (Rk = null !== (ak = function(kk, Fk, Bk) {
              const [Rk, tk, ak] = Fk, [Xk, bk, wk] = [Math.floor(Bk[0]), Math.floor(Bk[1]), Math.floor(Bk[2])], dk = 6 + Math.max(Rk, ak) / 2, [sk, Vk] = [Math.ceil(dk + Rk / 2), Math.ceil(dk + ak / 2)], [Jk, Ak] = [Xk - sk, wk - Vk], [ek, yk] = [2 * sk + 1, 2 * Vk + 1], fk = new Float64Array(ek * yk), mk = new Uint16Array(ek * yk);
              for (let Yk = 0; Yk < ek; Yk++)
                for (let Fk = 0; Fk < yk; Fk++) {
                  const Bk = JB(kk, Jk + Yk, Ak + Fk, bk, tk);
                  fk[Yk * yk + Fk] = Bk, Number.isNaN(Bk) || (mk[Yk * yk + Fk] = AB(kk, Jk + Yk, Ak + Fk, Bk, tk))
                }
              const Wk = [];
              let vk = null,
                ik = 1 / 0;
              for (let Yk = 0; Yk + Rk <= ek; Yk++)
                for (let kk = 0; kk + ak <= yk; kk++) {
                  const [Fk, tk] = [Jk + Yk, Ak + kk], bk = Math.hypot(Fk + Rk / 2 - Bk[0], tk + ak / 2 - Bk[2]);
                  if (bk > dk || Xk >= Fk - 2 && Xk < Fk + Rk + 2 && wk >= tk - 2 && wk < tk + ak + 2) continue;
                  Wk.length = 0;
                  let sk = 0;
                  for (let Bk = 0; Bk < Rk; Bk++)
                    for (let Fk = 0; Fk < ak; Fk++) Wk.push(fk[(Yk + Bk) * yk + kk + Fk]), sk += mk[(Yk + Bk) * yk + kk + Fk];
                  const Vk = eB(Wk);
                  if (null === Vk) continue;
                  const ek = bk + 3 * (Vk + sk);
                  ek < ik && (ik = ek, vk = [Fk, tk])
                }
              return vk
            }(this.api, bk, wk)) && void 0 !== ak ? ak : this.cornerOnTarget(bk)) && void 0 !== Rk ? Rk : [Math.floor(wk[0]) + 2, Math.floor(wk[2])];
          this.placing = {
            id: kk,
            rotation: Xk,
            corner: [dk, this.playerLevel(), sk],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null
          }, this.update(), this.api.sendCommand(`${tk} preview`)
        }, this.rotate = () => {
          const {
            id: kk,
            rotation: Fk,
            corner: Bk
          } = this.placing, tk = Rk[(Rk.indexOf(Fk) + 1) % Rk.length], [ak, , Xk] = Ck(kk, Fk).size, [bk, , wk] = Ck(kk, tk).size;
          this.moveTo(Bk[0] + Math.floor(ak / 2) - Math.floor(bk / 2), Bk[2] + Math.floor(Xk / 2) - Math.floor(wk / 2), tk)
        }, this.hoverAt = (kk, Fk) => {
          this.placing.hover = [kk, Fk], this.moveCentreTo(this.camera, kk, Fk)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (kk, Fk) => {
          const Bk = this.placing,
            {
              eye: Rk,
              forward: tk,
              tanHalfFovX: ak,
              tanHalfFovY: Xk
            } = this.camera,
            bk = {
              eye: [Rk[0], Rk[1], Rk[2]],
              forward: [tk[0], tk[1], tk[2]],
              tanHalfFovX: ak,
              tanHalfFovY: Xk
            },
            wk = Bk.corner[1],
            dk = yB(bk, kk, Fk, wk);
          Bk.hover = null, Bk.drag = dk && {
            view: bk,
            ground: dk,
            corner: [Bk.corner[0], Bk.corner[2]],
            level: wk
          }
        }, this.dragTo = (kk, Fk) => {
          const Bk = this.placing.drag,
            Rk = Bk && yB(Bk.view, kk, Fk, Bk.level);
          null !== Bk && null !== Rk && this.moveTo(Bk.corner[0] + Math.round(Rk[0] - Bk.ground[0]), Bk.corner[1] + Math.round(Rk[1] - Bk.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const kk = this.view;
          kk.waiting || (kk.blocked ? this.Hf({
            ...kk,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const kk = this.placing,
            {
              id: Fk,
              rotation: Bk,
              corner: Rk
            } = kk;
          this.api.sendCommand(`${tk} place ${Fk} ${Rk.join(" ")} ${Bk}`), kk.sent = {
            atMs: performance.now(),
            corner: [...Rk],
            rotation: Bk,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${tk} preview off`))
        }, this.chunkWatch = new nF(kk), this.meshes = new RB(kk)
      }
      getView() {
        return this.view
      }
      yJ() {
        const kk = this.placing;
        null !== kk && (null !== kk.sent && !kk.sent.timedOut && performance.now() - kk.sent.atMs > 3e3 ? (kk.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(kk) || this.chunkWatch.changed()) && this.update())
      }
      afterRender(kk) {
        const Fk = this.placing;
        null !== Fk && (! function(kk, Fk) {
          for (let Bk = 0; Bk < 3; Bk++) Fk.eye[Bk] = kk.cameraPosition[Bk], Fk.forward[Bk] = kk.cameraDirection[Bk];
          Fk.tanHalfFovX = kk.tanHalfFovX, Fk.tanHalfFovY = kk.tanHalfFovY
        }(kk, this.camera), null !== Fk.hover && this.moveCentreTo(this.camera, Fk.hover[0], Fk.hover[1]))
      }
      he(kk) {
        const Fk = this.placing;
        if (null === Fk || null === Fk.sent || "active" !== kk[0]) return;
        const {
          sent: Bk
        } = Fk, [, Rk, tk, ak, Xk, bk, wk] = kk;
        tk && Rk === Fk.id && wk === Bk.rotation && ak === Bk.corner[0] && Xk === Bk.corner[1] && bk === Bk.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(kk) {
        let [Fk, , Bk] = kk;
        const Rk = this.api.getTargetedBlock();
        if (null === Rk) return null;
        const [tk, , ak] = Rk.position;
        return [tk - Math.floor(Fk / 2), ak - Math.floor(Bk / 2)]
      }
      playerLevel() {
        var kk;
        const [Fk, Bk, Rk] = this.api.rW(this.localPlayerId);
        if (null !== (kk = this.api.getLocalPlayerMovement()) && void 0 !== kk && kk.onGround) return Math.ceil(Bk - .01);
        const [tk, ak, Xk] = [Math.floor(Fk), Math.floor(Bk), Math.floor(Rk)];
        for (let bk = ak; bk >= ak - 2; bk--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(tk, bk, Xk))) return bk + 1;
        return ak
      }
      followPlayerLevel(kk) {
        if (vB(kk)) return !1;
        const Fk = this.playerLevel();
        return Fk !== kk.corner[1] && (kk.corner[1] = Fk, !0)
      }
      moveCentreTo(kk, Fk, Bk) {
        const Rk = this.placing,
          tk = yB(kk, Fk, Bk, Rk.corner[1]);
        if (null !== tk) {
          const [kk, , Fk] = Ck(Rk.id, Rk.rotation).size;
          this.moveTo(Math.round(tk[0] - kk / 2), Math.round(tk[1] - Fk / 2))
        }
      }
      moveTo(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const Rk = this.placing;
        if (vB(Rk)) return;
        const [tk, ak, Xk] = Rk.corner;
        if (this.centreOnPlot(tk, Xk) && !this.centreOnPlot(kk, Fk, Bk))
          if (this.centreOnPlot(kk, Xk, Bk)) Fk = Xk;
          else {
            if (!this.centreOnPlot(tk, Fk, Bk)) return;
            kk = tk
          } kk === tk && Fk === Xk && Bk === Rk.rotation || (Rk.rotation = Bk, Rk.corner = [kk, ak, Fk], this.update())
      }
      centreOnPlot(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: Rk,
          corner: tk
        } = this.placing, [ak, , Xk] = Ck(Rk, Bk).size;
        return this.api.canModifyBlockAt(kk + Math.floor(ak / 2), tk[1], Fk + Math.floor(Xk / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.Hf(null)
      }
      update() {
        const {
          id: kk,
          rotation: Fk,
          corner: Bk,
          refusals: Rk
        } = this.placing, tk = new BB, ak = [];
        let Xk = !1,
          bk = 0;
        for (const {
            offset: sk,
            block: Vk
          }
          of Ck(kk, Fk).cells) {
          const [kk, Fk, Rk] = [Bk[0] + sk[0], Bk[1] + sk[1], Bk[2] + sk[2]];
          ak.push(kk, Fk, Rk);
          const wk = !this.api.canModifyBlockAt(kk, Fk, Rk),
            dk = this.api.getBlockId(kk, Fk, Rk),
            Jk = !uF(dk) && !HF(this.api.blockNameToBlockId(Vk), dk);
          Xk ||= wk, bk += Jk ? 1 : 0, wk || Jk ? tk.add(kk, Fk, Rk, FB, kB) : tk.add(kk, Fk, Rk, gF(Vk), mB, PF(Vk))
        }
        this.chunkWatch.watch(ak), this.meshes.show(tk.toArray());
        const wk = this.view,
          dk = vB(this.placing);
        (null === wk || void 0 === wk ? void 0 : wk.id) === kk && wk.blocked === Xk && wk.toClear === bk && wk.waiting === dk && wk.refusals === Rk || this.Hf({
          id: kk,
          blocked: Xk,
          toClear: bk,
          waiting: dk,
          refusals: Rk
        })
      }
      Hf(kk) {
        this.view = kk, sk.o.Hf(fB, kk, !0)
      }
    }

    function vB(kk) {
      let {
        sent: Fk
      } = kk;
      return null !== Fk && !Fk.timedOut
    }
    var iB = Bk(4002),
      YB = Bk(38766);

    function oB(kk, Fk, Bk) {
      const Rk = [255 * kk, 255 * Fk, 255 * Bk],
        [tk, ak, Xk] = Rk.map((kk => kk + .4 * (255 - kk)));
      return {
        texture: "square_particle",
        KV: 48,
        minLifeTime: .3 / YB.b,
        maxLifeTime: .55 / YB.b,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * YB.b * YB.b, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...Rk, 1],
          maxColor: [tk, ak, Xk, 1]
        }, {
          timeFraction: 1,
          minColor: [...Rk, 0],
          maxColor: [tk, ak, Xk, 0]
        }],
        blendMode: iB.d.Standard
      }
    }
    const LB = {
      texture: "glint",
      mipmaps: !1,
      KV: 96,
      minLifeTime: .5 / YB.b,
      maxLifeTime: .9 / YB.b,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * YB.b * YB.b, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: iB.d.OneOne
    };
    class OB {
      constructor(kk, Fk) {
        this.api = kk, this.localPlayerId = Fk, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(kk) {
        if (this.api.particlesEnabled())
          for (const [Fk, Bk, Rk, tk, ak, Xk] of kk.slice(0, 3)) {
            const kk = `${tk},${ak},${Xk}`;
            let bk = this.chips.get(kk);
            void 0 === bk && (bk = this.api.createParticles(oB(tk, ak, Xk), {
              pos: [Fk + .5, Bk + .5, Rk + .5]
            }), this.chips.set(kk, bk));
            for (let Fk = 0; Fk < 8; Fk++) this.setPoint(Fk, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            bk.emitPoints([Fk + .5, Bk + .5, Rk + .5], this.points, 8)
          }
      }
      layerDone(kk) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const Fk = kk.length / 3;
        if (0 === Fk || !this.api.particlesEnabled()) return;
        const Bk = Math.min(Fk, 48),
          [Rk, tk, ak] = [kk[0] + .5, kk[1] + 1, kk[2] + .5];
        let Xk = 0;
        for (let bk = 0; bk < Bk; bk++) {
          const wk = 3 * Math.floor(bk * Fk / Bk);
          for (let Fk = 0; Fk < 2; Fk++) this.setPoint(Xk++, kk[wk] + Math.random() - Rk, kk[wk + 1] + 1 - tk, kk[wk + 2] + Math.random() - ak, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(LB, {
          pos: [Rk, tk, ak]
        }), this.sparkles.emitPoints([Rk, tk, ak], this.points, Xk)
      }
      dispose() {
        var kk;
        for (const Fk of this.chips.values()) Fk.stop();
        this.chips.clear(), null === (kk = this.sparkles) || void 0 === kk || kk.stop(), this.sparkles = null
      }
      setPoint(kk, Fk, Bk, Rk, tk) {
        const ak = 4 * kk;
        this.points[ak] = Fk, this.points[ak + 1] = Bk, this.points[ak + 2] = Rk, this.points[ak + 3] = tk
      }
    }
    var EB = Bk(1881);
    const SB = "SpecialAction1",
      NB = "KeyY",
      HB = "KeyX";

    function uB(kk) {
      let {
        placement: Fk
      } = kk;
      const Bk = (0, Hk.g)(fB, Fk.getView()),
        {
          t: Rk
        } = (0, Mk.x)(),
        {
          isTouchScreen: tk
        } = (0, bk.h)(["isTouchScreen"]),
        ak = null !== Bk,
        Xk = ak && !Bk.blocked && !Bk.waiting;
      if ((0, Nk.b)((kk => ak && !kk.repeat && !(0, dk.isTypingInInput)() && !(0, wk.s)() && !tk), (kk => {
          const Bk = function(kk, Fk, Bk) {
            if (kk === HB) return Fk.stop;
            if (kk === NB) return Bk ? Fk.build : gB;
            return EB.s[SB].includes(kk) ? Fk.rotate : null
          }(kk.code, Fk, Xk);
          null !== Bk && (kk.stopPropagation(), Bk())
        })), !ak) return null;
      let sk = tk ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return Bk.blocked ? sk = "plotsGame:placementOffPlot" : Bk.toClear > 0 && (sk = "plotsGame:placementClear"), (0, pk.jsx)(bF.g, {
        placement: "bottom",
        children: (0, pk.jsxs)("div", {
          className: "PlotsPlacementCard",
          children: [(0, pk.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: Rk(ek(Bk.id).displayName.translationKey)
          }), (0, pk.jsx)("div", {
            className: Lk()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: Bk.refusals > 0
            }),
            children: Rk(sk)
          }, Bk.refusals), (0, pk.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, pk.jsxs)(Ek.g, {
              onClick: Fk.rotate,
              children: [(0, pk.jsx)(MB, {
                noaAction: SB
              }), Rk("plotsGame:placementRotate")]
            }), (0, pk.jsxs)(Ek.J, {
              onClick: Fk.stop,
              children: [(0, pk.jsx)(MB, {
                keyCode: HB
              }), Rk("general:cancel")]
            }), (0, pk.jsxs)(Ek.o, {
              disabled: !Xk,
              onClick: Fk.build,
              children: [(0, pk.jsx)(MB, {
                keyCode: NB
              }), Rk("plotsGame:placementBuild")]
            })]
          })]
        })
      })
    }

    function MB(kk) {
      return (0, pk.jsx)(dF.c, {
        className: "PlotsPlacementKey",
        ...kk
      })
    }

    function gB() {}
    var UB = Bk(4283);
    class cB {
      constructor(kk) {
        this.placement = kk, this.press = null
      }
      down(kk) {
        if (null !== this.press) return !1;
        const {
          id: Fk,
          mouse: Bk,
          x: Rk,
          y: tk,
          atMs: ak
        } = kk;
        return this.press = {
          id: Fk,
          mouse: Bk,
          x: Rk,
          y: tk,
          atMs: ak,
          moved: !1
        }, Bk || this.placement.beginDrag(kk.ndcX, kk.ndcY), !0
      }
      move(kk) {
        const Fk = this.press;
        null !== Fk && Fk.id === kk.id && (Fk.moved ||= Math.hypot(kk.x - Fk.x, kk.y - Fk.y) > 8), kk.mouse ? this.placement.hoverAt(kk.ndcX, kk.ndcY) : (null === Fk || void 0 === Fk ? void 0 : Fk.id) === kk.id && this.placement.dragTo(kk.ndcX, kk.ndcY)
      }
      up(kk) {
        const Fk = this.press;
        (null === Fk || void 0 === Fk ? void 0 : Fk.id) === kk.id && (this.move(kk), this.end(), !Fk.moved && (Fk.mouse || kk.atMs - Fk.atMs <= 250) && this.placement.tap())
      }
      cancel(kk) {
        var Fk;
        (null === (Fk = this.press) || void 0 === Fk ? void 0 : Fk.id) === kk && this.end()
      }
      leave(kk) {
        let {
          id: Fk,
          mouse: Bk
        } = kk;
        Bk && this.placement.endHover(), this.cancel(Fk)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }

    function GB(kk) {
      let {
        placement: Fk
      } = kk;
      return null === (0, Hk.g)(fB, Fk.getView()) ? null : (0, pk.jsx)(TB, {
        placement: Fk
      })
    }

    function TB(kk) {
      let {
        placement: Fk
      } = kk;
      (0, UB.d)(!0, !0, "PlotsPlacementLayer");
      const Bk = (0, ak.useMemo)((() => new cB(Fk)), [Fk]);
      return (0, pk.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: kk => {
          "mouse" === kk.pointerType && 0 !== kk.button || !Bk.down(rB(kk)) || kk.currentTarget.setPointerCapture(kk.pointerId)
        },
        onPointerMove: kk => {
          Bk.move(rB(kk))
        },
        onPointerUp: kk => {
          Bk.up(rB(kk))
        },
        onPointerCancel: kk => {
          Bk.cancel(kk.pointerId)
        },
        onLostPointerCapture: kk => {
          Bk.cancel(kk.pointerId)
        },
        onPointerLeave: kk => {
          Bk.leave(rB(kk))
        },
        "aria-hidden": !0
      })
    }

    function rB(kk) {
      const {
        left: Fk,
        top: Bk,
        width: Rk,
        height: tk
      } = kk.currentTarget.getBoundingClientRect();
      return {
        id: kk.pointerId,
        mouse: "mouse" === kk.pointerType,
        x: kk.clientX,
        y: kk.clientY,
        ndcX: (kk.clientX - Fk) / Rk * 2 - 1,
        ndcY: 1 - (kk.clientY - Bk) / tk * 2,
        atMs: kk.timeStamp
      }
    }
    var DB = Bk(2274),
      zB = Bk(36423),
      PB = Bk(1876),
      hB = Bk(1213);
    const qB = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function CB(kk) {
      let {
        hud: Fk
      } = kk;
      const Bk = (0, Hk.g)(VF, Fk.getPlot()),
        [Rk, tk] = (0, ak.useState)(null),
        Xk = (0, zB.q)(Rk);
      if ("none" === Bk[0]) return null;
      const [, bk, wk, dk, sk, Vk] = Bk;
      return (0, pk.jsx)("div", {
        className: Lk()("PlotsPlotBannerContainer", {
          Below: Xk
        }),
        children: (0, pk.jsx)(ZB, {
          plotX: bk,
          plotZ: wk,
          ownerName: dk,
          ownerId: sk,
          relation: Vk,
          plaqueRef: tk
        }, `${bk},${wk}`)
      })
    }

    function ZB(kk) {
      var Fk, Bk;
      let {
        plotX: Rk,
        plotZ: tk,
        ownerName: ak,
        ownerId: Xk,
        relation: bk,
        plaqueRef: wk
      } = kk;
      const {
        t: dk
      } = (0, Mk.x)(), sk = (0, PB.h)("hiddenPlayerNames"), Vk = (0, PB.h)("players"), Jk = null === Xk ? null : null !== (Fk = null === (Bk = Vk.byId[Xk]) || void 0 === Bk ? void 0 : Bk.cosmetics) && void 0 !== Fk ? Fk : null, Ak = dk("plotsGame:plotBannerCoords", {
        x: Rk,
        z: tk
      }), ek = "own" === bk || null !== ak;
      return (0, pk.jsxs)("div", {
        ref: wk,
        className: Lk()("PlotsPlotBanner", {
          Own: "own" === bk,
          Shared: "shared" === bk
        }),
        role: "status",
        children: [(0, pk.jsxs)("span", {
          className: Lk()("PlotsPlotBannerSeal", {
            Face: null !== Jk
          }),
          children: [null !== Jk && (0, pk.jsx)(DB.c, {
            cosmetics: Jk
          }), null === Jk && (0, pk.jsx)(Ok.d, {
            name: qB[bk]
          })]
        }), (0, pk.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, pk.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === bk && dk("plotsGame:plotBannerYours"), "own" !== bk && null !== ak && dk("plotsGame:plotBannerOwner", {
              name: (0, hB.i)(ak, sk)
            }), !ek && Ak]
          }), ek && (0, pk.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [Ak, "shared" === bk && (0, pk.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: dk("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }

    function pB(kk) {
      let {
        progress: Fk,
        goal: Bk
      } = kk;
      const Rk = Math.min(Fk, Bk);
      return (0, pk.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, pk.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": Bk,
          "aria-valuenow": Rk,
          children: (0, pk.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${Rk/Bk})`
            }
          })
        }), (0, pk.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [Rk, "/", Bk]
        })]
      })
    }

    function KB(kk) {
      return {
        translationKey: `plotsGame:${kk}`,
        actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
      }
    }
    const xB = {
      house: {
        icon: "house",
        titleKey: "plotsGame:starterLotHouseTitle",
        desktop: KB("starterLotHouseHint", ["alt-fire"]),
        touch: KB("starterLotHouseHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotHousePlain"
      },
      garden: {
        icon: "sparkle",
        titleKey: "plotsGame:starterLotGarden",
        desktop: KB("starterLotGardenHint", ["alt-fire"]),
        touch: KB("starterLotGardenHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotGardenPlain"
      },
      boulder: {
        icon: "hammer",
        titleKey: "plotsGame:starterLotBoulder",
        desktop: KB("starterLotBreakHint", ["primary-fire"]),
        touch: KB("starterLotBreakHintTouch"),
        plainKey: "plotsGame:starterLotBreakPlain"
      },
      fly: {
        icon: "angles-up",
        titleKey: "plotsGame:starterLotFly",
        desktop: KB("starterLotFlyHint", ["jump"]),
        touch: KB("starterLotFlyHintTouch"),
        plainKey: "plotsGame:starterLotFlyPlain"
      },
      backpack: {
        icon: "backpack",
        titleKey: "plotsGame:starterLotBackpack",
        desktop: KB("starterLotBackpackHint", ["OpenInventory"]),
        touch: KB("starterLotBackpackHintTouch"),
        plainKey: "plotsGame:starterLotBackpackPlain"
      },
      neighbour: {
        icon: "person",
        titleKey: "plotsGame:starterLotNeighbour",
        desktop: KB("starterLotNeighbourHint", ["forward", "left", "backward", "right"]),
        touch: KB("starterLotNeighbourHintTouch"),
        plainKey: "plotsGame:starterLotNeighbourPlain"
      }
    };

    function jB(kk, Fk, Bk) {
      const {
        translationKey: Rk,
        actions: tk
      } = Bk ? Fk.touch : Fk.desktop;
      if (0 === tk.length) return kk(Rk);
      const ak = [];
      for (const Xk of tk) {
        const Rk = (0, EB.r)(Xk, Bk),
          tk = EB.s[Xk][0];
        if (null === Rk && void 0 === tk) return kk(Fk.plainKey);
        ak.push(null === Rk ? (0, EB.n)(tk) : kk(Rk.translationKey))
      }
      return kk(Rk, {
        key: ak.join("")
      })
    }

    function lB(kk) {
      let {
        hud: Fk
      } = kk;
      const Bk = (0, Hk.g)(sF, Fk.getStep()),
        {
          t: Rk
        } = (0, Mk.x)();
      return (0, pk.jsxs)(bF.g, {
        placement: "bottom",
        children: ["step" === Bk[0] && (0, pk.jsx)(nB, {
          step: Bk[1],
          progress: Bk[2],
          goal: Bk[3]
        }, Bk[1]), "celebrate" === Bk[0] && (0, pk.jsx)(IB, {
          className: Lk()("Celebrate", {
            Gold: "house" === Bk[1]
          }),
          icon: "star",
          title: Rk("house" === Bk[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
        }, `celebrate-${Bk[1]}`)]
      })
    }

    function nB(kk) {
      let {
        step: Fk,
        progress: Bk,
        goal: Rk
      } = kk;
      const {
        isTouchScreen: tk
      } = (0, bk.h)(["isTouchScreen"]), {
        t: ak
      } = (0, Mk.x)(), Xk = xB[Fk];
      return (0, pk.jsxs)(IB, {
        icon: Xk.icon,
        title: ak(Xk.titleKey),
        children: [(0, pk.jsx)("div", {
          className: "PlotsStepCardHint SmallTextLight",
          children: jB(ak, Xk, tk)
        }), Rk > 1 && (0, pk.jsx)(pB, {
          progress: Bk,
          goal: Rk
        }), "backpack" === Fk && tk && (0, pk.jsx)(QB, {})]
      })
    }

    function IB(kk) {
      let {
        className: Fk,
        icon: Bk,
        title: Rk,
        children: tk
      } = kk;
      return (0, pk.jsxs)("div", {
        className: Lk()("PlotsStepCard", Fk),
        role: "status",
        children: [(0, pk.jsx)("span", {
          className: "PlotsStepCardIcon",
          children: (0, pk.jsx)(Ok.d, {
            name: Bk
          })
        }), (0, pk.jsxs)("div", {
          className: "PlotsStepCardBody",
          children: [(0, pk.jsx)("div", {
            className: "PlotsStepCardTitle SmallTextBold",
            children: Rk
          }), tk]
        })]
      })
    }

    function QB() {
      return (0, ak.useEffect)((() => (bk.c.set({
        backpackPointerRequested: !0
      }), () => {
        bk.c.set({
          backpackPointerRequested: !1
        })
      })), []), null
    }
    const kR = function(kk, Fk, Bk, Rk) {
      let {
        localPlayerId: tk
      } = Rk;
      const bk = new JF;
      let wk = null,
        dk = null,
        sk = null,
        Vk = null,
        Jk = null;
      const Ak = [];
      return {
        onCreate: kk => {
          wk = new OB(kk, tk), dk = new dB(kk, tk, wk), sk = new dB(kk, tk, wk), Vk = new WB(kk, tk), Jk = new ik(kk, Vk), Ak.push((0, Xk.w)((0, ak.createElement)(ak.Fragment, null, (0, ak.createElement)(CB, {
            hud: bk
          }), (0, ak.createElement)(lB, {
            hud: bk
          }), (0, ak.createElement)(eF, {
            hud: bk,
            journal: Jk
          }), (0, ak.createElement)(GB, {
            placement: Vk
          }), (0, ak.createElement)(uB, {
            placement: Vk
          })), {
            content: (0, ak.createElement)(aF, {
              journal: Jk
            })
          }))
        },
        yJ: () => {
          dk.yJ(), sk.yJ(), Vk.yJ(), Jk.yJ()
        },
        onPlayerAttemptAltAction: (kk, Fk, Bk, Rk, tk, ak) => {
          var Xk;
          if (null !== ak) return;
          const bk = void 0 === Fk ? null : [Fk, Bk, Rk];
          return null !== (Xk = dk.attemptAltAction(bk)) && void 0 !== Xk ? Xk : sk.attemptAltAction(bk)
        },
        onPlayerClickUp: () => {
          dk.endPress(), sk.endPress()
        },
        onAfterRender: (kk, Fk) => {
          Vk.afterRender(Fk), dk.afterRender(Fk), sk.afterRender(Fk)
        },
        onClose: () => {
          for (const kk of Ak) kk();
          wk.dispose(), dk.dispose(), sk.dispose(), Vk.dispose(), wk = null, dk = null, sk = null, Vk = null, Jk = null
        },
        onReceivedMessageFromServer: (kk, Fk) => {
          if ("plotsStarterLot" === kk) bk.receiveStep(Fk);
          else if ("plotsPlot" === kk) bk.receivePlot(Fk);
          else if ("plotsStarterHouse" === kk) dk.he(Fk);
          else if ("plotsBlueprint" === kk) {
            const kk = Fk;
            sk.he(kk), Vk.he(kk)
          } else "plotsJournal" === kk ? Jk.he(Fk) : "plotsJournalOpen" === kk ? Jk.openFromServer() : "plotsPreviewEnd" === kk && Vk.endFromServer()
        }
      }
    }
  },
  38766: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Rk,
      e: () => ak
    });
    const Rk = 1 / .6,
      tk = {
        kind: "smokePuff"
      };
    class ak {
      constructor(kk, Fk, Bk) {
        this.style = kk, this.KV = Fk, this.half = Bk, this.particles = null, this.lastFrame = -1
      }
      emit(kk, Fk, Bk) {
        let ak = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return Bk !== this.lastFrame && (this.lastFrame = Bk, this.particles || (this.particles = kk.createParticles(function(kk, Fk) {
          const [
            [Bk, ak, Xk],
            [bk, wk, dk]
          ] = kk.colours;
          return {
            texture: kk.soft ? tk : "square_particle",
            KV: Fk,
            minLifeTime: kk.life[0] / Rk,
            maxLifeTime: kk.life[1] / Rk,
            minEmitPower: kk.power[0] * Rk,
            maxEmitPower: kk.power[1] * Rk,
            minSize: kk.size[0],
            maxSize: kk.size[1],
            emitRate: 0,
            gravity: [0, kk.lift * Rk * Rk, 0],
            dir1: [-kk.spread, 1, -kk.spread],
            dir2: [kk.spread, 1, kk.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Bk, ak, Xk, kk.alpha],
              maxColor: [bk, wk, dk, kk.alpha]
            }, {
              timeFraction: 1,
              minColor: [Bk, ak, Xk, 0],
              maxColor: [bk, wk, dk, 0]
            }],
            blendMode: kk.blendMode
          }
        }(this.style, this.KV), {
          pos: Fk,
          half: this.half
        })), this.particles.moveTo(Fk, this.half), this.particles.emit(ak), !0)
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