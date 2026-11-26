export const id = 273;
export const ids = [273];
export const modules = {
  40659: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV,
      i: () => YV,
      l: () => UV
    });
    var JV = xV(62);

    function YV(VV) {
      return pV(VV, QV)
    }

    function UV(VV) {
      return pV(VV, nV)
    }

    function yV(VV) {
      return `${Math.floor(VV/60)}:${String(VV%60).padStart(2,"0")}`
    }

    function pV(VV, eV) {
      const [, xV] = (0, JV.useState)(null);
      return (0, JV.useEffect)((() => {
        if (0 === VV) return;
        const JV = window.setInterval((() => {
          const JV = eV(VV);
          xV((eV => (null === eV || void 0 === eV ? void 0 : eV.endsAt) === VV && eV.value === JV ? eV : {
            endsAt: VV,
            value: JV
          }))
        }), 250);
        return () => {
          window.clearInterval(JV)
        }
      }), [VV, eV]), eV(VV)
    }

    function QV(VV) {
      return (VV - performance.now()) / 1e3
    }

    function nV(VV) {
      return Math.max(0, Math.ceil(QV(VV)))
    }
  },
  40685: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => YV
    });
    var JV = xV(40692);
    async function YV() {
      const {
        averageColors: VV
      } = await xV.e(231).then((() => xV(35423)));
      return new JV.b(VV)
    }
  },
  40663: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => QV
    });
    var JV = xV(37849),
      YV = xV(1220),
      UV = xV(1279),
      yV = xV(39648),
      pV = xV(39693);
    class QV {
      constructor(VV, eV) {
        var xV;
        this.classes = VV, this.distanceKey = eV, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.ik = !1, this.hq = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.hq), null === (xV = window.visualViewport) || void 0 === xV || xV.addEventListener("resize", this.hq)
      }
      bindMarker(VV) {
        const eV = this.refs.get(VV);
        if (eV) return eV;
        const xV = eV => {
          var JV;
          null === (JV = this.markers.get(VV)) || void 0 === JV || JV.stopObserving(), this.markers.delete(VV), eV && !this.ik ? (this.markers.set(VV, this.mount(eV)), this.refs.set(VV, xV)) : this.refs.delete(VV)
        };
        return this.refs.set(VV, xV), xV
      }
      hasMarkers() {
        return this.markers.size > 0
      }
      setRender(VV) {
        this.render = VV
      }
      update(VV, eV, xV, JV, YV) {
        const UV = this.markers.get(VV);
        UV && (UV.target ??= [0, 0, 0], UV.target[0] = eV, UV.target[1] = xV, UV.target[2] = JV, this.place(UV), this.XJ(UV, YV && Math.hypot(eV - YV[0], xV - YV[1], JV - YV[2])))
      }
      dispose() {
        var VV;
        this.ik = !0, window.removeEventListener("resize", this.hq), null === (VV = window.visualViewport) || void 0 === VV || VV.removeEventListener("resize", this.hq);
        for (const eV of this.markers.values()) eV.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(VV) {
        const {
          render: eV,
          viewport: xV
        } = this;
        if (!eV || !VV.target) return;
        const JV = (50 - eV.screenBandPct.y) / 100 * xV.height,
          YV = {
            x: VV.halfSize.width + 8,
            top: VV.halfSize.height + 8,
            bottom: VV.halfSize.height + VV.labelsBelow + JV
          },
          UV = eV.projectWorldPosToViewport(VV.target),
          QV = null !== UV && void 0 !== UV ? UV : eV.projectWorldPosToScreenPos(VV.target),
          nV = (0, pV.c)({
            x: QV.x,
            y: QV.y,
            text: UV
          }, YV, xV);
        (0, yV.b)(VV.root, Math.round(100 * nV.x) / 100, Math.round(100 * nV.y) / 100)
      }
      XJ(VV, eV) {
        if (null === eV) return void(null !== VV.metres && (VV.metres = null, VV.distance.textContent = ""));
        const xV = Date.now();
        (null === VV.metres || (0, JV.e)(eV, VV.metres, VV.metresShownAt)) && (VV.metres = Math.round(eV), VV.metresShownAt = xV, VV.distance.textContent = (0, YV.u)(UV.c.get().getCurrentLanguageCode(), this.distanceKey, {
          distance: String(VV.metres)
        }))
      }
      mount(VV) {
        const eV = {
            root: VV,
            distance: VV.querySelector(`.${this.classes.distance}`),
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
          xV = VV.querySelector(`.${this.classes.labels}`),
          JV = new ResizeObserver((() => {
            eV.halfSize = {
              width: Math.max(VV.offsetWidth, xV.offsetWidth) / 2,
              height: VV.offsetHeight / 2
            }, eV.labelsBelow = xV.offsetTop + xV.offsetHeight - VV.offsetHeight, this.place(eV)
          }));
        return JV.observe(VV, {
          box: "border-box"
        }), JV.observe(xV, {
          box: "border-box"
        }), eV.stopObserving = () => {
          JV.disconnect()
        }, eV
      }
    }
  },
  40673: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => sY
    });
    const JV = "ore sell",
      YV = "lumber ",
      UV = "farm ",
      yV = ["market", "demolition", "mining", "woodcutting", "farming"];
    var pV = xV(62),
      QV = xV(32),
      nV = xV(39728),
      wV = xV(37762);
    const ZV = "greenvilleBackpackView";
    class vV {
      constructor(VV) {
        this.QZ = VV, this.view = null, this.arrivalToken = 0, this.showToken = 0
      }
      getView() {
        return this.view
      }
      RZ(VV) {
        if ("hide" === VV[0]) this.view = null;
        else if ("show" === VV[0]) {
          const eV = VV[3];
          this.view = {
            Jv: VV[1],
            shardsPerItem: VV[2],
            total: eV.reduce(((VV, eV) => {
              let [, xV] = eV;
              return VV + xV
            }), 0),
            contents: eV,
            arrival: null,
            showToken: ++this.showToken
          }
        } else {
          if (null === this.view) return void console.warn(`[greenville] backpack ${VV[0]} with no backpack shown`);
          {
            var eV, xV;
            const JV = VV[1],
              YV = this.view.contents.find((VV => {
                let [eV] = VV;
                return eV === JV
              })),
              UV = this.view.contents.filter((VV => {
                let [eV] = VV;
                return eV !== JV
              })),
              yV = null !== (eV = null === YV || void 0 === YV ? void 0 : YV[1]) && void 0 !== eV ? eV : 0,
              pV = null !== (xV = null === YV || void 0 === YV ? void 0 : YV[2]) && void 0 !== xV ? xV : 0;
            "shard" === VV[0] ? this.view = {
              ...this.view,
              contents: [...UV, [JV, yV, pV + 1]]
            } : this.view = {
              ...this.view,
              total: this.view.total + 1,
              contents: [...UV, [JV, yV + 1, 0]],
              arrival: {
                item: JV,
                token: ++this.arrivalToken,
                fromShards: pV > 0
              }
            }
          }
        }
        this.QZ(this.view)
      }
    }
    var rV = xV(1146),
      kV = xV.n(rV),
      bV = xV(27),
      EV = xV(37756),
      BV = xV(2039),
      jV = xV(1542),
      qV = xV(2116),
      tV = xV(1220);
    const FV = "data:image/png;base64,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";
    var TV = xV(1321);
    const PV = (0, pV.forwardRef)((function(VV, eV) {
      let {
        contents: xV,
        Jv: JV,
        full: YV,
        children: UV
      } = VV;
      const yV = [...xV].sort(((VV, eV) => {
        let [xV] = VV, [JV] = eV;
        return xV.localeCompare(JV)
      }));
      let pV = 0;
      return (0, TV.jsxs)("div", {
        ref: eV,
        className: "GreenvilleBackpackBag",
        children: [UV, (0, TV.jsx)("img", {
          className: kV()("GreenvilleBackpackArt", {
            Full: YV
          }),
          src: FV,
          alt: "",
          draggable: !1
        }), (0, TV.jsx)("div", {
          className: "GreenvilleBackpackWindow",
          children: yV.map((VV => {
            let [eV, xV] = VV;
            const YV = Math.min(1 - pV, xV / JV),
              UV = (0, TV.jsx)(NV, {
                item: eV,
                below: pV,
                share: YV
              }, eV);
            return pV += YV, UV
          }))
        })]
      })
    }));

    function AV() {
      const VV = new Image;
      VV.src = FV, VV.decode().catch((VV => {
        console.error("[greenville] backpack art failed to load", VV)
      }))
    }
    const NV = (0, pV.memo)((function(VV) {
        let {
          item: eV,
          below: xV,
          share: JV
        } = VV;
        return (0, TV.jsx)("div", {
          className: "GreenvilleBackpackOre",
          style: {
            bottom: `calc(var(--rise) * ${xV})`,
            height: `calc(var(--rise) * ${JV} + var(--slant))`
          },
          children: Array.from({
            length: 18
          }, ((VV, xV) => (0, TV.jsx)("div", {
            className: "GreenvilleBackpackOreTile",
            children: (0, TV.jsx)(BV.e, {
              itemName: eV,
              amount: 0
            })
          }, xV)))
        })
      })),
      XV = [{
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
      MV = [{
        transform: "scale(1.3)"
      }, {
        transform: "scale(1)"
      }];
    let zV = 1;

    function GV(VV) {
      let {
        controller: eV
      } = VV;
      (0, jV.j)(ZV, null), (0, pV.useEffect)(AV, []);
      const xV = eV.getView();
      return null === xV ? null : (0, TV.jsx)(EV.e, {
        placement: "bottomLeft",
        children: (0, TV.jsx)(WV, {
          view: xV
        })
      })
    }

    function WV(VV) {
      let {
        view: eV
      } = VV;
      const {
        t: xV
      } = (0, tV.A)(), {
        isTouchScreen: JV
      } = (0, bV.l)(["isTouchScreen"]), [YV, UV] = (0, pV.useState)([]), yV = (0, pV.useRef)(null), QV = (0, pV.useRef)(null), nV = (0, pV.useRef)([]), wV = (0, pV.useRef)({
        arrival: eV.arrival,
        showToken: eV.showToken
      }), {
        arrival: ZV,
        showToken: vV
      } = eV;
      (0, pV.useLayoutEffect)((() => {
        var VV;
        if (vV !== wV.current.showToken) UV([]);
        else if (null !== ZV && ZV.token !== (null === (VV = wV.current.arrival) || void 0 === VV ? void 0 : VV.token) && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          const VV = {
            id: zV++,
            item: ZV.item,
            fromShards: ZV.fromShards,
            driftEm: 1.4 * (Math.random() - .5),
            spinDeg: 70 * (Math.random() - .5)
          };
          UV((eV => eV.length < 6 ? [...eV, VV] : eV))
        }
        wV.current = {
          arrival: ZV,
          showToken: vV
        }
      }), [ZV, vV]), (0, pV.useEffect)((() => () => {
        for (const VV of nV.current) VV.cancel()
      }), []);
      const rV = (0, pV.useCallback)((() => {
          for (const VV of nV.current) VV.cancel();
          nV.current = [yV.current.animate(XV, {
            duration: 300,
            easing: "ease-out"
          }), QV.current.animate(MV, {
            duration: 220,
            easing: "ease-out"
          })]
        }), []),
        EV = (0, pV.useCallback)((VV => {
          UV((eV => eV.filter((eV => eV.id !== VV)))), rV()
        }), [rV]),
        jV = eV.total - YV.length,
        FV = jV >= eV.Jv,
        AV = eV.contents.map((VV => {
          let [xV, JV, UV] = VV;
          const yV = YV.filter((VV => VV.item === xV)),
            pV = yV.some((VV => VV.fromShards));
          return [xV, JV - yV.length, pV ? eV.shardsPerItem : UV]
        })),
        NV = AV.filter((VV => {
          let [, eV, xV] = VV;
          return eV > 0 || xV > 0
        })).reverse().slice(0, 4),
        GV = (0, qV.p)("SpecialAction2");
      return (0, TV.jsxs)("div", {
        className: "GreenvilleBackpack",
        children: [(0, TV.jsxs)("div", {
          className: "GreenvilleBackpackCount SmallTextBold",
          children: [(0, TV.jsx)("span", {
            ref: QV,
            className: kV()("GreenvilleBackpackTotal", {
              Full: FV
            }),
            children: jV
          }), (0, TV.jsxs)("span", {
            className: "GreenvilleBackpackCapacity",
            children: ["/ ", eV.Jv]
          })]
        }), (0, TV.jsxs)("div", {
          className: "GreenvilleBackpackRow",
          children: [(0, TV.jsx)(PV, {
            ref: yV,
            contents: AV,
            Jv: eV.Jv,
            full: FV,
            children: YV.map((VV => (0, TV.jsx)(gV, {
              drop: VV,
              onLanded: EV
            }, VV.id)))
          }), (0, TV.jsxs)("div", {
            className: "GreenvilleBackpackInfo",
            children: [NV.length > 0 && (0, TV.jsx)("div", {
              className: "GreenvilleBackpackTallies",
              children: NV.map((VV => {
                let [xV, JV, YV] = VV;
                return (0, TV.jsxs)("div", {
                  className: "GreenvilleBackpackTally",
                  children: [(0, TV.jsx)("div", {
                    className: "GreenvilleBackpackTallyIcon",
                    children: (0, TV.jsx)(BV.e, {
                      itemName: xV,
                      amount: 0
                    })
                  }), JV > 0 && (0, TV.jsxs)("span", {
                    className: "SmallTextBold",
                    children: ["\xd7", JV]
                  }), YV > 0 && (0, TV.jsx)(RV, {
                    shards: YV,
                    shardsPerItem: eV.shardsPerItem
                  })]
                }, xV)
              }))
            }), FV && (0, TV.jsxs)("div", {
              className: "GreenvilleBackpackFullLine",
              role: "status",
              children: [(0, TV.jsx)("span", {
                className: "GreenvilleBackpackFullTitle SmallTextBold",
                children: xV("greenvilleGame:backpackFull")
              }), JV && (0, TV.jsx)("span", {
                className: "SmallTextLight",
                children: xV("greenvilleGame:backpackReturnTouch")
              }), !JV && null !== GV && (0, TV.jsx)("span", {
                className: "SmallTextLight",
                children: xV("greenvilleGame:backpackReturnDesktop", {
                  key: (0, qV.l)(GV)
                })
              })]
            })]
          })]
        })]
      })
    }

    function RV(VV) {
      let {
        shards: eV,
        shardsPerItem: xV
      } = VV;
      return (0, TV.jsx)("div", {
        className: "GreenvilleBackpackShards",
        children: Array.from({
          length: xV
        }, ((VV, xV) => (0, TV.jsx)("span", {
          className: kV()("GreenvilleBackpackShard", {
            Filled: xV < eV
          })
        }, xV)))
      })
    }

    function gV(VV) {
      let {
        drop: eV,
        onLanded: xV
      } = VV;
      const JV = (0, pV.useRef)(null);
      return (0, pV.useLayoutEffect)((() => {
        const {
          driftEm: VV,
          spinDeg: YV
        } = eV, UV = JV.current.animate([{
          transform: `translate(${VV}em, -3.2em) rotate(${YV}deg) scale(1.2)`,
          opacity: 0
        }, {
          transform: `translate(${.7*VV}em, -2.4em) rotate(${.7*YV}deg) scale(1.1)`,
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
        return UV.onfinish = () => {
          xV(eV.id)
        }, () => {
          UV.onfinish = null, UV.cancel()
        }
      }), [eV, xV]), (0, TV.jsx)("div", {
        ref: JV,
        className: "GreenvilleBackpackFalling",
        children: (0, TV.jsx)(BV.e, {
          itemName: eV.item,
          amount: 0
        })
      })
    }
    var DV = xV(78),
      iV = xV(35325),
      CV = xV(2693),
      aV = xV(2880);
    const oV = [{
        transform: "scale(1.18)"
      }, {
        transform: "scale(1)"
      }],
      cV = [{
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
    let hV = 1,
      lV = null;

    function LV(VV) {
      var eV;
      let {
        sounds: xV
      } = VV;
      const JV = null === (eV = (0, CV.j)("currencyAmounts")) || void 0 === eV ? void 0 : eV.gold;
      return !JV || JV.hidden ? null : (0, TV.jsx)(fV, {
        gold: JV.amount,
        sounds: xV
      })
    }

    function fV(VV) {
      let {
        gold: eV,
        sounds: xV
      } = VV;
      const JV = (0, aV.b)(),
        [YV, UV] = (0, pV.useState)([]),
        yV = (0, pV.useRef)(null),
        QV = (0, pV.useRef)(null),
        nV = (0, pV.useRef)(null),
        wV = (0, pV.useRef)(eV);
      (0, pV.useLayoutEffect)((() => {
        const VV = eV - wV.current;
        if (wV.current = eV, !(VV <= 0) && (xV.onGain(), !JV && !window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
          const eV = function(VV) {
            const eV = Math.max(1, Math.min(8, Math.floor(VV))),
              xV = Math.floor(VV / eV),
              JV = [];
            for (let YV = 0; YV < eV; YV++) {
              const UV = -Math.PI / 2 + (1 === eV ? 0 : 2.4 * (YV / (eV - 1) - .5)) + .3 * (Math.random() - .5),
                yV = 40 + 35 * Math.random();
              JV.push({
                id: hV++,
                burst: {
                  x: Math.cos(UV) * yV,
                  y: Math.sin(UV) * yV
                },
                gold: YV === eV - 1 ? VV - xV * (eV - 1) : xV,
                delayMs: 45 * YV,
                step: YV,
                steps: eV
              })
            }
            return JV
          }(VV);
          UV((VV => [...VV, ...eV.slice(0, Math.max(0, 24 - VV.length))]))
        }
      }), [eV]), (0, pV.useEffect)((() => () => {
        var VV;
        null === (VV = nV.current) || void 0 === VV || VV.cancel()
      }), []);
      const ZV = (0, pV.useCallback)((VV => {
          xV.onCoinLanded(VV.step, VV.steps), UV((eV => eV.filter((eV => {
            let {
              id: xV
            } = eV;
            return xV !== VV.id
          }))))
        }), [xV]),
        vV = YV.length,
        rV = (0, pV.useRef)(vV);
      (0, pV.useEffect)((() => {
        var VV, eV;
        vV < rV.current && (null === (VV = nV.current) || void 0 === VV || VV.cancel(), nV.current = (null !== (eV = lV) && void 0 !== eV ? eV : yV.current).animate(0 === vV ? cV : oV, {
          duration: 0 === vV ? 380 : 160,
          easing: "ease-out"
        }));
        rV.current = vV
      }), [vV]);
      const kV = YV.reduce(((VV, eV) => VV + eV.gold), 0);
      return (0, TV.jsxs)(TV.Fragment, {
        children: [(0, TV.jsx)("div", {
          className: "GreenvilleGoldPurse",
          children: (0, TV.jsxs)("div", {
            ref: yV,
            className: "GreenvilleGoldPurseBody",
            children: [(0, TV.jsx)("span", {
              ref: QV,
              className: "GreenvilleGoldPurseIcon",
              children: (0, TV.jsx)(BV.e, {
                itemName: "Gold Coin",
                amount: 0
              })
            }), (0, TV.jsx)("span", {
              className: "GreenvilleGoldPurseAmount SmallTextBold",
              children: (0, iV.d)(Math.max(0, eV - kV))
            })]
          })
        }), (0, DV.createPortal)(YV.map((VV => (0, TV.jsx)(mV, {
          coin: VV,
          target: QV,
          onLanded: ZV
        }, VV.id))), document.body)]
      })
    }

    function mV(VV) {
      let {
        coin: eV,
        target: xV,
        onLanded: JV
      } = VV;
      const YV = (0, pV.useRef)(null);
      return (0, pV.useEffect)((() => {
        var VV;
        const UV = (null !== (VV = lV) && void 0 !== VV ? VV : xV.current).getBoundingClientRect(),
          {
            burst: yV
          } = eV,
          pV = window.innerWidth / 2,
          QV = window.innerHeight / 2,
          nV = UV.left + UV.width / 2,
          wV = UV.top + UV.height / 2,
          ZV = YV.current.animate([{
            transform: `translate(${pV}px, ${QV}px) scale(0.3)`,
            opacity: 0,
            easing: "ease-out"
          }, {
            transform: `translate(${pV+.7*yV.x}px, ${QV+.7*yV.y}px) scale(1.25)`,
            opacity: 1,
            offset: .15,
            easing: "ease-out"
          }, {
            transform: `translate(${pV+yV.x}px, ${QV+yV.y}px) scale(1)`,
            offset: .35,
            easing: "ease-in-out"
          }, {
            transform: `translate(${pV+yV.x}px, ${QV+yV.y+6}px) scale(1)`,
            offset: .45,
            easing: "cubic-bezier(0.55, 0, 1, 0.45)"
          }, {
            transform: `translate(${nV}px, ${wV}px) scale(0.6)`,
            opacity: 1
          }], {
            duration: 950,
            delay: eV.delayMs,
            fill: "both"
          });
        return ZV.onfinish = () => {
          JV(eV)
        }, () => {
          ZV.onfinish = null, ZV.cancel()
        }
      }), [eV, xV, JV]), (0, TV.jsx)("div", {
        ref: YV,
        className: "GreenvilleGoldCoin",
        children: (0, TV.jsx)(BV.e, {
          itemName: "Gold Coin",
          amount: 0
        })
      })
    }
    class KV {
      constructor(VV, eV, xV) {
        this.pacer = VV, this.send = eV, this.onAnswersTimedOut = xV, this.queued = [], this.unanswered = [], this.answerTimer = null, this.flushing = !1, this.flush = () => {
          if (!this.flushing) {
            this.flushing = !0;
            try {
              for (; this.queued.length > 0 && this.pacer.tryStart();) {
                const VV = this.queued.shift();
                this.unanswered.push(VV), this.answerTimer ??= setTimeout(this.onAnswerTimeout, 15e3), this.send(VV)
              }
            } finally {
              this.flushing = !1
            }
          }
        }, this.onAnswerTimeout = () => {
          this.answerTimer = null, this.unanswered = [], this.onAnswersTimedOut()
        }, VV.subscribe(this.flush)
      }
      getPending() {
        return [...this.unanswered, ...this.queued]
      }
      XZ() {
        return 0 === this.unanswered.length && 0 === this.queued.length
      }
      getLastSent() {
        return this.unanswered.at(-1)
      }
      getLastPending() {
        var VV;
        return null !== (VV = this.queued.at(-1)) && void 0 !== VV ? VV : this.unanswered.at(-1)
      }
      push(VV) {
        this.queued.push(VV), this.flush()
      }
      dropWaiting() {
        const VV = this.queued.length > 0;
        return this.queued = [], VV
      }
      takeAnswer() {
        var VV;
        const eV = null !== (VV = this.unanswered.shift()) && void 0 !== VV ? VV : null;
        return this.stopAnswerTimer(), this.unanswered.length > 0 && (this.answerTimer = setTimeout(this.onAnswerTimeout, 15e3)), eV
      }
      clear() {
        this.queued = [], this.unanswered = [], this.stopAnswerTimer()
      }
      stopAnswerTimer() {
        null !== this.answerTimer && (clearTimeout(this.answerTimer), this.answerTimer = null)
      }
    }
    class HV {
      constructor(VV, eV, xV, JV) {
        this.confirmed = VV, this.picks = void 0, this.picks = new KV(eV, xV, JV)
      }
      confirm(VV) {
        this.confirmed = VV
      }
      getLastPending() {
        return this.picks.getLastPending()
      }
      getLatest() {
        var VV;
        return null !== (VV = this.getLastPending()) && void 0 !== VV ? VV : this.confirmed
      }
      XZ() {
        return this.picks.XZ()
      }
      pushLatest(VV) {
        var eV;
        const xV = null !== (eV = this.picks.getLastSent()) && void 0 !== eV ? eV : this.confirmed;
        this.picks.dropWaiting() && VV === xV || this.picks.push(VV)
      }
      takeAnswer() {
        this.picks.takeAnswer()
      }
      clear() {
        this.picks.clear()
      }
    }
    class uV {
      constructor(VV, eV, xV) {
        this.closed = VV, this.QZ = eV, this.menu = xV, this.view = void 0, this.dismiss = () => {
          this.closePanel() && this.menu.dismiss()
        }, this.onMenuClosed = () => {
          this.closePanel()
        }, this.view = VV
      }
      getView() {
        return this.view
      }
      show(VV) {
        this.set(VV), this.menu.open(this)
      }
      close() {
        this.closePanel() && this.menu.close()
      }
      set(VV) {
        this.view = VV, this.QZ(VV)
      }
      closePanel() {
        return !!this.view.open && (this.dropPresses(), this.set(this.closed), !0)
      }
    }
    const sV = "greenvilleDepotView",
      SV = {
        open: !1,
        explosives: [],
        picked: 0,
        selected: 0,
        level: 1,
        line: "demolitionDepotIntro"
      };
    class IV extends uV {
      constructor(VV, eV, xV, JV) {
        super(SV, VV, eV), this.picks = void 0, this.select = VV => {
          this.set({
            ...this.getView(),
            selected: VV
          })
        }, this.Pr = VV => {
          const eV = this.getView();
          VV !== eV.picked && (this.picks.pushLatest(VV), this.set({
            ...eV,
            picked: VV,
            line: "demolitionGrubnikPicked"
          }))
        }, this.onAnswersTimedOut = () => {
          const VV = this.getView();
          VV.open && this.set({
            ...VV,
            picked: this.picks.getLatest()
          })
        }, this.picks = new HV(0, JV, xV, this.onAnswersTimedOut)
      }
      RZ(VV) {
        if ("openDepot" === VV[0]) {
          const eV = VV[4];
          eV && this.picks.takeAnswer();
          const xV = this.getView();
          if (eV && !xV.open) return;
          this.picks.confirm(VV[2]);
          const JV = this.picks.getLatest(),
            YV = !xV.open;
          this.show({
            open: !0,
            explosives: VV[1],
            picked: JV,
            selected: YV ? JV : xV.selected,
            level: VV[3],
            line: YV ? "demolitionDepotIntro" : xV.line
          })
        } else "closeDepot" !== VV[0] && "hide" !== VV[0] || this.close()
      }
      dropPresses() {
        this.picks.clear()
      }
    }
    var dV = xV(1414),
      OV = xV(1551),
      Ve = xV(35319),
      ee = xV(3719),
      xe = xV(2021),
      Je = xV(5011);

    function Ye(VV) {
      var eV;
      let {
        item: xV,
        className: JV
      } = VV;
      return (0, TV.jsx)(xe.b, {
        className: JV,
        text: null !== (eV = (0, Ve.displayNameOf)((0, ee.d)(xV))) && void 0 !== eV ? eV : xV
      })
    }

    function Ue(VV) {
      let {
        item: eV
      } = VV;
      return (0, TV.jsx)(BV.e, {
        itemName: eV,
        amount: 0
      })
    }

    function ye(VV) {
      let {
        open: eV,
        onDismiss: xV,
        title: JV,
        className: YV,
        headerExtra: UV,
        tabs: yV,
        status: pV,
        children: QV
      } = VV;
      const nV = `${YV}Title`;
      return (0, TV.jsx)(Je.e, {
        show: eV,
        close: xV,
        togglePointerLock: !1,
        ignorePressesAsShown: !0,
        className: "GreenvilleBoardOverlay",
        children: (0, TV.jsxs)("section", {
          className: kV()("GreenvilleBoard", YV),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": nV,
          children: [(0, TV.jsxs)("header", {
            className: "GreenvilleBoardHeader",
            children: [(0, TV.jsx)("h2", {
              id: nV,
              className: "VisuallyHidden",
              children: JV
            }), UV, (0, TV.jsx)(OV.k, {
              onClick: xV
            })]
          }), yV, (0, TV.jsx)("div", {
            className: "GreenvilleBoardBody",
            children: QV
          }), (0, TV.jsxs)("footer", {
            className: "GreenvilleBoardStatus",
            children: [(0, TV.jsx)("span", {
              className: "GreenvilleBoardSpeaker",
              children: pV.speaker
            }), pV.line]
          })]
        })
      })
    }

    function pe(VV) {
      let {
        tabs: eV,
        selected: xV,
        onSelect: JV
      } = VV;
      return (0, TV.jsx)("nav", {
        className: "GreenvilleBoardTabs",
        "data-pad-tabs": "1",
        children: eV.map((VV => {
          const eV = VV.id === xV;
          return (0, TV.jsxs)("button", {
            type: "button",
            className: kV()("GreenvilleBoardTab", {
              Selected: eV
            }),
            "aria-pressed": eV,
            "data-pad-tab": !0,
            "data-pad-selected": eV ? "true" : void 0,
            onClick: () => {
              JV(VV.id)
            },
            children: [VV.label, VV.badge]
          }, VV.id)
        }))
      })
    }

    function Qe(VV) {
      let {
        className: eV,
        roomy: xV = !1,
        children: JV
      } = VV;
      return (0, TV.jsx)("div", {
        className: kV()("GreenvilleBoardTiles", eV, {
          Roomy: xV
        }),
        style: xV ? {
          "--tile-columns": (YV = pV.Children.count(JV), YV <= 3 ? YV : Math.min(4, Math.ceil(YV / 2)))
        } : void 0,
        "data-pad-select-on-focus": !0,
        children: JV
      });
      var YV
    }

    function ne(VV) {
      let {
        icon: eV,
        name: xV,
        selected: JV,
        locked: YV = !1,
        className: UV,
        onSelect: yV,
        children: pV
      } = VV;
      return (0, TV.jsxs)("button", {
        type: "button",
        className: kV()("GreenvilleBoardTile", UV, {
          Selected: JV,
          Locked: YV
        }),
        "aria-pressed": JV,
        "data-pad-default-focus": JV || void 0,
        onClick: yV,
        children: [(0, TV.jsx)("span", {
          className: "GreenvilleBoardTileIcon",
          children: eV
        }), (0, TV.jsx)("span", {
          className: "GreenvilleBoardTileName",
          children: xV
        }), pV]
      })
    }

    function we(VV) {
      let {
        icon: eV,
        name: xV,
        badges: JV,
        children: YV
      } = VV;
      return (0, TV.jsxs)("section", {
        className: "GreenvilleBoardDetail",
        children: [(0, TV.jsxs)("header", {
          className: "GreenvilleBoardDetailHeader",
          children: [(0, TV.jsx)("span", {
            className: "GreenvilleBoardDetailHero",
            children: (0, TV.jsx)("span", {
              className: "GreenvilleBoardDetailIcon",
              children: eV
            })
          }), (0, TV.jsxs)("div", {
            className: "GreenvilleBoardDetailHeading",
            children: [(0, TV.jsx)("h3", {
              children: xV
            }), JV && (0, TV.jsx)("span", {
              className: "GreenvilleBoardDetailBadges",
              children: JV
            })]
          })]
        }), YV]
      })
    }

    function Ze(VV) {
      let {
        level: eV
      } = VV;
      const {
        t: xV
      } = (0, tV.A)();
      return (0, TV.jsxs)("span", {
        className: "GreenvilleBoardBadge Muted",
        children: [(0, TV.jsx)(dV.b, {
          name: "lock"
        }), xV("greenvilleGame:boardLevelBadge", {
          level: eV
        })]
      })
    }

    function ve() {
      const {
        t: VV
      } = (0, tV.A)();
      return (0, TV.jsx)("span", {
        className: "GreenvilleBoardBadge",
        children: VV("greenvilleGame:demolitionDepotPicked")
      })
    }

    function re(VV) {
      let {
        line: eV,
        picked: xV,
        level: JV
      } = VV;
      const YV = eV[3];
      return (0, TV.jsxs)(TV.Fragment, {
        children: [xV && (0, TV.jsx)(ve, {}), YV > JV && (0, TV.jsx)(Ze, {
          level: YV
        })]
      })
    }

    function ke(VV) {
      let {
        view: eV,
        controller: xV
      } = VV;
      const {
        t: JV
      } = (0, tV.A)(), YV = eV.selected, UV = eV.explosives[YV], [yV, pV, QV, nV, wV] = UV, ZV = YV === eV.picked, vV = nV > eV.level;
      return (0, TV.jsxs)(we, {
        icon: (0, TV.jsx)(Ue, {
          item: yV
        }),
        name: JV(`greenvilleGame:${pV}`),
        badges: vV && (0, TV.jsx)(Ze, {
          level: nV
        }),
        children: [(0, TV.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: JV(`greenvilleGame:${QV}`)
        }), (0, TV.jsx)("p", {
          className: "GreenvilleDepotStencil",
          children: JV("greenvilleGame:demolitionDepotMaxLive", {
            count: wV
          })
        }), (0, TV.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [ZV && (0, TV.jsx)("span", {
            className: "GreenvilleDepotLoaded",
            children: JV("greenvilleGame:demolitionDepotPicked")
          }), !ZV && (0, TV.jsx)(OV.f, {
            disabled: vV,
            onClick: () => {
              xV.Pr(YV)
            },
            children: JV("greenvilleGame:demolitionDepotLoad")
          }), vV && (0, TV.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: JV("greenvilleGame:demolitionDepotLocked", {
              level: nV
            })
          })]
        })]
      })
    }

    function be(VV) {
      let {
        controller: eV
      } = VV;
      const xV = (0, jV.j)(sV, eV.getView()),
        {
          t: JV
        } = (0, tV.A)();
      return 0 === xV.explosives.length ? null : (0, TV.jsxs)(ye, {
        open: xV.open,
        onDismiss: eV.dismiss,
        title: JV("greenvilleGame:demolitionDepotTitle"),
        className: "GreenvilleDepotBoard",
        headerExtra: (0, TV.jsx)("span", {
          className: "GreenvilleBoardLevel",
          children: JV("greenvilleGame:demolitionDepotLevel", {
            level: xV.level
          })
        }),
        status: {
          speaker: JV("greenvilleGame:demolitionGrubnikName"),
          line: JV(`greenvilleGame:${xV.line}`)
        },
        children: [(0, TV.jsx)(Qe, {
          roomy: !0,
          children: xV.explosives.map(((VV, YV) => {
            const [UV, yV, pV, QV, nV] = VV;
            return (0, TV.jsxs)(ne, {
              icon: (0, TV.jsx)(Ue, {
                item: UV
              }),
              name: JV(`greenvilleGame:${yV}`),
              selected: YV === xV.selected,
              locked: QV > xV.level,
              className: kV()("GreenvilleDepotCrate", {
                Picked: YV === xV.picked
              }),
              onSelect: () => {
                eV.select(YV)
              },
              children: [(0, TV.jsx)(re, {
                line: VV,
                picked: YV === xV.picked,
                level: xV.level
              }), (0, TV.jsx)("span", {
                className: "GreenvilleDepotStencil",
                children: JV("greenvilleGame:demolitionDepotMaxLive", {
                  count: nV
                })
              }), (0, TV.jsx)("span", {
                className: "GreenvilleDepotBlurb",
                children: JV(`greenvilleGame:${pV}`)
              })]
            }, UV)
          }))
        }), (0, TV.jsx)(ke, {
          view: xV,
          controller: eV
        })]
      })
    }
    const Ee = "greenvilleGarageView",
      Be = {
        open: !1,
        cars: [],
        out: null,
        awaiting: !1,
        selected: null,
        line: "dealershipGarageIntro"
      };
    class je extends uV {
      constructor(VV, eV, xV, JV) {
        super(Be, VV, eV), this.picks = void 0, this.select = VV => {
          this.set({
            ...this.getView(),
            selected: VV
          })
        }, this.Pr = VV => {
          VV !== this.picks.getLastPending() && (this.picks.pushLatest(VV), this.set({
            ...this.getView(),
            out: VV,
            awaiting: !this.picks.XZ(),
            line: "dealershipGarageTip"
          }))
        }, this.onAnswersTimedOut = () => {
          const VV = this.getView();
          VV.open && this.set({
            ...VV,
            out: this.picks.getLatest(),
            awaiting: !this.picks.XZ()
          })
        }, this.picks = new HV(null, JV, xV, this.onAnswersTimedOut)
      }
      RZ(VV) {
        if ("open" === VV[0]) {
          var eV;
          const xV = VV[3];
          xV && this.picks.takeAnswer();
          const JV = this.getView();
          if (xV && !JV.open) return;
          this.picks.confirm(VV[2]);
          const YV = VV[1],
            UV = this.picks.getLatest(),
            yV = !JV.open;
          this.show({
            open: !0,
            cars: YV,
            out: UV,
            awaiting: !this.picks.XZ(),
            selected: yV ? null !== (eV = null !== UV && void 0 !== UV ? UV : YV[0]) && void 0 !== eV ? eV : null : JV.selected,
            line: yV ? "dealershipGarageIntro" : JV.line
          })
        } else this.close()
      }
      dropPresses() {
        this.picks.clear()
      }
    }

    function qe() {
      const {
        t: VV
      } = (0, tV.A)();
      return (0, TV.jsx)("span", {
        className: "GreenvilleBoardBadge",
        children: VV("greenvilleGame:dealershipGarageOut")
      })
    }

    function te(VV) {
      let {
        car: eV,
        out: xV,
        awaiting: JV,
        controller: YV
      } = VV;
      const {
        t: UV
      } = (0, tV.A)();
      return (0, TV.jsx)(we, {
        icon: (0, TV.jsx)(Ue, {
          item: eV
        }),
        name: (0, TV.jsx)(Ye, {
          item: eV
        }),
        children: (0, TV.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [xV && (0, TV.jsx)("span", {
            className: "GreenvilleGarageOutStamp",
            children: UV("greenvilleGame:dealershipGarageOut")
          }), (0, TV.jsx)(OV.f, {
            disabled: xV && JV,
            onClick: () => {
              YV.Pr(eV)
            },
            children: UV(xV ? "greenvilleGame:dealershipGarageBringBack" : "greenvilleGame:dealershipGarageTakeOut")
          })]
        })
      })
    }

    function Fe(VV) {
      let {
        controller: eV
      } = VV;
      const xV = (0, jV.j)(Ee, eV.getView()),
        {
          t: JV
        } = (0, tV.A)(),
        YV = 0 === xV.cars.length;
      return (0, TV.jsxs)(ye, {
        open: xV.open,
        onDismiss: eV.dismiss,
        title: JV("greenvilleGame:dealershipGarageTitle"),
        className: "GreenvilleGarageBoard",
        status: {
          speaker: JV("greenvilleGame:dealershipDelName"),
          line: JV(YV ? "greenvilleGame:dealershipGarageEmpty" : `greenvilleGame:${xV.line}`)
        },
        children: [!YV && (0, TV.jsx)(Qe, {
          roomy: !0,
          children: xV.cars.map((VV => {
            const JV = VV === xV.out;
            return (0, TV.jsx)(ne, {
              icon: (0, TV.jsx)(Ue, {
                item: VV
              }),
              name: (0, TV.jsx)(Ye, {
                item: VV
              }),
              selected: VV === xV.selected,
              className: kV()("GreenvilleGarageBay", {
                Out: JV
              }),
              onSelect: () => {
                eV.select(VV)
              },
              children: JV && (0, TV.jsx)(qe, {})
            }, VV)
          }))
        }), null !== xV.selected && (0, TV.jsx)(te, {
          car: xV.selected,
          out: xV.selected === xV.out,
          awaiting: xV.awaiting,
          controller: eV
        })]
      })
    }
    const Te = {
        kind: "intro"
      },
      Pe = {
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
        line: Te
      };

    function Ae(VV) {
      let [eV, xV, JV, YV, UV, yV] = VV;
      return {
        slot: eV,
        titleKey: xV,
        items: JV,
        exp: YV,
        gold: UV,
        Jw: yV,
        ready: JV.every((VV => {
          let [, eV, xV] = VV;
          return xV >= eV
        }))
      }
    }

    function Ne(VV, eV) {
      return "sell" === eV.action ? function(VV, eV) {
        let xV = VV.goldOwned;
        const JV = VV.sellLines.map((VV => {
          const [JV, YV, UV] = VV;
          return null !== eV && eV !== JV ? VV : (xV += YV * UV, [JV, 0, UV])
        }));
        return {
          ...VV,
          goldOwned: xV,
          sellLines: JV
        }
      }(VV, eV.item) : "accept" === eV.action ? function(VV, eV) {
        var xV;
        const JV = VV.orders[eV];
        return {
          ...VV,
          tracked: null !== (xV = VV.tracked) && void 0 !== xV ? xV : eV,
          orders: VV.orders.map((VV => VV === JV ? {
            ...VV,
            Jw: !0
          } : VV)),
          sellLines: VV.sellLines.map((VV => {
            const [eV, xV, YV] = VV, UV = JV.items.find((VV => {
              let [xV] = VV;
              return xV === eV
            }));
            return void 0 === UV ? VV : [eV, Math.max(0, xV - UV[1]), YV]
          }))
        }
      }(VV, eV.slot) : "track" === eV.action ? {
        ...VV,
        tracked: eV.slot
      } : {
        ...VV,
        delivering: [...VV.delivering, eV.slot]
      }
    }
    const Xe = "greenvilleLumberMillView",
      Me = "greenvilleLumberTrackerView";
    class ze extends uV {
      constructor(VV, eV, xV, JV, UV) {
        super(Pe, VV, xV), this.publishTracker = eV, this.board = null, this.commands = void 0, this.tracker = null, this.tab = "orders", this.selectedSlot = 0, this.selectedWood = 0, this.line = Te, this.selectTab = VV => {
          this.tab = VV, this.set({
            ...this.getView(),
            tab: VV
          })
        }, this.selectOrder = VV => {
          this.selectedSlot = VV, this.set({
            ...this.getView(),
            selectedSlot: VV
          })
        }, this.selectWood = VV => {
          this.selectedWood = VV, this.set({
            ...this.getView(),
            selectedWood: VV
          })
        }, this.accept = VV => {
          this.findOrder(VV).Jw || this.queue({
            action: "accept",
            slot: VV
          })
        }, this.track = VV => {
          this.getView().tracked !== VV && this.findOrder(VV).Jw && this.queue({
            action: "track",
            slot: VV
          })
        }, this.deliver = VV => {
          const eV = this.findOrder(VV);
          eV.Jw && eV.ready && !this.getView().delivering.includes(VV) && this.queue({
            action: "deliver",
            slot: VV
          })
        }, this.sell = VV => {
          this.getView().sellLines.some((eV => {
            let [xV, JV] = eV;
            return JV > 0 && (null === VV || VV === xV)
          })) && this.queue({
            action: "sell",
            item: VV
          })
        }, this.onAnswersTimedOut = () => {
          this.getView().open && this.set(this.getBoardView())
        }, this.commands = new KV(UV, (VV => {
          JV(function(VV) {
            return "sell" === VV.action ? null === VV.item ? `${YV}sell` : `${YV}sell ${VV.item}` : `${YV}${VV.action} ${VV.slot}`
          }(VV))
        }), this.onAnswersTimedOut)
      }
      getTracker() {
        return this.tracker
      }
      RZ(VV) {
        if ("open" === VV[0]) {
          const xV = VV[6],
            JV = xV ? this.commands.takeAnswer() : null,
            YV = !this.getView().open;
          if (xV && YV) return;
          if (YV) this.onReopened(VV);
          else if (null !== JV) {
            var eV;
            this.line = null !== (eV = function(VV, eV, xV) {
              if ("deliver" === VV.action) {
                const [, JV] = eV[1][VV.slot];
                return xV[1][VV.slot][5] ? null : {
                  kind: "delivered",
                  titleKey: JV
                }
              }
              if ("sell" !== VV.action) return null;
              let JV = 0;
              return eV[3].forEach(((eV, YV) => {
                let [UV, yV] = eV;
                null !== VV.item && VV.item !== UV || (JV += Math.max(0, yV - xV[3][YV][1]))
              })), JV > 0 ? {
                kind: "bought",
                count: JV
              } : null
            }(JV, this.board, VV)) && void 0 !== eV ? eV : this.line
          }
          this.board = VV, this.show(this.getBoardView())
        } else "close" === VV[0] ? this.close() : (this.tracker = null === VV[1] ? null : Ae(VV[1]), this.publishTracker(this.tracker))
      }
      dropPresses() {
        this.commands.clear(), this.board = null
      }
      findOrder(VV) {
        return this.getView().orders.find((eV => eV.slot === VV))
      }
      onReopened(VV) {
        let [, eV, , xV] = VV;
        const JV = eV.map(Ae).find((VV => VV.Jw && VV.ready)),
          YV = xV.findIndex((VV => {
            let [, eV] = VV;
            return eV > 0
          }));
        void 0 === JV && -1 !== YV || (this.tab = "orders"), void 0 !== JV && (this.selectedSlot = JV.slot), -1 === YV || this.selectedWood < xV.length && xV[this.selectedWood][1] > 0 || (this.selectedWood = YV), this.line = Te
      }
      getBoardView() {
        const [, VV, eV, xV, JV, YV] = this.board;
        let UV = {
          open: !0,
          orders: VV.map(Ae),
          tracked: eV,
          sellLines: xV,
          level: JV,
          goldOwned: YV,
          delivering: [],
          tab: this.tab,
          selectedSlot: this.selectedSlot,
          selectedWood: this.selectedWood,
          line: this.line
        };
        for (const yV of this.commands.getPending()) UV = Ne(UV, yV);
        return UV
      }
      queue(VV) {
        this.commands.push(VV), this.set(this.getBoardView())
      }
    }
    var Ge = xV(1446),
      We = xV(2100);
    const Re = "Gold Coin";

    function ge(VV) {
      let {
        amount: eV,
        item: xV = Re,
        hn: JV,
        inTile: YV = !1,
        iconRef: UV
      } = VV;
      return (0, TV.jsx)(Ge.d, {
        delayShow: 200,
        hoverOnly: YV,
        placement: "top",
        tooltipClassName: "GreenvilleChipTooltipBox",
        tooltipInner: (0, TV.jsx)(De, {
          item: xV,
          amount: eV,
          hn: JV
        }),
        children: (0, TV.jsxs)("span", {
          className: kV()("GreenvilleBoardChip", {
            Short: void 0 !== JV && JV < eV
          }),
          children: [(0, TV.jsx)("span", {
            ref: UV,
            className: "GreenvilleBoardChipIcon",
            children: (0, TV.jsx)(Ue, {
              item: xV
            })
          }), eV.toLocaleString()]
        })
      })
    }

    function De(VV) {
      let {
        item: eV,
        amount: xV,
        hn: JV
      } = VV;
      const {
        t: YV
      } = (0, tV.A)(), UV = (0, We.e)("itemInfo", (VV => VV[eV]));
      return (0, TV.jsxs)("div", {
        className: "GreenvilleChipTooltip",
        children: [(0, TV.jsxs)("div", {
          className: "GreenvilleChipTooltipHeader",
          children: [(0, TV.jsx)("span", {
            className: "GreenvilleChipTooltipIcon",
            children: (0, TV.jsx)(Ue, {
              item: eV
            })
          }), (0, TV.jsx)(Ye, {
            item: eV,
            className: "GreenvilleChipTooltipName"
          })]
        }), void 0 !== (null === UV || void 0 === UV ? void 0 : UV.description) && (0, TV.jsx)(xe.b, {
          text: UV.description,
          className: "GreenvilleChipTooltipDescription"
        }), void 0 !== JV && (0, TV.jsxs)("div", {
          className: kV()("GreenvilleChipTooltipHeld", {
            Short: JV < xV
          }),
          children: [(0, TV.jsx)("span", {
            className: "GreenvilleChipTooltipLabel",
            children: YV("greenvilleGame:boardYouHave")
          }), (0, TV.jsxs)("span", {
            className: "GreenvilleChipTooltipCount",
            children: [(0, TV.jsx)("span", {
              className: "GreenvilleChipTooltipHeldAmount",
              children: JV.toLocaleString()
            }), ` / ${xV.toLocaleString()}`]
          }), (0, TV.jsx)("span", {
            className: "GreenvilleChipTooltipMeter",
            children: (0, TV.jsx)("span", {
              style: {
                width: (xV > 0 ? 100 * Math.min(1, JV / xV) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function ie(VV) {
      let {
        gold: eV,
        children: xV
      } = VV;
      const JV = (0, pV.useRef)(null);
      var YV;
      return YV = JV, (0, pV.useLayoutEffect)((() => {
        const VV = YV.current;
        return lV = VV, () => {
          lV === VV && (lV = null)
        }
      }), [YV]), (0, TV.jsxs)("div", {
        className: "GreenvilleBoardWallet",
        children: [xV, (0, TV.jsx)(ge, {
          amount: eV,
          iconRef: JV
        })]
      })
    }
    const Ce = {
      New: "lumberBoardStateNew",
      Accepted: "lumberBoardStateAccepted",
      Tracking: "lumberBoardTracking",
      Ready: "lumberBoardStateReady"
    };

    function ae(VV, eV) {
      return VV.Jw ? VV.ready ? "Ready" : VV.slot === eV ? "Tracking" : "Accepted" : "New"
    }

    function oe(VV) {
      let {
        state: eV
      } = VV;
      const {
        t: xV
      } = (0, tV.A)();
      return (0, TV.jsx)("span", {
        className: kV()("GreenvilleBoardBadge GreenvilleLumberState", eV, {
          Muted: "Accepted" === eV
        }),
        children: xV(`greenvilleGame:${Ce[eV]}`)
      })
    }

    function ce(VV) {
      let {
        order: eV
      } = VV;
      return (0, TV.jsx)("span", {
        className: "GreenvilleLumberNeeds",
        children: eV.items.map((VV => {
          let [eV, xV, JV] = VV;
          const YV = JV >= xV;
          return (0, TV.jsxs)("span", {
            className: kV()("GreenvilleLumberNeed", {
              Met: YV
            }),
            children: [(0, TV.jsx)("span", {
              className: "GreenvilleLumberNeedIcon",
              children: (0, TV.jsx)(Ue, {
                item: eV
              })
            }), (0, TV.jsx)(Ye, {
              item: eV,
              className: "GreenvilleLumberNeedName"
            }), (0, TV.jsxs)("span", {
              className: "GreenvilleLumberNeedCount",
              children: [Math.min(JV, xV).toLocaleString(), "/", xV.toLocaleString()]
            }), (0, TV.jsx)("span", {
              className: "GreenvilleLumberNeedTick",
              "aria-hidden": "true",
              children: YV && "\u2713"
            })]
          }, eV)
        }))
      })
    }

    function he(VV) {
      let {
        order: eV,
        inTile: xV = !1
      } = VV;
      const {
        t: JV
      } = (0, tV.A)();
      return (0, TV.jsxs)("span", {
        className: "GreenvilleLumberReward",
        children: [(0, TV.jsx)(ge, {
          amount: eV.gold,
          inTile: xV
        }), (0, TV.jsx)("span", {
          className: "GreenvilleLumberExp",
          children: JV("greenvilleGame:boardExpGain", {
            exp: eV.exp
          })
        })]
      })
    }

    function le(VV) {
      let {
        view: eV,
        order: xV,
        controller: JV
      } = VV;
      const {
        t: YV
      } = (0, tV.A)(), {
        slot: UV,
        items: yV,
        Jw: pV,
        ready: QV
      } = xV, nV = yV.reduce(((VV, eV) => {
        let [, xV, JV] = eV;
        return VV + Math.max(0, xV - JV)
      }), 0);
      return (0, TV.jsxs)("div", {
        className: "GreenvilleBoardActions",
        children: [!pV && (0, TV.jsx)(OV.f, {
          onClick: () => {
            JV.accept(UV)
          },
          children: YV("greenvilleGame:lumberBoardAccept")
        }), pV && (0, TV.jsx)(OV.m, {
          disabled: !QV,
          loading: eV.delivering.includes(UV),
          onClick: () => {
            JV.deliver(UV)
          },
          children: YV("greenvilleGame:lumberBoardDeliver")
        }), pV && !QV && (0, TV.jsx)("span", {
          className: "GreenvilleBoardHint",
          children: YV("greenvilleGame:lumberBoardDeliverMissing", {
            count: nV
          })
        }), pV && UV !== eV.tracked && (0, TV.jsx)(OV.M, {
          onClick: () => {
            JV.track(UV)
          },
          children: YV("greenvilleGame:lumberBoardTrack")
        })]
      })
    }

    function Le(VV) {
      let {
        view: eV,
        controller: xV
      } = VV;
      const {
        t: JV
      } = (0, tV.A)(), YV = eV.orders[eV.selectedSlot], UV = ae(YV, eV.tracked), yV = YV.Jw && YV.slot === eV.tracked;
      return (0, TV.jsxs)(we, {
        icon: (0, TV.jsx)(Ue, {
          item: YV.items[0][0]
        }),
        name: JV(`greenvilleGame:${YV.titleKey}`),
        badges: (0, TV.jsxs)(TV.Fragment, {
          children: [(0, TV.jsx)(oe, {
            state: UV
          }), yV && "Ready" === UV && (0, TV.jsx)(oe, {
            state: "Tracking"
          })]
        }),
        children: [(0, TV.jsx)(ce, {
          order: YV
        }), (0, TV.jsx)("dl", {
          className: "GreenvilleBoardFacts",
          children: (0, TV.jsxs)("div", {
            children: [(0, TV.jsx)("dt", {
              children: JV("greenvilleGame:lumberBoardReward")
            }), (0, TV.jsx)("dd", {
              children: (0, TV.jsx)(he, {
                order: YV
              })
            })]
          })
        }), (0, TV.jsx)(le, {
          view: eV,
          order: YV,
          controller: xV
        })]
      })
    }

    function fe(VV) {
      let {
        view: eV,
        controller: xV
      } = VV;
      const {
        t: JV
      } = (0, tV.A)();
      return (0, TV.jsxs)(TV.Fragment, {
        children: [(0, TV.jsx)(Qe, {
          className: "GreenvilleLumberTickets",
          roomy: !0,
          children: eV.orders.map((VV => {
            const YV = ae(VV, eV.tracked);
            return (0, TV.jsxs)(ne, {
              icon: (0, TV.jsx)(Ue, {
                item: VV.items[0][0]
              }),
              name: JV(`greenvilleGame:${VV.titleKey}`),
              selected: VV.slot === eV.selectedSlot,
              className: kV()("GreenvilleLumberTicket", YV),
              onSelect: () => {
                xV.selectOrder(VV.slot)
              },
              children: [(0, TV.jsx)(oe, {
                state: YV
              }), (0, TV.jsx)(ce, {
                order: VV
              }), (0, TV.jsx)(he, {
                order: VV,
                inTile: !0
              })]
            }, VV.slot)
          }))
        }), (0, TV.jsx)(Le, {
          view: eV,
          controller: xV
        })]
      })
    }

    function me(VV) {
      let {
        item: eV
      } = VV;
      return (0, TV.jsx)("span", {
        className: "GreenvilleLumberLogEnd",
        children: (0, TV.jsx)(Ue, {
          item: eV
        })
      })
    }

    function Ke(VV) {
      let {
        view: eV,
        controller: xV
      } = VV;
      const {
        t: JV
      } = (0, tV.A)(), [YV, UV, yV] = eV.sellLines[eV.selectedWood], pV = function(VV, eV) {
        let xV = 0,
          JV = 0;
        for (const YV of VV.orders)
          if (YV.Jw)
            for (const [VV, UV, yV] of YV.items) VV === eV && (xV += UV, JV = yV);
        return Math.min(xV, JV)
      }(eV, YV), QV = eV.sellLines.some((VV => {
        let [, eV] = VV;
        return eV > 0
      }));
      return (0, TV.jsxs)(we, {
        icon: (0, TV.jsx)(me, {
          item: YV
        }),
        name: (0, TV.jsx)(Ye, {
          item: YV
        }),
        badges: UV > 0 && (0, TV.jsx)("span", {
          className: "GreenvilleBoardBadge",
          children: JV("greenvilleGame:lumberBoardSellHeld", {
            count: UV
          })
        }),
        children: [(0, TV.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, TV.jsxs)("div", {
            children: [(0, TV.jsx)("dt", {
              children: JV("greenvilleGame:boardYouHave")
            }), (0, TV.jsx)("dd", {
              children: (pV + UV).toLocaleString()
            })]
          }), (0, TV.jsxs)("div", {
            children: [(0, TV.jsx)("dt", {
              children: JV("greenvilleGame:lumberBoardSellKept")
            }), (0, TV.jsx)("dd", {
              children: pV.toLocaleString()
            })]
          }), (0, TV.jsxs)("div", {
            children: [(0, TV.jsx)("dt", {
              children: JV("greenvilleGame:lumberBoardSellSpare")
            }), (0, TV.jsx)("dd", {
              className: kV()("GreenvilleLumberSpare", {
                None: 0 === UV
              }),
              children: UV.toLocaleString()
            })]
          }), (0, TV.jsxs)("div", {
            children: [(0, TV.jsx)("dt", {
              children: JV("greenvilleGame:lumberBoardSellEach")
            }), (0, TV.jsx)("dd", {
              children: (0, TV.jsx)(ge, {
                amount: yV
              })
            })]
          })]
        }), (0, TV.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [(0, TV.jsxs)(OV.m, {
            disabled: 0 === UV,
            onClick: () => {
              xV.sell(YV)
            },
            children: [UV > 0 && JV("greenvilleGame:lumberBoardSell", {
              count: UV
            }), 0 === UV && JV(pV > 0 ? "greenvilleGame:lumberBoardSellKeptAll" : "greenvilleGame:lumberBoardSellNone")]
          }), (0, TV.jsx)(OV.f, {
            disabled: !QV,
            onClick: () => {
              xV.sell(null)
            },
            children: JV("greenvilleGame:lumberBoardSellAll")
          })]
        })]
      })
    }

    function He(VV) {
      let {
        view: eV,
        controller: xV
      } = VV;
      const {
        t: JV
      } = (0, tV.A)();
      return (0, TV.jsxs)(TV.Fragment, {
        children: [(0, TV.jsx)(Qe, {
          className: "GreenvilleLumberWoodPile",
          children: eV.sellLines.map(((VV, YV) => {
            let [UV, yV, pV] = VV;
            return (0, TV.jsxs)(ne, {
              icon: (0, TV.jsx)(me, {
                item: UV
              }),
              name: (0, TV.jsx)(Ye, {
                item: UV
              }),
              selected: YV === eV.selectedWood,
              className: kV()("GreenvilleLumberWood", {
                Spare: yV > 0
              }),
              onSelect: () => {
                xV.selectWood(YV)
              },
              children: [yV > 0 && (0, TV.jsx)("span", {
                className: "GreenvilleBoardBadge",
                children: JV("greenvilleGame:lumberBoardSellHeld", {
                  count: yV
                })
              }), (0, TV.jsx)(ge, {
                amount: pV,
                inTile: !0
              })]
            }, UV)
          }))
        }), (0, TV.jsx)(Ke, {
          view: eV,
          controller: xV
        })]
      })
    }

    function ue(VV) {
      let {
        controller: eV
      } = VV;
      const xV = (0, jV.j)(Xe, eV.getView()),
        {
          t: JV
        } = (0, tV.A)(),
        YV = function(VV) {
          const {
            t: eV
          } = (0, tV.A)();
          return "delivered" === VV.kind ? eV("greenvilleGame:lumberTimbertoothThanks", {
            order: eV(`greenvilleGame:${VV.titleKey}`)
          }) : "bought" === VV.kind ? eV("greenvilleGame:lumberTimbertoothBought", {
            count: VV.count
          }) : eV("greenvilleGame:lumberBoardIntro")
        }(xV.line);
      if (0 === xV.orders.length) return null;
      const UV = xV.orders.filter((VV => VV.Jw && VV.ready)).length,
        yV = xV.sellLines.reduce(((VV, eV) => {
          let [, xV] = eV;
          return VV + xV
        }), 0);
      return (0, TV.jsxs)(ye, {
        open: xV.open,
        onDismiss: eV.dismiss,
        title: JV("greenvilleGame:lumberBoardTitle"),
        className: "GreenvilleLumberBoard",
        headerExtra: (0, TV.jsx)(ie, {
          gold: xV.goldOwned,
          children: (0, TV.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: JV("greenvilleGame:lumberBoardLevel", {
              level: xV.level
            })
          })
        }),
        tabs: (0, TV.jsx)(pe, {
          tabs: [{
            id: "orders",
            label: JV("greenvilleGame:lumberBoardOrders"),
            badge: UV > 0 && (0, TV.jsx)("span", {
              className: "GreenvilleBoardBadge Ready",
              children: JV("greenvilleGame:lumberBoardReadyCount", {
                count: UV
              })
            })
          }, {
            id: "sell",
            label: JV("greenvilleGame:lumberBoardSellHeading"),
            badge: yV > 0 && (0, TV.jsx)("span", {
              className: "GreenvilleBoardBadge",
              children: JV("greenvilleGame:lumberBoardSellHeld", {
                count: yV
              })
            })
          }],
          selected: xV.tab,
          onSelect: eV.selectTab
        }),
        status: {
          speaker: JV("greenvilleGame:lumberTimbertoothName"),
          line: YV
        },
        children: ["orders" === xV.tab && (0, TV.jsx)(fe, {
          view: xV,
          controller: eV
        }), "sell" === xV.tab && (0, TV.jsx)(He, {
          view: xV,
          controller: eV
        })]
      })
    }

    function se(VV) {
      let {
        controller: eV
      } = VV;
      (0, jV.j)(Me, null);
      const {
        t: xV
      } = (0, tV.A)(), JV = eV.getTracker();
      return null === JV ? null : (0, TV.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, TV.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: xV(`greenvilleGame:${JV.titleKey}`)
        }), (0, TV.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: JV.items.map((VV => {
            let [eV, xV, JV] = VV;
            return (0, TV.jsxs)("li", {
              className: kV()("GreenvilleTrackerRow", {
                Done: JV >= xV
              }),
              children: [(0, TV.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, TV.jsx)(BV.e, {
                  itemName: eV,
                  amount: 0
                })
              }), (0, TV.jsx)(Ye, {
                item: eV,
                className: "GreenvilleTrackerLabel"
              }), (0, TV.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [Math.min(JV, xV), "/", xV]
              })]
            }, eV)
          }))
        }), JV.ready && (0, TV.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: xV("greenvilleGame:lumberTrackerReady")
        })]
      })
    }
    const Se = "greenvilleOreBuyerView",
      Ie = {
        open: !1,
        lines: [],
        selected: 0,
        level: 1,
        goldOwned: 0
      };
    class de extends uV {
      constructor(VV, eV, xV, JV) {
        super(Ie, VV, eV), this.sales = void 0, this.serverLines = [], this.select = VV => {
          this.set({
            ...this.getView(),
            selected: VV
          })
        }, this.sell = VV => {
          this.getView().lines.some((eV => {
            let [xV, , , , JV] = eV;
            return JV > 0 && (null === VV || VV === xV)
          })) && (this.sales.push(VV), this.set({
            ...this.getView(),
            lines: this.getLines()
          }))
        }, this.onAnswersTimedOut = () => {
          const VV = this.getView();
          VV.open && this.set({
            ...VV,
            lines: this.getLines()
          })
        }, this.sales = new KV(JV, xV, this.onAnswersTimedOut)
      }
      RZ(VV) {
        if ("close" !== VV[0]) {
          const [, eV, xV, JV] = VV, YV = "open" === VV[0] && VV[4];
          YV && this.sales.takeAnswer();
          const UV = this.getView();
          if ((YV || "refresh" === VV[0]) && !UV.open) return;
          this.serverLines = eV;
          const yV = eV.findIndex((VV => VV[4] > 0));
          this.show({
            open: !0,
            lines: this.getLines(),
            selected: UV.open ? UV.selected : Math.max(0, yV),
            level: xV,
            goldOwned: JV
          })
        } else this.close()
      }
      dropPresses() {
        this.sales.clear()
      }
      getLines() {
        const VV = this.sales.getPending();
        return this.serverLines.map((eV => {
          const [xV, JV, YV, UV, , yV] = eV;
          return VV.some((VV => null === VV || VV === xV)) ? [xV, JV, YV, UV, 0, yV] : eV
        }))
      }
    }

    function Oe(VV) {
      let {
        line: eV,
        level: xV
      } = VV;
      const {
        t: JV
      } = (0, tV.A)(), [, , , YV, UV, yV] = eV;
      return (0, TV.jsxs)(TV.Fragment, {
        children: [UV > 0 && (0, TV.jsx)("span", {
          className: "GreenvilleBoardBadge",
          children: JV("greenvilleGame:oreBuyerHeld", {
            count: UV
          })
        }), YV > xV && (0, TV.jsxs)("span", {
          className: "GreenvilleBoardBadge Muted",
          children: [(0, TV.jsx)(dV.b, {
            name: "lock"
          }), JV("greenvilleGame:boardLevelBadge", {
            level: YV
          })]
        }), YV <= xV && yV && (0, TV.jsx)("span", {
          className: "GreenvilleBoardBadge GreenvilleOreRare",
          children: JV("greenvilleGame:oreBuyerRare")
        })]
      })
    }

    function Vx(VV) {
      let {
        line: eV
      } = VV;
      return (0, TV.jsx)("span", {
        className: "GreenvilleOreSample",
        children: (0, TV.jsx)(Ue, {
          item: eV[0]
        })
      })
    }

    function ex(VV) {
      let {
        view: eV,
        controller: xV
      } = VV;
      const {
        t: JV
      } = (0, tV.A)(), YV = eV.lines[eV.selected], [UV, yV, pV, QV, nV, wV] = YV, ZV = QV > eV.level, vV = eV.lines.some((VV => VV[4] > 0));
      return (0, TV.jsxs)(we, {
        icon: (0, TV.jsx)(Vx, {
          line: YV
        }),
        name: (0, TV.jsx)(Ye, {
          item: UV
        }),
        badges: (0, TV.jsx)(Oe, {
          line: YV,
          level: eV.level
        }),
        children: [(0, TV.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, TV.jsxs)("div", {
            children: [(0, TV.jsx)("dt", {
              children: JV("greenvilleGame:boardYouHave")
            }), (0, TV.jsx)("dd", {
              className: kV()("GreenvilleOreHeld", {
                None: 0 === nV
              }),
              children: nV.toLocaleString()
            })]
          }), (0, TV.jsxs)("div", {
            children: [(0, TV.jsx)("dt", {
              children: JV("greenvilleGame:oreBuyerPriceEach")
            }), (0, TV.jsx)("dd", {
              children: (0, TV.jsx)(ge, {
                amount: yV
              })
            })]
          }), (0, TV.jsxs)("div", {
            children: [(0, TV.jsx)("dt", {
              children: JV("greenvilleGame:oreBuyerExpEach")
            }), (0, TV.jsxs)("dd", {
              className: "GreenvilleOreExp",
              children: ["+", pV]
            })]
          })]
        }), wV && (0, TV.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: JV("greenvilleGame:oreBuyerLegendary")
        }), ZV && (0, TV.jsxs)(TV.Fragment, {
          children: [(0, TV.jsx)("p", {
            className: "GreenvilleBoardHint",
            children: JV("greenvilleGame:oreBuyerLocked", {
              level: QV
            })
          }), (0, TV.jsx)("p", {
            className: "GreenvilleBoardDescription",
            children: JV("greenvilleGame:oreBuyerTip")
          })]
        }), (0, TV.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [(0, TV.jsxs)(OV.m, {
            disabled: 0 === nV,
            onClick: () => {
              xV.sell(UV)
            },
            children: [nV > 0 && JV("greenvilleGame:oreBuyerSell", {
              count: nV
            }), 0 === nV && JV("greenvilleGame:oreBuyerSellNone")]
          }), (0, TV.jsx)(OV.f, {
            disabled: !vV,
            onClick: () => {
              xV.sell(null)
            },
            children: JV("greenvilleGame:oreBuyerSellAll")
          })]
        })]
      })
    }

    function xx(VV) {
      let {
        controller: eV
      } = VV;
      const xV = (0, jV.j)(Se, eV.getView()),
        {
          t: JV
        } = (0, tV.A)();
      return 0 === xV.lines.length ? null : (0, TV.jsxs)(ye, {
        open: xV.open,
        onDismiss: eV.dismiss,
        title: JV("greenvilleGame:oreBuyerTitle"),
        className: "GreenvilleOreBuyerBoard",
        headerExtra: (0, TV.jsx)(ie, {
          gold: xV.goldOwned,
          children: (0, TV.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: JV("greenvilleGame:oreBuyerLevel", {
              level: xV.level
            })
          })
        }),
        status: {
          speaker: JV("greenvilleGame:oreBuyerName"),
          line: JV("greenvilleGame:oreBuyerGreet")
        },
        children: [(0, TV.jsx)(Qe, {
          roomy: !0,
          children: xV.lines.map(((VV, YV) => {
            const [UV, yV, pV, QV, nV, wV] = VV;
            return (0, TV.jsxs)(ne, {
              icon: (0, TV.jsx)(Vx, {
                line: VV
              }),
              name: (0, TV.jsx)(Ye, {
                item: UV
              }),
              selected: YV === xV.selected,
              locked: QV > xV.level && 0 === nV,
              className: kV()("GreenvilleOreTile", {
                Legendary: wV
              }),
              onSelect: () => {
                eV.select(YV)
              },
              children: [(0, TV.jsx)(Oe, {
                line: VV,
                level: xV.level
              }), (0, TV.jsxs)("span", {
                className: "GreenvilleOrePrice",
                children: [(0, TV.jsx)(ge, {
                  amount: yV,
                  inTile: !0
                }), (0, TV.jsx)("span", {
                  className: "GreenvilleOreExp",
                  children: JV("greenvilleGame:boardExpGain", {
                    exp: pV
                  })
                })]
              })]
            }, UV)
          }))
        }), (0, TV.jsx)(ex, {
          view: xV,
          controller: eV
        })]
      })
    }
    const Jx = {
      kind: "greet"
    };

    function Yx(VV) {
      return VV.every((VV => {
        let [, , eV, xV] = VV;
        return xV >= eV
      }))
    }

    function Ux(VV) {
      let [eV, xV, JV, YV, UV, yV] = VV;
      return {
        slot: eV,
        nameKey: xV,
        needs: JV,
        exp: YV,
        gold: UV,
        Jw: yV,
        ready: Yx(JV)
      }
    }

    function yx(VV, eV) {
      let [, , xV, JV] = VV;
      return eV ? xV : xV - JV
    }

    function px(VV, eV) {
      let [xV, JV] = VV;
      return xV === eV.item && null !== JV === eV.golden
    }

    function Qx(VV, eV) {
      return (eV.golden ? VV.goldenLines : VV.sellLines).find((VV => px(VV, eV)))
    }

    function nx(VV, eV) {
      return "sell" === eV.action ? vx(function(VV, eV, xV) {
        let JV = VV.goldOwned;
        const YV = VV => {
          if (null !== eV && !px(VV, eV)) return VV;
          const [YV, UV, yV, pV, QV] = VV, nV = yx(VV, xV);
          return JV += nV * QV, [YV, UV, yV - nV, xV ? 0 : pV, QV]
        };
        return {
          ...VV,
          sellLines: VV.sellLines.map(YV),
          goldenLines: wx(VV.goldenLines.map(YV)),
          goldOwned: JV
        }
      }(VV, eV.kind, eV.all)) : "accept" === eV.action ? function(VV, eV) {
        var xV;
        const {
          needs: JV
        } = VV.orders[eV], YV = VV => {
          const [eV, xV, YV, UV, yV] = VV, pV = Zx(JV, VV);
          return pV ? [eV, xV, YV, Math.min(YV, UV + pV[2]), yV] : VV
        };
        return {
          ...VV,
          tracked: null !== (xV = VV.tracked) && void 0 !== xV ? xV : eV,
          orders: VV.orders.map((VV => VV.slot === eV ? {
            ...VV,
            Jw: !0
          } : VV)),
          sellLines: VV.sellLines.map(YV),
          goldenLines: VV.goldenLines.map(YV)
        }
      }(VV, eV.slot) : "track" === eV.action ? {
        ...VV,
        tracked: eV.slot
      } : vx(function(VV, eV) {
        const {
          needs: xV
        } = VV.orders[eV], JV = VV => {
          const [eV, JV, YV, UV, yV] = VV, pV = Zx(xV, VV);
          return pV ? [eV, JV, YV - pV[2], UV - pV[2], yV] : VV
        };
        return {
          ...VV,
          sellLines: VV.sellLines.map(JV),
          goldenLines: wx(VV.goldenLines.map(JV)),
          delivering: [...VV.delivering, eV]
        }
      }(VV, eV.slot))
    }

    function wx(VV) {
      return VV.filter((VV => {
        let [, , eV] = VV;
        return eV > 0
      }))
    }

    function Zx(VV, eV) {
      let [xV, JV] = eV;
      return VV.find((VV => {
        let [eV, YV] = VV;
        return eV === xV && YV === JV
      }))
    }

    function vx(VV) {
      const eV = (eV, xV) => {
          const JV = (null === xV ? VV.sellLines : VV.goldenLines).find((VV => {
            let [xV] = VV;
            return xV === eV
          }));
          return JV ? JV[2] : 0
        },
        xV = VV.orders.map((xV => {
          if (VV.delivering.includes(xV.slot)) return xV;
          const JV = xV.needs.map((VV => {
            let [xV, JV, YV] = VV;
            return [xV, JV, YV, eV(xV, JV)]
          }));
          return {
            ...xV,
            needs: JV,
            ready: Yx(JV)
          }
        }));
      return {
        ...VV,
        orders: xV
      }
    }

    function rx(VV) {
      let [, , , eV, xV] = VV;
      return [...eV, ...xV].reduce(((VV, eV) => {
        let [, , xV] = eV;
        return VV + xV
      }), 0)
    }
    const kx = "greenvilleFarmBoardView",
      bx = "greenvilleFarmTrackerView",
      Ex = {
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
        line: Jx
      };
    class Bx extends uV {
      constructor(VV, eV, xV, JV, YV) {
        super(Ex, VV, xV), this.publishTracker = eV, this.board = null, this.commands = void 0, this.tracker = null, this.tab = "orders", this.selectedOrder = 0, this.selectedProduce = null, this.line = Jx, this.selectTab = VV => {
          this.tab = VV, this.set(this.getBoardView())
        }, this.selectOrder = VV => {
          this.selectedOrder = VV, this.set(this.getBoardView())
        }, this.selectProduce = VV => {
          this.selectedProduce = VV, this.set(this.getBoardView())
        }, this.accept = VV => {
          this.getView().orders[VV].Jw || this.queue({
            action: "accept",
            slot: VV
          })
        }, this.track = VV => {
          const eV = this.getView();
          eV.tracked !== VV && eV.orders[VV].Jw && this.queue({
            action: "track",
            slot: VV
          })
        }, this.deliver = VV => {
          const eV = this.getView(),
            xV = eV.orders[VV];
          xV.Jw && xV.ready && !eV.delivering.includes(VV) && this.queue({
            action: "deliver",
            slot: VV
          })
        }, this.sell = (VV, eV) => {
          this.queueSale({
            item: VV,
            golden: eV
          }, !1)
        }, this.sellSpare = () => {
          this.queueSale(null, !1)
        }, this.sellAll = () => {
          this.queueSale(null, !0)
        }, this.onAnswersTimedOut = () => {
          this.getView().open && this.set(this.settleView())
        }, this.commands = new KV(YV, (VV => {
          JV(function(VV) {
            return "sell" !== VV.action ? `${UV}${VV.action} ${VV.slot}` : VV.all ? `${UV}sellAll` : null === VV.kind ? `${UV}sell` : `${UV}${VV.kind.golden?"sellGolden":"sell"} ${VV.kind.item}`
          }(VV))
        }), this.onAnswersTimedOut)
      }
      getTracker() {
        return this.tracker
      }
      RZ(VV) {
        if ("open" === VV[0]) {
          const xV = VV[7],
            JV = xV ? this.commands.takeAnswer() : null,
            YV = !this.getView().open;
          if (xV && YV) return;
          const UV = this.board;
          if (this.board = VV, YV) this.onReopened();
          else if (null !== JV) {
            var eV;
            this.line = null !== (eV = function(VV, eV, xV) {
              const JV = xV[6] - eV[6];
              if (JV <= 0) return null;
              if ("deliver" === VV.action) return {
                kind: "delivered",
                nameKey: eV[1][VV.slot][1],
                gold: JV
              };
              const YV = rx(eV) - rx(xV);
              return "sell" === VV.action && YV > 0 ? {
                kind: "sold",
                count: YV,
                gold: JV
              } : null
            }(JV, UV, VV)) && void 0 !== eV ? eV : this.line
          }
          this.show(this.settleView())
        } else "close" === VV[0] ? this.close() : (this.tracker = null === VV[1] ? null : Ux(VV[1]), this.publishTracker(this.tracker))
      }
      dropPresses() {
        this.commands.clear(), this.board = null
      }
      onReopened() {
        this.line = Jx;
        const VV = this.toView(this.board).orders.find((VV => VV.Jw && VV.ready));
        VV && (this.tab = "orders", this.selectedOrder = VV.slot)
      }
      queueSale(VV, eV) {
        const {
          sellLines: xV,
          goldenLines: JV
        } = this.getView();
        [...xV, ...JV].some((xV => yx(xV, eV) > 0 && (null === VV || px(xV, VV)))) && this.queue({
          action: "sell",
          kind: VV,
          all: eV
        })
      }
      toView(VV) {
        let [, eV, xV, JV, YV, UV, yV] = VV;
        return {
          open: !0,
          orders: eV.map(Ux),
          tracked: xV,
          sellLines: JV,
          goldenLines: YV,
          level: UV,
          goldOwned: yV,
          delivering: [],
          tab: this.tab,
          selectedOrder: this.selectedOrder,
          selectedProduce: this.selectedProduce,
          line: this.line
        }
      }
      getBoardView() {
        let VV = this.toView(this.board);
        for (const eV of this.commands.getPending()) VV = nx(VV, eV);
        return {
          ...VV,
          selectedProduce: this.pickProduce(VV)
        }
      }
      settleView() {
        const VV = this.getBoardView();
        return this.commands.XZ() && (this.selectedProduce = VV.selectedProduce), VV
      }
      pickProduce(VV) {
        var eV, xV;
        const JV = this.selectedProduce;
        if (JV && Qx(VV, JV)) return JV;
        if (JV) return {
          item: JV.item,
          golden: !1
        };
        const [YV, UV] = null !== (eV = null !== (xV = VV.goldenLines[0]) && void 0 !== xV ? xV : VV.sellLines.find((VV => {
          let [, , eV] = VV;
          return eV > 0
        }))) && void 0 !== eV ? eV : VV.sellLines[0];
        return {
          item: YV,
          golden: null !== UV
        }
      }
      queue(VV) {
        this.commands.push(VV), this.set(this.getBoardView())
      }
    }
    var jx = xV(1435);

    function qx() {
      const VV = (0, pV.useRef)(null);
      return (0, jx.e)(VV), (0, TV.jsx)("span", {
        ref: VV,
        className: "GreenvilleFarmSparkle",
        "aria-hidden": "true"
      })
    }

    function tx(VV) {
      let {
        item: eV,
        golden: xV
      } = VV;
      return (0, TV.jsx)("span", {
        className: kV()("GreenvilleFarmProduce", {
          Golden: xV
        }),
        children: (0, TV.jsx)(Ue, {
          item: eV
        })
      })
    }

    function Fx(VV) {
      let {
        item: eV,
        goldenName: xV
      } = VV;
      return null !== xV ? (0, TV.jsx)("span", {
        className: "GreenvilleFarmGoldenName",
        children: xV
      }) : (0, TV.jsx)(Ye, {
        item: eV
      })
    }
    const Tx = {
      New: "greenvilleGame:farmBoardNew",
      Accepted: "greenvilleGame:farmBoardAccepted",
      Tracking: "greenvilleGame:farmOrderTracking",
      Ready: "greenvilleGame:farmBoardReady"
    };

    function Px(VV, eV) {
      return VV.Jw ? VV.ready ? "Ready" : eV ? "Tracking" : "Accepted" : "New"
    }

    function Ax(VV) {
      return VV.needs.some((VV => {
        let [, eV] = VV;
        return null !== eV
      }))
    }

    function Nx(VV) {
      let {
        order: eV
      } = VV;
      const [xV, JV] = eV.needs[0];
      return (0, TV.jsx)(tx, {
        item: xV,
        golden: null !== JV
      })
    }

    function Xx(VV) {
      let {
        state: eV
      } = VV;
      const {
        t: xV
      } = (0, tV.A)();
      return (0, TV.jsx)("span", {
        className: kV()("GreenvilleBoardBadge GreenvilleFarmState", eV),
        children: xV(Tx[eV])
      })
    }

    function Mx(VV) {
      let {
        needs: eV
      } = VV;
      return (0, TV.jsx)("span", {
        className: "GreenvilleFarmNeeds",
        children: eV.map((VV => {
          let [eV, xV, JV, YV] = VV;
          const UV = YV >= JV;
          return (0, TV.jsxs)("span", {
            className: kV()("GreenvilleFarmNeed", {
              Met: UV,
              Golden: null !== xV
            }),
            children: [(0, TV.jsx)("span", {
              className: "GreenvilleFarmNeedIcon",
              children: (0, TV.jsx)(tx, {
                item: eV,
                golden: null !== xV
              })
            }), (0, TV.jsx)("span", {
              className: "GreenvilleFarmNeedName",
              children: (0, TV.jsx)(Fx, {
                item: eV,
                goldenName: xV
              })
            }), (0, TV.jsxs)("span", {
              className: "GreenvilleFarmNeedCount",
              children: [UV && "\u2713 ", Math.min(YV, JV), "/", JV]
            })]
          }, `${eV}|${xV}`)
        }))
      })
    }

    function zx(VV) {
      let {
        order: eV,
        inTile: xV = !1
      } = VV;
      const {
        t: JV
      } = (0, tV.A)();
      return (0, TV.jsxs)("span", {
        className: "GreenvilleFarmReward",
        children: [(0, TV.jsx)(ge, {
          amount: eV.gold,
          inTile: xV
        }), (0, TV.jsx)("span", {
          className: "GreenvilleFarmExp",
          children: JV("greenvilleGame:boardExpGain", {
            exp: eV.exp
          })
        })]
      })
    }

    function Gx(VV) {
      let {
        view: eV,
        controller: xV
      } = VV;
      const {
        t: JV
      } = (0, tV.A)(), YV = eV.orders[eV.selectedOrder], {
        slot: UV,
        nameKey: yV,
        needs: pV,
        Jw: QV,
        ready: nV
      } = YV, wV = UV === eV.tracked, ZV = pV.reduce(((VV, eV) => {
        let [, , xV, JV] = eV;
        return VV + Math.max(0, xV - JV)
      }), 0);
      return (0, TV.jsxs)(we, {
        icon: (0, TV.jsx)(Nx, {
          order: YV
        }),
        name: JV(yV),
        badges: (0, TV.jsxs)(TV.Fragment, {
          children: [(0, TV.jsx)(Xx, {
            state: Px(YV, wV)
          }), Ax(YV) && (0, TV.jsx)("span", {
            className: "GreenvilleBoardBadge GreenvilleFarmGoldenBadge",
            children: JV("greenvilleGame:farmBoardGolden")
          })]
        }),
        children: [(0, TV.jsx)(Mx, {
          needs: pV
        }), (0, TV.jsx)("dl", {
          className: "GreenvilleBoardFacts",
          children: (0, TV.jsxs)("div", {
            children: [(0, TV.jsx)("dt", {
              children: JV("greenvilleGame:farmBoardReward")
            }), (0, TV.jsx)("dd", {
              children: (0, TV.jsx)(zx, {
                order: YV
              })
            })]
          })
        }), (0, TV.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [!QV && (0, TV.jsx)(OV.f, {
            onClick: () => {
              xV.accept(UV)
            },
            children: JV("greenvilleGame:farmOrderAccept")
          }), QV && wV && (0, TV.jsxs)("span", {
            className: "GreenvilleFarmTracking",
            children: [(0, TV.jsx)(dV.b, {
              name: "crosshairs"
            }), JV("greenvilleGame:farmOrderTracking")]
          }), QV && !wV && (0, TV.jsx)(OV.M, {
            onClick: () => {
              xV.track(UV)
            },
            children: JV("greenvilleGame:farmOrderTrack")
          }), QV && (0, TV.jsx)(OV.m, {
            disabled: !nV,
            loading: eV.delivering.includes(UV),
            onClick: () => {
              xV.deliver(UV)
            },
            children: JV("greenvilleGame:farmOrderDeliver")
          }), QV && !nV && (0, TV.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: JV("greenvilleGame:farmBoardMissing", {
              count: ZV
            })
          })]
        })]
      })
    }

    function Wx(VV) {
      let {
        view: eV,
        controller: xV
      } = VV;
      const {
        t: JV
      } = (0, tV.A)();
      return (0, TV.jsxs)(TV.Fragment, {
        children: [(0, TV.jsx)(Qe, {
          roomy: !0,
          children: eV.orders.map((VV => (0, TV.jsxs)(ne, {
            icon: (0, TV.jsx)(Nx, {
              order: VV
            }),
            name: JV(VV.nameKey),
            selected: VV.slot === eV.selectedOrder,
            className: kV()("GreenvilleFarmBasket", {
              WantsGolden: Ax(VV)
            }),
            onSelect: () => {
              xV.selectOrder(VV.slot)
            },
            children: [(0, TV.jsx)(Xx, {
              state: Px(VV, VV.slot === eV.tracked)
            }), (0, TV.jsx)(Mx, {
              needs: VV.needs
            }), (0, TV.jsx)(zx, {
              order: VV,
              inTile: !0
            })]
          }, VV.slot)))
        }), (0, TV.jsx)(Gx, {
          view: eV,
          controller: xV
        })]
      })
    }

    function Rx(VV) {
      let {
        line: eV,
        selected: xV,
        onSelect: JV
      } = VV;
      const [YV, UV, yV, , pV] = eV, QV = null !== UV;
      return (0, TV.jsxs)(ne, {
        icon: (0, TV.jsx)(tx, {
          item: YV,
          golden: QV
        }),
        name: (0, TV.jsx)(Fx, {
          item: YV,
          goldenName: UV
        }),
        selected: xV,
        className: kV()("GreenvilleFarmCrate", {
          Golden: QV,
          Empty: 0 === yV
        }),
        onSelect: JV,
        children: [QV && (0, TV.jsx)(qx, {}), yV > 0 && (0, TV.jsxs)("span", {
          className: "GreenvilleBoardBadge GreenvilleFarmHeld",
          children: ["\xd7", yV]
        }), (0, TV.jsx)(ge, {
          amount: pV,
          inTile: !0
        })]
      })
    }

    function gx(VV) {
      let {
        view: eV,
        controller: xV
      } = VV;
      const {
        t: JV
      } = (0, tV.A)(), YV = [...eV.sellLines, ...eV.goldenLines], UV = YV.some((VV => yx(VV, !1) > 0)), yV = YV.some((VV => yx(VV, !0) > 0));
      return (0, TV.jsxs)("div", {
        className: "GreenvilleFarmSign",
        children: [(0, TV.jsx)("h3", {
          className: "GreenvilleFarmSignBoard",
          children: JV("greenvilleGame:farmBoardPrices")
        }), (0, TV.jsxs)("div", {
          className: "GreenvilleFarmSignActions",
          children: [(0, TV.jsx)(OV.f, {
            disabled: !UV,
            onClick: xV.sellSpare,
            children: JV("greenvilleGame:farmStallSellSurplus")
          }), (0, TV.jsx)(OV.E, {
            disabled: !yV,
            onClick: xV.sellAll,
            children: JV("greenvilleGame:farmStallSellAll")
          })]
        })]
      })
    }

    function Dx(VV) {
      let {
        line: eV,
        controller: xV
      } = VV;
      const {
        t: JV
      } = (0, tV.A)(), [YV, UV, yV, pV, QV] = eV, nV = null !== UV, wV = yx(eV, !1);
      return (0, TV.jsxs)(we, {
        icon: (0, TV.jsx)(tx, {
          item: YV,
          golden: nV
        }),
        name: (0, TV.jsx)(Fx, {
          item: YV,
          goldenName: UV
        }),
        badges: nV && (0, TV.jsx)("span", {
          className: "GreenvilleBoardBadge GreenvilleFarmGoldenBadge",
          children: JV("greenvilleGame:farmBoardGolden")
        }),
        children: [nV && (0, TV.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: JV("greenvilleGame:farmBoardGoldenBlurb")
        }), (0, TV.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, TV.jsxs)("div", {
            children: [(0, TV.jsx)("dt", {
              children: JV("greenvilleGame:boardYouHave")
            }), (0, TV.jsx)("dd", {
              children: yV
            })]
          }), pV > 0 && (0, TV.jsxs)("div", {
            children: [(0, TV.jsx)("dt", {
              children: JV("greenvilleGame:farmBoardKept")
            }), (0, TV.jsx)("dd", {
              children: pV
            })]
          }), (0, TV.jsxs)("div", {
            children: [(0, TV.jsx)("dt", {
              children: JV("greenvilleGame:farmBoardSpare")
            }), (0, TV.jsx)("dd", {
              children: wV
            })]
          }), (0, TV.jsxs)("div", {
            children: [(0, TV.jsx)("dt", {
              children: JV("greenvilleGame:farmBoardPriceEach")
            }), (0, TV.jsx)("dd", {
              children: (0, TV.jsx)(ge, {
                amount: QV
              })
            })]
          })]
        }), (0, TV.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [wV > 0 && (0, TV.jsx)(OV.m, {
            onClick: () => {
              xV.sell(YV, nV)
            },
            children: JV("greenvilleGame:farmBoardSell", {
              count: wV
            })
          }), 0 === yV && (0, TV.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: JV("greenvilleGame:farmStallNothing")
          }), yV > 0 && 0 === wV && (0, TV.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: JV("greenvilleGame:farmBoardAllKept")
          })]
        })]
      })
    }

    function ix(VV) {
      let {
        view: eV,
        produce: xV,
        controller: JV
      } = VV;
      const {
        t: YV
      } = (0, tV.A)(), UV = VV => {
        const [eV, YV] = VV;
        return (0, TV.jsx)(Rx, {
          line: VV,
          selected: px(VV, xV),
          onSelect: () => {
            JV.selectProduce({
              item: eV,
              golden: null !== YV
            })
          }
        }, `${eV}|${null!==YV}`)
      };
      return (0, TV.jsxs)(TV.Fragment, {
        children: [(0, TV.jsxs)(Qe, {
          children: [(0, TV.jsx)(gx, {
            view: eV,
            controller: JV
          }), eV.goldenLines.length > 0 && (0, TV.jsxs)(TV.Fragment, {
            children: [(0, TV.jsx)("h4", {
              className: "GreenvilleFarmSection Golden",
              children: YV("greenvilleGame:farmBoardGoldenCrops")
            }), eV.goldenLines.map(UV), (0, TV.jsx)("hr", {
              className: "GreenvilleFarmSection"
            })]
          }), eV.sellLines.map(UV)]
        }), (0, TV.jsx)(Dx, {
          line: Qx(eV, xV),
          controller: JV
        })]
      })
    }

    function Cx(VV) {
      let {
        controller: eV
      } = VV;
      const xV = (0, jV.j)(kx, eV.getView()),
        {
          t: JV
        } = (0, tV.A)(),
        YV = function(VV) {
          const {
            t: eV
          } = (0, tV.A)();
          return "delivered" === VV.kind ? eV("greenvilleGame:tillieDelivered", {
            order: eV(VV.nameKey),
            gold: VV.gold
          }) : "sold" === VV.kind ? eV("greenvilleGame:tillieSold", {
            count: VV.count,
            gold: VV.gold
          }) : eV("greenvilleGame:tillieGreet")
        }(xV.line),
        UV = xV.selectedProduce;
      if (null === UV) return null;
      const yV = function(VV) {
        return VV.orders.filter((VV => VV.Jw && VV.ready)).length
      }(xV);
      return (0, TV.jsxs)(ye, {
        open: xV.open,
        onDismiss: eV.dismiss,
        title: JV("greenvilleGame:farmBoardTitle"),
        className: "GreenvilleFarmBoard",
        headerExtra: (0, TV.jsx)(ie, {
          gold: xV.goldOwned,
          children: (0, TV.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: JV("greenvilleGame:farmBoardLevel", {
              level: xV.level
            })
          })
        }),
        tabs: (0, TV.jsx)(pe, {
          tabs: [{
            id: "orders",
            label: JV("greenvilleGame:farmBoardOrdersTab"),
            badge: yV > 0 && (0, TV.jsx)("span", {
              className: "GreenvilleBoardBadge GreenvilleFarmReadyBadge",
              children: JV("greenvilleGame:farmBoardReadyCount", {
                count: yV
              })
            })
          }, {
            id: "stall",
            label: JV("greenvilleGame:farmBoardStallTab")
          }],
          selected: xV.tab,
          onSelect: eV.selectTab
        }),
        status: {
          speaker: JV("greenvilleGame:farmTillieName"),
          line: YV
        },
        children: ["orders" === xV.tab && (0, TV.jsx)(Wx, {
          view: xV,
          controller: eV
        }), "stall" === xV.tab && (0, TV.jsx)(ix, {
          view: xV,
          produce: UV,
          controller: eV
        })]
      })
    }
    var ax = xV(39645);

    function ox(VV) {
      let {
        controller: eV
      } = VV;
      (0, jV.j)(bx, null);
      const {
        t: xV
      } = (0, tV.A)(), JV = eV.getTracker();
      return null === JV ? null : (0, TV.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, TV.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: xV(JV.nameKey)
        }), (0, TV.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: JV.needs.map((VV => {
            let [eV, JV, YV, UV] = VV;
            return (0, TV.jsxs)("li", {
              className: kV()("GreenvilleTrackerRow", {
                Done: UV >= YV,
                Golden: null !== JV
              }),
              children: [(0, TV.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, TV.jsx)(BV.e, {
                  itemName: eV,
                  amount: 0
                })
              }), (0, TV.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: null !== JV && void 0 !== JV ? JV : (0, ax.e)(xV, eV)
              }), (0, TV.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [Math.min(UV, YV), "/", YV]
              })]
            }, `${eV}|${JV}`)
          }))
        }), JV.ready && (0, TV.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: xV("greenvilleGame:farmOrderReady")
        })]
      })
    }
    const cx = "greenvillePlaceView",
      hx = "greenvilleMoodView";
    class lx {
      constructor(VV, eV) {
        this.publishPlace = VV, this.publishMood = eV, this.place = null, this.mood = null
      }
      getPlace() {
        return this.place
      }
      getMood() {
        return this.mood
      }
      RZ(VV) {
        const eV = performance.now();
        switch (VV[0]) {
          case "hudMood": {
            const [, xV, JV, YV, UV, yV, pV] = VV;
            return this.mood = {
              energy: xV,
              earningsPercent: JV,
              breakEvenEnergy: YV,
              restedEndsAt: UV > 0 ? eV + UV : 0,
              adBoosted: yV,
              luckPercent: pV
            }, void this.publishMood(this.mood)
          }
          case "hudTown": {
            const [eV, xV, JV] = VV;
            this.place = {
              kind: eV,
              place: xV,
              levels: JV
            };
            break
          }
          case "hudJob": {
            const [eV, xV, JV, YV, UV, yV, pV, QV, nV] = VV;
            this.place = {
              kind: eV,
              place: xV,
              job: JV,
              level: YV,
              expInto: UV,
              expNeeded: yV,
              status: null === pV ? null : Lx(pV),
              next: null === QV ? null : {
                item: QV[0],
                nameKey: QV[1],
                level: QV[2]
              },
              stats: nV.map((VV => {
                let [eV, xV, JV, YV] = VV;
                return {
                  stat: eV,
                  value: xV,
                  max: JV,
                  boosted: YV
                }
              }))
            };
            break
          }
          case "hudHome": {
            const [xV, JV, YV, UV, yV, pV, QV, nV, wV] = VV;
            this.place = {
              kind: xV,
              houseName: JV,
              ownerName: YV,
              isOwner: UV,
              visitorsAllowed: yV,
              pvp: pV,
              parkour: QV,
              runStartedAt: nV < 0 ? null : this.getRunStart(eV - nV),
              bestTimes: wV.map((VV => {
                let [eV, xV] = VV;
                return {
                  playerName: eV,
                  seconds: xV
                }
              }))
            };
            break
          }
          case "hudSpleef": {
            const [eV, xV, JV] = VV;
            this.place = {
              kind: eV,
              eliminations: xV,
              wins: JV
            };
            break
          }
        }
        this.publishPlace(this.place)
      }
      getRunStart(VV) {
        var eV;
        const xV = "hudHome" === (null === (eV = this.place) || void 0 === eV ? void 0 : eV.kind) ? this.place.runStartedAt : null;
        return null !== xV && Math.abs(xV - VV) < 500 ? xV : VV
      }
    }

    function Lx(VV) {
      switch (VV[0]) {
        case "hudTier":
          return {
            kind: VV[0], tierKey: VV[1], locked: VV[2]
          };
        case "hudBay":
          return {
            kind: VV[0], materialKey: VV[1], objectKey: VV[2], percent: VV[3]
          };
        case "hudBayEmpty":
          return {
            kind: VV[0]
          };
        case "hudFarmTier":
          return {
            kind: VV[0], goldenPercent: VV[1]
          }
      }
    }
    var fx = xV(3848),
      mx = xV(1290),
      Kx = xV(206);
    const Hx = JSON.parse('{"e":{"constructionSiteA":{"name":"Construction Site A"},"quarry":{"name":"The Quarry","skill":"Mining"},"industry":{"name":"Demolition Yard","skill":"Demolition"},"market":{"name":"Market Street","skill":"Market"},"lumberMill":{"name":"Lumber Mill","skill":"Woodcutting"},"farm":{"name":"Greenville Farm","skill":"Farming"},"constructionSiteB":{"name":"Construction Site B"},"dealership":{"name":"Wheeler\'s Wheels"},"postOffice":{"name":"Post Office & Diner"},"station":{"name":"The Station"},"docks":{"name":"The Docks"}},"h":[[{"kind":"residential","name":"Hillside"},{"kind":"district","district":"quarry"},{"kind":"district","district":"industry"},{"kind":"residential","name":"Ridgeview"}],[{"kind":"residential","name":"Willow Gardens"},{"kind":"district","district":"constructionSiteA"},{"kind":"district","district":"market"},{"kind":"residential","name":"Maple Row"}],[{"kind":"residential","name":"Birchwood"},{"kind":"district","district":"farm"},{"kind":"district","district":"lumberMill"},{"kind":"district","district":"dealership"}],[{"kind":"residential","name":"Seaview"},{"kind":"district","district":"constructionSiteB"},{"kind":"residential","name":"Harbour Terrace"},{"kind":"residential","name":"Lighthouse Point"}]]}'),
      ux = Kx.f.PZ,
      sx = 1e3 * ux,
      Sx = ux,
      Ix = Sx + 2 * ux,
      dx = 4 * Ix + Sx,
      Ox = -2 * ux,
      VJ = 4 * ux;

    function eJ(VV, eV, xV) {
      return eV >= VV.x0 && eV <= VV.x1 && xV >= VV.z0 && xV <= VV.z1
    }
    const xJ = Hx.h,
      JJ = Object.fromEntries(Object.entries(Hx.e).map((VV => {
        let [eV, {
          name: xV
        }] = VV;
        return [eV, xV]
      })));

    function YJ(VV, eV) {
      return [sx + Sx + VV * Ix, sx + Sx + eV * Ix]
    }

    function UJ() {
      const VV = [];
      xJ.forEach(((eV, xV) => {
        eV.forEach(((eV, JV) => {
          if ("residential" !== eV.kind) return;
          const [YV, UV] = YJ(JV, xV);
          for (const [xV, yV, pV] of [
              [0, 0, "north"],
              [1, 0, "north"],
              [0, 1, "south"],
              [1, 1, "south"]
            ]) VV.push({
            chunk: [YV / ux + xV, 0, UV / ux + yV],
            facing: pV,
            neighbourhood: eV.name
          })
        }))
      }));
      const eV = sx + dx / 2,
        xV = VV => {
          let {
            chunk: xV
          } = VV;
          return Math.hypot(xV[0] * ux + ux / 2 - eV, xV[2] * ux + ux / 2 - eV)
        };
      return VV.sort(((VV, eV) => xV(VV) - xV(eV)))
    }
    const yJ = {
        market: "Crate",
        demolition: "Moonstone Explosive",
        mining: "Iron Pickaxe",
        woodcutting: "Iron Axe",
        farming: "Wheat"
      },
      pJ = {
        earningPower: "greenvilleGame:marketEarningPower",
        power: "greenvilleGame:demolitionPower",
        points: "greenvilleGame:demolitionPoints",
        depth: "greenvilleGame:miningDepth",
        value: "greenvilleGame:miningValue",
        backpack: "greenvilleGame:miningBackpack",
        luck: "greenvilleGame:luck"
      };

    function QJ(VV, eV, xV, JV) {
      switch (eV.kind) {
        case "hudTown":
          return "city" !== eV.place ? {
            key: eV.place,
            name: VV(`greenvilleGame:${eV.place}`),
            eyebrow: null
          } : "tile" === xV.kind ? {
            key: `place|${JJ[xV.district]}`,
            name: JJ[xV.district],
            eyebrow: null
          } : "outside" === xV.kind ? {
            key: "city|outside",
            name: VV("greenvilleGame:placeGreenville"),
            eyebrow: null
          } : null;
        case "hudJob": {
          const xV = function(VV, eV) {
            switch (eV) {
              case "quarry":
                return JJ.quarry;
              case "demolitionYard":
                return JJ.industry;
              case "marketStreet":
                return JJ.market;
              case "farm":
                return JJ.farm;
              case "lumberMill":
                return JJ.lumberMill;
              case "supermarket":
                return VV("greenvilleGame:market");
              case "demolition":
              case "mining":
              case "woodcutting":
              case "farming":
                return VV(`greenvilleGame:${eV}`)
            }
          }(VV, eV.place);
          return {
            key: `place|${xV}`,
            name: xV,
            eyebrow: null
          }
        }
        case "hudHome": {
          const xV = eV.isOwner ? VV("greenvilleGame:placeYourHouse") : VV("greenvilleGame:homePlayersHouse", {
              player: (0, mx.g)(eV.ownerName, JV)
            }),
            YV = `home|${eV.ownerName}|${eV.houseName}`;
          return null === eV.houseName ? {
            key: YV,
            name: xV,
            eyebrow: null
          } : {
            key: YV,
            name: eV.houseName,
            eyebrow: xV
          }
        }
        case "hudSpleef":
          return {
            key: "spleef", name: VV("greenvilleGame:placeSpleef"), eyebrow: null
          }
      }
    }

    function nJ(VV) {
      let {
        controller: eV,
        children: xV
      } = VV;
      (0, jV.j)(cx, null);
      const [JV, YV] = (0, pV.useState)(null);
      (0, fx.j)(JV, ".RightElements");
      const UV = eV.getPlace();
      return (0, TV.jsx)(EV.e, {
        placement: "topRight",
        children: (0, TV.jsx)("div", {
          className: "GreenvilleHudColumn",
          children: (0, TV.jsxs)("div", {
            ref: YV,
            className: "GreenvilleHudColumnStack",
            children: [xV, "hudTown" === (null === UV || void 0 === UV ? void 0 : UV.kind) && (0, TV.jsx)(ZJ, {
              levels: UV.levels
            }), "hudJob" === (null === UV || void 0 === UV ? void 0 : UV.kind) && (0, TV.jsx)(vJ, {
              job: UV
            }), "hudHome" === (null === UV || void 0 === UV ? void 0 : UV.kind) && UV.bestTimes.length > 0 && (0, TV.jsx)(rJ, {
              home: UV
            }), "hudSpleef" === (null === UV || void 0 === UV ? void 0 : UV.kind) && (0, TV.jsx)("div", {
              className: "GreenvilleTrackerCard",
              children: (0, TV.jsx)(wJ, {
                rows: [
                  ["greenvilleGame:spleefEliminations", UV.eliminations],
                  ["greenvilleGame:spleefWins", UV.wins]
                ]
              })
            })]
          })
        })
      })
    }

    function wJ(VV) {
      let {
        rows: eV
      } = VV;
      const {
        t: xV
      } = (0, tV.A)();
      return (0, TV.jsx)("ul", {
        className: "GreenvilleTrackerRows",
        children: eV.map((VV => {
          let [eV, JV] = VV;
          return (0, TV.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, TV.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: xV(eV)
            }), (0, TV.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: (0, iV.d)(JV)
            })]
          }, eV)
        }))
      })
    }

    function ZJ(VV) {
      let {
        levels: eV
      } = VV;
      const {
        t: xV
      } = (0, tV.A)();
      return (0, TV.jsxs)("div", {
        className: "GreenvilleTrackerCard GreenvilleJobsStrip",
        children: [(0, TV.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: xV("greenvilleGame:jobs")
        }), (0, TV.jsx)("ul", {
          className: "GreenvilleJobsStripJobs",
          children: yV.map(((VV, JV) => {
            const YV = eV[JV];
            return (0, TV.jsxs)("li", {
              className: kV()("GreenvilleJobsStripJob", {
                Max: YV >= 50
              }),
              "aria-label": xV("greenvilleGame:jobLevel", {
                job: xV(`greenvilleGame:${VV}`),
                level: YV
              }),
              children: [(0, TV.jsx)("span", {
                className: "GreenvilleJobsStripIcon",
                "aria-hidden": "true",
                children: (0, TV.jsx)(BV.e, {
                  itemName: yJ[VV],
                  amount: 0
                })
              }), (0, TV.jsx)("span", {
                className: "GreenvilleJobsStripLevel",
                "aria-hidden": "true",
                children: xV("greenvilleGame:levelShort", {
                  level: YV
                })
              })]
            }, VV)
          }))
        })]
      })
    }

    function vJ(VV) {
      let {
        job: {
          stats: eV,
          next: xV
        }
      } = VV;
      const {
        t: JV
      } = (0, tV.A)();
      return (0, TV.jsxs)(TV.Fragment, {
        children: [eV.length > 0 && (0, TV.jsx)("div", {
          className: "GreenvilleTrackerCard",
          children: (0, TV.jsx)("ul", {
            className: "GreenvilleTrackerRows",
            children: eV.map((VV => {
              let {
                stat: eV,
                value: xV,
                max: YV,
                boosted: UV
              } = VV;
              return (0, TV.jsxs)("li", {
                className: "GreenvilleTrackerRow",
                children: [(0, TV.jsx)("span", {
                  className: "GreenvilleTrackerLabel",
                  children: JV(pJ[eV])
                }), (0, TV.jsxs)("span", {
                  className: kV()("GreenvilleTrackerValue", {
                    Boosted: UV
                  }),
                  children: [(0, iV.d)(xV), null !== YV && `/${(0,iV.d)(YV)}`]
                })]
              }, eV)
            }))
          })
        }), null !== xV && (0, TV.jsxs)("div", {
          className: "GreenvilleTrackerCard GreenvilleNextUnlock",
          children: [(0, TV.jsx)("span", {
            className: "GreenvilleNextUnlockEyebrow",
            children: JV("greenvilleGame:nextUnlock")
          }), (0, TV.jsxs)("div", {
            className: "GreenvilleNextUnlockBody",
            children: [(0, TV.jsx)("span", {
              className: "GreenvilleNextUnlockIcon",
              "aria-hidden": "true",
              children: (0, TV.jsx)(BV.e, {
                itemName: xV.item,
                amount: 0
              })
            }), (0, TV.jsxs)("span", {
              className: "GreenvilleNextUnlockText",
              children: [(0, TV.jsx)("strong", {
                className: "GreenvilleNextUnlockName",
                children: JV(xV.nameKey)
              }), (0, TV.jsx)("span", {
                className: "GreenvilleNextUnlockLevel",
                children: JV("greenvilleGame:unlockAtLevel", {
                  level: xV.level
                })
              })]
            })]
          })]
        })]
      })
    }

    function rJ(VV) {
      let {
        home: eV
      } = VV;
      const {
        t: xV,
        selectedLanguage: JV
      } = (0, tV.A)(), YV = (0, We.h)("hiddenPlayerNames");
      return (0, TV.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, TV.jsxs)("strong", {
          className: "GreenvilleTrackerTitle GreenvilleBestTimesTitle",
          children: [(0, TV.jsx)(dV.b, {
            name: "trophy"
          }), xV("greenvilleGame:parkourBestTimes")]
        }), (0, TV.jsx)("ol", {
          className: "GreenvilleTrackerRows",
          children: eV.bestTimes.slice(0, 3).map(((VV, eV) => {
            let {
              playerName: UV,
              seconds: yV
            } = VV;
            return (0, TV.jsxs)("li", {
              className: kV()("GreenvilleTrackerRow GreenvilleBestTime", {
                First: 0 === eV
              }),
              children: [(0, TV.jsx)("span", {
                className: "GreenvilleBestTimeRank",
                children: eV + 1
              }), (0, TV.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: (0, mx.g)(UV, YV)
              }), (0, TV.jsx)("span", {
                className: "GreenvilleTrackerValue",
                children: xV("greenvilleGame:parkourTime", {
                  seconds: yV.toLocaleString(JV.code, {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1
                  })
                })
              })]
            }, `${eV}|${UV}`)
          }))
        })]
      })
    }
    const kJ = "greenvilleLevelUpsView";
    class bJ {
      constructor(VV) {
        this.publishLevelUps = VV, this.levelUps = [], this.token = 0, this.revealed = VV => {
          this.setLevelUps(this.levelUps.filter((eV => eV.token !== VV)))
        }
      }
      getLevelUps() {
        return this.levelUps
      }
      RZ(VV) {
        const [eV, xV, JV] = VV;
        this.setLevelUps([...this.levelUps, {
          job: eV,
          level: xV,
          unlock: null === JV ? null : {
            item: JV[0],
            nameKey: JV[1],
            level: JV[2]
          },
          token: ++this.token
        }])
      }
      setLevelUps(VV) {
        this.levelUps = VV, this.publishLevelUps(VV)
      }
    }
    const EJ = [{
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
      BJ = Array.from({
        length: 16
      }, ((VV, eV) => ({
        "--angle": 360 * eV / 16 + eV % 3 * 7 + "deg",
        "--distance": 5 + eV % 4 * 1.2 + "rem",
        "--delay": eV % 5 * 30 + "ms"
      })));

    function jJ(VV) {
      let {
        controller: eV
      } = VV;
      (0, jV.j)(kJ, null);
      const xV = eV.getLevelUps();
      return 0 === xV.length ? null : (0, DV.createPortal)((0, TV.jsx)(qJ, {
        levelUp: xV[0],
        onDone: eV.revealed
      }, xV[0].token), document.body)
    }

    function qJ(VV) {
      let {
        levelUp: eV,
        onDone: xV
      } = VV;
      const {
        t: JV
      } = (0, tV.A)(), YV = (0, pV.useRef)(null), {
        unlock: UV
      } = eV, yV = null === UV ? 2600 : 4200;
      (0, pV.useLayoutEffect)((() => {
        const VV = document.querySelector(".GreenvilleTopBar");
        VV && YV.current.style.setProperty("--top-bar-bottom", `${VV.getBoundingClientRect().bottom}px`)
      }), []), (0, pV.useEffect)((() => {
        const VV = YV.current.animate(EJ, {
          duration: yV,
          fill: "both"
        });
        return VV.onfinish = () => {
          xV(eV.token)
        }, () => {
          VV.onfinish = null, VV.cancel()
        }
      }), [eV, yV, xV]);
      const QV = JV(`greenvilleGame:${eV.job}`);
      return (0, TV.jsxs)("div", {
        ref: YV,
        className: kV()("GreenvilleLevelUpReveal", {
          Plain: null === UV
        }),
        style: {
          "--reveal-ms": `${yV}ms`
        },
        role: "status",
        children: [null !== UV && (0, TV.jsx)("div", {
          className: "GreenvilleLevelUpRevealStage",
          "aria-hidden": "true",
          children: (0, TV.jsxs)("div", {
            className: "GreenvilleLevelUpRevealMover",
            children: [(0, TV.jsx)("div", {
              className: "GreenvilleLevelUpRevealRays"
            }), (0, TV.jsx)("div", {
              className: "GreenvilleLevelUpRevealGlow"
            }), (0, TV.jsx)("div", {
              className: "GreenvilleLevelUpRevealSparks",
              children: BJ.map(((VV, eV) => (0, TV.jsx)("span", {
                style: VV
              }, eV)))
            }), (0, TV.jsx)("div", {
              className: "GreenvilleLevelUpRevealIcon",
              children: (0, TV.jsx)(BV.e, {
                itemName: UV.item,
                amount: 0
              })
            })]
          })
        }), (0, TV.jsxs)("div", {
          className: "GreenvilleLevelUpRevealText",
          children: [null !== UV && (0, TV.jsxs)(TV.Fragment, {
            children: [(0, TV.jsx)("span", {
              className: "GreenvilleLevelUpRevealHeading SmallTextBold",
              children: JV("greenvilleGame:levelUpUnlockHeading", {
                job: QV,
                level: UV.level
              })
            }), (0, TV.jsx)("span", {
              className: "GreenvilleLevelUpRevealName FullyFancyText",
              children: JV(UV.nameKey)
            })]
          }), null === UV && (0, TV.jsxs)(TV.Fragment, {
            children: [(0, TV.jsx)("span", {
              className: "GreenvilleLevelUpRevealHeading SmallTextBold",
              children: JV("greenvilleGame:levelUpHeading")
            }), (0, TV.jsx)("span", {
              className: "GreenvilleLevelUpRevealName FullyFancyText",
              children: JV("greenvilleGame:jobLevel", {
                job: QV,
                level: eV.level
              })
            })]
          })]
        })]
      })
    }
    const tJ = "greenvilleMarketView";

    function FJ(VV) {
      return VV.map((VV => {
        let [eV, xV, JV, YV, UV, yV] = VV;
        return {
          key: `${eV}|${xV}|${JV}|${YV}|${UV}`,
          icon: eV,
          target: [xV, JV, YV],
          item: UV,
          label: yV
        }
      }))
    }
    class TJ {
      constructor(VV) {
        this.QZ = VV, this.view = null
      }
      getView() {
        return this.view
      }
      RZ(VV) {
        const eV = performance.now();
        switch (VV[0]) {
          case "hide":
            this.view = null;
            break;
          case "marketIdle":
            this.view = {
              job: null,
              waypoints: FJ(VV[1])
            };
            break;
          case "marketPick":
          case "marketStock": {
            const [xV, JV, YV, UV] = VV;
            this.view = {
              job: {
                kind: xV,
                goods: JV,
                tipEndsAt: UV > 0 ? eV + UV : 0
              },
              waypoints: FJ(YV)
            };
            break
          }
          case "marketDeliver": {
            const [xV, JV, YV, UV, yV, pV] = VV;
            this.view = {
              job: {
                kind: xV,
                parcelsLeft: JV,
                delivered: YV,
                gold: UV,
                endsAt: eV + pV
              },
              waypoints: FJ(yV)
            };
            break
          }
        }
        this.QZ(this.view)
      }
    }
    var PJ = xV(40659);
    const AJ = [{
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

    function NJ(VV) {
      var eV;
      let {
        controller: xV
      } = VV;
      (0, jV.j)(tJ, null);
      const JV = null === (eV = xV.getView()) || void 0 === eV ? void 0 : eV.job;
      return "marketDeliver" !== (null === JV || void 0 === JV ? void 0 : JV.kind) ? null : (0, TV.jsx)(XJ, {
        endsAt: JV.endsAt,
        delivered: JV.delivered
      })
    }

    function XJ(VV) {
      let {
        endsAt: eV,
        delivered: xV
      } = VV;
      const {
        t: JV
      } = (0, tV.A)(), YV = Math.max(0, Math.ceil((0, PJ.i)(eV))), UV = (0, pV.useRef)(null), yV = (0, pV.useRef)(null), QV = (0, pV.useRef)({
        endsAt: eV,
        delivered: xV
      }), [nV, wV] = (0, pV.useState)(null);
      (0, pV.useLayoutEffect)((() => {
        const VV = xV > QV.current.delivered ? Math.round((eV - QV.current.endsAt) / 1e3) : 0;
        var JV;
        (QV.current = {
          endsAt: eV,
          delivered: xV
        }, VV <= 0) || (wV((eV => {
          var xV;
          return {
            seconds: VV,
            token: (null !== (xV = null === eV || void 0 === eV ? void 0 : eV.token) && void 0 !== xV ? xV : 0) + 1
          }
        })), window.matchMedia("(prefers-reduced-motion: reduce)").matches || (null === (JV = yV.current) || void 0 === JV || JV.cancel(), yV.current = UV.current.animate(AJ, {
          duration: 420,
          easing: "ease-out"
        })))
      }), [eV, xV]), (0, pV.useEffect)((() => () => {
        var VV;
        null === (VV = yV.current) || void 0 === VV || VV.cancel()
      }), []);
      const ZV = Math.floor(YV / 60);
      return (0, TV.jsxs)("div", {
        className: kV()("GreenvilleMarketCountdown", {
          Urgent: YV < 10
        }),
        role: "timer",
        children: [(0, TV.jsxs)("div", {
          ref: UV,
          className: "GreenvilleMarketCountdownTime FullyFancyText",
          children: [ZV, ":", String(YV % 60).padStart(2, "0")]
        }), null !== nV && (0, TV.jsx)("div", {
          className: "GreenvilleMarketCountdownAdded FullyFancyText",
          onAnimationEnd: () => {
            wV(null)
          },
          children: JV("greenvilleGame:marketCountdownAdded", {
            seconds: nV.seconds
          })
        }, nV.token)]
      })
    }

    function MJ(VV) {
      var eV;
      let {
        controller: xV
      } = VV;
      (0, jV.j)(tJ, null);
      const JV = null === (eV = xV.getView()) || void 0 === eV ? void 0 : eV.job;
      return JV ? (0, TV.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: ["marketDeliver" === JV.kind && (0, TV.jsx)(WJ, {
          shift: JV
        }), "marketDeliver" !== JV.kind && (0, TV.jsx)(zJ, {
          task: JV
        })]
      }) : null
    }

    function zJ(VV) {
      let {
        task: eV
      } = VV;
      const {
        t: xV
      } = (0, tV.A)(), JV = "marketPick" === eV.kind && eV.goods.every((VV => {
        let [, eV] = VV;
        return 0 === eV
      }));
      return (0, TV.jsxs)(TV.Fragment, {
        children: [(0, TV.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: xV("marketPick" === eV.kind ? "greenvilleGame:marketPanelOrder" : "greenvilleGame:marketPanelCrate")
        }), (0, TV.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: eV.goods.map((VV => {
            let [eV, JV, YV] = VV;
            return (0, TV.jsxs)("li", {
              className: kV()("GreenvilleTrackerRow", {
                Done: 0 === JV
              }),
              children: [(0, TV.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, TV.jsx)(BV.e, {
                  itemName: eV,
                  amount: 0
                })
              }), (0, TV.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: (0, ax.e)(xV, eV)
              }), (0, TV.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [YV - JV, "/", YV]
              })]
            }, eV)
          }))
        }), JV && (0, TV.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: xV("greenvilleGame:marketPanelReturn")
        }), !JV && 0 !== eV.tipEndsAt && (0, TV.jsx)(GJ, {
          endsAt: eV.tipEndsAt
        })]
      })
    }

    function GJ(VV) {
      let {
        endsAt: eV
      } = VV;
      const {
        t: xV
      } = (0, tV.A)(), JV = Math.ceil((0, PJ.i)(eV));
      return JV <= 0 ? null : (0, TV.jsx)("div", {
        className: "GreenvilleTrackerTip",
        children: xV("greenvilleGame:marketPanelTip", {
          seconds: JV
        })
      })
    }

    function WJ(VV) {
      let {
        shift: eV
      } = VV;
      const {
        t: xV
      } = (0, tV.A)();
      return (0, TV.jsxs)(TV.Fragment, {
        children: [(0, TV.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: xV("greenvilleGame:marketPanelDeliveries")
        }), (0, TV.jsxs)("ul", {
          className: "GreenvilleTrackerRows",
          children: [(0, TV.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, TV.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: xV("greenvilleGame:marketPanelParcels")
            }), (0, TV.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: eV.parcelsLeft
            })]
          }), (0, TV.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, TV.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: xV("greenvilleGame:marketPanelDelivered")
            }), (0, TV.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: eV.delivered
            })]
          }), (0, TV.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, TV.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: xV("greenvilleGame:marketPanelEarned")
            }), (0, TV.jsx)("span", {
              className: "GreenvilleTrackerIcon",
              "aria-hidden": "true",
              children: (0, TV.jsx)(BV.e, {
                itemName: "Gold Coin",
                amount: 0
              })
            }), (0, TV.jsx)("span", {
              className: "GreenvilleTrackerValue Gold",
              children: (0, iV.d)(eV.gold)
            })]
          })]
        }), 0 === eV.parcelsLeft && (0, TV.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: xV("greenvilleGame:marketPanelBackToBay")
        })]
      })
    }
    const RJ = {
      marketNpc: "comment-dots",
      marketShelf: "cart-shopping",
      marketHouse: "house",
      marketDepot: "truck"
    };

    function gJ(VV) {
      var eV;
      let {
        market: xV,
        markers: JV
      } = VV;
      (0, jV.j)(tJ, null);
      const YV = null === (eV = xV.getView()) || void 0 === eV ? void 0 : eV.waypoints;
      return null !== YV && void 0 !== YV && YV.length ? (0, TV.jsx)("div", {
        className: "GreenvilleMarketWaypoints",
        children: YV.map((VV => (0, TV.jsx)(DJ, {
          waypoint: VV,
          bind: JV.waypoints.bindMarker(VV.key)
        }, VV.key)))
      }) : null
    }

    function DJ(VV) {
      let {
        waypoint: {
          icon: eV,
          item: xV,
          label: JV
        },
        bind: YV
      } = VV;
      const UV = "marketHouse" === eV;
      return (0, TV.jsxs)("div", {
        ref: YV,
        className: kV()("GreenvilleMarketWaypoint", {
          House: UV
        }),
        children: [UV && (0, TV.jsx)(iJ, {}), (0, TV.jsxs)("div", {
          className: "GreenvilleMarketWaypointBadge",
          children: [null !== xV && (0, TV.jsx)("span", {
            className: "GreenvilleMarketWaypointItem",
            children: (0, TV.jsx)(BV.e, {
              itemName: xV,
              amount: 0
            })
          }), null === xV && (0, TV.jsx)(dV.b, {
            name: RJ[eV]
          })]
        }), (0, TV.jsxs)("div", {
          className: "GreenvilleMarketWaypointLabels",
          children: [null !== JV && (0, TV.jsx)("span", {
            className: "GreenvilleMarketWaypointLabel SmallTextBold",
            children: JV
          }), (0, TV.jsx)("span", {
            className: "GreenvilleMarketWaypointDistance SmallTextBold"
          })]
        })]
      })
    }

    function iJ() {
      const VV = (0, pV.useRef)(null);
      return (0, jx.e)(VV), (0, TV.jsx)("span", {
        ref: VV,
        className: "GreenvilleMarketWaypointPulse"
      })
    }
    var CJ = xV(40663);
    class aJ {
      constructor(VV) {
        this.market = VV, this.waypoints = new CJ.d({
          labels: "GreenvilleMarketWaypointLabels",
          distance: "GreenvilleMarketWaypointDistance"
        }, "greenvilleGame:marketDistance")
      }
      frame(VV, eV) {
        this.waypoints.setRender(VV);
        const xV = this.market.getView();
        if (xV && this.waypoints.hasMarkers())
          for (const {
              key: JV,
              target: YV
            }
            of xV.waypoints) this.waypoints.update(JV, YV[0], YV[1] + 1, YV[2], eV)
      }
    }
    const oJ = {
      Street: "St",
      Avenue: "Ave",
      Road: "Rd",
      Lane: "Ln"
    };

    function cJ(VV, eV) {
      return eV.map(((eV, xV) => {
        const JV = eV.lastIndexOf(" "),
          YV = eV.slice(JV + 1);
        let UV = oJ[YV];
        return void 0 === UV && (console.warn(`Greenville street "${eV}" has no suffix abbreviation`), UV = YV), {
          axis: VV,
          line: xV,
          name: eV,
          shortName: eV.slice(0, JV),
          suffix: UV
        }
      }))
    }
    const hJ = {
        eastWest: cJ("eastWest", ["Hillcrest Road", "Oak Street", "Main Street", "Elm Street", "Harbour Road"]),
        northSouth: cJ("northSouth", ["Willow Lane", "Birch Avenue", "Market Street", "Maple Avenue", "Station Road"])
      },
      lJ = {
        kind: "outside"
      };

    function LJ(VV, eV, xV) {
      return 100 * (VV + 1) + eV + (xV ? 1 : 0)
    }

    function fJ(VV, eV, xV, JV) {
      return {
        x0: sx + VV,
        z0: sx + eV,
        x1: sx + VV + xV - 1,
        z1: sx + eV + JV - 1
      }
    }
    let mJ = null;

    function KJ(VV, eV, xV, JV) {
      if (JV && "outside" !== JV.kind) {
        const {
          box: xV
        } = JV;
        if (!eJ(xV, VV, eV) && eJ({
            x0: xV.x0 - 2,
            z0: xV.z0 - 2,
            x1: xV.x1 + 2,
            z1: xV.z1 + 2
          }, VV, eV)) return JV
      }
      return function(VV, eV, xV) {
        const {
          eastWest: JV,
          northSouth: YV
        } = hJ;
        switch (VV.kind) {
          case "outside":
            return lJ;
          case "street": {
            const eV = VV.segment * Ix + Sx,
              xV = VV.line * Ix;
            return {
              kind: "street",
              box: "eastWest" === VV.axis ? fJ(eV, xV, Ix - Sx, Sx) : fJ(xV, eV, Sx, Ix - Sx),
              street: hJ[VV.axis][VV.line],
              block: 100 * (VV.segment + 1)
            }
          }
          case "junction": {
            const UV = fJ(VV.column * Ix, VV.row * Ix, Sx, Sx),
              yV = [JV[VV.row], YV[VV.column]],
              pV = "street" === (null === xV || void 0 === xV ? void 0 : xV.kind) ? xV.street : "junction" === (null === xV || void 0 === xV ? void 0 : xV.kind) ? xV.along : null,
              QV = pV && yV.includes(pV) ? pV : Math.abs(Math.sin(eV)) > Math.abs(Math.cos(eV)) ? yV[0] : yV[1];
            return {
              kind: "junction",
              box: UV,
              along: QV,
              cross: QV === yV[0] ? yV[1] : yV[0]
            }
          }
          case "plot": {
            const eV = VV.column * Ix + Sx + VV.dx * Sx,
              xV = VV.row * Ix + Sx + VV.dz * Sx,
              YV = 0 === VV.dz;
            return {
              kind: "plot",
              box: fJ(eV, xV, Sx, Sx),
              plotId: (UV = (sx + eV) / Sx, yV = (sx + xV) / Sx, mJ || (mJ = new Map(UJ().map(((VV, eV) => {
                let {
                  chunk: xV
                } = VV;
                return [`${xV[0]},${xV[2]}`, eV + 1]
              })))), mJ.get(`${UV},${yV}`)),
              number: LJ(VV.column, 0 === VV.dx ? 30 : 70, YV),
              street: JV[YV ? VV.row : VV.row + 1],
              neighbourhood: VV.neighbourhood
            }
          }
          case "tile": {
            const {
              column: eV,
              row: xV,
              district: YV
            } = VV;
            return {
              kind: "tile",
              box: fJ(eV * Ix + Sx, xV * Ix + Sx, Ix - Sx, Ix - Sx),
              district: YV,
              number: LJ(eV, 50, !0),
              street: JV[xV]
            }
          }
        }
        var UV, yV
      }(function(VV, eV) {
        const xV = VV - sx,
          JV = eV - sx;
        if (xV < 0 || JV < 0 || xV >= dx || JV >= dx) return {
          kind: "outside"
        };
        const YV = Math.floor(xV / Ix),
          UV = Math.floor(JV / Ix),
          yV = xV - YV * Ix - Sx,
          pV = JV - UV * Ix - Sx;
        if (yV < 0 && pV < 0) return {
          kind: "junction",
          column: YV,
          row: UV
        };
        if (pV < 0) return {
          kind: "street",
          axis: "eastWest",
          line: UV,
          segment: YV
        };
        if (yV < 0) return {
          kind: "street",
          axis: "northSouth",
          line: YV,
          segment: UV
        };
        const QV = xJ[UV][YV];
        return "residential" === QV.kind ? {
          kind: "plot",
          column: YV,
          row: UV,
          dx: Math.floor(yV / Sx),
          dz: Math.floor(pV / Sx),
          neighbourhood: QV.name
        } : {
          kind: "tile",
          column: YV,
          row: UV,
          district: QV.district
        }
      }(VV, eV), xV, JV)
    }

    function HJ(VV) {
      switch (VV.kind) {
        case "outside":
          return "outside";
        case "junction":
          return `junction|${VV.along.name}|${VV.cross.name}`;
        case "plot":
        case "tile":
          return `${VV.kind}|${VV.number}|${VV.street.name}`;
        case "street":
          return `street|${VV.block}|${VV.street.name}`
      }
    }
    var uJ = xV(40692);
    const sJ = xV.p + "static/media/greenvilleCity.7b141fefdb213c21b37a.png";
    var SJ = xV(40685),
      IJ = xV(275);
    const dJ = Kx.f.PZ,
      OJ = dx / dJ,
      VY = Ox / dJ,
      eY = (VJ - Ox) / dJ;
    class xY {
      constructor(VV) {
        this.api = VV, this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.image = this.context.createImageData(dJ, dJ), this.plots = new Set(UJ().map((VV => {
          let {
            chunk: eV
          } = VV;
          return (eV[2] - sx / dJ) * OJ + eV[0] - sx / dJ
        }))), this.baked = null, this.ik = !1, this.ids = new Uint16Array(dJ * dJ), this.tops = new Int32Array(dJ * dJ), this.edgeIds = new Uint16Array(dJ), this.edgeTops = new Int32Array(dJ), this.heights = new Int32Array(dx * dx).fill(uJ.e), this.versions = new Float64Array(OJ * OJ * eY).fill(NaN), this.current = new Float64Array(eY), this.stale = new Uint8Array(OJ * OJ), this.painted = new Uint8Array(OJ * OJ), this.order = [], this.focus = {
          column: -1,
          row: -1
        }, this.colours = null, this.host = null, this.timer = null, this.cancelIdle = null, this.pass = VV => {
          this.cancelIdle = null;
          let eV = !1;
          const xV = performance.now();
          let JV = !0;
          if (this.colours && this.host && this.host.clientWidth > 0)
            for (const YV of this.order) {
              if (!this.readVersions(YV)) continue;
              const UV = !VV.didTimeout && VV.timeRemaining() < 2;
              if (!JV && (UV || performance.now() - xV > 6)) {
                eV = !0;
                break
              }
              JV = !1, this.versions.set(this.current, YV * eY), this.paint(YV % OJ, Math.floor(YV / OJ), this.colours.lookup, this.colours.drawn)
            }
          this.schedule(eV ? 0 : 500)
        }, this.canvas.width = dx, this.canvas.height = dx, this.canvas.className = "GreenvilleNavMapTerrain", this.focusOn(sx + dx / 2, sx + dx / 2), Promise.all([(0, SJ.b)(), this.drawBakedCity()]).then((VV => {
          let [eV] = VV;
          this.colours = {
            lookup: eV,
            drawn: eV.getDrawnIds()
          }
        }), (VV => {
          console.error("Greenville map: block colours failed to load", VV)
        })), this.schedule(0)
      }
      mount(VV) {
        this.host = VV, null === VV || void 0 === VV || VV.replaceChildren(this.canvas)
      }
      focusOn(VV, eV) {
        const xV = Math.min(OJ - 1, Math.max(0, Math.floor((VV - sx) / dJ))),
          JV = Math.min(OJ - 1, Math.max(0, Math.floor((eV - sx) / dJ)));
        xV === this.focus.column && JV === this.focus.row || (this.focus = {
          column: xV,
          row: JV
        }, this.order = [...this.plots].sort(((VV, eV) => Math.hypot(VV % OJ - xV, Math.floor(VV / OJ) - JV) - Math.hypot(eV % OJ - xV, Math.floor(eV / OJ) - JV))))
      }
      forget(VV, eV) {
        const xV = eV * OJ + VV;
        this.stale[xV] = 1, this.versions.fill(NaN, xV * eY, (xV + 1) * eY)
      }
      dispose() {
        var VV, eV;
        null !== this.timer && clearTimeout(this.timer), null === (VV = this.cancelIdle) || void 0 === VV || VV.call(this), this.host = null, this.ik = !0, null === (eV = this.baked) || void 0 === eV || eV.close(), this.baked = null
      }
      async drawBakedCity() {
        try {
          const VV = await fetch(sJ);
          if (!VV.ok) throw new Error(`HTTP ${VV.status}`);
          const eV = await createImageBitmap(await VV.blob(), {
            colorSpaceConversion: "none"
          });
          if (this.ik) return void eV.close();
          this.baked = eV, this.context.drawImage(eV, 0, 0)
        } catch (VV) {
          console.error("Greenville map: the baked city failed to load", VV)
        }
      }
      schedule(VV) {
        this.timer = setTimeout((() => {
          this.timer = null, this.cancelIdle = (0, IJ.e)(this.pass, {
            timeoutMs: 1e3
          })
        }), VV)
      }
      readVersions(VV) {
        const eV = sx / dJ + VV % OJ,
          xV = sx / dJ + Math.floor(VV / OJ);
        let JV = !1;
        for (let UV = 0; UV < eY; UV++) {
          var YV;
          const yV = null !== (YV = this.api.getChunkVersion(eV, VY + UV, xV)) && void 0 !== YV ? YV : 0;
          this.current[UV] = yV, JV ||= yV !== this.versions[VV * eY + UV]
        }
        return JV
      }
      repaintIfPainted(VV, eV) {
        const xV = eV * OJ + VV;
        VV < OJ && eV < OJ && 1 === this.painted[xV] && this.versions.fill(NaN, xV * eY, (xV + 1) * eY)
      }
      storeHeights(VV, eV) {
        let xV = !1,
          JV = !1;
        for (let YV = 0; YV < this.ids.length; YV++) {
          const UV = YV % dJ,
            yV = Math.floor(YV / dJ),
            pV = (eV * dJ + yV) * dx + VV * dJ + UV,
            QV = 0 === this.ids[YV] ? uJ.e : this.tops[YV];
          this.heights[pV] !== QV && (xV ||= UV === dJ - 1, JV ||= yV === dJ - 1, this.heights[pV] = QV)
        }
        xV && this.repaintIfPainted(VV + 1, eV), JV && this.repaintIfPainted(VV, eV + 1)
      }
      readEdgeHeights(VV, eV, xV, JV, YV) {
        this.api.readColumnTops(VV, eV, xV, JV, Ox, VJ, YV, this.edgeIds, this.edgeTops);
        const UV = xV - VV;
        for (let yV = 0; yV < dJ; yV++) {
          const xV = (eV - sx + Math.floor(yV / UV)) * dx + VV - sx + yV % UV;
          this.heights[xV] = 0 === this.edgeIds[yV] ? uJ.e : this.edgeTops[yV]
        }
      }
      paint(VV, eV, xV, JV) {
        const YV = eV * OJ + VV,
          UV = 1 === this.stale[YV];
        this.stale[YV] = 0;
        const yV = sx + VV * dJ,
          pV = sx + eV * dJ,
          QV = dx - (VV + 1) * dJ,
          {
            ids: nV,
            tops: wV,
            heights: ZV
          } = this;
        if (0 === this.current[0 - VY]) return void(UV && (this.context.clearRect(QV, eV * dJ, dJ, dJ), this.baked && this.context.drawImage(this.baked, QV, eV * dJ, dJ, dJ, QV, eV * dJ, dJ, dJ), nV.fill(0), this.storeHeights(VV, eV)));
        this.painted[YV] = 1, this.api.readColumnTops(yV, pV, yV + dJ, pV + dJ, Ox, VJ, JV, nV, wV), this.storeHeights(VV, eV), this.plots.has(YV - 1) || this.readEdgeHeights(yV - 1, pV, yV, pV + dJ, JV), this.plots.has(YV - OJ) || this.readEdgeHeights(yV, pV - 1, yV + dJ, pV, JV);
        const vV = this.image.data;
        for (let rV = 0; rV < dJ; rV++)
          for (let JV = 0; JV < dJ; JV++) {
            const YV = 4 * (rV * dJ + dJ - 1 - JV),
              UV = nV[rV * dJ + JV];
            if (0 === UV) {
              vV[YV + 3] = 0;
              continue
            }
            const yV = VV * dJ + JV,
              pV = eV * dJ + rV;
            xV.drawPixel(vV, YV, UV, wV[rV * dJ + JV], ZV[(pV - 1) * dx + yV], ZV[pV * dx + yV - 1])
          }
        this.context.putImageData(this.image, QV, eV * dJ)
      }
    }
    const JY = "greenvilleNavAddress",
      YY = "greenvilleNavPlots",
      UY = "greenvilleNavMarkers",
      yY = Math.log(dx / 80),
      pY = 5 * Math.PI / 180,
      QY = {
        kind: "outside"
      };

    function nY(VV) {
      return (VV - sx) / Kx.f.PZ
    }
    class wY {
      constructor(VV, eV, xV) {
        this.publishAddress = VV, this.publishPlots = eV, this.publishMarkers = xV, this.address = QY, this.addressKey = HJ(QY), this.block = {
          x: NaN,
          z: NaN
        }, this.plots = void 0, this.markers = [], this.terrain = null, this.cZ = null, this.worldResize = null, this.worldPx = 0, this.arrowTrack = null, this.arrow = null, this.zoom = 0, this.lastFrameMs = NaN, this.written = {
          u: NaN,
          v: NaN,
          scale: NaN,
          heading: NaN
        }, this.reducedMotion = null, this.mountTerrain = VV => {
          this.terrain.mount(VV)
        }, this.mountWorld = VV => {
          var eV;
          this.cZ = VV, this.written = {
            u: NaN,
            v: NaN,
            scale: NaN,
            heading: NaN
          }, null === (eV = this.worldResize) || void 0 === eV || eV.disconnect(), this.worldResize = null, VV && (this.worldResize = new ResizeObserver((VV => {
            let [eV] = VV;
            this.worldPx = eV.contentRect.width, this.written.u = NaN
          })), this.worldResize.observe(VV))
        }, this.mountArrow = VV => {
          var eV;
          this.arrowTrack = VV, this.arrow = null !== (eV = null === VV || void 0 === VV ? void 0 : VV.firstElementChild) && void 0 !== eV ? eV : null, this.written = {
            u: NaN,
            v: NaN,
            scale: NaN,
            heading: NaN
          }
        }, this.plots = {
          plots: UJ().map(((VV, eV) => {
            let {
              chunk: xV,
              facing: JV
            } = VV;
            return {
              plotId: eV + 1,
              chunkX: xV[0] - sx / Kx.f.PZ,
              chunkZ: xV[2] - sx / Kx.f.PZ,
              facing: JV,
              state: "vacant",
              mine: !1
            }
          })),
          animate: !1
        }
      }
      start(VV) {
        this.terrain = new xY(VV)
      }
      dispose() {
        this.terrain.dispose()
      }
      getAddress() {
        return this.address
      }
      getPlots() {
        return this.plots
      }
      getMarkers() {
        return this.markers
      }
      RZ(VV) {
        const eV = [...this.plots.plots];
        for (const [JV, YV, UV] of "plotsAll" === VV[0] ? VV[1] : [VV[1]]) {
          const VV = eV[JV - 1];
          var xV;
          if (VV.state === YV && VV.mine === UV || (eV[JV - 1] = {
              ...VV,
              state: YV,
              mine: UV
            }), VV.state !== YV) null === (xV = this.terrain) || void 0 === xV || xV.forget(VV.chunkX, VV.chunkZ)
        }
        this.plots = {
          plots: eV,
          animate: "plotsOne" === VV[0]
        }, this.publishPlots(this.plots)
      }
      receiveMarkers(VV) {
        this.markers = VV.map((VV => {
          const [eV, xV] = [nY(VV[2]), nY(VV[3])];
          return "mapPlace" === VV[0] ? {
            kind: "place",
            place: VV[1],
            x: eV,
            z: xV
          } : {
            kind: "npc",
            face: null === VV[1] ? "npc" : `npc_${VV[1]}`,
            x: eV,
            z: xV
          }
        })), this.publishMarkers(this.markers)
      }
      frame(VV, eV, xV) {
        if (!eV) return;
        const JV = Math.floor(eV[0]),
          YV = Math.floor(eV[2]);
        if (JV !== this.block.x || YV !== this.block.z) {
          this.block = {
            x: JV,
            z: YV
          }, this.terrain.focusOn(JV, YV), this.address = KJ(JV, YV, VV.cameraHeading, this.address);
          const eV = HJ(this.address);
          eV !== this.addressKey && (this.addressKey = eV, this.publishAddress(this.address))
        }
        const UV = performance.now(),
          yV = function(VV, eV) {
            return eV || "plot" !== VV.kind && "tile" !== VV.kind ? 0 : 1
          }(this.address, xV);
        if (this.zoom !== yV) {
          this.reducedMotion ??= window.matchMedia("(prefers-reduced-motion: reduce)");
          const VV = this.reducedMotion.matches ? 1 : 1 - Math.exp(-(UV - this.lastFrameMs) / 150);
          this.zoom += (yV - this.zoom) * (Number.isNaN(VV) ? 1 : VV), Math.abs(yV - this.zoom) < .002 && (this.zoom = yV)
        }
        this.lastFrameMs = UV, "outside" !== this.address.kind && this.writeView(eV[0], eV[2], VV.cameraHeading)
      }
      writeView(VV, eV, xV) {
        const {
          cZ: JV,
          arrowTrack: YV,
          arrow: UV,
          written: yV
        } = this;
        if (!JV || !YV || !UV) return;
        const pV = (sx + dx - VV) / dx,
          QV = (eV - sx) / dx,
          nV = Math.exp(this.zoom * yY),
          wV = Math.abs(Math.atan2(Math.sin(xV - yV.heading), Math.cos(xV - yV.heading))),
          ZV = nV !== yV.scale,
          vV = !(Math.hypot(pV - yV.u, QV - yV.v) * this.worldPx * nV < 1);
        if (ZV || vV || !(wV < pY)) {
          if (ZV || vV) {
            this.written.u = pV, this.written.v = QV;
            const VV = pV + (.5 - pV) * this.zoom - pV * nV,
              eV = QV + (.5 - QV) * this.zoom - QV * nV;
            JV.style.transform = `translate(${100*VV}%, ${100*eV}%) scale(${nV})`, YV.style.transform = `translate(${100*pV}%, ${100*QV}%)`
          }(ZV || wV >= pY) && (UV.style.transform = `translate(-50%, -50%) scale(${1/nV}) rotate(${180+180*xV/Math.PI}deg)`, this.written.heading = xV), ZV && (JV.style.setProperty("--greenville-map-unzoom", String(1 / nV)), JV.style.setProperty("--greenville-map-zoom", String(this.zoom)), this.written.scale = nV)
        }
      }
    }
    var ZY = xV(39735);
    const vY = dx / Kx.f.PZ,
      rY = `matrix(-1 0 0 1 ${vY} 0)`,
      kY = .08,
      bY = [{
        transform: "scaleY(0)"
      }, {
        transform: "scaleY(1)"
      }],
      EY = [{
        opacity: 1
      }, {
        opacity: 0
      }],
      BY = {
        quarry: yJ.mining,
        industry: yJ.demolition,
        market: yJ.market,
        lumberMill: yJ.woodcutting,
        farm: yJ.farming,
        dealership: "Light Blue Car"
      },
      jY = {
        drillBay: yJ.mining,
        vanBay: "Yellow Kart",
        carPickup: "Light Blue Car",
        demolitionPit: yJ.demolition,
        farmField: yJ.farming,
        woods: yJ.woodcutting
      },
      qY = xJ.flatMap(((VV, eV) => VV.flatMap(((VV, xV) => "residential" === VV.kind ? [] : [{
        tile: VV,
        x: 1 + 3 * xV,
        z: 1 + 3 * eV
      }])))),
      tY = [...hJ.eastWest, ...hJ.northSouth];

    function FY(VV, eV) {
      return {
        left: (vY - VV) / vY * 100 + "%",
        top: eV / vY * 100 + "%"
      }
    }

    function TY(VV) {
      let {
        axis: eV,
        line: xV
      } = VV;
      const JV = .3,
        YV = 3 * xV + JV,
        UV = vY - .6;
      return "eastWest" === eV ? {
        x: JV,
        y: YV,
        width: UV,
        height: .4
      } : {
        x: YV,
        y: JV,
        width: .4,
        height: UV
      }
    }

    function PY(VV) {
      let {
        controller: eV
      } = VV;
      (0, jV.j)(YY, null);
      const {
        plots: xV,
        animate: JV
      } = eV.getPlots();
      return (0, TV.jsx)("div", {
        className: "GreenvilleNavMap",
        children: (0, TV.jsxs)("div", {
          className: "GreenvilleNavMapWorld",
          ref: eV.mountWorld,
          children: [(0, TV.jsx)("svg", {
            className: "GreenvilleNavMapPlan",
            viewBox: `0 0 ${vY} ${vY}`,
            preserveAspectRatio: "none",
            shapeRendering: "crispEdges",
            children: (0, TV.jsxs)("g", {
              transform: rY,
              children: [(0, TV.jsx)("rect", {
                className: "GreenvilleNavGround",
                width: vY,
                height: vY
              }), tY.map((VV => (0, TV.jsx)("rect", {
                className: "GreenvilleNavRoad",
                ...TY(VV)
              }, VV.name))), qY.map((VV => {
                let {
                  tile: eV,
                  x: xV,
                  z: JV
                } = VV;
                return (0, TV.jsx)("rect", {
                  className: "GreenvilleNavDistrict",
                  "data-district": eV.district,
                  x: xV,
                  y: JV,
                  width: 2,
                  height: 2
                }, eV.district)
              })), xV.map((VV => (0, TV.jsx)(NY, {
                plot: VV,
                animate: JV
              }, VV.plotId)))]
            })
          }), (0, TV.jsx)("div", {
            className: "GreenvilleNavMapTerrainHost",
            ref: eV.mountTerrain
          }), (0, TV.jsx)("svg", {
            className: "GreenvilleNavMapLots",
            viewBox: `0 0 ${vY} ${vY}`,
            preserveAspectRatio: "none",
            children: (0, TV.jsx)("g", {
              transform: rY,
              children: xV.map((VV => (0, TV.jsx)("rect", {
                className: kV()("GreenvilleNavLot", {
                  Vacant: "vacant" === VV.state,
                  Loading: "loading" === VV.state,
                  Mine: VV.mine
                }),
                x: VV.chunkX + kY,
                y: VV.chunkZ + kY,
                width: .84,
                height: .84
              }, VV.plotId)))
            })
          }), qY.map((VV => {
            let {
              tile: eV,
              x: xV,
              z: JV
            } = VV;
            const YV = BY[eV.district];
            return YV && (0, TV.jsx)("span", {
              className: "GreenvilleNavPin GreenvilleNavLandmark",
              style: FY(xV + 1, JV + 1),
              children: (0, TV.jsx)(BV.e, {
                itemName: YV,
                amount: 0
              })
            }, eV.district)
          })), (0, TV.jsx)(AY, {
            controller: eV
          }), (0, TV.jsx)("div", {
            className: "GreenvilleNavArrowTrack",
            ref: eV.mountArrow,
            children: (0, TV.jsx)("div", {
              className: "GreenvilleNavArrow",
              children: (0, TV.jsx)("svg", {
                viewBox: "-1 -1 2 2",
                children: (0, TV.jsx)("polygon", {
                  points: "0,-0.8 0.62,0.62 0,0.28 -0.62,0.62"
                })
              })
            })
          }), xV.map((VV => VV.mine && (0, TV.jsx)("span", {
            className: "GreenvilleNavPin GreenvilleNavHome",
            style: FY(VV.chunkX + .5, VV.chunkZ + ("north" === VV.facing ? 0 : 1)),
            children: (0, TV.jsx)(dV.b, {
              name: "house"
            })
          }, VV.plotId)))]
        })
      })
    }

    function AY(VV) {
      let {
        controller: eV
      } = VV;
      return (0, jV.j)(UY, null), (0, TV.jsx)(TV.Fragment, {
        children: eV.getMarkers().map(((VV, eV) => (0, TV.jsxs)("span", {
          className: "GreenvilleNavPin GreenvilleNavMarker",
          style: FY(VV.x, VV.z),
          children: ["npc" === VV.kind && (0, TV.jsx)(ZY.b, {
            icon: VV.face
          }), "place" === VV.kind && (0, TV.jsx)(BV.e, {
            itemName: jY[VV.place],
            amount: 0
          })]
        }, eV)))
      })
    }
    const NY = (0, pV.memo)((function(VV) {
      let {
        plot: eV,
        animate: xV
      } = VV;
      const JV = (0, pV.useRef)(null),
        YV = (0, pV.useRef)(eV.state),
        UV = (0, pV.useRef)(null);
      return (0, pV.useLayoutEffect)((() => {
        var VV;
        const yV = YV.current;
        YV.current = eV.state, yV !== eV.state && (null === (VV = UV.current) || void 0 === VV || VV.cancel(), xV && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && ("built" === eV.state ? UV.current = JV.current.animate(bY, {
          duration: 300,
          easing: "ease-out"
        }) : "vacant" === eV.state && (UV.current = JV.current.animate(EY, {
          duration: 400,
          easing: "ease-in"
        }))))
      }), [eV.state]), (0, pV.useEffect)((() => () => {
        var VV;
        null === (VV = UV.current) || void 0 === VV || VV.cancel()
      }), []), (0, TV.jsxs)(TV.Fragment, {
        children: [(0, TV.jsx)("rect", {
          className: "GreenvilleNavPlotGrass",
          x: eV.chunkX + kY,
          y: eV.chunkZ + kY,
          width: .84,
          height: .84
        }), (0, TV.jsx)("rect", {
          ref: JV,
          className: kV()("GreenvilleNavPlotRoof", {
            Loading: "loading" === eV.state,
            Built: "built" === eV.state,
            Mine: eV.mine
          }),
          x: eV.chunkX + kY,
          y: eV.chunkZ + kY,
          width: .84,
          height: .84
        })]
      })
    }));

    function XY(VV) {
      let {
        controller: eV
      } = VV;
      const [xV, JV] = (0, pV.useState)((() => "outside" === eV.getAddress().kind));
      (0, jV.g)(JY, (() => {
        JV("outside" === eV.getAddress().kind)
      }));
      const YV = (0, aV.b)();
      return (0, TV.jsx)("div", {
        className: kV()("GreenvilleNav", {
          Hidden: YV || xV
        }),
        children: (0, TV.jsx)(PY, {
          controller: eV
        })
      })
    }

    function MY(VV) {
      return VV >= 75 ? "face-smile" : VV >= 50 ? "face-diagonal-mouth" : VV >= 25 ? "face-worried" : "face-dizzy"
    }

    function zY(VV) {
      const eV = Math.round(VV);
      return `${eV>0?"+":""}${eV}%`
    }

    function GY(VV) {
      let {
        controller: eV
      } = VV;
      (0, jV.j)(hx, null);
      const xV = eV.getMood();
      return xV ? (0, TV.jsx)(EV.e, {
        placement: "statBars",
        children: (0, TV.jsx)(WY, {
          mood: xV
        })
      }) : null
    }

    function WY(VV) {
      let {
        mood: eV
      } = VV;
      const {
        t: xV
      } = (0, tV.A)(), JV = function(VV) {
        const [, eV] = (0, pV.useState)(0);
        return (0, pV.useEffect)((() => {
          const xV = VV - performance.now();
          if (xV <= 0) return;
          const JV = window.setTimeout((() => {
            eV((VV => VV + 1))
          }), xV);
          return () => {
            window.clearTimeout(JV)
          }
        }), [VV]), VV > performance.now()
      }(eV.restedEndsAt), {
        energy: YV,
        breakEvenEnergy: UV,
        luckPercent: yV
      } = eV, QV = null !== yV && void 0 !== yV ? yV : eV.earningsPercent;
      return (0, TV.jsxs)("div", {
        className: kV()("GreenvilleMoodChip", {
          Exhausted: YV < 25,
          Rested: JV,
          Tired: !JV && YV < UV && YV >= 25,
          Drained: !JV && YV < 25
        }),
        role: "img",
        "aria-label": xV("greenvilleGame:moodEnergyLabel", {
          energy: Math.round(YV)
        }),
        children: [(0, TV.jsx)(dV.b, {
          name: MY(YV),
          className: "GreenvilleMoodChipFace"
        }), JV && (0, TV.jsx)("span", {
          className: "GreenvilleMoodChipZz",
          children: xV("greenvilleGame:moodRestedGlyph")
        }), (0, TV.jsxs)("div", {
          className: "GreenvilleMoodChipMeter",
          style: {
            "--greenville-break-even": `${UV}%`
          },
          children: [(0, TV.jsx)("div", {
            className: "GreenvilleMoodChipBar",
            children: (0, TV.jsx)("div", {
              className: "GreenvilleMoodChipFill",
              style: {
                transform: `scaleX(${Math.min(100,Math.max(0,YV))/100})`
              }
            })
          }), (0, TV.jsx)("div", {
            className: "GreenvilleMoodChipTick"
          })]
        }), null === yV && (0, TV.jsx)("span", {
          className: "GreenvilleMoodChipCoin",
          "aria-hidden": "true",
          children: (0, TV.jsx)(BV.e, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), (0, TV.jsxs)("span", {
          className: kV()("GreenvilleMoodChipEarnings", {
            Positive: Math.round(QV) > 0,
            Negative: Math.round(QV) < 0
          }),
          children: [null !== yV && (0, TV.jsx)("span", {
            className: "GreenvilleMoodChipLuck",
            children: xV("greenvilleGame:luck")
          }), zY(QV)]
        }), eV.adBoosted && (0, TV.jsx)("span", {
          className: "GreenvilleMoodChipBoost",
          children: (0, TV.jsx)(dV.b, {
            name: "bolt"
          })
        })]
      })
    }

    function RY(VV) {
      let {
        controller: eV
      } = VV;
      (0, jV.j)(cx, null);
      const xV = eV.getPlace();
      return "hudHome" !== (null === xV || void 0 === xV ? void 0 : xV.kind) || null === xV.runStartedAt ? null : (0, TV.jsx)(gY, {
        startedAt: xV.runStartedAt
      })
    }

    function gY(VV) {
      let {
        startedAt: eV
      } = VV;
      const xV = Math.max(0, Math.floor(-(0, PJ.i)(eV)));
      return (0, TV.jsx)("div", {
        className: "GreenvilleMarketCountdown",
        role: "timer",
        children: (0, TV.jsxs)("div", {
          className: "GreenvilleMarketCountdownTime FullyFancyText",
          children: [Math.floor(xV / 60), ":", String(xV % 60).padStart(2, "0")]
        })
      })
    }
    const DY = [{
        transform: "translateY(100%)",
        opacity: 0
      }, {
        transform: "translateY(0)",
        opacity: 1
      }],
      iY = [{
        transform: "translateY(-100%)",
        opacity: 0
      }, {
        transform: "translateY(0)",
        opacity: 1
      }];

    function CY(VV) {
      return VV ? `${VV.number}|${VV.street.name}` : ""
    }

    function aY(VV) {
      let {
        address: eV,
        large: xV,
        rootRef: JV
      } = VV;
      const YV = function(VV) {
          switch (VV.kind) {
            case "junction":
              return [{
                street: VV.along,
                number: null
              }, {
                street: VV.cross,
                number: null
              }];
            case "plot":
            case "tile":
              return [{
                street: VV.street,
                number: VV.number
              }, null];
            case "street":
              return [{
                street: VV.street,
                number: VV.block
              }, null]
          }
        }(eV),
        UV = xV && "plot" === eV.kind ? eV.neighbourhood : null,
        yV = (0, pV.useRef)(null),
        QV = (0, pV.useRef)(null),
        nV = (0, pV.useRef)(YV),
        wV = (0, pV.useRef)({
          large: xV,
          top: 0,
          height: 0
        }),
        ZV = (0, pV.useRef)([]),
        vV = (0, pV.useRef)(null);
      (0, pV.useLayoutEffect)((() => {
        const VV = nV.current;
        if (nV.current = YV, window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const eV = [];
        if (CY(VV[0]) !== CY(YV[0]) && eV.push(yV.current.animate(DY, {
            duration: 180,
            easing: "ease-out"
          })), YV[1] && !VV[1] && eV.push(QV.current.animate(iY, {
            duration: 220,
            easing: "ease-out"
          })), eV.length > 0) {
          for (const VV of ZV.current) VV.cancel();
          ZV.current = eV
        }
      }), [CY(YV[0]), CY(YV[1])]), (0, pV.useLayoutEffect)((() => {
        var VV;
        const eV = JV.current,
          YV = wV.current;
        wV.current = {
          large: xV,
          top: eV.offsetTop,
          height: eV.offsetHeight
        }, YV.large === xV || 0 === YV.height || 0 === eV.offsetHeight || window.matchMedia("(prefers-reduced-motion: reduce)").matches || (null === (VV = vV.current) || void 0 === VV || VV.cancel(), vV.current = eV.animate([{
          transform: `translateY(${YV.top-eV.offsetTop}px) scale(${YV.height/eV.offsetHeight})`
        }, {
          transform: "none"
        }], {
          duration: 260,
          easing: "ease-out"
        }))
      }), [xV, UV, CY(YV[0]), CY(YV[1])]), (0, pV.useEffect)((() => {
        const VV = JV.current,
          eV = new ResizeObserver((() => {
            wV.current = {
              ...wV.current,
              top: VV.offsetTop,
              height: VV.offsetHeight
            }
          }));
        return eV.observe(VV.parentElement), () => {
          var VV;
          eV.disconnect();
          for (const eV of ZV.current) eV.cancel();
          null === (VV = vV.current) || void 0 === VV || VV.cancel()
        }
      }), [JV]);
      const [rV, bV] = YV;
      return (0, TV.jsxs)("div", {
        ref: JV,
        className: kV()("GreenvilleNavSign", {
          Large: xV
        }),
        children: [(0, TV.jsxs)("div", {
          className: "GreenvilleNavBlade",
          children: [null !== UV && (0, TV.jsx)("span", {
            className: "GreenvilleNavHeader",
            children: UV
          }), (0, TV.jsx)(oY, {
            blade: rV,
            textRef: yV
          })]
        }), bV && (0, TV.jsx)("div", {
          ref: QV,
          className: "GreenvilleNavBlade",
          children: (0, TV.jsx)(oY, {
            blade: bV
          })
        })]
      })
    }

    function oY(VV) {
      let {
        blade: eV,
        textRef: xV
      } = VV;
      return (0, TV.jsxs)("span", {
        ref: xV,
        className: "GreenvilleNavBladeText",
        children: [null !== eV.number && (0, TV.jsx)("span", {
          className: "GreenvilleNavNumber",
          children: eV.number
        }), (0, TV.jsxs)("span", {
          className: "GreenvilleNavStreet",
          children: [eV.street.shortName, " ", (0, TV.jsx)("span", {
            className: "GreenvilleNavSuffix",
            children: eV.street.suffix
          })]
        })]
      })
    }
    const cY = "4rem",
      hY = `translateY(${cY}) scale(1.4)`,
      lY = [{
        transform: hY,
        opacity: 0
      }, {
        transform: hY,
        opacity: 1,
        offset: .12
      }, {
        transform: hY,
        opacity: 1,
        offset: .7,
        easing: "ease-in-out"
      }, {
        transform: "none",
        opacity: 1
      }],
      LY = [{
        opacity: 0
      }, {
        opacity: 1
      }];

    function fY(VV) {
      var eV;
      let {
        controller: xV,
        nav: JV
      } = VV;
      (0, jV.j)(cx, null), (0, jV.j)(JY, null);
      const {
        t: YV
      } = (0, tV.A)(), UV = (0, aV.b)(), yV = (0, pV.useRef)(null), QV = (0, pV.useRef)(null), nV = (0, pV.useRef)(null), wV = (0, pV.useRef)(null), ZV = (0, pV.useRef)(null), vV = (0, pV.useRef)(null), rV = (0, We.h)("hiddenPlayerNames"), kV = xV.getPlace(), bV = JV.getAddress(), EV = kV && QJ(YV, kV, bV, rV), BV = EV ? EV.key : null;
      if ((0, pV.useLayoutEffect)((() => {
          var VV, eV, xV, JV;
          if (null === BV) return null === (xV = wV.current) || void 0 === xV || xV.cancel(), void(null === (JV = ZV.current) || void 0 === JV || JV.cancel());
          if (yV.current === BV) return;
          if (yV.current = BV, UV) return;
          const YV = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          null === (VV = wV.current) || void 0 === VV || VV.cancel(), wV.current = QV.current.animate(YV ? LY : lY, {
            duration: YV ? 400 : 2200
          }), null === (eV = ZV.current) || void 0 === eV || eV.cancel(), !YV && nV.current && (ZV.current = nV.current.animate(function(VV) {
            const eV = `0 calc(${cY} + ${(1.4-1)*VV}px)`;
            return [{
              translate: "0 0",
              easing: "ease-out"
            }, {
              translate: eV,
              offset: .12
            }, {
              translate: eV,
              offset: .7,
              easing: "ease-in-out"
            }, {
              translate: "0 0"
            }]
          }(QV.current.offsetHeight), {
            duration: 2200
          }))
        }), [BV]), (0, pV.useEffect)((() => () => {
          var VV, eV;
          null === (VV = wV.current) || void 0 === VV || VV.cancel(), null === (eV = ZV.current) || void 0 === eV || eV.cancel()
        }), []), !kV) return null;
      let qV = "outside" === bV.kind ? null : bV;
      return !EV || "plot" !== bV.kind && "tile" !== bV.kind ? EV && qV && (null === (eV = vV.current) || void 0 === eV ? void 0 : eV.key) === EV.key && (qV = vV.current.address) : vV.current = {
        key: EV.key,
        address: bV
      }, (0, TV.jsxs)("div", {
        className: "GreenvilleTopBar",
        children: [EV && (0, TV.jsx)(mY, {
          title: EV,
          tagRef: QV,
          job: "hudJob" === kV.kind ? kV : null,
          home: "hudHome" === kV.kind ? kV : null
        }), qV && (0, TV.jsx)(aY, {
          address: qV,
          large: !EV,
          rootRef: nV
        })]
      })
    }

    function mY(VV) {
      let {
        title: eV,
        tagRef: xV,
        job: JV,
        home: YV
      } = VV;
      return (0, TV.jsxs)("div", {
        ref: xV,
        className: "GreenvillePlaceTag",
        role: "status",
        children: [null !== eV.eyebrow && (0, TV.jsx)("span", {
          className: "GreenvillePlaceTagEyebrow",
          children: eV.eyebrow
        }), (0, TV.jsx)("strong", {
          className: "GreenvillePlaceTagName",
          children: eV.name
        }), JV && (0, TV.jsx)(KY, {
          job: JV
        }), YV && (0, TV.jsx)(uY, {
          home: YV
        })]
      })
    }

    function KY(VV) {
      let {
        job: eV
      } = VV;
      const {
        t: xV
      } = (0, tV.A)(), {
        level: JV,
        expInto: YV,
        expNeeded: UV
      } = eV, yV = 0 === UV;
      return (0, TV.jsxs)("div", {
        className: "GreenvillePlaceTagRow",
        children: [(0, TV.jsx)("span", {
          className: "GreenvillePlaceTagJob",
          "aria-hidden": "true",
          children: (0, TV.jsx)(BV.e, {
            itemName: yJ[eV.job],
            amount: 0
          })
        }), (0, TV.jsx)("span", {
          className: "GreenvillePlaceTagLevel",
          children: xV("greenvilleGame:levelShort", {
            level: JV
          })
        }), (0, TV.jsx)("div", {
          className: "GreenvillePlaceTagBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": yV ? 100 : Math.round(YV / UV * 100),
          children: (0, TV.jsx)("div", {
            className: "GreenvillePlaceTagBarFill",
            style: {
              transform: `scaleX(${yV?1:Math.min(1,YV/UV)})`
            }
          })
        }), !yV && (0, TV.jsxs)("span", {
          className: "GreenvillePlaceTagExp",
          children: [(0, iV.d)(YV), "/", (0, iV.d)(UV)]
        }), yV && (0, TV.jsx)("span", {
          className: "GreenvillePlaceTagMax",
          children: xV("greenvilleGame:levelMax")
        }), null !== eV.status && (0, TV.jsx)(HY, {
          status: eV.status
        })]
      })
    }

    function HY(VV) {
      let {
        status: eV
      } = VV;
      const {
        t: xV
      } = (0, tV.A)();
      switch (eV.kind) {
        case "hudTier":
          return (0, TV.jsxs)("span", {
            className: kV()("GreenvillePlaceChip", {
              Locked: eV.locked
            }),
            children: [eV.locked && (0, TV.jsx)(dV.b, {
              name: "lock"
            }), xV(`greenvilleGame:${eV.tierKey}`)]
          });
        case "hudBay":
          return (0, TV.jsxs)("span", {
            className: "GreenvillePlaceChip",
            children: [xV("greenvilleGame:demolitionBayObject", {
              material: xV(`greenvilleGame:${eV.materialKey}`),
              object: xV(`greenvilleGame:${eV.objectKey}`)
            }), (0, TV.jsx)("span", {
              className: "GreenvillePlaceChipBar",
              children: (0, TV.jsx)("span", {
                className: "GreenvillePlaceChipBarFill",
                style: {
                  transform: `scaleX(${eV.percent/100})`
                }
              })
            })]
          });
        case "hudBayEmpty":
          return (0, TV.jsx)("span", {
            className: "GreenvillePlaceChip",
            children: xV("greenvilleGame:demolitionYardIncoming")
          });
        case "hudFarmTier":
          return (0, TV.jsx)("span", {
            className: "GreenvillePlaceChip Golden",
            children: xV("greenvilleGame:farmGoldenChance", {
              percent: eV.goldenPercent
            })
          })
      }
    }

    function uY(VV) {
      let {
        home: eV
      } = VV;
      const {
        t: xV
      } = (0, tV.A)();
      return eV.pvp || eV.parkour || !eV.visitorsAllowed ? (0, TV.jsxs)("div", {
        className: "GreenvillePlaceTagRow GreenvillePlaceTagChips",
        children: [eV.pvp && (0, TV.jsx)("span", {
          className: "GreenvillePlaceChip Danger",
          children: xV("greenvilleGame:houseChipPvp")
        }), eV.parkour && (0, TV.jsx)("span", {
          className: "GreenvillePlaceChip",
          children: xV("greenvilleGame:houseChipParkour")
        }), !eV.visitorsAllowed && (0, TV.jsxs)("span", {
          className: "GreenvillePlaceChip Locked",
          children: [(0, TV.jsx)(dV.b, {
            name: "lock"
          }), xV("greenvilleGame:houseChipVisitorsOff")]
        })]
      }) : null
    }
    const sY = function(VV, eV, xV, YV) {
      let UV, {
        localPlayerId: yV
      } = YV;
      const rV = new vV((VV => {
          QV.h.QZ(ZV, VV)
        })),
        kV = new bJ((VV => {
          QV.h.QZ(kJ, VV)
        })),
        bV = {
          onGain: () => {
            UV.playSound(yV, "rpgHandleCoins1", .5, .9 + .3 * Math.random())
          },
          onCoinLanded: (VV, eV) => {
            UV.playSound(yV, "pickUp", .3, 1 + .5 * VV / Math.max(1, eV - 1))
          }
        },
        EV = [],
        BV = {
          open: VV => {
            for (const eV of EV) eV !== VV && eV.onMenuClosed();
            (0, wV.r)()
          },
          close: wV.i,
          dismiss: wV.m
        },
        jV = new nV.c,
        qV = new de((VV => {
          QV.h.QZ(Se, VV)
        }), BV, (VV => {
          UV.sendCommand(null === VV ? JV : `${JV} ${VV}`)
        }), jV),
        tV = new IV((VV => {
          QV.h.QZ(sV, VV)
        }), BV, (VV => {
          UV.sendCommand(`demolition pick ${VV}`)
        }), jV),
        FV = new je((VV => {
          QV.h.QZ(Ee, VV)
        }), BV, (VV => {
          UV.sendCommand(`garage pick ${VV}`)
        }), jV),
        TV = new TJ((VV => {
          QV.h.QZ(tJ, VV)
        })),
        PV = new lx((VV => {
          QV.h.QZ(cx, VV)
        }), (VV => {
          QV.h.QZ(hx, VV)
        })),
        AV = new wY((VV => {
          QV.h.QZ(JY, VV)
        }), (VV => {
          QV.h.QZ(YY, VV)
        }), (VV => {
          QV.h.QZ(UY, VV)
        }));
      let NV = null;
      const XV = new ze((VV => {
          QV.h.QZ(Xe, VV)
        }), (VV => {
          QV.h.QZ(Me, VV)
        }), BV, (VV => {
          UV.sendCommand(VV)
        }), jV),
        MV = new Bx((VV => {
          QV.h.QZ(kx, VV)
        }), (VV => {
          QV.h.QZ(bx, VV)
        }), BV, (VV => {
          UV.sendCommand(VV)
        }), jV);
      EV.push(qV, tV, FV, XV, MV);
      let zV = null;
      return {
        onCreate: VV => {
          UV = VV, AV.start(VV), NV = new aJ(TV), zV = (0, wV.z)((0, pV.createElement)(pV.Fragment, null, (0, pV.createElement)(GV, {
            controller: rV
          }), (0, pV.createElement)(jJ, {
            controller: kV
          }), (0, pV.createElement)(gJ, {
            market: TV,
            markers: NV
          }), (0, pV.createElement)(NJ, {
            controller: TV
          }), (0, pV.createElement)(fY, {
            controller: PV,
            nav: AV
          }), (0, pV.createElement)(GY, {
            controller: PV
          }), (0, pV.createElement)(nJ, {
            controller: PV
          }, (0, pV.createElement)(LV, {
            sounds: bV
          }), (0, pV.createElement)(XY, {
            controller: AV
          }), (0, pV.createElement)(ox, {
            controller: MV
          }), (0, pV.createElement)(MJ, {
            controller: TV
          }), (0, pV.createElement)(se, {
            controller: XV
          })), (0, pV.createElement)(RY, {
            controller: PV
          })), {
            content: (0, pV.createElement)(pV.Fragment, null, (0, pV.createElement)(xx, {
              controller: qV
            }), (0, pV.createElement)(be, {
              controller: tV
            }), (0, pV.createElement)(Fe, {
              controller: FV
            }), (0, pV.createElement)(ue, {
              controller: XV
            }), (0, pV.createElement)(Cx, {
              controller: MV
            })),
            onClose: () => {
              for (const VV of EV) VV.onMenuClosed()
            }
          })
        },
        onClose: () => {
          zV(), AV.dispose(), qV.dropPresses(), tV.dropPresses(), FV.dropPresses(), NV.waypoints.dispose(), XV.dropPresses(), MV.dropPresses(), jV.dispose()
        },
        onAfterRender: (VV, eV) => {
          const xV = UV.getPositionView(yV);
          NV.frame(eV, xV), AV.frame(eV, xV, UV.isLocalPlayerInVehicle())
        },
        onReceivedMessageFromServer: (VV, eV) => {
          "greenvilleBackpack" === VV ? rV.RZ(eV) : "greenvilleOreBuyer" === VV ? qV.RZ(eV) : "greenvilleLumberMill" === VV ? XV.RZ(eV) : "greenvilleDemolition" === VV ? tV.RZ(eV) : "greenvilleGarage" === VV ? FV.RZ(eV) : "greenvilleFarmBoard" === VV ? MV.RZ(eV) : "greenvilleMarket" === VV ? TV.RZ(eV) : "greenvilleHud" === VV ? PV.RZ(eV) : "greenvilleLevelUp" === VV ? kV.RZ(eV) : "greenvillePlots" === VV ? AV.RZ(eV) : "greenvilleMapMarkers" === VV && AV.receiveMarkers(eV)
        }
      }
    }
  },
  40692: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => pV,
      e: () => yV
    });
    var JV = xV(9820);
    const YV = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      UV = [150, 150, 150],
      yV = -2147483648;
    class pV {
      constructor(VV) {
        this.averages = VV, this.byId = new Map
      }
      get(VV) {
        var eV, xV, yV, pV, QV;
        const nV = this.byId.get(VV);
        if (void 0 !== nV) return nV;
        const wV = null !== (eV = null === (xV = JV.k[VV]) || void 0 === xV ? void 0 : xV.name) && void 0 !== eV ? eV : "",
          ZV = wV.split("|")[0],
          vV = null !== (yV = this.averages[wV]) && void 0 !== yV ? yV : this.averages[ZV],
          rV = null !== (pV = null !== (QV = null === vV || void 0 === vV ? void 0 : vV[0]) && void 0 !== QV ? QV : YV[ZV]) && void 0 !== pV ? pV : 0 === (null === vV || void 0 === vV ? void 0 : vV.length) ? null : UV;
        return this.byId.set(VV, rV), rV
      }
      getDrawnIds() {
        const VV = new Uint8Array(65536);
        for (let eV = 1; eV < 65536; eV++) void 0 !== JV.k[eV] && null !== this.get(eV) && (VV[eV] = 1);
        return VV
      }
      drawPixel(VV, eV, xV, JV, YV, UV) {
        const pV = function(VV, eV, xV) {
            const JV = VV - eV + (VV - xV);
            return Math.max(.65, Math.min(1.2, .97 + .055 * JV))
          }(JV, YV === yV ? JV : YV, UV === yV ? JV : UV),
          QV = this.get(xV);
        VV[eV] = QV[0] * pV, VV[eV + 1] = QV[1] * pV, VV[eV + 2] = QV[2] * pV, VV[eV + 3] = 255
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);