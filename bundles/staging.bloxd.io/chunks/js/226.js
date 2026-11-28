export const id = 226;
export const ids = [226];
export const modules = {
  35559: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd,
      g: () => Xd,
      j: () => Rd
    });
    var Wd = md(66);
    const Fd = new class {
      constructor() {
        this.inFlight = new Map, this.landings = new Map, this.listeners = new Set
      }
      getInFlight(dd) {
        var Od;
        return null !== (Od = this.inFlight.get(dd)) && void 0 !== Od ? Od : 0
      }
      setInFlight(dd, Od) {
        this.getInFlight(dd) !== Od && (this.inFlight.set(dd, Od), this.notify())
      }
      subscribe(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
      getLanding(dd) {
        var Od, md;
        return null !== (Od = null === (md = this.landings.get(dd)) || void 0 === md ? void 0 : md.at(-1)) && void 0 !== Od ? Od : null
      }
      hasLanding(dd, Od) {
        var md, Wd;
        return null !== (md = null === (Wd = this.landings.get(dd)) || void 0 === Wd ? void 0 : Wd.includes(Od)) && void 0 !== md && md
      }
      addLanding(dd, Od) {
        var md;
        const Wd = null !== (md = this.landings.get(dd)) && void 0 !== md ? md : [];
        return this.landings.set(dd, [...Wd, Od]), this.notify(), () => {
          this.landings.set(dd, this.landings.get(dd).filter((dd => dd !== Od))), this.notify()
        }
      }
      notify() {
        for (const dd of this.listeners) dd()
      }
    };

    function Rd(dd, Od) {
      const [md, Rd] = (0, Wd.useState)((() => Fd.getInFlight(dd)));
      return (0, Wd.useLayoutEffect)((() => {
        const Od = () => {
          Rd(Fd.getInFlight(dd))
        };
        return Od(), Fd.subscribe(Od)
      }), [dd]), Math.max(0, Od - md)
    }

    function Xd(dd, Od) {
      let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      (0, Wd.useLayoutEffect)((() => {
        if (md) return Fd.addLanding(dd, Od.current)
      }), [dd, Od, md])
    }
  },
  41087: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd
    });
    var Wd = md(41089);
    async function Fd() {
      const {
        averageColors: dd
      } = await md.e(235).then((() => md(35669)));
      return new Wd.d(dd)
    }
  },
  41070: (dd, Od, md) => {
    md.d(Od, {
      b: () => hd
    });
    var Wd = md(38298),
      Fd = md(1238),
      Rd = md(1306),
      Xd = md(40028),
      Kd = md(40091);
    class hd {
      constructor(dd, Od) {
        var md;
        this.classes = dd, this.distanceKey = Od, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.Aq = !1, this.Ip = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.Ip), null === (md = window.visualViewport) || void 0 === md || md.addEventListener("resize", this.Ip)
      }
      bindMarker(dd) {
        const Od = this.refs.get(dd);
        if (Od) return Od;
        const md = Od => {
          var Wd;
          null === (Wd = this.markers.get(dd)) || void 0 === Wd || Wd.stopObserving(), this.markers.delete(dd), Od && !this.Aq ? (this.markers.set(dd, this.mount(Od)), this.refs.set(dd, md)) : this.refs.delete(dd)
        };
        return this.refs.set(dd, md), md
      }
      hasMarkers() {
        return this.markers.size > 0
      }
      setRender(dd) {
        this.render = dd
      }
      update(dd, Od, md, Wd, Fd) {
        const Rd = this.markers.get(dd);
        Rd && (Rd.target ??= [0, 0, 0], Rd.target[0] = Od, Rd.target[1] = md, Rd.target[2] = Wd, this.place(Rd), this.MO(Rd, Fd && Math.hypot(Od - Fd[0], md - Fd[1], Wd - Fd[2])))
      }
      dispose() {
        var dd;
        this.Aq = !0, window.removeEventListener("resize", this.Ip), null === (dd = window.visualViewport) || void 0 === dd || dd.removeEventListener("resize", this.Ip);
        for (const Od of this.markers.values()) Od.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(dd) {
        const {
          render: Od,
          viewport: md
        } = this;
        if (!Od || !dd.target) return;
        const Wd = (50 - Od.screenBandPct.y) / 100 * md.height,
          Fd = {
            x: dd.halfSize.width + 8,
            top: dd.halfSize.height + 8,
            bottom: dd.halfSize.height + dd.labelsBelow + Wd
          },
          Rd = Od.projectWorldPosToViewport(dd.target),
          hd = null !== Rd && void 0 !== Rd ? Rd : Od.projectWorldPosToScreenPos(dd.target),
          vd = (0, Kd.b)({
            x: hd.x,
            y: hd.y,
            text: Rd
          }, Fd, md);
        (0, Xd.e)(dd.root, Math.round(100 * vd.x) / 100, Math.round(100 * vd.y) / 100)
      }
      MO(dd, Od) {
        if (null === Od) return void(null !== dd.metres && (dd.metres = null, dd.distance.textContent = ""));
        const md = Date.now();
        (null === dd.metres || (0, Wd.e)(Od, dd.metres, dd.metresShownAt)) && (dd.metres = Math.round(Od), dd.metresShownAt = md, dd.distance.textContent = (0, Fd.B)(Rd.f.get().getCurrentLanguageCode(), this.distanceKey, {
          distance: String(dd.metres)
        }))
      }
      mount(dd) {
        const Od = {
            root: dd,
            distance: dd.querySelector(`.${this.classes.distance}`),
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
          md = dd.querySelector(`.${this.classes.labels}`),
          Wd = new ResizeObserver((() => {
            Od.halfSize = {
              width: Math.max(dd.offsetWidth, md.offsetWidth) / 2,
              height: dd.offsetHeight / 2
            }, Od.labelsBelow = md.offsetTop + md.offsetHeight - dd.offsetHeight, this.place(Od)
          }));
        return Wd.observe(dd, {
          box: "border-box"
        }), Wd.observe(md, {
          box: "border-box"
        }), Od.stopObserving = () => {
          Wd.disconnect()
        }, Od
      }
    }
  },
  41083: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => MR
    });
    const Wd = "ore sell",
      Fd = "lumber ",
      Rd = "farm ",
      Xd = ["market", "demolition", "mining", "woodcutting", "farming"],
      Kd = "tutorial ";
    var hd = md(66),
      vd = md(32),
      Qd = md(40123),
      td = md(40241),
      od = md(3432),
      Nd = md(3428),
      qd = md(41070);
    const Hd = "greenvilleBackpackView";
    class yd {
      constructor(dd) {
        this.lQ = dd, this.view = null, this.arrivalToken = 0, this.showToken = 0
      }
      getView() {
        return this.view
      }
      Yt(dd) {
        if ("hide" === dd[0]) this.view = null;
        else if ("show" === dd[0]) {
          const Od = dd[3];
          this.view = {
            Mt: dd[1],
            shardsPerItem: dd[2],
            total: Od.reduce(((dd, Od) => {
              let [, md] = Od;
              return dd + md
            }), 0),
            contents: Od,
            arrival: null,
            showToken: ++this.showToken
          }
        } else {
          if (null === this.view) return void console.warn(`[greenville] backpack ${dd[0]} with no backpack shown`);
          {
            var Od, md;
            const Wd = dd[1],
              Fd = this.view.contents.find((dd => {
                let [Od] = dd;
                return Od === Wd
              })),
              Rd = this.view.contents.filter((dd => {
                let [Od] = dd;
                return Od !== Wd
              })),
              Xd = null !== (Od = null === Fd || void 0 === Fd ? void 0 : Fd[1]) && void 0 !== Od ? Od : 0,
              Kd = null !== (md = null === Fd || void 0 === Fd ? void 0 : Fd[2]) && void 0 !== md ? md : 0;
            "shard" === dd[0] ? this.view = {
              ...this.view,
              contents: [...Rd, [Wd, Xd, Kd + 1]]
            } : this.view = {
              ...this.view,
              total: this.view.total + 1,
              contents: [...Rd, [Wd, Xd + 1, 0]],
              arrival: {
                item: Wd,
                token: ++this.arrivalToken,
                fromShards: Kd > 0
              }
            }
          }
        }
        this.lQ(this.view)
      }
    }
    var bd = md(1155),
      Td = md.n(bd),
      pd = md(29),
      Yd = md(38243),
      gd = md(2079),
      wd = md(1566),
      Ed = md(2134),
      Jd = md(1238);
    const Ud = "data:image/png;base64,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";
    var xd = md(1341);
    const Bd = (0, hd.forwardRef)((function(dd, Od) {
      let {
        contents: md,
        Mt: Wd,
        full: Fd,
        children: Rd
      } = dd;
      const Xd = [...md].sort(((dd, Od) => {
        let [md] = dd, [Wd] = Od;
        return md.localeCompare(Wd)
      }));
      let Kd = 0;
      return (0, xd.jsxs)("div", {
        ref: Od,
        className: "GreenvilleBackpackBag",
        children: [Rd, (0, xd.jsx)("img", {
          className: Td()("GreenvilleBackpackArt", {
            Full: Fd
          }),
          src: Ud,
          alt: "",
          draggable: !1
        }), (0, xd.jsx)("div", {
          className: "GreenvilleBackpackWindow",
          children: Xd.map((dd => {
            let [Od, md] = dd;
            const Fd = Math.min(1 - Kd, md / Wd),
              Rd = (0, xd.jsx)(sd, {
                item: Od,
                below: Kd,
                share: Fd
              }, Od);
            return Kd += Fd, Rd
          }))
        })]
      })
    }));

    function Sd() {
      const dd = new Image;
      dd.src = Ud, dd.decode().catch((dd => {
        console.error("[greenville] backpack art failed to load", dd)
      }))
    }
    const sd = (0, hd.memo)((function(dd) {
        let {
          item: Od,
          below: md,
          share: Wd
        } = dd;
        return (0, xd.jsx)("div", {
          className: "GreenvilleBackpackOre",
          style: {
            bottom: `calc(var(--rise) * ${md})`,
            height: `calc(var(--rise) * ${Wd} + var(--slant))`
          },
          children: Array.from({
            length: 18
          }, ((dd, md) => (0, xd.jsx)("div", {
            className: "GreenvilleBackpackOreTile",
            children: (0, xd.jsx)(gd.c, {
              itemName: Od,
              amount: 0
            })
          }, md)))
        })
      })),
      ud = [{
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
      Vd = [{
        transform: "scale(1.3)"
      }, {
        transform: "scale(1)"
      }];
    let Ad = 1;

    function rd(dd) {
      let {
        controller: Od
      } = dd;
      (0, wd.i)(Hd, null), (0, hd.useEffect)(Sd, []);
      const md = Od.getView();
      return null === md ? null : (0, xd.jsx)(Yd.h, {
        placement: "bottomLeft",
        children: (0, xd.jsx)(Gd, {
          view: md
        })
      })
    }

    function Gd(dd) {
      let {
        view: Od
      } = dd;
      const {
        t: md
      } = (0, Jd.G)(), {
        isTouchScreen: Wd
      } = (0, pd.p)(["isTouchScreen"]), [Fd, Rd] = (0, hd.useState)([]), Xd = (0, hd.useRef)(null), Kd = (0, hd.useRef)(null), vd = (0, hd.useRef)([]), Qd = (0, hd.useRef)({
        arrival: Od.arrival,
        showToken: Od.showToken
      }), {
        arrival: td,
        showToken: od
      } = Od;
      (0, hd.useLayoutEffect)((() => {
        var dd;
        if (od !== Qd.current.showToken) Rd([]);
        else if (null !== td && td.token !== (null === (dd = Qd.current.arrival) || void 0 === dd ? void 0 : dd.token) && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          const dd = {
            id: Ad++,
            item: td.item,
            fromShards: td.fromShards,
            driftEm: 1.4 * (Math.random() - .5),
            spinDeg: 70 * (Math.random() - .5)
          };
          Rd((Od => Od.length < 6 ? [...Od, dd] : Od))
        }
        Qd.current = {
          arrival: td,
          showToken: od
        }
      }), [td, od]), (0, hd.useEffect)((() => () => {
        for (const dd of vd.current) dd.cancel()
      }), []);
      const Nd = (0, hd.useCallback)((() => {
          for (const dd of vd.current) dd.cancel();
          vd.current = [Xd.current.animate(ud, {
            duration: 300,
            easing: "ease-out"
          }), Kd.current.animate(Vd, {
            duration: 220,
            easing: "ease-out"
          })]
        }), []),
        qd = (0, hd.useCallback)((dd => {
          Rd((Od => Od.filter((Od => Od.id !== dd)))), Nd()
        }), [Nd]),
        Hd = Od.total - Fd.length,
        yd = Hd >= Od.Mt,
        bd = Od.contents.map((dd => {
          let [md, Wd, Rd] = dd;
          const Xd = Fd.filter((dd => dd.item === md)),
            Kd = Xd.some((dd => dd.fromShards));
          return [md, Wd - Xd.length, Kd ? Od.shardsPerItem : Rd]
        })),
        Yd = bd.filter((dd => {
          let [, Od, md] = dd;
          return Od > 0 || md > 0
        })).reverse().slice(0, 4),
        wd = (0, Ed.u)("SpecialAction2");
      return (0, xd.jsxs)("div", {
        className: "GreenvilleBackpack",
        children: [(0, xd.jsxs)("div", {
          className: "GreenvilleBackpackCount SmallTextBold",
          children: [(0, xd.jsx)("span", {
            ref: Kd,
            className: Td()("GreenvilleBackpackTotal", {
              Full: yd
            }),
            children: Hd
          }), (0, xd.jsxs)("span", {
            className: "GreenvilleBackpackCapacity",
            children: ["/ ", Od.Mt]
          })]
        }), (0, xd.jsxs)("div", {
          className: "GreenvilleBackpackRow",
          children: [(0, xd.jsx)(Bd, {
            ref: Xd,
            contents: bd,
            Mt: Od.Mt,
            full: yd,
            children: Fd.map((dd => (0, xd.jsx)(Ld, {
              drop: dd,
              onLanded: qd
            }, dd.id)))
          }), (0, xd.jsxs)("div", {
            className: "GreenvilleBackpackInfo",
            children: [Yd.length > 0 && (0, xd.jsx)("div", {
              className: "GreenvilleBackpackTallies",
              children: Yd.map((dd => {
                let [md, Wd, Fd] = dd;
                return (0, xd.jsxs)("div", {
                  className: "GreenvilleBackpackTally",
                  children: [(0, xd.jsx)("div", {
                    className: "GreenvilleBackpackTallyIcon",
                    children: (0, xd.jsx)(gd.c, {
                      itemName: md,
                      amount: 0
                    })
                  }), Wd > 0 && (0, xd.jsxs)("span", {
                    className: "SmallTextBold",
                    children: ["\xd7", Wd]
                  }), Fd > 0 && (0, xd.jsx)(nd, {
                    shards: Fd,
                    shardsPerItem: Od.shardsPerItem
                  })]
                }, md)
              }))
            }), yd && (0, xd.jsxs)("div", {
              className: "GreenvilleBackpackFullLine",
              role: "status",
              children: [(0, xd.jsx)("span", {
                className: "GreenvilleBackpackFullTitle SmallTextBold",
                children: md("greenvilleGame:backpackFull")
              }), Wd && (0, xd.jsx)("span", {
                className: "SmallTextLight",
                children: md("greenvilleGame:backpackReturnTouch")
              }), !Wd && null !== wd && (0, xd.jsx)("span", {
                className: "SmallTextLight",
                children: md("greenvilleGame:backpackReturnDesktop", {
                  key: (0, Ed.r)(wd)
                })
              })]
            })]
          })]
        })]
      })
    }

    function nd(dd) {
      let {
        shards: Od,
        shardsPerItem: md
      } = dd;
      return (0, xd.jsx)("div", {
        className: "GreenvilleBackpackShards",
        children: Array.from({
          length: md
        }, ((dd, md) => (0, xd.jsx)("span", {
          className: Td()("GreenvilleBackpackShard", {
            Filled: md < Od
          })
        }, md)))
      })
    }

    function Ld(dd) {
      let {
        drop: Od,
        onLanded: md
      } = dd;
      const Wd = (0, hd.useRef)(null);
      return (0, hd.useLayoutEffect)((() => {
        const {
          driftEm: dd,
          spinDeg: Fd
        } = Od, Rd = Wd.current.animate([{
          transform: `translate(${dd}em, -3.2em) rotate(${Fd}deg) scale(1.2)`,
          opacity: 0
        }, {
          transform: `translate(${.7*dd}em, -2.4em) rotate(${.7*Fd}deg) scale(1.1)`,
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
        return Rd.onfinish = () => {
          md(Od.id)
        }, () => {
          Rd.onfinish = null, Rd.cancel()
        }
      }), [Od, md]), (0, xd.jsx)("div", {
        ref: Wd,
        className: "GreenvilleBackpackFalling",
        children: (0, xd.jsx)(gd.c, {
          itemName: Od.item,
          amount: 0
        })
      })
    }
    var Pd = md(86),
      zd = md(35563),
      cd = md(3403),
      jd = md(3645),
      Dd = md(35559);
    const ed = "gold",
      Id = "Gold Coin";

    function ld() {
      var dd, Od;
      return null !== (dd = null === (Od = (0, cd.j)("currencyAmounts")) || void 0 === Od ? void 0 : Od[ed].amount) && void 0 !== dd ? dd : 0
    }
    const Cd = [{
        transform: "scale(1.18)"
      }, {
        transform: "scale(1)"
      }],
      Zd = [{
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
    let kd = 1;

    function fd(dd) {
      var Od;
      let {
        sounds: md
      } = dd;
      const Wd = null === (Od = (0, cd.j)("currencyAmounts")) || void 0 === Od ? void 0 : Od[ed];
      return !Wd || Wd.hidden ? null : (0, xd.jsx)(Md, {
        gold: Wd.amount,
        sounds: md
      })
    }

    function Md(dd) {
      let {
        gold: Od,
        sounds: md
      } = dd;
      const Wd = (0, jd.d)(),
        [Fd, Rd] = (0, hd.useState)([]),
        Xd = (0, hd.useRef)(null),
        Kd = (0, hd.useRef)(null),
        vd = (0, hd.useRef)(null),
        Qd = (0, hd.useRef)(null),
        td = (0, hd.useRef)(Od);
      (0, hd.useLayoutEffect)((() => {
        const dd = Od - td.current;
        if (td.current = Od, !(dd <= 0) && (md.onGain(), !Wd && !window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
          const Od = function(dd) {
            const Od = Math.max(1, Math.min(8, Math.floor(dd))),
              md = Math.floor(dd / Od),
              Wd = [];
            for (let Fd = 0; Fd < Od; Fd++) {
              const Rd = -Math.PI / 2 + (1 === Od ? 0 : 2.4 * (Fd / (Od - 1) - .5)) + .3 * (Math.random() - .5),
                Xd = 40 + 35 * Math.random();
              Wd.push({
                id: kd++,
                burst: {
                  x: Math.cos(Rd) * Xd,
                  y: Math.sin(Rd) * Xd
                },
                gold: Fd === Od - 1 ? dd - md * (Od - 1) : md,
                delayMs: 45 * Fd,
                step: Fd,
                steps: Od
              })
            }
            return Wd
          }(dd);
          Rd((dd => [...dd, ...Od.slice(0, Math.max(0, 24 - dd.length))]))
        }
      }), [Od]), (0, hd.useEffect)((() => () => {
        var dd;
        null === (dd = vd.current) || void 0 === dd || dd.cancel()
      }), []), (0, hd.useLayoutEffect)((() => () => {
        Dd.e.setInFlight(ed, 0)
      }), []);
      const od = (0, hd.useCallback)(((dd, Od) => {
          Qd.current = Od, md.onCoinLanded(dd.step, dd.steps), Rd((Od => Od.filter((Od => {
            let {
              id: md
            } = Od;
            return md !== dd.id
          }))))
        }), [md]),
        Nd = Fd.length,
        qd = (0, hd.useRef)(Nd);
      (0, hd.useEffect)((() => {
        var dd, Od;
        Nd < qd.current && (null === (dd = vd.current) || void 0 === dd || dd.cancel(), vd.current = (null !== (Od = Qd.current) && void 0 !== Od ? Od : Xd.current).animate(0 === Nd ? Zd : Cd, {
          duration: 0 === Nd ? 380 : 160,
          easing: "ease-out"
        }));
        qd.current = Nd
      }), [Nd]);
      const Hd = Fd.reduce(((dd, Od) => dd + Od.gold), 0);
      return (0, hd.useLayoutEffect)((() => {
        Dd.e.setInFlight(ed, Hd)
      }), [Hd]), (0, xd.jsxs)(xd.Fragment, {
        children: [(0, xd.jsx)("div", {
          className: "GreenvilleGoldPurse",
          children: (0, xd.jsxs)("div", {
            ref: Xd,
            className: "GreenvilleGoldPurseBody",
            children: [(0, xd.jsx)("span", {
              ref: Kd,
              className: "GreenvilleGoldPurseIcon",
              children: (0, xd.jsx)(gd.c, {
                itemName: Id,
                amount: 0
              })
            }), (0, xd.jsx)("span", {
              className: "GreenvilleGoldPurseAmount SmallTextBold",
              children: (0, zd.g)(Math.max(0, Od - Hd))
            })]
          })
        }), (0, Pd.createPortal)(Fd.map((dd => (0, xd.jsx)(dO, {
          coin: dd,
          target: Kd,
          onLanded: od
        }, dd.id))), document.body)]
      })
    }

    function dO(dd) {
      let {
        coin: Od,
        target: md,
        onLanded: Wd
      } = dd;
      const Fd = (0, hd.useRef)(null),
        [Rd] = (0, hd.useState)((() => Dd.e.getLanding(ed))),
        [Xd, Kd] = (0, hd.useState)(null !== Rd);
      return (0, hd.useEffect)((() => {
        const dd = (null !== Rd && void 0 !== Rd ? Rd : md.current).getBoundingClientRect(),
          {
            burst: Xd
          } = Od,
          hd = window.innerWidth / 2,
          vd = window.innerHeight / 2,
          Qd = dd.left + dd.width / 2,
          td = dd.top + dd.height / 2,
          od = Fd.current.animate([{
            transform: `translate(${hd}px, ${vd}px) scale(0.3)`,
            opacity: 0,
            easing: "ease-out"
          }, {
            transform: `translate(${hd+.7*Xd.x}px, ${vd+.7*Xd.y}px) scale(1.25)`,
            opacity: 1,
            offset: .15,
            easing: "ease-out"
          }, {
            transform: `translate(${hd+Xd.x}px, ${vd+Xd.y}px) scale(1)`,
            offset: .35,
            easing: "ease-in-out"
          }, {
            transform: `translate(${hd+Xd.x}px, ${vd+Xd.y+6}px) scale(1)`,
            offset: .45,
            easing: "cubic-bezier(0.55, 0, 1, 0.45)"
          }, {
            transform: `translate(${Qd}px, ${td}px) scale(0.6)`,
            opacity: 1
          }], {
            duration: 950,
            delay: Od.delayMs,
            fill: "both"
          });
        let Nd = od;
        Nd.onfinish = () => {
          Wd(Od, Rd)
        };
        const qd = Dd.e.subscribe((() => {
          var dd;
          if (null === Rd || Nd !== od || Dd.e.hasLanding(ed, Rd)) return;
          const Xd = md.current.getBoundingClientRect();
          od.commitStyles(), Nd = Fd.current.animate([{
            transform: `translate(${Xd.left+Xd.width/2}px, ${Xd.top+Xd.height/2}px) scale(0.6)`,
            opacity: 1
          }], {
            duration: Math.max(150, 950 + Od.delayMs - Number(null !== (dd = od.currentTime) && void 0 !== dd ? dd : 0)),
            easing: "ease-in",
            fill: "both"
          }), Nd.onfinish = () => {
            Wd(Od, null)
          }, od.onfinish = null, od.cancel(), Kd(!1)
        }));
        return () => {
          qd(), Nd.onfinish = null, Nd.cancel()
        }
      }), [Od, md, Rd, Wd]), (0, xd.jsx)("div", {
        ref: Fd,
        className: Td()("GreenvilleGoldCoin", {
          IntoMenu: Xd
        }),
        children: (0, xd.jsx)(gd.c, {
          itemName: Id,
          amount: 0
        })
      })
    }
    class OO {
      constructor(dd, Od, md) {
        this.pacer = dd, this.send = Od, this.onAnswersTimedOut = md, this.queued = [], this.unanswered = [], this.answerTimer = null, this.flushing = !1, this.flush = () => {
          if (!this.flushing) {
            this.flushing = !0;
            try {
              for (; this.queued.length > 0 && this.pacer.tryStart();) {
                const dd = this.queued.shift();
                this.unanswered.push(dd), this.answerTimer ??= setTimeout(this.onAnswerTimeout, 15e3), this.send(dd)
              }
            } finally {
              this.flushing = !1
            }
          }
        }, this.onAnswerTimeout = () => {
          this.answerTimer = null, this.unanswered = [], this.onAnswersTimedOut()
        }, dd.subscribe(this.flush)
      }
      getPending() {
        return [...this.unanswered, ...this.queued]
      }
      Nt() {
        return 0 === this.unanswered.length && 0 === this.queued.length
      }
      getLastSent() {
        return this.unanswered.at(-1)
      }
      getLastPending() {
        var dd;
        return null !== (dd = this.queued.at(-1)) && void 0 !== dd ? dd : this.unanswered.at(-1)
      }
      push(dd) {
        this.queued.push(dd), this.flush()
      }
      dropWaiting() {
        const dd = this.queued.length > 0;
        return this.queued = [], dd
      }
      takeAnswer() {
        var dd;
        const Od = null !== (dd = this.unanswered.shift()) && void 0 !== dd ? dd : null;
        return this.stopAnswerTimer(), this.unanswered.length > 0 && (this.answerTimer = setTimeout(this.onAnswerTimeout, 15e3)), Od
      }
      clear() {
        this.queued = [], this.unanswered = [], this.stopAnswerTimer()
      }
      stopAnswerTimer() {
        null !== this.answerTimer && (clearTimeout(this.answerTimer), this.answerTimer = null)
      }
    }
    class mO {
      constructor(dd, Od, md, Wd) {
        this.confirmed = dd, this.picks = void 0, this.picks = new OO(Od, md, Wd)
      }
      confirm(dd) {
        this.confirmed = dd
      }
      getLastPending() {
        return this.picks.getLastPending()
      }
      getLatest() {
        var dd;
        return null !== (dd = this.getLastPending()) && void 0 !== dd ? dd : this.confirmed
      }
      Nt() {
        return this.picks.Nt()
      }
      pushLatest(dd) {
        var Od;
        const md = null !== (Od = this.picks.getLastSent()) && void 0 !== Od ? Od : this.confirmed;
        this.picks.dropWaiting() && dd === md || this.picks.push(dd)
      }
      takeAnswer() {
        this.picks.takeAnswer()
      }
      clear() {
        this.picks.clear()
      }
    }
    class WO {
      constructor(dd, Od, md) {
        this.closed = dd, this.lQ = Od, this.menu = md, this.view = void 0, this.dismiss = () => {
          this.closePanel() && this.menu.dismiss()
        }, this.onMenuClosed = () => {
          this.closePanel()
        }, this.view = dd
      }
      getView() {
        return this.view
      }
      show(dd) {
        this.set(dd), this.menu.open(this)
      }
      close() {
        this.closePanel() && this.menu.close()
      }
      set(dd) {
        this.view = dd, this.lQ(dd)
      }
      closePanel() {
        return !!this.view.open && (this.dropPresses(), this.set(this.closed), !0)
      }
    }
    const FO = "greenvilleDepotView",
      RO = {
        open: !1,
        explosives: [],
        picked: 0,
        selected: 0,
        level: 1,
        line: "demolitionDepotIntro"
      };
    class XO extends WO {
      constructor(dd, Od, md, Wd) {
        super(RO, dd, Od), this.picks = void 0, this.select = dd => {
          this.set({
            ...this.getView(),
            selected: dd
          })
        }, this.xN = dd => {
          const Od = this.getView();
          dd !== Od.picked && (this.picks.pushLatest(dd), this.set({
            ...Od,
            picked: dd,
            line: "demolitionGrubnikPicked"
          }))
        }, this.onAnswersTimedOut = () => {
          const dd = this.getView();
          dd.open && this.set({
            ...dd,
            picked: this.picks.getLatest()
          })
        }, this.picks = new mO(0, Wd, md, this.onAnswersTimedOut)
      }
      Yt(dd) {
        if ("openDepot" === dd[0]) {
          const Od = dd[4];
          Od && this.picks.takeAnswer();
          const md = this.getView();
          if (Od && !md.open) return;
          this.picks.confirm(dd[2]);
          const Wd = this.picks.getLatest(),
            Fd = !md.open;
          this.show({
            open: !0,
            explosives: dd[1],
            picked: Wd,
            selected: Fd ? Wd : md.selected,
            level: dd[3],
            line: Fd ? "demolitionDepotIntro" : md.line
          })
        } else "closeDepot" !== dd[0] && "hide" !== dd[0] || this.close()
      }
      dropPresses() {
        this.picks.clear()
      }
    }
    var KO = md(1443),
      hO = md(1572),
      vO = md(35549),
      QO = md(4509),
      tO = md(2060),
      oO = md(5194);

    function NO(dd) {
      var Od;
      let {
        item: md,
        className: Wd
      } = dd;
      return (0, xd.jsx)(tO.d, {
        className: Wd,
        text: null !== (Od = (0, vO.displayNameOf)((0, QO.d)(md))) && void 0 !== Od ? Od : md
      })
    }

    function qO(dd) {
      let {
        item: Od
      } = dd;
      return (0, xd.jsx)(gd.c, {
        itemName: Od,
        amount: 0
      })
    }

    function HO(dd) {
      let {
        open: Od,
        onDismiss: md,
        title: Wd,
        className: Fd,
        headerExtra: Rd,
        tabs: Xd,
        status: Kd,
        children: hd
      } = dd;
      const vd = `${Fd}Title`;
      return (0, xd.jsx)(oO.c, {
        show: Od,
        close: md,
        togglePointerLock: !1,
        ignorePressesAsShown: !0,
        className: "GreenvilleBoardOverlay",
        children: (0, xd.jsxs)("section", {
          className: Td()("GreenvilleBoard", Fd),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": vd,
          children: [(0, xd.jsxs)("header", {
            className: "GreenvilleBoardHeader",
            children: [(0, xd.jsx)("h2", {
              id: vd,
              className: "VisuallyHidden",
              children: Wd
            }), Rd, (0, xd.jsx)(hO.j, {
              onClick: md
            })]
          }), Xd, (0, xd.jsx)("div", {
            className: "GreenvilleBoardBody",
            children: hd
          }), Kd && (0, xd.jsxs)("footer", {
            className: "GreenvilleBoardStatus",
            children: [(0, xd.jsx)("span", {
              className: "GreenvilleBoardSpeaker",
              children: Kd.speaker
            }), Kd.line]
          })]
        })
      })
    }

    function yO(dd) {
      let {
        tabs: Od,
        selected: md,
        onSelect: Wd
      } = dd;
      return (0, xd.jsx)("nav", {
        className: "GreenvilleBoardTabs",
        "data-pad-tabs": "1",
        children: Od.map((dd => {
          const Od = dd.id === md;
          return (0, xd.jsxs)("button", {
            type: "button",
            className: Td()("GreenvilleBoardTab", {
              Selected: Od
            }),
            "aria-pressed": Od,
            "data-pad-tab": !0,
            "data-pad-selected": Od ? "true" : void 0,
            onClick: () => {
              Wd(dd.id)
            },
            children: [dd.label, dd.badge]
          }, dd.id)
        }))
      })
    }

    function bO(dd) {
      let {
        className: Od,
        roomy: md = !1,
        children: Wd
      } = dd;
      return (0, xd.jsx)("div", {
        className: Td()("GreenvilleBoardTiles", Od, {
          Roomy: md
        }),
        style: md ? {
          "--tile-columns": (Fd = hd.Children.count(Wd), Fd <= 3 ? Fd : Math.min(4, Math.ceil(Fd / 2)))
        } : void 0,
        "data-pad-select-on-focus": !0,
        children: Wd
      });
      var Fd
    }

    function TO(dd) {
      let {
        icon: Od,
        name: md,
        selected: Wd,
        locked: Fd = !1,
        className: Rd,
        onSelect: Xd,
        children: Kd
      } = dd;
      return (0, xd.jsxs)("button", {
        type: "button",
        className: Td()("GreenvilleBoardTile", Rd, {
          Selected: Wd,
          Locked: Fd
        }),
        "aria-pressed": Wd,
        "data-pad-default-focus": Wd || void 0,
        onClick: Xd,
        children: [(0, xd.jsx)("span", {
          className: "GreenvilleBoardTileIcon",
          children: Od
        }), (0, xd.jsx)("span", {
          className: "GreenvilleBoardTileName",
          children: md
        }), Kd]
      })
    }

    function pO(dd) {
      let {
        icon: Od,
        name: md,
        badges: Wd,
        children: Fd
      } = dd;
      return (0, xd.jsxs)("section", {
        className: "GreenvilleBoardDetail",
        children: [(0, xd.jsxs)("header", {
          className: "GreenvilleBoardDetailHeader",
          children: [(0, xd.jsx)("span", {
            className: "GreenvilleBoardDetailHero",
            children: (0, xd.jsx)("span", {
              className: "GreenvilleBoardDetailIcon",
              children: Od
            })
          }), (0, xd.jsxs)("div", {
            className: "GreenvilleBoardDetailHeading",
            children: [(0, xd.jsx)("h3", {
              children: md
            }), Wd && (0, xd.jsx)("span", {
              className: "GreenvilleBoardDetailBadges",
              children: Wd
            })]
          })]
        }), Fd]
      })
    }

    function YO(dd) {
      let {
        level: Od
      } = dd;
      const {
        t: md
      } = (0, Jd.G)();
      return (0, xd.jsxs)("span", {
        className: "GreenvilleBoardBadge Muted",
        children: [(0, xd.jsx)(KO.c, {
          name: "lock"
        }), md("greenvilleGame:boardLevelBadge", {
          level: Od
        })]
      })
    }

    function gO() {
      const {
        t: dd
      } = (0, Jd.G)();
      return (0, xd.jsx)("span", {
        className: "GreenvilleBoardBadge",
        children: dd("greenvilleGame:demolitionDepotPicked")
      })
    }

    function wO(dd) {
      let {
        line: Od,
        picked: md,
        level: Wd
      } = dd;
      const Fd = Od[3];
      return (0, xd.jsxs)(xd.Fragment, {
        children: [md && (0, xd.jsx)(gO, {}), Fd > Wd && (0, xd.jsx)(YO, {
          level: Fd
        })]
      })
    }

    function aO(dd) {
      let {
        view: Od,
        controller: md
      } = dd;
      const {
        t: Wd
      } = (0, Jd.G)(), Fd = Od.selected, Rd = Od.explosives[Fd], [Xd, Kd, hd, vd, Qd] = Rd, td = Fd === Od.picked, od = vd > Od.level;
      return (0, xd.jsxs)(pO, {
        icon: (0, xd.jsx)(qO, {
          item: Xd
        }),
        name: Wd(`greenvilleGame:${Kd}`),
        badges: od && (0, xd.jsx)(YO, {
          level: vd
        }),
        children: [(0, xd.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: Wd(`greenvilleGame:${hd}`)
        }), (0, xd.jsx)("p", {
          className: "GreenvilleDepotStencil",
          children: Wd("greenvilleGame:demolitionDepotMaxLive", {
            count: Qd
          })
        }), (0, xd.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [td && (0, xd.jsx)("span", {
            className: "GreenvilleDepotLoaded",
            children: Wd("greenvilleGame:demolitionDepotPicked")
          }), !td && (0, xd.jsx)(hO.g, {
            disabled: od,
            onClick: () => {
              md.xN(Fd)
            },
            children: Wd("greenvilleGame:demolitionDepotLoad")
          }), od && (0, xd.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: Wd("greenvilleGame:demolitionDepotLocked", {
              level: vd
            })
          })]
        })]
      })
    }

    function EO(dd) {
      let {
        controller: Od
      } = dd;
      const md = (0, wd.i)(FO, Od.getView()),
        {
          t: Wd
        } = (0, Jd.G)();
      return 0 === md.explosives.length ? null : (0, xd.jsxs)(HO, {
        open: md.open,
        onDismiss: Od.dismiss,
        title: Wd("greenvilleGame:demolitionDepotTitle"),
        className: "GreenvilleDepotBoard",
        headerExtra: (0, xd.jsx)("span", {
          className: "GreenvilleBoardLevel",
          children: Wd("greenvilleGame:demolitionDepotLevel", {
            level: md.level
          })
        }),
        status: {
          speaker: Wd("greenvilleGame:demolitionGrubnikName"),
          line: Wd(`greenvilleGame:${md.line}`)
        },
        children: [(0, xd.jsx)(bO, {
          roomy: !0,
          children: md.explosives.map(((dd, Fd) => {
            const [Rd, Xd, Kd, hd, vd] = dd;
            return (0, xd.jsxs)(TO, {
              icon: (0, xd.jsx)(qO, {
                item: Rd
              }),
              name: Wd(`greenvilleGame:${Xd}`),
              selected: Fd === md.selected,
              locked: hd > md.level,
              className: Td()("GreenvilleDepotCrate", {
                Picked: Fd === md.picked
              }),
              onSelect: () => {
                Od.select(Fd)
              },
              children: [(0, xd.jsx)(wO, {
                line: dd,
                picked: Fd === md.picked,
                level: md.level
              }), (0, xd.jsx)("span", {
                className: "GreenvilleDepotStencil",
                children: Wd("greenvilleGame:demolitionDepotMaxLive", {
                  count: vd
                })
              }), (0, xd.jsx)("span", {
                className: "GreenvilleDepotBlurb",
                children: Wd(`greenvilleGame:${Kd}`)
              })]
            }, Rd)
          }))
        }), (0, xd.jsx)(aO, {
          view: md,
          controller: Od
        })]
      })
    }
    const JO = "greenvilleGarageView",
      UO = {
        open: !1,
        cars: [],
        out: null,
        awaiting: !1,
        selected: null,
        line: "dealershipGarageIntro"
      };
    class xO extends WO {
      constructor(dd, Od, md, Wd) {
        super(UO, dd, Od), this.picks = void 0, this.select = dd => {
          this.set({
            ...this.getView(),
            selected: dd
          })
        }, this.xN = dd => {
          dd !== this.picks.getLastPending() && (this.picks.pushLatest(dd), this.set({
            ...this.getView(),
            out: dd,
            awaiting: !this.picks.Nt(),
            line: "dealershipGarageTip"
          }))
        }, this.onAnswersTimedOut = () => {
          const dd = this.getView();
          dd.open && this.set({
            ...dd,
            out: this.picks.getLatest(),
            awaiting: !this.picks.Nt()
          })
        }, this.picks = new mO(null, Wd, md, this.onAnswersTimedOut)
      }
      Yt(dd) {
        if ("open" === dd[0]) {
          var Od;
          const md = dd[3];
          md && this.picks.takeAnswer();
          const Wd = this.getView();
          if (md && !Wd.open) return;
          this.picks.confirm(dd[2]);
          const Fd = dd[1],
            Rd = this.picks.getLatest(),
            Xd = !Wd.open;
          this.show({
            open: !0,
            cars: Fd,
            out: Rd,
            awaiting: !this.picks.Nt(),
            selected: Xd ? null !== (Od = null !== Rd && void 0 !== Rd ? Rd : Fd[0]) && void 0 !== Od ? Od : null : Wd.selected,
            line: Xd ? "dealershipGarageIntro" : Wd.line
          })
        } else this.close()
      }
      dropPresses() {
        this.picks.clear()
      }
    }

    function BO() {
      const {
        t: dd
      } = (0, Jd.G)();
      return (0, xd.jsx)("span", {
        className: "GreenvilleBoardBadge",
        children: dd("greenvilleGame:dealershipGarageOut")
      })
    }

    function SO(dd) {
      let {
        car: Od,
        out: md,
        awaiting: Wd,
        controller: Fd
      } = dd;
      const {
        t: Rd
      } = (0, Jd.G)();
      return (0, xd.jsx)(pO, {
        icon: (0, xd.jsx)(qO, {
          item: Od
        }),
        name: (0, xd.jsx)(NO, {
          item: Od
        }),
        children: (0, xd.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [md && (0, xd.jsx)("span", {
            className: "GreenvilleGarageOutStamp",
            children: Rd("greenvilleGame:dealershipGarageOut")
          }), (0, xd.jsx)(hO.g, {
            disabled: md && Wd,
            onClick: () => {
              Fd.xN(Od)
            },
            children: Rd(md ? "greenvilleGame:dealershipGarageBringBack" : "greenvilleGame:dealershipGarageTakeOut")
          })]
        })
      })
    }

    function sO(dd) {
      let {
        controller: Od
      } = dd;
      const md = (0, wd.i)(JO, Od.getView()),
        {
          t: Wd
        } = (0, Jd.G)(),
        Fd = 0 === md.cars.length;
      return (0, xd.jsxs)(HO, {
        open: md.open,
        onDismiss: Od.dismiss,
        title: Wd("greenvilleGame:dealershipGarageTitle"),
        className: "GreenvilleGarageBoard",
        status: {
          speaker: Wd("greenvilleGame:dealershipDelName"),
          line: Wd(Fd ? "greenvilleGame:dealershipGarageEmpty" : `greenvilleGame:${md.line}`)
        },
        children: [!Fd && (0, xd.jsx)(bO, {
          roomy: !0,
          children: md.cars.map((dd => {
            const Wd = dd === md.out;
            return (0, xd.jsx)(TO, {
              icon: (0, xd.jsx)(qO, {
                item: dd
              }),
              name: (0, xd.jsx)(NO, {
                item: dd
              }),
              selected: dd === md.selected,
              className: Td()("GreenvilleGarageBay", {
                Out: Wd
              }),
              onSelect: () => {
                Od.select(dd)
              },
              children: Wd && (0, xd.jsx)(BO, {})
            }, dd)
          }))
        }), null !== md.selected && (0, xd.jsx)(SO, {
          car: md.selected,
          out: md.selected === md.out,
          awaiting: md.awaiting,
          controller: Od
        })]
      })
    }
    const uO = {
        kind: "intro"
      },
      VO = {
        open: !1,
        orders: [],
        tracked: null,
        sellLines: [],
        level: 1,
        delivering: [],
        tab: "orders",
        selectedSlot: 0,
        selectedWood: 0,
        line: uO
      };

    function iO(dd) {
      let [Od, md, Wd, Fd, Rd, Xd] = dd;
      return {
        slot: Od,
        titleKey: md,
        items: Wd,
        exp: Fd,
        gold: Rd,
        WQ: Xd,
        ready: Wd.every((dd => {
          let [, Od, md] = dd;
          return md >= Od
        }))
      }
    }

    function AO(dd, Od) {
      return "sell" === Od.action ? function(dd, Od) {
        const md = dd.sellLines.map((dd => {
          const [md, , Wd] = dd;
          return null !== Od && Od !== md ? dd : [md, 0, Wd]
        }));
        return {
          ...dd,
          sellLines: md
        }
      }(dd, Od.item) : "accept" === Od.action ? function(dd, Od) {
        var md;
        const Wd = dd.orders[Od];
        return {
          ...dd,
          tracked: null !== (md = dd.tracked) && void 0 !== md ? md : Od,
          orders: dd.orders.map((dd => dd === Wd ? {
            ...dd,
            WQ: !0
          } : dd)),
          sellLines: dd.sellLines.map((dd => {
            const [Od, md, Fd] = dd, Rd = Wd.items.find((dd => {
              let [md] = dd;
              return md === Od
            }));
            return void 0 === Rd ? dd : [Od, Math.max(0, md - Rd[1]), Fd]
          }))
        }
      }(dd, Od.slot) : "track" === Od.action ? {
        ...dd,
        tracked: Od.slot
      } : {
        ...dd,
        delivering: [...dd.delivering, Od.slot]
      }
    }
    const rO = "greenvilleLumberMillView",
      GO = "greenvilleLumberTrackerView";
    class nO extends WO {
      constructor(dd, Od, md, Wd, Rd) {
        super(VO, dd, md), this.publishTracker = Od, this.board = null, this.commands = void 0, this.tracker = null, this.tab = "orders", this.selectedSlot = 0, this.selectedWood = 0, this.line = uO, this.selectTab = dd => {
          this.tab = dd, this.set({
            ...this.getView(),
            tab: dd
          })
        }, this.selectOrder = dd => {
          this.selectedSlot = dd, this.set({
            ...this.getView(),
            selectedSlot: dd
          })
        }, this.selectWood = dd => {
          this.selectedWood = dd, this.set({
            ...this.getView(),
            selectedWood: dd
          })
        }, this.accept = dd => {
          this.findOrder(dd).WQ || this.queue({
            action: "accept",
            slot: dd
          })
        }, this.track = dd => {
          this.getView().tracked !== dd && this.findOrder(dd).WQ && this.queue({
            action: "track",
            slot: dd
          })
        }, this.deliver = dd => {
          const Od = this.findOrder(dd);
          Od.WQ && Od.ready && !this.getView().delivering.includes(dd) && this.queue({
            action: "deliver",
            slot: dd
          })
        }, this.sell = dd => {
          this.getView().sellLines.some((Od => {
            let [md, Wd] = Od;
            return Wd > 0 && (null === dd || dd === md)
          })) && this.queue({
            action: "sell",
            item: dd
          })
        }, this.onAnswersTimedOut = () => {
          this.getView().open && this.set(this.getBoardView())
        }, this.commands = new OO(Rd, (dd => {
          Wd(function(dd) {
            return "sell" === dd.action ? null === dd.item ? `${Fd}sell` : `${Fd}sell ${dd.item}` : `${Fd}${dd.action} ${dd.slot}`
          }(dd))
        }), this.onAnswersTimedOut)
      }
      getTracker() {
        return this.tracker
      }
      Yt(dd) {
        if ("open" === dd[0]) {
          const md = dd[5],
            Wd = md ? this.commands.takeAnswer() : null,
            Fd = !this.getView().open;
          if (md && Fd) return;
          if (Fd) this.onReopened(dd);
          else if (null !== Wd) {
            var Od;
            this.line = null !== (Od = function(dd, Od, md) {
              if ("deliver" === dd.action) {
                const [, Wd] = Od[1][dd.slot];
                return md[1][dd.slot][5] ? null : {
                  kind: "delivered",
                  titleKey: Wd
                }
              }
              if ("sell" !== dd.action) return null;
              let Wd = 0;
              return Od[3].forEach(((Od, Fd) => {
                let [Rd, Xd] = Od;
                null !== dd.item && dd.item !== Rd || (Wd += Math.max(0, Xd - md[3][Fd][1]))
              })), Wd > 0 ? {
                kind: "bought",
                count: Wd
              } : null
            }(Wd, this.board, dd)) && void 0 !== Od ? Od : this.line
          }
          this.board = dd, this.show(this.getBoardView())
        } else "close" === dd[0] ? this.close() : (this.tracker = null === dd[1] ? null : iO(dd[1]), this.publishTracker(this.tracker))
      }
      dropPresses() {
        this.commands.clear(), this.board = null
      }
      findOrder(dd) {
        return this.getView().orders.find((Od => Od.slot === dd))
      }
      onReopened(dd) {
        let [, Od, , md] = dd;
        const Wd = Od.map(iO).find((dd => dd.WQ && dd.ready)),
          Fd = md.findIndex((dd => {
            let [, Od] = dd;
            return Od > 0
          }));
        void 0 === Wd && -1 !== Fd || (this.tab = "orders"), void 0 !== Wd && (this.selectedSlot = Wd.slot), -1 === Fd || this.selectedWood < md.length && md[this.selectedWood][1] > 0 || (this.selectedWood = Fd), this.line = uO
      }
      getBoardView() {
        const [, dd, Od, md, Wd] = this.board;
        let Fd = {
          open: !0,
          orders: dd.map(iO),
          tracked: Od,
          sellLines: md,
          level: Wd,
          delivering: [],
          tab: this.tab,
          selectedSlot: this.selectedSlot,
          selectedWood: this.selectedWood,
          line: this.line
        };
        for (const Rd of this.commands.getPending()) Fd = AO(Fd, Rd);
        return Fd
      }
      queue(dd) {
        this.commands.push(dd), this.set(this.getBoardView())
      }
    }
    var LO = md(1471),
      PO = md(2125);

    function zO(dd) {
      let {
        amount: Od,
        item: md = Id,
        jK: Wd,
        inTile: Fd = !1,
        iconRef: Rd
      } = dd;
      return (0, xd.jsx)(LO.g, {
        delayShow: 200,
        hoverOnly: Fd,
        placement: "top",
        tooltipClassName: "GreenvilleChipTooltipBox",
        tooltipInner: (0, xd.jsx)(cO, {
          item: md,
          amount: Od,
          jK: Wd
        }),
        children: (0, xd.jsxs)("span", {
          className: Td()("GreenvilleBoardChip", {
            Short: void 0 !== Wd && Wd < Od
          }),
          children: [(0, xd.jsx)("span", {
            ref: Rd,
            className: "GreenvilleBoardChipIcon",
            children: (0, xd.jsx)(qO, {
              item: md
            })
          }), Od.toLocaleString()]
        })
      })
    }

    function cO(dd) {
      let {
        item: Od,
        amount: md,
        jK: Wd
      } = dd;
      const {
        t: Fd
      } = (0, Jd.G)(), Rd = (0, PO.f)("itemInfo", (dd => dd[Od]));
      return (0, xd.jsxs)("div", {
        className: "GreenvilleChipTooltip",
        children: [(0, xd.jsxs)("div", {
          className: "GreenvilleChipTooltipHeader",
          children: [(0, xd.jsx)("span", {
            className: "GreenvilleChipTooltipIcon",
            children: (0, xd.jsx)(qO, {
              item: Od
            })
          }), (0, xd.jsx)(NO, {
            item: Od,
            className: "GreenvilleChipTooltipName"
          })]
        }), void 0 !== (null === Rd || void 0 === Rd ? void 0 : Rd.description) && (0, xd.jsx)(tO.d, {
          text: Rd.description,
          className: "GreenvilleChipTooltipDescription"
        }), void 0 !== Wd && (0, xd.jsxs)("div", {
          className: Td()("GreenvilleChipTooltipHeld", {
            Short: Wd < md
          }),
          children: [(0, xd.jsx)("span", {
            className: "GreenvilleChipTooltipLabel",
            children: Fd("greenvilleGame:boardYouHave")
          }), (0, xd.jsxs)("span", {
            className: "GreenvilleChipTooltipCount",
            children: [(0, xd.jsx)("span", {
              className: "GreenvilleChipTooltipHeldAmount",
              children: Wd.toLocaleString()
            }), ` / ${md.toLocaleString()}`]
          }), (0, xd.jsx)("span", {
            className: "GreenvilleChipTooltipMeter",
            children: (0, xd.jsx)("span", {
              style: {
                width: (md > 0 ? 100 * Math.min(1, Wd / md) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function jO(dd) {
      let {
        children: Od
      } = dd;
      const md = (0, hd.useRef)(null);
      (0, Dd.g)(ed, md);
      const Wd = (0, Dd.j)(ed, ld());
      return (0, xd.jsxs)("div", {
        className: "GreenvilleBoardWallet",
        children: [Od, (0, xd.jsx)(zO, {
          amount: Wd,
          iconRef: md
        })]
      })
    }

    function DO(dd, Od, md) {
      const Wd = (0, hd.useRef)({
          slot: dd,
          WQ: Od
        }),
        Fd = (0, hd.useRef)(-1 / 0);
      return (0, hd.useLayoutEffect)((() => {
        Wd.current.slot === dd && Wd.current.WQ && !Od && (Fd.current = performance.now()), Wd.current = {
          slot: dd,
          WQ: Od
        }
      }), [dd, Od]), () => {
        performance.now() - Fd.current >= 500 && md(dd)
      }
    }
    const eO = {
      New: "lumberBoardStateNew",
      Accepted: "lumberBoardStateAccepted",
      Tracking: "lumberBoardTracking",
      Ready: "lumberBoardStateReady"
    };

    function IO(dd, Od) {
      return dd.WQ ? dd.ready ? "Ready" : dd.slot === Od ? "Tracking" : "Accepted" : "New"
    }

    function lO(dd) {
      let {
        state: Od
      } = dd;
      const {
        t: md
      } = (0, Jd.G)();
      return (0, xd.jsx)("span", {
        className: Td()("GreenvilleBoardBadge GreenvilleLumberState", Od, {
          Muted: "Accepted" === Od
        }),
        children: md(`greenvilleGame:${eO[Od]}`)
      })
    }

    function CO(dd) {
      let {
        order: Od
      } = dd;
      return (0, xd.jsx)("span", {
        className: "GreenvilleLumberNeeds",
        children: Od.items.map((dd => {
          let [Od, md, Wd] = dd;
          const Fd = Wd >= md;
          return (0, xd.jsxs)("span", {
            className: Td()("GreenvilleLumberNeed", {
              Met: Fd
            }),
            children: [(0, xd.jsx)("span", {
              className: "GreenvilleLumberNeedIcon",
              children: (0, xd.jsx)(qO, {
                item: Od
              })
            }), (0, xd.jsx)(NO, {
              item: Od,
              className: "GreenvilleLumberNeedName"
            }), (0, xd.jsxs)("span", {
              className: "GreenvilleLumberNeedCount",
              children: [Math.min(Wd, md).toLocaleString(), "/", md.toLocaleString()]
            }), (0, xd.jsx)("span", {
              className: "GreenvilleLumberNeedTick",
              "aria-hidden": "true",
              children: Fd && "\u2713"
            })]
          }, Od)
        }))
      })
    }

    function ZO(dd) {
      let {
        order: Od,
        inTile: md = !1
      } = dd;
      const {
        t: Wd
      } = (0, Jd.G)();
      return (0, xd.jsxs)("span", {
        className: "GreenvilleLumberReward",
        children: [(0, xd.jsx)(zO, {
          amount: Od.gold,
          inTile: md
        }), (0, xd.jsx)("span", {
          className: "GreenvilleLumberExp",
          children: Wd("greenvilleGame:boardExpGain", {
            exp: Od.exp
          })
        })]
      })
    }

    function kO(dd) {
      let {
        view: Od,
        order: md,
        controller: Wd
      } = dd;
      const {
        t: Fd
      } = (0, Jd.G)(), {
        slot: Rd,
        items: Xd,
        WQ: Kd,
        ready: hd
      } = md, vd = DO(Rd, Kd, Wd.accept), Qd = Xd.reduce(((dd, Od) => {
        let [, md, Wd] = Od;
        return dd + Math.max(0, md - Wd)
      }), 0);
      return (0, xd.jsxs)("div", {
        className: "GreenvilleBoardActions",
        children: [!Kd && (0, xd.jsx)(hO.g, {
          onClick: vd,
          children: Fd("greenvilleGame:lumberBoardAccept")
        }), Kd && (0, xd.jsx)(hO.m, {
          disabled: !hd,
          loading: Od.delivering.includes(Rd),
          onClick: () => {
            Wd.deliver(Rd)
          },
          children: Fd("greenvilleGame:lumberBoardDeliver")
        }), Kd && !hd && (0, xd.jsx)("span", {
          className: "GreenvilleBoardHint",
          children: Fd("greenvilleGame:lumberBoardDeliverMissing", {
            count: Qd
          })
        }), Kd && Rd !== Od.tracked && (0, xd.jsx)(hO.S, {
          onClick: () => {
            Wd.track(Rd)
          },
          children: Fd("greenvilleGame:lumberBoardTrack")
        })]
      })
    }

    function fO(dd) {
      let {
        view: Od,
        controller: md
      } = dd;
      const {
        t: Wd
      } = (0, Jd.G)(), Fd = Od.orders[Od.selectedSlot], Rd = IO(Fd, Od.tracked), Xd = Fd.WQ && Fd.slot === Od.tracked;
      return (0, xd.jsxs)(pO, {
        icon: (0, xd.jsx)(qO, {
          item: Fd.items[0][0]
        }),
        name: Wd(`greenvilleGame:${Fd.titleKey}`),
        badges: (0, xd.jsxs)(xd.Fragment, {
          children: [(0, xd.jsx)(lO, {
            state: Rd
          }), Xd && "Ready" === Rd && (0, xd.jsx)(lO, {
            state: "Tracking"
          })]
        }),
        children: [(0, xd.jsx)(CO, {
          order: Fd
        }), (0, xd.jsx)("dl", {
          className: "GreenvilleBoardFacts",
          children: (0, xd.jsxs)("div", {
            children: [(0, xd.jsx)("dt", {
              children: Wd("greenvilleGame:lumberBoardReward")
            }), (0, xd.jsx)("dd", {
              children: (0, xd.jsx)(ZO, {
                order: Fd
              })
            })]
          })
        }), (0, xd.jsx)(kO, {
          view: Od,
          order: Fd,
          controller: md
        })]
      })
    }

    function MO(dd) {
      let {
        view: Od,
        controller: md
      } = dd;
      const {
        t: Wd
      } = (0, Jd.G)();
      return (0, xd.jsxs)(xd.Fragment, {
        children: [(0, xd.jsx)(bO, {
          className: "GreenvilleLumberTickets",
          roomy: !0,
          children: Od.orders.map((dd => {
            const Fd = IO(dd, Od.tracked);
            return (0, xd.jsxs)(TO, {
              icon: (0, xd.jsx)(qO, {
                item: dd.items[0][0]
              }),
              name: Wd(`greenvilleGame:${dd.titleKey}`),
              selected: dd.slot === Od.selectedSlot,
              className: Td()("GreenvilleLumberTicket", Fd),
              onSelect: () => {
                md.selectOrder(dd.slot)
              },
              children: [(0, xd.jsx)(lO, {
                state: Fd
              }), (0, xd.jsx)(CO, {
                order: dd
              }), (0, xd.jsx)(ZO, {
                order: dd,
                inTile: !0
              })]
            }, dd.slot)
          }))
        }), (0, xd.jsx)(fO, {
          view: Od,
          controller: md
        })]
      })
    }

    function dm(dd) {
      let {
        item: Od
      } = dd;
      return (0, xd.jsx)("span", {
        className: "GreenvilleLumberLogEnd",
        children: (0, xd.jsx)(qO, {
          item: Od
        })
      })
    }

    function Om(dd) {
      let {
        view: Od,
        controller: md
      } = dd;
      const {
        t: Wd
      } = (0, Jd.G)(), [Fd, Rd, Xd] = Od.sellLines[Od.selectedWood], Kd = function(dd, Od) {
        let md = 0,
          Wd = 0;
        for (const Fd of dd.orders)
          if (Fd.WQ)
            for (const [dd, Rd, Xd] of Fd.items) dd === Od && (md += Rd, Wd = Xd);
        return Math.min(md, Wd)
      }(Od, Fd), hd = Od.sellLines.some((dd => {
        let [, Od] = dd;
        return Od > 0
      }));
      return (0, xd.jsxs)(pO, {
        icon: (0, xd.jsx)(dm, {
          item: Fd
        }),
        name: (0, xd.jsx)(NO, {
          item: Fd
        }),
        badges: Rd > 0 && (0, xd.jsx)("span", {
          className: "GreenvilleBoardBadge",
          children: Wd("greenvilleGame:lumberBoardSellHeld", {
            count: Rd
          })
        }),
        children: [(0, xd.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, xd.jsxs)("div", {
            children: [(0, xd.jsx)("dt", {
              children: Wd("greenvilleGame:boardYouHave")
            }), (0, xd.jsx)("dd", {
              children: (Kd + Rd).toLocaleString()
            })]
          }), (0, xd.jsxs)("div", {
            children: [(0, xd.jsx)("dt", {
              children: Wd("greenvilleGame:lumberBoardSellKept")
            }), (0, xd.jsx)("dd", {
              children: Kd.toLocaleString()
            })]
          }), (0, xd.jsxs)("div", {
            children: [(0, xd.jsx)("dt", {
              children: Wd("greenvilleGame:lumberBoardSellSpare")
            }), (0, xd.jsx)("dd", {
              className: Td()("GreenvilleLumberSpare", {
                None: 0 === Rd
              }),
              children: Rd.toLocaleString()
            })]
          }), (0, xd.jsxs)("div", {
            children: [(0, xd.jsx)("dt", {
              children: Wd("greenvilleGame:lumberBoardSellEach")
            }), (0, xd.jsx)("dd", {
              children: (0, xd.jsx)(zO, {
                amount: Xd
              })
            })]
          })]
        }), (0, xd.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [(0, xd.jsxs)(hO.m, {
            disabled: 0 === Rd,
            onClick: () => {
              md.sell(Fd)
            },
            children: [Rd > 0 && Wd("greenvilleGame:lumberBoardSell", {
              count: Rd
            }), 0 === Rd && Wd(Kd > 0 ? "greenvilleGame:lumberBoardSellKeptAll" : "greenvilleGame:lumberBoardSellNone")]
          }), (0, xd.jsx)(hO.g, {
            disabled: !hd,
            onClick: () => {
              md.sell(null)
            },
            children: Wd("greenvilleGame:lumberBoardSellAll")
          })]
        })]
      })
    }

    function mm(dd) {
      let {
        view: Od,
        controller: md
      } = dd;
      const {
        t: Wd
      } = (0, Jd.G)();
      return (0, xd.jsxs)(xd.Fragment, {
        children: [(0, xd.jsx)(bO, {
          className: "GreenvilleLumberWoodPile",
          children: Od.sellLines.map(((dd, Fd) => {
            let [Rd, Xd, Kd] = dd;
            return (0, xd.jsxs)(TO, {
              icon: (0, xd.jsx)(dm, {
                item: Rd
              }),
              name: (0, xd.jsx)(NO, {
                item: Rd
              }),
              selected: Fd === Od.selectedWood,
              className: Td()("GreenvilleLumberWood", {
                Spare: Xd > 0
              }),
              onSelect: () => {
                md.selectWood(Fd)
              },
              children: [Xd > 0 && (0, xd.jsx)("span", {
                className: "GreenvilleBoardBadge",
                children: Wd("greenvilleGame:lumberBoardSellHeld", {
                  count: Xd
                })
              }), (0, xd.jsx)(zO, {
                amount: Kd,
                inTile: !0
              })]
            }, Rd)
          }))
        }), (0, xd.jsx)(Om, {
          view: Od,
          controller: md
        })]
      })
    }

    function Wm(dd) {
      let {
        controller: Od
      } = dd;
      const md = (0, wd.i)(rO, Od.getView()),
        {
          t: Wd
        } = (0, Jd.G)(),
        Fd = function(dd) {
          const {
            t: Od
          } = (0, Jd.G)();
          return "delivered" === dd.kind ? Od("greenvilleGame:lumberTimbertoothThanks", {
            order: Od(`greenvilleGame:${dd.titleKey}`)
          }) : "bought" === dd.kind ? Od("greenvilleGame:lumberTimbertoothBought", {
            count: dd.count
          }) : Od("greenvilleGame:lumberBoardIntro")
        }(md.line);
      if (0 === md.orders.length) return null;
      const Rd = md.orders.filter((dd => dd.WQ && dd.ready)).length,
        Xd = md.sellLines.reduce(((dd, Od) => {
          let [, md] = Od;
          return dd + md
        }), 0);
      return (0, xd.jsxs)(HO, {
        open: md.open,
        onDismiss: Od.dismiss,
        title: Wd("greenvilleGame:lumberBoardTitle"),
        className: "GreenvilleLumberBoard",
        headerExtra: (0, xd.jsx)(jO, {
          children: (0, xd.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: Wd("greenvilleGame:lumberBoardLevel", {
              level: md.level
            })
          })
        }),
        tabs: (0, xd.jsx)(yO, {
          tabs: [{
            id: "orders",
            label: Wd("greenvilleGame:lumberBoardOrders"),
            badge: Rd > 0 && (0, xd.jsx)("span", {
              className: "GreenvilleBoardBadge Ready",
              children: Wd("greenvilleGame:lumberBoardReadyCount", {
                count: Rd
              })
            })
          }, {
            id: "sell",
            label: Wd("greenvilleGame:lumberBoardSellHeading"),
            badge: Xd > 0 && (0, xd.jsx)("span", {
              className: "GreenvilleBoardBadge",
              children: Wd("greenvilleGame:lumberBoardSellHeld", {
                count: Xd
              })
            })
          }],
          selected: md.tab,
          onSelect: Od.selectTab
        }),
        status: {
          speaker: Wd("greenvilleGame:lumberTimbertoothName"),
          line: Fd
        },
        children: ["orders" === md.tab && (0, xd.jsx)(MO, {
          view: md,
          controller: Od
        }), "sell" === md.tab && (0, xd.jsx)(mm, {
          view: md,
          controller: Od
        })]
      })
    }

    function Fm(dd) {
      let {
        controller: Od
      } = dd;
      (0, wd.i)(GO, null);
      const {
        t: md
      } = (0, Jd.G)(), Wd = Od.getTracker();
      return null === Wd ? null : (0, xd.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, xd.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: md(`greenvilleGame:${Wd.titleKey}`)
        }), (0, xd.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: Wd.items.map((dd => {
            let [Od, md, Wd] = dd;
            return (0, xd.jsxs)("li", {
              className: Td()("GreenvilleTrackerRow", {
                Done: Wd >= md
              }),
              children: [(0, xd.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, xd.jsx)(gd.c, {
                  itemName: Od,
                  amount: 0
                })
              }), (0, xd.jsx)(NO, {
                item: Od,
                className: "GreenvilleTrackerLabel"
              }), (0, xd.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [Math.min(Wd, md), "/", md]
              })]
            }, Od)
          }))
        }), Wd.ready && (0, xd.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: md("greenvilleGame:lumberTrackerReady")
        })]
      })
    }
    const Rm = "greenvilleOreBuyerView",
      Xm = {
        open: !1,
        lines: [],
        selected: 0,
        level: 1
      };
    class Km extends WO {
      constructor(dd, Od, md, Wd) {
        super(Xm, dd, Od), this.sales = void 0, this.serverLines = [], this.select = dd => {
          this.set({
            ...this.getView(),
            selected: dd
          })
        }, this.sell = dd => {
          this.getView().lines.some((Od => {
            let [md, , , , Wd] = Od;
            return Wd > 0 && (null === dd || dd === md)
          })) && (this.sales.push(dd), this.set({
            ...this.getView(),
            lines: this.getLines()
          }))
        }, this.onAnswersTimedOut = () => {
          const dd = this.getView();
          dd.open && this.set({
            ...dd,
            lines: this.getLines()
          })
        }, this.sales = new OO(Wd, md, this.onAnswersTimedOut)
      }
      Yt(dd) {
        if ("close" !== dd[0]) {
          const [, Od, md] = dd, Wd = "open" === dd[0] && dd[3];
          Wd && this.sales.takeAnswer();
          const Fd = this.getView();
          if ((Wd || "refresh" === dd[0]) && !Fd.open) return;
          this.serverLines = Od;
          const Rd = Od.findIndex((dd => dd[4] > 0));
          this.show({
            open: !0,
            lines: this.getLines(),
            selected: Fd.open ? Fd.selected : Math.max(0, Rd),
            level: md
          })
        } else this.close()
      }
      dropPresses() {
        this.sales.clear()
      }
      getLines() {
        const dd = this.sales.getPending();
        return this.serverLines.map((Od => {
          const [md, Wd, Fd, Rd, , Xd] = Od;
          return dd.some((dd => null === dd || dd === md)) ? [md, Wd, Fd, Rd, 0, Xd] : Od
        }))
      }
    }

    function hm(dd) {
      let {
        line: Od,
        level: md
      } = dd;
      const {
        t: Wd
      } = (0, Jd.G)(), [, , , Fd, Rd, Xd] = Od;
      return (0, xd.jsxs)(xd.Fragment, {
        children: [Rd > 0 && (0, xd.jsx)("span", {
          className: "GreenvilleBoardBadge",
          children: Wd("greenvilleGame:oreBuyerHeld", {
            count: Rd
          })
        }), Fd > md && (0, xd.jsxs)("span", {
          className: "GreenvilleBoardBadge Muted",
          children: [(0, xd.jsx)(KO.c, {
            name: "lock"
          }), Wd("greenvilleGame:boardLevelBadge", {
            level: Fd
          })]
        }), Fd <= md && Xd && (0, xd.jsx)("span", {
          className: "GreenvilleBoardBadge GreenvilleOreRare",
          children: Wd("greenvilleGame:oreBuyerRare")
        })]
      })
    }

    function Qm(dd) {
      let {
        line: Od
      } = dd;
      return (0, xd.jsx)("span", {
        className: "GreenvilleOreSample",
        children: (0, xd.jsx)(qO, {
          item: Od[0]
        })
      })
    }

    function tm(dd) {
      let {
        view: Od,
        controller: md
      } = dd;
      const {
        t: Wd
      } = (0, Jd.G)(), Fd = Od.lines[Od.selected], [Rd, Xd, Kd, hd, vd, Qd] = Fd, td = hd > Od.level, od = Od.lines.some((dd => dd[4] > 0));
      return (0, xd.jsxs)(pO, {
        icon: (0, xd.jsx)(Qm, {
          line: Fd
        }),
        name: (0, xd.jsx)(NO, {
          item: Rd
        }),
        badges: (0, xd.jsx)(hm, {
          line: Fd,
          level: Od.level
        }),
        children: [(0, xd.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, xd.jsxs)("div", {
            children: [(0, xd.jsx)("dt", {
              children: Wd("greenvilleGame:boardYouHave")
            }), (0, xd.jsx)("dd", {
              className: Td()("GreenvilleOreHeld", {
                None: 0 === vd
              }),
              children: vd.toLocaleString()
            })]
          }), (0, xd.jsxs)("div", {
            children: [(0, xd.jsx)("dt", {
              children: Wd("greenvilleGame:oreBuyerPriceEach")
            }), (0, xd.jsx)("dd", {
              children: (0, xd.jsx)(zO, {
                amount: Xd
              })
            })]
          }), (0, xd.jsxs)("div", {
            children: [(0, xd.jsx)("dt", {
              children: Wd("greenvilleGame:oreBuyerExpEach")
            }), (0, xd.jsxs)("dd", {
              className: "GreenvilleOreExp",
              children: ["+", Kd]
            })]
          })]
        }), Qd && (0, xd.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: Wd("greenvilleGame:oreBuyerLegendary")
        }), td && (0, xd.jsxs)(xd.Fragment, {
          children: [(0, xd.jsx)("p", {
            className: "GreenvilleBoardHint",
            children: Wd("greenvilleGame:oreBuyerLocked", {
              level: hd
            })
          }), (0, xd.jsx)("p", {
            className: "GreenvilleBoardDescription",
            children: Wd("greenvilleGame:oreBuyerTip")
          })]
        }), (0, xd.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [(0, xd.jsxs)(hO.m, {
            disabled: 0 === vd,
            onClick: () => {
              md.sell(Rd)
            },
            children: [vd > 0 && Wd("greenvilleGame:oreBuyerSell", {
              count: vd
            }), 0 === vd && Wd("greenvilleGame:oreBuyerSellNone")]
          }), (0, xd.jsx)(hO.g, {
            disabled: !od,
            onClick: () => {
              md.sell(null)
            },
            children: Wd("greenvilleGame:oreBuyerSellAll")
          })]
        })]
      })
    }

    function om(dd) {
      let {
        controller: Od
      } = dd;
      const md = (0, wd.i)(Rm, Od.getView()),
        {
          t: Wd
        } = (0, Jd.G)();
      return 0 === md.lines.length ? null : (0, xd.jsxs)(HO, {
        open: md.open,
        onDismiss: Od.dismiss,
        title: Wd("greenvilleGame:oreBuyerTitle"),
        className: "GreenvilleOreBuyerBoard",
        headerExtra: (0, xd.jsx)(jO, {
          children: (0, xd.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: Wd("greenvilleGame:oreBuyerLevel", {
              level: md.level
            })
          })
        }),
        status: {
          speaker: Wd("greenvilleGame:oreBuyerName"),
          line: Wd("greenvilleGame:oreBuyerGreet")
        },
        children: [(0, xd.jsx)(bO, {
          roomy: !0,
          children: md.lines.map(((dd, Fd) => {
            const [Rd, Xd, Kd, hd, vd, Qd] = dd;
            return (0, xd.jsxs)(TO, {
              icon: (0, xd.jsx)(Qm, {
                line: dd
              }),
              name: (0, xd.jsx)(NO, {
                item: Rd
              }),
              selected: Fd === md.selected,
              locked: hd > md.level && 0 === vd,
              className: Td()("GreenvilleOreTile", {
                Legendary: Qd
              }),
              onSelect: () => {
                Od.select(Fd)
              },
              children: [(0, xd.jsx)(hm, {
                line: dd,
                level: md.level
              }), (0, xd.jsxs)("span", {
                className: "GreenvilleOrePrice",
                children: [(0, xd.jsx)(zO, {
                  amount: Xd,
                  inTile: !0
                }), (0, xd.jsx)("span", {
                  className: "GreenvilleOreExp",
                  children: Wd("greenvilleGame:boardExpGain", {
                    exp: Kd
                  })
                })]
              })]
            }, Rd)
          }))
        }), (0, xd.jsx)(tm, {
          view: md,
          controller: Od
        })]
      })
    }
    const Nm = {
      kind: "greet"
    };

    function qm(dd) {
      return dd.every((dd => {
        let [, , Od, md] = dd;
        return md >= Od
      }))
    }

    function Hm(dd) {
      let [Od, md, Wd, Fd, Rd, Xd] = dd;
      return {
        slot: Od,
        nameKey: md,
        needs: Wd,
        exp: Fd,
        gold: Rd,
        WQ: Xd,
        ready: qm(Wd)
      }
    }

    function ym(dd, Od) {
      let [, , md, Wd] = dd;
      return Od ? md : md - Wd
    }

    function bm(dd, Od) {
      let [md, Wd] = dd;
      return md === Od.item && null !== Wd === Od.golden
    }

    function Tm(dd, Od) {
      return (Od.golden ? dd.goldenLines : dd.sellLines).find((dd => bm(dd, Od)))
    }

    function pm(dd, Od) {
      return "sell" === Od.action ? wm(function(dd, Od, md) {
        const Wd = dd => {
          if (null !== Od && !bm(dd, Od)) return dd;
          const [Wd, Fd, Rd, Xd, Kd] = dd;
          return [Wd, Fd, Rd - ym(dd, md), md ? 0 : Xd, Kd]
        };
        return {
          ...dd,
          sellLines: dd.sellLines.map(Wd),
          goldenLines: Ym(dd.goldenLines.map(Wd))
        }
      }(dd, Od.kind, Od.all)) : "accept" === Od.action ? function(dd, Od) {
        var md;
        const {
          needs: Wd
        } = dd.orders[Od], Fd = dd => {
          const [Od, md, Fd, Rd, Xd] = dd, Kd = gm(Wd, dd);
          return Kd ? [Od, md, Fd, Math.min(Fd, Rd + Kd[2]), Xd] : dd
        };
        return {
          ...dd,
          tracked: null !== (md = dd.tracked) && void 0 !== md ? md : Od,
          orders: dd.orders.map((dd => dd.slot === Od ? {
            ...dd,
            WQ: !0
          } : dd)),
          sellLines: dd.sellLines.map(Fd),
          goldenLines: dd.goldenLines.map(Fd)
        }
      }(dd, Od.slot) : "track" === Od.action ? {
        ...dd,
        tracked: Od.slot
      } : wm(function(dd, Od) {
        const {
          needs: md
        } = dd.orders[Od], Wd = dd => {
          const [Od, Wd, Fd, Rd, Xd] = dd, Kd = gm(md, dd);
          return Kd ? [Od, Wd, Fd - Kd[2], Rd - Kd[2], Xd] : dd
        };
        return {
          ...dd,
          sellLines: dd.sellLines.map(Wd),
          goldenLines: Ym(dd.goldenLines.map(Wd)),
          delivering: [...dd.delivering, Od]
        }
      }(dd, Od.slot))
    }

    function Ym(dd) {
      return dd.filter((dd => {
        let [, , Od] = dd;
        return Od > 0
      }))
    }

    function gm(dd, Od) {
      let [md, Wd] = Od;
      return dd.find((dd => {
        let [Od, Fd] = dd;
        return Od === md && Fd === Wd
      }))
    }

    function wm(dd) {
      const Od = (Od, md) => {
          const Wd = (null === md ? dd.sellLines : dd.goldenLines).find((dd => {
            let [md] = dd;
            return md === Od
          }));
          return Wd ? Wd[2] : 0
        },
        md = dd.orders.map((md => {
          if (dd.delivering.includes(md.slot)) return md;
          const Wd = md.needs.map((dd => {
            let [md, Wd, Fd] = dd;
            return [md, Wd, Fd, Od(md, Wd)]
          }));
          return {
            ...md,
            needs: Wd,
            ready: qm(Wd)
          }
        }));
      return {
        ...dd,
        orders: md
      }
    }

    function am(dd) {
      let [, , , Od, md] = dd;
      return [...Od, ...md].reduce(((dd, Od) => {
        let [, , md] = Od;
        return dd + md
      }), 0)
    }
    const Em = "greenvilleFarmBoardView",
      Jm = "greenvilleFarmTrackerView",
      Um = {
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
        line: Nm
      };
    class xm extends WO {
      constructor(dd, Od, md, Wd, Fd) {
        super(Um, dd, md), this.publishTracker = Od, this.board = null, this.commands = void 0, this.tracker = null, this.tab = "orders", this.selectedOrder = 0, this.selectedProduce = null, this.line = Nm, this.selectTab = dd => {
          this.tab = dd, this.set(this.getBoardView())
        }, this.selectOrder = dd => {
          this.selectedOrder = dd, this.set(this.getBoardView())
        }, this.selectProduce = dd => {
          this.selectedProduce = dd, this.set(this.getBoardView())
        }, this.accept = dd => {
          this.getView().orders[dd].WQ || this.queue({
            action: "accept",
            slot: dd
          })
        }, this.track = dd => {
          const Od = this.getView();
          Od.tracked !== dd && Od.orders[dd].WQ && this.queue({
            action: "track",
            slot: dd
          })
        }, this.deliver = dd => {
          const Od = this.getView(),
            md = Od.orders[dd];
          md.WQ && md.ready && !Od.delivering.includes(dd) && this.queue({
            action: "deliver",
            slot: dd
          })
        }, this.sell = (dd, Od) => {
          this.queueSale({
            item: dd,
            golden: Od
          }, !1)
        }, this.sellSpare = () => {
          this.queueSale(null, !1)
        }, this.sellAll = () => {
          this.queueSale(null, !0)
        }, this.onAnswersTimedOut = () => {
          this.getView().open && this.set(this.settleView())
        }, this.commands = new OO(Fd, (dd => {
          Wd(function(dd) {
            return "sell" !== dd.action ? `${Rd}${dd.action} ${dd.slot}` : dd.all ? `${Rd}sellAll` : null === dd.kind ? `${Rd}sell` : `${Rd}${dd.kind.golden?"sellGolden":"sell"} ${dd.kind.item}`
          }(dd))
        }), this.onAnswersTimedOut)
      }
      getTracker() {
        return this.tracker
      }
      Yt(dd) {
        if ("open" === dd[0]) {
          const md = dd[7],
            Wd = md ? this.commands.takeAnswer() : null,
            Fd = !this.getView().open;
          if (md && Fd) return;
          const Rd = this.board;
          if (this.board = dd, Fd) this.onReopened();
          else if (null !== Wd) {
            var Od;
            this.line = null !== (Od = function(dd, Od, md) {
              const Wd = md[6] - Od[6];
              if (Wd <= 0) return null;
              if ("deliver" === dd.action) return {
                kind: "delivered",
                nameKey: Od[1][dd.slot][1],
                gold: Wd
              };
              const Fd = am(Od) - am(md);
              return "sell" === dd.action && Fd > 0 ? {
                kind: "sold",
                count: Fd,
                gold: Wd
              } : null
            }(Wd, Rd, dd)) && void 0 !== Od ? Od : this.line
          }
          this.show(this.settleView())
        } else "close" === dd[0] ? this.close() : (this.tracker = null === dd[1] ? null : Hm(dd[1]), this.publishTracker(this.tracker))
      }
      dropPresses() {
        this.commands.clear(), this.board = null
      }
      onReopened() {
        this.line = Nm;
        const dd = this.toView(this.board).orders.find((dd => dd.WQ && dd.ready));
        dd && (this.tab = "orders", this.selectedOrder = dd.slot)
      }
      queueSale(dd, Od) {
        const {
          sellLines: md,
          goldenLines: Wd
        } = this.getView();
        [...md, ...Wd].some((md => ym(md, Od) > 0 && (null === dd || bm(md, dd)))) && this.queue({
          action: "sell",
          kind: dd,
          all: Od
        })
      }
      toView(dd) {
        let [, Od, md, Wd, Fd, Rd] = dd;
        return {
          open: !0,
          orders: Od.map(Hm),
          tracked: md,
          sellLines: Wd,
          goldenLines: Fd,
          level: Rd,
          delivering: [],
          tab: this.tab,
          selectedOrder: this.selectedOrder,
          selectedProduce: this.selectedProduce,
          line: this.line
        }
      }
      getBoardView() {
        let dd = this.toView(this.board);
        for (const Od of this.commands.getPending()) dd = pm(dd, Od);
        return {
          ...dd,
          selectedProduce: this.pickProduce(dd)
        }
      }
      settleView() {
        const dd = this.getBoardView();
        return this.commands.Nt() && (this.selectedProduce = dd.selectedProduce), dd
      }
      pickProduce(dd) {
        var Od, md;
        const Wd = this.selectedProduce;
        if (Wd && Tm(dd, Wd)) return Wd;
        if (Wd) return {
          item: Wd.item,
          golden: !1
        };
        const [Fd, Rd] = null !== (Od = null !== (md = dd.goldenLines[0]) && void 0 !== md ? md : dd.sellLines.find((dd => {
          let [, , Od] = dd;
          return Od > 0
        }))) && void 0 !== Od ? Od : dd.sellLines[0];
        return {
          item: Fd,
          golden: null !== Rd
        }
      }
      queue(dd) {
        this.commands.push(dd), this.set(this.getBoardView())
      }
    }
    var Bm = md(1459);

    function Sm() {
      const dd = (0, hd.useRef)(null);
      return (0, Bm.b)(dd), (0, xd.jsx)("span", {
        ref: dd,
        className: "GreenvilleFarmSparkle",
        "aria-hidden": "true"
      })
    }

    function sm(dd) {
      let {
        item: Od,
        golden: md
      } = dd;
      return (0, xd.jsx)("span", {
        className: Td()("GreenvilleFarmProduce", {
          Golden: md
        }),
        children: (0, xd.jsx)(qO, {
          item: Od
        })
      })
    }

    function um(dd) {
      let {
        item: Od,
        goldenNameKey: md
      } = dd;
      const {
        t: Wd
      } = (0, Jd.G)();
      return null !== md ? (0, xd.jsx)("span", {
        className: "GreenvilleFarmGoldenName",
        children: Wd(md)
      }) : (0, xd.jsx)(NO, {
        item: Od
      })
    }
    const Vm = {
      New: "greenvilleGame:farmBoardNew",
      Accepted: "greenvilleGame:farmBoardAccepted",
      Tracking: "greenvilleGame:farmOrderTracking",
      Ready: "greenvilleGame:farmBoardReady"
    };

    function im(dd, Od) {
      return dd.WQ ? dd.ready ? "Ready" : Od ? "Tracking" : "Accepted" : "New"
    }

    function Am(dd) {
      return dd.needs.some((dd => {
        let [, Od] = dd;
        return null !== Od
      }))
    }

    function rm(dd) {
      let {
        order: Od
      } = dd;
      const [md, Wd] = Od.needs[0];
      return (0, xd.jsx)(sm, {
        item: md,
        golden: null !== Wd
      })
    }

    function Gm(dd) {
      let {
        state: Od
      } = dd;
      const {
        t: md
      } = (0, Jd.G)();
      return (0, xd.jsx)("span", {
        className: Td()("GreenvilleBoardBadge GreenvilleFarmState", Od),
        children: md(Vm[Od])
      })
    }

    function nm(dd) {
      let {
        needs: Od
      } = dd;
      return (0, xd.jsx)("span", {
        className: "GreenvilleFarmNeeds",
        children: Od.map((dd => {
          let [Od, md, Wd, Fd] = dd;
          const Rd = Fd >= Wd;
          return (0, xd.jsxs)("span", {
            className: Td()("GreenvilleFarmNeed", {
              Met: Rd,
              Golden: null !== md
            }),
            children: [(0, xd.jsx)("span", {
              className: "GreenvilleFarmNeedIcon",
              children: (0, xd.jsx)(sm, {
                item: Od,
                golden: null !== md
              })
            }), (0, xd.jsx)("span", {
              className: "GreenvilleFarmNeedName",
              children: (0, xd.jsx)(um, {
                item: Od,
                goldenNameKey: md
              })
            }), (0, xd.jsxs)("span", {
              className: "GreenvilleFarmNeedCount",
              children: [Rd && "\u2713 ", Math.min(Fd, Wd), "/", Wd]
            })]
          }, `${Od}|${md}`)
        }))
      })
    }

    function Lm(dd) {
      let {
        order: Od,
        inTile: md = !1
      } = dd;
      const {
        t: Wd
      } = (0, Jd.G)();
      return (0, xd.jsxs)("span", {
        className: "GreenvilleFarmReward",
        children: [(0, xd.jsx)(zO, {
          amount: Od.gold,
          inTile: md
        }), (0, xd.jsx)("span", {
          className: "GreenvilleFarmExp",
          children: Wd("greenvilleGame:boardExpGain", {
            exp: Od.exp
          })
        })]
      })
    }

    function Pm(dd) {
      let {
        view: Od,
        controller: md
      } = dd;
      const {
        t: Wd
      } = (0, Jd.G)(), Fd = Od.orders[Od.selectedOrder], {
        slot: Rd,
        nameKey: Xd,
        needs: Kd,
        WQ: hd,
        ready: vd
      } = Fd, Qd = Rd === Od.tracked, td = DO(Rd, hd, md.accept), od = Kd.reduce(((dd, Od) => {
        let [, , md, Wd] = Od;
        return dd + Math.max(0, md - Wd)
      }), 0);
      return (0, xd.jsxs)(pO, {
        icon: (0, xd.jsx)(rm, {
          order: Fd
        }),
        name: Wd(Xd),
        badges: (0, xd.jsxs)(xd.Fragment, {
          children: [(0, xd.jsx)(Gm, {
            state: im(Fd, Qd)
          }), Am(Fd) && (0, xd.jsx)("span", {
            className: "GreenvilleBoardBadge GreenvilleFarmGoldenBadge",
            children: Wd("greenvilleGame:farmBoardGolden")
          })]
        }),
        children: [(0, xd.jsx)(nm, {
          needs: Kd
        }), (0, xd.jsx)("dl", {
          className: "GreenvilleBoardFacts",
          children: (0, xd.jsxs)("div", {
            children: [(0, xd.jsx)("dt", {
              children: Wd("greenvilleGame:farmBoardReward")
            }), (0, xd.jsx)("dd", {
              children: (0, xd.jsx)(Lm, {
                order: Fd
              })
            })]
          })
        }), (0, xd.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [!hd && (0, xd.jsx)(hO.g, {
            onClick: td,
            children: Wd("greenvilleGame:farmOrderAccept")
          }), hd && Qd && (0, xd.jsxs)("span", {
            className: "GreenvilleFarmTracking",
            children: [(0, xd.jsx)(KO.c, {
              name: "crosshairs"
            }), Wd("greenvilleGame:farmOrderTracking")]
          }), hd && !Qd && (0, xd.jsx)(hO.S, {
            onClick: () => {
              md.track(Rd)
            },
            children: Wd("greenvilleGame:farmOrderTrack")
          }), hd && (0, xd.jsx)(hO.m, {
            disabled: !vd,
            loading: Od.delivering.includes(Rd),
            onClick: () => {
              md.deliver(Rd)
            },
            children: Wd("greenvilleGame:farmOrderDeliver")
          }), hd && !vd && (0, xd.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: Wd("greenvilleGame:farmBoardMissing", {
              count: od
            })
          })]
        })]
      })
    }

    function zm(dd) {
      let {
        view: Od,
        controller: md
      } = dd;
      const {
        t: Wd
      } = (0, Jd.G)();
      return (0, xd.jsxs)(xd.Fragment, {
        children: [(0, xd.jsx)(bO, {
          roomy: !0,
          children: Od.orders.map((dd => (0, xd.jsxs)(TO, {
            icon: (0, xd.jsx)(rm, {
              order: dd
            }),
            name: Wd(dd.nameKey),
            selected: dd.slot === Od.selectedOrder,
            className: Td()("GreenvilleFarmBasket", {
              WantsGolden: Am(dd)
            }),
            onSelect: () => {
              md.selectOrder(dd.slot)
            },
            children: [(0, xd.jsx)(Gm, {
              state: im(dd, dd.slot === Od.tracked)
            }), (0, xd.jsx)(nm, {
              needs: dd.needs
            }), (0, xd.jsx)(Lm, {
              order: dd,
              inTile: !0
            })]
          }, dd.slot)))
        }), (0, xd.jsx)(Pm, {
          view: Od,
          controller: md
        })]
      })
    }

    function cm(dd) {
      let {
        line: Od,
        selected: md,
        onSelect: Wd
      } = dd;
      const [Fd, Rd, Xd, , Kd] = Od, hd = null !== Rd;
      return (0, xd.jsxs)(TO, {
        icon: (0, xd.jsx)(sm, {
          item: Fd,
          golden: hd
        }),
        name: (0, xd.jsx)(um, {
          item: Fd,
          goldenNameKey: Rd
        }),
        selected: md,
        className: Td()("GreenvilleFarmCrate", {
          Golden: hd,
          Empty: 0 === Xd
        }),
        onSelect: Wd,
        children: [hd && (0, xd.jsx)(Sm, {}), Xd > 0 && (0, xd.jsxs)("span", {
          className: "GreenvilleBoardBadge GreenvilleFarmHeld",
          children: ["\xd7", Xd]
        }), (0, xd.jsx)(zO, {
          amount: Kd,
          inTile: !0
        })]
      })
    }

    function jm(dd) {
      let {
        view: Od,
        controller: md
      } = dd;
      const {
        t: Wd
      } = (0, Jd.G)(), Fd = [...Od.sellLines, ...Od.goldenLines], Rd = Fd.some((dd => ym(dd, !1) > 0)), Xd = Fd.some((dd => ym(dd, !0) > 0));
      return (0, xd.jsxs)("div", {
        className: "GreenvilleFarmSign",
        children: [(0, xd.jsx)("h3", {
          className: "GreenvilleFarmSignBoard",
          children: Wd("greenvilleGame:farmBoardPrices")
        }), (0, xd.jsxs)("div", {
          className: "GreenvilleFarmSignActions",
          children: [(0, xd.jsx)(hO.g, {
            disabled: !Rd,
            onClick: md.sellSpare,
            children: Wd("greenvilleGame:farmStallSellSurplus")
          }), (0, xd.jsx)(hO.G, {
            disabled: !Xd,
            onClick: md.sellAll,
            children: Wd("greenvilleGame:farmStallSellAll")
          })]
        })]
      })
    }

    function Dm(dd) {
      let {
        line: Od,
        controller: md
      } = dd;
      const {
        t: Wd
      } = (0, Jd.G)(), [Fd, Rd, Xd, Kd, hd] = Od, vd = null !== Rd, Qd = ym(Od, !1);
      return (0, xd.jsxs)(pO, {
        icon: (0, xd.jsx)(sm, {
          item: Fd,
          golden: vd
        }),
        name: (0, xd.jsx)(um, {
          item: Fd,
          goldenNameKey: Rd
        }),
        badges: vd && (0, xd.jsx)("span", {
          className: "GreenvilleBoardBadge GreenvilleFarmGoldenBadge",
          children: Wd("greenvilleGame:farmBoardGolden")
        }),
        children: [vd && (0, xd.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: Wd("greenvilleGame:farmBoardGoldenBlurb")
        }), (0, xd.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, xd.jsxs)("div", {
            children: [(0, xd.jsx)("dt", {
              children: Wd("greenvilleGame:boardYouHave")
            }), (0, xd.jsx)("dd", {
              children: Xd
            })]
          }), Kd > 0 && (0, xd.jsxs)("div", {
            children: [(0, xd.jsx)("dt", {
              children: Wd("greenvilleGame:farmBoardKept")
            }), (0, xd.jsx)("dd", {
              children: Kd
            })]
          }), (0, xd.jsxs)("div", {
            children: [(0, xd.jsx)("dt", {
              children: Wd("greenvilleGame:farmBoardSpare")
            }), (0, xd.jsx)("dd", {
              children: Qd
            })]
          }), (0, xd.jsxs)("div", {
            children: [(0, xd.jsx)("dt", {
              children: Wd("greenvilleGame:farmBoardPriceEach")
            }), (0, xd.jsx)("dd", {
              children: (0, xd.jsx)(zO, {
                amount: hd
              })
            })]
          })]
        }), (0, xd.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [Qd > 0 && (0, xd.jsx)(hO.m, {
            onClick: () => {
              md.sell(Fd, vd)
            },
            children: Wd("greenvilleGame:farmBoardSell", {
              count: Qd
            })
          }), 0 === Xd && (0, xd.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: Wd("greenvilleGame:farmStallNothing")
          }), Xd > 0 && 0 === Qd && (0, xd.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: Wd("greenvilleGame:farmBoardAllKept")
          })]
        })]
      })
    }

    function em(dd) {
      let {
        view: Od,
        produce: md,
        controller: Wd
      } = dd;
      const {
        t: Fd
      } = (0, Jd.G)(), Rd = dd => {
        const [Od, Fd] = dd;
        return (0, xd.jsx)(cm, {
          line: dd,
          selected: bm(dd, md),
          onSelect: () => {
            Wd.selectProduce({
              item: Od,
              golden: null !== Fd
            })
          }
        }, `${Od}|${null!==Fd}`)
      };
      return (0, xd.jsxs)(xd.Fragment, {
        children: [(0, xd.jsxs)(bO, {
          children: [(0, xd.jsx)(jm, {
            view: Od,
            controller: Wd
          }), Od.goldenLines.length > 0 && (0, xd.jsxs)(xd.Fragment, {
            children: [(0, xd.jsx)("h4", {
              className: "GreenvilleFarmSection Golden",
              children: Fd("greenvilleGame:farmBoardGoldenCrops")
            }), Od.goldenLines.map(Rd), (0, xd.jsx)("hr", {
              className: "GreenvilleFarmSection"
            })]
          }), Od.sellLines.map(Rd)]
        }), (0, xd.jsx)(Dm, {
          line: Tm(Od, md),
          controller: Wd
        })]
      })
    }

    function Im(dd) {
      let {
        controller: Od
      } = dd;
      const md = (0, wd.i)(Em, Od.getView()),
        {
          t: Wd
        } = (0, Jd.G)(),
        Fd = function(dd) {
          const {
            t: Od
          } = (0, Jd.G)();
          return "delivered" === dd.kind ? Od("greenvilleGame:tillieDelivered", {
            order: Od(dd.nameKey),
            gold: dd.gold
          }) : "sold" === dd.kind ? Od("greenvilleGame:tillieSold", {
            count: dd.count,
            gold: dd.gold
          }) : Od("greenvilleGame:tillieGreet")
        }(md.line),
        Rd = md.selectedProduce;
      if (null === Rd) return null;
      const Xd = function(dd) {
        return dd.orders.filter((dd => dd.WQ && dd.ready)).length
      }(md);
      return (0, xd.jsxs)(HO, {
        open: md.open,
        onDismiss: Od.dismiss,
        title: Wd("greenvilleGame:farmBoardTitle"),
        className: "GreenvilleFarmBoard",
        headerExtra: (0, xd.jsx)(jO, {
          children: (0, xd.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: Wd("greenvilleGame:farmBoardLevel", {
              level: md.level
            })
          })
        }),
        tabs: (0, xd.jsx)(yO, {
          tabs: [{
            id: "orders",
            label: Wd("greenvilleGame:farmBoardOrdersTab"),
            badge: Xd > 0 && (0, xd.jsx)("span", {
              className: "GreenvilleBoardBadge GreenvilleFarmReadyBadge",
              children: Wd("greenvilleGame:farmBoardReadyCount", {
                count: Xd
              })
            })
          }, {
            id: "stall",
            label: Wd("greenvilleGame:farmBoardStallTab")
          }],
          selected: md.tab,
          onSelect: Od.selectTab
        }),
        status: {
          speaker: Wd("greenvilleGame:farmTillieName"),
          line: Fd
        },
        children: ["orders" === md.tab && (0, xd.jsx)(zm, {
          view: md,
          controller: Od
        }), "stall" === md.tab && (0, xd.jsx)(em, {
          view: md,
          produce: Rd,
          controller: Od
        })]
      })
    }
    var lm = md(40023);

    function Cm(dd) {
      let {
        controller: Od
      } = dd;
      (0, wd.i)(Jm, null);
      const {
        t: md
      } = (0, Jd.G)(), Wd = Od.getTracker();
      return null === Wd ? null : (0, xd.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, xd.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: md(Wd.nameKey)
        }), (0, xd.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: Wd.needs.map((dd => {
            let [Od, Wd, Fd, Rd] = dd;
            return (0, xd.jsxs)("li", {
              className: Td()("GreenvilleTrackerRow", {
                Done: Rd >= Fd,
                Golden: null !== Wd
              }),
              children: [(0, xd.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, xd.jsx)(gd.c, {
                  itemName: Od,
                  amount: 0
                })
              }), (0, xd.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: null === Wd ? (0, lm.d)(md, Od) : md(Wd)
              }), (0, xd.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [Math.min(Rd, Fd), "/", Fd]
              })]
            }, `${Od}|${Wd}`)
          }))
        }), Wd.ready && (0, xd.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: md("greenvilleGame:farmOrderReady")
        })]
      })
    }
    const Zm = "greenvillePlaceView",
      km = "greenvilleMoodView";
    class fm {
      constructor(dd, Od) {
        this.publishPlace = dd, this.publishMood = Od, this.place = null, this.mood = null
      }
      getPlace() {
        return this.place
      }
      getMood() {
        return this.mood
      }
      Yt(dd) {
        const Od = performance.now();
        switch (dd[0]) {
          case "hudMood": {
            const [, md, Wd, Fd, Rd, Xd, Kd] = dd;
            return this.mood = {
              energy: md,
              earningsPercent: Wd,
              breakEvenEnergy: Fd,
              restedEndsAt: Rd > 0 ? Od + Rd : 0,
              adBoosted: Xd,
              luckPercent: Kd
            }, void this.publishMood(this.mood)
          }
          case "hudTown": {
            const [Od, md, Wd] = dd;
            this.place = {
              kind: Od,
              place: md,
              levels: Wd
            };
            break
          }
          case "hudJob": {
            const [Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd] = dd;
            this.place = {
              kind: Od,
              place: md,
              job: Wd,
              level: Fd,
              expInto: Rd,
              expNeeded: Xd,
              status: null === Kd ? null : Mm(Kd),
              next: null === hd ? null : {
                item: hd[0],
                nameKey: hd[1],
                level: hd[2]
              },
              stats: vd.map((dd => {
                let [Od, md, Wd, Fd] = dd;
                return {
                  stat: Od,
                  value: md,
                  max: Wd,
                  boosted: Fd
                }
              }))
            };
            break
          }
          case "hudHome": {
            const [md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd] = dd;
            this.place = {
              kind: md,
              houseName: Wd,
              ownerName: Fd,
              isOwner: Rd,
              visitorsAllowed: Xd,
              pvp: Kd,
              parkour: hd,
              runStartedAt: vd < 0 ? null : this.getRunStart(Od - vd),
              bestTimes: Qd.map((dd => {
                let [Od, md] = dd;
                return {
                  playerName: Od,
                  seconds: md
                }
              }))
            };
            break
          }
          case "hudSpleef": {
            const [Od, md, Wd] = dd;
            this.place = {
              kind: Od,
              eliminations: md,
              wins: Wd
            };
            break
          }
        }
        this.publishPlace(this.place)
      }
      getRunStart(dd) {
        var Od;
        const md = "hudHome" === (null === (Od = this.place) || void 0 === Od ? void 0 : Od.kind) ? this.place.runStartedAt : null;
        return null !== md && Math.abs(md - dd) < 500 ? md : dd
      }
    }

    function Mm(dd) {
      switch (dd[0]) {
        case "hudTier":
          return {
            kind: dd[0], tierKey: dd[1], locked: dd[2]
          };
        case "hudBay":
          return {
            kind: dd[0], materialKey: dd[1], objectKey: dd[2], percent: dd[3]
          };
        case "hudBayEmpty":
          return {
            kind: dd[0]
          };
        case "hudFarmTier":
          return {
            kind: dd[0], goldenPercent: dd[1]
          }
      }
    }
    var dW = md(4627),
      OW = md(1315),
      mW = md(218);
    const WW = JSON.parse('{"d":{"constructionSiteA":{"name":"Construction Site A"},"quarry":{"name":"The Quarry","skill":"Mining"},"industry":{"name":"Demolition Yard","skill":"Demolition"},"market":{"name":"Market Street","skill":"Market"},"lumberMill":{"name":"Lumber Mill","skill":"Woodcutting"},"farm":{"name":"Greenville Farm","skill":"Farming"},"constructionSiteB":{"name":"Construction Site B"},"dealership":{"name":"Wheeler\'s Wheels"},"postOffice":{"name":"Post Office & Diner"},"station":{"name":"The Station"},"docks":{"name":"The Docks"}},"h":[[{"kind":"residential","name":"Hillside"},{"kind":"district","district":"quarry"},{"kind":"district","district":"industry"},{"kind":"residential","name":"Ridgeview"}],[{"kind":"residential","name":"Willow Gardens"},{"kind":"district","district":"constructionSiteA"},{"kind":"district","district":"market"},{"kind":"residential","name":"Maple Row"}],[{"kind":"residential","name":"Birchwood"},{"kind":"district","district":"farm"},{"kind":"district","district":"lumberMill"},{"kind":"district","district":"dealership"}],[{"kind":"residential","name":"Seaview"},{"kind":"district","district":"constructionSiteB"},{"kind":"residential","name":"Harbour Terrace"},{"kind":"residential","name":"Lighthouse Point"}]]}'),
      FW = mW.i.Qt,
      RW = 1e3 * FW,
      XW = FW,
      KW = XW + 2 * FW,
      hW = 4 * KW + XW;

    function vW(dd, Od, md) {
      return Od >= dd.x0 && Od <= dd.x1 && md >= dd.z0 && md <= dd.z1
    }
    const QW = WW.h,
      tW = Object.fromEntries(Object.entries(WW.d).map((dd => {
        let [Od, {
          name: md
        }] = dd;
        return [Od, md]
      })));

    function oW(dd, Od) {
      return [RW + XW + dd * KW, RW + XW + Od * KW]
    }

    function NW() {
      const dd = [];
      QW.forEach(((Od, md) => {
        Od.forEach(((Od, Wd) => {
          if ("residential" !== Od.kind) return;
          const [Fd, Rd] = oW(Wd, md);
          for (const [md, Xd, Kd] of [
              [0, 0, "north"],
              [1, 0, "north"],
              [0, 1, "south"],
              [1, 1, "south"]
            ]) dd.push({
            chunk: [Fd / FW + md, 0, Rd / FW + Xd],
            facing: Kd,
            neighbourhood: Od.name
          })
        }))
      }));
      const Od = RW + hW / 2,
        md = dd => {
          let {
            chunk: md
          } = dd;
          return Math.hypot(md[0] * FW + FW / 2 - Od, md[2] * FW + FW / 2 - Od)
        };
      return dd.sort(((dd, Od) => md(dd) - md(Od)))
    }
    const qW = {
        market: "Crate",
        demolition: "Moonstone Explosive",
        mining: "Iron Pickaxe",
        woodcutting: "Iron Axe",
        farming: "Wheat"
      },
      HW = {
        earningPower: "greenvilleGame:marketEarningPower",
        power: "greenvilleGame:demolitionPower",
        points: "greenvilleGame:demolitionPoints",
        depth: "greenvilleGame:miningDepth",
        value: "greenvilleGame:miningValue",
        backpack: "greenvilleGame:miningBackpack",
        luck: "greenvilleGame:luck"
      };

    function yW(dd, Od) {
      switch (Od) {
        case "quarry":
          return tW.quarry;
        case "demolitionYard":
          return tW.industry;
        case "marketStreet":
          return tW.market;
        case "farm":
          return tW.farm;
        case "lumberMill":
          return tW.lumberMill;
        case "supermarket":
          return dd("greenvilleGame:market");
        case "demolition":
        case "mining":
        case "woodcutting":
        case "farming":
          return dd(`greenvilleGame:${Od}`)
      }
    }

    function bW(dd) {
      let {
        controller: Od,
        children: md
      } = dd;
      (0, wd.i)(Zm, null);
      const [Wd, Fd] = (0, hd.useState)(null);
      (0, dW.k)(Wd, ".RightElements");
      const Rd = Od.getPlace();
      return (0, xd.jsx)(Yd.h, {
        placement: "topRight",
        children: (0, xd.jsx)("div", {
          className: "GreenvilleHudColumn",
          children: (0, xd.jsxs)("div", {
            ref: Fd,
            className: "GreenvilleHudColumnStack",
            children: [md, "hudTown" === (null === Rd || void 0 === Rd ? void 0 : Rd.kind) && (0, xd.jsx)(pW, {
              levels: Rd.levels
            }), "hudJob" === (null === Rd || void 0 === Rd ? void 0 : Rd.kind) && (0, xd.jsx)(YW, {
              job: Rd
            }), "hudHome" === (null === Rd || void 0 === Rd ? void 0 : Rd.kind) && Rd.bestTimes.length > 0 && (0, xd.jsx)(gW, {
              home: Rd
            }), "hudSpleef" === (null === Rd || void 0 === Rd ? void 0 : Rd.kind) && (0, xd.jsx)("div", {
              className: "GreenvilleTrackerCard",
              children: (0, xd.jsx)(TW, {
                rows: [
                  ["greenvilleGame:spleefEliminations", Rd.eliminations],
                  ["greenvilleGame:spleefWins", Rd.wins]
                ]
              })
            })]
          })
        })
      })
    }

    function TW(dd) {
      let {
        rows: Od
      } = dd;
      const {
        t: md
      } = (0, Jd.G)();
      return (0, xd.jsx)("ul", {
        className: "GreenvilleTrackerRows",
        children: Od.map((dd => {
          let [Od, Wd] = dd;
          return (0, xd.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, xd.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: md(Od)
            }), (0, xd.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: (0, zd.g)(Wd)
            })]
          }, Od)
        }))
      })
    }

    function pW(dd) {
      let {
        levels: Od
      } = dd;
      const {
        t: md
      } = (0, Jd.G)();
      return (0, xd.jsxs)("div", {
        className: "GreenvilleTrackerCard GreenvilleJobsStrip",
        children: [(0, xd.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: md("greenvilleGame:jobs")
        }), (0, xd.jsx)("ul", {
          className: "GreenvilleJobsStripJobs",
          children: Xd.map(((dd, Wd) => {
            const Fd = Od[Wd];
            return (0, xd.jsxs)("li", {
              className: Td()("GreenvilleJobsStripJob", {
                Max: Fd >= 50
              }),
              "aria-label": md("greenvilleGame:jobLevel", {
                job: md(`greenvilleGame:${dd}`),
                level: Fd
              }),
              children: [(0, xd.jsx)("span", {
                className: "GreenvilleJobsStripIcon",
                "aria-hidden": "true",
                children: (0, xd.jsx)(gd.c, {
                  itemName: qW[dd],
                  amount: 0
                })
              }), (0, xd.jsx)("span", {
                className: "GreenvilleJobsStripLevel",
                "aria-hidden": "true",
                children: md("greenvilleGame:levelShort", {
                  level: Fd
                })
              })]
            }, dd)
          }))
        })]
      })
    }

    function YW(dd) {
      let {
        job: {
          stats: Od,
          next: md
        }
      } = dd;
      const {
        t: Wd
      } = (0, Jd.G)();
      return (0, xd.jsxs)(xd.Fragment, {
        children: [Od.length > 0 && (0, xd.jsx)("div", {
          className: "GreenvilleTrackerCard",
          children: (0, xd.jsx)("ul", {
            className: "GreenvilleTrackerRows",
            children: Od.map((dd => {
              let {
                stat: Od,
                value: md,
                max: Fd,
                boosted: Rd
              } = dd;
              return (0, xd.jsxs)("li", {
                className: "GreenvilleTrackerRow",
                children: [(0, xd.jsx)("span", {
                  className: "GreenvilleTrackerLabel",
                  children: Wd(HW[Od])
                }), (0, xd.jsxs)("span", {
                  className: Td()("GreenvilleTrackerValue", {
                    Boosted: Rd
                  }),
                  children: [(0, zd.g)(md), null !== Fd && `/${(0,zd.g)(Fd)}`]
                })]
              }, Od)
            }))
          })
        }), null !== md && (0, xd.jsxs)("div", {
          className: "GreenvilleTrackerCard GreenvilleNextUnlock",
          children: [(0, xd.jsx)("span", {
            className: "GreenvilleNextUnlockEyebrow",
            children: Wd("greenvilleGame:nextUnlock")
          }), (0, xd.jsxs)("div", {
            className: "GreenvilleNextUnlockBody",
            children: [(0, xd.jsx)("span", {
              className: "GreenvilleNextUnlockIcon",
              "aria-hidden": "true",
              children: (0, xd.jsx)(gd.c, {
                itemName: md.item,
                amount: 0
              })
            }), (0, xd.jsxs)("span", {
              className: "GreenvilleNextUnlockText",
              children: [(0, xd.jsx)("strong", {
                className: "GreenvilleNextUnlockName",
                children: Wd(md.nameKey)
              }), (0, xd.jsx)("span", {
                className: "GreenvilleNextUnlockLevel",
                children: Wd("greenvilleGame:unlockAtLevel", {
                  level: md.level
                })
              })]
            })]
          })]
        })]
      })
    }

    function gW(dd) {
      let {
        home: Od
      } = dd;
      const {
        t: md,
        selectedLanguage: Wd
      } = (0, Jd.G)(), Fd = (0, PO.h)("hiddenPlayerNames");
      return (0, xd.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, xd.jsxs)("strong", {
          className: "GreenvilleTrackerTitle GreenvilleBestTimesTitle",
          children: [(0, xd.jsx)(KO.c, {
            name: "trophy"
          }), md("greenvilleGame:parkourBestTimes")]
        }), (0, xd.jsx)("ol", {
          className: "GreenvilleTrackerRows",
          children: Od.bestTimes.slice(0, 3).map(((dd, Od) => {
            let {
              playerName: Rd,
              seconds: Xd
            } = dd;
            return (0, xd.jsxs)("li", {
              className: Td()("GreenvilleTrackerRow GreenvilleBestTime", {
                First: 0 === Od
              }),
              children: [(0, xd.jsx)("span", {
                className: "GreenvilleBestTimeRank",
                children: Od + 1
              }), (0, xd.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: (0, OW.e)(Rd, Fd)
              }), (0, xd.jsx)("span", {
                className: "GreenvilleTrackerValue",
                children: md("greenvilleGame:parkourTime", {
                  seconds: Xd.toLocaleString(Wd.code, {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1
                  })
                })
              })]
            }, `${Od}|${Rd}`)
          }))
        })]
      })
    }
    const wW = "greenvilleLevelUpsView";
    class aW {
      constructor(dd) {
        this.publishReveals = dd, this.reveals = [], this.token = 0, this.celebrate = (dd, Od) => {
          this.setReveals([...this.reveals, {
            kind: "celebration",
            celebration: dd,
            gold: Od,
            token: ++this.token
          }])
        }, this.revealed = dd => {
          this.setReveals(this.reveals.filter((Od => Od.token !== dd)))
        }
      }
      getReveals() {
        return this.reveals
      }
      Yt(dd) {
        const [Od, md, Wd] = dd;
        this.setReveals([...this.reveals, {
          kind: "levelUp",
          job: Od,
          level: md,
          unlocks: Wd.map((dd => {
            let [Od, md, Wd] = dd;
            return {
              item: Od,
              nameKey: md,
              level: Wd
            }
          })),
          token: ++this.token
        }])
      }
      setReveals(dd) {
        this.reveals = dd, this.publishReveals(dd)
      }
    }
    const EW = [{
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
      JW = {
        movedIn: "greenvilleGame:tutCelebrateMovedIn",
        firstGold: "greenvilleGame:tutCelebrateFirstGold",
        firstCar: "greenvilleGame:tutCelebrateFirstCar",
        lessonDone: "greenvilleGame:tutCelebrateLessonDone"
      },
      UW = Array.from({
        length: 16
      }, ((dd, Od) => ({
        "--angle": 360 * Od / 16 + Od % 3 * 7 + "deg",
        "--distance": 5 + Od % 4 * 1.2 + "rem",
        "--delay": Od % 5 * 30 + "ms"
      })));

    function xW(dd) {
      let {
        controller: Od
      } = dd;
      (0, wd.i)(wW, null);
      const md = Od.getReveals();
      return 0 === md.length ? null : (0, Pd.createPortal)((0, xd.jsx)(BW, {
        reveal: md[0],
        onDone: Od.revealed
      }, md[0].token), document.body)
    }

    function BW(dd) {
      let {
        reveal: Od,
        onDone: md
      } = dd;
      const {
        t: Wd
      } = (0, Jd.G)(), Fd = (0, hd.useRef)(null), Rd = "levelUp" === Od.kind ? Od.unlocks : [], Xd = 0 === Rd.length ? 2600 : 4200;
      return (0, hd.useLayoutEffect)((() => {
        const dd = document.querySelector(".GreenvilleTopBar");
        dd && Fd.current.style.setProperty("--top-bar-bottom", `${dd.getBoundingClientRect().bottom}px`)
      }), []), (0, hd.useEffect)((() => {
        const dd = Fd.current.animate(EW, {
          duration: Xd,
          fill: "both"
        });
        return dd.onfinish = () => {
          md(Od.token)
        }, () => {
          dd.onfinish = null, dd.cancel()
        }
      }), [Od, Xd, md]), (0, xd.jsxs)("div", {
        ref: Fd,
        className: Td()("GreenvilleLevelUpReveal", {
          Plain: 0 === Rd.length
        }),
        style: {
          "--reveal-ms": `${Xd}ms`,
          "--unlock-count": Rd.length
        },
        role: "status",
        children: [Rd.length > 0 && (0, xd.jsx)("div", {
          className: "GreenvilleLevelUpRevealStage",
          "aria-hidden": "true",
          children: (0, xd.jsxs)("div", {
            className: "GreenvilleLevelUpRevealMover",
            children: [(0, xd.jsx)("div", {
              className: "GreenvilleLevelUpRevealRays"
            }), (0, xd.jsx)("div", {
              className: "GreenvilleLevelUpRevealGlow"
            }), (0, xd.jsx)("div", {
              className: "GreenvilleLevelUpRevealSparks",
              children: UW.map(((dd, Od) => (0, xd.jsx)("span", {
                style: dd
              }, Od)))
            }), (0, xd.jsx)("div", {
              className: "GreenvilleLevelUpRevealIcon",
              children: Rd.map((dd => (0, xd.jsx)("div", {
                className: "GreenvilleLevelUpRevealItem",
                children: (0, xd.jsx)(gd.c, {
                  itemName: dd.item,
                  amount: 0
                })
              }, `${dd.level}|${dd.nameKey}`)))
            })]
          })
        }), (0, xd.jsxs)("div", {
          className: "GreenvilleLevelUpRevealText",
          children: ["levelUp" === Od.kind && (0, xd.jsx)(SW, {
            levelUp: Od
          }), "celebration" === Od.kind && (0, xd.jsx)("span", {
            className: "GreenvilleLevelUpRevealName FullyFancyText",
            children: Wd(JW[Od.celebration], {
              gold: (0, zd.g)(Od.gold)
            })
          })]
        })]
      })
    }

    function SW(dd) {
      let {
        levelUp: {
          job: Od,
          level: md,
          unlocks: Wd
        }
      } = dd;
      const {
        t: Fd
      } = (0, Jd.G)(), Rd = Fd(`greenvilleGame:${Od}`);
      return (0, xd.jsxs)(xd.Fragment, {
        children: [Wd.length > 0 && (0, xd.jsxs)(xd.Fragment, {
          children: [(0, xd.jsx)("span", {
            className: "GreenvilleLevelUpRevealHeading SmallTextBold",
            children: Fd("greenvilleGame:levelUpUnlockHeading", {
              job: Rd,
              level: 1 === Wd.length ? Wd[0].level : md
            })
          }), (0, xd.jsx)("span", {
            className: "GreenvilleLevelUpRevealNames",
            children: Wd.map((dd => (0, xd.jsx)("span", {
              className: "GreenvilleLevelUpRevealName FullyFancyText",
              children: Fd(dd.nameKey)
            }, `${dd.level}|${dd.nameKey}`)))
          })]
        }), 0 === Wd.length && (0, xd.jsxs)(xd.Fragment, {
          children: [(0, xd.jsx)("span", {
            className: "GreenvilleLevelUpRevealHeading SmallTextBold",
            children: Fd("greenvilleGame:levelUpHeading")
          }), (0, xd.jsx)("span", {
            className: "GreenvilleLevelUpRevealName FullyFancyText",
            children: Fd("greenvilleGame:jobLevel", {
              job: Rd,
              level: md
            })
          })]
        })]
      })
    }
    const sW = "greenvilleMarketView";

    function uW(dd) {
      return dd.map((dd => {
        let [Od, md, Wd, Fd, Rd, Xd] = dd;
        return {
          key: `${Od}|${md}|${Wd}|${Fd}|${Rd}`,
          icon: Od,
          target: [md, Wd, Fd],
          item: Rd,
          label: Xd
        }
      }))
    }
    class VW {
      constructor(dd) {
        this.lQ = dd, this.view = null
      }
      getView() {
        return this.view
      }
      Yt(dd) {
        const Od = performance.now();
        switch (dd[0]) {
          case "hide":
            this.view = null;
            break;
          case "marketIdle":
            this.view = {
              job: null,
              waypoints: uW(dd[1])
            };
            break;
          case "marketPick":
          case "marketStock": {
            const [md, Wd, Fd, Rd] = dd;
            this.view = {
              job: {
                kind: md,
                goods: Wd,
                tipEndsAt: Rd > 0 ? Od + Rd : 0
              },
              waypoints: uW(Fd)
            };
            break
          }
          case "marketDeliver": {
            const [md, Wd, Fd, Rd, Xd, Kd] = dd;
            this.view = {
              job: {
                kind: md,
                parcelsLeft: Wd,
                delivered: Fd,
                gold: Rd,
                endsAt: Od + Kd
              },
              waypoints: uW(Xd)
            };
            break
          }
        }
        this.lQ(this.view)
      }
    }
    var iW = md(38259);
    const AW = [{
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

    function rW(dd) {
      var Od;
      let {
        controller: md
      } = dd;
      (0, wd.i)(sW, null);
      const Wd = null === (Od = md.getView()) || void 0 === Od ? void 0 : Od.job;
      return "marketDeliver" !== (null === Wd || void 0 === Wd ? void 0 : Wd.kind) ? null : (0, xd.jsx)(GW, {
        endsAt: Wd.endsAt,
        delivered: Wd.delivered
      })
    }

    function GW(dd) {
      let {
        endsAt: Od,
        delivered: md
      } = dd;
      const {
        t: Wd
      } = (0, Jd.G)(), Fd = Math.max(0, Math.ceil((0, iW.g)(Od))), Rd = (0, hd.useRef)(null), Xd = (0, hd.useRef)(null), Kd = (0, hd.useRef)({
        endsAt: Od,
        delivered: md
      }), [vd, Qd] = (0, hd.useState)(null);
      (0, hd.useLayoutEffect)((() => {
        const dd = md > Kd.current.delivered ? Math.round((Od - Kd.current.endsAt) / 1e3) : 0;
        var Wd;
        (Kd.current = {
          endsAt: Od,
          delivered: md
        }, dd <= 0) || (Qd((Od => {
          var md;
          return {
            seconds: dd,
            token: (null !== (md = null === Od || void 0 === Od ? void 0 : Od.token) && void 0 !== md ? md : 0) + 1
          }
        })), window.matchMedia("(prefers-reduced-motion: reduce)").matches || (null === (Wd = Xd.current) || void 0 === Wd || Wd.cancel(), Xd.current = Rd.current.animate(AW, {
          duration: 420,
          easing: "ease-out"
        })))
      }), [Od, md]), (0, hd.useEffect)((() => () => {
        var dd;
        null === (dd = Xd.current) || void 0 === dd || dd.cancel()
      }), []);
      const td = Math.floor(Fd / 60);
      return (0, xd.jsxs)("div", {
        className: Td()("GreenvilleMarketCountdown", {
          Urgent: Fd < 10
        }),
        role: "timer",
        children: [(0, xd.jsxs)("div", {
          ref: Rd,
          className: "GreenvilleMarketCountdownTime FullyFancyText",
          children: [td, ":", String(Fd % 60).padStart(2, "0")]
        }), null !== vd && (0, xd.jsx)("div", {
          className: "GreenvilleMarketCountdownAdded FullyFancyText",
          onAnimationEnd: () => {
            Qd(null)
          },
          children: Wd("greenvilleGame:marketCountdownAdded", {
            seconds: vd.seconds
          })
        }, vd.token)]
      })
    }

    function nW(dd) {
      var Od;
      let {
        controller: md
      } = dd;
      (0, wd.i)(sW, null);
      const Wd = null === (Od = md.getView()) || void 0 === Od ? void 0 : Od.job;
      return Wd ? (0, xd.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: ["marketDeliver" === Wd.kind && (0, xd.jsx)(zW, {
          shift: Wd
        }), "marketDeliver" !== Wd.kind && (0, xd.jsx)(LW, {
          task: Wd
        })]
      }) : null
    }

    function LW(dd) {
      let {
        task: Od
      } = dd;
      const {
        t: md
      } = (0, Jd.G)(), Wd = "marketPick" === Od.kind && Od.goods.every((dd => {
        let [, Od] = dd;
        return 0 === Od
      }));
      return (0, xd.jsxs)(xd.Fragment, {
        children: [(0, xd.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: md("marketPick" === Od.kind ? "greenvilleGame:marketPanelOrder" : "greenvilleGame:marketPanelCrate")
        }), (0, xd.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: Od.goods.map((dd => {
            let [Od, Wd, Fd] = dd;
            return (0, xd.jsxs)("li", {
              className: Td()("GreenvilleTrackerRow", {
                Done: 0 === Wd
              }),
              children: [(0, xd.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, xd.jsx)(gd.c, {
                  itemName: Od,
                  amount: 0
                })
              }), (0, xd.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: (0, lm.d)(md, Od)
              }), (0, xd.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [Fd - Wd, "/", Fd]
              })]
            }, Od)
          }))
        }), Wd && (0, xd.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: md("greenvilleGame:marketPanelReturn")
        }), !Wd && 0 !== Od.tipEndsAt && (0, xd.jsx)(PW, {
          endsAt: Od.tipEndsAt
        })]
      })
    }

    function PW(dd) {
      let {
        endsAt: Od
      } = dd;
      const {
        t: md
      } = (0, Jd.G)(), Wd = Math.ceil((0, iW.g)(Od));
      return Wd <= 0 ? null : (0, xd.jsx)("div", {
        className: "GreenvilleTrackerTip",
        children: md("greenvilleGame:marketPanelTip", {
          seconds: Wd
        })
      })
    }

    function zW(dd) {
      let {
        shift: Od
      } = dd;
      const {
        t: md
      } = (0, Jd.G)();
      return (0, xd.jsxs)(xd.Fragment, {
        children: [(0, xd.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: md("greenvilleGame:marketPanelDeliveries")
        }), (0, xd.jsxs)("ul", {
          className: "GreenvilleTrackerRows",
          children: [(0, xd.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, xd.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: md("greenvilleGame:marketPanelParcels")
            }), (0, xd.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: Od.parcelsLeft
            })]
          }), (0, xd.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, xd.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: md("greenvilleGame:marketPanelDelivered")
            }), (0, xd.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: Od.delivered
            })]
          }), (0, xd.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, xd.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: md("greenvilleGame:marketPanelEarned")
            }), (0, xd.jsx)("span", {
              className: "GreenvilleTrackerIcon",
              "aria-hidden": "true",
              children: (0, xd.jsx)(gd.c, {
                itemName: "Gold Coin",
                amount: 0
              })
            }), (0, xd.jsx)("span", {
              className: "GreenvilleTrackerValue Gold",
              children: (0, zd.g)(Od.gold)
            })]
          })]
        }), 0 === Od.parcelsLeft && (0, xd.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: md("greenvilleGame:marketPanelBackToBay")
        })]
      })
    }
    const cW = {
      marketNpc: "comment-dots",
      marketShelf: "cart-shopping",
      marketHouse: "house",
      marketDepot: "truck"
    };

    function jW(dd) {
      var Od;
      let {
        market: md,
        markers: Wd
      } = dd;
      (0, wd.i)(sW, null);
      const Fd = null === (Od = md.getView()) || void 0 === Od ? void 0 : Od.waypoints;
      return null !== Fd && void 0 !== Fd && Fd.length ? (0, xd.jsx)("div", {
        className: "GreenvilleMarketWaypoints",
        children: Fd.map((dd => (0, xd.jsx)(DW, {
          waypoint: dd,
          bind: Wd.waypoints.bindMarker(dd.key)
        }, dd.key)))
      }) : null
    }

    function DW(dd) {
      let {
        waypoint: {
          icon: Od,
          item: md,
          label: Wd
        },
        bind: Fd
      } = dd;
      return (0, xd.jsxs)(eW, {
        bind: Fd,
        house: "marketHouse" === Od,
        label: Wd,
        children: [null !== md && (0, xd.jsx)("span", {
          className: "GreenvilleMarketWaypointItem",
          children: (0, xd.jsx)(gd.c, {
            itemName: md,
            amount: 0
          })
        }), null === md && (0, xd.jsx)(KO.c, {
          name: cW[Od]
        })]
      })
    }

    function eW(dd) {
      let {
        bind: Od,
        house: md,
        label: Wd,
        extra: Fd,
        children: Rd
      } = dd;
      return (0, xd.jsxs)("div", {
        ref: Od,
        className: Td()("GreenvilleMarketWaypoint", {
          House: md
        }),
        children: [md && (0, xd.jsx)(IW, {}), (0, xd.jsx)("div", {
          className: "GreenvilleMarketWaypointBadge",
          children: Rd
        }), Fd, (0, xd.jsxs)("div", {
          className: "GreenvilleMarketWaypointLabels",
          children: [null !== Wd && (0, xd.jsx)("span", {
            className: "GreenvilleMarketWaypointLabel SmallTextBold",
            children: Wd
          }), (0, xd.jsx)("span", {
            className: "GreenvilleMarketWaypointDistance SmallTextBold"
          })]
        })]
      })
    }

    function IW() {
      const dd = (0, hd.useRef)(null);
      return (0, Bm.b)(dd), (0, xd.jsx)("span", {
        ref: dd,
        className: "GreenvilleMarketWaypointPulse"
      })
    }
    const lW = {
      labels: "GreenvilleMarketWaypointLabels",
      distance: "GreenvilleMarketWaypointDistance"
    };
    class CW {
      constructor(dd) {
        this.market = dd, this.waypoints = new qd.b(lW, "greenvilleGame:marketDistance")
      }
      frame(dd, Od) {
        this.waypoints.setRender(dd);
        const md = this.market.getView();
        if (md && this.waypoints.hasMarkers())
          for (const {
              key: Wd,
              target: Fd
            }
            of md.waypoints) this.waypoints.update(Wd, Fd[0], Fd[1] + 1, Fd[2], Od)
      }
    }
    const ZW = "greenvilleMapView",
      kW = {
        open: !1
      };
    class fW extends WO {
      constructor(dd, Od, md) {
        super(kW, dd, Od), this.nav = md, this.open = () => {
          this.show({
            open: !0
          })
        }
      }
      dropPresses() {}
      set(dd) {
        super.set(dd), this.nav.setFullMapOpen(dd.open)
      }
    }
    var MW = md(40222),
      dF = md(40213);
    const OF = {
      Street: "St",
      Avenue: "Ave",
      Road: "Rd",
      Lane: "Ln"
    };

    function mF(dd, Od) {
      return Od.map(((Od, md) => {
        const Wd = Od.lastIndexOf(" "),
          Fd = Od.slice(Wd + 1);
        let Rd = OF[Fd];
        return void 0 === Rd && (console.warn(`Greenville street "${Od}" has no suffix abbreviation`), Rd = Fd), {
          axis: dd,
          line: md,
          name: Od,
          shortName: Od.slice(0, Wd),
          suffix: Rd
        }
      }))
    }
    const WF = {
        eastWest: mF("eastWest", ["Hillcrest Road", "Oak Street", "Main Street", "Elm Street", "Harbour Road"]),
        northSouth: mF("northSouth", ["Willow Lane", "Birch Avenue", "Market Street", "Maple Avenue", "Station Road"])
      },
      FF = {
        kind: "outside"
      };

    function RF(dd, Od, md) {
      return 100 * (dd + 1) + Od + (md ? 1 : 0)
    }

    function XF(dd, Od, md, Wd) {
      return {
        x0: RW + dd,
        z0: RW + Od,
        x1: RW + dd + md - 1,
        z1: RW + Od + Wd - 1
      }
    }
    let KF = null;

    function hF(dd, Od, md, Wd) {
      if (Wd && "outside" !== Wd.kind) {
        const {
          box: md
        } = Wd;
        if (!vW(md, dd, Od) && vW({
            x0: md.x0 - 2,
            z0: md.z0 - 2,
            x1: md.x1 + 2,
            z1: md.z1 + 2
          }, dd, Od)) return Wd
      }
      return function(dd, Od, md) {
        const {
          eastWest: Wd,
          northSouth: Fd
        } = WF;
        switch (dd.kind) {
          case "outside":
            return FF;
          case "street": {
            const Od = dd.segment * KW + XW,
              md = dd.line * KW;
            return {
              kind: "street",
              box: "eastWest" === dd.axis ? XF(Od, md, KW - XW, XW) : XF(md, Od, XW, KW - XW),
              street: WF[dd.axis][dd.line],
              block: 100 * (dd.segment + 1)
            }
          }
          case "junction": {
            const Rd = XF(dd.column * KW, dd.row * KW, XW, XW),
              Xd = [Wd[dd.row], Fd[dd.column]],
              Kd = "street" === (null === md || void 0 === md ? void 0 : md.kind) ? md.street : "junction" === (null === md || void 0 === md ? void 0 : md.kind) ? md.along : null,
              hd = Kd && Xd.includes(Kd) ? Kd : Math.abs(Math.sin(Od)) > Math.abs(Math.cos(Od)) ? Xd[0] : Xd[1];
            return {
              kind: "junction",
              box: Rd,
              along: hd,
              cross: hd === Xd[0] ? Xd[1] : Xd[0]
            }
          }
          case "plot": {
            const Od = dd.column * KW + XW + dd.dx * XW,
              md = dd.row * KW + XW + dd.dz * XW,
              Fd = 0 === dd.dz;
            return {
              kind: "plot",
              box: XF(Od, md, XW, XW),
              plotId: (Rd = (RW + Od) / XW, Xd = (RW + md) / XW, KF || (KF = new Map(NW().map(((dd, Od) => {
                let {
                  chunk: md
                } = dd;
                return [`${md[0]},${md[2]}`, Od + 1]
              })))), KF.get(`${Rd},${Xd}`)),
              number: RF(dd.column, 0 === dd.dx ? 30 : 70, Fd),
              street: Wd[Fd ? dd.row : dd.row + 1],
              neighbourhood: dd.neighbourhood
            }
          }
          case "tile": {
            const {
              column: Od,
              row: md,
              district: Fd
            } = dd;
            return {
              kind: "tile",
              box: XF(Od * KW + XW, md * KW + XW, KW - XW, KW - XW),
              district: Fd,
              number: RF(Od, 50, !0),
              street: Wd[md]
            }
          }
        }
        var Rd, Xd
      }(function(dd, Od) {
        const md = dd - RW,
          Wd = Od - RW;
        if (md < 0 || Wd < 0 || md >= hW || Wd >= hW) return {
          kind: "outside"
        };
        const Fd = Math.floor(md / KW),
          Rd = Math.floor(Wd / KW),
          Xd = md - Fd * KW - XW,
          Kd = Wd - Rd * KW - XW;
        if (Xd < 0 && Kd < 0) return {
          kind: "junction",
          column: Fd,
          row: Rd
        };
        if (Kd < 0) return {
          kind: "street",
          axis: "eastWest",
          line: Rd,
          segment: Fd
        };
        if (Xd < 0) return {
          kind: "street",
          axis: "northSouth",
          line: Fd,
          segment: Rd
        };
        const hd = QW[Rd][Fd];
        return "residential" === hd.kind ? {
          kind: "plot",
          column: Fd,
          row: Rd,
          dx: Math.floor(Xd / XW),
          dz: Math.floor(Kd / XW),
          neighbourhood: hd.name
        } : {
          kind: "tile",
          column: Fd,
          row: Rd,
          district: hd.district
        }
      }(dd, Od), md, Wd)
    }

    function vF(dd) {
      switch (dd.kind) {
        case "outside":
          return "outside";
        case "junction":
          return `junction|${dd.along.name}|${dd.cross.name}`;
        case "plot":
        case "tile":
          return `${dd.kind}|${dd.number}|${dd.street.name}`;
        case "street":
          return `street|${dd.block}|${dd.street.name}`
      }
    }
    const QF = mW.i.Qt,
      tF = {
        origin: RW,
        size: hW,
        yW: -2 * QF,
        bW: 4 * QF
      },
      oF = new Set(["quarry", "industry"]);
    const NF = {
        origin: 1562 * QF,
        size: 13 * QF,
        yW: 0,
        bW: 5 * QF
      },
      qF = md.p + "static/media/greenvilleSewers.9ca15fd9e781052910dd.png";
    var HF = md(40131),
      yF = md(40215),
      bF = md(41089),
      TF = md(41087),
      pF = md(285);
    const YF = mW.i.Qt;
    class gF {
      constructor(dd, Od, md) {
        this.api = dd, this.map = Od, this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.image = this.context.createImageData(YF, YF), this.columns = void 0, this.lowestLayer = void 0, this.layers = void 0, this.plots = void 0, this.baked = null, this.Aq = !1, this.ids = new Uint16Array(YF * YF), this.tops = new Int32Array(YF * YF), this.edgeIds = new Uint16Array(YF), this.edgeTops = new Int32Array(YF), this.heights = void 0, this.versions = void 0, this.current = void 0, this.stale = void 0, this.painted = void 0, this.order = [], this.focus = {
          column: -1,
          row: -1
        }, this.colours = null, this.host = null, this.timer = null, this.cancelIdle = null, this.pass = dd => {
          this.cancelIdle = null;
          let Od = !1;
          const md = performance.now();
          let Wd = !0;
          if (this.colours && this.host && this.host.clientWidth > 0)
            for (const Fd of this.order) {
              if (!this.readVersions(Fd)) continue;
              const Rd = !dd.didTimeout && dd.timeRemaining() < 2;
              if (!Wd && (Rd || performance.now() - md > 6)) {
                Od = !0;
                break
              }
              Wd = !1, this.versions.set(this.current, Fd * this.layers), this.paint(Fd % this.columns, Math.floor(Fd / this.columns), this.colours.lookup, this.colours.drawn)
            }
          this.schedule(Od ? 0 : 500)
        };
        const {
          origin: Wd,
          size: Fd,
          yW: Rd,
          bW: Xd
        } = Od.area;
        this.columns = Fd / YF, this.lowestLayer = Rd / YF, this.layers = (Xd - Rd) / YF, this.plots = new Set(md.map((dd => {
          let {
            chunkX: Od,
            chunkZ: md
          } = dd;
          return md * this.columns + Od
        }))), this.heights = new Int32Array(Fd * Fd).fill(bF.g), this.versions = new Float64Array(this.columns * this.columns * this.layers).fill(NaN), this.current = new Float64Array(this.layers), this.stale = new Uint8Array(this.columns * this.columns), this.painted = new Uint8Array(this.columns * this.columns), this.canvas.width = Fd, this.canvas.height = Fd, this.canvas.className = "GreenvilleNavMapTerrain", 0 !== md.length ? (this.focusOn(Wd + Fd / 2, Wd + Fd / 2), Promise.all([(0, TF.e)(), this.drawBakedMap()]).then((dd => {
          let [Od] = dd;
          this.colours = {
            lookup: Od,
            drawn: Od.getDrawnIds()
          }
        }), (dd => {
          console.error("Greenville map: block colours failed to load", dd)
        })), this.schedule(0)) : this.drawBakedMap()
      }
      mount(dd) {
        this.host = dd, null === dd || void 0 === dd || dd.replaceChildren(this.canvas)
      }
      focusOn(dd, Od) {
        const {
          columns: md
        } = this, {
          origin: Wd
        } = this.map.area, Fd = Math.min(md - 1, Math.max(0, Math.floor((dd - Wd) / YF))), Rd = Math.min(md - 1, Math.max(0, Math.floor((Od - Wd) / YF)));
        Fd === this.focus.column && Rd === this.focus.row || (this.focus = {
          column: Fd,
          row: Rd
        }, this.order = [...this.plots].sort(((dd, Od) => Math.hypot(dd % md - Fd, Math.floor(dd / md) - Rd) - Math.hypot(Od % md - Fd, Math.floor(Od / md) - Rd))))
      }
      forget(dd, Od) {
        const md = Od * this.columns + dd;
        this.stale[md] = 1, this.versions.fill(NaN, md * this.layers, (md + 1) * this.layers)
      }
      dispose() {
        var dd, Od;
        null !== this.timer && clearTimeout(this.timer), null === (dd = this.cancelIdle) || void 0 === dd || dd.call(this), this.host = null, this.Aq = !0, null === (Od = this.baked) || void 0 === Od || Od.close(), this.baked = null
      }
      async drawBakedMap() {
        try {
          const dd = await fetch(this.map.imageUrl);
          if (!dd.ok) throw new Error(`HTTP ${dd.status}`);
          const Od = await createImageBitmap(await dd.blob(), {
            colorSpaceConversion: "none"
          });
          if (this.Aq) return void Od.close();
          this.baked = Od, this.context.drawImage(Od, 0, 0)
        } catch (dd) {
          console.error("Greenville map: the baked map failed to load", dd)
        }
      }
      schedule(dd) {
        this.timer = setTimeout((() => {
          this.timer = null, this.cancelIdle = (0, pF.e)(this.pass, {
            timeoutMs: 1e3
          })
        }), dd)
      }
      readVersions(dd) {
        const {
          origin: Od
        } = this.map.area, md = Od / YF + dd % this.columns, Wd = Od / YF + Math.floor(dd / this.columns);
        let Fd = !1;
        for (let Xd = 0; Xd < this.layers; Xd++) {
          var Rd;
          const Od = null !== (Rd = this.api.getChunkVersion(md, this.lowestLayer + Xd, Wd)) && void 0 !== Rd ? Rd : 0;
          this.current[Xd] = Od, Fd ||= Od !== this.versions[dd * this.layers + Xd]
        }
        return Fd
      }
      repaintIfPainted(dd, Od) {
        const md = Od * this.columns + dd;
        dd < this.columns && Od < this.columns && 1 === this.painted[md] && this.versions.fill(NaN, md * this.layers, (md + 1) * this.layers)
      }
      storeHeights(dd, Od) {
        const {
          size: md
        } = this.map.area;
        let Wd = !1,
          Fd = !1;
        for (let Rd = 0; Rd < this.ids.length; Rd++) {
          const Xd = Rd % YF,
            Kd = Math.floor(Rd / YF),
            hd = (Od * YF + Kd) * md + dd * YF + Xd,
            vd = 0 === this.ids[Rd] ? bF.g : this.tops[Rd];
          this.heights[hd] !== vd && (Wd ||= Xd === YF - 1, Fd ||= Kd === YF - 1, this.heights[hd] = vd)
        }
        Wd && this.repaintIfPainted(dd + 1, Od), Fd && this.repaintIfPainted(dd, Od + 1)
      }
      readEdgeHeights(dd, Od, md, Wd, Fd) {
        const {
          origin: Rd,
          size: Xd,
          yW: Kd,
          bW: hd
        } = this.map.area;
        this.api.readColumnTops(dd, Od, md, Wd, Kd, hd, Fd, this.edgeIds, this.edgeTops);
        const vd = md - dd;
        for (let Qd = 0; Qd < YF; Qd++) {
          const md = (Od - Rd + Math.floor(Qd / vd)) * Xd + dd - Rd + Qd % vd;
          this.heights[md] = 0 === this.edgeIds[Qd] ? bF.g : this.edgeTops[Qd]
        }
      }
      paint(dd, Od, md, Wd) {
        const {
          origin: Fd,
          size: Rd,
          yW: Xd,
          bW: Kd
        } = this.map.area, hd = Od * this.columns + dd, vd = 1 === this.stale[hd];
        this.stale[hd] = 0;
        const Qd = Fd + dd * YF,
          td = Fd + Od * YF,
          od = Rd - (dd + 1) * YF,
          {
            ids: Nd,
            tops: qd,
            heights: Hd
          } = this;
        if (0 === this.current[0 - this.lowestLayer]) return void(vd && (this.context.clearRect(od, Od * YF, YF, YF), this.baked && this.context.drawImage(this.baked, od, Od * YF, YF, YF, od, Od * YF, YF, YF), Nd.fill(0), this.storeHeights(dd, Od)));
        this.painted[hd] = 1, this.api.readColumnTops(Qd, td, Qd + YF, td + YF, Xd, Kd, Wd, Nd, qd), this.storeHeights(dd, Od), this.plots.has(hd - 1) || this.readEdgeHeights(Qd - 1, td, Qd, td + YF, Wd), this.plots.has(hd - this.columns) || this.readEdgeHeights(Qd, td - 1, Qd + YF, td, Wd);
        const yd = this.image.data;
        for (let bd = 0; bd < YF; bd++)
          for (let Wd = 0; Wd < YF; Wd++) {
            const Fd = 4 * (bd * YF + YF - 1 - Wd),
              Xd = Nd[bd * YF + Wd];
            if (0 === Xd) {
              yd[Fd + 3] = 0;
              continue
            }
            const Kd = dd * YF + Wd,
              hd = Od * YF + bd;
            md.drawPixel(yd, Fd, Xd, qd[bd * YF + Wd], Hd[(hd - 1) * Rd + Kd], Hd[hd * Rd + Kd - 1])
          }
        this.context.putImageData(this.image, od, Od * YF)
      }
    }
    const wF = 5 * Math.PI / 180,
      aF = {
        u: NaN,
        v: NaN,
        left: NaN,
        top: NaN,
        scale: NaN,
        heading: NaN
      };
    class EF {
      constructor(dd) {
        this.onTerrainHost = dd, this.terrainHost = null, this.Bt = null, this.worldResize = null, this.worldPx = {
          width: 0,
          height: 0
        }, this.arrowTrack = null, this.arrow = null, this.written = {
          ...aF
        }, this.goalTrack = null, this.goal = null, this.mountTerrain = dd => {
          this.terrainHost = dd, this.onTerrainHost()
        }, this.mountWorld = dd => {
          var Od;
          this.Bt = dd, this.written = {
            ...aF
          }, null === (Od = this.worldResize) || void 0 === Od || Od.disconnect(), this.worldResize = null, dd && (this.worldResize = new ResizeObserver((dd => {
            let [Od] = dd;
            this.worldPx = {
              width: Od.contentRect.width,
              height: Od.contentRect.height
            }, this.written.scale = NaN
          })), this.worldResize.observe(dd))
        }, this.mountArrow = dd => {
          var Od;
          this.arrowTrack = dd, this.arrow = null !== (Od = null === dd || void 0 === dd ? void 0 : dd.querySelector(".GreenvilleNavArrow")) && void 0 !== Od ? Od : null, this.written = {
            ...aF
          }
        }, this.mountGoal = dd => {
          this.goalTrack = dd, dd && (dd.hidden = null === this.goal), this.written.left = NaN
        }
      }
      setGoal(dd) {
        this.goal = dd, this.goalTrack && (this.goalTrack.hidden = null === dd), this.written.left = NaN
      }
      write(dd, Od, md, Wd, Fd, Rd, Xd) {
        const {
          Bt: Kd,
          arrowTrack: hd,
          arrow: vd,
          written: Qd
        } = this;
        if (!Kd || !hd || !vd) return;
        const td = Math.abs(Math.atan2(Math.sin(md - Qd.heading), Math.cos(md - Qd.heading))),
          od = Rd !== Qd.scale,
          {
            width: Nd,
            height: qd
          } = this.worldPx,
          Hd = od || !(Math.hypot((Wd - Qd.left) * Nd, (Fd - Qd.top) * qd) < 1),
          yd = od || !(Math.hypot(dd - Qd.u, Od - Qd.v) * Math.min(Nd, qd) * Rd < 1);
        Hd && (this.written.left = Wd, this.written.top = Fd, Kd.style.transform = `translate(${100*Wd}%, ${100*Fd}%) scale(${Rd})`, this.writeGoal(Wd, Fd, Rd)), yd && (this.written.u = dd, this.written.v = Od, hd.style.transform = `translate(${100*dd}%, ${100*Od}%)`), (od || td >= wF) && (vd.style.transform = `translate(-50%, -50%) scale(${1/Rd}) rotate(${180+180*md/Math.PI}deg)`, this.written.heading = md), od && (Kd.style.setProperty("--greenville-map-unzoom", String(1 / Rd)), Kd.style.setProperty("--greenville-map-fade", String(Xd)), this.written.scale = Rd)
      }
      writeGoal(dd, Od, md) {
        const {
          goal: Wd,
          goalTrack: Fd
        } = this;
        if (!Wd || !Fd) return;
        const Rd = dd + Wd[0] * md - .5,
          Xd = Od + Wd[1] * md - .5,
          Kd = Math.min(1, .4 / Math.max(Math.abs(Rd), Math.abs(Xd)));
        Fd.style.transform = `translate(${100*(.5+Rd*Kd)}%, ${100*(.5+Xd*Kd)}%)`
      }
    }
    const JF = "greenvilleNavAddress",
      UF = "greenvilleNavPlots",
      xF = "greenvilleNavMarkers",
      BF = {
        kind: "outside"
      };
    class SF {
      constructor(dd, Od, md, Wd) {
        this.map = dd, this.publishAddress = Od, this.publishPlots = md, this.publishMarkers = Wd, this.address = BF, this.addressKey = vF(BF), this.block = {
          x: NaN,
          y: NaN,
          z: NaN
        }, this.inSewers = !1, this.plots = void 0, this.markers = [], this.terrain = null, this.minimap = void 0, this.homeGate = null, this.fullMap = void 0, this.fullMapOpen = !1, this.fullMapZoom = yF.h, this.zoom = 0, this.lastFrameMs = NaN, this.reducedMotion = null, this.logLocalScale = void 0, this.placeTerrain = () => {
          this.terrain.mount(this.fullMapOpen && this.fullMap.terrainHost ? this.fullMap.terrainHost : this.minimap.terrainHost)
        }, this.minimap = new EF(this.placeTerrain), this.fullMap = new EF(this.placeTerrain);
        const {
          origin: Fd,
          size: Rd
        } = dd.area;
        this.logLocalScale = Math.log(Rd / 80), this.plots = {
          plots: (dd.city ? NW() : []).map(((dd, Od) => {
            let {
              chunk: md,
              facing: Wd
            } = dd;
            return {
              plotId: Od + 1,
              chunkX: md[0] - Fd / mW.i.Qt,
              chunkZ: md[2] - Fd / mW.i.Qt,
              facing: Wd,
              state: "vacant",
              mine: !1
            }
          })),
          animate: !1
        }
      }
      start(dd) {
        this.terrain = new gF(dd, this.map, this.plots.plots)
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
      setGoal(dd) {
        const {
          origin: Od,
          size: md
        } = this.map.area;
        this.minimap.setGoal(dd && [(Od + md - dd.x) / md, (dd.z - Od) / md])
      }
      Yt(dd) {
        const Od = [...this.plots.plots];
        for (const [Rd, Xd, Kd] of "plotsAll" === dd[0] ? dd[1] : [dd[1]]) {
          const dd = Od[Rd - 1];
          var md;
          if (dd.state === Xd && dd.mine === Kd || (Od[Rd - 1] = {
              ...dd,
              state: Xd,
              mine: Kd
            }), dd.state !== Xd) null === (md = this.terrain) || void 0 === md || md.forget(dd.chunkX, dd.chunkZ)
        }
        this.plots = {
          plots: Od,
          animate: "plotsOne" === dd[0]
        };
        const Wd = Od.find((dd => dd.mine)),
          Fd = this.map.area.origin / mW.i.Qt;
        this.homeGate = Wd ? function(dd, Od, md) {
          const Wd = dd[0] * FW,
            Fd = dd[2] * FW,
            Rd = FW / 2 + .5;
          return "north" === Od ? [Wd + Rd, Fd - md] : [Wd + FW - Rd, Fd + FW + md]
        }([Wd.chunkX + Fd, 0, Wd.chunkZ + Fd], Wd.facing, 1) : null, this.publishPlots(this.plots)
      }
      receiveMarkers(dd) {
        this.markers = dd.map((dd => {
          const [Od, md] = [this.toMapUnits(dd[2]), this.toMapUnits(dd[3])];
          return "mapPlace" === dd[0] ? {
            kind: "place",
            place: dd[1],
            x: Od,
            z: md
          } : {
            kind: "npc",
            face: null === dd[1] ? "npc" : `npc_${dd[1]}`,
            x: Od,
            z: md
          }
        })), this.publishMarkers(this.markers)
      }
      setFullMapOpen(dd) {
        dd !== this.fullMapOpen && (this.fullMapOpen = dd, this.fullMapZoom = yF.h, this.placeTerrain())
      }
      setFullMapZoom(dd) {
        this.fullMapZoom = dd
      }
      frame(dd, Od, md) {
        if (!Od) return;
        const Wd = Math.floor(Od[0]),
          Fd = Math.floor(Od[1]),
          Rd = Math.floor(Od[2]),
          {
            origin: Xd,
            size: Kd
          } = this.map.area;
        if (Wd !== this.block.x || Fd !== this.block.y || Rd !== this.block.z) {
          Wd === this.block.x && Rd === this.block.z || (this.terrain.focusOn(Wd, Rd), this.address = hF(Wd, Rd, dd.cameraHeading, this.address)), this.block = {
            x: Wd,
            y: Fd,
            z: Rd
          };
          const Od = this.map.city && (hd = this.address, vd = Fd, Qd = this.inSewers, !(vd >= (Qd ? -1 : -3)) && ("street" === hd.kind || "junction" === hd.kind || "tile" === hd.kind && !oF.has(hd.district))),
            md = vF(this.address);
          md === this.addressKey && Od === this.inSewers || (this.addressKey = md, this.inSewers = Od, this.publishAddress(this.address))
        }
        var hd, vd, Qd;
        const td = performance.now(),
          od = function(dd, Od, md, Wd) {
            return !dd || Wd || "tile" === Od.kind && "quarry" === Od.district ? 1 : md || "plot" !== Od.kind && "tile" !== Od.kind ? 0 : 1
          }(this.map.city, this.address, md, this.inSewers);
        if (this.zoom !== od) {
          this.reducedMotion ??= window.matchMedia("(prefers-reduced-motion: reduce)");
          const dd = this.reducedMotion.matches ? 1 : 1 - Math.exp(-(td - this.lastFrameMs) / 150);
          this.zoom += (od - this.zoom) * (Number.isNaN(dd) ? 1 : dd), Math.abs(od - this.zoom) < .002 && (this.zoom = od)
        }
        this.lastFrameMs = td;
        const Nd = (Xd + Kd - Od[0]) / Kd,
          qd = (Od[2] - Xd) / Kd,
          Hd = dd.cameraHeading;
        if (this.fullMapOpen) {
          const {
            zoom: dd,
            x: Od,
            y: md
          } = this.fullMapZoom;
          this.fullMap.write(Nd, qd, Hd, Od, md, dd, 0)
        } else if (this.isMapShown()) {
          const dd = Math.exp(this.zoom * this.logLocalScale),
            Od = Nd + (.5 - Nd) * this.zoom - Nd * dd,
            md = qd + (.5 - qd) * this.zoom - qd * dd;
          this.minimap.write(Nd, qd, Hd, Od, md, dd, this.zoom)
        }
      }
      toMapUnits(dd) {
        return (dd - this.map.area.origin) / mW.i.Qt
      }
    }
    const sF = hW / mW.i.Qt,
      uF = `matrix(-1 0 0 1 ${sF} 0)`,
      VF = .08,
      iF = [{
        transform: "scaleY(0)"
      }, {
        transform: "scaleY(1)"
      }],
      AF = [{
        opacity: 1
      }, {
        opacity: 0
      }],
      rF = {
        quarry: qW.mining,
        industry: qW.demolition,
        market: qW.market,
        lumberMill: qW.woodcutting,
        farm: qW.farming,
        dealership: "Light Blue Car"
      },
      GF = {
        drillBay: qW.mining,
        vanBay: "Yellow Kart",
        carPickup: "Light Blue Car",
        demolitionPit: qW.demolition,
        farmField: qW.farming,
        woods: qW.woodcutting
      },
      nF = QW.flatMap(((dd, Od) => dd.map(((dd, md) => ({
        tile: dd,
        x: 1 + 3 * md,
        z: 1 + 3 * Od
      }))))),
      LF = nF.flatMap((dd => {
        let {
          tile: Od,
          x: md,
          z: Wd
        } = dd;
        return "residential" === Od.kind ? [] : [{
          tile: Od,
          x: md,
          z: Wd
        }]
      })),
      PF = nF.flatMap((dd => {
        let {
          tile: Od,
          x: md,
          z: Wd
        } = dd;
        return "residential" === Od.kind ? [{
          name: Od.name,
          x: md,
          z: Wd
        }] : []
      })),
      zF = [...WF.eastWest, ...WF.northSouth],
      cF = {
        "--greenville-sewers-fog": 32 / (2 * hW) * 100 + "%"
      },
      jF = {
        "--greenville-map-tile": 2 / sF * 100 + "cqw"
      };

    function DF(dd, Od) {
      return {
        left: (sF - dd) / sF * 100 + "%",
        top: Od / sF * 100 + "%"
      }
    }

    function eF(dd) {
      let {
        axis: Od,
        line: md
      } = dd;
      const Wd = .3,
        Fd = 3 * md + Wd,
        Rd = sF - .6;
      return "eastWest" === Od ? {
        x: Wd,
        y: Fd,
        width: Rd,
        height: .4
      } : {
        x: Fd,
        y: Wd,
        width: .4,
        height: Rd
      }
    }

    function IF(dd) {
      let {
        controller: Od,
        full: md = !1
      } = dd;
      const Wd = md ? Od.fullMap : Od.minimap;
      (0, wd.i)(UF, null), (0, wd.i)(JF, null);
      const Fd = Od.isInSewers(),
        {
          plots: Rd,
          animate: Xd
        } = Od.getPlots(),
        {
          city: Kd
        } = Od.map;
      return (0, xd.jsxs)("div", {
        className: Td()("GreenvilleNavMap", {
          Full: md,
          Sewers: Fd
        }),
        style: md ? jF : void 0,
        children: [(0, xd.jsx)("div", {
          className: "GreenvilleNavMapWorld",
          ref: Wd.mountWorld,
          children: (0, xd.jsxs)("div", {
            className: "GreenvilleNavMapPlane",
            children: [Kd && (0, xd.jsx)("svg", {
              className: "GreenvilleNavMapPlan",
              viewBox: `0 0 ${sF} ${sF}`,
              preserveAspectRatio: "none",
              shapeRendering: "crispEdges",
              children: (0, xd.jsxs)("g", {
                transform: uF,
                children: [(0, xd.jsx)("rect", {
                  className: "GreenvilleNavGround",
                  width: sF,
                  height: sF
                }), zF.map((dd => (0, xd.jsx)("rect", {
                  className: "GreenvilleNavRoad",
                  ...eF(dd)
                }, dd.name))), LF.map((dd => {
                  let {
                    tile: Od,
                    x: md,
                    z: Wd
                  } = dd;
                  return (0, xd.jsx)("rect", {
                    className: "GreenvilleNavDistrict",
                    "data-district": Od.district,
                    x: md,
                    y: Wd,
                    width: 2,
                    height: 2
                  }, Od.district)
                })), Rd.map((dd => (0, xd.jsx)(ZF, {
                  plot: dd,
                  animate: Xd
                }, dd.plotId)))]
              })
            }), (0, xd.jsx)("div", {
              className: "GreenvilleNavMapTerrainHost",
              ref: Wd.mountTerrain
            }), Kd && (0, xd.jsxs)(xd.Fragment, {
              children: [(0, xd.jsx)("svg", {
                className: "GreenvilleNavMapLots",
                viewBox: `0 0 ${sF} ${sF}`,
                preserveAspectRatio: "none",
                children: (0, xd.jsx)("g", {
                  transform: uF,
                  children: Rd.map((dd => (0, xd.jsx)("rect", {
                    className: Td()("GreenvilleNavLot", {
                      Vacant: "vacant" === dd.state,
                      Loading: "loading" === dd.state,
                      Mine: dd.mine
                    }),
                    x: dd.chunkX + VF,
                    y: dd.chunkZ + VF,
                    width: .84,
                    height: .84
                  }, dd.plotId)))
                })
              }), Fd && (0, xd.jsx)("img", {
                className: "GreenvilleNavSewers",
                src: qF,
                alt: "",
                draggable: !1
              }), LF.map((dd => {
                let {
                  tile: Od,
                  x: md,
                  z: Wd
                } = dd;
                const Fd = rF[Od.district];
                return Fd && (0, xd.jsx)("span", {
                  className: "GreenvilleNavPin GreenvilleNavLandmark",
                  style: DF(md + 1, Wd + 1),
                  children: (0, xd.jsx)(gd.c, {
                    itemName: Fd,
                    amount: 0
                  })
                }, Od.district)
              })), md && (0, xd.jsx)(lF, {}), (0, xd.jsx)(CF, {
                controller: Od
              })]
            }), (0, xd.jsxs)("div", {
              className: "GreenvilleNavArrowTrack",
              ref: Wd.mountArrow,
              children: [Fd && (0, xd.jsx)("div", {
                className: "GreenvilleNavSewersFog",
                style: cF
              }), (0, xd.jsx)("div", {
                className: "GreenvilleNavArrow",
                children: (0, xd.jsx)("svg", {
                  viewBox: "-1 -1 2 2",
                  children: (0, xd.jsx)("polygon", {
                    points: "0,-0.8 0.62,0.62 0,0.28 -0.62,0.62"
                  })
                })
              })]
            }), Rd.map((dd => dd.mine && (0, xd.jsx)("span", {
              className: "GreenvilleNavPin GreenvilleNavHome",
              style: DF(dd.chunkX + .5, dd.chunkZ + ("north" === dd.facing ? 0 : 1)),
              children: (0, xd.jsx)(KO.c, {
                name: "house"
              })
            }, dd.plotId)))]
          })
        }), !md && (0, xd.jsx)("div", {
          className: "GreenvilleNavGoalTrack",
          ref: Od.minimap.mountGoal,
          children: (0, xd.jsx)("span", {
            className: "GreenvilleNavPin GreenvilleNavGoal",
            children: (0, xd.jsx)(KO.c, {
              name: "flag"
            })
          })
        })]
      })
    }

    function lF() {
      return (0, xd.jsxs)(xd.Fragment, {
        children: [LF.map((dd => {
          let {
            tile: Od,
            x: md,
            z: Wd
          } = dd;
          return (0, xd.jsx)("span", {
            className: Td()("GreenvilleNavPlaceName SmallTextBold", {
              UnderLandmark: Od.district in rF
            }),
            style: DF(md + 1, Wd + 1),
            children: tW[Od.district]
          }, Od.district)
        })), PF.map((dd => {
          let {
            name: Od,
            x: md,
            z: Wd
          } = dd;
          return (0, xd.jsx)("span", {
            className: "GreenvilleNavPlaceName Neighbourhood SmallTextLight",
            style: DF(md + 1, Wd + 1),
            children: Od
          }, Od)
        }))]
      })
    }

    function CF(dd) {
      let {
        controller: Od
      } = dd;
      return (0, wd.i)(xF, null), (0, xd.jsx)(xd.Fragment, {
        children: Od.getMarkers().map(((dd, Od) => (0, xd.jsxs)("span", {
          className: "GreenvilleNavPin GreenvilleNavMarker",
          style: DF(dd.x, dd.z),
          children: ["npc" === dd.kind && (0, xd.jsx)(HF.c, {
            icon: dd.face
          }), "place" === dd.kind && (0, xd.jsx)(gd.c, {
            itemName: GF[dd.place],
            amount: 0
          })]
        }, Od)))
      })
    }
    const ZF = (0, hd.memo)((function(dd) {
      let {
        plot: Od,
        animate: md
      } = dd;
      const Wd = (0, hd.useRef)(null),
        Fd = (0, hd.useRef)(Od.state),
        Rd = (0, hd.useRef)(null);
      return (0, hd.useLayoutEffect)((() => {
        var dd;
        const Xd = Fd.current;
        Fd.current = Od.state, Xd !== Od.state && (null === (dd = Rd.current) || void 0 === dd || dd.cancel(), md && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && ("built" === Od.state ? Rd.current = Wd.current.animate(iF, {
          duration: 300,
          easing: "ease-out"
        }) : "vacant" === Od.state && (Rd.current = Wd.current.animate(AF, {
          duration: 400,
          easing: "ease-in"
        }))))
      }), [Od.state]), (0, hd.useEffect)((() => () => {
        var dd;
        null === (dd = Rd.current) || void 0 === dd || dd.cancel()
      }), []), (0, xd.jsxs)(xd.Fragment, {
        children: [(0, xd.jsx)("rect", {
          className: "GreenvilleNavPlotGrass",
          x: Od.chunkX + VF,
          y: Od.chunkZ + VF,
          width: .84,
          height: .84
        }), (0, xd.jsx)("rect", {
          ref: Wd,
          className: Td()("GreenvilleNavPlotRoof", {
            Loading: "loading" === Od.state,
            Built: "built" === Od.state,
            Mine: Od.mine
          }),
          x: Od.chunkX + VF,
          y: Od.chunkZ + VF,
          width: .84,
          height: .84
        })]
      })
    }));

    function kF(dd) {
      let {
        controller: Od,
        nav: md
      } = dd;
      const Wd = (0, wd.i)(ZW, Od.getView()),
        {
          t: Fd
        } = (0, Jd.G)(),
        Rd = (0, hd.useRef)(null);
      return (0, xd.jsx)(HO, {
        open: Wd.open,
        onDismiss: Od.dismiss,
        title: Fd("greenvilleGame:map"),
        className: "GreenvilleMapBoard",
        children: (0, xd.jsxs)("div", {
          ref: Rd,
          className: "GreenvilleMapFrame",
          children: [(0, xd.jsx)(IF, {
            controller: md,
            full: !0
          }), (0, xd.jsx)(fF, {
            frame: Rd,
            nav: md
          })]
        })
      })
    }

    function fF(dd) {
      let {
        frame: Od,
        nav: md
      } = dd;
      const {
        t: Wd
      } = (0, Jd.G)(), Fd = (0, dF.d)(Od, !0, "", 1);
      return (0, hd.useEffect)((() => {
        md.setFullMapZoom(Fd.view)
      }), [md, Fd.view]), (0, xd.jsx)(MW.d, {
        zoom: Fd,
        zoomInLabel: Wd("greenvilleGame:mapZoomIn"),
        zoomOutLabel: Wd("greenvilleGame:mapZoomOut")
      })
    }
    var MF = md(2130),
      dR = md(1596);

    function OR(dd) {
      let {
        controller: Od,
        onOpen: md
      } = dd;
      const [Wd, Fd] = (0, hd.useState)((() => Od.isMapShown()));
      (0, wd.f)(JF, (() => {
        Fd(Od.isMapShown())
      }));
      const Rd = (0, jd.d)(),
        {
          isTouchScreen: Xd
        } = (0, pd.p)(["isTouchScreen"]),
        {
          t: Kd
        } = (0, Jd.G)(),
        [vd, Qd] = (0, hd.useState)(null);
      return function(dd) {
        (0, hd.useLayoutEffect)((() => {
          if (!dd) return;
          const Od = dd.closest(".GreenvilleHudColumnStack"),
            md = new ResizeObserver((() => {
              dd.offsetWidth > 0 && Od.style.setProperty("--greenville-map-width", `${dd.offsetWidth}px`)
            }));
          return md.observe(dd), () => {
            md.disconnect()
          }
        }), [dd])
      }(vd), (0, xd.jsx)("div", {
        className: Td()("GreenvilleNavRoom", {
          Hidden: Rd || !Wd
        }),
        children: (0, xd.jsxs)("button", {
          ref: Qd,
          type: "button",
          className: "GreenvilleNav",
          "aria-label": Kd("greenvilleGame:map"),
          ...(0, dR.i)(md, "pointerup"),
          onMouseDown: dd => {
            dd.preventDefault()
          },
          children: [(0, xd.jsx)(IF, {
            controller: Od
          }), (0, xd.jsxs)("span", {
            className: "GreenvilleNavOpenHint",
            children: [Xd && (0, xd.jsx)(KO.c, {
              name: "expand",
              className: "GreenvilleNavExpandIcon"
            }), !Xd && (0, xd.jsx)(MF.b, {
              noaAction: "OpenTasksAndLeaderboard",
              padHidesKey: !0
            })]
          })]
        })
      })
    }
    const mR = md.p + "static/media/greenvilleCity.eadd76d06b8dfb594e19.png",
      WR = md.p + "static/media/greenvilleGrove.71253c8c4ae6c9cacba5.png",
      FR = {
        area: tF,
        imageUrl: mR,
        city: !0
      },
      RR = {
        area: NF,
        imageUrl: WR,
        city: !1
      };

    function XR(dd) {
      return dd >= 75 ? "face-smile" : dd >= 50 ? "face-diagonal-mouth" : dd >= 25 ? "face-worried" : "face-dizzy"
    }

    function KR(dd) {
      const Od = Math.round(dd);
      return `${Od>0?"+":""}${Od}%`
    }

    function hR(dd) {
      let {
        controller: Od
      } = dd;
      (0, wd.i)(km, null);
      const md = Od.getMood();
      return md ? (0, xd.jsx)(Yd.h, {
        placement: "statBars",
        children: (0, xd.jsx)(vR, {
          mood: md
        })
      }) : null
    }

    function vR(dd) {
      let {
        mood: Od
      } = dd;
      const {
        t: md
      } = (0, Jd.G)(), Wd = function(dd) {
        const [, Od] = (0, hd.useState)(0);
        return (0, hd.useEffect)((() => {
          const md = dd - performance.now();
          if (md <= 0) return;
          const Wd = window.setTimeout((() => {
            Od((dd => dd + 1))
          }), md);
          return () => {
            window.clearTimeout(Wd)
          }
        }), [dd]), dd > performance.now()
      }(Od.restedEndsAt), {
        energy: Fd,
        breakEvenEnergy: Rd,
        luckPercent: Xd
      } = Od, Kd = null !== Xd && void 0 !== Xd ? Xd : Od.earningsPercent;
      return (0, xd.jsxs)("div", {
        className: Td()("GreenvilleMoodChip", {
          Exhausted: Fd < 25,
          Rested: Wd,
          Tired: !Wd && Fd < Rd && Fd >= 25,
          Drained: !Wd && Fd < 25
        }),
        role: "img",
        "aria-label": md("greenvilleGame:moodEnergyLabel", {
          energy: Math.round(Fd)
        }),
        children: [(0, xd.jsx)(KO.c, {
          name: XR(Fd),
          className: "GreenvilleMoodChipFace"
        }), Wd && (0, xd.jsx)("span", {
          className: "GreenvilleMoodChipZz",
          children: md("greenvilleGame:moodRestedGlyph")
        }), (0, xd.jsxs)("div", {
          className: "GreenvilleMoodChipMeter",
          style: {
            "--greenville-break-even": `${Rd}%`
          },
          children: [(0, xd.jsx)("div", {
            className: "GreenvilleMoodChipBar",
            children: (0, xd.jsx)("div", {
              className: "GreenvilleMoodChipFill",
              style: {
                transform: `scaleX(${Math.min(100,Math.max(0,Fd))/100})`
              }
            })
          }), (0, xd.jsx)("div", {
            className: "GreenvilleMoodChipTick"
          })]
        }), null === Xd && (0, xd.jsx)("span", {
          className: "GreenvilleMoodChipCoin",
          "aria-hidden": "true",
          children: (0, xd.jsx)(gd.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), (0, xd.jsxs)("span", {
          className: Td()("GreenvilleMoodChipEarnings", {
            Positive: Math.round(Kd) > 0,
            Negative: Math.round(Kd) < 0
          }),
          children: [null !== Xd && (0, xd.jsx)("span", {
            className: "GreenvilleMoodChipLuck",
            children: md("greenvilleGame:luck")
          }), KR(Kd)]
        }), Od.adBoosted && (0, xd.jsx)("span", {
          className: "GreenvilleMoodChipBoost",
          children: (0, xd.jsx)(KO.c, {
            name: "bolt"
          })
        })]
      })
    }

    function QR(dd) {
      let {
        controller: Od
      } = dd;
      (0, wd.i)(Zm, null);
      const md = Od.getPlace();
      return "hudHome" !== (null === md || void 0 === md ? void 0 : md.kind) || null === md.runStartedAt ? null : (0, xd.jsx)(tR, {
        startedAt: md.runStartedAt
      })
    }

    function tR(dd) {
      let {
        startedAt: Od
      } = dd;
      const md = Math.max(0, Math.floor(-(0, iW.g)(Od)));
      return (0, xd.jsx)("div", {
        className: "GreenvilleMarketCountdown",
        role: "timer",
        children: (0, xd.jsxs)("div", {
          className: "GreenvilleMarketCountdownTime FullyFancyText",
          children: [Math.floor(md / 60), ":", String(md % 60).padStart(2, "0")]
        })
      })
    }
    const oR = "greenvilleSmugglerView",
      NR = {
        open: !1,
        deals: [],
        soldOutSlots: [],
        rotatesAtMs: 0,
        pending: !1,
        status: null,
        boughtSlot: null,
        boughtCount: 0
      };
    class qR extends WO {
      constructor(dd, Od, md, Wd, Fd) {
        super(NR, dd, Od), this.onBought = Fd, this.purchases = void 0, this.day = 0, this.buy = dd => {
          const Od = this.getView();
          !Od.open || Od.pending || Od.soldOutSlots.includes(dd) || (this.purchases.push([this.day, dd]), this.set({
            ...Od,
            pending: !0
          }))
        }, this.syncPending = () => {
          const dd = this.getView();
          dd.open && this.set({
            ...dd,
            pending: !this.purchases.Nt()
          })
        }, this.purchases = new OO(Wd, (dd => {
          let [Od, Wd] = dd;
          md(Od, Wd)
        }), this.syncPending)
      }
      Yt(dd) {
        if ("close" === dd[0]) return void this.close();
        const [, Od, md, Wd, Fd, Rd] = dd;
        null !== Rd && this.purchases.takeAnswer();
        const Xd = this.getView();
        if (null !== Rd && !Xd.open) return;
        this.day = Od;
        const [Kd, hd] = null !== Rd && void 0 !== Rd ? Rd : [null, null], vd = {
          open: !0,
          deals: md,
          soldOutSlots: Fd,
          rotatesAtMs: Date.now() + Wd,
          pending: !this.purchases.Nt(),
          status: this.getStatus(Kd, hd),
          boughtSlot: Kd,
          boughtCount: Xd.boughtCount + (null === Kd ? 0 : 1)
        };
        null === Rd ? this.show(vd) : this.set(vd), null !== Kd && this.onBought()
      }
      dropPresses() {
        this.purchases.clear()
      }
      getStatus(dd, Od) {
        return null !== dd ? {
          tone: "bought",
          key: "greenvilleGame:smugglerBought"
        } : null === Od ? null : {
          tone: "refused",
          key: Od
        }
      }
    }
    var HR = md(40235);
    const yR = {
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

    function bR(dd) {
      let {
        controller: Od
      } = dd;
      const md = (0, wd.i)(oR, Od.getView()),
        Wd = ld(),
        {
          t: Fd
        } = (0, Jd.G)();
      return (0, xd.jsx)(HR.b, {
        keys: yR,
        open: md.open,
        onDismiss: Od.dismiss,
        wallet: [{
          itemName: Id,
          amount: Wd
        }],
        deals: md.deals.map(((dd, Od) => {
          let [Fd, Rd, Xd] = dd;
          return {
            slot: Od,
            itemName: Fd,
            displayName: (0, xd.jsx)(NO, {
              item: Fd
            }),
            enchantmentTier: null,
            amount: Rd,
            prices: [{
              itemName: Id,
              amount: Xd,
              owned: Wd
            }],
            soldOut: md.soldOutSlots.includes(Od),
            justBought: md.boughtSlot === Od
          }
        })),
        rotatesAtMs: md.rotatesAtMs,
        status: null === md.status ? null : {
          tone: md.status.tone,
          text: Fd(md.status.key)
        },
        pending: md.pending,
        boughtCount: md.boughtCount,
        onBuy: Od.buy
      })
    }
    const TR = [{
        transform: "translateY(100%)",
        opacity: 0
      }, {
        transform: "translateY(0)",
        opacity: 1
      }],
      pR = [{
        transform: "translateY(-100%)",
        opacity: 0
      }, {
        transform: "translateY(0)",
        opacity: 1
      }];

    function YR(dd) {
      return dd ? `${dd.number}|${dd.street.name}` : ""
    }

    function gR(dd) {
      let {
        address: Od,
        large: md,
        rootRef: Wd
      } = dd;
      const Fd = function(dd) {
          switch (dd.kind) {
            case "junction":
              return [{
                street: dd.along,
                number: null
              }, {
                street: dd.cross,
                number: null
              }];
            case "plot":
            case "tile":
              return [{
                street: dd.street,
                number: dd.number
              }, null];
            case "street":
              return [{
                street: dd.street,
                number: dd.block
              }, null]
          }
        }(Od),
        Rd = md && "plot" === Od.kind ? Od.neighbourhood : null,
        Xd = (0, hd.useRef)(null),
        Kd = (0, hd.useRef)(null),
        vd = (0, hd.useRef)(Fd),
        Qd = (0, hd.useRef)({
          large: md,
          top: 0,
          height: 0
        }),
        td = (0, hd.useRef)([]),
        od = (0, hd.useRef)(null);
      (0, hd.useLayoutEffect)((() => {
        const dd = vd.current;
        if (vd.current = Fd, window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const Od = [];
        if (YR(dd[0]) !== YR(Fd[0]) && Od.push(Xd.current.animate(TR, {
            duration: 180,
            easing: "ease-out"
          })), Fd[1] && !dd[1] && Od.push(Kd.current.animate(pR, {
            duration: 220,
            easing: "ease-out"
          })), Od.length > 0) {
          for (const dd of td.current) dd.cancel();
          td.current = Od
        }
      }), [YR(Fd[0]), YR(Fd[1])]), (0, hd.useLayoutEffect)((() => {
        var dd;
        const Od = Wd.current,
          Fd = Qd.current;
        Qd.current = {
          large: md,
          top: Od.offsetTop,
          height: Od.offsetHeight
        }, Fd.large === md || 0 === Fd.height || 0 === Od.offsetHeight || window.matchMedia("(prefers-reduced-motion: reduce)").matches || (null === (dd = od.current) || void 0 === dd || dd.cancel(), od.current = Od.animate([{
          transform: `translateY(${Fd.top-Od.offsetTop}px) scale(${Fd.height/Od.offsetHeight})`
        }, {
          transform: "none"
        }], {
          duration: 260,
          easing: "ease-out"
        }))
      }), [md, Rd, YR(Fd[0]), YR(Fd[1])]), (0, hd.useEffect)((() => {
        const dd = Wd.current,
          Od = new ResizeObserver((() => {
            Qd.current = {
              ...Qd.current,
              top: dd.offsetTop,
              height: dd.offsetHeight
            }
          }));
        return Od.observe(dd.parentElement), () => {
          var dd;
          Od.disconnect();
          for (const Od of td.current) Od.cancel();
          null === (dd = od.current) || void 0 === dd || dd.cancel()
        }
      }), [Wd]);
      const [Nd, qd] = Fd;
      return (0, xd.jsxs)("div", {
        ref: Wd,
        className: Td()("GreenvilleNavSign", {
          Large: md
        }),
        children: [(0, xd.jsxs)("div", {
          className: "GreenvilleNavBlade",
          children: [null !== Rd && (0, xd.jsx)("span", {
            className: "GreenvilleNavHeader",
            children: Rd
          }), (0, xd.jsx)(wR, {
            blade: Nd,
            textRef: Xd
          })]
        }), qd && (0, xd.jsx)("div", {
          ref: Kd,
          className: "GreenvilleNavBlade",
          children: (0, xd.jsx)(wR, {
            blade: qd
          })
        })]
      })
    }

    function wR(dd) {
      let {
        blade: Od,
        textRef: md
      } = dd;
      return (0, xd.jsxs)("span", {
        ref: md,
        className: "GreenvilleNavBladeText",
        children: [null !== Od.number && (0, xd.jsx)("span", {
          className: "GreenvilleNavNumber",
          children: Od.number
        }), (0, xd.jsxs)("span", {
          className: "GreenvilleNavStreet",
          children: [Od.street.shortName, " ", (0, xd.jsx)("span", {
            className: "GreenvilleNavSuffix",
            children: Od.street.suffix
          })]
        })]
      })
    }
    const aR = "4rem",
      ER = `translateY(${aR}) scale(1.4)`,
      JR = [{
        transform: ER,
        opacity: 0
      }, {
        transform: ER,
        opacity: 1,
        offset: .12
      }, {
        transform: ER,
        opacity: 1,
        offset: .7,
        easing: "ease-in-out"
      }, {
        transform: "none",
        opacity: 1
      }],
      UR = [{
        opacity: 0
      }, {
        opacity: 1
      }];

    function xR(dd) {
      var Od;
      let {
        controller: md,
        nav: Wd
      } = dd;
      (0, wd.i)(Zm, null), (0, wd.i)(JF, null);
      const {
        t: Fd
      } = (0, Jd.G)(), Rd = (0, jd.d)(), Xd = (0, hd.useRef)(null), Kd = (0, hd.useRef)(null), vd = (0, hd.useRef)(null), Qd = (0, hd.useRef)(null), td = (0, hd.useRef)(null), od = (0, hd.useRef)(null), Nd = (0, PO.h)("hiddenPlayerNames"), qd = md.getPlace(), Hd = Wd.getAddress(), yd = Wd.isInSewers(), bd = qd && function(dd, Od, md, Wd, Fd) {
        if (Wd) return {
          key: "sewers",
          name: dd("greenvilleGame:placeSewers"),
          eyebrow: null
        };
        switch (Od.kind) {
          case "hudTown":
            return "city" !== Od.place ? {
              key: Od.place,
              name: dd(`greenvilleGame:${Od.place}`),
              eyebrow: null
            } : "tile" === md.kind ? {
              key: `place|${tW[md.district]}`,
              name: tW[md.district],
              eyebrow: null
            } : "outside" === md.kind ? {
              key: "city|outside",
              name: dd("greenvilleGame:placeGreenville"),
              eyebrow: null
            } : null;
          case "hudJob": {
            const md = yW(dd, Od.place);
            return {
              key: `place|${md}`,
              name: md,
              eyebrow: null
            }
          }
          case "hudHome": {
            const md = Od.isOwner ? dd("greenvilleGame:placeYourHouse") : dd("greenvilleGame:homePlayersHouse", {
                player: (0, OW.e)(Od.ownerName, Fd)
              }),
              Wd = `home|${Od.ownerName}|${Od.houseName}`;
            return null === Od.houseName ? {
              key: Wd,
              name: md,
              eyebrow: null
            } : {
              key: Wd,
              name: Od.houseName,
              eyebrow: md
            }
          }
          case "hudSpleef":
            return {
              key: "spleef", name: dd("greenvilleGame:placeSpleef"), eyebrow: null
            }
        }
      }(Fd, qd, Hd, yd, Nd), Td = bd ? bd.key : null;
      if ((0, hd.useLayoutEffect)((() => {
          var dd, Od, md, Wd;
          if (null === Td) return null === (md = Qd.current) || void 0 === md || md.cancel(), void(null === (Wd = td.current) || void 0 === Wd || Wd.cancel());
          if (Xd.current === Td) return;
          if (Xd.current = Td, Rd) return;
          const Fd = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          null === (dd = Qd.current) || void 0 === dd || dd.cancel(), Qd.current = Kd.current.animate(Fd ? UR : JR, {
            duration: Fd ? 400 : 2200
          }), null === (Od = td.current) || void 0 === Od || Od.cancel(), !Fd && vd.current && (td.current = vd.current.animate(function(dd) {
            const Od = `0 calc(${aR} + ${(1.4-1)*dd}px)`;
            return [{
              translate: "0 0",
              easing: "ease-out"
            }, {
              translate: Od,
              offset: .12
            }, {
              translate: Od,
              offset: .7,
              easing: "ease-in-out"
            }, {
              translate: "0 0"
            }]
          }(Kd.current.offsetHeight), {
            duration: 2200
          }))
        }), [Td]), (0, hd.useEffect)((() => () => {
          var dd, Od;
          null === (dd = Qd.current) || void 0 === dd || dd.cancel(), null === (Od = td.current) || void 0 === Od || Od.cancel()
        }), []), !qd) return null;
      let pd = "outside" === Hd.kind || yd ? null : Hd;
      return !bd || "plot" !== Hd.kind && "tile" !== Hd.kind ? bd && pd && (null === (Od = od.current) || void 0 === Od ? void 0 : Od.key) === bd.key && (pd = od.current.address) : od.current = {
        key: bd.key,
        address: Hd
      }, (0, xd.jsxs)("div", {
        className: "GreenvilleTopBar",
        children: [bd && (0, xd.jsx)(BR, {
          title: bd,
          tagRef: Kd,
          job: yd || "hudJob" !== qd.kind ? null : qd,
          home: yd || "hudHome" !== qd.kind ? null : qd,
          sewers: yd
        }), pd && (0, xd.jsx)(gR, {
          address: pd,
          large: !bd,
          rootRef: vd
        })]
      })
    }

    function BR(dd) {
      let {
        title: Od,
        tagRef: md,
        job: Wd,
        home: Fd,
        sewers: Rd
      } = dd;
      return (0, xd.jsxs)("div", {
        ref: md,
        className: Td()("GreenvillePlaceTag", {
          Sewers: Rd
        }),
        role: "status",
        children: [null !== Od.eyebrow && (0, xd.jsx)("span", {
          className: "GreenvillePlaceTagEyebrow",
          children: Od.eyebrow
        }), (0, xd.jsx)("strong", {
          className: "GreenvillePlaceTagName",
          children: Od.name
        }), Wd && (0, xd.jsx)(SR, {
          job: Wd
        }), Fd && (0, xd.jsx)(uR, {
          home: Fd
        })]
      })
    }

    function SR(dd) {
      let {
        job: Od
      } = dd;
      const {
        t: md
      } = (0, Jd.G)(), {
        level: Wd,
        expInto: Fd,
        expNeeded: Rd
      } = Od, Xd = 0 === Rd;
      return (0, xd.jsxs)("div", {
        className: "GreenvillePlaceTagRow",
        children: [(0, xd.jsx)("span", {
          className: "GreenvillePlaceTagJob",
          "aria-hidden": "true",
          children: (0, xd.jsx)(gd.c, {
            itemName: qW[Od.job],
            amount: 0
          })
        }), (0, xd.jsx)("span", {
          className: "GreenvillePlaceTagLevel",
          children: md("greenvilleGame:levelShort", {
            level: Wd
          })
        }), (0, xd.jsx)("div", {
          className: "GreenvillePlaceTagBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": Xd ? 100 : Math.round(Fd / Rd * 100),
          children: (0, xd.jsx)("div", {
            className: "GreenvillePlaceTagBarFill",
            style: {
              transform: `scaleX(${Xd?1:Math.min(1,Fd/Rd)})`
            }
          })
        }), !Xd && (0, xd.jsxs)("span", {
          className: "GreenvillePlaceTagExp",
          children: [(0, zd.g)(Fd), "/", (0, zd.g)(Rd)]
        }), Xd && (0, xd.jsx)("span", {
          className: "GreenvillePlaceTagMax",
          children: md("greenvilleGame:levelMax")
        }), null !== Od.status && (0, xd.jsx)(sR, {
          status: Od.status
        })]
      })
    }

    function sR(dd) {
      let {
        status: Od
      } = dd;
      const {
        t: md
      } = (0, Jd.G)();
      switch (Od.kind) {
        case "hudTier":
          return (0, xd.jsxs)("span", {
            className: Td()("GreenvillePlaceChip", {
              Locked: Od.locked
            }),
            children: [Od.locked && (0, xd.jsx)(KO.c, {
              name: "lock"
            }), md(`greenvilleGame:${Od.tierKey}`)]
          });
        case "hudBay":
          return (0, xd.jsxs)("span", {
            className: "GreenvillePlaceChip",
            children: [md("greenvilleGame:demolitionBayObject", {
              material: md(`greenvilleGame:${Od.materialKey}`),
              object: md(`greenvilleGame:${Od.objectKey}`)
            }), (0, xd.jsx)("span", {
              className: "GreenvillePlaceChipBar",
              children: (0, xd.jsx)("span", {
                className: "GreenvillePlaceChipBarFill",
                style: {
                  transform: `scaleX(${Od.percent/100})`
                }
              })
            })]
          });
        case "hudBayEmpty":
          return (0, xd.jsx)("span", {
            className: "GreenvillePlaceChip",
            children: md("greenvilleGame:demolitionYardIncoming")
          });
        case "hudFarmTier":
          return (0, xd.jsx)("span", {
            className: "GreenvillePlaceChip Golden",
            children: md("greenvilleGame:farmGoldenChance", {
              percent: Od.goldenPercent
            })
          })
      }
    }

    function uR(dd) {
      let {
        home: Od
      } = dd;
      const {
        t: md
      } = (0, Jd.G)();
      return Od.pvp || Od.parkour || !Od.visitorsAllowed ? (0, xd.jsxs)("div", {
        className: "GreenvillePlaceTagRow GreenvillePlaceTagChips",
        children: [Od.pvp && (0, xd.jsx)("span", {
          className: "GreenvillePlaceChip Danger",
          children: md("greenvilleGame:houseChipPvp")
        }), Od.parkour && (0, xd.jsx)("span", {
          className: "GreenvillePlaceChip",
          children: md("greenvilleGame:houseChipParkour")
        }), !Od.visitorsAllowed && (0, xd.jsxs)("span", {
          className: "GreenvillePlaceChip Locked",
          children: [(0, xd.jsx)(KO.c, {
            name: "lock"
          }), md("greenvilleGame:houseChipVisitorsOff")]
        })]
      }) : null
    }
    const VR = "greenvilleTutorialView",
      iR = "target",
      AR = "home",
      rR = `${Kd}go`,
      GR = {
        card: null,
        picker: null,
        homeMarker: !1
      };

    function nR(dd) {
      return null === dd ? "" : "jobs" === dd.kind ? dd.kind : `${dd.owner}|${dd.lineKey}|${dd.action}`
    }
    class LR {
      constructor(dd, Od, md, Wd, Fd, Rd) {
        this.markers = dd, this.lQ = Od, this.send = md, this.pacer = Wd, this.celebrate = Fd, this.nav = Rd, this.view = GR, this.picks = void 0, this.waiting = [], this.pressed = new Map, this.moveInTimer = null, this.flushing = !1, this.unsubscribePacer = void 0, this.go = () => {
          this.press(rR)
        }, this.goTo = dd => {
          this.waiting = this.waiting.filter((dd => {
            let {
              command: Od
            } = dd;
            return !Od.startsWith(`${rR} `)
          })), this.press(`${rR} ${dd}`)
        }, this.skip = dd => {
          this.press(`${Kd}skip ${dd}`)
        }, this.xN = dd => {
          const Od = this.view.picker;
          null === Od || Od.movingIn || dd === this.picks.getLatest() || (this.picks.pushLatest(dd), this.set({
            ...this.view,
            picker: {
              ...Od,
              selected: this.picks.getLatest()
            }
          }))
        }, this.moveIn = () => {
          const dd = this.view.picker;
          null === dd || dd.movingIn || (this.queue({
            command: `${Kd}movein`,
            picker: !0
          }), this.moveInTimer = setTimeout(this.onMoveInTimedOut, 15e3), this.set({
            ...this.view,
            picker: {
              ...dd,
              movingIn: !0
            }
          }))
        }, this.showLatestPick = () => {
          const dd = this.view.picker;
          null !== dd && this.set({
            ...this.view,
            picker: {
              ...dd,
              selected: this.picks.getLatest()
            }
          })
        }, this.onMoveInTimedOut = () => {
          this.moveInTimer = null;
          const dd = this.view.picker;
          null !== dd && void 0 !== dd && dd.movingIn && (console.warn("Greenville: the server never closed the house picker after Move in"), this.dropPickerPresses(), this.set({
            ...this.view,
            picker: {
              ...dd,
              selected: this.picks.getLatest(),
              movingIn: !1
            }
          }))
        }, this.flush = () => {
          if (!this.flushing) {
            for (this.flushing = !0; this.waiting.length > 0 && this.pacer.tryStart();) this.send(this.waiting.shift().command);
            this.flushing = !1
          }
        }, this.picks = new mO("", Wd, (dd => {
          md(`${Kd}try ${dd}`)
        }), this.showLatestPick), this.unsubscribePacer = Wd.subscribe(this.flush)
      }
      getView() {
        return this.view
      }
      Yt(dd) {
        switch (dd[0]) {
          case "tutCard": {
            const [, Od, md, Wd, Fd, Rd, Xd, Kd, hd] = dd;
            this.setCard({
              kind: "step",
              owner: Od,
              lineKey: md,
              byDevice: Wd,
              count: Fd,
              goal: Rd,
              action: Xd,
              target: Kd && {
                x: Kd[0],
                y: Kd[1],
                z: Kd[2],
                labelKey: Kd[3]
              },
              skippable: hd
            });
            break
          }
          case "tutJobs":
            this.setCard({
              kind: "jobs",
              places: dd[1]
            });
            break;
          case "tutHidden":
            this.setCard(null);
            break;
          case "tutPicker": {
            var Od;
            const [, md, Wd, Fd] = dd, Rd = this.view.picker;
            Fd && this.picks.takeAnswer(), this.picks.confirm(Wd), this.set({
              ...this.view,
              picker: {
                houses: md.map((dd => {
                  let [Od, md, Wd] = dd;
                  return {
                    schemName: Od,
                    icon: md,
                    titleKey: Wd
                  }
                })),
                selected: this.picks.getLatest(),
                movingIn: null !== (Od = null === Rd || void 0 === Rd ? void 0 : Rd.movingIn) && void 0 !== Od && Od
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
            this.celebrate(dd[1], dd[2]);
            break;
          case "tutHomeMarker":
            this.set({
              ...this.view,
              homeMarker: dd[1]
            })
        }
      }
      getTarget() {
        const dd = this.view.card;
        return "step" === (null === dd || void 0 === dd ? void 0 : dd.kind) ? dd.target : null
      }
      getShownHome() {
        if (!this.view.homeMarker) return null;
        const dd = this.nav.getHomeGate(),
          Od = this.getTarget();
        return null === dd || Od && Math.hypot(Od.x - dd[0], Od.z - dd[1]) < 12 ? null : dd
      }
      frame(dd, Od) {
        if (this.markers.setRender(dd), !this.markers.hasMarkers()) return;
        const md = this.getTarget();
        md && this.markers.update(iR, md.x, md.y + 1, md.z, Od);
        const Wd = Od && this.getShownHome();
        Wd && this.markers.update(AR, Wd[0], 2, Wd[1], Od)
      }
      dispose() {
        this.dropPickerPresses(), this.forgetPresses(), this.waiting = [], this.unsubscribePacer(), this.markers.dispose()
      }
      setCard(dd) {
        nR(dd) !== nR(this.view.card) && (this.forgetPresses(), this.waiting = this.waiting.filter((dd => {
          let {
            picker: Od
          } = dd;
          return Od
        }))), this.set({
          ...this.view,
          card: dd
        });
        const Od = this.getTarget();
        this.nav.setGoal(Od && {
          x: Od.x,
          z: Od.z
        })
      }
      set(dd) {
        this.view = dd, this.lQ(dd)
      }
      press(dd) {
        const Od = this.waiting.some((Od => Od.command === dd));
        this.pressed.has(dd) || Od || (this.pressed.set(dd, setTimeout((() => {
          this.pressed.delete(dd)
        }), 3e3)), this.queue({
          command: dd,
          picker: !1
        }))
      }
      forgetPresses() {
        for (const dd of this.pressed.values()) clearTimeout(dd);
        this.pressed.clear()
      }
      queue(dd) {
        this.waiting.push(dd), this.flush()
      }
      dropPickerPresses() {
        this.picks.clear(), this.waiting = this.waiting.filter((dd => {
          let {
            picker: Od
          } = dd;
          return !Od
        })), null !== this.moveInTimer && (clearTimeout(this.moveInTimer), this.moveInTimer = null)
      }
    }
    const PR = "GreenvilleHousePickerTitle";

    function zR() {}

    function cR(dd) {
      let {
        controller: Od
      } = dd;
      (0, wd.i)(VR, null);
      const md = Od.getView().picker;
      return (0, xd.jsx)(oO.c, {
        show: null !== md,
        forcePointerUnlock: null !== md,
        close: zR,
        globallyUniqueKey: "greenvilleHousePicker",
        escDoesExit: !1,
        closeOnPressBackground: !1,
        padBackCloses: !1,
        doGameplayStartStopOnShow: !0,
        cameraKeeper: !0,
        ignorePressesAsShown: !0,
        className: "GreenvilleHousePickerOverlay",
        children: null !== md && (0, xd.jsx)(jR, {
          picker: md,
          controller: Od
        })
      })
    }

    function jR(dd) {
      let {
        picker: Od,
        controller: md
      } = dd;
      const {
        t: Wd
      } = (0, Jd.G)();
      return (0, xd.jsxs)("section", {
        className: "GreenvilleHousePicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": PR,
        children: [(0, xd.jsx)("h2", {
          id: PR,
          className: "GreenvilleHousePickerTitle",
          children: Wd("greenvilleGame:tutPickerTitle")
        }), (0, xd.jsx)("div", {
          className: "GreenvilleHousePickerHouses",
          children: Od.houses.map((dd => {
            let {
              schemName: Fd,
              icon: Rd,
              titleKey: Xd
            } = dd;
            const Kd = Fd === Od.selected;
            return (0, xd.jsxs)("button", {
              type: "button",
              className: Td()("GreenvilleHousePickerHouse", {
                Selected: Kd
              }),
              "aria-pressed": Kd,
              disabled: Od.movingIn,
              "data-pad-default-focus": Kd || void 0,
              onClick: () => {
                md.xN(Fd)
              },
              children: [(0, xd.jsx)("img", {
                src: `/textures/games/greenville/${Rd}`,
                alt: "",
                draggable: !1
              }), (0, xd.jsx)("span", {
                className: "GreenvilleHousePickerHouseName",
                children: Wd(`greenvilleGame:${Xd}`)
              })]
            }, Fd)
          }))
        }), (0, xd.jsx)(hO.m, {
          className: "GreenvilleHousePickerMoveIn",
          loading: Od.movingIn,
          onClick: md.moveIn,
          children: Wd("greenvilleGame:tutPickerMoveIn")
        })]
      })
    }
    var DR = md(40026);
    const eR = {
      farm: "farming",
      lumberMill: "woodcutting",
      quarry: "mining",
      marketStreet: "market",
      demolitionYard: "demolition"
    };

    function IR(dd) {
      let {
        controller: Od,
        hud: md
      } = dd;
      (0, wd.i)(VR, null);
      const Wd = Od.getView().card;
      return (0, xd.jsxs)(xd.Fragment, {
        children: ["step" === (null === Wd || void 0 === Wd ? void 0 : Wd.kind) && (0, xd.jsx)(lR, {
          card: Wd,
          controller: Od,
          hud: md
        }), "jobs" === (null === Wd || void 0 === Wd ? void 0 : Wd.kind) && (0, xd.jsx)(CR, {
          card: Wd,
          controller: Od
        })]
      })
    }

    function lR(dd) {
      let {
        card: Od,
        controller: md,
        hud: Wd
      } = dd;
      const {
        t: Fd
      } = (0, Jd.G)(), {
        isTouchScreen: Rd
      } = (0, pd.p)(["isTouchScreen"]);
      (0, wd.i)(Zm, null);
      const Xd = Wd.getPlace(),
        Kd = "hudJob" === (null === Xd || void 0 === Xd ? void 0 : Xd.kind) && "quarry" === Xd.place,
        hd = Fd(`greenvilleGame:${Od.lineKey}${Od.byDevice&&Rd?"Touch":""}`, {
          count: (0, zd.g)(Od.count),
          goal: (0, zd.g)(Od.goal),
          target: Od.target && Fd(Od.target.labelKey)
        }),
        vd = Od.goal > 0,
        Qd = "go" === Od.action && (0, xd.jsxs)(hO.m, {
          className: "GreenvilleTutorialCardGo",
          touchPressOn: "pointerup",
          onClick: md.go,
          children: [Fd("greenvilleGame:tutGo"), !Rd && !Kd && (0, xd.jsx)(MF.b, {
            className: "GreenvilleTutorialCardKey",
            noaAction: "SpecialAction2",
            padHidesKey: !0
          })]
        });
      return (0, xd.jsxs)(kR, {
        heading: (0, xd.jsxs)(xd.Fragment, {
          children: [(0, xd.jsx)("span", {
            className: "GreenvilleTutorialCardLine",
            children: hd
          }), vd && (0, xd.jsxs)("span", {
            className: "GreenvilleTutorialCardCount",
            children: [(0, zd.g)(Math.min(Od.count, Od.goal)), "/", (0, zd.g)(Od.goal)]
          })]
        }),
        compactAction: Qd,
        children: [vd && (0, xd.jsx)("div", {
          className: "GreenvilleTutorialCardBar",
          "aria-hidden": "true",
          children: (0, xd.jsx)("span", {
            style: {
              width: `${Math.min(100,100*Od.count/Od.goal)}%`
            }
          })
        }), (Qd || Od.skippable) && (0, xd.jsxs)("div", {
          className: "GreenvilleTutorialCardActions",
          children: [Qd, Od.skippable && (0, xd.jsx)(ZR, {
            owner: Od.owner,
            controller: md
          })]
        })]
      })
    }

    function CR(dd) {
      let {
        card: Od,
        controller: md
      } = dd;
      const {
        t: Wd
      } = (0, Jd.G)();
      return (0, xd.jsxs)(kR, {
        heading: (0, xd.jsx)("span", {
          className: "GreenvilleTutorialCardLine",
          children: Wd("greenvilleGame:tutJobsTitle")
        }),
        children: [(0, xd.jsx)("ul", {
          className: "GreenvilleTutorialCardJobs",
          children: Od.places.map((dd => (0, xd.jsxs)("li", {
            className: "GreenvilleTutorialCardJob",
            children: [(0, xd.jsx)("span", {
              className: "GreenvilleTutorialCardJobIcon",
              "aria-hidden": "true",
              children: (0, xd.jsx)(gd.c, {
                itemName: qW[eR[dd]],
                amount: 0
              })
            }), (0, xd.jsx)("span", {
              className: "GreenvilleTutorialCardJobName",
              children: yW(Wd, dd)
            }), (0, xd.jsx)(hO.m, {
              className: "GreenvilleTutorialCardGo",
              touchPressOn: "pointerup",
              onClick: () => {
                md.goTo(dd)
              },
              children: Wd("greenvilleGame:tutGo")
            })]
          }, dd)))
        }), (0, xd.jsx)("div", {
          className: "GreenvilleTutorialCardActions",
          children: (0, xd.jsx)(ZR, {
            owner: "guide",
            controller: md
          })
        })]
      })
    }

    function ZR(dd) {
      let {
        owner: Od,
        controller: md
      } = dd;
      const {
        t: Wd
      } = (0, Jd.G)();
      return (0, xd.jsx)(hO.i, {
        className: "GreenvilleTutorialCardSkip",
        touchPressOn: "pointerup",
        onClick: () => {
          md.skip(Od)
        },
        children: Wd("guide" === Od ? "greenvilleGame:tutSkip" : "greenvilleGame:tutKnowThis")
      })
    }

    function kR(dd) {
      let {
        heading: Od,
        compactAction: md,
        children: Wd
      } = dd;
      const Fd = (0, DR.d)(),
        [Rd, Xd] = (0, hd.useState)(!1),
        Kd = Fd && !Rd;
      return (0, xd.jsxs)("div", {
        className: Td()("GreenvilleTrackerCard GreenvilleTutorialCard", {
          Compact: Kd
        }),
        children: [(0, xd.jsxs)("div", {
          className: "GreenvilleTutorialCardHead",
          children: [Fd && (0, xd.jsxs)("button", {
            type: "button",
            className: "GreenvilleTutorialCardToggle",
            "aria-expanded": Rd,
            ...(0, dR.i)((() => {
              Xd(!Rd)
            }), "pointerup"),
            children: [Od, (0, xd.jsx)("span", {
              className: "GreenvilleTutorialCardChevron",
              "aria-hidden": "true",
              children: Rd ? "\u25b4" : "\u25be"
            })]
          }), !Fd && Od, Kd && md]
        }), !Kd && Wd]
      })
    }

    function fR(dd) {
      let {
        controller: Od
      } = dd;
      (0, wd.i)(VR, null), (0, wd.i)(UF, null);
      const {
        isTouchScreen: md
      } = (0, pd.p)(["isTouchScreen"]), {
        t: Wd
      } = (0, Jd.G)(), Fd = Od.getTarget(), Rd = Od.getShownHome();
      return null === Fd && null === Rd ? null : (0, xd.jsxs)("div", {
        className: "GreenvilleMarketWaypoints",
        children: [null !== Fd && (0, xd.jsx)(eW, {
          bind: Od.markers.bindMarker(iR),
          house: !0,
          label: Wd(Fd.labelKey),
          extra: md && (0, xd.jsx)(KO.c, {
            name: "hand-back-point-up",
            className: "SmallTextBold TouchTutorialIcon GreenvilleTutorialHand"
          }),
          children: (0, xd.jsx)(KO.c, {
            name: "flag"
          })
        }), null !== Rd && (0, xd.jsx)(eW, {
          bind: Od.markers.bindMarker(AR),
          house: !0,
          label: Wd("greenvilleGame:tutMarkHome"),
          children: (0, xd.jsx)(KO.c, {
            name: "house"
          })
        })]
      })
    }
    const MR = function(dd, Od, md, Fd) {
      let Rd, {
        localPlayerId: Xd
      } = Fd;
      const Kd = new yd((dd => {
          vd.j.lQ(Hd, dd)
        })),
        bd = new aW((dd => {
          vd.j.lQ(wW, dd)
        })),
        Td = {
          onGain: () => {
            Rd.playSound(Xd, "rpgHandleCoins1", .5, .9 + .3 * Math.random())
          },
          onCoinLanded: (dd, Od) => {
            Rd.playSound(Xd, "pickUp", .3, 1 + .5 * dd / Math.max(1, Od - 1))
          }
        },
        pd = [],
        Yd = {
          open: dd => {
            for (const Od of pd) Od !== dd && Od.onMenuClosed();
            (0, Nd.q)()
          },
          close: Nd.g,
          dismiss: Nd.h
        },
        gd = new Qd.d,
        wd = new Km((dd => {
          vd.j.lQ(Rm, dd)
        }), Yd, (dd => {
          Rd.sendCommand(null === dd ? Wd : `${Wd} ${dd}`)
        }), gd),
        Ed = new XO((dd => {
          vd.j.lQ(FO, dd)
        }), Yd, (dd => {
          Rd.sendCommand(`demolition pick ${dd}`)
        }), gd),
        Jd = new xO((dd => {
          vd.j.lQ(JO, dd)
        }), Yd, (dd => {
          Rd.sendCommand(`garage pick ${dd}`)
        }), gd),
        Ud = new VW((dd => {
          vd.j.lQ(sW, dd)
        })),
        xd = new fm((dd => {
          vd.j.lQ(Zm, dd)
        }), (dd => {
          vd.j.lQ(km, dd)
        })),
        Bd = new SF(function(dd) {
          return "profIsland" === dd ? RR : FR
        }(md), (dd => {
          vd.j.lQ(JF, dd)
        }), (dd => {
          vd.j.lQ(UF, dd)
        }), (dd => {
          vd.j.lQ(xF, dd)
        })),
        Sd = new fW((dd => {
          vd.j.lQ(ZW, dd)
        }), Yd, Bd);
      let sd = null,
        ud = null;
      const Vd = new nO((dd => {
          vd.j.lQ(rO, dd)
        }), (dd => {
          vd.j.lQ(GO, dd)
        }), Yd, (dd => {
          Rd.sendCommand(dd)
        }), gd),
        Ad = new xm((dd => {
          vd.j.lQ(Em, dd)
        }), (dd => {
          vd.j.lQ(Jm, dd)
        }), Yd, (dd => {
          Rd.sendCommand(dd)
        }), gd),
        Gd = new qR((dd => {
          vd.j.lQ(oR, dd)
        }), Yd, ((dd, Od) => {
          Rd.sendCommand(`smuggle ${dd} ${Od}`)
        }), gd, (() => {
          (0, td.d)(Rd, Xd)
        }));
      pd.push(wd, Ed, Jd, Vd, Ad, Gd, Sd);
      let nd = null,
        Ld = null,
        Pd = null;
      return {
        onCreate: dd => {
          Rd = dd, Bd.start(dd), sd = new CW(Ud), ud = new LR(new qd.b(lW, "greenvilleGame:marketDistance"), (dd => {
            vd.j.lQ(VR, dd)
          }), (Od => {
            dd.sendCommand(Od)
          }), gd, bd.celebrate, Bd), nd = (0, Nd.F)((0, hd.createElement)(hd.Fragment, null, (0, hd.createElement)(rd, {
            controller: Kd
          }), (0, hd.createElement)(xW, {
            controller: bd
          }), (0, hd.createElement)(jW, {
            market: Ud,
            markers: sd
          }), (0, hd.createElement)(fR, {
            controller: ud
          }), (0, hd.createElement)(cR, {
            controller: ud
          }), (0, hd.createElement)(rW, {
            controller: Ud
          }), (0, hd.createElement)(xR, {
            controller: xd,
            nav: Bd
          }), (0, hd.createElement)(hR, {
            controller: xd
          }), (0, hd.createElement)(bW, {
            controller: xd
          }, (0, hd.createElement)(IR, {
            controller: ud,
            hud: xd
          }), (0, hd.createElement)(fd, {
            sounds: Td
          }), (0, hd.createElement)(OR, {
            controller: Bd,
            onOpen: Sd.open
          }), (0, hd.createElement)(Cm, {
            controller: Ad
          }), (0, hd.createElement)(nW, {
            controller: Ud
          }), (0, hd.createElement)(Fm, {
            controller: Vd
          })), (0, hd.createElement)(QR, {
            controller: xd
          })), {
            content: (0, hd.createElement)(hd.Fragment, null, (0, hd.createElement)(om, {
              controller: wd
            }), (0, hd.createElement)(EO, {
              controller: Ed
            }), (0, hd.createElement)(sO, {
              controller: Jd
            }), (0, hd.createElement)(Wm, {
              controller: Vd
            }), (0, hd.createElement)(Im, {
              controller: Ad
            }), (0, hd.createElement)(bR, {
              controller: Gd
            }), (0, hd.createElement)(kF, {
              controller: Sd,
              nav: Bd
            })),
            onClose: () => {
              for (const dd of pd) dd.onMenuClosed()
            }
          }), Ld = (0, Nd.y)(Sd.open), Pd = (0, od.w)({
            id: "greenvilleMap",
            labelKey: "greenvilleGame:map",
            icon: {
              kind: "item",
              name: "Compass"
            },
            panel: !0,
            onClick: Sd.open
          })
        },
        onClose: () => {
          nd(), Ld(), Pd(), Bd.dispose(), wd.dropPresses(), Ed.dropPresses(), Jd.dropPresses(), sd.waypoints.dispose(), Vd.dropPresses(), Ad.dropPresses(), ud.dispose(), Gd.dropPresses(), gd.dispose()
        },
        onAfterRender: (dd, Od) => {
          const md = Rd.getPositionView(Xd);
          sd.frame(Od, md), ud.frame(Od, md), Bd.frame(Od, md, Rd.isLocalPlayerInVehicle())
        },
        onReceivedMessageFromServer: (dd, Od) => {
          "greenvilleBackpack" === dd ? Kd.Yt(Od) : "greenvilleOreBuyer" === dd ? wd.Yt(Od) : "greenvilleLumberMill" === dd ? Vd.Yt(Od) : "greenvilleDemolition" === dd ? Ed.Yt(Od) : "greenvilleGarage" === dd ? Jd.Yt(Od) : "greenvilleFarmBoard" === dd ? Ad.Yt(Od) : "greenvilleSmuggler" === dd ? Gd.Yt(Od) : "greenvilleMarket" === dd ? Ud.Yt(Od) : "greenvilleHud" === dd ? xd.Yt(Od) : "greenvilleLevelUp" === dd ? bd.Yt(Od) : "greenvillePlots" === dd ? Bd.Yt(Od) : "greenvilleMapMarkers" === dd ? Bd.receiveMarkers(Od) : "greenvilleTutorial" === dd && ud.Yt(Od)
        }
      }
    }
  },
  41089: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd,
      g: () => Xd
    });
    var Wd = md(5733);
    const Fd = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      Rd = [150, 150, 150],
      Xd = -2147483648;
    class Kd {
      constructor(dd) {
        this.averages = dd, this.byId = new Map
      }
      get(dd) {
        var Od, md, Xd, Kd, hd;
        const vd = this.byId.get(dd);
        if (void 0 !== vd) return vd;
        const Qd = null !== (Od = null === (md = Wd.i[dd]) || void 0 === md ? void 0 : md.name) && void 0 !== Od ? Od : "",
          td = Qd.split("|")[0],
          od = null !== (Xd = this.averages[Qd]) && void 0 !== Xd ? Xd : this.averages[td],
          Nd = null !== (Kd = null !== (hd = null === od || void 0 === od ? void 0 : od[0]) && void 0 !== hd ? hd : Fd[td]) && void 0 !== Kd ? Kd : 0 === (null === od || void 0 === od ? void 0 : od.length) ? null : Rd;
        return this.byId.set(dd, Nd), Nd
      }
      getDrawnIds() {
        const dd = new Uint8Array(65536);
        for (let Od = 1; Od < 65536; Od++) void 0 !== Wd.i[Od] && null !== this.get(Od) && (dd[Od] = 1);
        return dd
      }
      drawPixel(dd, Od, md, Wd, Fd, Rd) {
        const Kd = function(dd, Od, md) {
            const Wd = dd - Od + (dd - md);
            return Math.max(.65, Math.min(1.2, .97 + .055 * Wd))
          }(Wd, Fd === Xd ? Wd : Fd, Rd === Xd ? Wd : Rd),
          hd = this.get(md);
        dd[Od] = hd[0] * Kd, dd[Od + 1] = hd[1] * Kd, dd[Od + 2] = hd[2] * Kd, dd[Od + 3] = 255
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);