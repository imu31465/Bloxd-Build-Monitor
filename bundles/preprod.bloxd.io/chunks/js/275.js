export const id = 275;
export const ids = [275];
export const modules = {
  40167: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB,
      i: () => DB,
      k: () => QB
    });
    var YB = GB(56);

    function DB(BB) {
      return jB(BB, yB)
    }

    function QB(BB) {
      return jB(BB, JB)
    }

    function oB(BB) {
      return `${Math.floor(BB/60)}:${String(BB%60).padStart(2,"0")}`
    }

    function jB(BB, OB) {
      const [, GB] = (0, YB.useState)(null);
      return (0, YB.useEffect)((() => {
        if (0 === BB) return;
        const YB = window.setInterval((() => {
          const YB = OB(BB);
          GB((OB => (null === OB || void 0 === OB ? void 0 : OB.endsAt) === BB && OB.value === YB ? OB : {
            endsAt: BB,
            value: YB
          }))
        }), 250);
        return () => {
          window.clearInterval(YB)
        }
      }), [BB, OB]), OB(BB)
    }

    function yB(BB) {
      return (BB - performance.now()) / 1e3
    }

    function JB(BB) {
      return Math.max(0, Math.ceil(yB(BB)))
    }
  },
  40190: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => DB
    });
    var YB = GB(40197);
    async function DB() {
      const {
        averageColors: BB
      } = await GB.e(228).then((() => GB(34878)));
      return new YB.c(BB)
    }
  },
  40172: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => yB
    });
    var YB = GB(37361),
      DB = GB(1175),
      QB = GB(1253),
      oB = GB(39154),
      jB = GB(39205);
    class yB {
      constructor(BB, OB) {
        var GB;
        this.classes = BB, this.distanceKey = OB, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.Vp = !1, this.vN = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.vN), null === (GB = window.visualViewport) || void 0 === GB || GB.addEventListener("resize", this.vN)
      }
      bindMarker(BB) {
        const OB = this.refs.get(BB);
        if (OB) return OB;
        const GB = OB => {
          var YB;
          null === (YB = this.markers.get(BB)) || void 0 === YB || YB.stopObserving(), this.markers.delete(BB), OB && !this.Vp ? (this.markers.set(BB, this.mount(OB)), this.refs.set(BB, GB)) : this.refs.delete(BB)
        };
        return this.refs.set(BB, GB), GB
      }
      hasMarkers() {
        return this.markers.size > 0
      }
      setRender(BB) {
        this.render = BB
      }
      update(BB, OB, GB, YB, DB) {
        const QB = this.markers.get(BB);
        QB && (QB.target ??= [0, 0, 0], QB.target[0] = OB, QB.target[1] = GB, QB.target[2] = YB, this.place(QB), this.oO(QB, DB && Math.hypot(OB - DB[0], GB - DB[1], YB - DB[2])))
      }
      dispose() {
        var BB;
        this.Vp = !0, window.removeEventListener("resize", this.vN), null === (BB = window.visualViewport) || void 0 === BB || BB.removeEventListener("resize", this.vN);
        for (const OB of this.markers.values()) OB.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(BB) {
        const {
          render: OB,
          viewport: GB
        } = this;
        if (!OB || !BB.target) return;
        const YB = (50 - OB.screenBandPct.y) / 100 * GB.height,
          DB = {
            x: BB.halfSize.width + 8,
            top: BB.halfSize.height + 8,
            bottom: BB.halfSize.height + BB.labelsBelow + YB
          },
          QB = OB.projectWorldPosToViewport(BB.target),
          yB = null !== QB && void 0 !== QB ? QB : OB.projectWorldPosToScreenPos(BB.target),
          JB = (0, jB.b)({
            x: yB.x,
            y: yB.y,
            text: QB
          }, DB, GB);
        (0, oB.d)(BB.root, Math.round(100 * JB.x) / 100, Math.round(100 * JB.y) / 100)
      }
      oO(BB, OB) {
        if (null === OB) return void(null !== BB.metres && (BB.metres = null, BB.distance.textContent = ""));
        const GB = Date.now();
        (null === BB.metres || (0, YB.b)(OB, BB.metres, BB.metresShownAt)) && (BB.metres = Math.round(OB), BB.metresShownAt = GB, BB.distance.textContent = (0, DB.C)(QB.e.get().getCurrentLanguageCode(), this.distanceKey, {
          distance: String(BB.metres)
        }))
      }
      mount(BB) {
        const OB = {
            root: BB,
            distance: BB.querySelector(`.${this.classes.distance}`),
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
          GB = BB.querySelector(`.${this.classes.labels}`),
          YB = new ResizeObserver((() => {
            OB.halfSize = {
              width: Math.max(BB.offsetWidth, GB.offsetWidth) / 2,
              height: BB.offsetHeight / 2
            }, OB.labelsBelow = GB.offsetTop + GB.offsetHeight - BB.offsetHeight, this.place(OB)
          }));
        return YB.observe(BB, {
          box: "border-box"
        }), YB.observe(GB, {
          box: "border-box"
        }), OB.stopObserving = () => {
          YB.disconnect()
        }, OB
      }
    }
  },
  40181: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => CD
    });
    const YB = "ore sell",
      DB = "lumber ",
      QB = "farm ",
      oB = ["market", "demolition", "mining", "woodcutting", "farming"];
    var jB = GB(56),
      yB = GB(25),
      JB = GB(39226),
      MB = GB(37267);
    const PB = "greenvilleBackpackView";
    class zB {
      constructor(BB) {
        this.tM = BB, this.view = null, this.arrivalToken = 0, this.showToken = 0
      }
      getView() {
        return this.view
      }
      nP(BB) {
        if ("hide" === BB[0]) this.view = null;
        else if ("show" === BB[0]) {
          const OB = BB[3];
          this.view = {
            CP: BB[1],
            shardsPerItem: BB[2],
            total: OB.reduce(((BB, OB) => {
              let [, GB] = OB;
              return BB + GB
            }), 0),
            contents: OB,
            arrival: null,
            showToken: ++this.showToken
          }
        } else {
          if (null === this.view) return void console.warn(`[greenville] backpack ${BB[0]} with no backpack shown`);
          {
            var OB, GB;
            const YB = BB[1],
              DB = this.view.contents.find((BB => {
                let [OB] = BB;
                return OB === YB
              })),
              QB = this.view.contents.filter((BB => {
                let [OB] = BB;
                return OB !== YB
              })),
              oB = null !== (OB = null === DB || void 0 === DB ? void 0 : DB[1]) && void 0 !== OB ? OB : 0,
              jB = null !== (GB = null === DB || void 0 === DB ? void 0 : DB[2]) && void 0 !== GB ? GB : 0;
            "shard" === BB[0] ? this.view = {
              ...this.view,
              contents: [...QB, [YB, oB, jB + 1]]
            } : this.view = {
              ...this.view,
              total: this.view.total + 1,
              contents: [...QB, [YB, oB + 1, 0]],
              arrival: {
                item: YB,
                token: ++this.arrivalToken,
                fromShards: jB > 0
              }
            }
          }
        }
        this.tM(this.view)
      }
    }
    var lB = GB(1090),
      pB = GB.n(lB),
      qB = GB(16),
      ZB = GB(37263),
      NB = GB(2012),
      RB = GB(1480),
      WB = GB(2085),
      AB = GB(1175);
    const VB = "data:image/png;base64,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";
    var SB = GB(1282);
    const nB = (0, jB.forwardRef)((function(BB, OB) {
      let {
        contents: GB,
        CP: YB,
        full: DB,
        children: QB
      } = BB;
      const oB = [...GB].sort(((BB, OB) => {
        let [GB] = BB, [YB] = OB;
        return GB.localeCompare(YB)
      }));
      let jB = 0;
      return (0, SB.jsxs)("div", {
        ref: OB,
        className: "GreenvilleBackpackBag",
        children: [QB, (0, SB.jsx)("img", {
          className: pB()("GreenvilleBackpackArt", {
            Full: DB
          }),
          src: VB,
          alt: "",
          draggable: !1
        }), (0, SB.jsx)("div", {
          className: "GreenvilleBackpackWindow",
          children: oB.map((BB => {
            let [OB, GB] = BB;
            const DB = Math.min(1 - jB, GB / YB),
              QB = (0, SB.jsx)(fB, {
                item: OB,
                below: jB,
                share: DB
              }, OB);
            return jB += DB, QB
          }))
        })]
      })
    }));

    function UB() {
      const BB = new Image;
      BB.src = VB, BB.decode().catch((BB => {
        console.error("[greenville] backpack art failed to load", BB)
      }))
    }
    const fB = (0, jB.memo)((function(BB) {
        let {
          item: OB,
          below: GB,
          share: YB
        } = BB;
        return (0, SB.jsx)("div", {
          className: "GreenvilleBackpackOre",
          style: {
            bottom: `calc(var(--rise) * ${GB})`,
            height: `calc(var(--rise) * ${YB} + var(--slant))`
          },
          children: Array.from({
            length: 18
          }, ((BB, GB) => (0, SB.jsx)("div", {
            className: "GreenvilleBackpackOreTile",
            children: (0, SB.jsx)(NB.c, {
              itemName: OB,
              amount: 0
            })
          }, GB)))
        })
      })),
      kB = [{
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
      dB = [{
        transform: "scale(1.3)"
      }, {
        transform: "scale(1)"
      }];
    let KB = 1;

    function uB(BB) {
      let {
        controller: OB
      } = BB;
      (0, RB.i)(PB, null), (0, jB.useEffect)(UB, []);
      const GB = OB.getView();
      return null === GB ? null : (0, SB.jsx)(ZB.e, {
        placement: "bottomLeft",
        children: (0, SB.jsx)(mB, {
          view: GB
        })
      })
    }

    function mB(BB) {
      let {
        view: OB
      } = BB;
      const {
        t: GB
      } = (0, AB.H)(), {
        isTouchScreen: YB
      } = (0, qB.o)(["isTouchScreen"]), [DB, QB] = (0, jB.useState)([]), oB = (0, jB.useRef)(null), yB = (0, jB.useRef)(null), JB = (0, jB.useRef)([]), MB = (0, jB.useRef)({
        arrival: OB.arrival,
        showToken: OB.showToken
      }), {
        arrival: PB,
        showToken: zB
      } = OB;
      (0, jB.useLayoutEffect)((() => {
        var BB;
        if (zB !== MB.current.showToken) QB([]);
        else if (null !== PB && PB.token !== (null === (BB = MB.current.arrival) || void 0 === BB ? void 0 : BB.token) && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          const BB = {
            id: KB++,
            item: PB.item,
            fromShards: PB.fromShards,
            driftEm: 1.4 * (Math.random() - .5),
            spinDeg: 70 * (Math.random() - .5)
          };
          QB((OB => OB.length < 6 ? [...OB, BB] : OB))
        }
        MB.current = {
          arrival: PB,
          showToken: zB
        }
      }), [PB, zB]), (0, jB.useEffect)((() => () => {
        for (const BB of JB.current) BB.cancel()
      }), []);
      const lB = (0, jB.useCallback)((() => {
          for (const BB of JB.current) BB.cancel();
          JB.current = [oB.current.animate(kB, {
            duration: 300,
            easing: "ease-out"
          }), yB.current.animate(dB, {
            duration: 220,
            easing: "ease-out"
          })]
        }), []),
        ZB = (0, jB.useCallback)((BB => {
          QB((OB => OB.filter((OB => OB.id !== BB)))), lB()
        }), [lB]),
        RB = OB.total - DB.length,
        VB = RB >= OB.CP,
        UB = OB.contents.map((BB => {
          let [GB, YB, QB] = BB;
          const oB = DB.filter((BB => BB.item === GB)),
            jB = oB.some((BB => BB.fromShards));
          return [GB, YB - oB.length, jB ? OB.shardsPerItem : QB]
        })),
        fB = UB.filter((BB => {
          let [, OB, GB] = BB;
          return OB > 0 || GB > 0
        })).reverse().slice(0, 4),
        uB = (0, WB.n)("SpecialAction2");
      return (0, SB.jsxs)("div", {
        className: "GreenvilleBackpack",
        children: [(0, SB.jsxs)("div", {
          className: "GreenvilleBackpackCount SmallTextBold",
          children: [(0, SB.jsx)("span", {
            ref: yB,
            className: pB()("GreenvilleBackpackTotal", {
              Full: VB
            }),
            children: RB
          }), (0, SB.jsxs)("span", {
            className: "GreenvilleBackpackCapacity",
            children: ["/ ", OB.CP]
          })]
        }), (0, SB.jsxs)("div", {
          className: "GreenvilleBackpackRow",
          children: [(0, SB.jsx)(nB, {
            ref: oB,
            contents: UB,
            CP: OB.CP,
            full: VB,
            children: DB.map((BB => (0, SB.jsx)(FB, {
              drop: BB,
              onLanded: ZB
            }, BB.id)))
          }), (0, SB.jsxs)("div", {
            className: "GreenvilleBackpackInfo",
            children: [fB.length > 0 && (0, SB.jsx)("div", {
              className: "GreenvilleBackpackTallies",
              children: fB.map((BB => {
                let [GB, YB, DB] = BB;
                return (0, SB.jsxs)("div", {
                  className: "GreenvilleBackpackTally",
                  children: [(0, SB.jsx)("div", {
                    className: "GreenvilleBackpackTallyIcon",
                    children: (0, SB.jsx)(NB.c, {
                      itemName: GB,
                      amount: 0
                    })
                  }), YB > 0 && (0, SB.jsxs)("span", {
                    className: "SmallTextBold",
                    children: ["\xd7", YB]
                  }), DB > 0 && (0, SB.jsx)(IB, {
                    shards: DB,
                    shardsPerItem: OB.shardsPerItem
                  })]
                }, GB)
              }))
            }), VB && (0, SB.jsxs)("div", {
              className: "GreenvilleBackpackFullLine",
              role: "status",
              children: [(0, SB.jsx)("span", {
                className: "GreenvilleBackpackFullTitle SmallTextBold",
                children: GB("greenvilleGame:backpackFull")
              }), YB && (0, SB.jsx)("span", {
                className: "SmallTextLight",
                children: GB("greenvilleGame:backpackReturnTouch")
              }), !YB && null !== uB && (0, SB.jsx)("span", {
                className: "SmallTextLight",
                children: GB("greenvilleGame:backpackReturnDesktop", {
                  key: (0, WB.l)(uB)
                })
              })]
            })]
          })]
        })]
      })
    }

    function IB(BB) {
      let {
        shards: OB,
        shardsPerItem: GB
      } = BB;
      return (0, SB.jsx)("div", {
        className: "GreenvilleBackpackShards",
        children: Array.from({
          length: GB
        }, ((BB, GB) => (0, SB.jsx)("span", {
          className: pB()("GreenvilleBackpackShard", {
            Filled: GB < OB
          })
        }, GB)))
      })
    }

    function FB(BB) {
      let {
        drop: OB,
        onLanded: GB
      } = BB;
      const YB = (0, jB.useRef)(null);
      return (0, jB.useLayoutEffect)((() => {
        const {
          driftEm: BB,
          spinDeg: DB
        } = OB, QB = YB.current.animate([{
          transform: `translate(${BB}em, -3.2em) rotate(${DB}deg) scale(1.2)`,
          opacity: 0
        }, {
          transform: `translate(${.7*BB}em, -2.4em) rotate(${.7*DB}deg) scale(1.1)`,
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
        return QB.onfinish = () => {
          GB(OB.id)
        }, () => {
          QB.onfinish = null, QB.cancel()
        }
      }), [OB, GB]), (0, SB.jsx)("div", {
        ref: YB,
        className: "GreenvilleBackpackFalling",
        children: (0, SB.jsx)(NB.c, {
          itemName: OB.item,
          amount: 0
        })
      })
    }
    var iB = GB(70),
      LB = GB(34815),
      gB = GB(2653),
      rB = GB(2854);
    const XB = [{
        transform: "scale(1.18)"
      }, {
        transform: "scale(1)"
      }],
      wB = [{
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
    let EB = 1,
      cB = null;

    function hB(BB) {
      var OB;
      let {
        sounds: GB
      } = BB;
      const YB = null === (OB = (0, gB.g)("currencyAmounts")) || void 0 === OB ? void 0 : OB.gold;
      return !YB || YB.hidden ? null : (0, SB.jsx)(aB, {
        gold: YB.amount,
        sounds: GB
      })
    }

    function aB(BB) {
      let {
        gold: OB,
        sounds: GB
      } = BB;
      const YB = (0, rB.d)(),
        [DB, QB] = (0, jB.useState)([]),
        oB = (0, jB.useRef)(null),
        yB = (0, jB.useRef)(null),
        JB = (0, jB.useRef)(null),
        MB = (0, jB.useRef)(OB);
      (0, jB.useLayoutEffect)((() => {
        const BB = OB - MB.current;
        if (MB.current = OB, !(BB <= 0) && (GB.onGain(), !YB && !window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
          const OB = function(BB) {
            const OB = Math.max(1, Math.min(8, Math.floor(BB))),
              GB = Math.floor(BB / OB),
              YB = [];
            for (let DB = 0; DB < OB; DB++) {
              const QB = -Math.PI / 2 + (1 === OB ? 0 : 2.4 * (DB / (OB - 1) - .5)) + .3 * (Math.random() - .5),
                oB = 40 + 35 * Math.random();
              YB.push({
                id: EB++,
                burst: {
                  x: Math.cos(QB) * oB,
                  y: Math.sin(QB) * oB
                },
                gold: DB === OB - 1 ? BB - GB * (OB - 1) : GB,
                delayMs: 45 * DB,
                step: DB,
                steps: OB
              })
            }
            return YB
          }(BB);
          QB((BB => [...BB, ...OB.slice(0, Math.max(0, 24 - BB.length))]))
        }
      }), [OB]), (0, jB.useEffect)((() => () => {
        var BB;
        null === (BB = JB.current) || void 0 === BB || BB.cancel()
      }), []);
      const PB = (0, jB.useCallback)((BB => {
          GB.onCoinLanded(BB.step, BB.steps), QB((OB => OB.filter((OB => {
            let {
              id: GB
            } = OB;
            return GB !== BB.id
          }))))
        }), [GB]),
        zB = DB.length,
        lB = (0, jB.useRef)(zB);
      (0, jB.useEffect)((() => {
        var BB, OB;
        zB < lB.current && (null === (BB = JB.current) || void 0 === BB || BB.cancel(), JB.current = (null !== (OB = cB) && void 0 !== OB ? OB : oB.current).animate(0 === zB ? wB : XB, {
          duration: 0 === zB ? 380 : 160,
          easing: "ease-out"
        }));
        lB.current = zB
      }), [zB]);
      const pB = DB.reduce(((BB, OB) => BB + OB.gold), 0);
      return (0, SB.jsxs)(SB.Fragment, {
        children: [(0, SB.jsx)("div", {
          className: "GreenvilleGoldPurse",
          children: (0, SB.jsxs)("div", {
            ref: oB,
            className: "GreenvilleGoldPurseBody",
            children: [(0, SB.jsx)("span", {
              ref: yB,
              className: "GreenvilleGoldPurseIcon",
              children: (0, SB.jsx)(NB.c, {
                itemName: "Gold Coin",
                amount: 0
              })
            }), (0, SB.jsx)("span", {
              className: "GreenvilleGoldPurseAmount SmallTextBold",
              children: (0, LB.g)(Math.max(0, OB - pB))
            })]
          })
        }), (0, iB.createPortal)(DB.map((BB => (0, SB.jsx)(eB, {
          coin: BB,
          target: yB,
          onLanded: PB
        }, BB.id))), document.body)]
      })
    }

    function eB(BB) {
      let {
        coin: OB,
        target: GB,
        onLanded: YB
      } = BB;
      const DB = (0, jB.useRef)(null);
      return (0, jB.useEffect)((() => {
        var BB;
        const QB = (null !== (BB = cB) && void 0 !== BB ? BB : GB.current).getBoundingClientRect(),
          {
            burst: oB
          } = OB,
          jB = window.innerWidth / 2,
          yB = window.innerHeight / 2,
          JB = QB.left + QB.width / 2,
          MB = QB.top + QB.height / 2,
          PB = DB.current.animate([{
            transform: `translate(${jB}px, ${yB}px) scale(0.3)`,
            opacity: 0,
            easing: "ease-out"
          }, {
            transform: `translate(${jB+.7*oB.x}px, ${yB+.7*oB.y}px) scale(1.25)`,
            opacity: 1,
            offset: .15,
            easing: "ease-out"
          }, {
            transform: `translate(${jB+oB.x}px, ${yB+oB.y}px) scale(1)`,
            offset: .35,
            easing: "ease-in-out"
          }, {
            transform: `translate(${jB+oB.x}px, ${yB+oB.y+6}px) scale(1)`,
            offset: .45,
            easing: "cubic-bezier(0.55, 0, 1, 0.45)"
          }, {
            transform: `translate(${JB}px, ${MB}px) scale(0.6)`,
            opacity: 1
          }], {
            duration: 950,
            delay: OB.delayMs,
            fill: "both"
          });
        return PB.onfinish = () => {
          YB(OB)
        }, () => {
          PB.onfinish = null, PB.cancel()
        }
      }), [OB, GB, YB]), (0, SB.jsx)("div", {
        ref: DB,
        className: "GreenvilleGoldCoin",
        children: (0, SB.jsx)(NB.c, {
          itemName: "Gold Coin",
          amount: 0
        })
      })
    }
    class TB {
      constructor(BB, OB, GB) {
        this.pacer = BB, this.send = OB, this.onAnswersTimedOut = GB, this.queued = [], this.unanswered = [], this.answerTimer = null, this.flushing = !1, this.flush = () => {
          if (!this.flushing) {
            this.flushing = !0;
            try {
              for (; this.queued.length > 0 && this.pacer.tryStart();) {
                const BB = this.queued.shift();
                this.unanswered.push(BB), this.answerTimer ??= setTimeout(this.onAnswerTimeout, 15e3), this.send(BB)
              }
            } finally {
              this.flushing = !1
            }
          }
        }, this.onAnswerTimeout = () => {
          this.answerTimer = null, this.unanswered = [], this.onAnswersTimedOut()
        }, BB.subscribe(this.flush)
      }
      getPending() {
        return [...this.unanswered, ...this.queued]
      }
      NP() {
        return 0 === this.unanswered.length && 0 === this.queued.length
      }
      getLastSent() {
        return this.unanswered.at(-1)
      }
      getLastPending() {
        var BB;
        return null !== (BB = this.queued.at(-1)) && void 0 !== BB ? BB : this.unanswered.at(-1)
      }
      push(BB) {
        this.queued.push(BB), this.flush()
      }
      dropWaiting() {
        const BB = this.queued.length > 0;
        return this.queued = [], BB
      }
      takeAnswer() {
        var BB;
        const OB = null !== (BB = this.unanswered.shift()) && void 0 !== BB ? BB : null;
        return this.stopAnswerTimer(), this.unanswered.length > 0 && (this.answerTimer = setTimeout(this.onAnswerTimeout, 15e3)), OB
      }
      clear() {
        this.queued = [], this.unanswered = [], this.stopAnswerTimer()
      }
      stopAnswerTimer() {
        null !== this.answerTimer && (clearTimeout(this.answerTimer), this.answerTimer = null)
      }
    }
    class bB {
      constructor(BB, OB, GB, YB) {
        this.confirmed = BB, this.picks = void 0, this.picks = new TB(OB, GB, YB)
      }
      confirm(BB) {
        this.confirmed = BB
      }
      getLastPending() {
        return this.picks.getLastPending()
      }
      getLatest() {
        var BB;
        return null !== (BB = this.getLastPending()) && void 0 !== BB ? BB : this.confirmed
      }
      NP() {
        return this.picks.NP()
      }
      pushLatest(BB) {
        var OB;
        const GB = null !== (OB = this.picks.getLastSent()) && void 0 !== OB ? OB : this.confirmed;
        this.picks.dropWaiting() && BB === GB || this.picks.push(BB)
      }
      takeAnswer() {
        this.picks.takeAnswer()
      }
      clear() {
        this.picks.clear()
      }
    }
    class CB {
      constructor(BB, OB, GB) {
        this.closed = BB, this.tM = OB, this.menu = GB, this.view = void 0, this.dismiss = () => {
          this.closePanel() && this.menu.dismiss()
        }, this.onMenuClosed = () => {
          this.closePanel()
        }, this.view = BB
      }
      getView() {
        return this.view
      }
      show(BB) {
        this.set(BB), this.menu.open(this)
      }
      close() {
        this.closePanel() && this.menu.close()
      }
      set(BB) {
        this.view = BB, this.tM(BB)
      }
      closePanel() {
        return !!this.view.open && (this.dropPresses(), this.set(this.closed), !0)
      }
    }
    const HB = "greenvilleDepotView",
      vB = {
        open: !1,
        explosives: [],
        picked: 0,
        selected: 0,
        level: 1,
        line: "demolitionDepotIntro"
      };
    class sB extends CB {
      constructor(BB, OB, GB, YB) {
        super(vB, BB, OB), this.picks = void 0, this.select = BB => {
          this.set({
            ...this.getView(),
            selected: BB
          })
        }, this.pl = BB => {
          const OB = this.getView();
          BB !== OB.picked && (this.picks.pushLatest(BB), this.set({
            ...OB,
            picked: BB,
            line: "demolitionGrubnikPicked"
          }))
        }, this.onAnswersTimedOut = () => {
          const BB = this.getView();
          BB.open && this.set({
            ...BB,
            picked: this.picks.getLatest()
          })
        }, this.picks = new bB(0, YB, GB, this.onAnswersTimedOut)
      }
      nP(BB) {
        if ("openDepot" === BB[0]) {
          const OB = BB[4];
          OB && this.picks.takeAnswer();
          const GB = this.getView();
          if (OB && !GB.open) return;
          this.picks.confirm(BB[2]);
          const YB = this.picks.getLatest(),
            DB = !GB.open;
          this.show({
            open: !0,
            explosives: BB[1],
            picked: YB,
            selected: DB ? YB : GB.selected,
            level: BB[3],
            line: DB ? "demolitionDepotIntro" : GB.line
          })
        } else "closeDepot" !== BB[0] && "hide" !== BB[0] || this.close()
      }
      dropPresses() {
        this.picks.clear()
      }
    }
    var xB = GB(1383),
      tB = GB(1485),
      BO = GB(34813),
      OO = GB(3708),
      GO = GB(2e3),
      YO = GB(4946);

    function DO(BB) {
      var OB;
      let {
        item: GB,
        className: YB
      } = BB;
      return (0, SB.jsx)(GO.b, {
        className: YB,
        text: null !== (OB = (0, BO.displayNameOf)((0, OO.c)(GB))) && void 0 !== OB ? OB : GB
      })
    }

    function QO(BB) {
      let {
        item: OB
      } = BB;
      return (0, SB.jsx)(NB.c, {
        itemName: OB,
        amount: 0
      })
    }

    function oO(BB) {
      let {
        open: OB,
        onDismiss: GB,
        title: YB,
        className: DB,
        headerExtra: QB,
        tabs: oB,
        status: jB,
        children: yB
      } = BB;
      const JB = `${DB}Title`;
      return (0, SB.jsx)(YO.d, {
        show: OB,
        close: GB,
        togglePointerLock: !1,
        ignorePressesAsShown: !0,
        className: "GreenvilleBoardOverlay",
        children: (0, SB.jsxs)("section", {
          className: pB()("GreenvilleBoard", DB),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": JB,
          children: [(0, SB.jsxs)("header", {
            className: "GreenvilleBoardHeader",
            children: [(0, SB.jsx)("h2", {
              id: JB,
              className: "VisuallyHidden",
              children: YB
            }), QB, (0, SB.jsx)(tB.m, {
              onClick: GB
            })]
          }), oB, (0, SB.jsx)("div", {
            className: "GreenvilleBoardBody",
            children: yB
          }), (0, SB.jsxs)("footer", {
            className: "GreenvilleBoardStatus",
            children: [(0, SB.jsx)("span", {
              className: "GreenvilleBoardSpeaker",
              children: jB.speaker
            }), jB.line]
          })]
        })
      })
    }

    function jO(BB) {
      let {
        tabs: OB,
        selected: GB,
        onSelect: YB
      } = BB;
      return (0, SB.jsx)("nav", {
        className: "GreenvilleBoardTabs",
        "data-pad-tabs": "1",
        children: OB.map((BB => {
          const OB = BB.id === GB;
          return (0, SB.jsxs)("button", {
            type: "button",
            className: pB()("GreenvilleBoardTab", {
              Selected: OB
            }),
            "aria-pressed": OB,
            "data-pad-tab": !0,
            "data-pad-selected": OB ? "true" : void 0,
            onClick: () => {
              YB(BB.id)
            },
            children: [BB.label, BB.badge]
          }, BB.id)
        }))
      })
    }

    function yO(BB) {
      let {
        className: OB,
        roomy: GB = !1,
        children: YB
      } = BB;
      return (0, SB.jsx)("div", {
        className: pB()("GreenvilleBoardTiles", OB, {
          Roomy: GB
        }),
        style: GB ? {
          "--tile-columns": (DB = jB.Children.count(YB), DB <= 3 ? DB : Math.min(4, Math.ceil(DB / 2)))
        } : void 0,
        "data-pad-select-on-focus": !0,
        children: YB
      });
      var DB
    }

    function JO(BB) {
      let {
        icon: OB,
        name: GB,
        selected: YB,
        locked: DB = !1,
        className: QB,
        onSelect: oB,
        children: jB
      } = BB;
      return (0, SB.jsxs)("button", {
        type: "button",
        className: pB()("GreenvilleBoardTile", QB, {
          Selected: YB,
          Locked: DB
        }),
        "aria-pressed": YB,
        "data-pad-default-focus": YB || void 0,
        onClick: oB,
        children: [(0, SB.jsx)("span", {
          className: "GreenvilleBoardTileIcon",
          children: OB
        }), (0, SB.jsx)("span", {
          className: "GreenvilleBoardTileName",
          children: GB
        }), jB]
      })
    }

    function MO(BB) {
      let {
        icon: OB,
        name: GB,
        badges: YB,
        children: DB
      } = BB;
      return (0, SB.jsxs)("section", {
        className: "GreenvilleBoardDetail",
        children: [(0, SB.jsxs)("header", {
          className: "GreenvilleBoardDetailHeader",
          children: [(0, SB.jsx)("span", {
            className: "GreenvilleBoardDetailHero",
            children: (0, SB.jsx)("span", {
              className: "GreenvilleBoardDetailIcon",
              children: OB
            })
          }), (0, SB.jsxs)("div", {
            className: "GreenvilleBoardDetailHeading",
            children: [(0, SB.jsx)("h3", {
              children: GB
            }), YB && (0, SB.jsx)("span", {
              className: "GreenvilleBoardDetailBadges",
              children: YB
            })]
          })]
        }), DB]
      })
    }

    function PO(BB) {
      let {
        level: OB
      } = BB;
      const {
        t: GB
      } = (0, AB.H)();
      return (0, SB.jsxs)("span", {
        className: "GreenvilleBoardBadge Muted",
        children: [(0, SB.jsx)(xB.b, {
          name: "lock"
        }), GB("greenvilleGame:boardLevelBadge", {
          level: OB
        })]
      })
    }

    function zO() {
      const {
        t: BB
      } = (0, AB.H)();
      return (0, SB.jsx)("span", {
        className: "GreenvilleBoardBadge",
        children: BB("greenvilleGame:demolitionDepotPicked")
      })
    }

    function lO(BB) {
      let {
        line: OB,
        picked: GB,
        level: YB
      } = BB;
      const DB = OB[3];
      return (0, SB.jsxs)(SB.Fragment, {
        children: [GB && (0, SB.jsx)(zO, {}), DB > YB && (0, SB.jsx)(PO, {
          level: DB
        })]
      })
    }

    function pO(BB) {
      let {
        view: OB,
        controller: GB
      } = BB;
      const {
        t: YB
      } = (0, AB.H)(), DB = OB.selected, QB = OB.explosives[DB], [oB, jB, yB, JB, MB] = QB, PB = DB === OB.picked, zB = JB > OB.level;
      return (0, SB.jsxs)(MO, {
        icon: (0, SB.jsx)(QO, {
          item: oB
        }),
        name: YB(`greenvilleGame:${jB}`),
        badges: zB && (0, SB.jsx)(PO, {
          level: JB
        }),
        children: [(0, SB.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: YB(`greenvilleGame:${yB}`)
        }), (0, SB.jsx)("p", {
          className: "GreenvilleDepotStencil",
          children: YB("greenvilleGame:demolitionDepotMaxLive", {
            count: MB
          })
        }), (0, SB.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [PB && (0, SB.jsx)("span", {
            className: "GreenvilleDepotLoaded",
            children: YB("greenvilleGame:demolitionDepotPicked")
          }), !PB && (0, SB.jsx)(tB.f, {
            disabled: zB,
            onClick: () => {
              GB.pl(DB)
            },
            children: YB("greenvilleGame:demolitionDepotLoad")
          }), zB && (0, SB.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: YB("greenvilleGame:demolitionDepotLocked", {
              level: JB
            })
          })]
        })]
      })
    }

    function qO(BB) {
      let {
        controller: OB
      } = BB;
      const GB = (0, RB.i)(HB, OB.getView()),
        {
          t: YB
        } = (0, AB.H)();
      return 0 === GB.explosives.length ? null : (0, SB.jsxs)(oO, {
        open: GB.open,
        onDismiss: OB.dismiss,
        title: YB("greenvilleGame:demolitionDepotTitle"),
        className: "GreenvilleDepotBoard",
        headerExtra: (0, SB.jsx)("span", {
          className: "GreenvilleBoardLevel",
          children: YB("greenvilleGame:demolitionDepotLevel", {
            level: GB.level
          })
        }),
        status: {
          speaker: YB("greenvilleGame:demolitionGrubnikName"),
          line: YB(`greenvilleGame:${GB.line}`)
        },
        children: [(0, SB.jsx)(yO, {
          roomy: !0,
          children: GB.explosives.map(((BB, DB) => {
            const [QB, oB, jB, yB, JB] = BB;
            return (0, SB.jsxs)(JO, {
              icon: (0, SB.jsx)(QO, {
                item: QB
              }),
              name: YB(`greenvilleGame:${oB}`),
              selected: DB === GB.selected,
              locked: yB > GB.level,
              className: pB()("GreenvilleDepotCrate", {
                Picked: DB === GB.picked
              }),
              onSelect: () => {
                OB.select(DB)
              },
              children: [(0, SB.jsx)(lO, {
                line: BB,
                picked: DB === GB.picked,
                level: GB.level
              }), (0, SB.jsx)("span", {
                className: "GreenvilleDepotStencil",
                children: YB("greenvilleGame:demolitionDepotMaxLive", {
                  count: JB
                })
              }), (0, SB.jsx)("span", {
                className: "GreenvilleDepotBlurb",
                children: YB(`greenvilleGame:${jB}`)
              })]
            }, QB)
          }))
        }), (0, SB.jsx)(pO, {
          view: GB,
          controller: OB
        })]
      })
    }
    const ZO = "greenvilleGarageView",
      NO = {
        open: !1,
        cars: [],
        out: null,
        awaiting: !1,
        selected: null,
        line: "dealershipGarageIntro"
      };
    class RO extends CB {
      constructor(BB, OB, GB, YB) {
        super(NO, BB, OB), this.picks = void 0, this.select = BB => {
          this.set({
            ...this.getView(),
            selected: BB
          })
        }, this.pl = BB => {
          BB !== this.picks.getLastPending() && (this.picks.pushLatest(BB), this.set({
            ...this.getView(),
            out: BB,
            awaiting: !this.picks.NP(),
            line: "dealershipGarageTip"
          }))
        }, this.onAnswersTimedOut = () => {
          const BB = this.getView();
          BB.open && this.set({
            ...BB,
            out: this.picks.getLatest(),
            awaiting: !this.picks.NP()
          })
        }, this.picks = new bB(null, YB, GB, this.onAnswersTimedOut)
      }
      nP(BB) {
        if ("open" === BB[0]) {
          var OB;
          const GB = BB[3];
          GB && this.picks.takeAnswer();
          const YB = this.getView();
          if (GB && !YB.open) return;
          this.picks.confirm(BB[2]);
          const DB = BB[1],
            QB = this.picks.getLatest(),
            oB = !YB.open;
          this.show({
            open: !0,
            cars: DB,
            out: QB,
            awaiting: !this.picks.NP(),
            selected: oB ? null !== (OB = null !== QB && void 0 !== QB ? QB : DB[0]) && void 0 !== OB ? OB : null : YB.selected,
            line: oB ? "dealershipGarageIntro" : YB.line
          })
        } else this.close()
      }
      dropPresses() {
        this.picks.clear()
      }
    }

    function WO() {
      const {
        t: BB
      } = (0, AB.H)();
      return (0, SB.jsx)("span", {
        className: "GreenvilleBoardBadge",
        children: BB("greenvilleGame:dealershipGarageOut")
      })
    }

    function AO(BB) {
      let {
        car: OB,
        out: GB,
        awaiting: YB,
        controller: DB
      } = BB;
      const {
        t: QB
      } = (0, AB.H)();
      return (0, SB.jsx)(MO, {
        icon: (0, SB.jsx)(QO, {
          item: OB
        }),
        name: (0, SB.jsx)(DO, {
          item: OB
        }),
        children: (0, SB.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [GB && (0, SB.jsx)("span", {
            className: "GreenvilleGarageOutStamp",
            children: QB("greenvilleGame:dealershipGarageOut")
          }), (0, SB.jsx)(tB.f, {
            disabled: GB && YB,
            onClick: () => {
              DB.pl(OB)
            },
            children: QB(GB ? "greenvilleGame:dealershipGarageBringBack" : "greenvilleGame:dealershipGarageTakeOut")
          })]
        })
      })
    }

    function VO(BB) {
      let {
        controller: OB
      } = BB;
      const GB = (0, RB.i)(ZO, OB.getView()),
        {
          t: YB
        } = (0, AB.H)(),
        DB = 0 === GB.cars.length;
      return (0, SB.jsxs)(oO, {
        open: GB.open,
        onDismiss: OB.dismiss,
        title: YB("greenvilleGame:dealershipGarageTitle"),
        className: "GreenvilleGarageBoard",
        status: {
          speaker: YB("greenvilleGame:dealershipDelName"),
          line: YB(DB ? "greenvilleGame:dealershipGarageEmpty" : `greenvilleGame:${GB.line}`)
        },
        children: [!DB && (0, SB.jsx)(yO, {
          roomy: !0,
          children: GB.cars.map((BB => {
            const YB = BB === GB.out;
            return (0, SB.jsx)(JO, {
              icon: (0, SB.jsx)(QO, {
                item: BB
              }),
              name: (0, SB.jsx)(DO, {
                item: BB
              }),
              selected: BB === GB.selected,
              className: pB()("GreenvilleGarageBay", {
                Out: YB
              }),
              onSelect: () => {
                OB.select(BB)
              },
              children: YB && (0, SB.jsx)(WO, {})
            }, BB)
          }))
        }), null !== GB.selected && (0, SB.jsx)(AO, {
          car: GB.selected,
          out: GB.selected === GB.out,
          awaiting: GB.awaiting,
          controller: OB
        })]
      })
    }
    const SO = {
        kind: "intro"
      },
      nO = {
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
        line: SO
      };

    function UO(BB) {
      let [OB, GB, YB, DB, QB, oB] = BB;
      return {
        slot: OB,
        titleKey: GB,
        items: YB,
        exp: DB,
        gold: QB,
        UJ: oB,
        ready: YB.every((BB => {
          let [, OB, GB] = BB;
          return GB >= OB
        }))
      }
    }

    function fO(BB, OB) {
      return "sell" === OB.action ? function(BB, OB) {
        let GB = BB.goldOwned;
        const YB = BB.sellLines.map((BB => {
          const [YB, DB, QB] = BB;
          return null !== OB && OB !== YB ? BB : (GB += DB * QB, [YB, 0, QB])
        }));
        return {
          ...BB,
          goldOwned: GB,
          sellLines: YB
        }
      }(BB, OB.item) : "accept" === OB.action ? function(BB, OB) {
        var GB;
        const YB = BB.orders[OB];
        return {
          ...BB,
          tracked: null !== (GB = BB.tracked) && void 0 !== GB ? GB : OB,
          orders: BB.orders.map((BB => BB === YB ? {
            ...BB,
            UJ: !0
          } : BB)),
          sellLines: BB.sellLines.map((BB => {
            const [OB, GB, DB] = BB, QB = YB.items.find((BB => {
              let [GB] = BB;
              return GB === OB
            }));
            return void 0 === QB ? BB : [OB, Math.max(0, GB - QB[1]), DB]
          }))
        }
      }(BB, OB.slot) : "track" === OB.action ? {
        ...BB,
        tracked: OB.slot
      } : {
        ...BB,
        delivering: [...BB.delivering, OB.slot]
      }
    }
    const kO = "greenvilleLumberMillView",
      dO = "greenvilleLumberTrackerView";
    class KO extends CB {
      constructor(BB, OB, GB, YB, QB) {
        super(nO, BB, GB), this.publishTracker = OB, this.board = null, this.commands = void 0, this.tracker = null, this.tab = "orders", this.selectedSlot = 0, this.selectedWood = 0, this.line = SO, this.selectTab = BB => {
          this.tab = BB, this.set({
            ...this.getView(),
            tab: BB
          })
        }, this.selectOrder = BB => {
          this.selectedSlot = BB, this.set({
            ...this.getView(),
            selectedSlot: BB
          })
        }, this.selectWood = BB => {
          this.selectedWood = BB, this.set({
            ...this.getView(),
            selectedWood: BB
          })
        }, this.accept = BB => {
          this.findOrder(BB).UJ || this.queue({
            action: "accept",
            slot: BB
          })
        }, this.track = BB => {
          this.getView().tracked !== BB && this.findOrder(BB).UJ && this.queue({
            action: "track",
            slot: BB
          })
        }, this.deliver = BB => {
          const OB = this.findOrder(BB);
          OB.UJ && OB.ready && !this.getView().delivering.includes(BB) && this.queue({
            action: "deliver",
            slot: BB
          })
        }, this.sell = BB => {
          this.getView().sellLines.some((OB => {
            let [GB, YB] = OB;
            return YB > 0 && (null === BB || BB === GB)
          })) && this.queue({
            action: "sell",
            item: BB
          })
        }, this.onAnswersTimedOut = () => {
          this.getView().open && this.set(this.getBoardView())
        }, this.commands = new TB(QB, (BB => {
          YB(function(BB) {
            return "sell" === BB.action ? null === BB.item ? `${DB}sell` : `${DB}sell ${BB.item}` : `${DB}${BB.action} ${BB.slot}`
          }(BB))
        }), this.onAnswersTimedOut)
      }
      getTracker() {
        return this.tracker
      }
      nP(BB) {
        if ("open" === BB[0]) {
          const GB = BB[6],
            YB = GB ? this.commands.takeAnswer() : null,
            DB = !this.getView().open;
          if (GB && DB) return;
          if (DB) this.onReopened(BB);
          else if (null !== YB) {
            var OB;
            this.line = null !== (OB = function(BB, OB, GB) {
              if ("deliver" === BB.action) {
                const [, YB] = OB[1][BB.slot];
                return GB[1][BB.slot][5] ? null : {
                  kind: "delivered",
                  titleKey: YB
                }
              }
              if ("sell" !== BB.action) return null;
              let YB = 0;
              return OB[3].forEach(((OB, DB) => {
                let [QB, oB] = OB;
                null !== BB.item && BB.item !== QB || (YB += Math.max(0, oB - GB[3][DB][1]))
              })), YB > 0 ? {
                kind: "bought",
                count: YB
              } : null
            }(YB, this.board, BB)) && void 0 !== OB ? OB : this.line
          }
          this.board = BB, this.show(this.getBoardView())
        } else "close" === BB[0] ? this.close() : (this.tracker = null === BB[1] ? null : UO(BB[1]), this.publishTracker(this.tracker))
      }
      dropPresses() {
        this.commands.clear(), this.board = null
      }
      findOrder(BB) {
        return this.getView().orders.find((OB => OB.slot === BB))
      }
      onReopened(BB) {
        let [, OB, , GB] = BB;
        const YB = OB.map(UO).find((BB => BB.UJ && BB.ready)),
          DB = GB.findIndex((BB => {
            let [, OB] = BB;
            return OB > 0
          }));
        void 0 === YB && -1 !== DB || (this.tab = "orders"), void 0 !== YB && (this.selectedSlot = YB.slot), -1 === DB || this.selectedWood < GB.length && GB[this.selectedWood][1] > 0 || (this.selectedWood = DB), this.line = SO
      }
      getBoardView() {
        const [, BB, OB, GB, YB, DB] = this.board;
        let QB = {
          open: !0,
          orders: BB.map(UO),
          tracked: OB,
          sellLines: GB,
          level: YB,
          goldOwned: DB,
          delivering: [],
          tab: this.tab,
          selectedSlot: this.selectedSlot,
          selectedWood: this.selectedWood,
          line: this.line
        };
        for (const oB of this.commands.getPending()) QB = fO(QB, oB);
        return QB
      }
      queue(BB) {
        this.commands.push(BB), this.set(this.getBoardView())
      }
    }
    var uO = GB(1405),
      mO = GB(2063);
    const IO = "Gold Coin";

    function FO(BB) {
      let {
        amount: OB,
        item: GB = IO,
        sJ: YB,
        inTile: DB = !1,
        iconRef: QB
      } = BB;
      return (0, SB.jsx)(uO.g, {
        delayShow: 200,
        hoverOnly: DB,
        placement: "top",
        tooltipClassName: "GreenvilleChipTooltipBox",
        tooltipInner: (0, SB.jsx)(iO, {
          item: GB,
          amount: OB,
          sJ: YB
        }),
        children: (0, SB.jsxs)("span", {
          className: pB()("GreenvilleBoardChip", {
            Short: void 0 !== YB && YB < OB
          }),
          children: [(0, SB.jsx)("span", {
            ref: QB,
            className: "GreenvilleBoardChipIcon",
            children: (0, SB.jsx)(QO, {
              item: GB
            })
          }), OB.toLocaleString()]
        })
      })
    }

    function iO(BB) {
      let {
        item: OB,
        amount: GB,
        sJ: YB
      } = BB;
      const {
        t: DB
      } = (0, AB.H)(), QB = (0, mO.f)("itemInfo", (BB => BB[OB]));
      return (0, SB.jsxs)("div", {
        className: "GreenvilleChipTooltip",
        children: [(0, SB.jsxs)("div", {
          className: "GreenvilleChipTooltipHeader",
          children: [(0, SB.jsx)("span", {
            className: "GreenvilleChipTooltipIcon",
            children: (0, SB.jsx)(QO, {
              item: OB
            })
          }), (0, SB.jsx)(DO, {
            item: OB,
            className: "GreenvilleChipTooltipName"
          })]
        }), void 0 !== (null === QB || void 0 === QB ? void 0 : QB.description) && (0, SB.jsx)(GO.b, {
          text: QB.description,
          className: "GreenvilleChipTooltipDescription"
        }), void 0 !== YB && (0, SB.jsxs)("div", {
          className: pB()("GreenvilleChipTooltipHeld", {
            Short: YB < GB
          }),
          children: [(0, SB.jsx)("span", {
            className: "GreenvilleChipTooltipLabel",
            children: DB("greenvilleGame:boardYouHave")
          }), (0, SB.jsxs)("span", {
            className: "GreenvilleChipTooltipCount",
            children: [(0, SB.jsx)("span", {
              className: "GreenvilleChipTooltipHeldAmount",
              children: YB.toLocaleString()
            }), ` / ${GB.toLocaleString()}`]
          }), (0, SB.jsx)("span", {
            className: "GreenvilleChipTooltipMeter",
            children: (0, SB.jsx)("span", {
              style: {
                width: (GB > 0 ? 100 * Math.min(1, YB / GB) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function LO(BB) {
      let {
        gold: OB,
        children: GB
      } = BB;
      const YB = (0, jB.useRef)(null);
      var DB;
      return DB = YB, (0, jB.useLayoutEffect)((() => {
        const BB = DB.current;
        return cB = BB, () => {
          cB === BB && (cB = null)
        }
      }), [DB]), (0, SB.jsxs)("div", {
        className: "GreenvilleBoardWallet",
        children: [GB, (0, SB.jsx)(FO, {
          amount: OB,
          iconRef: YB
        })]
      })
    }
    const gO = {
      New: "lumberBoardStateNew",
      Accepted: "lumberBoardStateAccepted",
      Tracking: "lumberBoardTracking",
      Ready: "lumberBoardStateReady"
    };

    function rO(BB, OB) {
      return BB.UJ ? BB.ready ? "Ready" : BB.slot === OB ? "Tracking" : "Accepted" : "New"
    }

    function XO(BB) {
      let {
        state: OB
      } = BB;
      const {
        t: GB
      } = (0, AB.H)();
      return (0, SB.jsx)("span", {
        className: pB()("GreenvilleBoardBadge GreenvilleLumberState", OB, {
          Muted: "Accepted" === OB
        }),
        children: GB(`greenvilleGame:${gO[OB]}`)
      })
    }

    function wO(BB) {
      let {
        order: OB
      } = BB;
      return (0, SB.jsx)("span", {
        className: "GreenvilleLumberNeeds",
        children: OB.items.map((BB => {
          let [OB, GB, YB] = BB;
          const DB = YB >= GB;
          return (0, SB.jsxs)("span", {
            className: pB()("GreenvilleLumberNeed", {
              Met: DB
            }),
            children: [(0, SB.jsx)("span", {
              className: "GreenvilleLumberNeedIcon",
              children: (0, SB.jsx)(QO, {
                item: OB
              })
            }), (0, SB.jsx)(DO, {
              item: OB,
              className: "GreenvilleLumberNeedName"
            }), (0, SB.jsxs)("span", {
              className: "GreenvilleLumberNeedCount",
              children: [Math.min(YB, GB).toLocaleString(), "/", GB.toLocaleString()]
            }), (0, SB.jsx)("span", {
              className: "GreenvilleLumberNeedTick",
              "aria-hidden": "true",
              children: DB && "\u2713"
            })]
          }, OB)
        }))
      })
    }

    function EO(BB) {
      let {
        order: OB,
        inTile: GB = !1
      } = BB;
      const {
        t: YB
      } = (0, AB.H)();
      return (0, SB.jsxs)("span", {
        className: "GreenvilleLumberReward",
        children: [(0, SB.jsx)(FO, {
          amount: OB.gold,
          inTile: GB
        }), (0, SB.jsx)("span", {
          className: "GreenvilleLumberExp",
          children: YB("greenvilleGame:boardExpGain", {
            exp: OB.exp
          })
        })]
      })
    }

    function cO(BB) {
      let {
        view: OB,
        order: GB,
        controller: YB
      } = BB;
      const {
        t: DB
      } = (0, AB.H)(), {
        slot: QB,
        items: oB,
        UJ: jB,
        ready: yB
      } = GB, JB = oB.reduce(((BB, OB) => {
        let [, GB, YB] = OB;
        return BB + Math.max(0, GB - YB)
      }), 0);
      return (0, SB.jsxs)("div", {
        className: "GreenvilleBoardActions",
        children: [!jB && (0, SB.jsx)(tB.f, {
          onClick: () => {
            YB.accept(QB)
          },
          children: DB("greenvilleGame:lumberBoardAccept")
        }), jB && (0, SB.jsx)(tB.q, {
          disabled: !yB,
          loading: OB.delivering.includes(QB),
          onClick: () => {
            YB.deliver(QB)
          },
          children: DB("greenvilleGame:lumberBoardDeliver")
        }), jB && !yB && (0, SB.jsx)("span", {
          className: "GreenvilleBoardHint",
          children: DB("greenvilleGame:lumberBoardDeliverMissing", {
            count: JB
          })
        }), jB && QB !== OB.tracked && (0, SB.jsx)(tB.Z, {
          onClick: () => {
            YB.track(QB)
          },
          children: DB("greenvilleGame:lumberBoardTrack")
        })]
      })
    }

    function hO(BB) {
      let {
        view: OB,
        controller: GB
      } = BB;
      const {
        t: YB
      } = (0, AB.H)(), DB = OB.orders[OB.selectedSlot], QB = rO(DB, OB.tracked), oB = DB.UJ && DB.slot === OB.tracked;
      return (0, SB.jsxs)(MO, {
        icon: (0, SB.jsx)(QO, {
          item: DB.items[0][0]
        }),
        name: YB(`greenvilleGame:${DB.titleKey}`),
        badges: (0, SB.jsxs)(SB.Fragment, {
          children: [(0, SB.jsx)(XO, {
            state: QB
          }), oB && "Ready" === QB && (0, SB.jsx)(XO, {
            state: "Tracking"
          })]
        }),
        children: [(0, SB.jsx)(wO, {
          order: DB
        }), (0, SB.jsx)("dl", {
          className: "GreenvilleBoardFacts",
          children: (0, SB.jsxs)("div", {
            children: [(0, SB.jsx)("dt", {
              children: YB("greenvilleGame:lumberBoardReward")
            }), (0, SB.jsx)("dd", {
              children: (0, SB.jsx)(EO, {
                order: DB
              })
            })]
          })
        }), (0, SB.jsx)(cO, {
          view: OB,
          order: DB,
          controller: GB
        })]
      })
    }

    function aO(BB) {
      let {
        view: OB,
        controller: GB
      } = BB;
      const {
        t: YB
      } = (0, AB.H)();
      return (0, SB.jsxs)(SB.Fragment, {
        children: [(0, SB.jsx)(yO, {
          className: "GreenvilleLumberTickets",
          roomy: !0,
          children: OB.orders.map((BB => {
            const DB = rO(BB, OB.tracked);
            return (0, SB.jsxs)(JO, {
              icon: (0, SB.jsx)(QO, {
                item: BB.items[0][0]
              }),
              name: YB(`greenvilleGame:${BB.titleKey}`),
              selected: BB.slot === OB.selectedSlot,
              className: pB()("GreenvilleLumberTicket", DB),
              onSelect: () => {
                GB.selectOrder(BB.slot)
              },
              children: [(0, SB.jsx)(XO, {
                state: DB
              }), (0, SB.jsx)(wO, {
                order: BB
              }), (0, SB.jsx)(EO, {
                order: BB,
                inTile: !0
              })]
            }, BB.slot)
          }))
        }), (0, SB.jsx)(hO, {
          view: OB,
          controller: GB
        })]
      })
    }

    function eO(BB) {
      let {
        item: OB
      } = BB;
      return (0, SB.jsx)("span", {
        className: "GreenvilleLumberLogEnd",
        children: (0, SB.jsx)(QO, {
          item: OB
        })
      })
    }

    function TO(BB) {
      let {
        view: OB,
        controller: GB
      } = BB;
      const {
        t: YB
      } = (0, AB.H)(), [DB, QB, oB] = OB.sellLines[OB.selectedWood], jB = function(BB, OB) {
        let GB = 0,
          YB = 0;
        for (const DB of BB.orders)
          if (DB.UJ)
            for (const [BB, QB, oB] of DB.items) BB === OB && (GB += QB, YB = oB);
        return Math.min(GB, YB)
      }(OB, DB), yB = OB.sellLines.some((BB => {
        let [, OB] = BB;
        return OB > 0
      }));
      return (0, SB.jsxs)(MO, {
        icon: (0, SB.jsx)(eO, {
          item: DB
        }),
        name: (0, SB.jsx)(DO, {
          item: DB
        }),
        badges: QB > 0 && (0, SB.jsx)("span", {
          className: "GreenvilleBoardBadge",
          children: YB("greenvilleGame:lumberBoardSellHeld", {
            count: QB
          })
        }),
        children: [(0, SB.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, SB.jsxs)("div", {
            children: [(0, SB.jsx)("dt", {
              children: YB("greenvilleGame:boardYouHave")
            }), (0, SB.jsx)("dd", {
              children: (jB + QB).toLocaleString()
            })]
          }), (0, SB.jsxs)("div", {
            children: [(0, SB.jsx)("dt", {
              children: YB("greenvilleGame:lumberBoardSellKept")
            }), (0, SB.jsx)("dd", {
              children: jB.toLocaleString()
            })]
          }), (0, SB.jsxs)("div", {
            children: [(0, SB.jsx)("dt", {
              children: YB("greenvilleGame:lumberBoardSellSpare")
            }), (0, SB.jsx)("dd", {
              className: pB()("GreenvilleLumberSpare", {
                None: 0 === QB
              }),
              children: QB.toLocaleString()
            })]
          }), (0, SB.jsxs)("div", {
            children: [(0, SB.jsx)("dt", {
              children: YB("greenvilleGame:lumberBoardSellEach")
            }), (0, SB.jsx)("dd", {
              children: (0, SB.jsx)(FO, {
                amount: oB
              })
            })]
          })]
        }), (0, SB.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [(0, SB.jsxs)(tB.q, {
            disabled: 0 === QB,
            onClick: () => {
              GB.sell(DB)
            },
            children: [QB > 0 && YB("greenvilleGame:lumberBoardSell", {
              count: QB
            }), 0 === QB && YB(jB > 0 ? "greenvilleGame:lumberBoardSellKeptAll" : "greenvilleGame:lumberBoardSellNone")]
          }), (0, SB.jsx)(tB.f, {
            disabled: !yB,
            onClick: () => {
              GB.sell(null)
            },
            children: YB("greenvilleGame:lumberBoardSellAll")
          })]
        })]
      })
    }

    function bO(BB) {
      let {
        view: OB,
        controller: GB
      } = BB;
      const {
        t: YB
      } = (0, AB.H)();
      return (0, SB.jsxs)(SB.Fragment, {
        children: [(0, SB.jsx)(yO, {
          className: "GreenvilleLumberWoodPile",
          children: OB.sellLines.map(((BB, DB) => {
            let [QB, oB, jB] = BB;
            return (0, SB.jsxs)(JO, {
              icon: (0, SB.jsx)(eO, {
                item: QB
              }),
              name: (0, SB.jsx)(DO, {
                item: QB
              }),
              selected: DB === OB.selectedWood,
              className: pB()("GreenvilleLumberWood", {
                Spare: oB > 0
              }),
              onSelect: () => {
                GB.selectWood(DB)
              },
              children: [oB > 0 && (0, SB.jsx)("span", {
                className: "GreenvilleBoardBadge",
                children: YB("greenvilleGame:lumberBoardSellHeld", {
                  count: oB
                })
              }), (0, SB.jsx)(FO, {
                amount: jB,
                inTile: !0
              })]
            }, QB)
          }))
        }), (0, SB.jsx)(TO, {
          view: OB,
          controller: GB
        })]
      })
    }

    function CO(BB) {
      let {
        controller: OB
      } = BB;
      const GB = (0, RB.i)(kO, OB.getView()),
        {
          t: YB
        } = (0, AB.H)(),
        DB = function(BB) {
          const {
            t: OB
          } = (0, AB.H)();
          return "delivered" === BB.kind ? OB("greenvilleGame:lumberTimbertoothThanks", {
            order: OB(`greenvilleGame:${BB.titleKey}`)
          }) : "bought" === BB.kind ? OB("greenvilleGame:lumberTimbertoothBought", {
            count: BB.count
          }) : OB("greenvilleGame:lumberBoardIntro")
        }(GB.line);
      if (0 === GB.orders.length) return null;
      const QB = GB.orders.filter((BB => BB.UJ && BB.ready)).length,
        oB = GB.sellLines.reduce(((BB, OB) => {
          let [, GB] = OB;
          return BB + GB
        }), 0);
      return (0, SB.jsxs)(oO, {
        open: GB.open,
        onDismiss: OB.dismiss,
        title: YB("greenvilleGame:lumberBoardTitle"),
        className: "GreenvilleLumberBoard",
        headerExtra: (0, SB.jsx)(LO, {
          gold: GB.goldOwned,
          children: (0, SB.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: YB("greenvilleGame:lumberBoardLevel", {
              level: GB.level
            })
          })
        }),
        tabs: (0, SB.jsx)(jO, {
          tabs: [{
            id: "orders",
            label: YB("greenvilleGame:lumberBoardOrders"),
            badge: QB > 0 && (0, SB.jsx)("span", {
              className: "GreenvilleBoardBadge Ready",
              children: YB("greenvilleGame:lumberBoardReadyCount", {
                count: QB
              })
            })
          }, {
            id: "sell",
            label: YB("greenvilleGame:lumberBoardSellHeading"),
            badge: oB > 0 && (0, SB.jsx)("span", {
              className: "GreenvilleBoardBadge",
              children: YB("greenvilleGame:lumberBoardSellHeld", {
                count: oB
              })
            })
          }],
          selected: GB.tab,
          onSelect: OB.selectTab
        }),
        status: {
          speaker: YB("greenvilleGame:lumberTimbertoothName"),
          line: DB
        },
        children: ["orders" === GB.tab && (0, SB.jsx)(aO, {
          view: GB,
          controller: OB
        }), "sell" === GB.tab && (0, SB.jsx)(bO, {
          view: GB,
          controller: OB
        })]
      })
    }

    function HO(BB) {
      let {
        controller: OB
      } = BB;
      (0, RB.i)(dO, null);
      const {
        t: GB
      } = (0, AB.H)(), YB = OB.getTracker();
      return null === YB ? null : (0, SB.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, SB.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: GB(`greenvilleGame:${YB.titleKey}`)
        }), (0, SB.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: YB.items.map((BB => {
            let [OB, GB, YB] = BB;
            return (0, SB.jsxs)("li", {
              className: pB()("GreenvilleTrackerRow", {
                Done: YB >= GB
              }),
              children: [(0, SB.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, SB.jsx)(NB.c, {
                  itemName: OB,
                  amount: 0
                })
              }), (0, SB.jsx)(DO, {
                item: OB,
                className: "GreenvilleTrackerLabel"
              }), (0, SB.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [Math.min(YB, GB), "/", GB]
              })]
            }, OB)
          }))
        }), YB.ready && (0, SB.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: GB("greenvilleGame:lumberTrackerReady")
        })]
      })
    }
    const vO = "greenvilleOreBuyerView",
      sO = {
        open: !1,
        lines: [],
        selected: 0,
        level: 1,
        goldOwned: 0
      };
    class xO extends CB {
      constructor(BB, OB, GB, YB) {
        super(sO, BB, OB), this.sales = void 0, this.serverLines = [], this.select = BB => {
          this.set({
            ...this.getView(),
            selected: BB
          })
        }, this.sell = BB => {
          this.getView().lines.some((OB => {
            let [GB, , , , YB] = OB;
            return YB > 0 && (null === BB || BB === GB)
          })) && (this.sales.push(BB), this.set({
            ...this.getView(),
            lines: this.getLines()
          }))
        }, this.onAnswersTimedOut = () => {
          const BB = this.getView();
          BB.open && this.set({
            ...BB,
            lines: this.getLines()
          })
        }, this.sales = new TB(YB, GB, this.onAnswersTimedOut)
      }
      nP(BB) {
        if ("close" !== BB[0]) {
          const [, OB, GB, YB] = BB, DB = "open" === BB[0] && BB[4];
          DB && this.sales.takeAnswer();
          const QB = this.getView();
          if ((DB || "refresh" === BB[0]) && !QB.open) return;
          this.serverLines = OB;
          const oB = OB.findIndex((BB => BB[4] > 0));
          this.show({
            open: !0,
            lines: this.getLines(),
            selected: QB.open ? QB.selected : Math.max(0, oB),
            level: GB,
            goldOwned: YB
          })
        } else this.close()
      }
      dropPresses() {
        this.sales.clear()
      }
      getLines() {
        const BB = this.sales.getPending();
        return this.serverLines.map((OB => {
          const [GB, YB, DB, QB, , oB] = OB;
          return BB.some((BB => null === BB || BB === GB)) ? [GB, YB, DB, QB, 0, oB] : OB
        }))
      }
    }

    function tO(BB) {
      let {
        line: OB,
        level: GB
      } = BB;
      const {
        t: YB
      } = (0, AB.H)(), [, , , DB, QB, oB] = OB;
      return (0, SB.jsxs)(SB.Fragment, {
        children: [QB > 0 && (0, SB.jsx)("span", {
          className: "GreenvilleBoardBadge",
          children: YB("greenvilleGame:oreBuyerHeld", {
            count: QB
          })
        }), DB > GB && (0, SB.jsxs)("span", {
          className: "GreenvilleBoardBadge Muted",
          children: [(0, SB.jsx)(xB.b, {
            name: "lock"
          }), YB("greenvilleGame:boardLevelBadge", {
            level: DB
          })]
        }), DB <= GB && oB && (0, SB.jsx)("span", {
          className: "GreenvilleBoardBadge GreenvilleOreRare",
          children: YB("greenvilleGame:oreBuyerRare")
        })]
      })
    }

    function BG(BB) {
      let {
        line: OB
      } = BB;
      return (0, SB.jsx)("span", {
        className: "GreenvilleOreSample",
        children: (0, SB.jsx)(QO, {
          item: OB[0]
        })
      })
    }

    function OG(BB) {
      let {
        view: OB,
        controller: GB
      } = BB;
      const {
        t: YB
      } = (0, AB.H)(), DB = OB.lines[OB.selected], [QB, oB, jB, yB, JB, MB] = DB, PB = yB > OB.level, zB = OB.lines.some((BB => BB[4] > 0));
      return (0, SB.jsxs)(MO, {
        icon: (0, SB.jsx)(BG, {
          line: DB
        }),
        name: (0, SB.jsx)(DO, {
          item: QB
        }),
        badges: (0, SB.jsx)(tO, {
          line: DB,
          level: OB.level
        }),
        children: [(0, SB.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, SB.jsxs)("div", {
            children: [(0, SB.jsx)("dt", {
              children: YB("greenvilleGame:boardYouHave")
            }), (0, SB.jsx)("dd", {
              className: pB()("GreenvilleOreHeld", {
                None: 0 === JB
              }),
              children: JB.toLocaleString()
            })]
          }), (0, SB.jsxs)("div", {
            children: [(0, SB.jsx)("dt", {
              children: YB("greenvilleGame:oreBuyerPriceEach")
            }), (0, SB.jsx)("dd", {
              children: (0, SB.jsx)(FO, {
                amount: oB
              })
            })]
          }), (0, SB.jsxs)("div", {
            children: [(0, SB.jsx)("dt", {
              children: YB("greenvilleGame:oreBuyerExpEach")
            }), (0, SB.jsxs)("dd", {
              className: "GreenvilleOreExp",
              children: ["+", jB]
            })]
          })]
        }), MB && (0, SB.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: YB("greenvilleGame:oreBuyerLegendary")
        }), PB && (0, SB.jsxs)(SB.Fragment, {
          children: [(0, SB.jsx)("p", {
            className: "GreenvilleBoardHint",
            children: YB("greenvilleGame:oreBuyerLocked", {
              level: yB
            })
          }), (0, SB.jsx)("p", {
            className: "GreenvilleBoardDescription",
            children: YB("greenvilleGame:oreBuyerTip")
          })]
        }), (0, SB.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [(0, SB.jsxs)(tB.q, {
            disabled: 0 === JB,
            onClick: () => {
              GB.sell(QB)
            },
            children: [JB > 0 && YB("greenvilleGame:oreBuyerSell", {
              count: JB
            }), 0 === JB && YB("greenvilleGame:oreBuyerSellNone")]
          }), (0, SB.jsx)(tB.f, {
            disabled: !zB,
            onClick: () => {
              GB.sell(null)
            },
            children: YB("greenvilleGame:oreBuyerSellAll")
          })]
        })]
      })
    }

    function GG(BB) {
      let {
        controller: OB
      } = BB;
      const GB = (0, RB.i)(vO, OB.getView()),
        {
          t: YB
        } = (0, AB.H)();
      return 0 === GB.lines.length ? null : (0, SB.jsxs)(oO, {
        open: GB.open,
        onDismiss: OB.dismiss,
        title: YB("greenvilleGame:oreBuyerTitle"),
        className: "GreenvilleOreBuyerBoard",
        headerExtra: (0, SB.jsx)(LO, {
          gold: GB.goldOwned,
          children: (0, SB.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: YB("greenvilleGame:oreBuyerLevel", {
              level: GB.level
            })
          })
        }),
        status: {
          speaker: YB("greenvilleGame:oreBuyerName"),
          line: YB("greenvilleGame:oreBuyerGreet")
        },
        children: [(0, SB.jsx)(yO, {
          roomy: !0,
          children: GB.lines.map(((BB, DB) => {
            const [QB, oB, jB, yB, JB, MB] = BB;
            return (0, SB.jsxs)(JO, {
              icon: (0, SB.jsx)(BG, {
                line: BB
              }),
              name: (0, SB.jsx)(DO, {
                item: QB
              }),
              selected: DB === GB.selected,
              locked: yB > GB.level && 0 === JB,
              className: pB()("GreenvilleOreTile", {
                Legendary: MB
              }),
              onSelect: () => {
                OB.select(DB)
              },
              children: [(0, SB.jsx)(tO, {
                line: BB,
                level: GB.level
              }), (0, SB.jsxs)("span", {
                className: "GreenvilleOrePrice",
                children: [(0, SB.jsx)(FO, {
                  amount: oB,
                  inTile: !0
                }), (0, SB.jsx)("span", {
                  className: "GreenvilleOreExp",
                  children: YB("greenvilleGame:boardExpGain", {
                    exp: jB
                  })
                })]
              })]
            }, QB)
          }))
        }), (0, SB.jsx)(OG, {
          view: GB,
          controller: OB
        })]
      })
    }
    const YG = {
      kind: "greet"
    };

    function DG(BB) {
      return BB.every((BB => {
        let [, , OB, GB] = BB;
        return GB >= OB
      }))
    }

    function QG(BB) {
      let [OB, GB, YB, DB, QB, oB] = BB;
      return {
        slot: OB,
        nameKey: GB,
        needs: YB,
        exp: DB,
        gold: QB,
        UJ: oB,
        ready: DG(YB)
      }
    }

    function oG(BB, OB) {
      let [, , GB, YB] = BB;
      return OB ? GB : GB - YB
    }

    function jG(BB, OB) {
      let [GB, YB] = BB;
      return GB === OB.item && null !== YB === OB.golden
    }

    function yG(BB, OB) {
      return (OB.golden ? BB.goldenLines : BB.sellLines).find((BB => jG(BB, OB)))
    }

    function JG(BB, OB) {
      return "sell" === OB.action ? zG(function(BB, OB, GB) {
        let YB = BB.goldOwned;
        const DB = BB => {
          if (null !== OB && !jG(BB, OB)) return BB;
          const [DB, QB, oB, jB, yB] = BB, JB = oG(BB, GB);
          return YB += JB * yB, [DB, QB, oB - JB, GB ? 0 : jB, yB]
        };
        return {
          ...BB,
          sellLines: BB.sellLines.map(DB),
          goldenLines: MG(BB.goldenLines.map(DB)),
          goldOwned: YB
        }
      }(BB, OB.kind, OB.all)) : "accept" === OB.action ? function(BB, OB) {
        var GB;
        const {
          needs: YB
        } = BB.orders[OB], DB = BB => {
          const [OB, GB, DB, QB, oB] = BB, jB = PG(YB, BB);
          return jB ? [OB, GB, DB, Math.min(DB, QB + jB[2]), oB] : BB
        };
        return {
          ...BB,
          tracked: null !== (GB = BB.tracked) && void 0 !== GB ? GB : OB,
          orders: BB.orders.map((BB => BB.slot === OB ? {
            ...BB,
            UJ: !0
          } : BB)),
          sellLines: BB.sellLines.map(DB),
          goldenLines: BB.goldenLines.map(DB)
        }
      }(BB, OB.slot) : "track" === OB.action ? {
        ...BB,
        tracked: OB.slot
      } : zG(function(BB, OB) {
        const {
          needs: GB
        } = BB.orders[OB], YB = BB => {
          const [OB, YB, DB, QB, oB] = BB, jB = PG(GB, BB);
          return jB ? [OB, YB, DB - jB[2], QB - jB[2], oB] : BB
        };
        return {
          ...BB,
          sellLines: BB.sellLines.map(YB),
          goldenLines: MG(BB.goldenLines.map(YB)),
          delivering: [...BB.delivering, OB]
        }
      }(BB, OB.slot))
    }

    function MG(BB) {
      return BB.filter((BB => {
        let [, , OB] = BB;
        return OB > 0
      }))
    }

    function PG(BB, OB) {
      let [GB, YB] = OB;
      return BB.find((BB => {
        let [OB, DB] = BB;
        return OB === GB && DB === YB
      }))
    }

    function zG(BB) {
      const OB = (OB, GB) => {
          const YB = (null === GB ? BB.sellLines : BB.goldenLines).find((BB => {
            let [GB] = BB;
            return GB === OB
          }));
          return YB ? YB[2] : 0
        },
        GB = BB.orders.map((GB => {
          if (BB.delivering.includes(GB.slot)) return GB;
          const YB = GB.needs.map((BB => {
            let [GB, YB, DB] = BB;
            return [GB, YB, DB, OB(GB, YB)]
          }));
          return {
            ...GB,
            needs: YB,
            ready: DG(YB)
          }
        }));
      return {
        ...BB,
        orders: GB
      }
    }

    function lG(BB) {
      let [, , , OB, GB] = BB;
      return [...OB, ...GB].reduce(((BB, OB) => {
        let [, , GB] = OB;
        return BB + GB
      }), 0)
    }
    const pG = "greenvilleFarmBoardView",
      qG = "greenvilleFarmTrackerView",
      ZG = {
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
        line: YG
      };
    class NG extends CB {
      constructor(BB, OB, GB, YB, DB) {
        super(ZG, BB, GB), this.publishTracker = OB, this.board = null, this.commands = void 0, this.tracker = null, this.tab = "orders", this.selectedOrder = 0, this.selectedProduce = null, this.line = YG, this.selectTab = BB => {
          this.tab = BB, this.set(this.getBoardView())
        }, this.selectOrder = BB => {
          this.selectedOrder = BB, this.set(this.getBoardView())
        }, this.selectProduce = BB => {
          this.selectedProduce = BB, this.set(this.getBoardView())
        }, this.accept = BB => {
          this.getView().orders[BB].UJ || this.queue({
            action: "accept",
            slot: BB
          })
        }, this.track = BB => {
          const OB = this.getView();
          OB.tracked !== BB && OB.orders[BB].UJ && this.queue({
            action: "track",
            slot: BB
          })
        }, this.deliver = BB => {
          const OB = this.getView(),
            GB = OB.orders[BB];
          GB.UJ && GB.ready && !OB.delivering.includes(BB) && this.queue({
            action: "deliver",
            slot: BB
          })
        }, this.sell = (BB, OB) => {
          this.queueSale({
            item: BB,
            golden: OB
          }, !1)
        }, this.sellSpare = () => {
          this.queueSale(null, !1)
        }, this.sellAll = () => {
          this.queueSale(null, !0)
        }, this.onAnswersTimedOut = () => {
          this.getView().open && this.set(this.settleView())
        }, this.commands = new TB(DB, (BB => {
          YB(function(BB) {
            return "sell" !== BB.action ? `${QB}${BB.action} ${BB.slot}` : BB.all ? `${QB}sellAll` : null === BB.kind ? `${QB}sell` : `${QB}${BB.kind.golden?"sellGolden":"sell"} ${BB.kind.item}`
          }(BB))
        }), this.onAnswersTimedOut)
      }
      getTracker() {
        return this.tracker
      }
      nP(BB) {
        if ("open" === BB[0]) {
          const GB = BB[7],
            YB = GB ? this.commands.takeAnswer() : null,
            DB = !this.getView().open;
          if (GB && DB) return;
          const QB = this.board;
          if (this.board = BB, DB) this.onReopened();
          else if (null !== YB) {
            var OB;
            this.line = null !== (OB = function(BB, OB, GB) {
              const YB = GB[6] - OB[6];
              if (YB <= 0) return null;
              if ("deliver" === BB.action) return {
                kind: "delivered",
                nameKey: OB[1][BB.slot][1],
                gold: YB
              };
              const DB = lG(OB) - lG(GB);
              return "sell" === BB.action && DB > 0 ? {
                kind: "sold",
                count: DB,
                gold: YB
              } : null
            }(YB, QB, BB)) && void 0 !== OB ? OB : this.line
          }
          this.show(this.settleView())
        } else "close" === BB[0] ? this.close() : (this.tracker = null === BB[1] ? null : QG(BB[1]), this.publishTracker(this.tracker))
      }
      dropPresses() {
        this.commands.clear(), this.board = null
      }
      onReopened() {
        this.line = YG;
        const BB = this.toView(this.board).orders.find((BB => BB.UJ && BB.ready));
        BB && (this.tab = "orders", this.selectedOrder = BB.slot)
      }
      queueSale(BB, OB) {
        const {
          sellLines: GB,
          goldenLines: YB
        } = this.getView();
        [...GB, ...YB].some((GB => oG(GB, OB) > 0 && (null === BB || jG(GB, BB)))) && this.queue({
          action: "sell",
          kind: BB,
          all: OB
        })
      }
      toView(BB) {
        let [, OB, GB, YB, DB, QB, oB] = BB;
        return {
          open: !0,
          orders: OB.map(QG),
          tracked: GB,
          sellLines: YB,
          goldenLines: DB,
          level: QB,
          goldOwned: oB,
          delivering: [],
          tab: this.tab,
          selectedOrder: this.selectedOrder,
          selectedProduce: this.selectedProduce,
          line: this.line
        }
      }
      getBoardView() {
        let BB = this.toView(this.board);
        for (const OB of this.commands.getPending()) BB = JG(BB, OB);
        return {
          ...BB,
          selectedProduce: this.pickProduce(BB)
        }
      }
      settleView() {
        const BB = this.getBoardView();
        return this.commands.NP() && (this.selectedProduce = BB.selectedProduce), BB
      }
      pickProduce(BB) {
        var OB, GB;
        const YB = this.selectedProduce;
        if (YB && yG(BB, YB)) return YB;
        if (YB) return {
          item: YB.item,
          golden: !1
        };
        const [DB, QB] = null !== (OB = null !== (GB = BB.goldenLines[0]) && void 0 !== GB ? GB : BB.sellLines.find((BB => {
          let [, , OB] = BB;
          return OB > 0
        }))) && void 0 !== OB ? OB : BB.sellLines[0];
        return {
          item: DB,
          golden: null !== QB
        }
      }
      queue(BB) {
        this.commands.push(BB), this.set(this.getBoardView())
      }
    }
    var RG = GB(1398);

    function WG() {
      const BB = (0, jB.useRef)(null);
      return (0, RG.b)(BB), (0, SB.jsx)("span", {
        ref: BB,
        className: "GreenvilleFarmSparkle",
        "aria-hidden": "true"
      })
    }

    function AG(BB) {
      let {
        item: OB,
        golden: GB
      } = BB;
      return (0, SB.jsx)("span", {
        className: pB()("GreenvilleFarmProduce", {
          Golden: GB
        }),
        children: (0, SB.jsx)(QO, {
          item: OB
        })
      })
    }

    function VG(BB) {
      let {
        item: OB,
        goldenName: GB
      } = BB;
      return null !== GB ? (0, SB.jsx)("span", {
        className: "GreenvilleFarmGoldenName",
        children: GB
      }) : (0, SB.jsx)(DO, {
        item: OB
      })
    }
    const SG = {
      New: "greenvilleGame:farmBoardNew",
      Accepted: "greenvilleGame:farmBoardAccepted",
      Tracking: "greenvilleGame:farmOrderTracking",
      Ready: "greenvilleGame:farmBoardReady"
    };

    function nG(BB, OB) {
      return BB.UJ ? BB.ready ? "Ready" : OB ? "Tracking" : "Accepted" : "New"
    }

    function UG(BB) {
      return BB.needs.some((BB => {
        let [, OB] = BB;
        return null !== OB
      }))
    }

    function fG(BB) {
      let {
        order: OB
      } = BB;
      const [GB, YB] = OB.needs[0];
      return (0, SB.jsx)(AG, {
        item: GB,
        golden: null !== YB
      })
    }

    function kG(BB) {
      let {
        state: OB
      } = BB;
      const {
        t: GB
      } = (0, AB.H)();
      return (0, SB.jsx)("span", {
        className: pB()("GreenvilleBoardBadge GreenvilleFarmState", OB),
        children: GB(SG[OB])
      })
    }

    function dG(BB) {
      let {
        needs: OB
      } = BB;
      return (0, SB.jsx)("span", {
        className: "GreenvilleFarmNeeds",
        children: OB.map((BB => {
          let [OB, GB, YB, DB] = BB;
          const QB = DB >= YB;
          return (0, SB.jsxs)("span", {
            className: pB()("GreenvilleFarmNeed", {
              Met: QB,
              Golden: null !== GB
            }),
            children: [(0, SB.jsx)("span", {
              className: "GreenvilleFarmNeedIcon",
              children: (0, SB.jsx)(AG, {
                item: OB,
                golden: null !== GB
              })
            }), (0, SB.jsx)("span", {
              className: "GreenvilleFarmNeedName",
              children: (0, SB.jsx)(VG, {
                item: OB,
                goldenName: GB
              })
            }), (0, SB.jsxs)("span", {
              className: "GreenvilleFarmNeedCount",
              children: [QB && "\u2713 ", Math.min(DB, YB), "/", YB]
            })]
          }, `${OB}|${GB}`)
        }))
      })
    }

    function KG(BB) {
      let {
        order: OB,
        inTile: GB = !1
      } = BB;
      const {
        t: YB
      } = (0, AB.H)();
      return (0, SB.jsxs)("span", {
        className: "GreenvilleFarmReward",
        children: [(0, SB.jsx)(FO, {
          amount: OB.gold,
          inTile: GB
        }), (0, SB.jsx)("span", {
          className: "GreenvilleFarmExp",
          children: YB("greenvilleGame:boardExpGain", {
            exp: OB.exp
          })
        })]
      })
    }

    function uG(BB) {
      let {
        view: OB,
        controller: GB
      } = BB;
      const {
        t: YB
      } = (0, AB.H)(), DB = OB.orders[OB.selectedOrder], {
        slot: QB,
        nameKey: oB,
        needs: jB,
        UJ: yB,
        ready: JB
      } = DB, MB = QB === OB.tracked, PB = jB.reduce(((BB, OB) => {
        let [, , GB, YB] = OB;
        return BB + Math.max(0, GB - YB)
      }), 0);
      return (0, SB.jsxs)(MO, {
        icon: (0, SB.jsx)(fG, {
          order: DB
        }),
        name: YB(oB),
        badges: (0, SB.jsxs)(SB.Fragment, {
          children: [(0, SB.jsx)(kG, {
            state: nG(DB, MB)
          }), UG(DB) && (0, SB.jsx)("span", {
            className: "GreenvilleBoardBadge GreenvilleFarmGoldenBadge",
            children: YB("greenvilleGame:farmBoardGolden")
          })]
        }),
        children: [(0, SB.jsx)(dG, {
          needs: jB
        }), (0, SB.jsx)("dl", {
          className: "GreenvilleBoardFacts",
          children: (0, SB.jsxs)("div", {
            children: [(0, SB.jsx)("dt", {
              children: YB("greenvilleGame:farmBoardReward")
            }), (0, SB.jsx)("dd", {
              children: (0, SB.jsx)(KG, {
                order: DB
              })
            })]
          })
        }), (0, SB.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [!yB && (0, SB.jsx)(tB.f, {
            onClick: () => {
              GB.accept(QB)
            },
            children: YB("greenvilleGame:farmOrderAccept")
          }), yB && MB && (0, SB.jsxs)("span", {
            className: "GreenvilleFarmTracking",
            children: [(0, SB.jsx)(xB.b, {
              name: "crosshairs"
            }), YB("greenvilleGame:farmOrderTracking")]
          }), yB && !MB && (0, SB.jsx)(tB.Z, {
            onClick: () => {
              GB.track(QB)
            },
            children: YB("greenvilleGame:farmOrderTrack")
          }), yB && (0, SB.jsx)(tB.q, {
            disabled: !JB,
            loading: OB.delivering.includes(QB),
            onClick: () => {
              GB.deliver(QB)
            },
            children: YB("greenvilleGame:farmOrderDeliver")
          }), yB && !JB && (0, SB.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: YB("greenvilleGame:farmBoardMissing", {
              count: PB
            })
          })]
        })]
      })
    }

    function mG(BB) {
      let {
        view: OB,
        controller: GB
      } = BB;
      const {
        t: YB
      } = (0, AB.H)();
      return (0, SB.jsxs)(SB.Fragment, {
        children: [(0, SB.jsx)(yO, {
          roomy: !0,
          children: OB.orders.map((BB => (0, SB.jsxs)(JO, {
            icon: (0, SB.jsx)(fG, {
              order: BB
            }),
            name: YB(BB.nameKey),
            selected: BB.slot === OB.selectedOrder,
            className: pB()("GreenvilleFarmBasket", {
              WantsGolden: UG(BB)
            }),
            onSelect: () => {
              GB.selectOrder(BB.slot)
            },
            children: [(0, SB.jsx)(kG, {
              state: nG(BB, BB.slot === OB.tracked)
            }), (0, SB.jsx)(dG, {
              needs: BB.needs
            }), (0, SB.jsx)(KG, {
              order: BB,
              inTile: !0
            })]
          }, BB.slot)))
        }), (0, SB.jsx)(uG, {
          view: OB,
          controller: GB
        })]
      })
    }

    function IG(BB) {
      let {
        line: OB,
        selected: GB,
        onSelect: YB
      } = BB;
      const [DB, QB, oB, , jB] = OB, yB = null !== QB;
      return (0, SB.jsxs)(JO, {
        icon: (0, SB.jsx)(AG, {
          item: DB,
          golden: yB
        }),
        name: (0, SB.jsx)(VG, {
          item: DB,
          goldenName: QB
        }),
        selected: GB,
        className: pB()("GreenvilleFarmCrate", {
          Golden: yB,
          Empty: 0 === oB
        }),
        onSelect: YB,
        children: [yB && (0, SB.jsx)(WG, {}), oB > 0 && (0, SB.jsxs)("span", {
          className: "GreenvilleBoardBadge GreenvilleFarmHeld",
          children: ["\xd7", oB]
        }), (0, SB.jsx)(FO, {
          amount: jB,
          inTile: !0
        })]
      })
    }

    function FG(BB) {
      let {
        view: OB,
        controller: GB
      } = BB;
      const {
        t: YB
      } = (0, AB.H)(), DB = [...OB.sellLines, ...OB.goldenLines], QB = DB.some((BB => oG(BB, !1) > 0)), oB = DB.some((BB => oG(BB, !0) > 0));
      return (0, SB.jsxs)("div", {
        className: "GreenvilleFarmSign",
        children: [(0, SB.jsx)("h3", {
          className: "GreenvilleFarmSignBoard",
          children: YB("greenvilleGame:farmBoardPrices")
        }), (0, SB.jsxs)("div", {
          className: "GreenvilleFarmSignActions",
          children: [(0, SB.jsx)(tB.f, {
            disabled: !QB,
            onClick: GB.sellSpare,
            children: YB("greenvilleGame:farmStallSellSurplus")
          }), (0, SB.jsx)(tB.Q, {
            disabled: !oB,
            onClick: GB.sellAll,
            children: YB("greenvilleGame:farmStallSellAll")
          })]
        })]
      })
    }

    function iG(BB) {
      let {
        line: OB,
        controller: GB
      } = BB;
      const {
        t: YB
      } = (0, AB.H)(), [DB, QB, oB, jB, yB] = OB, JB = null !== QB, MB = oG(OB, !1);
      return (0, SB.jsxs)(MO, {
        icon: (0, SB.jsx)(AG, {
          item: DB,
          golden: JB
        }),
        name: (0, SB.jsx)(VG, {
          item: DB,
          goldenName: QB
        }),
        badges: JB && (0, SB.jsx)("span", {
          className: "GreenvilleBoardBadge GreenvilleFarmGoldenBadge",
          children: YB("greenvilleGame:farmBoardGolden")
        }),
        children: [JB && (0, SB.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: YB("greenvilleGame:farmBoardGoldenBlurb")
        }), (0, SB.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, SB.jsxs)("div", {
            children: [(0, SB.jsx)("dt", {
              children: YB("greenvilleGame:boardYouHave")
            }), (0, SB.jsx)("dd", {
              children: oB
            })]
          }), jB > 0 && (0, SB.jsxs)("div", {
            children: [(0, SB.jsx)("dt", {
              children: YB("greenvilleGame:farmBoardKept")
            }), (0, SB.jsx)("dd", {
              children: jB
            })]
          }), (0, SB.jsxs)("div", {
            children: [(0, SB.jsx)("dt", {
              children: YB("greenvilleGame:farmBoardSpare")
            }), (0, SB.jsx)("dd", {
              children: MB
            })]
          }), (0, SB.jsxs)("div", {
            children: [(0, SB.jsx)("dt", {
              children: YB("greenvilleGame:farmBoardPriceEach")
            }), (0, SB.jsx)("dd", {
              children: (0, SB.jsx)(FO, {
                amount: yB
              })
            })]
          })]
        }), (0, SB.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [MB > 0 && (0, SB.jsx)(tB.q, {
            onClick: () => {
              GB.sell(DB, JB)
            },
            children: YB("greenvilleGame:farmBoardSell", {
              count: MB
            })
          }), 0 === oB && (0, SB.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: YB("greenvilleGame:farmStallNothing")
          }), oB > 0 && 0 === MB && (0, SB.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: YB("greenvilleGame:farmBoardAllKept")
          })]
        })]
      })
    }

    function LG(BB) {
      let {
        view: OB,
        produce: GB,
        controller: YB
      } = BB;
      const {
        t: DB
      } = (0, AB.H)(), QB = BB => {
        const [OB, DB] = BB;
        return (0, SB.jsx)(IG, {
          line: BB,
          selected: jG(BB, GB),
          onSelect: () => {
            YB.selectProduce({
              item: OB,
              golden: null !== DB
            })
          }
        }, `${OB}|${null!==DB}`)
      };
      return (0, SB.jsxs)(SB.Fragment, {
        children: [(0, SB.jsxs)(yO, {
          children: [(0, SB.jsx)(FG, {
            view: OB,
            controller: YB
          }), OB.goldenLines.length > 0 && (0, SB.jsxs)(SB.Fragment, {
            children: [(0, SB.jsx)("h4", {
              className: "GreenvilleFarmSection Golden",
              children: DB("greenvilleGame:farmBoardGoldenCrops")
            }), OB.goldenLines.map(QB), (0, SB.jsx)("hr", {
              className: "GreenvilleFarmSection"
            })]
          }), OB.sellLines.map(QB)]
        }), (0, SB.jsx)(iG, {
          line: yG(OB, GB),
          controller: YB
        })]
      })
    }

    function gG(BB) {
      let {
        controller: OB
      } = BB;
      const GB = (0, RB.i)(pG, OB.getView()),
        {
          t: YB
        } = (0, AB.H)(),
        DB = function(BB) {
          const {
            t: OB
          } = (0, AB.H)();
          return "delivered" === BB.kind ? OB("greenvilleGame:tillieDelivered", {
            order: OB(BB.nameKey),
            gold: BB.gold
          }) : "sold" === BB.kind ? OB("greenvilleGame:tillieSold", {
            count: BB.count,
            gold: BB.gold
          }) : OB("greenvilleGame:tillieGreet")
        }(GB.line),
        QB = GB.selectedProduce;
      if (null === QB) return null;
      const oB = function(BB) {
        return BB.orders.filter((BB => BB.UJ && BB.ready)).length
      }(GB);
      return (0, SB.jsxs)(oO, {
        open: GB.open,
        onDismiss: OB.dismiss,
        title: YB("greenvilleGame:farmBoardTitle"),
        className: "GreenvilleFarmBoard",
        headerExtra: (0, SB.jsx)(LO, {
          gold: GB.goldOwned,
          children: (0, SB.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: YB("greenvilleGame:farmBoardLevel", {
              level: GB.level
            })
          })
        }),
        tabs: (0, SB.jsx)(jO, {
          tabs: [{
            id: "orders",
            label: YB("greenvilleGame:farmBoardOrdersTab"),
            badge: oB > 0 && (0, SB.jsx)("span", {
              className: "GreenvilleBoardBadge GreenvilleFarmReadyBadge",
              children: YB("greenvilleGame:farmBoardReadyCount", {
                count: oB
              })
            })
          }, {
            id: "stall",
            label: YB("greenvilleGame:farmBoardStallTab")
          }],
          selected: GB.tab,
          onSelect: OB.selectTab
        }),
        status: {
          speaker: YB("greenvilleGame:farmTillieName"),
          line: DB
        },
        children: ["orders" === GB.tab && (0, SB.jsx)(mG, {
          view: GB,
          controller: OB
        }), "stall" === GB.tab && (0, SB.jsx)(LG, {
          view: GB,
          produce: QB,
          controller: OB
        })]
      })
    }
    var rG = GB(39151);

    function XG(BB) {
      let {
        controller: OB
      } = BB;
      (0, RB.i)(qG, null);
      const {
        t: GB
      } = (0, AB.H)(), YB = OB.getTracker();
      return null === YB ? null : (0, SB.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, SB.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: GB(YB.nameKey)
        }), (0, SB.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: YB.needs.map((BB => {
            let [OB, YB, DB, QB] = BB;
            return (0, SB.jsxs)("li", {
              className: pB()("GreenvilleTrackerRow", {
                Done: QB >= DB,
                Golden: null !== YB
              }),
              children: [(0, SB.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, SB.jsx)(NB.c, {
                  itemName: OB,
                  amount: 0
                })
              }), (0, SB.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: null !== YB && void 0 !== YB ? YB : (0, rG.g)(GB, OB)
              }), (0, SB.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [Math.min(QB, DB), "/", DB]
              })]
            }, `${OB}|${YB}`)
          }))
        }), YB.ready && (0, SB.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: GB("greenvilleGame:farmOrderReady")
        })]
      })
    }
    const wG = "greenvillePlaceView",
      EG = "greenvilleMoodView";
    class cG {
      constructor(BB, OB) {
        this.publishPlace = BB, this.publishMood = OB, this.place = null, this.mood = null
      }
      getPlace() {
        return this.place
      }
      getMood() {
        return this.mood
      }
      nP(BB) {
        const OB = performance.now();
        switch (BB[0]) {
          case "hudMood": {
            const [, GB, YB, DB, QB, oB, jB] = BB;
            return this.mood = {
              energy: GB,
              earningsPercent: YB,
              breakEvenEnergy: DB,
              restedEndsAt: QB > 0 ? OB + QB : 0,
              adBoosted: oB,
              luckPercent: jB
            }, void this.publishMood(this.mood)
          }
          case "hudTown": {
            const [OB, GB, YB] = BB;
            this.place = {
              kind: OB,
              place: GB,
              levels: YB
            };
            break
          }
          case "hudJob": {
            const [OB, GB, YB, DB, QB, oB, jB, yB, JB] = BB;
            this.place = {
              kind: OB,
              place: GB,
              job: YB,
              level: DB,
              expInto: QB,
              expNeeded: oB,
              status: null === jB ? null : hG(jB),
              next: null === yB ? null : {
                item: yB[0],
                nameKey: yB[1],
                level: yB[2]
              },
              stats: JB.map((BB => {
                let [OB, GB, YB, DB] = BB;
                return {
                  stat: OB,
                  value: GB,
                  max: YB,
                  boosted: DB
                }
              }))
            };
            break
          }
          case "hudHome": {
            const [GB, YB, DB, QB, oB, jB, yB, JB, MB] = BB;
            this.place = {
              kind: GB,
              houseName: YB,
              ownerName: DB,
              isOwner: QB,
              visitorsAllowed: oB,
              pvp: jB,
              parkour: yB,
              runStartedAt: JB < 0 ? null : this.getRunStart(OB - JB),
              bestTimes: MB.map((BB => {
                let [OB, GB] = BB;
                return {
                  playerName: OB,
                  seconds: GB
                }
              }))
            };
            break
          }
          case "hudSpleef": {
            const [OB, GB, YB] = BB;
            this.place = {
              kind: OB,
              eliminations: GB,
              wins: YB
            };
            break
          }
        }
        this.publishPlace(this.place)
      }
      getRunStart(BB) {
        var OB;
        const GB = "hudHome" === (null === (OB = this.place) || void 0 === OB ? void 0 : OB.kind) ? this.place.runStartedAt : null;
        return null !== GB && Math.abs(GB - BB) < 500 ? GB : BB
      }
    }

    function hG(BB) {
      switch (BB[0]) {
        case "hudTier":
          return {
            kind: BB[0], tierKey: BB[1], locked: BB[2]
          };
        case "hudBay":
          return {
            kind: BB[0], materialKey: BB[1], objectKey: BB[2], percent: BB[3]
          };
        case "hudBayEmpty":
          return {
            kind: BB[0]
          };
        case "hudFarmTier":
          return {
            kind: BB[0], goldenPercent: BB[1]
          }
      }
    }
    var aG = GB(3831),
      eG = GB(1260),
      TG = GB(192);
    const bG = JSON.parse('{"e":{"constructionSiteA":{"name":"Construction Site A"},"quarry":{"name":"The Quarry","skill":"Mining"},"industry":{"name":"Demolition Yard","skill":"Demolition"},"market":{"name":"Market Street","skill":"Market"},"lumberMill":{"name":"Lumber Mill","skill":"Woodcutting"},"farm":{"name":"Greenville Farm","skill":"Farming"},"constructionSiteB":{"name":"Construction Site B"},"dealership":{"name":"Wheeler\'s Wheels"},"postOffice":{"name":"Post Office & Diner"},"station":{"name":"The Station"},"docks":{"name":"The Docks"}},"f":[[{"kind":"residential","name":"Hillside"},{"kind":"district","district":"quarry"},{"kind":"district","district":"industry"},{"kind":"residential","name":"Ridgeview"}],[{"kind":"residential","name":"Willow Gardens"},{"kind":"district","district":"constructionSiteA"},{"kind":"district","district":"market"},{"kind":"residential","name":"Maple Row"}],[{"kind":"residential","name":"Birchwood"},{"kind":"district","district":"farm"},{"kind":"district","district":"lumberMill"},{"kind":"district","district":"dealership"}],[{"kind":"residential","name":"Seaview"},{"kind":"district","district":"constructionSiteB"},{"kind":"residential","name":"Harbour Terrace"},{"kind":"residential","name":"Lighthouse Point"}]]}'),
      CG = TG.f.pP,
      HG = 1e3 * CG,
      vG = CG,
      sG = vG + 2 * CG,
      xG = 4 * sG + vG;

    function tG(BB, OB, GB) {
      return OB >= BB.x0 && OB <= BB.x1 && GB >= BB.z0 && GB <= BB.z1
    }
    const BY = bG.f,
      OY = Object.fromEntries(Object.entries(bG.e).map((BB => {
        let [OB, {
          name: GB
        }] = BB;
        return [OB, GB]
      })));

    function GY(BB, OB) {
      return [HG + vG + BB * sG, HG + vG + OB * sG]
    }

    function YY() {
      const BB = [];
      BY.forEach(((OB, GB) => {
        OB.forEach(((OB, YB) => {
          if ("residential" !== OB.kind) return;
          const [DB, QB] = GY(YB, GB);
          for (const [GB, oB, jB] of [
              [0, 0, "north"],
              [1, 0, "north"],
              [0, 1, "south"],
              [1, 1, "south"]
            ]) BB.push({
            chunk: [DB / CG + GB, 0, QB / CG + oB],
            facing: jB,
            neighbourhood: OB.name
          })
        }))
      }));
      const OB = HG + xG / 2,
        GB = BB => {
          let {
            chunk: GB
          } = BB;
          return Math.hypot(GB[0] * CG + CG / 2 - OB, GB[2] * CG + CG / 2 - OB)
        };
      return BB.sort(((BB, OB) => GB(BB) - GB(OB)))
    }
    const DY = {
        market: "Crate",
        demolition: "Moonstone Explosive",
        mining: "Iron Pickaxe",
        woodcutting: "Iron Axe",
        farming: "Wheat"
      },
      QY = {
        earningPower: "greenvilleGame:marketEarningPower",
        power: "greenvilleGame:demolitionPower",
        points: "greenvilleGame:demolitionPoints",
        depth: "greenvilleGame:miningDepth",
        value: "greenvilleGame:miningValue",
        backpack: "greenvilleGame:miningBackpack",
        luck: "greenvilleGame:luck"
      };

    function oY(BB, OB, GB, YB) {
      switch (OB.kind) {
        case "hudTown":
          return "city" !== OB.place ? {
            key: OB.place,
            name: BB(`greenvilleGame:${OB.place}`),
            eyebrow: null
          } : "tile" === GB.kind ? {
            key: `place|${OY[GB.district]}`,
            name: OY[GB.district],
            eyebrow: null
          } : "outside" === GB.kind ? {
            key: "city|outside",
            name: BB("greenvilleGame:placeGreenville"),
            eyebrow: null
          } : null;
        case "hudJob": {
          const GB = function(BB, OB) {
            switch (OB) {
              case "quarry":
                return OY.quarry;
              case "demolitionYard":
                return OY.industry;
              case "marketStreet":
                return OY.market;
              case "farm":
                return OY.farm;
              case "lumberMill":
                return OY.lumberMill;
              case "supermarket":
                return BB("greenvilleGame:market");
              case "demolition":
              case "mining":
              case "woodcutting":
              case "farming":
                return BB(`greenvilleGame:${OB}`)
            }
          }(BB, OB.place);
          return {
            key: `place|${GB}`,
            name: GB,
            eyebrow: null
          }
        }
        case "hudHome": {
          const GB = OB.isOwner ? BB("greenvilleGame:placeYourHouse") : BB("greenvilleGame:homePlayersHouse", {
              player: (0, eG.g)(OB.ownerName, YB)
            }),
            DB = `home|${OB.ownerName}|${OB.houseName}`;
          return null === OB.houseName ? {
            key: DB,
            name: GB,
            eyebrow: null
          } : {
            key: DB,
            name: OB.houseName,
            eyebrow: GB
          }
        }
        case "hudSpleef":
          return {
            key: "spleef", name: BB("greenvilleGame:placeSpleef"), eyebrow: null
          }
      }
    }

    function jY(BB) {
      let {
        controller: OB,
        children: GB
      } = BB;
      (0, RB.i)(wG, null);
      const [YB, DB] = (0, jB.useState)(null);
      (0, aG.m)(YB, ".RightElements");
      const QB = OB.getPlace();
      return (0, SB.jsx)(ZB.e, {
        placement: "topRight",
        children: (0, SB.jsx)("div", {
          className: "GreenvilleHudColumn",
          children: (0, SB.jsxs)("div", {
            ref: DB,
            className: "GreenvilleHudColumnStack",
            children: [GB, "hudTown" === (null === QB || void 0 === QB ? void 0 : QB.kind) && (0, SB.jsx)(JY, {
              levels: QB.levels
            }), "hudJob" === (null === QB || void 0 === QB ? void 0 : QB.kind) && (0, SB.jsx)(MY, {
              job: QB
            }), "hudHome" === (null === QB || void 0 === QB ? void 0 : QB.kind) && QB.bestTimes.length > 0 && (0, SB.jsx)(PY, {
              home: QB
            }), "hudSpleef" === (null === QB || void 0 === QB ? void 0 : QB.kind) && (0, SB.jsx)("div", {
              className: "GreenvilleTrackerCard",
              children: (0, SB.jsx)(yY, {
                rows: [
                  ["greenvilleGame:spleefEliminations", QB.eliminations],
                  ["greenvilleGame:spleefWins", QB.wins]
                ]
              })
            })]
          })
        })
      })
    }

    function yY(BB) {
      let {
        rows: OB
      } = BB;
      const {
        t: GB
      } = (0, AB.H)();
      return (0, SB.jsx)("ul", {
        className: "GreenvilleTrackerRows",
        children: OB.map((BB => {
          let [OB, YB] = BB;
          return (0, SB.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, SB.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: GB(OB)
            }), (0, SB.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: (0, LB.g)(YB)
            })]
          }, OB)
        }))
      })
    }

    function JY(BB) {
      let {
        levels: OB
      } = BB;
      const {
        t: GB
      } = (0, AB.H)();
      return (0, SB.jsxs)("div", {
        className: "GreenvilleTrackerCard GreenvilleJobsStrip",
        children: [(0, SB.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: GB("greenvilleGame:jobs")
        }), (0, SB.jsx)("ul", {
          className: "GreenvilleJobsStripJobs",
          children: oB.map(((BB, YB) => {
            const DB = OB[YB];
            return (0, SB.jsxs)("li", {
              className: pB()("GreenvilleJobsStripJob", {
                Max: DB >= 50
              }),
              "aria-label": GB("greenvilleGame:jobLevel", {
                job: GB(`greenvilleGame:${BB}`),
                level: DB
              }),
              children: [(0, SB.jsx)("span", {
                className: "GreenvilleJobsStripIcon",
                "aria-hidden": "true",
                children: (0, SB.jsx)(NB.c, {
                  itemName: DY[BB],
                  amount: 0
                })
              }), (0, SB.jsx)("span", {
                className: "GreenvilleJobsStripLevel",
                "aria-hidden": "true",
                children: GB("greenvilleGame:levelShort", {
                  level: DB
                })
              })]
            }, BB)
          }))
        })]
      })
    }

    function MY(BB) {
      let {
        job: {
          stats: OB,
          next: GB
        }
      } = BB;
      const {
        t: YB
      } = (0, AB.H)();
      return (0, SB.jsxs)(SB.Fragment, {
        children: [OB.length > 0 && (0, SB.jsx)("div", {
          className: "GreenvilleTrackerCard",
          children: (0, SB.jsx)("ul", {
            className: "GreenvilleTrackerRows",
            children: OB.map((BB => {
              let {
                stat: OB,
                value: GB,
                max: DB,
                boosted: QB
              } = BB;
              return (0, SB.jsxs)("li", {
                className: "GreenvilleTrackerRow",
                children: [(0, SB.jsx)("span", {
                  className: "GreenvilleTrackerLabel",
                  children: YB(QY[OB])
                }), (0, SB.jsxs)("span", {
                  className: pB()("GreenvilleTrackerValue", {
                    Boosted: QB
                  }),
                  children: [(0, LB.g)(GB), null !== DB && `/${(0,LB.g)(DB)}`]
                })]
              }, OB)
            }))
          })
        }), null !== GB && (0, SB.jsxs)("div", {
          className: "GreenvilleTrackerCard GreenvilleNextUnlock",
          children: [(0, SB.jsx)("span", {
            className: "GreenvilleNextUnlockEyebrow",
            children: YB("greenvilleGame:nextUnlock")
          }), (0, SB.jsxs)("div", {
            className: "GreenvilleNextUnlockBody",
            children: [(0, SB.jsx)("span", {
              className: "GreenvilleNextUnlockIcon",
              "aria-hidden": "true",
              children: (0, SB.jsx)(NB.c, {
                itemName: GB.item,
                amount: 0
              })
            }), (0, SB.jsxs)("span", {
              className: "GreenvilleNextUnlockText",
              children: [(0, SB.jsx)("strong", {
                className: "GreenvilleNextUnlockName",
                children: YB(GB.nameKey)
              }), (0, SB.jsx)("span", {
                className: "GreenvilleNextUnlockLevel",
                children: YB("greenvilleGame:unlockAtLevel", {
                  level: GB.level
                })
              })]
            })]
          })]
        })]
      })
    }

    function PY(BB) {
      let {
        home: OB
      } = BB;
      const {
        t: GB,
        selectedLanguage: YB
      } = (0, AB.H)(), DB = (0, mO.g)("hiddenPlayerNames");
      return (0, SB.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, SB.jsxs)("strong", {
          className: "GreenvilleTrackerTitle GreenvilleBestTimesTitle",
          children: [(0, SB.jsx)(xB.b, {
            name: "trophy"
          }), GB("greenvilleGame:parkourBestTimes")]
        }), (0, SB.jsx)("ol", {
          className: "GreenvilleTrackerRows",
          children: OB.bestTimes.slice(0, 3).map(((BB, OB) => {
            let {
              playerName: QB,
              seconds: oB
            } = BB;
            return (0, SB.jsxs)("li", {
              className: pB()("GreenvilleTrackerRow GreenvilleBestTime", {
                First: 0 === OB
              }),
              children: [(0, SB.jsx)("span", {
                className: "GreenvilleBestTimeRank",
                children: OB + 1
              }), (0, SB.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: (0, eG.g)(QB, DB)
              }), (0, SB.jsx)("span", {
                className: "GreenvilleTrackerValue",
                children: GB("greenvilleGame:parkourTime", {
                  seconds: oB.toLocaleString(YB.code, {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1
                  })
                })
              })]
            }, `${OB}|${QB}`)
          }))
        })]
      })
    }
    const zY = "greenvilleLevelUpsView";
    class lY {
      constructor(BB) {
        this.publishLevelUps = BB, this.levelUps = [], this.token = 0, this.revealed = BB => {
          this.setLevelUps(this.levelUps.filter((OB => OB.token !== BB)))
        }
      }
      getLevelUps() {
        return this.levelUps
      }
      nP(BB) {
        const [OB, GB, YB] = BB;
        this.setLevelUps([...this.levelUps, {
          job: OB,
          level: GB,
          unlock: null === YB ? null : {
            item: YB[0],
            nameKey: YB[1],
            level: YB[2]
          },
          token: ++this.token
        }])
      }
      setLevelUps(BB) {
        this.levelUps = BB, this.publishLevelUps(BB)
      }
    }
    const pY = [{
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
      qY = Array.from({
        length: 16
      }, ((BB, OB) => ({
        "--angle": 360 * OB / 16 + OB % 3 * 7 + "deg",
        "--distance": 5 + OB % 4 * 1.2 + "rem",
        "--delay": OB % 5 * 30 + "ms"
      })));

    function ZY(BB) {
      let {
        controller: OB
      } = BB;
      (0, RB.i)(zY, null);
      const GB = OB.getLevelUps();
      return 0 === GB.length ? null : (0, iB.createPortal)((0, SB.jsx)(NY, {
        levelUp: GB[0],
        onDone: OB.revealed
      }, GB[0].token), document.body)
    }

    function NY(BB) {
      let {
        levelUp: OB,
        onDone: GB
      } = BB;
      const {
        t: YB
      } = (0, AB.H)(), DB = (0, jB.useRef)(null), {
        unlock: QB
      } = OB, oB = null === QB ? 2600 : 4200;
      (0, jB.useLayoutEffect)((() => {
        const BB = document.querySelector(".GreenvilleTopBar");
        BB && DB.current.style.setProperty("--top-bar-bottom", `${BB.getBoundingClientRect().bottom}px`)
      }), []), (0, jB.useEffect)((() => {
        const BB = DB.current.animate(pY, {
          duration: oB,
          fill: "both"
        });
        return BB.onfinish = () => {
          GB(OB.token)
        }, () => {
          BB.onfinish = null, BB.cancel()
        }
      }), [OB, oB, GB]);
      const yB = YB(`greenvilleGame:${OB.job}`);
      return (0, SB.jsxs)("div", {
        ref: DB,
        className: pB()("GreenvilleLevelUpReveal", {
          Plain: null === QB
        }),
        style: {
          "--reveal-ms": `${oB}ms`
        },
        role: "status",
        children: [null !== QB && (0, SB.jsx)("div", {
          className: "GreenvilleLevelUpRevealStage",
          "aria-hidden": "true",
          children: (0, SB.jsxs)("div", {
            className: "GreenvilleLevelUpRevealMover",
            children: [(0, SB.jsx)("div", {
              className: "GreenvilleLevelUpRevealRays"
            }), (0, SB.jsx)("div", {
              className: "GreenvilleLevelUpRevealGlow"
            }), (0, SB.jsx)("div", {
              className: "GreenvilleLevelUpRevealSparks",
              children: qY.map(((BB, OB) => (0, SB.jsx)("span", {
                style: BB
              }, OB)))
            }), (0, SB.jsx)("div", {
              className: "GreenvilleLevelUpRevealIcon",
              children: (0, SB.jsx)(NB.c, {
                itemName: QB.item,
                amount: 0
              })
            })]
          })
        }), (0, SB.jsxs)("div", {
          className: "GreenvilleLevelUpRevealText",
          children: [null !== QB && (0, SB.jsxs)(SB.Fragment, {
            children: [(0, SB.jsx)("span", {
              className: "GreenvilleLevelUpRevealHeading SmallTextBold",
              children: YB("greenvilleGame:levelUpUnlockHeading", {
                job: yB,
                level: QB.level
              })
            }), (0, SB.jsx)("span", {
              className: "GreenvilleLevelUpRevealName FullyFancyText",
              children: YB(QB.nameKey)
            })]
          }), null === QB && (0, SB.jsxs)(SB.Fragment, {
            children: [(0, SB.jsx)("span", {
              className: "GreenvilleLevelUpRevealHeading SmallTextBold",
              children: YB("greenvilleGame:levelUpHeading")
            }), (0, SB.jsx)("span", {
              className: "GreenvilleLevelUpRevealName FullyFancyText",
              children: YB("greenvilleGame:jobLevel", {
                job: yB,
                level: OB.level
              })
            })]
          })]
        })]
      })
    }
    const RY = "greenvilleMarketView";

    function WY(BB) {
      return BB.map((BB => {
        let [OB, GB, YB, DB, QB, oB] = BB;
        return {
          key: `${OB}|${GB}|${YB}|${DB}|${QB}`,
          icon: OB,
          target: [GB, YB, DB],
          item: QB,
          label: oB
        }
      }))
    }
    class AY {
      constructor(BB) {
        this.tM = BB, this.view = null
      }
      getView() {
        return this.view
      }
      nP(BB) {
        const OB = performance.now();
        switch (BB[0]) {
          case "hide":
            this.view = null;
            break;
          case "marketIdle":
            this.view = {
              job: null,
              waypoints: WY(BB[1])
            };
            break;
          case "marketPick":
          case "marketStock": {
            const [GB, YB, DB, QB] = BB;
            this.view = {
              job: {
                kind: GB,
                goods: YB,
                tipEndsAt: QB > 0 ? OB + QB : 0
              },
              waypoints: WY(DB)
            };
            break
          }
          case "marketDeliver": {
            const [GB, YB, DB, QB, oB, jB] = BB;
            this.view = {
              job: {
                kind: GB,
                parcelsLeft: YB,
                delivered: DB,
                gold: QB,
                endsAt: OB + jB
              },
              waypoints: WY(oB)
            };
            break
          }
        }
        this.tM(this.view)
      }
    }
    var VY = GB(40167);
    const SY = [{
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

    function nY(BB) {
      var OB;
      let {
        controller: GB
      } = BB;
      (0, RB.i)(RY, null);
      const YB = null === (OB = GB.getView()) || void 0 === OB ? void 0 : OB.job;
      return "marketDeliver" !== (null === YB || void 0 === YB ? void 0 : YB.kind) ? null : (0, SB.jsx)(UY, {
        endsAt: YB.endsAt,
        delivered: YB.delivered
      })
    }

    function UY(BB) {
      let {
        endsAt: OB,
        delivered: GB
      } = BB;
      const {
        t: YB
      } = (0, AB.H)(), DB = Math.max(0, Math.ceil((0, VY.i)(OB))), QB = (0, jB.useRef)(null), oB = (0, jB.useRef)(null), yB = (0, jB.useRef)({
        endsAt: OB,
        delivered: GB
      }), [JB, MB] = (0, jB.useState)(null);
      (0, jB.useLayoutEffect)((() => {
        const BB = GB > yB.current.delivered ? Math.round((OB - yB.current.endsAt) / 1e3) : 0;
        var YB;
        (yB.current = {
          endsAt: OB,
          delivered: GB
        }, BB <= 0) || (MB((OB => {
          var GB;
          return {
            seconds: BB,
            token: (null !== (GB = null === OB || void 0 === OB ? void 0 : OB.token) && void 0 !== GB ? GB : 0) + 1
          }
        })), window.matchMedia("(prefers-reduced-motion: reduce)").matches || (null === (YB = oB.current) || void 0 === YB || YB.cancel(), oB.current = QB.current.animate(SY, {
          duration: 420,
          easing: "ease-out"
        })))
      }), [OB, GB]), (0, jB.useEffect)((() => () => {
        var BB;
        null === (BB = oB.current) || void 0 === BB || BB.cancel()
      }), []);
      const PB = Math.floor(DB / 60);
      return (0, SB.jsxs)("div", {
        className: pB()("GreenvilleMarketCountdown", {
          Urgent: DB < 10
        }),
        role: "timer",
        children: [(0, SB.jsxs)("div", {
          ref: QB,
          className: "GreenvilleMarketCountdownTime FullyFancyText",
          children: [PB, ":", String(DB % 60).padStart(2, "0")]
        }), null !== JB && (0, SB.jsx)("div", {
          className: "GreenvilleMarketCountdownAdded FullyFancyText",
          onAnimationEnd: () => {
            MB(null)
          },
          children: YB("greenvilleGame:marketCountdownAdded", {
            seconds: JB.seconds
          })
        }, JB.token)]
      })
    }

    function fY(BB) {
      var OB;
      let {
        controller: GB
      } = BB;
      (0, RB.i)(RY, null);
      const YB = null === (OB = GB.getView()) || void 0 === OB ? void 0 : OB.job;
      return YB ? (0, SB.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: ["marketDeliver" === YB.kind && (0, SB.jsx)(KY, {
          shift: YB
        }), "marketDeliver" !== YB.kind && (0, SB.jsx)(kY, {
          task: YB
        })]
      }) : null
    }

    function kY(BB) {
      let {
        task: OB
      } = BB;
      const {
        t: GB
      } = (0, AB.H)(), YB = "marketPick" === OB.kind && OB.goods.every((BB => {
        let [, OB] = BB;
        return 0 === OB
      }));
      return (0, SB.jsxs)(SB.Fragment, {
        children: [(0, SB.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: GB("marketPick" === OB.kind ? "greenvilleGame:marketPanelOrder" : "greenvilleGame:marketPanelCrate")
        }), (0, SB.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: OB.goods.map((BB => {
            let [OB, YB, DB] = BB;
            return (0, SB.jsxs)("li", {
              className: pB()("GreenvilleTrackerRow", {
                Done: 0 === YB
              }),
              children: [(0, SB.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, SB.jsx)(NB.c, {
                  itemName: OB,
                  amount: 0
                })
              }), (0, SB.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: (0, rG.g)(GB, OB)
              }), (0, SB.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [DB - YB, "/", DB]
              })]
            }, OB)
          }))
        }), YB && (0, SB.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: GB("greenvilleGame:marketPanelReturn")
        }), !YB && 0 !== OB.tipEndsAt && (0, SB.jsx)(dY, {
          endsAt: OB.tipEndsAt
        })]
      })
    }

    function dY(BB) {
      let {
        endsAt: OB
      } = BB;
      const {
        t: GB
      } = (0, AB.H)(), YB = Math.ceil((0, VY.i)(OB));
      return YB <= 0 ? null : (0, SB.jsx)("div", {
        className: "GreenvilleTrackerTip",
        children: GB("greenvilleGame:marketPanelTip", {
          seconds: YB
        })
      })
    }

    function KY(BB) {
      let {
        shift: OB
      } = BB;
      const {
        t: GB
      } = (0, AB.H)();
      return (0, SB.jsxs)(SB.Fragment, {
        children: [(0, SB.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: GB("greenvilleGame:marketPanelDeliveries")
        }), (0, SB.jsxs)("ul", {
          className: "GreenvilleTrackerRows",
          children: [(0, SB.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, SB.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: GB("greenvilleGame:marketPanelParcels")
            }), (0, SB.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: OB.parcelsLeft
            })]
          }), (0, SB.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, SB.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: GB("greenvilleGame:marketPanelDelivered")
            }), (0, SB.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: OB.delivered
            })]
          }), (0, SB.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, SB.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: GB("greenvilleGame:marketPanelEarned")
            }), (0, SB.jsx)("span", {
              className: "GreenvilleTrackerIcon",
              "aria-hidden": "true",
              children: (0, SB.jsx)(NB.c, {
                itemName: "Gold Coin",
                amount: 0
              })
            }), (0, SB.jsx)("span", {
              className: "GreenvilleTrackerValue Gold",
              children: (0, LB.g)(OB.gold)
            })]
          })]
        }), 0 === OB.parcelsLeft && (0, SB.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: GB("greenvilleGame:marketPanelBackToBay")
        })]
      })
    }
    const uY = {
      marketNpc: "comment-dots",
      marketShelf: "cart-shopping",
      marketHouse: "house",
      marketDepot: "truck"
    };

    function mY(BB) {
      var OB;
      let {
        market: GB,
        markers: YB
      } = BB;
      (0, RB.i)(RY, null);
      const DB = null === (OB = GB.getView()) || void 0 === OB ? void 0 : OB.waypoints;
      return null !== DB && void 0 !== DB && DB.length ? (0, SB.jsx)("div", {
        className: "GreenvilleMarketWaypoints",
        children: DB.map((BB => (0, SB.jsx)(IY, {
          waypoint: BB,
          bind: YB.waypoints.bindMarker(BB.key)
        }, BB.key)))
      }) : null
    }

    function IY(BB) {
      let {
        waypoint: {
          icon: OB,
          item: GB,
          label: YB
        },
        bind: DB
      } = BB;
      const QB = "marketHouse" === OB;
      return (0, SB.jsxs)("div", {
        ref: DB,
        className: pB()("GreenvilleMarketWaypoint", {
          House: QB
        }),
        children: [QB && (0, SB.jsx)(FY, {}), (0, SB.jsxs)("div", {
          className: "GreenvilleMarketWaypointBadge",
          children: [null !== GB && (0, SB.jsx)("span", {
            className: "GreenvilleMarketWaypointItem",
            children: (0, SB.jsx)(NB.c, {
              itemName: GB,
              amount: 0
            })
          }), null === GB && (0, SB.jsx)(xB.b, {
            name: uY[OB]
          })]
        }), (0, SB.jsxs)("div", {
          className: "GreenvilleMarketWaypointLabels",
          children: [null !== YB && (0, SB.jsx)("span", {
            className: "GreenvilleMarketWaypointLabel SmallTextBold",
            children: YB
          }), (0, SB.jsx)("span", {
            className: "GreenvilleMarketWaypointDistance SmallTextBold"
          })]
        })]
      })
    }

    function FY() {
      const BB = (0, jB.useRef)(null);
      return (0, RG.b)(BB), (0, SB.jsx)("span", {
        ref: BB,
        className: "GreenvilleMarketWaypointPulse"
      })
    }
    var iY = GB(40172);
    class LY {
      constructor(BB) {
        this.market = BB, this.waypoints = new iY.e({
          labels: "GreenvilleMarketWaypointLabels",
          distance: "GreenvilleMarketWaypointDistance"
        }, "greenvilleGame:marketDistance")
      }
      frame(BB, OB) {
        this.waypoints.setRender(BB);
        const GB = this.market.getView();
        if (GB && this.waypoints.hasMarkers())
          for (const {
              key: YB,
              target: DB
            }
            of GB.waypoints) this.waypoints.update(YB, DB[0], DB[1] + 1, DB[2], OB)
      }
    }
    const gY = {
      Street: "St",
      Avenue: "Ave",
      Road: "Rd",
      Lane: "Ln"
    };

    function rY(BB, OB) {
      return OB.map(((OB, GB) => {
        const YB = OB.lastIndexOf(" "),
          DB = OB.slice(YB + 1);
        let QB = gY[DB];
        return void 0 === QB && (console.warn(`Greenville street "${OB}" has no suffix abbreviation`), QB = DB), {
          axis: BB,
          line: GB,
          name: OB,
          shortName: OB.slice(0, YB),
          suffix: QB
        }
      }))
    }
    const XY = {
        eastWest: rY("eastWest", ["Hillcrest Road", "Oak Street", "Main Street", "Elm Street", "Harbour Road"]),
        northSouth: rY("northSouth", ["Willow Lane", "Birch Avenue", "Market Street", "Maple Avenue", "Station Road"])
      },
      wY = {
        kind: "outside"
      };

    function EY(BB, OB, GB) {
      return 100 * (BB + 1) + OB + (GB ? 1 : 0)
    }

    function cY(BB, OB, GB, YB) {
      return {
        x0: HG + BB,
        z0: HG + OB,
        x1: HG + BB + GB - 1,
        z1: HG + OB + YB - 1
      }
    }
    let hY = null;

    function aY(BB, OB, GB, YB) {
      if (YB && "outside" !== YB.kind) {
        const {
          box: GB
        } = YB;
        if (!tG(GB, BB, OB) && tG({
            x0: GB.x0 - 2,
            z0: GB.z0 - 2,
            x1: GB.x1 + 2,
            z1: GB.z1 + 2
          }, BB, OB)) return YB
      }
      return function(BB, OB, GB) {
        const {
          eastWest: YB,
          northSouth: DB
        } = XY;
        switch (BB.kind) {
          case "outside":
            return wY;
          case "street": {
            const OB = BB.segment * sG + vG,
              GB = BB.line * sG;
            return {
              kind: "street",
              box: "eastWest" === BB.axis ? cY(OB, GB, sG - vG, vG) : cY(GB, OB, vG, sG - vG),
              street: XY[BB.axis][BB.line],
              block: 100 * (BB.segment + 1)
            }
          }
          case "junction": {
            const QB = cY(BB.column * sG, BB.row * sG, vG, vG),
              oB = [YB[BB.row], DB[BB.column]],
              jB = "street" === (null === GB || void 0 === GB ? void 0 : GB.kind) ? GB.street : "junction" === (null === GB || void 0 === GB ? void 0 : GB.kind) ? GB.along : null,
              yB = jB && oB.includes(jB) ? jB : Math.abs(Math.sin(OB)) > Math.abs(Math.cos(OB)) ? oB[0] : oB[1];
            return {
              kind: "junction",
              box: QB,
              along: yB,
              cross: yB === oB[0] ? oB[1] : oB[0]
            }
          }
          case "plot": {
            const OB = BB.column * sG + vG + BB.dx * vG,
              GB = BB.row * sG + vG + BB.dz * vG,
              DB = 0 === BB.dz;
            return {
              kind: "plot",
              box: cY(OB, GB, vG, vG),
              plotId: (QB = (HG + OB) / vG, oB = (HG + GB) / vG, hY || (hY = new Map(YY().map(((BB, OB) => {
                let {
                  chunk: GB
                } = BB;
                return [`${GB[0]},${GB[2]}`, OB + 1]
              })))), hY.get(`${QB},${oB}`)),
              number: EY(BB.column, 0 === BB.dx ? 30 : 70, DB),
              street: YB[DB ? BB.row : BB.row + 1],
              neighbourhood: BB.neighbourhood
            }
          }
          case "tile": {
            const {
              column: OB,
              row: GB,
              district: DB
            } = BB;
            return {
              kind: "tile",
              box: cY(OB * sG + vG, GB * sG + vG, sG - vG, sG - vG),
              district: DB,
              number: EY(OB, 50, !0),
              street: YB[GB]
            }
          }
        }
        var QB, oB
      }(function(BB, OB) {
        const GB = BB - HG,
          YB = OB - HG;
        if (GB < 0 || YB < 0 || GB >= xG || YB >= xG) return {
          kind: "outside"
        };
        const DB = Math.floor(GB / sG),
          QB = Math.floor(YB / sG),
          oB = GB - DB * sG - vG,
          jB = YB - QB * sG - vG;
        if (oB < 0 && jB < 0) return {
          kind: "junction",
          column: DB,
          row: QB
        };
        if (jB < 0) return {
          kind: "street",
          axis: "eastWest",
          line: QB,
          segment: DB
        };
        if (oB < 0) return {
          kind: "street",
          axis: "northSouth",
          line: DB,
          segment: QB
        };
        const yB = BY[QB][DB];
        return "residential" === yB.kind ? {
          kind: "plot",
          column: DB,
          row: QB,
          dx: Math.floor(oB / vG),
          dz: Math.floor(jB / vG),
          neighbourhood: yB.name
        } : {
          kind: "tile",
          column: DB,
          row: QB,
          district: yB.district
        }
      }(BB, OB), GB, YB)
    }

    function eY(BB) {
      switch (BB.kind) {
        case "outside":
          return "outside";
        case "junction":
          return `junction|${BB.along.name}|${BB.cross.name}`;
        case "plot":
        case "tile":
          return `${BB.kind}|${BB.number}|${BB.street.name}`;
        case "street":
          return `street|${BB.block}|${BB.street.name}`
      }
    }
    var TY = GB(40197),
      bY = GB(40190),
      CY = GB(244);
    const HY = TG.f.pP;
    class vY {
      constructor(BB, OB, GB) {
        this.api = BB, this.map = OB, this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.image = this.context.createImageData(HY, HY), this.columns = void 0, this.lowestLayer = void 0, this.layers = void 0, this.plots = void 0, this.baked = null, this.Vp = !1, this.ids = new Uint16Array(HY * HY), this.tops = new Int32Array(HY * HY), this.edgeIds = new Uint16Array(HY), this.edgeTops = new Int32Array(HY), this.heights = void 0, this.versions = void 0, this.current = void 0, this.stale = void 0, this.painted = void 0, this.order = [], this.focus = {
          column: -1,
          row: -1
        }, this.colours = null, this.host = null, this.timer = null, this.cancelIdle = null, this.pass = BB => {
          this.cancelIdle = null;
          let OB = !1;
          const GB = performance.now();
          let YB = !0;
          if (this.colours && this.host && this.host.clientWidth > 0)
            for (const DB of this.order) {
              if (!this.readVersions(DB)) continue;
              const QB = !BB.didTimeout && BB.timeRemaining() < 2;
              if (!YB && (QB || performance.now() - GB > 6)) {
                OB = !0;
                break
              }
              YB = !1, this.versions.set(this.current, DB * this.layers), this.paint(DB % this.columns, Math.floor(DB / this.columns), this.colours.lookup, this.colours.drawn)
            }
          this.schedule(OB ? 0 : 500)
        };
        const {
          origin: YB,
          size: DB,
          XD: QB,
          wD: oB
        } = OB.area;
        this.columns = DB / HY, this.lowestLayer = QB / HY, this.layers = (oB - QB) / HY, this.plots = new Set(GB.map((BB => {
          let {
            chunkX: OB,
            chunkZ: GB
          } = BB;
          return GB * this.columns + OB
        }))), this.heights = new Int32Array(DB * DB).fill(TY.e), this.versions = new Float64Array(this.columns * this.columns * this.layers).fill(NaN), this.current = new Float64Array(this.layers), this.stale = new Uint8Array(this.columns * this.columns), this.painted = new Uint8Array(this.columns * this.columns), this.canvas.width = DB, this.canvas.height = DB, this.canvas.className = "GreenvilleNavMapTerrain", 0 !== GB.length ? (this.focusOn(YB + DB / 2, YB + DB / 2), Promise.all([(0, bY.e)(), this.drawBakedMap()]).then((BB => {
          let [OB] = BB;
          this.colours = {
            lookup: OB,
            drawn: OB.getDrawnIds()
          }
        }), (BB => {
          console.error("Greenville map: block colours failed to load", BB)
        })), this.schedule(0)) : this.drawBakedMap()
      }
      mount(BB) {
        this.host = BB, null === BB || void 0 === BB || BB.replaceChildren(this.canvas)
      }
      focusOn(BB, OB) {
        const {
          columns: GB
        } = this, {
          origin: YB
        } = this.map.area, DB = Math.min(GB - 1, Math.max(0, Math.floor((BB - YB) / HY))), QB = Math.min(GB - 1, Math.max(0, Math.floor((OB - YB) / HY)));
        DB === this.focus.column && QB === this.focus.row || (this.focus = {
          column: DB,
          row: QB
        }, this.order = [...this.plots].sort(((BB, OB) => Math.hypot(BB % GB - DB, Math.floor(BB / GB) - QB) - Math.hypot(OB % GB - DB, Math.floor(OB / GB) - QB))))
      }
      forget(BB, OB) {
        const GB = OB * this.columns + BB;
        this.stale[GB] = 1, this.versions.fill(NaN, GB * this.layers, (GB + 1) * this.layers)
      }
      dispose() {
        var BB, OB;
        null !== this.timer && clearTimeout(this.timer), null === (BB = this.cancelIdle) || void 0 === BB || BB.call(this), this.host = null, this.Vp = !0, null === (OB = this.baked) || void 0 === OB || OB.close(), this.baked = null
      }
      async drawBakedMap() {
        try {
          const BB = await fetch(this.map.imageUrl);
          if (!BB.ok) throw new Error(`HTTP ${BB.status}`);
          const OB = await createImageBitmap(await BB.blob(), {
            colorSpaceConversion: "none"
          });
          if (this.Vp) return void OB.close();
          this.baked = OB, this.context.drawImage(OB, 0, 0)
        } catch (BB) {
          console.error("Greenville map: the baked map failed to load", BB)
        }
      }
      schedule(BB) {
        this.timer = setTimeout((() => {
          this.timer = null, this.cancelIdle = (0, CY.b)(this.pass, {
            timeoutMs: 1e3
          })
        }), BB)
      }
      readVersions(BB) {
        const {
          origin: OB
        } = this.map.area, GB = OB / HY + BB % this.columns, YB = OB / HY + Math.floor(BB / this.columns);
        let DB = !1;
        for (let oB = 0; oB < this.layers; oB++) {
          var QB;
          const OB = null !== (QB = this.api.getChunkVersion(GB, this.lowestLayer + oB, YB)) && void 0 !== QB ? QB : 0;
          this.current[oB] = OB, DB ||= OB !== this.versions[BB * this.layers + oB]
        }
        return DB
      }
      repaintIfPainted(BB, OB) {
        const GB = OB * this.columns + BB;
        BB < this.columns && OB < this.columns && 1 === this.painted[GB] && this.versions.fill(NaN, GB * this.layers, (GB + 1) * this.layers)
      }
      storeHeights(BB, OB) {
        const {
          size: GB
        } = this.map.area;
        let YB = !1,
          DB = !1;
        for (let QB = 0; QB < this.ids.length; QB++) {
          const oB = QB % HY,
            jB = Math.floor(QB / HY),
            yB = (OB * HY + jB) * GB + BB * HY + oB,
            JB = 0 === this.ids[QB] ? TY.e : this.tops[QB];
          this.heights[yB] !== JB && (YB ||= oB === HY - 1, DB ||= jB === HY - 1, this.heights[yB] = JB)
        }
        YB && this.repaintIfPainted(BB + 1, OB), DB && this.repaintIfPainted(BB, OB + 1)
      }
      readEdgeHeights(BB, OB, GB, YB, DB) {
        const {
          origin: QB,
          size: oB,
          XD: jB,
          wD: yB
        } = this.map.area;
        this.api.readColumnTops(BB, OB, GB, YB, jB, yB, DB, this.edgeIds, this.edgeTops);
        const JB = GB - BB;
        for (let MB = 0; MB < HY; MB++) {
          const GB = (OB - QB + Math.floor(MB / JB)) * oB + BB - QB + MB % JB;
          this.heights[GB] = 0 === this.edgeIds[MB] ? TY.e : this.edgeTops[MB]
        }
      }
      paint(BB, OB, GB, YB) {
        const {
          origin: DB,
          size: QB,
          XD: oB,
          wD: jB
        } = this.map.area, yB = OB * this.columns + BB, JB = 1 === this.stale[yB];
        this.stale[yB] = 0;
        const MB = DB + BB * HY,
          PB = DB + OB * HY,
          zB = QB - (BB + 1) * HY,
          {
            ids: lB,
            tops: pB,
            heights: qB
          } = this;
        if (0 === this.current[0 - this.lowestLayer]) return void(JB && (this.context.clearRect(zB, OB * HY, HY, HY), this.baked && this.context.drawImage(this.baked, zB, OB * HY, HY, HY, zB, OB * HY, HY, HY), lB.fill(0), this.storeHeights(BB, OB)));
        this.painted[yB] = 1, this.api.readColumnTops(MB, PB, MB + HY, PB + HY, oB, jB, YB, lB, pB), this.storeHeights(BB, OB), this.plots.has(yB - 1) || this.readEdgeHeights(MB - 1, PB, MB, PB + HY, YB), this.plots.has(yB - this.columns) || this.readEdgeHeights(MB, PB - 1, MB + HY, PB, YB);
        const ZB = this.image.data;
        for (let NB = 0; NB < HY; NB++)
          for (let YB = 0; YB < HY; YB++) {
            const DB = 4 * (NB * HY + HY - 1 - YB),
              oB = lB[NB * HY + YB];
            if (0 === oB) {
              ZB[DB + 3] = 0;
              continue
            }
            const jB = BB * HY + YB,
              yB = OB * HY + NB;
            GB.drawPixel(ZB, DB, oB, pB[NB * HY + YB], qB[(yB - 1) * QB + jB], qB[yB * QB + jB - 1])
          }
        this.context.putImageData(this.image, zB, OB * HY)
      }
    }
    const sY = "greenvilleNavAddress",
      xY = "greenvilleNavPlots",
      tY = "greenvilleNavMarkers",
      BD = 5 * Math.PI / 180,
      OD = {
        kind: "outside"
      };
    class GD {
      constructor(BB, OB, GB, YB) {
        this.map = BB, this.publishAddress = OB, this.publishPlots = GB, this.publishMarkers = YB, this.address = OD, this.addressKey = eY(OD), this.block = {
          x: NaN,
          z: NaN
        }, this.plots = void 0, this.markers = [], this.terrain = null, this.mP = null, this.worldResize = null, this.worldPx = 0, this.arrowTrack = null, this.arrow = null, this.zoom = 0, this.lastFrameMs = NaN, this.written = {
          u: NaN,
          v: NaN,
          scale: NaN,
          heading: NaN
        }, this.reducedMotion = null, this.logLocalScale = void 0, this.mountTerrain = BB => {
          this.terrain.mount(BB)
        }, this.mountWorld = BB => {
          var OB;
          this.mP = BB, this.written = {
            u: NaN,
            v: NaN,
            scale: NaN,
            heading: NaN
          }, null === (OB = this.worldResize) || void 0 === OB || OB.disconnect(), this.worldResize = null, BB && (this.worldResize = new ResizeObserver((BB => {
            let [OB] = BB;
            this.worldPx = OB.contentRect.width, this.written.u = NaN
          })), this.worldResize.observe(BB))
        }, this.mountArrow = BB => {
          var OB;
          this.arrowTrack = BB, this.arrow = null !== (OB = null === BB || void 0 === BB ? void 0 : BB.firstElementChild) && void 0 !== OB ? OB : null, this.written = {
            u: NaN,
            v: NaN,
            scale: NaN,
            heading: NaN
          }
        };
        const {
          origin: DB,
          size: QB
        } = BB.area;
        this.logLocalScale = Math.log(QB / 80), this.plots = {
          plots: (BB.city ? YY() : []).map(((BB, OB) => {
            let {
              chunk: GB,
              facing: YB
            } = BB;
            return {
              plotId: OB + 1,
              chunkX: GB[0] - DB / TG.f.pP,
              chunkZ: GB[2] - DB / TG.f.pP,
              facing: YB,
              state: "vacant",
              mine: !1
            }
          })),
          animate: !1
        }
      }
      start(BB) {
        this.terrain = new vY(BB, this.map, this.plots.plots)
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
      nP(BB) {
        const OB = [...this.plots.plots];
        for (const [YB, DB, QB] of "plotsAll" === BB[0] ? BB[1] : [BB[1]]) {
          const BB = OB[YB - 1];
          var GB;
          if (BB.state === DB && BB.mine === QB || (OB[YB - 1] = {
              ...BB,
              state: DB,
              mine: QB
            }), BB.state !== DB) null === (GB = this.terrain) || void 0 === GB || GB.forget(BB.chunkX, BB.chunkZ)
        }
        this.plots = {
          plots: OB,
          animate: "plotsOne" === BB[0]
        }, this.publishPlots(this.plots)
      }
      receiveMarkers(BB) {
        this.markers = BB.map((BB => {
          const [OB, GB] = [this.toMapUnits(BB[2]), this.toMapUnits(BB[3])];
          return "mapPlace" === BB[0] ? {
            kind: "place",
            place: BB[1],
            x: OB,
            z: GB
          } : {
            kind: "npc",
            face: null === BB[1] ? "npc" : `npc_${BB[1]}`,
            x: OB,
            z: GB
          }
        })), this.publishMarkers(this.markers)
      }
      frame(BB, OB, GB) {
        if (!OB) return;
        const YB = Math.floor(OB[0]),
          DB = Math.floor(OB[2]);
        if (YB !== this.block.x || DB !== this.block.z) {
          this.block = {
            x: YB,
            z: DB
          }, this.terrain.focusOn(YB, DB), this.address = aY(YB, DB, BB.cameraHeading, this.address);
          const OB = eY(this.address);
          OB !== this.addressKey && (this.addressKey = OB, this.publishAddress(this.address))
        }
        const QB = performance.now(),
          oB = function(BB, OB, GB) {
            return BB && (GB || "plot" !== OB.kind && "tile" !== OB.kind) ? 0 : 1
          }(this.map.city, this.address, GB);
        if (this.zoom !== oB) {
          this.reducedMotion ??= window.matchMedia("(prefers-reduced-motion: reduce)");
          const BB = this.reducedMotion.matches ? 1 : 1 - Math.exp(-(QB - this.lastFrameMs) / 150);
          this.zoom += (oB - this.zoom) * (Number.isNaN(BB) ? 1 : BB), Math.abs(oB - this.zoom) < .002 && (this.zoom = oB)
        }
        this.lastFrameMs = QB, this.isMapShown() && this.writeView(OB[0], OB[2], BB.cameraHeading)
      }
      toMapUnits(BB) {
        return (BB - this.map.area.origin) / TG.f.pP
      }
      writeView(BB, OB, GB) {
        const {
          mP: YB,
          arrowTrack: DB,
          arrow: QB,
          written: oB
        } = this;
        if (!YB || !DB || !QB) return;
        const {
          origin: jB,
          size: yB
        } = this.map.area, JB = (jB + yB - BB) / yB, MB = (OB - jB) / yB, PB = Math.exp(this.zoom * this.logLocalScale), zB = Math.abs(Math.atan2(Math.sin(GB - oB.heading), Math.cos(GB - oB.heading))), lB = PB !== oB.scale, pB = !(Math.hypot(JB - oB.u, MB - oB.v) * this.worldPx * PB < 1);
        if (lB || pB || !(zB < BD)) {
          if (lB || pB) {
            this.written.u = JB, this.written.v = MB;
            const BB = JB + (.5 - JB) * this.zoom - JB * PB,
              OB = MB + (.5 - MB) * this.zoom - MB * PB;
            YB.style.transform = `translate(${100*BB}%, ${100*OB}%) scale(${PB})`, DB.style.transform = `translate(${100*JB}%, ${100*MB}%)`
          }(lB || zB >= BD) && (QB.style.transform = `translate(-50%, -50%) scale(${1/PB}) rotate(${180+180*GB/Math.PI}deg)`, this.written.heading = GB), lB && (YB.style.setProperty("--greenville-map-unzoom", String(1 / PB)), YB.style.setProperty("--greenville-map-zoom", String(this.zoom)), this.written.scale = PB)
        }
      }
    }
    var YD = GB(39235);
    const DD = xG / TG.f.pP,
      QD = `matrix(-1 0 0 1 ${DD} 0)`,
      oD = .08,
      jD = [{
        transform: "scaleY(0)"
      }, {
        transform: "scaleY(1)"
      }],
      yD = [{
        opacity: 1
      }, {
        opacity: 0
      }],
      JD = {
        quarry: DY.mining,
        industry: DY.demolition,
        market: DY.market,
        lumberMill: DY.woodcutting,
        farm: DY.farming,
        dealership: "Light Blue Car"
      },
      MD = {
        drillBay: DY.mining,
        vanBay: "Yellow Kart",
        carPickup: "Light Blue Car",
        demolitionPit: DY.demolition,
        farmField: DY.farming,
        woods: DY.woodcutting
      },
      PD = BY.flatMap(((BB, OB) => BB.flatMap(((BB, GB) => "residential" === BB.kind ? [] : [{
        tile: BB,
        x: 1 + 3 * GB,
        z: 1 + 3 * OB
      }])))),
      zD = [...XY.eastWest, ...XY.northSouth];

    function lD(BB, OB) {
      return {
        left: (DD - BB) / DD * 100 + "%",
        top: OB / DD * 100 + "%"
      }
    }

    function pD(BB) {
      let {
        axis: OB,
        line: GB
      } = BB;
      const YB = .3,
        DB = 3 * GB + YB,
        QB = DD - .6;
      return "eastWest" === OB ? {
        x: YB,
        y: DB,
        width: QB,
        height: .4
      } : {
        x: DB,
        y: YB,
        width: .4,
        height: QB
      }
    }

    function qD(BB) {
      let {
        controller: OB
      } = BB;
      (0, RB.i)(xY, null);
      const {
        plots: GB,
        animate: YB
      } = OB.getPlots(), {
        city: DB
      } = OB.map;
      return (0, SB.jsx)("div", {
        className: "GreenvilleNavMap",
        children: (0, SB.jsxs)("div", {
          className: "GreenvilleNavMapWorld",
          ref: OB.mountWorld,
          children: [DB && (0, SB.jsx)("svg", {
            className: "GreenvilleNavMapPlan",
            viewBox: `0 0 ${DD} ${DD}`,
            preserveAspectRatio: "none",
            shapeRendering: "crispEdges",
            children: (0, SB.jsxs)("g", {
              transform: QD,
              children: [(0, SB.jsx)("rect", {
                className: "GreenvilleNavGround",
                width: DD,
                height: DD
              }), zD.map((BB => (0, SB.jsx)("rect", {
                className: "GreenvilleNavRoad",
                ...pD(BB)
              }, BB.name))), PD.map((BB => {
                let {
                  tile: OB,
                  x: GB,
                  z: YB
                } = BB;
                return (0, SB.jsx)("rect", {
                  className: "GreenvilleNavDistrict",
                  "data-district": OB.district,
                  x: GB,
                  y: YB,
                  width: 2,
                  height: 2
                }, OB.district)
              })), GB.map((BB => (0, SB.jsx)(ND, {
                plot: BB,
                animate: YB
              }, BB.plotId)))]
            })
          }), (0, SB.jsx)("div", {
            className: "GreenvilleNavMapTerrainHost",
            ref: OB.mountTerrain
          }), DB && (0, SB.jsxs)(SB.Fragment, {
            children: [(0, SB.jsx)("svg", {
              className: "GreenvilleNavMapLots",
              viewBox: `0 0 ${DD} ${DD}`,
              preserveAspectRatio: "none",
              children: (0, SB.jsx)("g", {
                transform: QD,
                children: GB.map((BB => (0, SB.jsx)("rect", {
                  className: pB()("GreenvilleNavLot", {
                    Vacant: "vacant" === BB.state,
                    Loading: "loading" === BB.state,
                    Mine: BB.mine
                  }),
                  x: BB.chunkX + oD,
                  y: BB.chunkZ + oD,
                  width: .84,
                  height: .84
                }, BB.plotId)))
              })
            }), PD.map((BB => {
              let {
                tile: OB,
                x: GB,
                z: YB
              } = BB;
              const DB = JD[OB.district];
              return DB && (0, SB.jsx)("span", {
                className: "GreenvilleNavPin GreenvilleNavLandmark",
                style: lD(GB + 1, YB + 1),
                children: (0, SB.jsx)(NB.c, {
                  itemName: DB,
                  amount: 0
                })
              }, OB.district)
            })), (0, SB.jsx)(ZD, {
              controller: OB
            })]
          }), (0, SB.jsx)("div", {
            className: "GreenvilleNavArrowTrack",
            ref: OB.mountArrow,
            children: (0, SB.jsx)("div", {
              className: "GreenvilleNavArrow",
              children: (0, SB.jsx)("svg", {
                viewBox: "-1 -1 2 2",
                children: (0, SB.jsx)("polygon", {
                  points: "0,-0.8 0.62,0.62 0,0.28 -0.62,0.62"
                })
              })
            })
          }), GB.map((BB => BB.mine && (0, SB.jsx)("span", {
            className: "GreenvilleNavPin GreenvilleNavHome",
            style: lD(BB.chunkX + .5, BB.chunkZ + ("north" === BB.facing ? 0 : 1)),
            children: (0, SB.jsx)(xB.b, {
              name: "house"
            })
          }, BB.plotId)))]
        })
      })
    }

    function ZD(BB) {
      let {
        controller: OB
      } = BB;
      return (0, RB.i)(tY, null), (0, SB.jsx)(SB.Fragment, {
        children: OB.getMarkers().map(((BB, OB) => (0, SB.jsxs)("span", {
          className: "GreenvilleNavPin GreenvilleNavMarker",
          style: lD(BB.x, BB.z),
          children: ["npc" === BB.kind && (0, SB.jsx)(YD.e, {
            icon: BB.face
          }), "place" === BB.kind && (0, SB.jsx)(NB.c, {
            itemName: MD[BB.place],
            amount: 0
          })]
        }, OB)))
      })
    }
    const ND = (0, jB.memo)((function(BB) {
      let {
        plot: OB,
        animate: GB
      } = BB;
      const YB = (0, jB.useRef)(null),
        DB = (0, jB.useRef)(OB.state),
        QB = (0, jB.useRef)(null);
      return (0, jB.useLayoutEffect)((() => {
        var BB;
        const oB = DB.current;
        DB.current = OB.state, oB !== OB.state && (null === (BB = QB.current) || void 0 === BB || BB.cancel(), GB && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && ("built" === OB.state ? QB.current = YB.current.animate(jD, {
          duration: 300,
          easing: "ease-out"
        }) : "vacant" === OB.state && (QB.current = YB.current.animate(yD, {
          duration: 400,
          easing: "ease-in"
        }))))
      }), [OB.state]), (0, jB.useEffect)((() => () => {
        var BB;
        null === (BB = QB.current) || void 0 === BB || BB.cancel()
      }), []), (0, SB.jsxs)(SB.Fragment, {
        children: [(0, SB.jsx)("rect", {
          className: "GreenvilleNavPlotGrass",
          x: OB.chunkX + oD,
          y: OB.chunkZ + oD,
          width: .84,
          height: .84
        }), (0, SB.jsx)("rect", {
          ref: YB,
          className: pB()("GreenvilleNavPlotRoof", {
            Loading: "loading" === OB.state,
            Built: "built" === OB.state,
            Mine: OB.mine
          }),
          x: OB.chunkX + oD,
          y: OB.chunkZ + oD,
          width: .84,
          height: .84
        })]
      })
    }));

    function RD(BB) {
      let {
        controller: OB
      } = BB;
      const [GB, YB] = (0, jB.useState)((() => OB.isMapShown()));
      (0, RB.f)(sY, (() => {
        YB(OB.isMapShown())
      }));
      const DB = (0, rB.d)(),
        [QB, oB] = (0, jB.useState)(null);
      return function(BB) {
        (0, jB.useLayoutEffect)((() => {
          if (!BB) return;
          const OB = BB.closest(".GreenvilleHudColumnStack"),
            GB = new ResizeObserver((() => {
              BB.offsetWidth > 0 && OB.style.setProperty("--greenville-map-width", `${BB.offsetWidth}px`)
            }));
          return GB.observe(BB), () => {
            GB.disconnect()
          }
        }), [BB])
      }(QB), (0, SB.jsx)("div", {
        className: pB()("GreenvilleNavRoom", {
          Hidden: DB || !GB
        }),
        children: (0, SB.jsx)("div", {
          ref: oB,
          className: "GreenvilleNav",
          children: (0, SB.jsx)(qD, {
            controller: OB
          })
        })
      })
    }
    const WD = TG.f.pP,
      AD = {
        origin: HG,
        size: xG,
        XD: -2 * WD,
        wD: 4 * WD
      },
      VD = {
        origin: 1562 * WD,
        size: 13 * WD,
        XD: 0,
        wD: 5 * WD
      },
      SD = GB.p + "static/media/greenvilleCity.7b141fefdb213c21b37a.png",
      nD = GB.p + "static/media/greenvilleGrove.71253c8c4ae6c9cacba5.png",
      UD = {
        area: AD,
        imageUrl: SD,
        city: !0
      },
      fD = {
        area: VD,
        imageUrl: nD,
        city: !1
      };

    function kD(BB) {
      return BB >= 75 ? "face-smile" : BB >= 50 ? "face-diagonal-mouth" : BB >= 25 ? "face-worried" : "face-dizzy"
    }

    function dD(BB) {
      const OB = Math.round(BB);
      return `${OB>0?"+":""}${OB}%`
    }

    function KD(BB) {
      let {
        controller: OB
      } = BB;
      (0, RB.i)(EG, null);
      const GB = OB.getMood();
      return GB ? (0, SB.jsx)(ZB.e, {
        placement: "statBars",
        children: (0, SB.jsx)(uD, {
          mood: GB
        })
      }) : null
    }

    function uD(BB) {
      let {
        mood: OB
      } = BB;
      const {
        t: GB
      } = (0, AB.H)(), YB = function(BB) {
        const [, OB] = (0, jB.useState)(0);
        return (0, jB.useEffect)((() => {
          const GB = BB - performance.now();
          if (GB <= 0) return;
          const YB = window.setTimeout((() => {
            OB((BB => BB + 1))
          }), GB);
          return () => {
            window.clearTimeout(YB)
          }
        }), [BB]), BB > performance.now()
      }(OB.restedEndsAt), {
        energy: DB,
        breakEvenEnergy: QB,
        luckPercent: oB
      } = OB, yB = null !== oB && void 0 !== oB ? oB : OB.earningsPercent;
      return (0, SB.jsxs)("div", {
        className: pB()("GreenvilleMoodChip", {
          Exhausted: DB < 25,
          Rested: YB,
          Tired: !YB && DB < QB && DB >= 25,
          Drained: !YB && DB < 25
        }),
        role: "img",
        "aria-label": GB("greenvilleGame:moodEnergyLabel", {
          energy: Math.round(DB)
        }),
        children: [(0, SB.jsx)(xB.b, {
          name: kD(DB),
          className: "GreenvilleMoodChipFace"
        }), YB && (0, SB.jsx)("span", {
          className: "GreenvilleMoodChipZz",
          children: GB("greenvilleGame:moodRestedGlyph")
        }), (0, SB.jsxs)("div", {
          className: "GreenvilleMoodChipMeter",
          style: {
            "--greenville-break-even": `${QB}%`
          },
          children: [(0, SB.jsx)("div", {
            className: "GreenvilleMoodChipBar",
            children: (0, SB.jsx)("div", {
              className: "GreenvilleMoodChipFill",
              style: {
                transform: `scaleX(${Math.min(100,Math.max(0,DB))/100})`
              }
            })
          }), (0, SB.jsx)("div", {
            className: "GreenvilleMoodChipTick"
          })]
        }), null === oB && (0, SB.jsx)("span", {
          className: "GreenvilleMoodChipCoin",
          "aria-hidden": "true",
          children: (0, SB.jsx)(NB.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), (0, SB.jsxs)("span", {
          className: pB()("GreenvilleMoodChipEarnings", {
            Positive: Math.round(yB) > 0,
            Negative: Math.round(yB) < 0
          }),
          children: [null !== oB && (0, SB.jsx)("span", {
            className: "GreenvilleMoodChipLuck",
            children: GB("greenvilleGame:luck")
          }), dD(yB)]
        }), OB.adBoosted && (0, SB.jsx)("span", {
          className: "GreenvilleMoodChipBoost",
          children: (0, SB.jsx)(xB.b, {
            name: "bolt"
          })
        })]
      })
    }

    function mD(BB) {
      let {
        controller: OB
      } = BB;
      (0, RB.i)(wG, null);
      const GB = OB.getPlace();
      return "hudHome" !== (null === GB || void 0 === GB ? void 0 : GB.kind) || null === GB.runStartedAt ? null : (0, SB.jsx)(ID, {
        startedAt: GB.runStartedAt
      })
    }

    function ID(BB) {
      let {
        startedAt: OB
      } = BB;
      const GB = Math.max(0, Math.floor(-(0, VY.i)(OB)));
      return (0, SB.jsx)("div", {
        className: "GreenvilleMarketCountdown",
        role: "timer",
        children: (0, SB.jsxs)("div", {
          className: "GreenvilleMarketCountdownTime FullyFancyText",
          children: [Math.floor(GB / 60), ":", String(GB % 60).padStart(2, "0")]
        })
      })
    }
    const FD = [{
        transform: "translateY(100%)",
        opacity: 0
      }, {
        transform: "translateY(0)",
        opacity: 1
      }],
      iD = [{
        transform: "translateY(-100%)",
        opacity: 0
      }, {
        transform: "translateY(0)",
        opacity: 1
      }];

    function LD(BB) {
      return BB ? `${BB.number}|${BB.street.name}` : ""
    }

    function gD(BB) {
      let {
        address: OB,
        large: GB,
        rootRef: YB
      } = BB;
      const DB = function(BB) {
          switch (BB.kind) {
            case "junction":
              return [{
                street: BB.along,
                number: null
              }, {
                street: BB.cross,
                number: null
              }];
            case "plot":
            case "tile":
              return [{
                street: BB.street,
                number: BB.number
              }, null];
            case "street":
              return [{
                street: BB.street,
                number: BB.block
              }, null]
          }
        }(OB),
        QB = GB && "plot" === OB.kind ? OB.neighbourhood : null,
        oB = (0, jB.useRef)(null),
        yB = (0, jB.useRef)(null),
        JB = (0, jB.useRef)(DB),
        MB = (0, jB.useRef)({
          large: GB,
          top: 0,
          height: 0
        }),
        PB = (0, jB.useRef)([]),
        zB = (0, jB.useRef)(null);
      (0, jB.useLayoutEffect)((() => {
        const BB = JB.current;
        if (JB.current = DB, window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const OB = [];
        if (LD(BB[0]) !== LD(DB[0]) && OB.push(oB.current.animate(FD, {
            duration: 180,
            easing: "ease-out"
          })), DB[1] && !BB[1] && OB.push(yB.current.animate(iD, {
            duration: 220,
            easing: "ease-out"
          })), OB.length > 0) {
          for (const BB of PB.current) BB.cancel();
          PB.current = OB
        }
      }), [LD(DB[0]), LD(DB[1])]), (0, jB.useLayoutEffect)((() => {
        var BB;
        const OB = YB.current,
          DB = MB.current;
        MB.current = {
          large: GB,
          top: OB.offsetTop,
          height: OB.offsetHeight
        }, DB.large === GB || 0 === DB.height || 0 === OB.offsetHeight || window.matchMedia("(prefers-reduced-motion: reduce)").matches || (null === (BB = zB.current) || void 0 === BB || BB.cancel(), zB.current = OB.animate([{
          transform: `translateY(${DB.top-OB.offsetTop}px) scale(${DB.height/OB.offsetHeight})`
        }, {
          transform: "none"
        }], {
          duration: 260,
          easing: "ease-out"
        }))
      }), [GB, QB, LD(DB[0]), LD(DB[1])]), (0, jB.useEffect)((() => {
        const BB = YB.current,
          OB = new ResizeObserver((() => {
            MB.current = {
              ...MB.current,
              top: BB.offsetTop,
              height: BB.offsetHeight
            }
          }));
        return OB.observe(BB.parentElement), () => {
          var BB;
          OB.disconnect();
          for (const OB of PB.current) OB.cancel();
          null === (BB = zB.current) || void 0 === BB || BB.cancel()
        }
      }), [YB]);
      const [lB, qB] = DB;
      return (0, SB.jsxs)("div", {
        ref: YB,
        className: pB()("GreenvilleNavSign", {
          Large: GB
        }),
        children: [(0, SB.jsxs)("div", {
          className: "GreenvilleNavBlade",
          children: [null !== QB && (0, SB.jsx)("span", {
            className: "GreenvilleNavHeader",
            children: QB
          }), (0, SB.jsx)(rD, {
            blade: lB,
            textRef: oB
          })]
        }), qB && (0, SB.jsx)("div", {
          ref: yB,
          className: "GreenvilleNavBlade",
          children: (0, SB.jsx)(rD, {
            blade: qB
          })
        })]
      })
    }

    function rD(BB) {
      let {
        blade: OB,
        textRef: GB
      } = BB;
      return (0, SB.jsxs)("span", {
        ref: GB,
        className: "GreenvilleNavBladeText",
        children: [null !== OB.number && (0, SB.jsx)("span", {
          className: "GreenvilleNavNumber",
          children: OB.number
        }), (0, SB.jsxs)("span", {
          className: "GreenvilleNavStreet",
          children: [OB.street.shortName, " ", (0, SB.jsx)("span", {
            className: "GreenvilleNavSuffix",
            children: OB.street.suffix
          })]
        })]
      })
    }
    const XD = "4rem",
      wD = `translateY(${XD}) scale(1.4)`,
      ED = [{
        transform: wD,
        opacity: 0
      }, {
        transform: wD,
        opacity: 1,
        offset: .12
      }, {
        transform: wD,
        opacity: 1,
        offset: .7,
        easing: "ease-in-out"
      }, {
        transform: "none",
        opacity: 1
      }],
      cD = [{
        opacity: 0
      }, {
        opacity: 1
      }];

    function hD(BB) {
      var OB;
      let {
        controller: GB,
        nav: YB
      } = BB;
      (0, RB.i)(wG, null), (0, RB.i)(sY, null);
      const {
        t: DB
      } = (0, AB.H)(), QB = (0, rB.d)(), oB = (0, jB.useRef)(null), yB = (0, jB.useRef)(null), JB = (0, jB.useRef)(null), MB = (0, jB.useRef)(null), PB = (0, jB.useRef)(null), zB = (0, jB.useRef)(null), lB = (0, mO.g)("hiddenPlayerNames"), pB = GB.getPlace(), qB = YB.getAddress(), ZB = pB && oY(DB, pB, qB, lB), NB = ZB ? ZB.key : null;
      if ((0, jB.useLayoutEffect)((() => {
          var BB, OB, GB, YB;
          if (null === NB) return null === (GB = MB.current) || void 0 === GB || GB.cancel(), void(null === (YB = PB.current) || void 0 === YB || YB.cancel());
          if (oB.current === NB) return;
          if (oB.current = NB, QB) return;
          const DB = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          null === (BB = MB.current) || void 0 === BB || BB.cancel(), MB.current = yB.current.animate(DB ? cD : ED, {
            duration: DB ? 400 : 2200
          }), null === (OB = PB.current) || void 0 === OB || OB.cancel(), !DB && JB.current && (PB.current = JB.current.animate(function(BB) {
            const OB = `0 calc(${XD} + ${(1.4-1)*BB}px)`;
            return [{
              translate: "0 0",
              easing: "ease-out"
            }, {
              translate: OB,
              offset: .12
            }, {
              translate: OB,
              offset: .7,
              easing: "ease-in-out"
            }, {
              translate: "0 0"
            }]
          }(yB.current.offsetHeight), {
            duration: 2200
          }))
        }), [NB]), (0, jB.useEffect)((() => () => {
          var BB, OB;
          null === (BB = MB.current) || void 0 === BB || BB.cancel(), null === (OB = PB.current) || void 0 === OB || OB.cancel()
        }), []), !pB) return null;
      let WB = "outside" === qB.kind ? null : qB;
      return !ZB || "plot" !== qB.kind && "tile" !== qB.kind ? ZB && WB && (null === (OB = zB.current) || void 0 === OB ? void 0 : OB.key) === ZB.key && (WB = zB.current.address) : zB.current = {
        key: ZB.key,
        address: qB
      }, (0, SB.jsxs)("div", {
        className: "GreenvilleTopBar",
        children: [ZB && (0, SB.jsx)(aD, {
          title: ZB,
          tagRef: yB,
          job: "hudJob" === pB.kind ? pB : null,
          home: "hudHome" === pB.kind ? pB : null
        }), WB && (0, SB.jsx)(gD, {
          address: WB,
          large: !ZB,
          rootRef: JB
        })]
      })
    }

    function aD(BB) {
      let {
        title: OB,
        tagRef: GB,
        job: YB,
        home: DB
      } = BB;
      return (0, SB.jsxs)("div", {
        ref: GB,
        className: "GreenvillePlaceTag",
        role: "status",
        children: [null !== OB.eyebrow && (0, SB.jsx)("span", {
          className: "GreenvillePlaceTagEyebrow",
          children: OB.eyebrow
        }), (0, SB.jsx)("strong", {
          className: "GreenvillePlaceTagName",
          children: OB.name
        }), YB && (0, SB.jsx)(eD, {
          job: YB
        }), DB && (0, SB.jsx)(bD, {
          home: DB
        })]
      })
    }

    function eD(BB) {
      let {
        job: OB
      } = BB;
      const {
        t: GB
      } = (0, AB.H)(), {
        level: YB,
        expInto: DB,
        expNeeded: QB
      } = OB, oB = 0 === QB;
      return (0, SB.jsxs)("div", {
        className: "GreenvillePlaceTagRow",
        children: [(0, SB.jsx)("span", {
          className: "GreenvillePlaceTagJob",
          "aria-hidden": "true",
          children: (0, SB.jsx)(NB.c, {
            itemName: DY[OB.job],
            amount: 0
          })
        }), (0, SB.jsx)("span", {
          className: "GreenvillePlaceTagLevel",
          children: GB("greenvilleGame:levelShort", {
            level: YB
          })
        }), (0, SB.jsx)("div", {
          className: "GreenvillePlaceTagBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": oB ? 100 : Math.round(DB / QB * 100),
          children: (0, SB.jsx)("div", {
            className: "GreenvillePlaceTagBarFill",
            style: {
              transform: `scaleX(${oB?1:Math.min(1,DB/QB)})`
            }
          })
        }), !oB && (0, SB.jsxs)("span", {
          className: "GreenvillePlaceTagExp",
          children: [(0, LB.g)(DB), "/", (0, LB.g)(QB)]
        }), oB && (0, SB.jsx)("span", {
          className: "GreenvillePlaceTagMax",
          children: GB("greenvilleGame:levelMax")
        }), null !== OB.status && (0, SB.jsx)(TD, {
          status: OB.status
        })]
      })
    }

    function TD(BB) {
      let {
        status: OB
      } = BB;
      const {
        t: GB
      } = (0, AB.H)();
      switch (OB.kind) {
        case "hudTier":
          return (0, SB.jsxs)("span", {
            className: pB()("GreenvillePlaceChip", {
              Locked: OB.locked
            }),
            children: [OB.locked && (0, SB.jsx)(xB.b, {
              name: "lock"
            }), GB(`greenvilleGame:${OB.tierKey}`)]
          });
        case "hudBay":
          return (0, SB.jsxs)("span", {
            className: "GreenvillePlaceChip",
            children: [GB("greenvilleGame:demolitionBayObject", {
              material: GB(`greenvilleGame:${OB.materialKey}`),
              object: GB(`greenvilleGame:${OB.objectKey}`)
            }), (0, SB.jsx)("span", {
              className: "GreenvillePlaceChipBar",
              children: (0, SB.jsx)("span", {
                className: "GreenvillePlaceChipBarFill",
                style: {
                  transform: `scaleX(${OB.percent/100})`
                }
              })
            })]
          });
        case "hudBayEmpty":
          return (0, SB.jsx)("span", {
            className: "GreenvillePlaceChip",
            children: GB("greenvilleGame:demolitionYardIncoming")
          });
        case "hudFarmTier":
          return (0, SB.jsx)("span", {
            className: "GreenvillePlaceChip Golden",
            children: GB("greenvilleGame:farmGoldenChance", {
              percent: OB.goldenPercent
            })
          })
      }
    }

    function bD(BB) {
      let {
        home: OB
      } = BB;
      const {
        t: GB
      } = (0, AB.H)();
      return OB.pvp || OB.parkour || !OB.visitorsAllowed ? (0, SB.jsxs)("div", {
        className: "GreenvillePlaceTagRow GreenvillePlaceTagChips",
        children: [OB.pvp && (0, SB.jsx)("span", {
          className: "GreenvillePlaceChip Danger",
          children: GB("greenvilleGame:houseChipPvp")
        }), OB.parkour && (0, SB.jsx)("span", {
          className: "GreenvillePlaceChip",
          children: GB("greenvilleGame:houseChipParkour")
        }), !OB.visitorsAllowed && (0, SB.jsxs)("span", {
          className: "GreenvillePlaceChip Locked",
          children: [(0, SB.jsx)(xB.b, {
            name: "lock"
          }), GB("greenvilleGame:houseChipVisitorsOff")]
        })]
      }) : null
    }
    const CD = function(BB, OB, GB, DB) {
      let QB, {
        localPlayerId: oB
      } = DB;
      const lB = new zB((BB => {
          yB.o.tM(PB, BB)
        })),
        pB = new lY((BB => {
          yB.o.tM(zY, BB)
        })),
        qB = {
          onGain: () => {
            QB.playSound(oB, "rpgHandleCoins1", .5, .9 + .3 * Math.random())
          },
          onCoinLanded: (BB, OB) => {
            QB.playSound(oB, "pickUp", .3, 1 + .5 * BB / Math.max(1, OB - 1))
          }
        },
        ZB = [],
        NB = {
          open: BB => {
            for (const OB of ZB) OB !== BB && OB.onMenuClosed();
            (0, MB.o)()
          },
          close: MB.g,
          dismiss: MB.i
        },
        RB = new JB.d,
        WB = new xO((BB => {
          yB.o.tM(vO, BB)
        }), NB, (BB => {
          QB.sendCommand(null === BB ? YB : `${YB} ${BB}`)
        }), RB),
        AB = new sB((BB => {
          yB.o.tM(HB, BB)
        }), NB, (BB => {
          QB.sendCommand(`demolition pick ${BB}`)
        }), RB),
        VB = new RO((BB => {
          yB.o.tM(ZO, BB)
        }), NB, (BB => {
          QB.sendCommand(`garage pick ${BB}`)
        }), RB),
        SB = new AY((BB => {
          yB.o.tM(RY, BB)
        })),
        nB = new cG((BB => {
          yB.o.tM(wG, BB)
        }), (BB => {
          yB.o.tM(EG, BB)
        })),
        UB = new GD(function(BB) {
          return "profIsland" === BB ? fD : UD
        }(GB), (BB => {
          yB.o.tM(sY, BB)
        }), (BB => {
          yB.o.tM(xY, BB)
        }), (BB => {
          yB.o.tM(tY, BB)
        }));
      let fB = null;
      const kB = new KO((BB => {
          yB.o.tM(kO, BB)
        }), (BB => {
          yB.o.tM(dO, BB)
        }), NB, (BB => {
          QB.sendCommand(BB)
        }), RB),
        dB = new NG((BB => {
          yB.o.tM(pG, BB)
        }), (BB => {
          yB.o.tM(qG, BB)
        }), NB, (BB => {
          QB.sendCommand(BB)
        }), RB);
      ZB.push(WB, AB, VB, kB, dB);
      let KB = null;
      return {
        onCreate: BB => {
          QB = BB, UB.start(BB), fB = new LY(SB), KB = (0, MB.s)((0, jB.createElement)(jB.Fragment, null, (0, jB.createElement)(uB, {
            controller: lB
          }), (0, jB.createElement)(ZY, {
            controller: pB
          }), (0, jB.createElement)(mY, {
            market: SB,
            markers: fB
          }), (0, jB.createElement)(nY, {
            controller: SB
          }), (0, jB.createElement)(hD, {
            controller: nB,
            nav: UB
          }), (0, jB.createElement)(KD, {
            controller: nB
          }), (0, jB.createElement)(jY, {
            controller: nB
          }, (0, jB.createElement)(hB, {
            sounds: qB
          }), (0, jB.createElement)(RD, {
            controller: UB
          }), (0, jB.createElement)(XG, {
            controller: dB
          }), (0, jB.createElement)(fY, {
            controller: SB
          }), (0, jB.createElement)(HO, {
            controller: kB
          })), (0, jB.createElement)(mD, {
            controller: nB
          })), {
            content: (0, jB.createElement)(jB.Fragment, null, (0, jB.createElement)(GG, {
              controller: WB
            }), (0, jB.createElement)(qO, {
              controller: AB
            }), (0, jB.createElement)(VO, {
              controller: VB
            }), (0, jB.createElement)(CO, {
              controller: kB
            }), (0, jB.createElement)(gG, {
              controller: dB
            })),
            onClose: () => {
              for (const BB of ZB) BB.onMenuClosed()
            }
          })
        },
        onClose: () => {
          KB(), UB.dispose(), WB.dropPresses(), AB.dropPresses(), VB.dropPresses(), fB.waypoints.dispose(), kB.dropPresses(), dB.dropPresses(), RB.dispose()
        },
        onAfterRender: (BB, OB) => {
          const GB = QB.getPositionView(oB);
          fB.frame(OB, GB), UB.frame(OB, GB, QB.isLocalPlayerInVehicle())
        },
        onReceivedMessageFromServer: (BB, OB) => {
          "greenvilleBackpack" === BB ? lB.nP(OB) : "greenvilleOreBuyer" === BB ? WB.nP(OB) : "greenvilleLumberMill" === BB ? kB.nP(OB) : "greenvilleDemolition" === BB ? AB.nP(OB) : "greenvilleGarage" === BB ? VB.nP(OB) : "greenvilleFarmBoard" === BB ? dB.nP(OB) : "greenvilleMarket" === BB ? SB.nP(OB) : "greenvilleHud" === BB ? nB.nP(OB) : "greenvilleLevelUp" === BB ? pB.nP(OB) : "greenvillePlots" === BB ? UB.nP(OB) : "greenvilleMapMarkers" === BB && UB.receiveMarkers(OB)
        }
      }
    }
  },
  40197: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB,
      e: () => oB
    });
    var YB = GB(9927);
    const DB = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      QB = [150, 150, 150],
      oB = -2147483648;
    class jB {
      constructor(BB) {
        this.averages = BB, this.byId = new Map
      }
      get(BB) {
        var OB, GB, oB, jB, yB;
        const JB = this.byId.get(BB);
        if (void 0 !== JB) return JB;
        const MB = null !== (OB = null === (GB = YB.h[BB]) || void 0 === GB ? void 0 : GB.name) && void 0 !== OB ? OB : "",
          PB = MB.split("|")[0],
          zB = null !== (oB = this.averages[MB]) && void 0 !== oB ? oB : this.averages[PB],
          lB = null !== (jB = null !== (yB = null === zB || void 0 === zB ? void 0 : zB[0]) && void 0 !== yB ? yB : DB[PB]) && void 0 !== jB ? jB : 0 === (null === zB || void 0 === zB ? void 0 : zB.length) ? null : QB;
        return this.byId.set(BB, lB), lB
      }
      getDrawnIds() {
        const BB = new Uint8Array(65536);
        for (let OB = 1; OB < 65536; OB++) void 0 !== YB.h[OB] && null !== this.get(OB) && (BB[OB] = 1);
        return BB
      }
      drawPixel(BB, OB, GB, YB, DB, QB) {
        const jB = function(BB, OB, GB) {
            const YB = BB - OB + (BB - GB);
            return Math.max(.65, Math.min(1.2, .97 + .055 * YB))
          }(YB, DB === oB ? YB : DB, QB === oB ? YB : QB),
          yB = this.get(GB);
        BB[OB] = yB[0] * jB, BB[OB + 1] = yB[1] * jB, BB[OB + 2] = yB[2] * jB, BB[OB + 3] = 255
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);