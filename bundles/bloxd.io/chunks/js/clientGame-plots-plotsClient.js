export const id = 26;
export const ids = [26];
export const modules = {
  37420: (ee, ie, He) => {
    He.d(ie, {
      b: () => pe,
      d: () => Xe,
      h: () => ke,
      j: () => Re
    });
    var ye = He(34867),
      be = He(37424),
      Me = He(37427),
      Ke = He(9446),
      Ue = He(1432),
      Fe = He(59),
      Je = He(77),
      oe = He(1228);

    function Re() {
      var ee;
      return (0, Ue.j)(be.b, (0, be.p)()), (0, oe.jsx)(oe.Fragment, {
        children: null === (ee = (0, be.p)()) || void 0 === ee ? void 0 : ee.content
      })
    }

    function ke(ee) {
      var ie;
      let {
        show: He
      } = ee;
      (0, Ue.j)(be.b, (0, be.p)());
      const Je = null === (ie = (0, be.p)()) || void 0 === ie ? void 0 : ie.menu;
      return (0, Fe.useEffect)((() => {
        var ee;
        He || (null === Je || void 0 === Je || null === (ee = Je.onClose) || void 0 === ee || ee.call(Je), (0, Me.l)())
      }), [He, Je]), (0, Fe.useEffect)((() => He ? (0, Ke.g)(Me.r, Me.e) : void 0), [He]), (0, oe.jsx)(ye.e, {
        showing: He,
        globallyUniqueKey: "clientGameMenu",
        children: null === Je || void 0 === Je ? void 0 : Je.content
      })
    }
    const qe = new Map,
      fe = new Set;

    function Te(ee, ie) {
      ie ? qe.set(ee, ie) : qe.delete(ee);
      for (const He of fe) He()
    }

    function pe(ee) {
      let {
        placement: ie = "bottom"
      } = ee;
      const He = (0, Fe.useRef)(null);
      return (0, Fe.useLayoutEffect)((() => {
        const ee = He.current;
        return Te(ie, ee), () => {
          qe.get(ie) === ee && Te(ie, null)
        }
      }), [ie]), (0, oe.jsx)("div", {
        ref: He,
        id: `clientGameHud-${ie}`,
        style: {
          display: "contents"
        }
      })
    }

    function Xe(ee) {
      let {
        children: ie,
        placement: He = "bottom"
      } = ee;
      const [ye, be] = (0, Fe.useState)((() => {
        var ee;
        return null !== (ee = qe.get(He)) && void 0 !== ee ? ee : null
      }));
      return (0, Fe.useEffect)((() => {
        const ee = () => {
          var ee;
          be(null !== (ee = qe.get(He)) && void 0 !== ee ? ee : null)
        };
        return fe.add(ee), ee(), () => {
          fe.delete(ee)
        }
      }), [He]), ye ? (0, Je.createPortal)(ie, ye) : null
    }
  },
  34867: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me
    });
    var ye = He(4931),
      be = He(4937);

    function Me(ee) {
      let {
        children: ie,
        showing: He,
        globallyUniqueKey: Me,
        alwaysMountChildren: Ke = !1,
        doGameplayStartStopOnShow: Ue = !0,
        keepsMovement: Fe = !1
      } = ee;
      return (0, be.e)(!0, He, Me, Fe), (0, ye.c)(Ue, He), He || Ke ? ie : null
    }
  },
  37516: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      d: () => Ke,
      g: () => Ue,
      k: () => Fe
    });
    var ye = He(59),
      be = He(3416);
    const Me = 8,
      Ke = "InGameHeaderContainer",
      Ue = "TopRightElements";

    function Fe(ee) {
      const [ie] = (0, be.b)(), [He, Fe] = (0, ye.useState)(!1);
      return (0, ye.useLayoutEffect)((() => {
        if (!ee) return;
        const ie = document.querySelector(`.${Ke}`),
          He = document.querySelector(`.${Ue}`),
          ye = () => {
            const ye = ee.getBoundingClientRect(),
              be = ie ? ie.getBoundingClientRect().right : 0,
              Ke = He ? He.getBoundingClientRect().left : window.innerWidth,
              Ue = ye.left < be + Me,
              Je = ye.right > Ke - Me;
            Fe(Ue || Je)
          };
        ye();
        const be = new ResizeObserver(ye);
        return be.observe(ee), ie && be.observe(ie), He && be.observe(He), () => {
          be.disconnect()
        }
      }), [ee, ie]), He
    }
  },
  9446: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      g: () => be
    });
    let ye = null;
    const be = function(ee) {
        const ie = {
          cycle: ee,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return ye = ie, () => {
          ye === ie && (ye = null)
        }
      },
      Me = () => {
        var ee;
        return null !== (ee = ye) && void 0 !== ee && ee.canCycle() ? ye.cycle : null
      }
  },
  39315: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ke,
      h: () => Ue,
      l: () => Fe
    });
    const ye = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      be = [0, 1, 2, 0, 2, 3],
      Me = [4, 5];

    function Ke(ee, ie, He, ye, be) {
      for (let Ke = 0; Ke < 6; Ke++) Me.includes(Ke) === be && Je(ee, ie, He, ye, Ke)
    }

    function Ue(ee, ie, He, ye) {
      for (let be = 0; be < 6; be++) Je(ee, ie, He, ye, be)
    }

    function Fe(ee, ie, He, Me, Ke) {
      for (let Ue = 0; Ue < 6; Ue++)
        for (const Fe of [0, 1]) {
          const [Je, oe, Re] = [Fe + 2, Fe + 1, (Fe + 3) % 4], ke = ee.length / 3;
          for (const [ie, be] of [
              [Fe, oe],
              [Je, oe],
              [Je, Re],
              [Fe, Re]
            ])
            for (let Fe = 0; Fe < 3; Fe++) {
              const Je = ye[3 * (4 * Ue + ie) + Fe],
                oe = ye[3 * (4 * Ue + be) + Fe];
              ee.push((Je + (oe - Je) * Ke) * Me / 2 + He[Fe])
            }
          for (const ee of be) ie.push(ke + ee)
        }
    }

    function Je(ee, ie, He, Me, Ke) {
      let [Ue, Fe, Je] = He, [oe, Re, ke] = Me;
      const qe = ee.length / 3;
      for (let be = 4 * Ke; be < 4 * Ke + 4; be++) ee.push(ye[3 * be] * oe / 2 + Ue, ye[3 * be + 1] * Re / 2 + Fe, ye[3 * be + 2] * ke / 2 + Je);
      for (const ye of be) ie.push(qe + ye)
    }
  },
  40346: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => Dy
    });
    const ye = [0, 90, 180, 270],
      be = "plotsblueprint";
    var Me = He(59),
      Ke = He(37424),
      Ue = He(18),
      Fe = He(1432),
      Je = He(2046),
      oe = He(1127),
      Re = He(1053),
      ke = He.n(Re),
      qe = He(1620),
      fe = He(40352),
      Te = He(37420),
      pe = He(1323),
      Xe = He(1970),
      ze = He(2043),
      Be = He(3763),
      Ee = He(1768);

    function ge() {}
    const Oe = (0, Me.createContext)({
      hint: null,
      journalRef: ge,
      placementCardRef: ge,
      buildRef: ge
    });
    var de = He(27);
    const We = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      te = {
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
      Ze = ["small", "medium", "large"].flatMap((ee => We.flat().filter((ie => te[ie].tier === ee))));

    function we(ee) {
      return te[ee]
    }
    const De = new Map(We.flatMap((ee => ee.slice(1).map(((ie, He) => [ie, ee[He]])))));

    function Pe(ee) {
      var ie;
      return null !== (ie = De.get(ee)) && void 0 !== ie ? ie : null
    }
    const Ae = {
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

    function Ye(ee, ie) {
      const He = new Set(ee),
        ye = function(ee) {
          const ie = new Set(ee);
          return new Set(Ze.filter((ee => {
            const He = Pe(ee);
            return null === He || ie.has(He)
          })))
        }(He);
      return Ze.map((ee => {
        const be = ee === ie;
        if (He.has(ee)) return {
          id: ee,
          active: be,
          note: null,
          state: "completed",
          unlockedBy: null
        };
        const Me = Ae[ee],
          Ke = void 0 === Me || Me.firstBuild && He.size > 0 ? null : Me.key;
        return ye.has(ee) ? {
          id: ee,
          active: be,
          note: Ke,
          state: "open",
          unlockedBy: null
        } : {
          id: ee,
          active: be,
          note: Ke,
          state: "locked",
          unlockedBy: Pe(ee)
        }
      }))
    }
    const Ve = "plotsJournalChanged";
    class ae {
      constructor(ee, ie) {
        this.api = ee, this.placement = ie, this.pages = null, this.openRequested = null, this.openedOffered = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.RR(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
        }, this.build = ee => {
          this.placement.start(ee), (0, Ke.h)()
        }, this.putAway = () => {
          this.api.sendCommand(`${be} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      DR(ee) {
        let [, ie, He] = ee;
        this.pages = Ye(ie, He), de.h.yR(Ve, this.pages, !0)
      }
      openFromServer(ee) {
        let [, ie] = ee;
        this.openRequested = ie, this.YR()
      }
      YR() {
        const ee = this.openRequested;
        null === ee || Ue.e.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, qe.o)() || (0, Ee.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = ee, (0, Ke.s)()))
      }
      RR(ee) {
        this.reported.has(ee) || (this.reported.add(ee), this.api.sendCommand(`${be} report ${ee}`))
      }
    }
    var ce = He(1228);
    const xe = "KeyJ";

    function Le(ee) {
      let {
        journal: ie
      } = ee;
      const He = (0, Fe.j)(Ve, ie.getPages()),
        {
          isTouchScreen: ye
        } = (0, Ue.m)(["isTouchScreen"]),
        {
          t: be
        } = (0, oe.v)(),
        Je = (0, Me.useContext)(Oe),
        Re = null !== He;
      return (0, Me.useEffect)((() => Re ? (0, fe.e)(xe) : void 0), [Re]), (0, Be.e)((ee => Re && ee.code === xe && !ee.repeat && !(0, Ee.isTypingInInput)()), (ee => {
        (0, qe.y)(ee, !0, Ke.s)
      })), null === He ? null : (0, ce.jsx)(Te.d, {
        placement: "topRight",
        children: (0, ce.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, ce.jsxs)("button", {
            ref: Je.journalRef,
            type: "button",
            className: ke()("PlotsJournalButton SmallTextBold", {
              Touch: ye
            }),
            onClick: Ke.s,
            children: [(0, ce.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, ce.jsx)(Xe.c, {
                itemName: "Book",
                amount: 0
              })
            }), be("plotsGame:journalButton"), !ye && (0, ce.jsx)(ze.e, {
              className: "PlotsJournalButtonKey",
              keyCode: xe
            }), "openJournal" === Je.hint && (0, ce.jsx)(pe.e, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon HandLeftAnim PlotsJournalButtonHand"
            })]
          })
        })
      })
    }
    var Ce = He(9961);
    const ve = [0, 90, 180, 270],
      ue = /^(meta\|rot\d)\|([lrud]+)$/,
      me = "nesw",
      le = /^meta\|([nesw]*)\|?(Stacked)?$/,
      Se = function(ee) {
        const ie = new WeakMap;
        return (He, ye) => {
          let be = ie.get(He);
          return void 0 === be && (be = ee(He, ye), ie.set(He, be)), be
        }
      }((ee => new ne(ee)));
    class ne {
      constructor(ee) {
        this.blockMetadata = ee, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const ie = new Set(Object.keys(ee).map((ie => ee[ie].id)));
        ie.add(0), this.maxBlockId = Math.max(...ie)
      }
      static
      for (ee) {
        return Se(ee)
      }
      getBlockIdMapping(ee, ie) {
        const He = this.getBlockIdMappingKey(ee, ie);
        let ye = this.blockIdMappings.get(He);
        return void 0 === ye && ve.includes(ee) && (ye = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, ee, ie), this.blockIdMappings.set(He, ye)), ye
      }
      turnBlockId(ee, ie, He) {
        return this.mapBlockId(this.blockMetadata[ee], ie, this.getRotationMapping(ie, He), He)
      }
      getBlockIdMappingKey(ee, ie) {
        return `r${ee}|m${Number(ie)}`
      }
      createBlockIdMapping(ee, ie, He, ye) {
        const be = new Uint16Array(ie + 1),
          Me = this.getRotationMapping(He, ye);
        for (const Ke in ee) {
          const ie = ee[Ke];
          be[ie.id] = this.mapBlockId(ie, He, Me, ye)
        }
        return be
      }
      getRotationMapping(ee, ie) {
        const He = Math.round(ee / 90),
          ye = new Uint8Array(4);
        for (let be = 0; be < 4; be++) ye[be] = (4 + be - He) % 4;
        if (ie) {
          let ee = ye[0];
          ye[0] = ye[1], ye[1] = ee, ee = ye[2], ye[2] = ye[3], ye[3] = ee
        }
        return ye
      }
      mapBlockId(ee, ie, He, ye) {
        var be;
        const {
          blockMetadata: Me
        } = this, Ke = Math.round(ie / 90), {
          id: Ue,
          meta: Fe
        } = ee, {
          rot: Je,
          rootName: oe,
          metaStr: Re
        } = Fe;
        let ke;
        const [, qe, fe] = null !== (be = le.exec(Re)) && void 0 !== be ? be : [];
        if (void 0 !== qe) {
          var Te, pe;
          ke = null !== (Te = null === (pe = Me[`${oe}|meta|${[me.split("").filter(((ee,ie)=>qe.split("").some((ee=>{const He=me.indexOf(ee);return((ye?3-He:He)+Ke)%4===ie})))).join(""),fe].filter(Boolean).join("|")}`]) || void 0 === pe ? void 0 : pe.id) && void 0 !== Te ? Te : Ue
        } else if (null === Je) ke = Ue;
        else {
          var Xe, ze;
          const ee = He[Je - 1] + 1;
          let ie = Re.replace(`rot${Je}`, `rot${ee}`);
          ye && Fe.stairsCorner && (ie = ie.replace(/(Left|Right)$/, (ee => "Left" === ee ? "Right" : "Left"))), ye && "Chest" === oe && (ie = ie.replace(/\|(left|right)$/, ((ee, ie) => "left" === ie ? "|right" : "|left")));
          const be = ue.exec(ie);
          if (ye && null !== be) {
            const ee = "lrud".split("").filter((ee => be[2].includes("l" === ee ? "r" : "r" === ee ? "l" : ee)));
            ie = `${be[1]}|${ee.join("")}`
          }
          const Ke = `${oe}|${ie}`;
          if (ke = null !== (Xe = null === (ze = Me[Ke]) || void 0 === ze ? void 0 : ze.id) && void 0 !== Xe ? Xe : null, null === ke) {
            const ee = Me[oe];
            ke = ee.rootMetaDesc === Ke ? ee.id : Ue
          }
        }
        return ke
      }
    }

    function je(ee, ie, He) {
      let {
        xRotationMappedOrigin: ye,
        shouldSwapXZ: be
      } = He;
      const Me = be ? ie : ee;
      return null === ye ? Me : ye - Me
    }

    function se(ee, ie, He) {
      let {
        zRotationMappedOrigin: ye,
        shouldSwapXZ: be
      } = He;
      const Me = be ? ee : ie;
      return null === ye ? Me : ye - Me
    }
    const Ie = {
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
      he = new Map;

    function Ne(ee, ie) {
      const He = `${ee}|${ie}`;
      let ye = he.get(He);
      if (void 0 === ye) {
        const {
          size: be,
          palette: Me,
          layers: Ke
        } = Ie[ee], Ue = 90 === ie || 270 === ie, [Fe, Je] = Ue ? [be[2], be[0]] : [be[0], be[2]], oe = function(ee, ie, He) {
          let ye = null,
            be = null,
            Me = !1;
          switch (ee) {
            case 0:
              break;
            case 90:
              ye = ie - 1, Me = !0;
              break;
            case 180:
              ye = ie - 1, be = He - 1;
              break;
            case 270:
              be = He - 1, Me = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${ee}`)
          }
          return {
            xRotationMappedOrigin: ye,
            zRotationMappedOrigin: be,
            shouldSwapXZ: Me
          }
        }(ie, Fe, Je), Re = ne.for(Ce.i), ke = Me.map((ee => (0, Ce.e)(Re.turnBlockId((0, Ce.j)(ee), ie, !1)))), qe = [];
        Ke.forEach(((ee, ie) => {
          ee.split(" ").forEach(((ee, He) => {
            for (let ye = 0; ye < ee.length; ye++)
              if ("." !== ee[ye]) {
                const be = [je(ye, He, oe), ie, se(ye, He, oe)];
                qe.push({
                  offset: be,
                  block: ke[ee.charCodeAt(ye) - "a".charCodeAt(0)]
                })
              }
          }))
        })), ye = {
          size: [Fe, be[1], Je],
          cells: qe
        }, he.set(He, ye)
      }
      return ye
    }
    const Ge = "plotsBuildProgressChanged",
      re = new Map;

    function Qe(ee, ie, He) {
      let ye = 0,
        be = 0;
      return function(ee) {
        let ie = re.get(ee);
        if (void 0 === ie) {
          const ye = [];
          for (const {
              offset: ie
            }
            of Ne(ee, 0).cells) {
            var He;
            ye[ie[1]] = (null !== (He = ye[ie[1]]) && void 0 !== He ? He : 0) + 1
          }
          ie = ye, re.set(ee, ie)
        }
        return ie
      }(ee).forEach(((ee, He) => {
        ye += ee, He > ie && (be += ee)
      })), {
        id: ee,
        filled: ye - be - He,
        total: ye
      }
    }
    class ei {
      constructor() {
        this.shown = null, this.topOpen = 0, this.progress = null
      }
      get() {
        return this.progress
      }
      show(ee) {
        this.shown = ee, this.topOpen = 0, null === ee && this.yR(null)
      }
      update(ee, ie, He) {
        const ye = this.shown;
        null !== ye && (ee >= ie && (this.topOpen = He), this.yR(Qe(ye.id, ie - ye.y, ee >= ie ? He : this.topOpen + He)))
      }
      yR(ee) {
        const ie = this.progress;
        (null === ee || void 0 === ee ? void 0 : ee.id) === (null === ie || void 0 === ie ? void 0 : ie.id) && (null === ee || void 0 === ee ? void 0 : ee.filled) === (null === ie || void 0 === ie ? void 0 : ie.filled) && (null === ee || void 0 === ee ? void 0 : ee.total) === (null === ie || void 0 === ie ? void 0 : ie.total) || (this.progress = ee, de.h.yR(Ge, ee, !0))
      }
    }
    const ii = "plotsPlotChanged",
      Hi = "plotsGuideChanged",
      yi = "plotsGuideDone";
    class bi {
      constructor() {
        this.plot = ["none"], this.guide = ["none"]
      }
      getPlot() {
        return this.plot
      }
      receivePlot(ee) {
        this.plot = ee, de.h.yR(ii, ee, !0)
      }
      getGuide() {
        return this.guide
      }
      receiveGuide(ee) {
        this.guide = ee, de.h.yR(Hi, ee, !0)
      }
      receiveGuideDone() {
        de.h.yR(yi, void 0, !0)
      }
    }
    var Mi = He(1215),
      Ki = He(39352),
      Ui = He(37708),
      Fi = He(1455);

    function Ji(ee) {
      let {
        onSkip: ie,
        className: He
      } = ee;
      const {
        t: ye
      } = (0, oe.v)();
      return (0, ce.jsx)("button", {
        type: "button",
        className: ke()("PlotsGuideSkipButton", He),
        ...(0, Fi.f)(ie, "pointerup"),
        children: ye("tutorial:skip")
      })
    }

    function oi(ee) {
      let {
        target: ie,
        placement: He,
        spotlight: ye = null,
        children: be
      } = ee;
      const {
        t: Ke
      } = (0, oe.v)(), Ue = (0, Me.useRef)(ie);
      return Ue.current = ie, (0, Mi.t)("popup", Ue, null === ye ? null : ye.onSkip, null !== ye, null, "controller:menusSkipTutorial"), (0, ce.jsxs)(Ui.d, {
        target: ie,
        placement: He,
        className: ke()("PlotsGuideBubble", {
          Passive: null === ye
        }),
        spotlight: null !== ye,
        spotlightMargin: 30,
        children: [(0, ce.jsxs)("div", {
          className: "PlotsGuideBubbleHeader",
          children: [(0, ce.jsx)("img", {
            className: "PlotsGuideBubblePortrait",
            src: Ki,
            alt: "",
            draggable: !1
          }), (0, ce.jsx)("span", {
            className: "PlotsGuideBubbleSpeaker",
            children: Ke("plotsGame:maverickName")
          }), null !== ye && (0, ce.jsx)(Ji, {
            onSkip: ye.onSkip
          })]
        }), (0, ce.jsx)("p", {
          className: "PlotsGuideBubbleText",
          children: be
        })]
      })
    }

    function Ri(ee) {
      let {
        className: ie,
        icon: He,
        title: ye,
        children: be
      } = ee;
      return (0, ce.jsxs)("div", {
        className: ke()("PlotsCard", ie),
        role: "status",
        children: [(0, ce.jsx)("span", {
          className: "PlotsCardIcon",
          children: (0, ce.jsx)(pe.e, {
            name: He
          })
        }), (0, ce.jsxs)("div", {
          className: "PlotsCardBody",
          children: [(0, ce.jsx)("div", {
            className: "PlotsCardTitle SmallTextBold",
            children: ye
          }), be]
        })]
      })
    }

    function ki(ee) {
      let {
        progress: ie,
        goal: He
      } = ee;
      const ye = Math.min(ie, He);
      return (0, ce.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, ce.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": He,
          "aria-valuenow": ye,
          children: (0, ce.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${ye/He})`
            }
          })
        }), (0, ce.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [ye, "/", He]
        })]
      })
    }

    function qi(ee) {
      let {
        progress: ie,
        guide: He
      } = ee;
      const {
        t: ye
      } = (0, oe.v)(), {
        isTouchScreen: be
      } = (0, Ue.m)(["isTouchScreen"]), Me = ie.filled < 5;
      return (0, ce.jsxs)(ce.Fragment, {
        children: [(Me || ie.total - ie.filled <= 5) && (0, ce.jsx)("div", {
          className: "PlotsGuideHandLayer",
          children: (0, ce.jsx)("div", {
            ref: He.bindHand,
            className: "PlotsGuideHand",
            children: (0, ce.jsx)(pe.e, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon"
            })
          })
        }), (0, ce.jsx)(Te.d, {
          placement: "bottom",
          children: (0, ce.jsxs)(Ri, {
            icon: "hammer",
            title: ye(we(ie.id).displayName.translationKey),
            children: [Me && (0, ce.jsx)("div", {
              className: "PlotsCardHint SmallTextLight",
              children: be ? ye("plotsGame:guideBuildTouch") : fi(ye)
            }), (0, ce.jsx)(ki, {
              progress: ie.filled,
              goal: ie.total
            })]
          })
        })]
      })
    }

    function fi(ee) {
      const ie = Je.q["alt-fire"][0];
      return "Mouse3" === ie ? ee("plotsGame:guideBuildRightClick") : ee("plotsGame:guideBuildKeys", {
        key: (0, Je.k)(ie)
      })
    }

    function Ti() {
      return (0, ce.jsx)("div", {
        className: "PlotsGuideDragHand",
        children: (0, ce.jsx)(pe.e, {
          name: "hand-back-point-up",
          className: "SmallTextBold TouchTutorialIcon"
        })
      })
    }
    var Xi = He(1246),
      zi = He(2733),
      Bi = He(39208),
      Ei = He(38990),
      gi = He(37765),
      Oi = He(1e4),
      di = He(10012),
      Wi = He(347),
      ti = He(38639);
    const Zi = new Map([
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
      wi = [...gi.d.blockRemoveActionRoots, ...Ei.b, ...Oi.g, "Board", "Code Block", "Custom Lobby Block"],
      Di = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let Pi = null;

    function Ai() {
      return Pi ??= function() {
        const ee = Yi(),
          ie = Math.max(...ee.map((ee => Ce.i[ee].id))) + 1,
          He = new Int32Array(ie),
          ye = new Int32Array(ie),
          be = new Uint8Array(ie).fill(1),
          Me = new Uint8Array(ie),
          Ke = new Uint8Array(ie),
          Ue = new Array(ie).fill("Air"),
          Fe = new Map,
          Je = ee => {
            let ie = Fe.get(ee);
            return void 0 === ie && (ie = Fe.size + 1, Fe.set(ee, ie)), ie
          },
          oe = new Set(wi);
        for (const ke of ee) {
          var Re;
          const {
            id: ee,
            meta: ie,
            altActionable: Fe,
            canBePlacedOver: qe
          } = Ce.i[ke];
          He[ee] = Je(Vi(ke));
          const fe = ie.stairsCorner;
          if (null === fe) ye[ee] = He[ee];
          else {
            const He = fe.endsWith("Right");
            ye[ee] = Je(`${ie.rootName}|rot${He?ie.rot%4+1:ie.rot}|${ie.halfblockPlacement}|${fe.replace("Right","Left")}`)
          }
          be[ee] = qe ? 1 : 0, Me[ee] = Fe || null !== ie.open || ke in ti.d || oe.has(ie.rootName) || void 0 !== (0, Ei.e)(ie.rootName) ? 1 : 0;
          const {
            rootName: Te
          } = ie;
          Ke[ee] = null !== ie.open || Ei.b.includes(Te) || Te.includes("Bookshelf") || Te.includes("Mailbox") ? 1 : 0, Ue[ee] = null !== (Re = (0, Bi.e)(ee)) && void 0 !== Re ? Re : Te
        }
        return {
          kinds: He,
          shapes: ye,
          empty: be,
          inUse: Me,
          ownAltActionMessage: Ke,
          placingItems: Ue
        }
      }(), Pi
    }

    function Yi() {
      return Object.keys(Ce.i).filter((ee => Ce.i[ee].name === ee))
    }

    function Vi(ee) {
      var ie;
      const He = Ce.i[ee],
        {
          rootName: ye,
          rot: be
        } = He.meta,
        [, ...Me] = (null !== (ie = He.rootMetaDesc) && void 0 !== ie ? ie : ee).split("|"),
        Ke = Me.filter((ee => !("meta" === ee || Di.test(ee) || (0, di.L)(He) && /^[nesw]+$/.test(ee) || Oi.g.includes(ye) && /^[lrud]+$/.test(ee) || Wi.J.includes(ye) && /^(left|right)$/.test(ee))));
      return [ye, ...Ke].map((ee => "fenceGate" === He.model && ee === `rot${be}` ? "rot" + ((be - 1) % 2 + 1) : ee)).join("|")
    }

    function ai(ee, ie) {
      const {
        kinds: He,
        shapes: ye
      } = Ai();
      return He[ee] === He[ie] || ye[ee] === ye[ie]
    }

    function ci(ee) {
      return 1 === Ai().empty[ee]
    }

    function xi(ee) {
      return Ai().placingItems[ee]
    }

    function Li(ee) {
      return Zi.get(Ce.i[ee].meta.rootName)
    }
    var Ci = He(9994),
      vi = He(10008);
    const ui = [0, 0, 0, 1, 1, 1],
      mi = (0, Ci.d)([
        [2, 0, 2, 6, 6, 6]
      ]),
      li = (0, Ci.d)([
        [3, 0, 3, 5, 5, 5]
      ]),
      Si = (0, Ci.d)([
        [3, 3, 3, 5, 8, 5]
      ]),
      ni = [0, 1, 2, 3].map((ee => (0, Ci.d)((0, Ci.i)([
        [3, 2, 0, 5, 7, 3]
      ], ee))));

    function ji(ee) {
      const {
        Bp: ie,
        model: He,
        blockModel: ye,
        meta: be
      } = Ce.i[ee];
      return void 0 !== ie ? ie : "CentreCross" === He ? mi : null !== ye && void 0 !== ye && ye.startsWith("torch") ? be.halfblockPlacement === vi.d.side ? ni[be.rot - 1] : be.halfblockPlacement === vi.d.top ? Si : li : ui
    }
    var si = He(186);
    class Ii {
      constructor(ee) {
        this.api = ee, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(ee) {
        const ie = si.g.BR;
        this.chunks = [];
        for (let He = 0; He < ee.length; He += 3) {
          const ye = Math.floor(ee[He] / ie),
            be = Math.floor(ee[He + 1] / ie),
            Me = Math.floor(ee[He + 2] / ie);
          this.watches(ye, be, Me) || this.chunks.push(ye, be, Me)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const ee = performance.now();
        if (ee - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = ee;
        let ie = !1;
        for (let He = 0; He < this.chunks.length; He += 3) {
          const ee = this.api.getChunkVersion(this.chunks[He], this.chunks[He + 1], this.chunks[He + 2]);
          this.versions[He / 3] !== ee && (this.versions[He / 3] = ee, ie = !0)
        }
        return ie
      }
      watches(ee, ie, He) {
        for (let ye = 0; ye < this.chunks.length; ye += 3)
          if (this.chunks[ye] === ee && this.chunks[ye + 1] === ie && this.chunks[ye + 2] === He) return !0;
        return !1
      }
    }
    var Ni = He(39315);
    const Gi = .35,
      ri = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      Qi = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      eH = [.95, .2, .15];
    class iH {
      constructor() {
        this.groups = []
      }
      add(ee, ie, He, ye, be) {
        let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ui;
        for (const Ke of this.groups)
          if (bH(Ke, ye, be)) return Ke.cells.push(ee, ie, He), void Ke.boxes.push(Me);
        this.groups.push({
          rgb: ye,
          look: be,
          cells: [ee, ie, He],
          boxes: [Me]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class HH {
      constructor(ee) {
        this.api = ee, this.shown = []
      }
      show(ee) {
        const ie = [];
        for (const He of ee) {
          const ee = this.shown.findIndex((ee => {
            let {
              group: ie
            } = ee;
            return bH(ie, He.rgb, He.look) && MH(ie, He)
          })); - 1 === ee ? ie.push(this.build(He)) : (ie.push(this.shown[ee]), this.shown.splice(ee, 1))
        }
        this.dispose(), this.shown = ie
      }
      dispose() {
        for (const {
            meshes: ee
          }
          of this.shown)
          for (const ie of ee) this.api.disposeGameMesh(ie);
        this.shown = []
      }
      build(ee) {
        const {
          rgb: ie,
          look: He,
          boxes: ye
        } = ee, be = [ie[0] + (1 - ie[0]) * Gi, ie[1] + (1 - ie[1]) * Gi, ie[2] + (1 - ie[2]) * Gi], Me = [this.buildMesh(ee.cells, ie, He.alpha, ((ee, ie, be, Me) => {
          yH(ee, ie, be, ye[Me], He.size, !1)
        })), this.buildMesh(ee.cells, be, He.alpha, ((ee, ie, be, Me) => {
          yH(ee, ie, be, ye[Me], He.size, !0)
        }))];
        return He.crossed && Me.push(this.buildMesh(ee.cells, ie, .9, ((ee, ie, ye) => {
          (0, Ni.l)(ee, ie, ye, He.size + .01, .12)
        }))), {
          group: ee,
          meshes: Me
        }
      }
      buildMesh(ee, ie, He, ye) {
        const be = [ee[0], ee[1], ee[2]],
          Me = [],
          Ke = [];
        for (let Ue = 0; Ue < ee.length; Ue += 3) ye(Me, Ke, [ee[Ue] - be[0] + .5, ee[Ue + 1] - be[1] + .5, ee[Ue + 2] - be[2] + .5], Ue / 3);
        return this.api.createGameMesh({
          positions: Me,
          indices: Ke
        }, {
          rgb: [ie[0], ie[1], ie[2]],
          alpha: He
        }, be)
      }
    }

    function yH(ee, ie, He, ye, be, Me) {
      for (let Ke = 0; Ke < ye.length; Ke += 6) {
        const Ue = [0, 0, 0],
          Fe = [0, 0, 0];
        for (let ee = 0; ee < 3; ee++) Ue[ee] = He[ee] + ((ye[Ke + ee] + ye[Ke + ee + 3]) / 2 - .5) * be, Fe[ee] = (ye[Ke + ee + 3] - ye[Ke + ee]) * be;
        (0, Ni.e)(ee, ie, Ue, Fe, Me)
      }
    }

    function bH(ee, ie, He) {
      return ee.rgb[0] === ie[0] && ee.rgb[1] === ie[1] && ee.rgb[2] === ie[2] && ee.look === He
    }

    function MH(ee, ie) {
      if (ee.cells.length !== ie.cells.length) return !1;
      for (let He = 0; He < ee.cells.length; He++)
        if (ee.cells[He] !== ie.cells[He]) return !1;
      return ee.boxes.every(((ee, He) => ee === ie.boxes[He]))
    }

    function KH(ee, ie, He, ye, be) {
      if (!ee.isBlockInLoadedChunk(ie, ye - 6, He) || !ee.isBlockInLoadedChunk(ie, ye + 6 + be, He) || !ee.canModifyBlockAt(ie, ye, He)) return NaN;
      let Me = ye - 1;
      if (0 !== ee.getBlockId(ie, Me, He)) {
        for (; Me < ye + 6 && 0 !== ee.getBlockId(ie, Me + 1, He);) Me++;
        return Me
      }
      for (; Me > ye - 6;)
        if (Me--, 0 !== ee.getBlockId(ie, Me, He)) return Me;
      return NaN
    }

    function UH(ee, ie, He, ye, be) {
      let Me = 0;
      for (let Ke = ye + 1; Ke <= ye + be; Ke++) 0 !== ee.getBlockId(ie, Ke, He) && Me++;
      return Me
    }

    function FH(ee) {
      const ie = new Map;
      for (const Ke of ee) {
        var He;
        if (Number.isNaN(Ke)) return null;
        ie.set(Ke, (null !== (He = ie.get(Ke)) && void 0 !== He ? He : 0) + 1)
      }
      let ye = NaN,
        be = 0;
      for (const [Ke, Ue] of ie)(Ue > be || Ue === be && Ke < ye) && (ye = Ke, be = Ue);
      let Me = 0;
      for (const Ke of ee) Me += Math.abs(Ke - ye);
      return Me
    }

    function JH(ee, ie, He, ye) {
      const {
        eye: be,
        forward: Me,
        tanHalfFovX: Ke,
        tanHalfFovY: Ue
      } = ee, [Fe, Je] = function(ee) {
        let [ie, He, ye] = ee;
        const be = Math.hypot(ie, ye),
          [Me, Ke] = [ye / be, -ie / be];
        return [
          [Me, 0, Ke],
          [He * Ke, ye * Me - ie * Ke, -He * Me]
        ]
      }(Me), [oe, Re] = [ie * Ke, He * Ue], ke = Me[0] + oe * Fe[0] + Re * Je[0], qe = Me[1] + Re * Je[1], fe = Me[2] + oe * Fe[2] + Re * Je[2], Te = (ye - be[1]) / qe;
      return Te > 0 && Te < 1 / 0 ? [be[0] + Te * ke, be[2] + Te * fe] : null
    }
    const oH = "plotsBlueprintPlacementChanged",
      RH = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class kH {
      constructor(ee, ie) {
        this.api = ee, this.localPlayerId = ie, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = ee => {
          var ie, He, ye, Me;
          const Ke = null !== (ie = null === (He = this.placing) || void 0 === He ? void 0 : He.rotation) && void 0 !== ie ? ie : 0,
            {
              size: Ue
            } = Ne(ee, Ke),
            Fe = this.api.pE(this.localPlayerId),
            [Je, oe] = null !== (ye = null !== (Me = function(ee, ie, He, ye) {
              const [be, Me, Ke] = ie, [Ue, Fe, Je] = [Math.floor(He[0]), Math.floor(He[1]), Math.floor(He[2])], oe = 6 + Math.max(be, Ke) / 2, [Re, ke] = [Math.ceil(oe + be / 2), Math.ceil(oe + Ke / 2)], [qe, fe] = [Ue - Re, Je - ke], [Te, pe] = [2 * Re + 1, 2 * ke + 1], Xe = new Float64Array(Te * pe), ze = new Uint16Array(Te * pe);
              for (let de = 0; de < Te; de++)
                for (let ie = 0; ie < pe; ie++) {
                  const He = KH(ee, qe + de, fe + ie, Fe, Me);
                  Xe[de * pe + ie] = He, Number.isNaN(He) || (ze[de * pe + ie] = UH(ee, qe + de, fe + ie, He, Me))
                }
              const Be = Math.hypot(ye[0], ye[2]),
                Ee = [];
              let ge = null,
                Oe = 1 / 0;
              for (let de = 0; de + be <= Te; de++)
                for (let ee = 0; ee + Ke <= pe; ee++) {
                  const [ie, Me] = [qe + de, fe + ee], [Fe, Re] = [ie + be / 2 - He[0], Me + Ke / 2 - He[2]], ke = Math.hypot(Fe, Re);
                  if (ke > oe || Ue >= ie - 2 && Ue < ie + be + 2 && Je >= Me - 2 && Je < Me + Ke + 2) continue;
                  Ee.length = 0;
                  let Te = 0;
                  for (let He = 0; He < be; He++)
                    for (let ie = 0; ie < Ke; ie++) Ee.push(Xe[(de + He) * pe + ee + ie]), Te += ze[(de + He) * pe + ee + ie];
                  const We = FH(Ee);
                  if (null === We) continue;
                  const te = ke + 3 * (We + Te) + (1 - (0 === Be ? 1 : (Fe * ye[0] + Re * ye[2]) / (ke * Be))) / 2 * 6;
                  te < Oe && (Oe = te, ge = [ie, Me])
                }
              return ge
            }(this.api, Ue, Fe, this.camera.forward)) && void 0 !== Me ? Me : this.cornerOnTarget(Ue)) && void 0 !== ye ? ye : [Math.floor(Fe[0]) + 2, Math.floor(Fe[2])];
          this.placing = {
            id: ee,
            rotation: Ke,
            corner: [Je, this.playerLevel(), oe],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null,
            moved: !1,
            stillSinceMs: performance.now()
          }, this.update(), this.api.sendCommand(`${be} preview`)
        }, this.rotate = () => {
          const {
            id: ee,
            rotation: ie,
            corner: He
          } = this.placing, be = ye[(ye.indexOf(ie) + 1) % ye.length], [Me, , Ke] = Ne(ee, ie).size, [Ue, , Fe] = Ne(ee, be).size;
          this.moveTo(He[0] + Math.floor(Me / 2) - Math.floor(Ue / 2), He[2] + Math.floor(Ke / 2) - Math.floor(Fe / 2), be)
        }, this.hoverAt = (ee, ie) => {
          this.placing.hover = [ee, ie], this.moveCentreTo(this.camera, ee, ie)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (ee, ie) => {
          const He = this.placing,
            {
              eye: ye,
              forward: be,
              tanHalfFovX: Me,
              tanHalfFovY: Ke
            } = this.camera,
            Ue = {
              eye: [ye[0], ye[1], ye[2]],
              forward: [be[0], be[1], be[2]],
              tanHalfFovX: Me,
              tanHalfFovY: Ke
            },
            Fe = He.corner[1],
            Je = JH(Ue, ee, ie, Fe);
          He.hover = null, He.drag = Je && {
            view: Ue,
            ground: Je,
            corner: [He.corner[0], He.corner[2]],
            level: Fe
          }
        }, this.dragTo = (ee, ie) => {
          const He = this.placing.drag,
            ye = He && JH(He.view, ee, ie, He.level);
          null !== He && null !== ye && this.moveTo(He.corner[0] + Math.round(ye[0] - He.ground[0]), He.corner[1] + Math.round(ye[1] - He.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const ee = this.view;
          ee.waiting || (ee.blocked ? this.yR({
            ...ee,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const ee = this.placing,
            {
              id: ie,
              rotation: He,
              corner: ye
            } = ee;
          this.api.sendCommand(`${be} place ${ie} ${ye.join(" ")} ${He}`), ee.sent = {
            atMs: performance.now(),
            corner: [...ye],
            rotation: He,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${be} preview off`))
        }, this.chunkWatch = new Ii(ee), this.meshes = new HH(ee)
      }
      getView() {
        return this.view
      }
      YR() {
        const ee = this.placing;
        null !== ee && (null !== ee.sent && !ee.sent.timedOut && performance.now() - ee.sent.atMs > 3e3 ? (ee.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(ee) || this.chunkWatch.changed() || this.view.settled !== qH(ee, this.view.blocked)) && this.update())
      }
      afterRender(ee) {
        ! function(ee, ie) {
          for (let He = 0; He < 3; He++) ie.eye[He] = ee.cameraPosition[He], ie.forward[He] = ee.cameraDirection[He];
          ie.tanHalfFovX = ee.tanHalfFovX, ie.tanHalfFovY = ee.tanHalfFovY
        }(ee, this.camera);
        const ie = this.placing;
        null !== ie && null !== ie.hover && this.moveCentreTo(this.camera, ie.hover[0], ie.hover[1])
      }
      DR(ee) {
        const ie = this.placing;
        if (null === ie || null === ie.sent || "active" !== ee[0]) return;
        const {
          sent: He
        } = ie, [, ye, be, Me, Ke, Ue, Fe] = ee;
        be && ye === ie.id && Fe === He.rotation && Me === He.corner[0] && Ke === He.corner[1] && Ue === He.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(ee) {
        let [ie, , He] = ee;
        const ye = this.api.getTargetedBlock();
        if (null === ye) return null;
        const [be, , Me] = ye.position;
        return [be - Math.floor(ie / 2), Me - Math.floor(He / 2)]
      }
      playerLevel() {
        var ee;
        const [ie, He, ye] = this.api.pE(this.localPlayerId);
        if (null !== (ee = this.api.getLocalPlayerMovement()) && void 0 !== ee && ee.onGround) return Math.ceil(He - .01);
        const [be, Me, Ke] = [Math.floor(ie), Math.floor(He), Math.floor(ye)];
        for (let Ue = Me; Ue >= Me - 2; Ue--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(be, Ue, Ke))) return Ue + 1;
        return Me
      }
      followPlayerLevel(ee) {
        if (fH(ee)) return !1;
        const ie = this.playerLevel();
        return ie !== ee.corner[1] && (ee.corner[1] = ie, !0)
      }
      moveCentreTo(ee, ie, He) {
        const ye = this.placing,
          be = JH(ee, ie, He, ye.corner[1]);
        if (null !== be) {
          const [ee, , ie] = Ne(ye.id, ye.rotation).size;
          this.moveTo(Math.round(be[0] - ee / 2), Math.round(be[1] - ie / 2))
        }
      }
      moveTo(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const ye = this.placing;
        if (fH(ye)) return;
        const [be, Me, Ke] = ye.corner;
        if (this.centreOnPlot(be, Ke) && !this.centreOnPlot(ee, ie, He))
          if (this.centreOnPlot(ee, Ke, He)) ie = Ke;
          else {
            if (!this.centreOnPlot(be, ie, He)) return;
            ee = be
          } ee === be && ie === Ke && He === ye.rotation || (ye.rotation = He, ye.corner = [ee, Me, ie], ye.moved = !0, ye.stillSinceMs = performance.now(), this.update())
      }
      centreOnPlot(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: ye,
          corner: be
        } = this.placing, [Me, , Ke] = Ne(ye, He).size;
        return this.api.canModifyBlockAt(ee + Math.floor(Me / 2), be[1], ie + Math.floor(Ke / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.yR(null)
      }
      update() {
        const {
          id: ee,
          rotation: ie,
          corner: He,
          refusals: ye
        } = this.placing, be = new iH, Me = [];
        let Ke = !1,
          Ue = 0;
        for (const {
            offset: Re,
            block: ke
          }
          of Ne(ee, ie).cells) {
          const [ee, ie, ye] = [He[0] + Re[0], He[1] + Re[1], He[2] + Re[2]];
          Me.push(ee, ie, ye);
          const Fe = !this.api.canModifyBlockAt(ee, ie, ye),
            Je = this.api.getBlockId(ee, ie, ye),
            oe = !ci(Je) && !ai(this.api.blockNameToBlockId(ke), Je);
          Ke ||= Fe, Ue += oe ? 1 : 0, Fe || oe ? be.add(ee, ie, ye, eH, Qi) : be.add(ee, ie, ye, Li(ke), RH, ji(ke))
        }
        this.chunkWatch.watch(Me), this.meshes.show(be.toArray());
        const Fe = this.view,
          Je = fH(this.placing),
          oe = qH(this.placing, Ke);
        (null === Fe || void 0 === Fe ? void 0 : Fe.id) === ee && Fe.blocked === Ke && Fe.toClear === Ue && Fe.waiting === Je && Fe.refusals === ye && Fe.settled === oe || this.yR({
          id: ee,
          blocked: Ke,
          toClear: Ue,
          waiting: Je,
          refusals: ye,
          settled: oe
        })
      }
      yR(ee) {
        this.view = ee, de.h.yR(oH, ee, !0)
      }
    }

    function qH(ee, ie) {
      let {
        moved: He,
        stillSinceMs: ye
      } = ee;
      return !ie && performance.now() - ye >= (He ? 1500 : 6e3)
    }

    function fH(ee) {
      let {
        sent: ie
      } = ee;
      return null !== ie && !ie.timedOut
    }
    var TH = He(4937);
    class pH {
      constructor(ee) {
        this.placement = ee, this.press = null
      }
      down(ee) {
        if (null !== this.press) return !1;
        const {
          id: ie,
          mouse: He,
          x: ye,
          y: be,
          atMs: Me
        } = ee;
        return this.press = {
          id: ie,
          mouse: He,
          x: ye,
          y: be,
          atMs: Me,
          moved: !1
        }, He || this.placement.beginDrag(ee.ndcX, ee.ndcY), !0
      }
      move(ee) {
        const ie = this.press;
        null !== ie && ie.id === ee.id && (ie.moved ||= Math.hypot(ee.x - ie.x, ee.y - ie.y) > 8), ee.mouse ? this.placement.hoverAt(ee.ndcX, ee.ndcY) : (null === ie || void 0 === ie ? void 0 : ie.id) === ee.id && this.placement.dragTo(ee.ndcX, ee.ndcY)
      }
      up(ee) {
        const ie = this.press;
        (null === ie || void 0 === ie ? void 0 : ie.id) === ee.id && (this.move(ee), this.end(), !ie.moved && (ie.mouse || ee.atMs - ie.atMs <= 250) && this.placement.tap())
      }
      cancel(ee) {
        var ie;
        (null === (ie = this.press) || void 0 === ie ? void 0 : ie.id) === ee && this.end()
      }
      leave(ee) {
        let {
          id: ie,
          mouse: He
        } = ee;
        He && this.placement.endHover(), this.cancel(ie)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }
    const XH = "PlotsPlacementLayer";

    function zH(ee) {
      let {
        placement: ie
      } = ee;
      return null === (0, Fe.j)(oH, ie.getView()) ? null : (0, ce.jsx)(BH, {
        placement: ie
      })
    }

    function BH(ee) {
      let {
        placement: ie
      } = ee;
      (0, TH.e)(!0, !0, XH);
      const He = (0, Me.useMemo)((() => new pH(ie)), [ie]);
      return (0, ce.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: ee => {
          "mouse" === ee.pointerType && 0 !== ee.button || !He.down(EH(ee)) || ee.currentTarget.setPointerCapture(ee.pointerId)
        },
        onPointerMove: ee => {
          He.move(EH(ee))
        },
        onPointerUp: ee => {
          He.up(EH(ee))
        },
        onPointerCancel: ee => {
          He.cancel(ee.pointerId)
        },
        onLostPointerCapture: ee => {
          He.cancel(ee.pointerId)
        },
        onPointerLeave: ee => {
          He.leave(EH(ee))
        },
        "aria-hidden": !0
      })
    }

    function EH(ee) {
      const {
        left: ie,
        top: He,
        width: ye,
        height: be
      } = ee.currentTarget.getBoundingClientRect();
      return {
        id: ee.pointerId,
        mouse: "mouse" === ee.pointerType,
        x: ee.clientX,
        y: ee.clientY,
        ndcX: (ee.clientX - ie) / ye * 2 - 1,
        ndcY: 1 - (ee.clientY - He) / be * 2,
        atMs: ee.timeStamp
      }
    }

    function gH() {
      return (0, Xi.s)().some((ee => ee !== Xi.c && ee !== XH))
    }
    const OH = 2500;

    function dH(ee) {
      let {
        hud: ie,
        guide: He,
        tracker: ye,
        placement: be,
        children: Ke
      } = ee;
      const {
        t: Re
      } = (0, oe.v)(), {
        isTouchScreen: ke
      } = (0, Ue.m)(["isTouchScreen"]), qe = (0, Fe.j)(Hi, ie.getGuide()), fe = (0, Fe.j)(ii, ie.getPlot()), Te = (0, Fe.j)(Ge, ye.get()), pe = function(ee) {
        const {
          openInGameMenuName: ie,
          openEverythingMenuName: He,
          loadingOverlayVisible: ye
        } = (0, Ue.m)(["openInGameMenuName", "openEverythingMenuName", "loadingOverlayVisible"]), be = (0, zi.d)(), [Ke, Je] = (0, Me.useState)(gH);
        (0, Me.useEffect)((() => {
          const ee = () => {
            Je(gH())
          };
          ee();
          const ie = (0, Xi.q)(ee),
            He = (0, Xi.m)(ee);
          return () => {
            ie(), He()
          }
        }), []);
        const oe = (0, Fe.j)(oH, ee.getView()),
          Re = "clientGame" === ie;
        return {
          hudHidden: be || ye,
          journalOpen: Re,
          covered: Ke || null !== He || null !== ie && !Re,
          placing: null === oe ? null : oe.settled ? "placeBuild" : "placeSpot"
        }
      }(be), Xe = function(ee, ie, He) {
        return "none" === ee[0] || He.hudHidden || He.journalOpen || He.covered ? null : null !== He.placing ? He.placing : null !== ie ? "build" : "choose" === ee[1] ? "openJournal" : null
      }(qe, null === Te ? null : Te.id, pe), ze = function() {
        const [ee, ie] = (0, Me.useState)(null), [He, ye] = (0, Me.useState)(!1);
        return (0, Fe.f)(yi, (() => {
          ie(performance.now())
        })), (0, Me.useEffect)((() => {
          if (null === ee) return;
          const ie = window.setTimeout((() => {
              ye(!0)
            }), OH),
            He = window.setTimeout((() => {
              ye(!1)
            }), 7500);
          return () => {
            window.clearTimeout(ie), window.clearTimeout(He)
          }
        }), [ee]), He
      }() && !pe.hudHidden && !pe.covered && !pe.journalOpen && null === pe.placing, [Be, Ee] = (0, Me.useState)(!1);
      (0, Me.useEffect)((() => {
        pe.journalOpen && Ee(!0)
      }), [pe.journalOpen]);
      const [ge, de] = (0, Me.useState)(null), [We, te] = (0, Me.useState)(null), [Ze, we] = (0, Me.useState)(null), De = (0, Me.useMemo)((() => ({
        hint: Xe,
        journalRef: de,
        placementCardRef: te,
        buildRef: we
      })), [Xe]), Pe = "plot" === fe[0] && "own" === fe[5], Ae = ke && !Be && Pe ? {
        onSkip: He.skip
      } : null;
      return (0, ce.jsxs)(Oe.Provider, {
        value: De,
        children: [Ke, "openJournal" === Xe && null !== ge && (0, ce.jsx)(oi, {
          target: ge,
          placement: "left",
          spotlight: Ae,
          children: ke ? Re("plotsGame:guideOpenJournal") : Re("plotsGame:guideOpenJournalKeys", {
            key: (0, Je.k)(xe)
          })
        }), "placeSpot" === Xe && null !== We && (0, ce.jsxs)(ce.Fragment, {
          children: [ke && (0, ce.jsx)(Ti, {}), (0, ce.jsx)(oi, {
            target: We,
            placement: "top",
            children: Re(ke ? "plotsGame:guidePlaceSpotTouch" : "plotsGame:guidePlaceSpotMouse")
          })]
        }), "placeBuild" === Xe && null !== Ze && null !== We && (0, ce.jsx)(oi, {
          target: ke ? Ze : We,
          placement: "top",
          children: Re(ke ? "plotsGame:guidePlaceBuildTouch" : "plotsGame:guidePlaceBuildMouse")
        }), "build" === Xe && null !== Te && (0, ce.jsx)(qi, {
          progress: Te,
          guide: He
        }), ze && null !== ge && (0, ce.jsx)(oi, {
          target: ge,
          placement: "left",
          children: Re("plotsGame:guideMoreBuilds")
        })]
      })
    }
    var WH = He(39291),
      tH = He(39293);
    class ZH {
      constructor(ee, ie, He) {
        this.api = ee, this.localPlayerId = ie, this.nextCell = He, this.hand = null, this.skip = () => {
          this.api.sendCommand("plotsguide skip")
        }, this.bindHand = ee => {
          this.hand = ee
        }
      }
      afterRender(ee) {
        const ie = this.hand;
        if (null === ie) return;
        const He = this.nextCell.get();
        if (null === He) return void(0, WH.g)(ie, !0);
        const ye = (0, tH.b)(ie, ee, this.api.getPositionView(this.localPlayerId), He, 1, 40);
        null !== ye && (0, WH.c)(ie, Math.round(100 * ye.x) / 100, Math.round(100 * ye.y) / 100)
      }
    }
    var wH = He(1438),
      DH = He(4922),
      PH = He(1070);
    const AH = {
        farm_hut: He.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
        farm_house: He.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
        farm_barn: He.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
        rusticHome_tent: He.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
        rusticHome_cabin: He.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
        rusticHome_house: He.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
        market_stand: He.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
        market_stall: He.p + "static/media/market_stall.9a562807f9dff591618a.webp",
        market_shop: He.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
        castle_wall: He.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
        castle_gate: He.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
        castle_tower: He.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
      },
      YH = ["plotsGame:guideEffortQuick", "plotsGame:guideEffortMedium", "plotsGame:guideEffortBigger"],
      VH = ["market_stand", "rusticHome_tent", "farm_hut"].map((ee => ({
        id: ee,
        blocks: Ne(ee, 0).cells.length
      }))).sort(((ee, ie) => ee.blocks - ie.blocks)).map(((ee, ie) => ({
        ...ee,
        effortKey: YH[ie]
      })));

    function aH(ee) {
      let {
        onBuild: ie
      } = ee;
      const {
        t: He
      } = (0, oe.v)();
      return (0, ce.jsx)("div", {
        className: "PlotsJournalBookPages PlotsGuideChooserCover",
        children: (0, ce.jsxs)("div", {
          className: "PlotsGuideChooser",
          children: [(0, ce.jsx)("h3", {
            className: "PlotsGuideChooserTitle",
            children: He("plotsGame:guidePickTitle")
          }), (0, ce.jsxs)("p", {
            className: "PlotsGuideChooserNote",
            children: [(0, ce.jsx)("img", {
              src: Ki,
              alt: "",
              draggable: !1
            }), He("plotsGame:guidePickNote")]
          }), (0, ce.jsx)("div", {
            className: "PlotsGuideChooserStarters",
            children: VH.map((ee => {
              let {
                id: ye,
                blocks: be,
                effortKey: Me
              } = ee;
              return (0, ce.jsxs)("article", {
                className: "PlotsGuideStarter",
                children: [(0, ce.jsx)("button", {
                  type: "button",
                  className: "PlotsGuideStarterSketch",
                  tabIndex: -1,
                  "aria-hidden": !0,
                  "data-pad-ignore": !0,
                  onClick: () => {
                    ie(ye)
                  },
                  children: (0, ce.jsx)("img", {
                    src: AH[ye],
                    alt: "",
                    draggable: !1
                  })
                }), (0, ce.jsxs)("div", {
                  className: "PlotsGuideStarterInfo",
                  children: [(0, ce.jsxs)("span", {
                    className: "PlotsGuideStarterText",
                    children: [(0, ce.jsx)("span", {
                      className: "PlotsGuideStarterName",
                      children: He(we(ye).displayName.translationKey)
                    }), (0, ce.jsx)("span", {
                      className: "PlotsGuideStarterEffort",
                      children: He(Me)
                    }), (0, ce.jsx)("span", {
                      className: "PlotsGuideStarterBlocks",
                      children: He("plotsGame:journalBlocks", {
                        blocks: String(be)
                      })
                    })]
                  }), (0, ce.jsx)(wH.m, {
                    onClick: () => {
                      ie(ye)
                    },
                    children: He("plotsGame:placementBuild")
                  })]
                })]
              }, ye)
            }))
          })]
        })
      })
    }

    function cH(ee) {
      let {
        direction: ie,
        disabled: He,
        onTurn: ye
      } = ee;
      const {
        t: be
      } = (0, oe.v)();
      return (0, ce.jsx)("div", {
        className: ke()("PlotsJournalArrow", ie),
        children: (0, ce.jsx)(wH.c, {
          disabled: He,
          ariaLabel: be("Forward" === ie ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            ye(ie)
          },
          children: (0, ce.jsx)(pe.e, {
            name: "angle-up"
          })
        })
      })
    }
    const xH = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function LH(ee) {
      let {
        page: ie,
        building: He,
        onBuild: ye,
        onPutAway: be
      } = ee;
      const {
        t: Me
      } = (0, oe.v)(), {
        displayName: Ke,
        tier: Ue
      } = we(ie.id), Fe = Ne(ie.id, 0).cells.length, Je = "locked" === ie.state, Re = He ? wH.c : wH.m;
      return (0, ce.jsxs)("article", {
        className: ke()("PlotsJournalPage", {
          Locked: Je
        }),
        children: [(0, ce.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: Me(Ke.translationKey)
        }), (0, ce.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [Me(xH[Ue]), " \xb7 ", Me("plotsGame:journalBlocks", {
            blocks: String(Fe)
          })]
        }), (0, ce.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [Ze.map((ee => (0, ce.jsx)("img", {
            className: ke()({
              Shown: ee === ie.id
            }),
            src: AH[ee],
            alt: "",
            draggable: !1
          }, ee))), "completed" === ie.state && (0, ce.jsx)("span", {
            className: "PlotsJournalStamp",
            children: Me("plotsGame:journalBuilt")
          }), Je && (0, ce.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, ce.jsx)(pe.e, {
              name: "lock"
            })
          })]
        }), null !== ie.note && (0, ce.jsx)("p", {
          className: "PlotsJournalNote",
          children: Me(ie.note)
        }), (0, ce.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === ie.state && (0, ce.jsx)("p", {
            className: "PlotsJournalHint",
            children: Me("plotsGame:journalLocked", {
              name: Me(we(ie.unlockedBy).displayName.translationKey)
            })
          }), ie.active && (0, ce.jsxs)(ce.Fragment, {
            children: [(0, ce.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: Me("plotsGame:journalBuilding")
            }), (0, ce.jsx)(wH.e, {
              onClick: be,
              children: Me("plotsGame:journalPutAway")
            })]
          }), !Je && !ie.active && (0, ce.jsx)(Re, {
            onClick: () => {
              ye(ie.id)
            },
            children: Me("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function CH(ee) {
      let {
        className: ie,
        page: He,
        hidden: ye,
        building: be,
        journal: Me
      } = ee;
      return (0, ce.jsxs)("div", {
        ref: ee => {
          null !== ee && (ee.inert = ye)
        },
        className: ke()("PlotsJournalSide", ie),
        children: [void 0 !== He && (0, ce.jsx)(LH, {
          page: He,
          building: be,
          onBuild: Me.build,
          onPutAway: Me.putAway
        }), void 0 === He && (0, ce.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var vH = He(1952);

    function uH(ee) {
      return Math.cos((0, vH.f)(ee))
    }

    function mH(ee) {
      return (0, vH.B)(Math.acos(Wi.c.clamp(ee, -1, 1)))
    }

    function lH(ee, ie, He, ye, be) {
      const Me = Math.abs(ie - ee),
        Ke = (0, vH.B)(be / (He * Math.abs(Math.sin((0, vH.f)(ee))))),
        Ue = 450 * Math.min(1, Me / ye),
        Fe = Ke > 0 ? 3 * Me / Ke : 1 / 0;
      return Math.round(Math.max(120, Math.min(Ue, Fe)))
    }
    class SH {
      constructor() {
        this.samples = []
      }
      add(ee, ie) {
        for (this.samples.push({
            x: ee,
            at: ie
          }); ie - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const ee = this.samples[0],
          ie = this.samples[this.samples.length - 1];
        return ie.at > ee.at ? (ie.x - ee.x) / (ie.at - ee.at) : 0
      }
    }

    function nH(ee) {
      return mH(new DOMMatrixReadOnly(getComputedStyle(ee).transform).m11)
    }

    function jH(ee, ie) {
      ee.style.transform = `rotateY(${-ie}deg)`, ee.classList.add("Turning")
    }

    function sH(ee, ie, He) {
      const [ye, be] = (0, Me.useState)(He), Ke = (0, Me.useRef)(null), Ue = (0, Me.useRef)(null), Fe = (0, Me.useRef)({
        Forward: null,
        Back: null
      }), Je = ie ? 2 : 1, oe = ie ? 180 : 90, Re = ye - ye % Je, ke = Re > 0, qe = Re + Je < ee, fe = (0, Me.useCallback)((() => {
        const ee = Ue.current;
        return null === ee ? Re : (Ue.current = null, ee.animation.cancel(), (ie = Fe.current[ee.direction]).style.transform = "", ie.classList.remove("Turning"), null === ee.next ? Re : (be(ee.next), ee.next));
        var ie
      }), [Re]), Te = (0, Me.useCallback)(((ee, ie, He, ye) => {
        const be = Fe.current[ee],
          Me = nH(be),
          Ke = ie === ("Forward" === ee) ? oe : 0;
        jH(be, Ke);
        const Re = be.animate([{
          transform: `rotateY(${-Me}deg)`
        }, {
          transform: `rotateY(${-Ke}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : lH(Me, Ke, be.offsetWidth, oe, Ke > Me ? -He : He),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        Ue.current = {
          direction: ee,
          animation: Re,
          next: ie ? ye + ("Forward" === ee ? Je : -Je) : null
        }, Re.onfinish = () => {
          var ee;
          (null === (ee = Ue.current) || void 0 === ee ? void 0 : ee.animation) === Re && fe()
        }
      }), [Je, oe, fe]), pe = (0, Me.useCallback)((ie => {
        if (null !== Ke.current) return;
        const He = fe();
        ("Forward" === ie ? He + Je < ee : He > 0) && Te(ie, !0, 0, He)
      }), [fe, Te, Je, ee]);
      (0, Me.useEffect)((() => () => {
        var ee;
        null === (ee = Ue.current) || void 0 === ee || ee.animation.cancel()
      }), []), (0, Me.useEffect)((() => {
        const ee = ee => {
          var ie;
          ee.pointerId !== (null === (ie = Ke.current) || void 0 === ie ? void 0 : ie.pointerId) || Ke.current.following || (Ke.current = null)
        };
        return window.addEventListener("pointerup", ee), () => {
          window.removeEventListener("pointerup", ee)
        }
      }), []);
      const Xe = (ee, ie, He) => {
          const ye = function(ee, ie, He, ye) {
            return (ee < 0 ? He : ye) ? Wi.c.clampAbs(ee, ie) : Math.sign(ee) * ie * (1 - 1 / (.55 * Math.abs(ee) / ie + 1))
          }(ee.base + He, Je * ee.width, qe, ke);
          return "Forward" === ie ? Math.min(ye, 0) : Math.max(ye, 0)
        },
        ze = (ee, ie) => {
          const He = Ke.current;
          if (Ke.current = null, null === He.direction) return;
          He.speed.add(ee, ie);
          const ye = He.speed.get(),
            be = Xe(He, He.direction, ee - He.x);
          Te(He.direction, null !== function(ee, ie, He, ye, be) {
            if (Math.abs(ie) >= .3 ? Math.sign(ie) !== Math.sign(ee) : Math.abs(ee) < .5 * He) return null;
            const Me = ee < 0 ? "Forward" : "Back";
            return ("Forward" === Me ? ye : be) ? Me : null
          }(be, ye, Je * He.width, qe, ke), ye, Re)
        },
        Be = {
          onPointerDown: ee => {
            var ie;
            if (!ee.isPrimary || 0 !== ee.button || null !== Ue.current && null !== ee.target.closest("button")) return;
            const He = new SH;
            He.add(ee.clientX, ee.timeStamp);
            const ye = Fe.current.Forward.offsetWidth,
              be = Ue.current;
            Ue.current = null;
            let Me = 0;
            if (null !== be) {
              const ie = Fe.current[be.direction],
                He = nH(ie);
              be.animation.cancel(), jH(ie, He), Me = function(ee, ie, He, ye) {
                return (ee < 0 ? He : ye) ? ee : Math.sign(ee) * ie * (1 / (1 - Math.min(Math.abs(ee) / ie, .99)) - 1) / .55
              }(function(ee, ie, He, ye) {
                return He * (uH(ie) - uH("Forward" === ee ? 0 : ye))
              }(be.direction, He, ye, oe), Je * ye, qe, ke), ee.currentTarget.setPointerCapture(ee.pointerId)
            }
            Ke.current = {
              pointerId: ee.pointerId,
              x: ee.clientX,
              y: ee.clientY,
              base: Me,
              width: ye,
              following: null !== be,
              direction: null !== (ie = null === be || void 0 === be ? void 0 : be.direction) && void 0 !== ie ? ie : null,
              speed: He
            }
          },
          onPointerMove: ee => {
            const ie = Ke.current;
            if (null === ie || ee.pointerId !== ie.pointerId) return;
            if (0 === ee.buttons) return void ze(ee.clientX, ee.timeStamp);
            const He = ee.clientX - ie.x;
            !ie.following && function(ee, ie) {
              return Math.abs(ee) > 8 && Math.abs(ee) > Math.abs(ie)
            }(He, ee.clientY - ie.y) && (ie.following = !0, ie.direction = He < 0 ? "Forward" : "Back", ee.currentTarget.setPointerCapture(ee.pointerId)), null !== ie.direction && (ie.speed.add(ee.clientX, ee.timeStamp), jH(Fe.current[ie.direction], function(ee, ie, He, ye) {
              const be = He * uH("Forward" === ee ? 0 : ye) + ie;
              return Wi.c.clamp(mH(be / He), 0, ye)
            }(ie.direction, Xe(ie, ie.direction, He), ie.width, oe)))
          },
          onPointerUp: ee => {
            var ie;
            ee.pointerId === (null === (ie = Ke.current) || void 0 === ie ? void 0 : ie.pointerId) && ze(ee.clientX, ee.timeStamp)
          },
          onPointerCancel: ee => {
            const ie = Ke.current;
            ee.pointerId === (null === ie || void 0 === ie ? void 0 : ie.pointerId) && (Ke.current = null, null !== ie.direction && Te(ie.direction, !1, 0, Re))
          }
        };
      return {
        first: Re,
        step: Je,
        canGoBack: ke,
        canGoForward: qe,
        turnPage: pe,
        leaves: Fe,
        pagesHandlers: Be
      }
    }

    function IH(ee, ie) {
      return ee > ie && ee >= 600
    }

    function hH(ee) {
      let {
        journal: ie,
        hud: He,
        guide: ye
      } = ee;
      const {
        t: be
      } = (0, oe.v)(), Ue = (0, Fe.j)(Ve, ie.getPages()), Je = (0, Fe.j)(Hi, He.getGuide()), Re = Ue.find((ee => ee.active)), qe = (fe = Je, Te = void 0 === Re ? null : Re.id, "active" === fe[0] && null === Te);
      var fe, Te;
      const pe = (0, PH.k)(IH),
        {
          first: Xe,
          step: ze,
          canGoBack: ge,
          canGoForward: Oe,
          turnPage: de,
          leaves: We,
          pagesHandlers: te
        } = sH(Ue.length, pe, (() => function(ee) {
          const ie = ee.findIndex((ee => ee.active));
          return -1 !== ie ? ie : Math.max(0, ee.findIndex((ee => "open" === ee.state)))
        }(Ue)));
      (0, Me.useEffect)((() => {
        ie.onOpened()
      }), [ie]), (0, Be.e)((ee => !qe && ("ArrowLeft" === ee.code || "ArrowRight" === ee.code) && !(0, Ee.isTypingInInput)()), (ee => {
        ee.stopPropagation(), de("ArrowLeft" === ee.code ? "Back" : "Forward")
      }));
      const Ze = void 0 !== Re,
        we = (ee, He, ye) => (0, ce.jsx)(CH, {
          className: ee,
          page: He >= 0 && He < Ue.length ? Ue[He] : void 0,
          hidden: ye,
          building: Ze,
          journal: ie
        });
      return (0, ce.jsx)(DH.e, {
        close: Ke.l,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, ce.jsxs)("section", {
          className: ke()("PlotsJournal", {
            Spread: pe
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": be("plotsGame:journalTitle"),
          children: [(0, ce.jsx)(wH.i, {
            className: "PlotsJournalClose",
            onClick: Ke.l
          }), "active" === Je[0] && (0, ce.jsx)(Ji, {
            className: "PlotsJournalGuideSkip",
            onSkip: ye.skip
          }), qe && (0, ce.jsx)(aH, {
            onBuild: ie.build
          }), !qe && (0, ce.jsx)(cH, {
            direction: "Back",
            disabled: !ge,
            onTurn: de
          }), (0, ce.jsx)("div", {
            hidden: qe,
            className: "PlotsJournalBookPages",
            ...te,
            children: (0, ce.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [pe && we("Left", Xe - 2, !0), we("Right", Xe + 2 * ze - 1, !0), (0, ce.jsxs)("div", {
                ref: ee => {
                  We.current.Back = ee
                },
                className: "PlotsJournalLeaf Back",
                children: [we("Recto", Xe - 1, !0), pe && we("Verso", Xe, !1)]
              }), (0, ce.jsxs)("div", {
                ref: ee => {
                  We.current.Forward = ee
                },
                className: "PlotsJournalLeaf Forward",
                children: [we("Recto", Xe + ze - 1, !1), pe && we("Verso", Xe + ze, !0)]
              })]
            })
          }), !qe && (0, ce.jsx)(cH, {
            direction: "Forward",
            disabled: !Oe,
            onTurn: de
          })]
        })
      })
    }

    function NH(ee, ie, He, ye, be) {
      const Me = Math.hypot(...ie.dir);
      if (!Number.isFinite(Me) || 0 === Me) return -1;
      const {
        from: Ke,
        reach: Ue,
        solid: Fe
      } = ie, Je = [ie.dir[0] / Me, ie.dir[1] / Me, ie.dir[2] / Me], oe = null === Fe ? Ue : Math.min(Ue, function(ee, ie, He) {
        const ye = GH(ee, ie, He);
        if (ye !== 1 / 0) return ye;
        return (He[0] + .5 - ee[0]) * ie[0] + (He[1] + .5 - ee[1]) * ie[1] + (He[2] + .5 - ee[2]) * ie[2]
      }(Ke, Je, Fe) + .75);
      let Re = -1,
        ke = 1 / 0,
        qe = 1 / 0;
      for (let fe = 0; fe < ee.length; fe += 4) {
        const ie = [ee[fe], ee[fe + 1], ee[fe + 2]],
          Me = be(fe) ? Ue : oe;
        let Fe = -1,
          Te = GH(Ke, Je, ie);
        if (Te > Me) {
          const ee = [ie[0] + .5 - Ke[0], ie[1] + .5 - Ke[1], ie[2] + .5 - Ke[2]];
          if (Te = ee[0] * Je[0] + ee[1] * Je[1] + ee[2] * Je[2], Te <= 0 || Te > Me) continue;
          if (Fe = Math.hypot(ee[0] - Te * Je[0], ee[1] - Te * Je[1], ee[2] - Te * Je[2]), Fe > .7 || !ye(fe)) continue
        }(Fe < ke || Fe === ke && Te < qe) && He(fe) && (Re = fe, ke = Fe, qe = Te)
      }
      return Re
    }

    function GH(ee, ie, He) {
      let ye = 0,
        be = 1 / 0;
      for (let Me = 0; Me < 3; Me++) {
        const Ke = He[Me] - ee[Me];
        if (0 === ie[Me]) {
          if (Ke > 0 || Ke + 1 < 0) return 1 / 0;
          continue
        }
        const Ue = Ke / ie[Me],
          Fe = (Ke + 1) / ie[Me];
        ye = Math.max(ye, Math.min(Ue, Fe)), be = Math.min(be, Math.max(Ue, Fe))
      }
      return ye <= be ? ye : 1 / 0
    }
    var rH = He(37731),
      QH = He(38891);
    const ey = [1, 1, 1];
    class iy {
      constructor(ee) {
        this.api = ee, this.meshes = null, this.shown = null
      }
      show(ee) {
        if (!(0, rH.g)(ee, this.shown))
          if (this.shown = null === ee ? null : [ee[0], ee[1], ee[2]], null !== this.meshes)
            for (const ie of this.meshes) this.api.setGameMesh(ie, null === ee ? {
              visible: !1
            } : {
              anchor: ee,
              visible: !0
            });
          else if (null !== ee) {
          const ie = [QH.e, QH.e, QH.e, 0, 0, 0];
          this.meshes = [this.build([ie], QH.i, ee), this.build((0, QH.b)(), QH.n, ee)]
        }
      }
      dispose() {
        for (const ie of null !== (ee = this.meshes) && void 0 !== ee ? ee : []) {
          var ee;
          this.api.disposeGameMesh(ie)
        }
        this.meshes = null, this.shown = null
      }
      build(ee, ie, He) {
        const ye = [],
          be = [];
        for (const [Me, Ke, Ue, Fe, Je, oe] of ee)(0, Ni.h)(ye, be, [Fe + .5, Je + .5, oe + .5], [Me, Ke, Ue]);
        return this.api.createGameMesh({
          positions: ye,
          indices: be
        }, {
          rgb: ey,
          alpha: ie,
          onTop: !0
        }, He)
      }
    }

    function Hy(ee, ie) {
      const He = si.g.KX / 2;
      return ee[0] < ie[0] + He && ee[0] + 1 > ie[0] - He && ee[1] < ie[1] + si.g.UX && ee[1] + 1 > ie[1] && ee[2] < ie[2] + He && ee[2] + 1 > ie[2] - He
    }

    function yy(ee, ie) {
      return ee.getClientOption(ie, "blockReach") + 1
    }
    class by {
      constructor(ee, ie, He) {
        this.api = ee, this.localPlayerId = ie, this.foreseen = He, this.cells = [], this.playerCells = [], this.next = null
      }
      get() {
        return this.next
      }
      setCells(ee) {
        this.cells = ee
      }
      playerMoved() {
        return My(this.api.getPositionView(this.localPlayerId)).some(((ee, ie) => ee !== this.playerCells[ie]))
      }
      tq(ee) {
        const ie = this.api.getPositionView(this.localPlayerId);
        return this.playerCells.splice(0, 1 / 0, ...My(ie)), this.next = this.pickFrom(null === ee ? [ie[0], ie[1] + 1, ie[2]] : (0, rH.e)(ee), (() => !1)), this.next
      }
      pickFrom(ee, ie) {
        const He = this.api.getPositionView(this.localPlayerId),
          ye = [He[0], He[1] + si.g.UX * si.g.playerEyeToHeightRatio, He[2]],
          be = yy(this.api, this.localPlayerId),
          {
            cells: Me
          } = this,
          Ke = ee => [Me[ee], Me[ee + 1], Me[ee + 2]],
          Ue = function(ee, ie, He, ye, be, Me) {
            let Ke = -1,
              Ue = -1,
              Fe = 1 / 0;
            for (let Je = 0; Je < ee.length; Je += ie) {
              const ie = (Me(Je) ? 2 : 0) + (ye(Je) ? 1 : 0);
              if (ie < Ue || be(Je)) continue;
              const oe = (ee[Je] + .5 - He[0]) ** 2 + (ee[Je + 1] + .5 - He[1]) ** 2 + (ee[Je + 2] + .5 - He[2]) ** 2;
              (ie > Ue || oe < Fe) && (Ke = Je, Ue = ie, Fe = oe)
            }
            return Ke
          }(Me, 4, ee, (ee => 1 === Me[ee + 3]), (ee => {
            const ye = Ke(ee);
            return Hy(ye, He) || this.foreseen.has(ye.join()) || ie(ye)
          }), (ee => function(ee, ie, He) {
            return (ie[0] + .5 - ee[0]) ** 2 + (ie[1] + .5 - ee[1]) ** 2 + (ie[2] + .5 - ee[2]) ** 2 <= He ** 2
          }(ye, Ke(ee), be)));
        return -1 === Ue ? null : Ke(Ue)
      }
    }

    function My(ee) {
      let [ie, He, ye] = ee;
      const be = si.g.KX / 2;
      return [Math.floor(ie), Math.floor(He), Math.floor(ye), Math.floor(ie - be), Math.floor(ie + be), Math.floor(He + si.g.UX), Math.floor(ye - be), Math.floor(ye + be)]
    }
    class Ky {
      constructor(ee, ie, He) {
        this.api = ee, this.localPlayerId = ie, this.pickNext = He, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(ee) {
        const [ie, , He] = ee.cameraDirection, ye = Math.hypot(ie, He);
        ye > .001 && (this.heading = [ie / ye, He / ye])
      }
      tapped(ee, ie, He) {
        const ye = yy(this.api, this.localPlayerId),
          {
            origin: be,
            direction: Me
          } = this.api.getActionRay(),
          Ke = [...be],
          Ue = [
            [Ke, [Ke[0] + Me[0] * ye, Ke[1] + Me[1] * ye, Ke[2] + Me[2] * ye]]
          ];
        null !== ee && Ue.push([Ke, (0, rH.e)(ee)]), this.tap = {
          lines: Ue,
          next: ie,
          ms: He
        }
      }
      filled(ee, ie) {
        this.tap = null, this.turnFrom(ee, ie), this.retry(ie)
      }
      arrived(ee, ie) {
        const {
          tap: He
        } = this;
        if (null === He || ie - He.ms > 1500) return null;
        const ye = (0, rH.e)(ee);
        return (0, rH.g)(He.next, ee) || He.lines.some((ee => {
          let [ie, He] = ee;
          return function(ee, ie, He) {
            const ye = [He[0] - ie[0], He[1] - ie[1], He[2] - ie[2]],
              be = [ee[0] - ie[0], ee[1] - ie[1], ee[2] - ie[2]],
              Me = ye[0] ** 2 + ye[1] ** 2 + ye[2] ** 2,
              Ke = 0 === Me ? 0 : Math.min(1, Math.max(0, (be[0] * ye[0] + be[1] * ye[1] + be[2] * ye[2]) / Me));
            return Math.hypot(be[0] - ye[0] * Ke, be[1] - ye[1] * Ke, be[2] - ye[2] * Ke)
          }(ye, ie, He) <= .9
        })) ? (this.tap = null, this.turnFrom(ee, ie), He.ms) : null
      }
      turnFrom(ee, ie) {
        this.pending = {
          from: ee,
          ms: ie,
          turnMs: Math.max(50, Math.min(250, ie - this.lastFillMs))
        }, this.lastFillMs = ie
      }
      retry(ee) {
        const {
          pending: ie
        } = this;
        if (null === ie) return;
        if (ee - ie.ms > 1500) return void(this.pending = null);
        const He = this.pickNext((0, rH.e)(ie.from), (ee => (0, rH.g)(ee, ie.from)));
        if (null === He) return;
        this.pending = null;
        const {
          turning: ye
        } = this;
        if (null !== ye && ee < ye.endMs && (0, rH.g)(ye.to, He)) return;
        const be = this.api.getActionRay().origin,
          Me = [He[0] + .5 - be[0], He[1] + .5 - be[1], He[2] + .5 - be[2]],
          Ke = Math.hypot(Me[0], Me[2]);
        if (Ke < .3) {
          const ee = Math.max(Ke, .001);
          Me[0] = this.heading[0] * ee, Me[2] = this.heading[1] * ee
        }
        this.api.turnCamera(Me, ie.turnMs), this.turning = {
          to: He,
          endMs: ee + ie.turnMs
        }
      }
    }
    class Uy {
      constructor(ee, ie, He, ye) {
        this.api = ee, this.localPlayerId = ie, this.juice = He, this.tracker = ye, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.lastFilled = null, this.lastSeenFilled = null, this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = void 0, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new Ii(ee), this.meshes = new HH(ee), this.outline = new iy(ee), this.nextCell = new by(ee, ie, this.foreseen), this.turn = new Ky(ee, ie, ((ee, ie) => this.nextCell.pickFrom(ee, ie)))
      }
      DR(ee) {
        const ie = "active" === ee[0] ? `${ee[1]}|${ee[3]}|${ee[4]}|${ee[5]}|${ee[6]}` : "";
        if ("active" !== ee[0]) "built" === ee[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , He, ye, be, Me] = ee;
          ie !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = He) : He === this.layerY ? this.burstUnlisted(ye) : He > this.layerY && this.finishLayer(He), this.layerY = He, this.layerCells.has(He) || this.layerCells.set(He, ye.filter(Fy)), this.ghostCells = ye, this.palette = be, this.occupiedCells = Me
        }
        ie !== this.blueprint && (this.tracker.show("active" === ee[0] && ee[2] ? {
          id: ee[1],
          y: ee[4]
        } : null), this.blueprint = ie, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((ee => this.api.blockNameToBlockId(ee))), this.chunkWatch.watch([...this.ghostCells.filter(Fy), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(ee) {
        this.burstUnlisted([]), ee > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = ee)
      }
      YR() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const ee = performance.now();
        let ie = !1;
        for (const [ye, be] of this.foreseen) {
          var He;
          if (ee - be > 1e3) this.foreseen.delete(ye), ie = !0, (null === (He = this.lastFilled) || void 0 === He ? void 0 : He.join()) === ye && (this.lastFilled = this.lastSeenFilled)
        }(ie || this.nextCell.playerMoved()) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(ee) {
        const ie = new Set;
        for (let be = 0; be < ee.length; be += 4) ie.add(`${ee[be]},${ee[be+1]},${ee[be+2]}`);
        const He = [],
          {
            ghostCells: ye
          } = this;
        for (let be = 0; be < ye.length; be += 4) {
          const ee = `${ye[be]},${ye[be+1]},${ye[be+2]}`;
          !ie.has(ee) && this.open.delete(ee) && He.push(this.filledCell(be))
        }
        this.burst(He)
      }
      refresh() {
        const {
          ghostCells: ee,
          palette: ie,
          occupiedCells: He
        } = this, ye = new iH, be = new Set, Me = [], Ke = [];
        let Ue = 0;
        for (let Fe = 0; Fe < ee.length; Fe += 4) {
          const [He, Je, oe, Re] = [ee[Fe], ee[Fe + 1], ee[Fe + 2], ee[Fe + 3]], ke = this.api.getBlockId(He, Je, oe), qe = `${He},${Je},${oe}`, fe = ai(this.blockIds[Re], ke);
          !fe && ci(ke) ? ye.add(He, Je, oe, Li(ie[Re]), ri, ji(ie[Re])) : fe ? this.open.has(qe) && Me.push(this.filledCell(Fe)) : ye.add(He, Je, oe, eH, Qi), fe || Ue++, !fe && this.api.isBlockInLoadedChunk(He, Je, oe) && (be.add(qe), Ke.push(He, Je, oe, ci(ke) ? 0 : 1))
        }
        this.open = be, this.nextCell.setCells(Ke), this.tracker.update(this.layerY, this.topLayerY, Ue);
        for (let Fe = 0; Fe < He.length; Fe += 3) {
          const [ee, ie, be] = [He[Fe], He[Fe + 1], He[Fe + 2]];
          ci(this.api.getBlockId(ee, ie, be)) || ye.add(ee, ie, be, eH, Qi)
        }
        this.meshes.show(ye.toArray()), this.burst(Me), this.showNext(), this.turn.retry(performance.now())
      }
      burst(ee) {
        const ie = performance.now(),
          He = [];
        for (const [be, Me, Ke] of ee) {
          const ee = [be, Me, Ke];
          this.lastSeenFilled = ee, this.foreseen.delete(ee.join()) || He.push(ee)
        }
        const ye = this.isHolding(ie);
        for (const be of He) {
          if (this.lastFilled = be, ye && this.pressFilled) {
            this.turn.filled(be, ie);
            continue
          }
          const ee = this.turn.arrived(be, ie);
          if (null !== ee) {
            this.pressFilled = ye;
            for (const [ie, He] of this.foreseen) He <= ee && this.foreseen.delete(ie)
          }
        }
        this.juice.filled(ee)
      }
      showNext() {
        var ee;
        this.outline.show(null !== (ee = this.aimed) && void 0 !== ee ? ee : this.nextCell.tq(this.lastFilled))
      }
      afterRender(ee) {
        var ie;
        this.turn.look(ee);
        const He = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === He ? null : He.position), this.outline.show(null !== (ie = this.aimed) && void 0 !== ie ? ie : this.nextCell.get())
      }
      isHolding(ee) {
        return null !== this.altMs && ee - this.altMs <= 500
      }
      attemptAltAction(ee) {
        const ie = performance.now();
        if (this.isHolding(ie) || (this.pressFilled = !1), this.altMs = ie, this.pressFilled) return "preventPlacement";
        const He = this.findAimed(ee);
        if (null !== He) return this.foreseen.set(He.join(), ie), this.lastFilled = He, this.aimed = null, this.showNext(), this.turn.filled(He, ie), this.pressFilled = !0, "preventPlacement";
        {
          const He = this.nextCell.get();
          null !== He && this.turn.tapped(ee, He, ie)
        }
      }
      holdPressOnEntity() {
        const ee = performance.now();
        this.pressFilled && this.isHolding(ee) && (this.altMs = ee)
      }
      findAimed(ee) {
        return function(ee, ie, He, ye, be, Me, Ke) {
          const Ue = ee.Vye(ie),
            Fe = null === Ue || null === ee.blockNameToBlockId(Ue.name, !0) ? null : Ue.name,
            Je = ee.getPositionView(ie),
            {
              origin: oe,
              direction: Re
            } = ee.getActionRay(),
            ke = NH(ye, {
              from: oe,
              dir: Re,
              reach: yy(ee, ie),
              solid: He
            }, (ie => {
              const He = [ye[ie], ye[ie + 1], ye[ie + 2]];
              return !ai(be[ye[ie + 3]], ee.getBlockId(...He)) && !Ke.has(He.join()) && ee.isBlockInLoadedChunk(...He) && !Hy(He, Je)
            }), (ee => null === Fe || Fe === xi(be[ye[ee + 3]])), (ee => null !== Me && ye[ee] === Me[0] && ye[ee + 1] === Me[1] && ye[ee + 2] === Me[2]));
          return -1 === ke ? null : [ye[ke], ye[ke + 1], ye[ke + 2]]
        }(this.api, this.localPlayerId, ee, this.ghostCells, this.blockIds, this.nextCell.get(), this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(ee) {
        const {
          ghostCells: ie
        } = this, [He, ye, be] = Li(this.palette[ie[ee + 3]]);
        return [ie[ee], ie[ee + 1], ie[ee + 2], He, ye, be]
      }
    }

    function Fy(ee, ie) {
      return ie % 4 !== 3
    }
    class Jy {
      constructor(ee) {
        this.api = ee, this.sent = !1
      }
      YR() {
        this.sent || Ue.e.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
      }
    }
    var oy = He(4598),
      Ry = He(39965);

    function ky(ee, ie, He) {
      const ye = [255 * ee, 255 * ie, 255 * He],
        [be, Me, Ke] = ye.map((ee => ee + .4 * (255 - ee)));
      return {
        texture: "square_particle",
        bk: 48,
        minLifeTime: .3 / Ry.c,
        maxLifeTime: .55 / Ry.c,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * Ry.c * Ry.c, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...ye, 1],
          maxColor: [be, Me, Ke, 1]
        }, {
          timeFraction: 1,
          minColor: [...ye, 0],
          maxColor: [be, Me, Ke, 0]
        }],
        blendMode: oy.e.Standard
      }
    }
    const qy = {
      texture: "glint",
      mipmaps: !1,
      bk: 96,
      minLifeTime: .5 / Ry.c,
      maxLifeTime: .9 / Ry.c,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * Ry.c * Ry.c, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: oy.e.OneOne
    };
    class fy {
      constructor(ee, ie) {
        this.api = ee, this.localPlayerId = ie, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(ee) {
        if (this.api.particlesEnabled())
          for (const [ie, He, ye, be, Me, Ke] of ee.slice(0, 3)) {
            const ee = `${be},${Me},${Ke}`;
            let Ue = this.chips.get(ee);
            void 0 === Ue && (Ue = this.api.createParticles(ky(be, Me, Ke), {
              pos: [ie + .5, He + .5, ye + .5]
            }), this.chips.set(ee, Ue));
            for (let ie = 0; ie < 8; ie++) this.setPoint(ie, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            Ue.emitPoints([ie + .5, He + .5, ye + .5], this.points, 8)
          }
      }
      layerDone(ee) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const ie = ee.length / 3;
        if (0 === ie || !this.api.particlesEnabled()) return;
        const He = Math.min(ie, 48),
          [ye, be, Me] = [ee[0] + .5, ee[1] + 1, ee[2] + .5];
        let Ke = 0;
        for (let Ue = 0; Ue < He; Ue++) {
          const Fe = 3 * Math.floor(Ue * ie / He);
          for (let ie = 0; ie < 2; ie++) this.setPoint(Ke++, ee[Fe] + Math.random() - ye, ee[Fe + 1] + 1 - be, ee[Fe + 2] + Math.random() - Me, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(qy, {
          pos: [ye, be, Me]
        }), this.sparkles.emitPoints([ye, be, Me], this.points, Ke)
      }
      dispose() {
        var ee;
        for (const ie of this.chips.values()) ie.stop();
        this.chips.clear(), null === (ee = this.sparkles) || void 0 === ee || ee.stop(), this.sparkles = null
      }
      setPoint(ee, ie, He, ye, be) {
        const Me = 4 * ee;
        this.points[Me] = ie, this.points[Me + 1] = He, this.points[Me + 2] = ye, this.points[Me + 3] = be
      }
    }
    const Ty = "SpecialAction1",
      py = "KeyY",
      Xy = "KeyX";

    function zy(ee) {
      let {
        placement: ie
      } = ee;
      const He = (0, Fe.j)(oH, ie.getView()),
        {
          t: ye
        } = (0, oe.v)(),
        {
          isTouchScreen: be
        } = (0, Ue.m)(["isTouchScreen"]),
        Ke = (0, Me.useContext)(Oe),
        Re = null !== He,
        fe = Re && !He.blocked && !He.waiting;
      if ((0, Be.e)((ee => Re && !ee.repeat && !(0, Ee.isTypingInInput)() && !(0, qe.o)() && !be), (ee => {
          const He = function(ee, ie, He) {
            if (ee === Xy) return ie.stop;
            if (ee === py) return He ? ie.build : Ey;
            return Je.q[Ty].includes(ee) ? ie.rotate : null
          }(ee.code, ie, fe);
          null !== He && (ee.stopPropagation(), He())
        })), !Re) return null;
      let pe = be ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return He.blocked ? pe = "plotsGame:placementOffPlot" : He.toClear > 0 ? pe = "plotsGame:placementClear" : "placeSpot" !== Ke.hint && "placeBuild" !== Ke.hint || (pe = null), (0, ce.jsx)(Te.d, {
        placement: "bottom",
        children: (0, ce.jsxs)("div", {
          ref: Ke.placementCardRef,
          className: "PlotsPlacementCard",
          children: [(0, ce.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: ye(we(He.id).displayName.translationKey)
          }), null !== pe && (0, ce.jsx)("div", {
            className: ke()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: He.refusals > 0
            }),
            children: ye(pe)
          }, He.refusals), (0, ce.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, ce.jsxs)(wH.c, {
              onClick: ie.rotate,
              children: [(0, ce.jsx)(By, {
                noaAction: Ty
              }), ye("plotsGame:placementRotate")]
            }), (0, ce.jsxs)(wH.G, {
              onClick: ie.stop,
              children: [(0, ce.jsx)(By, {
                keyCode: Xy
              }), ye("general:cancel")]
            }), (0, ce.jsx)("span", {
              ref: Ke.buildRef,
              className: ke()("PlotsPlacementBuild", {
                Pulse: "placeBuild" === Ke.hint && fe && be
              }),
              children: (0, ce.jsxs)(wH.m, {
                disabled: !fe,
                onClick: ie.build,
                children: [(0, ce.jsx)(By, {
                  keyCode: py
                }), ye("plotsGame:placementBuild")]
              })
            })]
          })]
        })
      })
    }

    function By(ee) {
      return (0, ce.jsx)(ze.e, {
        className: "PlotsPlacementKey",
        ...ee
      })
    }

    function Ey() {}
    var gy = He(2425),
      Oy = He(37516),
      dy = He(2029),
      Wy = He(1205);
    const ty = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function Zy(ee) {
      let {
        hud: ie
      } = ee;
      const He = (0, Fe.j)(ii, ie.getPlot()),
        [ye, be] = (0, Me.useState)(null),
        Ke = (0, Oy.k)(ye);
      if ("none" === He[0]) return null;
      const [, Ue, Je, oe, Re, qe] = He;
      return (0, ce.jsx)("div", {
        className: ke()("PlotsPlotBannerContainer", {
          Below: Ke
        }),
        children: (0, ce.jsx)(wy, {
          plotX: Ue,
          plotZ: Je,
          ownerName: oe,
          ownerId: Re,
          relation: qe,
          plaqueRef: be
        }, `${Ue},${Je}`)
      })
    }

    function wy(ee) {
      var ie, He;
      let {
        plotX: ye,
        plotZ: be,
        ownerName: Me,
        ownerId: Ke,
        relation: Ue,
        plaqueRef: Fe
      } = ee;
      const {
        t: Je
      } = (0, oe.v)(), Re = (0, dy.k)("hiddenPlayerNames"), qe = (0, dy.k)("players"), fe = null === Ke ? null : null !== (ie = null === (He = qe.byId[Ke]) || void 0 === He ? void 0 : He.cosmetics) && void 0 !== ie ? ie : null, Te = Je("plotsGame:plotBannerCoords", {
        x: ye,
        z: be
      }), Xe = "own" === Ue || null !== Me;
      return (0, ce.jsxs)("div", {
        ref: Fe,
        className: ke()("PlotsPlotBanner", {
          Own: "own" === Ue,
          Shared: "shared" === Ue
        }),
        role: "status",
        children: [(0, ce.jsxs)("span", {
          className: ke()("PlotsPlotBannerSeal", {
            Face: null !== fe
          }),
          children: [null !== fe && (0, ce.jsx)(gy.c, {
            cosmetics: fe
          }), null === fe && (0, ce.jsx)(pe.e, {
            name: ty[Ue]
          })]
        }), (0, ce.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, ce.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === Ue && Je("plotsGame:plotBannerYours"), "own" !== Ue && null !== Me && Je("plotsGame:plotBannerOwner", {
              name: (0, Wy.h)(Me, Re)
            }), !Xe && Te]
          }), Xe && (0, ce.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [Te, "shared" === Ue && (0, ce.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: Je("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }
    const Dy = function(ee, ie, He, ye) {
      let {
        localPlayerId: be
      } = ye;
      const Ue = new bi;
      let Fe = null,
        Je = null,
        oe = null,
        Re = null,
        ke = null,
        qe = null;
      const fe = [];
      return {
        onCreate: ee => {
          Fe = new fy(ee, be);
          const ie = new ei;
          Je = new Uy(ee, be, Fe, ie), oe = new kH(ee, be), Re = new ae(ee, oe), ke = new ZH(ee, be, Je.nextCell), qe = new Jy(ee), fe.push((0, Ke.z)((0, Me.createElement)(dH, {
            hud: Ue,
            guide: ke,
            tracker: ie,
            placement: oe
          }, (0, Me.createElement)(Zy, {
            hud: Ue
          }), (0, Me.createElement)(Le, {
            journal: Re
          }), (0, Me.createElement)(zH, {
            placement: oe
          }), (0, Me.createElement)(zy, {
            placement: oe
          })), {
            content: (0, Me.createElement)(hH, {
              journal: Re,
              hud: Ue,
              guide: ke
            })
          }))
        },
        YR: () => {
          qe.YR(), Je.YR(), oe.YR(), Re.YR()
        },
        onPlayerAttemptAltAction: (ee, ie, He, ye, be, Me) => {
          if (null !== Me) return void Je.holdPressOnEntity();
          const Ke = void 0 === ie ? null : [ie, He, ye];
          return Je.attemptAltAction(Ke)
        },
        onPlayerClickUp: () => {
          Je.endPress()
        },
        onAfterRender: (ee, ie) => {
          oe.afterRender(ie), Je.afterRender(ie), ke.afterRender(ie)
        },
        onClose: () => {
          for (const ee of fe) ee();
          Fe.dispose(), Je.dispose(), oe.dispose(), Fe = null, Je = null, oe = null, Re = null, ke = null, qe = null
        },
        onReceivedMessageFromServer: (ee, ie) => {
          if ("plotsPlot" === ee) Ue.receivePlot(ie);
          else if ("plotsBlueprint" === ee) {
            const ee = ie;
            Je.DR(ee), oe.DR(ee)
          } else "plotsJournal" === ee ? Re.DR(ie) : "plotsJournalOpen" === ee ? Re.openFromServer(ie) : "plotsPreviewEnd" === ee ? oe.endFromServer() : "plotsGuide" === ee ? Ue.receiveGuide(ie) : "plotsGuideDone" === ee && Ue.receiveGuideDone()
        }
      }
    }
  },
  39293: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ue
    });
    var ye = He(39291);
    const be = 5,
      Me = [0, 0, 0],
      Ke = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function Ue(ee, ie, He, Ue, Fe, Je) {
      let [oe, Re, ke] = Ue;
      const qe = (oe + .5 - He[0]) ** 2 + (Re - He[1]) ** 2 + (ke + .5 - He[2]) ** 2;
      let fe = null;
      qe <= Je ** 2 && (Me[0] = oe + .5, Me[1] = Re + Fe, Me[2] = ke + .5, fe = ie.projectWorldPosToViewport(Me));
      const Te = null !== fe && fe.x > -be && fe.x < 100 + be && fe.y > -be && fe.y < 100 + be;
      return (0, ye.g)(ee, !Te), Te ? (Ke.x = fe.x, Ke.y = fe.y, Ke.distSq = qe, Ke) : null
    }
  },
  39965: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye,
      e: () => Me
    });
    const ye = 1 / .6,
      be = {
        kind: "smokePuff"
      };
    class Me {
      constructor(ee, ie, He) {
        this.style = ee, this.bk = ie, this.half = He, this.particles = null, this.lastFrame = -1
      }
      emit(ee, ie, He) {
        let Me = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return He !== this.lastFrame && (this.lastFrame = He, this.particles || (this.particles = ee.createParticles(function(ee, ie) {
          const [
            [He, Me, Ke],
            [Ue, Fe, Je]
          ] = ee.colours;
          return {
            texture: ee.soft ? be : "square_particle",
            bk: ie,
            minLifeTime: ee.life[0] / ye,
            maxLifeTime: ee.life[1] / ye,
            minEmitPower: ee.power[0] * ye,
            maxEmitPower: ee.power[1] * ye,
            minSize: ee.size[0],
            maxSize: ee.size[1],
            emitRate: 0,
            gravity: [0, ee.lift * ye * ye, 0],
            dir1: [-ee.spread, 1, -ee.spread],
            dir2: [ee.spread, 1, ee.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [He, Me, Ke, ee.alpha],
              maxColor: [Ue, Fe, Je, ee.alpha]
            }, {
              timeFraction: 1,
              minColor: [He, Me, Ke, 0],
              maxColor: [Ue, Fe, Je, 0]
            }],
            blendMode: ee.blendMode
          }
        }(this.style, this.bk), {
          pos: ie,
          half: this.half
        })), this.particles.moveTo(ie, this.half), this.particles.emit(Me), !0)
      }
      dispose() {
        var ee;
        null === (ee = this.particles) || void 0 === ee || ee.stop(), this.particles = null
      }
    }
  },
  40352: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ke,
      f: () => Ue,
      j: () => Fe
    });
    const ye = new Map,
      be = [];

    function Me() {
      for (const ee of be) ee()
    }

    function Ke(ee) {
      var ie;
      return ye.set(ee, (null !== (ie = ye.get(ee)) && void 0 !== ie ? ie : 0) + 1), Me(), () => {
        const ie = ye.get(ee) - 1;
        0 === ie ? ye.delete(ee) : ye.set(ee, ie), Me()
      }
    }

    function Ue() {
      return [...ye.keys()]
    }

    function Fe(ee) {
      be.push(ee)
    }
  },
  39291: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      g: () => Me
    });
    const ye = new WeakMap;

    function be(ee) {
      let ie = ye.get(ee);
      return ie || (ie = {
        hidden: ee.hidden,
        x: NaN,
        y: NaN
      }, ye.set(ee, ie)), ie
    }

    function Me(ee, ie) {
      const He = be(ee);
      He.hidden !== ie && (He.hidden = ie, ee.hidden = ie)
    }

    function Ke(ee, ie, He) {
      const ye = be(ee);
      ye.x === ie && ye.y === He || (ye.x = ie, ye.y = He, ee.style.translate = `${ie}vw ${He}vh`)
    }
  },
  37731: (ee, ie, He) => {
    function ye(ee, ie) {
      return null === ee || null === ie ? ee === ie : ee[0] === ie[0] && ee[1] === ie[1] && ee[2] === ie[2]
    }

    function be(ee) {
      return [ee[0] + .5, ee[1] + .5, ee[2] + .5]
    }
    He.d(ie, {
      e: () => be,
      g: () => ye
    })
  },
  37770: (ee, ie, He) => {
    function ye(ee) {
      return ee.includes("Leaf Bed")
    }

    function be(ee) {
      return / Bed(?: Head)?(?:\||$)/.test(ee) && !ye(ee)
    }

    function Me(ee) {
      return ee.includes(" Strongbed")
    }

    function Ke(ee) {
      return ye(ee) || be(ee) || Me(ee)
    }
    He.d(ie, {
      e: () => Ke,
      i: () => ye,
      k: () => Me,
      m: () => be
    })
  },
  37765: (ee, ie, He) => {
    He.d(ie, {
      d: () => Je
    });
    var ye = He(37770),
      be = He(9961);
    const Me = [],
      Ke = [],
      Ue = [],
      Fe = [];
    for (const oe of Object.keys(be.m))(0, ye.i)(oe) ? Me.push(oe) : (0, ye.m)(oe) && Ke.push(oe), (0, ye.k)(oe) && Ue.push(oe), (oe.includes(" Bed Head") || oe.includes(" Strongbed Head")) && Fe.push(oe);
    const Je = {
      leafBeds: Me,
      woolBeds: Ke,
      strongBeds: Ue,
      beds: [...Me, ...Ke, ...Ue],
      bedHeads: Fe,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  39352: ee => {
    ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);