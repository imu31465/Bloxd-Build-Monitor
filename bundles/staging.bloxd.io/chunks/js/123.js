export const id = 123;
export const ids = [123];
export const modules = {
  40681: (dd, Od, md) => {
    md.d(Od, {
      b: () => Kd,
      e: () => Rd
    });
    var Wd = md(2821);
    let Fd = null;

    function Rd(dd) {
      return null !== Fd && dd === Fd
    }

    function Xd() {
      this.sZ = !1, this.stopPropagation = !1, this.uZ = !1, this.disabled = !1
    }
    class Kd {
      constructor(dd, Od) {
        this.version = "0.7.0";
        var md = Object.assign({}, new Xd, Od || {});
        this.element = dd || document, this.sZ = !!md.sZ, this.stopPropagation = !!md.stopPropagation, this.uZ = !!md.uZ, this.disabled = !!md.disabled, this.filterEvents = (dd, Od) => !0, this.ignoreEvent = dd => !1, this.down = new Wd.EventEmitter, this.up = new Wd.EventEmitter, this.state = {}, this.iZ = {
          dx: 0,
          dy: 0,
          Ymd: 0,
          wmd: 0,
          Emd: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? vd(this) : document.addEventListener("DOMContentLoaded", (dd => {
          vd(this)
        }), {
          once: !0
        })
      }
      bind(dd) {
        for (var Od = arguments.length, md = new Array(Od > 1 ? Od - 1 : 0), Wd = 1; Wd < Od; Wd++) md[Wd - 1] = arguments[Wd];
        md.forEach((Od => {
          var md = this._keyBindmap[Od] || [];
          md.includes(dd) || (md.push(dd), this._keyBindmap[Od] = md)
        })), this.state[dd] = !!this.state[dd], this.pressCount[dd] = this.pressCount[dd] || 0, this.releaseCount[dd] = this.releaseCount[dd] || 0
      }
      unbind(dd) {
        for (var Od in this._keyBindmap) {
          var md = this._keyBindmap[Od],
            Wd = md.indexOf(dd);
          Wd > -1 && md.splice(Wd, 1)
        }
      }
      getBindings() {
        var dd = {};
        for (var Od in this._keyBindmap) {
          this._keyBindmap[Od].forEach((md => {
            dd[md] = dd[md] || [], dd[md].push(Od)
          }))
        }
        return dd
      }
      Et() {
        hd(this.iZ), hd(this.pressCount), hd(this.releaseCount)
      }
    }

    function hd(dd) {
      for (var Od in dd) dd[Od] = 0
    }

    function vd(dd) {
      window.addEventListener("keydown", yd.bind(null, dd, !0), !1), window.addEventListener("keyup", yd.bind(null, dd, !1), !1);
      var Od = {
        passive: !0
      };
      dd.element.addEventListener("touchstart", Nd.bind(void 0, dd), {
        passive: !1
      }), dd.element.addEventListener("touchend", Hd.bind(void 0, dd), Od), dd.element.addEventListener("mousedown", bd.bind(null, dd, !0), Od), window.document.addEventListener("mouseup", bd.bind(null, dd, !1), Od), dd.element.addEventListener("touchmove", Td.bind(null, dd), Od), dd.element.addEventListener("mousemove", Td.bind(null, dd), Od), window.PointerEvent, dd.element.addEventListener("wheel", pd.bind(null, dd), Od), dd.element.addEventListener("contextmenu", Yd.bind(null, dd), !1), window.addEventListener("blur", Ed.bind(null, dd), !1)
    }
    var Qd = 0,
      td = 0,
      od = null;

    function Nd(dd, Od) {
      Od.preventDefault(), qd(Od)
    }

    function qd(dd) {
      let Od = !1;
      for (let md = 0; md < dd.touches.length; ++md)
        if (dd.touches[md].identifier === od) {
          Od = !0;
          break
        } if (!Od) {
        const Od = dd.changedTouches[0];
        Qd = Od.clientX, td = Od.clientY, od = Od.identifier
      }
    }

    function Hd(dd, Od) {
      for (var md = Od.changedTouches, Wd = 0; Wd < md.length; ++Wd) md[Wd].identifier === od && (od = null)
    }

    function yd(dd, Od, md) {
      if (!dd.ignoreEvent(md)) try {
        Jd(dd, md), Od && md.isTrusted && !md.repeat && dd._keyStates[md.code] && Ud(dd, md.code)
      } finally {
        xd(md.code, Od, dd, md)
      }
    }

    function bd(dd, Od, md) {
      if (!dd.ignoreEvent(md)) try {
        Jd(dd, md)
      } finally {
        ! function(dd, Od, md) {
          if ("pointerId" in md)
            if (Od) {
              if (null !== dd._touches.currID) return;
              dd._touches.currID = md.pointerId
            } else {
              if (dd._touches.currID !== md.pointerId) return;
              dd._touches.currID = null
            } var Wd = "button" in md ? md.button + 1 : 1;
          xd("Mouse" + Wd, Od, dd, md)
        }(dd, Od, md)
      }
    }

    function Td(dd, Od) {
      var md = Od.movementX || Od.mozMovementX || 0,
        Wd = Od.movementY || Od.mozMovementY || 0;
      if (Od.touches && 0 === (md | Wd)) {
        var Fd = function(dd) {
          qd(dd);
          for (let Od = 0; Od < dd.changedTouches.length; ++Od)
            if (dd.changedTouches[Od].identifier == od) {
              const md = dd.changedTouches[Od],
                Wd = [md.clientX - Qd, md.clientY - td];
              return Qd = md.clientX, td = md.clientY, Wd
            } return console.error(`Did not find touch id ${od}`), [0, 0]
        }(Od);
        md = Fd[0], Wd = Fd[1]
      }
      dd.iZ.dx += md, dd.iZ.dy += Wd
    }

    function pd(dd, Od) {
      Jd(dd, Od);
      var md = 1;
      switch (Od.deltaMode) {
        case 0:
          md = 1;
          break;
        case 1:
          md = 12;
          break;
        case 2:
          md = dd.element.clientHeight || window.innerHeight
      }
      dd.iZ.Ymd += (Od.deltaX || 0) * md, dd.iZ.wmd += (Od.deltaY || 0) * md, dd.iZ.Emd += (Od.deltaZ || 0) * md
    }

    function Yd(dd, Od) {
      if (!dd.uZ) return Od.preventDefault(), !1
    }
    var gd = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function wd(dd, Od) {
      return !!dd[gd[Od]] || ("AltRight" === Od || "ControlLeft" === Od) && "function" === typeof dd.getModifierState && !0 === dd.getModifierState("AltGraph")
    }

    function Ed(dd, Od) {
      for (var md in dd._modifiersHeldThroughBlur = {}, gd) dd._keyStates[md] && (dd._modifiersHeldThroughBlur[md] = !0);
      Od && Od.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (dd) {
          return !0
        }
      }() && (clearTimeout(dd._blurRelease), dd._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var Od in dd._modifiersHeldThroughBlur = {}, dd._keyStates) dd._keyStates[Od] && !/^Mouse\d/.test(Od) && Ud(dd, Od)
      }), 0))
    }

    function Jd(dd, Od) {
      var md = dd._modifiersHeldThroughBlur;
      if (md && Od.isTrusted && document.hasFocus())
        for (var Wd in md) delete md[Wd], dd._keyStates[Wd] && Wd !== Od.code && (wd(Od, Wd) || Ud(dd, Wd))
    }

    function Ud(dd, Od) {
      const md = {
          code: Od,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Wd = Fd;
      Fd = md;
      try {
        xd(Od, !1, dd, md)
      } finally {
        Fd = Wd
      }
    }

    function xd(dd, Od, md, Wd) {
      var Fd = md._keyBindmap[dd];
      Fd && (Bd(md._keyStates[dd], Od) && (md._keyStates[dd] = Od, Fd.forEach((dd => {
        (!md.filterEvents || md.filterEvents(Wd, dd)) && function(dd, Od, md, Wd) {
          var Fd = Od ? md.pressCount : md.releaseCount;
          Fd[dd] = (Fd[dd] || 0) + 1;
          var Rd = md._bindPressCount[dd] || 0;
          (Rd += Od ? 1 : -1) < 0 && (Rd = 0);
          md._bindPressCount[dd] = Rd;
          var Xd = md.state[dd];
          if (Bd(Xd, Rd)) {
            md.state[dd] = Rd > 0;
            var Kd = Od ? md.down : md.up;
            md.disabled || Kd.emit(dd, Wd)
          }
        }(dd, Od, md, Wd)
      }))), "button" in Wd || (md.sZ && !Wd.defaultPrevented && Wd.preventDefault(), md.stopPropagation && Wd.stopPropagation()))
    }

    function Bd(dd, Od) {
      return dd ? !Od : Od
    }
  },
  38282: (dd, Od, md) => {
    md.d(Od, {
      c: () => Hd,
      e: () => yd
    });
    var Wd = md(66),
      Fd = md(1566),
      Rd = md(2125),
      Xd = md(38280),
      Kd = md(701),
      hd = md(1155),
      vd = md.n(hd),
      Qd = md(1341);
    const td = [od()];

    function od() {
      return {
        source: null,
        direction: null,
        qD: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function Nd(dd) {
      return td.find((Od => null !== Od.source && Od.source === dd))
    }

    function qd(dd) {
      clearTimeout(dd.timeout), dd.source = null, dd.direction = null, dd.writtenAngle = null, dd.qD && (dd.qD.style.rotate = "")
    }
    const Hd = (0, Wd.memo)((function() {
      const [, dd] = (0, Wd.useReducer)((dd => dd + 1), 0);
      return (0, Fd.f)("damagedByOtherPlayer", (Od => {
        let {
          wF: md,
          direction: Wd
        } = Od;
        const Fd = md || "nonDirectional",
          Rd = function(dd) {
            var Od;
            const md = null !== (Od = Nd(dd)) && void 0 !== Od ? Od : td.find((dd => null === dd.source));
            if (md) return md;
            const Wd = {
              source: null,
              direction: null,
              qD: null,
              timeout: void 0,
              writtenAngle: null
            };
            return td.push(Wd), Wd
          }(Fd);
        clearTimeout(Rd.timeout), Rd.source = Fd, Rd.direction = Wd, Rd.timeout = setTimeout((() => {
          qd(Rd), dd()
        }), 800), dd()
      })), (0, Rd.b)("kill", (Od => {
        let {
          killer: md,
          victim: Wd
        } = Od;
        const Fd = md.local && Nd(Wd.id);
        Fd && (qd(Fd), dd())
      })), (0, Wd.useEffect)((() => {
        const dd = (0, Xd.h)("turnDamageIndicators", yd);
        return () => {
          dd(), td.forEach(qd)
        }
      }), []), (0, Qd.jsx)("div", {
        className: "DirectionalDamage",
        children: td.map(((dd, Od) => (0, Qd.jsx)("div", {
          ref: Od => {
            dd.qD = Od
          },
          className: vd()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, Kd.O)(dd.direction),
            DamageIndicatorIdle: null === dd.source
          })
        }, Od)))
      })
    }));

    function yd(dd) {
      for (const Od of td) {
        if (null === Od.source || (0, Kd.O)(Od.direction)) continue;
        const md = Od.direction - dd;
        md !== Od.writtenAngle && (Od.writtenAngle = md, Od.qD.style.rotate = `${md}rad`)
      }
    }
  },
  38290: (dd, Od, md) => {
    md.d(Od, {
      b: () => Bd,
      e: () => Ud
    });
    var Wd = md(66),
      Fd = md(29),
      Rd = md(38280),
      Xd = md(38295),
      Kd = md(37996),
      hd = md(38143),
      vd = md(2092),
      Qd = md(2125),
      td = md(1341);
    const od = 20 * Math.PI / 180,
      Nd = new Map,
      qd = 25 * Math.PI / 180,
      Hd = Array.from({
        length: 6
      }, (() => ({
        kind: null,
        direction: 0,
        shownAt: 0,
        qD: null,
        fade: null,
        timeout: void 0,
        writtenAngle: null,
        away: !1
      })));
    let yd = null,
      bd = null,
      Td = [];
    const pd = 2;

    function Yd(dd) {
      const Od = "combat" === dd.kind || "explosion" === dd.kind,
        md = null !== bd && null !== dd.writtenAngle && function(dd, Od, md, Wd) {
          const Fd = Od.width / 3.8,
            Rd = (Wd ? .7 : .35) * Fd + 1,
            Xd = (Wd ? .175 : .1) * Fd + 1,
            Kd = Od.width / 2 - Xd,
            hd = Math.sin(dd),
            vd = Math.cos(dd),
            Qd = Od.left + Od.width / 2 + hd * Kd,
            td = Od.top + Od.height / 2 - vd * Kd,
            od = Math.abs(vd) * Rd + Math.abs(hd) * Xd,
            Nd = Math.abs(hd) * Rd + Math.abs(vd) * Xd;
          return md.some((dd => Qd + od > dd.left - pd && Qd - od < dd.right + pd && td + Nd > dd.top - pd && td - Nd < dd.bottom + pd))
        }(dd.writtenAngle, bd, Td, Od);
      md !== dd.away && dd.qD && (dd.away = md, dd.qD.classList.toggle("SoundCueAway", md))
    }
    let gd = 0;

    function wd(dd) {
      var Od;
      clearTimeout(dd.timeout), null === (Od = dd.fade) || void 0 === Od || Od.cancel(), dd.fade = null, dd.kind = null, dd.writtenAngle = null, dd.away = !1, dd.qD && (dd.qD.className = "SoundCue SoundCueIdle", dd.qD.style.rotate = "")
    }

    function Ed(dd, Od) {
      var md, Wd, Fd;
      const Rd = performance.now();
      if (Math.abs((0, Xd.x)(gd, Od)) < od || Rd - (null !== (md = Nd.get(dd)) && void 0 !== md ? md : -1 / 0) < 250) return;
      Nd.set(dd, Rd), null === (Wd = yd) || void 0 === Wd || Wd();
      const Kd = function(dd, Od) {
          const md = Hd.find((md => md.kind === dd && Math.abs((0, Xd.x)(md.direction, Od)) < qd));
          if (md) return md;
          return Hd.find((dd => null === dd.kind)) || Hd.reduce(((dd, Od) => Od.shownAt < dd.shownAt ? Od : dd))
        }(dd, Od),
        hd = Kd.qD;
      hd && (clearTimeout(Kd.timeout), null === (Fd = Kd.fade) || void 0 === Fd || Fd.cancel(), Kd.kind = dd, Kd.direction = Od, Kd.shownAt = Rd, hd.className = `SoundCue SoundCue-${dd}`, Kd.away = !1, Jd(Kd, gd), Yd(Kd), Kd.fade = hd.animate([{
        opacity: 1
      }, {
        opacity: 1,
        offset: .5
      }, {
        opacity: 0
      }], {
        duration: 1200,
        fill: "forwards"
      }), Kd.timeout = setTimeout((() => {
        wd(Kd)
      }), 1200))
    }

    function Jd(dd, Od) {
      const md = dd.direction - Od;
      md !== dd.writtenAngle && dd.qD && (dd.writtenAngle = md, dd.qD.style.rotate = `${md}rad`, Yd(dd))
    }

    function Ud(dd) {
      gd = dd;
      for (const Od of Hd) null !== Od.kind && Jd(Od, dd)
    }
    const xd = (0, Wd.memo)((function() {
        const dd = (0, Wd.useRef)(null);
        return (0, Wd.useEffect)((() => {
          const Od = dd.current,
            md = () => {
              const {
                anywhere: dd,
                boxes: md
              } = (0, hd.e)();
              Od.classList.toggle("SoundDirectionsHidden", dd), bd = Od.getBoundingClientRect(), Td = md;
              for (const Od of Hd) Yd(Od)
            };
          let Wd = 0;
          const Fd = () => {
            cancelAnimationFrame(Wd), Wd = requestAnimationFrame((() => {
              Wd = requestAnimationFrame(md)
            }))
          };
          md(), yd = md, window.addEventListener("resize", Fd);
          const Rd = (0, hd.k)(md),
            Xd = new ResizeObserver(md);
          return Xd.observe(Od), () => {
            Xd.disconnect(), Rd(), window.removeEventListener("resize", Fd), cancelAnimationFrame(Wd), yd = null, bd = null, Td = []
          }
        }), []), (0, Wd.useEffect)((() => {
          const dd = (0, Rd.h)("turnSoundCues", Ud),
            Od = (0, Kd.b)(Ed);
          return () => {
            Od(), dd(), Hd.forEach(wd), Nd.clear()
          }
        }), []), (0, td.jsx)("div", {
          ref: dd,
          className: "SoundDirections",
          children: Hd.map(((dd, Od) => (0, td.jsx)("div", {
            ref: Od => {
              dd.qD = Od
            },
            className: "SoundCue SoundCueIdle"
          }, Od)))
        })
      })),
      Bd = (0, Wd.memo)((function() {
        const {
          clientEscMenuOptions: dd
        } = (0, Fd.p)(["clientEscMenuOptions"]);
        return dd.showSoundDirections ? (0, td.jsxs)(td.Fragment, {
          children: [(0, td.jsx)(xd, {}), (0, td.jsx)(Sd, {})]
        }) : null
      })),
      Sd = (0, Wd.memo)((function() {
        const [dd, Od] = (0, Wd.useState)((() => {
          var dd;
          return null === (dd = vd.gameBridge.latest("localPlayerAlive")) || void 0 === dd || dd
        }));
        return (0, Qd.b)("localPlayerAliveSet", Od), (0, hd.g)(!dd), null
      }))
  },
  38143: (dd, Od, md) => {
    md.d(Od, {
      e: () => hd,
      g: () => Kd,
      k: () => vd
    });
    var Wd = md(66);
    const Fd = new Set,
      Rd = new Set;

    function Xd() {
      for (const dd of Rd) dd()
    }

    function Kd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      (0, Wd.useEffect)((() => dd ? function() {
        const dd = {
          element: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
        };
        return Fd.add(dd), Xd(), () => {
          Fd.delete(dd) && Xd()
        }
      }(Od) : void 0), [dd, Od]), (0, Wd.useEffect)((() => {
        dd && Xd()
      }), [dd, md])
    }

    function hd() {
      const dd = [];
      for (const {
          element: md
        }
        of Fd) {
        var Od;
        if (null === md) return {
          anywhere: !0,
          boxes: []
        };
        const Wd = null === (Od = md.current) || void 0 === Od ? void 0 : Od.getBoundingClientRect();
        Wd && Wd.width > 0 && dd.push(Wd)
      }
      return {
        anywhere: !1,
        boxes: dd
      }
    }

    function vd(dd) {
      return Rd.add(dd), () => {
        Rd.delete(dd)
      }
    }
  },
  38121: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd,
      d: () => Rd
    });
    let Wd = !1;

    function Fd() {
      return Wd
    }

    function Rd(dd) {
      return Wd !== dd && (Wd = dd, !0)
    }
  },
  42631: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      startPadGameplay: () => gd
    });
    md(42494);
    var Wd = md(42501),
      Fd = md(2497),
      Rd = md(29),
      Xd = md(40643),
      Kd = md(2386),
      hd = md(40672),
      vd = md(32),
      Qd = md(2402),
      td = md(39966),
      od = md(9989),
      Nd = md(42510);
    const qd = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var Hd = md(42535),
      yd = md(9967),
      bd = md(40676);
    const Td = dd => dd.padSneakToggled || !!Rd.e.get("clientEscMenuOptions").crouchIsToggle && dd.crouchToggled,
      pd = () => {
        const dd = (() => {
          const dd = (0, od.c)();
          let Od = qd;
          const md = new Nd.c;
          let Wd = !1,
            Fd = 0;
          const Rd = () => {
            const md = performance.now(),
              Rd = 0 === Fd ? 0 : md - Fd;
            if (Fd = md, !Wd) return dd.discardPending(), null;
            const Xd = (0, Nd.j)(Od, Rd),
              Kd = dd.drainLookDelta(),
              hd = (0, td.k)();
            return {
              mV: (Xd.mV + Kd.mV) * hd,
              RV: (Xd.RV + Kd.RV) * hd
            }
          };
          return {
            update: (dd, Fd, Xd, Kd) => {
              dd.camera.N_ !== Rd && (dd.camera.N_ = Rd), Wd = !0, Od = (0, Nd.n)(md, Fd, Xd, Kd, performance.now())
            },
            release: () => {
              Wd = !1, Od = qd, md.reset()
            },
            uninstall: dd => {
              dd.camera.N_ === Rd && (dd.camera.N_ = null)
            }
          }
        })();
        return {
          update: (Od, md, Wd) => {
            dd.update((0, Qd.c)(), Od, md, Wd)
          },
          release: dd.release,
          uninstall: () => {
            const Od = (0, Qd.c)();
            Od && dd.uninstall(Od)
          }
        }
      };
    var Yd = md(42526);
    md(39229), md(9864);
    md(9885).b;
    const gd = () => {
      const dd = (0, Yd.c)((() => {
          const dd = {
            x: 0,
            y: 0,
            magnitude: 0,
            headingOffset: 0,
            jumpHeld: !1,
            jumpPressedSinceTick: !1,
            crouchHeld: !1,
            running: !1,
            sprintHeld: !1
          };
          return {
            bodies: () => (0, Xd.e)(),
            look: pd(),
            move: (Od, md) => {
              const Wd = (0, Qd.c)(),
                Fd = Wd.qE.TWd();
              if (dd.x = Od.x, dd.y = Od.y, dd.magnitude = Od.magnitude, dd.headingOffset = Od.headingOffset, dd.jumpHeld = Od.jumpHeld, Od.jumpPressed && (dd.jumpPressedSinceTick = !0), dd.running = Od.running, dd.sprintHeld = Od.sprintHeld, md) {
                const Od = (0, Hd.e)({
                  ...md,
                  descending: Wd.qE.Hmd(Wd.YV).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!Wd.EY.canCrouch,
                  toggled: Td(Fd)
                });
                dd.crouchHeld = Od.crouchHeld, Fd.padSneakToggled = Od.toggled, Fd.crouchToggled = !1, (0, yd.d)(Od.toggled)
              }
              Fd.gamepad = dd
            },
            stopMoving: () => {
              var Od;
              Object.assign(dd, {
                x: 0,
                y: 0,
                magnitude: 0,
                headingOffset: 0,
                jumpHeld: !1,
                jumpPressedSinceTick: !1,
                crouchHeld: !1,
                running: !1,
                sprintHeld: !1
              });
              const md = null === (Od = (0, Qd.c)()) || void 0 === Od ? void 0 : Od.qE.TWd();
              (null === md || void 0 === md ? void 0 : md.gamepad) === dd && (md.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: dd => {
              const Od = (0, Qd.c)(),
                md = null === Od || void 0 === Od ? void 0 : Od.qE.TWd();
              "touch" === dd ? ((0, yd.d)(!1), null !== md && void 0 !== md && md.padSneakToggled && (md.padSneakToggled = !1, md.isTouchscreen && !md.gamepad && Od.qE.Pmd(Od.YV).setCrouching(!!Od.EY.canCrouch && md.touchCrouch))) : "gamepad" === dd && md && (0, yd.d)(Td(md))
            },
            hasPlayer: () => {
              var dd;
              return !(null === (dd = (0, Qd.c)()) || void 0 === dd || !dd.YV)
            },
            isPlayerDead: () => {
              var dd;
              const Od = (0, Qd.c)();
              return !1 === (null === (dd = Od.qE.tWd(Od.YV)) || void 0 === dd ? void 0 : dd.isAlive)
            },
            isReplayMode: () => {
              var dd, Od;
              return !(null === (dd = (0, Qd.b)()) || void 0 === dd || null === (Od = dd.client) || void 0 === Od || !Od.isReplayMode())
            },
            isFreeCameraOn: () => {
              var dd, Od, md;
              return !(null === (dd = (0, Qd.b)()) || void 0 === dd || null === (Od = dd.client) || void 0 === Od || null === (md = Od.freeCameraController) || void 0 === md || !md.isEnabled())
            },
            targetsBlock: () => !!(0, Qd.c)().nOd,
            selectedSlotEmpty: () => {
              var dd;
              const Od = (0, Qd.c)();
              return !(null !== (dd = Od.qE.Dmd(Od.YV)) && void 0 !== dd && dd.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const dd = (0, Qd.c)().EY;
              return !!dd.creative && !!dd.canPickBlocks
            },
            zoomAllowed: () => !!(0, Qd.c)().EY.canUseZoomKey,
            scrollHotbar: dd => {
              vd.j.lQ("ScrollInventorySlot", dd)
            },
            hasFullInventory: () => (0, hd.c)((0, Qd.c)()),
            hasLobbyTab: () => (0, bd.b)((0, Qd.c)().EY),
            contextActionInputs: () => {
              var dd, Od, md, Wd;
              const Fd = (0, Qd.c)();
              return {
                holdingGun: !(null === (dd = Fd.qE.oWd(Fd.YV)) || void 0 === dd || null === (Od = dd.WE) || void 0 === Od || !Od.isGun()),
                customButtons: null !== (md = Fd.EY.customButtons) && void 0 !== md ? md : null,
                touchscreenActionButton: null !== (Wd = Fd.EY.touchscreenActionButton) && void 0 !== Wd ? Wd : null
              }
            },
            pressTouchButton: dd => {
              (0, Kd.sendColyMessage)(Fd.zj, dd)
            }
          }
        })()),
        Od = (0, Wd.d)(),
        md = null,
        Rd = null;
      return () => {
        dd(), Od(), null === md || void 0 === md || md(), null === Rd || void 0 === Rd || Rd()
      }
    }
  },
  38295: (dd, Od, md) => {
    md.d(Od, {
      B: () => Qd,
      c: () => Wd,
      g: () => od,
      h: () => td,
      l: () => Xd,
      o: () => qd,
      q: () => hd,
      t: () => Hd,
      w: () => vd,
      x: () => Kd
    });
    const Wd = Math.PI / 2 - .001,
      Fd = 2 * Math.PI,
      Rd = 1e-9;

    function Xd(dd, Od) {
      Od.heading = dd.heading, Od.pitch = dd.pitch
    }

    function Kd(dd, Od) {
      const md = Od - dd;
      return md - Fd * Math.floor((md + Math.PI) / Fd)
    }

    function hd(dd, Od, md) {
      return dd + Kd(dd, Od) * md
    }

    function vd(dd) {
      if (!Number.isFinite(dd)) return dd;
      const Od = dd - Fd * Math.floor(dd / Fd);
      return Od < Fd ? Od : 0
    }

    function Qd(dd, Od) {
      return dd + Kd(dd, Od)
    }

    function td(dd) {
      return Math.max(-Wd, Math.min(Wd, dd))
    }

    function od(dd, Od, md) {
      const Wd = Math.cos(Od);
      return md[0] = Wd * Math.sin(dd), md[1] = -Math.sin(Od), md[2] = Wd * Math.cos(dd), md
    }

    function Nd(dd, Od, md, Wd) {
      const Fd = Math.sqrt(dd * dd + md * md);
      return Fd < Rd && Math.abs(Od) < Rd || (Fd >= Rd && (Wd.heading = Math.atan2(dd, md)), Wd.pitch = td(Math.atan2(-Od, Fd) + 0)), Wd
    }

    function qd(dd, Od) {
      return Nd(dd[0], dd[1], dd[2], Od)
    }

    function Hd(dd, Od, md) {
      return Nd(Od[0] - dd[0], Od[1] - dd[1], Od[2] - dd[2], md)
    }
  },
  38112: (dd, Od, md) => {
    md.d(Od, {
      d: () => hd
    });
    var Wd = md(387),
      Fd = md(29),
      Rd = md(38121),
      Xd = md(1765),
      Kd = md(2134);

    function hd(dd, Od) {
      var md, hd, vd;
      if (!Fd.e.get("isKeydownEnabled") || dd.repeat) return;
      const Qd = dd.code;
      "Escape" === dd.key ? (0, Xd.j)(dd) : null !== (md = Kd.y.OpenSettings) && void 0 !== md && md.includes(Qd) ? (0, Xd.s)(dd, Wd.m.SETTINGS) : null !== (hd = Kd.y.OpenCharacterCustomization) && void 0 !== hd && hd.includes(Qd) ? (0, Rd.b)() || (0, Xd.s)(dd, Wd.m.CUSTOMISATION, Od()) : null !== (vd = Kd.y.ShowDebugOverlay) && void 0 !== vd && vd.includes(Qd) && Fd.e.set({
        showDebugOverlay: !Fd.e.get("showDebugOverlay")
      })
    }
  },
  38082: (dd, Od, md) => {
    md.d(Od, {
      b: () => od,
      c: () => Qd,
      g: () => Nd,
      i: () => td
    });
    var Wd = md(405),
      Fd = md(744),
      Rd = md(749),
      Xd = md(46);
    const Kd = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      hd = "playSessionGameNameWithVariation",
      vd = "wasMatchmakePlayer";

    function Qd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xd.o;
      (0, Rd.g)(dd, Kd)
    }

    function td() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xd.o).setItem(vd, !0)
    }

    function od() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xd.o;
      return (0, Rd.c)(dd, Kd)
    }

    function Nd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xd.o;
      const md = (0, Rd.c)(Od, Kd),
        Qd = function(dd) {
          const Od = dd.getItem(hd);
          return "string" !== typeof Od ? null : Od
        }(Od),
        td = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xd.o).getItem(vd)
        }(Od);
      let od;
      return od = null !== md && null !== Qd && (0, Rd.d)(Od, Kd) && function(dd, Od, md) {
          const Fd = (0, Wd.Gb)(dd),
            Rd = (0, Wd.Gb)(Od),
            Xd = (0, Wd.Bb)(dd),
            Kd = (0, Wd.Bb)(Od);
          return !(Fd !== Rd || !md) || Fd === Rd && Xd === Kd
        }(Qd, dd, td) ? md : (0, Fd.f)(), (0, Rd.h)(Od, Kd, od), Od.setItem(hd, dd),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xd.o).removeItem(vd)
        }(Od), od
    }
  },
  38074: (dd, Od, md) => {
    md.d(Od, {
      d: () => gd,
      g: () => wd
    });
    var Wd = md(1122),
      Fd = md(231),
      Rd = md(399),
      Xd = md(708),
      Kd = md(405),
      hd = md(1128),
      vd = md(732),
      Qd = md(763),
      td = md(5180),
      od = md(107),
      Nd = md(151),
      qd = md(1890),
      Hd = md(127),
      yd = md(38082),
      bd = md(46),
      Td = md(747),
      pd = md(711),
      Yd = md(38087);

    function gd() {
      var dd, Od;
      return [...null !== (dd = navigator.languages) && void 0 !== dd ? dd : [null !== (Od = navigator.language) && void 0 !== Od ? Od : "none"], "EN-gb"]
    }

    function wd(dd, Od, md, wd, Ed) {
      const Jd = (0, Wd.k)(Od) ? (0, Wd.p)(Od) : null,
        Ud = dd.isLoggedIn() && void 0 !== (0, Fd.b)(Rd.k, Nd.siteUsed) ? (0, pd.g)() : null,
        xd = {
          cookies: (0, qd.getAllCookiesForGameNameWithVariation)(Od),
          isMobile: (0, od.isMobile)(),
          isUsingCustomGameTexturePack: null !== Jd && Ed(Jd),
          generalCookies: {
            joinDiscord: !!bd.k.getItem("DiscordPressed"),
            newGo: td.c,
            ...dd.getMetricsCookies(),
            trafficCode: wd,
            compliance: od.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, od.getBrowserName)(),
            version: (0, od.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, od.getPlatformType)(),
            deviceType: (0, Hd.e)()
          },
          isLoggedIn: dd.isLoggedIn(),
          lobbyName: md,
          languages: gd(),
          version: Xd.c,
          siteUsed: Nd.siteUsed,
          subsiteUsed: Nd.subsiteUsed,
          playSessionId: (0, yd.g)(Od),
          visitSessionId: (0, Td.getVisitSessionId)(),
          clientReason: vd.y.reason,
          budgetBasis: (0, Yd.i)(),
          ...null !== Qd.o && {
            diagClaim: Qd.o.claimId
          },
          ...null !== Ud && {
            webGpuLoss: Ud
          }
        };
      return null !== Jd && (0, Kd.xc)(Jd) ? (xd.lobbyName = (0, Wd.i)(Jd, (0, Wd.m)(Od), md), {
        roomName: `classic_${hd.e}`,
        joinOptions: xd
      }) : {
        roomName: Od,
        joinOptions: xd
      }
    }
  },
  5725: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd,
      f: () => od,
      j: () => hd,
      k: () => qd,
      n: () => vd,
      r: () => Nd
    });
    var Wd = md(5729),
      Fd = md(5733);
    const Rd = !1,
      Xd = Wd.m.map((dd => {
        const Od = [];
        for (let Rd = 1; Rd <= dd.reach; Rd++) Od.push(Fd.i[(0, Wd.i)(dd.source, Rd)].id);
        const md = "water" === dd.family;
        return Object.freeze({
          name: dd.kind,
          family: dd.family,
          reach: dd.reach,
          stepTicks: md ? 5 : 10,
          slopeDistance: md ? 4 : 2,
          sourceId: Fd.i[dd.source].id,
          fallingId: Fd.i[(0, Wd.e)(dd.source)].id,
          flowingIds: Object.freeze(Od),
          makesSources: md,
          stillId: Fd.i[dd.still].id
        })
      })),
      Kd = new Map;
    for (const Hd of Xd) Kd.set(Hd.sourceId, Object.freeze({
      kind: Hd,
      state: "source",
      distance: 0
    })), Kd.set(Hd.fallingId, Object.freeze({
      kind: Hd,
      state: "falling",
      distance: 0
    })), Hd.flowingIds.forEach(((dd, Od) => {
      Kd.set(dd, Object.freeze({
        kind: Hd,
        state: "flowing",
        distance: Od + 1
      }))
    }));

    function hd(dd) {
      return Xd.find((Od => Od.name === dd))
    }

    function vd(dd) {
      return null === dd ? void 0 : Kd.get(dd)
    }
    const Qd = new Uint8Array(65536);
    for (const [Hd, yd] of Kd) Qd[Hd] = "source" === yd.state ? 1 : 2;
    const td = new Map;
    for (const Hd of Xd) td.set(Hd.stillId, Hd.family);

    function od(dd) {
      var Od, md;
      return null !== (Od = null === (md = vd(dd)) || void 0 === md ? void 0 : md.kind.family) && void 0 !== Od ? Od : Nd(dd)
    }

    function Nd(dd) {
      var Od;
      return null === dd ? null : null !== (Od = td.get(dd)) && void 0 !== Od ? Od : null
    }
    Fd.i.Obsidian.id, Fd.i["Messy Stone"].id;

    function qd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
        let dd = 0;
        for (const Od of Xd) dd = Math.max(dd, Od.stillId, Od.sourceId, Od.fallingId, ...Od.flowingIds);
        return dd
      }() + 1;
      const Od = new Uint8Array(dd);
      for (const md of Xd) {
        const Wd = ("water" === md.family ? 1 : 2) << 4;
        for (const Fd of [md.stillId, md.sourceId, md.fallingId, ...md.flowingIds]) Fd < dd && (Od[Fd] = Wd)
      }
      return Od
    }
  },
  40550: (dd, Od, md) => {
    function Wd(dd, Od, md, Wd, Fd) {
      var Rd = {};
      return Object.keys(Wd).forEach((function(dd) {
        Rd[dd] = Wd[dd]
      })), Rd.enumerable = !!Rd.enumerable, Rd.configurable = !!Rd.configurable, ("value" in Rd || Rd.initializer) && (Rd.writable = !0), Rd = md.slice().reverse().reduce((function(md, Wd) {
        return Wd(dd, Od, md) || md
      }), Rd), Fd && void 0 !== Rd.initializer && (Rd.value = Rd.initializer ? Rd.initializer.call(Fd) : void 0, Rd.initializer = void 0), void 0 === Rd.initializer && (Object.defineProperty(dd, Od, Rd), Rd = null), Rd
    }
    md.d(Od, {
      c: () => Wd
    })
  },
  40546: (dd, Od, md) => {
    function Wd(dd, Od, md, Wd) {
      md && Object.defineProperty(dd, Od, {
        enumerable: md.enumerable,
        configurable: md.configurable,
        writable: md.writable,
        value: md.initializer ? md.initializer.call(Wd) : void 0
      })
    }
    md.d(Od, {
      e: () => Wd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);