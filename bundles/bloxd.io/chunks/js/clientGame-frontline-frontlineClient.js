export const id = 18;
export const ids = [18];
export const modules = {
  38154: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => hr,
      d: () => zr,
      h: () => mr,
      l: () => xr
    });
    var Zr = Qr(35448),
      Wr = Qr(3425),
      ar = Qr(3429),
      jr = Qr(9818),
      Ir = Qr(1573),
      fr = Qr(72),
      Er = Qr(92),
      pr = Qr(1338);

    function xr() {
      var rr;
      return (0, Ir.g)(Wr.e, (0, Wr.w)()), (0, pr.jsx)(pr.Fragment, {
        children: null === (rr = (0, Wr.w)()) || void 0 === rr ? void 0 : rr.content
      })
    }

    function mr(rr) {
      var Sr;
      let {
        show: Qr
      } = rr;
      (0, Ir.g)(Wr.e, (0, Wr.w)());
      const Er = null === (Sr = (0, Wr.w)()) || void 0 === Sr ? void 0 : Sr.menu;
      return (0, fr.useEffect)((() => {
        var rr;
        Qr || (null === Er || void 0 === Er || null === (rr = Er.onClose) || void 0 === rr || rr.call(Er), (0, ar.o)())
      }), [Qr, Er]), (0, fr.useEffect)((() => Qr ? (0, jr.f)(ar.v, ar.e) : void 0), [Qr]), (0, pr.jsx)(Zr.c, {
        showing: Qr,
        globallyUniqueKey: "clientGameMenu",
        children: null === Er || void 0 === Er ? void 0 : Er.content
      })
    }
    const Nr = new Map,
      Ur = new Set;

    function tr(rr, Sr) {
      Sr ? Nr.set(rr, Sr) : Nr.delete(rr);
      for (const Qr of Ur) Qr()
    }

    function hr(rr) {
      let {
        placement: Sr = "bottom"
      } = rr;
      const Qr = (0, fr.useRef)(null);
      return (0, fr.useLayoutEffect)((() => {
        const rr = Qr.current;
        return tr(Sr, rr), () => {
          Nr.get(Sr) === rr && tr(Sr, null)
        }
      }), [Sr]), (0, pr.jsx)("div", {
        ref: Qr,
        id: `clientGameHud-${Sr}`,
        style: {
          display: "contents"
        }
      })
    }

    function zr(rr) {
      let {
        children: Sr,
        placement: Qr = "bottom"
      } = rr;
      const [Zr, Wr] = (0, fr.useState)((() => {
        var rr;
        return null !== (rr = Nr.get(Qr)) && void 0 !== rr ? rr : null
      }));
      return (0, fr.useEffect)((() => {
        const rr = () => {
          var rr;
          Wr(null !== (rr = Nr.get(Qr)) && void 0 !== rr ? rr : null)
        };
        return Ur.add(rr), rr(), () => {
          Ur.delete(rr)
        }
      }), [Qr]), Zr ? (0, Er.createPortal)(Sr, Zr) : null
    }
  },
  35448: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar
    });
    var Zr = Qr(5301),
      Wr = Qr(5308);

    function ar(rr) {
      let {
        children: Sr,
        showing: Qr,
        globallyUniqueKey: ar,
        alwaysMountChildren: jr = !1,
        doGameplayStartStopOnShow: Ir = !0,
        keepsMovement: fr = !1
      } = rr;
      return (0, Wr.b)(!0, Qr, ar, fr), (0, Zr.e)(Ir, Qr), Qr || jr ? Sr : null
    }
  },
  38214: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ir,
      d: () => fr,
      e: () => Er,
      h: () => pr,
      l: () => Ur
    });
    var Zr = Qr(72),
      Wr = Qr(4302),
      ar = Qr(3515),
      jr = Qr(34);
    const Ir = 8,
      fr = "InGameHeaderContainer",
      Er = "TopRightElements";

    function pr(rr) {
      const [Sr] = (0, Wr.e)(), [Qr, ar] = (0, Zr.useState)(!1);
      return (0, Zr.useLayoutEffect)((() => {
        if (!rr) return;
        const Sr = document.querySelector(`.${fr}`),
          Qr = document.querySelector(`.${Er}`),
          Zr = () => {
            const Zr = rr.getBoundingClientRect(),
              Wr = Sr ? Sr.getBoundingClientRect().right : 0,
              jr = Qr ? Qr.getBoundingClientRect().left : window.innerWidth,
              fr = Zr.left < Wr + Ir,
              Er = Zr.right > jr - Ir;
            ar(fr || Er)
          };
        Zr();
        const Wr = new ResizeObserver(Zr);
        return Wr.observe(rr), Sr && Wr.observe(Sr), Qr && Wr.observe(Qr), () => {
          Wr.disconnect()
        }
      }), [rr, Sr]), Qr
    }
    const xr = `.InGameUi .${fr}`,
      mr = [xr, ".InGameUi .TopRightIcons", ".InGameUi .TopRightElementsRight"],
      Nr = 1e3;

    function Ur(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rr,
        Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const [Wr, fr] = (0, Zr.useState)(null);
      return (0, Zr.useLayoutEffect)((() => {
        if (!rr) return;
        const Zr = new ResizeObserver((() => {
          Er()
        }));
        Zr.observe(rr), Sr && Sr !== rr && Zr.observe(Sr);
        let Wr = [];

        function Er() {
          var ar, jr, Er;
          const pr = rr.getBoundingClientRect(),
            Nr = function() {
              const rr = mr.map((rr => document.querySelector(rr))).filter((rr => null !== rr));
              for (const Sr of rr) Wr.includes(Sr) || Zr.observe(Sr);
              for (const Sr of Wr) rr.includes(Sr) || Zr.unobserve(Sr);
              return Wr = rr, rr
            }(),
            Ur = Nr.filter((rr => {
              const Sr = rr.getBoundingClientRect();
              return Sr.width > 0 && Sr.height > 0 && pr.left < Sr.right + Ir && pr.right > Sr.left - Ir
            }));
          if (0 === Ur.length && !Qr) return void fr(null);
          const tr = Nr.find((rr => rr.matches(xr))),
            hr = Math.max(null !== (ar = null === tr || void 0 === tr ? void 0 : tr.getBoundingClientRect().bottom) && void 0 !== ar ? ar : 0, ...Ur.map((rr => rr.getBoundingClientRect().bottom))),
            zr = null !== (jr = null === Sr || void 0 === Sr || null === (Er = Sr.offsetParent) || void 0 === Er ? void 0 : Er.getBoundingClientRect().top) && void 0 !== jr ? jr : 0;
          fr(Math.ceil(hr + Ir / 2) - Math.round(zr))
        }
        const pr = setInterval(Er, Nr);
        Er(), window.addEventListener("resize", Er);
        const Ur = (0, jr.j)(ar.g, Er);
        return () => {
          Zr.disconnect(), clearInterval(pr), window.removeEventListener("resize", Er), Ur()
        }
      }), [rr, Sr, Qr]), Wr
    }
  },
  38175: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      f: () => Wr,
      h: () => ar
    });
    var Zr = Qr(72);

    function Wr(rr) {
      return Ir(rr, fr)
    }

    function ar(rr) {
      return Ir(rr, Er)
    }

    function jr(rr) {
      return `${Math.floor(rr/60)}:${String(rr%60).padStart(2,"0")}`
    }

    function Ir(rr, Sr) {
      const [, Qr] = (0, Zr.useState)(null);
      return (0, Zr.useEffect)((() => {
        if (0 === rr) return;
        const Zr = window.setInterval((() => {
          const Zr = Sr(rr);
          Qr((Sr => (null === Sr || void 0 === Sr ? void 0 : Sr.endsAt) === rr && Sr.value === Zr ? Sr : {
            endsAt: rr,
            value: Zr
          }))
        }), 250);
        return () => {
          window.clearInterval(Zr)
        }
      }), [rr, Sr]), Sr(rr)
    }

    function fr(rr) {
      return (rr - performance.now()) / 1e3
    }

    function Er(rr) {
      return Math.max(0, Math.ceil(fr(rr)))
    }
  },
  38211: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr
    });
    const Zr = [{
      maxDist: 30,
      timeBetweenSoftChecks: 1e3,
      softUpdateDist: 2,
      hardUpdateDist: 10
    }, {
      maxDist: 200,
      timeBetweenSoftChecks: 2e3,
      softUpdateDist: 5,
      hardUpdateDist: 20
    }, {
      maxDist: 1 / 0,
      timeBetweenSoftChecks: 5e3,
      softUpdateDist: 30,
      hardUpdateDist: 100
    }];

    function Wr(rr, Sr, Qr) {
      const Wr = Math.abs(rr - Sr),
        ar = Date.now() - Qr;
      for (const jr of Zr)
        if (rr < jr.maxDist) return Wr >= jr.hardUpdateDist || ar > jr.timeBetweenSoftChecks && Wr >= jr.softUpdateDist;
      return !1
    }
  },
  9818: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar,
      f: () => Wr
    });
    let Zr = null;
    const Wr = function(rr) {
        const Sr = {
          cycle: rr,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Zr = Sr, () => {
          Zr === Sr && (Zr = null)
        }
      },
      ar = () => {
        var rr;
        return null !== (rr = Zr) && void 0 !== rr && rr.canCycle() ? Zr.cycle : null
      }
  },
  40065: (rr, Sr, Qr) => {
    function Zr(rr, Sr, Qr) {
      var Zr;
      const {
        width: Wr,
        height: ar
      } = Qr, jr = null !== (Zr = rr.text) && void 0 !== Zr ? Zr : rr, Ir = (jr.x / 100 - .5) * Wr, fr = (jr.y / 100 - .5) * ar, Er = Wr / 2 - Sr.x;
      if (null !== rr.text && Math.abs(Ir) <= Er && fr >= Sr.top - ar / 2 && fr <= ar / 2 - Sr.bottom) return {
        x: jr.x,
        y: jr.y
      };
      const pr = Math.min(0 === Ir ? 1 / 0 : Er / Math.abs(Ir), fr > 0 ? (ar / 2 - Sr.bottom) / fr : fr < 0 ? (Sr.top - ar / 2) / fr : 1 / 0);
      return !Number.isFinite(pr) || pr < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + Ir * pr / Wr * 100,
        y: 50 + fr * pr / ar * 100
      }
    }
    Qr.d(Sr, {
      e: () => Zr
    })
  },
  41063: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr
    });
    const Zr = 1e3;

    function Wr(rr, Sr) {
      const Qr = performance.now() + rr;
      return 0 !== Sr && Math.abs(Qr - Sr) < Zr ? Sr : Qr
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
  41040: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => ES
    });
    const Zr = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes", "hat", "back"];
    var Wr = Qr(72),
      ar = Qr(3425),
      jr = Qr(41046),
      Ir = Qr(38509),
      fr = Qr(38191),
      Er = Qr(1885),
      pr = Qr(34);
    const xr = {
      M1911: "pistol",
      Deagle: "pistol",
      "Block-19": "pistol",
      "AK-47": "rifle",
      M16: "rifle",
      "TAR-21": "rifle",
      SKAR: "rifle",
      FMR: "rifle",
      MP40: "smg",
      "Mini Izu": "smg",
      "Double Barrel": "shotgun",
      "Striker-12": "shotgun",
      DMR: "marksman",
      VSR: "marksman",
      GPMG: "machineGun",
      Minigun: "machineGun",
      RPG: "launcher",
      "Moonstone Dagger": "melee",
      "Moonstone Boomerang": "melee",
      "Frag Grenade": "throwable",
      "Smoke Grenade": "throwable",
      "Mining Grenade": "throwable",
      "Splash Instant Healing Potion": "throwable",
      Snowdash: "throwable"
    };
    const mr = 32;

    function Nr(rr, Sr, Qr, Zr) {
      return {
        tag: "line",
        attrs: {
          x1: rr,
          y1: Sr,
          x2: Qr,
          y2: Zr,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function Ur(rr) {
      return {
        tag: "circle",
        attrs: {
          cx: mr,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mr,
          r: rr,
          class: "Fill"
        }
      }
    }

    function tr(rr, Sr) {
      return {
        tag: "path",
        attrs: {
          d: rr,
          "stroke-width": Sr
        }
      }
    }

    function hr(rr, Sr, Qr) {
      return {
        tag: "circle",
        attrs: {
          cx: mr,
          cy: mr,
          r: rr,
          "stroke-width": Sr,
          class: Qr
        }
      }
    }

    function zr(rr, Sr, Qr) {
      return {
        tag: "text",
        attrs: {
          x: rr,
          y: Sr,
          class: "Fill Label"
        },
        text: Qr
      }
    }
    const Yr = {
      pistol: rr => [Nr(mr, mr - rr - 5, mr, mr - rr), Nr(mr - rr - 5, mr, mr - rr, mr), Nr(mr + rr, mr, mr + rr + 5, mr), Ur(1.4)],
      rifle: rr => [Nr(mr, mr - rr - 8, mr, mr - rr), Nr(mr, mr + rr, mr, mr + rr + 8), Nr(mr - rr - 8, mr, mr - rr, mr), Nr(mr + rr, mr, mr + rr + 8, mr), Ur(1)],
      smg: rr => {
        const Sr = Math.PI / 2,
          Qr = [];
        for (let jr = 0; jr < 4; jr++) Qr.push((Wr = jr * Sr + .35, ar = (jr + 1) * Sr - .35, tr(`M${mr+(Zr=6+rr)*Math.cos(Wr)} ${mr+Zr*Math.sin(Wr)} A${Zr} ${Zr} 0 0 1 ${mr+Zr*Math.cos(ar)} ${mr+Zr*Math.sin(ar)}`, 2)));
        var Zr, Wr, ar;
        return [...Qr, Ur(1.4)]
      },
      shotgun: rr => [hr(rr, 3, "Ring Outline"), hr(rr, 1.5, "Ring")],
      marksman: rr => [tr(`M${26-rr/2} ${39+rr/2} L32 33 L${38+rr/2} ${39+rr/2}`, 2), Nr(14 - rr, mr, 24 - rr, mr, 1.5), Nr(40 + rr, mr, 50 + rr, mr, 1.5), Nr(14 - rr, 30, 14 - rr, 34, 1.5), Nr(50 + rr, 30, 50 + rr, 34, 1.5)],
      machineGun: rr => {
        const Sr = 10 + rr,
          Qr = [];
        for (const [Zr, Wr] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) Qr.push(tr(`M${mr+Zr*Sr} ${mr+Wr*(Sr-5)} L${mr+Zr*Sr} ${mr+Wr*Sr} L${mr+Zr*(Sr-5)} ${mr+Wr*Sr}`, 2));
        return [...Qr, Nr(mr, 28, mr, 36, 1.5), Nr(28, mr, 36, mr, 1.5)]
      },
      launcher: () => [Nr(14, 30, 50, 30, 1.5), Nr(mr, 24, mr, 52, 1.5), Nr(28, 38, 36, 38, 1.5), Nr(29, 44, 35, 44, 1.5), Nr(30, 50, 34, 50, 1.5), zr(38, 40, "100"), zr(37, 46, "200"), Ur(1.4, 30)],
      melee: () => [tr("M32 26 L38 32 L32 38 L26 32 Z", 1.5), Ur(1.2)],
      throwable: () => [Ur(1.6)]
    };

    function nr(rr) {
      let {
        tag: Sr,
        attrs: Qr,
        text: Zr
      } = rr, Wr = `<${Sr}`;
      for (const [ar, jr] of Object.entries(Qr)) Wr += ` ${ar}="${jr}"`;
      return void 0 === Zr ? `${Wr}/>` : `${Wr}>${Zr}</${Sr}>`
    }
    class er {
      constructor(rr, Sr) {
        this.api = rr, this.localPlayerId = Sr, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = rr => {
          this.element = rr, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, rr && !this.enabled && (rr.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, Er.getRemInPx)()))
        }, this.tokens = [pr.i.subscribe("aimingOverlay", (rr => {
          this.sniperOverlay = "sniper" === rr
        })), pr.i.subscribe("mouseState", (rr => {
          let {
            isDown: Sr
          } = rr;
          this.mouseDown = Sr
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      VK(rr) {
        rr !== this.enabled && (this.enabled = rr, this.drawnVisible = null, rr || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(rr, Sr) {
        var Qr, Zr;
        if (!this.enabled) return;
        const {
          api: Wr
        } = this, ar = Wr.isAlive(this.localPlayerId) && null !== (Qr = null === (Zr = Wr.XQr(this.localPlayerId)) || void 0 === Zr ? void 0 : Zr.name) && void 0 !== Qr ? Qr : null, jr = (Ir = ar) && xr[Ir] || null;
        var Ir;
        if (this.setOwnsCrosshair(null !== jr), !this.element) return;
        const fr = Wr.getHeldGunInaccuracy(),
          Er = null !== fr,
          pr = null !== jr && !this.sniperOverlay && Wr.isCrosshairShown();
        if (pr !== this.drawnVisible && (this.drawnVisible = pr, this.element.style.display = pr ? "block" : "none"), !pr) return;
        const mr = Er ? function(rr) {
            return "launcher" === rr || "melee" === rr || "throwable" === rr ? "none" : "shotgun" === rr ? "cone" : "offset"
          }(jr) : "none",
          Nr = null !== fr && void 0 !== fr ? fr : 0;
        "cone" === mr ? this.drawCone(jr, this.coneRadiusVh(Nr, Sr) * this.gapPerVh, rr) : (this.coneDrawn = !1, this.draw(jr, "none" === mr ? 2 : this.offsetGap(Nr)));
        const Ur = !Er && this.mouseDown;
        Ur !== this.drawnPressed && (this.drawnPressed = Ur, this.element.classList.toggle("Pressed", Ur))
      }
      dispose() {
        for (const rr of this.tokens) pr.i.unsubscribe(rr);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(rr, Sr) {
        var Qr, Zr;
        rr !== this.drawnFamily ? (this.drawnFamily = rr, this.drawnGap = Sr, this.element.innerHTML = function(rr, Sr) {
          return `<svg viewBox="0 0 64 64">${Yr[rr](Sr).map(nr).join("")}</svg>`
        }(rr, Sr), this.shapes = Array.from(null !== (Qr = null === (Zr = this.element.firstElementChild) || void 0 === Zr ? void 0 : Zr.children) && void 0 !== Qr ? Qr : [])) : Sr !== this.drawnGap && (this.drawnGap = Sr, function(rr, Sr, Qr) {
          const Zr = Yr[Sr](Qr);
          for (let Wr = 0; Wr < Zr.length; Wr++)
            for (const [Sr, Qr] of Object.entries(Zr[Wr].attrs)) {
              const Zr = String(Qr);
              rr[Wr].getAttribute(Sr) !== Zr && rr[Wr].setAttribute(Sr, Zr)
            }
        }(this.shapes, rr, Sr))
      }
      drawCone(rr, Sr, Qr) {
        rr === this.drawnFamily && this.coneDrawn ? this.shownRadius += (Sr - this.shownRadius) * (1 - Math.exp(-Qr / 80)) : this.shownRadius = Sr, this.coneDrawn = !0, this.draw(rr, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(rr, Sr) {
        if (!(Sr > 0)) return 1;
        const Qr = rr * Ir.g / 2;
        return Math.max(50 * Math.tan(Qr) / Sr, 1)
      }
      offsetGap(rr) {
        const Sr = 2 + ((0, fr.d)(rr) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * Sr) / 2)
      }
      setOwnsCrosshair(rr) {
        rr !== this.ownsCrosshair && (this.ownsCrosshair = rr, document.body.classList.toggle("FrontlineCustomCrosshair", rr))
      }
    }
    var Kr = Qr(1155),
      yr = Qr.n(Kr),
      Br = Qr(38154),
      Tr = Qr(38214),
      vr = Qr(1251),
      Or = Qr(1573),
      Lr = Qr(38175),
      lr = Qr(41055),
      Xr = Qr(41063);
    const Pr = "frontlineHudChanged",
      Hr = "frontlineScoreboardChanged";
    class qr {
      constructor() {
        this.wire = ["none"], this.scoreboard = {
          wire: ["none"],
          endsAt: 0
        }
      }
      getWire() {
        return this.wire
      }
      getScoreboard() {
        return this.scoreboard
      }
      vx(rr) {
        this.wire = rr, pr.i.Jp(Pr, rr, !0)
      }
      receiveScoreboard(rr) {
        const Sr = "scoreboard" === rr[0] ? (0, Xr.b)(rr[5], this.scoreboard.endsAt) : 0;
        this.scoreboard = {
          wire: rr,
          endsAt: Sr
        }, pr.i.Jp(Hr, this.scoreboard, !0)
      }
    }
    var Rr = Qr(1338);
    const gr = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function Cr(rr) {
      let {
        className: Sr,
        point: Qr
      } = rr;
      const [Zr, Wr, ar, jr, Ir, fr] = Qr;
      return (0, Rr.jsxs)("div", {
        className: yr()(Sr, `Owner-${Wr||"None"}`, `Leader-${jr||"None"}`, {
          Contested: Ir,
          Here: fr
        }),
        children: [(0, Rr.jsx)("span", {
          className: "FrontlinePointLetter",
          children: Zr
        }), (0, Rr.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${ar}%`
          }
        })]
      })
    }
    const Mr = (0, Wr.memo)((function(rr) {
        let {
          points: Sr,
          markers: Qr
        } = rr;
        const {
          t: Zr
        } = (0, vr.E)();
        return Sr ? (0, Rr.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: Sr.map((rr => {
            const [Sr, , , , , , , Wr] = rr;
            return (0, Rr.jsxs)("div", {
              ref: Qr.points.bindMarker(Sr),
              className: "FrontlinePointMarker",
              children: [(0, Rr.jsx)(Cr, {
                className: "FrontlinePointMarkerTile",
                point: rr
              }), (0, Rr.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [Wr && (0, Rr.jsx)("span", {
                  className: yr()("FrontlinePointMarkerHomeTurf", `Team-${Wr}`),
                  children: Zr("frontlineHud:homeTurf", {
                    team: Zr(gr[Wr])
                  })
                }), (0, Rr.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, Sr)
          }))
        }) : null
      })),
      Gr = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      kr = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function Ar(rr) {
      let {
        hud: Sr,
        crosshair: Qr,
        damage: Zr,
        markers: Wr
      } = rr;
      const ar = (0, Or.g)(Pr, Sr.getWire()),
        jr = (0, Or.g)(Hr, Sr.getScoreboard());
      return (0, Rr.jsxs)(Rr.Fragment, {
        children: [(0, Rr.jsx)(lr.b, {
          controller: Zr
        }), (0, Rr.jsx)(Mr, {
          points: "scoreboard" === jr.wire[0] ? jr.wire[6] : null,
          markers: Wr
        }), (0, Rr.jsx)(ir, {
          view: jr
        }), (0, Rr.jsx)("div", {
          className: "FrontlineReticle",
          ref: Qr.bindElement
        }), (0, Rr.jsx)(Br.d, {
          children: (0, Rr.jsx)(Vr, {
            wire: ar
          })
        })]
      })
    }
    const Vr = (0, Wr.memo)((function(rr) {
        let {
          wire: Sr
        } = rr;
        const {
          t: Qr
        } = (0, vr.E)();
        if ("capture" === Sr[0]) {
          const [, rr, Zr, Wr, ar, jr, Ir] = Sr, fr = Math.round(Wr / 100 * 24);
          return (0, Rr.jsxs)("div", {
            className: yr()("FrontlinePlate", `Status-${Zr}`, `Leader-${ar||"None"}`),
            children: [(0, Rr.jsx)(or, {}), (0, Rr.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, Rr.jsx)("span", {
                className: "FrontlineObjective",
                children: rr
              }), (0, Rr.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, Rr.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: Qr("frontlineHud:objective", {
                    point: rr,
                    friendly: jr,
                    enemy: Ir
                  })
                }), (0, Rr.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: Qr(Gr[Zr])
                })]
              }), (0, Rr.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(Wr).padStart(3, "0"), (0, Rr.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, Rr.jsx)(cr, {
              segments: 24,
              lit: fr
            })]
          })
        }
        if ("alert" === Sr[0]) {
          const [, rr, Zr, Wr] = Sr;
          return (0, Rr.jsxs)("div", {
            className: yr()("FrontlinePlate", "FrontlineAlert", `Tone-${Wr}`),
            children: [(0, Rr.jsx)(or, {}), (0, Rr.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: Qr(kr[rr])
            }), (0, Rr.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: Zr
            })]
          })
        }
        return null
      })),
      ir = (0, Wr.memo)((function(rr) {
        let {
          view: Sr
        } = rr;
        const {
          t: Qr
        } = (0, vr.E)(), Zr = (0, Wr.useRef)(null), ar = function(rr, Sr) {
          const [Qr, Zr] = (0, Wr.useState)(!1);
          return (0, Wr.useLayoutEffect)((() => {
            const Sr = rr.current;
            if (!Sr) return;
            const Qr = document.querySelector(`.${Tr.d}`),
              Wr = document.querySelector(`.${Tr.e}`),
              ar = () => {
                var rr;
                const ar = Sr.querySelector(".FrontlineTeamTrack"),
                  jr = (0, Er.getRemInPx)(),
                  Ir = Sr.getBoundingClientRect().width - 2 * (null !== (rr = null === ar || void 0 === ar ? void 0 : ar.getBoundingClientRect().width) && void 0 !== rr ? rr : 0),
                  fr = window.innerWidth / 2,
                  pr = Qr ? Qr.getBoundingClientRect().right : 0,
                  xr = Wr ? Wr.getBoundingClientRect().left : window.innerWidth,
                  mr = Math.min(fr - pr, xr - fr) - Tr.c - Ir / 2,
                  Nr = mr < 6 * jr,
                  Ur = Nr ? (window.innerWidth - Ir) / 2 - Tr.c : mr;
                Sr.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(Ur,14*jr)))}px`), Zr(Nr)
              };
            ar();
            const jr = new ResizeObserver(ar);
            for (const rr of [Sr, Qr, Wr]) rr && jr.observe(rr);
            return window.addEventListener("resize", ar), () => {
              jr.disconnect(), window.removeEventListener("resize", ar)
            }
          }), [rr, Sr]), Qr
        }(Zr, "scoreboard" === Sr.wire[0]);
        if ("scoreboard" !== Sr.wire[0]) return null;
        const [, jr, Ir, fr, pr, , xr] = Sr.wire, mr = "Red" === jr ? "Blue" : "Red";
        return (0, Rr.jsxs)("div", {
          className: yr()("FrontlineScoreboardContainer", {
            Below: ar
          }),
          children: [(0, Rr.jsxs)("div", {
            ref: Zr,
            className: "FrontlineScoreboard",
            children: [(0, Rr.jsx)(or, {}), (0, Rr.jsx)(wr, {
              team: jr,
              tickets: Ir,
              goal: pr,
              side: "Friendly"
            }), (0, Rr.jsx)("div", {
              className: "FrontlinePoints",
              children: xr.map((rr => (0, Rr.jsx)(Cr, {
                className: "FrontlinePoint",
                point: rr
              }, rr[0])))
            }), (0, Rr.jsx)(wr, {
              team: mr,
              tickets: fr,
              goal: pr,
              side: "Enemy"
            })]
          }), (0, Rr.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, Rr.jsx)(Fr, {
              endsAt: Sr.endsAt
            }), (0, Rr.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: Qr("frontlineHud:ticketGoal", {
                goal: pr
              })
            })]
          })]
        })
      }));

    function wr(rr) {
      let {
        team: Sr,
        tickets: Qr,
        goal: Zr,
        side: Wr
      } = rr;
      const {
        t: ar
      } = (0, vr.E)(), jr = String(Qr).padStart(3, "0"), Ir = jr.search(/[1-9]/), fr = -1 === Ir ? jr : jr.slice(0, Ir), Er = Math.min(20, Math.floor(Qr / Zr * 20));
      return (0, Rr.jsxs)("div", {
        className: yr()("FrontlineTeamScore", Wr, `Team-${Sr}`),
        children: [(0, Rr.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, Rr.jsx)("span", {
            className: "Lead",
            children: fr
          }), -1 !== Ir && jr.slice(Ir)]
        }), (0, Rr.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, Rr.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: ar(gr[Sr])
          }), (0, Rr.jsx)(cr, {
            segments: 20,
            lit: Er
          })]
        })]
      })
    }

    function cr(rr) {
      let {
        segments: Sr,
        lit: Qr
      } = rr;
      return (0, Rr.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: Sr
        }, ((rr, Sr) => (0, Rr.jsx)("i", {
          className: yr()({
            Lit: Sr < Qr
          })
        }, Sr)))
      })
    }

    function Fr(rr) {
      let {
        endsAt: Sr
      } = rr;
      const Qr = (0, Lr.h)(Sr);
      return (0, Rr.jsx)("div", {
        className: yr()("FrontlineClock", {
          Urgent: Qr <= 60
        }),
        children: (0, Lr.c)(Qr)
      })
    }

    function or() {
      return (0, Rr.jsxs)(Rr.Fragment, {
        children: [(0, Rr.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, Rr.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var br = Qr(41065);
    class Jr {
      constructor(rr) {
        this.hud = rr, this.points = new br.e({
          labels: "FrontlinePointMarkerLabels",
          distance: "FrontlinePointMarkerDistance"
        }, "frontlineHud:markerDistance")
      }
      frame(rr, Sr) {
        this.points.setRender(rr);
        const Qr = this.hud.getScoreboard().wire;
        if ("scoreboard" === Qr[0] && this.points.hasMarkers())
          for (const [Zr, , , , , , Wr] of Qr[6]) Wr && this.points.update(Zr, Wr[0], Wr[1] + 2.5, Wr[2], Sr)
      }
    }
    var Dr = Qr(7388),
      dr = Qr(3677);
    const sr = "frontlineRoundEndChanged";
    class ur {
      constructor() {
        this.view = {
          wire: ["none"],
          key: 0,
          endsAt: 0
        }
      }
      getView() {
        return this.view
      }
      vx(rr) {
        const Sr = "roundEnd" === rr[0] ? performance.now() + rr[5] : 0;
        this.view = {
          wire: rr,
          key: this.view.key + 1,
          endsAt: Sr
        }, pr.i.Jp(sr, this.view, !0)
      }
    }
    var rS = Qr(3039);
    const SS = (0, Wr.lazy)((() => (0, dr.c)(Promise.all([Qr.e(267), Qr.e(229)]).then((() => Qr(54295))), (rr => rr.FrontlineMvpLineup)))),
      QS = [4800, 4e3, 3200],
      ZS = [1, 0, 2],
      WS = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      aS = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function jS(rr) {
      let {
        controller: Sr
      } = rr;
      const Qr = (0, Or.g)(sr, Sr.getView()),
        Zr = (0, Lr.f)(Qr.endsAt);
      return "roundEnd" !== Qr.wire[0] || 1e3 * Zr < -2e3 ? null : (0, Rr.jsx)(IS, {
        wire: Qr.wire,
        secondsLeft: Math.max(0, Math.ceil(Zr))
      }, Qr.key)
    }
    const IS = (0, Wr.memo)((function(rr) {
      let {
        wire: Sr,
        secondsLeft: Qr
      } = rr;
      const {
        t: ar
      } = (0, vr.E)();
      (0, Wr.useEffect)((() => (0, rS.f)()), []);
      const [, jr, Ir, fr, Er, , pr, xr] = Sr, mr = (0, Wr.useMemo)((() => ZS.filter((rr => rr < xr.length))), [xr]), Nr = (0, Wr.useMemo)((() => mr.map((rr => {
        const [, , , , , Sr, Qr] = xr[rr];
        return {
          cosmetics: Zr.map(((rr, Qr) => [rr, Sr[Qr]])),
          size: 0 === rr ? 1.15 : .85,
          heldGun: {
            name: Qr,
            aimed: 0 === rr
          },
          showAfterMs: QS[rr]
        }
      }))), [xr, mr]);
      return (0, Rr.jsxs)("div", {
        className: yr()("FrontlineRoundEnd", `Result-${jr}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, Rr.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, Rr.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, Rr.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, Rr.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, Rr.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (Ur = ar(WS[jr]), /\p{Script=Arabic}/u.test(Ur) ? [Ur] : (0, Dr.d)(Ur)).map(((rr, Sr) => (0, Rr.jsx)("span", {
              style: {
                "--letter": Sr
              },
              children: rr
            }, Sr)))]
          }), (0, Rr.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [Ir && "victory" === jr && (0, Rr.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: ar("frontlineRoundEnd:comeback")
            }), (0, Rr.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, Rr.jsx)("b", {
                className: "Friendly",
                children: fr
              }), " \u2013 ", (0, Rr.jsx)("b", {
                className: "Enemy",
                children: Er
              })]
            })]
          })]
        }), mr.length > 0 && (0, Rr.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": mr.length
          },
          children: [(0, Rr.jsx)(Wr.Suspense, {
            fallback: null,
            children: (0, Rr.jsx)(SS, {
              className: "FrontlineRoundEndLineup",
              players: Nr
            })
          }), mr.map((rr => (0, Rr.jsx)(fS, {
            mvp: xr[rr],
            place: rr
          }, rr)))]
        }), (0, Rr.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: ar("frontlineRoundEnd:nextFront", {
            map: pr,
            seconds: String(Qr)
          })
        })]
      });
      var Ur
    }));

    function fS(rr) {
      let {
        mvp: Sr,
        place: Qr
      } = rr;
      const {
        t: Zr
      } = (0, vr.E)(), [Wr, ar, jr, Ir, fr] = Sr, [Er, pr] = Zr(function(rr, Sr) {
        return 1 === Sr && "damage" !== rr ? `frontlineRoundEnd:${rr}One` : `frontlineRoundEnd:${rr}`
      }(jr, Ir), {
        name: "\0",
        count: Ir.toLocaleString()
      }).split("\0");
      return (0, Rr.jsxs)("div", {
        className: yr()("FrontlineMvpCard", `Place-${Qr+1}`, `Team-${ar}`),
        style: {
          "--revealMs": `${QS[Qr]}ms`
        },
        children: [(0, Rr.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, Rr.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, Rr.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: Zr(aS[Qr])
        }), (0, Rr.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [Er, (0, Rr.jsx)("span", {
            className: "FrontlineMvpName",
            children: Wr
          }), pr]
        }), (0, Rr.jsx)("div", {
          className: "FrontlineMvpKit",
          children: fr
        })]
      })
    }
    const ES = function(rr, Sr, Qr, Zr) {
      let {
        localPlayerId: Ir
      } = Zr;
      const fr = new qr,
        Er = new ur;
      let pr = null,
        xr = null,
        mr = null,
        Nr = null,
        Ur = null,
        tr = [!1, !1];
      const hr = () => {
        var rr, Sr;
        const [Qr, Zr] = tr;
        null === (rr = xr) || void 0 === rr || rr.VK(!Qr), null === (Sr = mr) || void 0 === Sr || Sr.VK(!Zr)
      };
      return {
        onCreate: rr => {
          pr = rr, xr = new er(rr, Ir), mr = new jr.d(rr, Ir), Nr = new Jr(fr), hr(), Ur = (0, ar.H)((0, Wr.createElement)(Wr.Fragment, null, (0, Wr.createElement)(Ar, {
            hud: fr,
            crosshair: xr,
            damage: mr,
            markers: Nr
          }), (0, Wr.createElement)(jS, {
            controller: Er
          })))
        },
        onClose: () => {
          var rr, Sr, Qr, Zr;
          null === (rr = Ur) || void 0 === rr || rr(), null === (Sr = xr) || void 0 === Sr || Sr.dispose(), xr = null, null === (Qr = mr) || void 0 === Qr || Qr.dispose(), mr = null, null === (Zr = Nr) || void 0 === Zr || Zr.points.dispose(), Nr = null, pr = null
        },
        onAfterRender: (rr, Sr) => {
          var Qr, Zr, Wr, ar, jr;
          null === (Qr = xr) || void 0 === Qr || Qr.frame(rr, Sr.tanHalfFovY), null === (Zr = mr) || void 0 === Zr || Zr.frame(Sr.cameraHeading), null === (Wr = Nr) || void 0 === Wr || Wr.frame(Sr, null !== (ar = null === (jr = pr) || void 0 === jr ? void 0 : jr.getPositionView(Ir)) && void 0 !== ar ? ar : null)
        },
        onReceivedMessageFromServer: (rr, Sr) => {
          "frontlineHud" === rr ? fr.vx(Sr) : "frontlineScoreboard" === rr ? fr.receiveScoreboard(Sr) : "frontlineRoundEnd" === rr ? Er.vx(Sr) : "frontlinePrefs" === rr && (tr = Sr, hr())
        }
      }
    }
  },
  41055: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar
    });
    var Zr = Qr(72),
      Wr = Qr(1338);
    const ar = (0, Zr.memo)((function(rr) {
      let {
        controller: Sr
      } = rr;
      return (0, Wr.jsxs)("div", {
        className: "DamageFeedback",
        ref: Sr.bindElement,
        children: [(0, Wr.jsx)("div", {
          className: "DamageFeedbackLow",
          children: (0, Wr.jsx)("div", {
            className: "DamageFeedbackShade"
          })
        }), (0, Wr.jsx)("div", {
          className: "DamageFeedbackArcs"
        })]
      })
    }))
  },
  41046: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ir
    });
    var Zr = Qr(34);
    const Wr = "DamageFeedbackArcsShown",
      ar = .45,
      jr = .2;
    class Ir {
      constructor(rr, Sr) {
        let {
          arcs: Qr = !0,
          edgeGlow: Wr = !0,
          lowHealthShade: ar = !0,
          enabled: jr = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.api = rr, this.localPlayerId = Sr, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.AW = 1, this.dead = !1, this.enabled = void 0, this.parts = void 0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = rr => {
          var Sr, Qr;
          this.clearHits(), this.root = rr, this.lowLayer = null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.querySelector(".DamageFeedbackLow")) && void 0 !== Sr ? Sr : null, this.arcLayer = null !== (Qr = null === rr || void 0 === rr ? void 0 : rr.querySelector(".DamageFeedbackArcs")) && void 0 !== Qr ? Qr : null, this.showRoot(), this.drawLow()
        }, this.parts = {
          arcs: Qr,
          edgeGlow: Wr,
          lowHealthShade: ar
        }, this.enabled = jr, this.token = Zr.i.subscribe("damagedByOtherPlayer", (rr => {
          let {
            direction: Sr,
            GW: Qr
          } = rr;
          this.onHurt(Sr, Qr)
        })), this.syncHealth(), this.showCustomDamage()
      }
      VK(rr) {
        rr !== this.enabled && (this.enabled = rr, this.showCustomDamage(), rr || this.clearHits(), this.showRoot())
      }
      frame(rr) {
        this.syncHealth(), this.cameraHeading = rr;
        for (const Sr of this.arcs) this.drawArcAngle(Sr)
      }
      dispose() {
        Zr.i.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(Wr)
      }
      showCustomDamage() {
        document.body.classList.toggle(Wr, this.enabled && this.parts.arcs)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const rr = this.api.getClientOption(this.localPlayerId, "_health"),
          Sr = this.api.getClientOption(this.localPlayerId, "_shield"),
          Qr = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(rr, this.readHealth) && Object.is(Sr, this.readShield) && Object.is(Qr, this.readMaxHealth)) return;
        if (this.readHealth = rr, this.readShield = Sr, this.readMaxHealth = Qr, null === rr || void 0 === rr || !Qr) return this.lastHealthPool = null, this.maxHealth = null, this.AW = 1, this.dead = !1, void this.drawLow();
        const Zr = rr + (null !== Sr && void 0 !== Sr ? Sr : 0);
        if (null !== this.lastHealthPool && Zr < this.lastHealthPool) {
          const rr = performance.now(),
            Sr = (this.lastHealthPool - Zr) / Qr;
          this.lastDrop = rr - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + Sr,
            at: this.lastDrop.at
          } : {
            frac: Sr,
            at: rr
          }
        }
        this.dead = rr <= 0, this.dead && this.clearHits(), this.lastHealthPool = Zr, this.maxHealth = Qr, this.AW = rr > 0 ? rr / Qr : 1, this.drawLow()
      }
      onHurt(rr, Sr) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const Qr = Math.min(1, this.takeDamageFrac(Sr) / .3);
        null !== rr && this.parts.arcs && this.showArc(rr, Qr), this.parts.edgeGlow && this.flashEdge(null === rr ? null : rr - this.cameraHeading, .4 + .6 * Qr)
      }
      takeDamageFrac(rr) {
        if (void 0 !== rr && this.maxHealth) return rr / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: Sr
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, Sr
      }
      drawLow() {
        if (!this.lowLayer || !this.parts.lowHealthShade) return;
        const rr = Er((ar - this.AW) / .25),
          Sr = Er((jr - this.AW) / .15000000000000002),
          Qr = this.AW < ar;
        this.lowLayer.classList.toggle("Active", Qr), this.lowLayer.classList.toggle("Critical", this.AW < jr), this.lowLayer.style.opacity = String(Qr ? .55 + .3 * rr + .15 * Sr : 0)
      }
      showArc(rr, Sr) {
        var Qr, Zr;
        if (!this.arcLayer) return;
        let Wr = this.arcs.find((Sr => fr(Sr.direction, rr) < .6));
        if (!Wr) {
          const Sr = document.createElement("div");
          Sr.className = "DamageFeedbackArc", Sr.appendChild(document.createElement("div")).className = "DamageFeedbackArcBand", this.arcLayer.appendChild(Sr), Wr = {
            element: Sr,
            direction: rr,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(Wr)
        }
        Wr.direction = rr, this.drawArcAngle(Wr);
        const ar = Wr.fade ? Number(getComputedStyle(Wr.element).opacity) : 0;
        null === (Qr = Wr.fade) || void 0 === Qr || Qr.cancel(), null === (Zr = Wr.pop) || void 0 === Zr || Zr.cancel(), Wr.element.style.opacity = "1";
        const jr = Wr.element.animate([{
          opacity: ar
        }, {
          opacity: 1
        }], 144);
        Wr.fade = jr, Wr.pop = Wr.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * Sr
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const Ir = Wr;
        jr.onfinish = () => {
          if (Ir.fade !== jr) return;
          const rr = Ir.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          rr.startTime = jr.startTime, Ir.fade = rr, rr.onfinish = () => {
            Ir.fade === rr && (Ir.element.remove(), pr(this.arcs, Ir))
          }
        }
      }
      drawArcAngle(rr) {
        const Sr = rr.direction - this.cameraHeading;
        (null === rr.drawnAngle || Math.abs(Sr - rr.drawnAngle) > .005) && (rr.drawnAngle = Sr, rr.element.style.rotate = `${Sr}rad`)
      }
      flashEdge(rr, Sr) {
        var Qr, Zr, Wr;
        if (!this.root) return;
        let ar = this.flashes.find((Sr => null === Sr.angle || null === rr ? Sr.angle === rr : fr(Sr.angle, rr) < .5));
        if (!ar) {
          const Sr = document.createElement("div");
          Sr.className = "DamageFeedbackFlash";
          const Qr = Sr.appendChild(document.createElement("div"));
          Qr.className = "DamageFeedbackFlashGlow", this.root.insertBefore(Sr, this.arcLayer), ar = {
            element: Sr,
            glow: Qr,
            angle: rr,
            level: 0,
            animation: null
          }, this.flashes.push(ar)
        }
        const jr = null === (Qr = ar.animation) || void 0 === Qr || null === (Zr = Qr.effect) || void 0 === Zr ? void 0 : Zr.getComputedTiming().progress,
          Ir = null === jr || void 0 === jr ? 0 : ar.level * (1 - jr);
        ar.level = Math.min(1, Math.max(Sr, Ir + .6 * Sr)), ar.angle = rr;
        const {
          x: Er,
          y: xr,
          rx: mr,
          ry: Nr
        } = function(rr, Sr) {
          const Qr = window.innerWidth,
            Zr = window.innerHeight;
          if (null === rr) return {
            x: Qr / 2,
            y: Zr / 2,
            rx: 0,
            ry: 0
          };
          const Wr = Math.sin(rr),
            ar = -Math.cos(rr),
            jr = Qr / 2 / Math.max(1e-6, Math.abs(Wr)),
            Ir = Zr / 2 / Math.max(1e-6, Math.abs(ar)),
            fr = Math.min(jr, Ir),
            Er = Math.round(Qr / 2 + Wr * fr),
            pr = Math.round(Zr / 2 + ar * fr),
            xr = Zr / 100 * (.85 + .25 * Sr),
            mr = jr <= Ir,
            Nr = Math.round((mr ? 30 : 74) * xr),
            Ur = Math.round((mr ? 58 : 26) * xr);
          return {
            x: Er,
            y: pr,
            rx: Nr,
            ry: Ur
          }
        }(rr, ar.level), {
          style: Ur
        } = ar.glow;
        ar.glow.classList.toggle("Everywhere", null === rr), Ur.setProperty("--glowX", `${Er}px`), Ur.setProperty("--glowY", `${xr}px`), Ur.setProperty("--glowRx", `${mr}px`), Ur.setProperty("--glowRy", `${Nr}px`), ar.element.style.transformOrigin = `${Er}px ${xr}px`, null === (Wr = ar.animation) || void 0 === Wr || Wr.cancel();
        const tr = ar.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: ar.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * ar.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * ar.level
        });
        ar.animation = tr;
        const hr = ar;
        tr.onfinish = () => {
          hr.animation === tr && (hr.element.remove(), pr(this.flashes, hr))
        }
      }
      clearHits() {
        for (const Zr of this.arcs) {
          var rr, Sr;
          null === (rr = Zr.fade) || void 0 === rr || rr.cancel(), Zr.fade = null, null === (Sr = Zr.pop) || void 0 === Sr || Sr.cancel(), Zr.element.remove()
        }
        this.arcs.length = 0;
        for (const Zr of this.flashes) {
          var Qr;
          null === (Qr = Zr.animation) || void 0 === Qr || Qr.cancel(), Zr.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function fr(rr, Sr) {
      return Math.abs(Math.atan2(Math.sin(rr - Sr), Math.cos(rr - Sr)))
    }

    function Er(rr) {
      return Math.max(0, Math.min(1, rr))
    }

    function pr(rr, Sr) {
      const Qr = rr.indexOf(Sr); - 1 !== Qr && rr.splice(Qr, 1)
    }
  },
  7388: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr
    });
    const Zr = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function Wr(rr) {
      return null === Zr ? Array.from(rr) : Array.from(Zr.segment(rr), (rr => {
        let {
          segment: Sr
        } = rr;
        return Sr
      }))
    }
  },
  40013: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => jr,
      f: () => ar
    });
    const Zr = new WeakMap;

    function Wr(rr) {
      let Sr = Zr.get(rr);
      return Sr || (Sr = {
        hidden: rr.hidden,
        x: NaN,
        y: NaN
      }, Zr.set(rr, Sr)), Sr
    }

    function ar(rr, Sr) {
      const Qr = Wr(rr);
      Qr.hidden !== Sr && (Qr.hidden = Sr, rr.hidden = Sr)
    }

    function jr(rr, Sr, Qr) {
      const Zr = Wr(rr);
      Zr.x === Sr && Zr.y === Qr || (Zr.x = Sr, Zr.y = Qr, rr.style.translate = `${Sr}vw ${Qr}vh`)
    }
  },
  38538: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr
    });
    const Zr = {
      "skyblock:forged:astral-astral-astral": {
        name: "Heart of the Cosmos",
        lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
        damageMultiplier: 1.8,
        cooldownMultiplier: .8,
        ability: "starfall"
      },
      "skyblock:forged:astral-moonstone-sanguine": {
        name: "Eclipse Edge",
        lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
        damageMultiplier: 1.7,
        cooldownMultiplier: .81,
        ability: "eclipseField"
      },
      "skyblock:forged:astral-diamond-moonstone": {
        name: "Starcutter",
        lore: "A blade so sharp the Forge Mother swears it once cut a falling star in two.",
        damageMultiplier: 1.65,
        cooldownMultiplier: .83,
        ability: "starfall"
      },
      "skyblock:forged:astral-sanguine-magmasteel": {
        name: "Triune Flame",
        lore: "Each of Lord Vulcan's three faces, bound into one burning edge.",
        damageMultiplier: 1.65,
        cooldownMultiplier: .83,
        ability: "magmaWave"
      },
      "skyblock:forged:magmasteel-magmasteel-magmasteel": {
        name: "Vulcan's Bane",
        lore: "Forged in the heat of his own rift. It remembers the way down.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "magmaWave"
      },
      "skyblock:forged:magmasteel-astral-sanguine": {
        name: "Comet's Wake",
        lore: "It leaves a trail of fire through the air, like something falling from very far up.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "starfall"
      },
      "skyblock:forged:magmasteel-sanguine-astral": {
        name: "Vulcan's Ruin",
        lore: "The Forge Mother made only one, then sat down for a long while.",
        damageMultiplier: 1.6,
        cooldownMultiplier: .83,
        ability: "warcry"
      },
      "skyblock:forged:magmasteel-iron-stone": {
        name: "Forgehand",
        lore: "A smith's sword: plain to look at, and it hits like a hammer.",
        damageMultiplier: 1.4,
        cooldownMultiplier: .9,
        ability: "quake"
      },
      "skyblock:forged:sanguine-sanguine-sanguine": {
        name: "Crimson Covenant",
        lore: "It drinks, and so do you.",
        damageMultiplier: 1.53,
        cooldownMultiplier: .83,
        ability: "bloodPact"
      },
      "skyblock:forged:sanguine-astral-moonstone": {
        name: "Nightbloom",
        lore: "A red flower that only opens after dark.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "eclipseField"
      },
      "skyblock:forged:sanguine-iron-wood": {
        name: "Butcher's Oath",
        lore: "Heavy, honest and always hungry.",
        damageMultiplier: 1.35,
        cooldownMultiplier: .95,
        ability: "bloodPact"
      },
      "skyblock:forged:moonstone-moonstone-moonstone": {
        name: "Lunar Requiem",
        lore: "Swung, it leaves a pale arc that lingers like a second moon.",
        damageMultiplier: 1.35,
        cooldownMultiplier: .85,
        ability: "moonDash"
      },
      "skyblock:forged:moonstone-astral-moonstone": {
        name: "Silver Tide",
        lore: "Pulled by the same moon that pulls the sea.",
        damageMultiplier: 1.4,
        cooldownMultiplier: .84,
        ability: "moonDash"
      },
      "skyblock:forged:diamond-diamond-diamond": {
        name: "Prism Fang",
        lore: "Every facet catches a different light, and every strike finds a different weakness.",
        damageMultiplier: 1.29,
        cooldownMultiplier: .88,
        ability: "gildedEdge",
        traits: {
          crit: 1.8
        }
      },
      "skyblock:forged:diamond-moonstone-gold": {
        name: "Jeweller's Pride",
        lore: "Too pretty to fight with. Fight with it anyway.",
        damageMultiplier: 1.24,
        cooldownMultiplier: .91,
        ability: "gildedEdge"
      },
      "skyblock:forged:gold-gold-gold": {
        name: "King's Ransom",
        lore: "Worth more than the treasure it guards.",
        damageMultiplier: 1.18,
        cooldownMultiplier: .91,
        ability: "gildedEdge",
        traits: {
          coins: 2.5
        }
      },
      "skyblock:forged:gold-moonstone-gold": {
        name: "Midas Moon",
        lore: "Mobs it fells seem to rattle with coins.",
        damageMultiplier: 1.18,
        cooldownMultiplier: .92,
        ability: "gildedEdge",
        traits: {
          coins: 2,
          bossBane: .6
        }
      },
      "skyblock:forged:iron-iron-iron": {
        name: "Old Faithful",
        lore: "It has never let anyone down. It never will.",
        damageMultiplier: 1.15,
        cooldownMultiplier: .94,
        ability: "warcry"
      },
      "skyblock:forged:iron-wood-wood": {
        name: "Militia Blade",
        lore: "Handed out at the outpost gate when the rift first opened.",
        damageMultiplier: 1.09,
        cooldownMultiplier: .97,
        ability: "warcry"
      },
      "skyblock:forged:stone-stone-stone": {
        name: "Quarryman's Cleaver",
        lore: "Chipped from one block of stone, handle and all.",
        damageMultiplier: 1.09,
        cooldownMultiplier: .97,
        ability: "quake"
      },
      "skyblock:forged:wood-wood-wood": {
        name: "Lorenzo's Lesson",
        lore: "Courage matters more than the blade. This one is mostly courage.",
        damageMultiplier: 1.06,
        cooldownMultiplier: .97,
        ability: "warcry"
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);