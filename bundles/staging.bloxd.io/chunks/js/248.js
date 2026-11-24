export const id = 248;
export const ids = [248];
export const modules = {
  39460: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => kX
    });
    const Xk = [0, 90, 180, 270],
      Tk = "plotsblueprint";
    var ik = Ik(58),
      yk = Ik(36600),
      lk = Ik(25),
      ak = Ik(1580),
      qk = Ik(1665),
      Lk = Ik(34);
    const tk = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      Zk = {
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
      jk = ["small", "medium", "large"].flatMap((kk => tk.flat().filter((Fk => Zk[Fk].tier === kk))));

    function ek(kk) {
      return Zk[kk]
    }
    const wk = new Map(tk.flatMap((kk => kk.slice(1).map(((Fk, Ik) => [Fk, kk[Ik]])))));

    function Hk(kk) {
      var Fk;
      return null !== (Fk = wk.get(kk)) && void 0 !== Fk ? Fk : null
    }
    const Jk = {
      farm_hut: "plotsGame:journalNoteFarmHut",
      rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
      castle_tower: "plotsGame:journalNoteCastleTower",
      farm_house: "plotsGame:journalNoteFarmHouse",
      farm_barn: "plotsGame:journalNoteFarmBarn"
    };

    function xk(kk, Fk) {
      const Ik = new Set(kk),
        Xk = function(kk) {
          const Fk = new Set(kk);
          return new Set(jk.filter((kk => {
            const Ik = Hk(kk);
            return null === Ik || Fk.has(Ik)
          })))
        }(Ik);
      return jk.map((kk => {
        const Tk = kk === Fk;
        return Ik.has(kk) ? {
          id: kk,
          active: Tk,
          state: "completed",
          unlockedBy: null
        } : Xk.has(kk) ? {
          id: kk,
          active: Tk,
          state: "open",
          unlockedBy: null
        } : {
          id: kk,
          active: Tk,
          state: "locked",
          unlockedBy: Hk(kk)
        }
      }))
    }
    const Pk = "plotsJournalChanged";
    class Kk {
      constructor(kk, Fk) {
        this.api = kk, this.placement = Fk, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.Mj("journal_opened")
        }, this.build = kk => {
          this.Mj("placement_started"), this.placement.start(kk), (0, yk.e)()
        }, this.putAway = () => {
          this.api.sendCommand(`${Tk} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      Pe(kk) {
        let [, Fk, Ik] = kk;
        this.pages = xk(Fk, Ik), Lk.g.GL(Pk, this.pages, !0)
      }
      openFromServer() {
        this.openRequested = !0, this.Dt()
      }
      Dt() {
        this.openRequested && !lk.d.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, ak.p)() || (0, qk.isTypingInInput)() || null !== this.placement.getView() || (0, yk.p)())
      }
      Mj(kk) {
        this.reported.has(kk) || (this.reported.add(kk), this.api.sendCommand(`${Tk} report ${kk}`))
      }
    }
    var Qk = Ik(1055),
      sk = Ik.n(Qk),
      Vk = Ik(1066),
      zk = Ik(1406),
      Sk = Ik(4516),
      vk = Ik(3352),
      Ek = Ik(1402),
      Ok = Ik(1109),
      nk = Ik(1179),
      Gk = Ik(9183);
    const pk = [0, 90, 180, 270],
      uk = /^(meta\|rot\d)\|([lrud]+)$/,
      bk = "nesw",
      Rk = /^meta\|([nesw]*)\|?(Stacked)?$/,
      Uk = function(kk) {
        const Fk = new WeakMap;
        return (Ik, Xk) => {
          let Tk = Fk.get(Ik);
          return void 0 === Tk && (Tk = kk(Ik, Xk), Fk.set(Ik, Tk)), Tk
        }
      }((kk => new Ck(kk)));
    class Ck {
      constructor(kk) {
        this.blockMetadata = kk, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const Fk = new Set(Object.keys(kk).map((Fk => kk[Fk].id)));
        Fk.add(0), this.maxBlockId = Math.max(...Fk)
      }
      static
      for (kk) {
        return Uk(kk)
      }
      getBlockIdMapping(kk, Fk) {
        const Ik = this.getBlockIdMappingKey(kk, Fk);
        let Xk = this.blockIdMappings.get(Ik);
        return void 0 === Xk && pk.includes(kk) && (Xk = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, kk, Fk), this.blockIdMappings.set(Ik, Xk)), Xk
      }
      turnBlockId(kk, Fk, Ik) {
        return this.mapBlockId(this.blockMetadata[kk], Fk, this.getRotationMapping(Fk, Ik), Ik)
      }
      getBlockIdMappingKey(kk, Fk) {
        return `r${kk}|m${Number(Fk)}`
      }
      createBlockIdMapping(kk, Fk, Ik, Xk) {
        const Tk = new Uint16Array(Fk + 1),
          ik = this.getRotationMapping(Ik, Xk);
        for (const yk in kk) {
          const Fk = kk[yk];
          Tk[Fk.id] = this.mapBlockId(Fk, Ik, ik, Xk)
        }
        return Tk
      }
      getRotationMapping(kk, Fk) {
        const Ik = Math.round(kk / 90),
          Xk = new Uint8Array(4);
        for (let Tk = 0; Tk < 4; Tk++) Xk[Tk] = (4 + Tk - Ik) % 4;
        if (Fk) {
          let kk = Xk[0];
          Xk[0] = Xk[1], Xk[1] = kk, kk = Xk[2], Xk[2] = Xk[3], Xk[3] = kk
        }
        return Xk
      }
      mapBlockId(kk, Fk, Ik, Xk) {
        var Tk;
        const {
          blockMetadata: ik
        } = this, yk = Math.round(Fk / 90), {
          id: lk,
          meta: ak
        } = kk, {
          rot: qk,
          rootName: Lk,
          metaStr: tk
        } = ak;
        let Zk;
        const [, jk, ek] = null !== (Tk = Rk.exec(tk)) && void 0 !== Tk ? Tk : [];
        if (void 0 !== jk) {
          var wk, Hk;
          Zk = null !== (wk = null === (Hk = ik[`${Lk}|meta|${[bk.split("").filter(((kk,Fk)=>jk.split("").some((kk=>{const Ik=bk.indexOf(kk);return((Xk?3-Ik:Ik)+yk)%4===Fk})))).join(""),ek].filter(Boolean).join("|")}`]) || void 0 === Hk ? void 0 : Hk.id) && void 0 !== wk ? wk : lk
        } else if (null === qk) Zk = lk;
        else {
          var Jk, xk;
          const kk = Ik[qk - 1] + 1;
          let Fk = tk.replace(`rot${qk}`, `rot${kk}`);
          Xk && ak.stairsCorner && (Fk = Fk.replace(/(Left|Right)$/, (kk => "Left" === kk ? "Right" : "Left"))), Xk && "Chest" === Lk && (Fk = Fk.replace(/\|(left|right)$/, ((kk, Fk) => "left" === Fk ? "|right" : "|left")));
          const Tk = uk.exec(Fk);
          if (Xk && null !== Tk) {
            const kk = "lrud".split("").filter((kk => Tk[2].includes("l" === kk ? "r" : "r" === kk ? "l" : kk)));
            Fk = `${Tk[1]}|${kk.join("")}`
          }
          const yk = `${Lk}|${Fk}`;
          if (Zk = null !== (Jk = null === (xk = ik[yk]) || void 0 === xk ? void 0 : xk.id) && void 0 !== Jk ? Jk : null, null === Zk) {
            const kk = ik[Lk];
            Zk = kk.rootMetaDesc === yk ? kk.id : lk
          }
        }
        return Zk
      }
    }

    function Nk(kk, Fk, Ik) {
      let {
        xRotationMappedOrigin: Xk,
        shouldSwapXZ: Tk
      } = Ik;
      const ik = Tk ? Fk : kk;
      return null === Xk ? ik : Xk - ik
    }

    function ck(kk, Fk, Ik) {
      let {
        zRotationMappedOrigin: Xk,
        shouldSwapXZ: Tk
      } = Ik;
      const ik = Tk ? kk : Fk;
      return null === Xk ? ik : Xk - ik
    }
    const Wk = {
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
      fk = new Map;

    function Bk(kk, Fk) {
      const Ik = `${kk}|${Fk}`;
      let Xk = fk.get(Ik);
      if (void 0 === Xk) {
        const {
          size: Tk,
          palette: ik,
          layers: yk
        } = Wk[kk], lk = 90 === Fk || 270 === Fk, [ak, qk] = lk ? [Tk[2], Tk[0]] : [Tk[0], Tk[2]], Lk = function(kk, Fk, Ik) {
          let Xk = null,
            Tk = null,
            ik = !1;
          switch (kk) {
            case 0:
              break;
            case 90:
              Xk = Fk - 1, ik = !0;
              break;
            case 180:
              Xk = Fk - 1, Tk = Ik - 1;
              break;
            case 270:
              Tk = Ik - 1, ik = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${kk}`)
          }
          return {
            xRotationMappedOrigin: Xk,
            zRotationMappedOrigin: Tk,
            shouldSwapXZ: ik
          }
        }(Fk, ak, qk), tk = Ck.for(Gk.g), Zk = ik.map((kk => (0, Gk.f)(tk.turnBlockId((0, Gk.j)(kk), Fk, !1)))), jk = [];
        yk.forEach(((kk, Fk) => {
          kk.split(" ").forEach(((kk, Ik) => {
            for (let Xk = 0; Xk < kk.length; Xk++)
              if ("." !== kk[Xk]) {
                const Tk = [Nk(Xk, Ik, Lk), Fk, ck(Xk, Ik, Lk)];
                jk.push({
                  offset: Tk,
                  block: Zk[kk.charCodeAt(Xk) - "a".charCodeAt(0)]
                })
              }
          }))
        })), Xk = {
          size: [ak, Tk[1], qk],
          cells: jk
        }, fk.set(Ik, Xk)
      }
      return Xk
    }
    const dk = {
      farm_hut: Ik.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
      farm_house: Ik.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
      farm_barn: Ik.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
      rusticHome_tent: Ik.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
      rusticHome_cabin: Ik.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
      rusticHome_house: Ik.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
      market_stand: Ik.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
      market_stall: Ik.p + "static/media/market_stall.9a562807f9dff591618a.webp",
      market_shop: Ik.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
      castle_wall: Ik.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
      castle_gate: Ik.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
      castle_tower: Ik.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
    };
    var Yk = Ik(1096);
    const Ak = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function gk(kk) {
      let {
        page: Fk,
        building: Ik,
        onBuild: Xk,
        onPutAway: Tk
      } = kk;
      const {
        t: ik
      } = (0, nk.y)(), {
        displayName: yk,
        tier: lk
      } = ek(Fk.id), ak = Bk(Fk.id, 0).cells.length, qk = Jk[Fk.id], Lk = "locked" === Fk.state, tk = Ik ? zk.d : zk.m;
      return (0, Yk.jsxs)("article", {
        className: sk()("PlotsJournalPage", {
          Locked: Lk
        }),
        children: [(0, Yk.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: ik(yk.translationKey)
        }), (0, Yk.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [ik(Ak[lk]), " \xb7 ", ik("plotsGame:journalBlocks", {
            blocks: String(ak)
          })]
        }), (0, Yk.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [jk.map((kk => (0, Yk.jsx)("img", {
            className: sk()({
              Shown: kk === Fk.id
            }),
            src: dk[kk],
            alt: "",
            draggable: !1
          }, kk))), "completed" === Fk.state && (0, Yk.jsx)("span", {
            className: "PlotsJournalStamp",
            children: ik("plotsGame:journalBuilt")
          }), Lk && (0, Yk.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, Yk.jsx)(Vk.e, {
              name: "lock"
            })
          })]
        }), void 0 !== qk && "completed" !== Fk.state && (0, Yk.jsx)("p", {
          className: "PlotsJournalNote",
          children: ik(qk)
        }), (0, Yk.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === Fk.state && (0, Yk.jsx)("p", {
            className: "PlotsJournalHint",
            children: ik("plotsGame:journalLocked", {
              name: ik(ek(Fk.unlockedBy).displayName.translationKey)
            })
          }), Fk.active && (0, Yk.jsxs)(Yk.Fragment, {
            children: [(0, Yk.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: ik("plotsGame:journalBuilding")
            }), (0, Yk.jsx)(zk.g, {
              onClick: Tk,
              children: ik("plotsGame:journalPutAway")
            })]
          }), !Lk && !Fk.active && (0, Yk.jsx)(tk, {
            onClick: () => {
              Xk(Fk.id)
            },
            children: ik("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function mk(kk) {
      let {
        className: Fk,
        page: Ik,
        hidden: Xk,
        building: Tk,
        journal: ik
      } = kk;
      return (0, Yk.jsxs)("div", {
        ref: kk => {
          null !== kk && (kk.inert = Xk)
        },
        className: sk()("PlotsJournalSide", Fk),
        children: [void 0 !== Ik && (0, Yk.jsx)(gk, {
          page: Ik,
          building: Tk,
          onBuild: ik.build,
          onPutAway: ik.putAway
        }), void 0 === Ik && (0, Yk.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var hk = Ik(337),
      rk = Ik(1844);

    function Dk(kk) {
      return Math.cos((0, rk.k)(kk))
    }

    function Mk(kk) {
      return (0, rk.A)(Math.acos(hk.e.clamp(kk, -1, 1)))
    }

    function kF(kk, Fk, Ik, Xk, Tk) {
      const ik = Math.abs(Fk - kk),
        yk = (0, rk.A)(Tk / (Ik * Math.abs(Math.sin((0, rk.k)(kk))))),
        lk = 450 * Math.min(1, ik / Xk),
        ak = yk > 0 ? 3 * ik / yk : 1 / 0;
      return Math.round(Math.max(120, Math.min(lk, ak)))
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

    function IF(kk, Fk) {
      return kk > Fk && kk >= 600
    }

    function XF(kk) {
      return Mk(new DOMMatrixReadOnly(getComputedStyle(kk).transform).m11)
    }

    function TF(kk, Fk) {
      kk.style.transform = `rotateY(${-Fk}deg)`, kk.classList.add("Turning")
    }

    function iF(kk) {
      let {
        journal: Fk
      } = kk;
      const {
        t: Ik
      } = (0, nk.y)(), Xk = (0, Ek.f)(Pk, Fk.getPages()), Tk = (0, Ok.n)(IF), [lk, ak] = (0, ik.useState)((() => function(kk) {
        const Fk = kk.findIndex((kk => kk.active));
        return -1 !== Fk ? Fk : Math.max(0, kk.findIndex((kk => "open" === kk.state)))
      }(Xk))), Lk = (0, ik.useRef)(null), tk = (0, ik.useRef)(null), Zk = (0, ik.useRef)({
        Forward: null,
        Back: null
      }), jk = Tk ? 2 : 1, ek = Tk ? 180 : 90, wk = lk - lk % jk, Hk = wk > 0, Jk = wk + jk < Xk.length, xk = (0, ik.useCallback)((() => {
        const kk = tk.current;
        return null === kk ? wk : (tk.current = null, kk.animation.cancel(), (Fk = Zk.current[kk.direction]).style.transform = "", Fk.classList.remove("Turning"), null === kk.next ? wk : (ak(kk.next), kk.next));
        var Fk
      }), [wk]), Kk = (0, ik.useCallback)(((kk, Fk, Ik, Xk) => {
        const Tk = Zk.current[kk],
          ik = XF(Tk),
          yk = Fk === ("Forward" === kk) ? ek : 0;
        TF(Tk, yk);
        const lk = Tk.animate([{
          transform: `rotateY(${-ik}deg)`
        }, {
          transform: `rotateY(${-yk}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : kF(ik, yk, Tk.offsetWidth, ek, yk > ik ? -Ik : Ik),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        tk.current = {
          direction: kk,
          animation: lk,
          next: Fk ? Xk + ("Forward" === kk ? jk : -jk) : null
        }, lk.onfinish = () => {
          var kk;
          (null === (kk = tk.current) || void 0 === kk ? void 0 : kk.animation) === lk && xk()
        }
      }), [jk, ek, xk]), Qk = (0, ik.useCallback)((kk => {
        if (null !== Lk.current) return;
        const Fk = xk();
        ("Forward" === kk ? Fk + jk < Xk.length : Fk > 0) && Kk(kk, !0, 0, Fk)
      }), [xk, Kk, jk, Xk.length]);
      (0, ik.useEffect)((() => {
        Fk.onOpened()
      }), [Fk]), (0, ik.useEffect)((() => () => {
        var kk;
        null === (kk = tk.current) || void 0 === kk || kk.animation.cancel()
      }), []), (0, ik.useEffect)((() => {
        const kk = kk => {
          var Fk;
          kk.pointerId !== (null === (Fk = Lk.current) || void 0 === Fk ? void 0 : Fk.pointerId) || Lk.current.following || (Lk.current = null)
        };
        return window.addEventListener("pointerup", kk), () => {
          window.removeEventListener("pointerup", kk)
        }
      }), []), (0, vk.b)((kk => ("ArrowLeft" === kk.code || "ArrowRight" === kk.code) && !(0, qk.isTypingInInput)()), (kk => {
        kk.stopPropagation(), Qk("ArrowLeft" === kk.code ? "Back" : "Forward")
      }));
      const Vk = (kk, Fk, Ik) => {
          const Xk = function(kk, Fk, Ik, Xk) {
            return (kk < 0 ? Ik : Xk) ? hk.e.clampAbs(kk, Fk) : Math.sign(kk) * Fk * (1 - 1 / (.55 * Math.abs(kk) / Fk + 1))
          }(kk.base + Ik, jk * kk.width, Jk, Hk);
          return "Forward" === Fk ? Math.min(Xk, 0) : Math.max(Xk, 0)
        },
        Gk = (kk, Fk) => {
          const Ik = Lk.current;
          if (Lk.current = null, null === Ik.direction) return;
          Ik.speed.add(kk, Fk);
          const Xk = Ik.speed.get(),
            Tk = Vk(Ik, Ik.direction, kk - Ik.x);
          Kk(Ik.direction, null !== function(kk, Fk, Ik, Xk, Tk) {
            if (Math.abs(Fk) >= .3 ? Math.sign(Fk) !== Math.sign(kk) : Math.abs(kk) < .5 * Ik) return null;
            const ik = kk < 0 ? "Forward" : "Back";
            return ("Forward" === ik ? Xk : Tk) ? ik : null
          }(Tk, Xk, jk * Ik.width, Jk, Hk), Xk, wk)
        },
        pk = Xk.some((kk => kk.active)),
        uk = (kk, Ik, Tk) => (0, Yk.jsx)(mk, {
          className: kk,
          page: Ik >= 0 && Ik < Xk.length ? Xk[Ik] : void 0,
          hidden: Tk,
          building: pk,
          journal: Fk
        });
      return (0, Yk.jsx)(Sk.c, {
        close: yk.f,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, Yk.jsxs)("section", {
          className: sk()("PlotsJournal", {
            Spread: Tk
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": Ik("plotsGame:journalTitle"),
          children: [(0, Yk.jsx)(zk.k, {
            className: "PlotsJournalClose",
            onClick: yk.f
          }), (0, Yk.jsx)(yF, {
            direction: "Back",
            disabled: !Hk,
            onTurn: Qk
          }), (0, Yk.jsx)("div", {
            className: "PlotsJournalBookPages",
            onPointerDown: kk => {
              var Fk;
              if (!kk.isPrimary || 0 !== kk.button || null !== tk.current && null !== kk.target.closest("button")) return;
              const Ik = new FF;
              Ik.add(kk.clientX, kk.timeStamp);
              const Xk = Zk.current.Forward.offsetWidth,
                Tk = tk.current;
              tk.current = null;
              let ik = 0;
              if (null !== Tk) {
                const Fk = Zk.current[Tk.direction],
                  Ik = XF(Fk);
                Tk.animation.cancel(), TF(Fk, Ik), ik = function(kk, Fk, Ik, Xk) {
                  return (kk < 0 ? Ik : Xk) ? kk : Math.sign(kk) * Fk * (1 / (1 - Math.min(Math.abs(kk) / Fk, .99)) - 1) / .55
                }(function(kk, Fk, Ik, Xk) {
                  return Ik * (Dk(Fk) - Dk("Forward" === kk ? 0 : Xk))
                }(Tk.direction, Ik, Xk, ek), jk * Xk, Jk, Hk), kk.currentTarget.setPointerCapture(kk.pointerId)
              }
              Lk.current = {
                pointerId: kk.pointerId,
                x: kk.clientX,
                y: kk.clientY,
                base: ik,
                width: Xk,
                following: null !== Tk,
                direction: null !== (Fk = null === Tk || void 0 === Tk ? void 0 : Tk.direction) && void 0 !== Fk ? Fk : null,
                speed: Ik
              }
            },
            onPointerMove: kk => {
              const Fk = Lk.current;
              if (null === Fk || kk.pointerId !== Fk.pointerId) return;
              if (0 === kk.buttons) return void Gk(kk.clientX, kk.timeStamp);
              const Ik = kk.clientX - Fk.x;
              !Fk.following && function(kk, Fk) {
                return Math.abs(kk) > 8 && Math.abs(kk) > Math.abs(Fk)
              }(Ik, kk.clientY - Fk.y) && (Fk.following = !0, Fk.direction = Ik < 0 ? "Forward" : "Back", kk.currentTarget.setPointerCapture(kk.pointerId)), null !== Fk.direction && (Fk.speed.add(kk.clientX, kk.timeStamp), TF(Zk.current[Fk.direction], function(kk, Fk, Ik, Xk) {
                const Tk = Ik * Dk("Forward" === kk ? 0 : Xk) + Fk;
                return hk.e.clamp(Mk(Tk / Ik), 0, Xk)
              }(Fk.direction, Vk(Fk, Fk.direction, Ik), Fk.width, ek)))
            },
            onPointerUp: kk => {
              var Fk;
              kk.pointerId === (null === (Fk = Lk.current) || void 0 === Fk ? void 0 : Fk.pointerId) && Gk(kk.clientX, kk.timeStamp)
            },
            onPointerCancel: kk => {
              const Fk = Lk.current;
              kk.pointerId === (null === Fk || void 0 === Fk ? void 0 : Fk.pointerId) && (Lk.current = null, null !== Fk.direction && Kk(Fk.direction, !1, 0, wk))
            },
            children: (0, Yk.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [Tk && uk("Left", wk - 2, !0), uk("Right", wk + 2 * jk - 1, !0), (0, Yk.jsxs)("div", {
                ref: kk => {
                  Zk.current.Back = kk
                },
                className: "PlotsJournalLeaf Back",
                children: [uk("Recto", wk - 1, !0), Tk && uk("Verso", wk, !1)]
              }), (0, Yk.jsxs)("div", {
                ref: kk => {
                  Zk.current.Forward = kk
                },
                className: "PlotsJournalLeaf Forward",
                children: [uk("Recto", wk + jk - 1, !1), Tk && uk("Verso", wk + jk, !0)]
              })]
            })
          }), (0, Yk.jsx)(yF, {
            direction: "Forward",
            disabled: !Jk,
            onTurn: Qk
          })]
        })
      })
    }

    function yF(kk) {
      let {
        direction: Fk,
        disabled: Ik,
        onTurn: Xk
      } = kk;
      const {
        t: Tk
      } = (0, nk.y)();
      return (0, Yk.jsx)("div", {
        className: sk()("PlotsJournalArrow", Fk),
        children: (0, Yk.jsx)(zk.d, {
          disabled: Ik,
          ariaLabel: Tk("Forward" === Fk ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            Xk(Fk)
          },
          children: (0, Yk.jsx)(Vk.e, {
            name: "angle-up"
          })
        })
      })
    }
    var lF = Ik(36597),
      aF = Ik(1864),
      qF = Ik(1913);
    const LF = "plotsStepChanged",
      tF = "plotsPlotChanged";
    class ZF {
      constructor() {
        this.step = ["none"], this.plot = ["none"]
      }
      getStep() {
        return this.step
      }
      receiveStep(kk) {
        this.step = kk, Lk.g.GL(LF, kk, !0)
      }
      getPlot() {
        return this.plot
      }
      receivePlot(kk) {
        this.plot = kk, Lk.g.GL(tF, kk, !0)
      }
    }
    const jF = "KeyJ";

    function eF(kk) {
      let {
        hud: Fk,
        journal: Ik
      } = kk;
      const Xk = (0, Ek.f)(Pk, Ik.getPages()),
        Tk = (0, Ek.f)(LF, Fk.getStep()),
        {
          isTouchScreen: ik
        } = (0, lk.j)(["isTouchScreen"]),
        {
          t: Lk
        } = (0, nk.y)(),
        tk = null !== Xk && "none" === Tk[0];
      return (0, vk.b)((kk => null !== Xk && kk.code === jF && !kk.repeat && !(0, qk.isTypingInInput)()), (kk => {
        (0, ak.F)(kk, tk, yk.p)
      })), tk ? (0, Yk.jsx)(lF.f, {
        placement: "topRight",
        children: (0, Yk.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, Yk.jsxs)("button", {
            type: "button",
            className: sk()("PlotsJournalButton SmallTextBold", {
              Touch: ik
            }),
            onClick: yk.p,
            children: [(0, Yk.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, Yk.jsx)(aF.d, {
                itemName: "Book",
                amount: 0
              })
            }), Lk("plotsGame:journalButton"), !ik && (0, Yk.jsx)(qF.c, {
              className: "PlotsJournalButtonKey",
              keyCode: jF
            })]
          })
        })
      }) : null
    }
    var wF = Ik(38399),
      HF = Ik(38169),
      JF = Ik(36969),
      xF = Ik(9223),
      PF = Ik(9241),
      KF = Ik(37811);
    const QF = new Map([
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
      sF = [...JF.e.blockRemoveActionRoots, ...HF.c, ...xF.h, "Board", "Code Block", "Custom Lobby Block"],
      VF = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let zF = null;

    function SF() {
      return zF ??= function() {
        const kk = oF(),
          Fk = Math.max(...kk.map((kk => Gk.g[kk].id))) + 1,
          Ik = new Int32Array(Fk),
          Xk = new Int32Array(Fk),
          Tk = new Uint8Array(Fk).fill(1),
          ik = new Uint8Array(Fk),
          yk = new Uint8Array(Fk),
          lk = new Array(Fk).fill("Air"),
          ak = new Map,
          qk = kk => {
            let Fk = ak.get(kk);
            return void 0 === Fk && (Fk = ak.size + 1, ak.set(kk, Fk)), Fk
          },
          Lk = new Set(sF);
        for (const Zk of kk) {
          var tk;
          const {
            id: kk,
            meta: Fk,
            altActionable: ak,
            canBePlacedOver: jk
          } = Gk.g[Zk];
          Ik[kk] = qk(vF(Zk));
          const ek = Fk.stairsCorner;
          if (null === ek) Xk[kk] = Ik[kk];
          else {
            const Ik = ek.endsWith("Right");
            Xk[kk] = qk(`${Fk.rootName}|rot${Ik?Fk.rot%4+1:Fk.rot}|${Fk.halfblockPlacement}|${ek.replace("Right","Left")}`)
          }
          Tk[kk] = jk ? 1 : 0, ik[kk] = ak || null !== Fk.open || Zk in KF.b || Lk.has(Fk.rootName) || void 0 !== (0, HF.f)(Fk.rootName) ? 1 : 0;
          const {
            rootName: wk
          } = Fk;
          yk[kk] = null !== Fk.open || HF.c.includes(wk) || wk.includes("Bookshelf") || wk.includes("Mailbox") ? 1 : 0, lk[kk] = null !== (tk = (0, wF.g)(kk)) && void 0 !== tk ? tk : wk
        }
        return {
          kinds: Ik,
          shapes: Xk,
          empty: Tk,
          inUse: ik,
          ownAltActionMessage: yk,
          placingItems: lk
        }
      }(), zF
    }

    function oF() {
      return Object.keys(Gk.g).filter((kk => Gk.g[kk].name === kk))
    }

    function vF(kk) {
      var Fk;
      const Ik = Gk.g[kk],
        {
          rootName: Xk,
          rot: Tk
        } = Ik.meta,
        [, ...ik] = (null !== (Fk = Ik.rootMetaDesc) && void 0 !== Fk ? Fk : kk).split("|"),
        yk = ik.filter((kk => !("meta" === kk || VF.test(kk) || (0, PF.z)(Ik) && /^[nesw]+$/.test(kk) || xF.h.includes(Xk) && /^[lrud]+$/.test(kk) || hk.I.includes(Xk) && /^(left|right)$/.test(kk))));
      return [Xk, ...yk].map((kk => "fenceGate" === Ik.model && kk === `rot${Tk}` ? "rot" + ((Tk - 1) % 2 + 1) : kk)).join("|")
    }

    function EF(kk, Fk) {
      const {
        kinds: Ik,
        shapes: Xk
      } = SF();
      return Ik[kk] === Ik[Fk] || Xk[kk] === Xk[Fk]
    }

    function OF(kk) {
      return 1 === SF().empty[kk]
    }

    function nF(kk) {
      return SF().placingItems[kk]
    }

    function GF(kk) {
      return QF.get(Gk.g[kk].meta.rootName)
    }
    var pF = Ik(9219),
      uF = Ik(9237);
    const bF = [0, 0, 0, 1, 1, 1],
      RF = (0, pF.c)([
        [2, 0, 2, 6, 6, 6]
      ]),
      UF = (0, pF.c)([
        [3, 0, 3, 5, 5, 5]
      ]),
      CF = (0, pF.c)([
        [3, 3, 3, 5, 8, 5]
      ]),
      NF = [0, 1, 2, 3].map((kk => (0, pF.c)((0, pF.m)([
        [3, 2, 0, 5, 7, 3]
      ], kk))));

    function cF(kk) {
      const {
        Re: Fk,
        model: Ik,
        blockModel: Xk,
        meta: Tk
      } = Gk.g[kk];
      return void 0 !== Fk ? Fk : "CentreCross" === Ik ? RF : null !== Xk && void 0 !== Xk && Xk.startsWith("torch") ? Tk.halfblockPlacement === uF.d.side ? NF[Tk.rot - 1] : Tk.halfblockPlacement === uF.d.top ? CF : UF : bF
    }
    var WF = Ik(36936),
      fF = Ik(187);

    function BF(kk, Fk) {
      const Ik = fF.f.CH / 2;
      return kk[0] < Fk[0] + Ik && kk[0] + 1 > Fk[0] - Ik && kk[1] < Fk[1] + fF.f.NH && kk[1] + 1 > Fk[1] && kk[2] < Fk[2] + Ik && kk[2] + 1 > Fk[2] - Ik
    }

    function dF(kk, Fk, Ik, Xk, Tk) {
      const ik = Math.hypot(...Fk.dir);
      if (!Number.isFinite(ik) || 0 === ik) return -1;
      const {
        from: yk,
        reach: lk,
        solid: ak
      } = Fk, qk = [Fk.dir[0] / ik, Fk.dir[1] / ik, Fk.dir[2] / ik], Lk = null === ak ? lk : Math.min(lk, function(kk, Fk, Ik) {
        const Xk = YF(kk, Fk, Ik);
        if (Xk !== 1 / 0) return Xk;
        return (Ik[0] + .5 - kk[0]) * Fk[0] + (Ik[1] + .5 - kk[1]) * Fk[1] + (Ik[2] + .5 - kk[2]) * Fk[2]
      }(yk, qk, ak) + .75);
      let tk = -1,
        Zk = 1 / 0,
        jk = 1 / 0;
      for (let ek = 0; ek < kk.length; ek += 4) {
        const Fk = [kk[ek], kk[ek + 1], kk[ek + 2]],
          ik = Tk(ek) ? lk : Lk;
        let ak = -1,
          wk = YF(yk, qk, Fk);
        if (wk > ik) {
          const kk = [Fk[0] + .5 - yk[0], Fk[1] + .5 - yk[1], Fk[2] + .5 - yk[2]];
          if (wk = kk[0] * qk[0] + kk[1] * qk[1] + kk[2] * qk[2], wk <= 0 || wk > ik) continue;
          if (ak = Math.hypot(kk[0] - wk * qk[0], kk[1] - wk * qk[1], kk[2] - wk * qk[2]), ak > .7 || !Xk(ek)) continue
        }(ak < Zk || ak === Zk && wk < jk) && Ik(ek) && (tk = ek, Zk = ak, jk = wk)
      }
      return tk
    }

    function YF(kk, Fk, Ik) {
      let Xk = 0,
        Tk = 1 / 0;
      for (let ik = 0; ik < 3; ik++) {
        const yk = Ik[ik] - kk[ik];
        if (0 === Fk[ik]) {
          if (yk > 0 || yk + 1 < 0) return 1 / 0;
          continue
        }
        const lk = yk / Fk[ik],
          ak = (yk + 1) / Fk[ik];
        Xk = Math.max(Xk, Math.min(lk, ak)), Tk = Math.min(Tk, Math.max(lk, ak))
      }
      return Xk <= Tk ? Xk : 1 / 0
    }
    var AF = Ik(38073),
      gF = Ik(38509);
    const mF = [1, 1, 1];
    class hF {
      constructor(kk) {
        this.api = kk, this.meshes = null, this.shown = null
      }
      show(kk) {
        if (!(0, WF.f)(kk, this.shown))
          if (this.shown = null === kk ? null : [kk[0], kk[1], kk[2]], null !== this.meshes)
            for (const Fk of this.meshes) this.api.setGameMesh(Fk, null === kk ? {
              visible: !1
            } : {
              anchor: kk,
              visible: !0
            });
          else if (null !== kk) {
          const Fk = [AF.c, AF.c, AF.c, 0, 0, 0];
          this.meshes = [this.build([Fk], AF.g, kk), this.build((0, AF.b)(), AF.o, kk)]
        }
      }
      dispose() {
        for (const Fk of null !== (kk = this.meshes) && void 0 !== kk ? kk : []) {
          var kk;
          this.api.disposeGameMesh(Fk)
        }
        this.meshes = null, this.shown = null
      }
      build(kk, Fk, Ik) {
        const Xk = [],
          Tk = [];
        for (const [ik, yk, lk, ak, qk, Lk] of kk)(0, gF.f)(Xk, Tk, [ak + .5, qk + .5, Lk + .5], [ik, yk, lk]);
        return this.api.createGameMesh({
          positions: Xk,
          indices: Tk
        }, {
          rgb: mF,
          alpha: Fk,
          onTop: !0
        }, Ik)
      }
    }
    class rF {
      constructor(kk) {
        this.api = kk, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(kk) {
        const Fk = fF.f.se;
        this.chunks = [];
        for (let Ik = 0; Ik < kk.length; Ik += 3) {
          const Xk = Math.floor(kk[Ik] / Fk),
            Tk = Math.floor(kk[Ik + 1] / Fk),
            ik = Math.floor(kk[Ik + 2] / Fk);
          this.watches(Xk, Tk, ik) || this.chunks.push(Xk, Tk, ik)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const kk = performance.now();
        if (kk - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = kk;
        let Fk = !1;
        for (let Ik = 0; Ik < this.chunks.length; Ik += 3) {
          const kk = this.api.getChunkVersion(this.chunks[Ik], this.chunks[Ik + 1], this.chunks[Ik + 2]);
          this.versions[Ik / 3] !== kk && (this.versions[Ik / 3] = kk, Fk = !0)
        }
        return Fk
      }
      watches(kk, Fk, Ik) {
        for (let Xk = 0; Xk < this.chunks.length; Xk += 3)
          if (this.chunks[Xk] === kk && this.chunks[Xk + 1] === Fk && this.chunks[Xk + 2] === Ik) return !0;
        return !1
      }
    }
    const DF = .35,
      MF = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      kI = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      FI = [.95, .2, .15];
    class II {
      constructor() {
        this.groups = []
      }
      add(kk, Fk, Ik, Xk, Tk) {
        let ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : bF;
        for (const yk of this.groups)
          if (iI(yk, Xk, Tk)) return yk.cells.push(kk, Fk, Ik), void yk.boxes.push(ik);
        this.groups.push({
          rgb: Xk,
          look: Tk,
          cells: [kk, Fk, Ik],
          boxes: [ik]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class XI {
      constructor(kk) {
        this.api = kk, this.shown = []
      }
      show(kk) {
        const Fk = [];
        for (const Ik of kk) {
          const kk = this.shown.findIndex((kk => {
            let {
              group: Fk
            } = kk;
            return iI(Fk, Ik.rgb, Ik.look) && yI(Fk, Ik)
          })); - 1 === kk ? Fk.push(this.build(Ik)) : (Fk.push(this.shown[kk]), this.shown.splice(kk, 1))
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
          look: Ik,
          boxes: Xk
        } = kk, Tk = [Fk[0] + (1 - Fk[0]) * DF, Fk[1] + (1 - Fk[1]) * DF, Fk[2] + (1 - Fk[2]) * DF], ik = [this.buildMesh(kk.cells, Fk, Ik.alpha, ((kk, Fk, Tk, ik) => {
          TI(kk, Fk, Tk, Xk[ik], Ik.size, !1)
        })), this.buildMesh(kk.cells, Tk, Ik.alpha, ((kk, Fk, Tk, ik) => {
          TI(kk, Fk, Tk, Xk[ik], Ik.size, !0)
        }))];
        return Ik.crossed && ik.push(this.buildMesh(kk.cells, Fk, .9, ((kk, Fk, Xk) => {
          (0, gF.h)(kk, Fk, Xk, Ik.size + .01, .12)
        }))), {
          group: kk,
          meshes: ik
        }
      }
      buildMesh(kk, Fk, Ik, Xk) {
        const Tk = [kk[0], kk[1], kk[2]],
          ik = [],
          yk = [];
        for (let lk = 0; lk < kk.length; lk += 3) Xk(ik, yk, [kk[lk] - Tk[0] + .5, kk[lk + 1] - Tk[1] + .5, kk[lk + 2] - Tk[2] + .5], lk / 3);
        return this.api.createGameMesh({
          positions: ik,
          indices: yk
        }, {
          rgb: [Fk[0], Fk[1], Fk[2]],
          alpha: Ik
        }, Tk)
      }
    }

    function TI(kk, Fk, Ik, Xk, Tk, ik) {
      for (let yk = 0; yk < Xk.length; yk += 6) {
        const lk = [0, 0, 0],
          ak = [0, 0, 0];
        for (let kk = 0; kk < 3; kk++) lk[kk] = Ik[kk] + ((Xk[yk + kk] + Xk[yk + kk + 3]) / 2 - .5) * Tk, ak[kk] = (Xk[yk + kk + 3] - Xk[yk + kk]) * Tk;
        (0, gF.c)(kk, Fk, lk, ak, ik)
      }
    }

    function iI(kk, Fk, Ik) {
      return kk.rgb[0] === Fk[0] && kk.rgb[1] === Fk[1] && kk.rgb[2] === Fk[2] && kk.look === Ik
    }

    function yI(kk, Fk) {
      if (kk.cells.length !== Fk.cells.length) return !1;
      for (let Ik = 0; Ik < kk.cells.length; Ik++)
        if (kk.cells[Ik] !== Fk.cells[Ik]) return !1;
      return kk.boxes.every(((kk, Ik) => kk === Fk.boxes[Ik]))
    }

    function lI(kk, Fk) {
      return kk.getClientOption(Fk, "blockReach") + 1
    }
    class aI {
      constructor(kk, Fk, Ik) {
        this.api = kk, this.localPlayerId = Fk, this.pickNext = Ik, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(kk) {
        const [Fk, , Ik] = kk.cameraDirection, Xk = Math.hypot(Fk, Ik);
        Xk > .001 && (this.heading = [Fk / Xk, Ik / Xk])
      }
      tapped(kk, Fk, Ik) {
        const Xk = lI(this.api, this.localPlayerId),
          {
            origin: Tk,
            direction: ik
          } = this.api.getActionRay(),
          yk = [...Tk],
          lk = [
            [yk, [yk[0] + ik[0] * Xk, yk[1] + ik[1] * Xk, yk[2] + ik[2] * Xk]]
          ];
        null !== kk && lk.push([yk, (0, WF.c)(kk)]), this.tap = {
          lines: lk,
          next: Fk,
          ms: Ik
        }
      }
      filled(kk, Fk) {
        this.tap = null, this.turnFrom(kk, Fk), this.retry(Fk)
      }
      arrived(kk, Fk) {
        const {
          tap: Ik
        } = this;
        if (null === Ik || Fk - Ik.ms > 1500) return null;
        const Xk = (0, WF.c)(kk);
        return (0, WF.f)(Ik.next, kk) || Ik.lines.some((kk => {
          let [Fk, Ik] = kk;
          return function(kk, Fk, Ik) {
            const Xk = [Ik[0] - Fk[0], Ik[1] - Fk[1], Ik[2] - Fk[2]],
              Tk = [kk[0] - Fk[0], kk[1] - Fk[1], kk[2] - Fk[2]],
              ik = Xk[0] ** 2 + Xk[1] ** 2 + Xk[2] ** 2,
              yk = 0 === ik ? 0 : Math.min(1, Math.max(0, (Tk[0] * Xk[0] + Tk[1] * Xk[1] + Tk[2] * Xk[2]) / ik));
            return Math.hypot(Tk[0] - Xk[0] * yk, Tk[1] - Xk[1] * yk, Tk[2] - Xk[2] * yk)
          }(Xk, Fk, Ik) <= .9
        })) ? (this.tap = null, this.turnFrom(kk, Fk), Ik.ms) : null
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
        const Ik = this.pickNext((0, WF.c)(Fk.from), (kk => (0, WF.f)(kk, Fk.from)));
        if (null === Ik) return;
        this.pending = null;
        const {
          turning: Xk
        } = this;
        if (null !== Xk && kk < Xk.endMs && (0, WF.f)(Xk.to, Ik)) return;
        const Tk = this.api.getActionRay().origin,
          ik = [Ik[0] + .5 - Tk[0], Ik[1] + .5 - Tk[1], Ik[2] + .5 - Tk[2]],
          yk = Math.hypot(ik[0], ik[2]);
        if (yk < .3) {
          const kk = Math.max(yk, .001);
          ik[0] = this.heading[0] * kk, ik[2] = this.heading[1] * kk
        }
        this.api.turnCamera(ik, Fk.turnMs), this.turning = {
          to: Ik,
          endMs: kk + Fk.turnMs
        }
      }
    }
    class qI {
      constructor(kk, Fk, Ik) {
        this.api = kk, this.localPlayerId = Fk, this.juice = Ik, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], this.lastFilled = null, this.lastSeenFilled = null, this.playerCells = [], this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = null, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new rF(kk), this.meshes = new XI(kk), this.outline = new hF(kk), this.turn = new aI(kk, Fk, ((kk, Fk) => this.pickNext(kk, Fk)))
      }
      Pe(kk) {
        const Fk = "active" === kk[0] ? `${kk[1]}|${kk[3]}|${kk[4]}|${kk[5]}|${kk[6]}` : "";
        if ("active" !== kk[0]) "built" === kk[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , Ik, Xk, Tk, ik] = kk;
          Fk !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = Ik) : Ik === this.layerY ? this.burstUnlisted(Xk) : Ik > this.layerY && this.finishLayer(Ik), this.layerY = Ik, this.layerCells.has(Ik) || this.layerCells.set(Ik, Xk.filter(tI)), this.ghostCells = Xk, this.palette = Tk, this.occupiedCells = ik
        }
        Fk !== this.blueprint && (this.blueprint = Fk, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((kk => this.api.blockNameToBlockId(kk))), this.chunkWatch.watch([...this.ghostCells.filter(tI), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(kk) {
        this.burstUnlisted([]), kk > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = kk)
      }
      Dt() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const kk = performance.now();
        let Fk = !1;
        for (const [Tk, ik] of this.foreseen) {
          var Ik;
          if (kk - ik > 1e3) this.foreseen.delete(Tk), Fk = !0, (null === (Ik = this.lastFilled) || void 0 === Ik ? void 0 : Ik.join()) === Tk && (this.lastFilled = this.lastSeenFilled)
        }
        const Xk = LI(this.api.getPositionView(this.localPlayerId));
        (Fk || Xk.some(((kk, Fk) => kk !== this.playerCells[Fk]))) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(kk) {
        const Fk = new Set;
        for (let Tk = 0; Tk < kk.length; Tk += 4) Fk.add(`${kk[Tk]},${kk[Tk+1]},${kk[Tk+2]}`);
        const Ik = [],
          {
            ghostCells: Xk
          } = this;
        for (let Tk = 0; Tk < Xk.length; Tk += 4) {
          const kk = `${Xk[Tk]},${Xk[Tk+1]},${Xk[Tk+2]}`;
          !Fk.has(kk) && this.open.delete(kk) && Ik.push(this.filledCell(Tk))
        }
        this.burst(Ik)
      }
      refresh() {
        const {
          ghostCells: kk,
          palette: Fk,
          occupiedCells: Ik
        } = this, Xk = new II, Tk = new Set, ik = [], yk = [];
        for (let lk = 0; lk < kk.length; lk += 4) {
          const [Ik, ak, qk, Lk] = [kk[lk], kk[lk + 1], kk[lk + 2], kk[lk + 3]], tk = this.api.getBlockId(Ik, ak, qk), Zk = `${Ik},${ak},${qk}`, jk = EF(this.blockIds[Lk], tk);
          !jk && OF(tk) ? Xk.add(Ik, ak, qk, GF(Fk[Lk]), MF, cF(Fk[Lk])) : jk ? this.open.has(Zk) && ik.push(this.filledCell(lk)) : Xk.add(Ik, ak, qk, FI, kI), !jk && this.api.isBlockInLoadedChunk(Ik, ak, qk) && (Tk.add(Zk), yk.push(Ik, ak, qk, OF(tk) ? 0 : 1))
        }
        this.open = Tk, this.nextCells = yk;
        for (let lk = 0; lk < Ik.length; lk += 3) {
          const [kk, Fk, Tk] = [Ik[lk], Ik[lk + 1], Ik[lk + 2]];
          OF(this.api.getBlockId(kk, Fk, Tk)) || Xk.add(kk, Fk, Tk, FI, kI)
        }
        this.meshes.show(Xk.toArray()), this.burst(ik), this.showNext(), this.turn.retry(performance.now())
      }
      burst(kk) {
        const Fk = performance.now(),
          Ik = [];
        for (const [Tk, ik, yk] of kk) {
          const kk = [Tk, ik, yk];
          this.lastSeenFilled = kk, this.foreseen.delete(kk.join()) || Ik.push(kk)
        }
        const Xk = this.isHolding(Fk);
        for (const Tk of Ik) {
          if (this.lastFilled = Tk, Xk && this.pressFilled) {
            this.turn.filled(Tk, Fk);
            continue
          }
          const kk = this.turn.arrived(Tk, Fk);
          if (null !== kk) {
            this.pressFilled = Xk;
            for (const [Fk, Ik] of this.foreseen) Ik <= kk && this.foreseen.delete(Fk)
          }
        }
        this.juice.filled(kk)
      }
      showNext() {
        var kk;
        const Fk = this.api.getPositionView(this.localPlayerId);
        this.playerCells.splice(0, 1 / 0, ...LI(Fk));
        const Ik = this.lastFilled;
        this.nextCell = this.pickNext(null === Ik ? [Fk[0], Fk[1] + 1, Fk[2]] : (0, WF.c)(Ik), (() => !1)), this.outline.show(null !== (kk = this.aimed) && void 0 !== kk ? kk : this.nextCell)
      }
      pickNext(kk, Fk) {
        const Ik = this.api.getPositionView(this.localPlayerId),
          Xk = [Ik[0], Ik[1] + fF.f.NH * fF.f.playerEyeToHeightRatio, Ik[2]],
          Tk = lI(this.api, this.localPlayerId),
          {
            nextCells: ik
          } = this,
          yk = kk => [ik[kk], ik[kk + 1], ik[kk + 2]],
          lk = function(kk, Fk, Ik, Xk, Tk, ik) {
            let yk = -1,
              lk = -1,
              ak = 1 / 0;
            for (let qk = 0; qk < kk.length; qk += Fk) {
              const Fk = (ik(qk) ? 2 : 0) + (Xk(qk) ? 1 : 0);
              if (Fk < lk || Tk(qk)) continue;
              const Lk = (kk[qk] + .5 - Ik[0]) ** 2 + (kk[qk + 1] + .5 - Ik[1]) ** 2 + (kk[qk + 2] + .5 - Ik[2]) ** 2;
              (Fk > lk || Lk < ak) && (yk = qk, lk = Fk, ak = Lk)
            }
            return yk
          }(ik, 4, kk, (kk => 1 === ik[kk + 3]), (kk => {
            const Xk = yk(kk);
            return BF(Xk, Ik) || this.foreseen.has(Xk.join()) || Fk(Xk)
          }), (kk => function(kk, Fk, Ik) {
            return (Fk[0] + .5 - kk[0]) ** 2 + (Fk[1] + .5 - kk[1]) ** 2 + (Fk[2] + .5 - kk[2]) ** 2 <= Ik ** 2
          }(Xk, yk(kk), Tk)));
        return -1 === lk ? null : yk(lk)
      }
      afterRender(kk) {
        var Fk;
        this.turn.look(kk);
        const Ik = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === Ik ? null : Ik.position), this.outline.show(null !== (Fk = this.aimed) && void 0 !== Fk ? Fk : this.nextCell)
      }
      isHolding(kk) {
        return null !== this.altMs && kk - this.altMs <= 500
      }
      attemptAltAction(kk) {
        const Fk = performance.now();
        if (this.isHolding(Fk) || (this.pressFilled = !1), this.altMs = Fk, this.pressFilled) return "preventPlacement";
        const Ik = this.findAimed(kk);
        if (null !== Ik) return this.foreseen.set(Ik.join(), Fk), this.lastFilled = Ik, this.aimed = null, this.showNext(), this.turn.filled(Ik, Fk), this.pressFilled = !0, "preventPlacement";
        null !== this.nextCell && this.turn.tapped(kk, this.nextCell, Fk)
      }
      findAimed(kk) {
        return function(kk, Fk, Ik, Xk, Tk, ik, yk) {
          const lk = kk.BFk(Fk),
            ak = null === lk || null === kk.blockNameToBlockId(lk.name, !0) ? null : lk.name,
            qk = kk.getPositionView(Fk),
            {
              origin: Lk,
              direction: tk
            } = kk.getActionRay(),
            Zk = dF(Xk, {
              from: Lk,
              dir: tk,
              reach: lI(kk, Fk),
              solid: Ik
            }, (Fk => {
              const Ik = [Xk[Fk], Xk[Fk + 1], Xk[Fk + 2]];
              return !EF(Tk[Xk[Fk + 3]], kk.getBlockId(...Ik)) && !yk.has(Ik.join()) && kk.isBlockInLoadedChunk(...Ik) && !BF(Ik, qk)
            }), (kk => null === ak || ak === nF(Tk[Xk[kk + 3]])), (kk => null !== ik && Xk[kk] === ik[0] && Xk[kk + 1] === ik[1] && Xk[kk + 2] === ik[2]));
          return -1 === Zk ? null : [Xk[Zk], Xk[Zk + 1], Xk[Zk + 2]]
        }(this.api, this.localPlayerId, kk, this.ghostCells, this.blockIds, this.nextCell, this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(kk) {
        const {
          ghostCells: Fk
        } = this, [Ik, Xk, Tk] = GF(this.palette[Fk[kk + 3]]);
        return [Fk[kk], Fk[kk + 1], Fk[kk + 2], Ik, Xk, Tk]
      }
    }

    function LI(kk) {
      let [Fk, Ik, Xk] = kk;
      const Tk = fF.f.CH / 2;
      return [Math.floor(Fk), Math.floor(Ik), Math.floor(Xk), Math.floor(Fk - Tk), Math.floor(Fk + Tk), Math.floor(Ik + fF.f.NH), Math.floor(Xk - Tk), Math.floor(Xk + Tk)]
    }

    function tI(kk, Fk) {
      return Fk % 4 !== 3
    }

    function ZI(kk, Fk, Ik, Xk, Tk) {
      if (!kk.isBlockInLoadedChunk(Fk, Xk - 6, Ik) || !kk.isBlockInLoadedChunk(Fk, Xk + 6 + Tk, Ik) || !kk.canModifyBlockAt(Fk, Xk, Ik)) return NaN;
      let ik = Xk - 1;
      if (0 !== kk.getBlockId(Fk, ik, Ik)) {
        for (; ik < Xk + 6 && 0 !== kk.getBlockId(Fk, ik + 1, Ik);) ik++;
        return ik
      }
      for (; ik > Xk - 6;)
        if (ik--, 0 !== kk.getBlockId(Fk, ik, Ik)) return ik;
      return NaN
    }

    function jI(kk, Fk, Ik, Xk, Tk) {
      let ik = 0;
      for (let yk = Xk + 1; yk <= Xk + Tk; yk++) 0 !== kk.getBlockId(Fk, yk, Ik) && ik++;
      return ik
    }

    function eI(kk) {
      const Fk = new Map;
      for (const yk of kk) {
        var Ik;
        if (Number.isNaN(yk)) return null;
        Fk.set(yk, (null !== (Ik = Fk.get(yk)) && void 0 !== Ik ? Ik : 0) + 1)
      }
      let Xk = NaN,
        Tk = 0;
      for (const [yk, lk] of Fk)(lk > Tk || lk === Tk && yk < Xk) && (Xk = yk, Tk = lk);
      let ik = 0;
      for (const yk of kk) ik += Math.abs(yk - Xk);
      return ik
    }

    function wI(kk, Fk, Ik, Xk) {
      const {
        eye: Tk,
        forward: ik,
        tanHalfFovX: yk,
        tanHalfFovY: lk
      } = kk, [ak, qk] = function(kk) {
        let [Fk, Ik, Xk] = kk;
        const Tk = Math.hypot(Fk, Xk),
          [ik, yk] = [Xk / Tk, -Fk / Tk];
        return [
          [ik, 0, yk],
          [Ik * yk, Xk * ik - Fk * yk, -Ik * ik]
        ]
      }(ik), [Lk, tk] = [Fk * yk, Ik * lk], Zk = ik[0] + Lk * ak[0] + tk * qk[0], jk = ik[1] + tk * qk[1], ek = ik[2] + Lk * ak[2] + tk * qk[2], wk = (Xk - Tk[1]) / jk;
      return wk > 0 && wk < 1 / 0 ? [Tk[0] + wk * Zk, Tk[2] + wk * ek] : null
    }
    const HI = "plotsBlueprintPlacementChanged",
      JI = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class xI {
      constructor(kk, Fk) {
        this.api = kk, this.localPlayerId = Fk, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = kk => {
          var Fk, Ik, Xk, ik;
          const yk = null !== (Fk = null === (Ik = this.placing) || void 0 === Ik ? void 0 : Ik.rotation) && void 0 !== Fk ? Fk : 0,
            {
              size: lk
            } = Bk(kk, yk),
            ak = this.api.OJ(this.localPlayerId),
            [qk, Lk] = null !== (Xk = null !== (ik = function(kk, Fk, Ik) {
              const [Xk, Tk, ik] = Fk, [yk, lk, ak] = [Math.floor(Ik[0]), Math.floor(Ik[1]), Math.floor(Ik[2])], qk = 6 + Math.max(Xk, ik) / 2, [Lk, tk] = [Math.ceil(qk + Xk / 2), Math.ceil(qk + ik / 2)], [Zk, jk] = [yk - Lk, ak - tk], [ek, wk] = [2 * Lk + 1, 2 * tk + 1], Hk = new Float64Array(ek * wk), Jk = new Uint16Array(ek * wk);
              for (let Qk = 0; Qk < ek; Qk++)
                for (let Fk = 0; Fk < wk; Fk++) {
                  const Ik = ZI(kk, Zk + Qk, jk + Fk, lk, Tk);
                  Hk[Qk * wk + Fk] = Ik, Number.isNaN(Ik) || (Jk[Qk * wk + Fk] = jI(kk, Zk + Qk, jk + Fk, Ik, Tk))
                }
              const xk = [];
              let Pk = null,
                Kk = 1 / 0;
              for (let Qk = 0; Qk + Xk <= ek; Qk++)
                for (let kk = 0; kk + ik <= wk; kk++) {
                  const [Fk, Tk] = [Zk + Qk, jk + kk], lk = Math.hypot(Fk + Xk / 2 - Ik[0], Tk + ik / 2 - Ik[2]);
                  if (lk > qk || yk >= Fk - 2 && yk < Fk + Xk + 2 && ak >= Tk - 2 && ak < Tk + ik + 2) continue;
                  xk.length = 0;
                  let Lk = 0;
                  for (let Ik = 0; Ik < Xk; Ik++)
                    for (let Fk = 0; Fk < ik; Fk++) xk.push(Hk[(Qk + Ik) * wk + kk + Fk]), Lk += Jk[(Qk + Ik) * wk + kk + Fk];
                  const tk = eI(xk);
                  if (null === tk) continue;
                  const ek = lk + 3 * (tk + Lk);
                  ek < Kk && (Kk = ek, Pk = [Fk, Tk])
                }
              return Pk
            }(this.api, lk, ak)) && void 0 !== ik ? ik : this.cornerOnTarget(lk)) && void 0 !== Xk ? Xk : [Math.floor(ak[0]) + 2, Math.floor(ak[2])];
          this.placing = {
            id: kk,
            rotation: yk,
            corner: [qk, this.playerLevel(), Lk],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null
          }, this.update(), this.api.sendCommand(`${Tk} preview`)
        }, this.rotate = () => {
          const {
            id: kk,
            rotation: Fk,
            corner: Ik
          } = this.placing, Tk = Xk[(Xk.indexOf(Fk) + 1) % Xk.length], [ik, , yk] = Bk(kk, Fk).size, [lk, , ak] = Bk(kk, Tk).size;
          this.moveTo(Ik[0] + Math.floor(ik / 2) - Math.floor(lk / 2), Ik[2] + Math.floor(yk / 2) - Math.floor(ak / 2), Tk)
        }, this.hoverAt = (kk, Fk) => {
          this.placing.hover = [kk, Fk], this.moveCentreTo(this.camera, kk, Fk)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (kk, Fk) => {
          const Ik = this.placing,
            {
              eye: Xk,
              forward: Tk,
              tanHalfFovX: ik,
              tanHalfFovY: yk
            } = this.camera,
            lk = {
              eye: [Xk[0], Xk[1], Xk[2]],
              forward: [Tk[0], Tk[1], Tk[2]],
              tanHalfFovX: ik,
              tanHalfFovY: yk
            },
            ak = Ik.corner[1],
            qk = wI(lk, kk, Fk, ak);
          Ik.hover = null, Ik.drag = qk && {
            view: lk,
            ground: qk,
            corner: [Ik.corner[0], Ik.corner[2]],
            level: ak
          }
        }, this.dragTo = (kk, Fk) => {
          const Ik = this.placing.drag,
            Xk = Ik && wI(Ik.view, kk, Fk, Ik.level);
          null !== Ik && null !== Xk && this.moveTo(Ik.corner[0] + Math.round(Xk[0] - Ik.ground[0]), Ik.corner[1] + Math.round(Xk[1] - Ik.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const kk = this.view;
          kk.waiting || (kk.blocked ? this.GL({
            ...kk,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const kk = this.placing,
            {
              id: Fk,
              rotation: Ik,
              corner: Xk
            } = kk;
          this.api.sendCommand(`${Tk} place ${Fk} ${Xk.join(" ")} ${Ik}`), kk.sent = {
            atMs: performance.now(),
            corner: [...Xk],
            rotation: Ik,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${Tk} preview off`))
        }, this.chunkWatch = new rF(kk), this.meshes = new XI(kk)
      }
      getView() {
        return this.view
      }
      Dt() {
        const kk = this.placing;
        null !== kk && (null !== kk.sent && !kk.sent.timedOut && performance.now() - kk.sent.atMs > 3e3 ? (kk.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(kk) || this.chunkWatch.changed()) && this.update())
      }
      afterRender(kk) {
        const Fk = this.placing;
        null !== Fk && (! function(kk, Fk) {
          for (let Ik = 0; Ik < 3; Ik++) Fk.eye[Ik] = kk.cameraPosition[Ik], Fk.forward[Ik] = kk.cameraDirection[Ik];
          Fk.tanHalfFovX = kk.tanHalfFovX, Fk.tanHalfFovY = kk.tanHalfFovY
        }(kk, this.camera), null !== Fk.hover && this.moveCentreTo(this.camera, Fk.hover[0], Fk.hover[1]))
      }
      Pe(kk) {
        const Fk = this.placing;
        if (null === Fk || null === Fk.sent || "active" !== kk[0]) return;
        const {
          sent: Ik
        } = Fk, [, Xk, Tk, ik, yk, lk, ak] = kk;
        Tk && Xk === Fk.id && ak === Ik.rotation && ik === Ik.corner[0] && yk === Ik.corner[1] && lk === Ik.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(kk) {
        let [Fk, , Ik] = kk;
        const Xk = this.api.getTargetedBlock();
        if (null === Xk) return null;
        const [Tk, , ik] = Xk.position;
        return [Tk - Math.floor(Fk / 2), ik - Math.floor(Ik / 2)]
      }
      playerLevel() {
        var kk;
        const [Fk, Ik, Xk] = this.api.OJ(this.localPlayerId);
        if (null !== (kk = this.api.getLocalPlayerMovement()) && void 0 !== kk && kk.onGround) return Math.ceil(Ik - .01);
        const [Tk, ik, yk] = [Math.floor(Fk), Math.floor(Ik), Math.floor(Xk)];
        for (let lk = ik; lk >= ik - 2; lk--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(Tk, lk, yk))) return lk + 1;
        return ik
      }
      followPlayerLevel(kk) {
        if (PI(kk)) return !1;
        const Fk = this.playerLevel();
        return Fk !== kk.corner[1] && (kk.corner[1] = Fk, !0)
      }
      moveCentreTo(kk, Fk, Ik) {
        const Xk = this.placing,
          Tk = wI(kk, Fk, Ik, Xk.corner[1]);
        if (null !== Tk) {
          const [kk, , Fk] = Bk(Xk.id, Xk.rotation).size;
          this.moveTo(Math.round(Tk[0] - kk / 2), Math.round(Tk[1] - Fk / 2))
        }
      }
      moveTo(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const Xk = this.placing;
        if (PI(Xk)) return;
        const [Tk, ik, yk] = Xk.corner;
        if (this.centreOnPlot(Tk, yk) && !this.centreOnPlot(kk, Fk, Ik))
          if (this.centreOnPlot(kk, yk, Ik)) Fk = yk;
          else {
            if (!this.centreOnPlot(Tk, Fk, Ik)) return;
            kk = Tk
          } kk === Tk && Fk === yk && Ik === Xk.rotation || (Xk.rotation = Ik, Xk.corner = [kk, ik, Fk], this.update())
      }
      centreOnPlot(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: Xk,
          corner: Tk
        } = this.placing, [ik, , yk] = Bk(Xk, Ik).size;
        return this.api.canModifyBlockAt(kk + Math.floor(ik / 2), Tk[1], Fk + Math.floor(yk / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.GL(null)
      }
      update() {
        const {
          id: kk,
          rotation: Fk,
          corner: Ik,
          refusals: Xk
        } = this.placing, Tk = new II, ik = [];
        let yk = !1,
          lk = 0;
        for (const {
            offset: Lk,
            block: tk
          }
          of Bk(kk, Fk).cells) {
          const [kk, Fk, Xk] = [Ik[0] + Lk[0], Ik[1] + Lk[1], Ik[2] + Lk[2]];
          ik.push(kk, Fk, Xk);
          const ak = !this.api.canModifyBlockAt(kk, Fk, Xk),
            qk = this.api.getBlockId(kk, Fk, Xk),
            Zk = !OF(qk) && !EF(this.api.blockNameToBlockId(tk), qk);
          yk ||= ak, lk += Zk ? 1 : 0, ak || Zk ? Tk.add(kk, Fk, Xk, FI, kI) : Tk.add(kk, Fk, Xk, GF(tk), JI, cF(tk))
        }
        this.chunkWatch.watch(ik), this.meshes.show(Tk.toArray());
        const ak = this.view,
          qk = PI(this.placing);
        (null === ak || void 0 === ak ? void 0 : ak.id) === kk && ak.blocked === yk && ak.toClear === lk && ak.waiting === qk && ak.refusals === Xk || this.GL({
          id: kk,
          blocked: yk,
          toClear: lk,
          waiting: qk,
          refusals: Xk
        })
      }
      GL(kk) {
        this.view = kk, Lk.g.GL(HI, kk, !0)
      }
    }

    function PI(kk) {
      let {
        sent: Fk
      } = kk;
      return null !== Fk && !Fk.timedOut
    }
    var KI = Ik(4210),
      QI = Ik(39154);

    function sI(kk, Fk, Ik) {
      const Xk = [255 * kk, 255 * Fk, 255 * Ik],
        [Tk, ik, yk] = Xk.map((kk => kk + .4 * (255 - kk)));
      return {
        texture: "square_particle",
        St: 48,
        minLifeTime: .3 / QI.e,
        maxLifeTime: .55 / QI.e,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * QI.e * QI.e, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...Xk, 1],
          maxColor: [Tk, ik, yk, 1]
        }, {
          timeFraction: 1,
          minColor: [...Xk, 0],
          maxColor: [Tk, ik, yk, 0]
        }],
        blendMode: KI.d.Standard
      }
    }
    const VI = {
      texture: "glint",
      mipmaps: !1,
      St: 96,
      minLifeTime: .5 / QI.e,
      maxLifeTime: .9 / QI.e,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * QI.e * QI.e, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: KI.d.OneOne
    };
    class zI {
      constructor(kk, Fk) {
        this.api = kk, this.localPlayerId = Fk, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(kk) {
        if (this.api.particlesEnabled())
          for (const [Fk, Ik, Xk, Tk, ik, yk] of kk.slice(0, 3)) {
            const kk = `${Tk},${ik},${yk}`;
            let lk = this.chips.get(kk);
            void 0 === lk && (lk = this.api.createParticles(sI(Tk, ik, yk), {
              pos: [Fk + .5, Ik + .5, Xk + .5]
            }), this.chips.set(kk, lk));
            for (let Fk = 0; Fk < 8; Fk++) this.setPoint(Fk, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            lk.emitPoints([Fk + .5, Ik + .5, Xk + .5], this.points, 8)
          }
      }
      layerDone(kk) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const Fk = kk.length / 3;
        if (0 === Fk || !this.api.particlesEnabled()) return;
        const Ik = Math.min(Fk, 48),
          [Xk, Tk, ik] = [kk[0] + .5, kk[1] + 1, kk[2] + .5];
        let yk = 0;
        for (let lk = 0; lk < Ik; lk++) {
          const ak = 3 * Math.floor(lk * Fk / Ik);
          for (let Fk = 0; Fk < 2; Fk++) this.setPoint(yk++, kk[ak] + Math.random() - Xk, kk[ak + 1] + 1 - Tk, kk[ak + 2] + Math.random() - ik, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(VI, {
          pos: [Xk, Tk, ik]
        }), this.sparkles.emitPoints([Xk, Tk, ik], this.points, yk)
      }
      dispose() {
        var kk;
        for (const Fk of this.chips.values()) Fk.stop();
        this.chips.clear(), null === (kk = this.sparkles) || void 0 === kk || kk.stop(), this.sparkles = null
      }
      setPoint(kk, Fk, Ik, Xk, Tk) {
        const ik = 4 * kk;
        this.points[ik] = Fk, this.points[ik + 1] = Ik, this.points[ik + 2] = Xk, this.points[ik + 3] = Tk
      }
    }
    var SI = Ik(1916);
    const oI = "SpecialAction1",
      vI = "KeyY",
      EI = "KeyX";

    function OI(kk) {
      let {
        placement: Fk
      } = kk;
      const Ik = (0, Ek.f)(HI, Fk.getView()),
        {
          t: Xk
        } = (0, nk.y)(),
        {
          isTouchScreen: Tk
        } = (0, lk.j)(["isTouchScreen"]),
        ik = null !== Ik,
        yk = ik && !Ik.blocked && !Ik.waiting;
      if ((0, vk.b)((kk => ik && !kk.repeat && !(0, qk.isTypingInInput)() && !(0, ak.p)() && !Tk), (kk => {
          const Ik = function(kk, Fk, Ik) {
            if (kk === EI) return Fk.stop;
            if (kk === vI) return Ik ? Fk.build : GI;
            return SI.s[oI].includes(kk) ? Fk.rotate : null
          }(kk.code, Fk, yk);
          null !== Ik && (kk.stopPropagation(), Ik())
        })), !ik) return null;
      let Lk = Tk ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return Ik.blocked ? Lk = "plotsGame:placementOffPlot" : Ik.toClear > 0 && (Lk = "plotsGame:placementClear"), (0, Yk.jsx)(lF.f, {
        placement: "bottom",
        children: (0, Yk.jsxs)("div", {
          className: "PlotsPlacementCard",
          children: [(0, Yk.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: Xk(ek(Ik.id).displayName.translationKey)
          }), (0, Yk.jsx)("div", {
            className: sk()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: Ik.refusals > 0
            }),
            children: Xk(Lk)
          }, Ik.refusals), (0, Yk.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, Yk.jsxs)(zk.d, {
              onClick: Fk.rotate,
              children: [(0, Yk.jsx)(nI, {
                noaAction: oI
              }), Xk("plotsGame:placementRotate")]
            }), (0, Yk.jsxs)(zk.G, {
              onClick: Fk.stop,
              children: [(0, Yk.jsx)(nI, {
                keyCode: EI
              }), Xk("general:cancel")]
            }), (0, Yk.jsxs)(zk.m, {
              disabled: !yk,
              onClick: Fk.build,
              children: [(0, Yk.jsx)(nI, {
                keyCode: vI
              }), Xk("plotsGame:placementBuild")]
            })]
          })]
        })
      })
    }

    function nI(kk) {
      return (0, Yk.jsx)(qF.c, {
        className: "PlotsPlacementKey",
        ...kk
      })
    }

    function GI() {}
    var pI = Ik(4529);
    class uI {
      constructor(kk) {
        this.placement = kk, this.press = null
      }
      down(kk) {
        if (null !== this.press) return !1;
        const {
          id: Fk,
          mouse: Ik,
          x: Xk,
          y: Tk,
          atMs: ik
        } = kk;
        return this.press = {
          id: Fk,
          mouse: Ik,
          x: Xk,
          y: Tk,
          atMs: ik,
          moved: !1
        }, Ik || this.placement.beginDrag(kk.ndcX, kk.ndcY), !0
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
          mouse: Ik
        } = kk;
        Ik && this.placement.endHover(), this.cancel(Fk)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }

    function bI(kk) {
      let {
        placement: Fk
      } = kk;
      return null === (0, Ek.f)(HI, Fk.getView()) ? null : (0, Yk.jsx)(RI, {
        placement: Fk
      })
    }

    function RI(kk) {
      let {
        placement: Fk
      } = kk;
      (0, pI.e)(!0, !0, "PlotsPlacementLayer");
      const Ik = (0, ik.useMemo)((() => new uI(Fk)), [Fk]);
      return (0, Yk.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: kk => {
          "mouse" === kk.pointerType && 0 !== kk.button || !Ik.down(UI(kk)) || kk.currentTarget.setPointerCapture(kk.pointerId)
        },
        onPointerMove: kk => {
          Ik.move(UI(kk))
        },
        onPointerUp: kk => {
          Ik.up(UI(kk))
        },
        onPointerCancel: kk => {
          Ik.cancel(kk.pointerId)
        },
        onLostPointerCapture: kk => {
          Ik.cancel(kk.pointerId)
        },
        onPointerLeave: kk => {
          Ik.leave(UI(kk))
        },
        "aria-hidden": !0
      })
    }

    function UI(kk) {
      const {
        left: Fk,
        top: Ik,
        width: Xk,
        height: Tk
      } = kk.currentTarget.getBoundingClientRect();
      return {
        id: kk.pointerId,
        mouse: "mouse" === kk.pointerType,
        x: kk.clientX,
        y: kk.clientY,
        ndcX: (kk.clientX - Fk) / Xk * 2 - 1,
        ndcY: 1 - (kk.clientY - Ik) / Tk * 2,
        atMs: kk.timeStamp
      }
    }
    var CI = Ik(2300),
      NI = Ik(36691),
      cI = Ik(1907),
      WI = Ik(1248);
    const fI = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function BI(kk) {
      let {
        hud: Fk
      } = kk;
      const Ik = (0, Ek.f)(tF, Fk.getPlot()),
        [Xk, Tk] = (0, ik.useState)(null),
        yk = (0, NI.m)(Xk);
      if ("none" === Ik[0]) return null;
      const [, lk, ak, qk, Lk, tk] = Ik;
      return (0, Yk.jsx)("div", {
        className: sk()("PlotsPlotBannerContainer", {
          Below: yk
        }),
        children: (0, Yk.jsx)(dI, {
          plotX: lk,
          plotZ: ak,
          ownerName: qk,
          ownerId: Lk,
          relation: tk,
          plaqueRef: Tk
        }, `${lk},${ak}`)
      })
    }

    function dI(kk) {
      var Fk, Ik;
      let {
        plotX: Xk,
        plotZ: Tk,
        ownerName: ik,
        ownerId: yk,
        relation: lk,
        plaqueRef: ak
      } = kk;
      const {
        t: qk
      } = (0, nk.y)(), Lk = (0, cI.k)("hiddenPlayerNames"), tk = (0, cI.k)("players"), Zk = null === yk ? null : null !== (Fk = null === (Ik = tk.byId[yk]) || void 0 === Ik ? void 0 : Ik.cosmetics) && void 0 !== Fk ? Fk : null, jk = qk("plotsGame:plotBannerCoords", {
        x: Xk,
        z: Tk
      }), ek = "own" === lk || null !== ik;
      return (0, Yk.jsxs)("div", {
        ref: ak,
        className: sk()("PlotsPlotBanner", {
          Own: "own" === lk,
          Shared: "shared" === lk
        }),
        role: "status",
        children: [(0, Yk.jsxs)("span", {
          className: sk()("PlotsPlotBannerSeal", {
            Face: null !== Zk
          }),
          children: [null !== Zk && (0, Yk.jsx)(CI.e, {
            cosmetics: Zk
          }), null === Zk && (0, Yk.jsx)(Vk.e, {
            name: fI[lk]
          })]
        }), (0, Yk.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, Yk.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === lk && qk("plotsGame:plotBannerYours"), "own" !== lk && null !== ik && qk("plotsGame:plotBannerOwner", {
              name: (0, WI.d)(ik, Lk)
            }), !ek && jk]
          }), ek && (0, Yk.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [jk, "shared" === lk && (0, Yk.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: qk("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }

    function YI(kk) {
      let {
        progress: Fk,
        goal: Ik
      } = kk;
      const Xk = Math.min(Fk, Ik);
      return (0, Yk.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, Yk.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": Ik,
          "aria-valuenow": Xk,
          children: (0, Yk.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${Xk/Ik})`
            }
          })
        }), (0, Yk.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [Xk, "/", Ik]
        })]
      })
    }

    function AI(kk) {
      return {
        translationKey: `plotsGame:${kk}`,
        actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
      }
    }
    const gI = {
      house: {
        icon: "house",
        titleKey: "plotsGame:starterLotHouseTitle",
        desktop: AI("starterLotHouseHint", ["alt-fire"]),
        touch: AI("starterLotHouseHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotHousePlain"
      },
      garden: {
        icon: "sparkle",
        titleKey: "plotsGame:starterLotGarden",
        desktop: AI("starterLotGardenHint", ["alt-fire"]),
        touch: AI("starterLotGardenHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotGardenPlain"
      },
      boulder: {
        icon: "hammer",
        titleKey: "plotsGame:starterLotBoulder",
        desktop: AI("starterLotBreakHint", ["primary-fire"]),
        touch: AI("starterLotBreakHintTouch"),
        plainKey: "plotsGame:starterLotBreakPlain"
      },
      fly: {
        icon: "angles-up",
        titleKey: "plotsGame:starterLotFly",
        desktop: AI("starterLotFlyHint", ["jump"]),
        touch: AI("starterLotFlyHintTouch"),
        plainKey: "plotsGame:starterLotFlyPlain"
      },
      backpack: {
        icon: "backpack",
        titleKey: "plotsGame:starterLotBackpack",
        desktop: AI("starterLotBackpackHint", ["OpenInventory"]),
        touch: AI("starterLotBackpackHintTouch"),
        plainKey: "plotsGame:starterLotBackpackPlain"
      },
      neighbour: {
        icon: "person",
        titleKey: "plotsGame:starterLotNeighbour",
        desktop: AI("starterLotNeighbourHint", ["forward", "left", "backward", "right"]),
        touch: AI("starterLotNeighbourHintTouch"),
        plainKey: "plotsGame:starterLotNeighbourPlain"
      }
    };

    function mI(kk, Fk, Ik) {
      const {
        translationKey: Xk,
        actions: Tk
      } = Ik ? Fk.touch : Fk.desktop;
      if (0 === Tk.length) return kk(Xk);
      const ik = [];
      for (const yk of Tk) {
        const Xk = (0, SI.r)(yk, Ik),
          Tk = SI.s[yk][0];
        if (null === Xk && void 0 === Tk) return kk(Fk.plainKey);
        ik.push(null === Xk ? (0, SI.n)(Tk) : kk(Xk.translationKey))
      }
      return kk(Xk, {
        key: ik.join("")
      })
    }

    function hI(kk) {
      let {
        hud: Fk
      } = kk;
      const Ik = (0, Ek.f)(LF, Fk.getStep()),
        {
          t: Xk
        } = (0, nk.y)();
      return (0, Yk.jsxs)(lF.f, {
        placement: "bottom",
        children: ["step" === Ik[0] && (0, Yk.jsx)(rI, {
          step: Ik[1],
          progress: Ik[2],
          goal: Ik[3]
        }, Ik[1]), "celebrate" === Ik[0] && (0, Yk.jsx)(DI, {
          className: sk()("Celebrate", {
            Gold: "house" === Ik[1]
          }),
          icon: "star",
          title: Xk("house" === Ik[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
        }, `celebrate-${Ik[1]}`)]
      })
    }

    function rI(kk) {
      let {
        step: Fk,
        progress: Ik,
        goal: Xk
      } = kk;
      const {
        isTouchScreen: Tk
      } = (0, lk.j)(["isTouchScreen"]), {
        t: ik
      } = (0, nk.y)(), yk = gI[Fk];
      return (0, Yk.jsxs)(DI, {
        icon: yk.icon,
        title: ik(yk.titleKey),
        children: [(0, Yk.jsx)("div", {
          className: "PlotsStepCardHint SmallTextLight",
          children: mI(ik, yk, Tk)
        }), Xk > 1 && (0, Yk.jsx)(YI, {
          progress: Ik,
          goal: Xk
        }), "backpack" === Fk && Tk && (0, Yk.jsx)(MI, {})]
      })
    }

    function DI(kk) {
      let {
        className: Fk,
        icon: Ik,
        title: Xk,
        children: Tk
      } = kk;
      return (0, Yk.jsxs)("div", {
        className: sk()("PlotsStepCard", Fk),
        role: "status",
        children: [(0, Yk.jsx)("span", {
          className: "PlotsStepCardIcon",
          children: (0, Yk.jsx)(Vk.e, {
            name: Ik
          })
        }), (0, Yk.jsxs)("div", {
          className: "PlotsStepCardBody",
          children: [(0, Yk.jsx)("div", {
            className: "PlotsStepCardTitle SmallTextBold",
            children: Xk
          }), Tk]
        })]
      })
    }

    function MI() {
      return (0, ik.useEffect)((() => (lk.d.set({
        backpackPointerRequested: !0
      }), () => {
        lk.d.set({
          backpackPointerRequested: !1
        })
      })), []), null
    }
    const kX = function(kk, Fk, Ik, Xk) {
      let {
        localPlayerId: Tk
      } = Xk;
      const lk = new ZF;
      let ak = null,
        qk = null,
        Lk = null,
        tk = null,
        Zk = null;
      const jk = [];
      return {
        onCreate: kk => {
          ak = new zI(kk, Tk), qk = new qI(kk, Tk, ak), Lk = new qI(kk, Tk, ak), tk = new xI(kk, Tk), Zk = new Kk(kk, tk), jk.push((0, yk.v)((0, ik.createElement)(ik.Fragment, null, (0, ik.createElement)(BI, {
            hud: lk
          }), (0, ik.createElement)(hI, {
            hud: lk
          }), (0, ik.createElement)(eF, {
            hud: lk,
            journal: Zk
          }), (0, ik.createElement)(bI, {
            placement: tk
          }), (0, ik.createElement)(OI, {
            placement: tk
          })), {
            content: (0, ik.createElement)(iF, {
              journal: Zk
            })
          }))
        },
        Dt: () => {
          qk.Dt(), Lk.Dt(), tk.Dt(), Zk.Dt()
        },
        onPlayerAttemptAltAction: (kk, Fk, Ik, Xk, Tk, ik) => {
          var yk;
          if (null !== ik) return;
          const lk = void 0 === Fk ? null : [Fk, Ik, Xk];
          return null !== (yk = qk.attemptAltAction(lk)) && void 0 !== yk ? yk : Lk.attemptAltAction(lk)
        },
        onPlayerClickUp: () => {
          qk.endPress(), Lk.endPress()
        },
        onAfterRender: (kk, Fk) => {
          tk.afterRender(Fk), qk.afterRender(Fk), Lk.afterRender(Fk)
        },
        onClose: () => {
          for (const kk of jk) kk();
          ak.dispose(), qk.dispose(), Lk.dispose(), tk.dispose(), ak = null, qk = null, Lk = null, tk = null, Zk = null
        },
        onReceivedMessageFromServer: (kk, Fk) => {
          if ("plotsStarterLot" === kk) lk.receiveStep(Fk);
          else if ("plotsPlot" === kk) lk.receivePlot(Fk);
          else if ("plotsStarterHouse" === kk) qk.Pe(Fk);
          else if ("plotsBlueprint" === kk) {
            const kk = Fk;
            Lk.Pe(kk), tk.Pe(kk)
          } else "plotsJournal" === kk ? Zk.Pe(Fk) : "plotsJournalOpen" === kk ? Zk.openFromServer() : "plotsPreviewEnd" === kk && tk.endFromServer()
        }
      }
    }
  },
  39154: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Xk,
      f: () => ik
    });
    const Xk = 1 / .6,
      Tk = {
        kind: "smokePuff"
      };
    class ik {
      constructor(kk, Fk, Ik) {
        this.style = kk, this.St = Fk, this.half = Ik, this.particles = null, this.lastFrame = -1
      }
      emit(kk, Fk, Ik) {
        let ik = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return Ik !== this.lastFrame && (this.lastFrame = Ik, this.particles || (this.particles = kk.createParticles(function(kk, Fk) {
          const [
            [Ik, ik, yk],
            [lk, ak, qk]
          ] = kk.colours;
          return {
            texture: kk.soft ? Tk : "square_particle",
            St: Fk,
            minLifeTime: kk.life[0] / Xk,
            maxLifeTime: kk.life[1] / Xk,
            minEmitPower: kk.power[0] * Xk,
            maxEmitPower: kk.power[1] * Xk,
            minSize: kk.size[0],
            maxSize: kk.size[1],
            emitRate: 0,
            gravity: [0, kk.lift * Xk * Xk, 0],
            dir1: [-kk.spread, 1, -kk.spread],
            dir2: [kk.spread, 1, kk.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Ik, ik, yk, kk.alpha],
              maxColor: [lk, ak, qk, kk.alpha]
            }, {
              timeFraction: 1,
              minColor: [Ik, ik, yk, 0],
              maxColor: [lk, ak, qk, 0]
            }],
            blendMode: kk.blendMode
          }
        }(this.style, this.St), {
          pos: Fk,
          half: this.half
        })), this.particles.moveTo(Fk, this.half), this.particles.emit(ik), !0)
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