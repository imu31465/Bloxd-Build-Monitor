export const id = 269;
export const ids = [269];
export const modules = {
  40278: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU,
      h: () => yU,
      i: () => QU
    });
    var cU = zU(61);

    function yU(UU) {
      return FU(UU, oU)
    }

    function QU(UU) {
      return FU(UU, DU)
    }

    function AU(UU) {
      return `${Math.floor(UU/60)}:${String(UU%60).padStart(2,"0")}`
    }

    function FU(UU, XU) {
      const [, zU] = (0, cU.useState)(null);
      return (0, cU.useEffect)((() => {
        if (0 === UU) return;
        const cU = window.setInterval((() => {
          const cU = XU(UU);
          zU((XU => (null === XU || void 0 === XU ? void 0 : XU.endsAt) === UU && XU.value === cU ? XU : {
            endsAt: UU,
            value: cU
          }))
        }), 250);
        return () => {
          window.clearInterval(cU)
        }
      }), [UU, XU]), XU(UU)
    }

    function oU(UU) {
      return (UU - performance.now()) / 1e3
    }

    function DU(UU) {
      return Math.max(0, Math.ceil(oU(UU)))
    }
  },
  40303: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => yU
    });
    var cU = zU(40307);
    async function yU() {
      const {
        averageColors: UU
      } = await zU.e(222).then((() => zU(34975)));
      return new cU.c(UU)
    }
  },
  40281: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => oU
    });
    var cU = zU(37414),
      yU = zU(1193),
      QU = zU(1266),
      AU = zU(39278),
      FU = zU(39331);
    class oU {
      constructor(UU, XU) {
        var zU;
        this.classes = UU, this.distanceKey = XU, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.kp = !1, this.QG = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.QG), null === (zU = window.visualViewport) || void 0 === zU || zU.addEventListener("resize", this.QG)
      }
      bindMarker(UU) {
        const XU = this.refs.get(UU);
        if (XU) return XU;
        const zU = XU => {
          var cU;
          null === (cU = this.markers.get(UU)) || void 0 === cU || cU.stopObserving(), this.markers.delete(UU), XU && !this.kp ? (this.markers.set(UU, this.mount(XU)), this.refs.set(UU, zU)) : this.refs.delete(UU)
        };
        return this.refs.set(UU, zU), zU
      }
      hasMarkers() {
        return this.markers.size > 0
      }
      setRender(UU) {
        this.render = UU
      }
      update(UU, XU, zU, cU, yU) {
        const QU = this.markers.get(UU);
        QU && (QU.target ??= [0, 0, 0], QU.target[0] = XU, QU.target[1] = zU, QU.target[2] = cU, this.place(QU), this.dc(QU, yU && Math.hypot(XU - yU[0], zU - yU[1], cU - yU[2])))
      }
      dispose() {
        var UU;
        this.kp = !0, window.removeEventListener("resize", this.QG), null === (UU = window.visualViewport) || void 0 === UU || UU.removeEventListener("resize", this.QG);
        for (const XU of this.markers.values()) XU.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(UU) {
        const {
          render: XU,
          viewport: zU
        } = this;
        if (!XU || !UU.target) return;
        const cU = (50 - XU.screenBandPct.y) / 100 * zU.height,
          yU = {
            x: UU.halfSize.width + 8,
            top: UU.halfSize.height + 8,
            bottom: UU.halfSize.height + UU.labelsBelow + cU
          },
          QU = XU.projectWorldPosToViewport(UU.target),
          oU = null !== QU && void 0 !== QU ? QU : XU.projectWorldPosToScreenPos(UU.target),
          DU = (0, FU.d)({
            x: oU.x,
            y: oU.y,
            text: QU
          }, yU, zU);
        (0, AU.d)(UU.root, Math.round(100 * DU.x) / 100, Math.round(100 * DU.y) / 100)
      }
      dc(UU, XU) {
        if (null === XU) return void(null !== UU.metres && (UU.metres = null, UU.distance.textContent = ""));
        const zU = Date.now();
        (null === UU.metres || (0, cU.b)(XU, UU.metres, UU.metresShownAt)) && (UU.metres = Math.round(XU), UU.metresShownAt = zU, UU.distance.textContent = (0, yU.A)(QU.h.get().getCurrentLanguageCode(), this.distanceKey, {
          distance: String(UU.metres)
        }))
      }
      mount(UU) {
        const XU = {
            root: UU,
            distance: UU.querySelector(`.${this.classes.distance}`),
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
          zU = UU.querySelector(`.${this.classes.labels}`),
          cU = new ResizeObserver((() => {
            XU.halfSize = {
              width: Math.max(UU.offsetWidth, zU.offsetWidth) / 2,
              height: UU.offsetHeight / 2
            }, XU.labelsBelow = zU.offsetTop + zU.offsetHeight - UU.offsetHeight, this.place(XU)
          }));
        return cU.observe(UU, {
          box: "border-box"
        }), cU.observe(zU, {
          box: "border-box"
        }), XU.stopObserving = () => {
          cU.disconnect()
        }, XU
      }
    }
  },
  40296: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => Jy
    });
    const cU = "ore sell",
      yU = "lumber ",
      QU = "farm ",
      AU = ["market", "demolition", "mining", "woodcutting", "farming"];
    var FU = zU(61),
      oU = zU(31),
      DU = zU(39374),
      EU = zU(37325);
    const YU = "greenvilleBackpackView";
    class NU {
      constructor(UU) {
        this.UY = UU, this.view = null, this.arrivalToken = 0, this.showToken = 0
      }
      getView() {
        return this.view
      }
      PY(UU) {
        if ("hide" === UU[0]) this.view = null;
        else if ("show" === UU[0]) {
          const XU = UU[3];
          this.view = {
            xY: UU[1],
            shardsPerItem: UU[2],
            total: XU.reduce(((UU, XU) => {
              let [, zU] = XU;
              return UU + zU
            }), 0),
            contents: XU,
            arrival: null,
            showToken: ++this.showToken
          }
        } else {
          if (null === this.view) return void console.warn(`[greenville] backpack ${UU[0]} with no backpack shown`);
          {
            var XU, zU;
            const cU = UU[1],
              yU = this.view.contents.find((UU => {
                let [XU] = UU;
                return XU === cU
              })),
              QU = this.view.contents.filter((UU => {
                let [XU] = UU;
                return XU !== cU
              })),
              AU = null !== (XU = null === yU || void 0 === yU ? void 0 : yU[1]) && void 0 !== XU ? XU : 0,
              FU = null !== (zU = null === yU || void 0 === yU ? void 0 : yU[2]) && void 0 !== zU ? zU : 0;
            "shard" === UU[0] ? this.view = {
              ...this.view,
              contents: [...QU, [cU, AU, FU + 1]]
            } : this.view = {
              ...this.view,
              total: this.view.total + 1,
              contents: [...QU, [cU, AU + 1, 0]],
              arrival: {
                item: cU,
                token: ++this.arrivalToken,
                fromShards: FU > 0
              }
            }
          }
        }
        this.UY(this.view)
      }
    }
    var IU = zU(1106),
      pU = zU.n(IU),
      aU = zU(27),
      tU = zU(37318),
      gU = zU(1993),
      kU = zU(1492),
      GU = zU(2058),
      BU = zU(1193);
    const ZU = "data:image/png;base64,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";
    var RU = zU(1305);
    const PU = (0, FU.forwardRef)((function(UU, XU) {
      let {
        contents: zU,
        xY: cU,
        full: yU,
        children: QU
      } = UU;
      const AU = [...zU].sort(((UU, XU) => {
        let [zU] = UU, [cU] = XU;
        return zU.localeCompare(cU)
      }));
      let FU = 0;
      return (0, RU.jsxs)("div", {
        ref: XU,
        className: "GreenvilleBackpackBag",
        children: [QU, (0, RU.jsx)("img", {
          className: pU()("GreenvilleBackpackArt", {
            Full: yU
          }),
          src: ZU,
          alt: "",
          draggable: !1
        }), (0, RU.jsx)("div", {
          className: "GreenvilleBackpackWindow",
          children: AU.map((UU => {
            let [XU, zU] = UU;
            const yU = Math.min(1 - FU, zU / cU),
              QU = (0, RU.jsx)(dU, {
                item: XU,
                below: FU,
                share: yU
              }, XU);
            return FU += yU, QU
          }))
        })]
      })
    }));

    function WU() {
      const UU = new Image;
      UU.src = ZU, UU.decode().catch((UU => {
        console.error("[greenville] backpack art failed to load", UU)
      }))
    }
    const dU = (0, FU.memo)((function(UU) {
        let {
          item: XU,
          below: zU,
          share: cU
        } = UU;
        return (0, RU.jsx)("div", {
          className: "GreenvilleBackpackOre",
          style: {
            bottom: `calc(var(--rise) * ${zU})`,
            height: `calc(var(--rise) * ${cU} + var(--slant))`
          },
          children: Array.from({
            length: 18
          }, ((UU, zU) => (0, RU.jsx)("div", {
            className: "GreenvilleBackpackOreTile",
            children: (0, RU.jsx)(gU.c, {
              itemName: XU,
              amount: 0
            })
          }, zU)))
        })
      })),
      LU = [{
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
      eU = [{
        transform: "scale(1.3)"
      }, {
        transform: "scale(1)"
      }];
    let CU = 1;

    function wU(UU) {
      let {
        controller: XU
      } = UU;
      (0, kU.j)(YU, null), (0, FU.useEffect)(WU, []);
      const zU = XU.getView();
      return null === zU ? null : (0, RU.jsx)(tU.e, {
        placement: "bottomLeft",
        children: (0, RU.jsx)(qU, {
          view: zU
        })
      })
    }

    function qU(UU) {
      let {
        view: XU
      } = UU;
      const {
        t: zU
      } = (0, BU.I)(), {
        isTouchScreen: cU
      } = (0, aU.q)(["isTouchScreen"]), [yU, QU] = (0, FU.useState)([]), AU = (0, FU.useRef)(null), oU = (0, FU.useRef)(null), DU = (0, FU.useRef)([]), EU = (0, FU.useRef)({
        arrival: XU.arrival,
        showToken: XU.showToken
      }), {
        arrival: YU,
        showToken: NU
      } = XU;
      (0, FU.useLayoutEffect)((() => {
        var UU;
        if (NU !== EU.current.showToken) QU([]);
        else if (null !== YU && YU.token !== (null === (UU = EU.current.arrival) || void 0 === UU ? void 0 : UU.token) && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          const UU = {
            id: CU++,
            item: YU.item,
            fromShards: YU.fromShards,
            driftEm: 1.4 * (Math.random() - .5),
            spinDeg: 70 * (Math.random() - .5)
          };
          QU((XU => XU.length < 6 ? [...XU, UU] : XU))
        }
        EU.current = {
          arrival: YU,
          showToken: NU
        }
      }), [YU, NU]), (0, FU.useEffect)((() => () => {
        for (const UU of DU.current) UU.cancel()
      }), []);
      const IU = (0, FU.useCallback)((() => {
          for (const UU of DU.current) UU.cancel();
          DU.current = [AU.current.animate(LU, {
            duration: 300,
            easing: "ease-out"
          }), oU.current.animate(eU, {
            duration: 220,
            easing: "ease-out"
          })]
        }), []),
        tU = (0, FU.useCallback)((UU => {
          QU((XU => XU.filter((XU => XU.id !== UU)))), IU()
        }), [IU]),
        kU = XU.total - yU.length,
        ZU = kU >= XU.xY,
        WU = XU.contents.map((UU => {
          let [zU, cU, QU] = UU;
          const AU = yU.filter((UU => UU.item === zU)),
            FU = AU.some((UU => UU.fromShards));
          return [zU, cU - AU.length, FU ? XU.shardsPerItem : QU]
        })),
        dU = WU.filter((UU => {
          let [, XU, zU] = UU;
          return XU > 0 || zU > 0
        })).reverse().slice(0, 4),
        wU = (0, GU.q)("SpecialAction2");
      return (0, RU.jsxs)("div", {
        className: "GreenvilleBackpack",
        children: [(0, RU.jsxs)("div", {
          className: "GreenvilleBackpackCount SmallTextBold",
          children: [(0, RU.jsx)("span", {
            ref: oU,
            className: pU()("GreenvilleBackpackTotal", {
              Full: ZU
            }),
            children: kU
          }), (0, RU.jsxs)("span", {
            className: "GreenvilleBackpackCapacity",
            children: ["/ ", XU.xY]
          })]
        }), (0, RU.jsxs)("div", {
          className: "GreenvilleBackpackRow",
          children: [(0, RU.jsx)(PU, {
            ref: AU,
            contents: WU,
            xY: XU.xY,
            full: ZU,
            children: yU.map((UU => (0, RU.jsx)(SU, {
              drop: UU,
              onLanded: tU
            }, UU.id)))
          }), (0, RU.jsxs)("div", {
            className: "GreenvilleBackpackInfo",
            children: [dU.length > 0 && (0, RU.jsx)("div", {
              className: "GreenvilleBackpackTallies",
              children: dU.map((UU => {
                let [zU, cU, yU] = UU;
                return (0, RU.jsxs)("div", {
                  className: "GreenvilleBackpackTally",
                  children: [(0, RU.jsx)("div", {
                    className: "GreenvilleBackpackTallyIcon",
                    children: (0, RU.jsx)(gU.c, {
                      itemName: zU,
                      amount: 0
                    })
                  }), cU > 0 && (0, RU.jsxs)("span", {
                    className: "SmallTextBold",
                    children: ["\xd7", cU]
                  }), yU > 0 && (0, RU.jsx)(OU, {
                    shards: yU,
                    shardsPerItem: XU.shardsPerItem
                  })]
                }, zU)
              }))
            }), ZU && (0, RU.jsxs)("div", {
              className: "GreenvilleBackpackFullLine",
              role: "status",
              children: [(0, RU.jsx)("span", {
                className: "GreenvilleBackpackFullTitle SmallTextBold",
                children: zU("greenvilleGame:backpackFull")
              }), cU && (0, RU.jsx)("span", {
                className: "SmallTextLight",
                children: zU("greenvilleGame:backpackReturnTouch")
              }), !cU && null !== wU && (0, RU.jsx)("span", {
                className: "SmallTextLight",
                children: zU("greenvilleGame:backpackReturnDesktop", {
                  key: (0, GU.p)(wU)
                })
              })]
            })]
          })]
        })]
      })
    }

    function OU(UU) {
      let {
        shards: XU,
        shardsPerItem: zU
      } = UU;
      return (0, RU.jsx)("div", {
        className: "GreenvilleBackpackShards",
        children: Array.from({
          length: zU
        }, ((UU, zU) => (0, RU.jsx)("span", {
          className: pU()("GreenvilleBackpackShard", {
            Filled: zU < XU
          })
        }, zU)))
      })
    }

    function SU(UU) {
      let {
        drop: XU,
        onLanded: zU
      } = UU;
      const cU = (0, FU.useRef)(null);
      return (0, FU.useLayoutEffect)((() => {
        const {
          driftEm: UU,
          spinDeg: yU
        } = XU, QU = cU.current.animate([{
          transform: `translate(${UU}em, -3.2em) rotate(${yU}deg) scale(1.2)`,
          opacity: 0
        }, {
          transform: `translate(${.7*UU}em, -2.4em) rotate(${.7*yU}deg) scale(1.1)`,
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
        return QU.onfinish = () => {
          zU(XU.id)
        }, () => {
          QU.onfinish = null, QU.cancel()
        }
      }), [XU, zU]), (0, RU.jsx)("div", {
        ref: cU,
        className: "GreenvilleBackpackFalling",
        children: (0, RU.jsx)(gU.c, {
          itemName: XU.item,
          amount: 0
        })
      })
    }
    var rU = zU(73),
      uU = zU(34891),
      fU = zU(2616),
      iU = zU(2827);
    const HU = [{
        transform: "scale(1.18)"
      }, {
        transform: "scale(1)"
      }],
      MU = [{
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
    let vU = 1,
      VU = null;

    function sU(UU) {
      var XU;
      let {
        sounds: zU
      } = UU;
      const cU = null === (XU = (0, fU.f)("currencyAmounts")) || void 0 === XU ? void 0 : XU.gold;
      return !cU || cU.hidden ? null : (0, RU.jsx)(nU, {
        gold: cU.amount,
        sounds: zU
      })
    }

    function nU(UU) {
      let {
        gold: XU,
        sounds: zU
      } = UU;
      const cU = (0, iU.e)(),
        [yU, QU] = (0, FU.useState)([]),
        AU = (0, FU.useRef)(null),
        oU = (0, FU.useRef)(null),
        DU = (0, FU.useRef)(null),
        EU = (0, FU.useRef)(XU);
      (0, FU.useLayoutEffect)((() => {
        const UU = XU - EU.current;
        if (EU.current = XU, !(UU <= 0) && (zU.onGain(), !cU && !window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
          const XU = function(UU) {
            const XU = Math.max(1, Math.min(8, Math.floor(UU))),
              zU = Math.floor(UU / XU),
              cU = [];
            for (let yU = 0; yU < XU; yU++) {
              const QU = -Math.PI / 2 + (1 === XU ? 0 : 2.4 * (yU / (XU - 1) - .5)) + .3 * (Math.random() - .5),
                AU = 40 + 35 * Math.random();
              cU.push({
                id: vU++,
                burst: {
                  x: Math.cos(QU) * AU,
                  y: Math.sin(QU) * AU
                },
                gold: yU === XU - 1 ? UU - zU * (XU - 1) : zU,
                delayMs: 45 * yU,
                step: yU,
                steps: XU
              })
            }
            return cU
          }(UU);
          QU((UU => [...UU, ...XU.slice(0, Math.max(0, 24 - UU.length))]))
        }
      }), [XU]), (0, FU.useEffect)((() => () => {
        var UU;
        null === (UU = DU.current) || void 0 === UU || UU.cancel()
      }), []);
      const YU = (0, FU.useCallback)((UU => {
          zU.onCoinLanded(UU.step, UU.steps), QU((XU => XU.filter((XU => {
            let {
              id: zU
            } = XU;
            return zU !== UU.id
          }))))
        }), [zU]),
        NU = yU.length,
        IU = (0, FU.useRef)(NU);
      (0, FU.useEffect)((() => {
        var UU, XU;
        NU < IU.current && (null === (UU = DU.current) || void 0 === UU || UU.cancel(), DU.current = (null !== (XU = VU) && void 0 !== XU ? XU : AU.current).animate(0 === NU ? MU : HU, {
          duration: 0 === NU ? 380 : 160,
          easing: "ease-out"
        }));
        IU.current = NU
      }), [NU]);
      const pU = yU.reduce(((UU, XU) => UU + XU.gold), 0);
      return (0, RU.jsxs)(RU.Fragment, {
        children: [(0, RU.jsx)("div", {
          className: "GreenvilleGoldPurse",
          children: (0, RU.jsxs)("div", {
            ref: AU,
            className: "GreenvilleGoldPurseBody",
            children: [(0, RU.jsx)("span", {
              ref: oU,
              className: "GreenvilleGoldPurseIcon",
              children: (0, RU.jsx)(gU.c, {
                itemName: "Gold Coin",
                amount: 0
              })
            }), (0, RU.jsx)("span", {
              className: "GreenvilleGoldPurseAmount SmallTextBold",
              children: (0, uU.f)(Math.max(0, XU - pU))
            })]
          })
        }), (0, rU.createPortal)(yU.map((UU => (0, RU.jsx)(mU, {
          coin: UU,
          target: oU,
          onLanded: YU
        }, UU.id))), document.body)]
      })
    }

    function mU(UU) {
      let {
        coin: XU,
        target: zU,
        onLanded: cU
      } = UU;
      const yU = (0, FU.useRef)(null);
      return (0, FU.useEffect)((() => {
        var UU;
        const QU = (null !== (UU = VU) && void 0 !== UU ? UU : zU.current).getBoundingClientRect(),
          {
            burst: AU
          } = XU,
          FU = window.innerWidth / 2,
          oU = window.innerHeight / 2,
          DU = QU.left + QU.width / 2,
          EU = QU.top + QU.height / 2,
          YU = yU.current.animate([{
            transform: `translate(${FU}px, ${oU}px) scale(0.3)`,
            opacity: 0,
            easing: "ease-out"
          }, {
            transform: `translate(${FU+.7*AU.x}px, ${oU+.7*AU.y}px) scale(1.25)`,
            opacity: 1,
            offset: .15,
            easing: "ease-out"
          }, {
            transform: `translate(${FU+AU.x}px, ${oU+AU.y}px) scale(1)`,
            offset: .35,
            easing: "ease-in-out"
          }, {
            transform: `translate(${FU+AU.x}px, ${oU+AU.y+6}px) scale(1)`,
            offset: .45,
            easing: "cubic-bezier(0.55, 0, 1, 0.45)"
          }, {
            transform: `translate(${DU}px, ${EU}px) scale(0.6)`,
            opacity: 1
          }], {
            duration: 950,
            delay: XU.delayMs,
            fill: "both"
          });
        return YU.onfinish = () => {
          cU(XU)
        }, () => {
          YU.onfinish = null, YU.cancel()
        }
      }), [XU, zU, cU]), (0, RU.jsx)("div", {
        ref: yU,
        className: "GreenvilleGoldCoin",
        children: (0, RU.jsx)(gU.c, {
          itemName: "Gold Coin",
          amount: 0
        })
      })
    }
    class lU {
      constructor(UU, XU, zU) {
        this.pacer = UU, this.send = XU, this.onAnswersTimedOut = zU, this.queued = [], this.unanswered = [], this.answerTimer = null, this.flushing = !1, this.flush = () => {
          if (!this.flushing) {
            this.flushing = !0;
            try {
              for (; this.queued.length > 0 && this.pacer.tryStart();) {
                const UU = this.queued.shift();
                this.unanswered.push(UU), this.answerTimer ??= setTimeout(this.onAnswerTimeout, 15e3), this.send(UU)
              }
            } finally {
              this.flushing = !1
            }
          }
        }, this.onAnswerTimeout = () => {
          this.answerTimer = null, this.unanswered = [], this.onAnswersTimedOut()
        }, UU.subscribe(this.flush)
      }
      getPending() {
        return [...this.unanswered, ...this.queued]
      }
      kY() {
        return 0 === this.unanswered.length && 0 === this.queued.length
      }
      getLastSent() {
        return this.unanswered.at(-1)
      }
      getLastPending() {
        var UU;
        return null !== (UU = this.queued.at(-1)) && void 0 !== UU ? UU : this.unanswered.at(-1)
      }
      push(UU) {
        this.queued.push(UU), this.flush()
      }
      dropWaiting() {
        const UU = this.queued.length > 0;
        return this.queued = [], UU
      }
      takeAnswer() {
        var UU;
        const XU = null !== (UU = this.unanswered.shift()) && void 0 !== UU ? UU : null;
        return this.stopAnswerTimer(), this.unanswered.length > 0 && (this.answerTimer = setTimeout(this.onAnswerTimeout, 15e3)), XU
      }
      clear() {
        this.queued = [], this.unanswered = [], this.stopAnswerTimer()
      }
      stopAnswerTimer() {
        null !== this.answerTimer && (clearTimeout(this.answerTimer), this.answerTimer = null)
      }
    }
    class xU {
      constructor(UU, XU, zU, cU) {
        this.confirmed = UU, this.picks = void 0, this.picks = new lU(XU, zU, cU)
      }
      confirm(UU) {
        this.confirmed = UU
      }
      getLastPending() {
        return this.picks.getLastPending()
      }
      getLatest() {
        var UU;
        return null !== (UU = this.getLastPending()) && void 0 !== UU ? UU : this.confirmed
      }
      kY() {
        return this.picks.kY()
      }
      pushLatest(UU) {
        var XU;
        const zU = null !== (XU = this.picks.getLastSent()) && void 0 !== XU ? XU : this.confirmed;
        this.picks.dropWaiting() && UU === zU || this.picks.push(UU)
      }
      takeAnswer() {
        this.picks.takeAnswer()
      }
      clear() {
        this.picks.clear()
      }
    }
    class JU {
      constructor(UU, XU, zU) {
        this.closed = UU, this.UY = XU, this.menu = zU, this.view = void 0, this.dismiss = () => {
          this.closePanel() && this.menu.dismiss()
        }, this.onMenuClosed = () => {
          this.closePanel()
        }, this.view = UU
      }
      getView() {
        return this.view
      }
      show(UU) {
        this.set(UU), this.menu.open(this)
      }
      close() {
        this.closePanel() && this.menu.close()
      }
      set(UU) {
        this.view = UU, this.UY(UU)
      }
      closePanel() {
        return !!this.view.open && (this.dropPresses(), this.set(this.closed), !0)
      }
    }
    const jU = "greenvilleDepotView",
      KU = {
        open: !1,
        explosives: [],
        picked: 0,
        selected: 0,
        level: 1,
        line: "demolitionDepotIntro"
      };
    class bU extends JU {
      constructor(UU, XU, zU, cU) {
        super(KU, UU, XU), this.picks = void 0, this.select = UU => {
          this.set({
            ...this.getView(),
            selected: UU
          })
        }, this.DI = UU => {
          const XU = this.getView();
          UU !== XU.picked && (this.picks.pushLatest(UU), this.set({
            ...XU,
            picked: UU,
            line: "demolitionGrubnikPicked"
          }))
        }, this.onAnswersTimedOut = () => {
          const UU = this.getView();
          UU.open && this.set({
            ...UU,
            picked: this.picks.getLatest()
          })
        }, this.picks = new xU(0, cU, zU, this.onAnswersTimedOut)
      }
      PY(UU) {
        if ("openDepot" === UU[0]) {
          const XU = UU[4];
          XU && this.picks.takeAnswer();
          const zU = this.getView();
          if (XU && !zU.open) return;
          this.picks.confirm(UU[2]);
          const cU = this.picks.getLatest(),
            yU = !zU.open;
          this.show({
            open: !0,
            explosives: UU[1],
            picked: cU,
            selected: yU ? cU : zU.selected,
            level: UU[3],
            line: yU ? "demolitionDepotIntro" : zU.line
          })
        } else "closeDepot" !== UU[0] && "hide" !== UU[0] || this.close()
      }
      dropPresses() {
        this.picks.clear()
      }
    }
    var TU = zU(1390),
      hU = zU(1494),
      UX = zU(34884),
      XX = zU(3660),
      zX = zU(1978),
      cX = zU(4968);

    function yX(UU) {
      var XU;
      let {
        item: zU,
        className: cU
      } = UU;
      return (0, RU.jsx)(zX.d, {
        className: cU,
        text: null !== (XU = (0, UX.displayNameOf)((0, XX.c)(zU))) && void 0 !== XU ? XU : zU
      })
    }

    function QX(UU) {
      let {
        item: XU
      } = UU;
      return (0, RU.jsx)(gU.c, {
        itemName: XU,
        amount: 0
      })
    }

    function AX(UU) {
      let {
        open: XU,
        onDismiss: zU,
        title: cU,
        className: yU,
        headerExtra: QU,
        tabs: AU,
        status: FU,
        children: oU
      } = UU;
      const DU = `${yU}Title`;
      return (0, RU.jsx)(cX.c, {
        show: XU,
        close: zU,
        togglePointerLock: !1,
        ignorePressesAsShown: !0,
        className: "GreenvilleBoardOverlay",
        children: (0, RU.jsxs)("section", {
          className: pU()("GreenvilleBoard", yU),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": DU,
          children: [(0, RU.jsxs)("header", {
            className: "GreenvilleBoardHeader",
            children: [(0, RU.jsx)("h2", {
              id: DU,
              className: "VisuallyHidden",
              children: cU
            }), QU, (0, RU.jsx)(hU.k, {
              onClick: zU
            })]
          }), AU, (0, RU.jsx)("div", {
            className: "GreenvilleBoardBody",
            children: oU
          }), (0, RU.jsxs)("footer", {
            className: "GreenvilleBoardStatus",
            children: [(0, RU.jsx)("span", {
              className: "GreenvilleBoardSpeaker",
              children: FU.speaker
            }), FU.line]
          })]
        })
      })
    }

    function FX(UU) {
      let {
        tabs: XU,
        selected: zU,
        onSelect: cU
      } = UU;
      return (0, RU.jsx)("nav", {
        className: "GreenvilleBoardTabs",
        "data-pad-tabs": "1",
        children: XU.map((UU => {
          const XU = UU.id === zU;
          return (0, RU.jsxs)("button", {
            type: "button",
            className: pU()("GreenvilleBoardTab", {
              Selected: XU
            }),
            "aria-pressed": XU,
            "data-pad-tab": !0,
            "data-pad-selected": XU ? "true" : void 0,
            onClick: () => {
              cU(UU.id)
            },
            children: [UU.label, UU.badge]
          }, UU.id)
        }))
      })
    }

    function oX(UU) {
      let {
        className: XU,
        roomy: zU = !1,
        children: cU
      } = UU;
      return (0, RU.jsx)("div", {
        className: pU()("GreenvilleBoardTiles", XU, {
          Roomy: zU
        }),
        style: zU ? {
          "--tile-columns": (yU = FU.Children.count(cU), yU <= 3 ? yU : Math.min(4, Math.ceil(yU / 2)))
        } : void 0,
        "data-pad-select-on-focus": !0,
        children: cU
      });
      var yU
    }

    function DX(UU) {
      let {
        icon: XU,
        name: zU,
        selected: cU,
        locked: yU = !1,
        className: QU,
        onSelect: AU,
        children: FU
      } = UU;
      return (0, RU.jsxs)("button", {
        type: "button",
        className: pU()("GreenvilleBoardTile", QU, {
          Selected: cU,
          Locked: yU
        }),
        "aria-pressed": cU,
        "data-pad-default-focus": cU || void 0,
        onClick: AU,
        children: [(0, RU.jsx)("span", {
          className: "GreenvilleBoardTileIcon",
          children: XU
        }), (0, RU.jsx)("span", {
          className: "GreenvilleBoardTileName",
          children: zU
        }), FU]
      })
    }

    function EX(UU) {
      let {
        icon: XU,
        name: zU,
        badges: cU,
        children: yU
      } = UU;
      return (0, RU.jsxs)("section", {
        className: "GreenvilleBoardDetail",
        children: [(0, RU.jsxs)("header", {
          className: "GreenvilleBoardDetailHeader",
          children: [(0, RU.jsx)("span", {
            className: "GreenvilleBoardDetailHero",
            children: (0, RU.jsx)("span", {
              className: "GreenvilleBoardDetailIcon",
              children: XU
            })
          }), (0, RU.jsxs)("div", {
            className: "GreenvilleBoardDetailHeading",
            children: [(0, RU.jsx)("h3", {
              children: zU
            }), cU && (0, RU.jsx)("span", {
              className: "GreenvilleBoardDetailBadges",
              children: cU
            })]
          })]
        }), yU]
      })
    }

    function YX(UU) {
      let {
        level: XU
      } = UU;
      const {
        t: zU
      } = (0, BU.I)();
      return (0, RU.jsxs)("span", {
        className: "GreenvilleBoardBadge Muted",
        children: [(0, RU.jsx)(TU.d, {
          name: "lock"
        }), zU("greenvilleGame:boardLevelBadge", {
          level: XU
        })]
      })
    }

    function NX() {
      const {
        t: UU
      } = (0, BU.I)();
      return (0, RU.jsx)("span", {
        className: "GreenvilleBoardBadge",
        children: UU("greenvilleGame:demolitionDepotPicked")
      })
    }

    function IX(UU) {
      let {
        line: XU,
        picked: zU,
        level: cU
      } = UU;
      const yU = XU[3];
      return (0, RU.jsxs)(RU.Fragment, {
        children: [zU && (0, RU.jsx)(NX, {}), yU > cU && (0, RU.jsx)(YX, {
          level: yU
        })]
      })
    }

    function pX(UU) {
      let {
        view: XU,
        controller: zU
      } = UU;
      const {
        t: cU
      } = (0, BU.I)(), yU = XU.selected, QU = XU.explosives[yU], [AU, FU, oU, DU, EU] = QU, YU = yU === XU.picked, NU = DU > XU.level;
      return (0, RU.jsxs)(EX, {
        icon: (0, RU.jsx)(QX, {
          item: AU
        }),
        name: cU(`greenvilleGame:${FU}`),
        badges: NU && (0, RU.jsx)(YX, {
          level: DU
        }),
        children: [(0, RU.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: cU(`greenvilleGame:${oU}`)
        }), (0, RU.jsx)("p", {
          className: "GreenvilleDepotStencil",
          children: cU("greenvilleGame:demolitionDepotMaxLive", {
            count: EU
          })
        }), (0, RU.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [YU && (0, RU.jsx)("span", {
            className: "GreenvilleDepotLoaded",
            children: cU("greenvilleGame:demolitionDepotPicked")
          }), !YU && (0, RU.jsx)(hU.f, {
            disabled: NU,
            onClick: () => {
              zU.DI(yU)
            },
            children: cU("greenvilleGame:demolitionDepotLoad")
          }), NU && (0, RU.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: cU("greenvilleGame:demolitionDepotLocked", {
              level: DU
            })
          })]
        })]
      })
    }

    function aX(UU) {
      let {
        controller: XU
      } = UU;
      const zU = (0, kU.j)(jU, XU.getView()),
        {
          t: cU
        } = (0, BU.I)();
      return 0 === zU.explosives.length ? null : (0, RU.jsxs)(AX, {
        open: zU.open,
        onDismiss: XU.dismiss,
        title: cU("greenvilleGame:demolitionDepotTitle"),
        className: "GreenvilleDepotBoard",
        headerExtra: (0, RU.jsx)("span", {
          className: "GreenvilleBoardLevel",
          children: cU("greenvilleGame:demolitionDepotLevel", {
            level: zU.level
          })
        }),
        status: {
          speaker: cU("greenvilleGame:demolitionGrubnikName"),
          line: cU(`greenvilleGame:${zU.line}`)
        },
        children: [(0, RU.jsx)(oX, {
          roomy: !0,
          children: zU.explosives.map(((UU, yU) => {
            const [QU, AU, FU, oU, DU] = UU;
            return (0, RU.jsxs)(DX, {
              icon: (0, RU.jsx)(QX, {
                item: QU
              }),
              name: cU(`greenvilleGame:${AU}`),
              selected: yU === zU.selected,
              locked: oU > zU.level,
              className: pU()("GreenvilleDepotCrate", {
                Picked: yU === zU.picked
              }),
              onSelect: () => {
                XU.select(yU)
              },
              children: [(0, RU.jsx)(IX, {
                line: UU,
                picked: yU === zU.picked,
                level: zU.level
              }), (0, RU.jsx)("span", {
                className: "GreenvilleDepotStencil",
                children: cU("greenvilleGame:demolitionDepotMaxLive", {
                  count: DU
                })
              }), (0, RU.jsx)("span", {
                className: "GreenvilleDepotBlurb",
                children: cU(`greenvilleGame:${FU}`)
              })]
            }, QU)
          }))
        }), (0, RU.jsx)(pX, {
          view: zU,
          controller: XU
        })]
      })
    }
    const tX = "greenvilleGarageView",
      gX = {
        open: !1,
        cars: [],
        out: null,
        awaiting: !1,
        selected: null,
        line: "dealershipGarageIntro"
      };
    class kX extends JU {
      constructor(UU, XU, zU, cU) {
        super(gX, UU, XU), this.picks = void 0, this.select = UU => {
          this.set({
            ...this.getView(),
            selected: UU
          })
        }, this.DI = UU => {
          UU !== this.picks.getLastPending() && (this.picks.pushLatest(UU), this.set({
            ...this.getView(),
            out: UU,
            awaiting: !this.picks.kY(),
            line: "dealershipGarageTip"
          }))
        }, this.onAnswersTimedOut = () => {
          const UU = this.getView();
          UU.open && this.set({
            ...UU,
            out: this.picks.getLatest(),
            awaiting: !this.picks.kY()
          })
        }, this.picks = new xU(null, cU, zU, this.onAnswersTimedOut)
      }
      PY(UU) {
        if ("open" === UU[0]) {
          var XU;
          const zU = UU[3];
          zU && this.picks.takeAnswer();
          const cU = this.getView();
          if (zU && !cU.open) return;
          this.picks.confirm(UU[2]);
          const yU = UU[1],
            QU = this.picks.getLatest(),
            AU = !cU.open;
          this.show({
            open: !0,
            cars: yU,
            out: QU,
            awaiting: !this.picks.kY(),
            selected: AU ? null !== (XU = null !== QU && void 0 !== QU ? QU : yU[0]) && void 0 !== XU ? XU : null : cU.selected,
            line: AU ? "dealershipGarageIntro" : cU.line
          })
        } else this.close()
      }
      dropPresses() {
        this.picks.clear()
      }
    }

    function GX() {
      const {
        t: UU
      } = (0, BU.I)();
      return (0, RU.jsx)("span", {
        className: "GreenvilleBoardBadge",
        children: UU("greenvilleGame:dealershipGarageOut")
      })
    }

    function BX(UU) {
      let {
        car: XU,
        out: zU,
        awaiting: cU,
        controller: yU
      } = UU;
      const {
        t: QU
      } = (0, BU.I)();
      return (0, RU.jsx)(EX, {
        icon: (0, RU.jsx)(QX, {
          item: XU
        }),
        name: (0, RU.jsx)(yX, {
          item: XU
        }),
        children: (0, RU.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [zU && (0, RU.jsx)("span", {
            className: "GreenvilleGarageOutStamp",
            children: QU("greenvilleGame:dealershipGarageOut")
          }), (0, RU.jsx)(hU.f, {
            disabled: zU && cU,
            onClick: () => {
              yU.DI(XU)
            },
            children: QU(zU ? "greenvilleGame:dealershipGarageBringBack" : "greenvilleGame:dealershipGarageTakeOut")
          })]
        })
      })
    }

    function ZX(UU) {
      let {
        controller: XU
      } = UU;
      const zU = (0, kU.j)(tX, XU.getView()),
        {
          t: cU
        } = (0, BU.I)(),
        yU = 0 === zU.cars.length;
      return (0, RU.jsxs)(AX, {
        open: zU.open,
        onDismiss: XU.dismiss,
        title: cU("greenvilleGame:dealershipGarageTitle"),
        className: "GreenvilleGarageBoard",
        status: {
          speaker: cU("greenvilleGame:dealershipDelName"),
          line: cU(yU ? "greenvilleGame:dealershipGarageEmpty" : `greenvilleGame:${zU.line}`)
        },
        children: [!yU && (0, RU.jsx)(oX, {
          roomy: !0,
          children: zU.cars.map((UU => {
            const cU = UU === zU.out;
            return (0, RU.jsx)(DX, {
              icon: (0, RU.jsx)(QX, {
                item: UU
              }),
              name: (0, RU.jsx)(yX, {
                item: UU
              }),
              selected: UU === zU.selected,
              className: pU()("GreenvilleGarageBay", {
                Out: cU
              }),
              onSelect: () => {
                XU.select(UU)
              },
              children: cU && (0, RU.jsx)(GX, {})
            }, UU)
          }))
        }), null !== zU.selected && (0, RU.jsx)(BX, {
          car: zU.selected,
          out: zU.selected === zU.out,
          awaiting: zU.awaiting,
          controller: XU
        })]
      })
    }
    const RX = {
        kind: "intro"
      },
      PX = {
        open: !1,
        orders: [],
        tracked: null,
        sellLines: [],
        level: 1,
        goldOwned: 0,
        delivering: [],
        tab: "orders",
        selectedSlot: 0,
        selectedWood: 0,
        line: RX
      };

    function WX(UU) {
      let [XU, zU, cU, yU, QU, AU] = UU;
      return {
        slot: XU,
        titleKey: zU,
        items: cU,
        exp: yU,
        gold: QU,
        KD: AU,
        ready: cU.every((UU => {
          let [, XU, zU] = UU;
          return zU >= XU
        }))
      }
    }

    function dX(UU, XU) {
      return "sell" === XU.action ? function(UU, XU) {
        let zU = UU.goldOwned;
        const cU = UU.sellLines.map((UU => {
          const [cU, yU, QU] = UU;
          return null !== XU && XU !== cU ? UU : (zU += yU * QU, [cU, 0, QU])
        }));
        return {
          ...UU,
          goldOwned: zU,
          sellLines: cU
        }
      }(UU, XU.item) : "accept" === XU.action ? function(UU, XU) {
        var zU;
        const cU = UU.orders[XU];
        return {
          ...UU,
          tracked: null !== (zU = UU.tracked) && void 0 !== zU ? zU : XU,
          orders: UU.orders.map((UU => UU === cU ? {
            ...UU,
            KD: !0
          } : UU)),
          sellLines: UU.sellLines.map((UU => {
            const [XU, zU, yU] = UU, QU = cU.items.find((UU => {
              let [zU] = UU;
              return zU === XU
            }));
            return void 0 === QU ? UU : [XU, Math.max(0, zU - QU[1]), yU]
          }))
        }
      }(UU, XU.slot) : "track" === XU.action ? {
        ...UU,
        tracked: XU.slot
      } : {
        ...UU,
        delivering: [...UU.delivering, XU.slot]
      }
    }
    const LX = "greenvilleLumberMillView",
      eX = "greenvilleLumberTrackerView";
    class CX extends JU {
      constructor(UU, XU, zU, cU, QU) {
        super(PX, UU, zU), this.publishTracker = XU, this.board = null, this.commands = void 0, this.tracker = null, this.tab = "orders", this.selectedSlot = 0, this.selectedWood = 0, this.line = RX, this.selectTab = UU => {
          this.tab = UU, this.set({
            ...this.getView(),
            tab: UU
          })
        }, this.selectOrder = UU => {
          this.selectedSlot = UU, this.set({
            ...this.getView(),
            selectedSlot: UU
          })
        }, this.selectWood = UU => {
          this.selectedWood = UU, this.set({
            ...this.getView(),
            selectedWood: UU
          })
        }, this.accept = UU => {
          this.findOrder(UU).KD || this.queue({
            action: "accept",
            slot: UU
          })
        }, this.track = UU => {
          this.getView().tracked !== UU && this.findOrder(UU).KD && this.queue({
            action: "track",
            slot: UU
          })
        }, this.deliver = UU => {
          const XU = this.findOrder(UU);
          XU.KD && XU.ready && !this.getView().delivering.includes(UU) && this.queue({
            action: "deliver",
            slot: UU
          })
        }, this.sell = UU => {
          this.getView().sellLines.some((XU => {
            let [zU, cU] = XU;
            return cU > 0 && (null === UU || UU === zU)
          })) && this.queue({
            action: "sell",
            item: UU
          })
        }, this.onAnswersTimedOut = () => {
          this.getView().open && this.set(this.getBoardView())
        }, this.commands = new lU(QU, (UU => {
          cU(function(UU) {
            return "sell" === UU.action ? null === UU.item ? `${yU}sell` : `${yU}sell ${UU.item}` : `${yU}${UU.action} ${UU.slot}`
          }(UU))
        }), this.onAnswersTimedOut)
      }
      getTracker() {
        return this.tracker
      }
      PY(UU) {
        if ("open" === UU[0]) {
          const zU = UU[6],
            cU = zU ? this.commands.takeAnswer() : null,
            yU = !this.getView().open;
          if (zU && yU) return;
          if (yU) this.onReopened(UU);
          else if (null !== cU) {
            var XU;
            this.line = null !== (XU = function(UU, XU, zU) {
              if ("deliver" === UU.action) {
                const [, cU] = XU[1][UU.slot];
                return zU[1][UU.slot][5] ? null : {
                  kind: "delivered",
                  titleKey: cU
                }
              }
              if ("sell" !== UU.action) return null;
              let cU = 0;
              return XU[3].forEach(((XU, yU) => {
                let [QU, AU] = XU;
                null !== UU.item && UU.item !== QU || (cU += Math.max(0, AU - zU[3][yU][1]))
              })), cU > 0 ? {
                kind: "bought",
                count: cU
              } : null
            }(cU, this.board, UU)) && void 0 !== XU ? XU : this.line
          }
          this.board = UU, this.show(this.getBoardView())
        } else "close" === UU[0] ? this.close() : (this.tracker = null === UU[1] ? null : WX(UU[1]), this.publishTracker(this.tracker))
      }
      dropPresses() {
        this.commands.clear(), this.board = null
      }
      findOrder(UU) {
        return this.getView().orders.find((XU => XU.slot === UU))
      }
      onReopened(UU) {
        let [, XU, , zU] = UU;
        const cU = XU.map(WX).find((UU => UU.KD && UU.ready)),
          yU = zU.findIndex((UU => {
            let [, XU] = UU;
            return XU > 0
          }));
        void 0 === cU && -1 !== yU || (this.tab = "orders"), void 0 !== cU && (this.selectedSlot = cU.slot), -1 === yU || this.selectedWood < zU.length && zU[this.selectedWood][1] > 0 || (this.selectedWood = yU), this.line = RX
      }
      getBoardView() {
        const [, UU, XU, zU, cU, yU] = this.board;
        let QU = {
          open: !0,
          orders: UU.map(WX),
          tracked: XU,
          sellLines: zU,
          level: cU,
          goldOwned: yU,
          delivering: [],
          tab: this.tab,
          selectedSlot: this.selectedSlot,
          selectedWood: this.selectedWood,
          line: this.line
        };
        for (const AU of this.commands.getPending()) QU = dX(QU, AU);
        return QU
      }
      queue(UU) {
        this.commands.push(UU), this.set(this.getBoardView())
      }
    }
    var wX = zU(1420),
      qX = zU(2047);
    const OX = "Gold Coin";

    function SX(UU) {
      let {
        amount: XU,
        item: zU = OX,
        uD: cU,
        inTile: yU = !1,
        iconRef: QU
      } = UU;
      return (0, RU.jsx)(wX.d, {
        delayShow: 200,
        hoverOnly: yU,
        placement: "top",
        tooltipClassName: "GreenvilleChipTooltipBox",
        tooltipInner: (0, RU.jsx)(rX, {
          item: zU,
          amount: XU,
          uD: cU
        }),
        children: (0, RU.jsxs)("span", {
          className: pU()("GreenvilleBoardChip", {
            Short: void 0 !== cU && cU < XU
          }),
          children: [(0, RU.jsx)("span", {
            ref: QU,
            className: "GreenvilleBoardChipIcon",
            children: (0, RU.jsx)(QX, {
              item: zU
            })
          }), XU.toLocaleString()]
        })
      })
    }

    function rX(UU) {
      let {
        item: XU,
        amount: zU,
        uD: cU
      } = UU;
      const {
        t: yU
      } = (0, BU.I)(), QU = (0, qX.e)("itemInfo", (UU => UU[XU]));
      return (0, RU.jsxs)("div", {
        className: "GreenvilleChipTooltip",
        children: [(0, RU.jsxs)("div", {
          className: "GreenvilleChipTooltipHeader",
          children: [(0, RU.jsx)("span", {
            className: "GreenvilleChipTooltipIcon",
            children: (0, RU.jsx)(QX, {
              item: XU
            })
          }), (0, RU.jsx)(yX, {
            item: XU,
            className: "GreenvilleChipTooltipName"
          })]
        }), void 0 !== (null === QU || void 0 === QU ? void 0 : QU.description) && (0, RU.jsx)(zX.d, {
          text: QU.description,
          className: "GreenvilleChipTooltipDescription"
        }), void 0 !== cU && (0, RU.jsxs)("div", {
          className: pU()("GreenvilleChipTooltipHeld", {
            Short: cU < zU
          }),
          children: [(0, RU.jsx)("span", {
            className: "GreenvilleChipTooltipLabel",
            children: yU("greenvilleGame:boardYouHave")
          }), (0, RU.jsxs)("span", {
            className: "GreenvilleChipTooltipCount",
            children: [(0, RU.jsx)("span", {
              className: "GreenvilleChipTooltipHeldAmount",
              children: cU.toLocaleString()
            }), ` / ${zU.toLocaleString()}`]
          }), (0, RU.jsx)("span", {
            className: "GreenvilleChipTooltipMeter",
            children: (0, RU.jsx)("span", {
              style: {
                width: (zU > 0 ? 100 * Math.min(1, cU / zU) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function uX(UU) {
      let {
        gold: XU,
        children: zU
      } = UU;
      const cU = (0, FU.useRef)(null);
      var yU;
      return yU = cU, (0, FU.useLayoutEffect)((() => {
        const UU = yU.current;
        return VU = UU, () => {
          VU === UU && (VU = null)
        }
      }), [yU]), (0, RU.jsxs)("div", {
        className: "GreenvilleBoardWallet",
        children: [zU, (0, RU.jsx)(SX, {
          amount: XU,
          iconRef: cU
        })]
      })
    }
    const fX = {
      New: "lumberBoardStateNew",
      Accepted: "lumberBoardStateAccepted",
      Tracking: "lumberBoardTracking",
      Ready: "lumberBoardStateReady"
    };

    function iX(UU, XU) {
      return UU.KD ? UU.ready ? "Ready" : UU.slot === XU ? "Tracking" : "Accepted" : "New"
    }

    function HX(UU) {
      let {
        state: XU
      } = UU;
      const {
        t: zU
      } = (0, BU.I)();
      return (0, RU.jsx)("span", {
        className: pU()("GreenvilleBoardBadge GreenvilleLumberState", XU, {
          Muted: "Accepted" === XU
        }),
        children: zU(`greenvilleGame:${fX[XU]}`)
      })
    }

    function MX(UU) {
      let {
        order: XU
      } = UU;
      return (0, RU.jsx)("span", {
        className: "GreenvilleLumberNeeds",
        children: XU.items.map((UU => {
          let [XU, zU, cU] = UU;
          const yU = cU >= zU;
          return (0, RU.jsxs)("span", {
            className: pU()("GreenvilleLumberNeed", {
              Met: yU
            }),
            children: [(0, RU.jsx)("span", {
              className: "GreenvilleLumberNeedIcon",
              children: (0, RU.jsx)(QX, {
                item: XU
              })
            }), (0, RU.jsx)(yX, {
              item: XU,
              className: "GreenvilleLumberNeedName"
            }), (0, RU.jsxs)("span", {
              className: "GreenvilleLumberNeedCount",
              children: [Math.min(cU, zU).toLocaleString(), "/", zU.toLocaleString()]
            }), (0, RU.jsx)("span", {
              className: "GreenvilleLumberNeedTick",
              "aria-hidden": "true",
              children: yU && "\u2713"
            })]
          }, XU)
        }))
      })
    }

    function vX(UU) {
      let {
        order: XU,
        inTile: zU = !1
      } = UU;
      const {
        t: cU
      } = (0, BU.I)();
      return (0, RU.jsxs)("span", {
        className: "GreenvilleLumberReward",
        children: [(0, RU.jsx)(SX, {
          amount: XU.gold,
          inTile: zU
        }), (0, RU.jsx)("span", {
          className: "GreenvilleLumberExp",
          children: cU("greenvilleGame:boardExpGain", {
            exp: XU.exp
          })
        })]
      })
    }

    function VX(UU) {
      let {
        view: XU,
        order: zU,
        controller: cU
      } = UU;
      const {
        t: yU
      } = (0, BU.I)(), {
        slot: QU,
        items: AU,
        KD: FU,
        ready: oU
      } = zU, DU = AU.reduce(((UU, XU) => {
        let [, zU, cU] = XU;
        return UU + Math.max(0, zU - cU)
      }), 0);
      return (0, RU.jsxs)("div", {
        className: "GreenvilleBoardActions",
        children: [!FU && (0, RU.jsx)(hU.f, {
          onClick: () => {
            cU.accept(QU)
          },
          children: yU("greenvilleGame:lumberBoardAccept")
        }), FU && (0, RU.jsx)(hU.l, {
          disabled: !oU,
          loading: XU.delivering.includes(QU),
          onClick: () => {
            cU.deliver(QU)
          },
          children: yU("greenvilleGame:lumberBoardDeliver")
        }), FU && !oU && (0, RU.jsx)("span", {
          className: "GreenvilleBoardHint",
          children: yU("greenvilleGame:lumberBoardDeliverMissing", {
            count: DU
          })
        }), FU && QU !== XU.tracked && (0, RU.jsx)(hU.O, {
          onClick: () => {
            cU.track(QU)
          },
          children: yU("greenvilleGame:lumberBoardTrack")
        })]
      })
    }

    function sX(UU) {
      let {
        view: XU,
        controller: zU
      } = UU;
      const {
        t: cU
      } = (0, BU.I)(), yU = XU.orders[XU.selectedSlot], QU = iX(yU, XU.tracked), AU = yU.KD && yU.slot === XU.tracked;
      return (0, RU.jsxs)(EX, {
        icon: (0, RU.jsx)(QX, {
          item: yU.items[0][0]
        }),
        name: cU(`greenvilleGame:${yU.titleKey}`),
        badges: (0, RU.jsxs)(RU.Fragment, {
          children: [(0, RU.jsx)(HX, {
            state: QU
          }), AU && "Ready" === QU && (0, RU.jsx)(HX, {
            state: "Tracking"
          })]
        }),
        children: [(0, RU.jsx)(MX, {
          order: yU
        }), (0, RU.jsx)("dl", {
          className: "GreenvilleBoardFacts",
          children: (0, RU.jsxs)("div", {
            children: [(0, RU.jsx)("dt", {
              children: cU("greenvilleGame:lumberBoardReward")
            }), (0, RU.jsx)("dd", {
              children: (0, RU.jsx)(vX, {
                order: yU
              })
            })]
          })
        }), (0, RU.jsx)(VX, {
          view: XU,
          order: yU,
          controller: zU
        })]
      })
    }

    function nX(UU) {
      let {
        view: XU,
        controller: zU
      } = UU;
      const {
        t: cU
      } = (0, BU.I)();
      return (0, RU.jsxs)(RU.Fragment, {
        children: [(0, RU.jsx)(oX, {
          className: "GreenvilleLumberTickets",
          roomy: !0,
          children: XU.orders.map((UU => {
            const yU = iX(UU, XU.tracked);
            return (0, RU.jsxs)(DX, {
              icon: (0, RU.jsx)(QX, {
                item: UU.items[0][0]
              }),
              name: cU(`greenvilleGame:${UU.titleKey}`),
              selected: UU.slot === XU.selectedSlot,
              className: pU()("GreenvilleLumberTicket", yU),
              onSelect: () => {
                zU.selectOrder(UU.slot)
              },
              children: [(0, RU.jsx)(HX, {
                state: yU
              }), (0, RU.jsx)(MX, {
                order: UU
              }), (0, RU.jsx)(vX, {
                order: UU,
                inTile: !0
              })]
            }, UU.slot)
          }))
        }), (0, RU.jsx)(sX, {
          view: XU,
          controller: zU
        })]
      })
    }

    function mX(UU) {
      let {
        item: XU
      } = UU;
      return (0, RU.jsx)("span", {
        className: "GreenvilleLumberLogEnd",
        children: (0, RU.jsx)(QX, {
          item: XU
        })
      })
    }

    function lX(UU) {
      let {
        view: XU,
        controller: zU
      } = UU;
      const {
        t: cU
      } = (0, BU.I)(), [yU, QU, AU] = XU.sellLines[XU.selectedWood], FU = function(UU, XU) {
        let zU = 0,
          cU = 0;
        for (const yU of UU.orders)
          if (yU.KD)
            for (const [UU, QU, AU] of yU.items) UU === XU && (zU += QU, cU = AU);
        return Math.min(zU, cU)
      }(XU, yU), oU = XU.sellLines.some((UU => {
        let [, XU] = UU;
        return XU > 0
      }));
      return (0, RU.jsxs)(EX, {
        icon: (0, RU.jsx)(mX, {
          item: yU
        }),
        name: (0, RU.jsx)(yX, {
          item: yU
        }),
        badges: QU > 0 && (0, RU.jsx)("span", {
          className: "GreenvilleBoardBadge",
          children: cU("greenvilleGame:lumberBoardSellHeld", {
            count: QU
          })
        }),
        children: [(0, RU.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, RU.jsxs)("div", {
            children: [(0, RU.jsx)("dt", {
              children: cU("greenvilleGame:boardYouHave")
            }), (0, RU.jsx)("dd", {
              children: (FU + QU).toLocaleString()
            })]
          }), (0, RU.jsxs)("div", {
            children: [(0, RU.jsx)("dt", {
              children: cU("greenvilleGame:lumberBoardSellKept")
            }), (0, RU.jsx)("dd", {
              children: FU.toLocaleString()
            })]
          }), (0, RU.jsxs)("div", {
            children: [(0, RU.jsx)("dt", {
              children: cU("greenvilleGame:lumberBoardSellSpare")
            }), (0, RU.jsx)("dd", {
              className: pU()("GreenvilleLumberSpare", {
                None: 0 === QU
              }),
              children: QU.toLocaleString()
            })]
          }), (0, RU.jsxs)("div", {
            children: [(0, RU.jsx)("dt", {
              children: cU("greenvilleGame:lumberBoardSellEach")
            }), (0, RU.jsx)("dd", {
              children: (0, RU.jsx)(SX, {
                amount: AU
              })
            })]
          })]
        }), (0, RU.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [(0, RU.jsxs)(hU.l, {
            disabled: 0 === QU,
            onClick: () => {
              zU.sell(yU)
            },
            children: [QU > 0 && cU("greenvilleGame:lumberBoardSell", {
              count: QU
            }), 0 === QU && cU(FU > 0 ? "greenvilleGame:lumberBoardSellKeptAll" : "greenvilleGame:lumberBoardSellNone")]
          }), (0, RU.jsx)(hU.f, {
            disabled: !oU,
            onClick: () => {
              zU.sell(null)
            },
            children: cU("greenvilleGame:lumberBoardSellAll")
          })]
        })]
      })
    }

    function xX(UU) {
      let {
        view: XU,
        controller: zU
      } = UU;
      const {
        t: cU
      } = (0, BU.I)();
      return (0, RU.jsxs)(RU.Fragment, {
        children: [(0, RU.jsx)(oX, {
          className: "GreenvilleLumberWoodPile",
          children: XU.sellLines.map(((UU, yU) => {
            let [QU, AU, FU] = UU;
            return (0, RU.jsxs)(DX, {
              icon: (0, RU.jsx)(mX, {
                item: QU
              }),
              name: (0, RU.jsx)(yX, {
                item: QU
              }),
              selected: yU === XU.selectedWood,
              className: pU()("GreenvilleLumberWood", {
                Spare: AU > 0
              }),
              onSelect: () => {
                zU.selectWood(yU)
              },
              children: [AU > 0 && (0, RU.jsx)("span", {
                className: "GreenvilleBoardBadge",
                children: cU("greenvilleGame:lumberBoardSellHeld", {
                  count: AU
                })
              }), (0, RU.jsx)(SX, {
                amount: FU,
                inTile: !0
              })]
            }, QU)
          }))
        }), (0, RU.jsx)(lX, {
          view: XU,
          controller: zU
        })]
      })
    }

    function JX(UU) {
      let {
        controller: XU
      } = UU;
      const zU = (0, kU.j)(LX, XU.getView()),
        {
          t: cU
        } = (0, BU.I)(),
        yU = function(UU) {
          const {
            t: XU
          } = (0, BU.I)();
          return "delivered" === UU.kind ? XU("greenvilleGame:lumberTimbertoothThanks", {
            order: XU(`greenvilleGame:${UU.titleKey}`)
          }) : "bought" === UU.kind ? XU("greenvilleGame:lumberTimbertoothBought", {
            count: UU.count
          }) : XU("greenvilleGame:lumberBoardIntro")
        }(zU.line);
      if (0 === zU.orders.length) return null;
      const QU = zU.orders.filter((UU => UU.KD && UU.ready)).length,
        AU = zU.sellLines.reduce(((UU, XU) => {
          let [, zU] = XU;
          return UU + zU
        }), 0);
      return (0, RU.jsxs)(AX, {
        open: zU.open,
        onDismiss: XU.dismiss,
        title: cU("greenvilleGame:lumberBoardTitle"),
        className: "GreenvilleLumberBoard",
        headerExtra: (0, RU.jsx)(uX, {
          gold: zU.goldOwned,
          children: (0, RU.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: cU("greenvilleGame:lumberBoardLevel", {
              level: zU.level
            })
          })
        }),
        tabs: (0, RU.jsx)(FX, {
          tabs: [{
            id: "orders",
            label: cU("greenvilleGame:lumberBoardOrders"),
            badge: QU > 0 && (0, RU.jsx)("span", {
              className: "GreenvilleBoardBadge Ready",
              children: cU("greenvilleGame:lumberBoardReadyCount", {
                count: QU
              })
            })
          }, {
            id: "sell",
            label: cU("greenvilleGame:lumberBoardSellHeading"),
            badge: AU > 0 && (0, RU.jsx)("span", {
              className: "GreenvilleBoardBadge",
              children: cU("greenvilleGame:lumberBoardSellHeld", {
                count: AU
              })
            })
          }],
          selected: zU.tab,
          onSelect: XU.selectTab
        }),
        status: {
          speaker: cU("greenvilleGame:lumberTimbertoothName"),
          line: yU
        },
        children: ["orders" === zU.tab && (0, RU.jsx)(nX, {
          view: zU,
          controller: XU
        }), "sell" === zU.tab && (0, RU.jsx)(xX, {
          view: zU,
          controller: XU
        })]
      })
    }

    function jX(UU) {
      let {
        controller: XU
      } = UU;
      (0, kU.j)(eX, null);
      const {
        t: zU
      } = (0, BU.I)(), cU = XU.getTracker();
      return null === cU ? null : (0, RU.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, RU.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: zU(`greenvilleGame:${cU.titleKey}`)
        }), (0, RU.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: cU.items.map((UU => {
            let [XU, zU, cU] = UU;
            return (0, RU.jsxs)("li", {
              className: pU()("GreenvilleTrackerRow", {
                Done: cU >= zU
              }),
              children: [(0, RU.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, RU.jsx)(gU.c, {
                  itemName: XU,
                  amount: 0
                })
              }), (0, RU.jsx)(yX, {
                item: XU,
                className: "GreenvilleTrackerLabel"
              }), (0, RU.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [Math.min(cU, zU), "/", zU]
              })]
            }, XU)
          }))
        }), cU.ready && (0, RU.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: zU("greenvilleGame:lumberTrackerReady")
        })]
      })
    }
    const KX = "greenvilleOreBuyerView",
      bX = {
        open: !1,
        lines: [],
        selected: 0,
        level: 1,
        goldOwned: 0
      };
    class TX extends JU {
      constructor(UU, XU, zU, cU) {
        super(bX, UU, XU), this.sales = void 0, this.serverLines = [], this.select = UU => {
          this.set({
            ...this.getView(),
            selected: UU
          })
        }, this.sell = UU => {
          this.getView().lines.some((XU => {
            let [zU, , , , cU] = XU;
            return cU > 0 && (null === UU || UU === zU)
          })) && (this.sales.push(UU), this.set({
            ...this.getView(),
            lines: this.getLines()
          }))
        }, this.onAnswersTimedOut = () => {
          const UU = this.getView();
          UU.open && this.set({
            ...UU,
            lines: this.getLines()
          })
        }, this.sales = new lU(cU, zU, this.onAnswersTimedOut)
      }
      PY(UU) {
        if ("close" !== UU[0]) {
          const [, XU, zU, cU] = UU, yU = "open" === UU[0] && UU[4];
          yU && this.sales.takeAnswer();
          const QU = this.getView();
          if ((yU || "refresh" === UU[0]) && !QU.open) return;
          this.serverLines = XU;
          const AU = XU.findIndex((UU => UU[4] > 0));
          this.show({
            open: !0,
            lines: this.getLines(),
            selected: QU.open ? QU.selected : Math.max(0, AU),
            level: zU,
            goldOwned: cU
          })
        } else this.close()
      }
      dropPresses() {
        this.sales.clear()
      }
      getLines() {
        const UU = this.sales.getPending();
        return this.serverLines.map((XU => {
          const [zU, cU, yU, QU, , AU] = XU;
          return UU.some((UU => null === UU || UU === zU)) ? [zU, cU, yU, QU, 0, AU] : XU
        }))
      }
    }

    function hX(UU) {
      let {
        line: XU,
        level: zU
      } = UU;
      const {
        t: cU
      } = (0, BU.I)(), [, , , yU, QU, AU] = XU;
      return (0, RU.jsxs)(RU.Fragment, {
        children: [QU > 0 && (0, RU.jsx)("span", {
          className: "GreenvilleBoardBadge",
          children: cU("greenvilleGame:oreBuyerHeld", {
            count: QU
          })
        }), yU > zU && (0, RU.jsxs)("span", {
          className: "GreenvilleBoardBadge Muted",
          children: [(0, RU.jsx)(TU.d, {
            name: "lock"
          }), cU("greenvilleGame:boardLevelBadge", {
            level: yU
          })]
        }), yU <= zU && AU && (0, RU.jsx)("span", {
          className: "GreenvilleBoardBadge GreenvilleOreRare",
          children: cU("greenvilleGame:oreBuyerRare")
        })]
      })
    }

    function Uz(UU) {
      let {
        line: XU
      } = UU;
      return (0, RU.jsx)("span", {
        className: "GreenvilleOreSample",
        children: (0, RU.jsx)(QX, {
          item: XU[0]
        })
      })
    }

    function Xz(UU) {
      let {
        view: XU,
        controller: zU
      } = UU;
      const {
        t: cU
      } = (0, BU.I)(), yU = XU.lines[XU.selected], [QU, AU, FU, oU, DU, EU] = yU, YU = oU > XU.level, NU = XU.lines.some((UU => UU[4] > 0));
      return (0, RU.jsxs)(EX, {
        icon: (0, RU.jsx)(Uz, {
          line: yU
        }),
        name: (0, RU.jsx)(yX, {
          item: QU
        }),
        badges: (0, RU.jsx)(hX, {
          line: yU,
          level: XU.level
        }),
        children: [(0, RU.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, RU.jsxs)("div", {
            children: [(0, RU.jsx)("dt", {
              children: cU("greenvilleGame:boardYouHave")
            }), (0, RU.jsx)("dd", {
              className: pU()("GreenvilleOreHeld", {
                None: 0 === DU
              }),
              children: DU.toLocaleString()
            })]
          }), (0, RU.jsxs)("div", {
            children: [(0, RU.jsx)("dt", {
              children: cU("greenvilleGame:oreBuyerPriceEach")
            }), (0, RU.jsx)("dd", {
              children: (0, RU.jsx)(SX, {
                amount: AU
              })
            })]
          }), (0, RU.jsxs)("div", {
            children: [(0, RU.jsx)("dt", {
              children: cU("greenvilleGame:oreBuyerExpEach")
            }), (0, RU.jsxs)("dd", {
              className: "GreenvilleOreExp",
              children: ["+", FU]
            })]
          })]
        }), EU && (0, RU.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: cU("greenvilleGame:oreBuyerLegendary")
        }), YU && (0, RU.jsxs)(RU.Fragment, {
          children: [(0, RU.jsx)("p", {
            className: "GreenvilleBoardHint",
            children: cU("greenvilleGame:oreBuyerLocked", {
              level: oU
            })
          }), (0, RU.jsx)("p", {
            className: "GreenvilleBoardDescription",
            children: cU("greenvilleGame:oreBuyerTip")
          })]
        }), (0, RU.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [(0, RU.jsxs)(hU.l, {
            disabled: 0 === DU,
            onClick: () => {
              zU.sell(QU)
            },
            children: [DU > 0 && cU("greenvilleGame:oreBuyerSell", {
              count: DU
            }), 0 === DU && cU("greenvilleGame:oreBuyerSellNone")]
          }), (0, RU.jsx)(hU.f, {
            disabled: !NU,
            onClick: () => {
              zU.sell(null)
            },
            children: cU("greenvilleGame:oreBuyerSellAll")
          })]
        })]
      })
    }

    function zz(UU) {
      let {
        controller: XU
      } = UU;
      const zU = (0, kU.j)(KX, XU.getView()),
        {
          t: cU
        } = (0, BU.I)();
      return 0 === zU.lines.length ? null : (0, RU.jsxs)(AX, {
        open: zU.open,
        onDismiss: XU.dismiss,
        title: cU("greenvilleGame:oreBuyerTitle"),
        className: "GreenvilleOreBuyerBoard",
        headerExtra: (0, RU.jsx)(uX, {
          gold: zU.goldOwned,
          children: (0, RU.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: cU("greenvilleGame:oreBuyerLevel", {
              level: zU.level
            })
          })
        }),
        status: {
          speaker: cU("greenvilleGame:oreBuyerName"),
          line: cU("greenvilleGame:oreBuyerGreet")
        },
        children: [(0, RU.jsx)(oX, {
          roomy: !0,
          children: zU.lines.map(((UU, yU) => {
            const [QU, AU, FU, oU, DU, EU] = UU;
            return (0, RU.jsxs)(DX, {
              icon: (0, RU.jsx)(Uz, {
                line: UU
              }),
              name: (0, RU.jsx)(yX, {
                item: QU
              }),
              selected: yU === zU.selected,
              locked: oU > zU.level && 0 === DU,
              className: pU()("GreenvilleOreTile", {
                Legendary: EU
              }),
              onSelect: () => {
                XU.select(yU)
              },
              children: [(0, RU.jsx)(hX, {
                line: UU,
                level: zU.level
              }), (0, RU.jsxs)("span", {
                className: "GreenvilleOrePrice",
                children: [(0, RU.jsx)(SX, {
                  amount: AU,
                  inTile: !0
                }), (0, RU.jsx)("span", {
                  className: "GreenvilleOreExp",
                  children: cU("greenvilleGame:boardExpGain", {
                    exp: FU
                  })
                })]
              })]
            }, QU)
          }))
        }), (0, RU.jsx)(Xz, {
          view: zU,
          controller: XU
        })]
      })
    }
    const cz = {
      kind: "greet"
    };

    function yz(UU) {
      return UU.every((UU => {
        let [, , XU, zU] = UU;
        return zU >= XU
      }))
    }

    function Qz(UU) {
      let [XU, zU, cU, yU, QU, AU] = UU;
      return {
        slot: XU,
        nameKey: zU,
        needs: cU,
        exp: yU,
        gold: QU,
        KD: AU,
        ready: yz(cU)
      }
    }

    function Az(UU, XU) {
      let [, , zU, cU] = UU;
      return XU ? zU : zU - cU
    }

    function Fz(UU, XU) {
      let [zU, cU] = UU;
      return zU === XU.item && null !== cU === XU.golden
    }

    function oz(UU, XU) {
      return (XU.golden ? UU.goldenLines : UU.sellLines).find((UU => Fz(UU, XU)))
    }

    function Dz(UU, XU) {
      return "sell" === XU.action ? Nz(function(UU, XU, zU) {
        let cU = UU.goldOwned;
        const yU = UU => {
          if (null !== XU && !Fz(UU, XU)) return UU;
          const [yU, QU, AU, FU, oU] = UU, DU = Az(UU, zU);
          return cU += DU * oU, [yU, QU, AU - DU, zU ? 0 : FU, oU]
        };
        return {
          ...UU,
          sellLines: UU.sellLines.map(yU),
          goldenLines: Ez(UU.goldenLines.map(yU)),
          goldOwned: cU
        }
      }(UU, XU.kind, XU.all)) : "accept" === XU.action ? function(UU, XU) {
        var zU;
        const {
          needs: cU
        } = UU.orders[XU], yU = UU => {
          const [XU, zU, yU, QU, AU] = UU, FU = Yz(cU, UU);
          return FU ? [XU, zU, yU, Math.min(yU, QU + FU[2]), AU] : UU
        };
        return {
          ...UU,
          tracked: null !== (zU = UU.tracked) && void 0 !== zU ? zU : XU,
          orders: UU.orders.map((UU => UU.slot === XU ? {
            ...UU,
            KD: !0
          } : UU)),
          sellLines: UU.sellLines.map(yU),
          goldenLines: UU.goldenLines.map(yU)
        }
      }(UU, XU.slot) : "track" === XU.action ? {
        ...UU,
        tracked: XU.slot
      } : Nz(function(UU, XU) {
        const {
          needs: zU
        } = UU.orders[XU], cU = UU => {
          const [XU, cU, yU, QU, AU] = UU, FU = Yz(zU, UU);
          return FU ? [XU, cU, yU - FU[2], QU - FU[2], AU] : UU
        };
        return {
          ...UU,
          sellLines: UU.sellLines.map(cU),
          goldenLines: Ez(UU.goldenLines.map(cU)),
          delivering: [...UU.delivering, XU]
        }
      }(UU, XU.slot))
    }

    function Ez(UU) {
      return UU.filter((UU => {
        let [, , XU] = UU;
        return XU > 0
      }))
    }

    function Yz(UU, XU) {
      let [zU, cU] = XU;
      return UU.find((UU => {
        let [XU, yU] = UU;
        return XU === zU && yU === cU
      }))
    }

    function Nz(UU) {
      const XU = (XU, zU) => {
          const cU = (null === zU ? UU.sellLines : UU.goldenLines).find((UU => {
            let [zU] = UU;
            return zU === XU
          }));
          return cU ? cU[2] : 0
        },
        zU = UU.orders.map((zU => {
          if (UU.delivering.includes(zU.slot)) return zU;
          const cU = zU.needs.map((UU => {
            let [zU, cU, yU] = UU;
            return [zU, cU, yU, XU(zU, cU)]
          }));
          return {
            ...zU,
            needs: cU,
            ready: yz(cU)
          }
        }));
      return {
        ...UU,
        orders: zU
      }
    }

    function Iz(UU) {
      let [, , , XU, zU] = UU;
      return [...XU, ...zU].reduce(((UU, XU) => {
        let [, , zU] = XU;
        return UU + zU
      }), 0)
    }
    const pz = "greenvilleFarmBoardView",
      az = "greenvilleFarmTrackerView",
      tz = {
        open: !1,
        orders: [],
        tracked: null,
        sellLines: [],
        goldenLines: [],
        level: 1,
        goldOwned: 0,
        delivering: [],
        tab: "orders",
        selectedOrder: 0,
        selectedProduce: null,
        line: cz
      };
    class gz extends JU {
      constructor(UU, XU, zU, cU, yU) {
        super(tz, UU, zU), this.publishTracker = XU, this.board = null, this.commands = void 0, this.tracker = null, this.tab = "orders", this.selectedOrder = 0, this.selectedProduce = null, this.line = cz, this.selectTab = UU => {
          this.tab = UU, this.set(this.getBoardView())
        }, this.selectOrder = UU => {
          this.selectedOrder = UU, this.set(this.getBoardView())
        }, this.selectProduce = UU => {
          this.selectedProduce = UU, this.set(this.getBoardView())
        }, this.accept = UU => {
          this.getView().orders[UU].KD || this.queue({
            action: "accept",
            slot: UU
          })
        }, this.track = UU => {
          const XU = this.getView();
          XU.tracked !== UU && XU.orders[UU].KD && this.queue({
            action: "track",
            slot: UU
          })
        }, this.deliver = UU => {
          const XU = this.getView(),
            zU = XU.orders[UU];
          zU.KD && zU.ready && !XU.delivering.includes(UU) && this.queue({
            action: "deliver",
            slot: UU
          })
        }, this.sell = (UU, XU) => {
          this.queueSale({
            item: UU,
            golden: XU
          }, !1)
        }, this.sellSpare = () => {
          this.queueSale(null, !1)
        }, this.sellAll = () => {
          this.queueSale(null, !0)
        }, this.onAnswersTimedOut = () => {
          this.getView().open && this.set(this.settleView())
        }, this.commands = new lU(yU, (UU => {
          cU(function(UU) {
            return "sell" !== UU.action ? `${QU}${UU.action} ${UU.slot}` : UU.all ? `${QU}sellAll` : null === UU.kind ? `${QU}sell` : `${QU}${UU.kind.golden?"sellGolden":"sell"} ${UU.kind.item}`
          }(UU))
        }), this.onAnswersTimedOut)
      }
      getTracker() {
        return this.tracker
      }
      PY(UU) {
        if ("open" === UU[0]) {
          const zU = UU[7],
            cU = zU ? this.commands.takeAnswer() : null,
            yU = !this.getView().open;
          if (zU && yU) return;
          const QU = this.board;
          if (this.board = UU, yU) this.onReopened();
          else if (null !== cU) {
            var XU;
            this.line = null !== (XU = function(UU, XU, zU) {
              const cU = zU[6] - XU[6];
              if (cU <= 0) return null;
              if ("deliver" === UU.action) return {
                kind: "delivered",
                nameKey: XU[1][UU.slot][1],
                gold: cU
              };
              const yU = Iz(XU) - Iz(zU);
              return "sell" === UU.action && yU > 0 ? {
                kind: "sold",
                count: yU,
                gold: cU
              } : null
            }(cU, QU, UU)) && void 0 !== XU ? XU : this.line
          }
          this.show(this.settleView())
        } else "close" === UU[0] ? this.close() : (this.tracker = null === UU[1] ? null : Qz(UU[1]), this.publishTracker(this.tracker))
      }
      dropPresses() {
        this.commands.clear(), this.board = null
      }
      onReopened() {
        this.line = cz;
        const UU = this.toView(this.board).orders.find((UU => UU.KD && UU.ready));
        UU && (this.tab = "orders", this.selectedOrder = UU.slot)
      }
      queueSale(UU, XU) {
        const {
          sellLines: zU,
          goldenLines: cU
        } = this.getView();
        [...zU, ...cU].some((zU => Az(zU, XU) > 0 && (null === UU || Fz(zU, UU)))) && this.queue({
          action: "sell",
          kind: UU,
          all: XU
        })
      }
      toView(UU) {
        let [, XU, zU, cU, yU, QU, AU] = UU;
        return {
          open: !0,
          orders: XU.map(Qz),
          tracked: zU,
          sellLines: cU,
          goldenLines: yU,
          level: QU,
          goldOwned: AU,
          delivering: [],
          tab: this.tab,
          selectedOrder: this.selectedOrder,
          selectedProduce: this.selectedProduce,
          line: this.line
        }
      }
      getBoardView() {
        let UU = this.toView(this.board);
        for (const XU of this.commands.getPending()) UU = Dz(UU, XU);
        return {
          ...UU,
          selectedProduce: this.pickProduce(UU)
        }
      }
      settleView() {
        const UU = this.getBoardView();
        return this.commands.kY() && (this.selectedProduce = UU.selectedProduce), UU
      }
      pickProduce(UU) {
        var XU, zU;
        const cU = this.selectedProduce;
        if (cU && oz(UU, cU)) return cU;
        if (cU) return {
          item: cU.item,
          golden: !1
        };
        const [yU, QU] = null !== (XU = null !== (zU = UU.goldenLines[0]) && void 0 !== zU ? zU : UU.sellLines.find((UU => {
          let [, , XU] = UU;
          return XU > 0
        }))) && void 0 !== XU ? XU : UU.sellLines[0];
        return {
          item: yU,
          golden: null !== QU
        }
      }
      queue(UU) {
        this.commands.push(UU), this.set(this.getBoardView())
      }
    }
    var kz = zU(1408);

    function Gz() {
      const UU = (0, FU.useRef)(null);
      return (0, kz.b)(UU), (0, RU.jsx)("span", {
        ref: UU,
        className: "GreenvilleFarmSparkle",
        "aria-hidden": "true"
      })
    }

    function Bz(UU) {
      let {
        item: XU,
        golden: zU
      } = UU;
      return (0, RU.jsx)("span", {
        className: pU()("GreenvilleFarmProduce", {
          Golden: zU
        }),
        children: (0, RU.jsx)(QX, {
          item: XU
        })
      })
    }

    function Zz(UU) {
      let {
        item: XU,
        goldenName: zU
      } = UU;
      return null !== zU ? (0, RU.jsx)("span", {
        className: "GreenvilleFarmGoldenName",
        children: zU
      }) : (0, RU.jsx)(yX, {
        item: XU
      })
    }
    const Rz = {
      New: "greenvilleGame:farmBoardNew",
      Accepted: "greenvilleGame:farmBoardAccepted",
      Tracking: "greenvilleGame:farmOrderTracking",
      Ready: "greenvilleGame:farmBoardReady"
    };

    function Pz(UU, XU) {
      return UU.KD ? UU.ready ? "Ready" : XU ? "Tracking" : "Accepted" : "New"
    }

    function Wz(UU) {
      return UU.needs.some((UU => {
        let [, XU] = UU;
        return null !== XU
      }))
    }

    function dz(UU) {
      let {
        order: XU
      } = UU;
      const [zU, cU] = XU.needs[0];
      return (0, RU.jsx)(Bz, {
        item: zU,
        golden: null !== cU
      })
    }

    function Lz(UU) {
      let {
        state: XU
      } = UU;
      const {
        t: zU
      } = (0, BU.I)();
      return (0, RU.jsx)("span", {
        className: pU()("GreenvilleBoardBadge GreenvilleFarmState", XU),
        children: zU(Rz[XU])
      })
    }

    function ez(UU) {
      let {
        needs: XU
      } = UU;
      return (0, RU.jsx)("span", {
        className: "GreenvilleFarmNeeds",
        children: XU.map((UU => {
          let [XU, zU, cU, yU] = UU;
          const QU = yU >= cU;
          return (0, RU.jsxs)("span", {
            className: pU()("GreenvilleFarmNeed", {
              Met: QU,
              Golden: null !== zU
            }),
            children: [(0, RU.jsx)("span", {
              className: "GreenvilleFarmNeedIcon",
              children: (0, RU.jsx)(Bz, {
                item: XU,
                golden: null !== zU
              })
            }), (0, RU.jsx)("span", {
              className: "GreenvilleFarmNeedName",
              children: (0, RU.jsx)(Zz, {
                item: XU,
                goldenName: zU
              })
            }), (0, RU.jsxs)("span", {
              className: "GreenvilleFarmNeedCount",
              children: [QU && "\u2713 ", Math.min(yU, cU), "/", cU]
            })]
          }, `${XU}|${zU}`)
        }))
      })
    }

    function Cz(UU) {
      let {
        order: XU,
        inTile: zU = !1
      } = UU;
      const {
        t: cU
      } = (0, BU.I)();
      return (0, RU.jsxs)("span", {
        className: "GreenvilleFarmReward",
        children: [(0, RU.jsx)(SX, {
          amount: XU.gold,
          inTile: zU
        }), (0, RU.jsx)("span", {
          className: "GreenvilleFarmExp",
          children: cU("greenvilleGame:boardExpGain", {
            exp: XU.exp
          })
        })]
      })
    }

    function wz(UU) {
      let {
        view: XU,
        controller: zU
      } = UU;
      const {
        t: cU
      } = (0, BU.I)(), yU = XU.orders[XU.selectedOrder], {
        slot: QU,
        nameKey: AU,
        needs: FU,
        KD: oU,
        ready: DU
      } = yU, EU = QU === XU.tracked, YU = FU.reduce(((UU, XU) => {
        let [, , zU, cU] = XU;
        return UU + Math.max(0, zU - cU)
      }), 0);
      return (0, RU.jsxs)(EX, {
        icon: (0, RU.jsx)(dz, {
          order: yU
        }),
        name: cU(AU),
        badges: (0, RU.jsxs)(RU.Fragment, {
          children: [(0, RU.jsx)(Lz, {
            state: Pz(yU, EU)
          }), Wz(yU) && (0, RU.jsx)("span", {
            className: "GreenvilleBoardBadge GreenvilleFarmGoldenBadge",
            children: cU("greenvilleGame:farmBoardGolden")
          })]
        }),
        children: [(0, RU.jsx)(ez, {
          needs: FU
        }), (0, RU.jsx)("dl", {
          className: "GreenvilleBoardFacts",
          children: (0, RU.jsxs)("div", {
            children: [(0, RU.jsx)("dt", {
              children: cU("greenvilleGame:farmBoardReward")
            }), (0, RU.jsx)("dd", {
              children: (0, RU.jsx)(Cz, {
                order: yU
              })
            })]
          })
        }), (0, RU.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [!oU && (0, RU.jsx)(hU.f, {
            onClick: () => {
              zU.accept(QU)
            },
            children: cU("greenvilleGame:farmOrderAccept")
          }), oU && EU && (0, RU.jsxs)("span", {
            className: "GreenvilleFarmTracking",
            children: [(0, RU.jsx)(TU.d, {
              name: "crosshairs"
            }), cU("greenvilleGame:farmOrderTracking")]
          }), oU && !EU && (0, RU.jsx)(hU.O, {
            onClick: () => {
              zU.track(QU)
            },
            children: cU("greenvilleGame:farmOrderTrack")
          }), oU && (0, RU.jsx)(hU.l, {
            disabled: !DU,
            loading: XU.delivering.includes(QU),
            onClick: () => {
              zU.deliver(QU)
            },
            children: cU("greenvilleGame:farmOrderDeliver")
          }), oU && !DU && (0, RU.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: cU("greenvilleGame:farmBoardMissing", {
              count: YU
            })
          })]
        })]
      })
    }

    function qz(UU) {
      let {
        view: XU,
        controller: zU
      } = UU;
      const {
        t: cU
      } = (0, BU.I)();
      return (0, RU.jsxs)(RU.Fragment, {
        children: [(0, RU.jsx)(oX, {
          roomy: !0,
          children: XU.orders.map((UU => (0, RU.jsxs)(DX, {
            icon: (0, RU.jsx)(dz, {
              order: UU
            }),
            name: cU(UU.nameKey),
            selected: UU.slot === XU.selectedOrder,
            className: pU()("GreenvilleFarmBasket", {
              WantsGolden: Wz(UU)
            }),
            onSelect: () => {
              zU.selectOrder(UU.slot)
            },
            children: [(0, RU.jsx)(Lz, {
              state: Pz(UU, UU.slot === XU.tracked)
            }), (0, RU.jsx)(ez, {
              needs: UU.needs
            }), (0, RU.jsx)(Cz, {
              order: UU,
              inTile: !0
            })]
          }, UU.slot)))
        }), (0, RU.jsx)(wz, {
          view: XU,
          controller: zU
        })]
      })
    }

    function Oz(UU) {
      let {
        line: XU,
        selected: zU,
        onSelect: cU
      } = UU;
      const [yU, QU, AU, , FU] = XU, oU = null !== QU;
      return (0, RU.jsxs)(DX, {
        icon: (0, RU.jsx)(Bz, {
          item: yU,
          golden: oU
        }),
        name: (0, RU.jsx)(Zz, {
          item: yU,
          goldenName: QU
        }),
        selected: zU,
        className: pU()("GreenvilleFarmCrate", {
          Golden: oU,
          Empty: 0 === AU
        }),
        onSelect: cU,
        children: [oU && (0, RU.jsx)(Gz, {}), AU > 0 && (0, RU.jsxs)("span", {
          className: "GreenvilleBoardBadge GreenvilleFarmHeld",
          children: ["\xd7", AU]
        }), (0, RU.jsx)(SX, {
          amount: FU,
          inTile: !0
        })]
      })
    }

    function Sz(UU) {
      let {
        view: XU,
        controller: zU
      } = UU;
      const {
        t: cU
      } = (0, BU.I)(), yU = [...XU.sellLines, ...XU.goldenLines], QU = yU.some((UU => Az(UU, !1) > 0)), AU = yU.some((UU => Az(UU, !0) > 0));
      return (0, RU.jsxs)("div", {
        className: "GreenvilleFarmSign",
        children: [(0, RU.jsx)("h3", {
          className: "GreenvilleFarmSignBoard",
          children: cU("greenvilleGame:farmBoardPrices")
        }), (0, RU.jsxs)("div", {
          className: "GreenvilleFarmSignActions",
          children: [(0, RU.jsx)(hU.f, {
            disabled: !QU,
            onClick: zU.sellSpare,
            children: cU("greenvilleGame:farmStallSellSurplus")
          }), (0, RU.jsx)(hU.G, {
            disabled: !AU,
            onClick: zU.sellAll,
            children: cU("greenvilleGame:farmStallSellAll")
          })]
        })]
      })
    }

    function rz(UU) {
      let {
        line: XU,
        controller: zU
      } = UU;
      const {
        t: cU
      } = (0, BU.I)(), [yU, QU, AU, FU, oU] = XU, DU = null !== QU, EU = Az(XU, !1);
      return (0, RU.jsxs)(EX, {
        icon: (0, RU.jsx)(Bz, {
          item: yU,
          golden: DU
        }),
        name: (0, RU.jsx)(Zz, {
          item: yU,
          goldenName: QU
        }),
        badges: DU && (0, RU.jsx)("span", {
          className: "GreenvilleBoardBadge GreenvilleFarmGoldenBadge",
          children: cU("greenvilleGame:farmBoardGolden")
        }),
        children: [DU && (0, RU.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: cU("greenvilleGame:farmBoardGoldenBlurb")
        }), (0, RU.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, RU.jsxs)("div", {
            children: [(0, RU.jsx)("dt", {
              children: cU("greenvilleGame:boardYouHave")
            }), (0, RU.jsx)("dd", {
              children: AU
            })]
          }), FU > 0 && (0, RU.jsxs)("div", {
            children: [(0, RU.jsx)("dt", {
              children: cU("greenvilleGame:farmBoardKept")
            }), (0, RU.jsx)("dd", {
              children: FU
            })]
          }), (0, RU.jsxs)("div", {
            children: [(0, RU.jsx)("dt", {
              children: cU("greenvilleGame:farmBoardSpare")
            }), (0, RU.jsx)("dd", {
              children: EU
            })]
          }), (0, RU.jsxs)("div", {
            children: [(0, RU.jsx)("dt", {
              children: cU("greenvilleGame:farmBoardPriceEach")
            }), (0, RU.jsx)("dd", {
              children: (0, RU.jsx)(SX, {
                amount: oU
              })
            })]
          })]
        }), (0, RU.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [EU > 0 && (0, RU.jsx)(hU.l, {
            onClick: () => {
              zU.sell(yU, DU)
            },
            children: cU("greenvilleGame:farmBoardSell", {
              count: EU
            })
          }), 0 === AU && (0, RU.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: cU("greenvilleGame:farmStallNothing")
          }), AU > 0 && 0 === EU && (0, RU.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: cU("greenvilleGame:farmBoardAllKept")
          })]
        })]
      })
    }

    function uz(UU) {
      let {
        view: XU,
        produce: zU,
        controller: cU
      } = UU;
      const {
        t: yU
      } = (0, BU.I)(), QU = UU => {
        const [XU, yU] = UU;
        return (0, RU.jsx)(Oz, {
          line: UU,
          selected: Fz(UU, zU),
          onSelect: () => {
            cU.selectProduce({
              item: XU,
              golden: null !== yU
            })
          }
        }, `${XU}|${null!==yU}`)
      };
      return (0, RU.jsxs)(RU.Fragment, {
        children: [(0, RU.jsxs)(oX, {
          children: [(0, RU.jsx)(Sz, {
            view: XU,
            controller: cU
          }), XU.goldenLines.length > 0 && (0, RU.jsxs)(RU.Fragment, {
            children: [(0, RU.jsx)("h4", {
              className: "GreenvilleFarmSection Golden",
              children: yU("greenvilleGame:farmBoardGoldenCrops")
            }), XU.goldenLines.map(QU), (0, RU.jsx)("hr", {
              className: "GreenvilleFarmSection"
            })]
          }), XU.sellLines.map(QU)]
        }), (0, RU.jsx)(rz, {
          line: oz(XU, zU),
          controller: cU
        })]
      })
    }

    function fz(UU) {
      let {
        controller: XU
      } = UU;
      const zU = (0, kU.j)(pz, XU.getView()),
        {
          t: cU
        } = (0, BU.I)(),
        yU = function(UU) {
          const {
            t: XU
          } = (0, BU.I)();
          return "delivered" === UU.kind ? XU("greenvilleGame:tillieDelivered", {
            order: XU(UU.nameKey),
            gold: UU.gold
          }) : "sold" === UU.kind ? XU("greenvilleGame:tillieSold", {
            count: UU.count,
            gold: UU.gold
          }) : XU("greenvilleGame:tillieGreet")
        }(zU.line),
        QU = zU.selectedProduce;
      if (null === QU) return null;
      const AU = function(UU) {
        return UU.orders.filter((UU => UU.KD && UU.ready)).length
      }(zU);
      return (0, RU.jsxs)(AX, {
        open: zU.open,
        onDismiss: XU.dismiss,
        title: cU("greenvilleGame:farmBoardTitle"),
        className: "GreenvilleFarmBoard",
        headerExtra: (0, RU.jsx)(uX, {
          gold: zU.goldOwned,
          children: (0, RU.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: cU("greenvilleGame:farmBoardLevel", {
              level: zU.level
            })
          })
        }),
        tabs: (0, RU.jsx)(FX, {
          tabs: [{
            id: "orders",
            label: cU("greenvilleGame:farmBoardOrdersTab"),
            badge: AU > 0 && (0, RU.jsx)("span", {
              className: "GreenvilleBoardBadge GreenvilleFarmReadyBadge",
              children: cU("greenvilleGame:farmBoardReadyCount", {
                count: AU
              })
            })
          }, {
            id: "stall",
            label: cU("greenvilleGame:farmBoardStallTab")
          }],
          selected: zU.tab,
          onSelect: XU.selectTab
        }),
        status: {
          speaker: cU("greenvilleGame:farmTillieName"),
          line: yU
        },
        children: ["orders" === zU.tab && (0, RU.jsx)(qz, {
          view: zU,
          controller: XU
        }), "stall" === zU.tab && (0, RU.jsx)(uz, {
          view: zU,
          produce: QU,
          controller: XU
        })]
      })
    }
    var iz = zU(39271);

    function Hz(UU) {
      let {
        controller: XU
      } = UU;
      (0, kU.j)(az, null);
      const {
        t: zU
      } = (0, BU.I)(), cU = XU.getTracker();
      return null === cU ? null : (0, RU.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, RU.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: zU(cU.nameKey)
        }), (0, RU.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: cU.needs.map((UU => {
            let [XU, cU, yU, QU] = UU;
            return (0, RU.jsxs)("li", {
              className: pU()("GreenvilleTrackerRow", {
                Done: QU >= yU,
                Golden: null !== cU
              }),
              children: [(0, RU.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, RU.jsx)(gU.c, {
                  itemName: XU,
                  amount: 0
                })
              }), (0, RU.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: null !== cU && void 0 !== cU ? cU : (0, iz.h)(zU, XU)
              }), (0, RU.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [Math.min(QU, yU), "/", yU]
              })]
            }, `${XU}|${cU}`)
          }))
        }), cU.ready && (0, RU.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: zU("greenvilleGame:farmOrderReady")
        })]
      })
    }
    const Mz = "greenvillePlaceView",
      vz = "greenvilleMoodView";
    class Vz {
      constructor(UU, XU) {
        this.publishPlace = UU, this.publishMood = XU, this.place = null, this.mood = null
      }
      getPlace() {
        return this.place
      }
      getMood() {
        return this.mood
      }
      PY(UU) {
        const XU = performance.now();
        switch (UU[0]) {
          case "hudMood": {
            const [, zU, cU, yU, QU, AU, FU] = UU;
            return this.mood = {
              energy: zU,
              earningsPercent: cU,
              breakEvenEnergy: yU,
              restedEndsAt: QU > 0 ? XU + QU : 0,
              adBoosted: AU,
              luckPercent: FU
            }, void this.publishMood(this.mood)
          }
          case "hudTown": {
            const [XU, zU, cU] = UU;
            this.place = {
              kind: XU,
              place: zU,
              levels: cU
            };
            break
          }
          case "hudJob": {
            const [XU, zU, cU, yU, QU, AU, FU, oU, DU] = UU;
            this.place = {
              kind: XU,
              place: zU,
              job: cU,
              level: yU,
              expInto: QU,
              expNeeded: AU,
              status: null === FU ? null : sz(FU),
              next: null === oU ? null : {
                item: oU[0],
                nameKey: oU[1],
                level: oU[2]
              },
              stats: DU.map((UU => {
                let [XU, zU, cU, yU] = UU;
                return {
                  stat: XU,
                  value: zU,
                  max: cU,
                  boosted: yU
                }
              }))
            };
            break
          }
          case "hudHome": {
            const [zU, cU, yU, QU, AU, FU, oU, DU, EU] = UU;
            this.place = {
              kind: zU,
              houseName: cU,
              ownerName: yU,
              isOwner: QU,
              visitorsAllowed: AU,
              pvp: FU,
              parkour: oU,
              runStartedAt: DU < 0 ? null : this.getRunStart(XU - DU),
              bestTimes: EU.map((UU => {
                let [XU, zU] = UU;
                return {
                  playerName: XU,
                  seconds: zU
                }
              }))
            };
            break
          }
          case "hudSpleef": {
            const [XU, zU, cU] = UU;
            this.place = {
              kind: XU,
              eliminations: zU,
              wins: cU
            };
            break
          }
        }
        this.publishPlace(this.place)
      }
      getRunStart(UU) {
        var XU;
        const zU = "hudHome" === (null === (XU = this.place) || void 0 === XU ? void 0 : XU.kind) ? this.place.runStartedAt : null;
        return null !== zU && Math.abs(zU - UU) < 500 ? zU : UU
      }
    }

    function sz(UU) {
      switch (UU[0]) {
        case "hudTier":
          return {
            kind: UU[0], tierKey: UU[1], locked: UU[2]
          };
        case "hudBay":
          return {
            kind: UU[0], materialKey: UU[1], objectKey: UU[2], percent: UU[3]
          };
        case "hudBayEmpty":
          return {
            kind: UU[0]
          };
        case "hudFarmTier":
          return {
            kind: UU[0], goldenPercent: UU[1]
          }
      }
    }
    var nz = zU(3796),
      mz = zU(1274),
      lz = zU(212);
    const xz = JSON.parse('{"d":{"constructionSiteA":{"name":"Construction Site A"},"quarry":{"name":"The Quarry","skill":"Mining"},"industry":{"name":"Demolition Yard","skill":"Demolition"},"market":{"name":"Market Street","skill":"Market"},"lumberMill":{"name":"Lumber Mill","skill":"Woodcutting"},"farm":{"name":"Greenville Farm","skill":"Farming"},"constructionSiteB":{"name":"Construction Site B"},"dealership":{"name":"Wheeler\'s Wheels"},"postOffice":{"name":"Post Office & Diner"},"station":{"name":"The Station"},"docks":{"name":"The Docks"}},"e":[[{"kind":"residential","name":"Hillside"},{"kind":"district","district":"quarry"},{"kind":"district","district":"industry"},{"kind":"residential","name":"Ridgeview"}],[{"kind":"residential","name":"Willow Gardens"},{"kind":"district","district":"constructionSiteA"},{"kind":"district","district":"market"},{"kind":"residential","name":"Maple Row"}],[{"kind":"residential","name":"Birchwood"},{"kind":"district","district":"farm"},{"kind":"district","district":"lumberMill"},{"kind":"district","district":"dealership"}],[{"kind":"residential","name":"Seaview"},{"kind":"district","district":"constructionSiteB"},{"kind":"residential","name":"Harbour Terrace"},{"kind":"residential","name":"Lighthouse Point"}]]}'),
      Jz = lz.f.aY,
      jz = 1e3 * Jz,
      Kz = Jz,
      bz = Kz + 2 * Jz,
      Tz = 4 * bz + Kz;

    function hz(UU, XU, zU) {
      return XU >= UU.x0 && XU <= UU.x1 && zU >= UU.z0 && zU <= UU.z1
    }
    const Uc = xz.e,
      Xc = Object.fromEntries(Object.entries(xz.d).map((UU => {
        let [XU, {
          name: zU
        }] = UU;
        return [XU, zU]
      })));

    function zc(UU, XU) {
      return [jz + Kz + UU * bz, jz + Kz + XU * bz]
    }

    function cc() {
      const UU = [];
      Uc.forEach(((XU, zU) => {
        XU.forEach(((XU, cU) => {
          if ("residential" !== XU.kind) return;
          const [yU, QU] = zc(cU, zU);
          for (const [zU, AU, FU] of [
              [0, 0, "north"],
              [1, 0, "north"],
              [0, 1, "south"],
              [1, 1, "south"]
            ]) UU.push({
            chunk: [yU / Jz + zU, 0, QU / Jz + AU],
            facing: FU,
            neighbourhood: XU.name
          })
        }))
      }));
      const XU = jz + Tz / 2,
        zU = UU => {
          let {
            chunk: zU
          } = UU;
          return Math.hypot(zU[0] * Jz + Jz / 2 - XU, zU[2] * Jz + Jz / 2 - XU)
        };
      return UU.sort(((UU, XU) => zU(UU) - zU(XU)))
    }
    const yc = {
        market: "Crate",
        demolition: "Moonstone Explosive",
        mining: "Iron Pickaxe",
        woodcutting: "Iron Axe",
        farming: "Wheat"
      },
      Qc = {
        earningPower: "greenvilleGame:marketEarningPower",
        power: "greenvilleGame:demolitionPower",
        points: "greenvilleGame:demolitionPoints",
        depth: "greenvilleGame:miningDepth",
        value: "greenvilleGame:miningValue",
        backpack: "greenvilleGame:miningBackpack",
        luck: "greenvilleGame:luck"
      };

    function Ac(UU, XU, zU, cU) {
      switch (XU.kind) {
        case "hudTown":
          return "city" !== XU.place ? {
            key: XU.place,
            name: UU(`greenvilleGame:${XU.place}`),
            eyebrow: null
          } : "tile" === zU.kind ? {
            key: `place|${Xc[zU.district]}`,
            name: Xc[zU.district],
            eyebrow: null
          } : "outside" === zU.kind ? {
            key: "city|outside",
            name: UU("greenvilleGame:placeGreenville"),
            eyebrow: null
          } : null;
        case "hudJob": {
          const zU = function(UU, XU) {
            switch (XU) {
              case "quarry":
                return Xc.quarry;
              case "demolitionYard":
                return Xc.industry;
              case "marketStreet":
                return Xc.market;
              case "farm":
                return Xc.farm;
              case "lumberMill":
                return Xc.lumberMill;
              case "supermarket":
                return UU("greenvilleGame:market");
              case "demolition":
              case "mining":
              case "woodcutting":
              case "farming":
                return UU(`greenvilleGame:${XU}`)
            }
          }(UU, XU.place);
          return {
            key: `place|${zU}`,
            name: zU,
            eyebrow: null
          }
        }
        case "hudHome": {
          const zU = XU.isOwner ? UU("greenvilleGame:placeYourHouse") : UU("greenvilleGame:homePlayersHouse", {
              player: (0, mz.c)(XU.ownerName, cU)
            }),
            yU = `home|${XU.ownerName}|${XU.houseName}`;
          return null === XU.houseName ? {
            key: yU,
            name: zU,
            eyebrow: null
          } : {
            key: yU,
            name: XU.houseName,
            eyebrow: zU
          }
        }
        case "hudSpleef":
          return {
            key: "spleef", name: UU("greenvilleGame:placeSpleef"), eyebrow: null
          }
      }
    }

    function Fc(UU) {
      let {
        controller: XU,
        children: zU
      } = UU;
      (0, kU.j)(Mz, null);
      const [cU, yU] = (0, FU.useState)(null);
      (0, nz.l)(cU, ".RightElements");
      const QU = XU.getPlace();
      return (0, RU.jsx)(tU.e, {
        placement: "topRight",
        children: (0, RU.jsx)("div", {
          className: "GreenvilleHudColumn",
          children: (0, RU.jsxs)("div", {
            ref: yU,
            className: "GreenvilleHudColumnStack",
            children: [zU, "hudTown" === (null === QU || void 0 === QU ? void 0 : QU.kind) && (0, RU.jsx)(Dc, {
              levels: QU.levels
            }), "hudJob" === (null === QU || void 0 === QU ? void 0 : QU.kind) && (0, RU.jsx)(Ec, {
              job: QU
            }), "hudHome" === (null === QU || void 0 === QU ? void 0 : QU.kind) && QU.bestTimes.length > 0 && (0, RU.jsx)(Yc, {
              home: QU
            }), "hudSpleef" === (null === QU || void 0 === QU ? void 0 : QU.kind) && (0, RU.jsx)("div", {
              className: "GreenvilleTrackerCard",
              children: (0, RU.jsx)(oc, {
                rows: [
                  ["greenvilleGame:spleefEliminations", QU.eliminations],
                  ["greenvilleGame:spleefWins", QU.wins]
                ]
              })
            })]
          })
        })
      })
    }

    function oc(UU) {
      let {
        rows: XU
      } = UU;
      const {
        t: zU
      } = (0, BU.I)();
      return (0, RU.jsx)("ul", {
        className: "GreenvilleTrackerRows",
        children: XU.map((UU => {
          let [XU, cU] = UU;
          return (0, RU.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, RU.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: zU(XU)
            }), (0, RU.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: (0, uU.f)(cU)
            })]
          }, XU)
        }))
      })
    }

    function Dc(UU) {
      let {
        levels: XU
      } = UU;
      const {
        t: zU
      } = (0, BU.I)();
      return (0, RU.jsxs)("div", {
        className: "GreenvilleTrackerCard GreenvilleJobsStrip",
        children: [(0, RU.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: zU("greenvilleGame:jobs")
        }), (0, RU.jsx)("ul", {
          className: "GreenvilleJobsStripJobs",
          children: AU.map(((UU, cU) => {
            const yU = XU[cU];
            return (0, RU.jsxs)("li", {
              className: pU()("GreenvilleJobsStripJob", {
                Max: yU >= 50
              }),
              "aria-label": zU("greenvilleGame:jobLevel", {
                job: zU(`greenvilleGame:${UU}`),
                level: yU
              }),
              children: [(0, RU.jsx)("span", {
                className: "GreenvilleJobsStripIcon",
                "aria-hidden": "true",
                children: (0, RU.jsx)(gU.c, {
                  itemName: yc[UU],
                  amount: 0
                })
              }), (0, RU.jsx)("span", {
                className: "GreenvilleJobsStripLevel",
                "aria-hidden": "true",
                children: zU("greenvilleGame:levelShort", {
                  level: yU
                })
              })]
            }, UU)
          }))
        })]
      })
    }

    function Ec(UU) {
      let {
        job: {
          stats: XU,
          next: zU
        }
      } = UU;
      const {
        t: cU
      } = (0, BU.I)();
      return (0, RU.jsxs)(RU.Fragment, {
        children: [XU.length > 0 && (0, RU.jsx)("div", {
          className: "GreenvilleTrackerCard",
          children: (0, RU.jsx)("ul", {
            className: "GreenvilleTrackerRows",
            children: XU.map((UU => {
              let {
                stat: XU,
                value: zU,
                max: yU,
                boosted: QU
              } = UU;
              return (0, RU.jsxs)("li", {
                className: "GreenvilleTrackerRow",
                children: [(0, RU.jsx)("span", {
                  className: "GreenvilleTrackerLabel",
                  children: cU(Qc[XU])
                }), (0, RU.jsxs)("span", {
                  className: pU()("GreenvilleTrackerValue", {
                    Boosted: QU
                  }),
                  children: [(0, uU.f)(zU), null !== yU && `/${(0,uU.f)(yU)}`]
                })]
              }, XU)
            }))
          })
        }), null !== zU && (0, RU.jsxs)("div", {
          className: "GreenvilleTrackerCard GreenvilleNextUnlock",
          children: [(0, RU.jsx)("span", {
            className: "GreenvilleNextUnlockEyebrow",
            children: cU("greenvilleGame:nextUnlock")
          }), (0, RU.jsxs)("div", {
            className: "GreenvilleNextUnlockBody",
            children: [(0, RU.jsx)("span", {
              className: "GreenvilleNextUnlockIcon",
              "aria-hidden": "true",
              children: (0, RU.jsx)(gU.c, {
                itemName: zU.item,
                amount: 0
              })
            }), (0, RU.jsxs)("span", {
              className: "GreenvilleNextUnlockText",
              children: [(0, RU.jsx)("strong", {
                className: "GreenvilleNextUnlockName",
                children: cU(zU.nameKey)
              }), (0, RU.jsx)("span", {
                className: "GreenvilleNextUnlockLevel",
                children: cU("greenvilleGame:unlockAtLevel", {
                  level: zU.level
                })
              })]
            })]
          })]
        })]
      })
    }

    function Yc(UU) {
      let {
        home: XU
      } = UU;
      const {
        t: zU,
        selectedLanguage: cU
      } = (0, BU.I)(), yU = (0, qX.i)("hiddenPlayerNames");
      return (0, RU.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, RU.jsxs)("strong", {
          className: "GreenvilleTrackerTitle GreenvilleBestTimesTitle",
          children: [(0, RU.jsx)(TU.d, {
            name: "trophy"
          }), zU("greenvilleGame:parkourBestTimes")]
        }), (0, RU.jsx)("ol", {
          className: "GreenvilleTrackerRows",
          children: XU.bestTimes.slice(0, 3).map(((UU, XU) => {
            let {
              playerName: QU,
              seconds: AU
            } = UU;
            return (0, RU.jsxs)("li", {
              className: pU()("GreenvilleTrackerRow GreenvilleBestTime", {
                First: 0 === XU
              }),
              children: [(0, RU.jsx)("span", {
                className: "GreenvilleBestTimeRank",
                children: XU + 1
              }), (0, RU.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: (0, mz.c)(QU, yU)
              }), (0, RU.jsx)("span", {
                className: "GreenvilleTrackerValue",
                children: zU("greenvilleGame:parkourTime", {
                  seconds: AU.toLocaleString(cU.code, {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1
                  })
                })
              })]
            }, `${XU}|${QU}`)
          }))
        })]
      })
    }
    const Nc = "greenvilleLevelUpsView";
    class Ic {
      constructor(UU) {
        this.publishLevelUps = UU, this.levelUps = [], this.token = 0, this.revealed = UU => {
          this.setLevelUps(this.levelUps.filter((XU => XU.token !== UU)))
        }
      }
      getLevelUps() {
        return this.levelUps
      }
      PY(UU) {
        const [XU, zU, cU] = UU;
        this.setLevelUps([...this.levelUps, {
          job: XU,
          level: zU,
          unlock: null === cU ? null : {
            item: cU[0],
            nameKey: cU[1],
            level: cU[2]
          },
          token: ++this.token
        }])
      }
      setLevelUps(UU) {
        this.levelUps = UU, this.publishLevelUps(UU)
      }
    }
    const pc = [{
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
      ac = Array.from({
        length: 16
      }, ((UU, XU) => ({
        "--angle": 360 * XU / 16 + XU % 3 * 7 + "deg",
        "--distance": 5 + XU % 4 * 1.2 + "rem",
        "--delay": XU % 5 * 30 + "ms"
      })));

    function tc(UU) {
      let {
        controller: XU
      } = UU;
      (0, kU.j)(Nc, null);
      const zU = XU.getLevelUps();
      return 0 === zU.length ? null : (0, rU.createPortal)((0, RU.jsx)(gc, {
        levelUp: zU[0],
        onDone: XU.revealed
      }, zU[0].token), document.body)
    }

    function gc(UU) {
      let {
        levelUp: XU,
        onDone: zU
      } = UU;
      const {
        t: cU
      } = (0, BU.I)(), yU = (0, FU.useRef)(null), {
        unlock: QU
      } = XU, AU = null === QU ? 2600 : 4200;
      (0, FU.useLayoutEffect)((() => {
        const UU = document.querySelector(".GreenvilleTopBar");
        UU && yU.current.style.setProperty("--top-bar-bottom", `${UU.getBoundingClientRect().bottom}px`)
      }), []), (0, FU.useEffect)((() => {
        const UU = yU.current.animate(pc, {
          duration: AU,
          fill: "both"
        });
        return UU.onfinish = () => {
          zU(XU.token)
        }, () => {
          UU.onfinish = null, UU.cancel()
        }
      }), [XU, AU, zU]);
      const oU = cU(`greenvilleGame:${XU.job}`);
      return (0, RU.jsxs)("div", {
        ref: yU,
        className: pU()("GreenvilleLevelUpReveal", {
          Plain: null === QU
        }),
        style: {
          "--reveal-ms": `${AU}ms`
        },
        role: "status",
        children: [null !== QU && (0, RU.jsx)("div", {
          className: "GreenvilleLevelUpRevealStage",
          "aria-hidden": "true",
          children: (0, RU.jsxs)("div", {
            className: "GreenvilleLevelUpRevealMover",
            children: [(0, RU.jsx)("div", {
              className: "GreenvilleLevelUpRevealRays"
            }), (0, RU.jsx)("div", {
              className: "GreenvilleLevelUpRevealGlow"
            }), (0, RU.jsx)("div", {
              className: "GreenvilleLevelUpRevealSparks",
              children: ac.map(((UU, XU) => (0, RU.jsx)("span", {
                style: UU
              }, XU)))
            }), (0, RU.jsx)("div", {
              className: "GreenvilleLevelUpRevealIcon",
              children: (0, RU.jsx)(gU.c, {
                itemName: QU.item,
                amount: 0
              })
            })]
          })
        }), (0, RU.jsxs)("div", {
          className: "GreenvilleLevelUpRevealText",
          children: [null !== QU && (0, RU.jsxs)(RU.Fragment, {
            children: [(0, RU.jsx)("span", {
              className: "GreenvilleLevelUpRevealHeading SmallTextBold",
              children: cU("greenvilleGame:levelUpUnlockHeading", {
                job: oU,
                level: QU.level
              })
            }), (0, RU.jsx)("span", {
              className: "GreenvilleLevelUpRevealName FullyFancyText",
              children: cU(QU.nameKey)
            })]
          }), null === QU && (0, RU.jsxs)(RU.Fragment, {
            children: [(0, RU.jsx)("span", {
              className: "GreenvilleLevelUpRevealHeading SmallTextBold",
              children: cU("greenvilleGame:levelUpHeading")
            }), (0, RU.jsx)("span", {
              className: "GreenvilleLevelUpRevealName FullyFancyText",
              children: cU("greenvilleGame:jobLevel", {
                job: oU,
                level: XU.level
              })
            })]
          })]
        })]
      })
    }
    const kc = "greenvilleMarketView";

    function Gc(UU) {
      return UU.map((UU => {
        let [XU, zU, cU, yU, QU, AU] = UU;
        return {
          key: `${XU}|${zU}|${cU}|${yU}|${QU}`,
          icon: XU,
          target: [zU, cU, yU],
          item: QU,
          label: AU
        }
      }))
    }
    class Bc {
      constructor(UU) {
        this.UY = UU, this.view = null
      }
      getView() {
        return this.view
      }
      PY(UU) {
        const XU = performance.now();
        switch (UU[0]) {
          case "hide":
            this.view = null;
            break;
          case "marketIdle":
            this.view = {
              job: null,
              waypoints: Gc(UU[1])
            };
            break;
          case "marketPick":
          case "marketStock": {
            const [zU, cU, yU, QU] = UU;
            this.view = {
              job: {
                kind: zU,
                goods: cU,
                tipEndsAt: QU > 0 ? XU + QU : 0
              },
              waypoints: Gc(yU)
            };
            break
          }
          case "marketDeliver": {
            const [zU, cU, yU, QU, AU, FU] = UU;
            this.view = {
              job: {
                kind: zU,
                parcelsLeft: cU,
                delivered: yU,
                gold: QU,
                endsAt: XU + FU
              },
              waypoints: Gc(AU)
            };
            break
          }
        }
        this.UY(this.view)
      }
    }
    var Zc = zU(40278);
    const Rc = [{
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

    function Pc(UU) {
      var XU;
      let {
        controller: zU
      } = UU;
      (0, kU.j)(kc, null);
      const cU = null === (XU = zU.getView()) || void 0 === XU ? void 0 : XU.job;
      return "marketDeliver" !== (null === cU || void 0 === cU ? void 0 : cU.kind) ? null : (0, RU.jsx)(Wc, {
        endsAt: cU.endsAt,
        delivered: cU.delivered
      })
    }

    function Wc(UU) {
      let {
        endsAt: XU,
        delivered: zU
      } = UU;
      const {
        t: cU
      } = (0, BU.I)(), yU = Math.max(0, Math.ceil((0, Zc.h)(XU))), QU = (0, FU.useRef)(null), AU = (0, FU.useRef)(null), oU = (0, FU.useRef)({
        endsAt: XU,
        delivered: zU
      }), [DU, EU] = (0, FU.useState)(null);
      (0, FU.useLayoutEffect)((() => {
        const UU = zU > oU.current.delivered ? Math.round((XU - oU.current.endsAt) / 1e3) : 0;
        var cU;
        (oU.current = {
          endsAt: XU,
          delivered: zU
        }, UU <= 0) || (EU((XU => {
          var zU;
          return {
            seconds: UU,
            token: (null !== (zU = null === XU || void 0 === XU ? void 0 : XU.token) && void 0 !== zU ? zU : 0) + 1
          }
        })), window.matchMedia("(prefers-reduced-motion: reduce)").matches || (null === (cU = AU.current) || void 0 === cU || cU.cancel(), AU.current = QU.current.animate(Rc, {
          duration: 420,
          easing: "ease-out"
        })))
      }), [XU, zU]), (0, FU.useEffect)((() => () => {
        var UU;
        null === (UU = AU.current) || void 0 === UU || UU.cancel()
      }), []);
      const YU = Math.floor(yU / 60);
      return (0, RU.jsxs)("div", {
        className: pU()("GreenvilleMarketCountdown", {
          Urgent: yU < 10
        }),
        role: "timer",
        children: [(0, RU.jsxs)("div", {
          ref: QU,
          className: "GreenvilleMarketCountdownTime FullyFancyText",
          children: [YU, ":", String(yU % 60).padStart(2, "0")]
        }), null !== DU && (0, RU.jsx)("div", {
          className: "GreenvilleMarketCountdownAdded FullyFancyText",
          onAnimationEnd: () => {
            EU(null)
          },
          children: cU("greenvilleGame:marketCountdownAdded", {
            seconds: DU.seconds
          })
        }, DU.token)]
      })
    }

    function dc(UU) {
      var XU;
      let {
        controller: zU
      } = UU;
      (0, kU.j)(kc, null);
      const cU = null === (XU = zU.getView()) || void 0 === XU ? void 0 : XU.job;
      return cU ? (0, RU.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: ["marketDeliver" === cU.kind && (0, RU.jsx)(Cc, {
          shift: cU
        }), "marketDeliver" !== cU.kind && (0, RU.jsx)(Lc, {
          task: cU
        })]
      }) : null
    }

    function Lc(UU) {
      let {
        task: XU
      } = UU;
      const {
        t: zU
      } = (0, BU.I)(), cU = "marketPick" === XU.kind && XU.goods.every((UU => {
        let [, XU] = UU;
        return 0 === XU
      }));
      return (0, RU.jsxs)(RU.Fragment, {
        children: [(0, RU.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: zU("marketPick" === XU.kind ? "greenvilleGame:marketPanelOrder" : "greenvilleGame:marketPanelCrate")
        }), (0, RU.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: XU.goods.map((UU => {
            let [XU, cU, yU] = UU;
            return (0, RU.jsxs)("li", {
              className: pU()("GreenvilleTrackerRow", {
                Done: 0 === cU
              }),
              children: [(0, RU.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, RU.jsx)(gU.c, {
                  itemName: XU,
                  amount: 0
                })
              }), (0, RU.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: (0, iz.h)(zU, XU)
              }), (0, RU.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [yU - cU, "/", yU]
              })]
            }, XU)
          }))
        }), cU && (0, RU.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: zU("greenvilleGame:marketPanelReturn")
        }), !cU && 0 !== XU.tipEndsAt && (0, RU.jsx)(ec, {
          endsAt: XU.tipEndsAt
        })]
      })
    }

    function ec(UU) {
      let {
        endsAt: XU
      } = UU;
      const {
        t: zU
      } = (0, BU.I)(), cU = Math.ceil((0, Zc.h)(XU));
      return cU <= 0 ? null : (0, RU.jsx)("div", {
        className: "GreenvilleTrackerTip",
        children: zU("greenvilleGame:marketPanelTip", {
          seconds: cU
        })
      })
    }

    function Cc(UU) {
      let {
        shift: XU
      } = UU;
      const {
        t: zU
      } = (0, BU.I)();
      return (0, RU.jsxs)(RU.Fragment, {
        children: [(0, RU.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: zU("greenvilleGame:marketPanelDeliveries")
        }), (0, RU.jsxs)("ul", {
          className: "GreenvilleTrackerRows",
          children: [(0, RU.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, RU.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: zU("greenvilleGame:marketPanelParcels")
            }), (0, RU.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: XU.parcelsLeft
            })]
          }), (0, RU.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, RU.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: zU("greenvilleGame:marketPanelDelivered")
            }), (0, RU.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: XU.delivered
            })]
          }), (0, RU.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, RU.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: zU("greenvilleGame:marketPanelEarned")
            }), (0, RU.jsx)("span", {
              className: "GreenvilleTrackerIcon",
              "aria-hidden": "true",
              children: (0, RU.jsx)(gU.c, {
                itemName: "Gold Coin",
                amount: 0
              })
            }), (0, RU.jsx)("span", {
              className: "GreenvilleTrackerValue Gold",
              children: (0, uU.f)(XU.gold)
            })]
          })]
        }), 0 === XU.parcelsLeft && (0, RU.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: zU("greenvilleGame:marketPanelBackToBay")
        })]
      })
    }
    const wc = {
      marketNpc: "comment-dots",
      marketShelf: "cart-shopping",
      marketHouse: "house",
      marketDepot: "truck"
    };

    function qc(UU) {
      var XU;
      let {
        market: zU,
        markers: cU
      } = UU;
      (0, kU.j)(kc, null);
      const yU = null === (XU = zU.getView()) || void 0 === XU ? void 0 : XU.waypoints;
      return null !== yU && void 0 !== yU && yU.length ? (0, RU.jsx)("div", {
        className: "GreenvilleMarketWaypoints",
        children: yU.map((UU => (0, RU.jsx)(Oc, {
          waypoint: UU,
          bind: cU.waypoints.bindMarker(UU.key)
        }, UU.key)))
      }) : null
    }

    function Oc(UU) {
      let {
        waypoint: {
          icon: XU,
          item: zU,
          label: cU
        },
        bind: yU
      } = UU;
      const QU = "marketHouse" === XU;
      return (0, RU.jsxs)("div", {
        ref: yU,
        className: pU()("GreenvilleMarketWaypoint", {
          House: QU
        }),
        children: [QU && (0, RU.jsx)(Sc, {}), (0, RU.jsxs)("div", {
          className: "GreenvilleMarketWaypointBadge",
          children: [null !== zU && (0, RU.jsx)("span", {
            className: "GreenvilleMarketWaypointItem",
            children: (0, RU.jsx)(gU.c, {
              itemName: zU,
              amount: 0
            })
          }), null === zU && (0, RU.jsx)(TU.d, {
            name: wc[XU]
          })]
        }), (0, RU.jsxs)("div", {
          className: "GreenvilleMarketWaypointLabels",
          children: [null !== cU && (0, RU.jsx)("span", {
            className: "GreenvilleMarketWaypointLabel SmallTextBold",
            children: cU
          }), (0, RU.jsx)("span", {
            className: "GreenvilleMarketWaypointDistance SmallTextBold"
          })]
        })]
      })
    }

    function Sc() {
      const UU = (0, FU.useRef)(null);
      return (0, kz.b)(UU), (0, RU.jsx)("span", {
        ref: UU,
        className: "GreenvilleMarketWaypointPulse"
      })
    }
    var rc = zU(40281);
    class uc {
      constructor(UU) {
        this.market = UU, this.waypoints = new rc.d({
          labels: "GreenvilleMarketWaypointLabels",
          distance: "GreenvilleMarketWaypointDistance"
        }, "greenvilleGame:marketDistance")
      }
      frame(UU, XU) {
        this.waypoints.setRender(UU);
        const zU = this.market.getView();
        if (zU && this.waypoints.hasMarkers())
          for (const {
              key: cU,
              target: yU
            }
            of zU.waypoints) this.waypoints.update(cU, yU[0], yU[1] + 1, yU[2], XU)
      }
    }
    const fc = {
      Street: "St",
      Avenue: "Ave",
      Road: "Rd",
      Lane: "Ln"
    };

    function ic(UU, XU) {
      return XU.map(((XU, zU) => {
        const cU = XU.lastIndexOf(" "),
          yU = XU.slice(cU + 1);
        let QU = fc[yU];
        return void 0 === QU && (console.warn(`Greenville street "${XU}" has no suffix abbreviation`), QU = yU), {
          axis: UU,
          line: zU,
          name: XU,
          shortName: XU.slice(0, cU),
          suffix: QU
        }
      }))
    }
    const Hc = {
        eastWest: ic("eastWest", ["Hillcrest Road", "Oak Street", "Main Street", "Elm Street", "Harbour Road"]),
        northSouth: ic("northSouth", ["Willow Lane", "Birch Avenue", "Market Street", "Maple Avenue", "Station Road"])
      },
      Mc = {
        kind: "outside"
      };

    function vc(UU, XU, zU) {
      return 100 * (UU + 1) + XU + (zU ? 1 : 0)
    }

    function Vc(UU, XU, zU, cU) {
      return {
        x0: jz + UU,
        z0: jz + XU,
        x1: jz + UU + zU - 1,
        z1: jz + XU + cU - 1
      }
    }
    let sc = null;

    function nc(UU, XU, zU, cU) {
      if (cU && "outside" !== cU.kind) {
        const {
          box: zU
        } = cU;
        if (!hz(zU, UU, XU) && hz({
            x0: zU.x0 - 2,
            z0: zU.z0 - 2,
            x1: zU.x1 + 2,
            z1: zU.z1 + 2
          }, UU, XU)) return cU
      }
      return function(UU, XU, zU) {
        const {
          eastWest: cU,
          northSouth: yU
        } = Hc;
        switch (UU.kind) {
          case "outside":
            return Mc;
          case "street": {
            const XU = UU.segment * bz + Kz,
              zU = UU.line * bz;
            return {
              kind: "street",
              box: "eastWest" === UU.axis ? Vc(XU, zU, bz - Kz, Kz) : Vc(zU, XU, Kz, bz - Kz),
              street: Hc[UU.axis][UU.line],
              block: 100 * (UU.segment + 1)
            }
          }
          case "junction": {
            const QU = Vc(UU.column * bz, UU.row * bz, Kz, Kz),
              AU = [cU[UU.row], yU[UU.column]],
              FU = "street" === (null === zU || void 0 === zU ? void 0 : zU.kind) ? zU.street : "junction" === (null === zU || void 0 === zU ? void 0 : zU.kind) ? zU.along : null,
              oU = FU && AU.includes(FU) ? FU : Math.abs(Math.sin(XU)) > Math.abs(Math.cos(XU)) ? AU[0] : AU[1];
            return {
              kind: "junction",
              box: QU,
              along: oU,
              cross: oU === AU[0] ? AU[1] : AU[0]
            }
          }
          case "plot": {
            const XU = UU.column * bz + Kz + UU.dx * Kz,
              zU = UU.row * bz + Kz + UU.dz * Kz,
              yU = 0 === UU.dz;
            return {
              kind: "plot",
              box: Vc(XU, zU, Kz, Kz),
              plotId: (QU = (jz + XU) / Kz, AU = (jz + zU) / Kz, sc || (sc = new Map(cc().map(((UU, XU) => {
                let {
                  chunk: zU
                } = UU;
                return [`${zU[0]},${zU[2]}`, XU + 1]
              })))), sc.get(`${QU},${AU}`)),
              number: vc(UU.column, 0 === UU.dx ? 30 : 70, yU),
              street: cU[yU ? UU.row : UU.row + 1],
              neighbourhood: UU.neighbourhood
            }
          }
          case "tile": {
            const {
              column: XU,
              row: zU,
              district: yU
            } = UU;
            return {
              kind: "tile",
              box: Vc(XU * bz + Kz, zU * bz + Kz, bz - Kz, bz - Kz),
              district: yU,
              number: vc(XU, 50, !0),
              street: cU[zU]
            }
          }
        }
        var QU, AU
      }(function(UU, XU) {
        const zU = UU - jz,
          cU = XU - jz;
        if (zU < 0 || cU < 0 || zU >= Tz || cU >= Tz) return {
          kind: "outside"
        };
        const yU = Math.floor(zU / bz),
          QU = Math.floor(cU / bz),
          AU = zU - yU * bz - Kz,
          FU = cU - QU * bz - Kz;
        if (AU < 0 && FU < 0) return {
          kind: "junction",
          column: yU,
          row: QU
        };
        if (FU < 0) return {
          kind: "street",
          axis: "eastWest",
          line: QU,
          segment: yU
        };
        if (AU < 0) return {
          kind: "street",
          axis: "northSouth",
          line: yU,
          segment: QU
        };
        const oU = Uc[QU][yU];
        return "residential" === oU.kind ? {
          kind: "plot",
          column: yU,
          row: QU,
          dx: Math.floor(AU / Kz),
          dz: Math.floor(FU / Kz),
          neighbourhood: oU.name
        } : {
          kind: "tile",
          column: yU,
          row: QU,
          district: oU.district
        }
      }(UU, XU), zU, cU)
    }

    function mc(UU) {
      switch (UU.kind) {
        case "outside":
          return "outside";
        case "junction":
          return `junction|${UU.along.name}|${UU.cross.name}`;
        case "plot":
        case "tile":
          return `${UU.kind}|${UU.number}|${UU.street.name}`;
        case "street":
          return `street|${UU.block}|${UU.street.name}`
      }
    }
    var lc = zU(40307),
      xc = zU(40303),
      Jc = zU(264);
    const jc = lz.f.aY;
    class Kc {
      constructor(UU, XU, zU) {
        this.api = UU, this.map = XU, this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.image = this.context.createImageData(jc, jc), this.columns = void 0, this.lowestLayer = void 0, this.layers = void 0, this.plots = void 0, this.baked = null, this.kp = !1, this.ids = new Uint16Array(jc * jc), this.tops = new Int32Array(jc * jc), this.edgeIds = new Uint16Array(jc), this.edgeTops = new Int32Array(jc), this.heights = void 0, this.versions = void 0, this.current = void 0, this.stale = void 0, this.painted = void 0, this.order = [], this.focus = {
          column: -1,
          row: -1
        }, this.colours = null, this.host = null, this.timer = null, this.cancelIdle = null, this.pass = UU => {
          this.cancelIdle = null;
          let XU = !1;
          const zU = performance.now();
          let cU = !0;
          if (this.colours && this.host && this.host.clientWidth > 0)
            for (const yU of this.order) {
              if (!this.readVersions(yU)) continue;
              const QU = !UU.didTimeout && UU.timeRemaining() < 2;
              if (!cU && (QU || performance.now() - zU > 6)) {
                XU = !0;
                break
              }
              cU = !1, this.versions.set(this.current, yU * this.layers), this.paint(yU % this.columns, Math.floor(yU / this.columns), this.colours.lookup, this.colours.drawn)
            }
          this.schedule(XU ? 0 : 500)
        };
        const {
          origin: cU,
          size: yU,
          my: QU,
          ly: AU
        } = XU.area;
        this.columns = yU / jc, this.lowestLayer = QU / jc, this.layers = (AU - QU) / jc, this.plots = new Set(zU.map((UU => {
          let {
            chunkX: XU,
            chunkZ: zU
          } = UU;
          return zU * this.columns + XU
        }))), this.heights = new Int32Array(yU * yU).fill(lc.f), this.versions = new Float64Array(this.columns * this.columns * this.layers).fill(NaN), this.current = new Float64Array(this.layers), this.stale = new Uint8Array(this.columns * this.columns), this.painted = new Uint8Array(this.columns * this.columns), this.canvas.width = yU, this.canvas.height = yU, this.canvas.className = "GreenvilleNavMapTerrain", 0 !== zU.length ? (this.focusOn(cU + yU / 2, cU + yU / 2), Promise.all([(0, xc.d)(), this.drawBakedMap()]).then((UU => {
          let [XU] = UU;
          this.colours = {
            lookup: XU,
            drawn: XU.getDrawnIds()
          }
        }), (UU => {
          console.error("Greenville map: block colours failed to load", UU)
        })), this.schedule(0)) : this.drawBakedMap()
      }
      mount(UU) {
        this.host = UU, null === UU || void 0 === UU || UU.replaceChildren(this.canvas)
      }
      focusOn(UU, XU) {
        const {
          columns: zU
        } = this, {
          origin: cU
        } = this.map.area, yU = Math.min(zU - 1, Math.max(0, Math.floor((UU - cU) / jc))), QU = Math.min(zU - 1, Math.max(0, Math.floor((XU - cU) / jc)));
        yU === this.focus.column && QU === this.focus.row || (this.focus = {
          column: yU,
          row: QU
        }, this.order = [...this.plots].sort(((UU, XU) => Math.hypot(UU % zU - yU, Math.floor(UU / zU) - QU) - Math.hypot(XU % zU - yU, Math.floor(XU / zU) - QU))))
      }
      forget(UU, XU) {
        const zU = XU * this.columns + UU;
        this.stale[zU] = 1, this.versions.fill(NaN, zU * this.layers, (zU + 1) * this.layers)
      }
      dispose() {
        var UU, XU;
        null !== this.timer && clearTimeout(this.timer), null === (UU = this.cancelIdle) || void 0 === UU || UU.call(this), this.host = null, this.kp = !0, null === (XU = this.baked) || void 0 === XU || XU.close(), this.baked = null
      }
      async drawBakedMap() {
        try {
          const UU = await fetch(this.map.imageUrl);
          if (!UU.ok) throw new Error(`HTTP ${UU.status}`);
          const XU = await createImageBitmap(await UU.blob(), {
            colorSpaceConversion: "none"
          });
          if (this.kp) return void XU.close();
          this.baked = XU, this.context.drawImage(XU, 0, 0)
        } catch (UU) {
          console.error("Greenville map: the baked map failed to load", UU)
        }
      }
      schedule(UU) {
        this.timer = setTimeout((() => {
          this.timer = null, this.cancelIdle = (0, Jc.b)(this.pass, {
            timeoutMs: 1e3
          })
        }), UU)
      }
      readVersions(UU) {
        const {
          origin: XU
        } = this.map.area, zU = XU / jc + UU % this.columns, cU = XU / jc + Math.floor(UU / this.columns);
        let yU = !1;
        for (let AU = 0; AU < this.layers; AU++) {
          var QU;
          const XU = null !== (QU = this.api.getChunkVersion(zU, this.lowestLayer + AU, cU)) && void 0 !== QU ? QU : 0;
          this.current[AU] = XU, yU ||= XU !== this.versions[UU * this.layers + AU]
        }
        return yU
      }
      repaintIfPainted(UU, XU) {
        const zU = XU * this.columns + UU;
        UU < this.columns && XU < this.columns && 1 === this.painted[zU] && this.versions.fill(NaN, zU * this.layers, (zU + 1) * this.layers)
      }
      storeHeights(UU, XU) {
        const {
          size: zU
        } = this.map.area;
        let cU = !1,
          yU = !1;
        for (let QU = 0; QU < this.ids.length; QU++) {
          const AU = QU % jc,
            FU = Math.floor(QU / jc),
            oU = (XU * jc + FU) * zU + UU * jc + AU,
            DU = 0 === this.ids[QU] ? lc.f : this.tops[QU];
          this.heights[oU] !== DU && (cU ||= AU === jc - 1, yU ||= FU === jc - 1, this.heights[oU] = DU)
        }
        cU && this.repaintIfPainted(UU + 1, XU), yU && this.repaintIfPainted(UU, XU + 1)
      }
      readEdgeHeights(UU, XU, zU, cU, yU) {
        const {
          origin: QU,
          size: AU,
          my: FU,
          ly: oU
        } = this.map.area;
        this.api.readColumnTops(UU, XU, zU, cU, FU, oU, yU, this.edgeIds, this.edgeTops);
        const DU = zU - UU;
        for (let EU = 0; EU < jc; EU++) {
          const zU = (XU - QU + Math.floor(EU / DU)) * AU + UU - QU + EU % DU;
          this.heights[zU] = 0 === this.edgeIds[EU] ? lc.f : this.edgeTops[EU]
        }
      }
      paint(UU, XU, zU, cU) {
        const {
          origin: yU,
          size: QU,
          my: AU,
          ly: FU
        } = this.map.area, oU = XU * this.columns + UU, DU = 1 === this.stale[oU];
        this.stale[oU] = 0;
        const EU = yU + UU * jc,
          YU = yU + XU * jc,
          NU = QU - (UU + 1) * jc,
          {
            ids: IU,
            tops: pU,
            heights: aU
          } = this;
        if (0 === this.current[0 - this.lowestLayer]) return void(DU && (this.context.clearRect(NU, XU * jc, jc, jc), this.baked && this.context.drawImage(this.baked, NU, XU * jc, jc, jc, NU, XU * jc, jc, jc), IU.fill(0), this.storeHeights(UU, XU)));
        this.painted[oU] = 1, this.api.readColumnTops(EU, YU, EU + jc, YU + jc, AU, FU, cU, IU, pU), this.storeHeights(UU, XU), this.plots.has(oU - 1) || this.readEdgeHeights(EU - 1, YU, EU, YU + jc, cU), this.plots.has(oU - this.columns) || this.readEdgeHeights(EU, YU - 1, EU + jc, YU, cU);
        const tU = this.image.data;
        for (let gU = 0; gU < jc; gU++)
          for (let cU = 0; cU < jc; cU++) {
            const yU = 4 * (gU * jc + jc - 1 - cU),
              AU = IU[gU * jc + cU];
            if (0 === AU) {
              tU[yU + 3] = 0;
              continue
            }
            const FU = UU * jc + cU,
              oU = XU * jc + gU;
            zU.drawPixel(tU, yU, AU, pU[gU * jc + cU], aU[(oU - 1) * QU + FU], aU[oU * QU + FU - 1])
          }
        this.context.putImageData(this.image, NU, XU * jc)
      }
    }
    const bc = "greenvilleNavAddress",
      Tc = "greenvilleNavPlots",
      hc = "greenvilleNavMarkers",
      Uy = 5 * Math.PI / 180,
      Xy = {
        kind: "outside"
      };
    class zy {
      constructor(UU, XU, zU, cU) {
        this.map = UU, this.publishAddress = XU, this.publishPlots = zU, this.publishMarkers = cU, this.address = Xy, this.addressKey = mc(Xy), this.block = {
          x: NaN,
          z: NaN
        }, this.plots = void 0, this.markers = [], this.terrain = null, this.qY = null, this.worldResize = null, this.worldPx = 0, this.arrowTrack = null, this.arrow = null, this.zoom = 0, this.lastFrameMs = NaN, this.written = {
          u: NaN,
          v: NaN,
          scale: NaN,
          heading: NaN
        }, this.reducedMotion = null, this.logLocalScale = void 0, this.mountTerrain = UU => {
          this.terrain.mount(UU)
        }, this.mountWorld = UU => {
          var XU;
          this.qY = UU, this.written = {
            u: NaN,
            v: NaN,
            scale: NaN,
            heading: NaN
          }, null === (XU = this.worldResize) || void 0 === XU || XU.disconnect(), this.worldResize = null, UU && (this.worldResize = new ResizeObserver((UU => {
            let [XU] = UU;
            this.worldPx = XU.contentRect.width, this.written.u = NaN
          })), this.worldResize.observe(UU))
        }, this.mountArrow = UU => {
          var XU;
          this.arrowTrack = UU, this.arrow = null !== (XU = null === UU || void 0 === UU ? void 0 : UU.firstElementChild) && void 0 !== XU ? XU : null, this.written = {
            u: NaN,
            v: NaN,
            scale: NaN,
            heading: NaN
          }
        };
        const {
          origin: yU,
          size: QU
        } = UU.area;
        this.logLocalScale = Math.log(QU / 80), this.plots = {
          plots: (UU.city ? cc() : []).map(((UU, XU) => {
            let {
              chunk: zU,
              facing: cU
            } = UU;
            return {
              plotId: XU + 1,
              chunkX: zU[0] - yU / lz.f.aY,
              chunkZ: zU[2] - yU / lz.f.aY,
              facing: cU,
              state: "vacant",
              mine: !1
            }
          })),
          animate: !1
        }
      }
      start(UU) {
        this.terrain = new Kc(UU, this.map, this.plots.plots)
      }
      dispose() {
        this.terrain.dispose()
      }
      getAddress() {
        return this.address
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
      PY(UU) {
        const XU = [...this.plots.plots];
        for (const [cU, yU, QU] of "plotsAll" === UU[0] ? UU[1] : [UU[1]]) {
          const UU = XU[cU - 1];
          var zU;
          if (UU.state === yU && UU.mine === QU || (XU[cU - 1] = {
              ...UU,
              state: yU,
              mine: QU
            }), UU.state !== yU) null === (zU = this.terrain) || void 0 === zU || zU.forget(UU.chunkX, UU.chunkZ)
        }
        this.plots = {
          plots: XU,
          animate: "plotsOne" === UU[0]
        }, this.publishPlots(this.plots)
      }
      receiveMarkers(UU) {
        this.markers = UU.map((UU => {
          const [XU, zU] = [this.toMapUnits(UU[2]), this.toMapUnits(UU[3])];
          return "mapPlace" === UU[0] ? {
            kind: "place",
            place: UU[1],
            x: XU,
            z: zU
          } : {
            kind: "npc",
            face: null === UU[1] ? "npc" : `npc_${UU[1]}`,
            x: XU,
            z: zU
          }
        })), this.publishMarkers(this.markers)
      }
      frame(UU, XU, zU) {
        if (!XU) return;
        const cU = Math.floor(XU[0]),
          yU = Math.floor(XU[2]);
        if (cU !== this.block.x || yU !== this.block.z) {
          this.block = {
            x: cU,
            z: yU
          }, this.terrain.focusOn(cU, yU), this.address = nc(cU, yU, UU.cameraHeading, this.address);
          const XU = mc(this.address);
          XU !== this.addressKey && (this.addressKey = XU, this.publishAddress(this.address))
        }
        const QU = performance.now(),
          AU = function(UU, XU, zU) {
            return UU && (zU || "plot" !== XU.kind && "tile" !== XU.kind) ? 0 : 1
          }(this.map.city, this.address, zU);
        if (this.zoom !== AU) {
          this.reducedMotion ??= window.matchMedia("(prefers-reduced-motion: reduce)");
          const UU = this.reducedMotion.matches ? 1 : 1 - Math.exp(-(QU - this.lastFrameMs) / 150);
          this.zoom += (AU - this.zoom) * (Number.isNaN(UU) ? 1 : UU), Math.abs(AU - this.zoom) < .002 && (this.zoom = AU)
        }
        this.lastFrameMs = QU, this.isMapShown() && this.writeView(XU[0], XU[2], UU.cameraHeading)
      }
      toMapUnits(UU) {
        return (UU - this.map.area.origin) / lz.f.aY
      }
      writeView(UU, XU, zU) {
        const {
          qY: cU,
          arrowTrack: yU,
          arrow: QU,
          written: AU
        } = this;
        if (!cU || !yU || !QU) return;
        const {
          origin: FU,
          size: oU
        } = this.map.area, DU = (FU + oU - UU) / oU, EU = (XU - FU) / oU, YU = Math.exp(this.zoom * this.logLocalScale), NU = Math.abs(Math.atan2(Math.sin(zU - AU.heading), Math.cos(zU - AU.heading))), IU = YU !== AU.scale, pU = !(Math.hypot(DU - AU.u, EU - AU.v) * this.worldPx * YU < 1);
        if (IU || pU || !(NU < Uy)) {
          if (IU || pU) {
            this.written.u = DU, this.written.v = EU;
            const UU = DU + (.5 - DU) * this.zoom - DU * YU,
              XU = EU + (.5 - EU) * this.zoom - EU * YU;
            cU.style.transform = `translate(${100*UU}%, ${100*XU}%) scale(${YU})`, yU.style.transform = `translate(${100*DU}%, ${100*EU}%)`
          }(IU || NU >= Uy) && (QU.style.transform = `translate(-50%, -50%) scale(${1/YU}) rotate(${180+180*zU/Math.PI}deg)`, this.written.heading = zU), IU && (cU.style.setProperty("--greenville-map-unzoom", String(1 / YU)), cU.style.setProperty("--greenville-map-zoom", String(this.zoom)), this.written.scale = YU)
        }
      }
    }
    var cy = zU(39378);
    const yy = Tz / lz.f.aY,
      Qy = `matrix(-1 0 0 1 ${yy} 0)`,
      Ay = .08,
      Fy = [{
        transform: "scaleY(0)"
      }, {
        transform: "scaleY(1)"
      }],
      oy = [{
        opacity: 1
      }, {
        opacity: 0
      }],
      Dy = {
        quarry: yc.mining,
        industry: yc.demolition,
        market: yc.market,
        lumberMill: yc.woodcutting,
        farm: yc.farming,
        dealership: "Light Blue Car"
      },
      Ey = {
        drillBay: yc.mining,
        vanBay: "Yellow Kart",
        carPickup: "Light Blue Car",
        demolitionPit: yc.demolition,
        farmField: yc.farming,
        woods: yc.woodcutting
      },
      Yy = Uc.flatMap(((UU, XU) => UU.flatMap(((UU, zU) => "residential" === UU.kind ? [] : [{
        tile: UU,
        x: 1 + 3 * zU,
        z: 1 + 3 * XU
      }])))),
      Ny = [...Hc.eastWest, ...Hc.northSouth];

    function Iy(UU, XU) {
      return {
        left: (yy - UU) / yy * 100 + "%",
        top: XU / yy * 100 + "%"
      }
    }

    function py(UU) {
      let {
        axis: XU,
        line: zU
      } = UU;
      const cU = .3,
        yU = 3 * zU + cU,
        QU = yy - .6;
      return "eastWest" === XU ? {
        x: cU,
        y: yU,
        width: QU,
        height: .4
      } : {
        x: yU,
        y: cU,
        width: .4,
        height: QU
      }
    }

    function ay(UU) {
      let {
        controller: XU
      } = UU;
      (0, kU.j)(Tc, null);
      const {
        plots: zU,
        animate: cU
      } = XU.getPlots(), {
        city: yU
      } = XU.map;
      return (0, RU.jsx)("div", {
        className: "GreenvilleNavMap",
        children: (0, RU.jsxs)("div", {
          className: "GreenvilleNavMapWorld",
          ref: XU.mountWorld,
          children: [yU && (0, RU.jsx)("svg", {
            className: "GreenvilleNavMapPlan",
            viewBox: `0 0 ${yy} ${yy}`,
            preserveAspectRatio: "none",
            shapeRendering: "crispEdges",
            children: (0, RU.jsxs)("g", {
              transform: Qy,
              children: [(0, RU.jsx)("rect", {
                className: "GreenvilleNavGround",
                width: yy,
                height: yy
              }), Ny.map((UU => (0, RU.jsx)("rect", {
                className: "GreenvilleNavRoad",
                ...py(UU)
              }, UU.name))), Yy.map((UU => {
                let {
                  tile: XU,
                  x: zU,
                  z: cU
                } = UU;
                return (0, RU.jsx)("rect", {
                  className: "GreenvilleNavDistrict",
                  "data-district": XU.district,
                  x: zU,
                  y: cU,
                  width: 2,
                  height: 2
                }, XU.district)
              })), zU.map((UU => (0, RU.jsx)(gy, {
                plot: UU,
                animate: cU
              }, UU.plotId)))]
            })
          }), (0, RU.jsx)("div", {
            className: "GreenvilleNavMapTerrainHost",
            ref: XU.mountTerrain
          }), yU && (0, RU.jsxs)(RU.Fragment, {
            children: [(0, RU.jsx)("svg", {
              className: "GreenvilleNavMapLots",
              viewBox: `0 0 ${yy} ${yy}`,
              preserveAspectRatio: "none",
              children: (0, RU.jsx)("g", {
                transform: Qy,
                children: zU.map((UU => (0, RU.jsx)("rect", {
                  className: pU()("GreenvilleNavLot", {
                    Vacant: "vacant" === UU.state,
                    Loading: "loading" === UU.state,
                    Mine: UU.mine
                  }),
                  x: UU.chunkX + Ay,
                  y: UU.chunkZ + Ay,
                  width: .84,
                  height: .84
                }, UU.plotId)))
              })
            }), Yy.map((UU => {
              let {
                tile: XU,
                x: zU,
                z: cU
              } = UU;
              const yU = Dy[XU.district];
              return yU && (0, RU.jsx)("span", {
                className: "GreenvilleNavPin GreenvilleNavLandmark",
                style: Iy(zU + 1, cU + 1),
                children: (0, RU.jsx)(gU.c, {
                  itemName: yU,
                  amount: 0
                })
              }, XU.district)
            })), (0, RU.jsx)(ty, {
              controller: XU
            })]
          }), (0, RU.jsx)("div", {
            className: "GreenvilleNavArrowTrack",
            ref: XU.mountArrow,
            children: (0, RU.jsx)("div", {
              className: "GreenvilleNavArrow",
              children: (0, RU.jsx)("svg", {
                viewBox: "-1 -1 2 2",
                children: (0, RU.jsx)("polygon", {
                  points: "0,-0.8 0.62,0.62 0,0.28 -0.62,0.62"
                })
              })
            })
          }), zU.map((UU => UU.mine && (0, RU.jsx)("span", {
            className: "GreenvilleNavPin GreenvilleNavHome",
            style: Iy(UU.chunkX + .5, UU.chunkZ + ("north" === UU.facing ? 0 : 1)),
            children: (0, RU.jsx)(TU.d, {
              name: "house"
            })
          }, UU.plotId)))]
        })
      })
    }

    function ty(UU) {
      let {
        controller: XU
      } = UU;
      return (0, kU.j)(hc, null), (0, RU.jsx)(RU.Fragment, {
        children: XU.getMarkers().map(((UU, XU) => (0, RU.jsxs)("span", {
          className: "GreenvilleNavPin GreenvilleNavMarker",
          style: Iy(UU.x, UU.z),
          children: ["npc" === UU.kind && (0, RU.jsx)(cy.e, {
            icon: UU.face
          }), "place" === UU.kind && (0, RU.jsx)(gU.c, {
            itemName: Ey[UU.place],
            amount: 0
          })]
        }, XU)))
      })
    }
    const gy = (0, FU.memo)((function(UU) {
      let {
        plot: XU,
        animate: zU
      } = UU;
      const cU = (0, FU.useRef)(null),
        yU = (0, FU.useRef)(XU.state),
        QU = (0, FU.useRef)(null);
      return (0, FU.useLayoutEffect)((() => {
        var UU;
        const AU = yU.current;
        yU.current = XU.state, AU !== XU.state && (null === (UU = QU.current) || void 0 === UU || UU.cancel(), zU && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && ("built" === XU.state ? QU.current = cU.current.animate(Fy, {
          duration: 300,
          easing: "ease-out"
        }) : "vacant" === XU.state && (QU.current = cU.current.animate(oy, {
          duration: 400,
          easing: "ease-in"
        }))))
      }), [XU.state]), (0, FU.useEffect)((() => () => {
        var UU;
        null === (UU = QU.current) || void 0 === UU || UU.cancel()
      }), []), (0, RU.jsxs)(RU.Fragment, {
        children: [(0, RU.jsx)("rect", {
          className: "GreenvilleNavPlotGrass",
          x: XU.chunkX + Ay,
          y: XU.chunkZ + Ay,
          width: .84,
          height: .84
        }), (0, RU.jsx)("rect", {
          ref: cU,
          className: pU()("GreenvilleNavPlotRoof", {
            Loading: "loading" === XU.state,
            Built: "built" === XU.state,
            Mine: XU.mine
          }),
          x: XU.chunkX + Ay,
          y: XU.chunkZ + Ay,
          width: .84,
          height: .84
        })]
      })
    }));

    function ky(UU) {
      let {
        controller: XU
      } = UU;
      const [zU, cU] = (0, FU.useState)((() => XU.isMapShown()));
      (0, kU.f)(bc, (() => {
        cU(XU.isMapShown())
      }));
      const yU = (0, iU.e)();
      return (0, RU.jsx)("div", {
        className: pU()("GreenvilleNav", {
          Hidden: yU || !zU
        }),
        children: (0, RU.jsx)(ay, {
          controller: XU
        })
      })
    }
    const Gy = lz.f.aY,
      By = {
        origin: jz,
        size: Tz,
        my: -2 * Gy,
        ly: 4 * Gy
      },
      Zy = {
        origin: 1562 * Gy,
        size: 13 * Gy,
        my: 0,
        ly: 5 * Gy
      },
      Ry = zU.p + "static/media/greenvilleCity.7b141fefdb213c21b37a.png",
      Py = zU.p + "static/media/greenvilleGrove.71253c8c4ae6c9cacba5.png",
      Wy = {
        area: By,
        imageUrl: Ry,
        city: !0
      },
      dy = {
        area: Zy,
        imageUrl: Py,
        city: !1
      };

    function Ly(UU) {
      return UU >= 75 ? "face-smile" : UU >= 50 ? "face-diagonal-mouth" : UU >= 25 ? "face-worried" : "face-dizzy"
    }

    function ey(UU) {
      const XU = Math.round(UU);
      return `${XU>0?"+":""}${XU}%`
    }

    function Cy(UU) {
      let {
        controller: XU
      } = UU;
      (0, kU.j)(vz, null);
      const zU = XU.getMood();
      return zU ? (0, RU.jsx)(tU.e, {
        placement: "statBars",
        children: (0, RU.jsx)(wy, {
          mood: zU
        })
      }) : null
    }

    function wy(UU) {
      let {
        mood: XU
      } = UU;
      const {
        t: zU
      } = (0, BU.I)(), cU = function(UU) {
        const [, XU] = (0, FU.useState)(0);
        return (0, FU.useEffect)((() => {
          const zU = UU - performance.now();
          if (zU <= 0) return;
          const cU = window.setTimeout((() => {
            XU((UU => UU + 1))
          }), zU);
          return () => {
            window.clearTimeout(cU)
          }
        }), [UU]), UU > performance.now()
      }(XU.restedEndsAt), {
        energy: yU,
        breakEvenEnergy: QU,
        luckPercent: AU
      } = XU, oU = null !== AU && void 0 !== AU ? AU : XU.earningsPercent;
      return (0, RU.jsxs)("div", {
        className: pU()("GreenvilleMoodChip", {
          Exhausted: yU < 25,
          Rested: cU,
          Tired: !cU && yU < QU && yU >= 25,
          Drained: !cU && yU < 25
        }),
        role: "img",
        "aria-label": zU("greenvilleGame:moodEnergyLabel", {
          energy: Math.round(yU)
        }),
        children: [(0, RU.jsx)(TU.d, {
          name: Ly(yU),
          className: "GreenvilleMoodChipFace"
        }), cU && (0, RU.jsx)("span", {
          className: "GreenvilleMoodChipZz",
          children: zU("greenvilleGame:moodRestedGlyph")
        }), (0, RU.jsxs)("div", {
          className: "GreenvilleMoodChipMeter",
          style: {
            "--greenville-break-even": `${QU}%`
          },
          children: [(0, RU.jsx)("div", {
            className: "GreenvilleMoodChipBar",
            children: (0, RU.jsx)("div", {
              className: "GreenvilleMoodChipFill",
              style: {
                transform: `scaleX(${Math.min(100,Math.max(0,yU))/100})`
              }
            })
          }), (0, RU.jsx)("div", {
            className: "GreenvilleMoodChipTick"
          })]
        }), null === AU && (0, RU.jsx)("span", {
          className: "GreenvilleMoodChipCoin",
          "aria-hidden": "true",
          children: (0, RU.jsx)(gU.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), (0, RU.jsxs)("span", {
          className: pU()("GreenvilleMoodChipEarnings", {
            Positive: Math.round(oU) > 0,
            Negative: Math.round(oU) < 0
          }),
          children: [null !== AU && (0, RU.jsx)("span", {
            className: "GreenvilleMoodChipLuck",
            children: zU("greenvilleGame:luck")
          }), ey(oU)]
        }), XU.adBoosted && (0, RU.jsx)("span", {
          className: "GreenvilleMoodChipBoost",
          children: (0, RU.jsx)(TU.d, {
            name: "bolt"
          })
        })]
      })
    }

    function qy(UU) {
      let {
        controller: XU
      } = UU;
      (0, kU.j)(Mz, null);
      const zU = XU.getPlace();
      return "hudHome" !== (null === zU || void 0 === zU ? void 0 : zU.kind) || null === zU.runStartedAt ? null : (0, RU.jsx)(Oy, {
        startedAt: zU.runStartedAt
      })
    }

    function Oy(UU) {
      let {
        startedAt: XU
      } = UU;
      const zU = Math.max(0, Math.floor(-(0, Zc.h)(XU)));
      return (0, RU.jsx)("div", {
        className: "GreenvilleMarketCountdown",
        role: "timer",
        children: (0, RU.jsxs)("div", {
          className: "GreenvilleMarketCountdownTime FullyFancyText",
          children: [Math.floor(zU / 60), ":", String(zU % 60).padStart(2, "0")]
        })
      })
    }
    const Sy = [{
        transform: "translateY(100%)",
        opacity: 0
      }, {
        transform: "translateY(0)",
        opacity: 1
      }],
      ry = [{
        transform: "translateY(-100%)",
        opacity: 0
      }, {
        transform: "translateY(0)",
        opacity: 1
      }];

    function uy(UU) {
      return UU ? `${UU.number}|${UU.street.name}` : ""
    }

    function fy(UU) {
      let {
        address: XU,
        large: zU,
        rootRef: cU
      } = UU;
      const yU = function(UU) {
          switch (UU.kind) {
            case "junction":
              return [{
                street: UU.along,
                number: null
              }, {
                street: UU.cross,
                number: null
              }];
            case "plot":
            case "tile":
              return [{
                street: UU.street,
                number: UU.number
              }, null];
            case "street":
              return [{
                street: UU.street,
                number: UU.block
              }, null]
          }
        }(XU),
        QU = zU && "plot" === XU.kind ? XU.neighbourhood : null,
        AU = (0, FU.useRef)(null),
        oU = (0, FU.useRef)(null),
        DU = (0, FU.useRef)(yU),
        EU = (0, FU.useRef)({
          large: zU,
          top: 0,
          height: 0
        }),
        YU = (0, FU.useRef)([]),
        NU = (0, FU.useRef)(null);
      (0, FU.useLayoutEffect)((() => {
        const UU = DU.current;
        if (DU.current = yU, window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const XU = [];
        if (uy(UU[0]) !== uy(yU[0]) && XU.push(AU.current.animate(Sy, {
            duration: 180,
            easing: "ease-out"
          })), yU[1] && !UU[1] && XU.push(oU.current.animate(ry, {
            duration: 220,
            easing: "ease-out"
          })), XU.length > 0) {
          for (const UU of YU.current) UU.cancel();
          YU.current = XU
        }
      }), [uy(yU[0]), uy(yU[1])]), (0, FU.useLayoutEffect)((() => {
        var UU;
        const XU = cU.current,
          yU = EU.current;
        EU.current = {
          large: zU,
          top: XU.offsetTop,
          height: XU.offsetHeight
        }, yU.large === zU || 0 === yU.height || 0 === XU.offsetHeight || window.matchMedia("(prefers-reduced-motion: reduce)").matches || (null === (UU = NU.current) || void 0 === UU || UU.cancel(), NU.current = XU.animate([{
          transform: `translateY(${yU.top-XU.offsetTop}px) scale(${yU.height/XU.offsetHeight})`
        }, {
          transform: "none"
        }], {
          duration: 260,
          easing: "ease-out"
        }))
      }), [zU, QU, uy(yU[0]), uy(yU[1])]), (0, FU.useEffect)((() => {
        const UU = cU.current,
          XU = new ResizeObserver((() => {
            EU.current = {
              ...EU.current,
              top: UU.offsetTop,
              height: UU.offsetHeight
            }
          }));
        return XU.observe(UU.parentElement), () => {
          var UU;
          XU.disconnect();
          for (const XU of YU.current) XU.cancel();
          null === (UU = NU.current) || void 0 === UU || UU.cancel()
        }
      }), [cU]);
      const [IU, aU] = yU;
      return (0, RU.jsxs)("div", {
        ref: cU,
        className: pU()("GreenvilleNavSign", {
          Large: zU
        }),
        children: [(0, RU.jsxs)("div", {
          className: "GreenvilleNavBlade",
          children: [null !== QU && (0, RU.jsx)("span", {
            className: "GreenvilleNavHeader",
            children: QU
          }), (0, RU.jsx)(iy, {
            blade: IU,
            textRef: AU
          })]
        }), aU && (0, RU.jsx)("div", {
          ref: oU,
          className: "GreenvilleNavBlade",
          children: (0, RU.jsx)(iy, {
            blade: aU
          })
        })]
      })
    }

    function iy(UU) {
      let {
        blade: XU,
        textRef: zU
      } = UU;
      return (0, RU.jsxs)("span", {
        ref: zU,
        className: "GreenvilleNavBladeText",
        children: [null !== XU.number && (0, RU.jsx)("span", {
          className: "GreenvilleNavNumber",
          children: XU.number
        }), (0, RU.jsxs)("span", {
          className: "GreenvilleNavStreet",
          children: [XU.street.shortName, " ", (0, RU.jsx)("span", {
            className: "GreenvilleNavSuffix",
            children: XU.street.suffix
          })]
        })]
      })
    }
    const Hy = "4rem",
      My = `translateY(${Hy}) scale(1.4)`,
      vy = [{
        transform: My,
        opacity: 0
      }, {
        transform: My,
        opacity: 1,
        offset: .12
      }, {
        transform: My,
        opacity: 1,
        offset: .7,
        easing: "ease-in-out"
      }, {
        transform: "none",
        opacity: 1
      }],
      Vy = [{
        opacity: 0
      }, {
        opacity: 1
      }];

    function sy(UU) {
      var XU;
      let {
        controller: zU,
        nav: cU
      } = UU;
      (0, kU.j)(Mz, null), (0, kU.j)(bc, null);
      const {
        t: yU
      } = (0, BU.I)(), QU = (0, iU.e)(), AU = (0, FU.useRef)(null), oU = (0, FU.useRef)(null), DU = (0, FU.useRef)(null), EU = (0, FU.useRef)(null), YU = (0, FU.useRef)(null), NU = (0, FU.useRef)(null), IU = (0, qX.i)("hiddenPlayerNames"), pU = zU.getPlace(), aU = cU.getAddress(), tU = pU && Ac(yU, pU, aU, IU), gU = tU ? tU.key : null;
      if ((0, FU.useLayoutEffect)((() => {
          var UU, XU, zU, cU;
          if (null === gU) return null === (zU = EU.current) || void 0 === zU || zU.cancel(), void(null === (cU = YU.current) || void 0 === cU || cU.cancel());
          if (AU.current === gU) return;
          if (AU.current = gU, QU) return;
          const yU = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          null === (UU = EU.current) || void 0 === UU || UU.cancel(), EU.current = oU.current.animate(yU ? Vy : vy, {
            duration: yU ? 400 : 2200
          }), null === (XU = YU.current) || void 0 === XU || XU.cancel(), !yU && DU.current && (YU.current = DU.current.animate(function(UU) {
            const XU = `0 calc(${Hy} + ${(1.4-1)*UU}px)`;
            return [{
              translate: "0 0",
              easing: "ease-out"
            }, {
              translate: XU,
              offset: .12
            }, {
              translate: XU,
              offset: .7,
              easing: "ease-in-out"
            }, {
              translate: "0 0"
            }]
          }(oU.current.offsetHeight), {
            duration: 2200
          }))
        }), [gU]), (0, FU.useEffect)((() => () => {
          var UU, XU;
          null === (UU = EU.current) || void 0 === UU || UU.cancel(), null === (XU = YU.current) || void 0 === XU || XU.cancel()
        }), []), !pU) return null;
      let GU = "outside" === aU.kind ? null : aU;
      return !tU || "plot" !== aU.kind && "tile" !== aU.kind ? tU && GU && (null === (XU = NU.current) || void 0 === XU ? void 0 : XU.key) === tU.key && (GU = NU.current.address) : NU.current = {
        key: tU.key,
        address: aU
      }, (0, RU.jsxs)("div", {
        className: "GreenvilleTopBar",
        children: [tU && (0, RU.jsx)(ny, {
          title: tU,
          tagRef: oU,
          job: "hudJob" === pU.kind ? pU : null,
          home: "hudHome" === pU.kind ? pU : null
        }), GU && (0, RU.jsx)(fy, {
          address: GU,
          large: !tU,
          rootRef: DU
        })]
      })
    }

    function ny(UU) {
      let {
        title: XU,
        tagRef: zU,
        job: cU,
        home: yU
      } = UU;
      return (0, RU.jsxs)("div", {
        ref: zU,
        className: "GreenvillePlaceTag",
        role: "status",
        children: [null !== XU.eyebrow && (0, RU.jsx)("span", {
          className: "GreenvillePlaceTagEyebrow",
          children: XU.eyebrow
        }), (0, RU.jsx)("strong", {
          className: "GreenvillePlaceTagName",
          children: XU.name
        }), cU && (0, RU.jsx)(my, {
          job: cU
        }), yU && (0, RU.jsx)(xy, {
          home: yU
        })]
      })
    }

    function my(UU) {
      let {
        job: XU
      } = UU;
      const {
        t: zU
      } = (0, BU.I)(), {
        level: cU,
        expInto: yU,
        expNeeded: QU
      } = XU, AU = 0 === QU;
      return (0, RU.jsxs)("div", {
        className: "GreenvillePlaceTagRow",
        children: [(0, RU.jsx)("span", {
          className: "GreenvillePlaceTagJob",
          "aria-hidden": "true",
          children: (0, RU.jsx)(gU.c, {
            itemName: yc[XU.job],
            amount: 0
          })
        }), (0, RU.jsx)("span", {
          className: "GreenvillePlaceTagLevel",
          children: zU("greenvilleGame:levelShort", {
            level: cU
          })
        }), (0, RU.jsx)("div", {
          className: "GreenvillePlaceTagBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": AU ? 100 : Math.round(yU / QU * 100),
          children: (0, RU.jsx)("div", {
            className: "GreenvillePlaceTagBarFill",
            style: {
              transform: `scaleX(${AU?1:Math.min(1,yU/QU)})`
            }
          })
        }), !AU && (0, RU.jsxs)("span", {
          className: "GreenvillePlaceTagExp",
          children: [(0, uU.f)(yU), "/", (0, uU.f)(QU)]
        }), AU && (0, RU.jsx)("span", {
          className: "GreenvillePlaceTagMax",
          children: zU("greenvilleGame:levelMax")
        }), null !== XU.status && (0, RU.jsx)(ly, {
          status: XU.status
        })]
      })
    }

    function ly(UU) {
      let {
        status: XU
      } = UU;
      const {
        t: zU
      } = (0, BU.I)();
      switch (XU.kind) {
        case "hudTier":
          return (0, RU.jsxs)("span", {
            className: pU()("GreenvillePlaceChip", {
              Locked: XU.locked
            }),
            children: [XU.locked && (0, RU.jsx)(TU.d, {
              name: "lock"
            }), zU(`greenvilleGame:${XU.tierKey}`)]
          });
        case "hudBay":
          return (0, RU.jsxs)("span", {
            className: "GreenvillePlaceChip",
            children: [zU("greenvilleGame:demolitionBayObject", {
              material: zU(`greenvilleGame:${XU.materialKey}`),
              object: zU(`greenvilleGame:${XU.objectKey}`)
            }), (0, RU.jsx)("span", {
              className: "GreenvillePlaceChipBar",
              children: (0, RU.jsx)("span", {
                className: "GreenvillePlaceChipBarFill",
                style: {
                  transform: `scaleX(${XU.percent/100})`
                }
              })
            })]
          });
        case "hudBayEmpty":
          return (0, RU.jsx)("span", {
            className: "GreenvillePlaceChip",
            children: zU("greenvilleGame:demolitionYardIncoming")
          });
        case "hudFarmTier":
          return (0, RU.jsx)("span", {
            className: "GreenvillePlaceChip Golden",
            children: zU("greenvilleGame:farmGoldenChance", {
              percent: XU.goldenPercent
            })
          })
      }
    }

    function xy(UU) {
      let {
        home: XU
      } = UU;
      const {
        t: zU
      } = (0, BU.I)();
      return XU.pvp || XU.parkour || !XU.visitorsAllowed ? (0, RU.jsxs)("div", {
        className: "GreenvillePlaceTagRow GreenvillePlaceTagChips",
        children: [XU.pvp && (0, RU.jsx)("span", {
          className: "GreenvillePlaceChip Danger",
          children: zU("greenvilleGame:houseChipPvp")
        }), XU.parkour && (0, RU.jsx)("span", {
          className: "GreenvillePlaceChip",
          children: zU("greenvilleGame:houseChipParkour")
        }), !XU.visitorsAllowed && (0, RU.jsxs)("span", {
          className: "GreenvillePlaceChip Locked",
          children: [(0, RU.jsx)(TU.d, {
            name: "lock"
          }), zU("greenvilleGame:houseChipVisitorsOff")]
        })]
      }) : null
    }
    const Jy = function(UU, XU, zU, yU) {
      let QU, {
        localPlayerId: AU
      } = yU;
      const IU = new NU((UU => {
          oU.k.UY(YU, UU)
        })),
        pU = new Ic((UU => {
          oU.k.UY(Nc, UU)
        })),
        aU = {
          onGain: () => {
            QU.playSound(AU, "rpgHandleCoins1", .5, .9 + .3 * Math.random())
          },
          onCoinLanded: (UU, XU) => {
            QU.playSound(AU, "pickUp", .3, 1 + .5 * UU / Math.max(1, XU - 1))
          }
        },
        tU = [],
        gU = {
          open: UU => {
            for (const XU of tU) XU !== UU && XU.onMenuClosed();
            (0, EU.r)()
          },
          close: EU.j,
          dismiss: EU.l
        },
        kU = new DU.d,
        GU = new TX((UU => {
          oU.k.UY(KX, UU)
        }), gU, (UU => {
          QU.sendCommand(null === UU ? cU : `${cU} ${UU}`)
        }), kU),
        BU = new bU((UU => {
          oU.k.UY(jU, UU)
        }), gU, (UU => {
          QU.sendCommand(`demolition pick ${UU}`)
        }), kU),
        ZU = new kX((UU => {
          oU.k.UY(tX, UU)
        }), gU, (UU => {
          QU.sendCommand(`garage pick ${UU}`)
        }), kU),
        RU = new Bc((UU => {
          oU.k.UY(kc, UU)
        })),
        PU = new Vz((UU => {
          oU.k.UY(Mz, UU)
        }), (UU => {
          oU.k.UY(vz, UU)
        })),
        WU = new zy(function(UU) {
          return "profIsland" === UU ? dy : Wy
        }(zU), (UU => {
          oU.k.UY(bc, UU)
        }), (UU => {
          oU.k.UY(Tc, UU)
        }), (UU => {
          oU.k.UY(hc, UU)
        }));
      let dU = null;
      const LU = new CX((UU => {
          oU.k.UY(LX, UU)
        }), (UU => {
          oU.k.UY(eX, UU)
        }), gU, (UU => {
          QU.sendCommand(UU)
        }), kU),
        eU = new gz((UU => {
          oU.k.UY(pz, UU)
        }), (UU => {
          oU.k.UY(az, UU)
        }), gU, (UU => {
          QU.sendCommand(UU)
        }), kU);
      tU.push(GU, BU, ZU, LU, eU);
      let CU = null;
      return {
        onCreate: UU => {
          QU = UU, WU.start(UU), dU = new uc(RU), CU = (0, EU.u)((0, FU.createElement)(FU.Fragment, null, (0, FU.createElement)(wU, {
            controller: IU
          }), (0, FU.createElement)(tc, {
            controller: pU
          }), (0, FU.createElement)(qc, {
            market: RU,
            markers: dU
          }), (0, FU.createElement)(Pc, {
            controller: RU
          }), (0, FU.createElement)(sy, {
            controller: PU,
            nav: WU
          }), (0, FU.createElement)(Cy, {
            controller: PU
          }), (0, FU.createElement)(Fc, {
            controller: PU
          }, (0, FU.createElement)(sU, {
            sounds: aU
          }), (0, FU.createElement)(ky, {
            controller: WU
          }), (0, FU.createElement)(Hz, {
            controller: eU
          }), (0, FU.createElement)(dc, {
            controller: RU
          }), (0, FU.createElement)(jX, {
            controller: LU
          })), (0, FU.createElement)(qy, {
            controller: PU
          })), {
            content: (0, FU.createElement)(FU.Fragment, null, (0, FU.createElement)(zz, {
              controller: GU
            }), (0, FU.createElement)(aX, {
              controller: BU
            }), (0, FU.createElement)(ZX, {
              controller: ZU
            }), (0, FU.createElement)(JX, {
              controller: LU
            }), (0, FU.createElement)(fz, {
              controller: eU
            })),
            onClose: () => {
              for (const UU of tU) UU.onMenuClosed()
            }
          })
        },
        onClose: () => {
          CU(), WU.dispose(), GU.dropPresses(), BU.dropPresses(), ZU.dropPresses(), dU.waypoints.dispose(), LU.dropPresses(), eU.dropPresses(), kU.dispose()
        },
        onAfterRender: (UU, XU) => {
          const zU = QU.getPositionView(AU);
          dU.frame(XU, zU), WU.frame(XU, zU, QU.isLocalPlayerInVehicle())
        },
        onReceivedMessageFromServer: (UU, XU) => {
          "greenvilleBackpack" === UU ? IU.PY(XU) : "greenvilleOreBuyer" === UU ? GU.PY(XU) : "greenvilleLumberMill" === UU ? LU.PY(XU) : "greenvilleDemolition" === UU ? BU.PY(XU) : "greenvilleGarage" === UU ? ZU.PY(XU) : "greenvilleFarmBoard" === UU ? eU.PY(XU) : "greenvilleMarket" === UU ? RU.PY(XU) : "greenvilleHud" === UU ? PU.PY(XU) : "greenvilleLevelUp" === UU ? pU.PY(XU) : "greenvillePlots" === UU ? WU.PY(XU) : "greenvilleMapMarkers" === UU && WU.receiveMarkers(XU)
        }
      }
    }
  },
  40307: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => FU,
      f: () => AU
    });
    var cU = zU(9782);
    const yU = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      QU = [150, 150, 150],
      AU = -2147483648;
    class FU {
      constructor(UU) {
        this.averages = UU, this.byId = new Map
      }
      get(UU) {
        var XU, zU, AU, FU, oU;
        const DU = this.byId.get(UU);
        if (void 0 !== DU) return DU;
        const EU = null !== (XU = null === (zU = cU.h[UU]) || void 0 === zU ? void 0 : zU.name) && void 0 !== XU ? XU : "",
          YU = EU.split("|")[0],
          NU = null !== (AU = this.averages[EU]) && void 0 !== AU ? AU : this.averages[YU],
          IU = null !== (FU = null !== (oU = null === NU || void 0 === NU ? void 0 : NU[0]) && void 0 !== oU ? oU : yU[YU]) && void 0 !== FU ? FU : 0 === (null === NU || void 0 === NU ? void 0 : NU.length) ? null : QU;
        return this.byId.set(UU, IU), IU
      }
      getDrawnIds() {
        const UU = new Uint8Array(65536);
        for (let XU = 1; XU < 65536; XU++) void 0 !== cU.h[XU] && null !== this.get(XU) && (UU[XU] = 1);
        return UU
      }
      drawPixel(UU, XU, zU, cU, yU, QU) {
        const FU = function(UU, XU, zU) {
            const cU = UU - XU + (UU - zU);
            return Math.max(.65, Math.min(1.2, .97 + .055 * cU))
          }(cU, yU === AU ? cU : yU, QU === AU ? cU : QU),
          oU = this.get(zU);
        UU[XU] = oU[0] * FU, UU[XU + 1] = oU[1] * FU, UU[XU + 2] = oU[2] * FU, UU[XU + 3] = 255
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);