export const id = 225;
export const ids = [225];
export const modules = {
  35240: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW,
      c: () => PW,
      f: () => NW
    });
    var mW = OW(62);
    const EW = new class {
      constructor() {
        this.inFlight = new Map, this.landings = new Map, this.listeners = new Set
      }
      getInFlight(WW) {
        var iW;
        return null !== (iW = this.inFlight.get(WW)) && void 0 !== iW ? iW : 0
      }
      setInFlight(WW, iW) {
        this.getInFlight(WW) !== iW && (this.inFlight.set(WW, iW), this.notify())
      }
      subscribe(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
      getLanding(WW) {
        var iW, OW;
        return null !== (iW = null === (OW = this.landings.get(WW)) || void 0 === OW ? void 0 : OW.at(-1)) && void 0 !== iW ? iW : null
      }
      hasLanding(WW, iW) {
        var OW, mW;
        return null !== (OW = null === (mW = this.landings.get(WW)) || void 0 === mW ? void 0 : mW.includes(iW)) && void 0 !== OW && OW
      }
      addLanding(WW, iW) {
        var OW;
        const mW = null !== (OW = this.landings.get(WW)) && void 0 !== OW ? OW : [];
        return this.landings.set(WW, [...mW, iW]), this.notify(), () => {
          this.landings.set(WW, this.landings.get(WW).filter((WW => WW !== iW))), this.notify()
        }
      }
      notify() {
        for (const WW of this.listeners) WW()
      }
    };

    function NW(WW, iW) {
      const [OW, NW] = (0, mW.useState)((() => EW.getInFlight(WW)));
      return (0, mW.useLayoutEffect)((() => {
        const iW = () => {
          NW(EW.getInFlight(WW))
        };
        return iW(), EW.subscribe(iW)
      }), [WW]), Math.max(0, iW - OW)
    }

    function PW(WW, iW) {
      let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      (0, mW.useLayoutEffect)((() => {
        if (OW) return EW.addLanding(WW, iW.current)
      }), [WW, iW, OW])
    }
  },
  40748: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW
    });
    var mW = OW(40751);
    async function EW() {
      const {
        averageColors: WW
      } = await OW.e(234).then((() => OW(35332)));
      return new mW.d(WW)
    }
  },
  40719: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => cW
    });
    var mW = OW(37917),
      EW = OW(1172),
      NW = OW(1244),
      PW = OW(39679),
      LW = OW(39739);
    class cW {
      constructor(WW, iW) {
        var OW;
        this.classes = WW, this.distanceKey = iW, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.JA = !1, this.Lk = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.Lk), null === (OW = window.visualViewport) || void 0 === OW || OW.addEventListener("resize", this.Lk)
      }
      bindMarker(WW) {
        const iW = this.refs.get(WW);
        if (iW) return iW;
        const OW = iW => {
          var mW;
          null === (mW = this.markers.get(WW)) || void 0 === mW || mW.stopObserving(), this.markers.delete(WW), iW && !this.JA ? (this.markers.set(WW, this.mount(iW)), this.refs.set(WW, OW)) : this.refs.delete(WW)
        };
        return this.refs.set(WW, OW), OW
      }
      hasMarkers() {
        return this.markers.size > 0
      }
      setRender(WW) {
        this.render = WW
      }
      update(WW, iW, OW, mW, EW) {
        const NW = this.markers.get(WW);
        NW && (NW.target ??= [0, 0, 0], NW.target[0] = iW, NW.target[1] = OW, NW.target[2] = mW, this.place(NW), this.zi(NW, EW && Math.hypot(iW - EW[0], OW - EW[1], mW - EW[2])))
      }
      dispose() {
        var WW;
        this.JA = !0, window.removeEventListener("resize", this.Lk), null === (WW = window.visualViewport) || void 0 === WW || WW.removeEventListener("resize", this.Lk);
        for (const iW of this.markers.values()) iW.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(WW) {
        const {
          render: iW,
          viewport: OW
        } = this;
        if (!iW || !WW.target) return;
        const mW = (50 - iW.screenBandPct.y) / 100 * OW.height,
          EW = {
            x: WW.halfSize.width + 8,
            top: WW.halfSize.height + 8,
            bottom: WW.halfSize.height + WW.labelsBelow + mW
          },
          NW = iW.projectWorldPosToViewport(WW.target),
          cW = null !== NW && void 0 !== NW ? NW : iW.projectWorldPosToScreenPos(WW.target),
          wW = (0, LW.b)({
            x: cW.x,
            y: cW.y,
            text: NW
          }, EW, OW);
        (0, PW.e)(WW.root, Math.round(100 * wW.x) / 100, Math.round(100 * wW.y) / 100)
      }
      zi(WW, iW) {
        if (null === iW) return void(null !== WW.metres && (WW.metres = null, WW.distance.textContent = ""));
        const OW = Date.now();
        (null === WW.metres || (0, mW.e)(iW, WW.metres, WW.metresShownAt)) && (WW.metres = Math.round(iW), WW.metresShownAt = OW, WW.distance.textContent = (0, EW.u)(NW.e.get().getCurrentLanguageCode(), this.distanceKey, {
          distance: String(WW.metres)
        }))
      }
      mount(WW) {
        const iW = {
            root: WW,
            distance: WW.querySelector(`.${this.classes.distance}`),
            halfSize: {
              width: 0,
              height: 0
            },
            labelsBelow: 0,
            target: null,
            metres: null,
            metresShownAt: 0,
            stopObserving: () => {}
          },
          OW = WW.querySelector(`.${this.classes.labels}`),
          mW = new ResizeObserver((() => {
            iW.halfSize = {
              width: Math.max(WW.offsetWidth, OW.offsetWidth) / 2,
              height: WW.offsetHeight / 2
            }, iW.labelsBelow = OW.offsetTop + OW.offsetHeight - WW.offsetHeight, this.place(iW)
          }));
        return mW.observe(WW, {
          box: "border-box"
        }), mW.observe(OW, {
          box: "border-box"
        }), iW.stopObserving = () => {
          mW.disconnect()
        }, iW
      }
    }
  },
  40736: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => QN
    });
    const mW = "ore sell",
      EW = "lumber ",
      NW = "farm ",
      PW = ["market", "demolition", "mining", "woodcutting", "farming"],
      LW = "tutorial ";
    var cW = OW(62),
      wW = OW(27),
      tW = OW(39775),
      ZW = OW(39890),
      xW = OW(3368),
      lW = OW(3361),
      AW = OW(40719);
    const bW = "greenvilleBackpackView";
    class jW {
      constructor(WW) {
        this.iZ = WW, this.view = null, this.arrivalToken = 0, this.showToken = 0
      }
      getView() {
        return this.view
      }
      yZ(WW) {
        if ("hide" === WW[0]) this.view = null;
        else if ("show" === WW[0]) {
          const iW = WW[3];
          this.view = {
            aZ: WW[1],
            shardsPerItem: WW[2],
            total: iW.reduce(((WW, iW) => {
              let [, OW] = iW;
              return WW + OW
            }), 0),
            contents: iW,
            arrival: null,
            showToken: ++this.showToken
          }
        } else {
          if (null === this.view) return void console.warn(`[greenville] backpack ${WW[0]} with no backpack shown`);
          {
            var iW, OW;
            const mW = WW[1],
              EW = this.view.contents.find((WW => {
                let [iW] = WW;
                return iW === mW
              })),
              NW = this.view.contents.filter((WW => {
                let [iW] = WW;
                return iW !== mW
              })),
              PW = null !== (iW = null === EW || void 0 === EW ? void 0 : EW[1]) && void 0 !== iW ? iW : 0,
              LW = null !== (OW = null === EW || void 0 === EW ? void 0 : EW[2]) && void 0 !== OW ? OW : 0;
            "shard" === WW[0] ? this.view = {
              ...this.view,
              contents: [...NW, [mW, PW, LW + 1]]
            } : this.view = {
              ...this.view,
              total: this.view.total + 1,
              contents: [...NW, [mW, PW + 1, 0]],
              arrival: {
                item: mW,
                token: ++this.arrivalToken,
                fromShards: LW > 0
              }
            }
          }
        }
        this.iZ(this.view)
      }
    }
    var UW = OW(1089),
      kW = OW.n(UW),
      sW = OW(25),
      MW = OW(37868),
      KW = OW(2032),
      SW = OW(1526),
      YW = OW(2085),
      yW = OW(1172);
    const TW = "data:image/png;base64,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";
    var JW = OW(1283);
    const hW = (0, cW.forwardRef)((function(WW, iW) {
      let {
        contents: OW,
        aZ: mW,
        full: EW,
        children: NW
      } = WW;
      const PW = [...OW].sort(((WW, iW) => {
        let [OW] = WW, [mW] = iW;
        return OW.localeCompare(mW)
      }));
      let LW = 0;
      return (0, JW.jsxs)("div", {
        ref: iW,
        className: "GreenvilleBackpackBag",
        children: [NW, (0, JW.jsx)("img", {
          className: kW()("GreenvilleBackpackArt", {
            Full: EW
          }),
          src: TW,
          alt: "",
          draggable: !1
        }), (0, JW.jsx)("div", {
          className: "GreenvilleBackpackWindow",
          children: PW.map((WW => {
            let [iW, OW] = WW;
            const EW = Math.min(1 - LW, OW / mW),
              NW = (0, JW.jsx)(nW, {
                item: iW,
                below: LW,
                share: EW
              }, iW);
            return LW += EW, NW
          }))
        })]
      })
    }));

    function HW() {
      const WW = new Image;
      WW.src = TW, WW.decode().catch((WW => {
        console.error("[greenville] backpack art failed to load", WW)
      }))
    }
    const nW = (0, cW.memo)((function(WW) {
        let {
          item: iW,
          below: OW,
          share: mW
        } = WW;
        return (0, JW.jsx)("div", {
          className: "GreenvilleBackpackOre",
          style: {
            bottom: `calc(var(--rise) * ${OW})`,
            height: `calc(var(--rise) * ${mW} + var(--slant))`
          },
          children: Array.from({
            length: 18
          }, ((WW, OW) => (0, JW.jsx)("div", {
            className: "GreenvilleBackpackOreTile",
            children: (0, JW.jsx)(KW.b, {
              itemName: iW,
              amount: 0
            })
          }, OW)))
        })
      })),
      uW = [{
        transform: "scale(1)"
      }, {
        transform: "scale(1.12, 0.86)",
        offset: .3
      }, {
        transform: "scale(0.96, 1.05)",
        offset: .65
      }, {
        transform: "scale(1)"
      }],
      oW = [{
        transform: "scale(1.3)"
      }, {
        transform: "scale(1)"
      }];
    let dW = 1;

    function eW(WW) {
      let {
        controller: iW
      } = WW;
      (0, SW.g)(bW, null), (0, cW.useEffect)(HW, []);
      const OW = iW.getView();
      return null === OW ? null : (0, JW.jsx)(MW.h, {
        placement: "bottomLeft",
        children: (0, JW.jsx)(vW, {
          view: OW
        })
      })
    }

    function vW(WW) {
      let {
        view: iW
      } = WW;
      const {
        t: OW
      } = (0, yW.B)(), {
        isTouchScreen: mW
      } = (0, sW.p)(["isTouchScreen"]), [EW, NW] = (0, cW.useState)([]), PW = (0, cW.useRef)(null), LW = (0, cW.useRef)(null), wW = (0, cW.useRef)([]), tW = (0, cW.useRef)({
        arrival: iW.arrival,
        showToken: iW.showToken
      }), {
        arrival: ZW,
        showToken: xW
      } = iW;
      (0, cW.useLayoutEffect)((() => {
        var WW;
        if (xW !== tW.current.showToken) NW([]);
        else if (null !== ZW && ZW.token !== (null === (WW = tW.current.arrival) || void 0 === WW ? void 0 : WW.token) && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          const WW = {
            id: dW++,
            item: ZW.item,
            fromShards: ZW.fromShards,
            driftEm: 1.4 * (Math.random() - .5),
            spinDeg: 70 * (Math.random() - .5)
          };
          NW((iW => iW.length < 6 ? [...iW, WW] : iW))
        }
        tW.current = {
          arrival: ZW,
          showToken: xW
        }
      }), [ZW, xW]), (0, cW.useEffect)((() => () => {
        for (const WW of wW.current) WW.cancel()
      }), []);
      const lW = (0, cW.useCallback)((() => {
          for (const WW of wW.current) WW.cancel();
          wW.current = [PW.current.animate(uW, {
            duration: 300,
            easing: "ease-out"
          }), LW.current.animate(oW, {
            duration: 220,
            easing: "ease-out"
          })]
        }), []),
        AW = (0, cW.useCallback)((WW => {
          NW((iW => iW.filter((iW => iW.id !== WW)))), lW()
        }), [lW]),
        bW = iW.total - EW.length,
        jW = bW >= iW.aZ,
        UW = iW.contents.map((WW => {
          let [OW, mW, NW] = WW;
          const PW = EW.filter((WW => WW.item === OW)),
            LW = PW.some((WW => WW.fromShards));
          return [OW, mW - PW.length, LW ? iW.shardsPerItem : NW]
        })),
        MW = UW.filter((WW => {
          let [, iW, OW] = WW;
          return iW > 0 || OW > 0
        })).reverse().slice(0, 4),
        SW = (0, YW.n)("SpecialAction2");
      return (0, JW.jsxs)("div", {
        className: "GreenvilleBackpack",
        children: [(0, JW.jsxs)("div", {
          className: "GreenvilleBackpackCount SmallTextBold",
          children: [(0, JW.jsx)("span", {
            ref: LW,
            className: kW()("GreenvilleBackpackTotal", {
              Full: jW
            }),
            children: bW
          }), (0, JW.jsxs)("span", {
            className: "GreenvilleBackpackCapacity",
            children: ["/ ", iW.aZ]
          })]
        }), (0, JW.jsxs)("div", {
          className: "GreenvilleBackpackRow",
          children: [(0, JW.jsx)(hW, {
            ref: PW,
            contents: UW,
            aZ: iW.aZ,
            full: jW,
            children: EW.map((WW => (0, JW.jsx)(DW, {
              drop: WW,
              onLanded: AW
            }, WW.id)))
          }), (0, JW.jsxs)("div", {
            className: "GreenvilleBackpackInfo",
            children: [MW.length > 0 && (0, JW.jsx)("div", {
              className: "GreenvilleBackpackTallies",
              children: MW.map((WW => {
                let [OW, mW, EW] = WW;
                return (0, JW.jsxs)("div", {
                  className: "GreenvilleBackpackTally",
                  children: [(0, JW.jsx)("div", {
                    className: "GreenvilleBackpackTallyIcon",
                    children: (0, JW.jsx)(KW.b, {
                      itemName: OW,
                      amount: 0
                    })
                  }), mW > 0 && (0, JW.jsxs)("span", {
                    className: "SmallTextBold",
                    children: ["\xd7", mW]
                  }), EW > 0 && (0, JW.jsx)(gW, {
                    shards: EW,
                    shardsPerItem: iW.shardsPerItem
                  })]
                }, OW)
              }))
            }), jW && (0, JW.jsxs)("div", {
              className: "GreenvilleBackpackFullLine",
              role: "status",
              children: [(0, JW.jsx)("span", {
                className: "GreenvilleBackpackFullTitle SmallTextBold",
                children: OW("greenvilleGame:backpackFull")
              }), mW && (0, JW.jsx)("span", {
                className: "SmallTextLight",
                children: OW("greenvilleGame:backpackReturnTouch")
              }), !mW && null !== SW && (0, JW.jsx)("span", {
                className: "SmallTextLight",
                children: OW("greenvilleGame:backpackReturnDesktop", {
                  key: (0, YW.m)(SW)
                })
              })]
            })]
          })]
        })]
      })
    }

    function gW(WW) {
      let {
        shards: iW,
        shardsPerItem: OW
      } = WW;
      return (0, JW.jsx)("div", {
        className: "GreenvilleBackpackShards",
        children: Array.from({
          length: OW
        }, ((WW, OW) => (0, JW.jsx)("span", {
          className: kW()("GreenvilleBackpackShard", {
            Filled: OW < iW
          })
        }, OW)))
      })
    }

    function DW(WW) {
      let {
        drop: iW,
        onLanded: OW
      } = WW;
      const mW = (0, cW.useRef)(null);
      return (0, cW.useLayoutEffect)((() => {
        const {
          driftEm: WW,
          spinDeg: EW
        } = iW, NW = mW.current.animate([{
          transform: `translate(${WW}em, -3.2em) rotate(${EW}deg) scale(1.2)`,
          opacity: 0
        }, {
          transform: `translate(${.7*WW}em, -2.4em) rotate(${.7*EW}deg) scale(1.1)`,
          opacity: 1,
          offset: .25
        }, {
          transform: "translate(0, 0.3em) rotate(0deg) scale(0.7)",
          opacity: 1,
          offset: .85
        }, {
          transform: "translate(0, 1em) scale(0.5)",
          opacity: 1
        }], {
          duration: 420,
          easing: "cubic-bezier(0.55, 0, 1, 0.45)"
        });
        return NW.onfinish = () => {
          OW(iW.id)
        }, () => {
          NW.onfinish = null, NW.cancel()
        }
      }), [iW, OW]), (0, JW.jsx)("div", {
        ref: mW,
        className: "GreenvilleBackpackFalling",
        children: (0, JW.jsx)(KW.b, {
          itemName: iW.item,
          amount: 0
        })
      })
    }
    var VW = OW(80),
      pW = OW(35243),
      fW = OW(3332),
      CW = OW(3599),
      XW = OW(35240);
    const BW = "gold",
      qW = "Gold Coin";

    function RW() {
      var WW, iW;
      return null !== (WW = null === (iW = (0, fW.e)("currencyAmounts")) || void 0 === iW ? void 0 : iW[BW].amount) && void 0 !== WW ? WW : 0
    }
    const GW = [{
        transform: "scale(1.18)"
      }, {
        transform: "scale(1)"
      }],
      IW = [{
        transform: "scale(1)",
        filter: "brightness(1)"
      }, {
        transform: "scale(1.3)",
        filter: "brightness(1.5)",
        offset: .3
      }, {
        transform: "scale(1)",
        filter: "brightness(1)"
      }];
    let aW = 1;

    function rW(WW) {
      var iW;
      let {
        sounds: OW
      } = WW;
      const mW = null === (iW = (0, fW.e)("currencyAmounts")) || void 0 === iW ? void 0 : iW[BW];
      return !mW || mW.hidden ? null : (0, JW.jsx)(zW, {
        gold: mW.amount,
        sounds: OW
      })
    }

    function zW(WW) {
      let {
        gold: iW,
        sounds: OW
      } = WW;
      const mW = (0, CW.e)(),
        [EW, NW] = (0, cW.useState)([]),
        PW = (0, cW.useRef)(null),
        LW = (0, cW.useRef)(null),
        wW = (0, cW.useRef)(null),
        tW = (0, cW.useRef)(null),
        ZW = (0, cW.useRef)(iW);
      (0, cW.useLayoutEffect)((() => {
        const WW = iW - ZW.current;
        if (ZW.current = iW, !(WW <= 0) && (OW.onGain(), !mW && !window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
          const iW = function(WW) {
            const iW = Math.max(1, Math.min(8, Math.floor(WW))),
              OW = Math.floor(WW / iW),
              mW = [];
            for (let EW = 0; EW < iW; EW++) {
              const NW = -Math.PI / 2 + (1 === iW ? 0 : 2.4 * (EW / (iW - 1) - .5)) + .3 * (Math.random() - .5),
                PW = 40 + 35 * Math.random();
              mW.push({
                id: aW++,
                burst: {
                  x: Math.cos(NW) * PW,
                  y: Math.sin(NW) * PW
                },
                gold: EW === iW - 1 ? WW - OW * (iW - 1) : OW,
                delayMs: 45 * EW,
                step: EW,
                steps: iW
              })
            }
            return mW
          }(WW);
          NW((WW => [...WW, ...iW.slice(0, Math.max(0, 24 - WW.length))]))
        }
      }), [iW]), (0, cW.useEffect)((() => () => {
        var WW;
        null === (WW = wW.current) || void 0 === WW || WW.cancel()
      }), []), (0, cW.useLayoutEffect)((() => () => {
        XW.b.setInFlight(BW, 0)
      }), []);
      const xW = (0, cW.useCallback)(((WW, iW) => {
          tW.current = iW, OW.onCoinLanded(WW.step, WW.steps), NW((iW => iW.filter((iW => {
            let {
              id: OW
            } = iW;
            return OW !== WW.id
          }))))
        }), [OW]),
        lW = EW.length,
        AW = (0, cW.useRef)(lW);
      (0, cW.useEffect)((() => {
        var WW, iW;
        lW < AW.current && (null === (WW = wW.current) || void 0 === WW || WW.cancel(), wW.current = (null !== (iW = tW.current) && void 0 !== iW ? iW : PW.current).animate(0 === lW ? IW : GW, {
          duration: 0 === lW ? 380 : 160,
          easing: "ease-out"
        }));
        AW.current = lW
      }), [lW]);
      const bW = EW.reduce(((WW, iW) => WW + iW.gold), 0);
      return (0, cW.useLayoutEffect)((() => {
        XW.b.setInFlight(BW, bW)
      }), [bW]), (0, JW.jsxs)(JW.Fragment, {
        children: [(0, JW.jsx)("div", {
          className: "GreenvilleGoldPurse",
          children: (0, JW.jsxs)("div", {
            ref: PW,
            className: "GreenvilleGoldPurseBody",
            children: [(0, JW.jsx)("span", {
              ref: LW,
              className: "GreenvilleGoldPurseIcon",
              children: (0, JW.jsx)(KW.b, {
                itemName: qW,
                amount: 0
              })
            }), (0, JW.jsx)("span", {
              className: "GreenvilleGoldPurseAmount SmallTextBold",
              children: (0, pW.g)(Math.max(0, iW - bW))
            })]
          })
        }), (0, VW.createPortal)(EW.map((WW => (0, JW.jsx)(FW, {
          coin: WW,
          target: LW,
          onLanded: xW
        }, WW.id))), document.body)]
      })
    }

    function FW(WW) {
      let {
        coin: iW,
        target: OW,
        onLanded: mW
      } = WW;
      const EW = (0, cW.useRef)(null),
        [NW] = (0, cW.useState)((() => XW.b.getLanding(BW))),
        [PW, LW] = (0, cW.useState)(null !== NW);
      return (0, cW.useEffect)((() => {
        const WW = (null !== NW && void 0 !== NW ? NW : OW.current).getBoundingClientRect(),
          {
            burst: PW
          } = iW,
          cW = window.innerWidth / 2,
          wW = window.innerHeight / 2,
          tW = WW.left + WW.width / 2,
          ZW = WW.top + WW.height / 2,
          xW = EW.current.animate([{
            transform: `translate(${cW}px, ${wW}px) scale(0.3)`,
            opacity: 0,
            easing: "ease-out"
          }, {
            transform: `translate(${cW+.7*PW.x}px, ${wW+.7*PW.y}px) scale(1.25)`,
            opacity: 1,
            offset: .15,
            easing: "ease-out"
          }, {
            transform: `translate(${cW+PW.x}px, ${wW+PW.y}px) scale(1)`,
            offset: .35,
            easing: "ease-in-out"
          }, {
            transform: `translate(${cW+PW.x}px, ${wW+PW.y+6}px) scale(1)`,
            offset: .45,
            easing: "cubic-bezier(0.55, 0, 1, 0.45)"
          }, {
            transform: `translate(${tW}px, ${ZW}px) scale(0.6)`,
            opacity: 1
          }], {
            duration: 950,
            delay: iW.delayMs,
            fill: "both"
          });
        let lW = xW;
        lW.onfinish = () => {
          mW(iW, NW)
        };
        const AW = XW.b.subscribe((() => {
          var WW;
          if (null === NW || lW !== xW || XW.b.hasLanding(BW, NW)) return;
          const PW = OW.current.getBoundingClientRect();
          xW.commitStyles(), lW = EW.current.animate([{
            transform: `translate(${PW.left+PW.width/2}px, ${PW.top+PW.height/2}px) scale(0.6)`,
            opacity: 1
          }], {
            duration: Math.max(150, 950 + iW.delayMs - Number(null !== (WW = xW.currentTime) && void 0 !== WW ? WW : 0)),
            easing: "ease-in",
            fill: "both"
          }), lW.onfinish = () => {
            mW(iW, null)
          }, xW.onfinish = null, xW.cancel(), LW(!1)
        }));
        return () => {
          AW(), lW.onfinish = null, lW.cancel()
        }
      }), [iW, OW, NW, mW]), (0, JW.jsx)("div", {
        ref: EW,
        className: kW()("GreenvilleGoldCoin", {
          IntoMenu: PW
        }),
        children: (0, JW.jsx)(KW.b, {
          itemName: qW,
          amount: 0
        })
      })
    }
    class QW {
      constructor(WW, iW, OW) {
        this.pacer = WW, this.send = iW, this.onAnswersTimedOut = OW, this.queued = [], this.unanswered = [], this.answerTimer = null, this.flushing = !1, this.flush = () => {
          if (!this.flushing) {
            this.flushing = !0;
            try {
              for (; this.queued.length > 0 && this.pacer.tryStart();) {
                const WW = this.queued.shift();
                this.unanswered.push(WW), this.answerTimer ??= setTimeout(this.onAnswerTimeout, 15e3), this.send(WW)
              }
            } finally {
              this.flushing = !1
            }
          }
        }, this.onAnswerTimeout = () => {
          this.answerTimer = null, this.unanswered = [], this.onAnswersTimedOut()
        }, WW.subscribe(this.flush)
      }
      getPending() {
        return [...this.unanswered, ...this.queued]
      }
      sZ() {
        return 0 === this.unanswered.length && 0 === this.queued.length
      }
      getLastSent() {
        return this.unanswered.at(-1)
      }
      getLastPending() {
        var WW;
        return null !== (WW = this.queued.at(-1)) && void 0 !== WW ? WW : this.unanswered.at(-1)
      }
      push(WW) {
        this.queued.push(WW), this.flush()
      }
      dropWaiting() {
        const WW = this.queued.length > 0;
        return this.queued = [], WW
      }
      takeAnswer() {
        var WW;
        const iW = null !== (WW = this.unanswered.shift()) && void 0 !== WW ? WW : null;
        return this.stopAnswerTimer(), this.unanswered.length > 0 && (this.answerTimer = setTimeout(this.onAnswerTimeout, 15e3)), iW
      }
      clear() {
        this.queued = [], this.unanswered = [], this.stopAnswerTimer()
      }
      stopAnswerTimer() {
        null !== this.answerTimer && (clearTimeout(this.answerTimer), this.answerTimer = null)
      }
    }
    class Wi {
      constructor(WW, iW, OW, mW) {
        this.confirmed = WW, this.picks = void 0, this.picks = new QW(iW, OW, mW)
      }
      confirm(WW) {
        this.confirmed = WW
      }
      getLastPending() {
        return this.picks.getLastPending()
      }
      getLatest() {
        var WW;
        return null !== (WW = this.getLastPending()) && void 0 !== WW ? WW : this.confirmed
      }
      sZ() {
        return this.picks.sZ()
      }
      pushLatest(WW) {
        var iW;
        const OW = null !== (iW = this.picks.getLastSent()) && void 0 !== iW ? iW : this.confirmed;
        this.picks.dropWaiting() && WW === OW || this.picks.push(WW)
      }
      takeAnswer() {
        this.picks.takeAnswer()
      }
      clear() {
        this.picks.clear()
      }
    }
    class ii {
      constructor(WW, iW, OW) {
        this.closed = WW, this.iZ = iW, this.menu = OW, this.view = void 0, this.dismiss = () => {
          this.closePanel() && this.menu.dismiss()
        }, this.onMenuClosed = () => {
          this.closePanel()
        }, this.view = WW
      }
      getView() {
        return this.view
      }
      show(WW) {
        this.set(WW), this.menu.open(this)
      }
      close() {
        this.closePanel() && this.menu.close()
      }
      set(WW) {
        this.view = WW, this.iZ(WW)
      }
      closePanel() {
        return !!this.view.open && (this.dropPresses(), this.set(this.closed), !0)
      }
    }
    const Oi = "greenvilleDepotView",
      mi = {
        open: !1,
        explosives: [],
        picked: 0,
        selected: 0,
        level: 1,
        line: "demolitionDepotIntro"
      };
    class Ei extends ii {
      constructor(WW, iW, OW, mW) {
        super(mi, WW, iW), this.picks = void 0, this.select = WW => {
          this.set({
            ...this.getView(),
            selected: WW
          })
        }, this.Kl = WW => {
          const iW = this.getView();
          WW !== iW.picked && (this.picks.pushLatest(WW), this.set({
            ...iW,
            picked: WW,
            line: "demolitionGrubnikPicked"
          }))
        }, this.onAnswersTimedOut = () => {
          const WW = this.getView();
          WW.open && this.set({
            ...WW,
            picked: this.picks.getLatest()
          })
        }, this.picks = new Wi(0, mW, OW, this.onAnswersTimedOut)
      }
      yZ(WW) {
        if ("openDepot" === WW[0]) {
          const iW = WW[4];
          iW && this.picks.takeAnswer();
          const OW = this.getView();
          if (iW && !OW.open) return;
          this.picks.confirm(WW[2]);
          const mW = this.picks.getLatest(),
            EW = !OW.open;
          this.show({
            open: !0,
            explosives: WW[1],
            picked: mW,
            selected: EW ? mW : OW.selected,
            level: WW[3],
            line: EW ? "demolitionDepotIntro" : OW.line
          })
        } else "closeDepot" !== WW[0] && "hide" !== WW[0] || this.close()
      }
      dropPresses() {
        this.picks.clear()
      }
    }
    var Ni = OW(1391),
      Pi = OW(1532),
      Li = OW(35231),
      ci = OW(4454),
      wi = OW(2021),
      ti = OW(5238);

    function Zi(WW) {
      var iW;
      let {
        item: OW,
        className: mW
      } = WW;
      return (0, JW.jsx)(wi.d, {
        className: mW,
        text: null !== (iW = (0, Li.displayNameOf)((0, ci.b)(OW))) && void 0 !== iW ? iW : OW
      })
    }

    function xi(WW) {
      let {
        item: iW
      } = WW;
      return (0, JW.jsx)(KW.b, {
        itemName: iW,
        amount: 0
      })
    }

    function li(WW) {
      let {
        open: iW,
        onDismiss: OW,
        title: mW,
        className: EW,
        headerExtra: NW,
        tabs: PW,
        status: LW,
        children: cW
      } = WW;
      const wW = `${EW}Title`;
      return (0, JW.jsx)(ti.b, {
        show: iW,
        close: OW,
        togglePointerLock: !1,
        ignorePressesAsShown: !0,
        className: "GreenvilleBoardOverlay",
        children: (0, JW.jsxs)("section", {
          className: kW()("GreenvilleBoard", EW),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": wW,
          children: [(0, JW.jsxs)("header", {
            className: "GreenvilleBoardHeader",
            children: [(0, JW.jsx)("h2", {
              id: wW,
              className: "VisuallyHidden",
              children: mW
            }), NW, (0, JW.jsx)(Pi.l, {
              onClick: OW
            })]
          }), PW, (0, JW.jsx)("div", {
            className: "GreenvilleBoardBody",
            children: cW
          }), LW && (0, JW.jsxs)("footer", {
            className: "GreenvilleBoardStatus",
            children: [(0, JW.jsx)("span", {
              className: "GreenvilleBoardSpeaker",
              children: LW.speaker
            }), LW.line]
          })]
        })
      })
    }

    function Ai(WW) {
      let {
        tabs: iW,
        selected: OW,
        onSelect: mW
      } = WW;
      return (0, JW.jsx)("nav", {
        className: "GreenvilleBoardTabs",
        "data-pad-tabs": "1",
        children: iW.map((WW => {
          const iW = WW.id === OW;
          return (0, JW.jsxs)("button", {
            type: "button",
            className: kW()("GreenvilleBoardTab", {
              Selected: iW
            }),
            "aria-pressed": iW,
            "data-pad-tab": !0,
            "data-pad-selected": iW ? "true" : void 0,
            onClick: () => {
              mW(WW.id)
            },
            children: [WW.label, WW.badge]
          }, WW.id)
        }))
      })
    }

    function bi(WW) {
      let {
        className: iW,
        roomy: OW = !1,
        children: mW
      } = WW;
      return (0, JW.jsx)("div", {
        className: kW()("GreenvilleBoardTiles", iW, {
          Roomy: OW
        }),
        style: OW ? {
          "--tile-columns": (EW = cW.Children.count(mW), EW <= 3 ? EW : Math.min(4, Math.ceil(EW / 2)))
        } : void 0,
        "data-pad-select-on-focus": !0,
        children: mW
      });
      var EW
    }

    function ji(WW) {
      let {
        icon: iW,
        name: OW,
        selected: mW,
        locked: EW = !1,
        className: NW,
        onSelect: PW,
        children: LW
      } = WW;
      return (0, JW.jsxs)("button", {
        type: "button",
        className: kW()("GreenvilleBoardTile", NW, {
          Selected: mW,
          Locked: EW
        }),
        "aria-pressed": mW,
        "data-pad-default-focus": mW || void 0,
        onClick: PW,
        children: [(0, JW.jsx)("span", {
          className: "GreenvilleBoardTileIcon",
          children: iW
        }), (0, JW.jsx)("span", {
          className: "GreenvilleBoardTileName",
          children: OW
        }), LW]
      })
    }

    function Ui(WW) {
      let {
        icon: iW,
        name: OW,
        badges: mW,
        children: EW
      } = WW;
      return (0, JW.jsxs)("section", {
        className: "GreenvilleBoardDetail",
        children: [(0, JW.jsxs)("header", {
          className: "GreenvilleBoardDetailHeader",
          children: [(0, JW.jsx)("span", {
            className: "GreenvilleBoardDetailHero",
            children: (0, JW.jsx)("span", {
              className: "GreenvilleBoardDetailIcon",
              children: iW
            })
          }), (0, JW.jsxs)("div", {
            className: "GreenvilleBoardDetailHeading",
            children: [(0, JW.jsx)("h3", {
              children: OW
            }), mW && (0, JW.jsx)("span", {
              className: "GreenvilleBoardDetailBadges",
              children: mW
            })]
          })]
        }), EW]
      })
    }

    function ki(WW) {
      let {
        level: iW
      } = WW;
      const {
        t: OW
      } = (0, yW.B)();
      return (0, JW.jsxs)("span", {
        className: "GreenvilleBoardBadge Muted",
        children: [(0, JW.jsx)(Ni.c, {
          name: "lock"
        }), OW("greenvilleGame:boardLevelBadge", {
          level: iW
        })]
      })
    }

    function si() {
      const {
        t: WW
      } = (0, yW.B)();
      return (0, JW.jsx)("span", {
        className: "GreenvilleBoardBadge",
        children: WW("greenvilleGame:demolitionDepotPicked")
      })
    }

    function Mi(WW) {
      let {
        line: iW,
        picked: OW,
        level: mW
      } = WW;
      const EW = iW[3];
      return (0, JW.jsxs)(JW.Fragment, {
        children: [OW && (0, JW.jsx)(si, {}), EW > mW && (0, JW.jsx)(ki, {
          level: EW
        })]
      })
    }

    function Ki(WW) {
      let {
        view: iW,
        controller: OW
      } = WW;
      const {
        t: mW
      } = (0, yW.B)(), EW = iW.selected, NW = iW.explosives[EW], [PW, LW, cW, wW, tW] = NW, ZW = EW === iW.picked, xW = wW > iW.level;
      return (0, JW.jsxs)(Ui, {
        icon: (0, JW.jsx)(xi, {
          item: PW
        }),
        name: mW(`greenvilleGame:${LW}`),
        badges: xW && (0, JW.jsx)(ki, {
          level: wW
        }),
        children: [(0, JW.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: mW(`greenvilleGame:${cW}`)
        }), (0, JW.jsx)("p", {
          className: "GreenvilleDepotStencil",
          children: mW("greenvilleGame:demolitionDepotMaxLive", {
            count: tW
          })
        }), (0, JW.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [ZW && (0, JW.jsx)("span", {
            className: "GreenvilleDepotLoaded",
            children: mW("greenvilleGame:demolitionDepotPicked")
          }), !ZW && (0, JW.jsx)(Pi.f, {
            disabled: xW,
            onClick: () => {
              OW.Kl(EW)
            },
            children: mW("greenvilleGame:demolitionDepotLoad")
          }), xW && (0, JW.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: mW("greenvilleGame:demolitionDepotLocked", {
              level: wW
            })
          })]
        })]
      })
    }

    function Si(WW) {
      let {
        controller: iW
      } = WW;
      const OW = (0, SW.g)(Oi, iW.getView()),
        {
          t: mW
        } = (0, yW.B)();
      return 0 === OW.explosives.length ? null : (0, JW.jsxs)(li, {
        open: OW.open,
        onDismiss: iW.dismiss,
        title: mW("greenvilleGame:demolitionDepotTitle"),
        className: "GreenvilleDepotBoard",
        headerExtra: (0, JW.jsx)("span", {
          className: "GreenvilleBoardLevel",
          children: mW("greenvilleGame:demolitionDepotLevel", {
            level: OW.level
          })
        }),
        status: {
          speaker: mW("greenvilleGame:demolitionGrubnikName"),
          line: mW(`greenvilleGame:${OW.line}`)
        },
        children: [(0, JW.jsx)(bi, {
          roomy: !0,
          children: OW.explosives.map(((WW, EW) => {
            const [NW, PW, LW, cW, wW] = WW;
            return (0, JW.jsxs)(ji, {
              icon: (0, JW.jsx)(xi, {
                item: NW
              }),
              name: mW(`greenvilleGame:${PW}`),
              selected: EW === OW.selected,
              locked: cW > OW.level,
              className: kW()("GreenvilleDepotCrate", {
                Picked: EW === OW.picked
              }),
              onSelect: () => {
                iW.select(EW)
              },
              children: [(0, JW.jsx)(Mi, {
                line: WW,
                picked: EW === OW.picked,
                level: OW.level
              }), (0, JW.jsx)("span", {
                className: "GreenvilleDepotStencil",
                children: mW("greenvilleGame:demolitionDepotMaxLive", {
                  count: wW
                })
              }), (0, JW.jsx)("span", {
                className: "GreenvilleDepotBlurb",
                children: mW(`greenvilleGame:${LW}`)
              })]
            }, NW)
          }))
        }), (0, JW.jsx)(Ki, {
          view: OW,
          controller: iW
        })]
      })
    }
    const Yi = "greenvilleGarageView",
      yi = {
        open: !1,
        cars: [],
        out: null,
        awaiting: !1,
        selected: null,
        line: "dealershipGarageIntro"
      };
    class Ti extends ii {
      constructor(WW, iW, OW, mW) {
        super(yi, WW, iW), this.picks = void 0, this.select = WW => {
          this.set({
            ...this.getView(),
            selected: WW
          })
        }, this.Kl = WW => {
          WW !== this.picks.getLastPending() && (this.picks.pushLatest(WW), this.set({
            ...this.getView(),
            out: WW,
            awaiting: !this.picks.sZ(),
            line: "dealershipGarageTip"
          }))
        }, this.onAnswersTimedOut = () => {
          const WW = this.getView();
          WW.open && this.set({
            ...WW,
            out: this.picks.getLatest(),
            awaiting: !this.picks.sZ()
          })
        }, this.picks = new Wi(null, mW, OW, this.onAnswersTimedOut)
      }
      yZ(WW) {
        if ("open" === WW[0]) {
          var iW;
          const OW = WW[3];
          OW && this.picks.takeAnswer();
          const mW = this.getView();
          if (OW && !mW.open) return;
          this.picks.confirm(WW[2]);
          const EW = WW[1],
            NW = this.picks.getLatest(),
            PW = !mW.open;
          this.show({
            open: !0,
            cars: EW,
            out: NW,
            awaiting: !this.picks.sZ(),
            selected: PW ? null !== (iW = null !== NW && void 0 !== NW ? NW : EW[0]) && void 0 !== iW ? iW : null : mW.selected,
            line: PW ? "dealershipGarageIntro" : mW.line
          })
        } else this.close()
      }
      dropPresses() {
        this.picks.clear()
      }
    }

    function Ji() {
      const {
        t: WW
      } = (0, yW.B)();
      return (0, JW.jsx)("span", {
        className: "GreenvilleBoardBadge",
        children: WW("greenvilleGame:dealershipGarageOut")
      })
    }

    function Hi(WW) {
      let {
        car: iW,
        out: OW,
        awaiting: mW,
        controller: EW
      } = WW;
      const {
        t: NW
      } = (0, yW.B)();
      return (0, JW.jsx)(Ui, {
        icon: (0, JW.jsx)(xi, {
          item: iW
        }),
        name: (0, JW.jsx)(Zi, {
          item: iW
        }),
        children: (0, JW.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [OW && (0, JW.jsx)("span", {
            className: "GreenvilleGarageOutStamp",
            children: NW("greenvilleGame:dealershipGarageOut")
          }), (0, JW.jsx)(Pi.f, {
            disabled: OW && mW,
            onClick: () => {
              EW.Kl(iW)
            },
            children: NW(OW ? "greenvilleGame:dealershipGarageBringBack" : "greenvilleGame:dealershipGarageTakeOut")
          })]
        })
      })
    }

    function ni(WW) {
      let {
        controller: iW
      } = WW;
      const OW = (0, SW.g)(Yi, iW.getView()),
        {
          t: mW
        } = (0, yW.B)(),
        EW = 0 === OW.cars.length;
      return (0, JW.jsxs)(li, {
        open: OW.open,
        onDismiss: iW.dismiss,
        title: mW("greenvilleGame:dealershipGarageTitle"),
        className: "GreenvilleGarageBoard",
        status: {
          speaker: mW("greenvilleGame:dealershipDelName"),
          line: mW(EW ? "greenvilleGame:dealershipGarageEmpty" : `greenvilleGame:${OW.line}`)
        },
        children: [!EW && (0, JW.jsx)(bi, {
          roomy: !0,
          children: OW.cars.map((WW => {
            const mW = WW === OW.out;
            return (0, JW.jsx)(ji, {
              icon: (0, JW.jsx)(xi, {
                item: WW
              }),
              name: (0, JW.jsx)(Zi, {
                item: WW
              }),
              selected: WW === OW.selected,
              className: kW()("GreenvilleGarageBay", {
                Out: mW
              }),
              onSelect: () => {
                iW.select(WW)
              },
              children: mW && (0, JW.jsx)(Ji, {})
            }, WW)
          }))
        }), null !== OW.selected && (0, JW.jsx)(Hi, {
          car: OW.selected,
          out: OW.selected === OW.out,
          awaiting: OW.awaiting,
          controller: iW
        })]
      })
    }
    const ui = {
        kind: "intro"
      },
      oi = {
        open: !1,
        orders: [],
        tracked: null,
        sellLines: [],
        level: 1,
        delivering: [],
        tab: "orders",
        selectedSlot: 0,
        selectedWood: 0,
        line: ui
      };

    function di(WW) {
      let [iW, OW, mW, EW, NW, PW] = WW;
      return {
        slot: iW,
        titleKey: OW,
        items: mW,
        exp: EW,
        gold: NW,
        ct: PW,
        ready: mW.every((WW => {
          let [, iW, OW] = WW;
          return OW >= iW
        }))
      }
    }

    function ei(WW, iW) {
      return "sell" === iW.action ? function(WW, iW) {
        const OW = WW.sellLines.map((WW => {
          const [OW, , mW] = WW;
          return null !== iW && iW !== OW ? WW : [OW, 0, mW]
        }));
        return {
          ...WW,
          sellLines: OW
        }
      }(WW, iW.item) : "accept" === iW.action ? function(WW, iW) {
        var OW;
        const mW = WW.orders[iW];
        return {
          ...WW,
          tracked: null !== (OW = WW.tracked) && void 0 !== OW ? OW : iW,
          orders: WW.orders.map((WW => WW === mW ? {
            ...WW,
            ct: !0
          } : WW)),
          sellLines: WW.sellLines.map((WW => {
            const [iW, OW, EW] = WW, NW = mW.items.find((WW => {
              let [OW] = WW;
              return OW === iW
            }));
            return void 0 === NW ? WW : [iW, Math.max(0, OW - NW[1]), EW]
          }))
        }
      }(WW, iW.slot) : "track" === iW.action ? {
        ...WW,
        tracked: iW.slot
      } : {
        ...WW,
        delivering: [...WW.delivering, iW.slot]
      }
    }
    const vi = "greenvilleLumberMillView",
      gi = "greenvilleLumberTrackerView";
    class Di extends ii {
      constructor(WW, iW, OW, mW, NW) {
        super(oi, WW, OW), this.publishTracker = iW, this.board = null, this.commands = void 0, this.tracker = null, this.tab = "orders", this.selectedSlot = 0, this.selectedWood = 0, this.line = ui, this.selectTab = WW => {
          this.tab = WW, this.set({
            ...this.getView(),
            tab: WW
          })
        }, this.selectOrder = WW => {
          this.selectedSlot = WW, this.set({
            ...this.getView(),
            selectedSlot: WW
          })
        }, this.selectWood = WW => {
          this.selectedWood = WW, this.set({
            ...this.getView(),
            selectedWood: WW
          })
        }, this.accept = WW => {
          this.findOrder(WW).ct || this.queue({
            action: "accept",
            slot: WW
          })
        }, this.track = WW => {
          this.getView().tracked !== WW && this.findOrder(WW).ct && this.queue({
            action: "track",
            slot: WW
          })
        }, this.deliver = WW => {
          const iW = this.findOrder(WW);
          iW.ct && iW.ready && !this.getView().delivering.includes(WW) && this.queue({
            action: "deliver",
            slot: WW
          })
        }, this.sell = WW => {
          this.getView().sellLines.some((iW => {
            let [OW, mW] = iW;
            return mW > 0 && (null === WW || WW === OW)
          })) && this.queue({
            action: "sell",
            item: WW
          })
        }, this.onAnswersTimedOut = () => {
          this.getView().open && this.set(this.getBoardView())
        }, this.commands = new QW(NW, (WW => {
          mW(function(WW) {
            return "sell" === WW.action ? null === WW.item ? `${EW}sell` : `${EW}sell ${WW.item}` : `${EW}${WW.action} ${WW.slot}`
          }(WW))
        }), this.onAnswersTimedOut)
      }
      getTracker() {
        return this.tracker
      }
      yZ(WW) {
        if ("open" === WW[0]) {
          const OW = WW[5],
            mW = OW ? this.commands.takeAnswer() : null,
            EW = !this.getView().open;
          if (OW && EW) return;
          if (EW) this.onReopened(WW);
          else if (null !== mW) {
            var iW;
            this.line = null !== (iW = function(WW, iW, OW) {
              if ("deliver" === WW.action) {
                const [, mW] = iW[1][WW.slot];
                return OW[1][WW.slot][5] ? null : {
                  kind: "delivered",
                  titleKey: mW
                }
              }
              if ("sell" !== WW.action) return null;
              let mW = 0;
              return iW[3].forEach(((iW, EW) => {
                let [NW, PW] = iW;
                null !== WW.item && WW.item !== NW || (mW += Math.max(0, PW - OW[3][EW][1]))
              })), mW > 0 ? {
                kind: "bought",
                count: mW
              } : null
            }(mW, this.board, WW)) && void 0 !== iW ? iW : this.line
          }
          this.board = WW, this.show(this.getBoardView())
        } else "close" === WW[0] ? this.close() : (this.tracker = null === WW[1] ? null : di(WW[1]), this.publishTracker(this.tracker))
      }
      dropPresses() {
        this.commands.clear(), this.board = null
      }
      findOrder(WW) {
        return this.getView().orders.find((iW => iW.slot === WW))
      }
      onReopened(WW) {
        let [, iW, , OW] = WW;
        const mW = iW.map(di).find((WW => WW.ct && WW.ready)),
          EW = OW.findIndex((WW => {
            let [, iW] = WW;
            return iW > 0
          }));
        void 0 === mW && -1 !== EW || (this.tab = "orders"), void 0 !== mW && (this.selectedSlot = mW.slot), -1 === EW || this.selectedWood < OW.length && OW[this.selectedWood][1] > 0 || (this.selectedWood = EW), this.line = ui
      }
      getBoardView() {
        const [, WW, iW, OW, mW] = this.board;
        let EW = {
          open: !0,
          orders: WW.map(di),
          tracked: iW,
          sellLines: OW,
          level: mW,
          delivering: [],
          tab: this.tab,
          selectedSlot: this.selectedSlot,
          selectedWood: this.selectedWood,
          line: this.line
        };
        for (const NW of this.commands.getPending()) EW = ei(EW, NW);
        return EW
      }
      queue(WW) {
        this.commands.push(WW), this.set(this.getBoardView())
      }
    }
    var Vi = OW(1434),
      fi = OW(2075);

    function Ci(WW) {
      let {
        amount: iW,
        item: OW = qW,
        BL: mW,
        inTile: EW = !1,
        iconRef: NW
      } = WW;
      return (0, JW.jsx)(Vi.f, {
        delayShow: 200,
        hoverOnly: EW,
        placement: "top",
        tooltipClassName: "GreenvilleChipTooltipBox",
        tooltipInner: (0, JW.jsx)(Xi, {
          item: OW,
          amount: iW,
          BL: mW
        }),
        children: (0, JW.jsxs)("span", {
          className: kW()("GreenvilleBoardChip", {
            Short: void 0 !== mW && mW < iW
          }),
          children: [(0, JW.jsx)("span", {
            ref: NW,
            className: "GreenvilleBoardChipIcon",
            children: (0, JW.jsx)(xi, {
              item: OW
            })
          }), iW.toLocaleString()]
        })
      })
    }

    function Xi(WW) {
      let {
        item: iW,
        amount: OW,
        BL: mW
      } = WW;
      const {
        t: EW
      } = (0, yW.B)(), NW = (0, fi.f)("itemInfo", (WW => WW[iW]));
      return (0, JW.jsxs)("div", {
        className: "GreenvilleChipTooltip",
        children: [(0, JW.jsxs)("div", {
          className: "GreenvilleChipTooltipHeader",
          children: [(0, JW.jsx)("span", {
            className: "GreenvilleChipTooltipIcon",
            children: (0, JW.jsx)(xi, {
              item: iW
            })
          }), (0, JW.jsx)(Zi, {
            item: iW,
            className: "GreenvilleChipTooltipName"
          })]
        }), void 0 !== (null === NW || void 0 === NW ? void 0 : NW.description) && (0, JW.jsx)(wi.d, {
          text: NW.description,
          className: "GreenvilleChipTooltipDescription"
        }), void 0 !== mW && (0, JW.jsxs)("div", {
          className: kW()("GreenvilleChipTooltipHeld", {
            Short: mW < OW
          }),
          children: [(0, JW.jsx)("span", {
            className: "GreenvilleChipTooltipLabel",
            children: EW("greenvilleGame:boardYouHave")
          }), (0, JW.jsxs)("span", {
            className: "GreenvilleChipTooltipCount",
            children: [(0, JW.jsx)("span", {
              className: "GreenvilleChipTooltipHeldAmount",
              children: mW.toLocaleString()
            }), ` / ${OW.toLocaleString()}`]
          }), (0, JW.jsx)("span", {
            className: "GreenvilleChipTooltipMeter",
            children: (0, JW.jsx)("span", {
              style: {
                width: (OW > 0 ? 100 * Math.min(1, mW / OW) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function Bi(WW) {
      let {
        children: iW
      } = WW;
      const OW = (0, cW.useRef)(null);
      (0, XW.c)(BW, OW);
      const mW = (0, XW.f)(BW, RW());
      return (0, JW.jsxs)("div", {
        className: "GreenvilleBoardWallet",
        children: [iW, (0, JW.jsx)(Ci, {
          amount: mW,
          iconRef: OW
        })]
      })
    }

    function qi(WW, iW, OW) {
      const mW = (0, cW.useRef)({
          slot: WW,
          ct: iW
        }),
        EW = (0, cW.useRef)(-1 / 0);
      return (0, cW.useLayoutEffect)((() => {
        mW.current.slot === WW && mW.current.ct && !iW && (EW.current = performance.now()), mW.current = {
          slot: WW,
          ct: iW
        }
      }), [WW, iW]), () => {
        performance.now() - EW.current >= 500 && OW(WW)
      }
    }
    const Ri = {
      New: "lumberBoardStateNew",
      Accepted: "lumberBoardStateAccepted",
      Tracking: "lumberBoardTracking",
      Ready: "lumberBoardStateReady"
    };

    function Gi(WW, iW) {
      return WW.ct ? WW.ready ? "Ready" : WW.slot === iW ? "Tracking" : "Accepted" : "New"
    }

    function Ii(WW) {
      let {
        state: iW
      } = WW;
      const {
        t: OW
      } = (0, yW.B)();
      return (0, JW.jsx)("span", {
        className: kW()("GreenvilleBoardBadge GreenvilleLumberState", iW, {
          Muted: "Accepted" === iW
        }),
        children: OW(`greenvilleGame:${Ri[iW]}`)
      })
    }

    function ai(WW) {
      let {
        order: iW
      } = WW;
      return (0, JW.jsx)("span", {
        className: "GreenvilleLumberNeeds",
        children: iW.items.map((WW => {
          let [iW, OW, mW] = WW;
          const EW = mW >= OW;
          return (0, JW.jsxs)("span", {
            className: kW()("GreenvilleLumberNeed", {
              Met: EW
            }),
            children: [(0, JW.jsx)("span", {
              className: "GreenvilleLumberNeedIcon",
              children: (0, JW.jsx)(xi, {
                item: iW
              })
            }), (0, JW.jsx)(Zi, {
              item: iW,
              className: "GreenvilleLumberNeedName"
            }), (0, JW.jsxs)("span", {
              className: "GreenvilleLumberNeedCount",
              children: [Math.min(mW, OW).toLocaleString(), "/", OW.toLocaleString()]
            }), (0, JW.jsx)("span", {
              className: "GreenvilleLumberNeedTick",
              "aria-hidden": "true",
              children: EW && "\u2713"
            })]
          }, iW)
        }))
      })
    }

    function ri(WW) {
      let {
        order: iW,
        inTile: OW = !1
      } = WW;
      const {
        t: mW
      } = (0, yW.B)();
      return (0, JW.jsxs)("span", {
        className: "GreenvilleLumberReward",
        children: [(0, JW.jsx)(Ci, {
          amount: iW.gold,
          inTile: OW
        }), (0, JW.jsx)("span", {
          className: "GreenvilleLumberExp",
          children: mW("greenvilleGame:boardExpGain", {
            exp: iW.exp
          })
        })]
      })
    }

    function zi(WW) {
      let {
        view: iW,
        order: OW,
        controller: mW
      } = WW;
      const {
        t: EW
      } = (0, yW.B)(), {
        slot: NW,
        items: PW,
        ct: LW,
        ready: cW
      } = OW, wW = qi(NW, LW, mW.accept), tW = PW.reduce(((WW, iW) => {
        let [, OW, mW] = iW;
        return WW + Math.max(0, OW - mW)
      }), 0);
      return (0, JW.jsxs)("div", {
        className: "GreenvilleBoardActions",
        children: [!LW && (0, JW.jsx)(Pi.f, {
          onClick: wW,
          children: EW("greenvilleGame:lumberBoardAccept")
        }), LW && (0, JW.jsx)(Pi.n, {
          disabled: !cW,
          loading: iW.delivering.includes(NW),
          onClick: () => {
            mW.deliver(NW)
          },
          children: EW("greenvilleGame:lumberBoardDeliver")
        }), LW && !cW && (0, JW.jsx)("span", {
          className: "GreenvilleBoardHint",
          children: EW("greenvilleGame:lumberBoardDeliverMissing", {
            count: tW
          })
        }), LW && NW !== iW.tracked && (0, JW.jsx)(Pi.Z, {
          onClick: () => {
            mW.track(NW)
          },
          children: EW("greenvilleGame:lumberBoardTrack")
        })]
      })
    }

    function Fi(WW) {
      let {
        view: iW,
        controller: OW
      } = WW;
      const {
        t: mW
      } = (0, yW.B)(), EW = iW.orders[iW.selectedSlot], NW = Gi(EW, iW.tracked), PW = EW.ct && EW.slot === iW.tracked;
      return (0, JW.jsxs)(Ui, {
        icon: (0, JW.jsx)(xi, {
          item: EW.items[0][0]
        }),
        name: mW(`greenvilleGame:${EW.titleKey}`),
        badges: (0, JW.jsxs)(JW.Fragment, {
          children: [(0, JW.jsx)(Ii, {
            state: NW
          }), PW && "Ready" === NW && (0, JW.jsx)(Ii, {
            state: "Tracking"
          })]
        }),
        children: [(0, JW.jsx)(ai, {
          order: EW
        }), (0, JW.jsx)("dl", {
          className: "GreenvilleBoardFacts",
          children: (0, JW.jsxs)("div", {
            children: [(0, JW.jsx)("dt", {
              children: mW("greenvilleGame:lumberBoardReward")
            }), (0, JW.jsx)("dd", {
              children: (0, JW.jsx)(ri, {
                order: EW
              })
            })]
          })
        }), (0, JW.jsx)(zi, {
          view: iW,
          order: EW,
          controller: OW
        })]
      })
    }

    function Qi(WW) {
      let {
        view: iW,
        controller: OW
      } = WW;
      const {
        t: mW
      } = (0, yW.B)();
      return (0, JW.jsxs)(JW.Fragment, {
        children: [(0, JW.jsx)(bi, {
          className: "GreenvilleLumberTickets",
          roomy: !0,
          children: iW.orders.map((WW => {
            const EW = Gi(WW, iW.tracked);
            return (0, JW.jsxs)(ji, {
              icon: (0, JW.jsx)(xi, {
                item: WW.items[0][0]
              }),
              name: mW(`greenvilleGame:${WW.titleKey}`),
              selected: WW.slot === iW.selectedSlot,
              className: kW()("GreenvilleLumberTicket", EW),
              onSelect: () => {
                OW.selectOrder(WW.slot)
              },
              children: [(0, JW.jsx)(Ii, {
                state: EW
              }), (0, JW.jsx)(ai, {
                order: WW
              }), (0, JW.jsx)(ri, {
                order: WW,
                inTile: !0
              })]
            }, WW.slot)
          }))
        }), (0, JW.jsx)(Fi, {
          view: iW,
          controller: OW
        })]
      })
    }

    function WO(WW) {
      let {
        item: iW
      } = WW;
      return (0, JW.jsx)("span", {
        className: "GreenvilleLumberLogEnd",
        children: (0, JW.jsx)(xi, {
          item: iW
        })
      })
    }

    function iO(WW) {
      let {
        view: iW,
        controller: OW
      } = WW;
      const {
        t: mW
      } = (0, yW.B)(), [EW, NW, PW] = iW.sellLines[iW.selectedWood], LW = function(WW, iW) {
        let OW = 0,
          mW = 0;
        for (const EW of WW.orders)
          if (EW.ct)
            for (const [WW, NW, PW] of EW.items) WW === iW && (OW += NW, mW = PW);
        return Math.min(OW, mW)
      }(iW, EW), cW = iW.sellLines.some((WW => {
        let [, iW] = WW;
        return iW > 0
      }));
      return (0, JW.jsxs)(Ui, {
        icon: (0, JW.jsx)(WO, {
          item: EW
        }),
        name: (0, JW.jsx)(Zi, {
          item: EW
        }),
        badges: NW > 0 && (0, JW.jsx)("span", {
          className: "GreenvilleBoardBadge",
          children: mW("greenvilleGame:lumberBoardSellHeld", {
            count: NW
          })
        }),
        children: [(0, JW.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, JW.jsxs)("div", {
            children: [(0, JW.jsx)("dt", {
              children: mW("greenvilleGame:boardYouHave")
            }), (0, JW.jsx)("dd", {
              children: (LW + NW).toLocaleString()
            })]
          }), (0, JW.jsxs)("div", {
            children: [(0, JW.jsx)("dt", {
              children: mW("greenvilleGame:lumberBoardSellKept")
            }), (0, JW.jsx)("dd", {
              children: LW.toLocaleString()
            })]
          }), (0, JW.jsxs)("div", {
            children: [(0, JW.jsx)("dt", {
              children: mW("greenvilleGame:lumberBoardSellSpare")
            }), (0, JW.jsx)("dd", {
              className: kW()("GreenvilleLumberSpare", {
                None: 0 === NW
              }),
              children: NW.toLocaleString()
            })]
          }), (0, JW.jsxs)("div", {
            children: [(0, JW.jsx)("dt", {
              children: mW("greenvilleGame:lumberBoardSellEach")
            }), (0, JW.jsx)("dd", {
              children: (0, JW.jsx)(Ci, {
                amount: PW
              })
            })]
          })]
        }), (0, JW.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [(0, JW.jsxs)(Pi.n, {
            disabled: 0 === NW,
            onClick: () => {
              OW.sell(EW)
            },
            children: [NW > 0 && mW("greenvilleGame:lumberBoardSell", {
              count: NW
            }), 0 === NW && mW(LW > 0 ? "greenvilleGame:lumberBoardSellKeptAll" : "greenvilleGame:lumberBoardSellNone")]
          }), (0, JW.jsx)(Pi.f, {
            disabled: !cW,
            onClick: () => {
              OW.sell(null)
            },
            children: mW("greenvilleGame:lumberBoardSellAll")
          })]
        })]
      })
    }

    function OO(WW) {
      let {
        view: iW,
        controller: OW
      } = WW;
      const {
        t: mW
      } = (0, yW.B)();
      return (0, JW.jsxs)(JW.Fragment, {
        children: [(0, JW.jsx)(bi, {
          className: "GreenvilleLumberWoodPile",
          children: iW.sellLines.map(((WW, EW) => {
            let [NW, PW, LW] = WW;
            return (0, JW.jsxs)(ji, {
              icon: (0, JW.jsx)(WO, {
                item: NW
              }),
              name: (0, JW.jsx)(Zi, {
                item: NW
              }),
              selected: EW === iW.selectedWood,
              className: kW()("GreenvilleLumberWood", {
                Spare: PW > 0
              }),
              onSelect: () => {
                OW.selectWood(EW)
              },
              children: [PW > 0 && (0, JW.jsx)("span", {
                className: "GreenvilleBoardBadge",
                children: mW("greenvilleGame:lumberBoardSellHeld", {
                  count: PW
                })
              }), (0, JW.jsx)(Ci, {
                amount: LW,
                inTile: !0
              })]
            }, NW)
          }))
        }), (0, JW.jsx)(iO, {
          view: iW,
          controller: OW
        })]
      })
    }

    function mO(WW) {
      let {
        controller: iW
      } = WW;
      const OW = (0, SW.g)(vi, iW.getView()),
        {
          t: mW
        } = (0, yW.B)(),
        EW = function(WW) {
          const {
            t: iW
          } = (0, yW.B)();
          return "delivered" === WW.kind ? iW("greenvilleGame:lumberTimbertoothThanks", {
            order: iW(`greenvilleGame:${WW.titleKey}`)
          }) : "bought" === WW.kind ? iW("greenvilleGame:lumberTimbertoothBought", {
            count: WW.count
          }) : iW("greenvilleGame:lumberBoardIntro")
        }(OW.line);
      if (0 === OW.orders.length) return null;
      const NW = OW.orders.filter((WW => WW.ct && WW.ready)).length,
        PW = OW.sellLines.reduce(((WW, iW) => {
          let [, OW] = iW;
          return WW + OW
        }), 0);
      return (0, JW.jsxs)(li, {
        open: OW.open,
        onDismiss: iW.dismiss,
        title: mW("greenvilleGame:lumberBoardTitle"),
        className: "GreenvilleLumberBoard",
        headerExtra: (0, JW.jsx)(Bi, {
          children: (0, JW.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: mW("greenvilleGame:lumberBoardLevel", {
              level: OW.level
            })
          })
        }),
        tabs: (0, JW.jsx)(Ai, {
          tabs: [{
            id: "orders",
            label: mW("greenvilleGame:lumberBoardOrders"),
            badge: NW > 0 && (0, JW.jsx)("span", {
              className: "GreenvilleBoardBadge Ready",
              children: mW("greenvilleGame:lumberBoardReadyCount", {
                count: NW
              })
            })
          }, {
            id: "sell",
            label: mW("greenvilleGame:lumberBoardSellHeading"),
            badge: PW > 0 && (0, JW.jsx)("span", {
              className: "GreenvilleBoardBadge",
              children: mW("greenvilleGame:lumberBoardSellHeld", {
                count: PW
              })
            })
          }],
          selected: OW.tab,
          onSelect: iW.selectTab
        }),
        status: {
          speaker: mW("greenvilleGame:lumberTimbertoothName"),
          line: EW
        },
        children: ["orders" === OW.tab && (0, JW.jsx)(Qi, {
          view: OW,
          controller: iW
        }), "sell" === OW.tab && (0, JW.jsx)(OO, {
          view: OW,
          controller: iW
        })]
      })
    }

    function EO(WW) {
      let {
        controller: iW
      } = WW;
      (0, SW.g)(gi, null);
      const {
        t: OW
      } = (0, yW.B)(), mW = iW.getTracker();
      return null === mW ? null : (0, JW.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, JW.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: OW(`greenvilleGame:${mW.titleKey}`)
        }), (0, JW.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: mW.items.map((WW => {
            let [iW, OW, mW] = WW;
            return (0, JW.jsxs)("li", {
              className: kW()("GreenvilleTrackerRow", {
                Done: mW >= OW
              }),
              children: [(0, JW.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, JW.jsx)(KW.b, {
                  itemName: iW,
                  amount: 0
                })
              }), (0, JW.jsx)(Zi, {
                item: iW,
                className: "GreenvilleTrackerLabel"
              }), (0, JW.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [Math.min(mW, OW), "/", OW]
              })]
            }, iW)
          }))
        }), mW.ready && (0, JW.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: OW("greenvilleGame:lumberTrackerReady")
        })]
      })
    }
    const NO = "greenvilleOreBuyerView",
      PO = {
        open: !1,
        lines: [],
        selected: 0,
        level: 1
      };
    class LO extends ii {
      constructor(WW, iW, OW, mW) {
        super(PO, WW, iW), this.sales = void 0, this.serverLines = [], this.select = WW => {
          this.set({
            ...this.getView(),
            selected: WW
          })
        }, this.sell = WW => {
          this.getView().lines.some((iW => {
            let [OW, , , , mW] = iW;
            return mW > 0 && (null === WW || WW === OW)
          })) && (this.sales.push(WW), this.set({
            ...this.getView(),
            lines: this.getLines()
          }))
        }, this.onAnswersTimedOut = () => {
          const WW = this.getView();
          WW.open && this.set({
            ...WW,
            lines: this.getLines()
          })
        }, this.sales = new QW(mW, OW, this.onAnswersTimedOut)
      }
      yZ(WW) {
        if ("close" !== WW[0]) {
          const [, iW, OW] = WW, mW = "open" === WW[0] && WW[3];
          mW && this.sales.takeAnswer();
          const EW = this.getView();
          if ((mW || "refresh" === WW[0]) && !EW.open) return;
          this.serverLines = iW;
          const NW = iW.findIndex((WW => WW[4] > 0));
          this.show({
            open: !0,
            lines: this.getLines(),
            selected: EW.open ? EW.selected : Math.max(0, NW),
            level: OW
          })
        } else this.close()
      }
      dropPresses() {
        this.sales.clear()
      }
      getLines() {
        const WW = this.sales.getPending();
        return this.serverLines.map((iW => {
          const [OW, mW, EW, NW, , PW] = iW;
          return WW.some((WW => null === WW || WW === OW)) ? [OW, mW, EW, NW, 0, PW] : iW
        }))
      }
    }

    function cO(WW) {
      let {
        line: iW,
        level: OW
      } = WW;
      const {
        t: mW
      } = (0, yW.B)(), [, , , EW, NW, PW] = iW;
      return (0, JW.jsxs)(JW.Fragment, {
        children: [NW > 0 && (0, JW.jsx)("span", {
          className: "GreenvilleBoardBadge",
          children: mW("greenvilleGame:oreBuyerHeld", {
            count: NW
          })
        }), EW > OW && (0, JW.jsxs)("span", {
          className: "GreenvilleBoardBadge Muted",
          children: [(0, JW.jsx)(Ni.c, {
            name: "lock"
          }), mW("greenvilleGame:boardLevelBadge", {
            level: EW
          })]
        }), EW <= OW && PW && (0, JW.jsx)("span", {
          className: "GreenvilleBoardBadge GreenvilleOreRare",
          children: mW("greenvilleGame:oreBuyerRare")
        })]
      })
    }

    function wO(WW) {
      let {
        line: iW
      } = WW;
      return (0, JW.jsx)("span", {
        className: "GreenvilleOreSample",
        children: (0, JW.jsx)(xi, {
          item: iW[0]
        })
      })
    }

    function tO(WW) {
      let {
        view: iW,
        controller: OW
      } = WW;
      const {
        t: mW
      } = (0, yW.B)(), EW = iW.lines[iW.selected], [NW, PW, LW, cW, wW, tW] = EW, ZW = cW > iW.level, xW = iW.lines.some((WW => WW[4] > 0));
      return (0, JW.jsxs)(Ui, {
        icon: (0, JW.jsx)(wO, {
          line: EW
        }),
        name: (0, JW.jsx)(Zi, {
          item: NW
        }),
        badges: (0, JW.jsx)(cO, {
          line: EW,
          level: iW.level
        }),
        children: [(0, JW.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, JW.jsxs)("div", {
            children: [(0, JW.jsx)("dt", {
              children: mW("greenvilleGame:boardYouHave")
            }), (0, JW.jsx)("dd", {
              className: kW()("GreenvilleOreHeld", {
                None: 0 === wW
              }),
              children: wW.toLocaleString()
            })]
          }), (0, JW.jsxs)("div", {
            children: [(0, JW.jsx)("dt", {
              children: mW("greenvilleGame:oreBuyerPriceEach")
            }), (0, JW.jsx)("dd", {
              children: (0, JW.jsx)(Ci, {
                amount: PW
              })
            })]
          }), (0, JW.jsxs)("div", {
            children: [(0, JW.jsx)("dt", {
              children: mW("greenvilleGame:oreBuyerExpEach")
            }), (0, JW.jsxs)("dd", {
              className: "GreenvilleOreExp",
              children: ["+", LW]
            })]
          })]
        }), tW && (0, JW.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: mW("greenvilleGame:oreBuyerLegendary")
        }), ZW && (0, JW.jsxs)(JW.Fragment, {
          children: [(0, JW.jsx)("p", {
            className: "GreenvilleBoardHint",
            children: mW("greenvilleGame:oreBuyerLocked", {
              level: cW
            })
          }), (0, JW.jsx)("p", {
            className: "GreenvilleBoardDescription",
            children: mW("greenvilleGame:oreBuyerTip")
          })]
        }), (0, JW.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [(0, JW.jsxs)(Pi.n, {
            disabled: 0 === wW,
            onClick: () => {
              OW.sell(NW)
            },
            children: [wW > 0 && mW("greenvilleGame:oreBuyerSell", {
              count: wW
            }), 0 === wW && mW("greenvilleGame:oreBuyerSellNone")]
          }), (0, JW.jsx)(Pi.f, {
            disabled: !xW,
            onClick: () => {
              OW.sell(null)
            },
            children: mW("greenvilleGame:oreBuyerSellAll")
          })]
        })]
      })
    }

    function ZO(WW) {
      let {
        controller: iW
      } = WW;
      const OW = (0, SW.g)(NO, iW.getView()),
        {
          t: mW
        } = (0, yW.B)();
      return 0 === OW.lines.length ? null : (0, JW.jsxs)(li, {
        open: OW.open,
        onDismiss: iW.dismiss,
        title: mW("greenvilleGame:oreBuyerTitle"),
        className: "GreenvilleOreBuyerBoard",
        headerExtra: (0, JW.jsx)(Bi, {
          children: (0, JW.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: mW("greenvilleGame:oreBuyerLevel", {
              level: OW.level
            })
          })
        }),
        status: {
          speaker: mW("greenvilleGame:oreBuyerName"),
          line: mW("greenvilleGame:oreBuyerGreet")
        },
        children: [(0, JW.jsx)(bi, {
          roomy: !0,
          children: OW.lines.map(((WW, EW) => {
            const [NW, PW, LW, cW, wW, tW] = WW;
            return (0, JW.jsxs)(ji, {
              icon: (0, JW.jsx)(wO, {
                line: WW
              }),
              name: (0, JW.jsx)(Zi, {
                item: NW
              }),
              selected: EW === OW.selected,
              locked: cW > OW.level && 0 === wW,
              className: kW()("GreenvilleOreTile", {
                Legendary: tW
              }),
              onSelect: () => {
                iW.select(EW)
              },
              children: [(0, JW.jsx)(cO, {
                line: WW,
                level: OW.level
              }), (0, JW.jsxs)("span", {
                className: "GreenvilleOrePrice",
                children: [(0, JW.jsx)(Ci, {
                  amount: PW,
                  inTile: !0
                }), (0, JW.jsx)("span", {
                  className: "GreenvilleOreExp",
                  children: mW("greenvilleGame:boardExpGain", {
                    exp: LW
                  })
                })]
              })]
            }, NW)
          }))
        }), (0, JW.jsx)(tO, {
          view: OW,
          controller: iW
        })]
      })
    }
    const xO = {
      kind: "greet"
    };

    function lO(WW) {
      return WW.every((WW => {
        let [, , iW, OW] = WW;
        return OW >= iW
      }))
    }

    function AO(WW) {
      let [iW, OW, mW, EW, NW, PW] = WW;
      return {
        slot: iW,
        nameKey: OW,
        needs: mW,
        exp: EW,
        gold: NW,
        ct: PW,
        ready: lO(mW)
      }
    }

    function bO(WW, iW) {
      let [, , OW, mW] = WW;
      return iW ? OW : OW - mW
    }

    function jO(WW, iW) {
      let [OW, mW] = WW;
      return OW === iW.item && null !== mW === iW.golden
    }

    function UO(WW, iW) {
      return (iW.golden ? WW.goldenLines : WW.sellLines).find((WW => jO(WW, iW)))
    }

    function kO(WW, iW) {
      return "sell" === iW.action ? KO(function(WW, iW, OW) {
        const mW = WW => {
          if (null !== iW && !jO(WW, iW)) return WW;
          const [mW, EW, NW, PW, LW] = WW;
          return [mW, EW, NW - bO(WW, OW), OW ? 0 : PW, LW]
        };
        return {
          ...WW,
          sellLines: WW.sellLines.map(mW),
          goldenLines: sO(WW.goldenLines.map(mW))
        }
      }(WW, iW.kind, iW.all)) : "accept" === iW.action ? function(WW, iW) {
        var OW;
        const {
          needs: mW
        } = WW.orders[iW], EW = WW => {
          const [iW, OW, EW, NW, PW] = WW, LW = MO(mW, WW);
          return LW ? [iW, OW, EW, Math.min(EW, NW + LW[2]), PW] : WW
        };
        return {
          ...WW,
          tracked: null !== (OW = WW.tracked) && void 0 !== OW ? OW : iW,
          orders: WW.orders.map((WW => WW.slot === iW ? {
            ...WW,
            ct: !0
          } : WW)),
          sellLines: WW.sellLines.map(EW),
          goldenLines: WW.goldenLines.map(EW)
        }
      }(WW, iW.slot) : "track" === iW.action ? {
        ...WW,
        tracked: iW.slot
      } : KO(function(WW, iW) {
        const {
          needs: OW
        } = WW.orders[iW], mW = WW => {
          const [iW, mW, EW, NW, PW] = WW, LW = MO(OW, WW);
          return LW ? [iW, mW, EW - LW[2], NW - LW[2], PW] : WW
        };
        return {
          ...WW,
          sellLines: WW.sellLines.map(mW),
          goldenLines: sO(WW.goldenLines.map(mW)),
          delivering: [...WW.delivering, iW]
        }
      }(WW, iW.slot))
    }

    function sO(WW) {
      return WW.filter((WW => {
        let [, , iW] = WW;
        return iW > 0
      }))
    }

    function MO(WW, iW) {
      let [OW, mW] = iW;
      return WW.find((WW => {
        let [iW, EW] = WW;
        return iW === OW && EW === mW
      }))
    }

    function KO(WW) {
      const iW = (iW, OW) => {
          const mW = (null === OW ? WW.sellLines : WW.goldenLines).find((WW => {
            let [OW] = WW;
            return OW === iW
          }));
          return mW ? mW[2] : 0
        },
        OW = WW.orders.map((OW => {
          if (WW.delivering.includes(OW.slot)) return OW;
          const mW = OW.needs.map((WW => {
            let [OW, mW, EW] = WW;
            return [OW, mW, EW, iW(OW, mW)]
          }));
          return {
            ...OW,
            needs: mW,
            ready: lO(mW)
          }
        }));
      return {
        ...WW,
        orders: OW
      }
    }

    function SO(WW) {
      let [, , , iW, OW] = WW;
      return [...iW, ...OW].reduce(((WW, iW) => {
        let [, , OW] = iW;
        return WW + OW
      }), 0)
    }
    const YO = "greenvilleFarmBoardView",
      yO = "greenvilleFarmTrackerView",
      TO = {
        open: !1,
        orders: [],
        tracked: null,
        sellLines: [],
        goldenLines: [],
        level: 1,
        delivering: [],
        tab: "orders",
        selectedOrder: 0,
        selectedProduce: null,
        line: xO
      };
    class JO extends ii {
      constructor(WW, iW, OW, mW, EW) {
        super(TO, WW, OW), this.publishTracker = iW, this.board = null, this.commands = void 0, this.tracker = null, this.tab = "orders", this.selectedOrder = 0, this.selectedProduce = null, this.line = xO, this.selectTab = WW => {
          this.tab = WW, this.set(this.getBoardView())
        }, this.selectOrder = WW => {
          this.selectedOrder = WW, this.set(this.getBoardView())
        }, this.selectProduce = WW => {
          this.selectedProduce = WW, this.set(this.getBoardView())
        }, this.accept = WW => {
          this.getView().orders[WW].ct || this.queue({
            action: "accept",
            slot: WW
          })
        }, this.track = WW => {
          const iW = this.getView();
          iW.tracked !== WW && iW.orders[WW].ct && this.queue({
            action: "track",
            slot: WW
          })
        }, this.deliver = WW => {
          const iW = this.getView(),
            OW = iW.orders[WW];
          OW.ct && OW.ready && !iW.delivering.includes(WW) && this.queue({
            action: "deliver",
            slot: WW
          })
        }, this.sell = (WW, iW) => {
          this.queueSale({
            item: WW,
            golden: iW
          }, !1)
        }, this.sellSpare = () => {
          this.queueSale(null, !1)
        }, this.sellAll = () => {
          this.queueSale(null, !0)
        }, this.onAnswersTimedOut = () => {
          this.getView().open && this.set(this.settleView())
        }, this.commands = new QW(EW, (WW => {
          mW(function(WW) {
            return "sell" !== WW.action ? `${NW}${WW.action} ${WW.slot}` : WW.all ? `${NW}sellAll` : null === WW.kind ? `${NW}sell` : `${NW}${WW.kind.golden?"sellGolden":"sell"} ${WW.kind.item}`
          }(WW))
        }), this.onAnswersTimedOut)
      }
      getTracker() {
        return this.tracker
      }
      yZ(WW) {
        if ("open" === WW[0]) {
          const OW = WW[7],
            mW = OW ? this.commands.takeAnswer() : null,
            EW = !this.getView().open;
          if (OW && EW) return;
          const NW = this.board;
          if (this.board = WW, EW) this.onReopened();
          else if (null !== mW) {
            var iW;
            this.line = null !== (iW = function(WW, iW, OW) {
              const mW = OW[6] - iW[6];
              if (mW <= 0) return null;
              if ("deliver" === WW.action) return {
                kind: "delivered",
                nameKey: iW[1][WW.slot][1],
                gold: mW
              };
              const EW = SO(iW) - SO(OW);
              return "sell" === WW.action && EW > 0 ? {
                kind: "sold",
                count: EW,
                gold: mW
              } : null
            }(mW, NW, WW)) && void 0 !== iW ? iW : this.line
          }
          this.show(this.settleView())
        } else "close" === WW[0] ? this.close() : (this.tracker = null === WW[1] ? null : AO(WW[1]), this.publishTracker(this.tracker))
      }
      dropPresses() {
        this.commands.clear(), this.board = null
      }
      onReopened() {
        this.line = xO;
        const WW = this.toView(this.board).orders.find((WW => WW.ct && WW.ready));
        WW && (this.tab = "orders", this.selectedOrder = WW.slot)
      }
      queueSale(WW, iW) {
        const {
          sellLines: OW,
          goldenLines: mW
        } = this.getView();
        [...OW, ...mW].some((OW => bO(OW, iW) > 0 && (null === WW || jO(OW, WW)))) && this.queue({
          action: "sell",
          kind: WW,
          all: iW
        })
      }
      toView(WW) {
        let [, iW, OW, mW, EW, NW] = WW;
        return {
          open: !0,
          orders: iW.map(AO),
          tracked: OW,
          sellLines: mW,
          goldenLines: EW,
          level: NW,
          delivering: [],
          tab: this.tab,
          selectedOrder: this.selectedOrder,
          selectedProduce: this.selectedProduce,
          line: this.line
        }
      }
      getBoardView() {
        let WW = this.toView(this.board);
        for (const iW of this.commands.getPending()) WW = kO(WW, iW);
        return {
          ...WW,
          selectedProduce: this.pickProduce(WW)
        }
      }
      settleView() {
        const WW = this.getBoardView();
        return this.commands.sZ() && (this.selectedProduce = WW.selectedProduce), WW
      }
      pickProduce(WW) {
        var iW, OW;
        const mW = this.selectedProduce;
        if (mW && UO(WW, mW)) return mW;
        if (mW) return {
          item: mW.item,
          golden: !1
        };
        const [EW, NW] = null !== (iW = null !== (OW = WW.goldenLines[0]) && void 0 !== OW ? OW : WW.sellLines.find((WW => {
          let [, , iW] = WW;
          return iW > 0
        }))) && void 0 !== iW ? iW : WW.sellLines[0];
        return {
          item: EW,
          golden: null !== NW
        }
      }
      queue(WW) {
        this.commands.push(WW), this.set(this.getBoardView())
      }
    }
    var hO = OW(1414);

    function HO() {
      const WW = (0, cW.useRef)(null);
      return (0, hO.b)(WW), (0, JW.jsx)("span", {
        ref: WW,
        className: "GreenvilleFarmSparkle",
        "aria-hidden": "true"
      })
    }

    function nO(WW) {
      let {
        item: iW,
        golden: OW
      } = WW;
      return (0, JW.jsx)("span", {
        className: kW()("GreenvilleFarmProduce", {
          Golden: OW
        }),
        children: (0, JW.jsx)(xi, {
          item: iW
        })
      })
    }

    function uO(WW) {
      let {
        item: iW,
        goldenNameKey: OW
      } = WW;
      const {
        t: mW
      } = (0, yW.B)();
      return null !== OW ? (0, JW.jsx)("span", {
        className: "GreenvilleFarmGoldenName",
        children: mW(OW)
      }) : (0, JW.jsx)(Zi, {
        item: iW
      })
    }
    const oO = {
      New: "greenvilleGame:farmBoardNew",
      Accepted: "greenvilleGame:farmBoardAccepted",
      Tracking: "greenvilleGame:farmOrderTracking",
      Ready: "greenvilleGame:farmBoardReady"
    };

    function dO(WW, iW) {
      return WW.ct ? WW.ready ? "Ready" : iW ? "Tracking" : "Accepted" : "New"
    }

    function eO(WW) {
      return WW.needs.some((WW => {
        let [, iW] = WW;
        return null !== iW
      }))
    }

    function vO(WW) {
      let {
        order: iW
      } = WW;
      const [OW, mW] = iW.needs[0];
      return (0, JW.jsx)(nO, {
        item: OW,
        golden: null !== mW
      })
    }

    function gO(WW) {
      let {
        state: iW
      } = WW;
      const {
        t: OW
      } = (0, yW.B)();
      return (0, JW.jsx)("span", {
        className: kW()("GreenvilleBoardBadge GreenvilleFarmState", iW),
        children: OW(oO[iW])
      })
    }

    function DO(WW) {
      let {
        needs: iW
      } = WW;
      return (0, JW.jsx)("span", {
        className: "GreenvilleFarmNeeds",
        children: iW.map((WW => {
          let [iW, OW, mW, EW] = WW;
          const NW = EW >= mW;
          return (0, JW.jsxs)("span", {
            className: kW()("GreenvilleFarmNeed", {
              Met: NW,
              Golden: null !== OW
            }),
            children: [(0, JW.jsx)("span", {
              className: "GreenvilleFarmNeedIcon",
              children: (0, JW.jsx)(nO, {
                item: iW,
                golden: null !== OW
              })
            }), (0, JW.jsx)("span", {
              className: "GreenvilleFarmNeedName",
              children: (0, JW.jsx)(uO, {
                item: iW,
                goldenNameKey: OW
              })
            }), (0, JW.jsxs)("span", {
              className: "GreenvilleFarmNeedCount",
              children: [NW && "\u2713 ", Math.min(EW, mW), "/", mW]
            })]
          }, `${iW}|${OW}`)
        }))
      })
    }

    function VO(WW) {
      let {
        order: iW,
        inTile: OW = !1
      } = WW;
      const {
        t: mW
      } = (0, yW.B)();
      return (0, JW.jsxs)("span", {
        className: "GreenvilleFarmReward",
        children: [(0, JW.jsx)(Ci, {
          amount: iW.gold,
          inTile: OW
        }), (0, JW.jsx)("span", {
          className: "GreenvilleFarmExp",
          children: mW("greenvilleGame:boardExpGain", {
            exp: iW.exp
          })
        })]
      })
    }

    function pO(WW) {
      let {
        view: iW,
        controller: OW
      } = WW;
      const {
        t: mW
      } = (0, yW.B)(), EW = iW.orders[iW.selectedOrder], {
        slot: NW,
        nameKey: PW,
        needs: LW,
        ct: cW,
        ready: wW
      } = EW, tW = NW === iW.tracked, ZW = qi(NW, cW, OW.accept), xW = LW.reduce(((WW, iW) => {
        let [, , OW, mW] = iW;
        return WW + Math.max(0, OW - mW)
      }), 0);
      return (0, JW.jsxs)(Ui, {
        icon: (0, JW.jsx)(vO, {
          order: EW
        }),
        name: mW(PW),
        badges: (0, JW.jsxs)(JW.Fragment, {
          children: [(0, JW.jsx)(gO, {
            state: dO(EW, tW)
          }), eO(EW) && (0, JW.jsx)("span", {
            className: "GreenvilleBoardBadge GreenvilleFarmGoldenBadge",
            children: mW("greenvilleGame:farmBoardGolden")
          })]
        }),
        children: [(0, JW.jsx)(DO, {
          needs: LW
        }), (0, JW.jsx)("dl", {
          className: "GreenvilleBoardFacts",
          children: (0, JW.jsxs)("div", {
            children: [(0, JW.jsx)("dt", {
              children: mW("greenvilleGame:farmBoardReward")
            }), (0, JW.jsx)("dd", {
              children: (0, JW.jsx)(VO, {
                order: EW
              })
            })]
          })
        }), (0, JW.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [!cW && (0, JW.jsx)(Pi.f, {
            onClick: ZW,
            children: mW("greenvilleGame:farmOrderAccept")
          }), cW && tW && (0, JW.jsxs)("span", {
            className: "GreenvilleFarmTracking",
            children: [(0, JW.jsx)(Ni.c, {
              name: "crosshairs"
            }), mW("greenvilleGame:farmOrderTracking")]
          }), cW && !tW && (0, JW.jsx)(Pi.Z, {
            onClick: () => {
              OW.track(NW)
            },
            children: mW("greenvilleGame:farmOrderTrack")
          }), cW && (0, JW.jsx)(Pi.n, {
            disabled: !wW,
            loading: iW.delivering.includes(NW),
            onClick: () => {
              OW.deliver(NW)
            },
            children: mW("greenvilleGame:farmOrderDeliver")
          }), cW && !wW && (0, JW.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: mW("greenvilleGame:farmBoardMissing", {
              count: xW
            })
          })]
        })]
      })
    }

    function fO(WW) {
      let {
        view: iW,
        controller: OW
      } = WW;
      const {
        t: mW
      } = (0, yW.B)();
      return (0, JW.jsxs)(JW.Fragment, {
        children: [(0, JW.jsx)(bi, {
          roomy: !0,
          children: iW.orders.map((WW => (0, JW.jsxs)(ji, {
            icon: (0, JW.jsx)(vO, {
              order: WW
            }),
            name: mW(WW.nameKey),
            selected: WW.slot === iW.selectedOrder,
            className: kW()("GreenvilleFarmBasket", {
              WantsGolden: eO(WW)
            }),
            onSelect: () => {
              OW.selectOrder(WW.slot)
            },
            children: [(0, JW.jsx)(gO, {
              state: dO(WW, WW.slot === iW.tracked)
            }), (0, JW.jsx)(DO, {
              needs: WW.needs
            }), (0, JW.jsx)(VO, {
              order: WW,
              inTile: !0
            })]
          }, WW.slot)))
        }), (0, JW.jsx)(pO, {
          view: iW,
          controller: OW
        })]
      })
    }

    function CO(WW) {
      let {
        line: iW,
        selected: OW,
        onSelect: mW
      } = WW;
      const [EW, NW, PW, , LW] = iW, cW = null !== NW;
      return (0, JW.jsxs)(ji, {
        icon: (0, JW.jsx)(nO, {
          item: EW,
          golden: cW
        }),
        name: (0, JW.jsx)(uO, {
          item: EW,
          goldenNameKey: NW
        }),
        selected: OW,
        className: kW()("GreenvilleFarmCrate", {
          Golden: cW,
          Empty: 0 === PW
        }),
        onSelect: mW,
        children: [cW && (0, JW.jsx)(HO, {}), PW > 0 && (0, JW.jsxs)("span", {
          className: "GreenvilleBoardBadge GreenvilleFarmHeld",
          children: ["\xd7", PW]
        }), (0, JW.jsx)(Ci, {
          amount: LW,
          inTile: !0
        })]
      })
    }

    function XO(WW) {
      let {
        view: iW,
        controller: OW
      } = WW;
      const {
        t: mW
      } = (0, yW.B)(), EW = [...iW.sellLines, ...iW.goldenLines], NW = EW.some((WW => bO(WW, !1) > 0)), PW = EW.some((WW => bO(WW, !0) > 0));
      return (0, JW.jsxs)("div", {
        className: "GreenvilleFarmSign",
        children: [(0, JW.jsx)("h3", {
          className: "GreenvilleFarmSignBoard",
          children: mW("greenvilleGame:farmBoardPrices")
        }), (0, JW.jsxs)("div", {
          className: "GreenvilleFarmSignActions",
          children: [(0, JW.jsx)(Pi.f, {
            disabled: !NW,
            onClick: OW.sellSpare,
            children: mW("greenvilleGame:farmStallSellSurplus")
          }), (0, JW.jsx)(Pi.O, {
            disabled: !PW,
            onClick: OW.sellAll,
            children: mW("greenvilleGame:farmStallSellAll")
          })]
        })]
      })
    }

    function BO(WW) {
      let {
        line: iW,
        controller: OW
      } = WW;
      const {
        t: mW
      } = (0, yW.B)(), [EW, NW, PW, LW, cW] = iW, wW = null !== NW, tW = bO(iW, !1);
      return (0, JW.jsxs)(Ui, {
        icon: (0, JW.jsx)(nO, {
          item: EW,
          golden: wW
        }),
        name: (0, JW.jsx)(uO, {
          item: EW,
          goldenNameKey: NW
        }),
        badges: wW && (0, JW.jsx)("span", {
          className: "GreenvilleBoardBadge GreenvilleFarmGoldenBadge",
          children: mW("greenvilleGame:farmBoardGolden")
        }),
        children: [wW && (0, JW.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: mW("greenvilleGame:farmBoardGoldenBlurb")
        }), (0, JW.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, JW.jsxs)("div", {
            children: [(0, JW.jsx)("dt", {
              children: mW("greenvilleGame:boardYouHave")
            }), (0, JW.jsx)("dd", {
              children: PW
            })]
          }), LW > 0 && (0, JW.jsxs)("div", {
            children: [(0, JW.jsx)("dt", {
              children: mW("greenvilleGame:farmBoardKept")
            }), (0, JW.jsx)("dd", {
              children: LW
            })]
          }), (0, JW.jsxs)("div", {
            children: [(0, JW.jsx)("dt", {
              children: mW("greenvilleGame:farmBoardSpare")
            }), (0, JW.jsx)("dd", {
              children: tW
            })]
          }), (0, JW.jsxs)("div", {
            children: [(0, JW.jsx)("dt", {
              children: mW("greenvilleGame:farmBoardPriceEach")
            }), (0, JW.jsx)("dd", {
              children: (0, JW.jsx)(Ci, {
                amount: cW
              })
            })]
          })]
        }), (0, JW.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [tW > 0 && (0, JW.jsx)(Pi.n, {
            onClick: () => {
              OW.sell(EW, wW)
            },
            children: mW("greenvilleGame:farmBoardSell", {
              count: tW
            })
          }), 0 === PW && (0, JW.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: mW("greenvilleGame:farmStallNothing")
          }), PW > 0 && 0 === tW && (0, JW.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: mW("greenvilleGame:farmBoardAllKept")
          })]
        })]
      })
    }

    function qO(WW) {
      let {
        view: iW,
        produce: OW,
        controller: mW
      } = WW;
      const {
        t: EW
      } = (0, yW.B)(), NW = WW => {
        const [iW, EW] = WW;
        return (0, JW.jsx)(CO, {
          line: WW,
          selected: jO(WW, OW),
          onSelect: () => {
            mW.selectProduce({
              item: iW,
              golden: null !== EW
            })
          }
        }, `${iW}|${null!==EW}`)
      };
      return (0, JW.jsxs)(JW.Fragment, {
        children: [(0, JW.jsxs)(bi, {
          children: [(0, JW.jsx)(XO, {
            view: iW,
            controller: mW
          }), iW.goldenLines.length > 0 && (0, JW.jsxs)(JW.Fragment, {
            children: [(0, JW.jsx)("h4", {
              className: "GreenvilleFarmSection Golden",
              children: EW("greenvilleGame:farmBoardGoldenCrops")
            }), iW.goldenLines.map(NW), (0, JW.jsx)("hr", {
              className: "GreenvilleFarmSection"
            })]
          }), iW.sellLines.map(NW)]
        }), (0, JW.jsx)(BO, {
          line: UO(iW, OW),
          controller: mW
        })]
      })
    }

    function RO(WW) {
      let {
        controller: iW
      } = WW;
      const OW = (0, SW.g)(YO, iW.getView()),
        {
          t: mW
        } = (0, yW.B)(),
        EW = function(WW) {
          const {
            t: iW
          } = (0, yW.B)();
          return "delivered" === WW.kind ? iW("greenvilleGame:tillieDelivered", {
            order: iW(WW.nameKey),
            gold: WW.gold
          }) : "sold" === WW.kind ? iW("greenvilleGame:tillieSold", {
            count: WW.count,
            gold: WW.gold
          }) : iW("greenvilleGame:tillieGreet")
        }(OW.line),
        NW = OW.selectedProduce;
      if (null === NW) return null;
      const PW = function(WW) {
        return WW.orders.filter((WW => WW.ct && WW.ready)).length
      }(OW);
      return (0, JW.jsxs)(li, {
        open: OW.open,
        onDismiss: iW.dismiss,
        title: mW("greenvilleGame:farmBoardTitle"),
        className: "GreenvilleFarmBoard",
        headerExtra: (0, JW.jsx)(Bi, {
          children: (0, JW.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: mW("greenvilleGame:farmBoardLevel", {
              level: OW.level
            })
          })
        }),
        tabs: (0, JW.jsx)(Ai, {
          tabs: [{
            id: "orders",
            label: mW("greenvilleGame:farmBoardOrdersTab"),
            badge: PW > 0 && (0, JW.jsx)("span", {
              className: "GreenvilleBoardBadge GreenvilleFarmReadyBadge",
              children: mW("greenvilleGame:farmBoardReadyCount", {
                count: PW
              })
            })
          }, {
            id: "stall",
            label: mW("greenvilleGame:farmBoardStallTab")
          }],
          selected: OW.tab,
          onSelect: iW.selectTab
        }),
        status: {
          speaker: mW("greenvilleGame:farmTillieName"),
          line: EW
        },
        children: ["orders" === OW.tab && (0, JW.jsx)(fO, {
          view: OW,
          controller: iW
        }), "stall" === OW.tab && (0, JW.jsx)(qO, {
          view: OW,
          produce: NW,
          controller: iW
        })]
      })
    }
    var GO = OW(39672);

    function IO(WW) {
      let {
        controller: iW
      } = WW;
      (0, SW.g)(yO, null);
      const {
        t: OW
      } = (0, yW.B)(), mW = iW.getTracker();
      return null === mW ? null : (0, JW.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, JW.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: OW(mW.nameKey)
        }), (0, JW.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: mW.needs.map((WW => {
            let [iW, mW, EW, NW] = WW;
            return (0, JW.jsxs)("li", {
              className: kW()("GreenvilleTrackerRow", {
                Done: NW >= EW,
                Golden: null !== mW
              }),
              children: [(0, JW.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, JW.jsx)(KW.b, {
                  itemName: iW,
                  amount: 0
                })
              }), (0, JW.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: null === mW ? (0, GO.g)(OW, iW) : OW(mW)
              }), (0, JW.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [Math.min(NW, EW), "/", EW]
              })]
            }, `${iW}|${mW}`)
          }))
        }), mW.ready && (0, JW.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: OW("greenvilleGame:farmOrderReady")
        })]
      })
    }
    const aO = "greenvillePlaceView",
      rO = "greenvilleMoodView";
    class zO {
      constructor(WW, iW) {
        this.publishPlace = WW, this.publishMood = iW, this.place = null, this.mood = null
      }
      getPlace() {
        return this.place
      }
      getMood() {
        return this.mood
      }
      yZ(WW) {
        const iW = performance.now();
        switch (WW[0]) {
          case "hudMood": {
            const [, OW, mW, EW, NW, PW, LW] = WW;
            return this.mood = {
              energy: OW,
              earningsPercent: mW,
              breakEvenEnergy: EW,
              restedEndsAt: NW > 0 ? iW + NW : 0,
              adBoosted: PW,
              luckPercent: LW
            }, void this.publishMood(this.mood)
          }
          case "hudTown": {
            const [iW, OW, mW] = WW;
            this.place = {
              kind: iW,
              place: OW,
              levels: mW
            };
            break
          }
          case "hudJob": {
            const [iW, OW, mW, EW, NW, PW, LW, cW, wW] = WW;
            this.place = {
              kind: iW,
              place: OW,
              job: mW,
              level: EW,
              expInto: NW,
              expNeeded: PW,
              status: null === LW ? null : FO(LW),
              next: null === cW ? null : {
                item: cW[0],
                nameKey: cW[1],
                level: cW[2]
              },
              stats: wW.map((WW => {
                let [iW, OW, mW, EW] = WW;
                return {
                  stat: iW,
                  value: OW,
                  max: mW,
                  boosted: EW
                }
              }))
            };
            break
          }
          case "hudHome": {
            const [OW, mW, EW, NW, PW, LW, cW, wW, tW] = WW;
            this.place = {
              kind: OW,
              houseName: mW,
              ownerName: EW,
              isOwner: NW,
              visitorsAllowed: PW,
              pvp: LW,
              parkour: cW,
              runStartedAt: wW < 0 ? null : this.getRunStart(iW - wW),
              bestTimes: tW.map((WW => {
                let [iW, OW] = WW;
                return {
                  playerName: iW,
                  seconds: OW
                }
              }))
            };
            break
          }
          case "hudSpleef": {
            const [iW, OW, mW] = WW;
            this.place = {
              kind: iW,
              eliminations: OW,
              wins: mW
            };
            break
          }
        }
        this.publishPlace(this.place)
      }
      getRunStart(WW) {
        var iW;
        const OW = "hudHome" === (null === (iW = this.place) || void 0 === iW ? void 0 : iW.kind) ? this.place.runStartedAt : null;
        return null !== OW && Math.abs(OW - WW) < 500 ? OW : WW
      }
    }

    function FO(WW) {
      switch (WW[0]) {
        case "hudTier":
          return {
            kind: WW[0], tierKey: WW[1], locked: WW[2]
          };
        case "hudBay":
          return {
            kind: WW[0], materialKey: WW[1], objectKey: WW[2], percent: WW[3]
          };
        case "hudBayEmpty":
          return {
            kind: WW[0]
          };
        case "hudFarmTier":
          return {
            kind: WW[0], goldenPercent: WW[1]
          }
      }
    }
    var QO = OW(4613),
      Wm = OW(1255),
      im = OW(182);
    const Om = JSON.parse('{"e":{"constructionSiteA":{"name":"Construction Site A"},"quarry":{"name":"The Quarry","skill":"Mining"},"industry":{"name":"Demolition Yard","skill":"Demolition"},"market":{"name":"Market Street","skill":"Market"},"lumberMill":{"name":"Lumber Mill","skill":"Woodcutting"},"farm":{"name":"Greenville Farm","skill":"Farming"},"constructionSiteB":{"name":"Construction Site B"},"dealership":{"name":"Wheeler\'s Wheels"},"postOffice":{"name":"Post Office & Diner"},"station":{"name":"The Station"},"docks":{"name":"The Docks"}},"h":[[{"kind":"residential","name":"Hillside"},{"kind":"district","district":"quarry"},{"kind":"district","district":"industry"},{"kind":"residential","name":"Ridgeview"}],[{"kind":"residential","name":"Willow Gardens"},{"kind":"district","district":"constructionSiteA"},{"kind":"district","district":"market"},{"kind":"residential","name":"Maple Row"}],[{"kind":"residential","name":"Birchwood"},{"kind":"district","district":"farm"},{"kind":"district","district":"lumberMill"},{"kind":"district","district":"dealership"}],[{"kind":"residential","name":"Seaview"},{"kind":"district","district":"constructionSiteB"},{"kind":"residential","name":"Harbour Terrace"},{"kind":"residential","name":"Lighthouse Point"}]]}'),
      mm = im.f.jZ,
      Em = 1e3 * mm,
      Nm = mm,
      Pm = Nm + 2 * mm,
      Lm = 4 * Pm + Nm;

    function cm(WW, iW, OW) {
      return iW >= WW.x0 && iW <= WW.x1 && OW >= WW.z0 && OW <= WW.z1
    }
    const wm = Om.h,
      tm = Object.fromEntries(Object.entries(Om.e).map((WW => {
        let [iW, {
          name: OW
        }] = WW;
        return [iW, OW]
      })));

    function Zm(WW, iW) {
      return [Em + Nm + WW * Pm, Em + Nm + iW * Pm]
    }

    function xm() {
      const WW = [];
      wm.forEach(((iW, OW) => {
        iW.forEach(((iW, mW) => {
          if ("residential" !== iW.kind) return;
          const [EW, NW] = Zm(mW, OW);
          for (const [OW, PW, LW] of [
              [0, 0, "north"],
              [1, 0, "north"],
              [0, 1, "south"],
              [1, 1, "south"]
            ]) WW.push({
            chunk: [EW / mm + OW, 0, NW / mm + PW],
            facing: LW,
            neighbourhood: iW.name
          })
        }))
      }));
      const iW = Em + Lm / 2,
        OW = WW => {
          let {
            chunk: OW
          } = WW;
          return Math.hypot(OW[0] * mm + mm / 2 - iW, OW[2] * mm + mm / 2 - iW)
        };
      return WW.sort(((WW, iW) => OW(WW) - OW(iW)))
    }
    const lm = {
        market: "Crate",
        demolition: "Moonstone Explosive",
        mining: "Iron Pickaxe",
        woodcutting: "Iron Axe",
        farming: "Wheat"
      },
      Am = {
        earningPower: "greenvilleGame:marketEarningPower",
        power: "greenvilleGame:demolitionPower",
        points: "greenvilleGame:demolitionPoints",
        depth: "greenvilleGame:miningDepth",
        value: "greenvilleGame:miningValue",
        backpack: "greenvilleGame:miningBackpack",
        luck: "greenvilleGame:luck"
      };

    function bm(WW, iW) {
      switch (iW) {
        case "quarry":
          return tm.quarry;
        case "demolitionYard":
          return tm.industry;
        case "marketStreet":
          return tm.market;
        case "farm":
          return tm.farm;
        case "lumberMill":
          return tm.lumberMill;
        case "supermarket":
          return WW("greenvilleGame:market");
        case "demolition":
        case "mining":
        case "woodcutting":
        case "farming":
          return WW(`greenvilleGame:${iW}`)
      }
    }

    function jm(WW) {
      let {
        controller: iW,
        children: OW
      } = WW;
      (0, SW.g)(aO, null);
      const [mW, EW] = (0, cW.useState)(null);
      (0, QO.l)(mW, ".RightElements");
      const NW = iW.getPlace();
      return (0, JW.jsx)(MW.h, {
        placement: "topRight",
        children: (0, JW.jsx)("div", {
          className: "GreenvilleHudColumn",
          children: (0, JW.jsxs)("div", {
            ref: EW,
            className: "GreenvilleHudColumnStack",
            children: [OW, "hudTown" === (null === NW || void 0 === NW ? void 0 : NW.kind) && (0, JW.jsx)(km, {
              levels: NW.levels
            }), "hudJob" === (null === NW || void 0 === NW ? void 0 : NW.kind) && (0, JW.jsx)(sm, {
              job: NW
            }), "hudHome" === (null === NW || void 0 === NW ? void 0 : NW.kind) && NW.bestTimes.length > 0 && (0, JW.jsx)(Mm, {
              home: NW
            }), "hudSpleef" === (null === NW || void 0 === NW ? void 0 : NW.kind) && (0, JW.jsx)("div", {
              className: "GreenvilleTrackerCard",
              children: (0, JW.jsx)(Um, {
                rows: [
                  ["greenvilleGame:spleefEliminations", NW.eliminations],
                  ["greenvilleGame:spleefWins", NW.wins]
                ]
              })
            })]
          })
        })
      })
    }

    function Um(WW) {
      let {
        rows: iW
      } = WW;
      const {
        t: OW
      } = (0, yW.B)();
      return (0, JW.jsx)("ul", {
        className: "GreenvilleTrackerRows",
        children: iW.map((WW => {
          let [iW, mW] = WW;
          return (0, JW.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, JW.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: OW(iW)
            }), (0, JW.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: (0, pW.g)(mW)
            })]
          }, iW)
        }))
      })
    }

    function km(WW) {
      let {
        levels: iW
      } = WW;
      const {
        t: OW
      } = (0, yW.B)();
      return (0, JW.jsxs)("div", {
        className: "GreenvilleTrackerCard GreenvilleJobsStrip",
        children: [(0, JW.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: OW("greenvilleGame:jobs")
        }), (0, JW.jsx)("ul", {
          className: "GreenvilleJobsStripJobs",
          children: PW.map(((WW, mW) => {
            const EW = iW[mW];
            return (0, JW.jsxs)("li", {
              className: kW()("GreenvilleJobsStripJob", {
                Max: EW >= 50
              }),
              "aria-label": OW("greenvilleGame:jobLevel", {
                job: OW(`greenvilleGame:${WW}`),
                level: EW
              }),
              children: [(0, JW.jsx)("span", {
                className: "GreenvilleJobsStripIcon",
                "aria-hidden": "true",
                children: (0, JW.jsx)(KW.b, {
                  itemName: lm[WW],
                  amount: 0
                })
              }), (0, JW.jsx)("span", {
                className: "GreenvilleJobsStripLevel",
                "aria-hidden": "true",
                children: OW("greenvilleGame:levelShort", {
                  level: EW
                })
              })]
            }, WW)
          }))
        })]
      })
    }

    function sm(WW) {
      let {
        job: {
          stats: iW,
          next: OW
        }
      } = WW;
      const {
        t: mW
      } = (0, yW.B)();
      return (0, JW.jsxs)(JW.Fragment, {
        children: [iW.length > 0 && (0, JW.jsx)("div", {
          className: "GreenvilleTrackerCard",
          children: (0, JW.jsx)("ul", {
            className: "GreenvilleTrackerRows",
            children: iW.map((WW => {
              let {
                stat: iW,
                value: OW,
                max: EW,
                boosted: NW
              } = WW;
              return (0, JW.jsxs)("li", {
                className: "GreenvilleTrackerRow",
                children: [(0, JW.jsx)("span", {
                  className: "GreenvilleTrackerLabel",
                  children: mW(Am[iW])
                }), (0, JW.jsxs)("span", {
                  className: kW()("GreenvilleTrackerValue", {
                    Boosted: NW
                  }),
                  children: [(0, pW.g)(OW), null !== EW && `/${(0,pW.g)(EW)}`]
                })]
              }, iW)
            }))
          })
        }), null !== OW && (0, JW.jsxs)("div", {
          className: "GreenvilleTrackerCard GreenvilleNextUnlock",
          children: [(0, JW.jsx)("span", {
            className: "GreenvilleNextUnlockEyebrow",
            children: mW("greenvilleGame:nextUnlock")
          }), (0, JW.jsxs)("div", {
            className: "GreenvilleNextUnlockBody",
            children: [(0, JW.jsx)("span", {
              className: "GreenvilleNextUnlockIcon",
              "aria-hidden": "true",
              children: (0, JW.jsx)(KW.b, {
                itemName: OW.item,
                amount: 0
              })
            }), (0, JW.jsxs)("span", {
              className: "GreenvilleNextUnlockText",
              children: [(0, JW.jsx)("strong", {
                className: "GreenvilleNextUnlockName",
                children: mW(OW.nameKey)
              }), (0, JW.jsx)("span", {
                className: "GreenvilleNextUnlockLevel",
                children: mW("greenvilleGame:unlockAtLevel", {
                  level: OW.level
                })
              })]
            })]
          })]
        })]
      })
    }

    function Mm(WW) {
      let {
        home: iW
      } = WW;
      const {
        t: OW,
        selectedLanguage: mW
      } = (0, yW.B)(), EW = (0, fi.g)("hiddenPlayerNames");
      return (0, JW.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, JW.jsxs)("strong", {
          className: "GreenvilleTrackerTitle GreenvilleBestTimesTitle",
          children: [(0, JW.jsx)(Ni.c, {
            name: "trophy"
          }), OW("greenvilleGame:parkourBestTimes")]
        }), (0, JW.jsx)("ol", {
          className: "GreenvilleTrackerRows",
          children: iW.bestTimes.slice(0, 3).map(((WW, iW) => {
            let {
              playerName: NW,
              seconds: PW
            } = WW;
            return (0, JW.jsxs)("li", {
              className: kW()("GreenvilleTrackerRow GreenvilleBestTime", {
                First: 0 === iW
              }),
              children: [(0, JW.jsx)("span", {
                className: "GreenvilleBestTimeRank",
                children: iW + 1
              }), (0, JW.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: (0, Wm.g)(NW, EW)
              }), (0, JW.jsx)("span", {
                className: "GreenvilleTrackerValue",
                children: OW("greenvilleGame:parkourTime", {
                  seconds: PW.toLocaleString(mW.code, {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1
                  })
                })
              })]
            }, `${iW}|${NW}`)
          }))
        })]
      })
    }
    const Km = "greenvilleLevelUpsView";
    class Sm {
      constructor(WW) {
        this.publishReveals = WW, this.reveals = [], this.token = 0, this.celebrate = (WW, iW) => {
          this.setReveals([...this.reveals, {
            kind: "celebration",
            celebration: WW,
            gold: iW,
            token: ++this.token
          }])
        }, this.revealed = WW => {
          this.setReveals(this.reveals.filter((iW => iW.token !== WW)))
        }
      }
      getReveals() {
        return this.reveals
      }
      yZ(WW) {
        const [iW, OW, mW] = WW;
        this.setReveals([...this.reveals, {
          kind: "levelUp",
          job: iW,
          level: OW,
          unlocks: mW.map((WW => {
            let [iW, OW, mW] = WW;
            return {
              item: iW,
              nameKey: OW,
              level: mW
            }
          })),
          token: ++this.token
        }])
      }
      setReveals(WW) {
        this.reveals = WW, this.publishReveals(WW)
      }
    }
    const Ym = [{
        opacity: 0
      }, {
        opacity: 1,
        offset: .04
      }, {
        opacity: 1,
        offset: .9
      }, {
        opacity: 0
      }],
      ym = {
        movedIn: "greenvilleGame:tutCelebrateMovedIn",
        firstGold: "greenvilleGame:tutCelebrateFirstGold",
        firstCar: "greenvilleGame:tutCelebrateFirstCar",
        lessonDone: "greenvilleGame:tutCelebrateLessonDone"
      },
      Tm = Array.from({
        length: 16
      }, ((WW, iW) => ({
        "--angle": 360 * iW / 16 + iW % 3 * 7 + "deg",
        "--distance": 5 + iW % 4 * 1.2 + "rem",
        "--delay": iW % 5 * 30 + "ms"
      })));

    function Jm(WW) {
      let {
        controller: iW
      } = WW;
      (0, SW.g)(Km, null);
      const OW = iW.getReveals();
      return 0 === OW.length ? null : (0, VW.createPortal)((0, JW.jsx)(hm, {
        reveal: OW[0],
        onDone: iW.revealed
      }, OW[0].token), document.body)
    }

    function hm(WW) {
      let {
        reveal: iW,
        onDone: OW
      } = WW;
      const {
        t: mW
      } = (0, yW.B)(), EW = (0, cW.useRef)(null), NW = "levelUp" === iW.kind ? iW.unlocks : [], PW = 0 === NW.length ? 2600 : 4200;
      return (0, cW.useLayoutEffect)((() => {
        const WW = document.querySelector(".GreenvilleTopBar");
        WW && EW.current.style.setProperty("--top-bar-bottom", `${WW.getBoundingClientRect().bottom}px`)
      }), []), (0, cW.useEffect)((() => {
        const WW = EW.current.animate(Ym, {
          duration: PW,
          fill: "both"
        });
        return WW.onfinish = () => {
          OW(iW.token)
        }, () => {
          WW.onfinish = null, WW.cancel()
        }
      }), [iW, PW, OW]), (0, JW.jsxs)("div", {
        ref: EW,
        className: kW()("GreenvilleLevelUpReveal", {
          Plain: 0 === NW.length
        }),
        style: {
          "--reveal-ms": `${PW}ms`,
          "--unlock-count": NW.length
        },
        role: "status",
        children: [NW.length > 0 && (0, JW.jsx)("div", {
          className: "GreenvilleLevelUpRevealStage",
          "aria-hidden": "true",
          children: (0, JW.jsxs)("div", {
            className: "GreenvilleLevelUpRevealMover",
            children: [(0, JW.jsx)("div", {
              className: "GreenvilleLevelUpRevealRays"
            }), (0, JW.jsx)("div", {
              className: "GreenvilleLevelUpRevealGlow"
            }), (0, JW.jsx)("div", {
              className: "GreenvilleLevelUpRevealSparks",
              children: Tm.map(((WW, iW) => (0, JW.jsx)("span", {
                style: WW
              }, iW)))
            }), (0, JW.jsx)("div", {
              className: "GreenvilleLevelUpRevealIcon",
              children: NW.map((WW => (0, JW.jsx)("div", {
                className: "GreenvilleLevelUpRevealItem",
                children: (0, JW.jsx)(KW.b, {
                  itemName: WW.item,
                  amount: 0
                })
              }, `${WW.level}|${WW.nameKey}`)))
            })]
          })
        }), (0, JW.jsxs)("div", {
          className: "GreenvilleLevelUpRevealText",
          children: ["levelUp" === iW.kind && (0, JW.jsx)(Hm, {
            levelUp: iW
          }), "celebration" === iW.kind && (0, JW.jsx)("span", {
            className: "GreenvilleLevelUpRevealName FullyFancyText",
            children: mW(ym[iW.celebration], {
              gold: (0, pW.g)(iW.gold)
            })
          })]
        })]
      })
    }

    function Hm(WW) {
      let {
        levelUp: {
          job: iW,
          level: OW,
          unlocks: mW
        }
      } = WW;
      const {
        t: EW
      } = (0, yW.B)(), NW = EW(`greenvilleGame:${iW}`);
      return (0, JW.jsxs)(JW.Fragment, {
        children: [mW.length > 0 && (0, JW.jsxs)(JW.Fragment, {
          children: [(0, JW.jsx)("span", {
            className: "GreenvilleLevelUpRevealHeading SmallTextBold",
            children: EW("greenvilleGame:levelUpUnlockHeading", {
              job: NW,
              level: 1 === mW.length ? mW[0].level : OW
            })
          }), (0, JW.jsx)("span", {
            className: "GreenvilleLevelUpRevealNames",
            children: mW.map((WW => (0, JW.jsx)("span", {
              className: "GreenvilleLevelUpRevealName FullyFancyText",
              children: EW(WW.nameKey)
            }, `${WW.level}|${WW.nameKey}`)))
          })]
        }), 0 === mW.length && (0, JW.jsxs)(JW.Fragment, {
          children: [(0, JW.jsx)("span", {
            className: "GreenvilleLevelUpRevealHeading SmallTextBold",
            children: EW("greenvilleGame:levelUpHeading")
          }), (0, JW.jsx)("span", {
            className: "GreenvilleLevelUpRevealName FullyFancyText",
            children: EW("greenvilleGame:jobLevel", {
              job: NW,
              level: OW
            })
          })]
        })]
      })
    }
    const nm = "greenvilleMarketView";

    function um(WW) {
      return WW.map((WW => {
        let [iW, OW, mW, EW, NW, PW] = WW;
        return {
          key: `${iW}|${OW}|${mW}|${EW}|${NW}`,
          icon: iW,
          target: [OW, mW, EW],
          item: NW,
          label: PW
        }
      }))
    }
    class om {
      constructor(WW) {
        this.iZ = WW, this.view = null
      }
      getView() {
        return this.view
      }
      yZ(WW) {
        const iW = performance.now();
        switch (WW[0]) {
          case "hide":
            this.view = null;
            break;
          case "marketIdle":
            this.view = {
              job: null,
              waypoints: um(WW[1])
            };
            break;
          case "marketPick":
          case "marketStock": {
            const [OW, mW, EW, NW] = WW;
            this.view = {
              job: {
                kind: OW,
                goods: mW,
                tipEndsAt: NW > 0 ? iW + NW : 0
              },
              waypoints: um(EW)
            };
            break
          }
          case "marketDeliver": {
            const [OW, mW, EW, NW, PW, LW] = WW;
            this.view = {
              job: {
                kind: OW,
                parcelsLeft: mW,
                delivered: EW,
                gold: NW,
                endsAt: iW + LW
              },
              waypoints: um(PW)
            };
            break
          }
        }
        this.iZ(this.view)
      }
    }
    var dm = OW(37888);
    const em = [{
      transform: "scale(1)",
      filter: "brightness(1)"
    }, {
      transform: "scale(1.35)",
      filter: "brightness(1.4)",
      offset: .3
    }, {
      transform: "scale(1)",
      filter: "brightness(1)"
    }];

    function gm(WW) {
      var iW;
      let {
        controller: OW
      } = WW;
      (0, SW.g)(nm, null);
      const mW = null === (iW = OW.getView()) || void 0 === iW ? void 0 : iW.job;
      return "marketDeliver" !== (null === mW || void 0 === mW ? void 0 : mW.kind) ? null : (0, JW.jsx)(Dm, {
        endsAt: mW.endsAt,
        delivered: mW.delivered
      })
    }

    function Dm(WW) {
      let {
        endsAt: iW,
        delivered: OW
      } = WW;
      const {
        t: mW
      } = (0, yW.B)(), EW = Math.max(0, Math.ceil((0, dm.e)(iW))), NW = (0, cW.useRef)(null), PW = (0, cW.useRef)(null), LW = (0, cW.useRef)({
        endsAt: iW,
        delivered: OW
      }), [wW, tW] = (0, cW.useState)(null);
      (0, cW.useLayoutEffect)((() => {
        const WW = OW > LW.current.delivered ? Math.round((iW - LW.current.endsAt) / 1e3) : 0;
        var mW;
        (LW.current = {
          endsAt: iW,
          delivered: OW
        }, WW <= 0) || (tW((iW => {
          var OW;
          return {
            seconds: WW,
            token: (null !== (OW = null === iW || void 0 === iW ? void 0 : iW.token) && void 0 !== OW ? OW : 0) + 1
          }
        })), window.matchMedia("(prefers-reduced-motion: reduce)").matches || (null === (mW = PW.current) || void 0 === mW || mW.cancel(), PW.current = NW.current.animate(em, {
          duration: 420,
          easing: "ease-out"
        })))
      }), [iW, OW]), (0, cW.useEffect)((() => () => {
        var WW;
        null === (WW = PW.current) || void 0 === WW || WW.cancel()
      }), []);
      const ZW = Math.floor(EW / 60);
      return (0, JW.jsxs)("div", {
        className: kW()("GreenvilleMarketCountdown", {
          Urgent: EW < 10
        }),
        role: "timer",
        children: [(0, JW.jsxs)("div", {
          ref: NW,
          className: "GreenvilleMarketCountdownTime FullyFancyText",
          children: [ZW, ":", String(EW % 60).padStart(2, "0")]
        }), null !== wW && (0, JW.jsx)("div", {
          className: "GreenvilleMarketCountdownAdded FullyFancyText",
          onAnimationEnd: () => {
            tW(null)
          },
          children: mW("greenvilleGame:marketCountdownAdded", {
            seconds: wW.seconds
          })
        }, wW.token)]
      })
    }

    function Vm(WW) {
      var iW;
      let {
        controller: OW
      } = WW;
      (0, SW.g)(nm, null);
      const mW = null === (iW = OW.getView()) || void 0 === iW ? void 0 : iW.job;
      return mW ? (0, JW.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: ["marketDeliver" === mW.kind && (0, JW.jsx)(Cm, {
          shift: mW
        }), "marketDeliver" !== mW.kind && (0, JW.jsx)(pm, {
          task: mW
        })]
      }) : null
    }

    function pm(WW) {
      let {
        task: iW
      } = WW;
      const {
        t: OW
      } = (0, yW.B)(), mW = "marketPick" === iW.kind && iW.goods.every((WW => {
        let [, iW] = WW;
        return 0 === iW
      }));
      return (0, JW.jsxs)(JW.Fragment, {
        children: [(0, JW.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: OW("marketPick" === iW.kind ? "greenvilleGame:marketPanelOrder" : "greenvilleGame:marketPanelCrate")
        }), (0, JW.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: iW.goods.map((WW => {
            let [iW, mW, EW] = WW;
            return (0, JW.jsxs)("li", {
              className: kW()("GreenvilleTrackerRow", {
                Done: 0 === mW
              }),
              children: [(0, JW.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, JW.jsx)(KW.b, {
                  itemName: iW,
                  amount: 0
                })
              }), (0, JW.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: (0, GO.g)(OW, iW)
              }), (0, JW.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [EW - mW, "/", EW]
              })]
            }, iW)
          }))
        }), mW && (0, JW.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: OW("greenvilleGame:marketPanelReturn")
        }), !mW && 0 !== iW.tipEndsAt && (0, JW.jsx)(fm, {
          endsAt: iW.tipEndsAt
        })]
      })
    }

    function fm(WW) {
      let {
        endsAt: iW
      } = WW;
      const {
        t: OW
      } = (0, yW.B)(), mW = Math.ceil((0, dm.e)(iW));
      return mW <= 0 ? null : (0, JW.jsx)("div", {
        className: "GreenvilleTrackerTip",
        children: OW("greenvilleGame:marketPanelTip", {
          seconds: mW
        })
      })
    }

    function Cm(WW) {
      let {
        shift: iW
      } = WW;
      const {
        t: OW
      } = (0, yW.B)();
      return (0, JW.jsxs)(JW.Fragment, {
        children: [(0, JW.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: OW("greenvilleGame:marketPanelDeliveries")
        }), (0, JW.jsxs)("ul", {
          className: "GreenvilleTrackerRows",
          children: [(0, JW.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, JW.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: OW("greenvilleGame:marketPanelParcels")
            }), (0, JW.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: iW.parcelsLeft
            })]
          }), (0, JW.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, JW.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: OW("greenvilleGame:marketPanelDelivered")
            }), (0, JW.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: iW.delivered
            })]
          }), (0, JW.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, JW.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: OW("greenvilleGame:marketPanelEarned")
            }), (0, JW.jsx)("span", {
              className: "GreenvilleTrackerIcon",
              "aria-hidden": "true",
              children: (0, JW.jsx)(KW.b, {
                itemName: "Gold Coin",
                amount: 0
              })
            }), (0, JW.jsx)("span", {
              className: "GreenvilleTrackerValue Gold",
              children: (0, pW.g)(iW.gold)
            })]
          })]
        }), 0 === iW.parcelsLeft && (0, JW.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: OW("greenvilleGame:marketPanelBackToBay")
        })]
      })
    }
    const Xm = {
      marketNpc: "comment-dots",
      marketShelf: "cart-shopping",
      marketHouse: "house",
      marketDepot: "truck"
    };

    function Bm(WW) {
      var iW;
      let {
        market: OW,
        markers: mW
      } = WW;
      (0, SW.g)(nm, null);
      const EW = null === (iW = OW.getView()) || void 0 === iW ? void 0 : iW.waypoints;
      return null !== EW && void 0 !== EW && EW.length ? (0, JW.jsx)("div", {
        className: "GreenvilleMarketWaypoints",
        children: EW.map((WW => (0, JW.jsx)(qm, {
          waypoint: WW,
          bind: mW.waypoints.bindMarker(WW.key)
        }, WW.key)))
      }) : null
    }

    function qm(WW) {
      let {
        waypoint: {
          icon: iW,
          item: OW,
          label: mW
        },
        bind: EW
      } = WW;
      return (0, JW.jsxs)(Rm, {
        bind: EW,
        house: "marketHouse" === iW,
        label: mW,
        children: [null !== OW && (0, JW.jsx)("span", {
          className: "GreenvilleMarketWaypointItem",
          children: (0, JW.jsx)(KW.b, {
            itemName: OW,
            amount: 0
          })
        }), null === OW && (0, JW.jsx)(Ni.c, {
          name: Xm[iW]
        })]
      })
    }

    function Rm(WW) {
      let {
        bind: iW,
        house: OW,
        label: mW,
        extra: EW,
        children: NW
      } = WW;
      return (0, JW.jsxs)("div", {
        ref: iW,
        className: kW()("GreenvilleMarketWaypoint", {
          House: OW
        }),
        children: [OW && (0, JW.jsx)(Gm, {}), (0, JW.jsx)("div", {
          className: "GreenvilleMarketWaypointBadge",
          children: NW
        }), EW, (0, JW.jsxs)("div", {
          className: "GreenvilleMarketWaypointLabels",
          children: [null !== mW && (0, JW.jsx)("span", {
            className: "GreenvilleMarketWaypointLabel SmallTextBold",
            children: mW
          }), (0, JW.jsx)("span", {
            className: "GreenvilleMarketWaypointDistance SmallTextBold"
          })]
        })]
      })
    }

    function Gm() {
      const WW = (0, cW.useRef)(null);
      return (0, hO.b)(WW), (0, JW.jsx)("span", {
        ref: WW,
        className: "GreenvilleMarketWaypointPulse"
      })
    }
    const Im = {
      labels: "GreenvilleMarketWaypointLabels",
      distance: "GreenvilleMarketWaypointDistance"
    };
    class am {
      constructor(WW) {
        this.market = WW, this.waypoints = new AW.d(Im, "greenvilleGame:marketDistance")
      }
      frame(WW, iW) {
        this.waypoints.setRender(WW);
        const OW = this.market.getView();
        if (OW && this.waypoints.hasMarkers())
          for (const {
              key: mW,
              target: EW
            }
            of OW.waypoints) this.waypoints.update(mW, EW[0], EW[1] + 1, EW[2], iW)
      }
    }
    const rm = "greenvilleMapView",
      zm = {
        open: !1
      };
    class Fm extends ii {
      constructor(WW, iW, OW) {
        super(zm, WW, iW), this.nav = OW, this.open = () => {
          this.show({
            open: !0
          })
        }
      }
      dropPresses() {}
      set(WW) {
        super.set(WW), this.nav.setFullMapOpen(WW.open)
      }
    }
    var Qm = OW(39876),
      WE = OW(39865);
    const iE = {
      Street: "St",
      Avenue: "Ave",
      Road: "Rd",
      Lane: "Ln"
    };

    function OE(WW, iW) {
      return iW.map(((iW, OW) => {
        const mW = iW.lastIndexOf(" "),
          EW = iW.slice(mW + 1);
        let NW = iE[EW];
        return void 0 === NW && (console.warn(`Greenville street "${iW}" has no suffix abbreviation`), NW = EW), {
          axis: WW,
          line: OW,
          name: iW,
          shortName: iW.slice(0, mW),
          suffix: NW
        }
      }))
    }
    const mE = {
        eastWest: OE("eastWest", ["Hillcrest Road", "Oak Street", "Main Street", "Elm Street", "Harbour Road"]),
        northSouth: OE("northSouth", ["Willow Lane", "Birch Avenue", "Market Street", "Maple Avenue", "Station Road"])
      },
      EE = {
        kind: "outside"
      };

    function NE(WW, iW, OW) {
      return 100 * (WW + 1) + iW + (OW ? 1 : 0)
    }

    function PE(WW, iW, OW, mW) {
      return {
        x0: Em + WW,
        z0: Em + iW,
        x1: Em + WW + OW - 1,
        z1: Em + iW + mW - 1
      }
    }
    let LE = null;

    function cE(WW, iW, OW, mW) {
      if (mW && "outside" !== mW.kind) {
        const {
          box: OW
        } = mW;
        if (!cm(OW, WW, iW) && cm({
            x0: OW.x0 - 2,
            z0: OW.z0 - 2,
            x1: OW.x1 + 2,
            z1: OW.z1 + 2
          }, WW, iW)) return mW
      }
      return function(WW, iW, OW) {
        const {
          eastWest: mW,
          northSouth: EW
        } = mE;
        switch (WW.kind) {
          case "outside":
            return EE;
          case "street": {
            const iW = WW.segment * Pm + Nm,
              OW = WW.line * Pm;
            return {
              kind: "street",
              box: "eastWest" === WW.axis ? PE(iW, OW, Pm - Nm, Nm) : PE(OW, iW, Nm, Pm - Nm),
              street: mE[WW.axis][WW.line],
              block: 100 * (WW.segment + 1)
            }
          }
          case "junction": {
            const NW = PE(WW.column * Pm, WW.row * Pm, Nm, Nm),
              PW = [mW[WW.row], EW[WW.column]],
              LW = "street" === (null === OW || void 0 === OW ? void 0 : OW.kind) ? OW.street : "junction" === (null === OW || void 0 === OW ? void 0 : OW.kind) ? OW.along : null,
              cW = LW && PW.includes(LW) ? LW : Math.abs(Math.sin(iW)) > Math.abs(Math.cos(iW)) ? PW[0] : PW[1];
            return {
              kind: "junction",
              box: NW,
              along: cW,
              cross: cW === PW[0] ? PW[1] : PW[0]
            }
          }
          case "plot": {
            const iW = WW.column * Pm + Nm + WW.dx * Nm,
              OW = WW.row * Pm + Nm + WW.dz * Nm,
              EW = 0 === WW.dz;
            return {
              kind: "plot",
              box: PE(iW, OW, Nm, Nm),
              plotId: (NW = (Em + iW) / Nm, PW = (Em + OW) / Nm, LE || (LE = new Map(xm().map(((WW, iW) => {
                let {
                  chunk: OW
                } = WW;
                return [`${OW[0]},${OW[2]}`, iW + 1]
              })))), LE.get(`${NW},${PW}`)),
              number: NE(WW.column, 0 === WW.dx ? 30 : 70, EW),
              street: mW[EW ? WW.row : WW.row + 1],
              neighbourhood: WW.neighbourhood
            }
          }
          case "tile": {
            const {
              column: iW,
              row: OW,
              district: EW
            } = WW;
            return {
              kind: "tile",
              box: PE(iW * Pm + Nm, OW * Pm + Nm, Pm - Nm, Pm - Nm),
              district: EW,
              number: NE(iW, 50, !0),
              street: mW[OW]
            }
          }
        }
        var NW, PW
      }(function(WW, iW) {
        const OW = WW - Em,
          mW = iW - Em;
        if (OW < 0 || mW < 0 || OW >= Lm || mW >= Lm) return {
          kind: "outside"
        };
        const EW = Math.floor(OW / Pm),
          NW = Math.floor(mW / Pm),
          PW = OW - EW * Pm - Nm,
          LW = mW - NW * Pm - Nm;
        if (PW < 0 && LW < 0) return {
          kind: "junction",
          column: EW,
          row: NW
        };
        if (LW < 0) return {
          kind: "street",
          axis: "eastWest",
          line: NW,
          segment: EW
        };
        if (PW < 0) return {
          kind: "street",
          axis: "northSouth",
          line: EW,
          segment: NW
        };
        const cW = wm[NW][EW];
        return "residential" === cW.kind ? {
          kind: "plot",
          column: EW,
          row: NW,
          dx: Math.floor(PW / Nm),
          dz: Math.floor(LW / Nm),
          neighbourhood: cW.name
        } : {
          kind: "tile",
          column: EW,
          row: NW,
          district: cW.district
        }
      }(WW, iW), OW, mW)
    }

    function wE(WW) {
      switch (WW.kind) {
        case "outside":
          return "outside";
        case "junction":
          return `junction|${WW.along.name}|${WW.cross.name}`;
        case "plot":
        case "tile":
          return `${WW.kind}|${WW.number}|${WW.street.name}`;
        case "street":
          return `street|${WW.block}|${WW.street.name}`
      }
    }
    const tE = im.f.jZ,
      ZE = {
        origin: Em,
        size: Lm,
        Am: -2 * tE,
        bm: 4 * tE
      },
      xE = new Set(["quarry", "industry"]);
    const lE = {
        origin: 1562 * tE,
        size: 13 * tE,
        Am: 0,
        bm: 5 * tE
      },
      AE = OW.p + "static/media/greenvilleSewers.9ca15fd9e781052910dd.png";
    var bE = OW(39778),
      jE = OW(39871),
      UE = OW(40751),
      kE = OW(40748),
      sE = OW(232);
    const ME = im.f.jZ;
    class KE {
      constructor(WW, iW, OW) {
        this.api = WW, this.map = iW, this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.image = this.context.createImageData(ME, ME), this.columns = void 0, this.lowestLayer = void 0, this.layers = void 0, this.plots = void 0, this.baked = null, this.JA = !1, this.ids = new Uint16Array(ME * ME), this.tops = new Int32Array(ME * ME), this.edgeIds = new Uint16Array(ME), this.edgeTops = new Int32Array(ME), this.heights = void 0, this.versions = void 0, this.current = void 0, this.stale = void 0, this.painted = void 0, this.order = [], this.focus = {
          column: -1,
          row: -1
        }, this.colours = null, this.host = null, this.timer = null, this.cancelIdle = null, this.pass = WW => {
          this.cancelIdle = null;
          let iW = !1;
          const OW = performance.now();
          let mW = !0;
          if (this.colours && this.host && this.host.clientWidth > 0)
            for (const EW of this.order) {
              if (!this.readVersions(EW)) continue;
              const NW = !WW.didTimeout && WW.timeRemaining() < 2;
              if (!mW && (NW || performance.now() - OW > 6)) {
                iW = !0;
                break
              }
              mW = !1, this.versions.set(this.current, EW * this.layers), this.paint(EW % this.columns, Math.floor(EW / this.columns), this.colours.lookup, this.colours.drawn)
            }
          this.schedule(iW ? 0 : 500)
        };
        const {
          origin: mW,
          size: EW,
          Am: NW,
          bm: PW
        } = iW.area;
        this.columns = EW / ME, this.lowestLayer = NW / ME, this.layers = (PW - NW) / ME, this.plots = new Set(OW.map((WW => {
          let {
            chunkX: iW,
            chunkZ: OW
          } = WW;
          return OW * this.columns + iW
        }))), this.heights = new Int32Array(EW * EW).fill(UE.e), this.versions = new Float64Array(this.columns * this.columns * this.layers).fill(NaN), this.current = new Float64Array(this.layers), this.stale = new Uint8Array(this.columns * this.columns), this.painted = new Uint8Array(this.columns * this.columns), this.canvas.width = EW, this.canvas.height = EW, this.canvas.className = "GreenvilleNavMapTerrain", 0 !== OW.length ? (this.focusOn(mW + EW / 2, mW + EW / 2), Promise.all([(0, kE.e)(), this.drawBakedMap()]).then((WW => {
          let [iW] = WW;
          this.colours = {
            lookup: iW,
            drawn: iW.getDrawnIds()
          }
        }), (WW => {
          console.error("Greenville map: block colours failed to load", WW)
        })), this.schedule(0)) : this.drawBakedMap()
      }
      mount(WW) {
        this.host = WW, null === WW || void 0 === WW || WW.replaceChildren(this.canvas)
      }
      focusOn(WW, iW) {
        const {
          columns: OW
        } = this, {
          origin: mW
        } = this.map.area, EW = Math.min(OW - 1, Math.max(0, Math.floor((WW - mW) / ME))), NW = Math.min(OW - 1, Math.max(0, Math.floor((iW - mW) / ME)));
        EW === this.focus.column && NW === this.focus.row || (this.focus = {
          column: EW,
          row: NW
        }, this.order = [...this.plots].sort(((WW, iW) => Math.hypot(WW % OW - EW, Math.floor(WW / OW) - NW) - Math.hypot(iW % OW - EW, Math.floor(iW / OW) - NW))))
      }
      forget(WW, iW) {
        const OW = iW * this.columns + WW;
        this.stale[OW] = 1, this.versions.fill(NaN, OW * this.layers, (OW + 1) * this.layers)
      }
      dispose() {
        var WW, iW;
        null !== this.timer && clearTimeout(this.timer), null === (WW = this.cancelIdle) || void 0 === WW || WW.call(this), this.host = null, this.JA = !0, null === (iW = this.baked) || void 0 === iW || iW.close(), this.baked = null
      }
      async drawBakedMap() {
        try {
          const WW = await fetch(this.map.imageUrl);
          if (!WW.ok) throw new Error(`HTTP ${WW.status}`);
          const iW = await createImageBitmap(await WW.blob(), {
            colorSpaceConversion: "none"
          });
          if (this.JA) return void iW.close();
          this.baked = iW, this.context.drawImage(iW, 0, 0)
        } catch (WW) {
          console.error("Greenville map: the baked map failed to load", WW)
        }
      }
      schedule(WW) {
        this.timer = setTimeout((() => {
          this.timer = null, this.cancelIdle = (0, sE.d)(this.pass, {
            timeoutMs: 1e3
          })
        }), WW)
      }
      readVersions(WW) {
        const {
          origin: iW
        } = this.map.area, OW = iW / ME + WW % this.columns, mW = iW / ME + Math.floor(WW / this.columns);
        let EW = !1;
        for (let PW = 0; PW < this.layers; PW++) {
          var NW;
          const iW = null !== (NW = this.api.getChunkVersion(OW, this.lowestLayer + PW, mW)) && void 0 !== NW ? NW : 0;
          this.current[PW] = iW, EW ||= iW !== this.versions[WW * this.layers + PW]
        }
        return EW
      }
      repaintIfPainted(WW, iW) {
        const OW = iW * this.columns + WW;
        WW < this.columns && iW < this.columns && 1 === this.painted[OW] && this.versions.fill(NaN, OW * this.layers, (OW + 1) * this.layers)
      }
      storeHeights(WW, iW) {
        const {
          size: OW
        } = this.map.area;
        let mW = !1,
          EW = !1;
        for (let NW = 0; NW < this.ids.length; NW++) {
          const PW = NW % ME,
            LW = Math.floor(NW / ME),
            cW = (iW * ME + LW) * OW + WW * ME + PW,
            wW = 0 === this.ids[NW] ? UE.e : this.tops[NW];
          this.heights[cW] !== wW && (mW ||= PW === ME - 1, EW ||= LW === ME - 1, this.heights[cW] = wW)
        }
        mW && this.repaintIfPainted(WW + 1, iW), EW && this.repaintIfPainted(WW, iW + 1)
      }
      readEdgeHeights(WW, iW, OW, mW, EW) {
        const {
          origin: NW,
          size: PW,
          Am: LW,
          bm: cW
        } = this.map.area;
        this.api.readColumnTops(WW, iW, OW, mW, LW, cW, EW, this.edgeIds, this.edgeTops);
        const wW = OW - WW;
        for (let tW = 0; tW < ME; tW++) {
          const OW = (iW - NW + Math.floor(tW / wW)) * PW + WW - NW + tW % wW;
          this.heights[OW] = 0 === this.edgeIds[tW] ? UE.e : this.edgeTops[tW]
        }
      }
      paint(WW, iW, OW, mW) {
        const {
          origin: EW,
          size: NW,
          Am: PW,
          bm: LW
        } = this.map.area, cW = iW * this.columns + WW, wW = 1 === this.stale[cW];
        this.stale[cW] = 0;
        const tW = EW + WW * ME,
          ZW = EW + iW * ME,
          xW = NW - (WW + 1) * ME,
          {
            ids: lW,
            tops: AW,
            heights: bW
          } = this;
        if (0 === this.current[0 - this.lowestLayer]) return void(wW && (this.context.clearRect(xW, iW * ME, ME, ME), this.baked && this.context.drawImage(this.baked, xW, iW * ME, ME, ME, xW, iW * ME, ME, ME), lW.fill(0), this.storeHeights(WW, iW)));
        this.painted[cW] = 1, this.api.readColumnTops(tW, ZW, tW + ME, ZW + ME, PW, LW, mW, lW, AW), this.storeHeights(WW, iW), this.plots.has(cW - 1) || this.readEdgeHeights(tW - 1, ZW, tW, ZW + ME, mW), this.plots.has(cW - this.columns) || this.readEdgeHeights(tW, ZW - 1, tW + ME, ZW, mW);
        const jW = this.image.data;
        for (let UW = 0; UW < ME; UW++)
          for (let mW = 0; mW < ME; mW++) {
            const EW = 4 * (UW * ME + ME - 1 - mW),
              PW = lW[UW * ME + mW];
            if (0 === PW) {
              jW[EW + 3] = 0;
              continue
            }
            const LW = WW * ME + mW,
              cW = iW * ME + UW;
            OW.drawPixel(jW, EW, PW, AW[UW * ME + mW], bW[(cW - 1) * NW + LW], bW[cW * NW + LW - 1])
          }
        this.context.putImageData(this.image, xW, iW * ME)
      }
    }
    const SE = 5 * Math.PI / 180,
      YE = {
        u: NaN,
        v: NaN,
        left: NaN,
        top: NaN,
        scale: NaN,
        heading: NaN
      };
    class yE {
      constructor(WW) {
        this.onTerrainHost = WW, this.terrainHost = null, this.oZ = null, this.worldResize = null, this.worldPx = {
          width: 0,
          height: 0
        }, this.arrowTrack = null, this.arrow = null, this.written = {
          ...YE
        }, this.goalTrack = null, this.goal = null, this.mountTerrain = WW => {
          this.terrainHost = WW, this.onTerrainHost()
        }, this.mountWorld = WW => {
          var iW;
          this.oZ = WW, this.written = {
            ...YE
          }, null === (iW = this.worldResize) || void 0 === iW || iW.disconnect(), this.worldResize = null, WW && (this.worldResize = new ResizeObserver((WW => {
            let [iW] = WW;
            this.worldPx = {
              width: iW.contentRect.width,
              height: iW.contentRect.height
            }, this.written.scale = NaN
          })), this.worldResize.observe(WW))
        }, this.mountArrow = WW => {
          var iW;
          this.arrowTrack = WW, this.arrow = null !== (iW = null === WW || void 0 === WW ? void 0 : WW.querySelector(".GreenvilleNavArrow")) && void 0 !== iW ? iW : null, this.written = {
            ...YE
          }
        }, this.mountGoal = WW => {
          this.goalTrack = WW, WW && (WW.hidden = null === this.goal), this.written.left = NaN
        }
      }
      setGoal(WW) {
        this.goal = WW, this.goalTrack && (this.goalTrack.hidden = null === WW), this.written.left = NaN
      }
      write(WW, iW, OW, mW, EW, NW, PW) {
        const {
          oZ: LW,
          arrowTrack: cW,
          arrow: wW,
          written: tW
        } = this;
        if (!LW || !cW || !wW) return;
        const ZW = Math.abs(Math.atan2(Math.sin(OW - tW.heading), Math.cos(OW - tW.heading))),
          xW = NW !== tW.scale,
          {
            width: lW,
            height: AW
          } = this.worldPx,
          bW = xW || !(Math.hypot((mW - tW.left) * lW, (EW - tW.top) * AW) < 1),
          jW = xW || !(Math.hypot(WW - tW.u, iW - tW.v) * Math.min(lW, AW) * NW < 1);
        bW && (this.written.left = mW, this.written.top = EW, LW.style.transform = `translate(${100*mW}%, ${100*EW}%) scale(${NW})`, this.writeGoal(mW, EW, NW)), jW && (this.written.u = WW, this.written.v = iW, cW.style.transform = `translate(${100*WW}%, ${100*iW}%)`), (xW || ZW >= SE) && (wW.style.transform = `translate(-50%, -50%) scale(${1/NW}) rotate(${180+180*OW/Math.PI}deg)`, this.written.heading = OW), xW && (LW.style.setProperty("--greenville-map-unzoom", String(1 / NW)), LW.style.setProperty("--greenville-map-fade", String(PW)), this.written.scale = NW)
      }
      writeGoal(WW, iW, OW) {
        const {
          goal: mW,
          goalTrack: EW
        } = this;
        if (!mW || !EW) return;
        const NW = WW + mW[0] * OW - .5,
          PW = iW + mW[1] * OW - .5,
          LW = Math.min(1, .4 / Math.max(Math.abs(NW), Math.abs(PW)));
        EW.style.transform = `translate(${100*(.5+NW*LW)}%, ${100*(.5+PW*LW)}%)`
      }
    }
    const TE = "greenvilleNavAddress",
      JE = "greenvilleNavPlots",
      hE = "greenvilleNavMarkers",
      HE = {
        kind: "outside"
      };
    class nE {
      constructor(WW, iW, OW, mW) {
        this.map = WW, this.publishAddress = iW, this.publishPlots = OW, this.publishMarkers = mW, this.address = HE, this.addressKey = wE(HE), this.block = {
          x: NaN,
          y: NaN,
          z: NaN
        }, this.inSewers = !1, this.plots = void 0, this.markers = [], this.terrain = null, this.minimap = void 0, this.homeGate = null, this.fullMap = void 0, this.fullMapOpen = !1, this.fullMapZoom = jE.e, this.zoom = 0, this.lastFrameMs = NaN, this.reducedMotion = null, this.logLocalScale = void 0, this.placeTerrain = () => {
          this.terrain.mount(this.fullMapOpen && this.fullMap.terrainHost ? this.fullMap.terrainHost : this.minimap.terrainHost)
        }, this.minimap = new yE(this.placeTerrain), this.fullMap = new yE(this.placeTerrain);
        const {
          origin: EW,
          size: NW
        } = WW.area;
        this.logLocalScale = Math.log(NW / 80), this.plots = {
          plots: (WW.city ? xm() : []).map(((WW, iW) => {
            let {
              chunk: OW,
              facing: mW
            } = WW;
            return {
              plotId: iW + 1,
              chunkX: OW[0] - EW / im.f.jZ,
              chunkZ: OW[2] - EW / im.f.jZ,
              facing: mW,
              state: "vacant",
              mine: !1
            }
          })),
          animate: !1
        }
      }
      start(WW) {
        this.terrain = new KE(WW, this.map, this.plots.plots)
      }
      dispose() {
        this.terrain.dispose()
      }
      getAddress() {
        return this.address
      }
      isInSewers() {
        return this.inSewers
      }
      isMapShown() {
        return !this.map.city || "outside" !== this.address.kind
      }
      getPlots() {
        return this.plots
      }
      getMarkers() {
        return this.markers
      }
      getHomeGate() {
        return this.homeGate
      }
      setGoal(WW) {
        const {
          origin: iW,
          size: OW
        } = this.map.area;
        this.minimap.setGoal(WW && [(iW + OW - WW.x) / OW, (WW.z - iW) / OW])
      }
      yZ(WW) {
        const iW = [...this.plots.plots];
        for (const [NW, PW, LW] of "plotsAll" === WW[0] ? WW[1] : [WW[1]]) {
          const WW = iW[NW - 1];
          var OW;
          if (WW.state === PW && WW.mine === LW || (iW[NW - 1] = {
              ...WW,
              state: PW,
              mine: LW
            }), WW.state !== PW) null === (OW = this.terrain) || void 0 === OW || OW.forget(WW.chunkX, WW.chunkZ)
        }
        this.plots = {
          plots: iW,
          animate: "plotsOne" === WW[0]
        };
        const mW = iW.find((WW => WW.mine)),
          EW = this.map.area.origin / im.f.jZ;
        this.homeGate = mW ? function(WW, iW, OW) {
          const mW = WW[0] * mm,
            EW = WW[2] * mm,
            NW = mm / 2 + .5;
          return "north" === iW ? [mW + NW, EW - OW] : [mW + mm - NW, EW + mm + OW]
        }([mW.chunkX + EW, 0, mW.chunkZ + EW], mW.facing, 1) : null, this.publishPlots(this.plots)
      }
      receiveMarkers(WW) {
        this.markers = WW.map((WW => {
          const [iW, OW] = [this.toMapUnits(WW[2]), this.toMapUnits(WW[3])];
          return "mapPlace" === WW[0] ? {
            kind: "place",
            place: WW[1],
            x: iW,
            z: OW
          } : {
            kind: "npc",
            face: null === WW[1] ? "npc" : `npc_${WW[1]}`,
            x: iW,
            z: OW
          }
        })), this.publishMarkers(this.markers)
      }
      setFullMapOpen(WW) {
        WW !== this.fullMapOpen && (this.fullMapOpen = WW, this.fullMapZoom = jE.e, this.placeTerrain())
      }
      setFullMapZoom(WW) {
        this.fullMapZoom = WW
      }
      frame(WW, iW, OW) {
        if (!iW) return;
        const mW = Math.floor(iW[0]),
          EW = Math.floor(iW[1]),
          NW = Math.floor(iW[2]),
          {
            origin: PW,
            size: LW
          } = this.map.area;
        if (mW !== this.block.x || EW !== this.block.y || NW !== this.block.z) {
          mW === this.block.x && NW === this.block.z || (this.terrain.focusOn(mW, NW), this.address = cE(mW, NW, WW.cameraHeading, this.address)), this.block = {
            x: mW,
            y: EW,
            z: NW
          };
          const iW = this.map.city && (cW = this.address, wW = EW, tW = this.inSewers, !(wW >= (tW ? -1 : -3)) && ("street" === cW.kind || "junction" === cW.kind || "tile" === cW.kind && !xE.has(cW.district))),
            OW = wE(this.address);
          OW === this.addressKey && iW === this.inSewers || (this.addressKey = OW, this.inSewers = iW, this.publishAddress(this.address))
        }
        var cW, wW, tW;
        const ZW = performance.now(),
          xW = function(WW, iW, OW, mW) {
            return !WW || mW || "tile" === iW.kind && "quarry" === iW.district ? 1 : OW || "plot" !== iW.kind && "tile" !== iW.kind ? 0 : 1
          }(this.map.city, this.address, OW, this.inSewers);
        if (this.zoom !== xW) {
          this.reducedMotion ??= window.matchMedia("(prefers-reduced-motion: reduce)");
          const WW = this.reducedMotion.matches ? 1 : 1 - Math.exp(-(ZW - this.lastFrameMs) / 150);
          this.zoom += (xW - this.zoom) * (Number.isNaN(WW) ? 1 : WW), Math.abs(xW - this.zoom) < .002 && (this.zoom = xW)
        }
        this.lastFrameMs = ZW;
        const lW = (PW + LW - iW[0]) / LW,
          AW = (iW[2] - PW) / LW,
          bW = WW.cameraHeading;
        if (this.fullMapOpen) {
          const {
            zoom: WW,
            x: iW,
            y: OW
          } = this.fullMapZoom;
          this.fullMap.write(lW, AW, bW, iW, OW, WW, 0)
        } else if (this.isMapShown()) {
          const WW = Math.exp(this.zoom * this.logLocalScale),
            iW = lW + (.5 - lW) * this.zoom - lW * WW,
            OW = AW + (.5 - AW) * this.zoom - AW * WW;
          this.minimap.write(lW, AW, bW, iW, OW, WW, this.zoom)
        }
      }
      toMapUnits(WW) {
        return (WW - this.map.area.origin) / im.f.jZ
      }
    }
    const uE = Lm / im.f.jZ,
      oE = `matrix(-1 0 0 1 ${uE} 0)`,
      dE = .08,
      eE = [{
        transform: "scaleY(0)"
      }, {
        transform: "scaleY(1)"
      }],
      vE = [{
        opacity: 1
      }, {
        opacity: 0
      }],
      gE = {
        quarry: lm.mining,
        industry: lm.demolition,
        market: lm.market,
        lumberMill: lm.woodcutting,
        farm: lm.farming,
        dealership: "Light Blue Car"
      },
      DE = {
        drillBay: lm.mining,
        vanBay: "Yellow Kart",
        carPickup: "Light Blue Car",
        demolitionPit: lm.demolition,
        farmField: lm.farming,
        woods: lm.woodcutting
      },
      VE = wm.flatMap(((WW, iW) => WW.map(((WW, OW) => ({
        tile: WW,
        x: 1 + 3 * OW,
        z: 1 + 3 * iW
      }))))),
      pE = VE.flatMap((WW => {
        let {
          tile: iW,
          x: OW,
          z: mW
        } = WW;
        return "residential" === iW.kind ? [] : [{
          tile: iW,
          x: OW,
          z: mW
        }]
      })),
      fE = VE.flatMap((WW => {
        let {
          tile: iW,
          x: OW,
          z: mW
        } = WW;
        return "residential" === iW.kind ? [{
          name: iW.name,
          x: OW,
          z: mW
        }] : []
      })),
      CE = [...mE.eastWest, ...mE.northSouth],
      XE = {
        "--greenville-sewers-fog": 32 / (2 * Lm) * 100 + "%"
      },
      BE = {
        "--greenville-map-tile": 2 / uE * 100 + "cqw"
      };

    function qE(WW, iW) {
      return {
        left: (uE - WW) / uE * 100 + "%",
        top: iW / uE * 100 + "%"
      }
    }

    function RE(WW) {
      let {
        axis: iW,
        line: OW
      } = WW;
      const mW = .3,
        EW = 3 * OW + mW,
        NW = uE - .6;
      return "eastWest" === iW ? {
        x: mW,
        y: EW,
        width: NW,
        height: .4
      } : {
        x: EW,
        y: mW,
        width: .4,
        height: NW
      }
    }

    function GE(WW) {
      let {
        controller: iW,
        full: OW = !1
      } = WW;
      const mW = OW ? iW.fullMap : iW.minimap;
      (0, SW.g)(JE, null), (0, SW.g)(TE, null);
      const EW = iW.isInSewers(),
        {
          plots: NW,
          animate: PW
        } = iW.getPlots(),
        {
          city: LW
        } = iW.map;
      return (0, JW.jsxs)("div", {
        className: kW()("GreenvilleNavMap", {
          Full: OW,
          Sewers: EW
        }),
        style: OW ? BE : void 0,
        children: [(0, JW.jsx)("div", {
          className: "GreenvilleNavMapWorld",
          ref: mW.mountWorld,
          children: (0, JW.jsxs)("div", {
            className: "GreenvilleNavMapPlane",
            children: [LW && (0, JW.jsx)("svg", {
              className: "GreenvilleNavMapPlan",
              viewBox: `0 0 ${uE} ${uE}`,
              preserveAspectRatio: "none",
              shapeRendering: "crispEdges",
              children: (0, JW.jsxs)("g", {
                transform: oE,
                children: [(0, JW.jsx)("rect", {
                  className: "GreenvilleNavGround",
                  width: uE,
                  height: uE
                }), CE.map((WW => (0, JW.jsx)("rect", {
                  className: "GreenvilleNavRoad",
                  ...RE(WW)
                }, WW.name))), pE.map((WW => {
                  let {
                    tile: iW,
                    x: OW,
                    z: mW
                  } = WW;
                  return (0, JW.jsx)("rect", {
                    className: "GreenvilleNavDistrict",
                    "data-district": iW.district,
                    x: OW,
                    y: mW,
                    width: 2,
                    height: 2
                  }, iW.district)
                })), NW.map((WW => (0, JW.jsx)(rE, {
                  plot: WW,
                  animate: PW
                }, WW.plotId)))]
              })
            }), (0, JW.jsx)("div", {
              className: "GreenvilleNavMapTerrainHost",
              ref: mW.mountTerrain
            }), LW && (0, JW.jsxs)(JW.Fragment, {
              children: [(0, JW.jsx)("svg", {
                className: "GreenvilleNavMapLots",
                viewBox: `0 0 ${uE} ${uE}`,
                preserveAspectRatio: "none",
                children: (0, JW.jsx)("g", {
                  transform: oE,
                  children: NW.map((WW => (0, JW.jsx)("rect", {
                    className: kW()("GreenvilleNavLot", {
                      Vacant: "vacant" === WW.state,
                      Loading: "loading" === WW.state,
                      Mine: WW.mine
                    }),
                    x: WW.chunkX + dE,
                    y: WW.chunkZ + dE,
                    width: .84,
                    height: .84
                  }, WW.plotId)))
                })
              }), EW && (0, JW.jsx)("img", {
                className: "GreenvilleNavSewers",
                src: AE,
                alt: "",
                draggable: !1
              }), pE.map((WW => {
                let {
                  tile: iW,
                  x: OW,
                  z: mW
                } = WW;
                const EW = gE[iW.district];
                return EW && (0, JW.jsx)("span", {
                  className: "GreenvilleNavPin GreenvilleNavLandmark",
                  style: qE(OW + 1, mW + 1),
                  children: (0, JW.jsx)(KW.b, {
                    itemName: EW,
                    amount: 0
                  })
                }, iW.district)
              })), OW && (0, JW.jsx)(IE, {}), (0, JW.jsx)(aE, {
                controller: iW
              })]
            }), (0, JW.jsxs)("div", {
              className: "GreenvilleNavArrowTrack",
              ref: mW.mountArrow,
              children: [EW && (0, JW.jsx)("div", {
                className: "GreenvilleNavSewersFog",
                style: XE
              }), (0, JW.jsx)("div", {
                className: "GreenvilleNavArrow",
                children: (0, JW.jsx)("svg", {
                  viewBox: "-1 -1 2 2",
                  children: (0, JW.jsx)("polygon", {
                    points: "0,-0.8 0.62,0.62 0,0.28 -0.62,0.62"
                  })
                })
              })]
            }), NW.map((WW => WW.mine && (0, JW.jsx)("span", {
              className: "GreenvilleNavPin GreenvilleNavHome",
              style: qE(WW.chunkX + .5, WW.chunkZ + ("north" === WW.facing ? 0 : 1)),
              children: (0, JW.jsx)(Ni.c, {
                name: "house"
              })
            }, WW.plotId)))]
          })
        }), !OW && (0, JW.jsx)("div", {
          className: "GreenvilleNavGoalTrack",
          ref: iW.minimap.mountGoal,
          children: (0, JW.jsx)("span", {
            className: "GreenvilleNavPin GreenvilleNavGoal",
            children: (0, JW.jsx)(Ni.c, {
              name: "flag"
            })
          })
        })]
      })
    }

    function IE() {
      return (0, JW.jsxs)(JW.Fragment, {
        children: [pE.map((WW => {
          let {
            tile: iW,
            x: OW,
            z: mW
          } = WW;
          return (0, JW.jsx)("span", {
            className: kW()("GreenvilleNavPlaceName SmallTextBold", {
              UnderLandmark: iW.district in gE
            }),
            style: qE(OW + 1, mW + 1),
            children: tm[iW.district]
          }, iW.district)
        })), fE.map((WW => {
          let {
            name: iW,
            x: OW,
            z: mW
          } = WW;
          return (0, JW.jsx)("span", {
            className: "GreenvilleNavPlaceName Neighbourhood SmallTextLight",
            style: qE(OW + 1, mW + 1),
            children: iW
          }, iW)
        }))]
      })
    }

    function aE(WW) {
      let {
        controller: iW
      } = WW;
      return (0, SW.g)(hE, null), (0, JW.jsx)(JW.Fragment, {
        children: iW.getMarkers().map(((WW, iW) => (0, JW.jsxs)("span", {
          className: "GreenvilleNavPin GreenvilleNavMarker",
          style: qE(WW.x, WW.z),
          children: ["npc" === WW.kind && (0, JW.jsx)(bE.b, {
            icon: WW.face
          }), "place" === WW.kind && (0, JW.jsx)(KW.b, {
            itemName: DE[WW.place],
            amount: 0
          })]
        }, iW)))
      })
    }
    const rE = (0, cW.memo)((function(WW) {
      let {
        plot: iW,
        animate: OW
      } = WW;
      const mW = (0, cW.useRef)(null),
        EW = (0, cW.useRef)(iW.state),
        NW = (0, cW.useRef)(null);
      return (0, cW.useLayoutEffect)((() => {
        var WW;
        const PW = EW.current;
        EW.current = iW.state, PW !== iW.state && (null === (WW = NW.current) || void 0 === WW || WW.cancel(), OW && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && ("built" === iW.state ? NW.current = mW.current.animate(eE, {
          duration: 300,
          easing: "ease-out"
        }) : "vacant" === iW.state && (NW.current = mW.current.animate(vE, {
          duration: 400,
          easing: "ease-in"
        }))))
      }), [iW.state]), (0, cW.useEffect)((() => () => {
        var WW;
        null === (WW = NW.current) || void 0 === WW || WW.cancel()
      }), []), (0, JW.jsxs)(JW.Fragment, {
        children: [(0, JW.jsx)("rect", {
          className: "GreenvilleNavPlotGrass",
          x: iW.chunkX + dE,
          y: iW.chunkZ + dE,
          width: .84,
          height: .84
        }), (0, JW.jsx)("rect", {
          ref: mW,
          className: kW()("GreenvilleNavPlotRoof", {
            Loading: "loading" === iW.state,
            Built: "built" === iW.state,
            Mine: iW.mine
          }),
          x: iW.chunkX + dE,
          y: iW.chunkZ + dE,
          width: .84,
          height: .84
        })]
      })
    }));

    function zE(WW) {
      let {
        controller: iW,
        nav: OW
      } = WW;
      const mW = (0, SW.g)(rm, iW.getView()),
        {
          t: EW
        } = (0, yW.B)(),
        NW = (0, cW.useRef)(null);
      return (0, JW.jsx)(li, {
        open: mW.open,
        onDismiss: iW.dismiss,
        title: EW("greenvilleGame:map"),
        className: "GreenvilleMapBoard",
        children: (0, JW.jsxs)("div", {
          ref: NW,
          className: "GreenvilleMapFrame",
          children: [(0, JW.jsx)(GE, {
            controller: OW,
            full: !0
          }), (0, JW.jsx)(FE, {
            frame: NW,
            nav: OW
          })]
        })
      })
    }

    function FE(WW) {
      let {
        frame: iW,
        nav: OW
      } = WW;
      const {
        t: mW
      } = (0, yW.B)(), EW = (0, WE.b)(iW, !0, "", 1);
      return (0, cW.useEffect)((() => {
        OW.setFullMapZoom(EW.view)
      }), [OW, EW.view]), (0, JW.jsx)(Qm.e, {
        zoom: EW,
        zoomInLabel: mW("greenvilleGame:mapZoomIn"),
        zoomOutLabel: mW("greenvilleGame:mapZoomOut")
      })
    }
    var QE = OW(2080),
      WN = OW(1551);

    function iN(WW) {
      let {
        controller: iW,
        onOpen: OW
      } = WW;
      const [mW, EW] = (0, cW.useState)((() => iW.isMapShown()));
      (0, SW.e)(TE, (() => {
        EW(iW.isMapShown())
      }));
      const NW = (0, CW.e)(),
        {
          isTouchScreen: PW
        } = (0, sW.p)(["isTouchScreen"]),
        {
          t: LW
        } = (0, yW.B)(),
        [wW, tW] = (0, cW.useState)(null);
      return function(WW) {
        (0, cW.useLayoutEffect)((() => {
          if (!WW) return;
          const iW = WW.closest(".GreenvilleHudColumnStack"),
            OW = new ResizeObserver((() => {
              WW.offsetWidth > 0 && iW.style.setProperty("--greenville-map-width", `${WW.offsetWidth}px`)
            }));
          return OW.observe(WW), () => {
            OW.disconnect()
          }
        }), [WW])
      }(wW), (0, JW.jsx)("div", {
        className: kW()("GreenvilleNavRoom", {
          Hidden: NW || !mW
        }),
        children: (0, JW.jsxs)("button", {
          ref: tW,
          type: "button",
          className: "GreenvilleNav",
          "aria-label": LW("greenvilleGame:map"),
          ...(0, WN.d)(OW, "pointerup"),
          onMouseDown: WW => {
            WW.preventDefault()
          },
          children: [(0, JW.jsx)(GE, {
            controller: iW
          }), (0, JW.jsxs)("span", {
            className: "GreenvilleNavOpenHint",
            children: [PW && (0, JW.jsx)(Ni.c, {
              name: "expand",
              className: "GreenvilleNavExpandIcon"
            }), !PW && (0, JW.jsx)(QE.e, {
              noaAction: "OpenTasksAndLeaderboard",
              padHidesKey: !0
            })]
          })]
        })
      })
    }
    const ON = OW.p + "static/media/greenvilleCity.eadd76d06b8dfb594e19.png",
      mN = OW.p + "static/media/greenvilleGrove.71253c8c4ae6c9cacba5.png",
      EN = {
        area: ZE,
        imageUrl: ON,
        city: !0
      },
      NN = {
        area: lE,
        imageUrl: mN,
        city: !1
      };

    function PN(WW) {
      return WW >= 75 ? "face-smile" : WW >= 50 ? "face-diagonal-mouth" : WW >= 25 ? "face-worried" : "face-dizzy"
    }

    function LN(WW) {
      const iW = Math.round(WW);
      return `${iW>0?"+":""}${iW}%`
    }

    function cN(WW) {
      let {
        controller: iW
      } = WW;
      (0, SW.g)(rO, null);
      const OW = iW.getMood();
      return OW ? (0, JW.jsx)(MW.h, {
        placement: "statBars",
        children: (0, JW.jsx)(wN, {
          mood: OW
        })
      }) : null
    }

    function wN(WW) {
      let {
        mood: iW
      } = WW;
      const {
        t: OW
      } = (0, yW.B)(), mW = function(WW) {
        const [, iW] = (0, cW.useState)(0);
        return (0, cW.useEffect)((() => {
          const OW = WW - performance.now();
          if (OW <= 0) return;
          const mW = window.setTimeout((() => {
            iW((WW => WW + 1))
          }), OW);
          return () => {
            window.clearTimeout(mW)
          }
        }), [WW]), WW > performance.now()
      }(iW.restedEndsAt), {
        energy: EW,
        breakEvenEnergy: NW,
        luckPercent: PW
      } = iW, LW = null !== PW && void 0 !== PW ? PW : iW.earningsPercent;
      return (0, JW.jsxs)("div", {
        className: kW()("GreenvilleMoodChip", {
          Exhausted: EW < 25,
          Rested: mW,
          Tired: !mW && EW < NW && EW >= 25,
          Drained: !mW && EW < 25
        }),
        role: "img",
        "aria-label": OW("greenvilleGame:moodEnergyLabel", {
          energy: Math.round(EW)
        }),
        children: [(0, JW.jsx)(Ni.c, {
          name: PN(EW),
          className: "GreenvilleMoodChipFace"
        }), mW && (0, JW.jsx)("span", {
          className: "GreenvilleMoodChipZz",
          children: OW("greenvilleGame:moodRestedGlyph")
        }), (0, JW.jsxs)("div", {
          className: "GreenvilleMoodChipMeter",
          style: {
            "--greenville-break-even": `${NW}%`
          },
          children: [(0, JW.jsx)("div", {
            className: "GreenvilleMoodChipBar",
            children: (0, JW.jsx)("div", {
              className: "GreenvilleMoodChipFill",
              style: {
                transform: `scaleX(${Math.min(100,Math.max(0,EW))/100})`
              }
            })
          }), (0, JW.jsx)("div", {
            className: "GreenvilleMoodChipTick"
          })]
        }), null === PW && (0, JW.jsx)("span", {
          className: "GreenvilleMoodChipCoin",
          "aria-hidden": "true",
          children: (0, JW.jsx)(KW.b, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), (0, JW.jsxs)("span", {
          className: kW()("GreenvilleMoodChipEarnings", {
            Positive: Math.round(LW) > 0,
            Negative: Math.round(LW) < 0
          }),
          children: [null !== PW && (0, JW.jsx)("span", {
            className: "GreenvilleMoodChipLuck",
            children: OW("greenvilleGame:luck")
          }), LN(LW)]
        }), iW.adBoosted && (0, JW.jsx)("span", {
          className: "GreenvilleMoodChipBoost",
          children: (0, JW.jsx)(Ni.c, {
            name: "bolt"
          })
        })]
      })
    }

    function tN(WW) {
      let {
        controller: iW
      } = WW;
      (0, SW.g)(aO, null);
      const OW = iW.getPlace();
      return "hudHome" !== (null === OW || void 0 === OW ? void 0 : OW.kind) || null === OW.runStartedAt ? null : (0, JW.jsx)(ZN, {
        startedAt: OW.runStartedAt
      })
    }

    function ZN(WW) {
      let {
        startedAt: iW
      } = WW;
      const OW = Math.max(0, Math.floor(-(0, dm.e)(iW)));
      return (0, JW.jsx)("div", {
        className: "GreenvilleMarketCountdown",
        role: "timer",
        children: (0, JW.jsxs)("div", {
          className: "GreenvilleMarketCountdownTime FullyFancyText",
          children: [Math.floor(OW / 60), ":", String(OW % 60).padStart(2, "0")]
        })
      })
    }
    const xN = "greenvilleSmugglerView",
      lN = {
        open: !1,
        deals: [],
        soldOutSlots: [],
        rotatesAtMs: 0,
        pending: !1,
        status: null,
        boughtSlot: null,
        boughtCount: 0
      };
    class AN extends ii {
      constructor(WW, iW, OW, mW, EW) {
        super(lN, WW, iW), this.onBought = EW, this.purchases = void 0, this.day = 0, this.buy = WW => {
          const iW = this.getView();
          !iW.open || iW.pending || iW.soldOutSlots.includes(WW) || (this.purchases.push([this.day, WW]), this.set({
            ...iW,
            pending: !0
          }))
        }, this.syncPending = () => {
          const WW = this.getView();
          WW.open && this.set({
            ...WW,
            pending: !this.purchases.sZ()
          })
        }, this.purchases = new QW(mW, (WW => {
          let [iW, mW] = WW;
          OW(iW, mW)
        }), this.syncPending)
      }
      yZ(WW) {
        if ("close" === WW[0]) return void this.close();
        const [, iW, OW, mW, EW, NW] = WW;
        null !== NW && this.purchases.takeAnswer();
        const PW = this.getView();
        if (null !== NW && !PW.open) return;
        this.day = iW;
        const [LW, cW] = null !== NW && void 0 !== NW ? NW : [null, null], wW = {
          open: !0,
          deals: OW,
          soldOutSlots: EW,
          rotatesAtMs: Date.now() + mW,
          pending: !this.purchases.sZ(),
          status: this.getStatus(LW, cW),
          boughtSlot: LW,
          boughtCount: PW.boughtCount + (null === LW ? 0 : 1)
        };
        null === NW ? this.show(wW) : this.set(wW), null !== LW && this.onBought()
      }
      dropPresses() {
        this.purchases.clear()
      }
      getStatus(WW, iW) {
        return null !== WW ? {
          tone: "bought",
          key: "greenvilleGame:smugglerBought"
        } : null === iW ? null : {
          tone: "refused",
          key: iW
        }
      }
    }
    var bN = OW(39888);
    const jN = {
      title: "greenvilleGame:smugglerTitle",
      intro: "greenvilleGame:smugglerIntro",
      buy: "greenvilleGame:smugglerBuy",
      justBought: "greenvilleGame:smugglerJustBought",
      soldOut: "greenvilleGame:smugglerSoldOut",
      amount: "greenvilleGame:smugglerAmount",
      rotatesSoon: "greenvilleGame:smugglerRotatesSoon",
      rotatesMinutes: "greenvilleGame:smugglerRotatesMinutes",
      rotatesHours: "greenvilleGame:smugglerRotatesHours"
    };

    function UN(WW) {
      let {
        controller: iW
      } = WW;
      const OW = (0, SW.g)(xN, iW.getView()),
        mW = RW(),
        {
          t: EW
        } = (0, yW.B)();
      return (0, JW.jsx)(bN.b, {
        keys: jN,
        open: OW.open,
        onDismiss: iW.dismiss,
        wallet: [{
          itemName: qW,
          amount: mW
        }],
        deals: OW.deals.map(((WW, iW) => {
          let [EW, NW, PW] = WW;
          return {
            slot: iW,
            itemName: EW,
            displayName: (0, JW.jsx)(Zi, {
              item: EW
            }),
            enchantmentTier: null,
            amount: NW,
            prices: [{
              itemName: qW,
              amount: PW,
              owned: mW
            }],
            soldOut: OW.soldOutSlots.includes(iW),
            justBought: OW.boughtSlot === iW
          }
        })),
        rotatesAtMs: OW.rotatesAtMs,
        status: null === OW.status ? null : {
          tone: OW.status.tone,
          text: EW(OW.status.key)
        },
        pending: OW.pending,
        boughtCount: OW.boughtCount,
        onBuy: iW.buy
      })
    }
    const kN = [{
        transform: "translateY(100%)",
        opacity: 0
      }, {
        transform: "translateY(0)",
        opacity: 1
      }],
      sN = [{
        transform: "translateY(-100%)",
        opacity: 0
      }, {
        transform: "translateY(0)",
        opacity: 1
      }];

    function MN(WW) {
      return WW ? `${WW.number}|${WW.street.name}` : ""
    }

    function KN(WW) {
      let {
        address: iW,
        large: OW,
        rootRef: mW
      } = WW;
      const EW = function(WW) {
          switch (WW.kind) {
            case "junction":
              return [{
                street: WW.along,
                number: null
              }, {
                street: WW.cross,
                number: null
              }];
            case "plot":
            case "tile":
              return [{
                street: WW.street,
                number: WW.number
              }, null];
            case "street":
              return [{
                street: WW.street,
                number: WW.block
              }, null]
          }
        }(iW),
        NW = OW && "plot" === iW.kind ? iW.neighbourhood : null,
        PW = (0, cW.useRef)(null),
        LW = (0, cW.useRef)(null),
        wW = (0, cW.useRef)(EW),
        tW = (0, cW.useRef)({
          large: OW,
          top: 0,
          height: 0
        }),
        ZW = (0, cW.useRef)([]),
        xW = (0, cW.useRef)(null);
      (0, cW.useLayoutEffect)((() => {
        const WW = wW.current;
        if (wW.current = EW, window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const iW = [];
        if (MN(WW[0]) !== MN(EW[0]) && iW.push(PW.current.animate(kN, {
            duration: 180,
            easing: "ease-out"
          })), EW[1] && !WW[1] && iW.push(LW.current.animate(sN, {
            duration: 220,
            easing: "ease-out"
          })), iW.length > 0) {
          for (const WW of ZW.current) WW.cancel();
          ZW.current = iW
        }
      }), [MN(EW[0]), MN(EW[1])]), (0, cW.useLayoutEffect)((() => {
        var WW;
        const iW = mW.current,
          EW = tW.current;
        tW.current = {
          large: OW,
          top: iW.offsetTop,
          height: iW.offsetHeight
        }, EW.large === OW || 0 === EW.height || 0 === iW.offsetHeight || window.matchMedia("(prefers-reduced-motion: reduce)").matches || (null === (WW = xW.current) || void 0 === WW || WW.cancel(), xW.current = iW.animate([{
          transform: `translateY(${EW.top-iW.offsetTop}px) scale(${EW.height/iW.offsetHeight})`
        }, {
          transform: "none"
        }], {
          duration: 260,
          easing: "ease-out"
        }))
      }), [OW, NW, MN(EW[0]), MN(EW[1])]), (0, cW.useEffect)((() => {
        const WW = mW.current,
          iW = new ResizeObserver((() => {
            tW.current = {
              ...tW.current,
              top: WW.offsetTop,
              height: WW.offsetHeight
            }
          }));
        return iW.observe(WW.parentElement), () => {
          var WW;
          iW.disconnect();
          for (const iW of ZW.current) iW.cancel();
          null === (WW = xW.current) || void 0 === WW || WW.cancel()
        }
      }), [mW]);
      const [lW, AW] = EW;
      return (0, JW.jsxs)("div", {
        ref: mW,
        className: kW()("GreenvilleNavSign", {
          Large: OW
        }),
        children: [(0, JW.jsxs)("div", {
          className: "GreenvilleNavBlade",
          children: [null !== NW && (0, JW.jsx)("span", {
            className: "GreenvilleNavHeader",
            children: NW
          }), (0, JW.jsx)(SN, {
            blade: lW,
            textRef: PW
          })]
        }), AW && (0, JW.jsx)("div", {
          ref: LW,
          className: "GreenvilleNavBlade",
          children: (0, JW.jsx)(SN, {
            blade: AW
          })
        })]
      })
    }

    function SN(WW) {
      let {
        blade: iW,
        textRef: OW
      } = WW;
      return (0, JW.jsxs)("span", {
        ref: OW,
        className: "GreenvilleNavBladeText",
        children: [null !== iW.number && (0, JW.jsx)("span", {
          className: "GreenvilleNavNumber",
          children: iW.number
        }), (0, JW.jsxs)("span", {
          className: "GreenvilleNavStreet",
          children: [iW.street.shortName, " ", (0, JW.jsx)("span", {
            className: "GreenvilleNavSuffix",
            children: iW.street.suffix
          })]
        })]
      })
    }
    const YN = "4rem",
      yN = `translateY(${YN}) scale(1.4)`,
      TN = [{
        transform: yN,
        opacity: 0
      }, {
        transform: yN,
        opacity: 1,
        offset: .12
      }, {
        transform: yN,
        opacity: 1,
        offset: .7,
        easing: "ease-in-out"
      }, {
        transform: "none",
        opacity: 1
      }],
      JN = [{
        opacity: 0
      }, {
        opacity: 1
      }];

    function hN(WW) {
      var iW;
      let {
        controller: OW,
        nav: mW
      } = WW;
      (0, SW.g)(aO, null), (0, SW.g)(TE, null);
      const {
        t: EW
      } = (0, yW.B)(), NW = (0, CW.e)(), PW = (0, cW.useRef)(null), LW = (0, cW.useRef)(null), wW = (0, cW.useRef)(null), tW = (0, cW.useRef)(null), ZW = (0, cW.useRef)(null), xW = (0, cW.useRef)(null), lW = (0, fi.g)("hiddenPlayerNames"), AW = OW.getPlace(), bW = mW.getAddress(), jW = mW.isInSewers(), UW = AW && function(WW, iW, OW, mW, EW) {
        if (mW) return {
          key: "sewers",
          name: WW("greenvilleGame:placeSewers"),
          eyebrow: null
        };
        switch (iW.kind) {
          case "hudTown":
            return "city" !== iW.place ? {
              key: iW.place,
              name: WW(`greenvilleGame:${iW.place}`),
              eyebrow: null
            } : "tile" === OW.kind ? {
              key: `place|${tm[OW.district]}`,
              name: tm[OW.district],
              eyebrow: null
            } : "outside" === OW.kind ? {
              key: "city|outside",
              name: WW("greenvilleGame:placeGreenville"),
              eyebrow: null
            } : null;
          case "hudJob": {
            const OW = bm(WW, iW.place);
            return {
              key: `place|${OW}`,
              name: OW,
              eyebrow: null
            }
          }
          case "hudHome": {
            const OW = iW.isOwner ? WW("greenvilleGame:placeYourHouse") : WW("greenvilleGame:homePlayersHouse", {
                player: (0, Wm.g)(iW.ownerName, EW)
              }),
              mW = `home|${iW.ownerName}|${iW.houseName}`;
            return null === iW.houseName ? {
              key: mW,
              name: OW,
              eyebrow: null
            } : {
              key: mW,
              name: iW.houseName,
              eyebrow: OW
            }
          }
          case "hudSpleef":
            return {
              key: "spleef", name: WW("greenvilleGame:placeSpleef"), eyebrow: null
            }
        }
      }(EW, AW, bW, jW, lW), kW = UW ? UW.key : null;
      if ((0, cW.useLayoutEffect)((() => {
          var WW, iW, OW, mW;
          if (null === kW) return null === (OW = tW.current) || void 0 === OW || OW.cancel(), void(null === (mW = ZW.current) || void 0 === mW || mW.cancel());
          if (PW.current === kW) return;
          if (PW.current = kW, NW) return;
          const EW = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          null === (WW = tW.current) || void 0 === WW || WW.cancel(), tW.current = LW.current.animate(EW ? JN : TN, {
            duration: EW ? 400 : 2200
          }), null === (iW = ZW.current) || void 0 === iW || iW.cancel(), !EW && wW.current && (ZW.current = wW.current.animate(function(WW) {
            const iW = `0 calc(${YN} + ${(1.4-1)*WW}px)`;
            return [{
              translate: "0 0",
              easing: "ease-out"
            }, {
              translate: iW,
              offset: .12
            }, {
              translate: iW,
              offset: .7,
              easing: "ease-in-out"
            }, {
              translate: "0 0"
            }]
          }(LW.current.offsetHeight), {
            duration: 2200
          }))
        }), [kW]), (0, cW.useEffect)((() => () => {
          var WW, iW;
          null === (WW = tW.current) || void 0 === WW || WW.cancel(), null === (iW = ZW.current) || void 0 === iW || iW.cancel()
        }), []), !AW) return null;
      let sW = "outside" === bW.kind || jW ? null : bW;
      return !UW || "plot" !== bW.kind && "tile" !== bW.kind ? UW && sW && (null === (iW = xW.current) || void 0 === iW ? void 0 : iW.key) === UW.key && (sW = xW.current.address) : xW.current = {
        key: UW.key,
        address: bW
      }, (0, JW.jsxs)("div", {
        className: "GreenvilleTopBar",
        children: [UW && (0, JW.jsx)(HN, {
          title: UW,
          tagRef: LW,
          job: jW || "hudJob" !== AW.kind ? null : AW,
          home: jW || "hudHome" !== AW.kind ? null : AW,
          sewers: jW
        }), sW && (0, JW.jsx)(KN, {
          address: sW,
          large: !UW,
          rootRef: wW
        })]
      })
    }

    function HN(WW) {
      let {
        title: iW,
        tagRef: OW,
        job: mW,
        home: EW,
        sewers: NW
      } = WW;
      return (0, JW.jsxs)("div", {
        ref: OW,
        className: kW()("GreenvillePlaceTag", {
          Sewers: NW
        }),
        role: "status",
        children: [null !== iW.eyebrow && (0, JW.jsx)("span", {
          className: "GreenvillePlaceTagEyebrow",
          children: iW.eyebrow
        }), (0, JW.jsx)("strong", {
          className: "GreenvillePlaceTagName",
          children: iW.name
        }), mW && (0, JW.jsx)(nN, {
          job: mW
        }), EW && (0, JW.jsx)(oN, {
          home: EW
        })]
      })
    }

    function nN(WW) {
      let {
        job: iW
      } = WW;
      const {
        t: OW
      } = (0, yW.B)(), {
        level: mW,
        expInto: EW,
        expNeeded: NW
      } = iW, PW = 0 === NW;
      return (0, JW.jsxs)("div", {
        className: "GreenvillePlaceTagRow",
        children: [(0, JW.jsx)("span", {
          className: "GreenvillePlaceTagJob",
          "aria-hidden": "true",
          children: (0, JW.jsx)(KW.b, {
            itemName: lm[iW.job],
            amount: 0
          })
        }), (0, JW.jsx)("span", {
          className: "GreenvillePlaceTagLevel",
          children: OW("greenvilleGame:levelShort", {
            level: mW
          })
        }), (0, JW.jsx)("div", {
          className: "GreenvillePlaceTagBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": PW ? 100 : Math.round(EW / NW * 100),
          children: (0, JW.jsx)("div", {
            className: "GreenvillePlaceTagBarFill",
            style: {
              transform: `scaleX(${PW?1:Math.min(1,EW/NW)})`
            }
          })
        }), !PW && (0, JW.jsxs)("span", {
          className: "GreenvillePlaceTagExp",
          children: [(0, pW.g)(EW), "/", (0, pW.g)(NW)]
        }), PW && (0, JW.jsx)("span", {
          className: "GreenvillePlaceTagMax",
          children: OW("greenvilleGame:levelMax")
        }), null !== iW.status && (0, JW.jsx)(uN, {
          status: iW.status
        })]
      })
    }

    function uN(WW) {
      let {
        status: iW
      } = WW;
      const {
        t: OW
      } = (0, yW.B)();
      switch (iW.kind) {
        case "hudTier":
          return (0, JW.jsxs)("span", {
            className: kW()("GreenvillePlaceChip", {
              Locked: iW.locked
            }),
            children: [iW.locked && (0, JW.jsx)(Ni.c, {
              name: "lock"
            }), OW(`greenvilleGame:${iW.tierKey}`)]
          });
        case "hudBay":
          return (0, JW.jsxs)("span", {
            className: "GreenvillePlaceChip",
            children: [OW("greenvilleGame:demolitionBayObject", {
              material: OW(`greenvilleGame:${iW.materialKey}`),
              object: OW(`greenvilleGame:${iW.objectKey}`)
            }), (0, JW.jsx)("span", {
              className: "GreenvillePlaceChipBar",
              children: (0, JW.jsx)("span", {
                className: "GreenvillePlaceChipBarFill",
                style: {
                  transform: `scaleX(${iW.percent/100})`
                }
              })
            })]
          });
        case "hudBayEmpty":
          return (0, JW.jsx)("span", {
            className: "GreenvillePlaceChip",
            children: OW("greenvilleGame:demolitionYardIncoming")
          });
        case "hudFarmTier":
          return (0, JW.jsx)("span", {
            className: "GreenvillePlaceChip Golden",
            children: OW("greenvilleGame:farmGoldenChance", {
              percent: iW.goldenPercent
            })
          })
      }
    }

    function oN(WW) {
      let {
        home: iW
      } = WW;
      const {
        t: OW
      } = (0, yW.B)();
      return iW.pvp || iW.parkour || !iW.visitorsAllowed ? (0, JW.jsxs)("div", {
        className: "GreenvillePlaceTagRow GreenvillePlaceTagChips",
        children: [iW.pvp && (0, JW.jsx)("span", {
          className: "GreenvillePlaceChip Danger",
          children: OW("greenvilleGame:houseChipPvp")
        }), iW.parkour && (0, JW.jsx)("span", {
          className: "GreenvillePlaceChip",
          children: OW("greenvilleGame:houseChipParkour")
        }), !iW.visitorsAllowed && (0, JW.jsxs)("span", {
          className: "GreenvillePlaceChip Locked",
          children: [(0, JW.jsx)(Ni.c, {
            name: "lock"
          }), OW("greenvilleGame:houseChipVisitorsOff")]
        })]
      }) : null
    }
    const dN = "greenvilleTutorialView",
      eN = "target",
      vN = "home",
      gN = `${LW}go`,
      DN = {
        card: null,
        picker: null,
        homeMarker: !1
      };

    function VN(WW) {
      return null === WW ? "" : "jobs" === WW.kind ? WW.kind : `${WW.owner}|${WW.lineKey}|${WW.action}`
    }
    class pN {
      constructor(WW, iW, OW, mW, EW, NW) {
        this.markers = WW, this.iZ = iW, this.send = OW, this.pacer = mW, this.celebrate = EW, this.nav = NW, this.view = DN, this.picks = void 0, this.waiting = [], this.pressed = new Map, this.moveInTimer = null, this.flushing = !1, this.unsubscribePacer = void 0, this.go = () => {
          this.press(gN)
        }, this.goTo = WW => {
          this.waiting = this.waiting.filter((WW => {
            let {
              command: iW
            } = WW;
            return !iW.startsWith(`${gN} `)
          })), this.press(`${gN} ${WW}`)
        }, this.skip = WW => {
          this.press(`${LW}skip ${WW}`)
        }, this.Kl = WW => {
          const iW = this.view.picker;
          null === iW || iW.movingIn || WW === this.picks.getLatest() || (this.picks.pushLatest(WW), this.set({
            ...this.view,
            picker: {
              ...iW,
              selected: this.picks.getLatest()
            }
          }))
        }, this.moveIn = () => {
          const WW = this.view.picker;
          null === WW || WW.movingIn || (this.queue({
            command: `${LW}movein`,
            picker: !0
          }), this.moveInTimer = setTimeout(this.onMoveInTimedOut, 15e3), this.set({
            ...this.view,
            picker: {
              ...WW,
              movingIn: !0
            }
          }))
        }, this.showLatestPick = () => {
          const WW = this.view.picker;
          null !== WW && this.set({
            ...this.view,
            picker: {
              ...WW,
              selected: this.picks.getLatest()
            }
          })
        }, this.onMoveInTimedOut = () => {
          this.moveInTimer = null;
          const WW = this.view.picker;
          null !== WW && void 0 !== WW && WW.movingIn && (console.warn("Greenville: the server never closed the house picker after Move in"), this.dropPickerPresses(), this.set({
            ...this.view,
            picker: {
              ...WW,
              selected: this.picks.getLatest(),
              movingIn: !1
            }
          }))
        }, this.flush = () => {
          if (!this.flushing) {
            for (this.flushing = !0; this.waiting.length > 0 && this.pacer.tryStart();) this.send(this.waiting.shift().command);
            this.flushing = !1
          }
        }, this.picks = new Wi("", mW, (WW => {
          OW(`${LW}try ${WW}`)
        }), this.showLatestPick), this.unsubscribePacer = mW.subscribe(this.flush)
      }
      getView() {
        return this.view
      }
      yZ(WW) {
        switch (WW[0]) {
          case "tutCard": {
            const [, iW, OW, mW, EW, NW, PW, LW, cW] = WW;
            this.setCard({
              kind: "step",
              owner: iW,
              lineKey: OW,
              byDevice: mW,
              count: EW,
              goal: NW,
              action: PW,
              target: LW && {
                x: LW[0],
                y: LW[1],
                z: LW[2],
                labelKey: LW[3]
              },
              skippable: cW
            });
            break
          }
          case "tutJobs":
            this.setCard({
              kind: "jobs",
              places: WW[1]
            });
            break;
          case "tutHidden":
            this.setCard(null);
            break;
          case "tutPicker": {
            var iW;
            const [, OW, mW, EW] = WW, NW = this.view.picker;
            EW && this.picks.takeAnswer(), this.picks.confirm(mW), this.set({
              ...this.view,
              picker: {
                houses: OW.map((WW => {
                  let [iW, OW, mW] = WW;
                  return {
                    schemName: iW,
                    icon: OW,
                    titleKey: mW
                  }
                })),
                selected: this.picks.getLatest(),
                movingIn: null !== (iW = null === NW || void 0 === NW ? void 0 : NW.movingIn) && void 0 !== iW && iW
              }
            });
            break
          }
          case "tutPickerClosed":
            this.dropPickerPresses(), this.set({
              ...this.view,
              picker: null
            });
            break;
          case "tutCelebrate":
            this.celebrate(WW[1], WW[2]);
            break;
          case "tutHomeMarker":
            this.set({
              ...this.view,
              homeMarker: WW[1]
            })
        }
      }
      getTarget() {
        const WW = this.view.card;
        return "step" === (null === WW || void 0 === WW ? void 0 : WW.kind) ? WW.target : null
      }
      getShownHome() {
        if (!this.view.homeMarker) return null;
        const WW = this.nav.getHomeGate(),
          iW = this.getTarget();
        return null === WW || iW && Math.hypot(iW.x - WW[0], iW.z - WW[1]) < 12 ? null : WW
      }
      frame(WW, iW) {
        if (this.markers.setRender(WW), !this.markers.hasMarkers()) return;
        const OW = this.getTarget();
        OW && this.markers.update(eN, OW.x, OW.y + 1, OW.z, iW);
        const mW = iW && this.getShownHome();
        mW && this.markers.update(vN, mW[0], 2, mW[1], iW)
      }
      dispose() {
        this.dropPickerPresses(), this.forgetPresses(), this.waiting = [], this.unsubscribePacer(), this.markers.dispose()
      }
      setCard(WW) {
        VN(WW) !== VN(this.view.card) && (this.forgetPresses(), this.waiting = this.waiting.filter((WW => {
          let {
            picker: iW
          } = WW;
          return iW
        }))), this.set({
          ...this.view,
          card: WW
        });
        const iW = this.getTarget();
        this.nav.setGoal(iW && {
          x: iW.x,
          z: iW.z
        })
      }
      set(WW) {
        this.view = WW, this.iZ(WW)
      }
      press(WW) {
        const iW = this.waiting.some((iW => iW.command === WW));
        this.pressed.has(WW) || iW || (this.pressed.set(WW, setTimeout((() => {
          this.pressed.delete(WW)
        }), 3e3)), this.queue({
          command: WW,
          picker: !1
        }))
      }
      forgetPresses() {
        for (const WW of this.pressed.values()) clearTimeout(WW);
        this.pressed.clear()
      }
      queue(WW) {
        this.waiting.push(WW), this.flush()
      }
      dropPickerPresses() {
        this.picks.clear(), this.waiting = this.waiting.filter((WW => {
          let {
            picker: iW
          } = WW;
          return !iW
        })), null !== this.moveInTimer && (clearTimeout(this.moveInTimer), this.moveInTimer = null)
      }
    }
    const fN = "GreenvilleHousePickerTitle";

    function CN() {}

    function XN(WW) {
      let {
        controller: iW
      } = WW;
      (0, SW.g)(dN, null);
      const OW = iW.getView().picker;
      return (0, JW.jsx)(ti.b, {
        show: null !== OW,
        forcePointerUnlock: null !== OW,
        close: CN,
        globallyUniqueKey: "greenvilleHousePicker",
        escDoesExit: !1,
        closeOnPressBackground: !1,
        padBackCloses: !1,
        doGameplayStartStopOnShow: !0,
        cameraKeeper: !0,
        ignorePressesAsShown: !0,
        className: "GreenvilleHousePickerOverlay",
        children: null !== OW && (0, JW.jsx)(BN, {
          picker: OW,
          controller: iW
        })
      })
    }

    function BN(WW) {
      let {
        picker: iW,
        controller: OW
      } = WW;
      const {
        t: mW
      } = (0, yW.B)();
      return (0, JW.jsxs)("section", {
        className: "GreenvilleHousePicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": fN,
        children: [(0, JW.jsx)("h2", {
          id: fN,
          className: "GreenvilleHousePickerTitle",
          children: mW("greenvilleGame:tutPickerTitle")
        }), (0, JW.jsx)("div", {
          className: "GreenvilleHousePickerHouses",
          children: iW.houses.map((WW => {
            let {
              schemName: EW,
              icon: NW,
              titleKey: PW
            } = WW;
            const LW = EW === iW.selected;
            return (0, JW.jsxs)("button", {
              type: "button",
              className: kW()("GreenvilleHousePickerHouse", {
                Selected: LW
              }),
              "aria-pressed": LW,
              disabled: iW.movingIn,
              "data-pad-default-focus": LW || void 0,
              onClick: () => {
                OW.Kl(EW)
              },
              children: [(0, JW.jsx)("img", {
                src: `/textures/games/greenville/${NW}`,
                alt: "",
                draggable: !1
              }), (0, JW.jsx)("span", {
                className: "GreenvilleHousePickerHouseName",
                children: mW(`greenvilleGame:${PW}`)
              })]
            }, EW)
          }))
        }), (0, JW.jsx)(Pi.n, {
          className: "GreenvilleHousePickerMoveIn",
          loading: iW.movingIn,
          onClick: OW.moveIn,
          children: mW("greenvilleGame:tutPickerMoveIn")
        })]
      })
    }
    var qN = OW(39677);
    const RN = {
      farm: "farming",
      lumberMill: "woodcutting",
      quarry: "mining",
      marketStreet: "market",
      demolitionYard: "demolition"
    };

    function GN(WW) {
      let {
        controller: iW,
        hud: OW
      } = WW;
      (0, SW.g)(dN, null);
      const mW = iW.getView().card;
      return (0, JW.jsxs)(JW.Fragment, {
        children: ["step" === (null === mW || void 0 === mW ? void 0 : mW.kind) && (0, JW.jsx)(IN, {
          card: mW,
          controller: iW,
          hud: OW
        }), "jobs" === (null === mW || void 0 === mW ? void 0 : mW.kind) && (0, JW.jsx)(aN, {
          card: mW,
          controller: iW
        })]
      })
    }

    function IN(WW) {
      let {
        card: iW,
        controller: OW,
        hud: mW
      } = WW;
      const {
        t: EW
      } = (0, yW.B)(), {
        isTouchScreen: NW
      } = (0, sW.p)(["isTouchScreen"]);
      (0, SW.g)(aO, null);
      const PW = mW.getPlace(),
        LW = "hudJob" === (null === PW || void 0 === PW ? void 0 : PW.kind) && "quarry" === PW.place,
        cW = EW(`greenvilleGame:${iW.lineKey}${iW.byDevice&&NW?"Touch":""}`, {
          count: (0, pW.g)(iW.count),
          goal: (0, pW.g)(iW.goal),
          target: iW.target && EW(iW.target.labelKey)
        }),
        wW = iW.goal > 0,
        tW = "go" === iW.action && (0, JW.jsxs)(Pi.n, {
          className: "GreenvilleTutorialCardGo",
          touchPressOn: "pointerup",
          onClick: OW.go,
          children: [EW("greenvilleGame:tutGo"), !NW && !LW && (0, JW.jsx)(QE.e, {
            className: "GreenvilleTutorialCardKey",
            noaAction: "SpecialAction2",
            padHidesKey: !0
          })]
        });
      return (0, JW.jsxs)(zN, {
        heading: (0, JW.jsxs)(JW.Fragment, {
          children: [(0, JW.jsx)("span", {
            className: "GreenvilleTutorialCardLine",
            children: cW
          }), wW && (0, JW.jsxs)("span", {
            className: "GreenvilleTutorialCardCount",
            children: [(0, pW.g)(Math.min(iW.count, iW.goal)), "/", (0, pW.g)(iW.goal)]
          })]
        }),
        compactAction: tW,
        children: [wW && (0, JW.jsx)("div", {
          className: "GreenvilleTutorialCardBar",
          "aria-hidden": "true",
          children: (0, JW.jsx)("span", {
            style: {
              width: `${Math.min(100,100*iW.count/iW.goal)}%`
            }
          })
        }), (tW || iW.skippable) && (0, JW.jsxs)("div", {
          className: "GreenvilleTutorialCardActions",
          children: [tW, iW.skippable && (0, JW.jsx)(rN, {
            owner: iW.owner,
            controller: OW
          })]
        })]
      })
    }

    function aN(WW) {
      let {
        card: iW,
        controller: OW
      } = WW;
      const {
        t: mW
      } = (0, yW.B)();
      return (0, JW.jsxs)(zN, {
        heading: (0, JW.jsx)("span", {
          className: "GreenvilleTutorialCardLine",
          children: mW("greenvilleGame:tutJobsTitle")
        }),
        children: [(0, JW.jsx)("ul", {
          className: "GreenvilleTutorialCardJobs",
          children: iW.places.map((WW => (0, JW.jsxs)("li", {
            className: "GreenvilleTutorialCardJob",
            children: [(0, JW.jsx)("span", {
              className: "GreenvilleTutorialCardJobIcon",
              "aria-hidden": "true",
              children: (0, JW.jsx)(KW.b, {
                itemName: lm[RN[WW]],
                amount: 0
              })
            }), (0, JW.jsx)("span", {
              className: "GreenvilleTutorialCardJobName",
              children: bm(mW, WW)
            }), (0, JW.jsx)(Pi.n, {
              className: "GreenvilleTutorialCardGo",
              touchPressOn: "pointerup",
              onClick: () => {
                OW.goTo(WW)
              },
              children: mW("greenvilleGame:tutGo")
            })]
          }, WW)))
        }), (0, JW.jsx)("div", {
          className: "GreenvilleTutorialCardActions",
          children: (0, JW.jsx)(rN, {
            owner: "guide",
            controller: OW
          })
        })]
      })
    }

    function rN(WW) {
      let {
        owner: iW,
        controller: OW
      } = WW;
      const {
        t: mW
      } = (0, yW.B)();
      return (0, JW.jsx)(Pi.h, {
        className: "GreenvilleTutorialCardSkip",
        touchPressOn: "pointerup",
        onClick: () => {
          OW.skip(iW)
        },
        children: mW("guide" === iW ? "greenvilleGame:tutSkip" : "greenvilleGame:tutKnowThis")
      })
    }

    function zN(WW) {
      let {
        heading: iW,
        compactAction: OW,
        children: mW
      } = WW;
      const EW = (0, qN.e)(),
        [NW, PW] = (0, cW.useState)(!1),
        LW = EW && !NW;
      return (0, JW.jsxs)("div", {
        className: kW()("GreenvilleTrackerCard GreenvilleTutorialCard", {
          Compact: LW
        }),
        children: [(0, JW.jsxs)("div", {
          className: "GreenvilleTutorialCardHead",
          children: [EW && (0, JW.jsxs)("button", {
            type: "button",
            className: "GreenvilleTutorialCardToggle",
            "aria-expanded": NW,
            ...(0, WN.d)((() => {
              PW(!NW)
            }), "pointerup"),
            children: [iW, (0, JW.jsx)("span", {
              className: "GreenvilleTutorialCardChevron",
              "aria-hidden": "true",
              children: NW ? "\u25b4" : "\u25be"
            })]
          }), !EW && iW, LW && OW]
        }), !LW && mW]
      })
    }

    function FN(WW) {
      let {
        controller: iW
      } = WW;
      (0, SW.g)(dN, null), (0, SW.g)(JE, null);
      const {
        isTouchScreen: OW
      } = (0, sW.p)(["isTouchScreen"]), {
        t: mW
      } = (0, yW.B)(), EW = iW.getTarget(), NW = iW.getShownHome();
      return null === EW && null === NW ? null : (0, JW.jsxs)("div", {
        className: "GreenvilleMarketWaypoints",
        children: [null !== EW && (0, JW.jsx)(Rm, {
          bind: iW.markers.bindMarker(eN),
          house: !0,
          label: mW(EW.labelKey),
          extra: OW && (0, JW.jsx)(Ni.c, {
            name: "hand-back-point-up",
            className: "SmallTextBold TouchTutorialIcon GreenvilleTutorialHand"
          }),
          children: (0, JW.jsx)(Ni.c, {
            name: "flag"
          })
        }), null !== NW && (0, JW.jsx)(Rm, {
          bind: iW.markers.bindMarker(vN),
          house: !0,
          label: mW("greenvilleGame:tutMarkHome"),
          children: (0, JW.jsx)(Ni.c, {
            name: "house"
          })
        })]
      })
    }
    const QN = function(WW, iW, OW, EW) {
      let NW, {
        localPlayerId: PW
      } = EW;
      const LW = new jW((WW => {
          wW.l.iZ(bW, WW)
        })),
        UW = new Sm((WW => {
          wW.l.iZ(Km, WW)
        })),
        kW = {
          onGain: () => {
            NW.playSound(PW, "rpgHandleCoins1", .5, .9 + .3 * Math.random())
          },
          onCoinLanded: (WW, iW) => {
            NW.playSound(PW, "pickUp", .3, 1 + .5 * WW / Math.max(1, iW - 1))
          }
        },
        sW = [],
        MW = {
          open: WW => {
            for (const iW of sW) iW !== WW && iW.onMenuClosed();
            (0, lW.H)()
          },
          close: lW.m,
          dismiss: lW.q
        },
        KW = new tW.c,
        SW = new LO((WW => {
          wW.l.iZ(NO, WW)
        }), MW, (WW => {
          NW.sendCommand(null === WW ? mW : `${mW} ${WW}`)
        }), KW),
        YW = new Ei((WW => {
          wW.l.iZ(Oi, WW)
        }), MW, (WW => {
          NW.sendCommand(`demolition pick ${WW}`)
        }), KW),
        yW = new Ti((WW => {
          wW.l.iZ(Yi, WW)
        }), MW, (WW => {
          NW.sendCommand(`garage pick ${WW}`)
        }), KW),
        TW = new om((WW => {
          wW.l.iZ(nm, WW)
        })),
        JW = new zO((WW => {
          wW.l.iZ(aO, WW)
        }), (WW => {
          wW.l.iZ(rO, WW)
        })),
        hW = new nE(function(WW) {
          return "profIsland" === WW ? NN : EN
        }(OW), (WW => {
          wW.l.iZ(TE, WW)
        }), (WW => {
          wW.l.iZ(JE, WW)
        }), (WW => {
          wW.l.iZ(hE, WW)
        })),
        HW = new Fm((WW => {
          wW.l.iZ(rm, WW)
        }), MW, hW);
      let nW = null,
        uW = null;
      const oW = new Di((WW => {
          wW.l.iZ(vi, WW)
        }), (WW => {
          wW.l.iZ(gi, WW)
        }), MW, (WW => {
          NW.sendCommand(WW)
        }), KW),
        dW = new JO((WW => {
          wW.l.iZ(YO, WW)
        }), (WW => {
          wW.l.iZ(yO, WW)
        }), MW, (WW => {
          NW.sendCommand(WW)
        }), KW),
        vW = new AN((WW => {
          wW.l.iZ(xN, WW)
        }), MW, ((WW, iW) => {
          NW.sendCommand(`smuggle ${WW} ${iW}`)
        }), KW, (() => {
          (0, ZW.e)(NW, PW)
        }));
      sW.push(SW, YW, yW, oW, dW, vW, HW);
      let gW = null,
        DW = null,
        VW = null;
      return {
        onCreate: WW => {
          NW = WW, hW.start(WW), nW = new am(TW), uW = new pN(new AW.d(Im, "greenvilleGame:marketDistance"), (WW => {
            wW.l.iZ(dN, WW)
          }), (iW => {
            WW.sendCommand(iW)
          }), KW, UW.celebrate, hW), gW = (0, lW.O)((0, cW.createElement)(cW.Fragment, null, (0, cW.createElement)(eW, {
            controller: LW
          }), (0, cW.createElement)(Jm, {
            controller: UW
          }), (0, cW.createElement)(Bm, {
            market: TW,
            markers: nW
          }), (0, cW.createElement)(FN, {
            controller: uW
          }), (0, cW.createElement)(XN, {
            controller: uW
          }), (0, cW.createElement)(gm, {
            controller: TW
          }), (0, cW.createElement)(hN, {
            controller: JW,
            nav: hW
          }), (0, cW.createElement)(cN, {
            controller: JW
          }), (0, cW.createElement)(jm, {
            controller: JW
          }, (0, cW.createElement)(GN, {
            controller: uW,
            hud: JW
          }), (0, cW.createElement)(rW, {
            sounds: kW
          }), (0, cW.createElement)(iN, {
            controller: hW,
            onOpen: HW.open
          }), (0, cW.createElement)(IO, {
            controller: dW
          }), (0, cW.createElement)(Vm, {
            controller: TW
          }), (0, cW.createElement)(EO, {
            controller: oW
          })), (0, cW.createElement)(tN, {
            controller: JW
          })), {
            content: (0, cW.createElement)(cW.Fragment, null, (0, cW.createElement)(ZO, {
              controller: SW
            }), (0, cW.createElement)(Si, {
              controller: YW
            }), (0, cW.createElement)(ni, {
              controller: yW
            }), (0, cW.createElement)(mO, {
              controller: oW
            }), (0, cW.createElement)(RO, {
              controller: dW
            }), (0, cW.createElement)(UN, {
              controller: vW
            }), (0, cW.createElement)(zE, {
              controller: HW,
              nav: hW
            })),
            onClose: () => {
              for (const WW of sW) WW.onMenuClosed()
            }
          }), DW = (0, lW.L)(HW.open), VW = (0, xW.y)({
            id: "greenvilleMap",
            labelKey: "greenvilleGame:map",
            icon: {
              kind: "item",
              name: "Compass"
            },
            panel: !0,
            onClick: HW.open
          })
        },
        onClose: () => {
          gW(), DW(), VW(), hW.dispose(), SW.dropPresses(), YW.dropPresses(), yW.dropPresses(), nW.waypoints.dispose(), oW.dropPresses(), dW.dropPresses(), uW.dispose(), vW.dropPresses(), KW.dispose()
        },
        onAfterRender: (WW, iW) => {
          const OW = NW.getPositionView(PW);
          nW.frame(iW, OW), uW.frame(iW, OW), hW.frame(iW, OW, NW.isLocalPlayerInVehicle())
        },
        onReceivedMessageFromServer: (WW, iW) => {
          "greenvilleBackpack" === WW ? LW.yZ(iW) : "greenvilleOreBuyer" === WW ? SW.yZ(iW) : "greenvilleLumberMill" === WW ? oW.yZ(iW) : "greenvilleDemolition" === WW ? YW.yZ(iW) : "greenvilleGarage" === WW ? yW.yZ(iW) : "greenvilleFarmBoard" === WW ? dW.yZ(iW) : "greenvilleSmuggler" === WW ? vW.yZ(iW) : "greenvilleMarket" === WW ? TW.yZ(iW) : "greenvilleHud" === WW ? JW.yZ(iW) : "greenvilleLevelUp" === WW ? UW.yZ(iW) : "greenvillePlots" === WW ? hW.yZ(iW) : "greenvilleMapMarkers" === WW ? hW.receiveMarkers(iW) : "greenvilleTutorial" === WW && uW.yZ(iW)
        }
      }
    }
  },
  40751: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW,
      e: () => PW
    });
    var mW = OW(5725);
    const EW = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      NW = [150, 150, 150],
      PW = -2147483648;
    class LW {
      constructor(WW) {
        this.averages = WW, this.byId = new Map
      }
      get(WW) {
        var iW, OW, PW, LW, cW;
        const wW = this.byId.get(WW);
        if (void 0 !== wW) return wW;
        const tW = null !== (iW = null === (OW = mW.j[WW]) || void 0 === OW ? void 0 : OW.name) && void 0 !== iW ? iW : "",
          ZW = tW.split("|")[0],
          xW = null !== (PW = this.averages[tW]) && void 0 !== PW ? PW : this.averages[ZW],
          lW = null !== (LW = null !== (cW = null === xW || void 0 === xW ? void 0 : xW[0]) && void 0 !== cW ? cW : EW[ZW]) && void 0 !== LW ? LW : 0 === (null === xW || void 0 === xW ? void 0 : xW.length) ? null : NW;
        return this.byId.set(WW, lW), lW
      }
      getDrawnIds() {
        const WW = new Uint8Array(65536);
        for (let iW = 1; iW < 65536; iW++) void 0 !== mW.j[iW] && null !== this.get(iW) && (WW[iW] = 1);
        return WW
      }
      drawPixel(WW, iW, OW, mW, EW, NW) {
        const LW = function(WW, iW, OW) {
            const mW = WW - iW + (WW - OW);
            return Math.max(.65, Math.min(1.2, .97 + .055 * mW))
          }(mW, EW === PW ? mW : EW, NW === PW ? mW : NW),
          cW = this.get(OW);
        WW[iW] = cW[0] * LW, WW[iW + 1] = cW[1] * LW, WW[iW + 2] = cW[2] * LW, WW[iW + 3] = 255
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);