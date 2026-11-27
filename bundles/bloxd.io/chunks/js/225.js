export const id = 225;
export const ids = [225];
export const modules = {
  35172: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR,
      h: () => ZR,
      l: () => uR
    });
    var yR = GR(66);
    const tR = new class {
      constructor() {
        this.inFlight = new Map, this.landings = new Map, this.listeners = new Set
      }
      getInFlight(RR) {
        var JR;
        return null !== (JR = this.inFlight.get(RR)) && void 0 !== JR ? JR : 0
      }
      setInFlight(RR, JR) {
        this.getInFlight(RR) !== JR && (this.inFlight.set(RR, JR), this.notify())
      }
      subscribe(RR) {
        return this.listeners.add(RR), () => {
          this.listeners.delete(RR)
        }
      }
      getLanding(RR) {
        var JR, GR;
        return null !== (JR = null === (GR = this.landings.get(RR)) || void 0 === GR ? void 0 : GR.at(-1)) && void 0 !== JR ? JR : null
      }
      hasLanding(RR, JR) {
        var GR, yR;
        return null !== (GR = null === (yR = this.landings.get(RR)) || void 0 === yR ? void 0 : yR.includes(JR)) && void 0 !== GR && GR
      }
      addLanding(RR, JR) {
        var GR;
        const yR = null !== (GR = this.landings.get(RR)) && void 0 !== GR ? GR : [];
        return this.landings.set(RR, [...yR, JR]), this.notify(), () => {
          this.landings.set(RR, this.landings.get(RR).filter((RR => RR !== JR))), this.notify()
        }
      }
      notify() {
        for (const RR of this.listeners) RR()
      }
    };

    function uR(RR, JR) {
      const [GR, uR] = (0, yR.useState)((() => tR.getInFlight(RR)));
      return (0, yR.useLayoutEffect)((() => {
        const JR = () => {
          uR(tR.getInFlight(RR))
        };
        return JR(), tR.subscribe(JR)
      }), [RR]), Math.max(0, JR - GR)
    }

    function ZR(RR, JR) {
      let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      (0, yR.useLayoutEffect)((() => {
        if (GR) return tR.addLanding(RR, JR.current)
      }), [RR, JR, GR])
    }
  },
  40752: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR
    });
    var yR = GR(40756);
    async function tR() {
      const {
        averageColors: RR
      } = await GR.e(234).then((() => GR(35257)));
      return new yR.b(RR)
    }
  },
  40731: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => iR
    });
    var yR = GR(37847),
      tR = GR(1270),
      uR = GR(1343),
      ZR = GR(39672),
      qR = GR(39731);
    class iR {
      constructor(RR, JR) {
        var GR;
        this.classes = RR, this.distanceKey = JR, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.He = !1, this.iW = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.iW), null === (GR = window.visualViewport) || void 0 === GR || GR.addEventListener("resize", this.iW)
      }
      bindMarker(RR) {
        const JR = this.refs.get(RR);
        if (JR) return JR;
        const GR = JR => {
          var yR;
          null === (yR = this.markers.get(RR)) || void 0 === yR || yR.stopObserving(), this.markers.delete(RR), JR && !this.He ? (this.markers.set(RR, this.mount(JR)), this.refs.set(RR, GR)) : this.refs.delete(RR)
        };
        return this.refs.set(RR, GR), GR
      }
      hasMarkers() {
        return this.markers.size > 0
      }
      setRender(RR) {
        this.render = RR
      }
      update(RR, JR, GR, yR, tR) {
        const uR = this.markers.get(RR);
        uR && (uR.target ??= [0, 0, 0], uR.target[0] = JR, uR.target[1] = GR, uR.target[2] = yR, this.place(uR), this.QJ(uR, tR && Math.hypot(JR - tR[0], GR - tR[1], yR - tR[2])))
      }
      dispose() {
        var RR;
        this.He = !0, window.removeEventListener("resize", this.iW), null === (RR = window.visualViewport) || void 0 === RR || RR.removeEventListener("resize", this.iW);
        for (const JR of this.markers.values()) JR.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(RR) {
        const {
          render: JR,
          viewport: GR
        } = this;
        if (!JR || !RR.target) return;
        const yR = (50 - JR.screenBandPct.y) / 100 * GR.height,
          tR = {
            x: RR.halfSize.width + 8,
            top: RR.halfSize.height + 8,
            bottom: RR.halfSize.height + RR.labelsBelow + yR
          },
          uR = JR.projectWorldPosToViewport(RR.target),
          iR = null !== uR && void 0 !== uR ? uR : JR.projectWorldPosToScreenPos(RR.target),
          fR = (0, qR.d)({
            x: iR.x,
            y: iR.y,
            text: uR
          }, tR, GR);
        (0, ZR.d)(RR.root, Math.round(100 * fR.x) / 100, Math.round(100 * fR.y) / 100)
      }
      QJ(RR, JR) {
        if (null === JR) return void(null !== RR.metres && (RR.metres = null, RR.distance.textContent = ""));
        const GR = Date.now();
        (null === RR.metres || (0, yR.e)(JR, RR.metres, RR.metresShownAt)) && (RR.metres = Math.round(JR), RR.metresShownAt = GR, RR.distance.textContent = (0, tR.w)(uR.g.get().getCurrentLanguageCode(), this.distanceKey, {
          distance: String(RR.metres)
        }))
      }
      mount(RR) {
        const JR = {
            root: RR,
            distance: RR.querySelector(`.${this.classes.distance}`),
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
          GR = RR.querySelector(`.${this.classes.labels}`),
          yR = new ResizeObserver((() => {
            JR.halfSize = {
              width: Math.max(RR.offsetWidth, GR.offsetWidth) / 2,
              height: RR.offsetHeight / 2
            }, JR.labelsBelow = GR.offsetTop + GR.offsetHeight - RR.offsetHeight, this.place(JR)
          }));
        return yR.observe(RR, {
          box: "border-box"
        }), yR.observe(GR, {
          box: "border-box"
        }), JR.stopObserving = () => {
          yR.disconnect()
        }, JR
      }
    }
  },
  40740: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => Tu
    });
    const yR = "ore sell",
      tR = "lumber ",
      uR = "farm ",
      ZR = ["market", "demolition", "mining", "woodcutting", "farming"],
      qR = "tutorial ";
    var iR = GR(66),
      fR = GR(32),
      VR = GR(39767),
      KR = GR(39878),
      wR = GR(3498),
      rR = GR(3494),
      eR = GR(40731);
    const aR = "greenvilleBackpackView";
    class LR {
      constructor(RR) {
        this.JK = RR, this.view = null, this.arrivalToken = 0, this.showToken = 0
      }
      getView() {
        return this.view
      }
      BK(RR) {
        if ("hide" === RR[0]) this.view = null;
        else if ("show" === RR[0]) {
          const JR = RR[3];
          this.view = {
            hK: RR[1],
            shardsPerItem: RR[2],
            total: JR.reduce(((RR, JR) => {
              let [, GR] = JR;
              return RR + GR
            }), 0),
            contents: JR,
            arrival: null,
            showToken: ++this.showToken
          }
        } else {
          if (null === this.view) return void console.warn(`[greenville] backpack ${RR[0]} with no backpack shown`);
          {
            var JR, GR;
            const yR = RR[1],
              tR = this.view.contents.find((RR => {
                let [JR] = RR;
                return JR === yR
              })),
              uR = this.view.contents.filter((RR => {
                let [JR] = RR;
                return JR !== yR
              })),
              ZR = null !== (JR = null === tR || void 0 === tR ? void 0 : tR[1]) && void 0 !== JR ? JR : 0,
              qR = null !== (GR = null === tR || void 0 === tR ? void 0 : tR[2]) && void 0 !== GR ? GR : 0;
            "shard" === RR[0] ? this.view = {
              ...this.view,
              contents: [...uR, [yR, ZR, qR + 1]]
            } : this.view = {
              ...this.view,
              total: this.view.total + 1,
              contents: [...uR, [yR, ZR + 1, 0]],
              arrival: {
                item: yR,
                token: ++this.arrivalToken,
                fromShards: qR > 0
              }
            }
          }
        }
        this.JK(this.view)
      }
    }
    var nR = GR(1163),
      UR = GR.n(nR),
      WR = GR(25),
      AR = GR(37796),
      CR = GR(2123),
      XR = GR(1581),
      MR = GR(2194),
      BR = GR(1270);
    const lR = "data:image/png;base64,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";
    var pR = GR(1378);
    const gR = (0, iR.forwardRef)((function(RR, JR) {
      let {
        contents: GR,
        hK: yR,
        full: tR,
        children: uR
      } = RR;
      const ZR = [...GR].sort(((RR, JR) => {
        let [GR] = RR, [yR] = JR;
        return GR.localeCompare(yR)
      }));
      let qR = 0;
      return (0, pR.jsxs)("div", {
        ref: JR,
        className: "GreenvilleBackpackBag",
        children: [uR, (0, pR.jsx)("img", {
          className: UR()("GreenvilleBackpackArt", {
            Full: tR
          }),
          src: lR,
          alt: "",
          draggable: !1
        }), (0, pR.jsx)("div", {
          className: "GreenvilleBackpackWindow",
          children: ZR.map((RR => {
            let [JR, GR] = RR;
            const tR = Math.min(1 - qR, GR / yR),
              uR = (0, pR.jsx)(vR, {
                item: JR,
                below: qR,
                share: tR
              }, JR);
            return qR += tR, uR
          }))
        })]
      })
    }));

    function bR() {
      const RR = new Image;
      RR.src = lR, RR.decode().catch((RR => {
        console.error("[greenville] backpack art failed to load", RR)
      }))
    }
    const vR = (0, iR.memo)((function(RR) {
        let {
          item: JR,
          below: GR,
          share: yR
        } = RR;
        return (0, pR.jsx)("div", {
          className: "GreenvilleBackpackOre",
          style: {
            bottom: `calc(var(--rise) * ${GR})`,
            height: `calc(var(--rise) * ${yR} + var(--slant))`
          },
          children: Array.from({
            length: 18
          }, ((RR, GR) => (0, pR.jsx)("div", {
            className: "GreenvilleBackpackOreTile",
            children: (0, pR.jsx)(CR.b, {
              itemName: JR,
              amount: 0
            })
          }, GR)))
        })
      })),
      OR = [{
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
      xR = [{
        transform: "scale(1.3)"
      }, {
        transform: "scale(1)"
      }];
    let NR = 1;

    function DR(RR) {
      let {
        controller: JR
      } = RR;
      (0, XR.h)(aR, null), (0, iR.useEffect)(bR, []);
      const GR = JR.getView();
      return null === GR ? null : (0, pR.jsx)(AR.d, {
        placement: "bottomLeft",
        children: (0, pR.jsx)(HR, {
          view: GR
        })
      })
    }

    function HR(RR) {
      let {
        view: JR
      } = RR;
      const {
        t: GR
      } = (0, BR.A)(), {
        isTouchScreen: yR
      } = (0, WR.o)(["isTouchScreen"]), [tR, uR] = (0, iR.useState)([]), ZR = (0, iR.useRef)(null), qR = (0, iR.useRef)(null), fR = (0, iR.useRef)([]), VR = (0, iR.useRef)({
        arrival: JR.arrival,
        showToken: JR.showToken
      }), {
        arrival: KR,
        showToken: wR
      } = JR;
      (0, iR.useLayoutEffect)((() => {
        var RR;
        if (wR !== VR.current.showToken) uR([]);
        else if (null !== KR && KR.token !== (null === (RR = VR.current.arrival) || void 0 === RR ? void 0 : RR.token) && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          const RR = {
            id: NR++,
            item: KR.item,
            fromShards: KR.fromShards,
            driftEm: 1.4 * (Math.random() - .5),
            spinDeg: 70 * (Math.random() - .5)
          };
          uR((JR => JR.length < 6 ? [...JR, RR] : JR))
        }
        VR.current = {
          arrival: KR,
          showToken: wR
        }
      }), [KR, wR]), (0, iR.useEffect)((() => () => {
        for (const RR of fR.current) RR.cancel()
      }), []);
      const rR = (0, iR.useCallback)((() => {
          for (const RR of fR.current) RR.cancel();
          fR.current = [ZR.current.animate(OR, {
            duration: 300,
            easing: "ease-out"
          }), qR.current.animate(xR, {
            duration: 220,
            easing: "ease-out"
          })]
        }), []),
        eR = (0, iR.useCallback)((RR => {
          uR((JR => JR.filter((JR => JR.id !== RR)))), rR()
        }), [rR]),
        aR = JR.total - tR.length,
        LR = aR >= JR.hK,
        nR = JR.contents.map((RR => {
          let [GR, yR, uR] = RR;
          const ZR = tR.filter((RR => RR.item === GR)),
            qR = ZR.some((RR => RR.fromShards));
          return [GR, yR - ZR.length, qR ? JR.shardsPerItem : uR]
        })),
        AR = nR.filter((RR => {
          let [, JR, GR] = RR;
          return JR > 0 || GR > 0
        })).reverse().slice(0, 4),
        XR = (0, MR.n)("SpecialAction2");
      return (0, pR.jsxs)("div", {
        className: "GreenvilleBackpack",
        children: [(0, pR.jsxs)("div", {
          className: "GreenvilleBackpackCount SmallTextBold",
          children: [(0, pR.jsx)("span", {
            ref: qR,
            className: UR()("GreenvilleBackpackTotal", {
              Full: LR
            }),
            children: aR
          }), (0, pR.jsxs)("span", {
            className: "GreenvilleBackpackCapacity",
            children: ["/ ", JR.hK]
          })]
        }), (0, pR.jsxs)("div", {
          className: "GreenvilleBackpackRow",
          children: [(0, pR.jsx)(gR, {
            ref: ZR,
            contents: nR,
            hK: JR.hK,
            full: LR,
            children: tR.map((RR => (0, pR.jsx)(cR, {
              drop: RR,
              onLanded: eR
            }, RR.id)))
          }), (0, pR.jsxs)("div", {
            className: "GreenvilleBackpackInfo",
            children: [AR.length > 0 && (0, pR.jsx)("div", {
              className: "GreenvilleBackpackTallies",
              children: AR.map((RR => {
                let [GR, yR, tR] = RR;
                return (0, pR.jsxs)("div", {
                  className: "GreenvilleBackpackTally",
                  children: [(0, pR.jsx)("div", {
                    className: "GreenvilleBackpackTallyIcon",
                    children: (0, pR.jsx)(CR.b, {
                      itemName: GR,
                      amount: 0
                    })
                  }), yR > 0 && (0, pR.jsxs)("span", {
                    className: "SmallTextBold",
                    children: ["\xd7", yR]
                  }), tR > 0 && (0, pR.jsx)(oR, {
                    shards: tR,
                    shardsPerItem: JR.shardsPerItem
                  })]
                }, GR)
              }))
            }), LR && (0, pR.jsxs)("div", {
              className: "GreenvilleBackpackFullLine",
              role: "status",
              children: [(0, pR.jsx)("span", {
                className: "GreenvilleBackpackFullTitle SmallTextBold",
                children: GR("greenvilleGame:backpackFull")
              }), yR && (0, pR.jsx)("span", {
                className: "SmallTextLight",
                children: GR("greenvilleGame:backpackReturnTouch")
              }), !yR && null !== XR && (0, pR.jsx)("span", {
                className: "SmallTextLight",
                children: GR("greenvilleGame:backpackReturnDesktop", {
                  key: (0, MR.m)(XR)
                })
              })]
            })]
          })]
        })]
      })
    }

    function oR(RR) {
      let {
        shards: JR,
        shardsPerItem: GR
      } = RR;
      return (0, pR.jsx)("div", {
        className: "GreenvilleBackpackShards",
        children: Array.from({
          length: GR
        }, ((RR, GR) => (0, pR.jsx)("span", {
          className: UR()("GreenvilleBackpackShard", {
            Filled: GR < JR
          })
        }, GR)))
      })
    }

    function cR(RR) {
      let {
        drop: JR,
        onLanded: GR
      } = RR;
      const yR = (0, iR.useRef)(null);
      return (0, iR.useLayoutEffect)((() => {
        const {
          driftEm: RR,
          spinDeg: tR
        } = JR, uR = yR.current.animate([{
          transform: `translate(${RR}em, -3.2em) rotate(${tR}deg) scale(1.2)`,
          opacity: 0
        }, {
          transform: `translate(${.7*RR}em, -2.4em) rotate(${.7*tR}deg) scale(1.1)`,
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
        return uR.onfinish = () => {
          GR(JR.id)
        }, () => {
          uR.onfinish = null, uR.cancel()
        }
      }), [JR, GR]), (0, pR.jsx)("div", {
        ref: yR,
        className: "GreenvilleBackpackFalling",
        children: (0, pR.jsx)(CR.b, {
          itemName: JR.item,
          amount: 0
        })
      })
    }
    var PR = GR(83),
      IR = GR(35174),
      mR = GR(3465),
      zR = GR(3701),
      SR = GR(35172);
    const jR = "gold",
      dR = "Gold Coin";

    function ER() {
      var RR, JR;
      return null !== (RR = null === (JR = (0, mR.f)("currencyAmounts")) || void 0 === JR ? void 0 : JR[jR].amount) && void 0 !== RR ? RR : 0
    }
    const YR = [{
        transform: "scale(1.18)"
      }, {
        transform: "scale(1)"
      }],
      kR = [{
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
    let QR = 1;

    function FR(RR) {
      var JR;
      let {
        sounds: GR
      } = RR;
      const yR = null === (JR = (0, mR.f)("currencyAmounts")) || void 0 === JR ? void 0 : JR[jR];
      return !yR || yR.hidden ? null : (0, pR.jsx)(TR, {
        gold: yR.amount,
        sounds: GR
      })
    }

    function TR(RR) {
      let {
        gold: JR,
        sounds: GR
      } = RR;
      const yR = (0, zR.c)(),
        [tR, uR] = (0, iR.useState)([]),
        ZR = (0, iR.useRef)(null),
        qR = (0, iR.useRef)(null),
        fR = (0, iR.useRef)(null),
        VR = (0, iR.useRef)(null),
        KR = (0, iR.useRef)(JR);
      (0, iR.useLayoutEffect)((() => {
        const RR = JR - KR.current;
        if (KR.current = JR, !(RR <= 0) && (GR.onGain(), !yR && !window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
          const JR = function(RR) {
            const JR = Math.max(1, Math.min(8, Math.floor(RR))),
              GR = Math.floor(RR / JR),
              yR = [];
            for (let tR = 0; tR < JR; tR++) {
              const uR = -Math.PI / 2 + (1 === JR ? 0 : 2.4 * (tR / (JR - 1) - .5)) + .3 * (Math.random() - .5),
                ZR = 40 + 35 * Math.random();
              yR.push({
                id: QR++,
                burst: {
                  x: Math.cos(uR) * ZR,
                  y: Math.sin(uR) * ZR
                },
                gold: tR === JR - 1 ? RR - GR * (JR - 1) : GR,
                delayMs: 45 * tR,
                step: tR,
                steps: JR
              })
            }
            return yR
          }(RR);
          uR((RR => [...RR, ...JR.slice(0, Math.max(0, 24 - RR.length))]))
        }
      }), [JR]), (0, iR.useEffect)((() => () => {
        var RR;
        null === (RR = fR.current) || void 0 === RR || RR.cancel()
      }), []), (0, iR.useLayoutEffect)((() => () => {
        SR.e.setInFlight(jR, 0)
      }), []);
      const wR = (0, iR.useCallback)(((RR, JR) => {
          VR.current = JR, GR.onCoinLanded(RR.step, RR.steps), uR((JR => JR.filter((JR => {
            let {
              id: GR
            } = JR;
            return GR !== RR.id
          }))))
        }), [GR]),
        rR = tR.length,
        eR = (0, iR.useRef)(rR);
      (0, iR.useEffect)((() => {
        var RR, JR;
        rR < eR.current && (null === (RR = fR.current) || void 0 === RR || RR.cancel(), fR.current = (null !== (JR = VR.current) && void 0 !== JR ? JR : ZR.current).animate(0 === rR ? kR : YR, {
          duration: 0 === rR ? 380 : 160,
          easing: "ease-out"
        }));
        eR.current = rR
      }), [rR]);
      const aR = tR.reduce(((RR, JR) => RR + JR.gold), 0);
      return (0, iR.useLayoutEffect)((() => {
        SR.e.setInFlight(jR, aR)
      }), [aR]), (0, pR.jsxs)(pR.Fragment, {
        children: [(0, pR.jsx)("div", {
          className: "GreenvilleGoldPurse",
          children: (0, pR.jsxs)("div", {
            ref: ZR,
            className: "GreenvilleGoldPurseBody",
            children: [(0, pR.jsx)("span", {
              ref: qR,
              className: "GreenvilleGoldPurseIcon",
              children: (0, pR.jsx)(CR.b, {
                itemName: dR,
                amount: 0
              })
            }), (0, pR.jsx)("span", {
              className: "GreenvilleGoldPurseAmount SmallTextBold",
              children: (0, IR.i)(Math.max(0, JR - aR))
            })]
          })
        }), (0, PR.createPortal)(tR.map((RR => (0, pR.jsx)(sR, {
          coin: RR,
          target: qR,
          onLanded: wR
        }, RR.id))), document.body)]
      })
    }

    function sR(RR) {
      let {
        coin: JR,
        target: GR,
        onLanded: yR
      } = RR;
      const tR = (0, iR.useRef)(null),
        [uR] = (0, iR.useState)((() => SR.e.getLanding(jR))),
        [ZR, qR] = (0, iR.useState)(null !== uR);
      return (0, iR.useEffect)((() => {
        const RR = (null !== uR && void 0 !== uR ? uR : GR.current).getBoundingClientRect(),
          {
            burst: ZR
          } = JR,
          iR = window.innerWidth / 2,
          fR = window.innerHeight / 2,
          VR = RR.left + RR.width / 2,
          KR = RR.top + RR.height / 2,
          wR = tR.current.animate([{
            transform: `translate(${iR}px, ${fR}px) scale(0.3)`,
            opacity: 0,
            easing: "ease-out"
          }, {
            transform: `translate(${iR+.7*ZR.x}px, ${fR+.7*ZR.y}px) scale(1.25)`,
            opacity: 1,
            offset: .15,
            easing: "ease-out"
          }, {
            transform: `translate(${iR+ZR.x}px, ${fR+ZR.y}px) scale(1)`,
            offset: .35,
            easing: "ease-in-out"
          }, {
            transform: `translate(${iR+ZR.x}px, ${fR+ZR.y+6}px) scale(1)`,
            offset: .45,
            easing: "cubic-bezier(0.55, 0, 1, 0.45)"
          }, {
            transform: `translate(${VR}px, ${KR}px) scale(0.6)`,
            opacity: 1
          }], {
            duration: 950,
            delay: JR.delayMs,
            fill: "both"
          });
        let rR = wR;
        rR.onfinish = () => {
          yR(JR, uR)
        };
        const eR = SR.e.subscribe((() => {
          var RR;
          if (null === uR || rR !== wR || SR.e.hasLanding(jR, uR)) return;
          const ZR = GR.current.getBoundingClientRect();
          wR.commitStyles(), rR = tR.current.animate([{
            transform: `translate(${ZR.left+ZR.width/2}px, ${ZR.top+ZR.height/2}px) scale(0.6)`,
            opacity: 1
          }], {
            duration: Math.max(150, 950 + JR.delayMs - Number(null !== (RR = wR.currentTime) && void 0 !== RR ? RR : 0)),
            easing: "ease-in",
            fill: "both"
          }), rR.onfinish = () => {
            yR(JR, null)
          }, wR.onfinish = null, wR.cancel(), qR(!1)
        }));
        return () => {
          eR(), rR.onfinish = null, rR.cancel()
        }
      }), [JR, GR, uR, yR]), (0, pR.jsx)("div", {
        ref: tR,
        className: UR()("GreenvilleGoldCoin", {
          IntoMenu: ZR
        }),
        children: (0, pR.jsx)(CR.b, {
          itemName: dR,
          amount: 0
        })
      })
    }
    class hR {
      constructor(RR, JR, GR) {
        this.pacer = RR, this.send = JR, this.onAnswersTimedOut = GR, this.queued = [], this.unanswered = [], this.answerTimer = null, this.flushing = !1, this.flush = () => {
          if (!this.flushing) {
            this.flushing = !0;
            try {
              for (; this.queued.length > 0 && this.pacer.tryStart();) {
                const RR = this.queued.shift();
                this.unanswered.push(RR), this.answerTimer ??= setTimeout(this.onAnswerTimeout, 15e3), this.send(RR)
              }
            } finally {
              this.flushing = !1
            }
          }
        }, this.onAnswerTimeout = () => {
          this.answerTimer = null, this.unanswered = [], this.onAnswersTimedOut()
        }, RR.subscribe(this.flush)
      }
      getPending() {
        return [...this.unanswered, ...this.queued]
      }
      WK() {
        return 0 === this.unanswered.length && 0 === this.queued.length
      }
      getLastSent() {
        return this.unanswered.at(-1)
      }
      getLastPending() {
        var RR;
        return null !== (RR = this.queued.at(-1)) && void 0 !== RR ? RR : this.unanswered.at(-1)
      }
      push(RR) {
        this.queued.push(RR), this.flush()
      }
      dropWaiting() {
        const RR = this.queued.length > 0;
        return this.queued = [], RR
      }
      takeAnswer() {
        var RR;
        const JR = null !== (RR = this.unanswered.shift()) && void 0 !== RR ? RR : null;
        return this.stopAnswerTimer(), this.unanswered.length > 0 && (this.answerTimer = setTimeout(this.onAnswerTimeout, 15e3)), JR
      }
      clear() {
        this.queued = [], this.unanswered = [], this.stopAnswerTimer()
      }
      stopAnswerTimer() {
        null !== this.answerTimer && (clearTimeout(this.answerTimer), this.answerTimer = null)
      }
    }
    class RJ {
      constructor(RR, JR, GR, yR) {
        this.confirmed = RR, this.picks = void 0, this.picks = new hR(JR, GR, yR)
      }
      confirm(RR) {
        this.confirmed = RR
      }
      getLastPending() {
        return this.picks.getLastPending()
      }
      getLatest() {
        var RR;
        return null !== (RR = this.getLastPending()) && void 0 !== RR ? RR : this.confirmed
      }
      WK() {
        return this.picks.WK()
      }
      pushLatest(RR) {
        var JR;
        const GR = null !== (JR = this.picks.getLastSent()) && void 0 !== JR ? JR : this.confirmed;
        this.picks.dropWaiting() && RR === GR || this.picks.push(RR)
      }
      takeAnswer() {
        this.picks.takeAnswer()
      }
      clear() {
        this.picks.clear()
      }
    }
    class JJ {
      constructor(RR, JR, GR) {
        this.closed = RR, this.JK = JR, this.menu = GR, this.view = void 0, this.dismiss = () => {
          this.closePanel() && this.menu.dismiss()
        }, this.onMenuClosed = () => {
          this.closePanel()
        }, this.view = RR
      }
      getView() {
        return this.view
      }
      show(RR) {
        this.set(RR), this.menu.open(this)
      }
      close() {
        this.closePanel() && this.menu.close()
      }
      set(RR) {
        this.view = RR, this.JK(RR)
      }
      closePanel() {
        return !!this.view.open && (this.dropPresses(), this.set(this.closed), !0)
      }
    }
    const GJ = "greenvilleDepotView",
      yJ = {
        open: !1,
        explosives: [],
        picked: 0,
        selected: 0,
        level: 1,
        line: "demolitionDepotIntro"
      };
    class tJ extends JJ {
      constructor(RR, JR, GR, yR) {
        super(yJ, RR, JR), this.picks = void 0, this.select = RR => {
          this.set({
            ...this.getView(),
            selected: RR
          })
        }, this.Ur = RR => {
          const JR = this.getView();
          RR !== JR.picked && (this.picks.pushLatest(RR), this.set({
            ...JR,
            picked: RR,
            line: "demolitionGrubnikPicked"
          }))
        }, this.onAnswersTimedOut = () => {
          const RR = this.getView();
          RR.open && this.set({
            ...RR,
            picked: this.picks.getLatest()
          })
        }, this.picks = new RJ(0, yR, GR, this.onAnswersTimedOut)
      }
      BK(RR) {
        if ("openDepot" === RR[0]) {
          const JR = RR[4];
          JR && this.picks.takeAnswer();
          const GR = this.getView();
          if (JR && !GR.open) return;
          this.picks.confirm(RR[2]);
          const yR = this.picks.getLatest(),
            tR = !GR.open;
          this.show({
            open: !0,
            explosives: RR[1],
            picked: yR,
            selected: tR ? yR : GR.selected,
            level: RR[3],
            line: tR ? "demolitionDepotIntro" : GR.line
          })
        } else "closeDepot" !== RR[0] && "hide" !== RR[0] || this.close()
      }
      dropPresses() {
        this.picks.clear()
      }
    }
    var uJ = GR(1468),
      ZJ = GR(1590),
      qJ = GR(35162),
      iJ = GR(4555),
      fJ = GR(2105),
      VJ = GR(5338);

    function KJ(RR) {
      var JR;
      let {
        item: GR,
        className: yR
      } = RR;
      return (0, pR.jsx)(fJ.c, {
        className: yR,
        text: null !== (JR = (0, qJ.displayNameOf)((0, iJ.b)(GR))) && void 0 !== JR ? JR : GR
      })
    }

    function wJ(RR) {
      let {
        item: JR
      } = RR;
      return (0, pR.jsx)(CR.b, {
        itemName: JR,
        amount: 0
      })
    }

    function rJ(RR) {
      let {
        open: JR,
        onDismiss: GR,
        title: yR,
        className: tR,
        headerExtra: uR,
        tabs: ZR,
        status: qR,
        children: iR
      } = RR;
      const fR = `${tR}Title`;
      return (0, pR.jsx)(VJ.e, {
        show: JR,
        close: GR,
        togglePointerLock: !1,
        ignorePressesAsShown: !0,
        className: "GreenvilleBoardOverlay",
        children: (0, pR.jsxs)("section", {
          className: UR()("GreenvilleBoard", tR),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": fR,
          children: [(0, pR.jsxs)("header", {
            className: "GreenvilleBoardHeader",
            children: [(0, pR.jsx)("h2", {
              id: fR,
              className: "VisuallyHidden",
              children: yR
            }), uR, (0, pR.jsx)(ZJ.l, {
              onClick: GR
            })]
          }), ZR, (0, pR.jsx)("div", {
            className: "GreenvilleBoardBody",
            children: iR
          }), qR && (0, pR.jsxs)("footer", {
            className: "GreenvilleBoardStatus",
            children: [(0, pR.jsx)("span", {
              className: "GreenvilleBoardSpeaker",
              children: qR.speaker
            }), qR.line]
          })]
        })
      })
    }

    function eJ(RR) {
      let {
        tabs: JR,
        selected: GR,
        onSelect: yR
      } = RR;
      return (0, pR.jsx)("nav", {
        className: "GreenvilleBoardTabs",
        "data-pad-tabs": "1",
        children: JR.map((RR => {
          const JR = RR.id === GR;
          return (0, pR.jsxs)("button", {
            type: "button",
            className: UR()("GreenvilleBoardTab", {
              Selected: JR
            }),
            "aria-pressed": JR,
            "data-pad-tab": !0,
            "data-pad-selected": JR ? "true" : void 0,
            onClick: () => {
              yR(RR.id)
            },
            children: [RR.label, RR.badge]
          }, RR.id)
        }))
      })
    }

    function aJ(RR) {
      let {
        className: JR,
        roomy: GR = !1,
        children: yR
      } = RR;
      return (0, pR.jsx)("div", {
        className: UR()("GreenvilleBoardTiles", JR, {
          Roomy: GR
        }),
        style: GR ? {
          "--tile-columns": (tR = iR.Children.count(yR), tR <= 3 ? tR : Math.min(4, Math.ceil(tR / 2)))
        } : void 0,
        "data-pad-select-on-focus": !0,
        children: yR
      });
      var tR
    }

    function LJ(RR) {
      let {
        icon: JR,
        name: GR,
        selected: yR,
        locked: tR = !1,
        className: uR,
        onSelect: ZR,
        children: qR
      } = RR;
      return (0, pR.jsxs)("button", {
        type: "button",
        className: UR()("GreenvilleBoardTile", uR, {
          Selected: yR,
          Locked: tR
        }),
        "aria-pressed": yR,
        "data-pad-default-focus": yR || void 0,
        onClick: ZR,
        children: [(0, pR.jsx)("span", {
          className: "GreenvilleBoardTileIcon",
          children: JR
        }), (0, pR.jsx)("span", {
          className: "GreenvilleBoardTileName",
          children: GR
        }), qR]
      })
    }

    function nJ(RR) {
      let {
        icon: JR,
        name: GR,
        badges: yR,
        children: tR
      } = RR;
      return (0, pR.jsxs)("section", {
        className: "GreenvilleBoardDetail",
        children: [(0, pR.jsxs)("header", {
          className: "GreenvilleBoardDetailHeader",
          children: [(0, pR.jsx)("span", {
            className: "GreenvilleBoardDetailHero",
            children: (0, pR.jsx)("span", {
              className: "GreenvilleBoardDetailIcon",
              children: JR
            })
          }), (0, pR.jsxs)("div", {
            className: "GreenvilleBoardDetailHeading",
            children: [(0, pR.jsx)("h3", {
              children: GR
            }), yR && (0, pR.jsx)("span", {
              className: "GreenvilleBoardDetailBadges",
              children: yR
            })]
          })]
        }), tR]
      })
    }

    function UJ(RR) {
      let {
        level: JR
      } = RR;
      const {
        t: GR
      } = (0, BR.A)();
      return (0, pR.jsxs)("span", {
        className: "GreenvilleBoardBadge Muted",
        children: [(0, pR.jsx)(uJ.d, {
          name: "lock"
        }), GR("greenvilleGame:boardLevelBadge", {
          level: JR
        })]
      })
    }

    function WJ() {
      const {
        t: RR
      } = (0, BR.A)();
      return (0, pR.jsx)("span", {
        className: "GreenvilleBoardBadge",
        children: RR("greenvilleGame:demolitionDepotPicked")
      })
    }

    function AJ(RR) {
      let {
        line: JR,
        picked: GR,
        level: yR
      } = RR;
      const tR = JR[3];
      return (0, pR.jsxs)(pR.Fragment, {
        children: [GR && (0, pR.jsx)(WJ, {}), tR > yR && (0, pR.jsx)(UJ, {
          level: tR
        })]
      })
    }

    function CJ(RR) {
      let {
        view: JR,
        controller: GR
      } = RR;
      const {
        t: yR
      } = (0, BR.A)(), tR = JR.selected, uR = JR.explosives[tR], [ZR, qR, iR, fR, VR] = uR, KR = tR === JR.picked, wR = fR > JR.level;
      return (0, pR.jsxs)(nJ, {
        icon: (0, pR.jsx)(wJ, {
          item: ZR
        }),
        name: yR(`greenvilleGame:${qR}`),
        badges: wR && (0, pR.jsx)(UJ, {
          level: fR
        }),
        children: [(0, pR.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: yR(`greenvilleGame:${iR}`)
        }), (0, pR.jsx)("p", {
          className: "GreenvilleDepotStencil",
          children: yR("greenvilleGame:demolitionDepotMaxLive", {
            count: VR
          })
        }), (0, pR.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [KR && (0, pR.jsx)("span", {
            className: "GreenvilleDepotLoaded",
            children: yR("greenvilleGame:demolitionDepotPicked")
          }), !KR && (0, pR.jsx)(ZJ.g, {
            disabled: wR,
            onClick: () => {
              GR.Ur(tR)
            },
            children: yR("greenvilleGame:demolitionDepotLoad")
          }), wR && (0, pR.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: yR("greenvilleGame:demolitionDepotLocked", {
              level: fR
            })
          })]
        })]
      })
    }

    function XJ(RR) {
      let {
        controller: JR
      } = RR;
      const GR = (0, XR.h)(GJ, JR.getView()),
        {
          t: yR
        } = (0, BR.A)();
      return 0 === GR.explosives.length ? null : (0, pR.jsxs)(rJ, {
        open: GR.open,
        onDismiss: JR.dismiss,
        title: yR("greenvilleGame:demolitionDepotTitle"),
        className: "GreenvilleDepotBoard",
        headerExtra: (0, pR.jsx)("span", {
          className: "GreenvilleBoardLevel",
          children: yR("greenvilleGame:demolitionDepotLevel", {
            level: GR.level
          })
        }),
        status: {
          speaker: yR("greenvilleGame:demolitionGrubnikName"),
          line: yR(`greenvilleGame:${GR.line}`)
        },
        children: [(0, pR.jsx)(aJ, {
          roomy: !0,
          children: GR.explosives.map(((RR, tR) => {
            const [uR, ZR, qR, iR, fR] = RR;
            return (0, pR.jsxs)(LJ, {
              icon: (0, pR.jsx)(wJ, {
                item: uR
              }),
              name: yR(`greenvilleGame:${ZR}`),
              selected: tR === GR.selected,
              locked: iR > GR.level,
              className: UR()("GreenvilleDepotCrate", {
                Picked: tR === GR.picked
              }),
              onSelect: () => {
                JR.select(tR)
              },
              children: [(0, pR.jsx)(AJ, {
                line: RR,
                picked: tR === GR.picked,
                level: GR.level
              }), (0, pR.jsx)("span", {
                className: "GreenvilleDepotStencil",
                children: yR("greenvilleGame:demolitionDepotMaxLive", {
                  count: fR
                })
              }), (0, pR.jsx)("span", {
                className: "GreenvilleDepotBlurb",
                children: yR(`greenvilleGame:${qR}`)
              })]
            }, uR)
          }))
        }), (0, pR.jsx)(CJ, {
          view: GR,
          controller: JR
        })]
      })
    }
    const MJ = "greenvilleGarageView",
      BJ = {
        open: !1,
        cars: [],
        out: null,
        awaiting: !1,
        selected: null,
        line: "dealershipGarageIntro"
      };
    class lJ extends JJ {
      constructor(RR, JR, GR, yR) {
        super(BJ, RR, JR), this.picks = void 0, this.select = RR => {
          this.set({
            ...this.getView(),
            selected: RR
          })
        }, this.Ur = RR => {
          RR !== this.picks.getLastPending() && (this.picks.pushLatest(RR), this.set({
            ...this.getView(),
            out: RR,
            awaiting: !this.picks.WK(),
            line: "dealershipGarageTip"
          }))
        }, this.onAnswersTimedOut = () => {
          const RR = this.getView();
          RR.open && this.set({
            ...RR,
            out: this.picks.getLatest(),
            awaiting: !this.picks.WK()
          })
        }, this.picks = new RJ(null, yR, GR, this.onAnswersTimedOut)
      }
      BK(RR) {
        if ("open" === RR[0]) {
          var JR;
          const GR = RR[3];
          GR && this.picks.takeAnswer();
          const yR = this.getView();
          if (GR && !yR.open) return;
          this.picks.confirm(RR[2]);
          const tR = RR[1],
            uR = this.picks.getLatest(),
            ZR = !yR.open;
          this.show({
            open: !0,
            cars: tR,
            out: uR,
            awaiting: !this.picks.WK(),
            selected: ZR ? null !== (JR = null !== uR && void 0 !== uR ? uR : tR[0]) && void 0 !== JR ? JR : null : yR.selected,
            line: ZR ? "dealershipGarageIntro" : yR.line
          })
        } else this.close()
      }
      dropPresses() {
        this.picks.clear()
      }
    }

    function pJ() {
      const {
        t: RR
      } = (0, BR.A)();
      return (0, pR.jsx)("span", {
        className: "GreenvilleBoardBadge",
        children: RR("greenvilleGame:dealershipGarageOut")
      })
    }

    function gJ(RR) {
      let {
        car: JR,
        out: GR,
        awaiting: yR,
        controller: tR
      } = RR;
      const {
        t: uR
      } = (0, BR.A)();
      return (0, pR.jsx)(nJ, {
        icon: (0, pR.jsx)(wJ, {
          item: JR
        }),
        name: (0, pR.jsx)(KJ, {
          item: JR
        }),
        children: (0, pR.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [GR && (0, pR.jsx)("span", {
            className: "GreenvilleGarageOutStamp",
            children: uR("greenvilleGame:dealershipGarageOut")
          }), (0, pR.jsx)(ZJ.g, {
            disabled: GR && yR,
            onClick: () => {
              tR.Ur(JR)
            },
            children: uR(GR ? "greenvilleGame:dealershipGarageBringBack" : "greenvilleGame:dealershipGarageTakeOut")
          })]
        })
      })
    }

    function bJ(RR) {
      let {
        controller: JR
      } = RR;
      const GR = (0, XR.h)(MJ, JR.getView()),
        {
          t: yR
        } = (0, BR.A)(),
        tR = 0 === GR.cars.length;
      return (0, pR.jsxs)(rJ, {
        open: GR.open,
        onDismiss: JR.dismiss,
        title: yR("greenvilleGame:dealershipGarageTitle"),
        className: "GreenvilleGarageBoard",
        status: {
          speaker: yR("greenvilleGame:dealershipDelName"),
          line: yR(tR ? "greenvilleGame:dealershipGarageEmpty" : `greenvilleGame:${GR.line}`)
        },
        children: [!tR && (0, pR.jsx)(aJ, {
          roomy: !0,
          children: GR.cars.map((RR => {
            const yR = RR === GR.out;
            return (0, pR.jsx)(LJ, {
              icon: (0, pR.jsx)(wJ, {
                item: RR
              }),
              name: (0, pR.jsx)(KJ, {
                item: RR
              }),
              selected: RR === GR.selected,
              className: UR()("GreenvilleGarageBay", {
                Out: yR
              }),
              onSelect: () => {
                JR.select(RR)
              },
              children: yR && (0, pR.jsx)(pJ, {})
            }, RR)
          }))
        }), null !== GR.selected && (0, pR.jsx)(gJ, {
          car: GR.selected,
          out: GR.selected === GR.out,
          awaiting: GR.awaiting,
          controller: JR
        })]
      })
    }
    const vJ = {
        kind: "intro"
      },
      OJ = {
        open: !1,
        orders: [],
        tracked: null,
        sellLines: [],
        level: 1,
        delivering: [],
        tab: "orders",
        selectedSlot: 0,
        selectedWood: 0,
        line: vJ
      };

    function xJ(RR) {
      let [JR, GR, yR, tR, uR, ZR] = RR;
      return {
        slot: JR,
        titleKey: GR,
        items: yR,
        exp: tR,
        gold: uR,
        wV: ZR,
        ready: yR.every((RR => {
          let [, JR, GR] = RR;
          return GR >= JR
        }))
      }
    }

    function NJ(RR, JR) {
      return "sell" === JR.action ? function(RR, JR) {
        const GR = RR.sellLines.map((RR => {
          const [GR, , yR] = RR;
          return null !== JR && JR !== GR ? RR : [GR, 0, yR]
        }));
        return {
          ...RR,
          sellLines: GR
        }
      }(RR, JR.item) : "accept" === JR.action ? function(RR, JR) {
        var GR;
        const yR = RR.orders[JR];
        return {
          ...RR,
          tracked: null !== (GR = RR.tracked) && void 0 !== GR ? GR : JR,
          orders: RR.orders.map((RR => RR === yR ? {
            ...RR,
            wV: !0
          } : RR)),
          sellLines: RR.sellLines.map((RR => {
            const [JR, GR, tR] = RR, uR = yR.items.find((RR => {
              let [GR] = RR;
              return GR === JR
            }));
            return void 0 === uR ? RR : [JR, Math.max(0, GR - uR[1]), tR]
          }))
        }
      }(RR, JR.slot) : "track" === JR.action ? {
        ...RR,
        tracked: JR.slot
      } : {
        ...RR,
        delivering: [...RR.delivering, JR.slot]
      }
    }
    const DJ = "greenvilleLumberMillView",
      HJ = "greenvilleLumberTrackerView";
    class oJ extends JJ {
      constructor(RR, JR, GR, yR, uR) {
        super(OJ, RR, GR), this.publishTracker = JR, this.board = null, this.commands = void 0, this.tracker = null, this.tab = "orders", this.selectedSlot = 0, this.selectedWood = 0, this.line = vJ, this.selectTab = RR => {
          this.tab = RR, this.set({
            ...this.getView(),
            tab: RR
          })
        }, this.selectOrder = RR => {
          this.selectedSlot = RR, this.set({
            ...this.getView(),
            selectedSlot: RR
          })
        }, this.selectWood = RR => {
          this.selectedWood = RR, this.set({
            ...this.getView(),
            selectedWood: RR
          })
        }, this.accept = RR => {
          this.findOrder(RR).wV || this.queue({
            action: "accept",
            slot: RR
          })
        }, this.track = RR => {
          this.getView().tracked !== RR && this.findOrder(RR).wV && this.queue({
            action: "track",
            slot: RR
          })
        }, this.deliver = RR => {
          const JR = this.findOrder(RR);
          JR.wV && JR.ready && !this.getView().delivering.includes(RR) && this.queue({
            action: "deliver",
            slot: RR
          })
        }, this.sell = RR => {
          this.getView().sellLines.some((JR => {
            let [GR, yR] = JR;
            return yR > 0 && (null === RR || RR === GR)
          })) && this.queue({
            action: "sell",
            item: RR
          })
        }, this.onAnswersTimedOut = () => {
          this.getView().open && this.set(this.getBoardView())
        }, this.commands = new hR(uR, (RR => {
          yR(function(RR) {
            return "sell" === RR.action ? null === RR.item ? `${tR}sell` : `${tR}sell ${RR.item}` : `${tR}${RR.action} ${RR.slot}`
          }(RR))
        }), this.onAnswersTimedOut)
      }
      getTracker() {
        return this.tracker
      }
      BK(RR) {
        if ("open" === RR[0]) {
          const GR = RR[5],
            yR = GR ? this.commands.takeAnswer() : null,
            tR = !this.getView().open;
          if (GR && tR) return;
          if (tR) this.onReopened(RR);
          else if (null !== yR) {
            var JR;
            this.line = null !== (JR = function(RR, JR, GR) {
              if ("deliver" === RR.action) {
                const [, yR] = JR[1][RR.slot];
                return GR[1][RR.slot][5] ? null : {
                  kind: "delivered",
                  titleKey: yR
                }
              }
              if ("sell" !== RR.action) return null;
              let yR = 0;
              return JR[3].forEach(((JR, tR) => {
                let [uR, ZR] = JR;
                null !== RR.item && RR.item !== uR || (yR += Math.max(0, ZR - GR[3][tR][1]))
              })), yR > 0 ? {
                kind: "bought",
                count: yR
              } : null
            }(yR, this.board, RR)) && void 0 !== JR ? JR : this.line
          }
          this.board = RR, this.show(this.getBoardView())
        } else "close" === RR[0] ? this.close() : (this.tracker = null === RR[1] ? null : xJ(RR[1]), this.publishTracker(this.tracker))
      }
      dropPresses() {
        this.commands.clear(), this.board = null
      }
      findOrder(RR) {
        return this.getView().orders.find((JR => JR.slot === RR))
      }
      onReopened(RR) {
        let [, JR, , GR] = RR;
        const yR = JR.map(xJ).find((RR => RR.wV && RR.ready)),
          tR = GR.findIndex((RR => {
            let [, JR] = RR;
            return JR > 0
          }));
        void 0 === yR && -1 !== tR || (this.tab = "orders"), void 0 !== yR && (this.selectedSlot = yR.slot), -1 === tR || this.selectedWood < GR.length && GR[this.selectedWood][1] > 0 || (this.selectedWood = tR), this.line = vJ
      }
      getBoardView() {
        const [, RR, JR, GR, yR] = this.board;
        let tR = {
          open: !0,
          orders: RR.map(xJ),
          tracked: JR,
          sellLines: GR,
          level: yR,
          delivering: [],
          tab: this.tab,
          selectedSlot: this.selectedSlot,
          selectedWood: this.selectedWood,
          line: this.line
        };
        for (const uR of this.commands.getPending()) tR = NJ(tR, uR);
        return tR
      }
      queue(RR) {
        this.commands.push(RR), this.set(this.getBoardView())
      }
    }
    var cJ = GR(1501),
      PJ = GR(2173);

    function IJ(RR) {
      let {
        amount: JR,
        item: GR = dR,
        Qq: yR,
        inTile: tR = !1,
        iconRef: uR
      } = RR;
      return (0, pR.jsx)(cJ.h, {
        delayShow: 200,
        hoverOnly: tR,
        placement: "top",
        tooltipClassName: "GreenvilleChipTooltipBox",
        tooltipInner: (0, pR.jsx)(mJ, {
          item: GR,
          amount: JR,
          Qq: yR
        }),
        children: (0, pR.jsxs)("span", {
          className: UR()("GreenvilleBoardChip", {
            Short: void 0 !== yR && yR < JR
          }),
          children: [(0, pR.jsx)("span", {
            ref: uR,
            className: "GreenvilleBoardChipIcon",
            children: (0, pR.jsx)(wJ, {
              item: GR
            })
          }), JR.toLocaleString()]
        })
      })
    }

    function mJ(RR) {
      let {
        item: JR,
        amount: GR,
        Qq: yR
      } = RR;
      const {
        t: tR
      } = (0, BR.A)(), uR = (0, PJ.e)("itemInfo", (RR => RR[JR]));
      return (0, pR.jsxs)("div", {
        className: "GreenvilleChipTooltip",
        children: [(0, pR.jsxs)("div", {
          className: "GreenvilleChipTooltipHeader",
          children: [(0, pR.jsx)("span", {
            className: "GreenvilleChipTooltipIcon",
            children: (0, pR.jsx)(wJ, {
              item: JR
            })
          }), (0, pR.jsx)(KJ, {
            item: JR,
            className: "GreenvilleChipTooltipName"
          })]
        }), void 0 !== (null === uR || void 0 === uR ? void 0 : uR.description) && (0, pR.jsx)(fJ.c, {
          text: uR.description,
          className: "GreenvilleChipTooltipDescription"
        }), void 0 !== yR && (0, pR.jsxs)("div", {
          className: UR()("GreenvilleChipTooltipHeld", {
            Short: yR < GR
          }),
          children: [(0, pR.jsx)("span", {
            className: "GreenvilleChipTooltipLabel",
            children: tR("greenvilleGame:boardYouHave")
          }), (0, pR.jsxs)("span", {
            className: "GreenvilleChipTooltipCount",
            children: [(0, pR.jsx)("span", {
              className: "GreenvilleChipTooltipHeldAmount",
              children: yR.toLocaleString()
            }), ` / ${GR.toLocaleString()}`]
          }), (0, pR.jsx)("span", {
            className: "GreenvilleChipTooltipMeter",
            children: (0, pR.jsx)("span", {
              style: {
                width: (GR > 0 ? 100 * Math.min(1, yR / GR) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function zJ(RR) {
      let {
        children: JR
      } = RR;
      const GR = (0, iR.useRef)(null);
      (0, SR.h)(jR, GR);
      const yR = (0, SR.l)(jR, ER());
      return (0, pR.jsxs)("div", {
        className: "GreenvilleBoardWallet",
        children: [JR, (0, pR.jsx)(IJ, {
          amount: yR,
          iconRef: GR
        })]
      })
    }

    function SJ(RR, JR, GR) {
      const yR = (0, iR.useRef)({
          slot: RR,
          wV: JR
        }),
        tR = (0, iR.useRef)(-1 / 0);
      return (0, iR.useLayoutEffect)((() => {
        yR.current.slot === RR && yR.current.wV && !JR && (tR.current = performance.now()), yR.current = {
          slot: RR,
          wV: JR
        }
      }), [RR, JR]), () => {
        performance.now() - tR.current >= 500 && GR(RR)
      }
    }
    const jJ = {
      New: "lumberBoardStateNew",
      Accepted: "lumberBoardStateAccepted",
      Tracking: "lumberBoardTracking",
      Ready: "lumberBoardStateReady"
    };

    function dJ(RR, JR) {
      return RR.wV ? RR.ready ? "Ready" : RR.slot === JR ? "Tracking" : "Accepted" : "New"
    }

    function EJ(RR) {
      let {
        state: JR
      } = RR;
      const {
        t: GR
      } = (0, BR.A)();
      return (0, pR.jsx)("span", {
        className: UR()("GreenvilleBoardBadge GreenvilleLumberState", JR, {
          Muted: "Accepted" === JR
        }),
        children: GR(`greenvilleGame:${jJ[JR]}`)
      })
    }

    function YJ(RR) {
      let {
        order: JR
      } = RR;
      return (0, pR.jsx)("span", {
        className: "GreenvilleLumberNeeds",
        children: JR.items.map((RR => {
          let [JR, GR, yR] = RR;
          const tR = yR >= GR;
          return (0, pR.jsxs)("span", {
            className: UR()("GreenvilleLumberNeed", {
              Met: tR
            }),
            children: [(0, pR.jsx)("span", {
              className: "GreenvilleLumberNeedIcon",
              children: (0, pR.jsx)(wJ, {
                item: JR
              })
            }), (0, pR.jsx)(KJ, {
              item: JR,
              className: "GreenvilleLumberNeedName"
            }), (0, pR.jsxs)("span", {
              className: "GreenvilleLumberNeedCount",
              children: [Math.min(yR, GR).toLocaleString(), "/", GR.toLocaleString()]
            }), (0, pR.jsx)("span", {
              className: "GreenvilleLumberNeedTick",
              "aria-hidden": "true",
              children: tR && "\u2713"
            })]
          }, JR)
        }))
      })
    }

    function kJ(RR) {
      let {
        order: JR,
        inTile: GR = !1
      } = RR;
      const {
        t: yR
      } = (0, BR.A)();
      return (0, pR.jsxs)("span", {
        className: "GreenvilleLumberReward",
        children: [(0, pR.jsx)(IJ, {
          amount: JR.gold,
          inTile: GR
        }), (0, pR.jsx)("span", {
          className: "GreenvilleLumberExp",
          children: yR("greenvilleGame:boardExpGain", {
            exp: JR.exp
          })
        })]
      })
    }

    function QJ(RR) {
      let {
        view: JR,
        order: GR,
        controller: yR
      } = RR;
      const {
        t: tR
      } = (0, BR.A)(), {
        slot: uR,
        items: ZR,
        wV: qR,
        ready: iR
      } = GR, fR = SJ(uR, qR, yR.accept), VR = ZR.reduce(((RR, JR) => {
        let [, GR, yR] = JR;
        return RR + Math.max(0, GR - yR)
      }), 0);
      return (0, pR.jsxs)("div", {
        className: "GreenvilleBoardActions",
        children: [!qR && (0, pR.jsx)(ZJ.g, {
          onClick: fR,
          children: tR("greenvilleGame:lumberBoardAccept")
        }), qR && (0, pR.jsx)(ZJ.n, {
          disabled: !iR,
          loading: JR.delivering.includes(uR),
          onClick: () => {
            yR.deliver(uR)
          },
          children: tR("greenvilleGame:lumberBoardDeliver")
        }), qR && !iR && (0, pR.jsx)("span", {
          className: "GreenvilleBoardHint",
          children: tR("greenvilleGame:lumberBoardDeliverMissing", {
            count: VR
          })
        }), qR && uR !== JR.tracked && (0, pR.jsx)(ZJ.U, {
          onClick: () => {
            yR.track(uR)
          },
          children: tR("greenvilleGame:lumberBoardTrack")
        })]
      })
    }

    function FJ(RR) {
      let {
        view: JR,
        controller: GR
      } = RR;
      const {
        t: yR
      } = (0, BR.A)(), tR = JR.orders[JR.selectedSlot], uR = dJ(tR, JR.tracked), ZR = tR.wV && tR.slot === JR.tracked;
      return (0, pR.jsxs)(nJ, {
        icon: (0, pR.jsx)(wJ, {
          item: tR.items[0][0]
        }),
        name: yR(`greenvilleGame:${tR.titleKey}`),
        badges: (0, pR.jsxs)(pR.Fragment, {
          children: [(0, pR.jsx)(EJ, {
            state: uR
          }), ZR && "Ready" === uR && (0, pR.jsx)(EJ, {
            state: "Tracking"
          })]
        }),
        children: [(0, pR.jsx)(YJ, {
          order: tR
        }), (0, pR.jsx)("dl", {
          className: "GreenvilleBoardFacts",
          children: (0, pR.jsxs)("div", {
            children: [(0, pR.jsx)("dt", {
              children: yR("greenvilleGame:lumberBoardReward")
            }), (0, pR.jsx)("dd", {
              children: (0, pR.jsx)(kJ, {
                order: tR
              })
            })]
          })
        }), (0, pR.jsx)(QJ, {
          view: JR,
          order: tR,
          controller: GR
        })]
      })
    }

    function TJ(RR) {
      let {
        view: JR,
        controller: GR
      } = RR;
      const {
        t: yR
      } = (0, BR.A)();
      return (0, pR.jsxs)(pR.Fragment, {
        children: [(0, pR.jsx)(aJ, {
          className: "GreenvilleLumberTickets",
          roomy: !0,
          children: JR.orders.map((RR => {
            const tR = dJ(RR, JR.tracked);
            return (0, pR.jsxs)(LJ, {
              icon: (0, pR.jsx)(wJ, {
                item: RR.items[0][0]
              }),
              name: yR(`greenvilleGame:${RR.titleKey}`),
              selected: RR.slot === JR.selectedSlot,
              className: UR()("GreenvilleLumberTicket", tR),
              onSelect: () => {
                GR.selectOrder(RR.slot)
              },
              children: [(0, pR.jsx)(EJ, {
                state: tR
              }), (0, pR.jsx)(YJ, {
                order: RR
              }), (0, pR.jsx)(kJ, {
                order: RR,
                inTile: !0
              })]
            }, RR.slot)
          }))
        }), (0, pR.jsx)(FJ, {
          view: JR,
          controller: GR
        })]
      })
    }

    function sJ(RR) {
      let {
        item: JR
      } = RR;
      return (0, pR.jsx)("span", {
        className: "GreenvilleLumberLogEnd",
        children: (0, pR.jsx)(wJ, {
          item: JR
        })
      })
    }

    function hJ(RR) {
      let {
        view: JR,
        controller: GR
      } = RR;
      const {
        t: yR
      } = (0, BR.A)(), [tR, uR, ZR] = JR.sellLines[JR.selectedWood], qR = function(RR, JR) {
        let GR = 0,
          yR = 0;
        for (const tR of RR.orders)
          if (tR.wV)
            for (const [RR, uR, ZR] of tR.items) RR === JR && (GR += uR, yR = ZR);
        return Math.min(GR, yR)
      }(JR, tR), iR = JR.sellLines.some((RR => {
        let [, JR] = RR;
        return JR > 0
      }));
      return (0, pR.jsxs)(nJ, {
        icon: (0, pR.jsx)(sJ, {
          item: tR
        }),
        name: (0, pR.jsx)(KJ, {
          item: tR
        }),
        badges: uR > 0 && (0, pR.jsx)("span", {
          className: "GreenvilleBoardBadge",
          children: yR("greenvilleGame:lumberBoardSellHeld", {
            count: uR
          })
        }),
        children: [(0, pR.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, pR.jsxs)("div", {
            children: [(0, pR.jsx)("dt", {
              children: yR("greenvilleGame:boardYouHave")
            }), (0, pR.jsx)("dd", {
              children: (qR + uR).toLocaleString()
            })]
          }), (0, pR.jsxs)("div", {
            children: [(0, pR.jsx)("dt", {
              children: yR("greenvilleGame:lumberBoardSellKept")
            }), (0, pR.jsx)("dd", {
              children: qR.toLocaleString()
            })]
          }), (0, pR.jsxs)("div", {
            children: [(0, pR.jsx)("dt", {
              children: yR("greenvilleGame:lumberBoardSellSpare")
            }), (0, pR.jsx)("dd", {
              className: UR()("GreenvilleLumberSpare", {
                None: 0 === uR
              }),
              children: uR.toLocaleString()
            })]
          }), (0, pR.jsxs)("div", {
            children: [(0, pR.jsx)("dt", {
              children: yR("greenvilleGame:lumberBoardSellEach")
            }), (0, pR.jsx)("dd", {
              children: (0, pR.jsx)(IJ, {
                amount: ZR
              })
            })]
          })]
        }), (0, pR.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [(0, pR.jsxs)(ZJ.n, {
            disabled: 0 === uR,
            onClick: () => {
              GR.sell(tR)
            },
            children: [uR > 0 && yR("greenvilleGame:lumberBoardSell", {
              count: uR
            }), 0 === uR && yR(qR > 0 ? "greenvilleGame:lumberBoardSellKeptAll" : "greenvilleGame:lumberBoardSellNone")]
          }), (0, pR.jsx)(ZJ.g, {
            disabled: !iR,
            onClick: () => {
              GR.sell(null)
            },
            children: yR("greenvilleGame:lumberBoardSellAll")
          })]
        })]
      })
    }

    function RG(RR) {
      let {
        view: JR,
        controller: GR
      } = RR;
      const {
        t: yR
      } = (0, BR.A)();
      return (0, pR.jsxs)(pR.Fragment, {
        children: [(0, pR.jsx)(aJ, {
          className: "GreenvilleLumberWoodPile",
          children: JR.sellLines.map(((RR, tR) => {
            let [uR, ZR, qR] = RR;
            return (0, pR.jsxs)(LJ, {
              icon: (0, pR.jsx)(sJ, {
                item: uR
              }),
              name: (0, pR.jsx)(KJ, {
                item: uR
              }),
              selected: tR === JR.selectedWood,
              className: UR()("GreenvilleLumberWood", {
                Spare: ZR > 0
              }),
              onSelect: () => {
                GR.selectWood(tR)
              },
              children: [ZR > 0 && (0, pR.jsx)("span", {
                className: "GreenvilleBoardBadge",
                children: yR("greenvilleGame:lumberBoardSellHeld", {
                  count: ZR
                })
              }), (0, pR.jsx)(IJ, {
                amount: qR,
                inTile: !0
              })]
            }, uR)
          }))
        }), (0, pR.jsx)(hJ, {
          view: JR,
          controller: GR
        })]
      })
    }

    function JG(RR) {
      let {
        controller: JR
      } = RR;
      const GR = (0, XR.h)(DJ, JR.getView()),
        {
          t: yR
        } = (0, BR.A)(),
        tR = function(RR) {
          const {
            t: JR
          } = (0, BR.A)();
          return "delivered" === RR.kind ? JR("greenvilleGame:lumberTimbertoothThanks", {
            order: JR(`greenvilleGame:${RR.titleKey}`)
          }) : "bought" === RR.kind ? JR("greenvilleGame:lumberTimbertoothBought", {
            count: RR.count
          }) : JR("greenvilleGame:lumberBoardIntro")
        }(GR.line);
      if (0 === GR.orders.length) return null;
      const uR = GR.orders.filter((RR => RR.wV && RR.ready)).length,
        ZR = GR.sellLines.reduce(((RR, JR) => {
          let [, GR] = JR;
          return RR + GR
        }), 0);
      return (0, pR.jsxs)(rJ, {
        open: GR.open,
        onDismiss: JR.dismiss,
        title: yR("greenvilleGame:lumberBoardTitle"),
        className: "GreenvilleLumberBoard",
        headerExtra: (0, pR.jsx)(zJ, {
          children: (0, pR.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: yR("greenvilleGame:lumberBoardLevel", {
              level: GR.level
            })
          })
        }),
        tabs: (0, pR.jsx)(eJ, {
          tabs: [{
            id: "orders",
            label: yR("greenvilleGame:lumberBoardOrders"),
            badge: uR > 0 && (0, pR.jsx)("span", {
              className: "GreenvilleBoardBadge Ready",
              children: yR("greenvilleGame:lumberBoardReadyCount", {
                count: uR
              })
            })
          }, {
            id: "sell",
            label: yR("greenvilleGame:lumberBoardSellHeading"),
            badge: ZR > 0 && (0, pR.jsx)("span", {
              className: "GreenvilleBoardBadge",
              children: yR("greenvilleGame:lumberBoardSellHeld", {
                count: ZR
              })
            })
          }],
          selected: GR.tab,
          onSelect: JR.selectTab
        }),
        status: {
          speaker: yR("greenvilleGame:lumberTimbertoothName"),
          line: tR
        },
        children: ["orders" === GR.tab && (0, pR.jsx)(TJ, {
          view: GR,
          controller: JR
        }), "sell" === GR.tab && (0, pR.jsx)(RG, {
          view: GR,
          controller: JR
        })]
      })
    }

    function GG(RR) {
      let {
        controller: JR
      } = RR;
      (0, XR.h)(HJ, null);
      const {
        t: GR
      } = (0, BR.A)(), yR = JR.getTracker();
      return null === yR ? null : (0, pR.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, pR.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: GR(`greenvilleGame:${yR.titleKey}`)
        }), (0, pR.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: yR.items.map((RR => {
            let [JR, GR, yR] = RR;
            return (0, pR.jsxs)("li", {
              className: UR()("GreenvilleTrackerRow", {
                Done: yR >= GR
              }),
              children: [(0, pR.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, pR.jsx)(CR.b, {
                  itemName: JR,
                  amount: 0
                })
              }), (0, pR.jsx)(KJ, {
                item: JR,
                className: "GreenvilleTrackerLabel"
              }), (0, pR.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [Math.min(yR, GR), "/", GR]
              })]
            }, JR)
          }))
        }), yR.ready && (0, pR.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: GR("greenvilleGame:lumberTrackerReady")
        })]
      })
    }
    const yG = "greenvilleOreBuyerView",
      tG = {
        open: !1,
        lines: [],
        selected: 0,
        level: 1
      };
    class uG extends JJ {
      constructor(RR, JR, GR, yR) {
        super(tG, RR, JR), this.sales = void 0, this.serverLines = [], this.select = RR => {
          this.set({
            ...this.getView(),
            selected: RR
          })
        }, this.sell = RR => {
          this.getView().lines.some((JR => {
            let [GR, , , , yR] = JR;
            return yR > 0 && (null === RR || RR === GR)
          })) && (this.sales.push(RR), this.set({
            ...this.getView(),
            lines: this.getLines()
          }))
        }, this.onAnswersTimedOut = () => {
          const RR = this.getView();
          RR.open && this.set({
            ...RR,
            lines: this.getLines()
          })
        }, this.sales = new hR(yR, GR, this.onAnswersTimedOut)
      }
      BK(RR) {
        if ("close" !== RR[0]) {
          const [, JR, GR] = RR, yR = "open" === RR[0] && RR[3];
          yR && this.sales.takeAnswer();
          const tR = this.getView();
          if ((yR || "refresh" === RR[0]) && !tR.open) return;
          this.serverLines = JR;
          const uR = JR.findIndex((RR => RR[4] > 0));
          this.show({
            open: !0,
            lines: this.getLines(),
            selected: tR.open ? tR.selected : Math.max(0, uR),
            level: GR
          })
        } else this.close()
      }
      dropPresses() {
        this.sales.clear()
      }
      getLines() {
        const RR = this.sales.getPending();
        return this.serverLines.map((JR => {
          const [GR, yR, tR, uR, , ZR] = JR;
          return RR.some((RR => null === RR || RR === GR)) ? [GR, yR, tR, uR, 0, ZR] : JR
        }))
      }
    }

    function ZG(RR) {
      let {
        line: JR,
        level: GR
      } = RR;
      const {
        t: yR
      } = (0, BR.A)(), [, , , tR, uR, ZR] = JR;
      return (0, pR.jsxs)(pR.Fragment, {
        children: [uR > 0 && (0, pR.jsx)("span", {
          className: "GreenvilleBoardBadge",
          children: yR("greenvilleGame:oreBuyerHeld", {
            count: uR
          })
        }), tR > GR && (0, pR.jsxs)("span", {
          className: "GreenvilleBoardBadge Muted",
          children: [(0, pR.jsx)(uJ.d, {
            name: "lock"
          }), yR("greenvilleGame:boardLevelBadge", {
            level: tR
          })]
        }), tR <= GR && ZR && (0, pR.jsx)("span", {
          className: "GreenvilleBoardBadge GreenvilleOreRare",
          children: yR("greenvilleGame:oreBuyerRare")
        })]
      })
    }

    function qG(RR) {
      let {
        line: JR
      } = RR;
      return (0, pR.jsx)("span", {
        className: "GreenvilleOreSample",
        children: (0, pR.jsx)(wJ, {
          item: JR[0]
        })
      })
    }

    function iG(RR) {
      let {
        view: JR,
        controller: GR
      } = RR;
      const {
        t: yR
      } = (0, BR.A)(), tR = JR.lines[JR.selected], [uR, ZR, qR, iR, fR, VR] = tR, KR = iR > JR.level, wR = JR.lines.some((RR => RR[4] > 0));
      return (0, pR.jsxs)(nJ, {
        icon: (0, pR.jsx)(qG, {
          line: tR
        }),
        name: (0, pR.jsx)(KJ, {
          item: uR
        }),
        badges: (0, pR.jsx)(ZG, {
          line: tR,
          level: JR.level
        }),
        children: [(0, pR.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, pR.jsxs)("div", {
            children: [(0, pR.jsx)("dt", {
              children: yR("greenvilleGame:boardYouHave")
            }), (0, pR.jsx)("dd", {
              className: UR()("GreenvilleOreHeld", {
                None: 0 === fR
              }),
              children: fR.toLocaleString()
            })]
          }), (0, pR.jsxs)("div", {
            children: [(0, pR.jsx)("dt", {
              children: yR("greenvilleGame:oreBuyerPriceEach")
            }), (0, pR.jsx)("dd", {
              children: (0, pR.jsx)(IJ, {
                amount: ZR
              })
            })]
          }), (0, pR.jsxs)("div", {
            children: [(0, pR.jsx)("dt", {
              children: yR("greenvilleGame:oreBuyerExpEach")
            }), (0, pR.jsxs)("dd", {
              className: "GreenvilleOreExp",
              children: ["+", qR]
            })]
          })]
        }), VR && (0, pR.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: yR("greenvilleGame:oreBuyerLegendary")
        }), KR && (0, pR.jsxs)(pR.Fragment, {
          children: [(0, pR.jsx)("p", {
            className: "GreenvilleBoardHint",
            children: yR("greenvilleGame:oreBuyerLocked", {
              level: iR
            })
          }), (0, pR.jsx)("p", {
            className: "GreenvilleBoardDescription",
            children: yR("greenvilleGame:oreBuyerTip")
          })]
        }), (0, pR.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [(0, pR.jsxs)(ZJ.n, {
            disabled: 0 === fR,
            onClick: () => {
              GR.sell(uR)
            },
            children: [fR > 0 && yR("greenvilleGame:oreBuyerSell", {
              count: fR
            }), 0 === fR && yR("greenvilleGame:oreBuyerSellNone")]
          }), (0, pR.jsx)(ZJ.g, {
            disabled: !wR,
            onClick: () => {
              GR.sell(null)
            },
            children: yR("greenvilleGame:oreBuyerSellAll")
          })]
        })]
      })
    }

    function fG(RR) {
      let {
        controller: JR
      } = RR;
      const GR = (0, XR.h)(yG, JR.getView()),
        {
          t: yR
        } = (0, BR.A)();
      return 0 === GR.lines.length ? null : (0, pR.jsxs)(rJ, {
        open: GR.open,
        onDismiss: JR.dismiss,
        title: yR("greenvilleGame:oreBuyerTitle"),
        className: "GreenvilleOreBuyerBoard",
        headerExtra: (0, pR.jsx)(zJ, {
          children: (0, pR.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: yR("greenvilleGame:oreBuyerLevel", {
              level: GR.level
            })
          })
        }),
        status: {
          speaker: yR("greenvilleGame:oreBuyerName"),
          line: yR("greenvilleGame:oreBuyerGreet")
        },
        children: [(0, pR.jsx)(aJ, {
          roomy: !0,
          children: GR.lines.map(((RR, tR) => {
            const [uR, ZR, qR, iR, fR, VR] = RR;
            return (0, pR.jsxs)(LJ, {
              icon: (0, pR.jsx)(qG, {
                line: RR
              }),
              name: (0, pR.jsx)(KJ, {
                item: uR
              }),
              selected: tR === GR.selected,
              locked: iR > GR.level && 0 === fR,
              className: UR()("GreenvilleOreTile", {
                Legendary: VR
              }),
              onSelect: () => {
                JR.select(tR)
              },
              children: [(0, pR.jsx)(ZG, {
                line: RR,
                level: GR.level
              }), (0, pR.jsxs)("span", {
                className: "GreenvilleOrePrice",
                children: [(0, pR.jsx)(IJ, {
                  amount: ZR,
                  inTile: !0
                }), (0, pR.jsx)("span", {
                  className: "GreenvilleOreExp",
                  children: yR("greenvilleGame:boardExpGain", {
                    exp: qR
                  })
                })]
              })]
            }, uR)
          }))
        }), (0, pR.jsx)(iG, {
          view: GR,
          controller: JR
        })]
      })
    }
    const VG = {
      kind: "greet"
    };

    function KG(RR) {
      return RR.every((RR => {
        let [, , JR, GR] = RR;
        return GR >= JR
      }))
    }

    function wG(RR) {
      let [JR, GR, yR, tR, uR, ZR] = RR;
      return {
        slot: JR,
        nameKey: GR,
        needs: yR,
        exp: tR,
        gold: uR,
        wV: ZR,
        ready: KG(yR)
      }
    }

    function rG(RR, JR) {
      let [, , GR, yR] = RR;
      return JR ? GR : GR - yR
    }

    function eG(RR, JR) {
      let [GR, yR] = RR;
      return GR === JR.item && null !== yR === JR.golden
    }

    function aG(RR, JR) {
      return (JR.golden ? RR.goldenLines : RR.sellLines).find((RR => eG(RR, JR)))
    }

    function LG(RR, JR) {
      return "sell" === JR.action ? WG(function(RR, JR, GR) {
        const yR = RR => {
          if (null !== JR && !eG(RR, JR)) return RR;
          const [yR, tR, uR, ZR, qR] = RR;
          return [yR, tR, uR - rG(RR, GR), GR ? 0 : ZR, qR]
        };
        return {
          ...RR,
          sellLines: RR.sellLines.map(yR),
          goldenLines: nG(RR.goldenLines.map(yR))
        }
      }(RR, JR.kind, JR.all)) : "accept" === JR.action ? function(RR, JR) {
        var GR;
        const {
          needs: yR
        } = RR.orders[JR], tR = RR => {
          const [JR, GR, tR, uR, ZR] = RR, qR = UG(yR, RR);
          return qR ? [JR, GR, tR, Math.min(tR, uR + qR[2]), ZR] : RR
        };
        return {
          ...RR,
          tracked: null !== (GR = RR.tracked) && void 0 !== GR ? GR : JR,
          orders: RR.orders.map((RR => RR.slot === JR ? {
            ...RR,
            wV: !0
          } : RR)),
          sellLines: RR.sellLines.map(tR),
          goldenLines: RR.goldenLines.map(tR)
        }
      }(RR, JR.slot) : "track" === JR.action ? {
        ...RR,
        tracked: JR.slot
      } : WG(function(RR, JR) {
        const {
          needs: GR
        } = RR.orders[JR], yR = RR => {
          const [JR, yR, tR, uR, ZR] = RR, qR = UG(GR, RR);
          return qR ? [JR, yR, tR - qR[2], uR - qR[2], ZR] : RR
        };
        return {
          ...RR,
          sellLines: RR.sellLines.map(yR),
          goldenLines: nG(RR.goldenLines.map(yR)),
          delivering: [...RR.delivering, JR]
        }
      }(RR, JR.slot))
    }

    function nG(RR) {
      return RR.filter((RR => {
        let [, , JR] = RR;
        return JR > 0
      }))
    }

    function UG(RR, JR) {
      let [GR, yR] = JR;
      return RR.find((RR => {
        let [JR, tR] = RR;
        return JR === GR && tR === yR
      }))
    }

    function WG(RR) {
      const JR = (JR, GR) => {
          const yR = (null === GR ? RR.sellLines : RR.goldenLines).find((RR => {
            let [GR] = RR;
            return GR === JR
          }));
          return yR ? yR[2] : 0
        },
        GR = RR.orders.map((GR => {
          if (RR.delivering.includes(GR.slot)) return GR;
          const yR = GR.needs.map((RR => {
            let [GR, yR, tR] = RR;
            return [GR, yR, tR, JR(GR, yR)]
          }));
          return {
            ...GR,
            needs: yR,
            ready: KG(yR)
          }
        }));
      return {
        ...RR,
        orders: GR
      }
    }

    function AG(RR) {
      let [, , , JR, GR] = RR;
      return [...JR, ...GR].reduce(((RR, JR) => {
        let [, , GR] = JR;
        return RR + GR
      }), 0)
    }
    const CG = "greenvilleFarmBoardView",
      XG = "greenvilleFarmTrackerView",
      MG = {
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
        line: VG
      };
    class BG extends JJ {
      constructor(RR, JR, GR, yR, tR) {
        super(MG, RR, GR), this.publishTracker = JR, this.board = null, this.commands = void 0, this.tracker = null, this.tab = "orders", this.selectedOrder = 0, this.selectedProduce = null, this.line = VG, this.selectTab = RR => {
          this.tab = RR, this.set(this.getBoardView())
        }, this.selectOrder = RR => {
          this.selectedOrder = RR, this.set(this.getBoardView())
        }, this.selectProduce = RR => {
          this.selectedProduce = RR, this.set(this.getBoardView())
        }, this.accept = RR => {
          this.getView().orders[RR].wV || this.queue({
            action: "accept",
            slot: RR
          })
        }, this.track = RR => {
          const JR = this.getView();
          JR.tracked !== RR && JR.orders[RR].wV && this.queue({
            action: "track",
            slot: RR
          })
        }, this.deliver = RR => {
          const JR = this.getView(),
            GR = JR.orders[RR];
          GR.wV && GR.ready && !JR.delivering.includes(RR) && this.queue({
            action: "deliver",
            slot: RR
          })
        }, this.sell = (RR, JR) => {
          this.queueSale({
            item: RR,
            golden: JR
          }, !1)
        }, this.sellSpare = () => {
          this.queueSale(null, !1)
        }, this.sellAll = () => {
          this.queueSale(null, !0)
        }, this.onAnswersTimedOut = () => {
          this.getView().open && this.set(this.settleView())
        }, this.commands = new hR(tR, (RR => {
          yR(function(RR) {
            return "sell" !== RR.action ? `${uR}${RR.action} ${RR.slot}` : RR.all ? `${uR}sellAll` : null === RR.kind ? `${uR}sell` : `${uR}${RR.kind.golden?"sellGolden":"sell"} ${RR.kind.item}`
          }(RR))
        }), this.onAnswersTimedOut)
      }
      getTracker() {
        return this.tracker
      }
      BK(RR) {
        if ("open" === RR[0]) {
          const GR = RR[7],
            yR = GR ? this.commands.takeAnswer() : null,
            tR = !this.getView().open;
          if (GR && tR) return;
          const uR = this.board;
          if (this.board = RR, tR) this.onReopened();
          else if (null !== yR) {
            var JR;
            this.line = null !== (JR = function(RR, JR, GR) {
              const yR = GR[6] - JR[6];
              if (yR <= 0) return null;
              if ("deliver" === RR.action) return {
                kind: "delivered",
                nameKey: JR[1][RR.slot][1],
                gold: yR
              };
              const tR = AG(JR) - AG(GR);
              return "sell" === RR.action && tR > 0 ? {
                kind: "sold",
                count: tR,
                gold: yR
              } : null
            }(yR, uR, RR)) && void 0 !== JR ? JR : this.line
          }
          this.show(this.settleView())
        } else "close" === RR[0] ? this.close() : (this.tracker = null === RR[1] ? null : wG(RR[1]), this.publishTracker(this.tracker))
      }
      dropPresses() {
        this.commands.clear(), this.board = null
      }
      onReopened() {
        this.line = VG;
        const RR = this.toView(this.board).orders.find((RR => RR.wV && RR.ready));
        RR && (this.tab = "orders", this.selectedOrder = RR.slot)
      }
      queueSale(RR, JR) {
        const {
          sellLines: GR,
          goldenLines: yR
        } = this.getView();
        [...GR, ...yR].some((GR => rG(GR, JR) > 0 && (null === RR || eG(GR, RR)))) && this.queue({
          action: "sell",
          kind: RR,
          all: JR
        })
      }
      toView(RR) {
        let [, JR, GR, yR, tR, uR] = RR;
        return {
          open: !0,
          orders: JR.map(wG),
          tracked: GR,
          sellLines: yR,
          goldenLines: tR,
          level: uR,
          delivering: [],
          tab: this.tab,
          selectedOrder: this.selectedOrder,
          selectedProduce: this.selectedProduce,
          line: this.line
        }
      }
      getBoardView() {
        let RR = this.toView(this.board);
        for (const JR of this.commands.getPending()) RR = LG(RR, JR);
        return {
          ...RR,
          selectedProduce: this.pickProduce(RR)
        }
      }
      settleView() {
        const RR = this.getBoardView();
        return this.commands.WK() && (this.selectedProduce = RR.selectedProduce), RR
      }
      pickProduce(RR) {
        var JR, GR;
        const yR = this.selectedProduce;
        if (yR && aG(RR, yR)) return yR;
        if (yR) return {
          item: yR.item,
          golden: !1
        };
        const [tR, uR] = null !== (JR = null !== (GR = RR.goldenLines[0]) && void 0 !== GR ? GR : RR.sellLines.find((RR => {
          let [, , JR] = RR;
          return JR > 0
        }))) && void 0 !== JR ? JR : RR.sellLines[0];
        return {
          item: tR,
          golden: null !== uR
        }
      }
      queue(RR) {
        this.commands.push(RR), this.set(this.getBoardView())
      }
    }
    var lG = GR(1487);

    function pG() {
      const RR = (0, iR.useRef)(null);
      return (0, lG.b)(RR), (0, pR.jsx)("span", {
        ref: RR,
        className: "GreenvilleFarmSparkle",
        "aria-hidden": "true"
      })
    }

    function gG(RR) {
      let {
        item: JR,
        golden: GR
      } = RR;
      return (0, pR.jsx)("span", {
        className: UR()("GreenvilleFarmProduce", {
          Golden: GR
        }),
        children: (0, pR.jsx)(wJ, {
          item: JR
        })
      })
    }

    function bG(RR) {
      let {
        item: JR,
        goldenNameKey: GR
      } = RR;
      const {
        t: yR
      } = (0, BR.A)();
      return null !== GR ? (0, pR.jsx)("span", {
        className: "GreenvilleFarmGoldenName",
        children: yR(GR)
      }) : (0, pR.jsx)(KJ, {
        item: JR
      })
    }
    const vG = {
      New: "greenvilleGame:farmBoardNew",
      Accepted: "greenvilleGame:farmBoardAccepted",
      Tracking: "greenvilleGame:farmOrderTracking",
      Ready: "greenvilleGame:farmBoardReady"
    };

    function OG(RR, JR) {
      return RR.wV ? RR.ready ? "Ready" : JR ? "Tracking" : "Accepted" : "New"
    }

    function xG(RR) {
      return RR.needs.some((RR => {
        let [, JR] = RR;
        return null !== JR
      }))
    }

    function NG(RR) {
      let {
        order: JR
      } = RR;
      const [GR, yR] = JR.needs[0];
      return (0, pR.jsx)(gG, {
        item: GR,
        golden: null !== yR
      })
    }

    function DG(RR) {
      let {
        state: JR
      } = RR;
      const {
        t: GR
      } = (0, BR.A)();
      return (0, pR.jsx)("span", {
        className: UR()("GreenvilleBoardBadge GreenvilleFarmState", JR),
        children: GR(vG[JR])
      })
    }

    function HG(RR) {
      let {
        needs: JR
      } = RR;
      return (0, pR.jsx)("span", {
        className: "GreenvilleFarmNeeds",
        children: JR.map((RR => {
          let [JR, GR, yR, tR] = RR;
          const uR = tR >= yR;
          return (0, pR.jsxs)("span", {
            className: UR()("GreenvilleFarmNeed", {
              Met: uR,
              Golden: null !== GR
            }),
            children: [(0, pR.jsx)("span", {
              className: "GreenvilleFarmNeedIcon",
              children: (0, pR.jsx)(gG, {
                item: JR,
                golden: null !== GR
              })
            }), (0, pR.jsx)("span", {
              className: "GreenvilleFarmNeedName",
              children: (0, pR.jsx)(bG, {
                item: JR,
                goldenNameKey: GR
              })
            }), (0, pR.jsxs)("span", {
              className: "GreenvilleFarmNeedCount",
              children: [uR && "\u2713 ", Math.min(tR, yR), "/", yR]
            })]
          }, `${JR}|${GR}`)
        }))
      })
    }

    function oG(RR) {
      let {
        order: JR,
        inTile: GR = !1
      } = RR;
      const {
        t: yR
      } = (0, BR.A)();
      return (0, pR.jsxs)("span", {
        className: "GreenvilleFarmReward",
        children: [(0, pR.jsx)(IJ, {
          amount: JR.gold,
          inTile: GR
        }), (0, pR.jsx)("span", {
          className: "GreenvilleFarmExp",
          children: yR("greenvilleGame:boardExpGain", {
            exp: JR.exp
          })
        })]
      })
    }

    function cG(RR) {
      let {
        view: JR,
        controller: GR
      } = RR;
      const {
        t: yR
      } = (0, BR.A)(), tR = JR.orders[JR.selectedOrder], {
        slot: uR,
        nameKey: ZR,
        needs: qR,
        wV: iR,
        ready: fR
      } = tR, VR = uR === JR.tracked, KR = SJ(uR, iR, GR.accept), wR = qR.reduce(((RR, JR) => {
        let [, , GR, yR] = JR;
        return RR + Math.max(0, GR - yR)
      }), 0);
      return (0, pR.jsxs)(nJ, {
        icon: (0, pR.jsx)(NG, {
          order: tR
        }),
        name: yR(ZR),
        badges: (0, pR.jsxs)(pR.Fragment, {
          children: [(0, pR.jsx)(DG, {
            state: OG(tR, VR)
          }), xG(tR) && (0, pR.jsx)("span", {
            className: "GreenvilleBoardBadge GreenvilleFarmGoldenBadge",
            children: yR("greenvilleGame:farmBoardGolden")
          })]
        }),
        children: [(0, pR.jsx)(HG, {
          needs: qR
        }), (0, pR.jsx)("dl", {
          className: "GreenvilleBoardFacts",
          children: (0, pR.jsxs)("div", {
            children: [(0, pR.jsx)("dt", {
              children: yR("greenvilleGame:farmBoardReward")
            }), (0, pR.jsx)("dd", {
              children: (0, pR.jsx)(oG, {
                order: tR
              })
            })]
          })
        }), (0, pR.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [!iR && (0, pR.jsx)(ZJ.g, {
            onClick: KR,
            children: yR("greenvilleGame:farmOrderAccept")
          }), iR && VR && (0, pR.jsxs)("span", {
            className: "GreenvilleFarmTracking",
            children: [(0, pR.jsx)(uJ.d, {
              name: "crosshairs"
            }), yR("greenvilleGame:farmOrderTracking")]
          }), iR && !VR && (0, pR.jsx)(ZJ.U, {
            onClick: () => {
              GR.track(uR)
            },
            children: yR("greenvilleGame:farmOrderTrack")
          }), iR && (0, pR.jsx)(ZJ.n, {
            disabled: !fR,
            loading: JR.delivering.includes(uR),
            onClick: () => {
              GR.deliver(uR)
            },
            children: yR("greenvilleGame:farmOrderDeliver")
          }), iR && !fR && (0, pR.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: yR("greenvilleGame:farmBoardMissing", {
              count: wR
            })
          })]
        })]
      })
    }

    function PG(RR) {
      let {
        view: JR,
        controller: GR
      } = RR;
      const {
        t: yR
      } = (0, BR.A)();
      return (0, pR.jsxs)(pR.Fragment, {
        children: [(0, pR.jsx)(aJ, {
          roomy: !0,
          children: JR.orders.map((RR => (0, pR.jsxs)(LJ, {
            icon: (0, pR.jsx)(NG, {
              order: RR
            }),
            name: yR(RR.nameKey),
            selected: RR.slot === JR.selectedOrder,
            className: UR()("GreenvilleFarmBasket", {
              WantsGolden: xG(RR)
            }),
            onSelect: () => {
              GR.selectOrder(RR.slot)
            },
            children: [(0, pR.jsx)(DG, {
              state: OG(RR, RR.slot === JR.tracked)
            }), (0, pR.jsx)(HG, {
              needs: RR.needs
            }), (0, pR.jsx)(oG, {
              order: RR,
              inTile: !0
            })]
          }, RR.slot)))
        }), (0, pR.jsx)(cG, {
          view: JR,
          controller: GR
        })]
      })
    }

    function IG(RR) {
      let {
        line: JR,
        selected: GR,
        onSelect: yR
      } = RR;
      const [tR, uR, ZR, , qR] = JR, iR = null !== uR;
      return (0, pR.jsxs)(LJ, {
        icon: (0, pR.jsx)(gG, {
          item: tR,
          golden: iR
        }),
        name: (0, pR.jsx)(bG, {
          item: tR,
          goldenNameKey: uR
        }),
        selected: GR,
        className: UR()("GreenvilleFarmCrate", {
          Golden: iR,
          Empty: 0 === ZR
        }),
        onSelect: yR,
        children: [iR && (0, pR.jsx)(pG, {}), ZR > 0 && (0, pR.jsxs)("span", {
          className: "GreenvilleBoardBadge GreenvilleFarmHeld",
          children: ["\xd7", ZR]
        }), (0, pR.jsx)(IJ, {
          amount: qR,
          inTile: !0
        })]
      })
    }

    function mG(RR) {
      let {
        view: JR,
        controller: GR
      } = RR;
      const {
        t: yR
      } = (0, BR.A)(), tR = [...JR.sellLines, ...JR.goldenLines], uR = tR.some((RR => rG(RR, !1) > 0)), ZR = tR.some((RR => rG(RR, !0) > 0));
      return (0, pR.jsxs)("div", {
        className: "GreenvilleFarmSign",
        children: [(0, pR.jsx)("h3", {
          className: "GreenvilleFarmSignBoard",
          children: yR("greenvilleGame:farmBoardPrices")
        }), (0, pR.jsxs)("div", {
          className: "GreenvilleFarmSignActions",
          children: [(0, pR.jsx)(ZJ.g, {
            disabled: !uR,
            onClick: GR.sellSpare,
            children: yR("greenvilleGame:farmStallSellSurplus")
          }), (0, pR.jsx)(ZJ.M, {
            disabled: !ZR,
            onClick: GR.sellAll,
            children: yR("greenvilleGame:farmStallSellAll")
          })]
        })]
      })
    }

    function zG(RR) {
      let {
        line: JR,
        controller: GR
      } = RR;
      const {
        t: yR
      } = (0, BR.A)(), [tR, uR, ZR, qR, iR] = JR, fR = null !== uR, VR = rG(JR, !1);
      return (0, pR.jsxs)(nJ, {
        icon: (0, pR.jsx)(gG, {
          item: tR,
          golden: fR
        }),
        name: (0, pR.jsx)(bG, {
          item: tR,
          goldenNameKey: uR
        }),
        badges: fR && (0, pR.jsx)("span", {
          className: "GreenvilleBoardBadge GreenvilleFarmGoldenBadge",
          children: yR("greenvilleGame:farmBoardGolden")
        }),
        children: [fR && (0, pR.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: yR("greenvilleGame:farmBoardGoldenBlurb")
        }), (0, pR.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, pR.jsxs)("div", {
            children: [(0, pR.jsx)("dt", {
              children: yR("greenvilleGame:boardYouHave")
            }), (0, pR.jsx)("dd", {
              children: ZR
            })]
          }), qR > 0 && (0, pR.jsxs)("div", {
            children: [(0, pR.jsx)("dt", {
              children: yR("greenvilleGame:farmBoardKept")
            }), (0, pR.jsx)("dd", {
              children: qR
            })]
          }), (0, pR.jsxs)("div", {
            children: [(0, pR.jsx)("dt", {
              children: yR("greenvilleGame:farmBoardSpare")
            }), (0, pR.jsx)("dd", {
              children: VR
            })]
          }), (0, pR.jsxs)("div", {
            children: [(0, pR.jsx)("dt", {
              children: yR("greenvilleGame:farmBoardPriceEach")
            }), (0, pR.jsx)("dd", {
              children: (0, pR.jsx)(IJ, {
                amount: iR
              })
            })]
          })]
        }), (0, pR.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [VR > 0 && (0, pR.jsx)(ZJ.n, {
            onClick: () => {
              GR.sell(tR, fR)
            },
            children: yR("greenvilleGame:farmBoardSell", {
              count: VR
            })
          }), 0 === ZR && (0, pR.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: yR("greenvilleGame:farmStallNothing")
          }), ZR > 0 && 0 === VR && (0, pR.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: yR("greenvilleGame:farmBoardAllKept")
          })]
        })]
      })
    }

    function SG(RR) {
      let {
        view: JR,
        produce: GR,
        controller: yR
      } = RR;
      const {
        t: tR
      } = (0, BR.A)(), uR = RR => {
        const [JR, tR] = RR;
        return (0, pR.jsx)(IG, {
          line: RR,
          selected: eG(RR, GR),
          onSelect: () => {
            yR.selectProduce({
              item: JR,
              golden: null !== tR
            })
          }
        }, `${JR}|${null!==tR}`)
      };
      return (0, pR.jsxs)(pR.Fragment, {
        children: [(0, pR.jsxs)(aJ, {
          children: [(0, pR.jsx)(mG, {
            view: JR,
            controller: yR
          }), JR.goldenLines.length > 0 && (0, pR.jsxs)(pR.Fragment, {
            children: [(0, pR.jsx)("h4", {
              className: "GreenvilleFarmSection Golden",
              children: tR("greenvilleGame:farmBoardGoldenCrops")
            }), JR.goldenLines.map(uR), (0, pR.jsx)("hr", {
              className: "GreenvilleFarmSection"
            })]
          }), JR.sellLines.map(uR)]
        }), (0, pR.jsx)(zG, {
          line: aG(JR, GR),
          controller: yR
        })]
      })
    }

    function jG(RR) {
      let {
        controller: JR
      } = RR;
      const GR = (0, XR.h)(CG, JR.getView()),
        {
          t: yR
        } = (0, BR.A)(),
        tR = function(RR) {
          const {
            t: JR
          } = (0, BR.A)();
          return "delivered" === RR.kind ? JR("greenvilleGame:tillieDelivered", {
            order: JR(RR.nameKey),
            gold: RR.gold
          }) : "sold" === RR.kind ? JR("greenvilleGame:tillieSold", {
            count: RR.count,
            gold: RR.gold
          }) : JR("greenvilleGame:tillieGreet")
        }(GR.line),
        uR = GR.selectedProduce;
      if (null === uR) return null;
      const ZR = function(RR) {
        return RR.orders.filter((RR => RR.wV && RR.ready)).length
      }(GR);
      return (0, pR.jsxs)(rJ, {
        open: GR.open,
        onDismiss: JR.dismiss,
        title: yR("greenvilleGame:farmBoardTitle"),
        className: "GreenvilleFarmBoard",
        headerExtra: (0, pR.jsx)(zJ, {
          children: (0, pR.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: yR("greenvilleGame:farmBoardLevel", {
              level: GR.level
            })
          })
        }),
        tabs: (0, pR.jsx)(eJ, {
          tabs: [{
            id: "orders",
            label: yR("greenvilleGame:farmBoardOrdersTab"),
            badge: ZR > 0 && (0, pR.jsx)("span", {
              className: "GreenvilleBoardBadge GreenvilleFarmReadyBadge",
              children: yR("greenvilleGame:farmBoardReadyCount", {
                count: ZR
              })
            })
          }, {
            id: "stall",
            label: yR("greenvilleGame:farmBoardStallTab")
          }],
          selected: GR.tab,
          onSelect: JR.selectTab
        }),
        status: {
          speaker: yR("greenvilleGame:farmTillieName"),
          line: tR
        },
        children: ["orders" === GR.tab && (0, pR.jsx)(PG, {
          view: GR,
          controller: JR
        }), "stall" === GR.tab && (0, pR.jsx)(SG, {
          view: GR,
          produce: uR,
          controller: JR
        })]
      })
    }
    var dG = GR(39659);

    function EG(RR) {
      let {
        controller: JR
      } = RR;
      (0, XR.h)(XG, null);
      const {
        t: GR
      } = (0, BR.A)(), yR = JR.getTracker();
      return null === yR ? null : (0, pR.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, pR.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: GR(yR.nameKey)
        }), (0, pR.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: yR.needs.map((RR => {
            let [JR, yR, tR, uR] = RR;
            return (0, pR.jsxs)("li", {
              className: UR()("GreenvilleTrackerRow", {
                Done: uR >= tR,
                Golden: null !== yR
              }),
              children: [(0, pR.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, pR.jsx)(CR.b, {
                  itemName: JR,
                  amount: 0
                })
              }), (0, pR.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: null === yR ? (0, dG.f)(GR, JR) : GR(yR)
              }), (0, pR.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [Math.min(uR, tR), "/", tR]
              })]
            }, `${JR}|${yR}`)
          }))
        }), yR.ready && (0, pR.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: GR("greenvilleGame:farmOrderReady")
        })]
      })
    }
    const YG = "greenvillePlaceView",
      kG = "greenvilleMoodView";
    class QG {
      constructor(RR, JR) {
        this.publishPlace = RR, this.publishMood = JR, this.place = null, this.mood = null
      }
      getPlace() {
        return this.place
      }
      getMood() {
        return this.mood
      }
      BK(RR) {
        const JR = performance.now();
        switch (RR[0]) {
          case "hudMood": {
            const [, GR, yR, tR, uR, ZR, qR] = RR;
            return this.mood = {
              energy: GR,
              earningsPercent: yR,
              breakEvenEnergy: tR,
              restedEndsAt: uR > 0 ? JR + uR : 0,
              adBoosted: ZR,
              luckPercent: qR
            }, void this.publishMood(this.mood)
          }
          case "hudTown": {
            const [JR, GR, yR] = RR;
            this.place = {
              kind: JR,
              place: GR,
              levels: yR
            };
            break
          }
          case "hudJob": {
            const [JR, GR, yR, tR, uR, ZR, qR, iR, fR] = RR;
            this.place = {
              kind: JR,
              place: GR,
              job: yR,
              level: tR,
              expInto: uR,
              expNeeded: ZR,
              status: null === qR ? null : FG(qR),
              next: null === iR ? null : {
                item: iR[0],
                nameKey: iR[1],
                level: iR[2]
              },
              stats: fR.map((RR => {
                let [JR, GR, yR, tR] = RR;
                return {
                  stat: JR,
                  value: GR,
                  max: yR,
                  boosted: tR
                }
              }))
            };
            break
          }
          case "hudHome": {
            const [GR, yR, tR, uR, ZR, qR, iR, fR, VR] = RR;
            this.place = {
              kind: GR,
              houseName: yR,
              ownerName: tR,
              isOwner: uR,
              visitorsAllowed: ZR,
              pvp: qR,
              parkour: iR,
              runStartedAt: fR < 0 ? null : this.getRunStart(JR - fR),
              bestTimes: VR.map((RR => {
                let [JR, GR] = RR;
                return {
                  playerName: JR,
                  seconds: GR
                }
              }))
            };
            break
          }
          case "hudSpleef": {
            const [JR, GR, yR] = RR;
            this.place = {
              kind: JR,
              eliminations: GR,
              wins: yR
            };
            break
          }
        }
        this.publishPlace(this.place)
      }
      getRunStart(RR) {
        var JR;
        const GR = "hudHome" === (null === (JR = this.place) || void 0 === JR ? void 0 : JR.kind) ? this.place.runStartedAt : null;
        return null !== GR && Math.abs(GR - RR) < 500 ? GR : RR
      }
    }

    function FG(RR) {
      switch (RR[0]) {
        case "hudTier":
          return {
            kind: RR[0], tierKey: RR[1], locked: RR[2]
          };
        case "hudBay":
          return {
            kind: RR[0], materialKey: RR[1], objectKey: RR[2], percent: RR[3]
          };
        case "hudBayEmpty":
          return {
            kind: RR[0]
          };
        case "hudFarmTier":
          return {
            kind: RR[0], goldenPercent: RR[1]
          }
      }
    }
    var TG = GR(4717),
      sG = GR(1351),
      hG = GR(203);
    const Ry = JSON.parse('{"c":{"constructionSiteA":{"name":"Construction Site A"},"quarry":{"name":"The Quarry","skill":"Mining"},"industry":{"name":"Demolition Yard","skill":"Demolition"},"market":{"name":"Market Street","skill":"Market"},"lumberMill":{"name":"Lumber Mill","skill":"Woodcutting"},"farm":{"name":"Greenville Farm","skill":"Farming"},"constructionSiteB":{"name":"Construction Site B"},"dealership":{"name":"Wheeler\'s Wheels"},"postOffice":{"name":"Post Office & Diner"},"station":{"name":"The Station"},"docks":{"name":"The Docks"}},"f":[[{"kind":"residential","name":"Hillside"},{"kind":"district","district":"quarry"},{"kind":"district","district":"industry"},{"kind":"residential","name":"Ridgeview"}],[{"kind":"residential","name":"Willow Gardens"},{"kind":"district","district":"constructionSiteA"},{"kind":"district","district":"market"},{"kind":"residential","name":"Maple Row"}],[{"kind":"residential","name":"Birchwood"},{"kind":"district","district":"farm"},{"kind":"district","district":"lumberMill"},{"kind":"district","district":"dealership"}],[{"kind":"residential","name":"Seaview"},{"kind":"district","district":"constructionSiteB"},{"kind":"residential","name":"Harbour Terrace"},{"kind":"residential","name":"Lighthouse Point"}]]}'),
      Jy = hG.g.LK,
      Gy = 1e3 * Jy,
      yy = Jy,
      ty = yy + 2 * Jy,
      uy = 4 * ty + yy;

    function Zy(RR, JR, GR) {
      return JR >= RR.x0 && JR <= RR.x1 && GR >= RR.z0 && GR <= RR.z1
    }
    const qy = Ry.f,
      iy = Object.fromEntries(Object.entries(Ry.c).map((RR => {
        let [JR, {
          name: GR
        }] = RR;
        return [JR, GR]
      })));

    function fy(RR, JR) {
      return [Gy + yy + RR * ty, Gy + yy + JR * ty]
    }

    function Vy() {
      const RR = [];
      qy.forEach(((JR, GR) => {
        JR.forEach(((JR, yR) => {
          if ("residential" !== JR.kind) return;
          const [tR, uR] = fy(yR, GR);
          for (const [GR, ZR, qR] of [
              [0, 0, "north"],
              [1, 0, "north"],
              [0, 1, "south"],
              [1, 1, "south"]
            ]) RR.push({
            chunk: [tR / Jy + GR, 0, uR / Jy + ZR],
            facing: qR,
            neighbourhood: JR.name
          })
        }))
      }));
      const JR = Gy + uy / 2,
        GR = RR => {
          let {
            chunk: GR
          } = RR;
          return Math.hypot(GR[0] * Jy + Jy / 2 - JR, GR[2] * Jy + Jy / 2 - JR)
        };
      return RR.sort(((RR, JR) => GR(RR) - GR(JR)))
    }
    const Ky = {
        market: "Crate",
        demolition: "Moonstone Explosive",
        mining: "Iron Pickaxe",
        woodcutting: "Iron Axe",
        farming: "Wheat"
      },
      wy = {
        earningPower: "greenvilleGame:marketEarningPower",
        power: "greenvilleGame:demolitionPower",
        points: "greenvilleGame:demolitionPoints",
        depth: "greenvilleGame:miningDepth",
        value: "greenvilleGame:miningValue",
        backpack: "greenvilleGame:miningBackpack",
        luck: "greenvilleGame:luck"
      };

    function ry(RR, JR) {
      switch (JR) {
        case "quarry":
          return iy.quarry;
        case "demolitionYard":
          return iy.industry;
        case "marketStreet":
          return iy.market;
        case "farm":
          return iy.farm;
        case "lumberMill":
          return iy.lumberMill;
        case "supermarket":
          return RR("greenvilleGame:market");
        case "demolition":
        case "mining":
        case "woodcutting":
        case "farming":
          return RR(`greenvilleGame:${JR}`)
      }
    }

    function ey(RR) {
      let {
        controller: JR,
        children: GR
      } = RR;
      (0, XR.h)(YG, null);
      const [yR, tR] = (0, iR.useState)(null);
      (0, TG.l)(yR, ".RightElements");
      const uR = JR.getPlace();
      return (0, pR.jsx)(AR.d, {
        placement: "topRight",
        children: (0, pR.jsx)("div", {
          className: "GreenvilleHudColumn",
          children: (0, pR.jsxs)("div", {
            ref: tR,
            className: "GreenvilleHudColumnStack",
            children: [GR, "hudTown" === (null === uR || void 0 === uR ? void 0 : uR.kind) && (0, pR.jsx)(Ly, {
              levels: uR.levels
            }), "hudJob" === (null === uR || void 0 === uR ? void 0 : uR.kind) && (0, pR.jsx)(ny, {
              job: uR
            }), "hudHome" === (null === uR || void 0 === uR ? void 0 : uR.kind) && uR.bestTimes.length > 0 && (0, pR.jsx)(Uy, {
              home: uR
            }), "hudSpleef" === (null === uR || void 0 === uR ? void 0 : uR.kind) && (0, pR.jsx)("div", {
              className: "GreenvilleTrackerCard",
              children: (0, pR.jsx)(ay, {
                rows: [
                  ["greenvilleGame:spleefEliminations", uR.eliminations],
                  ["greenvilleGame:spleefWins", uR.wins]
                ]
              })
            })]
          })
        })
      })
    }

    function ay(RR) {
      let {
        rows: JR
      } = RR;
      const {
        t: GR
      } = (0, BR.A)();
      return (0, pR.jsx)("ul", {
        className: "GreenvilleTrackerRows",
        children: JR.map((RR => {
          let [JR, yR] = RR;
          return (0, pR.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, pR.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: GR(JR)
            }), (0, pR.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: (0, IR.i)(yR)
            })]
          }, JR)
        }))
      })
    }

    function Ly(RR) {
      let {
        levels: JR
      } = RR;
      const {
        t: GR
      } = (0, BR.A)();
      return (0, pR.jsxs)("div", {
        className: "GreenvilleTrackerCard GreenvilleJobsStrip",
        children: [(0, pR.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: GR("greenvilleGame:jobs")
        }), (0, pR.jsx)("ul", {
          className: "GreenvilleJobsStripJobs",
          children: ZR.map(((RR, yR) => {
            const tR = JR[yR];
            return (0, pR.jsxs)("li", {
              className: UR()("GreenvilleJobsStripJob", {
                Max: tR >= 50
              }),
              "aria-label": GR("greenvilleGame:jobLevel", {
                job: GR(`greenvilleGame:${RR}`),
                level: tR
              }),
              children: [(0, pR.jsx)("span", {
                className: "GreenvilleJobsStripIcon",
                "aria-hidden": "true",
                children: (0, pR.jsx)(CR.b, {
                  itemName: Ky[RR],
                  amount: 0
                })
              }), (0, pR.jsx)("span", {
                className: "GreenvilleJobsStripLevel",
                "aria-hidden": "true",
                children: GR("greenvilleGame:levelShort", {
                  level: tR
                })
              })]
            }, RR)
          }))
        })]
      })
    }

    function ny(RR) {
      let {
        job: {
          stats: JR,
          next: GR
        }
      } = RR;
      const {
        t: yR
      } = (0, BR.A)();
      return (0, pR.jsxs)(pR.Fragment, {
        children: [JR.length > 0 && (0, pR.jsx)("div", {
          className: "GreenvilleTrackerCard",
          children: (0, pR.jsx)("ul", {
            className: "GreenvilleTrackerRows",
            children: JR.map((RR => {
              let {
                stat: JR,
                value: GR,
                max: tR,
                boosted: uR
              } = RR;
              return (0, pR.jsxs)("li", {
                className: "GreenvilleTrackerRow",
                children: [(0, pR.jsx)("span", {
                  className: "GreenvilleTrackerLabel",
                  children: yR(wy[JR])
                }), (0, pR.jsxs)("span", {
                  className: UR()("GreenvilleTrackerValue", {
                    Boosted: uR
                  }),
                  children: [(0, IR.i)(GR), null !== tR && `/${(0,IR.i)(tR)}`]
                })]
              }, JR)
            }))
          })
        }), null !== GR && (0, pR.jsxs)("div", {
          className: "GreenvilleTrackerCard GreenvilleNextUnlock",
          children: [(0, pR.jsx)("span", {
            className: "GreenvilleNextUnlockEyebrow",
            children: yR("greenvilleGame:nextUnlock")
          }), (0, pR.jsxs)("div", {
            className: "GreenvilleNextUnlockBody",
            children: [(0, pR.jsx)("span", {
              className: "GreenvilleNextUnlockIcon",
              "aria-hidden": "true",
              children: (0, pR.jsx)(CR.b, {
                itemName: GR.item,
                amount: 0
              })
            }), (0, pR.jsxs)("span", {
              className: "GreenvilleNextUnlockText",
              children: [(0, pR.jsx)("strong", {
                className: "GreenvilleNextUnlockName",
                children: yR(GR.nameKey)
              }), (0, pR.jsx)("span", {
                className: "GreenvilleNextUnlockLevel",
                children: yR("greenvilleGame:unlockAtLevel", {
                  level: GR.level
                })
              })]
            })]
          })]
        })]
      })
    }

    function Uy(RR) {
      let {
        home: JR
      } = RR;
      const {
        t: GR,
        selectedLanguage: yR
      } = (0, BR.A)(), tR = (0, PJ.i)("hiddenPlayerNames");
      return (0, pR.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, pR.jsxs)("strong", {
          className: "GreenvilleTrackerTitle GreenvilleBestTimesTitle",
          children: [(0, pR.jsx)(uJ.d, {
            name: "trophy"
          }), GR("greenvilleGame:parkourBestTimes")]
        }), (0, pR.jsx)("ol", {
          className: "GreenvilleTrackerRows",
          children: JR.bestTimes.slice(0, 3).map(((RR, JR) => {
            let {
              playerName: uR,
              seconds: ZR
            } = RR;
            return (0, pR.jsxs)("li", {
              className: UR()("GreenvilleTrackerRow GreenvilleBestTime", {
                First: 0 === JR
              }),
              children: [(0, pR.jsx)("span", {
                className: "GreenvilleBestTimeRank",
                children: JR + 1
              }), (0, pR.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: (0, sG.e)(uR, tR)
              }), (0, pR.jsx)("span", {
                className: "GreenvilleTrackerValue",
                children: GR("greenvilleGame:parkourTime", {
                  seconds: ZR.toLocaleString(yR.code, {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1
                  })
                })
              })]
            }, `${JR}|${uR}`)
          }))
        })]
      })
    }
    const Wy = "greenvilleLevelUpsView";
    class Ay {
      constructor(RR) {
        this.publishReveals = RR, this.reveals = [], this.token = 0, this.celebrate = (RR, JR) => {
          this.setReveals([...this.reveals, {
            kind: "celebration",
            celebration: RR,
            gold: JR,
            token: ++this.token
          }])
        }, this.revealed = RR => {
          this.setReveals(this.reveals.filter((JR => JR.token !== RR)))
        }
      }
      getReveals() {
        return this.reveals
      }
      BK(RR) {
        const [JR, GR, yR] = RR;
        this.setReveals([...this.reveals, {
          kind: "levelUp",
          job: JR,
          level: GR,
          unlocks: yR.map((RR => {
            let [JR, GR, yR] = RR;
            return {
              item: JR,
              nameKey: GR,
              level: yR
            }
          })),
          token: ++this.token
        }])
      }
      setReveals(RR) {
        this.reveals = RR, this.publishReveals(RR)
      }
    }
    const Cy = [{
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
      Xy = {
        movedIn: "greenvilleGame:tutCelebrateMovedIn",
        firstGold: "greenvilleGame:tutCelebrateFirstGold",
        firstCar: "greenvilleGame:tutCelebrateFirstCar",
        lessonDone: "greenvilleGame:tutCelebrateLessonDone"
      },
      My = Array.from({
        length: 16
      }, ((RR, JR) => ({
        "--angle": 360 * JR / 16 + JR % 3 * 7 + "deg",
        "--distance": 5 + JR % 4 * 1.2 + "rem",
        "--delay": JR % 5 * 30 + "ms"
      })));

    function By(RR) {
      let {
        controller: JR
      } = RR;
      (0, XR.h)(Wy, null);
      const GR = JR.getReveals();
      return 0 === GR.length ? null : (0, PR.createPortal)((0, pR.jsx)(ly, {
        reveal: GR[0],
        onDone: JR.revealed
      }, GR[0].token), document.body)
    }

    function ly(RR) {
      let {
        reveal: JR,
        onDone: GR
      } = RR;
      const {
        t: yR
      } = (0, BR.A)(), tR = (0, iR.useRef)(null), uR = "levelUp" === JR.kind ? JR.unlocks : [], ZR = 0 === uR.length ? 2600 : 4200;
      return (0, iR.useLayoutEffect)((() => {
        const RR = document.querySelector(".GreenvilleTopBar");
        RR && tR.current.style.setProperty("--top-bar-bottom", `${RR.getBoundingClientRect().bottom}px`)
      }), []), (0, iR.useEffect)((() => {
        const RR = tR.current.animate(Cy, {
          duration: ZR,
          fill: "both"
        });
        return RR.onfinish = () => {
          GR(JR.token)
        }, () => {
          RR.onfinish = null, RR.cancel()
        }
      }), [JR, ZR, GR]), (0, pR.jsxs)("div", {
        ref: tR,
        className: UR()("GreenvilleLevelUpReveal", {
          Plain: 0 === uR.length
        }),
        style: {
          "--reveal-ms": `${ZR}ms`,
          "--unlock-count": uR.length
        },
        role: "status",
        children: [uR.length > 0 && (0, pR.jsx)("div", {
          className: "GreenvilleLevelUpRevealStage",
          "aria-hidden": "true",
          children: (0, pR.jsxs)("div", {
            className: "GreenvilleLevelUpRevealMover",
            children: [(0, pR.jsx)("div", {
              className: "GreenvilleLevelUpRevealRays"
            }), (0, pR.jsx)("div", {
              className: "GreenvilleLevelUpRevealGlow"
            }), (0, pR.jsx)("div", {
              className: "GreenvilleLevelUpRevealSparks",
              children: My.map(((RR, JR) => (0, pR.jsx)("span", {
                style: RR
              }, JR)))
            }), (0, pR.jsx)("div", {
              className: "GreenvilleLevelUpRevealIcon",
              children: uR.map((RR => (0, pR.jsx)("div", {
                className: "GreenvilleLevelUpRevealItem",
                children: (0, pR.jsx)(CR.b, {
                  itemName: RR.item,
                  amount: 0
                })
              }, `${RR.level}|${RR.nameKey}`)))
            })]
          })
        }), (0, pR.jsxs)("div", {
          className: "GreenvilleLevelUpRevealText",
          children: ["levelUp" === JR.kind && (0, pR.jsx)(py, {
            levelUp: JR
          }), "celebration" === JR.kind && (0, pR.jsx)("span", {
            className: "GreenvilleLevelUpRevealName FullyFancyText",
            children: yR(Xy[JR.celebration], {
              gold: (0, IR.i)(JR.gold)
            })
          })]
        })]
      })
    }

    function py(RR) {
      let {
        levelUp: {
          job: JR,
          level: GR,
          unlocks: yR
        }
      } = RR;
      const {
        t: tR
      } = (0, BR.A)(), uR = tR(`greenvilleGame:${JR}`);
      return (0, pR.jsxs)(pR.Fragment, {
        children: [yR.length > 0 && (0, pR.jsxs)(pR.Fragment, {
          children: [(0, pR.jsx)("span", {
            className: "GreenvilleLevelUpRevealHeading SmallTextBold",
            children: tR("greenvilleGame:levelUpUnlockHeading", {
              job: uR,
              level: 1 === yR.length ? yR[0].level : GR
            })
          }), (0, pR.jsx)("span", {
            className: "GreenvilleLevelUpRevealNames",
            children: yR.map((RR => (0, pR.jsx)("span", {
              className: "GreenvilleLevelUpRevealName FullyFancyText",
              children: tR(RR.nameKey)
            }, `${RR.level}|${RR.nameKey}`)))
          })]
        }), 0 === yR.length && (0, pR.jsxs)(pR.Fragment, {
          children: [(0, pR.jsx)("span", {
            className: "GreenvilleLevelUpRevealHeading SmallTextBold",
            children: tR("greenvilleGame:levelUpHeading")
          }), (0, pR.jsx)("span", {
            className: "GreenvilleLevelUpRevealName FullyFancyText",
            children: tR("greenvilleGame:jobLevel", {
              job: uR,
              level: GR
            })
          })]
        })]
      })
    }
    const gy = "greenvilleMarketView";

    function by(RR) {
      return RR.map((RR => {
        let [JR, GR, yR, tR, uR, ZR] = RR;
        return {
          key: `${JR}|${GR}|${yR}|${tR}|${uR}`,
          icon: JR,
          target: [GR, yR, tR],
          item: uR,
          label: ZR
        }
      }))
    }
    class vy {
      constructor(RR) {
        this.JK = RR, this.view = null
      }
      getView() {
        return this.view
      }
      BK(RR) {
        const JR = performance.now();
        switch (RR[0]) {
          case "hide":
            this.view = null;
            break;
          case "marketIdle":
            this.view = {
              job: null,
              waypoints: by(RR[1])
            };
            break;
          case "marketPick":
          case "marketStock": {
            const [GR, yR, tR, uR] = RR;
            this.view = {
              job: {
                kind: GR,
                goods: yR,
                tipEndsAt: uR > 0 ? JR + uR : 0
              },
              waypoints: by(tR)
            };
            break
          }
          case "marketDeliver": {
            const [GR, yR, tR, uR, ZR, qR] = RR;
            this.view = {
              job: {
                kind: GR,
                parcelsLeft: yR,
                delivered: tR,
                gold: uR,
                endsAt: JR + qR
              },
              waypoints: by(ZR)
            };
            break
          }
        }
        this.JK(this.view)
      }
    }
    var Oy = GR(37810);
    const xy = [{
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

    function Ny(RR) {
      var JR;
      let {
        controller: GR
      } = RR;
      (0, XR.h)(gy, null);
      const yR = null === (JR = GR.getView()) || void 0 === JR ? void 0 : JR.job;
      return "marketDeliver" !== (null === yR || void 0 === yR ? void 0 : yR.kind) ? null : (0, pR.jsx)(Dy, {
        endsAt: yR.endsAt,
        delivered: yR.delivered
      })
    }

    function Dy(RR) {
      let {
        endsAt: JR,
        delivered: GR
      } = RR;
      const {
        t: yR
      } = (0, BR.A)(), tR = Math.max(0, Math.ceil((0, Oy.g)(JR))), uR = (0, iR.useRef)(null), ZR = (0, iR.useRef)(null), qR = (0, iR.useRef)({
        endsAt: JR,
        delivered: GR
      }), [fR, VR] = (0, iR.useState)(null);
      (0, iR.useLayoutEffect)((() => {
        const RR = GR > qR.current.delivered ? Math.round((JR - qR.current.endsAt) / 1e3) : 0;
        var yR;
        (qR.current = {
          endsAt: JR,
          delivered: GR
        }, RR <= 0) || (VR((JR => {
          var GR;
          return {
            seconds: RR,
            token: (null !== (GR = null === JR || void 0 === JR ? void 0 : JR.token) && void 0 !== GR ? GR : 0) + 1
          }
        })), window.matchMedia("(prefers-reduced-motion: reduce)").matches || (null === (yR = ZR.current) || void 0 === yR || yR.cancel(), ZR.current = uR.current.animate(xy, {
          duration: 420,
          easing: "ease-out"
        })))
      }), [JR, GR]), (0, iR.useEffect)((() => () => {
        var RR;
        null === (RR = ZR.current) || void 0 === RR || RR.cancel()
      }), []);
      const KR = Math.floor(tR / 60);
      return (0, pR.jsxs)("div", {
        className: UR()("GreenvilleMarketCountdown", {
          Urgent: tR < 10
        }),
        role: "timer",
        children: [(0, pR.jsxs)("div", {
          ref: uR,
          className: "GreenvilleMarketCountdownTime FullyFancyText",
          children: [KR, ":", String(tR % 60).padStart(2, "0")]
        }), null !== fR && (0, pR.jsx)("div", {
          className: "GreenvilleMarketCountdownAdded FullyFancyText",
          onAnimationEnd: () => {
            VR(null)
          },
          children: yR("greenvilleGame:marketCountdownAdded", {
            seconds: fR.seconds
          })
        }, fR.token)]
      })
    }

    function Hy(RR) {
      var JR;
      let {
        controller: GR
      } = RR;
      (0, XR.h)(gy, null);
      const yR = null === (JR = GR.getView()) || void 0 === JR ? void 0 : JR.job;
      return yR ? (0, pR.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: ["marketDeliver" === yR.kind && (0, pR.jsx)(Py, {
          shift: yR
        }), "marketDeliver" !== yR.kind && (0, pR.jsx)(oy, {
          task: yR
        })]
      }) : null
    }

    function oy(RR) {
      let {
        task: JR
      } = RR;
      const {
        t: GR
      } = (0, BR.A)(), yR = "marketPick" === JR.kind && JR.goods.every((RR => {
        let [, JR] = RR;
        return 0 === JR
      }));
      return (0, pR.jsxs)(pR.Fragment, {
        children: [(0, pR.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: GR("marketPick" === JR.kind ? "greenvilleGame:marketPanelOrder" : "greenvilleGame:marketPanelCrate")
        }), (0, pR.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: JR.goods.map((RR => {
            let [JR, yR, tR] = RR;
            return (0, pR.jsxs)("li", {
              className: UR()("GreenvilleTrackerRow", {
                Done: 0 === yR
              }),
              children: [(0, pR.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, pR.jsx)(CR.b, {
                  itemName: JR,
                  amount: 0
                })
              }), (0, pR.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: (0, dG.f)(GR, JR)
              }), (0, pR.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [tR - yR, "/", tR]
              })]
            }, JR)
          }))
        }), yR && (0, pR.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: GR("greenvilleGame:marketPanelReturn")
        }), !yR && 0 !== JR.tipEndsAt && (0, pR.jsx)(cy, {
          endsAt: JR.tipEndsAt
        })]
      })
    }

    function cy(RR) {
      let {
        endsAt: JR
      } = RR;
      const {
        t: GR
      } = (0, BR.A)(), yR = Math.ceil((0, Oy.g)(JR));
      return yR <= 0 ? null : (0, pR.jsx)("div", {
        className: "GreenvilleTrackerTip",
        children: GR("greenvilleGame:marketPanelTip", {
          seconds: yR
        })
      })
    }

    function Py(RR) {
      let {
        shift: JR
      } = RR;
      const {
        t: GR
      } = (0, BR.A)();
      return (0, pR.jsxs)(pR.Fragment, {
        children: [(0, pR.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: GR("greenvilleGame:marketPanelDeliveries")
        }), (0, pR.jsxs)("ul", {
          className: "GreenvilleTrackerRows",
          children: [(0, pR.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, pR.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: GR("greenvilleGame:marketPanelParcels")
            }), (0, pR.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: JR.parcelsLeft
            })]
          }), (0, pR.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, pR.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: GR("greenvilleGame:marketPanelDelivered")
            }), (0, pR.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: JR.delivered
            })]
          }), (0, pR.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, pR.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: GR("greenvilleGame:marketPanelEarned")
            }), (0, pR.jsx)("span", {
              className: "GreenvilleTrackerIcon",
              "aria-hidden": "true",
              children: (0, pR.jsx)(CR.b, {
                itemName: "Gold Coin",
                amount: 0
              })
            }), (0, pR.jsx)("span", {
              className: "GreenvilleTrackerValue Gold",
              children: (0, IR.i)(JR.gold)
            })]
          })]
        }), 0 === JR.parcelsLeft && (0, pR.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: GR("greenvilleGame:marketPanelBackToBay")
        })]
      })
    }
    const Iy = {
      marketNpc: "comment-dots",
      marketShelf: "cart-shopping",
      marketHouse: "house",
      marketDepot: "truck"
    };

    function my(RR) {
      var JR;
      let {
        market: GR,
        markers: yR
      } = RR;
      (0, XR.h)(gy, null);
      const tR = null === (JR = GR.getView()) || void 0 === JR ? void 0 : JR.waypoints;
      return null !== tR && void 0 !== tR && tR.length ? (0, pR.jsx)("div", {
        className: "GreenvilleMarketWaypoints",
        children: tR.map((RR => (0, pR.jsx)(zy, {
          waypoint: RR,
          bind: yR.waypoints.bindMarker(RR.key)
        }, RR.key)))
      }) : null
    }

    function zy(RR) {
      let {
        waypoint: {
          icon: JR,
          item: GR,
          label: yR
        },
        bind: tR
      } = RR;
      return (0, pR.jsxs)(Sy, {
        bind: tR,
        house: "marketHouse" === JR,
        label: yR,
        children: [null !== GR && (0, pR.jsx)("span", {
          className: "GreenvilleMarketWaypointItem",
          children: (0, pR.jsx)(CR.b, {
            itemName: GR,
            amount: 0
          })
        }), null === GR && (0, pR.jsx)(uJ.d, {
          name: Iy[JR]
        })]
      })
    }

    function Sy(RR) {
      let {
        bind: JR,
        house: GR,
        label: yR,
        extra: tR,
        children: uR
      } = RR;
      return (0, pR.jsxs)("div", {
        ref: JR,
        className: UR()("GreenvilleMarketWaypoint", {
          House: GR
        }),
        children: [GR && (0, pR.jsx)(jy, {}), (0, pR.jsx)("div", {
          className: "GreenvilleMarketWaypointBadge",
          children: uR
        }), tR, (0, pR.jsxs)("div", {
          className: "GreenvilleMarketWaypointLabels",
          children: [null !== yR && (0, pR.jsx)("span", {
            className: "GreenvilleMarketWaypointLabel SmallTextBold",
            children: yR
          }), (0, pR.jsx)("span", {
            className: "GreenvilleMarketWaypointDistance SmallTextBold"
          })]
        })]
      })
    }

    function jy() {
      const RR = (0, iR.useRef)(null);
      return (0, lG.b)(RR), (0, pR.jsx)("span", {
        ref: RR,
        className: "GreenvilleMarketWaypointPulse"
      })
    }
    const dy = {
      labels: "GreenvilleMarketWaypointLabels",
      distance: "GreenvilleMarketWaypointDistance"
    };
    class Ey {
      constructor(RR) {
        this.market = RR, this.waypoints = new eR.e(dy, "greenvilleGame:marketDistance")
      }
      frame(RR, JR) {
        this.waypoints.setRender(RR);
        const GR = this.market.getView();
        if (GR && this.waypoints.hasMarkers())
          for (const {
              key: yR,
              target: tR
            }
            of GR.waypoints) this.waypoints.update(yR, tR[0], tR[1] + 1, tR[2], JR)
      }
    }
    const Yy = "greenvilleMapView",
      ky = {
        open: !1
      };
    class Qy extends JJ {
      constructor(RR, JR, GR) {
        super(ky, RR, JR), this.nav = GR, this.open = () => {
          this.show({
            open: !0
          })
        }
      }
      dropPresses() {}
      set(RR) {
        super.set(RR), this.nav.setFullMapOpen(RR.open)
      }
    }
    var Fy = GR(39855),
      Ty = GR(39844);
    const sy = {
      Street: "St",
      Avenue: "Ave",
      Road: "Rd",
      Lane: "Ln"
    };

    function hy(RR, JR) {
      return JR.map(((JR, GR) => {
        const yR = JR.lastIndexOf(" "),
          tR = JR.slice(yR + 1);
        let uR = sy[tR];
        return void 0 === uR && (console.warn(`Greenville street "${JR}" has no suffix abbreviation`), uR = tR), {
          axis: RR,
          line: GR,
          name: JR,
          shortName: JR.slice(0, yR),
          suffix: uR
        }
      }))
    }
    const Rt = {
        eastWest: hy("eastWest", ["Hillcrest Road", "Oak Street", "Main Street", "Elm Street", "Harbour Road"]),
        northSouth: hy("northSouth", ["Willow Lane", "Birch Avenue", "Market Street", "Maple Avenue", "Station Road"])
      },
      Jt = {
        kind: "outside"
      };

    function Gt(RR, JR, GR) {
      return 100 * (RR + 1) + JR + (GR ? 1 : 0)
    }

    function yt(RR, JR, GR, yR) {
      return {
        x0: Gy + RR,
        z0: Gy + JR,
        x1: Gy + RR + GR - 1,
        z1: Gy + JR + yR - 1
      }
    }
    let tt = null;

    function ut(RR, JR, GR, yR) {
      if (yR && "outside" !== yR.kind) {
        const {
          box: GR
        } = yR;
        if (!Zy(GR, RR, JR) && Zy({
            x0: GR.x0 - 2,
            z0: GR.z0 - 2,
            x1: GR.x1 + 2,
            z1: GR.z1 + 2
          }, RR, JR)) return yR
      }
      return function(RR, JR, GR) {
        const {
          eastWest: yR,
          northSouth: tR
        } = Rt;
        switch (RR.kind) {
          case "outside":
            return Jt;
          case "street": {
            const JR = RR.segment * ty + yy,
              GR = RR.line * ty;
            return {
              kind: "street",
              box: "eastWest" === RR.axis ? yt(JR, GR, ty - yy, yy) : yt(GR, JR, yy, ty - yy),
              street: Rt[RR.axis][RR.line],
              block: 100 * (RR.segment + 1)
            }
          }
          case "junction": {
            const uR = yt(RR.column * ty, RR.row * ty, yy, yy),
              ZR = [yR[RR.row], tR[RR.column]],
              qR = "street" === (null === GR || void 0 === GR ? void 0 : GR.kind) ? GR.street : "junction" === (null === GR || void 0 === GR ? void 0 : GR.kind) ? GR.along : null,
              iR = qR && ZR.includes(qR) ? qR : Math.abs(Math.sin(JR)) > Math.abs(Math.cos(JR)) ? ZR[0] : ZR[1];
            return {
              kind: "junction",
              box: uR,
              along: iR,
              cross: iR === ZR[0] ? ZR[1] : ZR[0]
            }
          }
          case "plot": {
            const JR = RR.column * ty + yy + RR.dx * yy,
              GR = RR.row * ty + yy + RR.dz * yy,
              tR = 0 === RR.dz;
            return {
              kind: "plot",
              box: yt(JR, GR, yy, yy),
              plotId: (uR = (Gy + JR) / yy, ZR = (Gy + GR) / yy, tt || (tt = new Map(Vy().map(((RR, JR) => {
                let {
                  chunk: GR
                } = RR;
                return [`${GR[0]},${GR[2]}`, JR + 1]
              })))), tt.get(`${uR},${ZR}`)),
              number: Gt(RR.column, 0 === RR.dx ? 30 : 70, tR),
              street: yR[tR ? RR.row : RR.row + 1],
              neighbourhood: RR.neighbourhood
            }
          }
          case "tile": {
            const {
              column: JR,
              row: GR,
              district: tR
            } = RR;
            return {
              kind: "tile",
              box: yt(JR * ty + yy, GR * ty + yy, ty - yy, ty - yy),
              district: tR,
              number: Gt(JR, 50, !0),
              street: yR[GR]
            }
          }
        }
        var uR, ZR
      }(function(RR, JR) {
        const GR = RR - Gy,
          yR = JR - Gy;
        if (GR < 0 || yR < 0 || GR >= uy || yR >= uy) return {
          kind: "outside"
        };
        const tR = Math.floor(GR / ty),
          uR = Math.floor(yR / ty),
          ZR = GR - tR * ty - yy,
          qR = yR - uR * ty - yy;
        if (ZR < 0 && qR < 0) return {
          kind: "junction",
          column: tR,
          row: uR
        };
        if (qR < 0) return {
          kind: "street",
          axis: "eastWest",
          line: uR,
          segment: tR
        };
        if (ZR < 0) return {
          kind: "street",
          axis: "northSouth",
          line: tR,
          segment: uR
        };
        const iR = qy[uR][tR];
        return "residential" === iR.kind ? {
          kind: "plot",
          column: tR,
          row: uR,
          dx: Math.floor(ZR / yy),
          dz: Math.floor(qR / yy),
          neighbourhood: iR.name
        } : {
          kind: "tile",
          column: tR,
          row: uR,
          district: iR.district
        }
      }(RR, JR), GR, yR)
    }

    function Zt(RR) {
      switch (RR.kind) {
        case "outside":
          return "outside";
        case "junction":
          return `junction|${RR.along.name}|${RR.cross.name}`;
        case "plot":
        case "tile":
          return `${RR.kind}|${RR.number}|${RR.street.name}`;
        case "street":
          return `street|${RR.block}|${RR.street.name}`
      }
    }
    const qt = hG.g.LK,
      it = {
        origin: Gy,
        size: uy,
        wy: -2 * qt,
        ey: 4 * qt
      },
      ft = new Set(["quarry", "industry"]);
    const Vt = {
        origin: 1562 * qt,
        size: 13 * qt,
        wy: 0,
        ey: 5 * qt
      },
      Kt = GR.p + "static/media/greenvilleSewers.9ca15fd9e781052910dd.png";
    var wt = GR(39769),
      rt = GR(39847),
      et = GR(40756),
      Lt = GR(40752),
      nt = GR(271);
    const Ut = hG.g.LK;
    class Wt {
      constructor(RR, JR, GR) {
        this.api = RR, this.map = JR, this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.image = this.context.createImageData(Ut, Ut), this.columns = void 0, this.lowestLayer = void 0, this.layers = void 0, this.plots = void 0, this.baked = null, this.He = !1, this.ids = new Uint16Array(Ut * Ut), this.tops = new Int32Array(Ut * Ut), this.edgeIds = new Uint16Array(Ut), this.edgeTops = new Int32Array(Ut), this.heights = void 0, this.versions = void 0, this.current = void 0, this.stale = void 0, this.painted = void 0, this.order = [], this.focus = {
          column: -1,
          row: -1
        }, this.colours = null, this.host = null, this.timer = null, this.cancelIdle = null, this.pass = RR => {
          this.cancelIdle = null;
          let JR = !1;
          const GR = performance.now();
          let yR = !0;
          if (this.colours && this.host && this.host.clientWidth > 0)
            for (const tR of this.order) {
              if (!this.readVersions(tR)) continue;
              const uR = !RR.didTimeout && RR.timeRemaining() < 2;
              if (!yR && (uR || performance.now() - GR > 6)) {
                JR = !0;
                break
              }
              yR = !1, this.versions.set(this.current, tR * this.layers), this.paint(tR % this.columns, Math.floor(tR / this.columns), this.colours.lookup, this.colours.drawn)
            }
          this.schedule(JR ? 0 : 500)
        };
        const {
          origin: yR,
          size: tR,
          wy: uR,
          ey: ZR
        } = JR.area;
        this.columns = tR / Ut, this.lowestLayer = uR / Ut, this.layers = (ZR - uR) / Ut, this.plots = new Set(GR.map((RR => {
          let {
            chunkX: JR,
            chunkZ: GR
          } = RR;
          return GR * this.columns + JR
        }))), this.heights = new Int32Array(tR * tR).fill(et.d), this.versions = new Float64Array(this.columns * this.columns * this.layers).fill(NaN), this.current = new Float64Array(this.layers), this.stale = new Uint8Array(this.columns * this.columns), this.painted = new Uint8Array(this.columns * this.columns), this.canvas.width = tR, this.canvas.height = tR, this.canvas.className = "GreenvilleNavMapTerrain", 0 !== GR.length ? (this.focusOn(yR + tR / 2, yR + tR / 2), Promise.all([(0, Lt.e)(), this.drawBakedMap()]).then((RR => {
          let [JR] = RR;
          this.colours = {
            lookup: JR,
            drawn: JR.getDrawnIds()
          }
        }), (RR => {
          console.error("Greenville map: block colours failed to load", RR)
        })), this.schedule(0)) : this.drawBakedMap()
      }
      mount(RR) {
        this.host = RR, null === RR || void 0 === RR || RR.replaceChildren(this.canvas)
      }
      focusOn(RR, JR) {
        const {
          columns: GR
        } = this, {
          origin: yR
        } = this.map.area, tR = Math.min(GR - 1, Math.max(0, Math.floor((RR - yR) / Ut))), uR = Math.min(GR - 1, Math.max(0, Math.floor((JR - yR) / Ut)));
        tR === this.focus.column && uR === this.focus.row || (this.focus = {
          column: tR,
          row: uR
        }, this.order = [...this.plots].sort(((RR, JR) => Math.hypot(RR % GR - tR, Math.floor(RR / GR) - uR) - Math.hypot(JR % GR - tR, Math.floor(JR / GR) - uR))))
      }
      forget(RR, JR) {
        const GR = JR * this.columns + RR;
        this.stale[GR] = 1, this.versions.fill(NaN, GR * this.layers, (GR + 1) * this.layers)
      }
      dispose() {
        var RR, JR;
        null !== this.timer && clearTimeout(this.timer), null === (RR = this.cancelIdle) || void 0 === RR || RR.call(this), this.host = null, this.He = !0, null === (JR = this.baked) || void 0 === JR || JR.close(), this.baked = null
      }
      async drawBakedMap() {
        try {
          const RR = await fetch(this.map.imageUrl);
          if (!RR.ok) throw new Error(`HTTP ${RR.status}`);
          const JR = await createImageBitmap(await RR.blob(), {
            colorSpaceConversion: "none"
          });
          if (this.He) return void JR.close();
          this.baked = JR, this.context.drawImage(JR, 0, 0)
        } catch (RR) {
          console.error("Greenville map: the baked map failed to load", RR)
        }
      }
      schedule(RR) {
        this.timer = setTimeout((() => {
          this.timer = null, this.cancelIdle = (0, nt.e)(this.pass, {
            timeoutMs: 1e3
          })
        }), RR)
      }
      readVersions(RR) {
        const {
          origin: JR
        } = this.map.area, GR = JR / Ut + RR % this.columns, yR = JR / Ut + Math.floor(RR / this.columns);
        let tR = !1;
        for (let ZR = 0; ZR < this.layers; ZR++) {
          var uR;
          const JR = null !== (uR = this.api.getChunkVersion(GR, this.lowestLayer + ZR, yR)) && void 0 !== uR ? uR : 0;
          this.current[ZR] = JR, tR ||= JR !== this.versions[RR * this.layers + ZR]
        }
        return tR
      }
      repaintIfPainted(RR, JR) {
        const GR = JR * this.columns + RR;
        RR < this.columns && JR < this.columns && 1 === this.painted[GR] && this.versions.fill(NaN, GR * this.layers, (GR + 1) * this.layers)
      }
      storeHeights(RR, JR) {
        const {
          size: GR
        } = this.map.area;
        let yR = !1,
          tR = !1;
        for (let uR = 0; uR < this.ids.length; uR++) {
          const ZR = uR % Ut,
            qR = Math.floor(uR / Ut),
            iR = (JR * Ut + qR) * GR + RR * Ut + ZR,
            fR = 0 === this.ids[uR] ? et.d : this.tops[uR];
          this.heights[iR] !== fR && (yR ||= ZR === Ut - 1, tR ||= qR === Ut - 1, this.heights[iR] = fR)
        }
        yR && this.repaintIfPainted(RR + 1, JR), tR && this.repaintIfPainted(RR, JR + 1)
      }
      readEdgeHeights(RR, JR, GR, yR, tR) {
        const {
          origin: uR,
          size: ZR,
          wy: qR,
          ey: iR
        } = this.map.area;
        this.api.readColumnTops(RR, JR, GR, yR, qR, iR, tR, this.edgeIds, this.edgeTops);
        const fR = GR - RR;
        for (let VR = 0; VR < Ut; VR++) {
          const GR = (JR - uR + Math.floor(VR / fR)) * ZR + RR - uR + VR % fR;
          this.heights[GR] = 0 === this.edgeIds[VR] ? et.d : this.edgeTops[VR]
        }
      }
      paint(RR, JR, GR, yR) {
        const {
          origin: tR,
          size: uR,
          wy: ZR,
          ey: qR
        } = this.map.area, iR = JR * this.columns + RR, fR = 1 === this.stale[iR];
        this.stale[iR] = 0;
        const VR = tR + RR * Ut,
          KR = tR + JR * Ut,
          wR = uR - (RR + 1) * Ut,
          {
            ids: rR,
            tops: eR,
            heights: aR
          } = this;
        if (0 === this.current[0 - this.lowestLayer]) return void(fR && (this.context.clearRect(wR, JR * Ut, Ut, Ut), this.baked && this.context.drawImage(this.baked, wR, JR * Ut, Ut, Ut, wR, JR * Ut, Ut, Ut), rR.fill(0), this.storeHeights(RR, JR)));
        this.painted[iR] = 1, this.api.readColumnTops(VR, KR, VR + Ut, KR + Ut, ZR, qR, yR, rR, eR), this.storeHeights(RR, JR), this.plots.has(iR - 1) || this.readEdgeHeights(VR - 1, KR, VR, KR + Ut, yR), this.plots.has(iR - this.columns) || this.readEdgeHeights(VR, KR - 1, VR + Ut, KR, yR);
        const LR = this.image.data;
        for (let nR = 0; nR < Ut; nR++)
          for (let yR = 0; yR < Ut; yR++) {
            const tR = 4 * (nR * Ut + Ut - 1 - yR),
              ZR = rR[nR * Ut + yR];
            if (0 === ZR) {
              LR[tR + 3] = 0;
              continue
            }
            const qR = RR * Ut + yR,
              iR = JR * Ut + nR;
            GR.drawPixel(LR, tR, ZR, eR[nR * Ut + yR], aR[(iR - 1) * uR + qR], aR[iR * uR + qR - 1])
          }
        this.context.putImageData(this.image, wR, JR * Ut)
      }
    }
    const At = 5 * Math.PI / 180,
      Ct = {
        u: NaN,
        v: NaN,
        left: NaN,
        top: NaN,
        scale: NaN,
        heading: NaN
      };
    class Xt {
      constructor(RR) {
        this.onTerrainHost = RR, this.terrainHost = null, this.NK = null, this.worldResize = null, this.worldPx = {
          width: 0,
          height: 0
        }, this.arrowTrack = null, this.arrow = null, this.written = {
          ...Ct
        }, this.goalTrack = null, this.goal = null, this.mountTerrain = RR => {
          this.terrainHost = RR, this.onTerrainHost()
        }, this.mountWorld = RR => {
          var JR;
          this.NK = RR, this.written = {
            ...Ct
          }, null === (JR = this.worldResize) || void 0 === JR || JR.disconnect(), this.worldResize = null, RR && (this.worldResize = new ResizeObserver((RR => {
            let [JR] = RR;
            this.worldPx = {
              width: JR.contentRect.width,
              height: JR.contentRect.height
            }, this.written.scale = NaN
          })), this.worldResize.observe(RR))
        }, this.mountArrow = RR => {
          var JR;
          this.arrowTrack = RR, this.arrow = null !== (JR = null === RR || void 0 === RR ? void 0 : RR.querySelector(".GreenvilleNavArrow")) && void 0 !== JR ? JR : null, this.written = {
            ...Ct
          }
        }, this.mountGoal = RR => {
          this.goalTrack = RR, RR && (RR.hidden = null === this.goal), this.written.left = NaN
        }
      }
      setGoal(RR) {
        this.goal = RR, this.goalTrack && (this.goalTrack.hidden = null === RR), this.written.left = NaN
      }
      write(RR, JR, GR, yR, tR, uR, ZR) {
        const {
          NK: qR,
          arrowTrack: iR,
          arrow: fR,
          written: VR
        } = this;
        if (!qR || !iR || !fR) return;
        const KR = Math.abs(Math.atan2(Math.sin(GR - VR.heading), Math.cos(GR - VR.heading))),
          wR = uR !== VR.scale,
          {
            width: rR,
            height: eR
          } = this.worldPx,
          aR = wR || !(Math.hypot((yR - VR.left) * rR, (tR - VR.top) * eR) < 1),
          LR = wR || !(Math.hypot(RR - VR.u, JR - VR.v) * Math.min(rR, eR) * uR < 1);
        aR && (this.written.left = yR, this.written.top = tR, qR.style.transform = `translate(${100*yR}%, ${100*tR}%) scale(${uR})`, this.writeGoal(yR, tR, uR)), LR && (this.written.u = RR, this.written.v = JR, iR.style.transform = `translate(${100*RR}%, ${100*JR}%)`), (wR || KR >= At) && (fR.style.transform = `translate(-50%, -50%) scale(${1/uR}) rotate(${180+180*GR/Math.PI}deg)`, this.written.heading = GR), wR && (qR.style.setProperty("--greenville-map-unzoom", String(1 / uR)), qR.style.setProperty("--greenville-map-fade", String(ZR)), this.written.scale = uR)
      }
      writeGoal(RR, JR, GR) {
        const {
          goal: yR,
          goalTrack: tR
        } = this;
        if (!yR || !tR) return;
        const uR = RR + yR[0] * GR - .5,
          ZR = JR + yR[1] * GR - .5,
          qR = Math.min(1, .4 / Math.max(Math.abs(uR), Math.abs(ZR)));
        tR.style.transform = `translate(${100*(.5+uR*qR)}%, ${100*(.5+ZR*qR)}%)`
      }
    }
    const Mt = "greenvilleNavAddress",
      Bt = "greenvilleNavPlots",
      lt = "greenvilleNavMarkers",
      pt = {
        kind: "outside"
      };
    class gt {
      constructor(RR, JR, GR, yR) {
        this.map = RR, this.publishAddress = JR, this.publishPlots = GR, this.publishMarkers = yR, this.address = pt, this.addressKey = Zt(pt), this.block = {
          x: NaN,
          y: NaN,
          z: NaN
        }, this.inSewers = !1, this.plots = void 0, this.markers = [], this.terrain = null, this.minimap = void 0, this.homeGate = null, this.fullMap = void 0, this.fullMapOpen = !1, this.fullMapZoom = rt.f, this.zoom = 0, this.lastFrameMs = NaN, this.reducedMotion = null, this.logLocalScale = void 0, this.placeTerrain = () => {
          this.terrain.mount(this.fullMapOpen && this.fullMap.terrainHost ? this.fullMap.terrainHost : this.minimap.terrainHost)
        }, this.minimap = new Xt(this.placeTerrain), this.fullMap = new Xt(this.placeTerrain);
        const {
          origin: tR,
          size: uR
        } = RR.area;
        this.logLocalScale = Math.log(uR / 80), this.plots = {
          plots: (RR.city ? Vy() : []).map(((RR, JR) => {
            let {
              chunk: GR,
              facing: yR
            } = RR;
            return {
              plotId: JR + 1,
              chunkX: GR[0] - tR / hG.g.LK,
              chunkZ: GR[2] - tR / hG.g.LK,
              facing: yR,
              state: "vacant",
              mine: !1
            }
          })),
          animate: !1
        }
      }
      start(RR) {
        this.terrain = new Wt(RR, this.map, this.plots.plots)
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
      setGoal(RR) {
        const {
          origin: JR,
          size: GR
        } = this.map.area;
        this.minimap.setGoal(RR && [(JR + GR - RR.x) / GR, (RR.z - JR) / GR])
      }
      BK(RR) {
        const JR = [...this.plots.plots];
        for (const [uR, ZR, qR] of "plotsAll" === RR[0] ? RR[1] : [RR[1]]) {
          const RR = JR[uR - 1];
          var GR;
          if (RR.state === ZR && RR.mine === qR || (JR[uR - 1] = {
              ...RR,
              state: ZR,
              mine: qR
            }), RR.state !== ZR) null === (GR = this.terrain) || void 0 === GR || GR.forget(RR.chunkX, RR.chunkZ)
        }
        this.plots = {
          plots: JR,
          animate: "plotsOne" === RR[0]
        };
        const yR = JR.find((RR => RR.mine)),
          tR = this.map.area.origin / hG.g.LK;
        this.homeGate = yR ? function(RR, JR, GR) {
          const yR = RR[0] * Jy,
            tR = RR[2] * Jy,
            uR = Jy / 2 + .5;
          return "north" === JR ? [yR + uR, tR - GR] : [yR + Jy - uR, tR + Jy + GR]
        }([yR.chunkX + tR, 0, yR.chunkZ + tR], yR.facing, 1) : null, this.publishPlots(this.plots)
      }
      receiveMarkers(RR) {
        this.markers = RR.map((RR => {
          const [JR, GR] = [this.toMapUnits(RR[2]), this.toMapUnits(RR[3])];
          return "mapPlace" === RR[0] ? {
            kind: "place",
            place: RR[1],
            x: JR,
            z: GR
          } : {
            kind: "npc",
            face: null === RR[1] ? "npc" : `npc_${RR[1]}`,
            x: JR,
            z: GR
          }
        })), this.publishMarkers(this.markers)
      }
      setFullMapOpen(RR) {
        RR !== this.fullMapOpen && (this.fullMapOpen = RR, this.fullMapZoom = rt.f, this.placeTerrain())
      }
      setFullMapZoom(RR) {
        this.fullMapZoom = RR
      }
      frame(RR, JR, GR) {
        if (!JR) return;
        const yR = Math.floor(JR[0]),
          tR = Math.floor(JR[1]),
          uR = Math.floor(JR[2]),
          {
            origin: ZR,
            size: qR
          } = this.map.area;
        if (yR !== this.block.x || tR !== this.block.y || uR !== this.block.z) {
          yR === this.block.x && uR === this.block.z || (this.terrain.focusOn(yR, uR), this.address = ut(yR, uR, RR.cameraHeading, this.address)), this.block = {
            x: yR,
            y: tR,
            z: uR
          };
          const JR = this.map.city && (iR = this.address, fR = tR, VR = this.inSewers, !(fR >= (VR ? -1 : -3)) && ("street" === iR.kind || "junction" === iR.kind || "tile" === iR.kind && !ft.has(iR.district))),
            GR = Zt(this.address);
          GR === this.addressKey && JR === this.inSewers || (this.addressKey = GR, this.inSewers = JR, this.publishAddress(this.address))
        }
        var iR, fR, VR;
        const KR = performance.now(),
          wR = function(RR, JR, GR, yR) {
            return !RR || yR || "tile" === JR.kind && "quarry" === JR.district ? 1 : GR || "plot" !== JR.kind && "tile" !== JR.kind ? 0 : 1
          }(this.map.city, this.address, GR, this.inSewers);
        if (this.zoom !== wR) {
          this.reducedMotion ??= window.matchMedia("(prefers-reduced-motion: reduce)");
          const RR = this.reducedMotion.matches ? 1 : 1 - Math.exp(-(KR - this.lastFrameMs) / 150);
          this.zoom += (wR - this.zoom) * (Number.isNaN(RR) ? 1 : RR), Math.abs(wR - this.zoom) < .002 && (this.zoom = wR)
        }
        this.lastFrameMs = KR;
        const rR = (ZR + qR - JR[0]) / qR,
          eR = (JR[2] - ZR) / qR,
          aR = RR.cameraHeading;
        if (this.fullMapOpen) {
          const {
            zoom: RR,
            x: JR,
            y: GR
          } = this.fullMapZoom;
          this.fullMap.write(rR, eR, aR, JR, GR, RR, 0)
        } else if (this.isMapShown()) {
          const RR = Math.exp(this.zoom * this.logLocalScale),
            JR = rR + (.5 - rR) * this.zoom - rR * RR,
            GR = eR + (.5 - eR) * this.zoom - eR * RR;
          this.minimap.write(rR, eR, aR, JR, GR, RR, this.zoom)
        }
      }
      toMapUnits(RR) {
        return (RR - this.map.area.origin) / hG.g.LK
      }
    }
    const bt = uy / hG.g.LK,
      vt = `matrix(-1 0 0 1 ${bt} 0)`,
      Ot = .08,
      xt = [{
        transform: "scaleY(0)"
      }, {
        transform: "scaleY(1)"
      }],
      Nt = [{
        opacity: 1
      }, {
        opacity: 0
      }],
      Dt = {
        quarry: Ky.mining,
        industry: Ky.demolition,
        market: Ky.market,
        lumberMill: Ky.woodcutting,
        farm: Ky.farming,
        dealership: "Light Blue Car"
      },
      Ht = {
        drillBay: Ky.mining,
        vanBay: "Yellow Kart",
        carPickup: "Light Blue Car",
        demolitionPit: Ky.demolition,
        farmField: Ky.farming,
        woods: Ky.woodcutting
      },
      ot = qy.flatMap(((RR, JR) => RR.map(((RR, GR) => ({
        tile: RR,
        x: 1 + 3 * GR,
        z: 1 + 3 * JR
      }))))),
      ct = ot.flatMap((RR => {
        let {
          tile: JR,
          x: GR,
          z: yR
        } = RR;
        return "residential" === JR.kind ? [] : [{
          tile: JR,
          x: GR,
          z: yR
        }]
      })),
      Pt = ot.flatMap((RR => {
        let {
          tile: JR,
          x: GR,
          z: yR
        } = RR;
        return "residential" === JR.kind ? [{
          name: JR.name,
          x: GR,
          z: yR
        }] : []
      })),
      It = [...Rt.eastWest, ...Rt.northSouth],
      mt = {
        "--greenville-sewers-fog": 32 / (2 * uy) * 100 + "%"
      },
      zt = {
        "--greenville-map-tile": 2 / bt * 100 + "cqw"
      };

    function St(RR, JR) {
      return {
        left: (bt - RR) / bt * 100 + "%",
        top: JR / bt * 100 + "%"
      }
    }

    function jt(RR) {
      let {
        axis: JR,
        line: GR
      } = RR;
      const yR = .3,
        tR = 3 * GR + yR,
        uR = bt - .6;
      return "eastWest" === JR ? {
        x: yR,
        y: tR,
        width: uR,
        height: .4
      } : {
        x: tR,
        y: yR,
        width: .4,
        height: uR
      }
    }

    function dt(RR) {
      let {
        controller: JR,
        full: GR = !1
      } = RR;
      const yR = GR ? JR.fullMap : JR.minimap;
      (0, XR.h)(Bt, null), (0, XR.h)(Mt, null);
      const tR = JR.isInSewers(),
        {
          plots: uR,
          animate: ZR
        } = JR.getPlots(),
        {
          city: qR
        } = JR.map;
      return (0, pR.jsxs)("div", {
        className: UR()("GreenvilleNavMap", {
          Full: GR,
          Sewers: tR
        }),
        style: GR ? zt : void 0,
        children: [(0, pR.jsx)("div", {
          className: "GreenvilleNavMapWorld",
          ref: yR.mountWorld,
          children: (0, pR.jsxs)("div", {
            className: "GreenvilleNavMapPlane",
            children: [qR && (0, pR.jsx)("svg", {
              className: "GreenvilleNavMapPlan",
              viewBox: `0 0 ${bt} ${bt}`,
              preserveAspectRatio: "none",
              shapeRendering: "crispEdges",
              children: (0, pR.jsxs)("g", {
                transform: vt,
                children: [(0, pR.jsx)("rect", {
                  className: "GreenvilleNavGround",
                  width: bt,
                  height: bt
                }), It.map((RR => (0, pR.jsx)("rect", {
                  className: "GreenvilleNavRoad",
                  ...jt(RR)
                }, RR.name))), ct.map((RR => {
                  let {
                    tile: JR,
                    x: GR,
                    z: yR
                  } = RR;
                  return (0, pR.jsx)("rect", {
                    className: "GreenvilleNavDistrict",
                    "data-district": JR.district,
                    x: GR,
                    y: yR,
                    width: 2,
                    height: 2
                  }, JR.district)
                })), uR.map((RR => (0, pR.jsx)(kt, {
                  plot: RR,
                  animate: ZR
                }, RR.plotId)))]
              })
            }), (0, pR.jsx)("div", {
              className: "GreenvilleNavMapTerrainHost",
              ref: yR.mountTerrain
            }), qR && (0, pR.jsxs)(pR.Fragment, {
              children: [(0, pR.jsx)("svg", {
                className: "GreenvilleNavMapLots",
                viewBox: `0 0 ${bt} ${bt}`,
                preserveAspectRatio: "none",
                children: (0, pR.jsx)("g", {
                  transform: vt,
                  children: uR.map((RR => (0, pR.jsx)("rect", {
                    className: UR()("GreenvilleNavLot", {
                      Vacant: "vacant" === RR.state,
                      Loading: "loading" === RR.state,
                      Mine: RR.mine
                    }),
                    x: RR.chunkX + Ot,
                    y: RR.chunkZ + Ot,
                    width: .84,
                    height: .84
                  }, RR.plotId)))
                })
              }), tR && (0, pR.jsx)("img", {
                className: "GreenvilleNavSewers",
                src: Kt,
                alt: "",
                draggable: !1
              }), ct.map((RR => {
                let {
                  tile: JR,
                  x: GR,
                  z: yR
                } = RR;
                const tR = Dt[JR.district];
                return tR && (0, pR.jsx)("span", {
                  className: "GreenvilleNavPin GreenvilleNavLandmark",
                  style: St(GR + 1, yR + 1),
                  children: (0, pR.jsx)(CR.b, {
                    itemName: tR,
                    amount: 0
                  })
                }, JR.district)
              })), GR && (0, pR.jsx)(Et, {}), (0, pR.jsx)(Yt, {
                controller: JR
              })]
            }), (0, pR.jsxs)("div", {
              className: "GreenvilleNavArrowTrack",
              ref: yR.mountArrow,
              children: [tR && (0, pR.jsx)("div", {
                className: "GreenvilleNavSewersFog",
                style: mt
              }), (0, pR.jsx)("div", {
                className: "GreenvilleNavArrow",
                children: (0, pR.jsx)("svg", {
                  viewBox: "-1 -1 2 2",
                  children: (0, pR.jsx)("polygon", {
                    points: "0,-0.8 0.62,0.62 0,0.28 -0.62,0.62"
                  })
                })
              })]
            }), uR.map((RR => RR.mine && (0, pR.jsx)("span", {
              className: "GreenvilleNavPin GreenvilleNavHome",
              style: St(RR.chunkX + .5, RR.chunkZ + ("north" === RR.facing ? 0 : 1)),
              children: (0, pR.jsx)(uJ.d, {
                name: "house"
              })
            }, RR.plotId)))]
          })
        }), !GR && (0, pR.jsx)("div", {
          className: "GreenvilleNavGoalTrack",
          ref: JR.minimap.mountGoal,
          children: (0, pR.jsx)("span", {
            className: "GreenvilleNavPin GreenvilleNavGoal",
            children: (0, pR.jsx)(uJ.d, {
              name: "flag"
            })
          })
        })]
      })
    }

    function Et() {
      return (0, pR.jsxs)(pR.Fragment, {
        children: [ct.map((RR => {
          let {
            tile: JR,
            x: GR,
            z: yR
          } = RR;
          return (0, pR.jsx)("span", {
            className: UR()("GreenvilleNavPlaceName SmallTextBold", {
              UnderLandmark: JR.district in Dt
            }),
            style: St(GR + 1, yR + 1),
            children: iy[JR.district]
          }, JR.district)
        })), Pt.map((RR => {
          let {
            name: JR,
            x: GR,
            z: yR
          } = RR;
          return (0, pR.jsx)("span", {
            className: "GreenvilleNavPlaceName Neighbourhood SmallTextLight",
            style: St(GR + 1, yR + 1),
            children: JR
          }, JR)
        }))]
      })
    }

    function Yt(RR) {
      let {
        controller: JR
      } = RR;
      return (0, XR.h)(lt, null), (0, pR.jsx)(pR.Fragment, {
        children: JR.getMarkers().map(((RR, JR) => (0, pR.jsxs)("span", {
          className: "GreenvilleNavPin GreenvilleNavMarker",
          style: St(RR.x, RR.z),
          children: ["npc" === RR.kind && (0, pR.jsx)(wt.d, {
            icon: RR.face
          }), "place" === RR.kind && (0, pR.jsx)(CR.b, {
            itemName: Ht[RR.place],
            amount: 0
          })]
        }, JR)))
      })
    }
    const kt = (0, iR.memo)((function(RR) {
      let {
        plot: JR,
        animate: GR
      } = RR;
      const yR = (0, iR.useRef)(null),
        tR = (0, iR.useRef)(JR.state),
        uR = (0, iR.useRef)(null);
      return (0, iR.useLayoutEffect)((() => {
        var RR;
        const ZR = tR.current;
        tR.current = JR.state, ZR !== JR.state && (null === (RR = uR.current) || void 0 === RR || RR.cancel(), GR && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && ("built" === JR.state ? uR.current = yR.current.animate(xt, {
          duration: 300,
          easing: "ease-out"
        }) : "vacant" === JR.state && (uR.current = yR.current.animate(Nt, {
          duration: 400,
          easing: "ease-in"
        }))))
      }), [JR.state]), (0, iR.useEffect)((() => () => {
        var RR;
        null === (RR = uR.current) || void 0 === RR || RR.cancel()
      }), []), (0, pR.jsxs)(pR.Fragment, {
        children: [(0, pR.jsx)("rect", {
          className: "GreenvilleNavPlotGrass",
          x: JR.chunkX + Ot,
          y: JR.chunkZ + Ot,
          width: .84,
          height: .84
        }), (0, pR.jsx)("rect", {
          ref: yR,
          className: UR()("GreenvilleNavPlotRoof", {
            Loading: "loading" === JR.state,
            Built: "built" === JR.state,
            Mine: JR.mine
          }),
          x: JR.chunkX + Ot,
          y: JR.chunkZ + Ot,
          width: .84,
          height: .84
        })]
      })
    }));

    function Qt(RR) {
      let {
        controller: JR,
        nav: GR
      } = RR;
      const yR = (0, XR.h)(Yy, JR.getView()),
        {
          t: tR
        } = (0, BR.A)(),
        uR = (0, iR.useRef)(null);
      return (0, pR.jsx)(rJ, {
        open: yR.open,
        onDismiss: JR.dismiss,
        title: tR("greenvilleGame:map"),
        className: "GreenvilleMapBoard",
        children: (0, pR.jsxs)("div", {
          ref: uR,
          className: "GreenvilleMapFrame",
          children: [(0, pR.jsx)(dt, {
            controller: GR,
            full: !0
          }), (0, pR.jsx)(Ft, {
            frame: uR,
            nav: GR
          })]
        })
      })
    }

    function Ft(RR) {
      let {
        frame: JR,
        nav: GR
      } = RR;
      const {
        t: yR
      } = (0, BR.A)(), tR = (0, Ty.c)(JR, !0, "", 1);
      return (0, iR.useEffect)((() => {
        GR.setFullMapZoom(tR.view)
      }), [GR, tR.view]), (0, pR.jsx)(Fy.b, {
        zoom: tR,
        zoomInLabel: yR("greenvilleGame:mapZoomIn"),
        zoomOutLabel: yR("greenvilleGame:mapZoomOut")
      })
    }
    var Tt = GR(2186),
      st = GR(1614);

    function ht(RR) {
      let {
        controller: JR,
        onOpen: GR
      } = RR;
      const [yR, tR] = (0, iR.useState)((() => JR.isMapShown()));
      (0, XR.f)(Mt, (() => {
        tR(JR.isMapShown())
      }));
      const uR = (0, zR.c)(),
        {
          isTouchScreen: ZR
        } = (0, WR.o)(["isTouchScreen"]),
        {
          t: qR
        } = (0, BR.A)(),
        [fR, VR] = (0, iR.useState)(null);
      return function(RR) {
        (0, iR.useLayoutEffect)((() => {
          if (!RR) return;
          const JR = RR.closest(".GreenvilleHudColumnStack"),
            GR = new ResizeObserver((() => {
              RR.offsetWidth > 0 && JR.style.setProperty("--greenville-map-width", `${RR.offsetWidth}px`)
            }));
          return GR.observe(RR), () => {
            GR.disconnect()
          }
        }), [RR])
      }(fR), (0, pR.jsx)("div", {
        className: UR()("GreenvilleNavRoom", {
          Hidden: uR || !yR
        }),
        children: (0, pR.jsxs)("button", {
          ref: VR,
          type: "button",
          className: "GreenvilleNav",
          "aria-label": qR("greenvilleGame:map"),
          ...(0, st.f)(GR, "pointerup"),
          onMouseDown: RR => {
            RR.preventDefault()
          },
          children: [(0, pR.jsx)(dt, {
            controller: JR
          }), (0, pR.jsxs)("span", {
            className: "GreenvilleNavOpenHint",
            children: [ZR && (0, pR.jsx)(uJ.d, {
              name: "expand",
              className: "GreenvilleNavExpandIcon"
            }), !ZR && (0, pR.jsx)(Tt.c, {
              noaAction: "OpenTasksAndLeaderboard",
              padHidesKey: !0
            })]
          })]
        })
      })
    }
    const Ru = GR.p + "static/media/greenvilleCity.eadd76d06b8dfb594e19.png",
      Ju = GR.p + "static/media/greenvilleGrove.71253c8c4ae6c9cacba5.png",
      Gu = {
        area: it,
        imageUrl: Ru,
        city: !0
      },
      yu = {
        area: Vt,
        imageUrl: Ju,
        city: !1
      };

    function tu(RR) {
      return RR >= 75 ? "face-smile" : RR >= 50 ? "face-diagonal-mouth" : RR >= 25 ? "face-worried" : "face-dizzy"
    }

    function uu(RR) {
      const JR = Math.round(RR);
      return `${JR>0?"+":""}${JR}%`
    }

    function Zu(RR) {
      let {
        controller: JR
      } = RR;
      (0, XR.h)(kG, null);
      const GR = JR.getMood();
      return GR ? (0, pR.jsx)(AR.d, {
        placement: "statBars",
        children: (0, pR.jsx)(qu, {
          mood: GR
        })
      }) : null
    }

    function qu(RR) {
      let {
        mood: JR
      } = RR;
      const {
        t: GR
      } = (0, BR.A)(), yR = function(RR) {
        const [, JR] = (0, iR.useState)(0);
        return (0, iR.useEffect)((() => {
          const GR = RR - performance.now();
          if (GR <= 0) return;
          const yR = window.setTimeout((() => {
            JR((RR => RR + 1))
          }), GR);
          return () => {
            window.clearTimeout(yR)
          }
        }), [RR]), RR > performance.now()
      }(JR.restedEndsAt), {
        energy: tR,
        breakEvenEnergy: uR,
        luckPercent: ZR
      } = JR, qR = null !== ZR && void 0 !== ZR ? ZR : JR.earningsPercent;
      return (0, pR.jsxs)("div", {
        className: UR()("GreenvilleMoodChip", {
          Exhausted: tR < 25,
          Rested: yR,
          Tired: !yR && tR < uR && tR >= 25,
          Drained: !yR && tR < 25
        }),
        role: "img",
        "aria-label": GR("greenvilleGame:moodEnergyLabel", {
          energy: Math.round(tR)
        }),
        children: [(0, pR.jsx)(uJ.d, {
          name: tu(tR),
          className: "GreenvilleMoodChipFace"
        }), yR && (0, pR.jsx)("span", {
          className: "GreenvilleMoodChipZz",
          children: GR("greenvilleGame:moodRestedGlyph")
        }), (0, pR.jsxs)("div", {
          className: "GreenvilleMoodChipMeter",
          style: {
            "--greenville-break-even": `${uR}%`
          },
          children: [(0, pR.jsx)("div", {
            className: "GreenvilleMoodChipBar",
            children: (0, pR.jsx)("div", {
              className: "GreenvilleMoodChipFill",
              style: {
                transform: `scaleX(${Math.min(100,Math.max(0,tR))/100})`
              }
            })
          }), (0, pR.jsx)("div", {
            className: "GreenvilleMoodChipTick"
          })]
        }), null === ZR && (0, pR.jsx)("span", {
          className: "GreenvilleMoodChipCoin",
          "aria-hidden": "true",
          children: (0, pR.jsx)(CR.b, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), (0, pR.jsxs)("span", {
          className: UR()("GreenvilleMoodChipEarnings", {
            Positive: Math.round(qR) > 0,
            Negative: Math.round(qR) < 0
          }),
          children: [null !== ZR && (0, pR.jsx)("span", {
            className: "GreenvilleMoodChipLuck",
            children: GR("greenvilleGame:luck")
          }), uu(qR)]
        }), JR.adBoosted && (0, pR.jsx)("span", {
          className: "GreenvilleMoodChipBoost",
          children: (0, pR.jsx)(uJ.d, {
            name: "bolt"
          })
        })]
      })
    }

    function iu(RR) {
      let {
        controller: JR
      } = RR;
      (0, XR.h)(YG, null);
      const GR = JR.getPlace();
      return "hudHome" !== (null === GR || void 0 === GR ? void 0 : GR.kind) || null === GR.runStartedAt ? null : (0, pR.jsx)(fu, {
        startedAt: GR.runStartedAt
      })
    }

    function fu(RR) {
      let {
        startedAt: JR
      } = RR;
      const GR = Math.max(0, Math.floor(-(0, Oy.g)(JR)));
      return (0, pR.jsx)("div", {
        className: "GreenvilleMarketCountdown",
        role: "timer",
        children: (0, pR.jsxs)("div", {
          className: "GreenvilleMarketCountdownTime FullyFancyText",
          children: [Math.floor(GR / 60), ":", String(GR % 60).padStart(2, "0")]
        })
      })
    }
    const Vu = "greenvilleSmugglerView",
      Ku = {
        open: !1,
        deals: [],
        soldOutSlots: [],
        rotatesAtMs: 0,
        pending: !1,
        status: null,
        boughtSlot: null,
        boughtCount: 0
      };
    class wu extends JJ {
      constructor(RR, JR, GR, yR, tR) {
        super(Ku, RR, JR), this.onBought = tR, this.purchases = void 0, this.day = 0, this.buy = RR => {
          const JR = this.getView();
          !JR.open || JR.pending || JR.soldOutSlots.includes(RR) || (this.purchases.push([this.day, RR]), this.set({
            ...JR,
            pending: !0
          }))
        }, this.syncPending = () => {
          const RR = this.getView();
          RR.open && this.set({
            ...RR,
            pending: !this.purchases.WK()
          })
        }, this.purchases = new hR(yR, (RR => {
          let [JR, yR] = RR;
          GR(JR, yR)
        }), this.syncPending)
      }
      BK(RR) {
        if ("close" === RR[0]) return void this.close();
        const [, JR, GR, yR, tR, uR] = RR;
        null !== uR && this.purchases.takeAnswer();
        const ZR = this.getView();
        if (null !== uR && !ZR.open) return;
        this.day = JR;
        const [qR, iR] = null !== uR && void 0 !== uR ? uR : [null, null], fR = {
          open: !0,
          deals: GR,
          soldOutSlots: tR,
          rotatesAtMs: Date.now() + yR,
          pending: !this.purchases.WK(),
          status: this.getStatus(qR, iR),
          boughtSlot: qR,
          boughtCount: ZR.boughtCount + (null === qR ? 0 : 1)
        };
        null === uR ? this.show(fR) : this.set(fR), null !== qR && this.onBought()
      }
      dropPresses() {
        this.purchases.clear()
      }
      getStatus(RR, JR) {
        return null !== RR ? {
          tone: "bought",
          key: "greenvilleGame:smugglerBought"
        } : null === JR ? null : {
          tone: "refused",
          key: JR
        }
      }
    }
    var ru = GR(39869);
    const eu = {
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

    function au(RR) {
      let {
        controller: JR
      } = RR;
      const GR = (0, XR.h)(Vu, JR.getView()),
        yR = ER(),
        {
          t: tR
        } = (0, BR.A)();
      return (0, pR.jsx)(ru.e, {
        keys: eu,
        open: GR.open,
        onDismiss: JR.dismiss,
        wallet: [{
          itemName: dR,
          amount: yR
        }],
        deals: GR.deals.map(((RR, JR) => {
          let [tR, uR, ZR] = RR;
          return {
            slot: JR,
            itemName: tR,
            displayName: (0, pR.jsx)(KJ, {
              item: tR
            }),
            enchantmentTier: null,
            amount: uR,
            prices: [{
              itemName: dR,
              amount: ZR,
              owned: yR
            }],
            soldOut: GR.soldOutSlots.includes(JR),
            justBought: GR.boughtSlot === JR
          }
        })),
        rotatesAtMs: GR.rotatesAtMs,
        status: null === GR.status ? null : {
          tone: GR.status.tone,
          text: tR(GR.status.key)
        },
        pending: GR.pending,
        boughtCount: GR.boughtCount,
        onBuy: JR.buy
      })
    }
    const Lu = [{
        transform: "translateY(100%)",
        opacity: 0
      }, {
        transform: "translateY(0)",
        opacity: 1
      }],
      nu = [{
        transform: "translateY(-100%)",
        opacity: 0
      }, {
        transform: "translateY(0)",
        opacity: 1
      }];

    function Uu(RR) {
      return RR ? `${RR.number}|${RR.street.name}` : ""
    }

    function Wu(RR) {
      let {
        address: JR,
        large: GR,
        rootRef: yR
      } = RR;
      const tR = function(RR) {
          switch (RR.kind) {
            case "junction":
              return [{
                street: RR.along,
                number: null
              }, {
                street: RR.cross,
                number: null
              }];
            case "plot":
            case "tile":
              return [{
                street: RR.street,
                number: RR.number
              }, null];
            case "street":
              return [{
                street: RR.street,
                number: RR.block
              }, null]
          }
        }(JR),
        uR = GR && "plot" === JR.kind ? JR.neighbourhood : null,
        ZR = (0, iR.useRef)(null),
        qR = (0, iR.useRef)(null),
        fR = (0, iR.useRef)(tR),
        VR = (0, iR.useRef)({
          large: GR,
          top: 0,
          height: 0
        }),
        KR = (0, iR.useRef)([]),
        wR = (0, iR.useRef)(null);
      (0, iR.useLayoutEffect)((() => {
        const RR = fR.current;
        if (fR.current = tR, window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const JR = [];
        if (Uu(RR[0]) !== Uu(tR[0]) && JR.push(ZR.current.animate(Lu, {
            duration: 180,
            easing: "ease-out"
          })), tR[1] && !RR[1] && JR.push(qR.current.animate(nu, {
            duration: 220,
            easing: "ease-out"
          })), JR.length > 0) {
          for (const RR of KR.current) RR.cancel();
          KR.current = JR
        }
      }), [Uu(tR[0]), Uu(tR[1])]), (0, iR.useLayoutEffect)((() => {
        var RR;
        const JR = yR.current,
          tR = VR.current;
        VR.current = {
          large: GR,
          top: JR.offsetTop,
          height: JR.offsetHeight
        }, tR.large === GR || 0 === tR.height || 0 === JR.offsetHeight || window.matchMedia("(prefers-reduced-motion: reduce)").matches || (null === (RR = wR.current) || void 0 === RR || RR.cancel(), wR.current = JR.animate([{
          transform: `translateY(${tR.top-JR.offsetTop}px) scale(${tR.height/JR.offsetHeight})`
        }, {
          transform: "none"
        }], {
          duration: 260,
          easing: "ease-out"
        }))
      }), [GR, uR, Uu(tR[0]), Uu(tR[1])]), (0, iR.useEffect)((() => {
        const RR = yR.current,
          JR = new ResizeObserver((() => {
            VR.current = {
              ...VR.current,
              top: RR.offsetTop,
              height: RR.offsetHeight
            }
          }));
        return JR.observe(RR.parentElement), () => {
          var RR;
          JR.disconnect();
          for (const JR of KR.current) JR.cancel();
          null === (RR = wR.current) || void 0 === RR || RR.cancel()
        }
      }), [yR]);
      const [rR, eR] = tR;
      return (0, pR.jsxs)("div", {
        ref: yR,
        className: UR()("GreenvilleNavSign", {
          Large: GR
        }),
        children: [(0, pR.jsxs)("div", {
          className: "GreenvilleNavBlade",
          children: [null !== uR && (0, pR.jsx)("span", {
            className: "GreenvilleNavHeader",
            children: uR
          }), (0, pR.jsx)(Au, {
            blade: rR,
            textRef: ZR
          })]
        }), eR && (0, pR.jsx)("div", {
          ref: qR,
          className: "GreenvilleNavBlade",
          children: (0, pR.jsx)(Au, {
            blade: eR
          })
        })]
      })
    }

    function Au(RR) {
      let {
        blade: JR,
        textRef: GR
      } = RR;
      return (0, pR.jsxs)("span", {
        ref: GR,
        className: "GreenvilleNavBladeText",
        children: [null !== JR.number && (0, pR.jsx)("span", {
          className: "GreenvilleNavNumber",
          children: JR.number
        }), (0, pR.jsxs)("span", {
          className: "GreenvilleNavStreet",
          children: [JR.street.shortName, " ", (0, pR.jsx)("span", {
            className: "GreenvilleNavSuffix",
            children: JR.street.suffix
          })]
        })]
      })
    }
    const Cu = "4rem",
      Xu = `translateY(${Cu}) scale(1.4)`,
      Mu = [{
        transform: Xu,
        opacity: 0
      }, {
        transform: Xu,
        opacity: 1,
        offset: .12
      }, {
        transform: Xu,
        opacity: 1,
        offset: .7,
        easing: "ease-in-out"
      }, {
        transform: "none",
        opacity: 1
      }],
      Bu = [{
        opacity: 0
      }, {
        opacity: 1
      }];

    function lu(RR) {
      var JR;
      let {
        controller: GR,
        nav: yR
      } = RR;
      (0, XR.h)(YG, null), (0, XR.h)(Mt, null);
      const {
        t: tR
      } = (0, BR.A)(), uR = (0, zR.c)(), ZR = (0, iR.useRef)(null), qR = (0, iR.useRef)(null), fR = (0, iR.useRef)(null), VR = (0, iR.useRef)(null), KR = (0, iR.useRef)(null), wR = (0, iR.useRef)(null), rR = (0, PJ.i)("hiddenPlayerNames"), eR = GR.getPlace(), aR = yR.getAddress(), LR = yR.isInSewers(), nR = eR && function(RR, JR, GR, yR, tR) {
        if (yR) return {
          key: "sewers",
          name: RR("greenvilleGame:placeSewers"),
          eyebrow: null
        };
        switch (JR.kind) {
          case "hudTown":
            return "city" !== JR.place ? {
              key: JR.place,
              name: RR(`greenvilleGame:${JR.place}`),
              eyebrow: null
            } : "tile" === GR.kind ? {
              key: `place|${iy[GR.district]}`,
              name: iy[GR.district],
              eyebrow: null
            } : "outside" === GR.kind ? {
              key: "city|outside",
              name: RR("greenvilleGame:placeGreenville"),
              eyebrow: null
            } : null;
          case "hudJob": {
            const GR = ry(RR, JR.place);
            return {
              key: `place|${GR}`,
              name: GR,
              eyebrow: null
            }
          }
          case "hudHome": {
            const GR = JR.isOwner ? RR("greenvilleGame:placeYourHouse") : RR("greenvilleGame:homePlayersHouse", {
                player: (0, sG.e)(JR.ownerName, tR)
              }),
              yR = `home|${JR.ownerName}|${JR.houseName}`;
            return null === JR.houseName ? {
              key: yR,
              name: GR,
              eyebrow: null
            } : {
              key: yR,
              name: JR.houseName,
              eyebrow: GR
            }
          }
          case "hudSpleef":
            return {
              key: "spleef", name: RR("greenvilleGame:placeSpleef"), eyebrow: null
            }
        }
      }(tR, eR, aR, LR, rR), UR = nR ? nR.key : null;
      if ((0, iR.useLayoutEffect)((() => {
          var RR, JR, GR, yR;
          if (null === UR) return null === (GR = VR.current) || void 0 === GR || GR.cancel(), void(null === (yR = KR.current) || void 0 === yR || yR.cancel());
          if (ZR.current === UR) return;
          if (ZR.current = UR, uR) return;
          const tR = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          null === (RR = VR.current) || void 0 === RR || RR.cancel(), VR.current = qR.current.animate(tR ? Bu : Mu, {
            duration: tR ? 400 : 2200
          }), null === (JR = KR.current) || void 0 === JR || JR.cancel(), !tR && fR.current && (KR.current = fR.current.animate(function(RR) {
            const JR = `0 calc(${Cu} + ${(1.4-1)*RR}px)`;
            return [{
              translate: "0 0",
              easing: "ease-out"
            }, {
              translate: JR,
              offset: .12
            }, {
              translate: JR,
              offset: .7,
              easing: "ease-in-out"
            }, {
              translate: "0 0"
            }]
          }(qR.current.offsetHeight), {
            duration: 2200
          }))
        }), [UR]), (0, iR.useEffect)((() => () => {
          var RR, JR;
          null === (RR = VR.current) || void 0 === RR || RR.cancel(), null === (JR = KR.current) || void 0 === JR || JR.cancel()
        }), []), !eR) return null;
      let WR = "outside" === aR.kind || LR ? null : aR;
      return !nR || "plot" !== aR.kind && "tile" !== aR.kind ? nR && WR && (null === (JR = wR.current) || void 0 === JR ? void 0 : JR.key) === nR.key && (WR = wR.current.address) : wR.current = {
        key: nR.key,
        address: aR
      }, (0, pR.jsxs)("div", {
        className: "GreenvilleTopBar",
        children: [nR && (0, pR.jsx)(pu, {
          title: nR,
          tagRef: qR,
          job: LR || "hudJob" !== eR.kind ? null : eR,
          home: LR || "hudHome" !== eR.kind ? null : eR,
          sewers: LR
        }), WR && (0, pR.jsx)(Wu, {
          address: WR,
          large: !nR,
          rootRef: fR
        })]
      })
    }

    function pu(RR) {
      let {
        title: JR,
        tagRef: GR,
        job: yR,
        home: tR,
        sewers: uR
      } = RR;
      return (0, pR.jsxs)("div", {
        ref: GR,
        className: UR()("GreenvillePlaceTag", {
          Sewers: uR
        }),
        role: "status",
        children: [null !== JR.eyebrow && (0, pR.jsx)("span", {
          className: "GreenvillePlaceTagEyebrow",
          children: JR.eyebrow
        }), (0, pR.jsx)("strong", {
          className: "GreenvillePlaceTagName",
          children: JR.name
        }), yR && (0, pR.jsx)(gu, {
          job: yR
        }), tR && (0, pR.jsx)(vu, {
          home: tR
        })]
      })
    }

    function gu(RR) {
      let {
        job: JR
      } = RR;
      const {
        t: GR
      } = (0, BR.A)(), {
        level: yR,
        expInto: tR,
        expNeeded: uR
      } = JR, ZR = 0 === uR;
      return (0, pR.jsxs)("div", {
        className: "GreenvillePlaceTagRow",
        children: [(0, pR.jsx)("span", {
          className: "GreenvillePlaceTagJob",
          "aria-hidden": "true",
          children: (0, pR.jsx)(CR.b, {
            itemName: Ky[JR.job],
            amount: 0
          })
        }), (0, pR.jsx)("span", {
          className: "GreenvillePlaceTagLevel",
          children: GR("greenvilleGame:levelShort", {
            level: yR
          })
        }), (0, pR.jsx)("div", {
          className: "GreenvillePlaceTagBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": ZR ? 100 : Math.round(tR / uR * 100),
          children: (0, pR.jsx)("div", {
            className: "GreenvillePlaceTagBarFill",
            style: {
              transform: `scaleX(${ZR?1:Math.min(1,tR/uR)})`
            }
          })
        }), !ZR && (0, pR.jsxs)("span", {
          className: "GreenvillePlaceTagExp",
          children: [(0, IR.i)(tR), "/", (0, IR.i)(uR)]
        }), ZR && (0, pR.jsx)("span", {
          className: "GreenvillePlaceTagMax",
          children: GR("greenvilleGame:levelMax")
        }), null !== JR.status && (0, pR.jsx)(bu, {
          status: JR.status
        })]
      })
    }

    function bu(RR) {
      let {
        status: JR
      } = RR;
      const {
        t: GR
      } = (0, BR.A)();
      switch (JR.kind) {
        case "hudTier":
          return (0, pR.jsxs)("span", {
            className: UR()("GreenvillePlaceChip", {
              Locked: JR.locked
            }),
            children: [JR.locked && (0, pR.jsx)(uJ.d, {
              name: "lock"
            }), GR(`greenvilleGame:${JR.tierKey}`)]
          });
        case "hudBay":
          return (0, pR.jsxs)("span", {
            className: "GreenvillePlaceChip",
            children: [GR("greenvilleGame:demolitionBayObject", {
              material: GR(`greenvilleGame:${JR.materialKey}`),
              object: GR(`greenvilleGame:${JR.objectKey}`)
            }), (0, pR.jsx)("span", {
              className: "GreenvillePlaceChipBar",
              children: (0, pR.jsx)("span", {
                className: "GreenvillePlaceChipBarFill",
                style: {
                  transform: `scaleX(${JR.percent/100})`
                }
              })
            })]
          });
        case "hudBayEmpty":
          return (0, pR.jsx)("span", {
            className: "GreenvillePlaceChip",
            children: GR("greenvilleGame:demolitionYardIncoming")
          });
        case "hudFarmTier":
          return (0, pR.jsx)("span", {
            className: "GreenvillePlaceChip Golden",
            children: GR("greenvilleGame:farmGoldenChance", {
              percent: JR.goldenPercent
            })
          })
      }
    }

    function vu(RR) {
      let {
        home: JR
      } = RR;
      const {
        t: GR
      } = (0, BR.A)();
      return JR.pvp || JR.parkour || !JR.visitorsAllowed ? (0, pR.jsxs)("div", {
        className: "GreenvillePlaceTagRow GreenvillePlaceTagChips",
        children: [JR.pvp && (0, pR.jsx)("span", {
          className: "GreenvillePlaceChip Danger",
          children: GR("greenvilleGame:houseChipPvp")
        }), JR.parkour && (0, pR.jsx)("span", {
          className: "GreenvillePlaceChip",
          children: GR("greenvilleGame:houseChipParkour")
        }), !JR.visitorsAllowed && (0, pR.jsxs)("span", {
          className: "GreenvillePlaceChip Locked",
          children: [(0, pR.jsx)(uJ.d, {
            name: "lock"
          }), GR("greenvilleGame:houseChipVisitorsOff")]
        })]
      }) : null
    }
    const Ou = "greenvilleTutorialView",
      xu = "target",
      Nu = "home",
      Du = `${qR}go`,
      Hu = {
        card: null,
        picker: null,
        homeMarker: !1
      };

    function ou(RR) {
      return null === RR ? "" : "jobs" === RR.kind ? RR.kind : `${RR.owner}|${RR.lineKey}|${RR.action}`
    }
    class cu {
      constructor(RR, JR, GR, yR, tR, uR) {
        this.markers = RR, this.JK = JR, this.send = GR, this.pacer = yR, this.celebrate = tR, this.nav = uR, this.view = Hu, this.picks = void 0, this.waiting = [], this.pressed = new Map, this.moveInTimer = null, this.flushing = !1, this.unsubscribePacer = void 0, this.go = () => {
          this.press(Du)
        }, this.goTo = RR => {
          this.waiting = this.waiting.filter((RR => {
            let {
              command: JR
            } = RR;
            return !JR.startsWith(`${Du} `)
          })), this.press(`${Du} ${RR}`)
        }, this.skip = RR => {
          this.press(`${qR}skip ${RR}`)
        }, this.Ur = RR => {
          const JR = this.view.picker;
          null === JR || JR.movingIn || RR === this.picks.getLatest() || (this.picks.pushLatest(RR), this.set({
            ...this.view,
            picker: {
              ...JR,
              selected: this.picks.getLatest()
            }
          }))
        }, this.moveIn = () => {
          const RR = this.view.picker;
          null === RR || RR.movingIn || (this.queue({
            command: `${qR}movein`,
            picker: !0
          }), this.moveInTimer = setTimeout(this.onMoveInTimedOut, 15e3), this.set({
            ...this.view,
            picker: {
              ...RR,
              movingIn: !0
            }
          }))
        }, this.showLatestPick = () => {
          const RR = this.view.picker;
          null !== RR && this.set({
            ...this.view,
            picker: {
              ...RR,
              selected: this.picks.getLatest()
            }
          })
        }, this.onMoveInTimedOut = () => {
          this.moveInTimer = null;
          const RR = this.view.picker;
          null !== RR && void 0 !== RR && RR.movingIn && (console.warn("Greenville: the server never closed the house picker after Move in"), this.dropPickerPresses(), this.set({
            ...this.view,
            picker: {
              ...RR,
              selected: this.picks.getLatest(),
              movingIn: !1
            }
          }))
        }, this.flush = () => {
          if (!this.flushing) {
            for (this.flushing = !0; this.waiting.length > 0 && this.pacer.tryStart();) this.send(this.waiting.shift().command);
            this.flushing = !1
          }
        }, this.picks = new RJ("", yR, (RR => {
          GR(`${qR}try ${RR}`)
        }), this.showLatestPick), this.unsubscribePacer = yR.subscribe(this.flush)
      }
      getView() {
        return this.view
      }
      BK(RR) {
        switch (RR[0]) {
          case "tutCard": {
            const [, JR, GR, yR, tR, uR, ZR, qR, iR] = RR;
            this.setCard({
              kind: "step",
              owner: JR,
              lineKey: GR,
              byDevice: yR,
              count: tR,
              goal: uR,
              action: ZR,
              target: qR && {
                x: qR[0],
                y: qR[1],
                z: qR[2],
                labelKey: qR[3]
              },
              skippable: iR
            });
            break
          }
          case "tutJobs":
            this.setCard({
              kind: "jobs",
              places: RR[1]
            });
            break;
          case "tutHidden":
            this.setCard(null);
            break;
          case "tutPicker": {
            var JR;
            const [, GR, yR, tR] = RR, uR = this.view.picker;
            tR && this.picks.takeAnswer(), this.picks.confirm(yR), this.set({
              ...this.view,
              picker: {
                houses: GR.map((RR => {
                  let [JR, GR, yR] = RR;
                  return {
                    schemName: JR,
                    icon: GR,
                    titleKey: yR
                  }
                })),
                selected: this.picks.getLatest(),
                movingIn: null !== (JR = null === uR || void 0 === uR ? void 0 : uR.movingIn) && void 0 !== JR && JR
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
            this.celebrate(RR[1], RR[2]);
            break;
          case "tutHomeMarker":
            this.set({
              ...this.view,
              homeMarker: RR[1]
            })
        }
      }
      getTarget() {
        const RR = this.view.card;
        return "step" === (null === RR || void 0 === RR ? void 0 : RR.kind) ? RR.target : null
      }
      getShownHome() {
        if (!this.view.homeMarker) return null;
        const RR = this.nav.getHomeGate(),
          JR = this.getTarget();
        return null === RR || JR && Math.hypot(JR.x - RR[0], JR.z - RR[1]) < 12 ? null : RR
      }
      frame(RR, JR) {
        if (this.markers.setRender(RR), !this.markers.hasMarkers()) return;
        const GR = this.getTarget();
        GR && this.markers.update(xu, GR.x, GR.y + 1, GR.z, JR);
        const yR = JR && this.getShownHome();
        yR && this.markers.update(Nu, yR[0], 2, yR[1], JR)
      }
      dispose() {
        this.dropPickerPresses(), this.forgetPresses(), this.waiting = [], this.unsubscribePacer(), this.markers.dispose()
      }
      setCard(RR) {
        ou(RR) !== ou(this.view.card) && (this.forgetPresses(), this.waiting = this.waiting.filter((RR => {
          let {
            picker: JR
          } = RR;
          return JR
        }))), this.set({
          ...this.view,
          card: RR
        });
        const JR = this.getTarget();
        this.nav.setGoal(JR && {
          x: JR.x,
          z: JR.z
        })
      }
      set(RR) {
        this.view = RR, this.JK(RR)
      }
      press(RR) {
        const JR = this.waiting.some((JR => JR.command === RR));
        this.pressed.has(RR) || JR || (this.pressed.set(RR, setTimeout((() => {
          this.pressed.delete(RR)
        }), 3e3)), this.queue({
          command: RR,
          picker: !1
        }))
      }
      forgetPresses() {
        for (const RR of this.pressed.values()) clearTimeout(RR);
        this.pressed.clear()
      }
      queue(RR) {
        this.waiting.push(RR), this.flush()
      }
      dropPickerPresses() {
        this.picks.clear(), this.waiting = this.waiting.filter((RR => {
          let {
            picker: JR
          } = RR;
          return !JR
        })), null !== this.moveInTimer && (clearTimeout(this.moveInTimer), this.moveInTimer = null)
      }
    }
    const Pu = "GreenvilleHousePickerTitle";

    function Iu() {}

    function mu(RR) {
      let {
        controller: JR
      } = RR;
      (0, XR.h)(Ou, null);
      const GR = JR.getView().picker;
      return (0, pR.jsx)(VJ.e, {
        show: null !== GR,
        forcePointerUnlock: null !== GR,
        close: Iu,
        globallyUniqueKey: "greenvilleHousePicker",
        escDoesExit: !1,
        closeOnPressBackground: !1,
        padBackCloses: !1,
        doGameplayStartStopOnShow: !0,
        cameraKeeper: !0,
        ignorePressesAsShown: !0,
        className: "GreenvilleHousePickerOverlay",
        children: null !== GR && (0, pR.jsx)(zu, {
          picker: GR,
          controller: JR
        })
      })
    }

    function zu(RR) {
      let {
        picker: JR,
        controller: GR
      } = RR;
      const {
        t: yR
      } = (0, BR.A)();
      return (0, pR.jsxs)("section", {
        className: "GreenvilleHousePicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": Pu,
        children: [(0, pR.jsx)("h2", {
          id: Pu,
          className: "GreenvilleHousePickerTitle",
          children: yR("greenvilleGame:tutPickerTitle")
        }), (0, pR.jsx)("div", {
          className: "GreenvilleHousePickerHouses",
          children: JR.houses.map((RR => {
            let {
              schemName: tR,
              icon: uR,
              titleKey: ZR
            } = RR;
            const qR = tR === JR.selected;
            return (0, pR.jsxs)("button", {
              type: "button",
              className: UR()("GreenvilleHousePickerHouse", {
                Selected: qR
              }),
              "aria-pressed": qR,
              disabled: JR.movingIn,
              "data-pad-default-focus": qR || void 0,
              onClick: () => {
                GR.Ur(tR)
              },
              children: [(0, pR.jsx)("img", {
                src: `/textures/games/greenville/${uR}`,
                alt: "",
                draggable: !1
              }), (0, pR.jsx)("span", {
                className: "GreenvilleHousePickerHouseName",
                children: yR(`greenvilleGame:${ZR}`)
              })]
            }, tR)
          }))
        }), (0, pR.jsx)(ZJ.n, {
          className: "GreenvilleHousePickerMoveIn",
          loading: JR.movingIn,
          onClick: GR.moveIn,
          children: yR("greenvilleGame:tutPickerMoveIn")
        })]
      })
    }
    var Su = GR(39664);
    const ju = {
      farm: "farming",
      lumberMill: "woodcutting",
      quarry: "mining",
      marketStreet: "market",
      demolitionYard: "demolition"
    };

    function du(RR) {
      let {
        controller: JR,
        hud: GR
      } = RR;
      (0, XR.h)(Ou, null);
      const yR = JR.getView().card;
      return (0, pR.jsxs)(pR.Fragment, {
        children: ["step" === (null === yR || void 0 === yR ? void 0 : yR.kind) && (0, pR.jsx)(Eu, {
          card: yR,
          controller: JR,
          hud: GR
        }), "jobs" === (null === yR || void 0 === yR ? void 0 : yR.kind) && (0, pR.jsx)(Yu, {
          card: yR,
          controller: JR
        })]
      })
    }

    function Eu(RR) {
      let {
        card: JR,
        controller: GR,
        hud: yR
      } = RR;
      const {
        t: tR
      } = (0, BR.A)(), {
        isTouchScreen: uR
      } = (0, WR.o)(["isTouchScreen"]);
      (0, XR.h)(YG, null);
      const ZR = yR.getPlace(),
        qR = "hudJob" === (null === ZR || void 0 === ZR ? void 0 : ZR.kind) && "quarry" === ZR.place,
        iR = tR(`greenvilleGame:${JR.lineKey}${JR.byDevice&&uR?"Touch":""}`, {
          count: (0, IR.i)(JR.count),
          goal: (0, IR.i)(JR.goal),
          target: JR.target && tR(JR.target.labelKey)
        }),
        fR = JR.goal > 0,
        VR = "go" === JR.action && (0, pR.jsxs)(ZJ.n, {
          className: "GreenvilleTutorialCardGo",
          touchPressOn: "pointerup",
          onClick: GR.go,
          children: [tR("greenvilleGame:tutGo"), !uR && !qR && (0, pR.jsx)(Tt.c, {
            className: "GreenvilleTutorialCardKey",
            noaAction: "SpecialAction2",
            padHidesKey: !0
          })]
        });
      return (0, pR.jsxs)(Qu, {
        heading: (0, pR.jsxs)(pR.Fragment, {
          children: [(0, pR.jsx)("span", {
            className: "GreenvilleTutorialCardLine",
            children: iR
          }), fR && (0, pR.jsxs)("span", {
            className: "GreenvilleTutorialCardCount",
            children: [(0, IR.i)(Math.min(JR.count, JR.goal)), "/", (0, IR.i)(JR.goal)]
          })]
        }),
        compactAction: VR,
        children: [fR && (0, pR.jsx)("div", {
          className: "GreenvilleTutorialCardBar",
          "aria-hidden": "true",
          children: (0, pR.jsx)("span", {
            style: {
              width: `${Math.min(100,100*JR.count/JR.goal)}%`
            }
          })
        }), (VR || JR.skippable) && (0, pR.jsxs)("div", {
          className: "GreenvilleTutorialCardActions",
          children: [VR, JR.skippable && (0, pR.jsx)(ku, {
            owner: JR.owner,
            controller: GR
          })]
        })]
      })
    }

    function Yu(RR) {
      let {
        card: JR,
        controller: GR
      } = RR;
      const {
        t: yR
      } = (0, BR.A)();
      return (0, pR.jsxs)(Qu, {
        heading: (0, pR.jsx)("span", {
          className: "GreenvilleTutorialCardLine",
          children: yR("greenvilleGame:tutJobsTitle")
        }),
        children: [(0, pR.jsx)("ul", {
          className: "GreenvilleTutorialCardJobs",
          children: JR.places.map((RR => (0, pR.jsxs)("li", {
            className: "GreenvilleTutorialCardJob",
            children: [(0, pR.jsx)("span", {
              className: "GreenvilleTutorialCardJobIcon",
              "aria-hidden": "true",
              children: (0, pR.jsx)(CR.b, {
                itemName: Ky[ju[RR]],
                amount: 0
              })
            }), (0, pR.jsx)("span", {
              className: "GreenvilleTutorialCardJobName",
              children: ry(yR, RR)
            }), (0, pR.jsx)(ZJ.n, {
              className: "GreenvilleTutorialCardGo",
              touchPressOn: "pointerup",
              onClick: () => {
                GR.goTo(RR)
              },
              children: yR("greenvilleGame:tutGo")
            })]
          }, RR)))
        }), (0, pR.jsx)("div", {
          className: "GreenvilleTutorialCardActions",
          children: (0, pR.jsx)(ku, {
            owner: "guide",
            controller: GR
          })
        })]
      })
    }

    function ku(RR) {
      let {
        owner: JR,
        controller: GR
      } = RR;
      const {
        t: yR
      } = (0, BR.A)();
      return (0, pR.jsx)(ZJ.i, {
        className: "GreenvilleTutorialCardSkip",
        touchPressOn: "pointerup",
        onClick: () => {
          GR.skip(JR)
        },
        children: yR("guide" === JR ? "greenvilleGame:tutSkip" : "greenvilleGame:tutKnowThis")
      })
    }

    function Qu(RR) {
      let {
        heading: JR,
        compactAction: GR,
        children: yR
      } = RR;
      const tR = (0, Su.f)(),
        [uR, ZR] = (0, iR.useState)(!1),
        qR = tR && !uR;
      return (0, pR.jsxs)("div", {
        className: UR()("GreenvilleTrackerCard GreenvilleTutorialCard", {
          Compact: qR
        }),
        children: [(0, pR.jsxs)("div", {
          className: "GreenvilleTutorialCardHead",
          children: [tR && (0, pR.jsxs)("button", {
            type: "button",
            className: "GreenvilleTutorialCardToggle",
            "aria-expanded": uR,
            ...(0, st.f)((() => {
              ZR(!uR)
            }), "pointerup"),
            children: [JR, (0, pR.jsx)("span", {
              className: "GreenvilleTutorialCardChevron",
              "aria-hidden": "true",
              children: uR ? "\u25b4" : "\u25be"
            })]
          }), !tR && JR, qR && GR]
        }), !qR && yR]
      })
    }

    function Fu(RR) {
      let {
        controller: JR
      } = RR;
      (0, XR.h)(Ou, null), (0, XR.h)(Bt, null);
      const {
        isTouchScreen: GR
      } = (0, WR.o)(["isTouchScreen"]), {
        t: yR
      } = (0, BR.A)(), tR = JR.getTarget(), uR = JR.getShownHome();
      return null === tR && null === uR ? null : (0, pR.jsxs)("div", {
        className: "GreenvilleMarketWaypoints",
        children: [null !== tR && (0, pR.jsx)(Sy, {
          bind: JR.markers.bindMarker(xu),
          house: !0,
          label: yR(tR.labelKey),
          extra: GR && (0, pR.jsx)(uJ.d, {
            name: "hand-back-point-up",
            className: "SmallTextBold TouchTutorialIcon GreenvilleTutorialHand"
          }),
          children: (0, pR.jsx)(uJ.d, {
            name: "flag"
          })
        }), null !== uR && (0, pR.jsx)(Sy, {
          bind: JR.markers.bindMarker(Nu),
          house: !0,
          label: yR("greenvilleGame:tutMarkHome"),
          children: (0, pR.jsx)(uJ.d, {
            name: "house"
          })
        })]
      })
    }
    const Tu = function(RR, JR, GR, tR) {
      let uR, {
        localPlayerId: ZR
      } = tR;
      const qR = new LR((RR => {
          fR.n.JK(aR, RR)
        })),
        nR = new Ay((RR => {
          fR.n.JK(Wy, RR)
        })),
        UR = {
          onGain: () => {
            uR.playSound(ZR, "rpgHandleCoins1", .5, .9 + .3 * Math.random())
          },
          onCoinLanded: (RR, JR) => {
            uR.playSound(ZR, "pickUp", .3, 1 + .5 * RR / Math.max(1, JR - 1))
          }
        },
        WR = [],
        AR = {
          open: RR => {
            for (const JR of WR) JR !== RR && JR.onMenuClosed();
            (0, rR.t)()
          },
          close: rR.h,
          dismiss: rR.j
        },
        CR = new VR.c,
        XR = new uG((RR => {
          fR.n.JK(yG, RR)
        }), AR, (RR => {
          uR.sendCommand(null === RR ? yR : `${yR} ${RR}`)
        }), CR),
        MR = new tJ((RR => {
          fR.n.JK(GJ, RR)
        }), AR, (RR => {
          uR.sendCommand(`demolition pick ${RR}`)
        }), CR),
        BR = new lJ((RR => {
          fR.n.JK(MJ, RR)
        }), AR, (RR => {
          uR.sendCommand(`garage pick ${RR}`)
        }), CR),
        lR = new vy((RR => {
          fR.n.JK(gy, RR)
        })),
        pR = new QG((RR => {
          fR.n.JK(YG, RR)
        }), (RR => {
          fR.n.JK(kG, RR)
        })),
        gR = new gt(function(RR) {
          return "profIsland" === RR ? yu : Gu
        }(GR), (RR => {
          fR.n.JK(Mt, RR)
        }), (RR => {
          fR.n.JK(Bt, RR)
        }), (RR => {
          fR.n.JK(lt, RR)
        })),
        bR = new Qy((RR => {
          fR.n.JK(Yy, RR)
        }), AR, gR);
      let vR = null,
        OR = null;
      const xR = new oJ((RR => {
          fR.n.JK(DJ, RR)
        }), (RR => {
          fR.n.JK(HJ, RR)
        }), AR, (RR => {
          uR.sendCommand(RR)
        }), CR),
        NR = new BG((RR => {
          fR.n.JK(CG, RR)
        }), (RR => {
          fR.n.JK(XG, RR)
        }), AR, (RR => {
          uR.sendCommand(RR)
        }), CR),
        HR = new wu((RR => {
          fR.n.JK(Vu, RR)
        }), AR, ((RR, JR) => {
          uR.sendCommand(`smuggle ${RR} ${JR}`)
        }), CR, (() => {
          (0, KR.e)(uR, ZR)
        }));
      WR.push(XR, MR, BR, xR, NR, HR, bR);
      let oR = null,
        cR = null,
        PR = null;
      return {
        onCreate: RR => {
          uR = RR, gR.start(RR), vR = new Ey(lR), OR = new cu(new eR.e(dy, "greenvilleGame:marketDistance"), (RR => {
            fR.n.JK(Ou, RR)
          }), (JR => {
            RR.sendCommand(JR)
          }), CR, nR.celebrate, gR), oR = (0, rR.G)((0, iR.createElement)(iR.Fragment, null, (0, iR.createElement)(DR, {
            controller: qR
          }), (0, iR.createElement)(By, {
            controller: nR
          }), (0, iR.createElement)(my, {
            market: lR,
            markers: vR
          }), (0, iR.createElement)(Fu, {
            controller: OR
          }), (0, iR.createElement)(mu, {
            controller: OR
          }), (0, iR.createElement)(Ny, {
            controller: lR
          }), (0, iR.createElement)(lu, {
            controller: pR,
            nav: gR
          }), (0, iR.createElement)(Zu, {
            controller: pR
          }), (0, iR.createElement)(ey, {
            controller: pR
          }, (0, iR.createElement)(du, {
            controller: OR,
            hud: pR
          }), (0, iR.createElement)(FR, {
            sounds: UR
          }), (0, iR.createElement)(ht, {
            controller: gR,
            onOpen: bR.open
          }), (0, iR.createElement)(EG, {
            controller: NR
          }), (0, iR.createElement)(Hy, {
            controller: lR
          }), (0, iR.createElement)(GG, {
            controller: xR
          })), (0, iR.createElement)(iu, {
            controller: pR
          })), {
            content: (0, iR.createElement)(iR.Fragment, null, (0, iR.createElement)(fG, {
              controller: XR
            }), (0, iR.createElement)(XJ, {
              controller: MR
            }), (0, iR.createElement)(bJ, {
              controller: BR
            }), (0, iR.createElement)(JG, {
              controller: xR
            }), (0, iR.createElement)(jG, {
              controller: NR
            }), (0, iR.createElement)(au, {
              controller: HR
            }), (0, iR.createElement)(Qt, {
              controller: bR,
              nav: gR
            })),
            onClose: () => {
              for (const RR of WR) RR.onMenuClosed()
            }
          }), cR = (0, rR.B)(bR.open), PR = (0, wR.p)({
            id: "greenvilleMap",
            labelKey: "greenvilleGame:map",
            icon: {
              kind: "item",
              name: "Compass"
            },
            panel: !0,
            onClick: bR.open
          })
        },
        onClose: () => {
          oR(), cR(), PR(), gR.dispose(), XR.dropPresses(), MR.dropPresses(), BR.dropPresses(), vR.waypoints.dispose(), xR.dropPresses(), NR.dropPresses(), OR.dispose(), HR.dropPresses(), CR.dispose()
        },
        onAfterRender: (RR, JR) => {
          const GR = uR.getPositionView(ZR);
          vR.frame(JR, GR), OR.frame(JR, GR), gR.frame(JR, GR, uR.isLocalPlayerInVehicle())
        },
        onReceivedMessageFromServer: (RR, JR) => {
          "greenvilleBackpack" === RR ? qR.BK(JR) : "greenvilleOreBuyer" === RR ? XR.BK(JR) : "greenvilleLumberMill" === RR ? xR.BK(JR) : "greenvilleDemolition" === RR ? MR.BK(JR) : "greenvilleGarage" === RR ? BR.BK(JR) : "greenvilleFarmBoard" === RR ? NR.BK(JR) : "greenvilleSmuggler" === RR ? HR.BK(JR) : "greenvilleMarket" === RR ? lR.BK(JR) : "greenvilleHud" === RR ? pR.BK(JR) : "greenvilleLevelUp" === RR ? nR.BK(JR) : "greenvillePlots" === RR ? gR.BK(JR) : "greenvilleMapMarkers" === RR ? gR.receiveMarkers(JR) : "greenvilleTutorial" === RR && OR.BK(JR)
        }
      }
    }
  },
  40756: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => qR,
      d: () => ZR
    });
    var yR = GR(5844);
    const tR = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      uR = [150, 150, 150],
      ZR = -2147483648;
    class qR {
      constructor(RR) {
        this.averages = RR, this.byId = new Map
      }
      get(RR) {
        var JR, GR, ZR, qR, iR;
        const fR = this.byId.get(RR);
        if (void 0 !== fR) return fR;
        const VR = null !== (JR = null === (GR = yR.l[RR]) || void 0 === GR ? void 0 : GR.name) && void 0 !== JR ? JR : "",
          KR = VR.split("|")[0],
          wR = null !== (ZR = this.averages[VR]) && void 0 !== ZR ? ZR : this.averages[KR],
          rR = null !== (qR = null !== (iR = null === wR || void 0 === wR ? void 0 : wR[0]) && void 0 !== iR ? iR : tR[KR]) && void 0 !== qR ? qR : 0 === (null === wR || void 0 === wR ? void 0 : wR.length) ? null : uR;
        return this.byId.set(RR, rR), rR
      }
      getDrawnIds() {
        const RR = new Uint8Array(65536);
        for (let JR = 1; JR < 65536; JR++) void 0 !== yR.l[JR] && null !== this.get(JR) && (RR[JR] = 1);
        return RR
      }
      drawPixel(RR, JR, GR, yR, tR, uR) {
        const qR = function(RR, JR, GR) {
            const yR = RR - JR + (RR - GR);
            return Math.max(.65, Math.min(1.2, .97 + .055 * yR))
          }(yR, tR === ZR ? yR : tR, uR === ZR ? yR : uR),
          iR = this.get(GR);
        RR[JR] = iR[0] * qR, RR[JR + 1] = iR[1] * qR, RR[JR + 2] = iR[2] * qR, RR[JR + 3] = 255
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);