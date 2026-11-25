export const id = 22;
export const ids = [22];
export const modules = {
  36990: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Nu,
      h: () => Ou,
      k: () => cu,
      n: () => bu
    });
    var su = ju(34547),
      Uu = ju(36992),
      Zu = ju(36998),
      Xu = ju(8942),
      lu = ju(1499),
      qu = ju(58),
      fu = ju(65),
      Cu = ju(1154);

    function bu() {
      var uu;
      return (0, lu.g)(Uu.c, (0, Uu.l)()), (0, Cu.jsx)(Cu.Fragment, {
        children: null === (uu = (0, Uu.l)()) || void 0 === uu ? void 0 : uu.content
      })
    }

    function cu(uu) {
      var Eu;
      let {
        show: ju
      } = uu;
      (0, lu.g)(Uu.c, (0, Uu.l)());
      const fu = null === (Eu = (0, Uu.l)()) || void 0 === Eu ? void 0 : Eu.menu;
      return (0, qu.useEffect)((() => {
        var uu;
        ju || (null === fu || void 0 === fu || null === (uu = fu.onClose) || void 0 === uu || uu.call(fu), (0, Zu.q)())
      }), [ju, fu]), (0, qu.useEffect)((() => ju ? (0, Xu.f)(Zu.x, Zu.h) : void 0), [ju]), (0, Cu.jsx)(su.b, {
        showing: ju,
        globallyUniqueKey: "clientGameMenu",
        children: null === fu || void 0 === fu ? void 0 : fu.content
      })
    }

    function Nu(uu) {
      let {
        placement: Eu = "bottom"
      } = uu;
      return (0, Cu.jsx)("div", {
        id: `clientGameHud-${Eu}`,
        style: {
          display: "contents"
        }
      })
    }

    function Ou(uu) {
      let {
        children: Eu,
        placement: ju = "bottom"
      } = uu;
      const [su, Uu] = (0, qu.useState)(null);
      return (0, qu.useEffect)((() => {
        Uu(document.getElementById(`clientGameHud-${ju}`))
      }), [ju]), su ? (0, fu.createPortal)(Eu, su) : null
    }
  },
  34547: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Zu
    });
    var su = ju(4723),
      Uu = ju(4726);

    function Zu(uu) {
      let {
        children: Eu,
        showing: ju,
        globallyUniqueKey: Zu,
        alwaysMountChildren: Xu = !1,
        doGameplayStartStopOnShow: lu = !0,
        keepsMovement: qu = !1
      } = uu;
      return (0, Uu.e)(!0, ju, Zu, qu), (0, su.e)(lu, ju), ju || Xu ? Eu : null
    }
  },
  37075: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Zu,
      f: () => Xu,
      i: () => lu,
      l: () => qu
    });
    var su = ju(58),
      Uu = ju(3285);
    const Zu = 8,
      Xu = "InGameHeaderContainer",
      lu = "TopRightElements";

    function qu(uu) {
      const [Eu] = (0, Uu.d)(), [ju, qu] = (0, su.useState)(!1);
      return (0, su.useLayoutEffect)((() => {
        if (!uu) return;
        const Eu = document.querySelector(`.${Xu}`),
          ju = document.querySelector(`.${lu}`),
          su = () => {
            const su = uu.getBoundingClientRect(),
              Uu = Eu ? Eu.getBoundingClientRect().right : 0,
              Xu = ju ? ju.getBoundingClientRect().left : window.innerWidth,
              lu = su.left < Uu + Zu,
              fu = su.right > Xu - Zu;
            qu(lu || fu)
          };
        su();
        const Uu = new ResizeObserver(su);
        return Uu.observe(uu), Eu && Uu.observe(Eu), ju && Uu.observe(ju), () => {
          Uu.disconnect()
        }
      }), [uu, Eu]), ju
    }
  },
  8942: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      f: () => Uu
    });
    let su = null;
    const Uu = function(uu) {
        const Eu = {
          cycle: uu,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return su = Eu, () => {
          su === Eu && (su = null)
        }
      },
      Zu = () => {
        var uu;
        return null !== (uu = su) && void 0 !== uu && uu.canCycle() ? su.cycle : null
      }
  },
  38836: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu,
      d: () => lu,
      e: () => qu
    });
    const su = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Uu = [0, 1, 2, 0, 2, 3],
      Zu = [4, 5];

    function Xu(uu, Eu, ju, su, Uu) {
      for (let Xu = 0; Xu < 6; Xu++) Zu.includes(Xu) === Uu && fu(uu, Eu, ju, su, Xu)
    }

    function lu(uu, Eu, ju, su) {
      for (let Uu = 0; Uu < 6; Uu++) fu(uu, Eu, ju, su, Uu)
    }

    function qu(uu, Eu, ju, Zu, Xu) {
      for (let lu = 0; lu < 6; lu++)
        for (const qu of [0, 1]) {
          const [fu, Cu, bu] = [qu + 2, qu + 1, (qu + 3) % 4], cu = uu.length / 3;
          for (const [Eu, Uu] of [
              [qu, Cu],
              [fu, Cu],
              [fu, bu],
              [qu, bu]
            ])
            for (let qu = 0; qu < 3; qu++) {
              const fu = su[3 * (4 * lu + Eu) + qu],
                Cu = su[3 * (4 * lu + Uu) + qu];
              uu.push((fu + (Cu - fu) * Xu) * Zu / 2 + ju[qu])
            }
          for (const uu of Uu) Eu.push(cu + uu)
        }
    }

    function fu(uu, Eu, ju, Zu, Xu) {
      let [lu, qu, fu] = ju, [Cu, bu, cu] = Zu;
      const Nu = uu.length / 3;
      for (let Uu = 4 * Xu; Uu < 4 * Xu + 4; Uu++) uu.push(su[3 * Uu] * Cu / 2 + lu, su[3 * Uu + 1] * bu / 2 + qu, su[3 * Uu + 2] * cu / 2 + fu);
      for (const su of Uu) Eu.push(Nu + su)
    }
  },
  39757: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => Ps
    });
    const su = [0, 90, 180, 270],
      Uu = "plotsblueprint";
    var Zu = ju(58),
      Xu = ju(36992),
      lu = ju(22),
      qu = ju(1499),
      fu = ju(2040),
      Cu = ju(1244),
      bu = ju(1105),
      cu = ju.n(bu),
      Nu = ju(1687),
      Ou = ju(36990),
      Yu = ju(1116),
      hu = ju(1971),
      Du = ju(2031),
      gu = ju(3610),
      Mu = ju(1779);

    function eu() {}
    const Gu = (0, Zu.createContext)({
      hint: null,
      journalRef: eu,
      placementCardRef: eu,
      buildRef: eu
    });
    var pu = ju(24);
    const wu = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      Ju = {
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
      du = ["small", "medium", "large"].flatMap((uu => wu.flat().filter((Eu => Ju[Eu].tier === uu))));

    function au(uu) {
      return Ju[uu]
    }
    const Pu = new Map(wu.flatMap((uu => uu.slice(1).map(((Eu, ju) => [Eu, uu[ju]])))));

    function ou(uu) {
      var Eu;
      return null !== (Eu = Pu.get(uu)) && void 0 !== Eu ? Eu : null
    }
    const ku = {
      farm_hut: {
        key: "plotsGame:journalNoteFarmHut",
        firstBuild: !0
      },
      rusticHome_tent: {
        key: "plotsGame:journalNoteRusticHomeTent",
        firstBuild: !1
      },
      castle_tower: {
        key: "plotsGame:journalNoteCastleTower",
        firstBuild: !1
      },
      farm_house: {
        key: "plotsGame:journalNoteFarmHouse",
        firstBuild: !1
      },
      farm_barn: {
        key: "plotsGame:journalNoteFarmBarn",
        firstBuild: !1
      }
    };

    function mu(uu, Eu) {
      const ju = new Set(uu),
        su = function(uu) {
          const Eu = new Set(uu);
          return new Set(du.filter((uu => {
            const ju = ou(uu);
            return null === ju || Eu.has(ju)
          })))
        }(ju);
      return du.map((uu => {
        const Uu = uu === Eu;
        if (ju.has(uu)) return {
          id: uu,
          active: Uu,
          note: null,
          state: "completed",
          unlockedBy: null
        };
        const Zu = ku[uu],
          Xu = void 0 === Zu || Zu.firstBuild && ju.size > 0 ? null : Zu.key;
        return su.has(uu) ? {
          id: uu,
          active: Uu,
          note: Xu,
          state: "open",
          unlockedBy: null
        } : {
          id: uu,
          active: Uu,
          note: Xu,
          state: "locked",
          unlockedBy: ou(uu)
        }
      }))
    }
    const vu = "plotsJournalChanged";
    class Ku {
      constructor(uu, Eu) {
        this.api = uu, this.placement = Eu, this.pages = null, this.openRequested = null, this.openedOffered = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.HN(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
        }, this.build = uu => {
          this.placement.start(uu), (0, Xu.e)()
        }, this.putAway = () => {
          this.api.sendCommand(`${Uu} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      NO(uu) {
        let [, Eu, ju] = uu;
        this.pages = mu(Eu, ju), pu.h.TY(vu, this.pages, !0)
      }
      openFromServer(uu) {
        let [, Eu] = uu;
        this.openRequested = Eu, this.Tb()
      }
      Tb() {
        const uu = this.openRequested;
        null === uu || lu.d.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, Nu.s)() || (0, Mu.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = uu, (0, Xu.m)()))
      }
      HN(uu) {
        this.reported.has(uu) || (this.reported.add(uu), this.api.sendCommand(`${Uu} report ${uu}`))
      }
    }
    var Vu = ju(1154);
    const ru = "KeyJ";

    function Qu(uu) {
      let {
        journal: Eu
      } = uu;
      const ju = (0, qu.g)(vu, Eu.getPages()),
        {
          isTouchScreen: su
        } = (0, lu.l)(["isTouchScreen"]),
        {
          t: Uu
        } = (0, Cu.A)(),
        fu = (0, Zu.useContext)(Gu);
      return (0, gu.e)((uu => null !== ju && uu.code === ru && !uu.repeat && !(0, Mu.isTypingInInput)()), (uu => {
        (0, Nu.D)(uu, !0, Xu.m)
      })), null === ju ? null : (0, Vu.jsx)(Ou.h, {
        placement: "topRight",
        children: (0, Vu.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, Vu.jsxs)("button", {
            ref: fu.journalRef,
            type: "button",
            className: cu()("PlotsJournalButton SmallTextBold", {
              Touch: su
            }),
            onClick: Xu.m,
            children: [(0, Vu.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, Vu.jsx)(hu.d, {
                itemName: "Book",
                amount: 0
              })
            }), Uu("plotsGame:journalButton"), !su && (0, Vu.jsx)(Du.b, {
              className: "PlotsJournalButtonKey",
              keyCode: ru
            }), "openJournal" === fu.hint && (0, Vu.jsx)(Yu.e, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon HandLeftAnim PlotsJournalButtonHand"
            })]
          })
        })
      })
    }
    var iu = ju(9409);
    const Wu = [0, 90, 180, 270],
      Su = /^(meta\|rot\d)\|([lrud]+)$/,
      Iu = "nesw",
      Fu = /^meta\|([nesw]*)\|?(Stacked)?$/,
      Bu = function(uu) {
        const Eu = new WeakMap;
        return (ju, su) => {
          let Uu = Eu.get(ju);
          return void 0 === Uu && (Uu = uu(ju, su), Eu.set(ju, Uu)), Uu
        }
      }((uu => new Lu(uu)));
    class Lu {
      constructor(uu) {
        this.blockMetadata = uu, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const Eu = new Set(Object.keys(uu).map((Eu => uu[Eu].id)));
        Eu.add(0), this.maxBlockId = Math.max(...Eu)
      }
      static
      for (uu) {
        return Bu(uu)
      }
      getBlockIdMapping(uu, Eu) {
        const ju = this.getBlockIdMappingKey(uu, Eu);
        let su = this.blockIdMappings.get(ju);
        return void 0 === su && Wu.includes(uu) && (su = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, uu, Eu), this.blockIdMappings.set(ju, su)), su
      }
      turnBlockId(uu, Eu, ju) {
        return this.mapBlockId(this.blockMetadata[uu], Eu, this.getRotationMapping(Eu, ju), ju)
      }
      getBlockIdMappingKey(uu, Eu) {
        return `r${uu}|m${Number(Eu)}`
      }
      createBlockIdMapping(uu, Eu, ju, su) {
        const Uu = new Uint16Array(Eu + 1),
          Zu = this.getRotationMapping(ju, su);
        for (const Xu in uu) {
          const Eu = uu[Xu];
          Uu[Eu.id] = this.mapBlockId(Eu, ju, Zu, su)
        }
        return Uu
      }
      getRotationMapping(uu, Eu) {
        const ju = Math.round(uu / 90),
          su = new Uint8Array(4);
        for (let Uu = 0; Uu < 4; Uu++) su[Uu] = (4 + Uu - ju) % 4;
        if (Eu) {
          let uu = su[0];
          su[0] = su[1], su[1] = uu, uu = su[2], su[2] = su[3], su[3] = uu
        }
        return su
      }
      mapBlockId(uu, Eu, ju, su) {
        var Uu;
        const {
          blockMetadata: Zu
        } = this, Xu = Math.round(Eu / 90), {
          id: lu,
          meta: qu
        } = uu, {
          rot: fu,
          rootName: Cu,
          metaStr: bu
        } = qu;
        let cu;
        const [, Nu, Ou] = null !== (Uu = Fu.exec(bu)) && void 0 !== Uu ? Uu : [];
        if (void 0 !== Nu) {
          var Yu, hu;
          cu = null !== (Yu = null === (hu = Zu[`${Cu}|meta|${[Iu.split("").filter(((uu,Eu)=>Nu.split("").some((uu=>{const ju=Iu.indexOf(uu);return((su?3-ju:ju)+Xu)%4===Eu})))).join(""),Ou].filter(Boolean).join("|")}`]) || void 0 === hu ? void 0 : hu.id) && void 0 !== Yu ? Yu : lu
        } else if (null === fu) cu = lu;
        else {
          var Du, gu;
          const uu = ju[fu - 1] + 1;
          let Eu = bu.replace(`rot${fu}`, `rot${uu}`);
          su && qu.stairsCorner && (Eu = Eu.replace(/(Left|Right)$/, (uu => "Left" === uu ? "Right" : "Left"))), su && "Chest" === Cu && (Eu = Eu.replace(/\|(left|right)$/, ((uu, Eu) => "left" === Eu ? "|right" : "|left")));
          const Uu = Su.exec(Eu);
          if (su && null !== Uu) {
            const uu = "lrud".split("").filter((uu => Uu[2].includes("l" === uu ? "r" : "r" === uu ? "l" : uu)));
            Eu = `${Uu[1]}|${uu.join("")}`
          }
          const Xu = `${Cu}|${Eu}`;
          if (cu = null !== (Du = null === (gu = Zu[Xu]) || void 0 === gu ? void 0 : gu.id) && void 0 !== Du ? Du : null, null === cu) {
            const uu = Zu[Cu];
            cu = uu.rootMetaDesc === Xu ? uu.id : lu
          }
        }
        return cu
      }
    }

    function tu(uu, Eu, ju) {
      let {
        xRotationMappedOrigin: su,
        shouldSwapXZ: Uu
      } = ju;
      const Zu = Uu ? Eu : uu;
      return null === su ? Zu : su - Zu
    }

    function xu(uu, Eu, ju) {
      let {
        zRotationMappedOrigin: su,
        shouldSwapXZ: Uu
      } = ju;
      const Zu = Uu ? uu : Eu;
      return null === su ? Zu : su - Zu
    }
    const Tu = {
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
      Hu = new Map;

    function Au(uu, Eu) {
      const ju = `${uu}|${Eu}`;
      let su = Hu.get(ju);
      if (void 0 === su) {
        const {
          size: Uu,
          palette: Zu,
          layers: Xu
        } = Tu[uu], lu = 90 === Eu || 270 === Eu, [qu, fu] = lu ? [Uu[2], Uu[0]] : [Uu[0], Uu[2]], Cu = function(uu, Eu, ju) {
          let su = null,
            Uu = null,
            Zu = !1;
          switch (uu) {
            case 0:
              break;
            case 90:
              su = Eu - 1, Zu = !0;
              break;
            case 180:
              su = Eu - 1, Uu = ju - 1;
              break;
            case 270:
              Uu = ju - 1, Zu = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${uu}`)
          }
          return {
            xRotationMappedOrigin: su,
            zRotationMappedOrigin: Uu,
            shouldSwapXZ: Zu
          }
        }(Eu, qu, fu), bu = Lu.for(iu.f), cu = Zu.map((uu => (0, iu.e)(bu.turnBlockId((0, iu.g)(uu), Eu, !1)))), Nu = [];
        Xu.forEach(((uu, Eu) => {
          uu.split(" ").forEach(((uu, ju) => {
            for (let su = 0; su < uu.length; su++)
              if ("." !== uu[su]) {
                const Uu = [tu(su, ju, Cu), Eu, xu(su, ju, Cu)];
                Nu.push({
                  offset: Uu,
                  block: cu[uu.charCodeAt(su) - "a".charCodeAt(0)]
                })
              }
          }))
        })), su = {
          size: [qu, Uu[1], fu],
          cells: Nu
        }, Hu.set(ju, su)
      }
      return su
    }
    const nu = "plotsBuildProgressChanged",
      yu = new Map;

    function zu(uu, Eu, ju) {
      let su = 0,
        Uu = 0;
      return function(uu) {
        let Eu = yu.get(uu);
        if (void 0 === Eu) {
          const su = [];
          for (const {
              offset: Eu
            }
            of Au(uu, 0).cells) {
            var ju;
            su[Eu[1]] = (null !== (ju = su[Eu[1]]) && void 0 !== ju ? ju : 0) + 1
          }
          Eu = su, yu.set(uu, Eu)
        }
        return Eu
      }(uu).forEach(((uu, ju) => {
        su += uu, ju > Eu && (Uu += uu)
      })), {
        id: uu,
        filled: su - Uu - ju,
        total: su
      }
    }
    class Ru {
      constructor() {
        this.shown = null, this.topOpen = 0, this.progress = null
      }
      get() {
        return this.progress
      }
      show(uu) {
        this.shown = uu, this.topOpen = 0, null === uu && this.TY(null)
      }
      update(uu, Eu, ju) {
        const su = this.shown;
        null !== su && (uu >= Eu && (this.topOpen = ju), this.TY(zu(su.id, Eu - su.y, uu >= Eu ? ju : this.topOpen + ju)))
      }
      TY(uu) {
        const Eu = this.progress;
        (null === uu || void 0 === uu ? void 0 : uu.id) === (null === Eu || void 0 === Eu ? void 0 : Eu.id) && (null === uu || void 0 === uu ? void 0 : uu.filled) === (null === Eu || void 0 === Eu ? void 0 : Eu.filled) && (null === uu || void 0 === uu ? void 0 : uu.total) === (null === Eu || void 0 === Eu ? void 0 : Eu.total) || (this.progress = uu, pu.h.TY(nu, uu, !0))
      }
    }
    const uE = "plotsPlotChanged",
      EE = "plotsGuideChanged",
      jE = "plotsGuideDone";
    class sE {
      constructor() {
        this.plot = ["none"], this.guide = ["none"]
      }
      getPlot() {
        return this.plot
      }
      receivePlot(uu) {
        this.plot = uu, pu.h.TY(uE, uu, !0)
      }
      getGuide() {
        return this.guide
      }
      receiveGuide(uu) {
        this.guide = uu, pu.h.TY(EE, uu, !0)
      }
      receiveGuideDone() {
        pu.h.TY(jE, void 0, !0)
      }
    }
    var UE = ju(1330),
      ZE = ju(38864),
      XE = ju(37282),
      lE = ju(1524);

    function qE(uu) {
      let {
        onSkip: Eu,
        className: ju
      } = uu;
      const {
        t: su
      } = (0, Cu.A)();
      return (0, Vu.jsx)("button", {
        type: "button",
        className: cu()("PlotsGuideSkipButton", ju),
        ...(0, lE.g)(Eu, "pointerup"),
        children: su("tutorial:skip")
      })
    }

    function fE(uu) {
      let {
        target: Eu,
        placement: ju,
        spotlight: su = null,
        children: Uu
      } = uu;
      const {
        t: Xu
      } = (0, Cu.A)(), lu = (0, Zu.useRef)(Eu);
      return lu.current = Eu, (0, UE.w)("popup", lu, null === su ? null : su.onSkip, null !== su, null, "controller:menusSkipTutorial"), (0, Vu.jsxs)(XE.d, {
        target: Eu,
        placement: ju,
        className: cu()("PlotsGuideBubble", {
          Passive: null === su
        }),
        spotlight: null !== su,
        spotlightMargin: 30,
        children: [(0, Vu.jsxs)("div", {
          className: "PlotsGuideBubbleHeader",
          children: [(0, Vu.jsx)("img", {
            className: "PlotsGuideBubblePortrait",
            src: ZE,
            alt: "",
            draggable: !1
          }), (0, Vu.jsx)("span", {
            className: "PlotsGuideBubbleSpeaker",
            children: Xu("plotsGame:maverickName")
          }), null !== su && (0, Vu.jsx)(qE, {
            onSkip: su.onSkip
          })]
        }), (0, Vu.jsx)("p", {
          className: "PlotsGuideBubbleText",
          children: Uu
        })]
      })
    }

    function CE(uu) {
      let {
        className: Eu,
        icon: ju,
        title: su,
        children: Uu
      } = uu;
      return (0, Vu.jsxs)("div", {
        className: cu()("PlotsCard", Eu),
        role: "status",
        children: [(0, Vu.jsx)("span", {
          className: "PlotsCardIcon",
          children: (0, Vu.jsx)(Yu.e, {
            name: ju
          })
        }), (0, Vu.jsxs)("div", {
          className: "PlotsCardBody",
          children: [(0, Vu.jsx)("div", {
            className: "PlotsCardTitle SmallTextBold",
            children: su
          }), Uu]
        })]
      })
    }

    function bE(uu) {
      let {
        progress: Eu,
        goal: ju
      } = uu;
      const su = Math.min(Eu, ju);
      return (0, Vu.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, Vu.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": ju,
          "aria-valuenow": su,
          children: (0, Vu.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${su/ju})`
            }
          })
        }), (0, Vu.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [su, "/", ju]
        })]
      })
    }

    function cE(uu) {
      let {
        progress: Eu,
        guide: ju
      } = uu;
      const {
        t: su
      } = (0, Cu.A)(), {
        isTouchScreen: Uu
      } = (0, lu.l)(["isTouchScreen"]), Zu = Eu.filled < 5;
      return (0, Vu.jsxs)(Vu.Fragment, {
        children: [(Zu || Eu.total - Eu.filled <= 5) && (0, Vu.jsx)("div", {
          className: "PlotsGuideHandLayer",
          children: (0, Vu.jsx)("div", {
            ref: ju.bindHand,
            className: "PlotsGuideHand",
            children: (0, Vu.jsx)(Yu.e, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon"
            })
          })
        }), (0, Vu.jsx)(Ou.h, {
          placement: "bottom",
          children: (0, Vu.jsxs)(CE, {
            icon: "hammer",
            title: su(au(Eu.id).displayName.translationKey),
            children: [Zu && (0, Vu.jsx)("div", {
              className: "PlotsCardHint SmallTextLight",
              children: Uu ? su("plotsGame:guideBuildTouch") : NE(su)
            }), (0, Vu.jsx)(bE, {
              progress: Eu.filled,
              goal: Eu.total
            })]
          })
        })]
      })
    }

    function NE(uu) {
      const Eu = fu.z["alt-fire"][0];
      return "Mouse3" === Eu ? uu("plotsGame:guideBuildRightClick") : uu("plotsGame:guideBuildKeys", {
        key: (0, fu.q)(Eu)
      })
    }

    function OE() {
      return (0, Vu.jsx)("div", {
        className: "PlotsGuideDragHand",
        children: (0, Vu.jsx)(Yu.e, {
          name: "hand-back-point-up",
          className: "SmallTextBold TouchTutorialIcon"
        })
      })
    }
    var YE = ju(1343),
      hE = ju(2701),
      DE = ju(38745),
      gE = ju(38533),
      ME = ju(37328),
      eE = ju(9442),
      GE = ju(9459),
      pE = ju(349),
      wE = ju(38200);
    const JE = new Map([
        ["Aspen Wood Planks", [.78, .706, .502]],
        ["Barkless Aspen Log", [.792, .718, .518]],
        ["Barkless Pine Log", [.49, .353, .275]],
        ["Blue Planks", [.247, .267, .588]],
        ["Blue Wool", [.227, .267, .651]],
        ["Glass", [.702, .902, .882]],
        ["Green Wool", [.373, .467, .125]],
        ["Maple Ladder", [.612, .471, .29]],
        ["Maple Wood Planks", [.682, .561, .353]],
        ["Messy Stone", [.557, .58, .608]],
        ["Orange Planks", [.949, .549, .231]],
        ["Orange Wool", [.988, .522, .129]],
        ["Pine Wood Planks", [.475, .341, .263]],
        ["Red Planks", [.608, .2, .184]],
        ["Red Wool", [.69, .173, .145]],
        ["Smooth Stone", [.627, .651, .678]],
        ["Stone Bricks", [.522, .545, .573]],
        ["White Wool", [.98, .98, .98]]
      ]),
      dE = [...ME.b.blockRemoveActionRoots, ...gE.b, ...eE.h, "Board", "Code Block", "Custom Lobby Block"],
      aE = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let PE = null;

    function oE() {
      return PE ??= function() {
        const uu = kE(),
          Eu = Math.max(...uu.map((uu => iu.f[uu].id))) + 1,
          ju = new Int32Array(Eu),
          su = new Int32Array(Eu),
          Uu = new Uint8Array(Eu).fill(1),
          Zu = new Uint8Array(Eu),
          Xu = new Uint8Array(Eu),
          lu = new Array(Eu).fill("Air"),
          qu = new Map,
          fu = uu => {
            let Eu = qu.get(uu);
            return void 0 === Eu && (Eu = qu.size + 1, qu.set(uu, Eu)), Eu
          },
          Cu = new Set(dE);
        for (const cu of uu) {
          var bu;
          const {
            id: uu,
            meta: Eu,
            altActionable: qu,
            canBePlacedOver: Nu
          } = iu.f[cu];
          ju[uu] = fu(mE(cu));
          const Ou = Eu.stairsCorner;
          if (null === Ou) su[uu] = ju[uu];
          else {
            const ju = Ou.endsWith("Right");
            su[uu] = fu(`${Eu.rootName}|rot${ju?Eu.rot%4+1:Eu.rot}|${Eu.halfblockPlacement}|${Ou.replace("Right","Left")}`)
          }
          Uu[uu] = Nu ? 1 : 0, Zu[uu] = qu || null !== Eu.open || cu in wE.c || Cu.has(Eu.rootName) || void 0 !== (0, gE.f)(Eu.rootName) ? 1 : 0;
          const {
            rootName: Yu
          } = Eu;
          Xu[uu] = null !== Eu.open || gE.b.includes(Yu) || Yu.includes("Bookshelf") || Yu.includes("Mailbox") ? 1 : 0, lu[uu] = null !== (bu = (0, DE.f)(uu)) && void 0 !== bu ? bu : Yu
        }
        return {
          kinds: ju,
          shapes: su,
          empty: Uu,
          inUse: Zu,
          ownAltActionMessage: Xu,
          placingItems: lu
        }
      }(), PE
    }

    function kE() {
      return Object.keys(iu.f).filter((uu => iu.f[uu].name === uu))
    }

    function mE(uu) {
      var Eu;
      const ju = iu.f[uu],
        {
          rootName: su,
          rot: Uu
        } = ju.meta,
        [, ...Zu] = (null !== (Eu = ju.rootMetaDesc) && void 0 !== Eu ? Eu : uu).split("|"),
        Xu = Zu.filter((uu => !("meta" === uu || aE.test(uu) || (0, GE.x)(ju) && /^[nesw]+$/.test(uu) || eE.h.includes(su) && /^[lrud]+$/.test(uu) || pE.C.includes(su) && /^(left|right)$/.test(uu))));
      return [su, ...Xu].map((uu => "fenceGate" === ju.model && uu === `rot${Uu}` ? "rot" + ((Uu - 1) % 2 + 1) : uu)).join("|")
    }

    function vE(uu, Eu) {
      const {
        kinds: ju,
        shapes: su
      } = oE();
      return ju[uu] === ju[Eu] || su[uu] === su[Eu]
    }

    function KE(uu) {
      return 1 === oE().empty[uu]
    }

    function VE(uu) {
      return oE().placingItems[uu]
    }

    function rE(uu) {
      return JE.get(iu.f[uu].meta.rootName)
    }
    var QE = ju(9436),
      iE = ju(9456);
    const WE = [0, 0, 0, 1, 1, 1],
      SE = (0, QE.c)([
        [2, 0, 2, 6, 6, 6]
      ]),
      IE = (0, QE.c)([
        [3, 0, 3, 5, 5, 5]
      ]),
      FE = (0, QE.c)([
        [3, 3, 3, 5, 8, 5]
      ]),
      BE = [0, 1, 2, 3].map((uu => (0, QE.c)((0, QE.m)([
        [3, 2, 0, 5, 7, 3]
      ], uu))));

    function LE(uu) {
      const {
        nY: Eu,
        model: ju,
        blockModel: su,
        meta: Uu
      } = iu.f[uu];
      return void 0 !== Eu ? Eu : "CentreCross" === ju ? SE : null !== su && void 0 !== su && su.startsWith("torch") ? Uu.halfblockPlacement === iE.d.side ? BE[Uu.rot - 1] : Uu.halfblockPlacement === iE.d.top ? FE : IE : WE
    }
    var tE = ju(202);
    class xE {
      constructor(uu) {
        this.api = uu, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(uu) {
        const Eu = tE.e.hO;
        this.chunks = [];
        for (let ju = 0; ju < uu.length; ju += 3) {
          const su = Math.floor(uu[ju] / Eu),
            Uu = Math.floor(uu[ju + 1] / Eu),
            Zu = Math.floor(uu[ju + 2] / Eu);
          this.watches(su, Uu, Zu) || this.chunks.push(su, Uu, Zu)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const uu = performance.now();
        if (uu - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = uu;
        let Eu = !1;
        for (let ju = 0; ju < this.chunks.length; ju += 3) {
          const uu = this.api.getChunkVersion(this.chunks[ju], this.chunks[ju + 1], this.chunks[ju + 2]);
          this.versions[ju / 3] !== uu && (this.versions[ju / 3] = uu, Eu = !0)
        }
        return Eu
      }
      watches(uu, Eu, ju) {
        for (let su = 0; su < this.chunks.length; su += 3)
          if (this.chunks[su] === uu && this.chunks[su + 1] === Eu && this.chunks[su + 2] === ju) return !0;
        return !1
      }
    }
    var TE = ju(38836);
    const HE = .35,
      AE = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      nE = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      yE = [.95, .2, .15];
    class zE {
      constructor() {
        this.groups = []
      }
      add(uu, Eu, ju, su, Uu) {
        let Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : WE;
        for (const Xu of this.groups)
          if (Ej(Xu, su, Uu)) return Xu.cells.push(uu, Eu, ju), void Xu.boxes.push(Zu);
        this.groups.push({
          rgb: su,
          look: Uu,
          cells: [uu, Eu, ju],
          boxes: [Zu]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class RE {
      constructor(uu) {
        this.api = uu, this.shown = []
      }
      show(uu) {
        const Eu = [];
        for (const ju of uu) {
          const uu = this.shown.findIndex((uu => {
            let {
              group: Eu
            } = uu;
            return Ej(Eu, ju.rgb, ju.look) && jj(Eu, ju)
          })); - 1 === uu ? Eu.push(this.build(ju)) : (Eu.push(this.shown[uu]), this.shown.splice(uu, 1))
        }
        this.dispose(), this.shown = Eu
      }
      dispose() {
        for (const {
            meshes: uu
          }
          of this.shown)
          for (const Eu of uu) this.api.disposeGameMesh(Eu);
        this.shown = []
      }
      build(uu) {
        const {
          rgb: Eu,
          look: ju,
          boxes: su
        } = uu, Uu = [Eu[0] + (1 - Eu[0]) * HE, Eu[1] + (1 - Eu[1]) * HE, Eu[2] + (1 - Eu[2]) * HE], Zu = [this.buildMesh(uu.cells, Eu, ju.alpha, ((uu, Eu, Uu, Zu) => {
          uj(uu, Eu, Uu, su[Zu], ju.size, !1)
        })), this.buildMesh(uu.cells, Uu, ju.alpha, ((uu, Eu, Uu, Zu) => {
          uj(uu, Eu, Uu, su[Zu], ju.size, !0)
        }))];
        return ju.crossed && Zu.push(this.buildMesh(uu.cells, Eu, .9, ((uu, Eu, su) => {
          (0, TE.e)(uu, Eu, su, ju.size + .01, .12)
        }))), {
          group: uu,
          meshes: Zu
        }
      }
      buildMesh(uu, Eu, ju, su) {
        const Uu = [uu[0], uu[1], uu[2]],
          Zu = [],
          Xu = [];
        for (let lu = 0; lu < uu.length; lu += 3) su(Zu, Xu, [uu[lu] - Uu[0] + .5, uu[lu + 1] - Uu[1] + .5, uu[lu + 2] - Uu[2] + .5], lu / 3);
        return this.api.createGameMesh({
          positions: Zu,
          indices: Xu
        }, {
          rgb: [Eu[0], Eu[1], Eu[2]],
          alpha: ju
        }, Uu)
      }
    }

    function uj(uu, Eu, ju, su, Uu, Zu) {
      for (let Xu = 0; Xu < su.length; Xu += 6) {
        const lu = [0, 0, 0],
          qu = [0, 0, 0];
        for (let uu = 0; uu < 3; uu++) lu[uu] = ju[uu] + ((su[Xu + uu] + su[Xu + uu + 3]) / 2 - .5) * Uu, qu[uu] = (su[Xu + uu + 3] - su[Xu + uu]) * Uu;
        (0, TE.c)(uu, Eu, lu, qu, Zu)
      }
    }

    function Ej(uu, Eu, ju) {
      return uu.rgb[0] === Eu[0] && uu.rgb[1] === Eu[1] && uu.rgb[2] === Eu[2] && uu.look === ju
    }

    function jj(uu, Eu) {
      if (uu.cells.length !== Eu.cells.length) return !1;
      for (let ju = 0; ju < uu.cells.length; ju++)
        if (uu.cells[ju] !== Eu.cells[ju]) return !1;
      return uu.boxes.every(((uu, ju) => uu === Eu.boxes[ju]))
    }

    function sj(uu, Eu, ju, su, Uu) {
      if (!uu.isBlockInLoadedChunk(Eu, su - 6, ju) || !uu.isBlockInLoadedChunk(Eu, su + 6 + Uu, ju) || !uu.canModifyBlockAt(Eu, su, ju)) return NaN;
      let Zu = su - 1;
      if (0 !== uu.getBlockId(Eu, Zu, ju)) {
        for (; Zu < su + 6 && 0 !== uu.getBlockId(Eu, Zu + 1, ju);) Zu++;
        return Zu
      }
      for (; Zu > su - 6;)
        if (Zu--, 0 !== uu.getBlockId(Eu, Zu, ju)) return Zu;
      return NaN
    }

    function Uj(uu, Eu, ju, su, Uu) {
      let Zu = 0;
      for (let Xu = su + 1; Xu <= su + Uu; Xu++) 0 !== uu.getBlockId(Eu, Xu, ju) && Zu++;
      return Zu
    }

    function Zj(uu) {
      const Eu = new Map;
      for (const Xu of uu) {
        var ju;
        if (Number.isNaN(Xu)) return null;
        Eu.set(Xu, (null !== (ju = Eu.get(Xu)) && void 0 !== ju ? ju : 0) + 1)
      }
      let su = NaN,
        Uu = 0;
      for (const [Xu, lu] of Eu)(lu > Uu || lu === Uu && Xu < su) && (su = Xu, Uu = lu);
      let Zu = 0;
      for (const Xu of uu) Zu += Math.abs(Xu - su);
      return Zu
    }

    function Xj(uu, Eu, ju, su) {
      const {
        eye: Uu,
        forward: Zu,
        tanHalfFovX: Xu,
        tanHalfFovY: lu
      } = uu, [qu, fu] = function(uu) {
        let [Eu, ju, su] = uu;
        const Uu = Math.hypot(Eu, su),
          [Zu, Xu] = [su / Uu, -Eu / Uu];
        return [
          [Zu, 0, Xu],
          [ju * Xu, su * Zu - Eu * Xu, -ju * Zu]
        ]
      }(Zu), [Cu, bu] = [Eu * Xu, ju * lu], cu = Zu[0] + Cu * qu[0] + bu * fu[0], Nu = Zu[1] + bu * fu[1], Ou = Zu[2] + Cu * qu[2] + bu * fu[2], Yu = (su - Uu[1]) / Nu;
      return Yu > 0 && Yu < 1 / 0 ? [Uu[0] + Yu * cu, Uu[2] + Yu * Ou] : null
    }
    const lj = "plotsBlueprintPlacementChanged",
      qj = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class fj {
      constructor(uu, Eu) {
        this.api = uu, this.localPlayerId = Eu, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = uu => {
          var Eu, ju, su, Zu;
          const Xu = null !== (Eu = null === (ju = this.placing) || void 0 === ju ? void 0 : ju.rotation) && void 0 !== Eu ? Eu : 0,
            {
              size: lu
            } = Au(uu, Xu),
            qu = this.api.bM(this.localPlayerId),
            [fu, Cu] = null !== (su = null !== (Zu = function(uu, Eu, ju, su) {
              const [Uu, Zu, Xu] = Eu, [lu, qu, fu] = [Math.floor(ju[0]), Math.floor(ju[1]), Math.floor(ju[2])], Cu = 6 + Math.max(Uu, Xu) / 2, [bu, cu] = [Math.ceil(Cu + Uu / 2), Math.ceil(Cu + Xu / 2)], [Nu, Ou] = [lu - bu, fu - cu], [Yu, hu] = [2 * bu + 1, 2 * cu + 1], Du = new Float64Array(Yu * hu), gu = new Uint16Array(Yu * hu);
              for (let wu = 0; wu < Yu; wu++)
                for (let Eu = 0; Eu < hu; Eu++) {
                  const ju = sj(uu, Nu + wu, Ou + Eu, qu, Zu);
                  Du[wu * hu + Eu] = ju, Number.isNaN(ju) || (gu[wu * hu + Eu] = Uj(uu, Nu + wu, Ou + Eu, ju, Zu))
                }
              const Mu = Math.hypot(su[0], su[2]),
                eu = [];
              let Gu = null,
                pu = 1 / 0;
              for (let wu = 0; wu + Uu <= Yu; wu++)
                for (let uu = 0; uu + Xu <= hu; uu++) {
                  const [Eu, Zu] = [Nu + wu, Ou + uu], [qu, bu] = [Eu + Uu / 2 - ju[0], Zu + Xu / 2 - ju[2]], cu = Math.hypot(qu, bu);
                  if (cu > Cu || lu >= Eu - 2 && lu < Eu + Uu + 2 && fu >= Zu - 2 && fu < Zu + Xu + 2) continue;
                  eu.length = 0;
                  let Yu = 0;
                  for (let ju = 0; ju < Uu; ju++)
                    for (let Eu = 0; Eu < Xu; Eu++) eu.push(Du[(wu + ju) * hu + uu + Eu]), Yu += gu[(wu + ju) * hu + uu + Eu];
                  const Ju = Zj(eu);
                  if (null === Ju) continue;
                  const du = cu + 3 * (Ju + Yu) + (1 - (0 === Mu ? 1 : (qu * su[0] + bu * su[2]) / (cu * Mu))) / 2 * 6;
                  du < pu && (pu = du, Gu = [Eu, Zu])
                }
              return Gu
            }(this.api, lu, qu, this.camera.forward)) && void 0 !== Zu ? Zu : this.cornerOnTarget(lu)) && void 0 !== su ? su : [Math.floor(qu[0]) + 2, Math.floor(qu[2])];
          this.placing = {
            id: uu,
            rotation: Xu,
            corner: [fu, this.playerLevel(), Cu],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null,
            moved: !1,
            stillSinceMs: performance.now()
          }, this.update(), this.api.sendCommand(`${Uu} preview`)
        }, this.rotate = () => {
          const {
            id: uu,
            rotation: Eu,
            corner: ju
          } = this.placing, Uu = su[(su.indexOf(Eu) + 1) % su.length], [Zu, , Xu] = Au(uu, Eu).size, [lu, , qu] = Au(uu, Uu).size;
          this.moveTo(ju[0] + Math.floor(Zu / 2) - Math.floor(lu / 2), ju[2] + Math.floor(Xu / 2) - Math.floor(qu / 2), Uu)
        }, this.hoverAt = (uu, Eu) => {
          this.placing.hover = [uu, Eu], this.moveCentreTo(this.camera, uu, Eu)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (uu, Eu) => {
          const ju = this.placing,
            {
              eye: su,
              forward: Uu,
              tanHalfFovX: Zu,
              tanHalfFovY: Xu
            } = this.camera,
            lu = {
              eye: [su[0], su[1], su[2]],
              forward: [Uu[0], Uu[1], Uu[2]],
              tanHalfFovX: Zu,
              tanHalfFovY: Xu
            },
            qu = ju.corner[1],
            fu = Xj(lu, uu, Eu, qu);
          ju.hover = null, ju.drag = fu && {
            view: lu,
            ground: fu,
            corner: [ju.corner[0], ju.corner[2]],
            level: qu
          }
        }, this.dragTo = (uu, Eu) => {
          const ju = this.placing.drag,
            su = ju && Xj(ju.view, uu, Eu, ju.level);
          null !== ju && null !== su && this.moveTo(ju.corner[0] + Math.round(su[0] - ju.ground[0]), ju.corner[1] + Math.round(su[1] - ju.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const uu = this.view;
          uu.waiting || (uu.blocked ? this.TY({
            ...uu,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const uu = this.placing,
            {
              id: Eu,
              rotation: ju,
              corner: su
            } = uu;
          this.api.sendCommand(`${Uu} place ${Eu} ${su.join(" ")} ${ju}`), uu.sent = {
            atMs: performance.now(),
            corner: [...su],
            rotation: ju,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${Uu} preview off`))
        }, this.chunkWatch = new xE(uu), this.meshes = new RE(uu)
      }
      getView() {
        return this.view
      }
      Tb() {
        const uu = this.placing;
        null !== uu && (null !== uu.sent && !uu.sent.timedOut && performance.now() - uu.sent.atMs > 3e3 ? (uu.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(uu) || this.chunkWatch.changed() || this.view.settled !== Cj(uu, this.view.blocked)) && this.update())
      }
      afterRender(uu) {
        ! function(uu, Eu) {
          for (let ju = 0; ju < 3; ju++) Eu.eye[ju] = uu.cameraPosition[ju], Eu.forward[ju] = uu.cameraDirection[ju];
          Eu.tanHalfFovX = uu.tanHalfFovX, Eu.tanHalfFovY = uu.tanHalfFovY
        }(uu, this.camera);
        const Eu = this.placing;
        null !== Eu && null !== Eu.hover && this.moveCentreTo(this.camera, Eu.hover[0], Eu.hover[1])
      }
      NO(uu) {
        const Eu = this.placing;
        if (null === Eu || null === Eu.sent || "active" !== uu[0]) return;
        const {
          sent: ju
        } = Eu, [, su, Uu, Zu, Xu, lu, qu] = uu;
        Uu && su === Eu.id && qu === ju.rotation && Zu === ju.corner[0] && Xu === ju.corner[1] && lu === ju.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(uu) {
        let [Eu, , ju] = uu;
        const su = this.api.getTargetedBlock();
        if (null === su) return null;
        const [Uu, , Zu] = su.position;
        return [Uu - Math.floor(Eu / 2), Zu - Math.floor(ju / 2)]
      }
      playerLevel() {
        var uu;
        const [Eu, ju, su] = this.api.bM(this.localPlayerId);
        if (null !== (uu = this.api.getLocalPlayerMovement()) && void 0 !== uu && uu.onGround) return Math.ceil(ju - .01);
        const [Uu, Zu, Xu] = [Math.floor(Eu), Math.floor(ju), Math.floor(su)];
        for (let lu = Zu; lu >= Zu - 2; lu--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(Uu, lu, Xu))) return lu + 1;
        return Zu
      }
      followPlayerLevel(uu) {
        if (bj(uu)) return !1;
        const Eu = this.playerLevel();
        return Eu !== uu.corner[1] && (uu.corner[1] = Eu, !0)
      }
      moveCentreTo(uu, Eu, ju) {
        const su = this.placing,
          Uu = Xj(uu, Eu, ju, su.corner[1]);
        if (null !== Uu) {
          const [uu, , Eu] = Au(su.id, su.rotation).size;
          this.moveTo(Math.round(Uu[0] - uu / 2), Math.round(Uu[1] - Eu / 2))
        }
      }
      moveTo(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const su = this.placing;
        if (bj(su)) return;
        const [Uu, Zu, Xu] = su.corner;
        if (this.centreOnPlot(Uu, Xu) && !this.centreOnPlot(uu, Eu, ju))
          if (this.centreOnPlot(uu, Xu, ju)) Eu = Xu;
          else {
            if (!this.centreOnPlot(Uu, Eu, ju)) return;
            uu = Uu
          } uu === Uu && Eu === Xu && ju === su.rotation || (su.rotation = ju, su.corner = [uu, Zu, Eu], su.moved = !0, su.stillSinceMs = performance.now(), this.update())
      }
      centreOnPlot(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: su,
          corner: Uu
        } = this.placing, [Zu, , Xu] = Au(su, ju).size;
        return this.api.canModifyBlockAt(uu + Math.floor(Zu / 2), Uu[1], Eu + Math.floor(Xu / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.TY(null)
      }
      update() {
        const {
          id: uu,
          rotation: Eu,
          corner: ju,
          refusals: su
        } = this.placing, Uu = new zE, Zu = [];
        let Xu = !1,
          lu = 0;
        for (const {
            offset: bu,
            block: cu
          }
          of Au(uu, Eu).cells) {
          const [uu, Eu, su] = [ju[0] + bu[0], ju[1] + bu[1], ju[2] + bu[2]];
          Zu.push(uu, Eu, su);
          const qu = !this.api.canModifyBlockAt(uu, Eu, su),
            fu = this.api.getBlockId(uu, Eu, su),
            Cu = !KE(fu) && !vE(this.api.blockNameToBlockId(cu), fu);
          Xu ||= qu, lu += Cu ? 1 : 0, qu || Cu ? Uu.add(uu, Eu, su, yE, nE) : Uu.add(uu, Eu, su, rE(cu), qj, LE(cu))
        }
        this.chunkWatch.watch(Zu), this.meshes.show(Uu.toArray());
        const qu = this.view,
          fu = bj(this.placing),
          Cu = Cj(this.placing, Xu);
        (null === qu || void 0 === qu ? void 0 : qu.id) === uu && qu.blocked === Xu && qu.toClear === lu && qu.waiting === fu && qu.refusals === su && qu.settled === Cu || this.TY({
          id: uu,
          blocked: Xu,
          toClear: lu,
          waiting: fu,
          refusals: su,
          settled: Cu
        })
      }
      TY(uu) {
        this.view = uu, pu.h.TY(lj, uu, !0)
      }
    }

    function Cj(uu, Eu) {
      let {
        moved: ju,
        stillSinceMs: su
      } = uu;
      return !Eu && performance.now() - su >= (ju ? 1500 : 6e3)
    }

    function bj(uu) {
      let {
        sent: Eu
      } = uu;
      return null !== Eu && !Eu.timedOut
    }
    var cj = ju(4726);
    class Nj {
      constructor(uu) {
        this.placement = uu, this.press = null
      }
      down(uu) {
        if (null !== this.press) return !1;
        const {
          id: Eu,
          mouse: ju,
          x: su,
          y: Uu,
          atMs: Zu
        } = uu;
        return this.press = {
          id: Eu,
          mouse: ju,
          x: su,
          y: Uu,
          atMs: Zu,
          moved: !1
        }, ju || this.placement.beginDrag(uu.ndcX, uu.ndcY), !0
      }
      move(uu) {
        const Eu = this.press;
        null !== Eu && Eu.id === uu.id && (Eu.moved ||= Math.hypot(uu.x - Eu.x, uu.y - Eu.y) > 8), uu.mouse ? this.placement.hoverAt(uu.ndcX, uu.ndcY) : (null === Eu || void 0 === Eu ? void 0 : Eu.id) === uu.id && this.placement.dragTo(uu.ndcX, uu.ndcY)
      }
      up(uu) {
        const Eu = this.press;
        (null === Eu || void 0 === Eu ? void 0 : Eu.id) === uu.id && (this.move(uu), this.end(), !Eu.moved && (Eu.mouse || uu.atMs - Eu.atMs <= 250) && this.placement.tap())
      }
      cancel(uu) {
        var Eu;
        (null === (Eu = this.press) || void 0 === Eu ? void 0 : Eu.id) === uu && this.end()
      }
      leave(uu) {
        let {
          id: Eu,
          mouse: ju
        } = uu;
        ju && this.placement.endHover(), this.cancel(Eu)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }
    const Oj = "PlotsPlacementLayer";

    function Yj(uu) {
      let {
        placement: Eu
      } = uu;
      return null === (0, qu.g)(lj, Eu.getView()) ? null : (0, Vu.jsx)(hj, {
        placement: Eu
      })
    }

    function hj(uu) {
      let {
        placement: Eu
      } = uu;
      (0, cj.e)(!0, !0, Oj);
      const ju = (0, Zu.useMemo)((() => new Nj(Eu)), [Eu]);
      return (0, Vu.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: uu => {
          "mouse" === uu.pointerType && 0 !== uu.button || !ju.down(Dj(uu)) || uu.currentTarget.setPointerCapture(uu.pointerId)
        },
        onPointerMove: uu => {
          ju.move(Dj(uu))
        },
        onPointerUp: uu => {
          ju.up(Dj(uu))
        },
        onPointerCancel: uu => {
          ju.cancel(uu.pointerId)
        },
        onLostPointerCapture: uu => {
          ju.cancel(uu.pointerId)
        },
        onPointerLeave: uu => {
          ju.leave(Dj(uu))
        },
        "aria-hidden": !0
      })
    }

    function Dj(uu) {
      const {
        left: Eu,
        top: ju,
        width: su,
        height: Uu
      } = uu.currentTarget.getBoundingClientRect();
      return {
        id: uu.pointerId,
        mouse: "mouse" === uu.pointerType,
        x: uu.clientX,
        y: uu.clientY,
        ndcX: (uu.clientX - Eu) / su * 2 - 1,
        ndcY: 1 - (uu.clientY - ju) / Uu * 2,
        atMs: uu.timeStamp
      }
    }

    function gj() {
      return (0, YE.p)().some((uu => uu !== YE.b && uu !== Oj))
    }
    const Mj = 2500;

    function ej(uu) {
      let {
        hud: Eu,
        guide: ju,
        tracker: su,
        placement: Uu,
        children: Xu
      } = uu;
      const {
        t: bu
      } = (0, Cu.A)(), {
        isTouchScreen: cu
      } = (0, lu.l)(["isTouchScreen"]), Nu = (0, qu.g)(EE, Eu.getGuide()), Ou = (0, qu.g)(uE, Eu.getPlot()), Yu = (0, qu.g)(nu, su.get()), hu = function(uu) {
        const {
          openInGameMenuName: Eu,
          openEverythingMenuName: ju,
          loadingOverlayVisible: su
        } = (0, lu.l)(["openInGameMenuName", "openEverythingMenuName", "loadingOverlayVisible"]), Uu = (0, hE.d)(), [Xu, fu] = (0, Zu.useState)(gj);
        (0, Zu.useEffect)((() => {
          const uu = () => {
            fu(gj())
          };
          uu();
          const Eu = (0, YE.n)(uu),
            ju = (0, YE.j)(uu);
          return () => {
            Eu(), ju()
          }
        }), []);
        const Cu = (0, qu.g)(lj, uu.getView()),
          bu = "clientGame" === Eu;
        return {
          hudHidden: Uu || su,
          journalOpen: bu,
          covered: Xu || null !== ju || null !== Eu && !bu,
          placing: null === Cu ? null : Cu.settled ? "placeBuild" : "placeSpot"
        }
      }(Uu), Du = function(uu, Eu, ju) {
        return "none" === uu[0] || ju.hudHidden || ju.journalOpen || ju.covered ? null : null !== ju.placing ? ju.placing : null !== Eu ? "build" : "choose" === uu[1] ? "openJournal" : null
      }(Nu, null === Yu ? null : Yu.id, hu), gu = function() {
        const [uu, Eu] = (0, Zu.useState)(null), [ju, su] = (0, Zu.useState)(!1);
        return (0, qu.f)(jE, (() => {
          Eu(performance.now())
        })), (0, Zu.useEffect)((() => {
          if (null === uu) return;
          const Eu = window.setTimeout((() => {
              su(!0)
            }), Mj),
            ju = window.setTimeout((() => {
              su(!1)
            }), 7500);
          return () => {
            window.clearTimeout(Eu), window.clearTimeout(ju)
          }
        }), [uu]), ju
      }() && !hu.hudHidden && !hu.covered && !hu.journalOpen && null === hu.placing, [Mu, eu] = (0, Zu.useState)(!1);
      (0, Zu.useEffect)((() => {
        hu.journalOpen && eu(!0)
      }), [hu.journalOpen]);
      const [pu, wu] = (0, Zu.useState)(null), [Ju, du] = (0, Zu.useState)(null), [au, Pu] = (0, Zu.useState)(null), ou = (0, Zu.useMemo)((() => ({
        hint: Du,
        journalRef: wu,
        placementCardRef: du,
        buildRef: Pu
      })), [Du]), ku = "plot" === Ou[0] && "own" === Ou[5], mu = cu && !Mu && ku ? {
        onSkip: ju.skip
      } : null;
      return (0, Vu.jsxs)(Gu.Provider, {
        value: ou,
        children: [Xu, "openJournal" === Du && null !== pu && (0, Vu.jsx)(fE, {
          target: pu,
          placement: "left",
          spotlight: mu,
          children: cu ? bu("plotsGame:guideOpenJournal") : bu("plotsGame:guideOpenJournalKeys", {
            key: (0, fu.q)(ru)
          })
        }), "placeSpot" === Du && null !== Ju && (0, Vu.jsxs)(Vu.Fragment, {
          children: [cu && (0, Vu.jsx)(OE, {}), (0, Vu.jsx)(fE, {
            target: Ju,
            placement: "top",
            children: bu(cu ? "plotsGame:guidePlaceSpotTouch" : "plotsGame:guidePlaceSpotMouse")
          })]
        }), "placeBuild" === Du && null !== au && null !== Ju && (0, Vu.jsx)(fE, {
          target: cu ? au : Ju,
          placement: "top",
          children: bu(cu ? "plotsGame:guidePlaceBuildTouch" : "plotsGame:guidePlaceBuildMouse")
        }), "build" === Du && null !== Yu && (0, Vu.jsx)(cE, {
          progress: Yu,
          guide: ju
        }), gu && null !== pu && (0, Vu.jsx)(fE, {
          target: pu,
          placement: "left",
          children: bu("plotsGame:guideMoreBuilds")
        })]
      })
    }
    var Gj = ju(38813),
      pj = ju(38820);
    class wj {
      constructor(uu, Eu, ju) {
        this.api = uu, this.localPlayerId = Eu, this.nextCell = ju, this.hand = null, this.skip = () => {
          this.api.sendCommand("plotsguide skip")
        }, this.bindHand = uu => {
          this.hand = uu
        }
      }
      afterRender(uu) {
        const Eu = this.hand;
        if (null === Eu) return;
        const ju = this.nextCell.get();
        if (null === ju) return void(0, Gj.f)(Eu, !0);
        const su = (0, pj.c)(Eu, uu, this.api.getPositionView(this.localPlayerId), ju, 1, 40);
        null !== su && (0, Gj.d)(Eu, Math.round(100 * su.x) / 100, Math.round(100 * su.y) / 100)
      }
    }
    var Jj = ju(1506),
      dj = ju(4719),
      aj = ju(1175);
    const Pj = {
        farm_hut: ju.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
        farm_house: ju.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
        farm_barn: ju.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
        rusticHome_tent: ju.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
        rusticHome_cabin: ju.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
        rusticHome_house: ju.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
        market_stand: ju.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
        market_stall: ju.p + "static/media/market_stall.9a562807f9dff591618a.webp",
        market_shop: ju.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
        castle_wall: ju.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
        castle_gate: ju.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
        castle_tower: ju.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
      },
      oj = ["plotsGame:guideEffortQuick", "plotsGame:guideEffortMedium", "plotsGame:guideEffortBigger"],
      kj = ["market_stand", "rusticHome_tent", "farm_hut"].map((uu => ({
        id: uu,
        blocks: Au(uu, 0).cells.length
      }))).sort(((uu, Eu) => uu.blocks - Eu.blocks)).map(((uu, Eu) => ({
        ...uu,
        effortKey: oj[Eu]
      })));

    function mj(uu) {
      let {
        onBuild: Eu
      } = uu;
      const {
        t: ju
      } = (0, Cu.A)();
      return (0, Vu.jsx)("div", {
        className: "PlotsJournalBookPages PlotsGuideChooserCover",
        children: (0, Vu.jsxs)("div", {
          className: "PlotsGuideChooser",
          children: [(0, Vu.jsx)("h3", {
            className: "PlotsGuideChooserTitle",
            children: ju("plotsGame:guidePickTitle")
          }), (0, Vu.jsxs)("p", {
            className: "PlotsGuideChooserNote",
            children: [(0, Vu.jsx)("img", {
              src: ZE,
              alt: "",
              draggable: !1
            }), ju("plotsGame:guidePickNote")]
          }), (0, Vu.jsx)("div", {
            className: "PlotsGuideChooserStarters",
            children: kj.map((uu => {
              let {
                id: su,
                blocks: Uu,
                effortKey: Zu
              } = uu;
              return (0, Vu.jsxs)("article", {
                className: "PlotsGuideStarter",
                children: [(0, Vu.jsx)("button", {
                  type: "button",
                  className: "PlotsGuideStarterSketch",
                  tabIndex: -1,
                  "aria-hidden": !0,
                  "data-pad-ignore": !0,
                  onClick: () => {
                    Eu(su)
                  },
                  children: (0, Vu.jsx)("img", {
                    src: Pj[su],
                    alt: "",
                    draggable: !1
                  })
                }), (0, Vu.jsxs)("div", {
                  className: "PlotsGuideStarterInfo",
                  children: [(0, Vu.jsxs)("span", {
                    className: "PlotsGuideStarterText",
                    children: [(0, Vu.jsx)("span", {
                      className: "PlotsGuideStarterName",
                      children: ju(au(su).displayName.translationKey)
                    }), (0, Vu.jsx)("span", {
                      className: "PlotsGuideStarterEffort",
                      children: ju(Zu)
                    }), (0, Vu.jsx)("span", {
                      className: "PlotsGuideStarterBlocks",
                      children: ju("plotsGame:journalBlocks", {
                        blocks: String(Uu)
                      })
                    })]
                  }), (0, Vu.jsx)(Jj.p, {
                    onClick: () => {
                      Eu(su)
                    },
                    children: ju("plotsGame:placementBuild")
                  })]
                })]
              }, su)
            }))
          })]
        })
      })
    }

    function vj(uu) {
      let {
        direction: Eu,
        disabled: ju,
        onTurn: su
      } = uu;
      const {
        t: Uu
      } = (0, Cu.A)();
      return (0, Vu.jsx)("div", {
        className: cu()("PlotsJournalArrow", Eu),
        children: (0, Vu.jsx)(Jj.f, {
          disabled: ju,
          ariaLabel: Uu("Forward" === Eu ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            su(Eu)
          },
          children: (0, Vu.jsx)(Yu.e, {
            name: "angle-up"
          })
        })
      })
    }
    const Kj = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function Vj(uu) {
      let {
        page: Eu,
        building: ju,
        onBuild: su,
        onPutAway: Uu
      } = uu;
      const {
        t: Zu
      } = (0, Cu.A)(), {
        displayName: Xu,
        tier: lu
      } = au(Eu.id), qu = Au(Eu.id, 0).cells.length, fu = "locked" === Eu.state, bu = ju ? Jj.f : Jj.p;
      return (0, Vu.jsxs)("article", {
        className: cu()("PlotsJournalPage", {
          Locked: fu
        }),
        children: [(0, Vu.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: Zu(Xu.translationKey)
        }), (0, Vu.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [Zu(Kj[lu]), " \xb7 ", Zu("plotsGame:journalBlocks", {
            blocks: String(qu)
          })]
        }), (0, Vu.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [du.map((uu => (0, Vu.jsx)("img", {
            className: cu()({
              Shown: uu === Eu.id
            }),
            src: Pj[uu],
            alt: "",
            draggable: !1
          }, uu))), "completed" === Eu.state && (0, Vu.jsx)("span", {
            className: "PlotsJournalStamp",
            children: Zu("plotsGame:journalBuilt")
          }), fu && (0, Vu.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, Vu.jsx)(Yu.e, {
              name: "lock"
            })
          })]
        }), null !== Eu.note && (0, Vu.jsx)("p", {
          className: "PlotsJournalNote",
          children: Zu(Eu.note)
        }), (0, Vu.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === Eu.state && (0, Vu.jsx)("p", {
            className: "PlotsJournalHint",
            children: Zu("plotsGame:journalLocked", {
              name: Zu(au(Eu.unlockedBy).displayName.translationKey)
            })
          }), Eu.active && (0, Vu.jsxs)(Vu.Fragment, {
            children: [(0, Vu.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: Zu("plotsGame:journalBuilding")
            }), (0, Vu.jsx)(Jj.i, {
              onClick: Uu,
              children: Zu("plotsGame:journalPutAway")
            })]
          }), !fu && !Eu.active && (0, Vu.jsx)(bu, {
            onClick: () => {
              su(Eu.id)
            },
            children: Zu("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function rj(uu) {
      let {
        className: Eu,
        page: ju,
        hidden: su,
        building: Uu,
        journal: Zu
      } = uu;
      return (0, Vu.jsxs)("div", {
        ref: uu => {
          null !== uu && (uu.inert = su)
        },
        className: cu()("PlotsJournalSide", Eu),
        children: [void 0 !== ju && (0, Vu.jsx)(Vj, {
          page: ju,
          building: Uu,
          onBuild: Zu.build,
          onPutAway: Zu.putAway
        }), void 0 === ju && (0, Vu.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var Qj = ju(1955);

    function ij(uu) {
      return Math.cos((0, Qj.k)(uu))
    }

    function Wj(uu) {
      return (0, Qj.A)(Math.acos(pE.b.clamp(uu, -1, 1)))
    }

    function Sj(uu, Eu, ju, su, Uu) {
      const Zu = Math.abs(Eu - uu),
        Xu = (0, Qj.A)(Uu / (ju * Math.abs(Math.sin((0, Qj.k)(uu))))),
        lu = 450 * Math.min(1, Zu / su),
        qu = Xu > 0 ? 3 * Zu / Xu : 1 / 0;
      return Math.round(Math.max(120, Math.min(lu, qu)))
    }
    class Ij {
      constructor() {
        this.samples = []
      }
      add(uu, Eu) {
        for (this.samples.push({
            x: uu,
            at: Eu
          }); Eu - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const uu = this.samples[0],
          Eu = this.samples[this.samples.length - 1];
        return Eu.at > uu.at ? (Eu.x - uu.x) / (Eu.at - uu.at) : 0
      }
    }

    function Fj(uu) {
      return Wj(new DOMMatrixReadOnly(getComputedStyle(uu).transform).m11)
    }

    function Bj(uu, Eu) {
      uu.style.transform = `rotateY(${-Eu}deg)`, uu.classList.add("Turning")
    }

    function Lj(uu, Eu, ju) {
      const [su, Uu] = (0, Zu.useState)(ju), Xu = (0, Zu.useRef)(null), lu = (0, Zu.useRef)(null), qu = (0, Zu.useRef)({
        Forward: null,
        Back: null
      }), fu = Eu ? 2 : 1, Cu = Eu ? 180 : 90, bu = su - su % fu, cu = bu > 0, Nu = bu + fu < uu, Ou = (0, Zu.useCallback)((() => {
        const uu = lu.current;
        return null === uu ? bu : (lu.current = null, uu.animation.cancel(), (Eu = qu.current[uu.direction]).style.transform = "", Eu.classList.remove("Turning"), null === uu.next ? bu : (Uu(uu.next), uu.next));
        var Eu
      }), [bu]), Yu = (0, Zu.useCallback)(((uu, Eu, ju, su) => {
        const Uu = qu.current[uu],
          Zu = Fj(Uu),
          Xu = Eu === ("Forward" === uu) ? Cu : 0;
        Bj(Uu, Xu);
        const bu = Uu.animate([{
          transform: `rotateY(${-Zu}deg)`
        }, {
          transform: `rotateY(${-Xu}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : Sj(Zu, Xu, Uu.offsetWidth, Cu, Xu > Zu ? -ju : ju),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        lu.current = {
          direction: uu,
          animation: bu,
          next: Eu ? su + ("Forward" === uu ? fu : -fu) : null
        }, bu.onfinish = () => {
          var uu;
          (null === (uu = lu.current) || void 0 === uu ? void 0 : uu.animation) === bu && Ou()
        }
      }), [fu, Cu, Ou]), hu = (0, Zu.useCallback)((Eu => {
        if (null !== Xu.current) return;
        const ju = Ou();
        ("Forward" === Eu ? ju + fu < uu : ju > 0) && Yu(Eu, !0, 0, ju)
      }), [Ou, Yu, fu, uu]);
      (0, Zu.useEffect)((() => () => {
        var uu;
        null === (uu = lu.current) || void 0 === uu || uu.animation.cancel()
      }), []), (0, Zu.useEffect)((() => {
        const uu = uu => {
          var Eu;
          uu.pointerId !== (null === (Eu = Xu.current) || void 0 === Eu ? void 0 : Eu.pointerId) || Xu.current.following || (Xu.current = null)
        };
        return window.addEventListener("pointerup", uu), () => {
          window.removeEventListener("pointerup", uu)
        }
      }), []);
      const Du = (uu, Eu, ju) => {
          const su = function(uu, Eu, ju, su) {
            return (uu < 0 ? ju : su) ? pE.b.clampAbs(uu, Eu) : Math.sign(uu) * Eu * (1 - 1 / (.55 * Math.abs(uu) / Eu + 1))
          }(uu.base + ju, fu * uu.width, Nu, cu);
          return "Forward" === Eu ? Math.min(su, 0) : Math.max(su, 0)
        },
        gu = (uu, Eu) => {
          const ju = Xu.current;
          if (Xu.current = null, null === ju.direction) return;
          ju.speed.add(uu, Eu);
          const su = ju.speed.get(),
            Uu = Du(ju, ju.direction, uu - ju.x);
          Yu(ju.direction, null !== function(uu, Eu, ju, su, Uu) {
            if (Math.abs(Eu) >= .3 ? Math.sign(Eu) !== Math.sign(uu) : Math.abs(uu) < .5 * ju) return null;
            const Zu = uu < 0 ? "Forward" : "Back";
            return ("Forward" === Zu ? su : Uu) ? Zu : null
          }(Uu, su, fu * ju.width, Nu, cu), su, bu)
        },
        Mu = {
          onPointerDown: uu => {
            var Eu;
            if (!uu.isPrimary || 0 !== uu.button || null !== lu.current && null !== uu.target.closest("button")) return;
            const ju = new Ij;
            ju.add(uu.clientX, uu.timeStamp);
            const su = qu.current.Forward.offsetWidth,
              Uu = lu.current;
            lu.current = null;
            let Zu = 0;
            if (null !== Uu) {
              const Eu = qu.current[Uu.direction],
                ju = Fj(Eu);
              Uu.animation.cancel(), Bj(Eu, ju), Zu = function(uu, Eu, ju, su) {
                return (uu < 0 ? ju : su) ? uu : Math.sign(uu) * Eu * (1 / (1 - Math.min(Math.abs(uu) / Eu, .99)) - 1) / .55
              }(function(uu, Eu, ju, su) {
                return ju * (ij(Eu) - ij("Forward" === uu ? 0 : su))
              }(Uu.direction, ju, su, Cu), fu * su, Nu, cu), uu.currentTarget.setPointerCapture(uu.pointerId)
            }
            Xu.current = {
              pointerId: uu.pointerId,
              x: uu.clientX,
              y: uu.clientY,
              base: Zu,
              width: su,
              following: null !== Uu,
              direction: null !== (Eu = null === Uu || void 0 === Uu ? void 0 : Uu.direction) && void 0 !== Eu ? Eu : null,
              speed: ju
            }
          },
          onPointerMove: uu => {
            const Eu = Xu.current;
            if (null === Eu || uu.pointerId !== Eu.pointerId) return;
            if (0 === uu.buttons) return void gu(uu.clientX, uu.timeStamp);
            const ju = uu.clientX - Eu.x;
            !Eu.following && function(uu, Eu) {
              return Math.abs(uu) > 8 && Math.abs(uu) > Math.abs(Eu)
            }(ju, uu.clientY - Eu.y) && (Eu.following = !0, Eu.direction = ju < 0 ? "Forward" : "Back", uu.currentTarget.setPointerCapture(uu.pointerId)), null !== Eu.direction && (Eu.speed.add(uu.clientX, uu.timeStamp), Bj(qu.current[Eu.direction], function(uu, Eu, ju, su) {
              const Uu = ju * ij("Forward" === uu ? 0 : su) + Eu;
              return pE.b.clamp(Wj(Uu / ju), 0, su)
            }(Eu.direction, Du(Eu, Eu.direction, ju), Eu.width, Cu)))
          },
          onPointerUp: uu => {
            var Eu;
            uu.pointerId === (null === (Eu = Xu.current) || void 0 === Eu ? void 0 : Eu.pointerId) && gu(uu.clientX, uu.timeStamp)
          },
          onPointerCancel: uu => {
            const Eu = Xu.current;
            uu.pointerId === (null === Eu || void 0 === Eu ? void 0 : Eu.pointerId) && (Xu.current = null, null !== Eu.direction && Yu(Eu.direction, !1, 0, bu))
          }
        };
      return {
        first: bu,
        step: fu,
        canGoBack: cu,
        canGoForward: Nu,
        turnPage: hu,
        leaves: qu,
        pagesHandlers: Mu
      }
    }

    function tj(uu, Eu) {
      return uu > Eu && uu >= 600
    }

    function xj(uu) {
      let {
        journal: Eu,
        hud: ju,
        guide: su
      } = uu;
      const {
        t: Uu
      } = (0, Cu.A)(), lu = (0, qu.g)(vu, Eu.getPages()), fu = (0, qu.g)(EE, ju.getGuide()), bu = lu.find((uu => uu.active)), Nu = (Ou = fu, Yu = void 0 === bu ? null : bu.id, "active" === Ou[0] && null === Yu);
      var Ou, Yu;
      const hu = (0, aj.r)(tj),
        {
          first: Du,
          step: eu,
          canGoBack: Gu,
          canGoForward: pu,
          turnPage: wu,
          leaves: Ju,
          pagesHandlers: du
        } = Lj(lu.length, hu, (() => function(uu) {
          const Eu = uu.findIndex((uu => uu.active));
          return -1 !== Eu ? Eu : Math.max(0, uu.findIndex((uu => "open" === uu.state)))
        }(lu)));
      (0, Zu.useEffect)((() => {
        Eu.onOpened()
      }), [Eu]), (0, gu.e)((uu => !Nu && ("ArrowLeft" === uu.code || "ArrowRight" === uu.code) && !(0, Mu.isTypingInInput)()), (uu => {
        uu.stopPropagation(), wu("ArrowLeft" === uu.code ? "Back" : "Forward")
      }));
      const au = void 0 !== bu,
        Pu = (uu, ju, su) => (0, Vu.jsx)(rj, {
          className: uu,
          page: ju >= 0 && ju < lu.length ? lu[ju] : void 0,
          hidden: su,
          building: au,
          journal: Eu
        });
      return (0, Vu.jsx)(dj.c, {
        close: Xu.g,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, Vu.jsxs)("section", {
          className: cu()("PlotsJournal", {
            Spread: hu
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": Uu("plotsGame:journalTitle"),
          children: [(0, Vu.jsx)(Jj.l, {
            className: "PlotsJournalClose",
            onClick: Xu.g
          }), "active" === fu[0] && (0, Vu.jsx)(qE, {
            className: "PlotsJournalGuideSkip",
            onSkip: su.skip
          }), Nu && (0, Vu.jsx)(mj, {
            onBuild: Eu.build
          }), !Nu && (0, Vu.jsx)(vj, {
            direction: "Back",
            disabled: !Gu,
            onTurn: wu
          }), (0, Vu.jsx)("div", {
            hidden: Nu,
            className: "PlotsJournalBookPages",
            ...du,
            children: (0, Vu.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [hu && Pu("Left", Du - 2, !0), Pu("Right", Du + 2 * eu - 1, !0), (0, Vu.jsxs)("div", {
                ref: uu => {
                  Ju.current.Back = uu
                },
                className: "PlotsJournalLeaf Back",
                children: [Pu("Recto", Du - 1, !0), hu && Pu("Verso", Du, !1)]
              }), (0, Vu.jsxs)("div", {
                ref: uu => {
                  Ju.current.Forward = uu
                },
                className: "PlotsJournalLeaf Forward",
                children: [Pu("Recto", Du + eu - 1, !1), hu && Pu("Verso", Du + eu, !0)]
              })]
            })
          }), !Nu && (0, Vu.jsx)(vj, {
            direction: "Forward",
            disabled: !pu,
            onTurn: wu
          })]
        })
      })
    }

    function Tj(uu, Eu, ju, su, Uu) {
      const Zu = Math.hypot(...Eu.dir);
      if (!Number.isFinite(Zu) || 0 === Zu) return -1;
      const {
        from: Xu,
        reach: lu,
        solid: qu
      } = Eu, fu = [Eu.dir[0] / Zu, Eu.dir[1] / Zu, Eu.dir[2] / Zu], Cu = null === qu ? lu : Math.min(lu, function(uu, Eu, ju) {
        const su = Hj(uu, Eu, ju);
        if (su !== 1 / 0) return su;
        return (ju[0] + .5 - uu[0]) * Eu[0] + (ju[1] + .5 - uu[1]) * Eu[1] + (ju[2] + .5 - uu[2]) * Eu[2]
      }(Xu, fu, qu) + .75);
      let bu = -1,
        cu = 1 / 0,
        Nu = 1 / 0;
      for (let Ou = 0; Ou < uu.length; Ou += 4) {
        const Eu = [uu[Ou], uu[Ou + 1], uu[Ou + 2]],
          Zu = Uu(Ou) ? lu : Cu;
        let qu = -1,
          Yu = Hj(Xu, fu, Eu);
        if (Yu > Zu) {
          const uu = [Eu[0] + .5 - Xu[0], Eu[1] + .5 - Xu[1], Eu[2] + .5 - Xu[2]];
          if (Yu = uu[0] * fu[0] + uu[1] * fu[1] + uu[2] * fu[2], Yu <= 0 || Yu > Zu) continue;
          if (qu = Math.hypot(uu[0] - Yu * fu[0], uu[1] - Yu * fu[1], uu[2] - Yu * fu[2]), qu > .7 || !su(Ou)) continue
        }(qu < cu || qu === cu && Yu < Nu) && ju(Ou) && (bu = Ou, cu = qu, Nu = Yu)
      }
      return bu
    }

    function Hj(uu, Eu, ju) {
      let su = 0,
        Uu = 1 / 0;
      for (let Zu = 0; Zu < 3; Zu++) {
        const Xu = ju[Zu] - uu[Zu];
        if (0 === Eu[Zu]) {
          if (Xu > 0 || Xu + 1 < 0) return 1 / 0;
          continue
        }
        const lu = Xu / Eu[Zu],
          qu = (Xu + 1) / Eu[Zu];
        su = Math.max(su, Math.min(lu, qu)), Uu = Math.min(Uu, Math.max(lu, qu))
      }
      return su <= Uu ? su : 1 / 0
    }
    var Aj = ju(37294),
      nj = ju(38432);
    const yj = [1, 1, 1];
    class zj {
      constructor(uu) {
        this.api = uu, this.meshes = null, this.shown = null
      }
      show(uu) {
        if (!(0, Aj.f)(uu, this.shown))
          if (this.shown = null === uu ? null : [uu[0], uu[1], uu[2]], null !== this.meshes)
            for (const Eu of this.meshes) this.api.setGameMesh(Eu, null === uu ? {
              visible: !1
            } : {
              anchor: uu,
              visible: !0
            });
          else if (null !== uu) {
          const Eu = [nj.e, nj.e, nj.e, 0, 0, 0];
          this.meshes = [this.build([Eu], nj.g, uu), this.build((0, nj.c)(), nj.j, uu)]
        }
      }
      dispose() {
        for (const Eu of null !== (uu = this.meshes) && void 0 !== uu ? uu : []) {
          var uu;
          this.api.disposeGameMesh(Eu)
        }
        this.meshes = null, this.shown = null
      }
      build(uu, Eu, ju) {
        const su = [],
          Uu = [];
        for (const [Zu, Xu, lu, qu, fu, Cu] of uu)(0, TE.d)(su, Uu, [qu + .5, fu + .5, Cu + .5], [Zu, Xu, lu]);
        return this.api.createGameMesh({
          positions: su,
          indices: Uu
        }, {
          rgb: yj,
          alpha: Eu,
          onTop: !0
        }, ju)
      }
    }

    function Rj(uu, Eu) {
      const ju = tE.e.Sh / 2;
      return uu[0] < Eu[0] + ju && uu[0] + 1 > Eu[0] - ju && uu[1] < Eu[1] + tE.e.Ih && uu[1] + 1 > Eu[1] && uu[2] < Eu[2] + ju && uu[2] + 1 > Eu[2] - ju
    }

    function us(uu, Eu) {
      return uu.getClientOption(Eu, "blockReach") + 1
    }
    class Es {
      constructor(uu, Eu, ju) {
        this.api = uu, this.localPlayerId = Eu, this.foreseen = ju, this.cells = [], this.playerCells = [], this.next = null
      }
      get() {
        return this.next
      }
      setCells(uu) {
        this.cells = uu
      }
      playerMoved() {
        return ss(this.api.getPositionView(this.localPlayerId)).some(((uu, Eu) => uu !== this.playerCells[Eu]))
      }
      Hc(uu) {
        const Eu = this.api.getPositionView(this.localPlayerId);
        return this.playerCells.splice(0, 1 / 0, ...ss(Eu)), this.next = this.pickFrom(null === uu ? [Eu[0], Eu[1] + 1, Eu[2]] : (0, Aj.c)(uu), (() => !1)), this.next
      }
      pickFrom(uu, Eu) {
        const ju = this.api.getPositionView(this.localPlayerId),
          su = [ju[0], ju[1] + tE.e.Ih * tE.e.playerEyeToHeightRatio, ju[2]],
          Uu = us(this.api, this.localPlayerId),
          {
            cells: Zu
          } = this,
          Xu = uu => [Zu[uu], Zu[uu + 1], Zu[uu + 2]],
          lu = function(uu, Eu, ju, su, Uu, Zu) {
            let Xu = -1,
              lu = -1,
              qu = 1 / 0;
            for (let fu = 0; fu < uu.length; fu += Eu) {
              const Eu = (Zu(fu) ? 2 : 0) + (su(fu) ? 1 : 0);
              if (Eu < lu || Uu(fu)) continue;
              const Cu = (uu[fu] + .5 - ju[0]) ** 2 + (uu[fu + 1] + .5 - ju[1]) ** 2 + (uu[fu + 2] + .5 - ju[2]) ** 2;
              (Eu > lu || Cu < qu) && (Xu = fu, lu = Eu, qu = Cu)
            }
            return Xu
          }(Zu, 4, uu, (uu => 1 === Zu[uu + 3]), (uu => {
            const su = Xu(uu);
            return Rj(su, ju) || this.foreseen.has(su.join()) || Eu(su)
          }), (uu => function(uu, Eu, ju) {
            return (Eu[0] + .5 - uu[0]) ** 2 + (Eu[1] + .5 - uu[1]) ** 2 + (Eu[2] + .5 - uu[2]) ** 2 <= ju ** 2
          }(su, Xu(uu), Uu)));
        return -1 === lu ? null : Xu(lu)
      }
    }

    function ss(uu) {
      let [Eu, ju, su] = uu;
      const Uu = tE.e.Sh / 2;
      return [Math.floor(Eu), Math.floor(ju), Math.floor(su), Math.floor(Eu - Uu), Math.floor(Eu + Uu), Math.floor(ju + tE.e.Ih), Math.floor(su - Uu), Math.floor(su + Uu)]
    }
    class Us {
      constructor(uu, Eu, ju) {
        this.api = uu, this.localPlayerId = Eu, this.pickNext = ju, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(uu) {
        const [Eu, , ju] = uu.cameraDirection, su = Math.hypot(Eu, ju);
        su > .001 && (this.heading = [Eu / su, ju / su])
      }
      tapped(uu, Eu, ju) {
        const su = us(this.api, this.localPlayerId),
          {
            origin: Uu,
            direction: Zu
          } = this.api.getActionRay(),
          Xu = [...Uu],
          lu = [
            [Xu, [Xu[0] + Zu[0] * su, Xu[1] + Zu[1] * su, Xu[2] + Zu[2] * su]]
          ];
        null !== uu && lu.push([Xu, (0, Aj.c)(uu)]), this.tap = {
          lines: lu,
          next: Eu,
          ms: ju
        }
      }
      filled(uu, Eu) {
        this.tap = null, this.turnFrom(uu, Eu), this.retry(Eu)
      }
      arrived(uu, Eu) {
        const {
          tap: ju
        } = this;
        if (null === ju || Eu - ju.ms > 1500) return null;
        const su = (0, Aj.c)(uu);
        return (0, Aj.f)(ju.next, uu) || ju.lines.some((uu => {
          let [Eu, ju] = uu;
          return function(uu, Eu, ju) {
            const su = [ju[0] - Eu[0], ju[1] - Eu[1], ju[2] - Eu[2]],
              Uu = [uu[0] - Eu[0], uu[1] - Eu[1], uu[2] - Eu[2]],
              Zu = su[0] ** 2 + su[1] ** 2 + su[2] ** 2,
              Xu = 0 === Zu ? 0 : Math.min(1, Math.max(0, (Uu[0] * su[0] + Uu[1] * su[1] + Uu[2] * su[2]) / Zu));
            return Math.hypot(Uu[0] - su[0] * Xu, Uu[1] - su[1] * Xu, Uu[2] - su[2] * Xu)
          }(su, Eu, ju) <= .9
        })) ? (this.tap = null, this.turnFrom(uu, Eu), ju.ms) : null
      }
      turnFrom(uu, Eu) {
        this.pending = {
          from: uu,
          ms: Eu,
          turnMs: Math.max(50, Math.min(250, Eu - this.lastFillMs))
        }, this.lastFillMs = Eu
      }
      retry(uu) {
        const {
          pending: Eu
        } = this;
        if (null === Eu) return;
        if (uu - Eu.ms > 1500) return void(this.pending = null);
        const ju = this.pickNext((0, Aj.c)(Eu.from), (uu => (0, Aj.f)(uu, Eu.from)));
        if (null === ju) return;
        this.pending = null;
        const {
          turning: su
        } = this;
        if (null !== su && uu < su.endMs && (0, Aj.f)(su.to, ju)) return;
        const Uu = this.api.getActionRay().origin,
          Zu = [ju[0] + .5 - Uu[0], ju[1] + .5 - Uu[1], ju[2] + .5 - Uu[2]],
          Xu = Math.hypot(Zu[0], Zu[2]);
        if (Xu < .3) {
          const uu = Math.max(Xu, .001);
          Zu[0] = this.heading[0] * uu, Zu[2] = this.heading[1] * uu
        }
        this.api.turnCamera(Zu, Eu.turnMs), this.turning = {
          to: ju,
          endMs: uu + Eu.turnMs
        }
      }
    }
    class Zs {
      constructor(uu, Eu, ju, su) {
        this.api = uu, this.localPlayerId = Eu, this.juice = ju, this.tracker = su, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.lastFilled = null, this.lastSeenFilled = null, this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = void 0, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new xE(uu), this.meshes = new RE(uu), this.outline = new zj(uu), this.nextCell = new Es(uu, Eu, this.foreseen), this.turn = new Us(uu, Eu, ((uu, Eu) => this.nextCell.pickFrom(uu, Eu)))
      }
      NO(uu) {
        const Eu = "active" === uu[0] ? `${uu[1]}|${uu[3]}|${uu[4]}|${uu[5]}|${uu[6]}` : "";
        if ("active" !== uu[0]) "built" === uu[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , ju, su, Uu, Zu] = uu;
          Eu !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = ju) : ju === this.layerY ? this.burstUnlisted(su) : ju > this.layerY && this.finishLayer(ju), this.layerY = ju, this.layerCells.has(ju) || this.layerCells.set(ju, su.filter(Xs)), this.ghostCells = su, this.palette = Uu, this.occupiedCells = Zu
        }
        Eu !== this.blueprint && (this.tracker.show("active" === uu[0] && uu[2] ? {
          id: uu[1],
          y: uu[4]
        } : null), this.blueprint = Eu, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((uu => this.api.blockNameToBlockId(uu))), this.chunkWatch.watch([...this.ghostCells.filter(Xs), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(uu) {
        this.burstUnlisted([]), uu > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = uu)
      }
      Tb() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const uu = performance.now();
        let Eu = !1;
        for (const [su, Uu] of this.foreseen) {
          var ju;
          if (uu - Uu > 1e3) this.foreseen.delete(su), Eu = !0, (null === (ju = this.lastFilled) || void 0 === ju ? void 0 : ju.join()) === su && (this.lastFilled = this.lastSeenFilled)
        }(Eu || this.nextCell.playerMoved()) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(uu) {
        const Eu = new Set;
        for (let Uu = 0; Uu < uu.length; Uu += 4) Eu.add(`${uu[Uu]},${uu[Uu+1]},${uu[Uu+2]}`);
        const ju = [],
          {
            ghostCells: su
          } = this;
        for (let Uu = 0; Uu < su.length; Uu += 4) {
          const uu = `${su[Uu]},${su[Uu+1]},${su[Uu+2]}`;
          !Eu.has(uu) && this.open.delete(uu) && ju.push(this.filledCell(Uu))
        }
        this.burst(ju)
      }
      refresh() {
        const {
          ghostCells: uu,
          palette: Eu,
          occupiedCells: ju
        } = this, su = new zE, Uu = new Set, Zu = [], Xu = [];
        let lu = 0;
        for (let qu = 0; qu < uu.length; qu += 4) {
          const [ju, fu, Cu, bu] = [uu[qu], uu[qu + 1], uu[qu + 2], uu[qu + 3]], cu = this.api.getBlockId(ju, fu, Cu), Nu = `${ju},${fu},${Cu}`, Ou = vE(this.blockIds[bu], cu);
          !Ou && KE(cu) ? su.add(ju, fu, Cu, rE(Eu[bu]), AE, LE(Eu[bu])) : Ou ? this.open.has(Nu) && Zu.push(this.filledCell(qu)) : su.add(ju, fu, Cu, yE, nE), Ou || lu++, !Ou && this.api.isBlockInLoadedChunk(ju, fu, Cu) && (Uu.add(Nu), Xu.push(ju, fu, Cu, KE(cu) ? 0 : 1))
        }
        this.open = Uu, this.nextCell.setCells(Xu), this.tracker.update(this.layerY, this.topLayerY, lu);
        for (let qu = 0; qu < ju.length; qu += 3) {
          const [uu, Eu, Uu] = [ju[qu], ju[qu + 1], ju[qu + 2]];
          KE(this.api.getBlockId(uu, Eu, Uu)) || su.add(uu, Eu, Uu, yE, nE)
        }
        this.meshes.show(su.toArray()), this.burst(Zu), this.showNext(), this.turn.retry(performance.now())
      }
      burst(uu) {
        const Eu = performance.now(),
          ju = [];
        for (const [Uu, Zu, Xu] of uu) {
          const uu = [Uu, Zu, Xu];
          this.lastSeenFilled = uu, this.foreseen.delete(uu.join()) || ju.push(uu)
        }
        const su = this.isHolding(Eu);
        for (const Uu of ju) {
          if (this.lastFilled = Uu, su && this.pressFilled) {
            this.turn.filled(Uu, Eu);
            continue
          }
          const uu = this.turn.arrived(Uu, Eu);
          if (null !== uu) {
            this.pressFilled = su;
            for (const [Eu, ju] of this.foreseen) ju <= uu && this.foreseen.delete(Eu)
          }
        }
        this.juice.filled(uu)
      }
      showNext() {
        var uu;
        this.outline.show(null !== (uu = this.aimed) && void 0 !== uu ? uu : this.nextCell.Hc(this.lastFilled))
      }
      afterRender(uu) {
        var Eu;
        this.turn.look(uu);
        const ju = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === ju ? null : ju.position), this.outline.show(null !== (Eu = this.aimed) && void 0 !== Eu ? Eu : this.nextCell.get())
      }
      isHolding(uu) {
        return null !== this.altMs && uu - this.altMs <= 500
      }
      attemptAltAction(uu) {
        const Eu = performance.now();
        if (this.isHolding(Eu) || (this.pressFilled = !1), this.altMs = Eu, this.pressFilled) return "preventPlacement";
        const ju = this.findAimed(uu);
        if (null !== ju) return this.foreseen.set(ju.join(), Eu), this.lastFilled = ju, this.aimed = null, this.showNext(), this.turn.filled(ju, Eu), this.pressFilled = !0, "preventPlacement";
        {
          const ju = this.nextCell.get();
          null !== ju && this.turn.tapped(uu, ju, Eu)
        }
      }
      holdPressOnEntity() {
        const uu = performance.now();
        this.pressFilled && this.isHolding(uu) && (this.altMs = uu)
      }
      findAimed(uu) {
        return function(uu, Eu, ju, su, Uu, Zu, Xu) {
          const lu = uu.yEu(Eu),
            qu = null === lu || null === uu.blockNameToBlockId(lu.name, !0) ? null : lu.name,
            fu = uu.getPositionView(Eu),
            {
              origin: Cu,
              direction: bu
            } = uu.getActionRay(),
            cu = Tj(su, {
              from: Cu,
              dir: bu,
              reach: us(uu, Eu),
              solid: ju
            }, (Eu => {
              const ju = [su[Eu], su[Eu + 1], su[Eu + 2]];
              return !vE(Uu[su[Eu + 3]], uu.getBlockId(...ju)) && !Xu.has(ju.join()) && uu.isBlockInLoadedChunk(...ju) && !Rj(ju, fu)
            }), (uu => null === qu || qu === VE(Uu[su[uu + 3]])), (uu => null !== Zu && su[uu] === Zu[0] && su[uu + 1] === Zu[1] && su[uu + 2] === Zu[2]));
          return -1 === cu ? null : [su[cu], su[cu + 1], su[cu + 2]]
        }(this.api, this.localPlayerId, uu, this.ghostCells, this.blockIds, this.nextCell.get(), this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(uu) {
        const {
          ghostCells: Eu
        } = this, [ju, su, Uu] = rE(this.palette[Eu[uu + 3]]);
        return [Eu[uu], Eu[uu + 1], Eu[uu + 2], ju, su, Uu]
      }
    }

    function Xs(uu, Eu) {
      return Eu % 4 !== 3
    }
    class ls {
      constructor(uu) {
        this.api = uu, this.sent = !1
      }
      Tb() {
        this.sent || lu.d.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
      }
    }
    var qs = ju(4427),
      fs = ju(39461);

    function Cs(uu, Eu, ju) {
      const su = [255 * uu, 255 * Eu, 255 * ju],
        [Uu, Zu, Xu] = su.map((uu => uu + .4 * (255 - uu)));
      return {
        texture: "square_particle",
        Mb: 48,
        minLifeTime: .3 / fs.e,
        maxLifeTime: .55 / fs.e,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * fs.e * fs.e, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...su, 1],
          maxColor: [Uu, Zu, Xu, 1]
        }, {
          timeFraction: 1,
          minColor: [...su, 0],
          maxColor: [Uu, Zu, Xu, 0]
        }],
        blendMode: qs.e.Standard
      }
    }
    const bs = {
      texture: "glint",
      mipmaps: !1,
      Mb: 96,
      minLifeTime: .5 / fs.e,
      maxLifeTime: .9 / fs.e,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * fs.e * fs.e, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: qs.e.OneOne
    };
    class cs {
      constructor(uu, Eu) {
        this.api = uu, this.localPlayerId = Eu, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(uu) {
        if (this.api.particlesEnabled())
          for (const [Eu, ju, su, Uu, Zu, Xu] of uu.slice(0, 3)) {
            const uu = `${Uu},${Zu},${Xu}`;
            let lu = this.chips.get(uu);
            void 0 === lu && (lu = this.api.createParticles(Cs(Uu, Zu, Xu), {
              pos: [Eu + .5, ju + .5, su + .5]
            }), this.chips.set(uu, lu));
            for (let Eu = 0; Eu < 8; Eu++) this.setPoint(Eu, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            lu.emitPoints([Eu + .5, ju + .5, su + .5], this.points, 8)
          }
      }
      layerDone(uu) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const Eu = uu.length / 3;
        if (0 === Eu || !this.api.particlesEnabled()) return;
        const ju = Math.min(Eu, 48),
          [su, Uu, Zu] = [uu[0] + .5, uu[1] + 1, uu[2] + .5];
        let Xu = 0;
        for (let lu = 0; lu < ju; lu++) {
          const qu = 3 * Math.floor(lu * Eu / ju);
          for (let Eu = 0; Eu < 2; Eu++) this.setPoint(Xu++, uu[qu] + Math.random() - su, uu[qu + 1] + 1 - Uu, uu[qu + 2] + Math.random() - Zu, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(bs, {
          pos: [su, Uu, Zu]
        }), this.sparkles.emitPoints([su, Uu, Zu], this.points, Xu)
      }
      dispose() {
        var uu;
        for (const Eu of this.chips.values()) Eu.stop();
        this.chips.clear(), null === (uu = this.sparkles) || void 0 === uu || uu.stop(), this.sparkles = null
      }
      setPoint(uu, Eu, ju, su, Uu) {
        const Zu = 4 * uu;
        this.points[Zu] = Eu, this.points[Zu + 1] = ju, this.points[Zu + 2] = su, this.points[Zu + 3] = Uu
      }
    }
    const Ns = "SpecialAction1",
      Os = "KeyY",
      Ys = "KeyX";

    function hs(uu) {
      let {
        placement: Eu
      } = uu;
      const ju = (0, qu.g)(lj, Eu.getView()),
        {
          t: su
        } = (0, Cu.A)(),
        {
          isTouchScreen: Uu
        } = (0, lu.l)(["isTouchScreen"]),
        Xu = (0, Zu.useContext)(Gu),
        bu = null !== ju,
        Yu = bu && !ju.blocked && !ju.waiting;
      if ((0, gu.e)((uu => bu && !uu.repeat && !(0, Mu.isTypingInInput)() && !(0, Nu.s)() && !Uu), (uu => {
          const ju = function(uu, Eu, ju) {
            if (uu === Ys) return Eu.stop;
            if (uu === Os) return ju ? Eu.build : gs;
            return fu.z[Ns].includes(uu) ? Eu.rotate : null
          }(uu.code, Eu, Yu);
          null !== ju && (uu.stopPropagation(), ju())
        })), !bu) return null;
      let hu = Uu ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return ju.blocked ? hu = "plotsGame:placementOffPlot" : ju.toClear > 0 ? hu = "plotsGame:placementClear" : "placeSpot" !== Xu.hint && "placeBuild" !== Xu.hint || (hu = null), (0, Vu.jsx)(Ou.h, {
        placement: "bottom",
        children: (0, Vu.jsxs)("div", {
          ref: Xu.placementCardRef,
          className: "PlotsPlacementCard",
          children: [(0, Vu.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: su(au(ju.id).displayName.translationKey)
          }), null !== hu && (0, Vu.jsx)("div", {
            className: cu()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: ju.refusals > 0
            }),
            children: su(hu)
          }, ju.refusals), (0, Vu.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, Vu.jsxs)(Jj.f, {
              onClick: Eu.rotate,
              children: [(0, Vu.jsx)(Ds, {
                noaAction: Ns
              }), su("plotsGame:placementRotate")]
            }), (0, Vu.jsxs)(Jj.R, {
              onClick: Eu.stop,
              children: [(0, Vu.jsx)(Ds, {
                keyCode: Ys
              }), su("general:cancel")]
            }), (0, Vu.jsx)("span", {
              ref: Xu.buildRef,
              className: cu()("PlotsPlacementBuild", {
                Pulse: "placeBuild" === Xu.hint && Yu && Uu
              }),
              children: (0, Vu.jsxs)(Jj.p, {
                disabled: !Yu,
                onClick: Eu.build,
                children: [(0, Vu.jsx)(Ds, {
                  keyCode: Os
                }), su("plotsGame:placementBuild")]
              })
            })]
          })]
        })
      })
    }

    function Ds(uu) {
      return (0, Vu.jsx)(Du.b, {
        className: "PlotsPlacementKey",
        ...uu
      })
    }

    function gs() {}
    var Ms = ju(2479),
      es = ju(37075),
      Gs = ju(2027),
      ps = ju(1314);
    const ws = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function ds(uu) {
      let {
        hud: Eu
      } = uu;
      const ju = (0, qu.g)(uE, Eu.getPlot()),
        [su, Uu] = (0, Zu.useState)(null),
        Xu = (0, es.l)(su);
      if ("none" === ju[0]) return null;
      const [, lu, fu, Cu, bu, Nu] = ju;
      return (0, Vu.jsx)("div", {
        className: cu()("PlotsPlotBannerContainer", {
          Below: Xu
        }),
        children: (0, Vu.jsx)(as, {
          plotX: lu,
          plotZ: fu,
          ownerName: Cu,
          ownerId: bu,
          relation: Nu,
          plaqueRef: Uu
        }, `${lu},${fu}`)
      })
    }

    function as(uu) {
      var Eu, ju;
      let {
        plotX: su,
        plotZ: Uu,
        ownerName: Zu,
        ownerId: Xu,
        relation: lu,
        plaqueRef: qu
      } = uu;
      const {
        t: fu
      } = (0, Cu.A)(), bu = (0, Gs.f)("hiddenPlayerNames"), Nu = (0, Gs.f)("players"), Ou = null === Xu ? null : null !== (Eu = null === (ju = Nu.byId[Xu]) || void 0 === ju ? void 0 : ju.cosmetics) && void 0 !== Eu ? Eu : null, hu = fu("plotsGame:plotBannerCoords", {
        x: su,
        z: Uu
      }), Du = "own" === lu || null !== Zu;
      return (0, Vu.jsxs)("div", {
        ref: qu,
        className: cu()("PlotsPlotBanner", {
          Own: "own" === lu,
          Shared: "shared" === lu
        }),
        role: "status",
        children: [(0, Vu.jsxs)("span", {
          className: cu()("PlotsPlotBannerSeal", {
            Face: null !== Ou
          }),
          children: [null !== Ou && (0, Vu.jsx)(Ms.d, {
            cosmetics: Ou
          }), null === Ou && (0, Vu.jsx)(Yu.e, {
            name: ws[lu]
          })]
        }), (0, Vu.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, Vu.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === lu && fu("plotsGame:plotBannerYours"), "own" !== lu && null !== Zu && fu("plotsGame:plotBannerOwner", {
              name: (0, ps.e)(Zu, bu)
            }), !Du && hu]
          }), Du && (0, Vu.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [hu, "shared" === lu && (0, Vu.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: fu("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }
    const Ps = function(uu, Eu, ju, su) {
      let {
        localPlayerId: Uu
      } = su;
      const lu = new sE;
      let qu = null,
        fu = null,
        Cu = null,
        bu = null,
        cu = null,
        Nu = null;
      const Ou = [];
      return {
        onCreate: uu => {
          qu = new cs(uu, Uu);
          const Eu = new Ru;
          fu = new Zs(uu, Uu, qu, Eu), Cu = new fj(uu, Uu), bu = new Ku(uu, Cu), cu = new wj(uu, Uu, fu.nextCell), Nu = new ls(uu), Ou.push((0, Xu.o)((0, Zu.createElement)(ej, {
            hud: lu,
            guide: cu,
            tracker: Eu,
            placement: Cu
          }, (0, Zu.createElement)(ds, {
            hud: lu
          }), (0, Zu.createElement)(Qu, {
            journal: bu
          }), (0, Zu.createElement)(Yj, {
            placement: Cu
          }), (0, Zu.createElement)(hs, {
            placement: Cu
          })), {
            content: (0, Zu.createElement)(xj, {
              journal: bu,
              hud: lu,
              guide: cu
            })
          }))
        },
        Tb: () => {
          Nu.Tb(), fu.Tb(), Cu.Tb(), bu.Tb()
        },
        onPlayerAttemptAltAction: (uu, Eu, ju, su, Uu, Zu) => {
          if (null !== Zu) return void fu.holdPressOnEntity();
          const Xu = void 0 === Eu ? null : [Eu, ju, su];
          return fu.attemptAltAction(Xu)
        },
        onPlayerClickUp: () => {
          fu.endPress()
        },
        onAfterRender: (uu, Eu) => {
          Cu.afterRender(Eu), fu.afterRender(Eu), cu.afterRender(Eu)
        },
        onClose: () => {
          for (const uu of Ou) uu();
          qu.dispose(), fu.dispose(), Cu.dispose(), qu = null, fu = null, Cu = null, bu = null, cu = null, Nu = null
        },
        onReceivedMessageFromServer: (uu, Eu) => {
          if ("plotsPlot" === uu) lu.receivePlot(Eu);
          else if ("plotsBlueprint" === uu) {
            const uu = Eu;
            fu.NO(uu), Cu.NO(uu)
          } else "plotsJournal" === uu ? bu.NO(Eu) : "plotsJournalOpen" === uu ? bu.openFromServer(Eu) : "plotsPreviewEnd" === uu ? Cu.endFromServer() : "plotsGuide" === uu ? lu.receiveGuide(Eu) : "plotsGuideDone" === uu && lu.receiveGuideDone()
        }
      }
    }
  },
  38820: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => lu
    });
    var su = ju(38813);
    const Uu = 5,
      Zu = [0, 0, 0],
      Xu = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function lu(uu, Eu, ju, lu, qu, fu) {
      let [Cu, bu, cu] = lu;
      const Nu = (Cu + .5 - ju[0]) ** 2 + (bu - ju[1]) ** 2 + (cu + .5 - ju[2]) ** 2;
      let Ou = null;
      Nu <= fu ** 2 && (Zu[0] = Cu + .5, Zu[1] = bu + qu, Zu[2] = cu + .5, Ou = Eu.projectWorldPosToViewport(Zu));
      const Yu = null !== Ou && Ou.x > -Uu && Ou.x < 100 + Uu && Ou.y > -Uu && Ou.y < 100 + Uu;
      return (0, su.f)(uu, !Yu), Yu ? (Xu.x = Ou.x, Xu.y = Ou.y, Xu.distSq = Nu, Xu) : null
    }
  },
  39461: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su,
      h: () => Zu
    });
    const su = 1 / .6,
      Uu = {
        kind: "smokePuff"
      };
    class Zu {
      constructor(uu, Eu, ju) {
        this.style = uu, this.Mb = Eu, this.half = ju, this.particles = null, this.lastFrame = -1
      }
      emit(uu, Eu, ju) {
        let Zu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return ju !== this.lastFrame && (this.lastFrame = ju, this.particles || (this.particles = uu.createParticles(function(uu, Eu) {
          const [
            [ju, Zu, Xu],
            [lu, qu, fu]
          ] = uu.colours;
          return {
            texture: uu.soft ? Uu : "square_particle",
            Mb: Eu,
            minLifeTime: uu.life[0] / su,
            maxLifeTime: uu.life[1] / su,
            minEmitPower: uu.power[0] * su,
            maxEmitPower: uu.power[1] * su,
            minSize: uu.size[0],
            maxSize: uu.size[1],
            emitRate: 0,
            gravity: [0, uu.lift * su * su, 0],
            dir1: [-uu.spread, 1, -uu.spread],
            dir2: [uu.spread, 1, uu.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [ju, Zu, Xu, uu.alpha],
              maxColor: [lu, qu, fu, uu.alpha]
            }, {
              timeFraction: 1,
              minColor: [ju, Zu, Xu, 0],
              maxColor: [lu, qu, fu, 0]
            }],
            blendMode: uu.blendMode
          }
        }(this.style, this.Mb), {
          pos: Eu,
          half: this.half
        })), this.particles.moveTo(Eu, this.half), this.particles.emit(Zu), !0)
      }
      dispose() {
        var uu;
        null === (uu = this.particles) || void 0 === uu || uu.stop(), this.particles = null
      }
    }
  },
  38813: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu,
      f: () => Zu
    });
    const su = new WeakMap;

    function Uu(uu) {
      let Eu = su.get(uu);
      return Eu || (Eu = {
        hidden: uu.hidden,
        x: NaN,
        y: NaN
      }, su.set(uu, Eu)), Eu
    }

    function Zu(uu, Eu) {
      const ju = Uu(uu);
      ju.hidden !== Eu && (ju.hidden = Eu, uu.hidden = Eu)
    }

    function Xu(uu, Eu, ju) {
      const su = Uu(uu);
      su.x === Eu && su.y === ju || (su.x = Eu, su.y = ju, uu.style.translate = `${Eu}vw ${ju}vh`)
    }
  },
  37294: (uu, Eu, ju) => {
    function su(uu, Eu) {
      return null === uu || null === Eu ? uu === Eu : uu[0] === Eu[0] && uu[1] === Eu[1] && uu[2] === Eu[2]
    }

    function Uu(uu) {
      return [uu[0] + .5, uu[1] + .5, uu[2] + .5]
    }
    ju.d(Eu, {
      c: () => Uu,
      f: () => su
    })
  },
  37332: (uu, Eu, ju) => {
    function su(uu) {
      return uu.includes("Leaf Bed")
    }

    function Uu(uu) {
      return / Bed(?: Head)?(?:\||$)/.test(uu) && !su(uu)
    }

    function Zu(uu) {
      return uu.includes(" Strongbed")
    }

    function Xu(uu) {
      return su(uu) || Uu(uu) || Zu(uu)
    }
    ju.d(Eu, {
      d: () => Xu,
      f: () => su,
      j: () => Zu,
      n: () => Uu
    })
  },
  37328: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => fu
    });
    var su = ju(37332),
      Uu = ju(9409);
    const Zu = [],
      Xu = [],
      lu = [],
      qu = [];
    for (const Cu of Object.keys(Uu.j))(0, su.f)(Cu) ? Zu.push(Cu) : (0, su.n)(Cu) && Xu.push(Cu), (0, su.j)(Cu) && lu.push(Cu), (Cu.includes(" Bed Head") || Cu.includes(" Strongbed Head")) && qu.push(Cu);
    const fu = {
      leafBeds: Zu,
      woolBeds: Xu,
      strongBeds: lu,
      beds: [...Zu, ...Xu, ...lu],
      bedHeads: qu,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  38864: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);