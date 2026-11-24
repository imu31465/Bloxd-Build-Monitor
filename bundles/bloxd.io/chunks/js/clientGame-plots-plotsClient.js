export const id = 22;
export const ids = [22];
export const modules = {
  36853: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Et,
      g: () => ft,
      i: () => lt,
      m: () => Qt
    });
    var Ot = Vt(34371),
      qt = Vt(36861),
      Dt = Vt(36867),
      mt = Vt(8936),
      dt = Vt(1554),
      jt = Vt(63),
      Ht = Vt(83),
      Xt = Vt(1188);

    function Qt() {
      var tt;
      return (0, dt.h)(qt.b, (0, qt.l)()), (0, Xt.jsx)(Xt.Fragment, {
        children: null === (tt = (0, qt.l)()) || void 0 === tt ? void 0 : tt.content
      })
    }

    function lt(tt) {
      var et;
      let {
        show: Vt
      } = tt;
      (0, dt.h)(qt.b, (0, qt.l)());
      const Ht = null === (et = (0, qt.l)()) || void 0 === et ? void 0 : et.menu;
      return (0, jt.useEffect)((() => {
        var tt;
        Vt || (null === Ht || void 0 === Ht || null === (tt = Ht.onClose) || void 0 === tt || tt.call(Ht), (0, Dt.t)())
      }), [Vt, Ht]), (0, jt.useEffect)((() => Vt ? (0, mt.g)(Dt.A, Dt.f) : void 0), [Vt]), (0, Xt.jsx)(Ot.b, {
        showing: Vt,
        globallyUniqueKey: "clientGameMenu",
        children: null === Ht || void 0 === Ht ? void 0 : Ht.content
      })
    }

    function Et(tt) {
      let {
        placement: et = "bottom"
      } = tt;
      return (0, Xt.jsx)("div", {
        id: `clientGameHud-${et}`,
        style: {
          display: "contents"
        }
      })
    }

    function ft(tt) {
      let {
        children: et,
        placement: Vt = "bottom"
      } = tt;
      const [Ot, qt] = (0, jt.useState)(null);
      return (0, jt.useEffect)((() => {
        qt(document.getElementById(`clientGameHud-${Vt}`))
      }), [Vt]), Ot ? (0, Ht.createPortal)(et, Ot) : null
    }
  },
  34371: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt
    });
    var Ot = Vt(4668),
      qt = Vt(4677);

    function Dt(tt) {
      let {
        children: et,
        showing: Vt,
        globallyUniqueKey: Dt,
        alwaysMountChildren: mt = !1,
        doGameplayStartStopOnShow: dt = !0,
        keepsMovement: jt = !1
      } = tt;
      return (0, qt.d)(!0, Vt, Dt, jt), (0, Ot.e)(dt, Vt), Vt || mt ? et : null
    }
  },
  36941: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt,
      d: () => mt,
      h: () => dt,
      j: () => jt
    });
    var Ot = Vt(63),
      qt = Vt(3176);
    const Dt = 8,
      mt = "InGameHeaderContainer",
      dt = "TopRightElements";

    function jt(tt) {
      const [et] = (0, qt.c)(), [Vt, jt] = (0, Ot.useState)(!1);
      return (0, Ot.useLayoutEffect)((() => {
        if (!tt) return;
        const et = document.querySelector(`.${mt}`),
          Vt = document.querySelector(`.${dt}`),
          Ot = () => {
            const Ot = tt.getBoundingClientRect(),
              qt = et ? et.getBoundingClientRect().right : 0,
              mt = Vt ? Vt.getBoundingClientRect().left : window.innerWidth,
              dt = Ot.left < qt + Dt,
              Ht = Ot.right > mt - Dt;
            jt(dt || Ht)
          };
        Ot();
        const qt = new ResizeObserver(Ot);
        return qt.observe(tt), et && qt.observe(et), Vt && qt.observe(Vt), () => {
          qt.disconnect()
        }
      }), [tt, et]), Vt
    }
  },
  8936: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt,
      g: () => qt
    });
    let Ot = null;
    const qt = function(tt) {
        const et = {
          cycle: tt,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Ot = et, () => {
          Ot === et && (Ot = null)
        }
      },
      Dt = () => {
        var tt;
        return null !== (tt = Ot) && void 0 !== tt && tt.canCycle() ? Ot.cycle : null
      }
  },
  38741: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt,
      g: () => dt,
      j: () => jt
    });
    const Ot = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      qt = [0, 1, 2, 0, 2, 3],
      Dt = [4, 5];

    function mt(tt, et, Vt, Ot, qt) {
      for (let mt = 0; mt < 6; mt++) Dt.includes(mt) === qt && Ht(tt, et, Vt, Ot, mt)
    }

    function dt(tt, et, Vt, Ot) {
      for (let qt = 0; qt < 6; qt++) Ht(tt, et, Vt, Ot, qt)
    }

    function jt(tt, et, Vt, Dt, mt) {
      for (let dt = 0; dt < 6; dt++)
        for (const jt of [0, 1]) {
          const [Ht, Xt, Qt] = [jt + 2, jt + 1, (jt + 3) % 4], lt = tt.length / 3;
          for (const [et, qt] of [
              [jt, Xt],
              [Ht, Xt],
              [Ht, Qt],
              [jt, Qt]
            ])
            for (let jt = 0; jt < 3; jt++) {
              const Ht = Ot[3 * (4 * dt + et) + jt],
                Xt = Ot[3 * (4 * dt + qt) + jt];
              tt.push((Ht + (Xt - Ht) * mt) * Dt / 2 + Vt[jt])
            }
          for (const tt of qt) et.push(lt + tt)
        }
    }

    function Ht(tt, et, Vt, Dt, mt) {
      let [dt, jt, Ht] = Vt, [Xt, Qt, lt] = Dt;
      const Et = tt.length / 3;
      for (let qt = 4 * mt; qt < 4 * mt + 4; qt++) tt.push(Ot[3 * qt] * Xt / 2 + dt, Ot[3 * qt + 1] * Qt / 2 + jt, Ot[3 * qt + 2] * lt / 2 + Ht);
      for (const Ot of qt) et.push(Et + Ot)
    }
  },
  39673: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => vO
    });
    const Ot = [0, 90, 180, 270],
      qt = "plotsblueprint";
    var Dt = Vt(63),
      mt = Vt(36861),
      dt = Vt(26),
      jt = Vt(1554),
      Ht = Vt(2074),
      Xt = Vt(1286),
      Qt = Vt(1140),
      lt = Vt.n(Qt),
      Et = Vt(1732),
      ft = Vt(36853),
      wt = Vt(1152),
      yt = Vt(2018),
      Nt = Vt(2066),
      Mt = Vt(3482),
      bt = Vt(1826);

    function Jt() {}
    const Ct = (0, Dt.createContext)({
      hint: null,
      journalRef: Jt,
      placementCardRef: Jt,
      buildRef: Jt
    });
    var ut = Vt(31);
    const Kt = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      ht = {
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
      vt = ["small", "medium", "large"].flatMap((tt => Kt.flat().filter((et => ht[et].tier === tt))));

    function Wt(tt) {
      return ht[tt]
    }
    const St = new Map(Kt.flatMap((tt => tt.slice(1).map(((et, Vt) => [et, tt[Vt]])))));

    function ct(tt) {
      var et;
      return null !== (et = St.get(tt)) && void 0 !== et ? et : null
    }
    const Rt = {
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

    function It(tt, et) {
      const Vt = new Set(tt),
        Ot = function(tt) {
          const et = new Set(tt);
          return new Set(vt.filter((tt => {
            const Vt = ct(tt);
            return null === Vt || et.has(Vt)
          })))
        }(Vt);
      return vt.map((tt => {
        const qt = tt === et;
        if (Vt.has(tt)) return {
          id: tt,
          active: qt,
          note: null,
          state: "completed",
          unlockedBy: null
        };
        const Dt = Rt[tt],
          mt = void 0 === Dt || Dt.firstBuild && Vt.size > 0 ? null : Dt.key;
        return Ot.has(tt) ? {
          id: tt,
          active: qt,
          note: mt,
          state: "open",
          unlockedBy: null
        } : {
          id: tt,
          active: qt,
          note: mt,
          state: "locked",
          unlockedBy: ct(tt)
        }
      }))
    }
    const Pt = "plotsJournalChanged";
    class Zt {
      constructor(tt, et) {
        this.api = tt, this.placement = et, this.pages = null, this.openRequested = null, this.openedOffered = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.iE(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
        }, this.build = tt => {
          this.placement.start(tt), (0, mt.c)()
        }, this.putAway = () => {
          this.api.sendCommand(`${qt} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      Qf(tt) {
        let [, et, Vt] = tt;
        this.pages = It(et, Vt), ut.j.sw(Pt, this.pages, !0)
      }
      openFromServer(tt) {
        let [, et] = tt;
        this.openRequested = et, this.BQ()
      }
      BQ() {
        const tt = this.openRequested;
        null === tt || dt.b.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, Et.q)() || (0, bt.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = tt, (0, mt.m)()))
      }
      iE(tt) {
        this.reported.has(tt) || (this.reported.add(tt), this.api.sendCommand(`${qt} report ${tt}`))
      }
    }
    var Lt = Vt(1188);
    const Ft = "KeyJ";

    function kt(tt) {
      let {
        journal: et
      } = tt;
      const Vt = (0, jt.h)(Pt, et.getPages()),
        {
          isTouchScreen: Ot
        } = (0, dt.k)(["isTouchScreen"]),
        {
          t: qt
        } = (0, Xt.H)(),
        Ht = (0, Dt.useContext)(Ct);
      return (0, Mt.c)((tt => null !== Vt && tt.code === Ft && !tt.repeat && !(0, bt.isTypingInInput)()), (tt => {
        (0, Et.G)(tt, !0, mt.m)
      })), null === Vt ? null : (0, Lt.jsx)(ft.g, {
        placement: "topRight",
        children: (0, Lt.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, Lt.jsxs)("button", {
            ref: Ht.journalRef,
            type: "button",
            className: lt()("PlotsJournalButton SmallTextBold", {
              Touch: Ot
            }),
            onClick: mt.m,
            children: [(0, Lt.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, Lt.jsx)(yt.e, {
                itemName: "Book",
                amount: 0
              })
            }), qt("plotsGame:journalButton"), !Ot && (0, Lt.jsx)(Nt.d, {
              className: "PlotsJournalButtonKey",
              keyCode: Ft
            }), "openJournal" === Ht.hint && (0, Lt.jsx)(wt.b, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon HandLeftAnim PlotsJournalButtonHand"
            })]
          })
        })
      })
    }
    var Gt = Vt(9425);
    const zt = [0, 90, 180, 270],
      ot = /^(meta\|rot\d)\|([lrud]+)$/,
      rt = "nesw",
      Ut = /^meta\|([nesw]*)\|?(Stacked)?$/,
      At = function(tt) {
        const et = new WeakMap;
        return (Vt, Ot) => {
          let qt = et.get(Vt);
          return void 0 === qt && (qt = tt(Vt, Ot), et.set(Vt, qt)), qt
        }
      }((tt => new it(tt)));
    class it {
      constructor(tt) {
        this.blockMetadata = tt, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const et = new Set(Object.keys(tt).map((et => tt[et].id)));
        et.add(0), this.maxBlockId = Math.max(...et)
      }
      static
      for (tt) {
        return At(tt)
      }
      getBlockIdMapping(tt, et) {
        const Vt = this.getBlockIdMappingKey(tt, et);
        let Ot = this.blockIdMappings.get(Vt);
        return void 0 === Ot && zt.includes(tt) && (Ot = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, tt, et), this.blockIdMappings.set(Vt, Ot)), Ot
      }
      turnBlockId(tt, et, Vt) {
        return this.mapBlockId(this.blockMetadata[tt], et, this.getRotationMapping(et, Vt), Vt)
      }
      getBlockIdMappingKey(tt, et) {
        return `r${tt}|m${Number(et)}`
      }
      createBlockIdMapping(tt, et, Vt, Ot) {
        const qt = new Uint16Array(et + 1),
          Dt = this.getRotationMapping(Vt, Ot);
        for (const mt in tt) {
          const et = tt[mt];
          qt[et.id] = this.mapBlockId(et, Vt, Dt, Ot)
        }
        return qt
      }
      getRotationMapping(tt, et) {
        const Vt = Math.round(tt / 90),
          Ot = new Uint8Array(4);
        for (let qt = 0; qt < 4; qt++) Ot[qt] = (4 + qt - Vt) % 4;
        if (et) {
          let tt = Ot[0];
          Ot[0] = Ot[1], Ot[1] = tt, tt = Ot[2], Ot[2] = Ot[3], Ot[3] = tt
        }
        return Ot
      }
      mapBlockId(tt, et, Vt, Ot) {
        var qt;
        const {
          blockMetadata: Dt
        } = this, mt = Math.round(et / 90), {
          id: dt,
          meta: jt
        } = tt, {
          rot: Ht,
          rootName: Xt,
          metaStr: Qt
        } = jt;
        let lt;
        const [, Et, ft] = null !== (qt = Ut.exec(Qt)) && void 0 !== qt ? qt : [];
        if (void 0 !== Et) {
          var wt, yt;
          lt = null !== (wt = null === (yt = Dt[`${Xt}|meta|${[rt.split("").filter(((tt,et)=>Et.split("").some((tt=>{const Vt=rt.indexOf(tt);return((Ot?3-Vt:Vt)+mt)%4===et})))).join(""),ft].filter(Boolean).join("|")}`]) || void 0 === yt ? void 0 : yt.id) && void 0 !== wt ? wt : dt
        } else if (null === Ht) lt = dt;
        else {
          var Nt, Mt;
          const tt = Vt[Ht - 1] + 1;
          let et = Qt.replace(`rot${Ht}`, `rot${tt}`);
          Ot && jt.stairsCorner && (et = et.replace(/(Left|Right)$/, (tt => "Left" === tt ? "Right" : "Left"))), Ot && "Chest" === Xt && (et = et.replace(/\|(left|right)$/, ((tt, et) => "left" === et ? "|right" : "|left")));
          const qt = ot.exec(et);
          if (Ot && null !== qt) {
            const tt = "lrud".split("").filter((tt => qt[2].includes("l" === tt ? "r" : "r" === tt ? "l" : tt)));
            et = `${qt[1]}|${tt.join("")}`
          }
          const mt = `${Xt}|${et}`;
          if (lt = null !== (Nt = null === (Mt = Dt[mt]) || void 0 === Mt ? void 0 : Mt.id) && void 0 !== Nt ? Nt : null, null === lt) {
            const tt = Dt[Xt];
            lt = tt.rootMetaDesc === mt ? tt.id : dt
          }
        }
        return lt
      }
    }

    function Yt(tt, et, Vt) {
      let {
        xRotationMappedOrigin: Ot,
        shouldSwapXZ: qt
      } = Vt;
      const Dt = qt ? et : tt;
      return null === Ot ? Dt : Ot - Dt
    }

    function Bt(tt, et, Vt) {
      let {
        zRotationMappedOrigin: Ot,
        shouldSwapXZ: qt
      } = Vt;
      const Dt = qt ? tt : et;
      return null === Ot ? Dt : Ot - Dt
    }
    const pt = {
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
      xt = new Map;

    function Tt(tt, et) {
      const Vt = `${tt}|${et}`;
      let Ot = xt.get(Vt);
      if (void 0 === Ot) {
        const {
          size: qt,
          palette: Dt,
          layers: mt
        } = pt[tt], dt = 90 === et || 270 === et, [jt, Ht] = dt ? [qt[2], qt[0]] : [qt[0], qt[2]], Xt = function(tt, et, Vt) {
          let Ot = null,
            qt = null,
            Dt = !1;
          switch (tt) {
            case 0:
              break;
            case 90:
              Ot = et - 1, Dt = !0;
              break;
            case 180:
              Ot = et - 1, qt = Vt - 1;
              break;
            case 270:
              qt = Vt - 1, Dt = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${tt}`)
          }
          return {
            xRotationMappedOrigin: Ot,
            zRotationMappedOrigin: qt,
            shouldSwapXZ: Dt
          }
        }(et, jt, Ht), Qt = it.for(Gt.h), lt = Dt.map((tt => (0, Gt.d)(Qt.turnBlockId((0, Gt.k)(tt), et, !1)))), Et = [];
        mt.forEach(((tt, et) => {
          tt.split(" ").forEach(((tt, Vt) => {
            for (let Ot = 0; Ot < tt.length; Ot++)
              if ("." !== tt[Ot]) {
                const qt = [Yt(Ot, Vt, Xt), et, Bt(Ot, Vt, Xt)];
                Et.push({
                  offset: qt,
                  block: lt[tt.charCodeAt(Ot) - "a".charCodeAt(0)]
                })
              }
          }))
        })), Ot = {
          size: [jt, qt[1], Ht],
          cells: Et
        }, xt.set(Vt, Ot)
      }
      return Ot
    }
    const gt = "plotsBuildProgressChanged",
      st = new Map;

    function nt(tt, et, Vt) {
      let Ot = 0,
        qt = 0;
      return function(tt) {
        let et = st.get(tt);
        if (void 0 === et) {
          const Ot = [];
          for (const {
              offset: et
            }
            of Tt(tt, 0).cells) {
            var Vt;
            Ot[et[1]] = (null !== (Vt = Ot[et[1]]) && void 0 !== Vt ? Vt : 0) + 1
          }
          et = Ot, st.set(tt, et)
        }
        return et
      }(tt).forEach(((tt, Vt) => {
        Ot += tt, Vt > et && (qt += tt)
      })), {
        id: tt,
        filled: Ot - qt - Vt,
        total: Ot
      }
    }
    class te {
      constructor() {
        this.shown = null, this.topOpen = 0, this.progress = null
      }
      get() {
        return this.progress
      }
      show(tt) {
        this.shown = tt, this.topOpen = 0, null === tt && this.sw(null)
      }
      update(tt, et, Vt) {
        const Ot = this.shown;
        null !== Ot && (tt >= et && (this.topOpen = Vt), this.sw(nt(Ot.id, et - Ot.y, tt >= et ? Vt : this.topOpen + Vt)))
      }
      sw(tt) {
        const et = this.progress;
        (null === tt || void 0 === tt ? void 0 : tt.id) === (null === et || void 0 === et ? void 0 : et.id) && (null === tt || void 0 === tt ? void 0 : tt.filled) === (null === et || void 0 === et ? void 0 : et.filled) && (null === tt || void 0 === tt ? void 0 : tt.total) === (null === et || void 0 === et ? void 0 : et.total) || (this.progress = tt, ut.j.sw(gt, tt, !0))
      }
    }
    const ee = "plotsPlotChanged",
      Ve = "plotsGuideChanged",
      Oe = "plotsGuideDone";
    class qe {
      constructor() {
        this.plot = ["none"], this.guide = ["none"]
      }
      getPlot() {
        return this.plot
      }
      receivePlot(tt) {
        this.plot = tt, ut.j.sw(ee, tt, !0)
      }
      getGuide() {
        return this.guide
      }
      receiveGuide(tt) {
        this.guide = tt, ut.j.sw(Ve, tt, !0)
      }
      receiveGuideDone() {
        ut.j.sw(Oe, void 0, !0)
      }
    }
    var De = Vt(1371),
      me = Vt(38755),
      de = Vt(37110),
      je = Vt(1574);

    function He(tt) {
      let {
        onSkip: et,
        className: Vt
      } = tt;
      const {
        t: Ot
      } = (0, Xt.H)();
      return (0, Lt.jsx)("button", {
        type: "button",
        className: lt()("PlotsGuideSkipButton", Vt),
        ...(0, je.e)(et, "pointerup"),
        children: Ot("tutorial:skip")
      })
    }

    function Xe(tt) {
      let {
        target: et,
        placement: Vt,
        spotlight: Ot = null,
        children: qt
      } = tt;
      const {
        t: mt
      } = (0, Xt.H)(), dt = (0, Dt.useRef)(et);
      return dt.current = et, (0, De.w)("popup", dt, null === Ot ? null : Ot.onSkip, null !== Ot, null, "controller:menusSkipTutorial"), (0, Lt.jsxs)(de.h, {
        target: et,
        placement: Vt,
        className: lt()("PlotsGuideBubble", {
          Passive: null === Ot
        }),
        spotlight: null !== Ot,
        spotlightMargin: 30,
        children: [(0, Lt.jsxs)("div", {
          className: "PlotsGuideBubbleHeader",
          children: [(0, Lt.jsx)("img", {
            className: "PlotsGuideBubblePortrait",
            src: me,
            alt: "",
            draggable: !1
          }), (0, Lt.jsx)("span", {
            className: "PlotsGuideBubbleSpeaker",
            children: mt("plotsGame:maverickName")
          }), null !== Ot && (0, Lt.jsx)(He, {
            onSkip: Ot.onSkip
          })]
        }), (0, Lt.jsx)("p", {
          className: "PlotsGuideBubbleText",
          children: qt
        })]
      })
    }

    function Qe(tt) {
      let {
        className: et,
        icon: Vt,
        title: Ot,
        children: qt
      } = tt;
      return (0, Lt.jsxs)("div", {
        className: lt()("PlotsCard", et),
        role: "status",
        children: [(0, Lt.jsx)("span", {
          className: "PlotsCardIcon",
          children: (0, Lt.jsx)(wt.b, {
            name: Vt
          })
        }), (0, Lt.jsxs)("div", {
          className: "PlotsCardBody",
          children: [(0, Lt.jsx)("div", {
            className: "PlotsCardTitle SmallTextBold",
            children: Ot
          }), qt]
        })]
      })
    }

    function le(tt) {
      let {
        progress: et,
        goal: Vt
      } = tt;
      const Ot = Math.min(et, Vt);
      return (0, Lt.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, Lt.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": Vt,
          "aria-valuenow": Ot,
          children: (0, Lt.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${Ot/Vt})`
            }
          })
        }), (0, Lt.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [Ot, "/", Vt]
        })]
      })
    }

    function Ee(tt) {
      let {
        progress: et,
        guide: Vt
      } = tt;
      const {
        t: Ot
      } = (0, Xt.H)(), {
        isTouchScreen: qt
      } = (0, dt.k)(["isTouchScreen"]), Dt = et.filled < 5;
      return (0, Lt.jsxs)(Lt.Fragment, {
        children: [(Dt || et.total - et.filled <= 5) && (0, Lt.jsx)("div", {
          className: "PlotsGuideHandLayer",
          children: (0, Lt.jsx)("div", {
            ref: Vt.bindHand,
            className: "PlotsGuideHand",
            children: (0, Lt.jsx)(wt.b, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon"
            })
          })
        }), (0, Lt.jsx)(ft.g, {
          placement: "bottom",
          children: (0, Lt.jsxs)(Qe, {
            icon: "hammer",
            title: Ot(Wt(et.id).displayName.translationKey),
            children: [Dt && (0, Lt.jsx)("div", {
              className: "PlotsCardHint SmallTextLight",
              children: qt ? Ot("plotsGame:guideBuildTouch") : fe(Ot)
            }), (0, Lt.jsx)(le, {
              progress: et.filled,
              goal: et.total
            })]
          })
        })]
      })
    }

    function fe(tt) {
      const et = Ht.r["alt-fire"][0];
      return "Mouse3" === et ? tt("plotsGame:guideBuildRightClick") : tt("plotsGame:guideBuildKeys", {
        key: (0, Ht.k)(et)
      })
    }

    function we() {
      return (0, Lt.jsx)("div", {
        className: "PlotsGuideDragHand",
        children: (0, Lt.jsx)(wt.b, {
          name: "hand-back-point-up",
          className: "SmallTextBold TouchTutorialIcon"
        })
      })
    }
    var ye = Vt(1387),
      Ne = Vt(2681),
      ae = Vt(38634),
      Me = Vt(38428),
      be = Vt(37164),
      Je = Vt(9454),
      Ce = Vt(9475),
      ue = Vt(391),
      Ke = Vt(38056);
    const he = new Map([
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
      ve = [...be.b.blockRemoveActionRoots, ...Me.b, ...Je.f, "Board", "Code Block", "Custom Lobby Block"],
      We = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let Se = null;

    function ce() {
      return Se ??= function() {
        const tt = Re(),
          et = Math.max(...tt.map((tt => Gt.h[tt].id))) + 1,
          Vt = new Int32Array(et),
          Ot = new Int32Array(et),
          qt = new Uint8Array(et).fill(1),
          Dt = new Uint8Array(et),
          mt = new Uint8Array(et),
          dt = new Array(et).fill("Air"),
          jt = new Map,
          Ht = tt => {
            let et = jt.get(tt);
            return void 0 === et && (et = jt.size + 1, jt.set(tt, et)), et
          },
          Xt = new Set(ve);
        for (const lt of tt) {
          var Qt;
          const {
            id: tt,
            meta: et,
            altActionable: jt,
            canBePlacedOver: Et
          } = Gt.h[lt];
          Vt[tt] = Ht(Ie(lt));
          const ft = et.stairsCorner;
          if (null === ft) Ot[tt] = Vt[tt];
          else {
            const Vt = ft.endsWith("Right");
            Ot[tt] = Ht(`${et.rootName}|rot${Vt?et.rot%4+1:et.rot}|${et.halfblockPlacement}|${ft.replace("Right","Left")}`)
          }
          qt[tt] = Et ? 1 : 0, Dt[tt] = jt || null !== et.open || lt in Ke.d || Xt.has(et.rootName) || void 0 !== (0, Me.f)(et.rootName) ? 1 : 0;
          const {
            rootName: wt
          } = et;
          mt[tt] = null !== et.open || Me.b.includes(wt) || wt.includes("Bookshelf") || wt.includes("Mailbox") ? 1 : 0, dt[tt] = null !== (Qt = (0, ae.h)(tt)) && void 0 !== Qt ? Qt : wt
        }
        return {
          kinds: Vt,
          shapes: Ot,
          empty: qt,
          inUse: Dt,
          ownAltActionMessage: mt,
          placingItems: dt
        }
      }(), Se
    }

    function Re() {
      return Object.keys(Gt.h).filter((tt => Gt.h[tt].name === tt))
    }

    function Ie(tt) {
      var et;
      const Vt = Gt.h[tt],
        {
          rootName: Ot,
          rot: qt
        } = Vt.meta,
        [, ...Dt] = (null !== (et = Vt.rootMetaDesc) && void 0 !== et ? et : tt).split("|"),
        mt = Dt.filter((tt => !("meta" === tt || We.test(tt) || (0, Ce.I)(Vt) && /^[nesw]+$/.test(tt) || Je.f.includes(Ot) && /^[lrud]+$/.test(tt) || ue.M.includes(Ot) && /^(left|right)$/.test(tt))));
      return [Ot, ...mt].map((tt => "fenceGate" === Vt.model && tt === `rot${qt}` ? "rot" + ((qt - 1) % 2 + 1) : tt)).join("|")
    }

    function Pe(tt, et) {
      const {
        kinds: Vt,
        shapes: Ot
      } = ce();
      return Vt[tt] === Vt[et] || Ot[tt] === Ot[et]
    }

    function Ze(tt) {
      return 1 === ce().empty[tt]
    }

    function Le(tt) {
      return ce().placingItems[tt]
    }

    function Fe(tt) {
      return he.get(Gt.h[tt].meta.rootName)
    }
    var ke = Vt(9449),
      Ge = Vt(9466);
    const ze = [0, 0, 0, 1, 1, 1],
      oe = (0, ke.e)([
        [2, 0, 2, 6, 6, 6]
      ]),
      re = (0, ke.e)([
        [3, 0, 3, 5, 5, 5]
      ]),
      Ue = (0, ke.e)([
        [3, 3, 3, 5, 8, 5]
      ]),
      Ae = [0, 1, 2, 3].map((tt => (0, ke.e)((0, ke.r)([
        [3, 2, 0, 5, 7, 3]
      ], tt))));

    function ie(tt) {
      const {
        ey: et,
        model: Vt,
        blockModel: Ot,
        meta: qt
      } = Gt.h[tt];
      return void 0 !== et ? et : "CentreCross" === Vt ? oe : null !== Ot && void 0 !== Ot && Ot.startsWith("torch") ? qt.halfblockPlacement === Ge.b.side ? Ae[qt.rot - 1] : qt.halfblockPlacement === Ge.b.top ? Ue : re : ze
    }
    var Ye = Vt(229);
    class Be {
      constructor(tt) {
        this.api = tt, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(tt) {
        const et = Ye.e.ff;
        this.chunks = [];
        for (let Vt = 0; Vt < tt.length; Vt += 3) {
          const Ot = Math.floor(tt[Vt] / et),
            qt = Math.floor(tt[Vt + 1] / et),
            Dt = Math.floor(tt[Vt + 2] / et);
          this.watches(Ot, qt, Dt) || this.chunks.push(Ot, qt, Dt)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const tt = performance.now();
        if (tt - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = tt;
        let et = !1;
        for (let Vt = 0; Vt < this.chunks.length; Vt += 3) {
          const tt = this.api.getChunkVersion(this.chunks[Vt], this.chunks[Vt + 1], this.chunks[Vt + 2]);
          this.versions[Vt / 3] !== tt && (this.versions[Vt / 3] = tt, et = !0)
        }
        return et
      }
      watches(tt, et, Vt) {
        for (let Ot = 0; Ot < this.chunks.length; Ot += 3)
          if (this.chunks[Ot] === tt && this.chunks[Ot + 1] === et && this.chunks[Ot + 2] === Vt) return !0;
        return !1
      }
    }
    var pe = Vt(38741);
    const xe = .35,
      Te = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      ge = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      se = [.95, .2, .15];
    class ne {
      constructor() {
        this.groups = []
      }
      add(tt, et, Vt, Ot, qt) {
        let Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ze;
        for (const mt of this.groups)
          if (VV(mt, Ot, qt)) return mt.cells.push(tt, et, Vt), void mt.boxes.push(Dt);
        this.groups.push({
          rgb: Ot,
          look: qt,
          cells: [tt, et, Vt],
          boxes: [Dt]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class tV {
      constructor(tt) {
        this.api = tt, this.shown = []
      }
      show(tt) {
        const et = [];
        for (const Vt of tt) {
          const tt = this.shown.findIndex((tt => {
            let {
              group: et
            } = tt;
            return VV(et, Vt.rgb, Vt.look) && OV(et, Vt)
          })); - 1 === tt ? et.push(this.build(Vt)) : (et.push(this.shown[tt]), this.shown.splice(tt, 1))
        }
        this.dispose(), this.shown = et
      }
      dispose() {
        for (const {
            meshes: tt
          }
          of this.shown)
          for (const et of tt) this.api.disposeGameMesh(et);
        this.shown = []
      }
      build(tt) {
        const {
          rgb: et,
          look: Vt,
          boxes: Ot
        } = tt, qt = [et[0] + (1 - et[0]) * xe, et[1] + (1 - et[1]) * xe, et[2] + (1 - et[2]) * xe], Dt = [this.buildMesh(tt.cells, et, Vt.alpha, ((tt, et, qt, Dt) => {
          eV(tt, et, qt, Ot[Dt], Vt.size, !1)
        })), this.buildMesh(tt.cells, qt, Vt.alpha, ((tt, et, qt, Dt) => {
          eV(tt, et, qt, Ot[Dt], Vt.size, !0)
        }))];
        return Vt.crossed && Dt.push(this.buildMesh(tt.cells, et, .9, ((tt, et, Ot) => {
          (0, pe.j)(tt, et, Ot, Vt.size + .01, .12)
        }))), {
          group: tt,
          meshes: Dt
        }
      }
      buildMesh(tt, et, Vt, Ot) {
        const qt = [tt[0], tt[1], tt[2]],
          Dt = [],
          mt = [];
        for (let dt = 0; dt < tt.length; dt += 3) Ot(Dt, mt, [tt[dt] - qt[0] + .5, tt[dt + 1] - qt[1] + .5, tt[dt + 2] - qt[2] + .5], dt / 3);
        return this.api.createGameMesh({
          positions: Dt,
          indices: mt
        }, {
          rgb: [et[0], et[1], et[2]],
          alpha: Vt
        }, qt)
      }
    }

    function eV(tt, et, Vt, Ot, qt, Dt) {
      for (let mt = 0; mt < Ot.length; mt += 6) {
        const dt = [0, 0, 0],
          jt = [0, 0, 0];
        for (let tt = 0; tt < 3; tt++) dt[tt] = Vt[tt] + ((Ot[mt + tt] + Ot[mt + tt + 3]) / 2 - .5) * qt, jt[tt] = (Ot[mt + tt + 3] - Ot[mt + tt]) * qt;
        (0, pe.c)(tt, et, dt, jt, Dt)
      }
    }

    function VV(tt, et, Vt) {
      return tt.rgb[0] === et[0] && tt.rgb[1] === et[1] && tt.rgb[2] === et[2] && tt.look === Vt
    }

    function OV(tt, et) {
      if (tt.cells.length !== et.cells.length) return !1;
      for (let Vt = 0; Vt < tt.cells.length; Vt++)
        if (tt.cells[Vt] !== et.cells[Vt]) return !1;
      return tt.boxes.every(((tt, Vt) => tt === et.boxes[Vt]))
    }

    function qV(tt, et, Vt, Ot, qt) {
      if (!tt.isBlockInLoadedChunk(et, Ot - 6, Vt) || !tt.isBlockInLoadedChunk(et, Ot + 6 + qt, Vt) || !tt.canModifyBlockAt(et, Ot, Vt)) return NaN;
      let Dt = Ot - 1;
      if (0 !== tt.getBlockId(et, Dt, Vt)) {
        for (; Dt < Ot + 6 && 0 !== tt.getBlockId(et, Dt + 1, Vt);) Dt++;
        return Dt
      }
      for (; Dt > Ot - 6;)
        if (Dt--, 0 !== tt.getBlockId(et, Dt, Vt)) return Dt;
      return NaN
    }

    function DV(tt, et, Vt, Ot, qt) {
      let Dt = 0;
      for (let mt = Ot + 1; mt <= Ot + qt; mt++) 0 !== tt.getBlockId(et, mt, Vt) && Dt++;
      return Dt
    }

    function mV(tt) {
      const et = new Map;
      for (const mt of tt) {
        var Vt;
        if (Number.isNaN(mt)) return null;
        et.set(mt, (null !== (Vt = et.get(mt)) && void 0 !== Vt ? Vt : 0) + 1)
      }
      let Ot = NaN,
        qt = 0;
      for (const [mt, dt] of et)(dt > qt || dt === qt && mt < Ot) && (Ot = mt, qt = dt);
      let Dt = 0;
      for (const mt of tt) Dt += Math.abs(mt - Ot);
      return Dt
    }

    function dV(tt, et, Vt, Ot) {
      const {
        eye: qt,
        forward: Dt,
        tanHalfFovX: mt,
        tanHalfFovY: dt
      } = tt, [jt, Ht] = function(tt) {
        let [et, Vt, Ot] = tt;
        const qt = Math.hypot(et, Ot),
          [Dt, mt] = [Ot / qt, -et / qt];
        return [
          [Dt, 0, mt],
          [Vt * mt, Ot * Dt - et * mt, -Vt * Dt]
        ]
      }(Dt), [Xt, Qt] = [et * mt, Vt * dt], lt = Dt[0] + Xt * jt[0] + Qt * Ht[0], Et = Dt[1] + Qt * Ht[1], ft = Dt[2] + Xt * jt[2] + Qt * Ht[2], wt = (Ot - qt[1]) / Et;
      return wt > 0 && wt < 1 / 0 ? [qt[0] + wt * lt, qt[2] + wt * ft] : null
    }
    const jV = "plotsBlueprintPlacementChanged",
      HV = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class XV {
      constructor(tt, et) {
        this.api = tt, this.localPlayerId = et, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = tt => {
          var et, Vt, Ot, Dt;
          const mt = null !== (et = null === (Vt = this.placing) || void 0 === Vt ? void 0 : Vt.rotation) && void 0 !== et ? et : 0,
            {
              size: dt
            } = Tt(tt, mt),
            jt = this.api.YM(this.localPlayerId),
            [Ht, Xt] = null !== (Ot = null !== (Dt = function(tt, et, Vt, Ot) {
              const [qt, Dt, mt] = et, [dt, jt, Ht] = [Math.floor(Vt[0]), Math.floor(Vt[1]), Math.floor(Vt[2])], Xt = 6 + Math.max(qt, mt) / 2, [Qt, lt] = [Math.ceil(Xt + qt / 2), Math.ceil(Xt + mt / 2)], [Et, ft] = [dt - Qt, Ht - lt], [wt, yt] = [2 * Qt + 1, 2 * lt + 1], Nt = new Float64Array(wt * yt), Mt = new Uint16Array(wt * yt);
              for (let Kt = 0; Kt < wt; Kt++)
                for (let et = 0; et < yt; et++) {
                  const Vt = qV(tt, Et + Kt, ft + et, jt, Dt);
                  Nt[Kt * yt + et] = Vt, Number.isNaN(Vt) || (Mt[Kt * yt + et] = DV(tt, Et + Kt, ft + et, Vt, Dt))
                }
              const bt = Math.hypot(Ot[0], Ot[2]),
                Jt = [];
              let Ct = null,
                ut = 1 / 0;
              for (let Kt = 0; Kt + qt <= wt; Kt++)
                for (let tt = 0; tt + mt <= yt; tt++) {
                  const [et, Dt] = [Et + Kt, ft + tt], [jt, Qt] = [et + qt / 2 - Vt[0], Dt + mt / 2 - Vt[2]], lt = Math.hypot(jt, Qt);
                  if (lt > Xt || dt >= et - 2 && dt < et + qt + 2 && Ht >= Dt - 2 && Ht < Dt + mt + 2) continue;
                  Jt.length = 0;
                  let wt = 0;
                  for (let Vt = 0; Vt < qt; Vt++)
                    for (let et = 0; et < mt; et++) Jt.push(Nt[(Kt + Vt) * yt + tt + et]), wt += Mt[(Kt + Vt) * yt + tt + et];
                  const ht = mV(Jt);
                  if (null === ht) continue;
                  const vt = lt + 3 * (ht + wt) + (1 - (0 === bt ? 1 : (jt * Ot[0] + Qt * Ot[2]) / (lt * bt))) / 2 * 6;
                  vt < ut && (ut = vt, Ct = [et, Dt])
                }
              return Ct
            }(this.api, dt, jt, this.camera.forward)) && void 0 !== Dt ? Dt : this.cornerOnTarget(dt)) && void 0 !== Ot ? Ot : [Math.floor(jt[0]) + 2, Math.floor(jt[2])];
          this.placing = {
            id: tt,
            rotation: mt,
            corner: [Ht, this.playerLevel(), Xt],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null,
            moved: !1,
            stillSinceMs: performance.now()
          }, this.update(), this.api.sendCommand(`${qt} preview`)
        }, this.rotate = () => {
          const {
            id: tt,
            rotation: et,
            corner: Vt
          } = this.placing, qt = Ot[(Ot.indexOf(et) + 1) % Ot.length], [Dt, , mt] = Tt(tt, et).size, [dt, , jt] = Tt(tt, qt).size;
          this.moveTo(Vt[0] + Math.floor(Dt / 2) - Math.floor(dt / 2), Vt[2] + Math.floor(mt / 2) - Math.floor(jt / 2), qt)
        }, this.hoverAt = (tt, et) => {
          this.placing.hover = [tt, et], this.moveCentreTo(this.camera, tt, et)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (tt, et) => {
          const Vt = this.placing,
            {
              eye: Ot,
              forward: qt,
              tanHalfFovX: Dt,
              tanHalfFovY: mt
            } = this.camera,
            dt = {
              eye: [Ot[0], Ot[1], Ot[2]],
              forward: [qt[0], qt[1], qt[2]],
              tanHalfFovX: Dt,
              tanHalfFovY: mt
            },
            jt = Vt.corner[1],
            Ht = dV(dt, tt, et, jt);
          Vt.hover = null, Vt.drag = Ht && {
            view: dt,
            ground: Ht,
            corner: [Vt.corner[0], Vt.corner[2]],
            level: jt
          }
        }, this.dragTo = (tt, et) => {
          const Vt = this.placing.drag,
            Ot = Vt && dV(Vt.view, tt, et, Vt.level);
          null !== Vt && null !== Ot && this.moveTo(Vt.corner[0] + Math.round(Ot[0] - Vt.ground[0]), Vt.corner[1] + Math.round(Ot[1] - Vt.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const tt = this.view;
          tt.waiting || (tt.blocked ? this.sw({
            ...tt,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const tt = this.placing,
            {
              id: et,
              rotation: Vt,
              corner: Ot
            } = tt;
          this.api.sendCommand(`${qt} place ${et} ${Ot.join(" ")} ${Vt}`), tt.sent = {
            atMs: performance.now(),
            corner: [...Ot],
            rotation: Vt,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${qt} preview off`))
        }, this.chunkWatch = new Be(tt), this.meshes = new tV(tt)
      }
      getView() {
        return this.view
      }
      BQ() {
        const tt = this.placing;
        null !== tt && (null !== tt.sent && !tt.sent.timedOut && performance.now() - tt.sent.atMs > 3e3 ? (tt.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(tt) || this.chunkWatch.changed() || this.view.settled !== QV(tt, this.view.blocked)) && this.update())
      }
      afterRender(tt) {
        ! function(tt, et) {
          for (let Vt = 0; Vt < 3; Vt++) et.eye[Vt] = tt.cameraPosition[Vt], et.forward[Vt] = tt.cameraDirection[Vt];
          et.tanHalfFovX = tt.tanHalfFovX, et.tanHalfFovY = tt.tanHalfFovY
        }(tt, this.camera);
        const et = this.placing;
        null !== et && null !== et.hover && this.moveCentreTo(this.camera, et.hover[0], et.hover[1])
      }
      Qf(tt) {
        const et = this.placing;
        if (null === et || null === et.sent || "active" !== tt[0]) return;
        const {
          sent: Vt
        } = et, [, Ot, qt, Dt, mt, dt, jt] = tt;
        qt && Ot === et.id && jt === Vt.rotation && Dt === Vt.corner[0] && mt === Vt.corner[1] && dt === Vt.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(tt) {
        let [et, , Vt] = tt;
        const Ot = this.api.getTargetedBlock();
        if (null === Ot) return null;
        const [qt, , Dt] = Ot.position;
        return [qt - Math.floor(et / 2), Dt - Math.floor(Vt / 2)]
      }
      playerLevel() {
        var tt;
        const [et, Vt, Ot] = this.api.YM(this.localPlayerId);
        if (null !== (tt = this.api.getLocalPlayerMovement()) && void 0 !== tt && tt.onGround) return Math.ceil(Vt - .01);
        const [qt, Dt, mt] = [Math.floor(et), Math.floor(Vt), Math.floor(Ot)];
        for (let dt = Dt; dt >= Dt - 2; dt--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(qt, dt, mt))) return dt + 1;
        return Dt
      }
      followPlayerLevel(tt) {
        if (lV(tt)) return !1;
        const et = this.playerLevel();
        return et !== tt.corner[1] && (tt.corner[1] = et, !0)
      }
      moveCentreTo(tt, et, Vt) {
        const Ot = this.placing,
          qt = dV(tt, et, Vt, Ot.corner[1]);
        if (null !== qt) {
          const [tt, , et] = Tt(Ot.id, Ot.rotation).size;
          this.moveTo(Math.round(qt[0] - tt / 2), Math.round(qt[1] - et / 2))
        }
      }
      moveTo(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const Ot = this.placing;
        if (lV(Ot)) return;
        const [qt, Dt, mt] = Ot.corner;
        if (this.centreOnPlot(qt, mt) && !this.centreOnPlot(tt, et, Vt))
          if (this.centreOnPlot(tt, mt, Vt)) et = mt;
          else {
            if (!this.centreOnPlot(qt, et, Vt)) return;
            tt = qt
          } tt === qt && et === mt && Vt === Ot.rotation || (Ot.rotation = Vt, Ot.corner = [tt, Dt, et], Ot.moved = !0, Ot.stillSinceMs = performance.now(), this.update())
      }
      centreOnPlot(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: Ot,
          corner: qt
        } = this.placing, [Dt, , mt] = Tt(Ot, Vt).size;
        return this.api.canModifyBlockAt(tt + Math.floor(Dt / 2), qt[1], et + Math.floor(mt / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.sw(null)
      }
      update() {
        const {
          id: tt,
          rotation: et,
          corner: Vt,
          refusals: Ot
        } = this.placing, qt = new ne, Dt = [];
        let mt = !1,
          dt = 0;
        for (const {
            offset: Qt,
            block: lt
          }
          of Tt(tt, et).cells) {
          const [tt, et, Ot] = [Vt[0] + Qt[0], Vt[1] + Qt[1], Vt[2] + Qt[2]];
          Dt.push(tt, et, Ot);
          const jt = !this.api.canModifyBlockAt(tt, et, Ot),
            Ht = this.api.getBlockId(tt, et, Ot),
            Xt = !Ze(Ht) && !Pe(this.api.blockNameToBlockId(lt), Ht);
          mt ||= jt, dt += Xt ? 1 : 0, jt || Xt ? qt.add(tt, et, Ot, se, ge) : qt.add(tt, et, Ot, Fe(lt), HV, ie(lt))
        }
        this.chunkWatch.watch(Dt), this.meshes.show(qt.toArray());
        const jt = this.view,
          Ht = lV(this.placing),
          Xt = QV(this.placing, mt);
        (null === jt || void 0 === jt ? void 0 : jt.id) === tt && jt.blocked === mt && jt.toClear === dt && jt.waiting === Ht && jt.refusals === Ot && jt.settled === Xt || this.sw({
          id: tt,
          blocked: mt,
          toClear: dt,
          waiting: Ht,
          refusals: Ot,
          settled: Xt
        })
      }
      sw(tt) {
        this.view = tt, ut.j.sw(jV, tt, !0)
      }
    }

    function QV(tt, et) {
      let {
        moved: Vt,
        stillSinceMs: Ot
      } = tt;
      return !et && performance.now() - Ot >= (Vt ? 1500 : 6e3)
    }

    function lV(tt) {
      let {
        sent: et
      } = tt;
      return null !== et && !et.timedOut
    }
    var EV = Vt(4677);
    class fV {
      constructor(tt) {
        this.placement = tt, this.press = null
      }
      down(tt) {
        if (null !== this.press) return !1;
        const {
          id: et,
          mouse: Vt,
          x: Ot,
          y: qt,
          atMs: Dt
        } = tt;
        return this.press = {
          id: et,
          mouse: Vt,
          x: Ot,
          y: qt,
          atMs: Dt,
          moved: !1
        }, Vt || this.placement.beginDrag(tt.ndcX, tt.ndcY), !0
      }
      move(tt) {
        const et = this.press;
        null !== et && et.id === tt.id && (et.moved ||= Math.hypot(tt.x - et.x, tt.y - et.y) > 8), tt.mouse ? this.placement.hoverAt(tt.ndcX, tt.ndcY) : (null === et || void 0 === et ? void 0 : et.id) === tt.id && this.placement.dragTo(tt.ndcX, tt.ndcY)
      }
      up(tt) {
        const et = this.press;
        (null === et || void 0 === et ? void 0 : et.id) === tt.id && (this.move(tt), this.end(), !et.moved && (et.mouse || tt.atMs - et.atMs <= 250) && this.placement.tap())
      }
      cancel(tt) {
        var et;
        (null === (et = this.press) || void 0 === et ? void 0 : et.id) === tt && this.end()
      }
      leave(tt) {
        let {
          id: et,
          mouse: Vt
        } = tt;
        Vt && this.placement.endHover(), this.cancel(et)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }
    const wV = "PlotsPlacementLayer";

    function yV(tt) {
      let {
        placement: et
      } = tt;
      return null === (0, jt.h)(jV, et.getView()) ? null : (0, Lt.jsx)(NV, {
        placement: et
      })
    }

    function NV(tt) {
      let {
        placement: et
      } = tt;
      (0, EV.d)(!0, !0, wV);
      const Vt = (0, Dt.useMemo)((() => new fV(et)), [et]);
      return (0, Lt.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: tt => {
          "mouse" === tt.pointerType && 0 !== tt.button || !Vt.down(aV(tt)) || tt.currentTarget.setPointerCapture(tt.pointerId)
        },
        onPointerMove: tt => {
          Vt.move(aV(tt))
        },
        onPointerUp: tt => {
          Vt.up(aV(tt))
        },
        onPointerCancel: tt => {
          Vt.cancel(tt.pointerId)
        },
        onLostPointerCapture: tt => {
          Vt.cancel(tt.pointerId)
        },
        onPointerLeave: tt => {
          Vt.leave(aV(tt))
        },
        "aria-hidden": !0
      })
    }

    function aV(tt) {
      const {
        left: et,
        top: Vt,
        width: Ot,
        height: qt
      } = tt.currentTarget.getBoundingClientRect();
      return {
        id: tt.pointerId,
        mouse: "mouse" === tt.pointerType,
        x: tt.clientX,
        y: tt.clientY,
        ndcX: (tt.clientX - et) / Ot * 2 - 1,
        ndcY: 1 - (tt.clientY - Vt) / qt * 2,
        atMs: tt.timeStamp
      }
    }

    function MV() {
      return (0, ye.k)().some((tt => tt !== ye.c && tt !== wV))
    }
    const bV = 2500;

    function JV(tt) {
      let {
        hud: et,
        guide: Vt,
        tracker: Ot,
        placement: qt,
        children: mt
      } = tt;
      const {
        t: Qt
      } = (0, Xt.H)(), {
        isTouchScreen: lt
      } = (0, dt.k)(["isTouchScreen"]), Et = (0, jt.h)(Ve, et.getGuide()), ft = (0, jt.h)(ee, et.getPlot()), wt = (0, jt.h)(gt, Ot.get()), yt = function(tt) {
        const {
          openInGameMenuName: et,
          openEverythingMenuName: Vt,
          loadingOverlayVisible: Ot
        } = (0, dt.k)(["openInGameMenuName", "openEverythingMenuName", "loadingOverlayVisible"]), qt = (0, Ne.e)(), [mt, Ht] = (0, Dt.useState)(MV);
        (0, Dt.useEffect)((() => {
          const tt = () => {
            Ht(MV())
          };
          tt();
          const et = (0, ye.j)(tt),
            Vt = (0, ye.i)(tt);
          return () => {
            et(), Vt()
          }
        }), []);
        const Xt = (0, jt.h)(jV, tt.getView()),
          Qt = "clientGame" === et;
        return {
          hudHidden: qt || Ot,
          journalOpen: Qt,
          covered: mt || null !== Vt || null !== et && !Qt,
          placing: null === Xt ? null : Xt.settled ? "placeBuild" : "placeSpot"
        }
      }(qt), Nt = function(tt, et, Vt) {
        return "none" === tt[0] || Vt.hudHidden || Vt.journalOpen || Vt.covered ? null : null !== Vt.placing ? Vt.placing : null !== et ? "build" : "choose" === tt[1] ? "openJournal" : null
      }(Et, null === wt ? null : wt.id, yt), Mt = function() {
        const [tt, et] = (0, Dt.useState)(null), [Vt, Ot] = (0, Dt.useState)(!1);
        return (0, jt.f)(Oe, (() => {
          et(performance.now())
        })), (0, Dt.useEffect)((() => {
          if (null === tt) return;
          const et = window.setTimeout((() => {
              Ot(!0)
            }), bV),
            Vt = window.setTimeout((() => {
              Ot(!1)
            }), 7500);
          return () => {
            window.clearTimeout(et), window.clearTimeout(Vt)
          }
        }), [tt]), Vt
      }() && !yt.hudHidden && !yt.covered && !yt.journalOpen && null === yt.placing, [bt, Jt] = (0, Dt.useState)(!1);
      (0, Dt.useEffect)((() => {
        yt.journalOpen && Jt(!0)
      }), [yt.journalOpen]);
      const [ut, Kt] = (0, Dt.useState)(null), [ht, vt] = (0, Dt.useState)(null), [Wt, St] = (0, Dt.useState)(null), ct = (0, Dt.useMemo)((() => ({
        hint: Nt,
        journalRef: Kt,
        placementCardRef: vt,
        buildRef: St
      })), [Nt]), Rt = "plot" === ft[0] && "own" === ft[5], It = lt && !bt && Rt ? {
        onSkip: Vt.skip
      } : null;
      return (0, Lt.jsxs)(Ct.Provider, {
        value: ct,
        children: [mt, "openJournal" === Nt && null !== ut && (0, Lt.jsx)(Xe, {
          target: ut,
          placement: "left",
          spotlight: It,
          children: lt ? Qt("plotsGame:guideOpenJournal") : Qt("plotsGame:guideOpenJournalKeys", {
            key: (0, Ht.k)(Ft)
          })
        }), "placeSpot" === Nt && null !== ht && (0, Lt.jsxs)(Lt.Fragment, {
          children: [lt && (0, Lt.jsx)(we, {}), (0, Lt.jsx)(Xe, {
            target: ht,
            placement: "top",
            children: Qt(lt ? "plotsGame:guidePlaceSpotTouch" : "plotsGame:guidePlaceSpotMouse")
          })]
        }), "placeBuild" === Nt && null !== Wt && null !== ht && (0, Lt.jsx)(Xe, {
          target: lt ? Wt : ht,
          placement: "top",
          children: Qt(lt ? "plotsGame:guidePlaceBuildTouch" : "plotsGame:guidePlaceBuildMouse")
        }), "build" === Nt && null !== wt && (0, Lt.jsx)(Ee, {
          progress: wt,
          guide: Vt
        }), Mt && null !== ut && (0, Lt.jsx)(Xe, {
          target: ut,
          placement: "left",
          children: Qt("plotsGame:guideMoreBuilds")
        })]
      })
    }
    var CV = Vt(38716),
      uV = Vt(38718);
    class KV {
      constructor(tt, et, Vt) {
        this.api = tt, this.localPlayerId = et, this.nextCell = Vt, this.hand = null, this.skip = () => {
          this.api.sendCommand("plotsguide skip")
        }, this.bindHand = tt => {
          this.hand = tt
        }
      }
      afterRender(tt) {
        const et = this.hand;
        if (null === et) return;
        const Vt = this.nextCell.get();
        if (null === Vt) return void(0, CV.g)(et, !0);
        const Ot = (0, uV.b)(et, tt, this.api.getPositionView(this.localPlayerId), Vt, 1, 40);
        null !== Ot && (0, CV.e)(et, Math.round(100 * Ot.x) / 100, Math.round(100 * Ot.y) / 100)
      }
    }
    var hV = Vt(1556),
      vV = Vt(4665),
      WV = Vt(1213);
    const SV = {
        farm_hut: Vt.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
        farm_house: Vt.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
        farm_barn: Vt.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
        rusticHome_tent: Vt.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
        rusticHome_cabin: Vt.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
        rusticHome_house: Vt.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
        market_stand: Vt.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
        market_stall: Vt.p + "static/media/market_stall.9a562807f9dff591618a.webp",
        market_shop: Vt.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
        castle_wall: Vt.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
        castle_gate: Vt.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
        castle_tower: Vt.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
      },
      cV = ["plotsGame:guideEffortQuick", "plotsGame:guideEffortMedium", "plotsGame:guideEffortBigger"],
      RV = ["market_stand", "rusticHome_tent", "farm_hut"].map((tt => ({
        id: tt,
        blocks: Tt(tt, 0).cells.length
      }))).sort(((tt, et) => tt.blocks - et.blocks)).map(((tt, et) => ({
        ...tt,
        effortKey: cV[et]
      })));

    function IV(tt) {
      let {
        onBuild: et
      } = tt;
      const {
        t: Vt
      } = (0, Xt.H)();
      return (0, Lt.jsx)("div", {
        className: "PlotsJournalBookPages PlotsGuideChooserCover",
        children: (0, Lt.jsxs)("div", {
          className: "PlotsGuideChooser",
          children: [(0, Lt.jsx)("h3", {
            className: "PlotsGuideChooserTitle",
            children: Vt("plotsGame:guidePickTitle")
          }), (0, Lt.jsxs)("p", {
            className: "PlotsGuideChooserNote",
            children: [(0, Lt.jsx)("img", {
              src: me,
              alt: "",
              draggable: !1
            }), Vt("plotsGame:guidePickNote")]
          }), (0, Lt.jsx)("div", {
            className: "PlotsGuideChooserStarters",
            children: RV.map((tt => {
              let {
                id: Ot,
                blocks: qt,
                effortKey: Dt
              } = tt;
              return (0, Lt.jsxs)("article", {
                className: "PlotsGuideStarter",
                children: [(0, Lt.jsx)("button", {
                  type: "button",
                  className: "PlotsGuideStarterSketch",
                  tabIndex: -1,
                  "aria-hidden": !0,
                  "data-pad-ignore": !0,
                  onClick: () => {
                    et(Ot)
                  },
                  children: (0, Lt.jsx)("img", {
                    src: SV[Ot],
                    alt: "",
                    draggable: !1
                  })
                }), (0, Lt.jsxs)("div", {
                  className: "PlotsGuideStarterInfo",
                  children: [(0, Lt.jsxs)("span", {
                    className: "PlotsGuideStarterText",
                    children: [(0, Lt.jsx)("span", {
                      className: "PlotsGuideStarterName",
                      children: Vt(Wt(Ot).displayName.translationKey)
                    }), (0, Lt.jsx)("span", {
                      className: "PlotsGuideStarterEffort",
                      children: Vt(Dt)
                    }), (0, Lt.jsx)("span", {
                      className: "PlotsGuideStarterBlocks",
                      children: Vt("plotsGame:journalBlocks", {
                        blocks: String(qt)
                      })
                    })]
                  }), (0, Lt.jsx)(hV.m, {
                    onClick: () => {
                      et(Ot)
                    },
                    children: Vt("plotsGame:placementBuild")
                  })]
                })]
              }, Ot)
            }))
          })]
        })
      })
    }

    function PV(tt) {
      let {
        direction: et,
        disabled: Vt,
        onTurn: Ot
      } = tt;
      const {
        t: qt
      } = (0, Xt.H)();
      return (0, Lt.jsx)("div", {
        className: lt()("PlotsJournalArrow", et),
        children: (0, Lt.jsx)(hV.f, {
          disabled: Vt,
          ariaLabel: qt("Forward" === et ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            Ot(et)
          },
          children: (0, Lt.jsx)(wt.b, {
            name: "angle-up"
          })
        })
      })
    }
    const ZV = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function LV(tt) {
      let {
        page: et,
        building: Vt,
        onBuild: Ot,
        onPutAway: qt
      } = tt;
      const {
        t: Dt
      } = (0, Xt.H)(), {
        displayName: mt,
        tier: dt
      } = Wt(et.id), jt = Tt(et.id, 0).cells.length, Ht = "locked" === et.state, Qt = Vt ? hV.f : hV.m;
      return (0, Lt.jsxs)("article", {
        className: lt()("PlotsJournalPage", {
          Locked: Ht
        }),
        children: [(0, Lt.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: Dt(mt.translationKey)
        }), (0, Lt.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [Dt(ZV[dt]), " \xb7 ", Dt("plotsGame:journalBlocks", {
            blocks: String(jt)
          })]
        }), (0, Lt.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [vt.map((tt => (0, Lt.jsx)("img", {
            className: lt()({
              Shown: tt === et.id
            }),
            src: SV[tt],
            alt: "",
            draggable: !1
          }, tt))), "completed" === et.state && (0, Lt.jsx)("span", {
            className: "PlotsJournalStamp",
            children: Dt("plotsGame:journalBuilt")
          }), Ht && (0, Lt.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, Lt.jsx)(wt.b, {
              name: "lock"
            })
          })]
        }), null !== et.note && (0, Lt.jsx)("p", {
          className: "PlotsJournalNote",
          children: Dt(et.note)
        }), (0, Lt.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === et.state && (0, Lt.jsx)("p", {
            className: "PlotsJournalHint",
            children: Dt("plotsGame:journalLocked", {
              name: Dt(Wt(et.unlockedBy).displayName.translationKey)
            })
          }), et.active && (0, Lt.jsxs)(Lt.Fragment, {
            children: [(0, Lt.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: Dt("plotsGame:journalBuilding")
            }), (0, Lt.jsx)(hV.g, {
              onClick: qt,
              children: Dt("plotsGame:journalPutAway")
            })]
          }), !Ht && !et.active && (0, Lt.jsx)(Qt, {
            onClick: () => {
              Ot(et.id)
            },
            children: Dt("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function FV(tt) {
      let {
        className: et,
        page: Vt,
        hidden: Ot,
        building: qt,
        journal: Dt
      } = tt;
      return (0, Lt.jsxs)("div", {
        ref: tt => {
          null !== tt && (tt.inert = Ot)
        },
        className: lt()("PlotsJournalSide", et),
        children: [void 0 !== Vt && (0, Lt.jsx)(LV, {
          page: Vt,
          building: qt,
          onBuild: Dt.build,
          onPutAway: Dt.putAway
        }), void 0 === Vt && (0, Lt.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var kV = Vt(1993);

    function GV(tt) {
      return Math.cos((0, kV.l)(tt))
    }

    function zV(tt) {
      return (0, kV.G)(Math.acos(ue.e.clamp(tt, -1, 1)))
    }

    function oV(tt, et, Vt, Ot, qt) {
      const Dt = Math.abs(et - tt),
        mt = (0, kV.G)(qt / (Vt * Math.abs(Math.sin((0, kV.l)(tt))))),
        dt = 450 * Math.min(1, Dt / Ot),
        jt = mt > 0 ? 3 * Dt / mt : 1 / 0;
      return Math.round(Math.max(120, Math.min(dt, jt)))
    }
    class rV {
      constructor() {
        this.samples = []
      }
      add(tt, et) {
        for (this.samples.push({
            x: tt,
            at: et
          }); et - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const tt = this.samples[0],
          et = this.samples[this.samples.length - 1];
        return et.at > tt.at ? (et.x - tt.x) / (et.at - tt.at) : 0
      }
    }

    function UV(tt) {
      return zV(new DOMMatrixReadOnly(getComputedStyle(tt).transform).m11)
    }

    function AV(tt, et) {
      tt.style.transform = `rotateY(${-et}deg)`, tt.classList.add("Turning")
    }

    function iV(tt, et, Vt) {
      const [Ot, qt] = (0, Dt.useState)(Vt), mt = (0, Dt.useRef)(null), dt = (0, Dt.useRef)(null), jt = (0, Dt.useRef)({
        Forward: null,
        Back: null
      }), Ht = et ? 2 : 1, Xt = et ? 180 : 90, Qt = Ot - Ot % Ht, lt = Qt > 0, Et = Qt + Ht < tt, ft = (0, Dt.useCallback)((() => {
        const tt = dt.current;
        return null === tt ? Qt : (dt.current = null, tt.animation.cancel(), (et = jt.current[tt.direction]).style.transform = "", et.classList.remove("Turning"), null === tt.next ? Qt : (qt(tt.next), tt.next));
        var et
      }), [Qt]), wt = (0, Dt.useCallback)(((tt, et, Vt, Ot) => {
        const qt = jt.current[tt],
          Dt = UV(qt),
          mt = et === ("Forward" === tt) ? Xt : 0;
        AV(qt, mt);
        const Qt = qt.animate([{
          transform: `rotateY(${-Dt}deg)`
        }, {
          transform: `rotateY(${-mt}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : oV(Dt, mt, qt.offsetWidth, Xt, mt > Dt ? -Vt : Vt),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        dt.current = {
          direction: tt,
          animation: Qt,
          next: et ? Ot + ("Forward" === tt ? Ht : -Ht) : null
        }, Qt.onfinish = () => {
          var tt;
          (null === (tt = dt.current) || void 0 === tt ? void 0 : tt.animation) === Qt && ft()
        }
      }), [Ht, Xt, ft]), yt = (0, Dt.useCallback)((et => {
        if (null !== mt.current) return;
        const Vt = ft();
        ("Forward" === et ? Vt + Ht < tt : Vt > 0) && wt(et, !0, 0, Vt)
      }), [ft, wt, Ht, tt]);
      (0, Dt.useEffect)((() => () => {
        var tt;
        null === (tt = dt.current) || void 0 === tt || tt.animation.cancel()
      }), []), (0, Dt.useEffect)((() => {
        const tt = tt => {
          var et;
          tt.pointerId !== (null === (et = mt.current) || void 0 === et ? void 0 : et.pointerId) || mt.current.following || (mt.current = null)
        };
        return window.addEventListener("pointerup", tt), () => {
          window.removeEventListener("pointerup", tt)
        }
      }), []);
      const Nt = (tt, et, Vt) => {
          const Ot = function(tt, et, Vt, Ot) {
            return (tt < 0 ? Vt : Ot) ? ue.e.clampAbs(tt, et) : Math.sign(tt) * et * (1 - 1 / (.55 * Math.abs(tt) / et + 1))
          }(tt.base + Vt, Ht * tt.width, Et, lt);
          return "Forward" === et ? Math.min(Ot, 0) : Math.max(Ot, 0)
        },
        Mt = (tt, et) => {
          const Vt = mt.current;
          if (mt.current = null, null === Vt.direction) return;
          Vt.speed.add(tt, et);
          const Ot = Vt.speed.get(),
            qt = Nt(Vt, Vt.direction, tt - Vt.x);
          wt(Vt.direction, null !== function(tt, et, Vt, Ot, qt) {
            if (Math.abs(et) >= .3 ? Math.sign(et) !== Math.sign(tt) : Math.abs(tt) < .5 * Vt) return null;
            const Dt = tt < 0 ? "Forward" : "Back";
            return ("Forward" === Dt ? Ot : qt) ? Dt : null
          }(qt, Ot, Ht * Vt.width, Et, lt), Ot, Qt)
        },
        bt = {
          onPointerDown: tt => {
            var et;
            if (!tt.isPrimary || 0 !== tt.button || null !== dt.current && null !== tt.target.closest("button")) return;
            const Vt = new rV;
            Vt.add(tt.clientX, tt.timeStamp);
            const Ot = jt.current.Forward.offsetWidth,
              qt = dt.current;
            dt.current = null;
            let Dt = 0;
            if (null !== qt) {
              const et = jt.current[qt.direction],
                Vt = UV(et);
              qt.animation.cancel(), AV(et, Vt), Dt = function(tt, et, Vt, Ot) {
                return (tt < 0 ? Vt : Ot) ? tt : Math.sign(tt) * et * (1 / (1 - Math.min(Math.abs(tt) / et, .99)) - 1) / .55
              }(function(tt, et, Vt, Ot) {
                return Vt * (GV(et) - GV("Forward" === tt ? 0 : Ot))
              }(qt.direction, Vt, Ot, Xt), Ht * Ot, Et, lt), tt.currentTarget.setPointerCapture(tt.pointerId)
            }
            mt.current = {
              pointerId: tt.pointerId,
              x: tt.clientX,
              y: tt.clientY,
              base: Dt,
              width: Ot,
              following: null !== qt,
              direction: null !== (et = null === qt || void 0 === qt ? void 0 : qt.direction) && void 0 !== et ? et : null,
              speed: Vt
            }
          },
          onPointerMove: tt => {
            const et = mt.current;
            if (null === et || tt.pointerId !== et.pointerId) return;
            if (0 === tt.buttons) return void Mt(tt.clientX, tt.timeStamp);
            const Vt = tt.clientX - et.x;
            !et.following && function(tt, et) {
              return Math.abs(tt) > 8 && Math.abs(tt) > Math.abs(et)
            }(Vt, tt.clientY - et.y) && (et.following = !0, et.direction = Vt < 0 ? "Forward" : "Back", tt.currentTarget.setPointerCapture(tt.pointerId)), null !== et.direction && (et.speed.add(tt.clientX, tt.timeStamp), AV(jt.current[et.direction], function(tt, et, Vt, Ot) {
              const qt = Vt * GV("Forward" === tt ? 0 : Ot) + et;
              return ue.e.clamp(zV(qt / Vt), 0, Ot)
            }(et.direction, Nt(et, et.direction, Vt), et.width, Xt)))
          },
          onPointerUp: tt => {
            var et;
            tt.pointerId === (null === (et = mt.current) || void 0 === et ? void 0 : et.pointerId) && Mt(tt.clientX, tt.timeStamp)
          },
          onPointerCancel: tt => {
            const et = mt.current;
            tt.pointerId === (null === et || void 0 === et ? void 0 : et.pointerId) && (mt.current = null, null !== et.direction && wt(et.direction, !1, 0, Qt))
          }
        };
      return {
        first: Qt,
        step: Ht,
        canGoBack: lt,
        canGoForward: Et,
        turnPage: yt,
        leaves: jt,
        pagesHandlers: bt
      }
    }

    function YV(tt, et) {
      return tt > et && tt >= 600
    }

    function BV(tt) {
      let {
        journal: et,
        hud: Vt,
        guide: Ot
      } = tt;
      const {
        t: qt
      } = (0, Xt.H)(), dt = (0, jt.h)(Pt, et.getPages()), Ht = (0, jt.h)(Ve, Vt.getGuide()), Qt = dt.find((tt => tt.active)), Et = (ft = Ht, wt = void 0 === Qt ? null : Qt.id, "active" === ft[0] && null === wt);
      var ft, wt;
      const yt = (0, WV.o)(YV),
        {
          first: Nt,
          step: Jt,
          canGoBack: Ct,
          canGoForward: ut,
          turnPage: Kt,
          leaves: ht,
          pagesHandlers: vt
        } = iV(dt.length, yt, (() => function(tt) {
          const et = tt.findIndex((tt => tt.active));
          return -1 !== et ? et : Math.max(0, tt.findIndex((tt => "open" === tt.state)))
        }(dt)));
      (0, Dt.useEffect)((() => {
        et.onOpened()
      }), [et]), (0, Mt.c)((tt => !Et && ("ArrowLeft" === tt.code || "ArrowRight" === tt.code) && !(0, bt.isTypingInInput)()), (tt => {
        tt.stopPropagation(), Kt("ArrowLeft" === tt.code ? "Back" : "Forward")
      }));
      const Wt = void 0 !== Qt,
        St = (tt, Vt, Ot) => (0, Lt.jsx)(FV, {
          className: tt,
          page: Vt >= 0 && Vt < dt.length ? dt[Vt] : void 0,
          hidden: Ot,
          building: Wt,
          journal: et
        });
      return (0, Lt.jsx)(vV.c, {
        close: mt.g,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, Lt.jsxs)("section", {
          className: lt()("PlotsJournal", {
            Spread: yt
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": qt("plotsGame:journalTitle"),
          children: [(0, Lt.jsx)(hV.j, {
            className: "PlotsJournalClose",
            onClick: mt.g
          }), "active" === Ht[0] && (0, Lt.jsx)(He, {
            className: "PlotsJournalGuideSkip",
            onSkip: Ot.skip
          }), Et && (0, Lt.jsx)(IV, {
            onBuild: et.build
          }), !Et && (0, Lt.jsx)(PV, {
            direction: "Back",
            disabled: !Ct,
            onTurn: Kt
          }), (0, Lt.jsx)("div", {
            hidden: Et,
            className: "PlotsJournalBookPages",
            ...vt,
            children: (0, Lt.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [yt && St("Left", Nt - 2, !0), St("Right", Nt + 2 * Jt - 1, !0), (0, Lt.jsxs)("div", {
                ref: tt => {
                  ht.current.Back = tt
                },
                className: "PlotsJournalLeaf Back",
                children: [St("Recto", Nt - 1, !0), yt && St("Verso", Nt, !1)]
              }), (0, Lt.jsxs)("div", {
                ref: tt => {
                  ht.current.Forward = tt
                },
                className: "PlotsJournalLeaf Forward",
                children: [St("Recto", Nt + Jt - 1, !1), yt && St("Verso", Nt + Jt, !0)]
              })]
            })
          }), !Et && (0, Lt.jsx)(PV, {
            direction: "Forward",
            disabled: !ut,
            onTurn: Kt
          })]
        })
      })
    }

    function pV(tt, et, Vt, Ot, qt) {
      const Dt = Math.hypot(...et.dir);
      if (!Number.isFinite(Dt) || 0 === Dt) return -1;
      const {
        from: mt,
        reach: dt,
        solid: jt
      } = et, Ht = [et.dir[0] / Dt, et.dir[1] / Dt, et.dir[2] / Dt], Xt = null === jt ? dt : Math.min(dt, function(tt, et, Vt) {
        const Ot = xV(tt, et, Vt);
        if (Ot !== 1 / 0) return Ot;
        return (Vt[0] + .5 - tt[0]) * et[0] + (Vt[1] + .5 - tt[1]) * et[1] + (Vt[2] + .5 - tt[2]) * et[2]
      }(mt, Ht, jt) + .75);
      let Qt = -1,
        lt = 1 / 0,
        Et = 1 / 0;
      for (let ft = 0; ft < tt.length; ft += 4) {
        const et = [tt[ft], tt[ft + 1], tt[ft + 2]],
          Dt = qt(ft) ? dt : Xt;
        let jt = -1,
          wt = xV(mt, Ht, et);
        if (wt > Dt) {
          const tt = [et[0] + .5 - mt[0], et[1] + .5 - mt[1], et[2] + .5 - mt[2]];
          if (wt = tt[0] * Ht[0] + tt[1] * Ht[1] + tt[2] * Ht[2], wt <= 0 || wt > Dt) continue;
          if (jt = Math.hypot(tt[0] - wt * Ht[0], tt[1] - wt * Ht[1], tt[2] - wt * Ht[2]), jt > .7 || !Ot(ft)) continue
        }(jt < lt || jt === lt && wt < Et) && Vt(ft) && (Qt = ft, lt = jt, Et = wt)
      }
      return Qt
    }

    function xV(tt, et, Vt) {
      let Ot = 0,
        qt = 1 / 0;
      for (let Dt = 0; Dt < 3; Dt++) {
        const mt = Vt[Dt] - tt[Dt];
        if (0 === et[Dt]) {
          if (mt > 0 || mt + 1 < 0) return 1 / 0;
          continue
        }
        const dt = mt / et[Dt],
          jt = (mt + 1) / et[Dt];
        Ot = Math.max(Ot, Math.min(dt, jt)), qt = Math.min(qt, Math.max(dt, jt))
      }
      return Ot <= qt ? Ot : 1 / 0
    }
    var TV = Vt(37117),
      gV = Vt(38309);
    const sV = [1, 1, 1];
    class nV {
      constructor(tt) {
        this.api = tt, this.meshes = null, this.shown = null
      }
      show(tt) {
        if (!(0, TV.d)(tt, this.shown))
          if (this.shown = null === tt ? null : [tt[0], tt[1], tt[2]], null !== this.meshes)
            for (const et of this.meshes) this.api.setGameMesh(et, null === tt ? {
              visible: !1
            } : {
              anchor: tt,
              visible: !0
            });
          else if (null !== tt) {
          const et = [gV.e, gV.e, gV.e, 0, 0, 0];
          this.meshes = [this.build([et], gV.f, tt), this.build((0, gV.b)(), gV.n, tt)]
        }
      }
      dispose() {
        for (const et of null !== (tt = this.meshes) && void 0 !== tt ? tt : []) {
          var tt;
          this.api.disposeGameMesh(et)
        }
        this.meshes = null, this.shown = null
      }
      build(tt, et, Vt) {
        const Ot = [],
          qt = [];
        for (const [Dt, mt, dt, jt, Ht, Xt] of tt)(0, pe.g)(Ot, qt, [jt + .5, Ht + .5, Xt + .5], [Dt, mt, dt]);
        return this.api.createGameMesh({
          positions: Ot,
          indices: qt
        }, {
          rgb: sV,
          alpha: et,
          onTop: !0
        }, Vt)
      }
    }

    function tO(tt, et) {
      const Vt = Ye.e.iy / 2;
      return tt[0] < et[0] + Vt && tt[0] + 1 > et[0] - Vt && tt[1] < et[1] + Ye.e.Yy && tt[1] + 1 > et[1] && tt[2] < et[2] + Vt && tt[2] + 1 > et[2] - Vt
    }

    function eO(tt, et) {
      return tt.getClientOption(et, "blockReach") + 1
    }
    class VO {
      constructor(tt, et, Vt) {
        this.api = tt, this.localPlayerId = et, this.foreseen = Vt, this.cells = [], this.playerCells = [], this.next = null
      }
      get() {
        return this.next
      }
      setCells(tt) {
        this.cells = tt
      }
      playerMoved() {
        return OO(this.api.getPositionView(this.localPlayerId)).some(((tt, et) => tt !== this.playerCells[et]))
      }
      il(tt) {
        const et = this.api.getPositionView(this.localPlayerId);
        return this.playerCells.splice(0, 1 / 0, ...OO(et)), this.next = this.pickFrom(null === tt ? [et[0], et[1] + 1, et[2]] : (0, TV.b)(tt), (() => !1)), this.next
      }
      pickFrom(tt, et) {
        const Vt = this.api.getPositionView(this.localPlayerId),
          Ot = [Vt[0], Vt[1] + Ye.e.Yy * Ye.e.playerEyeToHeightRatio, Vt[2]],
          qt = eO(this.api, this.localPlayerId),
          {
            cells: Dt
          } = this,
          mt = tt => [Dt[tt], Dt[tt + 1], Dt[tt + 2]],
          dt = function(tt, et, Vt, Ot, qt, Dt) {
            let mt = -1,
              dt = -1,
              jt = 1 / 0;
            for (let Ht = 0; Ht < tt.length; Ht += et) {
              const et = (Dt(Ht) ? 2 : 0) + (Ot(Ht) ? 1 : 0);
              if (et < dt || qt(Ht)) continue;
              const Xt = (tt[Ht] + .5 - Vt[0]) ** 2 + (tt[Ht + 1] + .5 - Vt[1]) ** 2 + (tt[Ht + 2] + .5 - Vt[2]) ** 2;
              (et > dt || Xt < jt) && (mt = Ht, dt = et, jt = Xt)
            }
            return mt
          }(Dt, 4, tt, (tt => 1 === Dt[tt + 3]), (tt => {
            const Ot = mt(tt);
            return tO(Ot, Vt) || this.foreseen.has(Ot.join()) || et(Ot)
          }), (tt => function(tt, et, Vt) {
            return (et[0] + .5 - tt[0]) ** 2 + (et[1] + .5 - tt[1]) ** 2 + (et[2] + .5 - tt[2]) ** 2 <= Vt ** 2
          }(Ot, mt(tt), qt)));
        return -1 === dt ? null : mt(dt)
      }
    }

    function OO(tt) {
      let [et, Vt, Ot] = tt;
      const qt = Ye.e.iy / 2;
      return [Math.floor(et), Math.floor(Vt), Math.floor(Ot), Math.floor(et - qt), Math.floor(et + qt), Math.floor(Vt + Ye.e.Yy), Math.floor(Ot - qt), Math.floor(Ot + qt)]
    }
    class qO {
      constructor(tt, et, Vt) {
        this.api = tt, this.localPlayerId = et, this.pickNext = Vt, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(tt) {
        const [et, , Vt] = tt.cameraDirection, Ot = Math.hypot(et, Vt);
        Ot > .001 && (this.heading = [et / Ot, Vt / Ot])
      }
      tapped(tt, et, Vt) {
        const Ot = eO(this.api, this.localPlayerId),
          {
            origin: qt,
            direction: Dt
          } = this.api.getActionRay(),
          mt = [...qt],
          dt = [
            [mt, [mt[0] + Dt[0] * Ot, mt[1] + Dt[1] * Ot, mt[2] + Dt[2] * Ot]]
          ];
        null !== tt && dt.push([mt, (0, TV.b)(tt)]), this.tap = {
          lines: dt,
          next: et,
          ms: Vt
        }
      }
      filled(tt, et) {
        this.tap = null, this.turnFrom(tt, et), this.retry(et)
      }
      arrived(tt, et) {
        const {
          tap: Vt
        } = this;
        if (null === Vt || et - Vt.ms > 1500) return null;
        const Ot = (0, TV.b)(tt);
        return (0, TV.d)(Vt.next, tt) || Vt.lines.some((tt => {
          let [et, Vt] = tt;
          return function(tt, et, Vt) {
            const Ot = [Vt[0] - et[0], Vt[1] - et[1], Vt[2] - et[2]],
              qt = [tt[0] - et[0], tt[1] - et[1], tt[2] - et[2]],
              Dt = Ot[0] ** 2 + Ot[1] ** 2 + Ot[2] ** 2,
              mt = 0 === Dt ? 0 : Math.min(1, Math.max(0, (qt[0] * Ot[0] + qt[1] * Ot[1] + qt[2] * Ot[2]) / Dt));
            return Math.hypot(qt[0] - Ot[0] * mt, qt[1] - Ot[1] * mt, qt[2] - Ot[2] * mt)
          }(Ot, et, Vt) <= .9
        })) ? (this.tap = null, this.turnFrom(tt, et), Vt.ms) : null
      }
      turnFrom(tt, et) {
        this.pending = {
          from: tt,
          ms: et,
          turnMs: Math.max(50, Math.min(250, et - this.lastFillMs))
        }, this.lastFillMs = et
      }
      retry(tt) {
        const {
          pending: et
        } = this;
        if (null === et) return;
        if (tt - et.ms > 1500) return void(this.pending = null);
        const Vt = this.pickNext((0, TV.b)(et.from), (tt => (0, TV.d)(tt, et.from)));
        if (null === Vt) return;
        this.pending = null;
        const {
          turning: Ot
        } = this;
        if (null !== Ot && tt < Ot.endMs && (0, TV.d)(Ot.to, Vt)) return;
        const qt = this.api.getActionRay().origin,
          Dt = [Vt[0] + .5 - qt[0], Vt[1] + .5 - qt[1], Vt[2] + .5 - qt[2]],
          mt = Math.hypot(Dt[0], Dt[2]);
        if (mt < .3) {
          const tt = Math.max(mt, .001);
          Dt[0] = this.heading[0] * tt, Dt[2] = this.heading[1] * tt
        }
        this.api.turnCamera(Dt, et.turnMs), this.turning = {
          to: Vt,
          endMs: tt + et.turnMs
        }
      }
    }
    class DO {
      constructor(tt, et, Vt, Ot) {
        this.api = tt, this.localPlayerId = et, this.juice = Vt, this.tracker = Ot, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.lastFilled = null, this.lastSeenFilled = null, this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = void 0, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new Be(tt), this.meshes = new tV(tt), this.outline = new nV(tt), this.nextCell = new VO(tt, et, this.foreseen), this.turn = new qO(tt, et, ((tt, et) => this.nextCell.pickFrom(tt, et)))
      }
      Qf(tt) {
        const et = "active" === tt[0] ? `${tt[1]}|${tt[3]}|${tt[4]}|${tt[5]}|${tt[6]}` : "";
        if ("active" !== tt[0]) "built" === tt[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , Vt, Ot, qt, Dt] = tt;
          et !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = Vt) : Vt === this.layerY ? this.burstUnlisted(Ot) : Vt > this.layerY && this.finishLayer(Vt), this.layerY = Vt, this.layerCells.has(Vt) || this.layerCells.set(Vt, Ot.filter(mO)), this.ghostCells = Ot, this.palette = qt, this.occupiedCells = Dt
        }
        et !== this.blueprint && (this.tracker.show("active" === tt[0] && tt[2] ? {
          id: tt[1],
          y: tt[4]
        } : null), this.blueprint = et, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((tt => this.api.blockNameToBlockId(tt))), this.chunkWatch.watch([...this.ghostCells.filter(mO), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(tt) {
        this.burstUnlisted([]), tt > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = tt)
      }
      BQ() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const tt = performance.now();
        let et = !1;
        for (const [Ot, qt] of this.foreseen) {
          var Vt;
          if (tt - qt > 1e3) this.foreseen.delete(Ot), et = !0, (null === (Vt = this.lastFilled) || void 0 === Vt ? void 0 : Vt.join()) === Ot && (this.lastFilled = this.lastSeenFilled)
        }(et || this.nextCell.playerMoved()) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(tt) {
        const et = new Set;
        for (let qt = 0; qt < tt.length; qt += 4) et.add(`${tt[qt]},${tt[qt+1]},${tt[qt+2]}`);
        const Vt = [],
          {
            ghostCells: Ot
          } = this;
        for (let qt = 0; qt < Ot.length; qt += 4) {
          const tt = `${Ot[qt]},${Ot[qt+1]},${Ot[qt+2]}`;
          !et.has(tt) && this.open.delete(tt) && Vt.push(this.filledCell(qt))
        }
        this.burst(Vt)
      }
      refresh() {
        const {
          ghostCells: tt,
          palette: et,
          occupiedCells: Vt
        } = this, Ot = new ne, qt = new Set, Dt = [], mt = [];
        let dt = 0;
        for (let jt = 0; jt < tt.length; jt += 4) {
          const [Vt, Ht, Xt, Qt] = [tt[jt], tt[jt + 1], tt[jt + 2], tt[jt + 3]], lt = this.api.getBlockId(Vt, Ht, Xt), Et = `${Vt},${Ht},${Xt}`, ft = Pe(this.blockIds[Qt], lt);
          !ft && Ze(lt) ? Ot.add(Vt, Ht, Xt, Fe(et[Qt]), Te, ie(et[Qt])) : ft ? this.open.has(Et) && Dt.push(this.filledCell(jt)) : Ot.add(Vt, Ht, Xt, se, ge), ft || dt++, !ft && this.api.isBlockInLoadedChunk(Vt, Ht, Xt) && (qt.add(Et), mt.push(Vt, Ht, Xt, Ze(lt) ? 0 : 1))
        }
        this.open = qt, this.nextCell.setCells(mt), this.tracker.update(this.layerY, this.topLayerY, dt);
        for (let jt = 0; jt < Vt.length; jt += 3) {
          const [tt, et, qt] = [Vt[jt], Vt[jt + 1], Vt[jt + 2]];
          Ze(this.api.getBlockId(tt, et, qt)) || Ot.add(tt, et, qt, se, ge)
        }
        this.meshes.show(Ot.toArray()), this.burst(Dt), this.showNext(), this.turn.retry(performance.now())
      }
      burst(tt) {
        const et = performance.now(),
          Vt = [];
        for (const [qt, Dt, mt] of tt) {
          const tt = [qt, Dt, mt];
          this.lastSeenFilled = tt, this.foreseen.delete(tt.join()) || Vt.push(tt)
        }
        const Ot = this.isHolding(et);
        for (const qt of Vt) {
          if (this.lastFilled = qt, Ot && this.pressFilled) {
            this.turn.filled(qt, et);
            continue
          }
          const tt = this.turn.arrived(qt, et);
          if (null !== tt) {
            this.pressFilled = Ot;
            for (const [et, Vt] of this.foreseen) Vt <= tt && this.foreseen.delete(et)
          }
        }
        this.juice.filled(tt)
      }
      showNext() {
        var tt;
        this.outline.show(null !== (tt = this.aimed) && void 0 !== tt ? tt : this.nextCell.il(this.lastFilled))
      }
      afterRender(tt) {
        var et;
        this.turn.look(tt);
        const Vt = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === Vt ? null : Vt.position), this.outline.show(null !== (et = this.aimed) && void 0 !== et ? et : this.nextCell.get())
      }
      isHolding(tt) {
        return null !== this.altMs && tt - this.altMs <= 500
      }
      attemptAltAction(tt) {
        const et = performance.now();
        if (this.isHolding(et) || (this.pressFilled = !1), this.altMs = et, this.pressFilled) return "preventPlacement";
        const Vt = this.findAimed(tt);
        if (null !== Vt) return this.foreseen.set(Vt.join(), et), this.lastFilled = Vt, this.aimed = null, this.showNext(), this.turn.filled(Vt, et), this.pressFilled = !0, "preventPlacement";
        {
          const Vt = this.nextCell.get();
          null !== Vt && this.turn.tapped(tt, Vt, et)
        }
      }
      holdPressOnEntity() {
        const tt = performance.now();
        this.pressFilled && this.isHolding(tt) && (this.altMs = tt)
      }
      findAimed(tt) {
        return function(tt, et, Vt, Ot, qt, Dt, mt) {
          const dt = tt.bVt(et),
            jt = null === dt || null === tt.blockNameToBlockId(dt.name, !0) ? null : dt.name,
            Ht = tt.getPositionView(et),
            {
              origin: Xt,
              direction: Qt
            } = tt.getActionRay(),
            lt = pV(Ot, {
              from: Xt,
              dir: Qt,
              reach: eO(tt, et),
              solid: Vt
            }, (et => {
              const Vt = [Ot[et], Ot[et + 1], Ot[et + 2]];
              return !Pe(qt[Ot[et + 3]], tt.getBlockId(...Vt)) && !mt.has(Vt.join()) && tt.isBlockInLoadedChunk(...Vt) && !tO(Vt, Ht)
            }), (tt => null === jt || jt === Le(qt[Ot[tt + 3]])), (tt => null !== Dt && Ot[tt] === Dt[0] && Ot[tt + 1] === Dt[1] && Ot[tt + 2] === Dt[2]));
          return -1 === lt ? null : [Ot[lt], Ot[lt + 1], Ot[lt + 2]]
        }(this.api, this.localPlayerId, tt, this.ghostCells, this.blockIds, this.nextCell.get(), this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(tt) {
        const {
          ghostCells: et
        } = this, [Vt, Ot, qt] = Fe(this.palette[et[tt + 3]]);
        return [et[tt], et[tt + 1], et[tt + 2], Vt, Ot, qt]
      }
    }

    function mO(tt, et) {
      return et % 4 !== 3
    }
    class dO {
      constructor(tt) {
        this.api = tt, this.sent = !1
      }
      BQ() {
        this.sent || dt.b.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
      }
    }
    var jO = Vt(4339),
      HO = Vt(39365);

    function XO(tt, et, Vt) {
      const Ot = [255 * tt, 255 * et, 255 * Vt],
        [qt, Dt, mt] = Ot.map((tt => tt + .4 * (255 - tt)));
      return {
        texture: "square_particle",
        uQ: 48,
        minLifeTime: .3 / HO.d,
        maxLifeTime: .55 / HO.d,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * HO.d * HO.d, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...Ot, 1],
          maxColor: [qt, Dt, mt, 1]
        }, {
          timeFraction: 1,
          minColor: [...Ot, 0],
          maxColor: [qt, Dt, mt, 0]
        }],
        blendMode: jO.f.Standard
      }
    }
    const QO = {
      texture: "glint",
      mipmaps: !1,
      uQ: 96,
      minLifeTime: .5 / HO.d,
      maxLifeTime: .9 / HO.d,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * HO.d * HO.d, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: jO.f.OneOne
    };
    class lO {
      constructor(tt, et) {
        this.api = tt, this.localPlayerId = et, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(tt) {
        if (this.api.particlesEnabled())
          for (const [et, Vt, Ot, qt, Dt, mt] of tt.slice(0, 3)) {
            const tt = `${qt},${Dt},${mt}`;
            let dt = this.chips.get(tt);
            void 0 === dt && (dt = this.api.createParticles(XO(qt, Dt, mt), {
              pos: [et + .5, Vt + .5, Ot + .5]
            }), this.chips.set(tt, dt));
            for (let et = 0; et < 8; et++) this.setPoint(et, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            dt.emitPoints([et + .5, Vt + .5, Ot + .5], this.points, 8)
          }
      }
      layerDone(tt) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const et = tt.length / 3;
        if (0 === et || !this.api.particlesEnabled()) return;
        const Vt = Math.min(et, 48),
          [Ot, qt, Dt] = [tt[0] + .5, tt[1] + 1, tt[2] + .5];
        let mt = 0;
        for (let dt = 0; dt < Vt; dt++) {
          const jt = 3 * Math.floor(dt * et / Vt);
          for (let et = 0; et < 2; et++) this.setPoint(mt++, tt[jt] + Math.random() - Ot, tt[jt + 1] + 1 - qt, tt[jt + 2] + Math.random() - Dt, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(QO, {
          pos: [Ot, qt, Dt]
        }), this.sparkles.emitPoints([Ot, qt, Dt], this.points, mt)
      }
      dispose() {
        var tt;
        for (const et of this.chips.values()) et.stop();
        this.chips.clear(), null === (tt = this.sparkles) || void 0 === tt || tt.stop(), this.sparkles = null
      }
      setPoint(tt, et, Vt, Ot, qt) {
        const Dt = 4 * tt;
        this.points[Dt] = et, this.points[Dt + 1] = Vt, this.points[Dt + 2] = Ot, this.points[Dt + 3] = qt
      }
    }
    const EO = "SpecialAction1",
      fO = "KeyY",
      wO = "KeyX";

    function yO(tt) {
      let {
        placement: et
      } = tt;
      const Vt = (0, jt.h)(jV, et.getView()),
        {
          t: Ot
        } = (0, Xt.H)(),
        {
          isTouchScreen: qt
        } = (0, dt.k)(["isTouchScreen"]),
        mt = (0, Dt.useContext)(Ct),
        Qt = null !== Vt,
        wt = Qt && !Vt.blocked && !Vt.waiting;
      if ((0, Mt.c)((tt => Qt && !tt.repeat && !(0, bt.isTypingInInput)() && !(0, Et.q)() && !qt), (tt => {
          const Vt = function(tt, et, Vt) {
            if (tt === wO) return et.stop;
            if (tt === fO) return Vt ? et.build : aO;
            return Ht.r[EO].includes(tt) ? et.rotate : null
          }(tt.code, et, wt);
          null !== Vt && (tt.stopPropagation(), Vt())
        })), !Qt) return null;
      let yt = qt ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return Vt.blocked ? yt = "plotsGame:placementOffPlot" : Vt.toClear > 0 ? yt = "plotsGame:placementClear" : "placeSpot" !== mt.hint && "placeBuild" !== mt.hint || (yt = null), (0, Lt.jsx)(ft.g, {
        placement: "bottom",
        children: (0, Lt.jsxs)("div", {
          ref: mt.placementCardRef,
          className: "PlotsPlacementCard",
          children: [(0, Lt.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: Ot(Wt(Vt.id).displayName.translationKey)
          }), null !== yt && (0, Lt.jsx)("div", {
            className: lt()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: Vt.refusals > 0
            }),
            children: Ot(yt)
          }, Vt.refusals), (0, Lt.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, Lt.jsxs)(hV.f, {
              onClick: et.rotate,
              children: [(0, Lt.jsx)(NO, {
                noaAction: EO
              }), Ot("plotsGame:placementRotate")]
            }), (0, Lt.jsxs)(hV.G, {
              onClick: et.stop,
              children: [(0, Lt.jsx)(NO, {
                keyCode: wO
              }), Ot("general:cancel")]
            }), (0, Lt.jsx)("span", {
              ref: mt.buildRef,
              className: lt()("PlotsPlacementBuild", {
                Pulse: "placeBuild" === mt.hint && wt && qt
              }),
              children: (0, Lt.jsxs)(hV.m, {
                disabled: !wt,
                onClick: et.build,
                children: [(0, Lt.jsx)(NO, {
                  keyCode: fO
                }), Ot("plotsGame:placementBuild")]
              })
            })]
          })]
        })
      })
    }

    function NO(tt) {
      return (0, Lt.jsx)(Nt.d, {
        className: "PlotsPlacementKey",
        ...tt
      })
    }

    function aO() {}
    var MO = Vt(2435),
      bO = Vt(36941),
      JO = Vt(2063),
      CO = Vt(1354);
    const uO = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function KO(tt) {
      let {
        hud: et
      } = tt;
      const Vt = (0, jt.h)(ee, et.getPlot()),
        [Ot, qt] = (0, Dt.useState)(null),
        mt = (0, bO.j)(Ot);
      if ("none" === Vt[0]) return null;
      const [, dt, Ht, Xt, Qt, Et] = Vt;
      return (0, Lt.jsx)("div", {
        className: lt()("PlotsPlotBannerContainer", {
          Below: mt
        }),
        children: (0, Lt.jsx)(hO, {
          plotX: dt,
          plotZ: Ht,
          ownerName: Xt,
          ownerId: Qt,
          relation: Et,
          plaqueRef: qt
        }, `${dt},${Ht}`)
      })
    }

    function hO(tt) {
      var et, Vt;
      let {
        plotX: Ot,
        plotZ: qt,
        ownerName: Dt,
        ownerId: mt,
        relation: dt,
        plaqueRef: jt
      } = tt;
      const {
        t: Ht
      } = (0, Xt.H)(), Qt = (0, JO.h)("hiddenPlayerNames"), Et = (0, JO.h)("players"), ft = null === mt ? null : null !== (et = null === (Vt = Et.byId[mt]) || void 0 === Vt ? void 0 : Vt.cosmetics) && void 0 !== et ? et : null, yt = Ht("plotsGame:plotBannerCoords", {
        x: Ot,
        z: qt
      }), Nt = "own" === dt || null !== Dt;
      return (0, Lt.jsxs)("div", {
        ref: jt,
        className: lt()("PlotsPlotBanner", {
          Own: "own" === dt,
          Shared: "shared" === dt
        }),
        role: "status",
        children: [(0, Lt.jsxs)("span", {
          className: lt()("PlotsPlotBannerSeal", {
            Face: null !== ft
          }),
          children: [null !== ft && (0, Lt.jsx)(MO.c, {
            cosmetics: ft
          }), null === ft && (0, Lt.jsx)(wt.b, {
            name: uO[dt]
          })]
        }), (0, Lt.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, Lt.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === dt && Ht("plotsGame:plotBannerYours"), "own" !== dt && null !== Dt && Ht("plotsGame:plotBannerOwner", {
              name: (0, CO.f)(Dt, Qt)
            }), !Nt && yt]
          }), Nt && (0, Lt.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [yt, "shared" === dt && (0, Lt.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: Ht("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }
    const vO = function(tt, et, Vt, Ot) {
      let {
        localPlayerId: qt
      } = Ot;
      const dt = new qe;
      let jt = null,
        Ht = null,
        Xt = null,
        Qt = null,
        lt = null,
        Et = null;
      const ft = [];
      return {
        onCreate: tt => {
          jt = new lO(tt, qt);
          const et = new te;
          Ht = new DO(tt, qt, jt, et), Xt = new XV(tt, qt), Qt = new Zt(tt, Xt), lt = new KV(tt, qt, Ht.nextCell), Et = new dO(tt), ft.push((0, mt.q)((0, Dt.createElement)(JV, {
            hud: dt,
            guide: lt,
            tracker: et,
            placement: Xt
          }, (0, Dt.createElement)(KO, {
            hud: dt
          }), (0, Dt.createElement)(kt, {
            journal: Qt
          }), (0, Dt.createElement)(yV, {
            placement: Xt
          }), (0, Dt.createElement)(yO, {
            placement: Xt
          })), {
            content: (0, Dt.createElement)(BV, {
              journal: Qt,
              hud: dt,
              guide: lt
            })
          }))
        },
        BQ: () => {
          Et.BQ(), Ht.BQ(), Xt.BQ(), Qt.BQ()
        },
        onPlayerAttemptAltAction: (tt, et, Vt, Ot, qt, Dt) => {
          if (null !== Dt) return void Ht.holdPressOnEntity();
          const mt = void 0 === et ? null : [et, Vt, Ot];
          return Ht.attemptAltAction(mt)
        },
        onPlayerClickUp: () => {
          Ht.endPress()
        },
        onAfterRender: (tt, et) => {
          Xt.afterRender(et), Ht.afterRender(et), lt.afterRender(et)
        },
        onClose: () => {
          for (const tt of ft) tt();
          jt.dispose(), Ht.dispose(), Xt.dispose(), jt = null, Ht = null, Xt = null, Qt = null, lt = null, Et = null
        },
        onReceivedMessageFromServer: (tt, et) => {
          if ("plotsPlot" === tt) dt.receivePlot(et);
          else if ("plotsBlueprint" === tt) {
            const tt = et;
            Ht.Qf(tt), Xt.Qf(tt)
          } else "plotsJournal" === tt ? Qt.Qf(et) : "plotsJournalOpen" === tt ? Qt.openFromServer(et) : "plotsPreviewEnd" === tt ? Xt.endFromServer() : "plotsGuide" === tt ? dt.receiveGuide(et) : "plotsGuideDone" === tt && dt.receiveGuideDone()
        }
      }
    }
  },
  38718: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt
    });
    var Ot = Vt(38716);
    const qt = 5,
      Dt = [0, 0, 0],
      mt = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function dt(tt, et, Vt, dt, jt, Ht) {
      let [Xt, Qt, lt] = dt;
      const Et = (Xt + .5 - Vt[0]) ** 2 + (Qt - Vt[1]) ** 2 + (lt + .5 - Vt[2]) ** 2;
      let ft = null;
      Et <= Ht ** 2 && (Dt[0] = Xt + .5, Dt[1] = Qt + jt, Dt[2] = lt + .5, ft = et.projectWorldPosToViewport(Dt));
      const wt = null !== ft && ft.x > -qt && ft.x < 100 + qt && ft.y > -qt && ft.y < 100 + qt;
      return (0, Ot.g)(tt, !wt), wt ? (mt.x = ft.x, mt.y = ft.y, mt.distSq = Et, mt) : null
    }
  },
  39365: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot,
      g: () => Dt
    });
    const Ot = 1 / .6,
      qt = {
        kind: "smokePuff"
      };
    class Dt {
      constructor(tt, et, Vt) {
        this.style = tt, this.uQ = et, this.half = Vt, this.particles = null, this.lastFrame = -1
      }
      emit(tt, et, Vt) {
        let Dt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return Vt !== this.lastFrame && (this.lastFrame = Vt, this.particles || (this.particles = tt.createParticles(function(tt, et) {
          const [
            [Vt, Dt, mt],
            [dt, jt, Ht]
          ] = tt.colours;
          return {
            texture: tt.soft ? qt : "square_particle",
            uQ: et,
            minLifeTime: tt.life[0] / Ot,
            maxLifeTime: tt.life[1] / Ot,
            minEmitPower: tt.power[0] * Ot,
            maxEmitPower: tt.power[1] * Ot,
            minSize: tt.size[0],
            maxSize: tt.size[1],
            emitRate: 0,
            gravity: [0, tt.lift * Ot * Ot, 0],
            dir1: [-tt.spread, 1, -tt.spread],
            dir2: [tt.spread, 1, tt.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Vt, Dt, mt, tt.alpha],
              maxColor: [dt, jt, Ht, tt.alpha]
            }, {
              timeFraction: 1,
              minColor: [Vt, Dt, mt, 0],
              maxColor: [dt, jt, Ht, 0]
            }],
            blendMode: tt.blendMode
          }
        }(this.style, this.uQ), {
          pos: et,
          half: this.half
        })), this.particles.moveTo(et, this.half), this.particles.emit(Dt), !0)
      }
      dispose() {
        var tt;
        null === (tt = this.particles) || void 0 === tt || tt.stop(), this.particles = null
      }
    }
  },
  38716: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt,
      g: () => Dt
    });
    const Ot = new WeakMap;

    function qt(tt) {
      let et = Ot.get(tt);
      return et || (et = {
        hidden: tt.hidden,
        x: NaN,
        y: NaN
      }, Ot.set(tt, et)), et
    }

    function Dt(tt, et) {
      const Vt = qt(tt);
      Vt.hidden !== et && (Vt.hidden = et, tt.hidden = et)
    }

    function mt(tt, et, Vt) {
      const Ot = qt(tt);
      Ot.x === et && Ot.y === Vt || (Ot.x = et, Ot.y = Vt, tt.style.translate = `${et}vw ${Vt}vh`)
    }
  },
  37117: (tt, et, Vt) => {
    function Ot(tt, et) {
      return null === tt || null === et ? tt === et : tt[0] === et[0] && tt[1] === et[1] && tt[2] === et[2]
    }

    function qt(tt) {
      return [tt[0] + .5, tt[1] + .5, tt[2] + .5]
    }
    Vt.d(et, {
      b: () => qt,
      d: () => Ot
    })
  },
  37172: (tt, et, Vt) => {
    function Ot(tt) {
      return tt.includes("Leaf Bed")
    }

    function qt(tt) {
      return / Bed(?: Head)?(?:\||$)/.test(tt) && !Ot(tt)
    }

    function Dt(tt) {
      return tt.includes(" Strongbed")
    }

    function mt(tt) {
      return Ot(tt) || qt(tt) || Dt(tt)
    }
    Vt.d(et, {
      e: () => mt,
      i: () => Ot,
      l: () => Dt,
      o: () => qt
    })
  },
  37164: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ht
    });
    var Ot = Vt(37172),
      qt = Vt(9425);
    const Dt = [],
      mt = [],
      dt = [],
      jt = [];
    for (const Xt of Object.keys(qt.l))(0, Ot.i)(Xt) ? Dt.push(Xt) : (0, Ot.o)(Xt) && mt.push(Xt), (0, Ot.l)(Xt) && dt.push(Xt), (Xt.includes(" Bed Head") || Xt.includes(" Strongbed Head")) && jt.push(Xt);
    const Ht = {
      leafBeds: Dt,
      woolBeds: mt,
      strongBeds: dt,
      beds: [...Dt, ...mt, ...dt],
      bedHeads: jt,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  38755: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);