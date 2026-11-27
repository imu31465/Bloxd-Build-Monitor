export const id = 226;
export const ids = [226];
export const modules = {
  35484: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wr,
      i: () => jr,
      m: () => ar
    });
    var Zr = Qr(72);
    const Wr = new class {
      constructor() {
        this.inFlight = new Map, this.landings = new Map, this.listeners = new Set
      }
      getInFlight(rr) {
        var Sr;
        return null !== (Sr = this.inFlight.get(rr)) && void 0 !== Sr ? Sr : 0
      }
      setInFlight(rr, Sr) {
        this.getInFlight(rr) !== Sr && (this.inFlight.set(rr, Sr), this.notify())
      }
      subscribe(rr) {
        return this.listeners.add(rr), () => {
          this.listeners.delete(rr)
        }
      }
      getLanding(rr) {
        var Sr, Qr;
        return null !== (Sr = null === (Qr = this.landings.get(rr)) || void 0 === Qr ? void 0 : Qr.at(-1)) && void 0 !== Sr ? Sr : null
      }
      hasLanding(rr, Sr) {
        var Qr, Zr;
        return null !== (Qr = null === (Zr = this.landings.get(rr)) || void 0 === Zr ? void 0 : Zr.includes(Sr)) && void 0 !== Qr && Qr
      }
      addLanding(rr, Sr) {
        var Qr;
        const Zr = null !== (Qr = this.landings.get(rr)) && void 0 !== Qr ? Qr : [];
        return this.landings.set(rr, [...Zr, Sr]), this.notify(), () => {
          this.landings.set(rr, this.landings.get(rr).filter((rr => rr !== Sr))), this.notify()
        }
      }
      notify() {
        for (const rr of this.listeners) rr()
      }
    };

    function ar(rr, Sr) {
      const [Qr, ar] = (0, Zr.useState)((() => Wr.getInFlight(rr)));
      return (0, Zr.useLayoutEffect)((() => {
        const Sr = () => {
          ar(Wr.getInFlight(rr))
        };
        return Sr(), Wr.subscribe(Sr)
      }), [rr]), Math.max(0, Sr - Qr)
    }

    function jr(rr, Sr) {
      let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      (0, Zr.useLayoutEffect)((() => {
        if (Qr) return Wr.addLanding(rr, Sr.current)
      }), [rr, Sr, Qr])
    }
  },
  41093: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wr
    });
    var Zr = Qr(41096);
    async function Wr() {
      const {
        averageColors: rr
      } = await Qr.e(235).then((() => Qr(35587)));
      return new Zr.e(rr)
    }
  },
  41065: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => fr
    });
    var Zr = Qr(38211),
      Wr = Qr(1251),
      ar = Qr(1304),
      jr = Qr(40013),
      Ir = Qr(40065);
    class fr {
      constructor(rr, Sr) {
        var Qr;
        this.classes = rr, this.distanceKey = Sr, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.vU = !1, this.kY = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.kY), null === (Qr = window.visualViewport) || void 0 === Qr || Qr.addEventListener("resize", this.kY)
      }
      bindMarker(rr) {
        const Sr = this.refs.get(rr);
        if (Sr) return Sr;
        const Qr = Sr => {
          var Zr;
          null === (Zr = this.markers.get(rr)) || void 0 === Zr || Zr.stopObserving(), this.markers.delete(rr), Sr && !this.vU ? (this.markers.set(rr, this.mount(Sr)), this.refs.set(rr, Qr)) : this.refs.delete(rr)
        };
        return this.refs.set(rr, Qr), Qr
      }
      hasMarkers() {
        return this.markers.size > 0
      }
      setRender(rr) {
        this.render = rr
      }
      update(rr, Sr, Qr, Zr, Wr) {
        const ar = this.markers.get(rr);
        ar && (ar.target ??= [0, 0, 0], ar.target[0] = Sr, ar.target[1] = Qr, ar.target[2] = Zr, this.place(ar), this.ZQ(ar, Wr && Math.hypot(Sr - Wr[0], Qr - Wr[1], Zr - Wr[2])))
      }
      dispose() {
        var rr;
        this.vU = !0, window.removeEventListener("resize", this.kY), null === (rr = window.visualViewport) || void 0 === rr || rr.removeEventListener("resize", this.kY);
        for (const Sr of this.markers.values()) Sr.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(rr) {
        const {
          render: Sr,
          viewport: Qr
        } = this;
        if (!Sr || !rr.target) return;
        const Zr = (50 - Sr.screenBandPct.y) / 100 * Qr.height,
          Wr = {
            x: rr.halfSize.width + 8,
            top: rr.halfSize.height + 8,
            bottom: rr.halfSize.height + rr.labelsBelow + Zr
          },
          ar = Sr.projectWorldPosToViewport(rr.target),
          fr = null !== ar && void 0 !== ar ? ar : Sr.projectWorldPosToScreenPos(rr.target),
          Er = (0, Ir.e)({
            x: fr.x,
            y: fr.y,
            text: ar
          }, Wr, Qr);
        (0, jr.e)(rr.root, Math.round(100 * Er.x) / 100, Math.round(100 * Er.y) / 100)
      }
      ZQ(rr, Sr) {
        if (null === Sr) return void(null !== rr.metres && (rr.metres = null, rr.distance.textContent = ""));
        const Qr = Date.now();
        (null === rr.metres || (0, Zr.d)(Sr, rr.metres, rr.metresShownAt)) && (rr.metres = Math.round(Sr), rr.metresShownAt = Qr, rr.distance.textContent = (0, Wr.z)(ar.f.get().getCurrentLanguageCode(), this.distanceKey, {
          distance: String(rr.metres)
        }))
      }
      mount(rr) {
        const Sr = {
            root: rr,
            distance: rr.querySelector(`.${this.classes.distance}`),
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
          Qr = rr.querySelector(`.${this.classes.labels}`),
          Zr = new ResizeObserver((() => {
            Sr.halfSize = {
              width: Math.max(rr.offsetWidth, Qr.offsetWidth) / 2,
              height: rr.offsetHeight / 2
            }, Sr.labelsBelow = Qr.offsetTop + Qr.offsetHeight - rr.offsetHeight, this.place(Sr)
          }));
        return Zr.observe(rr, {
          box: "border-box"
        }), Zr.observe(Qr, {
          box: "border-box"
        }), Sr.stopObserving = () => {
          Zr.disconnect()
        }, Sr
      }
    }
  },
  41078: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => Da
    });
    const Zr = "ore sell",
      Wr = "lumber ",
      ar = "farm ",
      jr = ["market", "demolition", "mining", "woodcutting", "farming"],
      Ir = "tutorial ";
    var fr = Qr(72),
      Er = Qr(34),
      pr = Qr(40092),
      xr = Qr(40211),
      mr = Qr(3429),
      Nr = Qr(3425),
      Ur = Qr(41065);
    const tr = "greenvilleBackpackView";
    class hr {
      constructor(rr) {
        this.Jp = rr, this.view = null, this.arrivalToken = 0, this.showToken = 0
      }
      getView() {
        return this.view
      }
      vx(rr) {
        if ("hide" === rr[0]) this.view = null;
        else if ("show" === rr[0]) {
          const Sr = rr[3];
          this.view = {
            sx: rr[1],
            shardsPerItem: rr[2],
            total: Sr.reduce(((rr, Sr) => {
              let [, Qr] = Sr;
              return rr + Qr
            }), 0),
            contents: Sr,
            arrival: null,
            showToken: ++this.showToken
          }
        } else {
          if (null === this.view) return void console.warn(`[greenville] backpack ${rr[0]} with no backpack shown`);
          {
            var Sr, Qr;
            const Zr = rr[1],
              Wr = this.view.contents.find((rr => {
                let [Sr] = rr;
                return Sr === Zr
              })),
              ar = this.view.contents.filter((rr => {
                let [Sr] = rr;
                return Sr !== Zr
              })),
              jr = null !== (Sr = null === Wr || void 0 === Wr ? void 0 : Wr[1]) && void 0 !== Sr ? Sr : 0,
              Ir = null !== (Qr = null === Wr || void 0 === Wr ? void 0 : Wr[2]) && void 0 !== Qr ? Qr : 0;
            "shard" === rr[0] ? this.view = {
              ...this.view,
              contents: [...ar, [Zr, jr, Ir + 1]]
            } : this.view = {
              ...this.view,
              total: this.view.total + 1,
              contents: [...ar, [Zr, jr + 1, 0]],
              arrival: {
                item: Zr,
                token: ++this.arrivalToken,
                fromShards: Ir > 0
              }
            }
          }
        }
        this.Jp(this.view)
      }
    }
    var zr = Qr(1155),
      Yr = Qr.n(zr),
      nr = Qr(26),
      er = Qr(38154),
      Kr = Qr(2075),
      yr = Qr(1573),
      Br = Qr(2135),
      Tr = Qr(1251);
    const vr = "data:image/png;base64,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";
    var Or = Qr(1338);
    const Lr = (0, fr.forwardRef)((function(rr, Sr) {
      let {
        contents: Qr,
        sx: Zr,
        full: Wr,
        children: ar
      } = rr;
      const jr = [...Qr].sort(((rr, Sr) => {
        let [Qr] = rr, [Zr] = Sr;
        return Qr.localeCompare(Zr)
      }));
      let Ir = 0;
      return (0, Or.jsxs)("div", {
        ref: Sr,
        className: "GreenvilleBackpackBag",
        children: [ar, (0, Or.jsx)("img", {
          className: Yr()("GreenvilleBackpackArt", {
            Full: Wr
          }),
          src: vr,
          alt: "",
          draggable: !1
        }), (0, Or.jsx)("div", {
          className: "GreenvilleBackpackWindow",
          children: jr.map((rr => {
            let [Sr, Qr] = rr;
            const Wr = Math.min(1 - Ir, Qr / Zr),
              ar = (0, Or.jsx)(Xr, {
                item: Sr,
                below: Ir,
                share: Wr
              }, Sr);
            return Ir += Wr, ar
          }))
        })]
      })
    }));

    function lr() {
      const rr = new Image;
      rr.src = vr, rr.decode().catch((rr => {
        console.error("[greenville] backpack art failed to load", rr)
      }))
    }
    const Xr = (0, fr.memo)((function(rr) {
        let {
          item: Sr,
          below: Qr,
          share: Zr
        } = rr;
        return (0, Or.jsx)("div", {
          className: "GreenvilleBackpackOre",
          style: {
            bottom: `calc(var(--rise) * ${Qr})`,
            height: `calc(var(--rise) * ${Zr} + var(--slant))`
          },
          children: Array.from({
            length: 18
          }, ((rr, Qr) => (0, Or.jsx)("div", {
            className: "GreenvilleBackpackOreTile",
            children: (0, Or.jsx)(Kr.d, {
              itemName: Sr,
              amount: 0
            })
          }, Qr)))
        })
      })),
      Pr = [{
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
      Hr = [{
        transform: "scale(1.3)"
      }, {
        transform: "scale(1)"
      }];
    let qr = 1;

    function Rr(rr) {
      let {
        controller: Sr
      } = rr;
      (0, yr.g)(tr, null), (0, fr.useEffect)(lr, []);
      const Qr = Sr.getView();
      return null === Qr ? null : (0, Or.jsx)(er.d, {
        placement: "bottomLeft",
        children: (0, Or.jsx)(gr, {
          view: Qr
        })
      })
    }

    function gr(rr) {
      let {
        view: Sr
      } = rr;
      const {
        t: Qr
      } = (0, Tr.E)(), {
        isTouchScreen: Zr
      } = (0, nr.n)(["isTouchScreen"]), [Wr, ar] = (0, fr.useState)([]), jr = (0, fr.useRef)(null), Ir = (0, fr.useRef)(null), Er = (0, fr.useRef)([]), pr = (0, fr.useRef)({
        arrival: Sr.arrival,
        showToken: Sr.showToken
      }), {
        arrival: xr,
        showToken: mr
      } = Sr;
      (0, fr.useLayoutEffect)((() => {
        var rr;
        if (mr !== pr.current.showToken) ar([]);
        else if (null !== xr && xr.token !== (null === (rr = pr.current.arrival) || void 0 === rr ? void 0 : rr.token) && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          const rr = {
            id: qr++,
            item: xr.item,
            fromShards: xr.fromShards,
            driftEm: 1.4 * (Math.random() - .5),
            spinDeg: 70 * (Math.random() - .5)
          };
          ar((Sr => Sr.length < 6 ? [...Sr, rr] : Sr))
        }
        pr.current = {
          arrival: xr,
          showToken: mr
        }
      }), [xr, mr]), (0, fr.useEffect)((() => () => {
        for (const rr of Er.current) rr.cancel()
      }), []);
      const Nr = (0, fr.useCallback)((() => {
          for (const rr of Er.current) rr.cancel();
          Er.current = [jr.current.animate(Pr, {
            duration: 300,
            easing: "ease-out"
          }), Ir.current.animate(Hr, {
            duration: 220,
            easing: "ease-out"
          })]
        }), []),
        Ur = (0, fr.useCallback)((rr => {
          ar((Sr => Sr.filter((Sr => Sr.id !== rr)))), Nr()
        }), [Nr]),
        tr = Sr.total - Wr.length,
        hr = tr >= Sr.sx,
        zr = Sr.contents.map((rr => {
          let [Qr, Zr, ar] = rr;
          const jr = Wr.filter((rr => rr.item === Qr)),
            Ir = jr.some((rr => rr.fromShards));
          return [Qr, Zr - jr.length, Ir ? Sr.shardsPerItem : ar]
        })),
        er = zr.filter((rr => {
          let [, Sr, Qr] = rr;
          return Sr > 0 || Qr > 0
        })).reverse().slice(0, 4),
        yr = (0, Br.m)("SpecialAction2");
      return (0, Or.jsxs)("div", {
        className: "GreenvilleBackpack",
        children: [(0, Or.jsxs)("div", {
          className: "GreenvilleBackpackCount SmallTextBold",
          children: [(0, Or.jsx)("span", {
            ref: Ir,
            className: Yr()("GreenvilleBackpackTotal", {
              Full: hr
            }),
            children: tr
          }), (0, Or.jsxs)("span", {
            className: "GreenvilleBackpackCapacity",
            children: ["/ ", Sr.sx]
          })]
        }), (0, Or.jsxs)("div", {
          className: "GreenvilleBackpackRow",
          children: [(0, Or.jsx)(Lr, {
            ref: jr,
            contents: zr,
            sx: Sr.sx,
            full: hr,
            children: Wr.map((rr => (0, Or.jsx)(Mr, {
              drop: rr,
              onLanded: Ur
            }, rr.id)))
          }), (0, Or.jsxs)("div", {
            className: "GreenvilleBackpackInfo",
            children: [er.length > 0 && (0, Or.jsx)("div", {
              className: "GreenvilleBackpackTallies",
              children: er.map((rr => {
                let [Qr, Zr, Wr] = rr;
                return (0, Or.jsxs)("div", {
                  className: "GreenvilleBackpackTally",
                  children: [(0, Or.jsx)("div", {
                    className: "GreenvilleBackpackTallyIcon",
                    children: (0, Or.jsx)(Kr.d, {
                      itemName: Qr,
                      amount: 0
                    })
                  }), Zr > 0 && (0, Or.jsxs)("span", {
                    className: "SmallTextBold",
                    children: ["\xd7", Zr]
                  }), Wr > 0 && (0, Or.jsx)(Cr, {
                    shards: Wr,
                    shardsPerItem: Sr.shardsPerItem
                  })]
                }, Qr)
              }))
            }), hr && (0, Or.jsxs)("div", {
              className: "GreenvilleBackpackFullLine",
              role: "status",
              children: [(0, Or.jsx)("span", {
                className: "GreenvilleBackpackFullTitle SmallTextBold",
                children: Qr("greenvilleGame:backpackFull")
              }), Zr && (0, Or.jsx)("span", {
                className: "SmallTextLight",
                children: Qr("greenvilleGame:backpackReturnTouch")
              }), !Zr && null !== yr && (0, Or.jsx)("span", {
                className: "SmallTextLight",
                children: Qr("greenvilleGame:backpackReturnDesktop", {
                  key: (0, Br.j)(yr)
                })
              })]
            })]
          })]
        })]
      })
    }

    function Cr(rr) {
      let {
        shards: Sr,
        shardsPerItem: Qr
      } = rr;
      return (0, Or.jsx)("div", {
        className: "GreenvilleBackpackShards",
        children: Array.from({
          length: Qr
        }, ((rr, Qr) => (0, Or.jsx)("span", {
          className: Yr()("GreenvilleBackpackShard", {
            Filled: Qr < Sr
          })
        }, Qr)))
      })
    }

    function Mr(rr) {
      let {
        drop: Sr,
        onLanded: Qr
      } = rr;
      const Zr = (0, fr.useRef)(null);
      return (0, fr.useLayoutEffect)((() => {
        const {
          driftEm: rr,
          spinDeg: Wr
        } = Sr, ar = Zr.current.animate([{
          transform: `translate(${rr}em, -3.2em) rotate(${Wr}deg) scale(1.2)`,
          opacity: 0
        }, {
          transform: `translate(${.7*rr}em, -2.4em) rotate(${.7*Wr}deg) scale(1.1)`,
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
        return ar.onfinish = () => {
          Qr(Sr.id)
        }, () => {
          ar.onfinish = null, ar.cancel()
        }
      }), [Sr, Qr]), (0, Or.jsx)("div", {
        ref: Zr,
        className: "GreenvilleBackpackFalling",
        children: (0, Or.jsx)(Kr.d, {
          itemName: Sr.item,
          amount: 0
        })
      })
    }
    var Gr = Qr(92),
      kr = Qr(35488),
      Ar = Qr(3404),
      Vr = Qr(3640),
      ir = Qr(35484);
    const wr = "gold",
      cr = "Gold Coin";

    function Fr() {
      var rr, Sr;
      return null !== (rr = null === (Sr = (0, Ar.l)("currencyAmounts")) || void 0 === Sr ? void 0 : Sr[wr].amount) && void 0 !== rr ? rr : 0
    }
    const or = [{
        transform: "scale(1.18)"
      }, {
        transform: "scale(1)"
      }],
      br = [{
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
    let Jr = 1;

    function Dr(rr) {
      var Sr;
      let {
        sounds: Qr
      } = rr;
      const Zr = null === (Sr = (0, Ar.l)("currencyAmounts")) || void 0 === Sr ? void 0 : Sr[wr];
      return !Zr || Zr.hidden ? null : (0, Or.jsx)(dr, {
        gold: Zr.amount,
        sounds: Qr
      })
    }

    function dr(rr) {
      let {
        gold: Sr,
        sounds: Qr
      } = rr;
      const Zr = (0, Vr.b)(),
        [Wr, ar] = (0, fr.useState)([]),
        jr = (0, fr.useRef)(null),
        Ir = (0, fr.useRef)(null),
        Er = (0, fr.useRef)(null),
        pr = (0, fr.useRef)(null),
        xr = (0, fr.useRef)(Sr);
      (0, fr.useLayoutEffect)((() => {
        const rr = Sr - xr.current;
        if (xr.current = Sr, !(rr <= 0) && (Qr.onGain(), !Zr && !window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
          const Sr = function(rr) {
            const Sr = Math.max(1, Math.min(8, Math.floor(rr))),
              Qr = Math.floor(rr / Sr),
              Zr = [];
            for (let Wr = 0; Wr < Sr; Wr++) {
              const ar = -Math.PI / 2 + (1 === Sr ? 0 : 2.4 * (Wr / (Sr - 1) - .5)) + .3 * (Math.random() - .5),
                jr = 40 + 35 * Math.random();
              Zr.push({
                id: Jr++,
                burst: {
                  x: Math.cos(ar) * jr,
                  y: Math.sin(ar) * jr
                },
                gold: Wr === Sr - 1 ? rr - Qr * (Sr - 1) : Qr,
                delayMs: 45 * Wr,
                step: Wr,
                steps: Sr
              })
            }
            return Zr
          }(rr);
          ar((rr => [...rr, ...Sr.slice(0, Math.max(0, 24 - rr.length))]))
        }
      }), [Sr]), (0, fr.useEffect)((() => () => {
        var rr;
        null === (rr = Er.current) || void 0 === rr || rr.cancel()
      }), []), (0, fr.useLayoutEffect)((() => () => {
        ir.e.setInFlight(wr, 0)
      }), []);
      const mr = (0, fr.useCallback)(((rr, Sr) => {
          pr.current = Sr, Qr.onCoinLanded(rr.step, rr.steps), ar((Sr => Sr.filter((Sr => {
            let {
              id: Qr
            } = Sr;
            return Qr !== rr.id
          }))))
        }), [Qr]),
        Nr = Wr.length,
        Ur = (0, fr.useRef)(Nr);
      (0, fr.useEffect)((() => {
        var rr, Sr;
        Nr < Ur.current && (null === (rr = Er.current) || void 0 === rr || rr.cancel(), Er.current = (null !== (Sr = pr.current) && void 0 !== Sr ? Sr : jr.current).animate(0 === Nr ? br : or, {
          duration: 0 === Nr ? 380 : 160,
          easing: "ease-out"
        }));
        Ur.current = Nr
      }), [Nr]);
      const tr = Wr.reduce(((rr, Sr) => rr + Sr.gold), 0);
      return (0, fr.useLayoutEffect)((() => {
        ir.e.setInFlight(wr, tr)
      }), [tr]), (0, Or.jsxs)(Or.Fragment, {
        children: [(0, Or.jsx)("div", {
          className: "GreenvilleGoldPurse",
          children: (0, Or.jsxs)("div", {
            ref: jr,
            className: "GreenvilleGoldPurseBody",
            children: [(0, Or.jsx)("span", {
              ref: Ir,
              className: "GreenvilleGoldPurseIcon",
              children: (0, Or.jsx)(Kr.d, {
                itemName: cr,
                amount: 0
              })
            }), (0, Or.jsx)("span", {
              className: "GreenvilleGoldPurseAmount SmallTextBold",
              children: (0, kr.i)(Math.max(0, Sr - tr))
            })]
          })
        }), (0, Gr.createPortal)(Wr.map((rr => (0, Or.jsx)(sr, {
          coin: rr,
          target: Ir,
          onLanded: mr
        }, rr.id))), document.body)]
      })
    }

    function sr(rr) {
      let {
        coin: Sr,
        target: Qr,
        onLanded: Zr
      } = rr;
      const Wr = (0, fr.useRef)(null),
        [ar] = (0, fr.useState)((() => ir.e.getLanding(wr))),
        [jr, Ir] = (0, fr.useState)(null !== ar);
      return (0, fr.useEffect)((() => {
        const rr = (null !== ar && void 0 !== ar ? ar : Qr.current).getBoundingClientRect(),
          {
            burst: jr
          } = Sr,
          fr = window.innerWidth / 2,
          Er = window.innerHeight / 2,
          pr = rr.left + rr.width / 2,
          xr = rr.top + rr.height / 2,
          mr = Wr.current.animate([{
            transform: `translate(${fr}px, ${Er}px) scale(0.3)`,
            opacity: 0,
            easing: "ease-out"
          }, {
            transform: `translate(${fr+.7*jr.x}px, ${Er+.7*jr.y}px) scale(1.25)`,
            opacity: 1,
            offset: .15,
            easing: "ease-out"
          }, {
            transform: `translate(${fr+jr.x}px, ${Er+jr.y}px) scale(1)`,
            offset: .35,
            easing: "ease-in-out"
          }, {
            transform: `translate(${fr+jr.x}px, ${Er+jr.y+6}px) scale(1)`,
            offset: .45,
            easing: "cubic-bezier(0.55, 0, 1, 0.45)"
          }, {
            transform: `translate(${pr}px, ${xr}px) scale(0.6)`,
            opacity: 1
          }], {
            duration: 950,
            delay: Sr.delayMs,
            fill: "both"
          });
        let Nr = mr;
        Nr.onfinish = () => {
          Zr(Sr, ar)
        };
        const Ur = ir.e.subscribe((() => {
          var rr;
          if (null === ar || Nr !== mr || ir.e.hasLanding(wr, ar)) return;
          const jr = Qr.current.getBoundingClientRect();
          mr.commitStyles(), Nr = Wr.current.animate([{
            transform: `translate(${jr.left+jr.width/2}px, ${jr.top+jr.height/2}px) scale(0.6)`,
            opacity: 1
          }], {
            duration: Math.max(150, 950 + Sr.delayMs - Number(null !== (rr = mr.currentTime) && void 0 !== rr ? rr : 0)),
            easing: "ease-in",
            fill: "both"
          }), Nr.onfinish = () => {
            Zr(Sr, null)
          }, mr.onfinish = null, mr.cancel(), Ir(!1)
        }));
        return () => {
          Ur(), Nr.onfinish = null, Nr.cancel()
        }
      }), [Sr, Qr, ar, Zr]), (0, Or.jsx)("div", {
        ref: Wr,
        className: Yr()("GreenvilleGoldCoin", {
          IntoMenu: jr
        }),
        children: (0, Or.jsx)(Kr.d, {
          itemName: cr,
          amount: 0
        })
      })
    }
    class ur {
      constructor(rr, Sr, Qr) {
        this.pacer = rr, this.send = Sr, this.onAnswersTimedOut = Qr, this.queued = [], this.unanswered = [], this.answerTimer = null, this.flushing = !1, this.flush = () => {
          if (!this.flushing) {
            this.flushing = !0;
            try {
              for (; this.queued.length > 0 && this.pacer.tryStart();) {
                const rr = this.queued.shift();
                this.unanswered.push(rr), this.answerTimer ??= setTimeout(this.onAnswerTimeout, 15e3), this.send(rr)
              }
            } finally {
              this.flushing = !1
            }
          }
        }, this.onAnswerTimeout = () => {
          this.answerTimer = null, this.unanswered = [], this.onAnswersTimedOut()
        }, rr.subscribe(this.flush)
      }
      getPending() {
        return [...this.unanswered, ...this.queued]
      }
      nx() {
        return 0 === this.unanswered.length && 0 === this.queued.length
      }
      getLastSent() {
        return this.unanswered.at(-1)
      }
      getLastPending() {
        var rr;
        return null !== (rr = this.queued.at(-1)) && void 0 !== rr ? rr : this.unanswered.at(-1)
      }
      push(rr) {
        this.queued.push(rr), this.flush()
      }
      dropWaiting() {
        const rr = this.queued.length > 0;
        return this.queued = [], rr
      }
      takeAnswer() {
        var rr;
        const Sr = null !== (rr = this.unanswered.shift()) && void 0 !== rr ? rr : null;
        return this.stopAnswerTimer(), this.unanswered.length > 0 && (this.answerTimer = setTimeout(this.onAnswerTimeout, 15e3)), Sr
      }
      clear() {
        this.queued = [], this.unanswered = [], this.stopAnswerTimer()
      }
      stopAnswerTimer() {
        null !== this.answerTimer && (clearTimeout(this.answerTimer), this.answerTimer = null)
      }
    }
    class rS {
      constructor(rr, Sr, Qr, Zr) {
        this.confirmed = rr, this.picks = void 0, this.picks = new ur(Sr, Qr, Zr)
      }
      confirm(rr) {
        this.confirmed = rr
      }
      getLastPending() {
        return this.picks.getLastPending()
      }
      getLatest() {
        var rr;
        return null !== (rr = this.getLastPending()) && void 0 !== rr ? rr : this.confirmed
      }
      nx() {
        return this.picks.nx()
      }
      pushLatest(rr) {
        var Sr;
        const Qr = null !== (Sr = this.picks.getLastSent()) && void 0 !== Sr ? Sr : this.confirmed;
        this.picks.dropWaiting() && rr === Qr || this.picks.push(rr)
      }
      takeAnswer() {
        this.picks.takeAnswer()
      }
      clear() {
        this.picks.clear()
      }
    }
    class SS {
      constructor(rr, Sr, Qr) {
        this.closed = rr, this.Jp = Sr, this.menu = Qr, this.view = void 0, this.dismiss = () => {
          this.closePanel() && this.menu.dismiss()
        }, this.onMenuClosed = () => {
          this.closePanel()
        }, this.view = rr
      }
      getView() {
        return this.view
      }
      show(rr) {
        this.set(rr), this.menu.open(this)
      }
      close() {
        this.closePanel() && this.menu.close()
      }
      set(rr) {
        this.view = rr, this.Jp(rr)
      }
      closePanel() {
        return !!this.view.open && (this.dropPresses(), this.set(this.closed), !0)
      }
    }
    const QS = "greenvilleDepotView",
      ZS = {
        open: !1,
        explosives: [],
        picked: 0,
        selected: 0,
        level: 1,
        line: "demolitionDepotIntro"
      };
    class WS extends SS {
      constructor(rr, Sr, Qr, Zr) {
        super(ZS, rr, Sr), this.picks = void 0, this.select = rr => {
          this.set({
            ...this.getView(),
            selected: rr
          })
        }, this.eN = rr => {
          const Sr = this.getView();
          rr !== Sr.picked && (this.picks.pushLatest(rr), this.set({
            ...Sr,
            picked: rr,
            line: "demolitionGrubnikPicked"
          }))
        }, this.onAnswersTimedOut = () => {
          const rr = this.getView();
          rr.open && this.set({
            ...rr,
            picked: this.picks.getLatest()
          })
        }, this.picks = new rS(0, Zr, Qr, this.onAnswersTimedOut)
      }
      vx(rr) {
        if ("openDepot" === rr[0]) {
          const Sr = rr[4];
          Sr && this.picks.takeAnswer();
          const Qr = this.getView();
          if (Sr && !Qr.open) return;
          this.picks.confirm(rr[2]);
          const Zr = this.picks.getLatest(),
            Wr = !Qr.open;
          this.show({
            open: !0,
            explosives: rr[1],
            picked: Zr,
            selected: Wr ? Zr : Qr.selected,
            level: rr[3],
            line: Wr ? "demolitionDepotIntro" : Qr.line
          })
        } else "closeDepot" !== rr[0] && "hide" !== rr[0] || this.close()
      }
      dropPresses() {
        this.picks.clear()
      }
    }
    var aS = Qr(1448),
      jS = Qr(1576),
      IS = Qr(35472),
      fS = Qr(4489),
      ES = Qr(2057),
      pS = Qr(5297);

    function xS(rr) {
      var Sr;
      let {
        item: Qr,
        className: Zr
      } = rr;
      return (0, Or.jsx)(ES.c, {
        className: Zr,
        text: null !== (Sr = (0, IS.displayNameOf)((0, fS.e)(Qr))) && void 0 !== Sr ? Sr : Qr
      })
    }

    function mS(rr) {
      let {
        item: Sr
      } = rr;
      return (0, Or.jsx)(Kr.d, {
        itemName: Sr,
        amount: 0
      })
    }

    function NS(rr) {
      let {
        open: Sr,
        onDismiss: Qr,
        title: Zr,
        className: Wr,
        headerExtra: ar,
        tabs: jr,
        status: Ir,
        children: fr
      } = rr;
      const Er = `${Wr}Title`;
      return (0, Or.jsx)(pS.b, {
        show: Sr,
        close: Qr,
        togglePointerLock: !1,
        ignorePressesAsShown: !0,
        className: "GreenvilleBoardOverlay",
        children: (0, Or.jsxs)("section", {
          className: Yr()("GreenvilleBoard", Wr),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": Er,
          children: [(0, Or.jsxs)("header", {
            className: "GreenvilleBoardHeader",
            children: [(0, Or.jsx)("h2", {
              id: Er,
              className: "VisuallyHidden",
              children: Zr
            }), ar, (0, Or.jsx)(jS.l, {
              onClick: Qr
            })]
          }), jr, (0, Or.jsx)("div", {
            className: "GreenvilleBoardBody",
            children: fr
          }), Ir && (0, Or.jsxs)("footer", {
            className: "GreenvilleBoardStatus",
            children: [(0, Or.jsx)("span", {
              className: "GreenvilleBoardSpeaker",
              children: Ir.speaker
            }), Ir.line]
          })]
        })
      })
    }

    function US(rr) {
      let {
        tabs: Sr,
        selected: Qr,
        onSelect: Zr
      } = rr;
      return (0, Or.jsx)("nav", {
        className: "GreenvilleBoardTabs",
        "data-pad-tabs": "1",
        children: Sr.map((rr => {
          const Sr = rr.id === Qr;
          return (0, Or.jsxs)("button", {
            type: "button",
            className: Yr()("GreenvilleBoardTab", {
              Selected: Sr
            }),
            "aria-pressed": Sr,
            "data-pad-tab": !0,
            "data-pad-selected": Sr ? "true" : void 0,
            onClick: () => {
              Zr(rr.id)
            },
            children: [rr.label, rr.badge]
          }, rr.id)
        }))
      })
    }

    function tS(rr) {
      let {
        className: Sr,
        roomy: Qr = !1,
        children: Zr
      } = rr;
      return (0, Or.jsx)("div", {
        className: Yr()("GreenvilleBoardTiles", Sr, {
          Roomy: Qr
        }),
        style: Qr ? {
          "--tile-columns": (Wr = fr.Children.count(Zr), Wr <= 3 ? Wr : Math.min(4, Math.ceil(Wr / 2)))
        } : void 0,
        "data-pad-select-on-focus": !0,
        children: Zr
      });
      var Wr
    }

    function hS(rr) {
      let {
        icon: Sr,
        name: Qr,
        selected: Zr,
        locked: Wr = !1,
        className: ar,
        onSelect: jr,
        children: Ir
      } = rr;
      return (0, Or.jsxs)("button", {
        type: "button",
        className: Yr()("GreenvilleBoardTile", ar, {
          Selected: Zr,
          Locked: Wr
        }),
        "aria-pressed": Zr,
        "data-pad-default-focus": Zr || void 0,
        onClick: jr,
        children: [(0, Or.jsx)("span", {
          className: "GreenvilleBoardTileIcon",
          children: Sr
        }), (0, Or.jsx)("span", {
          className: "GreenvilleBoardTileName",
          children: Qr
        }), Ir]
      })
    }

    function zS(rr) {
      let {
        icon: Sr,
        name: Qr,
        badges: Zr,
        children: Wr
      } = rr;
      return (0, Or.jsxs)("section", {
        className: "GreenvilleBoardDetail",
        children: [(0, Or.jsxs)("header", {
          className: "GreenvilleBoardDetailHeader",
          children: [(0, Or.jsx)("span", {
            className: "GreenvilleBoardDetailHero",
            children: (0, Or.jsx)("span", {
              className: "GreenvilleBoardDetailIcon",
              children: Sr
            })
          }), (0, Or.jsxs)("div", {
            className: "GreenvilleBoardDetailHeading",
            children: [(0, Or.jsx)("h3", {
              children: Qr
            }), Zr && (0, Or.jsx)("span", {
              className: "GreenvilleBoardDetailBadges",
              children: Zr
            })]
          })]
        }), Wr]
      })
    }

    function YS(rr) {
      let {
        level: Sr
      } = rr;
      const {
        t: Qr
      } = (0, Tr.E)();
      return (0, Or.jsxs)("span", {
        className: "GreenvilleBoardBadge Muted",
        children: [(0, Or.jsx)(aS.c, {
          name: "lock"
        }), Qr("greenvilleGame:boardLevelBadge", {
          level: Sr
        })]
      })
    }

    function nS() {
      const {
        t: rr
      } = (0, Tr.E)();
      return (0, Or.jsx)("span", {
        className: "GreenvilleBoardBadge",
        children: rr("greenvilleGame:demolitionDepotPicked")
      })
    }

    function eS(rr) {
      let {
        line: Sr,
        picked: Qr,
        level: Zr
      } = rr;
      const Wr = Sr[3];
      return (0, Or.jsxs)(Or.Fragment, {
        children: [Qr && (0, Or.jsx)(nS, {}), Wr > Zr && (0, Or.jsx)(YS, {
          level: Wr
        })]
      })
    }

    function KS(rr) {
      let {
        view: Sr,
        controller: Qr
      } = rr;
      const {
        t: Zr
      } = (0, Tr.E)(), Wr = Sr.selected, ar = Sr.explosives[Wr], [jr, Ir, fr, Er, pr] = ar, xr = Wr === Sr.picked, mr = Er > Sr.level;
      return (0, Or.jsxs)(zS, {
        icon: (0, Or.jsx)(mS, {
          item: jr
        }),
        name: Zr(`greenvilleGame:${Ir}`),
        badges: mr && (0, Or.jsx)(YS, {
          level: Er
        }),
        children: [(0, Or.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: Zr(`greenvilleGame:${fr}`)
        }), (0, Or.jsx)("p", {
          className: "GreenvilleDepotStencil",
          children: Zr("greenvilleGame:demolitionDepotMaxLive", {
            count: pr
          })
        }), (0, Or.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [xr && (0, Or.jsx)("span", {
            className: "GreenvilleDepotLoaded",
            children: Zr("greenvilleGame:demolitionDepotPicked")
          }), !xr && (0, Or.jsx)(jS.h, {
            disabled: mr,
            onClick: () => {
              Qr.eN(Wr)
            },
            children: Zr("greenvilleGame:demolitionDepotLoad")
          }), mr && (0, Or.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: Zr("greenvilleGame:demolitionDepotLocked", {
              level: Er
            })
          })]
        })]
      })
    }

    function yS(rr) {
      let {
        controller: Sr
      } = rr;
      const Qr = (0, yr.g)(QS, Sr.getView()),
        {
          t: Zr
        } = (0, Tr.E)();
      return 0 === Qr.explosives.length ? null : (0, Or.jsxs)(NS, {
        open: Qr.open,
        onDismiss: Sr.dismiss,
        title: Zr("greenvilleGame:demolitionDepotTitle"),
        className: "GreenvilleDepotBoard",
        headerExtra: (0, Or.jsx)("span", {
          className: "GreenvilleBoardLevel",
          children: Zr("greenvilleGame:demolitionDepotLevel", {
            level: Qr.level
          })
        }),
        status: {
          speaker: Zr("greenvilleGame:demolitionGrubnikName"),
          line: Zr(`greenvilleGame:${Qr.line}`)
        },
        children: [(0, Or.jsx)(tS, {
          roomy: !0,
          children: Qr.explosives.map(((rr, Wr) => {
            const [ar, jr, Ir, fr, Er] = rr;
            return (0, Or.jsxs)(hS, {
              icon: (0, Or.jsx)(mS, {
                item: ar
              }),
              name: Zr(`greenvilleGame:${jr}`),
              selected: Wr === Qr.selected,
              locked: fr > Qr.level,
              className: Yr()("GreenvilleDepotCrate", {
                Picked: Wr === Qr.picked
              }),
              onSelect: () => {
                Sr.select(Wr)
              },
              children: [(0, Or.jsx)(eS, {
                line: rr,
                picked: Wr === Qr.picked,
                level: Qr.level
              }), (0, Or.jsx)("span", {
                className: "GreenvilleDepotStencil",
                children: Zr("greenvilleGame:demolitionDepotMaxLive", {
                  count: Er
                })
              }), (0, Or.jsx)("span", {
                className: "GreenvilleDepotBlurb",
                children: Zr(`greenvilleGame:${Ir}`)
              })]
            }, ar)
          }))
        }), (0, Or.jsx)(KS, {
          view: Qr,
          controller: Sr
        })]
      })
    }
    const BS = "greenvilleGarageView",
      TS = {
        open: !1,
        cars: [],
        out: null,
        awaiting: !1,
        selected: null,
        line: "dealershipGarageIntro"
      };
    class vS extends SS {
      constructor(rr, Sr, Qr, Zr) {
        super(TS, rr, Sr), this.picks = void 0, this.select = rr => {
          this.set({
            ...this.getView(),
            selected: rr
          })
        }, this.eN = rr => {
          rr !== this.picks.getLastPending() && (this.picks.pushLatest(rr), this.set({
            ...this.getView(),
            out: rr,
            awaiting: !this.picks.nx(),
            line: "dealershipGarageTip"
          }))
        }, this.onAnswersTimedOut = () => {
          const rr = this.getView();
          rr.open && this.set({
            ...rr,
            out: this.picks.getLatest(),
            awaiting: !this.picks.nx()
          })
        }, this.picks = new rS(null, Zr, Qr, this.onAnswersTimedOut)
      }
      vx(rr) {
        if ("open" === rr[0]) {
          var Sr;
          const Qr = rr[3];
          Qr && this.picks.takeAnswer();
          const Zr = this.getView();
          if (Qr && !Zr.open) return;
          this.picks.confirm(rr[2]);
          const Wr = rr[1],
            ar = this.picks.getLatest(),
            jr = !Zr.open;
          this.show({
            open: !0,
            cars: Wr,
            out: ar,
            awaiting: !this.picks.nx(),
            selected: jr ? null !== (Sr = null !== ar && void 0 !== ar ? ar : Wr[0]) && void 0 !== Sr ? Sr : null : Zr.selected,
            line: jr ? "dealershipGarageIntro" : Zr.line
          })
        } else this.close()
      }
      dropPresses() {
        this.picks.clear()
      }
    }

    function OS() {
      const {
        t: rr
      } = (0, Tr.E)();
      return (0, Or.jsx)("span", {
        className: "GreenvilleBoardBadge",
        children: rr("greenvilleGame:dealershipGarageOut")
      })
    }

    function LS(rr) {
      let {
        car: Sr,
        out: Qr,
        awaiting: Zr,
        controller: Wr
      } = rr;
      const {
        t: ar
      } = (0, Tr.E)();
      return (0, Or.jsx)(zS, {
        icon: (0, Or.jsx)(mS, {
          item: Sr
        }),
        name: (0, Or.jsx)(xS, {
          item: Sr
        }),
        children: (0, Or.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [Qr && (0, Or.jsx)("span", {
            className: "GreenvilleGarageOutStamp",
            children: ar("greenvilleGame:dealershipGarageOut")
          }), (0, Or.jsx)(jS.h, {
            disabled: Qr && Zr,
            onClick: () => {
              Wr.eN(Sr)
            },
            children: ar(Qr ? "greenvilleGame:dealershipGarageBringBack" : "greenvilleGame:dealershipGarageTakeOut")
          })]
        })
      })
    }

    function lS(rr) {
      let {
        controller: Sr
      } = rr;
      const Qr = (0, yr.g)(BS, Sr.getView()),
        {
          t: Zr
        } = (0, Tr.E)(),
        Wr = 0 === Qr.cars.length;
      return (0, Or.jsxs)(NS, {
        open: Qr.open,
        onDismiss: Sr.dismiss,
        title: Zr("greenvilleGame:dealershipGarageTitle"),
        className: "GreenvilleGarageBoard",
        status: {
          speaker: Zr("greenvilleGame:dealershipDelName"),
          line: Zr(Wr ? "greenvilleGame:dealershipGarageEmpty" : `greenvilleGame:${Qr.line}`)
        },
        children: [!Wr && (0, Or.jsx)(tS, {
          roomy: !0,
          children: Qr.cars.map((rr => {
            const Zr = rr === Qr.out;
            return (0, Or.jsx)(hS, {
              icon: (0, Or.jsx)(mS, {
                item: rr
              }),
              name: (0, Or.jsx)(xS, {
                item: rr
              }),
              selected: rr === Qr.selected,
              className: Yr()("GreenvilleGarageBay", {
                Out: Zr
              }),
              onSelect: () => {
                Sr.select(rr)
              },
              children: Zr && (0, Or.jsx)(OS, {})
            }, rr)
          }))
        }), null !== Qr.selected && (0, Or.jsx)(LS, {
          car: Qr.selected,
          out: Qr.selected === Qr.out,
          awaiting: Qr.awaiting,
          controller: Sr
        })]
      })
    }
    const XS = {
        kind: "intro"
      },
      PS = {
        open: !1,
        orders: [],
        tracked: null,
        sellLines: [],
        level: 1,
        delivering: [],
        tab: "orders",
        selectedSlot: 0,
        selectedWood: 0,
        line: XS
      };

    function HS(rr) {
      let [Sr, Qr, Zr, Wr, ar, jr] = rr;
      return {
        slot: Sr,
        titleKey: Qr,
        items: Zr,
        exp: Wr,
        gold: ar,
        ap: jr,
        ready: Zr.every((rr => {
          let [, Sr, Qr] = rr;
          return Qr >= Sr
        }))
      }
    }

    function qS(rr, Sr) {
      return "sell" === Sr.action ? function(rr, Sr) {
        const Qr = rr.sellLines.map((rr => {
          const [Qr, , Zr] = rr;
          return null !== Sr && Sr !== Qr ? rr : [Qr, 0, Zr]
        }));
        return {
          ...rr,
          sellLines: Qr
        }
      }(rr, Sr.item) : "accept" === Sr.action ? function(rr, Sr) {
        var Qr;
        const Zr = rr.orders[Sr];
        return {
          ...rr,
          tracked: null !== (Qr = rr.tracked) && void 0 !== Qr ? Qr : Sr,
          orders: rr.orders.map((rr => rr === Zr ? {
            ...rr,
            ap: !0
          } : rr)),
          sellLines: rr.sellLines.map((rr => {
            const [Sr, Qr, Wr] = rr, ar = Zr.items.find((rr => {
              let [Qr] = rr;
              return Qr === Sr
            }));
            return void 0 === ar ? rr : [Sr, Math.max(0, Qr - ar[1]), Wr]
          }))
        }
      }(rr, Sr.slot) : "track" === Sr.action ? {
        ...rr,
        tracked: Sr.slot
      } : {
        ...rr,
        delivering: [...rr.delivering, Sr.slot]
      }
    }
    const RS = "greenvilleLumberMillView",
      gS = "greenvilleLumberTrackerView";
    class CS extends SS {
      constructor(rr, Sr, Qr, Zr, ar) {
        super(PS, rr, Qr), this.publishTracker = Sr, this.board = null, this.commands = void 0, this.tracker = null, this.tab = "orders", this.selectedSlot = 0, this.selectedWood = 0, this.line = XS, this.selectTab = rr => {
          this.tab = rr, this.set({
            ...this.getView(),
            tab: rr
          })
        }, this.selectOrder = rr => {
          this.selectedSlot = rr, this.set({
            ...this.getView(),
            selectedSlot: rr
          })
        }, this.selectWood = rr => {
          this.selectedWood = rr, this.set({
            ...this.getView(),
            selectedWood: rr
          })
        }, this.accept = rr => {
          this.findOrder(rr).ap || this.queue({
            action: "accept",
            slot: rr
          })
        }, this.track = rr => {
          this.getView().tracked !== rr && this.findOrder(rr).ap && this.queue({
            action: "track",
            slot: rr
          })
        }, this.deliver = rr => {
          const Sr = this.findOrder(rr);
          Sr.ap && Sr.ready && !this.getView().delivering.includes(rr) && this.queue({
            action: "deliver",
            slot: rr
          })
        }, this.sell = rr => {
          this.getView().sellLines.some((Sr => {
            let [Qr, Zr] = Sr;
            return Zr > 0 && (null === rr || rr === Qr)
          })) && this.queue({
            action: "sell",
            item: rr
          })
        }, this.onAnswersTimedOut = () => {
          this.getView().open && this.set(this.getBoardView())
        }, this.commands = new ur(ar, (rr => {
          Zr(function(rr) {
            return "sell" === rr.action ? null === rr.item ? `${Wr}sell` : `${Wr}sell ${rr.item}` : `${Wr}${rr.action} ${rr.slot}`
          }(rr))
        }), this.onAnswersTimedOut)
      }
      getTracker() {
        return this.tracker
      }
      vx(rr) {
        if ("open" === rr[0]) {
          const Qr = rr[5],
            Zr = Qr ? this.commands.takeAnswer() : null,
            Wr = !this.getView().open;
          if (Qr && Wr) return;
          if (Wr) this.onReopened(rr);
          else if (null !== Zr) {
            var Sr;
            this.line = null !== (Sr = function(rr, Sr, Qr) {
              if ("deliver" === rr.action) {
                const [, Zr] = Sr[1][rr.slot];
                return Qr[1][rr.slot][5] ? null : {
                  kind: "delivered",
                  titleKey: Zr
                }
              }
              if ("sell" !== rr.action) return null;
              let Zr = 0;
              return Sr[3].forEach(((Sr, Wr) => {
                let [ar, jr] = Sr;
                null !== rr.item && rr.item !== ar || (Zr += Math.max(0, jr - Qr[3][Wr][1]))
              })), Zr > 0 ? {
                kind: "bought",
                count: Zr
              } : null
            }(Zr, this.board, rr)) && void 0 !== Sr ? Sr : this.line
          }
          this.board = rr, this.show(this.getBoardView())
        } else "close" === rr[0] ? this.close() : (this.tracker = null === rr[1] ? null : HS(rr[1]), this.publishTracker(this.tracker))
      }
      dropPresses() {
        this.commands.clear(), this.board = null
      }
      findOrder(rr) {
        return this.getView().orders.find((Sr => Sr.slot === rr))
      }
      onReopened(rr) {
        let [, Sr, , Qr] = rr;
        const Zr = Sr.map(HS).find((rr => rr.ap && rr.ready)),
          Wr = Qr.findIndex((rr => {
            let [, Sr] = rr;
            return Sr > 0
          }));
        void 0 === Zr && -1 !== Wr || (this.tab = "orders"), void 0 !== Zr && (this.selectedSlot = Zr.slot), -1 === Wr || this.selectedWood < Qr.length && Qr[this.selectedWood][1] > 0 || (this.selectedWood = Wr), this.line = XS
      }
      getBoardView() {
        const [, rr, Sr, Qr, Zr] = this.board;
        let Wr = {
          open: !0,
          orders: rr.map(HS),
          tracked: Sr,
          sellLines: Qr,
          level: Zr,
          delivering: [],
          tab: this.tab,
          selectedSlot: this.selectedSlot,
          selectedWood: this.selectedWood,
          line: this.line
        };
        for (const ar of this.commands.getPending()) Wr = qS(Wr, ar);
        return Wr
      }
      queue(rr) {
        this.commands.push(rr), this.set(this.getBoardView())
      }
    }
    var MS = Qr(1489),
      GS = Qr(2128);

    function kS(rr) {
      let {
        amount: Sr,
        item: Qr = cr,
        wI: Zr,
        inTile: Wr = !1,
        iconRef: ar
      } = rr;
      return (0, Or.jsx)(MS.f, {
        delayShow: 200,
        hoverOnly: Wr,
        placement: "top",
        tooltipClassName: "GreenvilleChipTooltipBox",
        tooltipInner: (0, Or.jsx)(AS, {
          item: Qr,
          amount: Sr,
          wI: Zr
        }),
        children: (0, Or.jsxs)("span", {
          className: Yr()("GreenvilleBoardChip", {
            Short: void 0 !== Zr && Zr < Sr
          }),
          children: [(0, Or.jsx)("span", {
            ref: ar,
            className: "GreenvilleBoardChipIcon",
            children: (0, Or.jsx)(mS, {
              item: Qr
            })
          }), Sr.toLocaleString()]
        })
      })
    }

    function AS(rr) {
      let {
        item: Sr,
        amount: Qr,
        wI: Zr
      } = rr;
      const {
        t: Wr
      } = (0, Tr.E)(), ar = (0, GS.f)("itemInfo", (rr => rr[Sr]));
      return (0, Or.jsxs)("div", {
        className: "GreenvilleChipTooltip",
        children: [(0, Or.jsxs)("div", {
          className: "GreenvilleChipTooltipHeader",
          children: [(0, Or.jsx)("span", {
            className: "GreenvilleChipTooltipIcon",
            children: (0, Or.jsx)(mS, {
              item: Sr
            })
          }), (0, Or.jsx)(xS, {
            item: Sr,
            className: "GreenvilleChipTooltipName"
          })]
        }), void 0 !== (null === ar || void 0 === ar ? void 0 : ar.description) && (0, Or.jsx)(ES.c, {
          text: ar.description,
          className: "GreenvilleChipTooltipDescription"
        }), void 0 !== Zr && (0, Or.jsxs)("div", {
          className: Yr()("GreenvilleChipTooltipHeld", {
            Short: Zr < Qr
          }),
          children: [(0, Or.jsx)("span", {
            className: "GreenvilleChipTooltipLabel",
            children: Wr("greenvilleGame:boardYouHave")
          }), (0, Or.jsxs)("span", {
            className: "GreenvilleChipTooltipCount",
            children: [(0, Or.jsx)("span", {
              className: "GreenvilleChipTooltipHeldAmount",
              children: Zr.toLocaleString()
            }), ` / ${Qr.toLocaleString()}`]
          }), (0, Or.jsx)("span", {
            className: "GreenvilleChipTooltipMeter",
            children: (0, Or.jsx)("span", {
              style: {
                width: (Qr > 0 ? 100 * Math.min(1, Zr / Qr) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function VS(rr) {
      let {
        children: Sr
      } = rr;
      const Qr = (0, fr.useRef)(null);
      (0, ir.i)(wr, Qr);
      const Zr = (0, ir.m)(wr, Fr());
      return (0, Or.jsxs)("div", {
        className: "GreenvilleBoardWallet",
        children: [Sr, (0, Or.jsx)(kS, {
          amount: Zr,
          iconRef: Qr
        })]
      })
    }

    function iS(rr, Sr, Qr) {
      const Zr = (0, fr.useRef)({
          slot: rr,
          ap: Sr
        }),
        Wr = (0, fr.useRef)(-1 / 0);
      return (0, fr.useLayoutEffect)((() => {
        Zr.current.slot === rr && Zr.current.ap && !Sr && (Wr.current = performance.now()), Zr.current = {
          slot: rr,
          ap: Sr
        }
      }), [rr, Sr]), () => {
        performance.now() - Wr.current >= 500 && Qr(rr)
      }
    }
    const wS = {
      New: "lumberBoardStateNew",
      Accepted: "lumberBoardStateAccepted",
      Tracking: "lumberBoardTracking",
      Ready: "lumberBoardStateReady"
    };

    function cS(rr, Sr) {
      return rr.ap ? rr.ready ? "Ready" : rr.slot === Sr ? "Tracking" : "Accepted" : "New"
    }

    function FS(rr) {
      let {
        state: Sr
      } = rr;
      const {
        t: Qr
      } = (0, Tr.E)();
      return (0, Or.jsx)("span", {
        className: Yr()("GreenvilleBoardBadge GreenvilleLumberState", Sr, {
          Muted: "Accepted" === Sr
        }),
        children: Qr(`greenvilleGame:${wS[Sr]}`)
      })
    }

    function oS(rr) {
      let {
        order: Sr
      } = rr;
      return (0, Or.jsx)("span", {
        className: "GreenvilleLumberNeeds",
        children: Sr.items.map((rr => {
          let [Sr, Qr, Zr] = rr;
          const Wr = Zr >= Qr;
          return (0, Or.jsxs)("span", {
            className: Yr()("GreenvilleLumberNeed", {
              Met: Wr
            }),
            children: [(0, Or.jsx)("span", {
              className: "GreenvilleLumberNeedIcon",
              children: (0, Or.jsx)(mS, {
                item: Sr
              })
            }), (0, Or.jsx)(xS, {
              item: Sr,
              className: "GreenvilleLumberNeedName"
            }), (0, Or.jsxs)("span", {
              className: "GreenvilleLumberNeedCount",
              children: [Math.min(Zr, Qr).toLocaleString(), "/", Qr.toLocaleString()]
            }), (0, Or.jsx)("span", {
              className: "GreenvilleLumberNeedTick",
              "aria-hidden": "true",
              children: Wr && "\u2713"
            })]
          }, Sr)
        }))
      })
    }

    function bS(rr) {
      let {
        order: Sr,
        inTile: Qr = !1
      } = rr;
      const {
        t: Zr
      } = (0, Tr.E)();
      return (0, Or.jsxs)("span", {
        className: "GreenvilleLumberReward",
        children: [(0, Or.jsx)(kS, {
          amount: Sr.gold,
          inTile: Qr
        }), (0, Or.jsx)("span", {
          className: "GreenvilleLumberExp",
          children: Zr("greenvilleGame:boardExpGain", {
            exp: Sr.exp
          })
        })]
      })
    }

    function JS(rr) {
      let {
        view: Sr,
        order: Qr,
        controller: Zr
      } = rr;
      const {
        t: Wr
      } = (0, Tr.E)(), {
        slot: ar,
        items: jr,
        ap: Ir,
        ready: fr
      } = Qr, Er = iS(ar, Ir, Zr.accept), pr = jr.reduce(((rr, Sr) => {
        let [, Qr, Zr] = Sr;
        return rr + Math.max(0, Qr - Zr)
      }), 0);
      return (0, Or.jsxs)("div", {
        className: "GreenvilleBoardActions",
        children: [!Ir && (0, Or.jsx)(jS.h, {
          onClick: Er,
          children: Wr("greenvilleGame:lumberBoardAccept")
        }), Ir && (0, Or.jsx)(jS.p, {
          disabled: !fr,
          loading: Sr.delivering.includes(ar),
          onClick: () => {
            Zr.deliver(ar)
          },
          children: Wr("greenvilleGame:lumberBoardDeliver")
        }), Ir && !fr && (0, Or.jsx)("span", {
          className: "GreenvilleBoardHint",
          children: Wr("greenvilleGame:lumberBoardDeliverMissing", {
            count: pr
          })
        }), Ir && ar !== Sr.tracked && (0, Or.jsx)(jS.U, {
          onClick: () => {
            Zr.track(ar)
          },
          children: Wr("greenvilleGame:lumberBoardTrack")
        })]
      })
    }

    function DS(rr) {
      let {
        view: Sr,
        controller: Qr
      } = rr;
      const {
        t: Zr
      } = (0, Tr.E)(), Wr = Sr.orders[Sr.selectedSlot], ar = cS(Wr, Sr.tracked), jr = Wr.ap && Wr.slot === Sr.tracked;
      return (0, Or.jsxs)(zS, {
        icon: (0, Or.jsx)(mS, {
          item: Wr.items[0][0]
        }),
        name: Zr(`greenvilleGame:${Wr.titleKey}`),
        badges: (0, Or.jsxs)(Or.Fragment, {
          children: [(0, Or.jsx)(FS, {
            state: ar
          }), jr && "Ready" === ar && (0, Or.jsx)(FS, {
            state: "Tracking"
          })]
        }),
        children: [(0, Or.jsx)(oS, {
          order: Wr
        }), (0, Or.jsx)("dl", {
          className: "GreenvilleBoardFacts",
          children: (0, Or.jsxs)("div", {
            children: [(0, Or.jsx)("dt", {
              children: Zr("greenvilleGame:lumberBoardReward")
            }), (0, Or.jsx)("dd", {
              children: (0, Or.jsx)(bS, {
                order: Wr
              })
            })]
          })
        }), (0, Or.jsx)(JS, {
          view: Sr,
          order: Wr,
          controller: Qr
        })]
      })
    }

    function dS(rr) {
      let {
        view: Sr,
        controller: Qr
      } = rr;
      const {
        t: Zr
      } = (0, Tr.E)();
      return (0, Or.jsxs)(Or.Fragment, {
        children: [(0, Or.jsx)(tS, {
          className: "GreenvilleLumberTickets",
          roomy: !0,
          children: Sr.orders.map((rr => {
            const Wr = cS(rr, Sr.tracked);
            return (0, Or.jsxs)(hS, {
              icon: (0, Or.jsx)(mS, {
                item: rr.items[0][0]
              }),
              name: Zr(`greenvilleGame:${rr.titleKey}`),
              selected: rr.slot === Sr.selectedSlot,
              className: Yr()("GreenvilleLumberTicket", Wr),
              onSelect: () => {
                Qr.selectOrder(rr.slot)
              },
              children: [(0, Or.jsx)(FS, {
                state: Wr
              }), (0, Or.jsx)(oS, {
                order: rr
              }), (0, Or.jsx)(bS, {
                order: rr,
                inTile: !0
              })]
            }, rr.slot)
          }))
        }), (0, Or.jsx)(DS, {
          view: Sr,
          controller: Qr
        })]
      })
    }

    function sS(rr) {
      let {
        item: Sr
      } = rr;
      return (0, Or.jsx)("span", {
        className: "GreenvilleLumberLogEnd",
        children: (0, Or.jsx)(mS, {
          item: Sr
        })
      })
    }

    function uS(rr) {
      let {
        view: Sr,
        controller: Qr
      } = rr;
      const {
        t: Zr
      } = (0, Tr.E)(), [Wr, ar, jr] = Sr.sellLines[Sr.selectedWood], Ir = function(rr, Sr) {
        let Qr = 0,
          Zr = 0;
        for (const Wr of rr.orders)
          if (Wr.ap)
            for (const [rr, ar, jr] of Wr.items) rr === Sr && (Qr += ar, Zr = jr);
        return Math.min(Qr, Zr)
      }(Sr, Wr), fr = Sr.sellLines.some((rr => {
        let [, Sr] = rr;
        return Sr > 0
      }));
      return (0, Or.jsxs)(zS, {
        icon: (0, Or.jsx)(sS, {
          item: Wr
        }),
        name: (0, Or.jsx)(xS, {
          item: Wr
        }),
        badges: ar > 0 && (0, Or.jsx)("span", {
          className: "GreenvilleBoardBadge",
          children: Zr("greenvilleGame:lumberBoardSellHeld", {
            count: ar
          })
        }),
        children: [(0, Or.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, Or.jsxs)("div", {
            children: [(0, Or.jsx)("dt", {
              children: Zr("greenvilleGame:boardYouHave")
            }), (0, Or.jsx)("dd", {
              children: (Ir + ar).toLocaleString()
            })]
          }), (0, Or.jsxs)("div", {
            children: [(0, Or.jsx)("dt", {
              children: Zr("greenvilleGame:lumberBoardSellKept")
            }), (0, Or.jsx)("dd", {
              children: Ir.toLocaleString()
            })]
          }), (0, Or.jsxs)("div", {
            children: [(0, Or.jsx)("dt", {
              children: Zr("greenvilleGame:lumberBoardSellSpare")
            }), (0, Or.jsx)("dd", {
              className: Yr()("GreenvilleLumberSpare", {
                None: 0 === ar
              }),
              children: ar.toLocaleString()
            })]
          }), (0, Or.jsxs)("div", {
            children: [(0, Or.jsx)("dt", {
              children: Zr("greenvilleGame:lumberBoardSellEach")
            }), (0, Or.jsx)("dd", {
              children: (0, Or.jsx)(kS, {
                amount: jr
              })
            })]
          })]
        }), (0, Or.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [(0, Or.jsxs)(jS.p, {
            disabled: 0 === ar,
            onClick: () => {
              Qr.sell(Wr)
            },
            children: [ar > 0 && Zr("greenvilleGame:lumberBoardSell", {
              count: ar
            }), 0 === ar && Zr(Ir > 0 ? "greenvilleGame:lumberBoardSellKeptAll" : "greenvilleGame:lumberBoardSellNone")]
          }), (0, Or.jsx)(jS.h, {
            disabled: !fr,
            onClick: () => {
              Qr.sell(null)
            },
            children: Zr("greenvilleGame:lumberBoardSellAll")
          })]
        })]
      })
    }

    function rQ(rr) {
      let {
        view: Sr,
        controller: Qr
      } = rr;
      const {
        t: Zr
      } = (0, Tr.E)();
      return (0, Or.jsxs)(Or.Fragment, {
        children: [(0, Or.jsx)(tS, {
          className: "GreenvilleLumberWoodPile",
          children: Sr.sellLines.map(((rr, Wr) => {
            let [ar, jr, Ir] = rr;
            return (0, Or.jsxs)(hS, {
              icon: (0, Or.jsx)(sS, {
                item: ar
              }),
              name: (0, Or.jsx)(xS, {
                item: ar
              }),
              selected: Wr === Sr.selectedWood,
              className: Yr()("GreenvilleLumberWood", {
                Spare: jr > 0
              }),
              onSelect: () => {
                Qr.selectWood(Wr)
              },
              children: [jr > 0 && (0, Or.jsx)("span", {
                className: "GreenvilleBoardBadge",
                children: Zr("greenvilleGame:lumberBoardSellHeld", {
                  count: jr
                })
              }), (0, Or.jsx)(kS, {
                amount: Ir,
                inTile: !0
              })]
            }, ar)
          }))
        }), (0, Or.jsx)(uS, {
          view: Sr,
          controller: Qr
        })]
      })
    }

    function SQ(rr) {
      let {
        controller: Sr
      } = rr;
      const Qr = (0, yr.g)(RS, Sr.getView()),
        {
          t: Zr
        } = (0, Tr.E)(),
        Wr = function(rr) {
          const {
            t: Sr
          } = (0, Tr.E)();
          return "delivered" === rr.kind ? Sr("greenvilleGame:lumberTimbertoothThanks", {
            order: Sr(`greenvilleGame:${rr.titleKey}`)
          }) : "bought" === rr.kind ? Sr("greenvilleGame:lumberTimbertoothBought", {
            count: rr.count
          }) : Sr("greenvilleGame:lumberBoardIntro")
        }(Qr.line);
      if (0 === Qr.orders.length) return null;
      const ar = Qr.orders.filter((rr => rr.ap && rr.ready)).length,
        jr = Qr.sellLines.reduce(((rr, Sr) => {
          let [, Qr] = Sr;
          return rr + Qr
        }), 0);
      return (0, Or.jsxs)(NS, {
        open: Qr.open,
        onDismiss: Sr.dismiss,
        title: Zr("greenvilleGame:lumberBoardTitle"),
        className: "GreenvilleLumberBoard",
        headerExtra: (0, Or.jsx)(VS, {
          children: (0, Or.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: Zr("greenvilleGame:lumberBoardLevel", {
              level: Qr.level
            })
          })
        }),
        tabs: (0, Or.jsx)(US, {
          tabs: [{
            id: "orders",
            label: Zr("greenvilleGame:lumberBoardOrders"),
            badge: ar > 0 && (0, Or.jsx)("span", {
              className: "GreenvilleBoardBadge Ready",
              children: Zr("greenvilleGame:lumberBoardReadyCount", {
                count: ar
              })
            })
          }, {
            id: "sell",
            label: Zr("greenvilleGame:lumberBoardSellHeading"),
            badge: jr > 0 && (0, Or.jsx)("span", {
              className: "GreenvilleBoardBadge",
              children: Zr("greenvilleGame:lumberBoardSellHeld", {
                count: jr
              })
            })
          }],
          selected: Qr.tab,
          onSelect: Sr.selectTab
        }),
        status: {
          speaker: Zr("greenvilleGame:lumberTimbertoothName"),
          line: Wr
        },
        children: ["orders" === Qr.tab && (0, Or.jsx)(dS, {
          view: Qr,
          controller: Sr
        }), "sell" === Qr.tab && (0, Or.jsx)(rQ, {
          view: Qr,
          controller: Sr
        })]
      })
    }

    function QQ(rr) {
      let {
        controller: Sr
      } = rr;
      (0, yr.g)(gS, null);
      const {
        t: Qr
      } = (0, Tr.E)(), Zr = Sr.getTracker();
      return null === Zr ? null : (0, Or.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, Or.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: Qr(`greenvilleGame:${Zr.titleKey}`)
        }), (0, Or.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: Zr.items.map((rr => {
            let [Sr, Qr, Zr] = rr;
            return (0, Or.jsxs)("li", {
              className: Yr()("GreenvilleTrackerRow", {
                Done: Zr >= Qr
              }),
              children: [(0, Or.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, Or.jsx)(Kr.d, {
                  itemName: Sr,
                  amount: 0
                })
              }), (0, Or.jsx)(xS, {
                item: Sr,
                className: "GreenvilleTrackerLabel"
              }), (0, Or.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [Math.min(Zr, Qr), "/", Qr]
              })]
            }, Sr)
          }))
        }), Zr.ready && (0, Or.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: Qr("greenvilleGame:lumberTrackerReady")
        })]
      })
    }
    const ZQ = "greenvilleOreBuyerView",
      WQ = {
        open: !1,
        lines: [],
        selected: 0,
        level: 1
      };
    class aQ extends SS {
      constructor(rr, Sr, Qr, Zr) {
        super(WQ, rr, Sr), this.sales = void 0, this.serverLines = [], this.select = rr => {
          this.set({
            ...this.getView(),
            selected: rr
          })
        }, this.sell = rr => {
          this.getView().lines.some((Sr => {
            let [Qr, , , , Zr] = Sr;
            return Zr > 0 && (null === rr || rr === Qr)
          })) && (this.sales.push(rr), this.set({
            ...this.getView(),
            lines: this.getLines()
          }))
        }, this.onAnswersTimedOut = () => {
          const rr = this.getView();
          rr.open && this.set({
            ...rr,
            lines: this.getLines()
          })
        }, this.sales = new ur(Zr, Qr, this.onAnswersTimedOut)
      }
      vx(rr) {
        if ("close" !== rr[0]) {
          const [, Sr, Qr] = rr, Zr = "open" === rr[0] && rr[3];
          Zr && this.sales.takeAnswer();
          const Wr = this.getView();
          if ((Zr || "refresh" === rr[0]) && !Wr.open) return;
          this.serverLines = Sr;
          const ar = Sr.findIndex((rr => rr[4] > 0));
          this.show({
            open: !0,
            lines: this.getLines(),
            selected: Wr.open ? Wr.selected : Math.max(0, ar),
            level: Qr
          })
        } else this.close()
      }
      dropPresses() {
        this.sales.clear()
      }
      getLines() {
        const rr = this.sales.getPending();
        return this.serverLines.map((Sr => {
          const [Qr, Zr, Wr, ar, , jr] = Sr;
          return rr.some((rr => null === rr || rr === Qr)) ? [Qr, Zr, Wr, ar, 0, jr] : Sr
        }))
      }
    }

    function jQ(rr) {
      let {
        line: Sr,
        level: Qr
      } = rr;
      const {
        t: Zr
      } = (0, Tr.E)(), [, , , Wr, ar, jr] = Sr;
      return (0, Or.jsxs)(Or.Fragment, {
        children: [ar > 0 && (0, Or.jsx)("span", {
          className: "GreenvilleBoardBadge",
          children: Zr("greenvilleGame:oreBuyerHeld", {
            count: ar
          })
        }), Wr > Qr && (0, Or.jsxs)("span", {
          className: "GreenvilleBoardBadge Muted",
          children: [(0, Or.jsx)(aS.c, {
            name: "lock"
          }), Zr("greenvilleGame:boardLevelBadge", {
            level: Wr
          })]
        }), Wr <= Qr && jr && (0, Or.jsx)("span", {
          className: "GreenvilleBoardBadge GreenvilleOreRare",
          children: Zr("greenvilleGame:oreBuyerRare")
        })]
      })
    }

    function IQ(rr) {
      let {
        line: Sr
      } = rr;
      return (0, Or.jsx)("span", {
        className: "GreenvilleOreSample",
        children: (0, Or.jsx)(mS, {
          item: Sr[0]
        })
      })
    }

    function fQ(rr) {
      let {
        view: Sr,
        controller: Qr
      } = rr;
      const {
        t: Zr
      } = (0, Tr.E)(), Wr = Sr.lines[Sr.selected], [ar, jr, Ir, fr, Er, pr] = Wr, xr = fr > Sr.level, mr = Sr.lines.some((rr => rr[4] > 0));
      return (0, Or.jsxs)(zS, {
        icon: (0, Or.jsx)(IQ, {
          line: Wr
        }),
        name: (0, Or.jsx)(xS, {
          item: ar
        }),
        badges: (0, Or.jsx)(jQ, {
          line: Wr,
          level: Sr.level
        }),
        children: [(0, Or.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, Or.jsxs)("div", {
            children: [(0, Or.jsx)("dt", {
              children: Zr("greenvilleGame:boardYouHave")
            }), (0, Or.jsx)("dd", {
              className: Yr()("GreenvilleOreHeld", {
                None: 0 === Er
              }),
              children: Er.toLocaleString()
            })]
          }), (0, Or.jsxs)("div", {
            children: [(0, Or.jsx)("dt", {
              children: Zr("greenvilleGame:oreBuyerPriceEach")
            }), (0, Or.jsx)("dd", {
              children: (0, Or.jsx)(kS, {
                amount: jr
              })
            })]
          }), (0, Or.jsxs)("div", {
            children: [(0, Or.jsx)("dt", {
              children: Zr("greenvilleGame:oreBuyerExpEach")
            }), (0, Or.jsxs)("dd", {
              className: "GreenvilleOreExp",
              children: ["+", Ir]
            })]
          })]
        }), pr && (0, Or.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: Zr("greenvilleGame:oreBuyerLegendary")
        }), xr && (0, Or.jsxs)(Or.Fragment, {
          children: [(0, Or.jsx)("p", {
            className: "GreenvilleBoardHint",
            children: Zr("greenvilleGame:oreBuyerLocked", {
              level: fr
            })
          }), (0, Or.jsx)("p", {
            className: "GreenvilleBoardDescription",
            children: Zr("greenvilleGame:oreBuyerTip")
          })]
        }), (0, Or.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [(0, Or.jsxs)(jS.p, {
            disabled: 0 === Er,
            onClick: () => {
              Qr.sell(ar)
            },
            children: [Er > 0 && Zr("greenvilleGame:oreBuyerSell", {
              count: Er
            }), 0 === Er && Zr("greenvilleGame:oreBuyerSellNone")]
          }), (0, Or.jsx)(jS.h, {
            disabled: !mr,
            onClick: () => {
              Qr.sell(null)
            },
            children: Zr("greenvilleGame:oreBuyerSellAll")
          })]
        })]
      })
    }

    function EQ(rr) {
      let {
        controller: Sr
      } = rr;
      const Qr = (0, yr.g)(ZQ, Sr.getView()),
        {
          t: Zr
        } = (0, Tr.E)();
      return 0 === Qr.lines.length ? null : (0, Or.jsxs)(NS, {
        open: Qr.open,
        onDismiss: Sr.dismiss,
        title: Zr("greenvilleGame:oreBuyerTitle"),
        className: "GreenvilleOreBuyerBoard",
        headerExtra: (0, Or.jsx)(VS, {
          children: (0, Or.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: Zr("greenvilleGame:oreBuyerLevel", {
              level: Qr.level
            })
          })
        }),
        status: {
          speaker: Zr("greenvilleGame:oreBuyerName"),
          line: Zr("greenvilleGame:oreBuyerGreet")
        },
        children: [(0, Or.jsx)(tS, {
          roomy: !0,
          children: Qr.lines.map(((rr, Wr) => {
            const [ar, jr, Ir, fr, Er, pr] = rr;
            return (0, Or.jsxs)(hS, {
              icon: (0, Or.jsx)(IQ, {
                line: rr
              }),
              name: (0, Or.jsx)(xS, {
                item: ar
              }),
              selected: Wr === Qr.selected,
              locked: fr > Qr.level && 0 === Er,
              className: Yr()("GreenvilleOreTile", {
                Legendary: pr
              }),
              onSelect: () => {
                Sr.select(Wr)
              },
              children: [(0, Or.jsx)(jQ, {
                line: rr,
                level: Qr.level
              }), (0, Or.jsxs)("span", {
                className: "GreenvilleOrePrice",
                children: [(0, Or.jsx)(kS, {
                  amount: jr,
                  inTile: !0
                }), (0, Or.jsx)("span", {
                  className: "GreenvilleOreExp",
                  children: Zr("greenvilleGame:boardExpGain", {
                    exp: Ir
                  })
                })]
              })]
            }, ar)
          }))
        }), (0, Or.jsx)(fQ, {
          view: Qr,
          controller: Sr
        })]
      })
    }
    const pQ = {
      kind: "greet"
    };

    function xQ(rr) {
      return rr.every((rr => {
        let [, , Sr, Qr] = rr;
        return Qr >= Sr
      }))
    }

    function mQ(rr) {
      let [Sr, Qr, Zr, Wr, ar, jr] = rr;
      return {
        slot: Sr,
        nameKey: Qr,
        needs: Zr,
        exp: Wr,
        gold: ar,
        ap: jr,
        ready: xQ(Zr)
      }
    }

    function NQ(rr, Sr) {
      let [, , Qr, Zr] = rr;
      return Sr ? Qr : Qr - Zr
    }

    function UQ(rr, Sr) {
      let [Qr, Zr] = rr;
      return Qr === Sr.item && null !== Zr === Sr.golden
    }

    function tQ(rr, Sr) {
      return (Sr.golden ? rr.goldenLines : rr.sellLines).find((rr => UQ(rr, Sr)))
    }

    function hQ(rr, Sr) {
      return "sell" === Sr.action ? nQ(function(rr, Sr, Qr) {
        const Zr = rr => {
          if (null !== Sr && !UQ(rr, Sr)) return rr;
          const [Zr, Wr, ar, jr, Ir] = rr;
          return [Zr, Wr, ar - NQ(rr, Qr), Qr ? 0 : jr, Ir]
        };
        return {
          ...rr,
          sellLines: rr.sellLines.map(Zr),
          goldenLines: zQ(rr.goldenLines.map(Zr))
        }
      }(rr, Sr.kind, Sr.all)) : "accept" === Sr.action ? function(rr, Sr) {
        var Qr;
        const {
          needs: Zr
        } = rr.orders[Sr], Wr = rr => {
          const [Sr, Qr, Wr, ar, jr] = rr, Ir = YQ(Zr, rr);
          return Ir ? [Sr, Qr, Wr, Math.min(Wr, ar + Ir[2]), jr] : rr
        };
        return {
          ...rr,
          tracked: null !== (Qr = rr.tracked) && void 0 !== Qr ? Qr : Sr,
          orders: rr.orders.map((rr => rr.slot === Sr ? {
            ...rr,
            ap: !0
          } : rr)),
          sellLines: rr.sellLines.map(Wr),
          goldenLines: rr.goldenLines.map(Wr)
        }
      }(rr, Sr.slot) : "track" === Sr.action ? {
        ...rr,
        tracked: Sr.slot
      } : nQ(function(rr, Sr) {
        const {
          needs: Qr
        } = rr.orders[Sr], Zr = rr => {
          const [Sr, Zr, Wr, ar, jr] = rr, Ir = YQ(Qr, rr);
          return Ir ? [Sr, Zr, Wr - Ir[2], ar - Ir[2], jr] : rr
        };
        return {
          ...rr,
          sellLines: rr.sellLines.map(Zr),
          goldenLines: zQ(rr.goldenLines.map(Zr)),
          delivering: [...rr.delivering, Sr]
        }
      }(rr, Sr.slot))
    }

    function zQ(rr) {
      return rr.filter((rr => {
        let [, , Sr] = rr;
        return Sr > 0
      }))
    }

    function YQ(rr, Sr) {
      let [Qr, Zr] = Sr;
      return rr.find((rr => {
        let [Sr, Wr] = rr;
        return Sr === Qr && Wr === Zr
      }))
    }

    function nQ(rr) {
      const Sr = (Sr, Qr) => {
          const Zr = (null === Qr ? rr.sellLines : rr.goldenLines).find((rr => {
            let [Qr] = rr;
            return Qr === Sr
          }));
          return Zr ? Zr[2] : 0
        },
        Qr = rr.orders.map((Qr => {
          if (rr.delivering.includes(Qr.slot)) return Qr;
          const Zr = Qr.needs.map((rr => {
            let [Qr, Zr, Wr] = rr;
            return [Qr, Zr, Wr, Sr(Qr, Zr)]
          }));
          return {
            ...Qr,
            needs: Zr,
            ready: xQ(Zr)
          }
        }));
      return {
        ...rr,
        orders: Qr
      }
    }

    function eQ(rr) {
      let [, , , Sr, Qr] = rr;
      return [...Sr, ...Qr].reduce(((rr, Sr) => {
        let [, , Qr] = Sr;
        return rr + Qr
      }), 0)
    }
    const KQ = "greenvilleFarmBoardView",
      yQ = "greenvilleFarmTrackerView",
      BQ = {
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
        line: pQ
      };
    class TQ extends SS {
      constructor(rr, Sr, Qr, Zr, Wr) {
        super(BQ, rr, Qr), this.publishTracker = Sr, this.board = null, this.commands = void 0, this.tracker = null, this.tab = "orders", this.selectedOrder = 0, this.selectedProduce = null, this.line = pQ, this.selectTab = rr => {
          this.tab = rr, this.set(this.getBoardView())
        }, this.selectOrder = rr => {
          this.selectedOrder = rr, this.set(this.getBoardView())
        }, this.selectProduce = rr => {
          this.selectedProduce = rr, this.set(this.getBoardView())
        }, this.accept = rr => {
          this.getView().orders[rr].ap || this.queue({
            action: "accept",
            slot: rr
          })
        }, this.track = rr => {
          const Sr = this.getView();
          Sr.tracked !== rr && Sr.orders[rr].ap && this.queue({
            action: "track",
            slot: rr
          })
        }, this.deliver = rr => {
          const Sr = this.getView(),
            Qr = Sr.orders[rr];
          Qr.ap && Qr.ready && !Sr.delivering.includes(rr) && this.queue({
            action: "deliver",
            slot: rr
          })
        }, this.sell = (rr, Sr) => {
          this.queueSale({
            item: rr,
            golden: Sr
          }, !1)
        }, this.sellSpare = () => {
          this.queueSale(null, !1)
        }, this.sellAll = () => {
          this.queueSale(null, !0)
        }, this.onAnswersTimedOut = () => {
          this.getView().open && this.set(this.settleView())
        }, this.commands = new ur(Wr, (rr => {
          Zr(function(rr) {
            return "sell" !== rr.action ? `${ar}${rr.action} ${rr.slot}` : rr.all ? `${ar}sellAll` : null === rr.kind ? `${ar}sell` : `${ar}${rr.kind.golden?"sellGolden":"sell"} ${rr.kind.item}`
          }(rr))
        }), this.onAnswersTimedOut)
      }
      getTracker() {
        return this.tracker
      }
      vx(rr) {
        if ("open" === rr[0]) {
          const Qr = rr[7],
            Zr = Qr ? this.commands.takeAnswer() : null,
            Wr = !this.getView().open;
          if (Qr && Wr) return;
          const ar = this.board;
          if (this.board = rr, Wr) this.onReopened();
          else if (null !== Zr) {
            var Sr;
            this.line = null !== (Sr = function(rr, Sr, Qr) {
              const Zr = Qr[6] - Sr[6];
              if (Zr <= 0) return null;
              if ("deliver" === rr.action) return {
                kind: "delivered",
                nameKey: Sr[1][rr.slot][1],
                gold: Zr
              };
              const Wr = eQ(Sr) - eQ(Qr);
              return "sell" === rr.action && Wr > 0 ? {
                kind: "sold",
                count: Wr,
                gold: Zr
              } : null
            }(Zr, ar, rr)) && void 0 !== Sr ? Sr : this.line
          }
          this.show(this.settleView())
        } else "close" === rr[0] ? this.close() : (this.tracker = null === rr[1] ? null : mQ(rr[1]), this.publishTracker(this.tracker))
      }
      dropPresses() {
        this.commands.clear(), this.board = null
      }
      onReopened() {
        this.line = pQ;
        const rr = this.toView(this.board).orders.find((rr => rr.ap && rr.ready));
        rr && (this.tab = "orders", this.selectedOrder = rr.slot)
      }
      queueSale(rr, Sr) {
        const {
          sellLines: Qr,
          goldenLines: Zr
        } = this.getView();
        [...Qr, ...Zr].some((Qr => NQ(Qr, Sr) > 0 && (null === rr || UQ(Qr, rr)))) && this.queue({
          action: "sell",
          kind: rr,
          all: Sr
        })
      }
      toView(rr) {
        let [, Sr, Qr, Zr, Wr, ar] = rr;
        return {
          open: !0,
          orders: Sr.map(mQ),
          tracked: Qr,
          sellLines: Zr,
          goldenLines: Wr,
          level: ar,
          delivering: [],
          tab: this.tab,
          selectedOrder: this.selectedOrder,
          selectedProduce: this.selectedProduce,
          line: this.line
        }
      }
      getBoardView() {
        let rr = this.toView(this.board);
        for (const Sr of this.commands.getPending()) rr = hQ(rr, Sr);
        return {
          ...rr,
          selectedProduce: this.pickProduce(rr)
        }
      }
      settleView() {
        const rr = this.getBoardView();
        return this.commands.nx() && (this.selectedProduce = rr.selectedProduce), rr
      }
      pickProduce(rr) {
        var Sr, Qr;
        const Zr = this.selectedProduce;
        if (Zr && tQ(rr, Zr)) return Zr;
        if (Zr) return {
          item: Zr.item,
          golden: !1
        };
        const [Wr, ar] = null !== (Sr = null !== (Qr = rr.goldenLines[0]) && void 0 !== Qr ? Qr : rr.sellLines.find((rr => {
          let [, , Sr] = rr;
          return Sr > 0
        }))) && void 0 !== Sr ? Sr : rr.sellLines[0];
        return {
          item: Wr,
          golden: null !== ar
        }
      }
      queue(rr) {
        this.commands.push(rr), this.set(this.getBoardView())
      }
    }
    var vQ = Qr(1472);

    function OQ() {
      const rr = (0, fr.useRef)(null);
      return (0, vQ.b)(rr), (0, Or.jsx)("span", {
        ref: rr,
        className: "GreenvilleFarmSparkle",
        "aria-hidden": "true"
      })
    }

    function LQ(rr) {
      let {
        item: Sr,
        golden: Qr
      } = rr;
      return (0, Or.jsx)("span", {
        className: Yr()("GreenvilleFarmProduce", {
          Golden: Qr
        }),
        children: (0, Or.jsx)(mS, {
          item: Sr
        })
      })
    }

    function lQ(rr) {
      let {
        item: Sr,
        goldenNameKey: Qr
      } = rr;
      const {
        t: Zr
      } = (0, Tr.E)();
      return null !== Qr ? (0, Or.jsx)("span", {
        className: "GreenvilleFarmGoldenName",
        children: Zr(Qr)
      }) : (0, Or.jsx)(xS, {
        item: Sr
      })
    }
    const XQ = {
      New: "greenvilleGame:farmBoardNew",
      Accepted: "greenvilleGame:farmBoardAccepted",
      Tracking: "greenvilleGame:farmOrderTracking",
      Ready: "greenvilleGame:farmBoardReady"
    };

    function PQ(rr, Sr) {
      return rr.ap ? rr.ready ? "Ready" : Sr ? "Tracking" : "Accepted" : "New"
    }

    function HQ(rr) {
      return rr.needs.some((rr => {
        let [, Sr] = rr;
        return null !== Sr
      }))
    }

    function qQ(rr) {
      let {
        order: Sr
      } = rr;
      const [Qr, Zr] = Sr.needs[0];
      return (0, Or.jsx)(LQ, {
        item: Qr,
        golden: null !== Zr
      })
    }

    function RQ(rr) {
      let {
        state: Sr
      } = rr;
      const {
        t: Qr
      } = (0, Tr.E)();
      return (0, Or.jsx)("span", {
        className: Yr()("GreenvilleBoardBadge GreenvilleFarmState", Sr),
        children: Qr(XQ[Sr])
      })
    }

    function gQ(rr) {
      let {
        needs: Sr
      } = rr;
      return (0, Or.jsx)("span", {
        className: "GreenvilleFarmNeeds",
        children: Sr.map((rr => {
          let [Sr, Qr, Zr, Wr] = rr;
          const ar = Wr >= Zr;
          return (0, Or.jsxs)("span", {
            className: Yr()("GreenvilleFarmNeed", {
              Met: ar,
              Golden: null !== Qr
            }),
            children: [(0, Or.jsx)("span", {
              className: "GreenvilleFarmNeedIcon",
              children: (0, Or.jsx)(LQ, {
                item: Sr,
                golden: null !== Qr
              })
            }), (0, Or.jsx)("span", {
              className: "GreenvilleFarmNeedName",
              children: (0, Or.jsx)(lQ, {
                item: Sr,
                goldenNameKey: Qr
              })
            }), (0, Or.jsxs)("span", {
              className: "GreenvilleFarmNeedCount",
              children: [ar && "\u2713 ", Math.min(Wr, Zr), "/", Zr]
            })]
          }, `${Sr}|${Qr}`)
        }))
      })
    }

    function CQ(rr) {
      let {
        order: Sr,
        inTile: Qr = !1
      } = rr;
      const {
        t: Zr
      } = (0, Tr.E)();
      return (0, Or.jsxs)("span", {
        className: "GreenvilleFarmReward",
        children: [(0, Or.jsx)(kS, {
          amount: Sr.gold,
          inTile: Qr
        }), (0, Or.jsx)("span", {
          className: "GreenvilleFarmExp",
          children: Zr("greenvilleGame:boardExpGain", {
            exp: Sr.exp
          })
        })]
      })
    }

    function MQ(rr) {
      let {
        view: Sr,
        controller: Qr
      } = rr;
      const {
        t: Zr
      } = (0, Tr.E)(), Wr = Sr.orders[Sr.selectedOrder], {
        slot: ar,
        nameKey: jr,
        needs: Ir,
        ap: fr,
        ready: Er
      } = Wr, pr = ar === Sr.tracked, xr = iS(ar, fr, Qr.accept), mr = Ir.reduce(((rr, Sr) => {
        let [, , Qr, Zr] = Sr;
        return rr + Math.max(0, Qr - Zr)
      }), 0);
      return (0, Or.jsxs)(zS, {
        icon: (0, Or.jsx)(qQ, {
          order: Wr
        }),
        name: Zr(jr),
        badges: (0, Or.jsxs)(Or.Fragment, {
          children: [(0, Or.jsx)(RQ, {
            state: PQ(Wr, pr)
          }), HQ(Wr) && (0, Or.jsx)("span", {
            className: "GreenvilleBoardBadge GreenvilleFarmGoldenBadge",
            children: Zr("greenvilleGame:farmBoardGolden")
          })]
        }),
        children: [(0, Or.jsx)(gQ, {
          needs: Ir
        }), (0, Or.jsx)("dl", {
          className: "GreenvilleBoardFacts",
          children: (0, Or.jsxs)("div", {
            children: [(0, Or.jsx)("dt", {
              children: Zr("greenvilleGame:farmBoardReward")
            }), (0, Or.jsx)("dd", {
              children: (0, Or.jsx)(CQ, {
                order: Wr
              })
            })]
          })
        }), (0, Or.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [!fr && (0, Or.jsx)(jS.h, {
            onClick: xr,
            children: Zr("greenvilleGame:farmOrderAccept")
          }), fr && pr && (0, Or.jsxs)("span", {
            className: "GreenvilleFarmTracking",
            children: [(0, Or.jsx)(aS.c, {
              name: "crosshairs"
            }), Zr("greenvilleGame:farmOrderTracking")]
          }), fr && !pr && (0, Or.jsx)(jS.U, {
            onClick: () => {
              Qr.track(ar)
            },
            children: Zr("greenvilleGame:farmOrderTrack")
          }), fr && (0, Or.jsx)(jS.p, {
            disabled: !Er,
            loading: Sr.delivering.includes(ar),
            onClick: () => {
              Qr.deliver(ar)
            },
            children: Zr("greenvilleGame:farmOrderDeliver")
          }), fr && !Er && (0, Or.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: Zr("greenvilleGame:farmBoardMissing", {
              count: mr
            })
          })]
        })]
      })
    }

    function GQ(rr) {
      let {
        view: Sr,
        controller: Qr
      } = rr;
      const {
        t: Zr
      } = (0, Tr.E)();
      return (0, Or.jsxs)(Or.Fragment, {
        children: [(0, Or.jsx)(tS, {
          roomy: !0,
          children: Sr.orders.map((rr => (0, Or.jsxs)(hS, {
            icon: (0, Or.jsx)(qQ, {
              order: rr
            }),
            name: Zr(rr.nameKey),
            selected: rr.slot === Sr.selectedOrder,
            className: Yr()("GreenvilleFarmBasket", {
              WantsGolden: HQ(rr)
            }),
            onSelect: () => {
              Qr.selectOrder(rr.slot)
            },
            children: [(0, Or.jsx)(RQ, {
              state: PQ(rr, rr.slot === Sr.tracked)
            }), (0, Or.jsx)(gQ, {
              needs: rr.needs
            }), (0, Or.jsx)(CQ, {
              order: rr,
              inTile: !0
            })]
          }, rr.slot)))
        }), (0, Or.jsx)(MQ, {
          view: Sr,
          controller: Qr
        })]
      })
    }

    function kQ(rr) {
      let {
        line: Sr,
        selected: Qr,
        onSelect: Zr
      } = rr;
      const [Wr, ar, jr, , Ir] = Sr, fr = null !== ar;
      return (0, Or.jsxs)(hS, {
        icon: (0, Or.jsx)(LQ, {
          item: Wr,
          golden: fr
        }),
        name: (0, Or.jsx)(lQ, {
          item: Wr,
          goldenNameKey: ar
        }),
        selected: Qr,
        className: Yr()("GreenvilleFarmCrate", {
          Golden: fr,
          Empty: 0 === jr
        }),
        onSelect: Zr,
        children: [fr && (0, Or.jsx)(OQ, {}), jr > 0 && (0, Or.jsxs)("span", {
          className: "GreenvilleBoardBadge GreenvilleFarmHeld",
          children: ["\xd7", jr]
        }), (0, Or.jsx)(kS, {
          amount: Ir,
          inTile: !0
        })]
      })
    }

    function AQ(rr) {
      let {
        view: Sr,
        controller: Qr
      } = rr;
      const {
        t: Zr
      } = (0, Tr.E)(), Wr = [...Sr.sellLines, ...Sr.goldenLines], ar = Wr.some((rr => NQ(rr, !1) > 0)), jr = Wr.some((rr => NQ(rr, !0) > 0));
      return (0, Or.jsxs)("div", {
        className: "GreenvilleFarmSign",
        children: [(0, Or.jsx)("h3", {
          className: "GreenvilleFarmSignBoard",
          children: Zr("greenvilleGame:farmBoardPrices")
        }), (0, Or.jsxs)("div", {
          className: "GreenvilleFarmSignActions",
          children: [(0, Or.jsx)(jS.h, {
            disabled: !ar,
            onClick: Qr.sellSpare,
            children: Zr("greenvilleGame:farmStallSellSurplus")
          }), (0, Or.jsx)(jS.L, {
            disabled: !jr,
            onClick: Qr.sellAll,
            children: Zr("greenvilleGame:farmStallSellAll")
          })]
        })]
      })
    }

    function VQ(rr) {
      let {
        line: Sr,
        controller: Qr
      } = rr;
      const {
        t: Zr
      } = (0, Tr.E)(), [Wr, ar, jr, Ir, fr] = Sr, Er = null !== ar, pr = NQ(Sr, !1);
      return (0, Or.jsxs)(zS, {
        icon: (0, Or.jsx)(LQ, {
          item: Wr,
          golden: Er
        }),
        name: (0, Or.jsx)(lQ, {
          item: Wr,
          goldenNameKey: ar
        }),
        badges: Er && (0, Or.jsx)("span", {
          className: "GreenvilleBoardBadge GreenvilleFarmGoldenBadge",
          children: Zr("greenvilleGame:farmBoardGolden")
        }),
        children: [Er && (0, Or.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: Zr("greenvilleGame:farmBoardGoldenBlurb")
        }), (0, Or.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, Or.jsxs)("div", {
            children: [(0, Or.jsx)("dt", {
              children: Zr("greenvilleGame:boardYouHave")
            }), (0, Or.jsx)("dd", {
              children: jr
            })]
          }), Ir > 0 && (0, Or.jsxs)("div", {
            children: [(0, Or.jsx)("dt", {
              children: Zr("greenvilleGame:farmBoardKept")
            }), (0, Or.jsx)("dd", {
              children: Ir
            })]
          }), (0, Or.jsxs)("div", {
            children: [(0, Or.jsx)("dt", {
              children: Zr("greenvilleGame:farmBoardSpare")
            }), (0, Or.jsx)("dd", {
              children: pr
            })]
          }), (0, Or.jsxs)("div", {
            children: [(0, Or.jsx)("dt", {
              children: Zr("greenvilleGame:farmBoardPriceEach")
            }), (0, Or.jsx)("dd", {
              children: (0, Or.jsx)(kS, {
                amount: fr
              })
            })]
          })]
        }), (0, Or.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [pr > 0 && (0, Or.jsx)(jS.p, {
            onClick: () => {
              Qr.sell(Wr, Er)
            },
            children: Zr("greenvilleGame:farmBoardSell", {
              count: pr
            })
          }), 0 === jr && (0, Or.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: Zr("greenvilleGame:farmStallNothing")
          }), jr > 0 && 0 === pr && (0, Or.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: Zr("greenvilleGame:farmBoardAllKept")
          })]
        })]
      })
    }

    function iQ(rr) {
      let {
        view: Sr,
        produce: Qr,
        controller: Zr
      } = rr;
      const {
        t: Wr
      } = (0, Tr.E)(), ar = rr => {
        const [Sr, Wr] = rr;
        return (0, Or.jsx)(kQ, {
          line: rr,
          selected: UQ(rr, Qr),
          onSelect: () => {
            Zr.selectProduce({
              item: Sr,
              golden: null !== Wr
            })
          }
        }, `${Sr}|${null!==Wr}`)
      };
      return (0, Or.jsxs)(Or.Fragment, {
        children: [(0, Or.jsxs)(tS, {
          children: [(0, Or.jsx)(AQ, {
            view: Sr,
            controller: Zr
          }), Sr.goldenLines.length > 0 && (0, Or.jsxs)(Or.Fragment, {
            children: [(0, Or.jsx)("h4", {
              className: "GreenvilleFarmSection Golden",
              children: Wr("greenvilleGame:farmBoardGoldenCrops")
            }), Sr.goldenLines.map(ar), (0, Or.jsx)("hr", {
              className: "GreenvilleFarmSection"
            })]
          }), Sr.sellLines.map(ar)]
        }), (0, Or.jsx)(VQ, {
          line: tQ(Sr, Qr),
          controller: Zr
        })]
      })
    }

    function wQ(rr) {
      let {
        controller: Sr
      } = rr;
      const Qr = (0, yr.g)(KQ, Sr.getView()),
        {
          t: Zr
        } = (0, Tr.E)(),
        Wr = function(rr) {
          const {
            t: Sr
          } = (0, Tr.E)();
          return "delivered" === rr.kind ? Sr("greenvilleGame:tillieDelivered", {
            order: Sr(rr.nameKey),
            gold: rr.gold
          }) : "sold" === rr.kind ? Sr("greenvilleGame:tillieSold", {
            count: rr.count,
            gold: rr.gold
          }) : Sr("greenvilleGame:tillieGreet")
        }(Qr.line),
        ar = Qr.selectedProduce;
      if (null === ar) return null;
      const jr = function(rr) {
        return rr.orders.filter((rr => rr.ap && rr.ready)).length
      }(Qr);
      return (0, Or.jsxs)(NS, {
        open: Qr.open,
        onDismiss: Sr.dismiss,
        title: Zr("greenvilleGame:farmBoardTitle"),
        className: "GreenvilleFarmBoard",
        headerExtra: (0, Or.jsx)(VS, {
          children: (0, Or.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: Zr("greenvilleGame:farmBoardLevel", {
              level: Qr.level
            })
          })
        }),
        tabs: (0, Or.jsx)(US, {
          tabs: [{
            id: "orders",
            label: Zr("greenvilleGame:farmBoardOrdersTab"),
            badge: jr > 0 && (0, Or.jsx)("span", {
              className: "GreenvilleBoardBadge GreenvilleFarmReadyBadge",
              children: Zr("greenvilleGame:farmBoardReadyCount", {
                count: jr
              })
            })
          }, {
            id: "stall",
            label: Zr("greenvilleGame:farmBoardStallTab")
          }],
          selected: Qr.tab,
          onSelect: Sr.selectTab
        }),
        status: {
          speaker: Zr("greenvilleGame:farmTillieName"),
          line: Wr
        },
        children: ["orders" === Qr.tab && (0, Or.jsx)(GQ, {
          view: Qr,
          controller: Sr
        }), "stall" === Qr.tab && (0, Or.jsx)(iQ, {
          view: Qr,
          produce: ar,
          controller: Sr
        })]
      })
    }
    var cQ = Qr(39995);

    function FQ(rr) {
      let {
        controller: Sr
      } = rr;
      (0, yr.g)(yQ, null);
      const {
        t: Qr
      } = (0, Tr.E)(), Zr = Sr.getTracker();
      return null === Zr ? null : (0, Or.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, Or.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: Qr(Zr.nameKey)
        }), (0, Or.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: Zr.needs.map((rr => {
            let [Sr, Zr, Wr, ar] = rr;
            return (0, Or.jsxs)("li", {
              className: Yr()("GreenvilleTrackerRow", {
                Done: ar >= Wr,
                Golden: null !== Zr
              }),
              children: [(0, Or.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, Or.jsx)(Kr.d, {
                  itemName: Sr,
                  amount: 0
                })
              }), (0, Or.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: null === Zr ? (0, cQ.g)(Qr, Sr) : Qr(Zr)
              }), (0, Or.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [Math.min(ar, Wr), "/", Wr]
              })]
            }, `${Sr}|${Zr}`)
          }))
        }), Zr.ready && (0, Or.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: Qr("greenvilleGame:farmOrderReady")
        })]
      })
    }
    const oQ = "greenvillePlaceView",
      bQ = "greenvilleMoodView";
    class JQ {
      constructor(rr, Sr) {
        this.publishPlace = rr, this.publishMood = Sr, this.place = null, this.mood = null
      }
      getPlace() {
        return this.place
      }
      getMood() {
        return this.mood
      }
      vx(rr) {
        const Sr = performance.now();
        switch (rr[0]) {
          case "hudMood": {
            const [, Qr, Zr, Wr, ar, jr, Ir] = rr;
            return this.mood = {
              energy: Qr,
              earningsPercent: Zr,
              breakEvenEnergy: Wr,
              restedEndsAt: ar > 0 ? Sr + ar : 0,
              adBoosted: jr,
              luckPercent: Ir
            }, void this.publishMood(this.mood)
          }
          case "hudTown": {
            const [Sr, Qr, Zr] = rr;
            this.place = {
              kind: Sr,
              place: Qr,
              levels: Zr
            };
            break
          }
          case "hudJob": {
            const [Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er] = rr;
            this.place = {
              kind: Sr,
              place: Qr,
              job: Zr,
              level: Wr,
              expInto: ar,
              expNeeded: jr,
              status: null === Ir ? null : DQ(Ir),
              next: null === fr ? null : {
                item: fr[0],
                nameKey: fr[1],
                level: fr[2]
              },
              stats: Er.map((rr => {
                let [Sr, Qr, Zr, Wr] = rr;
                return {
                  stat: Sr,
                  value: Qr,
                  max: Zr,
                  boosted: Wr
                }
              }))
            };
            break
          }
          case "hudHome": {
            const [Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr] = rr;
            this.place = {
              kind: Qr,
              houseName: Zr,
              ownerName: Wr,
              isOwner: ar,
              visitorsAllowed: jr,
              pvp: Ir,
              parkour: fr,
              runStartedAt: Er < 0 ? null : this.getRunStart(Sr - Er),
              bestTimes: pr.map((rr => {
                let [Sr, Qr] = rr;
                return {
                  playerName: Sr,
                  seconds: Qr
                }
              }))
            };
            break
          }
          case "hudSpleef": {
            const [Sr, Qr, Zr] = rr;
            this.place = {
              kind: Sr,
              eliminations: Qr,
              wins: Zr
            };
            break
          }
        }
        this.publishPlace(this.place)
      }
      getRunStart(rr) {
        var Sr;
        const Qr = "hudHome" === (null === (Sr = this.place) || void 0 === Sr ? void 0 : Sr.kind) ? this.place.runStartedAt : null;
        return null !== Qr && Math.abs(Qr - rr) < 500 ? Qr : rr
      }
    }

    function DQ(rr) {
      switch (rr[0]) {
        case "hudTier":
          return {
            kind: rr[0], tierKey: rr[1], locked: rr[2]
          };
        case "hudBay":
          return {
            kind: rr[0], materialKey: rr[1], objectKey: rr[2], percent: rr[3]
          };
        case "hudBayEmpty":
          return {
            kind: rr[0]
          };
        case "hudFarmTier":
          return {
            kind: rr[0], goldenPercent: rr[1]
          }
      }
    }
    var dQ = Qr(4645),
      sQ = Qr(1317),
      uQ = Qr(208);
    const rZ = JSON.parse('{"d":{"constructionSiteA":{"name":"Construction Site A"},"quarry":{"name":"The Quarry","skill":"Mining"},"industry":{"name":"Demolition Yard","skill":"Demolition"},"market":{"name":"Market Street","skill":"Market"},"lumberMill":{"name":"Lumber Mill","skill":"Woodcutting"},"farm":{"name":"Greenville Farm","skill":"Farming"},"constructionSiteB":{"name":"Construction Site B"},"dealership":{"name":"Wheeler\'s Wheels"},"postOffice":{"name":"Post Office & Diner"},"station":{"name":"The Station"},"docks":{"name":"The Docks"}},"e":[[{"kind":"residential","name":"Hillside"},{"kind":"district","district":"quarry"},{"kind":"district","district":"industry"},{"kind":"residential","name":"Ridgeview"}],[{"kind":"residential","name":"Willow Gardens"},{"kind":"district","district":"constructionSiteA"},{"kind":"district","district":"market"},{"kind":"residential","name":"Maple Row"}],[{"kind":"residential","name":"Birchwood"},{"kind":"district","district":"farm"},{"kind":"district","district":"lumberMill"},{"kind":"district","district":"dealership"}],[{"kind":"residential","name":"Seaview"},{"kind":"district","district":"constructionSiteB"},{"kind":"residential","name":"Harbour Terrace"},{"kind":"residential","name":"Lighthouse Point"}]]}'),
      SZ = uQ.i.hx,
      QZ = 1e3 * SZ,
      ZZ = SZ,
      WZ = ZZ + 2 * SZ,
      aZ = 4 * WZ + ZZ;

    function jZ(rr, Sr, Qr) {
      return Sr >= rr.x0 && Sr <= rr.x1 && Qr >= rr.z0 && Qr <= rr.z1
    }
    const IZ = rZ.e,
      fZ = Object.fromEntries(Object.entries(rZ.d).map((rr => {
        let [Sr, {
          name: Qr
        }] = rr;
        return [Sr, Qr]
      })));

    function EZ(rr, Sr) {
      return [QZ + ZZ + rr * WZ, QZ + ZZ + Sr * WZ]
    }

    function pZ() {
      const rr = [];
      IZ.forEach(((Sr, Qr) => {
        Sr.forEach(((Sr, Zr) => {
          if ("residential" !== Sr.kind) return;
          const [Wr, ar] = EZ(Zr, Qr);
          for (const [Qr, jr, Ir] of [
              [0, 0, "north"],
              [1, 0, "north"],
              [0, 1, "south"],
              [1, 1, "south"]
            ]) rr.push({
            chunk: [Wr / SZ + Qr, 0, ar / SZ + jr],
            facing: Ir,
            neighbourhood: Sr.name
          })
        }))
      }));
      const Sr = QZ + aZ / 2,
        Qr = rr => {
          let {
            chunk: Qr
          } = rr;
          return Math.hypot(Qr[0] * SZ + SZ / 2 - Sr, Qr[2] * SZ + SZ / 2 - Sr)
        };
      return rr.sort(((rr, Sr) => Qr(rr) - Qr(Sr)))
    }
    const xZ = {
        market: "Crate",
        demolition: "Moonstone Explosive",
        mining: "Iron Pickaxe",
        woodcutting: "Iron Axe",
        farming: "Wheat"
      },
      mZ = {
        earningPower: "greenvilleGame:marketEarningPower",
        power: "greenvilleGame:demolitionPower",
        points: "greenvilleGame:demolitionPoints",
        depth: "greenvilleGame:miningDepth",
        value: "greenvilleGame:miningValue",
        backpack: "greenvilleGame:miningBackpack",
        luck: "greenvilleGame:luck"
      };

    function NZ(rr, Sr) {
      switch (Sr) {
        case "quarry":
          return fZ.quarry;
        case "demolitionYard":
          return fZ.industry;
        case "marketStreet":
          return fZ.market;
        case "farm":
          return fZ.farm;
        case "lumberMill":
          return fZ.lumberMill;
        case "supermarket":
          return rr("greenvilleGame:market");
        case "demolition":
        case "mining":
        case "woodcutting":
        case "farming":
          return rr(`greenvilleGame:${Sr}`)
      }
    }

    function UZ(rr) {
      let {
        controller: Sr,
        children: Qr
      } = rr;
      (0, yr.g)(oQ, null);
      const [Zr, Wr] = (0, fr.useState)(null);
      (0, dQ.l)(Zr, ".RightElements");
      const ar = Sr.getPlace();
      return (0, Or.jsx)(er.d, {
        placement: "topRight",
        children: (0, Or.jsx)("div", {
          className: "GreenvilleHudColumn",
          children: (0, Or.jsxs)("div", {
            ref: Wr,
            className: "GreenvilleHudColumnStack",
            children: [Qr, "hudTown" === (null === ar || void 0 === ar ? void 0 : ar.kind) && (0, Or.jsx)(hZ, {
              levels: ar.levels
            }), "hudJob" === (null === ar || void 0 === ar ? void 0 : ar.kind) && (0, Or.jsx)(zZ, {
              job: ar
            }), "hudHome" === (null === ar || void 0 === ar ? void 0 : ar.kind) && ar.bestTimes.length > 0 && (0, Or.jsx)(YZ, {
              home: ar
            }), "hudSpleef" === (null === ar || void 0 === ar ? void 0 : ar.kind) && (0, Or.jsx)("div", {
              className: "GreenvilleTrackerCard",
              children: (0, Or.jsx)(tZ, {
                rows: [
                  ["greenvilleGame:spleefEliminations", ar.eliminations],
                  ["greenvilleGame:spleefWins", ar.wins]
                ]
              })
            })]
          })
        })
      })
    }

    function tZ(rr) {
      let {
        rows: Sr
      } = rr;
      const {
        t: Qr
      } = (0, Tr.E)();
      return (0, Or.jsx)("ul", {
        className: "GreenvilleTrackerRows",
        children: Sr.map((rr => {
          let [Sr, Zr] = rr;
          return (0, Or.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, Or.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: Qr(Sr)
            }), (0, Or.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: (0, kr.i)(Zr)
            })]
          }, Sr)
        }))
      })
    }

    function hZ(rr) {
      let {
        levels: Sr
      } = rr;
      const {
        t: Qr
      } = (0, Tr.E)();
      return (0, Or.jsxs)("div", {
        className: "GreenvilleTrackerCard GreenvilleJobsStrip",
        children: [(0, Or.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: Qr("greenvilleGame:jobs")
        }), (0, Or.jsx)("ul", {
          className: "GreenvilleJobsStripJobs",
          children: jr.map(((rr, Zr) => {
            const Wr = Sr[Zr];
            return (0, Or.jsxs)("li", {
              className: Yr()("GreenvilleJobsStripJob", {
                Max: Wr >= 50
              }),
              "aria-label": Qr("greenvilleGame:jobLevel", {
                job: Qr(`greenvilleGame:${rr}`),
                level: Wr
              }),
              children: [(0, Or.jsx)("span", {
                className: "GreenvilleJobsStripIcon",
                "aria-hidden": "true",
                children: (0, Or.jsx)(Kr.d, {
                  itemName: xZ[rr],
                  amount: 0
                })
              }), (0, Or.jsx)("span", {
                className: "GreenvilleJobsStripLevel",
                "aria-hidden": "true",
                children: Qr("greenvilleGame:levelShort", {
                  level: Wr
                })
              })]
            }, rr)
          }))
        })]
      })
    }

    function zZ(rr) {
      let {
        job: {
          stats: Sr,
          next: Qr
        }
      } = rr;
      const {
        t: Zr
      } = (0, Tr.E)();
      return (0, Or.jsxs)(Or.Fragment, {
        children: [Sr.length > 0 && (0, Or.jsx)("div", {
          className: "GreenvilleTrackerCard",
          children: (0, Or.jsx)("ul", {
            className: "GreenvilleTrackerRows",
            children: Sr.map((rr => {
              let {
                stat: Sr,
                value: Qr,
                max: Wr,
                boosted: ar
              } = rr;
              return (0, Or.jsxs)("li", {
                className: "GreenvilleTrackerRow",
                children: [(0, Or.jsx)("span", {
                  className: "GreenvilleTrackerLabel",
                  children: Zr(mZ[Sr])
                }), (0, Or.jsxs)("span", {
                  className: Yr()("GreenvilleTrackerValue", {
                    Boosted: ar
                  }),
                  children: [(0, kr.i)(Qr), null !== Wr && `/${(0,kr.i)(Wr)}`]
                })]
              }, Sr)
            }))
          })
        }), null !== Qr && (0, Or.jsxs)("div", {
          className: "GreenvilleTrackerCard GreenvilleNextUnlock",
          children: [(0, Or.jsx)("span", {
            className: "GreenvilleNextUnlockEyebrow",
            children: Zr("greenvilleGame:nextUnlock")
          }), (0, Or.jsxs)("div", {
            className: "GreenvilleNextUnlockBody",
            children: [(0, Or.jsx)("span", {
              className: "GreenvilleNextUnlockIcon",
              "aria-hidden": "true",
              children: (0, Or.jsx)(Kr.d, {
                itemName: Qr.item,
                amount: 0
              })
            }), (0, Or.jsxs)("span", {
              className: "GreenvilleNextUnlockText",
              children: [(0, Or.jsx)("strong", {
                className: "GreenvilleNextUnlockName",
                children: Zr(Qr.nameKey)
              }), (0, Or.jsx)("span", {
                className: "GreenvilleNextUnlockLevel",
                children: Zr("greenvilleGame:unlockAtLevel", {
                  level: Qr.level
                })
              })]
            })]
          })]
        })]
      })
    }

    function YZ(rr) {
      let {
        home: Sr
      } = rr;
      const {
        t: Qr,
        selectedLanguage: Zr
      } = (0, Tr.E)(), Wr = (0, GS.j)("hiddenPlayerNames");
      return (0, Or.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, Or.jsxs)("strong", {
          className: "GreenvilleTrackerTitle GreenvilleBestTimesTitle",
          children: [(0, Or.jsx)(aS.c, {
            name: "trophy"
          }), Qr("greenvilleGame:parkourBestTimes")]
        }), (0, Or.jsx)("ol", {
          className: "GreenvilleTrackerRows",
          children: Sr.bestTimes.slice(0, 3).map(((rr, Sr) => {
            let {
              playerName: ar,
              seconds: jr
            } = rr;
            return (0, Or.jsxs)("li", {
              className: Yr()("GreenvilleTrackerRow GreenvilleBestTime", {
                First: 0 === Sr
              }),
              children: [(0, Or.jsx)("span", {
                className: "GreenvilleBestTimeRank",
                children: Sr + 1
              }), (0, Or.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: (0, sQ.c)(ar, Wr)
              }), (0, Or.jsx)("span", {
                className: "GreenvilleTrackerValue",
                children: Qr("greenvilleGame:parkourTime", {
                  seconds: jr.toLocaleString(Zr.code, {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1
                  })
                })
              })]
            }, `${Sr}|${ar}`)
          }))
        })]
      })
    }
    const nZ = "greenvilleLevelUpsView";
    class eZ {
      constructor(rr) {
        this.publishReveals = rr, this.reveals = [], this.token = 0, this.celebrate = (rr, Sr) => {
          this.setReveals([...this.reveals, {
            kind: "celebration",
            celebration: rr,
            gold: Sr,
            token: ++this.token
          }])
        }, this.revealed = rr => {
          this.setReveals(this.reveals.filter((Sr => Sr.token !== rr)))
        }
      }
      getReveals() {
        return this.reveals
      }
      vx(rr) {
        const [Sr, Qr, Zr] = rr;
        this.setReveals([...this.reveals, {
          kind: "levelUp",
          job: Sr,
          level: Qr,
          unlocks: Zr.map((rr => {
            let [Sr, Qr, Zr] = rr;
            return {
              item: Sr,
              nameKey: Qr,
              level: Zr
            }
          })),
          token: ++this.token
        }])
      }
      setReveals(rr) {
        this.reveals = rr, this.publishReveals(rr)
      }
    }
    const KZ = [{
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
      yZ = {
        movedIn: "greenvilleGame:tutCelebrateMovedIn",
        firstGold: "greenvilleGame:tutCelebrateFirstGold",
        firstCar: "greenvilleGame:tutCelebrateFirstCar",
        lessonDone: "greenvilleGame:tutCelebrateLessonDone"
      },
      BZ = Array.from({
        length: 16
      }, ((rr, Sr) => ({
        "--angle": 360 * Sr / 16 + Sr % 3 * 7 + "deg",
        "--distance": 5 + Sr % 4 * 1.2 + "rem",
        "--delay": Sr % 5 * 30 + "ms"
      })));

    function TZ(rr) {
      let {
        controller: Sr
      } = rr;
      (0, yr.g)(nZ, null);
      const Qr = Sr.getReveals();
      return 0 === Qr.length ? null : (0, Gr.createPortal)((0, Or.jsx)(vZ, {
        reveal: Qr[0],
        onDone: Sr.revealed
      }, Qr[0].token), document.body)
    }

    function vZ(rr) {
      let {
        reveal: Sr,
        onDone: Qr
      } = rr;
      const {
        t: Zr
      } = (0, Tr.E)(), Wr = (0, fr.useRef)(null), ar = "levelUp" === Sr.kind ? Sr.unlocks : [], jr = 0 === ar.length ? 2600 : 4200;
      return (0, fr.useLayoutEffect)((() => {
        const rr = document.querySelector(".GreenvilleTopBar");
        rr && Wr.current.style.setProperty("--top-bar-bottom", `${rr.getBoundingClientRect().bottom}px`)
      }), []), (0, fr.useEffect)((() => {
        const rr = Wr.current.animate(KZ, {
          duration: jr,
          fill: "both"
        });
        return rr.onfinish = () => {
          Qr(Sr.token)
        }, () => {
          rr.onfinish = null, rr.cancel()
        }
      }), [Sr, jr, Qr]), (0, Or.jsxs)("div", {
        ref: Wr,
        className: Yr()("GreenvilleLevelUpReveal", {
          Plain: 0 === ar.length
        }),
        style: {
          "--reveal-ms": `${jr}ms`,
          "--unlock-count": ar.length
        },
        role: "status",
        children: [ar.length > 0 && (0, Or.jsx)("div", {
          className: "GreenvilleLevelUpRevealStage",
          "aria-hidden": "true",
          children: (0, Or.jsxs)("div", {
            className: "GreenvilleLevelUpRevealMover",
            children: [(0, Or.jsx)("div", {
              className: "GreenvilleLevelUpRevealRays"
            }), (0, Or.jsx)("div", {
              className: "GreenvilleLevelUpRevealGlow"
            }), (0, Or.jsx)("div", {
              className: "GreenvilleLevelUpRevealSparks",
              children: BZ.map(((rr, Sr) => (0, Or.jsx)("span", {
                style: rr
              }, Sr)))
            }), (0, Or.jsx)("div", {
              className: "GreenvilleLevelUpRevealIcon",
              children: ar.map((rr => (0, Or.jsx)("div", {
                className: "GreenvilleLevelUpRevealItem",
                children: (0, Or.jsx)(Kr.d, {
                  itemName: rr.item,
                  amount: 0
                })
              }, `${rr.level}|${rr.nameKey}`)))
            })]
          })
        }), (0, Or.jsxs)("div", {
          className: "GreenvilleLevelUpRevealText",
          children: ["levelUp" === Sr.kind && (0, Or.jsx)(OZ, {
            levelUp: Sr
          }), "celebration" === Sr.kind && (0, Or.jsx)("span", {
            className: "GreenvilleLevelUpRevealName FullyFancyText",
            children: Zr(yZ[Sr.celebration], {
              gold: (0, kr.i)(Sr.gold)
            })
          })]
        })]
      })
    }

    function OZ(rr) {
      let {
        levelUp: {
          job: Sr,
          level: Qr,
          unlocks: Zr
        }
      } = rr;
      const {
        t: Wr
      } = (0, Tr.E)(), ar = Wr(`greenvilleGame:${Sr}`);
      return (0, Or.jsxs)(Or.Fragment, {
        children: [Zr.length > 0 && (0, Or.jsxs)(Or.Fragment, {
          children: [(0, Or.jsx)("span", {
            className: "GreenvilleLevelUpRevealHeading SmallTextBold",
            children: Wr("greenvilleGame:levelUpUnlockHeading", {
              job: ar,
              level: 1 === Zr.length ? Zr[0].level : Qr
            })
          }), (0, Or.jsx)("span", {
            className: "GreenvilleLevelUpRevealNames",
            children: Zr.map((rr => (0, Or.jsx)("span", {
              className: "GreenvilleLevelUpRevealName FullyFancyText",
              children: Wr(rr.nameKey)
            }, `${rr.level}|${rr.nameKey}`)))
          })]
        }), 0 === Zr.length && (0, Or.jsxs)(Or.Fragment, {
          children: [(0, Or.jsx)("span", {
            className: "GreenvilleLevelUpRevealHeading SmallTextBold",
            children: Wr("greenvilleGame:levelUpHeading")
          }), (0, Or.jsx)("span", {
            className: "GreenvilleLevelUpRevealName FullyFancyText",
            children: Wr("greenvilleGame:jobLevel", {
              job: ar,
              level: Qr
            })
          })]
        })]
      })
    }
    const LZ = "greenvilleMarketView";

    function lZ(rr) {
      return rr.map((rr => {
        let [Sr, Qr, Zr, Wr, ar, jr] = rr;
        return {
          key: `${Sr}|${Qr}|${Zr}|${Wr}|${ar}`,
          icon: Sr,
          target: [Qr, Zr, Wr],
          item: ar,
          label: jr
        }
      }))
    }
    class XZ {
      constructor(rr) {
        this.Jp = rr, this.view = null
      }
      getView() {
        return this.view
      }
      vx(rr) {
        const Sr = performance.now();
        switch (rr[0]) {
          case "hide":
            this.view = null;
            break;
          case "marketIdle":
            this.view = {
              job: null,
              waypoints: lZ(rr[1])
            };
            break;
          case "marketPick":
          case "marketStock": {
            const [Qr, Zr, Wr, ar] = rr;
            this.view = {
              job: {
                kind: Qr,
                goods: Zr,
                tipEndsAt: ar > 0 ? Sr + ar : 0
              },
              waypoints: lZ(Wr)
            };
            break
          }
          case "marketDeliver": {
            const [Qr, Zr, Wr, ar, jr, Ir] = rr;
            this.view = {
              job: {
                kind: Qr,
                parcelsLeft: Zr,
                delivered: Wr,
                gold: ar,
                endsAt: Sr + Ir
              },
              waypoints: lZ(jr)
            };
            break
          }
        }
        this.Jp(this.view)
      }
    }
    var PZ = Qr(38175);
    const HZ = [{
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

    function qZ(rr) {
      var Sr;
      let {
        controller: Qr
      } = rr;
      (0, yr.g)(LZ, null);
      const Zr = null === (Sr = Qr.getView()) || void 0 === Sr ? void 0 : Sr.job;
      return "marketDeliver" !== (null === Zr || void 0 === Zr ? void 0 : Zr.kind) ? null : (0, Or.jsx)(RZ, {
        endsAt: Zr.endsAt,
        delivered: Zr.delivered
      })
    }

    function RZ(rr) {
      let {
        endsAt: Sr,
        delivered: Qr
      } = rr;
      const {
        t: Zr
      } = (0, Tr.E)(), Wr = Math.max(0, Math.ceil((0, PZ.f)(Sr))), ar = (0, fr.useRef)(null), jr = (0, fr.useRef)(null), Ir = (0, fr.useRef)({
        endsAt: Sr,
        delivered: Qr
      }), [Er, pr] = (0, fr.useState)(null);
      (0, fr.useLayoutEffect)((() => {
        const rr = Qr > Ir.current.delivered ? Math.round((Sr - Ir.current.endsAt) / 1e3) : 0;
        var Zr;
        (Ir.current = {
          endsAt: Sr,
          delivered: Qr
        }, rr <= 0) || (pr((Sr => {
          var Qr;
          return {
            seconds: rr,
            token: (null !== (Qr = null === Sr || void 0 === Sr ? void 0 : Sr.token) && void 0 !== Qr ? Qr : 0) + 1
          }
        })), window.matchMedia("(prefers-reduced-motion: reduce)").matches || (null === (Zr = jr.current) || void 0 === Zr || Zr.cancel(), jr.current = ar.current.animate(HZ, {
          duration: 420,
          easing: "ease-out"
        })))
      }), [Sr, Qr]), (0, fr.useEffect)((() => () => {
        var rr;
        null === (rr = jr.current) || void 0 === rr || rr.cancel()
      }), []);
      const xr = Math.floor(Wr / 60);
      return (0, Or.jsxs)("div", {
        className: Yr()("GreenvilleMarketCountdown", {
          Urgent: Wr < 10
        }),
        role: "timer",
        children: [(0, Or.jsxs)("div", {
          ref: ar,
          className: "GreenvilleMarketCountdownTime FullyFancyText",
          children: [xr, ":", String(Wr % 60).padStart(2, "0")]
        }), null !== Er && (0, Or.jsx)("div", {
          className: "GreenvilleMarketCountdownAdded FullyFancyText",
          onAnimationEnd: () => {
            pr(null)
          },
          children: Zr("greenvilleGame:marketCountdownAdded", {
            seconds: Er.seconds
          })
        }, Er.token)]
      })
    }

    function gZ(rr) {
      var Sr;
      let {
        controller: Qr
      } = rr;
      (0, yr.g)(LZ, null);
      const Zr = null === (Sr = Qr.getView()) || void 0 === Sr ? void 0 : Sr.job;
      return Zr ? (0, Or.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: ["marketDeliver" === Zr.kind && (0, Or.jsx)(GZ, {
          shift: Zr
        }), "marketDeliver" !== Zr.kind && (0, Or.jsx)(CZ, {
          task: Zr
        })]
      }) : null
    }

    function CZ(rr) {
      let {
        task: Sr
      } = rr;
      const {
        t: Qr
      } = (0, Tr.E)(), Zr = "marketPick" === Sr.kind && Sr.goods.every((rr => {
        let [, Sr] = rr;
        return 0 === Sr
      }));
      return (0, Or.jsxs)(Or.Fragment, {
        children: [(0, Or.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: Qr("marketPick" === Sr.kind ? "greenvilleGame:marketPanelOrder" : "greenvilleGame:marketPanelCrate")
        }), (0, Or.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: Sr.goods.map((rr => {
            let [Sr, Zr, Wr] = rr;
            return (0, Or.jsxs)("li", {
              className: Yr()("GreenvilleTrackerRow", {
                Done: 0 === Zr
              }),
              children: [(0, Or.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, Or.jsx)(Kr.d, {
                  itemName: Sr,
                  amount: 0
                })
              }), (0, Or.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: (0, cQ.g)(Qr, Sr)
              }), (0, Or.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [Wr - Zr, "/", Wr]
              })]
            }, Sr)
          }))
        }), Zr && (0, Or.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: Qr("greenvilleGame:marketPanelReturn")
        }), !Zr && 0 !== Sr.tipEndsAt && (0, Or.jsx)(MZ, {
          endsAt: Sr.tipEndsAt
        })]
      })
    }

    function MZ(rr) {
      let {
        endsAt: Sr
      } = rr;
      const {
        t: Qr
      } = (0, Tr.E)(), Zr = Math.ceil((0, PZ.f)(Sr));
      return Zr <= 0 ? null : (0, Or.jsx)("div", {
        className: "GreenvilleTrackerTip",
        children: Qr("greenvilleGame:marketPanelTip", {
          seconds: Zr
        })
      })
    }

    function GZ(rr) {
      let {
        shift: Sr
      } = rr;
      const {
        t: Qr
      } = (0, Tr.E)();
      return (0, Or.jsxs)(Or.Fragment, {
        children: [(0, Or.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: Qr("greenvilleGame:marketPanelDeliveries")
        }), (0, Or.jsxs)("ul", {
          className: "GreenvilleTrackerRows",
          children: [(0, Or.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, Or.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: Qr("greenvilleGame:marketPanelParcels")
            }), (0, Or.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: Sr.parcelsLeft
            })]
          }), (0, Or.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, Or.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: Qr("greenvilleGame:marketPanelDelivered")
            }), (0, Or.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: Sr.delivered
            })]
          }), (0, Or.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, Or.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: Qr("greenvilleGame:marketPanelEarned")
            }), (0, Or.jsx)("span", {
              className: "GreenvilleTrackerIcon",
              "aria-hidden": "true",
              children: (0, Or.jsx)(Kr.d, {
                itemName: "Gold Coin",
                amount: 0
              })
            }), (0, Or.jsx)("span", {
              className: "GreenvilleTrackerValue Gold",
              children: (0, kr.i)(Sr.gold)
            })]
          })]
        }), 0 === Sr.parcelsLeft && (0, Or.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: Qr("greenvilleGame:marketPanelBackToBay")
        })]
      })
    }
    const kZ = {
      marketNpc: "comment-dots",
      marketShelf: "cart-shopping",
      marketHouse: "house",
      marketDepot: "truck"
    };

    function AZ(rr) {
      var Sr;
      let {
        market: Qr,
        markers: Zr
      } = rr;
      (0, yr.g)(LZ, null);
      const Wr = null === (Sr = Qr.getView()) || void 0 === Sr ? void 0 : Sr.waypoints;
      return null !== Wr && void 0 !== Wr && Wr.length ? (0, Or.jsx)("div", {
        className: "GreenvilleMarketWaypoints",
        children: Wr.map((rr => (0, Or.jsx)(VZ, {
          waypoint: rr,
          bind: Zr.waypoints.bindMarker(rr.key)
        }, rr.key)))
      }) : null
    }

    function VZ(rr) {
      let {
        waypoint: {
          icon: Sr,
          item: Qr,
          label: Zr
        },
        bind: Wr
      } = rr;
      return (0, Or.jsxs)(iZ, {
        bind: Wr,
        house: "marketHouse" === Sr,
        label: Zr,
        children: [null !== Qr && (0, Or.jsx)("span", {
          className: "GreenvilleMarketWaypointItem",
          children: (0, Or.jsx)(Kr.d, {
            itemName: Qr,
            amount: 0
          })
        }), null === Qr && (0, Or.jsx)(aS.c, {
          name: kZ[Sr]
        })]
      })
    }

    function iZ(rr) {
      let {
        bind: Sr,
        house: Qr,
        label: Zr,
        extra: Wr,
        children: ar
      } = rr;
      return (0, Or.jsxs)("div", {
        ref: Sr,
        className: Yr()("GreenvilleMarketWaypoint", {
          House: Qr
        }),
        children: [Qr && (0, Or.jsx)(wZ, {}), (0, Or.jsx)("div", {
          className: "GreenvilleMarketWaypointBadge",
          children: ar
        }), Wr, (0, Or.jsxs)("div", {
          className: "GreenvilleMarketWaypointLabels",
          children: [null !== Zr && (0, Or.jsx)("span", {
            className: "GreenvilleMarketWaypointLabel SmallTextBold",
            children: Zr
          }), (0, Or.jsx)("span", {
            className: "GreenvilleMarketWaypointDistance SmallTextBold"
          })]
        })]
      })
    }

    function wZ() {
      const rr = (0, fr.useRef)(null);
      return (0, vQ.b)(rr), (0, Or.jsx)("span", {
        ref: rr,
        className: "GreenvilleMarketWaypointPulse"
      })
    }
    const cZ = {
      labels: "GreenvilleMarketWaypointLabels",
      distance: "GreenvilleMarketWaypointDistance"
    };
    class FZ {
      constructor(rr) {
        this.market = rr, this.waypoints = new Ur.e(cZ, "greenvilleGame:marketDistance")
      }
      frame(rr, Sr) {
        this.waypoints.setRender(rr);
        const Qr = this.market.getView();
        if (Qr && this.waypoints.hasMarkers())
          for (const {
              key: Zr,
              target: Wr
            }
            of Qr.waypoints) this.waypoints.update(Zr, Wr[0], Wr[1] + 1, Wr[2], Sr)
      }
    }
    const oZ = "greenvilleMapView",
      bZ = {
        open: !1
      };
    class JZ extends SS {
      constructor(rr, Sr, Qr) {
        super(bZ, rr, Sr), this.nav = Qr, this.open = () => {
          this.show({
            open: !0
          })
        }
      }
      dropPresses() {}
      set(rr) {
        super.set(rr), this.nav.setFullMapOpen(rr.open)
      }
    }
    var DZ = Qr(40192),
      dZ = Qr(40183);
    const sZ = {
      Street: "St",
      Avenue: "Ave",
      Road: "Rd",
      Lane: "Ln"
    };

    function uZ(rr, Sr) {
      return Sr.map(((Sr, Qr) => {
        const Zr = Sr.lastIndexOf(" "),
          Wr = Sr.slice(Zr + 1);
        let ar = sZ[Wr];
        return void 0 === ar && (console.warn(`Greenville street "${Sr}" has no suffix abbreviation`), ar = Wr), {
          axis: rr,
          line: Qr,
          name: Sr,
          shortName: Sr.slice(0, Zr),
          suffix: ar
        }
      }))
    }
    const rW = {
        eastWest: uZ("eastWest", ["Hillcrest Road", "Oak Street", "Main Street", "Elm Street", "Harbour Road"]),
        northSouth: uZ("northSouth", ["Willow Lane", "Birch Avenue", "Market Street", "Maple Avenue", "Station Road"])
      },
      SW = {
        kind: "outside"
      };

    function QW(rr, Sr, Qr) {
      return 100 * (rr + 1) + Sr + (Qr ? 1 : 0)
    }

    function ZW(rr, Sr, Qr, Zr) {
      return {
        x0: QZ + rr,
        z0: QZ + Sr,
        x1: QZ + rr + Qr - 1,
        z1: QZ + Sr + Zr - 1
      }
    }
    let WW = null;

    function aW(rr, Sr, Qr, Zr) {
      if (Zr && "outside" !== Zr.kind) {
        const {
          box: Qr
        } = Zr;
        if (!jZ(Qr, rr, Sr) && jZ({
            x0: Qr.x0 - 2,
            z0: Qr.z0 - 2,
            x1: Qr.x1 + 2,
            z1: Qr.z1 + 2
          }, rr, Sr)) return Zr
      }
      return function(rr, Sr, Qr) {
        const {
          eastWest: Zr,
          northSouth: Wr
        } = rW;
        switch (rr.kind) {
          case "outside":
            return SW;
          case "street": {
            const Sr = rr.segment * WZ + ZZ,
              Qr = rr.line * WZ;
            return {
              kind: "street",
              box: "eastWest" === rr.axis ? ZW(Sr, Qr, WZ - ZZ, ZZ) : ZW(Qr, Sr, ZZ, WZ - ZZ),
              street: rW[rr.axis][rr.line],
              block: 100 * (rr.segment + 1)
            }
          }
          case "junction": {
            const ar = ZW(rr.column * WZ, rr.row * WZ, ZZ, ZZ),
              jr = [Zr[rr.row], Wr[rr.column]],
              Ir = "street" === (null === Qr || void 0 === Qr ? void 0 : Qr.kind) ? Qr.street : "junction" === (null === Qr || void 0 === Qr ? void 0 : Qr.kind) ? Qr.along : null,
              fr = Ir && jr.includes(Ir) ? Ir : Math.abs(Math.sin(Sr)) > Math.abs(Math.cos(Sr)) ? jr[0] : jr[1];
            return {
              kind: "junction",
              box: ar,
              along: fr,
              cross: fr === jr[0] ? jr[1] : jr[0]
            }
          }
          case "plot": {
            const Sr = rr.column * WZ + ZZ + rr.dx * ZZ,
              Qr = rr.row * WZ + ZZ + rr.dz * ZZ,
              Wr = 0 === rr.dz;
            return {
              kind: "plot",
              box: ZW(Sr, Qr, ZZ, ZZ),
              plotId: (ar = (QZ + Sr) / ZZ, jr = (QZ + Qr) / ZZ, WW || (WW = new Map(pZ().map(((rr, Sr) => {
                let {
                  chunk: Qr
                } = rr;
                return [`${Qr[0]},${Qr[2]}`, Sr + 1]
              })))), WW.get(`${ar},${jr}`)),
              number: QW(rr.column, 0 === rr.dx ? 30 : 70, Wr),
              street: Zr[Wr ? rr.row : rr.row + 1],
              neighbourhood: rr.neighbourhood
            }
          }
          case "tile": {
            const {
              column: Sr,
              row: Qr,
              district: Wr
            } = rr;
            return {
              kind: "tile",
              box: ZW(Sr * WZ + ZZ, Qr * WZ + ZZ, WZ - ZZ, WZ - ZZ),
              district: Wr,
              number: QW(Sr, 50, !0),
              street: Zr[Qr]
            }
          }
        }
        var ar, jr
      }(function(rr, Sr) {
        const Qr = rr - QZ,
          Zr = Sr - QZ;
        if (Qr < 0 || Zr < 0 || Qr >= aZ || Zr >= aZ) return {
          kind: "outside"
        };
        const Wr = Math.floor(Qr / WZ),
          ar = Math.floor(Zr / WZ),
          jr = Qr - Wr * WZ - ZZ,
          Ir = Zr - ar * WZ - ZZ;
        if (jr < 0 && Ir < 0) return {
          kind: "junction",
          column: Wr,
          row: ar
        };
        if (Ir < 0) return {
          kind: "street",
          axis: "eastWest",
          line: ar,
          segment: Wr
        };
        if (jr < 0) return {
          kind: "street",
          axis: "northSouth",
          line: Wr,
          segment: ar
        };
        const fr = IZ[ar][Wr];
        return "residential" === fr.kind ? {
          kind: "plot",
          column: Wr,
          row: ar,
          dx: Math.floor(jr / ZZ),
          dz: Math.floor(Ir / ZZ),
          neighbourhood: fr.name
        } : {
          kind: "tile",
          column: Wr,
          row: ar,
          district: fr.district
        }
      }(rr, Sr), Qr, Zr)
    }

    function jW(rr) {
      switch (rr.kind) {
        case "outside":
          return "outside";
        case "junction":
          return `junction|${rr.along.name}|${rr.cross.name}`;
        case "plot":
        case "tile":
          return `${rr.kind}|${rr.number}|${rr.street.name}`;
        case "street":
          return `street|${rr.block}|${rr.street.name}`
      }
    }
    const IW = uQ.i.hx,
      fW = {
        origin: QZ,
        size: aZ,
        nZ: -2 * IW,
        eZ: 4 * IW
      },
      EW = new Set(["quarry", "industry"]);
    const pW = {
        origin: 1562 * IW,
        size: 13 * IW,
        nZ: 0,
        eZ: 5 * IW
      },
      xW = Qr.p + "static/media/greenvilleSewers.9ca15fd9e781052910dd.png";
    var mW = Qr(40095),
      NW = Qr(40190),
      UW = Qr(41096),
      tW = Qr(41093),
      hW = Qr(272);
    const zW = uQ.i.hx;
    class YW {
      constructor(rr, Sr, Qr) {
        this.api = rr, this.map = Sr, this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.image = this.context.createImageData(zW, zW), this.columns = void 0, this.lowestLayer = void 0, this.layers = void 0, this.plots = void 0, this.baked = null, this.vU = !1, this.ids = new Uint16Array(zW * zW), this.tops = new Int32Array(zW * zW), this.edgeIds = new Uint16Array(zW), this.edgeTops = new Int32Array(zW), this.heights = void 0, this.versions = void 0, this.current = void 0, this.stale = void 0, this.painted = void 0, this.order = [], this.focus = {
          column: -1,
          row: -1
        }, this.colours = null, this.host = null, this.timer = null, this.cancelIdle = null, this.pass = rr => {
          this.cancelIdle = null;
          let Sr = !1;
          const Qr = performance.now();
          let Zr = !0;
          if (this.colours && this.host && this.host.clientWidth > 0)
            for (const Wr of this.order) {
              if (!this.readVersions(Wr)) continue;
              const ar = !rr.didTimeout && rr.timeRemaining() < 2;
              if (!Zr && (ar || performance.now() - Qr > 6)) {
                Sr = !0;
                break
              }
              Zr = !1, this.versions.set(this.current, Wr * this.layers), this.paint(Wr % this.columns, Math.floor(Wr / this.columns), this.colours.lookup, this.colours.drawn)
            }
          this.schedule(Sr ? 0 : 500)
        };
        const {
          origin: Zr,
          size: Wr,
          nZ: ar,
          eZ: jr
        } = Sr.area;
        this.columns = Wr / zW, this.lowestLayer = ar / zW, this.layers = (jr - ar) / zW, this.plots = new Set(Qr.map((rr => {
          let {
            chunkX: Sr,
            chunkZ: Qr
          } = rr;
          return Qr * this.columns + Sr
        }))), this.heights = new Int32Array(Wr * Wr).fill(UW.h), this.versions = new Float64Array(this.columns * this.columns * this.layers).fill(NaN), this.current = new Float64Array(this.layers), this.stale = new Uint8Array(this.columns * this.columns), this.painted = new Uint8Array(this.columns * this.columns), this.canvas.width = Wr, this.canvas.height = Wr, this.canvas.className = "GreenvilleNavMapTerrain", 0 !== Qr.length ? (this.focusOn(Zr + Wr / 2, Zr + Wr / 2), Promise.all([(0, tW.e)(), this.drawBakedMap()]).then((rr => {
          let [Sr] = rr;
          this.colours = {
            lookup: Sr,
            drawn: Sr.getDrawnIds()
          }
        }), (rr => {
          console.error("Greenville map: block colours failed to load", rr)
        })), this.schedule(0)) : this.drawBakedMap()
      }
      mount(rr) {
        this.host = rr, null === rr || void 0 === rr || rr.replaceChildren(this.canvas)
      }
      focusOn(rr, Sr) {
        const {
          columns: Qr
        } = this, {
          origin: Zr
        } = this.map.area, Wr = Math.min(Qr - 1, Math.max(0, Math.floor((rr - Zr) / zW))), ar = Math.min(Qr - 1, Math.max(0, Math.floor((Sr - Zr) / zW)));
        Wr === this.focus.column && ar === this.focus.row || (this.focus = {
          column: Wr,
          row: ar
        }, this.order = [...this.plots].sort(((rr, Sr) => Math.hypot(rr % Qr - Wr, Math.floor(rr / Qr) - ar) - Math.hypot(Sr % Qr - Wr, Math.floor(Sr / Qr) - ar))))
      }
      forget(rr, Sr) {
        const Qr = Sr * this.columns + rr;
        this.stale[Qr] = 1, this.versions.fill(NaN, Qr * this.layers, (Qr + 1) * this.layers)
      }
      dispose() {
        var rr, Sr;
        null !== this.timer && clearTimeout(this.timer), null === (rr = this.cancelIdle) || void 0 === rr || rr.call(this), this.host = null, this.vU = !0, null === (Sr = this.baked) || void 0 === Sr || Sr.close(), this.baked = null
      }
      async drawBakedMap() {
        try {
          const rr = await fetch(this.map.imageUrl);
          if (!rr.ok) throw new Error(`HTTP ${rr.status}`);
          const Sr = await createImageBitmap(await rr.blob(), {
            colorSpaceConversion: "none"
          });
          if (this.vU) return void Sr.close();
          this.baked = Sr, this.context.drawImage(Sr, 0, 0)
        } catch (rr) {
          console.error("Greenville map: the baked map failed to load", rr)
        }
      }
      schedule(rr) {
        this.timer = setTimeout((() => {
          this.timer = null, this.cancelIdle = (0, hW.c)(this.pass, {
            timeoutMs: 1e3
          })
        }), rr)
      }
      readVersions(rr) {
        const {
          origin: Sr
        } = this.map.area, Qr = Sr / zW + rr % this.columns, Zr = Sr / zW + Math.floor(rr / this.columns);
        let Wr = !1;
        for (let jr = 0; jr < this.layers; jr++) {
          var ar;
          const Sr = null !== (ar = this.api.getChunkVersion(Qr, this.lowestLayer + jr, Zr)) && void 0 !== ar ? ar : 0;
          this.current[jr] = Sr, Wr ||= Sr !== this.versions[rr * this.layers + jr]
        }
        return Wr
      }
      repaintIfPainted(rr, Sr) {
        const Qr = Sr * this.columns + rr;
        rr < this.columns && Sr < this.columns && 1 === this.painted[Qr] && this.versions.fill(NaN, Qr * this.layers, (Qr + 1) * this.layers)
      }
      storeHeights(rr, Sr) {
        const {
          size: Qr
        } = this.map.area;
        let Zr = !1,
          Wr = !1;
        for (let ar = 0; ar < this.ids.length; ar++) {
          const jr = ar % zW,
            Ir = Math.floor(ar / zW),
            fr = (Sr * zW + Ir) * Qr + rr * zW + jr,
            Er = 0 === this.ids[ar] ? UW.h : this.tops[ar];
          this.heights[fr] !== Er && (Zr ||= jr === zW - 1, Wr ||= Ir === zW - 1, this.heights[fr] = Er)
        }
        Zr && this.repaintIfPainted(rr + 1, Sr), Wr && this.repaintIfPainted(rr, Sr + 1)
      }
      readEdgeHeights(rr, Sr, Qr, Zr, Wr) {
        const {
          origin: ar,
          size: jr,
          nZ: Ir,
          eZ: fr
        } = this.map.area;
        this.api.readColumnTops(rr, Sr, Qr, Zr, Ir, fr, Wr, this.edgeIds, this.edgeTops);
        const Er = Qr - rr;
        for (let pr = 0; pr < zW; pr++) {
          const Qr = (Sr - ar + Math.floor(pr / Er)) * jr + rr - ar + pr % Er;
          this.heights[Qr] = 0 === this.edgeIds[pr] ? UW.h : this.edgeTops[pr]
        }
      }
      paint(rr, Sr, Qr, Zr) {
        const {
          origin: Wr,
          size: ar,
          nZ: jr,
          eZ: Ir
        } = this.map.area, fr = Sr * this.columns + rr, Er = 1 === this.stale[fr];
        this.stale[fr] = 0;
        const pr = Wr + rr * zW,
          xr = Wr + Sr * zW,
          mr = ar - (rr + 1) * zW,
          {
            ids: Nr,
            tops: Ur,
            heights: tr
          } = this;
        if (0 === this.current[0 - this.lowestLayer]) return void(Er && (this.context.clearRect(mr, Sr * zW, zW, zW), this.baked && this.context.drawImage(this.baked, mr, Sr * zW, zW, zW, mr, Sr * zW, zW, zW), Nr.fill(0), this.storeHeights(rr, Sr)));
        this.painted[fr] = 1, this.api.readColumnTops(pr, xr, pr + zW, xr + zW, jr, Ir, Zr, Nr, Ur), this.storeHeights(rr, Sr), this.plots.has(fr - 1) || this.readEdgeHeights(pr - 1, xr, pr, xr + zW, Zr), this.plots.has(fr - this.columns) || this.readEdgeHeights(pr, xr - 1, pr + zW, xr, Zr);
        const hr = this.image.data;
        for (let zr = 0; zr < zW; zr++)
          for (let Zr = 0; Zr < zW; Zr++) {
            const Wr = 4 * (zr * zW + zW - 1 - Zr),
              jr = Nr[zr * zW + Zr];
            if (0 === jr) {
              hr[Wr + 3] = 0;
              continue
            }
            const Ir = rr * zW + Zr,
              fr = Sr * zW + zr;
            Qr.drawPixel(hr, Wr, jr, Ur[zr * zW + Zr], tr[(fr - 1) * ar + Ir], tr[fr * ar + Ir - 1])
          }
        this.context.putImageData(this.image, mr, Sr * zW)
      }
    }
    const nW = 5 * Math.PI / 180,
      eW = {
        u: NaN,
        v: NaN,
        left: NaN,
        top: NaN,
        scale: NaN,
        heading: NaN
      };
    class KW {
      constructor(rr) {
        this.onTerrainHost = rr, this.terrainHost = null, this.qx = null, this.worldResize = null, this.worldPx = {
          width: 0,
          height: 0
        }, this.arrowTrack = null, this.arrow = null, this.written = {
          ...eW
        }, this.goalTrack = null, this.goal = null, this.mountTerrain = rr => {
          this.terrainHost = rr, this.onTerrainHost()
        }, this.mountWorld = rr => {
          var Sr;
          this.qx = rr, this.written = {
            ...eW
          }, null === (Sr = this.worldResize) || void 0 === Sr || Sr.disconnect(), this.worldResize = null, rr && (this.worldResize = new ResizeObserver((rr => {
            let [Sr] = rr;
            this.worldPx = {
              width: Sr.contentRect.width,
              height: Sr.contentRect.height
            }, this.written.scale = NaN
          })), this.worldResize.observe(rr))
        }, this.mountArrow = rr => {
          var Sr;
          this.arrowTrack = rr, this.arrow = null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.querySelector(".GreenvilleNavArrow")) && void 0 !== Sr ? Sr : null, this.written = {
            ...eW
          }
        }, this.mountGoal = rr => {
          this.goalTrack = rr, rr && (rr.hidden = null === this.goal), this.written.left = NaN
        }
      }
      setGoal(rr) {
        this.goal = rr, this.goalTrack && (this.goalTrack.hidden = null === rr), this.written.left = NaN
      }
      write(rr, Sr, Qr, Zr, Wr, ar, jr) {
        const {
          qx: Ir,
          arrowTrack: fr,
          arrow: Er,
          written: pr
        } = this;
        if (!Ir || !fr || !Er) return;
        const xr = Math.abs(Math.atan2(Math.sin(Qr - pr.heading), Math.cos(Qr - pr.heading))),
          mr = ar !== pr.scale,
          {
            width: Nr,
            height: Ur
          } = this.worldPx,
          tr = mr || !(Math.hypot((Zr - pr.left) * Nr, (Wr - pr.top) * Ur) < 1),
          hr = mr || !(Math.hypot(rr - pr.u, Sr - pr.v) * Math.min(Nr, Ur) * ar < 1);
        tr && (this.written.left = Zr, this.written.top = Wr, Ir.style.transform = `translate(${100*Zr}%, ${100*Wr}%) scale(${ar})`, this.writeGoal(Zr, Wr, ar)), hr && (this.written.u = rr, this.written.v = Sr, fr.style.transform = `translate(${100*rr}%, ${100*Sr}%)`), (mr || xr >= nW) && (Er.style.transform = `translate(-50%, -50%) scale(${1/ar}) rotate(${180+180*Qr/Math.PI}deg)`, this.written.heading = Qr), mr && (Ir.style.setProperty("--greenville-map-unzoom", String(1 / ar)), Ir.style.setProperty("--greenville-map-fade", String(jr)), this.written.scale = ar)
      }
      writeGoal(rr, Sr, Qr) {
        const {
          goal: Zr,
          goalTrack: Wr
        } = this;
        if (!Zr || !Wr) return;
        const ar = rr + Zr[0] * Qr - .5,
          jr = Sr + Zr[1] * Qr - .5,
          Ir = Math.min(1, .4 / Math.max(Math.abs(ar), Math.abs(jr)));
        Wr.style.transform = `translate(${100*(.5+ar*Ir)}%, ${100*(.5+jr*Ir)}%)`
      }
    }
    const yW = "greenvilleNavAddress",
      BW = "greenvilleNavPlots",
      TW = "greenvilleNavMarkers",
      vW = {
        kind: "outside"
      };
    class OW {
      constructor(rr, Sr, Qr, Zr) {
        this.map = rr, this.publishAddress = Sr, this.publishPlots = Qr, this.publishMarkers = Zr, this.address = vW, this.addressKey = jW(vW), this.block = {
          x: NaN,
          y: NaN,
          z: NaN
        }, this.inSewers = !1, this.plots = void 0, this.markers = [], this.terrain = null, this.minimap = void 0, this.homeGate = null, this.fullMap = void 0, this.fullMapOpen = !1, this.fullMapZoom = NW.g, this.zoom = 0, this.lastFrameMs = NaN, this.reducedMotion = null, this.logLocalScale = void 0, this.placeTerrain = () => {
          this.terrain.mount(this.fullMapOpen && this.fullMap.terrainHost ? this.fullMap.terrainHost : this.minimap.terrainHost)
        }, this.minimap = new KW(this.placeTerrain), this.fullMap = new KW(this.placeTerrain);
        const {
          origin: Wr,
          size: ar
        } = rr.area;
        this.logLocalScale = Math.log(ar / 80), this.plots = {
          plots: (rr.city ? pZ() : []).map(((rr, Sr) => {
            let {
              chunk: Qr,
              facing: Zr
            } = rr;
            return {
              plotId: Sr + 1,
              chunkX: Qr[0] - Wr / uQ.i.hx,
              chunkZ: Qr[2] - Wr / uQ.i.hx,
              facing: Zr,
              state: "vacant",
              mine: !1
            }
          })),
          animate: !1
        }
      }
      start(rr) {
        this.terrain = new YW(rr, this.map, this.plots.plots)
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
      setGoal(rr) {
        const {
          origin: Sr,
          size: Qr
        } = this.map.area;
        this.minimap.setGoal(rr && [(Sr + Qr - rr.x) / Qr, (rr.z - Sr) / Qr])
      }
      vx(rr) {
        const Sr = [...this.plots.plots];
        for (const [ar, jr, Ir] of "plotsAll" === rr[0] ? rr[1] : [rr[1]]) {
          const rr = Sr[ar - 1];
          var Qr;
          if (rr.state === jr && rr.mine === Ir || (Sr[ar - 1] = {
              ...rr,
              state: jr,
              mine: Ir
            }), rr.state !== jr) null === (Qr = this.terrain) || void 0 === Qr || Qr.forget(rr.chunkX, rr.chunkZ)
        }
        this.plots = {
          plots: Sr,
          animate: "plotsOne" === rr[0]
        };
        const Zr = Sr.find((rr => rr.mine)),
          Wr = this.map.area.origin / uQ.i.hx;
        this.homeGate = Zr ? function(rr, Sr, Qr) {
          const Zr = rr[0] * SZ,
            Wr = rr[2] * SZ,
            ar = SZ / 2 + .5;
          return "north" === Sr ? [Zr + ar, Wr - Qr] : [Zr + SZ - ar, Wr + SZ + Qr]
        }([Zr.chunkX + Wr, 0, Zr.chunkZ + Wr], Zr.facing, 1) : null, this.publishPlots(this.plots)
      }
      receiveMarkers(rr) {
        this.markers = rr.map((rr => {
          const [Sr, Qr] = [this.toMapUnits(rr[2]), this.toMapUnits(rr[3])];
          return "mapPlace" === rr[0] ? {
            kind: "place",
            place: rr[1],
            x: Sr,
            z: Qr
          } : {
            kind: "npc",
            face: null === rr[1] ? "npc" : `npc_${rr[1]}`,
            x: Sr,
            z: Qr
          }
        })), this.publishMarkers(this.markers)
      }
      setFullMapOpen(rr) {
        rr !== this.fullMapOpen && (this.fullMapOpen = rr, this.fullMapZoom = NW.g, this.placeTerrain())
      }
      setFullMapZoom(rr) {
        this.fullMapZoom = rr
      }
      frame(rr, Sr, Qr) {
        if (!Sr) return;
        const Zr = Math.floor(Sr[0]),
          Wr = Math.floor(Sr[1]),
          ar = Math.floor(Sr[2]),
          {
            origin: jr,
            size: Ir
          } = this.map.area;
        if (Zr !== this.block.x || Wr !== this.block.y || ar !== this.block.z) {
          Zr === this.block.x && ar === this.block.z || (this.terrain.focusOn(Zr, ar), this.address = aW(Zr, ar, rr.cameraHeading, this.address)), this.block = {
            x: Zr,
            y: Wr,
            z: ar
          };
          const Sr = this.map.city && (fr = this.address, Er = Wr, pr = this.inSewers, !(Er >= (pr ? -1 : -3)) && ("street" === fr.kind || "junction" === fr.kind || "tile" === fr.kind && !EW.has(fr.district))),
            Qr = jW(this.address);
          Qr === this.addressKey && Sr === this.inSewers || (this.addressKey = Qr, this.inSewers = Sr, this.publishAddress(this.address))
        }
        var fr, Er, pr;
        const xr = performance.now(),
          mr = function(rr, Sr, Qr, Zr) {
            return !rr || Zr || "tile" === Sr.kind && "quarry" === Sr.district ? 1 : Qr || "plot" !== Sr.kind && "tile" !== Sr.kind ? 0 : 1
          }(this.map.city, this.address, Qr, this.inSewers);
        if (this.zoom !== mr) {
          this.reducedMotion ??= window.matchMedia("(prefers-reduced-motion: reduce)");
          const rr = this.reducedMotion.matches ? 1 : 1 - Math.exp(-(xr - this.lastFrameMs) / 150);
          this.zoom += (mr - this.zoom) * (Number.isNaN(rr) ? 1 : rr), Math.abs(mr - this.zoom) < .002 && (this.zoom = mr)
        }
        this.lastFrameMs = xr;
        const Nr = (jr + Ir - Sr[0]) / Ir,
          Ur = (Sr[2] - jr) / Ir,
          tr = rr.cameraHeading;
        if (this.fullMapOpen) {
          const {
            zoom: rr,
            x: Sr,
            y: Qr
          } = this.fullMapZoom;
          this.fullMap.write(Nr, Ur, tr, Sr, Qr, rr, 0)
        } else if (this.isMapShown()) {
          const rr = Math.exp(this.zoom * this.logLocalScale),
            Sr = Nr + (.5 - Nr) * this.zoom - Nr * rr,
            Qr = Ur + (.5 - Ur) * this.zoom - Ur * rr;
          this.minimap.write(Nr, Ur, tr, Sr, Qr, rr, this.zoom)
        }
      }
      toMapUnits(rr) {
        return (rr - this.map.area.origin) / uQ.i.hx
      }
    }
    const LW = aZ / uQ.i.hx,
      lW = `matrix(-1 0 0 1 ${LW} 0)`,
      XW = .08,
      PW = [{
        transform: "scaleY(0)"
      }, {
        transform: "scaleY(1)"
      }],
      HW = [{
        opacity: 1
      }, {
        opacity: 0
      }],
      qW = {
        quarry: xZ.mining,
        industry: xZ.demolition,
        market: xZ.market,
        lumberMill: xZ.woodcutting,
        farm: xZ.farming,
        dealership: "Light Blue Car"
      },
      RW = {
        drillBay: xZ.mining,
        vanBay: "Yellow Kart",
        carPickup: "Light Blue Car",
        demolitionPit: xZ.demolition,
        farmField: xZ.farming,
        woods: xZ.woodcutting
      },
      gW = IZ.flatMap(((rr, Sr) => rr.map(((rr, Qr) => ({
        tile: rr,
        x: 1 + 3 * Qr,
        z: 1 + 3 * Sr
      }))))),
      CW = gW.flatMap((rr => {
        let {
          tile: Sr,
          x: Qr,
          z: Zr
        } = rr;
        return "residential" === Sr.kind ? [] : [{
          tile: Sr,
          x: Qr,
          z: Zr
        }]
      })),
      MW = gW.flatMap((rr => {
        let {
          tile: Sr,
          x: Qr,
          z: Zr
        } = rr;
        return "residential" === Sr.kind ? [{
          name: Sr.name,
          x: Qr,
          z: Zr
        }] : []
      })),
      GW = [...rW.eastWest, ...rW.northSouth],
      kW = {
        "--greenville-sewers-fog": 32 / (2 * aZ) * 100 + "%"
      },
      AW = {
        "--greenville-map-tile": 2 / LW * 100 + "cqw"
      };

    function VW(rr, Sr) {
      return {
        left: (LW - rr) / LW * 100 + "%",
        top: Sr / LW * 100 + "%"
      }
    }

    function iW(rr) {
      let {
        axis: Sr,
        line: Qr
      } = rr;
      const Zr = .3,
        Wr = 3 * Qr + Zr,
        ar = LW - .6;
      return "eastWest" === Sr ? {
        x: Zr,
        y: Wr,
        width: ar,
        height: .4
      } : {
        x: Wr,
        y: Zr,
        width: .4,
        height: ar
      }
    }

    function wW(rr) {
      let {
        controller: Sr,
        full: Qr = !1
      } = rr;
      const Zr = Qr ? Sr.fullMap : Sr.minimap;
      (0, yr.g)(BW, null), (0, yr.g)(yW, null);
      const Wr = Sr.isInSewers(),
        {
          plots: ar,
          animate: jr
        } = Sr.getPlots(),
        {
          city: Ir
        } = Sr.map;
      return (0, Or.jsxs)("div", {
        className: Yr()("GreenvilleNavMap", {
          Full: Qr,
          Sewers: Wr
        }),
        style: Qr ? AW : void 0,
        children: [(0, Or.jsx)("div", {
          className: "GreenvilleNavMapWorld",
          ref: Zr.mountWorld,
          children: (0, Or.jsxs)("div", {
            className: "GreenvilleNavMapPlane",
            children: [Ir && (0, Or.jsx)("svg", {
              className: "GreenvilleNavMapPlan",
              viewBox: `0 0 ${LW} ${LW}`,
              preserveAspectRatio: "none",
              shapeRendering: "crispEdges",
              children: (0, Or.jsxs)("g", {
                transform: lW,
                children: [(0, Or.jsx)("rect", {
                  className: "GreenvilleNavGround",
                  width: LW,
                  height: LW
                }), GW.map((rr => (0, Or.jsx)("rect", {
                  className: "GreenvilleNavRoad",
                  ...iW(rr)
                }, rr.name))), CW.map((rr => {
                  let {
                    tile: Sr,
                    x: Qr,
                    z: Zr
                  } = rr;
                  return (0, Or.jsx)("rect", {
                    className: "GreenvilleNavDistrict",
                    "data-district": Sr.district,
                    x: Qr,
                    y: Zr,
                    width: 2,
                    height: 2
                  }, Sr.district)
                })), ar.map((rr => (0, Or.jsx)(oW, {
                  plot: rr,
                  animate: jr
                }, rr.plotId)))]
              })
            }), (0, Or.jsx)("div", {
              className: "GreenvilleNavMapTerrainHost",
              ref: Zr.mountTerrain
            }), Ir && (0, Or.jsxs)(Or.Fragment, {
              children: [(0, Or.jsx)("svg", {
                className: "GreenvilleNavMapLots",
                viewBox: `0 0 ${LW} ${LW}`,
                preserveAspectRatio: "none",
                children: (0, Or.jsx)("g", {
                  transform: lW,
                  children: ar.map((rr => (0, Or.jsx)("rect", {
                    className: Yr()("GreenvilleNavLot", {
                      Vacant: "vacant" === rr.state,
                      Loading: "loading" === rr.state,
                      Mine: rr.mine
                    }),
                    x: rr.chunkX + XW,
                    y: rr.chunkZ + XW,
                    width: .84,
                    height: .84
                  }, rr.plotId)))
                })
              }), Wr && (0, Or.jsx)("img", {
                className: "GreenvilleNavSewers",
                src: xW,
                alt: "",
                draggable: !1
              }), CW.map((rr => {
                let {
                  tile: Sr,
                  x: Qr,
                  z: Zr
                } = rr;
                const Wr = qW[Sr.district];
                return Wr && (0, Or.jsx)("span", {
                  className: "GreenvilleNavPin GreenvilleNavLandmark",
                  style: VW(Qr + 1, Zr + 1),
                  children: (0, Or.jsx)(Kr.d, {
                    itemName: Wr,
                    amount: 0
                  })
                }, Sr.district)
              })), Qr && (0, Or.jsx)(cW, {}), (0, Or.jsx)(FW, {
                controller: Sr
              })]
            }), (0, Or.jsxs)("div", {
              className: "GreenvilleNavArrowTrack",
              ref: Zr.mountArrow,
              children: [Wr && (0, Or.jsx)("div", {
                className: "GreenvilleNavSewersFog",
                style: kW
              }), (0, Or.jsx)("div", {
                className: "GreenvilleNavArrow",
                children: (0, Or.jsx)("svg", {
                  viewBox: "-1 -1 2 2",
                  children: (0, Or.jsx)("polygon", {
                    points: "0,-0.8 0.62,0.62 0,0.28 -0.62,0.62"
                  })
                })
              })]
            }), ar.map((rr => rr.mine && (0, Or.jsx)("span", {
              className: "GreenvilleNavPin GreenvilleNavHome",
              style: VW(rr.chunkX + .5, rr.chunkZ + ("north" === rr.facing ? 0 : 1)),
              children: (0, Or.jsx)(aS.c, {
                name: "house"
              })
            }, rr.plotId)))]
          })
        }), !Qr && (0, Or.jsx)("div", {
          className: "GreenvilleNavGoalTrack",
          ref: Sr.minimap.mountGoal,
          children: (0, Or.jsx)("span", {
            className: "GreenvilleNavPin GreenvilleNavGoal",
            children: (0, Or.jsx)(aS.c, {
              name: "flag"
            })
          })
        })]
      })
    }

    function cW() {
      return (0, Or.jsxs)(Or.Fragment, {
        children: [CW.map((rr => {
          let {
            tile: Sr,
            x: Qr,
            z: Zr
          } = rr;
          return (0, Or.jsx)("span", {
            className: Yr()("GreenvilleNavPlaceName SmallTextBold", {
              UnderLandmark: Sr.district in qW
            }),
            style: VW(Qr + 1, Zr + 1),
            children: fZ[Sr.district]
          }, Sr.district)
        })), MW.map((rr => {
          let {
            name: Sr,
            x: Qr,
            z: Zr
          } = rr;
          return (0, Or.jsx)("span", {
            className: "GreenvilleNavPlaceName Neighbourhood SmallTextLight",
            style: VW(Qr + 1, Zr + 1),
            children: Sr
          }, Sr)
        }))]
      })
    }

    function FW(rr) {
      let {
        controller: Sr
      } = rr;
      return (0, yr.g)(TW, null), (0, Or.jsx)(Or.Fragment, {
        children: Sr.getMarkers().map(((rr, Sr) => (0, Or.jsxs)("span", {
          className: "GreenvilleNavPin GreenvilleNavMarker",
          style: VW(rr.x, rr.z),
          children: ["npc" === rr.kind && (0, Or.jsx)(mW.d, {
            icon: rr.face
          }), "place" === rr.kind && (0, Or.jsx)(Kr.d, {
            itemName: RW[rr.place],
            amount: 0
          })]
        }, Sr)))
      })
    }
    const oW = (0, fr.memo)((function(rr) {
      let {
        plot: Sr,
        animate: Qr
      } = rr;
      const Zr = (0, fr.useRef)(null),
        Wr = (0, fr.useRef)(Sr.state),
        ar = (0, fr.useRef)(null);
      return (0, fr.useLayoutEffect)((() => {
        var rr;
        const jr = Wr.current;
        Wr.current = Sr.state, jr !== Sr.state && (null === (rr = ar.current) || void 0 === rr || rr.cancel(), Qr && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && ("built" === Sr.state ? ar.current = Zr.current.animate(PW, {
          duration: 300,
          easing: "ease-out"
        }) : "vacant" === Sr.state && (ar.current = Zr.current.animate(HW, {
          duration: 400,
          easing: "ease-in"
        }))))
      }), [Sr.state]), (0, fr.useEffect)((() => () => {
        var rr;
        null === (rr = ar.current) || void 0 === rr || rr.cancel()
      }), []), (0, Or.jsxs)(Or.Fragment, {
        children: [(0, Or.jsx)("rect", {
          className: "GreenvilleNavPlotGrass",
          x: Sr.chunkX + XW,
          y: Sr.chunkZ + XW,
          width: .84,
          height: .84
        }), (0, Or.jsx)("rect", {
          ref: Zr,
          className: Yr()("GreenvilleNavPlotRoof", {
            Loading: "loading" === Sr.state,
            Built: "built" === Sr.state,
            Mine: Sr.mine
          }),
          x: Sr.chunkX + XW,
          y: Sr.chunkZ + XW,
          width: .84,
          height: .84
        })]
      })
    }));

    function bW(rr) {
      let {
        controller: Sr,
        nav: Qr
      } = rr;
      const Zr = (0, yr.g)(oZ, Sr.getView()),
        {
          t: Wr
        } = (0, Tr.E)(),
        ar = (0, fr.useRef)(null);
      return (0, Or.jsx)(NS, {
        open: Zr.open,
        onDismiss: Sr.dismiss,
        title: Wr("greenvilleGame:map"),
        className: "GreenvilleMapBoard",
        children: (0, Or.jsxs)("div", {
          ref: ar,
          className: "GreenvilleMapFrame",
          children: [(0, Or.jsx)(wW, {
            controller: Qr,
            full: !0
          }), (0, Or.jsx)(JW, {
            frame: ar,
            nav: Qr
          })]
        })
      })
    }

    function JW(rr) {
      let {
        frame: Sr,
        nav: Qr
      } = rr;
      const {
        t: Zr
      } = (0, Tr.E)(), Wr = (0, dZ.d)(Sr, !0, "", 1);
      return (0, fr.useEffect)((() => {
        Qr.setFullMapZoom(Wr.view)
      }), [Qr, Wr.view]), (0, Or.jsx)(DZ.e, {
        zoom: Wr,
        zoomInLabel: Zr("greenvilleGame:mapZoomIn"),
        zoomOutLabel: Zr("greenvilleGame:mapZoomOut")
      })
    }
    var DW = Qr(2132),
      dW = Qr(1597);

    function sW(rr) {
      let {
        controller: Sr,
        onOpen: Qr
      } = rr;
      const [Zr, Wr] = (0, fr.useState)((() => Sr.isMapShown()));
      (0, yr.c)(yW, (() => {
        Wr(Sr.isMapShown())
      }));
      const ar = (0, Vr.b)(),
        {
          isTouchScreen: jr
        } = (0, nr.n)(["isTouchScreen"]),
        {
          t: Ir
        } = (0, Tr.E)(),
        [Er, pr] = (0, fr.useState)(null);
      return function(rr) {
        (0, fr.useLayoutEffect)((() => {
          if (!rr) return;
          const Sr = rr.closest(".GreenvilleHudColumnStack"),
            Qr = new ResizeObserver((() => {
              rr.offsetWidth > 0 && Sr.style.setProperty("--greenville-map-width", `${rr.offsetWidth}px`)
            }));
          return Qr.observe(rr), () => {
            Qr.disconnect()
          }
        }), [rr])
      }(Er), (0, Or.jsx)("div", {
        className: Yr()("GreenvilleNavRoom", {
          Hidden: ar || !Zr
        }),
        children: (0, Or.jsxs)("button", {
          ref: pr,
          type: "button",
          className: "GreenvilleNav",
          "aria-label": Ir("greenvilleGame:map"),
          ...(0, dW.g)(Qr, "pointerup"),
          onMouseDown: rr => {
            rr.preventDefault()
          },
          children: [(0, Or.jsx)(wW, {
            controller: Sr
          }), (0, Or.jsxs)("span", {
            className: "GreenvilleNavOpenHint",
            children: [jr && (0, Or.jsx)(aS.c, {
              name: "expand",
              className: "GreenvilleNavExpandIcon"
            }), !jr && (0, Or.jsx)(DW.c, {
              noaAction: "OpenTasksAndLeaderboard",
              padHidesKey: !0
            })]
          })]
        })
      })
    }
    const uW = Qr.p + "static/media/greenvilleCity.eadd76d06b8dfb594e19.png",
      ra = Qr.p + "static/media/greenvilleGrove.71253c8c4ae6c9cacba5.png",
      Sa = {
        area: fW,
        imageUrl: uW,
        city: !0
      },
      Qa = {
        area: pW,
        imageUrl: ra,
        city: !1
      };

    function Za(rr) {
      return rr >= 75 ? "face-smile" : rr >= 50 ? "face-diagonal-mouth" : rr >= 25 ? "face-worried" : "face-dizzy"
    }

    function Wa(rr) {
      const Sr = Math.round(rr);
      return `${Sr>0?"+":""}${Sr}%`
    }

    function aa(rr) {
      let {
        controller: Sr
      } = rr;
      (0, yr.g)(bQ, null);
      const Qr = Sr.getMood();
      return Qr ? (0, Or.jsx)(er.d, {
        placement: "statBars",
        children: (0, Or.jsx)(ja, {
          mood: Qr
        })
      }) : null
    }

    function ja(rr) {
      let {
        mood: Sr
      } = rr;
      const {
        t: Qr
      } = (0, Tr.E)(), Zr = function(rr) {
        const [, Sr] = (0, fr.useState)(0);
        return (0, fr.useEffect)((() => {
          const Qr = rr - performance.now();
          if (Qr <= 0) return;
          const Zr = window.setTimeout((() => {
            Sr((rr => rr + 1))
          }), Qr);
          return () => {
            window.clearTimeout(Zr)
          }
        }), [rr]), rr > performance.now()
      }(Sr.restedEndsAt), {
        energy: Wr,
        breakEvenEnergy: ar,
        luckPercent: jr
      } = Sr, Ir = null !== jr && void 0 !== jr ? jr : Sr.earningsPercent;
      return (0, Or.jsxs)("div", {
        className: Yr()("GreenvilleMoodChip", {
          Exhausted: Wr < 25,
          Rested: Zr,
          Tired: !Zr && Wr < ar && Wr >= 25,
          Drained: !Zr && Wr < 25
        }),
        role: "img",
        "aria-label": Qr("greenvilleGame:moodEnergyLabel", {
          energy: Math.round(Wr)
        }),
        children: [(0, Or.jsx)(aS.c, {
          name: Za(Wr),
          className: "GreenvilleMoodChipFace"
        }), Zr && (0, Or.jsx)("span", {
          className: "GreenvilleMoodChipZz",
          children: Qr("greenvilleGame:moodRestedGlyph")
        }), (0, Or.jsxs)("div", {
          className: "GreenvilleMoodChipMeter",
          style: {
            "--greenville-break-even": `${ar}%`
          },
          children: [(0, Or.jsx)("div", {
            className: "GreenvilleMoodChipBar",
            children: (0, Or.jsx)("div", {
              className: "GreenvilleMoodChipFill",
              style: {
                transform: `scaleX(${Math.min(100,Math.max(0,Wr))/100})`
              }
            })
          }), (0, Or.jsx)("div", {
            className: "GreenvilleMoodChipTick"
          })]
        }), null === jr && (0, Or.jsx)("span", {
          className: "GreenvilleMoodChipCoin",
          "aria-hidden": "true",
          children: (0, Or.jsx)(Kr.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), (0, Or.jsxs)("span", {
          className: Yr()("GreenvilleMoodChipEarnings", {
            Positive: Math.round(Ir) > 0,
            Negative: Math.round(Ir) < 0
          }),
          children: [null !== jr && (0, Or.jsx)("span", {
            className: "GreenvilleMoodChipLuck",
            children: Qr("greenvilleGame:luck")
          }), Wa(Ir)]
        }), Sr.adBoosted && (0, Or.jsx)("span", {
          className: "GreenvilleMoodChipBoost",
          children: (0, Or.jsx)(aS.c, {
            name: "bolt"
          })
        })]
      })
    }

    function Ia(rr) {
      let {
        controller: Sr
      } = rr;
      (0, yr.g)(oQ, null);
      const Qr = Sr.getPlace();
      return "hudHome" !== (null === Qr || void 0 === Qr ? void 0 : Qr.kind) || null === Qr.runStartedAt ? null : (0, Or.jsx)(fa, {
        startedAt: Qr.runStartedAt
      })
    }

    function fa(rr) {
      let {
        startedAt: Sr
      } = rr;
      const Qr = Math.max(0, Math.floor(-(0, PZ.f)(Sr)));
      return (0, Or.jsx)("div", {
        className: "GreenvilleMarketCountdown",
        role: "timer",
        children: (0, Or.jsxs)("div", {
          className: "GreenvilleMarketCountdownTime FullyFancyText",
          children: [Math.floor(Qr / 60), ":", String(Qr % 60).padStart(2, "0")]
        })
      })
    }
    const Ea = "greenvilleSmugglerView",
      pa = {
        open: !1,
        deals: [],
        soldOutSlots: [],
        rotatesAtMs: 0,
        pending: !1,
        status: null,
        boughtSlot: null,
        boughtCount: 0
      };
    class xa extends SS {
      constructor(rr, Sr, Qr, Zr, Wr) {
        super(pa, rr, Sr), this.onBought = Wr, this.purchases = void 0, this.day = 0, this.buy = rr => {
          const Sr = this.getView();
          !Sr.open || Sr.pending || Sr.soldOutSlots.includes(rr) || (this.purchases.push([this.day, rr]), this.set({
            ...Sr,
            pending: !0
          }))
        }, this.syncPending = () => {
          const rr = this.getView();
          rr.open && this.set({
            ...rr,
            pending: !this.purchases.nx()
          })
        }, this.purchases = new ur(Zr, (rr => {
          let [Sr, Zr] = rr;
          Qr(Sr, Zr)
        }), this.syncPending)
      }
      vx(rr) {
        if ("close" === rr[0]) return void this.close();
        const [, Sr, Qr, Zr, Wr, ar] = rr;
        null !== ar && this.purchases.takeAnswer();
        const jr = this.getView();
        if (null !== ar && !jr.open) return;
        this.day = Sr;
        const [Ir, fr] = null !== ar && void 0 !== ar ? ar : [null, null], Er = {
          open: !0,
          deals: Qr,
          soldOutSlots: Wr,
          rotatesAtMs: Date.now() + Zr,
          pending: !this.purchases.nx(),
          status: this.getStatus(Ir, fr),
          boughtSlot: Ir,
          boughtCount: jr.boughtCount + (null === Ir ? 0 : 1)
        };
        null === ar ? this.show(Er) : this.set(Er), null !== Ir && this.onBought()
      }
      dropPresses() {
        this.purchases.clear()
      }
      getStatus(rr, Sr) {
        return null !== rr ? {
          tone: "bought",
          key: "greenvilleGame:smugglerBought"
        } : null === Sr ? null : {
          tone: "refused",
          key: Sr
        }
      }
    }
    var ma = Qr(40205);
    const Na = {
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

    function Ua(rr) {
      let {
        controller: Sr
      } = rr;
      const Qr = (0, yr.g)(Ea, Sr.getView()),
        Zr = Fr(),
        {
          t: Wr
        } = (0, Tr.E)();
      return (0, Or.jsx)(ma.c, {
        keys: Na,
        open: Qr.open,
        onDismiss: Sr.dismiss,
        wallet: [{
          itemName: cr,
          amount: Zr
        }],
        deals: Qr.deals.map(((rr, Sr) => {
          let [Wr, ar, jr] = rr;
          return {
            slot: Sr,
            itemName: Wr,
            displayName: (0, Or.jsx)(xS, {
              item: Wr
            }),
            enchantmentTier: null,
            amount: ar,
            prices: [{
              itemName: cr,
              amount: jr,
              owned: Zr
            }],
            soldOut: Qr.soldOutSlots.includes(Sr),
            justBought: Qr.boughtSlot === Sr
          }
        })),
        rotatesAtMs: Qr.rotatesAtMs,
        status: null === Qr.status ? null : {
          tone: Qr.status.tone,
          text: Wr(Qr.status.key)
        },
        pending: Qr.pending,
        boughtCount: Qr.boughtCount,
        onBuy: Sr.buy
      })
    }
    const ta = [{
        transform: "translateY(100%)",
        opacity: 0
      }, {
        transform: "translateY(0)",
        opacity: 1
      }],
      ha = [{
        transform: "translateY(-100%)",
        opacity: 0
      }, {
        transform: "translateY(0)",
        opacity: 1
      }];

    function za(rr) {
      return rr ? `${rr.number}|${rr.street.name}` : ""
    }

    function Ya(rr) {
      let {
        address: Sr,
        large: Qr,
        rootRef: Zr
      } = rr;
      const Wr = function(rr) {
          switch (rr.kind) {
            case "junction":
              return [{
                street: rr.along,
                number: null
              }, {
                street: rr.cross,
                number: null
              }];
            case "plot":
            case "tile":
              return [{
                street: rr.street,
                number: rr.number
              }, null];
            case "street":
              return [{
                street: rr.street,
                number: rr.block
              }, null]
          }
        }(Sr),
        ar = Qr && "plot" === Sr.kind ? Sr.neighbourhood : null,
        jr = (0, fr.useRef)(null),
        Ir = (0, fr.useRef)(null),
        Er = (0, fr.useRef)(Wr),
        pr = (0, fr.useRef)({
          large: Qr,
          top: 0,
          height: 0
        }),
        xr = (0, fr.useRef)([]),
        mr = (0, fr.useRef)(null);
      (0, fr.useLayoutEffect)((() => {
        const rr = Er.current;
        if (Er.current = Wr, window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const Sr = [];
        if (za(rr[0]) !== za(Wr[0]) && Sr.push(jr.current.animate(ta, {
            duration: 180,
            easing: "ease-out"
          })), Wr[1] && !rr[1] && Sr.push(Ir.current.animate(ha, {
            duration: 220,
            easing: "ease-out"
          })), Sr.length > 0) {
          for (const rr of xr.current) rr.cancel();
          xr.current = Sr
        }
      }), [za(Wr[0]), za(Wr[1])]), (0, fr.useLayoutEffect)((() => {
        var rr;
        const Sr = Zr.current,
          Wr = pr.current;
        pr.current = {
          large: Qr,
          top: Sr.offsetTop,
          height: Sr.offsetHeight
        }, Wr.large === Qr || 0 === Wr.height || 0 === Sr.offsetHeight || window.matchMedia("(prefers-reduced-motion: reduce)").matches || (null === (rr = mr.current) || void 0 === rr || rr.cancel(), mr.current = Sr.animate([{
          transform: `translateY(${Wr.top-Sr.offsetTop}px) scale(${Wr.height/Sr.offsetHeight})`
        }, {
          transform: "none"
        }], {
          duration: 260,
          easing: "ease-out"
        }))
      }), [Qr, ar, za(Wr[0]), za(Wr[1])]), (0, fr.useEffect)((() => {
        const rr = Zr.current,
          Sr = new ResizeObserver((() => {
            pr.current = {
              ...pr.current,
              top: rr.offsetTop,
              height: rr.offsetHeight
            }
          }));
        return Sr.observe(rr.parentElement), () => {
          var rr;
          Sr.disconnect();
          for (const Sr of xr.current) Sr.cancel();
          null === (rr = mr.current) || void 0 === rr || rr.cancel()
        }
      }), [Zr]);
      const [Nr, Ur] = Wr;
      return (0, Or.jsxs)("div", {
        ref: Zr,
        className: Yr()("GreenvilleNavSign", {
          Large: Qr
        }),
        children: [(0, Or.jsxs)("div", {
          className: "GreenvilleNavBlade",
          children: [null !== ar && (0, Or.jsx)("span", {
            className: "GreenvilleNavHeader",
            children: ar
          }), (0, Or.jsx)(na, {
            blade: Nr,
            textRef: jr
          })]
        }), Ur && (0, Or.jsx)("div", {
          ref: Ir,
          className: "GreenvilleNavBlade",
          children: (0, Or.jsx)(na, {
            blade: Ur
          })
        })]
      })
    }

    function na(rr) {
      let {
        blade: Sr,
        textRef: Qr
      } = rr;
      return (0, Or.jsxs)("span", {
        ref: Qr,
        className: "GreenvilleNavBladeText",
        children: [null !== Sr.number && (0, Or.jsx)("span", {
          className: "GreenvilleNavNumber",
          children: Sr.number
        }), (0, Or.jsxs)("span", {
          className: "GreenvilleNavStreet",
          children: [Sr.street.shortName, " ", (0, Or.jsx)("span", {
            className: "GreenvilleNavSuffix",
            children: Sr.street.suffix
          })]
        })]
      })
    }
    const ea = "4rem",
      Ka = `translateY(${ea}) scale(1.4)`,
      ya = [{
        transform: Ka,
        opacity: 0
      }, {
        transform: Ka,
        opacity: 1,
        offset: .12
      }, {
        transform: Ka,
        opacity: 1,
        offset: .7,
        easing: "ease-in-out"
      }, {
        transform: "none",
        opacity: 1
      }],
      Ba = [{
        opacity: 0
      }, {
        opacity: 1
      }];

    function Ta(rr) {
      var Sr;
      let {
        controller: Qr,
        nav: Zr
      } = rr;
      (0, yr.g)(oQ, null), (0, yr.g)(yW, null);
      const {
        t: Wr
      } = (0, Tr.E)(), ar = (0, Vr.b)(), jr = (0, fr.useRef)(null), Ir = (0, fr.useRef)(null), Er = (0, fr.useRef)(null), pr = (0, fr.useRef)(null), xr = (0, fr.useRef)(null), mr = (0, fr.useRef)(null), Nr = (0, GS.j)("hiddenPlayerNames"), Ur = Qr.getPlace(), tr = Zr.getAddress(), hr = Zr.isInSewers(), zr = Ur && function(rr, Sr, Qr, Zr, Wr) {
        if (Zr) return {
          key: "sewers",
          name: rr("greenvilleGame:placeSewers"),
          eyebrow: null
        };
        switch (Sr.kind) {
          case "hudTown":
            return "city" !== Sr.place ? {
              key: Sr.place,
              name: rr(`greenvilleGame:${Sr.place}`),
              eyebrow: null
            } : "tile" === Qr.kind ? {
              key: `place|${fZ[Qr.district]}`,
              name: fZ[Qr.district],
              eyebrow: null
            } : "outside" === Qr.kind ? {
              key: "city|outside",
              name: rr("greenvilleGame:placeGreenville"),
              eyebrow: null
            } : null;
          case "hudJob": {
            const Qr = NZ(rr, Sr.place);
            return {
              key: `place|${Qr}`,
              name: Qr,
              eyebrow: null
            }
          }
          case "hudHome": {
            const Qr = Sr.isOwner ? rr("greenvilleGame:placeYourHouse") : rr("greenvilleGame:homePlayersHouse", {
                player: (0, sQ.c)(Sr.ownerName, Wr)
              }),
              Zr = `home|${Sr.ownerName}|${Sr.houseName}`;
            return null === Sr.houseName ? {
              key: Zr,
              name: Qr,
              eyebrow: null
            } : {
              key: Zr,
              name: Sr.houseName,
              eyebrow: Qr
            }
          }
          case "hudSpleef":
            return {
              key: "spleef", name: rr("greenvilleGame:placeSpleef"), eyebrow: null
            }
        }
      }(Wr, Ur, tr, hr, Nr), Yr = zr ? zr.key : null;
      if ((0, fr.useLayoutEffect)((() => {
          var rr, Sr, Qr, Zr;
          if (null === Yr) return null === (Qr = pr.current) || void 0 === Qr || Qr.cancel(), void(null === (Zr = xr.current) || void 0 === Zr || Zr.cancel());
          if (jr.current === Yr) return;
          if (jr.current = Yr, ar) return;
          const Wr = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          null === (rr = pr.current) || void 0 === rr || rr.cancel(), pr.current = Ir.current.animate(Wr ? Ba : ya, {
            duration: Wr ? 400 : 2200
          }), null === (Sr = xr.current) || void 0 === Sr || Sr.cancel(), !Wr && Er.current && (xr.current = Er.current.animate(function(rr) {
            const Sr = `0 calc(${ea} + ${(1.4-1)*rr}px)`;
            return [{
              translate: "0 0",
              easing: "ease-out"
            }, {
              translate: Sr,
              offset: .12
            }, {
              translate: Sr,
              offset: .7,
              easing: "ease-in-out"
            }, {
              translate: "0 0"
            }]
          }(Ir.current.offsetHeight), {
            duration: 2200
          }))
        }), [Yr]), (0, fr.useEffect)((() => () => {
          var rr, Sr;
          null === (rr = pr.current) || void 0 === rr || rr.cancel(), null === (Sr = xr.current) || void 0 === Sr || Sr.cancel()
        }), []), !Ur) return null;
      let nr = "outside" === tr.kind || hr ? null : tr;
      return !zr || "plot" !== tr.kind && "tile" !== tr.kind ? zr && nr && (null === (Sr = mr.current) || void 0 === Sr ? void 0 : Sr.key) === zr.key && (nr = mr.current.address) : mr.current = {
        key: zr.key,
        address: tr
      }, (0, Or.jsxs)("div", {
        className: "GreenvilleTopBar",
        children: [zr && (0, Or.jsx)(va, {
          title: zr,
          tagRef: Ir,
          job: hr || "hudJob" !== Ur.kind ? null : Ur,
          home: hr || "hudHome" !== Ur.kind ? null : Ur,
          sewers: hr
        }), nr && (0, Or.jsx)(Ya, {
          address: nr,
          large: !zr,
          rootRef: Er
        })]
      })
    }

    function va(rr) {
      let {
        title: Sr,
        tagRef: Qr,
        job: Zr,
        home: Wr,
        sewers: ar
      } = rr;
      return (0, Or.jsxs)("div", {
        ref: Qr,
        className: Yr()("GreenvillePlaceTag", {
          Sewers: ar
        }),
        role: "status",
        children: [null !== Sr.eyebrow && (0, Or.jsx)("span", {
          className: "GreenvillePlaceTagEyebrow",
          children: Sr.eyebrow
        }), (0, Or.jsx)("strong", {
          className: "GreenvillePlaceTagName",
          children: Sr.name
        }), Zr && (0, Or.jsx)(Oa, {
          job: Zr
        }), Wr && (0, Or.jsx)(la, {
          home: Wr
        })]
      })
    }

    function Oa(rr) {
      let {
        job: Sr
      } = rr;
      const {
        t: Qr
      } = (0, Tr.E)(), {
        level: Zr,
        expInto: Wr,
        expNeeded: ar
      } = Sr, jr = 0 === ar;
      return (0, Or.jsxs)("div", {
        className: "GreenvillePlaceTagRow",
        children: [(0, Or.jsx)("span", {
          className: "GreenvillePlaceTagJob",
          "aria-hidden": "true",
          children: (0, Or.jsx)(Kr.d, {
            itemName: xZ[Sr.job],
            amount: 0
          })
        }), (0, Or.jsx)("span", {
          className: "GreenvillePlaceTagLevel",
          children: Qr("greenvilleGame:levelShort", {
            level: Zr
          })
        }), (0, Or.jsx)("div", {
          className: "GreenvillePlaceTagBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": jr ? 100 : Math.round(Wr / ar * 100),
          children: (0, Or.jsx)("div", {
            className: "GreenvillePlaceTagBarFill",
            style: {
              transform: `scaleX(${jr?1:Math.min(1,Wr/ar)})`
            }
          })
        }), !jr && (0, Or.jsxs)("span", {
          className: "GreenvillePlaceTagExp",
          children: [(0, kr.i)(Wr), "/", (0, kr.i)(ar)]
        }), jr && (0, Or.jsx)("span", {
          className: "GreenvillePlaceTagMax",
          children: Qr("greenvilleGame:levelMax")
        }), null !== Sr.status && (0, Or.jsx)(La, {
          status: Sr.status
        })]
      })
    }

    function La(rr) {
      let {
        status: Sr
      } = rr;
      const {
        t: Qr
      } = (0, Tr.E)();
      switch (Sr.kind) {
        case "hudTier":
          return (0, Or.jsxs)("span", {
            className: Yr()("GreenvillePlaceChip", {
              Locked: Sr.locked
            }),
            children: [Sr.locked && (0, Or.jsx)(aS.c, {
              name: "lock"
            }), Qr(`greenvilleGame:${Sr.tierKey}`)]
          });
        case "hudBay":
          return (0, Or.jsxs)("span", {
            className: "GreenvillePlaceChip",
            children: [Qr("greenvilleGame:demolitionBayObject", {
              material: Qr(`greenvilleGame:${Sr.materialKey}`),
              object: Qr(`greenvilleGame:${Sr.objectKey}`)
            }), (0, Or.jsx)("span", {
              className: "GreenvillePlaceChipBar",
              children: (0, Or.jsx)("span", {
                className: "GreenvillePlaceChipBarFill",
                style: {
                  transform: `scaleX(${Sr.percent/100})`
                }
              })
            })]
          });
        case "hudBayEmpty":
          return (0, Or.jsx)("span", {
            className: "GreenvillePlaceChip",
            children: Qr("greenvilleGame:demolitionYardIncoming")
          });
        case "hudFarmTier":
          return (0, Or.jsx)("span", {
            className: "GreenvillePlaceChip Golden",
            children: Qr("greenvilleGame:farmGoldenChance", {
              percent: Sr.goldenPercent
            })
          })
      }
    }

    function la(rr) {
      let {
        home: Sr
      } = rr;
      const {
        t: Qr
      } = (0, Tr.E)();
      return Sr.pvp || Sr.parkour || !Sr.visitorsAllowed ? (0, Or.jsxs)("div", {
        className: "GreenvillePlaceTagRow GreenvillePlaceTagChips",
        children: [Sr.pvp && (0, Or.jsx)("span", {
          className: "GreenvillePlaceChip Danger",
          children: Qr("greenvilleGame:houseChipPvp")
        }), Sr.parkour && (0, Or.jsx)("span", {
          className: "GreenvillePlaceChip",
          children: Qr("greenvilleGame:houseChipParkour")
        }), !Sr.visitorsAllowed && (0, Or.jsxs)("span", {
          className: "GreenvillePlaceChip Locked",
          children: [(0, Or.jsx)(aS.c, {
            name: "lock"
          }), Qr("greenvilleGame:houseChipVisitorsOff")]
        })]
      }) : null
    }
    const Xa = "greenvilleTutorialView",
      Pa = "target",
      Ha = "home",
      qa = `${Ir}go`,
      Ra = {
        card: null,
        picker: null,
        homeMarker: !1
      };

    function ga(rr) {
      return null === rr ? "" : "jobs" === rr.kind ? rr.kind : `${rr.owner}|${rr.lineKey}|${rr.action}`
    }
    class Ca {
      constructor(rr, Sr, Qr, Zr, Wr, ar) {
        this.markers = rr, this.Jp = Sr, this.send = Qr, this.pacer = Zr, this.celebrate = Wr, this.nav = ar, this.view = Ra, this.picks = void 0, this.waiting = [], this.pressed = new Map, this.moveInTimer = null, this.flushing = !1, this.unsubscribePacer = void 0, this.go = () => {
          this.press(qa)
        }, this.goTo = rr => {
          this.waiting = this.waiting.filter((rr => {
            let {
              command: Sr
            } = rr;
            return !Sr.startsWith(`${qa} `)
          })), this.press(`${qa} ${rr}`)
        }, this.skip = rr => {
          this.press(`${Ir}skip ${rr}`)
        }, this.eN = rr => {
          const Sr = this.view.picker;
          null === Sr || Sr.movingIn || rr === this.picks.getLatest() || (this.picks.pushLatest(rr), this.set({
            ...this.view,
            picker: {
              ...Sr,
              selected: this.picks.getLatest()
            }
          }))
        }, this.moveIn = () => {
          const rr = this.view.picker;
          null === rr || rr.movingIn || (this.queue({
            command: `${Ir}movein`,
            picker: !0
          }), this.moveInTimer = setTimeout(this.onMoveInTimedOut, 15e3), this.set({
            ...this.view,
            picker: {
              ...rr,
              movingIn: !0
            }
          }))
        }, this.showLatestPick = () => {
          const rr = this.view.picker;
          null !== rr && this.set({
            ...this.view,
            picker: {
              ...rr,
              selected: this.picks.getLatest()
            }
          })
        }, this.onMoveInTimedOut = () => {
          this.moveInTimer = null;
          const rr = this.view.picker;
          null !== rr && void 0 !== rr && rr.movingIn && (console.warn("Greenville: the server never closed the house picker after Move in"), this.dropPickerPresses(), this.set({
            ...this.view,
            picker: {
              ...rr,
              selected: this.picks.getLatest(),
              movingIn: !1
            }
          }))
        }, this.flush = () => {
          if (!this.flushing) {
            for (this.flushing = !0; this.waiting.length > 0 && this.pacer.tryStart();) this.send(this.waiting.shift().command);
            this.flushing = !1
          }
        }, this.picks = new rS("", Zr, (rr => {
          Qr(`${Ir}try ${rr}`)
        }), this.showLatestPick), this.unsubscribePacer = Zr.subscribe(this.flush)
      }
      getView() {
        return this.view
      }
      vx(rr) {
        switch (rr[0]) {
          case "tutCard": {
            const [, Sr, Qr, Zr, Wr, ar, jr, Ir, fr] = rr;
            this.setCard({
              kind: "step",
              owner: Sr,
              lineKey: Qr,
              byDevice: Zr,
              count: Wr,
              goal: ar,
              action: jr,
              target: Ir && {
                x: Ir[0],
                y: Ir[1],
                z: Ir[2],
                labelKey: Ir[3]
              },
              skippable: fr
            });
            break
          }
          case "tutJobs":
            this.setCard({
              kind: "jobs",
              places: rr[1]
            });
            break;
          case "tutHidden":
            this.setCard(null);
            break;
          case "tutPicker": {
            var Sr;
            const [, Qr, Zr, Wr] = rr, ar = this.view.picker;
            Wr && this.picks.takeAnswer(), this.picks.confirm(Zr), this.set({
              ...this.view,
              picker: {
                houses: Qr.map((rr => {
                  let [Sr, Qr, Zr] = rr;
                  return {
                    schemName: Sr,
                    icon: Qr,
                    titleKey: Zr
                  }
                })),
                selected: this.picks.getLatest(),
                movingIn: null !== (Sr = null === ar || void 0 === ar ? void 0 : ar.movingIn) && void 0 !== Sr && Sr
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
            this.celebrate(rr[1], rr[2]);
            break;
          case "tutHomeMarker":
            this.set({
              ...this.view,
              homeMarker: rr[1]
            })
        }
      }
      getTarget() {
        const rr = this.view.card;
        return "step" === (null === rr || void 0 === rr ? void 0 : rr.kind) ? rr.target : null
      }
      getShownHome() {
        if (!this.view.homeMarker) return null;
        const rr = this.nav.getHomeGate(),
          Sr = this.getTarget();
        return null === rr || Sr && Math.hypot(Sr.x - rr[0], Sr.z - rr[1]) < 12 ? null : rr
      }
      frame(rr, Sr) {
        if (this.markers.setRender(rr), !this.markers.hasMarkers()) return;
        const Qr = this.getTarget();
        Qr && this.markers.update(Pa, Qr.x, Qr.y + 1, Qr.z, Sr);
        const Zr = Sr && this.getShownHome();
        Zr && this.markers.update(Ha, Zr[0], 2, Zr[1], Sr)
      }
      dispose() {
        this.dropPickerPresses(), this.forgetPresses(), this.waiting = [], this.unsubscribePacer(), this.markers.dispose()
      }
      setCard(rr) {
        ga(rr) !== ga(this.view.card) && (this.forgetPresses(), this.waiting = this.waiting.filter((rr => {
          let {
            picker: Sr
          } = rr;
          return Sr
        }))), this.set({
          ...this.view,
          card: rr
        });
        const Sr = this.getTarget();
        this.nav.setGoal(Sr && {
          x: Sr.x,
          z: Sr.z
        })
      }
      set(rr) {
        this.view = rr, this.Jp(rr)
      }
      press(rr) {
        const Sr = this.waiting.some((Sr => Sr.command === rr));
        this.pressed.has(rr) || Sr || (this.pressed.set(rr, setTimeout((() => {
          this.pressed.delete(rr)
        }), 3e3)), this.queue({
          command: rr,
          picker: !1
        }))
      }
      forgetPresses() {
        for (const rr of this.pressed.values()) clearTimeout(rr);
        this.pressed.clear()
      }
      queue(rr) {
        this.waiting.push(rr), this.flush()
      }
      dropPickerPresses() {
        this.picks.clear(), this.waiting = this.waiting.filter((rr => {
          let {
            picker: Sr
          } = rr;
          return !Sr
        })), null !== this.moveInTimer && (clearTimeout(this.moveInTimer), this.moveInTimer = null)
      }
    }
    const Ma = "GreenvilleHousePickerTitle";

    function Ga() {}

    function ka(rr) {
      let {
        controller: Sr
      } = rr;
      (0, yr.g)(Xa, null);
      const Qr = Sr.getView().picker;
      return (0, Or.jsx)(pS.b, {
        show: null !== Qr,
        forcePointerUnlock: null !== Qr,
        close: Ga,
        globallyUniqueKey: "greenvilleHousePicker",
        escDoesExit: !1,
        closeOnPressBackground: !1,
        padBackCloses: !1,
        doGameplayStartStopOnShow: !0,
        cameraKeeper: !0,
        ignorePressesAsShown: !0,
        className: "GreenvilleHousePickerOverlay",
        children: null !== Qr && (0, Or.jsx)(Aa, {
          picker: Qr,
          controller: Sr
        })
      })
    }

    function Aa(rr) {
      let {
        picker: Sr,
        controller: Qr
      } = rr;
      const {
        t: Zr
      } = (0, Tr.E)();
      return (0, Or.jsxs)("section", {
        className: "GreenvilleHousePicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": Ma,
        children: [(0, Or.jsx)("h2", {
          id: Ma,
          className: "GreenvilleHousePickerTitle",
          children: Zr("greenvilleGame:tutPickerTitle")
        }), (0, Or.jsx)("div", {
          className: "GreenvilleHousePickerHouses",
          children: Sr.houses.map((rr => {
            let {
              schemName: Wr,
              icon: ar,
              titleKey: jr
            } = rr;
            const Ir = Wr === Sr.selected;
            return (0, Or.jsxs)("button", {
              type: "button",
              className: Yr()("GreenvilleHousePickerHouse", {
                Selected: Ir
              }),
              "aria-pressed": Ir,
              disabled: Sr.movingIn,
              "data-pad-default-focus": Ir || void 0,
              onClick: () => {
                Qr.eN(Wr)
              },
              children: [(0, Or.jsx)("img", {
                src: `/textures/games/greenville/${ar}`,
                alt: "",
                draggable: !1
              }), (0, Or.jsx)("span", {
                className: "GreenvilleHousePickerHouseName",
                children: Zr(`greenvilleGame:${jr}`)
              })]
            }, Wr)
          }))
        }), (0, Or.jsx)(jS.p, {
          className: "GreenvilleHousePickerMoveIn",
          loading: Sr.movingIn,
          onClick: Qr.moveIn,
          children: Zr("greenvilleGame:tutPickerMoveIn")
        })]
      })
    }
    var Va = Qr(40004);
    const ia = {
      farm: "farming",
      lumberMill: "woodcutting",
      quarry: "mining",
      marketStreet: "market",
      demolitionYard: "demolition"
    };

    function wa(rr) {
      let {
        controller: Sr,
        hud: Qr
      } = rr;
      (0, yr.g)(Xa, null);
      const Zr = Sr.getView().card;
      return (0, Or.jsxs)(Or.Fragment, {
        children: ["step" === (null === Zr || void 0 === Zr ? void 0 : Zr.kind) && (0, Or.jsx)(ca, {
          card: Zr,
          controller: Sr,
          hud: Qr
        }), "jobs" === (null === Zr || void 0 === Zr ? void 0 : Zr.kind) && (0, Or.jsx)(Fa, {
          card: Zr,
          controller: Sr
        })]
      })
    }

    function ca(rr) {
      let {
        card: Sr,
        controller: Qr,
        hud: Zr
      } = rr;
      const {
        t: Wr
      } = (0, Tr.E)(), {
        isTouchScreen: ar
      } = (0, nr.n)(["isTouchScreen"]);
      (0, yr.g)(oQ, null);
      const jr = Zr.getPlace(),
        Ir = "hudJob" === (null === jr || void 0 === jr ? void 0 : jr.kind) && "quarry" === jr.place,
        fr = Wr(`greenvilleGame:${Sr.lineKey}${Sr.byDevice&&ar?"Touch":""}`, {
          count: (0, kr.i)(Sr.count),
          goal: (0, kr.i)(Sr.goal),
          target: Sr.target && Wr(Sr.target.labelKey)
        }),
        Er = Sr.goal > 0,
        pr = "go" === Sr.action && (0, Or.jsxs)(jS.p, {
          className: "GreenvilleTutorialCardGo",
          touchPressOn: "pointerup",
          onClick: Qr.go,
          children: [Wr("greenvilleGame:tutGo"), !ar && !Ir && (0, Or.jsx)(DW.c, {
            className: "GreenvilleTutorialCardKey",
            noaAction: "SpecialAction2",
            padHidesKey: !0
          })]
        });
      return (0, Or.jsxs)(ba, {
        heading: (0, Or.jsxs)(Or.Fragment, {
          children: [(0, Or.jsx)("span", {
            className: "GreenvilleTutorialCardLine",
            children: fr
          }), Er && (0, Or.jsxs)("span", {
            className: "GreenvilleTutorialCardCount",
            children: [(0, kr.i)(Math.min(Sr.count, Sr.goal)), "/", (0, kr.i)(Sr.goal)]
          })]
        }),
        compactAction: pr,
        children: [Er && (0, Or.jsx)("div", {
          className: "GreenvilleTutorialCardBar",
          "aria-hidden": "true",
          children: (0, Or.jsx)("span", {
            style: {
              width: `${Math.min(100,100*Sr.count/Sr.goal)}%`
            }
          })
        }), (pr || Sr.skippable) && (0, Or.jsxs)("div", {
          className: "GreenvilleTutorialCardActions",
          children: [pr, Sr.skippable && (0, Or.jsx)(oa, {
            owner: Sr.owner,
            controller: Qr
          })]
        })]
      })
    }

    function Fa(rr) {
      let {
        card: Sr,
        controller: Qr
      } = rr;
      const {
        t: Zr
      } = (0, Tr.E)();
      return (0, Or.jsxs)(ba, {
        heading: (0, Or.jsx)("span", {
          className: "GreenvilleTutorialCardLine",
          children: Zr("greenvilleGame:tutJobsTitle")
        }),
        children: [(0, Or.jsx)("ul", {
          className: "GreenvilleTutorialCardJobs",
          children: Sr.places.map((rr => (0, Or.jsxs)("li", {
            className: "GreenvilleTutorialCardJob",
            children: [(0, Or.jsx)("span", {
              className: "GreenvilleTutorialCardJobIcon",
              "aria-hidden": "true",
              children: (0, Or.jsx)(Kr.d, {
                itemName: xZ[ia[rr]],
                amount: 0
              })
            }), (0, Or.jsx)("span", {
              className: "GreenvilleTutorialCardJobName",
              children: NZ(Zr, rr)
            }), (0, Or.jsx)(jS.p, {
              className: "GreenvilleTutorialCardGo",
              touchPressOn: "pointerup",
              onClick: () => {
                Qr.goTo(rr)
              },
              children: Zr("greenvilleGame:tutGo")
            })]
          }, rr)))
        }), (0, Or.jsx)("div", {
          className: "GreenvilleTutorialCardActions",
          children: (0, Or.jsx)(oa, {
            owner: "guide",
            controller: Qr
          })
        })]
      })
    }

    function oa(rr) {
      let {
        owner: Sr,
        controller: Qr
      } = rr;
      const {
        t: Zr
      } = (0, Tr.E)();
      return (0, Or.jsx)(jS.k, {
        className: "GreenvilleTutorialCardSkip",
        touchPressOn: "pointerup",
        onClick: () => {
          Qr.skip(Sr)
        },
        children: Zr("guide" === Sr ? "greenvilleGame:tutSkip" : "greenvilleGame:tutKnowThis")
      })
    }

    function ba(rr) {
      let {
        heading: Sr,
        compactAction: Qr,
        children: Zr
      } = rr;
      const Wr = (0, Va.h)(),
        [ar, jr] = (0, fr.useState)(!1),
        Ir = Wr && !ar;
      return (0, Or.jsxs)("div", {
        className: Yr()("GreenvilleTrackerCard GreenvilleTutorialCard", {
          Compact: Ir
        }),
        children: [(0, Or.jsxs)("div", {
          className: "GreenvilleTutorialCardHead",
          children: [Wr && (0, Or.jsxs)("button", {
            type: "button",
            className: "GreenvilleTutorialCardToggle",
            "aria-expanded": ar,
            ...(0, dW.g)((() => {
              jr(!ar)
            }), "pointerup"),
            children: [Sr, (0, Or.jsx)("span", {
              className: "GreenvilleTutorialCardChevron",
              "aria-hidden": "true",
              children: ar ? "\u25b4" : "\u25be"
            })]
          }), !Wr && Sr, Ir && Qr]
        }), !Ir && Zr]
      })
    }

    function Ja(rr) {
      let {
        controller: Sr
      } = rr;
      (0, yr.g)(Xa, null), (0, yr.g)(BW, null);
      const {
        isTouchScreen: Qr
      } = (0, nr.n)(["isTouchScreen"]), {
        t: Zr
      } = (0, Tr.E)(), Wr = Sr.getTarget(), ar = Sr.getShownHome();
      return null === Wr && null === ar ? null : (0, Or.jsxs)("div", {
        className: "GreenvilleMarketWaypoints",
        children: [null !== Wr && (0, Or.jsx)(iZ, {
          bind: Sr.markers.bindMarker(Pa),
          house: !0,
          label: Zr(Wr.labelKey),
          extra: Qr && (0, Or.jsx)(aS.c, {
            name: "hand-back-point-up",
            className: "SmallTextBold TouchTutorialIcon GreenvilleTutorialHand"
          }),
          children: (0, Or.jsx)(aS.c, {
            name: "flag"
          })
        }), null !== ar && (0, Or.jsx)(iZ, {
          bind: Sr.markers.bindMarker(Ha),
          house: !0,
          label: Zr("greenvilleGame:tutMarkHome"),
          children: (0, Or.jsx)(aS.c, {
            name: "house"
          })
        })]
      })
    }
    const Da = function(rr, Sr, Qr, Wr) {
      let ar, {
        localPlayerId: jr
      } = Wr;
      const Ir = new hr((rr => {
          Er.i.Jp(tr, rr)
        })),
        zr = new eZ((rr => {
          Er.i.Jp(nZ, rr)
        })),
        Yr = {
          onGain: () => {
            ar.playSound(jr, "rpgHandleCoins1", .5, .9 + .3 * Math.random())
          },
          onCoinLanded: (rr, Sr) => {
            ar.playSound(jr, "pickUp", .3, 1 + .5 * rr / Math.max(1, Sr - 1))
          }
        },
        nr = [],
        er = {
          open: rr => {
            for (const Sr of nr) Sr !== rr && Sr.onMenuClosed();
            (0, Nr.y)()
          },
          close: Nr.j,
          dismiss: Nr.m
        },
        Kr = new pr.c,
        yr = new aQ((rr => {
          Er.i.Jp(ZQ, rr)
        }), er, (rr => {
          ar.sendCommand(null === rr ? Zr : `${Zr} ${rr}`)
        }), Kr),
        Br = new WS((rr => {
          Er.i.Jp(QS, rr)
        }), er, (rr => {
          ar.sendCommand(`demolition pick ${rr}`)
        }), Kr),
        Tr = new vS((rr => {
          Er.i.Jp(BS, rr)
        }), er, (rr => {
          ar.sendCommand(`garage pick ${rr}`)
        }), Kr),
        vr = new XZ((rr => {
          Er.i.Jp(LZ, rr)
        })),
        Or = new JQ((rr => {
          Er.i.Jp(oQ, rr)
        }), (rr => {
          Er.i.Jp(bQ, rr)
        })),
        Lr = new OW(function(rr) {
          return "profIsland" === rr ? Qa : Sa
        }(Qr), (rr => {
          Er.i.Jp(yW, rr)
        }), (rr => {
          Er.i.Jp(BW, rr)
        }), (rr => {
          Er.i.Jp(TW, rr)
        })),
        lr = new JZ((rr => {
          Er.i.Jp(oZ, rr)
        }), er, Lr);
      let Xr = null,
        Pr = null;
      const Hr = new CS((rr => {
          Er.i.Jp(RS, rr)
        }), (rr => {
          Er.i.Jp(gS, rr)
        }), er, (rr => {
          ar.sendCommand(rr)
        }), Kr),
        qr = new TQ((rr => {
          Er.i.Jp(KQ, rr)
        }), (rr => {
          Er.i.Jp(yQ, rr)
        }), er, (rr => {
          ar.sendCommand(rr)
        }), Kr),
        gr = new xa((rr => {
          Er.i.Jp(Ea, rr)
        }), er, ((rr, Sr) => {
          ar.sendCommand(`smuggle ${rr} ${Sr}`)
        }), Kr, (() => {
          (0, xr.b)(ar, jr)
        }));
      nr.push(yr, Br, Tr, Hr, qr, gr, lr);
      let Cr = null,
        Mr = null,
        Gr = null;
      return {
        onCreate: rr => {
          ar = rr, Lr.start(rr), Xr = new FZ(vr), Pr = new Ca(new Ur.e(cZ, "greenvilleGame:marketDistance"), (rr => {
            Er.i.Jp(Xa, rr)
          }), (Sr => {
            rr.sendCommand(Sr)
          }), Kr, zr.celebrate, Lr), Cr = (0, Nr.H)((0, fr.createElement)(fr.Fragment, null, (0, fr.createElement)(Rr, {
            controller: Ir
          }), (0, fr.createElement)(TZ, {
            controller: zr
          }), (0, fr.createElement)(AZ, {
            market: vr,
            markers: Xr
          }), (0, fr.createElement)(Ja, {
            controller: Pr
          }), (0, fr.createElement)(ka, {
            controller: Pr
          }), (0, fr.createElement)(qZ, {
            controller: vr
          }), (0, fr.createElement)(Ta, {
            controller: Or,
            nav: Lr
          }), (0, fr.createElement)(aa, {
            controller: Or
          }), (0, fr.createElement)(UZ, {
            controller: Or
          }, (0, fr.createElement)(wa, {
            controller: Pr,
            hud: Or
          }), (0, fr.createElement)(Dr, {
            sounds: Yr
          }), (0, fr.createElement)(sW, {
            controller: Lr,
            onOpen: lr.open
          }), (0, fr.createElement)(FQ, {
            controller: qr
          }), (0, fr.createElement)(gZ, {
            controller: vr
          }), (0, fr.createElement)(QQ, {
            controller: Hr
          })), (0, fr.createElement)(Ia, {
            controller: Or
          })), {
            content: (0, fr.createElement)(fr.Fragment, null, (0, fr.createElement)(EQ, {
              controller: yr
            }), (0, fr.createElement)(yS, {
              controller: Br
            }), (0, fr.createElement)(lS, {
              controller: Tr
            }), (0, fr.createElement)(SQ, {
              controller: Hr
            }), (0, fr.createElement)(wQ, {
              controller: qr
            }), (0, fr.createElement)(Ua, {
              controller: gr
            }), (0, fr.createElement)(bW, {
              controller: lr,
              nav: Lr
            })),
            onClose: () => {
              for (const rr of nr) rr.onMenuClosed()
            }
          }), Mr = (0, Nr.C)(lr.open), Gr = (0, mr.t)({
            id: "greenvilleMap",
            labelKey: "greenvilleGame:map",
            icon: {
              kind: "item",
              name: "Compass"
            },
            panel: !0,
            onClick: lr.open
          })
        },
        onClose: () => {
          Cr(), Mr(), Gr(), Lr.dispose(), yr.dropPresses(), Br.dropPresses(), Tr.dropPresses(), Xr.waypoints.dispose(), Hr.dropPresses(), qr.dropPresses(), Pr.dispose(), gr.dropPresses(), Kr.dispose()
        },
        onAfterRender: (rr, Sr) => {
          const Qr = ar.getPositionView(jr);
          Xr.frame(Sr, Qr), Pr.frame(Sr, Qr), Lr.frame(Sr, Qr, ar.isLocalPlayerInVehicle())
        },
        onReceivedMessageFromServer: (rr, Sr) => {
          "greenvilleBackpack" === rr ? Ir.vx(Sr) : "greenvilleOreBuyer" === rr ? yr.vx(Sr) : "greenvilleLumberMill" === rr ? Hr.vx(Sr) : "greenvilleDemolition" === rr ? Br.vx(Sr) : "greenvilleGarage" === rr ? Tr.vx(Sr) : "greenvilleFarmBoard" === rr ? qr.vx(Sr) : "greenvilleSmuggler" === rr ? gr.vx(Sr) : "greenvilleMarket" === rr ? vr.vx(Sr) : "greenvilleHud" === rr ? Or.vx(Sr) : "greenvilleLevelUp" === rr ? zr.vx(Sr) : "greenvillePlots" === rr ? Lr.vx(Sr) : "greenvilleMapMarkers" === rr ? Lr.receiveMarkers(Sr) : "greenvilleTutorial" === rr && Pr.vx(Sr)
        }
      }
    }
  },
  41096: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Ir,
      h: () => jr
    });
    var Zr = Qr(5779);
    const Wr = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      ar = [150, 150, 150],
      jr = -2147483648;
    class Ir {
      constructor(rr) {
        this.averages = rr, this.byId = new Map
      }
      get(rr) {
        var Sr, Qr, jr, Ir, fr;
        const Er = this.byId.get(rr);
        if (void 0 !== Er) return Er;
        const pr = null !== (Sr = null === (Qr = Zr.j[rr]) || void 0 === Qr ? void 0 : Qr.name) && void 0 !== Sr ? Sr : "",
          xr = pr.split("|")[0],
          mr = null !== (jr = this.averages[pr]) && void 0 !== jr ? jr : this.averages[xr],
          Nr = null !== (Ir = null !== (fr = null === mr || void 0 === mr ? void 0 : mr[0]) && void 0 !== fr ? fr : Wr[xr]) && void 0 !== Ir ? Ir : 0 === (null === mr || void 0 === mr ? void 0 : mr.length) ? null : ar;
        return this.byId.set(rr, Nr), Nr
      }
      getDrawnIds() {
        const rr = new Uint8Array(65536);
        for (let Sr = 1; Sr < 65536; Sr++) void 0 !== Zr.j[Sr] && null !== this.get(Sr) && (rr[Sr] = 1);
        return rr
      }
      drawPixel(rr, Sr, Qr, Zr, Wr, ar) {
        const Ir = function(rr, Sr, Qr) {
            const Zr = rr - Sr + (rr - Qr);
            return Math.max(.65, Math.min(1.2, .97 + .055 * Zr))
          }(Zr, Wr === jr ? Zr : Wr, ar === jr ? Zr : ar),
          fr = this.get(Qr);
        rr[Sr] = fr[0] * Ir, rr[Sr + 1] = fr[1] * Ir, rr[Sr + 2] = fr[2] * Ir, rr[Sr + 3] = 255
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);