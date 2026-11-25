export const id = 273;
export const ids = [273];
export const modules = {
  40515: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM,
      g: () => SM,
      j: () => jM
    });
    var OM = iM(44);

    function SM(MM) {
      return PM(MM, nM)
    }

    function jM(MM) {
      return PM(MM, QM)
    }

    function aM(MM) {
      return `${Math.floor(MM/60)}:${String(MM%60).padStart(2,"0")}`
    }

    function PM(MM, rM) {
      const [, iM] = (0, OM.useState)(null);
      return (0, OM.useEffect)((() => {
        if (0 === MM) return;
        const OM = window.setInterval((() => {
          const OM = rM(MM);
          iM((rM => (null === rM || void 0 === rM ? void 0 : rM.endsAt) === MM && rM.value === OM ? rM : {
            endsAt: MM,
            value: OM
          }))
        }), 250);
        return () => {
          window.clearInterval(OM)
        }
      }), [MM, rM]), rM(MM)
    }

    function nM(MM) {
      return (MM - performance.now()) / 1e3
    }

    function QM(MM) {
      return Math.max(0, Math.ceil(nM(MM)))
    }
  },
  40543: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM
    });
    var OM = iM(40551);
    async function SM() {
      const {
        averageColors: MM
      } = await iM.e(231).then((() => iM(35131)));
      return new OM.c(MM)
    }
  },
  40520: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => nM
    });
    var OM = iM(37624),
      SM = iM(1188),
      jM = iM(1258),
      aM = iM(39491),
      PM = iM(39543);
    class nM {
      constructor(MM, rM) {
        var iM;
        this.classes = MM, this.distanceKey = rM, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.dh = !1, this.pE = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.pE), null === (iM = window.visualViewport) || void 0 === iM || iM.addEventListener("resize", this.pE)
      }
      bindMarker(MM) {
        const rM = this.refs.get(MM);
        if (rM) return rM;
        const iM = rM => {
          var OM;
          null === (OM = this.markers.get(MM)) || void 0 === OM || OM.stopObserving(), this.markers.delete(MM), rM && !this.dh ? (this.markers.set(MM, this.mount(rM)), this.refs.set(MM, iM)) : this.refs.delete(MM)
        };
        return this.refs.set(MM, iM), iM
      }
      hasMarkers() {
        return this.markers.size > 0
      }
      setRender(MM) {
        this.render = MM
      }
      update(MM, rM, iM, OM, SM) {
        const jM = this.markers.get(MM);
        jM && (jM.target ??= [0, 0, 0], jM.target[0] = rM, jM.target[1] = iM, jM.target[2] = OM, this.place(jM), this.dO(jM, SM && Math.hypot(rM - SM[0], iM - SM[1], OM - SM[2])))
      }
      dispose() {
        var MM;
        this.dh = !0, window.removeEventListener("resize", this.pE), null === (MM = window.visualViewport) || void 0 === MM || MM.removeEventListener("resize", this.pE);
        for (const rM of this.markers.values()) rM.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(MM) {
        const {
          render: rM,
          viewport: iM
        } = this;
        if (!rM || !MM.target) return;
        const OM = (50 - rM.screenBandPct.y) / 100 * iM.height,
          SM = {
            x: MM.halfSize.width + 8,
            top: MM.halfSize.height + 8,
            bottom: MM.halfSize.height + MM.labelsBelow + OM
          },
          jM = rM.projectWorldPosToViewport(MM.target),
          nM = null !== jM && void 0 !== jM ? jM : rM.projectWorldPosToScreenPos(MM.target),
          QM = (0, PM.c)({
            x: nM.x,
            y: nM.y,
            text: jM
          }, SM, iM);
        (0, aM.b)(MM.root, Math.round(100 * QM.x) / 100, Math.round(100 * QM.y) / 100)
      }
      dO(MM, rM) {
        if (null === rM) return void(null !== MM.metres && (MM.metres = null, MM.distance.textContent = ""));
        const iM = Date.now();
        (null === MM.metres || (0, OM.c)(rM, MM.metres, MM.metresShownAt)) && (MM.metres = Math.round(rM), MM.metresShownAt = iM, MM.distance.textContent = (0, SM.x)(jM.e.get().getCurrentLanguageCode(), this.distanceKey, {
          distance: String(MM.metres)
        }))
      }
      mount(MM) {
        const rM = {
            root: MM,
            distance: MM.querySelector(`.${this.classes.distance}`),
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
          iM = MM.querySelector(`.${this.classes.labels}`),
          OM = new ResizeObserver((() => {
            rM.halfSize = {
              width: Math.max(MM.offsetWidth, iM.offsetWidth) / 2,
              height: MM.offsetHeight / 2
            }, rM.labelsBelow = iM.offsetTop + iM.offsetHeight - MM.offsetHeight, this.place(rM)
          }));
        return OM.observe(MM, {
          box: "border-box"
        }), OM.observe(iM, {
          box: "border-box"
        }), rM.stopObserving = () => {
          OM.disconnect()
        }, rM
      }
    }
  },
  40534: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => TS
    });
    const OM = "ore sell",
      SM = "lumber ",
      jM = "farm ",
      aM = ["market", "demolition", "mining", "woodcutting", "farming"];
    var PM = iM(44),
      nM = iM(22),
      QM = iM(39578),
      zM = iM(37542);
    const LM = "greenvilleBackpackView";
    class mM {
      constructor(MM) {
        this.Tz = MM, this.view = null, this.arrivalToken = 0, this.showToken = 0
      }
      getView() {
        return this.view
      }
      GL(MM) {
        if ("hide" === MM[0]) this.view = null;
        else if ("show" === MM[0]) {
          const rM = MM[3];
          this.view = {
            vL: MM[1],
            shardsPerItem: MM[2],
            total: rM.reduce(((MM, rM) => {
              let [, iM] = rM;
              return MM + iM
            }), 0),
            contents: rM,
            arrival: null,
            showToken: ++this.showToken
          }
        } else {
          if (null === this.view) return void console.warn(`[greenville] backpack ${MM[0]} with no backpack shown`);
          {
            var rM, iM;
            const OM = MM[1],
              SM = this.view.contents.find((MM => {
                let [rM] = MM;
                return rM === OM
              })),
              jM = this.view.contents.filter((MM => {
                let [rM] = MM;
                return rM !== OM
              })),
              aM = null !== (rM = null === SM || void 0 === SM ? void 0 : SM[1]) && void 0 !== rM ? rM : 0,
              PM = null !== (iM = null === SM || void 0 === SM ? void 0 : SM[2]) && void 0 !== iM ? iM : 0;
            "shard" === MM[0] ? this.view = {
              ...this.view,
              contents: [...jM, [OM, aM, PM + 1]]
            } : this.view = {
              ...this.view,
              total: this.view.total + 1,
              contents: [...jM, [OM, aM + 1, 0]],
              arrival: {
                item: OM,
                token: ++this.arrivalToken,
                fromShards: PM > 0
              }
            }
          }
        }
        this.Tz(this.view)
      }
    }
    var HM = iM(1116),
      hM = iM.n(HM),
      JM = iM(19),
      dM = iM(37538),
      yM = iM(2026),
      lM = iM(1516),
      EM = iM(2093),
      UM = iM(1188);
    const GM = "data:image/png;base64,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";
    var CM = iM(1303);
    const eM = (0, PM.forwardRef)((function(MM, rM) {
      let {
        contents: iM,
        vL: OM,
        full: SM,
        children: jM
      } = MM;
      const aM = [...iM].sort(((MM, rM) => {
        let [iM] = MM, [OM] = rM;
        return iM.localeCompare(OM)
      }));
      let PM = 0;
      return (0, CM.jsxs)("div", {
        ref: rM,
        className: "GreenvilleBackpackBag",
        children: [jM, (0, CM.jsx)("img", {
          className: hM()("GreenvilleBackpackArt", {
            Full: SM
          }),
          src: GM,
          alt: "",
          draggable: !1
        }), (0, CM.jsx)("div", {
          className: "GreenvilleBackpackWindow",
          children: aM.map((MM => {
            let [rM, iM] = MM;
            const SM = Math.min(1 - PM, iM / OM),
              jM = (0, CM.jsx)(wM, {
                item: rM,
                below: PM,
                share: SM
              }, rM);
            return PM += SM, jM
          }))
        })]
      })
    }));

    function bM() {
      const MM = new Image;
      MM.src = GM, MM.decode().catch((MM => {
        console.error("[greenville] backpack art failed to load", MM)
      }))
    }
    const wM = (0, PM.memo)((function(MM) {
        let {
          item: rM,
          below: iM,
          share: OM
        } = MM;
        return (0, CM.jsx)("div", {
          className: "GreenvilleBackpackOre",
          style: {
            bottom: `calc(var(--rise) * ${iM})`,
            height: `calc(var(--rise) * ${OM} + var(--slant))`
          },
          children: Array.from({
            length: 18
          }, ((MM, iM) => (0, CM.jsx)("div", {
            className: "GreenvilleBackpackOreTile",
            children: (0, CM.jsx)(yM.b, {
              itemName: rM,
              amount: 0
            })
          }, iM)))
        })
      })),
      tM = [{
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
      gM = [{
        transform: "scale(1.3)"
      }, {
        transform: "scale(1)"
      }];
    let uM = 1;

    function RM(MM) {
      let {
        controller: rM
      } = MM;
      (0, lM.e)(LM, null), (0, PM.useEffect)(bM, []);
      const iM = rM.getView();
      return null === iM ? null : (0, CM.jsx)(dM.i, {
        placement: "bottomLeft",
        children: (0, CM.jsx)(pM, {
          view: iM
        })
      })
    }

    function pM(MM) {
      let {
        view: rM
      } = MM;
      const {
        t: iM
      } = (0, UM.A)(), {
        isTouchScreen: OM
      } = (0, JM.m)(["isTouchScreen"]), [SM, jM] = (0, PM.useState)([]), aM = (0, PM.useRef)(null), nM = (0, PM.useRef)(null), QM = (0, PM.useRef)([]), zM = (0, PM.useRef)({
        arrival: rM.arrival,
        showToken: rM.showToken
      }), {
        arrival: LM,
        showToken: mM
      } = rM;
      (0, PM.useLayoutEffect)((() => {
        var MM;
        if (mM !== zM.current.showToken) jM([]);
        else if (null !== LM && LM.token !== (null === (MM = zM.current.arrival) || void 0 === MM ? void 0 : MM.token) && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          const MM = {
            id: uM++,
            item: LM.item,
            fromShards: LM.fromShards,
            driftEm: 1.4 * (Math.random() - .5),
            spinDeg: 70 * (Math.random() - .5)
          };
          jM((rM => rM.length < 6 ? [...rM, MM] : rM))
        }
        zM.current = {
          arrival: LM,
          showToken: mM
        }
      }), [LM, mM]), (0, PM.useEffect)((() => () => {
        for (const MM of QM.current) MM.cancel()
      }), []);
      const HM = (0, PM.useCallback)((() => {
          for (const MM of QM.current) MM.cancel();
          QM.current = [aM.current.animate(tM, {
            duration: 300,
            easing: "ease-out"
          }), nM.current.animate(gM, {
            duration: 220,
            easing: "ease-out"
          })]
        }), []),
        dM = (0, PM.useCallback)((MM => {
          jM((rM => rM.filter((rM => rM.id !== MM)))), HM()
        }), [HM]),
        lM = rM.total - SM.length,
        GM = lM >= rM.vL,
        bM = rM.contents.map((MM => {
          let [iM, OM, jM] = MM;
          const aM = SM.filter((MM => MM.item === iM)),
            PM = aM.some((MM => MM.fromShards));
          return [iM, OM - aM.length, PM ? rM.shardsPerItem : jM]
        })),
        wM = bM.filter((MM => {
          let [, rM, iM] = MM;
          return rM > 0 || iM > 0
        })).reverse().slice(0, 4),
        RM = (0, EM.p)("SpecialAction2");
      return (0, CM.jsxs)("div", {
        className: "GreenvilleBackpack",
        children: [(0, CM.jsxs)("div", {
          className: "GreenvilleBackpackCount SmallTextBold",
          children: [(0, CM.jsx)("span", {
            ref: nM,
            className: hM()("GreenvilleBackpackTotal", {
              Full: GM
            }),
            children: lM
          }), (0, CM.jsxs)("span", {
            className: "GreenvilleBackpackCapacity",
            children: ["/ ", rM.vL]
          })]
        }), (0, CM.jsxs)("div", {
          className: "GreenvilleBackpackRow",
          children: [(0, CM.jsx)(eM, {
            ref: aM,
            contents: bM,
            vL: rM.vL,
            full: GM,
            children: SM.map((MM => (0, CM.jsx)(sM, {
              drop: MM,
              onLanded: dM
            }, MM.id)))
          }), (0, CM.jsxs)("div", {
            className: "GreenvilleBackpackInfo",
            children: [wM.length > 0 && (0, CM.jsx)("div", {
              className: "GreenvilleBackpackTallies",
              children: wM.map((MM => {
                let [iM, OM, SM] = MM;
                return (0, CM.jsxs)("div", {
                  className: "GreenvilleBackpackTally",
                  children: [(0, CM.jsx)("div", {
                    className: "GreenvilleBackpackTallyIcon",
                    children: (0, CM.jsx)(yM.b, {
                      itemName: iM,
                      amount: 0
                    })
                  }), OM > 0 && (0, CM.jsxs)("span", {
                    className: "SmallTextBold",
                    children: ["\xd7", OM]
                  }), SM > 0 && (0, CM.jsx)(WM, {
                    shards: SM,
                    shardsPerItem: rM.shardsPerItem
                  })]
                }, iM)
              }))
            }), GM && (0, CM.jsxs)("div", {
              className: "GreenvilleBackpackFullLine",
              role: "status",
              children: [(0, CM.jsx)("span", {
                className: "GreenvilleBackpackFullTitle SmallTextBold",
                children: iM("greenvilleGame:backpackFull")
              }), OM && (0, CM.jsx)("span", {
                className: "SmallTextLight",
                children: iM("greenvilleGame:backpackReturnTouch")
              }), !OM && null !== RM && (0, CM.jsx)("span", {
                className: "SmallTextLight",
                children: iM("greenvilleGame:backpackReturnDesktop", {
                  key: (0, EM.m)(RM)
                })
              })]
            })]
          })]
        })]
      })
    }

    function WM(MM) {
      let {
        shards: rM,
        shardsPerItem: iM
      } = MM;
      return (0, CM.jsx)("div", {
        className: "GreenvilleBackpackShards",
        children: Array.from({
          length: iM
        }, ((MM, iM) => (0, CM.jsx)("span", {
          className: hM()("GreenvilleBackpackShard", {
            Filled: iM < rM
          })
        }, iM)))
      })
    }

    function sM(MM) {
      let {
        drop: rM,
        onLanded: iM
      } = MM;
      const OM = (0, PM.useRef)(null);
      return (0, PM.useLayoutEffect)((() => {
        const {
          driftEm: MM,
          spinDeg: SM
        } = rM, jM = OM.current.animate([{
          transform: `translate(${MM}em, -3.2em) rotate(${SM}deg) scale(1.2)`,
          opacity: 0
        }, {
          transform: `translate(${.7*MM}em, -2.4em) rotate(${.7*SM}deg) scale(1.1)`,
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
        return jM.onfinish = () => {
          iM(rM.id)
        }, () => {
          jM.onfinish = null, jM.cancel()
        }
      }), [rM, iM]), (0, CM.jsx)("div", {
        ref: OM,
        className: "GreenvilleBackpackFalling",
        children: (0, CM.jsx)(yM.b, {
          itemName: rM.item,
          amount: 0
        })
      })
    }
    var DM = iM(65),
      kM = iM(35040),
      ZM = iM(2640),
      oM = iM(2811);
    const fM = [{
        transform: "scale(1.18)"
      }, {
        transform: "scale(1)"
      }],
      YM = [{
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
    let NM = 1,
      AM = null;

    function xM(MM) {
      var rM;
      let {
        sounds: iM
      } = MM;
      const OM = null === (rM = (0, ZM.f)("currencyAmounts")) || void 0 === rM ? void 0 : rM.gold;
      return !OM || OM.hidden ? null : (0, CM.jsx)(vM, {
        gold: OM.amount,
        sounds: iM
      })
    }

    function vM(MM) {
      let {
        gold: rM,
        sounds: iM
      } = MM;
      const OM = (0, oM.b)(),
        [SM, jM] = (0, PM.useState)([]),
        aM = (0, PM.useRef)(null),
        nM = (0, PM.useRef)(null),
        QM = (0, PM.useRef)(null),
        zM = (0, PM.useRef)(rM);
      (0, PM.useLayoutEffect)((() => {
        const MM = rM - zM.current;
        if (zM.current = rM, !(MM <= 0) && (iM.onGain(), !OM && !window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
          const rM = function(MM) {
            const rM = Math.max(1, Math.min(8, Math.floor(MM))),
              iM = Math.floor(MM / rM),
              OM = [];
            for (let SM = 0; SM < rM; SM++) {
              const jM = -Math.PI / 2 + (1 === rM ? 0 : 2.4 * (SM / (rM - 1) - .5)) + .3 * (Math.random() - .5),
                aM = 40 + 35 * Math.random();
              OM.push({
                id: NM++,
                burst: {
                  x: Math.cos(jM) * aM,
                  y: Math.sin(jM) * aM
                },
                gold: SM === rM - 1 ? MM - iM * (rM - 1) : iM,
                delayMs: 45 * SM,
                step: SM,
                steps: rM
              })
            }
            return OM
          }(MM);
          jM((MM => [...MM, ...rM.slice(0, Math.max(0, 24 - MM.length))]))
        }
      }), [rM]), (0, PM.useEffect)((() => () => {
        var MM;
        null === (MM = QM.current) || void 0 === MM || MM.cancel()
      }), []);
      const LM = (0, PM.useCallback)((MM => {
          iM.onCoinLanded(MM.step, MM.steps), jM((rM => rM.filter((rM => {
            let {
              id: iM
            } = rM;
            return iM !== MM.id
          }))))
        }), [iM]),
        mM = SM.length,
        HM = (0, PM.useRef)(mM);
      (0, PM.useEffect)((() => {
        var MM, rM;
        mM < HM.current && (null === (MM = QM.current) || void 0 === MM || MM.cancel(), QM.current = (null !== (rM = AM) && void 0 !== rM ? rM : aM.current).animate(0 === mM ? YM : fM, {
          duration: 0 === mM ? 380 : 160,
          easing: "ease-out"
        }));
        HM.current = mM
      }), [mM]);
      const hM = SM.reduce(((MM, rM) => MM + rM.gold), 0);
      return (0, CM.jsxs)(CM.Fragment, {
        children: [(0, CM.jsx)("div", {
          className: "GreenvilleGoldPurse",
          children: (0, CM.jsxs)("div", {
            ref: aM,
            className: "GreenvilleGoldPurseBody",
            children: [(0, CM.jsx)("span", {
              ref: nM,
              className: "GreenvilleGoldPurseIcon",
              children: (0, CM.jsx)(yM.b, {
                itemName: "Gold Coin",
                amount: 0
              })
            }), (0, CM.jsx)("span", {
              className: "GreenvilleGoldPurseAmount SmallTextBold",
              children: (0, kM.g)(Math.max(0, rM - hM))
            })]
          })
        }), (0, DM.createPortal)(SM.map((MM => (0, CM.jsx)(FM, {
          coin: MM,
          target: nM,
          onLanded: LM
        }, MM.id))), document.body)]
      })
    }

    function FM(MM) {
      let {
        coin: rM,
        target: iM,
        onLanded: OM
      } = MM;
      const SM = (0, PM.useRef)(null);
      return (0, PM.useEffect)((() => {
        var MM;
        const jM = (null !== (MM = AM) && void 0 !== MM ? MM : iM.current).getBoundingClientRect(),
          {
            burst: aM
          } = rM,
          PM = window.innerWidth / 2,
          nM = window.innerHeight / 2,
          QM = jM.left + jM.width / 2,
          zM = jM.top + jM.height / 2,
          LM = SM.current.animate([{
            transform: `translate(${PM}px, ${nM}px) scale(0.3)`,
            opacity: 0,
            easing: "ease-out"
          }, {
            transform: `translate(${PM+.7*aM.x}px, ${nM+.7*aM.y}px) scale(1.25)`,
            opacity: 1,
            offset: .15,
            easing: "ease-out"
          }, {
            transform: `translate(${PM+aM.x}px, ${nM+aM.y}px) scale(1)`,
            offset: .35,
            easing: "ease-in-out"
          }, {
            transform: `translate(${PM+aM.x}px, ${nM+aM.y+6}px) scale(1)`,
            offset: .45,
            easing: "cubic-bezier(0.55, 0, 1, 0.45)"
          }, {
            transform: `translate(${QM}px, ${zM}px) scale(0.6)`,
            opacity: 1
          }], {
            duration: 950,
            delay: rM.delayMs,
            fill: "both"
          });
        return LM.onfinish = () => {
          OM(rM)
        }, () => {
          LM.onfinish = null, LM.cancel()
        }
      }), [rM, iM, OM]), (0, CM.jsx)("div", {
        ref: SM,
        className: "GreenvilleGoldCoin",
        children: (0, CM.jsx)(yM.b, {
          itemName: "Gold Coin",
          amount: 0
        })
      })
    }
    class BM {
      constructor(MM, rM, iM) {
        this.pacer = MM, this.send = rM, this.onAnswersTimedOut = iM, this.queued = [], this.unanswered = [], this.answerTimer = null, this.flushing = !1, this.flush = () => {
          if (!this.flushing) {
            this.flushing = !0;
            try {
              for (; this.queued.length > 0 && this.pacer.tryStart();) {
                const MM = this.queued.shift();
                this.unanswered.push(MM), this.answerTimer ??= setTimeout(this.onAnswerTimeout, 15e3), this.send(MM)
              }
            } finally {
              this.flushing = !1
            }
          }
        }, this.onAnswerTimeout = () => {
          this.answerTimer = null, this.unanswered = [], this.onAnswersTimedOut()
        }, MM.subscribe(this.flush)
      }
      getPending() {
        return [...this.unanswered, ...this.queued]
      }
      dL() {
        return 0 === this.unanswered.length && 0 === this.queued.length
      }
      getLastSent() {
        return this.unanswered.at(-1)
      }
      getLastPending() {
        var MM;
        return null !== (MM = this.queued.at(-1)) && void 0 !== MM ? MM : this.unanswered.at(-1)
      }
      push(MM) {
        this.queued.push(MM), this.flush()
      }
      dropWaiting() {
        const MM = this.queued.length > 0;
        return this.queued = [], MM
      }
      takeAnswer() {
        var MM;
        const rM = null !== (MM = this.unanswered.shift()) && void 0 !== MM ? MM : null;
        return this.stopAnswerTimer(), this.unanswered.length > 0 && (this.answerTimer = setTimeout(this.onAnswerTimeout, 15e3)), rM
      }
      clear() {
        this.queued = [], this.unanswered = [], this.stopAnswerTimer()
      }
      stopAnswerTimer() {
        null !== this.answerTimer && (clearTimeout(this.answerTimer), this.answerTimer = null)
      }
    }
    class XM {
      constructor(MM, rM, iM, OM) {
        this.confirmed = MM, this.picks = void 0, this.picks = new BM(rM, iM, OM)
      }
      confirm(MM) {
        this.confirmed = MM
      }
      getLastPending() {
        return this.picks.getLastPending()
      }
      getLatest() {
        var MM;
        return null !== (MM = this.getLastPending()) && void 0 !== MM ? MM : this.confirmed
      }
      dL() {
        return this.picks.dL()
      }
      pushLatest(MM) {
        var rM;
        const iM = null !== (rM = this.picks.getLastSent()) && void 0 !== rM ? rM : this.confirmed;
        this.picks.dropWaiting() && MM === iM || this.picks.push(MM)
      }
      takeAnswer() {
        this.picks.takeAnswer()
      }
      clear() {
        this.picks.clear()
      }
    }
    class IM {
      constructor(MM, rM, iM) {
        this.closed = MM, this.Tz = rM, this.menu = iM, this.view = void 0, this.dismiss = () => {
          this.closePanel() && this.menu.dismiss()
        }, this.onMenuClosed = () => {
          this.closePanel()
        }, this.view = MM
      }
      getView() {
        return this.view
      }
      show(MM) {
        this.set(MM), this.menu.open(this)
      }
      close() {
        this.closePanel() && this.menu.close()
      }
      set(MM) {
        this.view = MM, this.Tz(MM)
      }
      closePanel() {
        return !!this.view.open && (this.dropPresses(), this.set(this.closed), !0)
      }
    }
    const KM = "greenvilleDepotView",
      qM = {
        open: !1,
        explosives: [],
        picked: 0,
        selected: 0,
        level: 1,
        line: "demolitionDepotIntro"
      };
    class TM extends IM {
      constructor(MM, rM, iM, OM) {
        super(qM, MM, rM), this.picks = void 0, this.select = MM => {
          this.set({
            ...this.getView(),
            selected: MM
          })
        }, this.LH = MM => {
          const rM = this.getView();
          MM !== rM.picked && (this.picks.pushLatest(MM), this.set({
            ...rM,
            picked: MM,
            line: "demolitionGrubnikPicked"
          }))
        }, this.onAnswersTimedOut = () => {
          const MM = this.getView();
          MM.open && this.set({
            ...MM,
            picked: this.picks.getLatest()
          })
        }, this.picks = new XM(0, OM, iM, this.onAnswersTimedOut)
      }
      GL(MM) {
        if ("openDepot" === MM[0]) {
          const rM = MM[4];
          rM && this.picks.takeAnswer();
          const iM = this.getView();
          if (rM && !iM.open) return;
          this.picks.confirm(MM[2]);
          const OM = this.picks.getLatest(),
            SM = !iM.open;
          this.show({
            open: !0,
            explosives: MM[1],
            picked: OM,
            selected: SM ? OM : iM.selected,
            level: MM[3],
            line: SM ? "demolitionDepotIntro" : iM.line
          })
        } else "closeDepot" !== MM[0] && "hide" !== MM[0] || this.close()
      }
      dropPresses() {
        this.picks.clear()
      }
    }
    var VM = iM(1398),
      cM = iM(1520),
      Mr = iM(35037),
      rr = iM(3693),
      ir = iM(2006),
      Or = iM(4917);

    function Sr(MM) {
      var rM;
      let {
        item: iM,
        className: OM
      } = MM;
      return (0, CM.jsx)(ir.b, {
        className: OM,
        text: null !== (rM = (0, Mr.displayNameOf)((0, rr.d)(iM))) && void 0 !== rM ? rM : iM
      })
    }

    function jr(MM) {
      let {
        item: rM
      } = MM;
      return (0, CM.jsx)(yM.b, {
        itemName: rM,
        amount: 0
      })
    }

    function ar(MM) {
      let {
        open: rM,
        onDismiss: iM,
        title: OM,
        className: SM,
        headerExtra: jM,
        tabs: aM,
        status: PM,
        children: nM
      } = MM;
      const QM = `${SM}Title`;
      return (0, CM.jsx)(Or.e, {
        show: rM,
        close: iM,
        togglePointerLock: !1,
        ignorePressesAsShown: !0,
        className: "GreenvilleBoardOverlay",
        children: (0, CM.jsxs)("section", {
          className: hM()("GreenvilleBoard", SM),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": QM,
          children: [(0, CM.jsxs)("header", {
            className: "GreenvilleBoardHeader",
            children: [(0, CM.jsx)("h2", {
              id: QM,
              className: "VisuallyHidden",
              children: OM
            }), jM, (0, CM.jsx)(cM.l, {
              onClick: iM
            })]
          }), aM, (0, CM.jsx)("div", {
            className: "GreenvilleBoardBody",
            children: nM
          }), (0, CM.jsxs)("footer", {
            className: "GreenvilleBoardStatus",
            children: [(0, CM.jsx)("span", {
              className: "GreenvilleBoardSpeaker",
              children: PM.speaker
            }), PM.line]
          })]
        })
      })
    }

    function Pr(MM) {
      let {
        tabs: rM,
        selected: iM,
        onSelect: OM
      } = MM;
      return (0, CM.jsx)("nav", {
        className: "GreenvilleBoardTabs",
        "data-pad-tabs": "1",
        children: rM.map((MM => {
          const rM = MM.id === iM;
          return (0, CM.jsxs)("button", {
            type: "button",
            className: hM()("GreenvilleBoardTab", {
              Selected: rM
            }),
            "aria-pressed": rM,
            "data-pad-tab": !0,
            "data-pad-selected": rM ? "true" : void 0,
            onClick: () => {
              OM(MM.id)
            },
            children: [MM.label, MM.badge]
          }, MM.id)
        }))
      })
    }

    function nr(MM) {
      let {
        className: rM,
        roomy: iM = !1,
        children: OM
      } = MM;
      return (0, CM.jsx)("div", {
        className: hM()("GreenvilleBoardTiles", rM, {
          Roomy: iM
        }),
        style: iM ? {
          "--tile-columns": (SM = PM.Children.count(OM), SM <= 3 ? SM : Math.min(4, Math.ceil(SM / 2)))
        } : void 0,
        "data-pad-select-on-focus": !0,
        children: OM
      });
      var SM
    }

    function Qr(MM) {
      let {
        icon: rM,
        name: iM,
        selected: OM,
        locked: SM = !1,
        className: jM,
        onSelect: aM,
        children: PM
      } = MM;
      return (0, CM.jsxs)("button", {
        type: "button",
        className: hM()("GreenvilleBoardTile", jM, {
          Selected: OM,
          Locked: SM
        }),
        "aria-pressed": OM,
        "data-pad-default-focus": OM || void 0,
        onClick: aM,
        children: [(0, CM.jsx)("span", {
          className: "GreenvilleBoardTileIcon",
          children: rM
        }), (0, CM.jsx)("span", {
          className: "GreenvilleBoardTileName",
          children: iM
        }), PM]
      })
    }

    function zr(MM) {
      let {
        icon: rM,
        name: iM,
        badges: OM,
        children: SM
      } = MM;
      return (0, CM.jsxs)("section", {
        className: "GreenvilleBoardDetail",
        children: [(0, CM.jsxs)("header", {
          className: "GreenvilleBoardDetailHeader",
          children: [(0, CM.jsx)("span", {
            className: "GreenvilleBoardDetailHero",
            children: (0, CM.jsx)("span", {
              className: "GreenvilleBoardDetailIcon",
              children: rM
            })
          }), (0, CM.jsxs)("div", {
            className: "GreenvilleBoardDetailHeading",
            children: [(0, CM.jsx)("h3", {
              children: iM
            }), OM && (0, CM.jsx)("span", {
              className: "GreenvilleBoardDetailBadges",
              children: OM
            })]
          })]
        }), SM]
      })
    }

    function Lr(MM) {
      let {
        level: rM
      } = MM;
      const {
        t: iM
      } = (0, UM.A)();
      return (0, CM.jsxs)("span", {
        className: "GreenvilleBoardBadge Muted",
        children: [(0, CM.jsx)(VM.b, {
          name: "lock"
        }), iM("greenvilleGame:boardLevelBadge", {
          level: rM
        })]
      })
    }

    function mr() {
      const {
        t: MM
      } = (0, UM.A)();
      return (0, CM.jsx)("span", {
        className: "GreenvilleBoardBadge",
        children: MM("greenvilleGame:demolitionDepotPicked")
      })
    }

    function Hr(MM) {
      let {
        line: rM,
        picked: iM,
        level: OM
      } = MM;
      const SM = rM[3];
      return (0, CM.jsxs)(CM.Fragment, {
        children: [iM && (0, CM.jsx)(mr, {}), SM > OM && (0, CM.jsx)(Lr, {
          level: SM
        })]
      })
    }

    function hr(MM) {
      let {
        view: rM,
        controller: iM
      } = MM;
      const {
        t: OM
      } = (0, UM.A)(), SM = rM.selected, jM = rM.explosives[SM], [aM, PM, nM, QM, zM] = jM, LM = SM === rM.picked, mM = QM > rM.level;
      return (0, CM.jsxs)(zr, {
        icon: (0, CM.jsx)(jr, {
          item: aM
        }),
        name: OM(`greenvilleGame:${PM}`),
        badges: mM && (0, CM.jsx)(Lr, {
          level: QM
        }),
        children: [(0, CM.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: OM(`greenvilleGame:${nM}`)
        }), (0, CM.jsx)("p", {
          className: "GreenvilleDepotStencil",
          children: OM("greenvilleGame:demolitionDepotMaxLive", {
            count: zM
          })
        }), (0, CM.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [LM && (0, CM.jsx)("span", {
            className: "GreenvilleDepotLoaded",
            children: OM("greenvilleGame:demolitionDepotPicked")
          }), !LM && (0, CM.jsx)(cM.e, {
            disabled: mM,
            onClick: () => {
              iM.LH(SM)
            },
            children: OM("greenvilleGame:demolitionDepotLoad")
          }), mM && (0, CM.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: OM("greenvilleGame:demolitionDepotLocked", {
              level: QM
            })
          })]
        })]
      })
    }

    function Jr(MM) {
      let {
        controller: rM
      } = MM;
      const iM = (0, lM.e)(KM, rM.getView()),
        {
          t: OM
        } = (0, UM.A)();
      return 0 === iM.explosives.length ? null : (0, CM.jsxs)(ar, {
        open: iM.open,
        onDismiss: rM.dismiss,
        title: OM("greenvilleGame:demolitionDepotTitle"),
        className: "GreenvilleDepotBoard",
        headerExtra: (0, CM.jsx)("span", {
          className: "GreenvilleBoardLevel",
          children: OM("greenvilleGame:demolitionDepotLevel", {
            level: iM.level
          })
        }),
        status: {
          speaker: OM("greenvilleGame:demolitionGrubnikName"),
          line: OM(`greenvilleGame:${iM.line}`)
        },
        children: [(0, CM.jsx)(nr, {
          roomy: !0,
          children: iM.explosives.map(((MM, SM) => {
            const [jM, aM, PM, nM, QM] = MM;
            return (0, CM.jsxs)(Qr, {
              icon: (0, CM.jsx)(jr, {
                item: jM
              }),
              name: OM(`greenvilleGame:${aM}`),
              selected: SM === iM.selected,
              locked: nM > iM.level,
              className: hM()("GreenvilleDepotCrate", {
                Picked: SM === iM.picked
              }),
              onSelect: () => {
                rM.select(SM)
              },
              children: [(0, CM.jsx)(Hr, {
                line: MM,
                picked: SM === iM.picked,
                level: iM.level
              }), (0, CM.jsx)("span", {
                className: "GreenvilleDepotStencil",
                children: OM("greenvilleGame:demolitionDepotMaxLive", {
                  count: QM
                })
              }), (0, CM.jsx)("span", {
                className: "GreenvilleDepotBlurb",
                children: OM(`greenvilleGame:${PM}`)
              })]
            }, jM)
          }))
        }), (0, CM.jsx)(hr, {
          view: iM,
          controller: rM
        })]
      })
    }
    const dr = "greenvilleGarageView",
      yr = {
        open: !1,
        cars: [],
        out: null,
        awaiting: !1,
        selected: null,
        line: "dealershipGarageIntro"
      };
    class lr extends IM {
      constructor(MM, rM, iM, OM) {
        super(yr, MM, rM), this.picks = void 0, this.select = MM => {
          this.set({
            ...this.getView(),
            selected: MM
          })
        }, this.LH = MM => {
          MM !== this.picks.getLastPending() && (this.picks.pushLatest(MM), this.set({
            ...this.getView(),
            out: MM,
            awaiting: !this.picks.dL(),
            line: "dealershipGarageTip"
          }))
        }, this.onAnswersTimedOut = () => {
          const MM = this.getView();
          MM.open && this.set({
            ...MM,
            out: this.picks.getLatest(),
            awaiting: !this.picks.dL()
          })
        }, this.picks = new XM(null, OM, iM, this.onAnswersTimedOut)
      }
      GL(MM) {
        if ("open" === MM[0]) {
          var rM;
          const iM = MM[3];
          iM && this.picks.takeAnswer();
          const OM = this.getView();
          if (iM && !OM.open) return;
          this.picks.confirm(MM[2]);
          const SM = MM[1],
            jM = this.picks.getLatest(),
            aM = !OM.open;
          this.show({
            open: !0,
            cars: SM,
            out: jM,
            awaiting: !this.picks.dL(),
            selected: aM ? null !== (rM = null !== jM && void 0 !== jM ? jM : SM[0]) && void 0 !== rM ? rM : null : OM.selected,
            line: aM ? "dealershipGarageIntro" : OM.line
          })
        } else this.close()
      }
      dropPresses() {
        this.picks.clear()
      }
    }

    function Er() {
      const {
        t: MM
      } = (0, UM.A)();
      return (0, CM.jsx)("span", {
        className: "GreenvilleBoardBadge",
        children: MM("greenvilleGame:dealershipGarageOut")
      })
    }

    function Ur(MM) {
      let {
        car: rM,
        out: iM,
        awaiting: OM,
        controller: SM
      } = MM;
      const {
        t: jM
      } = (0, UM.A)();
      return (0, CM.jsx)(zr, {
        icon: (0, CM.jsx)(jr, {
          item: rM
        }),
        name: (0, CM.jsx)(Sr, {
          item: rM
        }),
        children: (0, CM.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [iM && (0, CM.jsx)("span", {
            className: "GreenvilleGarageOutStamp",
            children: jM("greenvilleGame:dealershipGarageOut")
          }), (0, CM.jsx)(cM.e, {
            disabled: iM && OM,
            onClick: () => {
              SM.LH(rM)
            },
            children: jM(iM ? "greenvilleGame:dealershipGarageBringBack" : "greenvilleGame:dealershipGarageTakeOut")
          })]
        })
      })
    }

    function Gr(MM) {
      let {
        controller: rM
      } = MM;
      const iM = (0, lM.e)(dr, rM.getView()),
        {
          t: OM
        } = (0, UM.A)(),
        SM = 0 === iM.cars.length;
      return (0, CM.jsxs)(ar, {
        open: iM.open,
        onDismiss: rM.dismiss,
        title: OM("greenvilleGame:dealershipGarageTitle"),
        className: "GreenvilleGarageBoard",
        status: {
          speaker: OM("greenvilleGame:dealershipDelName"),
          line: OM(SM ? "greenvilleGame:dealershipGarageEmpty" : `greenvilleGame:${iM.line}`)
        },
        children: [!SM && (0, CM.jsx)(nr, {
          roomy: !0,
          children: iM.cars.map((MM => {
            const OM = MM === iM.out;
            return (0, CM.jsx)(Qr, {
              icon: (0, CM.jsx)(jr, {
                item: MM
              }),
              name: (0, CM.jsx)(Sr, {
                item: MM
              }),
              selected: MM === iM.selected,
              className: hM()("GreenvilleGarageBay", {
                Out: OM
              }),
              onSelect: () => {
                rM.select(MM)
              },
              children: OM && (0, CM.jsx)(Er, {})
            }, MM)
          }))
        }), null !== iM.selected && (0, CM.jsx)(Ur, {
          car: iM.selected,
          out: iM.selected === iM.out,
          awaiting: iM.awaiting,
          controller: rM
        })]
      })
    }
    const Cr = {
        kind: "intro"
      },
      er = {
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
        line: Cr
      };

    function br(MM) {
      let [rM, iM, OM, SM, jM, aM] = MM;
      return {
        slot: rM,
        titleKey: iM,
        items: OM,
        exp: SM,
        gold: jM,
        IQ: aM,
        ready: OM.every((MM => {
          let [, rM, iM] = MM;
          return iM >= rM
        }))
      }
    }

    function wr(MM, rM) {
      return "sell" === rM.action ? function(MM, rM) {
        let iM = MM.goldOwned;
        const OM = MM.sellLines.map((MM => {
          const [OM, SM, jM] = MM;
          return null !== rM && rM !== OM ? MM : (iM += SM * jM, [OM, 0, jM])
        }));
        return {
          ...MM,
          goldOwned: iM,
          sellLines: OM
        }
      }(MM, rM.item) : "accept" === rM.action ? function(MM, rM) {
        var iM;
        const OM = MM.orders[rM];
        return {
          ...MM,
          tracked: null !== (iM = MM.tracked) && void 0 !== iM ? iM : rM,
          orders: MM.orders.map((MM => MM === OM ? {
            ...MM,
            IQ: !0
          } : MM)),
          sellLines: MM.sellLines.map((MM => {
            const [rM, iM, SM] = MM, jM = OM.items.find((MM => {
              let [iM] = MM;
              return iM === rM
            }));
            return void 0 === jM ? MM : [rM, Math.max(0, iM - jM[1]), SM]
          }))
        }
      }(MM, rM.slot) : "track" === rM.action ? {
        ...MM,
        tracked: rM.slot
      } : {
        ...MM,
        delivering: [...MM.delivering, rM.slot]
      }
    }
    const tr = "greenvilleLumberMillView",
      gr = "greenvilleLumberTrackerView";
    class ur extends IM {
      constructor(MM, rM, iM, OM, jM) {
        super(er, MM, iM), this.publishTracker = rM, this.board = null, this.commands = void 0, this.tracker = null, this.tab = "orders", this.selectedSlot = 0, this.selectedWood = 0, this.line = Cr, this.selectTab = MM => {
          this.tab = MM, this.set({
            ...this.getView(),
            tab: MM
          })
        }, this.selectOrder = MM => {
          this.selectedSlot = MM, this.set({
            ...this.getView(),
            selectedSlot: MM
          })
        }, this.selectWood = MM => {
          this.selectedWood = MM, this.set({
            ...this.getView(),
            selectedWood: MM
          })
        }, this.accept = MM => {
          this.findOrder(MM).IQ || this.queue({
            action: "accept",
            slot: MM
          })
        }, this.track = MM => {
          this.getView().tracked !== MM && this.findOrder(MM).IQ && this.queue({
            action: "track",
            slot: MM
          })
        }, this.deliver = MM => {
          const rM = this.findOrder(MM);
          rM.IQ && rM.ready && !this.getView().delivering.includes(MM) && this.queue({
            action: "deliver",
            slot: MM
          })
        }, this.sell = MM => {
          this.getView().sellLines.some((rM => {
            let [iM, OM] = rM;
            return OM > 0 && (null === MM || MM === iM)
          })) && this.queue({
            action: "sell",
            item: MM
          })
        }, this.onAnswersTimedOut = () => {
          this.getView().open && this.set(this.getBoardView())
        }, this.commands = new BM(jM, (MM => {
          OM(function(MM) {
            return "sell" === MM.action ? null === MM.item ? `${SM}sell` : `${SM}sell ${MM.item}` : `${SM}${MM.action} ${MM.slot}`
          }(MM))
        }), this.onAnswersTimedOut)
      }
      getTracker() {
        return this.tracker
      }
      GL(MM) {
        if ("open" === MM[0]) {
          const iM = MM[6],
            OM = iM ? this.commands.takeAnswer() : null,
            SM = !this.getView().open;
          if (iM && SM) return;
          if (SM) this.onReopened(MM);
          else if (null !== OM) {
            var rM;
            this.line = null !== (rM = function(MM, rM, iM) {
              if ("deliver" === MM.action) {
                const [, OM] = rM[1][MM.slot];
                return iM[1][MM.slot][5] ? null : {
                  kind: "delivered",
                  titleKey: OM
                }
              }
              if ("sell" !== MM.action) return null;
              let OM = 0;
              return rM[3].forEach(((rM, SM) => {
                let [jM, aM] = rM;
                null !== MM.item && MM.item !== jM || (OM += Math.max(0, aM - iM[3][SM][1]))
              })), OM > 0 ? {
                kind: "bought",
                count: OM
              } : null
            }(OM, this.board, MM)) && void 0 !== rM ? rM : this.line
          }
          this.board = MM, this.show(this.getBoardView())
        } else "close" === MM[0] ? this.close() : (this.tracker = null === MM[1] ? null : br(MM[1]), this.publishTracker(this.tracker))
      }
      dropPresses() {
        this.commands.clear(), this.board = null
      }
      findOrder(MM) {
        return this.getView().orders.find((rM => rM.slot === MM))
      }
      onReopened(MM) {
        let [, rM, , iM] = MM;
        const OM = rM.map(br).find((MM => MM.IQ && MM.ready)),
          SM = iM.findIndex((MM => {
            let [, rM] = MM;
            return rM > 0
          }));
        void 0 === OM && -1 !== SM || (this.tab = "orders"), void 0 !== OM && (this.selectedSlot = OM.slot), -1 === SM || this.selectedWood < iM.length && iM[this.selectedWood][1] > 0 || (this.selectedWood = SM), this.line = Cr
      }
      getBoardView() {
        const [, MM, rM, iM, OM, SM] = this.board;
        let jM = {
          open: !0,
          orders: MM.map(br),
          tracked: rM,
          sellLines: iM,
          level: OM,
          goldOwned: SM,
          delivering: [],
          tab: this.tab,
          selectedSlot: this.selectedSlot,
          selectedWood: this.selectedWood,
          line: this.line
        };
        for (const aM of this.commands.getPending()) jM = wr(jM, aM);
        return jM
      }
      queue(MM) {
        this.commands.push(MM), this.set(this.getBoardView())
      }
    }
    var Rr = iM(1440),
      pr = iM(2084);
    const Wr = "Gold Coin";

    function sr(MM) {
      let {
        amount: rM,
        item: iM = Wr,
        sQ: OM,
        inTile: SM = !1,
        iconRef: jM
      } = MM;
      return (0, CM.jsx)(Rr.i, {
        delayShow: 200,
        hoverOnly: SM,
        placement: "top",
        tooltipClassName: "GreenvilleChipTooltipBox",
        tooltipInner: (0, CM.jsx)(Dr, {
          item: iM,
          amount: rM,
          sQ: OM
        }),
        children: (0, CM.jsxs)("span", {
          className: hM()("GreenvilleBoardChip", {
            Short: void 0 !== OM && OM < rM
          }),
          children: [(0, CM.jsx)("span", {
            ref: jM,
            className: "GreenvilleBoardChipIcon",
            children: (0, CM.jsx)(jr, {
              item: iM
            })
          }), rM.toLocaleString()]
        })
      })
    }

    function Dr(MM) {
      let {
        item: rM,
        amount: iM,
        sQ: OM
      } = MM;
      const {
        t: SM
      } = (0, UM.A)(), jM = (0, pr.f)("itemInfo", (MM => MM[rM]));
      return (0, CM.jsxs)("div", {
        className: "GreenvilleChipTooltip",
        children: [(0, CM.jsxs)("div", {
          className: "GreenvilleChipTooltipHeader",
          children: [(0, CM.jsx)("span", {
            className: "GreenvilleChipTooltipIcon",
            children: (0, CM.jsx)(jr, {
              item: rM
            })
          }), (0, CM.jsx)(Sr, {
            item: rM,
            className: "GreenvilleChipTooltipName"
          })]
        }), void 0 !== (null === jM || void 0 === jM ? void 0 : jM.description) && (0, CM.jsx)(ir.b, {
          text: jM.description,
          className: "GreenvilleChipTooltipDescription"
        }), void 0 !== OM && (0, CM.jsxs)("div", {
          className: hM()("GreenvilleChipTooltipHeld", {
            Short: OM < iM
          }),
          children: [(0, CM.jsx)("span", {
            className: "GreenvilleChipTooltipLabel",
            children: SM("greenvilleGame:boardYouHave")
          }), (0, CM.jsxs)("span", {
            className: "GreenvilleChipTooltipCount",
            children: [(0, CM.jsx)("span", {
              className: "GreenvilleChipTooltipHeldAmount",
              children: OM.toLocaleString()
            }), ` / ${iM.toLocaleString()}`]
          }), (0, CM.jsx)("span", {
            className: "GreenvilleChipTooltipMeter",
            children: (0, CM.jsx)("span", {
              style: {
                width: (iM > 0 ? 100 * Math.min(1, OM / iM) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function kr(MM) {
      let {
        gold: rM,
        children: iM
      } = MM;
      const OM = (0, PM.useRef)(null);
      var SM;
      return SM = OM, (0, PM.useLayoutEffect)((() => {
        const MM = SM.current;
        return AM = MM, () => {
          AM === MM && (AM = null)
        }
      }), [SM]), (0, CM.jsxs)("div", {
        className: "GreenvilleBoardWallet",
        children: [iM, (0, CM.jsx)(sr, {
          amount: rM,
          iconRef: OM
        })]
      })
    }
    const Zr = {
      New: "lumberBoardStateNew",
      Accepted: "lumberBoardStateAccepted",
      Tracking: "lumberBoardTracking",
      Ready: "lumberBoardStateReady"
    };

    function or(MM, rM) {
      return MM.IQ ? MM.ready ? "Ready" : MM.slot === rM ? "Tracking" : "Accepted" : "New"
    }

    function fr(MM) {
      let {
        state: rM
      } = MM;
      const {
        t: iM
      } = (0, UM.A)();
      return (0, CM.jsx)("span", {
        className: hM()("GreenvilleBoardBadge GreenvilleLumberState", rM, {
          Muted: "Accepted" === rM
        }),
        children: iM(`greenvilleGame:${Zr[rM]}`)
      })
    }

    function Yr(MM) {
      let {
        order: rM
      } = MM;
      return (0, CM.jsx)("span", {
        className: "GreenvilleLumberNeeds",
        children: rM.items.map((MM => {
          let [rM, iM, OM] = MM;
          const SM = OM >= iM;
          return (0, CM.jsxs)("span", {
            className: hM()("GreenvilleLumberNeed", {
              Met: SM
            }),
            children: [(0, CM.jsx)("span", {
              className: "GreenvilleLumberNeedIcon",
              children: (0, CM.jsx)(jr, {
                item: rM
              })
            }), (0, CM.jsx)(Sr, {
              item: rM,
              className: "GreenvilleLumberNeedName"
            }), (0, CM.jsxs)("span", {
              className: "GreenvilleLumberNeedCount",
              children: [Math.min(OM, iM).toLocaleString(), "/", iM.toLocaleString()]
            }), (0, CM.jsx)("span", {
              className: "GreenvilleLumberNeedTick",
              "aria-hidden": "true",
              children: SM && "\u2713"
            })]
          }, rM)
        }))
      })
    }

    function Nr(MM) {
      let {
        order: rM,
        inTile: iM = !1
      } = MM;
      const {
        t: OM
      } = (0, UM.A)();
      return (0, CM.jsxs)("span", {
        className: "GreenvilleLumberReward",
        children: [(0, CM.jsx)(sr, {
          amount: rM.gold,
          inTile: iM
        }), (0, CM.jsx)("span", {
          className: "GreenvilleLumberExp",
          children: OM("greenvilleGame:boardExpGain", {
            exp: rM.exp
          })
        })]
      })
    }

    function Ar(MM) {
      let {
        view: rM,
        order: iM,
        controller: OM
      } = MM;
      const {
        t: SM
      } = (0, UM.A)(), {
        slot: jM,
        items: aM,
        IQ: PM,
        ready: nM
      } = iM, QM = aM.reduce(((MM, rM) => {
        let [, iM, OM] = rM;
        return MM + Math.max(0, iM - OM)
      }), 0);
      return (0, CM.jsxs)("div", {
        className: "GreenvilleBoardActions",
        children: [!PM && (0, CM.jsx)(cM.e, {
          onClick: () => {
            OM.accept(jM)
          },
          children: SM("greenvilleGame:lumberBoardAccept")
        }), PM && (0, CM.jsx)(cM.p, {
          disabled: !nM,
          loading: rM.delivering.includes(jM),
          onClick: () => {
            OM.deliver(jM)
          },
          children: SM("greenvilleGame:lumberBoardDeliver")
        }), PM && !nM && (0, CM.jsx)("span", {
          className: "GreenvilleBoardHint",
          children: SM("greenvilleGame:lumberBoardDeliverMissing", {
            count: QM
          })
        }), PM && jM !== rM.tracked && (0, CM.jsx)(cM.V, {
          onClick: () => {
            OM.track(jM)
          },
          children: SM("greenvilleGame:lumberBoardTrack")
        })]
      })
    }

    function xr(MM) {
      let {
        view: rM,
        controller: iM
      } = MM;
      const {
        t: OM
      } = (0, UM.A)(), SM = rM.orders[rM.selectedSlot], jM = or(SM, rM.tracked), aM = SM.IQ && SM.slot === rM.tracked;
      return (0, CM.jsxs)(zr, {
        icon: (0, CM.jsx)(jr, {
          item: SM.items[0][0]
        }),
        name: OM(`greenvilleGame:${SM.titleKey}`),
        badges: (0, CM.jsxs)(CM.Fragment, {
          children: [(0, CM.jsx)(fr, {
            state: jM
          }), aM && "Ready" === jM && (0, CM.jsx)(fr, {
            state: "Tracking"
          })]
        }),
        children: [(0, CM.jsx)(Yr, {
          order: SM
        }), (0, CM.jsx)("dl", {
          className: "GreenvilleBoardFacts",
          children: (0, CM.jsxs)("div", {
            children: [(0, CM.jsx)("dt", {
              children: OM("greenvilleGame:lumberBoardReward")
            }), (0, CM.jsx)("dd", {
              children: (0, CM.jsx)(Nr, {
                order: SM
              })
            })]
          })
        }), (0, CM.jsx)(Ar, {
          view: rM,
          order: SM,
          controller: iM
        })]
      })
    }

    function vr(MM) {
      let {
        view: rM,
        controller: iM
      } = MM;
      const {
        t: OM
      } = (0, UM.A)();
      return (0, CM.jsxs)(CM.Fragment, {
        children: [(0, CM.jsx)(nr, {
          className: "GreenvilleLumberTickets",
          roomy: !0,
          children: rM.orders.map((MM => {
            const SM = or(MM, rM.tracked);
            return (0, CM.jsxs)(Qr, {
              icon: (0, CM.jsx)(jr, {
                item: MM.items[0][0]
              }),
              name: OM(`greenvilleGame:${MM.titleKey}`),
              selected: MM.slot === rM.selectedSlot,
              className: hM()("GreenvilleLumberTicket", SM),
              onSelect: () => {
                iM.selectOrder(MM.slot)
              },
              children: [(0, CM.jsx)(fr, {
                state: SM
              }), (0, CM.jsx)(Yr, {
                order: MM
              }), (0, CM.jsx)(Nr, {
                order: MM,
                inTile: !0
              })]
            }, MM.slot)
          }))
        }), (0, CM.jsx)(xr, {
          view: rM,
          controller: iM
        })]
      })
    }

    function Fr(MM) {
      let {
        item: rM
      } = MM;
      return (0, CM.jsx)("span", {
        className: "GreenvilleLumberLogEnd",
        children: (0, CM.jsx)(jr, {
          item: rM
        })
      })
    }

    function Br(MM) {
      let {
        view: rM,
        controller: iM
      } = MM;
      const {
        t: OM
      } = (0, UM.A)(), [SM, jM, aM] = rM.sellLines[rM.selectedWood], PM = function(MM, rM) {
        let iM = 0,
          OM = 0;
        for (const SM of MM.orders)
          if (SM.IQ)
            for (const [MM, jM, aM] of SM.items) MM === rM && (iM += jM, OM = aM);
        return Math.min(iM, OM)
      }(rM, SM), nM = rM.sellLines.some((MM => {
        let [, rM] = MM;
        return rM > 0
      }));
      return (0, CM.jsxs)(zr, {
        icon: (0, CM.jsx)(Fr, {
          item: SM
        }),
        name: (0, CM.jsx)(Sr, {
          item: SM
        }),
        badges: jM > 0 && (0, CM.jsx)("span", {
          className: "GreenvilleBoardBadge",
          children: OM("greenvilleGame:lumberBoardSellHeld", {
            count: jM
          })
        }),
        children: [(0, CM.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, CM.jsxs)("div", {
            children: [(0, CM.jsx)("dt", {
              children: OM("greenvilleGame:boardYouHave")
            }), (0, CM.jsx)("dd", {
              children: (PM + jM).toLocaleString()
            })]
          }), (0, CM.jsxs)("div", {
            children: [(0, CM.jsx)("dt", {
              children: OM("greenvilleGame:lumberBoardSellKept")
            }), (0, CM.jsx)("dd", {
              children: PM.toLocaleString()
            })]
          }), (0, CM.jsxs)("div", {
            children: [(0, CM.jsx)("dt", {
              children: OM("greenvilleGame:lumberBoardSellSpare")
            }), (0, CM.jsx)("dd", {
              className: hM()("GreenvilleLumberSpare", {
                None: 0 === jM
              }),
              children: jM.toLocaleString()
            })]
          }), (0, CM.jsxs)("div", {
            children: [(0, CM.jsx)("dt", {
              children: OM("greenvilleGame:lumberBoardSellEach")
            }), (0, CM.jsx)("dd", {
              children: (0, CM.jsx)(sr, {
                amount: aM
              })
            })]
          })]
        }), (0, CM.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [(0, CM.jsxs)(cM.p, {
            disabled: 0 === jM,
            onClick: () => {
              iM.sell(SM)
            },
            children: [jM > 0 && OM("greenvilleGame:lumberBoardSell", {
              count: jM
            }), 0 === jM && OM(PM > 0 ? "greenvilleGame:lumberBoardSellKeptAll" : "greenvilleGame:lumberBoardSellNone")]
          }), (0, CM.jsx)(cM.e, {
            disabled: !nM,
            onClick: () => {
              iM.sell(null)
            },
            children: OM("greenvilleGame:lumberBoardSellAll")
          })]
        })]
      })
    }

    function Xr(MM) {
      let {
        view: rM,
        controller: iM
      } = MM;
      const {
        t: OM
      } = (0, UM.A)();
      return (0, CM.jsxs)(CM.Fragment, {
        children: [(0, CM.jsx)(nr, {
          className: "GreenvilleLumberWoodPile",
          children: rM.sellLines.map(((MM, SM) => {
            let [jM, aM, PM] = MM;
            return (0, CM.jsxs)(Qr, {
              icon: (0, CM.jsx)(Fr, {
                item: jM
              }),
              name: (0, CM.jsx)(Sr, {
                item: jM
              }),
              selected: SM === rM.selectedWood,
              className: hM()("GreenvilleLumberWood", {
                Spare: aM > 0
              }),
              onSelect: () => {
                iM.selectWood(SM)
              },
              children: [aM > 0 && (0, CM.jsx)("span", {
                className: "GreenvilleBoardBadge",
                children: OM("greenvilleGame:lumberBoardSellHeld", {
                  count: aM
                })
              }), (0, CM.jsx)(sr, {
                amount: PM,
                inTile: !0
              })]
            }, jM)
          }))
        }), (0, CM.jsx)(Br, {
          view: rM,
          controller: iM
        })]
      })
    }

    function Ir(MM) {
      let {
        controller: rM
      } = MM;
      const iM = (0, lM.e)(tr, rM.getView()),
        {
          t: OM
        } = (0, UM.A)(),
        SM = function(MM) {
          const {
            t: rM
          } = (0, UM.A)();
          return "delivered" === MM.kind ? rM("greenvilleGame:lumberTimbertoothThanks", {
            order: rM(`greenvilleGame:${MM.titleKey}`)
          }) : "bought" === MM.kind ? rM("greenvilleGame:lumberTimbertoothBought", {
            count: MM.count
          }) : rM("greenvilleGame:lumberBoardIntro")
        }(iM.line);
      if (0 === iM.orders.length) return null;
      const jM = iM.orders.filter((MM => MM.IQ && MM.ready)).length,
        aM = iM.sellLines.reduce(((MM, rM) => {
          let [, iM] = rM;
          return MM + iM
        }), 0);
      return (0, CM.jsxs)(ar, {
        open: iM.open,
        onDismiss: rM.dismiss,
        title: OM("greenvilleGame:lumberBoardTitle"),
        className: "GreenvilleLumberBoard",
        headerExtra: (0, CM.jsx)(kr, {
          gold: iM.goldOwned,
          children: (0, CM.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: OM("greenvilleGame:lumberBoardLevel", {
              level: iM.level
            })
          })
        }),
        tabs: (0, CM.jsx)(Pr, {
          tabs: [{
            id: "orders",
            label: OM("greenvilleGame:lumberBoardOrders"),
            badge: jM > 0 && (0, CM.jsx)("span", {
              className: "GreenvilleBoardBadge Ready",
              children: OM("greenvilleGame:lumberBoardReadyCount", {
                count: jM
              })
            })
          }, {
            id: "sell",
            label: OM("greenvilleGame:lumberBoardSellHeading"),
            badge: aM > 0 && (0, CM.jsx)("span", {
              className: "GreenvilleBoardBadge",
              children: OM("greenvilleGame:lumberBoardSellHeld", {
                count: aM
              })
            })
          }],
          selected: iM.tab,
          onSelect: rM.selectTab
        }),
        status: {
          speaker: OM("greenvilleGame:lumberTimbertoothName"),
          line: SM
        },
        children: ["orders" === iM.tab && (0, CM.jsx)(vr, {
          view: iM,
          controller: rM
        }), "sell" === iM.tab && (0, CM.jsx)(Xr, {
          view: iM,
          controller: rM
        })]
      })
    }

    function Kr(MM) {
      let {
        controller: rM
      } = MM;
      (0, lM.e)(gr, null);
      const {
        t: iM
      } = (0, UM.A)(), OM = rM.getTracker();
      return null === OM ? null : (0, CM.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, CM.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: iM(`greenvilleGame:${OM.titleKey}`)
        }), (0, CM.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: OM.items.map((MM => {
            let [rM, iM, OM] = MM;
            return (0, CM.jsxs)("li", {
              className: hM()("GreenvilleTrackerRow", {
                Done: OM >= iM
              }),
              children: [(0, CM.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, CM.jsx)(yM.b, {
                  itemName: rM,
                  amount: 0
                })
              }), (0, CM.jsx)(Sr, {
                item: rM,
                className: "GreenvilleTrackerLabel"
              }), (0, CM.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [Math.min(OM, iM), "/", iM]
              })]
            }, rM)
          }))
        }), OM.ready && (0, CM.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: iM("greenvilleGame:lumberTrackerReady")
        })]
      })
    }
    const qr = "greenvilleOreBuyerView",
      Tr = {
        open: !1,
        lines: [],
        selected: 0,
        level: 1,
        goldOwned: 0
      };
    class Vr extends IM {
      constructor(MM, rM, iM, OM) {
        super(Tr, MM, rM), this.sales = void 0, this.serverLines = [], this.select = MM => {
          this.set({
            ...this.getView(),
            selected: MM
          })
        }, this.sell = MM => {
          this.getView().lines.some((rM => {
            let [iM, , , , OM] = rM;
            return OM > 0 && (null === MM || MM === iM)
          })) && (this.sales.push(MM), this.set({
            ...this.getView(),
            lines: this.getLines()
          }))
        }, this.onAnswersTimedOut = () => {
          const MM = this.getView();
          MM.open && this.set({
            ...MM,
            lines: this.getLines()
          })
        }, this.sales = new BM(OM, iM, this.onAnswersTimedOut)
      }
      GL(MM) {
        if ("close" !== MM[0]) {
          const [, rM, iM, OM] = MM, SM = "open" === MM[0] && MM[4];
          SM && this.sales.takeAnswer();
          const jM = this.getView();
          if ((SM || "refresh" === MM[0]) && !jM.open) return;
          this.serverLines = rM;
          const aM = rM.findIndex((MM => MM[4] > 0));
          this.show({
            open: !0,
            lines: this.getLines(),
            selected: jM.open ? jM.selected : Math.max(0, aM),
            level: iM,
            goldOwned: OM
          })
        } else this.close()
      }
      dropPresses() {
        this.sales.clear()
      }
      getLines() {
        const MM = this.sales.getPending();
        return this.serverLines.map((rM => {
          const [iM, OM, SM, jM, , aM] = rM;
          return MM.some((MM => null === MM || MM === iM)) ? [iM, OM, SM, jM, 0, aM] : rM
        }))
      }
    }

    function cr(MM) {
      let {
        line: rM,
        level: iM
      } = MM;
      const {
        t: OM
      } = (0, UM.A)(), [, , , SM, jM, aM] = rM;
      return (0, CM.jsxs)(CM.Fragment, {
        children: [jM > 0 && (0, CM.jsx)("span", {
          className: "GreenvilleBoardBadge",
          children: OM("greenvilleGame:oreBuyerHeld", {
            count: jM
          })
        }), SM > iM && (0, CM.jsxs)("span", {
          className: "GreenvilleBoardBadge Muted",
          children: [(0, CM.jsx)(VM.b, {
            name: "lock"
          }), OM("greenvilleGame:boardLevelBadge", {
            level: SM
          })]
        }), SM <= iM && aM && (0, CM.jsx)("span", {
          className: "GreenvilleBoardBadge GreenvilleOreRare",
          children: OM("greenvilleGame:oreBuyerRare")
        })]
      })
    }

    function Mi(MM) {
      let {
        line: rM
      } = MM;
      return (0, CM.jsx)("span", {
        className: "GreenvilleOreSample",
        children: (0, CM.jsx)(jr, {
          item: rM[0]
        })
      })
    }

    function ri(MM) {
      let {
        view: rM,
        controller: iM
      } = MM;
      const {
        t: OM
      } = (0, UM.A)(), SM = rM.lines[rM.selected], [jM, aM, PM, nM, QM, zM] = SM, LM = nM > rM.level, mM = rM.lines.some((MM => MM[4] > 0));
      return (0, CM.jsxs)(zr, {
        icon: (0, CM.jsx)(Mi, {
          line: SM
        }),
        name: (0, CM.jsx)(Sr, {
          item: jM
        }),
        badges: (0, CM.jsx)(cr, {
          line: SM,
          level: rM.level
        }),
        children: [(0, CM.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, CM.jsxs)("div", {
            children: [(0, CM.jsx)("dt", {
              children: OM("greenvilleGame:boardYouHave")
            }), (0, CM.jsx)("dd", {
              className: hM()("GreenvilleOreHeld", {
                None: 0 === QM
              }),
              children: QM.toLocaleString()
            })]
          }), (0, CM.jsxs)("div", {
            children: [(0, CM.jsx)("dt", {
              children: OM("greenvilleGame:oreBuyerPriceEach")
            }), (0, CM.jsx)("dd", {
              children: (0, CM.jsx)(sr, {
                amount: aM
              })
            })]
          }), (0, CM.jsxs)("div", {
            children: [(0, CM.jsx)("dt", {
              children: OM("greenvilleGame:oreBuyerExpEach")
            }), (0, CM.jsxs)("dd", {
              className: "GreenvilleOreExp",
              children: ["+", PM]
            })]
          })]
        }), zM && (0, CM.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: OM("greenvilleGame:oreBuyerLegendary")
        }), LM && (0, CM.jsxs)(CM.Fragment, {
          children: [(0, CM.jsx)("p", {
            className: "GreenvilleBoardHint",
            children: OM("greenvilleGame:oreBuyerLocked", {
              level: nM
            })
          }), (0, CM.jsx)("p", {
            className: "GreenvilleBoardDescription",
            children: OM("greenvilleGame:oreBuyerTip")
          })]
        }), (0, CM.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [(0, CM.jsxs)(cM.p, {
            disabled: 0 === QM,
            onClick: () => {
              iM.sell(jM)
            },
            children: [QM > 0 && OM("greenvilleGame:oreBuyerSell", {
              count: QM
            }), 0 === QM && OM("greenvilleGame:oreBuyerSellNone")]
          }), (0, CM.jsx)(cM.e, {
            disabled: !mM,
            onClick: () => {
              iM.sell(null)
            },
            children: OM("greenvilleGame:oreBuyerSellAll")
          })]
        })]
      })
    }

    function ii(MM) {
      let {
        controller: rM
      } = MM;
      const iM = (0, lM.e)(qr, rM.getView()),
        {
          t: OM
        } = (0, UM.A)();
      return 0 === iM.lines.length ? null : (0, CM.jsxs)(ar, {
        open: iM.open,
        onDismiss: rM.dismiss,
        title: OM("greenvilleGame:oreBuyerTitle"),
        className: "GreenvilleOreBuyerBoard",
        headerExtra: (0, CM.jsx)(kr, {
          gold: iM.goldOwned,
          children: (0, CM.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: OM("greenvilleGame:oreBuyerLevel", {
              level: iM.level
            })
          })
        }),
        status: {
          speaker: OM("greenvilleGame:oreBuyerName"),
          line: OM("greenvilleGame:oreBuyerGreet")
        },
        children: [(0, CM.jsx)(nr, {
          roomy: !0,
          children: iM.lines.map(((MM, SM) => {
            const [jM, aM, PM, nM, QM, zM] = MM;
            return (0, CM.jsxs)(Qr, {
              icon: (0, CM.jsx)(Mi, {
                line: MM
              }),
              name: (0, CM.jsx)(Sr, {
                item: jM
              }),
              selected: SM === iM.selected,
              locked: nM > iM.level && 0 === QM,
              className: hM()("GreenvilleOreTile", {
                Legendary: zM
              }),
              onSelect: () => {
                rM.select(SM)
              },
              children: [(0, CM.jsx)(cr, {
                line: MM,
                level: iM.level
              }), (0, CM.jsxs)("span", {
                className: "GreenvilleOrePrice",
                children: [(0, CM.jsx)(sr, {
                  amount: aM,
                  inTile: !0
                }), (0, CM.jsx)("span", {
                  className: "GreenvilleOreExp",
                  children: OM("greenvilleGame:boardExpGain", {
                    exp: PM
                  })
                })]
              })]
            }, jM)
          }))
        }), (0, CM.jsx)(ri, {
          view: iM,
          controller: rM
        })]
      })
    }
    const Oi = {
      kind: "greet"
    };

    function Si(MM) {
      return MM.every((MM => {
        let [, , rM, iM] = MM;
        return iM >= rM
      }))
    }

    function ji(MM) {
      let [rM, iM, OM, SM, jM, aM] = MM;
      return {
        slot: rM,
        nameKey: iM,
        needs: OM,
        exp: SM,
        gold: jM,
        IQ: aM,
        ready: Si(OM)
      }
    }

    function ai(MM, rM) {
      let [, , iM, OM] = MM;
      return rM ? iM : iM - OM
    }

    function Pi(MM, rM) {
      let [iM, OM] = MM;
      return iM === rM.item && null !== OM === rM.golden
    }

    function ni(MM, rM) {
      return (rM.golden ? MM.goldenLines : MM.sellLines).find((MM => Pi(MM, rM)))
    }

    function Qi(MM, rM) {
      return "sell" === rM.action ? mi(function(MM, rM, iM) {
        let OM = MM.goldOwned;
        const SM = MM => {
          if (null !== rM && !Pi(MM, rM)) return MM;
          const [SM, jM, aM, PM, nM] = MM, QM = ai(MM, iM);
          return OM += QM * nM, [SM, jM, aM - QM, iM ? 0 : PM, nM]
        };
        return {
          ...MM,
          sellLines: MM.sellLines.map(SM),
          goldenLines: zi(MM.goldenLines.map(SM)),
          goldOwned: OM
        }
      }(MM, rM.kind, rM.all)) : "accept" === rM.action ? function(MM, rM) {
        var iM;
        const {
          needs: OM
        } = MM.orders[rM], SM = MM => {
          const [rM, iM, SM, jM, aM] = MM, PM = Li(OM, MM);
          return PM ? [rM, iM, SM, Math.min(SM, jM + PM[2]), aM] : MM
        };
        return {
          ...MM,
          tracked: null !== (iM = MM.tracked) && void 0 !== iM ? iM : rM,
          orders: MM.orders.map((MM => MM.slot === rM ? {
            ...MM,
            IQ: !0
          } : MM)),
          sellLines: MM.sellLines.map(SM),
          goldenLines: MM.goldenLines.map(SM)
        }
      }(MM, rM.slot) : "track" === rM.action ? {
        ...MM,
        tracked: rM.slot
      } : mi(function(MM, rM) {
        const {
          needs: iM
        } = MM.orders[rM], OM = MM => {
          const [rM, OM, SM, jM, aM] = MM, PM = Li(iM, MM);
          return PM ? [rM, OM, SM - PM[2], jM - PM[2], aM] : MM
        };
        return {
          ...MM,
          sellLines: MM.sellLines.map(OM),
          goldenLines: zi(MM.goldenLines.map(OM)),
          delivering: [...MM.delivering, rM]
        }
      }(MM, rM.slot))
    }

    function zi(MM) {
      return MM.filter((MM => {
        let [, , rM] = MM;
        return rM > 0
      }))
    }

    function Li(MM, rM) {
      let [iM, OM] = rM;
      return MM.find((MM => {
        let [rM, SM] = MM;
        return rM === iM && SM === OM
      }))
    }

    function mi(MM) {
      const rM = (rM, iM) => {
          const OM = (null === iM ? MM.sellLines : MM.goldenLines).find((MM => {
            let [iM] = MM;
            return iM === rM
          }));
          return OM ? OM[2] : 0
        },
        iM = MM.orders.map((iM => {
          if (MM.delivering.includes(iM.slot)) return iM;
          const OM = iM.needs.map((MM => {
            let [iM, OM, SM] = MM;
            return [iM, OM, SM, rM(iM, OM)]
          }));
          return {
            ...iM,
            needs: OM,
            ready: Si(OM)
          }
        }));
      return {
        ...MM,
        orders: iM
      }
    }

    function Hi(MM) {
      let [, , , rM, iM] = MM;
      return [...rM, ...iM].reduce(((MM, rM) => {
        let [, , iM] = rM;
        return MM + iM
      }), 0)
    }
    const Ji = "greenvilleFarmBoardView",
      di = "greenvilleFarmTrackerView",
      yi = {
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
        line: Oi
      };
    class li extends IM {
      constructor(MM, rM, iM, OM, SM) {
        super(yi, MM, iM), this.publishTracker = rM, this.board = null, this.commands = void 0, this.tracker = null, this.tab = "orders", this.selectedOrder = 0, this.selectedProduce = null, this.line = Oi, this.selectTab = MM => {
          this.tab = MM, this.set(this.getBoardView())
        }, this.selectOrder = MM => {
          this.selectedOrder = MM, this.set(this.getBoardView())
        }, this.selectProduce = MM => {
          this.selectedProduce = MM, this.set(this.getBoardView())
        }, this.accept = MM => {
          this.getView().orders[MM].IQ || this.queue({
            action: "accept",
            slot: MM
          })
        }, this.track = MM => {
          const rM = this.getView();
          rM.tracked !== MM && rM.orders[MM].IQ && this.queue({
            action: "track",
            slot: MM
          })
        }, this.deliver = MM => {
          const rM = this.getView(),
            iM = rM.orders[MM];
          iM.IQ && iM.ready && !rM.delivering.includes(MM) && this.queue({
            action: "deliver",
            slot: MM
          })
        }, this.sell = (MM, rM) => {
          this.queueSale({
            item: MM,
            golden: rM
          }, !1)
        }, this.sellSpare = () => {
          this.queueSale(null, !1)
        }, this.sellAll = () => {
          this.queueSale(null, !0)
        }, this.onAnswersTimedOut = () => {
          this.getView().open && this.set(this.settleView())
        }, this.commands = new BM(SM, (MM => {
          OM(function(MM) {
            return "sell" !== MM.action ? `${jM}${MM.action} ${MM.slot}` : MM.all ? `${jM}sellAll` : null === MM.kind ? `${jM}sell` : `${jM}${MM.kind.golden?"sellGolden":"sell"} ${MM.kind.item}`
          }(MM))
        }), this.onAnswersTimedOut)
      }
      getTracker() {
        return this.tracker
      }
      GL(MM) {
        if ("open" === MM[0]) {
          const iM = MM[7],
            OM = iM ? this.commands.takeAnswer() : null,
            SM = !this.getView().open;
          if (iM && SM) return;
          const jM = this.board;
          if (this.board = MM, SM) this.onReopened();
          else if (null !== OM) {
            var rM;
            this.line = null !== (rM = function(MM, rM, iM) {
              const OM = iM[6] - rM[6];
              if (OM <= 0) return null;
              if ("deliver" === MM.action) return {
                kind: "delivered",
                nameKey: rM[1][MM.slot][1],
                gold: OM
              };
              const SM = Hi(rM) - Hi(iM);
              return "sell" === MM.action && SM > 0 ? {
                kind: "sold",
                count: SM,
                gold: OM
              } : null
            }(OM, jM, MM)) && void 0 !== rM ? rM : this.line
          }
          this.show(this.settleView())
        } else "close" === MM[0] ? this.close() : (this.tracker = null === MM[1] ? null : ji(MM[1]), this.publishTracker(this.tracker))
      }
      dropPresses() {
        this.commands.clear(), this.board = null
      }
      onReopened() {
        this.line = Oi;
        const MM = this.toView(this.board).orders.find((MM => MM.IQ && MM.ready));
        MM && (this.tab = "orders", this.selectedOrder = MM.slot)
      }
      queueSale(MM, rM) {
        const {
          sellLines: iM,
          goldenLines: OM
        } = this.getView();
        [...iM, ...OM].some((iM => ai(iM, rM) > 0 && (null === MM || Pi(iM, MM)))) && this.queue({
          action: "sell",
          kind: MM,
          all: rM
        })
      }
      toView(MM) {
        let [, rM, iM, OM, SM, jM, aM] = MM;
        return {
          open: !0,
          orders: rM.map(ji),
          tracked: iM,
          sellLines: OM,
          goldenLines: SM,
          level: jM,
          goldOwned: aM,
          delivering: [],
          tab: this.tab,
          selectedOrder: this.selectedOrder,
          selectedProduce: this.selectedProduce,
          line: this.line
        }
      }
      getBoardView() {
        let MM = this.toView(this.board);
        for (const rM of this.commands.getPending()) MM = Qi(MM, rM);
        return {
          ...MM,
          selectedProduce: this.pickProduce(MM)
        }
      }
      settleView() {
        const MM = this.getBoardView();
        return this.commands.dL() && (this.selectedProduce = MM.selectedProduce), MM
      }
      pickProduce(MM) {
        var rM, iM;
        const OM = this.selectedProduce;
        if (OM && ni(MM, OM)) return OM;
        if (OM) return {
          item: OM.item,
          golden: !1
        };
        const [SM, jM] = null !== (rM = null !== (iM = MM.goldenLines[0]) && void 0 !== iM ? iM : MM.sellLines.find((MM => {
          let [, , rM] = MM;
          return rM > 0
        }))) && void 0 !== rM ? rM : MM.sellLines[0];
        return {
          item: SM,
          golden: null !== jM
        }
      }
      queue(MM) {
        this.commands.push(MM), this.set(this.getBoardView())
      }
    }
    var Ei = iM(1424);

    function Ui() {
      const MM = (0, PM.useRef)(null);
      return (0, Ei.e)(MM), (0, CM.jsx)("span", {
        ref: MM,
        className: "GreenvilleFarmSparkle",
        "aria-hidden": "true"
      })
    }

    function Gi(MM) {
      let {
        item: rM,
        golden: iM
      } = MM;
      return (0, CM.jsx)("span", {
        className: hM()("GreenvilleFarmProduce", {
          Golden: iM
        }),
        children: (0, CM.jsx)(jr, {
          item: rM
        })
      })
    }

    function Ci(MM) {
      let {
        item: rM,
        goldenName: iM
      } = MM;
      return null !== iM ? (0, CM.jsx)("span", {
        className: "GreenvilleFarmGoldenName",
        children: iM
      }) : (0, CM.jsx)(Sr, {
        item: rM
      })
    }
    const ei = {
      New: "greenvilleGame:farmBoardNew",
      Accepted: "greenvilleGame:farmBoardAccepted",
      Tracking: "greenvilleGame:farmOrderTracking",
      Ready: "greenvilleGame:farmBoardReady"
    };

    function bi(MM, rM) {
      return MM.IQ ? MM.ready ? "Ready" : rM ? "Tracking" : "Accepted" : "New"
    }

    function wi(MM) {
      return MM.needs.some((MM => {
        let [, rM] = MM;
        return null !== rM
      }))
    }

    function ti(MM) {
      let {
        order: rM
      } = MM;
      const [iM, OM] = rM.needs[0];
      return (0, CM.jsx)(Gi, {
        item: iM,
        golden: null !== OM
      })
    }

    function gi(MM) {
      let {
        state: rM
      } = MM;
      const {
        t: iM
      } = (0, UM.A)();
      return (0, CM.jsx)("span", {
        className: hM()("GreenvilleBoardBadge GreenvilleFarmState", rM),
        children: iM(ei[rM])
      })
    }

    function ui(MM) {
      let {
        needs: rM
      } = MM;
      return (0, CM.jsx)("span", {
        className: "GreenvilleFarmNeeds",
        children: rM.map((MM => {
          let [rM, iM, OM, SM] = MM;
          const jM = SM >= OM;
          return (0, CM.jsxs)("span", {
            className: hM()("GreenvilleFarmNeed", {
              Met: jM,
              Golden: null !== iM
            }),
            children: [(0, CM.jsx)("span", {
              className: "GreenvilleFarmNeedIcon",
              children: (0, CM.jsx)(Gi, {
                item: rM,
                golden: null !== iM
              })
            }), (0, CM.jsx)("span", {
              className: "GreenvilleFarmNeedName",
              children: (0, CM.jsx)(Ci, {
                item: rM,
                goldenName: iM
              })
            }), (0, CM.jsxs)("span", {
              className: "GreenvilleFarmNeedCount",
              children: [jM && "\u2713 ", Math.min(SM, OM), "/", OM]
            })]
          }, `${rM}|${iM}`)
        }))
      })
    }

    function Ri(MM) {
      let {
        order: rM,
        inTile: iM = !1
      } = MM;
      const {
        t: OM
      } = (0, UM.A)();
      return (0, CM.jsxs)("span", {
        className: "GreenvilleFarmReward",
        children: [(0, CM.jsx)(sr, {
          amount: rM.gold,
          inTile: iM
        }), (0, CM.jsx)("span", {
          className: "GreenvilleFarmExp",
          children: OM("greenvilleGame:boardExpGain", {
            exp: rM.exp
          })
        })]
      })
    }

    function Wi(MM) {
      let {
        view: rM,
        controller: iM
      } = MM;
      const {
        t: OM
      } = (0, UM.A)(), SM = rM.orders[rM.selectedOrder], {
        slot: jM,
        nameKey: aM,
        needs: PM,
        IQ: nM,
        ready: QM
      } = SM, zM = jM === rM.tracked, LM = PM.reduce(((MM, rM) => {
        let [, , iM, OM] = rM;
        return MM + Math.max(0, iM - OM)
      }), 0);
      return (0, CM.jsxs)(zr, {
        icon: (0, CM.jsx)(ti, {
          order: SM
        }),
        name: OM(aM),
        badges: (0, CM.jsxs)(CM.Fragment, {
          children: [(0, CM.jsx)(gi, {
            state: bi(SM, zM)
          }), wi(SM) && (0, CM.jsx)("span", {
            className: "GreenvilleBoardBadge GreenvilleFarmGoldenBadge",
            children: OM("greenvilleGame:farmBoardGolden")
          })]
        }),
        children: [(0, CM.jsx)(ui, {
          needs: PM
        }), (0, CM.jsx)("dl", {
          className: "GreenvilleBoardFacts",
          children: (0, CM.jsxs)("div", {
            children: [(0, CM.jsx)("dt", {
              children: OM("greenvilleGame:farmBoardReward")
            }), (0, CM.jsx)("dd", {
              children: (0, CM.jsx)(Ri, {
                order: SM
              })
            })]
          })
        }), (0, CM.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [!nM && (0, CM.jsx)(cM.e, {
            onClick: () => {
              iM.accept(jM)
            },
            children: OM("greenvilleGame:farmOrderAccept")
          }), nM && zM && (0, CM.jsxs)("span", {
            className: "GreenvilleFarmTracking",
            children: [(0, CM.jsx)(VM.b, {
              name: "crosshairs"
            }), OM("greenvilleGame:farmOrderTracking")]
          }), nM && !zM && (0, CM.jsx)(cM.V, {
            onClick: () => {
              iM.track(jM)
            },
            children: OM("greenvilleGame:farmOrderTrack")
          }), nM && (0, CM.jsx)(cM.p, {
            disabled: !QM,
            loading: rM.delivering.includes(jM),
            onClick: () => {
              iM.deliver(jM)
            },
            children: OM("greenvilleGame:farmOrderDeliver")
          }), nM && !QM && (0, CM.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: OM("greenvilleGame:farmBoardMissing", {
              count: LM
            })
          })]
        })]
      })
    }

    function si(MM) {
      let {
        view: rM,
        controller: iM
      } = MM;
      const {
        t: OM
      } = (0, UM.A)();
      return (0, CM.jsxs)(CM.Fragment, {
        children: [(0, CM.jsx)(nr, {
          roomy: !0,
          children: rM.orders.map((MM => (0, CM.jsxs)(Qr, {
            icon: (0, CM.jsx)(ti, {
              order: MM
            }),
            name: OM(MM.nameKey),
            selected: MM.slot === rM.selectedOrder,
            className: hM()("GreenvilleFarmBasket", {
              WantsGolden: wi(MM)
            }),
            onSelect: () => {
              iM.selectOrder(MM.slot)
            },
            children: [(0, CM.jsx)(gi, {
              state: bi(MM, MM.slot === rM.tracked)
            }), (0, CM.jsx)(ui, {
              needs: MM.needs
            }), (0, CM.jsx)(Ri, {
              order: MM,
              inTile: !0
            })]
          }, MM.slot)))
        }), (0, CM.jsx)(Wi, {
          view: rM,
          controller: iM
        })]
      })
    }

    function Di(MM) {
      let {
        line: rM,
        selected: iM,
        onSelect: OM
      } = MM;
      const [SM, jM, aM, , PM] = rM, nM = null !== jM;
      return (0, CM.jsxs)(Qr, {
        icon: (0, CM.jsx)(Gi, {
          item: SM,
          golden: nM
        }),
        name: (0, CM.jsx)(Ci, {
          item: SM,
          goldenName: jM
        }),
        selected: iM,
        className: hM()("GreenvilleFarmCrate", {
          Golden: nM,
          Empty: 0 === aM
        }),
        onSelect: OM,
        children: [nM && (0, CM.jsx)(Ui, {}), aM > 0 && (0, CM.jsxs)("span", {
          className: "GreenvilleBoardBadge GreenvilleFarmHeld",
          children: ["\xd7", aM]
        }), (0, CM.jsx)(sr, {
          amount: PM,
          inTile: !0
        })]
      })
    }

    function ki(MM) {
      let {
        view: rM,
        controller: iM
      } = MM;
      const {
        t: OM
      } = (0, UM.A)(), SM = [...rM.sellLines, ...rM.goldenLines], jM = SM.some((MM => ai(MM, !1) > 0)), aM = SM.some((MM => ai(MM, !0) > 0));
      return (0, CM.jsxs)("div", {
        className: "GreenvilleFarmSign",
        children: [(0, CM.jsx)("h3", {
          className: "GreenvilleFarmSignBoard",
          children: OM("greenvilleGame:farmBoardPrices")
        }), (0, CM.jsxs)("div", {
          className: "GreenvilleFarmSignActions",
          children: [(0, CM.jsx)(cM.e, {
            disabled: !jM,
            onClick: iM.sellSpare,
            children: OM("greenvilleGame:farmStallSellSurplus")
          }), (0, CM.jsx)(cM.J, {
            disabled: !aM,
            onClick: iM.sellAll,
            children: OM("greenvilleGame:farmStallSellAll")
          })]
        })]
      })
    }

    function Zi(MM) {
      let {
        line: rM,
        controller: iM
      } = MM;
      const {
        t: OM
      } = (0, UM.A)(), [SM, jM, aM, PM, nM] = rM, QM = null !== jM, zM = ai(rM, !1);
      return (0, CM.jsxs)(zr, {
        icon: (0, CM.jsx)(Gi, {
          item: SM,
          golden: QM
        }),
        name: (0, CM.jsx)(Ci, {
          item: SM,
          goldenName: jM
        }),
        badges: QM && (0, CM.jsx)("span", {
          className: "GreenvilleBoardBadge GreenvilleFarmGoldenBadge",
          children: OM("greenvilleGame:farmBoardGolden")
        }),
        children: [QM && (0, CM.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: OM("greenvilleGame:farmBoardGoldenBlurb")
        }), (0, CM.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, CM.jsxs)("div", {
            children: [(0, CM.jsx)("dt", {
              children: OM("greenvilleGame:boardYouHave")
            }), (0, CM.jsx)("dd", {
              children: aM
            })]
          }), PM > 0 && (0, CM.jsxs)("div", {
            children: [(0, CM.jsx)("dt", {
              children: OM("greenvilleGame:farmBoardKept")
            }), (0, CM.jsx)("dd", {
              children: PM
            })]
          }), (0, CM.jsxs)("div", {
            children: [(0, CM.jsx)("dt", {
              children: OM("greenvilleGame:farmBoardSpare")
            }), (0, CM.jsx)("dd", {
              children: zM
            })]
          }), (0, CM.jsxs)("div", {
            children: [(0, CM.jsx)("dt", {
              children: OM("greenvilleGame:farmBoardPriceEach")
            }), (0, CM.jsx)("dd", {
              children: (0, CM.jsx)(sr, {
                amount: nM
              })
            })]
          })]
        }), (0, CM.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [zM > 0 && (0, CM.jsx)(cM.p, {
            onClick: () => {
              iM.sell(SM, QM)
            },
            children: OM("greenvilleGame:farmBoardSell", {
              count: zM
            })
          }), 0 === aM && (0, CM.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: OM("greenvilleGame:farmStallNothing")
          }), aM > 0 && 0 === zM && (0, CM.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: OM("greenvilleGame:farmBoardAllKept")
          })]
        })]
      })
    }

    function oi(MM) {
      let {
        view: rM,
        produce: iM,
        controller: OM
      } = MM;
      const {
        t: SM
      } = (0, UM.A)(), jM = MM => {
        const [rM, SM] = MM;
        return (0, CM.jsx)(Di, {
          line: MM,
          selected: Pi(MM, iM),
          onSelect: () => {
            OM.selectProduce({
              item: rM,
              golden: null !== SM
            })
          }
        }, `${rM}|${null!==SM}`)
      };
      return (0, CM.jsxs)(CM.Fragment, {
        children: [(0, CM.jsxs)(nr, {
          children: [(0, CM.jsx)(ki, {
            view: rM,
            controller: OM
          }), rM.goldenLines.length > 0 && (0, CM.jsxs)(CM.Fragment, {
            children: [(0, CM.jsx)("h4", {
              className: "GreenvilleFarmSection Golden",
              children: SM("greenvilleGame:farmBoardGoldenCrops")
            }), rM.goldenLines.map(jM), (0, CM.jsx)("hr", {
              className: "GreenvilleFarmSection"
            })]
          }), rM.sellLines.map(jM)]
        }), (0, CM.jsx)(Zi, {
          line: ni(rM, iM),
          controller: OM
        })]
      })
    }

    function fi(MM) {
      let {
        controller: rM
      } = MM;
      const iM = (0, lM.e)(Ji, rM.getView()),
        {
          t: OM
        } = (0, UM.A)(),
        SM = function(MM) {
          const {
            t: rM
          } = (0, UM.A)();
          return "delivered" === MM.kind ? rM("greenvilleGame:tillieDelivered", {
            order: rM(MM.nameKey),
            gold: MM.gold
          }) : "sold" === MM.kind ? rM("greenvilleGame:tillieSold", {
            count: MM.count,
            gold: MM.gold
          }) : rM("greenvilleGame:tillieGreet")
        }(iM.line),
        jM = iM.selectedProduce;
      if (null === jM) return null;
      const aM = function(MM) {
        return MM.orders.filter((MM => MM.IQ && MM.ready)).length
      }(iM);
      return (0, CM.jsxs)(ar, {
        open: iM.open,
        onDismiss: rM.dismiss,
        title: OM("greenvilleGame:farmBoardTitle"),
        className: "GreenvilleFarmBoard",
        headerExtra: (0, CM.jsx)(kr, {
          gold: iM.goldOwned,
          children: (0, CM.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: OM("greenvilleGame:farmBoardLevel", {
              level: iM.level
            })
          })
        }),
        tabs: (0, CM.jsx)(Pr, {
          tabs: [{
            id: "orders",
            label: OM("greenvilleGame:farmBoardOrdersTab"),
            badge: aM > 0 && (0, CM.jsx)("span", {
              className: "GreenvilleBoardBadge GreenvilleFarmReadyBadge",
              children: OM("greenvilleGame:farmBoardReadyCount", {
                count: aM
              })
            })
          }, {
            id: "stall",
            label: OM("greenvilleGame:farmBoardStallTab")
          }],
          selected: iM.tab,
          onSelect: rM.selectTab
        }),
        status: {
          speaker: OM("greenvilleGame:farmTillieName"),
          line: SM
        },
        children: ["orders" === iM.tab && (0, CM.jsx)(si, {
          view: iM,
          controller: rM
        }), "stall" === iM.tab && (0, CM.jsx)(oi, {
          view: iM,
          produce: jM,
          controller: rM
        })]
      })
    }
    var Yi = iM(39485);

    function Ni(MM) {
      let {
        controller: rM
      } = MM;
      (0, lM.e)(di, null);
      const {
        t: iM
      } = (0, UM.A)(), OM = rM.getTracker();
      return null === OM ? null : (0, CM.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, CM.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: iM(OM.nameKey)
        }), (0, CM.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: OM.needs.map((MM => {
            let [rM, OM, SM, jM] = MM;
            return (0, CM.jsxs)("li", {
              className: hM()("GreenvilleTrackerRow", {
                Done: jM >= SM,
                Golden: null !== OM
              }),
              children: [(0, CM.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, CM.jsx)(yM.b, {
                  itemName: rM,
                  amount: 0
                })
              }), (0, CM.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: null !== OM && void 0 !== OM ? OM : (0, Yi.e)(iM, rM)
              }), (0, CM.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [Math.min(jM, SM), "/", SM]
              })]
            }, `${rM}|${OM}`)
          }))
        }), OM.ready && (0, CM.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: iM("greenvilleGame:farmOrderReady")
        })]
      })
    }
    const Ai = "greenvillePlaceView",
      xi = "greenvilleMoodView";
    class vi {
      constructor(MM, rM) {
        this.publishPlace = MM, this.publishMood = rM, this.place = null, this.mood = null
      }
      getPlace() {
        return this.place
      }
      getMood() {
        return this.mood
      }
      GL(MM) {
        const rM = performance.now();
        switch (MM[0]) {
          case "hudMood": {
            const [, iM, OM, SM, jM, aM, PM] = MM;
            return this.mood = {
              energy: iM,
              earningsPercent: OM,
              breakEvenEnergy: SM,
              restedEndsAt: jM > 0 ? rM + jM : 0,
              adBoosted: aM,
              luckPercent: PM
            }, void this.publishMood(this.mood)
          }
          case "hudTown": {
            const [rM, iM, OM] = MM;
            this.place = {
              kind: rM,
              place: iM,
              levels: OM
            };
            break
          }
          case "hudJob": {
            const [rM, iM, OM, SM, jM, aM, PM, nM, QM] = MM;
            this.place = {
              kind: rM,
              place: iM,
              job: OM,
              level: SM,
              expInto: jM,
              expNeeded: aM,
              status: null === PM ? null : Fi(PM),
              next: null === nM ? null : {
                item: nM[0],
                nameKey: nM[1],
                level: nM[2]
              },
              stats: QM.map((MM => {
                let [rM, iM, OM, SM] = MM;
                return {
                  stat: rM,
                  value: iM,
                  max: OM,
                  boosted: SM
                }
              }))
            };
            break
          }
          case "hudHome": {
            const [iM, OM, SM, jM, aM, PM, nM, QM, zM] = MM;
            this.place = {
              kind: iM,
              houseName: OM,
              ownerName: SM,
              isOwner: jM,
              visitorsAllowed: aM,
              pvp: PM,
              parkour: nM,
              runStartedAt: QM < 0 ? null : this.getRunStart(rM - QM),
              bestTimes: zM.map((MM => {
                let [rM, iM] = MM;
                return {
                  playerName: rM,
                  seconds: iM
                }
              }))
            };
            break
          }
          case "hudSpleef": {
            const [rM, iM, OM] = MM;
            this.place = {
              kind: rM,
              eliminations: iM,
              wins: OM
            };
            break
          }
        }
        this.publishPlace(this.place)
      }
      getRunStart(MM) {
        var rM;
        const iM = "hudHome" === (null === (rM = this.place) || void 0 === rM ? void 0 : rM.kind) ? this.place.runStartedAt : null;
        return null !== iM && Math.abs(iM - MM) < 500 ? iM : MM
      }
    }

    function Fi(MM) {
      switch (MM[0]) {
        case "hudTier":
          return {
            kind: MM[0], tierKey: MM[1], locked: MM[2]
          };
        case "hudBay":
          return {
            kind: MM[0], materialKey: MM[1], objectKey: MM[2], percent: MM[3]
          };
        case "hudBayEmpty":
          return {
            kind: MM[0]
          };
        case "hudFarmTier":
          return {
            kind: MM[0], goldenPercent: MM[1]
          }
      }
    }
    var Bi = iM(3815),
      Xi = iM(1270),
      Ii = iM(181);
    const Ki = JSON.parse('{"d":{"constructionSiteA":{"name":"Construction Site A"},"quarry":{"name":"The Quarry","skill":"Mining"},"industry":{"name":"Demolition Yard","skill":"Demolition"},"market":{"name":"Market Street","skill":"Market"},"lumberMill":{"name":"Lumber Mill","skill":"Woodcutting"},"farm":{"name":"Greenville Farm","skill":"Farming"},"constructionSiteB":{"name":"Construction Site B"},"dealership":{"name":"Wheeler\'s Wheels"},"postOffice":{"name":"Post Office & Diner"},"station":{"name":"The Station"},"docks":{"name":"The Docks"}},"h":[[{"kind":"residential","name":"Hillside"},{"kind":"district","district":"quarry"},{"kind":"district","district":"industry"},{"kind":"residential","name":"Ridgeview"}],[{"kind":"residential","name":"Willow Gardens"},{"kind":"district","district":"constructionSiteA"},{"kind":"district","district":"market"},{"kind":"residential","name":"Maple Row"}],[{"kind":"residential","name":"Birchwood"},{"kind":"district","district":"farm"},{"kind":"district","district":"lumberMill"},{"kind":"district","district":"dealership"}],[{"kind":"residential","name":"Seaview"},{"kind":"district","district":"constructionSiteB"},{"kind":"residential","name":"Harbour Terrace"},{"kind":"residential","name":"Lighthouse Point"}]]}'),
      qi = Ii.f.HL,
      Ti = 1e3 * qi,
      Vi = qi,
      ci = Vi + 2 * qi,
      MO = 4 * ci + Vi,
      rO = -2 * qi,
      iO = 4 * qi;

    function OO(MM, rM, iM) {
      return rM >= MM.x0 && rM <= MM.x1 && iM >= MM.z0 && iM <= MM.z1
    }
    const SO = Ki.h,
      jO = Object.fromEntries(Object.entries(Ki.d).map((MM => {
        let [rM, {
          name: iM
        }] = MM;
        return [rM, iM]
      })));

    function aO(MM, rM) {
      return [Ti + Vi + MM * ci, Ti + Vi + rM * ci]
    }

    function PO() {
      const MM = [];
      SO.forEach(((rM, iM) => {
        rM.forEach(((rM, OM) => {
          if ("residential" !== rM.kind) return;
          const [SM, jM] = aO(OM, iM);
          for (const [iM, aM, PM] of [
              [0, 0, "north"],
              [1, 0, "north"],
              [0, 1, "south"],
              [1, 1, "south"]
            ]) MM.push({
            chunk: [SM / qi + iM, 0, jM / qi + aM],
            facing: PM,
            neighbourhood: rM.name
          })
        }))
      }));
      const rM = Ti + MO / 2,
        iM = MM => {
          let {
            chunk: iM
          } = MM;
          return Math.hypot(iM[0] * qi + qi / 2 - rM, iM[2] * qi + qi / 2 - rM)
        };
      return MM.sort(((MM, rM) => iM(MM) - iM(rM)))
    }
    const nO = {
        market: "Crate",
        demolition: "Moonstone Explosive",
        mining: "Iron Pickaxe",
        woodcutting: "Iron Axe",
        farming: "Wheat"
      },
      QO = {
        earningPower: "greenvilleGame:marketEarningPower",
        power: "greenvilleGame:demolitionPower",
        points: "greenvilleGame:demolitionPoints",
        depth: "greenvilleGame:miningDepth",
        value: "greenvilleGame:miningValue",
        backpack: "greenvilleGame:miningBackpack",
        luck: "greenvilleGame:luck"
      };

    function zO(MM, rM, iM, OM) {
      switch (rM.kind) {
        case "hudTown":
          return "city" !== rM.place ? {
            key: rM.place,
            name: MM(`greenvilleGame:${rM.place}`),
            eyebrow: null
          } : "tile" === iM.kind ? {
            key: `place|${jO[iM.district]}`,
            name: jO[iM.district],
            eyebrow: null
          } : "outside" === iM.kind ? {
            key: "city|outside",
            name: MM("greenvilleGame:placeGreenville"),
            eyebrow: null
          } : null;
        case "hudJob": {
          const iM = function(MM, rM) {
            switch (rM) {
              case "quarry":
                return jO.quarry;
              case "demolitionYard":
                return jO.industry;
              case "marketStreet":
                return jO.market;
              case "farm":
                return jO.farm;
              case "lumberMill":
                return jO.lumberMill;
              case "supermarket":
                return MM("greenvilleGame:market");
              case "demolition":
              case "mining":
              case "woodcutting":
              case "farming":
                return MM(`greenvilleGame:${rM}`)
            }
          }(MM, rM.place);
          return {
            key: `place|${iM}`,
            name: iM,
            eyebrow: null
          }
        }
        case "hudHome": {
          const iM = rM.isOwner ? MM("greenvilleGame:placeYourHouse") : MM("greenvilleGame:homePlayersHouse", {
              player: (0, Xi.d)(rM.ownerName, OM)
            }),
            SM = `home|${rM.ownerName}|${rM.houseName}`;
          return null === rM.houseName ? {
            key: SM,
            name: iM,
            eyebrow: null
          } : {
            key: SM,
            name: rM.houseName,
            eyebrow: iM
          }
        }
        case "hudSpleef":
          return {
            key: "spleef", name: MM("greenvilleGame:placeSpleef"), eyebrow: null
          }
      }
    }

    function LO(MM) {
      let {
        controller: rM,
        children: iM
      } = MM;
      (0, lM.e)(Ai, null);
      const [OM, SM] = (0, PM.useState)(null);
      (0, Bi.j)(OM, ".RightElements");
      const jM = rM.getPlace();
      return (0, CM.jsx)(dM.i, {
        placement: "topRight",
        children: (0, CM.jsx)("div", {
          className: "GreenvilleHudColumn",
          children: (0, CM.jsxs)("div", {
            ref: SM,
            className: "GreenvilleHudColumnStack",
            children: [iM, "hudTown" === (null === jM || void 0 === jM ? void 0 : jM.kind) && (0, CM.jsx)(HO, {
              levels: jM.levels
            }), "hudJob" === (null === jM || void 0 === jM ? void 0 : jM.kind) && (0, CM.jsx)(hO, {
              job: jM
            }), "hudHome" === (null === jM || void 0 === jM ? void 0 : jM.kind) && jM.bestTimes.length > 0 && (0, CM.jsx)(JO, {
              home: jM
            }), "hudSpleef" === (null === jM || void 0 === jM ? void 0 : jM.kind) && (0, CM.jsx)("div", {
              className: "GreenvilleTrackerCard",
              children: (0, CM.jsx)(mO, {
                rows: [
                  ["greenvilleGame:spleefEliminations", jM.eliminations],
                  ["greenvilleGame:spleefWins", jM.wins]
                ]
              })
            })]
          })
        })
      })
    }

    function mO(MM) {
      let {
        rows: rM
      } = MM;
      const {
        t: iM
      } = (0, UM.A)();
      return (0, CM.jsx)("ul", {
        className: "GreenvilleTrackerRows",
        children: rM.map((MM => {
          let [rM, OM] = MM;
          return (0, CM.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, CM.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: iM(rM)
            }), (0, CM.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: (0, kM.g)(OM)
            })]
          }, rM)
        }))
      })
    }

    function HO(MM) {
      let {
        levels: rM
      } = MM;
      const {
        t: iM
      } = (0, UM.A)();
      return (0, CM.jsxs)("div", {
        className: "GreenvilleTrackerCard GreenvilleJobsStrip",
        children: [(0, CM.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: iM("greenvilleGame:jobs")
        }), (0, CM.jsx)("ul", {
          className: "GreenvilleJobsStripJobs",
          children: aM.map(((MM, OM) => {
            const SM = rM[OM];
            return (0, CM.jsxs)("li", {
              className: hM()("GreenvilleJobsStripJob", {
                Max: SM >= 50
              }),
              "aria-label": iM("greenvilleGame:jobLevel", {
                job: iM(`greenvilleGame:${MM}`),
                level: SM
              }),
              children: [(0, CM.jsx)("span", {
                className: "GreenvilleJobsStripIcon",
                "aria-hidden": "true",
                children: (0, CM.jsx)(yM.b, {
                  itemName: nO[MM],
                  amount: 0
                })
              }), (0, CM.jsx)("span", {
                className: "GreenvilleJobsStripLevel",
                "aria-hidden": "true",
                children: iM("greenvilleGame:levelShort", {
                  level: SM
                })
              })]
            }, MM)
          }))
        })]
      })
    }

    function hO(MM) {
      let {
        job: {
          stats: rM,
          next: iM
        }
      } = MM;
      const {
        t: OM
      } = (0, UM.A)();
      return (0, CM.jsxs)(CM.Fragment, {
        children: [rM.length > 0 && (0, CM.jsx)("div", {
          className: "GreenvilleTrackerCard",
          children: (0, CM.jsx)("ul", {
            className: "GreenvilleTrackerRows",
            children: rM.map((MM => {
              let {
                stat: rM,
                value: iM,
                max: SM,
                boosted: jM
              } = MM;
              return (0, CM.jsxs)("li", {
                className: "GreenvilleTrackerRow",
                children: [(0, CM.jsx)("span", {
                  className: "GreenvilleTrackerLabel",
                  children: OM(QO[rM])
                }), (0, CM.jsxs)("span", {
                  className: hM()("GreenvilleTrackerValue", {
                    Boosted: jM
                  }),
                  children: [(0, kM.g)(iM), null !== SM && `/${(0,kM.g)(SM)}`]
                })]
              }, rM)
            }))
          })
        }), null !== iM && (0, CM.jsxs)("div", {
          className: "GreenvilleTrackerCard GreenvilleNextUnlock",
          children: [(0, CM.jsx)("span", {
            className: "GreenvilleNextUnlockEyebrow",
            children: OM("greenvilleGame:nextUnlock")
          }), (0, CM.jsxs)("div", {
            className: "GreenvilleNextUnlockBody",
            children: [(0, CM.jsx)("span", {
              className: "GreenvilleNextUnlockIcon",
              "aria-hidden": "true",
              children: (0, CM.jsx)(yM.b, {
                itemName: iM.item,
                amount: 0
              })
            }), (0, CM.jsxs)("span", {
              className: "GreenvilleNextUnlockText",
              children: [(0, CM.jsx)("strong", {
                className: "GreenvilleNextUnlockName",
                children: OM(iM.nameKey)
              }), (0, CM.jsx)("span", {
                className: "GreenvilleNextUnlockLevel",
                children: OM("greenvilleGame:unlockAtLevel", {
                  level: iM.level
                })
              })]
            })]
          })]
        })]
      })
    }

    function JO(MM) {
      let {
        home: rM
      } = MM;
      const {
        t: iM,
        selectedLanguage: OM
      } = (0, UM.A)(), SM = (0, pr.j)("hiddenPlayerNames");
      return (0, CM.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, CM.jsxs)("strong", {
          className: "GreenvilleTrackerTitle GreenvilleBestTimesTitle",
          children: [(0, CM.jsx)(VM.b, {
            name: "trophy"
          }), iM("greenvilleGame:parkourBestTimes")]
        }), (0, CM.jsx)("ol", {
          className: "GreenvilleTrackerRows",
          children: rM.bestTimes.slice(0, 3).map(((MM, rM) => {
            let {
              playerName: jM,
              seconds: aM
            } = MM;
            return (0, CM.jsxs)("li", {
              className: hM()("GreenvilleTrackerRow GreenvilleBestTime", {
                First: 0 === rM
              }),
              children: [(0, CM.jsx)("span", {
                className: "GreenvilleBestTimeRank",
                children: rM + 1
              }), (0, CM.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: (0, Xi.d)(jM, SM)
              }), (0, CM.jsx)("span", {
                className: "GreenvilleTrackerValue",
                children: iM("greenvilleGame:parkourTime", {
                  seconds: aM.toLocaleString(OM.code, {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1
                  })
                })
              })]
            }, `${rM}|${jM}`)
          }))
        })]
      })
    }
    const dO = "greenvilleLevelUpsView";
    class yO {
      constructor(MM) {
        this.publishLevelUps = MM, this.levelUps = [], this.token = 0, this.revealed = MM => {
          this.setLevelUps(this.levelUps.filter((rM => rM.token !== MM)))
        }
      }
      getLevelUps() {
        return this.levelUps
      }
      GL(MM) {
        const [rM, iM, OM] = MM;
        this.setLevelUps([...this.levelUps, {
          job: rM,
          level: iM,
          unlock: null === OM ? null : {
            item: OM[0],
            nameKey: OM[1],
            level: OM[2]
          },
          token: ++this.token
        }])
      }
      setLevelUps(MM) {
        this.levelUps = MM, this.publishLevelUps(MM)
      }
    }
    const lO = [{
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
      EO = Array.from({
        length: 16
      }, ((MM, rM) => ({
        "--angle": 360 * rM / 16 + rM % 3 * 7 + "deg",
        "--distance": 5 + rM % 4 * 1.2 + "rem",
        "--delay": rM % 5 * 30 + "ms"
      })));

    function UO(MM) {
      let {
        controller: rM
      } = MM;
      (0, lM.e)(dO, null);
      const iM = rM.getLevelUps();
      return 0 === iM.length ? null : (0, DM.createPortal)((0, CM.jsx)(GO, {
        levelUp: iM[0],
        onDone: rM.revealed
      }, iM[0].token), document.body)
    }

    function GO(MM) {
      let {
        levelUp: rM,
        onDone: iM
      } = MM;
      const {
        t: OM
      } = (0, UM.A)(), SM = (0, PM.useRef)(null), {
        unlock: jM
      } = rM, aM = null === jM ? 2600 : 4200;
      (0, PM.useLayoutEffect)((() => {
        const MM = document.querySelector(".GreenvilleTopBar");
        MM && SM.current.style.setProperty("--top-bar-bottom", `${MM.getBoundingClientRect().bottom}px`)
      }), []), (0, PM.useEffect)((() => {
        const MM = SM.current.animate(lO, {
          duration: aM,
          fill: "both"
        });
        return MM.onfinish = () => {
          iM(rM.token)
        }, () => {
          MM.onfinish = null, MM.cancel()
        }
      }), [rM, aM, iM]);
      const nM = OM(`greenvilleGame:${rM.job}`);
      return (0, CM.jsxs)("div", {
        ref: SM,
        className: hM()("GreenvilleLevelUpReveal", {
          Plain: null === jM
        }),
        style: {
          "--reveal-ms": `${aM}ms`
        },
        role: "status",
        children: [null !== jM && (0, CM.jsx)("div", {
          className: "GreenvilleLevelUpRevealStage",
          "aria-hidden": "true",
          children: (0, CM.jsxs)("div", {
            className: "GreenvilleLevelUpRevealMover",
            children: [(0, CM.jsx)("div", {
              className: "GreenvilleLevelUpRevealRays"
            }), (0, CM.jsx)("div", {
              className: "GreenvilleLevelUpRevealGlow"
            }), (0, CM.jsx)("div", {
              className: "GreenvilleLevelUpRevealSparks",
              children: EO.map(((MM, rM) => (0, CM.jsx)("span", {
                style: MM
              }, rM)))
            }), (0, CM.jsx)("div", {
              className: "GreenvilleLevelUpRevealIcon",
              children: (0, CM.jsx)(yM.b, {
                itemName: jM.item,
                amount: 0
              })
            })]
          })
        }), (0, CM.jsxs)("div", {
          className: "GreenvilleLevelUpRevealText",
          children: [null !== jM && (0, CM.jsxs)(CM.Fragment, {
            children: [(0, CM.jsx)("span", {
              className: "GreenvilleLevelUpRevealHeading SmallTextBold",
              children: OM("greenvilleGame:levelUpUnlockHeading", {
                job: nM,
                level: jM.level
              })
            }), (0, CM.jsx)("span", {
              className: "GreenvilleLevelUpRevealName FullyFancyText",
              children: OM(jM.nameKey)
            })]
          }), null === jM && (0, CM.jsxs)(CM.Fragment, {
            children: [(0, CM.jsx)("span", {
              className: "GreenvilleLevelUpRevealHeading SmallTextBold",
              children: OM("greenvilleGame:levelUpHeading")
            }), (0, CM.jsx)("span", {
              className: "GreenvilleLevelUpRevealName FullyFancyText",
              children: OM("greenvilleGame:jobLevel", {
                job: nM,
                level: rM.level
              })
            })]
          })]
        })]
      })
    }
    const CO = "greenvilleMarketView";

    function eO(MM) {
      return MM.map((MM => {
        let [rM, iM, OM, SM, jM, aM] = MM;
        return {
          key: `${rM}|${iM}|${OM}|${SM}|${jM}`,
          icon: rM,
          target: [iM, OM, SM],
          item: jM,
          label: aM
        }
      }))
    }
    class bO {
      constructor(MM) {
        this.Tz = MM, this.view = null
      }
      getView() {
        return this.view
      }
      GL(MM) {
        const rM = performance.now();
        switch (MM[0]) {
          case "hide":
            this.view = null;
            break;
          case "marketIdle":
            this.view = {
              job: null,
              waypoints: eO(MM[1])
            };
            break;
          case "marketPick":
          case "marketStock": {
            const [iM, OM, SM, jM] = MM;
            this.view = {
              job: {
                kind: iM,
                goods: OM,
                tipEndsAt: jM > 0 ? rM + jM : 0
              },
              waypoints: eO(SM)
            };
            break
          }
          case "marketDeliver": {
            const [iM, OM, SM, jM, aM, PM] = MM;
            this.view = {
              job: {
                kind: iM,
                parcelsLeft: OM,
                delivered: SM,
                gold: jM,
                endsAt: rM + PM
              },
              waypoints: eO(aM)
            };
            break
          }
        }
        this.Tz(this.view)
      }
    }
    var wO = iM(40515);
    const tO = [{
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

    function gO(MM) {
      var rM;
      let {
        controller: iM
      } = MM;
      (0, lM.e)(CO, null);
      const OM = null === (rM = iM.getView()) || void 0 === rM ? void 0 : rM.job;
      return "marketDeliver" !== (null === OM || void 0 === OM ? void 0 : OM.kind) ? null : (0, CM.jsx)(uO, {
        endsAt: OM.endsAt,
        delivered: OM.delivered
      })
    }

    function uO(MM) {
      let {
        endsAt: rM,
        delivered: iM
      } = MM;
      const {
        t: OM
      } = (0, UM.A)(), SM = Math.max(0, Math.ceil((0, wO.g)(rM))), jM = (0, PM.useRef)(null), aM = (0, PM.useRef)(null), nM = (0, PM.useRef)({
        endsAt: rM,
        delivered: iM
      }), [QM, zM] = (0, PM.useState)(null);
      (0, PM.useLayoutEffect)((() => {
        const MM = iM > nM.current.delivered ? Math.round((rM - nM.current.endsAt) / 1e3) : 0;
        var OM;
        (nM.current = {
          endsAt: rM,
          delivered: iM
        }, MM <= 0) || (zM((rM => {
          var iM;
          return {
            seconds: MM,
            token: (null !== (iM = null === rM || void 0 === rM ? void 0 : rM.token) && void 0 !== iM ? iM : 0) + 1
          }
        })), window.matchMedia("(prefers-reduced-motion: reduce)").matches || (null === (OM = aM.current) || void 0 === OM || OM.cancel(), aM.current = jM.current.animate(tO, {
          duration: 420,
          easing: "ease-out"
        })))
      }), [rM, iM]), (0, PM.useEffect)((() => () => {
        var MM;
        null === (MM = aM.current) || void 0 === MM || MM.cancel()
      }), []);
      const LM = Math.floor(SM / 60);
      return (0, CM.jsxs)("div", {
        className: hM()("GreenvilleMarketCountdown", {
          Urgent: SM < 10
        }),
        role: "timer",
        children: [(0, CM.jsxs)("div", {
          ref: jM,
          className: "GreenvilleMarketCountdownTime FullyFancyText",
          children: [LM, ":", String(SM % 60).padStart(2, "0")]
        }), null !== QM && (0, CM.jsx)("div", {
          className: "GreenvilleMarketCountdownAdded FullyFancyText",
          onAnimationEnd: () => {
            zM(null)
          },
          children: OM("greenvilleGame:marketCountdownAdded", {
            seconds: QM.seconds
          })
        }, QM.token)]
      })
    }

    function RO(MM) {
      var rM;
      let {
        controller: iM
      } = MM;
      (0, lM.e)(CO, null);
      const OM = null === (rM = iM.getView()) || void 0 === rM ? void 0 : rM.job;
      return OM ? (0, CM.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: ["marketDeliver" === OM.kind && (0, CM.jsx)(sO, {
          shift: OM
        }), "marketDeliver" !== OM.kind && (0, CM.jsx)(pO, {
          task: OM
        })]
      }) : null
    }

    function pO(MM) {
      let {
        task: rM
      } = MM;
      const {
        t: iM
      } = (0, UM.A)(), OM = "marketPick" === rM.kind && rM.goods.every((MM => {
        let [, rM] = MM;
        return 0 === rM
      }));
      return (0, CM.jsxs)(CM.Fragment, {
        children: [(0, CM.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: iM("marketPick" === rM.kind ? "greenvilleGame:marketPanelOrder" : "greenvilleGame:marketPanelCrate")
        }), (0, CM.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: rM.goods.map((MM => {
            let [rM, OM, SM] = MM;
            return (0, CM.jsxs)("li", {
              className: hM()("GreenvilleTrackerRow", {
                Done: 0 === OM
              }),
              children: [(0, CM.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, CM.jsx)(yM.b, {
                  itemName: rM,
                  amount: 0
                })
              }), (0, CM.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: (0, Yi.e)(iM, rM)
              }), (0, CM.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [SM - OM, "/", SM]
              })]
            }, rM)
          }))
        }), OM && (0, CM.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: iM("greenvilleGame:marketPanelReturn")
        }), !OM && 0 !== rM.tipEndsAt && (0, CM.jsx)(WO, {
          endsAt: rM.tipEndsAt
        })]
      })
    }

    function WO(MM) {
      let {
        endsAt: rM
      } = MM;
      const {
        t: iM
      } = (0, UM.A)(), OM = Math.ceil((0, wO.g)(rM));
      return OM <= 0 ? null : (0, CM.jsx)("div", {
        className: "GreenvilleTrackerTip",
        children: iM("greenvilleGame:marketPanelTip", {
          seconds: OM
        })
      })
    }

    function sO(MM) {
      let {
        shift: rM
      } = MM;
      const {
        t: iM
      } = (0, UM.A)();
      return (0, CM.jsxs)(CM.Fragment, {
        children: [(0, CM.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: iM("greenvilleGame:marketPanelDeliveries")
        }), (0, CM.jsxs)("ul", {
          className: "GreenvilleTrackerRows",
          children: [(0, CM.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, CM.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: iM("greenvilleGame:marketPanelParcels")
            }), (0, CM.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: rM.parcelsLeft
            })]
          }), (0, CM.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, CM.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: iM("greenvilleGame:marketPanelDelivered")
            }), (0, CM.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: rM.delivered
            })]
          }), (0, CM.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, CM.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: iM("greenvilleGame:marketPanelEarned")
            }), (0, CM.jsx)("span", {
              className: "GreenvilleTrackerIcon",
              "aria-hidden": "true",
              children: (0, CM.jsx)(yM.b, {
                itemName: "Gold Coin",
                amount: 0
              })
            }), (0, CM.jsx)("span", {
              className: "GreenvilleTrackerValue Gold",
              children: (0, kM.g)(rM.gold)
            })]
          })]
        }), 0 === rM.parcelsLeft && (0, CM.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: iM("greenvilleGame:marketPanelBackToBay")
        })]
      })
    }
    const DO = {
      marketNpc: "comment-dots",
      marketShelf: "cart-shopping",
      marketHouse: "house",
      marketDepot: "truck"
    };

    function kO(MM) {
      var rM;
      let {
        market: iM,
        markers: OM
      } = MM;
      (0, lM.e)(CO, null);
      const SM = null === (rM = iM.getView()) || void 0 === rM ? void 0 : rM.waypoints;
      return null !== SM && void 0 !== SM && SM.length ? (0, CM.jsx)("div", {
        className: "GreenvilleMarketWaypoints",
        children: SM.map((MM => (0, CM.jsx)(ZO, {
          waypoint: MM,
          bind: OM.waypoints.bindMarker(MM.key)
        }, MM.key)))
      }) : null
    }

    function ZO(MM) {
      let {
        waypoint: {
          icon: rM,
          item: iM,
          label: OM
        },
        bind: SM
      } = MM;
      const jM = "marketHouse" === rM;
      return (0, CM.jsxs)("div", {
        ref: SM,
        className: hM()("GreenvilleMarketWaypoint", {
          House: jM
        }),
        children: [jM && (0, CM.jsx)(oO, {}), (0, CM.jsxs)("div", {
          className: "GreenvilleMarketWaypointBadge",
          children: [null !== iM && (0, CM.jsx)("span", {
            className: "GreenvilleMarketWaypointItem",
            children: (0, CM.jsx)(yM.b, {
              itemName: iM,
              amount: 0
            })
          }), null === iM && (0, CM.jsx)(VM.b, {
            name: DO[rM]
          })]
        }), (0, CM.jsxs)("div", {
          className: "GreenvilleMarketWaypointLabels",
          children: [null !== OM && (0, CM.jsx)("span", {
            className: "GreenvilleMarketWaypointLabel SmallTextBold",
            children: OM
          }), (0, CM.jsx)("span", {
            className: "GreenvilleMarketWaypointDistance SmallTextBold"
          })]
        })]
      })
    }

    function oO() {
      const MM = (0, PM.useRef)(null);
      return (0, Ei.e)(MM), (0, CM.jsx)("span", {
        ref: MM,
        className: "GreenvilleMarketWaypointPulse"
      })
    }
    var fO = iM(40520);
    class YO {
      constructor(MM) {
        this.market = MM, this.waypoints = new fO.e({
          labels: "GreenvilleMarketWaypointLabels",
          distance: "GreenvilleMarketWaypointDistance"
        }, "greenvilleGame:marketDistance")
      }
      frame(MM, rM) {
        this.waypoints.setRender(MM);
        const iM = this.market.getView();
        if (iM && this.waypoints.hasMarkers())
          for (const {
              key: OM,
              target: SM
            }
            of iM.waypoints) this.waypoints.update(OM, SM[0], SM[1] + 1, SM[2], rM)
      }
    }
    const NO = {
      Street: "St",
      Avenue: "Ave",
      Road: "Rd",
      Lane: "Ln"
    };

    function AO(MM, rM) {
      return rM.map(((rM, iM) => {
        const OM = rM.lastIndexOf(" "),
          SM = rM.slice(OM + 1);
        let jM = NO[SM];
        return void 0 === jM && (console.warn(`Greenville street "${rM}" has no suffix abbreviation`), jM = SM), {
          axis: MM,
          line: iM,
          name: rM,
          shortName: rM.slice(0, OM),
          suffix: jM
        }
      }))
    }
    const xO = {
        eastWest: AO("eastWest", ["Hillcrest Road", "Oak Street", "Main Street", "Elm Street", "Harbour Road"]),
        northSouth: AO("northSouth", ["Willow Lane", "Birch Avenue", "Market Street", "Maple Avenue", "Station Road"])
      },
      vO = {
        kind: "outside"
      };

    function FO(MM, rM, iM) {
      return 100 * (MM + 1) + rM + (iM ? 1 : 0)
    }

    function BO(MM, rM, iM, OM) {
      return {
        x0: Ti + MM,
        z0: Ti + rM,
        x1: Ti + MM + iM - 1,
        z1: Ti + rM + OM - 1
      }
    }
    let XO = null;

    function IO(MM, rM, iM, OM) {
      if (OM && "outside" !== OM.kind) {
        const {
          box: iM
        } = OM;
        if (!OO(iM, MM, rM) && OO({
            x0: iM.x0 - 2,
            z0: iM.z0 - 2,
            x1: iM.x1 + 2,
            z1: iM.z1 + 2
          }, MM, rM)) return OM
      }
      return function(MM, rM, iM) {
        const {
          eastWest: OM,
          northSouth: SM
        } = xO;
        switch (MM.kind) {
          case "outside":
            return vO;
          case "street": {
            const rM = MM.segment * ci + Vi,
              iM = MM.line * ci;
            return {
              kind: "street",
              box: "eastWest" === MM.axis ? BO(rM, iM, ci - Vi, Vi) : BO(iM, rM, Vi, ci - Vi),
              street: xO[MM.axis][MM.line],
              block: 100 * (MM.segment + 1)
            }
          }
          case "junction": {
            const jM = BO(MM.column * ci, MM.row * ci, Vi, Vi),
              aM = [OM[MM.row], SM[MM.column]],
              PM = "street" === (null === iM || void 0 === iM ? void 0 : iM.kind) ? iM.street : "junction" === (null === iM || void 0 === iM ? void 0 : iM.kind) ? iM.along : null,
              nM = PM && aM.includes(PM) ? PM : Math.abs(Math.sin(rM)) > Math.abs(Math.cos(rM)) ? aM[0] : aM[1];
            return {
              kind: "junction",
              box: jM,
              along: nM,
              cross: nM === aM[0] ? aM[1] : aM[0]
            }
          }
          case "plot": {
            const rM = MM.column * ci + Vi + MM.dx * Vi,
              iM = MM.row * ci + Vi + MM.dz * Vi,
              SM = 0 === MM.dz;
            return {
              kind: "plot",
              box: BO(rM, iM, Vi, Vi),
              plotId: (jM = (Ti + rM) / Vi, aM = (Ti + iM) / Vi, XO || (XO = new Map(PO().map(((MM, rM) => {
                let {
                  chunk: iM
                } = MM;
                return [`${iM[0]},${iM[2]}`, rM + 1]
              })))), XO.get(`${jM},${aM}`)),
              number: FO(MM.column, 0 === MM.dx ? 30 : 70, SM),
              street: OM[SM ? MM.row : MM.row + 1],
              neighbourhood: MM.neighbourhood
            }
          }
          case "tile": {
            const {
              column: rM,
              row: iM,
              district: SM
            } = MM;
            return {
              kind: "tile",
              box: BO(rM * ci + Vi, iM * ci + Vi, ci - Vi, ci - Vi),
              district: SM,
              number: FO(rM, 50, !0),
              street: OM[iM]
            }
          }
        }
        var jM, aM
      }(function(MM, rM) {
        const iM = MM - Ti,
          OM = rM - Ti;
        if (iM < 0 || OM < 0 || iM >= MO || OM >= MO) return {
          kind: "outside"
        };
        const SM = Math.floor(iM / ci),
          jM = Math.floor(OM / ci),
          aM = iM - SM * ci - Vi,
          PM = OM - jM * ci - Vi;
        if (aM < 0 && PM < 0) return {
          kind: "junction",
          column: SM,
          row: jM
        };
        if (PM < 0) return {
          kind: "street",
          axis: "eastWest",
          line: jM,
          segment: SM
        };
        if (aM < 0) return {
          kind: "street",
          axis: "northSouth",
          line: SM,
          segment: jM
        };
        const nM = SO[jM][SM];
        return "residential" === nM.kind ? {
          kind: "plot",
          column: SM,
          row: jM,
          dx: Math.floor(aM / Vi),
          dz: Math.floor(PM / Vi),
          neighbourhood: nM.name
        } : {
          kind: "tile",
          column: SM,
          row: jM,
          district: nM.district
        }
      }(MM, rM), iM, OM)
    }

    function KO(MM) {
      switch (MM.kind) {
        case "outside":
          return "outside";
        case "junction":
          return `junction|${MM.along.name}|${MM.cross.name}`;
        case "plot":
        case "tile":
          return `${MM.kind}|${MM.number}|${MM.street.name}`;
        case "street":
          return `street|${MM.block}|${MM.street.name}`
      }
    }
    var qO = iM(40551);
    const TO = iM.p + "static/media/greenvilleCity.7b141fefdb213c21b37a.png";
    var VO = iM(40543),
      cO = iM(222);
    const MS = Ii.f.HL,
      rS = MO / MS,
      iS = rO / MS,
      OS = (iO - rO) / MS;
    class SS {
      constructor(MM) {
        this.api = MM, this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.image = this.context.createImageData(MS, MS), this.plots = new Set(PO().map((MM => {
          let {
            chunk: rM
          } = MM;
          return (rM[2] - Ti / MS) * rS + rM[0] - Ti / MS
        }))), this.baked = null, this.dh = !1, this.ids = new Uint16Array(MS * MS), this.tops = new Int32Array(MS * MS), this.edgeIds = new Uint16Array(MS), this.edgeTops = new Int32Array(MS), this.heights = new Int32Array(MO * MO).fill(qO.g), this.versions = new Float64Array(rS * rS * OS).fill(NaN), this.current = new Float64Array(OS), this.stale = new Uint8Array(rS * rS), this.painted = new Uint8Array(rS * rS), this.order = [], this.focus = {
          column: -1,
          row: -1
        }, this.colours = null, this.host = null, this.timer = null, this.cancelIdle = null, this.pass = MM => {
          this.cancelIdle = null;
          let rM = !1;
          const iM = performance.now();
          let OM = !0;
          if (this.colours && this.host && this.host.clientWidth > 0)
            for (const SM of this.order) {
              if (!this.readVersions(SM)) continue;
              const jM = !MM.didTimeout && MM.timeRemaining() < 2;
              if (!OM && (jM || performance.now() - iM > 6)) {
                rM = !0;
                break
              }
              OM = !1, this.versions.set(this.current, SM * OS), this.paint(SM % rS, Math.floor(SM / rS), this.colours.lookup, this.colours.drawn)
            }
          this.schedule(rM ? 0 : 500)
        }, this.canvas.width = MO, this.canvas.height = MO, this.canvas.className = "GreenvilleNavMapTerrain", this.focusOn(Ti + MO / 2, Ti + MO / 2), Promise.all([(0, VO.b)(), this.drawBakedCity()]).then((MM => {
          let [rM] = MM;
          this.colours = {
            lookup: rM,
            drawn: rM.getDrawnIds()
          }
        }), (MM => {
          console.error("Greenville map: block colours failed to load", MM)
        })), this.schedule(0)
      }
      mount(MM) {
        this.host = MM, null === MM || void 0 === MM || MM.replaceChildren(this.canvas)
      }
      focusOn(MM, rM) {
        const iM = Math.min(rS - 1, Math.max(0, Math.floor((MM - Ti) / MS))),
          OM = Math.min(rS - 1, Math.max(0, Math.floor((rM - Ti) / MS)));
        iM === this.focus.column && OM === this.focus.row || (this.focus = {
          column: iM,
          row: OM
        }, this.order = [...this.plots].sort(((MM, rM) => Math.hypot(MM % rS - iM, Math.floor(MM / rS) - OM) - Math.hypot(rM % rS - iM, Math.floor(rM / rS) - OM))))
      }
      forget(MM, rM) {
        const iM = rM * rS + MM;
        this.stale[iM] = 1, this.versions.fill(NaN, iM * OS, (iM + 1) * OS)
      }
      dispose() {
        var MM, rM;
        null !== this.timer && clearTimeout(this.timer), null === (MM = this.cancelIdle) || void 0 === MM || MM.call(this), this.host = null, this.dh = !0, null === (rM = this.baked) || void 0 === rM || rM.close(), this.baked = null
      }
      async drawBakedCity() {
        try {
          const MM = await fetch(TO);
          if (!MM.ok) throw new Error(`HTTP ${MM.status}`);
          const rM = await createImageBitmap(await MM.blob(), {
            colorSpaceConversion: "none"
          });
          if (this.dh) return void rM.close();
          this.baked = rM, this.context.drawImage(rM, 0, 0)
        } catch (MM) {
          console.error("Greenville map: the baked city failed to load", MM)
        }
      }
      schedule(MM) {
        this.timer = setTimeout((() => {
          this.timer = null, this.cancelIdle = (0, cO.d)(this.pass, {
            timeoutMs: 1e3
          })
        }), MM)
      }
      readVersions(MM) {
        const rM = Ti / MS + MM % rS,
          iM = Ti / MS + Math.floor(MM / rS);
        let OM = !1;
        for (let jM = 0; jM < OS; jM++) {
          var SM;
          const aM = null !== (SM = this.api.getChunkVersion(rM, iS + jM, iM)) && void 0 !== SM ? SM : 0;
          this.current[jM] = aM, OM ||= aM !== this.versions[MM * OS + jM]
        }
        return OM
      }
      repaintIfPainted(MM, rM) {
        const iM = rM * rS + MM;
        MM < rS && rM < rS && 1 === this.painted[iM] && this.versions.fill(NaN, iM * OS, (iM + 1) * OS)
      }
      storeHeights(MM, rM) {
        let iM = !1,
          OM = !1;
        for (let SM = 0; SM < this.ids.length; SM++) {
          const jM = SM % MS,
            aM = Math.floor(SM / MS),
            PM = (rM * MS + aM) * MO + MM * MS + jM,
            nM = 0 === this.ids[SM] ? qO.g : this.tops[SM];
          this.heights[PM] !== nM && (iM ||= jM === MS - 1, OM ||= aM === MS - 1, this.heights[PM] = nM)
        }
        iM && this.repaintIfPainted(MM + 1, rM), OM && this.repaintIfPainted(MM, rM + 1)
      }
      readEdgeHeights(MM, rM, iM, OM, SM) {
        this.api.readColumnTops(MM, rM, iM, OM, rO, iO, SM, this.edgeIds, this.edgeTops);
        const jM = iM - MM;
        for (let aM = 0; aM < MS; aM++) {
          const iM = (rM - Ti + Math.floor(aM / jM)) * MO + MM - Ti + aM % jM;
          this.heights[iM] = 0 === this.edgeIds[aM] ? qO.g : this.edgeTops[aM]
        }
      }
      paint(MM, rM, iM, OM) {
        const SM = rM * rS + MM,
          jM = 1 === this.stale[SM];
        this.stale[SM] = 0;
        const aM = Ti + MM * MS,
          PM = Ti + rM * MS,
          nM = MO - (MM + 1) * MS,
          {
            ids: QM,
            tops: zM,
            heights: LM
          } = this;
        if (0 === this.current[0 - iS]) return void(jM && (this.context.clearRect(nM, rM * MS, MS, MS), this.baked && this.context.drawImage(this.baked, nM, rM * MS, MS, MS, nM, rM * MS, MS, MS), QM.fill(0), this.storeHeights(MM, rM)));
        this.painted[SM] = 1, this.api.readColumnTops(aM, PM, aM + MS, PM + MS, rO, iO, OM, QM, zM), this.storeHeights(MM, rM), this.plots.has(SM - 1) || this.readEdgeHeights(aM - 1, PM, aM, PM + MS, OM), this.plots.has(SM - rS) || this.readEdgeHeights(aM, PM - 1, aM + MS, PM, OM);
        const mM = this.image.data;
        for (let HM = 0; HM < MS; HM++)
          for (let OM = 0; OM < MS; OM++) {
            const SM = 4 * (HM * MS + MS - 1 - OM),
              jM = QM[HM * MS + OM];
            if (0 === jM) {
              mM[SM + 3] = 0;
              continue
            }
            const aM = MM * MS + OM,
              PM = rM * MS + HM;
            iM.drawPixel(mM, SM, jM, zM[HM * MS + OM], LM[(PM - 1) * MO + aM], LM[PM * MO + aM - 1])
          }
        this.context.putImageData(this.image, nM, rM * MS)
      }
    }
    const jS = "greenvilleNavAddress",
      aS = "greenvilleNavPlots",
      PS = "greenvilleNavMarkers",
      nS = Math.log(MO / 80),
      QS = 5 * Math.PI / 180,
      zS = {
        kind: "outside"
      };

    function LS(MM) {
      return (MM - Ti) / Ii.f.HL
    }
    class mS {
      constructor(MM, rM, iM) {
        this.publishAddress = MM, this.publishPlots = rM, this.publishMarkers = iM, this.address = zS, this.addressKey = KO(zS), this.block = {
          x: NaN,
          z: NaN
        }, this.plots = void 0, this.markers = [], this.terrain = null, this.uL = null, this.worldResize = null, this.worldPx = 0, this.arrowTrack = null, this.arrow = null, this.zoom = 0, this.lastFrameMs = NaN, this.written = {
          u: NaN,
          v: NaN,
          scale: NaN,
          heading: NaN
        }, this.reducedMotion = null, this.mountTerrain = MM => {
          this.terrain.mount(MM)
        }, this.mountWorld = MM => {
          var rM;
          this.uL = MM, this.written = {
            u: NaN,
            v: NaN,
            scale: NaN,
            heading: NaN
          }, null === (rM = this.worldResize) || void 0 === rM || rM.disconnect(), this.worldResize = null, MM && (this.worldResize = new ResizeObserver((MM => {
            let [rM] = MM;
            this.worldPx = rM.contentRect.width, this.written.u = NaN
          })), this.worldResize.observe(MM))
        }, this.mountArrow = MM => {
          var rM;
          this.arrowTrack = MM, this.arrow = null !== (rM = null === MM || void 0 === MM ? void 0 : MM.firstElementChild) && void 0 !== rM ? rM : null, this.written = {
            u: NaN,
            v: NaN,
            scale: NaN,
            heading: NaN
          }
        }, this.plots = {
          plots: PO().map(((MM, rM) => {
            let {
              chunk: iM,
              facing: OM
            } = MM;
            return {
              plotId: rM + 1,
              chunkX: iM[0] - Ti / Ii.f.HL,
              chunkZ: iM[2] - Ti / Ii.f.HL,
              facing: OM,
              state: "vacant",
              mine: !1
            }
          })),
          animate: !1
        }
      }
      start(MM) {
        this.terrain = new SS(MM)
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
      GL(MM) {
        const rM = [...this.plots.plots];
        for (const [OM, SM, jM] of "plotsAll" === MM[0] ? MM[1] : [MM[1]]) {
          const MM = rM[OM - 1];
          var iM;
          if (MM.state === SM && MM.mine === jM || (rM[OM - 1] = {
              ...MM,
              state: SM,
              mine: jM
            }), MM.state !== SM) null === (iM = this.terrain) || void 0 === iM || iM.forget(MM.chunkX, MM.chunkZ)
        }
        this.plots = {
          plots: rM,
          animate: "plotsOne" === MM[0]
        }, this.publishPlots(this.plots)
      }
      receiveMarkers(MM) {
        this.markers = MM.map((MM => {
          const [rM, iM] = [LS(MM[2]), LS(MM[3])];
          return "mapPlace" === MM[0] ? {
            kind: "place",
            place: MM[1],
            x: rM,
            z: iM
          } : {
            kind: "npc",
            face: null === MM[1] ? "npc" : `npc_${MM[1]}`,
            x: rM,
            z: iM
          }
        })), this.publishMarkers(this.markers)
      }
      frame(MM, rM, iM) {
        if (!rM) return;
        const OM = Math.floor(rM[0]),
          SM = Math.floor(rM[2]);
        if (OM !== this.block.x || SM !== this.block.z) {
          this.block = {
            x: OM,
            z: SM
          }, this.terrain.focusOn(OM, SM), this.address = IO(OM, SM, MM.cameraHeading, this.address);
          const rM = KO(this.address);
          rM !== this.addressKey && (this.addressKey = rM, this.publishAddress(this.address))
        }
        const jM = performance.now(),
          aM = function(MM, rM) {
            return rM || "plot" !== MM.kind && "tile" !== MM.kind ? 0 : 1
          }(this.address, iM);
        if (this.zoom !== aM) {
          this.reducedMotion ??= window.matchMedia("(prefers-reduced-motion: reduce)");
          const MM = this.reducedMotion.matches ? 1 : 1 - Math.exp(-(jM - this.lastFrameMs) / 150);
          this.zoom += (aM - this.zoom) * (Number.isNaN(MM) ? 1 : MM), Math.abs(aM - this.zoom) < .002 && (this.zoom = aM)
        }
        this.lastFrameMs = jM, "outside" !== this.address.kind && this.writeView(rM[0], rM[2], MM.cameraHeading)
      }
      writeView(MM, rM, iM) {
        const {
          uL: OM,
          arrowTrack: SM,
          arrow: jM,
          written: aM
        } = this;
        if (!OM || !SM || !jM) return;
        const PM = (Ti + MO - MM) / MO,
          nM = (rM - Ti) / MO,
          QM = Math.exp(this.zoom * nS),
          zM = Math.abs(Math.atan2(Math.sin(iM - aM.heading), Math.cos(iM - aM.heading))),
          LM = QM !== aM.scale,
          mM = !(Math.hypot(PM - aM.u, nM - aM.v) * this.worldPx * QM < 1);
        if (LM || mM || !(zM < QS)) {
          if (LM || mM) {
            this.written.u = PM, this.written.v = nM;
            const MM = PM + (.5 - PM) * this.zoom - PM * QM,
              rM = nM + (.5 - nM) * this.zoom - nM * QM;
            OM.style.transform = `translate(${100*MM}%, ${100*rM}%) scale(${QM})`, SM.style.transform = `translate(${100*PM}%, ${100*nM}%)`
          }(LM || zM >= QS) && (jM.style.transform = `translate(-50%, -50%) scale(${1/QM}) rotate(${180+180*iM/Math.PI}deg)`, this.written.heading = iM), LM && (OM.style.setProperty("--greenville-map-unzoom", String(1 / QM)), OM.style.setProperty("--greenville-map-zoom", String(this.zoom)), this.written.scale = QM)
        }
      }
    }
    var HS = iM(39580);
    const hS = MO / Ii.f.HL,
      JS = `matrix(-1 0 0 1 ${hS} 0)`,
      dS = .08,
      yS = [{
        transform: "scaleY(0)"
      }, {
        transform: "scaleY(1)"
      }],
      lS = [{
        opacity: 1
      }, {
        opacity: 0
      }],
      ES = {
        quarry: nO.mining,
        industry: nO.demolition,
        market: nO.market,
        lumberMill: nO.woodcutting,
        farm: nO.farming,
        dealership: "Light Blue Car"
      },
      US = {
        drillBay: nO.mining,
        vanBay: "Yellow Kart",
        carPickup: "Light Blue Car",
        demolitionPit: nO.demolition,
        farmField: nO.farming,
        woods: nO.woodcutting
      },
      GS = SO.flatMap(((MM, rM) => MM.flatMap(((MM, iM) => "residential" === MM.kind ? [] : [{
        tile: MM,
        x: 1 + 3 * iM,
        z: 1 + 3 * rM
      }])))),
      CS = [...xO.eastWest, ...xO.northSouth];

    function eS(MM, rM) {
      return {
        left: (hS - MM) / hS * 100 + "%",
        top: rM / hS * 100 + "%"
      }
    }

    function bS(MM) {
      let {
        axis: rM,
        line: iM
      } = MM;
      const OM = .3,
        SM = 3 * iM + OM,
        jM = hS - .6;
      return "eastWest" === rM ? {
        x: OM,
        y: SM,
        width: jM,
        height: .4
      } : {
        x: SM,
        y: OM,
        width: .4,
        height: jM
      }
    }

    function wS(MM) {
      let {
        controller: rM
      } = MM;
      (0, lM.e)(aS, null);
      const {
        plots: iM,
        animate: OM
      } = rM.getPlots();
      return (0, CM.jsx)("div", {
        className: "GreenvilleNavMap",
        children: (0, CM.jsxs)("div", {
          className: "GreenvilleNavMapWorld",
          ref: rM.mountWorld,
          children: [(0, CM.jsx)("svg", {
            className: "GreenvilleNavMapPlan",
            viewBox: `0 0 ${hS} ${hS}`,
            preserveAspectRatio: "none",
            shapeRendering: "crispEdges",
            children: (0, CM.jsxs)("g", {
              transform: JS,
              children: [(0, CM.jsx)("rect", {
                className: "GreenvilleNavGround",
                width: hS,
                height: hS
              }), CS.map((MM => (0, CM.jsx)("rect", {
                className: "GreenvilleNavRoad",
                ...bS(MM)
              }, MM.name))), GS.map((MM => {
                let {
                  tile: rM,
                  x: iM,
                  z: OM
                } = MM;
                return (0, CM.jsx)("rect", {
                  className: "GreenvilleNavDistrict",
                  "data-district": rM.district,
                  x: iM,
                  y: OM,
                  width: 2,
                  height: 2
                }, rM.district)
              })), iM.map((MM => (0, CM.jsx)(gS, {
                plot: MM,
                animate: OM
              }, MM.plotId)))]
            })
          }), (0, CM.jsx)("div", {
            className: "GreenvilleNavMapTerrainHost",
            ref: rM.mountTerrain
          }), (0, CM.jsx)("svg", {
            className: "GreenvilleNavMapLots",
            viewBox: `0 0 ${hS} ${hS}`,
            preserveAspectRatio: "none",
            children: (0, CM.jsx)("g", {
              transform: JS,
              children: iM.map((MM => (0, CM.jsx)("rect", {
                className: hM()("GreenvilleNavLot", {
                  Vacant: "vacant" === MM.state,
                  Loading: "loading" === MM.state,
                  Mine: MM.mine
                }),
                x: MM.chunkX + dS,
                y: MM.chunkZ + dS,
                width: .84,
                height: .84
              }, MM.plotId)))
            })
          }), GS.map((MM => {
            let {
              tile: rM,
              x: iM,
              z: OM
            } = MM;
            const SM = ES[rM.district];
            return SM && (0, CM.jsx)("span", {
              className: "GreenvilleNavPin GreenvilleNavLandmark",
              style: eS(iM + 1, OM + 1),
              children: (0, CM.jsx)(yM.b, {
                itemName: SM,
                amount: 0
              })
            }, rM.district)
          })), (0, CM.jsx)(tS, {
            controller: rM
          }), (0, CM.jsx)("div", {
            className: "GreenvilleNavArrowTrack",
            ref: rM.mountArrow,
            children: (0, CM.jsx)("div", {
              className: "GreenvilleNavArrow",
              children: (0, CM.jsx)("svg", {
                viewBox: "-1 -1 2 2",
                children: (0, CM.jsx)("polygon", {
                  points: "0,-0.8 0.62,0.62 0,0.28 -0.62,0.62"
                })
              })
            })
          }), iM.map((MM => MM.mine && (0, CM.jsx)("span", {
            className: "GreenvilleNavPin GreenvilleNavHome",
            style: eS(MM.chunkX + .5, MM.chunkZ + ("north" === MM.facing ? 0 : 1)),
            children: (0, CM.jsx)(VM.b, {
              name: "house"
            })
          }, MM.plotId)))]
        })
      })
    }

    function tS(MM) {
      let {
        controller: rM
      } = MM;
      return (0, lM.e)(PS, null), (0, CM.jsx)(CM.Fragment, {
        children: rM.getMarkers().map(((MM, rM) => (0, CM.jsxs)("span", {
          className: "GreenvilleNavPin GreenvilleNavMarker",
          style: eS(MM.x, MM.z),
          children: ["npc" === MM.kind && (0, CM.jsx)(HS.c, {
            icon: MM.face
          }), "place" === MM.kind && (0, CM.jsx)(yM.b, {
            itemName: US[MM.place],
            amount: 0
          })]
        }, rM)))
      })
    }
    const gS = (0, PM.memo)((function(MM) {
      let {
        plot: rM,
        animate: iM
      } = MM;
      const OM = (0, PM.useRef)(null),
        SM = (0, PM.useRef)(rM.state),
        jM = (0, PM.useRef)(null);
      return (0, PM.useLayoutEffect)((() => {
        var MM;
        const aM = SM.current;
        SM.current = rM.state, aM !== rM.state && (null === (MM = jM.current) || void 0 === MM || MM.cancel(), iM && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && ("built" === rM.state ? jM.current = OM.current.animate(yS, {
          duration: 300,
          easing: "ease-out"
        }) : "vacant" === rM.state && (jM.current = OM.current.animate(lS, {
          duration: 400,
          easing: "ease-in"
        }))))
      }), [rM.state]), (0, PM.useEffect)((() => () => {
        var MM;
        null === (MM = jM.current) || void 0 === MM || MM.cancel()
      }), []), (0, CM.jsxs)(CM.Fragment, {
        children: [(0, CM.jsx)("rect", {
          className: "GreenvilleNavPlotGrass",
          x: rM.chunkX + dS,
          y: rM.chunkZ + dS,
          width: .84,
          height: .84
        }), (0, CM.jsx)("rect", {
          ref: OM,
          className: hM()("GreenvilleNavPlotRoof", {
            Loading: "loading" === rM.state,
            Built: "built" === rM.state,
            Mine: rM.mine
          }),
          x: rM.chunkX + dS,
          y: rM.chunkZ + dS,
          width: .84,
          height: .84
        })]
      })
    }));

    function uS(MM) {
      let {
        controller: rM
      } = MM;
      const [iM, OM] = (0, PM.useState)((() => "outside" === rM.getAddress().kind));
      (0, lM.d)(jS, (() => {
        OM("outside" === rM.getAddress().kind)
      }));
      const SM = (0, oM.b)();
      return (0, CM.jsx)("div", {
        className: hM()("GreenvilleNav", {
          Hidden: SM || iM
        }),
        children: (0, CM.jsx)(wS, {
          controller: rM
        })
      })
    }

    function RS(MM) {
      return MM >= 75 ? "face-smile" : MM >= 50 ? "face-diagonal-mouth" : MM >= 25 ? "face-worried" : "face-dizzy"
    }

    function pS(MM) {
      const rM = Math.round(MM);
      return `${rM>0?"+":""}${rM}%`
    }

    function WS(MM) {
      let {
        controller: rM
      } = MM;
      (0, lM.e)(xi, null);
      const iM = rM.getMood();
      return iM ? (0, CM.jsx)(dM.i, {
        placement: "statBars",
        children: (0, CM.jsx)(sS, {
          mood: iM
        })
      }) : null
    }

    function sS(MM) {
      let {
        mood: rM
      } = MM;
      const {
        t: iM
      } = (0, UM.A)(), OM = function(MM) {
        const [, rM] = (0, PM.useState)(0);
        return (0, PM.useEffect)((() => {
          const iM = MM - performance.now();
          if (iM <= 0) return;
          const OM = window.setTimeout((() => {
            rM((MM => MM + 1))
          }), iM);
          return () => {
            window.clearTimeout(OM)
          }
        }), [MM]), MM > performance.now()
      }(rM.restedEndsAt), {
        energy: SM,
        breakEvenEnergy: jM,
        luckPercent: aM
      } = rM, nM = null !== aM && void 0 !== aM ? aM : rM.earningsPercent;
      return (0, CM.jsxs)("div", {
        className: hM()("GreenvilleMoodChip", {
          Exhausted: SM < 25,
          Rested: OM,
          Tired: !OM && SM < jM && SM >= 25,
          Drained: !OM && SM < 25
        }),
        role: "img",
        "aria-label": iM("greenvilleGame:moodEnergyLabel", {
          energy: Math.round(SM)
        }),
        children: [(0, CM.jsx)(VM.b, {
          name: RS(SM),
          className: "GreenvilleMoodChipFace"
        }), OM && (0, CM.jsx)("span", {
          className: "GreenvilleMoodChipZz",
          children: iM("greenvilleGame:moodRestedGlyph")
        }), (0, CM.jsxs)("div", {
          className: "GreenvilleMoodChipMeter",
          style: {
            "--greenville-break-even": `${jM}%`
          },
          children: [(0, CM.jsx)("div", {
            className: "GreenvilleMoodChipBar",
            children: (0, CM.jsx)("div", {
              className: "GreenvilleMoodChipFill",
              style: {
                transform: `scaleX(${Math.min(100,Math.max(0,SM))/100})`
              }
            })
          }), (0, CM.jsx)("div", {
            className: "GreenvilleMoodChipTick"
          })]
        }), null === aM && (0, CM.jsx)("span", {
          className: "GreenvilleMoodChipCoin",
          "aria-hidden": "true",
          children: (0, CM.jsx)(yM.b, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), (0, CM.jsxs)("span", {
          className: hM()("GreenvilleMoodChipEarnings", {
            Positive: Math.round(nM) > 0,
            Negative: Math.round(nM) < 0
          }),
          children: [null !== aM && (0, CM.jsx)("span", {
            className: "GreenvilleMoodChipLuck",
            children: iM("greenvilleGame:luck")
          }), pS(nM)]
        }), rM.adBoosted && (0, CM.jsx)("span", {
          className: "GreenvilleMoodChipBoost",
          children: (0, CM.jsx)(VM.b, {
            name: "bolt"
          })
        })]
      })
    }

    function DS(MM) {
      let {
        controller: rM
      } = MM;
      (0, lM.e)(Ai, null);
      const iM = rM.getPlace();
      return "hudHome" !== (null === iM || void 0 === iM ? void 0 : iM.kind) || null === iM.runStartedAt ? null : (0, CM.jsx)(kS, {
        startedAt: iM.runStartedAt
      })
    }

    function kS(MM) {
      let {
        startedAt: rM
      } = MM;
      const iM = Math.max(0, Math.floor(-(0, wO.g)(rM)));
      return (0, CM.jsx)("div", {
        className: "GreenvilleMarketCountdown",
        role: "timer",
        children: (0, CM.jsxs)("div", {
          className: "GreenvilleMarketCountdownTime FullyFancyText",
          children: [Math.floor(iM / 60), ":", String(iM % 60).padStart(2, "0")]
        })
      })
    }
    const ZS = [{
        transform: "translateY(100%)",
        opacity: 0
      }, {
        transform: "translateY(0)",
        opacity: 1
      }],
      oS = [{
        transform: "translateY(-100%)",
        opacity: 0
      }, {
        transform: "translateY(0)",
        opacity: 1
      }];

    function fS(MM) {
      return MM ? `${MM.number}|${MM.street.name}` : ""
    }

    function YS(MM) {
      let {
        address: rM,
        large: iM,
        rootRef: OM
      } = MM;
      const SM = function(MM) {
          switch (MM.kind) {
            case "junction":
              return [{
                street: MM.along,
                number: null
              }, {
                street: MM.cross,
                number: null
              }];
            case "plot":
            case "tile":
              return [{
                street: MM.street,
                number: MM.number
              }, null];
            case "street":
              return [{
                street: MM.street,
                number: MM.block
              }, null]
          }
        }(rM),
        jM = iM && "plot" === rM.kind ? rM.neighbourhood : null,
        aM = (0, PM.useRef)(null),
        nM = (0, PM.useRef)(null),
        QM = (0, PM.useRef)(SM),
        zM = (0, PM.useRef)({
          large: iM,
          top: 0,
          height: 0
        }),
        LM = (0, PM.useRef)([]),
        mM = (0, PM.useRef)(null);
      (0, PM.useLayoutEffect)((() => {
        const MM = QM.current;
        if (QM.current = SM, window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const rM = [];
        if (fS(MM[0]) !== fS(SM[0]) && rM.push(aM.current.animate(ZS, {
            duration: 180,
            easing: "ease-out"
          })), SM[1] && !MM[1] && rM.push(nM.current.animate(oS, {
            duration: 220,
            easing: "ease-out"
          })), rM.length > 0) {
          for (const MM of LM.current) MM.cancel();
          LM.current = rM
        }
      }), [fS(SM[0]), fS(SM[1])]), (0, PM.useLayoutEffect)((() => {
        var MM;
        const rM = OM.current,
          SM = zM.current;
        zM.current = {
          large: iM,
          top: rM.offsetTop,
          height: rM.offsetHeight
        }, SM.large === iM || 0 === SM.height || 0 === rM.offsetHeight || window.matchMedia("(prefers-reduced-motion: reduce)").matches || (null === (MM = mM.current) || void 0 === MM || MM.cancel(), mM.current = rM.animate([{
          transform: `translateY(${SM.top-rM.offsetTop}px) scale(${SM.height/rM.offsetHeight})`
        }, {
          transform: "none"
        }], {
          duration: 260,
          easing: "ease-out"
        }))
      }), [iM, jM, fS(SM[0]), fS(SM[1])]), (0, PM.useEffect)((() => {
        const MM = OM.current,
          rM = new ResizeObserver((() => {
            zM.current = {
              ...zM.current,
              top: MM.offsetTop,
              height: MM.offsetHeight
            }
          }));
        return rM.observe(MM.parentElement), () => {
          var MM;
          rM.disconnect();
          for (const rM of LM.current) rM.cancel();
          null === (MM = mM.current) || void 0 === MM || MM.cancel()
        }
      }), [OM]);
      const [HM, JM] = SM;
      return (0, CM.jsxs)("div", {
        ref: OM,
        className: hM()("GreenvilleNavSign", {
          Large: iM
        }),
        children: [(0, CM.jsxs)("div", {
          className: "GreenvilleNavBlade",
          children: [null !== jM && (0, CM.jsx)("span", {
            className: "GreenvilleNavHeader",
            children: jM
          }), (0, CM.jsx)(NS, {
            blade: HM,
            textRef: aM
          })]
        }), JM && (0, CM.jsx)("div", {
          ref: nM,
          className: "GreenvilleNavBlade",
          children: (0, CM.jsx)(NS, {
            blade: JM
          })
        })]
      })
    }

    function NS(MM) {
      let {
        blade: rM,
        textRef: iM
      } = MM;
      return (0, CM.jsxs)("span", {
        ref: iM,
        className: "GreenvilleNavBladeText",
        children: [null !== rM.number && (0, CM.jsx)("span", {
          className: "GreenvilleNavNumber",
          children: rM.number
        }), (0, CM.jsxs)("span", {
          className: "GreenvilleNavStreet",
          children: [rM.street.shortName, " ", (0, CM.jsx)("span", {
            className: "GreenvilleNavSuffix",
            children: rM.street.suffix
          })]
        })]
      })
    }
    const AS = "4rem",
      xS = `translateY(${AS}) scale(1.4)`,
      vS = [{
        transform: xS,
        opacity: 0
      }, {
        transform: xS,
        opacity: 1,
        offset: .12
      }, {
        transform: xS,
        opacity: 1,
        offset: .7,
        easing: "ease-in-out"
      }, {
        transform: "none",
        opacity: 1
      }],
      FS = [{
        opacity: 0
      }, {
        opacity: 1
      }];

    function BS(MM) {
      var rM;
      let {
        controller: iM,
        nav: OM
      } = MM;
      (0, lM.e)(Ai, null), (0, lM.e)(jS, null);
      const {
        t: SM
      } = (0, UM.A)(), jM = (0, oM.b)(), aM = (0, PM.useRef)(null), nM = (0, PM.useRef)(null), QM = (0, PM.useRef)(null), zM = (0, PM.useRef)(null), LM = (0, PM.useRef)(null), mM = (0, PM.useRef)(null), HM = (0, pr.j)("hiddenPlayerNames"), hM = iM.getPlace(), JM = OM.getAddress(), dM = hM && zO(SM, hM, JM, HM), yM = dM ? dM.key : null;
      if ((0, PM.useLayoutEffect)((() => {
          var MM, rM, iM, OM;
          if (null === yM) return null === (iM = zM.current) || void 0 === iM || iM.cancel(), void(null === (OM = LM.current) || void 0 === OM || OM.cancel());
          if (aM.current === yM) return;
          if (aM.current = yM, jM) return;
          const SM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          null === (MM = zM.current) || void 0 === MM || MM.cancel(), zM.current = nM.current.animate(SM ? FS : vS, {
            duration: SM ? 400 : 2200
          }), null === (rM = LM.current) || void 0 === rM || rM.cancel(), !SM && QM.current && (LM.current = QM.current.animate(function(MM) {
            const rM = `0 calc(${AS} + ${(1.4-1)*MM}px)`;
            return [{
              translate: "0 0",
              easing: "ease-out"
            }, {
              translate: rM,
              offset: .12
            }, {
              translate: rM,
              offset: .7,
              easing: "ease-in-out"
            }, {
              translate: "0 0"
            }]
          }(nM.current.offsetHeight), {
            duration: 2200
          }))
        }), [yM]), (0, PM.useEffect)((() => () => {
          var MM, rM;
          null === (MM = zM.current) || void 0 === MM || MM.cancel(), null === (rM = LM.current) || void 0 === rM || rM.cancel()
        }), []), !hM) return null;
      let EM = "outside" === JM.kind ? null : JM;
      return !dM || "plot" !== JM.kind && "tile" !== JM.kind ? dM && EM && (null === (rM = mM.current) || void 0 === rM ? void 0 : rM.key) === dM.key && (EM = mM.current.address) : mM.current = {
        key: dM.key,
        address: JM
      }, (0, CM.jsxs)("div", {
        className: "GreenvilleTopBar",
        children: [dM && (0, CM.jsx)(XS, {
          title: dM,
          tagRef: nM,
          job: "hudJob" === hM.kind ? hM : null,
          home: "hudHome" === hM.kind ? hM : null
        }), EM && (0, CM.jsx)(YS, {
          address: EM,
          large: !dM,
          rootRef: QM
        })]
      })
    }

    function XS(MM) {
      let {
        title: rM,
        tagRef: iM,
        job: OM,
        home: SM
      } = MM;
      return (0, CM.jsxs)("div", {
        ref: iM,
        className: "GreenvillePlaceTag",
        role: "status",
        children: [null !== rM.eyebrow && (0, CM.jsx)("span", {
          className: "GreenvillePlaceTagEyebrow",
          children: rM.eyebrow
        }), (0, CM.jsx)("strong", {
          className: "GreenvillePlaceTagName",
          children: rM.name
        }), OM && (0, CM.jsx)(IS, {
          job: OM
        }), SM && (0, CM.jsx)(qS, {
          home: SM
        })]
      })
    }

    function IS(MM) {
      let {
        job: rM
      } = MM;
      const {
        t: iM
      } = (0, UM.A)(), {
        level: OM,
        expInto: SM,
        expNeeded: jM
      } = rM, aM = 0 === jM;
      return (0, CM.jsxs)("div", {
        className: "GreenvillePlaceTagRow",
        children: [(0, CM.jsx)("span", {
          className: "GreenvillePlaceTagJob",
          "aria-hidden": "true",
          children: (0, CM.jsx)(yM.b, {
            itemName: nO[rM.job],
            amount: 0
          })
        }), (0, CM.jsx)("span", {
          className: "GreenvillePlaceTagLevel",
          children: iM("greenvilleGame:levelShort", {
            level: OM
          })
        }), (0, CM.jsx)("div", {
          className: "GreenvillePlaceTagBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": aM ? 100 : Math.round(SM / jM * 100),
          children: (0, CM.jsx)("div", {
            className: "GreenvillePlaceTagBarFill",
            style: {
              transform: `scaleX(${aM?1:Math.min(1,SM/jM)})`
            }
          })
        }), !aM && (0, CM.jsxs)("span", {
          className: "GreenvillePlaceTagExp",
          children: [(0, kM.g)(SM), "/", (0, kM.g)(jM)]
        }), aM && (0, CM.jsx)("span", {
          className: "GreenvillePlaceTagMax",
          children: iM("greenvilleGame:levelMax")
        }), null !== rM.status && (0, CM.jsx)(KS, {
          status: rM.status
        })]
      })
    }

    function KS(MM) {
      let {
        status: rM
      } = MM;
      const {
        t: iM
      } = (0, UM.A)();
      switch (rM.kind) {
        case "hudTier":
          return (0, CM.jsxs)("span", {
            className: hM()("GreenvillePlaceChip", {
              Locked: rM.locked
            }),
            children: [rM.locked && (0, CM.jsx)(VM.b, {
              name: "lock"
            }), iM(`greenvilleGame:${rM.tierKey}`)]
          });
        case "hudBay":
          return (0, CM.jsxs)("span", {
            className: "GreenvillePlaceChip",
            children: [iM("greenvilleGame:demolitionBayObject", {
              material: iM(`greenvilleGame:${rM.materialKey}`),
              object: iM(`greenvilleGame:${rM.objectKey}`)
            }), (0, CM.jsx)("span", {
              className: "GreenvillePlaceChipBar",
              children: (0, CM.jsx)("span", {
                className: "GreenvillePlaceChipBarFill",
                style: {
                  transform: `scaleX(${rM.percent/100})`
                }
              })
            })]
          });
        case "hudBayEmpty":
          return (0, CM.jsx)("span", {
            className: "GreenvillePlaceChip",
            children: iM("greenvilleGame:demolitionYardIncoming")
          });
        case "hudFarmTier":
          return (0, CM.jsx)("span", {
            className: "GreenvillePlaceChip Golden",
            children: iM("greenvilleGame:farmGoldenChance", {
              percent: rM.goldenPercent
            })
          })
      }
    }

    function qS(MM) {
      let {
        home: rM
      } = MM;
      const {
        t: iM
      } = (0, UM.A)();
      return rM.pvp || rM.parkour || !rM.visitorsAllowed ? (0, CM.jsxs)("div", {
        className: "GreenvillePlaceTagRow GreenvillePlaceTagChips",
        children: [rM.pvp && (0, CM.jsx)("span", {
          className: "GreenvillePlaceChip Danger",
          children: iM("greenvilleGame:houseChipPvp")
        }), rM.parkour && (0, CM.jsx)("span", {
          className: "GreenvillePlaceChip",
          children: iM("greenvilleGame:houseChipParkour")
        }), !rM.visitorsAllowed && (0, CM.jsxs)("span", {
          className: "GreenvillePlaceChip Locked",
          children: [(0, CM.jsx)(VM.b, {
            name: "lock"
          }), iM("greenvilleGame:houseChipVisitorsOff")]
        })]
      }) : null
    }
    const TS = function(MM, rM, iM, SM) {
      let jM, {
        localPlayerId: aM
      } = SM;
      const HM = new mM((MM => {
          nM.i.Tz(LM, MM)
        })),
        hM = new yO((MM => {
          nM.i.Tz(dO, MM)
        })),
        JM = {
          onGain: () => {
            jM.playSound(aM, "rpgHandleCoins1", .5, .9 + .3 * Math.random())
          },
          onCoinLanded: (MM, rM) => {
            jM.playSound(aM, "pickUp", .3, 1 + .5 * MM / Math.max(1, rM - 1))
          }
        },
        dM = [],
        yM = {
          open: MM => {
            for (const rM of dM) rM !== MM && rM.onMenuClosed();
            (0, zM.w)()
          },
          close: zM.k,
          dismiss: zM.n
        },
        lM = new QM.e,
        EM = new Vr((MM => {
          nM.i.Tz(qr, MM)
        }), yM, (MM => {
          jM.sendCommand(null === MM ? OM : `${OM} ${MM}`)
        }), lM),
        UM = new TM((MM => {
          nM.i.Tz(KM, MM)
        }), yM, (MM => {
          jM.sendCommand(`demolition pick ${MM}`)
        }), lM),
        GM = new lr((MM => {
          nM.i.Tz(dr, MM)
        }), yM, (MM => {
          jM.sendCommand(`garage pick ${MM}`)
        }), lM),
        CM = new bO((MM => {
          nM.i.Tz(CO, MM)
        })),
        eM = new vi((MM => {
          nM.i.Tz(Ai, MM)
        }), (MM => {
          nM.i.Tz(xi, MM)
        })),
        bM = new mS((MM => {
          nM.i.Tz(jS, MM)
        }), (MM => {
          nM.i.Tz(aS, MM)
        }), (MM => {
          nM.i.Tz(PS, MM)
        }));
      let wM = null;
      const tM = new ur((MM => {
          nM.i.Tz(tr, MM)
        }), (MM => {
          nM.i.Tz(gr, MM)
        }), yM, (MM => {
          jM.sendCommand(MM)
        }), lM),
        gM = new li((MM => {
          nM.i.Tz(Ji, MM)
        }), (MM => {
          nM.i.Tz(di, MM)
        }), yM, (MM => {
          jM.sendCommand(MM)
        }), lM);
      dM.push(EM, UM, GM, tM, gM);
      let uM = null;
      return {
        onCreate: MM => {
          jM = MM, bM.start(MM), wM = new YO(CM), uM = (0, zM.C)((0, PM.createElement)(PM.Fragment, null, (0, PM.createElement)(RM, {
            controller: HM
          }), (0, PM.createElement)(UO, {
            controller: hM
          }), (0, PM.createElement)(kO, {
            market: CM,
            markers: wM
          }), (0, PM.createElement)(gO, {
            controller: CM
          }), (0, PM.createElement)(BS, {
            controller: eM,
            nav: bM
          }), (0, PM.createElement)(WS, {
            controller: eM
          }), (0, PM.createElement)(LO, {
            controller: eM
          }, (0, PM.createElement)(xM, {
            sounds: JM
          }), (0, PM.createElement)(uS, {
            controller: bM
          }), (0, PM.createElement)(Ni, {
            controller: gM
          }), (0, PM.createElement)(RO, {
            controller: CM
          }), (0, PM.createElement)(Kr, {
            controller: tM
          })), (0, PM.createElement)(DS, {
            controller: eM
          })), {
            content: (0, PM.createElement)(PM.Fragment, null, (0, PM.createElement)(ii, {
              controller: EM
            }), (0, PM.createElement)(Jr, {
              controller: UM
            }), (0, PM.createElement)(Gr, {
              controller: GM
            }), (0, PM.createElement)(Ir, {
              controller: tM
            }), (0, PM.createElement)(fi, {
              controller: gM
            })),
            onClose: () => {
              for (const MM of dM) MM.onMenuClosed()
            }
          })
        },
        onClose: () => {
          uM(), bM.dispose(), EM.dropPresses(), UM.dropPresses(), GM.dropPresses(), wM.waypoints.dispose(), tM.dropPresses(), gM.dropPresses(), lM.dispose()
        },
        onAfterRender: (MM, rM) => {
          const iM = jM.getPositionView(aM);
          wM.frame(rM, iM), bM.frame(rM, iM, jM.isLocalPlayerInVehicle())
        },
        onReceivedMessageFromServer: (MM, rM) => {
          "greenvilleBackpack" === MM ? HM.GL(rM) : "greenvilleOreBuyer" === MM ? EM.GL(rM) : "greenvilleLumberMill" === MM ? tM.GL(rM) : "greenvilleDemolition" === MM ? UM.GL(rM) : "greenvilleGarage" === MM ? GM.GL(rM) : "greenvilleFarmBoard" === MM ? gM.GL(rM) : "greenvilleMarket" === MM ? CM.GL(rM) : "greenvilleHud" === MM ? eM.GL(rM) : "greenvilleLevelUp" === MM ? hM.GL(rM) : "greenvillePlots" === MM ? bM.GL(rM) : "greenvilleMapMarkers" === MM && bM.receiveMarkers(rM)
        }
      }
    }
  },
  40551: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => PM,
      g: () => aM
    });
    var OM = iM(9816);
    const SM = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      jM = [150, 150, 150],
      aM = -2147483648;
    class PM {
      constructor(MM) {
        this.averages = MM, this.byId = new Map
      }
      get(MM) {
        var rM, iM, aM, PM, nM;
        const QM = this.byId.get(MM);
        if (void 0 !== QM) return QM;
        const zM = null !== (rM = null === (iM = OM.k[MM]) || void 0 === iM ? void 0 : iM.name) && void 0 !== rM ? rM : "",
          LM = zM.split("|")[0],
          mM = null !== (aM = this.averages[zM]) && void 0 !== aM ? aM : this.averages[LM],
          HM = null !== (PM = null !== (nM = null === mM || void 0 === mM ? void 0 : mM[0]) && void 0 !== nM ? nM : SM[LM]) && void 0 !== PM ? PM : 0 === (null === mM || void 0 === mM ? void 0 : mM.length) ? null : jM;
        return this.byId.set(MM, HM), HM
      }
      getDrawnIds() {
        const MM = new Uint8Array(65536);
        for (let rM = 1; rM < 65536; rM++) void 0 !== OM.k[rM] && null !== this.get(rM) && (MM[rM] = 1);
        return MM
      }
      drawPixel(MM, rM, iM, OM, SM, jM) {
        const PM = function(MM, rM, iM) {
            const OM = MM - rM + (MM - iM);
            return Math.max(.65, Math.min(1.2, .97 + .055 * OM))
          }(OM, SM === aM ? OM : SM, jM === aM ? OM : jM),
          nM = this.get(iM);
        MM[rM] = nM[0] * PM, MM[rM + 1] = nM[1] * PM, MM[rM + 2] = nM[2] * PM, MM[rM + 3] = 255
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);