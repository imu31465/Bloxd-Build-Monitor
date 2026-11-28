export const id = 226;
export const ids = [226];
export const modules = {
  35342: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb,
      d: () => Vb,
      g: () => pb
    });
    var eb = Mb(64);
    const Hb = new class {
      constructor() {
        this.inFlight = new Map, this.landings = new Map, this.listeners = new Set
      }
      getInFlight(bb) {
        var wb;
        return null !== (wb = this.inFlight.get(bb)) && void 0 !== wb ? wb : 0
      }
      setInFlight(bb, wb) {
        this.getInFlight(bb) !== wb && (this.inFlight.set(bb, wb), this.notify())
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
      getLanding(bb) {
        var wb, Mb;
        return null !== (wb = null === (Mb = this.landings.get(bb)) || void 0 === Mb ? void 0 : Mb.at(-1)) && void 0 !== wb ? wb : null
      }
      hasLanding(bb, wb) {
        var Mb, eb;
        return null !== (Mb = null === (eb = this.landings.get(bb)) || void 0 === eb ? void 0 : eb.includes(wb)) && void 0 !== Mb && Mb
      }
      addLanding(bb, wb) {
        var Mb;
        const eb = null !== (Mb = this.landings.get(bb)) && void 0 !== Mb ? Mb : [];
        return this.landings.set(bb, [...eb, wb]), this.notify(), () => {
          this.landings.set(bb, this.landings.get(bb).filter((bb => bb !== wb))), this.notify()
        }
      }
      notify() {
        for (const bb of this.listeners) bb()
      }
    };

    function pb(bb, wb) {
      const [Mb, pb] = (0, eb.useState)((() => Hb.getInFlight(bb)));
      return (0, eb.useLayoutEffect)((() => {
        const wb = () => {
          pb(Hb.getInFlight(bb))
        };
        return wb(), Hb.subscribe(wb)
      }), [bb]), Math.max(0, wb - Mb)
    }

    function Vb(bb, wb) {
      let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      (0, eb.useLayoutEffect)((() => {
        if (Mb) return Hb.addLanding(bb, wb.current)
      }), [bb, wb, Mb])
    }
  },
  40865: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb
    });
    var eb = Mb(40872);
    async function Hb() {
      const {
        averageColors: bb
      } = await Mb.e(235).then((() => Mb(35425)));
      return new eb.b(bb)
    }
  },
  40837: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => lb
    });
    var eb = Mb(37952),
      Hb = Mb(1259),
      pb = Mb(1321),
      Vb = Mb(39723),
      gb = Mb(39786);
    class lb {
      constructor(bb, wb) {
        var Mb;
        this.classes = bb, this.distanceKey = wb, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.BC = !1, this.Rm = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.Rm), null === (Mb = window.visualViewport) || void 0 === Mb || Mb.addEventListener("resize", this.Rm)
      }
      bindMarker(bb) {
        const wb = this.refs.get(bb);
        if (wb) return wb;
        const Mb = wb => {
          var eb;
          null === (eb = this.markers.get(bb)) || void 0 === eb || eb.stopObserving(), this.markers.delete(bb), wb && !this.BC ? (this.markers.set(bb, this.mount(wb)), this.refs.set(bb, Mb)) : this.refs.delete(bb)
        };
        return this.refs.set(bb, Mb), Mb
      }
      hasMarkers() {
        return this.markers.size > 0
      }
      setRender(bb) {
        this.render = bb
      }
      update(bb, wb, Mb, eb, Hb) {
        const pb = this.markers.get(bb);
        pb && (pb.target ??= [0, 0, 0], pb.target[0] = wb, pb.target[1] = Mb, pb.target[2] = eb, this.place(pb), this.ow(pb, Hb && Math.hypot(wb - Hb[0], Mb - Hb[1], eb - Hb[2])))
      }
      dispose() {
        var bb;
        this.BC = !0, window.removeEventListener("resize", this.Rm), null === (bb = window.visualViewport) || void 0 === bb || bb.removeEventListener("resize", this.Rm);
        for (const wb of this.markers.values()) wb.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(bb) {
        const {
          render: wb,
          viewport: Mb
        } = this;
        if (!wb || !bb.target) return;
        const eb = (50 - wb.screenBandPct.y) / 100 * Mb.height,
          Hb = {
            x: bb.halfSize.width + 8,
            top: bb.halfSize.height + 8,
            bottom: bb.halfSize.height + bb.labelsBelow + eb
          },
          pb = wb.projectWorldPosToViewport(bb.target),
          lb = null !== pb && void 0 !== pb ? pb : wb.projectWorldPosToScreenPos(bb.target),
          Lb = (0, gb.c)({
            x: lb.x,
            y: lb.y,
            text: pb
          }, Hb, Mb);
        (0, Vb.b)(bb.root, Math.round(100 * Lb.x) / 100, Math.round(100 * Lb.y) / 100)
      }
      ow(bb, wb) {
        if (null === wb) return void(null !== bb.metres && (bb.metres = null, bb.distance.textContent = ""));
        const Mb = Date.now();
        (null === bb.metres || (0, eb.c)(wb, bb.metres, bb.metresShownAt)) && (bb.metres = Math.round(wb), bb.metresShownAt = Mb, bb.distance.textContent = (0, Hb.x)(pb.g.get().getCurrentLanguageCode(), this.distanceKey, {
          distance: String(bb.metres)
        }))
      }
      mount(bb) {
        const wb = {
            root: bb,
            distance: bb.querySelector(`.${this.classes.distance}`),
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
          Mb = bb.querySelector(`.${this.classes.labels}`),
          eb = new ResizeObserver((() => {
            wb.halfSize = {
              width: Math.max(bb.offsetWidth, Mb.offsetWidth) / 2,
              height: bb.offsetHeight / 2
            }, wb.labelsBelow = Mb.offsetTop + Mb.offsetHeight - bb.offsetHeight, this.place(wb)
          }));
        return eb.observe(bb, {
          box: "border-box"
        }), eb.observe(Mb, {
          box: "border-box"
        }), wb.stopObserving = () => {
          eb.disconnect()
        }, wb
      }
    }
  },
  40848: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => Tp
    });
    const eb = "ore sell",
      Hb = "lumber ",
      pb = "farm ",
      Vb = ["market", "demolition", "mining", "woodcutting", "farming"],
      gb = "tutorial ";
    var lb = Mb(64),
      Lb = Mb(29),
      Ib = Mb(39819),
      Ob = Mb(39943),
      Ub = Mb(3538),
      tb = Mb(3531),
      Cb = Mb(40837);
    const Eb = "greenvilleBackpackView";
    class Fb {
      constructor(bb) {
        this.iI = bb, this.view = null, this.arrivalToken = 0, this.showToken = 0
      }
      getView() {
        return this.view
      }
      EO(bb) {
        if ("hide" === bb[0]) this.view = null;
        else if ("show" === bb[0]) {
          const wb = bb[3];
          this.view = {
            qO: bb[1],
            shardsPerItem: bb[2],
            total: wb.reduce(((bb, wb) => {
              let [, Mb] = wb;
              return bb + Mb
            }), 0),
            contents: wb,
            arrival: null,
            showToken: ++this.showToken
          }
        } else {
          if (null === this.view) return void console.warn(`[greenville] backpack ${bb[0]} with no backpack shown`);
          {
            var wb, Mb;
            const eb = bb[1],
              Hb = this.view.contents.find((bb => {
                let [wb] = bb;
                return wb === eb
              })),
              pb = this.view.contents.filter((bb => {
                let [wb] = bb;
                return wb !== eb
              })),
              Vb = null !== (wb = null === Hb || void 0 === Hb ? void 0 : Hb[1]) && void 0 !== wb ? wb : 0,
              gb = null !== (Mb = null === Hb || void 0 === Hb ? void 0 : Hb[2]) && void 0 !== Mb ? Mb : 0;
            "shard" === bb[0] ? this.view = {
              ...this.view,
              contents: [...pb, [eb, Vb, gb + 1]]
            } : this.view = {
              ...this.view,
              total: this.view.total + 1,
              contents: [...pb, [eb, Vb + 1, 0]],
              arrival: {
                item: eb,
                token: ++this.arrivalToken,
                fromShards: gb > 0
              }
            }
          }
        }
        this.iI(this.view)
      }
    }
    var Bb = Mb(1159),
      sb = Mb.n(Bb),
      mb = Mb(26),
      hb = Mb(37898),
      zb = Mb(2130),
      Xb = Mb(1611),
      xb = Mb(2194),
      jb = Mb(1259);
    const Kb = "data:image/png;base64,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";
    var rb = Mb(1364);
    const Rb = (0, lb.forwardRef)((function(bb, wb) {
      let {
        contents: Mb,
        qO: eb,
        full: Hb,
        children: pb
      } = bb;
      const Vb = [...Mb].sort(((bb, wb) => {
        let [Mb] = bb, [eb] = wb;
        return Mb.localeCompare(eb)
      }));
      let gb = 0;
      return (0, rb.jsxs)("div", {
        ref: wb,
        className: "GreenvilleBackpackBag",
        children: [pb, (0, rb.jsx)("img", {
          className: sb()("GreenvilleBackpackArt", {
            Full: Hb
          }),
          src: Kb,
          alt: "",
          draggable: !1
        }), (0, rb.jsx)("div", {
          className: "GreenvilleBackpackWindow",
          children: Vb.map((bb => {
            let [wb, Mb] = bb;
            const Hb = Math.min(1 - gb, Mb / eb),
              pb = (0, rb.jsx)(cb, {
                item: wb,
                below: gb,
                share: Hb
              }, wb);
            return gb += Hb, pb
          }))
        })]
      })
    }));

    function Db() {
      const bb = new Image;
      bb.src = Kb, bb.decode().catch((bb => {
        console.error("[greenville] backpack art failed to load", bb)
      }))
    }
    const cb = (0, lb.memo)((function(bb) {
        let {
          item: wb,
          below: Mb,
          share: eb
        } = bb;
        return (0, rb.jsx)("div", {
          className: "GreenvilleBackpackOre",
          style: {
            bottom: `calc(var(--rise) * ${Mb})`,
            height: `calc(var(--rise) * ${eb} + var(--slant))`
          },
          children: Array.from({
            length: 18
          }, ((bb, Mb) => (0, rb.jsx)("div", {
            className: "GreenvilleBackpackOreTile",
            children: (0, rb.jsx)(zb.c, {
              itemName: wb,
              amount: 0
            })
          }, Mb)))
        })
      })),
      Yb = [{
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
      Zb = [{
        transform: "scale(1.3)"
      }, {
        transform: "scale(1)"
      }];
    let fb = 1;

    function Ab(bb) {
      let {
        controller: wb
      } = bb;
      (0, Xb.h)(Eb, null), (0, lb.useEffect)(Db, []);
      const Mb = wb.getView();
      return null === Mb ? null : (0, rb.jsx)(hb.d, {
        placement: "bottomLeft",
        children: (0, rb.jsx)(Wb, {
          view: Mb
        })
      })
    }

    function Wb(bb) {
      let {
        view: wb
      } = bb;
      const {
        t: Mb
      } = (0, jb.C)(), {
        isTouchScreen: eb
      } = (0, mb.o)(["isTouchScreen"]), [Hb, pb] = (0, lb.useState)([]), Vb = (0, lb.useRef)(null), gb = (0, lb.useRef)(null), Lb = (0, lb.useRef)([]), Ib = (0, lb.useRef)({
        arrival: wb.arrival,
        showToken: wb.showToken
      }), {
        arrival: Ob,
        showToken: Ub
      } = wb;
      (0, lb.useLayoutEffect)((() => {
        var bb;
        if (Ub !== Ib.current.showToken) pb([]);
        else if (null !== Ob && Ob.token !== (null === (bb = Ib.current.arrival) || void 0 === bb ? void 0 : bb.token) && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          const bb = {
            id: fb++,
            item: Ob.item,
            fromShards: Ob.fromShards,
            driftEm: 1.4 * (Math.random() - .5),
            spinDeg: 70 * (Math.random() - .5)
          };
          pb((wb => wb.length < 6 ? [...wb, bb] : wb))
        }
        Ib.current = {
          arrival: Ob,
          showToken: Ub
        }
      }), [Ob, Ub]), (0, lb.useEffect)((() => () => {
        for (const bb of Lb.current) bb.cancel()
      }), []);
      const tb = (0, lb.useCallback)((() => {
          for (const bb of Lb.current) bb.cancel();
          Lb.current = [Vb.current.animate(Yb, {
            duration: 300,
            easing: "ease-out"
          }), gb.current.animate(Zb, {
            duration: 220,
            easing: "ease-out"
          })]
        }), []),
        Cb = (0, lb.useCallback)((bb => {
          pb((wb => wb.filter((wb => wb.id !== bb)))), tb()
        }), [tb]),
        Eb = wb.total - Hb.length,
        Fb = Eb >= wb.qO,
        Bb = wb.contents.map((bb => {
          let [Mb, eb, pb] = bb;
          const Vb = Hb.filter((bb => bb.item === Mb)),
            gb = Vb.some((bb => bb.fromShards));
          return [Mb, eb - Vb.length, gb ? wb.shardsPerItem : pb]
        })),
        hb = Bb.filter((bb => {
          let [, wb, Mb] = bb;
          return wb > 0 || Mb > 0
        })).reverse().slice(0, 4),
        Xb = (0, xb.n)("SpecialAction2");
      return (0, rb.jsxs)("div", {
        className: "GreenvilleBackpack",
        children: [(0, rb.jsxs)("div", {
          className: "GreenvilleBackpackCount SmallTextBold",
          children: [(0, rb.jsx)("span", {
            ref: gb,
            className: sb()("GreenvilleBackpackTotal", {
              Full: Fb
            }),
            children: Eb
          }), (0, rb.jsxs)("span", {
            className: "GreenvilleBackpackCapacity",
            children: ["/ ", wb.qO]
          })]
        }), (0, rb.jsxs)("div", {
          className: "GreenvilleBackpackRow",
          children: [(0, rb.jsx)(Rb, {
            ref: Vb,
            contents: Bb,
            qO: wb.qO,
            full: Fb,
            children: Hb.map((bb => (0, rb.jsx)(Sb, {
              drop: bb,
              onLanded: Cb
            }, bb.id)))
          }), (0, rb.jsxs)("div", {
            className: "GreenvilleBackpackInfo",
            children: [hb.length > 0 && (0, rb.jsx)("div", {
              className: "GreenvilleBackpackTallies",
              children: hb.map((bb => {
                let [Mb, eb, Hb] = bb;
                return (0, rb.jsxs)("div", {
                  className: "GreenvilleBackpackTally",
                  children: [(0, rb.jsx)("div", {
                    className: "GreenvilleBackpackTallyIcon",
                    children: (0, rb.jsx)(zb.c, {
                      itemName: Mb,
                      amount: 0
                    })
                  }), eb > 0 && (0, rb.jsxs)("span", {
                    className: "SmallTextBold",
                    children: ["\xd7", eb]
                  }), Hb > 0 && (0, rb.jsx)(Jb, {
                    shards: Hb,
                    shardsPerItem: wb.shardsPerItem
                  })]
                }, Mb)
              }))
            }), Fb && (0, rb.jsxs)("div", {
              className: "GreenvilleBackpackFullLine",
              role: "status",
              children: [(0, rb.jsx)("span", {
                className: "GreenvilleBackpackFullTitle SmallTextBold",
                children: Mb("greenvilleGame:backpackFull")
              }), eb && (0, rb.jsx)("span", {
                className: "SmallTextLight",
                children: Mb("greenvilleGame:backpackReturnTouch")
              }), !eb && null !== Xb && (0, rb.jsx)("span", {
                className: "SmallTextLight",
                children: Mb("greenvilleGame:backpackReturnDesktop", {
                  key: (0, xb.m)(Xb)
                })
              })]
            })]
          })]
        })]
      })
    }

    function Jb(bb) {
      let {
        shards: wb,
        shardsPerItem: Mb
      } = bb;
      return (0, rb.jsx)("div", {
        className: "GreenvilleBackpackShards",
        children: Array.from({
          length: Mb
        }, ((bb, Mb) => (0, rb.jsx)("span", {
          className: sb()("GreenvilleBackpackShard", {
            Filled: Mb < wb
          })
        }, Mb)))
      })
    }

    function Sb(bb) {
      let {
        drop: wb,
        onLanded: Mb
      } = bb;
      const eb = (0, lb.useRef)(null);
      return (0, lb.useLayoutEffect)((() => {
        const {
          driftEm: bb,
          spinDeg: Hb
        } = wb, pb = eb.current.animate([{
          transform: `translate(${bb}em, -3.2em) rotate(${Hb}deg) scale(1.2)`,
          opacity: 0
        }, {
          transform: `translate(${.7*bb}em, -2.4em) rotate(${.7*Hb}deg) scale(1.1)`,
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
        return pb.onfinish = () => {
          Mb(wb.id)
        }, () => {
          pb.onfinish = null, pb.cancel()
        }
      }), [wb, Mb]), (0, rb.jsx)("div", {
        ref: eb,
        className: "GreenvilleBackpackFalling",
        children: (0, rb.jsx)(zb.c, {
          itemName: wb.item,
          amount: 0
        })
      })
    }
    var Nb = Mb(81),
      vb = Mb(35351),
      Qb = Mb(3503),
      Gb = Mb(3778),
      qb = Mb(35342);
    const ab = "gold",
      ib = "Gold Coin";

    function ub() {
      var bb, wb;
      return null !== (bb = null === (wb = (0, Qb.k)("currencyAmounts")) || void 0 === wb ? void 0 : wb[ab].amount) && void 0 !== bb ? bb : 0
    }
    const db = [{
        transform: "scale(1.18)"
      }, {
        transform: "scale(1)"
      }],
      Pb = [{
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
    let nb = 1;

    function yb(bb) {
      var wb;
      let {
        sounds: Mb
      } = bb;
      const eb = null === (wb = (0, Qb.k)("currencyAmounts")) || void 0 === wb ? void 0 : wb[ab];
      return !eb || eb.hidden ? null : (0, rb.jsx)(ob, {
        gold: eb.amount,
        sounds: Mb
      })
    }

    function ob(bb) {
      let {
        gold: wb,
        sounds: Mb
      } = bb;
      const eb = (0, Gb.b)(),
        [Hb, pb] = (0, lb.useState)([]),
        Vb = (0, lb.useRef)(null),
        gb = (0, lb.useRef)(null),
        Lb = (0, lb.useRef)(null),
        Ib = (0, lb.useRef)(null),
        Ob = (0, lb.useRef)(wb);
      (0, lb.useLayoutEffect)((() => {
        const bb = wb - Ob.current;
        if (Ob.current = wb, !(bb <= 0) && (Mb.onGain(), !eb && !window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
          const wb = function(bb) {
            const wb = Math.max(1, Math.min(8, Math.floor(bb))),
              Mb = Math.floor(bb / wb),
              eb = [];
            for (let Hb = 0; Hb < wb; Hb++) {
              const pb = -Math.PI / 2 + (1 === wb ? 0 : 2.4 * (Hb / (wb - 1) - .5)) + .3 * (Math.random() - .5),
                Vb = 40 + 35 * Math.random();
              eb.push({
                id: nb++,
                burst: {
                  x: Math.cos(pb) * Vb,
                  y: Math.sin(pb) * Vb
                },
                gold: Hb === wb - 1 ? bb - Mb * (wb - 1) : Mb,
                delayMs: 45 * Hb,
                step: Hb,
                steps: wb
              })
            }
            return eb
          }(bb);
          pb((bb => [...bb, ...wb.slice(0, Math.max(0, 24 - bb.length))]))
        }
      }), [wb]), (0, lb.useEffect)((() => () => {
        var bb;
        null === (bb = Lb.current) || void 0 === bb || bb.cancel()
      }), []), (0, lb.useLayoutEffect)((() => () => {
        qb.b.setInFlight(ab, 0)
      }), []);
      const Ub = (0, lb.useCallback)(((bb, wb) => {
          Ib.current = wb, Mb.onCoinLanded(bb.step, bb.steps), pb((wb => wb.filter((wb => {
            let {
              id: Mb
            } = wb;
            return Mb !== bb.id
          }))))
        }), [Mb]),
        tb = Hb.length,
        Cb = (0, lb.useRef)(tb);
      (0, lb.useEffect)((() => {
        var bb, wb;
        tb < Cb.current && (null === (bb = Lb.current) || void 0 === bb || bb.cancel(), Lb.current = (null !== (wb = Ib.current) && void 0 !== wb ? wb : Vb.current).animate(0 === tb ? Pb : db, {
          duration: 0 === tb ? 380 : 160,
          easing: "ease-out"
        }));
        Cb.current = tb
      }), [tb]);
      const Eb = Hb.reduce(((bb, wb) => bb + wb.gold), 0);
      return (0, lb.useLayoutEffect)((() => {
        qb.b.setInFlight(ab, Eb)
      }), [Eb]), (0, rb.jsxs)(rb.Fragment, {
        children: [(0, rb.jsx)("div", {
          className: "GreenvilleGoldPurse",
          children: (0, rb.jsxs)("div", {
            ref: Vb,
            className: "GreenvilleGoldPurseBody",
            children: [(0, rb.jsx)("span", {
              ref: gb,
              className: "GreenvilleGoldPurseIcon",
              children: (0, rb.jsx)(zb.c, {
                itemName: ib,
                amount: 0
              })
            }), (0, rb.jsx)("span", {
              className: "GreenvilleGoldPurseAmount SmallTextBold",
              children: (0, vb.d)(Math.max(0, wb - Eb))
            })]
          })
        }), (0, Nb.createPortal)(Hb.map((bb => (0, rb.jsx)(Tb, {
          coin: bb,
          target: gb,
          onLanded: Ub
        }, bb.id))), document.body)]
      })
    }

    function Tb(bb) {
      let {
        coin: wb,
        target: Mb,
        onLanded: eb
      } = bb;
      const Hb = (0, lb.useRef)(null),
        [pb] = (0, lb.useState)((() => qb.b.getLanding(ab))),
        [Vb, gb] = (0, lb.useState)(null !== pb);
      return (0, lb.useEffect)((() => {
        const bb = (null !== pb && void 0 !== pb ? pb : Mb.current).getBoundingClientRect(),
          {
            burst: Vb
          } = wb,
          lb = window.innerWidth / 2,
          Lb = window.innerHeight / 2,
          Ib = bb.left + bb.width / 2,
          Ob = bb.top + bb.height / 2,
          Ub = Hb.current.animate([{
            transform: `translate(${lb}px, ${Lb}px) scale(0.3)`,
            opacity: 0,
            easing: "ease-out"
          }, {
            transform: `translate(${lb+.7*Vb.x}px, ${Lb+.7*Vb.y}px) scale(1.25)`,
            opacity: 1,
            offset: .15,
            easing: "ease-out"
          }, {
            transform: `translate(${lb+Vb.x}px, ${Lb+Vb.y}px) scale(1)`,
            offset: .35,
            easing: "ease-in-out"
          }, {
            transform: `translate(${lb+Vb.x}px, ${Lb+Vb.y+6}px) scale(1)`,
            offset: .45,
            easing: "cubic-bezier(0.55, 0, 1, 0.45)"
          }, {
            transform: `translate(${Ib}px, ${Ob}px) scale(0.6)`,
            opacity: 1
          }], {
            duration: 950,
            delay: wb.delayMs,
            fill: "both"
          });
        let tb = Ub;
        tb.onfinish = () => {
          eb(wb, pb)
        };
        const Cb = qb.b.subscribe((() => {
          var bb;
          if (null === pb || tb !== Ub || qb.b.hasLanding(ab, pb)) return;
          const Vb = Mb.current.getBoundingClientRect();
          Ub.commitStyles(), tb = Hb.current.animate([{
            transform: `translate(${Vb.left+Vb.width/2}px, ${Vb.top+Vb.height/2}px) scale(0.6)`,
            opacity: 1
          }], {
            duration: Math.max(150, 950 + wb.delayMs - Number(null !== (bb = Ub.currentTime) && void 0 !== bb ? bb : 0)),
            easing: "ease-in",
            fill: "both"
          }), tb.onfinish = () => {
            eb(wb, null)
          }, Ub.onfinish = null, Ub.cancel(), gb(!1)
        }));
        return () => {
          Cb(), tb.onfinish = null, tb.cancel()
        }
      }), [wb, Mb, pb, eb]), (0, rb.jsx)("div", {
        ref: Hb,
        className: sb()("GreenvilleGoldCoin", {
          IntoMenu: Vb
        }),
        children: (0, rb.jsx)(zb.c, {
          itemName: ib,
          amount: 0
        })
      })
    }
    class kb {
      constructor(bb, wb, Mb) {
        this.pacer = bb, this.send = wb, this.onAnswersTimedOut = Mb, this.queued = [], this.unanswered = [], this.answerTimer = null, this.flushing = !1, this.flush = () => {
          if (!this.flushing) {
            this.flushing = !0;
            try {
              for (; this.queued.length > 0 && this.pacer.tryStart();) {
                const bb = this.queued.shift();
                this.unanswered.push(bb), this.answerTimer ??= setTimeout(this.onAnswerTimeout, 15e3), this.send(bb)
              }
            } finally {
              this.flushing = !1
            }
          }
        }, this.onAnswerTimeout = () => {
          this.answerTimer = null, this.unanswered = [], this.onAnswersTimedOut()
        }, bb.subscribe(this.flush)
      }
      getPending() {
        return [...this.unanswered, ...this.queued]
      }
      IO() {
        return 0 === this.unanswered.length && 0 === this.queued.length
      }
      getLastSent() {
        return this.unanswered.at(-1)
      }
      getLastPending() {
        var bb;
        return null !== (bb = this.queued.at(-1)) && void 0 !== bb ? bb : this.unanswered.at(-1)
      }
      push(bb) {
        this.queued.push(bb), this.flush()
      }
      dropWaiting() {
        const bb = this.queued.length > 0;
        return this.queued = [], bb
      }
      takeAnswer() {
        var bb;
        const wb = null !== (bb = this.unanswered.shift()) && void 0 !== bb ? bb : null;
        return this.stopAnswerTimer(), this.unanswered.length > 0 && (this.answerTimer = setTimeout(this.onAnswerTimeout, 15e3)), wb
      }
      clear() {
        this.queued = [], this.unanswered = [], this.stopAnswerTimer()
      }
      stopAnswerTimer() {
        null !== this.answerTimer && (clearTimeout(this.answerTimer), this.answerTimer = null)
      }
    }
    class bw {
      constructor(bb, wb, Mb, eb) {
        this.confirmed = bb, this.picks = void 0, this.picks = new kb(wb, Mb, eb)
      }
      confirm(bb) {
        this.confirmed = bb
      }
      getLastPending() {
        return this.picks.getLastPending()
      }
      getLatest() {
        var bb;
        return null !== (bb = this.getLastPending()) && void 0 !== bb ? bb : this.confirmed
      }
      IO() {
        return this.picks.IO()
      }
      pushLatest(bb) {
        var wb;
        const Mb = null !== (wb = this.picks.getLastSent()) && void 0 !== wb ? wb : this.confirmed;
        this.picks.dropWaiting() && bb === Mb || this.picks.push(bb)
      }
      takeAnswer() {
        this.picks.takeAnswer()
      }
      clear() {
        this.picks.clear()
      }
    }
    class ww {
      constructor(bb, wb, Mb) {
        this.closed = bb, this.iI = wb, this.menu = Mb, this.view = void 0, this.dismiss = () => {
          this.closePanel() && this.menu.dismiss()
        }, this.onMenuClosed = () => {
          this.closePanel()
        }, this.view = bb
      }
      getView() {
        return this.view
      }
      show(bb) {
        this.set(bb), this.menu.open(this)
      }
      close() {
        this.closePanel() && this.menu.close()
      }
      set(bb) {
        this.view = bb, this.iI(bb)
      }
      closePanel() {
        return !!this.view.open && (this.dropPresses(), this.set(this.closed), !0)
      }
    }
    const Mw = "greenvilleDepotView",
      ew = {
        open: !1,
        explosives: [],
        picked: 0,
        selected: 0,
        level: 1,
        line: "demolitionDepotIntro"
      };
    class Hw extends ww {
      constructor(bb, wb, Mb, eb) {
        super(ew, bb, wb), this.picks = void 0, this.select = bb => {
          this.set({
            ...this.getView(),
            selected: bb
          })
        }, this.Vt = bb => {
          const wb = this.getView();
          bb !== wb.picked && (this.picks.pushLatest(bb), this.set({
            ...wb,
            picked: bb,
            line: "demolitionGrubnikPicked"
          }))
        }, this.onAnswersTimedOut = () => {
          const bb = this.getView();
          bb.open && this.set({
            ...bb,
            picked: this.picks.getLatest()
          })
        }, this.picks = new bw(0, eb, Mb, this.onAnswersTimedOut)
      }
      EO(bb) {
        if ("openDepot" === bb[0]) {
          const wb = bb[4];
          wb && this.picks.takeAnswer();
          const Mb = this.getView();
          if (wb && !Mb.open) return;
          this.picks.confirm(bb[2]);
          const eb = this.picks.getLatest(),
            Hb = !Mb.open;
          this.show({
            open: !0,
            explosives: bb[1],
            picked: eb,
            selected: Hb ? eb : Mb.selected,
            level: bb[3],
            line: Hb ? "demolitionDepotIntro" : Mb.line
          })
        } else "closeDepot" !== bb[0] && "hide" !== bb[0] || this.close()
      }
      dropPresses() {
        this.picks.clear()
      }
    }
    var pw = Mb(1475),
      Vw = Mb(1616),
      gw = Mb(35334),
      lw = Mb(4659),
      Lw = Mb(2116),
      Iw = Mb(5384);

    function Ow(bb) {
      var wb;
      let {
        item: Mb,
        className: eb
      } = bb;
      return (0, rb.jsx)(Lw.d, {
        className: eb,
        text: null !== (wb = (0, gw.displayNameOf)((0, lw.c)(Mb))) && void 0 !== wb ? wb : Mb
      })
    }

    function Uw(bb) {
      let {
        item: wb
      } = bb;
      return (0, rb.jsx)(zb.c, {
        itemName: wb,
        amount: 0
      })
    }

    function tw(bb) {
      let {
        open: wb,
        onDismiss: Mb,
        title: eb,
        className: Hb,
        headerExtra: pb,
        tabs: Vb,
        status: gb,
        children: lb
      } = bb;
      const Lb = `${Hb}Title`;
      return (0, rb.jsx)(Iw.e, {
        show: wb,
        close: Mb,
        togglePointerLock: !1,
        ignorePressesAsShown: !0,
        className: "GreenvilleBoardOverlay",
        children: (0, rb.jsxs)("section", {
          className: sb()("GreenvilleBoard", Hb),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": Lb,
          children: [(0, rb.jsxs)("header", {
            className: "GreenvilleBoardHeader",
            children: [(0, rb.jsx)("h2", {
              id: Lb,
              className: "VisuallyHidden",
              children: eb
            }), pb, (0, rb.jsx)(Vw.l, {
              onClick: Mb
            })]
          }), Vb, (0, rb.jsx)("div", {
            className: "GreenvilleBoardBody",
            children: lb
          }), gb && (0, rb.jsxs)("footer", {
            className: "GreenvilleBoardStatus",
            children: [(0, rb.jsx)("span", {
              className: "GreenvilleBoardSpeaker",
              children: gb.speaker
            }), gb.line]
          })]
        })
      })
    }

    function Cw(bb) {
      let {
        tabs: wb,
        selected: Mb,
        onSelect: eb
      } = bb;
      return (0, rb.jsx)("nav", {
        className: "GreenvilleBoardTabs",
        "data-pad-tabs": "1",
        children: wb.map((bb => {
          const wb = bb.id === Mb;
          return (0, rb.jsxs)("button", {
            type: "button",
            className: sb()("GreenvilleBoardTab", {
              Selected: wb
            }),
            "aria-pressed": wb,
            "data-pad-tab": !0,
            "data-pad-selected": wb ? "true" : void 0,
            onClick: () => {
              eb(bb.id)
            },
            children: [bb.label, bb.badge]
          }, bb.id)
        }))
      })
    }

    function Ew(bb) {
      let {
        className: wb,
        roomy: Mb = !1,
        children: eb
      } = bb;
      return (0, rb.jsx)("div", {
        className: sb()("GreenvilleBoardTiles", wb, {
          Roomy: Mb
        }),
        style: Mb ? {
          "--tile-columns": (Hb = lb.Children.count(eb), Hb <= 3 ? Hb : Math.min(4, Math.ceil(Hb / 2)))
        } : void 0,
        "data-pad-select-on-focus": !0,
        children: eb
      });
      var Hb
    }

    function Fw(bb) {
      let {
        icon: wb,
        name: Mb,
        selected: eb,
        locked: Hb = !1,
        className: pb,
        onSelect: Vb,
        children: gb
      } = bb;
      return (0, rb.jsxs)("button", {
        type: "button",
        className: sb()("GreenvilleBoardTile", pb, {
          Selected: eb,
          Locked: Hb
        }),
        "aria-pressed": eb,
        "data-pad-default-focus": eb || void 0,
        onClick: Vb,
        children: [(0, rb.jsx)("span", {
          className: "GreenvilleBoardTileIcon",
          children: wb
        }), (0, rb.jsx)("span", {
          className: "GreenvilleBoardTileName",
          children: Mb
        }), gb]
      })
    }

    function Bw(bb) {
      let {
        icon: wb,
        name: Mb,
        badges: eb,
        children: Hb
      } = bb;
      return (0, rb.jsxs)("section", {
        className: "GreenvilleBoardDetail",
        children: [(0, rb.jsxs)("header", {
          className: "GreenvilleBoardDetailHeader",
          children: [(0, rb.jsx)("span", {
            className: "GreenvilleBoardDetailHero",
            children: (0, rb.jsx)("span", {
              className: "GreenvilleBoardDetailIcon",
              children: wb
            })
          }), (0, rb.jsxs)("div", {
            className: "GreenvilleBoardDetailHeading",
            children: [(0, rb.jsx)("h3", {
              children: Mb
            }), eb && (0, rb.jsx)("span", {
              className: "GreenvilleBoardDetailBadges",
              children: eb
            })]
          })]
        }), Hb]
      })
    }

    function sw(bb) {
      let {
        level: wb
      } = bb;
      const {
        t: Mb
      } = (0, jb.C)();
      return (0, rb.jsxs)("span", {
        className: "GreenvilleBoardBadge Muted",
        children: [(0, rb.jsx)(pw.b, {
          name: "lock"
        }), Mb("greenvilleGame:boardLevelBadge", {
          level: wb
        })]
      })
    }

    function mw() {
      const {
        t: bb
      } = (0, jb.C)();
      return (0, rb.jsx)("span", {
        className: "GreenvilleBoardBadge",
        children: bb("greenvilleGame:demolitionDepotPicked")
      })
    }

    function hw(bb) {
      let {
        line: wb,
        picked: Mb,
        level: eb
      } = bb;
      const Hb = wb[3];
      return (0, rb.jsxs)(rb.Fragment, {
        children: [Mb && (0, rb.jsx)(mw, {}), Hb > eb && (0, rb.jsx)(sw, {
          level: Hb
        })]
      })
    }

    function zw(bb) {
      let {
        view: wb,
        controller: Mb
      } = bb;
      const {
        t: eb
      } = (0, jb.C)(), Hb = wb.selected, pb = wb.explosives[Hb], [Vb, gb, lb, Lb, Ib] = pb, Ob = Hb === wb.picked, Ub = Lb > wb.level;
      return (0, rb.jsxs)(Bw, {
        icon: (0, rb.jsx)(Uw, {
          item: Vb
        }),
        name: eb(`greenvilleGame:${gb}`),
        badges: Ub && (0, rb.jsx)(sw, {
          level: Lb
        }),
        children: [(0, rb.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: eb(`greenvilleGame:${lb}`)
        }), (0, rb.jsx)("p", {
          className: "GreenvilleDepotStencil",
          children: eb("greenvilleGame:demolitionDepotMaxLive", {
            count: Ib
          })
        }), (0, rb.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [Ob && (0, rb.jsx)("span", {
            className: "GreenvilleDepotLoaded",
            children: eb("greenvilleGame:demolitionDepotPicked")
          }), !Ob && (0, rb.jsx)(Vw.f, {
            disabled: Ub,
            onClick: () => {
              Mb.Vt(Hb)
            },
            children: eb("greenvilleGame:demolitionDepotLoad")
          }), Ub && (0, rb.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: eb("greenvilleGame:demolitionDepotLocked", {
              level: Lb
            })
          })]
        })]
      })
    }

    function Xw(bb) {
      let {
        controller: wb
      } = bb;
      const Mb = (0, Xb.h)(Mw, wb.getView()),
        {
          t: eb
        } = (0, jb.C)();
      return 0 === Mb.explosives.length ? null : (0, rb.jsxs)(tw, {
        open: Mb.open,
        onDismiss: wb.dismiss,
        title: eb("greenvilleGame:demolitionDepotTitle"),
        className: "GreenvilleDepotBoard",
        headerExtra: (0, rb.jsx)("span", {
          className: "GreenvilleBoardLevel",
          children: eb("greenvilleGame:demolitionDepotLevel", {
            level: Mb.level
          })
        }),
        status: {
          speaker: eb("greenvilleGame:demolitionGrubnikName"),
          line: eb(`greenvilleGame:${Mb.line}`)
        },
        children: [(0, rb.jsx)(Ew, {
          roomy: !0,
          children: Mb.explosives.map(((bb, Hb) => {
            const [pb, Vb, gb, lb, Lb] = bb;
            return (0, rb.jsxs)(Fw, {
              icon: (0, rb.jsx)(Uw, {
                item: pb
              }),
              name: eb(`greenvilleGame:${Vb}`),
              selected: Hb === Mb.selected,
              locked: lb > Mb.level,
              className: sb()("GreenvilleDepotCrate", {
                Picked: Hb === Mb.picked
              }),
              onSelect: () => {
                wb.select(Hb)
              },
              children: [(0, rb.jsx)(hw, {
                line: bb,
                picked: Hb === Mb.picked,
                level: Mb.level
              }), (0, rb.jsx)("span", {
                className: "GreenvilleDepotStencil",
                children: eb("greenvilleGame:demolitionDepotMaxLive", {
                  count: Lb
                })
              }), (0, rb.jsx)("span", {
                className: "GreenvilleDepotBlurb",
                children: eb(`greenvilleGame:${gb}`)
              })]
            }, pb)
          }))
        }), (0, rb.jsx)(zw, {
          view: Mb,
          controller: wb
        })]
      })
    }
    const xw = "greenvilleGarageView",
      jw = {
        open: !1,
        cars: [],
        out: null,
        awaiting: !1,
        selected: null,
        line: "dealershipGarageIntro"
      };
    class Kw extends ww {
      constructor(bb, wb, Mb, eb) {
        super(jw, bb, wb), this.picks = void 0, this.select = bb => {
          this.set({
            ...this.getView(),
            selected: bb
          })
        }, this.Vt = bb => {
          bb !== this.picks.getLastPending() && (this.picks.pushLatest(bb), this.set({
            ...this.getView(),
            out: bb,
            awaiting: !this.picks.IO(),
            line: "dealershipGarageTip"
          }))
        }, this.onAnswersTimedOut = () => {
          const bb = this.getView();
          bb.open && this.set({
            ...bb,
            out: this.picks.getLatest(),
            awaiting: !this.picks.IO()
          })
        }, this.picks = new bw(null, eb, Mb, this.onAnswersTimedOut)
      }
      EO(bb) {
        if ("open" === bb[0]) {
          var wb;
          const Mb = bb[3];
          Mb && this.picks.takeAnswer();
          const eb = this.getView();
          if (Mb && !eb.open) return;
          this.picks.confirm(bb[2]);
          const Hb = bb[1],
            pb = this.picks.getLatest(),
            Vb = !eb.open;
          this.show({
            open: !0,
            cars: Hb,
            out: pb,
            awaiting: !this.picks.IO(),
            selected: Vb ? null !== (wb = null !== pb && void 0 !== pb ? pb : Hb[0]) && void 0 !== wb ? wb : null : eb.selected,
            line: Vb ? "dealershipGarageIntro" : eb.line
          })
        } else this.close()
      }
      dropPresses() {
        this.picks.clear()
      }
    }

    function rw() {
      const {
        t: bb
      } = (0, jb.C)();
      return (0, rb.jsx)("span", {
        className: "GreenvilleBoardBadge",
        children: bb("greenvilleGame:dealershipGarageOut")
      })
    }

    function Rw(bb) {
      let {
        car: wb,
        out: Mb,
        awaiting: eb,
        controller: Hb
      } = bb;
      const {
        t: pb
      } = (0, jb.C)();
      return (0, rb.jsx)(Bw, {
        icon: (0, rb.jsx)(Uw, {
          item: wb
        }),
        name: (0, rb.jsx)(Ow, {
          item: wb
        }),
        children: (0, rb.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [Mb && (0, rb.jsx)("span", {
            className: "GreenvilleGarageOutStamp",
            children: pb("greenvilleGame:dealershipGarageOut")
          }), (0, rb.jsx)(Vw.f, {
            disabled: Mb && eb,
            onClick: () => {
              Hb.Vt(wb)
            },
            children: pb(Mb ? "greenvilleGame:dealershipGarageBringBack" : "greenvilleGame:dealershipGarageTakeOut")
          })]
        })
      })
    }

    function Dw(bb) {
      let {
        controller: wb
      } = bb;
      const Mb = (0, Xb.h)(xw, wb.getView()),
        {
          t: eb
        } = (0, jb.C)(),
        Hb = 0 === Mb.cars.length;
      return (0, rb.jsxs)(tw, {
        open: Mb.open,
        onDismiss: wb.dismiss,
        title: eb("greenvilleGame:dealershipGarageTitle"),
        className: "GreenvilleGarageBoard",
        status: {
          speaker: eb("greenvilleGame:dealershipDelName"),
          line: eb(Hb ? "greenvilleGame:dealershipGarageEmpty" : `greenvilleGame:${Mb.line}`)
        },
        children: [!Hb && (0, rb.jsx)(Ew, {
          roomy: !0,
          children: Mb.cars.map((bb => {
            const eb = bb === Mb.out;
            return (0, rb.jsx)(Fw, {
              icon: (0, rb.jsx)(Uw, {
                item: bb
              }),
              name: (0, rb.jsx)(Ow, {
                item: bb
              }),
              selected: bb === Mb.selected,
              className: sb()("GreenvilleGarageBay", {
                Out: eb
              }),
              onSelect: () => {
                wb.select(bb)
              },
              children: eb && (0, rb.jsx)(rw, {})
            }, bb)
          }))
        }), null !== Mb.selected && (0, rb.jsx)(Rw, {
          car: Mb.selected,
          out: Mb.selected === Mb.out,
          awaiting: Mb.awaiting,
          controller: wb
        })]
      })
    }
    const Yw = {
        kind: "intro"
      },
      Zw = {
        open: !1,
        orders: [],
        tracked: null,
        sellLines: [],
        level: 1,
        delivering: [],
        tab: "orders",
        selectedSlot: 0,
        selectedWood: 0,
        line: Yw
      };

    function fw(bb) {
      let [wb, Mb, eb, Hb, pb, Vb] = bb;
      return {
        slot: wb,
        titleKey: Mb,
        items: eb,
        exp: Hb,
        gold: pb,
        eI: Vb,
        ready: eb.every((bb => {
          let [, wb, Mb] = bb;
          return Mb >= wb
        }))
      }
    }

    function Aw(bb, wb) {
      return "sell" === wb.action ? function(bb, wb) {
        const Mb = bb.sellLines.map((bb => {
          const [Mb, , eb] = bb;
          return null !== wb && wb !== Mb ? bb : [Mb, 0, eb]
        }));
        return {
          ...bb,
          sellLines: Mb
        }
      }(bb, wb.item) : "accept" === wb.action ? function(bb, wb) {
        var Mb;
        const eb = bb.orders[wb];
        return {
          ...bb,
          tracked: null !== (Mb = bb.tracked) && void 0 !== Mb ? Mb : wb,
          orders: bb.orders.map((bb => bb === eb ? {
            ...bb,
            eI: !0
          } : bb)),
          sellLines: bb.sellLines.map((bb => {
            const [wb, Mb, Hb] = bb, pb = eb.items.find((bb => {
              let [Mb] = bb;
              return Mb === wb
            }));
            return void 0 === pb ? bb : [wb, Math.max(0, Mb - pb[1]), Hb]
          }))
        }
      }(bb, wb.slot) : "track" === wb.action ? {
        ...bb,
        tracked: wb.slot
      } : {
        ...bb,
        delivering: [...bb.delivering, wb.slot]
      }
    }
    const Ww = "greenvilleLumberMillView",
      Jw = "greenvilleLumberTrackerView";
    class Sw extends ww {
      constructor(bb, wb, Mb, eb, pb) {
        super(Zw, bb, Mb), this.publishTracker = wb, this.board = null, this.commands = void 0, this.tracker = null, this.tab = "orders", this.selectedSlot = 0, this.selectedWood = 0, this.line = Yw, this.selectTab = bb => {
          this.tab = bb, this.set({
            ...this.getView(),
            tab: bb
          })
        }, this.selectOrder = bb => {
          this.selectedSlot = bb, this.set({
            ...this.getView(),
            selectedSlot: bb
          })
        }, this.selectWood = bb => {
          this.selectedWood = bb, this.set({
            ...this.getView(),
            selectedWood: bb
          })
        }, this.accept = bb => {
          this.findOrder(bb).eI || this.queue({
            action: "accept",
            slot: bb
          })
        }, this.track = bb => {
          this.getView().tracked !== bb && this.findOrder(bb).eI && this.queue({
            action: "track",
            slot: bb
          })
        }, this.deliver = bb => {
          const wb = this.findOrder(bb);
          wb.eI && wb.ready && !this.getView().delivering.includes(bb) && this.queue({
            action: "deliver",
            slot: bb
          })
        }, this.sell = bb => {
          this.getView().sellLines.some((wb => {
            let [Mb, eb] = wb;
            return eb > 0 && (null === bb || bb === Mb)
          })) && this.queue({
            action: "sell",
            item: bb
          })
        }, this.onAnswersTimedOut = () => {
          this.getView().open && this.set(this.getBoardView())
        }, this.commands = new kb(pb, (bb => {
          eb(function(bb) {
            return "sell" === bb.action ? null === bb.item ? `${Hb}sell` : `${Hb}sell ${bb.item}` : `${Hb}${bb.action} ${bb.slot}`
          }(bb))
        }), this.onAnswersTimedOut)
      }
      getTracker() {
        return this.tracker
      }
      EO(bb) {
        if ("open" === bb[0]) {
          const Mb = bb[5],
            eb = Mb ? this.commands.takeAnswer() : null,
            Hb = !this.getView().open;
          if (Mb && Hb) return;
          if (Hb) this.onReopened(bb);
          else if (null !== eb) {
            var wb;
            this.line = null !== (wb = function(bb, wb, Mb) {
              if ("deliver" === bb.action) {
                const [, eb] = wb[1][bb.slot];
                return Mb[1][bb.slot][5] ? null : {
                  kind: "delivered",
                  titleKey: eb
                }
              }
              if ("sell" !== bb.action) return null;
              let eb = 0;
              return wb[3].forEach(((wb, Hb) => {
                let [pb, Vb] = wb;
                null !== bb.item && bb.item !== pb || (eb += Math.max(0, Vb - Mb[3][Hb][1]))
              })), eb > 0 ? {
                kind: "bought",
                count: eb
              } : null
            }(eb, this.board, bb)) && void 0 !== wb ? wb : this.line
          }
          this.board = bb, this.show(this.getBoardView())
        } else "close" === bb[0] ? this.close() : (this.tracker = null === bb[1] ? null : fw(bb[1]), this.publishTracker(this.tracker))
      }
      dropPresses() {
        this.commands.clear(), this.board = null
      }
      findOrder(bb) {
        return this.getView().orders.find((wb => wb.slot === bb))
      }
      onReopened(bb) {
        let [, wb, , Mb] = bb;
        const eb = wb.map(fw).find((bb => bb.eI && bb.ready)),
          Hb = Mb.findIndex((bb => {
            let [, wb] = bb;
            return wb > 0
          }));
        void 0 === eb && -1 !== Hb || (this.tab = "orders"), void 0 !== eb && (this.selectedSlot = eb.slot), -1 === Hb || this.selectedWood < Mb.length && Mb[this.selectedWood][1] > 0 || (this.selectedWood = Hb), this.line = Yw
      }
      getBoardView() {
        const [, bb, wb, Mb, eb] = this.board;
        let Hb = {
          open: !0,
          orders: bb.map(fw),
          tracked: wb,
          sellLines: Mb,
          level: eb,
          delivering: [],
          tab: this.tab,
          selectedSlot: this.selectedSlot,
          selectedWood: this.selectedWood,
          line: this.line
        };
        for (const pb of this.commands.getPending()) Hb = Aw(Hb, pb);
        return Hb
      }
      queue(bb) {
        this.commands.push(bb), this.set(this.getBoardView())
      }
    }
    var Nw = Mb(1516),
      vw = Mb(2183);

    function Qw(bb) {
      let {
        amount: wb,
        item: Mb = ib,
        dg: eb,
        inTile: Hb = !1,
        iconRef: pb
      } = bb;
      return (0, rb.jsx)(Nw.d, {
        delayShow: 200,
        hoverOnly: Hb,
        placement: "top",
        tooltipClassName: "GreenvilleChipTooltipBox",
        tooltipInner: (0, rb.jsx)(Gw, {
          item: Mb,
          amount: wb,
          dg: eb
        }),
        children: (0, rb.jsxs)("span", {
          className: sb()("GreenvilleBoardChip", {
            Short: void 0 !== eb && eb < wb
          }),
          children: [(0, rb.jsx)("span", {
            ref: pb,
            className: "GreenvilleBoardChipIcon",
            children: (0, rb.jsx)(Uw, {
              item: Mb
            })
          }), wb.toLocaleString()]
        })
      })
    }

    function Gw(bb) {
      let {
        item: wb,
        amount: Mb,
        dg: eb
      } = bb;
      const {
        t: Hb
      } = (0, jb.C)(), pb = (0, vw.e)("itemInfo", (bb => bb[wb]));
      return (0, rb.jsxs)("div", {
        className: "GreenvilleChipTooltip",
        children: [(0, rb.jsxs)("div", {
          className: "GreenvilleChipTooltipHeader",
          children: [(0, rb.jsx)("span", {
            className: "GreenvilleChipTooltipIcon",
            children: (0, rb.jsx)(Uw, {
              item: wb
            })
          }), (0, rb.jsx)(Ow, {
            item: wb,
            className: "GreenvilleChipTooltipName"
          })]
        }), void 0 !== (null === pb || void 0 === pb ? void 0 : pb.description) && (0, rb.jsx)(Lw.d, {
          text: pb.description,
          className: "GreenvilleChipTooltipDescription"
        }), void 0 !== eb && (0, rb.jsxs)("div", {
          className: sb()("GreenvilleChipTooltipHeld", {
            Short: eb < Mb
          }),
          children: [(0, rb.jsx)("span", {
            className: "GreenvilleChipTooltipLabel",
            children: Hb("greenvilleGame:boardYouHave")
          }), (0, rb.jsxs)("span", {
            className: "GreenvilleChipTooltipCount",
            children: [(0, rb.jsx)("span", {
              className: "GreenvilleChipTooltipHeldAmount",
              children: eb.toLocaleString()
            }), ` / ${Mb.toLocaleString()}`]
          }), (0, rb.jsx)("span", {
            className: "GreenvilleChipTooltipMeter",
            children: (0, rb.jsx)("span", {
              style: {
                width: (Mb > 0 ? 100 * Math.min(1, eb / Mb) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function qw(bb) {
      let {
        children: wb
      } = bb;
      const Mb = (0, lb.useRef)(null);
      (0, qb.d)(ab, Mb);
      const eb = (0, qb.g)(ab, ub());
      return (0, rb.jsxs)("div", {
        className: "GreenvilleBoardWallet",
        children: [wb, (0, rb.jsx)(Qw, {
          amount: eb,
          iconRef: Mb
        })]
      })
    }

    function aw(bb, wb, Mb) {
      const eb = (0, lb.useRef)({
          slot: bb,
          eI: wb
        }),
        Hb = (0, lb.useRef)(-1 / 0);
      return (0, lb.useLayoutEffect)((() => {
        eb.current.slot === bb && eb.current.eI && !wb && (Hb.current = performance.now()), eb.current = {
          slot: bb,
          eI: wb
        }
      }), [bb, wb]), () => {
        performance.now() - Hb.current >= 500 && Mb(bb)
      }
    }
    const iw = {
      New: "lumberBoardStateNew",
      Accepted: "lumberBoardStateAccepted",
      Tracking: "lumberBoardTracking",
      Ready: "lumberBoardStateReady"
    };

    function uw(bb, wb) {
      return bb.eI ? bb.ready ? "Ready" : bb.slot === wb ? "Tracking" : "Accepted" : "New"
    }

    function dw(bb) {
      let {
        state: wb
      } = bb;
      const {
        t: Mb
      } = (0, jb.C)();
      return (0, rb.jsx)("span", {
        className: sb()("GreenvilleBoardBadge GreenvilleLumberState", wb, {
          Muted: "Accepted" === wb
        }),
        children: Mb(`greenvilleGame:${iw[wb]}`)
      })
    }

    function Pw(bb) {
      let {
        order: wb
      } = bb;
      return (0, rb.jsx)("span", {
        className: "GreenvilleLumberNeeds",
        children: wb.items.map((bb => {
          let [wb, Mb, eb] = bb;
          const Hb = eb >= Mb;
          return (0, rb.jsxs)("span", {
            className: sb()("GreenvilleLumberNeed", {
              Met: Hb
            }),
            children: [(0, rb.jsx)("span", {
              className: "GreenvilleLumberNeedIcon",
              children: (0, rb.jsx)(Uw, {
                item: wb
              })
            }), (0, rb.jsx)(Ow, {
              item: wb,
              className: "GreenvilleLumberNeedName"
            }), (0, rb.jsxs)("span", {
              className: "GreenvilleLumberNeedCount",
              children: [Math.min(eb, Mb).toLocaleString(), "/", Mb.toLocaleString()]
            }), (0, rb.jsx)("span", {
              className: "GreenvilleLumberNeedTick",
              "aria-hidden": "true",
              children: Hb && "\u2713"
            })]
          }, wb)
        }))
      })
    }

    function nw(bb) {
      let {
        order: wb,
        inTile: Mb = !1
      } = bb;
      const {
        t: eb
      } = (0, jb.C)();
      return (0, rb.jsxs)("span", {
        className: "GreenvilleLumberReward",
        children: [(0, rb.jsx)(Qw, {
          amount: wb.gold,
          inTile: Mb
        }), (0, rb.jsx)("span", {
          className: "GreenvilleLumberExp",
          children: eb("greenvilleGame:boardExpGain", {
            exp: wb.exp
          })
        })]
      })
    }

    function yw(bb) {
      let {
        view: wb,
        order: Mb,
        controller: eb
      } = bb;
      const {
        t: Hb
      } = (0, jb.C)(), {
        slot: pb,
        items: Vb,
        eI: gb,
        ready: lb
      } = Mb, Lb = aw(pb, gb, eb.accept), Ib = Vb.reduce(((bb, wb) => {
        let [, Mb, eb] = wb;
        return bb + Math.max(0, Mb - eb)
      }), 0);
      return (0, rb.jsxs)("div", {
        className: "GreenvilleBoardActions",
        children: [!gb && (0, rb.jsx)(Vw.f, {
          onClick: Lb,
          children: Hb("greenvilleGame:lumberBoardAccept")
        }), gb && (0, rb.jsx)(Vw.p, {
          disabled: !lb,
          loading: wb.delivering.includes(pb),
          onClick: () => {
            eb.deliver(pb)
          },
          children: Hb("greenvilleGame:lumberBoardDeliver")
        }), gb && !lb && (0, rb.jsx)("span", {
          className: "GreenvilleBoardHint",
          children: Hb("greenvilleGame:lumberBoardDeliverMissing", {
            count: Ib
          })
        }), gb && pb !== wb.tracked && (0, rb.jsx)(Vw.Y, {
          onClick: () => {
            eb.track(pb)
          },
          children: Hb("greenvilleGame:lumberBoardTrack")
        })]
      })
    }

    function ow(bb) {
      let {
        view: wb,
        controller: Mb
      } = bb;
      const {
        t: eb
      } = (0, jb.C)(), Hb = wb.orders[wb.selectedSlot], pb = uw(Hb, wb.tracked), Vb = Hb.eI && Hb.slot === wb.tracked;
      return (0, rb.jsxs)(Bw, {
        icon: (0, rb.jsx)(Uw, {
          item: Hb.items[0][0]
        }),
        name: eb(`greenvilleGame:${Hb.titleKey}`),
        badges: (0, rb.jsxs)(rb.Fragment, {
          children: [(0, rb.jsx)(dw, {
            state: pb
          }), Vb && "Ready" === pb && (0, rb.jsx)(dw, {
            state: "Tracking"
          })]
        }),
        children: [(0, rb.jsx)(Pw, {
          order: Hb
        }), (0, rb.jsx)("dl", {
          className: "GreenvilleBoardFacts",
          children: (0, rb.jsxs)("div", {
            children: [(0, rb.jsx)("dt", {
              children: eb("greenvilleGame:lumberBoardReward")
            }), (0, rb.jsx)("dd", {
              children: (0, rb.jsx)(nw, {
                order: Hb
              })
            })]
          })
        }), (0, rb.jsx)(yw, {
          view: wb,
          order: Hb,
          controller: Mb
        })]
      })
    }

    function Tw(bb) {
      let {
        view: wb,
        controller: Mb
      } = bb;
      const {
        t: eb
      } = (0, jb.C)();
      return (0, rb.jsxs)(rb.Fragment, {
        children: [(0, rb.jsx)(Ew, {
          className: "GreenvilleLumberTickets",
          roomy: !0,
          children: wb.orders.map((bb => {
            const Hb = uw(bb, wb.tracked);
            return (0, rb.jsxs)(Fw, {
              icon: (0, rb.jsx)(Uw, {
                item: bb.items[0][0]
              }),
              name: eb(`greenvilleGame:${bb.titleKey}`),
              selected: bb.slot === wb.selectedSlot,
              className: sb()("GreenvilleLumberTicket", Hb),
              onSelect: () => {
                Mb.selectOrder(bb.slot)
              },
              children: [(0, rb.jsx)(dw, {
                state: Hb
              }), (0, rb.jsx)(Pw, {
                order: bb
              }), (0, rb.jsx)(nw, {
                order: bb,
                inTile: !0
              })]
            }, bb.slot)
          }))
        }), (0, rb.jsx)(ow, {
          view: wb,
          controller: Mb
        })]
      })
    }

    function kw(bb) {
      let {
        item: wb
      } = bb;
      return (0, rb.jsx)("span", {
        className: "GreenvilleLumberLogEnd",
        children: (0, rb.jsx)(Uw, {
          item: wb
        })
      })
    }

    function bM(bb) {
      let {
        view: wb,
        controller: Mb
      } = bb;
      const {
        t: eb
      } = (0, jb.C)(), [Hb, pb, Vb] = wb.sellLines[wb.selectedWood], gb = function(bb, wb) {
        let Mb = 0,
          eb = 0;
        for (const Hb of bb.orders)
          if (Hb.eI)
            for (const [bb, pb, Vb] of Hb.items) bb === wb && (Mb += pb, eb = Vb);
        return Math.min(Mb, eb)
      }(wb, Hb), lb = wb.sellLines.some((bb => {
        let [, wb] = bb;
        return wb > 0
      }));
      return (0, rb.jsxs)(Bw, {
        icon: (0, rb.jsx)(kw, {
          item: Hb
        }),
        name: (0, rb.jsx)(Ow, {
          item: Hb
        }),
        badges: pb > 0 && (0, rb.jsx)("span", {
          className: "GreenvilleBoardBadge",
          children: eb("greenvilleGame:lumberBoardSellHeld", {
            count: pb
          })
        }),
        children: [(0, rb.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, rb.jsxs)("div", {
            children: [(0, rb.jsx)("dt", {
              children: eb("greenvilleGame:boardYouHave")
            }), (0, rb.jsx)("dd", {
              children: (gb + pb).toLocaleString()
            })]
          }), (0, rb.jsxs)("div", {
            children: [(0, rb.jsx)("dt", {
              children: eb("greenvilleGame:lumberBoardSellKept")
            }), (0, rb.jsx)("dd", {
              children: gb.toLocaleString()
            })]
          }), (0, rb.jsxs)("div", {
            children: [(0, rb.jsx)("dt", {
              children: eb("greenvilleGame:lumberBoardSellSpare")
            }), (0, rb.jsx)("dd", {
              className: sb()("GreenvilleLumberSpare", {
                None: 0 === pb
              }),
              children: pb.toLocaleString()
            })]
          }), (0, rb.jsxs)("div", {
            children: [(0, rb.jsx)("dt", {
              children: eb("greenvilleGame:lumberBoardSellEach")
            }), (0, rb.jsx)("dd", {
              children: (0, rb.jsx)(Qw, {
                amount: Vb
              })
            })]
          })]
        }), (0, rb.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [(0, rb.jsxs)(Vw.p, {
            disabled: 0 === pb,
            onClick: () => {
              Mb.sell(Hb)
            },
            children: [pb > 0 && eb("greenvilleGame:lumberBoardSell", {
              count: pb
            }), 0 === pb && eb(gb > 0 ? "greenvilleGame:lumberBoardSellKeptAll" : "greenvilleGame:lumberBoardSellNone")]
          }), (0, rb.jsx)(Vw.f, {
            disabled: !lb,
            onClick: () => {
              Mb.sell(null)
            },
            children: eb("greenvilleGame:lumberBoardSellAll")
          })]
        })]
      })
    }

    function wM(bb) {
      let {
        view: wb,
        controller: Mb
      } = bb;
      const {
        t: eb
      } = (0, jb.C)();
      return (0, rb.jsxs)(rb.Fragment, {
        children: [(0, rb.jsx)(Ew, {
          className: "GreenvilleLumberWoodPile",
          children: wb.sellLines.map(((bb, Hb) => {
            let [pb, Vb, gb] = bb;
            return (0, rb.jsxs)(Fw, {
              icon: (0, rb.jsx)(kw, {
                item: pb
              }),
              name: (0, rb.jsx)(Ow, {
                item: pb
              }),
              selected: Hb === wb.selectedWood,
              className: sb()("GreenvilleLumberWood", {
                Spare: Vb > 0
              }),
              onSelect: () => {
                Mb.selectWood(Hb)
              },
              children: [Vb > 0 && (0, rb.jsx)("span", {
                className: "GreenvilleBoardBadge",
                children: eb("greenvilleGame:lumberBoardSellHeld", {
                  count: Vb
                })
              }), (0, rb.jsx)(Qw, {
                amount: gb,
                inTile: !0
              })]
            }, pb)
          }))
        }), (0, rb.jsx)(bM, {
          view: wb,
          controller: Mb
        })]
      })
    }

    function MM(bb) {
      let {
        controller: wb
      } = bb;
      const Mb = (0, Xb.h)(Ww, wb.getView()),
        {
          t: eb
        } = (0, jb.C)(),
        Hb = function(bb) {
          const {
            t: wb
          } = (0, jb.C)();
          return "delivered" === bb.kind ? wb("greenvilleGame:lumberTimbertoothThanks", {
            order: wb(`greenvilleGame:${bb.titleKey}`)
          }) : "bought" === bb.kind ? wb("greenvilleGame:lumberTimbertoothBought", {
            count: bb.count
          }) : wb("greenvilleGame:lumberBoardIntro")
        }(Mb.line);
      if (0 === Mb.orders.length) return null;
      const pb = Mb.orders.filter((bb => bb.eI && bb.ready)).length,
        Vb = Mb.sellLines.reduce(((bb, wb) => {
          let [, Mb] = wb;
          return bb + Mb
        }), 0);
      return (0, rb.jsxs)(tw, {
        open: Mb.open,
        onDismiss: wb.dismiss,
        title: eb("greenvilleGame:lumberBoardTitle"),
        className: "GreenvilleLumberBoard",
        headerExtra: (0, rb.jsx)(qw, {
          children: (0, rb.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: eb("greenvilleGame:lumberBoardLevel", {
              level: Mb.level
            })
          })
        }),
        tabs: (0, rb.jsx)(Cw, {
          tabs: [{
            id: "orders",
            label: eb("greenvilleGame:lumberBoardOrders"),
            badge: pb > 0 && (0, rb.jsx)("span", {
              className: "GreenvilleBoardBadge Ready",
              children: eb("greenvilleGame:lumberBoardReadyCount", {
                count: pb
              })
            })
          }, {
            id: "sell",
            label: eb("greenvilleGame:lumberBoardSellHeading"),
            badge: Vb > 0 && (0, rb.jsx)("span", {
              className: "GreenvilleBoardBadge",
              children: eb("greenvilleGame:lumberBoardSellHeld", {
                count: Vb
              })
            })
          }],
          selected: Mb.tab,
          onSelect: wb.selectTab
        }),
        status: {
          speaker: eb("greenvilleGame:lumberTimbertoothName"),
          line: Hb
        },
        children: ["orders" === Mb.tab && (0, rb.jsx)(Tw, {
          view: Mb,
          controller: wb
        }), "sell" === Mb.tab && (0, rb.jsx)(wM, {
          view: Mb,
          controller: wb
        })]
      })
    }

    function eM(bb) {
      let {
        controller: wb
      } = bb;
      (0, Xb.h)(Jw, null);
      const {
        t: Mb
      } = (0, jb.C)(), eb = wb.getTracker();
      return null === eb ? null : (0, rb.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, rb.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: Mb(`greenvilleGame:${eb.titleKey}`)
        }), (0, rb.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: eb.items.map((bb => {
            let [wb, Mb, eb] = bb;
            return (0, rb.jsxs)("li", {
              className: sb()("GreenvilleTrackerRow", {
                Done: eb >= Mb
              }),
              children: [(0, rb.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, rb.jsx)(zb.c, {
                  itemName: wb,
                  amount: 0
                })
              }), (0, rb.jsx)(Ow, {
                item: wb,
                className: "GreenvilleTrackerLabel"
              }), (0, rb.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [Math.min(eb, Mb), "/", Mb]
              })]
            }, wb)
          }))
        }), eb.ready && (0, rb.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: Mb("greenvilleGame:lumberTrackerReady")
        })]
      })
    }
    const HM = "greenvilleOreBuyerView",
      pM = {
        open: !1,
        lines: [],
        selected: 0,
        level: 1
      };
    class VM extends ww {
      constructor(bb, wb, Mb, eb) {
        super(pM, bb, wb), this.sales = void 0, this.serverLines = [], this.select = bb => {
          this.set({
            ...this.getView(),
            selected: bb
          })
        }, this.sell = bb => {
          this.getView().lines.some((wb => {
            let [Mb, , , , eb] = wb;
            return eb > 0 && (null === bb || bb === Mb)
          })) && (this.sales.push(bb), this.set({
            ...this.getView(),
            lines: this.getLines()
          }))
        }, this.onAnswersTimedOut = () => {
          const bb = this.getView();
          bb.open && this.set({
            ...bb,
            lines: this.getLines()
          })
        }, this.sales = new kb(eb, Mb, this.onAnswersTimedOut)
      }
      EO(bb) {
        if ("close" !== bb[0]) {
          const [, wb, Mb] = bb, eb = "open" === bb[0] && bb[3];
          eb && this.sales.takeAnswer();
          const Hb = this.getView();
          if ((eb || "refresh" === bb[0]) && !Hb.open) return;
          this.serverLines = wb;
          const pb = wb.findIndex((bb => bb[4] > 0));
          this.show({
            open: !0,
            lines: this.getLines(),
            selected: Hb.open ? Hb.selected : Math.max(0, pb),
            level: Mb
          })
        } else this.close()
      }
      dropPresses() {
        this.sales.clear()
      }
      getLines() {
        const bb = this.sales.getPending();
        return this.serverLines.map((wb => {
          const [Mb, eb, Hb, pb, , Vb] = wb;
          return bb.some((bb => null === bb || bb === Mb)) ? [Mb, eb, Hb, pb, 0, Vb] : wb
        }))
      }
    }

    function gM(bb) {
      let {
        line: wb,
        level: Mb
      } = bb;
      const {
        t: eb
      } = (0, jb.C)(), [, , , Hb, pb, Vb] = wb;
      return (0, rb.jsxs)(rb.Fragment, {
        children: [pb > 0 && (0, rb.jsx)("span", {
          className: "GreenvilleBoardBadge",
          children: eb("greenvilleGame:oreBuyerHeld", {
            count: pb
          })
        }), Hb > Mb && (0, rb.jsxs)("span", {
          className: "GreenvilleBoardBadge Muted",
          children: [(0, rb.jsx)(pw.b, {
            name: "lock"
          }), eb("greenvilleGame:boardLevelBadge", {
            level: Hb
          })]
        }), Hb <= Mb && Vb && (0, rb.jsx)("span", {
          className: "GreenvilleBoardBadge GreenvilleOreRare",
          children: eb("greenvilleGame:oreBuyerRare")
        })]
      })
    }

    function lM(bb) {
      let {
        line: wb
      } = bb;
      return (0, rb.jsx)("span", {
        className: "GreenvilleOreSample",
        children: (0, rb.jsx)(Uw, {
          item: wb[0]
        })
      })
    }

    function LM(bb) {
      let {
        view: wb,
        controller: Mb
      } = bb;
      const {
        t: eb
      } = (0, jb.C)(), Hb = wb.lines[wb.selected], [pb, Vb, gb, lb, Lb, Ib] = Hb, Ob = lb > wb.level, Ub = wb.lines.some((bb => bb[4] > 0));
      return (0, rb.jsxs)(Bw, {
        icon: (0, rb.jsx)(lM, {
          line: Hb
        }),
        name: (0, rb.jsx)(Ow, {
          item: pb
        }),
        badges: (0, rb.jsx)(gM, {
          line: Hb,
          level: wb.level
        }),
        children: [(0, rb.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, rb.jsxs)("div", {
            children: [(0, rb.jsx)("dt", {
              children: eb("greenvilleGame:boardYouHave")
            }), (0, rb.jsx)("dd", {
              className: sb()("GreenvilleOreHeld", {
                None: 0 === Lb
              }),
              children: Lb.toLocaleString()
            })]
          }), (0, rb.jsxs)("div", {
            children: [(0, rb.jsx)("dt", {
              children: eb("greenvilleGame:oreBuyerPriceEach")
            }), (0, rb.jsx)("dd", {
              children: (0, rb.jsx)(Qw, {
                amount: Vb
              })
            })]
          }), (0, rb.jsxs)("div", {
            children: [(0, rb.jsx)("dt", {
              children: eb("greenvilleGame:oreBuyerExpEach")
            }), (0, rb.jsxs)("dd", {
              className: "GreenvilleOreExp",
              children: ["+", gb]
            })]
          })]
        }), Ib && (0, rb.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: eb("greenvilleGame:oreBuyerLegendary")
        }), Ob && (0, rb.jsxs)(rb.Fragment, {
          children: [(0, rb.jsx)("p", {
            className: "GreenvilleBoardHint",
            children: eb("greenvilleGame:oreBuyerLocked", {
              level: lb
            })
          }), (0, rb.jsx)("p", {
            className: "GreenvilleBoardDescription",
            children: eb("greenvilleGame:oreBuyerTip")
          })]
        }), (0, rb.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [(0, rb.jsxs)(Vw.p, {
            disabled: 0 === Lb,
            onClick: () => {
              Mb.sell(pb)
            },
            children: [Lb > 0 && eb("greenvilleGame:oreBuyerSell", {
              count: Lb
            }), 0 === Lb && eb("greenvilleGame:oreBuyerSellNone")]
          }), (0, rb.jsx)(Vw.f, {
            disabled: !Ub,
            onClick: () => {
              Mb.sell(null)
            },
            children: eb("greenvilleGame:oreBuyerSellAll")
          })]
        })]
      })
    }

    function IM(bb) {
      let {
        controller: wb
      } = bb;
      const Mb = (0, Xb.h)(HM, wb.getView()),
        {
          t: eb
        } = (0, jb.C)();
      return 0 === Mb.lines.length ? null : (0, rb.jsxs)(tw, {
        open: Mb.open,
        onDismiss: wb.dismiss,
        title: eb("greenvilleGame:oreBuyerTitle"),
        className: "GreenvilleOreBuyerBoard",
        headerExtra: (0, rb.jsx)(qw, {
          children: (0, rb.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: eb("greenvilleGame:oreBuyerLevel", {
              level: Mb.level
            })
          })
        }),
        status: {
          speaker: eb("greenvilleGame:oreBuyerName"),
          line: eb("greenvilleGame:oreBuyerGreet")
        },
        children: [(0, rb.jsx)(Ew, {
          roomy: !0,
          children: Mb.lines.map(((bb, Hb) => {
            const [pb, Vb, gb, lb, Lb, Ib] = bb;
            return (0, rb.jsxs)(Fw, {
              icon: (0, rb.jsx)(lM, {
                line: bb
              }),
              name: (0, rb.jsx)(Ow, {
                item: pb
              }),
              selected: Hb === Mb.selected,
              locked: lb > Mb.level && 0 === Lb,
              className: sb()("GreenvilleOreTile", {
                Legendary: Ib
              }),
              onSelect: () => {
                wb.select(Hb)
              },
              children: [(0, rb.jsx)(gM, {
                line: bb,
                level: Mb.level
              }), (0, rb.jsxs)("span", {
                className: "GreenvilleOrePrice",
                children: [(0, rb.jsx)(Qw, {
                  amount: Vb,
                  inTile: !0
                }), (0, rb.jsx)("span", {
                  className: "GreenvilleOreExp",
                  children: eb("greenvilleGame:boardExpGain", {
                    exp: gb
                  })
                })]
              })]
            }, pb)
          }))
        }), (0, rb.jsx)(LM, {
          view: Mb,
          controller: wb
        })]
      })
    }
    const OM = {
      kind: "greet"
    };

    function UM(bb) {
      return bb.every((bb => {
        let [, , wb, Mb] = bb;
        return Mb >= wb
      }))
    }

    function tM(bb) {
      let [wb, Mb, eb, Hb, pb, Vb] = bb;
      return {
        slot: wb,
        nameKey: Mb,
        needs: eb,
        exp: Hb,
        gold: pb,
        eI: Vb,
        ready: UM(eb)
      }
    }

    function CM(bb, wb) {
      let [, , Mb, eb] = bb;
      return wb ? Mb : Mb - eb
    }

    function EM(bb, wb) {
      let [Mb, eb] = bb;
      return Mb === wb.item && null !== eb === wb.golden
    }

    function FM(bb, wb) {
      return (wb.golden ? bb.goldenLines : bb.sellLines).find((bb => EM(bb, wb)))
    }

    function BM(bb, wb) {
      return "sell" === wb.action ? hM(function(bb, wb, Mb) {
        const eb = bb => {
          if (null !== wb && !EM(bb, wb)) return bb;
          const [eb, Hb, pb, Vb, gb] = bb;
          return [eb, Hb, pb - CM(bb, Mb), Mb ? 0 : Vb, gb]
        };
        return {
          ...bb,
          sellLines: bb.sellLines.map(eb),
          goldenLines: sM(bb.goldenLines.map(eb))
        }
      }(bb, wb.kind, wb.all)) : "accept" === wb.action ? function(bb, wb) {
        var Mb;
        const {
          needs: eb
        } = bb.orders[wb], Hb = bb => {
          const [wb, Mb, Hb, pb, Vb] = bb, gb = mM(eb, bb);
          return gb ? [wb, Mb, Hb, Math.min(Hb, pb + gb[2]), Vb] : bb
        };
        return {
          ...bb,
          tracked: null !== (Mb = bb.tracked) && void 0 !== Mb ? Mb : wb,
          orders: bb.orders.map((bb => bb.slot === wb ? {
            ...bb,
            eI: !0
          } : bb)),
          sellLines: bb.sellLines.map(Hb),
          goldenLines: bb.goldenLines.map(Hb)
        }
      }(bb, wb.slot) : "track" === wb.action ? {
        ...bb,
        tracked: wb.slot
      } : hM(function(bb, wb) {
        const {
          needs: Mb
        } = bb.orders[wb], eb = bb => {
          const [wb, eb, Hb, pb, Vb] = bb, gb = mM(Mb, bb);
          return gb ? [wb, eb, Hb - gb[2], pb - gb[2], Vb] : bb
        };
        return {
          ...bb,
          sellLines: bb.sellLines.map(eb),
          goldenLines: sM(bb.goldenLines.map(eb)),
          delivering: [...bb.delivering, wb]
        }
      }(bb, wb.slot))
    }

    function sM(bb) {
      return bb.filter((bb => {
        let [, , wb] = bb;
        return wb > 0
      }))
    }

    function mM(bb, wb) {
      let [Mb, eb] = wb;
      return bb.find((bb => {
        let [wb, Hb] = bb;
        return wb === Mb && Hb === eb
      }))
    }

    function hM(bb) {
      const wb = (wb, Mb) => {
          const eb = (null === Mb ? bb.sellLines : bb.goldenLines).find((bb => {
            let [Mb] = bb;
            return Mb === wb
          }));
          return eb ? eb[2] : 0
        },
        Mb = bb.orders.map((Mb => {
          if (bb.delivering.includes(Mb.slot)) return Mb;
          const eb = Mb.needs.map((bb => {
            let [Mb, eb, Hb] = bb;
            return [Mb, eb, Hb, wb(Mb, eb)]
          }));
          return {
            ...Mb,
            needs: eb,
            ready: UM(eb)
          }
        }));
      return {
        ...bb,
        orders: Mb
      }
    }

    function zM(bb) {
      let [, , , wb, Mb] = bb;
      return [...wb, ...Mb].reduce(((bb, wb) => {
        let [, , Mb] = wb;
        return bb + Mb
      }), 0)
    }
    const XM = "greenvilleFarmBoardView",
      xM = "greenvilleFarmTrackerView",
      jM = {
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
        line: OM
      };
    class KM extends ww {
      constructor(bb, wb, Mb, eb, Hb) {
        super(jM, bb, Mb), this.publishTracker = wb, this.board = null, this.commands = void 0, this.tracker = null, this.tab = "orders", this.selectedOrder = 0, this.selectedProduce = null, this.line = OM, this.selectTab = bb => {
          this.tab = bb, this.set(this.getBoardView())
        }, this.selectOrder = bb => {
          this.selectedOrder = bb, this.set(this.getBoardView())
        }, this.selectProduce = bb => {
          this.selectedProduce = bb, this.set(this.getBoardView())
        }, this.accept = bb => {
          this.getView().orders[bb].eI || this.queue({
            action: "accept",
            slot: bb
          })
        }, this.track = bb => {
          const wb = this.getView();
          wb.tracked !== bb && wb.orders[bb].eI && this.queue({
            action: "track",
            slot: bb
          })
        }, this.deliver = bb => {
          const wb = this.getView(),
            Mb = wb.orders[bb];
          Mb.eI && Mb.ready && !wb.delivering.includes(bb) && this.queue({
            action: "deliver",
            slot: bb
          })
        }, this.sell = (bb, wb) => {
          this.queueSale({
            item: bb,
            golden: wb
          }, !1)
        }, this.sellSpare = () => {
          this.queueSale(null, !1)
        }, this.sellAll = () => {
          this.queueSale(null, !0)
        }, this.onAnswersTimedOut = () => {
          this.getView().open && this.set(this.settleView())
        }, this.commands = new kb(Hb, (bb => {
          eb(function(bb) {
            return "sell" !== bb.action ? `${pb}${bb.action} ${bb.slot}` : bb.all ? `${pb}sellAll` : null === bb.kind ? `${pb}sell` : `${pb}${bb.kind.golden?"sellGolden":"sell"} ${bb.kind.item}`
          }(bb))
        }), this.onAnswersTimedOut)
      }
      getTracker() {
        return this.tracker
      }
      EO(bb) {
        if ("open" === bb[0]) {
          const Mb = bb[7],
            eb = Mb ? this.commands.takeAnswer() : null,
            Hb = !this.getView().open;
          if (Mb && Hb) return;
          const pb = this.board;
          if (this.board = bb, Hb) this.onReopened();
          else if (null !== eb) {
            var wb;
            this.line = null !== (wb = function(bb, wb, Mb) {
              const eb = Mb[6] - wb[6];
              if (eb <= 0) return null;
              if ("deliver" === bb.action) return {
                kind: "delivered",
                nameKey: wb[1][bb.slot][1],
                gold: eb
              };
              const Hb = zM(wb) - zM(Mb);
              return "sell" === bb.action && Hb > 0 ? {
                kind: "sold",
                count: Hb,
                gold: eb
              } : null
            }(eb, pb, bb)) && void 0 !== wb ? wb : this.line
          }
          this.show(this.settleView())
        } else "close" === bb[0] ? this.close() : (this.tracker = null === bb[1] ? null : tM(bb[1]), this.publishTracker(this.tracker))
      }
      dropPresses() {
        this.commands.clear(), this.board = null
      }
      onReopened() {
        this.line = OM;
        const bb = this.toView(this.board).orders.find((bb => bb.eI && bb.ready));
        bb && (this.tab = "orders", this.selectedOrder = bb.slot)
      }
      queueSale(bb, wb) {
        const {
          sellLines: Mb,
          goldenLines: eb
        } = this.getView();
        [...Mb, ...eb].some((Mb => CM(Mb, wb) > 0 && (null === bb || EM(Mb, bb)))) && this.queue({
          action: "sell",
          kind: bb,
          all: wb
        })
      }
      toView(bb) {
        let [, wb, Mb, eb, Hb, pb] = bb;
        return {
          open: !0,
          orders: wb.map(tM),
          tracked: Mb,
          sellLines: eb,
          goldenLines: Hb,
          level: pb,
          delivering: [],
          tab: this.tab,
          selectedOrder: this.selectedOrder,
          selectedProduce: this.selectedProduce,
          line: this.line
        }
      }
      getBoardView() {
        let bb = this.toView(this.board);
        for (const wb of this.commands.getPending()) bb = BM(bb, wb);
        return {
          ...bb,
          selectedProduce: this.pickProduce(bb)
        }
      }
      settleView() {
        const bb = this.getBoardView();
        return this.commands.IO() && (this.selectedProduce = bb.selectedProduce), bb
      }
      pickProduce(bb) {
        var wb, Mb;
        const eb = this.selectedProduce;
        if (eb && FM(bb, eb)) return eb;
        if (eb) return {
          item: eb.item,
          golden: !1
        };
        const [Hb, pb] = null !== (wb = null !== (Mb = bb.goldenLines[0]) && void 0 !== Mb ? Mb : bb.sellLines.find((bb => {
          let [, , wb] = bb;
          return wb > 0
        }))) && void 0 !== wb ? wb : bb.sellLines[0];
        return {
          item: Hb,
          golden: null !== pb
        }
      }
      queue(bb) {
        this.commands.push(bb), this.set(this.getBoardView())
      }
    }
    var rM = Mb(1501);

    function RM() {
      const bb = (0, lb.useRef)(null);
      return (0, rM.c)(bb), (0, rb.jsx)("span", {
        ref: bb,
        className: "GreenvilleFarmSparkle",
        "aria-hidden": "true"
      })
    }

    function DM(bb) {
      let {
        item: wb,
        golden: Mb
      } = bb;
      return (0, rb.jsx)("span", {
        className: sb()("GreenvilleFarmProduce", {
          Golden: Mb
        }),
        children: (0, rb.jsx)(Uw, {
          item: wb
        })
      })
    }

    function cM(bb) {
      let {
        item: wb,
        goldenNameKey: Mb
      } = bb;
      const {
        t: eb
      } = (0, jb.C)();
      return null !== Mb ? (0, rb.jsx)("span", {
        className: "GreenvilleFarmGoldenName",
        children: eb(Mb)
      }) : (0, rb.jsx)(Ow, {
        item: wb
      })
    }
    const YM = {
      New: "greenvilleGame:farmBoardNew",
      Accepted: "greenvilleGame:farmBoardAccepted",
      Tracking: "greenvilleGame:farmOrderTracking",
      Ready: "greenvilleGame:farmBoardReady"
    };

    function ZM(bb, wb) {
      return bb.eI ? bb.ready ? "Ready" : wb ? "Tracking" : "Accepted" : "New"
    }

    function fM(bb) {
      return bb.needs.some((bb => {
        let [, wb] = bb;
        return null !== wb
      }))
    }

    function AM(bb) {
      let {
        order: wb
      } = bb;
      const [Mb, eb] = wb.needs[0];
      return (0, rb.jsx)(DM, {
        item: Mb,
        golden: null !== eb
      })
    }

    function WM(bb) {
      let {
        state: wb
      } = bb;
      const {
        t: Mb
      } = (0, jb.C)();
      return (0, rb.jsx)("span", {
        className: sb()("GreenvilleBoardBadge GreenvilleFarmState", wb),
        children: Mb(YM[wb])
      })
    }

    function JM(bb) {
      let {
        needs: wb
      } = bb;
      return (0, rb.jsx)("span", {
        className: "GreenvilleFarmNeeds",
        children: wb.map((bb => {
          let [wb, Mb, eb, Hb] = bb;
          const pb = Hb >= eb;
          return (0, rb.jsxs)("span", {
            className: sb()("GreenvilleFarmNeed", {
              Met: pb,
              Golden: null !== Mb
            }),
            children: [(0, rb.jsx)("span", {
              className: "GreenvilleFarmNeedIcon",
              children: (0, rb.jsx)(DM, {
                item: wb,
                golden: null !== Mb
              })
            }), (0, rb.jsx)("span", {
              className: "GreenvilleFarmNeedName",
              children: (0, rb.jsx)(cM, {
                item: wb,
                goldenNameKey: Mb
              })
            }), (0, rb.jsxs)("span", {
              className: "GreenvilleFarmNeedCount",
              children: [pb && "\u2713 ", Math.min(Hb, eb), "/", eb]
            })]
          }, `${wb}|${Mb}`)
        }))
      })
    }

    function SM(bb) {
      let {
        order: wb,
        inTile: Mb = !1
      } = bb;
      const {
        t: eb
      } = (0, jb.C)();
      return (0, rb.jsxs)("span", {
        className: "GreenvilleFarmReward",
        children: [(0, rb.jsx)(Qw, {
          amount: wb.gold,
          inTile: Mb
        }), (0, rb.jsx)("span", {
          className: "GreenvilleFarmExp",
          children: eb("greenvilleGame:boardExpGain", {
            exp: wb.exp
          })
        })]
      })
    }

    function NM(bb) {
      let {
        view: wb,
        controller: Mb
      } = bb;
      const {
        t: eb
      } = (0, jb.C)(), Hb = wb.orders[wb.selectedOrder], {
        slot: pb,
        nameKey: Vb,
        needs: gb,
        eI: lb,
        ready: Lb
      } = Hb, Ib = pb === wb.tracked, Ob = aw(pb, lb, Mb.accept), Ub = gb.reduce(((bb, wb) => {
        let [, , Mb, eb] = wb;
        return bb + Math.max(0, Mb - eb)
      }), 0);
      return (0, rb.jsxs)(Bw, {
        icon: (0, rb.jsx)(AM, {
          order: Hb
        }),
        name: eb(Vb),
        badges: (0, rb.jsxs)(rb.Fragment, {
          children: [(0, rb.jsx)(WM, {
            state: ZM(Hb, Ib)
          }), fM(Hb) && (0, rb.jsx)("span", {
            className: "GreenvilleBoardBadge GreenvilleFarmGoldenBadge",
            children: eb("greenvilleGame:farmBoardGolden")
          })]
        }),
        children: [(0, rb.jsx)(JM, {
          needs: gb
        }), (0, rb.jsx)("dl", {
          className: "GreenvilleBoardFacts",
          children: (0, rb.jsxs)("div", {
            children: [(0, rb.jsx)("dt", {
              children: eb("greenvilleGame:farmBoardReward")
            }), (0, rb.jsx)("dd", {
              children: (0, rb.jsx)(SM, {
                order: Hb
              })
            })]
          })
        }), (0, rb.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [!lb && (0, rb.jsx)(Vw.f, {
            onClick: Ob,
            children: eb("greenvilleGame:farmOrderAccept")
          }), lb && Ib && (0, rb.jsxs)("span", {
            className: "GreenvilleFarmTracking",
            children: [(0, rb.jsx)(pw.b, {
              name: "crosshairs"
            }), eb("greenvilleGame:farmOrderTracking")]
          }), lb && !Ib && (0, rb.jsx)(Vw.Y, {
            onClick: () => {
              Mb.track(pb)
            },
            children: eb("greenvilleGame:farmOrderTrack")
          }), lb && (0, rb.jsx)(Vw.p, {
            disabled: !Lb,
            loading: wb.delivering.includes(pb),
            onClick: () => {
              Mb.deliver(pb)
            },
            children: eb("greenvilleGame:farmOrderDeliver")
          }), lb && !Lb && (0, rb.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: eb("greenvilleGame:farmBoardMissing", {
              count: Ub
            })
          })]
        })]
      })
    }

    function vM(bb) {
      let {
        view: wb,
        controller: Mb
      } = bb;
      const {
        t: eb
      } = (0, jb.C)();
      return (0, rb.jsxs)(rb.Fragment, {
        children: [(0, rb.jsx)(Ew, {
          roomy: !0,
          children: wb.orders.map((bb => (0, rb.jsxs)(Fw, {
            icon: (0, rb.jsx)(AM, {
              order: bb
            }),
            name: eb(bb.nameKey),
            selected: bb.slot === wb.selectedOrder,
            className: sb()("GreenvilleFarmBasket", {
              WantsGolden: fM(bb)
            }),
            onSelect: () => {
              Mb.selectOrder(bb.slot)
            },
            children: [(0, rb.jsx)(WM, {
              state: ZM(bb, bb.slot === wb.tracked)
            }), (0, rb.jsx)(JM, {
              needs: bb.needs
            }), (0, rb.jsx)(SM, {
              order: bb,
              inTile: !0
            })]
          }, bb.slot)))
        }), (0, rb.jsx)(NM, {
          view: wb,
          controller: Mb
        })]
      })
    }

    function QM(bb) {
      let {
        line: wb,
        selected: Mb,
        onSelect: eb
      } = bb;
      const [Hb, pb, Vb, , gb] = wb, lb = null !== pb;
      return (0, rb.jsxs)(Fw, {
        icon: (0, rb.jsx)(DM, {
          item: Hb,
          golden: lb
        }),
        name: (0, rb.jsx)(cM, {
          item: Hb,
          goldenNameKey: pb
        }),
        selected: Mb,
        className: sb()("GreenvilleFarmCrate", {
          Golden: lb,
          Empty: 0 === Vb
        }),
        onSelect: eb,
        children: [lb && (0, rb.jsx)(RM, {}), Vb > 0 && (0, rb.jsxs)("span", {
          className: "GreenvilleBoardBadge GreenvilleFarmHeld",
          children: ["\xd7", Vb]
        }), (0, rb.jsx)(Qw, {
          amount: gb,
          inTile: !0
        })]
      })
    }

    function GM(bb) {
      let {
        view: wb,
        controller: Mb
      } = bb;
      const {
        t: eb
      } = (0, jb.C)(), Hb = [...wb.sellLines, ...wb.goldenLines], pb = Hb.some((bb => CM(bb, !1) > 0)), Vb = Hb.some((bb => CM(bb, !0) > 0));
      return (0, rb.jsxs)("div", {
        className: "GreenvilleFarmSign",
        children: [(0, rb.jsx)("h3", {
          className: "GreenvilleFarmSignBoard",
          children: eb("greenvilleGame:farmBoardPrices")
        }), (0, rb.jsxs)("div", {
          className: "GreenvilleFarmSignActions",
          children: [(0, rb.jsx)(Vw.f, {
            disabled: !pb,
            onClick: Mb.sellSpare,
            children: eb("greenvilleGame:farmStallSellSurplus")
          }), (0, rb.jsx)(Vw.Q, {
            disabled: !Vb,
            onClick: Mb.sellAll,
            children: eb("greenvilleGame:farmStallSellAll")
          })]
        })]
      })
    }

    function qM(bb) {
      let {
        line: wb,
        controller: Mb
      } = bb;
      const {
        t: eb
      } = (0, jb.C)(), [Hb, pb, Vb, gb, lb] = wb, Lb = null !== pb, Ib = CM(wb, !1);
      return (0, rb.jsxs)(Bw, {
        icon: (0, rb.jsx)(DM, {
          item: Hb,
          golden: Lb
        }),
        name: (0, rb.jsx)(cM, {
          item: Hb,
          goldenNameKey: pb
        }),
        badges: Lb && (0, rb.jsx)("span", {
          className: "GreenvilleBoardBadge GreenvilleFarmGoldenBadge",
          children: eb("greenvilleGame:farmBoardGolden")
        }),
        children: [Lb && (0, rb.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: eb("greenvilleGame:farmBoardGoldenBlurb")
        }), (0, rb.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, rb.jsxs)("div", {
            children: [(0, rb.jsx)("dt", {
              children: eb("greenvilleGame:boardYouHave")
            }), (0, rb.jsx)("dd", {
              children: Vb
            })]
          }), gb > 0 && (0, rb.jsxs)("div", {
            children: [(0, rb.jsx)("dt", {
              children: eb("greenvilleGame:farmBoardKept")
            }), (0, rb.jsx)("dd", {
              children: gb
            })]
          }), (0, rb.jsxs)("div", {
            children: [(0, rb.jsx)("dt", {
              children: eb("greenvilleGame:farmBoardSpare")
            }), (0, rb.jsx)("dd", {
              children: Ib
            })]
          }), (0, rb.jsxs)("div", {
            children: [(0, rb.jsx)("dt", {
              children: eb("greenvilleGame:farmBoardPriceEach")
            }), (0, rb.jsx)("dd", {
              children: (0, rb.jsx)(Qw, {
                amount: lb
              })
            })]
          })]
        }), (0, rb.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [Ib > 0 && (0, rb.jsx)(Vw.p, {
            onClick: () => {
              Mb.sell(Hb, Lb)
            },
            children: eb("greenvilleGame:farmBoardSell", {
              count: Ib
            })
          }), 0 === Vb && (0, rb.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: eb("greenvilleGame:farmStallNothing")
          }), Vb > 0 && 0 === Ib && (0, rb.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: eb("greenvilleGame:farmBoardAllKept")
          })]
        })]
      })
    }

    function aM(bb) {
      let {
        view: wb,
        produce: Mb,
        controller: eb
      } = bb;
      const {
        t: Hb
      } = (0, jb.C)(), pb = bb => {
        const [wb, Hb] = bb;
        return (0, rb.jsx)(QM, {
          line: bb,
          selected: EM(bb, Mb),
          onSelect: () => {
            eb.selectProduce({
              item: wb,
              golden: null !== Hb
            })
          }
        }, `${wb}|${null!==Hb}`)
      };
      return (0, rb.jsxs)(rb.Fragment, {
        children: [(0, rb.jsxs)(Ew, {
          children: [(0, rb.jsx)(GM, {
            view: wb,
            controller: eb
          }), wb.goldenLines.length > 0 && (0, rb.jsxs)(rb.Fragment, {
            children: [(0, rb.jsx)("h4", {
              className: "GreenvilleFarmSection Golden",
              children: Hb("greenvilleGame:farmBoardGoldenCrops")
            }), wb.goldenLines.map(pb), (0, rb.jsx)("hr", {
              className: "GreenvilleFarmSection"
            })]
          }), wb.sellLines.map(pb)]
        }), (0, rb.jsx)(qM, {
          line: FM(wb, Mb),
          controller: eb
        })]
      })
    }

    function iM(bb) {
      let {
        controller: wb
      } = bb;
      const Mb = (0, Xb.h)(XM, wb.getView()),
        {
          t: eb
        } = (0, jb.C)(),
        Hb = function(bb) {
          const {
            t: wb
          } = (0, jb.C)();
          return "delivered" === bb.kind ? wb("greenvilleGame:tillieDelivered", {
            order: wb(bb.nameKey),
            gold: bb.gold
          }) : "sold" === bb.kind ? wb("greenvilleGame:tillieSold", {
            count: bb.count,
            gold: bb.gold
          }) : wb("greenvilleGame:tillieGreet")
        }(Mb.line),
        pb = Mb.selectedProduce;
      if (null === pb) return null;
      const Vb = function(bb) {
        return bb.orders.filter((bb => bb.eI && bb.ready)).length
      }(Mb);
      return (0, rb.jsxs)(tw, {
        open: Mb.open,
        onDismiss: wb.dismiss,
        title: eb("greenvilleGame:farmBoardTitle"),
        className: "GreenvilleFarmBoard",
        headerExtra: (0, rb.jsx)(qw, {
          children: (0, rb.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: eb("greenvilleGame:farmBoardLevel", {
              level: Mb.level
            })
          })
        }),
        tabs: (0, rb.jsx)(Cw, {
          tabs: [{
            id: "orders",
            label: eb("greenvilleGame:farmBoardOrdersTab"),
            badge: Vb > 0 && (0, rb.jsx)("span", {
              className: "GreenvilleBoardBadge GreenvilleFarmReadyBadge",
              children: eb("greenvilleGame:farmBoardReadyCount", {
                count: Vb
              })
            })
          }, {
            id: "stall",
            label: eb("greenvilleGame:farmBoardStallTab")
          }],
          selected: Mb.tab,
          onSelect: wb.selectTab
        }),
        status: {
          speaker: eb("greenvilleGame:farmTillieName"),
          line: Hb
        },
        children: ["orders" === Mb.tab && (0, rb.jsx)(vM, {
          view: Mb,
          controller: wb
        }), "stall" === Mb.tab && (0, rb.jsx)(aM, {
          view: Mb,
          produce: pb,
          controller: wb
        })]
      })
    }
    var uM = Mb(39714);

    function dM(bb) {
      let {
        controller: wb
      } = bb;
      (0, Xb.h)(xM, null);
      const {
        t: Mb
      } = (0, jb.C)(), eb = wb.getTracker();
      return null === eb ? null : (0, rb.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, rb.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: Mb(eb.nameKey)
        }), (0, rb.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: eb.needs.map((bb => {
            let [wb, eb, Hb, pb] = bb;
            return (0, rb.jsxs)("li", {
              className: sb()("GreenvilleTrackerRow", {
                Done: pb >= Hb,
                Golden: null !== eb
              }),
              children: [(0, rb.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, rb.jsx)(zb.c, {
                  itemName: wb,
                  amount: 0
                })
              }), (0, rb.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: null === eb ? (0, uM.f)(Mb, wb) : Mb(eb)
              }), (0, rb.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [Math.min(pb, Hb), "/", Hb]
              })]
            }, `${wb}|${eb}`)
          }))
        }), eb.ready && (0, rb.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: Mb("greenvilleGame:farmOrderReady")
        })]
      })
    }
    const PM = "greenvillePlaceView",
      nM = "greenvilleMoodView";
    class yM {
      constructor(bb, wb) {
        this.publishPlace = bb, this.publishMood = wb, this.place = null, this.mood = null
      }
      getPlace() {
        return this.place
      }
      getMood() {
        return this.mood
      }
      EO(bb) {
        const wb = performance.now();
        switch (bb[0]) {
          case "hudMood": {
            const [, Mb, eb, Hb, pb, Vb, gb] = bb;
            return this.mood = {
              energy: Mb,
              earningsPercent: eb,
              breakEvenEnergy: Hb,
              restedEndsAt: pb > 0 ? wb + pb : 0,
              adBoosted: Vb,
              luckPercent: gb
            }, void this.publishMood(this.mood)
          }
          case "hudTown": {
            const [wb, Mb, eb] = bb;
            this.place = {
              kind: wb,
              place: Mb,
              levels: eb
            };
            break
          }
          case "hudJob": {
            const [wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb] = bb;
            this.place = {
              kind: wb,
              place: Mb,
              job: eb,
              level: Hb,
              expInto: pb,
              expNeeded: Vb,
              status: null === gb ? null : oM(gb),
              next: null === lb ? null : {
                item: lb[0],
                nameKey: lb[1],
                level: lb[2]
              },
              stats: Lb.map((bb => {
                let [wb, Mb, eb, Hb] = bb;
                return {
                  stat: wb,
                  value: Mb,
                  max: eb,
                  boosted: Hb
                }
              }))
            };
            break
          }
          case "hudHome": {
            const [Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib] = bb;
            this.place = {
              kind: Mb,
              houseName: eb,
              ownerName: Hb,
              isOwner: pb,
              visitorsAllowed: Vb,
              pvp: gb,
              parkour: lb,
              runStartedAt: Lb < 0 ? null : this.getRunStart(wb - Lb),
              bestTimes: Ib.map((bb => {
                let [wb, Mb] = bb;
                return {
                  playerName: wb,
                  seconds: Mb
                }
              }))
            };
            break
          }
          case "hudSpleef": {
            const [wb, Mb, eb] = bb;
            this.place = {
              kind: wb,
              eliminations: Mb,
              wins: eb
            };
            break
          }
        }
        this.publishPlace(this.place)
      }
      getRunStart(bb) {
        var wb;
        const Mb = "hudHome" === (null === (wb = this.place) || void 0 === wb ? void 0 : wb.kind) ? this.place.runStartedAt : null;
        return null !== Mb && Math.abs(Mb - bb) < 500 ? Mb : bb
      }
    }

    function oM(bb) {
      switch (bb[0]) {
        case "hudTier":
          return {
            kind: bb[0], tierKey: bb[1], locked: bb[2]
          };
        case "hudBay":
          return {
            kind: bb[0], materialKey: bb[1], objectKey: bb[2], percent: bb[3]
          };
        case "hudBayEmpty":
          return {
            kind: bb[0]
          };
        case "hudFarmTier":
          return {
            kind: bb[0], goldenPercent: bb[1]
          }
      }
    }
    var TM = Mb(4792),
      kM = Mb(1329),
      be = Mb(225);
    const we = JSON.parse('{"b":{"constructionSiteA":{"name":"Construction Site A"},"quarry":{"name":"The Quarry","skill":"Mining"},"industry":{"name":"Demolition Yard","skill":"Demolition"},"market":{"name":"Market Street","skill":"Market"},"lumberMill":{"name":"Lumber Mill","skill":"Woodcutting"},"farm":{"name":"Greenville Farm","skill":"Farming"},"constructionSiteB":{"name":"Construction Site B"},"dealership":{"name":"Wheeler\'s Wheels"},"postOffice":{"name":"Post Office & Diner"},"station":{"name":"The Station"},"docks":{"name":"The Docks"}},"c":[[{"kind":"residential","name":"Hillside"},{"kind":"district","district":"quarry"},{"kind":"district","district":"industry"},{"kind":"residential","name":"Ridgeview"}],[{"kind":"residential","name":"Willow Gardens"},{"kind":"district","district":"constructionSiteA"},{"kind":"district","district":"market"},{"kind":"residential","name":"Maple Row"}],[{"kind":"residential","name":"Birchwood"},{"kind":"district","district":"farm"},{"kind":"district","district":"lumberMill"},{"kind":"district","district":"dealership"}],[{"kind":"residential","name":"Seaview"},{"kind":"district","district":"constructionSiteB"},{"kind":"residential","name":"Harbour Terrace"},{"kind":"residential","name":"Lighthouse Point"}]]}'),
      Me = be.e.gO,
      ee = 1e3 * Me,
      He = Me,
      pe = He + 2 * Me,
      Ve = 4 * pe + He;

    function ge(bb, wb, Mb) {
      return wb >= bb.x0 && wb <= bb.x1 && Mb >= bb.z0 && Mb <= bb.z1
    }
    const le = we.c,
      Le = Object.fromEntries(Object.entries(we.b).map((bb => {
        let [wb, {
          name: Mb
        }] = bb;
        return [wb, Mb]
      })));

    function Ie(bb, wb) {
      return [ee + He + bb * pe, ee + He + wb * pe]
    }

    function Oe() {
      const bb = [];
      le.forEach(((wb, Mb) => {
        wb.forEach(((wb, eb) => {
          if ("residential" !== wb.kind) return;
          const [Hb, pb] = Ie(eb, Mb);
          for (const [Mb, Vb, gb] of [
              [0, 0, "north"],
              [1, 0, "north"],
              [0, 1, "south"],
              [1, 1, "south"]
            ]) bb.push({
            chunk: [Hb / Me + Mb, 0, pb / Me + Vb],
            facing: gb,
            neighbourhood: wb.name
          })
        }))
      }));
      const wb = ee + Ve / 2,
        Mb = bb => {
          let {
            chunk: Mb
          } = bb;
          return Math.hypot(Mb[0] * Me + Me / 2 - wb, Mb[2] * Me + Me / 2 - wb)
        };
      return bb.sort(((bb, wb) => Mb(bb) - Mb(wb)))
    }
    const Ue = {
        market: "Crate",
        demolition: "Moonstone Explosive",
        mining: "Iron Pickaxe",
        woodcutting: "Iron Axe",
        farming: "Wheat"
      },
      te = {
        earningPower: "greenvilleGame:marketEarningPower",
        power: "greenvilleGame:demolitionPower",
        points: "greenvilleGame:demolitionPoints",
        depth: "greenvilleGame:miningDepth",
        value: "greenvilleGame:miningValue",
        backpack: "greenvilleGame:miningBackpack",
        luck: "greenvilleGame:luck"
      };

    function Ce(bb, wb) {
      switch (wb) {
        case "quarry":
          return Le.quarry;
        case "demolitionYard":
          return Le.industry;
        case "marketStreet":
          return Le.market;
        case "farm":
          return Le.farm;
        case "lumberMill":
          return Le.lumberMill;
        case "supermarket":
          return bb("greenvilleGame:market");
        case "demolition":
        case "mining":
        case "woodcutting":
        case "farming":
          return bb(`greenvilleGame:${wb}`)
      }
    }

    function Ee(bb) {
      let {
        controller: wb,
        children: Mb
      } = bb;
      (0, Xb.h)(PM, null);
      const [eb, Hb] = (0, lb.useState)(null);
      (0, TM.k)(eb, ".RightElements");
      const pb = wb.getPlace();
      return (0, rb.jsx)(hb.d, {
        placement: "topRight",
        children: (0, rb.jsx)("div", {
          className: "GreenvilleHudColumn",
          children: (0, rb.jsxs)("div", {
            ref: Hb,
            className: "GreenvilleHudColumnStack",
            children: [Mb, "hudTown" === (null === pb || void 0 === pb ? void 0 : pb.kind) && (0, rb.jsx)(Be, {
              levels: pb.levels
            }), "hudJob" === (null === pb || void 0 === pb ? void 0 : pb.kind) && (0, rb.jsx)(se, {
              job: pb
            }), "hudHome" === (null === pb || void 0 === pb ? void 0 : pb.kind) && pb.bestTimes.length > 0 && (0, rb.jsx)(me, {
              home: pb
            }), "hudSpleef" === (null === pb || void 0 === pb ? void 0 : pb.kind) && (0, rb.jsx)("div", {
              className: "GreenvilleTrackerCard",
              children: (0, rb.jsx)(Fe, {
                rows: [
                  ["greenvilleGame:spleefEliminations", pb.eliminations],
                  ["greenvilleGame:spleefWins", pb.wins]
                ]
              })
            })]
          })
        })
      })
    }

    function Fe(bb) {
      let {
        rows: wb
      } = bb;
      const {
        t: Mb
      } = (0, jb.C)();
      return (0, rb.jsx)("ul", {
        className: "GreenvilleTrackerRows",
        children: wb.map((bb => {
          let [wb, eb] = bb;
          return (0, rb.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, rb.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: Mb(wb)
            }), (0, rb.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: (0, vb.d)(eb)
            })]
          }, wb)
        }))
      })
    }

    function Be(bb) {
      let {
        levels: wb
      } = bb;
      const {
        t: Mb
      } = (0, jb.C)();
      return (0, rb.jsxs)("div", {
        className: "GreenvilleTrackerCard GreenvilleJobsStrip",
        children: [(0, rb.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: Mb("greenvilleGame:jobs")
        }), (0, rb.jsx)("ul", {
          className: "GreenvilleJobsStripJobs",
          children: Vb.map(((bb, eb) => {
            const Hb = wb[eb];
            return (0, rb.jsxs)("li", {
              className: sb()("GreenvilleJobsStripJob", {
                Max: Hb >= 50
              }),
              "aria-label": Mb("greenvilleGame:jobLevel", {
                job: Mb(`greenvilleGame:${bb}`),
                level: Hb
              }),
              children: [(0, rb.jsx)("span", {
                className: "GreenvilleJobsStripIcon",
                "aria-hidden": "true",
                children: (0, rb.jsx)(zb.c, {
                  itemName: Ue[bb],
                  amount: 0
                })
              }), (0, rb.jsx)("span", {
                className: "GreenvilleJobsStripLevel",
                "aria-hidden": "true",
                children: Mb("greenvilleGame:levelShort", {
                  level: Hb
                })
              })]
            }, bb)
          }))
        })]
      })
    }

    function se(bb) {
      let {
        job: {
          stats: wb,
          next: Mb
        }
      } = bb;
      const {
        t: eb
      } = (0, jb.C)();
      return (0, rb.jsxs)(rb.Fragment, {
        children: [wb.length > 0 && (0, rb.jsx)("div", {
          className: "GreenvilleTrackerCard",
          children: (0, rb.jsx)("ul", {
            className: "GreenvilleTrackerRows",
            children: wb.map((bb => {
              let {
                stat: wb,
                value: Mb,
                max: Hb,
                boosted: pb
              } = bb;
              return (0, rb.jsxs)("li", {
                className: "GreenvilleTrackerRow",
                children: [(0, rb.jsx)("span", {
                  className: "GreenvilleTrackerLabel",
                  children: eb(te[wb])
                }), (0, rb.jsxs)("span", {
                  className: sb()("GreenvilleTrackerValue", {
                    Boosted: pb
                  }),
                  children: [(0, vb.d)(Mb), null !== Hb && `/${(0,vb.d)(Hb)}`]
                })]
              }, wb)
            }))
          })
        }), null !== Mb && (0, rb.jsxs)("div", {
          className: "GreenvilleTrackerCard GreenvilleNextUnlock",
          children: [(0, rb.jsx)("span", {
            className: "GreenvilleNextUnlockEyebrow",
            children: eb("greenvilleGame:nextUnlock")
          }), (0, rb.jsxs)("div", {
            className: "GreenvilleNextUnlockBody",
            children: [(0, rb.jsx)("span", {
              className: "GreenvilleNextUnlockIcon",
              "aria-hidden": "true",
              children: (0, rb.jsx)(zb.c, {
                itemName: Mb.item,
                amount: 0
              })
            }), (0, rb.jsxs)("span", {
              className: "GreenvilleNextUnlockText",
              children: [(0, rb.jsx)("strong", {
                className: "GreenvilleNextUnlockName",
                children: eb(Mb.nameKey)
              }), (0, rb.jsx)("span", {
                className: "GreenvilleNextUnlockLevel",
                children: eb("greenvilleGame:unlockAtLevel", {
                  level: Mb.level
                })
              })]
            })]
          })]
        })]
      })
    }

    function me(bb) {
      let {
        home: wb
      } = bb;
      const {
        t: Mb,
        selectedLanguage: eb
      } = (0, jb.C)(), Hb = (0, vw.h)("hiddenPlayerNames");
      return (0, rb.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, rb.jsxs)("strong", {
          className: "GreenvilleTrackerTitle GreenvilleBestTimesTitle",
          children: [(0, rb.jsx)(pw.b, {
            name: "trophy"
          }), Mb("greenvilleGame:parkourBestTimes")]
        }), (0, rb.jsx)("ol", {
          className: "GreenvilleTrackerRows",
          children: wb.bestTimes.slice(0, 3).map(((bb, wb) => {
            let {
              playerName: pb,
              seconds: Vb
            } = bb;
            return (0, rb.jsxs)("li", {
              className: sb()("GreenvilleTrackerRow GreenvilleBestTime", {
                First: 0 === wb
              }),
              children: [(0, rb.jsx)("span", {
                className: "GreenvilleBestTimeRank",
                children: wb + 1
              }), (0, rb.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: (0, kM.c)(pb, Hb)
              }), (0, rb.jsx)("span", {
                className: "GreenvilleTrackerValue",
                children: Mb("greenvilleGame:parkourTime", {
                  seconds: Vb.toLocaleString(eb.code, {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1
                  })
                })
              })]
            }, `${wb}|${pb}`)
          }))
        })]
      })
    }
    const he = "greenvilleLevelUpsView";
    class ze {
      constructor(bb) {
        this.publishReveals = bb, this.reveals = [], this.token = 0, this.celebrate = (bb, wb) => {
          this.setReveals([...this.reveals, {
            kind: "celebration",
            celebration: bb,
            gold: wb,
            token: ++this.token
          }])
        }, this.revealed = bb => {
          this.setReveals(this.reveals.filter((wb => wb.token !== bb)))
        }
      }
      getReveals() {
        return this.reveals
      }
      EO(bb) {
        const [wb, Mb, eb] = bb;
        this.setReveals([...this.reveals, {
          kind: "levelUp",
          job: wb,
          level: Mb,
          unlocks: eb.map((bb => {
            let [wb, Mb, eb] = bb;
            return {
              item: wb,
              nameKey: Mb,
              level: eb
            }
          })),
          token: ++this.token
        }])
      }
      setReveals(bb) {
        this.reveals = bb, this.publishReveals(bb)
      }
    }
    const Xe = [{
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
      xe = {
        movedIn: "greenvilleGame:tutCelebrateMovedIn",
        firstGold: "greenvilleGame:tutCelebrateFirstGold",
        firstCar: "greenvilleGame:tutCelebrateFirstCar",
        lessonDone: "greenvilleGame:tutCelebrateLessonDone"
      },
      je = Array.from({
        length: 16
      }, ((bb, wb) => ({
        "--angle": 360 * wb / 16 + wb % 3 * 7 + "deg",
        "--distance": 5 + wb % 4 * 1.2 + "rem",
        "--delay": wb % 5 * 30 + "ms"
      })));

    function Ke(bb) {
      let {
        controller: wb
      } = bb;
      (0, Xb.h)(he, null);
      const Mb = wb.getReveals();
      return 0 === Mb.length ? null : (0, Nb.createPortal)((0, rb.jsx)(re, {
        reveal: Mb[0],
        onDone: wb.revealed
      }, Mb[0].token), document.body)
    }

    function re(bb) {
      let {
        reveal: wb,
        onDone: Mb
      } = bb;
      const {
        t: eb
      } = (0, jb.C)(), Hb = (0, lb.useRef)(null), pb = "levelUp" === wb.kind ? wb.unlocks : [], Vb = 0 === pb.length ? 2600 : 4200;
      return (0, lb.useLayoutEffect)((() => {
        const bb = document.querySelector(".GreenvilleTopBar");
        bb && Hb.current.style.setProperty("--top-bar-bottom", `${bb.getBoundingClientRect().bottom}px`)
      }), []), (0, lb.useEffect)((() => {
        const bb = Hb.current.animate(Xe, {
          duration: Vb,
          fill: "both"
        });
        return bb.onfinish = () => {
          Mb(wb.token)
        }, () => {
          bb.onfinish = null, bb.cancel()
        }
      }), [wb, Vb, Mb]), (0, rb.jsxs)("div", {
        ref: Hb,
        className: sb()("GreenvilleLevelUpReveal", {
          Plain: 0 === pb.length
        }),
        style: {
          "--reveal-ms": `${Vb}ms`,
          "--unlock-count": pb.length
        },
        role: "status",
        children: [pb.length > 0 && (0, rb.jsx)("div", {
          className: "GreenvilleLevelUpRevealStage",
          "aria-hidden": "true",
          children: (0, rb.jsxs)("div", {
            className: "GreenvilleLevelUpRevealMover",
            children: [(0, rb.jsx)("div", {
              className: "GreenvilleLevelUpRevealRays"
            }), (0, rb.jsx)("div", {
              className: "GreenvilleLevelUpRevealGlow"
            }), (0, rb.jsx)("div", {
              className: "GreenvilleLevelUpRevealSparks",
              children: je.map(((bb, wb) => (0, rb.jsx)("span", {
                style: bb
              }, wb)))
            }), (0, rb.jsx)("div", {
              className: "GreenvilleLevelUpRevealIcon",
              children: pb.map((bb => (0, rb.jsx)("div", {
                className: "GreenvilleLevelUpRevealItem",
                children: (0, rb.jsx)(zb.c, {
                  itemName: bb.item,
                  amount: 0
                })
              }, `${bb.level}|${bb.nameKey}`)))
            })]
          })
        }), (0, rb.jsxs)("div", {
          className: "GreenvilleLevelUpRevealText",
          children: ["levelUp" === wb.kind && (0, rb.jsx)(Re, {
            levelUp: wb
          }), "celebration" === wb.kind && (0, rb.jsx)("span", {
            className: "GreenvilleLevelUpRevealName FullyFancyText",
            children: eb(xe[wb.celebration], {
              gold: (0, vb.d)(wb.gold)
            })
          })]
        })]
      })
    }

    function Re(bb) {
      let {
        levelUp: {
          job: wb,
          level: Mb,
          unlocks: eb
        }
      } = bb;
      const {
        t: Hb
      } = (0, jb.C)(), pb = Hb(`greenvilleGame:${wb}`);
      return (0, rb.jsxs)(rb.Fragment, {
        children: [eb.length > 0 && (0, rb.jsxs)(rb.Fragment, {
          children: [(0, rb.jsx)("span", {
            className: "GreenvilleLevelUpRevealHeading SmallTextBold",
            children: Hb("greenvilleGame:levelUpUnlockHeading", {
              job: pb,
              level: 1 === eb.length ? eb[0].level : Mb
            })
          }), (0, rb.jsx)("span", {
            className: "GreenvilleLevelUpRevealNames",
            children: eb.map((bb => (0, rb.jsx)("span", {
              className: "GreenvilleLevelUpRevealName FullyFancyText",
              children: Hb(bb.nameKey)
            }, `${bb.level}|${bb.nameKey}`)))
          })]
        }), 0 === eb.length && (0, rb.jsxs)(rb.Fragment, {
          children: [(0, rb.jsx)("span", {
            className: "GreenvilleLevelUpRevealHeading SmallTextBold",
            children: Hb("greenvilleGame:levelUpHeading")
          }), (0, rb.jsx)("span", {
            className: "GreenvilleLevelUpRevealName FullyFancyText",
            children: Hb("greenvilleGame:jobLevel", {
              job: pb,
              level: Mb
            })
          })]
        })]
      })
    }
    const De = "greenvilleMarketView";

    function ce(bb) {
      return bb.map((bb => {
        let [wb, Mb, eb, Hb, pb, Vb] = bb;
        return {
          key: `${wb}|${Mb}|${eb}|${Hb}|${pb}`,
          icon: wb,
          target: [Mb, eb, Hb],
          item: pb,
          label: Vb
        }
      }))
    }
    class Ye {
      constructor(bb) {
        this.iI = bb, this.view = null
      }
      getView() {
        return this.view
      }
      EO(bb) {
        const wb = performance.now();
        switch (bb[0]) {
          case "hide":
            this.view = null;
            break;
          case "marketIdle":
            this.view = {
              job: null,
              waypoints: ce(bb[1])
            };
            break;
          case "marketPick":
          case "marketStock": {
            const [Mb, eb, Hb, pb] = bb;
            this.view = {
              job: {
                kind: Mb,
                goods: eb,
                tipEndsAt: pb > 0 ? wb + pb : 0
              },
              waypoints: ce(Hb)
            };
            break
          }
          case "marketDeliver": {
            const [Mb, eb, Hb, pb, Vb, gb] = bb;
            this.view = {
              job: {
                kind: Mb,
                parcelsLeft: eb,
                delivered: Hb,
                gold: pb,
                endsAt: wb + gb
              },
              waypoints: ce(Vb)
            };
            break
          }
        }
        this.iI(this.view)
      }
    }
    var Ze = Mb(37923);
    const fe = [{
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

    function Ae(bb) {
      var wb;
      let {
        controller: Mb
      } = bb;
      (0, Xb.h)(De, null);
      const eb = null === (wb = Mb.getView()) || void 0 === wb ? void 0 : wb.job;
      return "marketDeliver" !== (null === eb || void 0 === eb ? void 0 : eb.kind) ? null : (0, rb.jsx)(We, {
        endsAt: eb.endsAt,
        delivered: eb.delivered
      })
    }

    function We(bb) {
      let {
        endsAt: wb,
        delivered: Mb
      } = bb;
      const {
        t: eb
      } = (0, jb.C)(), Hb = Math.max(0, Math.ceil((0, Ze.e)(wb))), pb = (0, lb.useRef)(null), Vb = (0, lb.useRef)(null), gb = (0, lb.useRef)({
        endsAt: wb,
        delivered: Mb
      }), [Lb, Ib] = (0, lb.useState)(null);
      (0, lb.useLayoutEffect)((() => {
        const bb = Mb > gb.current.delivered ? Math.round((wb - gb.current.endsAt) / 1e3) : 0;
        var eb;
        (gb.current = {
          endsAt: wb,
          delivered: Mb
        }, bb <= 0) || (Ib((wb => {
          var Mb;
          return {
            seconds: bb,
            token: (null !== (Mb = null === wb || void 0 === wb ? void 0 : wb.token) && void 0 !== Mb ? Mb : 0) + 1
          }
        })), window.matchMedia("(prefers-reduced-motion: reduce)").matches || (null === (eb = Vb.current) || void 0 === eb || eb.cancel(), Vb.current = pb.current.animate(fe, {
          duration: 420,
          easing: "ease-out"
        })))
      }), [wb, Mb]), (0, lb.useEffect)((() => () => {
        var bb;
        null === (bb = Vb.current) || void 0 === bb || bb.cancel()
      }), []);
      const Ob = Math.floor(Hb / 60);
      return (0, rb.jsxs)("div", {
        className: sb()("GreenvilleMarketCountdown", {
          Urgent: Hb < 10
        }),
        role: "timer",
        children: [(0, rb.jsxs)("div", {
          ref: pb,
          className: "GreenvilleMarketCountdownTime FullyFancyText",
          children: [Ob, ":", String(Hb % 60).padStart(2, "0")]
        }), null !== Lb && (0, rb.jsx)("div", {
          className: "GreenvilleMarketCountdownAdded FullyFancyText",
          onAnimationEnd: () => {
            Ib(null)
          },
          children: eb("greenvilleGame:marketCountdownAdded", {
            seconds: Lb.seconds
          })
        }, Lb.token)]
      })
    }

    function Je(bb) {
      var wb;
      let {
        controller: Mb
      } = bb;
      (0, Xb.h)(De, null);
      const eb = null === (wb = Mb.getView()) || void 0 === wb ? void 0 : wb.job;
      return eb ? (0, rb.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: ["marketDeliver" === eb.kind && (0, rb.jsx)(ve, {
          shift: eb
        }), "marketDeliver" !== eb.kind && (0, rb.jsx)(Se, {
          task: eb
        })]
      }) : null
    }

    function Se(bb) {
      let {
        task: wb
      } = bb;
      const {
        t: Mb
      } = (0, jb.C)(), eb = "marketPick" === wb.kind && wb.goods.every((bb => {
        let [, wb] = bb;
        return 0 === wb
      }));
      return (0, rb.jsxs)(rb.Fragment, {
        children: [(0, rb.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: Mb("marketPick" === wb.kind ? "greenvilleGame:marketPanelOrder" : "greenvilleGame:marketPanelCrate")
        }), (0, rb.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: wb.goods.map((bb => {
            let [wb, eb, Hb] = bb;
            return (0, rb.jsxs)("li", {
              className: sb()("GreenvilleTrackerRow", {
                Done: 0 === eb
              }),
              children: [(0, rb.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, rb.jsx)(zb.c, {
                  itemName: wb,
                  amount: 0
                })
              }), (0, rb.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: (0, uM.f)(Mb, wb)
              }), (0, rb.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [Hb - eb, "/", Hb]
              })]
            }, wb)
          }))
        }), eb && (0, rb.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: Mb("greenvilleGame:marketPanelReturn")
        }), !eb && 0 !== wb.tipEndsAt && (0, rb.jsx)(Ne, {
          endsAt: wb.tipEndsAt
        })]
      })
    }

    function Ne(bb) {
      let {
        endsAt: wb
      } = bb;
      const {
        t: Mb
      } = (0, jb.C)(), eb = Math.ceil((0, Ze.e)(wb));
      return eb <= 0 ? null : (0, rb.jsx)("div", {
        className: "GreenvilleTrackerTip",
        children: Mb("greenvilleGame:marketPanelTip", {
          seconds: eb
        })
      })
    }

    function ve(bb) {
      let {
        shift: wb
      } = bb;
      const {
        t: Mb
      } = (0, jb.C)();
      return (0, rb.jsxs)(rb.Fragment, {
        children: [(0, rb.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: Mb("greenvilleGame:marketPanelDeliveries")
        }), (0, rb.jsxs)("ul", {
          className: "GreenvilleTrackerRows",
          children: [(0, rb.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, rb.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: Mb("greenvilleGame:marketPanelParcels")
            }), (0, rb.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: wb.parcelsLeft
            })]
          }), (0, rb.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, rb.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: Mb("greenvilleGame:marketPanelDelivered")
            }), (0, rb.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: wb.delivered
            })]
          }), (0, rb.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, rb.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: Mb("greenvilleGame:marketPanelEarned")
            }), (0, rb.jsx)("span", {
              className: "GreenvilleTrackerIcon",
              "aria-hidden": "true",
              children: (0, rb.jsx)(zb.c, {
                itemName: "Gold Coin",
                amount: 0
              })
            }), (0, rb.jsx)("span", {
              className: "GreenvilleTrackerValue Gold",
              children: (0, vb.d)(wb.gold)
            })]
          })]
        }), 0 === wb.parcelsLeft && (0, rb.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: Mb("greenvilleGame:marketPanelBackToBay")
        })]
      })
    }
    const Qe = {
      marketNpc: "comment-dots",
      marketShelf: "cart-shopping",
      marketHouse: "house",
      marketDepot: "truck"
    };

    function Ge(bb) {
      var wb;
      let {
        market: Mb,
        markers: eb
      } = bb;
      (0, Xb.h)(De, null);
      const Hb = null === (wb = Mb.getView()) || void 0 === wb ? void 0 : wb.waypoints;
      return null !== Hb && void 0 !== Hb && Hb.length ? (0, rb.jsx)("div", {
        className: "GreenvilleMarketWaypoints",
        children: Hb.map((bb => (0, rb.jsx)(qe, {
          waypoint: bb,
          bind: eb.waypoints.bindMarker(bb.key)
        }, bb.key)))
      }) : null
    }

    function qe(bb) {
      let {
        waypoint: {
          icon: wb,
          item: Mb,
          label: eb
        },
        bind: Hb
      } = bb;
      return (0, rb.jsxs)(ae, {
        bind: Hb,
        house: "marketHouse" === wb,
        label: eb,
        children: [null !== Mb && (0, rb.jsx)("span", {
          className: "GreenvilleMarketWaypointItem",
          children: (0, rb.jsx)(zb.c, {
            itemName: Mb,
            amount: 0
          })
        }), null === Mb && (0, rb.jsx)(pw.b, {
          name: Qe[wb]
        })]
      })
    }

    function ae(bb) {
      let {
        bind: wb,
        house: Mb,
        label: eb,
        extra: Hb,
        children: pb
      } = bb;
      return (0, rb.jsxs)("div", {
        ref: wb,
        className: sb()("GreenvilleMarketWaypoint", {
          House: Mb
        }),
        children: [Mb && (0, rb.jsx)(ie, {}), (0, rb.jsx)("div", {
          className: "GreenvilleMarketWaypointBadge",
          children: pb
        }), Hb, (0, rb.jsxs)("div", {
          className: "GreenvilleMarketWaypointLabels",
          children: [null !== eb && (0, rb.jsx)("span", {
            className: "GreenvilleMarketWaypointLabel SmallTextBold",
            children: eb
          }), (0, rb.jsx)("span", {
            className: "GreenvilleMarketWaypointDistance SmallTextBold"
          })]
        })]
      })
    }

    function ie() {
      const bb = (0, lb.useRef)(null);
      return (0, rM.c)(bb), (0, rb.jsx)("span", {
        ref: bb,
        className: "GreenvilleMarketWaypointPulse"
      })
    }
    const ue = {
      labels: "GreenvilleMarketWaypointLabels",
      distance: "GreenvilleMarketWaypointDistance"
    };
    class de {
      constructor(bb) {
        this.market = bb, this.waypoints = new Cb.e(ue, "greenvilleGame:marketDistance")
      }
      frame(bb, wb) {
        this.waypoints.setRender(bb);
        const Mb = this.market.getView();
        if (Mb && this.waypoints.hasMarkers())
          for (const {
              key: eb,
              target: Hb
            }
            of Mb.waypoints) this.waypoints.update(eb, Hb[0], Hb[1] + 1, Hb[2], wb)
      }
    }
    const Pe = "greenvilleMapView",
      ne = {
        open: !1
      };
    class ye extends ww {
      constructor(bb, wb, Mb) {
        super(ne, bb, wb), this.nav = Mb, this.open = () => {
          this.show({
            open: !0
          })
        }
      }
      dropPresses() {}
      set(bb) {
        super.set(bb), this.nav.setFullMapOpen(bb.open)
      }
    }
    var oe = Mb(39923),
      Te = Mb(39918);
    const ke = {
      Street: "St",
      Avenue: "Ave",
      Road: "Rd",
      Lane: "Ln"
    };

    function bH(bb, wb) {
      return wb.map(((wb, Mb) => {
        const eb = wb.lastIndexOf(" "),
          Hb = wb.slice(eb + 1);
        let pb = ke[Hb];
        return void 0 === pb && (console.warn(`Greenville street "${wb}" has no suffix abbreviation`), pb = Hb), {
          axis: bb,
          line: Mb,
          name: wb,
          shortName: wb.slice(0, eb),
          suffix: pb
        }
      }))
    }
    const wH = {
        eastWest: bH("eastWest", ["Hillcrest Road", "Oak Street", "Main Street", "Elm Street", "Harbour Road"]),
        northSouth: bH("northSouth", ["Willow Lane", "Birch Avenue", "Market Street", "Maple Avenue", "Station Road"])
      },
      MH = {
        kind: "outside"
      };

    function eH(bb, wb, Mb) {
      return 100 * (bb + 1) + wb + (Mb ? 1 : 0)
    }

    function HH(bb, wb, Mb, eb) {
      return {
        x0: ee + bb,
        z0: ee + wb,
        x1: ee + bb + Mb - 1,
        z1: ee + wb + eb - 1
      }
    }
    let pH = null;

    function VH(bb, wb, Mb, eb) {
      if (eb && "outside" !== eb.kind) {
        const {
          box: Mb
        } = eb;
        if (!ge(Mb, bb, wb) && ge({
            x0: Mb.x0 - 2,
            z0: Mb.z0 - 2,
            x1: Mb.x1 + 2,
            z1: Mb.z1 + 2
          }, bb, wb)) return eb
      }
      return function(bb, wb, Mb) {
        const {
          eastWest: eb,
          northSouth: Hb
        } = wH;
        switch (bb.kind) {
          case "outside":
            return MH;
          case "street": {
            const wb = bb.segment * pe + He,
              Mb = bb.line * pe;
            return {
              kind: "street",
              box: "eastWest" === bb.axis ? HH(wb, Mb, pe - He, He) : HH(Mb, wb, He, pe - He),
              street: wH[bb.axis][bb.line],
              block: 100 * (bb.segment + 1)
            }
          }
          case "junction": {
            const pb = HH(bb.column * pe, bb.row * pe, He, He),
              Vb = [eb[bb.row], Hb[bb.column]],
              gb = "street" === (null === Mb || void 0 === Mb ? void 0 : Mb.kind) ? Mb.street : "junction" === (null === Mb || void 0 === Mb ? void 0 : Mb.kind) ? Mb.along : null,
              lb = gb && Vb.includes(gb) ? gb : Math.abs(Math.sin(wb)) > Math.abs(Math.cos(wb)) ? Vb[0] : Vb[1];
            return {
              kind: "junction",
              box: pb,
              along: lb,
              cross: lb === Vb[0] ? Vb[1] : Vb[0]
            }
          }
          case "plot": {
            const wb = bb.column * pe + He + bb.dx * He,
              Mb = bb.row * pe + He + bb.dz * He,
              Hb = 0 === bb.dz;
            return {
              kind: "plot",
              box: HH(wb, Mb, He, He),
              plotId: (pb = (ee + wb) / He, Vb = (ee + Mb) / He, pH || (pH = new Map(Oe().map(((bb, wb) => {
                let {
                  chunk: Mb
                } = bb;
                return [`${Mb[0]},${Mb[2]}`, wb + 1]
              })))), pH.get(`${pb},${Vb}`)),
              number: eH(bb.column, 0 === bb.dx ? 30 : 70, Hb),
              street: eb[Hb ? bb.row : bb.row + 1],
              neighbourhood: bb.neighbourhood
            }
          }
          case "tile": {
            const {
              column: wb,
              row: Mb,
              district: Hb
            } = bb;
            return {
              kind: "tile",
              box: HH(wb * pe + He, Mb * pe + He, pe - He, pe - He),
              district: Hb,
              number: eH(wb, 50, !0),
              street: eb[Mb]
            }
          }
        }
        var pb, Vb
      }(function(bb, wb) {
        const Mb = bb - ee,
          eb = wb - ee;
        if (Mb < 0 || eb < 0 || Mb >= Ve || eb >= Ve) return {
          kind: "outside"
        };
        const Hb = Math.floor(Mb / pe),
          pb = Math.floor(eb / pe),
          Vb = Mb - Hb * pe - He,
          gb = eb - pb * pe - He;
        if (Vb < 0 && gb < 0) return {
          kind: "junction",
          column: Hb,
          row: pb
        };
        if (gb < 0) return {
          kind: "street",
          axis: "eastWest",
          line: pb,
          segment: Hb
        };
        if (Vb < 0) return {
          kind: "street",
          axis: "northSouth",
          line: Hb,
          segment: pb
        };
        const lb = le[pb][Hb];
        return "residential" === lb.kind ? {
          kind: "plot",
          column: Hb,
          row: pb,
          dx: Math.floor(Vb / He),
          dz: Math.floor(gb / He),
          neighbourhood: lb.name
        } : {
          kind: "tile",
          column: Hb,
          row: pb,
          district: lb.district
        }
      }(bb, wb), Mb, eb)
    }

    function gH(bb) {
      switch (bb.kind) {
        case "outside":
          return "outside";
        case "junction":
          return `junction|${bb.along.name}|${bb.cross.name}`;
        case "plot":
        case "tile":
          return `${bb.kind}|${bb.number}|${bb.street.name}`;
        case "street":
          return `street|${bb.block}|${bb.street.name}`
      }
    }
    const lH = be.e.gO,
      LH = {
        origin: ee,
        size: Ve,
        te: -2 * lH,
        Ce: 4 * lH
      },
      IH = new Set(["quarry", "industry"]);
    const OH = {
        origin: 1562 * lH,
        size: 13 * lH,
        te: 0,
        Ce: 5 * lH
      },
      UH = Mb.p + "static/media/greenvilleSewers.9ca15fd9e781052910dd.png";
    var tH = Mb(39828),
      CH = Mb(39920),
      EH = Mb(40872),
      FH = Mb(40865),
      BH = Mb(294);
    const sH = be.e.gO;
    class mH {
      constructor(bb, wb, Mb) {
        this.api = bb, this.map = wb, this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.image = this.context.createImageData(sH, sH), this.columns = void 0, this.lowestLayer = void 0, this.layers = void 0, this.plots = void 0, this.baked = null, this.BC = !1, this.ids = new Uint16Array(sH * sH), this.tops = new Int32Array(sH * sH), this.edgeIds = new Uint16Array(sH), this.edgeTops = new Int32Array(sH), this.heights = void 0, this.versions = void 0, this.current = void 0, this.stale = void 0, this.painted = void 0, this.order = [], this.focus = {
          column: -1,
          row: -1
        }, this.colours = null, this.host = null, this.timer = null, this.cancelIdle = null, this.pass = bb => {
          this.cancelIdle = null;
          let wb = !1;
          const Mb = performance.now();
          let eb = !0;
          if (this.colours && this.host && this.host.clientWidth > 0)
            for (const Hb of this.order) {
              if (!this.readVersions(Hb)) continue;
              const pb = !bb.didTimeout && bb.timeRemaining() < 2;
              if (!eb && (pb || performance.now() - Mb > 6)) {
                wb = !0;
                break
              }
              eb = !1, this.versions.set(this.current, Hb * this.layers), this.paint(Hb % this.columns, Math.floor(Hb / this.columns), this.colours.lookup, this.colours.drawn)
            }
          this.schedule(wb ? 0 : 500)
        };
        const {
          origin: eb,
          size: Hb,
          te: pb,
          Ce: Vb
        } = wb.area;
        this.columns = Hb / sH, this.lowestLayer = pb / sH, this.layers = (Vb - pb) / sH, this.plots = new Set(Mb.map((bb => {
          let {
            chunkX: wb,
            chunkZ: Mb
          } = bb;
          return Mb * this.columns + wb
        }))), this.heights = new Int32Array(Hb * Hb).fill(EH.f), this.versions = new Float64Array(this.columns * this.columns * this.layers).fill(NaN), this.current = new Float64Array(this.layers), this.stale = new Uint8Array(this.columns * this.columns), this.painted = new Uint8Array(this.columns * this.columns), this.canvas.width = Hb, this.canvas.height = Hb, this.canvas.className = "GreenvilleNavMapTerrain", 0 !== Mb.length ? (this.focusOn(eb + Hb / 2, eb + Hb / 2), Promise.all([(0, FH.b)(), this.drawBakedMap()]).then((bb => {
          let [wb] = bb;
          this.colours = {
            lookup: wb,
            drawn: wb.getDrawnIds()
          }
        }), (bb => {
          console.error("Greenville map: block colours failed to load", bb)
        })), this.schedule(0)) : this.drawBakedMap()
      }
      mount(bb) {
        this.host = bb, null === bb || void 0 === bb || bb.replaceChildren(this.canvas)
      }
      focusOn(bb, wb) {
        const {
          columns: Mb
        } = this, {
          origin: eb
        } = this.map.area, Hb = Math.min(Mb - 1, Math.max(0, Math.floor((bb - eb) / sH))), pb = Math.min(Mb - 1, Math.max(0, Math.floor((wb - eb) / sH)));
        Hb === this.focus.column && pb === this.focus.row || (this.focus = {
          column: Hb,
          row: pb
        }, this.order = [...this.plots].sort(((bb, wb) => Math.hypot(bb % Mb - Hb, Math.floor(bb / Mb) - pb) - Math.hypot(wb % Mb - Hb, Math.floor(wb / Mb) - pb))))
      }
      forget(bb, wb) {
        const Mb = wb * this.columns + bb;
        this.stale[Mb] = 1, this.versions.fill(NaN, Mb * this.layers, (Mb + 1) * this.layers)
      }
      dispose() {
        var bb, wb;
        null !== this.timer && clearTimeout(this.timer), null === (bb = this.cancelIdle) || void 0 === bb || bb.call(this), this.host = null, this.BC = !0, null === (wb = this.baked) || void 0 === wb || wb.close(), this.baked = null
      }
      async drawBakedMap() {
        try {
          const bb = await fetch(this.map.imageUrl);
          if (!bb.ok) throw new Error(`HTTP ${bb.status}`);
          const wb = await createImageBitmap(await bb.blob(), {
            colorSpaceConversion: "none"
          });
          if (this.BC) return void wb.close();
          this.baked = wb, this.context.drawImage(wb, 0, 0)
        } catch (bb) {
          console.error("Greenville map: the baked map failed to load", bb)
        }
      }
      schedule(bb) {
        this.timer = setTimeout((() => {
          this.timer = null, this.cancelIdle = (0, BH.b)(this.pass, {
            timeoutMs: 1e3
          })
        }), bb)
      }
      readVersions(bb) {
        const {
          origin: wb
        } = this.map.area, Mb = wb / sH + bb % this.columns, eb = wb / sH + Math.floor(bb / this.columns);
        let Hb = !1;
        for (let Vb = 0; Vb < this.layers; Vb++) {
          var pb;
          const wb = null !== (pb = this.api.getChunkVersion(Mb, this.lowestLayer + Vb, eb)) && void 0 !== pb ? pb : 0;
          this.current[Vb] = wb, Hb ||= wb !== this.versions[bb * this.layers + Vb]
        }
        return Hb
      }
      repaintIfPainted(bb, wb) {
        const Mb = wb * this.columns + bb;
        bb < this.columns && wb < this.columns && 1 === this.painted[Mb] && this.versions.fill(NaN, Mb * this.layers, (Mb + 1) * this.layers)
      }
      storeHeights(bb, wb) {
        const {
          size: Mb
        } = this.map.area;
        let eb = !1,
          Hb = !1;
        for (let pb = 0; pb < this.ids.length; pb++) {
          const Vb = pb % sH,
            gb = Math.floor(pb / sH),
            lb = (wb * sH + gb) * Mb + bb * sH + Vb,
            Lb = 0 === this.ids[pb] ? EH.f : this.tops[pb];
          this.heights[lb] !== Lb && (eb ||= Vb === sH - 1, Hb ||= gb === sH - 1, this.heights[lb] = Lb)
        }
        eb && this.repaintIfPainted(bb + 1, wb), Hb && this.repaintIfPainted(bb, wb + 1)
      }
      readEdgeHeights(bb, wb, Mb, eb, Hb) {
        const {
          origin: pb,
          size: Vb,
          te: gb,
          Ce: lb
        } = this.map.area;
        this.api.readColumnTops(bb, wb, Mb, eb, gb, lb, Hb, this.edgeIds, this.edgeTops);
        const Lb = Mb - bb;
        for (let Ib = 0; Ib < sH; Ib++) {
          const Mb = (wb - pb + Math.floor(Ib / Lb)) * Vb + bb - pb + Ib % Lb;
          this.heights[Mb] = 0 === this.edgeIds[Ib] ? EH.f : this.edgeTops[Ib]
        }
      }
      paint(bb, wb, Mb, eb) {
        const {
          origin: Hb,
          size: pb,
          te: Vb,
          Ce: gb
        } = this.map.area, lb = wb * this.columns + bb, Lb = 1 === this.stale[lb];
        this.stale[lb] = 0;
        const Ib = Hb + bb * sH,
          Ob = Hb + wb * sH,
          Ub = pb - (bb + 1) * sH,
          {
            ids: tb,
            tops: Cb,
            heights: Eb
          } = this;
        if (0 === this.current[0 - this.lowestLayer]) return void(Lb && (this.context.clearRect(Ub, wb * sH, sH, sH), this.baked && this.context.drawImage(this.baked, Ub, wb * sH, sH, sH, Ub, wb * sH, sH, sH), tb.fill(0), this.storeHeights(bb, wb)));
        this.painted[lb] = 1, this.api.readColumnTops(Ib, Ob, Ib + sH, Ob + sH, Vb, gb, eb, tb, Cb), this.storeHeights(bb, wb), this.plots.has(lb - 1) || this.readEdgeHeights(Ib - 1, Ob, Ib, Ob + sH, eb), this.plots.has(lb - this.columns) || this.readEdgeHeights(Ib, Ob - 1, Ib + sH, Ob, eb);
        const Fb = this.image.data;
        for (let Bb = 0; Bb < sH; Bb++)
          for (let eb = 0; eb < sH; eb++) {
            const Hb = 4 * (Bb * sH + sH - 1 - eb),
              Vb = tb[Bb * sH + eb];
            if (0 === Vb) {
              Fb[Hb + 3] = 0;
              continue
            }
            const gb = bb * sH + eb,
              lb = wb * sH + Bb;
            Mb.drawPixel(Fb, Hb, Vb, Cb[Bb * sH + eb], Eb[(lb - 1) * pb + gb], Eb[lb * pb + gb - 1])
          }
        this.context.putImageData(this.image, Ub, wb * sH)
      }
    }
    const hH = 5 * Math.PI / 180,
      zH = {
        u: NaN,
        v: NaN,
        left: NaN,
        top: NaN,
        scale: NaN,
        heading: NaN
      };
    class XH {
      constructor(bb) {
        this.onTerrainHost = bb, this.terrainHost = null, this.XO = null, this.worldResize = null, this.worldPx = {
          width: 0,
          height: 0
        }, this.arrowTrack = null, this.arrow = null, this.written = {
          ...zH
        }, this.goalTrack = null, this.goal = null, this.mountTerrain = bb => {
          this.terrainHost = bb, this.onTerrainHost()
        }, this.mountWorld = bb => {
          var wb;
          this.XO = bb, this.written = {
            ...zH
          }, null === (wb = this.worldResize) || void 0 === wb || wb.disconnect(), this.worldResize = null, bb && (this.worldResize = new ResizeObserver((bb => {
            let [wb] = bb;
            this.worldPx = {
              width: wb.contentRect.width,
              height: wb.contentRect.height
            }, this.written.scale = NaN
          })), this.worldResize.observe(bb))
        }, this.mountArrow = bb => {
          var wb;
          this.arrowTrack = bb, this.arrow = null !== (wb = null === bb || void 0 === bb ? void 0 : bb.querySelector(".GreenvilleNavArrow")) && void 0 !== wb ? wb : null, this.written = {
            ...zH
          }
        }, this.mountGoal = bb => {
          this.goalTrack = bb, bb && (bb.hidden = null === this.goal), this.written.left = NaN
        }
      }
      setGoal(bb) {
        this.goal = bb, this.goalTrack && (this.goalTrack.hidden = null === bb), this.written.left = NaN
      }
      write(bb, wb, Mb, eb, Hb, pb, Vb) {
        const {
          XO: gb,
          arrowTrack: lb,
          arrow: Lb,
          written: Ib
        } = this;
        if (!gb || !lb || !Lb) return;
        const Ob = Math.abs(Math.atan2(Math.sin(Mb - Ib.heading), Math.cos(Mb - Ib.heading))),
          Ub = pb !== Ib.scale,
          {
            width: tb,
            height: Cb
          } = this.worldPx,
          Eb = Ub || !(Math.hypot((eb - Ib.left) * tb, (Hb - Ib.top) * Cb) < 1),
          Fb = Ub || !(Math.hypot(bb - Ib.u, wb - Ib.v) * Math.min(tb, Cb) * pb < 1);
        Eb && (this.written.left = eb, this.written.top = Hb, gb.style.transform = `translate(${100*eb}%, ${100*Hb}%) scale(${pb})`, this.writeGoal(eb, Hb, pb)), Fb && (this.written.u = bb, this.written.v = wb, lb.style.transform = `translate(${100*bb}%, ${100*wb}%)`), (Ub || Ob >= hH) && (Lb.style.transform = `translate(-50%, -50%) scale(${1/pb}) rotate(${180+180*Mb/Math.PI}deg)`, this.written.heading = Mb), Ub && (gb.style.setProperty("--greenville-map-unzoom", String(1 / pb)), gb.style.setProperty("--greenville-map-fade", String(Vb)), this.written.scale = pb)
      }
      writeGoal(bb, wb, Mb) {
        const {
          goal: eb,
          goalTrack: Hb
        } = this;
        if (!eb || !Hb) return;
        const pb = bb + eb[0] * Mb - .5,
          Vb = wb + eb[1] * Mb - .5,
          gb = Math.min(1, .4 / Math.max(Math.abs(pb), Math.abs(Vb)));
        Hb.style.transform = `translate(${100*(.5+pb*gb)}%, ${100*(.5+Vb*gb)}%)`
      }
    }
    const xH = "greenvilleNavAddress",
      jH = "greenvilleNavPlots",
      KH = "greenvilleNavMarkers",
      rH = {
        kind: "outside"
      };
    class RH {
      constructor(bb, wb, Mb, eb) {
        this.map = bb, this.publishAddress = wb, this.publishPlots = Mb, this.publishMarkers = eb, this.address = rH, this.addressKey = gH(rH), this.block = {
          x: NaN,
          y: NaN,
          z: NaN
        }, this.inSewers = !1, this.plots = void 0, this.markers = [], this.terrain = null, this.minimap = void 0, this.homeGate = null, this.fullMap = void 0, this.fullMapOpen = !1, this.fullMapZoom = CH.f, this.zoom = 0, this.lastFrameMs = NaN, this.reducedMotion = null, this.logLocalScale = void 0, this.placeTerrain = () => {
          this.terrain.mount(this.fullMapOpen && this.fullMap.terrainHost ? this.fullMap.terrainHost : this.minimap.terrainHost)
        }, this.minimap = new XH(this.placeTerrain), this.fullMap = new XH(this.placeTerrain);
        const {
          origin: Hb,
          size: pb
        } = bb.area;
        this.logLocalScale = Math.log(pb / 80), this.plots = {
          plots: (bb.city ? Oe() : []).map(((bb, wb) => {
            let {
              chunk: Mb,
              facing: eb
            } = bb;
            return {
              plotId: wb + 1,
              chunkX: Mb[0] - Hb / be.e.gO,
              chunkZ: Mb[2] - Hb / be.e.gO,
              facing: eb,
              state: "vacant",
              mine: !1
            }
          })),
          animate: !1
        }
      }
      start(bb) {
        this.terrain = new mH(bb, this.map, this.plots.plots)
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
      setGoal(bb) {
        const {
          origin: wb,
          size: Mb
        } = this.map.area;
        this.minimap.setGoal(bb && [(wb + Mb - bb.x) / Mb, (bb.z - wb) / Mb])
      }
      EO(bb) {
        const wb = [...this.plots.plots];
        for (const [pb, Vb, gb] of "plotsAll" === bb[0] ? bb[1] : [bb[1]]) {
          const bb = wb[pb - 1];
          var Mb;
          if (bb.state === Vb && bb.mine === gb || (wb[pb - 1] = {
              ...bb,
              state: Vb,
              mine: gb
            }), bb.state !== Vb) null === (Mb = this.terrain) || void 0 === Mb || Mb.forget(bb.chunkX, bb.chunkZ)
        }
        this.plots = {
          plots: wb,
          animate: "plotsOne" === bb[0]
        };
        const eb = wb.find((bb => bb.mine)),
          Hb = this.map.area.origin / be.e.gO;
        this.homeGate = eb ? function(bb, wb, Mb) {
          const eb = bb[0] * Me,
            Hb = bb[2] * Me,
            pb = Me / 2 + .5;
          return "north" === wb ? [eb + pb, Hb - Mb] : [eb + Me - pb, Hb + Me + Mb]
        }([eb.chunkX + Hb, 0, eb.chunkZ + Hb], eb.facing, 1) : null, this.publishPlots(this.plots)
      }
      receiveMarkers(bb) {
        this.markers = bb.map((bb => {
          const [wb, Mb] = [this.toMapUnits(bb[2]), this.toMapUnits(bb[3])];
          return "mapPlace" === bb[0] ? {
            kind: "place",
            place: bb[1],
            x: wb,
            z: Mb
          } : {
            kind: "npc",
            face: null === bb[1] ? "npc" : `npc_${bb[1]}`,
            x: wb,
            z: Mb
          }
        })), this.publishMarkers(this.markers)
      }
      setFullMapOpen(bb) {
        bb !== this.fullMapOpen && (this.fullMapOpen = bb, this.fullMapZoom = CH.f, this.placeTerrain())
      }
      setFullMapZoom(bb) {
        this.fullMapZoom = bb
      }
      frame(bb, wb, Mb) {
        if (!wb) return;
        const eb = Math.floor(wb[0]),
          Hb = Math.floor(wb[1]),
          pb = Math.floor(wb[2]),
          {
            origin: Vb,
            size: gb
          } = this.map.area;
        if (eb !== this.block.x || Hb !== this.block.y || pb !== this.block.z) {
          eb === this.block.x && pb === this.block.z || (this.terrain.focusOn(eb, pb), this.address = VH(eb, pb, bb.cameraHeading, this.address)), this.block = {
            x: eb,
            y: Hb,
            z: pb
          };
          const wb = this.map.city && (lb = this.address, Lb = Hb, Ib = this.inSewers, !(Lb >= (Ib ? -1 : -3)) && ("street" === lb.kind || "junction" === lb.kind || "tile" === lb.kind && !IH.has(lb.district))),
            Mb = gH(this.address);
          Mb === this.addressKey && wb === this.inSewers || (this.addressKey = Mb, this.inSewers = wb, this.publishAddress(this.address))
        }
        var lb, Lb, Ib;
        const Ob = performance.now(),
          Ub = function(bb, wb, Mb, eb) {
            return !bb || eb || "tile" === wb.kind && "quarry" === wb.district ? 1 : Mb || "plot" !== wb.kind && "tile" !== wb.kind ? 0 : 1
          }(this.map.city, this.address, Mb, this.inSewers);
        if (this.zoom !== Ub) {
          this.reducedMotion ??= window.matchMedia("(prefers-reduced-motion: reduce)");
          const bb = this.reducedMotion.matches ? 1 : 1 - Math.exp(-(Ob - this.lastFrameMs) / 150);
          this.zoom += (Ub - this.zoom) * (Number.isNaN(bb) ? 1 : bb), Math.abs(Ub - this.zoom) < .002 && (this.zoom = Ub)
        }
        this.lastFrameMs = Ob;
        const tb = (Vb + gb - wb[0]) / gb,
          Cb = (wb[2] - Vb) / gb,
          Eb = bb.cameraHeading;
        if (this.fullMapOpen) {
          const {
            zoom: bb,
            x: wb,
            y: Mb
          } = this.fullMapZoom;
          this.fullMap.write(tb, Cb, Eb, wb, Mb, bb, 0)
        } else if (this.isMapShown()) {
          const bb = Math.exp(this.zoom * this.logLocalScale),
            wb = tb + (.5 - tb) * this.zoom - tb * bb,
            Mb = Cb + (.5 - Cb) * this.zoom - Cb * bb;
          this.minimap.write(tb, Cb, Eb, wb, Mb, bb, this.zoom)
        }
      }
      toMapUnits(bb) {
        return (bb - this.map.area.origin) / be.e.gO
      }
    }
    const DH = Ve / be.e.gO,
      cH = `matrix(-1 0 0 1 ${DH} 0)`,
      YH = .08,
      ZH = [{
        transform: "scaleY(0)"
      }, {
        transform: "scaleY(1)"
      }],
      fH = [{
        opacity: 1
      }, {
        opacity: 0
      }],
      AH = {
        quarry: Ue.mining,
        industry: Ue.demolition,
        market: Ue.market,
        lumberMill: Ue.woodcutting,
        farm: Ue.farming,
        dealership: "Light Blue Car"
      },
      WH = {
        drillBay: Ue.mining,
        vanBay: "Yellow Kart",
        carPickup: "Light Blue Car",
        demolitionPit: Ue.demolition,
        farmField: Ue.farming,
        woods: Ue.woodcutting
      },
      JH = le.flatMap(((bb, wb) => bb.map(((bb, Mb) => ({
        tile: bb,
        x: 1 + 3 * Mb,
        z: 1 + 3 * wb
      }))))),
      SH = JH.flatMap((bb => {
        let {
          tile: wb,
          x: Mb,
          z: eb
        } = bb;
        return "residential" === wb.kind ? [] : [{
          tile: wb,
          x: Mb,
          z: eb
        }]
      })),
      NH = JH.flatMap((bb => {
        let {
          tile: wb,
          x: Mb,
          z: eb
        } = bb;
        return "residential" === wb.kind ? [{
          name: wb.name,
          x: Mb,
          z: eb
        }] : []
      })),
      vH = [...wH.eastWest, ...wH.northSouth],
      QH = {
        "--greenville-sewers-fog": 32 / (2 * Ve) * 100 + "%"
      },
      GH = {
        "--greenville-map-tile": 2 / DH * 100 + "cqw"
      };

    function qH(bb, wb) {
      return {
        left: (DH - bb) / DH * 100 + "%",
        top: wb / DH * 100 + "%"
      }
    }

    function aH(bb) {
      let {
        axis: wb,
        line: Mb
      } = bb;
      const eb = .3,
        Hb = 3 * Mb + eb,
        pb = DH - .6;
      return "eastWest" === wb ? {
        x: eb,
        y: Hb,
        width: pb,
        height: .4
      } : {
        x: Hb,
        y: eb,
        width: .4,
        height: pb
      }
    }

    function iH(bb) {
      let {
        controller: wb,
        full: Mb = !1
      } = bb;
      const eb = Mb ? wb.fullMap : wb.minimap;
      (0, Xb.h)(jH, null), (0, Xb.h)(xH, null);
      const Hb = wb.isInSewers(),
        {
          plots: pb,
          animate: Vb
        } = wb.getPlots(),
        {
          city: gb
        } = wb.map;
      return (0, rb.jsxs)("div", {
        className: sb()("GreenvilleNavMap", {
          Full: Mb,
          Sewers: Hb
        }),
        style: Mb ? GH : void 0,
        children: [(0, rb.jsx)("div", {
          className: "GreenvilleNavMapWorld",
          ref: eb.mountWorld,
          children: (0, rb.jsxs)("div", {
            className: "GreenvilleNavMapPlane",
            children: [gb && (0, rb.jsx)("svg", {
              className: "GreenvilleNavMapPlan",
              viewBox: `0 0 ${DH} ${DH}`,
              preserveAspectRatio: "none",
              shapeRendering: "crispEdges",
              children: (0, rb.jsxs)("g", {
                transform: cH,
                children: [(0, rb.jsx)("rect", {
                  className: "GreenvilleNavGround",
                  width: DH,
                  height: DH
                }), vH.map((bb => (0, rb.jsx)("rect", {
                  className: "GreenvilleNavRoad",
                  ...aH(bb)
                }, bb.name))), SH.map((bb => {
                  let {
                    tile: wb,
                    x: Mb,
                    z: eb
                  } = bb;
                  return (0, rb.jsx)("rect", {
                    className: "GreenvilleNavDistrict",
                    "data-district": wb.district,
                    x: Mb,
                    y: eb,
                    width: 2,
                    height: 2
                  }, wb.district)
                })), pb.map((bb => (0, rb.jsx)(PH, {
                  plot: bb,
                  animate: Vb
                }, bb.plotId)))]
              })
            }), (0, rb.jsx)("div", {
              className: "GreenvilleNavMapTerrainHost",
              ref: eb.mountTerrain
            }), gb && (0, rb.jsxs)(rb.Fragment, {
              children: [(0, rb.jsx)("svg", {
                className: "GreenvilleNavMapLots",
                viewBox: `0 0 ${DH} ${DH}`,
                preserveAspectRatio: "none",
                children: (0, rb.jsx)("g", {
                  transform: cH,
                  children: pb.map((bb => (0, rb.jsx)("rect", {
                    className: sb()("GreenvilleNavLot", {
                      Vacant: "vacant" === bb.state,
                      Loading: "loading" === bb.state,
                      Mine: bb.mine
                    }),
                    x: bb.chunkX + YH,
                    y: bb.chunkZ + YH,
                    width: .84,
                    height: .84
                  }, bb.plotId)))
                })
              }), Hb && (0, rb.jsx)("img", {
                className: "GreenvilleNavSewers",
                src: UH,
                alt: "",
                draggable: !1
              }), SH.map((bb => {
                let {
                  tile: wb,
                  x: Mb,
                  z: eb
                } = bb;
                const Hb = AH[wb.district];
                return Hb && (0, rb.jsx)("span", {
                  className: "GreenvilleNavPin GreenvilleNavLandmark",
                  style: qH(Mb + 1, eb + 1),
                  children: (0, rb.jsx)(zb.c, {
                    itemName: Hb,
                    amount: 0
                  })
                }, wb.district)
              })), Mb && (0, rb.jsx)(uH, {}), (0, rb.jsx)(dH, {
                controller: wb
              })]
            }), (0, rb.jsxs)("div", {
              className: "GreenvilleNavArrowTrack",
              ref: eb.mountArrow,
              children: [Hb && (0, rb.jsx)("div", {
                className: "GreenvilleNavSewersFog",
                style: QH
              }), (0, rb.jsx)("div", {
                className: "GreenvilleNavArrow",
                children: (0, rb.jsx)("svg", {
                  viewBox: "-1 -1 2 2",
                  children: (0, rb.jsx)("polygon", {
                    points: "0,-0.8 0.62,0.62 0,0.28 -0.62,0.62"
                  })
                })
              })]
            }), pb.map((bb => bb.mine && (0, rb.jsx)("span", {
              className: "GreenvilleNavPin GreenvilleNavHome",
              style: qH(bb.chunkX + .5, bb.chunkZ + ("north" === bb.facing ? 0 : 1)),
              children: (0, rb.jsx)(pw.b, {
                name: "house"
              })
            }, bb.plotId)))]
          })
        }), !Mb && (0, rb.jsx)("div", {
          className: "GreenvilleNavGoalTrack",
          ref: wb.minimap.mountGoal,
          children: (0, rb.jsx)("span", {
            className: "GreenvilleNavPin GreenvilleNavGoal",
            children: (0, rb.jsx)(pw.b, {
              name: "flag"
            })
          })
        })]
      })
    }

    function uH() {
      return (0, rb.jsxs)(rb.Fragment, {
        children: [SH.map((bb => {
          let {
            tile: wb,
            x: Mb,
            z: eb
          } = bb;
          return (0, rb.jsx)("span", {
            className: sb()("GreenvilleNavPlaceName SmallTextBold", {
              UnderLandmark: wb.district in AH
            }),
            style: qH(Mb + 1, eb + 1),
            children: Le[wb.district]
          }, wb.district)
        })), NH.map((bb => {
          let {
            name: wb,
            x: Mb,
            z: eb
          } = bb;
          return (0, rb.jsx)("span", {
            className: "GreenvilleNavPlaceName Neighbourhood SmallTextLight",
            style: qH(Mb + 1, eb + 1),
            children: wb
          }, wb)
        }))]
      })
    }

    function dH(bb) {
      let {
        controller: wb
      } = bb;
      return (0, Xb.h)(KH, null), (0, rb.jsx)(rb.Fragment, {
        children: wb.getMarkers().map(((bb, wb) => (0, rb.jsxs)("span", {
          className: "GreenvilleNavPin GreenvilleNavMarker",
          style: qH(bb.x, bb.z),
          children: ["npc" === bb.kind && (0, rb.jsx)(tH.b, {
            icon: bb.face
          }), "place" === bb.kind && (0, rb.jsx)(zb.c, {
            itemName: WH[bb.place],
            amount: 0
          })]
        }, wb)))
      })
    }
    const PH = (0, lb.memo)((function(bb) {
      let {
        plot: wb,
        animate: Mb
      } = bb;
      const eb = (0, lb.useRef)(null),
        Hb = (0, lb.useRef)(wb.state),
        pb = (0, lb.useRef)(null);
      return (0, lb.useLayoutEffect)((() => {
        var bb;
        const Vb = Hb.current;
        Hb.current = wb.state, Vb !== wb.state && (null === (bb = pb.current) || void 0 === bb || bb.cancel(), Mb && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && ("built" === wb.state ? pb.current = eb.current.animate(ZH, {
          duration: 300,
          easing: "ease-out"
        }) : "vacant" === wb.state && (pb.current = eb.current.animate(fH, {
          duration: 400,
          easing: "ease-in"
        }))))
      }), [wb.state]), (0, lb.useEffect)((() => () => {
        var bb;
        null === (bb = pb.current) || void 0 === bb || bb.cancel()
      }), []), (0, rb.jsxs)(rb.Fragment, {
        children: [(0, rb.jsx)("rect", {
          className: "GreenvilleNavPlotGrass",
          x: wb.chunkX + YH,
          y: wb.chunkZ + YH,
          width: .84,
          height: .84
        }), (0, rb.jsx)("rect", {
          ref: eb,
          className: sb()("GreenvilleNavPlotRoof", {
            Loading: "loading" === wb.state,
            Built: "built" === wb.state,
            Mine: wb.mine
          }),
          x: wb.chunkX + YH,
          y: wb.chunkZ + YH,
          width: .84,
          height: .84
        })]
      })
    }));

    function nH(bb) {
      let {
        controller: wb,
        nav: Mb
      } = bb;
      const eb = (0, Xb.h)(Pe, wb.getView()),
        {
          t: Hb
        } = (0, jb.C)(),
        pb = (0, lb.useRef)(null);
      return (0, rb.jsx)(tw, {
        open: eb.open,
        onDismiss: wb.dismiss,
        title: Hb("greenvilleGame:map"),
        className: "GreenvilleMapBoard",
        children: (0, rb.jsxs)("div", {
          ref: pb,
          className: "GreenvilleMapFrame",
          children: [(0, rb.jsx)(iH, {
            controller: Mb,
            full: !0
          }), (0, rb.jsx)(yH, {
            frame: pb,
            nav: Mb
          })]
        })
      })
    }

    function yH(bb) {
      let {
        frame: wb,
        nav: Mb
      } = bb;
      const {
        t: eb
      } = (0, jb.C)(), Hb = (0, Te.b)(wb, !0, "", 1);
      return (0, lb.useEffect)((() => {
        Mb.setFullMapZoom(Hb.view)
      }), [Mb, Hb.view]), (0, rb.jsx)(oe.e, {
        zoom: Hb,
        zoomInLabel: eb("greenvilleGame:mapZoomIn"),
        zoomOutLabel: eb("greenvilleGame:mapZoomOut")
      })
    }
    var oH = Mb(2190),
      TH = Mb(1646);

    function kH(bb) {
      let {
        controller: wb,
        onOpen: Mb
      } = bb;
      const [eb, Hb] = (0, lb.useState)((() => wb.isMapShown()));
      (0, Xb.e)(xH, (() => {
        Hb(wb.isMapShown())
      }));
      const pb = (0, Gb.b)(),
        {
          isTouchScreen: Vb
        } = (0, mb.o)(["isTouchScreen"]),
        {
          t: gb
        } = (0, jb.C)(),
        [Lb, Ib] = (0, lb.useState)(null);
      return function(bb) {
        (0, lb.useLayoutEffect)((() => {
          if (!bb) return;
          const wb = bb.closest(".GreenvilleHudColumnStack"),
            Mb = new ResizeObserver((() => {
              bb.offsetWidth > 0 && wb.style.setProperty("--greenville-map-width", `${bb.offsetWidth}px`)
            }));
          return Mb.observe(bb), () => {
            Mb.disconnect()
          }
        }), [bb])
      }(Lb), (0, rb.jsx)("div", {
        className: sb()("GreenvilleNavRoom", {
          Hidden: pb || !eb
        }),
        children: (0, rb.jsxs)("button", {
          ref: Ib,
          type: "button",
          className: "GreenvilleNav",
          "aria-label": gb("greenvilleGame:map"),
          ...(0, TH.e)(Mb, "pointerup"),
          onMouseDown: bb => {
            bb.preventDefault()
          },
          children: [(0, rb.jsx)(iH, {
            controller: wb
          }), (0, rb.jsxs)("span", {
            className: "GreenvilleNavOpenHint",
            children: [Vb && (0, rb.jsx)(pw.b, {
              name: "expand",
              className: "GreenvilleNavExpandIcon"
            }), !Vb && (0, rb.jsx)(oH.e, {
              noaAction: "OpenTasksAndLeaderboard",
              padHidesKey: !0
            })]
          })]
        })
      })
    }
    const bp = Mb.p + "static/media/greenvilleCity.eadd76d06b8dfb594e19.png",
      wp = Mb.p + "static/media/greenvilleGrove.71253c8c4ae6c9cacba5.png",
      Mp = {
        area: LH,
        imageUrl: bp,
        city: !0
      },
      ep = {
        area: OH,
        imageUrl: wp,
        city: !1
      };

    function Hp(bb) {
      return bb >= 75 ? "face-smile" : bb >= 50 ? "face-diagonal-mouth" : bb >= 25 ? "face-worried" : "face-dizzy"
    }

    function pp(bb) {
      const wb = Math.round(bb);
      return `${wb>0?"+":""}${wb}%`
    }

    function Vp(bb) {
      let {
        controller: wb
      } = bb;
      (0, Xb.h)(nM, null);
      const Mb = wb.getMood();
      return Mb ? (0, rb.jsx)(hb.d, {
        placement: "statBars",
        children: (0, rb.jsx)(gp, {
          mood: Mb
        })
      }) : null
    }

    function gp(bb) {
      let {
        mood: wb
      } = bb;
      const {
        t: Mb
      } = (0, jb.C)(), eb = function(bb) {
        const [, wb] = (0, lb.useState)(0);
        return (0, lb.useEffect)((() => {
          const Mb = bb - performance.now();
          if (Mb <= 0) return;
          const eb = window.setTimeout((() => {
            wb((bb => bb + 1))
          }), Mb);
          return () => {
            window.clearTimeout(eb)
          }
        }), [bb]), bb > performance.now()
      }(wb.restedEndsAt), {
        energy: Hb,
        breakEvenEnergy: pb,
        luckPercent: Vb
      } = wb, gb = null !== Vb && void 0 !== Vb ? Vb : wb.earningsPercent;
      return (0, rb.jsxs)("div", {
        className: sb()("GreenvilleMoodChip", {
          Exhausted: Hb < 25,
          Rested: eb,
          Tired: !eb && Hb < pb && Hb >= 25,
          Drained: !eb && Hb < 25
        }),
        role: "img",
        "aria-label": Mb("greenvilleGame:moodEnergyLabel", {
          energy: Math.round(Hb)
        }),
        children: [(0, rb.jsx)(pw.b, {
          name: Hp(Hb),
          className: "GreenvilleMoodChipFace"
        }), eb && (0, rb.jsx)("span", {
          className: "GreenvilleMoodChipZz",
          children: Mb("greenvilleGame:moodRestedGlyph")
        }), (0, rb.jsxs)("div", {
          className: "GreenvilleMoodChipMeter",
          style: {
            "--greenville-break-even": `${pb}%`
          },
          children: [(0, rb.jsx)("div", {
            className: "GreenvilleMoodChipBar",
            children: (0, rb.jsx)("div", {
              className: "GreenvilleMoodChipFill",
              style: {
                transform: `scaleX(${Math.min(100,Math.max(0,Hb))/100})`
              }
            })
          }), (0, rb.jsx)("div", {
            className: "GreenvilleMoodChipTick"
          })]
        }), null === Vb && (0, rb.jsx)("span", {
          className: "GreenvilleMoodChipCoin",
          "aria-hidden": "true",
          children: (0, rb.jsx)(zb.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), (0, rb.jsxs)("span", {
          className: sb()("GreenvilleMoodChipEarnings", {
            Positive: Math.round(gb) > 0,
            Negative: Math.round(gb) < 0
          }),
          children: [null !== Vb && (0, rb.jsx)("span", {
            className: "GreenvilleMoodChipLuck",
            children: Mb("greenvilleGame:luck")
          }), pp(gb)]
        }), wb.adBoosted && (0, rb.jsx)("span", {
          className: "GreenvilleMoodChipBoost",
          children: (0, rb.jsx)(pw.b, {
            name: "bolt"
          })
        })]
      })
    }

    function lp(bb) {
      let {
        controller: wb
      } = bb;
      (0, Xb.h)(PM, null);
      const Mb = wb.getPlace();
      return "hudHome" !== (null === Mb || void 0 === Mb ? void 0 : Mb.kind) || null === Mb.runStartedAt ? null : (0, rb.jsx)(Lp, {
        startedAt: Mb.runStartedAt
      })
    }

    function Lp(bb) {
      let {
        startedAt: wb
      } = bb;
      const Mb = Math.max(0, Math.floor(-(0, Ze.e)(wb)));
      return (0, rb.jsx)("div", {
        className: "GreenvilleMarketCountdown",
        role: "timer",
        children: (0, rb.jsxs)("div", {
          className: "GreenvilleMarketCountdownTime FullyFancyText",
          children: [Math.floor(Mb / 60), ":", String(Mb % 60).padStart(2, "0")]
        })
      })
    }
    const Ip = "greenvilleSmugglerView",
      Op = {
        open: !1,
        deals: [],
        soldOutSlots: [],
        rotatesAtMs: 0,
        pending: !1,
        status: null,
        boughtSlot: null,
        boughtCount: 0
      };
    class Up extends ww {
      constructor(bb, wb, Mb, eb, Hb) {
        super(Op, bb, wb), this.onBought = Hb, this.purchases = void 0, this.day = 0, this.buy = bb => {
          const wb = this.getView();
          !wb.open || wb.pending || wb.soldOutSlots.includes(bb) || (this.purchases.push([this.day, bb]), this.set({
            ...wb,
            pending: !0
          }))
        }, this.syncPending = () => {
          const bb = this.getView();
          bb.open && this.set({
            ...bb,
            pending: !this.purchases.IO()
          })
        }, this.purchases = new kb(eb, (bb => {
          let [wb, eb] = bb;
          Mb(wb, eb)
        }), this.syncPending)
      }
      EO(bb) {
        if ("close" === bb[0]) return void this.close();
        const [, wb, Mb, eb, Hb, pb] = bb;
        null !== pb && this.purchases.takeAnswer();
        const Vb = this.getView();
        if (null !== pb && !Vb.open) return;
        this.day = wb;
        const [gb, lb] = null !== pb && void 0 !== pb ? pb : [null, null], Lb = {
          open: !0,
          deals: Mb,
          soldOutSlots: Hb,
          rotatesAtMs: Date.now() + eb,
          pending: !this.purchases.IO(),
          status: this.getStatus(gb, lb),
          boughtSlot: gb,
          boughtCount: Vb.boughtCount + (null === gb ? 0 : 1)
        };
        null === pb ? this.show(Lb) : this.set(Lb), null !== gb && this.onBought()
      }
      dropPresses() {
        this.purchases.clear()
      }
      getStatus(bb, wb) {
        return null !== bb ? {
          tone: "bought",
          key: "greenvilleGame:smugglerBought"
        } : null === wb ? null : {
          tone: "refused",
          key: wb
        }
      }
    }
    var tp = Mb(39934);
    const Cp = {
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

    function Ep(bb) {
      let {
        controller: wb
      } = bb;
      const Mb = (0, Xb.h)(Ip, wb.getView()),
        eb = ub(),
        {
          t: Hb
        } = (0, jb.C)();
      return (0, rb.jsx)(tp.e, {
        keys: Cp,
        open: Mb.open,
        onDismiss: wb.dismiss,
        wallet: [{
          itemName: ib,
          amount: eb
        }],
        deals: Mb.deals.map(((bb, wb) => {
          let [Hb, pb, Vb] = bb;
          return {
            slot: wb,
            itemName: Hb,
            displayName: (0, rb.jsx)(Ow, {
              item: Hb
            }),
            enchantmentTier: null,
            amount: pb,
            prices: [{
              itemName: ib,
              amount: Vb,
              owned: eb
            }],
            soldOut: Mb.soldOutSlots.includes(wb),
            justBought: Mb.boughtSlot === wb
          }
        })),
        rotatesAtMs: Mb.rotatesAtMs,
        status: null === Mb.status ? null : {
          tone: Mb.status.tone,
          text: Hb(Mb.status.key)
        },
        pending: Mb.pending,
        boughtCount: Mb.boughtCount,
        onBuy: wb.buy
      })
    }
    const Fp = [{
        transform: "translateY(100%)",
        opacity: 0
      }, {
        transform: "translateY(0)",
        opacity: 1
      }],
      Bp = [{
        transform: "translateY(-100%)",
        opacity: 0
      }, {
        transform: "translateY(0)",
        opacity: 1
      }];

    function sp(bb) {
      return bb ? `${bb.number}|${bb.street.name}` : ""
    }

    function mp(bb) {
      let {
        address: wb,
        large: Mb,
        rootRef: eb
      } = bb;
      const Hb = function(bb) {
          switch (bb.kind) {
            case "junction":
              return [{
                street: bb.along,
                number: null
              }, {
                street: bb.cross,
                number: null
              }];
            case "plot":
            case "tile":
              return [{
                street: bb.street,
                number: bb.number
              }, null];
            case "street":
              return [{
                street: bb.street,
                number: bb.block
              }, null]
          }
        }(wb),
        pb = Mb && "plot" === wb.kind ? wb.neighbourhood : null,
        Vb = (0, lb.useRef)(null),
        gb = (0, lb.useRef)(null),
        Lb = (0, lb.useRef)(Hb),
        Ib = (0, lb.useRef)({
          large: Mb,
          top: 0,
          height: 0
        }),
        Ob = (0, lb.useRef)([]),
        Ub = (0, lb.useRef)(null);
      (0, lb.useLayoutEffect)((() => {
        const bb = Lb.current;
        if (Lb.current = Hb, window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const wb = [];
        if (sp(bb[0]) !== sp(Hb[0]) && wb.push(Vb.current.animate(Fp, {
            duration: 180,
            easing: "ease-out"
          })), Hb[1] && !bb[1] && wb.push(gb.current.animate(Bp, {
            duration: 220,
            easing: "ease-out"
          })), wb.length > 0) {
          for (const bb of Ob.current) bb.cancel();
          Ob.current = wb
        }
      }), [sp(Hb[0]), sp(Hb[1])]), (0, lb.useLayoutEffect)((() => {
        var bb;
        const wb = eb.current,
          Hb = Ib.current;
        Ib.current = {
          large: Mb,
          top: wb.offsetTop,
          height: wb.offsetHeight
        }, Hb.large === Mb || 0 === Hb.height || 0 === wb.offsetHeight || window.matchMedia("(prefers-reduced-motion: reduce)").matches || (null === (bb = Ub.current) || void 0 === bb || bb.cancel(), Ub.current = wb.animate([{
          transform: `translateY(${Hb.top-wb.offsetTop}px) scale(${Hb.height/wb.offsetHeight})`
        }, {
          transform: "none"
        }], {
          duration: 260,
          easing: "ease-out"
        }))
      }), [Mb, pb, sp(Hb[0]), sp(Hb[1])]), (0, lb.useEffect)((() => {
        const bb = eb.current,
          wb = new ResizeObserver((() => {
            Ib.current = {
              ...Ib.current,
              top: bb.offsetTop,
              height: bb.offsetHeight
            }
          }));
        return wb.observe(bb.parentElement), () => {
          var bb;
          wb.disconnect();
          for (const wb of Ob.current) wb.cancel();
          null === (bb = Ub.current) || void 0 === bb || bb.cancel()
        }
      }), [eb]);
      const [tb, Cb] = Hb;
      return (0, rb.jsxs)("div", {
        ref: eb,
        className: sb()("GreenvilleNavSign", {
          Large: Mb
        }),
        children: [(0, rb.jsxs)("div", {
          className: "GreenvilleNavBlade",
          children: [null !== pb && (0, rb.jsx)("span", {
            className: "GreenvilleNavHeader",
            children: pb
          }), (0, rb.jsx)(hp, {
            blade: tb,
            textRef: Vb
          })]
        }), Cb && (0, rb.jsx)("div", {
          ref: gb,
          className: "GreenvilleNavBlade",
          children: (0, rb.jsx)(hp, {
            blade: Cb
          })
        })]
      })
    }

    function hp(bb) {
      let {
        blade: wb,
        textRef: Mb
      } = bb;
      return (0, rb.jsxs)("span", {
        ref: Mb,
        className: "GreenvilleNavBladeText",
        children: [null !== wb.number && (0, rb.jsx)("span", {
          className: "GreenvilleNavNumber",
          children: wb.number
        }), (0, rb.jsxs)("span", {
          className: "GreenvilleNavStreet",
          children: [wb.street.shortName, " ", (0, rb.jsx)("span", {
            className: "GreenvilleNavSuffix",
            children: wb.street.suffix
          })]
        })]
      })
    }
    const zp = "4rem",
      Xp = `translateY(${zp}) scale(1.4)`,
      xp = [{
        transform: Xp,
        opacity: 0
      }, {
        transform: Xp,
        opacity: 1,
        offset: .12
      }, {
        transform: Xp,
        opacity: 1,
        offset: .7,
        easing: "ease-in-out"
      }, {
        transform: "none",
        opacity: 1
      }],
      jp = [{
        opacity: 0
      }, {
        opacity: 1
      }];

    function Kp(bb) {
      var wb;
      let {
        controller: Mb,
        nav: eb
      } = bb;
      (0, Xb.h)(PM, null), (0, Xb.h)(xH, null);
      const {
        t: Hb
      } = (0, jb.C)(), pb = (0, Gb.b)(), Vb = (0, lb.useRef)(null), gb = (0, lb.useRef)(null), Lb = (0, lb.useRef)(null), Ib = (0, lb.useRef)(null), Ob = (0, lb.useRef)(null), Ub = (0, lb.useRef)(null), tb = (0, vw.h)("hiddenPlayerNames"), Cb = Mb.getPlace(), Eb = eb.getAddress(), Fb = eb.isInSewers(), Bb = Cb && function(bb, wb, Mb, eb, Hb) {
        if (eb) return {
          key: "sewers",
          name: bb("greenvilleGame:placeSewers"),
          eyebrow: null
        };
        switch (wb.kind) {
          case "hudTown":
            return "city" !== wb.place ? {
              key: wb.place,
              name: bb(`greenvilleGame:${wb.place}`),
              eyebrow: null
            } : "tile" === Mb.kind ? {
              key: `place|${Le[Mb.district]}`,
              name: Le[Mb.district],
              eyebrow: null
            } : "outside" === Mb.kind ? {
              key: "city|outside",
              name: bb("greenvilleGame:placeGreenville"),
              eyebrow: null
            } : null;
          case "hudJob": {
            const Mb = Ce(bb, wb.place);
            return {
              key: `place|${Mb}`,
              name: Mb,
              eyebrow: null
            }
          }
          case "hudHome": {
            const Mb = wb.isOwner ? bb("greenvilleGame:placeYourHouse") : bb("greenvilleGame:homePlayersHouse", {
                player: (0, kM.c)(wb.ownerName, Hb)
              }),
              eb = `home|${wb.ownerName}|${wb.houseName}`;
            return null === wb.houseName ? {
              key: eb,
              name: Mb,
              eyebrow: null
            } : {
              key: eb,
              name: wb.houseName,
              eyebrow: Mb
            }
          }
          case "hudSpleef":
            return {
              key: "spleef", name: bb("greenvilleGame:placeSpleef"), eyebrow: null
            }
        }
      }(Hb, Cb, Eb, Fb, tb), sb = Bb ? Bb.key : null;
      if ((0, lb.useLayoutEffect)((() => {
          var bb, wb, Mb, eb;
          if (null === sb) return null === (Mb = Ib.current) || void 0 === Mb || Mb.cancel(), void(null === (eb = Ob.current) || void 0 === eb || eb.cancel());
          if (Vb.current === sb) return;
          if (Vb.current = sb, pb) return;
          const Hb = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          null === (bb = Ib.current) || void 0 === bb || bb.cancel(), Ib.current = gb.current.animate(Hb ? jp : xp, {
            duration: Hb ? 400 : 2200
          }), null === (wb = Ob.current) || void 0 === wb || wb.cancel(), !Hb && Lb.current && (Ob.current = Lb.current.animate(function(bb) {
            const wb = `0 calc(${zp} + ${(1.4-1)*bb}px)`;
            return [{
              translate: "0 0",
              easing: "ease-out"
            }, {
              translate: wb,
              offset: .12
            }, {
              translate: wb,
              offset: .7,
              easing: "ease-in-out"
            }, {
              translate: "0 0"
            }]
          }(gb.current.offsetHeight), {
            duration: 2200
          }))
        }), [sb]), (0, lb.useEffect)((() => () => {
          var bb, wb;
          null === (bb = Ib.current) || void 0 === bb || bb.cancel(), null === (wb = Ob.current) || void 0 === wb || wb.cancel()
        }), []), !Cb) return null;
      let mb = "outside" === Eb.kind || Fb ? null : Eb;
      return !Bb || "plot" !== Eb.kind && "tile" !== Eb.kind ? Bb && mb && (null === (wb = Ub.current) || void 0 === wb ? void 0 : wb.key) === Bb.key && (mb = Ub.current.address) : Ub.current = {
        key: Bb.key,
        address: Eb
      }, (0, rb.jsxs)("div", {
        className: "GreenvilleTopBar",
        children: [Bb && (0, rb.jsx)(rp, {
          title: Bb,
          tagRef: gb,
          job: Fb || "hudJob" !== Cb.kind ? null : Cb,
          home: Fb || "hudHome" !== Cb.kind ? null : Cb,
          sewers: Fb
        }), mb && (0, rb.jsx)(mp, {
          address: mb,
          large: !Bb,
          rootRef: Lb
        })]
      })
    }

    function rp(bb) {
      let {
        title: wb,
        tagRef: Mb,
        job: eb,
        home: Hb,
        sewers: pb
      } = bb;
      return (0, rb.jsxs)("div", {
        ref: Mb,
        className: sb()("GreenvillePlaceTag", {
          Sewers: pb
        }),
        role: "status",
        children: [null !== wb.eyebrow && (0, rb.jsx)("span", {
          className: "GreenvillePlaceTagEyebrow",
          children: wb.eyebrow
        }), (0, rb.jsx)("strong", {
          className: "GreenvillePlaceTagName",
          children: wb.name
        }), eb && (0, rb.jsx)(Rp, {
          job: eb
        }), Hb && (0, rb.jsx)(cp, {
          home: Hb
        })]
      })
    }

    function Rp(bb) {
      let {
        job: wb
      } = bb;
      const {
        t: Mb
      } = (0, jb.C)(), {
        level: eb,
        expInto: Hb,
        expNeeded: pb
      } = wb, Vb = 0 === pb;
      return (0, rb.jsxs)("div", {
        className: "GreenvillePlaceTagRow",
        children: [(0, rb.jsx)("span", {
          className: "GreenvillePlaceTagJob",
          "aria-hidden": "true",
          children: (0, rb.jsx)(zb.c, {
            itemName: Ue[wb.job],
            amount: 0
          })
        }), (0, rb.jsx)("span", {
          className: "GreenvillePlaceTagLevel",
          children: Mb("greenvilleGame:levelShort", {
            level: eb
          })
        }), (0, rb.jsx)("div", {
          className: "GreenvillePlaceTagBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": Vb ? 100 : Math.round(Hb / pb * 100),
          children: (0, rb.jsx)("div", {
            className: "GreenvillePlaceTagBarFill",
            style: {
              transform: `scaleX(${Vb?1:Math.min(1,Hb/pb)})`
            }
          })
        }), !Vb && (0, rb.jsxs)("span", {
          className: "GreenvillePlaceTagExp",
          children: [(0, vb.d)(Hb), "/", (0, vb.d)(pb)]
        }), Vb && (0, rb.jsx)("span", {
          className: "GreenvillePlaceTagMax",
          children: Mb("greenvilleGame:levelMax")
        }), null !== wb.status && (0, rb.jsx)(Dp, {
          status: wb.status
        })]
      })
    }

    function Dp(bb) {
      let {
        status: wb
      } = bb;
      const {
        t: Mb
      } = (0, jb.C)();
      switch (wb.kind) {
        case "hudTier":
          return (0, rb.jsxs)("span", {
            className: sb()("GreenvillePlaceChip", {
              Locked: wb.locked
            }),
            children: [wb.locked && (0, rb.jsx)(pw.b, {
              name: "lock"
            }), Mb(`greenvilleGame:${wb.tierKey}`)]
          });
        case "hudBay":
          return (0, rb.jsxs)("span", {
            className: "GreenvillePlaceChip",
            children: [Mb("greenvilleGame:demolitionBayObject", {
              material: Mb(`greenvilleGame:${wb.materialKey}`),
              object: Mb(`greenvilleGame:${wb.objectKey}`)
            }), (0, rb.jsx)("span", {
              className: "GreenvillePlaceChipBar",
              children: (0, rb.jsx)("span", {
                className: "GreenvillePlaceChipBarFill",
                style: {
                  transform: `scaleX(${wb.percent/100})`
                }
              })
            })]
          });
        case "hudBayEmpty":
          return (0, rb.jsx)("span", {
            className: "GreenvillePlaceChip",
            children: Mb("greenvilleGame:demolitionYardIncoming")
          });
        case "hudFarmTier":
          return (0, rb.jsx)("span", {
            className: "GreenvillePlaceChip Golden",
            children: Mb("greenvilleGame:farmGoldenChance", {
              percent: wb.goldenPercent
            })
          })
      }
    }

    function cp(bb) {
      let {
        home: wb
      } = bb;
      const {
        t: Mb
      } = (0, jb.C)();
      return wb.pvp || wb.parkour || !wb.visitorsAllowed ? (0, rb.jsxs)("div", {
        className: "GreenvillePlaceTagRow GreenvillePlaceTagChips",
        children: [wb.pvp && (0, rb.jsx)("span", {
          className: "GreenvillePlaceChip Danger",
          children: Mb("greenvilleGame:houseChipPvp")
        }), wb.parkour && (0, rb.jsx)("span", {
          className: "GreenvillePlaceChip",
          children: Mb("greenvilleGame:houseChipParkour")
        }), !wb.visitorsAllowed && (0, rb.jsxs)("span", {
          className: "GreenvillePlaceChip Locked",
          children: [(0, rb.jsx)(pw.b, {
            name: "lock"
          }), Mb("greenvilleGame:houseChipVisitorsOff")]
        })]
      }) : null
    }
    const Yp = "greenvilleTutorialView",
      Zp = "target",
      fp = "home",
      Ap = `${gb}go`,
      Wp = {
        card: null,
        picker: null,
        homeMarker: !1
      };

    function Jp(bb) {
      return null === bb ? "" : "jobs" === bb.kind ? bb.kind : `${bb.owner}|${bb.lineKey}|${bb.action}`
    }
    class Sp {
      constructor(bb, wb, Mb, eb, Hb, pb) {
        this.markers = bb, this.iI = wb, this.send = Mb, this.pacer = eb, this.celebrate = Hb, this.nav = pb, this.view = Wp, this.picks = void 0, this.waiting = [], this.pressed = new Map, this.moveInTimer = null, this.flushing = !1, this.unsubscribePacer = void 0, this.go = () => {
          this.press(Ap)
        }, this.goTo = bb => {
          this.waiting = this.waiting.filter((bb => {
            let {
              command: wb
            } = bb;
            return !wb.startsWith(`${Ap} `)
          })), this.press(`${Ap} ${bb}`)
        }, this.skip = bb => {
          this.press(`${gb}skip ${bb}`)
        }, this.Vt = bb => {
          const wb = this.view.picker;
          null === wb || wb.movingIn || bb === this.picks.getLatest() || (this.picks.pushLatest(bb), this.set({
            ...this.view,
            picker: {
              ...wb,
              selected: this.picks.getLatest()
            }
          }))
        }, this.moveIn = () => {
          const bb = this.view.picker;
          null === bb || bb.movingIn || (this.queue({
            command: `${gb}movein`,
            picker: !0
          }), this.moveInTimer = setTimeout(this.onMoveInTimedOut, 15e3), this.set({
            ...this.view,
            picker: {
              ...bb,
              movingIn: !0
            }
          }))
        }, this.showLatestPick = () => {
          const bb = this.view.picker;
          null !== bb && this.set({
            ...this.view,
            picker: {
              ...bb,
              selected: this.picks.getLatest()
            }
          })
        }, this.onMoveInTimedOut = () => {
          this.moveInTimer = null;
          const bb = this.view.picker;
          null !== bb && void 0 !== bb && bb.movingIn && (console.warn("Greenville: the server never closed the house picker after Move in"), this.dropPickerPresses(), this.set({
            ...this.view,
            picker: {
              ...bb,
              selected: this.picks.getLatest(),
              movingIn: !1
            }
          }))
        }, this.flush = () => {
          if (!this.flushing) {
            for (this.flushing = !0; this.waiting.length > 0 && this.pacer.tryStart();) this.send(this.waiting.shift().command);
            this.flushing = !1
          }
        }, this.picks = new bw("", eb, (bb => {
          Mb(`${gb}try ${bb}`)
        }), this.showLatestPick), this.unsubscribePacer = eb.subscribe(this.flush)
      }
      getView() {
        return this.view
      }
      EO(bb) {
        switch (bb[0]) {
          case "tutCard": {
            const [, wb, Mb, eb, Hb, pb, Vb, gb, lb] = bb;
            this.setCard({
              kind: "step",
              owner: wb,
              lineKey: Mb,
              byDevice: eb,
              count: Hb,
              goal: pb,
              action: Vb,
              target: gb && {
                x: gb[0],
                y: gb[1],
                z: gb[2],
                labelKey: gb[3]
              },
              skippable: lb
            });
            break
          }
          case "tutJobs":
            this.setCard({
              kind: "jobs",
              places: bb[1]
            });
            break;
          case "tutHidden":
            this.setCard(null);
            break;
          case "tutPicker": {
            var wb;
            const [, Mb, eb, Hb] = bb, pb = this.view.picker;
            Hb && this.picks.takeAnswer(), this.picks.confirm(eb), this.set({
              ...this.view,
              picker: {
                houses: Mb.map((bb => {
                  let [wb, Mb, eb] = bb;
                  return {
                    schemName: wb,
                    icon: Mb,
                    titleKey: eb
                  }
                })),
                selected: this.picks.getLatest(),
                movingIn: null !== (wb = null === pb || void 0 === pb ? void 0 : pb.movingIn) && void 0 !== wb && wb
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
            this.celebrate(bb[1], bb[2]);
            break;
          case "tutHomeMarker":
            this.set({
              ...this.view,
              homeMarker: bb[1]
            })
        }
      }
      getTarget() {
        const bb = this.view.card;
        return "step" === (null === bb || void 0 === bb ? void 0 : bb.kind) ? bb.target : null
      }
      getShownHome() {
        if (!this.view.homeMarker) return null;
        const bb = this.nav.getHomeGate(),
          wb = this.getTarget();
        return null === bb || wb && Math.hypot(wb.x - bb[0], wb.z - bb[1]) < 12 ? null : bb
      }
      frame(bb, wb) {
        if (this.markers.setRender(bb), !this.markers.hasMarkers()) return;
        const Mb = this.getTarget();
        Mb && this.markers.update(Zp, Mb.x, Mb.y + 1, Mb.z, wb);
        const eb = wb && this.getShownHome();
        eb && this.markers.update(fp, eb[0], 2, eb[1], wb)
      }
      dispose() {
        this.dropPickerPresses(), this.forgetPresses(), this.waiting = [], this.unsubscribePacer(), this.markers.dispose()
      }
      setCard(bb) {
        Jp(bb) !== Jp(this.view.card) && (this.forgetPresses(), this.waiting = this.waiting.filter((bb => {
          let {
            picker: wb
          } = bb;
          return wb
        }))), this.set({
          ...this.view,
          card: bb
        });
        const wb = this.getTarget();
        this.nav.setGoal(wb && {
          x: wb.x,
          z: wb.z
        })
      }
      set(bb) {
        this.view = bb, this.iI(bb)
      }
      press(bb) {
        const wb = this.waiting.some((wb => wb.command === bb));
        this.pressed.has(bb) || wb || (this.pressed.set(bb, setTimeout((() => {
          this.pressed.delete(bb)
        }), 3e3)), this.queue({
          command: bb,
          picker: !1
        }))
      }
      forgetPresses() {
        for (const bb of this.pressed.values()) clearTimeout(bb);
        this.pressed.clear()
      }
      queue(bb) {
        this.waiting.push(bb), this.flush()
      }
      dropPickerPresses() {
        this.picks.clear(), this.waiting = this.waiting.filter((bb => {
          let {
            picker: wb
          } = bb;
          return !wb
        })), null !== this.moveInTimer && (clearTimeout(this.moveInTimer), this.moveInTimer = null)
      }
    }
    const Np = "GreenvilleHousePickerTitle";

    function vp() {}

    function Qp(bb) {
      let {
        controller: wb
      } = bb;
      (0, Xb.h)(Yp, null);
      const Mb = wb.getView().picker;
      return (0, rb.jsx)(Iw.e, {
        show: null !== Mb,
        forcePointerUnlock: null !== Mb,
        close: vp,
        globallyUniqueKey: "greenvilleHousePicker",
        escDoesExit: !1,
        closeOnPressBackground: !1,
        padBackCloses: !1,
        doGameplayStartStopOnShow: !0,
        cameraKeeper: !0,
        ignorePressesAsShown: !0,
        className: "GreenvilleHousePickerOverlay",
        children: null !== Mb && (0, rb.jsx)(Gp, {
          picker: Mb,
          controller: wb
        })
      })
    }

    function Gp(bb) {
      let {
        picker: wb,
        controller: Mb
      } = bb;
      const {
        t: eb
      } = (0, jb.C)();
      return (0, rb.jsxs)("section", {
        className: "GreenvilleHousePicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": Np,
        children: [(0, rb.jsx)("h2", {
          id: Np,
          className: "GreenvilleHousePickerTitle",
          children: eb("greenvilleGame:tutPickerTitle")
        }), (0, rb.jsx)("div", {
          className: "GreenvilleHousePickerHouses",
          children: wb.houses.map((bb => {
            let {
              schemName: Hb,
              icon: pb,
              titleKey: Vb
            } = bb;
            const gb = Hb === wb.selected;
            return (0, rb.jsxs)("button", {
              type: "button",
              className: sb()("GreenvilleHousePickerHouse", {
                Selected: gb
              }),
              "aria-pressed": gb,
              disabled: wb.movingIn,
              "data-pad-default-focus": gb || void 0,
              onClick: () => {
                Mb.Vt(Hb)
              },
              children: [(0, rb.jsx)("img", {
                src: `/textures/games/greenville/${pb}`,
                alt: "",
                draggable: !1
              }), (0, rb.jsx)("span", {
                className: "GreenvilleHousePickerHouseName",
                children: eb(`greenvilleGame:${Vb}`)
              })]
            }, Hb)
          }))
        }), (0, rb.jsx)(Vw.p, {
          className: "GreenvilleHousePickerMoveIn",
          loading: wb.movingIn,
          onClick: Mb.moveIn,
          children: eb("greenvilleGame:tutPickerMoveIn")
        })]
      })
    }
    var qp = Mb(39721);
    const ap = {
      farm: "farming",
      lumberMill: "woodcutting",
      quarry: "mining",
      marketStreet: "market",
      demolitionYard: "demolition"
    };

    function ip(bb) {
      let {
        controller: wb,
        hud: Mb
      } = bb;
      (0, Xb.h)(Yp, null);
      const eb = wb.getView().card;
      return (0, rb.jsxs)(rb.Fragment, {
        children: ["step" === (null === eb || void 0 === eb ? void 0 : eb.kind) && (0, rb.jsx)(dp, {
          card: eb,
          controller: wb,
          hud: Mb
        }), "jobs" === (null === eb || void 0 === eb ? void 0 : eb.kind) && (0, rb.jsx)(Pp, {
          card: eb,
          controller: wb
        })]
      })
    }

    function dp(bb) {
      let {
        card: wb,
        controller: Mb,
        hud: eb
      } = bb;
      const {
        t: Hb
      } = (0, jb.C)(), {
        isTouchScreen: pb
      } = (0, mb.o)(["isTouchScreen"]);
      (0, Xb.h)(PM, null);
      const Vb = eb.getPlace(),
        gb = "hudJob" === (null === Vb || void 0 === Vb ? void 0 : Vb.kind) && "quarry" === Vb.place,
        lb = Hb(`greenvilleGame:${wb.lineKey}${wb.byDevice&&pb?"Touch":""}`, {
          count: (0, vb.d)(wb.count),
          goal: (0, vb.d)(wb.goal),
          target: wb.target && Hb(wb.target.labelKey)
        }),
        Lb = wb.goal > 0,
        Ib = "go" === wb.action && (0, rb.jsxs)(Vw.p, {
          className: "GreenvilleTutorialCardGo",
          touchPressOn: "pointerup",
          onClick: Mb.go,
          children: [Hb("greenvilleGame:tutGo"), !pb && !gb && (0, rb.jsx)(oH.e, {
            className: "GreenvilleTutorialCardKey",
            noaAction: "SpecialAction2",
            padHidesKey: !0
          })]
        });
      return (0, rb.jsxs)(yp, {
        heading: (0, rb.jsxs)(rb.Fragment, {
          children: [(0, rb.jsx)("span", {
            className: "GreenvilleTutorialCardLine",
            children: lb
          }), Lb && (0, rb.jsxs)("span", {
            className: "GreenvilleTutorialCardCount",
            children: [(0, vb.d)(Math.min(wb.count, wb.goal)), "/", (0, vb.d)(wb.goal)]
          })]
        }),
        compactAction: Ib,
        children: [Lb && (0, rb.jsx)("div", {
          className: "GreenvilleTutorialCardBar",
          "aria-hidden": "true",
          children: (0, rb.jsx)("span", {
            style: {
              width: `${Math.min(100,100*wb.count/wb.goal)}%`
            }
          })
        }), (Ib || wb.skippable) && (0, rb.jsxs)("div", {
          className: "GreenvilleTutorialCardActions",
          children: [Ib, wb.skippable && (0, rb.jsx)(np, {
            owner: wb.owner,
            controller: Mb
          })]
        })]
      })
    }

    function Pp(bb) {
      let {
        card: wb,
        controller: Mb
      } = bb;
      const {
        t: eb
      } = (0, jb.C)();
      return (0, rb.jsxs)(yp, {
        heading: (0, rb.jsx)("span", {
          className: "GreenvilleTutorialCardLine",
          children: eb("greenvilleGame:tutJobsTitle")
        }),
        children: [(0, rb.jsx)("ul", {
          className: "GreenvilleTutorialCardJobs",
          children: wb.places.map((bb => (0, rb.jsxs)("li", {
            className: "GreenvilleTutorialCardJob",
            children: [(0, rb.jsx)("span", {
              className: "GreenvilleTutorialCardJobIcon",
              "aria-hidden": "true",
              children: (0, rb.jsx)(zb.c, {
                itemName: Ue[ap[bb]],
                amount: 0
              })
            }), (0, rb.jsx)("span", {
              className: "GreenvilleTutorialCardJobName",
              children: Ce(eb, bb)
            }), (0, rb.jsx)(Vw.p, {
              className: "GreenvilleTutorialCardGo",
              touchPressOn: "pointerup",
              onClick: () => {
                Mb.goTo(bb)
              },
              children: eb("greenvilleGame:tutGo")
            })]
          }, bb)))
        }), (0, rb.jsx)("div", {
          className: "GreenvilleTutorialCardActions",
          children: (0, rb.jsx)(np, {
            owner: "guide",
            controller: Mb
          })
        })]
      })
    }

    function np(bb) {
      let {
        owner: wb,
        controller: Mb
      } = bb;
      const {
        t: eb
      } = (0, jb.C)();
      return (0, rb.jsx)(Vw.j, {
        className: "GreenvilleTutorialCardSkip",
        touchPressOn: "pointerup",
        onClick: () => {
          Mb.skip(wb)
        },
        children: eb("guide" === wb ? "greenvilleGame:tutSkip" : "greenvilleGame:tutKnowThis")
      })
    }

    function yp(bb) {
      let {
        heading: wb,
        compactAction: Mb,
        children: eb
      } = bb;
      const Hb = (0, qp.h)(),
        [pb, Vb] = (0, lb.useState)(!1),
        gb = Hb && !pb;
      return (0, rb.jsxs)("div", {
        className: sb()("GreenvilleTrackerCard GreenvilleTutorialCard", {
          Compact: gb
        }),
        children: [(0, rb.jsxs)("div", {
          className: "GreenvilleTutorialCardHead",
          children: [Hb && (0, rb.jsxs)("button", {
            type: "button",
            className: "GreenvilleTutorialCardToggle",
            "aria-expanded": pb,
            ...(0, TH.e)((() => {
              Vb(!pb)
            }), "pointerup"),
            children: [wb, (0, rb.jsx)("span", {
              className: "GreenvilleTutorialCardChevron",
              "aria-hidden": "true",
              children: pb ? "\u25b4" : "\u25be"
            })]
          }), !Hb && wb, gb && Mb]
        }), !gb && eb]
      })
    }

    function op(bb) {
      let {
        controller: wb
      } = bb;
      (0, Xb.h)(Yp, null), (0, Xb.h)(jH, null);
      const {
        isTouchScreen: Mb
      } = (0, mb.o)(["isTouchScreen"]), {
        t: eb
      } = (0, jb.C)(), Hb = wb.getTarget(), pb = wb.getShownHome();
      return null === Hb && null === pb ? null : (0, rb.jsxs)("div", {
        className: "GreenvilleMarketWaypoints",
        children: [null !== Hb && (0, rb.jsx)(ae, {
          bind: wb.markers.bindMarker(Zp),
          house: !0,
          label: eb(Hb.labelKey),
          extra: Mb && (0, rb.jsx)(pw.b, {
            name: "hand-back-point-up",
            className: "SmallTextBold TouchTutorialIcon GreenvilleTutorialHand"
          }),
          children: (0, rb.jsx)(pw.b, {
            name: "flag"
          })
        }), null !== pb && (0, rb.jsx)(ae, {
          bind: wb.markers.bindMarker(fp),
          house: !0,
          label: eb("greenvilleGame:tutMarkHome"),
          children: (0, rb.jsx)(pw.b, {
            name: "house"
          })
        })]
      })
    }
    const Tp = function(bb, wb, Mb, Hb) {
      let pb, {
        localPlayerId: Vb
      } = Hb;
      const gb = new Fb((bb => {
          Lb.k.iI(Eb, bb)
        })),
        Bb = new ze((bb => {
          Lb.k.iI(he, bb)
        })),
        sb = {
          onGain: () => {
            pb.playSound(Vb, "rpgHandleCoins1", .5, .9 + .3 * Math.random())
          },
          onCoinLanded: (bb, wb) => {
            pb.playSound(Vb, "pickUp", .3, 1 + .5 * bb / Math.max(1, wb - 1))
          }
        },
        mb = [],
        hb = {
          open: bb => {
            for (const wb of mb) wb !== bb && wb.onMenuClosed();
            (0, tb.y)()
          },
          close: tb.l,
          dismiss: tb.o
        },
        zb = new Ib.d,
        Xb = new VM((bb => {
          Lb.k.iI(HM, bb)
        }), hb, (bb => {
          pb.sendCommand(null === bb ? eb : `${eb} ${bb}`)
        }), zb),
        xb = new Hw((bb => {
          Lb.k.iI(Mw, bb)
        }), hb, (bb => {
          pb.sendCommand(`demolition pick ${bb}`)
        }), zb),
        jb = new Kw((bb => {
          Lb.k.iI(xw, bb)
        }), hb, (bb => {
          pb.sendCommand(`garage pick ${bb}`)
        }), zb),
        Kb = new Ye((bb => {
          Lb.k.iI(De, bb)
        })),
        rb = new yM((bb => {
          Lb.k.iI(PM, bb)
        }), (bb => {
          Lb.k.iI(nM, bb)
        })),
        Rb = new RH(function(bb) {
          return "profIsland" === bb ? ep : Mp
        }(Mb), (bb => {
          Lb.k.iI(xH, bb)
        }), (bb => {
          Lb.k.iI(jH, bb)
        }), (bb => {
          Lb.k.iI(KH, bb)
        })),
        Db = new ye((bb => {
          Lb.k.iI(Pe, bb)
        }), hb, Rb);
      let cb = null,
        Yb = null;
      const Zb = new Sw((bb => {
          Lb.k.iI(Ww, bb)
        }), (bb => {
          Lb.k.iI(Jw, bb)
        }), hb, (bb => {
          pb.sendCommand(bb)
        }), zb),
        fb = new KM((bb => {
          Lb.k.iI(XM, bb)
        }), (bb => {
          Lb.k.iI(xM, bb)
        }), hb, (bb => {
          pb.sendCommand(bb)
        }), zb),
        Wb = new Up((bb => {
          Lb.k.iI(Ip, bb)
        }), hb, ((bb, wb) => {
          pb.sendCommand(`smuggle ${bb} ${wb}`)
        }), zb, (() => {
          (0, Ob.b)(pb, Vb)
        }));
      mb.push(Xb, xb, jb, Zb, fb, Wb, Db);
      let Jb = null,
        Sb = null,
        Nb = null;
      return {
        onCreate: bb => {
          pb = bb, Rb.start(bb), cb = new de(Kb), Yb = new Sp(new Cb.e(ue, "greenvilleGame:marketDistance"), (bb => {
            Lb.k.iI(Yp, bb)
          }), (wb => {
            bb.sendCommand(wb)
          }), zb, Bb.celebrate, Rb), Jb = (0, tb.J)((0, lb.createElement)(lb.Fragment, null, (0, lb.createElement)(Ab, {
            controller: gb
          }), (0, lb.createElement)(Ke, {
            controller: Bb
          }), (0, lb.createElement)(Ge, {
            market: Kb,
            markers: cb
          }), (0, lb.createElement)(op, {
            controller: Yb
          }), (0, lb.createElement)(Qp, {
            controller: Yb
          }), (0, lb.createElement)(Ae, {
            controller: Kb
          }), (0, lb.createElement)(Kp, {
            controller: rb,
            nav: Rb
          }), (0, lb.createElement)(Vp, {
            controller: rb
          }), (0, lb.createElement)(Ee, {
            controller: rb
          }, (0, lb.createElement)(ip, {
            controller: Yb,
            hud: rb
          }), (0, lb.createElement)(yb, {
            sounds: sb
          }), (0, lb.createElement)(kH, {
            controller: Rb,
            onOpen: Db.open
          }), (0, lb.createElement)(dM, {
            controller: fb
          }), (0, lb.createElement)(Je, {
            controller: Kb
          }), (0, lb.createElement)(eM, {
            controller: Zb
          })), (0, lb.createElement)(lp, {
            controller: rb
          })), {
            content: (0, lb.createElement)(lb.Fragment, null, (0, lb.createElement)(IM, {
              controller: Xb
            }), (0, lb.createElement)(Xw, {
              controller: xb
            }), (0, lb.createElement)(Dw, {
              controller: jb
            }), (0, lb.createElement)(MM, {
              controller: Zb
            }), (0, lb.createElement)(iM, {
              controller: fb
            }), (0, lb.createElement)(Ep, {
              controller: Wb
            }), (0, lb.createElement)(nH, {
              controller: Db,
              nav: Rb
            })),
            onClose: () => {
              for (const bb of mb) bb.onMenuClosed()
            }
          }), Sb = (0, tb.C)(Db.open), Nb = (0, Ub.s)({
            id: "greenvilleMap",
            labelKey: "greenvilleGame:map",
            icon: {
              kind: "item",
              name: "Compass"
            },
            panel: !0,
            onClick: Db.open
          })
        },
        onClose: () => {
          Jb(), Sb(), Nb(), Rb.dispose(), Xb.dropPresses(), xb.dropPresses(), jb.dropPresses(), cb.waypoints.dispose(), Zb.dropPresses(), fb.dropPresses(), Yb.dispose(), Wb.dropPresses(), zb.dispose()
        },
        onAfterRender: (bb, wb) => {
          const Mb = pb.getPositionView(Vb);
          cb.frame(wb, Mb), Yb.frame(wb, Mb), Rb.frame(wb, Mb, pb.isLocalPlayerInVehicle())
        },
        onReceivedMessageFromServer: (bb, wb) => {
          "greenvilleBackpack" === bb ? gb.EO(wb) : "greenvilleOreBuyer" === bb ? Xb.EO(wb) : "greenvilleLumberMill" === bb ? Zb.EO(wb) : "greenvilleDemolition" === bb ? xb.EO(wb) : "greenvilleGarage" === bb ? jb.EO(wb) : "greenvilleFarmBoard" === bb ? fb.EO(wb) : "greenvilleSmuggler" === bb ? Wb.EO(wb) : "greenvilleMarket" === bb ? Kb.EO(wb) : "greenvilleHud" === bb ? rb.EO(wb) : "greenvilleLevelUp" === bb ? Bb.EO(wb) : "greenvillePlots" === bb ? Rb.EO(wb) : "greenvilleMapMarkers" === bb ? Rb.receiveMarkers(wb) : "greenvilleTutorial" === bb && Yb.EO(wb)
        }
      }
    }
  },
  40872: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb,
      f: () => Vb
    });
    var eb = Mb(5868);
    const Hb = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      pb = [150, 150, 150],
      Vb = -2147483648;
    class gb {
      constructor(bb) {
        this.averages = bb, this.byId = new Map
      }
      get(bb) {
        var wb, Mb, Vb, gb, lb;
        const Lb = this.byId.get(bb);
        if (void 0 !== Lb) return Lb;
        const Ib = null !== (wb = null === (Mb = eb.g[bb]) || void 0 === Mb ? void 0 : Mb.name) && void 0 !== wb ? wb : "",
          Ob = Ib.split("|")[0],
          Ub = null !== (Vb = this.averages[Ib]) && void 0 !== Vb ? Vb : this.averages[Ob],
          tb = null !== (gb = null !== (lb = null === Ub || void 0 === Ub ? void 0 : Ub[0]) && void 0 !== lb ? lb : Hb[Ob]) && void 0 !== gb ? gb : 0 === (null === Ub || void 0 === Ub ? void 0 : Ub.length) ? null : pb;
        return this.byId.set(bb, tb), tb
      }
      getDrawnIds() {
        const bb = new Uint8Array(65536);
        for (let wb = 1; wb < 65536; wb++) void 0 !== eb.g[wb] && null !== this.get(wb) && (bb[wb] = 1);
        return bb
      }
      drawPixel(bb, wb, Mb, eb, Hb, pb) {
        const gb = function(bb, wb, Mb) {
            const eb = bb - wb + (bb - Mb);
            return Math.max(.65, Math.min(1.2, .97 + .055 * eb))
          }(eb, Hb === Vb ? eb : Hb, pb === Vb ? eb : pb),
          lb = this.get(Mb);
        bb[wb] = lb[0] * gb, bb[wb + 1] = lb[1] * gb, bb[wb + 2] = lb[2] * gb, bb[wb + 3] = 255
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);