export const id = 238;
export const ids = [238];
export const modules = {
  39175: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => fy
    });
    const Eu = [0, 90, 180, 270],
      Ku = "plotsblueprint";
    var Qu = yu(64),
      mu = yu(36445),
      Ju = yu(27),
      Nu = yu(1583),
      Xu = yu(1661),
      Vu = yu(34);
    const ru = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      Bu = {
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
      xu = ["small", "medium", "large"].flatMap((uu => ru.flat().filter((Ru => Bu[Ru].tier === uu))));

    function Su(uu) {
      return Bu[uu]
    }
    const pu = new Map(ru.flatMap((uu => uu.slice(1).map(((Ru, yu) => [Ru, uu[yu]])))));

    function Tu(uu) {
      var Ru;
      return null !== (Ru = pu.get(uu)) && void 0 !== Ru ? Ru : null
    }
    const Wu = {
      farm_hut: "plotsGame:journalNoteFarmHut",
      rusticHome_tent: "plotsGame:journalNoteRusticHomeTent",
      castle_tower: "plotsGame:journalNoteCastleTower",
      farm_house: "plotsGame:journalNoteFarmHouse",
      farm_barn: "plotsGame:journalNoteFarmBarn"
    };

    function ju(uu, Ru) {
      const yu = new Set(uu),
        Eu = function(uu) {
          const Ru = new Set(uu);
          return new Set(xu.filter((uu => {
            const yu = Tu(uu);
            return null === yu || Ru.has(yu)
          })))
        }(yu);
      return xu.map((uu => {
        const Ku = uu === Ru;
        return yu.has(uu) ? {
          id: uu,
          active: Ku,
          state: "completed",
          unlockedBy: null
        } : Eu.has(uu) ? {
          id: uu,
          active: Ku,
          state: "open",
          unlockedBy: null
        } : {
          id: uu,
          active: Ku,
          state: "locked",
          unlockedBy: Tu(uu)
        }
      }))
    }
    const Hu = "plotsJournalChanged";
    class du {
      constructor(uu, Ru) {
        this.api = uu, this.placement = Ru, this.pages = null, this.openRequested = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.Px("journal_opened")
        }, this.build = uu => {
          this.Px("placement_started"), this.placement.start(uu), (0, mu.f)()
        }, this.putAway = () => {
          this.api.sendCommand(`${Ku} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      SS(uu) {
        let [, Ru, yu] = uu;
        this.pages = ju(Ru, yu), Vu.k.Op(Hu, this.pages, !0)
      }
      openFromServer() {
        this.openRequested = !0, this.sr()
      }
      sr() {
        this.openRequested && !Ju.d.get("loadingOverlayVisible") && (this.openRequested = !1, null === this.pages || (0, Nu.p)() || (0, Xu.isTypingInInput)() || null !== this.placement.getView() || (0, mu.q)())
      }
      Px(uu) {
        this.reported.has(uu) || (this.reported.add(uu), this.api.sendCommand(`${Ku} report ${uu}`))
      }
    }
    var bu = yu(1035),
      Cu = yu.n(bu),
      ku = yu(1043),
      eu = yu(1408),
      Au = yu(4301),
      Du = yu(3214),
      Mu = yu(1400),
      Iu = yu(2003),
      Gu = yu(1170),
      Uu = yu(9158);
    const nu = [0, 90, 180, 270],
      su = /^(meta\|rot\d)\|([lrud]+)$/,
      tu = "nesw",
      lu = /^meta\|([nesw]*)\|?(Stacked)?$/,
      gu = function(uu) {
        const Ru = new WeakMap;
        return (yu, Eu) => {
          let Ku = Ru.get(yu);
          return void 0 === Ku && (Ku = uu(yu, Eu), Ru.set(yu, Ku)), Ku
        }
      }((uu => new cu(uu)));
    class cu {
      constructor(uu) {
        this.blockMetadata = uu, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const Ru = new Set(Object.keys(uu).map((Ru => uu[Ru].id)));
        Ru.add(0), this.maxBlockId = Math.max(...Ru)
      }
      static
      for (uu) {
        return gu(uu)
      }
      getBlockIdMapping(uu, Ru) {
        const yu = this.getBlockIdMappingKey(uu, Ru);
        let Eu = this.blockIdMappings.get(yu);
        return void 0 === Eu && nu.includes(uu) && (Eu = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, uu, Ru), this.blockIdMappings.set(yu, Eu)), Eu
      }
      turnBlockId(uu, Ru, yu) {
        return this.mapBlockId(this.blockMetadata[uu], Ru, this.getRotationMapping(Ru, yu), yu)
      }
      getBlockIdMappingKey(uu, Ru) {
        return `r${uu}|m${Number(Ru)}`
      }
      createBlockIdMapping(uu, Ru, yu, Eu) {
        const Ku = new Uint16Array(Ru + 1),
          Qu = this.getRotationMapping(yu, Eu);
        for (const mu in uu) {
          const Ru = uu[mu];
          Ku[Ru.id] = this.mapBlockId(Ru, yu, Qu, Eu)
        }
        return Ku
      }
      getRotationMapping(uu, Ru) {
        const yu = Math.round(uu / 90),
          Eu = new Uint8Array(4);
        for (let Ku = 0; Ku < 4; Ku++) Eu[Ku] = (4 + Ku - yu) % 4;
        if (Ru) {
          let uu = Eu[0];
          Eu[0] = Eu[1], Eu[1] = uu, uu = Eu[2], Eu[2] = Eu[3], Eu[3] = uu
        }
        return Eu
      }
      mapBlockId(uu, Ru, yu, Eu) {
        var Ku;
        const {
          blockMetadata: Qu
        } = this, mu = Math.round(Ru / 90), {
          id: Ju,
          meta: Nu
        } = uu, {
          rot: Xu,
          rootName: Vu,
          metaStr: ru
        } = Nu;
        let Bu;
        const [, xu, Su] = null !== (Ku = lu.exec(ru)) && void 0 !== Ku ? Ku : [];
        if (void 0 !== xu) {
          var pu, Tu;
          Bu = null !== (pu = null === (Tu = Qu[`${Vu}|meta|${[tu.split("").filter(((uu,Ru)=>xu.split("").some((uu=>{const yu=tu.indexOf(uu);return((Eu?3-yu:yu)+mu)%4===Ru})))).join(""),Su].filter(Boolean).join("|")}`]) || void 0 === Tu ? void 0 : Tu.id) && void 0 !== pu ? pu : Ju
        } else if (null === Xu) Bu = Ju;
        else {
          var Wu, ju;
          const uu = yu[Xu - 1] + 1;
          let Ru = ru.replace(`rot${Xu}`, `rot${uu}`);
          Eu && Nu.stairsCorner && (Ru = Ru.replace(/(Left|Right)$/, (uu => "Left" === uu ? "Right" : "Left"))), Eu && "Chest" === Vu && (Ru = Ru.replace(/\|(left|right)$/, ((uu, Ru) => "left" === Ru ? "|right" : "|left")));
          const Ku = su.exec(Ru);
          if (Eu && null !== Ku) {
            const uu = "lrud".split("").filter((uu => Ku[2].includes("l" === uu ? "r" : "r" === uu ? "l" : uu)));
            Ru = `${Ku[1]}|${uu.join("")}`
          }
          const mu = `${Vu}|${Ru}`;
          if (Bu = null !== (Wu = null === (ju = Qu[mu]) || void 0 === ju ? void 0 : ju.id) && void 0 !== Wu ? Wu : null, null === Bu) {
            const uu = Qu[Vu];
            Bu = uu.rootMetaDesc === mu ? uu.id : Ju
          }
        }
        return Bu
      }
    }

    function Lu(uu, Ru, yu) {
      let {
        xRotationMappedOrigin: Eu,
        shouldSwapXZ: Ku
      } = yu;
      const Qu = Ku ? Ru : uu;
      return null === Eu ? Qu : Eu - Qu
    }

    function zu(uu, Ru, yu) {
      let {
        zRotationMappedOrigin: Eu,
        shouldSwapXZ: Ku
      } = yu;
      const Qu = Ku ? uu : Ru;
      return null === Eu ? Qu : Eu - Qu
    }
    const Fu = {
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
      wu = new Map;

    function Zu(uu, Ru) {
      const yu = `${uu}|${Ru}`;
      let Eu = wu.get(yu);
      if (void 0 === Eu) {
        const {
          size: Ku,
          palette: Qu,
          layers: mu
        } = Fu[uu], Ju = 90 === Ru || 270 === Ru, [Nu, Xu] = Ju ? [Ku[2], Ku[0]] : [Ku[0], Ku[2]], Vu = function(uu, Ru, yu) {
          let Eu = null,
            Ku = null,
            Qu = !1;
          switch (uu) {
            case 0:
              break;
            case 90:
              Eu = Ru - 1, Qu = !0;
              break;
            case 180:
              Eu = Ru - 1, Ku = yu - 1;
              break;
            case 270:
              Ku = yu - 1, Qu = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${uu}`)
          }
          return {
            xRotationMappedOrigin: Eu,
            zRotationMappedOrigin: Ku,
            shouldSwapXZ: Qu
          }
        }(Ru, Nu, Xu), ru = cu.for(Uu.j), Bu = Qu.map((uu => (0, Uu.g)(ru.turnBlockId((0, Uu.n)(uu), Ru, !1)))), xu = [];
        mu.forEach(((uu, Ru) => {
          uu.split(" ").forEach(((uu, yu) => {
            for (let Eu = 0; Eu < uu.length; Eu++)
              if ("." !== uu[Eu]) {
                const Ku = [Lu(Eu, yu, Vu), Ru, zu(Eu, yu, Vu)];
                xu.push({
                  offset: Ku,
                  block: Bu[uu.charCodeAt(Eu) - "a".charCodeAt(0)]
                })
              }
          }))
        })), Eu = {
          size: [Nu, Ku[1], Xu],
          cells: xu
        }, wu.set(yu, Eu)
      }
      return Eu
    }
    const hu = {
      farm_hut: yu.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
      farm_house: yu.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
      farm_barn: yu.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
      rusticHome_tent: yu.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
      rusticHome_cabin: yu.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
      rusticHome_house: yu.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
      market_stand: yu.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
      market_stall: yu.p + "static/media/market_stall.9a562807f9dff591618a.webp",
      market_shop: yu.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
      castle_wall: yu.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
      castle_gate: yu.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
      castle_tower: yu.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
    };
    var Pu = yu(1079);
    const iu = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function Yu(uu) {
      let {
        page: Ru,
        building: yu,
        onBuild: Eu,
        onPutAway: Ku
      } = uu;
      const {
        t: Qu
      } = (0, Gu.E)(), {
        displayName: mu,
        tier: Ju
      } = Su(Ru.id), Nu = Zu(Ru.id, 0).cells.length, Xu = Wu[Ru.id], Vu = "locked" === Ru.state, ru = yu ? eu.e : eu.l;
      return (0, Pu.jsxs)("article", {
        className: Cu()("PlotsJournalPage", {
          Locked: Vu
        }),
        children: [(0, Pu.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: Qu(mu.translationKey)
        }), (0, Pu.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [Qu(iu[Ju]), " \xb7 ", Qu("plotsGame:journalBlocks", {
            blocks: String(Nu)
          })]
        }), (0, Pu.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [xu.map((uu => (0, Pu.jsx)("img", {
            className: Cu()({
              Shown: uu === Ru.id
            }),
            src: hu[uu],
            alt: "",
            draggable: !1
          }, uu))), "completed" === Ru.state && (0, Pu.jsx)("span", {
            className: "PlotsJournalStamp",
            children: Qu("plotsGame:journalBuilt")
          }), Vu && (0, Pu.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, Pu.jsx)(ku.c, {
              name: "lock"
            })
          })]
        }), void 0 !== Xu && "completed" !== Ru.state && (0, Pu.jsx)("p", {
          className: "PlotsJournalNote",
          children: Qu(Xu)
        }), (0, Pu.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === Ru.state && (0, Pu.jsx)("p", {
            className: "PlotsJournalHint",
            children: Qu("plotsGame:journalLocked", {
              name: Qu(Su(Ru.unlockedBy).displayName.translationKey)
            })
          }), Ru.active && (0, Pu.jsxs)(Pu.Fragment, {
            children: [(0, Pu.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: Qu("plotsGame:journalBuilding")
            }), (0, Pu.jsx)(eu.f, {
              onClick: Ku,
              children: Qu("plotsGame:journalPutAway")
            })]
          }), !Vu && !Ru.active && (0, Pu.jsx)(ru, {
            onClick: () => {
              Eu(Ru.id)
            },
            children: Qu("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function ou(uu) {
      let {
        className: Ru,
        page: yu,
        hidden: Eu,
        building: Ku,
        journal: Qu
      } = uu;
      return (0, Pu.jsxs)("div", {
        ref: uu => {
          null !== uu && (uu.inert = Eu)
        },
        className: Cu()("PlotsJournalSide", Ru),
        children: [void 0 !== yu && (0, Pu.jsx)(Yu, {
          page: yu,
          building: Ku,
          onBuild: Qu.build,
          onPutAway: Qu.putAway
        }), void 0 === yu && (0, Pu.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var qu = yu(343),
      Ou = yu(1823);

    function vu(uu) {
      return Math.cos((0, Ou.i)(uu))
    }

    function au(uu) {
      return (0, Ou.s)(Math.acos(qu.c.clamp(uu, -1, 1)))
    }

    function fu(uu, Ru, yu, Eu, Ku) {
      const Qu = Math.abs(Ru - uu),
        mu = (0, Ou.s)(Ku / (yu * Math.abs(Math.sin((0, Ou.i)(uu))))),
        Ju = 450 * Math.min(1, Qu / Eu),
        Nu = mu > 0 ? 3 * Qu / mu : 1 / 0;
      return Math.round(Math.max(120, Math.min(Ju, Nu)))
    }
    class uR {
      constructor() {
        this.samples = []
      }
      add(uu, Ru) {
        for (this.samples.push({
            x: uu,
            at: Ru
          }); Ru - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const uu = this.samples[0],
          Ru = this.samples[this.samples.length - 1];
        return Ru.at > uu.at ? (Ru.x - uu.x) / (Ru.at - uu.at) : 0
      }
    }

    function RR(uu, Ru) {
      return uu > Ru && uu >= 600
    }

    function yR(uu) {
      return au(new DOMMatrixReadOnly(getComputedStyle(uu).transform).m11)
    }

    function ER(uu, Ru) {
      uu.style.transform = `rotateY(${-Ru}deg)`, uu.classList.add("Turning")
    }

    function KR(uu) {
      let {
        journal: Ru
      } = uu;
      const {
        t: yu
      } = (0, Gu.E)(), Eu = (0, Mu.h)(Hu, Ru.getPages()), Ku = (0, Iu.d)(RR), [Ju, Nu] = (0, Qu.useState)((() => function(uu) {
        const Ru = uu.findIndex((uu => uu.active));
        return -1 !== Ru ? Ru : Math.max(0, uu.findIndex((uu => "open" === uu.state)))
      }(Eu))), Vu = (0, Qu.useRef)(null), ru = (0, Qu.useRef)(null), Bu = (0, Qu.useRef)({
        Forward: null,
        Back: null
      }), xu = Ku ? 2 : 1, Su = Ku ? 180 : 90, pu = Ju - Ju % xu, Tu = pu > 0, Wu = pu + xu < Eu.length, ju = (0, Qu.useCallback)((() => {
        const uu = ru.current;
        return null === uu ? pu : (ru.current = null, uu.animation.cancel(), (Ru = Bu.current[uu.direction]).style.transform = "", Ru.classList.remove("Turning"), null === uu.next ? pu : (Nu(uu.next), uu.next));
        var Ru
      }), [pu]), du = (0, Qu.useCallback)(((uu, Ru, yu, Eu) => {
        const Ku = Bu.current[uu],
          Qu = yR(Ku),
          mu = Ru === ("Forward" === uu) ? Su : 0;
        ER(Ku, mu);
        const Ju = Ku.animate([{
          transform: `rotateY(${-Qu}deg)`
        }, {
          transform: `rotateY(${-mu}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : fu(Qu, mu, Ku.offsetWidth, Su, mu > Qu ? -yu : yu),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        ru.current = {
          direction: uu,
          animation: Ju,
          next: Ru ? Eu + ("Forward" === uu ? xu : -xu) : null
        }, Ju.onfinish = () => {
          var uu;
          (null === (uu = ru.current) || void 0 === uu ? void 0 : uu.animation) === Ju && ju()
        }
      }), [xu, Su, ju]), bu = (0, Qu.useCallback)((uu => {
        if (null !== Vu.current) return;
        const Ru = ju();
        ("Forward" === uu ? Ru + xu < Eu.length : Ru > 0) && du(uu, !0, 0, Ru)
      }), [ju, du, xu, Eu.length]);
      (0, Qu.useEffect)((() => {
        Ru.onOpened()
      }), [Ru]), (0, Qu.useEffect)((() => () => {
        var uu;
        null === (uu = ru.current) || void 0 === uu || uu.animation.cancel()
      }), []), (0, Qu.useEffect)((() => {
        const uu = uu => {
          var Ru;
          uu.pointerId !== (null === (Ru = Vu.current) || void 0 === Ru ? void 0 : Ru.pointerId) || Vu.current.following || (Vu.current = null)
        };
        return window.addEventListener("pointerup", uu), () => {
          window.removeEventListener("pointerup", uu)
        }
      }), []), (0, Du.c)((uu => ("ArrowLeft" === uu.code || "ArrowRight" === uu.code) && !(0, Xu.isTypingInInput)()), (uu => {
        uu.stopPropagation(), bu("ArrowLeft" === uu.code ? "Back" : "Forward")
      }));
      const ku = (uu, Ru, yu) => {
          const Eu = function(uu, Ru, yu, Eu) {
            return (uu < 0 ? yu : Eu) ? qu.c.clampAbs(uu, Ru) : Math.sign(uu) * Ru * (1 - 1 / (.55 * Math.abs(uu) / Ru + 1))
          }(uu.base + yu, xu * uu.width, Wu, Tu);
          return "Forward" === Ru ? Math.min(Eu, 0) : Math.max(Eu, 0)
        },
        Uu = (uu, Ru) => {
          const yu = Vu.current;
          if (Vu.current = null, null === yu.direction) return;
          yu.speed.add(uu, Ru);
          const Eu = yu.speed.get(),
            Ku = ku(yu, yu.direction, uu - yu.x);
          du(yu.direction, null !== function(uu, Ru, yu, Eu, Ku) {
            if (Math.abs(Ru) >= .3 ? Math.sign(Ru) !== Math.sign(uu) : Math.abs(uu) < .5 * yu) return null;
            const Qu = uu < 0 ? "Forward" : "Back";
            return ("Forward" === Qu ? Eu : Ku) ? Qu : null
          }(Ku, Eu, xu * yu.width, Wu, Tu), Eu, pu)
        },
        nu = Eu.some((uu => uu.active)),
        su = (uu, yu, Ku) => (0, Pu.jsx)(ou, {
          className: uu,
          page: yu >= 0 && yu < Eu.length ? Eu[yu] : void 0,
          hidden: Ku,
          building: nu,
          journal: Ru
        });
      return (0, Pu.jsx)(Au.e, {
        close: mu.i,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, Pu.jsxs)("section", {
          className: Cu()("PlotsJournal", {
            Spread: Ku
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": yu("plotsGame:journalTitle"),
          children: [(0, Pu.jsx)(eu.h, {
            className: "PlotsJournalClose",
            onClick: mu.i
          }), (0, Pu.jsx)(QR, {
            direction: "Back",
            disabled: !Tu,
            onTurn: bu
          }), (0, Pu.jsx)("div", {
            className: "PlotsJournalBookPages",
            onPointerDown: uu => {
              var Ru;
              if (!uu.isPrimary || 0 !== uu.button || null !== ru.current && null !== uu.target.closest("button")) return;
              const yu = new uR;
              yu.add(uu.clientX, uu.timeStamp);
              const Eu = Bu.current.Forward.offsetWidth,
                Ku = ru.current;
              ru.current = null;
              let Qu = 0;
              if (null !== Ku) {
                const Ru = Bu.current[Ku.direction],
                  yu = yR(Ru);
                Ku.animation.cancel(), ER(Ru, yu), Qu = function(uu, Ru, yu, Eu) {
                  return (uu < 0 ? yu : Eu) ? uu : Math.sign(uu) * Ru * (1 / (1 - Math.min(Math.abs(uu) / Ru, .99)) - 1) / .55
                }(function(uu, Ru, yu, Eu) {
                  return yu * (vu(Ru) - vu("Forward" === uu ? 0 : Eu))
                }(Ku.direction, yu, Eu, Su), xu * Eu, Wu, Tu), uu.currentTarget.setPointerCapture(uu.pointerId)
              }
              Vu.current = {
                pointerId: uu.pointerId,
                x: uu.clientX,
                y: uu.clientY,
                base: Qu,
                width: Eu,
                following: null !== Ku,
                direction: null !== (Ru = null === Ku || void 0 === Ku ? void 0 : Ku.direction) && void 0 !== Ru ? Ru : null,
                speed: yu
              }
            },
            onPointerMove: uu => {
              const Ru = Vu.current;
              if (null === Ru || uu.pointerId !== Ru.pointerId) return;
              if (0 === uu.buttons) return void Uu(uu.clientX, uu.timeStamp);
              const yu = uu.clientX - Ru.x;
              !Ru.following && function(uu, Ru) {
                return Math.abs(uu) > 8 && Math.abs(uu) > Math.abs(Ru)
              }(yu, uu.clientY - Ru.y) && (Ru.following = !0, Ru.direction = yu < 0 ? "Forward" : "Back", uu.currentTarget.setPointerCapture(uu.pointerId)), null !== Ru.direction && (Ru.speed.add(uu.clientX, uu.timeStamp), ER(Bu.current[Ru.direction], function(uu, Ru, yu, Eu) {
                const Ku = yu * vu("Forward" === uu ? 0 : Eu) + Ru;
                return qu.c.clamp(au(Ku / yu), 0, Eu)
              }(Ru.direction, ku(Ru, Ru.direction, yu), Ru.width, Su)))
            },
            onPointerUp: uu => {
              var Ru;
              uu.pointerId === (null === (Ru = Vu.current) || void 0 === Ru ? void 0 : Ru.pointerId) && Uu(uu.clientX, uu.timeStamp)
            },
            onPointerCancel: uu => {
              const Ru = Vu.current;
              uu.pointerId === (null === Ru || void 0 === Ru ? void 0 : Ru.pointerId) && (Vu.current = null, null !== Ru.direction && du(Ru.direction, !1, 0, pu))
            },
            children: (0, Pu.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [Ku && su("Left", pu - 2, !0), su("Right", pu + 2 * xu - 1, !0), (0, Pu.jsxs)("div", {
                ref: uu => {
                  Bu.current.Back = uu
                },
                className: "PlotsJournalLeaf Back",
                children: [su("Recto", pu - 1, !0), Ku && su("Verso", pu, !1)]
              }), (0, Pu.jsxs)("div", {
                ref: uu => {
                  Bu.current.Forward = uu
                },
                className: "PlotsJournalLeaf Forward",
                children: [su("Recto", pu + xu - 1, !1), Ku && su("Verso", pu + xu, !0)]
              })]
            })
          }), (0, Pu.jsx)(QR, {
            direction: "Forward",
            disabled: !Wu,
            onTurn: bu
          })]
        })
      })
    }

    function QR(uu) {
      let {
        direction: Ru,
        disabled: yu,
        onTurn: Eu
      } = uu;
      const {
        t: Ku
      } = (0, Gu.E)();
      return (0, Pu.jsx)("div", {
        className: Cu()("PlotsJournalArrow", Ru),
        children: (0, Pu.jsx)(eu.e, {
          disabled: yu,
          ariaLabel: Ku("Forward" === Ru ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            Eu(Ru)
          },
          children: (0, Pu.jsx)(ku.c, {
            name: "angle-up"
          })
        })
      })
    }
    var mR = yu(36436),
      JR = yu(1841),
      NR = yu(1908);
    const XR = "plotsStepChanged",
      VR = "plotsPlotChanged";
    class rR {
      constructor() {
        this.step = ["none"], this.plot = ["none"]
      }
      getStep() {
        return this.step
      }
      receiveStep(uu) {
        this.step = uu, Vu.k.Op(XR, uu, !0)
      }
      getPlot() {
        return this.plot
      }
      receivePlot(uu) {
        this.plot = uu, Vu.k.Op(VR, uu, !0)
      }
    }
    const BR = "KeyJ";

    function xR(uu) {
      let {
        hud: Ru,
        journal: yu
      } = uu;
      const Eu = (0, Mu.h)(Hu, yu.getPages()),
        Ku = (0, Mu.h)(XR, Ru.getStep()),
        {
          isTouchScreen: Qu
        } = (0, Ju.j)(["isTouchScreen"]),
        {
          t: Vu
        } = (0, Gu.E)(),
        ru = null !== Eu && "none" === Ku[0];
      return (0, Du.c)((uu => null !== Eu && uu.code === BR && !uu.repeat && !(0, Xu.isTypingInInput)()), (uu => {
        (0, Nu.B)(uu, ru, mu.q)
      })), ru ? (0, Pu.jsx)(mR.d, {
        placement: "topRight",
        children: (0, Pu.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, Pu.jsxs)("button", {
            type: "button",
            className: Cu()("PlotsJournalButton SmallTextBold", {
              Touch: Qu
            }),
            onClick: mu.q,
            children: [(0, Pu.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, Pu.jsx)(JR.c, {
                itemName: "Book",
                amount: 0
              })
            }), Vu("plotsGame:journalButton"), !Qu && (0, Pu.jsx)(NR.b, {
              className: "PlotsJournalButtonKey",
              keyCode: BR
            })]
          })
        })
      }) : null
    }
    var SR = yu(38185),
      pR = yu(37936),
      TR = yu(36702),
      WR = yu(9195),
      jR = yu(9211),
      HR = yu(37569);
    const dR = new Map([
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
      bR = [...TR.d.blockRemoveActionRoots, ...pR.b, ...WR.f, "Board", "Code Block", "Custom Lobby Block"],
      CR = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let kR = null;

    function eR() {
      return kR ??= function() {
        const uu = AR(),
          Ru = Math.max(...uu.map((uu => Uu.j[uu].id))) + 1,
          yu = new Int32Array(Ru),
          Eu = new Int32Array(Ru),
          Ku = new Uint8Array(Ru).fill(1),
          Qu = new Uint8Array(Ru),
          mu = new Uint8Array(Ru),
          Ju = new Array(Ru).fill("Air"),
          Nu = new Map,
          Xu = uu => {
            let Ru = Nu.get(uu);
            return void 0 === Ru && (Ru = Nu.size + 1, Nu.set(uu, Ru)), Ru
          },
          Vu = new Set(bR);
        for (const Bu of uu) {
          var ru;
          const {
            id: uu,
            meta: Ru,
            altActionable: Nu,
            canBePlacedOver: xu
          } = Uu.j[Bu];
          yu[uu] = Xu(DR(Bu));
          const Su = Ru.stairsCorner;
          if (null === Su) Eu[uu] = yu[uu];
          else {
            const yu = Su.endsWith("Right");
            Eu[uu] = Xu(`${Ru.rootName}|rot${yu?Ru.rot%4+1:Ru.rot}|${Ru.halfblockPlacement}|${Su.replace("Right","Left")}`)
          }
          Ku[uu] = xu ? 1 : 0, Qu[uu] = Nu || null !== Ru.open || Bu in HR.c || Vu.has(Ru.rootName) || void 0 !== (0, pR.f)(Ru.rootName) ? 1 : 0;
          const {
            rootName: pu
          } = Ru;
          mu[uu] = null !== Ru.open || pR.b.includes(pu) || pu.includes("Bookshelf") || pu.includes("Mailbox") ? 1 : 0, Ju[uu] = null !== (ru = (0, SR.g)(uu)) && void 0 !== ru ? ru : pu
        }
        return {
          kinds: yu,
          shapes: Eu,
          empty: Ku,
          inUse: Qu,
          ownAltActionMessage: mu,
          placingItems: Ju
        }
      }(), kR
    }

    function AR() {
      return Object.keys(Uu.j).filter((uu => Uu.j[uu].name === uu))
    }

    function DR(uu) {
      var Ru;
      const yu = Uu.j[uu],
        {
          rootName: Eu,
          rot: Ku
        } = yu.meta,
        [, ...Qu] = (null !== (Ru = yu.rootMetaDesc) && void 0 !== Ru ? Ru : uu).split("|"),
        mu = Qu.filter((uu => !("meta" === uu || CR.test(uu) || (0, jR.y)(yu) && /^[nesw]+$/.test(uu) || WR.f.includes(Eu) && /^[lrud]+$/.test(uu) || qu.J.includes(Eu) && /^(left|right)$/.test(uu))));
      return [Eu, ...mu].map((uu => "fenceGate" === yu.model && uu === `rot${Ku}` ? "rot" + ((Ku - 1) % 2 + 1) : uu)).join("|")
    }

    function MR(uu, Ru) {
      const {
        kinds: yu,
        shapes: Eu
      } = eR();
      return yu[uu] === yu[Ru] || Eu[uu] === Eu[Ru]
    }

    function IR(uu) {
      return 1 === eR().empty[uu]
    }

    function GR(uu) {
      return eR().placingItems[uu]
    }

    function UR(uu) {
      return dR.get(Uu.j[uu].meta.rootName)
    }
    var nR = yu(9189),
      sR = yu(9205);
    const tR = [0, 0, 0, 1, 1, 1],
      lR = (0, nR.c)([
        [2, 0, 2, 6, 6, 6]
      ]),
      gR = (0, nR.c)([
        [3, 0, 3, 5, 5, 5]
      ]),
      cR = (0, nR.c)([
        [3, 3, 3, 5, 8, 5]
      ]),
      LR = [0, 1, 2, 3].map((uu => (0, nR.c)((0, nR.n)([
        [3, 2, 0, 5, 7, 3]
      ], uu))));

    function zR(uu) {
      const {
        KT: Ru,
        model: yu,
        blockModel: Eu,
        meta: Ku
      } = Uu.j[uu];
      return void 0 !== Ru ? Ru : "CentreCross" === yu ? lR : null !== Eu && void 0 !== Eu && Eu.startsWith("torch") ? Ku.halfblockPlacement === sR.d.side ? LR[Ku.rot - 1] : Ku.halfblockPlacement === sR.d.top ? cR : gR : tR
    }
    var FR = yu(36670),
      wR = yu(212);

    function ZR(uu, Ru) {
      const yu = wR.f.DW / 2;
      return uu[0] < Ru[0] + yu && uu[0] + 1 > Ru[0] - yu && uu[1] < Ru[1] + wR.f.UW && uu[1] + 1 > Ru[1] && uu[2] < Ru[2] + yu && uu[2] + 1 > Ru[2] - yu
    }

    function hR(uu, Ru, yu, Eu, Ku) {
      const Qu = Math.hypot(...Ru.dir);
      if (!Number.isFinite(Qu) || 0 === Qu) return -1;
      const {
        from: mu,
        reach: Ju,
        solid: Nu
      } = Ru, Xu = [Ru.dir[0] / Qu, Ru.dir[1] / Qu, Ru.dir[2] / Qu], Vu = null === Nu ? Ju : Math.min(Ju, function(uu, Ru, yu) {
        const Eu = PR(uu, Ru, yu);
        if (Eu !== 1 / 0) return Eu;
        return (yu[0] + .5 - uu[0]) * Ru[0] + (yu[1] + .5 - uu[1]) * Ru[1] + (yu[2] + .5 - uu[2]) * Ru[2]
      }(mu, Xu, Nu) + .75);
      let ru = -1,
        Bu = 1 / 0,
        xu = 1 / 0;
      for (let Su = 0; Su < uu.length; Su += 4) {
        const Ru = [uu[Su], uu[Su + 1], uu[Su + 2]],
          Qu = Ku(Su) ? Ju : Vu;
        let Nu = -1,
          pu = PR(mu, Xu, Ru);
        if (pu > Qu) {
          const uu = [Ru[0] + .5 - mu[0], Ru[1] + .5 - mu[1], Ru[2] + .5 - mu[2]];
          if (pu = uu[0] * Xu[0] + uu[1] * Xu[1] + uu[2] * Xu[2], pu <= 0 || pu > Qu) continue;
          if (Nu = Math.hypot(uu[0] - pu * Xu[0], uu[1] - pu * Xu[1], uu[2] - pu * Xu[2]), Nu > .7 || !Eu(Su)) continue
        }(Nu < Bu || Nu === Bu && pu < xu) && yu(Su) && (ru = Su, Bu = Nu, xu = pu)
      }
      return ru
    }

    function PR(uu, Ru, yu) {
      let Eu = 0,
        Ku = 1 / 0;
      for (let Qu = 0; Qu < 3; Qu++) {
        const mu = yu[Qu] - uu[Qu];
        if (0 === Ru[Qu]) {
          if (mu > 0 || mu + 1 < 0) return 1 / 0;
          continue
        }
        const Ju = mu / Ru[Qu],
          Nu = (mu + 1) / Ru[Qu];
        Eu = Math.max(Eu, Math.min(Ju, Nu)), Ku = Math.min(Ku, Math.max(Ju, Nu))
      }
      return Eu <= Ku ? Eu : 1 / 0
    }
    var iR = yu(37812),
      YR = yu(38281);
    const oR = [1, 1, 1];
    class qR {
      constructor(uu) {
        this.api = uu, this.meshes = null, this.shown = null
      }
      show(uu) {
        if (!(0, FR.f)(uu, this.shown))
          if (this.shown = null === uu ? null : [uu[0], uu[1], uu[2]], null !== this.meshes)
            for (const Ru of this.meshes) this.api.setGameMesh(Ru, null === uu ? {
              visible: !1
            } : {
              anchor: uu,
              visible: !0
            });
          else if (null !== uu) {
          const Ru = [iR.f, iR.f, iR.f, 0, 0, 0];
          this.meshes = [this.build([Ru], iR.j, uu), this.build((0, iR.b)(), iR.q, uu)]
        }
      }
      dispose() {
        for (const Ru of null !== (uu = this.meshes) && void 0 !== uu ? uu : []) {
          var uu;
          this.api.disposeGameMesh(Ru)
        }
        this.meshes = null, this.shown = null
      }
      build(uu, Ru, yu) {
        const Eu = [],
          Ku = [];
        for (const [Qu, mu, Ju, Nu, Xu, Vu] of uu)(0, YR.i)(Eu, Ku, [Nu + .5, Xu + .5, Vu + .5], [Qu, mu, Ju]);
        return this.api.createGameMesh({
          positions: Eu,
          indices: Ku
        }, {
          rgb: oR,
          alpha: Ru,
          onTop: !0
        }, yu)
      }
    }
    class OR {
      constructor(uu) {
        this.api = uu, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(uu) {
        const Ru = wR.f.jS;
        this.chunks = [];
        for (let yu = 0; yu < uu.length; yu += 3) {
          const Eu = Math.floor(uu[yu] / Ru),
            Ku = Math.floor(uu[yu + 1] / Ru),
            Qu = Math.floor(uu[yu + 2] / Ru);
          this.watches(Eu, Ku, Qu) || this.chunks.push(Eu, Ku, Qu)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const uu = performance.now();
        if (uu - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = uu;
        let Ru = !1;
        for (let yu = 0; yu < this.chunks.length; yu += 3) {
          const uu = this.api.getChunkVersion(this.chunks[yu], this.chunks[yu + 1], this.chunks[yu + 2]);
          this.versions[yu / 3] !== uu && (this.versions[yu / 3] = uu, Ru = !0)
        }
        return Ru
      }
      watches(uu, Ru, yu) {
        for (let Eu = 0; Eu < this.chunks.length; Eu += 3)
          if (this.chunks[Eu] === uu && this.chunks[Eu + 1] === Ru && this.chunks[Eu + 2] === yu) return !0;
        return !1
      }
    }
    const vR = .35,
      aR = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      fR = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      uy = [.95, .2, .15];
    class Ry {
      constructor() {
        this.groups = []
      }
      add(uu, Ru, yu, Eu, Ku) {
        let Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : tR;
        for (const mu of this.groups)
          if (Ky(mu, Eu, Ku)) return mu.cells.push(uu, Ru, yu), void mu.boxes.push(Qu);
        this.groups.push({
          rgb: Eu,
          look: Ku,
          cells: [uu, Ru, yu],
          boxes: [Qu]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class yy {
      constructor(uu) {
        this.api = uu, this.shown = []
      }
      show(uu) {
        const Ru = [];
        for (const yu of uu) {
          const uu = this.shown.findIndex((uu => {
            let {
              group: Ru
            } = uu;
            return Ky(Ru, yu.rgb, yu.look) && Qy(Ru, yu)
          })); - 1 === uu ? Ru.push(this.build(yu)) : (Ru.push(this.shown[uu]), this.shown.splice(uu, 1))
        }
        this.dispose(), this.shown = Ru
      }
      dispose() {
        for (const {
            meshes: uu
          }
          of this.shown)
          for (const Ru of uu) this.api.disposeGameMesh(Ru);
        this.shown = []
      }
      build(uu) {
        const {
          rgb: Ru,
          look: yu,
          boxes: Eu
        } = uu, Ku = [Ru[0] + (1 - Ru[0]) * vR, Ru[1] + (1 - Ru[1]) * vR, Ru[2] + (1 - Ru[2]) * vR], Qu = [this.buildMesh(uu.cells, Ru, yu.alpha, ((uu, Ru, Ku, Qu) => {
          Ey(uu, Ru, Ku, Eu[Qu], yu.size, !1)
        })), this.buildMesh(uu.cells, Ku, yu.alpha, ((uu, Ru, Ku, Qu) => {
          Ey(uu, Ru, Ku, Eu[Qu], yu.size, !0)
        }))];
        return yu.crossed && Qu.push(this.buildMesh(uu.cells, Ru, .9, ((uu, Ru, Eu) => {
          (0, YR.l)(uu, Ru, Eu, yu.size + .01, .12)
        }))), {
          group: uu,
          meshes: Qu
        }
      }
      buildMesh(uu, Ru, yu, Eu) {
        const Ku = [uu[0], uu[1], uu[2]],
          Qu = [],
          mu = [];
        for (let Ju = 0; Ju < uu.length; Ju += 3) Eu(Qu, mu, [uu[Ju] - Ku[0] + .5, uu[Ju + 1] - Ku[1] + .5, uu[Ju + 2] - Ku[2] + .5], Ju / 3);
        return this.api.createGameMesh({
          positions: Qu,
          indices: mu
        }, {
          rgb: [Ru[0], Ru[1], Ru[2]],
          alpha: yu
        }, Ku)
      }
    }

    function Ey(uu, Ru, yu, Eu, Ku, Qu) {
      for (let mu = 0; mu < Eu.length; mu += 6) {
        const Ju = [0, 0, 0],
          Nu = [0, 0, 0];
        for (let uu = 0; uu < 3; uu++) Ju[uu] = yu[uu] + ((Eu[mu + uu] + Eu[mu + uu + 3]) / 2 - .5) * Ku, Nu[uu] = (Eu[mu + uu + 3] - Eu[mu + uu]) * Ku;
        (0, YR.e)(uu, Ru, Ju, Nu, Qu)
      }
    }

    function Ky(uu, Ru, yu) {
      return uu.rgb[0] === Ru[0] && uu.rgb[1] === Ru[1] && uu.rgb[2] === Ru[2] && uu.look === yu
    }

    function Qy(uu, Ru) {
      if (uu.cells.length !== Ru.cells.length) return !1;
      for (let yu = 0; yu < uu.cells.length; yu++)
        if (uu.cells[yu] !== Ru.cells[yu]) return !1;
      return uu.boxes.every(((uu, yu) => uu === Ru.boxes[yu]))
    }

    function my(uu, Ru) {
      return uu.getClientOption(Ru, "blockReach") + 1
    }
    class Jy {
      constructor(uu, Ru, yu) {
        this.api = uu, this.localPlayerId = Ru, this.pickNext = yu, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(uu) {
        const [Ru, , yu] = uu.cameraDirection, Eu = Math.hypot(Ru, yu);
        Eu > .001 && (this.heading = [Ru / Eu, yu / Eu])
      }
      tapped(uu, Ru, yu) {
        const Eu = my(this.api, this.localPlayerId),
          {
            origin: Ku,
            direction: Qu
          } = this.api.getActionRay(),
          mu = [...Ku],
          Ju = [
            [mu, [mu[0] + Qu[0] * Eu, mu[1] + Qu[1] * Eu, mu[2] + Qu[2] * Eu]]
          ];
        null !== uu && Ju.push([mu, (0, FR.b)(uu)]), this.tap = {
          lines: Ju,
          next: Ru,
          ms: yu
        }
      }
      filled(uu, Ru) {
        this.tap = null, this.turnFrom(uu, Ru), this.retry(Ru)
      }
      arrived(uu, Ru) {
        const {
          tap: yu
        } = this;
        if (null === yu || Ru - yu.ms > 1500) return null;
        const Eu = (0, FR.b)(uu);
        return (0, FR.f)(yu.next, uu) || yu.lines.some((uu => {
          let [Ru, yu] = uu;
          return function(uu, Ru, yu) {
            const Eu = [yu[0] - Ru[0], yu[1] - Ru[1], yu[2] - Ru[2]],
              Ku = [uu[0] - Ru[0], uu[1] - Ru[1], uu[2] - Ru[2]],
              Qu = Eu[0] ** 2 + Eu[1] ** 2 + Eu[2] ** 2,
              mu = 0 === Qu ? 0 : Math.min(1, Math.max(0, (Ku[0] * Eu[0] + Ku[1] * Eu[1] + Ku[2] * Eu[2]) / Qu));
            return Math.hypot(Ku[0] - Eu[0] * mu, Ku[1] - Eu[1] * mu, Ku[2] - Eu[2] * mu)
          }(Eu, Ru, yu) <= .9
        })) ? (this.tap = null, this.turnFrom(uu, Ru), yu.ms) : null
      }
      turnFrom(uu, Ru) {
        this.pending = {
          from: uu,
          ms: Ru,
          turnMs: Math.max(50, Math.min(250, Ru - this.lastFillMs))
        }, this.lastFillMs = Ru
      }
      retry(uu) {
        const {
          pending: Ru
        } = this;
        if (null === Ru) return;
        if (uu - Ru.ms > 1500) return void(this.pending = null);
        const yu = this.pickNext((0, FR.b)(Ru.from), (uu => (0, FR.f)(uu, Ru.from)));
        if (null === yu) return;
        this.pending = null;
        const {
          turning: Eu
        } = this;
        if (null !== Eu && uu < Eu.endMs && (0, FR.f)(Eu.to, yu)) return;
        const Ku = this.api.getActionRay().origin,
          Qu = [yu[0] + .5 - Ku[0], yu[1] + .5 - Ku[1], yu[2] + .5 - Ku[2]],
          mu = Math.hypot(Qu[0], Qu[2]);
        if (mu < .3) {
          const uu = Math.max(mu, .001);
          Qu[0] = this.heading[0] * uu, Qu[2] = this.heading[1] * uu
        }
        this.api.turnCamera(Qu, Ru.turnMs), this.turning = {
          to: yu,
          endMs: uu + Ru.turnMs
        }
      }
    }
    class Ny {
      constructor(uu, Ru, yu) {
        this.api = uu, this.localPlayerId = Ru, this.juice = yu, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.nextCells = [], this.lastFilled = null, this.lastSeenFilled = null, this.playerCells = [], this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = null, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new OR(uu), this.meshes = new yy(uu), this.outline = new qR(uu), this.turn = new Jy(uu, Ru, ((uu, Ru) => this.pickNext(uu, Ru)))
      }
      SS(uu) {
        const Ru = "active" === uu[0] ? `${uu[1]}|${uu[3]}|${uu[4]}|${uu[5]}|${uu[6]}` : "";
        if ("active" !== uu[0]) "built" === uu[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , yu, Eu, Ku, Qu] = uu;
          Ru !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = yu) : yu === this.layerY ? this.burstUnlisted(Eu) : yu > this.layerY && this.finishLayer(yu), this.layerY = yu, this.layerCells.has(yu) || this.layerCells.set(yu, Eu.filter(Vy)), this.ghostCells = Eu, this.palette = Ku, this.occupiedCells = Qu
        }
        Ru !== this.blueprint && (this.blueprint = Ru, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((uu => this.api.blockNameToBlockId(uu))), this.chunkWatch.watch([...this.ghostCells.filter(Vy), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(uu) {
        this.burstUnlisted([]), uu > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = uu)
      }
      sr() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const uu = performance.now();
        let Ru = !1;
        for (const [Ku, Qu] of this.foreseen) {
          var yu;
          if (uu - Qu > 1e3) this.foreseen.delete(Ku), Ru = !0, (null === (yu = this.lastFilled) || void 0 === yu ? void 0 : yu.join()) === Ku && (this.lastFilled = this.lastSeenFilled)
        }
        const Eu = Xy(this.api.getPositionView(this.localPlayerId));
        (Ru || Eu.some(((uu, Ru) => uu !== this.playerCells[Ru]))) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(uu) {
        const Ru = new Set;
        for (let Ku = 0; Ku < uu.length; Ku += 4) Ru.add(`${uu[Ku]},${uu[Ku+1]},${uu[Ku+2]}`);
        const yu = [],
          {
            ghostCells: Eu
          } = this;
        for (let Ku = 0; Ku < Eu.length; Ku += 4) {
          const uu = `${Eu[Ku]},${Eu[Ku+1]},${Eu[Ku+2]}`;
          !Ru.has(uu) && this.open.delete(uu) && yu.push(this.filledCell(Ku))
        }
        this.burst(yu)
      }
      refresh() {
        const {
          ghostCells: uu,
          palette: Ru,
          occupiedCells: yu
        } = this, Eu = new Ry, Ku = new Set, Qu = [], mu = [];
        for (let Ju = 0; Ju < uu.length; Ju += 4) {
          const [yu, Nu, Xu, Vu] = [uu[Ju], uu[Ju + 1], uu[Ju + 2], uu[Ju + 3]], ru = this.api.getBlockId(yu, Nu, Xu), Bu = `${yu},${Nu},${Xu}`, xu = MR(this.blockIds[Vu], ru);
          !xu && IR(ru) ? Eu.add(yu, Nu, Xu, UR(Ru[Vu]), aR, zR(Ru[Vu])) : xu ? this.open.has(Bu) && Qu.push(this.filledCell(Ju)) : Eu.add(yu, Nu, Xu, uy, fR), !xu && this.api.isBlockInLoadedChunk(yu, Nu, Xu) && (Ku.add(Bu), mu.push(yu, Nu, Xu, IR(ru) ? 0 : 1))
        }
        this.open = Ku, this.nextCells = mu;
        for (let Ju = 0; Ju < yu.length; Ju += 3) {
          const [uu, Ru, Ku] = [yu[Ju], yu[Ju + 1], yu[Ju + 2]];
          IR(this.api.getBlockId(uu, Ru, Ku)) || Eu.add(uu, Ru, Ku, uy, fR)
        }
        this.meshes.show(Eu.toArray()), this.burst(Qu), this.showNext(), this.turn.retry(performance.now())
      }
      burst(uu) {
        const Ru = performance.now(),
          yu = [];
        for (const [Ku, Qu, mu] of uu) {
          const uu = [Ku, Qu, mu];
          this.lastSeenFilled = uu, this.foreseen.delete(uu.join()) || yu.push(uu)
        }
        const Eu = this.isHolding(Ru);
        for (const Ku of yu) {
          if (this.lastFilled = Ku, Eu && this.pressFilled) {
            this.turn.filled(Ku, Ru);
            continue
          }
          const uu = this.turn.arrived(Ku, Ru);
          if (null !== uu) {
            this.pressFilled = Eu;
            for (const [Ru, yu] of this.foreseen) yu <= uu && this.foreseen.delete(Ru)
          }
        }
        this.juice.filled(uu)
      }
      showNext() {
        var uu;
        const Ru = this.api.getPositionView(this.localPlayerId);
        this.playerCells.splice(0, 1 / 0, ...Xy(Ru));
        const yu = this.lastFilled;
        this.nextCell = this.pickNext(null === yu ? [Ru[0], Ru[1] + 1, Ru[2]] : (0, FR.b)(yu), (() => !1)), this.outline.show(null !== (uu = this.aimed) && void 0 !== uu ? uu : this.nextCell)
      }
      pickNext(uu, Ru) {
        const yu = this.api.getPositionView(this.localPlayerId),
          Eu = [yu[0], yu[1] + wR.f.UW * wR.f.playerEyeToHeightRatio, yu[2]],
          Ku = my(this.api, this.localPlayerId),
          {
            nextCells: Qu
          } = this,
          mu = uu => [Qu[uu], Qu[uu + 1], Qu[uu + 2]],
          Ju = function(uu, Ru, yu, Eu, Ku, Qu) {
            let mu = -1,
              Ju = -1,
              Nu = 1 / 0;
            for (let Xu = 0; Xu < uu.length; Xu += Ru) {
              const Ru = (Qu(Xu) ? 2 : 0) + (Eu(Xu) ? 1 : 0);
              if (Ru < Ju || Ku(Xu)) continue;
              const Vu = (uu[Xu] + .5 - yu[0]) ** 2 + (uu[Xu + 1] + .5 - yu[1]) ** 2 + (uu[Xu + 2] + .5 - yu[2]) ** 2;
              (Ru > Ju || Vu < Nu) && (mu = Xu, Ju = Ru, Nu = Vu)
            }
            return mu
          }(Qu, 4, uu, (uu => 1 === Qu[uu + 3]), (uu => {
            const Eu = mu(uu);
            return ZR(Eu, yu) || this.foreseen.has(Eu.join()) || Ru(Eu)
          }), (uu => function(uu, Ru, yu) {
            return (Ru[0] + .5 - uu[0]) ** 2 + (Ru[1] + .5 - uu[1]) ** 2 + (Ru[2] + .5 - uu[2]) ** 2 <= yu ** 2
          }(Eu, mu(uu), Ku)));
        return -1 === Ju ? null : mu(Ju)
      }
      afterRender(uu) {
        var Ru;
        this.turn.look(uu);
        const yu = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === yu ? null : yu.position), this.outline.show(null !== (Ru = this.aimed) && void 0 !== Ru ? Ru : this.nextCell)
      }
      isHolding(uu) {
        return null !== this.altMs && uu - this.altMs <= 500
      }
      attemptAltAction(uu) {
        const Ru = performance.now();
        if (this.isHolding(Ru) || (this.pressFilled = !1), this.altMs = Ru, this.pressFilled) return "preventPlacement";
        const yu = this.findAimed(uu);
        if (null !== yu) return this.foreseen.set(yu.join(), Ru), this.lastFilled = yu, this.aimed = null, this.showNext(), this.turn.filled(yu, Ru), this.pressFilled = !0, "preventPlacement";
        null !== this.nextCell && this.turn.tapped(uu, this.nextCell, Ru)
      }
      findAimed(uu) {
        return function(uu, Ru, yu, Eu, Ku, Qu, mu) {
          const Ju = uu.Xyu(Ru),
            Nu = null === Ju || null === uu.blockNameToBlockId(Ju.name, !0) ? null : Ju.name,
            Xu = uu.getPositionView(Ru),
            {
              origin: Vu,
              direction: ru
            } = uu.getActionRay(),
            Bu = hR(Eu, {
              from: Vu,
              dir: ru,
              reach: my(uu, Ru),
              solid: yu
            }, (Ru => {
              const yu = [Eu[Ru], Eu[Ru + 1], Eu[Ru + 2]];
              return !MR(Ku[Eu[Ru + 3]], uu.getBlockId(...yu)) && !mu.has(yu.join()) && uu.isBlockInLoadedChunk(...yu) && !ZR(yu, Xu)
            }), (uu => null === Nu || Nu === GR(Ku[Eu[uu + 3]])), (uu => null !== Qu && Eu[uu] === Qu[0] && Eu[uu + 1] === Qu[1] && Eu[uu + 2] === Qu[2]));
          return -1 === Bu ? null : [Eu[Bu], Eu[Bu + 1], Eu[Bu + 2]]
        }(this.api, this.localPlayerId, uu, this.ghostCells, this.blockIds, this.nextCell, this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(uu) {
        const {
          ghostCells: Ru
        } = this, [yu, Eu, Ku] = UR(this.palette[Ru[uu + 3]]);
        return [Ru[uu], Ru[uu + 1], Ru[uu + 2], yu, Eu, Ku]
      }
    }

    function Xy(uu) {
      let [Ru, yu, Eu] = uu;
      const Ku = wR.f.DW / 2;
      return [Math.floor(Ru), Math.floor(yu), Math.floor(Eu), Math.floor(Ru - Ku), Math.floor(Ru + Ku), Math.floor(yu + wR.f.UW), Math.floor(Eu - Ku), Math.floor(Eu + Ku)]
    }

    function Vy(uu, Ru) {
      return Ru % 4 !== 3
    }

    function ry(uu, Ru, yu, Eu, Ku) {
      if (!uu.isBlockInLoadedChunk(Ru, Eu - 6, yu) || !uu.isBlockInLoadedChunk(Ru, Eu + 6 + Ku, yu) || !uu.canModifyBlockAt(Ru, Eu, yu)) return NaN;
      let Qu = Eu - 1;
      if (0 !== uu.getBlockId(Ru, Qu, yu)) {
        for (; Qu < Eu + 6 && 0 !== uu.getBlockId(Ru, Qu + 1, yu);) Qu++;
        return Qu
      }
      for (; Qu > Eu - 6;)
        if (Qu--, 0 !== uu.getBlockId(Ru, Qu, yu)) return Qu;
      return NaN
    }

    function By(uu, Ru, yu, Eu, Ku) {
      let Qu = 0;
      for (let mu = Eu + 1; mu <= Eu + Ku; mu++) 0 !== uu.getBlockId(Ru, mu, yu) && Qu++;
      return Qu
    }

    function xy(uu) {
      const Ru = new Map;
      for (const mu of uu) {
        var yu;
        if (Number.isNaN(mu)) return null;
        Ru.set(mu, (null !== (yu = Ru.get(mu)) && void 0 !== yu ? yu : 0) + 1)
      }
      let Eu = NaN,
        Ku = 0;
      for (const [mu, Ju] of Ru)(Ju > Ku || Ju === Ku && mu < Eu) && (Eu = mu, Ku = Ju);
      let Qu = 0;
      for (const mu of uu) Qu += Math.abs(mu - Eu);
      return Qu
    }

    function Sy(uu, Ru, yu, Eu) {
      const {
        eye: Ku,
        forward: Qu,
        tanHalfFovX: mu,
        tanHalfFovY: Ju
      } = uu, [Nu, Xu] = function(uu) {
        let [Ru, yu, Eu] = uu;
        const Ku = Math.hypot(Ru, Eu),
          [Qu, mu] = [Eu / Ku, -Ru / Ku];
        return [
          [Qu, 0, mu],
          [yu * mu, Eu * Qu - Ru * mu, -yu * Qu]
        ]
      }(Qu), [Vu, ru] = [Ru * mu, yu * Ju], Bu = Qu[0] + Vu * Nu[0] + ru * Xu[0], xu = Qu[1] + ru * Xu[1], Su = Qu[2] + Vu * Nu[2] + ru * Xu[2], pu = (Eu - Ku[1]) / xu;
      return pu > 0 && pu < 1 / 0 ? [Ku[0] + pu * Bu, Ku[2] + pu * Su] : null
    }
    const py = "plotsBlueprintPlacementChanged",
      Ty = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class Wy {
      constructor(uu, Ru) {
        this.api = uu, this.localPlayerId = Ru, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = uu => {
          var Ru, yu, Eu, Qu;
          const mu = null !== (Ru = null === (yu = this.placing) || void 0 === yu ? void 0 : yu.rotation) && void 0 !== Ru ? Ru : 0,
            {
              size: Ju
            } = Zu(uu, mu),
            Nu = this.api.mH(this.localPlayerId),
            [Xu, Vu] = null !== (Eu = null !== (Qu = function(uu, Ru, yu) {
              const [Eu, Ku, Qu] = Ru, [mu, Ju, Nu] = [Math.floor(yu[0]), Math.floor(yu[1]), Math.floor(yu[2])], Xu = 6 + Math.max(Eu, Qu) / 2, [Vu, ru] = [Math.ceil(Xu + Eu / 2), Math.ceil(Xu + Qu / 2)], [Bu, xu] = [mu - Vu, Nu - ru], [Su, pu] = [2 * Vu + 1, 2 * ru + 1], Tu = new Float64Array(Su * pu), Wu = new Uint16Array(Su * pu);
              for (let bu = 0; bu < Su; bu++)
                for (let Ru = 0; Ru < pu; Ru++) {
                  const yu = ry(uu, Bu + bu, xu + Ru, Ju, Ku);
                  Tu[bu * pu + Ru] = yu, Number.isNaN(yu) || (Wu[bu * pu + Ru] = By(uu, Bu + bu, xu + Ru, yu, Ku))
                }
              const ju = [];
              let Hu = null,
                du = 1 / 0;
              for (let bu = 0; bu + Eu <= Su; bu++)
                for (let uu = 0; uu + Qu <= pu; uu++) {
                  const [Ru, Ku] = [Bu + bu, xu + uu], Ju = Math.hypot(Ru + Eu / 2 - yu[0], Ku + Qu / 2 - yu[2]);
                  if (Ju > Xu || mu >= Ru - 2 && mu < Ru + Eu + 2 && Nu >= Ku - 2 && Nu < Ku + Qu + 2) continue;
                  ju.length = 0;
                  let Vu = 0;
                  for (let yu = 0; yu < Eu; yu++)
                    for (let Ru = 0; Ru < Qu; Ru++) ju.push(Tu[(bu + yu) * pu + uu + Ru]), Vu += Wu[(bu + yu) * pu + uu + Ru];
                  const ru = xy(ju);
                  if (null === ru) continue;
                  const Su = Ju + 3 * (ru + Vu);
                  Su < du && (du = Su, Hu = [Ru, Ku])
                }
              return Hu
            }(this.api, Ju, Nu)) && void 0 !== Qu ? Qu : this.cornerOnTarget(Ju)) && void 0 !== Eu ? Eu : [Math.floor(Nu[0]) + 2, Math.floor(Nu[2])];
          this.placing = {
            id: uu,
            rotation: mu,
            corner: [Xu, this.playerLevel(), Vu],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null
          }, this.update(), this.api.sendCommand(`${Ku} preview`)
        }, this.rotate = () => {
          const {
            id: uu,
            rotation: Ru,
            corner: yu
          } = this.placing, Ku = Eu[(Eu.indexOf(Ru) + 1) % Eu.length], [Qu, , mu] = Zu(uu, Ru).size, [Ju, , Nu] = Zu(uu, Ku).size;
          this.moveTo(yu[0] + Math.floor(Qu / 2) - Math.floor(Ju / 2), yu[2] + Math.floor(mu / 2) - Math.floor(Nu / 2), Ku)
        }, this.hoverAt = (uu, Ru) => {
          this.placing.hover = [uu, Ru], this.moveCentreTo(this.camera, uu, Ru)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (uu, Ru) => {
          const yu = this.placing,
            {
              eye: Eu,
              forward: Ku,
              tanHalfFovX: Qu,
              tanHalfFovY: mu
            } = this.camera,
            Ju = {
              eye: [Eu[0], Eu[1], Eu[2]],
              forward: [Ku[0], Ku[1], Ku[2]],
              tanHalfFovX: Qu,
              tanHalfFovY: mu
            },
            Nu = yu.corner[1],
            Xu = Sy(Ju, uu, Ru, Nu);
          yu.hover = null, yu.drag = Xu && {
            view: Ju,
            ground: Xu,
            corner: [yu.corner[0], yu.corner[2]],
            level: Nu
          }
        }, this.dragTo = (uu, Ru) => {
          const yu = this.placing.drag,
            Eu = yu && Sy(yu.view, uu, Ru, yu.level);
          null !== yu && null !== Eu && this.moveTo(yu.corner[0] + Math.round(Eu[0] - yu.ground[0]), yu.corner[1] + Math.round(Eu[1] - yu.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const uu = this.view;
          uu.waiting || (uu.blocked ? this.Op({
            ...uu,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const uu = this.placing,
            {
              id: Ru,
              rotation: yu,
              corner: Eu
            } = uu;
          this.api.sendCommand(`${Ku} place ${Ru} ${Eu.join(" ")} ${yu}`), uu.sent = {
            atMs: performance.now(),
            corner: [...Eu],
            rotation: yu,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${Ku} preview off`))
        }, this.chunkWatch = new OR(uu), this.meshes = new yy(uu)
      }
      getView() {
        return this.view
      }
      sr() {
        const uu = this.placing;
        null !== uu && (null !== uu.sent && !uu.sent.timedOut && performance.now() - uu.sent.atMs > 3e3 ? (uu.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(uu) || this.chunkWatch.changed()) && this.update())
      }
      afterRender(uu) {
        const Ru = this.placing;
        null !== Ru && (! function(uu, Ru) {
          for (let yu = 0; yu < 3; yu++) Ru.eye[yu] = uu.cameraPosition[yu], Ru.forward[yu] = uu.cameraDirection[yu];
          Ru.tanHalfFovX = uu.tanHalfFovX, Ru.tanHalfFovY = uu.tanHalfFovY
        }(uu, this.camera), null !== Ru.hover && this.moveCentreTo(this.camera, Ru.hover[0], Ru.hover[1]))
      }
      SS(uu) {
        const Ru = this.placing;
        if (null === Ru || null === Ru.sent || "active" !== uu[0]) return;
        const {
          sent: yu
        } = Ru, [, Eu, Ku, Qu, mu, Ju, Nu] = uu;
        Ku && Eu === Ru.id && Nu === yu.rotation && Qu === yu.corner[0] && mu === yu.corner[1] && Ju === yu.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(uu) {
        let [Ru, , yu] = uu;
        const Eu = this.api.getTargetedBlock();
        if (null === Eu) return null;
        const [Ku, , Qu] = Eu.position;
        return [Ku - Math.floor(Ru / 2), Qu - Math.floor(yu / 2)]
      }
      playerLevel() {
        var uu;
        const [Ru, yu, Eu] = this.api.mH(this.localPlayerId);
        if (null !== (uu = this.api.getLocalPlayerMovement()) && void 0 !== uu && uu.onGround) return Math.ceil(yu - .01);
        const [Ku, Qu, mu] = [Math.floor(Ru), Math.floor(yu), Math.floor(Eu)];
        for (let Ju = Qu; Ju >= Qu - 2; Ju--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(Ku, Ju, mu))) return Ju + 1;
        return Qu
      }
      followPlayerLevel(uu) {
        if (jy(uu)) return !1;
        const Ru = this.playerLevel();
        return Ru !== uu.corner[1] && (uu.corner[1] = Ru, !0)
      }
      moveCentreTo(uu, Ru, yu) {
        const Eu = this.placing,
          Ku = Sy(uu, Ru, yu, Eu.corner[1]);
        if (null !== Ku) {
          const [uu, , Ru] = Zu(Eu.id, Eu.rotation).size;
          this.moveTo(Math.round(Ku[0] - uu / 2), Math.round(Ku[1] - Ru / 2))
        }
      }
      moveTo(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const Eu = this.placing;
        if (jy(Eu)) return;
        const [Ku, Qu, mu] = Eu.corner;
        if (this.centreOnPlot(Ku, mu) && !this.centreOnPlot(uu, Ru, yu))
          if (this.centreOnPlot(uu, mu, yu)) Ru = mu;
          else {
            if (!this.centreOnPlot(Ku, Ru, yu)) return;
            uu = Ku
          } uu === Ku && Ru === mu && yu === Eu.rotation || (Eu.rotation = yu, Eu.corner = [uu, Qu, Ru], this.update())
      }
      centreOnPlot(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: Eu,
          corner: Ku
        } = this.placing, [Qu, , mu] = Zu(Eu, yu).size;
        return this.api.canModifyBlockAt(uu + Math.floor(Qu / 2), Ku[1], Ru + Math.floor(mu / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.Op(null)
      }
      update() {
        const {
          id: uu,
          rotation: Ru,
          corner: yu,
          refusals: Eu
        } = this.placing, Ku = new Ry, Qu = [];
        let mu = !1,
          Ju = 0;
        for (const {
            offset: Vu,
            block: ru
          }
          of Zu(uu, Ru).cells) {
          const [uu, Ru, Eu] = [yu[0] + Vu[0], yu[1] + Vu[1], yu[2] + Vu[2]];
          Qu.push(uu, Ru, Eu);
          const Nu = !this.api.canModifyBlockAt(uu, Ru, Eu),
            Xu = this.api.getBlockId(uu, Ru, Eu),
            Bu = !IR(Xu) && !MR(this.api.blockNameToBlockId(ru), Xu);
          mu ||= Nu, Ju += Bu ? 1 : 0, Nu || Bu ? Ku.add(uu, Ru, Eu, uy, fR) : Ku.add(uu, Ru, Eu, UR(ru), Ty, zR(ru))
        }
        this.chunkWatch.watch(Qu), this.meshes.show(Ku.toArray());
        const Nu = this.view,
          Xu = jy(this.placing);
        (null === Nu || void 0 === Nu ? void 0 : Nu.id) === uu && Nu.blocked === mu && Nu.toClear === Ju && Nu.waiting === Xu && Nu.refusals === Eu || this.Op({
          id: uu,
          blocked: mu,
          toClear: Ju,
          waiting: Xu,
          refusals: Eu
        })
      }
      Op(uu) {
        this.view = uu, Vu.k.Op(py, uu, !0)
      }
    }

    function jy(uu) {
      let {
        sent: Ru
      } = uu;
      return null !== Ru && !Ru.timedOut
    }
    var Hy = yu(4053),
      dy = yu(38891);

    function by(uu, Ru, yu) {
      const Eu = [255 * uu, 255 * Ru, 255 * yu],
        [Ku, Qu, mu] = Eu.map((uu => uu + .4 * (255 - uu)));
      return {
        texture: "square_particle",
        Nr: 48,
        minLifeTime: .3 / dy.e,
        maxLifeTime: .55 / dy.e,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * dy.e * dy.e, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...Eu, 1],
          maxColor: [Ku, Qu, mu, 1]
        }, {
          timeFraction: 1,
          minColor: [...Eu, 0],
          maxColor: [Ku, Qu, mu, 0]
        }],
        blendMode: Hy.g.Standard
      }
    }
    const Cy = {
      texture: "glint",
      mipmaps: !1,
      Nr: 96,
      minLifeTime: .5 / dy.e,
      maxLifeTime: .9 / dy.e,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * dy.e * dy.e, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: Hy.g.OneOne
    };
    class ky {
      constructor(uu, Ru) {
        this.api = uu, this.localPlayerId = Ru, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(uu) {
        if (this.api.particlesEnabled())
          for (const [Ru, yu, Eu, Ku, Qu, mu] of uu.slice(0, 3)) {
            const uu = `${Ku},${Qu},${mu}`;
            let Ju = this.chips.get(uu);
            void 0 === Ju && (Ju = this.api.createParticles(by(Ku, Qu, mu), {
              pos: [Ru + .5, yu + .5, Eu + .5]
            }), this.chips.set(uu, Ju));
            for (let Ru = 0; Ru < 8; Ru++) this.setPoint(Ru, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            Ju.emitPoints([Ru + .5, yu + .5, Eu + .5], this.points, 8)
          }
      }
      layerDone(uu) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const Ru = uu.length / 3;
        if (0 === Ru || !this.api.particlesEnabled()) return;
        const yu = Math.min(Ru, 48),
          [Eu, Ku, Qu] = [uu[0] + .5, uu[1] + 1, uu[2] + .5];
        let mu = 0;
        for (let Ju = 0; Ju < yu; Ju++) {
          const Nu = 3 * Math.floor(Ju * Ru / yu);
          for (let Ru = 0; Ru < 2; Ru++) this.setPoint(mu++, uu[Nu] + Math.random() - Eu, uu[Nu + 1] + 1 - Ku, uu[Nu + 2] + Math.random() - Qu, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(Cy, {
          pos: [Eu, Ku, Qu]
        }), this.sparkles.emitPoints([Eu, Ku, Qu], this.points, mu)
      }
      dispose() {
        var uu;
        for (const Ru of this.chips.values()) Ru.stop();
        this.chips.clear(), null === (uu = this.sparkles) || void 0 === uu || uu.stop(), this.sparkles = null
      }
      setPoint(uu, Ru, yu, Eu, Ku) {
        const Qu = 4 * uu;
        this.points[Qu] = Ru, this.points[Qu + 1] = yu, this.points[Qu + 2] = Eu, this.points[Qu + 3] = Ku
      }
    }
    var ey = yu(1915);
    const Ay = "SpecialAction1",
      Dy = "KeyY",
      My = "KeyX";

    function Iy(uu) {
      let {
        placement: Ru
      } = uu;
      const yu = (0, Mu.h)(py, Ru.getView()),
        {
          t: Eu
        } = (0, Gu.E)(),
        {
          isTouchScreen: Ku
        } = (0, Ju.j)(["isTouchScreen"]),
        Qu = null !== yu,
        mu = Qu && !yu.blocked && !yu.waiting;
      if ((0, Du.c)((uu => Qu && !uu.repeat && !(0, Xu.isTypingInInput)() && !(0, Nu.p)() && !Ku), (uu => {
          const yu = function(uu, Ru, yu) {
            if (uu === My) return Ru.stop;
            if (uu === Dy) return yu ? Ru.build : Uy;
            return ey.x[Ay].includes(uu) ? Ru.rotate : null
          }(uu.code, Ru, mu);
          null !== yu && (uu.stopPropagation(), yu())
        })), !Qu) return null;
      let Vu = Ku ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return yu.blocked ? Vu = "plotsGame:placementOffPlot" : yu.toClear > 0 && (Vu = "plotsGame:placementClear"), (0, Pu.jsx)(mR.d, {
        placement: "bottom",
        children: (0, Pu.jsxs)("div", {
          className: "PlotsPlacementCard",
          children: [(0, Pu.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: Eu(Su(yu.id).displayName.translationKey)
          }), (0, Pu.jsx)("div", {
            className: Cu()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: yu.refusals > 0
            }),
            children: Eu(Vu)
          }, yu.refusals), (0, Pu.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, Pu.jsxs)(eu.e, {
              onClick: Ru.rotate,
              children: [(0, Pu.jsx)(Gy, {
                noaAction: Ay
              }), Eu("plotsGame:placementRotate")]
            }), (0, Pu.jsxs)(eu.F, {
              onClick: Ru.stop,
              children: [(0, Pu.jsx)(Gy, {
                keyCode: My
              }), Eu("general:cancel")]
            }), (0, Pu.jsxs)(eu.l, {
              disabled: !mu,
              onClick: Ru.build,
              children: [(0, Pu.jsx)(Gy, {
                keyCode: Dy
              }), Eu("plotsGame:placementBuild")]
            })]
          })]
        })
      })
    }

    function Gy(uu) {
      return (0, Pu.jsx)(NR.b, {
        className: "PlotsPlacementKey",
        ...uu
      })
    }

    function Uy() {}
    var ny = yu(4314);
    class sy {
      constructor(uu) {
        this.placement = uu, this.press = null
      }
      down(uu) {
        if (null !== this.press) return !1;
        const {
          id: Ru,
          mouse: yu,
          x: Eu,
          y: Ku,
          atMs: Qu
        } = uu;
        return this.press = {
          id: Ru,
          mouse: yu,
          x: Eu,
          y: Ku,
          atMs: Qu,
          moved: !1
        }, yu || this.placement.beginDrag(uu.ndcX, uu.ndcY), !0
      }
      move(uu) {
        const Ru = this.press;
        null !== Ru && Ru.id === uu.id && (Ru.moved ||= Math.hypot(uu.x - Ru.x, uu.y - Ru.y) > 8), uu.mouse ? this.placement.hoverAt(uu.ndcX, uu.ndcY) : (null === Ru || void 0 === Ru ? void 0 : Ru.id) === uu.id && this.placement.dragTo(uu.ndcX, uu.ndcY)
      }
      up(uu) {
        const Ru = this.press;
        (null === Ru || void 0 === Ru ? void 0 : Ru.id) === uu.id && (this.move(uu), this.end(), !Ru.moved && (Ru.mouse || uu.atMs - Ru.atMs <= 250) && this.placement.tap())
      }
      cancel(uu) {
        var Ru;
        (null === (Ru = this.press) || void 0 === Ru ? void 0 : Ru.id) === uu && this.end()
      }
      leave(uu) {
        let {
          id: Ru,
          mouse: yu
        } = uu;
        yu && this.placement.endHover(), this.cancel(Ru)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }

    function ty(uu) {
      let {
        placement: Ru
      } = uu;
      return null === (0, Mu.h)(py, Ru.getView()) ? null : (0, Pu.jsx)(ly, {
        placement: Ru
      })
    }

    function ly(uu) {
      let {
        placement: Ru
      } = uu;
      (0, ny.c)(!0, !0, "PlotsPlacementLayer");
      const yu = (0, Qu.useMemo)((() => new sy(Ru)), [Ru]);
      return (0, Pu.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: uu => {
          "mouse" === uu.pointerType && 0 !== uu.button || !yu.down(gy(uu)) || uu.currentTarget.setPointerCapture(uu.pointerId)
        },
        onPointerMove: uu => {
          yu.move(gy(uu))
        },
        onPointerUp: uu => {
          yu.up(gy(uu))
        },
        onPointerCancel: uu => {
          yu.cancel(uu.pointerId)
        },
        onLostPointerCapture: uu => {
          yu.cancel(uu.pointerId)
        },
        onPointerLeave: uu => {
          yu.leave(gy(uu))
        },
        "aria-hidden": !0
      })
    }

    function gy(uu) {
      const {
        left: Ru,
        top: yu,
        width: Eu,
        height: Ku
      } = uu.currentTarget.getBoundingClientRect();
      return {
        id: uu.pointerId,
        mouse: "mouse" === uu.pointerType,
        x: uu.clientX,
        y: uu.clientY,
        ndcX: (uu.clientX - Ru) / Eu * 2 - 1,
        ndcY: 1 - (uu.clientY - yu) / Ku * 2,
        atMs: uu.timeStamp
      }
    }
    var cy = yu(2278),
      Ly = yu(36532),
      zy = yu(1899),
      Fy = yu(1232);
    const wy = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function Zy(uu) {
      let {
        hud: Ru
      } = uu;
      const yu = (0, Mu.h)(VR, Ru.getPlot()),
        [Eu, Ku] = (0, Qu.useState)(null),
        mu = (0, Ly.g)(Eu);
      if ("none" === yu[0]) return null;
      const [, Ju, Nu, Xu, Vu, ru] = yu;
      return (0, Pu.jsx)("div", {
        className: Cu()("PlotsPlotBannerContainer", {
          Below: mu
        }),
        children: (0, Pu.jsx)(hy, {
          plotX: Ju,
          plotZ: Nu,
          ownerName: Xu,
          ownerId: Vu,
          relation: ru,
          plaqueRef: Ku
        }, `${Ju},${Nu}`)
      })
    }

    function hy(uu) {
      var Ru, yu;
      let {
        plotX: Eu,
        plotZ: Ku,
        ownerName: Qu,
        ownerId: mu,
        relation: Ju,
        plaqueRef: Nu
      } = uu;
      const {
        t: Xu
      } = (0, Gu.E)(), Vu = (0, zy.i)("hiddenPlayerNames"), ru = (0, zy.i)("players"), Bu = null === mu ? null : null !== (Ru = null === (yu = ru.byId[mu]) || void 0 === yu ? void 0 : yu.cosmetics) && void 0 !== Ru ? Ru : null, xu = Xu("plotsGame:plotBannerCoords", {
        x: Eu,
        z: Ku
      }), Su = "own" === Ju || null !== Qu;
      return (0, Pu.jsxs)("div", {
        ref: Nu,
        className: Cu()("PlotsPlotBanner", {
          Own: "own" === Ju,
          Shared: "shared" === Ju
        }),
        role: "status",
        children: [(0, Pu.jsxs)("span", {
          className: Cu()("PlotsPlotBannerSeal", {
            Face: null !== Bu
          }),
          children: [null !== Bu && (0, Pu.jsx)(cy.b, {
            cosmetics: Bu
          }), null === Bu && (0, Pu.jsx)(ku.c, {
            name: wy[Ju]
          })]
        }), (0, Pu.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, Pu.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === Ju && Xu("plotsGame:plotBannerYours"), "own" !== Ju && null !== Qu && Xu("plotsGame:plotBannerOwner", {
              name: (0, Fy.e)(Qu, Vu)
            }), !Su && xu]
          }), Su && (0, Pu.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [xu, "shared" === Ju && (0, Pu.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: Xu("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }

    function Py(uu) {
      let {
        progress: Ru,
        goal: yu
      } = uu;
      const Eu = Math.min(Ru, yu);
      return (0, Pu.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, Pu.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": yu,
          "aria-valuenow": Eu,
          children: (0, Pu.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${Eu/yu})`
            }
          })
        }), (0, Pu.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [Eu, "/", yu]
        })]
      })
    }

    function iy(uu) {
      return {
        translationKey: `plotsGame:${uu}`,
        actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
      }
    }
    const Yy = {
      house: {
        icon: "house",
        titleKey: "plotsGame:starterLotHouseTitle",
        desktop: iy("starterLotHouseHint", ["alt-fire"]),
        touch: iy("starterLotHouseHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotHousePlain"
      },
      garden: {
        icon: "sparkle",
        titleKey: "plotsGame:starterLotGarden",
        desktop: iy("starterLotGardenHint", ["alt-fire"]),
        touch: iy("starterLotGardenHint", ["alt-fire"]),
        plainKey: "plotsGame:starterLotGardenPlain"
      },
      boulder: {
        icon: "hammer",
        titleKey: "plotsGame:starterLotBoulder",
        desktop: iy("starterLotBreakHint", ["primary-fire"]),
        touch: iy("starterLotBreakHintTouch"),
        plainKey: "plotsGame:starterLotBreakPlain"
      },
      fly: {
        icon: "angles-up",
        titleKey: "plotsGame:starterLotFly",
        desktop: iy("starterLotFlyHint", ["jump"]),
        touch: iy("starterLotFlyHintTouch"),
        plainKey: "plotsGame:starterLotFlyPlain"
      },
      backpack: {
        icon: "backpack",
        titleKey: "plotsGame:starterLotBackpack",
        desktop: iy("starterLotBackpackHint", ["OpenInventory"]),
        touch: iy("starterLotBackpackHintTouch"),
        plainKey: "plotsGame:starterLotBackpackPlain"
      },
      neighbour: {
        icon: "person",
        titleKey: "plotsGame:starterLotNeighbour",
        desktop: iy("starterLotNeighbourHint", ["forward", "left", "backward", "right"]),
        touch: iy("starterLotNeighbourHintTouch"),
        plainKey: "plotsGame:starterLotNeighbourPlain"
      }
    };

    function oy(uu, Ru, yu) {
      const {
        translationKey: Eu,
        actions: Ku
      } = yu ? Ru.touch : Ru.desktop;
      if (0 === Ku.length) return uu(Eu);
      const Qu = [];
      for (const mu of Ku) {
        const Eu = (0, ey.v)(mu, yu),
          Ku = ey.x[mu][0];
        if (null === Eu && void 0 === Ku) return uu(Ru.plainKey);
        Qu.push(null === Eu ? (0, ey.o)(Ku) : uu(Eu.translationKey))
      }
      return uu(Eu, {
        key: Qu.join("")
      })
    }

    function qy(uu) {
      let {
        hud: Ru
      } = uu;
      const yu = (0, Mu.h)(XR, Ru.getStep()),
        {
          t: Eu
        } = (0, Gu.E)();
      return (0, Pu.jsxs)(mR.d, {
        placement: "bottom",
        children: ["step" === yu[0] && (0, Pu.jsx)(Oy, {
          step: yu[1],
          progress: yu[2],
          goal: yu[3]
        }, yu[1]), "celebrate" === yu[0] && (0, Pu.jsx)(vy, {
          className: Cu()("Celebrate", {
            Gold: "house" === yu[1]
          }),
          icon: "star",
          title: Eu("house" === yu[1] ? "plotsGame:starterLotYourPlot" : "plotsGame:starterLotBriefDone")
        }, `celebrate-${yu[1]}`)]
      })
    }

    function Oy(uu) {
      let {
        step: Ru,
        progress: yu,
        goal: Eu
      } = uu;
      const {
        isTouchScreen: Ku
      } = (0, Ju.j)(["isTouchScreen"]), {
        t: Qu
      } = (0, Gu.E)(), mu = Yy[Ru];
      return (0, Pu.jsxs)(vy, {
        icon: mu.icon,
        title: Qu(mu.titleKey),
        children: [(0, Pu.jsx)("div", {
          className: "PlotsStepCardHint SmallTextLight",
          children: oy(Qu, mu, Ku)
        }), Eu > 1 && (0, Pu.jsx)(Py, {
          progress: yu,
          goal: Eu
        }), "backpack" === Ru && Ku && (0, Pu.jsx)(ay, {})]
      })
    }

    function vy(uu) {
      let {
        className: Ru,
        icon: yu,
        title: Eu,
        children: Ku
      } = uu;
      return (0, Pu.jsxs)("div", {
        className: Cu()("PlotsStepCard", Ru),
        role: "status",
        children: [(0, Pu.jsx)("span", {
          className: "PlotsStepCardIcon",
          children: (0, Pu.jsx)(ku.c, {
            name: yu
          })
        }), (0, Pu.jsxs)("div", {
          className: "PlotsStepCardBody",
          children: [(0, Pu.jsx)("div", {
            className: "PlotsStepCardTitle SmallTextBold",
            children: Eu
          }), Ku]
        })]
      })
    }

    function ay() {
      return (0, Qu.useEffect)((() => (Ju.d.set({
        backpackPointerRequested: !0
      }), () => {
        Ju.d.set({
          backpackPointerRequested: !1
        })
      })), []), null
    }
    const fy = function(uu, Ru, yu, Eu) {
      let {
        localPlayerId: Ku
      } = Eu;
      const Ju = new rR;
      let Nu = null,
        Xu = null,
        Vu = null,
        ru = null,
        Bu = null;
      const xu = [];
      return {
        onCreate: uu => {
          Nu = new ky(uu, Ku), Xu = new Ny(uu, Ku, Nu), Vu = new Ny(uu, Ku, Nu), ru = new Wy(uu, Ku), Bu = new du(uu, ru), xu.push((0, mu.w)((0, Qu.createElement)(Qu.Fragment, null, (0, Qu.createElement)(Zy, {
            hud: Ju
          }), (0, Qu.createElement)(qy, {
            hud: Ju
          }), (0, Qu.createElement)(xR, {
            hud: Ju,
            journal: Bu
          }), (0, Qu.createElement)(ty, {
            placement: ru
          }), (0, Qu.createElement)(Iy, {
            placement: ru
          })), {
            content: (0, Qu.createElement)(KR, {
              journal: Bu
            })
          }))
        },
        sr: () => {
          Xu.sr(), Vu.sr(), ru.sr(), Bu.sr()
        },
        onPlayerAttemptAltAction: (uu, Ru, yu, Eu, Ku, Qu) => {
          var mu;
          if (null !== Qu) return;
          const Ju = void 0 === Ru ? null : [Ru, yu, Eu];
          return null !== (mu = Xu.attemptAltAction(Ju)) && void 0 !== mu ? mu : Vu.attemptAltAction(Ju)
        },
        onPlayerClickUp: () => {
          Xu.endPress(), Vu.endPress()
        },
        onAfterRender: (uu, Ru) => {
          ru.afterRender(Ru), Xu.afterRender(Ru), Vu.afterRender(Ru)
        },
        onClose: () => {
          for (const uu of xu) uu();
          Nu.dispose(), Xu.dispose(), Vu.dispose(), ru.dispose(), Nu = null, Xu = null, Vu = null, ru = null, Bu = null
        },
        onReceivedMessageFromServer: (uu, Ru) => {
          if ("plotsStarterLot" === uu) Ju.receiveStep(Ru);
          else if ("plotsPlot" === uu) Ju.receivePlot(Ru);
          else if ("plotsStarterHouse" === uu) Xu.SS(Ru);
          else if ("plotsBlueprint" === uu) {
            const uu = Ru;
            Vu.SS(uu), ru.SS(uu)
          } else "plotsJournal" === uu ? Bu.SS(Ru) : "plotsJournalOpen" === uu ? Bu.openFromServer() : "plotsPreviewEnd" === uu && ru.endFromServer()
        }
      }
    }
  },
  38891: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu,
      h: () => Qu
    });
    const Eu = 1 / .6,
      Ku = {
        kind: "smokePuff"
      };
    class Qu {
      constructor(uu, Ru, yu) {
        this.style = uu, this.Nr = Ru, this.half = yu, this.particles = null, this.lastFrame = -1
      }
      emit(uu, Ru, yu) {
        let Qu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return yu !== this.lastFrame && (this.lastFrame = yu, this.particles || (this.particles = uu.createParticles(function(uu, Ru) {
          const [
            [yu, Qu, mu],
            [Ju, Nu, Xu]
          ] = uu.colours;
          return {
            texture: uu.soft ? Ku : "square_particle",
            Nr: Ru,
            minLifeTime: uu.life[0] / Eu,
            maxLifeTime: uu.life[1] / Eu,
            minEmitPower: uu.power[0] * Eu,
            maxEmitPower: uu.power[1] * Eu,
            minSize: uu.size[0],
            maxSize: uu.size[1],
            emitRate: 0,
            gravity: [0, uu.lift * Eu * Eu, 0],
            dir1: [-uu.spread, 1, -uu.spread],
            dir2: [uu.spread, 1, uu.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [yu, Qu, mu, uu.alpha],
              maxColor: [Ju, Nu, Xu, uu.alpha]
            }, {
              timeFraction: 1,
              minColor: [yu, Qu, mu, 0],
              maxColor: [Ju, Nu, Xu, 0]
            }],
            blendMode: uu.blendMode
          }
        }(this.style, this.Nr), {
          pos: Ru,
          half: this.half
        })), this.particles.moveTo(Ru, this.half), this.particles.emit(Qu), !0)
      }
      dispose() {
        var uu;
        null === (uu = this.particles) || void 0 === uu || uu.stop(), this.particles = null
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);