export const id = 14;
export const ids = [14];
export const modules = {
  36650: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => eu,
      f: () => Cu,
      h: () => ku,
      l: () => Su
    });
    var Eu = yu(1035),
      Ku = yu.n(Eu),
      Qu = yu(64),
      mu = yu(80),
      Ju = yu(1328),
      Nu = yu(1408),
      Xu = yu(1325),
      Vu = yu(1247),
      ru = yu(1170),
      Bu = yu(36656),
      xu = yu(1079);

    function Su(uu) {
      const [Ru, yu] = (0, Qu.useState)((() => (0, Bu.n)(uu)));
      return (0, Qu.useEffect)((() => (yu((0, Bu.n)(uu)), (0, Bu.F)((() => {
        yu((0, Bu.n)(uu))
      })))), [uu]), Ru
    }

    function pu(uu, Ru) {
      "function" === typeof uu ? uu(Ru) : uu && (uu.current = Ru)
    }

    function Tu(uu) {
      let {
        tutorial: Ru,
        step: yu,
        enabled: Eu = !0
      } = uu;
      const Ku = Su(Ru);
      return Eu && Ku === yu
    }

    function Wu(uu, Ru) {
      const yu = (0, Bu.p)(uu),
        Eu = yu.indexOf(Ru);
      return !yu.slice(Eu + 1).some((Ru => (0, Bu.t)(uu, Ru)))
    }

    function ju(uu, Ru, yu, Eu) {
      let {
        tutorial: Ku,
        step: Qu,
        waitForClick: mu = !1,
        onPrevious: Ju
      } = uu;
      const Nu = Ru && (0, Bu.s)(Ku, Qu),
        Xu = Ru && !Wu(Ku, Qu),
        ru = mu ? Eu : yu;
      let xu = null;
      Nu ? xu = () => {
        null === Ju || void 0 === Ju || Ju(), (0, Bu.r)(Ku, Qu)
      } : Xu && (xu = () => {
        (0, Bu.j)(Ku)
      }), (0, Vu.t)("popup", null !== ru && void 0 !== ru ? ru : yu, xu, Ru && null !== ru, null, Nu ? void 0 : "controller:menusSkipTutorial")
    }

    function Hu(uu) {
      let {
        tutorial: Ru,
        step: yu,
        text: Eu,
        waitForClick: Ku = !1,
        onPrevious: Qu
      } = uu;
      const {
        t: mu
      } = (0, ru.E)(), Ju = Wu(Ru, yu);
      return (0, xu.jsxs)(xu.Fragment, {
        children: [(0, xu.jsx)("div", {
          className: "TutorialStepText",
          children: Eu
        }), (0, xu.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, Bu.s)(Ru, yu) && (0, xu.jsx)(Nu.f, {
            className: "TutorialStepButton",
            onClick: () => {
              null === Qu || void 0 === Qu || Qu(), (0, Bu.r)(Ru, yu)
            },
            children: mu("tutorial:back")
          }), !Ku && (0, xu.jsx)(Nu.e, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Bu.e)(yu)
            },
            padDefaultFocus: !0,
            children: mu(Ju ? "tutorial:done" : "tutorial:next")
          }), !Ju && (0, xu.jsx)(Nu.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Bu.j)(Ru)
            },
            children: mu("tutorial:skip")
          })]
        })]
      })
    }
    const du = 6;

    function bu(uu) {
      let {
        rect: Ru,
        margin: yu
      } = uu;
      const Eu = Math.max(0, Ru.top - yu),
        Ku = Ru.bottom + yu,
        Qu = Math.max(0, Ru.left - yu),
        mu = Ru.right + yu;
      return (0, xu.jsxs)(xu.Fragment, {
        children: [(0, xu.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: Eu
          }
        }), (0, xu.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Ku,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, xu.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Eu,
            left: 0,
            width: Qu,
            height: Ku - Eu
          }
        }), (0, xu.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Eu,
            left: mu,
            right: 0,
            height: Ku - Eu
          }
        })]
      })
    }

    function Cu(uu) {
      let {
        target: Ru,
        placement: yu,
        boxRef: Eu,
        className: Nu,
        spotlightMargin: Vu = du,
        children: ru
      } = uu;
      const {
        getArrowProps: Bu,
        getTooltipProps: Su,
        setTooltipRef: pu,
        setTriggerRef: Tu
      } = (0, Ju.c)({
        placement: yu,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, Vu]
      });
      (0, Qu.useLayoutEffect)((() => {
        Tu(Ru)
      }), [Ru, Tu]);
      const Wu = function(uu, Ru) {
        const [yu, Eu] = (0, Qu.useState)(null);
        return (0, Qu.useEffect)((() => {
          if (!Ru || !uu) return void Eu(null);
          let yu = 0,
            Ku = null;
          const Qu = () => {
            const Ru = uu.getBoundingClientRect();
            Ku && Ru.left === Ku.left && Ru.top === Ku.top && Ru.width === Ku.width && Ru.height === Ku.height || (Ku = Ru, Eu(Ru)), yu = requestAnimationFrame(Qu)
          };
          return Qu(), () => {
            cancelAnimationFrame(yu)
          }
        }), [uu, Ru]), yu
      }(Ru, !0);
      (0, Qu.useEffect)((() => {
        null === Ru || void 0 === Ru || Ru.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [Ru]);
      const ju = (0, Qu.useCallback)((uu => {
        pu(uu), Eu && (Eu.current = uu)
      }), [pu, Eu]);
      return (0, mu.createPortal)((0, xu.jsxs)(xu.Fragment, {
        children: [Wu && (0, xu.jsx)(bu, {
          rect: Wu,
          margin: Vu
        }), (0, xu.jsxs)("div", {
          ref: ju,
          ...Su({
            className: Ku()("tooltip-container SmallTextLight TutorialStep", Nu)
          }),
          children: [ru, (0, xu.jsx)("div", {
            ...Bu({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, Xu.m)())
    }
    const ku = (0, Qu.forwardRef)((function(uu, Ru) {
      let {
        placement: yu = "right",
        children: Eu,
        ...Ku
      } = uu;
      const mu = Tu(Ku),
        Ju = (0, Qu.useRef)(null),
        Nu = (0, Qu.useRef)(null);
      ju(Ku, mu, Ju, Nu);
      const [Xu, Vu] = (0, Qu.useState)(null), ru = Eu.ref, Bu = (0, Qu.useCallback)((uu => {
        Nu.current = uu, Vu(uu), pu(Ru, uu), pu(ru, uu)
      }), [Ru, ru]);
      return (0, xu.jsxs)(xu.Fragment, {
        children: [(0, Qu.cloneElement)(Eu, {
          ref: Bu
        }), mu && (0, xu.jsx)(Cu, {
          target: Xu,
          placement: yu,
          boxRef: Ju,
          children: (0, xu.jsx)(Hu, {
            ...Ku
          })
        })]
      })
    }));

    function eu(uu) {
      const Ru = Tu(uu),
        yu = (0, Qu.useRef)(null);
      return ju(uu, Ru, yu, null), Ru ? (0, mu.createPortal)((0, xu.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, xu.jsx)("div", {
          ref: yu,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, xu.jsx)(Hu, {
            ...uu
          })
        })
      }), (0, Xu.m)()) : null
    }
  },
  38308: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu
    });
    const Eu = 4,
      Ku = 12e3,
      Qu = 1e3;
    class mu {
      constructor() {
        let {
          limit: uu = Eu,
          windowMs: Ru = Ku,
          spacingMs: yu = Qu,
          now: mu = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = uu, this.windowMs = Ru, this.spacingMs = yu, this.now = mu
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const uu of this.priority) uu.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const uu = this.now();
        this.sent.push(uu), this.lastSentAt = uu, this.schedule(), this.notify()
      }
      addPriority(uu) {
        return this.priority.add(uu), () => {
          this.priority.delete(uu)
        }
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const uu of this.priority)
          if (uu.waiting()) return !0;
        return !1
      }
      prune() {
        const uu = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= uu;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const uu = this.now(),
          Ru = this.lastSentAt + this.spacingMs,
          yu = Math.min(Ru > uu ? Ru : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        yu !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, yu - uu)))
      }
      notify() {
        for (const uu of this.listeners) uu()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  36449: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      d: () => pu,
      h: () => Tu,
      k: () => Ju,
      o: () => Bu,
      p: () => Wu,
      q: () => ru,
      u: () => Hu,
      v: () => Su,
      w: () => ju
    });
    var Eu = yu(27),
      Ku = yu(34);
    const Qu = "clientGameInventoryButtonsChanged",
      mu = new Map;

    function Ju() {
      return [...mu.values()].sort(((uu, Ru) => {
        var yu, Eu;
        return (null !== (yu = uu.order) && void 0 !== yu ? yu : 0) - (null !== (Eu = Ru.order) && void 0 !== Eu ? Eu : 0)
      }))
    }
    let Nu = null;

    function Xu(uu) {
      Nu = uu
    }
    let Vu = !1;

    function ru(uu) {
      Vu = !0;
      try {
        uu.onClick()
      } finally {
        Vu = !1
      }
      uu.panel && "clientGame" === Eu.d.get("openInGameMenuName") && Xu(uu.id)
    }

    function Bu() {
      return Vu
    }

    function xu() {
      return Ju().filter((uu => uu.panel && !uu.disabled))
    }

    function Su(uu) {
      const Ru = xu(),
        yu = Ru.findIndex((uu => uu.id === Nu));
      return !(yu < 0 || Ru.length < 2) && (ru(Ru[(yu + uu + Ru.length) % Ru.length]), !0)
    }

    function pu() {
      return null !== Nu && xu().length > 1
    }

    function Tu() {
      Xu(null)
    }

    function Wu() {
      "inventory" !== Eu.d.get("openInGameMenuName") && Xu(null)
    }

    function ju() {
      const uu = Nu;
      return Xu(null), uu
    }

    function Hu(uu) {
      return mu.set(uu.id, uu), Ku.k.Op(Qu, Ju(), !0), () => {
        mu.get(uu.id) === uu && (mu.delete(uu.id), Ku.k.Op(Qu, Ju()))
      }
    }
  },
  38299: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu
    });
    class Eu {
      constructor(uu, Ru, yu) {
        this.Op = uu, this.beforeOpen = Ru, this.afterClose = yu, this.open = !1, this.VS = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.VS && (this.open = !0, this.beforeOpen(this), this.emit())
        }, this.close = () => {
          this.closePanel(!1)
        }, this.dismiss = () => {
          this.closePanel(!0)
        }
      }
      isOpen() {
        return this.open
      }
      showOrRefresh() {
        this.open ? this.emit() : this.show()
      }
      closePanel(uu) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(uu)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.VS = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.VS || (this.snapshot = this.buildSnapshot(), this.Op(this.snapshot))
      }
    }
  },
  36445: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju,
      f: () => Tu,
      i: () => Wu,
      m: () => Bu,
      o: () => Xu,
      q: () => pu,
      u: () => xu,
      w: () => Vu
    });
    var Eu = yu(27),
      Ku = yu(34),
      Qu = yu(1250),
      mu = yu(36449);
    const Ju = "clientGameUiChanged";
    let Nu = null;

    function Xu() {
      return Nu
    }

    function Vu(uu, Ru) {
      const yu = {
        content: uu,
        menu: Ru
      };
      return Nu = yu, Ku.k.Op(Ju, Nu, !0), () => {
        Nu === yu && (Nu = null, Su = !1, Tu(), Ku.k.Op(Ju, null))
      }
    }
    let ru = null;

    function Bu() {
      return ru
    }

    function xu(uu) {
      return ru = uu, () => {
        ru === uu && (ru = null)
      }
    }
    let Su = !1;

    function pu() {
      const uu = Eu.d.get("openInGameMenuName");
      "clientGame" !== uu && (Su = "inventory" === uu), (0, mu.o)() || (0, mu.h)(), (0, Qu.o)(Qu.b), Eu.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Tu() {
      ju(!1)
    }

    function Wu() {
      ju(Su)
    }

    function ju(uu) {
      "clientGame" === Eu.d.get("openInGameMenuName") && Eu.d.set({
        openInGameMenuName: uu ? "inventory" : null
      }), uu || (0, mu.h)(), Su = !1
    }
  },
  39028: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => Vy
    });
    var Eu = yu(64);
    var Ku = yu(27),
      Qu = yu(1836),
      mu = yu(34),
      Ju = yu(36445),
      Nu = yu(1035),
      Xu = yu.n(Nu),
      Vu = yu(1400),
      ru = yu(1170),
      Bu = yu(4301),
      xu = yu(1302),
      Su = yu(1408),
      pu = yu(1841),
      Tu = yu(1325),
      Wu = yu(1825),
      ju = yu(1899),
      Hu = yu(228);
    const du = yu(39031),
      bu = Object.fromEntries(du.keys().map((uu => [uu.replace(/^\.\/(.*)\.webp$/, "$1"), du(uu)]))),
      Cu = new Set;

    function ku(uu, Ru) {
      const yu = Ru ? uu : `${uu}-uncaught`,
        Eu = (0, Hu.b)(bu, yu);
      return void 0 !== Eu || Cu.has(yu) || (Cu.add(yu), console.warn(`Containment Breach has no mugshot ${yu}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), Eu
    }
    var eu = yu(1079);
    const Au = "containmentBreach",
      Du = "Gold Coin";

    function Mu(uu) {
      let {
        open: Ru,
        onDismiss: yu,
        title: Eu,
        className: Ku,
        decor: Qu,
        headerExtra: mu,
        status: Ju,
        statusRefused: Nu = !1,
        children: Vu
      } = uu;
      const ru = `${Ku}Title`;
      return (0, eu.jsx)(Bu.e, {
        show: Ru,
        close: yu,
        togglePointerLock: !1,
        className: "ContainmentBoardOverlay",
        children: (0, eu.jsxs)("section", {
          className: Xu()("ContainmentBoardPanel", Ku),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": ru,
          children: [Qu && (0, eu.jsx)("div", {
            className: "BoardDecor",
            "aria-hidden": "true",
            children: Qu
          }), (0, eu.jsxs)("header", {
            className: "BoardHeader",
            children: [(0, eu.jsx)("h2", {
              id: ru,
              className: "VisuallyHidden",
              children: Eu
            }), mu, (0, eu.jsx)(Su.h, {
              onClick: yu
            })]
          }), (0, eu.jsx)("div", {
            className: "BoardBody",
            children: Vu
          }), void 0 !== Ju && (0, eu.jsx)("footer", {
            className: Xu()("BoardStatus", {
              Refused: Nu
            }),
            children: Ju
          })]
        })
      })
    }

    function Iu(uu) {
      let {
        itemName: Ru
      } = uu;
      return (0, eu.jsx)(pu.c, {
        itemName: Ru,
        amount: 0
      })
    }

    function Gu(uu) {
      let {
        anomalyId: Ru,
        caught: yu
      } = uu;
      const Ku = (0, Eu.useRef)(null);
      return (0, xu.b)(Ku, !yu), (0, eu.jsx)("span", {
        ref: Ku,
        className: Xu()("BoardMugshot", {
          Uncaught: !yu
        }),
        children: (0, eu.jsx)("img", {
          src: ku(Ru, yu),
          alt: "",
          draggable: !1
        })
      })
    }

    function Uu(uu) {
      let {
        itemName: Ru,
        amount: yu,
        jJ: Eu,
        inTile: Ku = !1
      } = uu;
      return (0, eu.jsx)(Tu.i, {
        delayShow: 200,
        hoverOnly: Ku,
        placement: "top",
        tooltipClassName: "BoardChipTooltipBox",
        tooltipInner: (0, eu.jsx)(su, {
          itemName: Ru,
          amount: yu,
          jJ: Eu
        }),
        children: (0, eu.jsxs)("span", {
          className: Xu()("BoardChip", {
            Short: void 0 !== Eu && Eu < yu
          }),
          children: [(0, eu.jsx)("span", {
            className: "BoardChipIcon",
            children: (0, eu.jsx)(Iu, {
              itemName: Ru
            })
          }), yu.toLocaleString()]
        })
      })
    }
    const nu = /^(.*?)\s*Salvaged from (?:an? )?(.+?)\.?$/;

    function su(uu) {
      var Ru;
      let {
        itemName: yu,
        amount: Eu,
        jJ: Ku
      } = uu;
      const {
        t: Qu
      } = (0, ru.E)(), mu = (0, ju.h)("itemInfo", (uu => uu[yu])), {
        lore: Ju,
        droppedBy: Nu
      } = function(uu) {
        if ("string" !== typeof uu) return {
          lore: uu,
          droppedBy: null
        };
        const Ru = nu.exec(uu);
        return null === Ru ? {
          lore: uu,
          droppedBy: null
        } : {
          lore: "" === Ru[1] ? void 0 : Ru[1],
          droppedBy: Ru[2]
        }
      }(null === mu || void 0 === mu ? void 0 : mu.description);
      return (0, eu.jsxs)("div", {
        className: "BoardChipTooltip",
        children: [(0, eu.jsxs)("div", {
          className: "BoardChipTooltipHeader",
          children: [(0, eu.jsx)("span", {
            className: "BoardChipTooltipIcon",
            children: (0, eu.jsx)(Iu, {
              itemName: yu
            })
          }), (0, eu.jsx)(Wu.d, {
            text: null !== (Ru = null === mu || void 0 === mu ? void 0 : mu.displayName) && void 0 !== Ru ? Ru : yu,
            className: "BoardChipTooltipName"
          })]
        }), (void 0 !== Ju || null !== Nu) && (0, eu.jsxs)("div", {
          className: "BoardChipTooltipBody",
          children: [void 0 !== Ju && (0, eu.jsx)(Wu.d, {
            text: Ju,
            className: "BoardChipTooltipDescription"
          }), null !== Nu && (0, eu.jsxs)("span", {
            className: "BoardChipTooltipSource",
            children: [(0, eu.jsx)("span", {
              className: "BoardChipTooltipLabel",
              children: Qu(`${Au}:chipDroppedBy`)
            }), Nu]
          })]
        }), void 0 !== Ku && (0, eu.jsxs)("div", {
          className: Xu()("BoardChipTooltipHeld", {
            Short: Ku < Eu
          }),
          children: [(0, eu.jsx)("span", {
            className: "BoardChipTooltipLabel",
            children: Qu(`${Au}:chipYouHave`)
          }), (0, eu.jsxs)("span", {
            className: "BoardChipTooltipCount",
            children: [(0, eu.jsx)("span", {
              className: "BoardChipTooltipHeldAmount",
              children: Ku.toLocaleString()
            }), ` / ${Eu.toLocaleString()}`]
          }), (0, eu.jsx)("span", {
            className: "BoardChipTooltipMeter",
            children: (0, eu.jsx)("span", {
              style: {
                width: (Eu > 0 ? 100 * Math.min(1, Ku / Eu) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function tu(uu) {
      let {
        icon: Ru,
        name: yu,
        selected: Eu,
        locked: Ku,
        className: Qu,
        buttonRef: mu,
        onSelect: Ju,
        children: Nu
      } = uu;
      return (0, eu.jsxs)("button", {
        ref: mu,
        type: "button",
        className: Xu()("BoardTile", Qu, {
          Selected: Eu,
          Locked: Ku
        }),
        onClick: Ju,
        children: [(0, eu.jsx)("span", {
          className: "BoardTileIcon",
          children: Ru
        }), (0, eu.jsx)("span", {
          className: "BoardTileName",
          children: yu
        }), Nu]
      })
    }

    function lu(uu) {
      let {
        icon: Ru,
        name: yu,
        children: Eu
      } = uu;
      return (0, eu.jsxs)("header", {
        className: "BoardDetailHeader",
        children: [(0, eu.jsx)("span", {
          className: "BoardDetailIcon",
          children: Ru
        }), (0, eu.jsxs)("div", {
          className: "BoardDetailHeading",
          children: [(0, eu.jsx)("h3", {
            children: yu
          }), (0, eu.jsx)("span", {
            className: "BoardDetailStatus",
            children: Eu
          })]
        })]
      })
    }

    function gu(uu) {
      let {
        coins: Ru,
        children: yu
      } = uu;
      return (0, eu.jsxs)("div", {
        className: "BoardWallet",
        children: [(0, eu.jsx)(Uu, {
          itemName: Du,
          amount: Ru
        }), yu]
      })
    }
    var cu = yu(38299);
    const Lu = "containmentCodexView";
    class zu extends cu.b {
      constructor() {
        super(...arguments), this.entries = [], this.selectedId = "", this.snapshot = this.buildSnapshot(), this.select = uu => {
          this.selectedId = uu, this.emit()
        }
      }
      SS(uu) {
        this.entries = uu.codexEntries, this.selectedId = this.entries[0].codexEntryId, this.showOrRefresh()
      }
      buildSnapshot() {
        return {
          open: this.open,
          entries: this.entries,
          selectedId: this.selectedId
        }
      }
    }
    const Fu = {
        codexAnyDifficulty: `${Au}:codexNeedsAny`,
        codexNormalOnly: `${Au}:codexNeedsNormal`,
        codexHardOnly: `${Au}:codexNeedsHard`
      },
      wu = {
        codexContained: "Contained",
        codexEncountered: "Sighted",
        codexUnidentified: "Unknown"
      },
      Zu = {
        codexContained: `${Au}:codexContainedBadge`,
        codexEncountered: `${Au}:codexEncounteredBadge`,
        codexUnidentified: `${Au}:codexUnidentifiedBadge`
      },
      hu = ["94%", "81%", "88%", "46%", "72%"];

    function Pu(uu) {
      let {
        entry: Ru
      } = uu;
      const {
        t: yu
      } = (0, ru.E)();
      return (0, eu.jsx)("span", {
        className: Xu()("BoardBadge", wu[Ru.codexEntryState]),
        children: yu(Zu[Ru.codexEntryState])
      })
    }

    function iu(uu) {
      const {
        t: Ru
      } = (0, ru.E)();
      return "codexUnidentified" === uu.codexEntryState ? Ru(`${Au}:codexUnidentifiedName`) : uu.codexEntryName
    }

    function Yu(uu) {
      let {
        entry: Ru
      } = uu;
      return "codexUnidentified" === Ru.codexEntryState ? (0, eu.jsx)(Iu, {
        itemName: "Book"
      }) : (0, eu.jsxs)("span", {
        className: "CodexPhoto",
        children: [(0, eu.jsx)(Gu, {
          anomalyId: Ru.codexEntryId,
          caught: "codexContained" === Ru.codexEntryState
        }), (0, eu.jsx)("img", {
          className: "CodexPaperclip",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGNggIIXb97/X7V57/+Wvtn/GZDBqs17UQTgClahScBATHrlf5ySeHWimo9NMbokCp9OkmD/oasGCaJLAAC5ZUIBS85GiAAAAABJRU5ErkJggg==",
          alt: "",
          draggable: !1
        })]
      })
    }

    function ou(uu) {
      let {
        entry: Ru,
        selected: yu,
        onSelect: Eu
      } = uu;
      const Ku = "codexUnidentified" === Ru.codexEntryState;
      return (0, eu.jsxs)(tu, {
        icon: (0, eu.jsx)(Yu, {
          entry: Ru
        }),
        name: iu(Ru),
        selected: yu,
        locked: Ku,
        className: Xu()("CodexFolder", wu[Ru.codexEntryState]),
        onSelect: () => {
          Eu(Ru.codexEntryId)
        },
        children: [!Ku && (0, eu.jsx)(Pu, {
          entry: Ru
        }), Ku && (0, eu.jsx)("img", {
          className: "CodexSeal",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARElEQVR4nGNggIIGHp7/MAzjw+TAnMf+/mB8RkQEjOGKYZLIgsiK4AqQJZA1gBXAOHgVwCRQJJEdCVOEYj8yQPciTAEAz0hgyamUqskAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        })]
      })
    }

    function qu(uu) {
      let {
        count: Ru
      } = uu;
      const yu = [];
      for (let Eu = Math.min(Ru, 25); Eu > 0; Eu -= 5) yu.push(Math.min(Eu, 5));
      return (0, eu.jsx)("span", {
        className: "CodexTallyMarks",
        "aria-hidden": "true",
        children: yu.map(((uu, Ru) => (0, eu.jsx)("span", {
          className: Xu()("CodexTallyGroup", {
            Gate: 5 === uu
          }),
          children: Array.from({
            length: Math.min(uu, 4)
          }, ((uu, Ru) => (0, eu.jsx)("span", {
            className: "CodexTallyMark"
          }, Ru)))
        }, Ru)))
      })
    }

    function Ou(uu) {
      let {
        contained: Ru,
        total: yu
      } = uu;
      const {
        t: Eu
      } = (0, ru.E)();
      return (0, eu.jsxs)("div", {
        className: "CodexProgress",
        children: [Eu(`${Au}:codexProgress`, {
          contained: String(Ru),
          total: String(yu)
        }), (0, eu.jsx)("span", {
          className: "CodexProgressMeter",
          children: (0, eu.jsx)("span", {
            style: {
              width: Ru / yu * 100 + "%"
            }
          })
        })]
      })
    }

    function vu(uu) {
      let {
        entry: Ru,
        fileNumber: yu
      } = uu;
      const {
        t: Eu
      } = (0, ru.E)(), Ku = "codexContained" === Ru.codexEntryState;
      return (0, eu.jsx)("section", {
        className: "BoardDetail",
        children: (0, eu.jsxs)("article", {
          className: Xu()("CodexDossier", wu[Ru.codexEntryState]),
          children: [(0, eu.jsx)("span", {
            className: "CodexFileNumber",
            children: Eu(`${Au}:codexFileNumber`, {
              number: String(yu).padStart(3, "0")
            })
          }), (0, eu.jsx)(lu, {
            icon: (0, eu.jsx)(Yu, {
              entry: Ru
            }),
            name: iu(Ru),
            children: (0, eu.jsx)(Pu, {
              entry: Ru
            })
          }), Ku && (0, eu.jsxs)(eu.Fragment, {
            children: [(0, eu.jsx)("p", {
              className: "BoardDescription",
              children: Ru.codexEntryLore
            }), (0, eu.jsxs)("p", {
              className: "CodexTally",
              children: [Eu(`${Au}:codexContainments`, {
                count: String(Ru.codexEntryContainedCount)
              }), (0, eu.jsx)(qu, {
                count: Ru.codexEntryContainedCount
              })]
            }), (0, eu.jsx)("span", {
              className: "CodexClosedStamp",
              "aria-hidden": "true",
              children: Eu(`${Au}:codexContainedBadge`)
            })]
          }), !Ku && (0, eu.jsxs)(eu.Fragment, {
            children: [(0, eu.jsxs)("div", {
              className: "CodexRedaction",
              children: [hu.map((uu => (0, eu.jsx)("span", {
                className: "CodexRedactedLine",
                style: {
                  width: uu
                }
              }, uu))), (0, eu.jsx)("p", {
                className: "CodexRedacted",
                children: Eu(`${Au}:codexRedacted`)
              })]
            }), "" !== Ru.codexEntryHint && (0, eu.jsxs)("aside", {
              className: "CodexNote",
              children: [(0, eu.jsx)("h4", {
                children: Eu(`${Au}:codexHintLabel`)
              }), (0, eu.jsx)("p", {
                children: Ru.codexEntryHint
              })]
            }), (0, eu.jsx)("p", {
              className: "CodexClearance",
              children: Eu(Fu[Ru.codexEntryDifficulty])
            })]
          })]
        })
      })
    }

    function au(uu) {
      let {
        controller: Ru
      } = uu;
      const yu = (0, Vu.h)(Lu, Ru.getSnapshot()),
        {
          t: Eu
        } = (0, ru.E)();
      if (0 === yu.entries.length) return null;
      const Ku = yu.entries.find((uu => uu.codexEntryId === yu.selectedId)),
        Qu = yu.entries.filter((uu => "codexContained" === uu.codexEntryState)).length,
        mu = yu.entries.map((uu => uu.codexEntryId)).sort().indexOf(Ku.codexEntryId) + 1;
      return (0, eu.jsxs)(Mu, {
        open: yu.open,
        onDismiss: Ru.dismiss,
        title: Eu(`${Au}:codexTitle`),
        className: "ContainmentCodexPanel",
        headerExtra: (0, eu.jsx)(Ou, {
          contained: Qu,
          total: yu.entries.length
        }),
        children: [(0, eu.jsx)("div", {
          className: "BoardTiles",
          children: yu.entries.map((uu => (0, eu.jsx)(ou, {
            entry: uu,
            selected: uu === Ku,
            onSelect: Ru.select
          }, uu.codexEntryId)))
        }), (0, eu.jsx)(vu, {
          entry: Ku,
          fileNumber: mu
        })]
      })
    }
    var fu = yu(343);
    class uR extends cu.b {
      constructor(uu, Ru, yu, Eu, Ku, Qu) {
        super(uu, Ru, yu), this.pacer = Eu, this.command = Ku, this.predict = Qu, this.board = null, this.confirmed = null, this.selectedId = "", this.notice = null, this.unsubscribePacer = void 0, this.select = uu => {
          this.selectedId = uu, this.emit()
        }, this.act = (uu, Ru) => {
          if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${uu} ${Ru}`, this.rollBack)) return;
          const yu = this.predict(this.board, uu, Ru);
          null !== yu && (this.board = yu.board, this.notice = yu.notice, this.emit())
        }, this.rollBack = () => {
          this.board !== this.confirmed && (this.board = this.confirmed, this.notice = null)
        }, this.unsubscribePacer = Eu.subscribe((() => {
          this.emit()
        }))
      }
      SS(uu) {
        const Ru = this.messageOpens(uu);
        if (Ru && this.open) return this.board === this.confirmed && (this.board = uu), this.confirmed = uu, void this.emit();
        if (this.board = uu, this.confirmed = uu, this.pacer.onReply(), Ru) return this.notice = null, this.selectedId = this.openingSelection(uu), void this.show();
        const yu = this.messageNotice(uu);
        null !== yu && (this.notice = yu), this.emit()
      }
      dispose() {
        this.unsubscribePacer(), super.dispose()
      }
      onClosed() {
        this.notice = null
      }
    }

    function RR(uu, Ru) {
      return uu.loadoutCoins >= Ru.loadoutCostCoins && Ru.loadoutCostParts.every((Ru => function(uu, Ru) {
        return yR(uu, Ru).loadoutHeldPartAmount
      }(uu, Ru.loadoutPartCurrency) >= Ru.loadoutPartAmount))
    }

    function yR(uu, Ru) {
      return uu.loadoutHeldParts.find((uu => uu.loadoutHeldPartCurrency === Ru))
    }

    function ER(uu, Ru) {
      return uu.loadoutSlots.find((uu => uu.loadoutSlotKind === Ru))
    }

    function KR(uu) {
      return uu.loadoutPerks.filter((uu => uu.loadoutPerkEquipped)).length >= uu.loadoutMaxPerks
    }

    function QR(uu, Ru, yu) {
      for (const Ku of uu.loadoutSlots) {
        const Eu = Ku.loadoutSlotOptions.find((uu => uu.loadoutOptionId === yu));
        if (Eu) return "loadoutArmour" === Ku.loadoutSlotKind ? JR(uu, Ku, Eu, Ru) : mR(uu, Ku, Eu, Ru)
      }
      const Eu = uu.loadoutPerks.find((uu => uu.loadoutPerkId === yu));
      return Eu ? function(uu, Ru, yu) {
        const Eu = Ru.loadoutPerkOwned,
          Ku = Ru.loadoutPerkEquipped,
          Qu = Ru.loadoutPerkName,
          mu = KR(uu);
        if ("loadoutUnlock" === yu) {
          if (Eu || !RR(uu, Ru.loadoutPerkCost)) return null;
          const yu = {
            ...Ru,
            loadoutPerkOwned: !0,
            loadoutPerkEquipped: !mu
          };
          return {
            board: XR(VR(uu, Ru.loadoutPerkCost), yu),
            notice: rR(mu ? "loadoutNoticeUnlockedNoRoom" : "loadoutNoticeUnlocked", Qu)
          }
        }
        if ("loadoutUpgrade" === yu || !Eu || "loadoutEquip" === yu === Ku || !Ku && mu) return null;
        return {
          board: XR(uu, {
            ...Ru,
            loadoutPerkEquipped: !Ku
          }),
          notice: rR(Ku ? "loadoutNoticeUnequipped" : "loadoutNoticeEquipped", Qu)
        }
      }(uu, Eu, Ru) : null
    }

    function mR(uu, Ru, yu, Eu) {
      const Ku = yu.loadoutOptionOwnedTier,
        Qu = yu.loadoutOptionName;
      if ("loadoutEquip" === Eu) return 0 === Ku ? null : {
        board: NR(uu, Ru, yu.loadoutOptionId, null),
        notice: rR("loadoutNoticeEquipped", Qu)
      };
      const mu = "loadoutUnlock" === Eu;
      if (mu && 0 !== Ku || "loadoutUpgrade" === Eu && (0 === Ku || Ku >= yu.loadoutOptionTiers.length) || "loadoutUnequip" === Eu) return null;
      const Ju = yu.loadoutOptionTiers[Ku].loadoutTierCost;
      if (!RR(uu, Ju)) return null;
      const Nu = {
          ...yu,
          loadoutOptionOwnedTier: Ku + 1
        },
        Xu = mu ? yu.loadoutOptionId : Ru.loadoutSlotEquippedId;
      return {
        board: NR(VR(uu, Ju), Ru, Xu, Nu),
        notice: mu ? rR("loadoutNoticeUnlocked", Qu) : rR("loadoutNoticeUpgraded", Qu, Ku + 1)
      }
    }

    function JR(uu, Ru, yu, Eu) {
      const Ku = yu.loadoutOptionOwnedTier > 0,
        Qu = yu.loadoutOptionName;
      if ("loadoutEquip" === Eu && Ku) return {
        board: NR(uu, Ru, yu.loadoutOptionId, null),
        notice: rR("loadoutNoticeEquipped", Qu)
      };
      const mu = yu.loadoutOptionTiers[0].loadoutTierCost;
      return "loadoutUnlock" !== Eu || Ku || !RR(uu, mu) ? null : {
        board: NR(VR(uu, mu), Ru, yu.loadoutOptionId, {
          ...yu,
          loadoutOptionOwnedTier: 1
        }),
        notice: rR("loadoutNoticeUnlocked", Qu)
      }
    }

    function NR(uu, Ru, yu, Eu) {
      const Ku = {
        ...Ru,
        loadoutSlotEquippedId: yu,
        loadoutSlotOptions: Ru.loadoutSlotOptions.map((uu => null !== Eu && uu.loadoutOptionId === Eu.loadoutOptionId ? Eu : uu))
      };
      return {
        ...uu,
        loadoutSlots: uu.loadoutSlots.map((uu => uu === Ru ? Ku : uu))
      }
    }

    function XR(uu, Ru) {
      return {
        ...uu,
        loadoutPerks: uu.loadoutPerks.map((uu => uu.loadoutPerkId === Ru.loadoutPerkId ? Ru : uu))
      }
    }

    function VR(uu, Ru) {
      return {
        ...uu,
        loadoutCoins: uu.loadoutCoins - Ru.loadoutCostCoins,
        loadoutHeldParts: uu.loadoutHeldParts.map((uu => {
          const yu = Ru.loadoutCostParts.find((Ru => Ru.loadoutPartCurrency === uu.loadoutHeldPartCurrency));
          return yu ? {
            ...uu,
            loadoutHeldPartAmount: uu.loadoutHeldPartAmount - yu.loadoutPartAmount
          } : uu
        }))
      }
    }

    function rR(uu, Ru) {
      return {
        loadoutNoticeKey: uu,
        loadoutNoticeRefused: !1,
        loadoutNoticeName: Ru,
        loadoutNoticeTier: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      }
    }
    const BR = "containmentLoadoutView";
    class xR extends uR {
      constructor(uu, Ru, yu, Eu) {
        super(uu, Ru, yu, Eu, "loadout", QR), this.slot = "loadoutPrimary", this.snapshot = this.buildSnapshot(), this.selectSlot = uu => {
          this.slot = uu, this.selectedId = SR(this.board, uu), this.emit()
        }
      }
      messageOpens(uu) {
        return uu.loadoutMessageOpens
      }
      messageNotice(uu) {
        return uu.loadoutNotice
      }
      openingSelection(uu) {
        return SR(uu, this.slot)
      }
      buildSnapshot() {
        return {
          open: this.open,
          loadout: this.board,
          slot: this.slot,
          selectedId: this.selectedId,
          pending: this.pacer.isPending(),
          notice: this.notice
        }
      }
    }

    function SR(uu, Ru) {
      if ("loadoutPerks" === Ru) {
        var yu;
        const Ru = uu.loadoutPerks;
        return (null !== (yu = Ru.find((uu => uu.loadoutPerkEquipped))) && void 0 !== yu ? yu : Ru[0]).loadoutPerkId
      }
      return ER(uu, Ru).loadoutSlotEquippedId
    }
    const pR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAY0lEQVR4nGNgIAP8x4FRwP/sFt3/EYU6YBqGIwp1MBSDBUH4/3nW//83csD5DOgKfeKNsWIMhV+///qvbOT7/87cMjCG8TEUgiSLqlpRMEgMQ+HJvgy4aTAMEsPqc2KChyAAAFxNbnylK5O6AAAAAElFTkSuQmCC";
    var TR = yu(36650),
      WR = yu(1247);
    const jR = {
        loadoutPrimary: `${Au}:loadoutSlotPrimary`,
        loadoutSecondary: `${Au}:loadoutSlotSecondary`,
        loadoutOffensive: `${Au}:loadoutSlotOffensive`,
        loadoutSelfHelp: `${Au}:loadoutSlotSelfHelp`,
        loadoutArmour: `${Au}:loadoutSlotArmour`,
        loadoutPerks: `${Au}:loadoutSlotPerks`
      },
      HR = {
        section: "right",
        cB: "bottom",
        act: "top"
      },
      dR = (0, Eu.createContext)({
        step: null,
        targetRef: () => {}
      });

    function bR() {
      const {
        step: uu,
        targetRef: Ru
      } = (0, Eu.useContext)(dR);
      return (yu, Eu) => (null === uu || void 0 === uu ? void 0 : uu.kind) === yu && uu.id === Eu ? Ru : void 0
    }

    function CR(uu, Ru) {
      const yu = Ru.loadoutTargetId;
      if ("loadoutPerks" === Ru.loadoutTargetSection) {
        const Ru = uu.loadoutPerks.find((uu => uu.loadoutPerkId === yu));
        return {
          name: Ru.loadoutPerkName,
          owned: Ru.loadoutPerkOwned,
          equipped: Ru.loadoutPerkEquipped
        }
      }
      const Eu = ER(uu, Ru.loadoutTargetSection),
        Ku = Eu.loadoutSlotOptions.find((uu => uu.loadoutOptionId === yu));
      return {
        name: Ku.loadoutOptionName,
        owned: Ku.loadoutOptionOwnedTier > 0,
        equipped: Eu.loadoutSlotEquippedId === yu
      }
    }

    function kR(uu, Ru, yu, Eu) {
      const [Ku, Qu] = uu(`${Au}:${Ru}`, {
        [yu]: "\x01"
      }).split("\x01");
      return (0, eu.jsxs)(eu.Fragment, {
        children: [Ku, (0, eu.jsx)("span", {
          className: "LoadoutWalkthroughName",
          children: Eu
        }), Qu]
      })
    }

    function eR(uu) {
      let {
        view: Ru,
        onDismiss: yu,
        children: Ku
      } = uu;
      const {
        t: Qu
      } = (0, ru.E)(), mu = Ru.loadout, Ju = Ru.open ? mu.loadoutWalkthrough.map((uu => ({
        target: uu,
        info: CR(mu, uu)
      }))).find((uu => {
        let {
          info: Ru
        } = uu;
        return !Ru.equipped
      })) : void 0;
      let Nu = null,
        Xu = null;
      if (void 0 !== Ju) {
        const {
          target: uu,
          info: yu
        } = Ju;
        Ru.slot !== uu.loadoutTargetSection ? (Nu = {
          kind: "section",
          id: uu.loadoutTargetSection
        }, Xu = kR(Qu, "loadoutWalkthroughSection", "section", Qu(jR[uu.loadoutTargetSection]))) : Ru.selectedId !== uu.loadoutTargetId ? (Nu = {
          kind: "cB",
          id: uu.loadoutTargetId
        }, Xu = kR(Qu, "loadoutWalkthroughPick", "name", yu.name)) : (Nu = {
          kind: "act",
          id: uu.loadoutTargetId
        }, Xu = kR(Qu, yu.owned ? "loadoutWalkthroughEquip" : "loadoutWalkthroughUnlock", "name", yu.name))
      }
      const Vu = null === Nu ? null : function(uu) {
          return `${uu.kind}:${uu.id}`
        }(Nu),
        [Bu, xu] = (0, Eu.useState)(null),
        Su = (0, Eu.useCallback)((uu => {
          xu((Ru => null !== uu ? {
            key: Vu,
            node: uu
          } : (null === Ru || void 0 === Ru ? void 0 : Ru.key) === Vu ? null : Ru))
        }), [Vu]),
        pu = null !== Vu && (null === Bu || void 0 === Bu ? void 0 : Bu.key) === Vu ? Bu.node : null;
      return (0, eu.jsxs)(dR.Provider, {
        value: {
          step: Nu,
          targetRef: Su
        },
        children: [Ku, null !== Nu && null !== pu && (0, eu.jsx)(AR, {
          target: pu,
          placement: HR[Nu.kind],
          onDismiss: yu,
          children: Xu
        }, Vu)]
      })
    }

    function AR(uu) {
      let {
        target: Ru,
        placement: yu,
        onDismiss: Ku,
        children: Qu
      } = uu;
      const {
        t: mu
      } = (0, ru.E)(), Ju = (0, Eu.useRef)(Ru);
      return Ju.current = Ru, (0, WR.t)("popup", Ju, Ku), (0, eu.jsxs)(TR.f, {
        target: Ru,
        placement: yu,
        className: "LoadoutWalkthroughStep",
        spotlightMargin: 10,
        children: [(0, eu.jsxs)("div", {
          className: "LoadoutWalkthroughHeader",
          children: [(0, eu.jsx)("img", {
            className: "LoadoutWalkthroughPortrait",
            src: pR,
            alt: "",
            draggable: !1
          }), (0, eu.jsx)("span", {
            className: "LoadoutWalkthroughSpeaker",
            children: mu(`${Au}:operatorName`)
          }), (0, eu.jsx)(Su.h, {
            onClick: Ku,
            ariaLabel: mu(`${Au}:loadoutWalkthroughClose`),
            padIgnore: !0
          })]
        }), (0, eu.jsx)("p", {
          className: "LoadoutWalkthroughText",
          children: Qu
        })]
      })
    }
    const DR = new Set(["loadoutStatReload", "loadoutStatResupply"]);

    function MR(uu) {
      let {
        cost: Ru,
        loadout: yu
      } = uu;
      const {
        t: Eu
      } = (0, ru.E)();
      return Ru.loadoutCostCoins <= 0 && 0 === Ru.loadoutCostParts.length ? (0, eu.jsx)("span", {
        className: "LoadoutCost",
        children: Eu(`${Au}:loadoutFree`)
      }) : (0, eu.jsxs)("span", {
        className: "LoadoutCost",
        children: [Ru.loadoutCostCoins > 0 && (0, eu.jsx)(Uu, {
          itemName: Du,
          amount: Ru.loadoutCostCoins,
          jJ: yu.loadoutCoins
        }), Ru.loadoutCostParts.map((uu => {
          const Ru = yR(yu, uu.loadoutPartCurrency);
          return (0, eu.jsx)(Uu, {
            itemName: Ru.loadoutHeldPartItem,
            amount: uu.loadoutPartAmount,
            jJ: Ru.loadoutHeldPartAmount
          }, uu.loadoutPartCurrency)
        }))]
      })
    }
    const IR = {
      loadoutStatFireRate: `${Au}:loadoutUnitPerMinute`,
      loadoutStatReload: `${Au}:loadoutUnitSeconds`,
      loadoutStatResupply: `${Au}:loadoutUnitSeconds`
    };

    function GR(uu) {
      return "loadoutStatPotency" === uu.loadoutStatKind ? (0, fu.U)(uu.loadoutStatValue) : String(uu.loadoutStatValue)
    }

    function UR(uu) {
      var Ru;
      let {
        option: yu
      } = uu;
      const {
        t: Eu
      } = (0, ru.E)(), Ku = yu.loadoutOptionTiers, Qu = null === (Ru = Ku[0]) || void 0 === Ru ? void 0 : Ru.loadoutTierStats.map((uu => uu.loadoutStatKind));
      if (!Qu || 0 === Qu.length) return null;
      const mu = yu.loadoutOptionOwnedTier,
        Ju = (uu, Ru) => {
          var yu;
          return null === (yu = Ku[uu]) || void 0 === yu ? void 0 : yu.loadoutTierStats.find((uu => uu.loadoutStatKind === Ru))
        };
      return (0, eu.jsxs)("table", {
        className: "LoadoutTierTable",
        children: [(0, eu.jsx)("thead", {
          children: (0, eu.jsxs)("tr", {
            children: [(0, eu.jsx)("th", {}), Ku.map(((uu, Ru) => (0, eu.jsx)("th", {
              className: Xu()({
                Current: Ru + 1 === mu,
                Next: Ru === mu
              }),
              children: Eu(`${Au}:loadoutTier`, {
                tier: (0, fu.U)(Ru + 1)
              })
            }, Ru)))]
          })
        }), (0, eu.jsx)("tbody", {
          children: Qu.map((uu => {
            const Ru = IR[uu];
            return (0, eu.jsxs)("tr", {
              children: [(0, eu.jsxs)("th", {
                scope: "row",
                children: [Eu(`${Au}:${uu}`), Ru && (0, eu.jsx)("span", {
                  className: "LoadoutStatUnit",
                  children: Eu(Ru)
                })]
              }), Ku.map(((Ru, yu) => {
                const Eu = Ju(yu, uu),
                  Ku = yu > 0 ? Ju(yu - 1, uu) : void 0,
                  Qu = Eu && Ku ? Eu.loadoutStatValue - Ku.loadoutStatValue : 0,
                  Nu = DR.has(uu) ? Qu < 0 : Qu > 0,
                  Vu = yu === mu;
                return (0, eu.jsxs)("td", {
                  className: Xu()({
                    Current: yu + 1 === mu,
                    Next: Vu,
                    Gain: Nu,
                    Owned: yu < mu
                  }),
                  children: [Vu && Nu && (0, eu.jsx)("span", {
                    className: "LoadoutGainArrow",
                    "aria-hidden": "true",
                    children: Qu < 0 ? "\u25bc" : "\u25b2"
                  }), Eu ? GR(Eu) : "-"]
                }, yu)
              }))]
            }, uu)
          }))
        })]
      })
    }

    function nR(uu) {
      let {
        view: Ru,
        controller: yu,
        slot: Eu,
        option: Ku
      } = uu;
      const {
        t: Qu
      } = (0, ru.E)(), mu = Ru.loadout, Ju = Ku.loadoutOptionOwnedTier, Nu = Ku.loadoutOptionTiers.length, Xu = Eu.loadoutSlotEquippedId === Ku.loadoutOptionId, Vu = Ju < Nu ? Ku.loadoutOptionTiers[Ju].loadoutTierCost : null, Bu = null !== Vu && RR(mu, Vu), xu = Ku.loadoutOptionId, pu = bR();
      return (0, eu.jsxs)(eu.Fragment, {
        children: [(0, eu.jsx)(tR, {
          icon: Ku.loadoutOptionIcon,
          name: Ku.loadoutOptionName,
          status: 0 === Ju ? Qu(`${Au}:loadoutLocked`) : Nu > 1 ? Qu(`${Au}:loadoutTier`, {
            tier: (0, fu.U)(Ju)
          }) : null,
          locked: 0 === Ju,
          equipped: Xu
        }), (0, eu.jsx)("p", {
          className: "BoardDescription",
          children: Ku.loadoutOptionDescription
        }), (0, eu.jsx)(UR, {
          option: Ku
        }), (0, eu.jsxs)("div", {
          ref: pu("act", xu),
          className: "BoardActions",
          children: [null !== Vu && (0, eu.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, eu.jsx)(MR, {
              cost: Vu,
              loadout: mu
            }), (0, eu.jsx)(Su.l, {
              disabled: !Bu || Ru.pending,
              onClick: () => {
                yu.act(0 === Ju ? "loadoutUnlock" : "loadoutUpgrade", xu)
              },
              children: 0 === Ju ? Qu(`${Au}:loadoutUnlock`) : Qu(`${Au}:loadoutUpgrade`, {
                tier: (0, fu.U)(Ju + 1)
              })
            })]
          }), null === Vu && Nu > 1 && (0, eu.jsx)("span", {
            className: "BoardHint",
            children: Qu(`${Au}:loadoutMaxed`)
          }), Ju > 0 && !Xu && (0, eu.jsx)(Su.e, {
            disabled: Ru.pending,
            onClick: () => {
              yu.act("loadoutEquip", xu)
            },
            children: Qu(`${Au}:loadoutEquip`)
          })]
        })]
      })
    }

    function sR(uu) {
      let {
        view: Ru,
        controller: yu,
        perk: Eu
      } = uu;
      const {
        t: Ku
      } = (0, ru.E)(), Qu = Ru.loadout, mu = KR(Qu), Ju = Eu.loadoutPerkId, Nu = bR();
      return (0, eu.jsxs)(eu.Fragment, {
        children: [(0, eu.jsx)(tR, {
          icon: Eu.loadoutPerkIcon,
          name: Eu.loadoutPerkName,
          status: Eu.loadoutPerkOwned ? null : Ku(`${Au}:loadoutLocked`),
          locked: !Eu.loadoutPerkOwned,
          equipped: Eu.loadoutPerkEquipped
        }), (0, eu.jsx)("p", {
          className: "BoardDescription",
          children: Eu.loadoutPerkDescription
        }), (0, eu.jsxs)("div", {
          ref: Nu("act", Ju),
          className: "BoardActions",
          children: [!Eu.loadoutPerkOwned && (0, eu.jsxs)("div", {
            className: "LoadoutBuy",
            children: [(0, eu.jsx)(MR, {
              cost: Eu.loadoutPerkCost,
              loadout: Qu
            }), (0, eu.jsx)(Su.l, {
              disabled: !RR(Qu, Eu.loadoutPerkCost) || Ru.pending,
              onClick: () => {
                yu.act("loadoutUnlock", Ju)
              },
              children: Ku(`${Au}:loadoutUnlock`)
            })]
          }), Eu.loadoutPerkOwned && !Eu.loadoutPerkEquipped && (0, eu.jsx)(Su.e, {
            disabled: mu || Ru.pending,
            onClick: () => {
              yu.act("loadoutEquip", Ju)
            },
            children: Ku(`${Au}:loadoutEquip`)
          }), Eu.loadoutPerkOwned && !Eu.loadoutPerkEquipped && mu && (0, eu.jsx)("span", {
            className: "BoardHint",
            children: Ku(`${Au}:loadoutSocketsFullHint`)
          }), Eu.loadoutPerkEquipped && (0, eu.jsx)(Su.P, {
            disabled: Ru.pending,
            onClick: () => {
              yu.act("loadoutUnequip", Ju)
            },
            children: Ku(`${Au}:loadoutUnequip`)
          })]
        })]
      })
    }

    function tR(uu) {
      let {
        icon: Ru,
        name: yu,
        status: Eu,
        locked: Ku,
        equipped: Qu
      } = uu;
      const {
        t: mu
      } = (0, ru.E)();
      return (0, eu.jsxs)(lu, {
        icon: (0, eu.jsx)(Iu, {
          itemName: Ru
        }),
        name: yu,
        children: [null !== Eu && (0, eu.jsx)("span", {
          className: Xu()("LoadoutStatusText", {
            Locked: Ku
          }),
          children: Eu
        }), Qu && (0, eu.jsx)("span", {
          className: "BoardBadge",
          children: mu(`${Au}:loadoutEquippedBadge`)
        })]
      })
    }

    function lR(uu) {
      let {
        view: Ru,
        controller: yu
      } = uu;
      const Eu = Ru.loadout;
      if ("loadoutPerks" === Ru.slot) {
        const uu = Eu.loadoutPerks.find((uu => uu.loadoutPerkId === Ru.selectedId));
        return (0, eu.jsx)("section", {
          className: "BoardDetail",
          children: uu && (0, eu.jsx)(sR, {
            view: Ru,
            controller: yu,
            perk: uu
          })
        })
      }
      const Ku = ER(Eu, Ru.slot),
        Qu = Ku.loadoutSlotOptions.find((uu => uu.loadoutOptionId === Ru.selectedId));
      return (0, eu.jsx)("section", {
        className: "BoardDetail",
        children: Qu && (0, eu.jsx)(nR, {
          view: Ru,
          controller: yu,
          slot: Ku,
          option: Qu
        })
      })
    }

    function gR(uu) {
      let {
        owned: Ru,
        total: yu
      } = uu;
      return yu <= 1 ? null : (0, eu.jsx)("span", {
        className: "LoadoutPips",
        children: Array.from({
          length: yu
        }, ((uu, yu) => (0, eu.jsx)("span", {
          className: Xu()("LoadoutPip", {
            Filled: yu < Ru
          })
        }, yu)))
      })
    }

    function cR(uu) {
      let {
        view: Ru,
        controller: yu
      } = uu;
      const {
        t: Eu
      } = (0, ru.E)(), Ku = Ru.loadout, Qu = bR();
      return (0, eu.jsxs)("nav", {
        className: "LoadoutKit",
        "aria-label": Eu(`${Au}:loadoutKit`),
        children: [Ku.loadoutSlots.map((uu => {
          const Ku = uu.loadoutSlotOptions.find((Ru => Ru.loadoutOptionId === uu.loadoutSlotEquippedId));
          return (0, eu.jsxs)("button", {
            ref: Qu("section", uu.loadoutSlotKind),
            type: "button",
            className: Xu()("LoadoutKitSlot", {
              Selected: Ru.slot === uu.loadoutSlotKind
            }),
            onClick: () => {
              yu.selectSlot(uu.loadoutSlotKind)
            },
            children: [(0, eu.jsx)("span", {
              className: "LoadoutKitIcon",
              children: Ku && (0, eu.jsx)(Iu, {
                itemName: Ku.loadoutOptionIcon
              })
            }), (0, eu.jsxs)("span", {
              className: "LoadoutKitText",
              children: [(0, eu.jsxs)("span", {
                className: "LoadoutKitTop",
                children: [(0, eu.jsx)("span", {
                  className: "LoadoutKitLabel",
                  children: Eu(jR[uu.loadoutSlotKind])
                }), Ku && (0, eu.jsx)(gR, {
                  owned: Ku.loadoutOptionOwnedTier,
                  total: Ku.loadoutOptionTiers.length
                })]
              }), (0, eu.jsx)("span", {
                className: "LoadoutKitName",
                children: null === Ku || void 0 === Ku ? void 0 : Ku.loadoutOptionName
              })]
            })]
          }, uu.loadoutSlotKind)
        })), (0, eu.jsx)(LR, {
          view: Ru,
          controller: yu
        })]
      })
    }

    function LR(uu) {
      let {
        view: Ru,
        controller: yu
      } = uu;
      const {
        t: Eu
      } = (0, ru.E)(), Ku = Ru.loadout, Qu = Ku.loadoutPerks.filter((uu => uu.loadoutPerkEquipped)), mu = bR();
      return (0, eu.jsxs)("button", {
        ref: mu("section", "loadoutPerks"),
        type: "button",
        className: Xu()("LoadoutKitSlot", "LoadoutPerks", {
          Selected: "loadoutPerks" === Ru.slot
        }),
        onClick: () => {
          yu.selectSlot("loadoutPerks")
        },
        children: [(0, eu.jsxs)("span", {
          className: "LoadoutKitTop",
          children: [(0, eu.jsx)("span", {
            className: "LoadoutKitLabel",
            children: Eu(jR.loadoutPerks)
          }), (0, eu.jsx)("span", {
            className: "LoadoutPerkCount",
            children: Eu(`${Au}:loadoutPerkCount`, {
              equipped: String(Qu.length),
              max: String(Ku.loadoutMaxPerks)
            })
          })]
        }), (0, eu.jsx)("span", {
          className: "LoadoutSockets",
          children: Array.from({
            length: Ku.loadoutMaxPerks
          }, ((uu, Ru) => {
            const yu = Qu[Ru];
            return (0, eu.jsxs)("span", {
              className: Xu()("LoadoutSocket", {
                Filled: yu,
                Empty: !yu
              }),
              children: [(0, eu.jsx)("span", {
                className: "LoadoutSocketWell",
                children: yu && (0, eu.jsx)(Iu, {
                  itemName: yu.loadoutPerkIcon
                })
              }), (0, eu.jsx)("span", {
                className: "LoadoutSocketName",
                children: yu ? yu.loadoutPerkName : Eu(`${Au}:loadoutPerkSocketEmpty`)
              })]
            }, Ru)
          }))
        })]
      })
    }

    function zR(uu) {
      let {
        icon: Ru,
        name: yu,
        selected: Eu,
        equipped: Ku,
        locked: Qu,
        ownedTier: mu,
        tiers: Ju,
        buttonRef: Nu,
        onSelect: Xu
      } = uu;
      const {
        t: Vu
      } = (0, ru.E)();
      return (0, eu.jsxs)(tu, {
        icon: (0, eu.jsx)(Iu, {
          itemName: Ru
        }),
        name: yu,
        selected: Eu,
        locked: Qu,
        buttonRef: Nu,
        onSelect: Xu,
        children: [Ku && (0, eu.jsx)("span", {
          className: "BoardBadge",
          children: Vu(`${Au}:loadoutEquippedBadge`)
        }), Qu && (0, eu.jsx)("span", {
          className: "BoardBadge Muted",
          children: Vu(`${Au}:loadoutLocked`)
        }), !Qu && (0, eu.jsx)(gR, {
          owned: mu,
          total: Ju
        })]
      })
    }

    function FR(uu) {
      let {
        view: Ru,
        controller: yu
      } = uu;
      const Eu = Ru.loadout,
        Ku = bR();
      if ("loadoutPerks" === Ru.slot) return (0, eu.jsx)("div", {
        className: "BoardTiles",
        children: Eu.loadoutPerks.map((uu => (0, eu.jsx)(zR, {
          icon: uu.loadoutPerkIcon,
          name: uu.loadoutPerkName,
          selected: Ru.selectedId === uu.loadoutPerkId,
          equipped: uu.loadoutPerkEquipped,
          locked: !uu.loadoutPerkOwned,
          ownedTier: 0,
          tiers: 0,
          buttonRef: Ku("cB", uu.loadoutPerkId),
          onSelect: () => {
            yu.select(uu.loadoutPerkId)
          }
        }, uu.loadoutPerkId)))
      });
      const Qu = ER(Eu, Ru.slot);
      return (0, eu.jsx)("div", {
        className: "BoardTiles",
        children: Qu.loadoutSlotOptions.map((uu => (0, eu.jsx)(zR, {
          icon: uu.loadoutOptionIcon,
          name: uu.loadoutOptionName,
          selected: Ru.selectedId === uu.loadoutOptionId,
          equipped: Qu.loadoutSlotEquippedId === uu.loadoutOptionId,
          locked: 0 === uu.loadoutOptionOwnedTier,
          ownedTier: uu.loadoutOptionOwnedTier,
          tiers: uu.loadoutOptionTiers.length,
          buttonRef: Ku("cB", uu.loadoutOptionId),
          onSelect: () => {
            yu.select(uu.loadoutOptionId)
          }
        }, uu.loadoutOptionId)))
      })
    }

    function wR(uu) {
      let {
        loadout: Ru
      } = uu;
      return (0, eu.jsx)(gu, {
        coins: Ru.loadoutCoins,
        children: Ru.loadoutHeldParts.filter((uu => uu.loadoutHeldPartAmount > 0)).map((uu => (0, eu.jsx)(Uu, {
          itemName: uu.loadoutHeldPartItem,
          amount: uu.loadoutHeldPartAmount
        }, uu.loadoutHeldPartCurrency)))
      })
    }

    function ZR(uu) {
      let {
        controller: Ru
      } = uu;
      const yu = (0, Vu.h)(BR, Ru.getSnapshot()),
        {
          t: Eu
        } = (0, ru.E)();
      if (null === yu.loadout) return null;
      const Ku = yu.notice;
      return (0, eu.jsx)(eR, {
        view: yu,
        onDismiss: Ru.dismiss,
        children: (0, eu.jsxs)(Mu, {
          open: yu.open,
          onDismiss: Ru.dismiss,
          title: Eu(`${Au}:loadoutTitle`),
          className: "ContainmentLoadoutPanel",
          headerExtra: (0, eu.jsx)(wR, {
            loadout: yu.loadout
          }),
          statusRefused: null === Ku || void 0 === Ku ? void 0 : Ku.loadoutNoticeRefused,
          status: (0, eu.jsxs)(eu.Fragment, {
            children: [(0, eu.jsx)("span", {
              className: "LoadoutRadioBadge",
              children: Eu(`${Au}:loadoutRadioBadge`)
            }), null !== Ku && Eu(`${Au}:${Ku.loadoutNoticeKey}`, {
              name: Ku.loadoutNoticeName,
              tier: (0, fu.U)(Ku.loadoutNoticeTier),
              max: String(yu.loadout.loadoutMaxPerks)
            })]
          }),
          children: [(0, eu.jsx)(cR, {
            view: yu,
            controller: Ru
          }), (0, eu.jsx)(FR, {
            view: yu,
            controller: Ru
          }), (0, eu.jsx)(lR, {
            view: yu,
            controller: Ru
          })]
        })
      })
    }

    function hR(uu, Ru, yu) {
      const Eu = uu.locatorEntries.find((uu => uu.locatorEntryId === yu));
      if (!Eu) return null;
      const Ku = Eu.locatorEntryName;
      if ("locatorDisarm" === Ru) return Eu.locatorEntryArmed ? {
        board: PR(uu, null),
        notice: iR("locatorNoticeDisarmed", Ku)
      } : null;
      if ("locatorArm" === Ru) return Eu.locatorEntryOwned && !Eu.locatorEntryArmed ? {
        board: PR(uu, yu),
        notice: iR("locatorNoticeArmed", Ku)
      } : null;
      if (Eu.locatorEntryOwned || uu.locatorCoins < Eu.locatorEntryPrice) return null;
      const Qu = PR({
        ...uu,
        locatorCoins: uu.locatorCoins - Eu.locatorEntryPrice
      }, yu);
      return {
        board: {
          ...Qu,
          locatorEntries: Qu.locatorEntries.map((uu => uu.locatorEntryId === yu ? {
            ...uu,
            locatorEntryOwned: !0
          } : uu))
        },
        notice: iR("locatorNoticeBought", Ku)
      }
    }

    function PR(uu, Ru) {
      return {
        ...uu,
        locatorEntries: uu.locatorEntries.map((uu => {
          const yu = uu.locatorEntryId === Ru;
          return uu.locatorEntryArmed === yu ? uu : {
            ...uu,
            locatorEntryArmed: yu
          }
        }))
      }
    }

    function iR(uu, Ru) {
      return {
        locatorNoticeKey: uu,
        locatorNoticeRefused: !1,
        locatorNoticeName: Ru
      }
    }
    const YR = "containmentLocatorView";
    class oR extends uR {
      constructor(uu, Ru, yu, Eu) {
        super(uu, Ru, yu, Eu, "locator", hR), this.snapshot = this.buildSnapshot()
      }
      messageOpens(uu) {
        return uu.locatorMessageOpens
      }
      messageNotice(uu) {
        return uu.locatorNotice
      }
      openingSelection(uu) {
        var Ru;
        const yu = uu.locatorEntries;
        return (null !== (Ru = yu.find((uu => uu.locatorEntryArmed))) && void 0 !== Ru ? Ru : yu[0]).locatorEntryId
      }
      buildSnapshot() {
        return {
          open: this.open,
          locators: this.board,
          selectedId: this.selectedId,
          pending: this.pacer.isPending(),
          notice: this.notice
        }
      }
    }
    const qR = {
        locatorContained: `${Au}:locatorFlavourContained`,
        locatorEncountered: `${Au}:locatorFlavourEncountered`,
        locatorUnseen: `${Au}:locatorFlavourUnseen`
      },
      OR = {
        codexAnyDifficulty: null,
        codexNormalOnly: `${Au}:locatorAttunedNormal`,
        codexHardOnly: `${Au}:locatorAttunedHard`
      };

    function vR() {
      return (0, eu.jsx)(eu.Fragment, {
        children: Array.from({
          length: 5
        }, ((uu, Ru) => (0, eu.jsx)("span", {
          className: "LocatorFly",
          children: (0, eu.jsx)("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoBboMlb5LyUjD8YgNtHyJ6/d+Q/CILa1lz9YAbo4DCDLYxjQv3gt3AYQG90AdHkUQ/qhkjAb0BURkgcDmAQMo7sSXR7deyiGoIvDvIOsGasB+ACyBmTNACS0go3ibhumAAAAAElFTkSuQmCC",
            alt: "",
            draggable: !1
          })
        }, Ru)))
      })
    }

    function aR(uu) {
      let {
        entry: Ru
      } = uu;
      const {
        t: yu
      } = (0, ru.E)();
      return Ru.locatorEntryArmed ? (0, eu.jsx)("span", {
        className: "BoardBadge Armed",
        children: yu(`${Au}:locatorArmedBadge`)
      }) : Ru.locatorEntryOwned ? (0, eu.jsx)("span", {
        className: "BoardBadge",
        children: yu(`${Au}:locatorOwnedBadge`)
      }) : null
    }

    function fR(uu) {
      let {
        entry: Ru,
        coins: yu,
        inTile: Eu = !1
      } = uu;
      return (0, eu.jsx)(Uu, {
        itemName: Du,
        amount: Ru.locatorEntryPrice,
        jJ: yu,
        inTile: Eu
      })
    }

    function uy(uu) {
      let {
        view: Ru,
        controller: yu,
        entry: Eu
      } = uu;
      const {
        t: Ku
      } = (0, ru.E)(), Qu = Eu.locatorEntryId, mu = Ru.locators.locatorEntries.find((uu => uu.locatorEntryArmed && uu !== Eu));
      return (0, eu.jsxs)("div", {
        className: "BoardActions",
        children: [Eu.locatorEntryArmed && (0, eu.jsx)(Su.P, {
          disabled: Ru.pending,
          onClick: () => {
            yu.act("locatorDisarm", Qu)
          },
          children: Ku(`${Au}:locatorDisarm`)
        }), Eu.locatorEntryOwned && !Eu.locatorEntryArmed && (0, eu.jsx)(Su.e, {
          disabled: Ru.pending,
          onClick: () => {
            yu.act("locatorArm", Qu)
          },
          children: Ku(`${Au}:locatorArm`)
        }), !Eu.locatorEntryOwned && (0, eu.jsxs)("div", {
          className: "LocatorBuy",
          children: [(0, eu.jsx)(fR, {
            entry: Eu,
            coins: Ru.locators.locatorCoins
          }), (0, eu.jsx)(Su.l, {
            disabled: Ru.locators.locatorCoins < Eu.locatorEntryPrice || Ru.pending,
            onClick: () => {
              yu.act("locatorBuy", Qu)
            },
            children: Ku(`${Au}:locatorBuy`)
          })]
        }), mu && !Eu.locatorEntryArmed && (0, eu.jsx)("span", {
          className: "BoardHint",
          children: Ku(`${Au}:locatorReplacesHint`, {
            name: mu.locatorEntryName
          })
        })]
      })
    }

    function Ry(uu) {
      let {
        entry: Ru
      } = uu;
      return "locatorUnseen" === Ru.locatorEntryStanding ? (0, eu.jsx)(Iu, {
        itemName: "Compass"
      }) : (0, eu.jsx)(Gu, {
        anomalyId: Ru.locatorEntryId,
        caught: "locatorContained" === Ru.locatorEntryStanding
      })
    }

    function yy(uu) {
      let {
        view: Ru,
        controller: yu,
        entry: Eu
      } = uu;
      const {
        t: Ku
      } = (0, ru.E)(), Qu = OR[Eu.locatorEntryDifficulty];
      return (0, eu.jsxs)("section", {
        className: "BoardDetail",
        children: [(0, eu.jsxs)("div", {
          className: Xu()("LocatorLabel", {
            Armed: Eu.locatorEntryArmed
          }),
          children: [(0, eu.jsx)(lu, {
            icon: (0, eu.jsx)(Ry, {
              entry: Eu
            }),
            name: Ku(`${Au}:locatorName`, {
              name: Eu.locatorEntryName
            }),
            children: (0, eu.jsx)(aR, {
              entry: Eu
            })
          }), (0, eu.jsx)("p", {
            className: "BoardDescription",
            children: Ku(Eu.locatorEntryArmed ? `${Au}:locatorFlavourArmed` : qR[Eu.locatorEntryStanding])
          }), null !== Qu && (0, eu.jsx)("p", {
            className: "LocatorAttuned",
            children: Ku(Qu)
          }), (0, eu.jsx)("p", {
            className: "BoardDescription LocatorUsage",
            children: Ku(`${Au}:locatorUsage`)
          })]
        }), (0, eu.jsx)(uy, {
          view: Ru,
          controller: yu,
          entry: Eu
        })]
      })
    }

    function Ey(uu) {
      let {
        controller: Ru
      } = uu;
      const yu = (0, Vu.h)(YR, Ru.getSnapshot()),
        {
          t: Eu
        } = (0, ru.E)(),
        Ku = yu.locators;
      if (null === Ku) return null;
      const Qu = Ku.locatorEntries.find((uu => uu.locatorEntryId === yu.selectedId)),
        mu = yu.notice;
      return (0, eu.jsxs)(Mu, {
        open: yu.open,
        onDismiss: Ru.dismiss,
        title: Eu(`${Au}:locatorTitle`),
        className: "ContainmentLocatorPanel",
        decor: (0, eu.jsx)(vR, {}),
        headerExtra: (0, eu.jsx)(gu, {
          coins: Ku.locatorCoins
        }),
        statusRefused: null === mu || void 0 === mu ? void 0 : mu.locatorNoticeRefused,
        status: (0, eu.jsxs)(eu.Fragment, {
          children: [(0, eu.jsx)("span", {
            className: "LocatorKeeperBadge",
            children: Eu(`${Au}:locatorKeeperName`)
          }), null !== mu && Eu(`${Au}:${mu.locatorNoticeKey}`, {
            name: mu.locatorNoticeName
          })]
        }),
        children: [(0, eu.jsx)("div", {
          className: "BoardTiles",
          children: Ku.locatorEntries.map((uu => (0, eu.jsxs)(tu, {
            icon: (0, eu.jsx)(Ry, {
              entry: uu
            }),
            name: uu.locatorEntryName,
            selected: uu === Qu,
            locked: !1,
            className: Xu()("LocatorTag", {
              Armed: uu.locatorEntryArmed
            }),
            onSelect: () => {
              Ru.select(uu.locatorEntryId)
            },
            children: [(0, eu.jsx)(aR, {
              entry: uu
            }), !uu.locatorEntryOwned && (0, eu.jsx)(fR, {
              entry: uu,
              coins: Ku.locatorCoins,
              inTile: !0
            })]
          }, uu.locatorEntryId)))
        }), (0, eu.jsx)(yy, {
          view: yu,
          controller: Ru,
          entry: Qu
        })]
      })
    }

    function Ky(uu) {
      let {
        loadout: Ru,
        codex: yu,
        locator: Eu
      } = uu;
      return (0, eu.jsxs)(eu.Fragment, {
        children: [(0, eu.jsx)(ZR, {
          controller: Ru
        }), (0, eu.jsx)(au, {
          controller: yu
        }), (0, eu.jsx)(Ey, {
          controller: Eu
        })]
      })
    }
    var Qy = yu(38308);
    class my {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sendCommand = uu, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new Qy.b({
          spacingMs: 0,
          now: Ru
        }), this.budget.subscribe((() => {
          this.notify()
        }))
      }
      isPending() {
        return this.awaitingReply || this.budget.isPacing()
      }
      send(uu, Ru) {
        return !this.isPending() && (this.awaitingReply = !0, this.replyTimer = setTimeout((() => {
          this.replyTimer = null, this.awaitingReply = !1, Ru(), this.notify()
        }), 8e3), this.budget.start(), this.sendCommand(uu), !0)
      }
      onReply() {
        this.awaitingReply = !1, this.clearReplyTimer()
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      dispose() {
        this.clearReplyTimer(), this.budget.dispose(), this.listeners.clear()
      }
      clearReplyTimer() {
        null !== this.replyTimer && (clearTimeout(this.replyTimer), this.replyTimer = null)
      }
      notify() {
        for (const uu of this.listeners) uu()
      }
    }
    var Jy = yu(38306);
    const Ny = new Map([
      ["npc_general", pR],
      ["npc_tentacle_guy", Jy]
    ]);

    function Xy(uu) {
      const Ru = Ny.get(uu);
      if (void 0 === Ru) return null;
      const yu = document.createElement("img");
      return yu.src = Ru, yu.alt = "", yu.draggable = !1, yu.style.imageRendering = "pixelated", yu
    }
    const Vy = function() {
      let uu, Ru = !1,
        yu = null,
        Nu = null;
      const Xu = [],
        Vu = uu => {
          for (const Ru of Xu) Ru !== uu && Ru.close();
          (0, Ju.q)()
        },
        ru = uu => {
          uu && (0, Ju.i)()
        },
        Bu = new my((Ru => {
          uu.sendCommand(Ru)
        })),
        xu = new xR((uu => {
          mu.k.Op(BR, uu, !0)
        }), Vu, ru, Bu),
        Su = new zu((uu => {
          mu.k.Op(Lu, uu, !0)
        }), Vu, ru),
        pu = new oR((uu => {
          mu.k.Op(YR, uu, !0)
        }), Vu, ru, Bu);
      Xu.push(xu, Su, pu);
      return {
        onCreate: Ru => {
          uu = Ru, yu = (0, Ju.w)(null, {
            content: (0, Eu.createElement)(Ky, {
              loadout: xu,
              codex: Su,
              locator: pu
            }),
            onClose: () => {
              for (const uu of Xu) uu.close()
            }
          }), Nu = (0, Qu.f)(Xy)
        },
        onReceivedMessageFromServer: (uu, Ru) => {
          "containmentLoadout" === uu ? xu.SS(Ru) : "containmentLoadoutClose" === uu ? xu.isOpen() && (xu.close(), (0, Ju.f)()) : "containmentCodex" === uu ? Su.SS(Ru) : "containmentLocator" === uu && pu.SS(Ru)
        },
        sr: () => {
          Ru || Ku.d.get("loadingOverlayVisible") || (Ru = !0, uu.sendCommand("containmentEntered"))
        },
        onClose: () => {
          var uu, Ru;
          null === (uu = yu) || void 0 === uu || uu(), yu = null, null === (Ru = Nu) || void 0 === Ru || Ru(), Nu = null;
          for (const yu of Xu) yu.dispose();
          Bu.dispose()
        }
      }
    }
  },
  36656: (uu, Ru, yu) => {
    yu.d(Ru, {
      A: () => cu,
      D: () => tu,
      F: () => Lu,
      d: () => Nu,
      e: () => Iu,
      g: () => Ju,
      j: () => su,
      n: () => Du,
      p: () => Cu,
      r: () => nu,
      s: () => Uu,
      t: () => Au,
      w: () => lu,
      y: () => gu
    });
    var Eu = yu(47);
    const Ku = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      Qu = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      mu = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      Ju = Qu.filter((uu => "docsButton" !== uu)),
      Nu = mu.filter((uu => "aiHelperButton" !== uu)),
      Xu = "codeEditorTutorials",
      Vu = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      ru = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let Bu = null,
      xu = null;
    const Su = new Set,
      pu = new Set;
    let Tu = null;
    const Wu = new Set,
      ju = new Set;

    function Hu() {
      ju.forEach((uu => {
        uu()
      }))
    }

    function du() {
      if (!Bu) {
        const uu = Eu.i.getItem(Xu);
        Bu = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof uu && null !== uu ? uu : {}
        }
      }
      return Bu
    }

    function bu(uu) {
      const Ru = du();
      Ru[uu] || (Bu = {
        ...Ru,
        [uu]: !0
      }, Eu.i.setItem(Xu, Bu))
    }

    function Cu(uu) {
      return "docsOverview" === uu ? Qu : "aiHelperOverview" === uu ? mu : xu ? Ku[xu] : []
    }

    function ku(uu) {
      return ("worldCodeButton" !== uu || !du().worldCodeIntroShown) && !Wu.has(uu)
    }

    function eu(uu) {
      var Ru;
      return (null === (Ru = Tu) || void 0 === Ru ? void 0 : Ru.name) === uu ? Tu.stepsDone : Su
    }

    function Au(uu, Ru) {
      if (! function(uu) {
          return Tu ? Tu.name === uu : "welcome" === uu
        }(uu) || !ku(Ru) || eu(uu).has(Ru)) return !1;
      if (Tu) return !0;
      const yu = Vu[Ru];
      return yu ? !du()[yu] || pu.has(Ru) : !du()[ru[uu]]
    }

    function Du(uu) {
      var Ru;
      return null !== (Ru = Cu(uu).find((Ru => Au(uu, Ru)))) && void 0 !== Ru ? Ru : null
    }

    function Mu(uu) {
      var Ru;
      bu(ru[uu]), (null === (Ru = Tu) || void 0 === Ru ? void 0 : Ru.name) === uu && (Tu = null)
    }

    function Iu(uu) {
      const Ru = (Tu ? [Tu.name] : ["welcome", "docsOverview"]).find((Ru => Du(Ru) === uu));
      if (!Ru) return;
      eu(Ru).add(uu);
      const yu = Vu[uu];
      yu && (bu(yu), Tu || pu.add(uu)), null === Du(Ru) && Mu(Ru), Hu()
    }

    function Gu(uu, Ru) {
      const yu = Cu(uu),
        Eu = eu(uu);
      for (let Ku = yu.indexOf(Ru) - 1; Ku >= 0; Ku--)
        if (Eu.has(yu[Ku]) && ku(yu[Ku])) return yu[Ku];
      return null
    }

    function Uu(uu, Ru) {
      return null !== Gu(uu, Ru)
    }

    function nu(uu, Ru) {
      const yu = Gu(uu, Ru);
      yu && (eu(uu).delete(yu), Hu())
    }

    function su(uu) {
      Mu(uu), "welcome" === uu && Cu("welcome").forEach((uu => {
        const Ru = Vu[uu];
        Ru && bu(Ru)
      })), Hu()
    }

    function tu(uu) {
      Tu = {
        name: uu,
        stepsDone: new Set
      }, Hu()
    }

    function lu() {
      (Tu || 0 !== Su.size || 0 !== pu.size) && (Tu = null, Su.clear(), pu.clear(), Hu())
    }

    function gu(uu, Ru) {
      const yu = Ru ? uu : xu === uu ? null : xu;
      yu !== xu && (xu = yu, Hu())
    }

    function cu(uu, Ru) {
      Wu.has(uu) === Ru && (Ru ? Wu.delete(uu) : Wu.add(uu), Hu())
    }

    function Lu(uu) {
      return ju.add(uu), () => {
        ju.delete(uu)
      }
    }
  },
  39031: (uu, Ru, yu) => {
    var Eu = {
      "./breach-zero-uncaught.webp": 39035,
      "./breach-zero.webp": 39038,
      "./brood-father-uncaught.webp": 39041,
      "./brood-father.webp": 39048,
      "./carousel-uncaught.webp": 39051,
      "./carousel.webp": 39053,
      "./deadlock-uncaught.webp": 39062,
      "./deadlock.webp": 39070,
      "./frost-revenant-uncaught.webp": 39078,
      "./frost-revenant.webp": 39083,
      "./hollow-choir-uncaught.webp": 39087,
      "./hollow-choir.webp": 39093,
      "./magma-warden-uncaught.webp": 39101,
      "./magma-warden.webp": 39108,
      "./patient-zero-uncaught.webp": 39113,
      "./patient-zero.webp": 39115,
      "./siege-engine-uncaught.webp": 39119,
      "./siege-engine.webp": 39127,
      "./warp-stalker-uncaught.webp": 39131,
      "./warp-stalker.webp": 39133
    };

    function Ku(uu) {
      var Ru = Qu(uu);
      return yu(Ru)
    }

    function Qu(uu) {
      if (!yu.o(Eu, uu)) {
        var Ru = new Error("Cannot find module '" + uu + "'");
        throw Ru.code = "MODULE_NOT_FOUND", Ru
      }
      return Eu[uu]
    }
    Ku.keys = function() {
      return Object.keys(Eu)
    }, Ku.resolve = Qu, uu.exports = Ku, Ku.id = 39031
  },
  39035: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
  },
  39038: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
  },
  39041: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
  },
  39048: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/brood-father.e48391955a574c1155fa.webp"
  },
  39051: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
  },
  39053: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/carousel.5fc13db7958067d6e1a3.webp"
  },
  39062: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/deadlock-uncaught.feadbdbbf2d040dce5c0.webp"
  },
  39070: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/deadlock.2bcaeaa57376fd78ddcb.webp"
  },
  39078: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/frost-revenant-uncaught.c0271636eeae988b1a40.webp"
  },
  39083: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/frost-revenant.fed6021646d7f0f81876.webp"
  },
  39087: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/hollow-choir-uncaught.7eaab76a15f82bd79558.webp"
  },
  39093: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/hollow-choir.05f9c51994aecece852a.webp"
  },
  39101: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/magma-warden-uncaught.5308736fbb8a503cdfc7.webp"
  },
  39108: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/magma-warden.cc4302a49a39ae962a31.webp"
  },
  39113: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/patient-zero-uncaught.1f9ec012a14c4dbdcc8f.webp"
  },
  39115: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/patient-zero.cc76984bb20e9f9ace76.webp"
  },
  39119: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/siege-engine-uncaught.88e0ad7fec37ba2b4a2e.webp"
  },
  39127: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/siege-engine.b2e2382e415f4ae470ac.webp"
  },
  39131: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/warp-stalker-uncaught.c3b1b82ecb18446b71b0.webp"
  },
  39133: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/warp-stalker.851972c629601b668aa7.webp"
  },
  38306: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);