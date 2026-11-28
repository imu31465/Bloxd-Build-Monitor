export const id = 18;
export const ids = [18];
export const modules = {
  38243: (dd, Od, md) => {
    md.d(Od, {
      e: () => yd,
      h: () => bd,
      i: () => od,
      k: () => td
    });
    var Wd = md(35535),
      Fd = md(3428),
      Rd = md(3432),
      Xd = md(9850),
      Kd = md(1566),
      hd = md(66),
      vd = md(86),
      Qd = md(1341);

    function td() {
      var dd;
      return (0, Kd.i)(Fd.d, (0, Fd.n)()), (0, Qd.jsx)(Qd.Fragment, {
        children: null === (dd = (0, Fd.n)()) || void 0 === dd ? void 0 : dd.content
      })
    }

    function od(dd) {
      var Od;
      let {
        show: md
      } = dd;
      (0, Kd.i)(Fd.d, (0, Fd.n)());
      const vd = null === (Od = (0, Fd.n)()) || void 0 === Od ? void 0 : Od.menu;
      return (0, hd.useEffect)((() => {
        var dd;
        md || (null === vd || void 0 === vd || null === (dd = vd.onClose) || void 0 === dd || dd.call(vd), (0, Rd.q)())
      }), [md, vd]), (0, hd.useEffect)((() => md ? (0, Xd.d)(Rd.y, Rd.h) : void 0), [md]), (0, Qd.jsx)(Wd.b, {
        showing: md,
        globallyUniqueKey: "clientGameMenu",
        children: null === vd || void 0 === vd ? void 0 : vd.content
      })
    }
    const Nd = new Map,
      qd = new Set;

    function Hd(dd, Od) {
      Od ? Nd.set(dd, Od) : Nd.delete(dd);
      for (const md of qd) md()
    }

    function yd(dd) {
      let {
        placement: Od = "bottom"
      } = dd;
      const md = (0, hd.useRef)(null);
      return (0, hd.useLayoutEffect)((() => {
        const dd = md.current;
        return Hd(Od, dd), () => {
          Nd.get(Od) === dd && Hd(Od, null)
        }
      }), [Od]), (0, Qd.jsx)("div", {
        ref: md,
        id: `clientGameHud-${Od}`,
        style: {
          display: "contents"
        }
      })
    }

    function bd(dd) {
      let {
        children: Od,
        placement: md = "bottom"
      } = dd;
      const [Wd, Fd] = (0, hd.useState)((() => {
        var dd;
        return null !== (dd = Nd.get(md)) && void 0 !== dd ? dd : null
      }));
      return (0, hd.useEffect)((() => {
        const dd = () => {
          var dd;
          Fd(null !== (dd = Nd.get(md)) && void 0 !== dd ? dd : null)
        };
        return qd.add(dd), dd(), () => {
          qd.delete(dd)
        }
      }), [md]), Wd ? (0, vd.createPortal)(Od, Wd) : null
    }
  },
  35535: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd
    });
    var Wd = md(5197),
      Fd = md(5206);

    function Rd(dd) {
      let {
        children: Od,
        showing: md,
        globallyUniqueKey: Rd,
        alwaysMountChildren: Xd = !1,
        doGameplayStartStopOnShow: Kd = !0,
        keepsMovement: hd = !1
      } = dd;
      return (0, Fd.e)(!0, md, Rd, hd), (0, Wd.b)(Kd, md), md || Xd ? Od : null
    }
  },
  38302: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd,
      e: () => hd,
      h: () => vd,
      j: () => Qd,
      l: () => qd
    });
    var Wd = md(66),
      Fd = md(4308),
      Rd = md(3510),
      Xd = md(32);
    const Kd = 8,
      hd = "InGameHeaderContainer",
      vd = "TopRightElements";

    function Qd(dd) {
      const [Od] = (0, Fd.b)(), [md, Rd] = (0, Wd.useState)(!1);
      return (0, Wd.useLayoutEffect)((() => {
        if (!dd) return;
        const Od = document.querySelector(`.${hd}`),
          md = document.querySelector(`.${vd}`),
          Wd = () => {
            const Wd = dd.getBoundingClientRect(),
              Fd = Od ? Od.getBoundingClientRect().right : 0,
              Xd = md ? md.getBoundingClientRect().left : window.innerWidth,
              hd = Wd.left < Fd + Kd,
              vd = Wd.right > Xd - Kd;
            Rd(hd || vd)
          };
        Wd();
        const Fd = new ResizeObserver(Wd);
        return Fd.observe(dd), Od && Fd.observe(Od), md && Fd.observe(md), () => {
          Fd.disconnect()
        }
      }), [dd, Od]), md
    }
    const td = `.InGameUi .${hd}`,
      od = [td, ".InGameUi .TopRightIcons", ".InGameUi .TopRightElementsRight"],
      Nd = 1e3;

    function qd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd,
        md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const [Fd, hd] = (0, Wd.useState)(null);
      return (0, Wd.useLayoutEffect)((() => {
        if (!dd) return;
        const Wd = new ResizeObserver((() => {
          vd()
        }));
        Wd.observe(dd), Od && Od !== dd && Wd.observe(Od);
        let Fd = [];

        function vd() {
          var Rd, Xd, vd;
          const Qd = dd.getBoundingClientRect(),
            Nd = function() {
              const dd = od.map((dd => document.querySelector(dd))).filter((dd => null !== dd));
              for (const Od of dd) Fd.includes(Od) || Wd.observe(Od);
              for (const Od of Fd) dd.includes(Od) || Wd.unobserve(Od);
              return Fd = dd, dd
            }(),
            qd = Nd.filter((dd => {
              const Od = dd.getBoundingClientRect();
              return Od.width > 0 && Od.height > 0 && Qd.left < Od.right + Kd && Qd.right > Od.left - Kd
            }));
          if (0 === qd.length && !md) return void hd(null);
          const Hd = Nd.find((dd => dd.matches(td))),
            yd = Math.max(null !== (Rd = null === Hd || void 0 === Hd ? void 0 : Hd.getBoundingClientRect().bottom) && void 0 !== Rd ? Rd : 0, ...qd.map((dd => dd.getBoundingClientRect().bottom))),
            bd = null !== (Xd = null === Od || void 0 === Od || null === (vd = Od.offsetParent) || void 0 === vd ? void 0 : vd.getBoundingClientRect().top) && void 0 !== Xd ? Xd : 0;
          hd(Math.ceil(yd + Kd / 2) - Math.round(bd))
        }
        const Qd = setInterval(vd, Nd);
        vd(), window.addEventListener("resize", vd);
        const qd = (0, Xd.l)(Rd.c, vd);
        return () => {
          Wd.disconnect(), clearInterval(Qd), window.removeEventListener("resize", vd), qd()
        }
      }), [dd, Od, md]), Fd
    }
  },
  38259: (dd, Od, md) => {
    md.d(Od, {
      d: () => Xd,
      g: () => Fd,
      h: () => Rd
    });
    var Wd = md(66);

    function Fd(dd) {
      return Kd(dd, hd)
    }

    function Rd(dd) {
      return Kd(dd, vd)
    }

    function Xd(dd) {
      return `${Math.floor(dd/60)}:${String(dd%60).padStart(2,"0")}`
    }

    function Kd(dd, Od) {
      const [, md] = (0, Wd.useState)(null);
      return (0, Wd.useEffect)((() => {
        if (0 === dd) return;
        const Wd = window.setInterval((() => {
          const Wd = Od(dd);
          md((Od => (null === Od || void 0 === Od ? void 0 : Od.endsAt) === dd && Od.value === Wd ? Od : {
            endsAt: dd,
            value: Wd
          }))
        }), 250);
        return () => {
          window.clearInterval(Wd)
        }
      }), [dd, Od]), Od(dd)
    }

    function hd(dd) {
      return (dd - performance.now()) / 1e3
    }

    function vd(dd) {
      return Math.max(0, Math.ceil(hd(dd)))
    }
  },
  38298: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd
    });
    const Wd = [{
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

    function Fd(dd, Od, md) {
      const Fd = Math.abs(dd - Od),
        Rd = Date.now() - md;
      for (const Xd of Wd)
        if (dd < Xd.maxDist) return Fd >= Xd.hardUpdateDist || Rd > Xd.timeBetweenSoftChecks && Fd >= Xd.softUpdateDist;
      return !1
    }
  },
  9850: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      d: () => Fd
    });
    let Wd = null;
    const Fd = function(dd) {
        const Od = {
          cycle: dd,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Wd = Od, () => {
          Wd === Od && (Wd = null)
        }
      },
      Rd = () => {
        var dd;
        return null !== (dd = Wd) && void 0 !== dd && dd.canCycle() ? Wd.cycle : null
      }
  },
  40091: (dd, Od, md) => {
    function Wd(dd, Od, md) {
      var Wd;
      const {
        width: Fd,
        height: Rd
      } = md, Xd = null !== (Wd = dd.text) && void 0 !== Wd ? Wd : dd, Kd = (Xd.x / 100 - .5) * Fd, hd = (Xd.y / 100 - .5) * Rd, vd = Fd / 2 - Od.x;
      if (null !== dd.text && Math.abs(Kd) <= vd && hd >= Od.top - Rd / 2 && hd <= Rd / 2 - Od.bottom) return {
        x: Xd.x,
        y: Xd.y
      };
      const Qd = Math.min(0 === Kd ? 1 / 0 : vd / Math.abs(Kd), hd > 0 ? (Rd / 2 - Od.bottom) / hd : hd < 0 ? (Od.top - Rd / 2) / hd : 1 / 0);
      return !Number.isFinite(Qd) || Qd < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + Kd * Qd / Fd * 100,
        y: 50 + hd * Qd / Rd * 100
      }
    }
    md.d(Od, {
      b: () => Wd
    })
  },
  41067: (dd, Od, md) => {
    md.d(Od, {
      c: () => Fd
    });
    const Wd = 1e3;

    function Fd(dd, Od) {
      const md = performance.now() + dd;
      return 0 !== Od && Math.abs(md - Od) < Wd ? Od : md
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
  41058: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => tO
    });
    const Wd = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes", "hat", "back"];
    var Fd = md(66),
      Rd = md(3428),
      Xd = md(41061),
      Kd = md(38573),
      hd = md(38273),
      vd = md(1890),
      Qd = md(32);
    const td = {
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
    const od = 32;

    function Nd(dd, Od, md, Wd) {
      return {
        tag: "line",
        attrs: {
          x1: dd,
          y1: Od,
          x2: md,
          y2: Wd,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function qd(dd) {
      return {
        tag: "circle",
        attrs: {
          cx: od,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : od,
          r: dd,
          class: "Fill"
        }
      }
    }

    function Hd(dd, Od) {
      return {
        tag: "path",
        attrs: {
          d: dd,
          "stroke-width": Od
        }
      }
    }

    function yd(dd, Od, md) {
      return {
        tag: "circle",
        attrs: {
          cx: od,
          cy: od,
          r: dd,
          "stroke-width": Od,
          class: md
        }
      }
    }

    function bd(dd, Od, md) {
      return {
        tag: "text",
        attrs: {
          x: dd,
          y: Od,
          class: "Fill Label"
        },
        text: md
      }
    }
    const Td = {
      pistol: dd => [Nd(od, od - dd - 5, od, od - dd), Nd(od - dd - 5, od, od - dd, od), Nd(od + dd, od, od + dd + 5, od), qd(1.4)],
      rifle: dd => [Nd(od, od - dd - 8, od, od - dd), Nd(od, od + dd, od, od + dd + 8), Nd(od - dd - 8, od, od - dd, od), Nd(od + dd, od, od + dd + 8, od), qd(1)],
      smg: dd => {
        const Od = Math.PI / 2,
          md = [];
        for (let Xd = 0; Xd < 4; Xd++) md.push((Fd = Xd * Od + .35, Rd = (Xd + 1) * Od - .35, Hd(`M${od+(Wd=6+dd)*Math.cos(Fd)} ${od+Wd*Math.sin(Fd)} A${Wd} ${Wd} 0 0 1 ${od+Wd*Math.cos(Rd)} ${od+Wd*Math.sin(Rd)}`, 2)));
        var Wd, Fd, Rd;
        return [...md, qd(1.4)]
      },
      shotgun: dd => [yd(dd, 3, "Ring Outline"), yd(dd, 1.5, "Ring")],
      marksman: dd => [Hd(`M${26-dd/2} ${39+dd/2} L32 33 L${38+dd/2} ${39+dd/2}`, 2), Nd(14 - dd, od, 24 - dd, od, 1.5), Nd(40 + dd, od, 50 + dd, od, 1.5), Nd(14 - dd, 30, 14 - dd, 34, 1.5), Nd(50 + dd, 30, 50 + dd, 34, 1.5)],
      machineGun: dd => {
        const Od = 10 + dd,
          md = [];
        for (const [Wd, Fd] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) md.push(Hd(`M${od+Wd*Od} ${od+Fd*(Od-5)} L${od+Wd*Od} ${od+Fd*Od} L${od+Wd*(Od-5)} ${od+Fd*Od}`, 2));
        return [...md, Nd(od, 28, od, 36, 1.5), Nd(28, od, 36, od, 1.5)]
      },
      launcher: () => [Nd(14, 30, 50, 30, 1.5), Nd(od, 24, od, 52, 1.5), Nd(28, 38, 36, 38, 1.5), Nd(29, 44, 35, 44, 1.5), Nd(30, 50, 34, 50, 1.5), bd(38, 40, "100"), bd(37, 46, "200"), qd(1.4, 30)],
      melee: () => [Hd("M32 26 L38 32 L32 38 L26 32 Z", 1.5), qd(1.2)],
      throwable: () => [qd(1.6)]
    };

    function pd(dd) {
      let {
        tag: Od,
        attrs: md,
        text: Wd
      } = dd, Fd = `<${Od}`;
      for (const [Rd, Xd] of Object.entries(md)) Fd += ` ${Rd}="${Xd}"`;
      return void 0 === Wd ? `${Fd}/>` : `${Fd}>${Wd}</${Od}>`
    }
    class Yd {
      constructor(dd, Od) {
        this.api = dd, this.localPlayerId = Od, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = dd => {
          this.element = dd, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, dd && !this.enabled && (dd.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, vd.getRemInPx)()))
        }, this.tokens = [Qd.j.subscribe("aimingOverlay", (dd => {
          this.sniperOverlay = "sniper" === dd
        })), Qd.j.subscribe("mouseState", (dd => {
          let {
            isDown: Od
          } = dd;
          this.mouseDown = Od
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      rY(dd) {
        dd !== this.enabled && (this.enabled = dd, this.drawnVisible = null, dd || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(dd, Od) {
        var md, Wd;
        if (!this.enabled) return;
        const {
          api: Fd
        } = this, Rd = Fd.isAlive(this.localPlayerId) && null !== (md = null === (Wd = Fd.NWd(this.localPlayerId)) || void 0 === Wd ? void 0 : Wd.name) && void 0 !== md ? md : null, Xd = (Kd = Rd) && td[Kd] || null;
        var Kd;
        if (this.setOwnsCrosshair(null !== Xd), !this.element) return;
        const hd = Fd.getHeldGunInaccuracy(),
          vd = null !== hd,
          Qd = null !== Xd && !this.sniperOverlay && Fd.isCrosshairShown();
        if (Qd !== this.drawnVisible && (this.drawnVisible = Qd, this.element.style.display = Qd ? "block" : "none"), !Qd) return;
        const od = vd ? function(dd) {
            return "launcher" === dd || "melee" === dd || "throwable" === dd ? "none" : "shotgun" === dd ? "cone" : "offset"
          }(Xd) : "none",
          Nd = null !== hd && void 0 !== hd ? hd : 0;
        "cone" === od ? this.drawCone(Xd, this.coneRadiusVh(Nd, Od) * this.gapPerVh, dd) : (this.coneDrawn = !1, this.draw(Xd, "none" === od ? 2 : this.offsetGap(Nd)));
        const qd = !vd && this.mouseDown;
        qd !== this.drawnPressed && (this.drawnPressed = qd, this.element.classList.toggle("Pressed", qd))
      }
      dispose() {
        for (const dd of this.tokens) Qd.j.unsubscribe(dd);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(dd, Od) {
        var md, Wd;
        dd !== this.drawnFamily ? (this.drawnFamily = dd, this.drawnGap = Od, this.element.innerHTML = function(dd, Od) {
          return `<svg viewBox="0 0 64 64">${Td[dd](Od).map(pd).join("")}</svg>`
        }(dd, Od), this.shapes = Array.from(null !== (md = null === (Wd = this.element.firstElementChild) || void 0 === Wd ? void 0 : Wd.children) && void 0 !== md ? md : [])) : Od !== this.drawnGap && (this.drawnGap = Od, function(dd, Od, md) {
          const Wd = Td[Od](md);
          for (let Fd = 0; Fd < Wd.length; Fd++)
            for (const [Od, md] of Object.entries(Wd[Fd].attrs)) {
              const Wd = String(md);
              dd[Fd].getAttribute(Od) !== Wd && dd[Fd].setAttribute(Od, Wd)
            }
        }(this.shapes, dd, Od))
      }
      drawCone(dd, Od, md) {
        dd === this.drawnFamily && this.coneDrawn ? this.shownRadius += (Od - this.shownRadius) * (1 - Math.exp(-md / 80)) : this.shownRadius = Od, this.coneDrawn = !0, this.draw(dd, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(dd, Od) {
        if (!(Od > 0)) return 1;
        const md = dd * Kd.l / 2;
        return Math.max(50 * Math.tan(md) / Od, 1)
      }
      offsetGap(dd) {
        const Od = 2 + ((0, hd.g)(dd) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * Od) / 2)
      }
      setOwnsCrosshair(dd) {
        dd !== this.ownsCrosshair && (this.ownsCrosshair = dd, document.body.classList.toggle("FrontlineCustomCrosshair", dd))
      }
    }
    var gd = md(1155),
      wd = md.n(gd),
      Ed = md(38243),
      Jd = md(38302),
      Ud = md(1238),
      xd = md(1566),
      Bd = md(38259),
      Sd = md(41063),
      sd = md(41067);
    const ud = "frontlineHudChanged",
      Vd = "frontlineScoreboardChanged";
    class Ad {
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
      Yt(dd) {
        this.wire = dd, Qd.j.lQ(ud, dd, !0)
      }
      receiveScoreboard(dd) {
        const Od = "scoreboard" === dd[0] ? (0, sd.c)(dd[5], this.scoreboard.endsAt) : 0;
        this.scoreboard = {
          wire: dd,
          endsAt: Od
        }, Qd.j.lQ(Vd, this.scoreboard, !0)
      }
    }
    var rd = md(1341);
    const Gd = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function nd(dd) {
      let {
        className: Od,
        point: md
      } = dd;
      const [Wd, Fd, Rd, Xd, Kd, hd] = md;
      return (0, rd.jsxs)("div", {
        className: wd()(Od, `Owner-${Fd||"None"}`, `Leader-${Xd||"None"}`, {
          Contested: Kd,
          Here: hd
        }),
        children: [(0, rd.jsx)("span", {
          className: "FrontlinePointLetter",
          children: Wd
        }), (0, rd.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${Rd}%`
          }
        })]
      })
    }
    const Ld = (0, Fd.memo)((function(dd) {
        let {
          points: Od,
          markers: md
        } = dd;
        const {
          t: Wd
        } = (0, Ud.G)();
        return Od ? (0, rd.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: Od.map((dd => {
            const [Od, , , , , , , Fd] = dd;
            return (0, rd.jsxs)("div", {
              ref: md.points.bindMarker(Od),
              className: "FrontlinePointMarker",
              children: [(0, rd.jsx)(nd, {
                className: "FrontlinePointMarkerTile",
                point: dd
              }), (0, rd.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [Fd && (0, rd.jsx)("span", {
                  className: wd()("FrontlinePointMarkerHomeTurf", `Team-${Fd}`),
                  children: Wd("frontlineHud:homeTurf", {
                    team: Wd(Gd[Fd])
                  })
                }), (0, rd.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, Od)
          }))
        }) : null
      })),
      Pd = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      zd = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function cd(dd) {
      let {
        hud: Od,
        crosshair: md,
        damage: Wd,
        markers: Fd
      } = dd;
      const Rd = (0, xd.i)(ud, Od.getWire()),
        Xd = (0, xd.i)(Vd, Od.getScoreboard());
      return (0, rd.jsxs)(rd.Fragment, {
        children: [(0, rd.jsx)(Sd.d, {
          controller: Wd
        }), (0, rd.jsx)(Ld, {
          points: "scoreboard" === Xd.wire[0] ? Xd.wire[6] : null,
          markers: Fd
        }), (0, rd.jsx)(Dd, {
          view: Xd
        }), (0, rd.jsx)("div", {
          className: "FrontlineReticle",
          ref: md.bindElement
        }), (0, rd.jsx)(Ed.h, {
          children: (0, rd.jsx)(jd, {
            wire: Rd
          })
        })]
      })
    }
    const jd = (0, Fd.memo)((function(dd) {
        let {
          wire: Od
        } = dd;
        const {
          t: md
        } = (0, Ud.G)();
        if ("capture" === Od[0]) {
          const [, dd, Wd, Fd, Rd, Xd, Kd] = Od, hd = Math.round(Fd / 100 * 24);
          return (0, rd.jsxs)("div", {
            className: wd()("FrontlinePlate", `Status-${Wd}`, `Leader-${Rd||"None"}`),
            children: [(0, rd.jsx)(Cd, {}), (0, rd.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, rd.jsx)("span", {
                className: "FrontlineObjective",
                children: dd
              }), (0, rd.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, rd.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: md("frontlineHud:objective", {
                    point: dd,
                    friendly: Xd,
                    enemy: Kd
                  })
                }), (0, rd.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: md(Pd[Wd])
                })]
              }), (0, rd.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(Fd).padStart(3, "0"), (0, rd.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, rd.jsx)(Id, {
              segments: 24,
              lit: hd
            })]
          })
        }
        if ("alert" === Od[0]) {
          const [, dd, Wd, Fd] = Od;
          return (0, rd.jsxs)("div", {
            className: wd()("FrontlinePlate", "FrontlineAlert", `Tone-${Fd}`),
            children: [(0, rd.jsx)(Cd, {}), (0, rd.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: md(zd[dd])
            }), (0, rd.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: Wd
            })]
          })
        }
        return null
      })),
      Dd = (0, Fd.memo)((function(dd) {
        let {
          view: Od
        } = dd;
        const {
          t: md
        } = (0, Ud.G)(), Wd = (0, Fd.useRef)(null), Rd = function(dd, Od) {
          const [md, Wd] = (0, Fd.useState)(!1);
          return (0, Fd.useLayoutEffect)((() => {
            const Od = dd.current;
            if (!Od) return;
            const md = document.querySelector(`.${Jd.e}`),
              Fd = document.querySelector(`.${Jd.h}`),
              Rd = () => {
                var dd;
                const Rd = Od.querySelector(".FrontlineTeamTrack"),
                  Xd = (0, vd.getRemInPx)(),
                  Kd = Od.getBoundingClientRect().width - 2 * (null !== (dd = null === Rd || void 0 === Rd ? void 0 : Rd.getBoundingClientRect().width) && void 0 !== dd ? dd : 0),
                  hd = window.innerWidth / 2,
                  Qd = md ? md.getBoundingClientRect().right : 0,
                  td = Fd ? Fd.getBoundingClientRect().left : window.innerWidth,
                  od = Math.min(hd - Qd, td - hd) - Jd.d - Kd / 2,
                  Nd = od < 6 * Xd,
                  qd = Nd ? (window.innerWidth - Kd) / 2 - Jd.d : od;
                Od.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(qd,14*Xd)))}px`), Wd(Nd)
              };
            Rd();
            const Xd = new ResizeObserver(Rd);
            for (const dd of [Od, md, Fd]) dd && Xd.observe(dd);
            return window.addEventListener("resize", Rd), () => {
              Xd.disconnect(), window.removeEventListener("resize", Rd)
            }
          }), [dd, Od]), md
        }(Wd, "scoreboard" === Od.wire[0]);
        if ("scoreboard" !== Od.wire[0]) return null;
        const [, Xd, Kd, hd, Qd, , td] = Od.wire, od = "Red" === Xd ? "Blue" : "Red";
        return (0, rd.jsxs)("div", {
          className: wd()("FrontlineScoreboardContainer", {
            Below: Rd
          }),
          children: [(0, rd.jsxs)("div", {
            ref: Wd,
            className: "FrontlineScoreboard",
            children: [(0, rd.jsx)(Cd, {}), (0, rd.jsx)(ed, {
              team: Xd,
              tickets: Kd,
              goal: Qd,
              side: "Friendly"
            }), (0, rd.jsx)("div", {
              className: "FrontlinePoints",
              children: td.map((dd => (0, rd.jsx)(nd, {
                className: "FrontlinePoint",
                point: dd
              }, dd[0])))
            }), (0, rd.jsx)(ed, {
              team: od,
              tickets: hd,
              goal: Qd,
              side: "Enemy"
            })]
          }), (0, rd.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, rd.jsx)(ld, {
              endsAt: Od.endsAt
            }), (0, rd.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: md("frontlineHud:ticketGoal", {
                goal: Qd
              })
            })]
          })]
        })
      }));

    function ed(dd) {
      let {
        team: Od,
        tickets: md,
        goal: Wd,
        side: Fd
      } = dd;
      const {
        t: Rd
      } = (0, Ud.G)(), Xd = String(md).padStart(3, "0"), Kd = Xd.search(/[1-9]/), hd = -1 === Kd ? Xd : Xd.slice(0, Kd), vd = Math.min(20, Math.floor(md / Wd * 20));
      return (0, rd.jsxs)("div", {
        className: wd()("FrontlineTeamScore", Fd, `Team-${Od}`),
        children: [(0, rd.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, rd.jsx)("span", {
            className: "Lead",
            children: hd
          }), -1 !== Kd && Xd.slice(Kd)]
        }), (0, rd.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, rd.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: Rd(Gd[Od])
          }), (0, rd.jsx)(Id, {
            segments: 20,
            lit: vd
          })]
        })]
      })
    }

    function Id(dd) {
      let {
        segments: Od,
        lit: md
      } = dd;
      return (0, rd.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: Od
        }, ((dd, Od) => (0, rd.jsx)("i", {
          className: wd()({
            Lit: Od < md
          })
        }, Od)))
      })
    }

    function ld(dd) {
      let {
        endsAt: Od
      } = dd;
      const md = (0, Bd.h)(Od);
      return (0, rd.jsx)("div", {
        className: wd()("FrontlineClock", {
          Urgent: md <= 60
        }),
        children: (0, Bd.d)(md)
      })
    }

    function Cd() {
      return (0, rd.jsxs)(rd.Fragment, {
        children: [(0, rd.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, rd.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var Zd = md(41070);
    class kd {
      constructor(dd) {
        this.hud = dd, this.points = new Zd.b({
          labels: "FrontlinePointMarkerLabels",
          distance: "FrontlinePointMarkerDistance"
        }, "frontlineHud:markerDistance")
      }
      frame(dd, Od) {
        this.points.setRender(dd);
        const md = this.hud.getScoreboard().wire;
        if ("scoreboard" === md[0] && this.points.hasMarkers())
          for (const [Wd, , , , , , Fd] of md[6]) Fd && this.points.update(Wd, Fd[0], Fd[1] + 2.5, Fd[2], Od)
      }
    }
    var fd = md(7370),
      Md = md(3697);
    const dO = "frontlineRoundEndChanged";
    class OO {
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
      Yt(dd) {
        const Od = "roundEnd" === dd[0] ? performance.now() + dd[5] : 0;
        this.view = {
          wire: dd,
          key: this.view.key + 1,
          endsAt: Od
        }, Qd.j.lQ(dO, this.view, !0)
      }
    }
    var mO = md(3039);
    const WO = (0, Fd.lazy)((() => (0, Md.b)(Promise.all([md.e(267), md.e(229)]).then((() => md(54184))), (dd => dd.FrontlineMvpLineup)))),
      FO = [4800, 4e3, 3200],
      RO = [1, 0, 2],
      XO = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      KO = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function hO(dd) {
      let {
        controller: Od
      } = dd;
      const md = (0, xd.i)(dO, Od.getView()),
        Wd = (0, Bd.g)(md.endsAt);
      return "roundEnd" !== md.wire[0] || 1e3 * Wd < -2e3 ? null : (0, rd.jsx)(vO, {
        wire: md.wire,
        secondsLeft: Math.max(0, Math.ceil(Wd))
      }, md.key)
    }
    const vO = (0, Fd.memo)((function(dd) {
      let {
        wire: Od,
        secondsLeft: md
      } = dd;
      const {
        t: Rd
      } = (0, Ud.G)();
      (0, Fd.useEffect)((() => (0, mO.f)()), []);
      const [, Xd, Kd, hd, vd, , Qd, td] = Od, od = (0, Fd.useMemo)((() => RO.filter((dd => dd < td.length))), [td]), Nd = (0, Fd.useMemo)((() => od.map((dd => {
        const [, , , , , Od, md] = td[dd];
        return {
          cosmetics: Wd.map(((dd, md) => [dd, Od[md]])),
          size: 0 === dd ? 1.15 : .85,
          heldGun: {
            name: md,
            aimed: 0 === dd
          },
          showAfterMs: FO[dd]
        }
      }))), [td, od]);
      return (0, rd.jsxs)("div", {
        className: wd()("FrontlineRoundEnd", `Result-${Xd}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, rd.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, rd.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, rd.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, rd.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, rd.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (qd = Rd(XO[Xd]), /\p{Script=Arabic}/u.test(qd) ? [qd] : (0, fd.b)(qd)).map(((dd, Od) => (0, rd.jsx)("span", {
              style: {
                "--letter": Od
              },
              children: dd
            }, Od)))]
          }), (0, rd.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [Kd && "victory" === Xd && (0, rd.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: Rd("frontlineRoundEnd:comeback")
            }), (0, rd.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, rd.jsx)("b", {
                className: "Friendly",
                children: hd
              }), " \u2013 ", (0, rd.jsx)("b", {
                className: "Enemy",
                children: vd
              })]
            })]
          })]
        }), od.length > 0 && (0, rd.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": od.length
          },
          children: [(0, rd.jsx)(Fd.Suspense, {
            fallback: null,
            children: (0, rd.jsx)(WO, {
              className: "FrontlineRoundEndLineup",
              players: Nd
            })
          }), od.map((dd => (0, rd.jsx)(QO, {
            mvp: td[dd],
            place: dd
          }, dd)))]
        }), (0, rd.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: Rd("frontlineRoundEnd:nextFront", {
            map: Qd,
            seconds: String(md)
          })
        })]
      });
      var qd
    }));

    function QO(dd) {
      let {
        mvp: Od,
        place: md
      } = dd;
      const {
        t: Wd
      } = (0, Ud.G)(), [Fd, Rd, Xd, Kd, hd] = Od, [vd, Qd] = Wd(function(dd, Od) {
        return 1 === Od && "damage" !== dd ? `frontlineRoundEnd:${dd}One` : `frontlineRoundEnd:${dd}`
      }(Xd, Kd), {
        name: "\0",
        count: Kd.toLocaleString()
      }).split("\0");
      return (0, rd.jsxs)("div", {
        className: wd()("FrontlineMvpCard", `Place-${md+1}`, `Team-${Rd}`),
        style: {
          "--revealMs": `${FO[md]}ms`
        },
        children: [(0, rd.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, rd.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, rd.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: Wd(KO[md])
        }), (0, rd.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [vd, (0, rd.jsx)("span", {
            className: "FrontlineMvpName",
            children: Fd
          }), Qd]
        }), (0, rd.jsx)("div", {
          className: "FrontlineMvpKit",
          children: hd
        })]
      })
    }
    const tO = function(dd, Od, md, Wd) {
      let {
        localPlayerId: Kd
      } = Wd;
      const hd = new Ad,
        vd = new OO;
      let Qd = null,
        td = null,
        od = null,
        Nd = null,
        qd = null,
        Hd = [!1, !1];
      const yd = () => {
        var dd, Od;
        const [md, Wd] = Hd;
        null === (dd = td) || void 0 === dd || dd.rY(!md), null === (Od = od) || void 0 === Od || Od.rY(!Wd)
      };
      return {
        onCreate: dd => {
          Qd = dd, td = new Yd(dd, Kd), od = new Xd.e(dd, Kd), Nd = new kd(hd), yd(), qd = (0, Rd.F)((0, Fd.createElement)(Fd.Fragment, null, (0, Fd.createElement)(cd, {
            hud: hd,
            crosshair: td,
            damage: od,
            markers: Nd
          }), (0, Fd.createElement)(hO, {
            controller: vd
          })))
        },
        onClose: () => {
          var dd, Od, md, Wd;
          null === (dd = qd) || void 0 === dd || dd(), null === (Od = td) || void 0 === Od || Od.dispose(), td = null, null === (md = od) || void 0 === md || md.dispose(), od = null, null === (Wd = Nd) || void 0 === Wd || Wd.points.dispose(), Nd = null, Qd = null
        },
        onAfterRender: (dd, Od) => {
          var md, Wd, Fd, Rd, Xd;
          null === (md = td) || void 0 === md || md.frame(dd, Od.tanHalfFovY), null === (Wd = od) || void 0 === Wd || Wd.frame(Od.cameraHeading), null === (Fd = Nd) || void 0 === Fd || Fd.frame(Od, null !== (Rd = null === (Xd = Qd) || void 0 === Xd ? void 0 : Xd.getPositionView(Kd)) && void 0 !== Rd ? Rd : null)
        },
        onReceivedMessageFromServer: (dd, Od) => {
          "frontlineHud" === dd ? hd.Yt(Od) : "frontlineScoreboard" === dd ? hd.receiveScoreboard(Od) : "frontlineRoundEnd" === dd ? vd.Yt(Od) : "frontlinePrefs" === dd && (Hd = Od, yd())
        }
      }
    }
  },
  41063: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd
    });
    var Wd = md(66),
      Fd = md(1341);
    const Rd = (0, Wd.memo)((function(dd) {
      let {
        controller: Od
      } = dd;
      return (0, Fd.jsxs)("div", {
        className: "DamageFeedback",
        ref: Od.bindElement,
        children: [(0, Fd.jsx)("div", {
          className: "DamageFeedbackLow",
          children: (0, Fd.jsx)("div", {
            className: "DamageFeedbackShade"
          })
        }), (0, Fd.jsx)("div", {
          className: "DamageFeedbackArcs"
        })]
      })
    }))
  },
  41061: (dd, Od, md) => {
    md.d(Od, {
      e: () => Kd
    });
    var Wd = md(32);
    const Fd = "DamageFeedbackArcsShown",
      Rd = .45,
      Xd = .2;
    class Kd {
      constructor(dd, Od) {
        let {
          arcs: md = !0,
          edgeGlow: Fd = !0,
          lowHealthShade: Rd = !0,
          enabled: Xd = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.api = dd, this.localPlayerId = Od, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.nF = 1, this.dead = !1, this.enabled = void 0, this.parts = void 0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = dd => {
          var Od, md;
          this.clearHits(), this.root = dd, this.lowLayer = null !== (Od = null === dd || void 0 === dd ? void 0 : dd.querySelector(".DamageFeedbackLow")) && void 0 !== Od ? Od : null, this.arcLayer = null !== (md = null === dd || void 0 === dd ? void 0 : dd.querySelector(".DamageFeedbackArcs")) && void 0 !== md ? md : null, this.showRoot(), this.drawLow()
        }, this.parts = {
          arcs: md,
          edgeGlow: Fd,
          lowHealthShade: Rd
        }, this.enabled = Xd, this.token = Wd.j.subscribe("damagedByOtherPlayer", (dd => {
          let {
            direction: Od,
            rF: md
          } = dd;
          this.onHurt(Od, md)
        })), this.syncHealth(), this.showCustomDamage()
      }
      rY(dd) {
        dd !== this.enabled && (this.enabled = dd, this.showCustomDamage(), dd || this.clearHits(), this.showRoot())
      }
      frame(dd) {
        this.syncHealth(), this.cameraHeading = dd;
        for (const Od of this.arcs) this.drawArcAngle(Od)
      }
      dispose() {
        Wd.j.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(Fd)
      }
      showCustomDamage() {
        document.body.classList.toggle(Fd, this.enabled && this.parts.arcs)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const dd = this.api.getClientOption(this.localPlayerId, "_health"),
          Od = this.api.getClientOption(this.localPlayerId, "_shield"),
          md = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(dd, this.readHealth) && Object.is(Od, this.readShield) && Object.is(md, this.readMaxHealth)) return;
        if (this.readHealth = dd, this.readShield = Od, this.readMaxHealth = md, null === dd || void 0 === dd || !md) return this.lastHealthPool = null, this.maxHealth = null, this.nF = 1, this.dead = !1, void this.drawLow();
        const Wd = dd + (null !== Od && void 0 !== Od ? Od : 0);
        if (null !== this.lastHealthPool && Wd < this.lastHealthPool) {
          const dd = performance.now(),
            Od = (this.lastHealthPool - Wd) / md;
          this.lastDrop = dd - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + Od,
            at: this.lastDrop.at
          } : {
            frac: Od,
            at: dd
          }
        }
        this.dead = dd <= 0, this.dead && this.clearHits(), this.lastHealthPool = Wd, this.maxHealth = md, this.nF = dd > 0 ? dd / md : 1, this.drawLow()
      }
      onHurt(dd, Od) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const md = Math.min(1, this.takeDamageFrac(Od) / .3);
        null !== dd && this.parts.arcs && this.showArc(dd, md), this.parts.edgeGlow && this.flashEdge(null === dd ? null : dd - this.cameraHeading, .4 + .6 * md)
      }
      takeDamageFrac(dd) {
        if (void 0 !== dd && this.maxHealth) return dd / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: Od
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, Od
      }
      drawLow() {
        if (!this.lowLayer || !this.parts.lowHealthShade) return;
        const dd = vd((Rd - this.nF) / .25),
          Od = vd((Xd - this.nF) / .15000000000000002),
          md = this.nF < Rd;
        this.lowLayer.classList.toggle("Active", md), this.lowLayer.classList.toggle("Critical", this.nF < Xd), this.lowLayer.style.opacity = String(md ? .55 + .3 * dd + .15 * Od : 0)
      }
      showArc(dd, Od) {
        var md, Wd;
        if (!this.arcLayer) return;
        let Fd = this.arcs.find((Od => hd(Od.direction, dd) < .6));
        if (!Fd) {
          const Od = document.createElement("div");
          Od.className = "DamageFeedbackArc", Od.appendChild(document.createElement("div")).className = "DamageFeedbackArcBand", this.arcLayer.appendChild(Od), Fd = {
            element: Od,
            direction: dd,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(Fd)
        }
        Fd.direction = dd, this.drawArcAngle(Fd);
        const Rd = Fd.fade ? Number(getComputedStyle(Fd.element).opacity) : 0;
        null === (md = Fd.fade) || void 0 === md || md.cancel(), null === (Wd = Fd.pop) || void 0 === Wd || Wd.cancel(), Fd.element.style.opacity = "1";
        const Xd = Fd.element.animate([{
          opacity: Rd
        }, {
          opacity: 1
        }], 144);
        Fd.fade = Xd, Fd.pop = Fd.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * Od
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const Kd = Fd;
        Xd.onfinish = () => {
          if (Kd.fade !== Xd) return;
          const dd = Kd.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          dd.startTime = Xd.startTime, Kd.fade = dd, dd.onfinish = () => {
            Kd.fade === dd && (Kd.element.remove(), Qd(this.arcs, Kd))
          }
        }
      }
      drawArcAngle(dd) {
        const Od = dd.direction - this.cameraHeading;
        (null === dd.drawnAngle || Math.abs(Od - dd.drawnAngle) > .005) && (dd.drawnAngle = Od, dd.element.style.rotate = `${Od}rad`)
      }
      flashEdge(dd, Od) {
        var md, Wd, Fd;
        if (!this.root) return;
        let Rd = this.flashes.find((Od => null === Od.angle || null === dd ? Od.angle === dd : hd(Od.angle, dd) < .5));
        if (!Rd) {
          const Od = document.createElement("div");
          Od.className = "DamageFeedbackFlash";
          const md = Od.appendChild(document.createElement("div"));
          md.className = "DamageFeedbackFlashGlow", this.root.insertBefore(Od, this.arcLayer), Rd = {
            element: Od,
            glow: md,
            angle: dd,
            level: 0,
            animation: null
          }, this.flashes.push(Rd)
        }
        const Xd = null === (md = Rd.animation) || void 0 === md || null === (Wd = md.effect) || void 0 === Wd ? void 0 : Wd.getComputedTiming().progress,
          Kd = null === Xd || void 0 === Xd ? 0 : Rd.level * (1 - Xd);
        Rd.level = Math.min(1, Math.max(Od, Kd + .6 * Od)), Rd.angle = dd;
        const {
          x: vd,
          y: td,
          rx: od,
          ry: Nd
        } = function(dd, Od) {
          const md = window.innerWidth,
            Wd = window.innerHeight;
          if (null === dd) return {
            x: md / 2,
            y: Wd / 2,
            rx: 0,
            ry: 0
          };
          const Fd = Math.sin(dd),
            Rd = -Math.cos(dd),
            Xd = md / 2 / Math.max(1e-6, Math.abs(Fd)),
            Kd = Wd / 2 / Math.max(1e-6, Math.abs(Rd)),
            hd = Math.min(Xd, Kd),
            vd = Math.round(md / 2 + Fd * hd),
            Qd = Math.round(Wd / 2 + Rd * hd),
            td = Wd / 100 * (.85 + .25 * Od),
            od = Xd <= Kd,
            Nd = Math.round((od ? 30 : 74) * td),
            qd = Math.round((od ? 58 : 26) * td);
          return {
            x: vd,
            y: Qd,
            rx: Nd,
            ry: qd
          }
        }(dd, Rd.level), {
          style: qd
        } = Rd.glow;
        Rd.glow.classList.toggle("Everywhere", null === dd), qd.setProperty("--glowX", `${vd}px`), qd.setProperty("--glowY", `${td}px`), qd.setProperty("--glowRx", `${od}px`), qd.setProperty("--glowRy", `${Nd}px`), Rd.element.style.transformOrigin = `${vd}px ${td}px`, null === (Fd = Rd.animation) || void 0 === Fd || Fd.cancel();
        const Hd = Rd.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: Rd.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * Rd.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * Rd.level
        });
        Rd.animation = Hd;
        const yd = Rd;
        Hd.onfinish = () => {
          yd.animation === Hd && (yd.element.remove(), Qd(this.flashes, yd))
        }
      }
      clearHits() {
        for (const Wd of this.arcs) {
          var dd, Od;
          null === (dd = Wd.fade) || void 0 === dd || dd.cancel(), Wd.fade = null, null === (Od = Wd.pop) || void 0 === Od || Od.cancel(), Wd.element.remove()
        }
        this.arcs.length = 0;
        for (const Wd of this.flashes) {
          var md;
          null === (md = Wd.animation) || void 0 === md || md.cancel(), Wd.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function hd(dd, Od) {
      return Math.abs(Math.atan2(Math.sin(dd - Od), Math.cos(dd - Od)))
    }

    function vd(dd) {
      return Math.max(0, Math.min(1, dd))
    }

    function Qd(dd, Od) {
      const md = dd.indexOf(Od); - 1 !== md && dd.splice(md, 1)
    }
  },
  7370: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd
    });
    const Wd = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function Fd(dd) {
      return null === Wd ? Array.from(dd) : Array.from(Wd.segment(dd), (dd => {
        let {
          segment: Od
        } = dd;
        return Od
      }))
    }
  },
  40028: (dd, Od, md) => {
    md.d(Od, {
      e: () => Xd,
      h: () => Rd
    });
    const Wd = new WeakMap;

    function Fd(dd) {
      let Od = Wd.get(dd);
      return Od || (Od = {
        hidden: dd.hidden,
        x: NaN,
        y: NaN
      }, Wd.set(dd, Od)), Od
    }

    function Rd(dd, Od) {
      const md = Fd(dd);
      md.hidden !== Od && (md.hidden = Od, dd.hidden = Od)
    }

    function Xd(dd, Od, md) {
      const Wd = Fd(dd);
      Wd.x === Od && Wd.y === md || (Wd.x = Od, Wd.y = md, dd.style.translate = `${Od}vw ${md}vh`)
    }
  },
  38603: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd
    });
    const Wd = {
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
for (const dd in modules) Object.freeze(modules[dd]);