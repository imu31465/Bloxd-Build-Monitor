export const id = 275;
export const ids = [275];
export const modules = {
  40413: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH,
      g: () => rH,
      h: () => SH
    });
    var AH = LH(45);

    function rH(HH) {
      return tH(HH, zH)
    }

    function SH(HH) {
      return tH(HH, CH)
    }

    function hH(HH) {
      return `${Math.floor(HH/60)}:${String(HH%60).padStart(2,"0")}`
    }

    function tH(HH, BH) {
      const [, LH] = (0, AH.useState)(null);
      return (0, AH.useEffect)((() => {
        if (0 === HH) return;
        const AH = window.setInterval((() => {
          const AH = BH(HH);
          LH((BH => (null === BH || void 0 === BH ? void 0 : BH.endsAt) === HH && BH.value === AH ? BH : {
            endsAt: HH,
            value: AH
          }))
        }), 250);
        return () => {
          window.clearInterval(AH)
        }
      }), [HH, BH]), BH(HH)
    }

    function zH(HH) {
      return (HH - performance.now()) / 1e3
    }

    function CH(HH) {
      return Math.max(0, Math.ceil(zH(HH)))
    }
  },
  40433: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH
    });
    var AH = LH(40437);
    async function rH() {
      const {
        averageColors: HH
      } = await LH.e(228).then((() => LH(35079)));
      return new AH.c(HH)
    }
  },
  40419: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => zH
    });
    var AH = LH(37565),
      rH = LH(1123),
      SH = LH(1194),
      hH = LH(39370),
      tH = LH(39425);
    class zH {
      constructor(HH, BH) {
        var LH;
        this.classes = HH, this.distanceKey = BH, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.Mu = !1, this.Av = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.Av), null === (LH = window.visualViewport) || void 0 === LH || LH.addEventListener("resize", this.Av)
      }
      bindMarker(HH) {
        const BH = this.refs.get(HH);
        if (BH) return BH;
        const LH = BH => {
          var AH;
          null === (AH = this.markers.get(HH)) || void 0 === AH || AH.stopObserving(), this.markers.delete(HH), BH && !this.Mu ? (this.markers.set(HH, this.mount(BH)), this.refs.set(HH, LH)) : this.refs.delete(HH)
        };
        return this.refs.set(HH, LH), LH
      }
      hasMarkers() {
        return this.markers.size > 0
      }
      setRender(HH) {
        this.render = HH
      }
      update(HH, BH, LH, AH, rH) {
        const SH = this.markers.get(HH);
        SH && (SH.target ??= [0, 0, 0], SH.target[0] = BH, SH.target[1] = LH, SH.target[2] = AH, this.place(SH), this.eA(SH, rH && Math.hypot(BH - rH[0], LH - rH[1], AH - rH[2])))
      }
      dispose() {
        var HH;
        this.Mu = !0, window.removeEventListener("resize", this.Av), null === (HH = window.visualViewport) || void 0 === HH || HH.removeEventListener("resize", this.Av);
        for (const BH of this.markers.values()) BH.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(HH) {
        const {
          render: BH,
          viewport: LH
        } = this;
        if (!BH || !HH.target) return;
        const AH = (50 - BH.screenBandPct.y) / 100 * LH.height,
          rH = {
            x: HH.halfSize.width + 8,
            top: HH.halfSize.height + 8,
            bottom: HH.halfSize.height + HH.labelsBelow + AH
          },
          SH = BH.projectWorldPosToViewport(HH.target),
          zH = null !== SH && void 0 !== SH ? SH : BH.projectWorldPosToScreenPos(HH.target),
          CH = (0, tH.e)({
            x: zH.x,
            y: zH.y,
            text: SH
          }, rH, LH);
        (0, hH.d)(HH.root, Math.round(100 * CH.x) / 100, Math.round(100 * CH.y) / 100)
      }
      eA(HH, BH) {
        if (null === BH) return void(null !== HH.metres && (HH.metres = null, HH.distance.textContent = ""));
        const LH = Date.now();
        (null === HH.metres || (0, AH.e)(BH, HH.metres, HH.metresShownAt)) && (HH.metres = Math.round(BH), HH.metresShownAt = LH, HH.distance.textContent = (0, rH.u)(SH.g.get().getCurrentLanguageCode(), this.distanceKey, {
          distance: String(HH.metres)
        }))
      }
      mount(HH) {
        const BH = {
            root: HH,
            distance: HH.querySelector(`.${this.classes.distance}`),
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
          LH = HH.querySelector(`.${this.classes.labels}`),
          AH = new ResizeObserver((() => {
            BH.halfSize = {
              width: Math.max(HH.offsetWidth, LH.offsetWidth) / 2,
              height: HH.offsetHeight / 2
            }, BH.labelsBelow = LH.offsetTop + LH.offsetHeight - HH.offsetHeight, this.place(BH)
          }));
        return AH.observe(HH, {
          box: "border-box"
        }), AH.observe(LH, {
          box: "border-box"
        }), BH.stopObserving = () => {
          AH.disconnect()
        }, BH
      }
    }
  },
  40428: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => ar
    });
    const AH = "ore sell",
      rH = "lumber ",
      SH = "farm ",
      hH = ["market", "demolition", "mining", "woodcutting", "farming"];
    var tH = LH(45),
      zH = LH(18),
      CH = LH(39461),
      EH = LH(37474);
    const XH = "greenvilleBackpackView";
    class GH {
      constructor(HH) {
        this.AX = HH, this.view = null, this.arrivalToken = 0, this.showToken = 0
      }
      getView() {
        return this.view
      }
      kX(HH) {
        if ("hide" === HH[0]) this.view = null;
        else if ("show" === HH[0]) {
          const BH = HH[3];
          this.view = {
            aX: HH[1],
            shardsPerItem: HH[2],
            total: BH.reduce(((HH, BH) => {
              let [, LH] = BH;
              return HH + LH
            }), 0),
            contents: BH,
            arrival: null,
            showToken: ++this.showToken
          }
        } else {
          if (null === this.view) return void console.warn(`[greenville] backpack ${HH[0]} with no backpack shown`);
          {
            var BH, LH;
            const AH = HH[1],
              rH = this.view.contents.find((HH => {
                let [BH] = HH;
                return BH === AH
              })),
              SH = this.view.contents.filter((HH => {
                let [BH] = HH;
                return BH !== AH
              })),
              hH = null !== (BH = null === rH || void 0 === rH ? void 0 : rH[1]) && void 0 !== BH ? BH : 0,
              tH = null !== (LH = null === rH || void 0 === rH ? void 0 : rH[2]) && void 0 !== LH ? LH : 0;
            "shard" === HH[0] ? this.view = {
              ...this.view,
              contents: [...SH, [AH, hH, tH + 1]]
            } : this.view = {
              ...this.view,
              total: this.view.total + 1,
              contents: [...SH, [AH, hH + 1, 0]],
              arrival: {
                item: AH,
                token: ++this.arrivalToken,
                fromShards: tH > 0
              }
            }
          }
        }
        this.AX(this.view)
      }
    }
    var YH = LH(1038),
      uH = LH.n(YH),
      QH = LH(15),
      WH = LH(37472),
      MH = LH(1986),
      xH = LH(1450),
      vH = LH(2064),
      PH = LH(1123);
    const TH = "data:image/png;base64,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";
    var UH = LH(1225);
    const VH = (0, tH.forwardRef)((function(HH, BH) {
      let {
        contents: LH,
        aX: AH,
        full: rH,
        children: SH
      } = HH;
      const hH = [...LH].sort(((HH, BH) => {
        let [LH] = HH, [AH] = BH;
        return LH.localeCompare(AH)
      }));
      let tH = 0;
      return (0, UH.jsxs)("div", {
        ref: BH,
        className: "GreenvilleBackpackBag",
        children: [SH, (0, UH.jsx)("img", {
          className: uH()("GreenvilleBackpackArt", {
            Full: rH
          }),
          src: TH,
          alt: "",
          draggable: !1
        }), (0, UH.jsx)("div", {
          className: "GreenvilleBackpackWindow",
          children: hH.map((HH => {
            let [BH, LH] = HH;
            const rH = Math.min(1 - tH, LH / AH),
              SH = (0, UH.jsx)(bH, {
                item: BH,
                below: tH,
                share: rH
              }, BH);
            return tH += rH, SH
          }))
        })]
      })
    }));

    function OH() {
      const HH = new Image;
      HH.src = TH, HH.decode().catch((HH => {
        console.error("[greenville] backpack art failed to load", HH)
      }))
    }
    const bH = (0, tH.memo)((function(HH) {
        let {
          item: BH,
          below: LH,
          share: AH
        } = HH;
        return (0, UH.jsx)("div", {
          className: "GreenvilleBackpackOre",
          style: {
            bottom: `calc(var(--rise) * ${LH})`,
            height: `calc(var(--rise) * ${AH} + var(--slant))`
          },
          children: Array.from({
            length: 18
          }, ((HH, LH) => (0, UH.jsx)("div", {
            className: "GreenvilleBackpackOreTile",
            children: (0, UH.jsx)(MH.e, {
              itemName: BH,
              amount: 0
            })
          }, LH)))
        })
      })),
      kH = [{
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
      mH = [{
        transform: "scale(1.3)"
      }, {
        transform: "scale(1)"
      }];
    let oH = 1;

    function IH(HH) {
      let {
        controller: BH
      } = HH;
      (0, xH.e)(XH, null), (0, tH.useEffect)(OH, []);
      const LH = BH.getView();
      return null === LH ? null : (0, UH.jsx)(WH.e, {
        placement: "bottomLeft",
        children: (0, UH.jsx)(fH, {
          view: LH
        })
      })
    }

    function fH(HH) {
      let {
        view: BH
      } = HH;
      const {
        t: LH
      } = (0, PH.B)(), {
        isTouchScreen: AH
      } = (0, QH.m)(["isTouchScreen"]), [rH, SH] = (0, tH.useState)([]), hH = (0, tH.useRef)(null), zH = (0, tH.useRef)(null), CH = (0, tH.useRef)([]), EH = (0, tH.useRef)({
        arrival: BH.arrival,
        showToken: BH.showToken
      }), {
        arrival: XH,
        showToken: GH
      } = BH;
      (0, tH.useLayoutEffect)((() => {
        var HH;
        if (GH !== EH.current.showToken) SH([]);
        else if (null !== XH && XH.token !== (null === (HH = EH.current.arrival) || void 0 === HH ? void 0 : HH.token) && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          const HH = {
            id: oH++,
            item: XH.item,
            fromShards: XH.fromShards,
            driftEm: 1.4 * (Math.random() - .5),
            spinDeg: 70 * (Math.random() - .5)
          };
          SH((BH => BH.length < 6 ? [...BH, HH] : BH))
        }
        EH.current = {
          arrival: XH,
          showToken: GH
        }
      }), [XH, GH]), (0, tH.useEffect)((() => () => {
        for (const HH of CH.current) HH.cancel()
      }), []);
      const YH = (0, tH.useCallback)((() => {
          for (const HH of CH.current) HH.cancel();
          CH.current = [hH.current.animate(kH, {
            duration: 300,
            easing: "ease-out"
          }), zH.current.animate(mH, {
            duration: 220,
            easing: "ease-out"
          })]
        }), []),
        WH = (0, tH.useCallback)((HH => {
          SH((BH => BH.filter((BH => BH.id !== HH)))), YH()
        }), [YH]),
        xH = BH.total - rH.length,
        TH = xH >= BH.aX,
        OH = BH.contents.map((HH => {
          let [LH, AH, SH] = HH;
          const hH = rH.filter((HH => HH.item === LH)),
            tH = hH.some((HH => HH.fromShards));
          return [LH, AH - hH.length, tH ? BH.shardsPerItem : SH]
        })),
        bH = OH.filter((HH => {
          let [, BH, LH] = HH;
          return BH > 0 || LH > 0
        })).reverse().slice(0, 4),
        IH = (0, vH.r)("SpecialAction2");
      return (0, UH.jsxs)("div", {
        className: "GreenvilleBackpack",
        children: [(0, UH.jsxs)("div", {
          className: "GreenvilleBackpackCount SmallTextBold",
          children: [(0, UH.jsx)("span", {
            ref: zH,
            className: uH()("GreenvilleBackpackTotal", {
              Full: TH
            }),
            children: xH
          }), (0, UH.jsxs)("span", {
            className: "GreenvilleBackpackCapacity",
            children: ["/ ", BH.aX]
          })]
        }), (0, UH.jsxs)("div", {
          className: "GreenvilleBackpackRow",
          children: [(0, UH.jsx)(VH, {
            ref: hH,
            contents: OH,
            aX: BH.aX,
            full: TH,
            children: rH.map((HH => (0, UH.jsx)(KH, {
              drop: HH,
              onLanded: WH
            }, HH.id)))
          }), (0, UH.jsxs)("div", {
            className: "GreenvilleBackpackInfo",
            children: [bH.length > 0 && (0, UH.jsx)("div", {
              className: "GreenvilleBackpackTallies",
              children: bH.map((HH => {
                let [LH, AH, rH] = HH;
                return (0, UH.jsxs)("div", {
                  className: "GreenvilleBackpackTally",
                  children: [(0, UH.jsx)("div", {
                    className: "GreenvilleBackpackTallyIcon",
                    children: (0, UH.jsx)(MH.e, {
                      itemName: LH,
                      amount: 0
                    })
                  }), AH > 0 && (0, UH.jsxs)("span", {
                    className: "SmallTextBold",
                    children: ["\xd7", AH]
                  }), rH > 0 && (0, UH.jsx)(lH, {
                    shards: rH,
                    shardsPerItem: BH.shardsPerItem
                  })]
                }, LH)
              }))
            }), TH && (0, UH.jsxs)("div", {
              className: "GreenvilleBackpackFullLine",
              role: "status",
              children: [(0, UH.jsx)("span", {
                className: "GreenvilleBackpackFullTitle SmallTextBold",
                children: LH("greenvilleGame:backpackFull")
              }), AH && (0, UH.jsx)("span", {
                className: "SmallTextLight",
                children: LH("greenvilleGame:backpackReturnTouch")
              }), !AH && null !== IH && (0, UH.jsx)("span", {
                className: "SmallTextLight",
                children: LH("greenvilleGame:backpackReturnDesktop", {
                  key: (0, vH.p)(IH)
                })
              })]
            })]
          })]
        })]
      })
    }

    function lH(HH) {
      let {
        shards: BH,
        shardsPerItem: LH
      } = HH;
      return (0, UH.jsx)("div", {
        className: "GreenvilleBackpackShards",
        children: Array.from({
          length: LH
        }, ((HH, LH) => (0, UH.jsx)("span", {
          className: uH()("GreenvilleBackpackShard", {
            Filled: LH < BH
          })
        }, LH)))
      })
    }

    function KH(HH) {
      let {
        drop: BH,
        onLanded: LH
      } = HH;
      const AH = (0, tH.useRef)(null);
      return (0, tH.useLayoutEffect)((() => {
        const {
          driftEm: HH,
          spinDeg: rH
        } = BH, SH = AH.current.animate([{
          transform: `translate(${HH}em, -3.2em) rotate(${rH}deg) scale(1.2)`,
          opacity: 0
        }, {
          transform: `translate(${.7*HH}em, -2.4em) rotate(${.7*rH}deg) scale(1.1)`,
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
        return SH.onfinish = () => {
          LH(BH.id)
        }, () => {
          SH.onfinish = null, SH.cancel()
        }
      }), [BH, LH]), (0, UH.jsx)("div", {
        ref: AH,
        className: "GreenvilleBackpackFalling",
        children: (0, UH.jsx)(MH.e, {
          itemName: BH.item,
          amount: 0
        })
      })
    }
    var cH = LH(69),
      eH = LH(35008),
      qH = LH(2628),
      gH = LH(2817);
    const NH = [{
        transform: "scale(1.18)"
      }, {
        transform: "scale(1)"
      }],
      RH = [{
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
    let jH = 1,
      nH = null;

    function FH(HH) {
      var BH;
      let {
        sounds: LH
      } = HH;
      const AH = null === (BH = (0, qH.j)("currencyAmounts")) || void 0 === BH ? void 0 : BH.gold;
      return !AH || AH.hidden ? null : (0, UH.jsx)(DH, {
        gold: AH.amount,
        sounds: LH
      })
    }

    function DH(HH) {
      let {
        gold: BH,
        sounds: LH
      } = HH;
      const AH = (0, gH.b)(),
        [rH, SH] = (0, tH.useState)([]),
        hH = (0, tH.useRef)(null),
        zH = (0, tH.useRef)(null),
        CH = (0, tH.useRef)(null),
        EH = (0, tH.useRef)(BH);
      (0, tH.useLayoutEffect)((() => {
        const HH = BH - EH.current;
        if (EH.current = BH, !(HH <= 0) && (LH.onGain(), !AH && !window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
          const BH = function(HH) {
            const BH = Math.max(1, Math.min(8, Math.floor(HH))),
              LH = Math.floor(HH / BH),
              AH = [];
            for (let rH = 0; rH < BH; rH++) {
              const SH = -Math.PI / 2 + (1 === BH ? 0 : 2.4 * (rH / (BH - 1) - .5)) + .3 * (Math.random() - .5),
                hH = 40 + 35 * Math.random();
              AH.push({
                id: jH++,
                burst: {
                  x: Math.cos(SH) * hH,
                  y: Math.sin(SH) * hH
                },
                gold: rH === BH - 1 ? HH - LH * (BH - 1) : LH,
                delayMs: 45 * rH,
                step: rH,
                steps: BH
              })
            }
            return AH
          }(HH);
          SH((HH => [...HH, ...BH.slice(0, Math.max(0, 24 - HH.length))]))
        }
      }), [BH]), (0, tH.useEffect)((() => () => {
        var HH;
        null === (HH = CH.current) || void 0 === HH || HH.cancel()
      }), []);
      const XH = (0, tH.useCallback)((HH => {
          LH.onCoinLanded(HH.step, HH.steps), SH((BH => BH.filter((BH => {
            let {
              id: LH
            } = BH;
            return LH !== HH.id
          }))))
        }), [LH]),
        GH = rH.length,
        YH = (0, tH.useRef)(GH);
      (0, tH.useEffect)((() => {
        var HH, BH;
        GH < YH.current && (null === (HH = CH.current) || void 0 === HH || HH.cancel(), CH.current = (null !== (BH = nH) && void 0 !== BH ? BH : hH.current).animate(0 === GH ? RH : NH, {
          duration: 0 === GH ? 380 : 160,
          easing: "ease-out"
        }));
        YH.current = GH
      }), [GH]);
      const uH = rH.reduce(((HH, BH) => HH + BH.gold), 0);
      return (0, UH.jsxs)(UH.Fragment, {
        children: [(0, UH.jsx)("div", {
          className: "GreenvilleGoldPurse",
          children: (0, UH.jsxs)("div", {
            ref: hH,
            className: "GreenvilleGoldPurseBody",
            children: [(0, UH.jsx)("span", {
              ref: zH,
              className: "GreenvilleGoldPurseIcon",
              children: (0, UH.jsx)(MH.e, {
                itemName: "Gold Coin",
                amount: 0
              })
            }), (0, UH.jsx)("span", {
              className: "GreenvilleGoldPurseAmount SmallTextBold",
              children: (0, eH.f)(Math.max(0, BH - uH))
            })]
          })
        }), (0, cH.createPortal)(rH.map((HH => (0, UH.jsx)(wH, {
          coin: HH,
          target: zH,
          onLanded: XH
        }, HH.id))), document.body)]
      })
    }

    function wH(HH) {
      let {
        coin: BH,
        target: LH,
        onLanded: AH
      } = HH;
      const rH = (0, tH.useRef)(null);
      return (0, tH.useEffect)((() => {
        var HH;
        const SH = (null !== (HH = nH) && void 0 !== HH ? HH : LH.current).getBoundingClientRect(),
          {
            burst: hH
          } = BH,
          tH = window.innerWidth / 2,
          zH = window.innerHeight / 2,
          CH = SH.left + SH.width / 2,
          EH = SH.top + SH.height / 2,
          XH = rH.current.animate([{
            transform: `translate(${tH}px, ${zH}px) scale(0.3)`,
            opacity: 0,
            easing: "ease-out"
          }, {
            transform: `translate(${tH+.7*hH.x}px, ${zH+.7*hH.y}px) scale(1.25)`,
            opacity: 1,
            offset: .15,
            easing: "ease-out"
          }, {
            transform: `translate(${tH+hH.x}px, ${zH+hH.y}px) scale(1)`,
            offset: .35,
            easing: "ease-in-out"
          }, {
            transform: `translate(${tH+hH.x}px, ${zH+hH.y+6}px) scale(1)`,
            offset: .45,
            easing: "cubic-bezier(0.55, 0, 1, 0.45)"
          }, {
            transform: `translate(${CH}px, ${EH}px) scale(0.6)`,
            opacity: 1
          }], {
            duration: 950,
            delay: BH.delayMs,
            fill: "both"
          });
        return XH.onfinish = () => {
          AH(BH)
        }, () => {
          XH.onfinish = null, XH.cancel()
        }
      }), [BH, LH, AH]), (0, UH.jsx)("div", {
        ref: rH,
        className: "GreenvilleGoldCoin",
        children: (0, UH.jsx)(MH.e, {
          itemName: "Gold Coin",
          amount: 0
        })
      })
    }
    class ZH {
      constructor(HH, BH, LH) {
        this.pacer = HH, this.send = BH, this.onAnswersTimedOut = LH, this.queued = [], this.unanswered = [], this.answerTimer = null, this.flushing = !1, this.flush = () => {
          if (!this.flushing) {
            this.flushing = !0;
            try {
              for (; this.queued.length > 0 && this.pacer.tryStart();) {
                const HH = this.queued.shift();
                this.unanswered.push(HH), this.answerTimer ??= setTimeout(this.onAnswerTimeout, 15e3), this.send(HH)
              }
            } finally {
              this.flushing = !1
            }
          }
        }, this.onAnswerTimeout = () => {
          this.answerTimer = null, this.unanswered = [], this.onAnswersTimedOut()
        }, HH.subscribe(this.flush)
      }
      getPending() {
        return [...this.unanswered, ...this.queued]
      }
      TX() {
        return 0 === this.unanswered.length && 0 === this.queued.length
      }
      getLastSent() {
        return this.unanswered.at(-1)
      }
      getLastPending() {
        var HH;
        return null !== (HH = this.queued.at(-1)) && void 0 !== HH ? HH : this.unanswered.at(-1)
      }
      push(HH) {
        this.queued.push(HH), this.flush()
      }
      dropWaiting() {
        const HH = this.queued.length > 0;
        return this.queued = [], HH
      }
      takeAnswer() {
        var HH;
        const BH = null !== (HH = this.unanswered.shift()) && void 0 !== HH ? HH : null;
        return this.stopAnswerTimer(), this.unanswered.length > 0 && (this.answerTimer = setTimeout(this.onAnswerTimeout, 15e3)), BH
      }
      clear() {
        this.queued = [], this.unanswered = [], this.stopAnswerTimer()
      }
      stopAnswerTimer() {
        null !== this.answerTimer && (clearTimeout(this.answerTimer), this.answerTimer = null)
      }
    }
    class dH {
      constructor(HH, BH, LH, AH) {
        this.confirmed = HH, this.picks = void 0, this.picks = new ZH(BH, LH, AH)
      }
      confirm(HH) {
        this.confirmed = HH
      }
      getLastPending() {
        return this.picks.getLastPending()
      }
      getLatest() {
        var HH;
        return null !== (HH = this.getLastPending()) && void 0 !== HH ? HH : this.confirmed
      }
      TX() {
        return this.picks.TX()
      }
      pushLatest(HH) {
        var BH;
        const LH = null !== (BH = this.picks.getLastSent()) && void 0 !== BH ? BH : this.confirmed;
        this.picks.dropWaiting() && HH === LH || this.picks.push(HH)
      }
      takeAnswer() {
        this.picks.takeAnswer()
      }
      clear() {
        this.picks.clear()
      }
    }
    class aH {
      constructor(HH, BH, LH) {
        this.closed = HH, this.AX = BH, this.menu = LH, this.view = void 0, this.dismiss = () => {
          this.closePanel() && this.menu.dismiss()
        }, this.onMenuClosed = () => {
          this.closePanel()
        }, this.view = HH
      }
      getView() {
        return this.view
      }
      show(HH) {
        this.set(HH), this.menu.open(this)
      }
      close() {
        this.closePanel() && this.menu.close()
      }
      set(HH) {
        this.view = HH, this.AX(HH)
      }
      closePanel() {
        return !!this.view.open && (this.dropPresses(), this.set(this.closed), !0)
      }
    }
    const sH = "greenvilleDepotView",
      JH = {
        open: !1,
        explosives: [],
        picked: 0,
        selected: 0,
        level: 1,
        line: "demolitionDepotIntro"
      };
    class iH extends aH {
      constructor(HH, BH, LH, AH) {
        super(JH, HH, BH), this.picks = void 0, this.select = HH => {
          this.set({
            ...this.getView(),
            selected: HH
          })
        }, this.XY = HH => {
          const BH = this.getView();
          HH !== BH.picked && (this.picks.pushLatest(HH), this.set({
            ...BH,
            picked: HH,
            line: "demolitionGrubnikPicked"
          }))
        }, this.onAnswersTimedOut = () => {
          const HH = this.getView();
          HH.open && this.set({
            ...HH,
            picked: this.picks.getLatest()
          })
        }, this.picks = new dH(0, AH, LH, this.onAnswersTimedOut)
      }
      kX(HH) {
        if ("openDepot" === HH[0]) {
          const BH = HH[4];
          BH && this.picks.takeAnswer();
          const LH = this.getView();
          if (BH && !LH.open) return;
          this.picks.confirm(HH[2]);
          const AH = this.picks.getLatest(),
            rH = !LH.open;
          this.show({
            open: !0,
            explosives: HH[1],
            picked: AH,
            selected: rH ? AH : LH.selected,
            level: HH[3],
            line: rH ? "demolitionDepotIntro" : LH.line
          })
        } else "closeDepot" !== HH[0] && "hide" !== HH[0] || this.close()
      }
      dropPresses() {
        this.picks.clear()
      }
    }
    var pH = LH(1315),
      yH = LH(1455),
      HB = LH(35006),
      BB = LH(3639),
      LB = LH(1967),
      AB = LH(4941);

    function rB(HH) {
      var BH;
      let {
        item: LH,
        className: AH
      } = HH;
      return (0, UH.jsx)(LB.b, {
        className: AH,
        text: null !== (BH = (0, HB.displayNameOf)((0, BB.e)(LH))) && void 0 !== BH ? BH : LH
      })
    }

    function SB(HH) {
      let {
        item: BH
      } = HH;
      return (0, UH.jsx)(MH.e, {
        itemName: BH,
        amount: 0
      })
    }

    function hB(HH) {
      let {
        open: BH,
        onDismiss: LH,
        title: AH,
        className: rH,
        headerExtra: SH,
        tabs: hH,
        status: tH,
        children: zH
      } = HH;
      const CH = `${rH}Title`;
      return (0, UH.jsx)(AB.b, {
        show: BH,
        close: LH,
        togglePointerLock: !1,
        ignorePressesAsShown: !0,
        className: "GreenvilleBoardOverlay",
        children: (0, UH.jsxs)("section", {
          className: uH()("GreenvilleBoard", rH),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": CH,
          children: [(0, UH.jsxs)("header", {
            className: "GreenvilleBoardHeader",
            children: [(0, UH.jsx)("h2", {
              id: CH,
              className: "VisuallyHidden",
              children: AH
            }), SH, (0, UH.jsx)(yH.q, {
              onClick: LH
            })]
          }), hH, (0, UH.jsx)("div", {
            className: "GreenvilleBoardBody",
            children: zH
          }), (0, UH.jsxs)("footer", {
            className: "GreenvilleBoardStatus",
            children: [(0, UH.jsx)("span", {
              className: "GreenvilleBoardSpeaker",
              children: tH.speaker
            }), tH.line]
          })]
        })
      })
    }

    function tB(HH) {
      let {
        tabs: BH,
        selected: LH,
        onSelect: AH
      } = HH;
      return (0, UH.jsx)("nav", {
        className: "GreenvilleBoardTabs",
        "data-pad-tabs": "1",
        children: BH.map((HH => {
          const BH = HH.id === LH;
          return (0, UH.jsxs)("button", {
            type: "button",
            className: uH()("GreenvilleBoardTab", {
              Selected: BH
            }),
            "aria-pressed": BH,
            "data-pad-tab": !0,
            "data-pad-selected": BH ? "true" : void 0,
            onClick: () => {
              AH(HH.id)
            },
            children: [HH.label, HH.badge]
          }, HH.id)
        }))
      })
    }

    function zB(HH) {
      let {
        className: BH,
        roomy: LH = !1,
        children: AH
      } = HH;
      return (0, UH.jsx)("div", {
        className: uH()("GreenvilleBoardTiles", BH, {
          Roomy: LH
        }),
        style: LH ? {
          "--tile-columns": (rH = tH.Children.count(AH), rH <= 3 ? rH : Math.min(4, Math.ceil(rH / 2)))
        } : void 0,
        "data-pad-select-on-focus": !0,
        children: AH
      });
      var rH
    }

    function CB(HH) {
      let {
        icon: BH,
        name: LH,
        selected: AH,
        locked: rH = !1,
        className: SH,
        onSelect: hH,
        children: tH
      } = HH;
      return (0, UH.jsxs)("button", {
        type: "button",
        className: uH()("GreenvilleBoardTile", SH, {
          Selected: AH,
          Locked: rH
        }),
        "aria-pressed": AH,
        "data-pad-default-focus": AH || void 0,
        onClick: hH,
        children: [(0, UH.jsx)("span", {
          className: "GreenvilleBoardTileIcon",
          children: BH
        }), (0, UH.jsx)("span", {
          className: "GreenvilleBoardTileName",
          children: LH
        }), tH]
      })
    }

    function EB(HH) {
      let {
        icon: BH,
        name: LH,
        badges: AH,
        children: rH
      } = HH;
      return (0, UH.jsxs)("section", {
        className: "GreenvilleBoardDetail",
        children: [(0, UH.jsxs)("header", {
          className: "GreenvilleBoardDetailHeader",
          children: [(0, UH.jsx)("span", {
            className: "GreenvilleBoardDetailHero",
            children: (0, UH.jsx)("span", {
              className: "GreenvilleBoardDetailIcon",
              children: BH
            })
          }), (0, UH.jsxs)("div", {
            className: "GreenvilleBoardDetailHeading",
            children: [(0, UH.jsx)("h3", {
              children: LH
            }), AH && (0, UH.jsx)("span", {
              className: "GreenvilleBoardDetailBadges",
              children: AH
            })]
          })]
        }), rH]
      })
    }

    function XB(HH) {
      let {
        level: BH
      } = HH;
      const {
        t: LH
      } = (0, PH.B)();
      return (0, UH.jsxs)("span", {
        className: "GreenvilleBoardBadge Muted",
        children: [(0, UH.jsx)(pH.c, {
          name: "lock"
        }), LH("greenvilleGame:boardLevelBadge", {
          level: BH
        })]
      })
    }

    function GB() {
      const {
        t: HH
      } = (0, PH.B)();
      return (0, UH.jsx)("span", {
        className: "GreenvilleBoardBadge",
        children: HH("greenvilleGame:demolitionDepotPicked")
      })
    }

    function YB(HH) {
      let {
        line: BH,
        picked: LH,
        level: AH
      } = HH;
      const rH = BH[3];
      return (0, UH.jsxs)(UH.Fragment, {
        children: [LH && (0, UH.jsx)(GB, {}), rH > AH && (0, UH.jsx)(XB, {
          level: rH
        })]
      })
    }

    function uB(HH) {
      let {
        view: BH,
        controller: LH
      } = HH;
      const {
        t: AH
      } = (0, PH.B)(), rH = BH.selected, SH = BH.explosives[rH], [hH, tH, zH, CH, EH] = SH, XH = rH === BH.picked, GH = CH > BH.level;
      return (0, UH.jsxs)(EB, {
        icon: (0, UH.jsx)(SB, {
          item: hH
        }),
        name: AH(`greenvilleGame:${tH}`),
        badges: GH && (0, UH.jsx)(XB, {
          level: CH
        }),
        children: [(0, UH.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: AH(`greenvilleGame:${zH}`)
        }), (0, UH.jsx)("p", {
          className: "GreenvilleDepotStencil",
          children: AH("greenvilleGame:demolitionDepotMaxLive", {
            count: EH
          })
        }), (0, UH.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [XH && (0, UH.jsx)("span", {
            className: "GreenvilleDepotLoaded",
            children: AH("greenvilleGame:demolitionDepotPicked")
          }), !XH && (0, UH.jsx)(yH.i, {
            disabled: GH,
            onClick: () => {
              LH.XY(rH)
            },
            children: AH("greenvilleGame:demolitionDepotLoad")
          }), GH && (0, UH.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: AH("greenvilleGame:demolitionDepotLocked", {
              level: CH
            })
          })]
        })]
      })
    }

    function QB(HH) {
      let {
        controller: BH
      } = HH;
      const LH = (0, xH.e)(sH, BH.getView()),
        {
          t: AH
        } = (0, PH.B)();
      return 0 === LH.explosives.length ? null : (0, UH.jsxs)(hB, {
        open: LH.open,
        onDismiss: BH.dismiss,
        title: AH("greenvilleGame:demolitionDepotTitle"),
        className: "GreenvilleDepotBoard",
        headerExtra: (0, UH.jsx)("span", {
          className: "GreenvilleBoardLevel",
          children: AH("greenvilleGame:demolitionDepotLevel", {
            level: LH.level
          })
        }),
        status: {
          speaker: AH("greenvilleGame:demolitionGrubnikName"),
          line: AH(`greenvilleGame:${LH.line}`)
        },
        children: [(0, UH.jsx)(zB, {
          roomy: !0,
          children: LH.explosives.map(((HH, rH) => {
            const [SH, hH, tH, zH, CH] = HH;
            return (0, UH.jsxs)(CB, {
              icon: (0, UH.jsx)(SB, {
                item: SH
              }),
              name: AH(`greenvilleGame:${hH}`),
              selected: rH === LH.selected,
              locked: zH > LH.level,
              className: uH()("GreenvilleDepotCrate", {
                Picked: rH === LH.picked
              }),
              onSelect: () => {
                BH.select(rH)
              },
              children: [(0, UH.jsx)(YB, {
                line: HH,
                picked: rH === LH.picked,
                level: LH.level
              }), (0, UH.jsx)("span", {
                className: "GreenvilleDepotStencil",
                children: AH("greenvilleGame:demolitionDepotMaxLive", {
                  count: CH
                })
              }), (0, UH.jsx)("span", {
                className: "GreenvilleDepotBlurb",
                children: AH(`greenvilleGame:${tH}`)
              })]
            }, SH)
          }))
        }), (0, UH.jsx)(uB, {
          view: LH,
          controller: BH
        })]
      })
    }
    const WB = "greenvilleGarageView",
      MB = {
        open: !1,
        cars: [],
        out: null,
        awaiting: !1,
        selected: null,
        line: "dealershipGarageIntro"
      };
    class xB extends aH {
      constructor(HH, BH, LH, AH) {
        super(MB, HH, BH), this.picks = void 0, this.select = HH => {
          this.set({
            ...this.getView(),
            selected: HH
          })
        }, this.XY = HH => {
          HH !== this.picks.getLastPending() && (this.picks.pushLatest(HH), this.set({
            ...this.getView(),
            out: HH,
            awaiting: !this.picks.TX(),
            line: "dealershipGarageTip"
          }))
        }, this.onAnswersTimedOut = () => {
          const HH = this.getView();
          HH.open && this.set({
            ...HH,
            out: this.picks.getLatest(),
            awaiting: !this.picks.TX()
          })
        }, this.picks = new dH(null, AH, LH, this.onAnswersTimedOut)
      }
      kX(HH) {
        if ("open" === HH[0]) {
          var BH;
          const LH = HH[3];
          LH && this.picks.takeAnswer();
          const AH = this.getView();
          if (LH && !AH.open) return;
          this.picks.confirm(HH[2]);
          const rH = HH[1],
            SH = this.picks.getLatest(),
            hH = !AH.open;
          this.show({
            open: !0,
            cars: rH,
            out: SH,
            awaiting: !this.picks.TX(),
            selected: hH ? null !== (BH = null !== SH && void 0 !== SH ? SH : rH[0]) && void 0 !== BH ? BH : null : AH.selected,
            line: hH ? "dealershipGarageIntro" : AH.line
          })
        } else this.close()
      }
      dropPresses() {
        this.picks.clear()
      }
    }

    function vB() {
      const {
        t: HH
      } = (0, PH.B)();
      return (0, UH.jsx)("span", {
        className: "GreenvilleBoardBadge",
        children: HH("greenvilleGame:dealershipGarageOut")
      })
    }

    function PB(HH) {
      let {
        car: BH,
        out: LH,
        awaiting: AH,
        controller: rH
      } = HH;
      const {
        t: SH
      } = (0, PH.B)();
      return (0, UH.jsx)(EB, {
        icon: (0, UH.jsx)(SB, {
          item: BH
        }),
        name: (0, UH.jsx)(rB, {
          item: BH
        }),
        children: (0, UH.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [LH && (0, UH.jsx)("span", {
            className: "GreenvilleGarageOutStamp",
            children: SH("greenvilleGame:dealershipGarageOut")
          }), (0, UH.jsx)(yH.i, {
            disabled: LH && AH,
            onClick: () => {
              rH.XY(BH)
            },
            children: SH(LH ? "greenvilleGame:dealershipGarageBringBack" : "greenvilleGame:dealershipGarageTakeOut")
          })]
        })
      })
    }

    function TB(HH) {
      let {
        controller: BH
      } = HH;
      const LH = (0, xH.e)(WB, BH.getView()),
        {
          t: AH
        } = (0, PH.B)(),
        rH = 0 === LH.cars.length;
      return (0, UH.jsxs)(hB, {
        open: LH.open,
        onDismiss: BH.dismiss,
        title: AH("greenvilleGame:dealershipGarageTitle"),
        className: "GreenvilleGarageBoard",
        status: {
          speaker: AH("greenvilleGame:dealershipDelName"),
          line: AH(rH ? "greenvilleGame:dealershipGarageEmpty" : `greenvilleGame:${LH.line}`)
        },
        children: [!rH && (0, UH.jsx)(zB, {
          roomy: !0,
          children: LH.cars.map((HH => {
            const AH = HH === LH.out;
            return (0, UH.jsx)(CB, {
              icon: (0, UH.jsx)(SB, {
                item: HH
              }),
              name: (0, UH.jsx)(rB, {
                item: HH
              }),
              selected: HH === LH.selected,
              className: uH()("GreenvilleGarageBay", {
                Out: AH
              }),
              onSelect: () => {
                BH.select(HH)
              },
              children: AH && (0, UH.jsx)(vB, {})
            }, HH)
          }))
        }), null !== LH.selected && (0, UH.jsx)(PB, {
          car: LH.selected,
          out: LH.selected === LH.out,
          awaiting: LH.awaiting,
          controller: BH
        })]
      })
    }
    const UB = {
        kind: "intro"
      },
      VB = {
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
        line: UB
      };

    function OB(HH) {
      let [BH, LH, AH, rH, SH, hH] = HH;
      return {
        slot: BH,
        titleKey: LH,
        items: AH,
        exp: rH,
        gold: SH,
        XE: hH,
        ready: AH.every((HH => {
          let [, BH, LH] = HH;
          return LH >= BH
        }))
      }
    }

    function bB(HH, BH) {
      return "sell" === BH.action ? function(HH, BH) {
        let LH = HH.goldOwned;
        const AH = HH.sellLines.map((HH => {
          const [AH, rH, SH] = HH;
          return null !== BH && BH !== AH ? HH : (LH += rH * SH, [AH, 0, SH])
        }));
        return {
          ...HH,
          goldOwned: LH,
          sellLines: AH
        }
      }(HH, BH.item) : "accept" === BH.action ? function(HH, BH) {
        var LH;
        const AH = HH.orders[BH];
        return {
          ...HH,
          tracked: null !== (LH = HH.tracked) && void 0 !== LH ? LH : BH,
          orders: HH.orders.map((HH => HH === AH ? {
            ...HH,
            XE: !0
          } : HH)),
          sellLines: HH.sellLines.map((HH => {
            const [BH, LH, rH] = HH, SH = AH.items.find((HH => {
              let [LH] = HH;
              return LH === BH
            }));
            return void 0 === SH ? HH : [BH, Math.max(0, LH - SH[1]), rH]
          }))
        }
      }(HH, BH.slot) : "track" === BH.action ? {
        ...HH,
        tracked: BH.slot
      } : {
        ...HH,
        delivering: [...HH.delivering, BH.slot]
      }
    }
    const kB = "greenvilleLumberMillView",
      mB = "greenvilleLumberTrackerView";
    class oB extends aH {
      constructor(HH, BH, LH, AH, SH) {
        super(VB, HH, LH), this.publishTracker = BH, this.board = null, this.commands = void 0, this.tracker = null, this.tab = "orders", this.selectedSlot = 0, this.selectedWood = 0, this.line = UB, this.selectTab = HH => {
          this.tab = HH, this.set({
            ...this.getView(),
            tab: HH
          })
        }, this.selectOrder = HH => {
          this.selectedSlot = HH, this.set({
            ...this.getView(),
            selectedSlot: HH
          })
        }, this.selectWood = HH => {
          this.selectedWood = HH, this.set({
            ...this.getView(),
            selectedWood: HH
          })
        }, this.accept = HH => {
          this.findOrder(HH).XE || this.queue({
            action: "accept",
            slot: HH
          })
        }, this.track = HH => {
          this.getView().tracked !== HH && this.findOrder(HH).XE && this.queue({
            action: "track",
            slot: HH
          })
        }, this.deliver = HH => {
          const BH = this.findOrder(HH);
          BH.XE && BH.ready && !this.getView().delivering.includes(HH) && this.queue({
            action: "deliver",
            slot: HH
          })
        }, this.sell = HH => {
          this.getView().sellLines.some((BH => {
            let [LH, AH] = BH;
            return AH > 0 && (null === HH || HH === LH)
          })) && this.queue({
            action: "sell",
            item: HH
          })
        }, this.onAnswersTimedOut = () => {
          this.getView().open && this.set(this.getBoardView())
        }, this.commands = new ZH(SH, (HH => {
          AH(function(HH) {
            return "sell" === HH.action ? null === HH.item ? `${rH}sell` : `${rH}sell ${HH.item}` : `${rH}${HH.action} ${HH.slot}`
          }(HH))
        }), this.onAnswersTimedOut)
      }
      getTracker() {
        return this.tracker
      }
      kX(HH) {
        if ("open" === HH[0]) {
          const LH = HH[6],
            AH = LH ? this.commands.takeAnswer() : null,
            rH = !this.getView().open;
          if (LH && rH) return;
          if (rH) this.onReopened(HH);
          else if (null !== AH) {
            var BH;
            this.line = null !== (BH = function(HH, BH, LH) {
              if ("deliver" === HH.action) {
                const [, AH] = BH[1][HH.slot];
                return LH[1][HH.slot][5] ? null : {
                  kind: "delivered",
                  titleKey: AH
                }
              }
              if ("sell" !== HH.action) return null;
              let AH = 0;
              return BH[3].forEach(((BH, rH) => {
                let [SH, hH] = BH;
                null !== HH.item && HH.item !== SH || (AH += Math.max(0, hH - LH[3][rH][1]))
              })), AH > 0 ? {
                kind: "bought",
                count: AH
              } : null
            }(AH, this.board, HH)) && void 0 !== BH ? BH : this.line
          }
          this.board = HH, this.show(this.getBoardView())
        } else "close" === HH[0] ? this.close() : (this.tracker = null === HH[1] ? null : OB(HH[1]), this.publishTracker(this.tracker))
      }
      dropPresses() {
        this.commands.clear(), this.board = null
      }
      findOrder(HH) {
        return this.getView().orders.find((BH => BH.slot === HH))
      }
      onReopened(HH) {
        let [, BH, , LH] = HH;
        const AH = BH.map(OB).find((HH => HH.XE && HH.ready)),
          rH = LH.findIndex((HH => {
            let [, BH] = HH;
            return BH > 0
          }));
        void 0 === AH && -1 !== rH || (this.tab = "orders"), void 0 !== AH && (this.selectedSlot = AH.slot), -1 === rH || this.selectedWood < LH.length && LH[this.selectedWood][1] > 0 || (this.selectedWood = rH), this.line = UB
      }
      getBoardView() {
        const [, HH, BH, LH, AH, rH] = this.board;
        let SH = {
          open: !0,
          orders: HH.map(OB),
          tracked: BH,
          sellLines: LH,
          level: AH,
          goldOwned: rH,
          delivering: [],
          tab: this.tab,
          selectedSlot: this.selectedSlot,
          selectedWood: this.selectedWood,
          line: this.line
        };
        for (const hH of this.commands.getPending()) SH = bB(SH, hH);
        return SH
      }
      queue(HH) {
        this.commands.push(HH), this.set(this.getBoardView())
      }
    }
    var IB = LH(1365),
      fB = LH(2051);
    const lB = "Gold Coin";

    function KB(HH) {
      let {
        amount: BH,
        item: LH = lB,
        LX: AH,
        inTile: rH = !1,
        iconRef: SH
      } = HH;
      return (0, UH.jsx)(IB.g, {
        delayShow: 200,
        hoverOnly: rH,
        placement: "top",
        tooltipClassName: "GreenvilleChipTooltipBox",
        tooltipInner: (0, UH.jsx)(cB, {
          item: LH,
          amount: BH,
          LX: AH
        }),
        children: (0, UH.jsxs)("span", {
          className: uH()("GreenvilleBoardChip", {
            Short: void 0 !== AH && AH < BH
          }),
          children: [(0, UH.jsx)("span", {
            ref: SH,
            className: "GreenvilleBoardChipIcon",
            children: (0, UH.jsx)(SB, {
              item: LH
            })
          }), BH.toLocaleString()]
        })
      })
    }

    function cB(HH) {
      let {
        item: BH,
        amount: LH,
        LX: AH
      } = HH;
      const {
        t: rH
      } = (0, PH.B)(), SH = (0, fB.c)("itemInfo", (HH => HH[BH]));
      return (0, UH.jsxs)("div", {
        className: "GreenvilleChipTooltip",
        children: [(0, UH.jsxs)("div", {
          className: "GreenvilleChipTooltipHeader",
          children: [(0, UH.jsx)("span", {
            className: "GreenvilleChipTooltipIcon",
            children: (0, UH.jsx)(SB, {
              item: BH
            })
          }), (0, UH.jsx)(rB, {
            item: BH,
            className: "GreenvilleChipTooltipName"
          })]
        }), void 0 !== (null === SH || void 0 === SH ? void 0 : SH.description) && (0, UH.jsx)(LB.b, {
          text: SH.description,
          className: "GreenvilleChipTooltipDescription"
        }), void 0 !== AH && (0, UH.jsxs)("div", {
          className: uH()("GreenvilleChipTooltipHeld", {
            Short: AH < LH
          }),
          children: [(0, UH.jsx)("span", {
            className: "GreenvilleChipTooltipLabel",
            children: rH("greenvilleGame:boardYouHave")
          }), (0, UH.jsxs)("span", {
            className: "GreenvilleChipTooltipCount",
            children: [(0, UH.jsx)("span", {
              className: "GreenvilleChipTooltipHeldAmount",
              children: AH.toLocaleString()
            }), ` / ${LH.toLocaleString()}`]
          }), (0, UH.jsx)("span", {
            className: "GreenvilleChipTooltipMeter",
            children: (0, UH.jsx)("span", {
              style: {
                width: (LH > 0 ? 100 * Math.min(1, AH / LH) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function eB(HH) {
      let {
        gold: BH,
        children: LH
      } = HH;
      const AH = (0, tH.useRef)(null);
      var rH;
      return rH = AH, (0, tH.useLayoutEffect)((() => {
        const HH = rH.current;
        return nH = HH, () => {
          nH === HH && (nH = null)
        }
      }), [rH]), (0, UH.jsxs)("div", {
        className: "GreenvilleBoardWallet",
        children: [LH, (0, UH.jsx)(KB, {
          amount: BH,
          iconRef: AH
        })]
      })
    }
    const qB = {
      New: "lumberBoardStateNew",
      Accepted: "lumberBoardStateAccepted",
      Tracking: "lumberBoardTracking",
      Ready: "lumberBoardStateReady"
    };

    function gB(HH, BH) {
      return HH.XE ? HH.ready ? "Ready" : HH.slot === BH ? "Tracking" : "Accepted" : "New"
    }

    function NB(HH) {
      let {
        state: BH
      } = HH;
      const {
        t: LH
      } = (0, PH.B)();
      return (0, UH.jsx)("span", {
        className: uH()("GreenvilleBoardBadge GreenvilleLumberState", BH, {
          Muted: "Accepted" === BH
        }),
        children: LH(`greenvilleGame:${qB[BH]}`)
      })
    }

    function RB(HH) {
      let {
        order: BH
      } = HH;
      return (0, UH.jsx)("span", {
        className: "GreenvilleLumberNeeds",
        children: BH.items.map((HH => {
          let [BH, LH, AH] = HH;
          const rH = AH >= LH;
          return (0, UH.jsxs)("span", {
            className: uH()("GreenvilleLumberNeed", {
              Met: rH
            }),
            children: [(0, UH.jsx)("span", {
              className: "GreenvilleLumberNeedIcon",
              children: (0, UH.jsx)(SB, {
                item: BH
              })
            }), (0, UH.jsx)(rB, {
              item: BH,
              className: "GreenvilleLumberNeedName"
            }), (0, UH.jsxs)("span", {
              className: "GreenvilleLumberNeedCount",
              children: [Math.min(AH, LH).toLocaleString(), "/", LH.toLocaleString()]
            }), (0, UH.jsx)("span", {
              className: "GreenvilleLumberNeedTick",
              "aria-hidden": "true",
              children: rH && "\u2713"
            })]
          }, BH)
        }))
      })
    }

    function jB(HH) {
      let {
        order: BH,
        inTile: LH = !1
      } = HH;
      const {
        t: AH
      } = (0, PH.B)();
      return (0, UH.jsxs)("span", {
        className: "GreenvilleLumberReward",
        children: [(0, UH.jsx)(KB, {
          amount: BH.gold,
          inTile: LH
        }), (0, UH.jsx)("span", {
          className: "GreenvilleLumberExp",
          children: AH("greenvilleGame:boardExpGain", {
            exp: BH.exp
          })
        })]
      })
    }

    function nB(HH) {
      let {
        view: BH,
        order: LH,
        controller: AH
      } = HH;
      const {
        t: rH
      } = (0, PH.B)(), {
        slot: SH,
        items: hH,
        XE: tH,
        ready: zH
      } = LH, CH = hH.reduce(((HH, BH) => {
        let [, LH, AH] = BH;
        return HH + Math.max(0, LH - AH)
      }), 0);
      return (0, UH.jsxs)("div", {
        className: "GreenvilleBoardActions",
        children: [!tH && (0, UH.jsx)(yH.i, {
          onClick: () => {
            AH.accept(SH)
          },
          children: rH("greenvilleGame:lumberBoardAccept")
        }), tH && (0, UH.jsx)(yH.u, {
          disabled: !zH,
          loading: BH.delivering.includes(SH),
          onClick: () => {
            AH.deliver(SH)
          },
          children: rH("greenvilleGame:lumberBoardDeliver")
        }), tH && !zH && (0, UH.jsx)("span", {
          className: "GreenvilleBoardHint",
          children: rH("greenvilleGame:lumberBoardDeliverMissing", {
            count: CH
          })
        }), tH && SH !== BH.tracked && (0, UH.jsx)(yH.W, {
          onClick: () => {
            AH.track(SH)
          },
          children: rH("greenvilleGame:lumberBoardTrack")
        })]
      })
    }

    function FB(HH) {
      let {
        view: BH,
        controller: LH
      } = HH;
      const {
        t: AH
      } = (0, PH.B)(), rH = BH.orders[BH.selectedSlot], SH = gB(rH, BH.tracked), hH = rH.XE && rH.slot === BH.tracked;
      return (0, UH.jsxs)(EB, {
        icon: (0, UH.jsx)(SB, {
          item: rH.items[0][0]
        }),
        name: AH(`greenvilleGame:${rH.titleKey}`),
        badges: (0, UH.jsxs)(UH.Fragment, {
          children: [(0, UH.jsx)(NB, {
            state: SH
          }), hH && "Ready" === SH && (0, UH.jsx)(NB, {
            state: "Tracking"
          })]
        }),
        children: [(0, UH.jsx)(RB, {
          order: rH
        }), (0, UH.jsx)("dl", {
          className: "GreenvilleBoardFacts",
          children: (0, UH.jsxs)("div", {
            children: [(0, UH.jsx)("dt", {
              children: AH("greenvilleGame:lumberBoardReward")
            }), (0, UH.jsx)("dd", {
              children: (0, UH.jsx)(jB, {
                order: rH
              })
            })]
          })
        }), (0, UH.jsx)(nB, {
          view: BH,
          order: rH,
          controller: LH
        })]
      })
    }

    function DB(HH) {
      let {
        view: BH,
        controller: LH
      } = HH;
      const {
        t: AH
      } = (0, PH.B)();
      return (0, UH.jsxs)(UH.Fragment, {
        children: [(0, UH.jsx)(zB, {
          className: "GreenvilleLumberTickets",
          roomy: !0,
          children: BH.orders.map((HH => {
            const rH = gB(HH, BH.tracked);
            return (0, UH.jsxs)(CB, {
              icon: (0, UH.jsx)(SB, {
                item: HH.items[0][0]
              }),
              name: AH(`greenvilleGame:${HH.titleKey}`),
              selected: HH.slot === BH.selectedSlot,
              className: uH()("GreenvilleLumberTicket", rH),
              onSelect: () => {
                LH.selectOrder(HH.slot)
              },
              children: [(0, UH.jsx)(NB, {
                state: rH
              }), (0, UH.jsx)(RB, {
                order: HH
              }), (0, UH.jsx)(jB, {
                order: HH,
                inTile: !0
              })]
            }, HH.slot)
          }))
        }), (0, UH.jsx)(FB, {
          view: BH,
          controller: LH
        })]
      })
    }

    function wB(HH) {
      let {
        item: BH
      } = HH;
      return (0, UH.jsx)("span", {
        className: "GreenvilleLumberLogEnd",
        children: (0, UH.jsx)(SB, {
          item: BH
        })
      })
    }

    function ZB(HH) {
      let {
        view: BH,
        controller: LH
      } = HH;
      const {
        t: AH
      } = (0, PH.B)(), [rH, SH, hH] = BH.sellLines[BH.selectedWood], tH = function(HH, BH) {
        let LH = 0,
          AH = 0;
        for (const rH of HH.orders)
          if (rH.XE)
            for (const [HH, SH, hH] of rH.items) HH === BH && (LH += SH, AH = hH);
        return Math.min(LH, AH)
      }(BH, rH), zH = BH.sellLines.some((HH => {
        let [, BH] = HH;
        return BH > 0
      }));
      return (0, UH.jsxs)(EB, {
        icon: (0, UH.jsx)(wB, {
          item: rH
        }),
        name: (0, UH.jsx)(rB, {
          item: rH
        }),
        badges: SH > 0 && (0, UH.jsx)("span", {
          className: "GreenvilleBoardBadge",
          children: AH("greenvilleGame:lumberBoardSellHeld", {
            count: SH
          })
        }),
        children: [(0, UH.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, UH.jsxs)("div", {
            children: [(0, UH.jsx)("dt", {
              children: AH("greenvilleGame:boardYouHave")
            }), (0, UH.jsx)("dd", {
              children: (tH + SH).toLocaleString()
            })]
          }), (0, UH.jsxs)("div", {
            children: [(0, UH.jsx)("dt", {
              children: AH("greenvilleGame:lumberBoardSellKept")
            }), (0, UH.jsx)("dd", {
              children: tH.toLocaleString()
            })]
          }), (0, UH.jsxs)("div", {
            children: [(0, UH.jsx)("dt", {
              children: AH("greenvilleGame:lumberBoardSellSpare")
            }), (0, UH.jsx)("dd", {
              className: uH()("GreenvilleLumberSpare", {
                None: 0 === SH
              }),
              children: SH.toLocaleString()
            })]
          }), (0, UH.jsxs)("div", {
            children: [(0, UH.jsx)("dt", {
              children: AH("greenvilleGame:lumberBoardSellEach")
            }), (0, UH.jsx)("dd", {
              children: (0, UH.jsx)(KB, {
                amount: hH
              })
            })]
          })]
        }), (0, UH.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [(0, UH.jsxs)(yH.u, {
            disabled: 0 === SH,
            onClick: () => {
              LH.sell(rH)
            },
            children: [SH > 0 && AH("greenvilleGame:lumberBoardSell", {
              count: SH
            }), 0 === SH && AH(tH > 0 ? "greenvilleGame:lumberBoardSellKeptAll" : "greenvilleGame:lumberBoardSellNone")]
          }), (0, UH.jsx)(yH.i, {
            disabled: !zH,
            onClick: () => {
              LH.sell(null)
            },
            children: AH("greenvilleGame:lumberBoardSellAll")
          })]
        })]
      })
    }

    function dB(HH) {
      let {
        view: BH,
        controller: LH
      } = HH;
      const {
        t: AH
      } = (0, PH.B)();
      return (0, UH.jsxs)(UH.Fragment, {
        children: [(0, UH.jsx)(zB, {
          className: "GreenvilleLumberWoodPile",
          children: BH.sellLines.map(((HH, rH) => {
            let [SH, hH, tH] = HH;
            return (0, UH.jsxs)(CB, {
              icon: (0, UH.jsx)(wB, {
                item: SH
              }),
              name: (0, UH.jsx)(rB, {
                item: SH
              }),
              selected: rH === BH.selectedWood,
              className: uH()("GreenvilleLumberWood", {
                Spare: hH > 0
              }),
              onSelect: () => {
                LH.selectWood(rH)
              },
              children: [hH > 0 && (0, UH.jsx)("span", {
                className: "GreenvilleBoardBadge",
                children: AH("greenvilleGame:lumberBoardSellHeld", {
                  count: hH
                })
              }), (0, UH.jsx)(KB, {
                amount: tH,
                inTile: !0
              })]
            }, SH)
          }))
        }), (0, UH.jsx)(ZB, {
          view: BH,
          controller: LH
        })]
      })
    }

    function aB(HH) {
      let {
        controller: BH
      } = HH;
      const LH = (0, xH.e)(kB, BH.getView()),
        {
          t: AH
        } = (0, PH.B)(),
        rH = function(HH) {
          const {
            t: BH
          } = (0, PH.B)();
          return "delivered" === HH.kind ? BH("greenvilleGame:lumberTimbertoothThanks", {
            order: BH(`greenvilleGame:${HH.titleKey}`)
          }) : "bought" === HH.kind ? BH("greenvilleGame:lumberTimbertoothBought", {
            count: HH.count
          }) : BH("greenvilleGame:lumberBoardIntro")
        }(LH.line);
      if (0 === LH.orders.length) return null;
      const SH = LH.orders.filter((HH => HH.XE && HH.ready)).length,
        hH = LH.sellLines.reduce(((HH, BH) => {
          let [, LH] = BH;
          return HH + LH
        }), 0);
      return (0, UH.jsxs)(hB, {
        open: LH.open,
        onDismiss: BH.dismiss,
        title: AH("greenvilleGame:lumberBoardTitle"),
        className: "GreenvilleLumberBoard",
        headerExtra: (0, UH.jsx)(eB, {
          gold: LH.goldOwned,
          children: (0, UH.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: AH("greenvilleGame:lumberBoardLevel", {
              level: LH.level
            })
          })
        }),
        tabs: (0, UH.jsx)(tB, {
          tabs: [{
            id: "orders",
            label: AH("greenvilleGame:lumberBoardOrders"),
            badge: SH > 0 && (0, UH.jsx)("span", {
              className: "GreenvilleBoardBadge Ready",
              children: AH("greenvilleGame:lumberBoardReadyCount", {
                count: SH
              })
            })
          }, {
            id: "sell",
            label: AH("greenvilleGame:lumberBoardSellHeading"),
            badge: hH > 0 && (0, UH.jsx)("span", {
              className: "GreenvilleBoardBadge",
              children: AH("greenvilleGame:lumberBoardSellHeld", {
                count: hH
              })
            })
          }],
          selected: LH.tab,
          onSelect: BH.selectTab
        }),
        status: {
          speaker: AH("greenvilleGame:lumberTimbertoothName"),
          line: rH
        },
        children: ["orders" === LH.tab && (0, UH.jsx)(DB, {
          view: LH,
          controller: BH
        }), "sell" === LH.tab && (0, UH.jsx)(dB, {
          view: LH,
          controller: BH
        })]
      })
    }

    function sB(HH) {
      let {
        controller: BH
      } = HH;
      (0, xH.e)(mB, null);
      const {
        t: LH
      } = (0, PH.B)(), AH = BH.getTracker();
      return null === AH ? null : (0, UH.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, UH.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: LH(`greenvilleGame:${AH.titleKey}`)
        }), (0, UH.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: AH.items.map((HH => {
            let [BH, LH, AH] = HH;
            return (0, UH.jsxs)("li", {
              className: uH()("GreenvilleTrackerRow", {
                Done: AH >= LH
              }),
              children: [(0, UH.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, UH.jsx)(MH.e, {
                  itemName: BH,
                  amount: 0
                })
              }), (0, UH.jsx)(rB, {
                item: BH,
                className: "GreenvilleTrackerLabel"
              }), (0, UH.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [Math.min(AH, LH), "/", LH]
              })]
            }, BH)
          }))
        }), AH.ready && (0, UH.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: LH("greenvilleGame:lumberTrackerReady")
        })]
      })
    }
    const JB = "greenvilleOreBuyerView",
      iB = {
        open: !1,
        lines: [],
        selected: 0,
        level: 1,
        goldOwned: 0
      };
    class pB extends aH {
      constructor(HH, BH, LH, AH) {
        super(iB, HH, BH), this.sales = void 0, this.serverLines = [], this.select = HH => {
          this.set({
            ...this.getView(),
            selected: HH
          })
        }, this.sell = HH => {
          this.getView().lines.some((BH => {
            let [LH, , , , AH] = BH;
            return AH > 0 && (null === HH || HH === LH)
          })) && (this.sales.push(HH), this.set({
            ...this.getView(),
            lines: this.getLines()
          }))
        }, this.onAnswersTimedOut = () => {
          const HH = this.getView();
          HH.open && this.set({
            ...HH,
            lines: this.getLines()
          })
        }, this.sales = new ZH(AH, LH, this.onAnswersTimedOut)
      }
      kX(HH) {
        if ("close" !== HH[0]) {
          const [, BH, LH, AH] = HH, rH = "open" === HH[0] && HH[4];
          rH && this.sales.takeAnswer();
          const SH = this.getView();
          if ((rH || "refresh" === HH[0]) && !SH.open) return;
          this.serverLines = BH;
          const hH = BH.findIndex((HH => HH[4] > 0));
          this.show({
            open: !0,
            lines: this.getLines(),
            selected: SH.open ? SH.selected : Math.max(0, hH),
            level: LH,
            goldOwned: AH
          })
        } else this.close()
      }
      dropPresses() {
        this.sales.clear()
      }
      getLines() {
        const HH = this.sales.getPending();
        return this.serverLines.map((BH => {
          const [LH, AH, rH, SH, , hH] = BH;
          return HH.some((HH => null === HH || HH === LH)) ? [LH, AH, rH, SH, 0, hH] : BH
        }))
      }
    }

    function yB(HH) {
      let {
        line: BH,
        level: LH
      } = HH;
      const {
        t: AH
      } = (0, PH.B)(), [, , , rH, SH, hH] = BH;
      return (0, UH.jsxs)(UH.Fragment, {
        children: [SH > 0 && (0, UH.jsx)("span", {
          className: "GreenvilleBoardBadge",
          children: AH("greenvilleGame:oreBuyerHeld", {
            count: SH
          })
        }), rH > LH && (0, UH.jsxs)("span", {
          className: "GreenvilleBoardBadge Muted",
          children: [(0, UH.jsx)(pH.c, {
            name: "lock"
          }), AH("greenvilleGame:boardLevelBadge", {
            level: rH
          })]
        }), rH <= LH && hH && (0, UH.jsx)("span", {
          className: "GreenvilleBoardBadge GreenvilleOreRare",
          children: AH("greenvilleGame:oreBuyerRare")
        })]
      })
    }

    function HL(HH) {
      let {
        line: BH
      } = HH;
      return (0, UH.jsx)("span", {
        className: "GreenvilleOreSample",
        children: (0, UH.jsx)(SB, {
          item: BH[0]
        })
      })
    }

    function BL(HH) {
      let {
        view: BH,
        controller: LH
      } = HH;
      const {
        t: AH
      } = (0, PH.B)(), rH = BH.lines[BH.selected], [SH, hH, tH, zH, CH, EH] = rH, XH = zH > BH.level, GH = BH.lines.some((HH => HH[4] > 0));
      return (0, UH.jsxs)(EB, {
        icon: (0, UH.jsx)(HL, {
          line: rH
        }),
        name: (0, UH.jsx)(rB, {
          item: SH
        }),
        badges: (0, UH.jsx)(yB, {
          line: rH,
          level: BH.level
        }),
        children: [(0, UH.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, UH.jsxs)("div", {
            children: [(0, UH.jsx)("dt", {
              children: AH("greenvilleGame:boardYouHave")
            }), (0, UH.jsx)("dd", {
              className: uH()("GreenvilleOreHeld", {
                None: 0 === CH
              }),
              children: CH.toLocaleString()
            })]
          }), (0, UH.jsxs)("div", {
            children: [(0, UH.jsx)("dt", {
              children: AH("greenvilleGame:oreBuyerPriceEach")
            }), (0, UH.jsx)("dd", {
              children: (0, UH.jsx)(KB, {
                amount: hH
              })
            })]
          }), (0, UH.jsxs)("div", {
            children: [(0, UH.jsx)("dt", {
              children: AH("greenvilleGame:oreBuyerExpEach")
            }), (0, UH.jsxs)("dd", {
              className: "GreenvilleOreExp",
              children: ["+", tH]
            })]
          })]
        }), EH && (0, UH.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: AH("greenvilleGame:oreBuyerLegendary")
        }), XH && (0, UH.jsxs)(UH.Fragment, {
          children: [(0, UH.jsx)("p", {
            className: "GreenvilleBoardHint",
            children: AH("greenvilleGame:oreBuyerLocked", {
              level: zH
            })
          }), (0, UH.jsx)("p", {
            className: "GreenvilleBoardDescription",
            children: AH("greenvilleGame:oreBuyerTip")
          })]
        }), (0, UH.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [(0, UH.jsxs)(yH.u, {
            disabled: 0 === CH,
            onClick: () => {
              LH.sell(SH)
            },
            children: [CH > 0 && AH("greenvilleGame:oreBuyerSell", {
              count: CH
            }), 0 === CH && AH("greenvilleGame:oreBuyerSellNone")]
          }), (0, UH.jsx)(yH.i, {
            disabled: !GH,
            onClick: () => {
              LH.sell(null)
            },
            children: AH("greenvilleGame:oreBuyerSellAll")
          })]
        })]
      })
    }

    function LL(HH) {
      let {
        controller: BH
      } = HH;
      const LH = (0, xH.e)(JB, BH.getView()),
        {
          t: AH
        } = (0, PH.B)();
      return 0 === LH.lines.length ? null : (0, UH.jsxs)(hB, {
        open: LH.open,
        onDismiss: BH.dismiss,
        title: AH("greenvilleGame:oreBuyerTitle"),
        className: "GreenvilleOreBuyerBoard",
        headerExtra: (0, UH.jsx)(eB, {
          gold: LH.goldOwned,
          children: (0, UH.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: AH("greenvilleGame:oreBuyerLevel", {
              level: LH.level
            })
          })
        }),
        status: {
          speaker: AH("greenvilleGame:oreBuyerName"),
          line: AH("greenvilleGame:oreBuyerGreet")
        },
        children: [(0, UH.jsx)(zB, {
          roomy: !0,
          children: LH.lines.map(((HH, rH) => {
            const [SH, hH, tH, zH, CH, EH] = HH;
            return (0, UH.jsxs)(CB, {
              icon: (0, UH.jsx)(HL, {
                line: HH
              }),
              name: (0, UH.jsx)(rB, {
                item: SH
              }),
              selected: rH === LH.selected,
              locked: zH > LH.level && 0 === CH,
              className: uH()("GreenvilleOreTile", {
                Legendary: EH
              }),
              onSelect: () => {
                BH.select(rH)
              },
              children: [(0, UH.jsx)(yB, {
                line: HH,
                level: LH.level
              }), (0, UH.jsxs)("span", {
                className: "GreenvilleOrePrice",
                children: [(0, UH.jsx)(KB, {
                  amount: hH,
                  inTile: !0
                }), (0, UH.jsx)("span", {
                  className: "GreenvilleOreExp",
                  children: AH("greenvilleGame:boardExpGain", {
                    exp: tH
                  })
                })]
              })]
            }, SH)
          }))
        }), (0, UH.jsx)(BL, {
          view: LH,
          controller: BH
        })]
      })
    }
    const AL = {
      kind: "greet"
    };

    function rL(HH) {
      return HH.every((HH => {
        let [, , BH, LH] = HH;
        return LH >= BH
      }))
    }

    function SL(HH) {
      let [BH, LH, AH, rH, SH, hH] = HH;
      return {
        slot: BH,
        nameKey: LH,
        needs: AH,
        exp: rH,
        gold: SH,
        XE: hH,
        ready: rL(AH)
      }
    }

    function hL(HH, BH) {
      let [, , LH, AH] = HH;
      return BH ? LH : LH - AH
    }

    function tL(HH, BH) {
      let [LH, AH] = HH;
      return LH === BH.item && null !== AH === BH.golden
    }

    function zL(HH, BH) {
      return (BH.golden ? HH.goldenLines : HH.sellLines).find((HH => tL(HH, BH)))
    }

    function CL(HH, BH) {
      return "sell" === BH.action ? GL(function(HH, BH, LH) {
        let AH = HH.goldOwned;
        const rH = HH => {
          if (null !== BH && !tL(HH, BH)) return HH;
          const [rH, SH, hH, tH, zH] = HH, CH = hL(HH, LH);
          return AH += CH * zH, [rH, SH, hH - CH, LH ? 0 : tH, zH]
        };
        return {
          ...HH,
          sellLines: HH.sellLines.map(rH),
          goldenLines: EL(HH.goldenLines.map(rH)),
          goldOwned: AH
        }
      }(HH, BH.kind, BH.all)) : "accept" === BH.action ? function(HH, BH) {
        var LH;
        const {
          needs: AH
        } = HH.orders[BH], rH = HH => {
          const [BH, LH, rH, SH, hH] = HH, tH = XL(AH, HH);
          return tH ? [BH, LH, rH, Math.min(rH, SH + tH[2]), hH] : HH
        };
        return {
          ...HH,
          tracked: null !== (LH = HH.tracked) && void 0 !== LH ? LH : BH,
          orders: HH.orders.map((HH => HH.slot === BH ? {
            ...HH,
            XE: !0
          } : HH)),
          sellLines: HH.sellLines.map(rH),
          goldenLines: HH.goldenLines.map(rH)
        }
      }(HH, BH.slot) : "track" === BH.action ? {
        ...HH,
        tracked: BH.slot
      } : GL(function(HH, BH) {
        const {
          needs: LH
        } = HH.orders[BH], AH = HH => {
          const [BH, AH, rH, SH, hH] = HH, tH = XL(LH, HH);
          return tH ? [BH, AH, rH - tH[2], SH - tH[2], hH] : HH
        };
        return {
          ...HH,
          sellLines: HH.sellLines.map(AH),
          goldenLines: EL(HH.goldenLines.map(AH)),
          delivering: [...HH.delivering, BH]
        }
      }(HH, BH.slot))
    }

    function EL(HH) {
      return HH.filter((HH => {
        let [, , BH] = HH;
        return BH > 0
      }))
    }

    function XL(HH, BH) {
      let [LH, AH] = BH;
      return HH.find((HH => {
        let [BH, rH] = HH;
        return BH === LH && rH === AH
      }))
    }

    function GL(HH) {
      const BH = (BH, LH) => {
          const AH = (null === LH ? HH.sellLines : HH.goldenLines).find((HH => {
            let [LH] = HH;
            return LH === BH
          }));
          return AH ? AH[2] : 0
        },
        LH = HH.orders.map((LH => {
          if (HH.delivering.includes(LH.slot)) return LH;
          const AH = LH.needs.map((HH => {
            let [LH, AH, rH] = HH;
            return [LH, AH, rH, BH(LH, AH)]
          }));
          return {
            ...LH,
            needs: AH,
            ready: rL(AH)
          }
        }));
      return {
        ...HH,
        orders: LH
      }
    }

    function YL(HH) {
      let [, , , BH, LH] = HH;
      return [...BH, ...LH].reduce(((HH, BH) => {
        let [, , LH] = BH;
        return HH + LH
      }), 0)
    }
    const uL = "greenvilleFarmBoardView",
      QL = "greenvilleFarmTrackerView",
      WL = {
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
        line: AL
      };
    class ML extends aH {
      constructor(HH, BH, LH, AH, rH) {
        super(WL, HH, LH), this.publishTracker = BH, this.board = null, this.commands = void 0, this.tracker = null, this.tab = "orders", this.selectedOrder = 0, this.selectedProduce = null, this.line = AL, this.selectTab = HH => {
          this.tab = HH, this.set(this.getBoardView())
        }, this.selectOrder = HH => {
          this.selectedOrder = HH, this.set(this.getBoardView())
        }, this.selectProduce = HH => {
          this.selectedProduce = HH, this.set(this.getBoardView())
        }, this.accept = HH => {
          this.getView().orders[HH].XE || this.queue({
            action: "accept",
            slot: HH
          })
        }, this.track = HH => {
          const BH = this.getView();
          BH.tracked !== HH && BH.orders[HH].XE && this.queue({
            action: "track",
            slot: HH
          })
        }, this.deliver = HH => {
          const BH = this.getView(),
            LH = BH.orders[HH];
          LH.XE && LH.ready && !BH.delivering.includes(HH) && this.queue({
            action: "deliver",
            slot: HH
          })
        }, this.sell = (HH, BH) => {
          this.queueSale({
            item: HH,
            golden: BH
          }, !1)
        }, this.sellSpare = () => {
          this.queueSale(null, !1)
        }, this.sellAll = () => {
          this.queueSale(null, !0)
        }, this.onAnswersTimedOut = () => {
          this.getView().open && this.set(this.settleView())
        }, this.commands = new ZH(rH, (HH => {
          AH(function(HH) {
            return "sell" !== HH.action ? `${SH}${HH.action} ${HH.slot}` : HH.all ? `${SH}sellAll` : null === HH.kind ? `${SH}sell` : `${SH}${HH.kind.golden?"sellGolden":"sell"} ${HH.kind.item}`
          }(HH))
        }), this.onAnswersTimedOut)
      }
      getTracker() {
        return this.tracker
      }
      kX(HH) {
        if ("open" === HH[0]) {
          const LH = HH[7],
            AH = LH ? this.commands.takeAnswer() : null,
            rH = !this.getView().open;
          if (LH && rH) return;
          const SH = this.board;
          if (this.board = HH, rH) this.onReopened();
          else if (null !== AH) {
            var BH;
            this.line = null !== (BH = function(HH, BH, LH) {
              const AH = LH[6] - BH[6];
              if (AH <= 0) return null;
              if ("deliver" === HH.action) return {
                kind: "delivered",
                nameKey: BH[1][HH.slot][1],
                gold: AH
              };
              const rH = YL(BH) - YL(LH);
              return "sell" === HH.action && rH > 0 ? {
                kind: "sold",
                count: rH,
                gold: AH
              } : null
            }(AH, SH, HH)) && void 0 !== BH ? BH : this.line
          }
          this.show(this.settleView())
        } else "close" === HH[0] ? this.close() : (this.tracker = null === HH[1] ? null : SL(HH[1]), this.publishTracker(this.tracker))
      }
      dropPresses() {
        this.commands.clear(), this.board = null
      }
      onReopened() {
        this.line = AL;
        const HH = this.toView(this.board).orders.find((HH => HH.XE && HH.ready));
        HH && (this.tab = "orders", this.selectedOrder = HH.slot)
      }
      queueSale(HH, BH) {
        const {
          sellLines: LH,
          goldenLines: AH
        } = this.getView();
        [...LH, ...AH].some((LH => hL(LH, BH) > 0 && (null === HH || tL(LH, HH)))) && this.queue({
          action: "sell",
          kind: HH,
          all: BH
        })
      }
      toView(HH) {
        let [, BH, LH, AH, rH, SH, hH] = HH;
        return {
          open: !0,
          orders: BH.map(SL),
          tracked: LH,
          sellLines: AH,
          goldenLines: rH,
          level: SH,
          goldOwned: hH,
          delivering: [],
          tab: this.tab,
          selectedOrder: this.selectedOrder,
          selectedProduce: this.selectedProduce,
          line: this.line
        }
      }
      getBoardView() {
        let HH = this.toView(this.board);
        for (const BH of this.commands.getPending()) HH = CL(HH, BH);
        return {
          ...HH,
          selectedProduce: this.pickProduce(HH)
        }
      }
      settleView() {
        const HH = this.getBoardView();
        return this.commands.TX() && (this.selectedProduce = HH.selectedProduce), HH
      }
      pickProduce(HH) {
        var BH, LH;
        const AH = this.selectedProduce;
        if (AH && zL(HH, AH)) return AH;
        if (AH) return {
          item: AH.item,
          golden: !1
        };
        const [rH, SH] = null !== (BH = null !== (LH = HH.goldenLines[0]) && void 0 !== LH ? LH : HH.sellLines.find((HH => {
          let [, , BH] = HH;
          return BH > 0
        }))) && void 0 !== BH ? BH : HH.sellLines[0];
        return {
          item: rH,
          golden: null !== SH
        }
      }
      queue(HH) {
        this.commands.push(HH), this.set(this.getBoardView())
      }
    }
    var xL = LH(1344);

    function vL() {
      const HH = (0, tH.useRef)(null);
      return (0, xL.d)(HH), (0, UH.jsx)("span", {
        ref: HH,
        className: "GreenvilleFarmSparkle",
        "aria-hidden": "true"
      })
    }

    function PL(HH) {
      let {
        item: BH,
        golden: LH
      } = HH;
      return (0, UH.jsx)("span", {
        className: uH()("GreenvilleFarmProduce", {
          Golden: LH
        }),
        children: (0, UH.jsx)(SB, {
          item: BH
        })
      })
    }

    function TL(HH) {
      let {
        item: BH,
        goldenName: LH
      } = HH;
      return null !== LH ? (0, UH.jsx)("span", {
        className: "GreenvilleFarmGoldenName",
        children: LH
      }) : (0, UH.jsx)(rB, {
        item: BH
      })
    }
    const UL = {
      New: "greenvilleGame:farmBoardNew",
      Accepted: "greenvilleGame:farmBoardAccepted",
      Tracking: "greenvilleGame:farmOrderTracking",
      Ready: "greenvilleGame:farmBoardReady"
    };

    function VL(HH, BH) {
      return HH.XE ? HH.ready ? "Ready" : BH ? "Tracking" : "Accepted" : "New"
    }

    function OL(HH) {
      return HH.needs.some((HH => {
        let [, BH] = HH;
        return null !== BH
      }))
    }

    function bL(HH) {
      let {
        order: BH
      } = HH;
      const [LH, AH] = BH.needs[0];
      return (0, UH.jsx)(PL, {
        item: LH,
        golden: null !== AH
      })
    }

    function kL(HH) {
      let {
        state: BH
      } = HH;
      const {
        t: LH
      } = (0, PH.B)();
      return (0, UH.jsx)("span", {
        className: uH()("GreenvilleBoardBadge GreenvilleFarmState", BH),
        children: LH(UL[BH])
      })
    }

    function mL(HH) {
      let {
        needs: BH
      } = HH;
      return (0, UH.jsx)("span", {
        className: "GreenvilleFarmNeeds",
        children: BH.map((HH => {
          let [BH, LH, AH, rH] = HH;
          const SH = rH >= AH;
          return (0, UH.jsxs)("span", {
            className: uH()("GreenvilleFarmNeed", {
              Met: SH,
              Golden: null !== LH
            }),
            children: [(0, UH.jsx)("span", {
              className: "GreenvilleFarmNeedIcon",
              children: (0, UH.jsx)(PL, {
                item: BH,
                golden: null !== LH
              })
            }), (0, UH.jsx)("span", {
              className: "GreenvilleFarmNeedName",
              children: (0, UH.jsx)(TL, {
                item: BH,
                goldenName: LH
              })
            }), (0, UH.jsxs)("span", {
              className: "GreenvilleFarmNeedCount",
              children: [SH && "\u2713 ", Math.min(rH, AH), "/", AH]
            })]
          }, `${BH}|${LH}`)
        }))
      })
    }

    function oL(HH) {
      let {
        order: BH,
        inTile: LH = !1
      } = HH;
      const {
        t: AH
      } = (0, PH.B)();
      return (0, UH.jsxs)("span", {
        className: "GreenvilleFarmReward",
        children: [(0, UH.jsx)(KB, {
          amount: BH.gold,
          inTile: LH
        }), (0, UH.jsx)("span", {
          className: "GreenvilleFarmExp",
          children: AH("greenvilleGame:boardExpGain", {
            exp: BH.exp
          })
        })]
      })
    }

    function IL(HH) {
      let {
        view: BH,
        controller: LH
      } = HH;
      const {
        t: AH
      } = (0, PH.B)(), rH = BH.orders[BH.selectedOrder], {
        slot: SH,
        nameKey: hH,
        needs: tH,
        XE: zH,
        ready: CH
      } = rH, EH = SH === BH.tracked, XH = tH.reduce(((HH, BH) => {
        let [, , LH, AH] = BH;
        return HH + Math.max(0, LH - AH)
      }), 0);
      return (0, UH.jsxs)(EB, {
        icon: (0, UH.jsx)(bL, {
          order: rH
        }),
        name: AH(hH),
        badges: (0, UH.jsxs)(UH.Fragment, {
          children: [(0, UH.jsx)(kL, {
            state: VL(rH, EH)
          }), OL(rH) && (0, UH.jsx)("span", {
            className: "GreenvilleBoardBadge GreenvilleFarmGoldenBadge",
            children: AH("greenvilleGame:farmBoardGolden")
          })]
        }),
        children: [(0, UH.jsx)(mL, {
          needs: tH
        }), (0, UH.jsx)("dl", {
          className: "GreenvilleBoardFacts",
          children: (0, UH.jsxs)("div", {
            children: [(0, UH.jsx)("dt", {
              children: AH("greenvilleGame:farmBoardReward")
            }), (0, UH.jsx)("dd", {
              children: (0, UH.jsx)(oL, {
                order: rH
              })
            })]
          })
        }), (0, UH.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [!zH && (0, UH.jsx)(yH.i, {
            onClick: () => {
              LH.accept(SH)
            },
            children: AH("greenvilleGame:farmOrderAccept")
          }), zH && EH && (0, UH.jsxs)("span", {
            className: "GreenvilleFarmTracking",
            children: [(0, UH.jsx)(pH.c, {
              name: "crosshairs"
            }), AH("greenvilleGame:farmOrderTracking")]
          }), zH && !EH && (0, UH.jsx)(yH.W, {
            onClick: () => {
              LH.track(SH)
            },
            children: AH("greenvilleGame:farmOrderTrack")
          }), zH && (0, UH.jsx)(yH.u, {
            disabled: !CH,
            loading: BH.delivering.includes(SH),
            onClick: () => {
              LH.deliver(SH)
            },
            children: AH("greenvilleGame:farmOrderDeliver")
          }), zH && !CH && (0, UH.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: AH("greenvilleGame:farmBoardMissing", {
              count: XH
            })
          })]
        })]
      })
    }

    function fL(HH) {
      let {
        view: BH,
        controller: LH
      } = HH;
      const {
        t: AH
      } = (0, PH.B)();
      return (0, UH.jsxs)(UH.Fragment, {
        children: [(0, UH.jsx)(zB, {
          roomy: !0,
          children: BH.orders.map((HH => (0, UH.jsxs)(CB, {
            icon: (0, UH.jsx)(bL, {
              order: HH
            }),
            name: AH(HH.nameKey),
            selected: HH.slot === BH.selectedOrder,
            className: uH()("GreenvilleFarmBasket", {
              WantsGolden: OL(HH)
            }),
            onSelect: () => {
              LH.selectOrder(HH.slot)
            },
            children: [(0, UH.jsx)(kL, {
              state: VL(HH, HH.slot === BH.tracked)
            }), (0, UH.jsx)(mL, {
              needs: HH.needs
            }), (0, UH.jsx)(oL, {
              order: HH,
              inTile: !0
            })]
          }, HH.slot)))
        }), (0, UH.jsx)(IL, {
          view: BH,
          controller: LH
        })]
      })
    }

    function lL(HH) {
      let {
        line: BH,
        selected: LH,
        onSelect: AH
      } = HH;
      const [rH, SH, hH, , tH] = BH, zH = null !== SH;
      return (0, UH.jsxs)(CB, {
        icon: (0, UH.jsx)(PL, {
          item: rH,
          golden: zH
        }),
        name: (0, UH.jsx)(TL, {
          item: rH,
          goldenName: SH
        }),
        selected: LH,
        className: uH()("GreenvilleFarmCrate", {
          Golden: zH,
          Empty: 0 === hH
        }),
        onSelect: AH,
        children: [zH && (0, UH.jsx)(vL, {}), hH > 0 && (0, UH.jsxs)("span", {
          className: "GreenvilleBoardBadge GreenvilleFarmHeld",
          children: ["\xd7", hH]
        }), (0, UH.jsx)(KB, {
          amount: tH,
          inTile: !0
        })]
      })
    }

    function KL(HH) {
      let {
        view: BH,
        controller: LH
      } = HH;
      const {
        t: AH
      } = (0, PH.B)(), rH = [...BH.sellLines, ...BH.goldenLines], SH = rH.some((HH => hL(HH, !1) > 0)), hH = rH.some((HH => hL(HH, !0) > 0));
      return (0, UH.jsxs)("div", {
        className: "GreenvilleFarmSign",
        children: [(0, UH.jsx)("h3", {
          className: "GreenvilleFarmSignBoard",
          children: AH("greenvilleGame:farmBoardPrices")
        }), (0, UH.jsxs)("div", {
          className: "GreenvilleFarmSignActions",
          children: [(0, UH.jsx)(yH.i, {
            disabled: !SH,
            onClick: LH.sellSpare,
            children: AH("greenvilleGame:farmStallSellSurplus")
          }), (0, UH.jsx)(yH.O, {
            disabled: !hH,
            onClick: LH.sellAll,
            children: AH("greenvilleGame:farmStallSellAll")
          })]
        })]
      })
    }

    function cL(HH) {
      let {
        line: BH,
        controller: LH
      } = HH;
      const {
        t: AH
      } = (0, PH.B)(), [rH, SH, hH, tH, zH] = BH, CH = null !== SH, EH = hL(BH, !1);
      return (0, UH.jsxs)(EB, {
        icon: (0, UH.jsx)(PL, {
          item: rH,
          golden: CH
        }),
        name: (0, UH.jsx)(TL, {
          item: rH,
          goldenName: SH
        }),
        badges: CH && (0, UH.jsx)("span", {
          className: "GreenvilleBoardBadge GreenvilleFarmGoldenBadge",
          children: AH("greenvilleGame:farmBoardGolden")
        }),
        children: [CH && (0, UH.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: AH("greenvilleGame:farmBoardGoldenBlurb")
        }), (0, UH.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, UH.jsxs)("div", {
            children: [(0, UH.jsx)("dt", {
              children: AH("greenvilleGame:boardYouHave")
            }), (0, UH.jsx)("dd", {
              children: hH
            })]
          }), tH > 0 && (0, UH.jsxs)("div", {
            children: [(0, UH.jsx)("dt", {
              children: AH("greenvilleGame:farmBoardKept")
            }), (0, UH.jsx)("dd", {
              children: tH
            })]
          }), (0, UH.jsxs)("div", {
            children: [(0, UH.jsx)("dt", {
              children: AH("greenvilleGame:farmBoardSpare")
            }), (0, UH.jsx)("dd", {
              children: EH
            })]
          }), (0, UH.jsxs)("div", {
            children: [(0, UH.jsx)("dt", {
              children: AH("greenvilleGame:farmBoardPriceEach")
            }), (0, UH.jsx)("dd", {
              children: (0, UH.jsx)(KB, {
                amount: zH
              })
            })]
          })]
        }), (0, UH.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [EH > 0 && (0, UH.jsx)(yH.u, {
            onClick: () => {
              LH.sell(rH, CH)
            },
            children: AH("greenvilleGame:farmBoardSell", {
              count: EH
            })
          }), 0 === hH && (0, UH.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: AH("greenvilleGame:farmStallNothing")
          }), hH > 0 && 0 === EH && (0, UH.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: AH("greenvilleGame:farmBoardAllKept")
          })]
        })]
      })
    }

    function eL(HH) {
      let {
        view: BH,
        produce: LH,
        controller: AH
      } = HH;
      const {
        t: rH
      } = (0, PH.B)(), SH = HH => {
        const [BH, rH] = HH;
        return (0, UH.jsx)(lL, {
          line: HH,
          selected: tL(HH, LH),
          onSelect: () => {
            AH.selectProduce({
              item: BH,
              golden: null !== rH
            })
          }
        }, `${BH}|${null!==rH}`)
      };
      return (0, UH.jsxs)(UH.Fragment, {
        children: [(0, UH.jsxs)(zB, {
          children: [(0, UH.jsx)(KL, {
            view: BH,
            controller: AH
          }), BH.goldenLines.length > 0 && (0, UH.jsxs)(UH.Fragment, {
            children: [(0, UH.jsx)("h4", {
              className: "GreenvilleFarmSection Golden",
              children: rH("greenvilleGame:farmBoardGoldenCrops")
            }), BH.goldenLines.map(SH), (0, UH.jsx)("hr", {
              className: "GreenvilleFarmSection"
            })]
          }), BH.sellLines.map(SH)]
        }), (0, UH.jsx)(cL, {
          line: zL(BH, LH),
          controller: AH
        })]
      })
    }

    function qL(HH) {
      let {
        controller: BH
      } = HH;
      const LH = (0, xH.e)(uL, BH.getView()),
        {
          t: AH
        } = (0, PH.B)(),
        rH = function(HH) {
          const {
            t: BH
          } = (0, PH.B)();
          return "delivered" === HH.kind ? BH("greenvilleGame:tillieDelivered", {
            order: BH(HH.nameKey),
            gold: HH.gold
          }) : "sold" === HH.kind ? BH("greenvilleGame:tillieSold", {
            count: HH.count,
            gold: HH.gold
          }) : BH("greenvilleGame:tillieGreet")
        }(LH.line),
        SH = LH.selectedProduce;
      if (null === SH) return null;
      const hH = function(HH) {
        return HH.orders.filter((HH => HH.XE && HH.ready)).length
      }(LH);
      return (0, UH.jsxs)(hB, {
        open: LH.open,
        onDismiss: BH.dismiss,
        title: AH("greenvilleGame:farmBoardTitle"),
        className: "GreenvilleFarmBoard",
        headerExtra: (0, UH.jsx)(eB, {
          gold: LH.goldOwned,
          children: (0, UH.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: AH("greenvilleGame:farmBoardLevel", {
              level: LH.level
            })
          })
        }),
        tabs: (0, UH.jsx)(tB, {
          tabs: [{
            id: "orders",
            label: AH("greenvilleGame:farmBoardOrdersTab"),
            badge: hH > 0 && (0, UH.jsx)("span", {
              className: "GreenvilleBoardBadge GreenvilleFarmReadyBadge",
              children: AH("greenvilleGame:farmBoardReadyCount", {
                count: hH
              })
            })
          }, {
            id: "stall",
            label: AH("greenvilleGame:farmBoardStallTab")
          }],
          selected: LH.tab,
          onSelect: BH.selectTab
        }),
        status: {
          speaker: AH("greenvilleGame:farmTillieName"),
          line: rH
        },
        children: ["orders" === LH.tab && (0, UH.jsx)(fL, {
          view: LH,
          controller: BH
        }), "stall" === LH.tab && (0, UH.jsx)(eL, {
          view: LH,
          produce: SH,
          controller: BH
        })]
      })
    }
    var gL = LH(39361);

    function NL(HH) {
      let {
        controller: BH
      } = HH;
      (0, xH.e)(QL, null);
      const {
        t: LH
      } = (0, PH.B)(), AH = BH.getTracker();
      return null === AH ? null : (0, UH.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, UH.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: LH(AH.nameKey)
        }), (0, UH.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: AH.needs.map((HH => {
            let [BH, AH, rH, SH] = HH;
            return (0, UH.jsxs)("li", {
              className: uH()("GreenvilleTrackerRow", {
                Done: SH >= rH,
                Golden: null !== AH
              }),
              children: [(0, UH.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, UH.jsx)(MH.e, {
                  itemName: BH,
                  amount: 0
                })
              }), (0, UH.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: null !== AH && void 0 !== AH ? AH : (0, gL.h)(LH, BH)
              }), (0, UH.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [Math.min(SH, rH), "/", rH]
              })]
            }, `${BH}|${AH}`)
          }))
        }), AH.ready && (0, UH.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: LH("greenvilleGame:farmOrderReady")
        })]
      })
    }
    const RL = "greenvillePlaceView",
      jL = "greenvilleMoodView";
    class nL {
      constructor(HH, BH) {
        this.publishPlace = HH, this.publishMood = BH, this.place = null, this.mood = null
      }
      getPlace() {
        return this.place
      }
      getMood() {
        return this.mood
      }
      kX(HH) {
        const BH = performance.now();
        switch (HH[0]) {
          case "hudMood": {
            const [, LH, AH, rH, SH, hH, tH] = HH;
            return this.mood = {
              energy: LH,
              earningsPercent: AH,
              breakEvenEnergy: rH,
              restedEndsAt: SH > 0 ? BH + SH : 0,
              adBoosted: hH,
              luckPercent: tH
            }, void this.publishMood(this.mood)
          }
          case "hudTown": {
            const [BH, LH, AH] = HH;
            this.place = {
              kind: BH,
              place: LH,
              levels: AH
            };
            break
          }
          case "hudJob": {
            const [BH, LH, AH, rH, SH, hH, tH, zH, CH] = HH;
            this.place = {
              kind: BH,
              place: LH,
              job: AH,
              level: rH,
              expInto: SH,
              expNeeded: hH,
              status: null === tH ? null : FL(tH),
              next: null === zH ? null : {
                item: zH[0],
                nameKey: zH[1],
                level: zH[2]
              },
              stats: CH.map((HH => {
                let [BH, LH, AH, rH] = HH;
                return {
                  stat: BH,
                  value: LH,
                  max: AH,
                  boosted: rH
                }
              }))
            };
            break
          }
          case "hudHome": {
            const [LH, AH, rH, SH, hH, tH, zH, CH, EH] = HH;
            this.place = {
              kind: LH,
              houseName: AH,
              ownerName: rH,
              isOwner: SH,
              visitorsAllowed: hH,
              pvp: tH,
              parkour: zH,
              runStartedAt: CH < 0 ? null : this.getRunStart(BH - CH),
              bestTimes: EH.map((HH => {
                let [BH, LH] = HH;
                return {
                  playerName: BH,
                  seconds: LH
                }
              }))
            };
            break
          }
          case "hudSpleef": {
            const [BH, LH, AH] = HH;
            this.place = {
              kind: BH,
              eliminations: LH,
              wins: AH
            };
            break
          }
        }
        this.publishPlace(this.place)
      }
      getRunStart(HH) {
        var BH;
        const LH = "hudHome" === (null === (BH = this.place) || void 0 === BH ? void 0 : BH.kind) ? this.place.runStartedAt : null;
        return null !== LH && Math.abs(LH - HH) < 500 ? LH : HH
      }
    }

    function FL(HH) {
      switch (HH[0]) {
        case "hudTier":
          return {
            kind: HH[0], tierKey: HH[1], locked: HH[2]
          };
        case "hudBay":
          return {
            kind: HH[0], materialKey: HH[1], objectKey: HH[2], percent: HH[3]
          };
        case "hudBayEmpty":
          return {
            kind: HH[0]
          };
        case "hudFarmTier":
          return {
            kind: HH[0], goldenPercent: HH[1]
          }
      }
    }
    var DL = LH(3770),
      wL = LH(1204),
      ZL = LH(176);
    const dL = JSON.parse('{"e":{"constructionSiteA":{"name":"Construction Site A"},"quarry":{"name":"The Quarry","skill":"Mining"},"industry":{"name":"Demolition Yard","skill":"Demolition"},"market":{"name":"Market Street","skill":"Market"},"lumberMill":{"name":"Lumber Mill","skill":"Woodcutting"},"farm":{"name":"Greenville Farm","skill":"Farming"},"constructionSiteB":{"name":"Construction Site B"},"dealership":{"name":"Wheeler\'s Wheels"},"postOffice":{"name":"Post Office & Diner"},"station":{"name":"The Station"},"docks":{"name":"The Docks"}},"f":[[{"kind":"residential","name":"Hillside"},{"kind":"district","district":"quarry"},{"kind":"district","district":"industry"},{"kind":"residential","name":"Ridgeview"}],[{"kind":"residential","name":"Willow Gardens"},{"kind":"district","district":"constructionSiteA"},{"kind":"district","district":"market"},{"kind":"residential","name":"Maple Row"}],[{"kind":"residential","name":"Birchwood"},{"kind":"district","district":"farm"},{"kind":"district","district":"lumberMill"},{"kind":"district","district":"dealership"}],[{"kind":"residential","name":"Seaview"},{"kind":"district","district":"constructionSiteB"},{"kind":"residential","name":"Harbour Terrace"},{"kind":"residential","name":"Lighthouse Point"}]]}'),
      aL = ZL.g.xX,
      sL = 1e3 * aL,
      JL = aL,
      iL = JL + 2 * aL,
      pL = 4 * iL + JL;

    function yL(HH, BH, LH) {
      return BH >= HH.x0 && BH <= HH.x1 && LH >= HH.z0 && LH <= HH.z1
    }
    const HA = dL.f,
      BA = Object.fromEntries(Object.entries(dL.e).map((HH => {
        let [BH, {
          name: LH
        }] = HH;
        return [BH, LH]
      })));

    function LA(HH, BH) {
      return [sL + JL + HH * iL, sL + JL + BH * iL]
    }

    function AA() {
      const HH = [];
      HA.forEach(((BH, LH) => {
        BH.forEach(((BH, AH) => {
          if ("residential" !== BH.kind) return;
          const [rH, SH] = LA(AH, LH);
          for (const [LH, hH, tH] of [
              [0, 0, "north"],
              [1, 0, "north"],
              [0, 1, "south"],
              [1, 1, "south"]
            ]) HH.push({
            chunk: [rH / aL + LH, 0, SH / aL + hH],
            facing: tH,
            neighbourhood: BH.name
          })
        }))
      }));
      const BH = sL + pL / 2,
        LH = HH => {
          let {
            chunk: LH
          } = HH;
          return Math.hypot(LH[0] * aL + aL / 2 - BH, LH[2] * aL + aL / 2 - BH)
        };
      return HH.sort(((HH, BH) => LH(HH) - LH(BH)))
    }
    const rA = {
        market: "Crate",
        demolition: "Moonstone Explosive",
        mining: "Iron Pickaxe",
        woodcutting: "Iron Axe",
        farming: "Wheat"
      },
      SA = {
        earningPower: "greenvilleGame:marketEarningPower",
        power: "greenvilleGame:demolitionPower",
        points: "greenvilleGame:demolitionPoints",
        depth: "greenvilleGame:miningDepth",
        value: "greenvilleGame:miningValue",
        backpack: "greenvilleGame:miningBackpack",
        luck: "greenvilleGame:luck"
      };

    function hA(HH, BH, LH, AH) {
      switch (BH.kind) {
        case "hudTown":
          return "city" !== BH.place ? {
            key: BH.place,
            name: HH(`greenvilleGame:${BH.place}`),
            eyebrow: null
          } : "tile" === LH.kind ? {
            key: `place|${BA[LH.district]}`,
            name: BA[LH.district],
            eyebrow: null
          } : "outside" === LH.kind ? {
            key: "city|outside",
            name: HH("greenvilleGame:placeGreenville"),
            eyebrow: null
          } : null;
        case "hudJob": {
          const LH = function(HH, BH) {
            switch (BH) {
              case "quarry":
                return BA.quarry;
              case "demolitionYard":
                return BA.industry;
              case "marketStreet":
                return BA.market;
              case "farm":
                return BA.farm;
              case "lumberMill":
                return BA.lumberMill;
              case "supermarket":
                return HH("greenvilleGame:market");
              case "demolition":
              case "mining":
              case "woodcutting":
              case "farming":
                return HH(`greenvilleGame:${BH}`)
            }
          }(HH, BH.place);
          return {
            key: `place|${LH}`,
            name: LH,
            eyebrow: null
          }
        }
        case "hudHome": {
          const LH = BH.isOwner ? HH("greenvilleGame:placeYourHouse") : HH("greenvilleGame:homePlayersHouse", {
              player: (0, wL.f)(BH.ownerName, AH)
            }),
            rH = `home|${BH.ownerName}|${BH.houseName}`;
          return null === BH.houseName ? {
            key: rH,
            name: LH,
            eyebrow: null
          } : {
            key: rH,
            name: BH.houseName,
            eyebrow: LH
          }
        }
        case "hudSpleef":
          return {
            key: "spleef", name: HH("greenvilleGame:placeSpleef"), eyebrow: null
          }
      }
    }

    function tA(HH) {
      let {
        controller: BH,
        children: LH
      } = HH;
      (0, xH.e)(RL, null);
      const [AH, rH] = (0, tH.useState)(null);
      (0, DL.h)(AH, ".RightElements");
      const SH = BH.getPlace();
      return (0, UH.jsx)(WH.e, {
        placement: "topRight",
        children: (0, UH.jsx)("div", {
          className: "GreenvilleHudColumn",
          children: (0, UH.jsxs)("div", {
            ref: rH,
            className: "GreenvilleHudColumnStack",
            children: [LH, "hudTown" === (null === SH || void 0 === SH ? void 0 : SH.kind) && (0, UH.jsx)(CA, {
              levels: SH.levels
            }), "hudJob" === (null === SH || void 0 === SH ? void 0 : SH.kind) && (0, UH.jsx)(EA, {
              job: SH
            }), "hudHome" === (null === SH || void 0 === SH ? void 0 : SH.kind) && SH.bestTimes.length > 0 && (0, UH.jsx)(XA, {
              home: SH
            }), "hudSpleef" === (null === SH || void 0 === SH ? void 0 : SH.kind) && (0, UH.jsx)("div", {
              className: "GreenvilleTrackerCard",
              children: (0, UH.jsx)(zA, {
                rows: [
                  ["greenvilleGame:spleefEliminations", SH.eliminations],
                  ["greenvilleGame:spleefWins", SH.wins]
                ]
              })
            })]
          })
        })
      })
    }

    function zA(HH) {
      let {
        rows: BH
      } = HH;
      const {
        t: LH
      } = (0, PH.B)();
      return (0, UH.jsx)("ul", {
        className: "GreenvilleTrackerRows",
        children: BH.map((HH => {
          let [BH, AH] = HH;
          return (0, UH.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, UH.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: LH(BH)
            }), (0, UH.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: (0, eH.f)(AH)
            })]
          }, BH)
        }))
      })
    }

    function CA(HH) {
      let {
        levels: BH
      } = HH;
      const {
        t: LH
      } = (0, PH.B)();
      return (0, UH.jsxs)("div", {
        className: "GreenvilleTrackerCard GreenvilleJobsStrip",
        children: [(0, UH.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: LH("greenvilleGame:jobs")
        }), (0, UH.jsx)("ul", {
          className: "GreenvilleJobsStripJobs",
          children: hH.map(((HH, AH) => {
            const rH = BH[AH];
            return (0, UH.jsxs)("li", {
              className: uH()("GreenvilleJobsStripJob", {
                Max: rH >= 50
              }),
              "aria-label": LH("greenvilleGame:jobLevel", {
                job: LH(`greenvilleGame:${HH}`),
                level: rH
              }),
              children: [(0, UH.jsx)("span", {
                className: "GreenvilleJobsStripIcon",
                "aria-hidden": "true",
                children: (0, UH.jsx)(MH.e, {
                  itemName: rA[HH],
                  amount: 0
                })
              }), (0, UH.jsx)("span", {
                className: "GreenvilleJobsStripLevel",
                "aria-hidden": "true",
                children: LH("greenvilleGame:levelShort", {
                  level: rH
                })
              })]
            }, HH)
          }))
        })]
      })
    }

    function EA(HH) {
      let {
        job: {
          stats: BH,
          next: LH
        }
      } = HH;
      const {
        t: AH
      } = (0, PH.B)();
      return (0, UH.jsxs)(UH.Fragment, {
        children: [BH.length > 0 && (0, UH.jsx)("div", {
          className: "GreenvilleTrackerCard",
          children: (0, UH.jsx)("ul", {
            className: "GreenvilleTrackerRows",
            children: BH.map((HH => {
              let {
                stat: BH,
                value: LH,
                max: rH,
                boosted: SH
              } = HH;
              return (0, UH.jsxs)("li", {
                className: "GreenvilleTrackerRow",
                children: [(0, UH.jsx)("span", {
                  className: "GreenvilleTrackerLabel",
                  children: AH(SA[BH])
                }), (0, UH.jsxs)("span", {
                  className: uH()("GreenvilleTrackerValue", {
                    Boosted: SH
                  }),
                  children: [(0, eH.f)(LH), null !== rH && `/${(0,eH.f)(rH)}`]
                })]
              }, BH)
            }))
          })
        }), null !== LH && (0, UH.jsxs)("div", {
          className: "GreenvilleTrackerCard GreenvilleNextUnlock",
          children: [(0, UH.jsx)("span", {
            className: "GreenvilleNextUnlockEyebrow",
            children: AH("greenvilleGame:nextUnlock")
          }), (0, UH.jsxs)("div", {
            className: "GreenvilleNextUnlockBody",
            children: [(0, UH.jsx)("span", {
              className: "GreenvilleNextUnlockIcon",
              "aria-hidden": "true",
              children: (0, UH.jsx)(MH.e, {
                itemName: LH.item,
                amount: 0
              })
            }), (0, UH.jsxs)("span", {
              className: "GreenvilleNextUnlockText",
              children: [(0, UH.jsx)("strong", {
                className: "GreenvilleNextUnlockName",
                children: AH(LH.nameKey)
              }), (0, UH.jsx)("span", {
                className: "GreenvilleNextUnlockLevel",
                children: AH("greenvilleGame:unlockAtLevel", {
                  level: LH.level
                })
              })]
            })]
          })]
        })]
      })
    }

    function XA(HH) {
      let {
        home: BH
      } = HH;
      const {
        t: LH,
        selectedLanguage: AH
      } = (0, PH.B)(), rH = (0, fB.e)("hiddenPlayerNames");
      return (0, UH.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, UH.jsxs)("strong", {
          className: "GreenvilleTrackerTitle GreenvilleBestTimesTitle",
          children: [(0, UH.jsx)(pH.c, {
            name: "trophy"
          }), LH("greenvilleGame:parkourBestTimes")]
        }), (0, UH.jsx)("ol", {
          className: "GreenvilleTrackerRows",
          children: BH.bestTimes.slice(0, 3).map(((HH, BH) => {
            let {
              playerName: SH,
              seconds: hH
            } = HH;
            return (0, UH.jsxs)("li", {
              className: uH()("GreenvilleTrackerRow GreenvilleBestTime", {
                First: 0 === BH
              }),
              children: [(0, UH.jsx)("span", {
                className: "GreenvilleBestTimeRank",
                children: BH + 1
              }), (0, UH.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: (0, wL.f)(SH, rH)
              }), (0, UH.jsx)("span", {
                className: "GreenvilleTrackerValue",
                children: LH("greenvilleGame:parkourTime", {
                  seconds: hH.toLocaleString(AH.code, {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1
                  })
                })
              })]
            }, `${BH}|${SH}`)
          }))
        })]
      })
    }
    const GA = "greenvilleLevelUpsView";
    class YA {
      constructor(HH) {
        this.publishLevelUps = HH, this.levelUps = [], this.token = 0, this.revealed = HH => {
          this.setLevelUps(this.levelUps.filter((BH => BH.token !== HH)))
        }
      }
      getLevelUps() {
        return this.levelUps
      }
      kX(HH) {
        const [BH, LH, AH] = HH;
        this.setLevelUps([...this.levelUps, {
          job: BH,
          level: LH,
          unlock: null === AH ? null : {
            item: AH[0],
            nameKey: AH[1],
            level: AH[2]
          },
          token: ++this.token
        }])
      }
      setLevelUps(HH) {
        this.levelUps = HH, this.publishLevelUps(HH)
      }
    }
    const uA = [{
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
      QA = Array.from({
        length: 16
      }, ((HH, BH) => ({
        "--angle": 360 * BH / 16 + BH % 3 * 7 + "deg",
        "--distance": 5 + BH % 4 * 1.2 + "rem",
        "--delay": BH % 5 * 30 + "ms"
      })));

    function WA(HH) {
      let {
        controller: BH
      } = HH;
      (0, xH.e)(GA, null);
      const LH = BH.getLevelUps();
      return 0 === LH.length ? null : (0, cH.createPortal)((0, UH.jsx)(MA, {
        levelUp: LH[0],
        onDone: BH.revealed
      }, LH[0].token), document.body)
    }

    function MA(HH) {
      let {
        levelUp: BH,
        onDone: LH
      } = HH;
      const {
        t: AH
      } = (0, PH.B)(), rH = (0, tH.useRef)(null), {
        unlock: SH
      } = BH, hH = null === SH ? 2600 : 4200;
      (0, tH.useLayoutEffect)((() => {
        const HH = document.querySelector(".GreenvilleTopBar");
        HH && rH.current.style.setProperty("--top-bar-bottom", `${HH.getBoundingClientRect().bottom}px`)
      }), []), (0, tH.useEffect)((() => {
        const HH = rH.current.animate(uA, {
          duration: hH,
          fill: "both"
        });
        return HH.onfinish = () => {
          LH(BH.token)
        }, () => {
          HH.onfinish = null, HH.cancel()
        }
      }), [BH, hH, LH]);
      const zH = AH(`greenvilleGame:${BH.job}`);
      return (0, UH.jsxs)("div", {
        ref: rH,
        className: uH()("GreenvilleLevelUpReveal", {
          Plain: null === SH
        }),
        style: {
          "--reveal-ms": `${hH}ms`
        },
        role: "status",
        children: [null !== SH && (0, UH.jsx)("div", {
          className: "GreenvilleLevelUpRevealStage",
          "aria-hidden": "true",
          children: (0, UH.jsxs)("div", {
            className: "GreenvilleLevelUpRevealMover",
            children: [(0, UH.jsx)("div", {
              className: "GreenvilleLevelUpRevealRays"
            }), (0, UH.jsx)("div", {
              className: "GreenvilleLevelUpRevealGlow"
            }), (0, UH.jsx)("div", {
              className: "GreenvilleLevelUpRevealSparks",
              children: QA.map(((HH, BH) => (0, UH.jsx)("span", {
                style: HH
              }, BH)))
            }), (0, UH.jsx)("div", {
              className: "GreenvilleLevelUpRevealIcon",
              children: (0, UH.jsx)(MH.e, {
                itemName: SH.item,
                amount: 0
              })
            })]
          })
        }), (0, UH.jsxs)("div", {
          className: "GreenvilleLevelUpRevealText",
          children: [null !== SH && (0, UH.jsxs)(UH.Fragment, {
            children: [(0, UH.jsx)("span", {
              className: "GreenvilleLevelUpRevealHeading SmallTextBold",
              children: AH("greenvilleGame:levelUpUnlockHeading", {
                job: zH,
                level: SH.level
              })
            }), (0, UH.jsx)("span", {
              className: "GreenvilleLevelUpRevealName FullyFancyText",
              children: AH(SH.nameKey)
            })]
          }), null === SH && (0, UH.jsxs)(UH.Fragment, {
            children: [(0, UH.jsx)("span", {
              className: "GreenvilleLevelUpRevealHeading SmallTextBold",
              children: AH("greenvilleGame:levelUpHeading")
            }), (0, UH.jsx)("span", {
              className: "GreenvilleLevelUpRevealName FullyFancyText",
              children: AH("greenvilleGame:jobLevel", {
                job: zH,
                level: BH.level
              })
            })]
          })]
        })]
      })
    }
    const xA = "greenvilleMarketView";

    function vA(HH) {
      return HH.map((HH => {
        let [BH, LH, AH, rH, SH, hH] = HH;
        return {
          key: `${BH}|${LH}|${AH}|${rH}|${SH}`,
          icon: BH,
          target: [LH, AH, rH],
          item: SH,
          label: hH
        }
      }))
    }
    class PA {
      constructor(HH) {
        this.AX = HH, this.view = null
      }
      getView() {
        return this.view
      }
      kX(HH) {
        const BH = performance.now();
        switch (HH[0]) {
          case "hide":
            this.view = null;
            break;
          case "marketIdle":
            this.view = {
              job: null,
              waypoints: vA(HH[1])
            };
            break;
          case "marketPick":
          case "marketStock": {
            const [LH, AH, rH, SH] = HH;
            this.view = {
              job: {
                kind: LH,
                goods: AH,
                tipEndsAt: SH > 0 ? BH + SH : 0
              },
              waypoints: vA(rH)
            };
            break
          }
          case "marketDeliver": {
            const [LH, AH, rH, SH, hH, tH] = HH;
            this.view = {
              job: {
                kind: LH,
                parcelsLeft: AH,
                delivered: rH,
                gold: SH,
                endsAt: BH + tH
              },
              waypoints: vA(hH)
            };
            break
          }
        }
        this.AX(this.view)
      }
    }
    var TA = LH(40413);
    const UA = [{
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

    function VA(HH) {
      var BH;
      let {
        controller: LH
      } = HH;
      (0, xH.e)(xA, null);
      const AH = null === (BH = LH.getView()) || void 0 === BH ? void 0 : BH.job;
      return "marketDeliver" !== (null === AH || void 0 === AH ? void 0 : AH.kind) ? null : (0, UH.jsx)(OA, {
        endsAt: AH.endsAt,
        delivered: AH.delivered
      })
    }

    function OA(HH) {
      let {
        endsAt: BH,
        delivered: LH
      } = HH;
      const {
        t: AH
      } = (0, PH.B)(), rH = Math.max(0, Math.ceil((0, TA.g)(BH))), SH = (0, tH.useRef)(null), hH = (0, tH.useRef)(null), zH = (0, tH.useRef)({
        endsAt: BH,
        delivered: LH
      }), [CH, EH] = (0, tH.useState)(null);
      (0, tH.useLayoutEffect)((() => {
        const HH = LH > zH.current.delivered ? Math.round((BH - zH.current.endsAt) / 1e3) : 0;
        var AH;
        (zH.current = {
          endsAt: BH,
          delivered: LH
        }, HH <= 0) || (EH((BH => {
          var LH;
          return {
            seconds: HH,
            token: (null !== (LH = null === BH || void 0 === BH ? void 0 : BH.token) && void 0 !== LH ? LH : 0) + 1
          }
        })), window.matchMedia("(prefers-reduced-motion: reduce)").matches || (null === (AH = hH.current) || void 0 === AH || AH.cancel(), hH.current = SH.current.animate(UA, {
          duration: 420,
          easing: "ease-out"
        })))
      }), [BH, LH]), (0, tH.useEffect)((() => () => {
        var HH;
        null === (HH = hH.current) || void 0 === HH || HH.cancel()
      }), []);
      const XH = Math.floor(rH / 60);
      return (0, UH.jsxs)("div", {
        className: uH()("GreenvilleMarketCountdown", {
          Urgent: rH < 10
        }),
        role: "timer",
        children: [(0, UH.jsxs)("div", {
          ref: SH,
          className: "GreenvilleMarketCountdownTime FullyFancyText",
          children: [XH, ":", String(rH % 60).padStart(2, "0")]
        }), null !== CH && (0, UH.jsx)("div", {
          className: "GreenvilleMarketCountdownAdded FullyFancyText",
          onAnimationEnd: () => {
            EH(null)
          },
          children: AH("greenvilleGame:marketCountdownAdded", {
            seconds: CH.seconds
          })
        }, CH.token)]
      })
    }

    function bA(HH) {
      var BH;
      let {
        controller: LH
      } = HH;
      (0, xH.e)(xA, null);
      const AH = null === (BH = LH.getView()) || void 0 === BH ? void 0 : BH.job;
      return AH ? (0, UH.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: ["marketDeliver" === AH.kind && (0, UH.jsx)(oA, {
          shift: AH
        }), "marketDeliver" !== AH.kind && (0, UH.jsx)(kA, {
          task: AH
        })]
      }) : null
    }

    function kA(HH) {
      let {
        task: BH
      } = HH;
      const {
        t: LH
      } = (0, PH.B)(), AH = "marketPick" === BH.kind && BH.goods.every((HH => {
        let [, BH] = HH;
        return 0 === BH
      }));
      return (0, UH.jsxs)(UH.Fragment, {
        children: [(0, UH.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: LH("marketPick" === BH.kind ? "greenvilleGame:marketPanelOrder" : "greenvilleGame:marketPanelCrate")
        }), (0, UH.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: BH.goods.map((HH => {
            let [BH, AH, rH] = HH;
            return (0, UH.jsxs)("li", {
              className: uH()("GreenvilleTrackerRow", {
                Done: 0 === AH
              }),
              children: [(0, UH.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, UH.jsx)(MH.e, {
                  itemName: BH,
                  amount: 0
                })
              }), (0, UH.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: (0, gL.h)(LH, BH)
              }), (0, UH.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [rH - AH, "/", rH]
              })]
            }, BH)
          }))
        }), AH && (0, UH.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: LH("greenvilleGame:marketPanelReturn")
        }), !AH && 0 !== BH.tipEndsAt && (0, UH.jsx)(mA, {
          endsAt: BH.tipEndsAt
        })]
      })
    }

    function mA(HH) {
      let {
        endsAt: BH
      } = HH;
      const {
        t: LH
      } = (0, PH.B)(), AH = Math.ceil((0, TA.g)(BH));
      return AH <= 0 ? null : (0, UH.jsx)("div", {
        className: "GreenvilleTrackerTip",
        children: LH("greenvilleGame:marketPanelTip", {
          seconds: AH
        })
      })
    }

    function oA(HH) {
      let {
        shift: BH
      } = HH;
      const {
        t: LH
      } = (0, PH.B)();
      return (0, UH.jsxs)(UH.Fragment, {
        children: [(0, UH.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: LH("greenvilleGame:marketPanelDeliveries")
        }), (0, UH.jsxs)("ul", {
          className: "GreenvilleTrackerRows",
          children: [(0, UH.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, UH.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: LH("greenvilleGame:marketPanelParcels")
            }), (0, UH.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: BH.parcelsLeft
            })]
          }), (0, UH.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, UH.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: LH("greenvilleGame:marketPanelDelivered")
            }), (0, UH.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: BH.delivered
            })]
          }), (0, UH.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, UH.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: LH("greenvilleGame:marketPanelEarned")
            }), (0, UH.jsx)("span", {
              className: "GreenvilleTrackerIcon",
              "aria-hidden": "true",
              children: (0, UH.jsx)(MH.e, {
                itemName: "Gold Coin",
                amount: 0
              })
            }), (0, UH.jsx)("span", {
              className: "GreenvilleTrackerValue Gold",
              children: (0, eH.f)(BH.gold)
            })]
          })]
        }), 0 === BH.parcelsLeft && (0, UH.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: LH("greenvilleGame:marketPanelBackToBay")
        })]
      })
    }
    const IA = {
      marketNpc: "comment-dots",
      marketShelf: "cart-shopping",
      marketHouse: "house",
      marketDepot: "truck"
    };

    function fA(HH) {
      var BH;
      let {
        market: LH,
        markers: AH
      } = HH;
      (0, xH.e)(xA, null);
      const rH = null === (BH = LH.getView()) || void 0 === BH ? void 0 : BH.waypoints;
      return null !== rH && void 0 !== rH && rH.length ? (0, UH.jsx)("div", {
        className: "GreenvilleMarketWaypoints",
        children: rH.map((HH => (0, UH.jsx)(lA, {
          waypoint: HH,
          bind: AH.waypoints.bindMarker(HH.key)
        }, HH.key)))
      }) : null
    }

    function lA(HH) {
      let {
        waypoint: {
          icon: BH,
          item: LH,
          label: AH
        },
        bind: rH
      } = HH;
      const SH = "marketHouse" === BH;
      return (0, UH.jsxs)("div", {
        ref: rH,
        className: uH()("GreenvilleMarketWaypoint", {
          House: SH
        }),
        children: [SH && (0, UH.jsx)(KA, {}), (0, UH.jsxs)("div", {
          className: "GreenvilleMarketWaypointBadge",
          children: [null !== LH && (0, UH.jsx)("span", {
            className: "GreenvilleMarketWaypointItem",
            children: (0, UH.jsx)(MH.e, {
              itemName: LH,
              amount: 0
            })
          }), null === LH && (0, UH.jsx)(pH.c, {
            name: IA[BH]
          })]
        }), (0, UH.jsxs)("div", {
          className: "GreenvilleMarketWaypointLabels",
          children: [null !== AH && (0, UH.jsx)("span", {
            className: "GreenvilleMarketWaypointLabel SmallTextBold",
            children: AH
          }), (0, UH.jsx)("span", {
            className: "GreenvilleMarketWaypointDistance SmallTextBold"
          })]
        })]
      })
    }

    function KA() {
      const HH = (0, tH.useRef)(null);
      return (0, xL.d)(HH), (0, UH.jsx)("span", {
        ref: HH,
        className: "GreenvilleMarketWaypointPulse"
      })
    }
    var cA = LH(40419);
    class eA {
      constructor(HH) {
        this.market = HH, this.waypoints = new cA.b({
          labels: "GreenvilleMarketWaypointLabels",
          distance: "GreenvilleMarketWaypointDistance"
        }, "greenvilleGame:marketDistance")
      }
      frame(HH, BH) {
        this.waypoints.setRender(HH);
        const LH = this.market.getView();
        if (LH && this.waypoints.hasMarkers())
          for (const {
              key: AH,
              target: rH
            }
            of LH.waypoints) this.waypoints.update(AH, rH[0], rH[1] + 1, rH[2], BH)
      }
    }
    const qA = {
      Street: "St",
      Avenue: "Ave",
      Road: "Rd",
      Lane: "Ln"
    };

    function gA(HH, BH) {
      return BH.map(((BH, LH) => {
        const AH = BH.lastIndexOf(" "),
          rH = BH.slice(AH + 1);
        let SH = qA[rH];
        return void 0 === SH && (console.warn(`Greenville street "${BH}" has no suffix abbreviation`), SH = rH), {
          axis: HH,
          line: LH,
          name: BH,
          shortName: BH.slice(0, AH),
          suffix: SH
        }
      }))
    }
    const NA = {
        eastWest: gA("eastWest", ["Hillcrest Road", "Oak Street", "Main Street", "Elm Street", "Harbour Road"]),
        northSouth: gA("northSouth", ["Willow Lane", "Birch Avenue", "Market Street", "Maple Avenue", "Station Road"])
      },
      RA = {
        kind: "outside"
      };

    function jA(HH, BH, LH) {
      return 100 * (HH + 1) + BH + (LH ? 1 : 0)
    }

    function nA(HH, BH, LH, AH) {
      return {
        x0: sL + HH,
        z0: sL + BH,
        x1: sL + HH + LH - 1,
        z1: sL + BH + AH - 1
      }
    }
    let FA = null;

    function DA(HH, BH, LH, AH) {
      if (AH && "outside" !== AH.kind) {
        const {
          box: LH
        } = AH;
        if (!yL(LH, HH, BH) && yL({
            x0: LH.x0 - 2,
            z0: LH.z0 - 2,
            x1: LH.x1 + 2,
            z1: LH.z1 + 2
          }, HH, BH)) return AH
      }
      return function(HH, BH, LH) {
        const {
          eastWest: AH,
          northSouth: rH
        } = NA;
        switch (HH.kind) {
          case "outside":
            return RA;
          case "street": {
            const BH = HH.segment * iL + JL,
              LH = HH.line * iL;
            return {
              kind: "street",
              box: "eastWest" === HH.axis ? nA(BH, LH, iL - JL, JL) : nA(LH, BH, JL, iL - JL),
              street: NA[HH.axis][HH.line],
              block: 100 * (HH.segment + 1)
            }
          }
          case "junction": {
            const SH = nA(HH.column * iL, HH.row * iL, JL, JL),
              hH = [AH[HH.row], rH[HH.column]],
              tH = "street" === (null === LH || void 0 === LH ? void 0 : LH.kind) ? LH.street : "junction" === (null === LH || void 0 === LH ? void 0 : LH.kind) ? LH.along : null,
              zH = tH && hH.includes(tH) ? tH : Math.abs(Math.sin(BH)) > Math.abs(Math.cos(BH)) ? hH[0] : hH[1];
            return {
              kind: "junction",
              box: SH,
              along: zH,
              cross: zH === hH[0] ? hH[1] : hH[0]
            }
          }
          case "plot": {
            const BH = HH.column * iL + JL + HH.dx * JL,
              LH = HH.row * iL + JL + HH.dz * JL,
              rH = 0 === HH.dz;
            return {
              kind: "plot",
              box: nA(BH, LH, JL, JL),
              plotId: (SH = (sL + BH) / JL, hH = (sL + LH) / JL, FA || (FA = new Map(AA().map(((HH, BH) => {
                let {
                  chunk: LH
                } = HH;
                return [`${LH[0]},${LH[2]}`, BH + 1]
              })))), FA.get(`${SH},${hH}`)),
              number: jA(HH.column, 0 === HH.dx ? 30 : 70, rH),
              street: AH[rH ? HH.row : HH.row + 1],
              neighbourhood: HH.neighbourhood
            }
          }
          case "tile": {
            const {
              column: BH,
              row: LH,
              district: rH
            } = HH;
            return {
              kind: "tile",
              box: nA(BH * iL + JL, LH * iL + JL, iL - JL, iL - JL),
              district: rH,
              number: jA(BH, 50, !0),
              street: AH[LH]
            }
          }
        }
        var SH, hH
      }(function(HH, BH) {
        const LH = HH - sL,
          AH = BH - sL;
        if (LH < 0 || AH < 0 || LH >= pL || AH >= pL) return {
          kind: "outside"
        };
        const rH = Math.floor(LH / iL),
          SH = Math.floor(AH / iL),
          hH = LH - rH * iL - JL,
          tH = AH - SH * iL - JL;
        if (hH < 0 && tH < 0) return {
          kind: "junction",
          column: rH,
          row: SH
        };
        if (tH < 0) return {
          kind: "street",
          axis: "eastWest",
          line: SH,
          segment: rH
        };
        if (hH < 0) return {
          kind: "street",
          axis: "northSouth",
          line: rH,
          segment: SH
        };
        const zH = HA[SH][rH];
        return "residential" === zH.kind ? {
          kind: "plot",
          column: rH,
          row: SH,
          dx: Math.floor(hH / JL),
          dz: Math.floor(tH / JL),
          neighbourhood: zH.name
        } : {
          kind: "tile",
          column: rH,
          row: SH,
          district: zH.district
        }
      }(HH, BH), LH, AH)
    }

    function wA(HH) {
      switch (HH.kind) {
        case "outside":
          return "outside";
        case "junction":
          return `junction|${HH.along.name}|${HH.cross.name}`;
        case "plot":
        case "tile":
          return `${HH.kind}|${HH.number}|${HH.street.name}`;
        case "street":
          return `street|${HH.block}|${HH.street.name}`
      }
    }
    var ZA = LH(40437),
      dA = LH(40433),
      aA = LH(225);
    const sA = ZL.g.xX;
    class JA {
      constructor(HH, BH, LH) {
        this.api = HH, this.map = BH, this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.image = this.context.createImageData(sA, sA), this.columns = void 0, this.lowestLayer = void 0, this.layers = void 0, this.plots = void 0, this.baked = null, this.Mu = !1, this.ids = new Uint16Array(sA * sA), this.tops = new Int32Array(sA * sA), this.edgeIds = new Uint16Array(sA), this.edgeTops = new Int32Array(sA), this.heights = void 0, this.versions = void 0, this.current = void 0, this.stale = void 0, this.painted = void 0, this.order = [], this.focus = {
          column: -1,
          row: -1
        }, this.colours = null, this.host = null, this.timer = null, this.cancelIdle = null, this.pass = HH => {
          this.cancelIdle = null;
          let BH = !1;
          const LH = performance.now();
          let AH = !0;
          if (this.colours && this.host && this.host.clientWidth > 0)
            for (const rH of this.order) {
              if (!this.readVersions(rH)) continue;
              const SH = !HH.didTimeout && HH.timeRemaining() < 2;
              if (!AH && (SH || performance.now() - LH > 6)) {
                BH = !0;
                break
              }
              AH = !1, this.versions.set(this.current, rH * this.layers), this.paint(rH % this.columns, Math.floor(rH / this.columns), this.colours.lookup, this.colours.drawn)
            }
          this.schedule(BH ? 0 : 500)
        };
        const {
          origin: AH,
          size: rH,
          Sr: SH,
          hr: hH
        } = BH.area;
        this.columns = rH / sA, this.lowestLayer = SH / sA, this.layers = (hH - SH) / sA, this.plots = new Set(LH.map((HH => {
          let {
            chunkX: BH,
            chunkZ: LH
          } = HH;
          return LH * this.columns + BH
        }))), this.heights = new Int32Array(rH * rH).fill(ZA.f), this.versions = new Float64Array(this.columns * this.columns * this.layers).fill(NaN), this.current = new Float64Array(this.layers), this.stale = new Uint8Array(this.columns * this.columns), this.painted = new Uint8Array(this.columns * this.columns), this.canvas.width = rH, this.canvas.height = rH, this.canvas.className = "GreenvilleNavMapTerrain", 0 !== LH.length ? (this.focusOn(AH + rH / 2, AH + rH / 2), Promise.all([(0, dA.c)(), this.drawBakedMap()]).then((HH => {
          let [BH] = HH;
          this.colours = {
            lookup: BH,
            drawn: BH.getDrawnIds()
          }
        }), (HH => {
          console.error("Greenville map: block colours failed to load", HH)
        })), this.schedule(0)) : this.drawBakedMap()
      }
      mount(HH) {
        this.host = HH, null === HH || void 0 === HH || HH.replaceChildren(this.canvas)
      }
      focusOn(HH, BH) {
        const {
          columns: LH
        } = this, {
          origin: AH
        } = this.map.area, rH = Math.min(LH - 1, Math.max(0, Math.floor((HH - AH) / sA))), SH = Math.min(LH - 1, Math.max(0, Math.floor((BH - AH) / sA)));
        rH === this.focus.column && SH === this.focus.row || (this.focus = {
          column: rH,
          row: SH
        }, this.order = [...this.plots].sort(((HH, BH) => Math.hypot(HH % LH - rH, Math.floor(HH / LH) - SH) - Math.hypot(BH % LH - rH, Math.floor(BH / LH) - SH))))
      }
      forget(HH, BH) {
        const LH = BH * this.columns + HH;
        this.stale[LH] = 1, this.versions.fill(NaN, LH * this.layers, (LH + 1) * this.layers)
      }
      dispose() {
        var HH, BH;
        null !== this.timer && clearTimeout(this.timer), null === (HH = this.cancelIdle) || void 0 === HH || HH.call(this), this.host = null, this.Mu = !0, null === (BH = this.baked) || void 0 === BH || BH.close(), this.baked = null
      }
      async drawBakedMap() {
        try {
          const HH = await fetch(this.map.imageUrl);
          if (!HH.ok) throw new Error(`HTTP ${HH.status}`);
          const BH = await createImageBitmap(await HH.blob(), {
            colorSpaceConversion: "none"
          });
          if (this.Mu) return void BH.close();
          this.baked = BH, this.context.drawImage(BH, 0, 0)
        } catch (HH) {
          console.error("Greenville map: the baked map failed to load", HH)
        }
      }
      schedule(HH) {
        this.timer = setTimeout((() => {
          this.timer = null, this.cancelIdle = (0, aA.d)(this.pass, {
            timeoutMs: 1e3
          })
        }), HH)
      }
      readVersions(HH) {
        const {
          origin: BH
        } = this.map.area, LH = BH / sA + HH % this.columns, AH = BH / sA + Math.floor(HH / this.columns);
        let rH = !1;
        for (let hH = 0; hH < this.layers; hH++) {
          var SH;
          const BH = null !== (SH = this.api.getChunkVersion(LH, this.lowestLayer + hH, AH)) && void 0 !== SH ? SH : 0;
          this.current[hH] = BH, rH ||= BH !== this.versions[HH * this.layers + hH]
        }
        return rH
      }
      repaintIfPainted(HH, BH) {
        const LH = BH * this.columns + HH;
        HH < this.columns && BH < this.columns && 1 === this.painted[LH] && this.versions.fill(NaN, LH * this.layers, (LH + 1) * this.layers)
      }
      storeHeights(HH, BH) {
        const {
          size: LH
        } = this.map.area;
        let AH = !1,
          rH = !1;
        for (let SH = 0; SH < this.ids.length; SH++) {
          const hH = SH % sA,
            tH = Math.floor(SH / sA),
            zH = (BH * sA + tH) * LH + HH * sA + hH,
            CH = 0 === this.ids[SH] ? ZA.f : this.tops[SH];
          this.heights[zH] !== CH && (AH ||= hH === sA - 1, rH ||= tH === sA - 1, this.heights[zH] = CH)
        }
        AH && this.repaintIfPainted(HH + 1, BH), rH && this.repaintIfPainted(HH, BH + 1)
      }
      readEdgeHeights(HH, BH, LH, AH, rH) {
        const {
          origin: SH,
          size: hH,
          Sr: tH,
          hr: zH
        } = this.map.area;
        this.api.readColumnTops(HH, BH, LH, AH, tH, zH, rH, this.edgeIds, this.edgeTops);
        const CH = LH - HH;
        for (let EH = 0; EH < sA; EH++) {
          const LH = (BH - SH + Math.floor(EH / CH)) * hH + HH - SH + EH % CH;
          this.heights[LH] = 0 === this.edgeIds[EH] ? ZA.f : this.edgeTops[EH]
        }
      }
      paint(HH, BH, LH, AH) {
        const {
          origin: rH,
          size: SH,
          Sr: hH,
          hr: tH
        } = this.map.area, zH = BH * this.columns + HH, CH = 1 === this.stale[zH];
        this.stale[zH] = 0;
        const EH = rH + HH * sA,
          XH = rH + BH * sA,
          GH = SH - (HH + 1) * sA,
          {
            ids: YH,
            tops: uH,
            heights: QH
          } = this;
        if (0 === this.current[0 - this.lowestLayer]) return void(CH && (this.context.clearRect(GH, BH * sA, sA, sA), this.baked && this.context.drawImage(this.baked, GH, BH * sA, sA, sA, GH, BH * sA, sA, sA), YH.fill(0), this.storeHeights(HH, BH)));
        this.painted[zH] = 1, this.api.readColumnTops(EH, XH, EH + sA, XH + sA, hH, tH, AH, YH, uH), this.storeHeights(HH, BH), this.plots.has(zH - 1) || this.readEdgeHeights(EH - 1, XH, EH, XH + sA, AH), this.plots.has(zH - this.columns) || this.readEdgeHeights(EH, XH - 1, EH + sA, XH, AH);
        const WH = this.image.data;
        for (let MH = 0; MH < sA; MH++)
          for (let AH = 0; AH < sA; AH++) {
            const rH = 4 * (MH * sA + sA - 1 - AH),
              hH = YH[MH * sA + AH];
            if (0 === hH) {
              WH[rH + 3] = 0;
              continue
            }
            const tH = HH * sA + AH,
              zH = BH * sA + MH;
            LH.drawPixel(WH, rH, hH, uH[MH * sA + AH], QH[(zH - 1) * SH + tH], QH[zH * SH + tH - 1])
          }
        this.context.putImageData(this.image, GH, BH * sA)
      }
    }
    const iA = "greenvilleNavAddress",
      pA = "greenvilleNavPlots",
      yA = "greenvilleNavMarkers",
      Hr = 5 * Math.PI / 180,
      Br = {
        kind: "outside"
      };
    class Lr {
      constructor(HH, BH, LH, AH) {
        this.map = HH, this.publishAddress = BH, this.publishPlots = LH, this.publishMarkers = AH, this.address = Br, this.addressKey = wA(Br), this.block = {
          x: NaN,
          z: NaN
        }, this.plots = void 0, this.markers = [], this.terrain = null, this.cX = null, this.worldResize = null, this.worldPx = 0, this.arrowTrack = null, this.arrow = null, this.zoom = 0, this.lastFrameMs = NaN, this.written = {
          u: NaN,
          v: NaN,
          scale: NaN,
          heading: NaN
        }, this.reducedMotion = null, this.logLocalScale = void 0, this.mountTerrain = HH => {
          this.terrain.mount(HH)
        }, this.mountWorld = HH => {
          var BH;
          this.cX = HH, this.written = {
            u: NaN,
            v: NaN,
            scale: NaN,
            heading: NaN
          }, null === (BH = this.worldResize) || void 0 === BH || BH.disconnect(), this.worldResize = null, HH && (this.worldResize = new ResizeObserver((HH => {
            let [BH] = HH;
            this.worldPx = BH.contentRect.width, this.written.u = NaN
          })), this.worldResize.observe(HH))
        }, this.mountArrow = HH => {
          var BH;
          this.arrowTrack = HH, this.arrow = null !== (BH = null === HH || void 0 === HH ? void 0 : HH.firstElementChild) && void 0 !== BH ? BH : null, this.written = {
            u: NaN,
            v: NaN,
            scale: NaN,
            heading: NaN
          }
        };
        const {
          origin: rH,
          size: SH
        } = HH.area;
        this.logLocalScale = Math.log(SH / 80), this.plots = {
          plots: (HH.city ? AA() : []).map(((HH, BH) => {
            let {
              chunk: LH,
              facing: AH
            } = HH;
            return {
              plotId: BH + 1,
              chunkX: LH[0] - rH / ZL.g.xX,
              chunkZ: LH[2] - rH / ZL.g.xX,
              facing: AH,
              state: "vacant",
              mine: !1
            }
          })),
          animate: !1
        }
      }
      start(HH) {
        this.terrain = new JA(HH, this.map, this.plots.plots)
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
      kX(HH) {
        const BH = [...this.plots.plots];
        for (const [AH, rH, SH] of "plotsAll" === HH[0] ? HH[1] : [HH[1]]) {
          const HH = BH[AH - 1];
          var LH;
          if (HH.state === rH && HH.mine === SH || (BH[AH - 1] = {
              ...HH,
              state: rH,
              mine: SH
            }), HH.state !== rH) null === (LH = this.terrain) || void 0 === LH || LH.forget(HH.chunkX, HH.chunkZ)
        }
        this.plots = {
          plots: BH,
          animate: "plotsOne" === HH[0]
        }, this.publishPlots(this.plots)
      }
      receiveMarkers(HH) {
        this.markers = HH.map((HH => {
          const [BH, LH] = [this.toMapUnits(HH[2]), this.toMapUnits(HH[3])];
          return "mapPlace" === HH[0] ? {
            kind: "place",
            place: HH[1],
            x: BH,
            z: LH
          } : {
            kind: "npc",
            face: null === HH[1] ? "npc" : `npc_${HH[1]}`,
            x: BH,
            z: LH
          }
        })), this.publishMarkers(this.markers)
      }
      frame(HH, BH, LH) {
        if (!BH) return;
        const AH = Math.floor(BH[0]),
          rH = Math.floor(BH[2]);
        if (AH !== this.block.x || rH !== this.block.z) {
          this.block = {
            x: AH,
            z: rH
          }, this.terrain.focusOn(AH, rH), this.address = DA(AH, rH, HH.cameraHeading, this.address);
          const BH = wA(this.address);
          BH !== this.addressKey && (this.addressKey = BH, this.publishAddress(this.address))
        }
        const SH = performance.now(),
          hH = function(HH, BH, LH) {
            return HH && (LH || "plot" !== BH.kind && "tile" !== BH.kind) ? 0 : 1
          }(this.map.city, this.address, LH);
        if (this.zoom !== hH) {
          this.reducedMotion ??= window.matchMedia("(prefers-reduced-motion: reduce)");
          const HH = this.reducedMotion.matches ? 1 : 1 - Math.exp(-(SH - this.lastFrameMs) / 150);
          this.zoom += (hH - this.zoom) * (Number.isNaN(HH) ? 1 : HH), Math.abs(hH - this.zoom) < .002 && (this.zoom = hH)
        }
        this.lastFrameMs = SH, this.isMapShown() && this.writeView(BH[0], BH[2], HH.cameraHeading)
      }
      toMapUnits(HH) {
        return (HH - this.map.area.origin) / ZL.g.xX
      }
      writeView(HH, BH, LH) {
        const {
          cX: AH,
          arrowTrack: rH,
          arrow: SH,
          written: hH
        } = this;
        if (!AH || !rH || !SH) return;
        const {
          origin: tH,
          size: zH
        } = this.map.area, CH = (tH + zH - HH) / zH, EH = (BH - tH) / zH, XH = Math.exp(this.zoom * this.logLocalScale), GH = Math.abs(Math.atan2(Math.sin(LH - hH.heading), Math.cos(LH - hH.heading))), YH = XH !== hH.scale, uH = !(Math.hypot(CH - hH.u, EH - hH.v) * this.worldPx * XH < 1);
        if (YH || uH || !(GH < Hr)) {
          if (YH || uH) {
            this.written.u = CH, this.written.v = EH;
            const HH = CH + (.5 - CH) * this.zoom - CH * XH,
              BH = EH + (.5 - EH) * this.zoom - EH * XH;
            AH.style.transform = `translate(${100*HH}%, ${100*BH}%) scale(${XH})`, rH.style.transform = `translate(${100*CH}%, ${100*EH}%)`
          }(YH || GH >= Hr) && (SH.style.transform = `translate(-50%, -50%) scale(${1/XH}) rotate(${180+180*LH/Math.PI}deg)`, this.written.heading = LH), YH && (AH.style.setProperty("--greenville-map-unzoom", String(1 / XH)), AH.style.setProperty("--greenville-map-zoom", String(this.zoom)), this.written.scale = XH)
        }
      }
    }
    var Ar = LH(39467);
    const rr = pL / ZL.g.xX,
      Sr = `matrix(-1 0 0 1 ${rr} 0)`,
      hr = .08,
      tr = [{
        transform: "scaleY(0)"
      }, {
        transform: "scaleY(1)"
      }],
      zr = [{
        opacity: 1
      }, {
        opacity: 0
      }],
      Cr = {
        quarry: rA.mining,
        industry: rA.demolition,
        market: rA.market,
        lumberMill: rA.woodcutting,
        farm: rA.farming,
        dealership: "Light Blue Car"
      },
      Er = {
        drillBay: rA.mining,
        vanBay: "Yellow Kart",
        carPickup: "Light Blue Car",
        demolitionPit: rA.demolition,
        farmField: rA.farming,
        woods: rA.woodcutting
      },
      Xr = HA.flatMap(((HH, BH) => HH.flatMap(((HH, LH) => "residential" === HH.kind ? [] : [{
        tile: HH,
        x: 1 + 3 * LH,
        z: 1 + 3 * BH
      }])))),
      Gr = [...NA.eastWest, ...NA.northSouth];

    function Yr(HH, BH) {
      return {
        left: (rr - HH) / rr * 100 + "%",
        top: BH / rr * 100 + "%"
      }
    }

    function ur(HH) {
      let {
        axis: BH,
        line: LH
      } = HH;
      const AH = .3,
        rH = 3 * LH + AH,
        SH = rr - .6;
      return "eastWest" === BH ? {
        x: AH,
        y: rH,
        width: SH,
        height: .4
      } : {
        x: rH,
        y: AH,
        width: .4,
        height: SH
      }
    }

    function Qr(HH) {
      let {
        controller: BH
      } = HH;
      (0, xH.e)(pA, null);
      const {
        plots: LH,
        animate: AH
      } = BH.getPlots(), {
        city: rH
      } = BH.map;
      return (0, UH.jsx)("div", {
        className: "GreenvilleNavMap",
        children: (0, UH.jsxs)("div", {
          className: "GreenvilleNavMapWorld",
          ref: BH.mountWorld,
          children: [rH && (0, UH.jsx)("svg", {
            className: "GreenvilleNavMapPlan",
            viewBox: `0 0 ${rr} ${rr}`,
            preserveAspectRatio: "none",
            shapeRendering: "crispEdges",
            children: (0, UH.jsxs)("g", {
              transform: Sr,
              children: [(0, UH.jsx)("rect", {
                className: "GreenvilleNavGround",
                width: rr,
                height: rr
              }), Gr.map((HH => (0, UH.jsx)("rect", {
                className: "GreenvilleNavRoad",
                ...ur(HH)
              }, HH.name))), Xr.map((HH => {
                let {
                  tile: BH,
                  x: LH,
                  z: AH
                } = HH;
                return (0, UH.jsx)("rect", {
                  className: "GreenvilleNavDistrict",
                  "data-district": BH.district,
                  x: LH,
                  y: AH,
                  width: 2,
                  height: 2
                }, BH.district)
              })), LH.map((HH => (0, UH.jsx)(Mr, {
                plot: HH,
                animate: AH
              }, HH.plotId)))]
            })
          }), (0, UH.jsx)("div", {
            className: "GreenvilleNavMapTerrainHost",
            ref: BH.mountTerrain
          }), rH && (0, UH.jsxs)(UH.Fragment, {
            children: [(0, UH.jsx)("svg", {
              className: "GreenvilleNavMapLots",
              viewBox: `0 0 ${rr} ${rr}`,
              preserveAspectRatio: "none",
              children: (0, UH.jsx)("g", {
                transform: Sr,
                children: LH.map((HH => (0, UH.jsx)("rect", {
                  className: uH()("GreenvilleNavLot", {
                    Vacant: "vacant" === HH.state,
                    Loading: "loading" === HH.state,
                    Mine: HH.mine
                  }),
                  x: HH.chunkX + hr,
                  y: HH.chunkZ + hr,
                  width: .84,
                  height: .84
                }, HH.plotId)))
              })
            }), Xr.map((HH => {
              let {
                tile: BH,
                x: LH,
                z: AH
              } = HH;
              const rH = Cr[BH.district];
              return rH && (0, UH.jsx)("span", {
                className: "GreenvilleNavPin GreenvilleNavLandmark",
                style: Yr(LH + 1, AH + 1),
                children: (0, UH.jsx)(MH.e, {
                  itemName: rH,
                  amount: 0
                })
              }, BH.district)
            })), (0, UH.jsx)(Wr, {
              controller: BH
            })]
          }), (0, UH.jsx)("div", {
            className: "GreenvilleNavArrowTrack",
            ref: BH.mountArrow,
            children: (0, UH.jsx)("div", {
              className: "GreenvilleNavArrow",
              children: (0, UH.jsx)("svg", {
                viewBox: "-1 -1 2 2",
                children: (0, UH.jsx)("polygon", {
                  points: "0,-0.8 0.62,0.62 0,0.28 -0.62,0.62"
                })
              })
            })
          }), LH.map((HH => HH.mine && (0, UH.jsx)("span", {
            className: "GreenvilleNavPin GreenvilleNavHome",
            style: Yr(HH.chunkX + .5, HH.chunkZ + ("north" === HH.facing ? 0 : 1)),
            children: (0, UH.jsx)(pH.c, {
              name: "house"
            })
          }, HH.plotId)))]
        })
      })
    }

    function Wr(HH) {
      let {
        controller: BH
      } = HH;
      return (0, xH.e)(yA, null), (0, UH.jsx)(UH.Fragment, {
        children: BH.getMarkers().map(((HH, BH) => (0, UH.jsxs)("span", {
          className: "GreenvilleNavPin GreenvilleNavMarker",
          style: Yr(HH.x, HH.z),
          children: ["npc" === HH.kind && (0, UH.jsx)(Ar.d, {
            icon: HH.face
          }), "place" === HH.kind && (0, UH.jsx)(MH.e, {
            itemName: Er[HH.place],
            amount: 0
          })]
        }, BH)))
      })
    }
    const Mr = (0, tH.memo)((function(HH) {
      let {
        plot: BH,
        animate: LH
      } = HH;
      const AH = (0, tH.useRef)(null),
        rH = (0, tH.useRef)(BH.state),
        SH = (0, tH.useRef)(null);
      return (0, tH.useLayoutEffect)((() => {
        var HH;
        const hH = rH.current;
        rH.current = BH.state, hH !== BH.state && (null === (HH = SH.current) || void 0 === HH || HH.cancel(), LH && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && ("built" === BH.state ? SH.current = AH.current.animate(tr, {
          duration: 300,
          easing: "ease-out"
        }) : "vacant" === BH.state && (SH.current = AH.current.animate(zr, {
          duration: 400,
          easing: "ease-in"
        }))))
      }), [BH.state]), (0, tH.useEffect)((() => () => {
        var HH;
        null === (HH = SH.current) || void 0 === HH || HH.cancel()
      }), []), (0, UH.jsxs)(UH.Fragment, {
        children: [(0, UH.jsx)("rect", {
          className: "GreenvilleNavPlotGrass",
          x: BH.chunkX + hr,
          y: BH.chunkZ + hr,
          width: .84,
          height: .84
        }), (0, UH.jsx)("rect", {
          ref: AH,
          className: uH()("GreenvilleNavPlotRoof", {
            Loading: "loading" === BH.state,
            Built: "built" === BH.state,
            Mine: BH.mine
          }),
          x: BH.chunkX + hr,
          y: BH.chunkZ + hr,
          width: .84,
          height: .84
        })]
      })
    }));

    function xr(HH) {
      let {
        controller: BH
      } = HH;
      const [LH, AH] = (0, tH.useState)((() => BH.isMapShown()));
      (0, xH.d)(iA, (() => {
        AH(BH.isMapShown())
      }));
      const rH = (0, gH.b)(),
        [SH, hH] = (0, tH.useState)(null);
      return function(HH) {
        (0, tH.useLayoutEffect)((() => {
          if (!HH) return;
          const BH = HH.closest(".GreenvilleHudColumnStack"),
            LH = new ResizeObserver((() => {
              HH.offsetWidth > 0 && BH.style.setProperty("--greenville-map-width", `${HH.offsetWidth}px`)
            }));
          return LH.observe(HH), () => {
            LH.disconnect()
          }
        }), [HH])
      }(SH), (0, UH.jsx)("div", {
        className: uH()("GreenvilleNavRoom", {
          Hidden: rH || !LH
        }),
        children: (0, UH.jsx)("div", {
          ref: hH,
          className: "GreenvilleNav",
          children: (0, UH.jsx)(Qr, {
            controller: BH
          })
        })
      })
    }
    const vr = ZL.g.xX,
      Pr = {
        origin: sL,
        size: pL,
        Sr: -2 * vr,
        hr: 4 * vr
      },
      Tr = {
        origin: 1562 * vr,
        size: 13 * vr,
        Sr: 0,
        hr: 5 * vr
      },
      Ur = LH.p + "static/media/greenvilleCity.7b141fefdb213c21b37a.png",
      Vr = LH.p + "static/media/greenvilleGrove.71253c8c4ae6c9cacba5.png",
      Or = {
        area: Pr,
        imageUrl: Ur,
        city: !0
      },
      br = {
        area: Tr,
        imageUrl: Vr,
        city: !1
      };

    function kr(HH) {
      return HH >= 75 ? "face-smile" : HH >= 50 ? "face-diagonal-mouth" : HH >= 25 ? "face-worried" : "face-dizzy"
    }

    function mr(HH) {
      const BH = Math.round(HH);
      return `${BH>0?"+":""}${BH}%`
    }

    function or(HH) {
      let {
        controller: BH
      } = HH;
      (0, xH.e)(jL, null);
      const LH = BH.getMood();
      return LH ? (0, UH.jsx)(WH.e, {
        placement: "statBars",
        children: (0, UH.jsx)(Ir, {
          mood: LH
        })
      }) : null
    }

    function Ir(HH) {
      let {
        mood: BH
      } = HH;
      const {
        t: LH
      } = (0, PH.B)(), AH = function(HH) {
        const [, BH] = (0, tH.useState)(0);
        return (0, tH.useEffect)((() => {
          const LH = HH - performance.now();
          if (LH <= 0) return;
          const AH = window.setTimeout((() => {
            BH((HH => HH + 1))
          }), LH);
          return () => {
            window.clearTimeout(AH)
          }
        }), [HH]), HH > performance.now()
      }(BH.restedEndsAt), {
        energy: rH,
        breakEvenEnergy: SH,
        luckPercent: hH
      } = BH, zH = null !== hH && void 0 !== hH ? hH : BH.earningsPercent;
      return (0, UH.jsxs)("div", {
        className: uH()("GreenvilleMoodChip", {
          Exhausted: rH < 25,
          Rested: AH,
          Tired: !AH && rH < SH && rH >= 25,
          Drained: !AH && rH < 25
        }),
        role: "img",
        "aria-label": LH("greenvilleGame:moodEnergyLabel", {
          energy: Math.round(rH)
        }),
        children: [(0, UH.jsx)(pH.c, {
          name: kr(rH),
          className: "GreenvilleMoodChipFace"
        }), AH && (0, UH.jsx)("span", {
          className: "GreenvilleMoodChipZz",
          children: LH("greenvilleGame:moodRestedGlyph")
        }), (0, UH.jsxs)("div", {
          className: "GreenvilleMoodChipMeter",
          style: {
            "--greenville-break-even": `${SH}%`
          },
          children: [(0, UH.jsx)("div", {
            className: "GreenvilleMoodChipBar",
            children: (0, UH.jsx)("div", {
              className: "GreenvilleMoodChipFill",
              style: {
                transform: `scaleX(${Math.min(100,Math.max(0,rH))/100})`
              }
            })
          }), (0, UH.jsx)("div", {
            className: "GreenvilleMoodChipTick"
          })]
        }), null === hH && (0, UH.jsx)("span", {
          className: "GreenvilleMoodChipCoin",
          "aria-hidden": "true",
          children: (0, UH.jsx)(MH.e, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), (0, UH.jsxs)("span", {
          className: uH()("GreenvilleMoodChipEarnings", {
            Positive: Math.round(zH) > 0,
            Negative: Math.round(zH) < 0
          }),
          children: [null !== hH && (0, UH.jsx)("span", {
            className: "GreenvilleMoodChipLuck",
            children: LH("greenvilleGame:luck")
          }), mr(zH)]
        }), BH.adBoosted && (0, UH.jsx)("span", {
          className: "GreenvilleMoodChipBoost",
          children: (0, UH.jsx)(pH.c, {
            name: "bolt"
          })
        })]
      })
    }

    function fr(HH) {
      let {
        controller: BH
      } = HH;
      (0, xH.e)(RL, null);
      const LH = BH.getPlace();
      return "hudHome" !== (null === LH || void 0 === LH ? void 0 : LH.kind) || null === LH.runStartedAt ? null : (0, UH.jsx)(lr, {
        startedAt: LH.runStartedAt
      })
    }

    function lr(HH) {
      let {
        startedAt: BH
      } = HH;
      const LH = Math.max(0, Math.floor(-(0, TA.g)(BH)));
      return (0, UH.jsx)("div", {
        className: "GreenvilleMarketCountdown",
        role: "timer",
        children: (0, UH.jsxs)("div", {
          className: "GreenvilleMarketCountdownTime FullyFancyText",
          children: [Math.floor(LH / 60), ":", String(LH % 60).padStart(2, "0")]
        })
      })
    }
    const Kr = [{
        transform: "translateY(100%)",
        opacity: 0
      }, {
        transform: "translateY(0)",
        opacity: 1
      }],
      cr = [{
        transform: "translateY(-100%)",
        opacity: 0
      }, {
        transform: "translateY(0)",
        opacity: 1
      }];

    function er(HH) {
      return HH ? `${HH.number}|${HH.street.name}` : ""
    }

    function qr(HH) {
      let {
        address: BH,
        large: LH,
        rootRef: AH
      } = HH;
      const rH = function(HH) {
          switch (HH.kind) {
            case "junction":
              return [{
                street: HH.along,
                number: null
              }, {
                street: HH.cross,
                number: null
              }];
            case "plot":
            case "tile":
              return [{
                street: HH.street,
                number: HH.number
              }, null];
            case "street":
              return [{
                street: HH.street,
                number: HH.block
              }, null]
          }
        }(BH),
        SH = LH && "plot" === BH.kind ? BH.neighbourhood : null,
        hH = (0, tH.useRef)(null),
        zH = (0, tH.useRef)(null),
        CH = (0, tH.useRef)(rH),
        EH = (0, tH.useRef)({
          large: LH,
          top: 0,
          height: 0
        }),
        XH = (0, tH.useRef)([]),
        GH = (0, tH.useRef)(null);
      (0, tH.useLayoutEffect)((() => {
        const HH = CH.current;
        if (CH.current = rH, window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const BH = [];
        if (er(HH[0]) !== er(rH[0]) && BH.push(hH.current.animate(Kr, {
            duration: 180,
            easing: "ease-out"
          })), rH[1] && !HH[1] && BH.push(zH.current.animate(cr, {
            duration: 220,
            easing: "ease-out"
          })), BH.length > 0) {
          for (const HH of XH.current) HH.cancel();
          XH.current = BH
        }
      }), [er(rH[0]), er(rH[1])]), (0, tH.useLayoutEffect)((() => {
        var HH;
        const BH = AH.current,
          rH = EH.current;
        EH.current = {
          large: LH,
          top: BH.offsetTop,
          height: BH.offsetHeight
        }, rH.large === LH || 0 === rH.height || 0 === BH.offsetHeight || window.matchMedia("(prefers-reduced-motion: reduce)").matches || (null === (HH = GH.current) || void 0 === HH || HH.cancel(), GH.current = BH.animate([{
          transform: `translateY(${rH.top-BH.offsetTop}px) scale(${rH.height/BH.offsetHeight})`
        }, {
          transform: "none"
        }], {
          duration: 260,
          easing: "ease-out"
        }))
      }), [LH, SH, er(rH[0]), er(rH[1])]), (0, tH.useEffect)((() => {
        const HH = AH.current,
          BH = new ResizeObserver((() => {
            EH.current = {
              ...EH.current,
              top: HH.offsetTop,
              height: HH.offsetHeight
            }
          }));
        return BH.observe(HH.parentElement), () => {
          var HH;
          BH.disconnect();
          for (const BH of XH.current) BH.cancel();
          null === (HH = GH.current) || void 0 === HH || HH.cancel()
        }
      }), [AH]);
      const [YH, QH] = rH;
      return (0, UH.jsxs)("div", {
        ref: AH,
        className: uH()("GreenvilleNavSign", {
          Large: LH
        }),
        children: [(0, UH.jsxs)("div", {
          className: "GreenvilleNavBlade",
          children: [null !== SH && (0, UH.jsx)("span", {
            className: "GreenvilleNavHeader",
            children: SH
          }), (0, UH.jsx)(gr, {
            blade: YH,
            textRef: hH
          })]
        }), QH && (0, UH.jsx)("div", {
          ref: zH,
          className: "GreenvilleNavBlade",
          children: (0, UH.jsx)(gr, {
            blade: QH
          })
        })]
      })
    }

    function gr(HH) {
      let {
        blade: BH,
        textRef: LH
      } = HH;
      return (0, UH.jsxs)("span", {
        ref: LH,
        className: "GreenvilleNavBladeText",
        children: [null !== BH.number && (0, UH.jsx)("span", {
          className: "GreenvilleNavNumber",
          children: BH.number
        }), (0, UH.jsxs)("span", {
          className: "GreenvilleNavStreet",
          children: [BH.street.shortName, " ", (0, UH.jsx)("span", {
            className: "GreenvilleNavSuffix",
            children: BH.street.suffix
          })]
        })]
      })
    }
    const Nr = "4rem",
      Rr = `translateY(${Nr}) scale(1.4)`,
      jr = [{
        transform: Rr,
        opacity: 0
      }, {
        transform: Rr,
        opacity: 1,
        offset: .12
      }, {
        transform: Rr,
        opacity: 1,
        offset: .7,
        easing: "ease-in-out"
      }, {
        transform: "none",
        opacity: 1
      }],
      nr = [{
        opacity: 0
      }, {
        opacity: 1
      }];

    function Fr(HH) {
      var BH;
      let {
        controller: LH,
        nav: AH
      } = HH;
      (0, xH.e)(RL, null), (0, xH.e)(iA, null);
      const {
        t: rH
      } = (0, PH.B)(), SH = (0, gH.b)(), hH = (0, tH.useRef)(null), zH = (0, tH.useRef)(null), CH = (0, tH.useRef)(null), EH = (0, tH.useRef)(null), XH = (0, tH.useRef)(null), GH = (0, tH.useRef)(null), YH = (0, fB.e)("hiddenPlayerNames"), uH = LH.getPlace(), QH = AH.getAddress(), WH = uH && hA(rH, uH, QH, YH), MH = WH ? WH.key : null;
      if ((0, tH.useLayoutEffect)((() => {
          var HH, BH, LH, AH;
          if (null === MH) return null === (LH = EH.current) || void 0 === LH || LH.cancel(), void(null === (AH = XH.current) || void 0 === AH || AH.cancel());
          if (hH.current === MH) return;
          if (hH.current = MH, SH) return;
          const rH = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          null === (HH = EH.current) || void 0 === HH || HH.cancel(), EH.current = zH.current.animate(rH ? nr : jr, {
            duration: rH ? 400 : 2200
          }), null === (BH = XH.current) || void 0 === BH || BH.cancel(), !rH && CH.current && (XH.current = CH.current.animate(function(HH) {
            const BH = `0 calc(${Nr} + ${(1.4-1)*HH}px)`;
            return [{
              translate: "0 0",
              easing: "ease-out"
            }, {
              translate: BH,
              offset: .12
            }, {
              translate: BH,
              offset: .7,
              easing: "ease-in-out"
            }, {
              translate: "0 0"
            }]
          }(zH.current.offsetHeight), {
            duration: 2200
          }))
        }), [MH]), (0, tH.useEffect)((() => () => {
          var HH, BH;
          null === (HH = EH.current) || void 0 === HH || HH.cancel(), null === (BH = XH.current) || void 0 === BH || BH.cancel()
        }), []), !uH) return null;
      let vH = "outside" === QH.kind ? null : QH;
      return !WH || "plot" !== QH.kind && "tile" !== QH.kind ? WH && vH && (null === (BH = GH.current) || void 0 === BH ? void 0 : BH.key) === WH.key && (vH = GH.current.address) : GH.current = {
        key: WH.key,
        address: QH
      }, (0, UH.jsxs)("div", {
        className: "GreenvilleTopBar",
        children: [WH && (0, UH.jsx)(Dr, {
          title: WH,
          tagRef: zH,
          job: "hudJob" === uH.kind ? uH : null,
          home: "hudHome" === uH.kind ? uH : null
        }), vH && (0, UH.jsx)(qr, {
          address: vH,
          large: !WH,
          rootRef: CH
        })]
      })
    }

    function Dr(HH) {
      let {
        title: BH,
        tagRef: LH,
        job: AH,
        home: rH
      } = HH;
      return (0, UH.jsxs)("div", {
        ref: LH,
        className: "GreenvillePlaceTag",
        role: "status",
        children: [null !== BH.eyebrow && (0, UH.jsx)("span", {
          className: "GreenvillePlaceTagEyebrow",
          children: BH.eyebrow
        }), (0, UH.jsx)("strong", {
          className: "GreenvillePlaceTagName",
          children: BH.name
        }), AH && (0, UH.jsx)(wr, {
          job: AH
        }), rH && (0, UH.jsx)(dr, {
          home: rH
        })]
      })
    }

    function wr(HH) {
      let {
        job: BH
      } = HH;
      const {
        t: LH
      } = (0, PH.B)(), {
        level: AH,
        expInto: rH,
        expNeeded: SH
      } = BH, hH = 0 === SH;
      return (0, UH.jsxs)("div", {
        className: "GreenvillePlaceTagRow",
        children: [(0, UH.jsx)("span", {
          className: "GreenvillePlaceTagJob",
          "aria-hidden": "true",
          children: (0, UH.jsx)(MH.e, {
            itemName: rA[BH.job],
            amount: 0
          })
        }), (0, UH.jsx)("span", {
          className: "GreenvillePlaceTagLevel",
          children: LH("greenvilleGame:levelShort", {
            level: AH
          })
        }), (0, UH.jsx)("div", {
          className: "GreenvillePlaceTagBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": hH ? 100 : Math.round(rH / SH * 100),
          children: (0, UH.jsx)("div", {
            className: "GreenvillePlaceTagBarFill",
            style: {
              transform: `scaleX(${hH?1:Math.min(1,rH/SH)})`
            }
          })
        }), !hH && (0, UH.jsxs)("span", {
          className: "GreenvillePlaceTagExp",
          children: [(0, eH.f)(rH), "/", (0, eH.f)(SH)]
        }), hH && (0, UH.jsx)("span", {
          className: "GreenvillePlaceTagMax",
          children: LH("greenvilleGame:levelMax")
        }), null !== BH.status && (0, UH.jsx)(Zr, {
          status: BH.status
        })]
      })
    }

    function Zr(HH) {
      let {
        status: BH
      } = HH;
      const {
        t: LH
      } = (0, PH.B)();
      switch (BH.kind) {
        case "hudTier":
          return (0, UH.jsxs)("span", {
            className: uH()("GreenvillePlaceChip", {
              Locked: BH.locked
            }),
            children: [BH.locked && (0, UH.jsx)(pH.c, {
              name: "lock"
            }), LH(`greenvilleGame:${BH.tierKey}`)]
          });
        case "hudBay":
          return (0, UH.jsxs)("span", {
            className: "GreenvillePlaceChip",
            children: [LH("greenvilleGame:demolitionBayObject", {
              material: LH(`greenvilleGame:${BH.materialKey}`),
              object: LH(`greenvilleGame:${BH.objectKey}`)
            }), (0, UH.jsx)("span", {
              className: "GreenvillePlaceChipBar",
              children: (0, UH.jsx)("span", {
                className: "GreenvillePlaceChipBarFill",
                style: {
                  transform: `scaleX(${BH.percent/100})`
                }
              })
            })]
          });
        case "hudBayEmpty":
          return (0, UH.jsx)("span", {
            className: "GreenvillePlaceChip",
            children: LH("greenvilleGame:demolitionYardIncoming")
          });
        case "hudFarmTier":
          return (0, UH.jsx)("span", {
            className: "GreenvillePlaceChip Golden",
            children: LH("greenvilleGame:farmGoldenChance", {
              percent: BH.goldenPercent
            })
          })
      }
    }

    function dr(HH) {
      let {
        home: BH
      } = HH;
      const {
        t: LH
      } = (0, PH.B)();
      return BH.pvp || BH.parkour || !BH.visitorsAllowed ? (0, UH.jsxs)("div", {
        className: "GreenvillePlaceTagRow GreenvillePlaceTagChips",
        children: [BH.pvp && (0, UH.jsx)("span", {
          className: "GreenvillePlaceChip Danger",
          children: LH("greenvilleGame:houseChipPvp")
        }), BH.parkour && (0, UH.jsx)("span", {
          className: "GreenvillePlaceChip",
          children: LH("greenvilleGame:houseChipParkour")
        }), !BH.visitorsAllowed && (0, UH.jsxs)("span", {
          className: "GreenvillePlaceChip Locked",
          children: [(0, UH.jsx)(pH.c, {
            name: "lock"
          }), LH("greenvilleGame:houseChipVisitorsOff")]
        })]
      }) : null
    }
    const ar = function(HH, BH, LH, rH) {
      let SH, {
        localPlayerId: hH
      } = rH;
      const YH = new GH((HH => {
          zH.k.AX(XH, HH)
        })),
        uH = new YA((HH => {
          zH.k.AX(GA, HH)
        })),
        QH = {
          onGain: () => {
            SH.playSound(hH, "rpgHandleCoins1", .5, .9 + .3 * Math.random())
          },
          onCoinLanded: (HH, BH) => {
            SH.playSound(hH, "pickUp", .3, 1 + .5 * HH / Math.max(1, BH - 1))
          }
        },
        WH = [],
        MH = {
          open: HH => {
            for (const BH of WH) BH !== HH && BH.onMenuClosed();
            (0, EH.t)()
          },
          close: EH.g,
          dismiss: EH.j
        },
        xH = new CH.c,
        vH = new pB((HH => {
          zH.k.AX(JB, HH)
        }), MH, (HH => {
          SH.sendCommand(null === HH ? AH : `${AH} ${HH}`)
        }), xH),
        PH = new iH((HH => {
          zH.k.AX(sH, HH)
        }), MH, (HH => {
          SH.sendCommand(`demolition pick ${HH}`)
        }), xH),
        TH = new xB((HH => {
          zH.k.AX(WB, HH)
        }), MH, (HH => {
          SH.sendCommand(`garage pick ${HH}`)
        }), xH),
        UH = new PA((HH => {
          zH.k.AX(xA, HH)
        })),
        VH = new nL((HH => {
          zH.k.AX(RL, HH)
        }), (HH => {
          zH.k.AX(jL, HH)
        })),
        OH = new Lr(function(HH) {
          return "profIsland" === HH ? br : Or
        }(LH), (HH => {
          zH.k.AX(iA, HH)
        }), (HH => {
          zH.k.AX(pA, HH)
        }), (HH => {
          zH.k.AX(yA, HH)
        }));
      let bH = null;
      const kH = new oB((HH => {
          zH.k.AX(kB, HH)
        }), (HH => {
          zH.k.AX(mB, HH)
        }), MH, (HH => {
          SH.sendCommand(HH)
        }), xH),
        mH = new ML((HH => {
          zH.k.AX(uL, HH)
        }), (HH => {
          zH.k.AX(QL, HH)
        }), MH, (HH => {
          SH.sendCommand(HH)
        }), xH);
      WH.push(vH, PH, TH, kH, mH);
      let oH = null;
      return {
        onCreate: HH => {
          SH = HH, OH.start(HH), bH = new eA(UH), oH = (0, EH.v)((0, tH.createElement)(tH.Fragment, null, (0, tH.createElement)(IH, {
            controller: YH
          }), (0, tH.createElement)(WA, {
            controller: uH
          }), (0, tH.createElement)(fA, {
            market: UH,
            markers: bH
          }), (0, tH.createElement)(VA, {
            controller: UH
          }), (0, tH.createElement)(Fr, {
            controller: VH,
            nav: OH
          }), (0, tH.createElement)(or, {
            controller: VH
          }), (0, tH.createElement)(tA, {
            controller: VH
          }, (0, tH.createElement)(FH, {
            sounds: QH
          }), (0, tH.createElement)(xr, {
            controller: OH
          }), (0, tH.createElement)(NL, {
            controller: mH
          }), (0, tH.createElement)(bA, {
            controller: UH
          }), (0, tH.createElement)(sB, {
            controller: kH
          })), (0, tH.createElement)(fr, {
            controller: VH
          })), {
            content: (0, tH.createElement)(tH.Fragment, null, (0, tH.createElement)(LL, {
              controller: vH
            }), (0, tH.createElement)(QB, {
              controller: PH
            }), (0, tH.createElement)(TB, {
              controller: TH
            }), (0, tH.createElement)(aB, {
              controller: kH
            }), (0, tH.createElement)(qL, {
              controller: mH
            })),
            onClose: () => {
              for (const HH of WH) HH.onMenuClosed()
            }
          })
        },
        onClose: () => {
          oH(), OH.dispose(), vH.dropPresses(), PH.dropPresses(), TH.dropPresses(), bH.waypoints.dispose(), kH.dropPresses(), mH.dropPresses(), xH.dispose()
        },
        onAfterRender: (HH, BH) => {
          const LH = SH.getPositionView(hH);
          bH.frame(BH, LH), OH.frame(BH, LH, SH.isLocalPlayerInVehicle())
        },
        onReceivedMessageFromServer: (HH, BH) => {
          "greenvilleBackpack" === HH ? YH.kX(BH) : "greenvilleOreBuyer" === HH ? vH.kX(BH) : "greenvilleLumberMill" === HH ? kH.kX(BH) : "greenvilleDemolition" === HH ? PH.kX(BH) : "greenvilleGarage" === HH ? TH.kX(BH) : "greenvilleFarmBoard" === HH ? mH.kX(BH) : "greenvilleMarket" === HH ? UH.kX(BH) : "greenvilleHud" === HH ? VH.kX(BH) : "greenvilleLevelUp" === HH ? uH.kX(BH) : "greenvillePlots" === HH ? OH.kX(BH) : "greenvilleMapMarkers" === HH && OH.receiveMarkers(BH)
        }
      }
    }
  },
  40437: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH,
      f: () => hH
    });
    var AH = LH(9940);
    const rH = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      SH = [150, 150, 150],
      hH = -2147483648;
    class tH {
      constructor(HH) {
        this.averages = HH, this.byId = new Map
      }
      get(HH) {
        var BH, LH, hH, tH, zH;
        const CH = this.byId.get(HH);
        if (void 0 !== CH) return CH;
        const EH = null !== (BH = null === (LH = AH.g[HH]) || void 0 === LH ? void 0 : LH.name) && void 0 !== BH ? BH : "",
          XH = EH.split("|")[0],
          GH = null !== (hH = this.averages[EH]) && void 0 !== hH ? hH : this.averages[XH],
          YH = null !== (tH = null !== (zH = null === GH || void 0 === GH ? void 0 : GH[0]) && void 0 !== zH ? zH : rH[XH]) && void 0 !== tH ? tH : 0 === (null === GH || void 0 === GH ? void 0 : GH.length) ? null : SH;
        return this.byId.set(HH, YH), YH
      }
      getDrawnIds() {
        const HH = new Uint8Array(65536);
        for (let BH = 1; BH < 65536; BH++) void 0 !== AH.g[BH] && null !== this.get(BH) && (HH[BH] = 1);
        return HH
      }
      drawPixel(HH, BH, LH, AH, rH, SH) {
        const tH = function(HH, BH, LH) {
            const AH = HH - BH + (HH - LH);
            return Math.max(.65, Math.min(1.2, .97 + .055 * AH))
          }(AH, rH === hH ? AH : rH, SH === hH ? AH : SH),
          zH = this.get(LH);
        HH[BH] = zH[0] * tH, HH[BH + 1] = zH[1] * tH, HH[BH + 2] = zH[2] * tH, HH[BH + 3] = 255
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);