export const id = 28;
export const ids = [28];
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
  37323: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ze,
      f: () => de,
      i: () => We,
      m: () => ge,
      o: () => Oe
    });
    var ye = He(59),
      be = He(1053),
      Me = He.n(be),
      Ke = He(3416),
      Ue = He(335),
      Fe = He(2532),
      Je = He(27),
      oe = He(2018),
      Re = He(35),
      ke = He(2029),
      qe = He(18),
      fe = He(2043),
      Te = He(1385),
      pe = He(9555),
      Xe = He(2061),
      ze = He(1127),
      Be = He(1228);
    const Ee = 7e3;

    function ge() {
      const {
        loadingOverlayVisible: ee,
        openInGameMenuName: ie,
        openEverythingMenuName: He
      } = (0, qe.m)(["loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]);
      return ee || null !== ie || null !== He
    }

    function Oe(ee, ie, He) {
      const be = (0, ye.useRef)(He);
      be.current = He;
      const Me = (0, ye.useRef)({
        card: ee,
        ms: 0
      });
      (0, ye.useEffect)((() => {
        if (ie || null === ee) return;
        Me.current.card !== ee && (Me.current = {
          card: ee,
          ms: 0
        });
        const He = Me.current,
          ye = performance.now(),
          Ke = setTimeout((() => {
            be.current()
          }), Ee - He.ms);
        return () => {
          clearTimeout(Ke), He.ms += performance.now() - ye
        }
      }), [ie, ee])
    }
    const de = (0, ye.memo)((function() {
      const {
        isTouchScreen: ee
      } = (0, qe.m)(["isTouchScreen"]), ie = (0, Te.A)();
      (0, Ke.b)();
      const He = (0, Fe.i)("showBasicMovementControls"),
        [be, oe] = (0, ye.useState)("movement"),
        ke = "movement" === be,
        fe = ie && !1 !== He;
      (0, ye.useEffect)((() => {
        "padActions" !== be || fe || oe("done")
      }), [be, fe]);
      const pe = ge();
      Oe("done" === be ? null : be, pe, (() => {
        oe("movement" === be && (0, Te.n)() ? "padActions" : "done")
      }));
      const Xe = Re.i.getItem(Ue.Ob) > 2,
        ze = !Xe && (!ee || ie) && ke && !1 !== He;
      return (0, ye.useEffect)((() => {
        ze && !pe && Je.h.yR("controlsTutorialShown", "movement")
      }), [ze, pe]), Xe ? (0, Be.jsx)(we, {
        showingMovementControls: !1
      }) : (0, Be.jsxs)(Be.Fragment, {
        children: [ze ? (0, Be.jsxs)("div", {
          className: Me()("ControlsTutorialDiv", {
            Covered: pe
          }),
          children: [(0, Be.jsx)(We, {}), (0, Be.jsx)(Ze, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, Be.jsx)(Ze, {
            header: "Jump",
            noaAction: "jump"
          })]
        }) : null, "padActions" === be && fe && (0, Be.jsx)(te, {
          covered: pe
        }), (0, Be.jsx)(we, {
          showingMovementControls: "done" !== be
        })]
      })
    }));

    function We() {
      const ee = (0, Te.A)();
      return (0, Be.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Be.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), ee && (0, Be.jsx)(fe.e, {
          noaAction: "forward"
        }), !ee && (0, Be.jsxs)(Be.Fragment, {
          children: [(0, Be.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, Be.jsx)(fe.e, {
              noaAction: "forward"
            })
          }), (0, Be.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, Be.jsx)(fe.e, {
              noaAction: "left"
            }), (0, Be.jsx)(fe.e, {
              noaAction: "backward"
            }), (0, Be.jsx)(fe.e, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function te(ee) {
      let {
        covered: ie
      } = ee;
      const {
        t: He
      } = (0, ze.v)(), ye = (0, Fe.i)("useInventory");
      return (0, Be.jsxs)("div", {
        className: Me()("ControlsTutorialDiv", {
          Covered: ie
        }),
        children: [(0, Be.jsx)(Ze, {
          header: He("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, Be.jsx)(Ze, {
          header: He("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== ye && (0, Be.jsx)(Ze, {
          header: He("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, Be.jsx)(Ze, {
          header: He("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function Ze(ee) {
      let {
        header: ie,
        noaAction: He
      } = ee;
      return (0, Be.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Be.jsx)("div", {
          className: "KeyHeader",
          children: ie
        }), (0, Be.jsx)(fe.e, {
          noaAction: He
        })]
      })
    }

    function we(ee) {
      let {
        showingMovementControls: ie
      } = ee;
      const {
        isTouchScreen: He
      } = (0, qe.m)(["isTouchScreen"]), be = (0, Te.A)(), Me = (0, Xe.d)("OpenShop"), [Ke, Ue] = (0, ye.useState)(!1), fe = `SeenShopControls|${(0,ke.g)("connectedGame",(ee=>ee.gameNameWithVariation))}`, ze = () => (!(0, Te.n)() || null !== (0, pe.c)("OpenShop")) && !Re.i.getItem(fe) && oe.c.get("shopInfo") && !ie, Ee = () => (Ue(!0), Re.i.setItem(fe, !0), (0, Te.n)() || Je.h.yR("showShopTouchTutorial"), setTimeout((() => {
        Ue(!1)
      }), 7e3));
      (0, ye.useEffect)((() => {
        let ee;
        const ie = Je.h.subscribe("showShopTutorial", (() => {
          ze() && (ee = Ee())
        }));
        return () => {
          clearTimeout(ee), Je.h.unsubscribe(ie)
        }
      }), [ie]);
      const ge = (0, ye.useRef)();
      return (0, Fe.g)("currencyAmounts", (ee => {
        if (ze()) {
          let He = !1;
          const ye = oe.c.get("shopInfo");
          for (const be in ye) {
            for (const Me in ye[be].items) {
              var ie;
              const Ke = ye[be].items[Me];
              if (void 0 !== Ke.currency && ee[Ke.currency] && Ke.cost <= ee[Ke.currency].amount && (null === (ie = Ke.hidden) || void 0 === ie || !ie)) {
                He = !0;
                break
              }
            }
            if (He) break
          }
          He && (ge.current = Ee())
        }
      })), (0, ye.useEffect)((() => () => {
        clearTimeout(ge.current)
      }), [ie]), !Ke || be && !Me ? null : (0, Be.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: He && !be ? null : (0, Be.jsx)(Ze, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
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
  40282: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      d: () => be,
      h: () => Me
    });
    var ye = He(59);

    function be(ee) {
      return Ue(ee, Fe)
    }

    function Me(ee) {
      return Ue(ee, Je)
    }

    function Ke(ee) {
      return `${Math.floor(ee/60)}:${String(ee%60).padStart(2,"0")}`
    }

    function Ue(ee, ie) {
      const [, He] = (0, ye.useState)(null);
      return (0, ye.useEffect)((() => {
        if (0 === ee) return;
        const ye = window.setInterval((() => {
          const ye = ie(ee);
          He((ie => (null === ie || void 0 === ie ? void 0 : ie.endsAt) === ee && ie.value === ye ? ie : {
            endsAt: ee,
            value: ye
          }))
        }), 250);
        return () => {
          window.clearInterval(ye)
        }
      }), [ee, ie]), ie(ee)
    }

    function Fe(ee) {
      return (ee - performance.now()) / 1e3
    }

    function Je(ee) {
      return Math.max(0, Math.ceil(Fe(ee)))
    }
  },
  9555: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ue,
      g: () => Je,
      h: () => Re,
      l: () => oe,
      m: () => Fe,
      n: () => qe
    });
    var ye = He(27),
      be = He(2068),
      Me = He(1403),
      Ke = He(1385);
    const Ue = ee => {
        var ie, He;
        return (0, Ke.n)() && null !== (ie = null === (He = (0, Me.f)()) || void 0 === He ? void 0 : He.getGlyphForNoaAction(ee)) && void 0 !== ie ? ie : null
      },
      Fe = "controllerGlyph:",
      Je = ee => {
        var ie, He;
        return null !== (ie = null === (He = (0, Me.f)()) || void 0 === He ? void 0 : He.getPadGlyphIconName(ee)) && void 0 !== ie ? ie : `${Fe}xbox/${ee}`
      },
      oe = ee => ee.startsWith(Fe),
      Re = ee => {
        var ie, He;
        return oe(ee) && null !== (ie = null === (He = (0, Me.f)()) || void 0 === He ? void 0 : He.getPadGlyphIconUrl(ee)) && void 0 !== ie ? ie : null
      },
      ke = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", Ke.c, be.f, be.e],
      qe = ee => {
        const ie = ke.map((ie => ye.h.subscribe(ie, ee)));
        return () => {
          for (const ee of ie) ye.h.unsubscribe(ee)
        }
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
  39370: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ke
    });
    const ye = 4,
      be = 12e3,
      Me = 1e3;
    class Ke {
      constructor() {
        let {
          limit: ee = ye,
          windowMs: ie = be,
          spacingMs: He = Me,
          now: Ke = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = ee, this.windowMs = ie, this.spacingMs = He, this.now = Ke
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const ee of this.priority) ee.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const ee = this.now();
        this.sent.push(ee), this.lastSentAt = ee, this.schedule(), this.notify()
      }
      addPriority(ee) {
        return this.priority.add(ee), () => {
          this.priority.delete(ee)
        }
      }
      subscribe(ee) {
        return this.listeners.add(ee), () => {
          this.listeners.delete(ee)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const ee of this.priority)
          if (ee.waiting()) return !0;
        return !1
      }
      prune() {
        const ee = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= ee;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const ee = this.now(),
          ie = this.lastSentAt + this.spacingMs,
          He = Math.min(ie > ee ? ie : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        He !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, He - ee)))
      }
      notify() {
        for (const ee of this.listeners) ee()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  37427: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      e: () => Te,
      f: () => pe,
      h: () => Ue,
      j: () => ke,
      l: () => Xe,
      n: () => Re,
      p: () => Be,
      r: () => fe,
      u: () => ze
    });
    var ye = He(18),
      be = He(27);
    const Me = "clientGameInventoryButtonsChanged",
      Ke = new Map;

    function Ue() {
      return [...Ke.values()].sort(((ee, ie) => {
        var He, ye;
        return (null !== (He = ee.order) && void 0 !== He ? He : 0) - (null !== (ye = ie.order) && void 0 !== ye ? ye : 0)
      }))
    }
    let Fe = null;

    function Je(ee) {
      Fe = ee
    }
    let oe = !1;

    function Re(ee) {
      oe = !0;
      try {
        ee.onClick()
      } finally {
        oe = !1
      }
      ee.panel && "clientGame" === ye.e.get("openInGameMenuName") && Je(ee.id)
    }

    function ke() {
      return oe
    }

    function qe() {
      return Ue().filter((ee => ee.panel && !ee.disabled))
    }

    function fe(ee) {
      const ie = qe(),
        He = ie.findIndex((ee => ee.id === Fe));
      return !(He < 0 || ie.length < 2) && (Re(ie[(He + ee + ie.length) % ie.length]), !0)
    }

    function Te() {
      return null !== Fe && qe().length > 1
    }

    function pe() {
      Je(null)
    }

    function Xe() {
      "inventory" !== ye.e.get("openInGameMenuName") && Je(null)
    }

    function ze() {
      const ee = Fe;
      return Je(null), ee
    }

    function Be(ee) {
      return Ke.set(ee.id, ee), be.h.yR(Me, Ue(), !0), () => {
        Ke.get(ee.id) === ee && (Ke.delete(ee.id), be.h.yR(Me, Ue()))
      }
    }
  },
  37424: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ue,
      d: () => ze,
      h: () => pe,
      l: () => Xe,
      m: () => ke,
      p: () => Je,
      s: () => Te,
      v: () => qe,
      z: () => oe
    });
    var ye = He(18),
      be = He(27),
      Me = He(1246),
      Ke = He(37427);
    const Ue = "clientGameUiChanged";
    let Fe = null;

    function Je() {
      return Fe
    }

    function oe(ee, ie) {
      const He = {
        content: ee,
        menu: ie
      };
      return Fe = He, be.h.yR(Ue, Fe, !0), () => {
        Fe === He && (Fe = null, fe = !1, pe(), be.h.yR(Ue, null))
      }
    }
    let Re = null;

    function ke() {
      return Re
    }

    function qe(ee) {
      return Re = ee, () => {
        Re === ee && (Re = null)
      }
    }
    let fe = !1;

    function Te() {
      const ee = ye.e.get("openInGameMenuName");
      "clientGame" !== ee && (fe = "inventory" === ee), (0, Ke.j)() || (0, Ke.f)(), (0, Me.w)(Me.c), ye.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function pe() {
      Be(!1)
    }

    function Xe() {
      Be(fe)
    }

    function ze() {
      fe && Be(!1)
    }

    function Be(ee) {
      "clientGame" === ye.e.get("openInGameMenuName") && ye.e.set({
        openInGameMenuName: ee ? "inventory" : null
      }), ee || (0, Ke.f)(), fe = !1
    }
  },
  40422: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => ZH
    });
    var ye = He(186);
    const be = ["gingerbreadLane", "toyRow", "iceRink", "carousel", "greatTree", "cocoaCorner", "lanternWalk", "marketGate", "santasGrotto"];
    var Me = He(59),
      Ke = He(37424),
      Ue = He(1053),
      Fe = He.n(Ue),
      Je = He(18),
      oe = He(1385),
      Re = He(35),
      ke = He(1127),
      qe = He(37323),
      fe = He(1432),
      Te = He(27);
    var pe = He(39324),
      Xe = He(39320);
    const ze = 2 * Math.PI * 17;

    function Be(ee, ie, He) {
      const {
        santaMarketMinX: ye,
        santaMarketMinZ: be,
        santaMarketSize: Me
      } = ee;
      return (0, Xe.b)(ie, He, {
        mapMinX: ye,
        mapMaxX: ye + Me,
        mapMinZ: be,
        mapMaxZ: be + Me
      })
    }

    function Ee(ee, ie, He) {
      return function(ee, ie, He, ye, be) {
        const Me = He / 3,
          Ke = ee => Math.min(2, Math.max(0, Math.floor(ee / Me)));
        return 3 * Ke(be - ie) + 2 - Ke(ye - ee)
      }(ee.santaMarketMinX, ee.santaMarketMinZ, ee.santaMarketSize, ie, He)
    }
    const ge = "secretSantaDistrictEntered",
      Oe = "data-here";
    class de {
      constructor() {
        this.here = -1, this.lastLeft = 0, this.lastTop = 0, this.lastAt = 0, this.drawnHere = -1, this.drawnCell = null, this.bannerAt = [], this.banner = null, this.bannerSeq = 0
      }
      reset() {
        this.here = -1, this.bannerAt = [], this.setBanner(null)
      }
      unbind() {
        this.drawnHere = -1, this.drawnCell = null
      }
      getBanner() {
        return this.banner && performance.now() - this.banner.at < 2200 ? this.banner : null
      }
      update(ee, ie, He, ye, be) {
        const Me = performance.now(),
          Ke = 100 / ee.santaMarketSize,
          Ue = 4 + .008 * Math.min(1e3, Me - this.lastAt),
          Fe = Math.hypot(ie - this.lastLeft, He - this.lastTop) > Ue * Ke;
        this.lastLeft = ie, this.lastTop = He, this.lastAt = Me;
        const Je = Fe ? -1 : this.here,
          oe = function(ee, ie, He, ye, be) {
            if (ee >= 0) {
              const ie = 100 / 3,
                Me = ee % 3 * ie,
                Ke = Math.floor(ee / 3) * ie;
              if (He >= Me - be && He <= Me + ie + be && ye >= Ke - be && ye <= Ke + ie + be) return ee
            }
            return ie
          }(Je, ye, ie, He, 1.5 * Ke);
        if (oe !== this.here) {
          var Re, ke;
          this.here = oe;
          const ie = ee.santaMarketDistricts[oe];
          Je >= 0 && Me - (null !== (Re = this.bannerAt[oe]) && void 0 !== Re ? Re : -1 / 0) >= 8e3 ? (this.bannerAt[oe] = Me, this.bannerSeq++, this.setBanner({
            key: ie,
            seq: this.bannerSeq,
            at: Me
          })) : (null === (ke = this.getBanner()) || void 0 === ke ? void 0 : ke.key) !== ie && this.setBanner(null)
        }
        var qe, fe;
        this.here !== this.drawnHere && (null === (qe = this.drawnCell) || void 0 === qe || qe.removeAttribute(Oe), this.drawnCell = be.querySelector(`[data-district="${this.here}"]`), null === (fe = this.drawnCell) || void 0 === fe || fe.setAttribute(Oe, ""), this.drawnHere = this.here)
      }
      dispose() {
        this.unbind(), this.reset()
      }
      setBanner(ee) {
        null === ee && null === this.banner || (this.banner = ee, Te.h.yR(ge, ee))
      }
    }
    class We {
      constructor() {
        this.state = "idle", this.ownRing = !1, this.faded = !1, this.lastPressAt = -1 / 0, this.predictedAt = 0, this.timedOutPressAt = null, this.cooldownUntil = 0, this.averageRoundTrip = null, this.recentRoundTrips = []
      }
      press(ee, ie, He) {
        var ye, be;
        this.forgetOldRoundTrips(ee);
        const Me = ee - this.lastPressAt;
        if (this.lastPressAt = ee, Me < this.quietMs() || this.awaitingTimedOut(ee) || "idle" !== this.state || He || ee < this.cooldownUntil || null === ie) return 0;
        const Ke = Math.max(0, ie.awaySpeed) * ((null !== (ye = this.averageRoundTrip) && void 0 !== ye ? ye : 300) / 1e3);
        return ie.distance + Ke > 3.5 ? 0 : (this.state = "predicted", this.predictedAt = ee, this.ownRing = !0, this.faded = !1, 500 + (null !== (be = this.averageRoundTrip) && void 0 !== be ? be : 0))
      }
      turnedAway(ee, ie, He) {
        if (!this.mayTurnAway(ee)) return !1;
        const ye = 4.6 * (this.averageRoundTrip + 150) / 1e3;
        return !(ie <= 40 + (ye >= He ? 180 : 180 * Math.asin(ye / He) / Math.PI) && He <= 5 + Math.max(.5, ye)) && (this.faded = !0, !0)
      }
      mayTurnAway(ee) {
        return null !== this.averageRoundTrip && "idle" !== this.state && this.ownRing && !this.faded && ee - this.predictedAt <= 350
      }
      DR(ee, ie, He) {
        const ye = ie > 0 || !He,
          be = "predicted" === this.state;
        return He && (this.cooldownUntil = ee + 1e3), ye && be ? this.learnRoundTrip(ee, ee - this.predictedAt) : ye && this.awaitingTimedOut(ee) && (this.timedOutPressAt = null), ie > 0 ? (this.state = "confirmed", be ? null : (this.ownRing = !1, this.faded = !1, {
          kind: "start",
          ms: ie
        })) : "idle" === this.state ? null : (this.state = "idle", this.faded && !He ? null : {
          kind: "end",
          done: He
        })
      }
      expired(ee) {
        var ie;
        return !("predicted" !== this.state || ee - this.predictedAt < 1200 + (null !== (ie = this.averageRoundTrip) && void 0 !== ie ? ie : 0)) && (this.state = "idle", this.timedOutPressAt = this.predictedAt, this.learnRoundTrip(ee, ee - this.predictedAt), !this.faded)
      }
      stop() {
        this.state = "idle", this.cooldownUntil = 0, this.timedOutPressAt = null
      }
      quietMs() {
        var ee;
        const ie = this.recentRoundTrips.reduce(((ee, ie) => {
          let {
            ms: He
          } = ie;
          return Math.max(ee, He)
        }), null !== (ee = this.averageRoundTrip) && void 0 !== ee ? ee : 0);
        return Math.max(300, ie > 0 ? 1.5 * ie + 300 : 1e3)
      }
      awaitingTimedOut(ee) {
        return null !== this.timedOutPressAt && ee - this.timedOutPressAt >= 3500 && (this.timedOutPressAt = null), null !== this.timedOutPressAt
      }
      forgetOldRoundTrips(ee) {
        for (; this.recentRoundTrips.length > 0 && ee - this.recentRoundTrips[0].at > 3e4;) this.recentRoundTrips.shift()
      }
      learnRoundTrip(ee, ie) {
        const He = Math.min(2e3, Math.max(0, ie));
        this.averageRoundTrip = null === this.averageRoundTrip ? He : this.averageRoundTrip + .3 * (He - this.averageRoundTrip), this.recentRoundTrips.push({
          at: ee,
          ms: He
        })
      }
    }
    const te = "secretSantaHudChanged",
      Ze = "SecretSantaHudShown",
      we = "SecretSantaMatchOrFinish",
      De = "SecretSantaNaughtyLock",
      Pe = ["Wrapping", "Naughty", "Cancelled"],
      Ae = {
        shown: !1,
        market: null,
        hint: null,
        status: null,
        endsAt: 0,
        naughtyEndsAt: 0,
        treeLitAt: 0,
        nextHintAt: 0,
        pulse: 0,
        bells: 0
      };
    class Ye {
      constructor(ee) {
        this.onWrapStart = ee, this.view = Ae, this.endTimer = null, this.finishEndTimer = null, this.map = null, this.arrow = null, this.countdown = null, this.countdownAnimation = null, this.ring = null, this.ringFill = null, this.ringAnimation = null, this.ringEndAnimation = null, this.flash = null, this.flashAnimation = null, this.wrap = new We, this.district = new de, this.drawnArrow = "", this.drawnInCircle = !1, this.bindMap = ee => {
          this.map = ee, this.drawnInCircle = !1, this.district.unbind()
        }, this.bindArrow = ee => {
          this.arrow = ee, this.drawnArrow = ""
        }, this.bindCountdown = ee => {
          var ie;
          null === (ie = this.countdownAnimation) || void 0 === ie || ie.cancel(), this.countdownAnimation = null, this.countdown = ee, this.restartCountdown()
        }, this.bindRing = ee => {
          var ie;
          this.stopRing(), this.ring = ee, this.ringFill = null !== (ie = null === ee || void 0 === ee ? void 0 : ee.querySelector(".SecretSantaRingFill")) && void 0 !== ie ? ie : null;
          const He = this.view.naughtyEndsAt - performance.now();
          ee && He > 0 && this.runRing("Naughty", He)
        }, this.bindFlash = ee => {
          var ie;
          null === (ie = this.flashAnimation) || void 0 === ie || ie.cancel(), this.flashAnimation = null, this.flash = ee
        }
      }
      getView() {
        return this.view
      }
      receiveMarket(ee) {
        this.district.reset(), this.yR({
          ...this.view,
          market: ee,
          bells: 0
        })
      }
      receiveBells(ee) {
        ee !== this.view.bells && this.yR({
          ...this.view,
          bells: ee
        })
      }
      receiveHint(ee) {
        const ie = this.view.hint,
          He = Ve(this.view.nextHintAt, performance.now() + ee.santaHintNextInMs, 1e3),
          ye = He > this.view.nextHintAt,
          be = !ie || ie.santaHintContract !== ee.santaHintContract || ie.santaHintDistrict !== ee.santaHintDistrict || ie.santaHintCircleX !== ee.santaHintCircleX || ie.santaHintCircleZ !== ee.santaHintCircleZ,
          Me = "hunting" === ee.santaHintState && (ye || be) ? this.view.pulse + 1 : this.view.pulse;
        this.yR({
          ...this.view,
          hint: ee,
          nextHintAt: He,
          pulse: Me
        }), this.restartCountdown()
      }
      receiveStatus(ee) {
        var ie, He;
        const ye = performance.now(),
          be = Ve(this.view.endsAt, ye + ee.santaStatusMsLeft),
          Me = ee.santaStatusNaughtyMs > 0 ? Ve(this.view.naughtyEndsAt, ye + ee.santaStatusNaughtyMs) : 0,
          Ke = 0 !== Me && 0 === this.view.naughtyEndsAt,
          Ue = null !== (ie = ee.santaStatusTreeLitInMs) && void 0 !== ie ? ie : null,
          Fe = null === Ue ? 0 : Ve(this.view.treeLitAt, ye + Ue);
        this.yR({
          ...this.view,
          status: ee,
          endsAt: be,
          naughtyEndsAt: Me,
          treeLitAt: Fe,
          shown: ee.santaStatusMsLeft > 0
        }), this.scheduleEnd(be - ye), Ke ? this.runRing("Naughty", ee.santaStatusNaughtyMs) : 0 === Me && null !== (He = this.ring) && void 0 !== He && He.classList.contains("Naughty") && this.stopRing()
      }
      pressGift(ee, ie) {
        if (!this.view.shown) return !1;
        const He = this.wrap.press(ee, ie, this.view.naughtyEndsAt > ee);
        return He > 0 && this.startWrapRing(Math.max(1, He - (performance.now() - ee))), He > 0
      }
      aimAtWrap(ee, ie) {
        const He = performance.now();
        return this.wrap.turnedAway(He, ee, ie) && this.endWrapRing(!1), this.wrap.mayTurnAway(He)
      }
      receiveWrap(ee, ie) {
        const He = this.wrap.DR(performance.now(), ee, ie);
        "start" === (null === He || void 0 === He ? void 0 : He.kind) ? this.startWrapRing(He.ms): "end" === (null === He || void 0 === He ? void 0 : He.kind) && (He.done && this.ring && !this.ring.classList.contains("Wrapping") && this.runRing("Wrapping", 1), this.endWrapRing(He.done))
      }
      snowBlink() {
        var ee, ie, He;
        null === (ee = this.flashAnimation) || void 0 === ee || ee.cancel();
        this.flashAnimation = null !== (ie = null === (He = this.flash) || void 0 === He ? void 0 : He.animate([{
          opacity: 1
        }, {
          opacity: 1,
          offset: .24,
          easing: "ease-in"
        }, {
          opacity: 0
        }], {
          duration: 500
        })) && void 0 !== ie ? ie : null
      }
      frame(ee, ie) {
        this.wrap.expired(performance.now()) && this.endWrapRing(!1);
        const {
          market: He,
          hint: ye
        } = this.view;
        if (!this.view.shown || !He || !ie || !this.arrow || !this.map) return;
        const [be, Me] = Be(He, ie[0], ie[2]), Ke = Math.min(100, Math.max(0, be)), Ue = Math.min(100, Math.max(0, Me)), Fe = Math.min(95, Math.max(5, Ke)), Je = Math.min(95, Math.max(5, Ue)), oe = Math.round(180 * function(ee) {
          return ee - pe.i
        }(ee) / Math.PI), Re = `${Fe.toFixed(1)}% ${Je.toFixed(1)}% ${oe}`;
        Re !== this.drawnArrow && (this.drawnArrow = Re, this.arrow.style.left = `${Fe.toFixed(1)}%`, this.arrow.style.top = `${Je.toFixed(1)}%`, this.arrow.style.transform = `translate(-50%, -50%) rotate(${oe}deg)`), this.district.update(He, Ke, Ue, Ee(He, ie[0], ie[2]), this.map);
        const ke = "hunting" === (null === ye || void 0 === ye ? void 0 : ye.santaHintState) ? ye : null,
          qe = null !== ke && function(ee, ie) {
            let [He, , ye] = ie;
            const {
              santaHintCircleX: be,
              santaHintCircleZ: Me,
              santaHintCircleR: Ke
            } = ee;
            return null !== be && null !== Me && Ke > 0 && Math.hypot(He - be, ye - Me) <= Ke
          }(ke, ie);
        qe !== this.drawnInCircle && (this.drawnInCircle = qe, this.map.toggleAttribute("data-in-circle", qe))
      }
      dispose() {
        var ee, ie;
        null !== this.endTimer && (window.clearTimeout(this.endTimer), this.endTimer = null), this.clearFinishEnd(), document.body.classList.remove(we), null === (ee = this.countdownAnimation) || void 0 === ee || ee.cancel(), this.countdownAnimation = null, this.stopRing(), null === (ie = this.flashAnimation) || void 0 === ie || ie.cancel(), this.flashAnimation = null, this.map = this.arrow = this.ring = this.flash = null, this.countdown = this.ringFill = null, this.district.dispose(), document.body.classList.remove(Ze, De), this.view = Ae
      }
      yR(ee) {
        this.view = ee, document.body.classList.toggle(Ze, ee.shown), document.body.classList.toggle(De, ee.shown && 0 !== ee.naughtyEndsAt), ee.shown && (this.clearFinishEnd(), document.body.classList.add(we)), Te.h.yR(te, ee, !0)
      }
      scheduleEnd(ee) {
        null !== this.endTimer && window.clearTimeout(this.endTimer), this.endTimer = window.setTimeout((() => {
          this.endTimer = null, this.wrap.stop(), this.yR({
            ...this.view,
            shown: !1,
            endsAt: 0,
            naughtyEndsAt: 0,
            treeLitAt: 0,
            bells: 0
          }), this.stopRing(), this.clearFinishEnd(), this.finishEndTimer = window.setTimeout((() => {
            this.finishEndTimer = null, document.body.classList.remove(we)
          }), 13e3)
        }), ee)
      }
      clearFinishEnd() {
        null !== this.finishEndTimer && (window.clearTimeout(this.finishEndTimer), this.finishEndTimer = null)
      }
      restartCountdown() {
        var ee, ie;
        null === (ee = this.countdownAnimation) || void 0 === ee || ee.cancel(), this.countdownAnimation = null;
        const He = this.view.nextHintAt - performance.now();
        if (!this.countdown || "hunting" !== (null === (ie = this.view.hint) || void 0 === ie ? void 0 : ie.santaHintState) || He <= 0) return;
        const ye = 1 - Math.min(1, He / 1e4);
        this.countdownAnimation = this.countdown.animate([{
          strokeDashoffset: ye
        }, {
          strokeDashoffset: 1
        }], {
          duration: He,
          fill: "forwards"
        })
      }
      runRing(ee, ie) {
        if (this.stopRing(), !this.ring || !this.ringFill) return;
        this.ring.classList.add(ee);
        const [He, ye] = "Wrapping" === ee ? [ze, 0] : [0, ze], be = [{
          strokeDashoffset: He
        }, {
          strokeDashoffset: ye
        }], Me = this.ringFill.animate(be, {
          duration: ie,
          fill: "forwards"
        });
        this.ringAnimation = Me, "Naughty" === ee && (Me.onfinish = () => {
          this.ringAnimation === Me && this.stopRing()
        })
      }
      startWrapRing(ee) {
        this.runRing("Wrapping", ee), this.onWrapStart()
      }
      endWrapRing(ee) {
        const ie = this.ring;
        if (null === ie || void 0 === ie || !ie.classList.contains("Wrapping")) return;
        var He, ye;
        ee ? null === (He = this.ringAnimation) || void 0 === He || He.finish() : null === (ye = this.ringAnimation) || void 0 === ye || ye.pause();
        ie.classList.toggle("Cancelled", !ee);
        const be = ie.animate([{
          opacity: 1,
          scale: 1
        }, {
          opacity: 0,
          scale: ee ? 1.6 : .8
        }], {
          duration: ee ? 350 : 300,
          easing: ee ? "ease-out" : "ease-in",
          fill: "forwards"
        });
        this.ringEndAnimation = be, be.onfinish = () => {
          this.ringEndAnimation === be && this.stopRing()
        }
      }
      stopRing() {
        var ee, ie, He;
        null === (ee = this.ringAnimation) || void 0 === ee || ee.cancel(), null === (ie = this.ringEndAnimation) || void 0 === ie || ie.cancel(), this.ringAnimation = this.ringEndAnimation = null, null === (He = this.ring) || void 0 === He || He.classList.remove(...Pe)
      }
    }

    function Ve(ee, ie) {
      return 0 === ee || ie - ee > (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5e3) ? ie : Math.min(ee, ie)
    }
    var ae = He(1228);
    const ce = "secretSantaControlsShown",
      xe = (0, Me.memo)((function(ee) {
        let {
          controller: ie
        } = ee;
        const {
          isTouchScreen: He
        } = (0, Je.m)(["isTouchScreen"]), ye = (0, oe.A)(), {
          t: be
        } = (0, ke.v)(), Ke = (0, fe.j)(te, ie.getView()).shown, Ue = (0, qe.m)(), [Te] = (0, Me.useState)((() => {
          var ee;
          return null !== (ee = Re.i.getItem(ce)) && void 0 !== ee ? ee : 0
        })), [pe, Xe] = (0, Me.useState)(Te >= 2), [ze, Be] = (0, Me.useState)(!1), Ee = (0, Me.useRef)(!1), ge = !pe && ze && Ke && (!He || ye);
        return (0, Me.useEffect)((() => {
          if (!Ke || ze || pe) return;
          const ee = setTimeout((() => {
            Be(!0)
          }), 12500);
          return () => {
            clearTimeout(ee)
          }
        }), [Ke, ze, pe]), (0, Me.useEffect)((() => {
          !ge || Ue || Ee.current || (Ee.current = !0, Re.i.setItem(ce, Te + 1))
        }), [ge, Ue, Te]), (0, qe.o)(ge ? "secretSanta" : null, Ue, (() => {
          Xe(!0)
        })), ge ? (0, ae.jsxs)("div", {
          className: Fe()("ControlsTutorialDiv", {
            Covered: Ue
          }),
          children: [(0, ae.jsx)(qe.i, {}), (0, ae.jsx)(qe.b, {
            header: "Jump",
            noaAction: "jump"
          }), (0, ae.jsx)(qe.b, {
            header: be("secretSantaHud:givePresent"),
            noaAction: "alt-fire"
          }), ye && (0, ae.jsx)(qe.b, {
            header: be("controller:tutorialPause"),
            noaAction: "OpenSettings"
          })]
        }) : null
      }));
    var Le = He(37420),
      Ce = He(3760),
      ve = He(37516),
      ue = He(1062),
      me = He(1323),
      le = He(40282);
    const Se = (0, Me.memo)((function(ee) {
      let {
        controller: ie,
        naughtyEndsAt: He
      } = ee;
      return (0, ae.jsxs)("div", {
        ref: ie.bindRing,
        className: "SecretSantaRing",
        children: [(0, ae.jsxs)("svg", {
          viewBox: "0 0 40 40",
          "aria-hidden": "true",
          children: [(0, ae.jsx)("circle", {
            className: "SecretSantaRingTrack",
            cx: "20",
            cy: "20",
            r: 17
          }), (0, ae.jsx)("circle", {
            className: "SecretSantaRingFill",
            cx: "20",
            cy: "20",
            r: 17,
            style: {
              strokeDasharray: ze,
              strokeDashoffset: ze
            }
          })]
        }), He > 0 && (0, ae.jsx)(ne, {
          endsAt: He
        })]
      })
    }));

    function ne(ee) {
      let {
        endsAt: ie
      } = ee;
      const {
        t: He
      } = (0, ke.v)(), ye = (0, le.h)(ie);
      return ye <= 0 ? null : (0, ae.jsxs)("div", {
        className: "SecretSantaNaughty SmallTextBold",
        children: [(0, ae.jsxs)("span", {
          className: "SecretSantaNaughtyTitle",
          children: [(0, ae.jsx)(me.e, {
            name: "ban",
            "aria-hidden": "true"
          }), " ", He("secretSantaHud:naughty")]
        }), (0, ae.jsx)("span", {
          children: He("secretSantaHud:naughtyWait", {
            seconds: ye
          })
        })]
      })
    }
    const je = "user-magnifying-glass",
      se = "tree-christmas",
      Ie = {
        gingerbreadLane: "gingerbread-man",
        toyRow: "teddy-bear",
        iceRink: "ice-skate",
        carousel: "horse-saddle",
        greatTree: "tree-christmas",
        cocoaCorner: "mug-hot",
        lanternWalk: "lamp-street",
        marketGate: "archway",
        santasGrotto: "hat-santa"
      };

    function he(ee) {
      return ee && Ie[ee] || "snowflake"
    }
    const Ne = "SecretSantaDistrictBanner",
      Ge = {
        animationDuration: "2200ms"
      },
      re = (0, Me.memo)((function(ee) {
        let {
          controller: ie
        } = ee;
        const {
          t: He
        } = (0, ke.v)(), ye = (0, fe.j)(ge, ie.district.getBanner());
        return ye ? (0, ae.jsxs)("div", {
          className: Fe()(Ne, `District-${ye.key}`),
          style: Ge,
          children: [(0, ae.jsx)("span", {
            className: "SecretSantaDistrictBannerIcon",
            children: (0, ae.jsx)(me.e, {
              name: he(ye.key)
            })
          }), He(`secretSantaHud:district_${ye.key}`)]
        }, ye.seq) : null
      }));
    var Qe = He(2029),
      ei = He(1205);
    const ii = "\x01",
      Hi = "\x02";

    function yi(ee) {
      let {
        scarf: ie,
        className: He
      } = ee;
      const {
        t: ye
      } = (0, ke.v)();
      return (0, ae.jsxs)("span", {
        className: Fe()("SecretSantaScarf", `Scarf-${ie}`, He),
        children: [(0, ae.jsx)("span", {
          className: "SecretSantaScarfSwatch"
        }), ye(`secretSantaHud:scarfName_${ie}`)]
      })
    }
    const bi = {
      santa: "hat-santa",
      elf: "hat-wizard",
      bobble: "hat-winter",
      antlers: "deer"
    };

    function Mi(ee) {
      let {
        hat: ie,
        className: He
      } = ee;
      const {
        t: ye
      } = (0, ke.v)();
      return (0, ae.jsxs)("span", {
        className: Fe()("SecretSantaHat", `Hat-${ie}`, He),
        children: [(0, ae.jsx)(me.e, {
          name: bi[ie]
        }), " ", ye(`secretSantaHud:hatName_${ie}`)]
      })
    }

    function Ki(ee) {
      let {
        scarf: ie,
        hat: He
      } = ee;
      const {
        t: ye
      } = (0, ke.v)();
      return (0, ae.jsx)(ae.Fragment, {
        children: Ui(ye("secretSantaHud:lookName", {
          scarf: ii,
          hat: Hi
        }), (0, ae.jsx)(yi, {
          scarf: ie
        }), (0, ae.jsx)(Mi, {
          hat: He
        }))
      })
    }

    function Ui(ee) {
      for (var ie = arguments.length, He = new Array(ie > 1 ? ie - 1 : 0), ye = 1; ye < ie; ye++) He[ye - 1] = arguments[ye];
      const be = [];
      return ee.split(ii).forEach(((ee, ie) => {
        ie > 0 && be.push(He[0]), ee.split(Hi).forEach(((ee, ie) => {
          ie > 0 && be.push(He[1]), be.push(ee)
        }))
      })), be.map(((ee, ie) => (0, ae.jsx)(Me.Fragment, {
        children: ee
      }, ie)))
    }
    const Fi = {
        circle: {
          icon: je,
          text: "secretSantaHud:circleNote"
        },
        lit: {
          icon: se,
          text: "secretSantaHud:targetLit"
        }
      },
      Ji = (0, Me.memo)((function(ee) {
        var ie, He, ye;
        let {
          controller: be,
          market: Ke,
          hint: Ue,
          nextHintAt: Je,
          pulse: oe
        } = ee;
        const {
          t: Re
        } = (0, ke.v)(), qe = (0, Qe.k)("hiddenPlayerNames"), fe = null !== (ie = null === Ue || void 0 === Ue ? void 0 : Ue.santaHintState) && void 0 !== ie ? ie : "none", Te = null !== (He = null === Ue || void 0 === Ue ? void 0 : Ue.santaHintTargetName) && void 0 !== He ? He : null, pe = null !== Te && (0, ae.jsx)("span", {
          className: "SecretSantaTargetName",
          children: (0, ei.h)(Te, qe)
        }), Xe = "hunting" === fe && null !== Ue, ze = Xe && !0 === Ue.santaHintTreeLit, Be = function(ee, ie) {
          const [He, ye] = (0, Me.useState)(null);
          ie && (null === He || void 0 === He ? void 0 : He.contract) !== ee && ye({
            contract: ee,
            until: performance.now() + 8e3
          });
          const be = (null === He || void 0 === He ? void 0 : He.contract) === ee ? He.until : 0,
            Ke = (0, le.h)(be);
          0 !== be && 0 === Ke && ye({
            contract: ee,
            until: 0
          });
          return ie && Ke > 0
        }(null !== (ye = null === Ue || void 0 === Ue ? void 0 : Ue.santaHintContract) && void 0 !== ye ? ye : 0, Xe && Ue.santaHintCircleR > 0 && !ze);
        let Ee, ge = `${fe}-${null!==Te&&void 0!==Te?Te:""}`;
        if (Ue && "none" !== fe && pe)
          if ("lost" === fe) Ee = (0, ae.jsxs)(ae.Fragment, {
            children: [(0, ae.jsx)(me.e, {
              name: "snowflake",
              className: "SecretSantaLostLineIcon"
            }), " ", Ui(Re("secretSantaHud:lostLine", {
              name: ii
            }), pe)]
          });
          else if (null !== Ue.santaHintScarf) {
          var Oe, de;
          ge += `-scarf-${Ue.santaHintScarf}-${null!==(Oe=Ue.santaHintHat)&&void 0!==Oe?Oe:""}`, Ee = Ui(Re("secretSantaHud:lookingFor", {
            name: ii,
            clue: Hi
          }), pe, (0, ae.jsx)(Ri, {
            scarf: Ue.santaHintScarf,
            hat: null !== (de = Ue.santaHintHat) && void 0 !== de ? de : null
          }))
        } else {
          const ee = null === Ke || void 0 === Ke ? void 0 : Ke.santaMarketDistricts[Ue.santaHintDistrict];
          ge += `-district-${null!==ee&&void 0!==ee?ee:"?"}`, Ee = Ui(Re("secretSantaHud:findIn", {
            name: ii,
            district: Hi
          }), pe, (0, ae.jsxs)("span", {
            className: Fe()("SecretSantaClueChip", "SecretSantaDistrictName", void 0 !== ee && `District-${ee}`),
            children: [(0, ae.jsx)(me.e, {
              name: he(ee)
            }), " ", void 0 !== ee ? Re(`secretSantaHud:district_${ee}`) : "?"]
          }))
        } else Ee = Re("secretSantaHud:finding");
        const [We, te] = (0, Me.useState)({
          key: ge,
          pulse: oe
        });
        We.key !== ge && te({
          key: ge,
          pulse: oe
        });
        const Ze = We.key === ge && oe !== We.pulse;
        return (0, ae.jsxs)("div", {
          className: Fe()("SecretSantaTarget", `State-${fe}`),
          children: [Ee, "hunting" === fe && (0, ae.jsxs)(ae.Fragment, {
            children: [(0, ae.jsx)(oi, {
              controller: be,
              nextHintAt: Je,
              note: ze ? "lit" : Be ? "circle" : null
            }), Ze && (0, ae.jsx)("div", {
              className: "SecretSantaClueFlash",
              "aria-hidden": "true"
            }, oe)]
          })]
        }, ge)
      }));

    function oi(ee) {
      let {
        controller: ie,
        nextHintAt: He,
        note: ye
      } = ee;
      const {
        t: be
      } = (0, ke.v)(), Ke = (0, le.h)(He), [Ue, Fe] = (0, Me.useState)(null), [Je, oe] = (0, Me.useState)(null);
      (0, Me.useLayoutEffect)((() => {
        if (!Ue) return;
        const ee = () => {
          const ee = Ue.offsetWidth,
            ie = Ue.offsetHeight;
          oe((He => He && He.width === ee && He.height === ie ? He : {
            width: ee,
            height: ie
          }))
        };
        ee();
        const ie = new ResizeObserver(ee);
        return ie.observe(Ue), () => {
          ie.disconnect()
        }
      }), [Ue]);
      return (0, ae.jsxs)(ae.Fragment, {
        children: [(0, ae.jsx)("div", {
          ref: Fe,
          className: "SecretSantaClueCountdown",
          "aria-hidden": "true",
          children: Je && Je.width > 8 && Je.height > 8 && (0, ae.jsx)("svg", {
            viewBox: `0 0 ${Je.width} ${Je.height}`,
            children: (0, ae.jsx)("path", {
              ref: ie.bindCountdown,
              d: `M${Je.width/2} 2H${Je.width-2}V${Je.height-2}H2V2Z`,
              pathLength: 1,
              strokeWidth: 4,
              style: {
                strokeDasharray: 1,
                strokeDashoffset: 1
              }
            })
          })
        }), null === ye ? (0, ae.jsxs)("div", {
          className: "SecretSantaClueTimer",
          children: [(0, ae.jsx)(me.e, {
            name: "arrows-rotate"
          }), " ", be("secretSantaHud:mapUpdateIn", {
            seconds: Math.max(1, Ke)
          })]
        }) : (0, ae.jsx)(ki, {
          kind: ye
        }, ye)]
      })
    }

    function Ri(ee) {
      let {
        scarf: ie,
        hat: He
      } = ee;
      return (0, ae.jsxs)(ae.Fragment, {
        children: [(0, ae.jsx)(yi, {
          scarf: ie,
          className: "SecretSantaClueChip"
        }), null !== He && (0, ae.jsxs)(ae.Fragment, {
          children: [(0, ae.jsx)("span", {
            className: "SecretSantaClueJoin",
            children: "+"
          }), (0, ae.jsx)(Mi, {
            hat: He,
            className: "SecretSantaClueChip"
          })]
        })]
      })
    }

    function ki(ee) {
      let {
        kind: ie
      } = ee;
      const {
        t: He
      } = (0, ke.v)(), {
        icon: ye,
        text: be
      } = Fi[ie];
      return (0, ae.jsxs)("div", {
        className: Fe()("SecretSantaClueTimer", "SecretSantaClueNote", `Note-${ie}`),
        children: [(0, ae.jsx)("span", {
          className: "SecretSantaClueNoteIcon",
          children: (0, ae.jsx)(me.e, {
            name: ye
          })
        }), " ", He(be)]
      })
    }

    function qi(ee) {
      let {
        litAt: ie,
        hunters: He
      } = ee;
      const {
        t: ye
      } = (0, ke.v)(), be = (0, le.h)(ie);
      return (0, ae.jsxs)("span", {
        className: Fe()("SecretSantaHuntedBanner", "SecretSantaTreeLights", {
          Lit: be <= 0
        }),
        children: [(0, ae.jsx)("span", {
          className: "SecretSantaTreeLightsIcon",
          children: (0, ae.jsx)(me.e, {
            name: se
          })
        }), " ", be > 0 ? ye("secretSantaHud:treeLightsOn", {
          seconds: be
        }) : ye(He > 1 ? "secretSantaHud:treeLit2" : "secretSantaHud:treeLit")]
      })
    }

    function fi(ee) {
      let {
        on: ie
      } = ee;
      return (0, ae.jsx)("span", {
        className: Fe()("SecretSantaTreeLightString", {
          On: ie
        }),
        "aria-hidden": "true"
      })
    }
    const Ti = (0, Me.memo)((function(ee) {
      var ie, He;
      let {
        controller: ye,
        market: Me,
        hint: Ke,
        pulse: Ue,
        treeLightsOn: Je
      } = ee;
      const {
        t: oe
      } = (0, ke.v)(), Re = null !== (ie = null === Ke || void 0 === Ke ? void 0 : Ke.santaHintState) && void 0 !== ie ? ie : "none", qe = "hunting" === Re && Ke ? Ke.santaHintDistrict : -1, fe = null !== (He = null === Me || void 0 === Me ? void 0 : Me.santaMarketDistricts) && void 0 !== He ? He : be, Te = "hunting" === Re && Me && Ke ? function(ee, ie) {
        const {
          santaHintCircleX: He,
          santaHintCircleZ: ye,
          santaHintCircleR: be,
          santaHintContract: Me
        } = ie;
        if (null === He || null === ye || be <= 0) return null;
        const [Ke, Ue] = Be(ee, He, ye), Fe = 200 * be / ee.santaMarketSize, Je = Xi(Ke), oe = Math.sqrt(Math.max(0, (Fe / 2) ** 2 - (Je - Ke) ** 2)), Re = Xi(Ue - oe >= 9 ? Ue - oe : Ue + oe);
        return {
          left: Ke,
          top: Ue,
          size: Fe,
          contract: Me,
          badgeLeft: Je,
          badgeTop: Re
        }
      }(Me, Ke) : null;
      return (0, ae.jsxs)("div", {
        ref: ye.bindMap,
        className: Fe()("SecretSantaMinimap", `State-${Re}`, {
          WithCircle: null !== Te
        }),
        children: [(0, ae.jsx)("img", {
          className: "SecretSantaMinimapTerrain",
          src: "data:image/png;base64,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",
          alt: "",
          draggable: !1
        }), (0, ae.jsx)("div", {
          className: "SecretSantaMinimapGrid",
          children: fe.map(((ee, ie) => (0, ae.jsxs)("div", {
            className: Fe()("SecretSantaDistrict", `District-${ee}`, {
              Target: ie === qe
            }),
            "data-district": ie,
            children: [(0, ae.jsx)("span", {
              className: "SecretSantaDistrictIcon",
              children: (0, ae.jsx)(me.e, {
                name: he(ee)
              })
            }), (0, ae.jsx)("span", {
              className: "SecretSantaDistrictLabel",
              children: oe(`secretSantaHud:district_${ee}`)
            }), "greatTree" === ee && (0, ae.jsx)(fi, {
              on: Je
            })]
          }, ee)))
        }), qe >= 0 && (0, ae.jsx)("div", {
          className: "SecretSantaDistrictPulse",
          style: {
            left: qe % 3 * (100 / 3) + "%",
            top: Math.floor(qe / 3) * (100 / 3) + "%"
          }
        }, Ue), Te && (0, ae.jsxs)("div", {
          className: "SecretSantaCircleClip",
          children: [(0, ae.jsx)("div", {
            className: "SecretSantaCircle",
            style: {
              left: `${Te.left}%`,
              top: `${Te.top}%`,
              width: `${Te.size}%`,
              height: `${Te.size}%`
            }
          }, Te.contract), (0, ae.jsx)("span", {
            className: "SecretSantaCircleBadge",
            style: {
              left: `${Te.badgeLeft}%`,
              top: `${Te.badgeTop}%`
            },
            children: (0, ae.jsx)(me.e, {
              name: je
            })
          }, `badge-${Te.contract}`)]
        }), (0, ae.jsx)("div", {
          className: "SecretSantaMinimapArrowClip",
          children: (0, ae.jsx)("div", {
            ref: ye.bindArrow,
            className: "SecretSantaMinimapArrow",
            children: (0, ae.jsxs)("svg", {
              viewBox: "0 2 20 20",
              children: [(0, ae.jsx)("path", {
                className: "SecretSantaMinimapArrowBody",
                d: "M10 1.5 14.2 6.4H5.8Z"
              }), (0, ae.jsx)("circle", {
                className: "SecretSantaMinimapArrowBody",
                cx: "10",
                cy: "12",
                r: "5"
              }), (0, ae.jsx)("circle", {
                className: "SecretSantaMinimapArrowDot",
                cx: "10",
                cy: "12",
                r: "1.8"
              })]
            })
          })
        }), "lost" === Re && (0, ae.jsxs)("div", {
          className: "SecretSantaLost",
          children: [(0, ae.jsx)("span", {
            className: "SecretSantaLostIcon",
            children: (0, ae.jsx)(me.e, {
              name: "snowflake"
            })
          }), (0, ae.jsx)("span", {
            className: "SmallTextBold",
            children: oe("secretSantaHud:lost")
          })]
        })]
      })
    }));

    function Xi(ee) {
      return Math.min(91, Math.max(9, ee))
    }

    function zi(ee) {
      let {
        bells: ie
      } = ee;
      return (0, ae.jsx)("div", {
        className: Fe()("SecretSantaFrost", `Bells-${ie}`),
        "aria-hidden": "true",
        children: (0, ae.jsx)("div", {
          className: "SecretSantaFrostPulse"
        })
      })
    }

    function Bi(ee) {
      let {
        bells: ie
      } = ee;
      const {
        t: He
      } = (0, ke.v)();
      return (0, ae.jsxs)("span", {
        className: Fe()("SecretSantaHuntedBanner", "SecretSantaClose", `Bells-${ie}`),
        children: [(0, ae.jsx)("span", {
          className: "SecretSantaBell",
          children: (0, ae.jsx)(me.e, {
            name: "bell"
          })
        }), " ", He(2 === ie ? "secretSantaHud:santaClose" : "secretSantaHud:santaNear")]
      })
    }

    function Ei(ee) {
      let {
        controller: ie
      } = ee;
      const He = (0, fe.j)(te, ie.getView());
      return (0, ae.jsxs)(ae.Fragment, {
        children: [He.shown && (0, ae.jsx)(zi, {
          bells: He.bells
        }), (0, ae.jsx)("div", {
          ref: ie.bindFlash,
          className: "SecretSantaFlash",
          "aria-hidden": "true"
        }), (0, ae.jsx)(Se, {
          controller: ie,
          naughtyEndsAt: He.naughtyEndsAt
        }), He.shown && (0, ae.jsxs)(ae.Fragment, {
          children: [(0, ae.jsx)(Zi, {
            controller: ie,
            status: He.status,
            endsAt: He.endsAt,
            bells: He.bells,
            treeLitAt: He.treeLitAt
          }), (0, ae.jsx)(gi, {
            controller: ie,
            market: He.market,
            hint: He.hint,
            pulse: He.pulse,
            treeLightsOn: 0 !== He.treeLitAt
          }), (0, ae.jsx)(Le.d, {
            children: (0, ae.jsx)(Ji, {
              controller: ie,
              market: He.market,
              hint: He.hint,
              nextHintAt: He.nextHintAt,
              pulse: He.pulse
            })
          })]
        })]
      })
    }

    function gi(ee) {
      let {
        controller: ie,
        market: He,
        hint: ye,
        pulse: be,
        treeLightsOn: Ke
      } = ee;
      const [Ue, Fe] = (0, Me.useState)(null);
      return (0, Ce.l)(Ue, Oi), (0, ae.jsx)("div", {
        ref: Fe,
        className: "SecretSantaMapPanel",
        children: (0, ae.jsx)(Ti, {
          controller: ie,
          market: He,
          hint: ye,
          pulse: be,
          treeLightsOn: Ke
        })
      })
    }

    function Oi(ee) {
      const ie = () => {
        const ie = ee.getBoundingClientRect();
        let He = 0;
        for (const ee of ti()) ee.left < ie.right && ee.right > ie.left && (He = Math.max(He, ee.bottom));
        const ye = (0, Ce.f)(ie.left, ie.right, He);
        di(ee, "--ss-map-top", He + 6), di(ee, "--ss-map-bottom", null === ye ? null : (0, Ce.e)(ee) - ye + 6)
      };
      ie();
      const He = Wi(ie);
      return {
        layout: ie,
        clear: () => {
          He(), ee.style.removeProperty("--ss-map-top"), ee.style.removeProperty("--ss-map-bottom")
        }
      }
    }

    function di(ee, ie, He) {
      const ye = null === He ? "" : `${Math.ceil(He)}px`;
      ee.style.getPropertyValue(ie) !== ye && ee.style.setProperty(ie, ye)
    }

    function Wi(ee) {
      const ie = document.querySelector(`.${ve.g}`),
        He = new ResizeObserver(ee);
      for (const Me of [document.querySelector(`.${ve.d}`), ie]) Me && He.observe(Me);
      const ye = new MutationObserver(ee),
        be = null === ie || void 0 === ie ? void 0 : ie.querySelector(".TopRightElementsRight");
      return be && ye.observe(be, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), () => {
        He.disconnect(), ye.disconnect()
      }
    }

    function ti() {
      const ee = `.${ve.g}`,
        ie = document.querySelectorAll(`.${ve.d}, ${ee} .TopRightIcon:not(.TopRightTray *), ${ee} .CondensedSocialBarInner`);
      return Array.from(ie, (ee => ee.getBoundingClientRect())).filter((ee => ee.width > 0 && ee.height > 0))
    }
    const Zi = (0, Me.memo)((function(ee) {
      let {
        controller: ie,
        status: He,
        endsAt: ye,
        bells: be,
        treeLitAt: Ke
      } = ee;
      const {
        t: Ue
      } = (0, ke.v)(), [Fe, Je] = (0, Me.useState)(null);
      return function(ee) {
        (0, Me.useLayoutEffect)((() => {
          if (!ee) return;
          const ie = document.documentElement;
          let He = 0,
            ye = window.innerWidth;
          const be = () => {
              ee.style.removeProperty("top");
              const ye = ti(),
                be = Array.from(ee.children).filter((ee => ee instanceof HTMLElement && !ee.classList.contains(Ne))),
                Me = ee.getBoundingClientRect(),
                Ke = be.map((ee => {
                  const ie = Me.left + ee.offsetLeft,
                    He = Me.top + ee.offsetTop;
                  return {
                    left: ie,
                    right: ie + ee.offsetWidth,
                    top: He,
                    bottom: He + ee.offsetHeight
                  }
                }));
              let Ue = 0;
              for (let ee = 0; ee < ye.length; ee++) {
                let ee = Ue;
                for (const ie of Ke)
                  for (const He of ye) {
                    ie.left < He.right + ve.c && ie.right > He.left - ve.c && ie.top + Ue < He.bottom + 4 && ie.bottom + Ue > He.top && (ee = Math.max(ee, Math.ceil(He.bottom + 4 - ie.top)))
                  }
                if (ee === Ue) break;
                Ue = ee
              }
              Ue > 0 && (ee.style.top = `${ee.getBoundingClientRect().top+Ue}px`);
              const Fe = Math.max(0, ...Ke.map((ee => ee.bottom - Me.top)));
              (0, ue.e)(window.innerWidth, window.innerHeight) && !document.querySelector(".Chat.Chatting") && (He = Math.max(He, Math.ceil(ee.getBoundingClientRect().top + Fe)), ie.style.setProperty("--ss-top-bar-bottom", `${He}px`))
            },
            Me = () => {
              window.innerWidth !== ye && (ye = window.innerWidth, He = 0), be()
            };
          be();
          const Ke = new ResizeObserver(be);
          Ke.observe(ee);
          const Ue = Wi(be),
            Fe = new MutationObserver((ee => {
              ee.some((ee => {
                const ie = ee.target instanceof Element ? ee.target : ee.target.parentElement;
                return !(null !== ie && void 0 !== ie && ie.closest(".SecretSantaClock"))
              })) && be()
            }));
          Fe.observe(ee, {
            childList: !0,
            subtree: !0,
            characterData: !0
          });
          const Je = new MutationObserver((ee => {
              ee.some((ee => ee.target instanceof Element && ee.target.classList.contains("Chat"))) && be()
            })),
            oe = document.querySelector(".TopLeftElements");
          return oe && Je.observe(oe, {
            attributes: !0,
            attributeFilter: ["class"],
            subtree: !0
          }), window.addEventListener("resize", Me), () => {
            Ke.disconnect(), Ue(), Fe.disconnect(), Je.disconnect(), window.removeEventListener("resize", Me), ie.style.removeProperty("--ss-top-bar-bottom")
          }
        }), [ee])
      }(Fe), (0, ae.jsxs)("div", {
        ref: Je,
        className: "SecretSantaTop",
        children: [(0, ae.jsxs)("div", {
          className: "SecretSantaTopBar",
          children: [(0, ae.jsx)(wi, {
            endsAt: ye
          }), He && (0, ae.jsxs)("span", {
            className: "SecretSantaScore",
            children: [(0, ae.jsxs)("span", {
              className: "SecretSantaPoints",
              children: [(0, ae.jsx)(me.e, {
                name: "star"
              }), " ", He.santaStatusPoints]
            }, He.santaStatusPoints), (0, ae.jsx)("span", {
              className: "SecretSantaRank",
              children: Ue("secretSantaHud:rank", {
                rank: He.santaStatusRank,
                players: He.santaStatusPlayers
              })
            })]
          })]
        }), He && (0, ae.jsx)(Di, {
          status: He,
          bells: be,
          treeLitAt: Ke
        }), (0, ae.jsx)(re, {
          controller: ie
        })]
      })
    }));

    function wi(ee) {
      let {
        endsAt: ie
      } = ee;
      const He = (0, le.h)(ie);
      return 0 === ie ? (0, ae.jsx)("span", {
        className: "SecretSantaClock"
      }) : (0, ae.jsxs)("span", {
        className: Fe()("SecretSantaClock", {
          Urgent: He <= 30
        }),
        children: [(0, ae.jsx)(me.e, {
          name: "stopwatch",
          className: "SecretSantaClockIcon",
          "aria-hidden": "true"
        }), (0, le.c)(He)]
      })
    }
    const Di = (0, Me.memo)((function(ee) {
      let {
        status: ie,
        bells: He,
        treeLitAt: ye
      } = ee;
      const {
        t: be
      } = (0, ke.v)(), Me = Math.min(2, Math.max(0, ie.santaStatusHunters)), Ke = ie.santaStatusScarf, Ue = (0, ae.jsx)(Ki, {
        scarf: Ke,
        hat: ie.santaStatusHat
      });
      let Fe = (0, ae.jsx)("span", {
        children: Ui(be("secretSantaHud:youWearLook", {
          look: ii
        }), Ue)
      });
      if (ie.santaStatusKnown) {
        const ee = ie.santaStatusHatKnown ? Ui(be("secretSantaHud:spottedLook", {
          look: ii
        }), Ue) : Ui(be("secretSantaHud:spottedScarf", {
          scarf: ii
        }), (0, ae.jsx)(yi, {
          scarf: Ke
        }));
        Fe = (0, ae.jsxs)("span", {
          className: "SecretSantaSpotted",
          children: [(0, ae.jsx)(me.e, {
            name: "eye"
          }), " ", ee]
        })
      }
      let Je = null;
      return 0 !== ye ? Je = (0, ae.jsx)(qi, {
        litAt: ye,
        hunters: Me
      }) : 0 !== He ? Je = (0, ae.jsx)(Bi, {
        bells: He
      }) : Me > 0 && (Je = (0, ae.jsxs)("span", {
        className: "SecretSantaHuntedBanner",
        children: [(0, ae.jsx)(me.e, {
          name: "eyes",
          "aria-hidden": "true"
        }), " ", be(1 === Me ? "secretSantaHud:hunters1" : "secretSantaHud:hunters2")]
      })), (0, ae.jsxs)("div", {
        className: "SecretSantaYouTab",
        children: [Je, Fe]
      }, Me)
    }));
    var Pi = He(4598);
    const Ai = [226, 36, 52],
      Yi = [246, 250, 255],
      Vi = [168, 214, 255],
      ai = [24, 24, 28],
      ci = [44, 44, 50],
      xi = [112, 112, 122],
      Li = [255, 112, 36];

    function Ci(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return [{
        timeFraction: 0,
        minColor: [ee[0], ee[1], ee[2], He],
        maxColor: [ie[0], ie[1], ie[2], He]
      }, {
        timeFraction: 1,
        minColor: [ee[0], ee[1], ee[2], 0],
        maxColor: [ie[0], ie[1], ie[2], 0]
      }]
    }

    function vi(ee, ie, He) {
      let [ye, be, Me] = ee;
      return {
        pos1: [ye - ie, be, Me - ie],
        pos2: [ye + ie, be + He, Me + ie]
      }
    }

    function ui(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const He = .45 * ie;
      return [{
        texture: "square_particle",
        ...vi(ee, He, 1.4 * ie),
        dir1: [-.7, .5, -.7],
        dir2: [.7, 1.4, .7],
        minEmitPower: .5,
        maxEmitPower: 1,
        minLifeTime: .8,
        maxLifeTime: 1.4,
        minSize: .18 * ie,
        maxSize: .34 * ie,
        manualEmitCount: Math.round(26 * ie),
        gravity: [0, .6, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }, {
          timeFraction: 1,
          factor: .2,
          factor2: .3
        }],
        colorGradients: Ci(ci, xi, .95),
        hideDist: 48,
        blendMode: Pi.e.Standard
      }, {
        texture: "square_particle",
        ...vi(ee, .6 * He, 1.2 * ie),
        dir1: [-1.4, 1.2, -1.4],
        dir2: [1.4, 2.6, 1.4],
        minEmitPower: 1.2,
        maxEmitPower: 2,
        minLifeTime: .6,
        maxLifeTime: 1,
        minSize: .1,
        maxSize: .18,
        manualEmitCount: Math.round(14 * ie),
        gravity: [0, -14, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: [{
          timeFraction: 0,
          minColor: [ai[0], ai[1], ai[2], 1],
          maxColor: [58, 52, 48, 1]
        }, {
          timeFraction: 1,
          minColor: [ai[0], ai[1], ai[2], 1],
          maxColor: [58, 52, 48, 1]
        }],
        hideDist: 48,
        blendMode: Pi.e.Standard
      }, {
        texture: "glint",
        ...vi(ee, .7 * He, 1.2 * ie),
        dir1: [-.8, .8, -.8],
        dir2: [.8, 2, .8],
        minEmitPower: .6,
        maxEmitPower: 1.2,
        minLifeTime: .4,
        maxLifeTime: .8,
        minSize: .06,
        maxSize: .14,
        manualEmitCount: Math.round(6 * ie),
        gravity: [0, 1, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: Ci(Li, Ai),
        hideDist: 48,
        blendMode: Pi.e.Add
      }]
    }

    function mi(ee, ie) {
      return {
        texture: "glint",
        ...vi(ee, .9, 1.9),
        dir1: [-.5, .6, -.5],
        dir2: [.5, 1.6, .5],
        minEmitPower: .6,
        maxEmitPower: 1.2,
        minLifeTime: .8,
        maxLifeTime: 1.5,
        minSize: .05,
        maxSize: .13,
        manualEmitCount: ie,
        gravity: [0, .4, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: Ci(Yi, Vi),
        hideDist: 16,
        blendMode: Pi.e.Add
      }
    }
    var li = He(97);
    const Si = "harp_pling",
      ni = "cloth1",
      ji = [
        [0, .55, 1],
        [110, .55, 1.5]
      ],
      si = [
        [0, .5, 1],
        [85, .5, 1.26],
        [170, .5, 1.5],
        [255, .45, 2]
      ],
      Ii = [
        [0, .5, 1.5],
        [85, .45, 2]
      ],
      Ni = [
        [0, .4, .75],
        [170, .4, .63]
      ],
      Gi = "keysJingle",
      ri = [
        [],
        [
          [.45, 1]
        ],
        [
          [.7, 1.25],
          [.4, 1.6]
        ]
      ];

    function Qi(ee, ie) {
      return 1 === ie ? ee : {
        ...ee,
        manualEmitCount: Math.max(1, Math.round(ee.manualEmitCount * ie))
      }
    }
    class eH {
      constructor(ee, ie) {
        this.api = ee, this.localPlayerId = ie, this.layers = [{
          sound: null,
          volume: 0,
          target: 0,
          rate: 1
        }, {
          sound: null,
          volume: 0,
          target: 0,
          rate: 1
        }], this.timers = new Set, this.camera = [0, 0, 0], this.look = [0, 0, 1], this.hint = null, this.spotted = !1, this.hatSpotted = !1, this.lastFrameAt = 0, this.particleShare = (0, li.isMobile)() ? .6 : 1, ee.preloadSounds([Si, Gi, ni])
      }
      reset() {
        this.hint = null, this.spotted = !1, this.hatSpotted = !1, this.setBells(0)
      }
      receiveHint(ee) {
        const ie = this.hint;
        this.hint = ee, "none" !== ee.santaHintState && (ie && ie.santaHintContract === ee.santaHintContract ? null === ie.santaHintScarf && null !== ee.santaHintScarf ? this.play(si) : null === ie.santaHintHat && null !== ee.santaHintHat && this.play(Ii) : this.play(ji))
      }
      receiveStatus(ee) {
        (ee.santaStatusKnown && !this.spotted || ee.santaStatusHatKnown && !this.hatSpotted) && this.play(Ni), this.spotted = ee.santaStatusKnown, this.hatSpotted = ee.santaStatusHatKnown
      }
      wrapStarted() {
        this.api.playSound(this.localPlayerId, ni, .5, 1.2)
      }
      setBells(ee) {
        const ie = ri[ee];
        this.layers.forEach(((ee, He) => {
          var ye;
          const [be, Me] = null !== (ye = ie[He]) && void 0 !== ye ? ye : [0, ee.rate];
          var Ke;
          (0 === be && ee.target > 0 && ee.sound && this.stopLater(ee), ee.target = be, be > 0 && Me !== ee.rate) && (ee.rate = Me, null === (Ke = ee.sound) || void 0 === Ke || Ke.rate(Me))
        }))
      }
      receiveFx(ee) {
        let {
          santaFxKind: ie,
          santaFxAt: He
        } = ee;
        if (this.api.particlesEnabled())
          if ("caughtSanta" === ie) He && this.burst(ui(He));
          else if ("toTunnel" === ie) this.later(300, (() => {
          const [ee, ie, He] = this.ahead();
          this.burst([mi([ee, ie - 1, He], 36)])
        }));
        else {
          const [ee, ie, He] = this.ahead();
          this.burst(ui([ee, ie - .6, He], .8))
        }
      }
      frame(ee) {
        const {
          cameraPosition: ie,
          cameraDirection: He
        } = ee;
        this.camera[0] = ie[0], this.camera[1] = ie[1], this.camera[2] = ie[2], this.look[0] = He[0], this.look[1] = He[1], this.look[2] = He[2];
        const ye = performance.now(),
          be = Math.min(.1, (ye - (this.lastFrameAt || ye)) / 1e3);
        this.lastFrameAt = ye;
        for (const Ke of this.layers) {
          if (0 === Ke.volume && 0 === Ke.target && !Ke.sound) continue;
          Ke.target > 0 && !Ke.sound && (Ke.sound = this.api.playSound(this.localPlayerId, Gi, 0, Ke.rate, void 0, !0));
          const ee = (Ke.target > Ke.volume ? 3 : 1.2) * be;
          var Me;
          if (Ke.volume = Ke.target > Ke.volume ? Math.min(Ke.target, Ke.volume + ee) : Math.max(Ke.target, Ke.volume - ee), Ke.volume <= 0 && 0 === Ke.target) this.silence(Ke);
          else null === (Me = Ke.sound) || void 0 === Me || Me.setRelativeVolume(Ke.volume)
        }
      }
      dispose() {
        for (const ee of this.timers) window.clearTimeout(ee);
        this.timers.clear();
        for (const ee of this.layers) ee.target = 0, this.silence(ee)
      }
      silence(ee) {
        var ie;
        null === (ie = ee.sound) || void 0 === ie || ie.stop(), ee.sound = null, ee.volume = 0
      }
      stopLater(ee) {
        const ie = ee.sound,
          He = window.setTimeout((() => {
            this.timers.delete(He), ee.sound === ie && 0 === ee.target && this.silence(ee)
          }), ee.volume / 1.2 * 1e3 + 150);
        this.timers.add(He)
      }
      ahead() {
        const [ee, ie, He] = this.camera, [ye, be, Me] = this.look;
        return [ee + 1.8 * ye, ie + 1.8 * be - .35, He + 1.8 * Me]
      }
      later(ee, ie) {
        const He = window.setTimeout((() => {
          this.timers.delete(He), ie()
        }), ee);
        this.timers.add(He)
      }
      play(ee) {
        for (const [ie, He, ye] of ee) 0 === ie ? this.api.playSound(this.localPlayerId, Si, He, ye) : this.later(ie, (() => {
          this.api.playSound(this.localPlayerId, Si, He, ye)
        }))
      }
      burst(ee) {
        for (const ie of ee) this.api.playParticleEffect(Qi(ie, this.particleShare))
      }
    }
    class iH {
      constructor(ee) {
        this.api = ee, this.wait = null
      }
      DR(ee) {
        const ie = performance.now();
        this.wait = {
          min: ee.santaFlyoverMin,
          max: ee.santaFlyoverMax,
          start: ee.santaFlyoverStart,
          until: ie + ee.santaFlyoverWaitMs,
          loadedAt: null,
          settledFrames: 0,
          lastFrameAt: ie
        }
      }
      frame(ee) {
        const ie = this.wait;
        if (!ie) return;
        const He = performance.now(),
          ye = He - ie.lastFrameAt;
        ie.lastFrameAt = He, He > ie.until ? this.wait = null : null !== ie.loadedAt ? (ie.settledFrames = ye <= 60 ? ie.settledFrames + 1 : 0, ie.settledFrames >= 6 && He - ie.loadedAt >= 300 && (this.wait = null, this.api.sendCommand("santaFlyoverReady"))) : ee && this.isLoaded(ie, ee) && (ie.loadedAt = He)
      }
      isLoaded(ee, ie) {
        let {
          min: He,
          max: be,
          start: Me
        } = ee;
        if (ie[0] < He[0] || ie[0] > be[0] || ie[2] < He[2] || ie[2] > be[2]) return !1;
        const Ke = ye.g.BR,
          Ue = ee => ee.map((ee => Math.floor(ee / Ke))),
          Fe = [Ue(ie), Ue(Me)],
          [Je, oe] = [Ue(He), Ue(be)];
        for (let ye = Je[0]; ye <= oe[0]; ye++)
          for (let ee = Je[1]; ee <= oe[1]; ee++)
            for (let ie = Je[2]; ie <= oe[2]; ie++) {
              if (Fe.some((He => {
                  let [be, Me, Ke] = He;
                  return (ye - be) ** 2 + (ee - Me) ** 2 + (ie - Ke) ** 2 <= 4
                })) && !this.api.isBlockInLoadedChunk(ye * Ke, ee * Ke, ie * Ke)) return !1
            }
        return !0
      }
    }
    var HH = He(39673),
      yH = He(1260),
      bH = He(39370);
    class MH {
      constructor(ee) {
        this.api = ee, this.sent = null, this.timer = null, this.recheck = setInterval((() => {
          this.RR()
        }), 5e3), this.pacer = new bH.e({
          limit: 2,
          spacingMs: 3e3
        }), this.heldBack = !1, this.stopPacer = void 0, this.resized = () => {
          null !== this.timer && clearTimeout(this.timer), this.timer = setTimeout((() => {
            this.timer = null, this.RR()
          }), 400)
        }, window.addEventListener("resize", this.resized), this.stopPacer = this.pacer.subscribe((() => {
          this.heldBack && !this.pacer.isPacing() && (this.heldBack = !1, this.RR())
        })), this.RR()
      }
      resend() {
        this.sent = null, this.RR()
      }
      dispose() {
        window.removeEventListener("resize", this.resized), this.stopPacer(), this.pacer.dispose(), clearInterval(this.recheck), null !== this.timer && clearTimeout(this.timer)
      }
      RR() {
        var ee, ie;
        const He = null !== (ee = null === (ie = (0, yH.A)().gameRender()) || void 0 === ie ? void 0 : ie.canvas.width) && void 0 !== ee ? ee : 0;
        if (He <= 0 || window.innerWidth <= 0 || window.innerHeight <= 0) return;
        const ye = window.innerWidth / window.innerHeight,
          be = (0, HH.e)(He),
          Me = this.sent;
        Me && Math.abs(ye / Me.aspect - 1) < .02 && Math.abs(be / Me.tagScale - 1) < .02 || (this.pacer.tryStart() ? (this.sent = {
          aspect: ye,
          tagScale: be
        }, this.api.sendCommand(`santaView ${Math.round(1e3*ye)} ${Math.round(1e3*be)}`)) : this.heldBack = !0)
      }
    }
    var KH = He(39965);
    const UH = [20, 9, 20],
      FH = [8, 12],
      JH = .3,
      oH = [.05, .13],
      RH = {
        kind: "smokePuff"
      },
      kH = [245, 250, 255],
      qH = {
        bk: 900,
        perS: 80
      },
      fH = {
        bk: 360,
        perS: 34
      };
    class TH {
      constructor(ee) {
        this.api = ee, this.tier = (0, li.isMobile)() ? fH : qH, this.system = null, this.at = [0, 0, 0], this.last = [0, 0, 0], this.budget = 0, this.lastMs = 0, this.roofed = !1, this.nextRoofCheckMs = 0
      }
      onAfterRender(ee) {
        const ie = performance.now(),
          He = 0 === this.lastMs ? 0 : Math.min(ie - this.lastMs, 250) / 1e3;
        if (this.lastMs = ie, !this.api.particlesEnabled()) return void this.dispose();
        const ye = Math.hypot(ee[0] - this.last[0], ee[1] - this.last[1], ee[2] - this.last[2]) > 20;
        if (this.last[0] = ee[0], this.last[1] = ee[1], this.last[2] = ee[2], ye && this.dispose(), (ye || ie >= this.nextRoofCheckMs) && (this.nextRoofCheckMs = ie + 250, this.roofed = this.hasRoof(ee)), this.roofed) return void(this.budget = 0);
        const be = this.at;
        let Me;
        be[0] = ee[0], be[1] = ee[1] + 7, be[2] = ee[2], this.system ? (this.budget = Math.min(this.budget + this.tier.perS * He, this.tier.perS / 4), Me = Math.floor(this.budget), this.budget -= Me) : (this.system = this.api.createParticles(this.opts(), {
          pos: be,
          half: UH
        }), Me = Math.floor(this.tier.bk / 2)), Me > 0 && (this.system.moveTo(be, UH), this.system.emit(Me))
      }
      dispose() {
        var ee;
        null === (ee = this.system) || void 0 === ee || ee.dispose(), this.system = null
      }
      hasRoof(ee) {
        let [ie, He, ye] = ee;
        const be = Math.floor(ie),
          Me = Math.floor(ye);
        let Ke = 0;
        for (let Ue = Math.floor(He) + 1; Ue <= Math.floor(He) + 16; Ue++)
          if (Ke = this.api.isSolidToPlayerBlockId(this.api.getBlockId(be, Ue, Me)) ? Ke + 1 : 0, Ke >= 4) return !0;
        return !1
      }
      opts() {
        const [ee, ie, He] = kH;
        return {
          texture: RH,
          bk: this.tier.bk,
          minLifeTime: FH[0] / KH.c,
          maxLifeTime: FH[1] / KH.c,
          minEmitPower: 1.1 * KH.c * .8,
          maxEmitPower: 1.1 * KH.c * 1.2,
          minSize: oH[0],
          maxSize: oH[1],
          emitRate: 0,
          gravity: [0, 0, 0],
          dir1: [-.3, -1, -.3],
          dir2: [JH, -1, JH],
          colorGradients: [{
            timeFraction: 0,
            minColor: [ee, ie, He, 0]
          }, {
            timeFraction: .12,
            minColor: [ee, ie, He, .9]
          }, {
            timeFraction: .85,
            minColor: [ee, ie, He, .9]
          }, {
            timeFraction: 1,
            minColor: [ee, ie, He, 0]
          }],
          blendMode: Pi.e.Standard
        }
      }
    }
    var pH = He(37383);
    const XH = [{
        icon: "gift",
        key: "secretSantaHud:introFind"
      }, {
        icon: "coins",
        key: "secretSantaHud:introCoal"
      }, {
        icon: "eyes",
        key: "secretSantaHud:introWatched"
      }],
      zH = (0, Me.memo)((function() {
        const {
          t: ee
        } = (0, ke.v)();
        return (0, ae.jsxs)("div", {
          className: "SecretSantaIntroLines",
          children: [(0, ae.jsxs)("div", {
            className: "SecretSantaIntroHeadline",
            children: [(0, ae.jsx)(me.e, {
              name: "user-secret"
            }), (0, ae.jsx)("span", {
              children: ee("secretSantaHud:introHeadline")
            })]
          }), XH.map((ie => {
            let {
              icon: He,
              key: ye
            } = ie;
            return (0, ae.jsxs)("div", {
              className: "SecretSantaIntroLine",
              children: [(0, ae.jsx)(me.e, {
                name: He,
                fixedWidth: !0
              }), (0, ae.jsx)("span", {
                children: ee(ye)
              })]
            }, ye)
          }))]
        })
      })),
      BH = (0, Me.memo)((function(ee) {
        let {
          controller: ie
        } = ee;
        return (0, ae.jsx)("div", {
          ref: ie.bindIntro,
          className: "SecretSantaIntro",
          "data-camera-keeper": "",
          "aria-hidden": "true",
          children: (0, ae.jsx)("div", {
            className: "SecretSantaIntroCard",
            children: (0, ae.jsx)(zH, {})
          })
        })
      })),
      EH = "secretSantaIntroShown";
    class gH {
      constructor() {
        this.element = null, this.fade = null, this.fadeLookedAt = -1 / 0, this.armedUntil = 0, this.shownAt = null, this.drawn = -1, this.intro = null, this.introUntil = 0, this.drawnIntro = null, this.bind = ee => {
          this.element = ee, this.drawn = -1
        }, this.bindIntro = ee => {
          this.intro = ee, this.drawnIntro = null
        }
      }
      receiveFlyover(ee) {
        this.armedUntil = performance.now() + ee + 3e3
      }
      frame(ee) {
        const ie = performance.now(),
          He = this.snowAlpha(ie);
        if (this.drawIntro(ie, He), He <= 0) return null !== this.shownAt && (ie < this.armedUntil && this.startIntro(ie), this.armedUntil = 0), this.shownAt = null, void this.draw(0);
        if (null === this.shownAt) {
          if (He < 1 || ee && ie >= this.armedUntil) return void this.draw(0);
          this.shownAt = ie
        }
        this.draw(Math.min(1, (ie - this.shownAt) / 300) * He)
      }
      startIntro(ee) {
        var ie;
        const He = null !== (ie = Re.i.getItem(EH)) && void 0 !== ie ? ie : 0;
        Re.i.setItem(EH, He + 1), this.introUntil = ee + (He < 2 ? 3500 : 2e3)
      }
      drawIntro(ee, ie) {
        0 !== this.introUntil && (ee >= this.introUntil || ie > 0) && (this.introUntil = 0);
        const He = 0 !== this.introUntil;
        this.intro && He !== this.drawnIntro && (this.drawnIntro = He, this.intro.classList.toggle("Shown", He))
      }
      snowAlpha(ee) {
        var ie, He, ye, be;
        (null === (ie = this.fade) || void 0 === ie || !ie.isConnected) && ee - this.fadeLookedAt >= 250 && (this.fadeLookedAt = ee, this.fade = document.querySelector(`[${pH.c}]`));
        const Me = null === (He = this.fade) || void 0 === He ? void 0 : He.style;
        if (!Me || "none" === Me.display) return 0;
        const Ke = null !== (ye = null === (be = Me.backgroundColor.match(/\d+/g)) || void 0 === be ? void 0 : be.slice(0, 3).map(Number)) && void 0 !== ye ? ye : [];
        return 3 === Ke.length && Ke.every((ee => ee >= 200)) && Number(Me.opacity) || 0
      }
      draw(ee) {
        const ie = Math.round(100 * ee) / 100;
        this.element && ie !== this.drawn && (this.drawn = ie, this.element.style.opacity = String(ie), this.element.style.display = ie > 0 ? "flex" : "none")
      }
    }
    const OH = (0, Me.memo)((function(ee) {
        let {
          controller: ie
        } = ee;
        const {
          t: He
        } = (0, ke.v)();
        return (0, ae.jsx)("div", {
          ref: ie.bind,
          className: "SecretSantaSnowTitle",
          "data-camera-keeper": "",
          "aria-hidden": "true",
          children: (0, ae.jsxs)("div", {
            className: "SecretSantaSnowTitleCard",
            children: [(0, ae.jsxs)("div", {
              className: "SecretSantaSnowTitleName",
              children: [(0, ae.jsx)(me.e, {
                name: "hat-santa",
                className: "SecretSantaSnowTitleIcon"
              }), He("secretSantaHud:titleName")]
            }), (0, ae.jsx)(zH, {})]
          })
        })
      })),
      dH = "SecretSantaMode",
      WH = ye.g.UX * ye.g.playerEyeToHeightRatio;

    function tH(ee) {
      document.body.classList.toggle("SecretSantaPodium", ee)
    }
    const ZH = function(ee, ie, He, ye) {
      let {
        localPlayerId: be
      } = ye;
      const Ue = new Ye((() => {
          var ee;
          null === (ee = Te) || void 0 === ee || ee.wrapStarted()
        })),
        Fe = new gH,
        Je = [0, 0, 0];
      let oe = null;
      const Re = [0, 0, 0],
        ke = [0, 0, 0];
      let qe = null,
        fe = null,
        Te = null,
        pe = null,
        Xe = null,
        ze = null,
        Be = null;
      const Ee = ee => {
          qe && null !== ee && ee !== be && !Be && (Be = {
            target: ee,
            at: performance.now(),
            first: null
          })
        },
        ge = (ee, ie) => {
          Be = null, Ue.pressGift(ee.at, ie) && (oe = ee.target)
        },
        Oe = (ee, ie) => {
          if (null === oe) return;
          if (!ee.readDrawnPosition(oe, Re)) return void(oe = null);
          ke[0] = ie[0], ke[1] = ie[1] + WH, ke[2] = ie[2];
          const He = Math.hypot(Re[0] - ie[0], Re[1] - ie[1], Re[2] - ie[2]);
          Ue.aimAtWrap(function(ee, ie, He) {
            const ye = He[0] - ee[0],
              be = He[2] - ee[2],
              Me = Math.hypot(ie[0], ie[2]);
            let Ke = ee[1];
            const Ue = Me > 0 ? (ye * ie[0] + be * ie[2]) / Me : 0;
            Ue > 0 && (Ke += ie[1] / Me * Ue), Ke = Math.max(He[1], Math.min(He[1] + 1.8, Ke));
            const Fe = [ye, Ke - ee[1], be],
              Je = Math.hypot(Fe[0], Fe[1], Fe[2]),
              oe = Math.hypot(ie[0], ie[1], ie[2]);
            if (0 === Je || 0 === oe) return 0;
            const Re = (Fe[0] * ie[0] + Fe[1] * ie[1] + Fe[2] * ie[2]) / (Je * oe);
            return 180 * Math.acos(Math.max(-1, Math.min(1, Re))) / Math.PI
          }(ke, ee.getActionRay().direction, Re), He) || (oe = null)
        },
        de = (ee, ie, He) => {
          const ye = [0, 0, 0];
          He && ee.readDrawnPosition(ie.target, ye) ? ie.first ? ge(ie, function(ee, ie, He, ye) {
            const be = He[0] - ee[0],
              Me = He[1] - ee[1],
              Ke = He[2] - ee[2],
              Ue = Math.hypot(be, Me, Ke);
            return 0 === Ue || ye <= 0 ? {
              distance: Ue,
              awaySpeed: 0
            } : {
              distance: Ue,
              awaySpeed: (be * (He[0] - ie[0]) + Me * (He[1] - ie[1]) + Ke * (He[2] - ie[2])) / Ue / ye
            }
          }(He, ie.first.pos, ye, (performance.now() - ie.first.at) / 1e3)) : ie.first = {
            pos: ye,
            at: performance.now()
          } : ge(ie, null)
        };
      return {
        onCreate: ee => {
          qe = ee, document.body.classList.add(dH), Te = new eH(ee, be), pe = new TH(ee), Xe = new iH(ee), ze = new MH(ee), fe = (0, Ke.z)((0, Me.createElement)(Me.Fragment, null, (0, Me.createElement)(Ei, {
            controller: Ue
          }), (0, Me.createElement)(xe, {
            controller: Ue
          }), (0, Me.createElement)(OH, {
            controller: Fe
          }), (0, Me.createElement)(BH, {
            controller: Fe
          })))
        },
        onClose: () => {
          var ee, ie, He, ye;
          document.body.classList.remove(dH), tH(!1), null === (ee = fe) || void 0 === ee || ee(), fe = null, Ue.dispose(), null === (ie = Te) || void 0 === ie || ie.dispose(), Te = null, null === (He = pe) || void 0 === He || He.dispose(), pe = null, Xe = null, null === (ye = ze) || void 0 === ye || ye.dispose(), ze = null, qe = null
        },
        onPlayerAltAction: (ee, ie, He, ye, be, Me) => {
          Ee(Me)
        },
        onPlayerAttackEntity: (ee, ie) => {
          Ee(ie)
        },
        onAfterRender: (ee, ie) => {
          var He, ye, Me, Ke;
          const oe = null !== (He = qe) && void 0 !== He && He.readDrawnPosition(be, Je) ? Je : null;
          Be && qe && de(qe, Be, oe), qe && oe && Oe(qe, oe), Ue.frame(ie.cameraHeading, oe), null === (ye = Te) || void 0 === ye || ye.frame(ie), null === (Me = pe) || void 0 === Me || Me.onAfterRender(ie.cameraPosition), null === (Ke = Xe) || void 0 === Ke || Ke.frame(oe), Fe.frame(Ue.getView().shown)
        },
        onReceivedMessageFromServer: (ee, ie) => {
          var He;
          if ("secretSantaHint" === ee) Ue.receiveHint(ie), null === (He = Te) || void 0 === He || He.receiveHint(ie);
          else if ("secretSantaStatus" === ee) {
            var ye;
            Ue.receiveStatus(ie), null === (ye = Te) || void 0 === ye || ye.receiveStatus(ie)
          } else if ("secretSantaWrap" === ee) {
            Be && ge(Be, null);
            const {
              santaWrapMs: ee,
              santaWrapDone: He
            } = ie;
            Ue.receiveWrap(ee, He)
          } else if ("secretSantaMarket" === ee) {
            var be;
            null === (be = Te) || void 0 === be || be.reset(), Ue.receiveMarket(ie)
          } else if ("secretSantaBells" === ee) {
            var Me;
            const {
              santaBellsLevel: ee
            } = ie;
            Ue.receiveBells(ee), null === (Me = Te) || void 0 === Me || Me.setBells(ee)
          } else if ("secretSantaFx" === ee) {
            var Ke;
            const ee = ie;
            "toTunnel" === ee.santaFxKind && Ue.snowBlink(), null === (Ke = Te) || void 0 === Ke || Ke.receiveFx(ee)
          } else if ("secretSantaFlyover" === ee) {
            var Je;
            null === (Je = Xe) || void 0 === Je || Je.DR(ie), Fe.receiveFlyover(ie.santaFlyoverWaitMs)
          } else if ("secretSantaPodium" === ee) {
            const {
              santaPodiumShown: ee
            } = ie;
            var oe;
            if (tH(ee), !ee) null === (oe = ze) || void 0 === oe || oe.resend()
          }
        }
      }
    }
  },
  39324: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me,
      i: () => be
    });
    var ye = He(347);
    const be = (0, ye.Ib)([0, 0, -1]),
      Me = [{
        name: "S",
        bearing: (0, ye.Ib)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, ye.Ib)([-1, 0, 0])
      }, {
        name: "N",
        bearing: be
      }, {
        name: "W",
        bearing: (0, ye.Ib)([1, 0, 0])
      }]
  },
  39320: (ee, ie, He) => {
    He.d(ie, {
      b: () => be,
      c: () => Me
    });
    var ye = He(39324);

    function be(ee, ie, He) {
      return [100 * (He.mapMaxX - ee) / (He.mapMaxX - He.mapMinX), 100 * (ie - He.mapMinZ) / (He.mapMaxZ - He.mapMinZ)]
    }

    function Me(ee, ie, He, Me) {
      const [Ke, Ue] = be(ee, ie, Me), Fe = ye.i - He;
      return {
        rotation: Fe,
        transform: `rotate(${Fe}rad) translate(-${Ke}%, -${Ue}%)`
      }
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
  39673: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me
    });
    const ye = 1400,
      be = .45;

    function Me(ee) {
      return ee < ye ? Math.pow(ye / ee, be) : 1
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);