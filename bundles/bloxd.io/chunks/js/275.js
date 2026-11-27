export const id = 275;
export const ids = [275];
export const modules = {
  40282: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      d: () => be,
      h: () => Me
    });
    var ye = He(59);

    function be(ee) {
      return Ue(ee, Fe)
    }

    function Me(ee) {
      return Ue(ee, Je)
    }

    function Ke(ee) {
      return `${Math.floor(ee/60)}:${String(ee%60).padStart(2,"0")}`
    }

    function Ue(ee, ie) {
      const [, He] = (0, ye.useState)(null);
      return (0, ye.useEffect)((() => {
        if (0 === ee) return;
        const ye = window.setInterval((() => {
          const ye = ie(ee);
          He((ie => (null === ie || void 0 === ie ? void 0 : ie.endsAt) === ee && ie.value === ye ? ie : {
            endsAt: ee,
            value: ye
          }))
        }), 250);
        return () => {
          window.clearInterval(ye)
        }
      }), [ee, ie]), ie(ee)
    }

    function Fe(ee) {
      return (ee - performance.now()) / 1e3
    }

    function Je(ee) {
      return Math.max(0, Math.ceil(Fe(ee)))
    }
  },
  40301: (ee, ie, He) => {
    He.d(ie, {
      b: () => be
    });
    var ye = He(40306);
    async function be() {
      const {
        averageColors: ee
      } = await He.e(228).then((() => He(34995)));
      return new ye.e(ee)
    }
  },
  40287: (ee, ie, He) => {
    He.d(ie, {
      e: () => Fe
    });
    var ye = He(37509),
      be = He(1127),
      Me = He(1196),
      Ke = He(39291),
      Ue = He(39331);
    class Fe {
      constructor(ee, ie) {
        var He;
        this.classes = ee, this.distanceKey = ie, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.xf = !1, this.jB = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.jB), null === (He = window.visualViewport) || void 0 === He || He.addEventListener("resize", this.jB)
      }
      bindMarker(ee) {
        const ie = this.refs.get(ee);
        if (ie) return ie;
        const He = ie => {
          var ye;
          null === (ye = this.markers.get(ee)) || void 0 === ye || ye.stopObserving(), this.markers.delete(ee), ie && !this.xf ? (this.markers.set(ee, this.mount(ie)), this.refs.set(ee, He)) : this.refs.delete(ee)
        };
        return this.refs.set(ee, He), He
      }
      hasMarkers() {
        return this.markers.size > 0
      }
      setRender(ee) {
        this.render = ee
      }
      update(ee, ie, He, ye, be) {
        const Me = this.markers.get(ee);
        Me && (Me.target ??= [0, 0, 0], Me.target[0] = ie, Me.target[1] = He, Me.target[2] = ye, this.place(Me), this.Ri(Me, be && Math.hypot(ie - be[0], He - be[1], ye - be[2])))
      }
      dispose() {
        var ee;
        this.xf = !0, window.removeEventListener("resize", this.jB), null === (ee = window.visualViewport) || void 0 === ee || ee.removeEventListener("resize", this.jB);
        for (const ie of this.markers.values()) ie.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(ee) {
        const {
          render: ie,
          viewport: He
        } = this;
        if (!ie || !ee.target) return;
        const ye = (50 - ie.screenBandPct.y) / 100 * He.height,
          be = {
            x: ee.halfSize.width + 8,
            top: ee.halfSize.height + 8,
            bottom: ee.halfSize.height + ee.labelsBelow + ye
          },
          Me = ie.projectWorldPosToViewport(ee.target),
          Fe = null !== Me && void 0 !== Me ? Me : ie.projectWorldPosToScreenPos(ee.target),
          Je = (0, Ue.c)({
            x: Fe.x,
            y: Fe.y,
            text: Me
          }, be, He);
        (0, Ke.c)(ee.root, Math.round(100 * Je.x) / 100, Math.round(100 * Je.y) / 100)
      }
      Ri(ee, ie) {
        if (null === ie) return void(null !== ee.metres && (ee.metres = null, ee.distance.textContent = ""));
        const He = Date.now();
        (null === ee.metres || (0, ye.e)(ie, ee.metres, ee.metresShownAt)) && (ee.metres = Math.round(ie), ee.metresShownAt = He, ee.distance.textContent = (0, be.s)(Me.f.get().getCurrentLanguageCode(), this.distanceKey, {
          distance: String(ee.metres)
        }))
      }
      mount(ee) {
        const ie = {
            root: ee,
            distance: ee.querySelector(`.${this.classes.distance}`),
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
          He = ee.querySelector(`.${this.classes.labels}`),
          ye = new ResizeObserver((() => {
            ie.halfSize = {
              width: Math.max(ee.offsetWidth, He.offsetWidth) / 2,
              height: ee.offsetHeight / 2
            }, ie.labelsBelow = He.offsetTop + He.offsetHeight - ee.offsetHeight, this.place(ie)
          }));
        return ye.observe(ee, {
          box: "border-box"
        }), ye.observe(He, {
          box: "border-box"
        }), ie.stopObserving = () => {
          ye.disconnect()
        }, ie
      }
    }
  },
  40299: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => Nb
    });
    const ye = "ore sell",
      be = "lumber ",
      Me = "farm ",
      Ke = ["market", "demolition", "mining", "woodcutting", "farming"];
    var Ue = He(59),
      Fe = He(27),
      Je = He(39370),
      oe = He(37424);
    const Re = "greenvilleBackpackView";
    class ke {
      constructor(ee) {
        this.yR = ee, this.view = null, this.arrivalToken = 0, this.showToken = 0
      }
      getView() {
        return this.view
      }
      DR(ee) {
        if ("hide" === ee[0]) this.view = null;
        else if ("show" === ee[0]) {
          const ie = ee[3];
          this.view = {
            bk: ee[1],
            shardsPerItem: ee[2],
            total: ie.reduce(((ee, ie) => {
              let [, He] = ie;
              return ee + He
            }), 0),
            contents: ie,
            arrival: null,
            showToken: ++this.showToken
          }
        } else {
          if (null === this.view) return void console.warn(`[greenville] backpack ${ee[0]} with no backpack shown`);
          {
            var ie, He;
            const ye = ee[1],
              be = this.view.contents.find((ee => {
                let [ie] = ee;
                return ie === ye
              })),
              Me = this.view.contents.filter((ee => {
                let [ie] = ee;
                return ie !== ye
              })),
              Ke = null !== (ie = null === be || void 0 === be ? void 0 : be[1]) && void 0 !== ie ? ie : 0,
              Ue = null !== (He = null === be || void 0 === be ? void 0 : be[2]) && void 0 !== He ? He : 0;
            "shard" === ee[0] ? this.view = {
              ...this.view,
              contents: [...Me, [ye, Ke, Ue + 1]]
            } : this.view = {
              ...this.view,
              total: this.view.total + 1,
              contents: [...Me, [ye, Ke + 1, 0]],
              arrival: {
                item: ye,
                token: ++this.arrivalToken,
                fromShards: Ue > 0
              }
            }
          }
        }
        this.yR(this.view)
      }
    }
    var qe = He(1053),
      fe = He.n(qe),
      Te = He(18),
      pe = He(37420),
      Xe = He(1970),
      ze = He(1432),
      Be = He(2046),
      Ee = He(1127);
    const ge = "data:image/png;base64,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";
    var Oe = He(1228);
    const de = (0, Ue.forwardRef)((function(ee, ie) {
      let {
        contents: He,
        bk: ye,
        full: be,
        children: Me
      } = ee;
      const Ke = [...He].sort(((ee, ie) => {
        let [He] = ee, [ye] = ie;
        return He.localeCompare(ye)
      }));
      let Ue = 0;
      return (0, Oe.jsxs)("div", {
        ref: ie,
        className: "GreenvilleBackpackBag",
        children: [Me, (0, Oe.jsx)("img", {
          className: fe()("GreenvilleBackpackArt", {
            Full: be
          }),
          src: ge,
          alt: "",
          draggable: !1
        }), (0, Oe.jsx)("div", {
          className: "GreenvilleBackpackWindow",
          children: Ke.map((ee => {
            let [ie, He] = ee;
            const be = Math.min(1 - Ue, He / ye),
              Me = (0, Oe.jsx)(te, {
                item: ie,
                below: Ue,
                share: be
              }, ie);
            return Ue += be, Me
          }))
        })]
      })
    }));

    function We() {
      const ee = new Image;
      ee.src = ge, ee.decode().catch((ee => {
        console.error("[greenville] backpack art failed to load", ee)
      }))
    }
    const te = (0, Ue.memo)((function(ee) {
        let {
          item: ie,
          below: He,
          share: ye
        } = ee;
        return (0, Oe.jsx)("div", {
          className: "GreenvilleBackpackOre",
          style: {
            bottom: `calc(var(--rise) * ${He})`,
            height: `calc(var(--rise) * ${ye} + var(--slant))`
          },
          children: Array.from({
            length: 18
          }, ((ee, He) => (0, Oe.jsx)("div", {
            className: "GreenvilleBackpackOreTile",
            children: (0, Oe.jsx)(Xe.c, {
              itemName: ie,
              amount: 0
            })
          }, He)))
        })
      })),
      Ze = [{
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
      we = [{
        transform: "scale(1.3)"
      }, {
        transform: "scale(1)"
      }];
    let De = 1;

    function Pe(ee) {
      let {
        controller: ie
      } = ee;
      (0, ze.j)(Re, null), (0, Ue.useEffect)(We, []);
      const He = ie.getView();
      return null === He ? null : (0, Oe.jsx)(pe.d, {
        placement: "bottomLeft",
        children: (0, Oe.jsx)(Ae, {
          view: He
        })
      })
    }

    function Ae(ee) {
      let {
        view: ie
      } = ee;
      const {
        t: He
      } = (0, Ee.v)(), {
        isTouchScreen: ye
      } = (0, Te.m)(["isTouchScreen"]), [be, Me] = (0, Ue.useState)([]), Ke = (0, Ue.useRef)(null), Fe = (0, Ue.useRef)(null), Je = (0, Ue.useRef)([]), oe = (0, Ue.useRef)({
        arrival: ie.arrival,
        showToken: ie.showToken
      }), {
        arrival: Re,
        showToken: ke
      } = ie;
      (0, Ue.useLayoutEffect)((() => {
        var ee;
        if (ke !== oe.current.showToken) Me([]);
        else if (null !== Re && Re.token !== (null === (ee = oe.current.arrival) || void 0 === ee ? void 0 : ee.token) && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          const ee = {
            id: De++,
            item: Re.item,
            fromShards: Re.fromShards,
            driftEm: 1.4 * (Math.random() - .5),
            spinDeg: 70 * (Math.random() - .5)
          };
          Me((ie => ie.length < 6 ? [...ie, ee] : ie))
        }
        oe.current = {
          arrival: Re,
          showToken: ke
        }
      }), [Re, ke]), (0, Ue.useEffect)((() => () => {
        for (const ee of Je.current) ee.cancel()
      }), []);
      const qe = (0, Ue.useCallback)((() => {
          for (const ee of Je.current) ee.cancel();
          Je.current = [Ke.current.animate(Ze, {
            duration: 300,
            easing: "ease-out"
          }), Fe.current.animate(we, {
            duration: 220,
            easing: "ease-out"
          })]
        }), []),
        pe = (0, Ue.useCallback)((ee => {
          Me((ie => ie.filter((ie => ie.id !== ee)))), qe()
        }), [qe]),
        ze = ie.total - be.length,
        ge = ze >= ie.bk,
        We = ie.contents.map((ee => {
          let [He, ye, Me] = ee;
          const Ke = be.filter((ee => ee.item === He)),
            Ue = Ke.some((ee => ee.fromShards));
          return [He, ye - Ke.length, Ue ? ie.shardsPerItem : Me]
        })),
        te = We.filter((ee => {
          let [, ie, He] = ee;
          return ie > 0 || He > 0
        })).reverse().slice(0, 4),
        Pe = (0, Be.o)("SpecialAction2");
      return (0, Oe.jsxs)("div", {
        className: "GreenvilleBackpack",
        children: [(0, Oe.jsxs)("div", {
          className: "GreenvilleBackpackCount SmallTextBold",
          children: [(0, Oe.jsx)("span", {
            ref: Fe,
            className: fe()("GreenvilleBackpackTotal", {
              Full: ge
            }),
            children: ze
          }), (0, Oe.jsxs)("span", {
            className: "GreenvilleBackpackCapacity",
            children: ["/ ", ie.bk]
          })]
        }), (0, Oe.jsxs)("div", {
          className: "GreenvilleBackpackRow",
          children: [(0, Oe.jsx)(de, {
            ref: Ke,
            contents: We,
            bk: ie.bk,
            full: ge,
            children: be.map((ee => (0, Oe.jsx)(Ve, {
              drop: ee,
              onLanded: pe
            }, ee.id)))
          }), (0, Oe.jsxs)("div", {
            className: "GreenvilleBackpackInfo",
            children: [te.length > 0 && (0, Oe.jsx)("div", {
              className: "GreenvilleBackpackTallies",
              children: te.map((ee => {
                let [He, ye, be] = ee;
                return (0, Oe.jsxs)("div", {
                  className: "GreenvilleBackpackTally",
                  children: [(0, Oe.jsx)("div", {
                    className: "GreenvilleBackpackTallyIcon",
                    children: (0, Oe.jsx)(Xe.c, {
                      itemName: He,
                      amount: 0
                    })
                  }), ye > 0 && (0, Oe.jsxs)("span", {
                    className: "SmallTextBold",
                    children: ["\xd7", ye]
                  }), be > 0 && (0, Oe.jsx)(Ye, {
                    shards: be,
                    shardsPerItem: ie.shardsPerItem
                  })]
                }, He)
              }))
            }), ge && (0, Oe.jsxs)("div", {
              className: "GreenvilleBackpackFullLine",
              role: "status",
              children: [(0, Oe.jsx)("span", {
                className: "GreenvilleBackpackFullTitle SmallTextBold",
                children: He("greenvilleGame:backpackFull")
              }), ye && (0, Oe.jsx)("span", {
                className: "SmallTextLight",
                children: He("greenvilleGame:backpackReturnTouch")
              }), !ye && null !== Pe && (0, Oe.jsx)("span", {
                className: "SmallTextLight",
                children: He("greenvilleGame:backpackReturnDesktop", {
                  key: (0, Be.k)(Pe)
                })
              })]
            })]
          })]
        })]
      })
    }

    function Ye(ee) {
      let {
        shards: ie,
        shardsPerItem: He
      } = ee;
      return (0, Oe.jsx)("div", {
        className: "GreenvilleBackpackShards",
        children: Array.from({
          length: He
        }, ((ee, He) => (0, Oe.jsx)("span", {
          className: fe()("GreenvilleBackpackShard", {
            Filled: He < ie
          })
        }, He)))
      })
    }

    function Ve(ee) {
      let {
        drop: ie,
        onLanded: He
      } = ee;
      const ye = (0, Ue.useRef)(null);
      return (0, Ue.useLayoutEffect)((() => {
        const {
          driftEm: ee,
          spinDeg: be
        } = ie, Me = ye.current.animate([{
          transform: `translate(${ee}em, -3.2em) rotate(${be}deg) scale(1.2)`,
          opacity: 0
        }, {
          transform: `translate(${.7*ee}em, -2.4em) rotate(${.7*be}deg) scale(1.1)`,
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
        return Me.onfinish = () => {
          He(ie.id)
        }, () => {
          Me.onfinish = null, Me.cancel()
        }
      }), [ie, He]), (0, Oe.jsx)("div", {
        ref: ye,
        className: "GreenvilleBackpackFalling",
        children: (0, Oe.jsx)(Xe.c, {
          itemName: ie.item,
          amount: 0
        })
      })
    }
    var ae = He(77),
      ce = He(34905),
      xe = He(2532),
      Le = He(2733);
    const Ce = [{
        transform: "scale(1.18)"
      }, {
        transform: "scale(1)"
      }],
      ve = [{
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
    let ue = 1,
      me = null;

    function le(ee) {
      var ie;
      let {
        sounds: He
      } = ee;
      const ye = null === (ie = (0, xe.i)("currencyAmounts")) || void 0 === ie ? void 0 : ie.gold;
      return !ye || ye.hidden ? null : (0, Oe.jsx)(Se, {
        gold: ye.amount,
        sounds: He
      })
    }

    function Se(ee) {
      let {
        gold: ie,
        sounds: He
      } = ee;
      const ye = (0, Le.d)(),
        [be, Me] = (0, Ue.useState)([]),
        Ke = (0, Ue.useRef)(null),
        Fe = (0, Ue.useRef)(null),
        Je = (0, Ue.useRef)(null),
        oe = (0, Ue.useRef)(ie);
      (0, Ue.useLayoutEffect)((() => {
        const ee = ie - oe.current;
        if (oe.current = ie, !(ee <= 0) && (He.onGain(), !ye && !window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
          const ie = function(ee) {
            const ie = Math.max(1, Math.min(8, Math.floor(ee))),
              He = Math.floor(ee / ie),
              ye = [];
            for (let be = 0; be < ie; be++) {
              const Me = -Math.PI / 2 + (1 === ie ? 0 : 2.4 * (be / (ie - 1) - .5)) + .3 * (Math.random() - .5),
                Ke = 40 + 35 * Math.random();
              ye.push({
                id: ue++,
                burst: {
                  x: Math.cos(Me) * Ke,
                  y: Math.sin(Me) * Ke
                },
                gold: be === ie - 1 ? ee - He * (ie - 1) : He,
                delayMs: 45 * be,
                step: be,
                steps: ie
              })
            }
            return ye
          }(ee);
          Me((ee => [...ee, ...ie.slice(0, Math.max(0, 24 - ee.length))]))
        }
      }), [ie]), (0, Ue.useEffect)((() => () => {
        var ee;
        null === (ee = Je.current) || void 0 === ee || ee.cancel()
      }), []);
      const Re = (0, Ue.useCallback)((ee => {
          He.onCoinLanded(ee.step, ee.steps), Me((ie => ie.filter((ie => {
            let {
              id: He
            } = ie;
            return He !== ee.id
          }))))
        }), [He]),
        ke = be.length,
        qe = (0, Ue.useRef)(ke);
      (0, Ue.useEffect)((() => {
        var ee, ie;
        ke < qe.current && (null === (ee = Je.current) || void 0 === ee || ee.cancel(), Je.current = (null !== (ie = me) && void 0 !== ie ? ie : Ke.current).animate(0 === ke ? ve : Ce, {
          duration: 0 === ke ? 380 : 160,
          easing: "ease-out"
        }));
        qe.current = ke
      }), [ke]);
      const fe = be.reduce(((ee, ie) => ee + ie.gold), 0);
      return (0, Oe.jsxs)(Oe.Fragment, {
        children: [(0, Oe.jsx)("div", {
          className: "GreenvilleGoldPurse",
          children: (0, Oe.jsxs)("div", {
            ref: Ke,
            className: "GreenvilleGoldPurseBody",
            children: [(0, Oe.jsx)("span", {
              ref: Fe,
              className: "GreenvilleGoldPurseIcon",
              children: (0, Oe.jsx)(Xe.c, {
                itemName: "Gold Coin",
                amount: 0
              })
            }), (0, Oe.jsx)("span", {
              className: "GreenvilleGoldPurseAmount SmallTextBold",
              children: (0, ce.h)(Math.max(0, ie - fe))
            })]
          })
        }), (0, ae.createPortal)(be.map((ee => (0, Oe.jsx)(ne, {
          coin: ee,
          target: Fe,
          onLanded: Re
        }, ee.id))), document.body)]
      })
    }

    function ne(ee) {
      let {
        coin: ie,
        target: He,
        onLanded: ye
      } = ee;
      const be = (0, Ue.useRef)(null);
      return (0, Ue.useEffect)((() => {
        var ee;
        const Me = (null !== (ee = me) && void 0 !== ee ? ee : He.current).getBoundingClientRect(),
          {
            burst: Ke
          } = ie,
          Ue = window.innerWidth / 2,
          Fe = window.innerHeight / 2,
          Je = Me.left + Me.width / 2,
          oe = Me.top + Me.height / 2,
          Re = be.current.animate([{
            transform: `translate(${Ue}px, ${Fe}px) scale(0.3)`,
            opacity: 0,
            easing: "ease-out"
          }, {
            transform: `translate(${Ue+.7*Ke.x}px, ${Fe+.7*Ke.y}px) scale(1.25)`,
            opacity: 1,
            offset: .15,
            easing: "ease-out"
          }, {
            transform: `translate(${Ue+Ke.x}px, ${Fe+Ke.y}px) scale(1)`,
            offset: .35,
            easing: "ease-in-out"
          }, {
            transform: `translate(${Ue+Ke.x}px, ${Fe+Ke.y+6}px) scale(1)`,
            offset: .45,
            easing: "cubic-bezier(0.55, 0, 1, 0.45)"
          }, {
            transform: `translate(${Je}px, ${oe}px) scale(0.6)`,
            opacity: 1
          }], {
            duration: 950,
            delay: ie.delayMs,
            fill: "both"
          });
        return Re.onfinish = () => {
          ye(ie)
        }, () => {
          Re.onfinish = null, Re.cancel()
        }
      }), [ie, He, ye]), (0, Oe.jsx)("div", {
        ref: be,
        className: "GreenvilleGoldCoin",
        children: (0, Oe.jsx)(Xe.c, {
          itemName: "Gold Coin",
          amount: 0
        })
      })
    }
    class je {
      constructor(ee, ie, He) {
        this.pacer = ee, this.send = ie, this.onAnswersTimedOut = He, this.queued = [], this.unanswered = [], this.answerTimer = null, this.flushing = !1, this.flush = () => {
          if (!this.flushing) {
            this.flushing = !0;
            try {
              for (; this.queued.length > 0 && this.pacer.tryStart();) {
                const ee = this.queued.shift();
                this.unanswered.push(ee), this.answerTimer ??= setTimeout(this.onAnswerTimeout, 15e3), this.send(ee)
              }
            } finally {
              this.flushing = !1
            }
          }
        }, this.onAnswerTimeout = () => {
          this.answerTimer = null, this.unanswered = [], this.onAnswersTimedOut()
        }, ee.subscribe(this.flush)
      }
      getPending() {
        return [...this.unanswered, ...this.queued]
      }
      dR() {
        return 0 === this.unanswered.length && 0 === this.queued.length
      }
      getLastSent() {
        return this.unanswered.at(-1)
      }
      getLastPending() {
        var ee;
        return null !== (ee = this.queued.at(-1)) && void 0 !== ee ? ee : this.unanswered.at(-1)
      }
      push(ee) {
        this.queued.push(ee), this.flush()
      }
      dropWaiting() {
        const ee = this.queued.length > 0;
        return this.queued = [], ee
      }
      takeAnswer() {
        var ee;
        const ie = null !== (ee = this.unanswered.shift()) && void 0 !== ee ? ee : null;
        return this.stopAnswerTimer(), this.unanswered.length > 0 && (this.answerTimer = setTimeout(this.onAnswerTimeout, 15e3)), ie
      }
      clear() {
        this.queued = [], this.unanswered = [], this.stopAnswerTimer()
      }
      stopAnswerTimer() {
        null !== this.answerTimer && (clearTimeout(this.answerTimer), this.answerTimer = null)
      }
    }
    class se {
      constructor(ee, ie, He, ye) {
        this.confirmed = ee, this.picks = void 0, this.picks = new je(ie, He, ye)
      }
      confirm(ee) {
        this.confirmed = ee
      }
      getLastPending() {
        return this.picks.getLastPending()
      }
      getLatest() {
        var ee;
        return null !== (ee = this.getLastPending()) && void 0 !== ee ? ee : this.confirmed
      }
      dR() {
        return this.picks.dR()
      }
      pushLatest(ee) {
        var ie;
        const He = null !== (ie = this.picks.getLastSent()) && void 0 !== ie ? ie : this.confirmed;
        this.picks.dropWaiting() && ee === He || this.picks.push(ee)
      }
      takeAnswer() {
        this.picks.takeAnswer()
      }
      clear() {
        this.picks.clear()
      }
    }
    class Ie {
      constructor(ee, ie, He) {
        this.closed = ee, this.yR = ie, this.menu = He, this.view = void 0, this.dismiss = () => {
          this.closePanel() && this.menu.dismiss()
        }, this.onMenuClosed = () => {
          this.closePanel()
        }, this.view = ee
      }
      getView() {
        return this.view
      }
      show(ee) {
        this.set(ee), this.menu.open(this)
      }
      close() {
        this.closePanel() && this.menu.close()
      }
      set(ee) {
        this.view = ee, this.yR(ee)
      }
      closePanel() {
        return !!this.view.open && (this.dropPresses(), this.set(this.closed), !0)
      }
    }
    const he = "greenvilleDepotView",
      Ne = {
        open: !1,
        explosives: [],
        picked: 0,
        selected: 0,
        level: 1,
        line: "demolitionDepotIntro"
      };
    class Ge extends Ie {
      constructor(ee, ie, He, ye) {
        super(Ne, ee, ie), this.picks = void 0, this.select = ee => {
          this.set({
            ...this.getView(),
            selected: ee
          })
        }, this.tq = ee => {
          const ie = this.getView();
          ee !== ie.picked && (this.picks.pushLatest(ee), this.set({
            ...ie,
            picked: ee,
            line: "demolitionGrubnikPicked"
          }))
        }, this.onAnswersTimedOut = () => {
          const ee = this.getView();
          ee.open && this.set({
            ...ee,
            picked: this.picks.getLatest()
          })
        }, this.picks = new se(0, ye, He, this.onAnswersTimedOut)
      }
      DR(ee) {
        if ("openDepot" === ee[0]) {
          const ie = ee[4];
          ie && this.picks.takeAnswer();
          const He = this.getView();
          if (ie && !He.open) return;
          this.picks.confirm(ee[2]);
          const ye = this.picks.getLatest(),
            be = !He.open;
          this.show({
            open: !0,
            explosives: ee[1],
            picked: ye,
            selected: be ? ye : He.selected,
            level: ee[3],
            line: be ? "demolitionDepotIntro" : He.line
          })
        } else "closeDepot" !== ee[0] && "hide" !== ee[0] || this.close()
      }
      dropPresses() {
        this.picks.clear()
      }
    }
    var re = He(1323),
      Qe = He(1438),
      ei = He(34897),
      ii = He(3608),
      Hi = He(1956),
      yi = He(4922);

    function bi(ee) {
      var ie;
      let {
        item: He,
        className: ye
      } = ee;
      return (0, Oe.jsx)(Hi.e, {
        className: ye,
        text: null !== (ie = (0, ei.displayNameOf)((0, ii.c)(He))) && void 0 !== ie ? ie : He
      })
    }

    function Mi(ee) {
      let {
        item: ie
      } = ee;
      return (0, Oe.jsx)(Xe.c, {
        itemName: ie,
        amount: 0
      })
    }

    function Ki(ee) {
      let {
        open: ie,
        onDismiss: He,
        title: ye,
        className: be,
        headerExtra: Me,
        tabs: Ke,
        status: Ue,
        children: Fe
      } = ee;
      const Je = `${be}Title`;
      return (0, Oe.jsx)(yi.e, {
        show: ie,
        close: He,
        togglePointerLock: !1,
        ignorePressesAsShown: !0,
        className: "GreenvilleBoardOverlay",
        children: (0, Oe.jsxs)("section", {
          className: fe()("GreenvilleBoard", be),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": Je,
          children: [(0, Oe.jsxs)("header", {
            className: "GreenvilleBoardHeader",
            children: [(0, Oe.jsx)("h2", {
              id: Je,
              className: "VisuallyHidden",
              children: ye
            }), Me, (0, Oe.jsx)(Qe.i, {
              onClick: He
            })]
          }), Ke, (0, Oe.jsx)("div", {
            className: "GreenvilleBoardBody",
            children: Fe
          }), (0, Oe.jsxs)("footer", {
            className: "GreenvilleBoardStatus",
            children: [(0, Oe.jsx)("span", {
              className: "GreenvilleBoardSpeaker",
              children: Ue.speaker
            }), Ue.line]
          })]
        })
      })
    }

    function Ui(ee) {
      let {
        tabs: ie,
        selected: He,
        onSelect: ye
      } = ee;
      return (0, Oe.jsx)("nav", {
        className: "GreenvilleBoardTabs",
        "data-pad-tabs": "1",
        children: ie.map((ee => {
          const ie = ee.id === He;
          return (0, Oe.jsxs)("button", {
            type: "button",
            className: fe()("GreenvilleBoardTab", {
              Selected: ie
            }),
            "aria-pressed": ie,
            "data-pad-tab": !0,
            "data-pad-selected": ie ? "true" : void 0,
            onClick: () => {
              ye(ee.id)
            },
            children: [ee.label, ee.badge]
          }, ee.id)
        }))
      })
    }

    function Fi(ee) {
      let {
        className: ie,
        roomy: He = !1,
        children: ye
      } = ee;
      return (0, Oe.jsx)("div", {
        className: fe()("GreenvilleBoardTiles", ie, {
          Roomy: He
        }),
        style: He ? {
          "--tile-columns": (be = Ue.Children.count(ye), be <= 3 ? be : Math.min(4, Math.ceil(be / 2)))
        } : void 0,
        "data-pad-select-on-focus": !0,
        children: ye
      });
      var be
    }

    function Ji(ee) {
      let {
        icon: ie,
        name: He,
        selected: ye,
        locked: be = !1,
        className: Me,
        onSelect: Ke,
        children: Ue
      } = ee;
      return (0, Oe.jsxs)("button", {
        type: "button",
        className: fe()("GreenvilleBoardTile", Me, {
          Selected: ye,
          Locked: be
        }),
        "aria-pressed": ye,
        "data-pad-default-focus": ye || void 0,
        onClick: Ke,
        children: [(0, Oe.jsx)("span", {
          className: "GreenvilleBoardTileIcon",
          children: ie
        }), (0, Oe.jsx)("span", {
          className: "GreenvilleBoardTileName",
          children: He
        }), Ue]
      })
    }

    function oi(ee) {
      let {
        icon: ie,
        name: He,
        badges: ye,
        children: be
      } = ee;
      return (0, Oe.jsxs)("section", {
        className: "GreenvilleBoardDetail",
        children: [(0, Oe.jsxs)("header", {
          className: "GreenvilleBoardDetailHeader",
          children: [(0, Oe.jsx)("span", {
            className: "GreenvilleBoardDetailHero",
            children: (0, Oe.jsx)("span", {
              className: "GreenvilleBoardDetailIcon",
              children: ie
            })
          }), (0, Oe.jsxs)("div", {
            className: "GreenvilleBoardDetailHeading",
            children: [(0, Oe.jsx)("h3", {
              children: He
            }), ye && (0, Oe.jsx)("span", {
              className: "GreenvilleBoardDetailBadges",
              children: ye
            })]
          })]
        }), be]
      })
    }

    function Ri(ee) {
      let {
        level: ie
      } = ee;
      const {
        t: He
      } = (0, Ee.v)();
      return (0, Oe.jsxs)("span", {
        className: "GreenvilleBoardBadge Muted",
        children: [(0, Oe.jsx)(re.e, {
          name: "lock"
        }), He("greenvilleGame:boardLevelBadge", {
          level: ie
        })]
      })
    }

    function ki() {
      const {
        t: ee
      } = (0, Ee.v)();
      return (0, Oe.jsx)("span", {
        className: "GreenvilleBoardBadge",
        children: ee("greenvilleGame:demolitionDepotPicked")
      })
    }

    function qi(ee) {
      let {
        line: ie,
        picked: He,
        level: ye
      } = ee;
      const be = ie[3];
      return (0, Oe.jsxs)(Oe.Fragment, {
        children: [He && (0, Oe.jsx)(ki, {}), be > ye && (0, Oe.jsx)(Ri, {
          level: be
        })]
      })
    }

    function fi(ee) {
      let {
        view: ie,
        controller: He
      } = ee;
      const {
        t: ye
      } = (0, Ee.v)(), be = ie.selected, Me = ie.explosives[be], [Ke, Ue, Fe, Je, oe] = Me, Re = be === ie.picked, ke = Je > ie.level;
      return (0, Oe.jsxs)(oi, {
        icon: (0, Oe.jsx)(Mi, {
          item: Ke
        }),
        name: ye(`greenvilleGame:${Ue}`),
        badges: ke && (0, Oe.jsx)(Ri, {
          level: Je
        }),
        children: [(0, Oe.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: ye(`greenvilleGame:${Fe}`)
        }), (0, Oe.jsx)("p", {
          className: "GreenvilleDepotStencil",
          children: ye("greenvilleGame:demolitionDepotMaxLive", {
            count: oe
          })
        }), (0, Oe.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [Re && (0, Oe.jsx)("span", {
            className: "GreenvilleDepotLoaded",
            children: ye("greenvilleGame:demolitionDepotPicked")
          }), !Re && (0, Oe.jsx)(Qe.c, {
            disabled: ke,
            onClick: () => {
              He.tq(be)
            },
            children: ye("greenvilleGame:demolitionDepotLoad")
          }), ke && (0, Oe.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: ye("greenvilleGame:demolitionDepotLocked", {
              level: Je
            })
          })]
        })]
      })
    }

    function Ti(ee) {
      let {
        controller: ie
      } = ee;
      const He = (0, ze.j)(he, ie.getView()),
        {
          t: ye
        } = (0, Ee.v)();
      return 0 === He.explosives.length ? null : (0, Oe.jsxs)(Ki, {
        open: He.open,
        onDismiss: ie.dismiss,
        title: ye("greenvilleGame:demolitionDepotTitle"),
        className: "GreenvilleDepotBoard",
        headerExtra: (0, Oe.jsx)("span", {
          className: "GreenvilleBoardLevel",
          children: ye("greenvilleGame:demolitionDepotLevel", {
            level: He.level
          })
        }),
        status: {
          speaker: ye("greenvilleGame:demolitionGrubnikName"),
          line: ye(`greenvilleGame:${He.line}`)
        },
        children: [(0, Oe.jsx)(Fi, {
          roomy: !0,
          children: He.explosives.map(((ee, be) => {
            const [Me, Ke, Ue, Fe, Je] = ee;
            return (0, Oe.jsxs)(Ji, {
              icon: (0, Oe.jsx)(Mi, {
                item: Me
              }),
              name: ye(`greenvilleGame:${Ke}`),
              selected: be === He.selected,
              locked: Fe > He.level,
              className: fe()("GreenvilleDepotCrate", {
                Picked: be === He.picked
              }),
              onSelect: () => {
                ie.select(be)
              },
              children: [(0, Oe.jsx)(qi, {
                line: ee,
                picked: be === He.picked,
                level: He.level
              }), (0, Oe.jsx)("span", {
                className: "GreenvilleDepotStencil",
                children: ye("greenvilleGame:demolitionDepotMaxLive", {
                  count: Je
                })
              }), (0, Oe.jsx)("span", {
                className: "GreenvilleDepotBlurb",
                children: ye(`greenvilleGame:${Ue}`)
              })]
            }, Me)
          }))
        }), (0, Oe.jsx)(fi, {
          view: He,
          controller: ie
        })]
      })
    }
    const Xi = "greenvilleGarageView",
      zi = {
        open: !1,
        cars: [],
        out: null,
        awaiting: !1,
        selected: null,
        line: "dealershipGarageIntro"
      };
    class Bi extends Ie {
      constructor(ee, ie, He, ye) {
        super(zi, ee, ie), this.picks = void 0, this.select = ee => {
          this.set({
            ...this.getView(),
            selected: ee
          })
        }, this.tq = ee => {
          ee !== this.picks.getLastPending() && (this.picks.pushLatest(ee), this.set({
            ...this.getView(),
            out: ee,
            awaiting: !this.picks.dR(),
            line: "dealershipGarageTip"
          }))
        }, this.onAnswersTimedOut = () => {
          const ee = this.getView();
          ee.open && this.set({
            ...ee,
            out: this.picks.getLatest(),
            awaiting: !this.picks.dR()
          })
        }, this.picks = new se(null, ye, He, this.onAnswersTimedOut)
      }
      DR(ee) {
        if ("open" === ee[0]) {
          var ie;
          const He = ee[3];
          He && this.picks.takeAnswer();
          const ye = this.getView();
          if (He && !ye.open) return;
          this.picks.confirm(ee[2]);
          const be = ee[1],
            Me = this.picks.getLatest(),
            Ke = !ye.open;
          this.show({
            open: !0,
            cars: be,
            out: Me,
            awaiting: !this.picks.dR(),
            selected: Ke ? null !== (ie = null !== Me && void 0 !== Me ? Me : be[0]) && void 0 !== ie ? ie : null : ye.selected,
            line: Ke ? "dealershipGarageIntro" : ye.line
          })
        } else this.close()
      }
      dropPresses() {
        this.picks.clear()
      }
    }

    function Ei() {
      const {
        t: ee
      } = (0, Ee.v)();
      return (0, Oe.jsx)("span", {
        className: "GreenvilleBoardBadge",
        children: ee("greenvilleGame:dealershipGarageOut")
      })
    }

    function gi(ee) {
      let {
        car: ie,
        out: He,
        awaiting: ye,
        controller: be
      } = ee;
      const {
        t: Me
      } = (0, Ee.v)();
      return (0, Oe.jsx)(oi, {
        icon: (0, Oe.jsx)(Mi, {
          item: ie
        }),
        name: (0, Oe.jsx)(bi, {
          item: ie
        }),
        children: (0, Oe.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [He && (0, Oe.jsx)("span", {
            className: "GreenvilleGarageOutStamp",
            children: Me("greenvilleGame:dealershipGarageOut")
          }), (0, Oe.jsx)(Qe.c, {
            disabled: He && ye,
            onClick: () => {
              be.tq(ie)
            },
            children: Me(He ? "greenvilleGame:dealershipGarageBringBack" : "greenvilleGame:dealershipGarageTakeOut")
          })]
        })
      })
    }

    function Oi(ee) {
      let {
        controller: ie
      } = ee;
      const He = (0, ze.j)(Xi, ie.getView()),
        {
          t: ye
        } = (0, Ee.v)(),
        be = 0 === He.cars.length;
      return (0, Oe.jsxs)(Ki, {
        open: He.open,
        onDismiss: ie.dismiss,
        title: ye("greenvilleGame:dealershipGarageTitle"),
        className: "GreenvilleGarageBoard",
        status: {
          speaker: ye("greenvilleGame:dealershipDelName"),
          line: ye(be ? "greenvilleGame:dealershipGarageEmpty" : `greenvilleGame:${He.line}`)
        },
        children: [!be && (0, Oe.jsx)(Fi, {
          roomy: !0,
          children: He.cars.map((ee => {
            const ye = ee === He.out;
            return (0, Oe.jsx)(Ji, {
              icon: (0, Oe.jsx)(Mi, {
                item: ee
              }),
              name: (0, Oe.jsx)(bi, {
                item: ee
              }),
              selected: ee === He.selected,
              className: fe()("GreenvilleGarageBay", {
                Out: ye
              }),
              onSelect: () => {
                ie.select(ee)
              },
              children: ye && (0, Oe.jsx)(Ei, {})
            }, ee)
          }))
        }), null !== He.selected && (0, Oe.jsx)(gi, {
          car: He.selected,
          out: He.selected === He.out,
          awaiting: He.awaiting,
          controller: ie
        })]
      })
    }
    const di = {
        kind: "intro"
      },
      Wi = {
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
        line: di
      };

    function ti(ee) {
      let [ie, He, ye, be, Me, Ke] = ee;
      return {
        slot: ie,
        titleKey: He,
        items: ye,
        exp: be,
        gold: Me,
        pJ: Ke,
        ready: ye.every((ee => {
          let [, ie, He] = ee;
          return He >= ie
        }))
      }
    }

    function Zi(ee, ie) {
      return "sell" === ie.action ? function(ee, ie) {
        let He = ee.goldOwned;
        const ye = ee.sellLines.map((ee => {
          const [ye, be, Me] = ee;
          return null !== ie && ie !== ye ? ee : (He += be * Me, [ye, 0, Me])
        }));
        return {
          ...ee,
          goldOwned: He,
          sellLines: ye
        }
      }(ee, ie.item) : "accept" === ie.action ? function(ee, ie) {
        var He;
        const ye = ee.orders[ie];
        return {
          ...ee,
          tracked: null !== (He = ee.tracked) && void 0 !== He ? He : ie,
          orders: ee.orders.map((ee => ee === ye ? {
            ...ee,
            pJ: !0
          } : ee)),
          sellLines: ee.sellLines.map((ee => {
            const [ie, He, be] = ee, Me = ye.items.find((ee => {
              let [He] = ee;
              return He === ie
            }));
            return void 0 === Me ? ee : [ie, Math.max(0, He - Me[1]), be]
          }))
        }
      }(ee, ie.slot) : "track" === ie.action ? {
        ...ee,
        tracked: ie.slot
      } : {
        ...ee,
        delivering: [...ee.delivering, ie.slot]
      }
    }
    const wi = "greenvilleLumberMillView",
      Di = "greenvilleLumberTrackerView";
    class Pi extends Ie {
      constructor(ee, ie, He, ye, Me) {
        super(Wi, ee, He), this.publishTracker = ie, this.board = null, this.commands = void 0, this.tracker = null, this.tab = "orders", this.selectedSlot = 0, this.selectedWood = 0, this.line = di, this.selectTab = ee => {
          this.tab = ee, this.set({
            ...this.getView(),
            tab: ee
          })
        }, this.selectOrder = ee => {
          this.selectedSlot = ee, this.set({
            ...this.getView(),
            selectedSlot: ee
          })
        }, this.selectWood = ee => {
          this.selectedWood = ee, this.set({
            ...this.getView(),
            selectedWood: ee
          })
        }, this.accept = ee => {
          this.findOrder(ee).pJ || this.queue({
            action: "accept",
            slot: ee
          })
        }, this.track = ee => {
          this.getView().tracked !== ee && this.findOrder(ee).pJ && this.queue({
            action: "track",
            slot: ee
          })
        }, this.deliver = ee => {
          const ie = this.findOrder(ee);
          ie.pJ && ie.ready && !this.getView().delivering.includes(ee) && this.queue({
            action: "deliver",
            slot: ee
          })
        }, this.sell = ee => {
          this.getView().sellLines.some((ie => {
            let [He, ye] = ie;
            return ye > 0 && (null === ee || ee === He)
          })) && this.queue({
            action: "sell",
            item: ee
          })
        }, this.onAnswersTimedOut = () => {
          this.getView().open && this.set(this.getBoardView())
        }, this.commands = new je(Me, (ee => {
          ye(function(ee) {
            return "sell" === ee.action ? null === ee.item ? `${be}sell` : `${be}sell ${ee.item}` : `${be}${ee.action} ${ee.slot}`
          }(ee))
        }), this.onAnswersTimedOut)
      }
      getTracker() {
        return this.tracker
      }
      DR(ee) {
        if ("open" === ee[0]) {
          const He = ee[6],
            ye = He ? this.commands.takeAnswer() : null,
            be = !this.getView().open;
          if (He && be) return;
          if (be) this.onReopened(ee);
          else if (null !== ye) {
            var ie;
            this.line = null !== (ie = function(ee, ie, He) {
              if ("deliver" === ee.action) {
                const [, ye] = ie[1][ee.slot];
                return He[1][ee.slot][5] ? null : {
                  kind: "delivered",
                  titleKey: ye
                }
              }
              if ("sell" !== ee.action) return null;
              let ye = 0;
              return ie[3].forEach(((ie, be) => {
                let [Me, Ke] = ie;
                null !== ee.item && ee.item !== Me || (ye += Math.max(0, Ke - He[3][be][1]))
              })), ye > 0 ? {
                kind: "bought",
                count: ye
              } : null
            }(ye, this.board, ee)) && void 0 !== ie ? ie : this.line
          }
          this.board = ee, this.show(this.getBoardView())
        } else "close" === ee[0] ? this.close() : (this.tracker = null === ee[1] ? null : ti(ee[1]), this.publishTracker(this.tracker))
      }
      dropPresses() {
        this.commands.clear(), this.board = null
      }
      findOrder(ee) {
        return this.getView().orders.find((ie => ie.slot === ee))
      }
      onReopened(ee) {
        let [, ie, , He] = ee;
        const ye = ie.map(ti).find((ee => ee.pJ && ee.ready)),
          be = He.findIndex((ee => {
            let [, ie] = ee;
            return ie > 0
          }));
        void 0 === ye && -1 !== be || (this.tab = "orders"), void 0 !== ye && (this.selectedSlot = ye.slot), -1 === be || this.selectedWood < He.length && He[this.selectedWood][1] > 0 || (this.selectedWood = be), this.line = di
      }
      getBoardView() {
        const [, ee, ie, He, ye, be] = this.board;
        let Me = {
          open: !0,
          orders: ee.map(ti),
          tracked: ie,
          sellLines: He,
          level: ye,
          goldOwned: be,
          delivering: [],
          tab: this.tab,
          selectedSlot: this.selectedSlot,
          selectedWood: this.selectedWood,
          line: this.line
        };
        for (const Ke of this.commands.getPending()) Me = Zi(Me, Ke);
        return Me
      }
      queue(ee) {
        this.commands.push(ee), this.set(this.getBoardView())
      }
    }
    var Ai = He(1351),
      Yi = He(2029);
    const Vi = "Gold Coin";

    function ai(ee) {
      let {
        amount: ie,
        item: He = Vi,
        lJ: ye,
        inTile: be = !1,
        iconRef: Me
      } = ee;
      return (0, Oe.jsx)(Ai.g, {
        delayShow: 200,
        hoverOnly: be,
        placement: "top",
        tooltipClassName: "GreenvilleChipTooltipBox",
        tooltipInner: (0, Oe.jsx)(ci, {
          item: He,
          amount: ie,
          lJ: ye
        }),
        children: (0, Oe.jsxs)("span", {
          className: fe()("GreenvilleBoardChip", {
            Short: void 0 !== ye && ye < ie
          }),
          children: [(0, Oe.jsx)("span", {
            ref: Me,
            className: "GreenvilleBoardChipIcon",
            children: (0, Oe.jsx)(Mi, {
              item: He
            })
          }), ie.toLocaleString()]
        })
      })
    }

    function ci(ee) {
      let {
        item: ie,
        amount: He,
        lJ: ye
      } = ee;
      const {
        t: be
      } = (0, Ee.v)(), Me = (0, Yi.g)("itemInfo", (ee => ee[ie]));
      return (0, Oe.jsxs)("div", {
        className: "GreenvilleChipTooltip",
        children: [(0, Oe.jsxs)("div", {
          className: "GreenvilleChipTooltipHeader",
          children: [(0, Oe.jsx)("span", {
            className: "GreenvilleChipTooltipIcon",
            children: (0, Oe.jsx)(Mi, {
              item: ie
            })
          }), (0, Oe.jsx)(bi, {
            item: ie,
            className: "GreenvilleChipTooltipName"
          })]
        }), void 0 !== (null === Me || void 0 === Me ? void 0 : Me.description) && (0, Oe.jsx)(Hi.e, {
          text: Me.description,
          className: "GreenvilleChipTooltipDescription"
        }), void 0 !== ye && (0, Oe.jsxs)("div", {
          className: fe()("GreenvilleChipTooltipHeld", {
            Short: ye < He
          }),
          children: [(0, Oe.jsx)("span", {
            className: "GreenvilleChipTooltipLabel",
            children: be("greenvilleGame:boardYouHave")
          }), (0, Oe.jsxs)("span", {
            className: "GreenvilleChipTooltipCount",
            children: [(0, Oe.jsx)("span", {
              className: "GreenvilleChipTooltipHeldAmount",
              children: ye.toLocaleString()
            }), ` / ${He.toLocaleString()}`]
          }), (0, Oe.jsx)("span", {
            className: "GreenvilleChipTooltipMeter",
            children: (0, Oe.jsx)("span", {
              style: {
                width: (He > 0 ? 100 * Math.min(1, ye / He) : 100) + "%"
              }
            })
          })]
        })]
      })
    }

    function xi(ee) {
      let {
        gold: ie,
        children: He
      } = ee;
      const ye = (0, Ue.useRef)(null);
      var be;
      return be = ye, (0, Ue.useLayoutEffect)((() => {
        const ee = be.current;
        return me = ee, () => {
          me === ee && (me = null)
        }
      }), [be]), (0, Oe.jsxs)("div", {
        className: "GreenvilleBoardWallet",
        children: [He, (0, Oe.jsx)(ai, {
          amount: ie,
          iconRef: ye
        })]
      })
    }
    const Li = {
      New: "lumberBoardStateNew",
      Accepted: "lumberBoardStateAccepted",
      Tracking: "lumberBoardTracking",
      Ready: "lumberBoardStateReady"
    };

    function Ci(ee, ie) {
      return ee.pJ ? ee.ready ? "Ready" : ee.slot === ie ? "Tracking" : "Accepted" : "New"
    }

    function vi(ee) {
      let {
        state: ie
      } = ee;
      const {
        t: He
      } = (0, Ee.v)();
      return (0, Oe.jsx)("span", {
        className: fe()("GreenvilleBoardBadge GreenvilleLumberState", ie, {
          Muted: "Accepted" === ie
        }),
        children: He(`greenvilleGame:${Li[ie]}`)
      })
    }

    function ui(ee) {
      let {
        order: ie
      } = ee;
      return (0, Oe.jsx)("span", {
        className: "GreenvilleLumberNeeds",
        children: ie.items.map((ee => {
          let [ie, He, ye] = ee;
          const be = ye >= He;
          return (0, Oe.jsxs)("span", {
            className: fe()("GreenvilleLumberNeed", {
              Met: be
            }),
            children: [(0, Oe.jsx)("span", {
              className: "GreenvilleLumberNeedIcon",
              children: (0, Oe.jsx)(Mi, {
                item: ie
              })
            }), (0, Oe.jsx)(bi, {
              item: ie,
              className: "GreenvilleLumberNeedName"
            }), (0, Oe.jsxs)("span", {
              className: "GreenvilleLumberNeedCount",
              children: [Math.min(ye, He).toLocaleString(), "/", He.toLocaleString()]
            }), (0, Oe.jsx)("span", {
              className: "GreenvilleLumberNeedTick",
              "aria-hidden": "true",
              children: be && "\u2713"
            })]
          }, ie)
        }))
      })
    }

    function mi(ee) {
      let {
        order: ie,
        inTile: He = !1
      } = ee;
      const {
        t: ye
      } = (0, Ee.v)();
      return (0, Oe.jsxs)("span", {
        className: "GreenvilleLumberReward",
        children: [(0, Oe.jsx)(ai, {
          amount: ie.gold,
          inTile: He
        }), (0, Oe.jsx)("span", {
          className: "GreenvilleLumberExp",
          children: ye("greenvilleGame:boardExpGain", {
            exp: ie.exp
          })
        })]
      })
    }

    function li(ee) {
      let {
        view: ie,
        order: He,
        controller: ye
      } = ee;
      const {
        t: be
      } = (0, Ee.v)(), {
        slot: Me,
        items: Ke,
        pJ: Ue,
        ready: Fe
      } = He, Je = Ke.reduce(((ee, ie) => {
        let [, He, ye] = ie;
        return ee + Math.max(0, He - ye)
      }), 0);
      return (0, Oe.jsxs)("div", {
        className: "GreenvilleBoardActions",
        children: [!Ue && (0, Oe.jsx)(Qe.c, {
          onClick: () => {
            ye.accept(Me)
          },
          children: be("greenvilleGame:lumberBoardAccept")
        }), Ue && (0, Oe.jsx)(Qe.m, {
          disabled: !Fe,
          loading: ie.delivering.includes(Me),
          onClick: () => {
            ye.deliver(Me)
          },
          children: be("greenvilleGame:lumberBoardDeliver")
        }), Ue && !Fe && (0, Oe.jsx)("span", {
          className: "GreenvilleBoardHint",
          children: be("greenvilleGame:lumberBoardDeliverMissing", {
            count: Je
          })
        }), Ue && Me !== ie.tracked && (0, Oe.jsx)(Qe.M, {
          onClick: () => {
            ye.track(Me)
          },
          children: be("greenvilleGame:lumberBoardTrack")
        })]
      })
    }

    function Si(ee) {
      let {
        view: ie,
        controller: He
      } = ee;
      const {
        t: ye
      } = (0, Ee.v)(), be = ie.orders[ie.selectedSlot], Me = Ci(be, ie.tracked), Ke = be.pJ && be.slot === ie.tracked;
      return (0, Oe.jsxs)(oi, {
        icon: (0, Oe.jsx)(Mi, {
          item: be.items[0][0]
        }),
        name: ye(`greenvilleGame:${be.titleKey}`),
        badges: (0, Oe.jsxs)(Oe.Fragment, {
          children: [(0, Oe.jsx)(vi, {
            state: Me
          }), Ke && "Ready" === Me && (0, Oe.jsx)(vi, {
            state: "Tracking"
          })]
        }),
        children: [(0, Oe.jsx)(ui, {
          order: be
        }), (0, Oe.jsx)("dl", {
          className: "GreenvilleBoardFacts",
          children: (0, Oe.jsxs)("div", {
            children: [(0, Oe.jsx)("dt", {
              children: ye("greenvilleGame:lumberBoardReward")
            }), (0, Oe.jsx)("dd", {
              children: (0, Oe.jsx)(mi, {
                order: be
              })
            })]
          })
        }), (0, Oe.jsx)(li, {
          view: ie,
          order: be,
          controller: He
        })]
      })
    }

    function ni(ee) {
      let {
        view: ie,
        controller: He
      } = ee;
      const {
        t: ye
      } = (0, Ee.v)();
      return (0, Oe.jsxs)(Oe.Fragment, {
        children: [(0, Oe.jsx)(Fi, {
          className: "GreenvilleLumberTickets",
          roomy: !0,
          children: ie.orders.map((ee => {
            const be = Ci(ee, ie.tracked);
            return (0, Oe.jsxs)(Ji, {
              icon: (0, Oe.jsx)(Mi, {
                item: ee.items[0][0]
              }),
              name: ye(`greenvilleGame:${ee.titleKey}`),
              selected: ee.slot === ie.selectedSlot,
              className: fe()("GreenvilleLumberTicket", be),
              onSelect: () => {
                He.selectOrder(ee.slot)
              },
              children: [(0, Oe.jsx)(vi, {
                state: be
              }), (0, Oe.jsx)(ui, {
                order: ee
              }), (0, Oe.jsx)(mi, {
                order: ee,
                inTile: !0
              })]
            }, ee.slot)
          }))
        }), (0, Oe.jsx)(Si, {
          view: ie,
          controller: He
        })]
      })
    }

    function ji(ee) {
      let {
        item: ie
      } = ee;
      return (0, Oe.jsx)("span", {
        className: "GreenvilleLumberLogEnd",
        children: (0, Oe.jsx)(Mi, {
          item: ie
        })
      })
    }

    function si(ee) {
      let {
        view: ie,
        controller: He
      } = ee;
      const {
        t: ye
      } = (0, Ee.v)(), [be, Me, Ke] = ie.sellLines[ie.selectedWood], Ue = function(ee, ie) {
        let He = 0,
          ye = 0;
        for (const be of ee.orders)
          if (be.pJ)
            for (const [ee, Me, Ke] of be.items) ee === ie && (He += Me, ye = Ke);
        return Math.min(He, ye)
      }(ie, be), Fe = ie.sellLines.some((ee => {
        let [, ie] = ee;
        return ie > 0
      }));
      return (0, Oe.jsxs)(oi, {
        icon: (0, Oe.jsx)(ji, {
          item: be
        }),
        name: (0, Oe.jsx)(bi, {
          item: be
        }),
        badges: Me > 0 && (0, Oe.jsx)("span", {
          className: "GreenvilleBoardBadge",
          children: ye("greenvilleGame:lumberBoardSellHeld", {
            count: Me
          })
        }),
        children: [(0, Oe.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, Oe.jsxs)("div", {
            children: [(0, Oe.jsx)("dt", {
              children: ye("greenvilleGame:boardYouHave")
            }), (0, Oe.jsx)("dd", {
              children: (Ue + Me).toLocaleString()
            })]
          }), (0, Oe.jsxs)("div", {
            children: [(0, Oe.jsx)("dt", {
              children: ye("greenvilleGame:lumberBoardSellKept")
            }), (0, Oe.jsx)("dd", {
              children: Ue.toLocaleString()
            })]
          }), (0, Oe.jsxs)("div", {
            children: [(0, Oe.jsx)("dt", {
              children: ye("greenvilleGame:lumberBoardSellSpare")
            }), (0, Oe.jsx)("dd", {
              className: fe()("GreenvilleLumberSpare", {
                None: 0 === Me
              }),
              children: Me.toLocaleString()
            })]
          }), (0, Oe.jsxs)("div", {
            children: [(0, Oe.jsx)("dt", {
              children: ye("greenvilleGame:lumberBoardSellEach")
            }), (0, Oe.jsx)("dd", {
              children: (0, Oe.jsx)(ai, {
                amount: Ke
              })
            })]
          })]
        }), (0, Oe.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [(0, Oe.jsxs)(Qe.m, {
            disabled: 0 === Me,
            onClick: () => {
              He.sell(be)
            },
            children: [Me > 0 && ye("greenvilleGame:lumberBoardSell", {
              count: Me
            }), 0 === Me && ye(Ue > 0 ? "greenvilleGame:lumberBoardSellKeptAll" : "greenvilleGame:lumberBoardSellNone")]
          }), (0, Oe.jsx)(Qe.c, {
            disabled: !Fe,
            onClick: () => {
              He.sell(null)
            },
            children: ye("greenvilleGame:lumberBoardSellAll")
          })]
        })]
      })
    }

    function Ii(ee) {
      let {
        view: ie,
        controller: He
      } = ee;
      const {
        t: ye
      } = (0, Ee.v)();
      return (0, Oe.jsxs)(Oe.Fragment, {
        children: [(0, Oe.jsx)(Fi, {
          className: "GreenvilleLumberWoodPile",
          children: ie.sellLines.map(((ee, be) => {
            let [Me, Ke, Ue] = ee;
            return (0, Oe.jsxs)(Ji, {
              icon: (0, Oe.jsx)(ji, {
                item: Me
              }),
              name: (0, Oe.jsx)(bi, {
                item: Me
              }),
              selected: be === ie.selectedWood,
              className: fe()("GreenvilleLumberWood", {
                Spare: Ke > 0
              }),
              onSelect: () => {
                He.selectWood(be)
              },
              children: [Ke > 0 && (0, Oe.jsx)("span", {
                className: "GreenvilleBoardBadge",
                children: ye("greenvilleGame:lumberBoardSellHeld", {
                  count: Ke
                })
              }), (0, Oe.jsx)(ai, {
                amount: Ue,
                inTile: !0
              })]
            }, Me)
          }))
        }), (0, Oe.jsx)(si, {
          view: ie,
          controller: He
        })]
      })
    }

    function Ni(ee) {
      let {
        controller: ie
      } = ee;
      const He = (0, ze.j)(wi, ie.getView()),
        {
          t: ye
        } = (0, Ee.v)(),
        be = function(ee) {
          const {
            t: ie
          } = (0, Ee.v)();
          return "delivered" === ee.kind ? ie("greenvilleGame:lumberTimbertoothThanks", {
            order: ie(`greenvilleGame:${ee.titleKey}`)
          }) : "bought" === ee.kind ? ie("greenvilleGame:lumberTimbertoothBought", {
            count: ee.count
          }) : ie("greenvilleGame:lumberBoardIntro")
        }(He.line);
      if (0 === He.orders.length) return null;
      const Me = He.orders.filter((ee => ee.pJ && ee.ready)).length,
        Ke = He.sellLines.reduce(((ee, ie) => {
          let [, He] = ie;
          return ee + He
        }), 0);
      return (0, Oe.jsxs)(Ki, {
        open: He.open,
        onDismiss: ie.dismiss,
        title: ye("greenvilleGame:lumberBoardTitle"),
        className: "GreenvilleLumberBoard",
        headerExtra: (0, Oe.jsx)(xi, {
          gold: He.goldOwned,
          children: (0, Oe.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: ye("greenvilleGame:lumberBoardLevel", {
              level: He.level
            })
          })
        }),
        tabs: (0, Oe.jsx)(Ui, {
          tabs: [{
            id: "orders",
            label: ye("greenvilleGame:lumberBoardOrders"),
            badge: Me > 0 && (0, Oe.jsx)("span", {
              className: "GreenvilleBoardBadge Ready",
              children: ye("greenvilleGame:lumberBoardReadyCount", {
                count: Me
              })
            })
          }, {
            id: "sell",
            label: ye("greenvilleGame:lumberBoardSellHeading"),
            badge: Ke > 0 && (0, Oe.jsx)("span", {
              className: "GreenvilleBoardBadge",
              children: ye("greenvilleGame:lumberBoardSellHeld", {
                count: Ke
              })
            })
          }],
          selected: He.tab,
          onSelect: ie.selectTab
        }),
        status: {
          speaker: ye("greenvilleGame:lumberTimbertoothName"),
          line: be
        },
        children: ["orders" === He.tab && (0, Oe.jsx)(ni, {
          view: He,
          controller: ie
        }), "sell" === He.tab && (0, Oe.jsx)(Ii, {
          view: He,
          controller: ie
        })]
      })
    }

    function Gi(ee) {
      let {
        controller: ie
      } = ee;
      (0, ze.j)(Di, null);
      const {
        t: He
      } = (0, Ee.v)(), ye = ie.getTracker();
      return null === ye ? null : (0, Oe.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, Oe.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: He(`greenvilleGame:${ye.titleKey}`)
        }), (0, Oe.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: ye.items.map((ee => {
            let [ie, He, ye] = ee;
            return (0, Oe.jsxs)("li", {
              className: fe()("GreenvilleTrackerRow", {
                Done: ye >= He
              }),
              children: [(0, Oe.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, Oe.jsx)(Xe.c, {
                  itemName: ie,
                  amount: 0
                })
              }), (0, Oe.jsx)(bi, {
                item: ie,
                className: "GreenvilleTrackerLabel"
              }), (0, Oe.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [Math.min(ye, He), "/", He]
              })]
            }, ie)
          }))
        }), ye.ready && (0, Oe.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: He("greenvilleGame:lumberTrackerReady")
        })]
      })
    }
    const ri = "greenvilleOreBuyerView",
      Qi = {
        open: !1,
        lines: [],
        selected: 0,
        level: 1,
        goldOwned: 0
      };
    class eH extends Ie {
      constructor(ee, ie, He, ye) {
        super(Qi, ee, ie), this.sales = void 0, this.serverLines = [], this.select = ee => {
          this.set({
            ...this.getView(),
            selected: ee
          })
        }, this.sell = ee => {
          this.getView().lines.some((ie => {
            let [He, , , , ye] = ie;
            return ye > 0 && (null === ee || ee === He)
          })) && (this.sales.push(ee), this.set({
            ...this.getView(),
            lines: this.getLines()
          }))
        }, this.onAnswersTimedOut = () => {
          const ee = this.getView();
          ee.open && this.set({
            ...ee,
            lines: this.getLines()
          })
        }, this.sales = new je(ye, He, this.onAnswersTimedOut)
      }
      DR(ee) {
        if ("close" !== ee[0]) {
          const [, ie, He, ye] = ee, be = "open" === ee[0] && ee[4];
          be && this.sales.takeAnswer();
          const Me = this.getView();
          if ((be || "refresh" === ee[0]) && !Me.open) return;
          this.serverLines = ie;
          const Ke = ie.findIndex((ee => ee[4] > 0));
          this.show({
            open: !0,
            lines: this.getLines(),
            selected: Me.open ? Me.selected : Math.max(0, Ke),
            level: He,
            goldOwned: ye
          })
        } else this.close()
      }
      dropPresses() {
        this.sales.clear()
      }
      getLines() {
        const ee = this.sales.getPending();
        return this.serverLines.map((ie => {
          const [He, ye, be, Me, , Ke] = ie;
          return ee.some((ee => null === ee || ee === He)) ? [He, ye, be, Me, 0, Ke] : ie
        }))
      }
    }

    function iH(ee) {
      let {
        line: ie,
        level: He
      } = ee;
      const {
        t: ye
      } = (0, Ee.v)(), [, , , be, Me, Ke] = ie;
      return (0, Oe.jsxs)(Oe.Fragment, {
        children: [Me > 0 && (0, Oe.jsx)("span", {
          className: "GreenvilleBoardBadge",
          children: ye("greenvilleGame:oreBuyerHeld", {
            count: Me
          })
        }), be > He && (0, Oe.jsxs)("span", {
          className: "GreenvilleBoardBadge Muted",
          children: [(0, Oe.jsx)(re.e, {
            name: "lock"
          }), ye("greenvilleGame:boardLevelBadge", {
            level: be
          })]
        }), be <= He && Ke && (0, Oe.jsx)("span", {
          className: "GreenvilleBoardBadge GreenvilleOreRare",
          children: ye("greenvilleGame:oreBuyerRare")
        })]
      })
    }

    function HH(ee) {
      let {
        line: ie
      } = ee;
      return (0, Oe.jsx)("span", {
        className: "GreenvilleOreSample",
        children: (0, Oe.jsx)(Mi, {
          item: ie[0]
        })
      })
    }

    function yH(ee) {
      let {
        view: ie,
        controller: He
      } = ee;
      const {
        t: ye
      } = (0, Ee.v)(), be = ie.lines[ie.selected], [Me, Ke, Ue, Fe, Je, oe] = be, Re = Fe > ie.level, ke = ie.lines.some((ee => ee[4] > 0));
      return (0, Oe.jsxs)(oi, {
        icon: (0, Oe.jsx)(HH, {
          line: be
        }),
        name: (0, Oe.jsx)(bi, {
          item: Me
        }),
        badges: (0, Oe.jsx)(iH, {
          line: be,
          level: ie.level
        }),
        children: [(0, Oe.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, Oe.jsxs)("div", {
            children: [(0, Oe.jsx)("dt", {
              children: ye("greenvilleGame:boardYouHave")
            }), (0, Oe.jsx)("dd", {
              className: fe()("GreenvilleOreHeld", {
                None: 0 === Je
              }),
              children: Je.toLocaleString()
            })]
          }), (0, Oe.jsxs)("div", {
            children: [(0, Oe.jsx)("dt", {
              children: ye("greenvilleGame:oreBuyerPriceEach")
            }), (0, Oe.jsx)("dd", {
              children: (0, Oe.jsx)(ai, {
                amount: Ke
              })
            })]
          }), (0, Oe.jsxs)("div", {
            children: [(0, Oe.jsx)("dt", {
              children: ye("greenvilleGame:oreBuyerExpEach")
            }), (0, Oe.jsxs)("dd", {
              className: "GreenvilleOreExp",
              children: ["+", Ue]
            })]
          })]
        }), oe && (0, Oe.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: ye("greenvilleGame:oreBuyerLegendary")
        }), Re && (0, Oe.jsxs)(Oe.Fragment, {
          children: [(0, Oe.jsx)("p", {
            className: "GreenvilleBoardHint",
            children: ye("greenvilleGame:oreBuyerLocked", {
              level: Fe
            })
          }), (0, Oe.jsx)("p", {
            className: "GreenvilleBoardDescription",
            children: ye("greenvilleGame:oreBuyerTip")
          })]
        }), (0, Oe.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [(0, Oe.jsxs)(Qe.m, {
            disabled: 0 === Je,
            onClick: () => {
              He.sell(Me)
            },
            children: [Je > 0 && ye("greenvilleGame:oreBuyerSell", {
              count: Je
            }), 0 === Je && ye("greenvilleGame:oreBuyerSellNone")]
          }), (0, Oe.jsx)(Qe.c, {
            disabled: !ke,
            onClick: () => {
              He.sell(null)
            },
            children: ye("greenvilleGame:oreBuyerSellAll")
          })]
        })]
      })
    }

    function bH(ee) {
      let {
        controller: ie
      } = ee;
      const He = (0, ze.j)(ri, ie.getView()),
        {
          t: ye
        } = (0, Ee.v)();
      return 0 === He.lines.length ? null : (0, Oe.jsxs)(Ki, {
        open: He.open,
        onDismiss: ie.dismiss,
        title: ye("greenvilleGame:oreBuyerTitle"),
        className: "GreenvilleOreBuyerBoard",
        headerExtra: (0, Oe.jsx)(xi, {
          gold: He.goldOwned,
          children: (0, Oe.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: ye("greenvilleGame:oreBuyerLevel", {
              level: He.level
            })
          })
        }),
        status: {
          speaker: ye("greenvilleGame:oreBuyerName"),
          line: ye("greenvilleGame:oreBuyerGreet")
        },
        children: [(0, Oe.jsx)(Fi, {
          roomy: !0,
          children: He.lines.map(((ee, be) => {
            const [Me, Ke, Ue, Fe, Je, oe] = ee;
            return (0, Oe.jsxs)(Ji, {
              icon: (0, Oe.jsx)(HH, {
                line: ee
              }),
              name: (0, Oe.jsx)(bi, {
                item: Me
              }),
              selected: be === He.selected,
              locked: Fe > He.level && 0 === Je,
              className: fe()("GreenvilleOreTile", {
                Legendary: oe
              }),
              onSelect: () => {
                ie.select(be)
              },
              children: [(0, Oe.jsx)(iH, {
                line: ee,
                level: He.level
              }), (0, Oe.jsxs)("span", {
                className: "GreenvilleOrePrice",
                children: [(0, Oe.jsx)(ai, {
                  amount: Ke,
                  inTile: !0
                }), (0, Oe.jsx)("span", {
                  className: "GreenvilleOreExp",
                  children: ye("greenvilleGame:boardExpGain", {
                    exp: Ue
                  })
                })]
              })]
            }, Me)
          }))
        }), (0, Oe.jsx)(yH, {
          view: He,
          controller: ie
        })]
      })
    }
    const MH = {
      kind: "greet"
    };

    function KH(ee) {
      return ee.every((ee => {
        let [, , ie, He] = ee;
        return He >= ie
      }))
    }

    function UH(ee) {
      let [ie, He, ye, be, Me, Ke] = ee;
      return {
        slot: ie,
        nameKey: He,
        needs: ye,
        exp: be,
        gold: Me,
        pJ: Ke,
        ready: KH(ye)
      }
    }

    function FH(ee, ie) {
      let [, , He, ye] = ee;
      return ie ? He : He - ye
    }

    function JH(ee, ie) {
      let [He, ye] = ee;
      return He === ie.item && null !== ye === ie.golden
    }

    function oH(ee, ie) {
      return (ie.golden ? ee.goldenLines : ee.sellLines).find((ee => JH(ee, ie)))
    }

    function RH(ee, ie) {
      return "sell" === ie.action ? fH(function(ee, ie, He) {
        let ye = ee.goldOwned;
        const be = ee => {
          if (null !== ie && !JH(ee, ie)) return ee;
          const [be, Me, Ke, Ue, Fe] = ee, Je = FH(ee, He);
          return ye += Je * Fe, [be, Me, Ke - Je, He ? 0 : Ue, Fe]
        };
        return {
          ...ee,
          sellLines: ee.sellLines.map(be),
          goldenLines: kH(ee.goldenLines.map(be)),
          goldOwned: ye
        }
      }(ee, ie.kind, ie.all)) : "accept" === ie.action ? function(ee, ie) {
        var He;
        const {
          needs: ye
        } = ee.orders[ie], be = ee => {
          const [ie, He, be, Me, Ke] = ee, Ue = qH(ye, ee);
          return Ue ? [ie, He, be, Math.min(be, Me + Ue[2]), Ke] : ee
        };
        return {
          ...ee,
          tracked: null !== (He = ee.tracked) && void 0 !== He ? He : ie,
          orders: ee.orders.map((ee => ee.slot === ie ? {
            ...ee,
            pJ: !0
          } : ee)),
          sellLines: ee.sellLines.map(be),
          goldenLines: ee.goldenLines.map(be)
        }
      }(ee, ie.slot) : "track" === ie.action ? {
        ...ee,
        tracked: ie.slot
      } : fH(function(ee, ie) {
        const {
          needs: He
        } = ee.orders[ie], ye = ee => {
          const [ie, ye, be, Me, Ke] = ee, Ue = qH(He, ee);
          return Ue ? [ie, ye, be - Ue[2], Me - Ue[2], Ke] : ee
        };
        return {
          ...ee,
          sellLines: ee.sellLines.map(ye),
          goldenLines: kH(ee.goldenLines.map(ye)),
          delivering: [...ee.delivering, ie]
        }
      }(ee, ie.slot))
    }

    function kH(ee) {
      return ee.filter((ee => {
        let [, , ie] = ee;
        return ie > 0
      }))
    }

    function qH(ee, ie) {
      let [He, ye] = ie;
      return ee.find((ee => {
        let [ie, be] = ee;
        return ie === He && be === ye
      }))
    }

    function fH(ee) {
      const ie = (ie, He) => {
          const ye = (null === He ? ee.sellLines : ee.goldenLines).find((ee => {
            let [He] = ee;
            return He === ie
          }));
          return ye ? ye[2] : 0
        },
        He = ee.orders.map((He => {
          if (ee.delivering.includes(He.slot)) return He;
          const ye = He.needs.map((ee => {
            let [He, ye, be] = ee;
            return [He, ye, be, ie(He, ye)]
          }));
          return {
            ...He,
            needs: ye,
            ready: KH(ye)
          }
        }));
      return {
        ...ee,
        orders: He
      }
    }

    function TH(ee) {
      let [, , , ie, He] = ee;
      return [...ie, ...He].reduce(((ee, ie) => {
        let [, , He] = ie;
        return ee + He
      }), 0)
    }
    const pH = "greenvilleFarmBoardView",
      XH = "greenvilleFarmTrackerView",
      zH = {
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
        line: MH
      };
    class BH extends Ie {
      constructor(ee, ie, He, ye, be) {
        super(zH, ee, He), this.publishTracker = ie, this.board = null, this.commands = void 0, this.tracker = null, this.tab = "orders", this.selectedOrder = 0, this.selectedProduce = null, this.line = MH, this.selectTab = ee => {
          this.tab = ee, this.set(this.getBoardView())
        }, this.selectOrder = ee => {
          this.selectedOrder = ee, this.set(this.getBoardView())
        }, this.selectProduce = ee => {
          this.selectedProduce = ee, this.set(this.getBoardView())
        }, this.accept = ee => {
          this.getView().orders[ee].pJ || this.queue({
            action: "accept",
            slot: ee
          })
        }, this.track = ee => {
          const ie = this.getView();
          ie.tracked !== ee && ie.orders[ee].pJ && this.queue({
            action: "track",
            slot: ee
          })
        }, this.deliver = ee => {
          const ie = this.getView(),
            He = ie.orders[ee];
          He.pJ && He.ready && !ie.delivering.includes(ee) && this.queue({
            action: "deliver",
            slot: ee
          })
        }, this.sell = (ee, ie) => {
          this.queueSale({
            item: ee,
            golden: ie
          }, !1)
        }, this.sellSpare = () => {
          this.queueSale(null, !1)
        }, this.sellAll = () => {
          this.queueSale(null, !0)
        }, this.onAnswersTimedOut = () => {
          this.getView().open && this.set(this.settleView())
        }, this.commands = new je(be, (ee => {
          ye(function(ee) {
            return "sell" !== ee.action ? `${Me}${ee.action} ${ee.slot}` : ee.all ? `${Me}sellAll` : null === ee.kind ? `${Me}sell` : `${Me}${ee.kind.golden?"sellGolden":"sell"} ${ee.kind.item}`
          }(ee))
        }), this.onAnswersTimedOut)
      }
      getTracker() {
        return this.tracker
      }
      DR(ee) {
        if ("open" === ee[0]) {
          const He = ee[7],
            ye = He ? this.commands.takeAnswer() : null,
            be = !this.getView().open;
          if (He && be) return;
          const Me = this.board;
          if (this.board = ee, be) this.onReopened();
          else if (null !== ye) {
            var ie;
            this.line = null !== (ie = function(ee, ie, He) {
              const ye = He[6] - ie[6];
              if (ye <= 0) return null;
              if ("deliver" === ee.action) return {
                kind: "delivered",
                nameKey: ie[1][ee.slot][1],
                gold: ye
              };
              const be = TH(ie) - TH(He);
              return "sell" === ee.action && be > 0 ? {
                kind: "sold",
                count: be,
                gold: ye
              } : null
            }(ye, Me, ee)) && void 0 !== ie ? ie : this.line
          }
          this.show(this.settleView())
        } else "close" === ee[0] ? this.close() : (this.tracker = null === ee[1] ? null : UH(ee[1]), this.publishTracker(this.tracker))
      }
      dropPresses() {
        this.commands.clear(), this.board = null
      }
      onReopened() {
        this.line = MH;
        const ee = this.toView(this.board).orders.find((ee => ee.pJ && ee.ready));
        ee && (this.tab = "orders", this.selectedOrder = ee.slot)
      }
      queueSale(ee, ie) {
        const {
          sellLines: He,
          goldenLines: ye
        } = this.getView();
        [...He, ...ye].some((He => FH(He, ie) > 0 && (null === ee || JH(He, ee)))) && this.queue({
          action: "sell",
          kind: ee,
          all: ie
        })
      }
      toView(ee) {
        let [, ie, He, ye, be, Me, Ke] = ee;
        return {
          open: !0,
          orders: ie.map(UH),
          tracked: He,
          sellLines: ye,
          goldenLines: be,
          level: Me,
          goldOwned: Ke,
          delivering: [],
          tab: this.tab,
          selectedOrder: this.selectedOrder,
          selectedProduce: this.selectedProduce,
          line: this.line
        }
      }
      getBoardView() {
        let ee = this.toView(this.board);
        for (const ie of this.commands.getPending()) ee = RH(ee, ie);
        return {
          ...ee,
          selectedProduce: this.pickProduce(ee)
        }
      }
      settleView() {
        const ee = this.getBoardView();
        return this.commands.dR() && (this.selectedProduce = ee.selectedProduce), ee
      }
      pickProduce(ee) {
        var ie, He;
        const ye = this.selectedProduce;
        if (ye && oH(ee, ye)) return ye;
        if (ye) return {
          item: ye.item,
          golden: !1
        };
        const [be, Me] = null !== (ie = null !== (He = ee.goldenLines[0]) && void 0 !== He ? He : ee.sellLines.find((ee => {
          let [, , ie] = ee;
          return ie > 0
        }))) && void 0 !== ie ? ie : ee.sellLines[0];
        return {
          item: be,
          golden: null !== Me
        }
      }
      queue(ee) {
        this.commands.push(ee), this.set(this.getBoardView())
      }
    }
    var EH = He(1335);

    function gH() {
      const ee = (0, Ue.useRef)(null);
      return (0, EH.e)(ee), (0, Oe.jsx)("span", {
        ref: ee,
        className: "GreenvilleFarmSparkle",
        "aria-hidden": "true"
      })
    }

    function OH(ee) {
      let {
        item: ie,
        golden: He
      } = ee;
      return (0, Oe.jsx)("span", {
        className: fe()("GreenvilleFarmProduce", {
          Golden: He
        }),
        children: (0, Oe.jsx)(Mi, {
          item: ie
        })
      })
    }

    function dH(ee) {
      let {
        item: ie,
        goldenName: He
      } = ee;
      return null !== He ? (0, Oe.jsx)("span", {
        className: "GreenvilleFarmGoldenName",
        children: He
      }) : (0, Oe.jsx)(bi, {
        item: ie
      })
    }
    const WH = {
      New: "greenvilleGame:farmBoardNew",
      Accepted: "greenvilleGame:farmBoardAccepted",
      Tracking: "greenvilleGame:farmOrderTracking",
      Ready: "greenvilleGame:farmBoardReady"
    };

    function tH(ee, ie) {
      return ee.pJ ? ee.ready ? "Ready" : ie ? "Tracking" : "Accepted" : "New"
    }

    function ZH(ee) {
      return ee.needs.some((ee => {
        let [, ie] = ee;
        return null !== ie
      }))
    }

    function wH(ee) {
      let {
        order: ie
      } = ee;
      const [He, ye] = ie.needs[0];
      return (0, Oe.jsx)(OH, {
        item: He,
        golden: null !== ye
      })
    }

    function DH(ee) {
      let {
        state: ie
      } = ee;
      const {
        t: He
      } = (0, Ee.v)();
      return (0, Oe.jsx)("span", {
        className: fe()("GreenvilleBoardBadge GreenvilleFarmState", ie),
        children: He(WH[ie])
      })
    }

    function PH(ee) {
      let {
        needs: ie
      } = ee;
      return (0, Oe.jsx)("span", {
        className: "GreenvilleFarmNeeds",
        children: ie.map((ee => {
          let [ie, He, ye, be] = ee;
          const Me = be >= ye;
          return (0, Oe.jsxs)("span", {
            className: fe()("GreenvilleFarmNeed", {
              Met: Me,
              Golden: null !== He
            }),
            children: [(0, Oe.jsx)("span", {
              className: "GreenvilleFarmNeedIcon",
              children: (0, Oe.jsx)(OH, {
                item: ie,
                golden: null !== He
              })
            }), (0, Oe.jsx)("span", {
              className: "GreenvilleFarmNeedName",
              children: (0, Oe.jsx)(dH, {
                item: ie,
                goldenName: He
              })
            }), (0, Oe.jsxs)("span", {
              className: "GreenvilleFarmNeedCount",
              children: [Me && "\u2713 ", Math.min(be, ye), "/", ye]
            })]
          }, `${ie}|${He}`)
        }))
      })
    }

    function AH(ee) {
      let {
        order: ie,
        inTile: He = !1
      } = ee;
      const {
        t: ye
      } = (0, Ee.v)();
      return (0, Oe.jsxs)("span", {
        className: "GreenvilleFarmReward",
        children: [(0, Oe.jsx)(ai, {
          amount: ie.gold,
          inTile: He
        }), (0, Oe.jsx)("span", {
          className: "GreenvilleFarmExp",
          children: ye("greenvilleGame:boardExpGain", {
            exp: ie.exp
          })
        })]
      })
    }

    function YH(ee) {
      let {
        view: ie,
        controller: He
      } = ee;
      const {
        t: ye
      } = (0, Ee.v)(), be = ie.orders[ie.selectedOrder], {
        slot: Me,
        nameKey: Ke,
        needs: Ue,
        pJ: Fe,
        ready: Je
      } = be, oe = Me === ie.tracked, Re = Ue.reduce(((ee, ie) => {
        let [, , He, ye] = ie;
        return ee + Math.max(0, He - ye)
      }), 0);
      return (0, Oe.jsxs)(oi, {
        icon: (0, Oe.jsx)(wH, {
          order: be
        }),
        name: ye(Ke),
        badges: (0, Oe.jsxs)(Oe.Fragment, {
          children: [(0, Oe.jsx)(DH, {
            state: tH(be, oe)
          }), ZH(be) && (0, Oe.jsx)("span", {
            className: "GreenvilleBoardBadge GreenvilleFarmGoldenBadge",
            children: ye("greenvilleGame:farmBoardGolden")
          })]
        }),
        children: [(0, Oe.jsx)(PH, {
          needs: Ue
        }), (0, Oe.jsx)("dl", {
          className: "GreenvilleBoardFacts",
          children: (0, Oe.jsxs)("div", {
            children: [(0, Oe.jsx)("dt", {
              children: ye("greenvilleGame:farmBoardReward")
            }), (0, Oe.jsx)("dd", {
              children: (0, Oe.jsx)(AH, {
                order: be
              })
            })]
          })
        }), (0, Oe.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [!Fe && (0, Oe.jsx)(Qe.c, {
            onClick: () => {
              He.accept(Me)
            },
            children: ye("greenvilleGame:farmOrderAccept")
          }), Fe && oe && (0, Oe.jsxs)("span", {
            className: "GreenvilleFarmTracking",
            children: [(0, Oe.jsx)(re.e, {
              name: "crosshairs"
            }), ye("greenvilleGame:farmOrderTracking")]
          }), Fe && !oe && (0, Oe.jsx)(Qe.M, {
            onClick: () => {
              He.track(Me)
            },
            children: ye("greenvilleGame:farmOrderTrack")
          }), Fe && (0, Oe.jsx)(Qe.m, {
            disabled: !Je,
            loading: ie.delivering.includes(Me),
            onClick: () => {
              He.deliver(Me)
            },
            children: ye("greenvilleGame:farmOrderDeliver")
          }), Fe && !Je && (0, Oe.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: ye("greenvilleGame:farmBoardMissing", {
              count: Re
            })
          })]
        })]
      })
    }

    function VH(ee) {
      let {
        view: ie,
        controller: He
      } = ee;
      const {
        t: ye
      } = (0, Ee.v)();
      return (0, Oe.jsxs)(Oe.Fragment, {
        children: [(0, Oe.jsx)(Fi, {
          roomy: !0,
          children: ie.orders.map((ee => (0, Oe.jsxs)(Ji, {
            icon: (0, Oe.jsx)(wH, {
              order: ee
            }),
            name: ye(ee.nameKey),
            selected: ee.slot === ie.selectedOrder,
            className: fe()("GreenvilleFarmBasket", {
              WantsGolden: ZH(ee)
            }),
            onSelect: () => {
              He.selectOrder(ee.slot)
            },
            children: [(0, Oe.jsx)(DH, {
              state: tH(ee, ee.slot === ie.tracked)
            }), (0, Oe.jsx)(PH, {
              needs: ee.needs
            }), (0, Oe.jsx)(AH, {
              order: ee,
              inTile: !0
            })]
          }, ee.slot)))
        }), (0, Oe.jsx)(YH, {
          view: ie,
          controller: He
        })]
      })
    }

    function aH(ee) {
      let {
        line: ie,
        selected: He,
        onSelect: ye
      } = ee;
      const [be, Me, Ke, , Ue] = ie, Fe = null !== Me;
      return (0, Oe.jsxs)(Ji, {
        icon: (0, Oe.jsx)(OH, {
          item: be,
          golden: Fe
        }),
        name: (0, Oe.jsx)(dH, {
          item: be,
          goldenName: Me
        }),
        selected: He,
        className: fe()("GreenvilleFarmCrate", {
          Golden: Fe,
          Empty: 0 === Ke
        }),
        onSelect: ye,
        children: [Fe && (0, Oe.jsx)(gH, {}), Ke > 0 && (0, Oe.jsxs)("span", {
          className: "GreenvilleBoardBadge GreenvilleFarmHeld",
          children: ["\xd7", Ke]
        }), (0, Oe.jsx)(ai, {
          amount: Ue,
          inTile: !0
        })]
      })
    }

    function cH(ee) {
      let {
        view: ie,
        controller: He
      } = ee;
      const {
        t: ye
      } = (0, Ee.v)(), be = [...ie.sellLines, ...ie.goldenLines], Me = be.some((ee => FH(ee, !1) > 0)), Ke = be.some((ee => FH(ee, !0) > 0));
      return (0, Oe.jsxs)("div", {
        className: "GreenvilleFarmSign",
        children: [(0, Oe.jsx)("h3", {
          className: "GreenvilleFarmSignBoard",
          children: ye("greenvilleGame:farmBoardPrices")
        }), (0, Oe.jsxs)("div", {
          className: "GreenvilleFarmSignActions",
          children: [(0, Oe.jsx)(Qe.c, {
            disabled: !Me,
            onClick: He.sellSpare,
            children: ye("greenvilleGame:farmStallSellSurplus")
          }), (0, Oe.jsx)(Qe.G, {
            disabled: !Ke,
            onClick: He.sellAll,
            children: ye("greenvilleGame:farmStallSellAll")
          })]
        })]
      })
    }

    function xH(ee) {
      let {
        line: ie,
        controller: He
      } = ee;
      const {
        t: ye
      } = (0, Ee.v)(), [be, Me, Ke, Ue, Fe] = ie, Je = null !== Me, oe = FH(ie, !1);
      return (0, Oe.jsxs)(oi, {
        icon: (0, Oe.jsx)(OH, {
          item: be,
          golden: Je
        }),
        name: (0, Oe.jsx)(dH, {
          item: be,
          goldenName: Me
        }),
        badges: Je && (0, Oe.jsx)("span", {
          className: "GreenvilleBoardBadge GreenvilleFarmGoldenBadge",
          children: ye("greenvilleGame:farmBoardGolden")
        }),
        children: [Je && (0, Oe.jsx)("p", {
          className: "GreenvilleBoardDescription",
          children: ye("greenvilleGame:farmBoardGoldenBlurb")
        }), (0, Oe.jsxs)("dl", {
          className: "GreenvilleBoardFacts",
          children: [(0, Oe.jsxs)("div", {
            children: [(0, Oe.jsx)("dt", {
              children: ye("greenvilleGame:boardYouHave")
            }), (0, Oe.jsx)("dd", {
              children: Ke
            })]
          }), Ue > 0 && (0, Oe.jsxs)("div", {
            children: [(0, Oe.jsx)("dt", {
              children: ye("greenvilleGame:farmBoardKept")
            }), (0, Oe.jsx)("dd", {
              children: Ue
            })]
          }), (0, Oe.jsxs)("div", {
            children: [(0, Oe.jsx)("dt", {
              children: ye("greenvilleGame:farmBoardSpare")
            }), (0, Oe.jsx)("dd", {
              children: oe
            })]
          }), (0, Oe.jsxs)("div", {
            children: [(0, Oe.jsx)("dt", {
              children: ye("greenvilleGame:farmBoardPriceEach")
            }), (0, Oe.jsx)("dd", {
              children: (0, Oe.jsx)(ai, {
                amount: Fe
              })
            })]
          })]
        }), (0, Oe.jsxs)("div", {
          className: "GreenvilleBoardActions",
          children: [oe > 0 && (0, Oe.jsx)(Qe.m, {
            onClick: () => {
              He.sell(be, Je)
            },
            children: ye("greenvilleGame:farmBoardSell", {
              count: oe
            })
          }), 0 === Ke && (0, Oe.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: ye("greenvilleGame:farmStallNothing")
          }), Ke > 0 && 0 === oe && (0, Oe.jsx)("span", {
            className: "GreenvilleBoardHint",
            children: ye("greenvilleGame:farmBoardAllKept")
          })]
        })]
      })
    }

    function LH(ee) {
      let {
        view: ie,
        produce: He,
        controller: ye
      } = ee;
      const {
        t: be
      } = (0, Ee.v)(), Me = ee => {
        const [ie, be] = ee;
        return (0, Oe.jsx)(aH, {
          line: ee,
          selected: JH(ee, He),
          onSelect: () => {
            ye.selectProduce({
              item: ie,
              golden: null !== be
            })
          }
        }, `${ie}|${null!==be}`)
      };
      return (0, Oe.jsxs)(Oe.Fragment, {
        children: [(0, Oe.jsxs)(Fi, {
          children: [(0, Oe.jsx)(cH, {
            view: ie,
            controller: ye
          }), ie.goldenLines.length > 0 && (0, Oe.jsxs)(Oe.Fragment, {
            children: [(0, Oe.jsx)("h4", {
              className: "GreenvilleFarmSection Golden",
              children: be("greenvilleGame:farmBoardGoldenCrops")
            }), ie.goldenLines.map(Me), (0, Oe.jsx)("hr", {
              className: "GreenvilleFarmSection"
            })]
          }), ie.sellLines.map(Me)]
        }), (0, Oe.jsx)(xH, {
          line: oH(ie, He),
          controller: ye
        })]
      })
    }

    function CH(ee) {
      let {
        controller: ie
      } = ee;
      const He = (0, ze.j)(pH, ie.getView()),
        {
          t: ye
        } = (0, Ee.v)(),
        be = function(ee) {
          const {
            t: ie
          } = (0, Ee.v)();
          return "delivered" === ee.kind ? ie("greenvilleGame:tillieDelivered", {
            order: ie(ee.nameKey),
            gold: ee.gold
          }) : "sold" === ee.kind ? ie("greenvilleGame:tillieSold", {
            count: ee.count,
            gold: ee.gold
          }) : ie("greenvilleGame:tillieGreet")
        }(He.line),
        Me = He.selectedProduce;
      if (null === Me) return null;
      const Ke = function(ee) {
        return ee.orders.filter((ee => ee.pJ && ee.ready)).length
      }(He);
      return (0, Oe.jsxs)(Ki, {
        open: He.open,
        onDismiss: ie.dismiss,
        title: ye("greenvilleGame:farmBoardTitle"),
        className: "GreenvilleFarmBoard",
        headerExtra: (0, Oe.jsx)(xi, {
          gold: He.goldOwned,
          children: (0, Oe.jsx)("span", {
            className: "GreenvilleBoardLevel",
            children: ye("greenvilleGame:farmBoardLevel", {
              level: He.level
            })
          })
        }),
        tabs: (0, Oe.jsx)(Ui, {
          tabs: [{
            id: "orders",
            label: ye("greenvilleGame:farmBoardOrdersTab"),
            badge: Ke > 0 && (0, Oe.jsx)("span", {
              className: "GreenvilleBoardBadge GreenvilleFarmReadyBadge",
              children: ye("greenvilleGame:farmBoardReadyCount", {
                count: Ke
              })
            })
          }, {
            id: "stall",
            label: ye("greenvilleGame:farmBoardStallTab")
          }],
          selected: He.tab,
          onSelect: ie.selectTab
        }),
        status: {
          speaker: ye("greenvilleGame:farmTillieName"),
          line: be
        },
        children: ["orders" === He.tab && (0, Oe.jsx)(VH, {
          view: He,
          controller: ie
        }), "stall" === He.tab && (0, Oe.jsx)(LH, {
          view: He,
          produce: Me,
          controller: ie
        })]
      })
    }
    var vH = He(39289);

    function uH(ee) {
      let {
        controller: ie
      } = ee;
      (0, ze.j)(XH, null);
      const {
        t: He
      } = (0, Ee.v)(), ye = ie.getTracker();
      return null === ye ? null : (0, Oe.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, Oe.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: He(ye.nameKey)
        }), (0, Oe.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: ye.needs.map((ee => {
            let [ie, ye, be, Me] = ee;
            return (0, Oe.jsxs)("li", {
              className: fe()("GreenvilleTrackerRow", {
                Done: Me >= be,
                Golden: null !== ye
              }),
              children: [(0, Oe.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, Oe.jsx)(Xe.c, {
                  itemName: ie,
                  amount: 0
                })
              }), (0, Oe.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: null !== ye && void 0 !== ye ? ye : (0, vH.f)(He, ie)
              }), (0, Oe.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [Math.min(Me, be), "/", be]
              })]
            }, `${ie}|${ye}`)
          }))
        }), ye.ready && (0, Oe.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: He("greenvilleGame:farmOrderReady")
        })]
      })
    }
    const mH = "greenvillePlaceView",
      lH = "greenvilleMoodView";
    class SH {
      constructor(ee, ie) {
        this.publishPlace = ee, this.publishMood = ie, this.place = null, this.mood = null
      }
      getPlace() {
        return this.place
      }
      getMood() {
        return this.mood
      }
      DR(ee) {
        const ie = performance.now();
        switch (ee[0]) {
          case "hudMood": {
            const [, He, ye, be, Me, Ke, Ue] = ee;
            return this.mood = {
              energy: He,
              earningsPercent: ye,
              breakEvenEnergy: be,
              restedEndsAt: Me > 0 ? ie + Me : 0,
              adBoosted: Ke,
              luckPercent: Ue
            }, void this.publishMood(this.mood)
          }
          case "hudTown": {
            const [ie, He, ye] = ee;
            this.place = {
              kind: ie,
              place: He,
              levels: ye
            };
            break
          }
          case "hudJob": {
            const [ie, He, ye, be, Me, Ke, Ue, Fe, Je] = ee;
            this.place = {
              kind: ie,
              place: He,
              job: ye,
              level: be,
              expInto: Me,
              expNeeded: Ke,
              status: null === Ue ? null : nH(Ue),
              next: null === Fe ? null : {
                item: Fe[0],
                nameKey: Fe[1],
                level: Fe[2]
              },
              stats: Je.map((ee => {
                let [ie, He, ye, be] = ee;
                return {
                  stat: ie,
                  value: He,
                  max: ye,
                  boosted: be
                }
              }))
            };
            break
          }
          case "hudHome": {
            const [He, ye, be, Me, Ke, Ue, Fe, Je, oe] = ee;
            this.place = {
              kind: He,
              houseName: ye,
              ownerName: be,
              isOwner: Me,
              visitorsAllowed: Ke,
              pvp: Ue,
              parkour: Fe,
              runStartedAt: Je < 0 ? null : this.getRunStart(ie - Je),
              bestTimes: oe.map((ee => {
                let [ie, He] = ee;
                return {
                  playerName: ie,
                  seconds: He
                }
              }))
            };
            break
          }
          case "hudSpleef": {
            const [ie, He, ye] = ee;
            this.place = {
              kind: ie,
              eliminations: He,
              wins: ye
            };
            break
          }
        }
        this.publishPlace(this.place)
      }
      getRunStart(ee) {
        var ie;
        const He = "hudHome" === (null === (ie = this.place) || void 0 === ie ? void 0 : ie.kind) ? this.place.runStartedAt : null;
        return null !== He && Math.abs(He - ee) < 500 ? He : ee
      }
    }

    function nH(ee) {
      switch (ee[0]) {
        case "hudTier":
          return {
            kind: ee[0], tierKey: ee[1], locked: ee[2]
          };
        case "hudBay":
          return {
            kind: ee[0], materialKey: ee[1], objectKey: ee[2], percent: ee[3]
          };
        case "hudBayEmpty":
          return {
            kind: ee[0]
          };
        case "hudFarmTier":
          return {
            kind: ee[0], goldenPercent: ee[1]
          }
      }
    }
    var jH = He(3760),
      sH = He(1205),
      IH = He(186);
    const hH = JSON.parse('{"d":{"constructionSiteA":{"name":"Construction Site A"},"quarry":{"name":"The Quarry","skill":"Mining"},"industry":{"name":"Demolition Yard","skill":"Demolition"},"market":{"name":"Market Street","skill":"Market"},"lumberMill":{"name":"Lumber Mill","skill":"Woodcutting"},"farm":{"name":"Greenville Farm","skill":"Farming"},"constructionSiteB":{"name":"Construction Site B"},"dealership":{"name":"Wheeler\'s Wheels"},"postOffice":{"name":"Post Office & Diner"},"station":{"name":"The Station"},"docks":{"name":"The Docks"}},"f":[[{"kind":"residential","name":"Hillside"},{"kind":"district","district":"quarry"},{"kind":"district","district":"industry"},{"kind":"residential","name":"Ridgeview"}],[{"kind":"residential","name":"Willow Gardens"},{"kind":"district","district":"constructionSiteA"},{"kind":"district","district":"market"},{"kind":"residential","name":"Maple Row"}],[{"kind":"residential","name":"Birchwood"},{"kind":"district","district":"farm"},{"kind":"district","district":"lumberMill"},{"kind":"district","district":"dealership"}],[{"kind":"residential","name":"Seaview"},{"kind":"district","district":"constructionSiteB"},{"kind":"residential","name":"Harbour Terrace"},{"kind":"residential","name":"Lighthouse Point"}]]}'),
      NH = IH.g.BR,
      GH = 1e3 * NH,
      rH = NH,
      QH = rH + 2 * NH,
      ey = 4 * QH + rH;

    function iy(ee, ie, He) {
      return ie >= ee.x0 && ie <= ee.x1 && He >= ee.z0 && He <= ee.z1
    }
    const Hy = hH.f,
      yy = Object.fromEntries(Object.entries(hH.d).map((ee => {
        let [ie, {
          name: He
        }] = ee;
        return [ie, He]
      })));

    function by(ee, ie) {
      return [GH + rH + ee * QH, GH + rH + ie * QH]
    }

    function My() {
      const ee = [];
      Hy.forEach(((ie, He) => {
        ie.forEach(((ie, ye) => {
          if ("residential" !== ie.kind) return;
          const [be, Me] = by(ye, He);
          for (const [He, Ke, Ue] of [
              [0, 0, "north"],
              [1, 0, "north"],
              [0, 1, "south"],
              [1, 1, "south"]
            ]) ee.push({
            chunk: [be / NH + He, 0, Me / NH + Ke],
            facing: Ue,
            neighbourhood: ie.name
          })
        }))
      }));
      const ie = GH + ey / 2,
        He = ee => {
          let {
            chunk: He
          } = ee;
          return Math.hypot(He[0] * NH + NH / 2 - ie, He[2] * NH + NH / 2 - ie)
        };
      return ee.sort(((ee, ie) => He(ee) - He(ie)))
    }
    const Ky = {
        market: "Crate",
        demolition: "Moonstone Explosive",
        mining: "Iron Pickaxe",
        woodcutting: "Iron Axe",
        farming: "Wheat"
      },
      Uy = {
        earningPower: "greenvilleGame:marketEarningPower",
        power: "greenvilleGame:demolitionPower",
        points: "greenvilleGame:demolitionPoints",
        depth: "greenvilleGame:miningDepth",
        value: "greenvilleGame:miningValue",
        backpack: "greenvilleGame:miningBackpack",
        luck: "greenvilleGame:luck"
      };

    function Fy(ee, ie, He, ye) {
      switch (ie.kind) {
        case "hudTown":
          return "city" !== ie.place ? {
            key: ie.place,
            name: ee(`greenvilleGame:${ie.place}`),
            eyebrow: null
          } : "tile" === He.kind ? {
            key: `place|${yy[He.district]}`,
            name: yy[He.district],
            eyebrow: null
          } : "outside" === He.kind ? {
            key: "city|outside",
            name: ee("greenvilleGame:placeGreenville"),
            eyebrow: null
          } : null;
        case "hudJob": {
          const He = function(ee, ie) {
            switch (ie) {
              case "quarry":
                return yy.quarry;
              case "demolitionYard":
                return yy.industry;
              case "marketStreet":
                return yy.market;
              case "farm":
                return yy.farm;
              case "lumberMill":
                return yy.lumberMill;
              case "supermarket":
                return ee("greenvilleGame:market");
              case "demolition":
              case "mining":
              case "woodcutting":
              case "farming":
                return ee(`greenvilleGame:${ie}`)
            }
          }(ee, ie.place);
          return {
            key: `place|${He}`,
            name: He,
            eyebrow: null
          }
        }
        case "hudHome": {
          const He = ie.isOwner ? ee("greenvilleGame:placeYourHouse") : ee("greenvilleGame:homePlayersHouse", {
              player: (0, sH.h)(ie.ownerName, ye)
            }),
            be = `home|${ie.ownerName}|${ie.houseName}`;
          return null === ie.houseName ? {
            key: be,
            name: He,
            eyebrow: null
          } : {
            key: be,
            name: ie.houseName,
            eyebrow: He
          }
        }
        case "hudSpleef":
          return {
            key: "spleef", name: ee("greenvilleGame:placeSpleef"), eyebrow: null
          }
      }
    }

    function Jy(ee) {
      let {
        controller: ie,
        children: He
      } = ee;
      (0, ze.j)(mH, null);
      const [ye, be] = (0, Ue.useState)(null);
      (0, jH.i)(ye, ".RightElements");
      const Me = ie.getPlace();
      return (0, Oe.jsx)(pe.d, {
        placement: "topRight",
        children: (0, Oe.jsx)("div", {
          className: "GreenvilleHudColumn",
          children: (0, Oe.jsxs)("div", {
            ref: be,
            className: "GreenvilleHudColumnStack",
            children: [He, "hudTown" === (null === Me || void 0 === Me ? void 0 : Me.kind) && (0, Oe.jsx)(Ry, {
              levels: Me.levels
            }), "hudJob" === (null === Me || void 0 === Me ? void 0 : Me.kind) && (0, Oe.jsx)(ky, {
              job: Me
            }), "hudHome" === (null === Me || void 0 === Me ? void 0 : Me.kind) && Me.bestTimes.length > 0 && (0, Oe.jsx)(qy, {
              home: Me
            }), "hudSpleef" === (null === Me || void 0 === Me ? void 0 : Me.kind) && (0, Oe.jsx)("div", {
              className: "GreenvilleTrackerCard",
              children: (0, Oe.jsx)(oy, {
                rows: [
                  ["greenvilleGame:spleefEliminations", Me.eliminations],
                  ["greenvilleGame:spleefWins", Me.wins]
                ]
              })
            })]
          })
        })
      })
    }

    function oy(ee) {
      let {
        rows: ie
      } = ee;
      const {
        t: He
      } = (0, Ee.v)();
      return (0, Oe.jsx)("ul", {
        className: "GreenvilleTrackerRows",
        children: ie.map((ee => {
          let [ie, ye] = ee;
          return (0, Oe.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, Oe.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: He(ie)
            }), (0, Oe.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: (0, ce.h)(ye)
            })]
          }, ie)
        }))
      })
    }

    function Ry(ee) {
      let {
        levels: ie
      } = ee;
      const {
        t: He
      } = (0, Ee.v)();
      return (0, Oe.jsxs)("div", {
        className: "GreenvilleTrackerCard GreenvilleJobsStrip",
        children: [(0, Oe.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: He("greenvilleGame:jobs")
        }), (0, Oe.jsx)("ul", {
          className: "GreenvilleJobsStripJobs",
          children: Ke.map(((ee, ye) => {
            const be = ie[ye];
            return (0, Oe.jsxs)("li", {
              className: fe()("GreenvilleJobsStripJob", {
                Max: be >= 50
              }),
              "aria-label": He("greenvilleGame:jobLevel", {
                job: He(`greenvilleGame:${ee}`),
                level: be
              }),
              children: [(0, Oe.jsx)("span", {
                className: "GreenvilleJobsStripIcon",
                "aria-hidden": "true",
                children: (0, Oe.jsx)(Xe.c, {
                  itemName: Ky[ee],
                  amount: 0
                })
              }), (0, Oe.jsx)("span", {
                className: "GreenvilleJobsStripLevel",
                "aria-hidden": "true",
                children: He("greenvilleGame:levelShort", {
                  level: be
                })
              })]
            }, ee)
          }))
        })]
      })
    }

    function ky(ee) {
      let {
        job: {
          stats: ie,
          next: He
        }
      } = ee;
      const {
        t: ye
      } = (0, Ee.v)();
      return (0, Oe.jsxs)(Oe.Fragment, {
        children: [ie.length > 0 && (0, Oe.jsx)("div", {
          className: "GreenvilleTrackerCard",
          children: (0, Oe.jsx)("ul", {
            className: "GreenvilleTrackerRows",
            children: ie.map((ee => {
              let {
                stat: ie,
                value: He,
                max: be,
                boosted: Me
              } = ee;
              return (0, Oe.jsxs)("li", {
                className: "GreenvilleTrackerRow",
                children: [(0, Oe.jsx)("span", {
                  className: "GreenvilleTrackerLabel",
                  children: ye(Uy[ie])
                }), (0, Oe.jsxs)("span", {
                  className: fe()("GreenvilleTrackerValue", {
                    Boosted: Me
                  }),
                  children: [(0, ce.h)(He), null !== be && `/${(0,ce.h)(be)}`]
                })]
              }, ie)
            }))
          })
        }), null !== He && (0, Oe.jsxs)("div", {
          className: "GreenvilleTrackerCard GreenvilleNextUnlock",
          children: [(0, Oe.jsx)("span", {
            className: "GreenvilleNextUnlockEyebrow",
            children: ye("greenvilleGame:nextUnlock")
          }), (0, Oe.jsxs)("div", {
            className: "GreenvilleNextUnlockBody",
            children: [(0, Oe.jsx)("span", {
              className: "GreenvilleNextUnlockIcon",
              "aria-hidden": "true",
              children: (0, Oe.jsx)(Xe.c, {
                itemName: He.item,
                amount: 0
              })
            }), (0, Oe.jsxs)("span", {
              className: "GreenvilleNextUnlockText",
              children: [(0, Oe.jsx)("strong", {
                className: "GreenvilleNextUnlockName",
                children: ye(He.nameKey)
              }), (0, Oe.jsx)("span", {
                className: "GreenvilleNextUnlockLevel",
                children: ye("greenvilleGame:unlockAtLevel", {
                  level: He.level
                })
              })]
            })]
          })]
        })]
      })
    }

    function qy(ee) {
      let {
        home: ie
      } = ee;
      const {
        t: He,
        selectedLanguage: ye
      } = (0, Ee.v)(), be = (0, Yi.k)("hiddenPlayerNames");
      return (0, Oe.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: [(0, Oe.jsxs)("strong", {
          className: "GreenvilleTrackerTitle GreenvilleBestTimesTitle",
          children: [(0, Oe.jsx)(re.e, {
            name: "trophy"
          }), He("greenvilleGame:parkourBestTimes")]
        }), (0, Oe.jsx)("ol", {
          className: "GreenvilleTrackerRows",
          children: ie.bestTimes.slice(0, 3).map(((ee, ie) => {
            let {
              playerName: Me,
              seconds: Ke
            } = ee;
            return (0, Oe.jsxs)("li", {
              className: fe()("GreenvilleTrackerRow GreenvilleBestTime", {
                First: 0 === ie
              }),
              children: [(0, Oe.jsx)("span", {
                className: "GreenvilleBestTimeRank",
                children: ie + 1
              }), (0, Oe.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: (0, sH.h)(Me, be)
              }), (0, Oe.jsx)("span", {
                className: "GreenvilleTrackerValue",
                children: He("greenvilleGame:parkourTime", {
                  seconds: Ke.toLocaleString(ye.code, {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1
                  })
                })
              })]
            }, `${ie}|${Me}`)
          }))
        })]
      })
    }
    const fy = "greenvilleLevelUpsView";
    class Ty {
      constructor(ee) {
        this.publishLevelUps = ee, this.levelUps = [], this.token = 0, this.revealed = ee => {
          this.setLevelUps(this.levelUps.filter((ie => ie.token !== ee)))
        }
      }
      getLevelUps() {
        return this.levelUps
      }
      DR(ee) {
        const [ie, He, ye] = ee;
        this.setLevelUps([...this.levelUps, {
          job: ie,
          level: He,
          unlock: null === ye ? null : {
            item: ye[0],
            nameKey: ye[1],
            level: ye[2]
          },
          token: ++this.token
        }])
      }
      setLevelUps(ee) {
        this.levelUps = ee, this.publishLevelUps(ee)
      }
    }
    const py = [{
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
      Xy = Array.from({
        length: 16
      }, ((ee, ie) => ({
        "--angle": 360 * ie / 16 + ie % 3 * 7 + "deg",
        "--distance": 5 + ie % 4 * 1.2 + "rem",
        "--delay": ie % 5 * 30 + "ms"
      })));

    function zy(ee) {
      let {
        controller: ie
      } = ee;
      (0, ze.j)(fy, null);
      const He = ie.getLevelUps();
      return 0 === He.length ? null : (0, ae.createPortal)((0, Oe.jsx)(By, {
        levelUp: He[0],
        onDone: ie.revealed
      }, He[0].token), document.body)
    }

    function By(ee) {
      let {
        levelUp: ie,
        onDone: He
      } = ee;
      const {
        t: ye
      } = (0, Ee.v)(), be = (0, Ue.useRef)(null), {
        unlock: Me
      } = ie, Ke = null === Me ? 2600 : 4200;
      (0, Ue.useLayoutEffect)((() => {
        const ee = document.querySelector(".GreenvilleTopBar");
        ee && be.current.style.setProperty("--top-bar-bottom", `${ee.getBoundingClientRect().bottom}px`)
      }), []), (0, Ue.useEffect)((() => {
        const ee = be.current.animate(py, {
          duration: Ke,
          fill: "both"
        });
        return ee.onfinish = () => {
          He(ie.token)
        }, () => {
          ee.onfinish = null, ee.cancel()
        }
      }), [ie, Ke, He]);
      const Fe = ye(`greenvilleGame:${ie.job}`);
      return (0, Oe.jsxs)("div", {
        ref: be,
        className: fe()("GreenvilleLevelUpReveal", {
          Plain: null === Me
        }),
        style: {
          "--reveal-ms": `${Ke}ms`
        },
        role: "status",
        children: [null !== Me && (0, Oe.jsx)("div", {
          className: "GreenvilleLevelUpRevealStage",
          "aria-hidden": "true",
          children: (0, Oe.jsxs)("div", {
            className: "GreenvilleLevelUpRevealMover",
            children: [(0, Oe.jsx)("div", {
              className: "GreenvilleLevelUpRevealRays"
            }), (0, Oe.jsx)("div", {
              className: "GreenvilleLevelUpRevealGlow"
            }), (0, Oe.jsx)("div", {
              className: "GreenvilleLevelUpRevealSparks",
              children: Xy.map(((ee, ie) => (0, Oe.jsx)("span", {
                style: ee
              }, ie)))
            }), (0, Oe.jsx)("div", {
              className: "GreenvilleLevelUpRevealIcon",
              children: (0, Oe.jsx)(Xe.c, {
                itemName: Me.item,
                amount: 0
              })
            })]
          })
        }), (0, Oe.jsxs)("div", {
          className: "GreenvilleLevelUpRevealText",
          children: [null !== Me && (0, Oe.jsxs)(Oe.Fragment, {
            children: [(0, Oe.jsx)("span", {
              className: "GreenvilleLevelUpRevealHeading SmallTextBold",
              children: ye("greenvilleGame:levelUpUnlockHeading", {
                job: Fe,
                level: Me.level
              })
            }), (0, Oe.jsx)("span", {
              className: "GreenvilleLevelUpRevealName FullyFancyText",
              children: ye(Me.nameKey)
            })]
          }), null === Me && (0, Oe.jsxs)(Oe.Fragment, {
            children: [(0, Oe.jsx)("span", {
              className: "GreenvilleLevelUpRevealHeading SmallTextBold",
              children: ye("greenvilleGame:levelUpHeading")
            }), (0, Oe.jsx)("span", {
              className: "GreenvilleLevelUpRevealName FullyFancyText",
              children: ye("greenvilleGame:jobLevel", {
                job: Fe,
                level: ie.level
              })
            })]
          })]
        })]
      })
    }
    const Ey = "greenvilleMarketView";

    function gy(ee) {
      return ee.map((ee => {
        let [ie, He, ye, be, Me, Ke] = ee;
        return {
          key: `${ie}|${He}|${ye}|${be}|${Me}`,
          icon: ie,
          target: [He, ye, be],
          item: Me,
          label: Ke
        }
      }))
    }
    class Oy {
      constructor(ee) {
        this.yR = ee, this.view = null
      }
      getView() {
        return this.view
      }
      DR(ee) {
        const ie = performance.now();
        switch (ee[0]) {
          case "hide":
            this.view = null;
            break;
          case "marketIdle":
            this.view = {
              job: null,
              waypoints: gy(ee[1])
            };
            break;
          case "marketPick":
          case "marketStock": {
            const [He, ye, be, Me] = ee;
            this.view = {
              job: {
                kind: He,
                goods: ye,
                tipEndsAt: Me > 0 ? ie + Me : 0
              },
              waypoints: gy(be)
            };
            break
          }
          case "marketDeliver": {
            const [He, ye, be, Me, Ke, Ue] = ee;
            this.view = {
              job: {
                kind: He,
                parcelsLeft: ye,
                delivered: be,
                gold: Me,
                endsAt: ie + Ue
              },
              waypoints: gy(Ke)
            };
            break
          }
        }
        this.yR(this.view)
      }
    }
    var dy = He(40282);
    const Wy = [{
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

    function ty(ee) {
      var ie;
      let {
        controller: He
      } = ee;
      (0, ze.j)(Ey, null);
      const ye = null === (ie = He.getView()) || void 0 === ie ? void 0 : ie.job;
      return "marketDeliver" !== (null === ye || void 0 === ye ? void 0 : ye.kind) ? null : (0, Oe.jsx)(Zy, {
        endsAt: ye.endsAt,
        delivered: ye.delivered
      })
    }

    function Zy(ee) {
      let {
        endsAt: ie,
        delivered: He
      } = ee;
      const {
        t: ye
      } = (0, Ee.v)(), be = Math.max(0, Math.ceil((0, dy.d)(ie))), Me = (0, Ue.useRef)(null), Ke = (0, Ue.useRef)(null), Fe = (0, Ue.useRef)({
        endsAt: ie,
        delivered: He
      }), [Je, oe] = (0, Ue.useState)(null);
      (0, Ue.useLayoutEffect)((() => {
        const ee = He > Fe.current.delivered ? Math.round((ie - Fe.current.endsAt) / 1e3) : 0;
        var ye;
        (Fe.current = {
          endsAt: ie,
          delivered: He
        }, ee <= 0) || (oe((ie => {
          var He;
          return {
            seconds: ee,
            token: (null !== (He = null === ie || void 0 === ie ? void 0 : ie.token) && void 0 !== He ? He : 0) + 1
          }
        })), window.matchMedia("(prefers-reduced-motion: reduce)").matches || (null === (ye = Ke.current) || void 0 === ye || ye.cancel(), Ke.current = Me.current.animate(Wy, {
          duration: 420,
          easing: "ease-out"
        })))
      }), [ie, He]), (0, Ue.useEffect)((() => () => {
        var ee;
        null === (ee = Ke.current) || void 0 === ee || ee.cancel()
      }), []);
      const Re = Math.floor(be / 60);
      return (0, Oe.jsxs)("div", {
        className: fe()("GreenvilleMarketCountdown", {
          Urgent: be < 10
        }),
        role: "timer",
        children: [(0, Oe.jsxs)("div", {
          ref: Me,
          className: "GreenvilleMarketCountdownTime FullyFancyText",
          children: [Re, ":", String(be % 60).padStart(2, "0")]
        }), null !== Je && (0, Oe.jsx)("div", {
          className: "GreenvilleMarketCountdownAdded FullyFancyText",
          onAnimationEnd: () => {
            oe(null)
          },
          children: ye("greenvilleGame:marketCountdownAdded", {
            seconds: Je.seconds
          })
        }, Je.token)]
      })
    }

    function wy(ee) {
      var ie;
      let {
        controller: He
      } = ee;
      (0, ze.j)(Ey, null);
      const ye = null === (ie = He.getView()) || void 0 === ie ? void 0 : ie.job;
      return ye ? (0, Oe.jsxs)("div", {
        className: "GreenvilleTrackerCard",
        children: ["marketDeliver" === ye.kind && (0, Oe.jsx)(Ay, {
          shift: ye
        }), "marketDeliver" !== ye.kind && (0, Oe.jsx)(Dy, {
          task: ye
        })]
      }) : null
    }

    function Dy(ee) {
      let {
        task: ie
      } = ee;
      const {
        t: He
      } = (0, Ee.v)(), ye = "marketPick" === ie.kind && ie.goods.every((ee => {
        let [, ie] = ee;
        return 0 === ie
      }));
      return (0, Oe.jsxs)(Oe.Fragment, {
        children: [(0, Oe.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: He("marketPick" === ie.kind ? "greenvilleGame:marketPanelOrder" : "greenvilleGame:marketPanelCrate")
        }), (0, Oe.jsx)("ul", {
          className: "GreenvilleTrackerRows",
          children: ie.goods.map((ee => {
            let [ie, ye, be] = ee;
            return (0, Oe.jsxs)("li", {
              className: fe()("GreenvilleTrackerRow", {
                Done: 0 === ye
              }),
              children: [(0, Oe.jsx)("span", {
                className: "GreenvilleTrackerIcon",
                "aria-hidden": "true",
                children: (0, Oe.jsx)(Xe.c, {
                  itemName: ie,
                  amount: 0
                })
              }), (0, Oe.jsx)("span", {
                className: "GreenvilleTrackerLabel",
                children: (0, vH.f)(He, ie)
              }), (0, Oe.jsxs)("span", {
                className: "GreenvilleTrackerValue",
                children: [be - ye, "/", be]
              })]
            }, ie)
          }))
        }), ye && (0, Oe.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: He("greenvilleGame:marketPanelReturn")
        }), !ye && 0 !== ie.tipEndsAt && (0, Oe.jsx)(Py, {
          endsAt: ie.tipEndsAt
        })]
      })
    }

    function Py(ee) {
      let {
        endsAt: ie
      } = ee;
      const {
        t: He
      } = (0, Ee.v)(), ye = Math.ceil((0, dy.d)(ie));
      return ye <= 0 ? null : (0, Oe.jsx)("div", {
        className: "GreenvilleTrackerTip",
        children: He("greenvilleGame:marketPanelTip", {
          seconds: ye
        })
      })
    }

    function Ay(ee) {
      let {
        shift: ie
      } = ee;
      const {
        t: He
      } = (0, Ee.v)();
      return (0, Oe.jsxs)(Oe.Fragment, {
        children: [(0, Oe.jsx)("strong", {
          className: "GreenvilleTrackerTitle",
          children: He("greenvilleGame:marketPanelDeliveries")
        }), (0, Oe.jsxs)("ul", {
          className: "GreenvilleTrackerRows",
          children: [(0, Oe.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, Oe.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: He("greenvilleGame:marketPanelParcels")
            }), (0, Oe.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: ie.parcelsLeft
            })]
          }), (0, Oe.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, Oe.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: He("greenvilleGame:marketPanelDelivered")
            }), (0, Oe.jsx)("span", {
              className: "GreenvilleTrackerValue",
              children: ie.delivered
            })]
          }), (0, Oe.jsxs)("li", {
            className: "GreenvilleTrackerRow",
            children: [(0, Oe.jsx)("span", {
              className: "GreenvilleTrackerLabel",
              children: He("greenvilleGame:marketPanelEarned")
            }), (0, Oe.jsx)("span", {
              className: "GreenvilleTrackerIcon",
              "aria-hidden": "true",
              children: (0, Oe.jsx)(Xe.c, {
                itemName: "Gold Coin",
                amount: 0
              })
            }), (0, Oe.jsx)("span", {
              className: "GreenvilleTrackerValue Gold",
              children: (0, ce.h)(ie.gold)
            })]
          })]
        }), 0 === ie.parcelsLeft && (0, Oe.jsx)("div", {
          className: "GreenvilleTrackerReady",
          role: "status",
          children: He("greenvilleGame:marketPanelBackToBay")
        })]
      })
    }
    const Yy = {
      marketNpc: "comment-dots",
      marketShelf: "cart-shopping",
      marketHouse: "house",
      marketDepot: "truck"
    };

    function Vy(ee) {
      var ie;
      let {
        market: He,
        markers: ye
      } = ee;
      (0, ze.j)(Ey, null);
      const be = null === (ie = He.getView()) || void 0 === ie ? void 0 : ie.waypoints;
      return null !== be && void 0 !== be && be.length ? (0, Oe.jsx)("div", {
        className: "GreenvilleMarketWaypoints",
        children: be.map((ee => (0, Oe.jsx)(ay, {
          waypoint: ee,
          bind: ye.waypoints.bindMarker(ee.key)
        }, ee.key)))
      }) : null
    }

    function ay(ee) {
      let {
        waypoint: {
          icon: ie,
          item: He,
          label: ye
        },
        bind: be
      } = ee;
      const Me = "marketHouse" === ie;
      return (0, Oe.jsxs)("div", {
        ref: be,
        className: fe()("GreenvilleMarketWaypoint", {
          House: Me
        }),
        children: [Me && (0, Oe.jsx)(cy, {}), (0, Oe.jsxs)("div", {
          className: "GreenvilleMarketWaypointBadge",
          children: [null !== He && (0, Oe.jsx)("span", {
            className: "GreenvilleMarketWaypointItem",
            children: (0, Oe.jsx)(Xe.c, {
              itemName: He,
              amount: 0
            })
          }), null === He && (0, Oe.jsx)(re.e, {
            name: Yy[ie]
          })]
        }), (0, Oe.jsxs)("div", {
          className: "GreenvilleMarketWaypointLabels",
          children: [null !== ye && (0, Oe.jsx)("span", {
            className: "GreenvilleMarketWaypointLabel SmallTextBold",
            children: ye
          }), (0, Oe.jsx)("span", {
            className: "GreenvilleMarketWaypointDistance SmallTextBold"
          })]
        })]
      })
    }

    function cy() {
      const ee = (0, Ue.useRef)(null);
      return (0, EH.e)(ee), (0, Oe.jsx)("span", {
        ref: ee,
        className: "GreenvilleMarketWaypointPulse"
      })
    }
    var xy = He(40287);
    class Ly {
      constructor(ee) {
        this.market = ee, this.waypoints = new xy.e({
          labels: "GreenvilleMarketWaypointLabels",
          distance: "GreenvilleMarketWaypointDistance"
        }, "greenvilleGame:marketDistance")
      }
      frame(ee, ie) {
        this.waypoints.setRender(ee);
        const He = this.market.getView();
        if (He && this.waypoints.hasMarkers())
          for (const {
              key: ye,
              target: be
            }
            of He.waypoints) this.waypoints.update(ye, be[0], be[1] + 1, be[2], ie)
      }
    }
    const Cy = {
      Street: "St",
      Avenue: "Ave",
      Road: "Rd",
      Lane: "Ln"
    };

    function vy(ee, ie) {
      return ie.map(((ie, He) => {
        const ye = ie.lastIndexOf(" "),
          be = ie.slice(ye + 1);
        let Me = Cy[be];
        return void 0 === Me && (console.warn(`Greenville street "${ie}" has no suffix abbreviation`), Me = be), {
          axis: ee,
          line: He,
          name: ie,
          shortName: ie.slice(0, ye),
          suffix: Me
        }
      }))
    }
    const uy = {
        eastWest: vy("eastWest", ["Hillcrest Road", "Oak Street", "Main Street", "Elm Street", "Harbour Road"]),
        northSouth: vy("northSouth", ["Willow Lane", "Birch Avenue", "Market Street", "Maple Avenue", "Station Road"])
      },
      my = {
        kind: "outside"
      };

    function ly(ee, ie, He) {
      return 100 * (ee + 1) + ie + (He ? 1 : 0)
    }

    function Sy(ee, ie, He, ye) {
      return {
        x0: GH + ee,
        z0: GH + ie,
        x1: GH + ee + He - 1,
        z1: GH + ie + ye - 1
      }
    }
    let ny = null;

    function jy(ee, ie, He, ye) {
      if (ye && "outside" !== ye.kind) {
        const {
          box: He
        } = ye;
        if (!iy(He, ee, ie) && iy({
            x0: He.x0 - 2,
            z0: He.z0 - 2,
            x1: He.x1 + 2,
            z1: He.z1 + 2
          }, ee, ie)) return ye
      }
      return function(ee, ie, He) {
        const {
          eastWest: ye,
          northSouth: be
        } = uy;
        switch (ee.kind) {
          case "outside":
            return my;
          case "street": {
            const ie = ee.segment * QH + rH,
              He = ee.line * QH;
            return {
              kind: "street",
              box: "eastWest" === ee.axis ? Sy(ie, He, QH - rH, rH) : Sy(He, ie, rH, QH - rH),
              street: uy[ee.axis][ee.line],
              block: 100 * (ee.segment + 1)
            }
          }
          case "junction": {
            const Me = Sy(ee.column * QH, ee.row * QH, rH, rH),
              Ke = [ye[ee.row], be[ee.column]],
              Ue = "street" === (null === He || void 0 === He ? void 0 : He.kind) ? He.street : "junction" === (null === He || void 0 === He ? void 0 : He.kind) ? He.along : null,
              Fe = Ue && Ke.includes(Ue) ? Ue : Math.abs(Math.sin(ie)) > Math.abs(Math.cos(ie)) ? Ke[0] : Ke[1];
            return {
              kind: "junction",
              box: Me,
              along: Fe,
              cross: Fe === Ke[0] ? Ke[1] : Ke[0]
            }
          }
          case "plot": {
            const ie = ee.column * QH + rH + ee.dx * rH,
              He = ee.row * QH + rH + ee.dz * rH,
              be = 0 === ee.dz;
            return {
              kind: "plot",
              box: Sy(ie, He, rH, rH),
              plotId: (Me = (GH + ie) / rH, Ke = (GH + He) / rH, ny || (ny = new Map(My().map(((ee, ie) => {
                let {
                  chunk: He
                } = ee;
                return [`${He[0]},${He[2]}`, ie + 1]
              })))), ny.get(`${Me},${Ke}`)),
              number: ly(ee.column, 0 === ee.dx ? 30 : 70, be),
              street: ye[be ? ee.row : ee.row + 1],
              neighbourhood: ee.neighbourhood
            }
          }
          case "tile": {
            const {
              column: ie,
              row: He,
              district: be
            } = ee;
            return {
              kind: "tile",
              box: Sy(ie * QH + rH, He * QH + rH, QH - rH, QH - rH),
              district: be,
              number: ly(ie, 50, !0),
              street: ye[He]
            }
          }
        }
        var Me, Ke
      }(function(ee, ie) {
        const He = ee - GH,
          ye = ie - GH;
        if (He < 0 || ye < 0 || He >= ey || ye >= ey) return {
          kind: "outside"
        };
        const be = Math.floor(He / QH),
          Me = Math.floor(ye / QH),
          Ke = He - be * QH - rH,
          Ue = ye - Me * QH - rH;
        if (Ke < 0 && Ue < 0) return {
          kind: "junction",
          column: be,
          row: Me
        };
        if (Ue < 0) return {
          kind: "street",
          axis: "eastWest",
          line: Me,
          segment: be
        };
        if (Ke < 0) return {
          kind: "street",
          axis: "northSouth",
          line: be,
          segment: Me
        };
        const Fe = Hy[Me][be];
        return "residential" === Fe.kind ? {
          kind: "plot",
          column: be,
          row: Me,
          dx: Math.floor(Ke / rH),
          dz: Math.floor(Ue / rH),
          neighbourhood: Fe.name
        } : {
          kind: "tile",
          column: be,
          row: Me,
          district: Fe.district
        }
      }(ee, ie), He, ye)
    }

    function sy(ee) {
      switch (ee.kind) {
        case "outside":
          return "outside";
        case "junction":
          return `junction|${ee.along.name}|${ee.cross.name}`;
        case "plot":
        case "tile":
          return `${ee.kind}|${ee.number}|${ee.street.name}`;
        case "street":
          return `street|${ee.block}|${ee.street.name}`
      }
    }
    var Iy = He(40306),
      hy = He(40301),
      Ny = He(242);
    const Gy = IH.g.BR;
    class ry {
      constructor(ee, ie, He) {
        this.api = ee, this.map = ie, this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.image = this.context.createImageData(Gy, Gy), this.columns = void 0, this.lowestLayer = void 0, this.layers = void 0, this.plots = void 0, this.baked = null, this.xf = !1, this.ids = new Uint16Array(Gy * Gy), this.tops = new Int32Array(Gy * Gy), this.edgeIds = new Uint16Array(Gy), this.edgeTops = new Int32Array(Gy), this.heights = void 0, this.versions = void 0, this.current = void 0, this.stale = void 0, this.painted = void 0, this.order = [], this.focus = {
          column: -1,
          row: -1
        }, this.colours = null, this.host = null, this.timer = null, this.cancelIdle = null, this.pass = ee => {
          this.cancelIdle = null;
          let ie = !1;
          const He = performance.now();
          let ye = !0;
          if (this.colours && this.host && this.host.clientWidth > 0)
            for (const be of this.order) {
              if (!this.readVersions(be)) continue;
              const Me = !ee.didTimeout && ee.timeRemaining() < 2;
              if (!ye && (Me || performance.now() - He > 6)) {
                ie = !0;
                break
              }
              ye = !1, this.versions.set(this.current, be * this.layers), this.paint(be % this.columns, Math.floor(be / this.columns), this.colours.lookup, this.colours.drawn)
            }
          this.schedule(ie ? 0 : 500)
        };
        const {
          origin: ye,
          size: be,
          rb: Me,
          Qb: Ke
        } = ie.area;
        this.columns = be / Gy, this.lowestLayer = Me / Gy, this.layers = (Ke - Me) / Gy, this.plots = new Set(He.map((ee => {
          let {
            chunkX: ie,
            chunkZ: He
          } = ee;
          return He * this.columns + ie
        }))), this.heights = new Int32Array(be * be).fill(Iy.h), this.versions = new Float64Array(this.columns * this.columns * this.layers).fill(NaN), this.current = new Float64Array(this.layers), this.stale = new Uint8Array(this.columns * this.columns), this.painted = new Uint8Array(this.columns * this.columns), this.canvas.width = be, this.canvas.height = be, this.canvas.className = "GreenvilleNavMapTerrain", 0 !== He.length ? (this.focusOn(ye + be / 2, ye + be / 2), Promise.all([(0, hy.b)(), this.drawBakedMap()]).then((ee => {
          let [ie] = ee;
          this.colours = {
            lookup: ie,
            drawn: ie.getDrawnIds()
          }
        }), (ee => {
          console.error("Greenville map: block colours failed to load", ee)
        })), this.schedule(0)) : this.drawBakedMap()
      }
      mount(ee) {
        this.host = ee, null === ee || void 0 === ee || ee.replaceChildren(this.canvas)
      }
      focusOn(ee, ie) {
        const {
          columns: He
        } = this, {
          origin: ye
        } = this.map.area, be = Math.min(He - 1, Math.max(0, Math.floor((ee - ye) / Gy))), Me = Math.min(He - 1, Math.max(0, Math.floor((ie - ye) / Gy)));
        be === this.focus.column && Me === this.focus.row || (this.focus = {
          column: be,
          row: Me
        }, this.order = [...this.plots].sort(((ee, ie) => Math.hypot(ee % He - be, Math.floor(ee / He) - Me) - Math.hypot(ie % He - be, Math.floor(ie / He) - Me))))
      }
      forget(ee, ie) {
        const He = ie * this.columns + ee;
        this.stale[He] = 1, this.versions.fill(NaN, He * this.layers, (He + 1) * this.layers)
      }
      dispose() {
        var ee, ie;
        null !== this.timer && clearTimeout(this.timer), null === (ee = this.cancelIdle) || void 0 === ee || ee.call(this), this.host = null, this.xf = !0, null === (ie = this.baked) || void 0 === ie || ie.close(), this.baked = null
      }
      async drawBakedMap() {
        try {
          const ee = await fetch(this.map.imageUrl);
          if (!ee.ok) throw new Error(`HTTP ${ee.status}`);
          const ie = await createImageBitmap(await ee.blob(), {
            colorSpaceConversion: "none"
          });
          if (this.xf) return void ie.close();
          this.baked = ie, this.context.drawImage(ie, 0, 0)
        } catch (ee) {
          console.error("Greenville map: the baked map failed to load", ee)
        }
      }
      schedule(ee) {
        this.timer = setTimeout((() => {
          this.timer = null, this.cancelIdle = (0, Ny.e)(this.pass, {
            timeoutMs: 1e3
          })
        }), ee)
      }
      readVersions(ee) {
        const {
          origin: ie
        } = this.map.area, He = ie / Gy + ee % this.columns, ye = ie / Gy + Math.floor(ee / this.columns);
        let be = !1;
        for (let Ke = 0; Ke < this.layers; Ke++) {
          var Me;
          const ie = null !== (Me = this.api.getChunkVersion(He, this.lowestLayer + Ke, ye)) && void 0 !== Me ? Me : 0;
          this.current[Ke] = ie, be ||= ie !== this.versions[ee * this.layers + Ke]
        }
        return be
      }
      repaintIfPainted(ee, ie) {
        const He = ie * this.columns + ee;
        ee < this.columns && ie < this.columns && 1 === this.painted[He] && this.versions.fill(NaN, He * this.layers, (He + 1) * this.layers)
      }
      storeHeights(ee, ie) {
        const {
          size: He
        } = this.map.area;
        let ye = !1,
          be = !1;
        for (let Me = 0; Me < this.ids.length; Me++) {
          const Ke = Me % Gy,
            Ue = Math.floor(Me / Gy),
            Fe = (ie * Gy + Ue) * He + ee * Gy + Ke,
            Je = 0 === this.ids[Me] ? Iy.h : this.tops[Me];
          this.heights[Fe] !== Je && (ye ||= Ke === Gy - 1, be ||= Ue === Gy - 1, this.heights[Fe] = Je)
        }
        ye && this.repaintIfPainted(ee + 1, ie), be && this.repaintIfPainted(ee, ie + 1)
      }
      readEdgeHeights(ee, ie, He, ye, be) {
        const {
          origin: Me,
          size: Ke,
          rb: Ue,
          Qb: Fe
        } = this.map.area;
        this.api.readColumnTops(ee, ie, He, ye, Ue, Fe, be, this.edgeIds, this.edgeTops);
        const Je = He - ee;
        for (let oe = 0; oe < Gy; oe++) {
          const He = (ie - Me + Math.floor(oe / Je)) * Ke + ee - Me + oe % Je;
          this.heights[He] = 0 === this.edgeIds[oe] ? Iy.h : this.edgeTops[oe]
        }
      }
      paint(ee, ie, He, ye) {
        const {
          origin: be,
          size: Me,
          rb: Ke,
          Qb: Ue
        } = this.map.area, Fe = ie * this.columns + ee, Je = 1 === this.stale[Fe];
        this.stale[Fe] = 0;
        const oe = be + ee * Gy,
          Re = be + ie * Gy,
          ke = Me - (ee + 1) * Gy,
          {
            ids: qe,
            tops: fe,
            heights: Te
          } = this;
        if (0 === this.current[0 - this.lowestLayer]) return void(Je && (this.context.clearRect(ke, ie * Gy, Gy, Gy), this.baked && this.context.drawImage(this.baked, ke, ie * Gy, Gy, Gy, ke, ie * Gy, Gy, Gy), qe.fill(0), this.storeHeights(ee, ie)));
        this.painted[Fe] = 1, this.api.readColumnTops(oe, Re, oe + Gy, Re + Gy, Ke, Ue, ye, qe, fe), this.storeHeights(ee, ie), this.plots.has(Fe - 1) || this.readEdgeHeights(oe - 1, Re, oe, Re + Gy, ye), this.plots.has(Fe - this.columns) || this.readEdgeHeights(oe, Re - 1, oe + Gy, Re, ye);
        const pe = this.image.data;
        for (let Xe = 0; Xe < Gy; Xe++)
          for (let ye = 0; ye < Gy; ye++) {
            const be = 4 * (Xe * Gy + Gy - 1 - ye),
              Ke = qe[Xe * Gy + ye];
            if (0 === Ke) {
              pe[be + 3] = 0;
              continue
            }
            const Ue = ee * Gy + ye,
              Fe = ie * Gy + Xe;
            He.drawPixel(pe, be, Ke, fe[Xe * Gy + ye], Te[(Fe - 1) * Me + Ue], Te[Fe * Me + Ue - 1])
          }
        this.context.putImageData(this.image, ke, ie * Gy)
      }
    }
    const Qy = "greenvilleNavAddress",
      eb = "greenvilleNavPlots",
      ib = "greenvilleNavMarkers",
      Hb = 5 * Math.PI / 180,
      yb = {
        kind: "outside"
      };
    class bb {
      constructor(ee, ie, He, ye) {
        this.map = ee, this.publishAddress = ie, this.publishPlots = He, this.publishMarkers = ye, this.address = yb, this.addressKey = sy(yb), this.block = {
          x: NaN,
          z: NaN
        }, this.plots = void 0, this.markers = [], this.terrain = null, this.xR = null, this.worldResize = null, this.worldPx = 0, this.arrowTrack = null, this.arrow = null, this.zoom = 0, this.lastFrameMs = NaN, this.written = {
          u: NaN,
          v: NaN,
          scale: NaN,
          heading: NaN
        }, this.reducedMotion = null, this.logLocalScale = void 0, this.mountTerrain = ee => {
          this.terrain.mount(ee)
        }, this.mountWorld = ee => {
          var ie;
          this.xR = ee, this.written = {
            u: NaN,
            v: NaN,
            scale: NaN,
            heading: NaN
          }, null === (ie = this.worldResize) || void 0 === ie || ie.disconnect(), this.worldResize = null, ee && (this.worldResize = new ResizeObserver((ee => {
            let [ie] = ee;
            this.worldPx = ie.contentRect.width, this.written.u = NaN
          })), this.worldResize.observe(ee))
        }, this.mountArrow = ee => {
          var ie;
          this.arrowTrack = ee, this.arrow = null !== (ie = null === ee || void 0 === ee ? void 0 : ee.firstElementChild) && void 0 !== ie ? ie : null, this.written = {
            u: NaN,
            v: NaN,
            scale: NaN,
            heading: NaN
          }
        };
        const {
          origin: be,
          size: Me
        } = ee.area;
        this.logLocalScale = Math.log(Me / 80), this.plots = {
          plots: (ee.city ? My() : []).map(((ee, ie) => {
            let {
              chunk: He,
              facing: ye
            } = ee;
            return {
              plotId: ie + 1,
              chunkX: He[0] - be / IH.g.BR,
              chunkZ: He[2] - be / IH.g.BR,
              facing: ye,
              state: "vacant",
              mine: !1
            }
          })),
          animate: !1
        }
      }
      start(ee) {
        this.terrain = new ry(ee, this.map, this.plots.plots)
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
      DR(ee) {
        const ie = [...this.plots.plots];
        for (const [ye, be, Me] of "plotsAll" === ee[0] ? ee[1] : [ee[1]]) {
          const ee = ie[ye - 1];
          var He;
          if (ee.state === be && ee.mine === Me || (ie[ye - 1] = {
              ...ee,
              state: be,
              mine: Me
            }), ee.state !== be) null === (He = this.terrain) || void 0 === He || He.forget(ee.chunkX, ee.chunkZ)
        }
        this.plots = {
          plots: ie,
          animate: "plotsOne" === ee[0]
        }, this.publishPlots(this.plots)
      }
      receiveMarkers(ee) {
        this.markers = ee.map((ee => {
          const [ie, He] = [this.toMapUnits(ee[2]), this.toMapUnits(ee[3])];
          return "mapPlace" === ee[0] ? {
            kind: "place",
            place: ee[1],
            x: ie,
            z: He
          } : {
            kind: "npc",
            face: null === ee[1] ? "npc" : `npc_${ee[1]}`,
            x: ie,
            z: He
          }
        })), this.publishMarkers(this.markers)
      }
      frame(ee, ie, He) {
        if (!ie) return;
        const ye = Math.floor(ie[0]),
          be = Math.floor(ie[2]);
        if (ye !== this.block.x || be !== this.block.z) {
          this.block = {
            x: ye,
            z: be
          }, this.terrain.focusOn(ye, be), this.address = jy(ye, be, ee.cameraHeading, this.address);
          const ie = sy(this.address);
          ie !== this.addressKey && (this.addressKey = ie, this.publishAddress(this.address))
        }
        const Me = performance.now(),
          Ke = function(ee, ie, He) {
            return ee && (He || "plot" !== ie.kind && "tile" !== ie.kind) ? 0 : 1
          }(this.map.city, this.address, He);
        if (this.zoom !== Ke) {
          this.reducedMotion ??= window.matchMedia("(prefers-reduced-motion: reduce)");
          const ee = this.reducedMotion.matches ? 1 : 1 - Math.exp(-(Me - this.lastFrameMs) / 150);
          this.zoom += (Ke - this.zoom) * (Number.isNaN(ee) ? 1 : ee), Math.abs(Ke - this.zoom) < .002 && (this.zoom = Ke)
        }
        this.lastFrameMs = Me, this.isMapShown() && this.writeView(ie[0], ie[2], ee.cameraHeading)
      }
      toMapUnits(ee) {
        return (ee - this.map.area.origin) / IH.g.BR
      }
      writeView(ee, ie, He) {
        const {
          xR: ye,
          arrowTrack: be,
          arrow: Me,
          written: Ke
        } = this;
        if (!ye || !be || !Me) return;
        const {
          origin: Ue,
          size: Fe
        } = this.map.area, Je = (Ue + Fe - ee) / Fe, oe = (ie - Ue) / Fe, Re = Math.exp(this.zoom * this.logLocalScale), ke = Math.abs(Math.atan2(Math.sin(He - Ke.heading), Math.cos(He - Ke.heading))), qe = Re !== Ke.scale, fe = !(Math.hypot(Je - Ke.u, oe - Ke.v) * this.worldPx * Re < 1);
        if (qe || fe || !(ke < Hb)) {
          if (qe || fe) {
            this.written.u = Je, this.written.v = oe;
            const ee = Je + (.5 - Je) * this.zoom - Je * Re,
              ie = oe + (.5 - oe) * this.zoom - oe * Re;
            ye.style.transform = `translate(${100*ee}%, ${100*ie}%) scale(${Re})`, be.style.transform = `translate(${100*Je}%, ${100*oe}%)`
          }(qe || ke >= Hb) && (Me.style.transform = `translate(-50%, -50%) scale(${1/Re}) rotate(${180+180*He/Math.PI}deg)`, this.written.heading = He), qe && (ye.style.setProperty("--greenville-map-unzoom", String(1 / Re)), ye.style.setProperty("--greenville-map-zoom", String(this.zoom)), this.written.scale = Re)
        }
      }
    }
    var Mb = He(39376);
    const Kb = ey / IH.g.BR,
      Ub = `matrix(-1 0 0 1 ${Kb} 0)`,
      Fb = .08,
      Jb = [{
        transform: "scaleY(0)"
      }, {
        transform: "scaleY(1)"
      }],
      ob = [{
        opacity: 1
      }, {
        opacity: 0
      }],
      Rb = {
        quarry: Ky.mining,
        industry: Ky.demolition,
        market: Ky.market,
        lumberMill: Ky.woodcutting,
        farm: Ky.farming,
        dealership: "Light Blue Car"
      },
      kb = {
        drillBay: Ky.mining,
        vanBay: "Yellow Kart",
        carPickup: "Light Blue Car",
        demolitionPit: Ky.demolition,
        farmField: Ky.farming,
        woods: Ky.woodcutting
      },
      qb = Hy.flatMap(((ee, ie) => ee.flatMap(((ee, He) => "residential" === ee.kind ? [] : [{
        tile: ee,
        x: 1 + 3 * He,
        z: 1 + 3 * ie
      }])))),
      fb = [...uy.eastWest, ...uy.northSouth];

    function Tb(ee, ie) {
      return {
        left: (Kb - ee) / Kb * 100 + "%",
        top: ie / Kb * 100 + "%"
      }
    }

    function pb(ee) {
      let {
        axis: ie,
        line: He
      } = ee;
      const ye = .3,
        be = 3 * He + ye,
        Me = Kb - .6;
      return "eastWest" === ie ? {
        x: ye,
        y: be,
        width: Me,
        height: .4
      } : {
        x: be,
        y: ye,
        width: .4,
        height: Me
      }
    }

    function Xb(ee) {
      let {
        controller: ie
      } = ee;
      (0, ze.j)(eb, null);
      const {
        plots: He,
        animate: ye
      } = ie.getPlots(), {
        city: be
      } = ie.map;
      return (0, Oe.jsx)("div", {
        className: "GreenvilleNavMap",
        children: (0, Oe.jsxs)("div", {
          className: "GreenvilleNavMapWorld",
          ref: ie.mountWorld,
          children: [be && (0, Oe.jsx)("svg", {
            className: "GreenvilleNavMapPlan",
            viewBox: `0 0 ${Kb} ${Kb}`,
            preserveAspectRatio: "none",
            shapeRendering: "crispEdges",
            children: (0, Oe.jsxs)("g", {
              transform: Ub,
              children: [(0, Oe.jsx)("rect", {
                className: "GreenvilleNavGround",
                width: Kb,
                height: Kb
              }), fb.map((ee => (0, Oe.jsx)("rect", {
                className: "GreenvilleNavRoad",
                ...pb(ee)
              }, ee.name))), qb.map((ee => {
                let {
                  tile: ie,
                  x: He,
                  z: ye
                } = ee;
                return (0, Oe.jsx)("rect", {
                  className: "GreenvilleNavDistrict",
                  "data-district": ie.district,
                  x: He,
                  y: ye,
                  width: 2,
                  height: 2
                }, ie.district)
              })), He.map((ee => (0, Oe.jsx)(Bb, {
                plot: ee,
                animate: ye
              }, ee.plotId)))]
            })
          }), (0, Oe.jsx)("div", {
            className: "GreenvilleNavMapTerrainHost",
            ref: ie.mountTerrain
          }), be && (0, Oe.jsxs)(Oe.Fragment, {
            children: [(0, Oe.jsx)("svg", {
              className: "GreenvilleNavMapLots",
              viewBox: `0 0 ${Kb} ${Kb}`,
              preserveAspectRatio: "none",
              children: (0, Oe.jsx)("g", {
                transform: Ub,
                children: He.map((ee => (0, Oe.jsx)("rect", {
                  className: fe()("GreenvilleNavLot", {
                    Vacant: "vacant" === ee.state,
                    Loading: "loading" === ee.state,
                    Mine: ee.mine
                  }),
                  x: ee.chunkX + Fb,
                  y: ee.chunkZ + Fb,
                  width: .84,
                  height: .84
                }, ee.plotId)))
              })
            }), qb.map((ee => {
              let {
                tile: ie,
                x: He,
                z: ye
              } = ee;
              const be = Rb[ie.district];
              return be && (0, Oe.jsx)("span", {
                className: "GreenvilleNavPin GreenvilleNavLandmark",
                style: Tb(He + 1, ye + 1),
                children: (0, Oe.jsx)(Xe.c, {
                  itemName: be,
                  amount: 0
                })
              }, ie.district)
            })), (0, Oe.jsx)(zb, {
              controller: ie
            })]
          }), (0, Oe.jsx)("div", {
            className: "GreenvilleNavArrowTrack",
            ref: ie.mountArrow,
            children: (0, Oe.jsx)("div", {
              className: "GreenvilleNavArrow",
              children: (0, Oe.jsx)("svg", {
                viewBox: "-1 -1 2 2",
                children: (0, Oe.jsx)("polygon", {
                  points: "0,-0.8 0.62,0.62 0,0.28 -0.62,0.62"
                })
              })
            })
          }), He.map((ee => ee.mine && (0, Oe.jsx)("span", {
            className: "GreenvilleNavPin GreenvilleNavHome",
            style: Tb(ee.chunkX + .5, ee.chunkZ + ("north" === ee.facing ? 0 : 1)),
            children: (0, Oe.jsx)(re.e, {
              name: "house"
            })
          }, ee.plotId)))]
        })
      })
    }

    function zb(ee) {
      let {
        controller: ie
      } = ee;
      return (0, ze.j)(ib, null), (0, Oe.jsx)(Oe.Fragment, {
        children: ie.getMarkers().map(((ee, ie) => (0, Oe.jsxs)("span", {
          className: "GreenvilleNavPin GreenvilleNavMarker",
          style: Tb(ee.x, ee.z),
          children: ["npc" === ee.kind && (0, Oe.jsx)(Mb.b, {
            icon: ee.face
          }), "place" === ee.kind && (0, Oe.jsx)(Xe.c, {
            itemName: kb[ee.place],
            amount: 0
          })]
        }, ie)))
      })
    }
    const Bb = (0, Ue.memo)((function(ee) {
      let {
        plot: ie,
        animate: He
      } = ee;
      const ye = (0, Ue.useRef)(null),
        be = (0, Ue.useRef)(ie.state),
        Me = (0, Ue.useRef)(null);
      return (0, Ue.useLayoutEffect)((() => {
        var ee;
        const Ke = be.current;
        be.current = ie.state, Ke !== ie.state && (null === (ee = Me.current) || void 0 === ee || ee.cancel(), He && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && ("built" === ie.state ? Me.current = ye.current.animate(Jb, {
          duration: 300,
          easing: "ease-out"
        }) : "vacant" === ie.state && (Me.current = ye.current.animate(ob, {
          duration: 400,
          easing: "ease-in"
        }))))
      }), [ie.state]), (0, Ue.useEffect)((() => () => {
        var ee;
        null === (ee = Me.current) || void 0 === ee || ee.cancel()
      }), []), (0, Oe.jsxs)(Oe.Fragment, {
        children: [(0, Oe.jsx)("rect", {
          className: "GreenvilleNavPlotGrass",
          x: ie.chunkX + Fb,
          y: ie.chunkZ + Fb,
          width: .84,
          height: .84
        }), (0, Oe.jsx)("rect", {
          ref: ye,
          className: fe()("GreenvilleNavPlotRoof", {
            Loading: "loading" === ie.state,
            Built: "built" === ie.state,
            Mine: ie.mine
          }),
          x: ie.chunkX + Fb,
          y: ie.chunkZ + Fb,
          width: .84,
          height: .84
        })]
      })
    }));

    function Eb(ee) {
      let {
        controller: ie
      } = ee;
      const [He, ye] = (0, Ue.useState)((() => ie.isMapShown()));
      (0, ze.f)(Qy, (() => {
        ye(ie.isMapShown())
      }));
      const be = (0, Le.d)(),
        [Me, Ke] = (0, Ue.useState)(null);
      return function(ee) {
        (0, Ue.useLayoutEffect)((() => {
          if (!ee) return;
          const ie = ee.closest(".GreenvilleHudColumnStack"),
            He = new ResizeObserver((() => {
              ee.offsetWidth > 0 && ie.style.setProperty("--greenville-map-width", `${ee.offsetWidth}px`)
            }));
          return He.observe(ee), () => {
            He.disconnect()
          }
        }), [ee])
      }(Me), (0, Oe.jsx)("div", {
        className: fe()("GreenvilleNavRoom", {
          Hidden: be || !He
        }),
        children: (0, Oe.jsx)("div", {
          ref: Ke,
          className: "GreenvilleNav",
          children: (0, Oe.jsx)(Xb, {
            controller: ie
          })
        })
      })
    }
    const gb = IH.g.BR,
      Ob = {
        origin: GH,
        size: ey,
        rb: -2 * gb,
        Qb: 4 * gb
      },
      db = {
        origin: 1562 * gb,
        size: 13 * gb,
        rb: 0,
        Qb: 5 * gb
      },
      Wb = He.p + "static/media/greenvilleCity.7b141fefdb213c21b37a.png",
      tb = He.p + "static/media/greenvilleGrove.71253c8c4ae6c9cacba5.png",
      Zb = {
        area: Ob,
        imageUrl: Wb,
        city: !0
      },
      wb = {
        area: db,
        imageUrl: tb,
        city: !1
      };

    function Db(ee) {
      return ee >= 75 ? "face-smile" : ee >= 50 ? "face-diagonal-mouth" : ee >= 25 ? "face-worried" : "face-dizzy"
    }

    function Pb(ee) {
      const ie = Math.round(ee);
      return `${ie>0?"+":""}${ie}%`
    }

    function Ab(ee) {
      let {
        controller: ie
      } = ee;
      (0, ze.j)(lH, null);
      const He = ie.getMood();
      return He ? (0, Oe.jsx)(pe.d, {
        placement: "statBars",
        children: (0, Oe.jsx)(Yb, {
          mood: He
        })
      }) : null
    }

    function Yb(ee) {
      let {
        mood: ie
      } = ee;
      const {
        t: He
      } = (0, Ee.v)(), ye = function(ee) {
        const [, ie] = (0, Ue.useState)(0);
        return (0, Ue.useEffect)((() => {
          const He = ee - performance.now();
          if (He <= 0) return;
          const ye = window.setTimeout((() => {
            ie((ee => ee + 1))
          }), He);
          return () => {
            window.clearTimeout(ye)
          }
        }), [ee]), ee > performance.now()
      }(ie.restedEndsAt), {
        energy: be,
        breakEvenEnergy: Me,
        luckPercent: Ke
      } = ie, Fe = null !== Ke && void 0 !== Ke ? Ke : ie.earningsPercent;
      return (0, Oe.jsxs)("div", {
        className: fe()("GreenvilleMoodChip", {
          Exhausted: be < 25,
          Rested: ye,
          Tired: !ye && be < Me && be >= 25,
          Drained: !ye && be < 25
        }),
        role: "img",
        "aria-label": He("greenvilleGame:moodEnergyLabel", {
          energy: Math.round(be)
        }),
        children: [(0, Oe.jsx)(re.e, {
          name: Db(be),
          className: "GreenvilleMoodChipFace"
        }), ye && (0, Oe.jsx)("span", {
          className: "GreenvilleMoodChipZz",
          children: He("greenvilleGame:moodRestedGlyph")
        }), (0, Oe.jsxs)("div", {
          className: "GreenvilleMoodChipMeter",
          style: {
            "--greenville-break-even": `${Me}%`
          },
          children: [(0, Oe.jsx)("div", {
            className: "GreenvilleMoodChipBar",
            children: (0, Oe.jsx)("div", {
              className: "GreenvilleMoodChipFill",
              style: {
                transform: `scaleX(${Math.min(100,Math.max(0,be))/100})`
              }
            })
          }), (0, Oe.jsx)("div", {
            className: "GreenvilleMoodChipTick"
          })]
        }), null === Ke && (0, Oe.jsx)("span", {
          className: "GreenvilleMoodChipCoin",
          "aria-hidden": "true",
          children: (0, Oe.jsx)(Xe.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), (0, Oe.jsxs)("span", {
          className: fe()("GreenvilleMoodChipEarnings", {
            Positive: Math.round(Fe) > 0,
            Negative: Math.round(Fe) < 0
          }),
          children: [null !== Ke && (0, Oe.jsx)("span", {
            className: "GreenvilleMoodChipLuck",
            children: He("greenvilleGame:luck")
          }), Pb(Fe)]
        }), ie.adBoosted && (0, Oe.jsx)("span", {
          className: "GreenvilleMoodChipBoost",
          children: (0, Oe.jsx)(re.e, {
            name: "bolt"
          })
        })]
      })
    }

    function Vb(ee) {
      let {
        controller: ie
      } = ee;
      (0, ze.j)(mH, null);
      const He = ie.getPlace();
      return "hudHome" !== (null === He || void 0 === He ? void 0 : He.kind) || null === He.runStartedAt ? null : (0, Oe.jsx)(ab, {
        startedAt: He.runStartedAt
      })
    }

    function ab(ee) {
      let {
        startedAt: ie
      } = ee;
      const He = Math.max(0, Math.floor(-(0, dy.d)(ie)));
      return (0, Oe.jsx)("div", {
        className: "GreenvilleMarketCountdown",
        role: "timer",
        children: (0, Oe.jsxs)("div", {
          className: "GreenvilleMarketCountdownTime FullyFancyText",
          children: [Math.floor(He / 60), ":", String(He % 60).padStart(2, "0")]
        })
      })
    }
    const cb = [{
        transform: "translateY(100%)",
        opacity: 0
      }, {
        transform: "translateY(0)",
        opacity: 1
      }],
      xb = [{
        transform: "translateY(-100%)",
        opacity: 0
      }, {
        transform: "translateY(0)",
        opacity: 1
      }];

    function Lb(ee) {
      return ee ? `${ee.number}|${ee.street.name}` : ""
    }

    function Cb(ee) {
      let {
        address: ie,
        large: He,
        rootRef: ye
      } = ee;
      const be = function(ee) {
          switch (ee.kind) {
            case "junction":
              return [{
                street: ee.along,
                number: null
              }, {
                street: ee.cross,
                number: null
              }];
            case "plot":
            case "tile":
              return [{
                street: ee.street,
                number: ee.number
              }, null];
            case "street":
              return [{
                street: ee.street,
                number: ee.block
              }, null]
          }
        }(ie),
        Me = He && "plot" === ie.kind ? ie.neighbourhood : null,
        Ke = (0, Ue.useRef)(null),
        Fe = (0, Ue.useRef)(null),
        Je = (0, Ue.useRef)(be),
        oe = (0, Ue.useRef)({
          large: He,
          top: 0,
          height: 0
        }),
        Re = (0, Ue.useRef)([]),
        ke = (0, Ue.useRef)(null);
      (0, Ue.useLayoutEffect)((() => {
        const ee = Je.current;
        if (Je.current = be, window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const ie = [];
        if (Lb(ee[0]) !== Lb(be[0]) && ie.push(Ke.current.animate(cb, {
            duration: 180,
            easing: "ease-out"
          })), be[1] && !ee[1] && ie.push(Fe.current.animate(xb, {
            duration: 220,
            easing: "ease-out"
          })), ie.length > 0) {
          for (const ee of Re.current) ee.cancel();
          Re.current = ie
        }
      }), [Lb(be[0]), Lb(be[1])]), (0, Ue.useLayoutEffect)((() => {
        var ee;
        const ie = ye.current,
          be = oe.current;
        oe.current = {
          large: He,
          top: ie.offsetTop,
          height: ie.offsetHeight
        }, be.large === He || 0 === be.height || 0 === ie.offsetHeight || window.matchMedia("(prefers-reduced-motion: reduce)").matches || (null === (ee = ke.current) || void 0 === ee || ee.cancel(), ke.current = ie.animate([{
          transform: `translateY(${be.top-ie.offsetTop}px) scale(${be.height/ie.offsetHeight})`
        }, {
          transform: "none"
        }], {
          duration: 260,
          easing: "ease-out"
        }))
      }), [He, Me, Lb(be[0]), Lb(be[1])]), (0, Ue.useEffect)((() => {
        const ee = ye.current,
          ie = new ResizeObserver((() => {
            oe.current = {
              ...oe.current,
              top: ee.offsetTop,
              height: ee.offsetHeight
            }
          }));
        return ie.observe(ee.parentElement), () => {
          var ee;
          ie.disconnect();
          for (const ie of Re.current) ie.cancel();
          null === (ee = ke.current) || void 0 === ee || ee.cancel()
        }
      }), [ye]);
      const [qe, Te] = be;
      return (0, Oe.jsxs)("div", {
        ref: ye,
        className: fe()("GreenvilleNavSign", {
          Large: He
        }),
        children: [(0, Oe.jsxs)("div", {
          className: "GreenvilleNavBlade",
          children: [null !== Me && (0, Oe.jsx)("span", {
            className: "GreenvilleNavHeader",
            children: Me
          }), (0, Oe.jsx)(vb, {
            blade: qe,
            textRef: Ke
          })]
        }), Te && (0, Oe.jsx)("div", {
          ref: Fe,
          className: "GreenvilleNavBlade",
          children: (0, Oe.jsx)(vb, {
            blade: Te
          })
        })]
      })
    }

    function vb(ee) {
      let {
        blade: ie,
        textRef: He
      } = ee;
      return (0, Oe.jsxs)("span", {
        ref: He,
        className: "GreenvilleNavBladeText",
        children: [null !== ie.number && (0, Oe.jsx)("span", {
          className: "GreenvilleNavNumber",
          children: ie.number
        }), (0, Oe.jsxs)("span", {
          className: "GreenvilleNavStreet",
          children: [ie.street.shortName, " ", (0, Oe.jsx)("span", {
            className: "GreenvilleNavSuffix",
            children: ie.street.suffix
          })]
        })]
      })
    }
    const ub = "4rem",
      mb = `translateY(${ub}) scale(1.4)`,
      lb = [{
        transform: mb,
        opacity: 0
      }, {
        transform: mb,
        opacity: 1,
        offset: .12
      }, {
        transform: mb,
        opacity: 1,
        offset: .7,
        easing: "ease-in-out"
      }, {
        transform: "none",
        opacity: 1
      }],
      Sb = [{
        opacity: 0
      }, {
        opacity: 1
      }];

    function nb(ee) {
      var ie;
      let {
        controller: He,
        nav: ye
      } = ee;
      (0, ze.j)(mH, null), (0, ze.j)(Qy, null);
      const {
        t: be
      } = (0, Ee.v)(), Me = (0, Le.d)(), Ke = (0, Ue.useRef)(null), Fe = (0, Ue.useRef)(null), Je = (0, Ue.useRef)(null), oe = (0, Ue.useRef)(null), Re = (0, Ue.useRef)(null), ke = (0, Ue.useRef)(null), qe = (0, Yi.k)("hiddenPlayerNames"), fe = He.getPlace(), Te = ye.getAddress(), pe = fe && Fy(be, fe, Te, qe), Xe = pe ? pe.key : null;
      if ((0, Ue.useLayoutEffect)((() => {
          var ee, ie, He, ye;
          if (null === Xe) return null === (He = oe.current) || void 0 === He || He.cancel(), void(null === (ye = Re.current) || void 0 === ye || ye.cancel());
          if (Ke.current === Xe) return;
          if (Ke.current = Xe, Me) return;
          const be = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          null === (ee = oe.current) || void 0 === ee || ee.cancel(), oe.current = Fe.current.animate(be ? Sb : lb, {
            duration: be ? 400 : 2200
          }), null === (ie = Re.current) || void 0 === ie || ie.cancel(), !be && Je.current && (Re.current = Je.current.animate(function(ee) {
            const ie = `0 calc(${ub} + ${(1.4-1)*ee}px)`;
            return [{
              translate: "0 0",
              easing: "ease-out"
            }, {
              translate: ie,
              offset: .12
            }, {
              translate: ie,
              offset: .7,
              easing: "ease-in-out"
            }, {
              translate: "0 0"
            }]
          }(Fe.current.offsetHeight), {
            duration: 2200
          }))
        }), [Xe]), (0, Ue.useEffect)((() => () => {
          var ee, ie;
          null === (ee = oe.current) || void 0 === ee || ee.cancel(), null === (ie = Re.current) || void 0 === ie || ie.cancel()
        }), []), !fe) return null;
      let Be = "outside" === Te.kind ? null : Te;
      return !pe || "plot" !== Te.kind && "tile" !== Te.kind ? pe && Be && (null === (ie = ke.current) || void 0 === ie ? void 0 : ie.key) === pe.key && (Be = ke.current.address) : ke.current = {
        key: pe.key,
        address: Te
      }, (0, Oe.jsxs)("div", {
        className: "GreenvilleTopBar",
        children: [pe && (0, Oe.jsx)(jb, {
          title: pe,
          tagRef: Fe,
          job: "hudJob" === fe.kind ? fe : null,
          home: "hudHome" === fe.kind ? fe : null
        }), Be && (0, Oe.jsx)(Cb, {
          address: Be,
          large: !pe,
          rootRef: Je
        })]
      })
    }

    function jb(ee) {
      let {
        title: ie,
        tagRef: He,
        job: ye,
        home: be
      } = ee;
      return (0, Oe.jsxs)("div", {
        ref: He,
        className: "GreenvillePlaceTag",
        role: "status",
        children: [null !== ie.eyebrow && (0, Oe.jsx)("span", {
          className: "GreenvillePlaceTagEyebrow",
          children: ie.eyebrow
        }), (0, Oe.jsx)("strong", {
          className: "GreenvillePlaceTagName",
          children: ie.name
        }), ye && (0, Oe.jsx)(sb, {
          job: ye
        }), be && (0, Oe.jsx)(hb, {
          home: be
        })]
      })
    }

    function sb(ee) {
      let {
        job: ie
      } = ee;
      const {
        t: He
      } = (0, Ee.v)(), {
        level: ye,
        expInto: be,
        expNeeded: Me
      } = ie, Ke = 0 === Me;
      return (0, Oe.jsxs)("div", {
        className: "GreenvillePlaceTagRow",
        children: [(0, Oe.jsx)("span", {
          className: "GreenvillePlaceTagJob",
          "aria-hidden": "true",
          children: (0, Oe.jsx)(Xe.c, {
            itemName: Ky[ie.job],
            amount: 0
          })
        }), (0, Oe.jsx)("span", {
          className: "GreenvillePlaceTagLevel",
          children: He("greenvilleGame:levelShort", {
            level: ye
          })
        }), (0, Oe.jsx)("div", {
          className: "GreenvillePlaceTagBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": Ke ? 100 : Math.round(be / Me * 100),
          children: (0, Oe.jsx)("div", {
            className: "GreenvillePlaceTagBarFill",
            style: {
              transform: `scaleX(${Ke?1:Math.min(1,be/Me)})`
            }
          })
        }), !Ke && (0, Oe.jsxs)("span", {
          className: "GreenvillePlaceTagExp",
          children: [(0, ce.h)(be), "/", (0, ce.h)(Me)]
        }), Ke && (0, Oe.jsx)("span", {
          className: "GreenvillePlaceTagMax",
          children: He("greenvilleGame:levelMax")
        }), null !== ie.status && (0, Oe.jsx)(Ib, {
          status: ie.status
        })]
      })
    }

    function Ib(ee) {
      let {
        status: ie
      } = ee;
      const {
        t: He
      } = (0, Ee.v)();
      switch (ie.kind) {
        case "hudTier":
          return (0, Oe.jsxs)("span", {
            className: fe()("GreenvillePlaceChip", {
              Locked: ie.locked
            }),
            children: [ie.locked && (0, Oe.jsx)(re.e, {
              name: "lock"
            }), He(`greenvilleGame:${ie.tierKey}`)]
          });
        case "hudBay":
          return (0, Oe.jsxs)("span", {
            className: "GreenvillePlaceChip",
            children: [He("greenvilleGame:demolitionBayObject", {
              material: He(`greenvilleGame:${ie.materialKey}`),
              object: He(`greenvilleGame:${ie.objectKey}`)
            }), (0, Oe.jsx)("span", {
              className: "GreenvillePlaceChipBar",
              children: (0, Oe.jsx)("span", {
                className: "GreenvillePlaceChipBarFill",
                style: {
                  transform: `scaleX(${ie.percent/100})`
                }
              })
            })]
          });
        case "hudBayEmpty":
          return (0, Oe.jsx)("span", {
            className: "GreenvillePlaceChip",
            children: He("greenvilleGame:demolitionYardIncoming")
          });
        case "hudFarmTier":
          return (0, Oe.jsx)("span", {
            className: "GreenvillePlaceChip Golden",
            children: He("greenvilleGame:farmGoldenChance", {
              percent: ie.goldenPercent
            })
          })
      }
    }

    function hb(ee) {
      let {
        home: ie
      } = ee;
      const {
        t: He
      } = (0, Ee.v)();
      return ie.pvp || ie.parkour || !ie.visitorsAllowed ? (0, Oe.jsxs)("div", {
        className: "GreenvillePlaceTagRow GreenvillePlaceTagChips",
        children: [ie.pvp && (0, Oe.jsx)("span", {
          className: "GreenvillePlaceChip Danger",
          children: He("greenvilleGame:houseChipPvp")
        }), ie.parkour && (0, Oe.jsx)("span", {
          className: "GreenvillePlaceChip",
          children: He("greenvilleGame:houseChipParkour")
        }), !ie.visitorsAllowed && (0, Oe.jsxs)("span", {
          className: "GreenvillePlaceChip Locked",
          children: [(0, Oe.jsx)(re.e, {
            name: "lock"
          }), He("greenvilleGame:houseChipVisitorsOff")]
        })]
      }) : null
    }
    const Nb = function(ee, ie, He, be) {
      let Me, {
        localPlayerId: Ke
      } = be;
      const qe = new ke((ee => {
          Fe.h.yR(Re, ee)
        })),
        fe = new Ty((ee => {
          Fe.h.yR(fy, ee)
        })),
        Te = {
          onGain: () => {
            Me.playSound(Ke, "rpgHandleCoins1", .5, .9 + .3 * Math.random())
          },
          onCoinLanded: (ee, ie) => {
            Me.playSound(Ke, "pickUp", .3, 1 + .5 * ee / Math.max(1, ie - 1))
          }
        },
        pe = [],
        Xe = {
          open: ee => {
            for (const ie of pe) ie !== ee && ie.onMenuClosed();
            (0, oe.s)()
          },
          close: oe.h,
          dismiss: oe.l
        },
        ze = new Je.e,
        Be = new eH((ee => {
          Fe.h.yR(ri, ee)
        }), Xe, (ee => {
          Me.sendCommand(null === ee ? ye : `${ye} ${ee}`)
        }), ze),
        Ee = new Ge((ee => {
          Fe.h.yR(he, ee)
        }), Xe, (ee => {
          Me.sendCommand(`demolition pick ${ee}`)
        }), ze),
        ge = new Bi((ee => {
          Fe.h.yR(Xi, ee)
        }), Xe, (ee => {
          Me.sendCommand(`garage pick ${ee}`)
        }), ze),
        Oe = new Oy((ee => {
          Fe.h.yR(Ey, ee)
        })),
        de = new SH((ee => {
          Fe.h.yR(mH, ee)
        }), (ee => {
          Fe.h.yR(lH, ee)
        })),
        We = new bb(function(ee) {
          return "profIsland" === ee ? wb : Zb
        }(He), (ee => {
          Fe.h.yR(Qy, ee)
        }), (ee => {
          Fe.h.yR(eb, ee)
        }), (ee => {
          Fe.h.yR(ib, ee)
        }));
      let te = null;
      const Ze = new Pi((ee => {
          Fe.h.yR(wi, ee)
        }), (ee => {
          Fe.h.yR(Di, ee)
        }), Xe, (ee => {
          Me.sendCommand(ee)
        }), ze),
        we = new BH((ee => {
          Fe.h.yR(pH, ee)
        }), (ee => {
          Fe.h.yR(XH, ee)
        }), Xe, (ee => {
          Me.sendCommand(ee)
        }), ze);
      pe.push(Be, Ee, ge, Ze, we);
      let De = null;
      return {
        onCreate: ee => {
          Me = ee, We.start(ee), te = new Ly(Oe), De = (0, oe.z)((0, Ue.createElement)(Ue.Fragment, null, (0, Ue.createElement)(Pe, {
            controller: qe
          }), (0, Ue.createElement)(zy, {
            controller: fe
          }), (0, Ue.createElement)(Vy, {
            market: Oe,
            markers: te
          }), (0, Ue.createElement)(ty, {
            controller: Oe
          }), (0, Ue.createElement)(nb, {
            controller: de,
            nav: We
          }), (0, Ue.createElement)(Ab, {
            controller: de
          }), (0, Ue.createElement)(Jy, {
            controller: de
          }, (0, Ue.createElement)(le, {
            sounds: Te
          }), (0, Ue.createElement)(Eb, {
            controller: We
          }), (0, Ue.createElement)(uH, {
            controller: we
          }), (0, Ue.createElement)(wy, {
            controller: Oe
          }), (0, Ue.createElement)(Gi, {
            controller: Ze
          })), (0, Ue.createElement)(Vb, {
            controller: de
          })), {
            content: (0, Ue.createElement)(Ue.Fragment, null, (0, Ue.createElement)(bH, {
              controller: Be
            }), (0, Ue.createElement)(Ti, {
              controller: Ee
            }), (0, Ue.createElement)(Oi, {
              controller: ge
            }), (0, Ue.createElement)(Ni, {
              controller: Ze
            }), (0, Ue.createElement)(CH, {
              controller: we
            })),
            onClose: () => {
              for (const ee of pe) ee.onMenuClosed()
            }
          })
        },
        onClose: () => {
          De(), We.dispose(), Be.dropPresses(), Ee.dropPresses(), ge.dropPresses(), te.waypoints.dispose(), Ze.dropPresses(), we.dropPresses(), ze.dispose()
        },
        onAfterRender: (ee, ie) => {
          const He = Me.getPositionView(Ke);
          te.frame(ie, He), We.frame(ie, He, Me.isLocalPlayerInVehicle())
        },
        onReceivedMessageFromServer: (ee, ie) => {
          "greenvilleBackpack" === ee ? qe.DR(ie) : "greenvilleOreBuyer" === ee ? Be.DR(ie) : "greenvilleLumberMill" === ee ? Ze.DR(ie) : "greenvilleDemolition" === ee ? Ee.DR(ie) : "greenvilleGarage" === ee ? ge.DR(ie) : "greenvilleFarmBoard" === ee ? we.DR(ie) : "greenvilleMarket" === ee ? Oe.DR(ie) : "greenvilleHud" === ee ? de.DR(ie) : "greenvilleLevelUp" === ee ? fe.DR(ie) : "greenvillePlots" === ee ? We.DR(ie) : "greenvilleMapMarkers" === ee && We.receiveMarkers(ie)
        }
      }
    }
  },
  40306: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ue,
      h: () => Ke
    });
    var ye = He(9961);
    const be = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      Me = [150, 150, 150],
      Ke = -2147483648;
    class Ue {
      constructor(ee) {
        this.averages = ee, this.byId = new Map
      }
      get(ee) {
        var ie, He, Ke, Ue, Fe;
        const Je = this.byId.get(ee);
        if (void 0 !== Je) return Je;
        const oe = null !== (ie = null === (He = ye.i[ee]) || void 0 === He ? void 0 : He.name) && void 0 !== ie ? ie : "",
          Re = oe.split("|")[0],
          ke = null !== (Ke = this.averages[oe]) && void 0 !== Ke ? Ke : this.averages[Re],
          qe = null !== (Ue = null !== (Fe = null === ke || void 0 === ke ? void 0 : ke[0]) && void 0 !== Fe ? Fe : be[Re]) && void 0 !== Ue ? Ue : 0 === (null === ke || void 0 === ke ? void 0 : ke.length) ? null : Me;
        return this.byId.set(ee, qe), qe
      }
      getDrawnIds() {
        const ee = new Uint8Array(65536);
        for (let ie = 1; ie < 65536; ie++) void 0 !== ye.i[ie] && null !== this.get(ie) && (ee[ie] = 1);
        return ee
      }
      drawPixel(ee, ie, He, ye, be, Me) {
        const Ue = function(ee, ie, He) {
            const ye = ee - ie + (ee - He);
            return Math.max(.65, Math.min(1.2, .97 + .055 * ye))
          }(ye, be === Ke ? ye : be, Me === Ke ? ye : Me),
          Fe = this.get(He);
        ee[ie] = Fe[0] * Ue, ee[ie + 1] = Fe[1] * Ue, ee[ie + 2] = Fe[2] * Ue, ee[ie + 3] = 255
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);